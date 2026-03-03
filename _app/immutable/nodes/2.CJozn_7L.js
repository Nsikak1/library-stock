import "../chunks/DAC7LG0P.js";
import { W as D, Z as a, b as r, _ as t, X as U, Y as G, a9 as J, s as B, f as T, a as X, g as C, aw as K } from "../chunks/BtsFhd5D.js";
import { a as i, f as d, c as Q } from "../chunks/DLCqchCO.js";
import { p as L, i as M } from "../chunks/BB50SLlx.js";
import { r as $, b as O, S as ee, I as ae } from "../chunks/CJmcPHqk.js";
import { S as te } from "../chunks/DBVW53FX.js";
import { d as W, b as Y } from "../chunks/BokTgVeL.js";
import { s as y } from "../chunks/BpUz2bbF.js";
import { b as se } from "../chunks/CxYDYBQw.js";
import "../chunks/CWztfNBP.js";
import { s as u } from "../chunks/CjjNgEYs.js";
import { i as re } from "../chunks/DK64jgav.js";
const le = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-1.27%20110.037%20110.037'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M57.55%200h7.425v10c12.513%200%2025.025.025%2037.537-.038%202.113.087%204.438-.062%206.275%201.2%201.287%201.85%201.138%204.2%201.225%206.325-.062%2021.7-.037%2043.388-.024%2065.075-.062%203.638.337%207.35-.425%2010.938-.5%202.6-3.625%202.662-5.713%202.75-12.95.037-25.912-.025-38.875%200v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188%206.675%2038.375%203.388%2057.55%200z'%20fill='%23207245'/%3e%3cpath%20d='M64.975%2013.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2021.25h17.5V30h-17.5v-8.75z'%20fill='%23207245'/%3e%3cpath%20d='M37.025%2032.962c2.825-.2%205.663-.375%208.5-.512a2607.344%202607.344%200%200%201-10.087%2020.487c3.438%207%206.949%2013.95%2010.399%2020.95a716.28%20716.28%200%200%201-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699%205.075-4.125%209.862-6.074%2014.838-2.738-.038-5.476-.15-8.213-.263C19.5%2065.9%2022.6%2059.562%2025.912%2053.312c-2.812-6.438-5.9-12.75-8.8-19.15%202.75-.163%205.5-.325%208.25-.475%201.862%204.888%203.899%209.712%205.438%2014.725%201.649-5.312%204.112-10.312%206.225-15.45z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2035h17.5v8.75h-17.5V35zM79.975%2048.75h17.5v8.75h-17.5v-8.75zM79.975%2062.5h17.5v8.75h-17.5V62.5zM79.975%2076.25h17.5V85h-17.5v-8.75z'%20fill='%23207245'/%3e%3c/svg%3e";
var ve = d('<span class="svelte-1rbplsc">Click here to create a new spreadsheet</span>'), oe = d('<span class="svelte-1rbplsc">Click here to to continue your work</span>'), ie = d('<button class="custom-dashed-border svelte-1rbplsc" id="spreadsheet-create-button"><img id="excel-logo" alt="upload your excel file by drag and drop" class="svelte-1rbplsc"/> <!></button>');
function ne(x, h) {
  D(h, true);
  let m = L(h, "firstRun", 15), n = L(h, "renderSpreadsheet", 15), f;
  const _ = () => {
    console.log("Clicked"), te.getInstance(), n(true), m(false), localStorage.setItem("renderSpreadsheet", "true");
  };
  var o = ie(), z = a(o), l = r(z, 2);
  {
    var v = (e) => {
      var p = ve();
      i(e, p);
    }, c = (e) => {
      var p = oe();
      i(e, p);
    };
    M(l, (e) => {
      n() ? e(c, false) : e(v);
    });
  }
  t(o), se(o, (e) => f = e, () => f), U(() => y(z, "src", le)), Y("click", o, _), i(x, o), G();
}
W(["click"]);
var s = $(() => O), ce = d('<img class="cover svelte-v3lj8z"/>'), pe = d('<img alt="No cover available" class="cover placeholder svelte-v3lj8z"/>'), de = d('<div class="book-card svelte-v3lj8z"><!> <div class="details svelte-v3lj8z"><button aria-label="Close book view" class="close svelte-v3lj8z">X</button> <h3 class="title svelte-v3lj8z"> </h3> <p class="author svelte-v3lj8z"> </p> <div class="meta-grid svelte-v3lj8z"><span class="meta-label svelte-v3lj8z">Accession:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">ISBN:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Type:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Published:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Pages:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Language:</span> <span class="meta-value svelte-v3lj8z"> </span></div></div></div>');
function ue(x, h) {
  D(h, false);
  function m(b) {
    s(s().activeView = false);
  }
  const n = "https://via.placeholder.com/128x180?text=No+Cover";
  let f = s().data.num_of_pages && Number(s().data.num_of_pages) > 0 ? s().data.num_of_pages : "N/A";
  re();
  var _ = de(), o = a(_);
  {
    var z = (b) => {
      var k = ce();
      U(() => {
        y(k, "src", s().data.image_links), y(k, "alt", `Cover of ${s().data.book_name}`);
      }), i(b, k);
    }, l = (b) => {
      var k = pe();
      y(k, "src", n), i(b, k);
    };
    M(o, (b) => {
      s().data.image_links ? b(z) : b(l, false);
    });
  }
  var v = r(o, 2), c = a(v), e = r(c, 2), p = a(e, true);
  t(e);
  var j = r(e, 2), R = a(j);
  t(j);
  var V = r(j, 2), g = r(a(V), 2), w = a(g, true);
  t(g);
  var S = r(g, 4), Z = a(S, true);
  t(S);
  var I = r(S, 4), q = a(I, true);
  t(I);
  var N = r(I, 4), E = a(N, true);
  t(N);
  var A = r(N, 4), F = a(A, true);
  t(A);
  var P = r(A, 4), H = a(P, true);
  t(P), t(V), t(v), t(_), U(() => {
    u(p, s().data.book_name || "Untitled"), u(R, `by ${(s().data.author || "Unknown Author") ?? ""}`), u(w, s().data.accession || "\u2014"), u(Z, s().data.isbn || "\u2014"), u(q, s().data.book_type || "\u2014"), u(E, s().data.published || "\u2014"), u(F, f), u(H, s().data.language || "N/A");
  }), Y("click", c, m), i(x, _), G();
}
W(["click"]);
var he = d('<div class="book-view-column svelte-1uha8ag"><!></div>'), me = d('<div class="container svelte-1uha8ag"><!> <div class="content-wrapper svelte-1uha8ag"><div class="input-column svelte-1uha8ag"><!></div> <!></div></div>'), fe = d('<!> <div class="or svelte-1uha8ag">OR</div> <a class="use-camera svelte-1uha8ag" href="livekit">Use your camera to add books</a>', 1);
function Me(x, h) {
  D(h, true);
  let m = X(true);
  J([]);
  let n = X(false);
  {
    const l = localStorage.getItem("renderSpreadsheet");
    B(n, l === "true", true);
  }
  var f = Q(), _ = T(f);
  {
    var o = (l) => {
      var v = me(), c = a(v);
      ee(c, {});
      var e = r(c, 2), p = a(e), j = a(p);
      ae(j, {}), t(p);
      var R = r(p, 2);
      {
        var V = (g) => {
          var w = he(), S = a(w);
          ue(S, {}), t(w), i(g, w);
        };
        M(R, (g) => {
          O.activeView && g(V);
        });
      }
      t(e), t(v), i(l, v);
    }, z = (l) => {
      var v = fe(), c = T(v);
      ne(c, { get firstRun() {
        return C(m);
      }, set firstRun(e) {
        B(m, e, true);
      }, get renderSpreadsheet() {
        return C(n);
      }, set renderSpreadsheet(e) {
        B(n, e, true);
      } }), K(4), i(l, v);
    };
    M(_, (l) => {
      !C(m) && C(n) ? l(o) : l(z, false);
    });
  }
  i(x, f), G();
}
export {
  Me as component
};
