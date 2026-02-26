const e=location.pathname.split("/").slice(0,-1).join("/"),g=[e+"/_app/immutable/entry/app.DGWfqj4v.js",e+"/_app/immutable/nodes/0.DtpZZmmg.js",e+"/_app/immutable/assets/0.CwvzuBzr.css",e+"/_app/immutable/nodes/1.DpbhXjsr.js",e+"/_app/immutable/nodes/2.BtOAY7uU.js",e+"/_app/immutable/assets/2.Bz96zTJQ.css",e+"/_app/immutable/nodes/3.B_ZVFhZ7.js",e+"/_app/immutable/nodes/4.CVbaWpF6.js",e+"/_app/immutable/assets/4.DKTc5Tem.css",e+"/_app/immutable/nodes/5.vLB9tZMr.js",e+"/_app/immutable/chunks/B-6X-cLz.js",e+"/_app/immutable/chunks/Bme71SXR.js",e+"/_app/immutable/chunks/CEiJdahZ.js",e+"/_app/immutable/chunks/CKy_A0-a.js",e+"/_app/immutable/chunks/CYOjpWgn.js",e+"/_app/immutable/chunks/CmnrF15K.js",e+"/_app/immutable/assets/SpreadSheet.BGs6MCJg.css",e+"/_app/immutable/chunks/DL1G3EVv.js",e+"/_app/immutable/chunks/DUA4kTxm.js",e+"/_app/immutable/chunks/DamuyVK_.js",e+"/_app/immutable/chunks/Df04Hj-s.js",e+"/_app/immutable/chunks/Dr7-BOgw.js",e+"/_app/immutable/chunks/DsF2ImuW.js",e+"/_app/immutable/chunks/Dy7lmqI0.js",e+"/_app/immutable/chunks/DzE6Z97F.js",e+"/_app/immutable/chunks/J6GTVhZb.js",e+"/_app/immutable/entry/start.CFNV4OZ_.js"],_=[e+"/.nojekyll",e+"/bunny.png",e+"/data/camera-svgrepo-com.svg",e+"/data/excel-icon.svg",e+"/data/pres.xlsx",e+"/robots.txt",e+"/zxing_full.wasm",e+"/zxing_reader.wasm",e+"/zxing_writer.wasm"],w="1772101338049";let A=`{
  "kind": "books#volumes",
  "totalItems": 1,
  "items": [
    {
      "kind": "books#volume",
      "id": "P_xcEAAAQBAJ",
      "etag": "dsohHFI+GCI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/P_xcEAAAQBAJ",
      "volumeInfo": {
        "title": "No Book name",
        "subtitle": "No subtitle",
        "authors": [
          "no network"
        ],
        "publisher": "No publisher",
        "publishedDate": "0000-00-0",
        "description": "No description",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "no isbn"
          },
          {
            "type": "ISBN_10",
            "identifier": "0857197681"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "no category"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=P_xcEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "N/A"
        },
        "language": "",
        "previewLink": "http://books.google.com/books?id=P_xcEAAAQBAJ&dq=isbn:9780857197689&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=P_xcEAAAQBAJ&dq=isbn:9780857197689&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Money.html?hl=&id=P_xcEAAAQBAJ"
      },
      "saleInfo": {
        "country": "NG",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "NG",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=P_xcEAAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Over 8 million copies sold around the world. The original book from Morgan Housel, the New York Times bestselling author of Same As Ever."
      }
    }
  ]
}`;const n=globalThis.self;let l=!0;const h=`cache-${w}`,d=[...g,..._];let b=JSON.parse(A);const k={status:200,headers:{"Content-Type":"application/json"}};async function y(s,a){try{const t=new AbortController,i=setTimeout(()=>t.abort(),8e3),o=await fetch(s,{signal:t.signal});return p(),o}catch{return console.log("Aborted"),l=!1,await p(),b.items[0].volumeInfo.industryIdentifiers[0].identifier=a,new Response(JSON.stringify(b),k)}}n.addEventListener("install",s=>{n.skipWaiting(),u();async function a(){await(await caches.open(h)).addAll(d)}s.waitUntil(a())});n.addEventListener("activate",s=>{async function a(){for(const t of await caches.keys())t!==h&&await caches.delete(t)}s.waitUntil(a().then(()=>{n.clients.claim(),console.log("Old caches deleted")}))});n.addEventListener("fetch",s=>{if(s.request.url.toLowerCase().includes("isbn")){console.log("in Post with Request: ",s.request);let i=new URL(s.request.url).search.toLowerCase().split("&").find(o=>o.includes("isbn"))?.split(":")[1];if(console.log("Post isbn: ",i),i){s.respondWith(y(s.request,i));return}}if(s.request.method!=="GET")return;async function a(){const t=new URL(s.request.url),i=await caches.open(h);if(d.includes(t.pathname)){const o=await i.match(t.pathname);if(o)return o}try{const o=await fetch(s.request);if(!(o instanceof Response))throw new Error("invalid response from fetch");return o.status===200&&i.put(s.request,o.clone()),o}catch(o){const c=await i.match(s.request);if(c)return c;throw o}}s.respondWith(a())});let m=!1,r;async function u(s="https://www.google.com/favicon.ico"){if(m)return;m=!0;let a=Date.now();const t=s+"?"+a,i=new AbortController,c=setTimeout(()=>i.abort(),5e3);try{console.log(`Checking URL: ${t}`);const f=await fetch(t,{cache:"no-cache",signal:i.signal,mode:"no-cors"});clearTimeout(c),l||(clearInterval(r),l=!0,await p()),console.log("there is internet connectivity: ",l),r=setTimeout(()=>u(),3e4)}catch{clearTimeout(c),l&&(clearInterval(r),l=!1,await p()),console.log("No network"),r=setTimeout(()=>u(),5e3)}finally{m=!1}}n.addEventListener("message",s=>{n.clients.matchAll(),s.data&&s.data.type==="CONNECTION_STATUS"&&(console.log("Connection change intiated by window"),s.ports&&s.ports[0]&&s.ports.forEach(a=>a.postMessage({type:"CONNECTION_STATUS",isOnline:l})),u())});async function p(){n.clients.claim();const s=await n.clients.matchAll({type:"window"});console.log("Sending message to mainclients: ",s),s.forEach(a=>a.postMessage({type:"CONNECTION_STATUS",isOnline:l}))}
