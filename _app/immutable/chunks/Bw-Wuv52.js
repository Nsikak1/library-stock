var _a;
import { n as i, at as f, aD as v, C as u, aE as E, aF as p, h as d, t as o, aG as h, X as T, aH as g, a0 as y, aI as N } from "./SbAXgMIg.js";
function w(a) {
  var n = document.createElement("template");
  return n.innerHTML = a.replaceAll("<!>", "<!---->"), n.content;
}
function t(a, n) {
  var e = u;
  e.nodes === null && (e.nodes = { start: a, end: n, a: null, t: null });
}
function C(a, n) {
  var e = (n & E) !== 0, l = (n & p) !== 0, r, _ = !a.startsWith("<!>");
  return () => {
    if (d) return t(o, null), o;
    r === void 0 && (r = w(_ ? a : "<!>" + a), e || (r = f(r)));
    var s = l || v ? document.importNode(r, true) : r.cloneNode(true);
    if (e) {
      var c = f(s), m = s.lastChild;
      t(c, m);
    } else t(s, s);
    return s;
  };
}
function F(a = "") {
  if (!d) {
    var n = i(a + "");
    return t(n, n), n;
  }
  var e = o;
  return e.nodeType !== g && (e.before(e = i()), y(e)), t(e, e), e;
}
function M() {
  if (d) return t(o, null), o;
  var a = document.createDocumentFragment(), n = document.createComment(""), e = i();
  return a.append(n, e), t(n, e), a;
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
  t as b,
  M as c,
  C as f,
  F as t
};
