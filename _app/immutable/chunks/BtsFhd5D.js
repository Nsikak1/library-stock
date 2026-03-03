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
var _a, _t2, _s, _r2, _i, _f, _a2, _n2, _e2, _l, _ve_instances, o_fn, u_fn, c_fn, __fn;
import { l as xe, b as V, t as qt } from "./CUqRO1f7.js";
const De = false;
var Ht = Array.isArray, Ut = Array.prototype.indexOf, ae = Array.prototype.includes, Hn = Array.from, Un = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, Bt = Object.getOwnPropertyDescriptors, Vt = Object.prototype, zt = Array.prototype, lt = Object.getPrototypeOf, Qe = Object.isExtensible;
const Gt = () => {
};
function Bn(e) {
  return e();
}
function Kt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function ot() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Vn(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const m = 2, _e = 4, Q = 8, qe = 1 << 24, G = 16, L = 32, se = 64, $t = 128, N = 512, y = 1024, T = 2048, F = 4096, M = 8192, H = 16384, ie = 32768, Ae = 65536, et = 1 << 17, Xt = 1 << 18, me = 1 << 19, ut = 1 << 20, zn = 1 << 25, ee = 65536, Ce = 1 << 21, He = 1 << 22, U = 1 << 23, we = /* @__PURE__ */ Symbol("$state"), Gn = /* @__PURE__ */ Symbol("legacy props"), Kn = /* @__PURE__ */ Symbol(""), X = new class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xn = !!((_a = globalThis.document) == null ? void 0 : _a.contentType) && globalThis.document.contentType.includes("xml"), Oe = 3, ct = 8;
function Zt(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Wt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Zn(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Jt(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qt() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function en(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function tn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Jn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function rn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function sn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const er = 1, tr = 2, nr = 4, rr = 8, sr = 16, ir = 1, fr = 2, ar = 4, lr = 8, or = 16, ur = 1, cr = 2, fn = "[", an = "[!", _r = "[?", ln = "]", Ue = {}, g = /* @__PURE__ */ Symbol(), on = "http://www.w3.org/1999/xhtml";
function Be(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function vr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let te = false;
function dr(e) {
  te = e;
}
let k;
function le(e) {
  if (e === null) throw Be(), Ue;
  return k = e;
}
function hr() {
  return le(K(k));
}
function pr(e) {
  if (te) {
    if (K(k) !== null) throw Be(), Ue;
    k = e;
  }
}
function wr(e = 1) {
  if (te) {
    for (var t = e, n = k; t--; ) n = K(n);
    k = n;
  }
}
function yr(e = true) {
  for (var t = 0, n = k; ; ) {
    if (n.nodeType === ct) {
      var r = n.data;
      if (r === ln) {
        if (t === 0) return n;
        t -= 1;
      } else (r === fn || r === an || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var s = K(n);
    e && n.remove(), n = s;
  }
}
function Er(e) {
  if (!e || e.nodeType !== ct) throw Be(), Ue;
  return e.data;
}
function _t(e) {
  return e === this.v;
}
function un(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function vt(e) {
  return !un(e, this.v);
}
let E = null;
function Se(e) {
  E = e;
}
function mr(e, t = false, n) {
  E = { p: E, i: false, c: null, e: null, s: e, x: null, l: xe && !t ? { s: null, u: null, $: [] } : null };
}
function gr(e) {
  var t = E, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) xt(r);
  }
  return e !== void 0 && (t.x = e), t.i = true, E = t.p, e ?? {};
}
function ge() {
  return !xe || E !== null && E.l === null;
}
let Z = [];
function dt() {
  var e = Z;
  Z = [], Kt(e);
}
function tt(e) {
  if (Z.length === 0 && !ye) {
    var t = Z;
    queueMicrotask(() => {
      t === Z && dt();
    });
  }
  Z.push(e);
}
function cn() {
  for (; Z.length > 0; ) dt();
}
function _n(e) {
  var t = d;
  if (t === null) return v.f |= U, e;
  if ((t.f & ie) === 0 && (t.f & _e) === 0) throw e;
  Re(e, t);
}
function Re(e, t) {
  for (; t !== null; ) {
    if ((t.f & $t) !== 0) {
      if ((t.f & ie) === 0) throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const vn = -7169;
function w(e, t) {
  e.f = e.f & vn | t;
}
function Ve(e) {
  (e.f & N) !== 0 || e.deps === null ? w(e, y) : w(e, F);
}
function ht(e) {
  if (e !== null) for (const t of e) (t.f & m) === 0 || (t.f & ee) === 0 || (t.f ^= ee, ht(t.deps));
}
function dn(e, t, n) {
  (e.f & T) !== 0 ? t.add(e) : (e.f & F) !== 0 && n.add(e), ht(e.deps), w(e, y);
}
const fe = /* @__PURE__ */ new Set();
let p = null, nt = null, A = null, S = [], Ne = null, ye = false, oe = null;
const _ve = class _ve {
  constructor() {
    __privateAdd(this, _ve_instances);
    __publicField(this, "current", /* @__PURE__ */ new Map());
    __publicField(this, "previous", /* @__PURE__ */ new Map());
    __privateAdd(this, _t2, /* @__PURE__ */ new Set());
    __privateAdd(this, _s, /* @__PURE__ */ new Set());
    __privateAdd(this, _r2, 0);
    __privateAdd(this, _i, 0);
    __privateAdd(this, _f, null);
    __privateAdd(this, _a2, /* @__PURE__ */ new Set());
    __privateAdd(this, _n2, /* @__PURE__ */ new Set());
    __privateAdd(this, _e2, /* @__PURE__ */ new Map());
    __publicField(this, "is_fork", false);
    __privateAdd(this, _l, false);
  }
  skip_effect(t) {
    __privateGet(this, _e2).has(t) || __privateGet(this, _e2).set(t, { d: [], m: [] });
  }
  unskip_effect(t) {
    var n = __privateGet(this, _e2).get(t);
    if (n) {
      __privateGet(this, _e2).delete(t);
      for (var r of n.d) w(r, T), Y(r);
      for (r of n.m) w(r, F), Y(r);
    }
  }
  process(t) {
    var _a3;
    S = [], this.apply();
    var n = oe = [], r = [];
    for (const s of t) __privateMethod(this, _ve_instances, u_fn).call(this, s, n, r);
    if (oe = null, __privateMethod(this, _ve_instances, o_fn).call(this)) {
      __privateMethod(this, _ve_instances, c_fn).call(this, r), __privateMethod(this, _ve_instances, c_fn).call(this, n);
      for (const [s, i] of __privateGet(this, _e2)) Et(s, i);
    } else {
      nt = this, p = null;
      for (const s of __privateGet(this, _t2)) s(this);
      __privateGet(this, _t2).clear(), __privateGet(this, _r2) === 0 && __privateMethod(this, _ve_instances, __fn).call(this), rt(r), rt(n), __privateGet(this, _a2).clear(), __privateGet(this, _n2).clear(), nt = null, (_a3 = __privateGet(this, _f)) == null ? void 0 : _a3.resolve();
    }
    A = null;
  }
  capture(t, n) {
    n !== g && !this.previous.has(t) && this.previous.set(t, n), (t.f & U) === 0 && (this.current.set(t, t.v), A == null ? void 0 : A.set(t, t.v));
  }
  activate() {
    p = this, this.apply();
  }
  deactivate() {
    p === this && (p = null, A = null);
  }
  flush() {
    var _a3;
    if (S.length > 0) p = this, pt();
    else if (__privateGet(this, _r2) === 0 && !this.is_fork) {
      for (const t of __privateGet(this, _t2)) t(this);
      __privateGet(this, _t2).clear(), __privateMethod(this, _ve_instances, __fn).call(this), (_a3 = __privateGet(this, _f)) == null ? void 0 : _a3.resolve();
    }
    this.deactivate();
  }
  discard() {
    for (const t of __privateGet(this, _s)) t(this);
    __privateGet(this, _s).clear();
  }
  increment(t) {
    __privateSet(this, _r2, __privateGet(this, _r2) + 1), t && __privateSet(this, _i, __privateGet(this, _i) + 1);
  }
  decrement(t) {
    __privateSet(this, _r2, __privateGet(this, _r2) - 1), t && __privateSet(this, _i, __privateGet(this, _i) - 1), !__privateGet(this, _l) && (__privateSet(this, _l, true), tt(() => {
      __privateSet(this, _l, false), __privateMethod(this, _ve_instances, o_fn).call(this) ? S.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of __privateGet(this, _a2)) __privateGet(this, _n2).delete(t), w(t, T), Y(t);
    for (const t of __privateGet(this, _n2)) w(t, F), Y(t);
    this.flush();
  }
  oncommit(t) {
    __privateGet(this, _t2).add(t);
  }
  ondiscard(t) {
    __privateGet(this, _s).add(t);
  }
  settled() {
    return (__privateGet(this, _f) ?? __privateSet(this, _f, ot())).promise;
  }
  static ensure() {
    if (p === null) {
      const t = p = new _ve();
      fe.add(p), ye || tt(() => {
        p === t && t.flush();
      });
    }
    return p;
  }
  apply() {
    if (!(!V || !this.is_fork && fe.size === 1)) {
      A = new Map(this.current);
      for (const t of fe) if (t !== this) for (const [n, r] of t.previous) A.has(n) || A.set(n, r);
    }
  }
};
_t2 = new WeakMap();
_s = new WeakMap();
_r2 = new WeakMap();
_i = new WeakMap();
_f = new WeakMap();
_a2 = new WeakMap();
_n2 = new WeakMap();
_e2 = new WeakMap();
_l = new WeakMap();
_ve_instances = new WeakSet();
o_fn = function() {
  return this.is_fork || __privateGet(this, _i) > 0;
};
u_fn = function(t, n, r) {
  t.f ^= y;
  for (var s = t.first; s !== null; ) {
    var i = s.f, l = (i & (L | se)) !== 0, o = l && (i & y) !== 0, f = o || (i & M) !== 0 || __privateGet(this, _e2).has(s);
    if (!f && s.fn !== null) {
      l ? s.f ^= y : (i & _e) !== 0 ? n.push(s) : V && (i & (Q | qe)) !== 0 ? r.push(s) : be(s) && ((i & G) !== 0 && __privateGet(this, _n2).add(s), ce(s));
      var a = s.first;
      if (a !== null) {
        s = a;
        continue;
      }
    }
    for (; s !== null; ) {
      var u = s.next;
      if (u !== null) {
        s = u;
        break;
      }
      s = s.parent;
    }
  }
};
c_fn = function(t) {
  for (var n = 0; n < t.length; n += 1) dn(t[n], __privateGet(this, _a2), __privateGet(this, _n2));
};
__fn = function() {
  var _a3;
  if (fe.size > 1) {
    this.previous.clear();
    var t = p, n = A, r = true;
    for (const i of fe) {
      if (i === this) {
        r = false;
        continue;
      }
      const l = [];
      for (const [f, a] of this.current) {
        if (i.current.has(f)) if (r && a !== i.current.get(f)) i.current.set(f, a);
        else continue;
        l.push(f);
      }
      if (l.length === 0) continue;
      const o = [...i.current.keys()].filter((f) => !this.current.has(f));
      if (o.length > 0) {
        var s = S;
        S = [];
        const f = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (const u of l) wt(u, o, f, a);
        if (S.length > 0) {
          p = i, i.apply();
          for (const u of S) __privateMethod(_a3 = i, _ve_instances, u_fn).call(_a3, u, [], []);
          i.deactivate();
        }
        S = s;
      }
    }
    p = t, A = n;
  }
  __privateGet(this, _e2).clear(), fe.delete(this);
};
let ve = _ve;
function hn(e) {
  var t = ye;
  ye = true;
  try {
    for (var n; ; ) {
      if (cn(), S.length === 0 && (p == null ? void 0 : p.flush(), S.length === 0)) return Ne = null, n;
      pt();
    }
  } finally {
    ye = t;
  }
}
function pt() {
  var e = null;
  try {
    for (var t = 0; S.length > 0; ) {
      var n = ve.ensure();
      if (t++ > 1e3) {
        var r, s;
        pn();
      }
      n.process(S), B.clear();
    }
  } finally {
    S = [], Ne = null, oe = null;
  }
}
function pn() {
  try {
    tn();
  } catch (e) {
    Re(e, Ne);
  }
}
let C = null;
function rt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (H | M)) === 0 && be(r) && (C = /* @__PURE__ */ new Set(), ce(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Nt(r), (C == null ? void 0 : C.size) > 0)) {
        B.clear();
        for (const s of C) {
          if ((s.f & (H | M)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; ) C.has(l) && (C.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const f = i[o];
            (f.f & (H | M)) === 0 && ce(f);
          }
        }
        C.clear();
      }
    }
    C = null;
  }
}
function wt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    (i & m) !== 0 ? wt(s, t, n, r) : (i & (He | G)) !== 0 && (i & T) === 0 && yt(s, t, r) && (w(s, T), Y(s));
  }
}
function yt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (ae.call(t, s)) return true;
    if ((s.f & m) !== 0 && yt(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function Y(e) {
  var t = Ne = e, n = t.b;
  if ((n == null ? void 0 : n.is_pending) && (e.f & (_e | Q | qe)) !== 0 && (e.f & ie) === 0) {
    n.defer_effect(e);
    return;
  }
  for (; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (oe !== null && t === d && (V || (e.f & Q) === 0)) return;
    if ((r & (se | L)) !== 0) {
      if ((r & y) === 0) return;
      t.f ^= y;
    }
  }
  S.push(t);
}
function Et(e, t) {
  if (!((e.f & L) !== 0 && (e.f & y) !== 0)) {
    (e.f & T) !== 0 ? t.d.push(e) : (e.f & F) !== 0 && t.m.push(e), w(e, y);
    for (var n = e.first; n !== null; ) Et(n, t), n = n.next;
  }
}
function wn(e, t, n, r) {
  const s = ge() ? ze : gn;
  var i = e.filter((c) => !c.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var l = d, o = yn(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((c) => c.promise)) : null;
  function a(c) {
    o();
    try {
      r(c);
    } catch (_) {
      (l.f & H) === 0 && Re(_, l);
    }
    Me();
  }
  if (n.length === 0) {
    f.then(() => a(t.map(s)));
    return;
  }
  function u() {
    o(), Promise.all(n.map((c) => mn(c))).then((c) => a([...t.map(s), ...c])).catch((c) => Re(c, l));
  }
  f ? f.then(u) : u();
}
function yn() {
  var e = d, t = v, n = E, r = p;
  return function(i = true) {
    ue(e), z(t), Se(n), i && (r == null ? void 0 : r.activate());
  };
}
function Me(e = true) {
  ue(null), z(null), Se(null), e && (p == null ? void 0 : p.deactivate());
}
function En() {
  var e = d.b, t = p, n = e.is_rendered();
  return e.update_pending_count(1), t.increment(n), () => {
    e.update_pending_count(-1), t.decrement(n);
  };
}
function ze(e) {
  var t = m | T, n = v !== null && (v.f & m) !== 0 ? v : null;
  return d !== null && (d.f |= me), { ctx: E, deps: null, effects: null, equals: _t, f: t, fn: e, reactions: null, rv: 0, v: g, wv: 0, parent: n ?? d, ac: null };
}
function mn(e, t, n) {
  d === null && Wt();
  var s = void 0, i = Ke(g), l = !v, o = /* @__PURE__ */ new Map();
  return Pn(() => {
    var _a3;
    var f = ot();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Me);
    } catch (_) {
      f.reject(_), Me();
    }
    var a = p;
    if (l) {
      var u = En();
      (_a3 = o.get(a)) == null ? void 0 : _a3.reject(X), o.delete(a), o.set(a, f);
    }
    const c = (_, b = void 0) => {
      if (a.activate(), b) b !== X && (i.f |= U, Le(i, b));
      else {
        (i.f & U) !== 0 && (i.f ^= U), Le(i, _);
        for (const [h, P] of o) {
          if (o.delete(h), h === a) break;
          P.reject(X);
        }
      }
      u && u();
    };
    f.promise.then(c, (_) => c(null, _ || "unknown"));
  }), Nn(() => {
    for (const f of o.values()) f.reject(X);
  }), new Promise((f) => {
    function a(u) {
      function c() {
        u === s ? f(i) : a(s);
      }
      u.then(c, c);
    }
    a(s);
  });
}
function br(e) {
  const t = ze(e);
  return V || Dt(t), t;
}
function gn(e) {
  const t = ze(e);
  return t.equals = vt, t;
}
function bn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) ne(t[n]);
  }
}
function Tn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & m) === 0) return (t.f & H) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function Ge(e) {
  var t, n = d;
  ue(Tn(e));
  try {
    e.f &= ~ee, bn(e), t = Lt(e);
  } finally {
    ue(n);
  }
  return t;
}
function mt(e) {
  var t = Ge(e);
  if (!e.equals(t) && (e.wv = Mt(), (!(p == null ? void 0 : p.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    w(e, y);
    return;
  }
  re || (A !== null ? (kt() || (p == null ? void 0 : p.is_fork)) && A.set(e, t) : Ve(e));
}
function An(e) {
  var _a3, _b;
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && ((_a3 = t.teardown) == null ? void 0 : _a3.call(t), (_b = t.ac) == null ? void 0 : _b.abort(X), t.teardown = Gt, t.ac = null, Ee(t, 0), Ze(t));
}
function gt(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && ce(t);
}
let Fe = /* @__PURE__ */ new Set();
const B = /* @__PURE__ */ new Map();
let bt = false;
function Ke(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: _t, rv: 0, wv: 0 };
  return n;
}
function q(e, t) {
  const n = Ke(e);
  return Dt(n), n;
}
function Tr(e, t = false, n = true) {
  var _a3;
  const r = Ke(e);
  return t || (r.equals = vt), xe && n && E !== null && E.l !== null && ((_a3 = E.l).s ?? (_a3.s = [])).push(r), r;
}
function $(e, t, n = false) {
  v !== null && (!D || (v.f & et) !== 0) && ge() && (v.f & (m | G | He | et)) !== 0 && (I === null || !ae.call(I, e)) && sn();
  let r = n ? de(t) : t;
  return Le(e, r);
}
function Le(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    re ? B.set(e, t) : B.set(e, n), e.v = t;
    var r = ve.ensure();
    if (r.capture(e, n), (e.f & m) !== 0) {
      const s = e;
      (e.f & T) !== 0 && Ge(s), Ve(s);
    }
    e.wv = Mt(), Tt(e, T), ge() && d !== null && (d.f & y) !== 0 && (d.f & (L | se)) === 0 && (O === null ? Fn([e]) : O.push(e)), !r.is_fork && Fe.size > 0 && !bt && Sn();
  }
  return t;
}
function Sn() {
  bt = false;
  for (const e of Fe) (e.f & y) !== 0 && w(e, F), be(e) && ce(e);
  Fe.clear();
}
function Pe(e) {
  $(e, e.v + 1);
}
function Tt(e, t) {
  var n = e.reactions;
  if (n !== null) for (var r = ge(), s = n.length, i = 0; i < s; i++) {
    var l = n[i], o = l.f;
    if (!(!r && l === d)) {
      var f = (o & T) === 0;
      if (f && w(l, t), (o & m) !== 0) {
        var a = l;
        A == null ? void 0 : A.delete(a), (o & ee) === 0 && (o & N && (l.f |= ee), Tt(a, F));
      } else f && ((o & G) !== 0 && C !== null && C.add(l), Y(l));
    }
  }
}
function de(e) {
  if (typeof e != "object" || e === null || we in e) return e;
  const t = lt(e);
  if (t !== Vt && t !== zt) return e;
  var n = /* @__PURE__ */ new Map(), r = Ht(e), s = q(0), i = J, l = (o) => {
    if (J === i) return o();
    var f = v, a = J;
    z(null), at(i);
    var u = o();
    return z(f), at(a), u;
  };
  return r && n.set("length", q(e.length)), new Proxy(e, { defineProperty(o, f, a) {
    (!("value" in a) || a.configurable === false || a.enumerable === false || a.writable === false) && nn();
    var u = n.get(f);
    return u === void 0 ? l(() => {
      var c = q(a.value);
      return n.set(f, c), c;
    }) : $(u, a.value, true), true;
  }, deleteProperty(o, f) {
    var a = n.get(f);
    if (a === void 0) {
      if (f in o) {
        const u = l(() => q(g));
        n.set(f, u), Pe(s);
      }
    } else $(a, g), Pe(s);
    return true;
  }, get(o, f, a) {
    var _a3;
    if (f === we) return e;
    var u = n.get(f), c = f in o;
    if (u === void 0 && (!c || ((_a3 = pe(o, f)) == null ? void 0 : _a3.writable)) && (u = l(() => {
      var b = de(c ? o[f] : g), h = q(b);
      return h;
    }), n.set(f, u)), u !== void 0) {
      var _ = he(u);
      return _ === g ? void 0 : _;
    }
    return Reflect.get(o, f, a);
  }, getOwnPropertyDescriptor(o, f) {
    var a = Reflect.getOwnPropertyDescriptor(o, f);
    if (a && "value" in a) {
      var u = n.get(f);
      u && (a.value = he(u));
    } else if (a === void 0) {
      var c = n.get(f), _ = c == null ? void 0 : c.v;
      if (c !== void 0 && _ !== g) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return a;
  }, has(o, f) {
    var _a3;
    if (f === we) return true;
    var a = n.get(f), u = a !== void 0 && a.v !== g || Reflect.has(o, f);
    if (a !== void 0 || d !== null && (!u || ((_a3 = pe(o, f)) == null ? void 0 : _a3.writable))) {
      a === void 0 && (a = l(() => {
        var _ = u ? de(o[f]) : g, b = q(_);
        return b;
      }), n.set(f, a));
      var c = he(a);
      if (c === g) return false;
    }
    return u;
  }, set(o, f, a, u) {
    var _a3;
    var c = n.get(f), _ = f in o;
    if (r && f === "length") for (var b = a; b < c.v; b += 1) {
      var h = n.get(b + "");
      h !== void 0 ? $(h, g) : b in o && (h = l(() => q(g)), n.set(b + "", h));
    }
    if (c === void 0) (!_ || ((_a3 = pe(o, f)) == null ? void 0 : _a3.writable)) && (c = l(() => q(void 0)), $(c, de(a)), n.set(f, c));
    else {
      _ = c.v !== g;
      var P = l(() => de(a));
      $(c, P);
    }
    var We = Reflect.getOwnPropertyDescriptor(o, f);
    if ((We == null ? void 0 : We.set) && We.set.call(u, a), !_) {
      if (r && typeof f == "string") {
        var Je = n.get("length"), Ie = Number(f);
        Number.isInteger(Ie) && Ie >= Je.v && $(Je, Ie + 1);
      }
      Pe(s);
    }
    return true;
  }, ownKeys(o) {
    he(s);
    var f = Reflect.ownKeys(o).filter((c) => {
      var _ = n.get(c);
      return _ === void 0 || _.v !== g;
    });
    for (var [a, u] of n) u.v !== g && !(a in o) && f.push(a);
    return f;
  }, setPrototypeOf() {
    rn();
  } });
}
var st, Rn, kn, At, St;
function Ar() {
  if (st === void 0) {
    st = window, Rn = document, kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    At = pe(t, "firstChild").get, St = pe(t, "nextSibling").get, Qe(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qe(n) && (n.__t = void 0);
  }
}
function ke(e = "") {
  return document.createTextNode(e);
}
function je(e) {
  return At.call(e);
}
function K(e) {
  return St.call(e);
}
function Sr(e, t) {
  if (!te) return je(e);
  var n = je(k);
  if (n === null) n = k.appendChild(ke());
  else if (t && n.nodeType !== Oe) {
    var r = ke();
    return n == null ? void 0 : n.before(r), le(r), r;
  }
  return t && $e(n), le(n), n;
}
function Rr(e, t = false) {
  if (!te) {
    var n = je(e);
    return n instanceof Comment && n.data === "" ? K(n) : n;
  }
  if (t) {
    if ((k == null ? void 0 : k.nodeType) !== Oe) {
      var r = ke();
      return k == null ? void 0 : k.before(r), le(r), r;
    }
    $e(k);
  }
  return k;
}
function kr(e, t = 1, n = false) {
  let r = te ? k : e;
  for (var s; t--; ) s = r, r = K(r);
  if (!te) return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Oe) {
      var i = ke();
      return r === null ? s == null ? void 0 : s.after(i) : r.before(i), le(i), i;
    }
    $e(r);
  }
  return le(r), r;
}
function xr(e) {
  e.textContent = "";
}
function Or() {
  if (!V || C !== null) return false;
  var e = d.f;
  return (e & ie) !== 0;
}
function Nr(e, t, n) {
  return document.createElementNS(on, e, void 0);
}
function $e(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Oe; ) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
let it = false;
function xn() {
  it || (it = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a3;
      if (!e.defaultPrevented) for (const t of e.target.elements) (_a3 = t.__on_r) == null ? void 0 : _a3.call(t);
    });
  }, { capture: true }));
}
function Xe(e) {
  var t = v, n = d;
  z(null), ue(null);
  try {
    return e();
  } finally {
    z(t), ue(n);
  }
}
function Ir(e, t, n, r = n) {
  e.addEventListener(t, () => Xe(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), xn();
}
function Rt(e) {
  d === null && (v === null && en(), Qt()), re && Jt();
}
function On(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function j(e, t) {
  var n = d;
  n !== null && (n.f & M) !== 0 && (e |= M);
  var r = { ctx: E, deps: null, nodes: null, f: e | T | N, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null }, s = r;
  if ((e & _e) !== 0) oe !== null ? oe.push(r) : Y(r);
  else if (t !== null) {
    try {
      ce(r);
    } catch (l) {
      throw ne(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && (s.f & me) === 0 && (s = s.first, (e & G) !== 0 && (e & Ae) !== 0 && s !== null && (s.f |= Ae));
  }
  if (s !== null && (s.parent = n, n !== null && On(s, n), v !== null && (v.f & m) !== 0 && (e & se) === 0)) {
    var i = v;
    (i.effects ?? (i.effects = [])).push(s);
  }
  return r;
}
function kt() {
  return v !== null && !D;
}
function Nn(e) {
  const t = j(Q, null);
  return w(t, y), t.teardown = e, t;
}
function In(e) {
  Rt();
  var t = d.f, n = !v && (t & L) !== 0 && (t & ie) === 0;
  if (n) {
    var r = E;
    (r.e ?? (r.e = [])).push(e);
  } else return xt(e);
}
function xt(e) {
  return j(_e | ut, e);
}
function Pr(e) {
  return Rt(), j(Q | ut, e);
}
function Dr(e) {
  ve.ensure();
  const t = j(se | me, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mn(t, () => {
      ne(t), r(void 0);
    }) : (ne(t), r(void 0));
  });
}
function Cr(e) {
  return j(_e, e);
}
function Pn(e) {
  return j(He | me, e);
}
function Mr(e, t = 0) {
  return j(Q | t, e);
}
function Fr(e, t = [], n = [], r = []) {
  wn(r, t, n, (s) => {
    j(Q, () => e(...s.map(he)));
  });
}
function Lr(e, t = 0) {
  var n = j(G | t, e);
  return n;
}
function jr(e) {
  return j(L | me, e);
}
function Ot(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = re, r = v;
    ft(true), z(null);
    try {
      t.call(null);
    } finally {
      ft(n), z(r);
    }
  }
}
function Ze(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Xe(() => {
      s.abort(X);
    });
    var r = n.next;
    (n.f & se) !== 0 ? n.parent = null : ne(n, t), n = r;
  }
}
function Dn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & L) === 0 && ne(t), t = n;
  }
}
function ne(e, t = true) {
  var n = false;
  (t || (e.f & Xt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Cn(e.nodes.start, e.nodes.end), n = true), Ze(e, t && !n), Ee(e, 0), w(e, H);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  Ot(e);
  var s = e.parent;
  s !== null && s.first !== null && Nt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Cn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : K(e);
    e.remove(), e = n;
  }
}
function Nt(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mn(e, t, n = true) {
  var r = [];
  It(e, r, true);
  var s = () => {
    n && ne(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var o of r) o.out(l);
  } else s();
}
function It(e, t, n) {
  if ((e.f & M) === 0) {
    e.f ^= M;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const o of r) (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var i = s.next, l = (s.f & Ae) !== 0 || (s.f & L) !== 0 && (e.f & G) !== 0;
      It(s, t, l ? n : false), s = i;
    }
  }
}
function Yr(e) {
  Pt(e, true);
}
function Pt(e, t) {
  if ((e.f & M) !== 0) {
    e.f ^= M, (e.f & y) === 0 && (w(e, T), Y(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ae) !== 0 || (n.f & L) !== 0;
      Pt(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function qr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : K(n);
    t.append(n), n = s;
  }
}
let Te = false, re = false;
function ft(e) {
  re = e;
}
let v = null, D = false;
function z(e) {
  v = e;
}
let d = null;
function ue(e) {
  d = e;
}
let I = null;
function Dt(e) {
  v !== null && (!V || (v.f & m) !== 0) && (I === null ? I = [e] : I.push(e));
}
let R = null, x = 0, O = null;
function Fn(e) {
  O = e;
}
let Ct = 1, W = 0, J = W;
function at(e) {
  J = e;
}
function Mt() {
  return ++Ct;
}
function be(e) {
  var t = e.f;
  if ((t & T) !== 0) return true;
  if (t & m && (e.f &= ~ee), (t & F) !== 0) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (be(i) && mt(i), i.wv > e.wv) return true;
    }
    (t & N) !== 0 && A === null && w(e, y);
  }
  return false;
}
function Ft(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(!V && I !== null && ae.call(I, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    (i.f & m) !== 0 ? Ft(i, t, false) : t === i && (n ? w(i, T) : (i.f & y) !== 0 && w(i, F), Y(i));
  }
}
function Lt(e) {
  var _a3;
  var t = R, n = x, r = O, s = v, i = I, l = E, o = D, f = J, a = e.f;
  R = null, x = 0, O = null, v = (a & (L | se)) === 0 ? e : null, I = null, Se(e.ctx), D = false, J = ++W, e.ac !== null && (Xe(() => {
    e.ac.abort(X);
  }), e.ac = null);
  try {
    e.f |= Ce;
    var u = e.fn, c = u();
    e.f |= ie;
    var _ = e.deps, b = p == null ? void 0 : p.is_fork;
    if (R !== null) {
      var h;
      if (b || Ee(e, x), _ !== null && x > 0) for (_.length = x + R.length, h = 0; h < R.length; h++) _[x + h] = R[h];
      else e.deps = _ = R;
      if (kt() && (e.f & N) !== 0) for (h = x; h < _.length; h++) ((_a3 = _[h]).reactions ?? (_a3.reactions = [])).push(e);
    } else !b && _ !== null && x < _.length && (Ee(e, x), _.length = x);
    if (ge() && O !== null && !D && _ !== null && (e.f & (m | F | T)) === 0) for (h = 0; h < O.length; h++) Ft(O[h], e);
    if (s !== null && s !== e) {
      if (W++, s.deps !== null) for (let P = 0; P < n; P += 1) s.deps[P].rv = W;
      if (t !== null) for (const P of t) P.rv = W;
      O !== null && (r === null ? r = O : r.push(...O));
    }
    return (e.f & U) !== 0 && (e.f ^= U), c;
  } catch (P) {
    return _n(P);
  } finally {
    e.f ^= Ce, R = t, x = n, O = r, v = s, I = i, Se(l), D = o, J = f;
  }
}
function Ln(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ut.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & m) !== 0 && (R === null || !ae.call(R, t))) {
    var i = t;
    (i.f & N) !== 0 && (i.f ^= N, i.f &= ~ee), Ve(i), An(i), Ee(i, 0);
  }
}
function Ee(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Ln(e, n[r]);
}
function ce(e) {
  var t = e.f;
  if ((t & H) === 0) {
    w(e, y);
    var n = d, r = Te;
    d = e, Te = true;
    try {
      (t & (G | qe)) !== 0 ? Dn(e) : Ze(e), Ot(e);
      var s = Lt(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ct;
      var i;
      De && qt && (e.f & T) !== 0 && e.deps;
    } finally {
      Te = r, d = n;
    }
  }
}
async function Hr() {
  if (V) return new Promise((e) => {
    requestAnimationFrame(() => e()), setTimeout(() => e());
  });
  await Promise.resolve(), hn();
}
function Ur() {
  return ve.ensure().settled();
}
function he(e) {
  var t = e.f, n = (t & m) !== 0;
  if (v !== null && !D) {
    var r = d !== null && (d.f & H) !== 0;
    if (!r && (I === null || !ae.call(I, e))) {
      var s = v.deps;
      if ((v.f & Ce) !== 0) e.rv < W && (e.rv = W, R === null && s !== null && s[x] === e ? x++ : R === null ? R = [e] : R.push(e));
      else {
        (v.deps ?? (v.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [v] : ae.call(i, v) || i.push(v);
      }
    }
  }
  if (re && B.has(e)) return B.get(e);
  if (n) {
    var l = e;
    if (re) {
      var o = l.v;
      return ((l.f & y) === 0 && l.reactions !== null || Yt(l)) && (o = Ge(l)), B.set(l, o), o;
    }
    var f = (l.f & N) === 0 && !D && v !== null && (Te || (v.f & N) !== 0), a = (l.f & ie) === 0;
    be(l) && (f && (l.f |= N), mt(l)), f && !a && (gt(l), jt(l));
  }
  if (A == null ? void 0 : A.has(e)) return A.get(e);
  if ((e.f & U) !== 0) throw e.v;
  return e.v;
}
function jt(e) {
  if (e.f |= N, e.deps !== null) for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & m) !== 0 && (t.f & N) === 0 && (gt(t), jt(t));
}
function Yt(e) {
  if (e.v === g) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (B.has(t) || (t.f & m) !== 0 && Yt(t)) return true;
  return false;
}
function jn(e) {
  var t = D;
  try {
    return D = true, e();
  } finally {
    D = t;
  }
}
function Br(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (we in e) Ye(e);
    else if (!Array.isArray(e)) for (let t in e) {
      const n = e[t];
      typeof n == "object" && n && we in n && Ye(n);
    }
  }
}
function Ye(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      Ye(e[r], t);
    } catch {
    }
    const n = lt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bt(n);
      for (let s in r) {
        const i = r[s].get;
        if (i) try {
          i.call(e);
        } catch {
        }
      }
    }
  }
}
function Vr(e) {
  E === null && Zt(), xe && E.l !== null ? Yn(E).m.push(e) : In(() => {
    const t = jn(e);
    if (typeof t == "function") return t;
  });
}
function Yn(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
export {
  Lr as $,
  Bt as A,
  Cr as B,
  Mr as C,
  Un as D,
  z as E,
  ue as F,
  v as G,
  d as H,
  Xn as I,
  Nr as J,
  je as K,
  Kn as L,
  kn as M,
  on as N,
  cr as O,
  hr as P,
  Oe as Q,
  ie as R,
  we as S,
  ur as T,
  le as U,
  $e as V,
  mr as W,
  Fr as X,
  gr as Y,
  Sr as Z,
  pr as _,
  q as a,
  tr as a$,
  Ae as a0,
  Er as a1,
  fn as a2,
  an as a3,
  yr as a4,
  dr as a5,
  pe as a6,
  Jn as a7,
  ar as a8,
  de as a9,
  vr as aA,
  Ar as aB,
  ct as aC,
  K as aD,
  Ue as aE,
  Wn as aF,
  xr as aG,
  Dr as aH,
  Hn as aI,
  ln as aJ,
  Be as aK,
  Ir as aL,
  Hr as aM,
  nt as aN,
  Vr as aO,
  hn as aP,
  Tr as aQ,
  br as aR,
  Xt as aS,
  Rn as aT,
  Gt as aU,
  un as aV,
  zn as aW,
  Zn as aX,
  Ht as aY,
  er as aZ,
  sr as a_,
  re as aa,
  H as ab,
  lr as ac,
  fr as ad,
  ir as ae,
  gn as af,
  or as ag,
  Gn as ah,
  kt as ai,
  Pe as aj,
  Ke as ak,
  $t as al,
  _r as am,
  ve as an,
  w as ao,
  T as ap,
  Y as aq,
  F as ar,
  dn as as,
  Se as at,
  _n as au,
  Le as av,
  wr as aw,
  Re as ax,
  me as ay,
  Qn as az,
  kr as b,
  M as b0,
  L as b1,
  nr as b2,
  rr as b3,
  Vn as b4,
  Ur as b5,
  Or as c,
  ne as d,
  ke as e,
  Rr as f,
  he as g,
  jr as h,
  p as i,
  te as j,
  k,
  E as l,
  qr as m,
  In as n,
  jn as o,
  Mn as p,
  Kt as q,
  Yr as r,
  $ as s,
  Bn as t,
  Pr as u,
  Br as v,
  ze as w,
  tt as x,
  xn as y,
  lt as z
};
