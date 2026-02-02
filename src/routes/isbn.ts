import { db } from "./db";
import SpreadSheet from "./spreadsheet/sheetUtils.svelte";


// Function to fetch ISBN details from Google Books API
export async function googleBooksLookup(isbn: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
  );
  const googleBooksDetails = await res.json();
  console.log(
    "Used google Api: ",
    Boolean(googleBooksDetails?.items?.length > 0),
  );

  if (googleBooksDetails.items && googleBooksDetails.items.length > 0) {
    const item = googleBooksDetails.items[0].volumeInfo;
    console.log("used  google books api: ", item);

    return {
      title: item.title,
      authors: item.authors?.map((name: string) => ({ name })) || [],
      publish_date: item.publishedDate,
      number_of_pages: item.pageCount,
      cover: {
        small: item.imageLinks?.thumbnail,
        large: item.imageLinks?.large,
      },
      subjects: item.categories?.map((cat: string) => ({ name: cat })) || [],
      languages: item.language ? [{ key: `/languages/${item.language}` }] : [],
    };
  }
}

// Fetch ISBN details from Open Library API
export async function openLibApi(isbn: string) {
  const res = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
  );
  const isbnDetails = await res.json();
  console.log("used OpenLibAPI: ", !(Object.keys(isbnDetails).length === 0));

  return isbnDetails[`ISBN:${isbn}`];
}

export async function searchIsbnDbWebsite(isbn: string) {
  // Use a CORS proxy
  // const proxyUrl = 'https://api.allorigins.win/raw?url=';
  const proxyUrl = "https://corsproxy.io/?";
  const targetUrl = `https://isbnsearch.org/search?s=${isbn}`;

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const container = doc.querySelector(".bookinfo");
    if (!container) {
      console.error("Book info container not found");
      return null;
    }
    const textArr = container.textContent
      ?.trim()
      .split("\n")
      .map((e) => e.trim())!;

    return parseIsbnDbWebsite(textArr);
  } catch (error) {
    console.error("Error fetching ISBN:", error);
    return null;
  }
}

function parseIsbnDbWebsite(htmlString: string[]) {
  let RESULT = {
    title: "",
    "isbn-13": "",
    "isbn-10": "",
    author: "",
    publish_date: "",
  };
  htmlString.forEach((curr, index) => {
    if (index === 0) {
      RESULT["title"] = curr.trim();
    } else if (curr.startsWith("ISBN-13:")) {
      RESULT["isbn-13"] = curr.replace("ISBN-13:", "").trim();
    } else if (curr.startsWith("ISBN-10:")) {
      RESULT["isbn-10"] = curr.replace("ISBN-10:", "").trim();
    } else if (curr.startsWith("Author:")) {
      RESULT["author"] = curr.replace("Author:", "").trim();
    } else if (curr.startsWith("Published:")) {
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
  let acc = "";
  ele.forEach((el) => (acc += el.value));
  return acc;
}

export function clearCell(ele: NodeListOf<HTMLInputElement>) {
  ele.forEach((el) => (el.value = ""));
  ele[0].focus();
}

export async function handleIsbnLookup(
  isbnFound: {
    value?: boolean,
    isbn: string,
  },
  altSource: boolean = false,
) {
  let isbnDetails;
  let m_altSource = altSource;
  let altDetails;
  let message = "";
  let isbn = isbnFound.isbn;
  console.log("isbn: ", isbn);
  const dbResult = await checkDB(isbn);
  if (dbResult) {
    console.log("used DB: ", dbResult);
      const sheet = SpreadSheet.getInstance();

    const row = sheet.findRowIndexByIsbn(dbResult.isbn);
    sheet.scrollToView(row);
    isbnFound.value = true;
    return `You have done that isbn already the Book Name is: ${dbResult.book_name}`;
  }

  isbnDetails = (await openLibApi(isbn)) || (await googleBooksLookup(isbn));
  console.log("Isbn Details: ", isbnDetails);

  if (!isbnDetails) {
    if (!m_altSource) {
      // Use alternative source
      altDetails = (await searchIsbnDbWebsite(isbn))?.["isbn-13"];
    }
    if (altDetails) {
      // Retry with alternative source
      isbnFound.isbn = altDetails
      return await handleIsbnLookup(isbnFound, true);
    } else {
      m_altSource = true;
      message = "No details found for the given ISBN from both sources.";
      return message;
    }
  } else {
    message = "Isbn Found Please Input the accession Number";
    isbnFound.value = true;
  }

  const result = [
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
  ];
    const sheet = SpreadSheet.getInstance();

  const f = sheet.insertSpreadsheet(result)!;
  sheet.renderSpreadsheet();
  const timeOut = setTimeout(() => {
    sheet.scrollToView();
    clearTimeout(timeOut);
  }, 500);

  return message;
}

export async function checkDB(isbn: string) {
  return await db.spreadsheets.get({ isbn: isbn });
}

function throttle(thresholdMs: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    let lastCallTime = 0;

    descriptor.value = function (...args: any[]) {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTime;

      if (timeSinceLastCall < thresholdMs) {
        console.log(
          `Function called too soon. Wait ${thresholdMs - timeSinceLastCall}ms`
        );
        return;
      }

      lastCallTime = now;
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}