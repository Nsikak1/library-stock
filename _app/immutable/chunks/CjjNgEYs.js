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
var _t, _g, _i, _o, _e2, _n, _s, _r, _a, _d, _f, __, _l, _c, _h, _m, _Oe_instances, E_fn, b_fn, T_fn, v_fn, u_fn, p_fn, y_fn;
import { ai as Q, g as q, C as X, o as Z, aj as C, x as R, ak as z, k as u, j as p, H as y, al as H, $ as ee, P as te, a3 as se, am as M, h as c, e as G, an as S, p as F, m as re, ao as B, ap as ie, aq as P, ar as ne, as as ae, F as V, E as $, at as j, au as he, G as fe, l as J, av as oe, d as x, U as w, aw as de, a4 as _e, ax as E, a0 as le, ay as ce, az as ue, aA as pe, aB as I, K as ge, aC as K, a2 as ve, aD as ye, aE as O, a5 as b, aF as me, aG as Ee, aH as be, aI as Te, W as Re, aJ as we, aK as Ae, Y as De } from "./BtsFhd5D.js";
import { a as Ne, r as L, h as W } from "./BokTgVeL.js";
import { b as Se } from "./DLCqchCO.js";
function Fe(r) {
  let e = 0, t = z(0), i;
  return () => {
    Q() && (q(t), X(() => (e === 0 && (i = Z(() => r(() => C(t)))), e += 1, () => {
      R(() => {
        e -= 1, e === 0 && (i == null ? void 0 : i(), i = void 0, C(t));
      });
    })));
  };
}
var xe = le | ce;
function Ie(r, e, t, i) {
  new Oe(r, e, t, i);
}
class Oe {
  constructor(e, t, i, f) {
    __privateAdd(this, _Oe_instances);
    __publicField(this, "parent");
    __publicField(this, "is_pending", false);
    __publicField(this, "transform_error");
    __privateAdd(this, _t);
    __privateAdd(this, _g, p ? u : null);
    __privateAdd(this, _i);
    __privateAdd(this, _o);
    __privateAdd(this, _e2);
    __privateAdd(this, _n, null);
    __privateAdd(this, _s, null);
    __privateAdd(this, _r, null);
    __privateAdd(this, _a, null);
    __privateAdd(this, _d, 0);
    __privateAdd(this, _f, 0);
    __privateAdd(this, __, false);
    __privateAdd(this, _l, /* @__PURE__ */ new Set());
    __privateAdd(this, _c, /* @__PURE__ */ new Set());
    __privateAdd(this, _h, null);
    __privateAdd(this, _m, Fe(() => (__privateSet(this, _h, z(__privateGet(this, _d))), () => {
      __privateSet(this, _h, null);
    })));
    var _a2;
    __privateSet(this, _t, e), __privateSet(this, _i, t), __privateSet(this, _o, (s) => {
      var n = y;
      n.b = this, n.f |= H, i(s);
    }), this.parent = y.b, this.transform_error = f ?? ((_a2 = this.parent) == null ? void 0 : _a2.transform_error) ?? ((s) => s), __privateSet(this, _e2, ee(() => {
      if (p) {
        const s = __privateGet(this, _g);
        te();
        const n = s.data === se;
        if (s.data.startsWith(M)) {
          const a = JSON.parse(s.data.slice(M.length));
          __privateMethod(this, _Oe_instances, b_fn).call(this, a);
        } else n ? __privateMethod(this, _Oe_instances, T_fn).call(this) : __privateMethod(this, _Oe_instances, E_fn).call(this);
      } else __privateMethod(this, _Oe_instances, v_fn).call(this);
    }, xe)), p && __privateSet(this, _t, u);
  }
  defer_effect(e) {
    ae(e, __privateGet(this, _l), __privateGet(this, _c));
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!__privateGet(this, _i).pending;
  }
  update_pending_count(e) {
    __privateMethod(this, _Oe_instances, y_fn).call(this, e), __privateSet(this, _d, __privateGet(this, _d) + e), !(!__privateGet(this, _h) || __privateGet(this, __)) && (__privateSet(this, __, true), R(() => {
      __privateSet(this, __, false), __privateGet(this, _h) && oe(__privateGet(this, _h), __privateGet(this, _d));
    }));
  }
  get_effect_pending() {
    return __privateGet(this, _m).call(this), q(__privateGet(this, _h));
  }
  error(e) {
    var t = __privateGet(this, _i).onerror;
    let i = __privateGet(this, _i).failed;
    if (!t && !i) throw e;
    __privateGet(this, _n) && (x(__privateGet(this, _n)), __privateSet(this, _n, null)), __privateGet(this, _s) && (x(__privateGet(this, _s)), __privateSet(this, _s, null)), __privateGet(this, _r) && (x(__privateGet(this, _r)), __privateSet(this, _r, null)), p && (w(__privateGet(this, _g)), de(), w(_e()));
    var f = false, s = false;
    const n = () => {
      if (f) {
        pe();
        return;
      }
      f = true, s && ue(), __privateGet(this, _r) !== null && F(__privateGet(this, _r), () => {
        __privateSet(this, _r, null);
      }), __privateMethod(this, _Oe_instances, p_fn).call(this, () => {
        S.ensure(), __privateMethod(this, _Oe_instances, v_fn).call(this);
      });
    }, l = (a) => {
      try {
        s = true, t == null ? void 0 : t(a, n), s = false;
      } catch (h) {
        E(h, __privateGet(this, _e2) && __privateGet(this, _e2).parent);
      }
      i && __privateSet(this, _r, __privateMethod(this, _Oe_instances, p_fn).call(this, () => {
        S.ensure();
        try {
          return c(() => {
            var h = y;
            h.b = this, h.f |= H, i(__privateGet(this, _t), () => a, () => n);
          });
        } catch (h) {
          return E(h, __privateGet(this, _e2).parent), null;
        }
      }));
    };
    R(() => {
      var a;
      try {
        a = this.transform_error(e);
      } catch (h) {
        E(h, __privateGet(this, _e2) && __privateGet(this, _e2).parent);
        return;
      }
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(l, (h) => E(h, __privateGet(this, _e2) && __privateGet(this, _e2).parent)) : l(a);
    });
  }
}
_t = new WeakMap();
_g = new WeakMap();
_i = new WeakMap();
_o = new WeakMap();
_e2 = new WeakMap();
_n = new WeakMap();
_s = new WeakMap();
_r = new WeakMap();
_a = new WeakMap();
_d = new WeakMap();
_f = new WeakMap();
__ = new WeakMap();
_l = new WeakMap();
_c = new WeakMap();
_h = new WeakMap();
_m = new WeakMap();
_Oe_instances = new WeakSet();
E_fn = function() {
  try {
    __privateSet(this, _n, c(() => __privateGet(this, _o).call(this, __privateGet(this, _t))));
  } catch (e) {
    this.error(e);
  }
};
b_fn = function(e) {
  const t = __privateGet(this, _i).failed;
  t && __privateSet(this, _r, c(() => {
    t(__privateGet(this, _t), () => e, () => () => {
    });
  }));
};
T_fn = function() {
  const e = __privateGet(this, _i).pending;
  e && (this.is_pending = true, __privateSet(this, _s, c(() => e(__privateGet(this, _t)))), R(() => {
    var t = __privateSet(this, _a, document.createDocumentFragment()), i = G();
    t.append(i), __privateSet(this, _n, __privateMethod(this, _Oe_instances, p_fn).call(this, () => (S.ensure(), c(() => __privateGet(this, _o).call(this, i))))), __privateGet(this, _f) === 0 && (__privateGet(this, _t).before(t), __privateSet(this, _a, null), F(__privateGet(this, _s), () => {
      __privateSet(this, _s, null);
    }), __privateMethod(this, _Oe_instances, u_fn).call(this));
  }));
};
v_fn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), __privateSet(this, _f, 0), __privateSet(this, _d, 0), __privateSet(this, _n, c(() => {
      __privateGet(this, _o).call(this, __privateGet(this, _t));
    })), __privateGet(this, _f) > 0) {
      var e = __privateSet(this, _a, document.createDocumentFragment());
      re(__privateGet(this, _n), e);
      const t = __privateGet(this, _i).pending;
      __privateSet(this, _s, c(() => t(__privateGet(this, _t))));
    } else __privateMethod(this, _Oe_instances, u_fn).call(this);
  } catch (t) {
    this.error(t);
  }
};
u_fn = function() {
  this.is_pending = false;
  for (const e of __privateGet(this, _l)) B(e, ie), P(e);
  for (const e of __privateGet(this, _c)) B(e, ne), P(e);
  __privateGet(this, _l).clear(), __privateGet(this, _c).clear();
};
p_fn = function(e) {
  var t = y, i = fe, f = J;
  V(__privateGet(this, _e2)), $(__privateGet(this, _e2)), j(__privateGet(this, _e2).ctx);
  try {
    return e();
  } catch (s) {
    return he(s), null;
  } finally {
    V(t), $(i), j(f);
  }
};
y_fn = function(e) {
  var _a2;
  if (!this.has_pending_snippet()) {
    this.parent && __privateMethod(_a2 = this.parent, _Oe_instances, y_fn).call(_a2, e);
    return;
  }
  __privateSet(this, _f, __privateGet(this, _f) + e), __privateGet(this, _f) === 0 && (__privateMethod(this, _Oe_instances, u_fn).call(this), __privateGet(this, _s) && F(__privateGet(this, _s), () => {
    __privateSet(this, _s, null);
  }), __privateGet(this, _a) && (__privateGet(this, _t).before(__privateGet(this, _a)), __privateSet(this, _a, null)));
};
const Ye = ["touchstart", "touchmove"];
function ke(r) {
  return Ye.includes(r);
}
function Pe(r, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = t, r.nodeValue = `${t}`);
}
function Ce(r, e) {
  return U(r, e);
}
function Ve(r, e) {
  I(), e.intro = e.intro ?? false;
  const t = e.target, i = p, f = u;
  try {
    for (var s = ge(t); s && (s.nodeType !== K || s.data !== ve); ) s = ye(s);
    if (!s) throw O;
    b(true), w(s);
    const n = U(r, { ...e, anchor: s });
    return b(false), n;
  } catch (n) {
    if (n instanceof Error && n.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/"))) throw n;
    return n !== O && console.warn("Failed to hydrate: ", n), e.recover === false && me(), I(), Ee(t), b(false), Ce(r, e);
  } finally {
    b(i), w(f);
  }
}
const T = /* @__PURE__ */ new Map();
function U(r, { target: e, anchor: t, props: i = {}, events: f, context: s, intro: n = true, transformError: l }) {
  I();
  var a = void 0, h = be(() => {
    var m = t ?? e.appendChild(G());
    Ie(m, { pending: () => {
    } }, (o) => {
      Re({});
      var d = J;
      if (s && (d.c = s), f && (i.$$events = f), p && Se(o, null), a = r(o, i) || {}, p && (y.nodes.end = u, u === null || u.nodeType !== K || u.data !== we)) throw Ae(), O;
      De();
    }, l);
    var A = /* @__PURE__ */ new Set(), D = (o) => {
      for (var d = 0; d < o.length; d++) {
        var _ = o[d];
        if (!A.has(_)) {
          A.add(_);
          var v = ke(_);
          for (const N of [e, document]) {
            var g = T.get(N);
            g === void 0 && (g = /* @__PURE__ */ new Map(), T.set(N, g));
            var k = g.get(_);
            k === void 0 ? (N.addEventListener(_, W, { passive: v }), g.set(_, 1)) : g.set(_, k + 1);
          }
        }
      }
    };
    return D(Te(Ne)), L.add(D), () => {
      var _a2;
      for (var o of A) for (const v of [e, document]) {
        var d = T.get(v), _ = d.get(o);
        --_ == 0 ? (v.removeEventListener(o, W), d.delete(o), d.size === 0 && T.delete(v)) : d.set(o, _);
      }
      L.delete(D), m !== t && ((_a2 = m.parentNode) == null ? void 0 : _a2.removeChild(m));
    };
  });
  return Y.set(a, h), a;
}
let Y = /* @__PURE__ */ new WeakMap();
function $e(r, e) {
  const t = Y.get(r);
  return t ? (Y.delete(r), t(e)) : Promise.resolve();
}
export {
  Ve as h,
  Ce as m,
  Pe as s,
  $e as u
};
