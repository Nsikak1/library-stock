<script lang="ts">
  import { onMount } from "svelte";
  import { browser, dev } from "$app/environment";
  import Input from "./input.svelte"
  import SpreadSheet from "./spreadsheet/SpreadSheet.svelte";
  import FileUpload from "./file-upload.svelte";
  import CreateSpreadSheet from "./createSpreadsheet.svelte";
  import { db,type ISettings } from "./db";
  import BookView from "./spreadsheet/BookView.svelte";
  import { bookDetails } from "./globalState.svelte";
  import serviceWorkerStr from "../lib/internet?url";

  interface President {
    Name: string;
    Index: number;
  }


  let firstRun: boolean = $state(true);

  // let message: string = $state("");
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
  



  </script>
  
  {#if !firstRun && renderSpreadsheet}
  <div class="container">
    <SpreadSheet />
  <div class="content-wrapper">
    <div class="input-column">
      <Input />
    </div>
    {#if bookDetails.activeView}
    <div class="book-view-column">
      <BookView />
    </div>
    {/if}
  </div>
</div>

  {:else }
  <!-- <FileUpload bind:renderSpreadsheet={renderSpreadsheet} bind:jsonSpreadsheet={jsonSpreadsheet} /> -->
  <CreateSpreadSheet bind:firstRun={firstRun} bind:renderSpreadsheet={renderSpreadsheet} />
  <div class="or">OR</div>
  <a class="use-camera" href="livekit">Use your camera to add books</a>
  {/if}
 <!-- <SpreadSheet /> -->
<!-- <Input /> -->

<style>
:global(body) {
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  justify-items: stretch;
  height: 100vh;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin: 1rem;
}
.input-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.book-view-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 33%;
}

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

</style>
