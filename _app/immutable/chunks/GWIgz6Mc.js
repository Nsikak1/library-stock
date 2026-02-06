import { W as y, h as R, X as L, Y as m, Z as B, _ as D, $ as N, a0 as Y, a1 as T, a2 as M, a3 as x, a4 as C, g as h, M as U, a5 as $, a6 as w, s as F, a7 as G, C as Z, a8 as q, a9 as z, x as H, G as W, aa as X, ab as j, ac as J, S as K, ad as Q } from "./SbAXgMIg.js";
import { B as V } from "./B2bE9P_h.js";
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
  var _ = !W || (f & X) !== 0, u = (f & z) !== 0, t = (f & J) !== 0, n = i, s = true, S = () => (s && (s = false, n = t ? H(i) : i), n), v;
  if (u) {
    var A = K in e || Q in e;
    v = ((_a = M(e, r)) == null ? void 0 : _a.set) ?? (A && r in e ? (a) => e[r] = a : void 0);
  }
  var l, E = false;
  u ? [l, E] = k(() => e[r]) : l = e[r], l === void 0 && i !== void 0 && (l = S(), v && (_ && x(), v(l)));
  var d;
  if (_ ? d = () => {
    var a = e[r];
    return a === void 0 ? S() : (s = true, a);
  } : d = () => {
    var a = e[r];
    return a !== void 0 && (n = void 0), a === void 0 ? n : a;
  }, _ && (f & C) === 0) return d;
  if (v) {
    var I = e.$$legacy;
    return (function(a, g) {
      return arguments.length > 0 ? ((!_ || !g || I || E) && v(g ? d() : a), a) : d();
    });
  }
  var P = false, c = ((f & j) !== 0 ? U : $)(() => (P = false, d()));
  u && h(c);
  var O = Z;
  return (function(a, g) {
    if (arguments.length > 0) {
      const b = g ? h(c) : _ && u ? w(a) : a;
      return F(c, b), P = true, n !== void 0 && (n = b), a;
    }
    return G && P || (O.f & q) !== 0 ? c.v : h(c);
  });
}
export {
  ae as i,
  re as p
};
