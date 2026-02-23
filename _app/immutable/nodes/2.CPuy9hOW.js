import { f as d, a as c } from "../chunks/Bw-Wuv52.js";
import { o as K } from "../chunks/DzzNYz1_.js";
import { p as D, Q as t, c as r, R as s, P as U, b as G, a6 as W, s as L, f as T, a as E, g as M, am as Z } from "../chunks/SbAXgMIg.js";
import { p as Y, i as I } from "../chunks/GWIgz6Mc.js";
import { b as O } from "../chunks/BOS2cBk9.js";
import { a as $, r as ee, b as Q, S as ae, I as te } from "../chunks/CQGmJIS1.js";
import { d as X } from "../chunks/k-CT1vo6.js";
import { s as R } from "../chunks/HVy_KHCI.js";
import { i as se } from "../chunks/QIZ8oGIf.js";
import { s as f } from "../chunks/BKasJPZb.js";
const le = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-1.27%20110.037%20110.037'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M57.55%200h7.425v10c12.513%200%2025.025.025%2037.537-.038%202.113.087%204.438-.062%206.275%201.2%201.287%201.85%201.138%204.2%201.225%206.325-.062%2021.7-.037%2043.388-.024%2065.075-.062%203.638.337%207.35-.425%2010.938-.5%202.6-3.625%202.662-5.713%202.75-12.95.037-25.912-.025-38.875%200v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188%206.675%2038.375%203.388%2057.55%200z'%20fill='%23207245'/%3e%3cpath%20d='M64.975%2013.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2021.25h17.5V30h-17.5v-8.75z'%20fill='%23207245'/%3e%3cpath%20d='M37.025%2032.962c2.825-.2%205.663-.375%208.5-.512a2607.344%202607.344%200%200%201-10.087%2020.487c3.438%207%206.949%2013.95%2010.399%2020.95a716.28%20716.28%200%200%201-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699%205.075-4.125%209.862-6.074%2014.838-2.738-.038-5.476-.15-8.213-.263C19.5%2065.9%2022.6%2059.562%2025.912%2053.312c-2.812-6.438-5.9-12.75-8.8-19.15%202.75-.163%205.5-.325%208.25-.475%201.862%204.888%203.899%209.712%205.438%2014.725%201.649-5.312%204.112-10.312%206.225-15.45z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2035h17.5v8.75h-17.5V35zM79.975%2048.75h17.5v8.75h-17.5v-8.75zM79.975%2062.5h17.5v8.75h-17.5V62.5zM79.975%2076.25h17.5V85h-17.5v-8.75z'%20fill='%23207245'/%3e%3c/svg%3e";
var re = d('<span class="svelte-1rbplsc">Click here to create a new spreadsheet</span>'), ve = d('<span class="svelte-1rbplsc">Click here to to continue your work</span>'), oe = d('<button class="custom-dashed-border svelte-1rbplsc" id="spreadsheet-create-button"><img id="excel-logo" alt="upload your excel file by drag and drop" class="svelte-1rbplsc"/> <!></button>');
function ie(k, m) {
  D(m, true);
  let o = Y(m, "firstRun", 15), u = Y(m, "renderSpreadsheet", 15), p;
  const h = () => {
    console.log("Clicked"), $.getInstance(), u(true), o(false), localStorage.setItem("renderSpreadsheet", "true");
  };
  var v = oe();
  v.__click = h;
  var b = t(v), w = r(b, 2);
  {
    var z = (e) => {
      var i = re();
      c(e, i);
    }, a = (e) => {
      var i = ve();
      c(e, i);
    };
    I(w, (e) => {
      u() ? e(a, false) : e(z);
    });
  }
  s(v), O(v, (e) => p = e, () => p), U(() => R(b, "src", le)), c(k, v), G();
}
X(["click"]);
var l = ee(() => Q), ne = d('<img class="cover svelte-v3lj8z"/>'), ce = d('<img alt="No cover available" class="cover placeholder svelte-v3lj8z"/>'), de = d('<div class="book-card svelte-v3lj8z"><!> <div class="details svelte-v3lj8z"><button class="close svelte-v3lj8z">X</button> <h3 class="title svelte-v3lj8z"> </h3> <p class="author svelte-v3lj8z"> </p> <div class="meta-grid svelte-v3lj8z"><span class="meta-label svelte-v3lj8z">Accession:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">ISBN:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Type:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Published:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Pages:</span> <span class="meta-value svelte-v3lj8z"> </span> <span class="meta-label svelte-v3lj8z">Language:</span> <span class="meta-value svelte-v3lj8z"> </span></div></div></div>');
function pe(k, m) {
  D(m, false);
  function o(g) {
    l(l().activeView = false);
  }
  const u = "https://via.placeholder.com/128x180?text=No+Cover";
  let p = l().data.num_of_pages && Number(l().data.num_of_pages) > 0 ? l().data.num_of_pages : "N/A";
  se();
  var h = de(), v = t(h);
  {
    var b = (g) => {
      var x = ne();
      U(() => {
        R(x, "src", l().data.image_links), R(x, "alt", `Cover of ${l().data.book_name}`);
      }), c(g, x);
    }, w = (g) => {
      var x = ce();
      R(x, "src", u), c(g, x);
    };
    I(v, (g) => {
      l().data.image_links ? g(b) : g(w, false);
    });
  }
  var z = r(v, 2), a = t(z);
  a.__click = o;
  var e = r(a, 2), i = t(e, true);
  s(e);
  var n = r(e, 2), j = t(n);
  s(n);
  var C = r(n, 2), y = r(t(C), 2), N = t(y, true);
  s(y);
  var _ = r(y, 4), S = t(_, true);
  s(_);
  var V = r(_, 4), q = t(V, true);
  s(V);
  var A = r(V, 4), F = t(A, true);
  s(A);
  var B = r(A, 4), H = t(B, true);
  s(B);
  var P = r(B, 4), J = t(P, true);
  s(P), s(C), s(z), s(h), U(() => {
    f(i, l().data.book_name || "Untitled"), f(j, `by ${(l().data.author || "Unknown Author") ?? ""}`), f(N, l().data.accession || "\u2014"), f(S, l().data.isbn || "\u2014"), f(q, l().data.book_type || "\u2014"), f(F, l().data.published || "\u2014"), f(H, p), f(J, l().data.language || "N/A");
  }), c(k, h), G();
}
X(["click"]);
var ue = d('<div class="book-view-column svelte-1uha8ag"><!></div>'), he = d('<div class="container svelte-1uha8ag"><!> <div class="content-wrapper svelte-1uha8ag"><div class="input-column svelte-1uha8ag"><!></div> <!></div></div>'), fe = d('<!> <div class="or svelte-1uha8ag">OR</div> <a class="use-camera svelte-1uha8ag" href="livekit">Use your camera to add books</a>', 1), me = d('<div class="offline svelte-1uha8ag">There is currently no internet connection</div> <!>', 1);
function Ve(k, m) {
  D(m, true);
  let o, u = E(true);
  W([]);
  let p = E(false);
  {
    const a = localStorage.getItem("renderSpreadsheet");
    L(p, a === "true", true);
  }
  K(() => {
    window.addEventListener("online", (a) => {
      console.log("You have come online!"), o.style.visibility = "hidden";
    }), window.addEventListener("offline", (a) => {
      console.log("You have gone offline!"), o.style.visibility = "visible";
    }), navigator.onLine ? (console.log("Currently online."), o.style.visibility = "hidden") : (o.style.visibility = "visible", console.log("Currently offline."));
  });
  var h = me(), v = T(h);
  O(v, (a) => o = a, () => o);
  var b = r(v, 2);
  {
    var w = (a) => {
      var e = he(), i = t(e);
      ae(i, {});
      var n = r(i, 2), j = t(n), C = t(j);
      te(C, {}), s(j);
      var y = r(j, 2);
      {
        var N = (_) => {
          var S = ue(), V = t(S);
          pe(V, {}), s(S), c(_, S);
        };
        I(y, (_) => {
          Q.activeView && _(N);
        });
      }
      s(n), s(e), c(a, e);
    }, z = (a) => {
      var e = fe(), i = T(e);
      ie(i, { get firstRun() {
        return M(u);
      }, set firstRun(n) {
        L(u, n, true);
      }, get renderSpreadsheet() {
        return M(p);
      }, set renderSpreadsheet(n) {
        L(p, n, true);
      } }), Z(4), c(a, e);
    };
    I(b, (a) => {
      !M(u) && M(p) ? a(w) : a(z, false);
    });
  }
  c(k, h), G();
}
export {
  Ve as component
};
