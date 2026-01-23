<script lang="ts">
    import {readBarcodes, type ReaderOptions} from "zxing-wasm/reader";
  import { onMount } from "svelte";
  import { io } from "socket.io-client";

let inputEle: HTMLInputElement;
  let message = $state("");
  const constraints = {
  video: {
    facingMode: "environment"
  }
};
const readerOptions: ReaderOptions = {
  tryHarder: true,
//   formats: ["QRCode"],
  maxNumberOfSymbols: 1,
};


// 1. Connect to the 'chat' namespace
const socket = io("http://localhost:3000/chat", {
  transports: ["websocket"], // Optional: force WebSocket for performance
});

const signalSocket = io("http://localhost:3000/signal", {
    transports: ["websocket"],
});

signalSocket.on("connect", () => {
    console.log(`Connected to the signal server section with client id: ${signalSocket}`);

    console.log(signalSocket);
    
    signalSocket.on("new_message", (data) => {
        console.log(data);
        
    })
    
})

// 2. Listen for connection success
socket.on("connect", () => {
  console.log("Connected with ID:", socket.id);
  
  // Join a specific room immediately after connecting
  socket.emit("join_room", { room: "room-101" });
});

// 3. Listen for incoming messages from the server
socket.on("new_message", (data) => {
  console.log("New message received:", data);
  // Logic to update your UI (e.g., append to a list)
});

// 4. Function to send a message
function sendMessage(text: string) {
  const payload = {
    message: text,
    room: "room-101"
  };
  
  // 'send_message' matches the @SubscribeMessage in NestJS
  signalSocket.emit("send_message", payload, (response) => {
    console.log("signal Server acknowledged:", response);
  });
}





  function getCamera(event: Event) {
       const video = document.getElementById("scanner") as HTMLVideoElement

        navigator.mediaDevices.getUserMedia({ video: constraints.video, audio: false
        }).then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => console.error(`An error occurred ${err}`))
    }

    function takePicture() {
        const video = document.getElementById("scanner") as HTMLVideoElement
        const canvas = document.getElementById("video-feed") as HTMLCanvasElement
        const hi = document.querySelector(".hi") as HTMLDivElement
        const context = canvas.getContext("2d");

        if (context && video.readyState === video.HAVE_ENOUGH_DATA) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            hi.innerText = "Scanning...";
            
            canvas.toBlob((blob) => {
                if (blob) {
                    readBarcodes(blob, readerOptions).then((barcodes) => {
                        console.log("Barcodes found: ", barcodes);
                        if (barcodes && barcodes.length > 0) {
                            const barcodeText = barcodes[0].text;
                            console.log("barcode message: ", barcodeText);
                            hi.innerText = barcodeText;
                        } else {
                            hi.innerText = "No barcode found";
                        }
                    }).catch((err) => {
                        console.error("Error reading barcodes: ", err);
                        hi.innerText = "Error scanning barcode";
                    });
                }
            }, "image/png");
        } else {
            hi.innerText = "Video not ready - try again";
        }
    }
    onMount(() => {
        
      
    })
 
</script>

 
     
<main class="camera-container">

    <video  id="scanner" width="400" height="320" autoplay></video>
    <button onclick={getCamera} id="camera-button">Scan the barcode</button>
    <button onclick={takePicture} id="camera-button">Take a picture</button>
    <canvas id="video-feed" width="400" height="320"></canvas>
    <div class="hi">Hi</div>

    <input bind:this={inputEle} id="send-message" bind:value={message} type="text">
    <button onclick={() => {
        sendMessage(inputEle.value)
    }} >Send Message</button>
</main>

<style>
  
  
</style>