import type SpreadSheet from "./spreadsheet";

// Function to fetch ISBN details from Google Books API 
export async function googleBooksLookup(isbn: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  );
  const googleBooksDetails = await res.json();
  console.log("Google Books Details: ", googleBooksDetails);
  console.log("Total Items: ", googleBooksDetails);

  if (googleBooksDetails.items && googleBooksDetails.items.length > 0) {
    const item = googleBooksDetails.items[0].volumeInfo;
    return {
      
        title: item.title,
        authors: item.authors?.map(name => ({ name })) || [],
        publish_date: item.publishedDate,
        number_of_pages: item.pageCount,
        cover: {
          small: item.imageLinks?.thumbnail,
          large: item.imageLinks?.large
        },
        subjects: item.categories?.map(cat => ({ name: cat })) || [],
        languages: item.language ? [{ key: `/languages/${item.language}` }] : []
      
    };
  }

  

}



// Fetch ISBN details from Open Library API
export async function isbnLookup(isbn: string) {
  console.log("isbn: ", isbn);
  const res = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
  );
  const isbnDetails = await res.json();
  console.log("In Lookup: ", Object.keys(isbnDetails).length === 0);


  

  return isbnDetails[`ISBN:${isbn}`];

  
}

export async function searchISBN(isbn: string) {
  // Use a CORS proxy
  // const proxyUrl = 'https://api.allorigins.win/raw?url=';
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = `https://isbnsearch.org/isbn/${isbn}`;
  
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const html = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const container = doc.querySelector('.bookinfo')!;
    console.log("container: ", container);
    const textArr = container.textContent?.trim().split("\n").map(e => e.trim())!;

    return parseBookInfo(textArr);
  } catch (error) {
    console.error('Error fetching ISBN:', error);
    return null;
  }
}

function parseBookInfo(htmlString: string[]) {
   let RESULT = {"title": "", "isbn-13": "", "isbn-10": "", "author": "", "publish_date": ""};
    htmlString.forEach((curr, index) => {
      if (index === 0) {
        RESULT["title"] = curr.trim();
      } 
      else if (curr.startsWith("ISBN-13:")) {
        RESULT["isbn-13"] = curr.replace("ISBN-13:", "").trim();
      } else if ( curr.startsWith("ISBN-10:")) {
        RESULT["isbn-10"] = curr.replace("ISBN-10:", "").trim();
      } else if (curr.startsWith("Author:")) {
        RESULT["author"] = curr.replace("Author:", "").trim()     ;
      }
      else if (curr.startsWith("Published:")) {
        RESULT["publish_date"] = curr.replace("Published:", "").trim();
      }
    });
    console.log("Parsed Result: ", RESULT);

  return RESULT;
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
  console.log(ele);
  
  let acc = "";
  ele.forEach((el) => (acc += el.value));
  console.log("Acc: ", acc);
  return acc;
}

export function clearCell(ele: NodeListOf<HTMLInputElement>) {
  ele.forEach((el) => (el.value = ""));
  ele[0].focus();
}

export async function handleIsbnLookup(isbn: string, isbnDetails: any, sheet: SpreadSheet, altSource: boolean = false) {
               let m_altSource = altSource;
               let altDetails ;
              let message = "";

                isbnDetails = (await isbnLookup(isbn))  ||   (await googleBooksLookup(isbn));
;
                if (!isbnDetails) {

                 if (!m_altSource) {
                   altDetails = (await searchISBN(isbn))?.["isbn-13"];
                  }
                  if (altDetails) {
                    handleIsbnLookup(altDetails, isbnDetails, sheet, true);
                  } else {
                    m_altSource = true; 
                    message = "No details found for the given ISBN from both sources.";
                    return [sheet.jsonSpreadsheet, message];

                  }
                  return [sheet.jsonSpreadsheet, message];
                } else {
                  message = "";
              }
              

              const result = sheet.insertSpreadsheet([
                "N/A",
                isbnDetails?.title,
                isbn,
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
                return [result, message];

}