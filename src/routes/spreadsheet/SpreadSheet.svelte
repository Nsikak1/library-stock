<script lang="ts">
  import { onMount } from "svelte";
  import SpreadSheet, { labels } from "./sheetUtils.svelte.ts";
  import { spreadsheetState } from "./sheetUtils.svelte.ts";
  import { db, type ISpreadsheetData } from "../db.ts";

  let sheet: SpreadSheet;
  let tableBody: HTMLElement;

  onMount(async () => {
    sheet = SpreadSheet.getInstance();
    const data = await sheet.loadFromDatabase();
    sheet.renderSpreadsheet();

    tableBody.addEventListener("dblclick", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const activeRow = target.closest("tr") as HTMLTableRowElement;
      const rowIsbn = activeRow.childNodes[2].textContent;
      const accessionCell = activeRow.childNodes[0] as HTMLTableCellElement;

      // Remove any existing blur listeners to prevent duplicates
      const clonedCell = accessionCell.cloneNode(true) as HTMLTableCellElement;
      accessionCell.parentNode?.replaceChild(clonedCell, accessionCell);
      const newAccessionCell = activeRow.childNodes[0] as HTMLTableCellElement;

      newAccessionCell.contentEditable = "true";
      if (newAccessionCell.textContent === "N/A") {
        newAccessionCell.textContent = "\u200B";
        newAccessionCell.focus();
      } else {
        newAccessionCell.focus();
        const range = document.createRange();
        range.selectNodeContents(newAccessionCell);
        range.collapse(false);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }

      newAccessionCell.addEventListener(
        "blur",
        () => {
          newAccessionCell.contentEditable = "false";
          if (newAccessionCell.textContent == "\u200B") {
            newAccessionCell.textContent = "N/A";
          }

          sheet.updateSpreadsheet(rowIsbn!);
          sheet.renderSpreadsheet();
          const dbIndex = db.spreadsheets.update(rowIsbn as unknown as ISpreadsheetData, {
            accession: newAccessionCell.textContent,
          });
          console.log("dbIndex: ", dbIndex);
        },
        { once: true },
      );

      sheet.renderSpreadsheet();
      console.log("Real Target: ", target);
      console.log("Row chosen: ", target.closest("tr"));
      console.log(rowIsbn);
    });

 const timeOut = setTimeout(() => {
    sheet.scrollToView();
    clearTimeout(timeOut);
  }, 500);
  
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

    <tbody bind:this={tableBody}>
      {#each spreadsheetState.data as row}
        <tr>
          {#each Object.entries(row) as [_, cellValue]}
            <td>{cellValue}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>


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
      line-height: 1.5;
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
    color: hsl(168, 50%, 35%);
    /* font-weight: bold; */
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

  :global(td[contenteditable="true"]) {
    outline: 2px solid #009879;
    outline-offset: -1px;
    min-height: 1.5em; /* Match your line-height */
  }

  :global(td[contenteditable="true"]:empty::before) {
    content: "\200b"; /* Zero-width space to maintain height */
  }
</style>
