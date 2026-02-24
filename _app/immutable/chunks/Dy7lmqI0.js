var _a;
import { at as f, aD as v, n as i, aE as E, aF as p, D as u, h as d, u as o, aG as h, W as T, aH as g, $ as y, aI as N } from "./DUA4kTxm.js";
function w(a) {
  var n = document.createElement("template");
  return n.innerHTML = a.replaceAll("<!>", "<!---->"), n.content;
}
function r(a, n) {
  var e = u;
  e.nodes === null && (e.nodes = { start: a, end: n, a: null, t: null });
}
function D(a, n) {
  var e = (n & E) !== 0, l = (n & p) !== 0, t, _ = !a.startsWith("<!>");
  return () => {
    if (d) return r(o, null), o;
    t === void 0 && (t = w(_ ? a : "<!>" + a), e || (t = f(t)));
    var s = l || v ? document.importNode(t, true) : t.cloneNode(true);
    if (e) {
      var c = f(s), m = s.lastChild;
      r(c, m);
    } else r(s, s);
    return s;
  };
}
function F(a = "") {
  if (!d) {
    var n = i(a + "");
    return r(n, n), n;
  }
  var e = o;
  return e.nodeType !== g && (e.before(e = i()), y(e)), r(e, e), e;
}
function M() {
  if (d) return r(o, null), o;
  var a = document.createDocumentFragment(), n = document.createComment(""), e = i();
  return a.append(n, e), r(n, e), a;
}
function b(a, n) {
  if (d) {
    var e = u;
    ((e.f & h) === 0 || e.nodes.end === null) && (e.nodes.end = o), T();
    return;
  }
  a !== null && a.before(n);
}
const x = "5";
typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(x);
N();
export {
  b as a,
  r as b,
  M as c,
  D as f,
  F as t
};
