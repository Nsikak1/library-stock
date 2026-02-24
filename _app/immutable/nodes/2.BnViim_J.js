import { f as d, a as n, c as K } from "../chunks/Dy7lmqI0.js";
import { p as D, P as a, c as r, Q as t, O as U, b as G, a5 as W, s as B, f as O, a as T, g as C, am as Y } from "../chunks/DUA4kTxm.js";
import { p as L, i as M } from "../chunks/J6GTVhZb.js";
import { a as Z, r as $, b as Q, S as ee, I as ae } from "../chunks/Ty5scKEZ.js";
import { d as X } from "../chunks/Bme71SXR.js";
import { s as y } from "../chunks/CEiJdahZ.js";
import { b as te } from "../chunks/DamuyVK_.js";
import { i as se } from "../chunks/DsF2ImuW.js";
import { s as u } from "../chunks/Df04Hj-s.js";
const re = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-1.27%20110.037%20110.037'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M57.55%200h7.425v10c12.513%200%2025.025.025%2037.537-.038%202.113.087%204.438-.062%206.275%201.2%201.287%201.85%201.138%204.2%201.225%206.325-.062%2021.7-.037%2043.388-.024%2065.075-.062%203.638.337%207.35-.425%2010.938-.5%202.6-3.625%202.662-5.713%202.75-12.95.037-25.912-.025-38.875%200v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188%206.675%2038.375%203.388%2057.55%200z'%20fill='%23207245'/%3e%3cpath%20d='M64.975%2013.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2021.25h17.5V30h-17.5v-8.75z'%20fill='%23207245'/%3e%3cpath%20d='M37.025%2032.962c2.825-.2%205.663-.375%208.5-.512a2607.344%202607.344%200%200%201-10.087%2020.487c3.438%207%206.949%2013.95%2010.399%2020.95a716.28%20716.28%200%200%201-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699%205.075-4.125%209.862-6.074%2014.838-2.738-.038-5.476-.15-8.213-.263C19.5%2065.9%2022.6%2059.562%2025.912%2053.312c-2.812-6.438-5.9-12.75-8.8-19.15%202.75-.163%205.5-.325%208.25-.475%201.862%204.888%203.899%209.712%205.438%2014.725%201.649-5.312%204.112-10.312%206.225-15.45z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2035h17.5v8.75h-17.5V35zM79.975%2048.75h17.5v8.75h-17.5v-8.75zM79.975%2062.5h17.5v8.75h-17.5V62.5zM79.975%2076.25h17.5V85h-17.5v-8.75z'%20fill='%23207245'/%3e%3c/svg%3e";
var le = d('<span class="svelte-1rbplsc">Click here to create a new spreadsheet</span>'), ve = d('<span class="svelte-1rbplsc">Click here to to continue your work</span>'), oe = d('<button class="custom-dashed-border svelte-1rbplsc" id="spreadsheet-create-button"><img id="excel-logo" alt="upload your excel file by drag and drop" class="svelte-1rbplsc"/> <!></button>');
function ne(x, h) {
  D(h, true);
  let m = L(h, "firstRun", 15), i = L(h, "renderSpreadsheet", 15), f;
  const _ = () => {
    console.log("Clicked"), Z.getInstance(), i(true), m(false), localStorage.setItem("renderSpreadsheet", "true");
  };
  var o = oe();
  o.__click = _;
  var z = a(o), l = r(z, 2);
  {
    var v = (e) => {
      var p = le();
      n(e, p);
    }, c = (e) => {
      var p = ve();
      n(e, p);
    };
    M(l, (e) => {
      i() ? e(c, false) : e(v);
    });
  }
  t(o), te(o, (e) => f = e, () => f), U(() => y(z, "src", re)), n(x, o), G();
}
X(["click"]);
var s = $(() => Q), ie = d('<img class="cover svelte-v3lj8z"/>'), ce = d('<img alt="No cover available" class="cover placeholder svelte-v3lj8z"/>'), pe = d('<div class="book-card svelte-v3lj8z"><!> <div class="details svelte-v3lj8z"><button aria-label="Close book view" class="close svelte-v3lj8z">X</button> <h3 class="title svelte-v3lj8z"> </h3> <p class="author svelte-v3lj8z"> </p> <div class="meta-grid svelte-v3lj8z"><span class="meta-label svelte-v3lj8z">Accession:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">ISBN:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Type:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Published:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Pages:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Language:</span> <span class="meta-value svelte-v3lj8z"> </span></div></div></div>');
function de(x, h) {
  D(h, false);
  function m(b) {
    s(s().activeView = false);
  }
  const i = "https://via.placeholder.com/128x180?text=No+Cover";
  let f = s().data.num_of_pages && Number(s().data.num_of_pages) > 0 ? s().data.num_of_pages : "N/A";
  se();
  var _ = pe(), o = a(_);
  {
    var z = (b) => {
      var k = ie();
      U(() => {
        y(k, "src", s().data.image_links), y(k, "alt", `Cover of ${s().data.book_name}`);
      }), n(b, k);
    }, l = (b) => {
      var k = ce();
      y(k, "src", i), n(b, k);
    };
    M(o, (b) => {
      s().data.image_links ? b(z) : b(l, false);
    });
  }
  var v = r(o, 2), c = a(v);
  c.__click = m;
  var e = r(c, 2), p = a(e, true);
  t(e);
  var j = r(e, 2), R = a(j);
  t(j);
  var V = r(j, 2), g = r(a(V), 2), w = a(g, true);
  t(g);
  var S = r(g, 4), q = a(S, true);
  t(S);
  var I = r(S, 4), E = a(I, true);
  t(I);
  var N = r(I, 4), F = a(N, true);
  t(N);
  var A = r(N, 4), H = a(A, true);
  t(A);
  var P = r(A, 4), J = a(P, true);
  t(P), t(V), t(v), t(_), U(() => {
    u(p, s().data.book_name || "Untitled"), u(R, `by ${(s().data.author || "Unknown Author") ?? ""}`), u(w, s().data.accession || "\u2014"), u(q, s().data.isbn || "\u2014"), u(E, s().data.book_type || "\u2014"), u(F, s().data.published || "\u2014"), u(H, f), u(J, s().data.language || "N/A");
  }), n(x, _), G();
}
X(["click"]);
var ue = d('<div class="book-view-column svelte-1uha8ag"><!></div>'), he = d('<div class="container svelte-1uha8ag"><!> <div class="content-wrapper svelte-1uha8ag"><div class="input-column svelte-1uha8ag"><!></div> <!></div></div>'), me = d('<!> <div class="or svelte-1uha8ag">OR</div> <a class="use-camera svelte-1uha8ag" href="livekit">Use your camera to add books</a>', 1);
function Se(x, h) {
  D(h, true);
  let m = T(true);
  W([]);
  let i = T(false);
  {
    const l = localStorage.getItem("renderSpreadsheet");
    B(i, l === "true", true);
  }
  var f = K(), _ = O(f);
  {
    var o = (l) => {
      var v = he(), c = a(v);
      ee(c, {});
      var e = r(c, 2), p = a(e), j = a(p);
      ae(j, {}), t(p);
      var R = r(p, 2);
      {
        var V = (g) => {
          var w = ue(), S = a(w);
          de(S, {}), t(w), n(g, w);
        };
        M(R, (g) => {
          Q.activeView && g(V);
        });
      }
      t(e), t(v), n(l, v);
    }, z = (l) => {
      var v = me(), c = O(v);
      ne(c, { get firstRun() {
        return C(m);
      }, set firstRun(e) {
        B(m, e, true);
      }, get renderSpreadsheet() {
        return C(i);
      }, set renderSpreadsheet(e) {
        B(i, e, true);
      } }), Y(4), n(l, v);
    };
    M(_, (l) => {
      !C(m) && C(i) ? l(o) : l(z, false);
    });
  }
  n(x, f), G();
}
export {
  Se as component
};
