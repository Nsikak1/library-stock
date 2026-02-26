import { f as c, a as f } from "../chunks/Dy7lmqI0.js";
import { V as p, X as _, n as h, aN as T, h as l, at as O, ah as w, av as d, a0 as g, $ as u, u as N, p as y, G as E, g as C, a as b, o as S, b as m, s as M, f as A, O as L, w as k, aO as x, c as B } from "../chunks/DUA4kTxm.js";
import { B as F } from "../chunks/DL1G3EVv.js";
import { s as I } from "../chunks/CEiJdahZ.js";
import { b as U } from "../chunks/DamuyVK_.js";
function $(s, n, ...a) {
  var i = new F(s);
  p(() => {
    const t = n() ?? null;
    i.ensure(t, t && ((e) => t(e, ...a)));
  }, _);
}
function j(s, n) {
  let a = null, i = l;
  var t;
  if (l) {
    a = N;
    for (var e = O(document.head); e !== null && (e.nodeType !== w || e.data !== s); ) e = d(e);
    if (e === null) g(false);
    else {
      var o = d(e);
      e.remove(), u(o);
    }
  }
  l || (t = document.head.appendChild(h()));
  try {
    p(() => n(t), T);
  } finally {
    i && (g(true), u(a));
  }
}
const D = true, J = Object.freeze(Object.defineProperty({ __proto__: null, prerender: D }, Symbol.toStringTag, { value: "Module" })), P = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
var R = c('<div class="offline svelte-he653n">There is currently no internet connection</div>');
function W(s, n) {
  y(n, true);
  let a, i = b(true);
  E(() => {
    a.style.visibility = C(i) ? "hidden" : "visible";
  }), S(async () => {
    async function e() {
      let o = await navigator.serviceWorker.ready;
      navigator.serviceWorker.addEventListener("message", (r) => {
        console.log("Event received from service worker: ", r.data), r.data.type === "CONNECTION_STATUS" && M(i, r.data.isOnline, true);
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
  var t = R();
  U(t, (e) => a = e, () => a), f(s, t), m();
}
var Y = c('<link rel="icon"/>'), q = c("<!> <!>", 1);
function K(s, n) {
  y(n, true);
  var i = { prerender: true }, t = q();
  j("12qhfyh", (r) => {
    var v = Y();
    L(() => I(v, "href", P)), k(() => {
      x.title = "Library Stock";
    }), f(r, v);
  });
  var e = A(t);
  W(e, {});
  var o = B(e, 2);
  return $(o, () => n.children), f(s, t), m(i);
}
export {
  K as component,
  J as universal
};
