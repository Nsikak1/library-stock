<script lang="ts">
  import { onMount } from "svelte";
  import {
    writeBarcode,
    type WriterOptions,
  } from "zxing-wasm/full";

  let qrCodeContainer: HTMLDivElement;
  const qrCodeOptions: WriterOptions = {
    scale: 10,
    format: "QRCode",
  };

  const room = $state("ils-lib-room" + Math.floor(Math.random() * 1000));
  // const QrCode = await writeBarcode(room, qrCodeOptions)

  onMount(async () => {
    try {

      // Generate the QR code data
      const qrCode = await writeBarcode(room, qrCodeOptions);
      // Clear previous QR code and display the new one (as SVG)
      qrCodeContainer.innerHTML = qrCode.svg;
      console.log(room);
    } catch (error) {
      console.error("Error generating QR code:", error);
      qrCodeContainer.innerHTML = `<p>Error generating QR code.</p> ${error}`;
    }
  });
</script>

<main class="container">
  <h1 class="instruction">Please scan the QrCode with your Phone</h1>

  <div bind:this={qrCodeContainer} class="qrcode"></div>
</main>

<style>
  .container {
    display: flex;
    font-family: "Courier New", Courier, monospace;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: beige;
    height: 100vh;
  }
</style>
