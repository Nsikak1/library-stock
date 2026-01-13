import type SpreadSheet from "./spreadsheet";

export async function isbnLookup(isbn: number) {
  console.log("isbn: ", isbn);
  
  const res = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
  );
  const isbnDetails = await res.json();
  console.log("In Lookup: ", isbnDetails);
  

  return isbnDetails[`ISBN:${isbn}`];

  
}

export function isRequired(ele: NodeListOf<HTMLInputElement>) {
  let canProceed = false;
  ele.forEach((el) => {
    if (!el.value) {
      el.classList.add("required");
      canProceed = false;
    } else {
      canProceed = true;
    }
  });

  return canProceed;
}


export function retrieveIsbnNumber(ele: NodeListOf<HTMLInputElement>) {
  let acc = "";
  ele.forEach((el) => (acc += el.value));
  return parseInt(acc);
}

export function clearCell(ele: NodeListOf<HTMLInputElement>) {
  ele.forEach((el) => (el.value = ""));
  ele[0].focus();
}

export async function handleIsbnLookup(isbn: number, isbnDetails: any, sheet: SpreadSheet, message: string) {
              
                isbnDetails = await isbnLookup(isbn);
                if (!isbnDetails) {
                  message = "No details found for the given ISBN.";
                  return;
                } else {
                  message = "";
              }
              

              const result = sheet.insertSpreadsheet([
                "N/A",
                isbnDetails?.title,
                isbnDetails?.identifiers?.isbn_10
                  ? isbnDetails?.identifiers?.isbn_10[0]
                  : isbn,
                isbnDetails?.subjects?.[0]?.name ?? "N/A",
                isbnDetails?.authors?.[0]?.name,
                isbnDetails?.publish_date,
                isbnDetails?.number_of_pages,
                isbnDetails?.cover?.large ?? "N/A",
                isbnDetails?.languages?.[0]?.key
                  ? isbnDetails?.languages?.[0]?.key
                      .replace("/languages/", "")
                      .toUpperCase()
                  : "English",
              ])!;
                return result;


}