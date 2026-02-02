<script lang="ts">
  import {
    Participant,
    RemoteParticipant,
    Room,
    RoomEvent,
  } from "livekit-client";
  import { onMount } from "svelte";
  import { writeBarcode, type WriterOptions } from "zxing-wasm/full";
  import { dev } from "$app/environment";

  let { connected = $bindable() } = $props();
  const room = new Room();

  let qrCodeContainer: HTMLDivElement;
  const qrCodeOptions: WriterOptions = {
    scale: 10,
    format: "QRCode",
  };

  let host: string;

  const roomName = $state("ils-lib-room" + Math.floor(Math.random() * 1000));
  const userId = $state("ils-user-" + Math.floor(Math.random() * 1000));
  const url = "wss://library-xs8xmdmu.livekit.cloud";
  localStorage.setItem("url", url);

  onMount(async () => {
    try {
      // Generate the QR code data
      const qrCode = await writeBarcode(roomName, qrCodeOptions);
      // Clear previous QR code and display the new one (as SVG)
      qrCodeContainer.innerHTML = qrCode.svg;
      localStorage.setItem("room", roomName);
      localStorage.setItem("userId", userId);
      console.log("roomName: ", roomName, "\n", "userId: ", userId);

      host = dev
        ? `${window.location.protocol}//${window.location.hostname}:3000`
        : "https://library-backend-wbdw.onrender.com";

      const res = await fetch(
        `${host}/livekit/token?room=${encodeURIComponent(roomName)}&userId=${encodeURIComponent(userId)}`,
      );
      
      const data = await res.json();
      const token = data.token;
      if (token) localStorage.setItem("token", token);

      // Register event listeners BEFORE connecting
      room.on(RoomEvent.Connected, () => {
        console.log("Room Connected successfully");
        console.log("Room state:", room.state);
        console.log("Local participant:", room.localParticipant?.identity);
      });

      room.on(RoomEvent.ParticipantConnected, (participant: RemoteParticipant) => {
        console.log(`Participant ${participant.identity} connected`);
        console.log("Participant details:", participant);
        connected = true;
        window.location.assign("/spreadsheet");
      });

      // room.on(RoomEvent.co, () => {
      //   console.error("Connection lost to room");
      // });

      room.on(RoomEvent.Disconnected, () => {
        console.warn("Disconnected from room");
      });

      room.on(RoomEvent.ParticipantDisconnected, (participant: RemoteParticipant) => {
        console.log(`Participant ${participant.identity} disconnected`);
      });

      console.log("Attempting to connect with token:", token?.substring(0, 20) + "...");
      console.log("Room URL:", url);
      await room.connect(url, token);
      console.log("Connection attempt completed");
    } catch (error) {
      console.error("Error generating QR code:", error);
      qrCodeContainer.innerHTML = `<p>Error generating QR code.</p> ${error}`;
    }
  });

</script>

<main class="container">
  <h1 class="instruction">Please scan the QrCode with your Phone</h1>

  <div aria-controls="button" bind:this={qrCodeContainer} class="qrcode"></div>
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
