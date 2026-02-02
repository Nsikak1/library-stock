var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _s, _e, _g, _n, _u, _r, _i, _t2, _a, _h, _o, __, _f, _d, _l, _m, _Tt_instances, E_fn, b_fn, v_fn, c_fn, p_fn, y_fn;
import { ae as z, g as P, af as V, C as W, D as $, ag as C, q as Y, z as d, h as c, K as E, j as G, k as J, ah as D, H as K, y as _, ai as g, v as R, x as q, I as F, G as v, aj as O, ak as U, J as I, P as B, A as Q, al as X, u as w, m as b, am as Z, l as tt, an as H, ao as et, E as st, ap as it, aq as nt, ar as rt, as as A, at, au as ht, av as ot, aw as N, n as y, ax as ft, ay as lt, az as ut, aA as _t, p as dt, aB as ct, aC as pt, b as gt } from "./D_hOHglV.js";
import { a as vt, r as L, h as m } from "./DnPr7c3f.js";
import { b as yt } from "./CExXKETe.js";
function mt(i) {
  let t = 0, e = V(0), n;
  return () => {
    z() && (P(e), W(() => (t === 0 && (n = $(() => i(() => C(e)))), t += 1, () => {
      Y(() => {
        t -= 1, t === 0 && (n == null ? void 0 : n(), n = void 0, C(e));
      });
    })));
  };
}
var Et = st | it | nt;
function bt(i, t, e) {
  new Tt(i, t, e);
}
class Tt {
  constructor(t, e, n) {
    __privateAdd(this, _Tt_instances);
    __publicField(this, "parent");
    __privateAdd(this, _s, false);
    __privateAdd(this, _e);
    __privateAdd(this, _g, c ? d : null);
    __privateAdd(this, _n);
    __privateAdd(this, _u);
    __privateAdd(this, _r);
    __privateAdd(this, _i, null);
    __privateAdd(this, _t2, null);
    __privateAdd(this, _a, null);
    __privateAdd(this, _h, null);
    __privateAdd(this, _o, null);
    __privateAdd(this, __, 0);
    __privateAdd(this, _f, 0);
    __privateAdd(this, _d, false);
    __privateAdd(this, _l, null);
    __privateAdd(this, _m, mt(() => (__privateSet(this, _l, V(__privateGet(this, __))), () => {
      __privateSet(this, _l, null);
    })));
    __privateSet(this, _e, t), __privateSet(this, _n, e), __privateSet(this, _u, n), this.parent = E.b, __privateSet(this, _s, !!__privateGet(this, _n).pending), __privateSet(this, _r, G(() => {
      if (E.b = this, c) {
        const s = __privateGet(this, _g);
        J(), s.nodeType === D && s.data === K ? __privateMethod(this, _Tt_instances, b_fn).call(this) : __privateMethod(this, _Tt_instances, E_fn).call(this);
      } else {
        var o = __privateMethod(this, _Tt_instances, v_fn).call(this);
        try {
          __privateSet(this, _i, _(() => n(o)));
        } catch (s) {
          this.error(s);
        }
        __privateGet(this, _f) > 0 ? __privateMethod(this, _Tt_instances, p_fn).call(this) : __privateSet(this, _s, false);
      }
      return () => {
        var _a2;
        (_a2 = __privateGet(this, _o)) == null ? void 0 : _a2.remove();
      };
    }, Et)), c && __privateSet(this, _e, d);
  }
  is_pending() {
    return __privateGet(this, _s) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!__privateGet(this, _n).pending;
  }
  update_pending_count(t) {
    __privateMethod(this, _Tt_instances, y_fn).call(this, t), __privateSet(this, __, __privateGet(this, __) + t), __privateGet(this, _l) && X(__privateGet(this, _l), __privateGet(this, __));
  }
  get_effect_pending() {
    return __privateGet(this, _m).call(this), P(__privateGet(this, _l));
  }
  error(t) {
    var e = __privateGet(this, _n).onerror;
    let n = __privateGet(this, _n).failed;
    if (__privateGet(this, _d) || !e && !n) throw t;
    __privateGet(this, _i) && (w(__privateGet(this, _i)), __privateSet(this, _i, null)), __privateGet(this, _t2) && (w(__privateGet(this, _t2)), __privateSet(this, _t2, null)), __privateGet(this, _a) && (w(__privateGet(this, _a)), __privateSet(this, _a, null)), c && (b(__privateGet(this, _g)), Z(), b(tt()));
    var o = false, s = false;
    const a = () => {
      if (o) {
        rt();
        return;
      }
      o = true, s && et(), g.ensure(), __privateSet(this, __, 0), __privateGet(this, _a) !== null && R(__privateGet(this, _a), () => {
        __privateSet(this, _a, null);
      }), __privateSet(this, _s, this.has_pending_snippet()), __privateSet(this, _i, __privateMethod(this, _Tt_instances, c_fn).call(this, () => (__privateSet(this, _d, false), _(() => __privateGet(this, _u).call(this, __privateGet(this, _e)))))), __privateGet(this, _f) > 0 ? __privateMethod(this, _Tt_instances, p_fn).call(this) : __privateSet(this, _s, false);
    };
    var f = I;
    try {
      v(null), s = true, e == null ? void 0 : e(t, a), s = false;
    } catch (l) {
      H(l, __privateGet(this, _r) && __privateGet(this, _r).parent);
    } finally {
      v(f);
    }
    n && Y(() => {
      __privateSet(this, _a, __privateMethod(this, _Tt_instances, c_fn).call(this, () => {
        g.ensure(), __privateSet(this, _d, true);
        try {
          return _(() => {
            n(__privateGet(this, _e), () => t, () => a);
          });
        } catch (l) {
          return H(l, __privateGet(this, _r).parent), null;
        } finally {
          __privateSet(this, _d, false);
        }
      }));
    });
  }
}
_s = new WeakMap();
_e = new WeakMap();
_g = new WeakMap();
_n = new WeakMap();
_u = new WeakMap();
_r = new WeakMap();
_i = new WeakMap();
_t2 = new WeakMap();
_a = new WeakMap();
_h = new WeakMap();
_o = new WeakMap();
__ = new WeakMap();
_f = new WeakMap();
_d = new WeakMap();
_l = new WeakMap();
_m = new WeakMap();
_Tt_instances = new WeakSet();
E_fn = function() {
  try {
    __privateSet(this, _i, _(() => __privateGet(this, _u).call(this, __privateGet(this, _e))));
  } catch (t) {
    this.error(t);
  }
  __privateSet(this, _s, false);
};
b_fn = function() {
  const t = __privateGet(this, _n).pending;
  t && (__privateSet(this, _t2, _(() => t(__privateGet(this, _e)))), g.enqueue(() => {
    var e = __privateMethod(this, _Tt_instances, v_fn).call(this);
    __privateSet(this, _i, __privateMethod(this, _Tt_instances, c_fn).call(this, () => (g.ensure(), _(() => __privateGet(this, _u).call(this, e))))), __privateGet(this, _f) > 0 ? __privateMethod(this, _Tt_instances, p_fn).call(this) : (R(__privateGet(this, _t2), () => {
      __privateSet(this, _t2, null);
    }), __privateSet(this, _s, false));
  }));
};
v_fn = function() {
  var t = __privateGet(this, _e);
  return __privateGet(this, _s) && (__privateSet(this, _o, q()), __privateGet(this, _e).before(__privateGet(this, _o)), t = __privateGet(this, _o)), t;
};
c_fn = function(t) {
  var e = E, n = I, o = B;
  F(__privateGet(this, _r)), v(__privateGet(this, _r)), O(__privateGet(this, _r).ctx);
  try {
    return t();
  } catch (s) {
    return U(s), null;
  } finally {
    F(e), v(n), O(o);
  }
};
p_fn = function() {
  const t = __privateGet(this, _n).pending;
  __privateGet(this, _i) !== null && (__privateSet(this, _h, document.createDocumentFragment()), __privateGet(this, _h).append(__privateGet(this, _o)), Q(__privateGet(this, _i), __privateGet(this, _h))), __privateGet(this, _t2) === null && __privateSet(this, _t2, _(() => t(__privateGet(this, _e))));
};
y_fn = function(t) {
  var _a2;
  if (!this.has_pending_snippet()) {
    this.parent && __privateMethod(_a2 = this.parent, _Tt_instances, y_fn).call(_a2, t);
    return;
  }
  __privateSet(this, _f, __privateGet(this, _f) + t), __privateGet(this, _f) === 0 && (__privateSet(this, _s, false), __privateGet(this, _t2) && R(__privateGet(this, _t2), () => {
    __privateSet(this, _t2, null);
  }), __privateGet(this, _h) && (__privateGet(this, _e).before(__privateGet(this, _h)), __privateSet(this, _h, null)));
};
const Rt = ["touchstart", "touchmove"];
function wt(i) {
  return Rt.includes(i);
}
function St(i, t) {
  var e = t == null ? "" : typeof t == "object" ? t + "" : t;
  e !== (i.__t ?? (i.__t = i.nodeValue)) && (i.__t = e, i.nodeValue = e + "");
}
function At(i, t) {
  return M(i, t);
}
function xt(i, t) {
  A(), t.intro = t.intro ?? false;
  const e = t.target, n = c, o = d;
  try {
    for (var s = at(e); s && (s.nodeType !== D || s.data !== ht); ) s = ot(s);
    if (!s) throw N;
    y(true), b(s);
    const a = M(i, { ...t, anchor: s });
    return y(false), a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((f) => f.startsWith("https://svelte.dev/e/"))) throw a;
    return a !== N && console.warn("Failed to hydrate: ", a), t.recover === false && ft(), A(), lt(e), y(false), At(i, t);
  } finally {
    y(n), b(o);
  }
}
const p = /* @__PURE__ */ new Map();
function M(i, { target: t, anchor: e, props: n = {}, events: o, context: s, intro: a = true }) {
  A();
  var f = /* @__PURE__ */ new Set(), l = (u) => {
    for (var h = 0; h < u.length; h++) {
      var r = u[h];
      if (!f.has(r)) {
        f.add(r);
        var S = wt(r);
        t.addEventListener(r, m, { passive: S });
        var x = p.get(r);
        x === void 0 ? (document.addEventListener(r, m, { passive: S }), p.set(r, 1)) : p.set(r, x + 1);
      }
    }
  };
  l(ut(vt)), L.add(l);
  var T = void 0, j = _t(() => {
    var u = e ?? t.appendChild(q());
    return bt(u, { pending: () => {
    } }, (h) => {
      if (s) {
        dt({});
        var r = B;
        r.c = s;
      }
      if (o && (n.$$events = o), c && yt(h, null), T = i(h, n) || {}, c && (E.nodes.end = d, d === null || d.nodeType !== D || d.data !== ct)) throw pt(), N;
      s && gt();
    }), () => {
      var _a2;
      for (var h of f) {
        t.removeEventListener(h, m);
        var r = p.get(h);
        --r === 0 ? (document.removeEventListener(h, m), p.delete(h)) : p.set(h, r);
      }
      L.delete(l), u !== e && ((_a2 = u.parentNode) == null ? void 0 : _a2.removeChild(u));
    };
  });
  return k.set(T, j), T;
}
let k = /* @__PURE__ */ new WeakMap();
function Ct(i, t) {
  const e = k.get(i);
  return e ? (k.delete(i), e(t)) : Promise.resolve();
}
export {
  xt as h,
  At as m,
  St as s,
  Ct as u
};
