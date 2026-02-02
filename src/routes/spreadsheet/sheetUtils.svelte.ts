import { read, utils, writeFile, type WorkBook, type WorkSheet } from "xlsx";
import { resolve } from "$app/paths";
import { db, type ISpreadsheetData, spreadsheetKeys } from "../db";

export const spreadsheetState = $state({
  data: [] as {}[],
});

interface President {
  Name: string;
  Index: number;
}
export const labels = [
  "ACCESSION NUMBER",
  "BOOK NAME",
  "ISBN NUMBER",
  "BOOK TYPE",
  "AUTHOR",
  "PUBLISHED DATE",
  "NUM OF PAGES",
  "IMAGE LINKS",
  "LANGUAGE",
];

export default class SpreadSheet {
  private static instance: SpreadSheet;
  workbook: WorkBook | null = null;
  worksheet: WorkSheet = {} as WorkSheet;
  sheetName: string = "";
  public m_jsonSpreadsheet: {}[] = [];

  private constructor() {}

  // Map source array to ISpreadsheetData array

  public createNewSpreadsheet() {
    const renderSpreadsheet = localStorage.getItem("renderSpreadsheet");
    if (renderSpreadsheet === "true") {
      db.spreadsheets.toArray().then((records) => {
        this.workbook = utils.book_new();
        this.worksheet = utils.json_to_sheet(records);
        utils.book_append_sheet(this.workbook, this.worksheet, "Books");
        // this.m_jsonSpreadsheet = records;
      });
      return;
    }
    this.workbook = utils.book_new();
    this.worksheet = utils.aoa_to_sheet([spreadsheetKeys]);
    utils.book_append_sheet(this.workbook, this.worksheet, "Books");
    this.m_jsonSpreadsheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as ISpreadsheetData[];
    localStorage.setItem("renderSpreadsheet", "true");
    // return this.m_jsonSpreadsheet;
  }

  public static init(linkToFile: string = "") {
    SpreadSheet.instance = new SpreadSheet();
    // await SpreadSheet.instance.loadWorkbook(linkToFile);
    SpreadSheet.instance.createNewSpreadsheet();
    return SpreadSheet.instance;
  }

  private mapToSpreadsheetData(sourceArray: any[]): ISpreadsheetData[] {
    return sourceArray.map((sourceObj) => {
      const values = Object.values(sourceObj);
      const result: any = {};

      spreadsheetKeys.forEach((key, index) => {
        result[key] = values[index] !== undefined ? values[index] : "";
      });

      return result as ISpreadsheetData;
    });
  }

  private async loadWorkbook(LinkToFile: string) {
    // Check if database exists and has records
    try {
      const existingRecords = await db.spreadsheets.toArray();
      if (existingRecords.length > 0) {
        console.log(
          `Loading ${existingRecords.length} records from IndexedDB...`,
        );
        this.workbook = utils.book_new();

        // Convert JSON data to worksheet
        this.worksheet = utils.json_to_sheet(existingRecords);

        // Add worksheet to workbook
        utils.book_append_sheet(this.workbook, this.worksheet, "Books");
        this.m_jsonSpreadsheet = existingRecords;
        console.log(
          "Loaded Existing Data Form Database: ",
          this.m_jsonSpreadsheet,
        );

        return this.m_jsonSpreadsheet;
      }
    } catch (error) {
      console.error("Error checking IndexedDB:", error);
    }

    // Database is empty, load from file
    const response = await fetch(LinkToFile);
    const arrayBuffer = await response.arrayBuffer();
    this.workbook = read(arrayBuffer);
    this.sheetName = this.workbook.SheetNames[0];
    this.worksheet = this.workbook.Sheets[this.sheetName];
    this.m_jsonSpreadsheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    // Load spreadsheet data to database
    try {
      console.log("Storing spreadsheet data to database...");
      console.log(this.m_jsonSpreadsheet);

      const records = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);

      console.log("Records to be added to the database: ", records);
      console.log("Record[0] to be added to the database: ", records[0]);

      await db.spreadsheets.add(records[0]);
      console.log(`Stored ${records.length} records to IndexedDB`);
    } catch (error) {
      console.error("Error loading data to IndexedDB:", error);
    }

    return this.m_jsonSpreadsheet;
  }

  public static getInstance() {
    if (!SpreadSheet.instance) {
      SpreadSheet.instance = SpreadSheet.init();
    }
    return SpreadSheet.instance;
  }

  public getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }

  public async loadFromDatabase() {
    const arr = await db.spreadsheets.toArray();
    this.m_jsonSpreadsheet = arr;
    console.log("In Database: ", arr);
    return arr;
  }

  // Insert a new row at the end of the spreadsheet
  public insertSpreadsheet(data: any[]) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }

    const worksheet = utils.sheet_add_aoa(this.worksheet, [data], {
      origin: -1,
    });

    const sheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    this.m_jsonSpreadsheet = sheet;
    console.log(" Outside Saving new data to IndexedDB...");

    // Save the data to IndexedDB using Dexie
    try {
      const records = this.mapToSpreadsheetData([data]);

      console.log("Records to be added to the database: ", records);
      console.log("Record[0] to be added to the database: ", records[0]);

      db.spreadsheets
        .add(records[0])
        .then((id) => {
          console.log("Saving new data to IndexedDB...");
          console.log("The id save to the database is: ", id);
        })
        .catch((err) => {
          console.error("cannot save to the database: ", err);
        });
      console.log(`Stored ${records.length} records to IndexedDB`);
    } catch (error) {
      console.error("Error saving to IndexedDB:", error);
    }

    // console.log("data: ", data);
    // console.log("this.worksheet: ", this.worksheet);
    // console.log("SpreadSheet.jsonSpreadsheet: ", this.m_jsonSpreadsheet);
    return [...sheet];
  }

  public updateSpreadsheet(isbn: string, accession: string = "N/A") {
    if (!this.workbook) {
      console.error( "Workbook is not loaded yet.");
      return "Workbook is not loaded yet.";
    }
        if (accession === "") {
      return "Please enter a valid accession number.";
    }
    console.log("jsonSpreadsheet", this.m_jsonSpreadsheet);

    const rowIndex = this.findRowIndexByIsbn(isbn);
    if (rowIndex === -1) {
      console.error("Cannot update, ISBN not found:", isbn);
      return;
    }
    console.log("isbn found has rowIndex: ", rowIndex);

    const excelRowIndex = rowIndex + 1;

    utils.sheet_add_aoa(this.worksheet, [[accession]], {
      origin: { r: excelRowIndex, c: 0 },
    });

    const sheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    this.m_jsonSpreadsheet = sheet;
       const dbIndex = db.spreadsheets.update(isbn as unknown as ISpreadsheetData, {
            accession: accession,
          });
    this.renderSpreadsheet();
    this.scrollToView(rowIndex);
    return `Accession number ${accession} added for ISBN ${isbn}.`;

  }

  public renderSpreadsheet() {
    spreadsheetState.data = [...this.m_jsonSpreadsheet];
  }

  public findRowIndexByIsbn(isbn: string): number {
    const rowIndex = this.m_jsonSpreadsheet.findIndex(
      (row: any) => row["isbn"] === isbn,
    );
    if (rowIndex === -1) {
      console.error("Row with the given ISBN not found.");
    }
    return rowIndex;
  }
  public getRowElementByIndex(index: number) {
     const tbody = document.querySelector("tbody");

    const trEle = tbody?.children;
    const ele = trEle?.item(index) as HTMLTableRowElement;
    return ele;
  }
  public scrollToView(index: number = -1) {
    // Use setTimeout to ensure DOM has updated
    const tbody = document.querySelector("tbody");

    const trEle = tbody?.children;
    const ele = trEle?.item(index) as HTMLTableRowElement;
    const color = ele?.style?.backgroundColor;

    if (index === -1) {
      tbody?.lastElementChild?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    const t = setTimeout(() => {
      ele?.scrollIntoView({ behavior: "smooth", block: "end" });
      if (ele) {
        console.log("color: ", color);

        ele.style.backgroundColor = "green";
      }
      clearTimeout(t);
    }, 0);
    const id = setTimeout(() => {
      if (ele) {
        ele.style.backgroundColor = color;
        console.log("also ran");
      }
      clearTimeout(id);
    }, 1000);
  }

  // Download the updated spreadsheet
  DownloadSpreadSheet() {
    const spreadsheetSize = [
      { wch: 10 },
      { wch: 50 },
      { wch: 18 },
      { wch: 50 },
      { wch: 18 },
      { wch: 10 },
      { wch: 15 },
      { wch: 25 },
      { wch: 10 },
    ];

    if (this.workbook) {
      this.worksheet["!cols"] = spreadsheetSize;
      let workbook = utils.book_new();
      let sheetName = utils.book_append_sheet(
        workbook,
        this.worksheet,
        "Books",
      );
      utils.sheet_add_aoa(this.worksheet, [labels], { origin: 0 });
      writeFile(workbook, "backup.xlsx");
    } else {
      console.error("Workbook is not loaded.");
    }
  }
}
