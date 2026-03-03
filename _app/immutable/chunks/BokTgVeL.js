import { D as w, E as g, F as p, G as S, H as k } from "./BtsFhd5D.js";
const l = /* @__PURE__ */ Symbol("events"), D = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
function q(a, e, t) {
  (e[l] ?? (e[l] = {}))[a] = t;
}
function x(a) {
  for (var e = 0; e < a.length; e++) D.add(a[e]);
  for (var t of O) t(a);
}
let h = null;
function B(a) {
  var _a, _b;
  var e = this, t = e.ownerDocument, b = a.type, n = ((_a = a.composedPath) == null ? void 0 : _a.call(a)) || [], r = n[0] || a.target;
  h = a;
  var s = 0, u = h === a && a[l];
  if (u) {
    var c = n.indexOf(u);
    if (c !== -1 && (e === document || e === window)) {
      a[l] = e;
      return;
    }
    var d = n.indexOf(e);
    if (d === -1) return;
    c <= d && (s = c);
  }
  if (r = n[s] || a.target, r !== e) {
    w(a, "currentTarget", { configurable: true, get() {
      return r || t;
    } });
    var m = S, y = k;
    g(null), p(null);
    try {
      for (var o, v = []; r !== null; ) {
        var f = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var _ = (_b = r[l]) == null ? void 0 : _b[b];
          _ != null && (!r.disabled || a.target === r) && _.call(r, a);
        } catch (i) {
          o ? v.push(i) : o = i;
        }
        if (a.cancelBubble || f === e || f === null) break;
        r = f;
      }
      if (o) {
        for (let i of v) queueMicrotask(() => {
          throw i;
        });
        throw o;
      }
    } finally {
      a[l] = e, delete a.currentTarget, g(m), p(y);
    }
  }
}
export {
  D as a,
  q as b,
  x as d,
  B as h,
  O as r
};
