<script lang="ts">
  import { onMount } from "svelte";
  import { getCamera, takePicture } from "./cameraUtils.svelte";
  import { Room, RoomEvent } from "livekit-client";
  import { dev } from "$app/environment";

  let cameraActiveState = $state({
    active: false,
  });
  let scannedValue = $state({ value: "" });
  let roomJoined: boolean = false;
  let message: HTMLDivElement;
  let room = new Room();
  const roomName = "ils-lib-room" + Math.floor(Math.random() * 1000);
  const userId = "ils-user-" + Math.floor(Math.random() * 1000);
  const url = "wss://library-xs8xmdmu.livekit.cloud";
  let host: string;

 

  onMount(() => {
    window.localStorage.setItem("hasConnected", "false");
    host = dev
      ? `${window.location.protocol}//${window.location.hostname}:3000`
      : "https://library-backend-wbdw.onrender.com";
  });

    console.log("Dev is active?: ", dev);
    
   room.on(RoomEvent.Connected, () => {
    console.log("Room Conneceted");
    if (message) message.innerText = "Joined room";
  });



  $effect(() => {
    if (scannedValue.value && !roomJoined) {
      console.log("in Scanned Value: ", scannedValue);

      const fetchRes = fetch(
        `${host}/livekit/token?room=${encodeURIComponent(scannedValue.value)}&userId=${encodeURIComponent(userId)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          console.log("Token: ", token);
          room.connect(url, token).then((name) => {
            roomJoined = true;
            window.localStorage.setItem("url", url);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("hasConnected", "true");
            console.log("Connected to the room: ", name);
          });
        })
        .catch((error) => {
          console.log("Cannot Join room: ", error);
        });
    } else {
      if (!roomJoined || !room) {
        console.log("Not connected to room");
        return;
      }
      const messageToSend = scannedValue.value;
      if (!messageToSend.trim()) {
        console.log("No message to send");
        return;
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(messageToSend);
      room.localParticipant.publishData(data, { reliable: true });
      console.log("Sent text:", messageToSend);
      // messageToSend = ""; // Clear after sending
    }
  });
</script>

<main class="camera-container">
  <div class="video-container">
    <video id="scanner" autoplay></video>
    <canvas id="video-feed"></canvas>
  </div>
  <div bind:this={message} class="message"></div>
  <div class="button-container">
    {#if !cameraActiveState.active}
      <button onclick={() => getCamera(cameraActiveState)} id="camera-button"
        >Scan the barcode</button
      >
    {:else}
      <button
        onclick={async () => {
          await takePicture(scannedValue);

          console.log("Outside Take Picture: ", scannedValue);
        }}
        id="camera-button">Take a picture</button
      >
    {/if}
    <button
      onclick={async () => {
        if (window.localStorage.getItem("hasConnected") === "true") {
          await room.connect(url, localStorage.getItem("token")!);
          if (message) message.innerText = "Reconnected to room";
        }
      }}>Reconnect</button
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
