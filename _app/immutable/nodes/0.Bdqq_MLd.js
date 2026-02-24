import { f as c, a as f } from "../chunks/Dy7lmqI0.js";
import { V as g, X as m, n as T, aN as h, h as l, at as O, ah as N, av as d, a0 as p, $ as u, u as w, p as y, G as C, g as E, a as S, o as b, b as _, s as M, f as A, O as L, w as k, aO as x, c as B } from "../chunks/DUA4kTxm.js";
import { B as I } from "../chunks/DL1G3EVv.js";
import { s as U } from "../chunks/CEiJdahZ.js";
import { b as F } from "../chunks/DamuyVK_.js";
function $(o, n, ...a) {
  var s = new I(o);
  g(() => {
    const t = n() ?? null;
    s.ensure(t, t && ((e) => t(e, ...a)));
  }, m);
}
function j(o, n) {
  let a = null, s = l;
  var t;
  if (l) {
    a = w;
    for (var e = O(document.head); e !== null && (e.nodeType !== N || e.data !== o); ) e = d(e);
    if (e === null) p(false);
    else {
      var i = d(e);
      e.remove(), u(i);
    }
  }
  l || (t = document.head.appendChild(T()));
  try {
    g(() => n(t), h);
  } finally {
    s && (p(true), u(a));
  }
}
const D = true, J = Object.freeze(Object.defineProperty({ __proto__: null, prerender: D }, Symbol.toStringTag, { value: "Module" })), P = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
var R = c('<div class="offline svelte-he653n">There is currently no internet connection</div>');
function W(o, n) {
  y(n, true);
  let a, s = S(true);
  C(() => {
    a.style.visibility = E(s) ? "hidden" : "visible";
  }), b(async () => {
    async function e() {
      var _a, _b;
      let i = await navigator.serviceWorker.ready;
      navigator.serviceWorker.addEventListener("message", (r) => {
        console.log("Event received from service worker: ", r.data), r.data.type === "CONNECTION_STATUS" && M(s, r.data.isOnline, true);
      }), window.addEventListener("online", (r) => {
        var _a2;
        console.log("You have come online!"), (_a2 = i.active) == null ? void 0 : _a2.postMessage({ type: "CONNECTION_STATUS", isOnline: true });
      }), window.addEventListener("offline", async (r) => {
        var _a2;
        console.log("You have gone offline!"), (_a2 = i.active) == null ? void 0 : _a2.postMessage({ type: "CONNECTION_STATUS", isOnline: false });
      }), navigator.onLine ? (console.log("Currently online on page load"), (_a = i.active) == null ? void 0 : _a.postMessage({ type: "CONNECTION_STATUS", isOnline: true })) : ((_b = i.active) == null ? void 0 : _b.postMessage({ type: "CONNECTION_STATUS", isOnline: false }), console.log("Currently offline.on page load"));
    }
    await e();
  });
  var t = R();
  F(t, (e) => a = e, () => a), f(o, t), _();
}
var Y = c('<link rel="icon"/>'), q = c("<!> <!>", 1);
function K(o, n) {
  y(n, true);
  var s = { prerender: true }, t = q();
  j("12qhfyh", (r) => {
    var v = Y();
    L(() => U(v, "href", P)), k(() => {
      x.title = "Library Stock";
    }), f(r, v);
  });
  var e = A(t);
  W(e, {});
  var i = B(e, 2);
  return $(i, () => n.children), f(o, t), _(s);
}
export {
  K as component,
  J as universal
};
