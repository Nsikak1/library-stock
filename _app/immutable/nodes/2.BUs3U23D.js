import { f as i, a as l } from "../chunks/CExXKETe.js";
import { o as I } from "../chunks/rookMbWl.js";
import { p as x, a9 as V, c as S, aa as k, a8 as G, b as M, U as L, s as p, a as _, g as f, f as y, am as U } from "../chunks/D_hOHglV.js";
import { i as C } from "../chunks/CmE5gW5p.js";
import { b as z } from "../chunks/HdR-RNnD.js";
import { a as B, S as E, I as T } from "../chunks/DnMP00nx.js";
import { d as Y } from "../chunks/DnPr7c3f.js";
import { s as O } from "../chunks/DRTDbymR.js";
import { p as w } from "../chunks/BF7MbcIG.js";
const j = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-1.27%20110.037%20110.037'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M57.55%200h7.425v10c12.513%200%2025.025.025%2037.537-.038%202.113.087%204.438-.062%206.275%201.2%201.287%201.85%201.138%204.2%201.225%206.325-.062%2021.7-.037%2043.388-.024%2065.075-.062%203.638.337%207.35-.425%2010.938-.5%202.6-3.625%202.662-5.713%202.75-12.95.037-25.912-.025-38.875%200v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188%206.675%2038.375%203.388%2057.55%200z'%20fill='%23207245'/%3e%3cpath%20d='M64.975%2013.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2021.25h17.5V30h-17.5v-8.75z'%20fill='%23207245'/%3e%3cpath%20d='M37.025%2032.962c2.825-.2%205.663-.375%208.5-.512a2607.344%202607.344%200%200%201-10.087%2020.487c3.438%207%206.949%2013.95%2010.399%2020.95a716.28%20716.28%200%200%201-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699%205.075-4.125%209.862-6.074%2014.838-2.738-.038-5.476-.15-8.213-.263C19.5%2065.9%2022.6%2059.562%2025.912%2053.312c-2.812-6.438-5.9-12.75-8.8-19.15%202.75-.163%205.5-.325%208.25-.475%201.862%204.888%203.899%209.712%205.438%2014.725%201.649-5.312%204.112-10.312%206.225-15.45z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2035h17.5v8.75h-17.5V35zM79.975%2048.75h17.5v8.75h-17.5v-8.75zM79.975%2062.5h17.5v8.75h-17.5V62.5zM79.975%2076.25h17.5V85h-17.5v-8.75z'%20fill='%23207245'/%3e%3c/svg%3e";
var q = i('<span class="svelte-1rbplsc">Click here to create a new spreadsheet</span>'), A = i('<span class="svelte-1rbplsc">Click here to to continue your work</span>'), D = i('<button class="custom-dashed-border svelte-1rbplsc" id="spreadsheet-create-button"><img id="excel-logo" alt="upload your excel file by drag and drop" class="svelte-1rbplsc"/> <!></button>');
function F(u, n) {
  x(n, true);
  let r = w(n, "firstRun", 15), s = w(n, "renderSpreadsheet", 15), v;
  const o = () => {
    console.log("Clicked"), B.getInstance(), s(true), r(false), localStorage.setItem("renderSpreadsheet", "true");
  };
  var t = D();
  t.__click = o;
  var c = V(t), g = S(c, 2);
  {
    var m = (e) => {
      var a = q();
      l(e, a);
    }, b = (e) => {
      var a = A();
      l(e, a);
    };
    C(g, (e) => {
      s() ? e(b, false) : e(m);
    });
  }
  k(t), z(t, (e) => v = e, () => v), G(() => O(c, "src", j)), l(u, t), M();
}
Y(["click"]);
var H = i("<!> <!>", 1), J = i('<!> <div class="or svelte-1uha8ag">OR</div> <a class="use-camera svelte-1uha8ag" href="livekit">Use your camera to add books</a>', 1), K = i('<div><div class="offline svelte-1uha8ag">There is currently no internet connection</div> <!></div>');
function ae(u, n) {
  x(n, true);
  let r, s = _(true), v = _("");
  L([]);
  let o = _(false);
  {
    const e = localStorage.getItem("renderSpreadsheet");
    p(o, e === "true", true);
  }
  I(() => {
    window.addEventListener("online", (e) => {
      console.log("You have come online!"), r.style.visibility = "hidden";
    }), window.addEventListener("offline", (e) => {
      console.log("You have gone offline!"), r.style.visibility = "visible";
    }), navigator.onLine ? (console.log("Currently online."), r.style.visibility = "hidden") : (r.style.visibility = "visible", console.log("Currently offline."));
  });
  var t = K(), c = V(t);
  z(c, (e) => r = e, () => r);
  var g = S(c, 2);
  {
    var m = (e) => {
      var a = H(), h = y(a);
      E(h, {});
      var d = S(h, 2);
      T(d, { get message() {
        return f(v);
      }, set message(R) {
        p(v, R, true);
      } }), l(e, a);
    }, b = (e) => {
      var a = J(), h = y(a);
      F(h, { get firstRun() {
        return f(s);
      }, set firstRun(d) {
        p(s, d, true);
      }, get renderSpreadsheet() {
        return f(o);
      }, set renderSpreadsheet(d) {
        p(o, d, true);
      } }), U(4), l(e, a);
    };
    C(g, (e) => {
      !f(s) && f(o) ? e(m) : e(b, false);
    });
  }
  k(t), l(u, t), M();
}
export {
  ae as component
};
