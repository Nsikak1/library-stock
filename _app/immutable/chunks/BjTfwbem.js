var _a;
import { o as i, at as f, aF as v, D as u, aG as E, aH as p, h as d, u as o, aI as h, d as T, aJ as g, i as y, aK as N } from "./CdrJcFTF.js";
function w(a) {
  var n = document.createElement("template");
  return n.innerHTML = a.replaceAll("<!>", "<!---->"), n.content;
}
function r(a, n) {
  var e = u;
  e.nodes === null && (e.nodes = { start: a, end: n, a: null, t: null });
}
function F(a, n) {
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
function M(a = "") {
  if (!d) {
    var n = i(a + "");
    return r(n, n), n;
  }
  var e = o;
  return e.nodeType !== g && (e.before(e = i()), y(e)), r(e, e), e;
}
function b() {
  if (d) return r(o, null), o;
  var a = document.createDocumentFragment(), n = document.createComment(""), e = i();
  return a.append(n, e), r(n, e), a;
}
function C(a, n) {
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
  C as a,
  r as b,
  b as c,
  F as f,
  M as t
};
