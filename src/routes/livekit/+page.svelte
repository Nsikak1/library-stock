<script lang="ts">
  import { Room, RoomEvent } from "livekit-client";
  import { onMount } from "svelte";
  import { writeBarcode } from "zxing-wasm";
  import QrCode from "./generate_qrcode.svelte";
  import ScanQrCode from './scan_qrcode.svelte';
  import { prepareZXingModule } from "zxing-wasm/full";
  import { resolve } from '$app/paths';

  let TransferState = $state("");
  const room = new Room();
  let chat: HTMLPreElement;
  let input: HTMLInputElement;




  async function join() {
    const user = "user-" + Math.floor(Math.random() * 1000);
    const roomName = "text-room";

    const res = await fetch(
      `http://localhost:3000/livekit/token?room=${encodeURIComponent(roomName)}&userId=${encodeURIComponent(user)}`,
    );
    const data = await res.json();
    const token = data.token;
    // console.log("token: ", data, typeof token);
    await room.connect("wss://library-xs8xmdmu.livekit.cloud", token);
  }

  // room.on(RoomEvent.DataReceived, (payload, participant) => {
  //   const msg = new TextDecoder().decode(payload);
  //   chat.textContent += `${participant?.identity}: ${msg}\n`;
  // });

  // function send() {
  //   room.localParticipant.publishData(new TextEncoder().encode(input.value), {
  //     reliable: true,
  //   });
  //   input.value = "";
  // }

  onMount( async () => {

        // Call this once at the start of your application
      prepareZXingModule({
        fireImmediately: true,
        // equalityFn: Object.is,
        overrides: {
          locateFile: (path: string, prefix: string) => {
            if (path.endsWith(".wasm")) {
              // Return the local path relative to your web root
              console.log("Path: ", path);

              return (resolve(`/` ) + path);
            }
            console.log(`Prefix: ${prefix} \n
    Path: ${path}`);

            return prefix + path;
          },
        },
      });





  }
  


  )
</script>

{#if TransferState}
  {#if TransferState === "receive"}
    <QrCode />
  {:else}
    <ScanQrCode />
  {/if}

  {:else}
  <div class="choose-action">
  <button onclick={() => (TransferState = "receive")} id="receive"
    >Receive Isbn from Phone</button
  >
  <button onclick={() => (TransferState = "send")} id="send">Send Isbn from phone</button>
</div>

{/if}


<!-- <h2>LiveKit Text Chat</h2>

<input bind:this={input} id="msg" placeholder="message" />
<button onclick={send} id="send">Send</button>

<pre bind:this={chat} id="chat"></pre> -->

<style>
  .choose-action {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    /* width: 80vw;  */

    button {
      padding: 1rem 1.4rem;
      color: white;
      border-radius: 8px;
      height: 10rem;
      /* width: 90%; */

      &#receive {
        background-color: hsla(255, 99%, 36%, 0.752);
      }

      &#send {
        background-color: rgba(1, 183, 1, 0.752);
      }
    }
  }
</style>
