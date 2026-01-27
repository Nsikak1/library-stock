<script lang="ts">
  import { onMount } from "svelte";
  import excelSvg from "../../data/excel-icon-old.svg";
  import SpreadSheet from "./spreadsheet/sheetUtils.svelte";
let { firstRun = $bindable(), renderSpreadsheet = $bindable() } = $props();
  let  createButton: HTMLButtonElement;
  const handleClick = () => {
 
      console.log("Clicked");
      const spreadsheet = SpreadSheet.getInstance();
      renderSpreadsheet = true;
      firstRun = false;
      localStorage.setItem("renderSpreadsheet", "true");
    };
</script>

<button onclick={handleClick} bind:this={createButton} class="custom-dashed-border" id="spreadsheet-create-button">
  <img
    id="excel-logo"
    src={excelSvg}
    alt="upload your excel file by drag and drop"
  />
  {#if !renderSpreadsheet}
  <span>Click here to create a new spreadsheet</span>
  {:else}
    <span>Click here to to continue your work</span>
{/if}
</button>

<style>
  #spreadsheet-create-button {
    /* border-bo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 1rem auto;
    height: 60vh;
    background-color: rgb(156, 239, 178);
    color: rgba(0, 0, 0, 0.8);
    position: relative;
    border-radius: 3px;
    border: none;

    & > span:nth-of-type(2) {
      text-decoration: underline;
    }
  }

  :global(.drop-hover) {
    background-color: hsl(136, 83%, 84%) !important;
  }
  #excel-logo {
    --box: 4rem;
    width: var(--box);
    height: var(--box);
  }
  .custom-dashed-border {
    --border-color: hsl(136, 83%, 20%);
    /* 1. Dash patterns for each side */
    background-image:
      linear-gradient(to right, var(--border-color) 70%, transparent 0%),
      /* Top */
        linear-gradient(to right, var(--border-color) 70%, transparent 0%),
      /* Bottom */
        linear-gradient(to bottom, var(--border-color) 70%, transparent 0%),
      /* Left */
        linear-gradient(to bottom, var(--border-color) 70%, transparent 0%); /* Right */

    /* 2. Position each side */
    background-position:
      left top,
      left bottom,
      left top,
      right top;

    /* 3. Repeat along the edge only */
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;

    /* 4. Dash length (40px) and Thickness (2px) */
    background-size:
      20px 2px,
      /* Top: 40px cycle, 2px thick */ 20px 2px,
      /* Bottom: 40px cycle, 2px thick */ 2px 20px,
      /* Left: 2px thick, 40px cycle */ 2px 20px; /* Right: 2px thick, 40px cycle */
  }
</style>
