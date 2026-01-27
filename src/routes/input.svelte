<script lang="ts">
  import { onMount } from "svelte";
  import {
    clearCell,
    handleIsbnLookup,
    openLibApi,
    isRequired,
    retrieveIsbnNumber,
    checkDB,
  } from "./isbn";
  import SpreadSheet from "./spreadsheet/sheetUtils.svelte.ts";
  import { db, type ISpreadsheetData } from "./db.ts";
  // let { jsonSpreadsheet = $bindable() } = $props();
  let { message = $bindable() } = $props();

  let isbnFound = $state({
    value: false,
    isbn: "",
  });
  let isbnType: 13 | 10 = $state(13);

  // let isbnDetails: any = $state();
  let isAnimating: boolean = $state(false);
  // svelte-ignore non_reactive_update
    let accessionInput: HTMLInputElement;

  async function handleSearch() {
    const eleList = document.querySelectorAll(
      'input[maxlength="1"]',
    ) as NodeListOf<HTMLInputElement>;
    isbnFound.isbn  = retrieveIsbnNumber(eleList);
    message = await handleIsbnLookup(isbnFound.isbn);
  }

  async function handleInput(ev: KeyboardEvent) {
    const eleList = document.querySelectorAll(
      'input[maxlength="1"]',
    ) as NodeListOf<HTMLInputElement>;

    const num = parseInt(ev.key);
    const currElem = ev.target as HTMLInputElement;
    // const index = +eleArr.indexOf(currElem);
    const isBackspace = ev.key === "Backspace";
    const nextEle = currElem.nextElementSibling as HTMLInputElement;

    const prevEle = currElem.previousElementSibling as HTMLInputElement;
    currElem.classList.remove("required");

    if (isBackspace) {
      ev.preventDefault();
      if (currElem.value == "") {
        if (prevEle) prevEle.focus();
        return;
      }
      currElem.value = "";
      return;
    }
    if (!isNaN(num)) {
      ev.preventDefault();
      if (currElem.value == "") {
      }
      currElem.value = ev.key;

      if (nextEle) nextEle.focus();
    }
    switch (ev.key) {
      case "Tab":
        handleTab(ev);
        break;
      case "ArrowLeft":
        ev.preventDefault();
        if (prevEle) prevEle.focus();

        break;

      case "ArrowRight":
        ev.preventDefault();
        if (nextEle) nextEle.focus();

        break;

      case "ArrowUp":
        ev.preventDefault();
        if (prevEle) prevEle.focus();
        break;

      case "ArrowDown":
        ev.preventDefault();
        if (nextEle) nextEle.focus();
        break;

      case "Enter":
        ev.preventDefault();
        if (!isRequired(eleList)) return;
        isbnFound.isbn = retrieveIsbnNumber(eleList);
        clearCell(eleList);
        prefillInput();
        const recordExists = await checkDB(isbnFound.isbn);

        // if (recordExists) {
        //   console.log("Record Exists: ", recordExists);
        //   message = `ISBN ${isbn} already exists in the database.`;
        //   return;
        // }
        message = await handleIsbnLookup(isbnFound.isbn);
        // console.log("Spreadsheet after lookup: ", jsonSpreadsheet);
        break;

      default:
        break;
    }
  }

  function prefillInput() {
    const isbnNodes = document.querySelectorAll(
      "input[maxlength='1']",
    ) as NodeListOf<HTMLInputElement>;

    if (isbnType === 13) {
      const isbnFirstNumber = [9, 7, 8];

      for (let ind = 0; ind < 3; ind++) {
        isbnNodes.item(ind).value = isbnFirstNumber[ind].toString();
      }
      // Schedule focus after DOM update
      setTimeout(() => {
        isbnNodes.item(3).focus();
      }, 0);
    }
    if (isbnType === 10) {
      for (let ind = 0; ind < 10; ind++) {
        isbnNodes.item(ind).value = "";
      }
      // Schedule focus after DOM update
      setTimeout(() => {
        isbnNodes.item(0).focus();
      }, 0);
    }
  }

  function handleTab(ev: KeyboardEvent) {
    ev.preventDefault();
    isbnType = isbnType === 13 ? 10 : 13;
  }

  $effect(() => {
    prefillInput();
  });

  async function handlePaste(ev: ClipboardEvent, eleArr: HTMLInputElement[]) {
    ev.preventDefault();
    const pastedText = ev.clipboardData?.getData("text") || "";
    console.log("pasted Text Raw: ", pastedText);

     isbnFound.isbn = pastedText.replace(/\D/g, "").slice(0, 13); // Extract only digits, max 13

    if (isbnFound.isbn.length > 0) {
      isAnimating = true;

      // Fill in the ISBN digits
      for (let i = 0; i < isbnFound.isbn.length && i < eleArr.length; i++) {
        eleArr[i].value = isbnFound.isbn[i];
        eleArr[i].classList.add("paste-fill");

        // Remove animation class after animation completes
        setTimeout(
          () => {
            eleArr[i].classList.remove("paste-fill");
          },
          100 * (i + 1),
        );
      }

      // If all fields are filled, trigger lookup
      if (isbnFound.isbn.length === 13 || isbnFound.isbn.length === 10 || isbnFound.isbn.length === 9) {
        setTimeout(async () => {
          // const recordExists = await checkDB(isbn);
          // if (recordExists) {
          //   console.log("Record Exists: ", recordExists);
          //   message = `ISBN ${isbn} already exists in the database.`;
          //   return;
          // }
          message = await handleIsbnLookup(isbnFound.isbn);
          isAnimating = false;
        }, 200 * isbnFound.isbn.length);
      } else {
        isAnimating = false;
      }
    }
  }

  // svelte-ignore non_reactive_update
  let sheet: SpreadSheet;
  $effect(() => {
    if (message !== "Isbn Found Please Input the accession Number") {
      setTimeout(() => {

        message = "";
      }, 4000);
    }
    else {
      isbnFound.value = true;
      setTimeout(() => {
        accessionInput.value = "";
        accessionInput.focus();
      }, 0);
    }
  });

  onMount(() => {
    prefillInput();

    const eleList = document.querySelectorAll(
      'input[maxlength="1"]',
    ) as NodeListOf<HTMLInputElement>;
    const eleArr = [...eleList];
    sheet = SpreadSheet.getInstance();

    //set cursor at end of input on focus
    eleList.forEach((ele) =>
      ele.addEventListener("focus", (ev: FocusEvent) => {
        const currElem = ev.target as HTMLInputElement;
        const value = currElem.value;
        currElem.value = "";
        currElem.value = value;
      }),
    );

    // Handle paste event
    window.addEventListener("paste", (event) => {
      handlePaste(event as ClipboardEvent, eleArr);
    });
  });
</script>

{#snippet inputBlock(num: number)}
  <input
    onkeydown={handleInput}
    type="text"
    class="input-{num + 1}"
    name={num.toString()}
    id="input-{num + 1}"
    maxlength="1"
    required
    inputmode="numeric"
  />
{/snippet}

<div class="message">{message}</div>

<!-- <input type="number" name="1" id="input-1" maxlength="1" /> -->
  {#if !isbnFound.value}

<div class="isbn-input">
  <div class="isbn-type">ISBN-{isbnType}:</div>
  {#each { length: isbnType } as _, num}
    {@render inputBlock(num)}
    <!-- {#if num === 2 || num === 4 || num === 9}
      <div class="dash">-</div>
    {/if} -->
    {/each}
  </div>
{:else}
<div class="isbn-input">
  <div class="isbn-type">Accession No:</div>
  <input bind:this={accessionInput} type="text" name="accession" id="accession-input" maxlength="20" />
</div>
{/if}

<button onclick={async () =>{ 
  if (isbnFound.value) {
    const accessionNumber = accessionInput.value.trim();
    if (accessionNumber === "") {
      message = "Please enter a valid accession number.";
      return;
    }
    // Update the accession number in the database
   sheet.updateSpreadsheet(isbnFound.isbn, accessionNumber);
    message = `Accession number ${accessionNumber} added for ISBN ${isbnFound.isbn}.`;
    isbnFound.value = false;
              const dbIndex = db.spreadsheets.update(isbnFound.isbn as unknown as ISpreadsheetData, {
            accession: accessionNumber,
          });
          console.log("dbIndex: ", dbIndex);
    // accessionInput.value = "";
  } else {  
    await handleSearch();
  }
}} id="search">{isbnFound.value ? "Update Accession Number" : "Search For ISBN"}</button>

<style>
  .isbn-input {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
  }
  .isbn-type {
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: large;
    color: #009879;
    margin: 0.5rem 1rem 0.2rem 0;
  }
  input[maxlength="1"] {
    /* background-color: red; */
    width: 1ch;
    font-size: large;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 0.2rem 0;
    transition: all 0.2s ease;
  }

  :global(input[maxlength="1"].paste-fill) {
    animation: fillPulse 0.3s ease-out forwards;
  }

  @keyframes fillPulse {
    0% {
      background-color: #fff;
      transform: scale(1);
    }
    50% {
      background-color: #009879;
      color: white;
      transform: scale(1.15);
    }
    100% {
      background-color: #fff;
      color: #000;
      transform: scale(1);
    }
  }

  :global(.required) {
    outline: 1px solid red;
  }
  .message {
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    margin-top: 2rem;
    text-align: center;
    font-weight: bolder;
  }
  .dash {
    font-size: 3rem;
    margin: 0rem 0.3rem 0.2rem;
    /* line-height: 1; */
    color: #009879;
  }

  #search {
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
  #search:hover {
    background-color: #007f63;
  }
  #accession-input {
    width: 10ch;
    font-size: large;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 0.2rem 0;
    transition: all 0.2s ease;
  }
</style>
