<script lang="ts">
  import { onMount } from "svelte";
  import { clearCell, isbnLookup, isRequired, retrieveIsbnNumber } from "./isbn";
  import SpreadSheet from "./spreadsheet";
  // import "/data/pres.xlsx";

  interface President {
    Name: string;
    Index: number;
  }

  let message: string = $state("");
  let presidents: {}[] = $state([]);
  let isbnDetails = $state("");

  // svelte-ignore non_reactive_update
  let sheet: SpreadSheet;

  onMount(async () => {
    const eleList = document.querySelectorAll(
      'input[maxlength="1"]'
    ) as NodeListOf<HTMLInputElement>;
      eleList[0].focus();
    const eleArr = [...eleList];
     sheet = new SpreadSheet("/data/pres.xlsx");
    presidents = await sheet.ready;

    eleList.forEach((ele) =>
      ele.addEventListener("keydown", (ev: KeyboardEvent) => {
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

            (async function () {
              const isbnDetails = await isbnLookup(isbn);
              if (!isbnDetails) {
                message = "No details found for the given ISBN.";
                return;
              }
              else {
                message = "";
              }

              console.log("Author: ", isbnDetails?.authors?.[0]?.name);
              console.log("Book Name: ", isbnDetails?.title);
              console.log("Subject: ", isbnDetails?.subjects?.[0]?.name ?? "N/A");
              console.log("Published on: ", isbnDetails?.publish_date);
              console.log("cover Photo: ", isbnDetails?.cover?.large);

              presidents = sheet.insertSpreadsheet([
                isbnDetails?.authors?.[0]?.name,
                isbnDetails?.title,
                isbnDetails?.publish_date,
                isbnDetails?.subjects?.[0]?.name ?? "N/A",
              ])!;
            })();

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
  });
</script>

<div>
  <div class="isbn-details">
  <table>
    <thead>
      <tr>
        <th>Author Name </th>
        <th>Book Name</th>
        <th>Published on</th>
        <th>Book Type</th>
      </tr>
    </thead>

    <tbody>
      {#each presidents as president}
        <tr>
          {#each Object.entries(president) as [key, value]}
            <td>{value}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
  <div class="message">{message}</div>
  <button onclick={() =>sheet.DownloadSpreadSheet.call(sheet)!} class="download-excel"
    >Download Excel Sheet</button
  >

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
</div>

<style>
  .isbn-details {
    height: 40vh;
    overflow-y: auto;
    position: relative;

  }
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
  }

  :global(.required) {
    outline: 1px solid red;
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

     thead{
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
    /* font-weight: bold; */
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
    width: 20vw;
  }

  .download-excel:hover {
    background-color: #007f63;
  }
</style>
