<script lang="ts">
  import { onMount } from "svelte";
  import SpreadSheet from "./spreadsheet/sheetUtils.svelte";

  type IAccessionType = "ILS" | "OLD";
  let {
    accessionInput = $bindable(),
    isbnFound = $bindable(),
    message = $bindable(),
  } = $props();
  let accessionType: IAccessionType = $state("OLD");

  onMount(() => {
    const timeOut = setTimeout(() => {
      accessionInput.focus();
      const sheet = SpreadSheet.getInstance();
      const index = sheet.findRowIndexByIsbn(isbnFound.isbn);
      const row = sheet.getRowElementByIndex(index);
      console.log("index and row: ", index, " ", row);

      let content = row.firstElementChild?.textContent + ",";
      console.log("Remounted");

      if (content.startsWith("N/A")) {
        accessionInput.value = "";
      } else {
        accessionInput.value = content;
      }
      clearTimeout(timeOut);
    }, 300);
  });

  function accessionChange(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;

    switch (event.key) {
      case "Tab":
        event.preventDefault();
        accessionType = accessionType === "OLD" ? "ILS" : "OLD";

        if (!(target.value === "")) {
          if (accessionType === "OLD") {
            if (target.value.endsWith(",ILS-SR-"))
              target.value = target.value.replace(",ILS-SR-", "");
            if (target.value.endsWith("ILS-SR-"))
              target.value = target.value.replace("ILS-SR-", "");
            if (target.value === "") return;
            target.value += ",";
          } else {
            target.value = target.value.replace(",", ",ILS-SR-");
          }
        } else {
          if (accessionType === "OLD") {
            if (target.value.endsWith(",ILS-SR-"))
              target.value = target.value.replace(",ILS-SR-", "");
          } else {
            if (target.value === "") {
              target.value = "ILS-SR-";
            } else {
              target.value = ",";
            }
          }
        }

        console.log(
          "last string removed ",
          target.value.substring(0, target.value.length - 1),
        );
        break;
      case " ":
        event.preventDefault();
        target.value += "()";
        const cursorPosition = target.value.length - 1;
        target.focus();
        target.setSelectionRange(cursorPosition, cursorPosition);

        break;

      case "Enter":
        event.preventDefault();
        const sheet = SpreadSheet.getInstance();
        let saveAccession: string;
        if (accessionType === "OLD" && target.value.endsWith(","))
          saveAccession = target.value.substring(0, target.value.length - 1);
        else if (accessionType === "ILS" && target.value.endsWith(",ILS-SR-"))
          saveAccession = target.value.substring(
            0,
            target.value.length - ",ILS-SR-".length,
          );
        else saveAccession = target.value;
        message = sheet.updateSpreadsheet(isbnFound.isbn, saveAccession!);
        isbnFound.value = false;

      default:
        break;
    }
  }
</script>

<div class="isbn-input">
  <div class="isbn-type">Accession No:</div>
  <span class="isbn-type" id="accessionType"
    >{accessionType === "OLD" ? "" : "ILS-SR-"}</span
  >
  <input
    bind:this={accessionInput}
    onkeydown={accessionChange}
    type="text"
    name="accession"
    id="accession-input"
  />
</div>

<style>
  #accession-input {
    width: 30ch;
    font-size: large;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 0.2rem 0;
    transition: all 0.2s ease;
  }
</style>
