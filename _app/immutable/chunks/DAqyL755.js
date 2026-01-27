import { K as b, M as g, O as D, P as L, Q as Y, R as m, D as B, T as M, S as U, U as y, V as N, y as $, W as h, X as x, Y as Z, Z as q, _ as w, J as z, $ as C } from "./CdrJcFTF.js";
let S = false;
function G(r) {
  var n = S;
  try {
    return S = false, [r(), S];
  } finally {
    S = n;
  }
}
function K(r, n, t, d) {
  var _a;
  var f = !z || (t & C) !== 0, v = (t & w) !== 0, R = (t & q) !== 0, a = d, c = true, o = () => (c && (c = false, a = R ? $(d) : d), a), u;
  if (v) {
    var E = U in r || y in r;
    u = ((_a = b(r, n)) == null ? void 0 : _a.set) ?? (E && n in r ? (e) => r[n] = e : void 0);
  }
  var _, I = false;
  v ? [_, I] = G(() => r[n]) : _ = r[n], _ === void 0 && d !== void 0 && (_ = o(), u && (f && h(), u(_)));
  var i;
  if (f ? i = () => {
    var e = r[n];
    return e === void 0 ? o() : (c = true, e);
  } : i = () => {
    var e = r[n];
    return e !== void 0 && (a = void 0), e === void 0 ? a : e;
  }, f && (t & x) === 0) return i;
  if (u) {
    var A = r.$$legacy;
    return (function(e, l) {
      return arguments.length > 0 ? ((!f || !l || A || I) && u(l ? i() : e), e) : i();
    });
  }
  var P = false, s = ((t & Z) !== 0 ? D : N)(() => (P = false, i()));
  v && g(s);
  var T = B;
  return (function(e, l) {
    if (arguments.length > 0) {
      const O = l ? g(s) : f && v ? L(e) : e;
      return Y(s, O), P = true, a !== void 0 && (a = O), e;
    }
    return m && P || (T.f & M) !== 0 ? s.v : g(s);
  });
}
export {
  K as p
};
