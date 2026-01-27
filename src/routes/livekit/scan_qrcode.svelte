<script lang="ts">
  import { onMount } from "svelte";
  import { getCamera, takePicture } from "./cameraUtils.svelte";

  let cameraActiveState = $state({
    active: false,
  });
</script>

<main class="camera-container">
  <div class="video-container">
    <video id="scanner" autoplay></video>
    <canvas id="video-feed"></canvas>
  </div>
  <div class="message"></div>
  <div class="button-container">
    {#if !cameraActiveState.active}
      <button onclick={() => getCamera(cameraActiveState)} id="camera-button"
        >Scan the barcode</button
      >
    {:else}
      <button
        onclick={() => {
          console.log("Outside Take Picture: ", takePicture());
        }}
        id="camera-button">Take a picture</button
      >
    {/if}
    <button
      onclick={() => {
        console.log("Clicked");
      }}>Send Message</button
    >
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
  button {
    padding: 1rem 1.4rem;
    border-radius: 7px;
  }
  .video-container {
    display: grid;
    grid-template-areas: "overlap";
    justify-content: center;
    align-items: center;
    margin: 1rem 0;


    & > * {


      grid-area: overlap;
      margin: 0;
      padding: 0;
    }

    canvas {
      z-index: 2;
    }
  }
</style>
