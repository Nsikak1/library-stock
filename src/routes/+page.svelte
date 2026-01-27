<script lang="ts">
  import { onMount } from "svelte";
  import { browser, dev } from "$app/environment";
  import Input from "./input.svelte"
  import SpreadSheet from "./spreadsheet/SpreadSheet.svelte";
  import FileUpload from "./file-upload.svelte";
  import CreateSpreadSheet from "./createSpreadsheet.svelte";
  import { db,type ISettings } from "./db";

  interface President {
    Name: string;
    Index: number;
  }


  let offline: HTMLDivElement;
  let firstRun: boolean = $state(true);

  let message: string = $state("");
  let presidents: {}[] = $state([]);
  let isbnDetails = $state("");
  let renderSpreadsheet = $state(false);

    if (browser) {
      const storedValue = localStorage.getItem("renderSpreadsheet");
      renderSpreadsheet = storedValue === "true" ? true : false;
    } else if (dev) {
      console.log("Not in browser environment");
      renderSpreadsheet = true;
    }
  


onMount(() => {
  window.addEventListener('online', (event) => {
  console.log("You have come online!");
  // Update UI or re-queue requests here
    offline.style.visibility = "hidden";

});

window.addEventListener('offline', (event) => {
  console.log("You have gone offline!");
  offline.style.visibility = "visible";
  // Inform user or handle gracefully here
});

// Initial check on page load
if (navigator.onLine) {
  console.log("Currently online.");
      offline.style.visibility = "hidden";

} else {
    offline.style.visibility = "visible";

  console.log("Currently offline.");
}
})
</script>

<div>
  <div bind:this={offline} class="offline">There is currently no internet connection</div>
  {#if !firstRun && renderSpreadsheet}
  <SpreadSheet />
  <Input bind:message={message}/>

  {:else }
  <!-- <FileUpload bind:renderSpreadsheet={renderSpreadsheet} bind:jsonSpreadsheet={jsonSpreadsheet} /> -->
  <CreateSpreadSheet bind:firstRun={firstRun} bind:renderSpreadsheet={renderSpreadsheet} />
  <div class="or">OR</div>
  <a class="use-camera" href="livekit">Use your camera to add books</a>
  {/if}
 <!-- <SpreadSheet /> -->
<!-- <Input /> -->
</div>

<style>
  .or {
    text-align: center;
    margin: 1rem 0;
  }
.use-camera {
  --cur-color: rgb(4, 150, 4);
  background-color:  rgb(0, 142, 0);
  color: white;
  padding: 0.6rem 1rem;
  text-decoration: none;
  border: 1px solid currentColor;
  display: flex;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  display: block;

  &:hover {
    background-color: transparent;
    color: var(--cur-color)
  }
}
.offline {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: brown;
  color: white;
  padding: 3px 0;
  align-items: center;
  z-index: 100;
  justify-content: center;
  outline: 2px dashed brown;
  visibility: hidden;
}
</style>
