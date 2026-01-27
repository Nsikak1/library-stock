<script lang="ts">
  import { readBarcodes, type ReaderOptions } from "zxing-wasm/reader";
  import { writeBarcode, type WriterOptions } from "zxing-wasm";

  import { onMount } from "svelte";
  // import { io } from "socket.io-client";

  let inputEle: HTMLInputElement;
  let qrEle: HTMLDivElement;
  let message = $state("");
  const constraints = {
    video: {
      facingMode: "environment",
    },
  };
  const readerOptions: ReaderOptions = {
    tryHarder: true,
    //   formats: ["QRCode"],
    maxNumberOfSymbols: 1,
  };

  const writerOptions: WriterOptions = {
    format: "QRCode",
    scale: 3,
  };

  const qrCode = writeBarcode("Hello World", writerOptions);

  function getCamera(event: Event) {
    const video = document.getElementById("scanner") as HTMLVideoElement;

    navigator.mediaDevices
      .getUserMedia({ video: constraints.video, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.error(`An error occurred ${err}`));
  }

  function takePicture() {
    const video = document.getElementById("scanner") as HTMLVideoElement;
    const canvas = document.getElementById("video-feed") as HTMLCanvasElement;
    const hi = document.querySelector(".hi") as HTMLDivElement;
    const context = canvas.getContext("2d");

    if (context && video.readyState === video.HAVE_ENOUGH_DATA) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      hi.innerText = "Scanning...";

      canvas.toBlob((blob) => {
        if (blob) {
          readBarcodes(blob, readerOptions)
            .then((barcodes) => {
              console.log("Barcodes found: ", barcodes);
              if (barcodes && barcodes.length > 0) {
                const barcodeText = barcodes[0].text;
                console.log("barcode message: ", barcodeText);
                hi.innerText = barcodeText;
              } else {
                hi.innerText = "No barcode found";
              }
            })
            .catch((err) => {
              console.error("Error reading barcodes: ", err);
              hi.innerText = "Error scanning barcode";
            });
        }
      }, "image/png");
    } else {
      hi.innerText = "Video not ready - try again";
    }
  }
  onMount(async () => {
    try {
      const writerOpt: WriterOptions = {
        format: "QRCode",
        scale: 5, // Scale factor to make the QR code larger
        // margin: 1 // Quiet zone margin
      };

      // Generate the QR code data
      const writeOutput = await writeBarcode("text", writerOpt);
      // Clear previous QR code and display the new one (as SVG)
      qrEle.innerHTML = writeOutput.svg;
    } catch (error) {
      console.error("Error generating QR code:", error);
      qrEle.innerHTML = "<p>Error generating QR code.</p>";
    }
  });
</script>

<div bind:this={qrEle} class="qr-code"></div>

<main class="camera-container">
  <video id="scanner" width="400" height="320" autoplay></video>
  <button onclick={getCamera} id="camera-button">Scan the barcode</button>
  <button onclick={takePicture} id="camera-button">Take a picture</button>
  <canvas id="video-feed" width="400" height="320"></canvas>
  <div class="hi">Hi</div>

  <input
    bind:this={inputEle}
    id="send-message"
    bind:value={message}
    type="text"
  />
  <button
    onclick={() => {
      console.log("Clicked");
    }}>Send Message</button
  >

  <!-- <img src={await qrCode} alt="Generated QR Code" /> -->
</main>

<style>
</style>
