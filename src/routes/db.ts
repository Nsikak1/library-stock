// db.ts
import { Dexie, type EntityTable } from "dexie"

interface Friend {
  id: number
  name: string
  age: number
}

interface ISpreadsheetData {
    id: number,
    accession: string,
    book_name: string,
    isbn: string,
    book_type: string,
    author: string,
    published: string,
    num_of_pages: string,
    image_links: string,
    language: string

}


// Define the target keys in order
export const spreadsheetKeys: (keyof ISpreadsheetData)[] = [
  'id',
  'accession',
  'book_name',
  'isbn',
  'book_type',
  'author',
  'published',
  'num_of_pages',
  'image_links',
  'language'
];


const db = new Dexie("SpreadsheetDatabase") as Dexie & {
  spreadsheets: EntityTable<
    ISpreadsheetData,
    "id" // primary key "id" (for the typings only)

  >
}

// Schema declaration:
db.version(1).stores({
  spreadsheets: "++id, accession, book_name, isbn, book_type, author, published, num_of_pages, image_links, language", // primary key "id" (for the runtime!)
})

export type { ISpreadsheetData }
export { db }
