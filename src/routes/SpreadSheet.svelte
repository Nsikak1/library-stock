<script lang="ts">
  import { onMount } from "svelte";
  import SpreadSheet from "./spreadsheet.ts";

  let {jsonSpreadsheet = $bindable()} = $props();

  const message = $state("");
  let sheet: SpreadSheet;

              const labels = [
                "ACCESSION NUMBER",
                "BOOK NAME",
                "ISBN NUMBER",
                "BOOK TYPE",
                "AUTHOR",
                "PUBLISHED DATE",
                "NUM OF PAGES",
                "IMAGE LINKS",
                "LANGUAGE",
              ];
  
  onMount(() => {
    console.log("mounted");
    sheet = SpreadSheet.getInstance();
  });

  $effect(() => {
    if (jsonSpreadsheet && jsonSpreadsheet.length > 0) {
      // Use setTimeout to ensure DOM has updated
      setTimeout(() => {
        const lastTr = document.querySelector("tbody tr:last-of-type");
        lastTr?.scrollIntoView({ behavior: "smooth", block: "end" });
        console.log("Updated");
      }, 0);
    }
  });
  
</script>

<div class="isbn-details">
  <table>
    <thead>
      <tr>
        {#each labels as label}
          <th>{label}</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each jsonSpreadsheet as row}
        <tr>
          {#each Object.entries(row) as [_, cellValue]}
            <td>{cellValue}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="message">{message}</div>

<button
  onclick={() => sheet!.DownloadSpreadSheet.call(sheet)!}
  class="download-excel">Download Excel Sheet</button
>

<style>
  .isbn-details {
    height: 40vh;
    overflow-y: auto;
    position: relative;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
      border-radius: 4px 4px 0 0;
    }

    thead {
      position: sticky;
      top: 0;
      z-index: 2;
    }
    th,
    td {
      padding: 12px 15px;
    }
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  tbody tr:hover {
    color: #009879;
  }

  .message {
    color: red;
    margin-top: 1rem;
    font-weight: bold;
  }

  .download-excel {
    margin: 1rem auto 0;
    display: block;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #009879;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }

  .download-excel:hover {
    background-color: #007f63;
  }
</style>
