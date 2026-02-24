import { V as y, h as R, W as D, X as L, Y as m, Z as B, _ as N, $ as Y, a0 as T, a1 as M, a2 as x, a3 as U, g as h, K as $, a4 as w, a5 as C, s as F, a6 as Z, D as q, a7 as z, a8 as G, y as H, a9 as K, aa as V, ab as W, ac as X, S as j, ad as J } from "./DUA4kTxm.js";
import { B as Q } from "./DL1G3EVv.js";
function ae(e, r, f = false) {
  R && D();
  var i = new Q(e), _ = f ? L : 0;
  function u(t, n) {
    if (R) {
      const S = m(e) === B;
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
  var _ = !K || (f & V) !== 0, u = (f & G) !== 0, t = (f & X) !== 0, n = i, s = true, S = () => (s && (s = false, n = t ? H(i) : i), n), v;
  if (u) {
    var A = j in e || J in e;
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
  }, _ && (f & U) === 0) return d;
  if (v) {
    var I = e.$$legacy;
    return (function(a, g) {
      return arguments.length > 0 ? ((!_ || !g || I || E) && v(g ? d() : a), a) : d();
    });
  }
  var P = false, c = ((f & W) !== 0 ? $ : w)(() => (P = false, d()));
  u && h(c);
  var O = q;
  return (function(a, g) {
    if (arguments.length > 0) {
      const b = g ? h(c) : _ && u ? C(a) : a;
      return F(c, b), P = true, n !== void 0 && (n = b), a;
    }
    return Z && P || (O.f & z) !== 0 ? c.v : h(c);
  });
}
export {
  ae as i,
  re as p
};
