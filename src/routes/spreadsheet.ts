import { read, utils, writeFile, type WorkBook, type WorkSheet } from "xlsx";
interface President {
  Name: string;
  Index: number;
}

export default class SpreadSheet {
  //   excelLink: string;
  workbook: WorkBook | null = null;
  worksheet: WorkSheet = {} as WorkSheet;
  sheetName: string = "";
  // worksheet: utils.Sheet | null = null;
  ready: Promise<void>;

  // Load the workbook asynchronously
  constructor(LinkToFile: string = "/data/pres.xlsx") {
    // this.excelLink = LinkToFile;
    this.ready = this.loadWorkbook(LinkToFile);
  }

  private async loadWorkbook(LinkToFile: string) {
    const response = await fetch(LinkToFile);
    const arrayBuffer = await response.arrayBuffer();
    this.workbook = read(arrayBuffer);
    this.sheetName = this.workbook.SheetNames[0];
     this.worksheet = this.workbook.Sheets[this.sheetName];
  }

  // Insert a new row at the end of the spreadsheet
  insertSpreadsheet(data: any[]) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }

    // console.log(worksheet["!ref"]?.split(":").at(1)?.substring(1));

    // const range = utils.decode_range(worksheet["!ref"]!);
    // console.log("range: ", range);
    // range.e.c;

    utils.sheet_add_aoa(this.worksheet, [data], { origin: -1 });

    const presidents = utils.sheet_to_json(this.worksheet, {
      defval: "N/A",
    }) as {}[];

    return presidents;
  }

  // Download the updated spreadsheet
  async DownloadSpreadSheet(): Promise<void> {
    if (this.workbook) {
      writeFile(this.workbook, "downloaded_pres.xlsx");
    } else {
      console.error("Workbook is not loaded.");
    }
  }
}
