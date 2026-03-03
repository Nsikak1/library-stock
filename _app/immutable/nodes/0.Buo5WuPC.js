import "../chunks/DAC7LG0P.js";
import { $ as u, a0 as _, e as T, aS as E, ay as h, j as l, aC as O, aD as d, a5 as g, U as p, k as C, K as w, W as y, n as N, g as S, aO as b, Y as m, a as M, s as A, f as L, X as k, B as x, aT as B, b as F } from "../chunks/BtsFhd5D.js";
import { a as f, f as c } from "../chunks/DLCqchCO.js";
import { B as U } from "../chunks/Bzm_M8ul.js";
import { s as D } from "../chunks/BpUz2bbF.js";
import { b as I } from "../chunks/CxYDYBQw.js";
function R(s, n, ...a) {
  var i = new U(s);
  u(() => {
    const t = n() ?? null;
    i.ensure(t, t && ((e) => t(e, ...a)));
  }, _);
}
function $(s, n) {
  let a = null, i = l;
  var t;
  if (l) {
    a = C;
    for (var e = w(document.head); e !== null && (e.nodeType !== O || e.data !== s); ) e = d(e);
    if (e === null) g(false);
    else {
      var o = d(e);
      e.remove(), p(o);
    }
  }
  l || (t = document.head.appendChild(T()));
  try {
    u(() => n(t), E | h);
  } finally {
    i && (g(true), p(a));
  }
}
const j = true, Q = Object.freeze(Object.defineProperty({ __proto__: null, prerender: j }, Symbol.toStringTag, { value: "Module" })), P = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
var W = c('<div class="offline svelte-he653n">There is currently no internet connection</div>');
function Y(s, n) {
  y(n, true);
  let a, i = M(true);
  N(() => {
    a.style.visibility = S(i) ? "hidden" : "visible";
  }), b(async () => {
    async function e() {
      let o = await navigator.serviceWorker.ready;
      navigator.serviceWorker.addEventListener("message", (r) => {
        console.log("Event received from service worker: ", r.data), r.data.type === "CONNECTION_STATUS" && A(i, r.data.isOnline, true);
      }), window.addEventListener("online", (r) => {
        var _a;
        console.log("You have come online!"), (_a = o.active) == null ? void 0 : _a.postMessage({ type: "CONNECTION_STATUS", isOnline: true });
      }), window.addEventListener("offline", async (r) => {
        var _a;
        console.log("You have gone offline!"), (_a = o.active) == null ? void 0 : _a.postMessage({ type: "CONNECTION_STATUS", isOnline: false });
      }), navigator.onLine ? console.log("Currently online on page load") : console.log("Currently offline on page load"), o.active && o.active.postMessage({ type: "CONNECTION_STATUS", isOnline: navigator.onLine });
    }
    await e();
  });
  var t = W();
  I(t, (e) => a = e, () => a), f(s, t), m();
}
var q = c('<link rel="icon"/>'), z = c("<!> <!>", 1);
function Z(s, n) {
  y(n, true);
  var i = { prerender: true }, t = z();
  $("12qhfyh", (r) => {
    var v = q();
    k(() => D(v, "href", P)), x(() => {
      B.title = "Library Stock";
    }), f(r, v);
  });
  var e = L(t);
  Y(e, {});
  var o = F(e, 2);
  return R(o, () => n.children), f(s, t), m(i);
}
export {
  Z as component,
  Q as universal
};
