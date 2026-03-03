var _a;
import { J as T, e as u, K as l, M as v, H as d, T as p, O as h, j as i, k as s, R as E, P as g, Q as y, U as M, V as N } from "./BtsFhd5D.js";
const x = ((_a = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : _a.trustedTypes) && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (t) => t });
function A(t) {
  return (x == null ? void 0 : x.createHTML(t)) ?? t;
}
function b(t) {
  var r = T("template");
  return r.innerHTML = A(t.replaceAll("<!>", "<!---->")), r.content;
}
function n(t, r) {
  var e = d;
  e.nodes === null && (e.nodes = { start: t, end: r, a: null, t: null });
}
function O(t, r) {
  var e = (r & p) !== 0, f = (r & h) !== 0, a, c = !t.startsWith("<!>");
  return () => {
    if (i) return n(s, null), s;
    a === void 0 && (a = b(c ? t : "<!>" + t), e || (a = l(a)));
    var o = f || v ? document.importNode(a, true) : a.cloneNode(true);
    if (e) {
      var _ = l(o), m = o.lastChild;
      n(_, m);
    } else n(o, o);
    return o;
  };
}
function P(t = "") {
  if (!i) {
    var r = u(t + "");
    return n(r, r), r;
  }
  var e = s;
  return e.nodeType !== y ? (e.before(e = u()), M(e)) : N(e), n(e, e), e;
}
function R() {
  if (i) return n(s, null), s;
  var t = document.createDocumentFragment(), r = document.createComment(""), e = u();
  return t.append(r, e), n(r, e), t;
}
function w(t, r) {
  if (i) {
    var e = d;
    ((e.f & E) === 0 || e.nodes.end === null) && (e.nodes.end = s), g();
    return;
  }
  t !== null && t.before(r);
}
export {
  w as a,
  n as b,
  R as c,
  O as f,
  P as t
};
