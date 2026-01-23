<script lang="ts">
  import { Room, RoomEvent } from "livekit-client";
  import { onMount } from "svelte";

  const room = new Room();
  let chat: HTMLPreElement;
  let input: HTMLInputElement;

  async function join() {
    const user = "user-" + Math.floor(Math.random() * 1000);
    const roomName = "text-room";

    const res = await fetch(
  `http://localhost:3000/livekit/token?room=${encodeURIComponent(roomName)}&userId=${encodeURIComponent(user)}`
    );
    const data = await res.json();
    const token = data.token;
    // console.log("token: ", data, typeof token);
    await room.connect("wss://library-xs8xmdmu.livekit.cloud", token);
  }

  room.on(RoomEvent.DataReceived, (payload, participant) => {
    const msg = new TextDecoder().decode(payload);
    chat.textContent += `${participant?.identity}: ${msg}\n`;
  });

  function send() {
    room.localParticipant.publishData(new TextEncoder().encode(input.value), {
      reliable: true,
    });
    input.value = "";
  }

onMount(  join
)

</script>

<h2>LiveKit Text Chat</h2>

<input bind:this={input} id="msg" placeholder="message" />
<button onclick={send} id="send">Send</button>

<pre bind:this={chat} id="chat"></pre>
