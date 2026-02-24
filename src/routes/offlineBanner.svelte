<script lang="ts">
  import { onMount } from "svelte";

  // your script goes here
  let offlineBanner: HTMLDivElement;
  let onlineState = $state(true);

  $effect(() => {
    offlineBanner.style.visibility = onlineState ? "hidden" : "visible";
  });

  onMount(async () => {
    async function registerConnectivity() {
      let reg = await navigator.serviceWorker.ready;

      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("Event received from service worker: ", event.data);

        if (event.data.type === "CONNECTION_STATUS")
          onlineState = event.data.isOnline;
      });

      window.addEventListener("online", (event) => {
        console.log("You have come online!");
        // offlineBanner.style.visibility = "hidden";
        reg.active?.postMessage({ type: "CONNECTION_STATUS", isOnline: true });
      });

      window.addEventListener("offline", async (event) => {
        console.log("You have gone offline!");
        // offlineBanner.style.visibility = "visible";
        reg.active?.postMessage({ type: "CONNECTION_STATUS", isOnline: false });
        // Inform user or handle gracefully here
      });

      // Initial check on page load
      if (navigator.onLine) {
        console.log("Currently online on page load");
        reg.active?.postMessage({ type: "CONNECTION_STATUS", isOnline: true });
      } else {
        reg.active?.postMessage({ type: "CONNECTION_STATUS", isOnline: false });

        console.log("Currently offline.on page load");
      }
    }

    await registerConnectivity();
  });
</script>

<div bind:this={offlineBanner} class="offline">
  There is currently no internet connection
</div>

<style>
  .offline {
    display: flex;
    position: absolute;
    width: 100%;
    top: 0;
    background-color: rgba(165, 42, 42, 0.774);
    color: white;
    padding: 3px 0;
    align-items: center;
    z-index: 9999;
    justify-content: center;
    outline: 2px dashed brown;
    visibility: hidden;
  }
</style>
