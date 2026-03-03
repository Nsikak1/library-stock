import { $ as m, j as E, P as D, a0 as L, a1 as N, a2 as B, a3 as Y, a4 as M, U, a5 as I, k as w, a6 as x, a7 as H, a8 as $, g as R, a9 as C, s as F, aa as j, H as q, ab as z, ac as G, o as Z, ad as y, ae as J, w as K, af as Q, ag as V, S as W, ah as X } from "./BtsFhd5D.js";
import { B as p } from "./Bzm_M8ul.js";
import { l as k } from "./CUqRO1f7.js";
function ia(e, n, u = false) {
  var _;
  E && (_ = w, D());
  var s = new p(e), d = u ? L : 0;
  function o(r, t) {
    if (E) {
      var f = N(_), i;
      if (f === B ? i = 0 : f === Y ? i = false : i = parseInt(f.substring(1)), r !== i) {
        var S = M();
        U(S), s.anchor = S, I(false), s.ensure(r, t), I(true);
        return;
      }
    }
    s.ensure(r, t);
  }
  m(() => {
    var r = false;
    n((t, f = 0) => {
      r = true, o(f, t);
    }), r || o(false, null);
  }, d);
}
let P = false;
function aa(e) {
  var n = P;
  try {
    return P = false, [e(), P];
  } finally {
    P = n;
  }
}
function sa(e, n, u, _) {
  var _a;
  var s = !k || (u & y) !== 0, d = (u & G) !== 0, o = (u & V) !== 0, r = _, t = true, f = () => (t && (t = false, r = o ? Z(_) : _), r), i;
  if (d) {
    var S = W in e || X in e;
    i = ((_a = x(e, n)) == null ? void 0 : _a.set) ?? (S && n in e ? (a) => e[n] = a : void 0);
  }
  var l, b = false;
  d ? [l, b] = aa(() => e[n]) : l = e[n], l === void 0 && _ !== void 0 && (l = f(), i && (s && H(), i(l)));
  var v;
  if (s ? v = () => {
    var a = e[n];
    return a === void 0 ? f() : (t = true, a);
  } : v = () => {
    var a = e[n];
    return a !== void 0 && (r = void 0), a === void 0 ? r : a;
  }, s && (u & $) === 0) return v;
  if (i) {
    var h = e.$$legacy;
    return (function(a, g) {
      return arguments.length > 0 ? ((!s || !g || h || b) && i(g ? v() : a), a) : v();
    });
  }
  var T = false, c = ((u & J) !== 0 ? K : Q)(() => (T = false, v()));
  d && R(c);
  var O = q;
  return (function(a, g) {
    if (arguments.length > 0) {
      const A = g ? R(c) : s && d ? C(a) : a;
      return F(c, A), T = true, r !== void 0 && (r = A), a;
    }
    return j && T || (O.f & z) !== 0 ? c.v : R(c);
  });
}
export {
  ia as i,
  sa as p
};
