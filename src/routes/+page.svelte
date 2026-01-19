<script lang="ts">
  import { onMount } from "svelte";
  import Input from "./input.svelte"
  import SpreadSheet from "./SpreadSheet.svelte";
  import FileUpload from "./file-upload.svelte"

  interface President {
    Name: string;
    Index: number;
  }

  let message: string = $state("");
  let presidents: {}[] = $state([]);
  let isbnDetails = $state("");
  let renderSpreadsheet: boolean = $state(false);
    let jsonSpreadsheet = $state<{}[]>([]);


  // svelte-ignore non_reactive_update
  // let sheet: SpreadSheet;

    
</script>

<div>
  {#if renderSpreadsheet}
  <SpreadSheet {jsonSpreadsheet} />
  <Input bind:jsonSpreadsheet={jsonSpreadsheet} />

  {:else }
  <FileUpload bind:renderSpreadsheet={renderSpreadsheet} bind:jsonSpreadsheet={jsonSpreadsheet} />
  <div class="or">OR</div>
  <a class="use-camera" href="camera">Use your camera to add books</a>
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
</style>
