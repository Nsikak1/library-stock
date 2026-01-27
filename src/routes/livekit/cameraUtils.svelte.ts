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

export function getCamera(cameraActiveState: {}) {
  const video = document.getElementById("scanner") as HTMLVideoElement;
  const hi = document.querySelector(".message") as HTMLDivElement;
  const canvas = document.getElementById("video-feed") as HTMLCanvasElement;
  videoSrc = document.createElement("video");
  // videoSrc.style.display = "none";

  videoSrc.addEventListener("loadedmetadata", () => {

     videoSrc.width = videoSrc.videoWidth;
      videoSrc.height = videoSrc.videoHeight;
      videoSrc.style.display = "none";
  offCanvas = new OffscreenCanvas(
        videoSrc.videoWidth,
        videoSrc.videoHeight,
      );

      offContext = offCanvas.getContext("2d")!;


          console.log(`VideoSrc resolution: ${videoSrc.videoWidth}x${videoSrc.videoHeight}`);

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

export function takePicture(format: ReadInputBarcodeFormat[] | undefined = []) {
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
  const hi = document.querySelector(".message") as HTMLDivElement;
  const context = canvas.getContext("2d");

  const timeOut = setInterval(() => {
    if (codeFound || countInterval > 20) clearInterval(timeOut);
    if (offContext && videoSrc.readyState === videoSrc.HAVE_ENOUGH_DATA) {
      offContext.drawImage(videoSrc, 0, 0, offCanvas.width, offCanvas.height);
      console.log("Video source: ", videoSrc);
      console.log("OffCanvas: ", offCanvas)

      
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.style.visibility = "visible";
      const id = setTimeout(() => {
        canvas.style.visibility = "hidden";
        clearTimeout(id);
      }, 500);
      hi.innerText = "Scanning...";
        offCanvas.convertToBlob({ type: "image/png" })
        .then((blob) => {
          countInterval++;
          if (blob) {
            readBarcodes(blob, readerOptions)
              .then((barcodes) => {
                console.log("Barcodes object: ", barcodes);
                if (barcodes && barcodes.length > 0) {
                  const barcodeText = barcodes[0].text;
                  console.log("barcode message: ", barcodeText);
                  hi.innerText = barcodeText;
                  codeFound = true;
                  clearInterval(timeOut);
                  return barcodeText;
                } else {
                  console.log("BarCode not available: ", barcodes);

                  hi.innerText = `No barcode found: ${barcodes.toString()}`;
                }
              })
              .catch((err) => {
                console.error("Error reading barcodes: ", err);
                hi.innerText = "Error scanning barcode";
              });
          }
        }).catch(err => {
          console.error("Can't convert to blob error: ", err);
          
        });
    } else {
      hi.innerText = "Video not ready - try again";
    }
  }, 500);
}
