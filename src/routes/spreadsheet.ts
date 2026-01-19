import { read, utils, writeFile, type WorkBook, type WorkSheet } from "xlsx";
import { resolve } from "$app/paths";
import { db, type ISpreadsheetData, spreadsheetKeys } from "./db";
interface President {
  Name: string;
  Index: number;
}

export default class SpreadSheet {
  private static instance: SpreadSheet;
  workbook: WorkBook | null = null;
  worksheet: WorkSheet = {} as WorkSheet;
  sheetName: string = "";
  public jsonSpreadsheet: {}[] = [];

  // Map source array to ISpreadsheetData array
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

  public static async init(linkToFile: string) {
    SpreadSheet.instance = new SpreadSheet();
    await SpreadSheet.instance.loadWorkbook(linkToFile);
    return SpreadSheet.instance;
  }

  // Load the workbook asynchronously
  private constructor() {}

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
        this.jsonSpreadsheet = existingRecords;
        console.log("Loaded Existing Data Form Database: ", this.jsonSpreadsheet);

        return this.jsonSpreadsheet;
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
    this.jsonSpreadsheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    // Load spreadsheet data to database
    try {
      console.log("Storing spreadsheet data to database...");
      console.log(this.jsonSpreadsheet);

      const records = this.mapToSpreadsheetData(this.jsonSpreadsheet);
      await db.spreadsheets.bulkAdd(records);
      console.log(`Stored ${records.length} records to IndexedDB`);
    } catch (error) {
      console.error("Error loading data to IndexedDB:", error);
    }

    return this.jsonSpreadsheet;
  }

  public static getInstance() {
    return SpreadSheet.instance;
  }

  public getJsonSpreadsheet() {
    return this.jsonSpreadsheet;
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

    const sheet = utils.sheet_to_json(worksheet, {
      defval: "N/A",
    }) as {}[];

    this.jsonSpreadsheet = sheet;

    // Save the data to IndexedDB using Dexie
    try {
      this.mapToSpreadsheetData([data]);
      const spreadsheetRecord: ISpreadsheetData = this.mapToSpreadsheetData([
        data,
      ])[0];
      db.spreadsheets.add(spreadsheetRecord).then((id) => {
        console.log("Data saved with id:", id);
        console.log("Data saved to IndexedDB:", spreadsheetRecord);
      });
    } catch (error) {
      console.error("Error saving to IndexedDB:", error);
    }

    // console.log("data: ", data);
    // console.log("this.worksheet: ", this.worksheet);
    // console.log("SpreadSheet.jsonSpreadsheet: ", this.jsonSpreadsheet);
    return [...sheet];
  }

  // Download the updated spreadsheet
  DownloadSpreadSheet() {
    if (this.workbook) {
      writeFile(this.workbook, "backup.xlsx");
    } else {
      console.error("Workbook is not loaded.");
    }
  }
}
