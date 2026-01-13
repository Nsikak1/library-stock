<script lang="ts">
  import { onMount } from "svelte";
  import {
    clearCell,
    handleIsbnLookup,
    isbnLookup,
    isRequired,
    retrieveIsbnNumber,
  } from "./isbn";
  import SpreadSheet from "./spreadsheet.ts";

  let { jsonSpreadsheet = $bindable() } = $props();
  let message: any = $state();

  let isbnDetails: any = $state();
  let isAnimating: boolean = $state(false);

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
    const eleList = document.querySelectorAll(
      'input[maxlength="1"]'
    ) as NodeListOf<HTMLInputElement>;
    eleList[0].focus();
    const eleArr = [...eleList];
    sheet = SpreadSheet.getInstance();
    // jsonSheet =  sheet.getJsonSpreadsheet()!;

    eleList.forEach((ele) =>
      ele.addEventListener("keydown", async (ev: KeyboardEvent) => {
        const num = parseInt(ev.key);
        const currElem = ev.target as HTMLInputElement;
        const index = +eleArr.indexOf(currElem);
        const isBackspace = ev.key === "Backspace";
        const nextEle = eleList.item(index + 1);
        const prevEle = eleList.item(index - 1);
        currElem.classList.remove("required");

        ev.preventDefault();

        if (isBackspace) {
          currElem.value = "";
          if (prevEle) prevEle.focus();
          return;
        }
        if (!isNaN(num)) {
          if (currElem.value == "") {
          }
          currElem.value = ev.key;
          if (nextEle) nextEle.focus();
        }
        switch (ev.key) {
          case "ArrowLeft":
            if (prevEle) prevEle.focus();

            break;

          case "ArrowRight":
            if (nextEle) nextEle.focus();

            break;

          case "ArrowUp":
            if (prevEle) prevEle.focus();
            break;

          case "ArrowDown":
            if (nextEle) nextEle.focus();
            break;

          case "Enter":
            if (!isRequired(eleList)) return;
            const isbn = retrieveIsbnNumber(eleList);
            clearCell(eleList);
            console.log("isbn: ", isbn);
             jsonSpreadsheet = await handleIsbnLookup(isbn, isbnDetails, sheet, message);
            break;

          default:
            break;
        }
      })
    );

    eleList.forEach((ele) =>
      ele.addEventListener("focus", (ev: FocusEvent) => {
        const currElem = ev.target as HTMLInputElement;
        const value = currElem.value;
        currElem.value = "";
        currElem.value = value;
      })
    );

    // Handle paste event
    document.addEventListener("paste", async (ev: ClipboardEvent) => {
      ev.preventDefault();
      const pastedText = ev.clipboardData?.getData("text") || "";
      const digits = pastedText.replace(/\D/g, "").slice(0, 13); // Extract only digits, max 13
      
      if (digits.length > 0) {
        isAnimating = true;
        
        // Fill in the ISBN digits
        for (let i = 0; i < digits.length && i < eleArr.length; i++) {
          eleArr[i].value = digits[i];
          eleArr[i].classList.add("paste-fill");
          
          // Remove animation class after animation completes
          setTimeout(() => {
            eleArr[i].classList.remove("paste-fill");
          }, 300 * (i + 1));
        }

        // If all fields are filled, trigger lookup
        if (digits.length === 13) {
          setTimeout(async () => {
                        jsonSpreadsheet = await handleIsbnLookup(parseInt(digits), isbnDetails, sheet, message);

            
            
            isAnimating = false;
          }, 300 * digits.length);
        } else {
          isAnimating = false;
        }
      }
    });
  });
</script>

<div class="message">{message}</div>

<!-- <input type="number" name="1" id="input-1" maxlength="1" /> -->
<div class="isbn-input">
  <input
    type="text"
    class="input-1"
    name="1"
    id="input-1"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-2"
    name="2"
    id="input-2"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-3"
    name="3"
    id="input-3"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-4"
    name="4"
    id="input-4"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-5"
    name="5"
    id="input-5"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-6"
    name="6"
    id="input-6"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-7"
    name="7"
    id="input-7"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-8"
    name="8"
    id="input-8"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-9"
    name="9"
    id="input-9"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-10"
    name="10"
    id="input-10"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-11"
    name="11"
    id="input-11"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-12"
    name="12"
    id="input-12"
    maxlength="1"
    required
    inputmode="numeric"
  /><input
    type="text"
    class="input-13"
    name="13"
    id="input-13"
    maxlength="1"
    required
    inputmode="numeric"
  />
</div>

<style>
  .isbn-input {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
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
</style>
