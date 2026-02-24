import type { ISpreadsheetData } from "./db";

interface IBookDetail {
    activeView: boolean;
    data: Partial<ISpreadsheetData>;
}

export let bookDetails = $state<IBookDetail>({
    activeView: false,
    data: {}
})

export let onlineState = $state(false);