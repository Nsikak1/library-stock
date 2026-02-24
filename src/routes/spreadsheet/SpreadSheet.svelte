<script lang="ts">
  import { onMount } from "svelte";
  import SpreadSheet, { labels } from "./sheetUtils.svelte.ts";
  import { spreadsheetState, handleContextMenu } from "./sheetUtils.svelte.ts";
  import { db, type ISpreadsheetData } from "../db.ts";
  import { bookDetails } from '../globalState.svelte.ts'

  let sheet: SpreadSheet;
  let tableBody: HTMLElement;
  let contextMenu: HTMLDivElement;
  let clickTimer: NodeJS.Timeout;
 async function showBookDetails(event: MouseEvent) {

  console.log("event.detail: ", event.detail);
  
  if (event.detail === 2){ 
    console.log('Clearing Timer: ');
    
    clearTimeout(clickTimer)
    return;
  }
  else {
   clickTimer = setTimeout(async () => {


    console.log(event);
    const target = event.target as HTMLTableCellElement;
    const isbn = target.parentElement?.querySelector('.isbn')?.textContent;

    console.log("isbn from click: ", isbn);
    
    
  const data = await db.spreadsheets.where('isbn').equals(isbn!).first();
  if (data){ bookDetails.activeView = true;
    bookDetails.data = data;
  }
  console.log(data);
    
    clearTimeout(clickTimer);
  }, 200)

}

    
  }

  function handleUpdate(
    newAccessionCell: HTMLTableCellElement,
    rowIsbn: string,
  ) {
    newAccessionCell.contentEditable = "false";
    if (newAccessionCell.textContent == "\u200B") {
      newAccessionCell.textContent = "N/A";
    }

    sheet.updateSpreadsheet(rowIsbn!);
    sheet.renderSpreadsheet();
    db.spreadsheets.where("isbn").equals(rowIsbn!).modify({
      accession: newAccessionCell.textContent,
    });
  }
  onMount(async () => {
    sheet = SpreadSheet.getInstance();
    const data = await sheet.loadFromDatabase();
    sheet.renderSpreadsheet();

    tableBody.addEventListener("dblclick", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const activeRow = target.closest("tr") as HTMLTableRowElement;
      const rowIsbn = activeRow.querySelector('td:nth-of-type(3)')!.textContent;
      const accessionCell = activeRow.querySelector('td') as HTMLTableCellElement;
      console.log("activeRow: ", activeRow);
      
      // Remove any existing blur listeners to prevent duplicates
      const clonedCell = accessionCell.cloneNode(true) as HTMLTableCellElement;
      accessionCell.parentNode?.replaceChild(clonedCell, accessionCell);
      const newAccessionCell = activeRow.querySelector('td') as HTMLTableCellElement;
      // const newAccessionCell = accessionCell;
      console.log("newAccessionCell: ", newAccessionCell);
      
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
        () => handleUpdate(newAccessionCell, rowIsbn!),
        { once: true },
      );

      const onkeyDown = (e: KeyboardEvent) => {
        console.log(e.key);

        if (e.key === "Enter") {
          e.preventDefault();
          console.log("Key down Pressed");

          handleUpdate(newAccessionCell, rowIsbn!);
          newAccessionCell.removeEventListener("keydown", onkeyDown);
        }
      };

      newAccessionCell.addEventListener("keydown", onkeyDown);

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
          <th class="table-label">{label}</th>
        {/each}
      </tr>
    </thead>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <tbody oncontextmenu={handleContextMenu} onclick={showBookDetails}  bind:this={tableBody}>
      {#each spreadsheetState.data as row}
        <tr class="table-row">
          {#each Object.entries(row) as [i, cellValue]}
          {#if i === "image_links"}
            <td class={i}>
              <a href={cellValue as string} target="_blank" >{cellValue}</a>
              </td>
          {/if}
          {#if i !== "image_links"}
            <td class={i}>{cellValue}</td>
          {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- <button
  onclick={() => sheet!.DownloadSpreadSheet.call(sheet)!}
  class="download-excel">Download Excel Sheet</button
> -->

<div bind:this={contextMenu} id="context_menu" class="hidden">
  <ul>
    <li id="delete_row">Delete Row</li>
  </ul>
</div>

<style>
  .isbn-details {
    /* height: auto; */
    max-height: 65vh;
    overflow-y: auto;
    position: relative;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
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

  :global(.download-excel) {
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

  #context_menu {
    display: block; /* Hide the menu by default */
    position: absolute; /* Position it at the cursor location */
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    /* padding: 10px; */
    list-style: none;
    z-index: 1000; /* Ensure it's on top of other elements */
    cursor: pointer;
  }

  .hidden {
    visibility: hidden;
  }
  #context_menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #context_menu li {
    display: block;
    padding: 5px 10px;
    text-decoration: none;
    color: #333;
  }

  #context_menu li:hover {
    background-color: #f0f0f0;
    background-color: hsl(0, 80%, 40%);
    color: white;
  }
  :global(.image_links) {
    max-width: 20ch;
    overflow: hidden;
    text-wrap: nowrap;
  }
</style>
