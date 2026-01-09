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
