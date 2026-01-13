import { read, utils, writeFile, type WorkBook, type WorkSheet } from "xlsx";
import { resolve } from "$app/paths";
interface President {
  Name: string;
  Index: number;
}


export default class SpreadSheet {
  private static instance: SpreadSheet;
  workbook: WorkBook | null = null;
  worksheet: WorkSheet = {} as WorkSheet;
  sheetName: string = "";
  public  jsonSpreadsheet: {}[] = [];

  public static async init(linkToFile: string) {
    SpreadSheet.instance = new SpreadSheet();
    await SpreadSheet.instance.loadWorkbook(linkToFile);
    return SpreadSheet.instance;
  }

  // Load the workbook asynchronously
  private constructor() {}

  private async loadWorkbook(LinkToFile: string) {
    const response = await fetch(LinkToFile);
    const arrayBuffer = await response.arrayBuffer();
    this.workbook = read(arrayBuffer);
    this.sheetName = this.workbook.SheetNames[0];
    this.worksheet = this.workbook.Sheets[this.sheetName];
    this.jsonSpreadsheet = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    //  = jsonSheet;
      return this.jsonSpreadsheet;
  }

  public static getInstance() {
    return SpreadSheet.instance;
  }

  public getJsonSpreadsheet() {
    return this.jsonSpreadsheet;
  }

  // Insert a new row at the end of the spreadsheet
  insertSpreadsheet(data: any[]) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }

    const worksheet =utils.sheet_add_aoa(this.worksheet, [data], { origin: -1 });

    
     const sheet = utils.sheet_to_json(worksheet, {
      defval: "N/A",
    }) as {}[];

    // console.log("SpreadSheet instance: ", SpreadSheet.instance.wo);
    
    
    // return SpreadSheet.jsonSpreadsheet;
        console.log("data: ", data);
    console.log("this.worksheet: ", this.worksheet);
    
    this.jsonSpreadsheet = sheet;
    
    console.log("SpreadSheet.jsonSpreadsheet: ", this.jsonSpreadsheet);
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
