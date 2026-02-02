import { W as y, h as R, X as L, Y as m, Z as B, _ as D, $ as N, a0 as Y, a1 as T, a2 as M, g as h, M as x, a3 as C, s as U, a4 as $, C as w, a5 as F, S as G, a6 as Z, a7 as q, x as z, a8 as H, a9 as W, aa as X, ab as j, ac as J, G as K, ad as Q } from "./BR3rKFbi.js";
import { B as V } from "./LIiORL9O.js";
function ae(e, r, f = false) {
  R && L();
  var i = new V(e), _ = f ? m : 0;
  function u(t, n) {
    if (R) {
      const S = B(e) === D;
      if (t === S) {
        var s = N();
        Y(s), i.anchor = s, T(false), i.ensure(t, n), T(true);
        return;
      }
    }
    i.ensure(t, n);
  }
  y(() => {
    var t = false;
    r((n, s = true) => {
      t = true, u(s, n);
    }), t || u(false, null);
  }, _);
}
let o = false;
function k(e) {
  var r = o;
  try {
    return o = false, [e(), o];
  } finally {
    o = r;
  }
}
function re(e, r, f, i) {
  var _a;
  var _ = !K || (f & Q) !== 0, u = (f & J) !== 0, t = (f & j) !== 0, n = i, s = true, S = () => (s && (s = false, n = t ? z(i) : i), n), v;
  if (u) {
    var A = G in e || Z in e;
    v = ((_a = M(e, r)) == null ? void 0 : _a.set) ?? (A && r in e ? (a) => e[r] = a : void 0);
  }
  var l, E = false;
  u ? [l, E] = k(() => e[r]) : l = e[r], l === void 0 && i !== void 0 && (l = S(), v && (_ && H(), v(l)));
  var d;
  if (_ ? d = () => {
    var a = e[r];
    return a === void 0 ? S() : (s = true, a);
  } : d = () => {
    var a = e[r];
    return a !== void 0 && (n = void 0), a === void 0 ? n : a;
  }, _ && (f & W) === 0) return d;
  if (v) {
    var I = e.$$legacy;
    return (function(a, g) {
      return arguments.length > 0 ? ((!_ || !g || I || E) && v(g ? d() : a), a) : d();
    });
  }
  var P = false, c = ((f & X) !== 0 ? x : q)(() => (P = false, d()));
  u && h(c);
  var O = w;
  return (function(a, g) {
    if (arguments.length > 0) {
      const b = g ? h(c) : _ && u ? C(a) : a;
      return U(c, b), P = true, n !== void 0 && (n = b), a;
    }
    return $ && P || (O.f & F) !== 0 ? c.v : h(c);
  });
}
export {
  ae as i,
  re as p
};
