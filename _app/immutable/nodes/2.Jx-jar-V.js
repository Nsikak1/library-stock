import { f as n, a as i } from "../chunks/Bw-Wuv52.js";
import { o as R } from "../chunks/DzzNYz1_.js";
import { p as w, Q as x, c as b, R as V, P as z, b as k, a6 as I, s as m, a as _, g as f, f as S, am as G } from "../chunks/SbAXgMIg.js";
import { p as y, i as M } from "../chunks/GWIgz6Mc.js";
import { b as C } from "../chunks/BOS2cBk9.js";
import { a as L, S as B, I as E } from "../chunks/D04HwJ2t.js";
import { d as T } from "../chunks/k-CT1vo6.js";
import { s as U } from "../chunks/HVy_KHCI.js";
const Y = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-1.27%20110.037%20110.037'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M57.55%200h7.425v10c12.513%200%2025.025.025%2037.537-.038%202.113.087%204.438-.062%206.275%201.2%201.287%201.85%201.138%204.2%201.225%206.325-.062%2021.7-.037%2043.388-.024%2065.075-.062%203.638.337%207.35-.425%2010.938-.5%202.6-3.625%202.662-5.713%202.75-12.95.037-25.912-.025-38.875%200v11.25h-7.763c-19.05-3.463-38.138-6.662-57.212-10V10.013C19.188%206.675%2038.375%203.388%2057.55%200z'%20fill='%23207245'/%3e%3cpath%20d='M64.975%2013.75h41.25V92.5h-41.25V85h10v-8.75h-10v-5h10V62.5h-10v-5h10v-8.75h-10v-5h10V35h-10v-5h10v-8.75h-10v-7.5z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2021.25h17.5V30h-17.5v-8.75z'%20fill='%23207245'/%3e%3cpath%20d='M37.025%2032.962c2.825-.2%205.663-.375%208.5-.512a2607.344%202607.344%200%200%201-10.087%2020.487c3.438%207%206.949%2013.95%2010.399%2020.95a716.28%20716.28%200%200%201-9.024-.575c-2.125-5.213-4.713-10.25-6.238-15.7-1.699%205.075-4.125%209.862-6.074%2014.838-2.738-.038-5.476-.15-8.213-.263C19.5%2065.9%2022.6%2059.562%2025.912%2053.312c-2.812-6.438-5.9-12.75-8.8-19.15%202.75-.163%205.5-.325%208.25-.475%201.862%204.888%203.899%209.712%205.438%2014.725%201.649-5.312%204.112-10.312%206.225-15.45z'%20fill='%23ffffff'/%3e%3cpath%20d='M79.975%2035h17.5v8.75h-17.5V35zM79.975%2048.75h17.5v8.75h-17.5v-8.75zM79.975%2062.5h17.5v8.75h-17.5V62.5zM79.975%2076.25h17.5V85h-17.5v-8.75z'%20fill='%23207245'/%3e%3c/svg%3e";
var O = n('<span class="svelte-1rbplsc">Click here to create a new spreadsheet</span>'), P = n('<span class="svelte-1rbplsc">Click here to to continue your work</span>'), Q = n('<button class="custom-dashed-border svelte-1rbplsc" id="spreadsheet-create-button"><img id="excel-logo" alt="upload your excel file by drag and drop" class="svelte-1rbplsc"/> <!></button>');
function j(p, v) {
  w(v, true);
  let a = y(v, "firstRun", 15), l = y(v, "renderSpreadsheet", 15), o;
  const c = () => {
    console.log("Clicked"), L.getInstance(), l(true), a(false), localStorage.setItem("renderSpreadsheet", "true");
  };
  var r = Q();
  r.__click = c;
  var h = x(r), u = b(h, 2);
  {
    var g = (t) => {
      var s = O();
      i(t, s);
    }, e = (t) => {
      var s = P();
      i(t, s);
    };
    M(u, (t) => {
      l() ? t(e, false) : t(g);
    });
  }
  V(r), C(r, (t) => o = t, () => o), z(() => U(h, "src", Y)), i(p, r), k();
}
T(["click"]);
var q = n("<!> <!>", 1), A = n('<!> <div class="or svelte-1uha8ag">OR</div> <a class="use-camera svelte-1uha8ag" href="livekit">Use your camera to add books</a>', 1), D = n('<div><div class="offline svelte-1uha8ag">There is currently no internet connection</div> <!></div>');
function $(p, v) {
  w(v, true);
  let a, l = _(true);
  I([]);
  let o = _(false);
  {
    const e = localStorage.getItem("renderSpreadsheet");
    m(o, e === "true", true);
  }
  R(() => {
    window.addEventListener("online", (e) => {
      console.log("You have come online!"), a.style.visibility = "hidden";
    }), window.addEventListener("offline", (e) => {
      console.log("You have gone offline!"), a.style.visibility = "visible";
    }), navigator.onLine ? (console.log("Currently online."), a.style.visibility = "hidden") : (a.style.visibility = "visible", console.log("Currently offline."));
  });
  var c = D(), r = x(c);
  C(r, (e) => a = e, () => a);
  var h = b(r, 2);
  {
    var u = (e) => {
      var t = q(), s = S(t);
      B(s, {});
      var d = b(s, 2);
      E(d, {}), i(e, t);
    }, g = (e) => {
      var t = A(), s = S(t);
      j(s, { get firstRun() {
        return f(l);
      }, set firstRun(d) {
        m(l, d, true);
      }, get renderSpreadsheet() {
        return f(o);
      }, set renderSpreadsheet(d) {
        m(o, d, true);
      } }), G(4), i(e, t);
    };
    M(h, (e) => {
      !f(l) && f(o) ? e(u) : e(g, false);
    });
  }
  V(c), i(p, c), k();
}
export {
  $ as component
};
