import { R as b, g, T as D, U as L, s as Y, V as m, K as B, W as U, S as M, X as N, Y as $, D as h, Z as x, _ as y, $ as Z, a0 as q, a1 as w, Q as z, a2 as C } from "./D_hOHglV.js";
let S = false;
function G(r) {
  var a = S;
  try {
    return S = false, [r(), S];
  } finally {
    S = a;
  }
}
function Q(r, a, t, d) {
  var _a;
  var f = !z || (t & C) !== 0, v = (t & w) !== 0, E = (t & q) !== 0, n = d, c = true, o = () => (c && (c = false, n = E ? h(d) : d), n), u;
  if (v) {
    var O = M in r || N in r;
    u = ((_a = b(r, a)) == null ? void 0 : _a.set) ?? (O && a in r ? (e) => r[a] = e : void 0);
  }
  var _, I = false;
  v ? [_, I] = G(() => r[a]) : _ = r[a], _ === void 0 && d !== void 0 && (_ = o(), u && (f && x(), u(_)));
  var i;
  if (f ? i = () => {
    var e = r[a];
    return e === void 0 ? o() : (c = true, e);
  } : i = () => {
    var e = r[a];
    return e !== void 0 && (n = void 0), e === void 0 ? n : e;
  }, f && (t & y) === 0) return i;
  if (u) {
    var A = r.$$legacy;
    return (function(e, l) {
      return arguments.length > 0 ? ((!f || !l || A || I) && u(l ? i() : e), e) : i();
    });
  }
  var P = false, s = ((t & Z) !== 0 ? D : $)(() => (P = false, i()));
  v && g(s);
  var T = B;
  return (function(e, l) {
    if (arguments.length > 0) {
      const R = l ? g(s) : f && v ? L(e) : e;
      return Y(s, R), P = true, n !== void 0 && (n = R), e;
    }
    return m && P || (T.f & U) !== 0 ? s.v : g(s);
  });
}
export {
  Q as p
};
