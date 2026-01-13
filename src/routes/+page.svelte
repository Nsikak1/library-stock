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
  {/if}
 <!-- <SpreadSheet /> -->
<!-- <Input /> -->
</div>

<style>

</style>
