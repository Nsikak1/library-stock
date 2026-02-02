<script lang="ts">
  import Spreadsheet from "./SpreadSheet.svelte";
  import Input from "../input.svelte";
  import SpreadSheet from "./SpreadSheet.svelte";
  import { onMount } from "svelte";
  import { Room, RoomEvent } from "livekit-client";
  // your script goes here

  let isbn = $state("");
  let room: Room;

  onMount(async () => {
    room = new Room();
    const userId = window.localStorage.getItem("userId") || "";
    const token = window.localStorage.getItem("token") || "";
    const url = window.localStorage.getItem("url") || "";
    
    try {
      console.log("Token: ", token);
      console.log("URL: ", url);
      await room.connect(url, token);
      console.log("Connected to room");
      
      // Register event listener AFTER successful connection
      room.on(RoomEvent.DataReceived, (payload, participant) => {
        const msg = new TextDecoder().decode(payload);
        console.log("Received Message: ", msg);
        isbn = msg;
      });
    } catch (error) {
      console.log("Can't connect to the server: ", error);
    }
    
    // return () => {
    //   room?.disconnect();
    // };
  });
</script>

<SpreadSheet />
<Input bind:receivedIsbn={isbn} />
