<script lang="ts">
  import { onMount } from "svelte";
  import {
    clearCell,
    handleIsbnLookup,
    isbnLookup,
    isRequired,
    retrieveIsbnNumber,
    searchISBN,
  } from "./isbn";
  import SpreadSheet from "./spreadsheet.ts";
  import { any } from "zod";

  let { jsonSpreadsheet = $bindable() } = $props();
  let message: any = $state();
  let isbnType: 13 | 10 = $state(13);

  let isbnDetails: any = $state();
  let isAnimating: boolean = $state(false);

  async function handleInput(ev: KeyboardEvent, ) {
    
const eleList = document.querySelectorAll(
      'input[maxlength="1"]'
    ) as NodeListOf<HTMLInputElement>;
              console.log(ev.key);
        
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
        console.log("Next Element,", nextEle);

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
            const isbn = retrieveIsbnNumber(eleList);
            clearCell(eleList);
            console.log("isbn: ", isbn);
            [jsonSpreadsheet, message] = await handleIsbnLookup(
              isbn,
              isbnDetails,
              sheet,
            );
            console.log("Spreadsheet after lookup: ", jsonSpreadsheet);
            break;

          default:
            break;
        }
  }

  function handleTab(ev: KeyboardEvent) {
    ev.preventDefault();
    isbnType = isbnType === 13 ? 10 : 13;
  }

  $effect(() => {

    const isbnNodes = document.querySelectorAll("input[maxlength='1']") as NodeListOf<HTMLInputElement>;

    if(isbnType === 13) {
      const isbnFirstNumber = [9,7,8]

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
  })
   async function handlePaste (ev: ClipboardEvent, eleArr:  HTMLInputElement[]) {
      ev.preventDefault();
      const pastedText = ev.clipboardData?.getData("text") || "";
      console.log("pasted Text Raw: ", pastedText);
      
      const digits = pastedText.replace(/\D/g, "").slice(0, 13); // Extract only digits, max 13

      if (digits.length > 0) {
        isAnimating = true;

        // Fill in the ISBN digits
        for (let i = 0; i < digits.length && i < eleArr.length; i++) {
          eleArr[i].value = digits[i];
          eleArr[i].classList.add("paste-fill");

          // Remove animation class after animation completes
          setTimeout(
            () => {
              eleArr[i].classList.remove("paste-fill");
            },
            300 * (i + 1)
          );
        }

        // If all fields are filled, trigger lookup
        if (digits.length === 13) {
          setTimeout(async () => {
         [jsonSpreadsheet, message] = await handleIsbnLookup(
              digits,
              isbnDetails,
              sheet,
            );
            isAnimating = false;
          }, 300 * digits.length);
        } else {
          isAnimating = false;
        }
      }
    }


  // svelte-ignore non_reactive_update
  let sheet: SpreadSheet;
  $effect(() => {
    if (message) {
      setTimeout(() => {
        message = "";
      }, 3000);
    }
  });

  onMount(() => {
    // searchISBN('0600331318').then(book => console.log(book));

    const res = [ "The Enchanted Garden Legends and Tales about Trees and Flowers", "ISBN-13: 9780600331315", "ISBN-10: 0600331318", "Author: Paul Wilson", "Binding: Hardcover", "Publisher: Hamlyn", "Published: 1976", "", "Sell this book", "Buy or Rent?" ]

   

    const eleList = document.querySelectorAll(
      'input[maxlength="1"]'
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
      })
    );

    // Handle paste event
    window.addEventListener("paste", (event) => {
      handlePaste(
        event as ClipboardEvent,
        eleArr
      );
    }
   );
  });
</script>

<div class="message">{message}</div>

<!-- <input type="number" name="1" id="input-1" maxlength="1" /> -->
<div class="isbn-input">

<div class="isbn-type">ISBN-{isbnType}: </div>
{#each {length: isbnType} as _, num}

 <!-- {#if isbnType === 10 && (num === 1 || num === 4 || num === 9)}<span class="dash">-</span>
 {:else   if isbnType === 13 && (num === 3 || num === 5 || num === 8 || num === 12)}<span class="dash">-</span>
 {/if}  -->
  <input
    onkeydown={handleInput}
    type="text"
    class="input-{num+1}"
    name={num.toString()}
    id="input-{num+1}"
    maxlength="1"
    required
    inputmode="numeric"
  />
{/each}
</div>


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
    color:  #009879;
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
    color: red;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
  }
  .dash {
    font-size: 3rem;
    margin: 0rem 0.3rem 0.2rem;
    /* line-height: 1; */
    color:  #009879;
  }
</style>
