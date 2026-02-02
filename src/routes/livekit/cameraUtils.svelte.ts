import {
  prepareZXingModule,
  type ReaderOptions,
  type ReadInputBarcodeFormat,
} from "zxing-wasm/reader";
import { readBarcodes } from "zxing-wasm/full";

import { onMount } from "svelte";

// let {codeType = $bindable()} = $props();

const constraints = {
  video: {
    facingMode: "environment",
  },
};
let videoSrc: HTMLVideoElement;
let offCanvas: OffscreenCanvas;
let offContext: OffscreenCanvasRenderingContext2D;

export function getCamera(cameraActiveState: { active: boolean }) {
  const video = document.getElementById("scanner") as HTMLVideoElement;
  const hi = document.querySelector(".message") as HTMLDivElement;
  const canvas = document.getElementById("video-feed") as HTMLCanvasElement;
  videoSrc = document.createElement("video");
  // videoSrc.style.display = "none";

  videoSrc.addEventListener("loadedmetadata", () => {
    videoSrc.width = videoSrc.videoWidth;
    videoSrc.height = videoSrc.videoHeight;
    videoSrc.style.display = "none";
    offCanvas = new OffscreenCanvas(videoSrc.videoWidth, videoSrc.videoHeight);

    offContext = offCanvas.getContext("2d")!;

    console.log(
      `VideoSrc resolution: ${videoSrc.videoWidth}x${videoSrc.videoHeight}`,
    );

    const width = video.videoWidth / 2;
    const height = video.videoHeight / 2;
    video.width = width;
    video.height = height;
    canvas.width = width;
    canvas.height = height;
    console.log(`Video resolution: ${width}x${height}`);
  });

  navigator.mediaDevices
    .getUserMedia({ video: constraints.video, audio: false })
    .then((stream) => {
      console.log("Stream Object: ", stream);

      video.srcObject = stream;
      videoSrc.srcObject = stream;
      document.body.appendChild(videoSrc);
      videoSrc.play();
      video.play();

      cameraActiveState.active = true;
    })
    .catch((err) => {
      hi.innerHTML = `An error occurred ${err}`;
      console.error(`An error occurred ${err}`);
    });
}

export async function takePicture(scannedValue: { value: string }) {
  let codeFound = false;
  let countInterval = 0;
  const readerOptions: ReaderOptions = {
    tryHarder: true,
    formats: [],
    // maxNumberOfSymbols: 1,
    // isPure: true,
    tryCode39ExtendedMode: true,
    // tryDenoise: true,
    tryDownscale: true,
    tryRotate: true,
    tryInvert: true,
    downscaleThreshold: 500,
  };

  const video = document.getElementById("scanner") as HTMLVideoElement;
  const canvas = document.getElementById("video-feed") as HTMLCanvasElement;
  const messageDiv = document.querySelector(".message") as HTMLDivElement;
  const context = canvas.getContext("2d");

  return new Promise((resolve, reject) => {
    const timeOut = setInterval(async () => {
      const id = setTimeout(() => {
        canvas.style.visibility = "hidden";
        clearTimeout(id);
      }, 500);

      if (countInterval > 20) {
        clearInterval(id);
        clearInterval(timeOut);
        messageDiv.innerText = "Scan Ended - Try again?";
        reject(new Error("Barcode Scan Timeout after 20 attempts"));
      }
      if (offContext && videoSrc.readyState === videoSrc.HAVE_ENOUGH_DATA) {
        offContext.drawImage(videoSrc, 0, 0, offCanvas.width, offCanvas.height);
        context?.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.style.visibility = "visible";

        messageDiv.innerText = "Scanning...";

        try {
          const blob = await offCanvas.convertToBlob({ type: "image/png" });
          countInterval++;
          if (blob) {
            try {
              const barcodes = await readBarcodes(blob, readerOptions);
              console.log("Barcodes object: ", barcodes);
              if (barcodes && barcodes.length > 0) {
                scannedValue.value = barcodes[0].text;
                console.log("barcode message: ", scannedValue.value);
                messageDiv.innerText = scannedValue.value;
                codeFound = true;
                clearInterval(timeOut);
                return resolve(scannedValue.value);
              } else {
                console.log("BarCode not available: ", barcodes);
                reject(new Error("Barcode not found"));

                messageDiv.innerText = `No barcode found: ${barcodes.toString()}`;
              }
            } catch (error) {
              console.error("Error reading barcodes: ", error);
              messageDiv.innerText = "Error scanning barcode";
              reject(new Error("Error scanning barcode"));
            }
          }
        } catch (error) {
          console.log("Cannot Generate image form canvas");
          reject(new Error("Cannot Generate Image"));
        }
      } else {
        messageDiv.innerText = "Video not ready - try again";
      }
    }, 500);
  });
}
