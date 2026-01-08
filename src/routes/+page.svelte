<script lang="ts">
  import { read, utils, writeFile } from "xlsx";
  import { onMount } from "svelte";

  const numericKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

  interface President {
    Name: string;
    Index: number;
  }
  let presidents: President[] = $state([]);
  let log = $state("");

  onMount(async () => {
    const eleList = document.querySelectorAll(
      'input[maxlength="1"]'
    ) as NodeListOf<HTMLInputElement>;
    const eleArr = [...eleList];
    console.log(eleList);

    eleList.forEach((ele) =>
      ele.addEventListener("keydown", (ev: KeyboardEvent) => {
        const num = parseInt(ev.key);
        const currElem = ev.target as HTMLInputElement;
        const index = +eleArr.indexOf(currElem);
        const isBackspace = ev.key === "Backspace";
        const nextEle = eleList.item(index + 1);
        const prevEle = eleList.item(index - 1);

        ev.preventDefault();

        if (isBackspace) {
          currElem.value = "";
          prevEle.focus();
          return;
        }
        if (!isNaN(num)) {
          if (currElem.value == "") {
          }
          currElem.value = ev.key;
          nextEle.focus();
        }
        switch (ev.key) {
          case "ArrowLeft":
            prevEle.focus();

            break;

          case "ArrowRight":
            nextEle.focus();

            break;

          case "ArrowUp":
            prevEle.focus();
            break;

          case "ArrowDown":
            nextEle.focus();
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

    

    const res = await fetch("/data/pres.xlsx");
    const arrayBuffer = await res.arrayBuffer();
    const workbook = read(arrayBuffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // normalize keys coming from Excel (e.g. Name, NAME, President) to the interface expected by the component
    // presidents = raw.map((r, i) => ({
    //   name: r.name ?? r.Name ?? r.President ?? Object.values(r)[0] ?? '',
    //   index: Number(r.index ?? r.Index ?? Object.values(r)[1] ?? i)
    // }));

    console.log(worksheet["!ref"]?.split(":").at(1)?.substring(1));

    const range = utils.decode_range(worksheet["!ref"]!);
    range.e.c;
    utils.sheet_add_aoa(worksheet, [["My Name", 23]], { origin: -1 });

    presidents = utils.sheet_to_json(worksheet, { defval: "default" }) as any[];

    console.log("range: ", range);

    console.log("presidents", presidents);
  });
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Name </th>
        <th>index</th>
      </tr>
    </thead>

    <tbody>
      {#each presidents as president}
        <tr>
          <td>{president.Name}</td>
          <td>{president.Index}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <input type="number" name="1" id="input-1" maxlength="1" />
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
    />
  </div>
</div>

<style>
  input[maxlength="1"] {
    /* background-color: red; */
    width: 1ch;
    font-size: large;
    padding: 0.5rem 0.7rem;
    margin: 0.5rem 0.2rem 0;
  }
</style>
