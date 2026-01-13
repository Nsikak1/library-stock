<script lang="ts">
  import { onMount } from "svelte";
  import excelSvg from "../../data/excel-icon-old.svg";
  import SpreadSheet from "./spreadsheet";

    let {renderSpreadsheet = $bindable(), jsonSpreadsheet = $bindable()} = $props();
        
    async function handleSpreadSheet(file: File) {
         if (!(file?.name.endsWith(".xls") || file?.name.endsWith(".xlsx") || file?.name.endsWith(".csv"))) {
                        console.log("Pasted file is not an Excel file.");
                        return
                    }   
                    console.log("Pasted file: ", file);
                    const fileLink = URL.createObjectURL(file);
                    const instance = await SpreadSheet.init(fileLink);
                    jsonSpreadsheet = [...instance.getJsonSpreadsheet()];
                    renderSpreadsheet = true;
                }
      
    

  onMount(() => {

    // Handle Paste Event
    window.addEventListener("paste", (e) => {
        e.preventDefault();
        if(e.clipboardData?.items) {
            const files = [...e.clipboardData?.items][0]
                // console.log("Pasted Item: ", item);
                
                if (files.kind === "file" ) {
                    const file = files.getAsFile()!;
                   handleSpreadSheet(file)
                }
            }

        }
    )

    // Handle input tag file upload
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput!.addEventListener("change", (event) => {

        event.preventDefault();

        const files = fileInput.files;
        if( files && files.length > 0){
        const file = files[0];
        handleSpreadSheet(file);
        }
                });

    const dropZone = document.getElementById("drop-zone");

    dropZone?.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropZone.classList.add("drop-hover");
    });

    dropZone?.addEventListener("dragleave", (event) => {
      event.preventDefault();
      dropZone.classList.remove("drop-hover");
    });

    dropZone?.addEventListener("drop", (event) => {
      event.preventDefault();
      dropZone.classList.remove("drop-hover");
      const files = event.dataTransfer?.files;
      if (files && files.length > 0) {
       const file = files[0];
       handleSpreadSheet(file);
      }
  });

  });
//   document.addEventListener()
</script>

<label class="custom-dashed-border" id="drop-zone">
  <img
    id="excel-logo"
    src={excelSvg}
    alt="upload your excel file by drag and drop"
  />
  <span>Drag and drop </span>or <span>click to upload file</span>
  <input
    type="file"
    name="spreadsheetInput"
    id="file-input"
    accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xls, .xlsx"
  />
  <progress id="progress-bar" value="0" max="100"></progress>
</label>

<style>

  #drop-zone {
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
    
    &>span:nth-of-type(2) {
      text-decoration: underline;

      /* color: red; */
    }



     #excel-logo {
    --box: 4rem;
    width: var(--box);
    height: var(--box);
  }
    #progress-bar {
      /* margin-top: 1rem; */
      display: block;
      position: static;
      display: none;
    }
  }
  #file-input {
    display: none;
  }

:global(.drop-hover) {
      background-color: hsl(136, 83%, 84%) !important;

}
.custom-dashed-border {
  --border-color: hsl(136, 83%, 20%);
  /* 1. Dash patterns for each side */
  background-image: 
    linear-gradient(to right, var(--border-color) 70%, transparent 0%), /* Top */
    linear-gradient(to right, var(--border-color) 70%, transparent 0%), /* Bottom */
    linear-gradient(to bottom,var(--border-color)  70%, transparent 0%), /* Left */
    linear-gradient(to bottom,var(--border-color)  70%, transparent 0%); /* Right */

  /* 2. Position each side */
  background-position: 
    left top, 
    left bottom, 
    left top, 
    right top;

  /* 3. Repeat along the edge only */
  background-repeat: 
    repeat-x, 
    repeat-x, 
    repeat-y, 
    repeat-y;

  /* 4. Dash length (40px) and Thickness (2px) */
  background-size: 
    20px 2px, /* Top: 40px cycle, 2px thick */
    20px 2px, /* Bottom: 40px cycle, 2px thick */
    2px 20px, /* Left: 2px thick, 40px cycle */
     2px 20px; /* Right: 2px thick, 40px cycle */
}

</style>