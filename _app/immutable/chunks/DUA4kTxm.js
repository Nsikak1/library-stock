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
var _r2, _s, _e2, _t2, _a, _f, _i, _G_instances, l_fn, n_fn, o_fn, u_fn, c_fn;
const In = false;
var qt = Array.isArray, Yt = Array.prototype.indexOf, Cn = Array.from, Fn = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, Ht = Object.getOwnPropertyDescriptors, Ut = Object.prototype, Bt = Array.prototype, it = Object.getPrototypeOf, et = Object.isExtensible;
const Mn = () => {
};
function Ln(e) {
  return e();
}
function Vt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function at() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function jn(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const w = 2, Ue = 4, de = 8, lt = 1 << 24, q = 16, Y = 32, ne = 64, Be = 128, D = 512, b = 1024, A = 2048, C = 4096, I = 8192, U = 16384, xe = 32768, Ee = 65536, Ce = 1 << 17, ot = 1 << 18, he = 1 << 19, ut = 1 << 20, qn = 1 << 25, J = 32768, Fe = 1 << 21, Ve = 1 << 22, B = 1 << 23, ue = /* @__PURE__ */ Symbol("$state"), Yn = /* @__PURE__ */ Symbol("legacy props"), Hn = /* @__PURE__ */ Symbol(""), re = new class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Ge = 3, ct = 8;
function Gt(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required");
}
function Kt(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function $t(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xt() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wt() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jt() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function Qt() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function Bn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function en() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function tn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function nn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Gn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Kn = 1, zn = 2, $n = 4, Xn = 8, Zn = 16, Wn = 1, Jn = 2, Qn = 4, er = 8, tr = 16, nr = 1, rr = 2, rn = "[", sn = "[!", fn = "]", Ke = {}, g = /* @__PURE__ */ Symbol(), sr = "http://www.w3.org/1999/xhtml";
function ze(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function fr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Q = false;
function ir(e) {
  Q = e;
}
let R;
function se(e) {
  if (e === null) throw ze(), Ke;
  return R = e;
}
function ar() {
  return se(z(R));
}
function lr(e) {
  if (Q) {
    if (z(R) !== null) throw ze(), Ke;
    R = e;
  }
}
function or(e = 1) {
  if (Q) {
    for (var t = e, n = R; t--; ) n = z(n);
    R = n;
  }
}
function ur(e = true) {
  for (var t = 0, n = R; ; ) {
    if (n.nodeType === ct) {
      var r = n.data;
      if (r === fn) {
        if (t === 0) return n;
        t -= 1;
      } else (r === rn || r === sn) && (t += 1);
    }
    var s = z(n);
    e && n.remove(), n = s;
  }
}
function cr(e) {
  if (!e || e.nodeType !== ct) throw ze(), Ke;
  return e.data;
}
function _t(e) {
  return e === this.v;
}
function an(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function vt(e) {
  return !an(e, this.v);
}
let j = false, pe = false;
function _r() {
  j = true;
}
function vr() {
  pe = true;
}
let y = null;
function me(e) {
  y = e;
}
function dr(e, t = false, n) {
  y = { p: y, i: false, c: null, e: null, s: e, x: null, l: pe && !t ? { s: null, u: null, $: [] } : null };
}
function hr(e) {
  var t = y, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Rt(r);
  }
  return e !== void 0 && (t.x = e), t.i = true, y = t.p, e ?? {};
}
function we() {
  return !pe || y !== null && y.l === null;
}
let X = [];
function dt() {
  var e = X;
  X = [], Vt(e);
}
function ln(e) {
  if (X.length === 0 && !ce) {
    var t = X;
    queueMicrotask(() => {
      t === X && dt();
    });
  }
  X.push(e);
}
function on() {
  for (; X.length > 0; ) dt();
}
function un(e) {
  var t = h;
  if (t === null) return _.f |= B, e;
  if ((t.f & xe) === 0) {
    if ((t.f & Be) === 0) throw e;
    t.b.error(e);
  } else ge(e, t);
}
function ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & Be) !== 0) try {
      t.b.error(e);
      return;
    } catch (n) {
      e = n;
    }
    t = t.parent;
  }
  throw e;
}
const M = /* @__PURE__ */ new Set();
let p = null, Pe = null, E = null, x = [], Oe = null, Me = false, ce = false;
const _G = class _G {
  constructor() {
    __privateAdd(this, _G_instances);
    __publicField(this, "committed", false);
    __publicField(this, "current", /* @__PURE__ */ new Map());
    __publicField(this, "previous", /* @__PURE__ */ new Map());
    __privateAdd(this, _r2, /* @__PURE__ */ new Set());
    __privateAdd(this, _s, /* @__PURE__ */ new Set());
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _t2, 0);
    __privateAdd(this, _a, null);
    __privateAdd(this, _f, /* @__PURE__ */ new Set());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
    __publicField(this, "is_fork", false);
  }
  is_deferred() {
    return this.is_fork || __privateGet(this, _t2) > 0;
  }
  process(t) {
    var _a2;
    x = [], Pe = null, this.apply();
    var n = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const r of t) __privateMethod(this, _G_instances, l_fn).call(this, r, n);
    this.is_fork || __privateMethod(this, _G_instances, u_fn).call(this), this.is_deferred() ? (__privateMethod(this, _G_instances, n_fn).call(this, n.effects), __privateMethod(this, _G_instances, n_fn).call(this, n.render_effects)) : (Pe = this, p = null, tt(n.render_effects), tt(n.effects), Pe = null, (_a2 = __privateGet(this, _a)) == null ? void 0 : _a2.resolve()), E = null;
  }
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & B) === 0 && (this.current.set(t, t.v), E == null ? void 0 : E.set(t, t.v));
  }
  activate() {
    p = this, this.apply();
  }
  deactivate() {
    p === this && (p = null, E = null);
  }
  flush() {
    if (this.activate(), x.length > 0) {
      if (je(), p !== null && p !== this) return;
    } else __privateGet(this, _e2) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of __privateGet(this, _s)) t(this);
    __privateGet(this, _s).clear();
  }
  increment(t) {
    __privateSet(this, _e2, __privateGet(this, _e2) + 1), t && __privateSet(this, _t2, __privateGet(this, _t2) + 1);
  }
  decrement(t) {
    __privateSet(this, _e2, __privateGet(this, _e2) - 1), t && __privateSet(this, _t2, __privateGet(this, _t2) - 1), this.revive();
  }
  revive() {
    for (const t of __privateGet(this, _f)) __privateGet(this, _i).delete(t), m(t, A), ee(t);
    for (const t of __privateGet(this, _i)) m(t, C), ee(t);
    this.flush();
  }
  oncommit(t) {
    __privateGet(this, _r2).add(t);
  }
  ondiscard(t) {
    __privateGet(this, _s).add(t);
  }
  settled() {
    return (__privateGet(this, _a) ?? __privateSet(this, _a, at())).promise;
  }
  static ensure() {
    if (p === null) {
      const t = p = new _G();
      M.add(p), ce || _G.enqueue(() => {
        p === t && t.flush();
      });
    }
    return p;
  }
  static enqueue(t) {
    ln(t);
  }
  apply() {
    if (!(!j || !this.is_fork && M.size === 1)) {
      E = new Map(this.current);
      for (const t of M) if (t !== this) for (const [n, r] of t.previous) E.has(n) || E.set(n, r);
    }
  }
};
_r2 = new WeakMap();
_s = new WeakMap();
_e2 = new WeakMap();
_t2 = new WeakMap();
_a = new WeakMap();
_f = new WeakMap();
_i = new WeakMap();
_G_instances = new WeakSet();
l_fn = function(t, n) {
  var _a2;
  t.f ^= b;
  for (var r = t.first; r !== null; ) {
    var s = r.f, f = (s & (Y | ne)) !== 0, o = f && (s & b) !== 0, l = o || (s & I) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Be) !== 0 && ((_a2 = r.b) == null ? void 0 : _a2.is_pending()) && (n = { parent: n, effect: r, effects: [], render_effects: [] }), !l && r.fn !== null) {
      f ? r.f ^= b : (s & Ue) !== 0 ? n.effects.push(r) : j && (s & (de | lt)) !== 0 ? n.render_effects.push(r) : ye(r) && ((r.f & q) !== 0 && __privateGet(this, _f).add(r), ve(r));
      var i = r.first;
      if (i !== null) {
        r = i;
        continue;
      }
    }
    var a = r.parent;
    for (r = r.next; r === null && a !== null; ) a === n.effect && (__privateMethod(this, _G_instances, n_fn).call(this, n.effects), __privateMethod(this, _G_instances, n_fn).call(this, n.render_effects), n = n.parent), r = a.next, a = a.parent;
  }
};
n_fn = function(t) {
  for (const n of t) (n.f & A) !== 0 ? __privateGet(this, _f).add(n) : (n.f & C) !== 0 && __privateGet(this, _i).add(n), __privateMethod(this, _G_instances, o_fn).call(this, n.deps), m(n, b);
};
o_fn = function(t) {
  if (t !== null) for (const n of t) (n.f & w) === 0 || (n.f & J) === 0 || (n.f ^= J, __privateMethod(this, _G_instances, o_fn).call(this, n.deps));
};
u_fn = function() {
  if (__privateGet(this, _t2) === 0) {
    for (const t of __privateGet(this, _r2)) t();
    __privateGet(this, _r2).clear();
  }
  __privateGet(this, _e2) === 0 && __privateMethod(this, _G_instances, c_fn).call(this);
};
c_fn = function() {
  var _a2;
  if (M.size > 1) {
    this.previous.clear();
    var t = E, n = true, r = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const f of M) {
      if (f === this) {
        n = false;
        continue;
      }
      const o = [];
      for (const [i, a] of this.current) {
        if (f.current.has(i)) if (n && a !== f.current.get(i)) f.current.set(i, a);
        else continue;
        o.push(i);
      }
      if (o.length === 0) continue;
      const l = [...f.current.keys()].filter((i) => !this.current.has(i));
      if (l.length > 0) {
        var s = x;
        x = [];
        const i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (const u of o) ht(u, l, i, a);
        if (x.length > 0) {
          p = f, f.apply();
          for (const u of x) __privateMethod(_a2 = f, _G_instances, l_fn).call(_a2, u, r);
          f.deactivate();
        }
        x = s;
      }
    }
    p = null, E = t;
  }
  this.committed = true, M.delete(this);
};
let G = _G;
function Le(e) {
  var t = ce;
  ce = true;
  try {
    var n;
    for (e && (p !== null && je(), n = e()); ; ) {
      if (on(), x.length === 0 && (p == null ? void 0 : p.flush(), x.length === 0)) return Oe = null, n;
      je();
    }
  } finally {
    ce = t;
  }
}
function je() {
  var e = Z;
  Me = true;
  var t = null;
  try {
    var n = 0;
    for (Re(true); x.length > 0; ) {
      var r = G.ensure();
      if (n++ > 1e3) {
        var s, f;
        cn();
      }
      r.process(x), V.clear();
    }
  } finally {
    Me = false, Re(e), Oe = null;
  }
}
function cn() {
  try {
    Wt();
  } catch (e) {
    ge(e, Oe);
  }
}
let N = null;
function tt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (U | I)) === 0 && ye(r) && (N = /* @__PURE__ */ new Set(), ve(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Ot(r) : r.fn = null), (N == null ? void 0 : N.size) > 0)) {
        V.clear();
        for (const s of N) {
          if ((s.f & (U | I)) !== 0) continue;
          const f = [s];
          let o = s.parent;
          for (; o !== null; ) N.has(o) && (N.delete(o), f.push(o)), o = o.parent;
          for (let l = f.length - 1; l >= 0; l--) {
            const i = f[l];
            (i.f & (U | I)) === 0 && ve(i);
          }
        }
        N.clear();
      }
    }
    N = null;
  }
}
function ht(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const f = s.f;
    (f & w) !== 0 ? ht(s, t, n, r) : (f & (Ve | q)) !== 0 && (f & A) === 0 && wt(s, t, r) && (m(s, A), ee(s));
  }
}
function pt(e, t) {
  if (e.reactions !== null) for (const n of e.reactions) {
    const r = n.f;
    (r & w) !== 0 ? pt(n, t) : (r & Ce) !== 0 && (m(n, A), t.add(n));
  }
}
function wt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (t.includes(s)) return true;
    if ((s.f & w) !== 0 && wt(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function ee(e) {
  for (var t = Oe = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Me && t === h && (n & q) !== 0 && (n & ot) === 0) return;
    if ((n & (ne | Y)) !== 0) {
      if ((n & b) === 0) return;
      t.f ^= b;
    }
  }
  x.push(t);
}
function pr(e) {
  j || Gt(), p !== null && Qt();
  var t = G.ensure();
  t.is_fork = true, E = /* @__PURE__ */ new Map();
  var n = false, r = t.settled();
  Le(e), E = null;
  for (var [s, f] of t.previous) s.v = f;
  return { commit: async () => {
    if (n) {
      await r;
      return;
    }
    M.has(t) || Jt(), n = true, t.is_fork = false;
    for (var [o, l] of t.current) o.v = l;
    Le(() => {
      var i = /* @__PURE__ */ new Set();
      for (var a of t.current.keys()) pt(a, i);
      wn(i), gt();
    }), t.revive(), await r;
  }, discard: () => {
    !n && M.has(t) && (M.delete(t), t.discard());
  } };
}
function _n(e, t, n, r) {
  const s = we() ? $e : hn;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var f = p, o = h, l = vn();
  function i() {
    Promise.all(n.map((a) => dn(a))).then((a) => {
      l();
      try {
        r([...t.map(s), ...a]);
      } catch (u) {
        (o.f & U) === 0 && ge(u, o);
      }
      f == null ? void 0 : f.deactivate(), be();
    }).catch((a) => {
      ge(a, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return i();
    } finally {
      f == null ? void 0 : f.deactivate(), be();
    }
  }) : i();
}
function vn() {
  var e = h, t = _, n = y, r = p;
  return function(f = true) {
    fe(e), K(t), me(n), f && (r == null ? void 0 : r.activate());
  };
}
function be() {
  fe(null), K(null), me(null);
}
function $e(e) {
  var t = w | A, n = _ !== null && (_.f & w) !== 0 ? _ : null;
  return h !== null && (h.f |= he), { ctx: y, deps: null, effects: null, equals: _t, f: t, fn: e, reactions: null, rv: 0, v: g, wv: 0, parent: n ?? h, ac: null };
}
function dn(e, t) {
  let n = h;
  n === null && zt();
  var r = n.b, s = void 0, f = Ze(g), o = !_, l = /* @__PURE__ */ new Map();
  return An(() => {
    var _a2;
    var i = at();
    s = i.promise;
    try {
      Promise.resolve(e()).then(i.resolve, i.reject).then(() => {
        a === p && a.committed && a.deactivate(), be();
      });
    } catch (c) {
      i.reject(c), be();
    }
    var a = p;
    if (o) {
      var u = !r.is_pending();
      r.update_pending_count(1), a.increment(u), (_a2 = l.get(a)) == null ? void 0 : _a2.reject(re), l.delete(a), l.set(a, i);
    }
    const v = (c, d = void 0) => {
      if (a.activate(), d) d !== re && (f.f |= B, qe(f, d));
      else {
        (f.f & B) !== 0 && (f.f ^= B), qe(f, c);
        for (const [O, De] of l) {
          if (l.delete(O), O === a) break;
          De.reject(re);
        }
      }
      o && (r.update_pending_count(-1), a.decrement(u));
    };
    i.promise.then(v, (c) => v(null, c || "unknown"));
  }), bn(() => {
    for (const i of l.values()) i.reject(re);
  }), new Promise((i) => {
    function a(u) {
      function v() {
        u === s ? i(f) : a(s);
      }
      u.then(v, v);
    }
    a(s);
  });
}
function wr(e) {
  const t = $e(e);
  return j || Pt(t), t;
}
function hn(e) {
  const t = $e(e);
  return t.equals = vt, t;
}
function yt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) te(t[n]);
  }
}
function pn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & w) === 0) return (t.f & U) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function Xe(e) {
  var t, n = h;
  fe(pn(e));
  try {
    e.f &= ~J, yt(e), t = Mt(e);
  } finally {
    fe(n);
  }
  return t;
}
function Et(e) {
  var t = Xe(e);
  if (e.equals(t) || ((p == null ? void 0 : p.is_fork) || (e.v = t), e.wv = Ct()), !ie) if (E !== null) (Se() || (p == null ? void 0 : p.is_fork)) && E.set(e, t);
  else {
    var n = (e.f & D) === 0 ? C : b;
    m(e, n);
  }
}
let Te = /* @__PURE__ */ new Set();
const V = /* @__PURE__ */ new Map();
function wn(e) {
  Te = e;
}
let mt = false;
function Ze(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: _t, rv: 0, wv: 0 };
  return n;
}
function H(e, t) {
  const n = Ze(e);
  return Pt(n), n;
}
function yr(e, t = false, n = true) {
  var _a2;
  const r = Ze(e);
  return t || (r.equals = vt), pe && n && y !== null && y.l !== null && ((_a2 = y.l).s ?? (_a2.s = [])).push(r), r;
}
function $(e, t, n = false) {
  _ !== null && (!P || (_.f & Ce) !== 0) && we() && (_.f & (w | q | Ve | Ce)) !== 0 && !(L == null ? void 0 : L.includes(e)) && nn();
  let r = n ? ae(t) : t;
  return qe(e, r);
}
function qe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    ie ? V.set(e, t) : V.set(e, n), e.v = t;
    var r = G.ensure();
    r.capture(e, n), (e.f & w) !== 0 && ((e.f & A) !== 0 && Xe(e), m(e, (e.f & D) !== 0 ? b : C)), e.wv = Ct(), bt(e, A), we() && h !== null && (h.f & b) !== 0 && (h.f & (Y | ne)) === 0 && (k === null ? xn([e]) : k.push(e)), !r.is_fork && Te.size > 0 && !mt && gt();
  }
  return t;
}
function gt() {
  mt = false;
  var e = Z;
  Re(true);
  const t = Array.from(Te);
  try {
    for (const n of t) (n.f & b) !== 0 && m(n, C), ye(n) && ve(n);
  } finally {
    Re(e);
  }
  Te.clear();
}
function Ie(e) {
  $(e, e.v + 1);
}
function bt(e, t) {
  var n = e.reactions;
  if (n !== null) for (var r = we(), s = n.length, f = 0; f < s; f++) {
    var o = n[f], l = o.f;
    if (!(!r && o === h)) {
      var i = (l & A) === 0;
      if (i && m(o, t), (l & w) !== 0) {
        var a = o;
        E == null ? void 0 : E.delete(a), (l & J) === 0 && (l & D && (o.f |= J), bt(a, C));
      } else i && ((l & q) !== 0 && N !== null && N.add(o), ee(o));
    }
  }
}
function ae(e) {
  if (typeof e != "object" || e === null || ue in e) return e;
  const t = it(e);
  if (t !== Ut && t !== Bt) return e;
  var n = /* @__PURE__ */ new Map(), r = qt(e), s = H(0), f = W, o = (l) => {
    if (W === f) return l();
    var i = _, a = W;
    K(null), ft(f);
    var u = l();
    return K(i), ft(a), u;
  };
  return r && n.set("length", H(e.length)), new Proxy(e, { defineProperty(l, i, a) {
    (!("value" in a) || a.configurable === false || a.enumerable === false || a.writable === false) && en();
    var u = n.get(i);
    return u === void 0 ? u = o(() => {
      var v = H(a.value);
      return n.set(i, v), v;
    }) : $(u, a.value, true), true;
  }, deleteProperty(l, i) {
    var a = n.get(i);
    if (a === void 0) {
      if (i in l) {
        const u = o(() => H(g));
        n.set(i, u), Ie(s);
      }
    } else $(a, g), Ie(s);
    return true;
  }, get(l, i, a) {
    var _a2;
    if (i === ue) return e;
    var u = n.get(i), v = i in l;
    if (u === void 0 && (!v || ((_a2 = oe(l, i)) == null ? void 0 : _a2.writable)) && (u = o(() => {
      var d = ae(v ? l[i] : g), O = H(d);
      return O;
    }), n.set(i, u)), u !== void 0) {
      var c = le(u);
      return c === g ? void 0 : c;
    }
    return Reflect.get(l, i, a);
  }, getOwnPropertyDescriptor(l, i) {
    var a = Reflect.getOwnPropertyDescriptor(l, i);
    if (a && "value" in a) {
      var u = n.get(i);
      u && (a.value = le(u));
    } else if (a === void 0) {
      var v = n.get(i), c = v == null ? void 0 : v.v;
      if (v !== void 0 && c !== g) return { enumerable: true, configurable: true, value: c, writable: true };
    }
    return a;
  }, has(l, i) {
    var _a2;
    if (i === ue) return true;
    var a = n.get(i), u = a !== void 0 && a.v !== g || Reflect.has(l, i);
    if (a !== void 0 || h !== null && (!u || ((_a2 = oe(l, i)) == null ? void 0 : _a2.writable))) {
      a === void 0 && (a = o(() => {
        var c = u ? ae(l[i]) : g, d = H(c);
        return d;
      }), n.set(i, a));
      var v = le(a);
      if (v === g) return false;
    }
    return u;
  }, set(l, i, a, u) {
    var _a2;
    var v = n.get(i), c = i in l;
    if (r && i === "length") for (var d = a; d < v.v; d += 1) {
      var O = n.get(d + "");
      O !== void 0 ? $(O, g) : d in l && (O = o(() => H(g)), n.set(d + "", O));
    }
    if (v === void 0) (!c || ((_a2 = oe(l, i)) == null ? void 0 : _a2.writable)) && (v = o(() => H(void 0)), $(v, ae(a)), n.set(i, v));
    else {
      c = v.v !== g;
      var De = o(() => ae(a));
      $(v, De);
    }
    var Je = Reflect.getOwnPropertyDescriptor(l, i);
    if ((Je == null ? void 0 : Je.set) && Je.set.call(u, a), !c) {
      if (r && typeof i == "string") {
        var Qe = n.get("length"), Ne = Number(i);
        Number.isInteger(Ne) && Ne >= Qe.v && $(Qe, Ne + 1);
      }
      Ie(s);
    }
    return true;
  }, ownKeys(l) {
    le(s);
    var i = Reflect.ownKeys(l).filter((v) => {
      var c = n.get(v);
      return c === void 0 || c.v !== g;
    });
    for (var [a, u] of n) u.v !== g && !(a in l) && i.push(a);
    return i;
  }, setPrototypeOf() {
    tn();
  } });
}
var nt, yn, En, Tt, At;
function Er() {
  if (nt === void 0) {
    nt = window, yn = document, En = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Tt = oe(t, "firstChild").get, At = oe(t, "nextSibling").get, et(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), et(n) && (n.__t = void 0);
  }
}
function Ae(e = "") {
  return document.createTextNode(e);
}
function Ye(e) {
  return Tt.call(e);
}
function z(e) {
  return At.call(e);
}
function mr(e, t) {
  if (!Q) return Ye(e);
  var n = Ye(R);
  if (n === null) n = R.appendChild(Ae());
  else if (t && n.nodeType !== Ge) {
    var r = Ae();
    return n == null ? void 0 : n.before(r), se(r), r;
  }
  return se(n), n;
}
function gr(e, t = false) {
  if (!Q) {
    var n = Ye(e);
    return n instanceof Comment && n.data === "" ? z(n) : n;
  }
  if (t && (R == null ? void 0 : R.nodeType) !== Ge) {
    var r = Ae();
    return R == null ? void 0 : R.before(r), se(r), r;
  }
  return R;
}
function br(e, t = 1, n = false) {
  let r = Q ? R : e;
  for (var s; t--; ) s = r, r = z(r);
  if (!Q) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Ge) {
    var f = Ae();
    return r === null ? s == null ? void 0 : s.after(f) : r.before(f), se(f), f;
  }
  return se(r), r;
}
function Tr(e) {
  e.textContent = "";
}
function Ar() {
  if (!j || N !== null) return false;
  var e = h.f;
  return (e & xe) !== 0;
}
let rt = false;
function mn() {
  rt || (rt = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a2;
      if (!e.defaultPrevented) for (const t of e.target.elements) (_a2 = t.__on_r) == null ? void 0 : _a2.call(t);
    });
  }, { capture: true }));
}
function We(e) {
  var t = _, n = h;
  K(null), fe(null);
  try {
    return e();
  } finally {
    K(t), fe(n);
  }
}
function Sr(e, t, n, r = n) {
  e.addEventListener(t, () => We(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), mn();
}
function St(e) {
  h === null && (_ === null && Zt(), Xt()), ie && $t();
}
function gn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function F(e, t, n) {
  var r = h;
  r !== null && (r.f & I) !== 0 && (e |= I);
  var s = { ctx: y, deps: null, nodes: null, f: e | A | D, first: null, fn: t, last: null, next: null, parent: r, b: r && r.b, prev: null, teardown: null, wv: 0, ac: null };
  if (n) try {
    ve(s), s.f |= xe;
  } catch (l) {
    throw te(s), l;
  }
  else t !== null && ee(s);
  var f = s;
  if (n && f.deps === null && f.teardown === null && f.nodes === null && f.first === f.last && (f.f & he) === 0 && (f = f.first, (e & q) !== 0 && (e & Ee) !== 0 && f !== null && (f.f |= Ee)), f !== null && (f.parent = r, r !== null && gn(f, r), _ !== null && (_.f & w) !== 0 && (e & ne) === 0)) {
    var o = _;
    (o.effects ?? (o.effects = [])).push(f);
  }
  return s;
}
function Se() {
  return _ !== null && !P;
}
function bn(e) {
  const t = F(de, null, false);
  return m(t, b), t.teardown = e, t;
}
function Tn(e) {
  St();
  var t = h.f, n = !_ && (t & Y) !== 0 && (t & xe) === 0;
  if (n) {
    var r = y;
    (r.e ?? (r.e = [])).push(e);
  } else return Rt(e);
}
function Rt(e) {
  return F(Ue | ut, e, false);
}
function Rr(e) {
  return St(), F(de | ut, e, true);
}
function kr(e) {
  G.ensure();
  const t = F(ne | he, e, true);
  return (n = {}) => new Promise((r) => {
    n.outro ? kn(t, () => {
      te(t), r(void 0);
    }) : (te(t), r(void 0));
  });
}
function xr(e) {
  return F(Ue, e, false);
}
function An(e) {
  return F(Ve | he, e, true);
}
function Or(e, t = 0) {
  return F(de | t, e, true);
}
function Dr(e, t = [], n = [], r = []) {
  _n(r, t, n, (s) => {
    F(de, () => e(...s.map(le)), true);
  });
}
function Nr(e, t = 0) {
  var n = F(q | t, e, true);
  return n;
}
function Pr(e) {
  return F(Y | he, e, true);
}
function kt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ie, r = _;
    st(true), K(null);
    try {
      t.call(null);
    } finally {
      st(n), K(r);
    }
  }
}
function xt(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && We(() => {
      s.abort(re);
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : te(n, t), n = r;
  }
}
function Sn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Y) === 0 && te(t), t = n;
  }
}
function te(e, t = true) {
  var n = false;
  (t || (e.f & ot) !== 0) && e.nodes !== null && e.nodes.end !== null && (Rn(e.nodes.start, e.nodes.end), n = true), xt(e, t && !n), ke(e, 0), m(e, U);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const f of r) f.stop();
  kt(e);
  var s = e.parent;
  s !== null && s.first !== null && Ot(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Rn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : z(e);
    e.remove(), e = n;
  }
}
function Ot(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kn(e, t, n = true) {
  var r = [];
  Dt(e, r, true);
  var s = () => {
    n && te(e), t && t();
  }, f = r.length;
  if (f > 0) {
    var o = () => --f || s();
    for (var l of r) l.out(o);
  } else s();
}
function Dt(e, t, n) {
  if ((e.f & I) === 0) {
    e.f ^= I;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var f = s.next, o = (s.f & Ee) !== 0 || (s.f & Y) !== 0 && (e.f & q) !== 0;
      Dt(s, t, o ? n : false), s = f;
    }
  }
}
function Ir(e) {
  Nt(e, true);
}
function Nt(e, t) {
  if ((e.f & I) !== 0) {
    e.f ^= I, (e.f & b) === 0 && (m(e, A), ee(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ee) !== 0 || (n.f & Y) !== 0;
      Nt(n, s ? t : false), n = r;
    }
    var f = e.nodes && e.nodes.t;
    if (f !== null) for (const o of f) (o.is_global || t) && o.in();
  }
}
function Cr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : z(n);
    t.append(n), n = s;
  }
}
let Z = false;
function Re(e) {
  Z = e;
}
let ie = false;
function st(e) {
  ie = e;
}
let _ = null, P = false;
function K(e) {
  _ = e;
}
let h = null;
function fe(e) {
  h = e;
}
let L = null;
function Pt(e) {
  _ !== null && (!j || (_.f & w) !== 0) && (L === null ? L = [e] : L.push(e));
}
let T = null, S = 0, k = null;
function xn(e) {
  k = e;
}
let It = 1, _e = 0, W = _e;
function ft(e) {
  W = e;
}
function Ct() {
  return ++It;
}
function ye(e) {
  var t = e.f;
  if ((t & A) !== 0) return true;
  if (t & w && (e.f &= ~J), (t & C) !== 0) {
    var n = e.deps;
    if (n !== null) for (var r = n.length, s = 0; s < r; s++) {
      var f = n[s];
      if (ye(f) && Et(f), f.wv > e.wv) return true;
    }
    (t & D) !== 0 && E === null && m(e, b);
  }
  return false;
}
function Ft(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(!j && (L == null ? void 0 : L.includes(e)))) for (var s = 0; s < r.length; s++) {
    var f = r[s];
    (f.f & w) !== 0 ? Ft(f, t, false) : t === f && (n ? m(f, A) : (f.f & b) !== 0 && m(f, C), ee(f));
  }
}
function Mt(e) {
  var _a2;
  var t = T, n = S, r = k, s = _, f = L, o = y, l = P, i = W, a = e.f;
  T = null, S = 0, k = null, _ = (a & (Y | ne)) === 0 ? e : null, L = null, me(e.ctx), P = false, W = ++_e, e.ac !== null && (We(() => {
    e.ac.abort(re);
  }), e.ac = null);
  try {
    e.f |= Fe;
    var u = e.fn, v = u(), c = e.deps;
    if (T !== null) {
      var d;
      if (ke(e, S), c !== null && S > 0) for (c.length = S + T.length, d = 0; d < T.length; d++) c[S + d] = T[d];
      else e.deps = c = T;
      if (Se() && (e.f & D) !== 0) for (d = S; d < c.length; d++) ((_a2 = c[d]).reactions ?? (_a2.reactions = [])).push(e);
    } else c !== null && S < c.length && (ke(e, S), c.length = S);
    if (we() && k !== null && !P && c !== null && (e.f & (w | C | A)) === 0) for (d = 0; d < k.length; d++) Ft(k[d], e);
    return s !== null && s !== e && (_e++, k !== null && (r === null ? r = k : r.push(...k))), (e.f & B) !== 0 && (e.f ^= B), v;
  } catch (O) {
    return un(O);
  } finally {
    e.f ^= Fe, T = t, S = n, k = r, _ = s, L = f, me(o), P = l, W = i;
  }
}
function On(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Yt.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & w) !== 0 && (T === null || !T.includes(t)) && (m(t, C), (t.f & D) !== 0 && (t.f ^= D, t.f &= ~J), yt(t), ke(t, 0));
}
function ke(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) On(e, n[r]);
}
function ve(e) {
  var t = e.f;
  if ((t & U) === 0) {
    m(e, b);
    var n = h, r = Z;
    h = e, Z = true;
    try {
      (t & (q | lt)) !== 0 ? Sn(e) : xt(e), kt(e);
      var s = Mt(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = It;
      var f;
    } finally {
      Z = r, h = n;
    }
  }
}
async function Fr() {
  if (j) return new Promise((e) => {
    requestAnimationFrame(() => e()), setTimeout(() => e());
  });
  await Promise.resolve(), Le();
}
function Mr() {
  return G.ensure().settled();
}
function le(e) {
  var t = e.f, n = (t & w) !== 0;
  if (_ !== null && !P) {
    var r = h !== null && (h.f & U) !== 0;
    if (!r && !(L == null ? void 0 : L.includes(e))) {
      var s = _.deps;
      if ((_.f & Fe) !== 0) e.rv < _e && (e.rv = _e, T === null && s !== null && s[S] === e ? S++ : T === null ? T = [e] : T.includes(e) || T.push(e));
      else {
        (_.deps ?? (_.deps = [])).push(e);
        var f = e.reactions;
        f === null ? e.reactions = [_] : f.includes(_) || f.push(_);
      }
    }
  }
  if (ie) {
    if (V.has(e)) return V.get(e);
    if (n) {
      var o = e, l = o.v;
      return ((o.f & b) === 0 && o.reactions !== null || jt(o)) && (l = Xe(o)), V.set(o, l), l;
    }
  } else n && (!(E == null ? void 0 : E.has(e)) || (p == null ? void 0 : p.is_fork) && !Se()) && (o = e, ye(o) && Et(o), Z && Se() && (o.f & D) === 0 && Lt(o));
  if (E == null ? void 0 : E.has(e)) return E.get(e);
  if ((e.f & B) !== 0) throw e.v;
  return e.v;
}
function Lt(e) {
  if (e.deps !== null) {
    e.f ^= D;
    for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & w) !== 0 && (t.f & D) === 0 && Lt(t);
  }
}
function jt(e) {
  if (e.v === g) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (V.has(t) || (t.f & w) !== 0 && jt(t)) return true;
  return false;
}
function Dn(e) {
  var t = P;
  try {
    return P = true, e();
  } finally {
    P = t;
  }
}
const Nn = -7169;
function m(e, t) {
  e.f = e.f & Nn | t;
}
function Lr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ue in e) He(e);
    else if (!Array.isArray(e)) for (let t in e) {
      const n = e[t];
      typeof n == "object" && n && ue in n && He(n);
    }
  }
}
function He(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      He(e[r], t);
    } catch {
    }
    const n = it(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ht(n);
      for (let s in r) {
        const f = r[s].get;
        if (f) try {
          f.call(e);
        } catch {
        }
      }
    }
  }
}
function jr(e) {
  y === null && Kt(), pe && y.l !== null ? Pn(y).m.push(e) : Tn(() => {
    const t = Dn(e);
    if (typeof t == "function") return t;
  });
}
function Pn(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
export {
  se as $,
  K as A,
  fe as B,
  _ as C,
  h as D,
  y as E,
  Rr as F,
  Tn as G,
  Vt as H,
  Ln as I,
  Lr as J,
  $e as K,
  Hn as L,
  vr as M,
  sr as N,
  Dr as O,
  mr as P,
  lr as Q,
  Sr as R,
  ue as S,
  Fr as T,
  Pe as U,
  Nr as V,
  ar as W,
  Ee as X,
  cr as Y,
  sn as Z,
  ur as _,
  H as a,
  pr as a$,
  ir as a0,
  oe as a1,
  Vn as a2,
  Qn as a3,
  hn as a4,
  ae as a5,
  ie as a6,
  U as a7,
  er as a8,
  pe as a9,
  kr as aA,
  fn as aB,
  ze as aC,
  En as aD,
  nr as aE,
  rr as aF,
  xe as aG,
  Ge as aH,
  _r as aI,
  j as aJ,
  Le as aK,
  yr as aL,
  wr as aM,
  ot as aN,
  yn as aO,
  In as aP,
  qn as aQ,
  qt as aR,
  Kn as aS,
  Zn as aT,
  zn as aU,
  I as aV,
  $n as aW,
  Xn as aX,
  Mn as aY,
  jn as aZ,
  an as a_,
  Jn as aa,
  Wn as ab,
  tr as ac,
  Yn as ad,
  Se as ae,
  Ze as af,
  Ie as ag,
  ct as ah,
  G as ai,
  me as aj,
  un as ak,
  qe as al,
  or as am,
  ge as an,
  Gn as ao,
  he as ap,
  Be as aq,
  fr as ar,
  Er as as,
  Ye as at,
  rn as au,
  z as av,
  Ke as aw,
  Bn as ax,
  Tr as ay,
  Cn as az,
  hr as b,
  Mr as b0,
  br as c,
  mn as d,
  it as e,
  gr as f,
  le as g,
  Q as h,
  Ht as i,
  p as j,
  te as k,
  kn as l,
  Ar as m,
  Ae as n,
  jr as o,
  dr as p,
  ln as q,
  Ir as r,
  $ as s,
  Pr as t,
  R as u,
  Cr as v,
  xr as w,
  Or as x,
  Dn as y,
  Fn as z
};
