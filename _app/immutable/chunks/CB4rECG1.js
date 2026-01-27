var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { f as hn, a as nn } from "./BjTfwbem.js";
import { o as lu } from "./B3YYK8RE.js";
import { o as z0, c as Qh, i as $0, h as an, at as e1, d as r1, M as et, V as t1, r as a1, H as n1, e as Xo, j as q0, n as i1, u as Cs, ah as s1, aB as f1, al as Ko, k as o1, aP as Ma, t as mf, af as jo, aN as gf, az as Nf, aQ as c1, aR as u1, aS as l1, aT as h1, l as hu, p as du, aU as Y0, av as d1, ay as x1, m as p1, aV as xu, q as v1, aW as m1, P as pu, a5 as vu, G as Go, f as mu, s as qn, a6 as bi, a7 as gu, ad as zo, a8 as Ca, a9 as qt, Q as Yn, aX as g1, aO as _1, aY as w1 } from "./CdrJcFTF.js";
import { s as Fi } from "./9O2zJLIi.js";
import { i as y1 } from "./5RHKzVXV.js";
import { s as $o } from "./C8_7hY_V.js";
import { d as _u } from "./Cuooy7pM.js";
import { b as wu } from "./DdzU8gf5.js";
import { p as k1 } from "./DAqyL755.js";
import { i as E1 } from "./Pcmb8gcg.js";
import "./CTFdOF87.js";
function Xs(e, r) {
  return r;
}
function T1(e, r, t) {
  for (var a = [], n = r.length, i, s = r.length, f = 0; f < n; f++) {
    let v = r[f];
    du(v, () => {
      if (i) {
        if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
          var d = e.outrogroups;
          _f(Nf(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else s -= 1;
    }, false);
  }
  if (s === 0) {
    var c = a.length === 0 && t !== null;
    if (c) {
      var u = t, h = u.parentNode;
      x1(h), h.append(u), e.items.clear();
    }
    _f(r, !c);
  } else i = { pending: new Set(r), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function _f(e, r = true) {
  for (var t = 0; t < e.length; t++) p1(e[t], r);
}
var qo;
function Ks(e, r, t, a, n, i = null) {
  var s = e, f = /* @__PURE__ */ new Map(), c = (r & xu) !== 0;
  if (c) {
    var u = e;
    s = an ? $0(e1(u)) : u.appendChild(z0());
  }
  an && r1();
  var h = null, v = t1(() => {
    var g = t();
    return c1(g) ? g : g == null ? [] : Nf(g);
  }), d, x = true;
  function _() {
    m.fallback = h, S1(m, d, s, r, a), h !== null && (d.length === 0 ? (h.f & Ma) === 0 ? hu(h) : (h.f ^= Ma, Ei(h, null, s)) : du(h, () => {
      h = null;
    }));
  }
  var y = Qh(() => {
    d = et(v);
    var g = d.length;
    let S = false;
    if (an) {
      var E = a1(s) === n1;
      E !== (g === 0) && (s = Xo(), $0(s), q0(false), S = true);
    }
    for (var A = /* @__PURE__ */ new Set(), X = o1, U = i1(), F = 0; F < g; F += 1) {
      an && Cs.nodeType === s1 && Cs.data === f1 && (s = Cs, S = true, q0(false));
      var B = d[F], L = a(B, F), K = x ? null : f.get(L);
      K ? (K.v && Ko(K.v, B), K.i && Ko(K.i, F), U && X.skipped_effects.delete(K.e)) : (K = b1(f, x ? s : qo ?? (qo = z0()), B, L, F, n, r, t), x || (K.e.f |= Ma), f.set(L, K)), A.add(L);
    }
    if (g === 0 && i && !h && (x ? h = mf(() => i(s)) : (h = mf(() => i(qo ?? (qo = z0()))), h.f |= Ma)), an && g > 0 && $0(Xo()), !x) if (U) {
      for (const [G, te] of f) A.has(G) || X.skipped_effects.add(te.e);
      X.oncommit(_), X.ondiscard(() => {
      });
    } else _();
    S && q0(true), et(v);
  }), m = { effect: y, items: f, outrogroups: null, fallback: h };
  x = false, an && (s = Cs);
}
function S1(e, r, t, a, n) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i;
  var i = (a & m1) !== 0, s = r.length, f = e.items, c = e.effect.first, u, h = null, v, d = [], x = [], _, y, m, g;
  if (i) for (g = 0; g < s; g += 1) _ = r[g], y = n(_, g), m = f.get(y).e, (m.f & Ma) === 0 && ((_b = (_a2 = m.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(m));
  for (g = 0; g < s; g += 1) {
    if (_ = r[g], y = n(_, g), m = f.get(y).e, e.outrogroups !== null) for (const K of e.outrogroups) K.pending.delete(m), K.done.delete(m);
    if ((m.f & Ma) !== 0) if (m.f ^= Ma, m === c) Ei(m, null, t);
    else {
      var S = h ? h.next : c;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), rn(e, h, m), rn(e, m, S), Ei(m, S, t), h = m, d = [], x = [], c = h.next;
      continue;
    }
    if ((m.f & Y0) !== 0 && (hu(m), i && ((_d2 = (_c2 = m.nodes) == null ? void 0 : _c2.a) == null ? void 0 : _d2.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(m))), m !== c) {
      if (u !== void 0 && u.has(m)) {
        if (d.length < x.length) {
          var E = x[0], A;
          h = E.prev;
          var X = d[0], U = d[d.length - 1];
          for (A = 0; A < d.length; A += 1) Ei(d[A], E, t);
          for (A = 0; A < x.length; A += 1) u.delete(x[A]);
          rn(e, X.prev, U.next), rn(e, h, X), rn(e, U, E), c = E, h = U, g -= 1, d = [], x = [];
        } else u.delete(m), Ei(m, c, t), rn(e, m.prev, m.next), rn(e, m, h === null ? e.effect.first : h.next), rn(e, h, m), h = m;
        continue;
      }
      for (d = [], x = []; c !== null && c !== m; ) (u ?? (u = /* @__PURE__ */ new Set())).add(c), x.push(c), c = c.next;
      if (c === null) continue;
    }
    (m.f & Ma) === 0 && d.push(m), h = m, c = m.next;
  }
  if (e.outrogroups !== null) {
    for (const K of e.outrogroups) K.pending.size === 0 && (_f(Nf(K.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(K));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var F = [];
    if (u !== void 0) for (m of u) (m.f & Y0) === 0 && F.push(m);
    for (; c !== null; ) (c.f & Y0) === 0 && c !== e.fallback && F.push(c), c = c.next;
    var B = F.length;
    if (B > 0) {
      var L = (a & xu) !== 0 && s === 0 ? t : null;
      if (i) {
        for (g = 0; g < B; g += 1) (_g2 = (_f2 = F[g].nodes) == null ? void 0 : _f2.a) == null ? void 0 : _g2.measure();
        for (g = 0; g < B; g += 1) (_i = (_h2 = F[g].nodes) == null ? void 0 : _h2.a) == null ? void 0 : _i.fix();
      }
      T1(e, F, L);
    }
  }
  i && v1(() => {
    var _a3, _b2;
    if (v !== void 0) for (m of v) (_b2 = (_a3 = m.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
  });
}
function b1(e, r, t, a, n, i, s, f) {
  var c = (s & u1) !== 0 ? (s & l1) === 0 ? gf(t, false, false) : jo(t) : null, u = (s & h1) !== 0 ? jo(n) : null;
  return { v: c, i: u, e: mf(() => (i(r, c ?? t, u ?? n, f), () => {
    e.delete(a);
  })) };
}
function Ei(e, r, t) {
  if (e.nodes) for (var a = e.nodes.start, n = e.nodes.end, i = r && (r.f & Ma) === 0 ? r.nodes.start : t; a !== null; ) {
    var s = d1(a);
    if (i.before(a), a === n) return;
    a = s;
  }
}
function rn(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function F1(e, r, t) {
  var a = e == null ? "" : "" + e;
  return a = a ? a + " " + r : r, a === "" ? null : a;
}
function A1(e, r, t, a, n, i) {
  var s = e.__className;
  if (an || s !== t || s === void 0) {
    var f = F1(t, a);
    (!an || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = t;
  }
  return i;
}
var C1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var js = { exports: {} }, I1 = js.exports, Yo;
function O1() {
  return Yo || (Yo = 1, (function(e, r) {
    (function(t, a) {
      e.exports = a();
    })(I1, function() {
      var t = function(o, l) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, w) {
          p.__proto__ = w;
        } || function(p, w) {
          for (var k in w) Object.prototype.hasOwnProperty.call(w, k) && (p[k] = w[k]);
        })(o, l);
      }, a = function() {
        return (a = Object.assign || function(o) {
          for (var l, p = 1, w = arguments.length; p < w; p++) for (var k in l = arguments[p]) Object.prototype.hasOwnProperty.call(l, k) && (o[k] = l[k]);
          return o;
        }).apply(this, arguments);
      };
      function n(o, l, p) {
        for (var w, k = 0, T = l.length; k < T; k++) !w && k in l || ((w = w || Array.prototype.slice.call(l, 0, k))[k] = l[k]);
        return o.concat(w || Array.prototype.slice.call(l));
      }
      var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : C1, s = Object.keys, f = Array.isArray;
      function c(o, l) {
        return typeof l != "object" || s(l).forEach(function(p) {
          o[p] = l[p];
        }), o;
      }
      typeof Promise > "u" || i.Promise || (i.Promise = Promise);
      var u = Object.getPrototypeOf, h = {}.hasOwnProperty;
      function v(o, l) {
        return h.call(o, l);
      }
      function d(o, l) {
        typeof l == "function" && (l = l(u(o))), (typeof Reflect > "u" ? s : Reflect.ownKeys)(l).forEach(function(p) {
          _(o, p, l[p]);
        });
      }
      var x = Object.defineProperty;
      function _(o, l, p, w) {
        x(o, l, c(p && v(p, "get") && typeof p.get == "function" ? { get: p.get, set: p.set, configurable: true } : { value: p, configurable: true, writable: true }, w));
      }
      function y(o) {
        return { from: function(l) {
          return o.prototype = Object.create(l.prototype), _(o.prototype, "constructor", o), { extend: d.bind(null, o.prototype) };
        } };
      }
      var m = Object.getOwnPropertyDescriptor, g = [].slice;
      function S(o, l, p) {
        return g.call(o, l, p);
      }
      function E(o, l) {
        return l(o);
      }
      function A(o) {
        if (!o) throw new Error("Assertion Failed");
      }
      function X(o) {
        i.setImmediate ? setImmediate(o) : setTimeout(o, 0);
      }
      function U(o, l) {
        if (typeof l == "string" && v(o, l)) return o[l];
        if (!l) return o;
        if (typeof l != "string") {
          for (var p = [], w = 0, k = l.length; w < k; ++w) {
            var T = U(o, l[w]);
            p.push(T);
          }
          return p;
        }
        var O = l.indexOf(".");
        if (O !== -1) {
          var H = o[l.substr(0, O)];
          return H == null ? void 0 : U(H, l.substr(O + 1));
        }
      }
      function F(o, l, p) {
        if (o && l !== void 0 && !("isFrozen" in Object && Object.isFrozen(o))) if (typeof l != "string" && "length" in l) {
          A(typeof p != "string" && "length" in p);
          for (var w = 0, k = l.length; w < k; ++w) F(o, l[w], p[w]);
        } else {
          var T, O, H = l.indexOf(".");
          H !== -1 ? (T = l.substr(0, H), (O = l.substr(H + 1)) === "" ? p === void 0 ? f(o) && !isNaN(parseInt(T)) ? o.splice(T, 1) : delete o[T] : o[T] = p : F(H = !(H = o[T]) || !v(o, T) ? o[T] = {} : H, O, p)) : p === void 0 ? f(o) && !isNaN(parseInt(l)) ? o.splice(l, 1) : delete o[l] : o[l] = p;
        }
      }
      function B(o) {
        var l, p = {};
        for (l in o) v(o, l) && (p[l] = o[l]);
        return p;
      }
      var L = [].concat;
      function K(o) {
        return L.apply([], o);
      }
      var Zr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(K([8, 16, 32, 64].map(function(o) {
        return ["Int", "Uint", "Float"].map(function(l) {
          return l + o + "Array";
        });
      }))).filter(function(o) {
        return i[o];
      }), G = new Set(Zr.map(function(o) {
        return i[o];
      })), te = null;
      function de(o) {
        return te = /* @__PURE__ */ new WeakMap(), o = (function l(p) {
          if (!p || typeof p != "object") return p;
          var w = te.get(p);
          if (w) return w;
          if (f(p)) {
            w = [], te.set(p, w);
            for (var k = 0, T = p.length; k < T; ++k) w.push(l(p[k]));
          } else if (G.has(p.constructor)) w = p;
          else {
            var O, H = u(p);
            for (O in w = H === Object.prototype ? {} : Object.create(H), te.set(p, w), p) v(p, O) && (w[O] = l(p[O]));
          }
          return w;
        })(o), te = null, o;
      }
      var Ve = {}.toString;
      function ge(o) {
        return Ve.call(o).slice(8, -1);
      }
      var $e = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ke = typeof $e == "symbol" ? function(o) {
        var l;
        return o != null && (l = o[$e]) && l.apply(o);
      } : function() {
        return null;
      };
      function Pe(o, l) {
        return l = o.indexOf(l), 0 <= l && o.splice(l, 1), 0 <= l;
      }
      var Qe = {};
      function he(o) {
        var l, p, w, k;
        if (arguments.length === 1) {
          if (f(o)) return o.slice();
          if (this === Qe && typeof o == "string") return [o];
          if (k = ke(o)) {
            for (p = []; !(w = k.next()).done; ) p.push(w.value);
            return p;
          }
          if (o == null) return [o];
          if (typeof (l = o.length) != "number") return [o];
          for (p = new Array(l); l--; ) p[l] = o[l];
          return p;
        }
        for (l = arguments.length, p = new Array(l); l--; ) p[l] = arguments[l];
        return p;
      }
      var sr = typeof Symbol < "u" ? function(o) {
        return o[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      }, Oe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ta = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Oe), Le = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Te(o, l) {
        this.name = o, this.message = l;
      }
      function ye(o, l) {
        return o + ". Errors: " + Object.keys(l).map(function(p) {
          return l[p].toString();
        }).filter(function(p, w, k) {
          return k.indexOf(p) === w;
        }).join(`
`);
      }
      function je(o, l, p, w) {
        this.failures = l, this.failedKeys = w, this.successCount = p, this.message = ye(o, l);
      }
      function Ge(o, l) {
        this.name = "BulkError", this.failures = Object.keys(l).map(function(p) {
          return l[p];
        }), this.failuresByPos = l, this.message = ye(o, this.failures);
      }
      y(Te).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), y(je).from(Te), y(Ge).from(Te);
      var Ze = ta.reduce(function(o, l) {
        return o[l] = l + "Error", o;
      }, {}), R = Te, W = ta.reduce(function(o, l) {
        var p = l + "Error";
        function w(k, T) {
          this.name = p, k ? typeof k == "string" ? (this.message = "".concat(k).concat(T ? `
 ` + T : ""), this.inner = T || null) : typeof k == "object" && (this.message = "".concat(k.name, " ").concat(k.message), this.inner = k) : (this.message = Le[l] || p, this.inner = null);
        }
        return y(w).from(R), o[l] = w, o;
      }, {});
      W.Syntax = SyntaxError, W.Type = TypeError, W.Range = RangeError;
      var z = Oe.reduce(function(o, l) {
        return o[l + "Error"] = W[l], o;
      }, {}), V = ta.reduce(function(o, l) {
        return ["Syntax", "Type", "Range"].indexOf(l) === -1 && (o[l + "Error"] = W[l]), o;
      }, {});
      function ue() {
      }
      function I(o) {
        return o;
      }
      function Ce(o, l) {
        return o == null || o === I ? l : function(p) {
          return l(o(p));
        };
      }
      function Ue(o, l) {
        return function() {
          o.apply(this, arguments), l.apply(this, arguments);
        };
      }
      function Se(o, l) {
        return o === ue ? l : function() {
          var p = o.apply(this, arguments);
          p !== void 0 && (arguments[0] = p);
          var w = this.onsuccess, k = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var T = l.apply(this, arguments);
          return w && (this.onsuccess = this.onsuccess ? Ue(w, this.onsuccess) : w), k && (this.onerror = this.onerror ? Ue(k, this.onerror) : k), T !== void 0 ? T : p;
        };
      }
      function ar(o, l) {
        return o === ue ? l : function() {
          o.apply(this, arguments);
          var p = this.onsuccess, w = this.onerror;
          this.onsuccess = this.onerror = null, l.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? Ue(p, this.onsuccess) : p), w && (this.onerror = this.onerror ? Ue(w, this.onerror) : w);
        };
      }
      function rr(o, l) {
        return o === ue ? l : function(p) {
          var w = o.apply(this, arguments);
          c(p, w);
          var k = this.onsuccess, T = this.onerror;
          return this.onsuccess = null, this.onerror = null, p = l.apply(this, arguments), k && (this.onsuccess = this.onsuccess ? Ue(k, this.onsuccess) : k), T && (this.onerror = this.onerror ? Ue(T, this.onerror) : T), w === void 0 ? p === void 0 ? void 0 : p : c(w, p);
        };
      }
      function fr(o, l) {
        return o === ue ? l : function() {
          return l.apply(this, arguments) !== false && o.apply(this, arguments);
        };
      }
      function Cr(o, l) {
        return o === ue ? l : function() {
          var p = o.apply(this, arguments);
          if (p && typeof p.then == "function") {
            for (var w = this, k = arguments.length, T = new Array(k); k--; ) T[k] = arguments[k];
            return p.then(function() {
              return l.apply(w, T);
            });
          }
          return l.apply(this, arguments);
        };
      }
      V.ModifyError = je, V.DexieError = Te, V.BulkError = Ge;
      var kr = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Xr(o) {
        kr = o;
      }
      var ze = {}, Er = 100, Zr = typeof Promise > "u" ? [] : (function() {
        var o = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [o, u(o), o];
        var l = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [l, u(l), o];
      })(), Oe = Zr[0], ta = Zr[1], Zr = Zr[2], ta = ta && ta.then, $r = Oe && Oe.constructor, Mr = !!Zr, yt = function(o, l) {
        wa.push([o, l]), Ke && (queueMicrotask(y0), Ke = false);
      }, dt = true, Ke = true, yr = [], Kr = [], Gr = I, xt = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: ue, pgp: false, env: {}, finalize: ue }, Je = xt, wa = [], ya = 0, pn = [];
      function Xe(o) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var l = this._PSD = Je;
        if (typeof o != "function") {
          if (o !== ze) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === false && $a(this, this._value));
        }
        this._state = null, this._value = null, ++l.ref, (function p(w, k) {
          try {
            k(function(T) {
              if (w._state === null) {
                if (T === w) throw new TypeError("A promise cannot be resolved with itself.");
                var O = w._lib && qa();
                T && typeof T.then == "function" ? p(w, function(H, q) {
                  T instanceof Xe ? T._then(H, q) : T.then(H, q);
                }) : (w._state = true, w._value = T, hs(w)), O && Ya();
              }
            }, $a.bind(null, w));
          } catch (T) {
            $a(w, T);
          }
        })(this, o);
      }
      var ui = { get: function() {
        var o = Je, l = P;
        function p(w, k) {
          var T = this, O = !o.global && (o !== Je || l !== P), H = O && !M(), q = new Xe(function(Y, ee) {
            li(T, new ls(Ee(w, o, O, H), Ee(k, o, O, H), Y, ee, o));
          });
          return this._consoleTask && (q._consoleTask = this._consoleTask), q;
        }
        return p.prototype = ze, p;
      }, set: function(o) {
        _(this, "then", o && o.prototype === ze ? ui : { get: function() {
          return o;
        }, set: ui.set });
      } };
      function ls(o, l, p, w, k) {
        this.onFulfilled = typeof o == "function" ? o : null, this.onRejected = typeof l == "function" ? l : null, this.resolve = p, this.reject = w, this.psd = k;
      }
      function $a(o, l) {
        var p, w;
        Kr.push(l), o._state === null && (p = o._lib && qa(), l = Gr(l), o._state = false, o._value = l, w = o, yr.some(function(k) {
          return k._value === w._value;
        }) || yr.push(w), hs(o), p && Ya());
      }
      function hs(o) {
        var l = o._listeners;
        o._listeners = [];
        for (var p = 0, w = l.length; p < w; ++p) li(o, l[p]);
        var k = o._PSD;
        --k.ref || k.finalize(), ya === 0 && (++ya, yt(function() {
          --ya == 0 && hi();
        }, []));
      }
      function li(o, l) {
        if (o._state !== null) {
          var p = o._state ? l.onFulfilled : l.onRejected;
          if (p === null) return (o._state ? l.resolve : l.reject)(o._value);
          ++l.psd.ref, ++ya, yt(w0, [p, o, l]);
        } else o._listeners.push(l);
      }
      function w0(o, l, p) {
        try {
          var w, k = l._value;
          !l._state && Kr.length && (Kr = []), w = kr && l._consoleTask ? l._consoleTask.run(function() {
            return o(k);
          }) : o(k), l._state || Kr.indexOf(k) !== -1 || (function(T) {
            for (var O = yr.length; O; ) if (yr[--O]._value === T._value) return yr.splice(O, 1);
          })(l), p.resolve(w);
        } catch (T) {
          p.reject(T);
        } finally {
          --ya == 0 && hi(), --p.psd.ref || p.psd.finalize();
        }
      }
      function y0() {
        ie(xt, function() {
          qa() && Ya();
        });
      }
      function qa() {
        var o = dt;
        return Ke = dt = false, o;
      }
      function Ya() {
        var o, l, p;
        do
          for (; 0 < wa.length; ) for (o = wa, wa = [], p = o.length, l = 0; l < p; ++l) {
            var w = o[l];
            w[0].apply(null, w[1]);
          }
        while (0 < wa.length);
        Ke = dt = true;
      }
      function hi() {
        var o = yr;
        yr = [], o.forEach(function(w) {
          w._PSD.onunhandled.call(null, w._value, w);
        });
        for (var l = pn.slice(0), p = l.length; p; ) l[--p]();
      }
      function Wn(o) {
        return new Xe(ze, false, o);
      }
      function Ur(o, l) {
        var p = Je;
        return function() {
          var w = qa(), k = Je;
          try {
            return ne(p, true), o.apply(this, arguments);
          } catch (T) {
            l && l(T);
          } finally {
            ne(k, false), w && Ya();
          }
        };
      }
      d(Xe.prototype, { then: ui, _then: function(o, l) {
        li(this, new ls(null, null, o, l, Je));
      }, catch: function(o) {
        if (arguments.length === 1) return this.then(null, o);
        var l = o, p = arguments[1];
        return typeof l == "function" ? this.then(null, function(w) {
          return (w instanceof l ? p : Wn)(w);
        }) : this.then(null, function(w) {
          return (w && w.name === l ? p : Wn)(w);
        });
      }, finally: function(o) {
        return this.then(function(l) {
          return Xe.resolve(o()).then(function() {
            return l;
          });
        }, function(l) {
          return Xe.resolve(o()).then(function() {
            return Wn(l);
          });
        });
      }, timeout: function(o, l) {
        var p = this;
        return o < 1 / 0 ? new Xe(function(w, k) {
          var T = setTimeout(function() {
            return k(new W.Timeout(l));
          }, o);
          p.then(w, k).finally(clearTimeout.bind(null, T));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && _(Xe.prototype, Symbol.toStringTag, "Dexie.Promise"), xt.env = ce(), d(Xe, { all: function() {
        var o = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          o.length === 0 && l([]);
          var w = o.length;
          o.forEach(function(k, T) {
            return Xe.resolve(k).then(function(O) {
              o[T] = O, --w || l(o);
            }, p);
          });
        });
      }, resolve: function(o) {
        return o instanceof Xe ? o : o && typeof o.then == "function" ? new Xe(function(l, p) {
          o.then(l, p);
        }) : new Xe(ze, true, o);
      }, reject: Wn, race: function() {
        var o = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          o.map(function(w) {
            return Xe.resolve(w).then(l, p);
          });
        });
      }, PSD: { get: function() {
        return Je;
      }, set: function(o) {
        return Je = o;
      } }, totalEchoes: { get: function() {
        return P;
      } }, newPSD: D, usePSD: ie, scheduler: { get: function() {
        return yt;
      }, set: function(o) {
        yt = o;
      } }, rejectionMapper: { get: function() {
        return Gr;
      }, set: function(o) {
        Gr = o;
      } }, follow: function(o, l) {
        return new Xe(function(p, w) {
          return D(function(k, T) {
            var O = Je;
            O.unhandleds = [], O.onunhandled = T, O.finalize = Ue(function() {
              var H, q = this;
              H = function() {
                q.unhandleds.length === 0 ? k() : T(q.unhandleds[0]);
              }, pn.push(function Y() {
                H(), pn.splice(pn.indexOf(Y), 1);
              }), ++ya, yt(function() {
                --ya == 0 && hi();
              }, []);
            }, O.finalize), o();
          }, l, p, w);
        });
      } }), $r && ($r.allSettled && _(Xe, "allSettled", function() {
        var o = he.apply(null, arguments).map(fe);
        return new Xe(function(l) {
          o.length === 0 && l([]);
          var p = o.length, w = new Array(p);
          o.forEach(function(k, T) {
            return Xe.resolve(k).then(function(O) {
              return w[T] = { status: "fulfilled", value: O };
            }, function(O) {
              return w[T] = { status: "rejected", reason: O };
            }).then(function() {
              return --p || l(w);
            });
          });
        });
      }), $r.any && typeof AggregateError < "u" && _(Xe, "any", function() {
        var o = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          o.length === 0 && p(new AggregateError([]));
          var w = o.length, k = new Array(w);
          o.forEach(function(T, O) {
            return Xe.resolve(T).then(function(H) {
              return l(H);
            }, function(H) {
              k[O] = H, --w || p(new AggregateError(k));
            });
          });
        });
      }), $r.withResolvers && (Xe.withResolvers = $r.withResolvers));
      var nt = { awaits: 0, echoes: 0, id: 0 }, k0 = 0, Hn = [], b = 0, P = 0, C = 0;
      function D(o, l, p, w) {
        var k = Je, T = Object.create(k);
        return T.parent = k, T.ref = 0, T.global = false, T.id = ++C, xt.env, T.env = Mr ? { Promise: Xe, PromiseProp: { value: Xe, configurable: true, writable: true }, all: Xe.all, race: Xe.race, allSettled: Xe.allSettled, any: Xe.any, resolve: Xe.resolve, reject: Xe.reject } : {}, l && c(T, l), ++k.ref, T.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, w = ie(T, o, p, w), T.ref === 0 && T.finalize(), w;
      }
      function N() {
        return nt.id || (nt.id = ++k0), ++nt.awaits, nt.echoes += Er, nt.id;
      }
      function M() {
        return !!nt.awaits && (--nt.awaits == 0 && (nt.id = 0), nt.echoes = nt.awaits * Er, true);
      }
      function fe(o) {
        return nt.echoes && o && o.constructor === $r ? (N(), o.then(function(l) {
          return M(), l;
        }, function(l) {
          return M(), De(l);
        })) : o;
      }
      function xe() {
        var o = Hn[Hn.length - 1];
        Hn.pop(), ne(o, false);
      }
      function ne(o, l) {
        var p, w = Je;
        (l ? !nt.echoes || b++ && o === Je : !b || --b && o === Je) || queueMicrotask(l ? (function(k) {
          ++P, nt.echoes && --nt.echoes != 0 || (nt.echoes = nt.awaits = nt.id = 0), Hn.push(Je), ne(k, true);
        }).bind(null, o) : xe), o !== Je && (Je = o, w === xt && (xt.env = ce()), Mr && (p = xt.env.Promise, l = o.env, (w.global || o.global) && (Object.defineProperty(i, "Promise", l.PromiseProp), p.all = l.all, p.race = l.race, p.resolve = l.resolve, p.reject = l.reject, l.allSettled && (p.allSettled = l.allSettled), l.any && (p.any = l.any))));
      }
      function ce() {
        var o = i.Promise;
        return Mr ? { Promise: o, PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"), all: o.all, race: o.race, allSettled: o.allSettled, any: o.any, resolve: o.resolve, reject: o.reject } : {};
      }
      function ie(o, l, p, w, k) {
        var T = Je;
        try {
          return ne(o, true), l(p, w, k);
        } finally {
          ne(T, false);
        }
      }
      function Ee(o, l, p, w) {
        return typeof o != "function" ? o : function() {
          var k = Je;
          p && N(), ne(l, true);
          try {
            return o.apply(this, arguments);
          } finally {
            ne(k, false), w && queueMicrotask(M);
          }
        };
      }
      function Ne(o) {
        Promise === $r && nt.echoes === 0 ? b === 0 ? o() : enqueueNativeMicroTask(o) : setTimeout(o, 0);
      }
      ("" + ta).indexOf("[native code]") === -1 && (N = M = ue);
      var De = Xe.reject, we = "\uFFFF", be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", or = "String expected.", Or = [], Wr = "__dbnames", it = "readonly", Ra = "readwrite";
      function Gt(o, l) {
        return o ? l ? function() {
          return o.apply(this, arguments) && l.apply(this, arguments);
        } : o : l;
      }
      var Za = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function ra(o) {
        return typeof o != "string" || /\./.test(o) ? function(l) {
          return l;
        } : function(l) {
          return l[o] === void 0 && o in l && delete (l = de(l))[o], l;
        };
      }
      function Vn() {
        throw W.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function cr(o, l) {
        try {
          var p = mo(o), w = mo(l);
          if (p !== w) return p === "Array" ? 1 : w === "Array" ? -1 : p === "binary" ? 1 : w === "binary" ? -1 : p === "string" ? 1 : w === "string" ? -1 : p === "Date" ? 1 : w !== "Date" ? NaN : -1;
          switch (p) {
            case "number":
            case "Date":
            case "string":
              return l < o ? 1 : o < l ? -1 : 0;
            case "binary":
              return (function(k, T) {
                for (var O = k.length, H = T.length, q = O < H ? O : H, Y = 0; Y < q; ++Y) if (k[Y] !== T[Y]) return k[Y] < T[Y] ? -1 : 1;
                return O === H ? 0 : O < H ? -1 : 1;
              })(go(o), go(l));
            case "Array":
              return (function(k, T) {
                for (var O = k.length, H = T.length, q = O < H ? O : H, Y = 0; Y < q; ++Y) {
                  var ee = cr(k[Y], T[Y]);
                  if (ee !== 0) return ee;
                }
                return O === H ? 0 : O < H ? -1 : 1;
              })(o, l);
          }
        } catch {
        }
        return NaN;
      }
      function mo(o) {
        var l = typeof o;
        return l != "object" ? l : ArrayBuffer.isView(o) ? "binary" : (o = ge(o), o === "ArrayBuffer" ? "binary" : o);
      }
      function go(o) {
        return o instanceof Uint8Array ? o : ArrayBuffer.isView(o) ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength) : new Uint8Array(o);
      }
      function ds(o, l, p) {
        var w = o.schema.yProps;
        return w ? (l && 0 < p.numFailures && (l = l.filter(function(k, T) {
          return !p.failures[T];
        })), Promise.all(w.map(function(k) {
          return k = k.updatesTable, l ? o.db.table(k).where("k").anyOf(l).delete() : o.db.table(k).clear();
        })).then(function() {
          return p;
        })) : p;
      }
      var di = (_o.prototype.execute = function(o) {
        var l = this["@@propmod"];
        if (l.add !== void 0) {
          var p = l.add;
          if (f(p)) return n(n([], f(o) ? o : [], true), p).sort();
          if (typeof p == "number") return (Number(o) || 0) + p;
          if (typeof p == "bigint") try {
            return BigInt(o) + p;
          } catch {
            return BigInt(0) + p;
          }
          throw new TypeError("Invalid term ".concat(p));
        }
        if (l.remove !== void 0) {
          var w = l.remove;
          if (f(w)) return f(o) ? o.filter(function(k) {
            return !w.includes(k);
          }).sort() : [];
          if (typeof w == "number") return Number(o) - w;
          if (typeof w == "bigint") try {
            return BigInt(o) - w;
          } catch {
            return BigInt(0) - w;
          }
          throw new TypeError("Invalid subtrahend ".concat(w));
        }
        return p = (p = l.replacePrefix) === null || p === void 0 ? void 0 : p[0], p && typeof o == "string" && o.startsWith(p) ? l.replacePrefix[1] + o.substring(p.length) : o;
      }, _o);
      function _o(o) {
        this["@@propmod"] = o;
      }
      function wo(o, l) {
        for (var p = s(l), w = p.length, k = false, T = 0; T < w; ++T) {
          var O = p[T], H = l[O], q = U(o, O);
          H instanceof di ? (F(o, O, H.execute(q)), k = true) : q !== H && (F(o, O, H), k = true);
        }
        return k;
      }
      var yo = (Vr.prototype._trans = function(o, l, p) {
        var w = this._tx || Je.trans, k = this.name, T = kr && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(o === "readonly" ? "read" : "write", " ").concat(this.name));
        function O(Y, ee, j) {
          if (!j.schema[k]) throw new W.NotFound("Table " + k + " not part of transaction");
          return l(j.idbtrans, j);
        }
        var H = qa();
        try {
          var q = w && w.db._novip === this.db._novip ? w === Je.trans ? w._promise(o, O, p) : D(function() {
            return w._promise(o, O, p);
          }, { trans: w, transless: Je.transless || Je }) : (function Y(ee, j, ae, Z) {
            if (ee.idbdb && (ee._state.openComplete || Je.letThrough || ee._vip)) {
              var J = ee._createTransaction(j, ae, ee._dbSchema);
              try {
                J.create(), ee._state.PR1398_maxLoop = 3;
              } catch (Q) {
                return Q.name === Ze.InvalidState && ee.isOpen() && 0 < --ee._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), ee.close({ disableAutoOpen: false }), ee.open().then(function() {
                  return Y(ee, j, ae, Z);
                })) : De(Q);
              }
              return J._promise(j, function(Q, re) {
                return D(function() {
                  return Je.trans = J, Z(Q, re, J);
                });
              }).then(function(Q) {
                if (j === "readwrite") try {
                  J.idbtrans.commit();
                } catch {
                }
                return j === "readonly" ? Q : J._completion.then(function() {
                  return Q;
                });
              });
            }
            if (ee._state.openComplete) return De(new W.DatabaseClosed(ee._state.dbOpenError));
            if (!ee._state.isBeingOpened) {
              if (!ee._state.autoOpen) return De(new W.DatabaseClosed());
              ee.open().catch(ue);
            }
            return ee._state.dbReadyPromise.then(function() {
              return Y(ee, j, ae, Z);
            });
          })(this.db, o, [this.name], O);
          return T && (q._consoleTask = T, q = q.catch(function(Y) {
            return console.trace(Y), De(Y);
          })), q;
        } finally {
          H && Ya();
        }
      }, Vr.prototype.get = function(o, l) {
        var p = this;
        return o && o.constructor === Object ? this.where(o).first(l) : o == null ? De(new W.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(w) {
          return p.core.get({ trans: w, key: o }).then(function(k) {
            return p.hook.reading.fire(k);
          });
        }).then(l);
      }, Vr.prototype.where = function(o) {
        if (typeof o == "string") return new this.db.WhereClause(this, o);
        if (f(o)) return new this.db.WhereClause(this, "[".concat(o.join("+"), "]"));
        var l = s(o);
        if (l.length === 1) return this.where(l[0]).equals(o[l[0]]);
        var p = this.schema.indexes.concat(this.schema.primKey).filter(function(H) {
          if (H.compound && l.every(function(Y) {
            return 0 <= H.keyPath.indexOf(Y);
          })) {
            for (var q = 0; q < l.length; ++q) if (l.indexOf(H.keyPath[q]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(H, q) {
          return H.keyPath.length - q.keyPath.length;
        })[0];
        if (p && this.db._maxKey !== we) {
          var T = p.keyPath.slice(0, l.length);
          return this.where(T).equals(T.map(function(q) {
            return o[q];
          }));
        }
        !p && kr && console.warn("The query ".concat(JSON.stringify(o), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(l.join("+"), "]"));
        var w = this.schema.idxByName;
        function k(H, q) {
          return cr(H, q) === 0;
        }
        var O = l.reduce(function(j, q) {
          var Y = j[0], ee = j[1], j = w[q], ae = o[q];
          return [Y || j, Y || !j ? Gt(ee, j && j.multi ? function(Z) {
            return Z = U(Z, q), f(Z) && Z.some(function(J) {
              return k(ae, J);
            });
          } : function(Z) {
            return k(ae, U(Z, q));
          }) : ee];
        }, [null, null]), T = O[0], O = O[1];
        return T ? this.where(T.name).equals(o[T.keyPath]).filter(O) : p ? this.filter(O) : this.where(l).equals("");
      }, Vr.prototype.filter = function(o) {
        return this.toCollection().and(o);
      }, Vr.prototype.count = function(o) {
        return this.toCollection().count(o);
      }, Vr.prototype.offset = function(o) {
        return this.toCollection().offset(o);
      }, Vr.prototype.limit = function(o) {
        return this.toCollection().limit(o);
      }, Vr.prototype.each = function(o) {
        return this.toCollection().each(o);
      }, Vr.prototype.toArray = function(o) {
        return this.toCollection().toArray(o);
      }, Vr.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Vr.prototype.orderBy = function(o) {
        return new this.db.Collection(new this.db.WhereClause(this, f(o) ? "[".concat(o.join("+"), "]") : o));
      }, Vr.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Vr.prototype.mapToClass = function(o) {
        var l, p = this.db, w = this.name;
        function k() {
          return l !== null && l.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = o).prototype instanceof Vn && ((function(q, Y) {
          if (typeof Y != "function" && Y !== null) throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
          function ee() {
            this.constructor = q;
          }
          t(q, Y), q.prototype = Y === null ? Object.create(Y) : (ee.prototype = Y.prototype, new ee());
        })(k, l = o), Object.defineProperty(k.prototype, "db", { get: function() {
          return p;
        }, enumerable: false, configurable: true }), k.prototype.table = function() {
          return w;
        }, o = k);
        for (var T = /* @__PURE__ */ new Set(), O = o.prototype; O; O = u(O)) Object.getOwnPropertyNames(O).forEach(function(q) {
          return T.add(q);
        });
        function H(q) {
          if (!q) return q;
          var Y, ee = Object.create(o.prototype);
          for (Y in q) if (!T.has(Y)) try {
            ee[Y] = q[Y];
          } catch {
          }
          return ee;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = H, this.hook("reading", H), o;
      }, Vr.prototype.defineClass = function() {
        return this.mapToClass(function(o) {
          c(this, o);
        });
      }, Vr.prototype.add = function(o, l) {
        var p = this, w = this.schema.primKey, k = w.auto, T = w.keyPath, O = o;
        return T && k && (O = ra(T)(o)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "add", keys: l != null ? [l] : null, values: [O] });
        }).then(function(H) {
          return H.numFailures ? Xe.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (T) try {
            F(o, T, H);
          } catch {
          }
          return H;
        });
      }, Vr.prototype.upsert = function(o, l) {
        var p = this, w = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(k) {
          return p.core.get({ trans: k, key: o }).then(function(T) {
            var O = T ?? {};
            return wo(O, l), w && F(O, w, o), p.core.mutate({ trans: k, type: "put", values: [O], keys: [o], upsert: true, updates: { keys: [o], changeSpecs: [l] } }).then(function(H) {
              return H.numFailures ? Xe.reject(H.failures[0]) : !!T;
            });
          });
        });
      }, Vr.prototype.update = function(o, l) {
        return typeof o != "object" || f(o) ? this.where(":id").equals(o).modify(l) : (o = U(o, this.schema.primKey.keyPath), o === void 0 ? De(new W.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(o).modify(l));
      }, Vr.prototype.put = function(o, l) {
        var p = this, w = this.schema.primKey, k = w.auto, T = w.keyPath, O = o;
        return T && k && (O = ra(T)(o)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "put", values: [O], keys: l != null ? [l] : null });
        }).then(function(H) {
          return H.numFailures ? Xe.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (T) try {
            F(o, T, H);
          } catch {
          }
          return H;
        });
      }, Vr.prototype.delete = function(o) {
        var l = this;
        return this._trans("readwrite", function(p) {
          return l.core.mutate({ trans: p, type: "delete", keys: [o] }).then(function(w) {
            return ds(l, [o], w);
          }).then(function(w) {
            return w.numFailures ? Xe.reject(w.failures[0]) : void 0;
          });
        });
      }, Vr.prototype.clear = function() {
        var o = this;
        return this._trans("readwrite", function(l) {
          return o.core.mutate({ trans: l, type: "deleteRange", range: Za }).then(function(p) {
            return ds(o, null, p);
          });
        }).then(function(l) {
          return l.numFailures ? Xe.reject(l.failures[0]) : void 0;
        });
      }, Vr.prototype.bulkGet = function(o) {
        var l = this;
        return this._trans("readonly", function(p) {
          return l.core.getMany({ keys: o, trans: p }).then(function(w) {
            return w.map(function(k) {
              return l.hook.reading.fire(k);
            });
          });
        });
      }, Vr.prototype.bulkAdd = function(o, l, p) {
        var w = this, k = Array.isArray(l) ? l : void 0, T = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(O) {
          var Y = w.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== o.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = o.length, Y = Y && H ? o.map(ra(Y)) : o;
          return w.core.mutate({ trans: O, type: "add", keys: k, values: Y, wantResults: T }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return T ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkAdd(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Vr.prototype.bulkPut = function(o, l, p) {
        var w = this, k = Array.isArray(l) ? l : void 0, T = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(O) {
          var Y = w.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== o.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = o.length, Y = Y && H ? o.map(ra(Y)) : o;
          return w.core.mutate({ trans: O, type: "put", keys: k, values: Y, wantResults: T }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return T ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkPut(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Vr.prototype.bulkUpdate = function(o) {
        var l = this, p = this.core, w = o.map(function(O) {
          return O.key;
        }), k = o.map(function(O) {
          return O.changes;
        }), T = [];
        return this._trans("readwrite", function(O) {
          return p.getMany({ trans: O, keys: w, cache: "clone" }).then(function(H) {
            var q = [], Y = [];
            o.forEach(function(j, ae) {
              var Z = j.key, J = j.changes, Q = H[ae];
              if (Q) {
                for (var re = 0, se = Object.keys(J); re < se.length; re++) {
                  var le = se[re], pe = J[le];
                  if (le === l.schema.primKey.keyPath) {
                    if (cr(pe, Z) !== 0) throw new W.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(Q, le, pe);
                }
                T.push(ae), q.push(Z), Y.push(Q);
              }
            });
            var ee = q.length;
            return p.mutate({ trans: O, type: "put", keys: q, values: Y, updates: { keys: w, changeSpecs: k } }).then(function(j) {
              var ae = j.numFailures, Z = j.failures;
              if (ae === 0) return ee;
              for (var J = 0, Q = Object.keys(Z); J < Q.length; J++) {
                var re, se = Q[J], le = T[Number(se)];
                le != null && (re = Z[se], delete Z[se], Z[le] = re);
              }
              throw new Ge("".concat(l.name, ".bulkUpdate(): ").concat(ae, " of ").concat(ee, " operations failed"), Z);
            });
          });
        });
      }, Vr.prototype.bulkDelete = function(o) {
        var l = this, p = o.length;
        return this._trans("readwrite", function(w) {
          return l.core.mutate({ trans: w, type: "delete", keys: o }).then(function(k) {
            return ds(l, o, k);
          });
        }).then(function(O) {
          var k = O.numFailures, T = O.lastResult, O = O.failures;
          if (k === 0) return T;
          throw new Ge("".concat(l.name, ".bulkDelete(): ").concat(k, " of ").concat(p, " operations failed"), O);
        });
      }, Vr);
      function Vr() {
      }
      function xi(o) {
        function l(O, H) {
          if (H) {
            for (var q = arguments.length, Y = new Array(q - 1); --q; ) Y[q - 1] = arguments[q];
            return p[O].subscribe.apply(null, Y), o;
          }
          if (typeof O == "string") return p[O];
        }
        var p = {};
        l.addEventType = T;
        for (var w = 1, k = arguments.length; w < k; ++w) T(arguments[w]);
        return l;
        function T(O, H, q) {
          if (typeof O != "object") {
            var Y;
            H = H || fr;
            var ee = { subscribers: [], fire: q = q || ue, subscribe: function(j) {
              ee.subscribers.indexOf(j) === -1 && (ee.subscribers.push(j), ee.fire = H(ee.fire, j));
            }, unsubscribe: function(j) {
              ee.subscribers = ee.subscribers.filter(function(ae) {
                return ae !== j;
              }), ee.fire = ee.subscribers.reduce(H, q);
            } };
            return p[O] = l[O] = ee;
          }
          s(Y = O).forEach(function(j) {
            var ae = Y[j];
            if (f(ae)) T(j, Y[j][0], Y[j][1]);
            else {
              if (ae !== "asap") throw new W.InvalidArgument("Invalid event config");
              var Z = T(j, I, function() {
                for (var J = arguments.length, Q = new Array(J); J--; ) Q[J] = arguments[J];
                Z.subscribers.forEach(function(re) {
                  X(function() {
                    re.apply(null, Q);
                  });
                });
              });
            }
          });
        }
      }
      function pi(o, l) {
        return y(l).from({ prototype: o }), l;
      }
      function Xn(o, l) {
        return !(o.filter || o.algorithm || o.or) && (l ? o.justLimit : !o.replayFilter);
      }
      function E0(o, l) {
        o.filter = Gt(o.filter, l);
      }
      function T0(o, l, p) {
        var w = o.replayFilter;
        o.replayFilter = w ? function() {
          return Gt(w(), l());
        } : l, o.justLimit = p && !w;
      }
      function xs(o, l) {
        if (o.isPrimKey) return l.primaryKey;
        var p = l.getIndexByKeyPath(o.index);
        if (!p) throw new W.Schema("KeyPath " + o.index + " on object store " + l.name + " is not indexed");
        return p;
      }
      function ko(o, l, p) {
        var w = xs(o, l.schema);
        return l.openCursor({ trans: p, values: !o.keysOnly, reverse: o.dir === "prev", unique: !!o.unique, query: { index: w, range: o.range } });
      }
      function ps(o, l, p, w) {
        var k = o.replayFilter ? Gt(o.filter, o.replayFilter()) : o.filter;
        if (o.or) {
          var T = {}, O = function(H, q, Y) {
            var ee, j;
            k && !k(q, Y, function(ae) {
              return q.stop(ae);
            }, function(ae) {
              return q.fail(ae);
            }) || ((j = "" + (ee = q.primaryKey)) == "[object ArrayBuffer]" && (j = "" + new Uint8Array(ee)), v(T, j) || (T[j] = true, l(H, q, Y)));
          };
          return Promise.all([o.or._iterate(O, p), Eo(ko(o, w, p), o.algorithm, O, !o.keysOnly && o.valueMapper)]);
        }
        return Eo(ko(o, w, p), Gt(o.algorithm, k), l, !o.keysOnly && o.valueMapper);
      }
      function Eo(o, l, p, w) {
        var k = Ur(w ? function(T, O, H) {
          return p(w(T), O, H);
        } : p);
        return o.then(function(T) {
          if (T) return T.start(function() {
            var O = function() {
              return T.continue();
            };
            l && !l(T, function(H) {
              return O = H;
            }, function(H) {
              T.stop(H), O = ue;
            }, function(H) {
              T.fail(H), O = ue;
            }) || k(T.value, T, function(H) {
              return O = H;
            }), O();
          });
        });
      }
      var Nh = (Ir.prototype._read = function(o, l) {
        var p = this._ctx;
        return p.error ? p.table._trans(null, De.bind(null, p.error)) : p.table._trans("readonly", o).then(l);
      }, Ir.prototype._write = function(o) {
        var l = this._ctx;
        return l.error ? l.table._trans(null, De.bind(null, l.error)) : l.table._trans("readwrite", o, "locked");
      }, Ir.prototype._addAlgorithm = function(o) {
        var l = this._ctx;
        l.algorithm = Gt(l.algorithm, o);
      }, Ir.prototype._iterate = function(o, l) {
        return ps(this._ctx, o, l, this._ctx.table.core);
      }, Ir.prototype.clone = function(o) {
        var l = Object.create(this.constructor.prototype), p = Object.create(this._ctx);
        return o && c(p, o), l._ctx = p, l;
      }, Ir.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ir.prototype.each = function(o) {
        var l = this._ctx;
        return this._read(function(p) {
          return ps(l, o, p, l.table.core);
        });
      }, Ir.prototype.count = function(o) {
        var l = this;
        return this._read(function(p) {
          var w = l._ctx, k = w.table.core;
          if (Xn(w, true)) return k.count({ trans: p, query: { index: xs(w, k.schema), range: w.range } }).then(function(O) {
            return Math.min(O, w.limit);
          });
          var T = 0;
          return ps(w, function() {
            return ++T, false;
          }, p, k).then(function() {
            return T;
          });
        }).then(o);
      }, Ir.prototype.sortBy = function(o, l) {
        var p = o.split(".").reverse(), w = p[0], k = p.length - 1;
        function T(q, Y) {
          return Y ? T(q[p[Y]], Y - 1) : q[w];
        }
        var O = this._ctx.dir === "next" ? 1 : -1;
        function H(q, Y) {
          return cr(T(q, k), T(Y, k)) * O;
        }
        return this.toArray(function(q) {
          return q.sort(H);
        }).then(l);
      }, Ir.prototype.toArray = function(o) {
        var l = this;
        return this._read(function(p) {
          var w = l._ctx;
          if (w.dir === "next" && Xn(w, true) && 0 < w.limit) {
            var k = w.valueMapper, T = xs(w, w.table.core.schema);
            return w.table.core.query({ trans: p, limit: w.limit, values: true, query: { index: T, range: w.range } }).then(function(H) {
              return H = H.result, k ? H.map(k) : H;
            });
          }
          var O = [];
          return ps(w, function(H) {
            return O.push(H);
          }, p, w.table.core).then(function() {
            return O;
          });
        }, o);
      }, Ir.prototype.offset = function(o) {
        var l = this._ctx;
        return o <= 0 || (l.offset += o, Xn(l) ? T0(l, function() {
          var p = o;
          return function(w, k) {
            return p === 0 || (p === 1 ? --p : k(function() {
              w.advance(p), p = 0;
            }), false);
          };
        }) : T0(l, function() {
          var p = o;
          return function() {
            return --p < 0;
          };
        })), this;
      }, Ir.prototype.limit = function(o) {
        return this._ctx.limit = Math.min(this._ctx.limit, o), T0(this._ctx, function() {
          var l = o;
          return function(p, w, k) {
            return --l <= 0 && w(k), 0 <= l;
          };
        }, true), this;
      }, Ir.prototype.until = function(o, l) {
        return E0(this._ctx, function(p, w, k) {
          return !o(p.value) || (w(k), l);
        }), this;
      }, Ir.prototype.first = function(o) {
        return this.limit(1).toArray(function(l) {
          return l[0];
        }).then(o);
      }, Ir.prototype.last = function(o) {
        return this.reverse().first(o);
      }, Ir.prototype.filter = function(o) {
        var l;
        return E0(this._ctx, function(p) {
          return o(p.value);
        }), (l = this._ctx).isMatch = Gt(l.isMatch, o), this;
      }, Ir.prototype.and = function(o) {
        return this.filter(o);
      }, Ir.prototype.or = function(o) {
        return new this.db.WhereClause(this._ctx.table, o, this);
      }, Ir.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ir.prototype.desc = function() {
        return this.reverse();
      }, Ir.prototype.eachKey = function(o) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, w) {
          o(w.key, w);
        });
      }, Ir.prototype.eachUniqueKey = function(o) {
        return this._ctx.unique = "unique", this.eachKey(o);
      }, Ir.prototype.eachPrimaryKey = function(o) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, w) {
          o(w.primaryKey, w);
        });
      }, Ir.prototype.keys = function(o) {
        var l = this._ctx;
        l.keysOnly = !l.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.key);
        }).then(function() {
          return p;
        }).then(o);
      }, Ir.prototype.primaryKeys = function(o) {
        var l = this._ctx;
        if (l.dir === "next" && Xn(l, true) && 0 < l.limit) return this._read(function(w) {
          var k = xs(l, l.table.core.schema);
          return l.table.core.query({ trans: w, values: false, limit: l.limit, query: { index: k, range: l.range } });
        }).then(function(w) {
          return w.result;
        }).then(o);
        l.keysOnly = !l.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.primaryKey);
        }).then(function() {
          return p;
        }).then(o);
      }, Ir.prototype.uniqueKeys = function(o) {
        return this._ctx.unique = "unique", this.keys(o);
      }, Ir.prototype.firstKey = function(o) {
        return this.limit(1).keys(function(l) {
          return l[0];
        }).then(o);
      }, Ir.prototype.lastKey = function(o) {
        return this.reverse().firstKey(o);
      }, Ir.prototype.distinct = function() {
        var o = this._ctx, o = o.index && o.table.schema.idxByName[o.index];
        if (!o || !o.multi) return this;
        var l = {};
        return E0(this._ctx, function(k) {
          var w = k.primaryKey.toString(), k = v(l, w);
          return l[w] = true, !k;
        }), this;
      }, Ir.prototype.modify = function(o) {
        var l = this, p = this._ctx;
        return this._write(function(w) {
          var k = typeof o == "function" ? o : function(Q) {
            return wo(Q, o);
          }, T = p.table.core, Y = T.schema.primaryKey, O = Y.outbound, H = Y.extractKey, q = 200, Y = l.db._options.modifyChunkSize;
          Y && (q = typeof Y == "object" ? Y[T.name] || Y["*"] || 200 : Y);
          function ee(Q, le) {
            var se = le.failures, le = le.numFailures;
            ae += Q - le;
            for (var pe = 0, me = s(se); pe < me.length; pe++) {
              var Re = me[pe];
              j.push(se[Re]);
            }
          }
          var j = [], ae = 0, Z = [], J = o === To;
          return l.clone().primaryKeys().then(function(Q) {
            function re(le) {
              var pe = Math.min(q, Q.length - le), me = Q.slice(le, le + pe);
              return (J ? Promise.resolve([]) : T.getMany({ trans: w, keys: me, cache: "immutable" })).then(function(Re) {
                var We = [], Fe = [], Be = O ? [] : null, He = J ? me : [];
                if (!J) for (var Me = 0; Me < pe; ++Me) {
                  var qe = Re[Me], xr = { value: de(qe), primKey: Q[le + Me] };
                  k.call(xr, xr.value, xr) !== false && (xr.value == null ? He.push(Q[le + Me]) : O || cr(H(qe), H(xr.value)) === 0 ? (Fe.push(xr.value), O && Be.push(Q[le + Me])) : (He.push(Q[le + Me]), We.push(xr.value)));
                }
                return Promise.resolve(0 < We.length && T.mutate({ trans: w, type: "add", values: We }).then(function(gr) {
                  for (var Tr in gr.failures) He.splice(parseInt(Tr), 1);
                  ee(We.length, gr);
                })).then(function() {
                  return (0 < Fe.length || se && typeof o == "object") && T.mutate({ trans: w, type: "put", keys: Be, values: Fe, criteria: se, changeSpec: typeof o != "function" && o, isAdditionalChunk: 0 < le }).then(function(gr) {
                    return ee(Fe.length, gr);
                  });
                }).then(function() {
                  return (0 < He.length || se && J) && T.mutate({ trans: w, type: "delete", keys: He, criteria: se, isAdditionalChunk: 0 < le }).then(function(gr) {
                    return ds(p.table, He, gr);
                  }).then(function(gr) {
                    return ee(He.length, gr);
                  });
                }).then(function() {
                  return Q.length > le + pe && re(le + q);
                });
              });
            }
            var se = Xn(p) && p.limit === 1 / 0 && (typeof o != "function" || J) && { index: p.index, range: p.range };
            return re(0).then(function() {
              if (0 < j.length) throw new je("Error modifying one or more objects", j, ae, Z);
              return Q.length;
            });
          });
        });
      }, Ir.prototype.delete = function() {
        var o = this._ctx, l = o.range;
        return !Xn(o) || o.table.schema.yProps || !o.isPrimKey && l.type !== 3 ? this.modify(To) : this._write(function(p) {
          var w = o.table.core.schema.primaryKey, k = l;
          return o.table.core.count({ trans: p, query: { index: w, range: k } }).then(function(T) {
            return o.table.core.mutate({ trans: p, type: "deleteRange", range: k }).then(function(q) {
              var H = q.failures, q = q.numFailures;
              if (q) throw new je("Could not delete some values", Object.keys(H).map(function(Y) {
                return H[Y];
              }), T - q);
              return T - q;
            });
          });
        });
      }, Ir);
      function Ir() {
      }
      var To = function(o, l) {
        return l.value = null;
      };
      function Rh(o, l) {
        return o < l ? -1 : o === l ? 0 : 1;
      }
      function Ph(o, l) {
        return l < o ? -1 : o === l ? 0 : 1;
      }
      function zt(o, l, p) {
        return o = o instanceof bo ? new o.Collection(o) : o, o._ctx.error = new (p || TypeError)(l), o;
      }
      function Kn(o) {
        return new o.Collection(o, function() {
          return So("");
        }).limit(0);
      }
      function vs(o, l, p, w) {
        var k, T, O, H, q, Y, ee, j = p.length;
        if (!p.every(function(J) {
          return typeof J == "string";
        })) return zt(o, or);
        function ae(J) {
          k = J === "next" ? function(re) {
            return re.toUpperCase();
          } : function(re) {
            return re.toLowerCase();
          }, T = J === "next" ? function(re) {
            return re.toLowerCase();
          } : function(re) {
            return re.toUpperCase();
          }, O = J === "next" ? Rh : Ph;
          var Q = p.map(function(re) {
            return { lower: T(re), upper: k(re) };
          }).sort(function(re, se) {
            return O(re.lower, se.lower);
          });
          H = Q.map(function(re) {
            return re.upper;
          }), q = Q.map(function(re) {
            return re.lower;
          }), ee = (Y = J) === "next" ? "" : w;
        }
        ae("next"), o = new o.Collection(o, function() {
          return Ja(H[0], q[j - 1] + w);
        }), o._ondirectionchange = function(J) {
          ae(J);
        };
        var Z = 0;
        return o._addAlgorithm(function(J, Q, re) {
          var se = J.key;
          if (typeof se != "string") return false;
          var le = T(se);
          if (l(le, q, Z)) return true;
          for (var pe = null, me = Z; me < j; ++me) {
            var Re = (function(We, Fe, Be, He, Me, qe) {
              for (var xr = Math.min(We.length, He.length), gr = -1, Tr = 0; Tr < xr; ++Tr) {
                var $t = Fe[Tr];
                if ($t !== He[Tr]) return Me(We[Tr], Be[Tr]) < 0 ? We.substr(0, Tr) + Be[Tr] + Be.substr(Tr + 1) : Me(We[Tr], He[Tr]) < 0 ? We.substr(0, Tr) + He[Tr] + Be.substr(Tr + 1) : 0 <= gr ? We.substr(0, gr) + Fe[gr] + Be.substr(gr + 1) : null;
                Me(We[Tr], $t) < 0 && (gr = Tr);
              }
              return xr < He.length && qe === "next" ? We + Be.substr(We.length) : xr < We.length && qe === "prev" ? We.substr(0, Be.length) : gr < 0 ? null : We.substr(0, gr) + He[gr] + Be.substr(gr + 1);
            })(se, le, H[me], q[me], O, Y);
            Re === null && pe === null ? Z = me + 1 : (pe === null || 0 < O(pe, Re)) && (pe = Re);
          }
          return Q(pe !== null ? function() {
            J.continue(pe + ee);
          } : re), false;
        }), o;
      }
      function Ja(o, l, p, w) {
        return { type: 2, lower: o, upper: l, lowerOpen: p, upperOpen: w };
      }
      function So(o) {
        return { type: 1, lower: o, upper: o };
      }
      var bo = (Object.defineProperty(pt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), pt.prototype.between = function(o, l, p, w) {
        p = p !== false, w = w === true;
        try {
          return 0 < this._cmp(o, l) || this._cmp(o, l) === 0 && (p || w) && (!p || !w) ? Kn(this) : new this.Collection(this, function() {
            return Ja(o, l, !p, !w);
          });
        } catch {
          return zt(this, be);
        }
      }, pt.prototype.equals = function(o) {
        return o == null ? zt(this, be) : new this.Collection(this, function() {
          return So(o);
        });
      }, pt.prototype.above = function(o) {
        return o == null ? zt(this, be) : new this.Collection(this, function() {
          return Ja(o, void 0, true);
        });
      }, pt.prototype.aboveOrEqual = function(o) {
        return o == null ? zt(this, be) : new this.Collection(this, function() {
          return Ja(o, void 0, false);
        });
      }, pt.prototype.below = function(o) {
        return o == null ? zt(this, be) : new this.Collection(this, function() {
          return Ja(void 0, o, false, true);
        });
      }, pt.prototype.belowOrEqual = function(o) {
        return o == null ? zt(this, be) : new this.Collection(this, function() {
          return Ja(void 0, o);
        });
      }, pt.prototype.startsWith = function(o) {
        return typeof o != "string" ? zt(this, or) : this.between(o, o + we, true, true);
      }, pt.prototype.startsWithIgnoreCase = function(o) {
        return o === "" ? this.startsWith(o) : vs(this, function(l, p) {
          return l.indexOf(p[0]) === 0;
        }, [o], we);
      }, pt.prototype.equalsIgnoreCase = function(o) {
        return vs(this, function(l, p) {
          return l === p[0];
        }, [o], "");
      }, pt.prototype.anyOfIgnoreCase = function() {
        var o = he.apply(Qe, arguments);
        return o.length === 0 ? Kn(this) : vs(this, function(l, p) {
          return p.indexOf(l) !== -1;
        }, o, "");
      }, pt.prototype.startsWithAnyOfIgnoreCase = function() {
        var o = he.apply(Qe, arguments);
        return o.length === 0 ? Kn(this) : vs(this, function(l, p) {
          return p.some(function(w) {
            return l.indexOf(w) === 0;
          });
        }, o, we);
      }, pt.prototype.anyOf = function() {
        var o = this, l = he.apply(Qe, arguments), p = this._cmp;
        try {
          l.sort(p);
        } catch {
          return zt(this, be);
        }
        if (l.length === 0) return Kn(this);
        var w = new this.Collection(this, function() {
          return Ja(l[0], l[l.length - 1]);
        });
        w._ondirectionchange = function(T) {
          p = T === "next" ? o._ascending : o._descending, l.sort(p);
        };
        var k = 0;
        return w._addAlgorithm(function(T, O, H) {
          for (var q = T.key; 0 < p(q, l[k]); ) if (++k === l.length) return O(H), false;
          return p(q, l[k]) === 0 || (O(function() {
            T.continue(l[k]);
          }), false);
        }), w;
      }, pt.prototype.notEqual = function(o) {
        return this.inAnyRange([[-1 / 0, o], [o, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, pt.prototype.noneOf = function() {
        var o = he.apply(Qe, arguments);
        if (o.length === 0) return new this.Collection(this);
        try {
          o.sort(this._ascending);
        } catch {
          return zt(this, be);
        }
        var l = o.reduce(function(p, w) {
          return p ? p.concat([[p[p.length - 1][1], w]]) : [[-1 / 0, w]];
        }, null);
        return l.push([o[o.length - 1], this.db._maxKey]), this.inAnyRange(l, { includeLowers: false, includeUppers: false });
      }, pt.prototype.inAnyRange = function(se, l) {
        var p = this, w = this._cmp, k = this._ascending, T = this._descending, O = this._min, H = this._max;
        if (se.length === 0) return Kn(this);
        if (!se.every(function(le) {
          return le[0] !== void 0 && le[1] !== void 0 && k(le[0], le[1]) <= 0;
        })) return zt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", W.InvalidArgument);
        var q = !l || l.includeLowers !== false, Y = l && l.includeUppers === true, ee, j = k;
        function ae(le, pe) {
          return j(le[0], pe[0]);
        }
        try {
          (ee = se.reduce(function(le, pe) {
            for (var me = 0, Re = le.length; me < Re; ++me) {
              var We = le[me];
              if (w(pe[0], We[1]) < 0 && 0 < w(pe[1], We[0])) {
                We[0] = O(We[0], pe[0]), We[1] = H(We[1], pe[1]);
                break;
              }
            }
            return me === Re && le.push(pe), le;
          }, [])).sort(ae);
        } catch {
          return zt(this, be);
        }
        var Z = 0, J = Y ? function(le) {
          return 0 < k(le, ee[Z][1]);
        } : function(le) {
          return 0 <= k(le, ee[Z][1]);
        }, Q = q ? function(le) {
          return 0 < T(le, ee[Z][0]);
        } : function(le) {
          return 0 <= T(le, ee[Z][0]);
        }, re = J, se = new this.Collection(this, function() {
          return Ja(ee[0][0], ee[ee.length - 1][1], !q, !Y);
        });
        return se._ondirectionchange = function(le) {
          j = le === "next" ? (re = J, k) : (re = Q, T), ee.sort(ae);
        }, se._addAlgorithm(function(le, pe, me) {
          for (var Re, We = le.key; re(We); ) if (++Z === ee.length) return pe(me), false;
          return !J(Re = We) && !Q(Re) || (p._cmp(We, ee[Z][1]) === 0 || p._cmp(We, ee[Z][0]) === 0 || pe(function() {
            j === k ? le.continue(ee[Z][0]) : le.continue(ee[Z][1]);
          }), false);
        }), se;
      }, pt.prototype.startsWithAnyOf = function() {
        var o = he.apply(Qe, arguments);
        return o.every(function(l) {
          return typeof l == "string";
        }) ? o.length === 0 ? Kn(this) : this.inAnyRange(o.map(function(l) {
          return [l, l + we];
        })) : zt(this, "startsWithAnyOf() only works with strings");
      }, pt);
      function pt() {
      }
      function ka(o) {
        return Ur(function(l) {
          return vi(l), o(l.target.error), false;
        });
      }
      function vi(o) {
        o.stopPropagation && o.stopPropagation(), o.preventDefault && o.preventDefault();
      }
      var mi = "storagemutated", S0 = "x-storagemutated-1", Qa = xi(null, mi), Bh = (Ea.prototype._lock = function() {
        return A(!Je.global), ++this._reculock, this._reculock !== 1 || Je.global || (Je.lockOwnerFor = this), this;
      }, Ea.prototype._unlock = function() {
        if (A(!Je.global), --this._reculock == 0) for (Je.global || (Je.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var o = this._blockedFuncs.shift();
          try {
            ie(o[1], o[0]);
          } catch {
          }
        }
        return this;
      }, Ea.prototype._locked = function() {
        return this._reculock && Je.lockOwnerFor !== this;
      }, Ea.prototype.create = function(o) {
        var l = this;
        if (!this.mode) return this;
        var p = this.db.idbdb, w = this.db._state.dbOpenError;
        if (A(!this.idbtrans), !o && !p) switch (w && w.name) {
          case "DatabaseClosedError":
            throw new W.DatabaseClosed(w);
          case "MissingAPIError":
            throw new W.MissingAPI(w.message, w);
          default:
            throw new W.OpenFailed(w);
        }
        if (!this.active) throw new W.TransactionInactive();
        return A(this._completion._state === null), (o = this.idbtrans = o || (this.db.core || p).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ur(function(k) {
          vi(k), l._reject(o.error);
        }), o.onabort = Ur(function(k) {
          vi(k), l.active && l._reject(new W.Abort(o.error)), l.active = false, l.on("abort").fire(k);
        }), o.oncomplete = Ur(function() {
          l.active = false, l._resolve(), "mutatedParts" in o && Qa.storagemutated.fire(o.mutatedParts);
        }), this;
      }, Ea.prototype._promise = function(o, l, p) {
        var w = this;
        if (o === "readwrite" && this.mode !== "readwrite") return De(new W.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new W.TransactionInactive());
        if (this._locked()) return new Xe(function(T, O) {
          w._blockedFuncs.push([function() {
            w._promise(o, l, p).then(T, O);
          }, Je]);
        });
        if (p) return D(function() {
          var T = new Xe(function(O, H) {
            w._lock();
            var q = l(O, H, w);
            q && q.then && q.then(O, H);
          });
          return T.finally(function() {
            return w._unlock();
          }), T._lib = true, T;
        });
        var k = new Xe(function(T, O) {
          var H = l(T, O, w);
          H && H.then && H.then(T, O);
        });
        return k._lib = true, k;
      }, Ea.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ea.prototype.waitFor = function(o) {
        var l, p = this._root(), w = Xe.resolve(o);
        p._waitingFor ? p._waitingFor = p._waitingFor.then(function() {
          return w;
        }) : (p._waitingFor = w, p._waitingQueue = [], l = p.idbtrans.objectStore(p.storeNames[0]), (function T() {
          for (++p._spinCount; p._waitingQueue.length; ) p._waitingQueue.shift()();
          p._waitingFor && (l.get(-1 / 0).onsuccess = T);
        })());
        var k = p._waitingFor;
        return new Xe(function(T, O) {
          w.then(function(H) {
            return p._waitingQueue.push(Ur(T.bind(null, H)));
          }, function(H) {
            return p._waitingQueue.push(Ur(O.bind(null, H)));
          }).finally(function() {
            p._waitingFor === k && (p._waitingFor = null);
          });
        });
      }, Ea.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new W.Abort()));
      }, Ea.prototype.table = function(o) {
        var l = this._memoizedTables || (this._memoizedTables = {});
        if (v(l, o)) return l[o];
        var p = this.schema[o];
        if (!p) throw new W.NotFound("Table " + o + " not part of transaction");
        return p = new this.db.Table(o, p, this), p.core = this.db.core.table(o), l[o] = p;
      }, Ea);
      function Ea() {
      }
      function b0(o, l, p, w, k, T, O, H) {
        return { name: o, keyPath: l, unique: p, multi: w, auto: k, compound: T, src: (p && !O ? "&" : "") + (w ? "*" : "") + (k ? "++" : "") + Fo(l), type: H };
      }
      function Fo(o) {
        return typeof o == "string" ? o : o ? "[" + [].join.call(o, "+") + "]" : "";
      }
      function F0(o, l, p) {
        return { name: o, primKey: l, indexes: p, mappedClass: null, idxByName: (w = function(k) {
          return [k.name, k];
        }, p.reduce(function(k, T, O) {
          return O = w(T, O), O && (k[O[0]] = O[1]), k;
        }, {})) };
        var w;
      }
      var gi = function(o) {
        try {
          return o.only([[]]), gi = function() {
            return [[]];
          }, [[]];
        } catch {
          return gi = function() {
            return we;
          }, we;
        }
      };
      function A0(o) {
        return o == null ? function() {
        } : typeof o == "string" ? (l = o).split(".").length === 1 ? function(p) {
          return p[l];
        } : function(p) {
          return U(p, l);
        } : function(p) {
          return U(p, o);
        };
        var l;
      }
      function Ao(o) {
        return [].slice.call(o);
      }
      var Lh = 0;
      function _i(o) {
        return o == null ? ":id" : typeof o == "string" ? o : "[".concat(o.join("+"), "]");
      }
      function Mh(o, l, q) {
        function w(re) {
          if (re.type === 3) return null;
          if (re.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var Z = re.lower, J = re.upper, Q = re.lowerOpen, re = re.upperOpen;
          return Z === void 0 ? J === void 0 ? null : l.upperBound(J, !!re) : J === void 0 ? l.lowerBound(Z, !!Q) : l.bound(Z, J, !!Q, !!re);
        }
        function k(ae) {
          var Z, J = ae.name;
          return { name: J, schema: ae, mutate: function(Q) {
            var re = Q.trans, se = Q.type, le = Q.keys, pe = Q.values, me = Q.range;
            return new Promise(function(Re, We) {
              Re = Ur(Re);
              var Fe = re.objectStore(J), Be = Fe.keyPath == null, He = se === "put" || se === "add";
              if (!He && se !== "delete" && se !== "deleteRange") throw new Error("Invalid operation type: " + se);
              var Me, qe = (le || pe || { length: 1 }).length;
              if (le && pe && le.length !== pe.length) throw new Error("Given keys array must have same length as given values array.");
              if (qe === 0) return Re({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function xr(Mt) {
                ++$t, vi(Mt);
              }
              var gr = [], Tr = [], $t = 0;
              if (se === "deleteRange") {
                if (me.type === 4) return Re({ numFailures: $t, failures: Tr, results: [], lastResult: void 0 });
                me.type === 3 ? gr.push(Me = Fe.clear()) : gr.push(Me = Fe.delete(w(me)));
              } else {
                var Be = He ? Be ? [pe, le] : [pe, null] : [le, null], ur = Be[0], St = Be[1];
                if (He) for (var bt = 0; bt < qe; ++bt) gr.push(Me = St && St[bt] !== void 0 ? Fe[se](ur[bt], St[bt]) : Fe[se](ur[bt])), Me.onerror = xr;
                else for (bt = 0; bt < qe; ++bt) gr.push(Me = Fe[se](ur[bt])), Me.onerror = xr;
              }
              function As(Mt) {
                Mt = Mt.target.result, gr.forEach(function(gn, G0) {
                  return gn.error != null && (Tr[G0] = gn.error);
                }), Re({ numFailures: $t, failures: Tr, results: se === "delete" ? le : gr.map(function(gn) {
                  return gn.result;
                }), lastResult: Mt });
              }
              Me.onerror = function(Mt) {
                xr(Mt), As(Mt);
              }, Me.onsuccess = As;
            });
          }, getMany: function(Q) {
            var re = Q.trans, se = Q.keys;
            return new Promise(function(le, pe) {
              le = Ur(le);
              for (var me, Re = re.objectStore(J), We = se.length, Fe = new Array(We), Be = 0, He = 0, Me = function(gr) {
                gr = gr.target, Fe[gr._pos] = gr.result, ++He === Be && le(Fe);
              }, qe = ka(pe), xr = 0; xr < We; ++xr) se[xr] != null && ((me = Re.get(se[xr]))._pos = xr, me.onsuccess = Me, me.onerror = qe, ++Be);
              Be === 0 && le(Fe);
            });
          }, get: function(Q) {
            var re = Q.trans, se = Q.key;
            return new Promise(function(le, pe) {
              le = Ur(le);
              var me = re.objectStore(J).get(se);
              me.onsuccess = function(Re) {
                return le(Re.target.result);
              }, me.onerror = ka(pe);
            });
          }, query: (Z = Y, function(Q) {
            return new Promise(function(re, se) {
              re = Ur(re);
              var le, pe, me, Be = Q.trans, Re = Q.values, We = Q.limit, Me = Q.query, Fe = We === 1 / 0 ? void 0 : We, He = Me.index, Me = Me.range, Be = Be.objectStore(J), He = He.isPrimaryKey ? Be : Be.index(He.name), Me = w(Me);
              if (We === 0) return re({ result: [] });
              Z ? ((Fe = Re ? He.getAll(Me, Fe) : He.getAllKeys(Me, Fe)).onsuccess = function(qe) {
                return re({ result: qe.target.result });
              }, Fe.onerror = ka(se)) : (le = 0, pe = !Re && "openKeyCursor" in He ? He.openKeyCursor(Me) : He.openCursor(Me), me = [], pe.onsuccess = function(qe) {
                var xr = pe.result;
                return xr ? (me.push(Re ? xr.value : xr.primaryKey), ++le === We ? re({ result: me }) : void xr.continue()) : re({ result: me });
              }, pe.onerror = ka(se));
            });
          }), openCursor: function(Q) {
            var re = Q.trans, se = Q.values, le = Q.query, pe = Q.reverse, me = Q.unique;
            return new Promise(function(Re, We) {
              Re = Ur(Re);
              var He = le.index, Fe = le.range, Be = re.objectStore(J), Be = He.isPrimaryKey ? Be : Be.index(He.name), He = pe ? me ? "prevunique" : "prev" : me ? "nextunique" : "next", Me = !se && "openKeyCursor" in Be ? Be.openKeyCursor(w(Fe), He) : Be.openCursor(w(Fe), He);
              Me.onerror = ka(We), Me.onsuccess = Ur(function(qe) {
                var xr, gr, Tr, $t, ur = Me.result;
                ur ? (ur.___id = ++Lh, ur.done = false, xr = ur.continue.bind(ur), gr = (gr = ur.continuePrimaryKey) && gr.bind(ur), Tr = ur.advance.bind(ur), $t = function() {
                  throw new Error("Cursor not stopped");
                }, ur.trans = re, ur.stop = ur.continue = ur.continuePrimaryKey = ur.advance = function() {
                  throw new Error("Cursor not started");
                }, ur.fail = Ur(We), ur.next = function() {
                  var St = this, bt = 1;
                  return this.start(function() {
                    return bt-- ? St.continue() : St.stop();
                  }).then(function() {
                    return St;
                  });
                }, ur.start = function(St) {
                  function bt() {
                    if (Me.result) try {
                      St();
                    } catch (Mt) {
                      ur.fail(Mt);
                    }
                    else ur.done = true, ur.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ur.stop();
                  }
                  var As = new Promise(function(Mt, gn) {
                    Mt = Ur(Mt), Me.onerror = ka(gn), ur.fail = gn, ur.stop = function(G0) {
                      ur.stop = ur.continue = ur.continuePrimaryKey = ur.advance = $t, Mt(G0);
                    };
                  });
                  return Me.onsuccess = Ur(function(Mt) {
                    Me.onsuccess = bt, bt();
                  }), ur.continue = xr, ur.continuePrimaryKey = gr, ur.advance = Tr, bt(), As;
                }, Re(ur)) : Re(null);
              }, We);
            });
          }, count: function(Q) {
            var re = Q.query, se = Q.trans, le = re.index, pe = re.range;
            return new Promise(function(me, Re) {
              var We = se.objectStore(J), Fe = le.isPrimaryKey ? We : We.index(le.name), We = w(pe), Fe = We ? Fe.count(We) : Fe.count();
              Fe.onsuccess = Ur(function(Be) {
                return me(Be.target.result);
              }), Fe.onerror = ka(Re);
            });
          } };
        }
        var T, O, H, ee = (O = q, H = Ao((T = o).objectStoreNames), { schema: { name: T.name, tables: H.map(function(ae) {
          return O.objectStore(ae);
        }).map(function(ae) {
          var Z = ae.keyPath, re = ae.autoIncrement, J = f(Z), Q = {}, re = { name: ae.name, primaryKey: { name: null, isPrimaryKey: true, outbound: Z == null, compound: J, keyPath: Z, autoIncrement: re, unique: true, extractKey: A0(Z) }, indexes: Ao(ae.indexNames).map(function(se) {
            return ae.index(se);
          }).map(function(me) {
            var le = me.name, pe = me.unique, Re = me.multiEntry, me = me.keyPath, Re = { name: le, compound: f(me), keyPath: me, unique: pe, multiEntry: Re, extractKey: A0(me) };
            return Q[_i(me)] = Re;
          }), getIndexByKeyPath: function(se) {
            return Q[_i(se)];
          } };
          return Q[":id"] = re.primaryKey, Z != null && (Q[_i(Z)] = re.primaryKey), re;
        }) }, hasGetAll: 0 < H.length && "getAll" in O.objectStore(H[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), q = ee.schema, Y = ee.hasGetAll, ee = q.tables.map(k), j = {};
        return ee.forEach(function(ae) {
          return j[ae.name] = ae;
        }), { stack: "dbcore", transaction: o.transaction.bind(o), table: function(ae) {
          if (!j[ae]) throw new Error("Table '".concat(ae, "' not found"));
          return j[ae];
        }, MIN_KEY: -1 / 0, MAX_KEY: gi(l), schema: q };
      }
      function Uh(o, l, p, w) {
        var k = p.IDBKeyRange;
        return p.indexedDB, { dbcore: (w = Mh(l, k, w), o.dbcore.reduce(function(T, O) {
          return O = O.create, a(a({}, T), O(T));
        }, w)) };
      }
      function ms(o, w) {
        var p = w.db, w = Uh(o._middlewares, p, o._deps, w);
        o.core = w.dbcore, o.tables.forEach(function(k) {
          var T = k.name;
          o.core.schema.tables.some(function(O) {
            return O.name === T;
          }) && (k.core = o.core.table(T), o[T] instanceof o.Table && (o[T].core = k.core));
        });
      }
      function gs(o, l, p, w) {
        p.forEach(function(k) {
          var T = w[k];
          l.forEach(function(O) {
            var H = (function q(Y, ee) {
              return m(Y, ee) || (Y = u(Y)) && q(Y, ee);
            })(O, k);
            (!H || "value" in H && H.value === void 0) && (O === o.Transaction.prototype || O instanceof o.Transaction ? _(O, k, { get: function() {
              return this.table(k);
            }, set: function(q) {
              x(this, k, { value: q, writable: true, configurable: true, enumerable: true });
            } }) : O[k] = new o.Table(k, T));
          });
        });
      }
      function C0(o, l) {
        l.forEach(function(p) {
          for (var w in p) p[w] instanceof o.Table && delete p[w];
        });
      }
      function Wh(o, l) {
        return o._cfg.version - l._cfg.version;
      }
      function Hh(o, l, p, w) {
        var k = o._dbSchema;
        p.objectStoreNames.contains("$meta") && !k.$meta && (k.$meta = F0("$meta", Do("")[0], []), o._storeNames.push("$meta"));
        var T = o._createTransaction("readwrite", o._storeNames, k);
        T.create(p), T._completion.catch(w);
        var O = T._reject.bind(T), H = Je.transless || Je;
        D(function() {
          return Je.trans = T, Je.transless = H, l !== 0 ? (ms(o, p), Y = l, ((q = T).storeNames.includes("$meta") ? q.table("$meta").get("version").then(function(ee) {
            return ee ?? Y;
          }) : Xe.resolve(Y)).then(function(ee) {
            return ae = ee, Z = T, J = p, Q = [], ee = (j = o)._versions, re = j._dbSchema = ws(0, j.idbdb, J), (ee = ee.filter(function(se) {
              return se._cfg.version >= ae;
            })).length !== 0 ? (ee.forEach(function(se) {
              Q.push(function() {
                var le = re, pe = se._cfg.dbschema;
                ys(j, le, J), ys(j, pe, J), re = j._dbSchema = pe;
                var me = D0(le, pe);
                me.add.forEach(function(He) {
                  I0(J, He[0], He[1].primKey, He[1].indexes);
                }), me.change.forEach(function(He) {
                  if (He.recreate) throw new W.Upgrade("Not yet support for changing primary key");
                  var Me = J.objectStore(He.name);
                  He.add.forEach(function(qe) {
                    return _s(Me, qe);
                  }), He.change.forEach(function(qe) {
                    Me.deleteIndex(qe.name), _s(Me, qe);
                  }), He.del.forEach(function(qe) {
                    return Me.deleteIndex(qe);
                  });
                });
                var Re = se._cfg.contentUpgrade;
                if (Re && se._cfg.version > ae) {
                  ms(j, J), Z._memoizedTables = {};
                  var We = B(pe);
                  me.del.forEach(function(He) {
                    We[He] = le[He];
                  }), C0(j, [j.Transaction.prototype]), gs(j, [j.Transaction.prototype], s(We), We), Z.schema = We;
                  var Fe, Be = sr(Re);
                  return Be && N(), me = Xe.follow(function() {
                    var He;
                    (Fe = Re(Z)) && Be && (He = M.bind(null, null), Fe.then(He, He));
                  }), Fe && typeof Fe.then == "function" ? Xe.resolve(Fe) : me.then(function() {
                    return Fe;
                  });
                }
              }), Q.push(function(le) {
                var pe, me, Re = se._cfg.dbschema;
                pe = Re, me = le, [].slice.call(me.db.objectStoreNames).forEach(function(We) {
                  return pe[We] == null && me.db.deleteObjectStore(We);
                }), C0(j, [j.Transaction.prototype]), gs(j, [j.Transaction.prototype], j._storeNames, j._dbSchema), Z.schema = j._dbSchema;
              }), Q.push(function(le) {
                j.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(j.idbdb.version / 10) === se._cfg.version ? (j.idbdb.deleteObjectStore("$meta"), delete j._dbSchema.$meta, j._storeNames = j._storeNames.filter(function(pe) {
                  return pe !== "$meta";
                })) : le.objectStore("$meta").put(se._cfg.version, "version"));
              });
            }), (function se() {
              return Q.length ? Xe.resolve(Q.shift()(Z.idbtrans)).then(se) : Xe.resolve();
            })().then(function() {
              Co(re, J);
            })) : Xe.resolve();
            var j, ae, Z, J, Q, re;
          }).catch(O)) : (s(k).forEach(function(ee) {
            I0(p, ee, k[ee].primKey, k[ee].indexes);
          }), ms(o, p), void Xe.follow(function() {
            return o.on.populate.fire(T);
          }).catch(O));
          var q, Y;
        });
      }
      function Vh(o, l) {
        Co(o._dbSchema, l), l.db.version % 10 != 0 || l.objectStoreNames.contains("$meta") || l.db.createObjectStore("$meta").add(Math.ceil(l.db.version / 10 - 1), "version");
        var p = ws(0, o.idbdb, l);
        ys(o, o._dbSchema, l);
        for (var w = 0, k = D0(p, o._dbSchema).change; w < k.length; w++) {
          var T = (function(O) {
            if (O.change.length || O.recreate) return console.warn("Unable to patch indexes of table ".concat(O.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var H = l.objectStore(O.name);
            O.add.forEach(function(q) {
              kr && console.debug("Dexie upgrade patch: Creating missing index ".concat(O.name, ".").concat(q.src)), _s(H, q);
            });
          })(k[w]);
          if (typeof T == "object") return T.value;
        }
      }
      function D0(o, l) {
        var p, w = { del: [], add: [], change: [] };
        for (p in o) l[p] || w.del.push(p);
        for (p in l) {
          var k = o[p], T = l[p];
          if (k) {
            var O = { name: p, def: T, recreate: false, del: [], add: [], change: [] };
            if ("" + (k.primKey.keyPath || "") != "" + (T.primKey.keyPath || "") || k.primKey.auto !== T.primKey.auto) O.recreate = true, w.change.push(O);
            else {
              var H = k.idxByName, q = T.idxByName, Y = void 0;
              for (Y in H) q[Y] || O.del.push(Y);
              for (Y in q) {
                var ee = H[Y], j = q[Y];
                ee ? ee.src !== j.src && O.change.push(j) : O.add.push(j);
              }
              (0 < O.del.length || 0 < O.add.length || 0 < O.change.length) && w.change.push(O);
            }
          } else w.add.push([p, T]);
        }
        return w;
      }
      function I0(o, l, p, w) {
        var k = o.db.createObjectStore(l, p.keyPath ? { keyPath: p.keyPath, autoIncrement: p.auto } : { autoIncrement: p.auto });
        return w.forEach(function(T) {
          return _s(k, T);
        }), k;
      }
      function Co(o, l) {
        s(o).forEach(function(p) {
          l.db.objectStoreNames.contains(p) || (kr && console.debug("Dexie: Creating missing table", p), I0(l, p, o[p].primKey, o[p].indexes));
        });
      }
      function _s(o, l) {
        o.createIndex(l.name, l.keyPath, { unique: l.unique, multiEntry: l.multi });
      }
      function ws(o, l, p) {
        var w = {};
        return S(l.objectStoreNames, 0).forEach(function(k) {
          for (var T = p.objectStore(k), O = b0(Fo(Y = T.keyPath), Y || "", true, false, !!T.autoIncrement, Y && typeof Y != "string", true), H = [], q = 0; q < T.indexNames.length; ++q) {
            var ee = T.index(T.indexNames[q]), Y = ee.keyPath, ee = b0(ee.name, Y, !!ee.unique, !!ee.multiEntry, false, Y && typeof Y != "string", false);
            H.push(ee);
          }
          w[k] = F0(k, O, H);
        }), w;
      }
      function ys(o, l, p) {
        for (var w = p.db.objectStoreNames, k = 0; k < w.length; ++k) {
          var T = w[k], O = p.objectStore(T);
          o._hasGetAll = "getAll" in O;
          for (var H = 0; H < O.indexNames.length; ++H) {
            var q = O.indexNames[H], Y = O.index(q).keyPath, ee = typeof Y == "string" ? Y : "[" + S(Y).join("+") + "]";
            !l[T] || (Y = l[T].idxByName[ee]) && (Y.name = q, delete l[T].idxByName[ee], l[T].idxByName[q] = Y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (o._hasGetAll = false);
      }
      function Do(o) {
        return o.split(",").map(function(l, p) {
          var T = l.split(":"), w = (k = T[1]) === null || k === void 0 ? void 0 : k.trim(), k = (l = T[0].trim()).replace(/([&*]|\+\+)/g, ""), T = /^\[/.test(k) ? k.match(/^\[(.*)\]$/)[1].split("+") : k;
          return b0(k, T || null, /\&/.test(l), /\*/.test(l), /\+\+/.test(l), f(T), p === 0, w);
        });
      }
      var Xh = (jn.prototype._createTableSchema = F0, jn.prototype._parseIndexSyntax = Do, jn.prototype._parseStoresSpec = function(o, l) {
        var p = this;
        s(o).forEach(function(w) {
          if (o[w] !== null) {
            var k = p._parseIndexSyntax(o[w]), T = k.shift();
            if (!T) throw new W.Schema("Invalid schema for table " + w + ": " + o[w]);
            if (T.unique = true, T.multi) throw new W.Schema("Primary key cannot be multiEntry*");
            k.forEach(function(O) {
              if (O.auto) throw new W.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!O.keyPath) throw new W.Schema("Index must have a name and cannot be an empty string");
            }), k = p._createTableSchema(w, T, k), l[w] = k;
          }
        });
      }, jn.prototype.stores = function(p) {
        var l = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? c(this._cfg.storesSource, p) : p;
        var p = l._versions, w = {}, k = {};
        return p.forEach(function(T) {
          c(w, T._cfg.storesSource), k = T._cfg.dbschema = {}, T._parseStoresSpec(w, k);
        }), l._dbSchema = k, C0(l, [l._allTables, l, l.Transaction.prototype]), gs(l, [l._allTables, l, l.Transaction.prototype, this._cfg.tables], s(k), k), l._storeNames = s(k), this;
      }, jn.prototype.upgrade = function(o) {
        return this._cfg.contentUpgrade = Cr(this._cfg.contentUpgrade || ue, o), this;
      }, jn);
      function jn() {
      }
      function O0(o, l) {
        var p = o._dbNamesDB;
        return p || (p = o._dbNamesDB = new Pa(Wr, { addons: [], indexedDB: o, IDBKeyRange: l })).version(1).stores({ dbnames: "name" }), p.table("dbnames");
      }
      function N0(o) {
        return o && typeof o.databases == "function";
      }
      function R0(o) {
        return D(function() {
          return Je.letThrough = true, o();
        });
      }
      function P0(o) {
        return !("from" in o);
      }
      var Tt = function(o, l) {
        if (!this) {
          var p = new Tt();
          return o && "d" in o && c(p, o), p;
        }
        c(this, arguments.length ? { d: 1, from: o, to: 1 < arguments.length ? l : o } : { d: 0 });
      };
      function wi(o, l, p) {
        var w = cr(l, p);
        if (!isNaN(w)) {
          if (0 < w) throw RangeError();
          if (P0(o)) return c(o, { from: l, to: p, d: 1 });
          var k = o.l, w = o.r;
          if (cr(p, o.from) < 0) return k ? wi(k, l, p) : o.l = { from: l, to: p, d: 1, l: null, r: null }, Oo(o);
          if (0 < cr(l, o.to)) return w ? wi(w, l, p) : o.r = { from: l, to: p, d: 1, l: null, r: null }, Oo(o);
          cr(l, o.from) < 0 && (o.from = l, o.l = null, o.d = w ? w.d + 1 : 1), 0 < cr(p, o.to) && (o.to = p, o.r = null, o.d = o.l ? o.l.d + 1 : 1), p = !o.r, k && !o.l && yi(o, k), w && p && yi(o, w);
        }
      }
      function yi(o, l) {
        P0(l) || (function p(w, q) {
          var T = q.from, O = q.to, H = q.l, q = q.r;
          wi(w, T, O), H && p(w, H), q && p(w, q);
        })(o, l);
      }
      function Io(o, l) {
        var p = ks(l), w = p.next();
        if (w.done) return false;
        for (var k = w.value, T = ks(o), O = T.next(k.from), H = O.value; !w.done && !O.done; ) {
          if (cr(H.from, k.to) <= 0 && 0 <= cr(H.to, k.from)) return true;
          cr(k.from, H.from) < 0 ? k = (w = p.next(H.from)).value : H = (O = T.next(k.from)).value;
        }
        return false;
      }
      function ks(o) {
        var l = P0(o) ? null : { s: 0, n: o };
        return { next: function(p) {
          for (var w = 0 < arguments.length; l; ) switch (l.s) {
            case 0:
              if (l.s = 1, w) for (; l.n.l && cr(p, l.n.from) < 0; ) l = { up: l, n: l.n.l, s: 1 };
              else for (; l.n.l; ) l = { up: l, n: l.n.l, s: 1 };
            case 1:
              if (l.s = 2, !w || cr(p, l.n.to) <= 0) return { value: l.n, done: false };
            case 2:
              if (l.n.r) {
                l.s = 3, l = { up: l, n: l.n.r, s: 0 };
                continue;
              }
            case 3:
              l = l.up;
          }
          return { done: true };
        } };
      }
      function Oo(o) {
        var l, p, w = (((l = o.r) === null || l === void 0 ? void 0 : l.d) || 0) - (((p = o.l) === null || p === void 0 ? void 0 : p.d) || 0), k = 1 < w ? "r" : w < -1 ? "l" : "";
        k && (l = k == "r" ? "l" : "r", p = a({}, o), w = o[k], o.from = w.from, o.to = w.to, o[k] = w[k], p[k] = w[l], (o[l] = p).d = No(p)), o.d = No(o);
      }
      function No(p) {
        var l = p.r, p = p.l;
        return (l ? p ? Math.max(l.d, p.d) : l.d : p ? p.d : 0) + 1;
      }
      function Es(o, l) {
        return s(l).forEach(function(p) {
          o[p] ? yi(o[p], l[p]) : o[p] = (function w(k) {
            var T, O, H = {};
            for (T in k) v(k, T) && (O = k[T], H[T] = !O || typeof O != "object" || G.has(O.constructor) ? O : w(O));
            return H;
          })(l[p]);
        }), o;
      }
      function B0(o, l) {
        return o.all || l.all || Object.keys(o).some(function(p) {
          return l[p] && Io(l[p], o[p]);
        });
      }
      d(Tt.prototype, ((ta = { add: function(o) {
        return yi(this, o), this;
      }, addKey: function(o) {
        return wi(this, o, o), this;
      }, addKeys: function(o) {
        var l = this;
        return o.forEach(function(p) {
          return wi(l, p, p);
        }), this;
      }, hasKey: function(o) {
        var l = ks(this).next(o).value;
        return l && cr(l.from, o) <= 0 && 0 <= cr(l.to, o);
      } })[$e] = function() {
        return ks(this);
      }, ta));
      var vn = {}, L0 = {}, M0 = false;
      function Ts(o) {
        Es(L0, o), M0 || (M0 = true, setTimeout(function() {
          M0 = false, U0(L0, !(L0 = {}));
        }, 0));
      }
      function U0(o, l) {
        l === void 0 && (l = false);
        var p = /* @__PURE__ */ new Set();
        if (o.all) for (var w = 0, k = Object.values(vn); w < k.length; w++) Ro(O = k[w], o, p, l);
        else for (var T in o) {
          var O, H = /^idb\:\/\/(.*)\/(.*)\//.exec(T);
          H && (T = H[1], H = H[2], (O = vn["idb://".concat(T, "/").concat(H)]) && Ro(O, o, p, l));
        }
        p.forEach(function(q) {
          return q();
        });
      }
      function Ro(o, l, p, w) {
        for (var k = [], T = 0, O = Object.entries(o.queries.query); T < O.length; T++) {
          for (var H = O[T], q = H[0], Y = [], ee = 0, j = H[1]; ee < j.length; ee++) {
            var ae = j[ee];
            B0(l, ae.obsSet) ? ae.subscribers.forEach(function(re) {
              return p.add(re);
            }) : w && Y.push(ae);
          }
          w && k.push([q, Y]);
        }
        if (w) for (var Z = 0, J = k; Z < J.length; Z++) {
          var Q = J[Z], q = Q[0], Y = Q[1];
          o.queries.query[q] = Y;
        }
      }
      function Kh(o) {
        var l = o._state, p = o._deps.indexedDB;
        if (l.isBeingOpened || o.idbdb) return l.dbReadyPromise.then(function() {
          return l.dbOpenError ? De(l.dbOpenError) : o;
        });
        l.isBeingOpened = true, l.dbOpenError = null, l.openComplete = false;
        var w = l.openCanceller, k = Math.round(10 * o.verno), T = false;
        function O() {
          if (l.openCanceller !== w) throw new W.DatabaseClosed("db.open() was cancelled");
        }
        function H() {
          return new Xe(function(ae, Z) {
            if (O(), !p) throw new W.MissingAPI();
            var J = o.name, Q = l.autoSchema || !k ? p.open(J) : p.open(J, k);
            if (!Q) throw new W.MissingAPI();
            Q.onerror = ka(Z), Q.onblocked = Ur(o._fireOnBlocked), Q.onupgradeneeded = Ur(function(re) {
              var se;
              ee = Q.transaction, l.autoSchema && !o._options.allowEmptyDB ? (Q.onerror = vi, ee.abort(), Q.result.close(), (se = p.deleteDatabase(J)).onsuccess = se.onerror = Ur(function() {
                Z(new W.NoSuchDatabase("Database ".concat(J, " doesnt exist")));
              })) : (ee.onerror = ka(Z), re = re.oldVersion > Math.pow(2, 62) ? 0 : re.oldVersion, j = re < 1, o.idbdb = Q.result, T && Vh(o, ee), Hh(o, re / 10, ee, Z));
            }, Z), Q.onsuccess = Ur(function() {
              ee = null;
              var re, se, le, pe, me, Re = o.idbdb = Q.result, We = S(Re.objectStoreNames);
              if (0 < We.length) try {
                var Fe = Re.transaction((pe = We).length === 1 ? pe[0] : pe, "readonly");
                if (l.autoSchema) se = Re, le = Fe, (re = o).verno = se.version / 10, le = re._dbSchema = ws(0, se, le), re._storeNames = S(se.objectStoreNames, 0), gs(re, [re._allTables], s(le), le);
                else if (ys(o, o._dbSchema, Fe), ((me = D0(ws(0, (me = o).idbdb, Fe), me._dbSchema)).add.length || me.change.some(function(Be) {
                  return Be.add.length || Be.change.length;
                })) && !T) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Re.close(), k = Re.version + 1, T = true, ae(H());
                ms(o, Fe);
              } catch {
              }
              Or.push(o), Re.onversionchange = Ur(function(Be) {
                l.vcFired = true, o.on("versionchange").fire(Be);
              }), Re.onclose = Ur(function() {
                o.close({ disableAutoOpen: false });
              }), j && (me = o._deps, Fe = J, Re = me.indexedDB, me = me.IDBKeyRange, N0(Re) || Fe === Wr || O0(Re, me).put({ name: Fe }).catch(ue)), ae();
            }, Z);
          }).catch(function(ae) {
            switch (ae == null ? void 0 : ae.name) {
              case "UnknownError":
                if (0 < l.PR1398_maxLoop) return l.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), H();
                break;
              case "VersionError":
                if (0 < k) return k = 0, H();
            }
            return Xe.reject(ae);
          });
        }
        var q, Y = l.dbReadyResolve, ee = null, j = false;
        return Xe.race([w, (typeof navigator > "u" ? Xe.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(ae) {
          function Z() {
            return indexedDB.databases().finally(ae);
          }
          q = setInterval(Z, 100), Z();
        }).finally(function() {
          return clearInterval(q);
        }) : Promise.resolve()).then(H)]).then(function() {
          return O(), l.onReadyBeingFired = [], Xe.resolve(R0(function() {
            return o.on.ready.fire(o.vip);
          })).then(function ae() {
            if (0 < l.onReadyBeingFired.length) {
              var Z = l.onReadyBeingFired.reduce(Cr, ue);
              return l.onReadyBeingFired = [], Xe.resolve(R0(function() {
                return Z(o.vip);
              })).then(ae);
            }
          });
        }).finally(function() {
          l.openCanceller === w && (l.onReadyBeingFired = null, l.isBeingOpened = false);
        }).catch(function(ae) {
          l.dbOpenError = ae;
          try {
            ee && ee.abort();
          } catch {
          }
          return w === l.openCanceller && o._close(), De(ae);
        }).finally(function() {
          l.openComplete = true, Y();
        }).then(function() {
          var ae;
          return j && (ae = {}, o.tables.forEach(function(Z) {
            Z.schema.indexes.forEach(function(J) {
              J.name && (ae["idb://".concat(o.name, "/").concat(Z.name, "/").concat(J.name)] = new Tt(-1 / 0, [[[]]]));
            }), ae["idb://".concat(o.name, "/").concat(Z.name, "/")] = ae["idb://".concat(o.name, "/").concat(Z.name, "/:dels")] = new Tt(-1 / 0, [[[]]]);
          }), Qa(mi).fire(ae), U0(ae, true)), o;
        });
      }
      function W0(o) {
        function l(T) {
          return o.next(T);
        }
        var p = k(l), w = k(function(T) {
          return o.throw(T);
        });
        function k(T) {
          return function(q) {
            var H = T(q), q = H.value;
            return H.done ? q : q && typeof q.then == "function" ? q.then(p, w) : f(q) ? Promise.all(q).then(p, w) : p(q);
          };
        }
        return k(l)();
      }
      function Ss(o, l, p) {
        for (var w = f(o) ? o.slice() : [o], k = 0; k < p; ++k) w.push(l);
        return w;
      }
      var jh = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(o) {
        return a(a({}, o), { table: function(l) {
          var p = o.table(l), w = p.schema, k = {}, T = [];
          function O(j, ae, Z) {
            var J = _i(j), Q = k[J] = k[J] || [], re = j == null ? 0 : typeof j == "string" ? 1 : j.length, se = 0 < ae, se = a(a({}, Z), { name: se ? "".concat(J, "(virtual-from:").concat(Z.name, ")") : Z.name, lowLevelIndex: Z, isVirtual: se, keyTail: ae, keyLength: re, extractKey: A0(j), unique: !se && Z.unique });
            return Q.push(se), se.isPrimaryKey || T.push(se), 1 < re && O(re === 2 ? j[0] : j.slice(0, re - 1), ae + 1, Z), Q.sort(function(le, pe) {
              return le.keyTail - pe.keyTail;
            }), se;
          }
          l = O(w.primaryKey.keyPath, 0, w.primaryKey), k[":id"] = [l];
          for (var H = 0, q = w.indexes; H < q.length; H++) {
            var Y = q[H];
            O(Y.keyPath, 0, Y);
          }
          function ee(j) {
            var ae, Z = j.query.index;
            return Z.isVirtual ? a(a({}, j), { query: { index: Z.lowLevelIndex, range: (ae = j.query.range, Z = Z.keyTail, { type: ae.type === 1 ? 2 : ae.type, lower: Ss(ae.lower, ae.lowerOpen ? o.MAX_KEY : o.MIN_KEY, Z), lowerOpen: true, upper: Ss(ae.upper, ae.upperOpen ? o.MIN_KEY : o.MAX_KEY, Z), upperOpen: true }) } }) : j;
          }
          return a(a({}, p), { schema: a(a({}, w), { primaryKey: l, indexes: T, getIndexByKeyPath: function(j) {
            return (j = k[_i(j)]) && j[0];
          } }), count: function(j) {
            return p.count(ee(j));
          }, query: function(j) {
            return p.query(ee(j));
          }, openCursor: function(j) {
            var ae = j.query.index, Z = ae.keyTail, J = ae.isVirtual, Q = ae.keyLength;
            return J ? p.openCursor(ee(j)).then(function(se) {
              return se && re(se);
            }) : p.openCursor(j);
            function re(se) {
              return Object.create(se, { continue: { value: function(le) {
                le != null ? se.continue(Ss(le, j.reverse ? o.MAX_KEY : o.MIN_KEY, Z)) : j.unique ? se.continue(se.key.slice(0, Q).concat(j.reverse ? o.MIN_KEY : o.MAX_KEY, Z)) : se.continue();
              } }, continuePrimaryKey: { value: function(le, pe) {
                se.continuePrimaryKey(Ss(le, o.MAX_KEY, Z), pe);
              } }, primaryKey: { get: function() {
                return se.primaryKey;
              } }, key: { get: function() {
                var le = se.key;
                return Q === 1 ? le[0] : le.slice(0, Q);
              } }, value: { get: function() {
                return se.value;
              } } });
            }
          } });
        } });
      } };
      function H0(o, l, p, w) {
        return p = p || {}, w = w || "", s(o).forEach(function(k) {
          var T, O, H;
          v(l, k) ? (T = o[k], O = l[k], typeof T == "object" && typeof O == "object" && T && O ? (H = ge(T)) !== ge(O) ? p[w + k] = l[k] : H === "Object" ? H0(T, O, p, w + k + ".") : T !== O && (p[w + k] = l[k]) : T !== O && (p[w + k] = l[k])) : p[w + k] = void 0;
        }), s(l).forEach(function(k) {
          v(o, k) || (p[w + k] = l[k]);
        }), p;
      }
      function V0(o, l) {
        return l.type === "delete" ? l.keys : l.keys || l.values.map(o.extractKey);
      }
      var Gh = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(o) {
        return a(a({}, o), { table: function(l) {
          var p = o.table(l), w = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(k) {
            var T = Je.trans, O = T.table(l).hook, H = O.deleting, q = O.creating, Y = O.updating;
            switch (k.type) {
              case "add":
                if (q.fire === ue) break;
                return T._promise("readwrite", function() {
                  return ee(k);
                }, true);
              case "put":
                if (q.fire === ue && Y.fire === ue) break;
                return T._promise("readwrite", function() {
                  return ee(k);
                }, true);
              case "delete":
                if (H.fire === ue) break;
                return T._promise("readwrite", function() {
                  return ee(k);
                }, true);
              case "deleteRange":
                if (H.fire === ue) break;
                return T._promise("readwrite", function() {
                  return (function j(ae, Z, J) {
                    return p.query({ trans: ae, values: false, query: { index: w, range: Z }, limit: J }).then(function(Q) {
                      var re = Q.result;
                      return ee({ type: "delete", keys: re, trans: ae }).then(function(se) {
                        return 0 < se.numFailures ? Promise.reject(se.failures[0]) : re.length < J ? { failures: [], numFailures: 0, lastResult: void 0 } : j(ae, a(a({}, Z), { lower: re[re.length - 1], lowerOpen: true }), J);
                      });
                    });
                  })(k.trans, k.range, 1e4);
                }, true);
            }
            return p.mutate(k);
            function ee(j) {
              var ae, Z, J, Q = Je.trans, re = j.keys || V0(w, j);
              if (!re) throw new Error("Keys missing");
              return (j = j.type === "add" || j.type === "put" ? a(a({}, j), { keys: re }) : a({}, j)).type !== "delete" && (j.values = n([], j.values)), j.keys && (j.keys = n([], j.keys)), ae = p, J = re, ((Z = j).type === "add" ? Promise.resolve([]) : ae.getMany({ trans: Z.trans, keys: J, cache: "immutable" })).then(function(se) {
                var le = re.map(function(pe, me) {
                  var Re, We, Fe, Be = se[me], He = { onerror: null, onsuccess: null };
                  return j.type === "delete" ? H.fire.call(He, pe, Be, Q) : j.type === "add" || Be === void 0 ? (Re = q.fire.call(He, pe, j.values[me], Q), pe == null && Re != null && (j.keys[me] = pe = Re, w.outbound || F(j.values[me], w.keyPath, pe))) : (Re = H0(Be, j.values[me]), (We = Y.fire.call(He, Re, pe, Be, Q)) && (Fe = j.values[me], Object.keys(We).forEach(function(Me) {
                    v(Fe, Me) ? Fe[Me] = We[Me] : F(Fe, Me, We[Me]);
                  }))), He;
                });
                return p.mutate(j).then(function(pe) {
                  for (var me = pe.failures, Re = pe.results, We = pe.numFailures, pe = pe.lastResult, Fe = 0; Fe < re.length; ++Fe) {
                    var Be = (Re || re)[Fe], He = le[Fe];
                    Be == null ? He.onerror && He.onerror(me[Fe]) : He.onsuccess && He.onsuccess(j.type === "put" && se[Fe] ? j.values[Fe] : Be);
                  }
                  return { failures: me, results: Re, numFailures: We, lastResult: pe };
                }).catch(function(pe) {
                  return le.forEach(function(me) {
                    return me.onerror && me.onerror(pe);
                  }), Promise.reject(pe);
                });
              });
            }
          } });
        } });
      } };
      function Po(o, l, p) {
        try {
          if (!l || l.keys.length < o.length) return null;
          for (var w = [], k = 0, T = 0; k < l.keys.length && T < o.length; ++k) cr(l.keys[k], o[T]) === 0 && (w.push(p ? de(l.values[k]) : l.values[k]), ++T);
          return w.length === o.length ? w : null;
        } catch {
          return null;
        }
      }
      var zh = { stack: "dbcore", level: -1, create: function(o) {
        return { table: function(l) {
          var p = o.table(l);
          return a(a({}, p), { getMany: function(w) {
            if (!w.cache) return p.getMany(w);
            var k = Po(w.keys, w.trans._cache, w.cache === "clone");
            return k ? Xe.resolve(k) : p.getMany(w).then(function(T) {
              return w.trans._cache = { keys: w.keys, values: w.cache === "clone" ? de(T) : T }, T;
            });
          }, mutate: function(w) {
            return w.type !== "add" && (w.trans._cache = null), p.mutate(w);
          } });
        } };
      } };
      function Bo(o, l) {
        return o.trans.mode === "readonly" && !!o.subscr && !o.trans.explicit && o.trans.db._options.cache !== "disabled" && !l.schema.primaryKey.outbound;
      }
      function Lo(o, l) {
        switch (o) {
          case "query":
            return l.values && !l.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return false;
        }
      }
      var $h = { stack: "dbcore", level: 0, name: "Observability", create: function(o) {
        var l = o.schema.name, p = new Tt(o.MIN_KEY, o.MAX_KEY);
        return a(a({}, o), { transaction: function(w, k, T) {
          if (Je.subscr && k !== "readonly") throw new W.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Je.querier));
          return o.transaction(w, k, T);
        }, table: function(w) {
          var k = o.table(w), T = k.schema, O = T.primaryKey, j = T.indexes, H = O.extractKey, q = O.outbound, Y = O.autoIncrement && j.filter(function(Z) {
            return Z.compound && Z.keyPath.includes(O.keyPath);
          }), ee = a(a({}, k), { mutate: function(Z) {
            function J(Me) {
              return Me = "idb://".concat(l, "/").concat(w, "/").concat(Me), pe[Me] || (pe[Me] = new Tt());
            }
            var Q, re, se, le = Z.trans, pe = Z.mutatedParts || (Z.mutatedParts = {}), me = J(""), Re = J(":dels"), We = Z.type, He = Z.type === "deleteRange" ? [Z.range] : Z.type === "delete" ? [Z.keys] : Z.values.length < 50 ? [V0(O, Z).filter(function(Me) {
              return Me;
            }), Z.values] : [], Fe = He[0], Be = He[1], He = Z.trans._cache;
            return f(Fe) ? (me.addKeys(Fe), (He = We === "delete" || Fe.length === Be.length ? Po(Fe, He) : null) || Re.addKeys(Fe), (He || Be) && (Q = J, re = He, se = Be, T.indexes.forEach(function(Me) {
              var qe = Q(Me.name || "");
              function xr(Tr) {
                return Tr != null ? Me.extractKey(Tr) : null;
              }
              function gr(Tr) {
                return Me.multiEntry && f(Tr) ? Tr.forEach(function($t) {
                  return qe.addKey($t);
                }) : qe.addKey(Tr);
              }
              (re || se).forEach(function(Tr, St) {
                var ur = re && xr(re[St]), St = se && xr(se[St]);
                cr(ur, St) !== 0 && (ur != null && gr(ur), St != null && gr(St));
              });
            }))) : Fe ? (Be = { from: (Be = Fe.lower) !== null && Be !== void 0 ? Be : o.MIN_KEY, to: (Be = Fe.upper) !== null && Be !== void 0 ? Be : o.MAX_KEY }, Re.add(Be), me.add(Be)) : (me.add(p), Re.add(p), T.indexes.forEach(function(Me) {
              return J(Me.name).add(p);
            })), k.mutate(Z).then(function(Me) {
              return !Fe || Z.type !== "add" && Z.type !== "put" || (me.addKeys(Me.results), Y && Y.forEach(function(qe) {
                for (var xr = Z.values.map(function(ur) {
                  return qe.extractKey(ur);
                }), gr = qe.keyPath.findIndex(function(ur) {
                  return ur === O.keyPath;
                }), Tr = 0, $t = Me.results.length; Tr < $t; ++Tr) xr[Tr][gr] = Me.results[Tr];
                J(qe.name).addKeys(xr);
              })), le.mutatedParts = Es(le.mutatedParts || {}, pe), Me;
            });
          } }), j = function(J) {
            var Q = J.query, J = Q.index, Q = Q.range;
            return [J, new Tt((J = Q.lower) !== null && J !== void 0 ? J : o.MIN_KEY, (Q = Q.upper) !== null && Q !== void 0 ? Q : o.MAX_KEY)];
          }, ae = { get: function(Z) {
            return [O, new Tt(Z.key)];
          }, getMany: function(Z) {
            return [O, new Tt().addKeys(Z.keys)];
          }, count: j, query: j, openCursor: j };
          return s(ae).forEach(function(Z) {
            ee[Z] = function(J) {
              var Q = Je.subscr, re = !!Q, se = Bo(Je, k) && Lo(Z, J) ? J.obsSet = {} : Q;
              if (re) {
                var le = function(Be) {
                  return Be = "idb://".concat(l, "/").concat(w, "/").concat(Be), se[Be] || (se[Be] = new Tt());
                }, pe = le(""), me = le(":dels"), Q = ae[Z](J), re = Q[0], Q = Q[1];
                if ((Z === "query" && re.isPrimaryKey && !J.values ? me : le(re.name || "")).add(Q), !re.isPrimaryKey) {
                  if (Z !== "count") {
                    var Re = Z === "query" && q && J.values && k.query(a(a({}, J), { values: false }));
                    return k[Z].apply(this, arguments).then(function(Be) {
                      if (Z === "query") {
                        if (q && J.values) return Re.then(function(xr) {
                          return xr = xr.result, pe.addKeys(xr), Be;
                        });
                        var He = J.values ? Be.result.map(H) : Be.result;
                        (J.values ? pe : me).addKeys(He);
                      } else if (Z === "openCursor") {
                        var Me = Be, qe = J.values;
                        return Me && Object.create(Me, { key: { get: function() {
                          return me.addKey(Me.primaryKey), Me.key;
                        } }, primaryKey: { get: function() {
                          var xr = Me.primaryKey;
                          return me.addKey(xr), xr;
                        } }, value: { get: function() {
                          return qe && pe.addKey(Me.primaryKey), Me.value;
                        } } });
                      }
                      return Be;
                    });
                  }
                  me.add(p);
                }
              }
              return k[Z].apply(this, arguments);
            };
          }), ee;
        } });
      } };
      function Mo(o, l, p) {
        if (p.numFailures === 0) return l;
        if (l.type === "deleteRange") return null;
        var w = l.keys ? l.keys.length : "values" in l && l.values ? l.values.length : 1;
        return p.numFailures === w ? null : (l = a({}, l), f(l.keys) && (l.keys = l.keys.filter(function(k, T) {
          return !(T in p.failures);
        })), "values" in l && f(l.values) && (l.values = l.values.filter(function(k, T) {
          return !(T in p.failures);
        })), l);
      }
      function X0(o, l) {
        return p = o, ((w = l).lower === void 0 || (w.lowerOpen ? 0 < cr(p, w.lower) : 0 <= cr(p, w.lower))) && (o = o, (l = l).upper === void 0 || (l.upperOpen ? cr(o, l.upper) < 0 : cr(o, l.upper) <= 0));
        var p, w;
      }
      function Uo(o, l, ae, w, k, T) {
        if (!ae || ae.length === 0) return o;
        var O = l.query.index, H = O.multiEntry, q = l.query.range, Y = w.schema.primaryKey.extractKey, ee = O.extractKey, j = (O.lowLevelIndex || O).extractKey, ae = ae.reduce(function(Z, J) {
          var Q = Z, re = [];
          if (J.type === "add" || J.type === "put") for (var se = new Tt(), le = J.values.length - 1; 0 <= le; --le) {
            var pe, me = J.values[le], Re = Y(me);
            se.hasKey(Re) || (pe = ee(me), (H && f(pe) ? pe.some(function(Me) {
              return X0(Me, q);
            }) : X0(pe, q)) && (se.addKey(Re), re.push(me)));
          }
          switch (J.type) {
            case "add":
              var We = new Tt().addKeys(l.values ? Z.map(function(qe) {
                return Y(qe);
              }) : Z), Q = Z.concat(l.values ? re.filter(function(qe) {
                return qe = Y(qe), !We.hasKey(qe) && (We.addKey(qe), true);
              }) : re.map(function(qe) {
                return Y(qe);
              }).filter(function(qe) {
                return !We.hasKey(qe) && (We.addKey(qe), true);
              }));
              break;
            case "put":
              var Fe = new Tt().addKeys(J.values.map(function(qe) {
                return Y(qe);
              }));
              Q = Z.filter(function(qe) {
                return !Fe.hasKey(l.values ? Y(qe) : qe);
              }).concat(l.values ? re : re.map(function(qe) {
                return Y(qe);
              }));
              break;
            case "delete":
              var Be = new Tt().addKeys(J.keys);
              Q = Z.filter(function(qe) {
                return !Be.hasKey(l.values ? Y(qe) : qe);
              });
              break;
            case "deleteRange":
              var He = J.range;
              Q = Z.filter(function(qe) {
                return !X0(Y(qe), He);
              });
          }
          return Q;
        }, o);
        return ae === o ? o : (ae.sort(function(Z, J) {
          return cr(j(Z), j(J)) || cr(Y(Z), Y(J));
        }), l.limit && l.limit < 1 / 0 && (ae.length > l.limit ? ae.length = l.limit : o.length === l.limit && ae.length < l.limit && (k.dirty = true)), T ? Object.freeze(ae) : ae);
      }
      function Wo(o, l) {
        return cr(o.lower, l.lower) === 0 && cr(o.upper, l.upper) === 0 && !!o.lowerOpen == !!l.lowerOpen && !!o.upperOpen == !!l.upperOpen;
      }
      function qh(o, l) {
        return (function(p, w, k, T) {
          if (p === void 0) return w !== void 0 ? -1 : 0;
          if (w === void 0) return 1;
          if ((w = cr(p, w)) === 0) {
            if (k && T) return 0;
            if (k) return 1;
            if (T) return -1;
          }
          return w;
        })(o.lower, l.lower, o.lowerOpen, l.lowerOpen) <= 0 && 0 <= (function(p, w, k, T) {
          if (p === void 0) return w !== void 0 ? 1 : 0;
          if (w === void 0) return -1;
          if ((w = cr(p, w)) === 0) {
            if (k && T) return 0;
            if (k) return -1;
            if (T) return 1;
          }
          return w;
        })(o.upper, l.upper, o.upperOpen, l.upperOpen);
      }
      function Yh(o, l, p, w) {
        o.subscribers.add(p), w.addEventListener("abort", function() {
          var k, T;
          o.subscribers.delete(p), o.subscribers.size === 0 && (k = o, T = l, setTimeout(function() {
            k.subscribers.size === 0 && Pe(T, k);
          }, 3e3));
        });
      }
      var Zh = { stack: "dbcore", level: 0, name: "Cache", create: function(o) {
        var l = o.schema.name;
        return a(a({}, o), { transaction: function(p, w, k) {
          var T, O, H = o.transaction(p, w, k);
          return w === "readwrite" && (O = (T = new AbortController()).signal, k = function(q) {
            return function() {
              if (T.abort(), w === "readwrite") {
                for (var Y = /* @__PURE__ */ new Set(), ee = 0, j = p; ee < j.length; ee++) {
                  var ae = j[ee], Z = vn["idb://".concat(l, "/").concat(ae)];
                  if (Z) {
                    var J = o.table(ae), Q = Z.optimisticOps.filter(function(qe) {
                      return qe.trans === H;
                    });
                    if (H._explicit && q && H.mutatedParts) for (var re = 0, se = Object.values(Z.queries.query); re < se.length; re++) for (var le = 0, pe = (We = se[re]).slice(); le < pe.length; le++) B0((Fe = pe[le]).obsSet, H.mutatedParts) && (Pe(We, Fe), Fe.subscribers.forEach(function(qe) {
                      return Y.add(qe);
                    }));
                    else if (0 < Q.length) {
                      Z.optimisticOps = Z.optimisticOps.filter(function(qe) {
                        return qe.trans !== H;
                      });
                      for (var me = 0, Re = Object.values(Z.queries.query); me < Re.length; me++) for (var We, Fe, Be, He = 0, Me = (We = Re[me]).slice(); He < Me.length; He++) (Fe = Me[He]).res != null && H.mutatedParts && (q && !Fe.dirty ? (Be = Object.isFrozen(Fe.res), Be = Uo(Fe.res, Fe.req, Q, J, Fe, Be), Fe.dirty ? (Pe(We, Fe), Fe.subscribers.forEach(function(qe) {
                        return Y.add(qe);
                      })) : Be !== Fe.res && (Fe.res = Be, Fe.promise = Xe.resolve({ result: Be }))) : (Fe.dirty && Pe(We, Fe), Fe.subscribers.forEach(function(qe) {
                        return Y.add(qe);
                      })));
                    }
                  }
                }
                Y.forEach(function(qe) {
                  return qe();
                });
              }
            };
          }, H.addEventListener("abort", k(false), { signal: O }), H.addEventListener("error", k(false), { signal: O }), H.addEventListener("complete", k(true), { signal: O })), H;
        }, table: function(p) {
          var w = o.table(p), k = w.schema.primaryKey;
          return a(a({}, w), { mutate: function(T) {
            var O = Je.trans;
            if (k.outbound || O.db._options.cache === "disabled" || O.explicit || O.idbtrans.mode !== "readwrite") return w.mutate(T);
            var H = vn["idb://".concat(l, "/").concat(p)];
            return H ? (O = w.mutate(T), T.type !== "add" && T.type !== "put" || !(50 <= T.values.length || V0(k, T).some(function(q) {
              return q == null;
            })) ? (H.optimisticOps.push(T), T.mutatedParts && Ts(T.mutatedParts), O.then(function(q) {
              0 < q.numFailures && (Pe(H.optimisticOps, T), (q = Mo(0, T, q)) && H.optimisticOps.push(q), T.mutatedParts && Ts(T.mutatedParts));
            }), O.catch(function() {
              Pe(H.optimisticOps, T), T.mutatedParts && Ts(T.mutatedParts);
            })) : O.then(function(q) {
              var Y = Mo(0, a(a({}, T), { values: T.values.map(function(ee, j) {
                var ae;
                return q.failures[j] ? ee : (ee = (ae = k.keyPath) !== null && ae !== void 0 && ae.includes(".") ? de(ee) : a({}, ee), F(ee, k.keyPath, q.results[j]), ee);
              }) }), q);
              H.optimisticOps.push(Y), queueMicrotask(function() {
                return T.mutatedParts && Ts(T.mutatedParts);
              });
            }), O) : w.mutate(T);
          }, query: function(T) {
            if (!Bo(Je, w) || !Lo("query", T)) return w.query(T);
            var O = ((Y = Je.trans) === null || Y === void 0 ? void 0 : Y.db._options.cache) === "immutable", j = Je, H = j.requery, q = j.signal, Y = (function(J, Q, re, se) {
              var le = vn["idb://".concat(J, "/").concat(Q)];
              if (!le) return [];
              if (!(Q = le.queries[re])) return [null, false, le, null];
              var pe = Q[(se.query ? se.query.index.name : null) || ""];
              if (!pe) return [null, false, le, null];
              switch (re) {
                case "query":
                  var me = pe.find(function(Re) {
                    return Re.req.limit === se.limit && Re.req.values === se.values && Wo(Re.req.query.range, se.query.range);
                  });
                  return me ? [me, true, le, pe] : [pe.find(function(Re) {
                    return ("limit" in Re.req ? Re.req.limit : 1 / 0) >= se.limit && (!se.values || Re.req.values) && qh(Re.req.query.range, se.query.range);
                  }), false, le, pe];
                case "count":
                  return me = pe.find(function(Re) {
                    return Wo(Re.req.query.range, se.query.range);
                  }), [me, !!me, le, pe];
              }
            })(l, p, "query", T), ee = Y[0], j = Y[1], ae = Y[2], Z = Y[3];
            return ee && j ? ee.obsSet = T.obsSet : (j = w.query(T).then(function(J) {
              var Q = J.result;
              if (ee && (ee.res = Q), O) {
                for (var re = 0, se = Q.length; re < se; ++re) Object.freeze(Q[re]);
                Object.freeze(Q);
              } else J.result = de(Q);
              return J;
            }).catch(function(J) {
              return Z && ee && Pe(Z, ee), Promise.reject(J);
            }), ee = { obsSet: T.obsSet, promise: j, subscribers: /* @__PURE__ */ new Set(), type: "query", req: T, dirty: false }, Z ? Z.push(ee) : (Z = [ee], (ae = ae || (vn["idb://".concat(l, "/").concat(p)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[T.query.index.name || ""] = Z)), Yh(ee, Z, H, q), ee.promise.then(function(J) {
              return { result: Uo(J.result, T, ae == null ? void 0 : ae.optimisticOps, w, ee, O) };
            });
          } });
        } });
      } };
      function bs(o, l) {
        return new Proxy(o, { get: function(p, w, k) {
          return w === "db" ? l : Reflect.get(p, w, k);
        } });
      }
      var Pa = (Jr.prototype.version = function(o) {
        if (isNaN(o) || o < 0.1) throw new W.Type("Given version is not a positive number");
        if (o = Math.round(10 * o) / 10, this.idbdb || this._state.isBeingOpened) throw new W.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, o);
        var l = this._versions, p = l.filter(function(w) {
          return w._cfg.version === o;
        })[0];
        return p || (p = new this.Version(o), l.push(p), l.sort(Wh), p.stores({}), this._state.autoSchema = false, p);
      }, Jr.prototype._whenReady = function(o) {
        var l = this;
        return this.idbdb && (this._state.openComplete || Je.letThrough || this._vip) ? o() : new Xe(function(p, w) {
          if (l._state.openComplete) return w(new W.DatabaseClosed(l._state.dbOpenError));
          if (!l._state.isBeingOpened) {
            if (!l._state.autoOpen) return void w(new W.DatabaseClosed());
            l.open().catch(ue);
          }
          l._state.dbReadyPromise.then(p, w);
        }).then(o);
      }, Jr.prototype.use = function(o) {
        var l = o.stack, p = o.create, w = o.level, k = o.name;
        return k && this.unuse({ stack: l, name: k }), o = this._middlewares[l] || (this._middlewares[l] = []), o.push({ stack: l, create: p, level: w ?? 10, name: k }), o.sort(function(T, O) {
          return T.level - O.level;
        }), this;
      }, Jr.prototype.unuse = function(o) {
        var l = o.stack, p = o.name, w = o.create;
        return l && this._middlewares[l] && (this._middlewares[l] = this._middlewares[l].filter(function(k) {
          return w ? k.create !== w : !!p && k.name !== p;
        })), this;
      }, Jr.prototype.open = function() {
        var o = this;
        return ie(xt, function() {
          return Kh(o);
        });
      }, Jr.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var o = this._state, l = Or.indexOf(this);
        if (0 <= l && Or.splice(l, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        o.isBeingOpened || (o.dbReadyPromise = new Xe(function(p) {
          o.dbReadyResolve = p;
        }), o.openCanceller = new Xe(function(p, w) {
          o.cancelOpen = w;
        }));
      }, Jr.prototype.close = function(p) {
        var l = (p === void 0 ? { disableAutoOpen: true } : p).disableAutoOpen, p = this._state;
        l ? (p.isBeingOpened && p.cancelOpen(new W.DatabaseClosed()), this._close(), p.autoOpen = false, p.dbOpenError = new W.DatabaseClosed()) : (this._close(), p.autoOpen = this._options.autoOpen || p.isBeingOpened, p.openComplete = false, p.dbOpenError = null);
      }, Jr.prototype.delete = function(o) {
        var l = this;
        o === void 0 && (o = { disableAutoOpen: true });
        var p = 0 < arguments.length && typeof arguments[0] != "object", w = this._state;
        return new Xe(function(k, T) {
          function O() {
            l.close(o);
            var H = l._deps.indexedDB.deleteDatabase(l.name);
            H.onsuccess = Ur(function() {
              var q, Y, ee;
              q = l._deps, Y = l.name, ee = q.indexedDB, q = q.IDBKeyRange, N0(ee) || Y === Wr || O0(ee, q).delete(Y).catch(ue), k();
            }), H.onerror = ka(T), H.onblocked = l._fireOnBlocked;
          }
          if (p) throw new W.InvalidArgument("Invalid closeOptions argument to db.delete()");
          w.isBeingOpened ? w.dbReadyPromise.then(O) : O();
        });
      }, Jr.prototype.backendDB = function() {
        return this.idbdb;
      }, Jr.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Jr.prototype.hasBeenClosed = function() {
        var o = this._state.dbOpenError;
        return o && o.name === "DatabaseClosed";
      }, Jr.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Jr.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Jr.prototype, "tables", { get: function() {
        var o = this;
        return s(this._allTables).map(function(l) {
          return o._allTables[l];
        });
      }, enumerable: false, configurable: true }), Jr.prototype.transaction = function() {
        var o = (function(l, p, w) {
          var k = arguments.length;
          if (k < 2) throw new W.InvalidArgument("Too few arguments");
          for (var T = new Array(k - 1); --k; ) T[k - 1] = arguments[k];
          return w = T.pop(), [l, K(T), w];
        }).apply(this, arguments);
        return this._transaction.apply(this, o);
      }, Jr.prototype._transaction = function(o, l, p) {
        var w = this, k = Je.trans;
        k && k.db === this && o.indexOf("!") === -1 || (k = null);
        var T, O, H = o.indexOf("?") !== -1;
        o = o.replace("!", "").replace("?", "");
        try {
          if (O = l.map(function(Y) {
            if (Y = Y instanceof w.Table ? Y.name : Y, typeof Y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return Y;
          }), o == "r" || o === it) T = it;
          else {
            if (o != "rw" && o != Ra) throw new W.InvalidArgument("Invalid transaction mode: " + o);
            T = Ra;
          }
          if (k) {
            if (k.mode === it && T === Ra) {
              if (!H) throw new W.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              k = null;
            }
            k && O.forEach(function(Y) {
              if (k && k.storeNames.indexOf(Y) === -1) {
                if (!H) throw new W.SubTransaction("Table " + Y + " not included in parent transaction.");
                k = null;
              }
            }), H && k && !k.active && (k = null);
          }
        } catch (Y) {
          return k ? k._promise(null, function(ee, j) {
            j(Y);
          }) : De(Y);
        }
        var q = (function Y(ee, j, ae, Z, J) {
          return Xe.resolve().then(function() {
            var Q = Je.transless || Je, re = ee._createTransaction(j, ae, ee._dbSchema, Z);
            if (re.explicit = true, Q = { trans: re, transless: Q }, Z) re.idbtrans = Z.idbtrans;
            else try {
              re.create(), re.idbtrans._explicit = true, ee._state.PR1398_maxLoop = 3;
            } catch (pe) {
              return pe.name === Ze.InvalidState && ee.isOpen() && 0 < --ee._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), ee.close({ disableAutoOpen: false }), ee.open().then(function() {
                return Y(ee, j, ae, null, J);
              })) : De(pe);
            }
            var se, le = sr(J);
            return le && N(), Q = Xe.follow(function() {
              var pe;
              (se = J.call(re, re)) && (le ? (pe = M.bind(null, null), se.then(pe, pe)) : typeof se.next == "function" && typeof se.throw == "function" && (se = W0(se)));
            }, Q), (se && typeof se.then == "function" ? Xe.resolve(se).then(function(pe) {
              return re.active ? pe : De(new W.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : Q.then(function() {
              return se;
            })).then(function(pe) {
              return Z && re._resolve(), re._completion.then(function() {
                return pe;
              });
            }).catch(function(pe) {
              return re._reject(pe), De(pe);
            });
          });
        }).bind(null, this, T, O, k, p);
        return k ? k._promise(T, q, "lock") : Je.trans ? ie(Je.transless, function() {
          return w._whenReady(q);
        }) : this._whenReady(q);
      }, Jr.prototype.table = function(o) {
        if (!v(this._allTables, o)) throw new W.InvalidTable("Table ".concat(o, " does not exist"));
        return this._allTables[o];
      }, Jr);
      function Jr(o, l) {
        var p = this;
        this._middlewares = {}, this.verno = 0;
        var w = Jr.dependencies;
        this._options = l = a({ addons: Jr.addons, autoOpen: true, indexedDB: w.indexedDB, IDBKeyRange: w.IDBKeyRange, cache: "cloned" }, l), this._deps = { indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange }, w = l.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var k, T, O, H, q, Y = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: ue, dbReadyPromise: null, cancelOpen: ue, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: l.autoOpen };
        Y.dbReadyPromise = new Xe(function(j) {
          Y.dbReadyResolve = j;
        }), Y.openCanceller = new Xe(function(j, ae) {
          Y.cancelOpen = ae;
        }), this._state = Y, this.name = o, this.on = xi(this, "populate", "blocked", "versionchange", "close", { ready: [Cr, ue] }), this.once = function(j, ae) {
          var Z = function() {
            for (var J = [], Q = 0; Q < arguments.length; Q++) J[Q] = arguments[Q];
            p.on(j).unsubscribe(Z), ae.apply(p, J);
          };
          return p.on(j, Z);
        }, this.on.ready.subscribe = E(this.on.ready.subscribe, function(j) {
          return function(ae, Z) {
            Jr.vip(function() {
              var J, Q = p._state;
              Q.openComplete ? (Q.dbOpenError || Xe.resolve().then(ae), Z && j(ae)) : Q.onReadyBeingFired ? (Q.onReadyBeingFired.push(ae), Z && j(ae)) : (j(ae), J = p, Z || j(function re() {
                J.on.ready.unsubscribe(ae), J.on.ready.unsubscribe(re);
              }));
            });
          };
        }), this.Collection = (k = this, pi(Nh.prototype, function(se, re) {
          this.db = k;
          var Z = Za, J = null;
          if (re) try {
            Z = re();
          } catch (le) {
            J = le;
          }
          var Q = se._ctx, re = Q.table, se = re.hook.reading.fire;
          this._ctx = { table: re, index: Q.index, isPrimKey: !Q.index || re.schema.primKey.keyPath && Q.index === re.schema.primKey.name, range: Z, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: J, or: Q.or, valueMapper: se !== I ? se : null };
        })), this.Table = (T = this, pi(yo.prototype, function(j, ae, Z) {
          this.db = T, this._tx = Z, this.name = j, this.schema = ae, this.hook = T._allTables[j] ? T._allTables[j].hook : xi(null, { creating: [Se, ue], reading: [Ce, I], updating: [rr, ue], deleting: [ar, ue] });
        })), this.Transaction = (O = this, pi(Bh.prototype, function(j, ae, Z, J, Q) {
          var re = this;
          j !== "readonly" && ae.forEach(function(se) {
            se = (se = Z[se]) === null || se === void 0 ? void 0 : se.yProps, se && (ae = ae.concat(se.map(function(le) {
              return le.updatesTable;
            })));
          }), this.db = O, this.mode = j, this.storeNames = ae, this.schema = Z, this.chromeTransactionDurability = J, this.idbtrans = null, this.on = xi(this, "complete", "error", "abort"), this.parent = Q || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Xe(function(se, le) {
            re._resolve = se, re._reject = le;
          }), this._completion.then(function() {
            re.active = false, re.on.complete.fire();
          }, function(se) {
            var le = re.active;
            return re.active = false, re.on.error.fire(se), re.parent ? re.parent._reject(se) : le && re.idbtrans && re.idbtrans.abort(), De(se);
          });
        })), this.Version = (H = this, pi(Xh.prototype, function(j) {
          this.db = H, this._cfg = { version: j, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (q = this, pi(bo.prototype, function(j, ae, Z) {
          if (this.db = q, this._ctx = { table: j, index: ae === ":id" ? null : ae, or: Z }, this._cmp = this._ascending = cr, this._descending = function(J, Q) {
            return cr(Q, J);
          }, this._max = function(J, Q) {
            return 0 < cr(J, Q) ? J : Q;
          }, this._min = function(J, Q) {
            return cr(J, Q) < 0 ? J : Q;
          }, this._IDBKeyRange = q._deps.IDBKeyRange, !this._IDBKeyRange) throw new W.MissingAPI();
        })), this.on("versionchange", function(j) {
          0 < j.newVersion ? console.warn("Another connection wants to upgrade database '".concat(p.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(p.name, "'. Closing db now to resume the delete request.")), p.close({ disableAutoOpen: false });
        }), this.on("blocked", function(j) {
          !j.newVersion || j.newVersion < j.oldVersion ? console.warn("Dexie.delete('".concat(p.name, "') was blocked")) : console.warn("Upgrade '".concat(p.name, "' blocked by other connection holding version ").concat(j.oldVersion / 10));
        }), this._maxKey = gi(l.IDBKeyRange), this._createTransaction = function(j, ae, Z, J) {
          return new p.Transaction(j, ae, Z, p._options.chromeTransactionDurability, J);
        }, this._fireOnBlocked = function(j) {
          p.on("blocked").fire(j), Or.filter(function(ae) {
            return ae.name === p.name && ae !== p && !ae._state.vcFired;
          }).map(function(ae) {
            return ae.on("versionchange").fire(j);
          });
        }, this.use(zh), this.use(Zh), this.use($h), this.use(jh), this.use(Gh);
        var ee = new Proxy(this, { get: function(j, ae, Z) {
          if (ae === "_vip") return true;
          if (ae === "table") return function(Q) {
            return bs(p.table(Q), ee);
          };
          var J = Reflect.get(j, ae, Z);
          return J instanceof yo ? bs(J, ee) : ae === "tables" ? J.map(function(Q) {
            return bs(Q, ee);
          }) : ae === "_createTransaction" ? function() {
            return bs(J.apply(this, arguments), ee);
          } : J;
        } });
        this.vip = ee, w.forEach(function(j) {
          return j(p);
        });
      }
      var Fs, ta = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Jh = (K0.prototype.subscribe = function(o, l, p) {
        return this._subscribe(o && typeof o != "function" ? o : { next: o, error: l, complete: p });
      }, K0.prototype[ta] = function() {
        return this;
      }, K0);
      function K0(o) {
        this._subscribe = o;
      }
      try {
        Fs = { indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB, IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange };
      } catch {
        Fs = { indexedDB: null, IDBKeyRange: null };
      }
      function Ho(o) {
        var l, p = false, w = new Jh(function(k) {
          var T = sr(o), O, H = false, q = {}, Y = {}, ee = { get closed() {
            return H;
          }, unsubscribe: function() {
            H || (H = true, O && O.abort(), j && Qa.storagemutated.unsubscribe(Z));
          } };
          k.start && k.start(ee);
          var j = false, ae = function() {
            return Ne(J);
          }, Z = function(Q) {
            Es(q, Q), B0(Y, q) && ae();
          }, J = function() {
            var Q, re, se;
            !H && Fs.indexedDB && (q = {}, Q = {}, O && O.abort(), O = new AbortController(), se = (function(le) {
              var pe = qa();
              try {
                T && N();
                var me = D(o, le);
                return me = T ? me.finally(M) : me;
              } finally {
                pe && Ya();
              }
            })(re = { subscr: Q, signal: O.signal, requery: ae, querier: o, trans: null }), Promise.resolve(se).then(function(le) {
              p = true, l = le, H || re.signal.aborted || (q = {}, (function(pe) {
                for (var me in pe) if (v(pe, me)) return;
                return 1;
              })(Y = Q) || j || (Qa(mi, Z), j = true), Ne(function() {
                return !H && k.next && k.next(le);
              }));
            }, function(le) {
              p = false, ["DatabaseClosedError", "AbortError"].includes(le == null ? void 0 : le.name) || H || Ne(function() {
                H || k.error && k.error(le);
              });
            }));
          };
          return setTimeout(ae, 0), ee;
        });
        return w.hasValue = function() {
          return p;
        }, w.getValue = function() {
          return l;
        }, w;
      }
      var mn = Pa;
      function j0(o) {
        var l = en;
        try {
          en = true, Qa.storagemutated.fire(o), U0(o, true);
        } finally {
          en = l;
        }
      }
      d(mn, a(a({}, V), { delete: function(o) {
        return new mn(o, { addons: [] }).delete();
      }, exists: function(o) {
        return new mn(o, { addons: [] }).open().then(function(l) {
          return l.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(o) {
        try {
          return l = mn.dependencies, p = l.indexedDB, l = l.IDBKeyRange, (N0(p) ? Promise.resolve(p.databases()).then(function(w) {
            return w.map(function(k) {
              return k.name;
            }).filter(function(k) {
              return k !== Wr;
            });
          }) : O0(p, l).toCollection().primaryKeys()).then(o);
        } catch {
          return De(new W.MissingAPI());
        }
        var l, p;
      }, defineClass: function() {
        return function(o) {
          c(this, o);
        };
      }, ignoreTransaction: function(o) {
        return Je.trans ? ie(Je.transless, o) : o();
      }, vip: R0, async: function(o) {
        return function() {
          try {
            var l = W0(o.apply(this, arguments));
            return l && typeof l.then == "function" ? l : Xe.resolve(l);
          } catch (p) {
            return De(p);
          }
        };
      }, spawn: function(o, l, p) {
        try {
          var w = W0(o.apply(p, l || []));
          return w && typeof w.then == "function" ? w : Xe.resolve(w);
        } catch (k) {
          return De(k);
        }
      }, currentTransaction: { get: function() {
        return Je.trans || null;
      } }, waitFor: function(o, l) {
        return l = Xe.resolve(typeof o == "function" ? mn.ignoreTransaction(o) : o).timeout(l || 6e4), Je.trans ? Je.trans.waitFor(l) : l;
      }, Promise: Xe, debug: { get: function() {
        return kr;
      }, set: function(o) {
        Xr(o);
      } }, derive: y, extend: c, props: d, override: E, Events: xi, on: Qa, liveQuery: Ho, extendObservabilitySet: Es, getByKeyPath: U, setByKeyPath: F, delByKeyPath: function(o, l) {
        typeof l == "string" ? F(o, l, void 0) : "length" in l && [].map.call(l, function(p) {
          F(o, p, void 0);
        });
      }, shallowClone: B, deepClone: de, getObjectDiff: H0, cmp: cr, asap: X, minKey: -1 / 0, addons: [], connections: Or, errnames: Ze, dependencies: Fs, cache: vn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(o) {
        return parseInt(o);
      }).reduce(function(o, l, p) {
        return o + l / Math.pow(10, 2 * p);
      }) })), mn.maxKey = gi(mn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Qa(mi, function(o) {
        en || (o = new CustomEvent(S0, { detail: o }), en = true, dispatchEvent(o), en = false);
      }), addEventListener(S0, function(o) {
        o = o.detail, en || j0(o);
      }));
      var Gn, en = false, Vo = function() {
      };
      return typeof BroadcastChannel < "u" && ((Vo = function() {
        (Gn = new BroadcastChannel(S0)).onmessage = function(o) {
          return o.data && j0(o.data);
        };
      })(), typeof Gn.unref == "function" && Gn.unref(), Qa(mi, function(o) {
        en || Gn.postMessage(o);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(o) {
        if (!Pa.disableBfCache && o.persisted) {
          kr && console.debug("Dexie: handling persisted pagehide"), Gn == null ? void 0 : Gn.close();
          for (var l = 0, p = Or; l < p.length; l++) p[l].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(o) {
        !Pa.disableBfCache && o.persisted && (kr && console.debug("Dexie: handling persisted pageshow"), Vo(), j0({ all: new Tt(-1 / 0, [[]]) }));
      })), Xe.rejectionMapper = function(o, l) {
        return !o || o instanceof Te || o instanceof TypeError || o instanceof SyntaxError || !o.name || !z[o.name] ? o : (l = new z[o.name](l || o.message, o), "stack" in o && _(l, "stack", { get: function() {
          return this.inner.stack;
        } }), l);
      }, Xr(kr), a(Pa, Object.freeze({ __proto__: null, Dexie: Pa, liveQuery: Ho, Entity: Vn, cmp: cr, PropModification: di, replacePrefix: function(o, l) {
        return new di({ replacePrefix: [o, l] });
      }, add: function(o) {
        return new di({ add: o });
      }, remove: function(o) {
        return new di({ remove: o });
      }, default: Pa, RangeSet: Tt, mergeRanges: yi, rangesOverlap: Io }), { default: Pa }), Pa;
    });
  })(js)), js.exports;
}
var N1 = O1();
const wf = D1(N1), Zo = /* @__PURE__ */ Symbol.for("Dexie"), zs = globalThis[Zo] || (globalThis[Zo] = wf);
if (wf.semVer !== zs.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${wf.semVer} and ${zs.semVer}`);
const { liveQuery: ME, mergeRanges: UE, rangesOverlap: WE, RangeSet: HE, cmp: VE, Entity: XE, PropModification: KE, replacePrefix: jE, add: GE, remove: zE, DexieYProvider: $E } = zs, Jo = ["accession", "book_name", "isbn", "book_type", "author", "published", "num_of_pages", "image_links", "language"], Da = new zs("SpreadsheetDatabase");
Da.version(1).stores({ spreadsheets: "&isbn, accession, book_name, book_type, author, published, num_of_pages, image_links, language" });
Da.version(1).stores({ settings: "key" });
var $s = {};
$s.version = "0.20.3";
var ca = 1200, R1 = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Rf = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, Pf = function(e) {
  R1.indexOf(e) != -1 && (Rf[0] = e);
};
function P1() {
  Pf(1252);
}
var pa = function(e) {
  ca = e, Pf(e);
};
function Bf() {
  pa(1200), P1();
}
function Qo(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function yu(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function B1(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function ku(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var Ti = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? yu(e.slice(2)) : r == 254 && t == 255 ? ku(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, Ds = function(r) {
  return String.fromCharCode(r);
}, ec = function(r) {
  return String.fromCharCode(r);
}, L1 = null, Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function qs(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), i = t >> 2, a = e.charCodeAt(u++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(c);
  return r;
}
function M1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(u++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(c);
  return r;
}
function U1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e[u++], i = t >> 2, a = e[u++], s = (t & 3) << 4 | a >> 4, n = e[u++], f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(c);
  return r;
}
function Qt(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0;
  if (e.slice(0, 5) == "data:") {
    var u = e.slice(0, 1024).indexOf(";base64,");
    u > -1 && (e = e.slice(u + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var u = 0; u < e.length; ) i = Rt.indexOf(e.charAt(u++)), s = Rt.indexOf(e.charAt(u++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Rt.indexOf(e.charAt(u++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), c = Rt.indexOf(e.charAt(u++)), n = (f & 3) << 6 | c, c !== 64 && (r += String.fromCharCode(n));
  return r;
}
var vr = (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), Na = (function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = true;
    }
    return e ? function(r, t) {
      return t ? new Buffer(r, t) : new Buffer(r);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})(), Ui = (function() {
  if (typeof Buffer > "u") return false;
  var e = Na([65, 0]);
  if (!e) return false;
  var r = e.toString("utf16le");
  return r.length == 1;
})();
function fn(e) {
  return vr ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function rc(e) {
  return vr ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Ht = function(r) {
  return vr ? Na(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function s0(e) {
  if (typeof ArrayBuffer > "u") return Ht(e);
  for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
  return r;
}
function Oa(e) {
  if (Array.isArray(e)) return e.map(function(a) {
    return String.fromCharCode(a);
  }).join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function W1(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function Lf(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return Lf(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var rt = vr ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Na(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(Ht(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function H1(e) {
  for (var r = [], t = 0, a = e.length + 250, n = fn(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048) n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = fn(65535), a = 65530);
  }
  return r.push(n.slice(0, t)), rt(r);
}
var jt = /\u0000/g, Si = /[\u0001-\u0006]/g;
function Jn(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function va(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ar("0", r - t.length) + t;
}
function Mf(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ar(" ", r - t.length) + t;
}
function Ys(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + Ar(" ", r - t.length);
}
function V1(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : Ar("0", r - t.length) + t;
}
function X1(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ar("0", r - t.length) + t;
}
var tc = Math.pow(2, 32);
function zn(e, r) {
  if (e > tc || e < -tc) return V1(e, r);
  var t = Math.round(e);
  return X1(t, r);
}
function Zs(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var ac = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], Z0 = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function K1(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var nr = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, nc = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, j1 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function Js(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, u = 0, h = 0, v = Math.floor(n); u < r && (v = Math.floor(n), f = v * s + i, h = v * u + c, !(n - v < 5e-8)); ) n = 1 / (n - v), i = s, s = f, c = u, u = h;
  if (h > r && (u > r ? (h = c, f = i) : (h = u, f = s)), !t) return [0, a * f, h];
  var d = Math.floor(a * f / h);
  return [d, a * f - d * h, h];
}
function G1(e) {
  var r = e.toPrecision(16);
  if (r.indexOf("e") > -1) {
    var t = r.slice(0, r.indexOf("e"));
    return t = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Ar("0", t.length - 15), t + r.slice(r.indexOf("e"));
  }
  var a = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Ar("0", r.length - 15);
  return Number(a);
}
function La(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  e = G1(e);
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), r && r.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60) s = t ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0) s = t ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), t && (i = Y1(c, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
function Uf(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function z1(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function $1(e) {
  var r = e < 0 ? 12 : 11, t = Uf(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function q1(e) {
  var r = Uf(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function Wi(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = $1(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = q1(e), Uf(z1(t.toUpperCase()));
}
function An(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Wi(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return ea(14, qr(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Y1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function Z1(e, r, t, a) {
  var n = "", i = 0, s = 0, f = t.y, c, u = 0;
  switch (e) {
    case 98:
      f = t.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          c = f % 100, u = 2;
          break;
        default:
          c = f % 1e4, u = 4;
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          c = t.m, u = r.length;
          break;
        case 3:
          return Z0[t.m - 1][1];
        case 5:
          return Z0[t.m - 1][0];
        default:
          return Z0[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          c = t.d, u = r.length;
          break;
        case 3:
          return ac[t.q][0];
        default:
          return ac[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          c = 1 + (t.H + 11) % 12, u = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          c = t.H, u = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          c = t.M, u = r.length;
          break;
        default:
          throw "bad minute format: " + r;
      }
      break;
    case 115:
      if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
      return t.u === 0 && (r == "s" || r == "ss") ? va(t.S, r.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (t.S + t.u)), i >= 60 * s && (i = 0), r === "s" ? i === 0 ? "0" : "" + i / s : (n = va(i, 2 + a), r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case "[h]":
        case "[hh]":
          c = t.D * 24 + t.H;
          break;
        case "[m]":
        case "[mm]":
          c = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case "[s]":
        case "[ss]":
          c = ((t.D * 24 + t.H) * 60 + t.M) * 60 + (a == 0 ? Math.round(t.S + t.u) : t.S);
          break;
        default:
          throw "bad abstime format: " + r;
      }
      u = r.length === 3 ? 1 : 2;
      break;
    case 101:
      c = f, u = 1;
      break;
  }
  var h = u > 0 ? va(c, u) : "";
  return h;
}
function Ua(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var Eu = /%/g;
function J1(e, r, t) {
  var a = r.replace(Eu, ""), n = r.length - a.length;
  return Ha(e, a, t * Math.pow(10, 2 * n)) + Ar("%", n);
}
function Q1(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Ha(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Tu(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Tu(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), t.indexOf("e") === -1) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i); t.substr(0, 2) === "0."; ) t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n), t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, u, h) {
      return c + u + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
var Su = /# (\?+)( ?)\/( ?)(\d+)/;
function ed(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Ar(" ", e[1].length + 1 + e[4].length) : Mf(s, e[1].length) + e[2] + "/" + e[3] + va(f, e[4].length));
}
function rd(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Ar(" ", e[1].length + 2 + e[4].length);
}
var bu = /^#*0*\.([0#]+)/, Fu = /\)[^)]*[0#]/, Au = /\(###\) ###\\?-####/;
function Wt(e) {
  for (var r = "", t, a = 0; a != e.length; ++a) switch (t = e.charCodeAt(a)) {
    case 35:
      break;
    case 63:
      r += " ";
      break;
    case 48:
      r += "0";
      break;
    default:
      r += String.fromCharCode(t);
  }
  return r;
}
function ic(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function sc(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function td(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function ad(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function na(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fu)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? na("n", a, t) : "(" + na("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return Q1(e, r, t);
  if (r.indexOf("%") !== -1) return J1(e, r, t);
  if (r.indexOf("E") !== -1) return Tu(r, t);
  if (r.charCodeAt(0) === 36) return "$" + na(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + zn(c, r.length);
  if (r.match(/^[#?]+$/)) return n = zn(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Su)) return ed(i, c, u);
  if (r.match(/^#+0+$/)) return u + zn(c, r.length - r.indexOf("0"));
  if (i = r.match(bu)) return n = ic(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Wt(i[1])).replace(/\.$/, "." + Wt(i[1])).replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Ar("0", Wt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + ic(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Ua(zn(c, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + na(e, r, -t) : Ua("" + (Math.floor(t) + td(t, i[1].length))) + "." + va(sc(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return na(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = Jn(na(e, r.replace(/[\\-]/g, ""), t)), s = 0, Jn(Jn(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Au)) return n = na(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = Js(c, Math.pow(10, s) - 1, false), n = "" + u, h = Ha("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Ys(f[2], s), h.length < i[4].length && (h = Wt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Js(c, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Mf(f[1], s) + i[2] + "/" + i[3] + Ys(f[2], s) : Ar(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = zn(t, 0), r.length <= n.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Wt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return s = sc(t, i[1].length), t < 0 ? "-" + na(e, r, -t) : Ua(ad(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? va(0, 3 - _.length) : "") + _;
  }) + "." + va(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return na(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Ua(zn(c, 0));
      return x !== "0" ? u + x : "";
    case "###,###.00":
      return na(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return na(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function nd(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Ha(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function id(e, r, t) {
  var a = r.replace(Eu, ""), n = r.length - a.length;
  return Ha(e, a, t * Math.pow(10, 2 * n)) + Ar("%", n);
}
function Cu(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Cu(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !t.match(/[Ee]/)) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i), t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, u, h) {
      return c + u + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
function Sa(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fu)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? Sa("n", a, t) : "(" + Sa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return nd(e, r, t);
  if (r.indexOf("%") !== -1) return id(e, r, t);
  if (r.indexOf("E") !== -1) return Cu(r, t);
  if (r.charCodeAt(0) === 36) return "$" + Sa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + va(c, r.length);
  if (r.match(/^[#?]+$/)) return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Su)) return rd(i, c, u);
  if (r.match(/^#+0+$/)) return u + va(c, r.length - r.indexOf("0"));
  if (i = r.match(bu)) return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Wt(i[1])).replace(/\.$/, "." + Wt(i[1])), n = n.replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Ar("0", Wt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Ua("" + c);
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + Sa(e, r, -t) : Ua("" + t) + "." + Ar("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return Sa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = Jn(Sa(e, r.replace(/[\\-]/g, ""), t)), s = 0, Jn(Jn(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Au)) return n = Sa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = Js(c, Math.pow(10, s) - 1, false), n = "" + u, h = Ha("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Ys(f[2], s), h.length < i[4].length && (h = Wt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Js(c, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Mf(f[1], s) + i[2] + "/" + i[3] + Ys(f[2], s) : Ar(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Wt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + Sa(e, r, -t) : Ua("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? va(0, 3 - _.length) : "") + _;
  }) + "." + va(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Ua("" + c);
      return x !== "0" ? u + x : "";
    default:
      if (r.match(/\.[0#?]*$/)) return Sa(e, r.slice(0, r.lastIndexOf(".")), t) + Wt(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function Ha(e, r, t) {
  return (t | 0) === t ? Sa(e, r, t) : na(e, r, t);
}
function sd(e) {
  for (var r = [], t = false, a = 0, n = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
    case 34:
      t = !t;
      break;
    case 95:
    case 42:
    case 92:
      ++a;
      break;
    case 59:
      r[r.length] = e.substr(n, a - n), n = a + 1;
  }
  if (r[r.length] = e.substr(n), t === true) throw new Error("Format |" + e + "| unterminated string ");
  return r;
}
var Du = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ua(e) {
  for (var r = 0, t = "", a = ""; r < e.length; ) switch (t = e.charAt(r)) {
    case "G":
      Zs(e, r) && (r += 6), r++;
      break;
    case '"':
      for (; e.charCodeAt(++r) !== 34 && r < e.length; ) ;
      ++r;
      break;
    case "\\":
      r += 2;
      break;
    case "_":
      r += 2;
      break;
    case "@":
      ++r;
      break;
    case "B":
    case "b":
      if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return true;
    case "M":
    case "D":
    case "Y":
    case "H":
    case "S":
    case "E":
    case "m":
    case "d":
    case "y":
    case "h":
    case "s":
    case "e":
    case "g":
      return true;
    case "A":
    case "a":
    case "\u4E0A":
      if (e.substr(r, 3).toUpperCase() === "A/P" || e.substr(r, 5).toUpperCase() === "AM/PM" || e.substr(r, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348") return true;
      ++r;
      break;
    case "[":
      for (a = t; e.charAt(r++) !== "]" && r < e.length; ) a += e.charAt(r);
      if (a.match(Du)) return true;
      break;
    case ".":
    case "0":
    case "#":
      for (; r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || t == "\\" && e.charAt(r + 1) == "-" && "0#".indexOf(e.charAt(r + 2)) > -1); ) ;
      break;
    case "?":
      for (; e.charAt(++r) === t; ) ;
      break;
    case "*":
      ++r, (e.charAt(r) == " " || e.charAt(r) == "*") && ++r;
      break;
    case "(":
    case ")":
      ++r;
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1; ) ;
      break;
    case " ":
      ++r;
      break;
    default:
      ++r;
      break;
  }
  return false;
}
function fd(e, r, t, a) {
  for (var n = [], i = "", s = 0, f = "", c = "t", u, h, v, d = "H"; s < e.length; ) switch (f = e.charAt(s)) {
    case "G":
      if (!Zs(e, s)) throw new Error("unrecognized character " + f + " in " + e);
      n[n.length] = { t: "G", v: "General" }, s += 7;
      break;
    case '"':
      for (i = ""; (v = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(v);
      n[n.length] = { t: "t", v: i }, ++s;
      break;
    case "\\":
      var x = e.charAt(++s), _ = x === "(" || x === ")" ? x : "t";
      n[n.length] = { t: _, v: x }, ++s;
      break;
    case "_":
      n[n.length] = { t: "t", v: " " }, s += 2;
      break;
    case "@":
      n[n.length] = { t: "T", v: r }, ++s;
      break;
    case "B":
    case "b":
      if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
        if (u == null && (u = La(r, t, e.charAt(s + 1) === "2"), u == null)) return "";
        n[n.length] = { t: "X", v: e.substr(s, 2) }, c = f, s += 2;
        break;
      }
    case "M":
    case "D":
    case "Y":
    case "H":
    case "S":
    case "E":
      f = f.toLowerCase();
    case "m":
    case "d":
    case "y":
    case "h":
    case "s":
    case "e":
    case "g":
      if (r < 0 || u == null && (u = La(r, t), u == null)) return "";
      for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
      f === "m" && c.toLowerCase() === "h" && (f = "M"), f === "h" && (f = d), n[n.length] = { t: f, v: i }, c = f;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: f, v: f };
      if (u == null && (u = La(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (u != null && (y.v = u.H >= 12 ? e.charAt(s + 2) : f), y.t = "T", d = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (u != null && (y.v = u.H >= 12 ? "PM" : "AM"), y.t = "T", s += 5, d = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (u != null && (y.v = u.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", s += 5, d = "h") : (y.t = "t", ++s), u == null && y.t === "T") return "";
      n[n.length] = y, c = f;
      break;
    case "[":
      for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
      if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
      if (i.match(Du)) {
        if (u == null && (u = La(r, t), u == null)) return "";
        n[n.length] = { t: "Z", v: i.toLowerCase() }, c = i.charAt(1);
      } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", ua(e) || (n[n.length] = { t: "t", v: i }));
      break;
    case ".":
      if (u != null) {
        for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; ) i += f;
        n[n.length] = { t: "s", v: i };
        break;
      }
    case "0":
    case "#":
      for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; ) i += f;
      n[n.length] = { t: "n", v: i };
      break;
    case "?":
      for (i = f; e.charAt(++s) === f; ) i += f;
      n[n.length] = { t: f, v: i }, c = f;
      break;
    case "*":
      ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
      break;
    case "(":
    case ")":
      n[n.length] = { t: a === 1 ? "t" : f, v: f }, ++s;
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s);
      n[n.length] = { t: "D", v: i };
      break;
    case " ":
      n[n.length] = { t: f, v: f }, ++s;
      break;
    case "$":
      n[n.length] = { t: "t", v: "$" }, ++s;
      break;
    default:
      if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(f) === -1) throw new Error("unrecognized character " + f + " in " + e);
      n[n.length] = { t: "t", v: f }, ++s;
      break;
  }
  var m = 0, g = 0, S;
  for (s = n.length - 1, c = "t"; s >= 0; --s) switch (n[s].t) {
    case "h":
    case "H":
      n[s].t = d, c = "h", m < 1 && (m = 1);
      break;
    case "s":
      (S = n[s].v.match(/\.0+$/)) && (g = Math.max(g, S[0].length - 1), m = 4), m < 3 && (m = 3);
    case "d":
    case "y":
    case "e":
      c = n[s].t;
      break;
    case "M":
      c = n[s].t, m < 2 && (m = 2);
      break;
    case "m":
      c === "s" && (n[s].t = "M", m < 2 && (m = 2));
      break;
    case "X":
      break;
    case "Z":
      m < 1 && n[s].v.match(/[Hh]/) && (m = 1), m < 2 && n[s].v.match(/[Mm]/) && (m = 2), m < 3 && n[s].v.match(/[Ss]/) && (m = 3);
  }
  var E;
  switch (m) {
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      u.u >= 0.5 && (u.u = 0, ++u.S), u.S >= 60 && (u.S = 0, ++u.M), u.M >= 60 && (u.M = 0, ++u.H), u.H >= 24 && (u.H = 0, ++u.D, E = La(u.D), E.u = u.u, E.S = u.S, E.M = u.M, E.H = u.H, u = E);
      break;
    case 4:
      switch (g) {
        case 1:
          u.u = Math.round(u.u * 10) / 10;
          break;
        case 2:
          u.u = Math.round(u.u * 100) / 100;
          break;
        case 3:
          u.u = Math.round(u.u * 1e3) / 1e3;
          break;
      }
      u.u >= 1 && (u.u = 0, ++u.S), u.S >= 60 && (u.S = 0, ++u.M), u.M >= 60 && (u.M = 0, ++u.H), u.H >= 24 && (u.H = 0, ++u.D, E = La(u.D), E.u = u.u, E.S = u.S, E.M = u.M, E.H = u.H, u = E);
      break;
  }
  var A = "", X;
  for (s = 0; s < n.length; ++s) switch (n[s].t) {
    case "t":
    case "T":
    case " ":
    case "D":
      break;
    case "X":
      n[s].v = "", n[s].t = ";";
      break;
    case "d":
    case "m":
    case "y":
    case "h":
    case "H":
    case "M":
    case "s":
    case "e":
    case "b":
    case "Z":
      n[s].v = Z1(n[s].t.charCodeAt(0), n[s].v, u, g), n[s].t = "t";
      break;
    case "n":
    case "?":
      for (X = s + 1; n[X] != null && ((f = n[X].t) === "?" || f === "D" || (f === " " || f === "t") && n[X + 1] != null && (n[X + 1].t === "?" || n[X + 1].t === "t" && n[X + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[X].v === "/" || n[X].v === " " && n[X + 1] != null && n[X + 1].t == "?")); ) n[s].v += n[X].v, n[X] = { v: "", t: ";" }, ++X;
      A += n[s].v, s = X - 1;
      break;
    case "G":
      n[s].t = "t", n[s].v = An(r, t);
      break;
  }
  var U = "", F, B;
  if (A.length > 0) {
    A.charCodeAt(0) == 40 ? (F = r < 0 && A.charCodeAt(0) === 45 ? -r : r, B = Ha("n", A, F)) : (F = r < 0 && a > 1 ? -r : r, B = Ha("n", A, F), F < 0 && n[0] && n[0].t == "t" && (B = B.substr(1), n[0].v = "-" + n[0].v)), X = B.length - 1;
    var L = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      L = s;
      break;
    }
    var K = n.length;
    if (L === n.length && B.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s) n[s] == null || "n?".indexOf(n[s].t) === -1 || (X >= n[s].v.length - 1 ? (X -= n[s].v.length, n[s].v = B.substr(X + 1, n[s].v.length)) : X < 0 ? n[s].v = "" : (n[s].v = B.substr(0, X + 1), X = -1), n[s].t = "t", K = s);
      X >= 0 && K < n.length && (n[K].v = B.substr(0, X + 1) + n[K].v);
    } else if (L !== n.length && B.indexOf("E") === -1) {
      for (X = B.indexOf(".") - 1, s = L; s >= 0; --s) if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
        for (h = n[s].v.indexOf(".") > -1 && s === L ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, U = n[s].v.substr(h + 1); h >= 0; --h) X >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#") && (U = B.charAt(X--) + U);
        n[s].v = U, n[s].t = "t", K = s;
      }
      for (X >= 0 && K < n.length && (n[K].v = B.substr(0, X + 1) + n[K].v), X = B.indexOf(".") + 1, s = L; s < n.length; ++s) if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== L)) {
        for (h = n[s].v.indexOf(".") > -1 && s === L ? n[s].v.indexOf(".") + 1 : 0, U = n[s].v.substr(0, h); h < n[s].v.length; ++h) X < B.length && (U += B.charAt(X++));
        n[s].v = U, n[s].t = "t", K = s;
      }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (F = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = Ha(n[s].t, n[s].v, F), n[s].t = "t");
  var G = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (G += n[s].v);
  return G;
}
var fc = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function oc(e, r) {
  if (r == null) return false;
  var t = parseFloat(r[2]);
  switch (r[1]) {
    case "=":
      if (e == t) return true;
      break;
    case ">":
      if (e > t) return true;
      break;
    case "<":
      if (e < t) return true;
      break;
    case "<>":
      if (e != t) return true;
      break;
    case ">=":
      if (e >= t) return true;
      break;
    case "<=":
      if (e <= t) return true;
      break;
  }
  return false;
}
function od(e, r) {
  var t = sd(e), a = t.length, n = t[a - 1].indexOf("@");
  if (a < 4 && n > -1 && --a, t.length > 4) throw new Error("cannot find right format for |" + t.join("|") + "|");
  if (typeof r != "number") return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
  switch (typeof r == "number" && !isFinite(r) && (r = 0), t.length) {
    case 1:
      t = n > -1 ? ["General", "General", "General", t[0]] : [t[0], t[0], t[0], "@"];
      break;
    case 2:
      t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
      break;
    case 3:
      t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
      break;
  }
  var i = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
  if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [a, i];
  if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
    var s = t[0].match(fc), f = t[1].match(fc);
    return oc(r, s) ? [a, t[0]] : oc(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function ea(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : nr)[e], a == null && (a = t.table && t.table[nc[e]] || nr[nc[e]]), a == null && (a = j1[e] || "General");
      break;
  }
  if (Zs(a, 0)) return An(r, t);
  r instanceof Date && (r = qr(r, t.date1904));
  var n = od(a, r);
  if (Zs(n[1])) return An(r, t);
  if (r === true) r = "TRUE";
  else if (r === false) r = "FALSE";
  else {
    if (r === "" || r == null) return "";
    if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return fd(n[1], r, t, n[0]);
}
function Iu(e, r) {
  if (typeof r != "number") {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (nr[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (nr[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return nr[r] = e, r;
}
function f0(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Iu(e[r], r);
}
function fi() {
  nr = K1();
}
var cd = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, Qs = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ud(e) {
  var r = typeof e == "number" ? nr[e] : e;
  return r = r.replace(Qs, "(\\d+)"), Qs.lastIndex = 0, new RegExp("^" + r + "$");
}
function ld(e, r, t) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, c = -1;
  (r.match(Qs) || []).forEach(function(v, d) {
    var x = parseInt(t[d + 1], 10);
    switch (v.toLowerCase().charAt(0)) {
      case "y":
        a = x;
        break;
      case "d":
        i = x;
        break;
      case "h":
        s = x;
        break;
      case "s":
        c = x;
        break;
      case "m":
        s >= 0 ? f = x : n = x;
        break;
    }
  }), Qs.lastIndex = 0, c >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var u = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  u.length == 7 && (u = "0" + u), u.length == 8 && (u = "20" + u);
  var h = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
  return s == -1 && f == -1 && c == -1 ? u : a == -1 && n == -1 && i == -1 ? h : u + "T" + h;
}
var hd = { "d.m": "d\\.m" };
function sn(e, r) {
  return Iu(hd[e] || e, r);
}
var cc = (function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var F = 0, B = new Array(256), L = 0; L != 256; ++L) F = L, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, B[L] = F;
    return typeof Int32Array < "u" ? new Int32Array(B) : B;
  }
  var t = r();
  function a(F) {
    var B = 0, L = 0, K = 0, G = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (K = 0; K != 256; ++K) G[K] = F[K];
    for (K = 0; K != 256; ++K) for (L = F[K], B = 256 + K; B < 4096; B += 256) L = G[B] = L >>> 8 ^ F[L & 255];
    var te = [];
    for (K = 1; K != 16; ++K) te[K - 1] = typeof Int32Array < "u" && typeof G.subarray == "function" ? G.subarray(K * 256, K * 256 + 256) : G.slice(K * 256, K * 256 + 256);
    return te;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], c = n[3], u = n[4], h = n[5], v = n[6], d = n[7], x = n[8], _ = n[9], y = n[10], m = n[11], g = n[12], S = n[13], E = n[14];
  function A(F, B) {
    for (var L = B ^ -1, K = 0, G = F.length; K < G; ) L = L >>> 8 ^ t[(L ^ F.charCodeAt(K++)) & 255];
    return ~L;
  }
  function X(F, B) {
    for (var L = B ^ -1, K = F.length - 15, G = 0; G < K; ) L = E[F[G++] ^ L & 255] ^ S[F[G++] ^ L >> 8 & 255] ^ g[F[G++] ^ L >> 16 & 255] ^ m[F[G++] ^ L >>> 24] ^ y[F[G++]] ^ _[F[G++]] ^ x[F[G++]] ^ d[F[G++]] ^ v[F[G++]] ^ h[F[G++]] ^ u[F[G++]] ^ c[F[G++]] ^ f[F[G++]] ^ s[F[G++]] ^ i[F[G++]] ^ t[F[G++]];
    for (K += 15; G < K; ) L = L >>> 8 ^ t[(L ^ F[G++]) & 255];
    return ~L;
  }
  function U(F, B) {
    for (var L = B ^ -1, K = 0, G = F.length, te = 0, de = 0; K < G; ) te = F.charCodeAt(K++), te < 128 ? L = L >>> 8 ^ t[(L ^ te) & 255] : te < 2048 ? (L = L >>> 8 ^ t[(L ^ (192 | te >> 6 & 31)) & 255], L = L >>> 8 ^ t[(L ^ (128 | te & 63)) & 255]) : te >= 55296 && te < 57344 ? (te = (te & 1023) + 64, de = F.charCodeAt(K++) & 1023, L = L >>> 8 ^ t[(L ^ (240 | te >> 8 & 7)) & 255], L = L >>> 8 ^ t[(L ^ (128 | te >> 2 & 63)) & 255], L = L >>> 8 ^ t[(L ^ (128 | de >> 6 & 15 | (te & 3) << 4)) & 255], L = L >>> 8 ^ t[(L ^ (128 | de & 63)) & 255]) : (L = L >>> 8 ^ t[(L ^ (224 | te >> 12 & 15)) & 255], L = L >>> 8 ^ t[(L ^ (128 | te >> 6 & 63)) & 255], L = L >>> 8 ^ t[(L ^ (128 | te & 63)) & 255]);
    return ~L;
  }
  return e.table = t, e.bstr = A, e.buf = X, e.str = U, e;
})(), ir = (function() {
  var r = {};
  r.version = "1.2.2";
  function t(b, P) {
    for (var C = b.split("/"), D = P.split("/"), N = 0, M = 0, fe = Math.min(C.length, D.length); N < fe; ++N) {
      if (M = C[N].length - D[N].length) return M;
      if (C[N] != D[N]) return C[N] < D[N] ? -1 : 1;
    }
    return C.length - D.length;
  }
  function a(b) {
    if (b.charAt(b.length - 1) == "/") return b.slice(0, -1).indexOf("/") === -1 ? b : a(b.slice(0, -1));
    var P = b.lastIndexOf("/");
    return P === -1 ? b : b.slice(0, P + 1);
  }
  function n(b) {
    if (b.charAt(b.length - 1) == "/") return n(b.slice(0, -1));
    var P = b.lastIndexOf("/");
    return P === -1 ? b : b.slice(P + 1);
  }
  function i(b, P) {
    typeof P == "string" && (P = new Date(P));
    var C = P.getHours();
    C = C << 6 | P.getMinutes(), C = C << 5 | P.getSeconds() >>> 1, b.write_shift(2, C);
    var D = P.getFullYear() - 1980;
    D = D << 4 | P.getMonth() + 1, D = D << 5 | P.getDate(), b.write_shift(2, D);
  }
  function s(b) {
    var P = b.read_shift(2) & 65535, C = b.read_shift(2) & 65535, D = /* @__PURE__ */ new Date(), N = C & 31;
    C >>>= 5;
    var M = C & 15;
    C >>>= 4, D.setMilliseconds(0), D.setFullYear(C + 1980), D.setMonth(M - 1), D.setDate(N);
    var fe = P & 31;
    P >>>= 5;
    var xe = P & 63;
    return P >>>= 6, D.setHours(P), D.setMinutes(xe), D.setSeconds(fe << 1), D;
  }
  function f(b) {
    ct(b, 0);
    for (var P = {}, C = 0; b.l <= b.length - 4; ) {
      var D = b.read_shift(2), N = b.read_shift(2), M = b.l + N, fe = {};
      switch (D) {
        case 21589:
          C = b.read_shift(1), C & 1 && (fe.mtime = b.read_shift(4)), N > 5 && (C & 2 && (fe.atime = b.read_shift(4)), C & 4 && (fe.ctime = b.read_shift(4))), fe.mtime && (fe.mt = new Date(fe.mtime * 1e3));
          break;
        case 1:
          {
            var xe = b.read_shift(4), ne = b.read_shift(4);
            fe.usz = ne * Math.pow(2, 32) + xe, xe = b.read_shift(4), ne = b.read_shift(4), fe.csz = ne * Math.pow(2, 32) + xe;
          }
          break;
      }
      b.l = M, P[D] = fe;
    }
    return P;
  }
  var c;
  function u() {
    return c || (c = dd);
  }
  function h(b, P) {
    if (b[0] == 80 && b[1] == 75) return Xe(b, P);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return Ya(b, P);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var C = 3, D = 512, N = 0, M = 0, fe = 0, xe = 0, ne = 0, ce = [], ie = b.slice(0, 512);
    ct(ie, 0);
    var Ee = v(ie);
    switch (C = Ee[0], C) {
      case 3:
        D = 512;
        break;
      case 4:
        D = 4096;
        break;
      case 0:
        if (Ee[1] == 0) return Xe(b, P);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + C);
    }
    D !== 512 && (ie = b.slice(0, D), ct(ie, 28));
    var Ne = b.slice(0, D);
    d(ie, C);
    var De = ie.read_shift(4, "i");
    if (C === 3 && De !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + De);
    ie.l += 4, fe = ie.read_shift(4, "i"), ie.l += 4, ie.chk("00100000", "Mini Stream Cutoff Size: "), xe = ie.read_shift(4, "i"), N = ie.read_shift(4, "i"), ne = ie.read_shift(4, "i"), M = ie.read_shift(4, "i");
    for (var we = -1, be = 0; be < 109 && (we = ie.read_shift(4, "i"), !(we < 0)); ++be) ce[be] = we;
    var or = x(b, D);
    m(ne, M, or, D, ce);
    var Or = S(or, fe, ce, D);
    fe < Or.length && (Or[fe].name = "!Directory"), N > 0 && xe !== de && (Or[xe].name = "!MiniFAT"), Or[ce[0]].name = "!FAT", Or.fat_addrs = ce, Or.ssz = D;
    var Wr = {}, it = [], Ra = [], Gt = [];
    E(fe, Or, or, it, N, Wr, Ra, xe), _(Ra, Gt, it), it.shift();
    var Za = { FileIndex: Ra, FullPaths: Gt };
    return P && P.raw && (Za.raw = { header: Ne, sectors: or }), Za;
  }
  function v(b) {
    if (b[b.l] == 80 && b[b.l + 1] == 75) return [0, 0];
    b.chk(Ve, "Header Signature: "), b.l += 16;
    var P = b.read_shift(2, "u");
    return [b.read_shift(2, "u"), P];
  }
  function d(b, P) {
    var C = 9;
    switch (b.l += 2, C = b.read_shift(2)) {
      case 9:
        if (P != 3) throw new Error("Sector Shift: Expected 9 saw " + C);
        break;
      case 12:
        if (P != 4) throw new Error("Sector Shift: Expected 12 saw " + C);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + C);
    }
    b.chk("0600", "Mini Sector Shift: "), b.chk("000000000000", "Reserved: ");
  }
  function x(b, P) {
    for (var C = Math.ceil(b.length / P) - 1, D = [], N = 1; N < C; ++N) D[N - 1] = b.slice(N * P, (N + 1) * P);
    return D[C - 1] = b.slice(C * P), D;
  }
  function _(b, P, C) {
    for (var D = 0, N = 0, M = 0, fe = 0, xe = 0, ne = C.length, ce = [], ie = []; D < ne; ++D) ce[D] = ie[D] = D, P[D] = C[D];
    for (; xe < ie.length; ++xe) D = ie[xe], N = b[D].L, M = b[D].R, fe = b[D].C, ce[D] === D && (N !== -1 && ce[N] !== N && (ce[D] = ce[N]), M !== -1 && ce[M] !== M && (ce[D] = ce[M])), fe !== -1 && (ce[fe] = D), N !== -1 && D != ce[D] && (ce[N] = ce[D], ie.lastIndexOf(N) < xe && ie.push(N)), M !== -1 && D != ce[D] && (ce[M] = ce[D], ie.lastIndexOf(M) < xe && ie.push(M));
    for (D = 1; D < ne; ++D) ce[D] === D && (M !== -1 && ce[M] !== M ? ce[D] = ce[M] : N !== -1 && ce[N] !== N && (ce[D] = ce[N]));
    for (D = 1; D < ne; ++D) if (b[D].type !== 0) {
      if (xe = D, xe != ce[xe]) do
        xe = ce[xe], P[D] = P[xe] + "/" + P[D];
      while (xe !== 0 && ce[xe] !== -1 && xe != ce[xe]);
      ce[D] = -1;
    }
    for (P[0] += "/", D = 1; D < ne; ++D) b[D].type !== 2 && (P[D] += "/");
  }
  function y(b, P, C) {
    for (var D = b.start, N = b.size, M = [], fe = D; C && N > 0 && fe >= 0; ) M.push(P.slice(fe * te, fe * te + te)), N -= te, fe = yn(C, fe * 4);
    return M.length === 0 ? oe(0) : rt(M).slice(0, b.size);
  }
  function m(b, P, C, D, N) {
    var M = de;
    if (b === de) {
      if (P !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var fe = C[b], xe = (D >>> 2) - 1;
      if (!fe) return;
      for (var ne = 0; ne < xe && (M = yn(fe, ne * 4)) !== de; ++ne) N.push(M);
      P >= 1 && m(yn(fe, D - 4), P - 1, C, D, N);
    }
  }
  function g(b, P, C, D, N) {
    var M = [], fe = [];
    N || (N = []);
    var xe = D - 1, ne = 0, ce = 0;
    for (ne = P; ne >= 0; ) {
      N[ne] = true, M[M.length] = ne, fe.push(b[ne]);
      var ie = C[Math.floor(ne * 4 / D)];
      if (ce = ne * 4 & xe, D < 4 + ce) throw new Error("FAT boundary crossed: " + ne + " 4 " + D);
      if (!b[ie]) break;
      ne = yn(b[ie], ce);
    }
    return { nodes: M, data: wc([fe]) };
  }
  function S(b, P, C, D) {
    var N = b.length, M = [], fe = [], xe = [], ne = [], ce = D - 1, ie = 0, Ee = 0, Ne = 0, De = 0;
    for (ie = 0; ie < N; ++ie) if (xe = [], Ne = ie + P, Ne >= N && (Ne -= N), !fe[Ne]) {
      ne = [];
      var we = [];
      for (Ee = Ne; Ee >= 0; ) {
        we[Ee] = true, fe[Ee] = true, xe[xe.length] = Ee, ne.push(b[Ee]);
        var be = C[Math.floor(Ee * 4 / D)];
        if (De = Ee * 4 & ce, D < 4 + De) throw new Error("FAT boundary crossed: " + Ee + " 4 " + D);
        if (!b[be] || (Ee = yn(b[be], De), we[Ee])) break;
      }
      M[Ne] = { nodes: xe, data: wc([ne]) };
    }
    return M;
  }
  function E(b, P, C, D, N, M, fe, xe) {
    for (var ne = 0, ce = D.length ? 2 : 0, ie = P[b].data, Ee = 0, Ne = 0, De; Ee < ie.length; Ee += 128) {
      var we = ie.slice(Ee, Ee + 128);
      ct(we, 64), Ne = we.read_shift(2), De = Gf(we, 0, Ne - ce), D.push(De);
      var be = { name: De, type: we.read_shift(1), color: we.read_shift(1), L: we.read_shift(4, "i"), R: we.read_shift(4, "i"), C: we.read_shift(4, "i"), clsid: we.read_shift(16), state: we.read_shift(4, "i"), start: 0, size: 0 }, or = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      or !== 0 && (be.ct = A(we, we.l - 8));
      var Or = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      Or !== 0 && (be.mt = A(we, we.l - 8)), be.start = we.read_shift(4, "i"), be.size = we.read_shift(4, "i"), be.size < 0 && be.start < 0 && (be.size = be.type = 0, be.start = de, be.name = ""), be.type === 5 ? (ne = be.start, N > 0 && ne !== de && (P[ne].name = "!StreamData")) : be.size >= 4096 ? (be.storage = "fat", P[be.start] === void 0 && (P[be.start] = g(C, be.start, P.fat_addrs, P.ssz)), P[be.start].name = be.name, be.content = P[be.start].data.slice(0, be.size)) : (be.storage = "minifat", be.size < 0 ? be.size = 0 : ne !== de && be.start !== de && P[ne] && (be.content = y(be, P[ne].data, (P[xe] || {}).data))), be.content && ct(be.content, 0), M[De] = be, fe.push(be);
    }
  }
  function A(b, P) {
    return new Date((Zt(b, P + 4) / 1e7 * Math.pow(2, 32) + Zt(b, P) / 1e7 - 11644473600) * 1e3);
  }
  function X(b, P) {
    return u(), h(c.readFileSync(b), P);
  }
  function U(b, P) {
    var C = P && P.type;
    switch (C || vr && Buffer.isBuffer(b) && (C = "buffer"), C || "base64") {
      case "file":
        return X(b, P);
      case "base64":
        return h(Ht(Qt(b)), P);
      case "binary":
        return h(Ht(b), P);
    }
    return h(b, P);
  }
  function F(b, P) {
    var C = P || {}, D = C.root || "Root Entry";
    if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
    b.FullPaths.length === 0 && (b.FullPaths[0] = D + "/", b.FileIndex[0] = { name: D, type: 5 }), C.CLSID && (b.FileIndex[0].clsid = C.CLSID), B(b);
  }
  function B(b) {
    var P = "Sh33tJ5";
    if (!ir.find(b, "/" + P)) {
      var C = oe(4);
      C[0] = 55, C[1] = C[3] = 50, C[2] = 54, b.FileIndex.push({ name: P, type: 2, content: C, size: 4, L: 69, R: 69, C: 69 }), b.FullPaths.push(b.FullPaths[0] + P), L(b);
    }
  }
  function L(b, P) {
    F(b);
    for (var C = false, D = false, N = b.FullPaths.length - 1; N >= 0; --N) {
      var M = b.FileIndex[N];
      switch (M.type) {
        case 0:
          D ? C = true : (b.FileIndex.pop(), b.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          D = true, isNaN(M.R * M.L * M.C) && (C = true), M.R > -1 && M.L > -1 && M.R == M.L && (C = true);
          break;
        default:
          C = true;
          break;
      }
    }
    if (!(!C && !P)) {
      var fe = new Date(1987, 1, 19), xe = 0, ne = Object.create ? /* @__PURE__ */ Object.create(null) : {}, ce = [];
      for (N = 0; N < b.FullPaths.length; ++N) ne[b.FullPaths[N]] = true, b.FileIndex[N].type !== 0 && ce.push([b.FullPaths[N], b.FileIndex[N]]);
      for (N = 0; N < ce.length; ++N) {
        var ie = a(ce[N][0]);
        for (D = ne[ie]; !D; ) {
          for (; a(ie) && !ne[a(ie)]; ) ie = a(ie);
          ce.push([ie, { name: n(ie).replace("/", ""), type: 1, clsid: $e, ct: fe, mt: fe, content: null }]), ne[ie] = true, ie = a(ce[N][0]), D = ne[ie];
        }
      }
      for (ce.sort(function(De, we) {
        return t(De[0], we[0]);
      }), b.FullPaths = [], b.FileIndex = [], N = 0; N < ce.length; ++N) b.FullPaths[N] = ce[N][0], b.FileIndex[N] = ce[N][1];
      for (N = 0; N < ce.length; ++N) {
        var Ee = b.FileIndex[N], Ne = b.FullPaths[N];
        if (Ee.name = n(Ne).replace("/", ""), Ee.L = Ee.R = Ee.C = -(Ee.color = 1), Ee.size = Ee.content ? Ee.content.length : 0, Ee.start = 0, Ee.clsid = Ee.clsid || $e, N === 0) Ee.C = ce.length > 1 ? 1 : -1, Ee.size = 0, Ee.type = 5;
        else if (Ne.slice(-1) == "/") {
          for (xe = N + 1; xe < ce.length && a(b.FullPaths[xe]) != Ne; ++xe) ;
          for (Ee.C = xe >= ce.length ? -1 : xe, xe = N + 1; xe < ce.length && a(b.FullPaths[xe]) != a(Ne); ++xe) ;
          Ee.R = xe >= ce.length ? -1 : xe, Ee.type = 1;
        } else a(b.FullPaths[N + 1] || "") == a(Ne) && (Ee.R = N + 1), Ee.type = 2;
      }
    }
  }
  function K(b, P) {
    var C = P || {};
    if (C.fileType == "mad") return hi(b, C);
    if (L(b), C.fileType === "zip") return ls(b, C);
    var D = (function(De) {
      for (var we = 0, be = 0, or = 0; or < De.FileIndex.length; ++or) {
        var Or = De.FileIndex[or];
        if (Or.content) {
          var Wr = Or.content.length;
          Wr > 0 && (Wr < 4096 ? we += Wr + 63 >> 6 : be += Wr + 511 >> 9);
        }
      }
      for (var it = De.FullPaths.length + 3 >> 2, Ra = we + 7 >> 3, Gt = we + 127 >> 7, Za = Ra + be + it + Gt, ra = Za + 127 >> 7, Vn = ra <= 109 ? 0 : Math.ceil((ra - 109) / 127); Za + ra + Vn + 127 >> 7 > ra; ) Vn = ++ra <= 109 ? 0 : Math.ceil((ra - 109) / 127);
      var cr = [1, Vn, ra, Gt, it, be, we, 0];
      return De.FileIndex[0].size = we << 6, cr[7] = (De.FileIndex[0].start = cr[0] + cr[1] + cr[2] + cr[3] + cr[4] + cr[5]) + (cr[6] + 7 >> 3), cr;
    })(b), N = oe(D[7] << 9), M = 0, fe = 0;
    {
      for (M = 0; M < 8; ++M) N.write_shift(1, ge[M]);
      for (M = 0; M < 8; ++M) N.write_shift(2, 0);
      for (N.write_shift(2, 62), N.write_shift(2, 3), N.write_shift(2, 65534), N.write_shift(2, 9), N.write_shift(2, 6), M = 0; M < 3; ++M) N.write_shift(2, 0);
      for (N.write_shift(4, 0), N.write_shift(4, D[2]), N.write_shift(4, D[0] + D[1] + D[2] + D[3] - 1), N.write_shift(4, 0), N.write_shift(4, 4096), N.write_shift(4, D[3] ? D[0] + D[1] + D[2] - 1 : de), N.write_shift(4, D[3]), N.write_shift(-4, D[1] ? D[0] - 1 : de), N.write_shift(4, D[1]), M = 0; M < 109; ++M) N.write_shift(-4, M < D[2] ? D[1] + M : -1);
    }
    if (D[1]) for (fe = 0; fe < D[1]; ++fe) {
      for (; M < 236 + fe * 127; ++M) N.write_shift(-4, M < D[2] ? D[1] + M : -1);
      N.write_shift(-4, fe === D[1] - 1 ? de : fe + 1);
    }
    var xe = function(De) {
      for (fe += De; M < fe - 1; ++M) N.write_shift(-4, M + 1);
      De && (++M, N.write_shift(-4, de));
    };
    for (fe = M = 0, fe += D[1]; M < fe; ++M) N.write_shift(-4, ke.DIFSECT);
    for (fe += D[2]; M < fe; ++M) N.write_shift(-4, ke.FATSECT);
    xe(D[3]), xe(D[4]);
    for (var ne = 0, ce = 0, ie = b.FileIndex[0]; ne < b.FileIndex.length; ++ne) ie = b.FileIndex[ne], ie.content && (ce = ie.content.length, !(ce < 4096) && (ie.start = fe, xe(ce + 511 >> 9)));
    for (xe(D[6] + 7 >> 3); N.l & 511; ) N.write_shift(-4, ke.ENDOFCHAIN);
    for (fe = M = 0, ne = 0; ne < b.FileIndex.length; ++ne) ie = b.FileIndex[ne], ie.content && (ce = ie.content.length, !(!ce || ce >= 4096) && (ie.start = fe, xe(ce + 63 >> 6)));
    for (; N.l & 511; ) N.write_shift(-4, ke.ENDOFCHAIN);
    for (M = 0; M < D[4] << 2; ++M) {
      var Ee = b.FullPaths[M];
      if (!Ee || Ee.length === 0) {
        for (ne = 0; ne < 17; ++ne) N.write_shift(4, 0);
        for (ne = 0; ne < 3; ++ne) N.write_shift(4, -1);
        for (ne = 0; ne < 12; ++ne) N.write_shift(4, 0);
        continue;
      }
      ie = b.FileIndex[M], M === 0 && (ie.start = ie.size ? ie.start - 1 : de);
      var Ne = M === 0 && C.root || ie.name;
      if (Ne.length > 31 && (console.error("Name " + Ne + " will be truncated to " + Ne.slice(0, 31)), Ne = Ne.slice(0, 31)), ce = 2 * (Ne.length + 1), N.write_shift(64, Ne, "utf16le"), N.write_shift(2, ce), N.write_shift(1, ie.type), N.write_shift(1, ie.color), N.write_shift(-4, ie.L), N.write_shift(-4, ie.R), N.write_shift(-4, ie.C), ie.clsid) N.write_shift(16, ie.clsid, "hex");
      else for (ne = 0; ne < 4; ++ne) N.write_shift(4, 0);
      N.write_shift(4, ie.state || 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, ie.start), N.write_shift(4, ie.size), N.write_shift(4, 0);
    }
    for (M = 1; M < b.FileIndex.length; ++M) if (ie = b.FileIndex[M], ie.size >= 4096) if (N.l = ie.start + 1 << 9, vr && Buffer.isBuffer(ie.content)) ie.content.copy(N, N.l, 0, ie.size), N.l += ie.size + 511 & -512;
    else {
      for (ne = 0; ne < ie.size; ++ne) N.write_shift(1, ie.content[ne]);
      for (; ne & 511; ++ne) N.write_shift(1, 0);
    }
    for (M = 1; M < b.FileIndex.length; ++M) if (ie = b.FileIndex[M], ie.size > 0 && ie.size < 4096) if (vr && Buffer.isBuffer(ie.content)) ie.content.copy(N, N.l, 0, ie.size), N.l += ie.size + 63 & -64;
    else {
      for (ne = 0; ne < ie.size; ++ne) N.write_shift(1, ie.content[ne]);
      for (; ne & 63; ++ne) N.write_shift(1, 0);
    }
    if (vr) N.l = N.length;
    else for (; N.l < N.length; ) N.write_shift(1, 0);
    return N;
  }
  function G(b, P) {
    var C = b.FullPaths.map(function(ne) {
      return ne.toUpperCase();
    }), D = C.map(function(ne) {
      var ce = ne.split("/");
      return ce[ce.length - (ne.slice(-1) == "/" ? 2 : 1)];
    }), N = false;
    P.charCodeAt(0) === 47 ? (N = true, P = C[0].slice(0, -1) + P) : N = P.indexOf("/") !== -1;
    var M = P.toUpperCase(), fe = N === true ? C.indexOf(M) : D.indexOf(M);
    if (fe !== -1) return b.FileIndex[fe];
    var xe = !M.match(Si);
    for (M = M.replace(jt, ""), xe && (M = M.replace(Si, "!")), fe = 0; fe < C.length; ++fe) if ((xe ? C[fe].replace(Si, "!") : C[fe]).replace(jt, "") == M || (xe ? D[fe].replace(Si, "!") : D[fe]).replace(jt, "") == M) return b.FileIndex[fe];
    return null;
  }
  var te = 64, de = -2, Ve = "d0cf11e0a1b11ae1", ge = [208, 207, 17, 224, 161, 177, 26, 225], $e = "00000000000000000000000000000000", ke = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: de, FREESECT: -1, HEADER_SIGNATURE: Ve, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: $e, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function Pe(b, P, C) {
    u();
    var D = K(b, C);
    c.writeFileSync(P, D);
  }
  function Qe(b) {
    for (var P = new Array(b.length), C = 0; C < b.length; ++C) P[C] = String.fromCharCode(b[C]);
    return P.join("");
  }
  function he(b, P) {
    var C = K(b, P);
    switch (P && P.type || "buffer") {
      case "file":
        return u(), c.writeFileSync(P.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : Qe(C);
      case "base64":
        return qs(typeof C == "string" ? C : Qe(C));
      case "buffer":
        if (vr) return Buffer.isBuffer(C) ? C : Na(C);
      case "array":
        return typeof C == "string" ? Ht(C) : C;
    }
    return C;
  }
  var sr;
  function Le(b) {
    try {
      var P = b.InflateRaw, C = new P();
      if (C._processChunk(new Uint8Array([3, 0]), C._finishFlushFlag), C.bytesRead) sr = b;
      else throw new Error("zlib does not expose bytesRead");
    } catch (D) {
      console.error("cannot use native zlib: " + (D.message || D));
    }
  }
  function Te(b, P) {
    if (!sr) return ya(b, P);
    var C = sr.InflateRaw, D = new C(), N = D._processChunk(b.slice(b.l), D._finishFlushFlag);
    return b.l += D.bytesRead, N;
  }
  function ye(b) {
    return sr ? sr.deflateRawSync(b) : dt(b);
  }
  var je = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ge = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ze = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function R(b) {
    var P = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (P >> 16 | P >> 8 | P) & 255;
  }
  for (var W = typeof Uint8Array < "u", z = W ? new Uint8Array(256) : [], V = 0; V < 256; ++V) z[V] = R(V);
  function ue(b, P) {
    var C = z[b & 255];
    return P <= 8 ? C >>> 8 - P : (C = C << 8 | z[b >> 8 & 255], P <= 16 ? C >>> 16 - P : (C = C << 8 | z[b >> 16 & 255], C >>> 24 - P));
  }
  function I(b, P) {
    var C = P & 7, D = P >>> 3;
    return (b[D] | (C <= 6 ? 0 : b[D + 1] << 8)) >>> C & 3;
  }
  function Ce(b, P) {
    var C = P & 7, D = P >>> 3;
    return (b[D] | (C <= 5 ? 0 : b[D + 1] << 8)) >>> C & 7;
  }
  function Ue(b, P) {
    var C = P & 7, D = P >>> 3;
    return (b[D] | (C <= 4 ? 0 : b[D + 1] << 8)) >>> C & 15;
  }
  function Se(b, P) {
    var C = P & 7, D = P >>> 3;
    return (b[D] | (C <= 3 ? 0 : b[D + 1] << 8)) >>> C & 31;
  }
  function ar(b, P) {
    var C = P & 7, D = P >>> 3;
    return (b[D] | (C <= 1 ? 0 : b[D + 1] << 8)) >>> C & 127;
  }
  function rr(b, P, C) {
    var D = P & 7, N = P >>> 3, M = (1 << C) - 1, fe = b[N] >>> D;
    return C < 8 - D || (fe |= b[N + 1] << 8 - D, C < 16 - D) || (fe |= b[N + 2] << 16 - D, C < 24 - D) || (fe |= b[N + 3] << 24 - D), fe & M;
  }
  function fr(b, P, C) {
    var D = P & 7, N = P >>> 3;
    return D <= 5 ? b[N] |= (C & 7) << D : (b[N] |= C << D & 255, b[N + 1] = (C & 7) >> 8 - D), P + 3;
  }
  function Cr(b, P, C) {
    var D = P & 7, N = P >>> 3;
    return C = (C & 1) << D, b[N] |= C, P + 1;
  }
  function kr(b, P, C) {
    var D = P & 7, N = P >>> 3;
    return C <<= D, b[N] |= C & 255, C >>>= 8, b[N + 1] = C, P + 8;
  }
  function Xr(b, P, C) {
    var D = P & 7, N = P >>> 3;
    return C <<= D, b[N] |= C & 255, C >>>= 8, b[N + 1] = C & 255, b[N + 2] = C >>> 8, P + 16;
  }
  function ze(b, P) {
    var C = b.length, D = 2 * C > P ? 2 * C : P + 5, N = 0;
    if (C >= P) return b;
    if (vr) {
      var M = rc(D);
      if (b.copy) b.copy(M);
      else for (; N < b.length; ++N) M[N] = b[N];
      return M;
    } else if (W) {
      var fe = new Uint8Array(D);
      if (fe.set) fe.set(b);
      else for (; N < C; ++N) fe[N] = b[N];
      return fe;
    }
    return b.length = D, b;
  }
  function Er(b) {
    for (var P = new Array(b), C = 0; C < b; ++C) P[C] = 0;
    return P;
  }
  function Oe(b, P, C) {
    var D = 1, N = 0, M = 0, fe = 0, xe = 0, ne = b.length, ce = W ? new Uint16Array(32) : Er(32);
    for (M = 0; M < 32; ++M) ce[M] = 0;
    for (M = ne; M < C; ++M) b[M] = 0;
    ne = b.length;
    var ie = W ? new Uint16Array(ne) : Er(ne);
    for (M = 0; M < ne; ++M) ce[N = b[M]]++, D < N && (D = N), ie[M] = 0;
    for (ce[0] = 0, M = 1; M <= D; ++M) ce[M + 16] = xe = xe + ce[M - 1] << 1;
    for (M = 0; M < ne; ++M) xe = b[M], xe != 0 && (ie[M] = ce[xe + 16]++);
    var Ee = 0;
    for (M = 0; M < ne; ++M) if (Ee = b[M], Ee != 0) for (xe = ue(ie[M], D) >> D - Ee, fe = (1 << D + 4 - Ee) - 1; fe >= 0; --fe) P[xe | fe << Ee] = Ee & 15 | M << 4;
    return D;
  }
  var Zr = W ? new Uint16Array(512) : Er(512), $r = W ? new Uint16Array(32) : Er(32);
  if (!W) {
    for (var Mr = 0; Mr < 512; ++Mr) Zr[Mr] = 0;
    for (Mr = 0; Mr < 32; ++Mr) $r[Mr] = 0;
  }
  (function() {
    for (var b = [], P = 0; P < 32; P++) b.push(5);
    Oe(b, $r, 32);
    var C = [];
    for (P = 0; P <= 143; P++) C.push(8);
    for (; P <= 255; P++) C.push(9);
    for (; P <= 279; P++) C.push(7);
    for (; P <= 287; P++) C.push(8);
    Oe(C, Zr, 288);
  })();
  var yt = (function() {
    for (var P = W ? new Uint8Array(32768) : [], C = 0, D = 0; C < Ze.length - 1; ++C) for (; D < Ze[C + 1]; ++D) P[D] = C;
    for (; D < 32768; ++D) P[D] = 29;
    var N = W ? new Uint8Array(259) : [];
    for (C = 0, D = 0; C < Ge.length - 1; ++C) for (; D < Ge[C + 1]; ++D) N[D] = C;
    function M(xe, ne) {
      for (var ce = 0; ce < xe.length; ) {
        var ie = Math.min(65535, xe.length - ce), Ee = ce + ie == xe.length;
        for (ne.write_shift(1, +Ee), ne.write_shift(2, ie), ne.write_shift(2, ~ie & 65535); ie-- > 0; ) ne[ne.l++] = xe[ce++];
      }
      return ne.l;
    }
    function fe(xe, ne) {
      for (var ce = 0, ie = 0, Ee = W ? new Uint16Array(32768) : []; ie < xe.length; ) {
        var Ne = Math.min(65535, xe.length - ie);
        if (Ne < 10) {
          for (ce = fr(ne, ce, +(ie + Ne == xe.length)), ce & 7 && (ce += 8 - (ce & 7)), ne.l = ce / 8 | 0, ne.write_shift(2, Ne), ne.write_shift(2, ~Ne & 65535); Ne-- > 0; ) ne[ne.l++] = xe[ie++];
          ce = ne.l * 8;
          continue;
        }
        ce = fr(ne, ce, +(ie + Ne == xe.length) + 2);
        for (var De = 0; Ne-- > 0; ) {
          var we = xe[ie];
          De = (De << 5 ^ we) & 32767;
          var be = -1, or = 0;
          if ((be = Ee[De]) && (be |= ie & -32768, be > ie && (be -= 32768), be < ie)) for (; xe[be + or] == xe[ie + or] && or < 250; ) ++or;
          if (or > 2) {
            we = N[or], we <= 22 ? ce = kr(ne, ce, z[we + 1] >> 1) - 1 : (kr(ne, ce, 3), ce += 5, kr(ne, ce, z[we - 23] >> 5), ce += 3);
            var Or = we < 8 ? 0 : we - 4 >> 2;
            Or > 0 && (Xr(ne, ce, or - Ge[we]), ce += Or), we = P[ie - be], ce = kr(ne, ce, z[we] >> 3), ce -= 3;
            var Wr = we < 4 ? 0 : we - 2 >> 1;
            Wr > 0 && (Xr(ne, ce, ie - be - Ze[we]), ce += Wr);
            for (var it = 0; it < or; ++it) Ee[De] = ie & 32767, De = (De << 5 ^ xe[ie]) & 32767, ++ie;
            Ne -= or - 1;
          } else we <= 143 ? we = we + 48 : ce = Cr(ne, ce, 1), ce = kr(ne, ce, z[we]), Ee[De] = ie & 32767, ++ie;
        }
        ce = kr(ne, ce, 0) - 1;
      }
      return ne.l = (ce + 7) / 8 | 0, ne.l;
    }
    return function(ne, ce) {
      return ne.length < 8 ? M(ne, ce) : fe(ne, ce);
    };
  })();
  function dt(b) {
    var P = oe(50 + Math.floor(b.length * 1.1)), C = yt(b, P);
    return P.slice(0, C);
  }
  var Ke = W ? new Uint16Array(32768) : Er(32768), yr = W ? new Uint16Array(32768) : Er(32768), Kr = W ? new Uint16Array(128) : Er(128), Gr = 1, xt = 1;
  function Je(b, P) {
    var C = Se(b, P) + 257;
    P += 5;
    var D = Se(b, P) + 1;
    P += 5;
    var N = Ue(b, P) + 4;
    P += 4;
    for (var M = 0, fe = W ? new Uint8Array(19) : Er(19), xe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ne = 1, ce = W ? new Uint8Array(8) : Er(8), ie = W ? new Uint8Array(8) : Er(8), Ee = fe.length, Ne = 0; Ne < N; ++Ne) fe[je[Ne]] = M = Ce(b, P), ne < M && (ne = M), ce[M]++, P += 3;
    var De = 0;
    for (ce[0] = 0, Ne = 1; Ne <= ne; ++Ne) ie[Ne] = De = De + ce[Ne - 1] << 1;
    for (Ne = 0; Ne < Ee; ++Ne) (De = fe[Ne]) != 0 && (xe[Ne] = ie[De]++);
    var we = 0;
    for (Ne = 0; Ne < Ee; ++Ne) if (we = fe[Ne], we != 0) {
      De = z[xe[Ne]] >> 8 - we;
      for (var be = (1 << 7 - we) - 1; be >= 0; --be) Kr[De | be << we] = we & 7 | Ne << 3;
    }
    var or = [];
    for (ne = 1; or.length < C + D; ) switch (De = Kr[ar(b, P)], P += De & 7, De >>>= 3) {
      case 16:
        for (M = 3 + I(b, P), P += 2, De = or[or.length - 1]; M-- > 0; ) or.push(De);
        break;
      case 17:
        for (M = 3 + Ce(b, P), P += 3; M-- > 0; ) or.push(0);
        break;
      case 18:
        for (M = 11 + ar(b, P), P += 7; M-- > 0; ) or.push(0);
        break;
      default:
        or.push(De), ne < De && (ne = De);
        break;
    }
    var Or = or.slice(0, C), Wr = or.slice(C);
    for (Ne = C; Ne < 286; ++Ne) Or[Ne] = 0;
    for (Ne = D; Ne < 30; ++Ne) Wr[Ne] = 0;
    return Gr = Oe(Or, Ke, 286), xt = Oe(Wr, yr, 30), P;
  }
  function wa(b, P) {
    if (b[0] == 3 && !(b[1] & 3)) return [fn(P), 2];
    for (var C = 0, D = 0, N = rc(P || 1 << 18), M = 0, fe = N.length >>> 0, xe = 0, ne = 0; (D & 1) == 0; ) {
      if (D = Ce(b, C), C += 3, D >>> 1) D >> 1 == 1 ? (xe = 9, ne = 5) : (C = Je(b, C), xe = Gr, ne = xt);
      else {
        C & 7 && (C += 8 - (C & 7));
        var ce = b[C >>> 3] | b[(C >>> 3) + 1] << 8;
        if (C += 32, ce > 0) for (!P && fe < M + ce && (N = ze(N, M + ce), fe = N.length); ce-- > 0; ) N[M++] = b[C >>> 3], C += 8;
        continue;
      }
      for (; ; ) {
        !P && fe < M + 32767 && (N = ze(N, M + 32767), fe = N.length);
        var ie = rr(b, C, xe), Ee = D >>> 1 == 1 ? Zr[ie] : Ke[ie];
        if (C += Ee & 15, Ee >>>= 4, (Ee >>> 8 & 255) === 0) N[M++] = Ee;
        else {
          if (Ee == 256) break;
          Ee -= 257;
          var Ne = Ee < 8 ? 0 : Ee - 4 >> 2;
          Ne > 5 && (Ne = 0);
          var De = M + Ge[Ee];
          Ne > 0 && (De += rr(b, C, Ne), C += Ne), ie = rr(b, C, ne), Ee = D >>> 1 == 1 ? $r[ie] : yr[ie], C += Ee & 15, Ee >>>= 4;
          var we = Ee < 4 ? 0 : Ee - 2 >> 1, be = Ze[Ee];
          for (we > 0 && (be += rr(b, C, we), C += we), !P && fe < De && (N = ze(N, De + 100), fe = N.length); M < De; ) N[M] = N[M - be], ++M;
        }
      }
    }
    return P ? [N, C + 7 >>> 3] : [N.slice(0, M), C + 7 >>> 3];
  }
  function ya(b, P) {
    var C = b.slice(b.l || 0), D = wa(C, P);
    return b.l += D[1], D[0];
  }
  function pn(b, P) {
    if (b) typeof console < "u" && console.error(P);
    else throw new Error(P);
  }
  function Xe(b, P) {
    var C = b;
    ct(C, 0);
    var D = [], N = [], M = { FileIndex: D, FullPaths: N };
    F(M, { root: P.root });
    for (var fe = C.length - 4; (C[fe] != 80 || C[fe + 1] != 75 || C[fe + 2] != 5 || C[fe + 3] != 6) && fe >= 0; ) --fe;
    C.l = fe + 4, C.l += 4;
    var xe = C.read_shift(2);
    C.l += 6;
    var ne = C.read_shift(4);
    for (C.l = ne, fe = 0; fe < xe; ++fe) {
      C.l += 20;
      var ce = C.read_shift(4), ie = C.read_shift(4), Ee = C.read_shift(2), Ne = C.read_shift(2), De = C.read_shift(2);
      C.l += 8;
      var we = C.read_shift(4), be = f(C.slice(C.l + Ee, C.l + Ee + Ne));
      C.l += Ee + Ne + De;
      var or = C.l;
      C.l = we + 4, be && be[1] && ((be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz)), ui(C, ce, ie, M, be), C.l = or;
    }
    return M;
  }
  function ui(b, P, C, D, N) {
    b.l += 2;
    var M = b.read_shift(2), fe = b.read_shift(2), xe = s(b);
    if (M & 8257) throw new Error("Unsupported ZIP encryption");
    for (var ne = b.read_shift(4), ce = b.read_shift(4), ie = b.read_shift(4), Ee = b.read_shift(2), Ne = b.read_shift(2), De = "", we = 0; we < Ee; ++we) De += String.fromCharCode(b[b.l++]);
    if (Ne) {
      var be = f(b.slice(b.l, b.l + Ne));
      (be[21589] || {}).mt && (xe = be[21589].mt), (be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz), N && ((N[21589] || {}).mt && (xe = N[21589].mt), (N[1] || {}).usz && (ie = N[1].usz), (N[1] || {}).csz && (ce = N[1].csz));
    }
    b.l += Ne;
    var or = b.slice(b.l, b.l + ce);
    switch (fe) {
      case 8:
        or = Te(b, ie);
        break;
      case 0:
        b.l += ce;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + fe);
    }
    var Or = false;
    M & 8 && (ne = b.read_shift(4), ne == 134695760 && (ne = b.read_shift(4), Or = true), ce = b.read_shift(4), ie = b.read_shift(4)), ce != P && pn(Or, "Bad compressed size: " + P + " != " + ce), ie != C && pn(Or, "Bad uncompressed size: " + C + " != " + ie), Ur(D, De, or, { unsafe: true, mt: xe });
  }
  function ls(b, P) {
    var C = P || {}, D = [], N = [], M = oe(1), fe = C.compression ? 8 : 0, xe = 0, ne = 0, ce = 0, ie = 0, Ee = 0, Ne = b.FullPaths[0], De = Ne, we = b.FileIndex[0], be = [], or = 0;
    for (ne = 1; ne < b.FullPaths.length; ++ne) if (De = b.FullPaths[ne].slice(Ne.length), we = b.FileIndex[ne], !(!we.size || !we.content || Array.isArray(we.content) && we.content.length == 0 || De == "Sh33tJ5")) {
      var Or = ie, Wr = oe(De.length);
      for (ce = 0; ce < De.length; ++ce) Wr.write_shift(1, De.charCodeAt(ce) & 127);
      Wr = Wr.slice(0, Wr.l), be[Ee] = typeof we.content == "string" ? cc.bstr(we.content, 0) : cc.buf(we.content, 0);
      var it = typeof we.content == "string" ? Ht(we.content) : we.content;
      fe == 8 && (it = ye(it)), M = oe(30), M.write_shift(4, 67324752), M.write_shift(2, 20), M.write_shift(2, xe), M.write_shift(2, fe), we.mt ? i(M, we.mt) : M.write_shift(4, 0), M.write_shift(-4, be[Ee]), M.write_shift(4, it.length), M.write_shift(4, we.content.length), M.write_shift(2, Wr.length), M.write_shift(2, 0), ie += M.length, D.push(M), ie += Wr.length, D.push(Wr), ie += it.length, D.push(it), M = oe(46), M.write_shift(4, 33639248), M.write_shift(2, 0), M.write_shift(2, 20), M.write_shift(2, xe), M.write_shift(2, fe), M.write_shift(4, 0), M.write_shift(-4, be[Ee]), M.write_shift(4, it.length), M.write_shift(4, we.content.length), M.write_shift(2, Wr.length), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(4, 0), M.write_shift(4, Or), or += M.l, N.push(M), or += Wr.length, N.push(Wr), ++Ee;
    }
    return M = oe(22), M.write_shift(4, 101010256), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, Ee), M.write_shift(2, Ee), M.write_shift(4, or), M.write_shift(4, ie), M.write_shift(2, 0), rt([rt(D), rt(N), M]);
  }
  var $a = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function hs(b, P) {
    if (b.ctype) return b.ctype;
    var C = b.name || "", D = C.match(/\.([^\.]+)$/);
    return D && $a[D[1]] || P && (D = (C = P).match(/[\.\\]([^\.\\])+$/), D && $a[D[1]]) ? $a[D[1]] : "application/octet-stream";
  }
  function li(b) {
    for (var P = qs(b), C = [], D = 0; D < P.length; D += 76) C.push(P.slice(D, D + 76));
    return C.join(`\r
`) + `\r
`;
  }
  function w0(b) {
    var P = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(ce) {
      var ie = ce.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (ie.length == 1 ? "0" + ie : ie);
    });
    P = P.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), P.charAt(0) == `
` && (P = "=0D" + P.slice(1)), P = P.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var C = [], D = P.split(`\r
`), N = 0; N < D.length; ++N) {
      var M = D[N];
      if (M.length == 0) {
        C.push("");
        continue;
      }
      for (var fe = 0; fe < M.length; ) {
        var xe = 76, ne = M.slice(fe, fe + xe);
        ne.charAt(xe - 1) == "=" ? xe-- : ne.charAt(xe - 2) == "=" ? xe -= 2 : ne.charAt(xe - 3) == "=" && (xe -= 3), ne = M.slice(fe, fe + xe), fe += xe, fe < M.length && (ne += "="), C.push(ne);
      }
    }
    return C.join(`\r
`);
  }
  function y0(b) {
    for (var P = [], C = 0; C < b.length; ++C) {
      for (var D = b[C]; C <= b.length && D.charAt(D.length - 1) == "="; ) D = D.slice(0, D.length - 1) + b[++C];
      P.push(D);
    }
    for (var N = 0; N < P.length; ++N) P[N] = P[N].replace(/[=][0-9A-Fa-f]{2}/g, function(M) {
      return String.fromCharCode(parseInt(M.slice(1), 16));
    });
    return Ht(P.join(`\r
`));
  }
  function qa(b, P, C) {
    for (var D = "", N = "", M = "", fe, xe = 0; xe < 10; ++xe) {
      var ne = P[xe];
      if (!ne || ne.match(/^\s*$/)) break;
      var ce = ne.match(/^([^:]*?):\s*([^\s].*)$/);
      if (ce) switch (ce[1].toLowerCase()) {
        case "content-location":
          D = ce[2].trim();
          break;
        case "content-type":
          M = ce[2].trim();
          break;
        case "content-transfer-encoding":
          N = ce[2].trim();
          break;
      }
    }
    switch (++xe, N.toLowerCase()) {
      case "base64":
        fe = Ht(Qt(P.slice(xe).join("")));
        break;
      case "quoted-printable":
        fe = y0(P.slice(xe));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + N);
    }
    var ie = Ur(b, D.slice(C.length), fe, { unsafe: true });
    M && (ie.ctype = M);
  }
  function Ya(b, P) {
    if (Qe(b.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var C = P && P.root || "", D = (vr && Buffer.isBuffer(b) ? b.toString("binary") : Qe(b)).split(`\r
`), N = 0, M = "";
    for (N = 0; N < D.length; ++N) if (M = D[N], !!/^Content-Location:/i.test(M) && (M = M.slice(M.indexOf("file")), C || (C = M.slice(0, M.lastIndexOf("/") + 1)), M.slice(0, C.length) != C)) for (; C.length > 0 && (C = C.slice(0, C.length - 1), C = C.slice(0, C.lastIndexOf("/") + 1), M.slice(0, C.length) != C); ) ;
    var fe = (D[1] || "").match(/boundary="(.*?)"/);
    if (!fe) throw new Error("MAD cannot find boundary");
    var xe = "--" + (fe[1] || ""), ne = [], ce = [], ie = { FileIndex: ne, FullPaths: ce };
    F(ie);
    var Ee, Ne = 0;
    for (N = 0; N < D.length; ++N) {
      var De = D[N];
      De !== xe && De !== xe + "--" || (Ne++ && qa(ie, D.slice(Ee, N), C), Ee = N);
    }
    return ie;
  }
  function hi(b, P) {
    var C = P || {}, D = C.boundary || "SheetJS";
    D = "------=" + D;
    for (var N = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + D.slice(2) + '"', "", "", ""], M = b.FullPaths[0], fe = M, xe = b.FileIndex[0], ne = 1; ne < b.FullPaths.length; ++ne) if (fe = b.FullPaths[ne].slice(M.length), xe = b.FileIndex[ne], !(!xe.size || !xe.content || fe == "Sh33tJ5")) {
      fe = fe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(or) {
        return "_x" + or.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(or) {
        return "_u" + or.charCodeAt(0).toString(16) + "_";
      });
      for (var ce = xe.content, ie = vr && Buffer.isBuffer(ce) ? ce.toString("binary") : Qe(ce), Ee = 0, Ne = Math.min(1024, ie.length), De = 0, we = 0; we <= Ne; ++we) (De = ie.charCodeAt(we)) >= 32 && De < 128 && ++Ee;
      var be = Ee >= Ne * 4 / 5;
      N.push(D), N.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + fe), N.push("Content-Transfer-Encoding: " + (be ? "quoted-printable" : "base64")), N.push("Content-Type: " + hs(xe, fe)), N.push(""), N.push(be ? w0(ie) : li(ie));
    }
    return N.push(D + `--\r
`), N.join(`\r
`);
  }
  function Wn(b) {
    var P = {};
    return F(P, b), P;
  }
  function Ur(b, P, C, D) {
    var N = D && D.unsafe;
    N || F(b);
    var M = !N && ir.find(b, P);
    if (!M) {
      var fe = b.FullPaths[0];
      P.slice(0, fe.length) == fe ? fe = P : (fe.slice(-1) != "/" && (fe += "/"), fe = (fe + P).replace("//", "/")), M = { name: n(P), type: 2 }, b.FileIndex.push(M), b.FullPaths.push(fe), N || ir.utils.cfb_gc(b);
    }
    return M.content = C, M.size = C ? C.length : 0, D && (D.CLSID && (M.clsid = D.CLSID), D.mt && (M.mt = D.mt), D.ct && (M.ct = D.ct)), M;
  }
  function nt(b, P) {
    F(b);
    var C = ir.find(b, P);
    if (C) {
      for (var D = 0; D < b.FileIndex.length; ++D) if (b.FileIndex[D] == C) return b.FileIndex.splice(D, 1), b.FullPaths.splice(D, 1), true;
    }
    return false;
  }
  function k0(b, P, C) {
    F(b);
    var D = ir.find(b, P);
    if (D) {
      for (var N = 0; N < b.FileIndex.length; ++N) if (b.FileIndex[N] == D) return b.FileIndex[N].name = n(C), b.FullPaths[N] = C, true;
    }
    return false;
  }
  function Hn(b) {
    L(b, true);
  }
  return r.find = G, r.read = U, r.parse = h, r.write = he, r.writeFile = Pe, r.utils = { cfb_new: Wn, cfb_add: Ur, cfb_del: nt, cfb_mov: k0, cfb_gc: Hn, ReadShift: Ci, CheckField: rl, prep_blob: ct, bconcat: rt, use_zlib: Le, _deflateRaw: dt, _inflateRaw: ya, consts: ke }, r;
})(), dd;
function uc(e) {
  return typeof e == "string" ? s0(e) : Array.isArray(e) ? W1(e) : e;
}
function ts(e, r, t) {
  if (typeof Deno < "u") {
    if (t && typeof r == "string") switch (t) {
      case "utf8":
        r = new TextEncoder(t).encode(r);
        break;
      case "binary":
        r = s0(r);
        break;
      default:
        throw new Error("Unsupported encoding " + t);
    }
    return Deno.writeFileSync(e, r);
  }
  var a = t == "utf8" ? Ia(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([uc(a)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(n, e);
    if (typeof saveAs < "u") return saveAs(n, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function") return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
        URL.revokeObjectURL(i);
      }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: true });
      var s = document.createElement("a");
      if (s.download != null) return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
        URL.revokeObjectURL(i);
      }, 6e4), i;
    } else if (typeof URL < "u" && !URL.createObjectURL && typeof chrome == "object") {
      var f = "data:application/octet-stream;base64," + U1(new Uint8Array(uc(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: true });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var c = File(e);
    return c.open("w"), c.encoding = "binary", Array.isArray(r) && (r = Oa(r)), c.write(r), c.close(), r;
  } catch (u) {
    if (!u.message || u.message.indexOf("onstruct") == -1) throw u;
  }
  throw new Error("cannot save file " + e);
}
function xd(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var r = File(e);
    r.open("r"), r.encoding = "binary";
    var t = r.read();
    return r.close(), t;
  } catch (a) {
    if (!a.message || a.message.indexOf("onstruct") == -1) throw a;
  }
  throw new Error("Cannot access file " + e);
}
function jr(e) {
  for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a) Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
  return t;
}
function lc(e, r) {
  for (var t = [], a = jr(e), n = 0; n !== a.length; ++n) t[e[a[n]][r]] == null && (t[e[a[n]][r]] = a[n]);
  return t;
}
function o0(e) {
  for (var r = [], t = jr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
  return r;
}
function c0(e) {
  for (var r = [], t = jr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
  return r;
}
function pd(e) {
  for (var r = [], t = jr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Ou = Date.UTC(1899, 11, 30, 0, 0, 0), vd = Date.UTC(1899, 11, 31, 0, 0, 0), md = Date.UTC(1904, 0, 1, 0, 0, 0);
function qr(e, r) {
  var t = e.getTime(), a = (t - Ou) / (1440 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Va(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Ou), r;
}
function gd(e) {
  var r = 0, t = 0, a = false, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != n.length; ++i) if (n[i]) {
    switch (t = 1, i > 3 && (a = true), n[i].slice(n[i].length - 1)) {
      case "Y":
        throw new Error("Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1));
      case "D":
        t *= 24;
      case "H":
        t *= 60;
      case "M":
        if (a) t *= 60;
        else throw new Error("Unsupported ISO Duration Field: M");
    }
    r += t * parseInt(n[i], 10);
  }
  return r;
}
var _d = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, wd = /^(\d+)-(\d+)-(\d+)$/, Nu = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function zr(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(_d);
  if (t) return new Date((r ? md : vd) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(wd), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(Nu), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function Cn(e, r) {
  if (vr && Buffer.isBuffer(e)) {
    if (r && Ui) {
      if (e[0] == 255 && e[1] == 254) return Ia(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Ia(ku(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Ia(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Ia(new TextDecoder("utf-16be").decode(e.slice(2)));
    }
    var t = { "\u20AC": "\x80", "\u201A": "\x82", \u0192: "\x83", "\u201E": "\x84", "\u2026": "\x85", "\u2020": "\x86", "\u2021": "\x87", "\u02C6": "\x88", "\u2030": "\x89", \u0160: "\x8A", "\u2039": "\x8B", \u0152: "\x8C", \u017D: "\x8E", "\u2018": "\x91", "\u2019": "\x92", "\u201C": "\x93", "\u201D": "\x94", "\u2022": "\x95", "\u2013": "\x96", "\u2014": "\x97", "\u02DC": "\x98", "\u2122": "\x99", \u0161: "\x9A", "\u203A": "\x9B", \u0153: "\x9C", \u017E: "\x9E", \u0178: "\x9F" };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
      return t[i] || i;
    });
  } catch {
  }
  var a = [], n = 0;
  try {
    for (n = 0; n < e.length - 65536; n += 65536) a.push(String.fromCharCode.apply(0, e.slice(n, n + 65536)));
    a.push(String.fromCharCode.apply(0, e.slice(n)));
  } catch {
    try {
      for (; n < e.length - 16384; n += 16384) a.push(String.fromCharCode.apply(0, e.slice(n, n + 16384)));
      a.push(String.fromCharCode.apply(0, e.slice(n)));
    } catch {
      for (; n != e.length; ++n) a.push(String.fromCharCode(e[n]));
    }
  }
  return a.join("");
}
function Hr(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = Hr(e[t]));
  return r;
}
function Ar(e, r) {
  for (var t = ""; t.length < r; ) t += e;
  return t;
}
function Jt(e) {
  var r = Number(e);
  if (!isNaN(r)) return isFinite(r) ? r : NaN;
  if (!/\d/.test(e)) return r;
  var t = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return t *= 100, "";
  });
  return !isNaN(r = Number(a)) || (a = a.replace(/[(]([^()]*)[)]/, function(n, i) {
    return t = -t, i;
  }), !isNaN(r = Number(a))) ? r / t : r;
}
var yd = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, kd = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, Ed = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, Td = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function Sd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function bd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var Fd = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Hi(e) {
  if (Ed.test(e)) return e.indexOf("Z") == -1 ? u0(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(yd);
  if (a) return Sd(a);
  if (a = t.match(kd), a) return bd(a);
  if (a = t.match(Nu), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(Td && e.indexOf("UTC") == -1 ? e + " UTC" : e), i = /* @__PURE__ */ new Date(NaN), s = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) return i;
  if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), r.length > 3 && Fd.indexOf(r) == -1) return i;
  } else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return i;
  return s < 0 || s > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? i : n;
}
var Ad = (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(t, a, n) {
    if (e || typeof a == "string") return t.split(a);
    for (var i = t.split(a), s = [i[0]], f = 1; f < i.length; ++f) s.push(n), s.push(i[f]);
    return s;
  };
})();
function Dn(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function u0(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function Wf(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function Hf(e, r, t) {
  for (var a = [], n = e.indexOf(r); n > -1; ) {
    var i = e.indexOf(t, n + r.length);
    if (i == -1) break;
    a.push(e.slice(n, i + t.length)), n = e.indexOf(r, i + t.length);
  }
  return a.length > 0 ? a : null;
}
function as(e, r, t) {
  var a = [], n = 0, i = e.indexOf(r);
  if (i == -1) return e;
  for (; i > -1; ) {
    a.push(e.slice(n, i));
    var s = e.indexOf(t, i + r.length);
    if (s == -1) break;
    (i = e.indexOf(r, n = s + t.length)) == -1 && a.push(e.slice(n));
  }
  return a.join("");
}
var Cd = { " ": 1, "	": 1, "\r": 1, "\n": 1, ">": 1 };
function kn(e, r) {
  for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !Cd[e.charAt(t + a)]; ) t = e.indexOf("<" + r, t + 1);
  if (t === -1) return null;
  var i = e.indexOf(">", t + r.length);
  if (i === -1) return null;
  var s = "</" + r + ">", f = e.indexOf(s, i);
  return f == -1 ? null : [e.slice(t, f + s.length), e.slice(i + 1, f)];
}
var gt = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = e[a];
    n || (e[a] = n = [new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + a + ">", "g")]), n[0].lastIndex = n[1].lastIndex = 0;
    var i = n[0].exec(t);
    if (!i) return null;
    var s = i.index, f = n[0].lastIndex;
    if (n[1].lastIndex = n[0].lastIndex, i = n[1].exec(t), !i) return null;
    var c = i.index, u = n[1].lastIndex;
    return [t.slice(s, u), t.slice(f, c)];
  };
})(), Ru = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + a + ">", "g")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var c = i[1].lastIndex;
      n.push(t.slice(f, c)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
})(), Dd = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + a + ">", "g")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s, f = 0, c = 0; s = i[0].exec(t); ) {
      if (f = s.index, n.push(t.slice(c, f)), c = f, i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      c = i[1].lastIndex, i[0].lastIndex = i[1].lastIndex;
    }
    return n.push(t.slice(c)), n.length == 0 ? "" : n.join("");
  };
})(), Id = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<" + a + "\\b[^<>]*>", "ig"), new RegExp("</" + a + ">", "ig")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var c = i[1].lastIndex;
      n.push(t.slice(f, c)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
})();
function Pu(e) {
  return e ? e.content && e.type ? Cn(e.content, true) : e.data ? Ti(e.data) : e.asNodeBuffer && vr ? Ti(e.asNodeBuffer().toString("binary")) : e.asBinary ? Ti(e.asBinary()) : e._data && e._data.getContent ? Ti(Cn(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Bu(e) {
  if (!e) return null;
  if (e.data) return Qo(e.data);
  if (e.asNodeBuffer && vr) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? Qo(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function Od(e) {
  return e && e.name.slice(-4) === ".bin" ? Bu(e) : Pu(e);
}
function ia(e, r) {
  for (var t = e.FullPaths || jr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function Vf(e, r) {
  var t = ia(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function ft(e, r, t) {
  if (!t) return Od(Vf(e, r));
  if (!r) return null;
  try {
    return ft(e, r);
  } catch {
    return null;
  }
}
function Vt(e, r, t) {
  if (!t) return Pu(Vf(e, r));
  if (!r) return null;
  try {
    return Vt(e, r);
  } catch {
    return null;
  }
}
function Nd(e, r, t) {
  return Bu(Vf(e, r));
}
function hc(e) {
  for (var r = e.FullPaths || jr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function lr(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return vr ? a = Na(t) : a = H1(t), ir.utils.cfb_add(e, r, a);
    }
    ir.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function Xf() {
  return ir.utils.cfb_new();
}
function Lu(e, r) {
  switch (r.type) {
    case "base64":
      return ir.read(e, { type: "base64" });
    case "binary":
      return ir.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return ir.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Zn(e, r) {
  if (e.charAt(0) == "/") return e.slice(1);
  var t = r.split("/");
  r.slice(-1) != "/" && t.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? t.pop() : n !== "." && t.push(n);
  }
  return t.join("/");
}
var at = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Mu = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, dc = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, Rd = /<[^<>]*>/g, Et = at.match(dc) ? dc : Rd, Pd = /<\w*:/, Bd = /<(\/?)\w+:/;
function Ye(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(Mu), f = 0, c = "", u = 0, h = "", v = "", d = 1;
  if (s) for (u = 0; u != s.length; ++u) {
    for (v = s[u].slice(1), i = 0; i != v.length && v.charCodeAt(i) !== 61; ++i) ;
    for (h = v.slice(0, i).trim(); v.charCodeAt(i + 1) == 32; ) ++i;
    for (d = (n = v.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, c = v.slice(i + 1 + d, v.length - d), f = 0; f != h.length && h.charCodeAt(f) !== 58; ++f) ;
    if (f === h.length) h.indexOf("_") > 0 && (h = h.slice(0, h.indexOf("_"))), a[h] = c, a[h.toLowerCase()] = c;
    else {
      var x = (f === 5 && h.slice(0, 5) === "xmlns" ? "xmlns" : "") + h.slice(f + 1);
      if (a[x] && h.slice(f - 3, f) == "ext") continue;
      a[x] = c, a[x.toLowerCase()] = c;
    }
  }
  return a;
}
function Ld(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (n === e.length) return a;
  var s = e.match(Mu), f = "", c = 0, u = "", h = "", v = 1;
  if (s) for (c = 0; c != s.length; ++c) {
    for (h = s[c].slice(1), i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i) ;
    for (u = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
    v = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(i + 1 + v, h.length - v), u.indexOf("_") > 0 && (u = u.slice(0, u.indexOf("_"))), a[u] = f, a[u.toLowerCase()] = f;
  }
  return a;
}
function la(e) {
  return e.replace(Bd, "<$1");
}
var Uu = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, Kf = o0(Uu), Fr = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, c) {
      return Uu[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f;
    }).replace(r, function(f, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
    var s = n.indexOf("]]>");
    return t(n.slice(0, i)) + n.slice(i + 9, s) + t(n.slice(s + 3));
  }
  return function(n, i) {
    var s = t(n);
    return i ? s.replace(/\r\n/g, `
`) : s;
  };
})(), jf = /[&<>'"]/g, Md = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function pr(e) {
  var r = e + "";
  return r.replace(jf, function(t) {
    return Kf[t];
  }).replace(Md, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function xc(e) {
  return pr(e).replace(/ /g, "_x0020_");
}
var Wu = /[\u0000-\u001f]/g;
function Ai(e) {
  var r = e + "";
  return r.replace(jf, function(t) {
    return Kf[t];
  }).replace(/\n/g, "<br/>").replace(Wu, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Ud(e) {
  var r = e + "";
  return r.replace(jf, function(t) {
    return Kf[t];
  }).replace(Wu, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var pc = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function r(t, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, r);
  };
})();
function Wd(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Rr(e) {
  switch (e) {
    case 1:
    case true:
    case "1":
    case "true":
      return true;
    case 0:
    case false:
    case "0":
    case "false":
      return false;
  }
  return false;
}
function J0(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0; t < e.length; ) {
    if (a = e.charCodeAt(t++), a < 128) {
      r += String.fromCharCode(a);
      continue;
    }
    if (n = e.charCodeAt(t++), a > 191 && a < 224) {
      s = (a & 31) << 6, s |= n & 63, r += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(t++), a < 240) {
      r += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(t++), f = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, r += String.fromCharCode(55296 + (f >>> 10 & 1023)), r += String.fromCharCode(56320 + (f & 1023));
  }
  return r;
}
function vc(e) {
  var r = fn(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function mc(e) {
  return Na(e, "binary").toString("utf8");
}
var Is = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Pr = vr && (mc(Is) == J0(Is) && mc || vc(Is) == J0(Is) && vc) || J0, Ia = vr ? function(e) {
  return Na(e, "utf8").toString("binary");
} : function(e) {
  for (var r = [], t = 0, a = 0, n = 0; t < e.length; ) switch (a = e.charCodeAt(t++), true) {
    case a < 128:
      r.push(String.fromCharCode(a));
      break;
    case a < 2048:
      r.push(String.fromCharCode(192 + (a >> 6))), r.push(String.fromCharCode(128 + (a & 63)));
      break;
    case (a >= 55296 && a < 57344):
      a -= 55296, n = e.charCodeAt(t++) - 56320 + (a << 10), r.push(String.fromCharCode(240 + (n >> 18 & 7))), r.push(String.fromCharCode(144 + (n >> 12 & 63))), r.push(String.fromCharCode(128 + (n >> 6 & 63))), r.push(String.fromCharCode(128 + (n & 63)));
      break;
    default:
      r.push(String.fromCharCode(224 + (a >> 12))), r.push(String.fromCharCode(128 + (a >> 6 & 63))), r.push(String.fromCharCode(128 + (a & 63)));
  }
  return r.join("");
}, Hu = (function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
})(), Hd = /<\/?(?:vt:)?variant>/g, Vd = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function gc(e, r) {
  var t = Ye(e), a = Ru(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(Hd, "").match(Vd);
    s && n.push({ v: Pr(s[2]), t: s[1] });
  }), n;
}
var Vu = /(^\s|\s$|\n)/;
function kt(e, r) {
  return "<" + e + (r.match(Vu) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function Vi(e) {
  return jr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function Ae(e, r, t) {
  return "<" + e + (t != null ? Vi(t) : "") + (r != null ? (r.match(Vu) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function yf(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (t) {
    if (r) throw t;
  }
  return "";
}
function Xd(e, r) {
  switch (typeof e) {
    case "string":
      var t = Ae("vt:lpwstr", pr(e));
      return t = t.replace(/&quot;/g, "_x0022_"), t;
    case "number":
      return Ae((e | 0) == e ? "vt:i4" : "vt:r8", pr(String(e)));
    case "boolean":
      return Ae("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return Ae("vt:filetime", yf(e));
  throw new Error("Unable to serialize " + e);
}
function l0(e) {
  if (vr && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Pr(Oa(Lf(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ot = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, ut = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" }, Rn = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"], Yt = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
function Kd(e, r) {
  for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15), n = e[r + 6] & 15, i = 5; i >= 0; --i) n = n * 256 + e[r + i];
  return a == 2047 ? n == 0 ? t * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
}
function jd(e, r, t) {
  var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -r : r;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(r) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
  e[t + 6] = (n & 15) << 4 | i & 15, e[t + 7] = n >> 4 | a;
}
var _c = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, wc = vr ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Na(r);
  })) : _c(e);
} : _c, yc = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Wa(e, n)));
  return a.join("").replace(jt, "");
}, Gf = vr ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !Ui ? yc(e, r, t) : e.toString("utf16le", r, t).replace(jt, "");
} : yc, kc = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Xu = vr ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : kc(e, r, t);
} : kc, Ec = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode($n(e, n)));
  return a.join("");
}, ns = vr ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Ec(r, t, a);
} : Ec, Ku = function(e, r) {
  var t = Zt(e, r);
  return t > 0 ? ns(e, r + 4, r + 4 + t - 1) : "";
}, ju = Ku, Gu = function(e, r) {
  var t = Zt(e, r);
  return t > 0 ? ns(e, r + 4, r + 4 + t - 1) : "";
}, zu = Gu, $u = function(e, r) {
  var t = 2 * Zt(e, r);
  return t > 0 ? ns(e, r + 4, r + 4 + t - 1) : "";
}, qu = $u, Yu = function(r, t) {
  var a = Zt(r, t);
  return a > 0 ? Gf(r, t + 4, t + 4 + a) : "";
}, Zu = Yu, Ju = function(e, r) {
  var t = Zt(e, r);
  return t > 0 ? ns(e, r + 4, r + 4 + t) : "";
}, Qu = Ju, el = function(e, r) {
  return Kd(e, r);
}, e0 = el, zf = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
vr && (ju = function(r, t) {
  if (!Buffer.isBuffer(r)) return Ku(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, zu = function(r, t) {
  if (!Buffer.isBuffer(r)) return Gu(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, qu = function(r, t) {
  if (!Buffer.isBuffer(r) || !Ui) return $u(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, Zu = function(r, t) {
  if (!Buffer.isBuffer(r) || !Ui) return Yu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, Qu = function(r, t) {
  if (!Buffer.isBuffer(r)) return Ju(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, e0 = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : el(r, t);
}, zf = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
var $n = function(e, r) {
  return e[r];
}, Wa = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, Gd = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, Zt = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, yn = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, zd = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function Ci(e, r) {
  var t = "", a, n, i = [], s, f, c, u;
  switch (r) {
    case "dbcs":
      if (u = this.l, vr && Buffer.isBuffer(this) && Ui) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (c = 0; c < e; ++c) t += String.fromCharCode(Wa(this, u)), u += 2;
      e *= 2;
      break;
    case "utf8":
      t = ns(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = Gf(this, this.l, this.l + e);
      break;
    case "wstr":
      return Ci.call(this, e, "dbcs");
    case "lpstr-ansi":
      t = ju(this, this.l), e = 4 + Zt(this, this.l);
      break;
    case "lpstr-cp":
      t = zu(this, this.l), e = 4 + Zt(this, this.l);
      break;
    case "lpwstr":
      t = qu(this, this.l), e = 4 + 2 * Zt(this, this.l);
      break;
    case "lpp4":
      e = 4 + Zt(this, this.l), t = Zu(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Zt(this, this.l), t = Qu(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = $n(this, this.l + e++)) !== 0; ) i.push(Ds(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Wa(this, this.l + e)) !== 0; ) i.push(Ds(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", u = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = $n(this, u), this.l = u + 1, f = Ci.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds(Wa(this, u))), u += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", u = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = $n(this, u), this.l = u + 1, f = Ci.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds($n(this, u))), u += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = $n(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? Gd : Wa)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? yn : zd)(this, this.l), this.l += 4, a) : (n = Zt(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f") return e == 8 ? n = e0(this, this.l) : n = e0([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Xu(this, this.l, e);
          break;
      }
  }
  return this.l += e, t;
}
var $d = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, qd = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, Yd = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255;
};
function Zd(e, r, t) {
  var a = 0, n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) Yd(this, r.charCodeAt(n), this.l + 2 * n);
    a = 2 * r.length;
  } else if (t === "sbcs" || t == "cpstr") {
    for (r = r.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != r.length; ++n) this[this.l + n] = r.charCodeAt(n) & 255;
    a = r.length;
  } else if (t === "hex") {
    for (; n < e; ++n) this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (t === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(r.length, e); ++n) {
      var s = r.charCodeAt(n);
      this[this.l++] = s & 255, this[this.l++] = s >> 8;
    }
    for (; this.l < i; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      a = 1, this[this.l] = r & 255;
      break;
    case 2:
      a = 2, this[this.l] = r & 255, r >>>= 8, this[this.l + 1] = r & 255;
      break;
    case 3:
      a = 3, this[this.l] = r & 255, r >>>= 8, this[this.l + 1] = r & 255, r >>>= 8, this[this.l + 2] = r & 255;
      break;
    case 4:
      a = 4, $d(this, r, this.l);
      break;
    case 8:
      if (a = 8, t === "f") {
        jd(this, r, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      a = 4, qd(this, r, this.l);
      break;
  }
  return this.l += a, this;
}
function rl(e, r) {
  var t = Xu(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function ct(e, r) {
  e.l = r, e.read_shift = Ci, e.chk = rl, e.write_shift = Zd;
}
function Lt(e, r) {
  e.l += r;
}
function oe(e) {
  var r = fn(e);
  return ct(r, 0), r;
}
function za(e, r, t) {
  if (e) {
    var a, n, i;
    ct(e, e.l || 0);
    for (var s = e.length, f = 0, c = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var u = Zi[f] || Zi[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      c = e.l + i;
      var h = u.f && u.f(e, i, t);
      if (e.l = c, r(h, u, f)) return;
    }
  }
}
function Pt() {
  var e = [], r = vr ? 16384 : 2048;
  vr && oe(r).copy;
  var t = function(h) {
    var v = oe(h);
    return ct(v, 0), v;
  }, a = t(r), n = function() {
    a && (a.l && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a)), a = null);
  }, i = function(h) {
    return a && h < a.length - a.l ? a : (n(), a = t(Math.max(h + 1, r)));
  }, s = function() {
    return n(), rt(e);
  }, f = function() {
    return n(), e;
  }, c = function(h) {
    n(), a = h, a.l == null && (a.l = a.length), i(r);
  };
  return { next: i, push: c, end: s, _bufs: e, end2: f };
}
function ve(e, r, t, a) {
  var n = +r, i;
  if (!isNaN(n)) {
    a || (a = Zi[n].p || (t || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f) if (a >= 128) s.write_shift(1, (a & 127) + 128), a >>= 7;
    else {
      s.write_shift(1, a);
      break;
    }
    a > 0 && zf(t) && e.push(t);
  }
}
function Di(e, r, t) {
  var a = Hr(e);
  if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
    for (; a.c >= 256; ) a.c -= 256;
    for (; a.r >= 65536; ) a.r -= 65536;
  }
  return a;
}
function Tc(e, r, t) {
  var a = Hr(e);
  return a.s = Di(a.s, r.s, t), a.e = Di(a.e, r.s, t), a;
}
function Ii(e, r) {
  if (e.cRel && e.c < 0) for (e = Hr(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Hr(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = wr(e);
  return !e.cRel && e.cRel != null && (t = ex(t)), !e.rRel && e.rRel != null && (t = Jd(t)), t;
}
function Q0(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + mr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + mr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + br(e.s.r) + ":" + (e.e.rRel ? "" : "$") + br(e.e.r) : Ii(e.s, r.biff) + ":" + Ii(e.e, r.biff);
}
function $f(e) {
  return parseInt(Qd(e), 10) - 1;
}
function br(e) {
  return "" + (e + 1);
}
function Jd(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Qd(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function qf(e) {
  for (var r = rx(e), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
  return t - 1;
}
function mr(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
  return r;
}
function ex(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function rx(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function tx(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Br(e) {
  for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function wr(e) {
  for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
  return t + (e.r + 1);
}
function wt(e) {
  var r = e.indexOf(":");
  return r == -1 ? { s: Br(e), e: Br(e) } : { s: Br(e.slice(0, r)), e: Br(e.slice(r + 1)) };
}
function dr(e, r) {
  return typeof r > "u" || typeof r == "number" ? dr(e.s, e.e) : (typeof e != "string" && (e = wr(e)), typeof r != "string" && (r = wr(r)), e == r ? e : e + ":" + r);
}
function Xi(e) {
  var r = wt(e);
  return "$" + mr(r.s.c) + "$" + br(r.s.r) + ":$" + mr(r.e.c) + "$" + br(r.e.r);
}
function Ki(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
}
function Dr(e) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, t = 0, a = 0, n = 0, i = e.length;
  for (t = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
  for (r.s.c = --t, t = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
  if (r.s.r = --t, a === i || n != 10) return r.e.c = r.s.c, r.e.r = r.s.r, r;
  for (++a, t = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
  for (r.e.c = --t, t = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
  return r.e.r = --t, r;
}
function Sc(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = ea(e.z, t ? qr(r) : r);
  } catch {
  }
  try {
    return e.w = ea((e.XF || {}).numFmtId || (t ? 14 : 0), t ? qr(r) : r);
  } catch {
    return "" + r;
  }
}
function ja(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? ht[e.v] || e.v : r == null ? Sc(e, e.v) : Sc(e, r));
}
function dn(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function ax(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function tl(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = e || (n ? { "!data": [] } : {});
  n && !i["!data"] && (i["!data"] = []);
  var s = 0, f = 0;
  if (i && a.origin != null) if (typeof a.origin == "number") s = a.origin;
  else {
    var c = typeof a.origin == "string" ? Br(a.origin) : a.origin;
    s = c.r, f = c.c;
  }
  var u = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var h = Dr(i["!ref"]);
    u.s.c = h.s.c, u.s.r = h.s.r, u.e.c = Math.max(u.e.c, h.e.c), u.e.r = Math.max(u.e.r, h.e.r), s == -1 && (u.e.r = s = i["!ref"] ? h.e.r + 1 : 0);
  } else u.s.c = u.e.c = u.s.r = u.e.r = 0;
  for (var v = [], d = false, x = 0; x != r.length; ++x) if (r[x]) {
    if (!Array.isArray(r[x])) throw new Error("aoa_to_sheet expects an array of arrays");
    var _ = s + x;
    n && (i["!data"][_] || (i["!data"][_] = []), v = i["!data"][_]);
    for (var y = r[x], m = 0; m != y.length; ++m) if (!(typeof y[m] > "u")) {
      var g = { v: y[m], t: "" }, S = f + m;
      if (u.s.r > _ && (u.s.r = _), u.s.c > S && (u.s.c = S), u.e.r < _ && (u.e.r = _), u.e.c < S && (u.e.c = S), d = true, y[m] && typeof y[m] == "object" && !Array.isArray(y[m]) && !(y[m] instanceof Date)) g = y[m];
      else if (Array.isArray(g.v) && (g.f = y[m][1], g.v = g.v[0]), g.v === null) if (g.f) g.t = "n";
      else if (a.nullError) g.t = "e", g.v = 0;
      else if (a.sheetStubs) g.t = "z";
      else continue;
      else typeof g.v == "number" ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || nr[14], a.UTC || (g.v = u0(g.v)), a.cellDates ? (g.t = "d", g.w = ea(g.z, qr(g.v, a.date1904))) : (g.t = "n", g.v = qr(g.v, a.date1904), g.w = ea(g.z, g.v))) : g.t = "s";
      if (n) v[S] && v[S].z && (g.z = v[S].z), v[S] = g;
      else {
        var E = mr(S) + (_ + 1);
        i[E] && i[E].z && (g.z = i[E].z), i[E] = g;
      }
    }
  }
  return d && u.s.c < 104e5 && (i["!ref"] = dr(u)), i;
}
function oi(e, r) {
  return tl(null, e, r);
}
function nx(e) {
  return e.read_shift(4, "i");
}
function ma(e, r) {
  return r || (r = oe(4)), r.write_shift(4, e), r;
}
function Bt(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function lt(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(4 + 2 * e.length)), r.write_shift(4, e.length), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
function ix(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function sx(e, r) {
  return r || (r = oe(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Yf(e, r) {
  var t = e.l, a = e.read_shift(1), n = Bt(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), c = 0; c != f; ++c) i.push(ix(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function fx(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(15 + 4 * e.t.length)), r.write_shift(1, 0), lt(e.t, r), t ? r.slice(0, r.l) : r;
}
var ox = Yf;
function cx(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(23 + 4 * e.t.length)), r.write_shift(1, 1), lt(e.t, r), r.write_shift(4, 1), sx({}, r), t ? r.slice(0, r.l) : r;
}
function ha(e) {
  var r = e.read_shift(4), t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: r, iStyleRef: t };
}
function Pn(e, r) {
  return r == null && (r = oe(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
function Bn(e) {
  var r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: r };
}
function Ln(e, r) {
  return r == null && (r = oe(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
var ux = Bt, al = lt;
function h0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function ji(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var lx = Bt, kf = h0, Zf = ji;
function d0(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? e0([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : yn(r, 0) >> 2;
  return t ? n / 100 : n;
}
function nl(e, r) {
  r == null && (r = oe(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function il(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function hx(e, r) {
  return r || (r = oe(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var Mn = il, ci = hx;
function Nt(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function In(e, r) {
  return (r || oe(8)).write_shift(8, e, "f");
}
function dx(e) {
  var r = {}, t = e.read_shift(1), a = t >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), c = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var u = En[n];
      u && (r.rgb = zi(u));
      break;
    case 2:
      r.rgb = zi([s, f, c]);
      break;
    case 3:
      r.theme = n;
      break;
  }
  return i != 0 && (r.tint = i > 0 ? i / 32767 : i / 32768), r;
}
function r0(e, r) {
  if (r || (r = oe(8)), !e || e.auto) return r.write_shift(4, 0), r.write_shift(4, 0), r;
  e.index != null ? (r.write_shift(1, 2), r.write_shift(1, e.index)) : e.theme != null ? (r.write_shift(1, 6), r.write_shift(1, e.theme)) : (r.write_shift(1, 5), r.write_shift(1, 0));
  var t = e.tint || 0;
  if (t > 0 ? t *= 32767 : t < 0 && (t *= 32768), r.write_shift(2, t), !e.rgb || e.theme != null) r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  else {
    var a = e.rgb || "FFFFFF";
    typeof a == "number" && (a = ("000000" + a.toString(16)).slice(-6)), r.write_shift(1, parseInt(a.slice(0, 2), 16)), r.write_shift(1, parseInt(a.slice(2, 4), 16)), r.write_shift(1, parseInt(a.slice(4, 6), 16)), r.write_shift(1, 255);
  }
  return r;
}
function xx(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = { fBold: r & 1, fItalic: r & 2, fUnderline: r & 4, fStrikeout: r & 8, fOutline: r & 16, fShadow: r & 32, fCondense: r & 64, fExtend: r & 128 };
  return t;
}
function px(e, r) {
  r || (r = oe(2));
  var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
function sl(e, r) {
  var t = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, a = e.read_shift(4);
  switch (a) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return t[e.read_shift(4)] || "";
  }
  if (a > 400) throw new Error("Unsupported Clipboard: " + a.toString(16));
  return e.l -= 4, e.read_shift(0, r == 1 ? "lpstr" : "lpwstr");
}
function vx(e) {
  return sl(e, 1);
}
function mx(e) {
  return sl(e, 2);
}
var Jf = 2, Kt = 3, Os = 11, bc = 12, t0 = 19, Ns = 64, gx = 65, _x = 71, wx = 4108, yx = 4126, mt = 80, fl = 81, kx = [mt, fl], Ef = { 1: { n: "CodePage", t: Jf }, 2: { n: "Category", t: mt }, 3: { n: "PresentationFormat", t: mt }, 4: { n: "ByteCount", t: Kt }, 5: { n: "LineCount", t: Kt }, 6: { n: "ParagraphCount", t: Kt }, 7: { n: "SlideCount", t: Kt }, 8: { n: "NoteCount", t: Kt }, 9: { n: "HiddenCount", t: Kt }, 10: { n: "MultimediaClipCount", t: Kt }, 11: { n: "ScaleCrop", t: Os }, 12: { n: "HeadingPairs", t: wx }, 13: { n: "TitlesOfParts", t: yx }, 14: { n: "Manager", t: mt }, 15: { n: "Company", t: mt }, 16: { n: "LinksUpToDate", t: Os }, 17: { n: "CharacterCount", t: Kt }, 19: { n: "SharedDoc", t: Os }, 22: { n: "HyperlinksChanged", t: Os }, 23: { n: "AppVersion", t: Kt, p: "version" }, 24: { n: "DigSig", t: gx }, 26: { n: "ContentType", t: mt }, 27: { n: "ContentStatus", t: mt }, 28: { n: "Language", t: mt }, 29: { n: "Version", t: mt }, 255: {}, 2147483648: { n: "Locale", t: t0 }, 2147483651: { n: "Behavior", t: t0 }, 1919054434: {} }, Tf = { 1: { n: "CodePage", t: Jf }, 2: { n: "Title", t: mt }, 3: { n: "Subject", t: mt }, 4: { n: "Author", t: mt }, 5: { n: "Keywords", t: mt }, 6: { n: "Comments", t: mt }, 7: { n: "Template", t: mt }, 8: { n: "LastAuthor", t: mt }, 9: { n: "RevNumber", t: mt }, 10: { n: "EditTime", t: Ns }, 11: { n: "LastPrinted", t: Ns }, 12: { n: "CreatedDate", t: Ns }, 13: { n: "ModifiedDate", t: Ns }, 14: { n: "PageCount", t: Kt }, 15: { n: "WordCount", t: Kt }, 16: { n: "CharCount", t: Kt }, 17: { n: "Thumbnail", t: _x }, 18: { n: "Application", t: mt }, 19: { n: "DocSecurity", t: Kt }, 255: {}, 2147483648: { n: "Locale", t: t0 }, 2147483651: { n: "Behavior", t: t0 }, 1919054434: {} }, Fc = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, Ex = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Tx(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var Sx = Tx([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), En = Hr(Sx), ht = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, _t = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, Qf = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"], Sf = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" }, Rs = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
function eo() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function bx(e) {
  var r = eo();
  if (!e || !e.match) return r;
  var t = {};
  if ((e.match(Et) || []).forEach(function(a) {
    var n = Ye(a);
    switch (n[0].replace(Pd, "<")) {
      case "<?xml":
        break;
      case "<Types":
        r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        t[n.Extension.toLowerCase()] = n.ContentType;
        break;
      case "<Override":
        r[Sf[n.ContentType]] !== void 0 && r[Sf[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== ut.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function ol(e, r, t) {
  var a = pd(Sf), n = [], i;
  n[n.length] = at, n[n.length] = Ae("Types", null, { xmlns: ut.CT, "xmlns:xsd": ut.xsd, "xmlns:xsi": ut.xsi }), n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(u) {
    return Ae("Default", null, { Extension: u[0], ContentType: u[1] });
  }));
  var s = function(u) {
    e[u] && e[u].length > 0 && (i = e[u][0], n[n.length] = Ae("Override", null, { PartName: (i[0] == "/" ? "" : "/") + i, ContentType: Rs[u][r.bookType] || Rs[u].xlsx }));
  }, f = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: Rs[u][r.bookType] || Rs[u].xlsx });
    });
  }, c = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: a[u][0] });
    });
  };
  return s("workbooks"), f("sheets"), f("charts"), c("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(c), c("vba"), c("comments"), c("threadedcomments"), c("drawings"), f("metadata"), c("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var _r = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
function Gi(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function Oi(e, r) {
  var t = { "!id": {} };
  if (!e) return t;
  r.charAt(0) !== "/" && (r = "/" + r);
  var a = {};
  return (e.match(Et) || []).forEach(function(n) {
    var i = Ye(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = Fr(i.Target), s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : Zn(i.Target, r);
      t[f] = s, a[i.Id] = s;
    }
  }), t["!id"] = a, t;
}
function Qn(e) {
  var r = [at, Ae("Relationships", null, { xmlns: ut.RELS })];
  return jr(e["!id"]).forEach(function(t) {
    r[r.length] = Ae("Relationship", null, e["!id"][t]);
  }), r.length > 2 && (r[r.length] = "</Relationships>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Nr(e, r, t, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), r < 0) for (r = e["!idx"]; e["!id"]["rId" + r]; ++r) ;
  if (e["!idx"] = r + 1, n.Id = "rId" + r, n.Type = a, n.Target = t, [_r.HLINK, _r.XPATH, _r.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, r;
}
var Fx = "application/vnd.oasis.opendocument.spreadsheet";
function Ax(e, r) {
  for (var t = l0(e), a, n; a = ot.exec(t); ) switch (a[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (n = Ye(a[0], false), n.path == "/" && n.type !== Fx) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    case "algorithm":
    case "start-key-generation":
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (r && r.WTF) throw a;
  }
}
function Cx(e) {
  var r = [at];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t) r.push('  <manifest:file-entry manifest:full-path="' + e[t][0] + '" manifest:media-type="' + e[t][1] + `"/>
`);
  return r.push("</manifest:manifest>"), r.join("");
}
function Ac(e, r, t) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function Dx(e, r) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function Ix(e) {
  var r = [at];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t) r.push(Ac(e[t][0], e[t][1])), r.push(Dx("", e[t][0]));
  return r.push(Ac("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function cl(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + $s.version + "</meta:generator></office:meta></office:document-meta>";
}
var Xa = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function ul(e) {
  var r = {};
  e = Pr(e);
  for (var t = 0; t < Xa.length; ++t) {
    var a = Xa[t], n = kn(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = Fr(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = zr(r[a[1]]));
  }
  return r;
}
function ef(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = pr(r), a[a.length] = t ? Ae(e, r, t) : kt(e, r));
}
function ll(e, r) {
  var t = r || {}, a = [at, Ae("cp:coreProperties", null, { "xmlns:cp": ut.CORE_PROPS, "xmlns:dc": ut.dc, "xmlns:dcterms": ut.dcterms, "xmlns:dcmitype": ut.dcmitype, "xmlns:xsi": ut.xsi })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && ef("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : yf(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && ef("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : yf(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != Xa.length; ++i) {
    var s = Xa[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === true ? f = "1" : f === false ? f = "0" : typeof f == "number" && (f = String(f)), f != null && ef(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var Tn = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]], hl = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function dl(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = gc(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(h) {
    return { v: h };
  }));
  var s = typeof r == "string" ? gc(r, a).map(function(h) {
    return h.v;
  }) : r, f = 0, c = 0;
  if (s.length > 0) for (var u = 0; u !== n.length; u += 2) {
    switch (c = +n[u + 1].v, n[u].v) {
      case "Worksheets":
      case "\u5DE5\u4F5C\u8868":
      case "\u041B\u0438\u0441\u0442\u044B":
      case "\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0639\u0645\u0644":
      case "\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8":
      case "\u05D2\u05DC\u05D9\u05D5\u05E0\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4":
      case "Arbeitsbl\xE4tter":
      case "\xC7al\u0131\u015Fma Sayfalar\u0131":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de c\xE1lculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de c\xE1lculo":
      case "Werkbladen":
        t.Worksheets = c, t.SheetNames = s.slice(f, f + c);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "\u540D\u524D\u4ED8\u304D\u4E00\u89A7":
      case "Benannte Bereiche":
      case "Navngivne omr\xE5der":
        t.NamedRanges = c, t.DefinedNames = s.slice(f, f + c);
        break;
      case "Charts":
      case "Diagramme":
        t.Chartsheets = c, t.ChartNames = s.slice(f, f + c);
        break;
    }
    f += c;
  }
}
function Ox(e, r, t) {
  var a = {};
  return r || (r = {}), e = Pr(e), Tn.forEach(function(n) {
    var i = (gt(e, n[0]) || [])[1];
    switch (n[2]) {
      case "string":
        i && (r[n[1]] = Fr(i));
        break;
      case "bool":
        r[n[1]] = i === "true";
        break;
      case "raw":
        var s = kn(e, n[0]);
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && dl(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function xl(e) {
  var r = [], t = Ae;
  return e || (e = {}), e.Application = "SheetJS", r[r.length] = at, r[r.length] = Ae("Properties", null, { xmlns: ut.EXT_PROPS, "xmlns:vt": ut.vt }), Tn.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = pr(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (r[r.length] = t(a[0], n));
    }
  }), r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + pr(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var Nx = /<[^<>]+>[^<]*/g;
function Rx(e, r) {
  var t = {}, a = "", n = e.match(Nx);
  if (n) for (var i = 0; i != n.length; ++i) {
    var s = n[i], f = Ye(s);
    switch (la(f[0])) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        a = Fr(f.name);
        break;
      case "</property>":
        a = null;
        break;
      default:
        if (s.indexOf("<vt:") === 0) {
          var c = s.split(">"), u = c[0].slice(4), h = c[1];
          switch (u) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              t[a] = Fr(h);
              break;
            case "bool":
              t[a] = Rr(h);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              t[a] = parseInt(h, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              t[a] = parseFloat(h);
              break;
            case "filetime":
            case "date":
              t[a] = zr(h);
              break;
            case "cy":
            case "error":
              t[a] = Fr(h);
              break;
            default:
              if (u.slice(-1) == "/") break;
              r.WTF && typeof console < "u" && console.warn("Unexpected", s, u, c);
          }
        } else if (s.slice(0, 2) !== "</") {
          if (r.WTF) throw new Error(s);
        }
    }
  }
  return t;
}
function pl(e) {
  var r = [at, Ae("Properties", null, { xmlns: ut.CUST_PROPS, "xmlns:vt": ut.vt })];
  if (!e) return r.join("");
  var t = 1;
  return jr(e).forEach(function(n) {
    ++t, r[r.length] = Ae("property", Xd(e[n]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t, name: pr(n) });
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var bf = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, rf;
function Px(e, r, t) {
  rf || (rf = o0(bf)), r = rf[r] || r, e[r] = t;
}
function Bx(e, r) {
  var t = [];
  return jr(bf).map(function(a) {
    for (var n = 0; n < Xa.length; ++n) if (Xa[n][1] == a) return Xa[n];
    for (n = 0; n < Tn.length; ++n) if (Tn[n][1] == a) return Tn[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      a[2] === "date" && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), typeof n == "number" ? n = String(n) : n === true || n === false ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(kt(bf[a[1]] || a[1], n));
    }
  }), Ae("DocumentProperties", t.join(""), { xmlns: Yt.o });
}
function Lx(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && jr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < Xa.length; ++s) if (i == Xa[s][1]) return;
      for (s = 0; s < Tn.length; ++s) if (i == Tn[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], c = "string";
      typeof f == "number" ? (c = "float", f = String(f)) : f === true || f === false ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(Ae(xc(i), f, { "dt:dt": c }));
    }
  }), r && jr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === true || s === false ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(Ae(xc(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Yt.o + '">' + n.join("") + "</" + a + ">";
}
function ro(e) {
  var r = e.read_shift(4), t = e.read_shift(4);
  return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Mx(e) {
  var r = typeof e == "string" ? new Date(Date.parse(e)) : e, t = r.getTime() / 1e3 + 11644473600, a = t % Math.pow(2, 32), n = (t - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = oe(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function Ux(e, r, t) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (t) for (; e.l - a & 3; ) ++e.l;
  return n;
}
function Wx(e, r, t) {
  var a = e.read_shift(0, "lpwstr");
  return a;
}
function vl(e, r, t) {
  return r === 31 ? Wx(e) : Ux(e, r, t);
}
function Ni(e, r, t) {
  return vl(e, r, t === false ? 0 : 4);
}
function Hx(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return vl(e, r, 0);
}
function Vx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace(jt, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function Xx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(jt, "");
  return t;
}
function Kx(e) {
  var r = e.l, t = a0(e, fl);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = a0(e, Kt);
  return [t, a];
}
function jx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(Kx(e));
  return t;
}
function Cc(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace(jt, "").replace(Si, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function ml(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function Gx(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function a0(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== bc && a !== r && kx.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126)) throw new Error("Expected type " + r + " saw " + a);
  switch (r === bc ? a : r) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      e.l += 4, val = Ni(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 31:
      e.l += 4, val = Ni(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 64:
      return ro(e);
    case 65:
      return ml(e);
    case 71:
      return Gx(e);
    case 80:
      return Ni(e, a, !i.raw).replace(jt, "");
    case 81:
      return Hx(e, a).replace(jt, "");
    case 4108:
      return jx(e);
    case 4126:
    case 4127:
      return a == 4127 ? Vx(e) : Xx(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Dc(e, r) {
  var t = oe(4), a = oe(4);
  switch (t.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      a.write_shift(-4, r);
      break;
    case 5:
      a = oe(8), a.write_shift(8, r, "f");
      break;
    case 11:
      a.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      a = Mx(r);
      break;
    case 31:
    case 80:
      for (a = oe(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)), a.write_shift(4, r.length + 1), a.write_shift(0, r, "dbcs"); a.l != a.length; ) a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
  }
  return rt([t, a]);
}
function Ic(e, r) {
  var t = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, c = -1, u = {};
  for (s = 0; s != n; ++s) {
    var h = e.read_shift(4), v = e.read_shift(4);
    i[s] = [h, v + t];
  }
  i.sort(function(S, E) {
    return S[1] - E[1];
  });
  var d = {};
  for (s = 0; s != n; ++s) {
    if (e.l !== i[s][1]) {
      var x = true;
      if (s > 0 && r) switch (r[i[s - 1][0]].t) {
        case 2:
          e.l + 2 === i[s][1] && (e.l += 2, x = false);
          break;
        case 80:
          e.l <= i[s][1] && (e.l = i[s][1], x = false);
          break;
        case 4108:
          e.l <= i[s][1] && (e.l = i[s][1], x = false);
          break;
      }
      if ((!r || s == 0) && e.l <= i[s][1] && (x = false, e.l = i[s][1]), x) throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (r) {
      if (i[s][0] == 0 && i.length > s + 1 && i[s][1] == i[s + 1][1]) continue;
      var _ = r[i[s][0]];
      if (d[_.n] = a0(e, _.t, { raw: true }), _.p === "version" && (d[_.n] = String(d[_.n] >> 16) + "." + ("0000" + String(d[_.n] & 65535)).slice(-4)), _.n == "CodePage") switch (d[_.n]) {
        case 0:
          d[_.n] = 1252;
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          pa(f = d[_.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + d[_.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = d.CodePage = a0(e, Jf), pa(f), c !== -1) {
        var y = e.l;
        e.l = i[c][1], u = Cc(e, f), e.l = y;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        c = s, e.l = i[s + 1][1];
        continue;
      }
      u = Cc(e, f);
    } else {
      var m = u[i[s][0]], g;
      switch (e[e.l]) {
        case 65:
          e.l += 4, g = ml(e);
          break;
        case 30:
          e.l += 4, g = Ni(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 31:
          e.l += 4, g = Ni(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 3:
          e.l += 4, g = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, g = e.read_shift(4);
          break;
        case 5:
          e.l += 4, g = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, g = Qr(e, 4);
          break;
        case 64:
          e.l += 4, g = zr(ro(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      d[m] = g;
    }
  }
  return e.l = t + a, d;
}
var gl = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function zx(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function Oc(e, r, t) {
  var a = oe(8), n = [], i = [], s = 8, f = 0, c = oe(8), u = oe(8);
  if (c.write_shift(4, 2), c.write_shift(4, 1200), u.write_shift(4, 1), i.push(c), n.push(u), s += 8 + c.length, !r) {
    u = oe(8), u.write_shift(4, 0), n.unshift(u);
    var h = [oe(4)];
    for (h[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (c = oe(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), c.write_shift(4, f + 2), c.write_shift(4, v.length + 1), c.write_shift(0, v, "dbcs"); c.l != c.length; ) c.write_shift(1, 0);
      h.push(c);
    }
    c = rt(h), i.unshift(c), s += 8 + c.length;
  }
  for (f = 0; f < e.length; ++f) if (!(r && !r[e[f][0]]) && !(gl.indexOf(e[f][0]) > -1 || hl.indexOf(e[f][0]) > -1) && e[f][1] != null) {
    var d = e[f][1], x = 0;
    if (r) {
      x = +r[e[f][0]];
      var _ = t[x];
      if (_.p == "version" && typeof d == "string") {
        var y = d.split(".");
        d = (+y[0] << 16) + (+y[1] || 0);
      }
      c = Dc(_.t, d);
    } else {
      var m = zx(d);
      m == -1 && (m = 31, d = String(d)), c = Dc(m, d);
    }
    i.push(c), u = oe(8), u.write_shift(4, r ? x : 2 + f), n.push(u), s += 8 + c.length;
  }
  var g = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f) n[f].write_shift(4, g), g += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), rt([a].concat(n).concat(i));
}
function Nc(e, r, t) {
  var a = e.content;
  if (!a) return {};
  ct(a, 0);
  var n, i, s, f, c = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var u = a.read_shift(4), h = a.read_shift(16);
  if (h !== ir.utils.consts.HEADER_CLSID && h !== t) throw new Error("Bad PropertySet CLSID " + h);
  if (n = a.read_shift(4), n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l) throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), c = a.read_shift(4));
  var v = Ic(a, r), d = { SystemIdentifier: u };
  for (var x in v) d[x] = v[x];
  if (d.FMTID = i, n === 1) return d;
  if (c - a.l == 2 && (a.l += 2), a.l !== c) throw new Error("Length mismatch 2: " + a.l + " !== " + c);
  var _;
  try {
    _ = Ic(a, null);
  } catch {
  }
  for (x in _) d[x] = _[x];
  return d.FMTID = [i, s], d;
}
function Rc(e, r, t, a, n, i) {
  var s = oe(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, ir.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var c = Oc(e, t, a);
  if (f.push(c), n) {
    var u = Oc(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(u);
  }
  return rt(f);
}
function tn(e, r) {
  return e.read_shift(r), null;
}
function $x(e, r) {
  r || (r = oe(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function qx(e, r, t) {
  for (var a = [], n = e.l + r; e.l < n; ) a.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return a;
}
function Qr(e, r) {
  return e.read_shift(r) === 1;
}
function Dt(e, r) {
  return r || (r = oe(2)), r.write_shift(2, +!!e), r;
}
function Yr(e) {
  return e.read_shift(2, "u");
}
function fa(e, r) {
  return r || (r = oe(2)), r.write_shift(2, e), r;
}
function _l(e, r) {
  return qx(e, r, Yr);
}
function wl(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function yl(e, r, t) {
  return t || (t = oe(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function ni(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = ca;
  if (t && t.biff >= 8 && (ca = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return ca = i, f;
}
function Yx(e) {
  var r = ca;
  ca = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, c, u = {};
  i && (f = e.read_shift(2)), n && (c = e.read_shift(4));
  var h = s == 2 ? "dbcs-cont" : "sbcs-cont", v = t === 0 ? "" : e.read_shift(t, h);
  return i && (e.l += 4 * f), n && (e.l += c), u.t = v, i || (u.raw = "<t>" + u.t + "</t>", u.r = u.t), ca = r, u;
}
function Zx(e) {
  var r = e.t || "", t = oe(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var a = oe(2 * r.length);
  a.write_shift(2 * r.length, r, "utf16le");
  var n = [t, a];
  return rt(n);
}
function On(e, r, t) {
  var a;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
    if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(r, "sbcs-cont") : a = e.read_shift(r, "dbcs-cont"), a;
}
function is(e, r, t) {
  var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : On(e, a, t);
}
function Un(e, r, t) {
  if (t.biff > 5) return is(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function kl(e, r, t) {
  return t || (t = oe(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), t.write_shift(31, e, "utf16le"), t;
}
function Jx(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return e.l += 2, [r, t];
}
function Qx(e) {
  var r = e.read_shift(4), t = e.l, a = false;
  r > 24 && (e.l += r - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = true), e.l = t);
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(jt, "");
  return a && (e.l += 24), n;
}
function ep(e) {
  for (var r = e.read_shift(2), t = ""; r-- > 0; ) t += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(jt, "");
  return t + s;
}
function rp(e, r) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Qx(e);
    case "0303000000000000c000000000000046":
      return ep(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function Ps(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace(jt, "") : "";
  return t;
}
function Pc(e, r) {
  r || (r = oe(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function tp(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, c, u = "", h, v;
  n & 16 && (i = Ps(e, t - e.l)), n & 128 && (s = Ps(e, t - e.l)), (n & 257) === 257 && (f = Ps(e, t - e.l)), (n & 257) === 1 && (c = rp(e, t - e.l)), n & 8 && (u = Ps(e, t - e.l)), n & 32 && (h = e.read_shift(16)), n & 64 && (v = ro(e)), e.l = t;
  var d = s || f || c || "";
  d && u && (d += "#" + u), d || (d = "#" + u), n & 2 && d.charAt(0) == "/" && d.charAt(1) != "/" && (d = "file://" + d);
  var x = { Target: d };
  return h && (x.guid = h), v && (x.time = v), i && (x.Tooltip = i), x;
}
function ap(e) {
  var r = oe(512), t = 0, a = e.Target;
  a.slice(0, 7) == "file://" && (a = a.slice(7));
  var n = a.indexOf("#"), i = n > -1 ? 31 : 23;
  switch (a.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  r.write_shift(4, 2), r.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (t = 0; t < s.length; ++t) r.write_shift(4, s[t]);
  if (i == 28) a = a.slice(1), Pc(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && Pc(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var c = 0; a.slice(c * 3, c * 3 + 3) == "../" || a.slice(c * 3, c * 3 + 3) == "..\\"; ) ++c;
    for (r.write_shift(2, c), r.write_shift(4, a.length - 3 * c + 1), t = 0; t < a.length - 3 * c; ++t) r.write_shift(1, a.charCodeAt(t + 3 * c) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function El(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function Tl(e, r) {
  var t = El(e);
  return t[3] = 0, t;
}
function _a(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = { r: a, c: n, ixfe: 0 };
  if (t && t.biff == 2 || r == 7) {
    var s = e.read_shift(1);
    i.ixfe = s & 63, e.l += 2;
  } else i.ixfe = e.read_shift(2);
  return i;
}
function Nn(e, r, t, a) {
  return a || (a = oe(6)), a.write_shift(2, e), a.write_shift(2, r), a.write_shift(2, t || 0), a;
}
function np(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return e.l += 8, { type: r, flags: t };
}
function ip(e, r, t) {
  return r === 0 ? "" : Un(e, r, t);
}
function sp(e, r, t) {
  var a = t.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function Sl(e) {
  var r = e.read_shift(2), t = d0(e);
  return [r, t];
}
function fp(e, r, t) {
  e.l += 4, r -= 4;
  var a = e.l + r, n = ni(e, r, t), i = e.read_shift(2);
  if (a -= e.l, i !== a) throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function x0(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
function bl(e, r) {
  return r || (r = oe(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function Fl(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var op = Fl;
function Al(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function cp(e) {
  var r = {};
  return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
}
function up(e) {
  var r = {};
  return e.l += 4, e.cf = e.read_shift(2), r;
}
function Ft(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var lp = { 0: Ft, 4: Ft, 5: Ft, 6: Ft, 7: up, 8: Ft, 9: Ft, 10: Ft, 11: Ft, 12: Ft, 13: cp, 14: Ft, 15: Ft, 16: Ft, 17: Ft, 18: Ft, 19: Ft, 20: Ft, 21: Al };
function hp(e, r) {
  for (var t = e.l + r, a = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a[n] = lp[n](e, t - e.l);
    } catch {
      return e.l = t, a;
    }
  }
  return e.l != t && (e.l = t), a;
}
function Bs(e, r) {
  var t = { BIFFVer: 0, dt: 0 };
  switch (t.BIFFVer = e.read_shift(2), r -= 2, r >= 2 && (t.dt = e.read_shift(2), e.l -= 2), t.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (r > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
  }
  return e.read_shift(r), t;
}
function to(e, r, t) {
  var a = 1536, n = 16;
  switch (t.bookType) {
    case "biff8":
      break;
    case "biff5":
      a = 1280, n = 8;
      break;
    case "biff4":
      a = 4, n = 6;
      break;
    case "biff3":
      a = 3, n = 6;
      break;
    case "biff2":
      a = 2, n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = oe(n);
  return i.write_shift(2, a), i.write_shift(2, r), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function dp(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function xp(e, r, t) {
  if (t.enc) return e.l += r, "";
  var a = e.l, n = Un(e, 0, t);
  return e.read_shift(r + a - e.l), n;
}
function pp(e, r) {
  var t = !r || r.biff == 8, a = oe(t ? 112 : 54);
  for (a.write_shift(r.biff == 8 ? 2 : 1, 7), t && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (t ? 0 : 536870912)); a.l < a.length; ) a.write_shift(1, t ? 0 : 32);
  return a;
}
function vp(e, r, t) {
  var a = t && t.biff == 8 || r == 2 ? e.read_shift(2) : (e.l += r, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function mp(e, r, t) {
  var a = "";
  if (t.biff == 4) return a = ni(e, 0, t), a.length === 0 && (a = "Sheet1"), { name: a };
  var n = e.read_shift(4), i = e.read_shift(1) & 3, s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  return a = ni(e, 0, t), a.length === 0 && (a = "Sheet1"), { pos: n, hs: i, dt: s, name: a };
}
function gp(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1, a = oe(8 + t * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), r.biff >= 8 && a.write_shift(1, 1), a.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function _p(e, r) {
  for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < t; ++s) i.push(Yx(e));
  return i.Count = a, i.Unique = n, i;
}
function wp(e, r) {
  var t = oe(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n) a[n] = Zx(e[n]);
  var i = rt([t].concat(a));
  return i.parts = [t.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function yp(e, r) {
  var t = {};
  return t.dsst = e.read_shift(2), e.l += r - 2, t;
}
function kp(e) {
  var r = {};
  r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
  var t = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (r.level = a & 7), a & 32 && (r.hidden = true), a & 64 && (r.hpt = t / 20), r;
}
function Ep(e) {
  var r = np(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function Tp(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Bc(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function Sp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), c = e.read_shift(2), u = e.read_shift(2);
  return { Pos: [r, t], Dim: [a, n], Flags: i, CurTab: s, FirstTab: f, Selected: c, TabRatio: u };
}
function bp() {
  var e = oe(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Fp(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Ap(e) {
  var r = oe(18), t = 1718;
  return e && e.RTL && (t |= 64), r.write_shift(2, t), r.write_shift(4, 0), r.write_shift(4, 64), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
function Cp() {
}
function Dp(e, r, t) {
  var a = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
  switch (t && t.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return a.name = ni(e, 0, t), a;
}
function Ip(e, r) {
  var t = e.name || "Arial", a = r && r.biff == 5, n = a ? 15 + t.length : 16 + 2 * t.length, i = oe(n);
  return i.write_shift(2, e.sz * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, t.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le"), i;
}
function Op(e, r, t) {
  var a = _a(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function Np(e, r, t, a) {
  var n = oe(10);
  return Nn(e, r, a, n), n.write_shift(4, t), n;
}
function Rp(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = _a(e, r, t), i = is(e, a - e.l, t);
  return n.val = i, n;
}
function Pp(e, r, t, a, n) {
  var i = !n || n.biff == 8, s = oe(8 + +i + (1 + i) * t.length);
  return Nn(e, r, a, s), s.write_shift(2, t.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * t.length, t, i ? "utf16le" : "sbcs"), s;
}
function Bp(e, r, t) {
  var a = e.read_shift(2), n = Un(e, 0, t);
  return [a, n];
}
function Lp(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 3 + r.length : 5 + 2 * r.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Mp = Un;
function Up(e) {
  var r = oe(1 + e.length);
  return r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function Wp(e) {
  var r = oe(3 + e.length);
  return r.l += 2, r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function Lc(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), c = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c } };
}
function Hp(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = oe(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Vp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = Sl(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function Xp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(Sl(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function Kp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function jp(e, r, t, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), c = e.read_shift(2);
  return n.patternType = Ex[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = c & 127, n.icvBack = c >> 7 & 127, n.fsxButton = c >> 14 & 1), n;
}
function Gp(e, r, t) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, r -= 6, a.data = jp(e, r, a.fStyle, t), a;
}
function Mc(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function zp(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = r.flags & 63, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
}
function $p(e) {
  var r = oe(4);
  return r.l += 2, r.write_shift(1, e.numFmtId), r.l++, r;
}
function Cl(e) {
  var r = oe(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var qp = Cl;
function Yp(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Zp(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Jp(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if (r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function Qp(e) {
  var r = oe(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function ev(e, r, t) {
  var a = _a(e, 6, t), n = wl(e);
  return a.val = n, a.t = n === true || n === false ? "b" : "e", a;
}
function tf(e, r, t, a, n, i) {
  var s = oe(8);
  return Nn(e, r, a, s), yl(t, i, s), s;
}
function rv(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = _a(e, 6, t), n = Nt(e);
  return a.val = n, a;
}
function tv(e, r, t, a) {
  var n = oe(14);
  return Nn(e, r, a, n), In(t, n), n;
}
var Uc = ip;
function av(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = On(e, i), f = []; a > e.l; ) f.push(is(e));
  return [i, n, s, f];
}
function Wc(e, r, t) {
  var a = e.read_shift(2), n, i = { fBuiltIn: a & 1, fWantAdvise: a >>> 1 & 1, fWantPict: a >>> 2 & 1, fOle: a >>> 3 & 1, fOleLink: a >>> 4 & 1, cf: a >>> 5 & 1023, fIcon: a >>> 15 & 1 };
  return t.sbcch === 14849 && (n = fp(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function Hc(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), c = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), c = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var u = On(e, s, t);
  n & 32 && (u = Qf[u.charCodeAt(0)]);
  var h = a - e.l;
  t && t.biff == 2 && --h;
  var v = a == e.l || f === 0 || !(h > 0) ? [] : m_(e, h, t, f);
  return { chKey: i, Name: u, itab: c, rgce: v };
}
function Dl(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return Vc(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(sp(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function Vc(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = ni(e, r, t);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function nv(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = On(e, a, t), s = On(e, n, t);
  return [i, s];
}
function iv(e, r, t) {
  var a = Fl(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [g_(e, r, t), n, a];
}
function Xc(e, r, t) {
  var a = op(e);
  switch (t.biff) {
    case 2:
      e.l++, r -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, r -= 8;
      break;
    default:
      e.l += 6, r -= 12;
  }
  return [a, p_(e, r, t)];
}
function sv(e) {
  var r = e.read_shift(4) !== 0, t = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [r, t, a];
}
function fv(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Un(e, 0, t);
  return [{ r: a, c: n }, f, s, i];
}
function ov(e, r, t) {
  if (t && t.biff < 8) {
    var a = e.read_shift(2), n = e.read_shift(2);
    if (a == 65535 || a == -1) return;
    var i = e.read_shift(2), s = e.read_shift(Math.min(i, 2048), "cpstr");
    return [{ r: a, c: n }, s];
  }
  return fv(e, r, t);
}
function af(e, r, t, a) {
  var n = oe(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function cv(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(x0(e));
  return t;
}
function uv(e) {
  var r = oe(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) bl(e[t], r);
  return r;
}
function lv(e, r, t) {
  if (t && t.biff < 8) return dv(e, r, t);
  var a = Al(e), n = hp(e, r - 22, a[1]);
  return { cmo: a, ft: n };
}
var hv = { 8: function(e, r) {
  var t = e.l + r;
  e.l += 10;
  var a = e.read_shift(2);
  e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
  var n = e.read_shift(1);
  return e.l += n, e.l = t, { fmt: a };
} };
function dv(e, r, t) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
  var s = [];
  return s.push((hv[a] || Lt)(e, r, t)), { cmo: [n, a, i], ft: s };
}
function xv(e, r, t) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (t.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = Jx(e, 6, t);
    var f = e.read_shift(2);
    e.read_shift(2), Yr(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var u = 1; u < e.lens.length - 1; ++u) {
      if (e.l - a != e.lens[u]) throw new Error("TxO: bad continue record");
      var h = e[e.l], v = On(e, e.lens[u + 1] - e.lens[u] - 1);
      if (n += v, n.length >= (h ? f : 2 * f)) break;
    }
    if (n.length !== f && n.length !== f * 2) throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + r, { t: n };
  } catch {
    return e.l = a + r, { t: n };
  }
}
function pv(e, r) {
  var t = x0(e);
  e.l += 16;
  var a = tp(e, r - 24);
  return [t, a];
}
function vv(e) {
  var r = oe(24), t = Br(e[0]);
  r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) r.write_shift(1, parseInt(a[n], 16));
  return rt([r, ap(e[1])]);
}
function mv(e, r) {
  e.read_shift(2);
  var t = x0(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
  return a = a.replace(jt, ""), [t, a];
}
function gv(e) {
  var r = e[1].Tooltip, t = oe(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var a = Br(e[0]);
  t.write_shift(2, a.r), t.write_shift(2, a.r), t.write_shift(2, a.c), t.write_shift(2, a.c);
  for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
  return t.write_shift(2, 0), t;
}
function _v(e) {
  var r = [0, 0], t;
  return t = e.read_shift(2), r[0] = Fc[t] || t, t = e.read_shift(2), r[1] = Fc[t] || t, r;
}
function wv(e) {
  return e || (e = oe(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function yv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Tl(e));
  return t;
}
function kv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Tl(e));
  return t;
}
function Ev(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function Il(e, r, t) {
  if (!t.cellStyles) return Lt(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), c = e.read_shift(2);
  a == 2 && (e.l += 2);
  var u = { s: n, e: i, w: s, ixfe: f, flags: c };
  return (t.biff >= 5 || !t.biff) && (u.level = c >> 8 & 7), u;
}
function Tv(e, r) {
  var t = oe(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function Sv(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Nt(e), t.footer = Nt(e), e.l += 2), t;
}
function bv(e, r, t) {
  var a = { area: false };
  if (t.biff != 5) return e.l += r, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = true), a;
}
function Fv(e) {
  for (var r = oe(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
var Av = _a, Cv = _l, Dv = is;
function Iv(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function ss(e, r, t, a, n) {
  return e || (e = oe(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(1, a || 0), e.write_shift(1, n || 0), e.write_shift(1, 0), e;
}
function Ov(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = _a(e, 7, t), n = Un(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function Nv(e, r, t) {
  var a = _a(e, 7, t), n = Nt(e);
  return a.t = "n", a.val = n, a;
}
function Rv(e, r, t, a, n) {
  var i = oe(15);
  return ss(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function Pv(e, r, t) {
  var a = _a(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function Bv(e, r, t, a, n) {
  var i = oe(9);
  return ss(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function Lv(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function Mv(e, r, t) {
  var a = e.l + 7, n = _a(e, 6, t);
  e.l = a;
  var i = wl(e);
  return n.val = i, n.t = i === true || i === false ? "b" : "e", n;
}
function Uv(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function Wv(e, r, t) {
  var a = e.l + r, n = _a(e, 6, t), i = e.read_shift(2), s = On(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function Hv(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var Vv = [2, 3, 48, 49, 131, 139, 140, 245], Ff = (function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, r = o0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function t(f, c) {
    var u = [], h = fn(1);
    switch (c.type) {
      case "base64":
        h = Ht(Qt(f));
        break;
      case "binary":
        h = Ht(f);
        break;
      case "buffer":
      case "array":
        h = f;
        break;
    }
    ct(h, 0);
    var v = h.read_shift(1), d = !!(v & 136), x = false, _ = false;
    switch (v) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        x = true, d = true;
        break;
      case 49:
        x = true, d = true;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        _ = true;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + v.toString(16));
    }
    var y = 0, m = 521;
    v == 2 && (y = h.read_shift(2)), h.l += 3, v != 2 && (y = h.read_shift(4)), y > 1048576 && (y = 1e6), v != 2 && (m = h.read_shift(2));
    var g = h.read_shift(2);
    c.codepage, v != 2 && (h.l += 16, h.read_shift(1), h[h.l] !== 0 && e[h[h.l]], h.l += 1, h.l += 2), _ && (h.l += 36);
    for (var S = [], E = {}, A = Math.min(h.length, v == 2 ? 521 : m - 10 - (x ? 264 : 0)), X = _ ? 32 : 11; h.l < A && h[h.l] != 13; ) switch (E = {}, E.name = Oa(h.slice(h.l, h.l + X)).replace(/[\u0000\r\n][\S\s]*$/g, ""), h.l += X, E.type = String.fromCharCode(h.read_shift(1)), v != 2 && !_ && (E.offset = h.read_shift(4)), E.len = h.read_shift(1), v == 2 && (E.offset = h.read_shift(2)), E.dec = h.read_shift(1), E.name.length && S.push(E), v != 2 && (h.l += _ ? 13 : 14), E.type) {
      case "B":
        (!x || E.len != 8) && c.WTF && console.log("Skipping " + E.name + ":" + E.type);
        break;
      case "G":
      case "P":
        c.WTF && console.log("Skipping " + E.name + ":" + E.type);
        break;
      case "+":
      case "0":
      case "@":
      case "C":
      case "D":
      case "F":
      case "I":
      case "L":
      case "M":
      case "N":
      case "O":
      case "T":
      case "Y":
        break;
      default:
        throw new Error("Unknown Field Type: " + E.type);
    }
    if (h[h.l] !== 13 && (h.l = m - 1), h.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + h.l + " " + h[h.l]);
    h.l = m;
    var U = 0, F = 0;
    for (u[0] = [], F = 0; F != S.length; ++F) u[0][F] = S[F].name;
    for (; y-- > 0; ) {
      if (h[h.l] === 42) {
        h.l += g;
        continue;
      }
      for (++h.l, u[++U] = [], F = 0, F = 0; F != S.length; ++F) {
        var B = h.slice(h.l, h.l + S[F].len);
        h.l += S[F].len, ct(B, 0);
        var L = Oa(B);
        switch (S[F].type) {
          case "C":
            L.trim().length && (u[U][F] = L.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            L.length === 8 ? (u[U][F] = new Date(Date.UTC(+L.slice(0, 4), +L.slice(4, 6) - 1, +L.slice(6, 8), 0, 0, 0, 0)), c && c.UTC || (u[U][F] = Dn(u[U][F]))) : u[U][F] = L;
            break;
          case "F":
            u[U][F] = parseFloat(L.trim());
            break;
          case "+":
          case "I":
            u[U][F] = _ ? B.read_shift(-4, "i") ^ 2147483648 : B.read_shift(4, "i");
            break;
          case "L":
            switch (L.trim().toUpperCase()) {
              case "Y":
              case "T":
                u[U][F] = true;
                break;
              case "N":
              case "F":
                u[U][F] = false;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + L + "|");
            }
            break;
          case "M":
            if (!d) throw new Error("DBF Unexpected MEMO for type " + v.toString(16));
            u[U][F] = "##MEMO##" + (_ ? parseInt(L.trim(), 10) : B.read_shift(4));
            break;
          case "N":
            L = L.replace(/\u0000/g, "").trim(), L && L != "." && (u[U][F] = +L || 0);
            break;
          case "@":
            u[U][F] = new Date(B.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var K = B.read_shift(4), G = B.read_shift(4);
              if (K == 0 && G == 0) break;
              u[U][F] = new Date((K - 2440588) * 864e5 + G), c && c.UTC || (u[U][F] = Dn(u[U][F]));
            }
            break;
          case "Y":
            u[U][F] = B.read_shift(4, "i") / 1e4 + B.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            u[U][F] = -B.read_shift(-8, "f");
            break;
          case "B":
            if (x && S[F].len == 8) {
              u[U][F] = B.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            B.l += S[F].len;
            break;
          case "0":
            if (S[F].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + S[F].type);
        }
      }
    }
    if (v != 2 && h.l < h.length && h[h.l++] != 26) throw new Error("DBF EOF Marker missing " + (h.l - 1) + " of " + h.length + " " + h[h.l - 1].toString(16));
    return c && c.sheetRows && (u = u.slice(0, c.sheetRows)), c.DBF = S, u;
  }
  function a(f, c) {
    var u = c || {};
    u.dateNF || (u.dateNF = "yyyymmdd");
    var h = oi(t(f, u), u);
    return h["!cols"] = u.DBF.map(function(v) {
      return { wch: v.len, DBF: v };
    }), delete u.DBF, h;
  }
  function n(f, c) {
    try {
      var u = dn(a(f, c), c);
      return u.bookType = "dbf", u;
    } catch (h) {
      if (c && c.WTF) throw h;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, c) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var u = c || {}, h = ca;
    if (+u.codepage >= 0 && pa(+u.codepage), u.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = Pt(), d = Of(f, { header: 1, raw: true, cellDates: true }), x = d[0], _ = d.slice(1), y = f["!cols"] || [], m = 0, g = 0, S = 0, E = 1;
    for (m = 0; m < x.length; ++m) {
      if (((y[m] || {}).DBF || {}).name) {
        x[m] = y[m].DBF.name, ++S;
        continue;
      }
      if (x[m] != null) {
        if (++S, typeof x[m] == "number" && (x[m] = x[m].toString(10)), typeof x[m] != "string") throw new Error("DBF Invalid column name " + x[m] + " |" + typeof x[m] + "|");
        if (x.indexOf(x[m]) !== m) {
          for (g = 0; g < 1024; ++g) if (x.indexOf(x[m] + "_" + g) == -1) {
            x[m] += "_" + g;
            break;
          }
        }
      }
    }
    var A = Dr(f["!ref"]), X = [], U = [], F = [];
    for (m = 0; m <= A.e.c - A.s.c; ++m) {
      var B = "", L = "", K = 0, G = [];
      for (g = 0; g < _.length; ++g) _[g][m] != null && G.push(_[g][m]);
      if (G.length == 0 || x[m] == null) {
        X[m] = "?";
        continue;
      }
      for (g = 0; g < G.length; ++g) {
        switch (typeof G[g]) {
          case "number":
            L = "B";
            break;
          case "string":
            L = "C";
            break;
          case "boolean":
            L = "L";
            break;
          case "object":
            L = G[g] instanceof Date ? "D" : "C";
            break;
          default:
            L = "C";
        }
        K = Math.max(K, String(G[g]).length), B = B && B != L ? "C" : L;
      }
      K > 250 && (K = 250), L = ((y[m] || {}).DBF || {}).type, L == "C" && y[m].DBF.len > K && (K = y[m].DBF.len), B == "B" && L == "N" && (B = "N", F[m] = y[m].DBF.dec, K = y[m].DBF.len), U[m] = B == "C" || L == "N" ? K : i[B] || 0, E += U[m], X[m] = B;
    }
    var te = v.next(32);
    for (te.write_shift(4, 318902576), te.write_shift(4, _.length), te.write_shift(2, 296 + 32 * S), te.write_shift(2, E), m = 0; m < 4; ++m) te.write_shift(4, 0);
    var de = +r[ca] || 3;
    for (te.write_shift(4, 0 | de << 8), e[de] != +u.codepage && (u.codepage && console.error("DBF Unsupported codepage " + ca + ", using 1252"), ca = 1252), m = 0, g = 0; m < x.length; ++m) if (x[m] != null) {
      var Ve = v.next(32), ge = (x[m].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      Ve.write_shift(1, ge, "sbcs"), Ve.write_shift(1, X[m] == "?" ? "C" : X[m], "sbcs"), Ve.write_shift(4, g), Ve.write_shift(1, U[m] || i[X[m]] || 0), Ve.write_shift(1, F[m] || 0), Ve.write_shift(1, 2), Ve.write_shift(4, 0), Ve.write_shift(1, 0), Ve.write_shift(4, 0), Ve.write_shift(4, 0), g += U[m] || i[X[m]] || 0;
    }
    var $e = v.next(264);
    for ($e.write_shift(4, 13), m = 0; m < 65; ++m) $e.write_shift(4, 0);
    for (m = 0; m < _.length; ++m) {
      var ke = v.next(E);
      for (ke.write_shift(1, 0), g = 0; g < x.length; ++g) if (x[g] != null) switch (X[g]) {
        case "L":
          ke.write_shift(1, _[m][g] == null ? 63 : _[m][g] ? 84 : 70);
          break;
        case "B":
          ke.write_shift(8, _[m][g] || 0, "f");
          break;
        case "N":
          var Pe = "0";
          for (typeof _[m][g] == "number" && (Pe = _[m][g].toFixed(F[g] || 0)), Pe.length > U[g] && (Pe = Pe.slice(0, U[g])), S = 0; S < U[g] - Pe.length; ++S) ke.write_shift(1, 32);
          ke.write_shift(1, Pe, "sbcs");
          break;
        case "D":
          _[m][g] ? (ke.write_shift(4, ("0000" + _[m][g].getFullYear()).slice(-4), "sbcs"), ke.write_shift(2, ("00" + (_[m][g].getMonth() + 1)).slice(-2), "sbcs"), ke.write_shift(2, ("00" + _[m][g].getDate()).slice(-2), "sbcs")) : ke.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var Qe = ke.l, he = String(_[m][g] != null ? _[m][g] : "").slice(0, U[g]);
          for (ke.write_shift(1, he, "cpstr"), Qe += U[g] - ke.l, S = 0; S < Qe; ++S) ke.write_shift(1, 32);
          break;
      }
    }
    return ca = h, v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: n, to_sheet: a, from_sheet: s };
})(), Ol = (function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, r = new RegExp("\x1BN(" + jr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    r = new RegExp("\x1BN(" + jr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var t = function(x, _) {
    var y = e[_];
    return typeof y == "number" ? ec(y) : y;
  }, a = function(x, _, y) {
    var m = _.charCodeAt(0) - 32 << 4 | y.charCodeAt(0) - 48;
    return m == 59 ? x : ec(m);
  };
  e["|"] = 254;
  var n = function(x) {
    return x.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function i(x, _) {
    switch (_.type) {
      case "base64":
        return s(Qt(x), _);
      case "binary":
        return s(x, _);
      case "buffer":
        return s(vr && Buffer.isBuffer(x) ? x.toString("binary") : Oa(x), _);
      case "array":
        return s(Cn(x), _);
    }
    throw new Error("Unrecognized type " + _.type);
  }
  function s(x, _) {
    var y = x.split(/[\n\r]+/), m = -1, g = -1, S = 0, E = 0, A = [], X = [], U = null, F = {}, B = [], L = [], K = [], G = 0, te, de = { Workbook: { WBProps: {}, Names: [] } };
    for (+_.codepage >= 0 && pa(+_.codepage); S !== y.length; ++S) {
      G = 0;
      var Ve = y[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), ge = Ve.replace(/;;/g, "\0").split(";").map(function(V) {
        return V.replace(/\u0000/g, ";");
      }), $e = ge[0], ke;
      if (Ve.length > 0) switch ($e) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          for (E = 1; E < ge.length; ++E) switch (ge[E].charAt(0)) {
            case "V":
              {
                var Pe = parseInt(ge[E].slice(1), 10);
                Pe >= 1 && Pe <= 4 && (de.Workbook.WBProps.date1904 = true);
              }
              break;
          }
          break;
        case "W":
          break;
        case "P":
          ge[1].charAt(0) === "P" && X.push(Ve.slice(3).replace(/;;/g, ";"));
          break;
        case "NN":
          {
            var Qe = { Sheet: 0 };
            for (E = 1; E < ge.length; ++E) switch (ge[E].charAt(0)) {
              case "N":
                Qe.Name = ge[E].slice(1);
                break;
              case "E":
                Qe.Ref = (_ && _.sheet || "Sheet1") + "!" + bn(ge[E].slice(1));
                break;
            }
            de.Workbook.Names.push(Qe);
          }
          break;
        case "C":
          var he = false, sr = false, Le = false, Te = false, ye = -1, je = -1, Ge = "", Ze = "z", R = "";
          for (E = 1; E < ge.length; ++E) switch (ge[E].charAt(0)) {
            case "A":
              R = ge[E].slice(1);
              break;
            case "X":
              g = parseInt(ge[E].slice(1), 10) - 1, sr = true;
              break;
            case "Y":
              for (m = parseInt(ge[E].slice(1), 10) - 1, sr || (g = 0), te = A.length; te <= m; ++te) A[te] = [];
              break;
            case "K":
              ke = ge[E].slice(1), ke.charAt(0) === '"' ? (ke = ke.slice(1, ke.length - 1), Ze = "s") : ke === "TRUE" || ke === "FALSE" ? (ke = ke === "TRUE", Ze = "b") : ke.charAt(0) == "#" && _t[ke] != null ? (Ze = "e", ke = _t[ke]) : isNaN(Jt(ke)) || (ke = Jt(ke), Ze = "n", U !== null && ua(U) && _.cellDates && (ke = Va(de.Workbook.WBProps.date1904 ? ke + 1462 : ke), Ze = typeof ke == "number" ? "n" : "d")), he = true;
              break;
            case "E":
              Te = true, Ge = bn(ge[E].slice(1), { r: m, c: g });
              break;
            case "S":
              Le = true;
              break;
            case "G":
              break;
            case "R":
              ye = parseInt(ge[E].slice(1), 10) - 1;
              break;
            case "C":
              je = parseInt(ge[E].slice(1), 10) - 1;
              break;
            default:
              if (_ && _.WTF) throw new Error("SYLK bad record " + Ve);
          }
          if (he && (A[m][g] ? (A[m][g].t = Ze, A[m][g].v = ke) : A[m][g] = { t: Ze, v: ke }, U && (A[m][g].z = U), _.cellText !== false && U && (A[m][g].w = ea(A[m][g].z, A[m][g].v, { date1904: de.Workbook.WBProps.date1904 })), U = null), Le) {
            if (Te) throw new Error("SYLK shared formula cannot have own formula");
            var W = ye > -1 && A[ye][je];
            if (!W || !W[1]) throw new Error("SYLK shared formula cannot find base");
            Ge = Gl(W[1], { r: m - ye, c: g - je });
          }
          Ge && (A[m][g] ? A[m][g].f = Ge : A[m][g] = { t: "n", f: Ge }), R && (A[m][g] || (A[m][g] = { t: "z" }), A[m][g].c = [{ a: "SheetJSYLK", t: R }]);
          break;
        case "F":
          var z = 0;
          for (E = 1; E < ge.length; ++E) switch (ge[E].charAt(0)) {
            case "X":
              g = parseInt(ge[E].slice(1), 10) - 1, ++z;
              break;
            case "Y":
              for (m = parseInt(ge[E].slice(1), 10) - 1, te = A.length; te <= m; ++te) A[te] = [];
              break;
            case "M":
              G = parseInt(ge[E].slice(1), 10) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              U = X[parseInt(ge[E].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (K = ge[E].slice(1).split(" "), te = parseInt(K[0], 10); te <= parseInt(K[1], 10); ++te) G = parseInt(K[2], 10), L[te - 1] = G === 0 ? { hidden: true } : { wch: G };
              break;
            case "C":
              g = parseInt(ge[E].slice(1), 10) - 1, L[g] || (L[g] = {});
              break;
            case "R":
              m = parseInt(ge[E].slice(1), 10) - 1, B[m] || (B[m] = {}), G > 0 ? (B[m].hpt = G, B[m].hpx = si(G)) : G === 0 && (B[m].hidden = true);
              break;
            default:
              if (_ && _.WTF) throw new Error("SYLK bad record " + Ve);
          }
          z < 1 && (U = null);
          break;
        default:
          if (_ && _.WTF) throw new Error("SYLK bad record " + Ve);
      }
    }
    return B.length > 0 && (F["!rows"] = B), L.length > 0 && (F["!cols"] = L), L.forEach(function(V) {
      on(V);
    }), _ && _.sheetRows && (A = A.slice(0, _.sheetRows)), [A, F, de];
  }
  function f(x, _) {
    var y = i(x, _), m = y[0], g = y[1], S = y[2], E = Hr(_);
    E.date1904 = (((S || {}).Workbook || {}).WBProps || {}).date1904;
    var A = oi(m, E);
    jr(g).forEach(function(U) {
      A[U] = g[U];
    });
    var X = dn(A, _);
    return jr(S).forEach(function(U) {
      X[U] = S[U];
    }), X.bookType = "sylk", X;
  }
  function c(x, _, y, m, g, S) {
    var E = "C;Y" + (y + 1) + ";X" + (m + 1) + ";K";
    switch (x.t) {
      case "n":
        E += isFinite(x.v) ? x.v || 0 : ht[isNaN(x.v) ? 36 : 7], x.f && !x.F && (E += ";E" + v0(x.f, { r: y, c: m }));
        break;
      case "b":
        E += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        E += x.w || ht[x.v] || x.v;
        break;
      case "d":
        E += qr(zr(x.v, S), S);
        break;
      case "s":
        E += '"' + (x.v == null ? "" : String(x.v)).replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return E;
  }
  function u(x, _, y) {
    var m = "C;Y" + (_ + 1) + ";X" + (y + 1) + ";A";
    return m += n(x.map(function(g) {
      return g.t;
    }).join("")), m;
  }
  function h(x, _) {
    _.forEach(function(y, m) {
      var g = "F;W" + (m + 1) + " " + (m + 1) + " ";
      y.hidden ? g += "0" : (typeof y.width == "number" && !y.wpx && (y.wpx = $i(y.width)), typeof y.wpx == "number" && !y.wch && (y.wch = qi(y.wpx)), typeof y.wch == "number" && (g += Math.round(y.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function v(x, _) {
    _.forEach(function(y, m) {
      var g = "F;";
      y.hidden ? g += "M0;" : y.hpt ? g += "M" + 20 * y.hpt + ";" : y.hpx && (g += "M" + 20 * Yi(y.hpx) + ";"), g.length > 2 && x.push(g + "R" + (m + 1));
    });
  }
  function d(x, _, y) {
    _ || (_ = {}), _._formats = ["General"];
    var m = ["ID;PSheetJS;N;E"], g = [], S = Dr(x["!ref"] || "A1"), E, A = x["!data"] != null, X = `\r
`, U = (((y || {}).Workbook || {}).WBProps || {}).date1904, F = "General";
    m.push("P;PGeneral");
    var B = S.s.r, L = S.s.c, K = [];
    if (x["!ref"]) {
      for (B = S.s.r; B <= S.e.r; ++B) if (!(A && !x["!data"][B])) {
        for (K = [], L = S.s.c; L <= S.e.c; ++L) E = A ? x["!data"][B][L] : x[mr(L) + br(B)], !(!E || !E.c) && K.push(u(E.c, B, L));
        K.length && g.push(K.join(X));
      }
    }
    if (x["!ref"]) {
      for (B = S.s.r; B <= S.e.r; ++B) if (!(A && !x["!data"][B])) {
        for (K = [], L = S.s.c; L <= S.e.c; ++L) if (E = A ? x["!data"][B][L] : x[mr(L) + br(B)], !(!E || E.v == null && (!E.f || E.F))) {
          if ((E.z || (E.t == "d" ? nr[14] : "General")) != F) {
            var G = _._formats.indexOf(E.z);
            G == -1 && (_._formats.push(E.z), G = _._formats.length - 1, m.push("P;P" + E.z.replace(/;/g, ";;"))), K.push("F;P" + G + ";Y" + (B + 1) + ";X" + (L + 1));
          }
          K.push(c(E, x, B, L, _, U));
        }
        g.push(K.join(X));
      }
    }
    return m.push("F;P0;DG0G8;M255"), x["!cols"] && h(m, x["!cols"]), x["!rows"] && v(m, x["!rows"]), x["!ref"] && m.push("B;Y" + (S.e.r - S.s.r + 1) + ";X" + (S.e.c - S.s.c + 1) + ";D" + [S.s.c, S.s.r, S.e.c, S.e.r].join(" ")), m.push("O;L;D;B" + (U ? ";V4" : "") + ";K47;G100 0.001"), delete _._formats, m.join(X) + X + g.join(X) + X + "E" + X;
  }
  return { to_workbook: f, from_sheet: d };
})(), Nl = /* @__PURE__ */ (function() {
  function e(f, c) {
    switch (c.type) {
      case "base64":
        return r(Qt(f), c);
      case "binary":
        return r(f, c);
      case "buffer":
        return r(vr && Buffer.isBuffer(f) ? f.toString("binary") : Oa(f), c);
      case "array":
        return r(Cn(f), c);
    }
    throw new Error("Unrecognized type " + c.type);
  }
  function r(f, c) {
    for (var u = f.split(`
`), h = -1, v = -1, d = 0, x = []; d !== u.length; ++d) {
      if (u[d].trim() === "BOT") {
        x[++h] = [], v = 0;
        continue;
      }
      if (!(h < 0)) {
        var _ = u[d].trim().split(","), y = _[0], m = _[1];
        ++d;
        for (var g = u[d] || ""; (g.match(/["]/g) || []).length & 1 && d < u.length - 1; ) g += `
` + u[++d];
        switch (g = g.trim(), +y) {
          case -1:
            if (g === "BOT") {
              x[++h] = [], v = 0;
              continue;
            } else if (g !== "EOD") throw new Error("Unrecognized DIF special command " + g);
            break;
          case 0:
            g === "TRUE" ? x[h][v] = true : g === "FALSE" ? x[h][v] = false : isNaN(Jt(m)) ? isNaN(Hi(m).getDate()) ? x[h][v] = m : (x[h][v] = zr(m), c && c.UTC || (x[h][v] = Dn(x[h][v]))) : x[h][v] = Jt(m), ++v;
            break;
          case 1:
            g = g.slice(1, g.length - 1), g = g.replace(/""/g, '"'), g && g.match(/^=".*"$/) && (g = g.slice(2, -1)), x[h][v++] = g !== "" ? g : null;
            break;
        }
        if (g === "EOD") break;
      }
    }
    return c && c.sheetRows && (x = x.slice(0, c.sheetRows)), x;
  }
  function t(f, c) {
    return oi(e(f, c), c);
  }
  function a(f, c) {
    var u = dn(t(f, c), c);
    return u.bookType = "dif", u;
  }
  function n(f, c) {
    return "0," + String(f) + `\r
` + c;
  }
  function i(f) {
    return `1,0\r
"` + f.replace(/"/g, '""') + '"';
  }
  function s(f) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DIF");
    for (var c = Dr(f["!ref"]), u = f["!data"] != null, h = [`TABLE\r
0,1\r
"sheetjs"\r
`, `VECTORS\r
0,` + (c.e.r - c.s.r + 1) + `\r
""\r
`, `TUPLES\r
0,` + (c.e.c - c.s.c + 1) + `\r
""\r
`, `DATA\r
0,0\r
""\r
`], v = c.s.r; v <= c.e.r; ++v) {
      for (var d = u ? f["!data"][v] : [], x = `-1,0\r
BOT\r
`, _ = c.s.c; _ <= c.e.c; ++_) {
        var y = u ? d && d[_] : f[wr({ r: v, c: _ })];
        if (y == null) {
          x += `1,0\r
""\r
`;
          continue;
        }
        switch (y.t) {
          case "n":
            y.w != null ? x += "0," + y.w + `\r
V` : y.v != null ? x += n(y.v, "V") : y.f != null && !y.F ? x += i("=" + y.f) : x += `1,0\r
""`;
            break;
          case "b":
            x += y.v ? n(1, "TRUE") : n(0, "FALSE");
            break;
          case "s":
            x += i(isNaN(+y.v) ? y.v : '="' + y.v + '"');
            break;
          case "d":
            y.w || (y.w = ea(y.z || nr[14], qr(zr(y.v)))), x += n(y.w, "V");
            break;
          default:
            x += `1,0\r
""`;
        }
        x += `\r
`;
      }
      h.push(x);
    }
    return h.join("") + `-1,0\r
EOD`;
  }
  return { to_workbook: a, to_sheet: t, from_sheet: s };
})(), Rl = (function() {
  function e(v) {
    return v.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function r(v) {
    return v.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function t(v, d) {
    for (var x = v.split(`
`), _ = -1, y = -1, m = 0, g = []; m !== x.length; ++m) {
      var S = x[m].trim().split(":");
      if (S[0] === "cell") {
        var E = Br(S[1]);
        if (g.length <= E.r) for (_ = g.length; _ <= E.r; ++_) g[_] || (g[_] = []);
        switch (_ = E.r, y = E.c, S[2]) {
          case "t":
            g[_][y] = e(S[3]);
            break;
          case "v":
            g[_][y] = +S[3];
            break;
          case "vtf":
            var A = S[S.length - 1];
          case "vtc":
            S[3] === "nl" ? g[_][y] = !!+S[4] : g[_][y] = S[S.length - 1].charAt(0) == "#" ? { t: "e", v: _t[S[S.length - 1]] } : +S[4], S[2] == "vtf" && (g[_][y] = [g[_][y], A]);
        }
      }
    }
    return d && d.sheetRows && (g = g.slice(0, d.sheetRows)), g;
  }
  function a(v, d) {
    return oi(t(v, d), d);
  }
  function n(v, d) {
    return dn(a(v, d), d);
  }
  var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`), s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`, f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`), c = "--SocialCalcSpreadsheetControlSave--";
  function u(v) {
    if (!v || !v["!ref"]) return "";
    for (var d = [], x = [], _, y = "", m = wt(v["!ref"]), g = v["!data"] != null, S = m.s.r; S <= m.e.r; ++S) for (var E = m.s.c; E <= m.e.c; ++E) if (y = wr({ r: S, c: E }), _ = g ? (v["!data"][S] || [])[E] : v[y], !(!_ || _.v == null || _.t === "z")) {
      switch (x = ["cell", y, "t"], _.t) {
        case "s":
          x.push(r(_.v));
          break;
        case "b":
          x[2] = "vt" + (_.f ? "f" : "c"), x[3] = "nl", x[4] = _.v ? "1" : "0", x[5] = r(_.f || (_.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var A = qr(zr(_.v));
          x[2] = "vtc", x[3] = "nd", x[4] = "" + A, x[5] = _.w || ea(_.z || nr[14], A);
          break;
        case "n":
          isFinite(_.v) ? _.f ? (x[2] = "vtf", x[3] = "n", x[4] = _.v, x[5] = r(_.f)) : (x[2] = "v", x[3] = _.v) : (x[2] = "vt" + (_.f ? "f" : "c"), x[3] = "e" + ht[isNaN(_.v) ? 36 : 7], x[4] = "0", x[5] = _.f || x[3].slice(1), x[6] = "e", x[7] = x[3].slice(1));
          break;
        case "e":
          continue;
      }
      d.push(x.join(":"));
    }
    return d.push("sheet:c:" + (m.e.c - m.s.c + 1) + ":r:" + (m.e.r - m.s.r + 1) + ":tvf:1"), d.push("valueformat:1:text-wiki"), d.join(`
`);
  }
  function h(v) {
    return [i, s, f, s, u(v), c].join(`
`);
  }
  return { to_workbook: n, to_sheet: a, from_sheet: h };
})(), ii = /* @__PURE__ */ (function() {
  function e(h, v, d, x, _) {
    _.raw ? v[d][x] = h : h === "" || (h === "TRUE" ? v[d][x] = true : h === "FALSE" ? v[d][x] = false : isNaN(Jt(h)) ? isNaN(Hi(h).getDate()) ? h.charCodeAt(0) == 35 && _t[h] != null ? v[d][x] = { t: "e", v: _t[h], w: h } : v[d][x] = h : v[d][x] = zr(h) : v[d][x] = Jt(h));
  }
  function r(h, v) {
    var d = v || {}, x = [];
    if (!h || h.length === 0) return x;
    for (var _ = h.split(/[\r\n]/), y = _.length - 1; y >= 0 && _[y].length === 0; ) --y;
    for (var m = 10, g = 0, S = 0; S <= y; ++S) g = _[S].indexOf(" "), g == -1 ? g = _[S].length : g++, m = Math.max(m, g);
    for (S = 0; S <= y; ++S) {
      x[S] = [];
      var E = 0;
      for (e(_[S].slice(0, m).trim(), x, S, E, d), E = 1; E <= (_[S].length - m) / 10 + 1; ++E) e(_[S].slice(m + (E - 1) * 10, m + E * 10).trim(), x, S, E, d);
    }
    return d.sheetRows && (x = x.slice(0, d.sheetRows)), x;
  }
  var t = { 44: ",", 9: "	", 59: ";", 124: "|" }, a = { 44: 3, 9: 2, 59: 1, 124: 0 };
  function n(h) {
    for (var v = {}, d = false, x = 0, _ = 0; x < h.length; ++x) (_ = h.charCodeAt(x)) == 34 ? d = !d : !d && _ in t && (v[_] = (v[_] || 0) + 1);
    _ = [];
    for (x in v) Object.prototype.hasOwnProperty.call(v, x) && _.push([v[x], x]);
    if (!_.length) {
      v = a;
      for (x in v) Object.prototype.hasOwnProperty.call(v, x) && _.push([v[x], x]);
    }
    return _.sort(function(y, m) {
      return y[0] - m[0] || a[y[1]] - a[m[1]];
    }), t[_.pop()[1]] || 44;
  }
  function i(h, v) {
    var d = v || {}, x = "", _ = {};
    d.dense && (_["!data"] = []);
    var y = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    h.slice(0, 4) == "sep=" ? h.charCodeAt(5) == 13 && h.charCodeAt(6) == 10 ? (x = h.charAt(4), h = h.slice(7)) : h.charCodeAt(5) == 13 || h.charCodeAt(5) == 10 ? (x = h.charAt(4), h = h.slice(6)) : x = n(h.slice(0, 1024)) : d && d.FS ? x = d.FS : x = n(h.slice(0, 1024));
    var m = 0, g = 0, S = 0, E = 0, A = 0, X = x.charCodeAt(0), U = false, F = 0, B = h.charCodeAt(0), L = d.dateNF != null ? ud(d.dateNF) : null;
    function K() {
      var G = h.slice(E, A);
      G.slice(-1) == "\r" && (G = G.slice(0, -1));
      var te = {};
      if (G.charAt(0) == '"' && G.charAt(G.length - 1) == '"' && (G = G.slice(1, -1).replace(/""/g, '"')), d.cellText !== false && (te.w = G), G.length === 0) te.t = "z";
      else if (d.raw) te.t = "s", te.v = G;
      else if (G.trim().length === 0) te.t = "s", te.v = G;
      else if (G.charCodeAt(0) == 61) G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34 ? (te.t = "s", te.v = G.slice(2, -1).replace(/""/g, '"')) : r2(G) ? (te.t = "s", te.f = G.slice(1), te.v = G) : (te.t = "s", te.v = G);
      else if (G == "TRUE") te.t = "b", te.v = true;
      else if (G == "FALSE") te.t = "b", te.v = false;
      else if (!isNaN(S = Jt(G))) te.t = "n", te.v = S;
      else if (!isNaN((S = Hi(G)).getDate()) || L && G.match(L)) {
        if (te.z = d.dateNF || nr[14], L && G.match(L)) {
          var de = ld(G, d.dateNF, G.match(L) || []);
          S = zr(de), d && d.UTC === false && (S = Dn(S));
        } else d && d.UTC === false ? S = Dn(S) : d.cellText !== false && d.dateNF && (te.w = ea(te.z, S));
        d.cellDates ? (te.t = "d", te.v = S) : (te.t = "n", te.v = qr(S)), d.cellNF || delete te.z;
      } else G.charCodeAt(0) == 35 && _t[G] != null ? (te.t = "e", te.w = G, te.v = _t[G]) : (te.t = "s", te.v = G);
      if (te.t == "z" || (d.dense ? (_["!data"][m] || (_["!data"][m] = []), _["!data"][m][g] = te) : _[wr({ c: g, r: m })] = te), E = A + 1, B = h.charCodeAt(E), y.e.c < g && (y.e.c = g), y.e.r < m && (y.e.r = m), F == X) ++g;
      else if (g = 0, ++m, d.sheetRows && d.sheetRows <= m) return true;
    }
    e: for (; A < h.length; ++A) switch (F = h.charCodeAt(A)) {
      case 34:
        B === 34 && (U = !U);
        break;
      case 13:
        if (U) break;
        h.charCodeAt(A + 1) == 10 && ++A;
      case X:
      case 10:
        if (!U && K()) break e;
        break;
    }
    return A - E > 0 && K(), _["!ref"] = dr(y), _;
  }
  function s(h, v) {
    return !(v && v.PRN) || v.FS || h.slice(0, 4) == "sep=" || h.indexOf("	") >= 0 || h.indexOf(",") >= 0 || h.indexOf(";") >= 0 ? i(h, v) : oi(r(h, v), v);
  }
  function f(h, v) {
    var d = "", x = v.type == "string" ? [0, 0, 0, 0] : xo(h, v);
    switch (v.type) {
      case "base64":
        d = Qt(h);
        break;
      case "binary":
        d = h;
        break;
      case "buffer":
        v.codepage == 65001 ? d = h.toString("utf8") : (v.codepage, d = vr && Buffer.isBuffer(h) ? h.toString("binary") : Oa(h));
        break;
      case "array":
        d = Cn(h);
        break;
      case "string":
        d = h;
        break;
      default:
        throw new Error("Unrecognized type " + v.type);
    }
    return x[0] == 239 && x[1] == 187 && x[2] == 191 ? d = Pr(d.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? d = Pr(d) : v.type == "binary", d.slice(0, 19) == "socialcalc:version:" ? Rl.to_sheet(v.type == "string" ? d : Pr(d), v) : s(d, v);
  }
  function c(h, v) {
    return dn(f(h, v), v);
  }
  function u(h) {
    var v = [];
    if (!h["!ref"]) return "";
    for (var d = Dr(h["!ref"]), x, _ = h["!data"] != null, y = d.s.r; y <= d.e.r; ++y) {
      for (var m = [], g = d.s.c; g <= d.e.c; ++g) {
        var S = wr({ r: y, c: g });
        if (x = _ ? (h["!data"][y] || [])[g] : h[S], !x || x.v == null) {
          m.push("          ");
          continue;
        }
        for (var E = (x.w || (ja(x), x.w) || "").slice(0, 10); E.length < 10; ) E += " ";
        m.push(E + (g === 0 ? " " : ""));
      }
      v.push(m.join(""));
    }
    return v.join(`
`);
  }
  return { to_workbook: c, to_sheet: f, from_sheet: u };
})();
function Xv(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = true;
  try {
    var n = Ol.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return ii.to_workbook(e, r);
  }
}
var Sn = /* @__PURE__ */ (function() {
  function e(R, W, z) {
    if (R) {
      ct(R, R.l || 0);
      for (var V = z.Enum || Te; R.l < R.length; ) {
        var ue = R.read_shift(2), I = V[ue] || V[65535], Ce = R.read_shift(2), Ue = R.l + Ce, Se = I.f && I.f(R, Ce, z);
        if (R.l = Ue, W(Se, I, ue)) return;
      }
    }
  }
  function r(R, W) {
    switch (W.type) {
      case "base64":
        return a(Ht(Qt(R)), W);
      case "binary":
        return a(Ht(R), W);
      case "buffer":
      case "array":
        return a(R, W);
    }
    throw "Unsupported type " + W.type;
  }
  var t = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(R, W) {
    if (!R) return R;
    var z = W || {}, V = {}, ue = "Sheet1", I = "", Ce = 0, Ue = {}, Se = [], ar = [], rr = [];
    z.dense && (rr = V["!data"] = []);
    var fr = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Cr = z.sheetRows || 0, kr = {};
    if (R[4] == 81 && R[5] == 80 && R[6] == 87) return Ze(R, W);
    if (R[2] == 0 && (R[3] == 8 || R[3] == 9) && R.length >= 16 && R[14] == 5 && R[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (R[2] == 2) z.Enum = Te, e(R, function(Oe, Zr, $r) {
      switch ($r) {
        case 0:
          z.vers = Oe, Oe >= 4096 && (z.qpro = true);
          break;
        case 255:
          z.vers = Oe, z.works = true;
          break;
        case 6:
          fr = Oe;
          break;
        case 204:
          Oe && (I = Oe);
          break;
        case 222:
          I = Oe;
          break;
        case 15:
        case 51:
          (!z.qpro && !z.works || $r == 51) && Oe[1].v.charCodeAt(0) < 48 && (Oe[1].v = Oe[1].v.slice(1)), (z.works || z.works2) && (Oe[1].v = Oe[1].v.replace(/\r\n/g, `
`));
        case 13:
        case 14:
        case 16:
          (Oe[2] & 112) == 112 && (Oe[2] & 15) > 1 && (Oe[2] & 15) < 15 && (Oe[1].z = z.dateNF || t[(Oe[2] & 15) - 1] || nr[14], z.cellDates && (Oe[1].v = Va(Oe[1].v), Oe[1].t = typeof Oe[1].v == "number" ? "n" : "d")), z.qpro && Oe[3] > Ce && (V["!ref"] = dr(fr), Ue[ue] = V, Se.push(ue), V = {}, z.dense && (rr = V["!data"] = []), fr = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], ue = I || "Sheet" + (Ce + 1), I = "");
          var Mr = z.dense ? (rr[Oe[0].r] || [])[Oe[0].c] : V[wr(Oe[0])];
          if (Mr) {
            Mr.t = Oe[1].t, Mr.v = Oe[1].v, Oe[1].z != null && (Mr.z = Oe[1].z), Oe[1].f != null && (Mr.f = Oe[1].f), kr = Mr;
            break;
          }
          z.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : V[wr(Oe[0])] = Oe[1], kr = Oe[1];
          break;
        case 21509:
          z.works2 = true;
          break;
        case 21506:
          Oe == 5281 && (kr.z = "hh:mm:ss", z.cellDates && kr.t == "n" && (kr.v = Va(kr.v), kr.t = typeof kr.v == "number" ? "n" : "d"));
          break;
      }
    }, z);
    else if (R[2] == 26 || R[2] == 14) z.Enum = ye, R[2] == 14 && (z.qpro = true, R.l = 0), e(R, function(Oe, Zr, $r) {
      switch ($r) {
        case 204:
          ue = Oe;
          break;
        case 22:
          Oe[1].v.charCodeAt(0) < 48 && (Oe[1].v = Oe[1].v.slice(1)), Oe[1].v = Oe[1].v.replace(/\x0F./g, function(Mr) {
            return String.fromCharCode(Mr.charCodeAt(1) - 32);
          }).replace(/\r\n/g, `
`);
        case 23:
        case 24:
        case 25:
        case 37:
        case 39:
        case 40:
          if (Oe[3] > Ce && (V["!ref"] = dr(fr), Ue[ue] = V, Se.push(ue), V = {}, z.dense && (rr = V["!data"] = []), fr = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], ue = "Sheet" + (Ce + 1)), Cr > 0 && Oe[0].r >= Cr) break;
          z.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : V[wr(Oe[0])] = Oe[1], fr.e.c < Oe[0].c && (fr.e.c = Oe[0].c), fr.e.r < Oe[0].r && (fr.e.r = Oe[0].r);
          break;
        case 27:
          Oe[14e3] && (ar[Oe[14e3][0]] = Oe[14e3][1]);
          break;
        case 1537:
          ar[Oe[0]] = Oe[1], Oe[0] == Ce && (ue = Oe[1]);
          break;
      }
    }, z);
    else throw new Error("Unrecognized LOTUS BOF " + R[2]);
    if (V["!ref"] = dr(fr), Ue[I || ue] = V, Se.push(I || ue), !ar.length) return { SheetNames: Se, Sheets: Ue };
    for (var Xr = {}, ze = [], Er = 0; Er < ar.length; ++Er) Ue[Se[Er]] ? (ze.push(ar[Er] || Se[Er]), Xr[ar[Er]] = Ue[ar[Er]] || Ue[Se[Er]]) : (ze.push(ar[Er]), Xr[ar[Er]] = { "!ref": "A1" });
    return { SheetNames: ze, Sheets: Xr };
  }
  function n(R, W) {
    var z = W || {};
    if (+z.codepage >= 0 && pa(+z.codepage), z.type == "string") throw new Error("Cannot write WK1 to JS string");
    var V = Pt();
    if (!R["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var ue = Dr(R["!ref"]), I = R["!data"] != null, Ce = [];
    _e(V, 0, s(1030)), _e(V, 6, u(ue));
    for (var Ue = Math.min(ue.e.r, 8191), Se = ue.s.c; Se <= ue.e.c; ++Se) Ce[Se] = mr(Se);
    for (var ar = ue.s.r; ar <= Ue; ++ar) {
      var rr = br(ar);
      for (Se = ue.s.c; Se <= ue.e.c; ++Se) {
        var fr = I ? (R["!data"][ar] || [])[Se] : R[Ce[Se] + rr];
        if (!(!fr || fr.t == "z")) switch (fr.t) {
          case "n":
            (fr.v | 0) == fr.v && fr.v >= -32768 && fr.v <= 32767 ? _e(V, 13, m(ar, Se, fr)) : _e(V, 14, S(ar, Se, fr));
            break;
          case "d":
            var Cr = qr(fr.v);
            (Cr | 0) == Cr && Cr >= -32768 && Cr <= 32767 ? _e(V, 13, m(ar, Se, { v: Cr, z: fr.z || nr[14] })) : _e(V, 14, S(ar, Se, { v: Cr, z: fr.z || nr[14] }));
            break;
          default:
            var kr = ja(fr);
            _e(V, 15, x(ar, Se, kr.slice(0, 239)));
        }
      }
    }
    return _e(V, 1), V.end();
  }
  function i(R, W) {
    var z = W || {};
    if (+z.codepage >= 0 && pa(+z.codepage), z.type == "string") throw new Error("Cannot write WK3 to JS string");
    var V = Pt();
    _e(V, 0, f(R));
    for (var ue = 0, I = 0; ue < R.SheetNames.length; ++ue) (R.Sheets[R.SheetNames[ue]] || {})["!ref"] && _e(V, 27, Le(R.SheetNames[ue], I++));
    var Ce = 0;
    for (ue = 0; ue < R.SheetNames.length; ++ue) {
      var Ue = R.Sheets[R.SheetNames[ue]];
      if (!(!Ue || !Ue["!ref"])) {
        for (var Se = Dr(Ue["!ref"]), ar = Ue["!data"] != null, rr = [], fr = Math.min(Se.e.r, 8191), Cr = Se.s.r; Cr <= fr; ++Cr) for (var kr = br(Cr), Xr = Se.s.c; Xr <= Se.e.c; ++Xr) {
          Cr === Se.s.r && (rr[Xr] = mr(Xr));
          var ze = rr[Xr] + kr, Er = ar ? (Ue["!data"][Cr] || [])[Xr] : Ue[ze];
          if (!(!Er || Er.t == "z")) if (Er.t == "n") _e(V, 23, de(Cr, Xr, Ce, Er.v));
          else {
            var Oe = ja(Er);
            _e(V, 22, K(Cr, Xr, Ce, Oe.slice(0, 239)));
          }
        }
        ++Ce;
      }
    }
    return _e(V, 1), V.end();
  }
  function s(R) {
    var W = oe(2);
    return W.write_shift(2, R), W;
  }
  function f(R) {
    var W = oe(26);
    W.write_shift(2, 4096), W.write_shift(2, 4), W.write_shift(4, 0);
    for (var z = 0, V = 0, ue = 0, I = 0; I < R.SheetNames.length; ++I) {
      var Ce = R.SheetNames[I], Ue = R.Sheets[Ce];
      if (!(!Ue || !Ue["!ref"])) {
        ++ue;
        var Se = wt(Ue["!ref"]);
        z < Se.e.r && (z = Se.e.r), V < Se.e.c && (V = Se.e.c);
      }
    }
    return z > 8191 && (z = 8191), W.write_shift(2, z), W.write_shift(1, ue), W.write_shift(1, V), W.write_shift(2, 0), W.write_shift(2, 0), W.write_shift(1, 1), W.write_shift(1, 2), W.write_shift(4, 0), W.write_shift(4, 0), W;
  }
  function c(R, W, z) {
    var V = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return W == 8 && z.qpro ? (V.s.c = R.read_shift(1), R.l++, V.s.r = R.read_shift(2), V.e.c = R.read_shift(1), R.l++, V.e.r = R.read_shift(2), V) : (V.s.c = R.read_shift(2), V.s.r = R.read_shift(2), W == 12 && z.qpro && (R.l += 2), V.e.c = R.read_shift(2), V.e.r = R.read_shift(2), W == 12 && z.qpro && (R.l += 2), V.s.c == 65535 && (V.s.c = V.e.c = V.s.r = V.e.r = 0), V);
  }
  function u(R) {
    var W = oe(8);
    return W.write_shift(2, R.s.c), W.write_shift(2, R.s.r), W.write_shift(2, R.e.c), W.write_shift(2, R.e.r), W;
  }
  function h(R, W, z) {
    var V = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return z.qpro && z.vers != 20768 ? (V[0].c = R.read_shift(1), V[3] = R.read_shift(1), V[0].r = R.read_shift(2), R.l += 2) : z.works ? (V[0].c = R.read_shift(2), V[0].r = R.read_shift(2), V[2] = R.read_shift(2)) : (V[2] = R.read_shift(1), V[0].c = R.read_shift(2), V[0].r = R.read_shift(2)), V;
  }
  function v(R) {
    return R.z && ua(R.z) ? 240 | (t.indexOf(R.z) + 1 || 2) : 255;
  }
  function d(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].t = "s", (z.vers & 65534) == 20768) {
      R.l++;
      var I = R.read_shift(1);
      return ue[1].v = R.read_shift(I, "utf8"), ue;
    }
    return z.qpro && R.l++, ue[1].v = R.read_shift(V - R.l, "cstr"), ue;
  }
  function x(R, W, z) {
    var V = oe(7 + z.length);
    V.write_shift(1, 255), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(1, 39);
    for (var ue = 0; ue < V.length; ++ue) {
      var I = z.charCodeAt(ue);
      V.write_shift(1, I >= 128 ? 95 : I);
    }
    return V.write_shift(1, 0), V;
  }
  function _(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].t = "s", z.vers == 20768) {
      var I = R.read_shift(1);
      return ue[1].v = R.read_shift(I, "utf8"), ue;
    }
    return ue[1].v = R.read_shift(V - R.l, "cstr"), ue;
  }
  function y(R, W, z) {
    var V = h(R, W, z);
    return V[1].v = R.read_shift(2, "i"), V;
  }
  function m(R, W, z) {
    var V = oe(7);
    return V.write_shift(1, v(z)), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(2, z.v, "i"), V;
  }
  function g(R, W, z) {
    var V = h(R, W, z);
    return V[1].v = R.read_shift(8, "f"), V;
  }
  function S(R, W, z) {
    var V = oe(13);
    return V.write_shift(1, v(z)), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(8, z.v, "f"), V;
  }
  function E(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].v = R.read_shift(8, "f"), z.qpro) R.l = V;
    else {
      var I = R.read_shift(2);
      F(R.slice(R.l, R.l + I), ue), R.l += I;
    }
    return ue;
  }
  function A(R, W, z) {
    var V = W & 32768;
    return W &= -32769, W = (V ? R : 0) + (W >= 8192 ? W - 16384 : W), (V ? "" : "$") + (z ? mr(W) : br(W));
  }
  var X = { 31: ["NA", 0], 33: ["ABS", 1], 34: ["TRUNC", 1], 35: ["SQRT", 1], 36: ["LOG", 1], 37: ["LN", 1], 38: ["PI", 0], 39: ["SIN", 1], 40: ["COS", 1], 41: ["TAN", 1], 42: ["ATAN2", 2], 43: ["ATAN", 1], 44: ["ASIN", 1], 45: ["ACOS", 1], 46: ["EXP", 1], 47: ["MOD", 2], 49: ["ISNA", 1], 50: ["ISERR", 1], 51: ["FALSE", 0], 52: ["TRUE", 0], 53: ["RAND", 0], 54: ["DATE", 3], 63: ["ROUND", 2], 64: ["TIME", 3], 68: ["ISNUMBER", 1], 69: ["ISTEXT", 1], 70: ["LEN", 1], 71: ["VALUE", 1], 73: ["MID", 3], 74: ["CHAR", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 102: ["UPPER", 1], 103: ["LOWER", 1], 107: ["PROPER", 1], 109: ["TRIM", 1], 111: ["T", 1] }, U = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function F(R, W) {
    ct(R, 0);
    for (var z = [], V = 0, ue = "", I = "", Ce = "", Ue = ""; R.l < R.length; ) {
      var Se = R[R.l++];
      switch (Se) {
        case 0:
          z.push(R.read_shift(8, "f"));
          break;
        case 1:
          I = A(W[0].c, R.read_shift(2), true), ue = A(W[0].r, R.read_shift(2), false), z.push(I + ue);
          break;
        case 2:
          {
            var ar = A(W[0].c, R.read_shift(2), true), rr = A(W[0].r, R.read_shift(2), false);
            I = A(W[0].c, R.read_shift(2), true), ue = A(W[0].r, R.read_shift(2), false), z.push(ar + rr + ":" + I + ue);
          }
          break;
        case 3:
          if (R.l < R.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          z.push("(" + z.pop() + ")");
          break;
        case 5:
          z.push(R.read_shift(2));
          break;
        case 6:
          {
            for (var fr = ""; Se = R[R.l++]; ) fr += String.fromCharCode(Se);
            z.push('"' + fr.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          z.push("-" + z.pop());
          break;
        case 23:
          z.push("+" + z.pop());
          break;
        case 22:
          z.push("NOT(" + z.pop() + ")");
          break;
        case 20:
        case 21:
          Ue = z.pop(), Ce = z.pop(), z.push(["AND", "OR"][Se - 20] + "(" + Ce + "," + Ue + ")");
          break;
        default:
          if (Se < 32 && U[Se]) Ue = z.pop(), Ce = z.pop(), z.push(Ce + U[Se] + Ue);
          else if (X[Se]) {
            if (V = X[Se][1], V == 69 && (V = R[R.l++]), V > z.length) {
              console.error("WK1 bad formula parse 0x" + Se.toString(16) + ":|" + z.join("|") + "|");
              return;
            }
            var Cr = z.slice(-V);
            z.length -= V, z.push(X[Se][0] + "(" + Cr.join(",") + ")");
          } else return Se <= 7 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 24 ? console.error("WK1 unsupported op " + Se.toString(16)) : Se <= 30 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 115 ? console.error("WK1 unsupported function opcode " + Se.toString(16)) : console.error("WK1 unrecognized opcode " + Se.toString(16));
      }
    }
    z.length == 1 ? W[1].f = "" + z[0] : console.error("WK1 bad formula parse |" + z.join("|") + "|");
  }
  function B(R) {
    var W = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return W[0].r = R.read_shift(2), W[3] = R[R.l++], W[0].c = R[R.l++], W;
  }
  function L(R, W) {
    var z = B(R);
    return z[1].t = "s", z[1].v = R.read_shift(W - 4, "cstr"), z;
  }
  function K(R, W, z, V) {
    var ue = oe(6 + V.length);
    ue.write_shift(2, R), ue.write_shift(1, z), ue.write_shift(1, W), ue.write_shift(1, 39);
    for (var I = 0; I < V.length; ++I) {
      var Ce = V.charCodeAt(I);
      ue.write_shift(1, Ce >= 128 ? 95 : Ce);
    }
    return ue.write_shift(1, 0), ue;
  }
  function G(R, W) {
    var z = B(R);
    z[1].v = R.read_shift(2);
    var V = z[1].v >> 1;
    if (z[1].v & 1) switch (V & 7) {
      case 0:
        V = (V >> 3) * 5e3;
        break;
      case 1:
        V = (V >> 3) * 500;
        break;
      case 2:
        V = (V >> 3) / 20;
        break;
      case 3:
        V = (V >> 3) / 200;
        break;
      case 4:
        V = (V >> 3) / 2e3;
        break;
      case 5:
        V = (V >> 3) / 2e4;
        break;
      case 6:
        V = (V >> 3) / 16;
        break;
      case 7:
        V = (V >> 3) / 64;
        break;
    }
    return z[1].v = V, z;
  }
  function te(R, W) {
    var z = B(R), V = R.read_shift(4), ue = R.read_shift(4), I = R.read_shift(2);
    if (I == 65535) return V === 0 && ue === 3221225472 ? (z[1].t = "e", z[1].v = 15) : V === 0 && ue === 3489660928 ? (z[1].t = "e", z[1].v = 42) : z[1].v = 0, z;
    var Ce = I & 32768;
    return I = (I & 32767) - 16446, z[1].v = (1 - Ce * 2) * (ue * Math.pow(2, I + 32) + V * Math.pow(2, I)), z;
  }
  function de(R, W, z, V) {
    var ue = oe(14);
    if (ue.write_shift(2, R), ue.write_shift(1, z), ue.write_shift(1, W), V == 0) return ue.write_shift(4, 0), ue.write_shift(4, 0), ue.write_shift(2, 65535), ue;
    var I = 0, Ce = 0, Ue = 0, Se = 0;
    return V < 0 && (I = 1, V = -V), Ce = Math.log2(V) | 0, V /= Math.pow(2, Ce - 31), Se = V >>> 0, (Se & 2147483648) == 0 && (V /= 2, ++Ce, Se = V >>> 0), V -= Se, Se |= 2147483648, Se >>>= 0, V *= Math.pow(2, 32), Ue = V >>> 0, ue.write_shift(4, Ue), ue.write_shift(4, Se), Ce += 16383 + (I ? 32768 : 0), ue.write_shift(2, Ce), ue;
  }
  function Ve(R, W) {
    var z = te(R);
    return R.l += W - 14, z;
  }
  function ge(R, W) {
    var z = B(R), V = R.read_shift(4);
    return z[1].v = V >> 6, z;
  }
  function $e(R, W) {
    var z = B(R), V = R.read_shift(8, "f");
    return z[1].v = V, z;
  }
  function ke(R, W) {
    var z = $e(R);
    return R.l += W - 12, z;
  }
  function Pe(R, W) {
    return R[R.l + W - 1] == 0 ? R.read_shift(W, "cstr") : "";
  }
  function Qe(R, W) {
    var z = R[R.l++];
    z > W - 1 && (z = W - 1);
    for (var V = ""; V.length < z; ) V += String.fromCharCode(R[R.l++]);
    return V;
  }
  function he(R, W, z) {
    if (!(!z.qpro || W < 21)) {
      var V = R.read_shift(1);
      R.l += 17, R.l += 1, R.l += 2;
      var ue = R.read_shift(W - 21, "cstr");
      return [V, ue];
    }
  }
  function sr(R, W) {
    for (var z = {}, V = R.l + W; R.l < V; ) {
      var ue = R.read_shift(2);
      if (ue == 14e3) {
        for (z[ue] = [0, ""], z[ue][0] = R.read_shift(2); R[R.l]; ) z[ue][1] += String.fromCharCode(R[R.l]), R.l++;
        R.l++;
      }
    }
    return z;
  }
  function Le(R, W) {
    var z = oe(5 + R.length);
    z.write_shift(2, 14e3), z.write_shift(2, W);
    for (var V = 0; V < R.length; ++V) {
      var ue = R.charCodeAt(V);
      z[z.l++] = ue > 127 ? 95 : ue;
    }
    return z[z.l++] = 0, z;
  }
  var Te = { 0: { n: "BOF", f: Yr }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: c }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: y }, 14: { n: "NUMBER", f: g }, 15: { n: "LABEL", f: d }, 16: { n: "FORMULA", f: E }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: _ }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: Pe }, 222: { n: "SHEETNAMELP", f: Qe }, 255: { n: "BOF", f: Yr }, 21506: { n: "WKSNF", f: Yr }, 65535: { n: "" } }, ye = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: L }, 23: { n: "NUMBER17", f: te }, 24: { n: "NUMBER18", f: G }, 25: { n: "FORMULA19", f: Ve }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: sr }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: ge }, 38: { n: "??" }, 39: { n: "NUMBER27", f: $e }, 40: { n: "FORMULA28", f: ke }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: Pe }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: he }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }, je = { 5: "dd-mmm-yy", 6: "dd-mmm", 7: "mmm-yy", 8: "mm/dd/yy", 10: "hh:mm:ss AM/PM", 11: "hh:mm AM/PM", 14: "dd-mmm-yyyy", 15: "mmm-yyyy", 34: "0.00", 50: "0.00;[Red]0.00", 66: "0.00;(0.00)", 82: "0.00;[Red](0.00)", 162: '"$"#,##0.00;\\("$"#,##0.00\\)', 288: "0%", 304: "0E+00", 320: "# ?/?" };
  function Ge(R) {
    var W = R.read_shift(2), z = R.read_shift(1);
    if (z != 0) throw "unsupported QPW string type " + z.toString(16);
    return R.read_shift(W, "sbcs-cont");
  }
  function Ze(R, W) {
    ct(R, 0);
    var z = W || {}, V = {};
    z.dense && (V["!data"] = []);
    var ue = [], I = "", Ce = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, Ue = 0, Se = 0, ar = 0, rr = 0, fr = { SheetNames: [], Sheets: {} }, Cr = [];
    e: for (; R.l < R.length; ) {
      var kr = R.read_shift(2), Xr = R.read_shift(2), ze = R.slice(R.l, R.l + Xr);
      switch (ct(ze, 0), kr) {
        case 1:
          if (ze.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var Er = ze.read_shift(4), Oe = (ze.length - ze.l) / Er | 0, Zr = 0; Zr < Er; ++Zr) {
            var $r = ze.l + Oe, Mr = {};
            ze.l += 2, Mr.numFmtId = ze.read_shift(2), je[Mr.numFmtId] && (Mr.z = je[Mr.numFmtId]), ze.l = $r, Cr.push(Mr);
          }
          break;
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for (ze.l += 12; ze.l < ze.length; ) Ue = ze.read_shift(2), Se = ze.read_shift(1), ue.push(ze.read_shift(Ue, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var yt = ze.read_shift(2);
            V = {}, z.dense && (V["!data"] = []), Ce.s.c = ze.read_shift(2), Ce.e.c = ze.read_shift(2), Ce.s.r = ze.read_shift(4), Ce.e.r = ze.read_shift(4), ze.l += 4, ze.l + 2 < ze.length && (Ue = ze.read_shift(2), Se = ze.read_shift(1), I = Ue == 0 ? "" : ze.read_shift(Ue, "cstr")), I || (I = mr(yt));
          }
          break;
        case 1538:
          {
            if (Ce.s.c > 255 || Ce.s.r > 999999) break;
            Ce.e.c < Ce.s.c && (Ce.e.c = Ce.s.c), Ce.e.r < Ce.s.r && (Ce.e.r = Ce.s.r), V["!ref"] = dr(Ce), us(fr, V, I);
          }
          break;
        case 2561:
          ar = ze.read_shift(2), Ce.e.c < ar && (Ce.e.c = ar), Ce.s.c > ar && (Ce.s.c = ar), rr = ze.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), rr = ze.read_shift(4), Ce.e.r < rr && (Ce.e.r = rr);
          break;
        case 3073:
          {
            rr = ze.read_shift(4), Ue = ze.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), Ce.e.r < rr + Ue - 1 && (Ce.e.r = rr + Ue - 1);
            for (var dt = mr(ar); ze.l < ze.length; ) {
              var Ke = { t: "z" }, yr = ze.read_shift(1), Kr = -1;
              yr & 128 && (Kr = ze.read_shift(2));
              var Gr = yr & 64 ? ze.read_shift(2) - 1 : 0;
              switch (yr & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  Ke = { t: "n", v: ze.read_shift(2) };
                  break;
                case 3:
                  Ke = { t: "n", v: ze.read_shift(2, "i") };
                  break;
                case 4:
                  Ke = { t: "n", v: d0(ze) };
                  break;
                case 5:
                  Ke = { t: "n", v: ze.read_shift(8, "f") };
                  break;
                case 7:
                  Ke = { t: "s", v: ue[Se = ze.read_shift(4) - 1] };
                  break;
                case 8:
                  Ke = { t: "n", v: ze.read_shift(8, "f") }, ze.l += 2, ze.l += 4, isNaN(Ke.v) && (Ke = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (yr & 31);
              }
              Kr != -1 && (Cr[Kr - 1] || {}).z && (Ke.z = Cr[Kr - 1].z);
              var xt = 0;
              if (yr & 32) switch (yr & 31) {
                case 2:
                  xt = ze.read_shift(2);
                  break;
                case 3:
                  xt = ze.read_shift(2, "i");
                  break;
                case 7:
                  xt = ze.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (yr & 31);
              }
              if (!(!z.sheetStubs && Ke.t == "z")) {
                var Je = Hr(Ke);
                Ke.t == "n" && Ke.z && ua(Ke.z) && z.cellDates && (Je.v = Va(Ke.v), Je.t = typeof Je.v == "number" ? "n" : "d"), V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = Je) : V[dt + br(rr)] = Je;
              }
              for (++rr, --Ue; Gr-- > 0 && Ue >= 0; ) {
                if (yr & 32) switch (yr & 31) {
                  case 2:
                    Ke = { t: "n", v: Ke.v + xt & 65535 };
                    break;
                  case 3:
                    Ke = { t: "n", v: Ke.v + xt & 65535 }, Ke.v > 32767 && (Ke.v -= 65536);
                    break;
                  case 7:
                    Ke = { t: "s", v: ue[Se = Se + xt >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (yr & 31);
                }
                else switch (yr & 31) {
                  case 1:
                    Ke = { t: "z" };
                    break;
                  case 2:
                    Ke = { t: "n", v: ze.read_shift(2) };
                    break;
                  case 7:
                    Ke = { t: "s", v: ue[Se = ze.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (yr & 31);
                }
                !z.sheetStubs && Ke.t == "z" || (V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = Ke) : V[dt + br(rr)] = Ke), ++rr, --Ue;
              }
            }
          }
          break;
        case 3074:
          {
            ar = ze.read_shift(2), rr = ze.read_shift(4);
            var wa = Ge(ze);
            V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = { t: "s", v: wa }) : V[mr(ar) + br(rr)] = { t: "s", v: wa };
          }
          break;
      }
      R.l += Xr;
    }
    return fr;
  }
  return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
})();
function Kv(e) {
  var r = {}, t = e.match(Et), a = 0, n = false;
  if (t) for (; a != t.length; ++a) {
    var i = Ye(t[a]);
    switch (i[0].replace(/<\w*:/g, "<")) {
      case "<condense":
        break;
      case "<extend":
        break;
      case "<shadow":
        if (!i.val) break;
      case "<shadow>":
      case "<shadow/>":
        r.shadow = 1;
        break;
      case "</shadow>":
        break;
      case "<charset":
        if (i.val == "1") break;
        r.cp = Rf[parseInt(i.val, 10)];
        break;
      case "<outline":
        if (!i.val) break;
      case "<outline>":
      case "<outline/>":
        r.outline = 1;
        break;
      case "</outline>":
        break;
      case "<rFont":
        r.name = i.val;
        break;
      case "<sz":
        r.sz = i.val;
        break;
      case "<strike":
        if (!i.val) break;
      case "<strike>":
      case "<strike/>":
        r.strike = 1;
        break;
      case "</strike>":
        break;
      case "<u":
        if (!i.val) break;
        switch (i.val) {
          case "double":
            r.uval = "double";
            break;
          case "singleAccounting":
            r.uval = "single-accounting";
            break;
          case "doubleAccounting":
            r.uval = "double-accounting";
            break;
        }
      case "<u>":
      case "<u/>":
        r.u = 1;
        break;
      case "</u>":
        break;
      case "<b":
        if (i.val == "0") break;
      case "<b>":
      case "<b/>":
        r.b = 1;
        break;
      case "</b>":
        break;
      case "<i":
        if (i.val == "0") break;
      case "<i>":
      case "<i/>":
        r.i = 1;
        break;
      case "</i>":
        break;
      case "<color":
        i.rgb && (r.color = i.rgb.slice(2, 8));
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      case "<family":
        r.family = i.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      case "<vertAlign":
        r.valign = i.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = true;
        break;
      case "</ext>":
        n = false;
        break;
      default:
        if (i[0].charCodeAt(1) !== 47 && !n) throw new Error("Unrecognized rich format " + i[0]);
    }
  }
  return r;
}
var jv = /* @__PURE__ */ (function() {
  function e(a) {
    var n = gt(a, "t");
    if (!n) return { t: "s", v: "" };
    var i = { t: "s", v: Fr(n[1]) }, s = gt(a, "rPr");
    return s && (i.s = Kv(s[1])), i;
  }
  var r = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(n) {
    return n.replace(r, "").split(t).map(e).filter(function(i) {
      return i.v;
    });
  };
})(), Gv = /* @__PURE__ */ (function() {
  var r = /(\r\n|\n)/g;
  function t(n, i, s) {
    var f = [];
    n.u && f.push("text-decoration: underline;"), n.uval && f.push("text-underline-style:" + n.uval + ";"), n.sz && f.push("font-size:" + n.sz + "pt;"), n.outline && f.push("text-effect: outline;"), n.shadow && f.push("text-shadow: auto;"), i.push('<span style="' + f.join("") + '">'), n.b && (i.push("<b>"), s.push("</b>")), n.i && (i.push("<i>"), s.push("</i>")), n.strike && (i.push("<s>"), s.push("</s>"));
    var c = n.valign || "";
    return c == "superscript" || c == "super" ? c = "sup" : c == "subscript" && (c = "sub"), c != "" && (i.push("<" + c + ">"), s.push("</" + c + ">")), s.push("</span>"), n;
  }
  function a(n) {
    var i = [[], n.v, []];
    return n.v ? (n.s && t(n.s, i[0], i[2]), i[0].join("") + i[1].replace(r, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(a).join("");
  };
})(), zv = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, $v = /<(?:\w+:)?r\b[^<>]*>/;
function ao(e, r) {
  var t = r ? r.cellHTML : true, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Fr(Pr(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true), a.r = Pr(e), t && (a.h = Ai(a.t))) : e.match($v) && (a.r = Pr(e), a.t = Fr(Pr((Dd(e, "rPh").match(zv) || []).join("").replace(Et, "")), true), t && (a.h = Gv(jv(a.r)))), a) : { t: "" };
}
var qv = /<(?:\w+:)?(?:si|sstItem)>/g, Yv = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Zv(e, r) {
  var t = [], a = "";
  if (!e) return t;
  var n = gt(e, "sst");
  if (n) {
    a = n[1].replace(qv, "").split(Yv);
    for (var i = 0; i != a.length; ++i) {
      var s = ao(a[i].trim(), r);
      s != null && (t[t.length] = s);
    }
    n = Ye(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
  }
  return t;
}
var Jv = /^\s|\s$|[\t\n\r]/;
function Qv(e, r) {
  if (!r.bookSST) return "";
  var t = [at];
  t[t.length] = Ae("sst", null, { xmlns: Rn[0], count: e.Count, uniqueCount: e.Unique });
  for (var a = 0; a != e.length; ++a) if (e[a] != null) {
    var n = e[a], i = "<si>";
    n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), typeof n.t != "string" && (n.t = String(n.t)), n.t.match(Jv) && (i += ' xml:space="preserve"'), i += ">" + pr(n.t) + "</t>"), i += "</si>", t[t.length] = i;
  }
  return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function em(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function rm(e, r) {
  var t = [], a = false;
  return za(e, function(i, s, f) {
    switch (f) {
      case 159:
        t.Count = i[0], t.Unique = i[1];
        break;
      case 19:
        t.push(i);
        break;
      case 160:
        return true;
      case 35:
        a = true;
        break;
      case 36:
        a = false;
        break;
      default:
        if (s.T, !a || r.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), t;
}
function tm(e, r) {
  return r || (r = oe(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var am = fx;
function nm(e) {
  var r = Pt();
  ve(r, 159, tm(e));
  for (var t = 0; t < e.length; ++t) ve(r, 19, am(e[t]));
  return ve(r, 160), r.end();
}
function Pl(e) {
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function Ka(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function im(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = Ka(e, 4), r.U = Ka(e, 4), r.W = Ka(e, 4), r;
}
function sm(e) {
  for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return a;
}
function fm(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(sm(e));
  return r;
}
function om(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function cm(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = Ka(e, 4), r.U = Ka(e, 4), r.W = Ka(e, 4), r;
}
function um(e) {
  var r = cm(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function Bl(e, r) {
  var t = e.l + r, a = {};
  a.Flags = e.read_shift(4) & 63, e.l += 4, a.AlgID = e.read_shift(4);
  var n = false;
  switch (a.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = a.Flags == 36;
      break;
    case 26625:
      n = a.Flags == 4;
      break;
    case 0:
      n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + a.AlgID;
  }
  if (!n) throw new Error("Encryption Flags/AlgID mismatch");
  return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(t - e.l >> 1, "utf16le"), e.l = t, a;
}
function Ll(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function lm(e) {
  var r = Ka(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, hm(e)];
    case 3:
      return [r.Minor, dm()];
    case 4:
      return [r.Minor, xm(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function hm(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4), a = Bl(e, t), n = Ll(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function dm() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function xm(e) {
  var r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"), a = {};
  return t.replace(Et, function(i) {
    var s = Ye(i);
    switch (la(s[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        r.forEach(function(f) {
          a[f] = s[f];
        });
        break;
      case "<dataIntegrity":
        a.encryptedHmacKey = s.encryptedHmacKey, a.encryptedHmacValue = s.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        a.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        a.uri = s.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        a.encs.push(s);
        break;
      default:
        throw s[0];
    }
  }), a;
}
function pm(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = Ka(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = Bl(e, n), r -= n, t.EncryptionVerifier = Ll(e, r), t;
}
function vm(e) {
  var r = {}, t = r.EncryptionVersionInfo = Ka(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function no(e) {
  var r = 0, t, a = Pl(e), n = a.length + 1, i, s, f, c, u;
  for (t = fn(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i) s = t[i], f = (r & 16384) === 0 ? 0 : 1, c = r << 1 & 32767, u = f | c, r = u ^ s;
  return r ^ 52811;
}
var Ml = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], c = 104, u = s.length - 1; u >= 0; --u) for (var h = s[u], v = 0; v != 7; ++v) h & 64 && (f ^= t[c]), h *= 2, --c;
    return f;
  };
  return function(s) {
    for (var f = Pl(s), c = i(f), u = f.length, h = fn(16), v = 0; v != 16; ++v) h[v] = 0;
    var d, x, _;
    for ((u & 1) === 1 && (d = c >> 8, h[u] = n(e[0], d), --u, d = c & 255, x = f[f.length - 1], h[u] = n(x, d)); u > 0; ) --u, d = c >> 8, h[u] = n(f[u], d), --u, d = c & 255, h[u] = n(f[u], d);
    for (u = 15, _ = 15 - f.length; _ > 0; ) d = c >> 8, h[u] = n(e[_], d), --u, --_, d = c & 255, h[u] = n(f[u], d), --u, --_;
    return h;
  };
})(), mm = function(e, r, t, a, n) {
  n || (n = r), a || (a = Ml(e));
  var i, s;
  for (i = 0; i != r.length; ++i) s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, gm = function(e) {
  var r = 0, t = Ml(e);
  return function(a) {
    var n = mm("", a, r, t);
    return r = n[1], n[0];
  };
};
function _m(e, r, t, a) {
  var n = { key: Yr(e), verificationBytes: Yr(e) };
  return t.password && (n.verifier = no(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = gm(t.password)), n;
}
function wm(e, r, t) {
  var a = t || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = vm(e) : a.Data = pm(e, r), a;
}
function ym(e, r, t) {
  var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? wm(e, r - 2, a) : _m(e, t.biff >= 8 ? r : r - 2, t, a), a;
}
function km(e, r) {
  switch (r.type) {
    case "base64":
      return Ls(Qt(e), r);
    case "binary":
      return Ls(e, r);
    case "buffer":
      return Ls(vr && Buffer.isBuffer(e) ? e.toString("binary") : Oa(e), r);
    case "array":
      return Ls(Cn(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function Ls(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = Hf(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(c, u) {
    n && (f = a["!data"][u] = []);
    for (var h = /\\[\w\-]+\b/g, v = 0, d, x = -1, _ = []; (d = h.exec(c)) != null; ) {
      var y = c.slice(v, h.lastIndex - d[0].length);
      switch (y.charCodeAt(0) == 32 && (y = y.slice(1)), y.length && _.push(y), d[0]) {
        case "\\cell":
          if (++x, _.length) {
            var m = { v: _.join(""), t: "s" };
            m.v == "TRUE" || m.v == "FALSE" ? (m.v = m.v == "TRUE", m.t = "b") : isNaN(Jt(m.v)) ? _t[m.v] != null && (m.t = "e", m.w = m.v, m.v = _t[m.v]) : (m.t = "n", t.cellText !== false && (m.w = m.v), m.v = Jt(m.v)), n ? f[x] = m : a[wr({ r: u, c: x })] = m;
          }
          _ = [];
          break;
        case "\\par":
          _.push(`
`);
          break;
      }
      v = h.lastIndex;
    }
    x > s.e.c && (s.e.c = x);
  }), a["!ref"] = dr(s), a;
}
function Em(e, r) {
  var t = dn(km(e, r), r);
  return t.bookType = "rtf", t;
}
function Tm(e, r) {
  var t = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) return t[0] + "}";
  for (var a = Dr(e["!ref"]), n, i = e["!data"] != null, s = [], f = a.s.r; f <= a.e.r; ++f) {
    t.push("\\trowd\\trautofit1");
    for (var c = a.s.c; c <= a.e.c; ++c) t.push("\\cellx" + (c + 1));
    for (t.push("\\pard\\intbl"), i && (s = e["!data"][f] || []), c = a.s.c; c <= a.e.c; ++c) {
      var u = wr({ r: f, c });
      if (n = i ? s[c] : e[u], !n || n.v == null && (!n.f || n.F)) {
        t.push(" \\cell");
        continue;
      }
      t.push(" " + (n.w || (ja(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function Sm(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function zi(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function bm(e) {
  var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), i = Math.min(r, t, a), s = n - i;
  if (s === 0) return [0, 0, r];
  var f = 0, c = 0, u = n + i;
  switch (c = s / (u > 1 ? 2 - u : u), n) {
    case r:
      f = ((t - a) / s + 6) % 6;
      break;
    case t:
      f = (a - r) / s + 2;
      break;
    case a:
      f = (r - t) / s + 4;
      break;
  }
  return [f / 6, c, u / 2];
}
function Fm(e) {
  var r = e[0], t = e[1], a = e[2], n = t * 2 * (a < 0.5 ? a : 1 - a), i = a - n / 2, s = [i, i, i], f = 6 * r, c;
  if (t !== 0) switch (f | 0) {
    case 0:
    case 6:
      c = n * f, s[0] += n, s[1] += c;
      break;
    case 1:
      c = n * (2 - f), s[0] += c, s[1] += n;
      break;
    case 2:
      c = n * (f - 2), s[1] += n, s[2] += c;
      break;
    case 3:
      c = n * (4 - f), s[1] += c, s[2] += n;
      break;
    case 4:
      c = n * (f - 4), s[2] += n, s[0] += c;
      break;
    case 5:
      c = n * (6 - f), s[2] += c, s[0] += n;
      break;
  }
  for (var u = 0; u != 3; ++u) s[u] = Math.round(s[u] * 255);
  return s;
}
function n0(e, r) {
  if (r === 0) return e;
  var t = bm(Sm(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), zi(Fm(t));
}
var Ul = 6, Am = 15, Cm = 1, Ot = Ul;
function $i(e) {
  return Math.floor((e + Math.round(128 / Ot) / 256) * Ot);
}
function qi(e) {
  return Math.floor((e - 5) / Ot * 100 + 0.5) / 100;
}
function i0(e) {
  return Math.round((e * Ot + 5) / Ot * 256) / 256;
}
function nf(e) {
  return i0(qi($i(e)));
}
function io(e) {
  var r = Math.abs(e - nf(e)), t = Ot;
  if (r > 5e-3) for (Ot = Cm; Ot < Am; ++Ot) Math.abs(e - nf(e)) <= r && (r = Math.abs(e - nf(e)), t = Ot);
  Ot = t;
}
function on(e) {
  e.width ? (e.wpx = $i(e.width), e.wch = qi(e.wpx), e.MDW = Ot) : e.wpx ? (e.wch = qi(e.wpx), e.width = i0(e.wch), e.MDW = Ot) : typeof e.wch == "number" && (e.width = i0(e.wch), e.wpx = $i(e.width), e.MDW = Ot), e.customWidth && delete e.customWidth;
}
var Dm = 96, Wl = Dm;
function Yi(e) {
  return e * 96 / Wl;
}
function si(e) {
  return e * Wl / 96;
}
var Im = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function Om(e, r, t, a) {
  r.Borders = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (la(f[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = {}, f.diagonalUp && (n.diagonalUp = Rr(f.diagonalUp)), f.diagonalDown && (n.diagonalDown = Rr(f.diagonalDown)), r.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      default:
        if (a && a.WTF && !i) throw new Error("unrecognized " + f[0] + " in borders");
    }
  });
}
function Nm(e, r, t, a) {
  r.Fills = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (la(f[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        n = {}, r.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        r.Fills.push(n), n = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        f.patternType && (n.patternType = f.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}), f.indexed && (n.bgColor.indexed = parseInt(f.indexed, 10)), f.theme && (n.bgColor.theme = parseInt(f.theme, 10)), f.tint && (n.bgColor.tint = parseFloat(f.tint)), f.rgb && (n.bgColor.rgb = f.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}), f.theme && (n.fgColor.theme = parseInt(f.theme, 10)), f.tint && (n.fgColor.tint = parseFloat(f.tint)), f.rgb != null && (n.fgColor.rgb = f.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      default:
        if (a && a.WTF && !i) throw new Error("unrecognized " + f[0] + " in fills");
    }
  });
}
function Rm(e, r, t, a) {
  r.Fonts = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (la(f[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        r.Fonts.push(n), n = {};
        break;
      case "<name":
        f.val && (n.name = Pr(f.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = f.val ? Rr(f.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "</b>":
      case "</b":
        break;
      case "<i":
        n.italic = f.val ? Rr(f.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "</i>":
      case "</i":
        break;
      case "<u":
        switch (f.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "</u>":
      case "</u":
        break;
      case "<strike":
        n.strike = f.val ? Rr(f.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "</strike>":
      case "</strike":
        break;
      case "<outline":
        n.outline = f.val ? Rr(f.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "</outline>":
      case "</outline":
        break;
      case "<shadow":
        n.shadow = f.val ? Rr(f.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "</shadow>":
      case "</shadow":
        break;
      case "<condense":
        n.condense = f.val ? Rr(f.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "</condense>":
      case "</condense":
        break;
      case "<extend":
        n.extend = f.val ? Rr(f.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "</extend>":
      case "</extend":
        break;
      case "<sz":
        f.val && (n.sz = +f.val);
        break;
      case "<sz/>":
      case "</sz>":
      case "</sz":
        break;
      case "<vertAlign":
        f.val && (n.vertAlign = f.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
      case "</vertAlign":
        break;
      case "<family":
        f.val && (n.family = parseInt(f.val, 10));
        break;
      case "<family/>":
      case "</family>":
      case "</family":
        break;
      case "<scheme":
        f.val && (n.scheme = f.val);
        break;
      case "<scheme/>":
      case "</scheme>":
      case "</scheme":
        break;
      case "<charset":
        if (f.val == "1") break;
        f.codepage = Rf[parseInt(f.val, 10)];
        break;
      case "<charset/>":
      case "</charset>":
      case "</charset":
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = Rr(f.auto)), f.rgb) n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var c = En[n.color.index];
          n.color.index == 81 && (c = En[1]), c || (c = En[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
        } else f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && t.themeElements && t.themeElements.clrScheme && (n.color.rgb = n0(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
      case "</color":
        break;
      case "<AlternateContent":
        i = true;
        break;
      case "</AlternateContent>":
      case "</AlternateContent":
        i = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      default:
        if (a && a.WTF && !i) throw new Error("unrecognized " + f[0] + " in fonts");
    }
  });
}
function Pm(e, r, t) {
  r.NumberFmt = [];
  for (var a = jr(nr), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = nr[a[n]];
  var i = e.match(Et);
  if (i) for (n = 0; n < i.length; ++n) {
    var s = Ye(i[n]);
    switch (la(s[0])) {
      case "<numFmts":
      case "</numFmts>":
      case "<numFmts/>":
      case "<numFmts>":
        break;
      case "<numFmt":
        {
          var f = Fr(Pr(s.formatCode)), c = parseInt(s.numFmtId, 10);
          if (r.NumberFmt[c] = f, c > 0) {
            if (c > 392) {
              for (c = 392; c > 60 && r.NumberFmt[c] != null; --c) ;
              r.NumberFmt[c] = f;
            }
            sn(f, c);
          }
        }
        break;
      case "</numFmt>":
        break;
      default:
        if (t.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
    }
  }
}
function Bm(e) {
  var r = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(t) {
    for (var a = t[0]; a <= t[1]; ++a) e[a] != null && (r[r.length] = Ae("numFmt", null, { numFmtId: a, formatCode: pr(e[a]) }));
  }), r.length === 1 ? "" : (r[r.length] = "</numFmts>", r[0] = Ae("numFmts", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Ms = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Us = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Lm(e, r, t) {
  r.CellXf = [];
  var a, n = false;
  (e.match(Et) || []).forEach(function(i) {
    var s = Ye(i), f = 0;
    switch (la(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
      case "<xf>":
        for (a = s, delete a[0], f = 0; f < Ms.length; ++f) a[Ms[f]] && (a[Ms[f]] = parseInt(a[Ms[f]], 10));
        for (f = 0; f < Us.length; ++f) a[Us[f]] && (a[Us[f]] = Rr(a[Us[f]]));
        if (r.NumberFmt && a.numFmtId > 392) {
          for (f = 392; f > 60; --f) if (r.NumberFmt[a.numFmtId] == r.NumberFmt[f]) {
            a.numFmtId = f;
            break;
          }
        }
        r.CellXf.push(a);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
      case "<alignment>":
        var c = {};
        s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), s.textRotation != null && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = Rr(s.wrapText)), a.alignment = c;
        break;
      case "</alignment>":
        break;
      case "<protection":
      case "<protection>":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        n = true;
        break;
      case "</AlternateContent>":
        n = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = true;
        break;
      case "</ext>":
        n = false;
        break;
      default:
        if (t && t.WTF && !n) throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
function Mm(e) {
  var r = [];
  return r[r.length] = Ae("cellXfs", null), e.forEach(function(t) {
    r[r.length] = Ae("xf", null, t);
  }), r[r.length] = "</cellXfs>", r.length === 2 ? "" : (r[0] = Ae("cellXfs", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Um = /* @__PURE__ */ (function() {
  return function(t, a, n) {
    var i = {};
    if (!t) return i;
    t = Wf(as(t, "<!--", "-->"));
    var s;
    return (s = gt(t, "numFmts")) && Pm(s[0], i, n), (s = gt(t, "fonts")) && Rm(s[0], i, a, n), (s = gt(t, "fills")) && Nm(s[0], i, a, n), (s = gt(t, "borders")) && Om(s[0], i, a, n), (s = gt(t, "cellXfs")) && Lm(s[0], i, n), i;
  };
})();
function Wm(e, r) {
  var t = [at, Ae("styleSheet", null, { xmlns: Rn[0], "xmlns:vt": ut.vt })], a;
  return e.SSF && (a = Bm(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Mm(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Hm(e, r) {
  var t = e.read_shift(2), a = Bt(e);
  return [t, a];
}
function Vm(e, r, t) {
  t || (t = oe(6 + 4 * r.length)), t.write_shift(2, e), lt(r, t);
  var a = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), a;
}
function Xm(e, r, t) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = xx(e);
  n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (a.bold = 1), e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (a.underline = s);
  var f = e.read_shift(1);
  f > 0 && (a.family = f);
  var c = e.read_shift(1);
  switch (c > 0 && (a.charset = c), e.l++, a.color = dx(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Bt(e), a;
}
function Km(e, r) {
  r || (r = oe(153)), r.write_shift(2, e.sz * 20), px(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), r0(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), lt(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var jm = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"], sf, Gm = Lt;
function Kc(e, r) {
  r || (r = oe(84)), sf || (sf = o0(jm));
  var t = sf[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var a = 0;
  if (t != 40) for (r0({ auto: 1 }, r), r0({ auto: 1 }, r); a < 12; ++a) r.write_shift(4, 0);
  else {
    for (; a < 4; ++a) r.write_shift(4, 0);
    for (; a < 12; ++a) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function zm(e, r) {
  var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = t, { ixfe: a, numFmtId: n };
}
function Hl(e, r, t) {
  t || (t = oe(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function ki(e, r) {
  return r || (r = oe(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var $m = Lt;
function qm(e, r) {
  return r || (r = oe(51)), r.write_shift(1, 0), ki(null, r), ki(null, r), ki(null, r), ki(null, r), ki(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Ym(e, r) {
  return r || (r = oe(52)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), ji(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Zm(e, r, t) {
  var a = oe(2052);
  return a.write_shift(4, e), ji(r, a), ji(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function Jm(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in nr) a.NumberFmt[n] = nr[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = false;
  return za(e, function(c, u, h) {
    switch (h) {
      case 44:
        a.NumberFmt[c[0]] = c[1], sn(c[1], c[0]);
        break;
      case 43:
        a.Fonts.push(c), c.color.theme != null && r && r.themeElements && r.themeElements.clrScheme && (c.color.rgb = n0(r.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && a.CellXf.push(c);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        s = true;
        break;
      case 36:
        s = false;
        break;
      case 37:
        i.push(h), s = true;
        break;
      case 38:
        i.pop(), s = false;
        break;
      default:
        if (u.T > 0) i.push(h);
        else if (u.T < 0) i.pop();
        else if (!s || t.WTF && i[i.length - 1] != 37) throw new Error("Unexpected record 0x" + h.toString(16));
    }
  }), a;
}
function Qm(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (ve(e, 615, ma(t)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ve(e, 44, Vm(n, r[n]));
    }), ve(e, 616));
  }
}
function eg(e) {
  var r = 1;
  ve(e, 611, ma(r)), ve(e, 43, Km({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), ve(e, 612);
}
function rg(e) {
  var r = 2;
  ve(e, 603, ma(r)), ve(e, 45, Kc({ patternType: "none" })), ve(e, 45, Kc({ patternType: "gray125" })), ve(e, 604);
}
function tg(e) {
  var r = 1;
  ve(e, 613, ma(r)), ve(e, 46, qm()), ve(e, 614);
}
function ag(e) {
  var r = 1;
  ve(e, 626, ma(r)), ve(e, 47, Hl({ numFmtId: 0 }, 65535)), ve(e, 627);
}
function ng(e, r) {
  ve(e, 617, ma(r.length)), r.forEach(function(t) {
    ve(e, 47, Hl(t, 0));
  }), ve(e, 618);
}
function ig(e) {
  var r = 1;
  ve(e, 619, ma(r)), ve(e, 48, Ym({ xfId: 0, name: "Normal" })), ve(e, 620);
}
function sg(e) {
  var r = 0;
  ve(e, 505, ma(r)), ve(e, 506);
}
function fg(e) {
  var r = 0;
  ve(e, 508, Zm(r, "TableStyleMedium9", "PivotStyleMedium4")), ve(e, 509);
}
function og(e, r) {
  var t = Pt();
  return ve(t, 278), Qm(t, e.SSF), eg(t), rg(t), tg(t), ag(t), ng(t, r.cellXfs), ig(t), sg(t), fg(t), ve(t, 279), t.end();
}
var cg = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function ug(e, r, t) {
  r.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(Et) || []).forEach(function(n) {
    var i = Ye(n);
    switch (i[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        a.rgb = i.val;
        break;
      case "</a:srgbClr>":
        break;
      case "<a:sysClr":
        a.rgb = i.lastClr;
        break;
      case "</a:sysClr>":
        break;
      case "</a:dk1>":
      case "</a:lt1>":
      case "<a:dk1>":
      case "<a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[cg.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (t && t.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function lg(e, r, t) {
  r.themeElements = {};
  var a;
  if (!(a = kn(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
  if (ug(a, r, t), !(a = kn(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = kn(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Vl(e, r) {
  (!e || e.length === 0) && (e = so());
  var t, a = {};
  if (!(t = kn(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return lg(t[0], a, r), a.raw = e, a;
}
function so(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [at];
  return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", t[t.length] = "</a:theme>", t.join("");
}
function hg(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  if (n !== 124226) {
    if (!t.cellStyles) {
      e.l = a;
      return;
    }
    var i = e.slice(e.l);
    e.l = a;
    var s;
    try {
      s = Lu(i, { type: "array" });
    } catch {
      return;
    }
    var f = Vt(s, "theme/theme/theme1.xml", true);
    if (f) return Vl(f, t);
  }
}
function dg(e) {
  return e.read_shift(4);
}
function xg(e) {
  var r = {};
  switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = pg(e, 4);
      break;
    case 2:
      r.xclrValue = El(e);
      break;
    case 3:
      r.xclrValue = dg(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, r;
}
function pg(e, r) {
  return Lt(e, r);
}
function vg(e, r) {
  return Lt(e, r);
}
function mg(e) {
  var r = e.read_shift(2), t = e.read_shift(2) - 4, a = [r];
  switch (r) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      a[1] = xg(e);
      break;
    case 6:
      a[1] = vg(e, t);
      break;
    case 14:
    case 15:
      a[1] = e.read_shift(t === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + r + " " + t);
  }
  return a;
}
function gg(e, r) {
  var t = e.l + r;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; ) i.push(mg(e, t - e.l));
  return { ixfe: a, ext: i };
}
function _g(e, r) {
  r.forEach(function(t) {
    t[0];
  });
}
function wg(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Bt(e) };
}
function yg(e) {
  var r = oe(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), lt(e.name, r), r.slice(0, r.l);
}
function kg(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function Eg(e) {
  var r = oe(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Tg(e, r) {
  var t = oe(8 + 2 * r.length);
  return t.write_shift(4, e), lt(r, t), t.slice(0, t.l);
}
function Sg(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function bg(e, r) {
  var t = oe(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Fg(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] }, n = t || {}, i = [], s = false, f = 2;
  return za(e, function(c, u, h) {
    switch (h) {
      case 335:
        a.Types.push({ name: c.name });
        break;
      case 51:
        c.forEach(function(v) {
          f == 1 ? a.Cell.push({ type: a.Types[v[0] - 1].name, index: v[1] }) : f == 0 && a.Value.push({ type: a.Types[v[0] - 1].name, index: v[1] });
        });
        break;
      case 337:
        f = c ? 1 : 0;
        break;
      case 338:
        f = 2;
        break;
      case 35:
        i.push(h), s = true;
        break;
      case 36:
        i.pop(), s = false;
        break;
      default:
        if (!u.T) {
          if (!s || n.WTF && i[i.length - 1] != 35) throw new Error("Unexpected record 0x" + h.toString(16));
        }
    }
  }), a;
}
function Ag() {
  var e = Pt();
  return ve(e, 332), ve(e, 334, ma(1)), ve(e, 335, yg({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), ve(e, 336), ve(e, 339, Tg(1, "XLDAPR")), ve(e, 52), ve(e, 35, ma(514)), ve(e, 4096, ma(0)), ve(e, 4097, fa(1)), ve(e, 36), ve(e, 53), ve(e, 340), ve(e, 337, bg(1)), ve(e, 51, Eg([[1, 0]])), ve(e, 338), ve(e, 333), e.end();
}
function Cg(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = false, i = 2, s;
  return e.replace(Et, function(f) {
    var c = Ye(f);
    switch (la(c[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: c.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var u = 0; u < a.Types.length; ++u) a.Types[u].name == c.name && (s = a.Types[u]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? a.Cell.push({ type: a.Types[c.t - 1].name, index: +c.v }) : i == 0 && a.Value.push({ type: a.Types[c.t - 1].name, index: +c.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        i = 1;
        break;
      case "</cellMetadata>":
        i = 2;
        break;
      case "<valueMetadata":
        i = 0;
        break;
      case "</valueMetadata>":
        i = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = true;
        break;
      case "</ext>":
        n = false;
        break;
      case "<rvb":
        if (!s) break;
        s.offsets || (s.offsets = []), s.offsets.push(+c.i);
        break;
      default:
        if (!n && (t == null ? void 0 : t.WTF)) throw new Error("unrecognized " + c[0] + " in metadata");
    }
    return f;
  }), a;
}
function Dg() {
  var e = [at];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function Ig(e) {
  var r = [];
  if (!e) return r;
  var t = 1;
  return (e.match(Et) || []).forEach(function(a) {
    var n = Ye(a);
    switch (n[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete n[0], n.i ? t = n.i : n.i = t, r.push(n);
        break;
    }
  }), r;
}
function Og(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = wr(t);
  var a = e.read_shift(1);
  return a & 2 && (r.l = "1"), a & 8 && (r.a = "1"), r;
}
function Ng(e, r, t) {
  var a = [];
  return za(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function Rg(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = false;
  za(e, function(f, c, u) {
    switch (u) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        i = true;
        break;
      case 36:
        i = false;
        break;
      default:
        if (!c.T) {
          if (!i || n.WTF) throw new Error("Unexpected record 0x" + u.toString(16));
        }
    }
  }, n);
}
function Pg(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function Bg(e, r, t) {
  var a = 0;
  (Ru(e, "shape") || []).forEach(function(n) {
    var i = "", s = true, f = -1, c = -1, u = -1;
    if (n.replace(Et, function(v, d) {
      var x = Ye(v);
      switch (la(x[0])) {
        case "<ClientData":
          x.ObjectType && (i = x.ObjectType);
          break;
        case "<Visible":
        case "<Visible/>":
          s = false;
          break;
        case "<Row":
        case "<Row>":
          f = d + v.length;
          break;
        case "</Row>":
          c = +n.slice(f, d).trim();
          break;
        case "<Column":
        case "<Column>":
          f = d + v.length;
          break;
        case "</Column>":
          u = +n.slice(f, d).trim();
          break;
      }
      return "";
    }), i === "Note") {
      var h = rs(r, c >= 0 && u >= 0 ? wr({ r: c, c: u }) : t[a].ref);
      h.c && (h.c.hidden = s), ++a;
    }
  });
}
function Xl(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [Ae("xml", null, { "xmlns:v": Yt.v, "xmlns:o": Yt.o, "xmlns:x": Yt.x, "xmlns:mv": Yt.mv }).replace(/\/>/, ">"), Ae("o:shapelayout", Ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(Ae("v:shapetype", [Ae("v:stroke", null, { joinstyle: "miter" }), Ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(c) {
    ++s, i.push(Lg(c, s));
  }), i.push("</xml>"), i.join("");
}
function Lg(e, r, t) {
  var a = Br(e[0]), n = { color2: "#BEFF82", type: "gradient" };
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? Ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = Ae("v:fill", i, n), f = { on: "t", obscured: "t" };
  return ["<v:shape" + Vi({ id: "_x0000_s" + r, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", s, Ae("v:shadow", null, f), Ae("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", kt("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), kt("x:AutoFill", "False"), kt("x:Row", String(a.r)), kt("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function jc(e, r, t, a) {
  var n = e["!data"] != null, i;
  r.forEach(function(s) {
    var f = Br(s.ref);
    if (!(f.r < 0 || f.c < 0)) {
      if (n ? (e["!data"][f.r] || (e["!data"][f.r] = []), i = e["!data"][f.r][f.c]) : i = e[s.ref], !i) {
        i = { t: "z" }, n ? e["!data"][f.r][f.c] = i : e[s.ref] = i;
        var c = Dr(e["!ref"] || "BDWGO1000001:A1");
        c.s.r > f.r && (c.s.r = f.r), c.e.r < f.r && (c.e.r = f.r), c.s.c > f.c && (c.s.c = f.c), c.e.c < f.c && (c.e.c = f.c);
        var u = dr(c);
        e["!ref"] = u;
      }
      i.c || (i.c = []);
      var h = { a: s.author, t: s.t, r: s.r, T: t };
      s.h && (h.h = s.h);
      for (var v = i.c.length - 1; v >= 0; --v) {
        if (!t && i.c[v].T) return;
        t && !i.c[v].T && i.c.splice(v, 1);
      }
      if (t && a) {
        for (v = 0; v < a.length; ++v) if (h.a == a[v].id) {
          h.a = a[v].name || h.a;
          break;
        }
      }
      i.c.push(h);
    }
  });
}
function Mg(e, r) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var t = [], a = [], n = gt(e, "authors");
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?author[^<>]*>(.*)/);
      f && t.push(f[1]);
    }
  });
  var i = gt(e, "commentList");
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?comment[^<>]*>/);
      if (f) {
        var c = Ye(f[0]), u = { author: c.authorId && t[c.authorId] || "sheetjsghost", ref: c.ref, guid: c.guid }, h = Br(c.ref);
        if (!(r.sheetRows && r.sheetRows <= h.r)) {
          var v = gt(s, "text"), d = !!v && !!v[1] && ao(v[1]) || { r: "", t: "", h: "" };
          u.r = d.r, d.r == "<t></t>" && (d.t = d.h = ""), u.t = (d.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (u.h = d.h), a.push(u);
        }
      }
    }
  }), a;
}
function Ug(e) {
  var r = [at, Ae("comments", null, { xmlns: Rn[0] })], t = [];
  return r.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = pr(n.a);
      t.indexOf(i) == -1 && (t.push(i), r.push("<author>" + i + "</author>")), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), r.push("<author>tc=" + n.ID + "</author>"));
    });
  }), t.length == 0 && (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")), r.push("</authors>"), r.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [], s = 0;
    if (a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), a[1].forEach(function(u) {
      u.a && (n = t.indexOf(pr(u.a))), u.T && ++s, i.push(u.t == null ? "" : pr(u.t));
    }), s === 0) a[1].forEach(function(u) {
      r.push('<comment ref="' + a[0] + '" authorId="' + t.indexOf(pr(u.a)) + '"><text>'), r.push(kt("t", u.t == null ? "" : pr(u.t))), r.push("</text></comment>");
    });
    else {
      a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), r.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>');
      for (var f = `Comment:
    ` + i[0] + `
`, c = 1; c < i.length; ++c) f += `Reply:
    ` + i[c] + `
`;
      r.push(kt("t", pr(f))), r.push("</text></comment>");
    }
  }), r.push("</commentList>"), r.length > 2 && (r[r.length] = "</comments>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Wg(e, r) {
  var t = [], a = false, n = {}, i = 0;
  return e.replace(Et, function(f, c) {
    var u = Ye(f);
    switch (la(u[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: u.personId, guid: u.id, ref: u.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && t.push(n);
        break;
      case "<text>":
      case "<text":
        i = c + f.length;
        break;
      case "</text>":
        n.t = e.slice(i, c).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        a = true;
        break;
      case "</mentions>":
        a = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = true;
        break;
      case "</ext>":
        a = false;
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + u[0] + " in threaded comments");
    }
    return f;
  }), t;
}
function Kl(e, r, t) {
  var a = [at, Ae("ThreadedComments", null, { xmlns: ut.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && r.indexOf(s.a) == -1 && r.push(s.a);
      var c = { ref: n[0], id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t.tcid++).slice(-12) + "}" };
      f == 0 ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r.indexOf(s.a)).slice(-12) + "}"), a.push(Ae("threadedComment", kt("text", s.t || ""), c));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function Hg(e, r) {
  var t = [], a = false;
  return e.replace(Et, function(i) {
    var s = Ye(i);
    switch (la(s[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        t.push({ name: s.displayname, id: s.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = true;
        break;
      case "</ext>":
        a = false;
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + s[0] + " in threaded comments");
    }
    return i;
  }), t;
}
function jl(e) {
  var r = [at, Ae("personList", null, { xmlns: ut.TCMNT, "xmlns:x": Rn[0] }).replace(/[\/]>/, ">")];
  return e.forEach(function(t, a) {
    r.push(Ae("person", null, { displayName: t, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}", userId: t, providerId: "None" }));
  }), r.push("</personList>"), r.join("");
}
function Vg(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = Mn(e);
  return r.rfx = t.s, r.ref = wr(t.s), e.l += 16, r;
}
function Xg(e, r) {
  return r == null && (r = oe(36)), r.write_shift(4, e[1].iauthor), ci(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var Kg = Bt;
function Gc(e) {
  return lt(e.slice(0, 54));
}
function jg(e, r) {
  var t = [], a = [], n = {}, i = false;
  return za(e, function(f, c, u) {
    switch (u) {
      case 632:
        a.push(f);
        break;
      case 635:
        n = f;
        break;
      case 637:
        n.t = f.t, n.h = f.h, n.r = f.r;
        break;
      case 636:
        if (n.author = a[n.iauthor], delete n.iauthor, r.sheetRows && n.rfx && r.sheetRows <= n.rfx.r) break;
        n.t || (n.t = ""), delete n.rfx, t.push(n);
        break;
      case 3072:
        break;
      case 35:
        i = true;
        break;
      case 36:
        i = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!c.T) {
          if (!i || r.WTF) throw new Error("Unexpected record 0x" + u.toString(16));
        }
    }
  }), t;
}
function Gg(e) {
  var r = Pt(), t = [];
  return ve(r, 628), ve(r, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), ve(r, 632, Gc(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), ve(r, 632, Gc("tc=" + n.ID))));
    });
  }), ve(r, 631), ve(r, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: Br(a[0]), e: Br(a[0]) };
      ve(r, 635, Xg([s, n])), n.t && n.t.length > 0 && ve(r, 637, cx(n)), ve(r, 636), delete n.iauthor;
    });
  }), ve(r, 634), ve(r, 629), r.end();
}
var zg = "application/vnd.ms-office.vbaProject";
function $g(e) {
  var r = ir.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      ir.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), ir.write(r);
}
function qg(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && ir.utils.cfb_add(e, n, r.FileIndex[a].content);
    }
  });
}
var Yg = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function Zg() {
  return { "!type": "dialog" };
}
function Jg() {
  return { "!type": "dialog" };
}
function Qg() {
  return { "!type": "macro" };
}
function e2() {
  return { "!type": "macro" };
}
var bn = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = { r: 0, c: 0 };
  function t(a, n, i, s) {
    var f = false, c = false;
    i.length == 0 ? c = true : i.charAt(0) == "[" && (c = true, i = i.slice(1, -1)), s.length == 0 ? f = true : s.charAt(0) == "[" && (f = true, s = s.slice(1, -1));
    var u = i.length > 0 ? parseInt(i, 10) | 0 : 0, h = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? h += r.c : --h, c ? u += r.r : --u, n + (f ? "" : "$") + mr(h) + (c ? "" : "$") + br(u);
  }
  return function(n, i) {
    return r = i, n.replace(e, t);
  };
})(), p0 = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  p0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {
}
var v0 = /* @__PURE__ */ (function() {
  return function(r, t) {
    return r.replace(p0, function(a, n, i, s, f, c) {
      var u = qf(s) - (i ? 0 : t.c), h = $f(c) - (f ? 0 : t.r), v = f == "$" ? h + 1 : h == 0 ? "" : "[" + h + "]", d = i == "$" ? u + 1 : u == 0 ? "" : "[" + u + "]";
      return n + "R" + v + "C" + d;
    });
  };
})();
function Gl(e, r) {
  return e.replace(p0, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : mr(qf(i) + r.c)) + (s == "$" ? s + f : br($f(f) + r.r));
  });
}
function zc(e, r, t) {
  var a = wt(r), n = a.s, i = Br(t), s = { r: i.r - n.r, c: i.c - n.c };
  return Gl(e, s);
}
function r2(e) {
  return e.length != 1;
}
function $c(e) {
  return e.replace(/_xlfn\./g, "");
}
function st(e) {
  e.l += 1;
}
function cn(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function zl(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return $l(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = cn(e), f = cn(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function $l(e) {
  var r = cn(e), t = cn(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function t2(e, r, t) {
  if (t.biff < 8) return $l(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = cn(e), s = cn(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function ql(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return a2(e);
  var a = e.read_shift(t && t.biff == 12 ? 4 : 2), n = cn(e);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function a2(e) {
  var r = cn(e), t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function n2(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return { r, c: t & 255, fQuoted: !!(t & 16384), cRel: t >> 15, rRel: t >> 15 };
}
function i2(e, r, t) {
  var a = t && t.biff ? t.biff : 8;
  if (a >= 2 && a <= 5) return s2(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1) for (; n > 524287; ) n -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function s2(e) {
  var r = e.read_shift(2), t = e.read_shift(1), a = (r & 32768) >> 15, n = (r & 16384) >> 14;
  return r &= 16383, a == 1 && r >= 8192 && (r = r - 16384), n == 1 && t >= 128 && (t = t - 256), { r, c: t, cRel: n, rRel: a };
}
function f2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = zl(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [a, n];
}
function o2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = zl(e, i, t);
  return [a, n, s];
}
function c2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
}
function u2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  return e.l += i, [a, n];
}
function l2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = t2(e, r - 1, t);
  return [a, n];
}
function h2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [a];
}
function qc(e) {
  var r = e[e.l + 1] & 1, t = 1;
  return e.l += 4, [r, t];
}
function d2(e, r, t) {
  e.l += 2;
  for (var a = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function x2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function p2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function v2(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [r, e.read_shift(2)];
}
function m2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += t && t.biff == 2 ? 3 : 4, [a];
}
function Yl(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function g2(e) {
  return e.read_shift(2), Yl(e);
}
function _2(e) {
  return e.read_shift(2), Yl(e);
}
function w2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = ql(e, 0, t);
  return [a, n];
}
function y2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = i2(e, 0, t);
  return [a, n];
}
function k2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var i = ql(e, 0, t);
  return [a, n, i];
}
function E2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [L_[n], Ql[n], a];
}
function T2(e, r, t) {
  var a = e[e.l++], n = e.read_shift(1), i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : S2(e);
  return [n, (i[0] === 0 ? Ql : B_)[i[1]]];
}
function S2(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function b2(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function F2(e, r, t) {
  if (e.l++, t && t.biff == 12) return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function A2(e) {
  return e.l++, ht[e.read_shift(1)];
}
function C2(e) {
  return e.l++, e.read_shift(2);
}
function D2(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function I2(e) {
  return e.l++, Nt(e);
}
function O2(e, r, t) {
  return e.l++, ni(e, r - 1, t);
}
function N2(e, r) {
  var t = [e.read_shift(1)];
  if (r == 12) switch (t[0]) {
    case 2:
      t[0] = 4;
      break;
    case 4:
      t[0] = 16;
      break;
    case 0:
      t[0] = 1;
      break;
    case 1:
      t[0] = 2;
      break;
  }
  switch (t[0]) {
    case 4:
      t[1] = Qr(e, 1) ? "TRUE" : "FALSE", r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      t[1] = ht[e[e.l]], e.l += r == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Nt(e);
      break;
    case 2:
      t[1] = Un(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function R2(e, r, t) {
  for (var a = e.read_shift(t.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((t.biff == 12 ? Mn : x0)(e));
  return n;
}
function P2(e, r, t) {
  var a = 0, n = 0;
  t.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i) for (var f = 0; f != n; ++f) s[i][f] = N2(e, t.biff);
  return s;
}
function B2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = !t || t.biff >= 8 ? 4 : 2, i = e.read_shift(n);
  switch (t.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, i];
}
function L2(e, r, t) {
  if (t.biff == 5) return M2(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function M2(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function U2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function W2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function H2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [a];
}
function V2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 4;
  if (t) switch (t.biff) {
    case 5:
      i = 15;
      break;
    case 12:
      i = 6;
      break;
  }
  return e.l += i, [a, n];
}
var X2 = Lt, K2 = Lt, j2 = Lt;
function fs(e, r, t) {
  return e.l += 2, [n2(e)];
}
function fo(e) {
  return e.l += 6, [];
}
var G2 = fs, z2 = fo, $2 = fo, q2 = fs;
function Zl(e) {
  return e.l += 2, [Yr(e), e.read_shift(2) & 1];
}
var Y2 = fs, Z2 = Zl, J2 = fo, Q2 = fs, e_ = fs, r_ = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function t_(e) {
  e.l += 2;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = r_[t >> 2 & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
}
function a_(e) {
  return e.l += 2, [e.read_shift(4)];
}
function n_(e, r, t) {
  return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function i_(e, r, t) {
  return e.l += t.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function s_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function f_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function o_(e) {
  return e.l += 4, [0, 0];
}
var Yc = { 1: { n: "PtgExp", f: F2 }, 2: { n: "PtgTbl", f: j2 }, 3: { n: "PtgAdd", f: st }, 4: { n: "PtgSub", f: st }, 5: { n: "PtgMul", f: st }, 6: { n: "PtgDiv", f: st }, 7: { n: "PtgPower", f: st }, 8: { n: "PtgConcat", f: st }, 9: { n: "PtgLt", f: st }, 10: { n: "PtgLe", f: st }, 11: { n: "PtgEq", f: st }, 12: { n: "PtgGe", f: st }, 13: { n: "PtgGt", f: st }, 14: { n: "PtgNe", f: st }, 15: { n: "PtgIsect", f: st }, 16: { n: "PtgUnion", f: st }, 17: { n: "PtgRange", f: st }, 18: { n: "PtgUplus", f: st }, 19: { n: "PtgUminus", f: st }, 20: { n: "PtgPercent", f: st }, 21: { n: "PtgParen", f: st }, 22: { n: "PtgMissArg", f: st }, 23: { n: "PtgStr", f: O2 }, 26: { n: "PtgSheet", f: n_ }, 27: { n: "PtgEndSheet", f: i_ }, 28: { n: "PtgErr", f: A2 }, 29: { n: "PtgBool", f: D2 }, 30: { n: "PtgInt", f: C2 }, 31: { n: "PtgNum", f: I2 }, 32: { n: "PtgArray", f: h2 }, 33: { n: "PtgFunc", f: E2 }, 34: { n: "PtgFuncVar", f: T2 }, 35: { n: "PtgName", f: B2 }, 36: { n: "PtgRef", f: w2 }, 37: { n: "PtgArea", f: f2 }, 38: { n: "PtgMemArea", f: U2 }, 39: { n: "PtgMemErr", f: X2 }, 40: { n: "PtgMemNoMem", f: K2 }, 41: { n: "PtgMemFunc", f: W2 }, 42: { n: "PtgRefErr", f: H2 }, 43: { n: "PtgAreaErr", f: c2 }, 44: { n: "PtgRefN", f: y2 }, 45: { n: "PtgAreaN", f: l2 }, 46: { n: "PtgMemAreaN", f: s_ }, 47: { n: "PtgMemNoMemN", f: f_ }, 57: { n: "PtgNameX", f: L2 }, 58: { n: "PtgRef3d", f: k2 }, 59: { n: "PtgArea3d", f: o2 }, 60: { n: "PtgRefErr3d", f: V2 }, 61: { n: "PtgAreaErr3d", f: u2 }, 255: {} }, c_ = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, u_ = { 1: { n: "PtgElfLel", f: Zl }, 2: { n: "PtgElfRw", f: Q2 }, 3: { n: "PtgElfCol", f: G2 }, 6: { n: "PtgElfRwV", f: e_ }, 7: { n: "PtgElfColV", f: q2 }, 10: { n: "PtgElfRadical", f: Y2 }, 11: { n: "PtgElfRadicalS", f: J2 }, 13: { n: "PtgElfColS", f: z2 }, 15: { n: "PtgElfColSV", f: $2 }, 16: { n: "PtgElfRadicalLel", f: Z2 }, 25: { n: "PtgList", f: t_ }, 29: { n: "PtgSxName", f: a_ }, 255: {} }, l_ = { 0: { n: "PtgAttrNoop", f: o_ }, 1: { n: "PtgAttrSemi", f: m2 }, 2: { n: "PtgAttrIf", f: p2 }, 4: { n: "PtgAttrChoose", f: d2 }, 8: { n: "PtgAttrGoto", f: x2 }, 16: { n: "PtgAttrSum", f: b2 }, 32: { n: "PtgAttrBaxcel", f: qc }, 33: { n: "PtgAttrBaxcel", f: qc }, 64: { n: "PtgAttrSpace", f: g2 }, 65: { n: "PtgAttrSpaceSemi", f: _2 }, 128: { n: "PtgAttrIfError", f: v2 }, 255: {} };
function os(e, r, t, a) {
  if (a.biff < 8) return Lt(e, r);
  for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s) switch (t[s][0]) {
    case "PtgArray":
      t[s][1] = P2(e, 0, a), i.push(t[s][1]);
      break;
    case "PtgMemArea":
      t[s][2] = R2(e, t[s][1], a), i.push(t[s][2]);
      break;
    case "PtgExp":
      a && a.biff == 12 && (t[s][1][1] = e.read_shift(4), i.push(t[s][1]));
      break;
    case "PtgList":
    case "PtgElfRadicalS":
    case "PtgElfColS":
    case "PtgElfColSV":
      throw "Unsupported " + t[s][0];
  }
  return r = n - e.l, r !== 0 && i.push(Lt(e, r)), i;
}
function cs(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; ) r = a - e.l, i = e[e.l], n = Yc[i] || Yc[c_[i]], (i === 24 || i === 25) && (n = (i === 24 ? u_ : l_)[e[e.l + 1]]), !n || !n.f ? Lt(e, r) : s.push([n.n, n.f(e, r, t)]);
  return s;
}
function h_(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      s ? s[0] === 2 ? n.push('"' + s[1].replace(/"/g, '""') + '"') : n.push(s[1]) : n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var d_ = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function x_(e, r) {
  var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
  return t == -1 && a == -1 ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function Jl(e, r, t) {
  if (!e) return "SH33TJSERR0";
  if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
  if (!e.XTI) return "SH33TJSERR6";
  var a = e.XTI[r];
  if (t.biff < 8) return r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? "" : e.XTI[r - 1];
  if (!a) return "SH33TJSERR1";
  var n = "";
  if (t.biff > 8) switch (e[a[0]][0]) {
    case 357:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 358:
      return t.SID != null ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[a[0]][0];
    default:
      return "SH33TJSSRC" + e[a[0]][0];
  }
  switch (e[a[0]][0][0]) {
    case 1025:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 14849:
      return e[a[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[a[0]][0][3] ? (n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
  }
}
function Zc(e, r, t) {
  var a = Jl(e, r, t);
  return a == "#REF" ? a : Ki(a, t);
}
function It(e, r, t, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 } }, f = [], c, u, h, v = 0, d = 0, x, _ = "";
  if (!e[0] || !e[0][0]) return "";
  for (var y = -1, m = "", g = 0, S = e[0].length; g < S; ++g) {
    var E = e[0][g];
    switch (E[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (c = f.pop(), u = f.pop(), y >= 0) {
          switch (e[0][y][1][0]) {
            case 0:
              m = Ar(" ", e[0][y][1][1]);
              break;
            case 1:
              m = Ar("\r", e[0][y][1][1]);
              break;
            default:
              if (m = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          u = u + m, y = -1;
        }
        f.push(u + d_[E[0]] + c);
        break;
      case "PtgIsect":
        c = f.pop(), u = f.pop(), f.push(u + " " + c);
        break;
      case "PtgUnion":
        c = f.pop(), u = f.pop(), f.push(u + "," + c);
        break;
      case "PtgRange":
        c = f.pop(), u = f.pop(), f.push(x_(u, c));
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        h = Di(E[1][1], s, n), f.push(Ii(h, i));
        break;
      case "PtgRefN":
        h = t ? Di(E[1][1], t, n) : E[1][1], f.push(Ii(h, i));
        break;
      case "PtgRef3d":
        v = E[1][1], h = Di(E[1][2], s, n), _ = Zc(a, v, n), f.push(_ + "!" + Ii(h, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var A = E[1][0], X = E[1][1];
        A || (A = 0), A &= 127;
        var U = A == 0 ? [] : f.slice(-A);
        f.length -= A, X === "User" && (X = U.shift()), f.push(X + "(" + U.join(",") + ")");
        break;
      case "PtgBool":
        f.push(E[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(E[1]);
        break;
      case "PtgNum":
        f.push(String(E[1]));
        break;
      case "PtgStr":
        f.push('"' + E[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(E[1]);
        break;
      case "PtgAreaN":
        x = Tc(E[1][1], t ? { s: t } : s, n), f.push(Q0(x, n));
        break;
      case "PtgArea":
        x = Tc(E[1][1], s, n), f.push(Q0(x, n));
        break;
      case "PtgArea3d":
        v = E[1][1], x = E[1][2], _ = Zc(a, v, n), f.push(_ + "!" + Q0(x, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        d = E[1][2];
        var F = (a.names || [])[d - 1] || (a[0] || [])[d], B = F ? F.Name : "SH33TJSNAME" + String(d);
        B && B.slice(0, 6) == "_xlfn." && !n.xlfn && (B = B.slice(6)), f.push(B);
        break;
      case "PtgNameX":
        var L = E[1][1];
        d = E[1][2];
        var K;
        if (n.biff <= 5) L < 0 && (L = -L), a[L] && (K = a[L][d]);
        else {
          var G = "";
          if (((a[L] || [])[0] || [])[0] == 14849 || (((a[L] || [])[0] || [])[0] == 1025 ? a[L][d] && a[L][d].itab > 0 && (G = a.SheetNames[a[L][d].itab - 1] + "!") : G = a.SheetNames[d - 1] + "!"), a[L] && a[L][d]) G += a[L][d].Name;
          else if (a[0] && a[0][d]) G += a[0][d].Name;
          else {
            var te = (Jl(a, L, n) || "").split(";;");
            te[d - 1] ? G = te[d - 1] : G += "SH33TJSERRX";
          }
          f.push(G);
          break;
        }
        K || (K = { Name: "SH33TJSERRY" }), f.push(K.Name);
        break;
      case "PtgParen":
        var de = "(", Ve = ")";
        if (y >= 0) {
          switch (m = "", e[0][y][1][0]) {
            case 2:
              de = Ar(" ", e[0][y][1][1]) + de;
              break;
            case 3:
              de = Ar("\r", e[0][y][1][1]) + de;
              break;
            case 4:
              Ve = Ar(" ", e[0][y][1][1]) + Ve;
              break;
            case 5:
              Ve = Ar("\r", e[0][y][1][1]) + Ve;
              break;
            default:
              if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          y = -1;
        }
        f.push(de + f.pop() + Ve);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        h = { c: E[1][1], r: E[1][0] };
        var ge = { c: t.c, r: t.r };
        if (a.sharedf[wr(h)]) {
          var $e = a.sharedf[wr(h)];
          f.push(It($e, s, ge, a, n));
        } else {
          var ke = false;
          for (c = 0; c != a.arrayf.length; ++c) if (u = a.arrayf[c], !(h.c < u[0].s.c || h.c > u[0].e.c) && !(h.r < u[0].s.r || h.r > u[0].e.r)) {
            f.push(It(u[1], s, ge, a, n)), ke = true;
            break;
          }
          ke || f.push(E[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + h_(E[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        y = g;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + E[1].idx + "[#" + E[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(E));
      default:
        throw new Error("Unrecognized Formula Token: " + String(E));
    }
    var Pe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && y >= 0 && Pe.indexOf(e[0][g][0]) == -1) {
      E = e[0][y];
      var Qe = true;
      switch (E[1][0]) {
        case 4:
          Qe = false;
        case 0:
          m = Ar(" ", E[1][1]);
          break;
        case 5:
          Qe = false;
        case 1:
          m = Ar("\r", E[1][1]);
          break;
        default:
          if (m = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + E[1][0]);
      }
      f.push((Qe ? m : "") + f.pop() + (Qe ? "" : m)), y = -1;
    }
  }
  if (f.length > 1 && n.WTF) throw new Error("bad formula stack");
  return f[0] == "TRUE" ? true : f[0] == "FALSE" ? false : f[0];
}
function p_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Lt(e, r - 2)];
  var f = cs(e, s, t);
  return r !== s + n && (i = os(e, r - s - n, f, t)), e.l = a, [f, i];
}
function v_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Lt(e, r - 2)];
  var f = cs(e, s, t);
  return r !== s + n && (i = os(e, r - s - n, f, t)), e.l = a, [f, i];
}
function m_(e, r, t, a) {
  var n = e.l + r, i = cs(e, a, t), s;
  return n !== e.l && (s = os(e, n - e.l, i, t)), [i, s];
}
function g_(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = cs(e, i, t);
  return i == 65535 ? [[], Lt(e, r - 2)] : (r !== i + 2 && (n = os(e, a - i - 2, s, t)), [s, n]);
}
function __(e) {
  var r;
  if (Wa(e, e.l + 6) !== 65535) return [Nt(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return r = e[e.l + 2] === 1, e.l += 8, [r, "b"];
    case 2:
      return r = e[e.l + 2], e.l += 8, [r, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function w_(e) {
  if (e == null) {
    var r = oe(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return In(e);
  return In(0);
}
function ff(e, r, t) {
  var a = e.l + r, n = _a(e, 6, t), i = __(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = v_(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function y_(e, r, t, a, n) {
  var i = Nn(r, t, n), s = w_(e.v), f = oe(6), c = 33;
  f.write_shift(2, c), f.write_shift(4, 0);
  for (var u = oe(e.bf.length), h = 0; h < e.bf.length; ++h) u[h] = e.bf[h];
  var v = rt([i, s, f, u]);
  return v;
}
function m0(e, r, t) {
  var a = e.read_shift(4), n = cs(e, a, t), i = e.read_shift(4), s = i > 0 ? os(e, i, n, t) : null;
  return [n, s];
}
var k_ = m0, g0 = m0, E_ = m0, T_ = m0;
function Jc(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var r = oe(11);
    return r.write_shift(4, 3), r.write_shift(1, 30), r.write_shift(2, e), r.write_shift(4, 0), r;
  }
  var t = oe(17);
  return t.write_shift(4, 11), t.write_shift(1, 31), t.write_shift(8, e), t.write_shift(4, 0), t;
}
function S_(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 28), r.write_shift(1, e), r.write_shift(4, 0), r;
}
function b_(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 29), r.write_shift(1, e ? 1 : 0), r.write_shift(4, 0), r;
}
function F_(e) {
  var r = oe(7);
  r.write_shift(4, 3 + 2 * e.length), r.write_shift(1, 23), r.write_shift(2, e.length);
  var t = oe(2 * e.length);
  t.write_shift(2 * e.length, e, "utf16le");
  var a = oe(4);
  return a.write_shift(4, 0), rt([r, t, a]);
}
function A_(e) {
  var r = Br(e), t = oe(15);
  return t.write_shift(4, 7), t.write_shift(1, 36), t.write_shift(4, r.r), t.write_shift(2, r.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), t.write_shift(4, 0), t;
}
function C_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1);
  var n = Br(e);
  a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var i = oe(17);
  return i.write_shift(4, 9), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.r), i.write_shift(2, n.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(4, 0), i;
}
function D_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = oe(17);
  return n.write_shift(4, 9), n.write_shift(1, 60), n.write_shift(2, 2 + r.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase())), n.write_shift(4, 0), n.write_shift(2, 0), n.write_shift(4, 0), n;
}
function I_(e) {
  var r = e.split(":"), t = r[0], a = oe(23);
  a.write_shift(4, 15), t = r[0];
  var n = Br(t);
  return a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), t = r[1], n = Br(t), a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), a.write_shift(1, 17), a.write_shift(4, 0), a;
}
function O_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = e.split(":"), i = oe(27);
  i.write_shift(4, 19);
  var s = n[0], f = Br(s);
  return i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(c) {
    return c.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), s = n[1], f = Br(s), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(c) {
    return c.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(1, 17), i.write_shift(4, 0), i;
}
function N_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = wt(e), i = oe(23);
  return i.write_shift(4, 15), i.write_shift(1, 59), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.s.r), i.write_shift(4, n.e.r), i.write_shift(2, n.s.c), i.write_shift(2, n.e.c), i.write_shift(4, 0), i;
}
function R_(e, r) {
  if (typeof e == "number") return Jc(e);
  if (typeof e == "boolean") return b_(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return S_(+_t[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return A_(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return I_(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return N_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return C_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return O_(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return D_(e, r);
  if (/^".*"$/.test(e)) return F_(e);
  if (/^[+-]\d+$/.test(e)) return Jc(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var P_ = R_, B_ = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, Ql = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, L_ = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function Qc(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(r, t) {
    return t.replace(/\./g, "");
  }), e = e.replace(/\$'([^']|'')+'/g, function(r) {
    return r.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(r, t) {
    return t.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? r : t;
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function M_(e) {
  var r = "of:=" + e.replace(p0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return r.replace(/;/g, "|").replace(/,/g, ";");
}
function of(e) {
  e = e.replace(/\$'([^']|'')+'/g, function(a) {
    return a.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(a, n) {
    return n.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? a : n;
  });
  var r = e.split(":"), t = r[0].split(".")[0];
  return [t, r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")];
}
function eh(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var Ri = {}, ei = {}, Pi = typeof Map < "u";
function oo(e, r, t) {
  var a = 0, n = e.length;
  if (t) {
    if (Pi ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var i = Pi ? t.get(r) : t[r]; a < i.length; ++a) if (e[i[a]].t === r) return e.Count++, i[a];
    }
  } else for (; a < n; ++a) if (e[a].t === r) return e.Count++, a;
  return e[n] = { t: r }, e.Count++, e.Unique++, t && (Pi ? (t.has(r) || t.set(r, []), t.get(r).push(n)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n))), n;
}
function _0(e, r) {
  var t = { min: e + 1, max: e + 1 }, a = -1;
  return r.MDW && (Ot = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = qi(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = i0(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = true), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function Fn(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function xn(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      sn(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = { numFmtId: a, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, i;
}
function rh(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = nr[r]);
  } catch (c) {
    if (a.WTF) throw c;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = zr(e.v)), (!a || a.cellText !== false) && e.t !== "z") try {
      if (nr[r] == null && sn(cd[r] || "General", r), e.t === "e") e.w = e.w || ht[e.v];
      else if (r === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wi(e.v);
      else if (e.t === "d") {
        var f = qr(e.v, !!s);
        (f | 0) === f ? e.w = f.toString(10) : e.w = Wi(f);
      } else {
        if (e.v === void 0) return "";
        e.w = An(e.v, ei);
      }
      else e.t === "d" ? e.w = ea(r, qr(e.v, !!s), ei) : e.w = ea(r, e.v, ei);
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (a.cellStyles && t != null) try {
      e.s = i.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = n0(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = n0(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
    } catch (c) {
      if (a.WTF && i.Fills) throw c;
    }
  }
}
function U_(e, r, t) {
  if (e && e["!ref"]) {
    var a = Dr(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
  }
}
function W_(e, r) {
  var t = Dr(r);
  t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = dr(t));
}
var H_ = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, V_ = /<(?:\w+:)?hyperlink [^<>]*>/mg, X_ = /"(\w*:\w*)"/, K_ = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, j_ = /<(?:\w+:)?autoFilter[^>]*/g, G_ = /<(?:\w+:)?pageMargins[^<>]*\/>/g, th = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function z_(e, r, t, a, n, i, s) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var f = {};
  r.dense && (f["!data"] = []);
  var c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = "", h = "", v = gt(e, "sheetData");
  v ? (u = e.slice(0, v.index), h = e.slice(v.index + v[0].length)) : u = h = e;
  var d = u.match(th);
  d ? co(d[0], f, n, t) : (d = gt(u, "sheetPr")) && q_(d[0], d[1] || "", f, n, t);
  var x = (u.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (x > 0) {
    var _ = u.slice(x, x + 50).match(X_);
    _ && !(r && r.nodim) && W_(f, _[1]);
  }
  var y = gt(u, "sheetViews");
  y && y[1] && ow(y[1], n);
  var m = [];
  if (r.cellStyles) {
    var g = u.match(K_);
    g && aw(m, g);
  }
  v && lw(v[1], f, r, c, i, s, n);
  var S = h.match(j_);
  S && (f["!autofilter"] = iw(S[0]));
  var E = [], A = h.match(H_);
  if (A) for (x = 0; x != A.length; ++x) E[x] = Dr(A[x].slice(A[x].indexOf("=") + 2));
  var X = h.match(V_);
  X && ew(f, X, a);
  var U = h.match(G_);
  U && (f["!margins"] = rw(Ye(U[0])));
  var F;
  if ((F = h.match(/legacyDrawing r:id="(.*?)"/)) && (f["!legrel"] = F[1]), r && r.nodim && (c.s.c = c.s.r = 0), !f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (f["!ref"] = dr(c)), r.sheetRows > 0 && f["!ref"]) {
    var B = Dr(f["!ref"]);
    r.sheetRows <= +B.e.r && (B.e.r = r.sheetRows - 1, B.e.r > c.e.r && (B.e.r = c.e.r), B.e.r < B.s.r && (B.s.r = B.e.r), B.e.c > c.e.c && (B.e.c = c.e.c), B.e.c < B.s.c && (B.s.c = B.e.c), f["!fullref"] = f["!ref"], f["!ref"] = dr(B));
  }
  return m.length > 0 && (f["!cols"] = m), E.length > 0 && (f["!merges"] = E), a["!id"][f["!legrel"]] && (f["!legdrawel"] = a["!id"][f["!legrel"]]), f;
}
function $_(e) {
  if (e.length === 0) return "";
  for (var r = '<mergeCells count="' + e.length + '">', t = 0; t != e.length; ++t) r += '<mergeCell ref="' + dr(e[t]) + '"/>';
  return r + "</mergeCells>";
}
function co(e, r, t, a) {
  var n = Ye(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Fr(Pr(n.codeName)));
}
function q_(e, r, t, a, n) {
  co(e.slice(0, e.indexOf(">")), t, a, n);
}
function Y_(e, r, t, a, n) {
  var i = false, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var c = r.SheetNames[t];
    try {
      r.Workbook && (c = r.Workbook.Sheets[t].CodeName || c);
    } catch {
    }
    i = true, s.codeName = Ia(pr(c));
  }
  if (e && e["!outline"]) {
    var u = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (u.summaryBelow = 0), e["!outline"].left && (u.summaryRight = 0), f = (f || "") + Ae("outlinePr", null, u);
  }
  !i && !f || (n[n.length] = Ae("sheetPr", f, s));
}
var Z_ = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], J_ = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
function Q_(e) {
  var r = { sheet: 1 };
  return Z_.forEach(function(t) {
    e[t] != null && e[t] && (r[t] = "1");
  }), J_.forEach(function(t) {
    e[t] != null && !e[t] && (r[t] = "0");
  }), e.password && (r.password = no(e.password).toString(16).toUpperCase()), Ae("sheetProtection", null, r);
}
function ew(e, r, t) {
  for (var a = e["!data"] != null, n = 0; n != r.length; ++n) {
    var i = Ye(Pr(r[n]), true);
    if (!i.ref) return;
    var s = ((t || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Fr(i.location))) : (i.Target = "#" + Fr(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Dr(i.ref), c = f.s.r; c <= f.e.r; ++c) for (var u = f.s.c; u <= f.e.c; ++u) {
      var h = mr(u) + br(c);
      a ? (e["!data"][c] || (e["!data"][c] = []), e["!data"][c][u] || (e["!data"][c][u] = { t: "z", v: void 0 }), e["!data"][c][u].l = i) : (e[h] || (e[h] = { t: "z", v: void 0 }), e[h].l = i);
    }
  }
}
function rw(e) {
  var r = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
    e[t] && (r[t] = parseFloat(e[t]));
  }), r;
}
function tw(e) {
  return Fn(e), Ae("pageMargins", null, e);
}
function aw(e, r) {
  for (var t = false, a = 0; a != r.length; ++a) {
    var n = Ye(r[a], true);
    n.hidden && (n.hidden = Rr(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = true, io(n.width)), on(n); i <= s; ) e[i++] = Hr(n);
  }
}
function nw(e, r) {
  for (var t = ["<cols>"], a, n = 0; n != r.length; ++n) (a = r[n]) && (t[t.length] = Ae("col", null, _0(n, a)));
  return t[t.length] = "</cols>", t.join("");
}
function iw(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
function sw(e, r, t, a) {
  var n = typeof e.ref == "string" ? e.ref : dr(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
  var i = t.Workbook.Names, s = wt(n);
  s.s.r == s.e.r && (s.e.r = wt(r["!ref"]).e.r, n = dr(s));
  for (var f = 0; f < i.length; ++f) {
    var c = i[f];
    if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == a) {
      c.Ref = Ki(t.SheetNames[a]) + "!" + Xi(n);
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + t.SheetNames[a] + "'!" + n }), Ae("autoFilter", null, { ref: n });
}
var fw = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g;
function ow(e, r) {
  r.Views || (r.Views = [{}]), (e.match(fw) || []).forEach(function(t, a) {
    var n = Ye(t);
    r.Views[a] || (r.Views[a] = {}), +n.zoomScale && (r.Views[a].zoom = +n.zoomScale), n.rightToLeft && Rr(n.rightToLeft) && (r.Views[a].RTL = true);
  });
}
function cw(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), Ae("sheetViews", Ae("sheetView", null, n), {});
}
function uw(e, r, t, a, n, i, s) {
  if (e.c && t["!comments"].push([r, e.c]), (e.v === void 0 || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var f = "", c = e.t, u = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      f = e.v ? "1" : "0";
      break;
    case "n":
      isNaN(e.v) ? (e.t = "e", f = ht[e.v = 36]) : isFinite(e.v) ? f = "" + e.v : (e.t = "e", f = ht[e.v = 7]);
      break;
    case "e":
      f = ht[e.v];
      break;
    case "d":
      if (a && a.cellDates) {
        var h = zr(e.v, s);
        f = h.toISOString(), h.getUTCFullYear() < 1900 && (f = f.slice(f.indexOf("T") + 1).replace("Z", ""));
      } else e = Hr(e), e.t = "n", f = "" + (e.v = qr(zr(e.v, s), s));
      typeof e.z > "u" && (e.z = nr[14]);
      break;
    default:
      f = e.v;
      break;
  }
  var v = e.t == "z" || e.v == null ? "" : kt("v", pr(f)), d = { r }, x = xn(a.cellXfs, e, a);
  switch (x !== 0 && (d.s = x), e.t) {
    case "n":
      break;
    case "d":
      d.t = "d";
      break;
    case "b":
      d.t = "b";
      break;
    case "e":
      d.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
      if (a && a.bookSST) {
        v = kt("v", "" + oo(a.Strings, e.v, a.revStrings)), d.t = "s";
        break;
      } else d.t = "str";
      break;
  }
  if (e.t != c && (e.t = c, e.v = u), typeof e.f == "string" && e.f) {
    var _ = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    v = Ae("f", pr(e.f), _) + (e.v != null ? v : "");
  }
  return e.l && (e.l.display = pr(f), t["!links"].push([r, e.l])), e.D && (d.cm = 1), Ae("c", v, d);
}
var lw = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, c, u, h, v) {
    for (var d = 0, x = "", _ = [], y = [], m = 0, g = 0, S = 0, E = "", A, X, U = 0, F = 0, B, L, K = 0, G = 0, te = Array.isArray(h.CellXf), de, Ve = [], ge = [], $e = s["!data"] != null, ke = [], Pe = {}, Qe = false, he = !!f.sheetStubs, sr = !!((v || {}).WBProps || {}).date1904, Le = i.split(r), Te = 0, ye = Le.length; Te != ye; ++Te) {
      x = Le[Te].trim();
      var je = x.length;
      if (je !== 0) {
        var Ge = 0;
        e: for (d = 0; d < je; ++d) switch (x[d]) {
          case ">":
            if (x[d - 1] != "/") {
              ++d;
              break e;
            }
            if (f && f.cellStyles) {
              if (X = Ye(x.slice(Ge, d), true), U = X.r != null ? parseInt(X.r, 10) : U + 1, F = -1, f.sheetRows && f.sheetRows < U) continue;
              Pe = {}, Qe = false, X.ht && (Qe = true, Pe.hpt = parseFloat(X.ht), Pe.hpx = si(Pe.hpt)), X.hidden && Rr(X.hidden) && (Qe = true, Pe.hidden = true), X.outlineLevel != null && (Qe = true, Pe.level = +X.outlineLevel), Qe && (ke[U - 1] = Pe);
            }
            break;
          case "<":
            Ge = d;
            break;
        }
        if (Ge >= d) break;
        if (X = Ye(x.slice(Ge, d), true), U = X.r != null ? parseInt(X.r, 10) : U + 1, F = -1, !(f.sheetRows && f.sheetRows < U)) {
          f.nodim || (c.s.r > U - 1 && (c.s.r = U - 1), c.e.r < U - 1 && (c.e.r = U - 1)), f && f.cellStyles && (Pe = {}, Qe = false, X.ht && (Qe = true, Pe.hpt = parseFloat(X.ht), Pe.hpx = si(Pe.hpt)), X.hidden && Rr(X.hidden) && (Qe = true, Pe.hidden = true), X.outlineLevel != null && (Qe = true, Pe.level = +X.outlineLevel), Qe && (ke[U - 1] = Pe)), _ = x.slice(d).split(e);
          for (var Ze = 0; Ze != _.length && _[Ze].trim().charAt(0) == "<"; ++Ze) ;
          for (_ = _.slice(Ze), d = 0; d != _.length; ++d) if (x = _[d].trim(), x.length !== 0) {
            if (y = x.match(t), m = d, g = 0, S = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, y != null && y.length === 2) {
              for (m = 0, E = y[1], g = 0; g != E.length && !((S = E.charCodeAt(g) - 64) < 1 || S > 26); ++g) m = 26 * m + S;
              --m, F = m;
            } else ++F;
            for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g) ;
            if (++g, X = Ye(x.slice(0, g), true), X.r || (X.r = wr({ r: U - 1, c: F })), E = x.slice(g), A = { t: "" }, (y = gt(E, "v")) != null && y[1] !== "" && (A.v = Fr(y[1])), f.cellFormula) {
              if ((y = gt(E, "f")) != null) {
                if (y[1] == "") y[0].indexOf('t="shared"') > -1 && (L = Ye(y[0]), ge[L.si] && (A.f = zc(ge[L.si][1], ge[L.si][2], X.r)));
                else if (A.f = Fr(Pr(y[1]), true), f.xlfn || (A.f = $c(A.f)), y[0].indexOf('t="array"') > -1) A.F = (E.match(a) || [])[1], A.F.indexOf(":") > -1 && Ve.push([Dr(A.F), A.F]);
                else if (y[0].indexOf('t="shared"') > -1) {
                  L = Ye(y[0]);
                  var R = Fr(Pr(y[1]));
                  f.xlfn || (R = $c(R)), ge[parseInt(L.si, 10)] = [L, R, X.r];
                }
              } else (y = E.match(/<f[^<>]*\/>/)) && (L = Ye(y[0]), ge[L.si] && (A.f = zc(ge[L.si][1], ge[L.si][2], X.r)));
              var W = Br(X.r);
              for (g = 0; g < Ve.length; ++g) W.r >= Ve[g][0].s.r && W.r <= Ve[g][0].e.r && W.c >= Ve[g][0].s.c && W.c <= Ve[g][0].e.c && (A.F = Ve[g][1]);
            }
            if (X.t == null && A.v === void 0) if (A.f || A.F) A.v = 0, A.t = "n";
            else if (he) A.t = "z";
            else continue;
            else A.t = X.t || "n";
            switch (c.s.c > F && (c.s.c = F), c.e.c < F && (c.e.c = F), A.t) {
              case "n":
                if (A.v == "" || A.v == null) {
                  if (!he) continue;
                  A.t = "z";
                } else A.v = parseFloat(A.v);
                break;
              case "s":
                if (typeof A.v > "u") {
                  if (!he) continue;
                  A.t = "z";
                } else B = Ri[parseInt(A.v, 10)], A.v = B.t, A.r = B.r, f.cellHTML && (A.h = B.h);
                break;
              case "str":
                A.t = "s", A.v = A.v != null ? Fr(Pr(A.v), true) : "", f.cellHTML && (A.h = Ai(A.v));
                break;
              case "inlineStr":
                y = gt(E, "is"), A.t = "s", y != null && (B = ao(y[1])) ? (A.v = B.t, f.cellHTML && (A.h = B.h)) : A.v = "";
                break;
              case "b":
                A.v = Rr(A.v);
                break;
              case "d":
                f.cellDates ? A.v = zr(A.v, sr) : (A.v = qr(zr(A.v, sr), sr), A.t = "n");
                break;
              case "e":
                (!f || f.cellText !== false) && (A.w = A.v), A.v = _t[A.v];
                break;
            }
            if (K = G = 0, de = null, te && X.s !== void 0 && (de = h.CellXf[X.s], de != null && (de.numFmtId != null && (K = de.numFmtId), f.cellStyles && de.fillId != null && (G = de.fillId))), rh(A, K, G, f, u, h, sr), f.cellDates && te && A.t == "n" && ua(nr[K]) && (A.v = Va(A.v + (sr ? 1462 : 0)), A.t = typeof A.v == "number" ? "n" : "d"), X.cm && f.xlmeta) {
              var z = (f.xlmeta.Cell || [])[+X.cm - 1];
              z && z.type == "XLDAPR" && (A.D = true);
            }
            var V;
            f.nodim && (V = Br(X.r), c.s.r > V.r && (c.s.r = V.r), c.e.r < V.r && (c.e.r = V.r)), $e ? (V = Br(X.r), s["!data"][V.r] || (s["!data"][V.r] = []), s["!data"][V.r][V.c] = A) : s[X.r] = A;
          }
        }
      }
    }
    ke.length > 0 && (s["!rows"] = ke);
  };
})();
function hw(e, r, t, a) {
  var n = [], i = [], s = Dr(e["!ref"]), f = "", c, u = "", h = [], v = 0, d = 0, x = e["!rows"], _ = e["!data"] != null, y = _ ? e["!data"] : [], m = { r: u }, g, S = -1, E = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (d = s.s.c; d <= s.e.c; ++d) h[d] = mr(d);
  for (v = s.s.r; v <= s.e.r; ++v) {
    i = [], u = br(v);
    var A = _ ? y[v] : [];
    for (d = s.s.c; d <= s.e.c; ++d) {
      c = h[d] + u;
      var X = _ ? A[d] : e[c];
      X !== void 0 && (f = uw(X, c, e, r, t, a, E)) != null && i.push(f);
    }
    (i.length > 0 || x && x[v]) && (m = { r: u }, x && x[v] && (g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Yi(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level)), n[n.length] = Ae("row", i.join(""), m));
  }
  if (x) for (; v < x.length; ++v) x && x[v] && (m = { r: v + 1 }, g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Yi(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level), n[n.length] = Ae("row", "", m));
  return n.join("");
}
function dw(e, r, t, a) {
  var n = [at, Ae("worksheet", null, { xmlns: Rn[0], "xmlns:r": ut.r })], i = t.SheetNames[e], s = 0, f = "", c = t.Sheets[i];
  c == null && (c = {});
  var u = c["!ref"] || "A1", h = Dr(u);
  if (h.e.c > 16383 || h.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + u + " exceeds format limit A1:XFD1048576");
    h.e.c = Math.min(h.e.c, 16383), h.e.r = Math.min(h.e.c, 1048575), u = dr(h);
  }
  a || (a = {}), c["!comments"] = [];
  var v = [];
  Y_(c, t, e, r, n), n[n.length] = Ae("dimension", null, { ref: u }), n[n.length] = cw(c, r, e, t), r.sheetFormat && (n[n.length] = Ae("sheetFormatPr", null, { defaultRowHeight: r.sheetFormat.defaultRowHeight || "16", baseColWidth: r.sheetFormat.baseColWidth || "10", outlineLevelRow: r.sheetFormat.outlineLevelRow || "7" })), c["!cols"] != null && c["!cols"].length > 0 && (n[n.length] = nw(c, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], c["!ref"] != null && (f = hw(c, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = Q_(c["!protect"])), c["!autofilter"] != null && (n[n.length] = sw(c["!autofilter"], c, t, e)), c["!merges"] != null && c["!merges"].length > 0 && (n[n.length] = $_(c["!merges"]));
  var d = -1, x, _ = -1;
  return c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(y) {
    y[1].Target && (x = { ref: y[0] }, y[1].Target.charAt(0) != "#" && (_ = Nr(a, -1, pr(y[1].Target).replace(/#[\s\S]*$/, ""), _r.HLINK), x["r:id"] = "rId" + _), (d = y[1].Target.indexOf("#")) > -1 && (x.location = pr(y[1].Target.slice(d + 1))), y[1].Tooltip && (x.tooltip = pr(y[1].Tooltip)), x.display = y[1].display, n[n.length] = Ae("hyperlink", null, x));
  }), n[n.length] = "</hyperlinks>"), delete c["!links"], c["!margins"] != null && (n[n.length] = tw(c["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = kt("ignoredErrors", Ae("ignoredError", null, { numberStoredAsText: 1, sqref: u }))), v.length > 0 && (_ = Nr(a, -1, "../drawings/drawing" + (e + 1) + ".xml", _r.DRAW), n[n.length] = Ae("drawing", null, { "r:id": "rId" + _ }), c["!drawing"] = v), c["!comments"].length > 0 && (_ = Nr(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", _r.VML), n[n.length] = Ae("legacyDrawing", null, { "r:id": "rId" + _ }), c["!legacy"] = _), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
}
function xw(e, r) {
  var t = {}, a = e.l + r;
  t.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (t.level = i & 7), i & 16 && (t.hidden = true), i & 32 && (t.hpt = n / 20), t;
}
function pw(e, r, t) {
  var a = oe(145), n = (t["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Yi(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, c = a.l;
  a.l += 4;
  for (var u = { r: e, c: 0 }, h = t["!data"] != null, v = 0; v < 16; ++v) if (!(r.s.c > v + 1 << 10 || r.e.c < v << 10)) {
    for (var d = -1, x = -1, _ = v << 10; _ < v + 1 << 10; ++_) {
      u.c = _;
      var y = h ? (t["!data"][u.r] || [])[u.c] : t[wr(u)];
      y && (d < 0 && (d = _), x = _);
    }
    d < 0 || (++f, a.write_shift(4, d), a.write_shift(4, x));
  }
  var m = a.l;
  return a.l = c, a.write_shift(4, f), a.l = m, a.length > a.l ? a.slice(0, a.l) : a;
}
function vw(e, r, t, a) {
  var n = pw(a, t, r);
  (n.length > 17 || (r["!rows"] || [])[a]) && ve(e, 0, n);
}
var mw = Mn, gw = ci;
function _w() {
}
function ww(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = ux(e), t;
}
function yw(e, r, t) {
  t == null && (t = oe(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return r0({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), al(e, t), t.slice(0, t.l);
}
function kw(e) {
  var r = ha(e);
  return [r];
}
function Ew(e, r, t) {
  return t == null && (t = oe(8)), Pn(r, t);
}
function Tw(e) {
  var r = Bn(e);
  return [r];
}
function Sw(e, r, t) {
  return t == null && (t = oe(4)), Ln(r, t);
}
function bw(e) {
  var r = ha(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Fw(e, r, t) {
  return t == null && (t = oe(9)), Pn(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Aw(e) {
  var r = Bn(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Cw(e, r, t) {
  return t == null && (t = oe(5)), Ln(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Dw(e) {
  var r = ha(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function cf(e, r, t) {
  return t == null && (t = oe(9)), Pn(r, t), t.write_shift(1, e.v), t;
}
function Iw(e) {
  var r = Bn(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function uf(e, r, t) {
  return t == null && (t = oe(8)), Ln(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function Ow(e) {
  var r = ha(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Nw(e, r, t) {
  return t == null && (t = oe(12)), Pn(r, t), t.write_shift(4, r.v), t;
}
function Rw(e) {
  var r = Bn(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Pw(e, r, t) {
  return t == null && (t = oe(8)), Ln(r, t), t.write_shift(4, r.v), t;
}
function Bw(e) {
  var r = ha(e), t = Nt(e);
  return [r, t, "n"];
}
function Lw(e, r, t) {
  return t == null && (t = oe(16)), Pn(r, t), In(e.v, t), t;
}
function ah(e) {
  var r = Bn(e), t = Nt(e);
  return [r, t, "n"];
}
function Mw(e, r, t) {
  return t == null && (t = oe(12)), Ln(r, t), In(e.v, t), t;
}
function Uw(e) {
  var r = ha(e), t = d0(e);
  return [r, t, "n"];
}
function Ww(e, r, t) {
  return t == null && (t = oe(12)), Pn(r, t), nl(e.v, t), t;
}
function Hw(e) {
  var r = Bn(e), t = d0(e);
  return [r, t, "n"];
}
function Vw(e, r, t) {
  return t == null && (t = oe(8)), Ln(r, t), nl(e.v, t), t;
}
function Xw(e) {
  var r = ha(e), t = Yf(e);
  return [r, t, "is"];
}
function Kw(e) {
  var r = ha(e), t = Bt(e);
  return [r, t, "str"];
}
function jw(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(12 + 4 * e.v.length)), Pn(r, t), lt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Gw(e) {
  var r = Bn(e), t = Bt(e);
  return [r, t, "str"];
}
function zw(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(8 + 4 * a.length)), Ln(r, t), lt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function $w(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = g0(e, a - e.l, t);
    s[3] = It(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function qw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = g0(e, a - e.l, t);
    s[3] = It(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Yw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = Nt(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = g0(e, a - e.l, t);
    s[3] = It(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Zw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = Bt(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = g0(e, a - e.l, t);
    s[3] = It(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var Jw = Mn, Qw = ci;
function ey(e, r) {
  return r == null && (r = oe(4)), r.write_shift(4, e), r;
}
function ry(e, r) {
  var t = e.l + r, a = Mn(e), n = h0(e), i = Bt(e), s = Bt(e), f = Bt(e);
  e.l = t;
  var c = { rfx: a, relId: n, loc: i, display: f };
  return s && (c.Tooltip = s), c;
}
function ty(e, r) {
  var t = oe(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  ci({ s: Br(e[0]), e: Br(e[0]) }, t), Zf("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return lt(n || "", t), lt(e[1].Tooltip || "", t), lt("", t), t.slice(0, t.l);
}
function ay() {
}
function ny(e, r, t) {
  var a = e.l + r, n = il(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, t.cellFormula) {
    var f = k_(e, a - e.l, t);
    s[1] = f;
  } else e.l = a;
  return s;
}
function iy(e, r, t) {
  var a = e.l + r, n = Mn(e), i = [n];
  if (t.cellFormula) {
    var s = T_(e, a - e.l, t);
    i[1] = s, e.l = a;
  } else e.l = a;
  return i;
}
function sy(e, r, t) {
  t == null && (t = oe(18));
  var a = _0(e, r);
  t.write_shift(-4, e), t.write_shift(-4, e), t.write_shift(4, (a.width || 10) * 256), t.write_shift(4, 0);
  var n = 0;
  return r.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), r.level && (n |= r.level << 8), t.write_shift(2, n), t;
}
var nh = ["left", "right", "top", "bottom", "header", "footer"];
function fy(e) {
  var r = {};
  return nh.forEach(function(t) {
    r[t] = Nt(e);
  }), r;
}
function oy(e, r) {
  return r == null && (r = oe(48)), Fn(e), nh.forEach(function(t) {
    In(e[t], r);
  }), r;
}
function cy(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function uy(e, r, t) {
  t == null && (t = oe(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function ly(e) {
  var r = oe(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), ci(e, r), r;
}
function hy(e, r) {
  return r == null && (r = oe(66)), r.write_shift(2, e.password ? no(e.password) : 0), r.write_shift(4, 1), [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
    t[1] ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0) : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
  }), r;
}
function dy() {
}
function xy() {
}
function py(e, r, t, a, n, i, s) {
  if (!e) return e;
  var f = r || {};
  a || (a = { "!id": {} });
  var c = {};
  f.dense && (c["!data"] = []);
  var u, h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, v = false, d = false, x, _, y, m, g, S, E, A, X, U = [];
  f.biff = 12, f["!row"] = 0;
  var F = 0, B = false, L = [], K = {}, G = f.supbooks || n.supbooks || [[]];
  if (G.sharedf = K, G.arrayf = L, G.SheetNames = n.SheetNames || n.Sheets.map(function(Qe) {
    return Qe.name;
  }), !f.supbooks && (f.supbooks = G, n.Names)) for (var te = 0; te < n.Names.length; ++te) G[0][te + 1] = n.Names[te];
  var de = [], Ve = [], ge = false;
  Zi[16] = { n: "BrtShortReal", f: ah };
  var $e, ke = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if (za(e, function(he, sr, Le) {
    if (!d) switch (Le) {
      case 148:
        u = he;
        break;
      case 0:
        x = he, f.sheetRows && f.sheetRows <= x.r && (d = true), A = br(m = x.r), f["!row"] = x.r, (he.hidden || he.hpt || he.level != null) && (he.hpt && (he.hpx = si(he.hpt)), Ve[he.r] = he);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 62:
        switch (_ = { t: he[2] }, he[2]) {
          case "n":
            _.v = he[1];
            break;
          case "s":
            E = Ri[he[1]], _.v = E.t, _.r = E.r;
            break;
          case "b":
            _.v = !!he[1];
            break;
          case "e":
            _.v = he[1], f.cellText !== false && (_.w = ht[_.v]);
            break;
          case "str":
            _.t = "s", _.v = he[1];
            break;
          case "is":
            _.t = "s", _.v = he[1].t;
            break;
        }
        if ((y = s.CellXf[he[0].iStyleRef]) && rh(_, y.numFmtId, null, f, i, s, ke > 0), g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (c["!data"][m] || (c["!data"][m] = []), c["!data"][m][g] = _) : c[mr(g) + A] = _, f.cellFormula) {
          for (B = false, F = 0; F < L.length; ++F) {
            var Te = L[F];
            x.r >= Te[0].s.r && x.r <= Te[0].e.r && g >= Te[0].s.c && g <= Te[0].e.c && (_.F = dr(Te[0]), B = true);
          }
          !B && he.length > 3 && (_.f = he[3]);
        }
        if (h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), f.cellDates && y && _.t == "n" && ua(nr[y.numFmtId])) {
          var ye = La(_.v + ke);
          ye && (_.t = "d", _.v = new Date(Date.UTC(ye.y, ye.m - 1, ye.d, ye.H, ye.M, ye.S, ye.u)));
        }
        $e && ($e.type == "XLDAPR" && (_.D = true), $e = void 0);
        break;
      case 1:
      case 12:
        if (!f.sheetStubs || v) break;
        _ = { t: "z", v: void 0 }, g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (c["!data"][m] || (c["!data"][m] = []), c["!data"][m][g] = _) : c[mr(g) + A] = _, h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), $e && ($e.type == "XLDAPR" && (_.D = true), $e = void 0);
        break;
      case 176:
        U.push(he);
        break;
      case 49:
        $e = ((f.xlmeta || {}).Cell || [])[he - 1];
        break;
      case 494:
        var je = a["!id"][he.relId];
        for (je ? (he.Target = je.Target, he.loc && (he.Target += "#" + he.loc), he.Rel = je) : he.relId == "" && (he.Target = "#" + he.loc), m = he.rfx.s.r; m <= he.rfx.e.r; ++m) for (g = he.rfx.s.c; g <= he.rfx.e.c; ++g) f.dense ? (c["!data"][m] || (c["!data"][m] = []), c["!data"][m][g] || (c["!data"][m][g] = { t: "z", v: void 0 }), c["!data"][m][g].l = he) : (S = mr(g) + br(m), c[S] || (c[S] = { t: "z", v: void 0 }), c[S].l = he);
        break;
      case 426:
        if (!f.cellFormula) break;
        L.push(he), X = f.dense ? c["!data"][m][g] : c[mr(g) + A], X.f = It(he[1], h, { r: x.r, c: g }, G, f), X.F = dr(he[0]);
        break;
      case 427:
        if (!f.cellFormula) break;
        K[wr(he[0].s)] = he[1], X = f.dense ? c["!data"][m][g] : c[mr(g) + A], X.f = It(he[1], h, { r: x.r, c: g }, G, f);
        break;
      case 60:
        if (!f.cellStyles) break;
        for (; he.e >= he.s; ) de[he.e--] = { width: he.w / 256, hidden: !!(he.flags & 1), level: he.level }, ge || (ge = true, io(he.w / 256)), on(de[he.e + 1]);
        break;
      case 551:
        he && (c["!legrel"] = he);
        break;
      case 161:
        c["!autofilter"] = { ref: dr(he) };
        break;
      case 476:
        c["!margins"] = he;
        break;
      case 147:
        n.Sheets[t] || (n.Sheets[t] = {}), he.name && (n.Sheets[t].CodeName = he.name), (he.above || he.left) && (c["!outline"] = { above: he.above, left: he.left });
        break;
      case 137:
        n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), he.RTL && (n.Views[0].RTL = true);
        break;
      case 485:
        break;
      case 64:
      case 1053:
        break;
      case 151:
        break;
      case 152:
      case 175:
      case 644:
      case 625:
      case 562:
      case 396:
      case 1112:
      case 1146:
      case 471:
      case 1050:
      case 649:
      case 1105:
      case 589:
      case 607:
      case 564:
      case 1055:
      case 168:
      case 174:
      case 1180:
      case 499:
      case 507:
      case 550:
      case 171:
      case 167:
      case 1177:
      case 169:
      case 1181:
      case 552:
      case 661:
      case 639:
      case 478:
      case 537:
      case 477:
      case 536:
      case 1103:
      case 680:
      case 1104:
      case 1024:
      case 663:
      case 535:
      case 678:
      case 504:
      case 1043:
      case 428:
      case 170:
      case 3072:
      case 50:
      case 2070:
      case 1045:
        break;
      case 35:
        v = true;
        break;
      case 36:
        v = false;
        break;
      case 37:
        v = true;
        break;
      case 38:
        v = false;
        break;
      default:
        if (!sr.T) {
          if (!v || f.WTF) throw new Error("Unexpected record 0x" + Le.toString(16));
        }
    }
  }, f), delete f.supbooks, delete f["!row"], !c["!ref"] && (h.s.r < 2e6 || u && (u.e.r > 0 || u.e.c > 0 || u.s.r > 0 || u.s.c > 0)) && (c["!ref"] = dr(u || h)), f.sheetRows && c["!ref"]) {
    var Pe = Dr(c["!ref"]);
    f.sheetRows <= +Pe.e.r && (Pe.e.r = f.sheetRows - 1, Pe.e.r > h.e.r && (Pe.e.r = h.e.r), Pe.e.r < Pe.s.r && (Pe.s.r = Pe.e.r), Pe.e.c > h.e.c && (Pe.e.c = h.e.c), Pe.e.c < Pe.s.c && (Pe.s.c = Pe.e.c), c["!fullref"] = c["!ref"], c["!ref"] = dr(Pe));
  }
  return U.length > 0 && (c["!merges"] = U), de.length > 0 && (c["!cols"] = de), Ve.length > 0 && (c["!rows"] = Ve), a["!id"][c["!legrel"]] && (c["!legdrawel"] = a["!id"][c["!legrel"]]), c;
}
function vy(e, r, t, a, n, i, s, f) {
  var c = { r: t, c: a };
  if (r.c && i["!comments"].push([wr(c), r.c]), r.v === void 0) return false;
  var u = "";
  switch (r.t) {
    case "b":
      u = r.v ? "1" : "0";
      break;
    case "d":
      r = Hr(r), r.z = r.z || nr[14], r.v = qr(zr(r.v, f), f), r.t = "n";
      break;
    case "n":
    case "e":
      u = "" + r.v;
      break;
    default:
      u = r.v;
      break;
  }
  switch (c.s = xn(n.cellXfs, r, n), r.l && i["!links"].push([wr(c), r.l]), r.t) {
    case "s":
    case "str":
      return n.bookSST ? (u = oo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), c.t = "s", c.v = u, s ? ve(e, 18, Pw(r, c)) : ve(e, 7, Nw(r, c))) : (c.t = "str", s ? ve(e, 17, zw(r, c)) : ve(e, 6, jw(r, c))), true;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? ve(e, 13, Vw(r, c)) : ve(e, 2, Ww(r, c)) : isFinite(r.v) ? s ? ve(e, 16, Mw(r, c)) : ve(e, 5, Lw(r, c)) : (c.t = "e", isNaN(r.v) ? s ? ve(e, 14, uf({ v: 36 }, c)) : ve(e, 3, cf({ v: 36 }, c)) : s ? ve(e, 14, uf({ v: 7 }, c)) : ve(e, 3, cf({ v: 7 }, c))), true;
    case "b":
      return c.t = "b", s ? ve(e, 15, Cw(r, c)) : ve(e, 4, Fw(r, c)), true;
    case "e":
      return c.t = "e", s ? ve(e, 14, uf(r, c)) : ve(e, 3, cf(r, c)), true;
  }
  return s ? ve(e, 12, Sw(r, c)) : ve(e, 1, Ew(r, c)), true;
}
function my(e, r, t, a, n) {
  var i = Dr(r["!ref"] || "A1"), s = "", f = [], c = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  ve(e, 145);
  var u = r["!data"] != null, h = u ? r["!data"][i.s.r] : [], v = i.e.r;
  r["!rows"] && (v = Math.max(i.e.r, r["!rows"].length - 1));
  for (var d = i.s.r; d <= v; ++d) if (s = br(d), u && (h = r["!data"][d]), vw(e, r, i, d), !(u && !h)) {
    var x = false;
    if (d <= i.e.r) for (var _ = i.s.c; _ <= i.e.c; ++_) {
      d === i.s.r && (f[_] = mr(_));
      var y = u ? h[_] : r[f[_] + s];
      if (!y) {
        x = false;
        continue;
      }
      x = vy(e, y, d, _, a, r, x, c);
    }
  }
  ve(e, 146);
}
function gy(e, r) {
  !r || !r["!merges"] || (ve(e, 177, ey(r["!merges"].length)), r["!merges"].forEach(function(t) {
    ve(e, 176, Qw(t));
  }), ve(e, 178));
}
function _y(e, r) {
  !r || !r["!cols"] || (ve(e, 390), r["!cols"].forEach(function(t, a) {
    t && ve(e, 60, sy(a, t));
  }), ve(e, 391));
}
function wy(e, r) {
  !r || !r["!ref"] || (ve(e, 648), ve(e, 649, ly(Dr(r["!ref"]))), ve(e, 650));
}
function yy(e, r, t) {
  r["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = Nr(t, -1, a[1].Target.replace(/#[\s\S]*$/, ""), _r.HLINK);
      ve(e, 494, ty(a, n));
    }
  }), delete r["!links"];
}
function ky(e, r, t, a) {
  if (r["!comments"].length > 0) {
    var n = Nr(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", _r.VML);
    ve(e, 551, Zf("rId" + n)), r["!legacy"] = n;
  }
}
function Ey(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : dr(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = wt(i);
    f.s.r == f.e.r && (f.e.r = wt(r["!ref"]).e.r, i = dr(f));
    for (var c = 0; c < s.length; ++c) {
      var u = s[c];
      if (u.Name == "_xlnm._FilterDatabase" && u.Sheet == a) {
        u.Ref = Ki(t.SheetNames[a]) + "!" + Xi(i);
        break;
      }
    }
    c == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: Ki(t.SheetNames[a]) + "!" + Xi(i) }), ve(e, 161, ci(Dr(i))), ve(e, 162);
  }
}
function Ty(e, r, t) {
  ve(e, 133), ve(e, 137, uy(r, t)), ve(e, 138), ve(e, 134);
}
function Sy(e, r) {
  r["!protect"] && ve(e, 535, hy(r["!protect"]));
}
function by(e, r, t, a) {
  var n = Pt(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var c = Dr(s["!ref"] || "A1");
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], ve(n, 129), (t.vbaraw || s["!outline"]) && ve(n, 147, yw(f, s["!outline"])), ve(n, 148, gw(c)), Ty(n, s, t.Workbook), _y(n, s), my(n, s, e, r, t), Sy(n, s), Ey(n, s, t, e), gy(n, s), yy(n, s, a), s["!margins"] && ve(n, 476, oy(s["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && wy(n, s), ky(n, s, e, a), ve(n, 130), n.end();
}
function Fy(e) {
  var r = [], t = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
    s && (r[+s[1]] = t ? +s[2] : s[2]);
  });
  var n = Fr((kn(e, "c:formatCode") || ["", "General"])[1]);
  return (Hf(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function Ay(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, c = 0, u = "A", h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (Hf(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(v) {
    var d = Fy(v);
    h.s.r = h.s.c = 0, h.e.c = f, u = mr(f), d[0].forEach(function(x, _) {
      s["!data"] ? (s["!data"][_] || (s["!data"][_] = []), s["!data"][_][f] = { t: "n", v: x, z: d[1] }) : s[u + br(_)] = { t: "n", v: x, z: d[1] }, c = _;
    }), h.e.r < c && (h.e.r = c), ++f;
  }), f > 0 && (s["!ref"] = dr(h)), s;
}
function Cy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(th);
  return f && co(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function Dy(e, r) {
  e.l += 10;
  var t = Bt(e);
  return { name: t };
}
function Iy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = false;
  return za(e, function(c, u, h) {
    switch (h) {
      case 550:
        i["!rel"] = c;
        break;
      case 651:
        n.Sheets[t] || (n.Sheets[t] = {}), c.name && (n.Sheets[t].CodeName = c.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        s = true;
        break;
      case 36:
        s = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(u.T > 0)) {
          if (!(u.T < 0)) {
            if (!s || r.WTF) throw new Error("Unexpected record 0x" + h.toString(16));
          }
        }
    }
  }, r), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var uo = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], Oy = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], Ny = [], Ry = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function eu(e, r) {
  for (var t = 0; t != e.length; ++t) for (var a = e[t], n = 0; n != r.length; ++n) {
    var i = r[n];
    if (a[i[0]] == null) a[i[0]] = i[1];
    else switch (i[2]) {
      case "bool":
        typeof a[i[0]] == "string" && (a[i[0]] = Rr(a[i[0]]));
        break;
      case "int":
        typeof a[i[0]] == "string" && (a[i[0]] = parseInt(a[i[0]], 10));
        break;
    }
  }
}
function ru(e, r) {
  for (var t = 0; t != r.length; ++t) {
    var a = r[t];
    if (e[a[0]] == null) e[a[0]] = a[1];
    else switch (a[2]) {
      case "bool":
        typeof e[a[0]] == "string" && (e[a[0]] = Rr(e[a[0]]));
        break;
      case "int":
        typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
        break;
    }
  }
}
function ih(e) {
  ru(e.WBProps, uo), ru(e.CalcPr, Ry), eu(e.WBView, Oy), eu(e.Sheets, Ny), ei.date1904 = Rr(e.WBProps.date1904);
}
function Py(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Rr(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var By = ":][*?/\\".split("");
function sh(e, r) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    By.forEach(function(t) {
      if (e.indexOf(t) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (t) {
    throw t;
  }
  return true;
}
function Ly(e, r, t) {
  e.forEach(function(a, n) {
    sh(a);
    for (var i = 0; i < n; ++i) if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
    if (t) {
      var s = r && r[n] && r[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function My(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var r = e.Workbook && e.Workbook.Sheets || [];
  Ly(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t) U_(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
  e.SheetNames.forEach(function(a, n) {
    var i = e.Sheets[a];
    if (!(!i || !i["!autofilter"])) {
      var s;
      e.Workbook || (e.Workbook = {}), e.Workbook.Names || (e.Workbook.Names = []), e.Workbook.Names.forEach(function(c) {
        c.Name == "_xlnm._FilterDatabase" && c.Sheet == n && (s = c);
      });
      var f = Ki(a) + "!" + Xi(i["!autofilter"].ref);
      s ? s.Ref = f : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: f });
    }
  });
}
var Uy = /<\w+:workbook/;
function Wy(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = false, n = "xmlns", i = {}, s = 0;
  if (e.replace(Et, function(c, u) {
    var h = Ye(c);
    switch (la(h[0])) {
      case "<?xml":
        break;
      case "<workbook":
        c.match(Uy) && (n = "xmlns" + c.match(/<(\w+):/)[1]), t.xmlns = h[n];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete h[0], t.AppVersion = h;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        uo.forEach(function(v) {
          if (h[v[0]] != null) switch (v[2]) {
            case "bool":
              t.WBProps[v[0]] = Rr(h[v[0]]);
              break;
            case "int":
              t.WBProps[v[0]] = parseInt(h[v[0]], 10);
              break;
            default:
              t.WBProps[v[0]] = h[v[0]];
          }
        }), h.codeName && (t.WBProps.CodeName = Pr(h.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete h[0], t.WBView.push(h);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (h.state) {
          case "hidden":
            h.Hidden = 1;
            break;
          case "veryHidden":
            h.Hidden = 2;
            break;
          default:
            h.Hidden = 0;
        }
        delete h.state, h.name = Fr(Pr(h.name)), delete h[0], t.Sheets.push(h);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        a = true;
        break;
      case "</definedNames>":
        a = false;
        break;
      case "<definedName":
        i = {}, i.Name = Pr(h.name), h.comment && (i.Comment = h.comment), h.localSheetId && (i.Sheet = +h.localSheetId), Rr(h.hidden || "0") && (i.Hidden = true), s = u + c.length;
        break;
      case "</definedName>":
        i.Ref = Fr(Pr(e.slice(s, u))), t.Names.push(i);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete h[0], t.CalcPr = h;
        break;
      case "<calcPr/>":
        delete h[0], t.CalcPr = h;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = true;
        break;
      case "</ext>":
        a = false;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        a = true;
        break;
      case "</AlternateContent>":
        a = false;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + h[0] + " in workbook");
    }
    return c;
  }), Rn.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
  return ih(t), t;
}
function Hy(e) {
  var r = [at];
  r[r.length] = Ae("workbook", null, { xmlns: Rn[0], "xmlns:r": ut.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (uo.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), r[r.length] = Ae("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && n[0].Hidden) {
    for (r[r.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i) ;
    i == e.SheetNames.length && (i = 0), r[r.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', r[r.length] = "</bookViews>";
  }
  for (r[r.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: pr(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), n[i]) switch (n[i].Hidden) {
      case 1:
        s.state = "hidden";
        break;
      case 2:
        s.state = "veryHidden";
        break;
    }
    r[r.length] = Ae("sheet", null, s);
  }
  return r[r.length] = "</sheets>", t && (r[r.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var c = { name: f.Name };
    f.Comment && (c.comment = f.Comment), f.Sheet != null && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (r[r.length] = Ae("definedName", pr(f.Ref), c));
  }), r[r.length] = "</definedNames>"), r.length > 2 && (r[r.length] = "</workbook>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Vy(e, r) {
  var t = {};
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = kf(e), t.name = Bt(e), t;
}
function Xy(e, r) {
  return r || (r = oe(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), Zf(e.strRelID, r), lt(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Ky(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Bt(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function jy(e, r) {
  r || (r = oe(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), al(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
}
function Gy(e, r) {
  var t = {};
  return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function zy(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  e.l += 1;
  var i = e.read_shift(4), s = lx(e), f, c = "";
  try {
    f = E_(e, 0, t);
    try {
      c = h0(e);
    } catch {
    }
  } catch {
    console.error("Could not parse defined name " + s);
  }
  n & 32 && (s = "_xlnm." + s), e.l = a;
  var u = { Name: s, Ptg: f, Flags: n };
  return i < 268435455 && (u.Sheet = i), c && (u.Comment = c), u;
}
function $y(e, r) {
  var t = oe(9), a = 0, n = e.Name;
  Qf.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [t, lt(n), P_(e.Ref, r)];
  if (e.Comment) i.push(ji(e.Comment));
  else {
    var s = oe(4);
    s.write_shift(4, 4294967295), i.push(s);
  }
  return rt(i);
}
function qy(e, r) {
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = false;
  r || (r = {}), r.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Zi[16] = { n: "BrtFRTArchID$", f: Gy }, za(e, function(c, u, h) {
    switch (h) {
      case 156:
        s.SheetNames.push(c.name), t.Sheets.push(c);
        break;
      case 153:
        t.WBProps = c;
        break;
      case 39:
        c.Sheet != null && (r.SID = c.Sheet), c.Ref = c.Ptg ? It(c.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete c.Ptg, i.push(c);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        s[0].length ? s.push([h, c]) : s[0] = [h, c], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(c), s.XTI = s.XTI.concat(c);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        a.push(h), n = true;
        break;
      case 36:
        a.pop(), n = false;
        break;
      case 37:
        a.push(h), n = true;
        break;
      case 38:
        a.pop(), n = false;
        break;
      case 16:
        break;
      default:
        if (!u.T) {
          if (!n || r.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35) throw new Error("Unexpected record 0x" + h.toString(16));
        }
    }
  }, r), ih(t), t.Names = i, t.supbooks = s, t;
}
function Yy(e, r) {
  ve(e, 143);
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var a = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[t] && r.Workbook.Sheets[t].Hidden || 0, n = { Hidden: a, iTabID: t + 1, strRelID: "rId" + (t + 1), name: r.SheetNames[t] };
    ve(e, 156, Xy(n));
  }
  ve(e, 144);
}
function Zy(e, r) {
  r || (r = oe(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return lt("SheetJS", r), lt($s.version, r), lt($s.version, r), lt("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Jy(e, r) {
  r || (r = oe(29)), r.write_shift(-4, 0), r.write_shift(-4, 460), r.write_shift(4, 28800), r.write_shift(4, 17600), r.write_shift(4, 500), r.write_shift(4, e), r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function Qy(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, a = 0, n = -1, i = -1; a < t.length; ++a) !t[a] || !t[a].Hidden && n == -1 ? n = a : t[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (ve(e, 135), ve(e, 158, Jy(n)), ve(e, 136));
  }
}
function ek(e, r) {
  !r.Workbook || !r.Workbook.Names || r.Workbook.Names.forEach(function(t) {
    try {
      if (t.Flags & 14) return;
      ve(e, 39, $y(t, r));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(t));
    }
  });
}
function rk(e) {
  var r = e.SheetNames.length, t = oe(12 * r + 28);
  t.write_shift(4, r + 2), t.write_shift(4, 0), t.write_shift(4, -2), t.write_shift(4, -2), t.write_shift(4, 0), t.write_shift(4, -1), t.write_shift(4, -1);
  for (var a = 0; a < r; ++a) t.write_shift(4, 0), t.write_shift(4, a), t.write_shift(4, a);
  return t;
}
function tk(e, r) {
  ve(e, 353), ve(e, 357), ve(e, 362, rk(r)), ve(e, 354);
}
function ak(e, r) {
  var t = Pt();
  return ve(t, 131), ve(t, 128, Zy()), ve(t, 153, jy(e.Workbook && e.Workbook.WBProps || null)), Qy(t, e), Yy(t, e), tk(t, e), (e.Workbook || {}).Names && ek(t, e), ve(t, 132), t.end();
}
function nk(e, r, t) {
  return r.slice(-4) === ".bin" ? qy(e, t) : Wy(e, t);
}
function ik(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? py(e, a, t, n, i, s, f) : z_(e, a, t, n, i, s, f);
}
function sk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Iy(e, a, t, n, i) : Cy(e, a, t, n, i);
}
function fk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Qg() : e2();
}
function ok(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Zg() : Jg();
}
function ck(e, r, t, a) {
  return r.slice(-4) === ".bin" ? Jm(e, t, a) : Um(e, t, a);
}
function uk(e, r, t) {
  return r.slice(-4) === ".bin" ? rm(e, t) : Zv(e, t);
}
function lk(e, r, t) {
  return r.slice(-4) === ".bin" ? jg(e, t) : Mg(e, t);
}
function hk(e, r, t) {
  return r.slice(-4) === ".bin" ? Ng(e) : Ig(e);
}
function dk(e, r, t, a) {
  return t.slice(-4) === ".bin" ? Rg(e, r, t, a) : void 0;
}
function xk(e, r, t) {
  return r.slice(-4) === ".bin" ? Fg(e, r, t) : Cg(e, r, t);
}
var fh = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, oh = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function da(e, r) {
  var t = e.split(/\s+/), a = [];
  if (a[0] = t[0], t.length === 1) return a;
  var n = e.match(fh), i, s, f, c;
  if (n) for (c = 0; c != n.length; ++c) i = n[c].match(oh), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function pk(e) {
  var r = e.split(/\s+/), t = {};
  if (r.length === 1) return t;
  var a = e.match(fh), n, i, s, f;
  if (a) for (f = 0; f != a.length; ++f) n = a[f].match(oh), (i = n[1].indexOf(":")) === -1 ? t[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), t[s] = n[2].slice(1, n[2].length - 1));
  return t;
}
var Bi;
function vk(e, r, t) {
  var a = Bi[e] || Fr(e);
  return a === "General" ? An(r) : ea(a, r, { date1904: !!t });
}
function mk(e, r, t, a) {
  var n = a;
  switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = Rr(a);
      break;
    case "i2":
    case "int":
      n = parseInt(a, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(a);
      break;
    case "date":
    case "dateTime.tz":
      n = zr(a);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + t[0]);
  }
  e[Fr(r)] = n;
}
function gk(e, r, t, a) {
  if (e.t !== "z") {
    if (!t || t.cellText !== false) try {
      e.t === "e" ? e.w = e.w || ht[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wi(e.v) : e.w = An(e.v) : e.w = vk(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = Bi[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && ua(n)) {
        var i = La(e.v + (a ? 1462 : 0));
        i && (e.t = "d", e.v = new Date(Date.UTC(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function _k(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var a = r.Interior;
    a.Pattern && (a.patternType = Im[a.Pattern] || a.Pattern);
  }
  e[r.ID] = r;
}
function wk(e, r, t, a, n, i, s, f, c, u, h) {
  var v = "General", d = a.StyleID, x = {};
  u = u || {};
  var _ = [], y = 0;
  for (d === void 0 && f && (d = f.StyleID), d === void 0 && s && (d = s.StyleID); i[d] !== void 0; ) {
    var m = i[d];
    if (m.nf && (v = m.nf), m.Interior && _.push(m.Interior), !m.Parent) break;
    d = m.Parent;
  }
  switch (t.Type) {
    case "Boolean":
      a.t = "b", a.v = Rr(e);
      break;
    case "String":
      a.t = "s", a.r = pc(Fr(e)), a.v = e.indexOf("<") > -1 ? Fr(r || e).replace(/<[^<>]*>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = qr(zr(e, h), h), a.v !== a.v && (a.v = Fr(e)), (!v || v == "General") && (v = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = _t[e], u.cellText !== false && (a.w = e);
      break;
    default:
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = pc(r || e));
      break;
  }
  if (gk(a, v, u, h), u.cellFormula !== false) if (a.Formula) {
    var g = Fr(a.Formula);
    g.charCodeAt(0) == 61 && (g = g.slice(1)), a.f = bn(g, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = bn("RC:RC", n) : a.ArrayRange && (a.F = bn(a.ArrayRange, n), c.push([Dr(a.F), a.F]));
  } else for (y = 0; y < c.length; ++y) n.r >= c[y][0].s.r && n.r <= c[y][0].e.r && n.c >= c[y][0].s.c && n.c <= c[y][0].e.c && (a.F = c[y][1]);
  u.cellStyles && (_.forEach(function(S) {
    !x.patternType && S.patternType && (x.patternType = S.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function yk(e) {
  return Qf.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function kk(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function lf(e, r) {
  var t = r || {};
  fi();
  var a = Ti(l0(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") && (a = Pr(a));
  var n = a.slice(0, 1024).toLowerCase(), i = false;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = Hr(t);
    return s.type = "string", ii.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(rr) {
    n.indexOf("<" + rr) >= 0 && (i = true);
  }), i) return o4(a, t);
  Bi = { "General Number": "General", "General Date": nr[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": nr[15], "Short Date": nr[14], "Long Time": nr[19], "Medium Time": nr[18], "Short Time": nr[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: nr[2], Standard: nr[4], Percent: nr[10], Scientific: nr[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var f, c = [], u, h = {}, v = [], d = {}, x = "";
  t.dense && (d["!data"] = []);
  var _ = {}, y = {}, m = da('<Data ss:Type="String">'), g = 0, S = 0, E = 0, A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, X = {}, U = {}, F = "", B = 0, L = [], K = {}, G = {}, te = 0, de = [], Ve = [], ge = {}, $e = [], ke, Pe = false, Qe = [], he = [], sr = {}, Le = 0, Te = 0, ye = { Sheets: [], WBProps: { date1904: false } }, je = {};
  ot.lastIndex = 0, a = as(a, "<!--", "-->");
  for (var Ge = ""; f = ot.exec(a); ) switch (f[3] = (Ge = f[3]).toLowerCase()) {
    case "data":
      if (Ge == "data") {
        if (f[1] === "/") {
          if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], true]);
        break;
      }
      if (c[c.length - 1][1]) break;
      f[1] === "/" ? wk(a.slice(g, f.index), F, m, c[c.length - 1][0] == "comment" ? ge : _, { c: S, r: E }, X, $e[S], y, Qe, t, ye.WBProps.date1904) : (F = "", m = da(f[0]), g = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/") if (Ve.length > 0 && (_.c = Ve), (!t.sheetRows || t.sheetRows > E) && _.v !== void 0 && (t.dense ? (d["!data"][E] || (d["!data"][E] = []), d["!data"][E][S] = _) : d[mr(S) + br(E)] = _), _.HRef && (_.l = { Target: Fr(_.HRef) }, _.HRefScreenTip && (_.l.Tooltip = _.HRefScreenTip), delete _.HRef, delete _.HRefScreenTip), (_.MergeAcross || _.MergeDown) && (Le = S + (parseInt(_.MergeAcross, 10) | 0), Te = E + (parseInt(_.MergeDown, 10) | 0), (Le > S || Te > E) && L.push({ s: { c: S, r: E }, e: { c: Le, r: Te } })), !t.sheetStubs) _.MergeAcross ? S = Le + 1 : ++S;
      else if (_.MergeAcross || _.MergeDown) {
        for (var Ze = S; Ze <= Le; ++Ze) for (var R = E; R <= Te; ++R) (Ze > S || R > E) && (t.dense ? (d["!data"][R] || (d["!data"][R] = []), d["!data"][R][Ze] = { t: "z" }) : d[mr(Ze) + br(R)] = { t: "z" });
        S = Le + 1;
      } else ++S;
      else _ = pk(f[0]), _.Index && (S = +_.Index - 1), S < A.s.c && (A.s.c = S), S > A.e.c && (A.e.c = S), f[0].slice(-2) === "/>" && ++S, Ve = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (E < A.s.r && (A.s.r = E), E > A.e.r && (A.e.r = E), f[0].slice(-2) === "/>" && (y = da(f[0]), y.Index && (E = +y.Index - 1)), S = 0, ++E) : (y = da(f[0]), y.Index && (E = +y.Index - 1), sr = {}, (y.AutoFitHeight == "0" || y.Height) && (sr.hpx = parseInt(y.Height, 10), sr.hpt = Yi(sr.hpx), he[E] = sr), y.Hidden == "1" && (sr.hidden = true, he[E] = sr));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        v.push(x), A.s.r <= A.e.r && A.s.c <= A.e.c && (d["!ref"] = dr(A), t.sheetRows && t.sheetRows <= A.e.r && (d["!fullref"] = d["!ref"], A.e.r = t.sheetRows - 1, d["!ref"] = dr(A))), L.length && (d["!merges"] = L), $e.length > 0 && (d["!cols"] = $e), he.length > 0 && (d["!rows"] = he), h[x] = d;
      } else A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, E = S = 0, c.push([f[3], false]), u = da(f[0]), x = Fr(u.Name), d = {}, t.dense && (d["!data"] = []), L = [], Qe = [], he = [], je = { name: x, Hidden: 0 }, ye.Sheets.push(je);
      break;
    case "table":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        c.push([f[3], false]), $e = [], Pe = false;
      }
      break;
    case "style":
      f[1] === "/" ? _k(X, U, t) : U = da(f[0]);
      break;
    case "numberformat":
      U.nf = Fr(da(f[0]).Format || "General"), Bi[U.nf] && (U.nf = Bi[U.nf]);
      for (var W = 0; W != 392 && nr[W] != U.nf; ++W) ;
      if (W == 392) {
        for (W = 57; W != 392; ++W) if (nr[W] == null) {
          sn(U.nf, W);
          break;
        }
      }
      break;
    case "column":
      if (c[c.length - 1][0] !== "table" || f[1] === "/") break;
      if (ke = da(f[0]), ke.Hidden && (ke.hidden = true, delete ke.Hidden), ke.Width && (ke.wpx = parseInt(ke.Width, 10)), !Pe && ke.wpx > 10) {
        Pe = true, Ot = Ul;
        for (var z = 0; z < $e.length; ++z) $e[z] && on($e[z]);
      }
      Pe && on(ke), $e[ke.Index - 1 || $e.length] = ke;
      for (var V = 0; V < +ke.Span; ++V) $e[$e.length] = Hr(ke);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      ye.Names || (ye.Names = []);
      var ue = Ye(f[0]), I = { Name: yk(ue.Name), Ref: bn(ue.RefersTo.slice(1), { r: 0, c: 0 }) };
      ye.Sheets.length > 0 && (I.Sheet = ye.Sheets.length - 1), ye.Names.push(I);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (f[0].slice(-2) === "/>") break;
      f[1] === "/" ? F += a.slice(B, f.index) : B = f.index + f[0].length;
      break;
    case "interior":
      if (!t.cellStyles) break;
      U.Interior = da(f[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (f[0].slice(-2) === "/>") break;
      f[1] === "/" ? Px(K, Ge, a.slice(te, f.index)) : te = f.index + f[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else c.push([f[3], false]);
      break;
    case "comment":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        kk(ge), Ve.push(ge);
      } else c.push([f[3], false]), u = da(f[0]), Rr(u.ShowAlways || "0") || (Ve.hidden = true), ge = { a: u.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var Ce = da(f[0]);
        d["!autofilter"] = { ref: bn(Ce.Range).replace(/\$/g, "") }, c.push([f[3], true]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], true]);
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], true]);
      break;
    case "null":
      break;
    default:
      if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof") return iu(a, t);
      var Ue = true;
      switch (c[c.length - 1][0]) {
        case "officedocumentsettings":
          switch (f[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              Ue = false;
          }
          break;
        case "componentoptions":
          switch (f[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              Ue = false;
          }
          break;
        case "excelworkbook":
          switch (f[3]) {
            case "date1904":
              ye.WBProps.date1904 = true;
              break;
            case "hidehorizontalscrollbar":
              break;
            case "hideverticalscrollbar":
              break;
            case "hideworkbooktabs":
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              Ue = false;
          }
          break;
        case "workbookoptions":
          switch (f[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              Ue = false;
          }
          break;
        case "worksheetoptions":
          switch (f[3]) {
            case "visible":
              if (f[0].slice(-2) !== "/>") if (f[1] === "/") switch (a.slice(te, f.index)) {
                case "SheetHidden":
                  je.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  je.Hidden = 2;
                  break;
              }
              else te = f.index + f[0].length;
              break;
            case "header":
              d["!margins"] || Fn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].header = +Ye(f[0]).Margin);
              break;
            case "footer":
              d["!margins"] || Fn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].footer = +Ye(f[0]).Margin);
              break;
            case "pagemargins":
              var Se = Ye(f[0]);
              d["!margins"] || Fn(d["!margins"] = {}, "xlml"), isNaN(+Se.Top) || (d["!margins"].top = +Se.Top), isNaN(+Se.Left) || (d["!margins"].left = +Se.Left), isNaN(+Se.Right) || (d["!margins"].right = +Se.Right), isNaN(+Se.Bottom) || (d["!margins"].bottom = +Se.Bottom);
              break;
            case "displayrighttoleft":
              ye.Views || (ye.Views = []), ye.Views[0] || (ye.Views[0] = {}), ye.Views[0].RTL = true;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              d["!outline"] || (d["!outline"] = {}), d["!outline"].above = true;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              d["!outline"] || (d["!outline"] = {}), d["!outline"].left = true;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              Ue = false;
          }
          break;
        case "pivottable":
        case "pivotcache":
          switch (f[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              Ue = false;
          }
          break;
        case "pagebreaks":
          switch (f[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              Ue = false;
          }
          break;
        case "autofilter":
          switch (f[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              Ue = false;
          }
          break;
        case "querytable":
          switch (f[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              Ue = false;
          }
          break;
        case "datavalidation":
          switch (f[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              Ue = false;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (f[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              Ue = false;
          }
          break;
        case "mapinfo":
        case "schema":
        case "data":
          switch (f[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              Ue = false;
          }
          break;
        case "smarttags":
          break;
        default:
          Ue = false;
          break;
      }
      if (Ue || f[3].match(/!\[CDATA/)) break;
      if (!c[c.length - 1][1]) throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
      if (c[c.length - 1][0] === "customdocumentproperties") {
        if (f[0].slice(-2) === "/>") break;
        f[1] === "/" ? mk(G, Ge, de, a.slice(te, f.index)) : (de = f, te = f.index + f[0].length);
        break;
      }
      if (t.WTF) throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
  }
  var ar = {};
  return !t.bookSheets && !t.bookProps && (ar.Sheets = h), ar.SheetNames = v, ar.Workbook = ye, ar.SSF = Hr(nr), ar.Props = K, ar.Custprops = G, ar.bookType = "xlml", ar;
}
function Af(e, r) {
  switch (lo(r = r || {}), r.type || "base64") {
    case "base64":
      return lf(Qt(e), r);
    case "binary":
    case "buffer":
    case "file":
      return lf(e, r);
    case "array":
      return lf(Oa(e), r);
  }
}
function Ek(e, r) {
  var t = [];
  return e.Props && t.push(Bx(e.Props, r)), e.Custprops && t.push(Lx(e.Props, e.Custprops)), t.join("");
}
function Tk(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function Sk(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return r.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(Ae("NumberFormat", null, { "ss:Format": pr(nr[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    t.push(Ae("Style", i.join(""), s));
  }), Ae("Styles", t.join(""));
}
function ch(e) {
  return Ae("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + v0(e.Ref, { r: 0, c: 0 }) });
}
function bk(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(ch(n)));
  }
  return Ae("Names", t.join(""));
}
function Fk(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(ch(f)));
  }
  return i.join("");
}
function Ak(e, r, t, a) {
  if (!e) return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(Ae("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(Ae("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(Ae("PageMargins", null, { "x:Bottom": e["!margins"].bottom || "0.75", "x:Left": e["!margins"].left || "0.7", "x:Right": e["!margins"].right || "0.7", "x:Top": e["!margins"].top || "0.75" })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) if (a.Workbook.Sheets[t].Hidden) n.push(Ae("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
  else {
    for (var i = 0; i < t && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i) ;
    i == t && n.push("<Selected/>");
  }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(kt("ProtectContents", "True")), e["!protect"].objects && n.push(kt("ProtectObjects", "True")), e["!protect"].scenarios && n.push(kt("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(kt("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(kt("EnableSelection", "UnlockedCells")), [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : Ae("WorksheetOptions", n.join(""), { xmlns: Yt.x });
}
function Ck(e) {
  return e.map(function(r) {
    var t = Wd(r.t || ""), a = Ae("ss:Data", t, { xmlns: "http://www.w3.org/TR/REC-html40" }), n = {};
    return r.a && (n["ss:Author"] = r.a), e.hidden || (n["ss:ShowAlways"] = "1"), Ae("Comment", a, n);
  }).join("");
}
function Dk(e, r, t, a, n, i, s) {
  if (!e || e.v == null && e.f == null) return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + pr(v0(e.f, s))), e.F && e.F.slice(0, r.length) == r) {
    var c = Br(e.F.slice(r.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = pr(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = pr(e.l.Tooltip))), t["!merges"]) for (var u = t["!merges"], h = 0; h != u.length; ++h) u[h].s.c != s.c || u[h].s.r != s.r || (u[h].e.c > u[h].s.c && (f["ss:MergeAcross"] = u[h].e.c - u[h].s.c), u[h].e.r > u[h].s.r && (f["ss:MergeDown"] = u[h].e.r - u[h].s.r));
  var v = "", d = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs) return "";
      break;
    case "n":
      isFinite(e.v) ? (v = "Number", d = String(e.v)) : (v = "Error", d = ht[isNaN(e.v) ? 36 : 7]);
      break;
    case "b":
      v = "Boolean", d = e.v ? "1" : "0";
      break;
    case "e":
      v = "Error", d = ht[e.v];
      break;
    case "d":
      v = "DateTime", d = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || nr[14]);
      break;
    case "s":
      v = "String", d = Ud(e.v || "");
      break;
  }
  var x = xn(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + x), f["ss:Index"] = s.c + 1;
  var _ = e.v != null ? d : "", y = e.t == "z" ? "" : '<Data ss:Type="' + v + '">' + _ + "</Data>";
  return (e.c || []).length > 0 && (y += Ck(e.c)), Ae("Cell", y, f);
}
function Ik(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return r && (r.hpt && !r.hpx && (r.hpx = si(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), r.hidden && (t += ' ss:Hidden="1"')), t + ">";
}
function Ok(e, r, t, a) {
  if (!e["!ref"]) return "";
  var n = Dr(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(m, g) {
    on(m);
    var S = !!m.width, E = _0(g, m), A = { "ss:Index": g + 1 };
    S && (A["ss:Width"] = $i(E.width)), m.hidden && (A["ss:Hidden"] = "1"), f.push(Ae("Column", null, A));
  });
  for (var c = e["!data"] != null, u = { r: 0, c: 0 }, h = n.s.r; h <= n.e.r; ++h) {
    var v = [Ik(h, (e["!rows"] || [])[h])];
    u.r = h;
    for (var d = n.s.c; d <= n.e.c; ++d) {
      u.c = d;
      var x = false;
      for (s = 0; s != i.length; ++s) if (!(i[s].s.c > d) && !(i[s].s.r > h) && !(i[s].e.c < d) && !(i[s].e.r < h)) {
        (i[s].s.c != d || i[s].s.r != h) && (x = true);
        break;
      }
      if (!x) {
        var _ = mr(d) + br(h), y = c ? (e["!data"][h] || [])[d] : e[_];
        v.push(Dk(y, _, e, r, t, a, u));
      }
    }
    v.push("</Row>"), v.length > 2 && f.push(v.join(""));
  }
  return f.join("");
}
function Nk(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? Fk(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? Ok(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(Ak(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + v0(Xi(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function Rk(e, r) {
  r || (r = {}), e.SSF || (e.SSF = Hr(nr)), e.SSF && (fi(), f0(e.SSF), r.revssf = c0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], xn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Ek(e, r)), t.push(Tk(e)), t.push(""), t.push(bk(e));
  for (var a = 0; a < e.SheetNames.length; ++a) t.push(Ae("Worksheet", Nk(a, r, e), { "ss:Name": pr(e.SheetNames[a]) }));
  return t[2] = Sk(e, r), at + Ae("Workbook", t.join(""), { xmlns: Yt.ss, "xmlns:o": Yt.o, "xmlns:x": Yt.x, "xmlns:ss": Yt.ss, "xmlns:dt": Yt.dt, "xmlns:html": Yt.html });
}
function Pk(e) {
  var r = {}, t = e.content;
  if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = vx(t), t.length - t.l <= 4) return r;
  var a = t.read_shift(4);
  if (a == 0 || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4) || (a = t.read_shift(4), a !== 1907505652) || (r.UnicodeClipboardFormat = mx(t), a = t.read_shift(4), a == 0 || a > 40)) return r;
  t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr");
}
var Bk = [60, 1084, 2066, 2165, 2175];
function Lk(e, r, t, a, n) {
  var i = a, s = [], f = t.slice(t.l, t.l + i);
  if (n && n.enc && n.enc.insitu && f.length > 0) switch (e) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      n.enc.insitu(f);
  }
  s.push(f), t.l += i;
  for (var c = Wa(t, t.l), u = Cf[c], h = 0; u != null && Bk.indexOf(c) > -1; ) i = Wa(t, t.l + 2), h = t.l + 4, c == 2066 ? h += 4 : (c == 2165 || c == 2175) && (h += 12), f = t.slice(h, t.l + 4 + i), s.push(f), t.l += 4 + i, u = Cf[c = Wa(t, t.l)];
  var v = rt(s);
  ct(v, 0);
  var d = 0;
  v.lens = [];
  for (var x = 0; x < s.length; ++x) v.lens.push(d), d += s[x].length;
  if (v.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + v.length + " < " + a;
  return r.f(v, v.length, n);
}
function Ta(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, r.cellNF && e.z == null && (e.z = nr[a]);
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (!r || r.cellText !== false) try {
      e.t === "e" ? e.w = e.w || ht[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wi(e.v) : e.w = An(e.v) : e.w = ea(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && ua(nr[a] || String(a))) {
      var n = La(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Ws(e, r, t) {
  return { v: e, ixfe: r, t };
}
function Mk(e, r) {
  var t = { opts: {} }, a = {}, n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, c = [], u = "", h = {}, v, d = "", x, _, y, m, g = {}, S = [], E, A, X = [], U = [], F = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, B = {}, L = false, K = function(Ke) {
    return Ke < 8 ? En[Ke] : Ke < 64 && U[Ke - 8] || En[Ke];
  }, G = function(Ke, yr) {
    var Kr = Ke.XF.data;
    if (!(!Kr || !Kr.patternType || !yr || !yr.cellStyles)) {
      Ke.s = {}, Ke.s.patternType = Kr.patternType;
      var Gr;
      (Gr = zi(K(Kr.icvFore))) && (Ke.s.fgColor = { rgb: Gr }), (Gr = zi(K(Kr.icvBack))) && (Ke.s.bgColor = { rgb: Gr });
    }
  }, te = function(Ke, yr, Kr) {
    if (!(!L && Le > 1) && !(Kr.sheetRows && Ke.r >= Kr.sheetRows)) {
      if (Kr.cellStyles && yr.XF && yr.XF.data && G(yr, Kr), delete yr.ixfe, delete yr.XF, v = Ke, d = wr(Ke), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ke.r < s.s.r && (s.s.r = Ke.r), Ke.c < s.s.c && (s.s.c = Ke.c), Ke.r + 1 > s.e.r && (s.e.r = Ke.r + 1), Ke.c + 1 > s.e.c && (s.e.c = Ke.c + 1), Kr.cellFormula && yr.f) {
        for (var Gr = 0; Gr < S.length; ++Gr) if (!(S[Gr][0].s.c > Ke.c || S[Gr][0].s.r > Ke.r) && !(S[Gr][0].e.c < Ke.c || S[Gr][0].e.r < Ke.r)) {
          yr.F = dr(S[Gr][0]), (S[Gr][0].s.c != Ke.c || S[Gr][0].s.r != Ke.r) && delete yr.f, yr.f && (yr.f = "" + It(S[Gr][1], s, Ke, he, de));
          break;
        }
      }
      Kr.dense ? (n["!data"][Ke.r] || (n["!data"][Ke.r] = []), n["!data"][Ke.r][Ke.c] = yr) : n[d] = yr;
    }
  }, de = { enc: false, sbcch: 0, snames: [], sharedf: g, arrayf: S, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!r && !!r.cellStyles, WTF: !!r && !!r.wtf };
  r.password && (de.password = r.password);
  var Ve, ge = [], $e = [], ke = [], Pe = [], Qe = false, he = [];
  he.SheetNames = de.snames, he.sharedf = de.sharedf, he.arrayf = de.arrayf, he.names = [], he.XTI = [];
  var sr = 0, Le = 0, Te = 0, ye = [], je = [], Ge;
  de.codepage = 1200, pa(1200);
  for (var Ze = false; e.l < e.length - 1; ) {
    var R = e.l, W = e.read_shift(2);
    if (W === 0 && sr === 10) break;
    var z = e.l === e.length ? 0 : e.read_shift(2), V = Cf[W];
    if (Le == 0 && [9, 521, 1033, 2057].indexOf(W) == -1) break;
    if (V && V.f) {
      if (r.bookSheets && sr === 133 && W !== 133) break;
      if (sr = W, V.r === 2 || V.r == 12) {
        var ue = e.read_shift(2);
        if (z -= 2, !de.enc && ue !== W && ((ue & 255) << 8 | ue >> 8) !== W) throw new Error("rt mismatch: " + ue + "!=" + W);
        V.r == 12 && (e.l += 10, z -= 10);
      }
      var I = {};
      if (W === 10 ? I = V.f(e, z, de) : I = Lk(W, V, e, z, de), Le == 0 && [9, 521, 1033, 2057].indexOf(sr) === -1) continue;
      switch (W) {
        case 34:
          t.opts.Date1904 = F.WBProps.date1904 = I;
          break;
        case 134:
          t.opts.WriteProtect = true;
          break;
        case 47:
          if (de.enc || (e.l = 0), de.enc = I, !r.password) throw new Error("File is password-protected");
          if (I.valid == null) throw new Error("Encryption scheme unsupported");
          if (!I.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          de.lastuser = I;
          break;
        case 66:
          var Ce = Number(I);
          switch (Ce) {
            case 21010:
              Ce = 1200;
              break;
            case 32768:
              Ce = 1e4;
              break;
            case 32769:
              Ce = 1252;
              break;
          }
          pa(de.codepage = Ce), Ze = true;
          break;
        case 317:
          de.rrtabid = I;
          break;
        case 25:
          de.winlocked = I;
          break;
        case 439:
          t.opts.RefreshAll = I;
          break;
        case 12:
          t.opts.CalcCount = I;
          break;
        case 16:
          t.opts.CalcDelta = I;
          break;
        case 17:
          t.opts.CalcIter = I;
          break;
        case 13:
          t.opts.CalcMode = I;
          break;
        case 14:
          t.opts.CalcPrecision = I;
          break;
        case 95:
          t.opts.CalcSaveRecalc = I;
          break;
        case 15:
          de.CalcRefMode = I;
          break;
        case 2211:
          t.opts.FullCalc = I;
          break;
        case 129:
          I.fDialog && (n["!type"] = "dialog"), I.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = true), I.fRight || ((n["!outline"] || (n["!outline"] = {})).left = true);
          break;
        case 67:
        case 579:
        case 1091:
        case 224:
          X.push(I);
          break;
        case 430:
          he.push([I]), he[he.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          he[he.length - 1].push(I);
          break;
        case 24:
        case 536:
          Ge = { Name: I.Name, Ref: It(I.rgce, s, null, he, de) }, I.itab > 0 && (Ge.Sheet = I.itab - 1), he.names.push(Ge), he[0] || (he[0] = [], he[0].XTI = []), he[he.length - 1].push(I), I.Name == "_xlnm._FilterDatabase" && I.itab > 0 && I.rgce && I.rgce[0] && I.rgce[0][0] && I.rgce[0][0][0] == "PtgArea3d" && (je[I.itab - 1] = { ref: dr(I.rgce[0][0][1][2]) });
          break;
        case 22:
          de.ExternCount = I;
          break;
        case 23:
          he.length == 0 && (he[0] = [], he[0].XTI = []), he[he.length - 1].XTI = he[he.length - 1].XTI.concat(I), he.XTI = he.XTI.concat(I);
          break;
        case 2196:
          if (de.biff < 8) break;
          Ge != null && (Ge.Comment = I[1]);
          break;
        case 18:
          n["!protect"] = I;
          break;
        case 19:
          I !== 0 && de.WTF && console.error("Password verifier: " + I);
          break;
        case 133:
          i[de.biff == 4 ? de.snames.length : I.pos] = I, de.snames.push(I.name);
          break;
        case 10:
          {
            if (--Le ? !L : L) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = dr(s), r.sheetRows && r.sheetRows <= s.e.r) {
                  var Ue = s.e.r;
                  s.e.r = r.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = dr(s), s.e.r = Ue;
                }
                s.e.r++, s.e.c++;
              }
              ge.length > 0 && (n["!merges"] = ge), $e.length > 0 && (n["!objects"] = $e), ke.length > 0 && (n["!cols"] = ke), Pe.length > 0 && (n["!rows"] = Pe), F.Sheets.push(B);
            }
            u === "" ? h = n : a[u] = n, n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (de.biff === 8 && (de.biff = { 9: 2, 521: 3, 1033: 4 }[W] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[I.BIFFVer] || 8), de.biffguess = I.BIFFVer == 0, I.BIFFVer == 0 && I.dt == 4096 && (de.biff = 5, Ze = true, pa(de.codepage = 28591)), de.biff == 4 && I.dt & 256 && (L = true), de.biff == 8 && I.BIFFVer == 0 && I.dt == 16 && (de.biff = 2), Le++ && !L) break;
            if (n = {}, r.dense && (n["!data"] = []), de.biff < 8 && !Ze && (Ze = true, pa(de.codepage = r.codepage || 1252)), de.biff == 4 && L) u = (i[de.snames.indexOf(u) + 1] || { name: "" }).name;
            else if (de.biff < 5 || I.BIFFVer == 0 && I.dt == 4096) {
              u === "" && (u = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Se = { pos: e.l - z, name: u };
              i[Se.pos] = Se, de.snames.push(u);
            } else u = (i[R] || { name: "" }).name;
            I.dt == 32 && (n["!type"] = "chart"), I.dt == 64 && (n["!type"] = "macro"), ge = [], $e = [], de.arrayf = S = [], ke = [], Pe = [], Qe = false, B = { Hidden: (i[R] || { hs: 0 }).hs, name: u };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][I.r] || [])[I.c] : n[mr(I.c) + br(I.r)]) && ++I.c, E = { ixfe: I.ixfe, XF: X[I.ixfe] || {}, v: I.val, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r);
          break;
        case 5:
        case 517:
          E = { ixfe: I.ixfe, XF: X[I.ixfe], v: I.val, t: I.t }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r);
          break;
        case 638:
          E = { ixfe: I.ixfe, XF: X[I.ixfe], v: I.rknum, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r);
          break;
        case 189:
          for (var ar = I.c; ar <= I.C; ++ar) {
            var rr = I.rkrec[ar - I.c][0];
            E = { ixfe: rr, XF: X[rr], v: I.rkrec[ar - I.c][1], t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: ar, r: I.r }, E, r);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (I.val == "String") {
              f = I;
              break;
            }
            if (E = Ws(I.val, I.cell.ixfe, I.tt), E.XF = X[E.ixfe], r.cellFormula) {
              var fr = I.formula;
              if (fr && fr[0] && fr[0][0] && fr[0][0][0] == "PtgExp") {
                var Cr = fr[0][0][1][0], kr = fr[0][0][1][1], Xr = wr({ r: Cr, c: kr });
                g[Xr] ? E.f = "" + It(I.formula, s, I.cell, he, de) : E.F = ((r.dense ? (n["!data"][Cr] || [])[kr] : n[Xr]) || {}).F;
              } else E.f = "" + It(I.formula, s, I.cell, he, de);
            }
            Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te(I.cell, E, r), f = I;
          }
          break;
        case 7:
        case 519:
          if (f) f.val = I, E = Ws(I, f.cell.ixfe, "s"), E.XF = X[E.ixfe], r.cellFormula && (E.f = "" + It(f.formula, s, f.cell, he, de)), Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te(f.cell, E, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            S.push(I);
            var ze = wr(I[0].s);
            if (x = r.dense ? (n["!data"][I[0].s.r] || [])[I[0].s.c] : n[ze], r.cellFormula && x) {
              if (!f || !ze || !x) break;
              x.f = "" + It(I[1], s, I[0], he, de), x.F = dr(I[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (d) {
              if (!f) break;
              g[wr(f.cell)] = I[0], x = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[wr(f.cell)], (x || {}).f = "" + It(I[0], s, v, he, de);
            }
          }
          break;
        case 253:
          E = Ws(c[I.isst].t, I.ixfe, "s"), c[I.isst].h && (E.h = c[I.isst].h), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r);
          break;
        case 513:
          r.sheetStubs && (E = { ixfe: I.ixfe, XF: X[I.ixfe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r));
          break;
        case 190:
          if (r.sheetStubs) for (var Er = I.c; Er <= I.C; ++Er) {
            var Oe = I.ixfe[Er - I.c];
            E = { ixfe: Oe, XF: X[Oe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: Er, r: I.r }, E, r);
          }
          break;
        case 214:
        case 516:
        case 4:
          E = Ws(I.val, I.ixfe, "s"), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Ta(E, r, t.opts.Date1904), te({ c: I.c, r: I.r }, E, r);
          break;
        case 0:
        case 512:
          Le === 1 && (s = I);
          break;
        case 252:
          c = I;
          break;
        case 1054:
          if (de.biff >= 3 && de.biff <= 4) {
            ye[Te++] = I[1];
            for (var Zr = 0; Zr < Te + 163 && nr[Zr] != I[1]; ++Zr) ;
            Zr >= 163 && sn(I[1], Te + 163);
          } else sn(I[1], I[0]);
          break;
        case 30:
          {
            ye[Te++] = I;
            for (var $r = 0; $r < Te + 163 && nr[$r] != I; ++$r) ;
            $r >= 163 && sn(I, Te + 163);
          }
          break;
        case 229:
          ge = ge.concat(I);
          break;
        case 93:
          $e[I.cmo[0]] = de.lastobj = I;
          break;
        case 438:
          de.lastobj.TxO = I;
          break;
        case 127:
          de.lastobj.ImData = I;
          break;
        case 440:
          for (m = I[0].s.r; m <= I[0].e.r; ++m) for (y = I[0].s.c; y <= I[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[wr({ c: y, r: m })], x && (x.l = I[1]);
          break;
        case 2048:
          for (m = I[0].s.r; m <= I[0].e.r; ++m) for (y = I[0].s.c; y <= I[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[wr({ c: y, r: m })], x && x.l && (x.l.Tooltip = I[1]);
          break;
        case 28:
          {
            if (x = r.dense ? (n["!data"][I[0].r] || [])[I[0].c] : n[wr(I[0])], x || (r.dense ? (n["!data"][I[0].r] || (n["!data"][I[0].r] = []), x = n["!data"][I[0].r][I[0].c] = { t: "z" }) : x = n[wr(I[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, I[0].r), s.s.r = Math.min(s.s.r, I[0].r), s.e.c = Math.max(s.e.c, I[0].c), s.s.c = Math.min(s.s.c, I[0].c)), x.c || (x.c = []), de.biff <= 5 && de.biff >= 2) _ = { a: "SheetJ5", t: I[1] };
            else {
              var Mr = $e[I[2]];
              _ = { a: I[1], t: Mr.TxO.t }, I[3] != null && !(I[3] & 2) && (x.c.hidden = true);
            }
            x.c.push(_);
          }
          break;
        case 2173:
          _g(X[I.ixfe], I.ext);
          break;
        case 125:
          {
            if (!de.cellStyles) break;
            for (; I.e >= I.s; ) ke[I.e--] = { width: I.w / 256, level: I.level || 0, hidden: !!(I.flags & 1) }, Qe || (Qe = true, io(I.w / 256)), on(ke[I.e + 1]);
          }
          break;
        case 520:
          {
            var yt = {};
            I.level != null && (Pe[I.r] = yt, yt.level = I.level), I.hidden && (Pe[I.r] = yt, yt.hidden = true), I.hpt && (Pe[I.r] = yt, yt.hpt = I.hpt, yt.hpx = si(I.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || Fn(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[W]] = I;
          break;
        case 161:
          n["!margins"] || Fn(n["!margins"] = {}), n["!margins"].header = I.header, n["!margins"].footer = I.footer;
          break;
        case 574:
          I.RTL && (F.Views[0].RTL = true);
          break;
        case 146:
          U = I;
          break;
        case 2198:
          Ve = I;
          break;
        case 140:
          A = I;
          break;
        case 442:
          u ? B.CodeName = I || B.name : F.WBProps.CodeName = I || "ThisWorkbook";
          break;
      }
    } else V || console.error("Missing Info for XLS Record 0x" + W.toString(16)), e.l += z;
  }
  return t.SheetNames = jr(i).sort(function(dt, Ke) {
    return Number(dt) - Number(Ke);
  }).map(function(dt) {
    return i[dt].name;
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && h["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = h)) : t.Preamble = h, t.Sheets && je.forEach(function(dt, Ke) {
    t.Sheets[t.SheetNames[Ke]]["!autofilter"] = dt;
  }), t.Strings = c, t.SSF = Hr(nr), de.enc && (t.Encryption = de.enc), Ve && (t.Themes = Ve), t.Metadata = {}, A !== void 0 && (t.Metadata.Country = A), he.names.length > 0 && (F.Names = he.names), t.Workbook = F, t;
}
var Li = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function Uk(e, r, t) {
  var a = ir.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = Nc(a, Ef, Li.DSI);
    for (var i in n) r[i] = n[i];
  } catch (u) {
    if (t.WTF) throw u;
  }
  var s = ir.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = Nc(s, Tf, Li.SI);
    for (var c in f) r[c] == null && (r[c] = f[c]);
  } catch (u) {
    if (t.WTF) throw u;
  }
  r.HeadingPairs && r.TitlesOfParts && (dl(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function Wk(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = lc(Ef, "n"), c = lc(Tf, "n");
  if (e.Props) for (s = jr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops) for (s = jr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var u = [];
  for (i = 0; i < n.length; ++i) gl.indexOf(n[i][0]) > -1 || hl.indexOf(n[i][0]) > -1 || n[i][1] != null && u.push(n[i]);
  a.length && ir.utils.cfb_add(r, "/SummaryInformation", Rc(a, Li.SI, c, Tf)), (t.length || u.length) && ir.utils.cfb_add(r, "/DocumentSummaryInformation", Rc(t, Li.DSI, f, Ef, u.length ? u : null, Li.UDI));
}
function uh(e, r) {
  r || (r = {}), lo(r), Bf(), r.codepage && Pf(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (ir.find(e, "/encryption")) throw new Error("File is password-protected");
    t = ir.find(e, "!CompObj"), a = ir.find(e, "/Workbook") || ir.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = Ht(Qt(e));
        break;
      case "binary":
        e = Ht(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    ct(e, 0), a = { content: e };
  }
  var n, i;
  if (t && Pk(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = vr ? "buffer" : "array";
    if (a && a.content) n = Mk(a.content, r);
    else if ((i = ir.find(e, "PerfectOffice_MAIN")) && i.content) n = Sn.to_workbook(i.content, (r.type = s, r));
    else if ((i = ir.find(e, "NativeContent_MAIN")) && i.content) n = Sn.to_workbook(i.content, (r.type = s, r));
    else throw (i = ir.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && ir.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = $g(e));
  }
  var f = {};
  return e.FullPaths && Uk(e, f, r), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function Hk(e, r) {
  var t = r || {}, a = ir.utils.cfb_new({ root: "R" }), n = "/Workbook";
  switch (t.bookType || "xls") {
    case "xls":
      t.bookType = "biff8";
    case "xla":
      t.bookType || (t.bookType = "xla");
    case "biff8":
      n = "/Workbook", t.biff = 8;
      break;
    case "biff5":
      n = "/Book", t.biff = 5;
      break;
    default:
      throw new Error("invalid type " + t.bookType + " for XLS CFB");
  }
  return ir.utils.cfb_add(a, n, hh(e, t)), t.biff == 8 && (e.Props || e.Custprops) && Wk(e, a), t.biff == 8 && e.vbaraw && qg(a, ir.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Zi = { 0: { f: xw }, 1: { f: kw }, 2: { f: Uw }, 3: { f: Dw }, 4: { f: bw }, 5: { f: Bw }, 6: { f: Kw }, 7: { f: Ow }, 8: { f: Zw }, 9: { f: Yw }, 10: { f: $w }, 11: { f: qw }, 12: { f: Tw }, 13: { f: Hw }, 14: { f: Iw }, 15: { f: Aw }, 16: { f: ah }, 17: { f: Gw }, 18: { f: Rw }, 19: { f: Yf }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: zy }, 40: {}, 42: {}, 43: { f: Xm }, 44: { f: Hm }, 45: { f: Gm }, 46: { f: $m }, 47: { f: zm }, 48: {}, 49: { f: nx }, 50: {}, 51: { f: kg }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: Il }, 62: { f: Xw }, 63: { f: Og }, 64: { f: dy }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Lt, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: cy }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: ww }, 148: { f: mw, p: 16 }, 151: { f: ay }, 152: {}, 153: { f: Ky }, 154: {}, 155: {}, 156: { f: Vy }, 157: {}, 158: {}, 159: { T: 1, f: em }, 160: { T: -1 }, 161: { T: 1, f: Mn }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: Jw }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: wg }, 336: { T: -1 }, 337: { f: Sg, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: kf }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: Dl }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: ny }, 427: { f: iy }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: fy }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: _w }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: ry }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: kf }, 551: { f: h0 }, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: Kg }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: Vg }, 636: { T: -1 }, 637: { f: ox }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: Dy }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: xy }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, Cf = { 6: { f: ff }, 10: { f: tn }, 12: { f: Yr }, 13: { f: Yr }, 14: { f: Qr }, 15: { f: Qr }, 16: { f: Nt }, 17: { f: Qr }, 18: { f: Qr }, 19: { f: Yr }, 20: { f: Uc }, 21: { f: Uc }, 23: { f: Dl }, 24: { f: Hc }, 25: { f: Qr }, 26: {}, 27: {}, 28: { f: ov }, 29: {}, 34: { f: Qr }, 35: { f: Wc }, 38: { f: Nt }, 39: { f: Nt }, 40: { f: Nt }, 41: { f: Nt }, 42: { f: Qr }, 43: { f: Qr }, 47: { f: ym }, 49: { f: Dp }, 51: { f: Yr }, 60: {}, 61: { f: Sp }, 64: { f: Qr }, 65: { f: Cp }, 66: { f: Yr }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Yr }, 89: {}, 90: {}, 91: {}, 92: { f: xp }, 93: { f: lv }, 94: {}, 95: { f: Qr }, 96: {}, 97: {}, 99: { f: Qr }, 125: { f: Il }, 128: { f: Jp }, 129: { f: vp }, 130: { f: Yr }, 131: { f: Qr }, 132: { f: Qr }, 133: { f: mp }, 134: {}, 140: { f: _v }, 141: { f: Yr }, 144: {}, 146: { f: kv }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Yr }, 157: {}, 158: {}, 160: { f: Cv }, 161: { f: Sv }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: Xp }, 190: { f: Kp }, 193: { f: tn }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: Qr }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Yr }, 220: {}, 221: { f: Qr }, 222: {}, 224: { f: Gp }, 225: { f: dp }, 226: { f: tn }, 227: {}, 229: { f: cv }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: _p }, 253: { f: Op }, 255: { f: yp }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: _l }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: Qr }, 353: { f: tn }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: av }, 431: { f: Qr }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: xv }, 439: { f: Qr }, 440: { f: pv }, 441: {}, 442: { f: is }, 443: {}, 444: { f: Yr }, 445: {}, 446: {}, 448: { f: tn }, 449: { f: Tp, r: 2 }, 450: { f: tn }, 512: { f: Lc }, 513: { f: Av }, 515: { f: rv }, 516: { f: Rp }, 517: { f: ev }, 519: { f: Dv }, 520: { f: kp }, 523: {}, 545: { f: Xc }, 549: { f: Bc }, 566: {}, 574: { f: Fp }, 638: { f: Vp }, 659: {}, 1048: {}, 1054: { f: Bp }, 1084: {}, 1212: { f: iv }, 2048: { f: mv }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: Bs }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: tn }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Ev, r: 12 }, 2173: { f: gg, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: Qr, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: nv, r: 12 }, 2197: {}, 2198: { f: hg, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: sv, r: 12 }, 2203: { f: tn }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: Ep }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Yr }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: bv }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: yv }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: Lc }, 1: {}, 2: { f: Pv }, 3: { f: Nv }, 4: { f: Ov }, 5: { f: Mv }, 7: { f: Lv }, 8: {}, 9: { f: Bs }, 11: {}, 22: { f: Yr }, 30: { f: Mp }, 31: {}, 32: {}, 33: { f: Xc }, 36: {}, 37: { f: Bc }, 50: { f: Uv }, 62: {}, 52: {}, 67: { f: zp }, 68: { f: Yr }, 69: {}, 86: {}, 126: {}, 127: { f: Iv }, 135: {}, 136: {}, 137: {}, 143: { f: Hv }, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: Wv }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: ff }, 521: { f: Bs }, 536: { f: Hc }, 547: { f: Wc }, 561: {}, 579: { f: Yp }, 1030: { f: ff }, 1033: { f: Bs }, 1091: { f: Zp }, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 101: {}, 102: {}, 105: {}, 106: {}, 107: {}, 109: {}, 112: {}, 114: {}, 29282: {} };
function _e(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && zf(t) && e.push(t);
  }
}
function Vk(e, r, t, a) {
  var n = (t || []).length || 0;
  if (n <= 8224) return _e(e, r, t, n);
  var i = r;
  if (!isNaN(i)) {
    for (var s = t.parts || [], f = 0, c = 0, u = 0; u + (s[f] || 8224) <= 8224; ) u += s[f] || 8224, f++;
    var h = e.next(4);
    for (h.write_shift(2, i), h.write_shift(2, u), e.push(t.slice(c, c + u)), c += u; c < n; ) {
      for (h = e.next(4), h.write_shift(2, 60), u = 0; u + (s[f] || 8224) <= 8224; ) u += s[f] || 8224, f++;
      h.write_shift(2, u), e.push(t.slice(c, c + u)), c += u;
    }
  }
}
function hf(e, r, t, a) {
  var n = oe(9);
  return ss(n, e, r), yl(t, a || "b", n), n;
}
function Xk(e, r, t) {
  var a = oe(8 + 2 * t.length);
  return ss(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function lh(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return _e(e, 28, af(a, t[1], t[2]));
    _e(e, 28, af(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) _e(e, 28, af(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
  });
}
function Kk(e, r, t, a, n, i) {
  var s = 0;
  r.z != null && (s = n._BIFF2FmtTable.indexOf(r.z), s == -1 && (n._BIFF2FmtTable.push(r.z), s = n._BIFF2FmtTable.length - 1));
  var f = 0;
  if (r.z != null) {
    for (; f < n.cellXfs.length && n.cellXfs[f].numFmtId != s; ++f) ;
    f == n.cellXfs.length && n.cellXfs.push({ numFmtId: s });
  }
  if (r.v != null) switch (r.t) {
    case "d":
    case "n":
      var c = r.t == "d" ? qr(zr(r.v, i), i) : r.v;
      n.biff == 2 && c == (c | 0) && c >= 0 && c < 65536 ? _e(e, 2, Bv(t, a, c, f, s)) : isNaN(c) ? _e(e, 5, hf(t, a, 36, "e")) : isFinite(c) ? _e(e, 3, Rv(t, a, c, f, s)) : _e(e, 5, hf(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      _e(e, 5, hf(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      _e(e, 4, Xk(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  _e(e, 1, ss(null, t, a));
}
function jk(e, r, t, a, n) {
  var i = r["!data"] != null, s = Dr(r["!ref"] || "A1"), f = "", c = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var u = (((n || {}).Workbook || {}).WBProps || {}).date1904, h = [], v = [], d = s.s.c; d <= s.e.c; ++d) c[d] = mr(d);
  for (var x = s.s.r; x <= s.e.r; ++x) for (i && (h = r["!data"][x] || []), f = br(x), d = s.s.c; d <= s.e.c; ++d) {
    var _ = i ? h[d] : r[c[d] + f];
    _ && (Kk(e, _, x, d, a, u), _.c && v.push([_.c, x, d]));
  }
  lh(e, v);
}
function Gk(e, r) {
  for (var t = r || {}, a = Pt(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  _e(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, to(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && _e(a, 34, Dt(true)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = Pt();
  return jk(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? _e(a, 30, Up(f)) : _e(a, 1054, Wp(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        _e(a, 67, $p(f));
        break;
      case 3:
        _e(a, 579, Cl(f));
        break;
      case 4:
        _e(a, 1091, qp(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), _e(a, 10), a.end();
}
var xa = 1, sa = [];
function zk() {
  var e = oe(82 + 8 * sa.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * sa.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * sa.length);
    {
      e.write_shift(4, xa), e.write_shift(4, sa.length + 1);
      for (var r = 0, t = 0; t < sa.length; ++t) r += sa[t] && sa[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, sa.length);
    }
    sa.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function $k(e, r) {
  var t = [], a = 0, n = Pt(), i = xa, s;
  r.forEach(function(c, u) {
    var h = "", v = c[0].map(function(E) {
      return E.a && !h && (h = E.a), E.t;
    }).join("");
    ++xa;
    {
      var d = oe(150);
      d.write_shift(2, 15), d.write_shift(2, 61444), d.write_shift(4, 150), d.write_shift(2, 3234), d.write_shift(2, 61450), d.write_shift(4, 8), d.write_shift(4, xa), d.write_shift(4, 2560), d.write_shift(2, 227), d.write_shift(2, 61451), d.write_shift(4, 84), d.write_shift(2, 128), d.write_shift(4, 0), d.write_shift(2, 139), d.write_shift(4, 2), d.write_shift(2, 191), d.write_shift(4, 524296), d.write_shift(2, 344), d.l += 4, d.write_shift(2, 385), d.write_shift(4, 134217808), d.write_shift(2, 387), d.write_shift(4, 134217808), d.write_shift(2, 389), d.write_shift(4, 268435700), d.write_shift(2, 447), d.write_shift(4, 1048592), d.write_shift(2, 448), d.write_shift(4, 134217809), d.write_shift(2, 451), d.write_shift(4, 268435700), d.write_shift(2, 513), d.write_shift(4, 134217809), d.write_shift(2, 515), d.write_shift(4, 268435700), d.write_shift(2, 575), d.write_shift(4, 196609), d.write_shift(2, 959), d.write_shift(4, 131072 | (c[0].hidden ? 2 : 0)), d.l += 2, d.write_shift(2, 61456), d.write_shift(4, 18), d.write_shift(2, 3), d.write_shift(2, c[2] + 2), d.l += 2, d.write_shift(2, c[1] + 1), d.l += 2, d.write_shift(2, c[2] + 4), d.l += 2, d.write_shift(2, c[1] + 5), d.l += 2, d.l += 2, d.write_shift(2, 61457), d.l += 4, d.l = 150, u == 0 ? s = d : _e(n, 236, d);
    }
    a += 150;
    {
      var x = oe(52);
      x.write_shift(2, 21), x.write_shift(2, 18), x.write_shift(2, 25), x.write_shift(2, xa), x.write_shift(2, 0), x.l = 22, x.write_shift(2, 13), x.write_shift(2, 22), x.write_shift(4, 1651663474), x.write_shift(4, 2503426821), x.write_shift(4, 2150634280), x.write_shift(4, 1768515844 + xa * 256), x.write_shift(2, 0), x.write_shift(4, 0), x.l += 4, _e(n, 93, x);
    }
    {
      var _ = oe(8);
      _.l += 2, _.write_shift(2, 61453), _.l += 4, _e(n, 236, _);
    }
    a += 8;
    {
      var y = oe(18);
      y.write_shift(2, 18), y.l += 8, y.write_shift(2, v.length), y.write_shift(2, 16), y.l += 4, _e(n, 438, y);
      {
        var m = oe(1 + v.length);
        m.write_shift(1, 0), m.write_shift(v.length, v, "sbcs"), _e(n, 60, m);
      }
      {
        var g = oe(16);
        g.l += 8, g.write_shift(2, v.length), g.l += 6, _e(n, 60, g);
      }
    }
    {
      var S = oe(12 + h.length);
      S.write_shift(2, c[1]), S.write_shift(2, c[2]), S.write_shift(2, 0 | (c[0].hidden ? 0 : 2)), S.write_shift(2, xa), S.write_shift(2, h.length), S.write_shift(1, 0), S.write_shift(h.length, h, "sbcs"), S.l++, t.push(S);
    }
  });
  {
    var f = oe(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, xa), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), _e(e, 236, s ? rt([f, s]) : f);
  }
  e.push(n.end()), t.forEach(function(c) {
    _e(e, 28, c);
  }), sa.push([i, r.length + 1, xa]), ++xa;
}
function qk(e, r, t) {
  _e(e, 49, Ip({ sz: 12, name: "Arial" }, t));
}
function Yk(e, r, t) {
  r && [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n) r[n] != null && _e(e, 1054, Lp(n, r[n], t));
  });
}
function Zk(e, r) {
  var t = oe(19);
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), _e(e, 2151, t), t = oe(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), bl(Dr(r["!ref"] || "A1"), t), t.write_shift(4, 4), _e(e, 2152, t);
}
function Jk(e, r) {
  for (var t = 0; t < 16; ++t) _e(e, 224, Mc({ numFmtId: 0, style: true }, 0, r));
  r.cellXfs.forEach(function(a) {
    _e(e, 224, Mc(a, 0, r));
  });
}
function Qk(e, r) {
  for (var t = 0; t < r["!links"].length; ++t) {
    var a = r["!links"][t];
    _e(e, 440, vv(a)), a[1].Tooltip && _e(e, 2048, gv(a));
  }
  delete r["!links"];
}
function e4(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function(a, n) {
      ++t <= 256 && a && _e(e, 125, Tv(_0(n, a), n));
    });
  }
}
function r4(e, r, t, a, n, i) {
  var s = 16 + xn(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    _e(e, 513, Nn(t, a, s));
    return;
  }
  if (r.bf) _e(e, 6, y_(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? qr(zr(r.v, i), i) : r.v;
      isNaN(f) ? _e(e, 517, tf(t, a, 36, s, n, "e")) : isFinite(f) ? _e(e, 515, tv(t, a, f, s)) : _e(e, 517, tf(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      _e(e, 517, tf(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var c = oo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        _e(e, 253, Np(t, a, c, s));
      } else _e(e, 516, Pp(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      _e(e, 513, Nn(t, a, s));
  }
}
function t4(e, r, t) {
  var a = Pt(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, c = i["!data"] != null, u = r.biff == 8, h = "", v = [], d = Dr(i["!ref"] || "A1"), x = u ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= x) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + x);
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.r, x - 1);
  }
  _e(a, 2057, to(t, 16, r)), _e(a, 13, fa(1)), _e(a, 12, fa(100)), _e(a, 15, Dt(true)), _e(a, 17, Dt(false)), _e(a, 16, In(1e-3)), _e(a, 95, Dt(true)), _e(a, 42, Dt(false)), _e(a, 43, Dt(false)), _e(a, 130, fa(1)), _e(a, 128, Qp()), _e(a, 131, Dt(false)), _e(a, 132, Dt(false)), u && e4(a, i["!cols"]), _e(a, 512, Hp(d, r));
  var _ = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  u && (i["!links"] = []);
  for (var y = d.s.c; y <= d.e.c; ++y) v[y] = mr(y);
  for (var m = [], g = [], S = d.s.r; S <= d.e.r; ++S) for (c && (g = i["!data"][S] || []), h = br(S), y = d.s.c; y <= d.e.c; ++y) {
    var E = c ? g[y] : i[v[y] + h];
    E && (r4(a, E, S, y, r, _), u && E.l && i["!links"].push([v[y] + h, E.l]), E.c && m.push([E.c, S, y]));
  }
  var A = f.CodeName || f.name || n;
  return u ? $k(a, m) : lh(a, m), u && _e(a, 574, Ap((s.Views || [])[0])), u && (i["!merges"] || []).length && _e(a, 229, uv(i["!merges"])), u && Qk(a, i), _e(a, 442, kl(A)), u && Zk(a, i), _e(a, 10), a.end();
}
function a4(e, r, t) {
  var a = Pt(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = t.biff == 8, c = t.biff == 5;
  if (_e(a, 2057, to(e, 5, t)), t.bookType == "xla" && _e(a, 135), _e(a, 225, f ? fa(1200) : null), _e(a, 193, $x(2)), c && _e(a, 191), c && _e(a, 192), _e(a, 226), _e(a, 92, pp("SheetJS", t)), _e(a, 66, fa(f ? 1200 : 1252)), f && _e(a, 353, fa(0)), f && _e(a, 448), _e(a, 317, Fv(e.SheetNames.length)), f && e.vbaraw && _e(a, 211), f && e.vbaraw) {
    var u = s.CodeName || "ThisWorkbook";
    _e(a, 442, kl(u));
  }
  _e(a, 156, fa(17)), _e(a, 25, Dt(false)), _e(a, 18, Dt(false)), _e(a, 19, fa(0)), f && _e(a, 431, Dt(false)), f && _e(a, 444, fa(0)), _e(a, 61, bp()), _e(a, 64, Dt(false)), _e(a, 141, fa(0)), _e(a, 34, Dt(Py(e) == "true")), _e(a, 14, Dt(true)), f && _e(a, 439, Dt(false)), _e(a, 218, fa(0)), qk(a, e, t), Yk(a, e.SSF, t), Jk(a, t), f && _e(a, 352, Dt(false));
  var h = a.end(), v = Pt();
  f && _e(v, 140, wv()), f && sa.length && _e(v, 235, zk()), f && t.Strings && Vk(v, 252, wp(t.Strings)), _e(v, 10);
  var d = v.end(), x = Pt(), _ = 0, y = 0;
  for (y = 0; y < e.SheetNames.length; ++y) _ += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[y].length;
  var m = h.length + _ + d.length;
  for (y = 0; y < e.SheetNames.length; ++y) {
    var g = i[y] || {};
    _e(x, 133, gp({ pos: m, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[y] }, t)), m += r[y].length;
  }
  var S = x.end();
  if (_ != S.length) throw new Error("BS8 " + _ + " != " + S.length);
  var E = [];
  return h.length && E.push(h), S.length && E.push(S), d.length && E.push(d), rt(E);
}
function n4(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (fi(), f0(e.SSF), t.revssf = c0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), xa = 1, sa = [], t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, ho(t), t.cellXfs = [], xn(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = t4(n, t, e);
  return a.unshift(a4(e, a, t)), rt(a);
}
function hh(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var a = e.Sheets[e.SheetNames[t]];
    if (!(!a || !a["!ref"])) {
      var n = wt(a["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond column IV (255).  Data may be lost."), n.e.r > 65535 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond row 65536.  Data may be lost.");
    }
  }
  var i = r || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return n4(e, r);
    case 4:
    case 3:
    case 2:
      return Gk(e, r);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function tu(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : L1, n = {};
  a && (n["!data"] = []), e = as(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, c = s && s.index || e.length, u = Ad(e.slice(f, c), /(:?<tr[^<>]*>)/i, "<tr>"), h = -1, v = 0, d = 0, x = 0, _ = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, y = [];
  for (f = 0; f < u.length; ++f) {
    var m = u[f].trim(), g = m.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if (++h, t.sheetRows && t.sheetRows <= h) {
        --h;
        break;
      }
      v = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var S = m.split(/<\/t[dh]>/i);
      for (c = 0; c < S.length; ++c) {
        var E = S[c].trim();
        if (E.match(/<t[dh]/i)) {
          for (var A = E, X = 0; A.charAt(0) == "<" && (X = A.indexOf(">")) > -1; ) A = A.slice(X + 1);
          for (var U = 0; U < y.length; ++U) {
            var F = y[U];
            F.s.c == v && F.s.r < h && h <= F.e.r && (v = F.e.c + 1, U = -1);
          }
          var B = Ye(E.slice(0, E.indexOf(">")));
          x = B.colspan ? +B.colspan : 1, ((d = +B.rowspan) > 1 || x > 1) && y.push({ s: { r: h, c: v }, e: { r: h + (d || 1) - 1, c: v + x - 1 } });
          var L = B.t || B["data-t"] || "";
          if (!A.length) {
            v += x;
            continue;
          }
          if (A = Hu(A), _.s.r > h && (_.s.r = h), _.e.r < h && (_.e.r = h), _.s.c > v && (_.s.c = v), _.e.c < v && (_.e.c = v), !A.length) {
            v += x;
            continue;
          }
          var K = { t: "s", v: A };
          t.raw || !A.trim().length || L == "s" || (A === "TRUE" ? K = { t: "b", v: true } : A === "FALSE" ? K = { t: "b", v: false } : isNaN(Jt(A)) ? isNaN(Hi(A).getDate()) ? A.charCodeAt(0) == 35 && _t[A] != null && (K.t = "e", K.w = A, K.v = _t[A]) : (K = { t: "d", v: zr(A) }, t.UTC === false && (K.v = Dn(K.v)), t.cellDates || (K = { t: "n", v: qr(K.v) }), K.z = t.dateNF || nr[14]) : K = { t: "n", v: Jt(A) }), K.cellText !== false && (K.w = A), a ? (n["!data"][h] || (n["!data"][h] = []), n["!data"][h][v] = K) : n[wr({ r: h, c: v })] = K, v += x;
        }
      }
    }
  }
  return n["!ref"] = dr(_), y.length && (n["!merges"] = y), n;
}
function i4(e, r, t, a) {
  for (var n = e["!merges"] || [], i = [], s = {}, f = e["!data"] != null, c = r.s.c; c <= r.e.c; ++c) {
    for (var u = 0, h = 0, v = 0; v < n.length; ++v) if (!(n[v].s.r > t || n[v].s.c > c) && !(n[v].e.r < t || n[v].e.c < c)) {
      if (n[v].s.r < t || n[v].s.c < c) {
        u = -1;
        break;
      }
      u = n[v].e.r - n[v].s.r + 1, h = n[v].e.c - n[v].s.c + 1;
      break;
    }
    if (!(u < 0)) {
      var d = mr(c) + br(t), x = f ? (e["!data"][t] || [])[c] : e[d];
      x && x.t == "n" && x.v != null && !isFinite(x.v) && (isNaN(x.v) ? x = { t: "e", v: 36, w: ht[36] } : x = { t: "e", v: 7, w: ht[7] });
      var _ = x && x.v != null && (x.h || Ai(x.w || (ja(x), x.w) || "")) || "";
      s = {}, u > 1 && (s.rowspan = u), h > 1 && (s.colspan = h), a.editable ? _ = '<span contenteditable="true">' + _ + "</span>" : x && (s["data-t"] = x && x.t || "z", x.v != null && (s["data-v"] = Ai(x.v instanceof Date ? x.v.toISOString() : x.v)), x.z != null && (s["data-z"] = x.z), x.l && (x.l.Target || "#").charAt(0) != "#" && (_ = '<a href="' + Ai(x.l.Target) + '">' + _ + "</a>")), s.id = (a.id || "sjs") + "-" + d, i.push(Ae("td", _, s));
    }
  }
  var y = "<tr>";
  return y + i.join("") + "</tr>";
}
var s4 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', f4 = "</body></html>";
function o4(e, r) {
  var t = Id(e, "table");
  if (!t || t.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) {
    var a = dn(tu(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = vo();
  return t.forEach(function(i, s) {
    us(n, tu(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function c4(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function dh(e, r) {
  var t = r || {}, a = t.header != null ? t.header : s4, n = t.footer != null ? t.footer : f4, i = [a], s = wt(e["!ref"] || "A1");
  if (i.push(c4(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(i4(e, s, f, t));
  return i.push("</table>" + n), i.join("");
}
function xh(e, r, t) {
  var a = r.rows;
  if (!a) throw "Unsupported origin when " + r.tagName + " is not a TABLE";
  var n = t || {}, i = e["!data"] != null, s = 0, f = 0;
  if (n.origin != null) if (typeof n.origin == "number") s = n.origin;
  else {
    var c = typeof n.origin == "string" ? Br(n.origin) : n.origin;
    s = c.r, f = c.c;
  }
  var u = Math.min(n.sheetRows || 1e7, a.length), h = { s: { r: 0, c: 0 }, e: { r: s, c: f } };
  if (e["!ref"]) {
    var v = wt(e["!ref"]);
    h.s.r = Math.min(h.s.r, v.s.r), h.s.c = Math.min(h.s.c, v.s.c), h.e.r = Math.max(h.e.r, v.e.r), h.e.c = Math.max(h.e.c, v.e.c), s == -1 && (h.e.r = s = v.e.r + 1);
  }
  var d = [], x = 0, _ = e["!rows"] || (e["!rows"] = []), y = 0, m = 0, g = 0, S = 0, E = 0, A = 0;
  for (e["!cols"] || (e["!cols"] = []); y < a.length && m < u; ++y) {
    var X = a[y];
    if (au(X)) {
      if (n.display) continue;
      _[m] = { hidden: true };
    }
    var U = X.cells;
    for (g = S = 0; g < U.length; ++g) {
      var F = U[g];
      if (!(n.display && au(F))) {
        var B = F.hasAttribute("data-v") ? F.getAttribute("data-v") : F.hasAttribute("v") ? F.getAttribute("v") : Hu(F.innerHTML), L = F.getAttribute("data-z") || F.getAttribute("z");
        for (x = 0; x < d.length; ++x) {
          var K = d[x];
          K.s.c == S + f && K.s.r < m + s && m + s <= K.e.r && (S = K.e.c + 1 - f, x = -1);
        }
        A = +F.getAttribute("colspan") || 1, ((E = +F.getAttribute("rowspan") || 1) > 1 || A > 1) && d.push({ s: { r: m + s, c: S + f }, e: { r: m + s + (E || 1) - 1, c: S + f + (A || 1) - 1 } });
        var G = { t: "s", v: B }, te = F.getAttribute("data-t") || F.getAttribute("t") || "";
        B != null && (B.length == 0 ? G.t = te || "z" : n.raw || B.trim().length == 0 || te == "s" || (te == "e" && ht[+B] ? G = { t: "e", v: +B, w: ht[+B] } : B === "TRUE" ? G = { t: "b", v: true } : B === "FALSE" ? G = { t: "b", v: false } : isNaN(Jt(B)) ? isNaN(Hi(B).getDate()) ? B.charCodeAt(0) == 35 && _t[B] != null && (G = { t: "e", v: _t[B], w: B }) : (G = { t: "d", v: zr(B) }, n.UTC && (G.v = u0(G.v)), n.cellDates || (G = { t: "n", v: qr(G.v) }), G.z = n.dateNF || nr[14]) : G = { t: "n", v: Jt(B) })), G.z === void 0 && L != null && (G.z = L);
        var de = "", Ve = F.getElementsByTagName("A");
        if (Ve && Ve.length) for (var ge = 0; ge < Ve.length && !(Ve[ge].hasAttribute("href") && (de = Ve[ge].getAttribute("href"), de.charAt(0) != "#")); ++ge) ;
        de && de.charAt(0) != "#" && de.slice(0, 11).toLowerCase() != "javascript:" && (G.l = { Target: de }), i ? (e["!data"][m + s] || (e["!data"][m + s] = []), e["!data"][m + s][S + f] = G) : e[wr({ c: S + f, r: m + s })] = G, h.e.c < S + f && (h.e.c = S + f), S += A;
      }
    }
    ++m;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), h.e.r = Math.max(h.e.r, m - 1 + s), e["!ref"] = dr(h), m >= u && (e["!fullref"] = dr((h.e.r = a.length - y + m - 1 + s, h))), e;
}
function ph(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), xh(a, e, r);
}
function u4(e, r) {
  var t = dn(ph(e, r), r);
  return t;
}
function au(e) {
  var r = "", t = l4(e);
  return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), r === "none";
}
function l4(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function h4(e) {
  var r = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), t = Fr(r.replace(/<[^<>]*>/g, ""));
  return [t];
}
function vh(e, r, t) {
  var a = t || {}, n = l0(e);
  ot.lastIndex = 0, n = Wf(as(n, "<!--", "-->"));
  for (var i, s, f = "", c = "", u, h = 0, v = -1, d = ""; i = ot.exec(n); ) switch (i[3] = i[3].replace(/_[\s\S]*$/, "")) {
    case "number-style":
    case "currency-style":
    case "percentage-style":
    case "date-style":
    case "time-style":
    case "text-style":
      i[1] === "/" ? (s["truncate-on-overflow"] == "false" && (f.match(/h/) ? f = f.replace(/h+/, "[$&]") : f.match(/m/) ? f = f.replace(/m+/, "[$&]") : f.match(/s/) && (f = f.replace(/s+/, "[$&]"))), a[s.name] = f, f = "") : i[0].charAt(i[0].length - 2) !== "/" && (f = "", s = Ye(i[0], false));
      break;
    case "boolean-style":
      i[1] === "/" ? (a[s.name] = "General", f = "") : i[0].charAt(i[0].length - 2) !== "/" && (f = "", s = Ye(i[0], false));
      break;
    case "boolean":
      f += "General";
      break;
    case "text":
      i[1] === "/" ? (d = n.slice(v, ot.lastIndex - i[0].length), d == "%" && s[0] == "<number:percentage-style" ? f += "%" : f += '"' + d.replace(/"/g, '""') + '"') : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex);
      break;
    case "day":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "d";
          break;
        case "long":
          f += "dd";
          break;
        default:
          f += "dd";
          break;
      }
      break;
    case "day-of-week":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "ddd";
          break;
        case "long":
          f += "dddd";
          break;
        default:
          f += "ddd";
          break;
      }
      break;
    case "era":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "ee";
          break;
        case "long":
          f += "eeee";
          break;
        default:
          f += "eeee";
          break;
      }
      break;
    case "hours":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "h";
          break;
        case "long":
          f += "hh";
          break;
        default:
          f += "hh";
          break;
      }
      break;
    case "minutes":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "m";
          break;
        case "long":
          f += "mm";
          break;
        default:
          f += "mm";
          break;
      }
      break;
    case "month":
      switch (u = Ye(i[0], false), u.textual && (f += "mm"), u.style) {
        case "short":
          f += "m";
          break;
        case "long":
          f += "mm";
          break;
        default:
          f += "m";
          break;
      }
      break;
    case "seconds":
      {
        switch (u = Ye(i[0], false), u.style) {
          case "short":
            f += "s";
            break;
          case "long":
            f += "ss";
            break;
          default:
            f += "ss";
            break;
        }
        u["decimal-places"] && (f += "." + Ar("0", +u["decimal-places"]));
      }
      break;
    case "year":
      switch (u = Ye(i[0], false), u.style) {
        case "short":
          f += "yy";
          break;
        case "long":
          f += "yyyy";
          break;
        default:
          f += "yy";
          break;
      }
      break;
    case "am-pm":
      f += "AM/PM";
      break;
    case "week-of-year":
    case "quarter":
      console.error("Excel does not support ODS format token " + i[3]);
      break;
    case "fill-character":
      i[1] === "/" ? (d = n.slice(v, ot.lastIndex - i[0].length), f += '"' + d.replace(/"/g, '""') + '"*') : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex);
      break;
    case "scientific-number":
      u = Ye(i[0], false), f += "0." + Ar("0", +u["min-decimal-places"] || +u["decimal-places"] || 2) + Ar("?", +u["decimal-places"] - +u["min-decimal-places"] || 0) + "E" + (Rr(u["forced-exponent-sign"]) ? "+" : "") + Ar("0", +u["min-exponent-digits"] || 2);
      break;
    case "fraction":
      u = Ye(i[0], false), +u["min-integer-digits"] ? f += Ar("0", +u["min-integer-digits"]) : f += "#", f += " ", f += Ar("?", +u["min-numerator-digits"] || 1), f += "/", +u["denominator-value"] ? f += u["denominator-value"] : f += Ar("?", +u["min-denominator-digits"] || 1);
      break;
    case "currency-symbol":
      i[1] === "/" ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : i[0].charAt(i[0].length - 2) !== "/" ? v = ot.lastIndex : f += "$";
      break;
    case "text-properties":
      switch (u = Ye(i[0], false), (u.color || "").toLowerCase().replace("#", "")) {
        case "ff0000":
        case "red":
          f = "[Red]" + f;
          break;
      }
      break;
    case "text-content":
      f += "@";
      break;
    case "map":
      u = Ye(i[0], false), Fr(u.condition) == "value()>=0" ? f = a[u["apply-style-name"]] + ";" + f : console.error("ODS number format may be incorrect: " + u.condition);
      break;
    case "number":
      if (i[1] === "/") break;
      u = Ye(i[0], false), c = "", c += Ar("0", +u["min-integer-digits"] || 1), Rr(u.grouping) && (c = Ua(Ar("#", Math.max(0, 4 - c.length)) + c)), (+u["min-decimal-places"] || +u["decimal-places"]) && (c += "."), +u["min-decimal-places"] && (c += Ar("0", +u["min-decimal-places"] || 1)), +u["decimal-places"] - (+u["min-decimal-places"] || 0) && (c += Ar("0", +u["decimal-places"] - (+u["min-decimal-places"] || 0))), f += c;
      break;
    case "embedded-text":
      i[1] === "/" ? h == 0 ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, h) + '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(h) : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex, h = -+Ye(i[0], false).position || 0);
      break;
  }
  return a;
}
function mh(e, r, t) {
  var a = r || {}, n = l0(e), i = [], s, f, c, u = "", h = 0, v, d, x = {}, _ = [], y = {};
  a.dense && (y["!data"] = []);
  var m, g, S = { value: "" }, E = {}, A = "", X = 0, U = "", F = 0, B = [], L = [], K = -1, G = -1, te = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, de = 0, Ve = t || {}, ge = {}, $e = [], ke = {}, Pe = 0, Qe = 0, he = [], sr = 1, Le = 1, Te = [], ye = { Names: [], WBProps: {} }, je = {}, Ge = ["", ""], Ze = [], R = {}, W = "", z = 0, V = false, ue = false, I = 0;
  for (ot.lastIndex = 0, n = Wf(as(n, "<!--", "-->")); m = ot.exec(n); ) switch (m[3] = m[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      m[1] === "/" ? (te.e.c >= te.s.c && te.e.r >= te.s.r ? y["!ref"] = dr(te) : y["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= te.e.r && (y["!fullref"] = y["!ref"], te.e.r = a.sheetRows - 1, y["!ref"] = dr(te)), $e.length && (y["!merges"] = $e), he.length && (y["!rows"] = he), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), _.push(v.name), x[v.name] = y, ue = false) : m[0].charAt(m[0].length - 2) !== "/" && (v = Ye(m[0], false), K = G = -1, te.s.r = te.s.c = 1e7, te.e.r = te.e.c = 0, y = {}, a.dense && (y["!data"] = []), $e = [], he = [], ue = true);
      break;
    case "table-row-group":
      m[1] === "/" ? --de : ++de;
      break;
    case "table-row":
    case "\u884C":
      if (m[1] === "/") {
        K += sr, sr = 1;
        break;
      }
      if (d = Ye(m[0], false), d.\u884C\u53F7 ? K = d.\u884C\u53F7 - 1 : K == -1 && (K = 0), sr = +d["number-rows-repeated"] || 1, sr < 10) for (I = 0; I < sr; ++I) de > 0 && (he[K + I] = { level: de });
      G = -1;
      break;
    case "covered-table-cell":
      if (m[1] !== "/") if (++G, S = Ye(m[0], false), Le = parseInt(S["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
        for (; Le-- > 0; ) a.dense ? (y["!data"][K] || (y["!data"][K] = []), y["!data"][K][G] = { t: "z" }) : y[wr({ r: K, c: G })] = { t: "z" }, ++G;
        --G;
      } else G += Le - 1;
      A = "", B = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (m[0].charAt(m[0].length - 2) === "/") ++G, S = Ye(m[0], false), Le = parseInt(S["number-columns-repeated"] || "1", 10) || 1, g = { t: "z", v: null }, S.formula && a.cellFormula != false && (g.f = Qc(Fr(S.formula))), S["style-name"] && ge[S["style-name"]] && (g.z = ge[S["style-name"]]), (S.\u6570\u636E\u7C7B\u578B || S["value-type"]) == "string" && (g.t = "s", g.v = Fr(S["string-value"] || ""), a.dense ? (y["!data"][K] || (y["!data"][K] = []), y["!data"][K][G] = g) : y[mr(G) + br(K)] = g), G += Le - 1;
      else if (m[1] !== "/") {
        ++G, A = U = "", X = F = 0, B = [], L = [], Le = 1;
        var Ce = sr ? K + sr - 1 : K;
        if (G > te.e.c && (te.e.c = G), G < te.s.c && (te.s.c = G), K < te.s.r && (te.s.r = K), Ce > te.e.r && (te.e.r = Ce), S = Ye(m[0], false), E = Ld(m[0]), Ze = [], R = {}, g = { t: S.\u6570\u636E\u7C7B\u578B || S["value-type"], v: null }, S["style-name"] && ge[S["style-name"]] && (g.z = ge[S["style-name"]]), a.cellFormula) if (S.formula && (S.formula = Fr(S.formula)), S["number-matrix-columns-spanned"] && S["number-matrix-rows-spanned"] && (Pe = parseInt(S["number-matrix-rows-spanned"], 10) || 0, Qe = parseInt(S["number-matrix-columns-spanned"], 10) || 0, ke = { s: { r: K, c: G }, e: { r: K + Pe - 1, c: G + Qe - 1 } }, g.F = dr(ke), Te.push([ke, g.F])), S.formula) g.f = Qc(S.formula);
        else for (I = 0; I < Te.length; ++I) K >= Te[I][0].s.r && K <= Te[I][0].e.r && G >= Te[I][0].s.c && G <= Te[I][0].e.c && (g.F = Te[I][1]);
        switch ((S["number-columns-spanned"] || S["number-rows-spanned"]) && (Pe = parseInt(S["number-rows-spanned"] || "1", 10) || 1, Qe = parseInt(S["number-columns-spanned"] || "1", 10) || 1, Pe * Qe > 1 && (ke = { s: { r: K, c: G }, e: { r: K + Pe - 1, c: G + Qe - 1 } }, $e.push(ke))), S["number-columns-repeated"] && (Le = parseInt(S["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Rr(S["boolean-value"]) || +S["boolean-value"] >= 1;
            break;
          case "float":
            g.t = "n", g.v = parseFloat(S.value), a.cellDates && g.z && ua(g.z) && (g.v = Va(g.v + (ye.WBProps.date1904 ? 1462 : 0)), g.t = typeof g.v == "number" ? "n" : "d");
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "date":
            g.t = "d", g.v = zr(S["date-value"], ye.WBProps.date1904), a.cellDates || (g.t = "n", g.v = qr(g.v, ye.WBProps.date1904)), g.z || (g.z = "m/d/yy");
            break;
          case "time":
            g.t = "n", g.v = gd(S["time-value"]) / 86400, a.cellDates && (g.v = Va(g.v), g.t = typeof g.v == "number" ? "n" : "d"), g.z || (g.z = "HH:MM:SS");
            break;
          case "number":
            g.t = "n", g.v = parseFloat(S.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t) g.t = "s", S["string-value"] != null && (A = Fr(S["string-value"]), B = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (V = false, E["calcext:value-type"] == "error" && _t[A] != null && (g.t = "e", g.w = A, g.v = _t[A]), g.t === "s" && (g.v = A || "", B.length && (g.R = B), V = X == 0), je.Target && (g.l = je), Ze.length > 0 && (g.c = Ze, Ze = []), A && a.cellText !== false && (g.w = A), V && (g.t = "z", delete g.v), (!V || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= K)) for (var Ue = 0; Ue < sr; ++Ue) {
          if (Le = parseInt(S["number-columns-repeated"] || "1", 10), a.dense) for (y["!data"][K + Ue] || (y["!data"][K + Ue] = []), y["!data"][K + Ue][G] = Ue == 0 ? g : Hr(g); --Le > 0; ) y["!data"][K + Ue][G + Le] = Hr(g);
          else for (y[wr({ r: K + Ue, c: G })] = g; --Le > 0; ) y[wr({ r: K + Ue, c: G + Le })] = Hr(g);
          te.e.c <= G && (te.e.c = G);
        }
        Le = parseInt(S["number-columns-repeated"] || "1", 10), G += Le - 1, Le = 0, g = {}, A = "", B = [];
      }
      je = {};
      break;
    case "document":
    case "document-content":
    case "\u7535\u5B50\u8868\u683C\u6587\u6863":
    case "spreadsheet":
    case "\u4E3B\u4F53":
    case "scripts":
    case "styles":
    case "font-face-decls":
    case "master-styles":
      if (m[1] === "/") {
        if ((s = i.pop())[0] !== m[3]) throw "Bad state: " + s;
      } else m[0].charAt(m[0].length - 2) !== "/" && i.push([m[3], true]);
      break;
    case "annotation":
      if (m[1] === "/") {
        if ((s = i.pop())[0] !== m[3]) throw "Bad state: " + s;
        R.t = A, B.length && (R.R = B), R.a = W, Ze.push(R), A = U, X = F, B = L;
      } else if (m[0].charAt(m[0].length - 2) !== "/") {
        i.push([m[3], false]);
        var Se = Ye(m[0], true);
        Se.display && Rr(Se.display) || (Ze.hidden = true), U = A, F = X, L = B, A = "", X = 0, B = [];
      }
      W = "", z = 0;
      break;
    case "creator":
      m[1] === "/" ? W = n.slice(z, m.index) : z = m.index + m[0].length;
      break;
    case "meta":
    case "\u5143\u6570\u636E":
    case "settings":
    case "config-item-set":
    case "config-item-map-indexed":
    case "config-item-map-entry":
    case "config-item-map-named":
    case "shapes":
    case "frame":
    case "text-box":
    case "image":
    case "data-pilot-tables":
    case "list-style":
    case "form":
    case "dde-links":
    case "event-listeners":
    case "chart":
      if (m[1] === "/") {
        if ((s = i.pop())[0] !== m[3]) throw "Bad state: " + s;
      } else m[0].charAt(m[0].length - 2) !== "/" && i.push([m[3], false]);
      A = "", X = 0, B = [];
      break;
    case "scientific-number":
    case "currency-symbol":
    case "fill-character":
      break;
    case "text-style":
    case "boolean-style":
    case "number-style":
    case "currency-style":
    case "percentage-style":
    case "date-style":
    case "time-style":
      if (m[1] === "/") {
        var ar = ot.lastIndex;
        vh(n.slice(c, ot.lastIndex), r, Ve), ot.lastIndex = ar;
      } else m[0].charAt(m[0].length - 2) !== "/" && (c = ot.lastIndex - m[0].length);
      break;
    case "script":
      break;
    case "libraries":
      break;
    case "automatic-styles":
      break;
    case "default-style":
    case "page-layout":
      break;
    case "style":
      {
        var rr = Ye(m[0], false);
        rr.family == "table-cell" && Ve[rr["data-style-name"]] && (ge[rr.name] = Ve[rr["data-style-name"]]);
      }
      break;
    case "map":
      break;
    case "font-face":
      break;
    case "paragraph-properties":
      break;
    case "table-properties":
      break;
    case "table-column-properties":
      break;
    case "table-row-properties":
      break;
    case "table-cell-properties":
      break;
    case "number":
      break;
    case "fraction":
      break;
    case "day":
    case "month":
    case "year":
    case "era":
    case "day-of-week":
    case "week-of-year":
    case "quarter":
    case "hours":
    case "minutes":
    case "seconds":
    case "am-pm":
      break;
    case "boolean":
      break;
    case "text":
      if (m[0].slice(-2) === "/>") break;
      if (m[1] === "/") switch (i[i.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          u += n.slice(h, m.index);
          break;
      }
      else h = m.index + m[0].length;
      break;
    case "named-range":
      f = Ye(m[0], false), Ge = of(f["cell-range-address"]);
      var fr = { Name: f.name, Ref: Ge[0] + "!" + Ge[1] };
      ue && (fr.Sheet = _.length), ye.Names.push(fr);
      break;
    case "text-content":
      break;
    case "text-properties":
      break;
    case "embedded-text":
      break;
    case "body":
    case "\u7535\u5B50\u8868\u683C":
      break;
    case "forms":
      break;
    case "table-column":
      break;
    case "table-header-rows":
      break;
    case "table-rows":
      break;
    case "table-column-group":
      break;
    case "table-header-columns":
      break;
    case "table-columns":
      break;
    case "null-date":
      f = Ye(m[0], false), f["date-value"] === "1904-01-01" && (ye.WBProps.date1904 = true);
      break;
    case "graphic-properties":
      break;
    case "calculation-settings":
      break;
    case "named-expressions":
      break;
    case "label-range":
      break;
    case "label-ranges":
      break;
    case "named-expression":
      break;
    case "sort":
      break;
    case "sort-by":
      break;
    case "sort-groups":
      break;
    case "tab":
      break;
    case "line-break":
      break;
    case "span":
      break;
    case "p":
    case "\u6587\u672C\u4E32":
      if (["master-styles"].indexOf(i[i.length - 1][0]) > -1) break;
      if (m[1] === "/" && (!S || !S["string-value"])) {
        var Cr = h4(n.slice(X, m.index));
        A = (A.length > 0 ? A + `
` : "") + Cr[0];
      } else m[0].slice(-2) == "/>" ? A += `
` : (Ye(m[0], false), X = m.index + m[0].length);
      break;
    case "s":
      break;
    case "database-range":
      if (m[1] === "/") break;
      try {
        Ge = of(Ye(m[0])["target-range-address"]), x[Ge[0]]["!autofilter"] = { ref: Ge[1] };
      } catch {
      }
      break;
    case "date":
      break;
    case "object":
      break;
    case "title":
    case "\u6807\u9898":
      break;
    case "desc":
      break;
    case "binary-data":
      break;
    case "table-source":
      break;
    case "scenario":
      break;
    case "iteration":
      break;
    case "content-validations":
      break;
    case "content-validation":
      break;
    case "help-message":
      break;
    case "error-message":
      break;
    case "database-ranges":
      break;
    case "filter":
      break;
    case "filter-and":
      break;
    case "filter-or":
      break;
    case "filter-condition":
      break;
    case "filter-set-item":
      break;
    case "list-level-style-bullet":
      break;
    case "list-level-style-number":
      break;
    case "list-level-properties":
      break;
    case "sender-firstname":
    case "sender-lastname":
    case "sender-initials":
    case "sender-title":
    case "sender-position":
    case "sender-email":
    case "sender-phone-private":
    case "sender-fax":
    case "sender-company":
    case "sender-phone-work":
    case "sender-street":
    case "sender-city":
    case "sender-postal-code":
    case "sender-country":
    case "sender-state-or-province":
    case "author-name":
    case "author-initials":
    case "chapter":
    case "file-name":
    case "template-name":
    case "sheet-name":
      break;
    case "event-listener":
      break;
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    case "config-item":
      break;
    case "page-number":
      break;
    case "page-count":
      break;
    case "time":
      break;
    case "cell-range-source":
      break;
    case "detective":
      break;
    case "operation":
      break;
    case "highlighted-range":
      break;
    case "data-pilot-table":
    case "source-cell-range":
    case "source-service":
    case "data-pilot-field":
    case "data-pilot-level":
    case "data-pilot-subtotals":
    case "data-pilot-subtotal":
    case "data-pilot-members":
    case "data-pilot-member":
    case "data-pilot-display-info":
    case "data-pilot-sort-info":
    case "data-pilot-layout-info":
    case "data-pilot-field-reference":
    case "data-pilot-groups":
    case "data-pilot-group":
    case "data-pilot-group-member":
      break;
    case "rect":
      break;
    case "dde-connection-decls":
    case "dde-connection-decl":
    case "dde-link":
    case "dde-source":
      break;
    case "properties":
      break;
    case "property":
      break;
    case "a":
      if (m[1] !== "/") {
        if (je = Ye(m[0], false), !je.href) break;
        je.Target = Fr(je.href), delete je.href, je.Target.charAt(0) == "#" && je.Target.indexOf(".") > -1 ? (Ge = of(je.Target.slice(1)), je.Target = "#" + Ge[0] + "!" + Ge[1]) : je.Target.match(/^\.\.[\\\/]/) && (je.Target = je.Target.slice(3));
      }
      break;
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    case "office-document-common-attrs":
      break;
    default:
      switch (m[2]) {
        case "dc:":
        case "calcext:":
        case "loext:":
        case "ooo:":
        case "chartooo:":
        case "draw:":
        case "style:":
        case "chart:":
        case "form:":
        case "uof:":
        case "\u8868:":
        case "\u5B57:":
          break;
        default:
          if (a.WTF) throw new Error(m);
      }
  }
  var kr = { Sheets: x, SheetNames: _, Workbook: ye };
  return a.bookSheets && delete kr.Sheets, kr;
}
function nu(e, r) {
  r = r || {}, ia(e, "META-INF/manifest.xml") && Ax(ft(e, "META-INF/manifest.xml"), r);
  var t = Vt(e, "styles.xml"), a = t && vh(Pr(t)), n = Vt(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = mh(Pr(n), r, a);
  return ia(e, "meta.xml") && (i.Props = ul(ft(e, "meta.xml"))), i.bookType = "ods", i;
}
function iu(e, r) {
  var t = mh(e, r);
  return t.bookType = "fods", t;
}
var d4 = (function() {
  var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""), r = "<office:document-styles " + Vi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>";
  return function() {
    return at + r;
  };
})();
function x4(e, r) {
  var t = "number", a = "", n = { "style:name": r }, i = "", s = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1 && (console.error("Unsupported ODS Style Map exported.  Using first branch of " + e), e = e.slice(0, e.indexOf(";"))), e == "@") {
      t = "text", a = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + pr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + pr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var f = e.match(/# (\?+)\/(\?+)/);
    if (f) {
      a += Ae("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": f[1].length, "number:max-denominator-value": Math.max(+f[1].replace(/./g, "9"), +f[2].replace(/./g, "9")) });
      break e;
    }
    if (f = e.match(/# (\?+)\/(\d+)/)) {
      a += Ae("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": f[1].length, "number:denominator-value": +f[2] });
      break e;
    }
    if (f = e.match(/\b(\d+)(|\.\d+)%/)) {
      t = "percentage", a += Ae("number:number", null, { "number:decimal-places": f[2] && f.length - 1 || 0, "number:min-decimal-places": f[2] && f.length - 1 || 0, "number:min-integer-digits": f[1].length }) + "<number:text>%</number:text>";
      break e;
    }
    var c = false;
    if (["y", "m", "d"].indexOf(e[0]) > -1) {
      t = "date";
      r: for (; s < e.length; ++s) switch (i = e[s].toLowerCase()) {
        case "h":
        case "s":
          c = true, --s;
          break r;
        case "m":
          t: for (var u = s + 1; u < e.length; ++u) switch (e[u]) {
            case "y":
            case "d":
              break t;
            case "h":
            case "s":
              c = true, --s;
              break r;
          }
        case "y":
        case "d":
          for (; (e[++s] || "").toLowerCase() == i[0]; ) i += i[0];
          switch (--s, i) {
            case "y":
            case "yy":
              a += "<number:year/>";
              break;
            case "yyy":
            case "yyyy":
              a += '<number:year number:style="long"/>';
              break;
            case "mmmmm":
              console.error("ODS has no equivalent of format |mmmmm|");
            case "m":
            case "mm":
            case "mmm":
            case "mmmm":
              a += '<number:month number:style="' + (i.length % 2 ? "short" : "long") + '" number:textual="' + (i.length >= 3 ? "true" : "false") + '"/>';
              break;
            case "d":
            case "dd":
              a += '<number:day number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "ddd":
            case "dddd":
              a += '<number:day-of-week number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
          }
          break;
        case '"':
          for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
          --s, a += "<number:text>" + pr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "\\":
          i = e[++s], a += "<number:text>" + pr(i) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + pr(i) + "</number:text>";
          break;
        default:
          console.error("unrecognized character " + i + " in ODF format " + e);
      }
      if (!c) break e;
      e = e.slice(s + 1), s = 0;
    }
    if (e.match(/^\[?[hms]/)) {
      for (t == "number" && (t = "time"), e.match(/\[/) && (e = e.replace(/[\[\]]/g, ""), n["number:truncate-on-overflow"] = "false"); s < e.length; ++s) switch (i = e[s].toLowerCase()) {
        case "h":
        case "m":
        case "s":
          for (; (e[++s] || "").toLowerCase() == i[0]; ) i += i[0];
          switch (--s, i) {
            case "h":
            case "hh":
              a += '<number:hours number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "m":
            case "mm":
              a += '<number:minutes number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "s":
            case "ss":
              if (e[s + 1] == ".") do
                i += e[s + 1], ++s;
              while (e[s + 1] == "0");
              a += '<number:seconds number:style="' + (i.match("ss") ? "long" : "short") + '"' + (i.match(/\./) ? ' number:decimal-places="' + (i.match(/0+/) || [""])[0].length + '"' : "") + "/>";
              break;
          }
          break;
        case '"':
          for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
          --s, a += "<number:text>" + pr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + pr(i) + "</number:text>";
          break;
        case "a":
          if (e.slice(s, s + 3).toLowerCase() == "a/p") {
            a += "<number:am-pm/>", s += 2;
            break;
          }
          if (e.slice(s, s + 5).toLowerCase() == "am/pm") {
            a += "<number:am-pm/>", s += 4;
            break;
          }
        default:
          console.error("unrecognized character " + i + " in ODF format " + e);
      }
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[0] == "$" && (a += '<number:currency-symbol number:language="en" number:country="US">$</number:currency-symbol>', e = e.slice(1), s = 0), s = 0, e[s] == '"') {
      for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + pr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + pr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var h = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!h || !h[0]) console.error("Could not find numeric part of " + e);
    else {
      var v = h[1].replace(/,/g, "");
      a += "<number:" + (h[3] ? "scientific-" : "") + 'number number:min-integer-digits="' + (v.indexOf("0") == -1 ? "0" : v.length - v.indexOf("0")) + '"' + (h[0].indexOf(",") > -1 ? ' number:grouping="true"' : "") + (h[2] && ' number:decimal-places="' + (h[2].length - 1) + '"' || ' number:decimal-places="0"') + (h[3] && h[3].indexOf("+") > -1 ? ' number:forced-exponent-sign="true"' : "") + (h[3] ? ' number:min-exponent-digits="' + h[3].match(/0+/)[0].length + '"' : "") + "></number:" + (h[3] ? "scientific-" : "") + "number>", s = h.index + h[0].length;
    }
    if (e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, a += "<number:text>" + pr(i.replace(/""/g, '"')) + "</number:text>";
    }
  }
  return a ? Ae("number:" + t + "-style", a, n) : (console.error("Could not generate ODS number format for |" + e + "|"), "");
}
function su(e, r, t) {
  for (var a = [], n = 0; n < e.length; ++n) {
    var i = e[n];
    i && i.Sheet == (t == -1 ? null : t) && a.push(i);
  }
  return a.length ? `      <table:named-expressions>
` + a.map(function(s) {
    var f = (t == -1 ? "$" : "") + eh(s.Ref);
    return "        " + Ae("table:named-range", null, { "table:name": s.Name, "table:cell-range-address": f, "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1") });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var fu = /* @__PURE__ */ (function() {
  var e = function(n, i) {
    return pr(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, c, u) {
    var h = [];
    h.push('      <table:table table:name="' + pr(i.SheetNames[s]) + `" table:style-name="ta1">
`);
    var v = 0, d = 0, x = wt(n["!ref"] || "A1"), _ = n["!merges"] || [], y = 0, m = n["!data"] != null;
    if (n["!cols"]) for (d = 0; d <= x.e.c; ++d) h.push("        <table:table-column" + (n["!cols"][d] ? ' table:style-name="co' + n["!cols"][d].ods + '"' : "") + `></table:table-column>
`);
    var g = "", S = n["!rows"] || [];
    for (v = 0; v < x.s.r; ++v) g = S[v] ? ' table:style-name="ro' + S[v].ods + '"' : "", h.push("        <table:table-row" + g + `></table:table-row>
`);
    for (; v <= x.e.r; ++v) {
      for (g = S[v] ? ' table:style-name="ro' + S[v].ods + '"' : "", h.push("        <table:table-row" + g + `>
`), d = 0; d < x.s.c; ++d) h.push(r);
      for (; d <= x.e.c; ++d) {
        var E = false, A = {}, X = "";
        for (y = 0; y != _.length; ++y) if (!(_[y].s.c > d) && !(_[y].s.r > v) && !(_[y].e.c < d) && !(_[y].e.r < v)) {
          (_[y].s.c != d || _[y].s.r != v) && (E = true), A["table:number-columns-spanned"] = _[y].e.c - _[y].s.c + 1, A["table:number-rows-spanned"] = _[y].e.r - _[y].s.r + 1;
          break;
        }
        if (E) {
          h.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var U = wr({ r: v, c: d }), F = m ? (n["!data"][v] || [])[d] : n[U];
        if (F && F.f && (A["table:formula"] = pr(M_(F.f)), F.F && F.F.slice(0, U.length) == U)) {
          var B = wt(F.F);
          A["table:number-matrix-columns-spanned"] = B.e.c - B.s.c + 1, A["table:number-matrix-rows-spanned"] = B.e.r - B.s.r + 1;
        }
        if (!F) {
          h.push(r);
          continue;
        }
        switch (F.t) {
          case "b":
            X = F.v ? "TRUE" : "FALSE", A["office:value-type"] = "boolean", A["office:boolean-value"] = F.v ? "true" : "false";
            break;
          case "n":
            isFinite(F.v) ? (X = F.w || String(F.v || 0), A["office:value-type"] = "float", A["office:value"] = F.v || 0) : (isNaN(F.v) ? (X = "#NUM!", A["table:formula"] = "of:=#NUM!") : (X = "#DIV/0!", A["table:formula"] = "of:=" + (F.v < 0 ? "-" : "") + "1/0"), A["office:string-value"] = "", A["office:value-type"] = "string", A["calcext:value-type"] = "error");
            break;
          case "s":
          case "str":
            X = F.v == null ? "" : F.v, A["office:value-type"] = "string";
            break;
          case "d":
            X = F.w || zr(F.v, u).toISOString(), A["office:value-type"] = "date", A["office:date-value"] = zr(F.v, u).toISOString(), A["table:style-name"] = "ce1";
            break;
          default:
            h.push(r);
            continue;
        }
        var L = e(X);
        if (F.l && F.l.Target) {
          var K = F.l.Target;
          K = K.charAt(0) == "#" ? "#" + eh(K.slice(1)) : K, K.charAt(0) != "#" && !K.match(/^\w+:/) && (K = "../" + K), L = Ae("text:a", L, { "xlink:href": K.replace(/&/g, "&amp;") });
        }
        c[F.z] && (A["table:style-name"] = "ce" + c[F.z].slice(1));
        var G = Ae("text:p", L, {});
        if (F.c) {
          for (var te = "", de = "", Ve = {}, ge = 0; ge < F.c.length; ++ge) !te && F.c[ge].a && (te = F.c[ge].a), de += "<text:p>" + e(F.c[ge].t) + "</text:p>";
          F.c.hidden || (Ve["office:display"] = true), G = Ae("office:annotation", de, Ve) + G;
        }
        h.push("          " + Ae("table:table-cell", G, A) + `
`);
      }
      h.push(`        </table:table-row>
`);
    }
    return (i.Workbook || {}).Names && h.push(su(i.Workbook.Names, i.SheetNames, s)), h.push(`      </table:table>
`), h.join("");
  }, a = function(n, i) {
    n.push(` <office:automatic-styles>
`);
    var s = 0;
    i.SheetNames.map(function(h) {
      return i.Sheets[h];
    }).forEach(function(h) {
      if (h && h["!cols"]) {
        for (var v = 0; v < h["!cols"].length; ++v) if (h["!cols"][v]) {
          var d = h["!cols"][v];
          if (d.width == null && d.wpx == null && d.wch == null) continue;
          on(d), d.ods = s;
          var x = h["!cols"][v].wpx + "px";
          n.push('  <style:style style:name="co' + s + `" style:family="table-column">
`), n.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + x + `"/>
`), n.push(`  </style:style>
`), ++s;
        }
      }
    });
    var f = 0;
    i.SheetNames.map(function(h) {
      return i.Sheets[h];
    }).forEach(function(h) {
      if (h && h["!rows"]) {
        for (var v = 0; v < h["!rows"].length; ++v) if (h["!rows"][v]) {
          h["!rows"][v].ods = f;
          var d = h["!rows"][v].hpx + "px";
          n.push('  <style:style style:name="ro' + f + `" style:family="table-row">
`), n.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + d + `"/>
`), n.push(`  </style:style>
`), ++f;
        }
      }
    }), n.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), n.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), n.push(`  </style:style>
`), n.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), n.push(`   <number:month number:style="long"/>
`), n.push(`   <number:text>/</number:text>
`), n.push(`   <number:day number:style="long"/>
`), n.push(`   <number:text>/</number:text>
`), n.push(`   <number:year/>
`), n.push(`  </number:date-style>
`);
    var c = {}, u = 69;
    return i.SheetNames.map(function(h) {
      return i.Sheets[h];
    }).forEach(function(h) {
      if (h) {
        var v = h["!data"] != null;
        if (h["!ref"]) for (var d = wt(h["!ref"]), x = 0; x <= d.e.r; ++x) for (var _ = 0; _ <= d.e.c; ++_) {
          var y = v ? (h["!data"][x] || [])[_] : h[wr({ r: x, c: _ })];
          if (!(!y || !y.z || y.z.toLowerCase() == "general") && !c[y.z]) {
            var m = x4(y.z, "N" + u);
            m && (c[y.z] = "N" + u, ++u, n.push(m + `
`));
          }
        }
      }
    }), n.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), jr(c).forEach(function(h) {
      n.push('<style:style style:name="ce' + c[h].slice(1) + '" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="' + c[h] + `"/>
`);
    }), n.push(` </office:automatic-styles>
`), c;
  };
  return function(i, s) {
    var f = [at], c = Vi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }), u = Vi({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
    s.bookType == "fods" ? (f.push("<office:document" + c + u + `>
`), f.push(cl().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
`)) : f.push("<office:document-content" + c + `>
`);
    var h = a(f, i);
    f.push(`  <office:body>
`), f.push(`    <office:spreadsheet>
`), ((i.Workbook || {}).WBProps || {}).date1904 && f.push(`      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">
        <table:null-date table:date-value="1904-01-01"/>
      </table:calculation-settings>
`);
    for (var v = 0; v != i.SheetNames.length; ++v) f.push(t(i.Sheets[i.SheetNames[v]], i, v, s, h, ((i.Workbook || {}).WBProps || {}).date1904));
    return (i.Workbook || {}).Names && f.push(su(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function gh(e, r) {
  if (r.bookType == "fods") return fu(e, r);
  var t = Xf(), a = "", n = [], i = [];
  return a = "mimetype", lr(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", lr(t, a, fu(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", lr(t, a, d4(e, r)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", lr(t, a, at + cl()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", lr(t, a, Ix(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", lr(t, a, Cx(n)), t;
}
var tt = (function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
})();
function Ga(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ga(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Pr(Oa(e));
}
function Ut(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Ht(Ia(e));
}
function un(e) {
  for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
  var a = new Uint8Array(r), n = 0;
  for (t = 0; t < e.length; ++t) {
    var i = e[t], s = i.length;
    if (s < 250) for (var f = 0; f < s; ++f) a[n++] = i[f];
    else a.set(i, n), n += s;
  }
  return a;
}
function Mi(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function p4(e, r) {
  for (var t = (e[r + 15] & 127) << 7 | e[r + 14] >> 1, a = e[r + 14] & 1, n = r + 13; n >= r; --n) a = a * 256 + e[n];
  return (e[r + 15] & 128 ? -a : a) * Math.pow(10, t - 6176);
}
function v4(e, r, t) {
  var a = Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 16, n = t / Math.pow(10, a - 6176);
  e[r + 15] |= a >> 7, e[r + 14] |= (a & 127) << 1;
  for (var i = 0; n >= 1; ++i, n /= 256) e[r + i] = n & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function Ji(e, r) {
  var t = r.l, a = e[t] & 127;
  e: if (e[t++] >= 128 && (a |= (e[t] & 127) << 7, e[t++] < 128 || (a |= (e[t] & 127) << 14, e[t++] < 128) || (a |= (e[t] & 127) << 21, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 28), ++t, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 35), ++t, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 42), ++t, e[t++] < 128))) break e;
  return r.l = t, a;
}
function er(e) {
  var r = new Uint8Array(7);
  r[0] = e & 127;
  var t = 1;
  e: if (e > 127) {
    if (r[t - 1] |= 128, r[t] = e >> 7 & 127, ++t, e <= 16383 || (r[t - 1] |= 128, r[t] = e >> 14 & 127, ++t, e <= 2097151) || (r[t - 1] |= 128, r[t] = e >> 21 & 127, ++t, e <= 268435455) || (r[t - 1] |= 128, r[t] = e / 256 >>> 21 & 127, ++t, e <= 34359738367) || (r[t - 1] |= 128, r[t] = e / 65536 >>> 21 & 127, ++t, e <= 4398046511103)) break e;
    r[t - 1] |= 128, r[t] = e / 16777216 >>> 21 & 127, ++t;
  }
  return r[tt](0, t);
}
function _h(e) {
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(Ji(e, r));
  return t;
}
function wh(e) {
  return un(e.map(function(r) {
    return er(r);
  }));
}
function hr(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function Ie(e) {
  for (var r = [], t = { l: 0 }; t.l < e.length; ) {
    var a = t.l, n = Ji(e, t), i = n & 7;
    n = n / 8 | 0;
    var s, f = t.l;
    switch (i) {
      case 0:
        {
          for (; e[f++] >= 128; ) ;
          s = e[tt](t.l, f), t.l = f;
        }
        break;
      case 1:
        s = e[tt](f, f + 8), t.l = f + 8;
        break;
      case 2:
        {
          var c = Ji(e, t);
          s = e[tt](t.l, t.l + c), t.l += c;
        }
        break;
      case 5:
        s = e[tt](f, f + 4), t.l = f + 4;
        break;
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a));
    }
    var u = { data: s, type: i };
    r[n] == null && (r[n] = []), r[n].push(u);
  }
  return r;
}
function tr(e) {
  var r = [];
  return e.forEach(function(t, a) {
    a != 0 && t.forEach(function(n) {
      n.data && (r.push(er(a * 8 + n.type)), n.type == 2 && r.push(er(n.data.length)), r.push(n.data));
    });
  }), un(r);
}
function ln(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function Qi(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = Ji(e, a), i = Ie(e[tt](a.l, a.l + n));
    a.l += n;
    var s = { id: hr(i[1][0].data), messages: [] };
    i[2].forEach(function(f) {
      var c = Ie(f.data), u = hr(c[3][0].data);
      s.messages.push({ meta: c, data: e[tt](a.l, a.l + u) }), a.l += u;
    }), (r = i[3]) != null && r[0] && (s.merge = hr(i[3][0].data) >>> 0 > 0), t.push(s);
  }
  return t;
}
function ri(e) {
  var r = [];
  return e.forEach(function(t) {
    var a = [[], [{ data: er(t.id), type: 0 }], []];
    t.merge != null && (a[3] = [{ data: er(+!!t.merge), type: 0 }]);
    var n = [];
    t.messages.forEach(function(s) {
      n.push(s.data), s.meta[3] = [{ type: 0, data: er(s.data.length) }], a[2].push({ data: tr(s.meta), type: 2 });
    });
    var i = tr(a);
    r.push(er(i.length)), r.push(i), n.forEach(function(s) {
      return r.push(s);
    });
  }), un(r);
}
function m4(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = { l: 0 }, a = Ji(r, t), n = [], i = t.l; i < r.length; ) {
    var s = r[i] & 3;
    if (s == 0) {
      var f = r[i++] >> 2;
      if (f < 60) ++f;
      else {
        var c = f - 59;
        f = r[i], c > 1 && (f |= r[i + 1] << 8), c > 2 && (f |= r[i + 2] << 16), c > 3 && (f |= r[i + 3] << 24), f >>>= 0, f++, i += c;
      }
      n.push(r[tt](i, i + f)), i += f;
      continue;
    } else {
      var u = 0, h = 0;
      if (s == 1 ? (h = (r[i] >> 2 & 7) + 4, u = (r[i++] & 224) << 3, u |= r[i++]) : (h = (r[i++] >> 2) + 1, s == 2 ? (u = r[i] | r[i + 1] << 8, i += 2) : (u = (r[i] | r[i + 1] << 8 | r[i + 2] << 16 | r[i + 3] << 24) >>> 0, i += 4)), u == 0) throw new Error("Invalid offset 0");
      for (var v = n.length - 1, d = u; v >= 0 && d >= n[v].length; ) d -= n[v].length, --v;
      if (v < 0) if (d == 0) d = n[v = 0].length;
      else throw new Error("Invalid offset beyond length");
      if (h < d) n.push(n[v][tt](n[v].length - d, n[v].length - d + h));
      else {
        for (d > 0 && (n.push(n[v][tt](n[v].length - d)), h -= d), ++v; h >= n[v].length; ) n.push(n[v]), h -= n[v].length, ++v;
        h && n.push(n[v][tt](0, h));
      }
      n.length > 25 && (n = [un(n)]);
    }
  }
  for (var x = 0, _ = 0; _ < n.length; ++_) x += n[_].length;
  if (x != a) throw new Error("Unexpected length: ".concat(x, " != ").concat(a));
  return n;
}
function es(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, m4(a, e[tt](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : un(r);
}
function ti(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = er(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[tt](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return un(r);
}
var g4 = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function yh(e, r, t, a, n) {
  var i, s, f, c, u = r & 255, h = r >> 8, v = h >= 5 ? n : a;
  e: if (t & (h > 4 ? 8 : 4) && e.t == "n" && u == 7) {
    var d = (i = v[7]) != null && i[0] ? hr(v[7][0].data) : -1;
    if (d == -1) break e;
    var x = (s = v[15]) != null && s[0] ? hr(v[15][0].data) : -1, _ = (f = v[16]) != null && f[0] ? hr(v[16][0].data) : -1, y = (c = v[40]) != null && c[0] ? hr(v[40][0].data) : -1, m = e.v, g = m;
    r: if (y) {
      if (m == 0) {
        x = _ = 2;
        break r;
      }
      m >= 604800 ? x = 1 : m >= 86400 ? x = 2 : m >= 3600 ? x = 4 : m >= 60 ? x = 8 : m >= 1 ? x = 16 : x = 32, Math.floor(m) != m ? _ = 32 : m % 60 ? _ = 16 : m % 3600 ? _ = 8 : m % 86400 ? _ = 4 : m % 604800 && (_ = 2), _ < x && (_ = x);
    }
    if (x == -1 || _ == -1) break e;
    var S = [], E = [];
    x == 1 && (g = m / 604800, _ == 1 ? E.push('d"d"') : (g |= 0, m -= 604800 * g), S.push(g + (d == 2 ? " week" + (g == 1 ? "" : "s") : d == 1 ? "w" : ""))), x <= 2 && _ >= 2 && (g = m / 86400, _ > 2 && (g |= 0, m -= 86400 * g), E.push('d"d"'), S.push(g + (d == 2 ? " day" + (g == 1 ? "" : "s") : d == 1 ? "d" : ""))), x <= 4 && _ >= 4 && (g = m / 3600, _ > 4 && (g |= 0, m -= 3600 * g), E.push((x >= 4 ? "[h]" : "h") + '"h"'), S.push(g + (d == 2 ? " hour" + (g == 1 ? "" : "s") : d == 1 ? "h" : ""))), x <= 8 && _ >= 8 && (g = m / 60, _ > 8 && (g |= 0, m -= 60 * g), E.push((x >= 8 ? "[m]" : "m") + '"m"'), d == 0 ? S.push((x == 8 && _ == 8 || g >= 10 ? "" : "0") + g) : S.push(g + (d == 2 ? " minute" + (g == 1 ? "" : "s") : d == 1 ? "m" : ""))), x <= 16 && _ >= 16 && (g = m, _ > 16 && (g |= 0, m -= g), E.push((x >= 16 ? "[s]" : "s") + '"s"'), d == 0 ? S.push((_ == 16 && x == 16 || g >= 10 ? "" : "0") + g) : S.push(g + (d == 2 ? " second" + (g == 1 ? "" : "s") : d == 1 ? "s" : ""))), _ >= 32 && (g = Math.round(1e3 * m), x < 32 && E.push('.000"ms"'), d == 0 ? S.push((g >= 100 ? "" : g >= 10 ? "0" : "00") + g) : S.push(g + (d == 2 ? " millisecond" + (g == 1 ? "" : "s") : d == 1 ? "ms" : ""))), e.w = S.join(d == 0 ? ":" : " "), e.z = E.join(d == 0 ? '":"' : " "), d == 0 && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
  }
}
function _4(e, r, t, a) {
  var n = Ga(e), i = n.getUint32(4, true), s = -1, f = -1, c = -1, u = NaN, h = 0, v = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
  i & 2 && (c = n.getUint32(d, true), d += 4), d += Mi(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(d, true), d += 4), d += Mi(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(d, true), d += 4), i & 32 && (u = n.getFloat64(d, true), d += 8), i & 64 && (v.setTime(v.getTime() + (h = n.getFloat64(d, true)) * 1e3), d += 8), t > 1 && (i = n.getUint32(8, true) >>> 16, i & 255 && (c == -1 && (c = n.getUint32(d, true)), d += 4));
  var x, _ = e[t >= 4 ? 1 : 2];
  switch (_) {
    case 0:
      return;
    case 2:
      x = { t: "n", v: u };
      break;
    case 3:
      x = { t: "s", v: r.sst[f] };
      break;
    case 5:
      (a == null ? void 0 : a.cellDates) ? x = { t: "d", v } : x = { t: "n", v: h / 86400 + 35430, z: nr[14] };
      break;
    case 6:
      x = { t: "b", v: u > 0 };
      break;
    case 7:
      x = { t: "n", v: u };
      break;
    case 8:
      x = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) {
        var y = r.rsst[s];
        x = { t: "s", v: y.v }, y.l && (x.l = { Target: y.l });
      } else throw new Error("Unsupported cell type ".concat(e[tt](0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[tt](0, 4)));
  }
  return c > -1 && yh(x, _ | t << 8, i, r.ofmt[c], r.nfmt[c]), _ == 7 && (x.v /= 86400), x;
}
function w4(e, r, t) {
  var a = Ga(e);
  a.getUint32(4, true);
  var n = a.getUint32(8, true), i = 12, s = -1, f = -1, c = -1, u = NaN, h = NaN, v = 0, d = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (u = p4(e, i), i += 16), n & 2 && (h = a.getFloat64(i, true), i += 8), n & 4 && (d.setTime(d.getTime() + (v = a.getFloat64(i, true)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, true), i += 4), n & 16 && (s = a.getUint32(i, true), i += 4), i += Mi(n & 480) * 4, n & 512 && (a.getUint32(i, true), i += 4), i += Mi(n & 1024) * 4, n & 2048 && (a.getUint32(i, true), i += 4);
  var x, _ = e[1];
  switch (_) {
    case 0:
      x = { t: "z" };
      break;
    case 2:
      x = { t: "n", v: u };
      break;
    case 3:
      x = { t: "s", v: r.sst[f] };
      break;
    case 5:
      (t == null ? void 0 : t.cellDates) ? x = { t: "d", v: d } : x = { t: "n", v: v / 86400 + 35430, z: nr[14] };
      break;
    case 6:
      x = { t: "b", v: h > 0 };
      break;
    case 7:
      x = { t: "n", v: h };
      break;
    case 8:
      x = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) {
        var y = r.rsst[s];
        x = { t: "s", v: y.v }, y.l && (x.l = { Target: y.l });
      } else throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[tt](0, 4)));
      break;
    case 10:
      x = { t: "n", v: u };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[tt](0, 4)));
  }
  if (i += Mi(n & 4096) * 4, n & 516096 && (c == -1 && (c = a.getUint32(i, true)), i += 4), n & 524288) {
    var m = a.getUint32(i, true);
    i += 4, r.cmnt[m] && (x.c = T4(r.cmnt[m]));
  }
  return c > -1 && yh(x, _ | 1280, n >> 13, r.ofmt[c], r.nfmt[c]), _ == 7 && (x.v /= 86400), x;
}
function df(e, r) {
  var t = new Uint8Array(32), a = Ga(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && ua(e.z)) {
        t[1] = 5, a.setFloat64(n, (Va(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
        break;
      } else t[1] = 2, v4(t, n, e.v), i |= 1, n += 16;
      break;
    case "b":
      t[1] = 6, a.setFloat64(n, e.v ? 1 : 0, true), i |= 2, n += 8;
      break;
    case "s":
      {
        var s = e.v == null ? "" : String(e.v);
        if (e.l) {
          var f = r.rsst.findIndex(function(u) {
            var h;
            return u.v == s && u.l == ((h = e.l) == null ? void 0 : h.Target);
          });
          f == -1 && (r.rsst[f = r.rsst.length] = { v: s, l: e.l.Target }), t[1] = 9, a.setUint32(n, f, true), i |= 16, n += 4;
        } else {
          var c = r.sst.indexOf(s);
          c == -1 && (r.sst[c = r.sst.length] = s), t[1] = 3, a.setUint32(n, c, true), i |= 8, n += 4;
        }
      }
      break;
    case "d":
      t[1] = 5, a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
      break;
    case "z":
      t[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return e.c && (r.cmnt.push(S4(e.c)), a.setUint32(n, r.cmnt.length - 1, true), i |= 524288, n += 4), a.setUint32(8, i, true), t[tt](0, n);
}
function xf(e, r) {
  var t = new Uint8Array(32), a = Ga(t), n = 12, i = 0, s = "";
  switch (t[0] = 4, e.t) {
    case "n":
      break;
    case "b":
      break;
    case "s":
      if (s = e.v == null ? "" : String(e.v), e.l) {
        var f = r.rsst.findIndex(function(u) {
          var h;
          return u.v == s && u.l == ((h = e.l) == null ? void 0 : h.Target);
        });
        f == -1 && (r.rsst[f = r.rsst.length] = { v: s, l: e.l.Target }), t[1] = 9, a.setUint32(n, f, true), i |= 512, n += 4;
      }
      break;
    case "d":
      break;
    case "e":
      break;
    case "z":
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  switch (e.c && (a.setUint32(n, r.cmnt.length - 1, true), i |= 4096, n += 4), e.t) {
    case "n":
      t[1] = 2, a.setFloat64(n, e.v, true), i |= 32, n += 8;
      break;
    case "b":
      t[1] = 6, a.setFloat64(n, e.v ? 1 : 0, true), i |= 32, n += 8;
      break;
    case "s":
      if (s = e.v == null ? "" : String(e.v), !e.l) {
        var c = r.sst.indexOf(s);
        c == -1 && (r.sst[c = r.sst.length] = s), t[1] = 3, a.setUint32(n, c, true), i |= 16, n += 4;
      }
      break;
    case "d":
      t[1] = 5, a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 64, n += 8;
      break;
    case "z":
      t[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(8, i, true), t[tt](0, n);
}
function y4(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return _4(e, r, e[0], t);
    case 5:
      return w4(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Sr(e) {
  var r = Ie(e);
  return hr(r[1][0].data);
}
function Ct(e) {
  return tr([[], [{ type: 0, data: er(e) }]]);
}
function At(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? _h(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: wh(a) }]);
}
function Ba(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? _h(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: wh(a.filter(function(n) {
    return n != r;
  })) }];
}
function _n(e, r) {
  var t = Ie(r.data), a = hr(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, c, u = Ie(s.data);
    if (u[1]) {
      var h = hr(u[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[h] = ga(u[3][0].data);
          break;
        case 8:
          {
            var v = e[Sr(u[9][0].data)][0], d = Ie(v.data), x = e[Sr(d[1][0].data)][0], _ = hr(x.meta[1][0].data);
            if (_ != 2001) throw new Error("2000 unexpected reference to ".concat(_));
            var y = Ie(x.data), m = { v: y[3].map(function(E) {
              return ga(E.data);
            }).join("") };
            i[h] = m;
            e: if ((f = y == null ? void 0 : y[11]) != null && f[0]) {
              var g = (c = Ie(y[11][0].data)) == null ? void 0 : c[1];
              if (!g) break e;
              g.forEach(function(E) {
                var A, X, U, F = Ie(E.data);
                if ((A = F[2]) != null && A[0]) {
                  var B = e[Sr((X = F[2]) == null ? void 0 : X[0].data)][0], L = hr(B.meta[1][0].data);
                  switch (L) {
                    case 2032:
                      var K = Ie(B.data);
                      (U = K == null ? void 0 : K[2]) != null && U[0] && !m.l && (m.l = ga(K[2][0].data));
                      break;
                    case 2039:
                      break;
                    default:
                      console.log("unrecognized ObjectAttribute type ".concat(L));
                  }
                }
              });
            }
          }
          break;
        case 2:
          i[h] = Ie(u[6][0].data);
          break;
        case 3:
          i[h] = Ie(u[5][0].data);
          break;
        case 10:
          {
            var S = e[Sr(u[10][0].data)][0];
            i[h] = kh(e, S.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function k4(e, r) {
  var t, a, n, i, s, f, c, u, h, v, d, x, _, y, m = Ie(e), g = hr(m[1][0].data) >>> 0, S = hr(m[2][0].data) >>> 0, E = ((a = (t = m[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && hr(m[8][0].data) > 0 || false, A, X;
  if ((i = (n = m[7]) == null ? void 0 : n[0]) != null && i.data && r != 0) A = (f = (s = m[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, X = (u = (c = m[6]) == null ? void 0 : c[0]) == null ? void 0 : u.data;
  else if ((v = (h = m[4]) == null ? void 0 : h[0]) != null && v.data && r != 1) A = (x = (d = m[4]) == null ? void 0 : d[0]) == null ? void 0 : x.data, X = (y = (_ = m[3]) == null ? void 0 : _[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var U = E ? 4 : 1, F = Ga(A), B = [], L = 0; L < A.length / 2; ++L) {
    var K = F.getUint16(L * 2, true);
    K < 65535 && B.push([L, K]);
  }
  if (B.length != S) throw "Expected ".concat(S, " cells, found ").concat(B.length);
  var G = [];
  for (L = 0; L < B.length - 1; ++L) G[B[L][0]] = X[tt](B[L][1] * U, B[L + 1][1] * U);
  return B.length >= 1 && (G[B[B.length - 1][0]] = X[tt](B[B.length - 1][1] * U)), { R: g, cells: G };
}
function E4(e, r) {
  var t, a = Ie(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (hr(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = ln(a[5], function(s) {
    return k4(s, n);
  });
  return { nrows: hr(a[4][0].data) >>> 0, data: i.reduce(function(s, f) {
    return s[f.R] || (s[f.R] = []), f.cells.forEach(function(c, u) {
      if (s[f.R][u]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(u));
      s[f.R][u] = c;
    }), s;
  }, []) };
}
function kh(e, r) {
  var t, a, n, i, s, f, c, u, h, v, d = { t: "", a: "" }, x = Ie(r);
  if ((a = (t = x == null ? void 0 : x[1]) == null ? void 0 : t[0]) != null && a.data && (d.t = ga((i = (n = x == null ? void 0 : x[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = x == null ? void 0 : x[3]) == null ? void 0 : s[0]) != null && f.data) {
    var _ = e[Sr((u = (c = x == null ? void 0 : x[3]) == null ? void 0 : c[0]) == null ? void 0 : u.data)][0], y = Ie(_.data);
    (v = (h = y[1]) == null ? void 0 : h[0]) != null && v.data && (d.a = ga(y[1][0].data));
  }
  return (x == null ? void 0 : x[4]) && (d.replies = [], x[4].forEach(function(m) {
    var g = e[Sr(m.data)][0];
    d.replies.push(kh(e, g.data));
  })), d;
}
function T4(e) {
  var r = [];
  return r.push({ t: e.t || "", a: e.a, T: e.replies && e.replies.length > 0 }), e.replies && e.replies.forEach(function(t) {
    r.push({ t: t.t || "", a: t.a, T: true });
  }), r;
}
function S4(e) {
  for (var r = { a: "", t: "", replies: [] }, t = 0; t < e.length; ++t) t == 0 ? (r.a = e[t].a, r.t = e[t].t) : r.replies.push({ a: e[t].a, t: e[t].t });
  return r;
}
function b4(e, r, t, a) {
  var n, i, s, f, c, u, h, v, d, x, _, y, m, g, S = Ie(r.data), E = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (E.e.r = (hr(S[6][0].data) >>> 0) - 1, E.e.r < 0) throw new Error("Invalid row varint ".concat(S[6][0].data));
  if (E.e.c = (hr(S[7][0].data) >>> 0) - 1, E.e.c < 0) throw new Error("Invalid col varint ".concat(S[7][0].data));
  t["!ref"] = dr(E);
  var A = t["!data"] != null, X = t, U = Ie(S[4][0].data), F = g4();
  (n = U[4]) != null && n[0] && (F.sst = _n(e, e[Sr(U[4][0].data)][0])), (i = U[6]) != null && i[0] && (F.fmla = _n(e, e[Sr(U[6][0].data)][0])), (s = U[11]) != null && s[0] && (F.ofmt = _n(e, e[Sr(U[11][0].data)][0])), (f = U[12]) != null && f[0] && (F.ferr = _n(e, e[Sr(U[12][0].data)][0])), (c = U[17]) != null && c[0] && (F.rsst = _n(e, e[Sr(U[17][0].data)][0])), (u = U[19]) != null && u[0] && (F.cmnt = _n(e, e[Sr(U[19][0].data)][0])), (h = U[22]) != null && h[0] && (F.nfmt = _n(e, e[Sr(U[22][0].data)][0]));
  var B = Ie(U[3][0].data), L = 0;
  if (!((v = U[9]) != null && v[0])) throw "NUMBERS file missing row tree";
  var K = Ie(U[9][0].data)[1].map(function(ge) {
    return Ie(ge.data);
  });
  if (K.forEach(function(ge) {
    L = hr(ge[1][0].data);
    var $e = hr(ge[2][0].data), ke = B[1][$e];
    if (!ke) throw "NUMBERS missing tile " + $e;
    var Pe = Ie(ke.data), Qe = e[Sr(Pe[2][0].data)][0], he = hr(Qe.meta[1][0].data);
    if (he != 6002) throw new Error("6001 unexpected reference to ".concat(he));
    var sr = E4(e, Qe);
    sr.data.forEach(function(Le, Te) {
      Le.forEach(function(ye, je) {
        var Ge = y4(ye, F, a);
        Ge && (A ? (X["!data"][L + Te] || (X["!data"][L + Te] = []), X["!data"][L + Te][je] = Ge) : t[mr(je) + br(L + Te)] = Ge);
      });
    }), L += sr.nrows;
  }), (d = U[13]) != null && d[0]) {
    var G = e[Sr(U[13][0].data)][0], te = hr(G.meta[1][0].data);
    if (te != 6144) throw new Error("Expected merge type 6144, found ".concat(te));
    t["!merges"] = (x = Ie(G.data)) == null ? void 0 : x[1].map(function(ge) {
      var $e = Ie(ge.data), ke = Ga(Ie($e[1][0].data)[1][0].data), Pe = Ga(Ie($e[2][0].data)[1][0].data);
      return { s: { r: ke.getUint16(0, true), c: ke.getUint16(2, true) }, e: { r: ke.getUint16(0, true) + Pe.getUint16(0, true) - 1, c: ke.getUint16(2, true) + Pe.getUint16(2, true) - 1 } };
    });
  }
  if (!((_ = t["!merges"]) != null && _.length) && ((y = S[47]) != null && y[0])) {
    var de = Ie(S[47][0].data);
    if ((m = de[2]) != null && m[0]) {
      var Ve = Ie(de[2][0].data);
      (g = Ve[3]) != null && g[0] && (t["!merges"] = ln(Ve[3], function(ge) {
        var $e, ke, Pe, Qe, he, sr = Ie(ge), Le = Ie(sr[2][0].data), Te = Ie(Le[1][0].data);
        if (($e = Te[1]) != null && $e[0]) {
          var ye = Ie(Te[1][0].data), je = hr(ye[1][0].data);
          if (je == 67) {
            var Ge = Ie(ye[40][0].data);
            if (!(!((ke = Ge[3]) != null && ke[0]) || !((Pe = Ge[4]) != null && Pe[0]))) {
              var Ze = Ie(Ge[3][0].data), R = Ie(Ge[4][0].data), W = hr(Ze[1][0].data), z = (Qe = Ze[2]) != null && Qe[0] ? hr(Ze[2][0].data) : W, V = hr(R[1][0].data), ue = (he = R[2]) != null && he[0] ? hr(R[2][0].data) : V;
              return { s: { r: V, c: W }, e: { r: ue, c: z } };
            }
          }
        }
      }).filter(function(ge) {
        return ge != null;
      }));
    }
  }
}
function F4(e, r, t) {
  var a = Ie(r.data), n = { "!ref": "A1" };
  (t == null ? void 0 : t.dense) && (n["!data"] = []);
  var i = e[Sr(a[2][0].data)], s = hr(i[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return b4(e, i[0], n, t), n;
}
function A4(e, r, t) {
  var a, n = Ie(r.data), i = { name: (a = n[1]) != null && a[0] ? ga(n[1][0].data) : "", sheets: [] }, s = ln(n[2], Sr);
  return s.forEach(function(f) {
    e[f].forEach(function(c) {
      var u = hr(c.meta[1][0].data);
      u == 6e3 && i.sheets.push(F4(e, c, t));
    });
  }), i;
}
function C4(e, r, t) {
  var a, n = vo();
  n.Workbook = { WBProps: { date1904: true } };
  var i = Ie(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = ln(i[1], Sr);
  if (s.forEach(function(f) {
    e[f].forEach(function(c) {
      var u = hr(c.meta[1][0].data);
      if (u == 2) {
        var h = A4(e, c, t);
        h.sheets.forEach(function(v, d) {
          us(n, v, d == 0 ? h.name : h.name + "_" + d, true);
        });
      }
    });
  }), n.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return n.bookType = "numbers", n;
}
function pf(e, r) {
  var t, a, n, i, s, f, c, u = {}, h = [];
  if (e.FullPaths.forEach(function(d) {
    if (d.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(d) {
    if (d.name.match(/\.iwa$/) && d.content[0] == 0) {
      var x;
      try {
        x = es(d.content);
      } catch (y) {
        return console.log("?? " + d.content.length + " " + (y.message || y));
      }
      var _;
      try {
        _ = Qi(x);
      } catch (y) {
        return console.log("## " + (y.message || y));
      }
      _.forEach(function(y) {
        u[y.id] = y.messages, h.push(y.id);
      });
    }
  }), !h.length) throw new Error("File has no messages");
  if ((n = (a = (t = u == null ? void 0 : u[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && hr(u[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var v = ((c = (f = (s = (i = u == null ? void 0 : u[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : c[0].data) && hr(u[1][0].meta[1][0].data) == 1 && u[1][0];
  if (v || h.forEach(function(d) {
    u[d].forEach(function(x) {
      var _ = hr(x.meta[1][0].data) >>> 0;
      if (_ == 1) if (!v) v = x;
      else throw new Error("Document has multiple roots");
    });
  }), !v) throw new Error("Cannot find Document root");
  return C4(u, v, r);
}
function D4(e, r, t) {
  var a, n, i, s = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(0) }], [{ type: 2, data: new Uint8Array([]) }], [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
    return 255;
  })) }], [{ type: 0, data: er(5) }], [{ type: 2, data: new Uint8Array([]) }], [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
    return 255;
  })) }], [{ type: 0, data: er(1) }]];
  if (!((a = s[6]) != null && a[0]) || !((n = s[7]) != null && n[0])) throw "Mutation only works on post-BNC storages!";
  var f = 0;
  if (s[7][0].data.length < 2 * e.length) {
    var c = new Uint8Array(2 * e.length);
    c.set(s[7][0].data), s[7][0].data = c;
  }
  if (s[4][0].data.length < 2 * e.length) {
    var u = new Uint8Array(2 * e.length);
    u.set(s[4][0].data), s[4][0].data = u;
  }
  for (var h = Ga(s[7][0].data), v = 0, d = [], x = Ga(s[4][0].data), _ = 0, y = [], m = 4, g = 0; g < e.length; ++g) {
    if (e[g] == null || e[g].t == "z" && !((i = e[g].c) != null && i.length) || e[g].t == "e") {
      h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535);
      continue;
    }
    h.setUint16(g * 2, v / m, true), x.setUint16(g * 2, _ / m, true);
    var S, E;
    switch (e[g].t) {
      case "d":
        if (e[g].v instanceof Date) {
          S = df(e[g], r), E = xf(e[g], r);
          break;
        }
        S = df(e[g], r), E = xf(e[g], r);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        S = df(e[g], r), E = xf(e[g], r);
        break;
      default:
        throw new Error("Unsupported value " + e[g]);
    }
    d.push(S), v += S.length, y.push(E), _ += E.length, ++f;
  }
  for (s[2][0].data = er(f), s[5][0].data = er(5); g < s[7][0].data.length / 2; ++g) h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535, true);
  return s[6][0].data = un(d), s[3][0].data = un(y), s[8] = [{ type: 0, data: er(1) }], s;
}
function Df(e, r) {
  return { meta: [[], [{ type: 0, data: er(e) }]], data: r };
}
function Fa(e, r) {
  r.last || (r.last = 927262);
  for (var t = r.last; t < 2e6; ++t) if (!r[t]) return r[r.last = t] = e, t;
  throw new Error("Too many messages");
}
function I4(e) {
  var r = {}, t = [];
  return e.FileIndex.map(function(a, n) {
    return [a, e.FullPaths[n]];
  }).forEach(function(a) {
    var n = a[0], i = a[1];
    n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0 && Qi(es(n.content)).forEach(function(s) {
      t.push(s.id), r[s.id] = { deps: [], location: i, type: hr(s.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(a) {
    a.name.match(/\.iwa/) && a.content[0] == 0 && Qi(es(a.content)).forEach(function(n) {
      n.messages.forEach(function(i) {
        [5, 6].forEach(function(s) {
          i.meta[s] && i.meta[s].forEach(function(f) {
            r[n.id].deps.push(hr(f.data));
          });
        });
      });
    });
  }), r;
}
function Hs(e, r, t) {
  return tr([[], [{ type: 0, data: er(1) }], [], [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }], [], [], [], [], [], [{ type: 0, data: er(1) }]]);
}
function ou(e) {
  switch (e) {
    case 0:
      return Hs(99, 222, 171);
    case 1:
      return Hs(162, 197, 240);
    case 2:
      return Hs(255, 189, 189);
  }
  return Hs(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function O4(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = ir.read(r.numbers, { type: "base64" }), a = I4(t), n = Aa(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = ln(Ie(n.messages[0].data)[1], Sr);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (R4(t, a, f + 1), n = Aa(t, a, 1), i = ln(Ie(n.messages[0].data)[1], Sr)), P4(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function Lr(e, r, t, a) {
  var n = ir.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = Qi(es(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = ti(ri(i)), n.size = n.content.length;
}
function Aa(e, r, t) {
  var a = ir.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = Qi(es(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function If(e, r, t) {
  e[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(r) }], [{ type: 2, data: Ut(t.replace(/-[\s\S]*$/, "")) }], [{ type: 2, data: Ut(t) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), e[1] = [{ type: 0, data: er(Math.max(r + 1, hr(e[1][0].data))) }];
}
function wn(e, r, t, a, n, i) {
  i || (i = Fa({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, ir.utils.cfb_add(e, s, ti(ri([{ id: i, messages: [Df(r, tr(t))] }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Lr(e, n, 2, function(c) {
    var u = Ie(c.messages[0].data);
    If(u, i || 0, f), c.messages[0].data = tr(u);
  }), i;
}
function Xt(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, u, h = Ie(f.data);
    return (c = h[3]) != null && c[0] ? ga(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && ga(h[2][0].data) == n);
  }), s = Ie(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({ type: 2, data: tr([[], [{ type: 0, data: er(f) }]]) });
  }), e[3][i].data = tr(s);
}
function N4(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, u, h = Ie(f.data);
    return (c = h[3]) != null && c[0] ? ga(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && ga(h[2][0].data) == n);
  }), s = Ie(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return hr(Ie(f.data)[1][0].data) != a;
  }), e[3][i].data = tr(s);
}
function R4(e, r, t) {
  var a = -1, n = -1, i = {};
  Lr(e, r, 1, function(c, u) {
    var h = Ie(c.messages[0].data);
    a = Sr(Ie(c.messages[0].data)[1][0].data), n = Fa({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, At(c, n), h[1].push({ type: 2, data: Ct(n) });
    var v = Aa(e, r, a);
    v.id = n, r[1].location == r[n].location ? u.push(v) : Lr(e, r, n, function(d, x) {
      return x.push(v);
    }), c.messages[0].data = tr(h);
  });
  var s = -1;
  Lr(e, r, n, function(c, u) {
    for (var h = Ie(c.messages[0].data), v = 3; v <= 69; ++v) delete h[v];
    var d = ln(h[2], Sr);
    d.forEach(function(_) {
      return Ba(c, _);
    }), s = Fa({ deps: [n], location: r[d[0]].location, type: r[d[0]].type }, r), At(c, s), i[d[0]] = s, h[2] = [{ type: 2, data: Ct(s) }];
    var x = Aa(e, r, d[0]);
    x.id = s, r[d[0]].location == r[n].location ? u.push(x) : (Lr(e, r, 2, function(_) {
      var y = Ie(_.messages[0].data);
      Xt(y, r, n, s), _.messages[0].data = tr(y);
    }), Lr(e, r, s, function(_, y) {
      return y.push(x);
    })), c.messages[0].data = tr(h);
  });
  var f = -1;
  Lr(e, r, s, function(c, u) {
    for (var h = Ie(c.messages[0].data), v = Ie(h[1][0].data), d = 3; d <= 69; ++d) delete v[d];
    var x = Sr(v[2][0].data);
    v[2][0].data = Ct(i[x]), h[1][0].data = tr(v);
    var _ = Sr(h[2][0].data);
    Ba(c, _), f = Fa({ deps: [s], location: r[_].location, type: r[_].type }, r), At(c, f), i[_] = f, h[2][0].data = Ct(f);
    var y = Aa(e, r, _);
    y.id = f, r[s].location == r[f].location ? u.push(y) : Lr(e, r, f, function(m, g) {
      return g.push(y);
    }), c.messages[0].data = tr(h);
  }), Lr(e, r, f, function(c, u) {
    var h, v, d = Ie(c.messages[0].data), x = ga(d[1][0].data), _ = x.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (d[1][0].data = Ut(_), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(X) {
      return delete d[X];
    }), d[45]) {
      var y = Ie(d[45][0].data), m = Sr(y[1][0].data);
      Ba(c, m), delete d[45];
    }
    if (d[70]) {
      var g = Ie(d[70][0].data);
      (h = g[2]) == null || h.forEach(function(X) {
        var U = Ie(X.data);
        [2, 3].map(function(F) {
          return U[F][0];
        }).forEach(function(F) {
          var B = Ie(F.data);
          if (B[8]) {
            var L = Sr(B[8][0].data);
            Ba(c, L);
          }
        });
      }), delete d[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function(X) {
      if (d[X]) {
        var U = Sr(d[X][0].data);
        delete d[X], Ba(c, U);
      }
    });
    var S = Ie(d[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(X) {
        var U;
        if ((U = S[X]) != null && U[0]) {
          var F = Sr(S[X][0].data), B = Fa({ deps: [f], location: r[F].location, type: r[F].type }, r);
          Ba(c, F), At(c, B), i[F] = B;
          var L = Aa(e, r, F);
          if (L.id = B, r[F].location == r[f].location) u.push(L);
          else {
            r[B].location = r[F].location.replace(F.toString(), B.toString()), r[B].location == r[F].location && (r[B].location = r[B].location.replace(/\.iwa/, "-".concat(B, ".iwa"))), ir.utils.cfb_add(e, r[B].location, ti(ri([L])));
            var K = r[B].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Lr(e, r, 2, function(G) {
              var te = Ie(G.messages[0].data);
              If(te, B, K), Xt(te, r, f, B), G.messages[0].data = tr(te);
            });
          }
          S[X][0].data = Ct(B);
        }
      });
      var E = Ie(S[1][0].data);
      (v = E[2]) == null || v.forEach(function(X) {
        var U = Sr(X.data), F = Fa({ deps: [f], location: r[U].location, type: r[U].type }, r);
        Ba(c, U), At(c, F), i[U] = F;
        var B = Aa(e, r, U);
        if (B.id = F, r[U].location == r[f].location) u.push(B);
        else {
          r[F].location = r[U].location.replace(U.toString(), F.toString()), r[F].location == r[U].location && (r[F].location = r[F].location.replace(/\.iwa/, "-".concat(F, ".iwa"))), ir.utils.cfb_add(e, r[F].location, ti(ri([B])));
          var L = r[F].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Lr(e, r, 2, function(K) {
            var G = Ie(K.messages[0].data);
            If(G, F, L), Xt(G, r, f, F), K.messages[0].data = tr(G);
          });
        }
        X.data = Ct(F);
      }), S[1][0].data = tr(E);
      var A = Ie(S[3][0].data);
      A[1].forEach(function(X) {
        var U = Ie(X.data), F = Sr(U[2][0].data), B = i[F];
        if (!i[F]) {
          B = Fa({ deps: [f], location: "", type: r[F].type }, r), r[B].location = "Root Entry/Index/Tables/Tile-".concat(B, ".iwa"), i[F] = B;
          var L = Aa(e, r, F);
          L.id = B, Ba(c, F), At(c, B), ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(B, ".iwa"), ti(ri([L]))), Lr(e, r, 2, function(K) {
            var G = Ie(K.messages[0].data);
            G[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(B) }], [{ type: 2, data: Ut("Tables/Tile") }], [{ type: 2, data: Ut("Tables/Tile-".concat(B)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), G[1] = [{ type: 0, data: er(Math.max(B + 1, hr(G[1][0].data))) }], Xt(G, r, f, B), K.messages[0].data = tr(G);
          });
        }
        U[2][0].data = Ct(B), X.data = tr(U);
      }), S[3][0].data = tr(A);
    }
    d[4][0].data = tr(S), c.messages[0].data = tr(d);
  });
}
function P4(e, r, t, a, n, i) {
  var s = [];
  Lr(e, r, i, function(u) {
    var h = Ie(u.messages[0].data);
    h[1] = [{ type: 2, data: Ut(a) }], s = ln(h[2], Sr), u.messages[0].data = tr(h);
  });
  var f = Aa(e, r, s[0]), c = Sr(Ie(f.messages[0].data)[2][0].data);
  Lr(e, r, c, function(u, h) {
    return B4(e, r, t, u, h, c);
  });
}
function B4(e, r, t, a, n, i) {
  if (!t["!ref"]) throw new Error("Cannot export empty sheet to NUMBERS");
  var s = wt(t["!ref"]);
  s.s.r = s.s.c = 0;
  var f = false;
  s.e.c > 999 && (f = true, s.e.c = 999), s.e.r > 999999 && (f = true, s.e.r = 999999), f && console.error("Truncating to ".concat(dr(s)));
  var c = [];
  if (t["!data"]) c = t["!data"];
  else {
    for (var u = [], h = 0; h <= s.e.c; ++h) u[h] = mr(h);
    for (var v = 0; v <= s.e.r; ++v) {
      c[v] = [];
      var d = "" + (v + 1);
      for (h = 0; h <= s.e.c; ++h) {
        var x = t[u[h] + d];
        x && (c[v][h] = x);
      }
    }
  }
  var _ = { cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }], rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }], sst: ["~Sh33tJ5~"] }, y = Ie(a.messages[0].data);
  {
    y[6][0].data = er(s.e.r + 1), y[7][0].data = er(s.e.c + 1), delete y[46];
    var m = Ie(y[4][0].data);
    {
      var g = Sr(Ie(m[1][0].data)[2][0].data);
      Lr(e, r, g, function(Le, Te) {
        var ye, je = Ie(Le.messages[0].data);
        if ((ye = je == null ? void 0 : je[2]) != null && ye[0]) for (var Ge = 0; Ge < c.length; ++Ge) {
          var Ze = Ie(je[2][0].data);
          Ze[1][0].data = er(Ge), Ze[4][0].data = er(c[Ge].length), je[2][Ge] = { type: je[2][0].type, data: tr(Ze) };
        }
        Le.messages[0].data = tr(je);
      });
      var S = Sr(m[2][0].data);
      Lr(e, r, S, function(Le, Te) {
        for (var ye = Ie(Le.messages[0].data), je = 0; je <= s.e.c; ++je) {
          var Ge = Ie(ye[2][0].data);
          Ge[1][0].data = er(je), Ge[4][0].data = er(s.e.r + 1), ye[2][je] = { type: ye[2][0].type, data: tr(Ge) };
        }
        Le.messages[0].data = tr(ye);
      });
      var E = Ie(m[9][0].data);
      E[1] = [];
      var A = Ie(m[3][0].data);
      {
        var X = 256;
        A[2] = [{ type: 0, data: er(X) }];
        var U = Sr(Ie(A[1][0].data)[2][0].data), F = (function() {
          var Le = Aa(e, r, 2), Te = Ie(Le.messages[0].data), ye = Te[3].filter(function(je) {
            return hr(Ie(je.data)[1][0].data) == U;
          });
          return (ye == null ? void 0 : ye.length) ? hr(Ie(ye[0].data)[12][0].data) : 0;
        })();
        ir.utils.cfb_del(e, r[U].location), Lr(e, r, 2, function(Le) {
          var Te = Ie(Le.messages[0].data);
          Te[3] = Te[3].filter(function(ye) {
            return hr(Ie(ye.data)[1][0].data) != U;
          }), N4(Te, r, i, U), Le.messages[0].data = tr(Te);
        }), Ba(a, U), A[1] = [];
        for (var B = Math.ceil((s.e.r + 1) / X), L = 0; L < B; ++L) {
          var K = Fa({ deps: [], location: "", type: 6002 }, r);
          r[K].location = "Root Entry/Index/Tables/Tile-".concat(K, ".iwa");
          for (var G = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min(s.e.r + 1, (L + 1) * X)) }], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min((L + 1) * X, s.e.r + 1) - L * X) }], [], [{ type: 0, data: er(5) }], [{ type: 0, data: er(1) }], [{ type: 0, data: er(1) }]], te = L * X; te <= Math.min(s.e.r, (L + 1) * X - 1); ++te) {
            var de = D4(c[te], _);
            de[1][0].data = er(te - L * X), G[5].push({ data: tr(de), type: 2 });
          }
          A[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(L) }], [{ type: 2, data: Ct(K) }]]) });
          var Ve = { id: K, messages: [Df(6002, tr(G))] }, ge = ti(ri([Ve]));
          ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(K, ".iwa"), ge), Lr(e, r, 2, function(Le) {
            var Te = Ie(Le.messages[0].data);
            Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(K) }], [{ type: 2, data: Ut("Tables/Tile") }], [{ type: 2, data: Ut("Tables/Tile-".concat(K)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(F) }]]) }), Te[1] = [{ type: 0, data: er(Math.max(K + 1, hr(Te[1][0].data))) }], Xt(Te, r, i, K), Le.messages[0].data = tr(Te);
          }), At(a, K), E[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(L * X) }], [{ type: 0, data: er(L) }]]) });
        }
      }
      if (m[3][0].data = tr(A), m[9][0].data = tr(E), m[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var $e = Fa({ type: 6144, deps: [i], location: r[i].location }, r);
        n.push({ id: $e, messages: [Df(6144, tr([[], t["!merges"].map(function(Le) {
          return { type: 2, data: tr([[], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Le.s.r, Le.s.c]).buffer) }]]) }], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Le.e.r - Le.s.r + 1, Le.e.c - Le.s.c + 1]).buffer) }]]) }]]) };
        })]))] }), m[13] = [{ type: 2, data: Ct($e) }], Lr(e, r, 2, function(Le) {
          var Te = Ie(Le.messages[0].data);
          Xt(Te, r, i, $e), Le.messages[0].data = tr(Te);
        }), At(a, $e);
      } else delete m[13];
      var ke = Sr(m[4][0].data);
      Lr(e, r, ke, function(Le) {
        var Te = Ie(Le.messages[0].data);
        Te[3] = [], _.sst.forEach(function(ye, je) {
          je != 0 && Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [{ type: 2, data: Ut(ye) }]]) });
        }), Le.messages[0].data = tr(Te);
      });
      var Pe = Sr(m[17][0].data);
      if (Lr(e, r, Pe, function(Le) {
        var Te = Ie(Le.messages[0].data);
        Te[3] = [];
        var ye = [904980, 903835, 903815, 903845];
        _.rsst.forEach(function(je, Ge) {
          if (Ge != 0) {
            var Ze = [[], [{ type: 0, data: new Uint8Array([5]) }], [], [{ type: 2, data: Ut(je.v) }]];
            Ze[10] = [{ type: 0, data: new Uint8Array([1]) }], Ze[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], Ze[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], Ze[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], Ze[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], Ze[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], Ze[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var R = Fa({ deps: [], location: "", type: 2001 }, r), W = [];
            if (je.l) {
              var z = wn(e, 2032, [[], [], [{ type: 2, data: Ut(je.l) }]], "/Index/Tables/DataList", r);
              Ze[11] = [];
              var V = [[], []];
              V[1] || (V[1] = []), V[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(0) }], [{ type: 2, data: Ct(z) }]]) }), Ze[11][0] = { type: 2, data: tr(V) }, W.push(z);
            }
            wn(e, 2001, Ze, "/Index/Tables/DataList", r, R), Lr(e, r, R, function(I) {
              ye.forEach(function(Ce) {
                return At(I, Ce);
              }), W.forEach(function(Ce) {
                return At(I, Ce);
              });
            });
            var ue = wn(e, 6218, [[], [{ type: 2, data: Ct(R) }], [], [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]], "/Index/Tables/DataList", r);
            Lr(e, r, ue, function(I) {
              return At(I, R);
            }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [{ type: 2, data: Ct(ue) }]]) }), At(Le, ue), Lr(e, r, 2, function(I) {
              var Ce = Ie(I.messages[0].data);
              Xt(Ce, r, Pe, ue), Xt(Ce, r, ue, R), Xt(Ce, r, R, W), Xt(Ce, r, R, ye), I.messages[0].data = tr(Ce);
            });
          }
        }), Le.messages[0].data = tr(Te);
      }), _.cmnt.length > 1) {
        var Qe = Sr(m[19][0].data), he = {}, sr = 0;
        Lr(e, r, Qe, function(Le) {
          var Te = Ie(Le.messages[0].data);
          Te[3] = [], _.cmnt.forEach(function(ye, je) {
            if (je != 0) {
              var Ge = [];
              ye.replies && ye.replies.forEach(function(W) {
                he[W.a || ""] || (he[W.a || ""] = wn(e, 212, [[], [{ type: 2, data: Ut(W.a || "") }], [{ type: 2, data: ou(++sr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
                var z = he[W.a || ""], V = wn(e, 3056, [[], [{ type: 2, data: Ut(W.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Ct(z) }]], "/Index/Tables/DataList", r);
                Lr(e, r, V, function(ue) {
                  return At(ue, z);
                }), Ge.push(V), Lr(e, r, 2, function(ue) {
                  var I = Ie(ue.messages[0].data);
                  Xt(I, r, V, z), ue.messages[0].data = tr(I);
                });
              }), he[ye.a || ""] || (he[ye.a || ""] = wn(e, 212, [[], [{ type: 2, data: Ut(ye.a || "") }], [{ type: 2, data: ou(++sr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
              var Ze = he[ye.a || ""], R = wn(e, 3056, [[], [{ type: 2, data: Ut(ye.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Ct(Ze) }], Ge.map(function(W) {
                return { type: 2, data: Ct(W) };
              }), [{ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(0) }]]) }]], "/Index/Tables/DataList", r);
              Lr(e, r, R, function(W) {
                At(W, Ze), Ge.forEach(function(z) {
                  return At(W, z);
                });
              }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [], [{ type: 2, data: Ct(R) }]]) }), At(Le, R), Lr(e, r, 2, function(W) {
                var z = Ie(W.messages[0].data);
                Xt(z, r, Qe, R), Xt(z, r, R, Ze), Ge.length && Xt(z, r, R, Ge), W.messages[0].data = tr(z);
              });
            }
          }), Te[2][0].data = er(_.cmnt.length + 1), Le.messages[0].data = tr(Te);
        });
      }
    }
    y[4][0].data = tr(m);
  }
  a.messages[0].data = tr(y);
}
function Eh(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function lo(e) {
  Eh([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function ho(e) {
  Eh([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e);
}
function L4(e) {
  return _r.WS.indexOf(e) > -1 ? "sheet" : e == _r.CS ? "chart" : e == _r.DS ? "dialog" : e == _r.MS ? "macro" : e && e.length ? e : "sheet";
}
function M4(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, L4(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function U4(e, r, t, a, n, i, s, f) {
  if (!(!e || !e["!legdrawel"])) {
    var c = Zn(e["!legdrawel"].Target, a), u = Vt(t, c, true);
    u && Bg(Pr(u), e, f || []);
  }
}
function W4(e, r, t, a, n, i, s, f, c, u, h, v) {
  try {
    i[a] = Oi(Vt(e, t, true), r);
    var d = ft(e, r), x;
    switch (f) {
      case "sheet":
        x = ik(d, r, n, c, i[a], u, h, v);
        break;
      case "chart":
        if (x = sk(d, r, n, c, i[a], u, h, v), !x || !x["!drawel"]) break;
        var _ = Zn(x["!drawel"].Target, r), y = Gi(_), m = Pg(Vt(e, _, true), Oi(Vt(e, y, true), _)), g = Zn(m, _), S = Gi(g);
        x = Ay(Vt(e, g, true), g, c, Oi(Vt(e, S, true), g), u, x);
        break;
      case "macro":
        x = fk(d, r, n, c, i[a], u, h, v);
        break;
      case "dialog":
        x = ok(d, r, n, c, i[a], u, h, v);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = x;
    var E = [], A = [];
    i && i[a] && jr(i[a]).forEach(function(X) {
      var U = "";
      if (i[a][X].Type == _r.CMNT) {
        if (U = Zn(i[a][X].Target, r), E = lk(ft(e, U, true), U, c), !E || !E.length) return;
        jc(x, E, false);
      }
      i[a][X].Type == _r.TCMNT && (U = Zn(i[a][X].Target, r), A = A.concat(Wg(ft(e, U, true), c)));
    }), A && A.length && jc(x, A, true, c.people || []), U4(x, f, e, r, n, c, u, E);
  } catch (X) {
    if (c.WTF) throw X;
  }
}
function aa(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function H4(e, r) {
  if (fi(), r = r || {}, lo(r), ia(e, "META-INF/manifest.xml") || ia(e, "objectdata.xml")) return nu(e, r);
  if (ia(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof pf < "u") {
      if (e.FileIndex) return pf(e, r);
      var t = ir.utils.cfb_new();
      return hc(e).forEach(function(ge) {
        lr(t, ge, Nd(e, ge));
      }), pf(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!ia(e, "[Content_Types].xml")) {
    if (ia(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (ia(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = ir.find(e, "Index.zip");
    if (a) return r = Hr(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? ai(new Uint8Array(a.content), r) : ai(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = hc(e), i = bx(Vt(e, "[Content_Types].xml")), s = false, f, c;
  if (i.workbooks.length === 0 && (c = "xl/workbook.xml", ft(e, c, true) && i.workbooks.push(c)), i.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !ft(e, c, true)) throw new Error("Could not find workbook");
    i.workbooks.push(c), s = true;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = true);
  var u = {}, h = {};
  if (!r.bookSheets && !r.bookProps) {
    if (Ri = [], i.sst) try {
      Ri = uk(ft(e, aa(i.sst)), i.sst, r);
    } catch (ge) {
      if (r.WTF) throw ge;
    }
    r.cellStyles && i.themes.length && (u = Vl(Vt(e, i.themes[0].replace(/^\//, ""), true) || "", r)), i.style && (h = ck(ft(e, aa(i.style)), i.style, u, r));
  }
  i.links.map(function(ge) {
    try {
      var $e = Oi(Vt(e, Gi(aa(ge))), ge);
      return dk(ft(e, aa(ge)), $e, ge, r);
    } catch {
    }
  });
  var v = nk(ft(e, aa(i.workbooks[0])), i.workbooks[0], r), d = {}, x = "";
  i.coreprops.length && (x = ft(e, aa(i.coreprops[0]), true), x && (d = ul(x)), i.extprops.length !== 0 && (x = ft(e, aa(i.extprops[0]), true), x && Ox(x, d, r)));
  var _ = {};
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (x = Vt(e, aa(i.custprops[0]), true), x && (_ = Rx(x, r)));
  var y = {};
  if ((r.bookSheets || r.bookProps) && (v.Sheets ? f = v.Sheets.map(function($e) {
    return $e.name;
  }) : d.Worksheets && d.SheetNames.length > 0 && (f = d.SheetNames), r.bookProps && (y.Props = d, y.Custprops = _), r.bookSheets && typeof f < "u" && (y.SheetNames = f), r.bookSheets ? y.SheetNames : r.bookProps)) return y;
  f = {};
  var m = {};
  r.bookDeps && i.calcchain && (m = hk(ft(e, aa(i.calcchain)), i.calcchain));
  var g = 0, S = {}, E, A;
  {
    var X = v.Sheets;
    d.Worksheets = X.length, d.SheetNames = [];
    for (var U = 0; U != X.length; ++U) d.SheetNames[U] = X[U].name;
  }
  var F = s ? "bin" : "xml", B = i.workbooks[0].lastIndexOf("/"), L = (i.workbooks[0].slice(0, B + 1) + "_rels/" + i.workbooks[0].slice(B + 1) + ".rels").replace(/^\//, "");
  ia(e, L) || (L = "xl/_rels/workbook." + F + ".rels");
  var K = Oi(Vt(e, L, true), L.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = xk(ft(e, aa(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = Hg(ft(e, aa(i.people[0])), r)), K && (K = M4(K, v.Sheets));
  var G = ft(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (g = 0; g != d.Worksheets; ++g) {
    var te = "sheet";
    if (K && K[g] ? (E = "xl/" + K[g][1].replace(/[\/]?xl\//, ""), ia(e, E) || (E = K[g][1]), ia(e, E) || (E = L.replace(/_rels\/[\S\s]*$/, "") + K[g][1]), te = K[g][2]) : (E = "xl/worksheets/sheet" + (g + 1 - G) + "." + F, E = E.replace(/sheet0\./, "sheet.")), A = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
      case "number":
        if (g != r.sheets) continue e;
        break;
      case "string":
        if (d.SheetNames[g].toLowerCase() != r.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(r.sheets)) {
          for (var de = false, Ve = 0; Ve != r.sheets.length; ++Ve) typeof r.sheets[Ve] == "number" && r.sheets[Ve] == g && (de = 1), typeof r.sheets[Ve] == "string" && r.sheets[Ve].toLowerCase() == d.SheetNames[g].toLowerCase() && (de = 1);
          if (!de) continue e;
        }
    }
    W4(e, E, A, d.SheetNames[g], g, S, f, te, r, v, u, h);
  }
  return y = { Directory: i, Workbook: v, Props: d, Custprops: _, Deps: m, Sheets: f, SheetNames: d.SheetNames, Strings: Ri, Styles: h, Themes: u, SSF: Hr(nr) }, r && r.bookFiles && (e.files ? (y.keys = n, y.files = e.files) : (y.keys = [], y.files = {}, e.FullPaths.forEach(function(ge, $e) {
    ge = ge.replace(/^Root Entry[\/]/, ""), y.keys.push(ge), y.files[ge] = e.FileIndex[$e];
  }))), r && r.bookVBA && (i.vba.length > 0 ? y.vbaraw = ft(e, aa(i.vba[0]), true) : i.defaults && i.defaults.bin === zg && (y.vbaraw = ft(e, "xl/vbaProject.bin", true))), y.bookType = s ? "xlsb" : "xlsx", y;
}
function V4(e, r) {
  var t = r || {}, a = "Workbook", n = ir.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (im(n.content), a = "/!DataSpaces/DataSpaceMap", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = fm(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = om(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    um(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = lm(n.content);
  if (a = "/EncryptedPackage", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function X4(e, r) {
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (fi(), f0(e.SSF), r.revssf = c0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Pi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = true, n = eo();
  ho(r = r || {});
  var i = Xf(), s = "", f = 0;
  if (r.cellXfs = [], xn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", lr(i, s, ll(e.Props, r)), n.coreprops.push(s), Nr(r.rels, 2, s, _r.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && c.push(e.SheetNames[u]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, lr(i, s, xl(e.Props)), n.extprops.push(s), Nr(r.rels, 3, s, _r.EXT_PROPS), e.Custprops !== e.Props && jr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", lr(i, s, pl(e.Custprops)), n.custprops.push(s), Nr(r.rels, 4, s, _r.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, lr(i, s, by(f - 1, r, e, v)), n.sheets.push(s), Nr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, _r.WS[0]), d) {
      var _ = d["!comments"], y = false, m = "";
      if (_ && _.length > 0) {
        var g = false;
        _.forEach(function(E) {
          E[1].forEach(function(A) {
            A.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", lr(i, m, Kl(_, h, r)), n.threadedcomments.push(m), Nr(v, -1, "../threadedComments/threadedComment" + f + ".xml", _r.TCMNT)), m = "xl/comments" + f + "." + t, lr(i, m, Gg(_)), n.comments.push(m), Nr(v, -1, "../comments" + f + "." + t, _r.CMNT), y = true;
      }
      d["!legacy"] && y && lr(i, "xl/drawings/vmlDrawing" + f + ".vml", Xl(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && lr(i, Gi(s), Qn(v));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, lr(i, s, nm(r.Strings)), n.strs.push(s), Nr(r.wbrels, -1, "sharedStrings." + t, _r.SST)), s = "xl/workbook." + t, lr(i, s, ak(e)), n.workbooks.push(s), Nr(r.rels, 1, s, _r.WB), s = "xl/theme/theme1.xml";
  var S = so(e.Themes, r);
  return lr(i, s, S), n.themes.push(s), Nr(r.wbrels, -1, "theme/theme1.xml", _r.THEME), s = "xl/styles." + t, lr(i, s, og(e, r)), n.styles.push(s), Nr(r.wbrels, -1, "styles." + t, _r.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", lr(i, s, e.vbaraw), n.vba.push(s), Nr(r.wbrels, -1, "vbaProject.bin", _r.VBA)), s = "xl/metadata." + t, lr(i, s, Ag()), n.metadata.push(s), Nr(r.wbrels, -1, "metadata." + t, _r.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", lr(i, s, jl(h)), n.people.push(s), Nr(r.wbrels, -1, "persons/person.xml", _r.PEOPLE)), lr(i, "[Content_Types].xml", ol(n, r)), lr(i, "_rels/.rels", Qn(r.rels)), lr(i, "xl/_rels/workbook." + t + ".rels", Qn(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function K4(e, r) {
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (fi(), f0(e.SSF), r.revssf = c0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Pi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = Yg.indexOf(r.bookType) > -1, n = eo();
  ho(r = r || {});
  var i = Xf(), s = "", f = 0;
  if (r.cellXfs = [], xn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", lr(i, s, ll(e.Props, r)), n.coreprops.push(s), Nr(r.rels, 2, s, _r.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && c.push(e.SheetNames[u]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, lr(i, s, xl(e.Props)), n.extprops.push(s), Nr(r.rels, 3, s, _r.EXT_PROPS), e.Custprops !== e.Props && jr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", lr(i, s, pl(e.Custprops)), n.custprops.push(s), Nr(r.rels, 4, s, _r.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, lr(i, s, dw(f - 1, r, e, v)), n.sheets.push(s), Nr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, _r.WS[0]), d) {
      var _ = d["!comments"], y = false, m = "";
      if (_ && _.length > 0) {
        var g = false;
        _.forEach(function(S) {
          S[1].forEach(function(E) {
            E.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", lr(i, m, Kl(_, h, r)), n.threadedcomments.push(m), Nr(v, -1, "../threadedComments/threadedComment" + f + ".xml", _r.TCMNT)), m = "xl/comments" + f + "." + t, lr(i, m, Ug(_)), n.comments.push(m), Nr(v, -1, "../comments" + f + "." + t, _r.CMNT), y = true;
      }
      d["!legacy"] && y && lr(i, "xl/drawings/vmlDrawing" + f + ".vml", Xl(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && lr(i, Gi(s), Qn(v));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, lr(i, s, Qv(r.Strings, r)), n.strs.push(s), Nr(r.wbrels, -1, "sharedStrings." + t, _r.SST)), s = "xl/workbook." + t, lr(i, s, Hy(e)), n.workbooks.push(s), Nr(r.rels, 1, s, _r.WB), s = "xl/theme/theme1.xml", lr(i, s, so(e.Themes, r)), n.themes.push(s), Nr(r.wbrels, -1, "theme/theme1.xml", _r.THEME), s = "xl/styles." + t, lr(i, s, Wm(e, r)), n.styles.push(s), Nr(r.wbrels, -1, "styles." + t, _r.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", lr(i, s, e.vbaraw), n.vba.push(s), Nr(r.wbrels, -1, "vbaProject.bin", _r.VBA)), s = "xl/metadata." + t, lr(i, s, Dg()), n.metadata.push(s), Nr(r.wbrels, -1, "metadata." + t, _r.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", lr(i, s, jl(h)), n.people.push(s), Nr(r.wbrels, -1, "persons/person.xml", _r.PEOPLE)), lr(i, "[Content_Types].xml", ol(n, r)), lr(i, "_rels/.rels", Qn(r.rels)), lr(i, "xl/_rels/workbook." + t + ".rels", Qn(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function xo(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = Qt(e.slice(0, 12));
      break;
    case "binary":
      t = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (r && r.type || "undefined"));
  }
  return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3), t.charCodeAt(4), t.charCodeAt(5), t.charCodeAt(6), t.charCodeAt(7)];
}
function j4(e, r) {
  return ir.find(e, "EncryptedPackage") ? V4(e, r) : uh(e, r);
}
function G4(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = vr && Buffer.isBuffer(e) ? "buffer" : "base64"), t = Lu(a, n), H4(t, n);
}
function Th(e, r) {
  var t = 0;
  e: for (; t < e.length; ) switch (e.charCodeAt(t)) {
    case 10:
    case 13:
    case 32:
      ++t;
      break;
    case 60:
      return Af(e.slice(t), r);
    default:
      break e;
  }
  return ii.to_workbook(e, r);
}
function z4(e, r) {
  var t = "", a = xo(e, r);
  switch (r.type) {
    case "base64":
      t = Qt(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = Cn(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (t = Pr(t)), r.type = "binary", Th(t, r);
}
function $4(e, r) {
  var t = e;
  return r.type == "base64" && (t = Qt(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = vr && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : B1(t.slice(2)) : yu(t.slice(2)), r.type = "binary", Th(t, r);
}
function q4(e) {
  return e.match(/[^\x00-\x7F]/) ? Ia(e) : e;
}
function vf(e, r, t, a) {
  return a ? (t.type = "string", ii.to_workbook(e, t)) : ii.to_workbook(r, t);
}
function ai(e, r) {
  Bf();
  var t = r || {};
  if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return ai(new Uint8Array(e), (t = Hr(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return ai(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = false;
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), ei = {}, t.dateNF && (ei.dateNF = t.dateNF), t.type || (t.type = vr && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = vr ? "buffer" : "binary", a = xd(e), typeof Uint8Array < "u" && !vr && (t.type = "array")), t.type == "string" && (i = true, t.type = "binary", t.codepage = 65001, a = q4(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo) return t = Hr(t), t.type = "array", ai(Lf(a), t);
  }
  switch ((n = xo(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return j4(ir.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return uh(a, t);
      break;
    case 60:
      return Af(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return Xv(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return Nl.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? G4(a, t) : vf(e, a, t, i);
    case 239:
      return n[3] === 60 ? Af(a, t) : vf(e, a, t, i);
    case 255:
      if (n[1] === 254) return $4(a, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return Sn.to_workbook(a, t);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9))) return Sn.to_workbook(a, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Ff.to_workbook(a, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116) return Em(a, t);
      break;
    case 10:
    case 13:
    case 32:
      return z4(a, t);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
    case 8:
      if (n[1] === 231) throw new Error("Unsupported Multiplan 1.x file!");
      break;
    case 12:
      if (n[1] === 236) throw new Error("Unsupported Multiplan 2.x file!");
      if (n[1] === 237) throw new Error("Unsupported Multiplan 3.x file!");
      break;
  }
  return Vv.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Ff.to_workbook(a, t) : vf(e, a, t, i);
}
function Sh(e, r) {
  switch (r.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      r.type = "";
      break;
    case "file":
      return ts(r.file, ir.write(e, { type: vr ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return ir.write(e, r);
}
function Y4(e, r) {
  switch (r.bookType) {
    case "ods":
      return gh(e, r);
    case "numbers":
      return O4(e, r);
    case "xlsb":
      return X4(e, r);
    default:
      return K4(e, r);
  }
}
function Z4(e, r) {
  var t = Hr(r || {}), a = Y4(e, t);
  return J4(a, t);
}
function J4(e, r) {
  var t = {}, a = vr ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (r.compression && (t.compression = "DEFLATE"), r.password) t.type = a;
  else switch (r.type) {
    case "base64":
      t.type = "base64";
      break;
    case "binary":
      t.type = "string";
      break;
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    case "buffer":
    case "file":
      t.type = a;
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  var n = e.FullPaths ? ir.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[t.type] || t.type, compression: !!r.compression }) : e.generate(t);
  if (typeof Deno < "u" && typeof n == "string") {
    if (r.type == "binary" || r.type == "base64") return n;
    n = new Uint8Array(s0(n));
  }
  return r.password && typeof encrypt_agile < "u" ? Sh(encrypt_agile(n, r.password), r) : r.type === "file" ? ts(r.file, n) : r.type == "string" ? Pr(n) : n;
}
function Q4(e, r) {
  var t = r || {}, a = Hk(e, t);
  return Sh(a, t);
}
function ba(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return qs(Ia(a));
    case "binary":
      return Ia(a);
    case "string":
      return e;
    case "file":
      return ts(r.file, a, "utf8");
    case "buffer":
      return vr ? Na(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : ba(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function eE(e, r) {
  switch (r.type) {
    case "base64":
      return M1(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return ts(r.file, e, "binary");
    case "buffer":
      return vr ? Na(e, "binary") : e.split("").map(function(t) {
        return t.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Vs(e, r) {
  switch (r.type) {
    case "string":
    case "base64":
    case "binary":
      for (var t = "", a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
      return r.type == "base64" ? qs(t) : r.type == "string" ? Pr(t) : t;
    case "file":
      return ts(r.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
}
function bh(e, r) {
  Bf(), My(e);
  var t = Hr(r || {});
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), t.type == "array") {
    t.type = "binary";
    var a = bh(e, t);
    return t.type = "array", s0(a);
  }
  var n = 0;
  if (t.sheet && (typeof t.sheet == "number" ? n = t.sheet : n = e.SheetNames.indexOf(t.sheet), !e.SheetNames[n])) throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
  switch (t.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return ba(Rk(e, t), t);
    case "slk":
    case "sylk":
      return ba(Ol.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return ba(dh(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return eE(Fh(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return ba(po(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return ba(Nl.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "dbf":
      return Vs(Ff.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return ba(ii.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "rtf":
      return ba(Tm(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return ba(Rl.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "fods":
      return ba(gh(e, t), t);
    case "wk1":
      return Vs(Sn.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Vs(Sn.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Vs(hh(e, t), t);
    case "biff5":
      t.biff || (t.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return t.biff || (t.biff = 8), Q4(e, t);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Z4(e, t);
    default:
      throw new Error("Unrecognized bookType |" + t.bookType + "|");
  }
}
function rE(e) {
  if (!e.bookType) {
    var r = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" }, t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = r[e.bookType] || e.bookType;
  }
}
function tE(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, rE(a), bh(e, a);
}
function aE(e, r, t, a, n, i, s) {
  var f = br(t), c = s.defval, u = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), h = true, v = e["!data"] != null, d = n === 1 ? [] : {};
  if (n !== 1) if (Object.defineProperty) try {
    Object.defineProperty(d, "__rowNum__", { value: t, enumerable: false });
  } catch {
    d.__rowNum__ = t;
  }
  else d.__rowNum__ = t;
  if (!v || e["!data"][t]) for (var x = r.s.c; x <= r.e.c; ++x) {
    var _ = v ? (e["!data"][t] || [])[x] : e[a[x] + f];
    if (_ == null || _.t === void 0) {
      if (c === void 0) continue;
      i[x] != null && (d[i[x]] = c);
      continue;
    }
    var y = _.v;
    switch (_.t) {
      case "z":
        if (y == null) break;
        continue;
      case "e":
        y = y == 0 ? null : void 0;
        break;
      case "s":
      case "b":
      case "n":
        if (!_.z || !ua(_.z) || (y = Va(y), typeof y == "number")) break;
      case "d":
        s && (s.UTC || s.raw === false) || (y = Dn(new Date(y)));
        break;
      default:
        throw new Error("unrecognized type " + _.t);
    }
    if (i[x] != null) {
      if (y == null) if (_.t == "e" && y === null) d[i[x]] = null;
      else if (c !== void 0) d[i[x]] = c;
      else if (u && y === null) d[i[x]] = null;
      else continue;
      else d[i[x]] = (_.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : u) ? y : ja(_, y, s);
      y != null && (h = false);
    }
  }
  return { row: d, isempty: h };
}
function Of(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, u = r || {}, h = u.range != null ? u.range : e["!ref"];
  switch (u.header === 1 ? a = 1 : u.header === "A" ? a = 2 : Array.isArray(u.header) ? a = 3 : u.header == null && (a = 0), typeof h) {
    case "string":
      c = Dr(h);
      break;
    case "number":
      c = Dr(e["!ref"]), c.s.r = h;
      break;
    default:
      c = h;
  }
  a > 0 && (n = 0);
  var v = br(c.s.r), d = [], x = [], _ = 0, y = 0, m = e["!data"] != null, g = c.s.r, S = 0, E = {};
  m && !e["!data"][g] && (e["!data"][g] = []);
  var A = u.skipHidden && e["!cols"] || [], X = u.skipHidden && e["!rows"] || [];
  for (S = c.s.c; S <= c.e.c; ++S) if (!(A[S] || {}).hidden) switch (d[S] = mr(S), t = m ? e["!data"][g][S] : e[d[S] + v], a) {
    case 1:
      i[S] = S - c.s.c;
      break;
    case 2:
      i[S] = d[S];
      break;
    case 3:
      i[S] = u.header[S - c.s.c];
      break;
    default:
      if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = ja(t, null, u), y = E[s] || 0, !y) E[s] = 1;
      else {
        do
          f = s + "_" + y++;
        while (E[f]);
        E[s] = y, E[f] = 1;
      }
      i[S] = f;
  }
  for (g = c.s.r + n; g <= c.e.r; ++g) if (!(X[g] || {}).hidden) {
    var U = aE(e, c, g, d, a, i, u);
    (U.isempty === false || (a === 1 ? u.blankrows !== false : u.blankrows)) && (x[_++] = U.row);
  }
  return x.length = _, x;
}
var cu = /"/g;
function nE(e, r, t, a, n, i, s, f, c) {
  for (var u = true, h = [], v = "", d = br(t), x = e["!data"] != null, _ = x && e["!data"][t] || [], y = r.s.c; y <= r.e.c; ++y) if (a[y]) {
    var m = x ? _[y] : e[a[y] + d];
    if (m == null) v = "";
    else if (m.v != null) {
      u = false, v = "" + (c.rawNumbers && m.t == "n" ? m.v : ja(m, null, c));
      for (var g = 0, S = 0; g !== v.length; ++g) if ((S = v.charCodeAt(g)) === n || S === i || S === 34 || c.forceQuotes) {
        v = '"' + v.replace(cu, '""') + '"';
        break;
      }
      v == "ID" && f == 0 && h.length == 0 && (v = '"ID"');
    } else m.f != null && !m.F ? (u = false, v = "=" + m.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(cu, '""') + '"')) : v = "";
    h.push(v);
  }
  if (c.strip) for (; h[h.length - 1] === ""; ) --h.length;
  return c.blankrows === false && u ? null : h.join(s);
}
function po(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Dr(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), u = "", h = [], v = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], x = n.s.c; x <= n.e.c; ++x) (v[x] || {}).hidden || (h[x] = mr(x));
  for (var _ = 0, y = n.s.r; y <= n.e.r; ++y) (d[y] || {}).hidden || (u = nE(e, n, y, h, s, c, i, _, a), u != null && (u || a.blankrows !== false) && t.push((_++ ? f : "") + u));
  return t.join("");
}
function Fh(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = po(e, r);
  return t;
}
function iE(e, r) {
  var t = "", a, n = "";
  if (e == null || e["!ref"] == null) return [];
  var i = Dr(e["!ref"]), s = "", f = [], c, u = [], h = e["!data"] != null;
  for (c = i.s.c; c <= i.e.c; ++c) f[c] = mr(c);
  for (var v = i.s.r; v <= i.e.r; ++v) for (s = br(v), c = i.s.c; c <= i.e.c; ++c) if (t = f[c] + s, a = h ? (e["!data"][v] || [])[c] : e[t], n = "", a !== void 0) {
    if (a.F != null) {
      if (t = a.F, !a.f) continue;
      n = a.f, t.indexOf(":") == -1 && (t = t + ":" + t);
    }
    if (a.f != null) n = a.f;
    else {
      if (r && r.values === false) continue;
      if (a.t == "z") continue;
      if (a.t == "n" && a.v != null) n = "" + a.v;
      else if (a.t == "b") n = a.v ? "TRUE" : "FALSE";
      else if (a.w !== void 0) n = "'" + a.w;
      else {
        if (a.v === void 0) continue;
        a.t == "s" ? n = "'" + a.v : n = "" + a.v;
      }
    }
    u[u.length] = t + "=" + n;
  }
  return u;
}
function Ah(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = +!a.skipHeader, s = e || {};
  !e && n && (s["!data"] = []);
  var f = 0, c = 0;
  if (s && a.origin != null) if (typeof a.origin == "number") f = a.origin;
  else {
    var u = typeof a.origin == "string" ? Br(a.origin) : a.origin;
    f = u.r, c = u.c;
  }
  var h = { s: { c: 0, r: 0 }, e: { c, r: f + r.length - 1 + i } };
  if (s["!ref"]) {
    var v = Dr(s["!ref"]);
    h.e.c = Math.max(h.e.c, v.e.c), h.e.r = Math.max(h.e.r, v.e.r), f == -1 && (f = v.e.r + 1, h.e.r = f + r.length - 1 + i);
  } else f == -1 && (f = 0, h.e.r = r.length - 1 + i);
  var d = a.header || [], x = 0, _ = [];
  r.forEach(function(m, g) {
    n && !s["!data"][f + g + i] && (s["!data"][f + g + i] = []), n && (_ = s["!data"][f + g + i]), jr(m).forEach(function(S) {
      (x = d.indexOf(S)) == -1 && (d[x = d.length] = S);
      var E = m[S], A = "z", X = "", U = n ? "" : mr(c + x) + br(f + g + i), F = n ? _[c + x] : s[U];
      E && typeof E == "object" && !(E instanceof Date) ? n ? _[c + x] = E : s[U] = E : (typeof E == "number" ? A = "n" : typeof E == "boolean" ? A = "b" : typeof E == "string" ? A = "s" : E instanceof Date ? (A = "d", a.UTC || (E = u0(E)), a.cellDates || (A = "n", E = qr(E)), X = F != null && F.z && ua(F.z) ? F.z : a.dateNF || nr[14]) : E === null && a.nullError && (A = "e", E = 0), F ? (F.t = A, F.v = E, delete F.w, delete F.R, X && (F.z = X)) : n ? _[c + x] = F = { t: A, v: E } : s[U] = F = { t: A, v: E }, X && (F.z = X));
    });
  }), h.e.c = Math.max(h.e.c, c + d.length - 1);
  var y = br(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (x = 0; x < d.length; ++x) n ? s["!data"][f][x + c] = { t: "s", v: d[x] } : s[mr(x + c) + y] = { t: "s", v: d[x] };
  return s["!ref"] = dr(h), s;
}
function sE(e, r) {
  return Ah(null, e, r);
}
function rs(e, r, t) {
  if (typeof r == "string") {
    if (e["!data"] != null) {
      var a = Br(r);
      return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? rs(e, wr(r)) : rs(e, mr(t || 0) + br(r));
}
function fE(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function vo(e, r) {
  var t = { SheetNames: [], Sheets: {} };
  return e && us(t, e, r || "Sheet1"), t;
}
function us(e, r, t, a) {
  var n = 1;
  if (!t) for (; n <= 65535 && e.SheetNames.indexOf(t = "Sheet" + n) != -1; ++n, t = void 0) ;
  if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(t) >= 0 && t.length < 32) {
    var i = t.match(/\d+$/);
    n = i && +i[0] || 0;
    var s = i && t.slice(0, i.index) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf(t = s + n) != -1; ++n) ;
  }
  if (sh(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), e.Sheets[t] = r, t;
}
function oE(e, r, t) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = fE(e, r);
  switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), t) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + t);
  }
  e.Workbook.Sheets[a].Hidden = t;
}
function cE(e, r) {
  return e.z = r, e;
}
function Ch(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function uE(e, r, t) {
  return Ch(e, "#" + r, t);
}
function lE(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function hE(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Dr(r), i = typeof r == "string" ? r : dr(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var c = rs(e, s, f);
    c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = t, a && (c.D = true));
  }
  var u = wt(e["!ref"]);
  return u.s.r > n.s.r && (u.s.r = n.s.r), u.s.c > n.s.c && (u.s.c = n.s.c), u.e.r < n.e.r && (u.e.r = n.e.r), u.e.c < n.e.c && (u.e.c = n.e.c), e["!ref"] = dr(u), e;
}
var vt = { encode_col: mr, encode_row: br, encode_cell: wr, encode_range: dr, decode_col: qf, decode_row: $f, split_cell: tx, decode_cell: Br, decode_range: wt, format_cell: ja, sheet_new: ax, sheet_add_aoa: tl, sheet_add_json: Ah, sheet_add_dom: xh, aoa_to_sheet: oi, json_to_sheet: sE, table_to_sheet: ph, table_to_book: u4, sheet_to_csv: po, sheet_to_txt: Fh, sheet_to_json: Of, sheet_to_html: dh, sheet_to_formulae: iE, sheet_to_row_object_array: Of, sheet_get_cell: rs, book_new: vo, book_append_sheet: us, book_set_sheet_visibility: oE, cell_set_number_format: cE, cell_set_hyperlink: Ch, cell_set_internal_link: uE, cell_add_comment: lE, sheet_set_array_formula: hE, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
const Dh = pu({ data: [] }), Ih = ["ACCESSION NUMBER", "BOOK NAME", "ISBN NUMBER", "BOOK TYPE", "AUTHOR", "PUBLISHED DATE", "NUM OF PAGES", "IMAGE LINKS", "LANGUAGE"];
const _oa = class _oa {
  constructor() {
    __publicField(this, "workbook", null);
    __publicField(this, "worksheet", {});
    __publicField(this, "sheetName", "");
    __publicField(this, "m_jsonSpreadsheet", []);
  }
  createNewSpreadsheet() {
    if (localStorage.getItem("renderSpreadsheet") === "true") {
      Da.spreadsheets.toArray().then((t) => {
        this.workbook = vt.book_new(), this.worksheet = vt.json_to_sheet(t), vt.book_append_sheet(this.workbook, this.worksheet, "Books");
      });
      return;
    }
    this.workbook = vt.book_new(), this.worksheet = vt.aoa_to_sheet([Jo]), vt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = vt.sheet_to_json(this.worksheet, { defval: "N/A" }), localStorage.setItem("renderSpreadsheet", "true");
  }
  static init(r = "") {
    return _oa.instance = new _oa(), _oa.instance.createNewSpreadsheet(), _oa.instance;
  }
  mapToSpreadsheetData(r) {
    return r.map((t) => {
      const a = Object.values(t), n = {};
      return Jo.forEach((i, s) => {
        n[i] = a[s] !== void 0 ? a[s] : "";
      }), n;
    });
  }
  async loadWorkbook(r) {
    try {
      const n = await Da.spreadsheets.toArray();
      if (n.length > 0) return console.log(`Loading ${n.length} records from IndexedDB...`), this.workbook = vt.book_new(), this.worksheet = vt.json_to_sheet(n), vt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = n, console.log("Loaded Existing Data Form Database: ", this.m_jsonSpreadsheet), this.m_jsonSpreadsheet;
    } catch (n) {
      console.error("Error checking IndexedDB:", n);
    }
    const a = await (await fetch(r)).arrayBuffer();
    this.workbook = ai(a), this.sheetName = this.workbook.SheetNames[0], this.worksheet = this.workbook.Sheets[this.sheetName], this.m_jsonSpreadsheet = vt.sheet_to_json(this.worksheet, { defval: "N/A" });
    try {
      console.log("Storing spreadsheet data to database..."), console.log(this.m_jsonSpreadsheet);
      const n = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);
      console.log("Records to be added to the database: ", n), console.log("Record[0] to be added to the database: ", n[0]), await Da.spreadsheets.add(n[0]), console.log(`Stored ${n.length} records to IndexedDB`);
    } catch (n) {
      console.error("Error loading data to IndexedDB:", n);
    }
    return this.m_jsonSpreadsheet;
  }
  static getInstance() {
    return _oa.instance || (_oa.instance = _oa.init()), _oa.instance;
  }
  getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }
  async loadFromDatabase() {
    const r = await Da.spreadsheets.toArray();
    return this.m_jsonSpreadsheet = r, console.log("In Database: ", r), r;
  }
  insertSpreadsheet(r) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }
    vt.sheet_add_aoa(this.worksheet, [r], { origin: -1 });
    const t = vt.sheet_to_json(this.worksheet, { defval: "N/A" });
    this.m_jsonSpreadsheet = t, console.log(" Outside Saving new data to IndexedDB...");
    try {
      const a = this.mapToSpreadsheetData([r]);
      console.log("Records to be added to the database: ", a), console.log("Record[0] to be added to the database: ", a[0]), Da.spreadsheets.add(a[0]).then((n) => {
        console.log("Saving new data to IndexedDB..."), console.log("The id save to the database is: ", n);
      }).catch((n) => {
        console.error("cannot save to the database: ", n);
      }), console.log(`Stored ${a.length} records to IndexedDB`);
    } catch (a) {
      console.error("Error saving to IndexedDB:", a);
    }
    return [...t];
  }
  updateSpreadsheet(r, t = "N/A") {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }
    console.log("jsonSpreadsheet", this.m_jsonSpreadsheet);
    const a = this.findRowIndexByIsbn(r);
    if (a === -1) {
      console.error("Cannot update, ISBN not found:", r);
      return;
    }
    console.log("isbn found has rowIndex: ", a);
    const n = a + 1;
    vt.sheet_add_aoa(this.worksheet, [[t]], { origin: { r: n, c: 0 } });
    const i = vt.sheet_to_json(this.worksheet, { defval: "N/A" });
    this.m_jsonSpreadsheet = i, this.renderSpreadsheet(), this.scrollToView(a);
  }
  renderSpreadsheet() {
    Dh.data = [...this.m_jsonSpreadsheet];
  }
  findRowIndexByIsbn(r) {
    const t = this.m_jsonSpreadsheet.findIndex((a) => a.isbn === r);
    return t === -1 && console.error("Row with the given ISBN not found."), t;
  }
  scrollToView(r = -1) {
    var _a2, _b;
    const t = document.querySelector("tbody"), n = (_a2 = t == null ? void 0 : t.childNodes) == null ? void 0 : _a2.item(r);
    r === -1 && ((_b = t == null ? void 0 : t.lastElementChild) == null ? void 0 : _b.scrollIntoView({ behavior: "smooth", block: "end" })), setTimeout(() => {
      n == null ? void 0 : n.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 0);
  }
  DownloadSpreadSheet() {
    const r = [{ wch: 10 }, { wch: 50 }, { wch: 18 }, { wch: 50 }, { wch: 18 }, { wch: 10 }, { wch: 15 }, { wch: 25 }, { wch: 10 }];
    if (this.workbook) {
      this.worksheet["!cols"] = r;
      let t = vt.book_new();
      vt.book_append_sheet(t, this.worksheet, "Books"), vt.sheet_add_aoa(this.worksheet, [Ih], { origin: 0 }), tE(t, "backup.xlsx");
    } else console.error("Workbook is not loaded.");
  }
};
__publicField(_oa, "instance");
let oa = _oa;
async function dE(e) {
  var _a2, _b, _c2, _d2, _e2;
  const t = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e}`)).json();
  if (console.log("Used google Api: ", ((_a2 = t == null ? void 0 : t.items) == null ? void 0 : _a2.length) > 0), t.items && t.items.length > 0) {
    const a = t.items[0].volumeInfo;
    return console.log("used  google books api: ", a), { title: a.title, authors: ((_b = a.authors) == null ? void 0 : _b.map((n) => ({ name: n }))) || [], publish_date: a.publishedDate, number_of_pages: a.pageCount, cover: { small: (_c2 = a.imageLinks) == null ? void 0 : _c2.thumbnail, large: (_d2 = a.imageLinks) == null ? void 0 : _d2.large }, subjects: ((_e2 = a.categories) == null ? void 0 : _e2.map((n) => ({ name: n }))) || [], languages: a.language ? [{ key: `/languages/${a.language}` }] : [] };
  }
}
async function xE(e) {
  const t = await (await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${e}&format=json&jscmd=data`)).json();
  return console.log("used OpenLibAPI: ", Object.keys(t).length !== 0), t[`ISBN:${e}`];
}
async function pE(e) {
  var _a2;
  const r = "https://corsproxy.io/?", t = `https://isbnsearch.org/search?s=${e}`;
  try {
    const n = await (await fetch(r + encodeURIComponent(t))).text(), f = new DOMParser().parseFromString(n, "text/html").querySelector(".bookinfo");
    if (!f) return console.error("Book info container not found"), null;
    const c = (_a2 = f.textContent) == null ? void 0 : _a2.trim().split(`
`).map((u) => u.trim());
    return vE(c);
  } catch (a) {
    return console.error("Error fetching ISBN:", a), null;
  }
}
function vE(e) {
  let r = { title: "", "isbn-13": "", "isbn-10": "", author: "", publish_date: "" };
  return e.forEach((t, a) => {
    a === 0 ? r.title = t.trim() : t.startsWith("ISBN-13:") ? r["isbn-13"] = t.replace("ISBN-13:", "").trim() : t.startsWith("ISBN-10:") ? r["isbn-10"] = t.replace("ISBN-10:", "").trim() : t.startsWith("Author:") ? r.author = t.replace("Author:", "").trim() : t.startsWith("Published:") && (r.publish_date = t.replace("Published:", "").trim());
  }), console.log("Parsed Result: ", r), r;
}
function mE(e) {
  let r = false;
  return e.forEach((t) => {
    t.value ? r = true : (t.classList.add("required"), r = false);
  }), r;
}
function uu(e) {
  let r = "";
  return e.forEach((t) => r += t.value), r;
}
function gE(e) {
  e.forEach((r) => r.value = ""), e[0].focus();
}
async function Gs(e, r = false) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
  let t, a = r, n, i = "";
  console.log("isbn: ", e);
  const s = await Oh(e);
  if (s) return console.log("used DB: ", s), `You have done that isbn already the Book Name is: ${s.book_name}`;
  if (t = await xE(e) || await dE(e), console.log("Isbn Details: ", t), t) i = "Isbn Found Please Input the accession Number";
  else return a || (n = (_a2 = await pE(e)) == null ? void 0 : _a2["isbn-13"]), n ? await Gs(n, true) : (a = true, i = "No details found for the given ISBN from both sources.", i);
  const f = ["N/A", t == null ? void 0 : t.title, e, ((_c2 = (_b = t == null ? void 0 : t.subjects) == null ? void 0 : _b[0]) == null ? void 0 : _c2.name) ?? "N/A", (_e2 = (_d2 = t == null ? void 0 : t.authors) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.name, t == null ? void 0 : t.publish_date, t == null ? void 0 : t.number_of_pages, ((_f2 = t == null ? void 0 : t.cover) == null ? void 0 : _f2.large) ?? "N/A", ((_h2 = (_g2 = t == null ? void 0 : t.languages) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.key) ? (_j = (_i = t == null ? void 0 : t.languages) == null ? void 0 : _i[0]) == null ? void 0 : _j.key.replace("/languages/", "").toUpperCase() : "English"], c = oa.getInstance();
  c.insertSpreadsheet(f), c.renderSpreadsheet();
  const u = setTimeout(() => {
    c.scrollToView(), clearTimeout(u);
  }, 500);
  return i;
}
async function Oh(e) {
  return await Da.spreadsheets.get({ isbn: e });
}
var _E = hn('<input type="text" maxlength="1" required inputmode="numeric"/>'), wE = hn('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja"> </div> <!></div>'), yE = hn('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja">Accession No:</div> <input type="text" name="accession" id="accession-input" maxlength="20" class="svelte-f3psja"/></div>'), kE = hn('<div class="message svelte-f3psja"> </div> <!> <button id="search" class="svelte-f3psja"> </button>', 1);
function qE(e, r) {
  vu(r, true);
  const t = (U, F = g1) => {
    var B = _E();
    B.__keydown = u, bi((L) => {
      A1(B, 1, `input-${F() + 1}`, "svelte-f3psja"), $o(B, "name", L), $o(B, "id", `input-${F() + 1}`);
    }, [() => F().toString()]), nn(U, B);
  };
  let a = k1(r, "message", 15), n = pu({ value: false, isbn: "" }), i = zo(13), s = zo(false), f;
  async function c() {
    const U = document.querySelectorAll('input[maxlength="1"]');
    n.isbn = uu(U), a(await Gs(n.isbn));
  }
  async function u(U) {
    const F = document.querySelectorAll('input[maxlength="1"]'), B = parseInt(U.key), L = U.target, K = U.key === "Backspace", G = L.nextElementSibling, te = L.previousElementSibling;
    if (L.classList.remove("required"), K) {
      if (U.preventDefault(), L.value == "") {
        te && te.focus();
        return;
      }
      L.value = "";
      return;
    }
    switch (isNaN(B) || (U.preventDefault(), L.value == "", L.value = U.key, G && G.focus()), U.key) {
      case "Tab":
        v(U);
        break;
      case "ArrowLeft":
        U.preventDefault(), te && te.focus();
        break;
      case "ArrowRight":
        U.preventDefault(), G && G.focus();
        break;
      case "ArrowUp":
        U.preventDefault(), te && te.focus();
        break;
      case "ArrowDown":
        U.preventDefault(), G && G.focus();
        break;
      case "Enter":
        if (U.preventDefault(), !mE(F)) return;
        n.isbn = uu(F), gE(F), h(), await Oh(n.isbn), a(await Gs(n.isbn));
        break;
    }
  }
  function h() {
    const U = document.querySelectorAll("input[maxlength='1']");
    if (et(i) === 13) {
      const F = [9, 7, 8];
      for (let B = 0; B < 3; B++) U.item(B).value = F[B].toString();
      setTimeout(() => {
        U.item(3).focus();
      }, 0);
    }
    if (et(i) === 10) {
      for (let F = 0; F < 10; F++) U.item(F).value = "";
      setTimeout(() => {
        U.item(0).focus();
      }, 0);
    }
  }
  function v(U) {
    U.preventDefault(), Yn(i, et(i) === 13 ? 10 : 13, true);
  }
  Go(() => {
    h();
  });
  async function d(U, F) {
    var _a2;
    U.preventDefault();
    const B = ((_a2 = U.clipboardData) == null ? void 0 : _a2.getData("text")) || "";
    if (console.log("pasted Text Raw: ", B), n.isbn = B.replace(/\D/g, "").slice(0, 13), n.isbn.length > 0) {
      Yn(s, true);
      for (let L = 0; L < n.isbn.length && L < F.length; L++) F[L].value = n.isbn[L], F[L].classList.add("paste-fill"), setTimeout(() => {
        F[L].classList.remove("paste-fill");
      }, 100 * (L + 1));
      n.isbn.length === 13 || n.isbn.length === 10 || n.isbn.length === 9 ? setTimeout(async () => {
        a(await Gs(n.isbn)), Yn(s, false);
      }, 200 * n.isbn.length) : Yn(s, false);
    }
  }
  let x;
  Go(() => {
    a() !== "Isbn Found Please Input the accession Number" ? setTimeout(() => {
      a("");
    }, 4e3) : (n.value = true, setTimeout(() => {
      f.value = "", f.focus();
    }, 0));
  }), lu(() => {
    h();
    const U = document.querySelectorAll('input[maxlength="1"]'), F = [...U];
    x = oa.getInstance(), U.forEach((B) => B.addEventListener("focus", (L) => {
      const K = L.target, G = K.value;
      K.value = "", K.value = G;
    })), window.addEventListener("paste", (B) => {
      d(B, F);
    });
  });
  var _ = kE(), y = mu(_), m = Ca(y, true);
  qt(y);
  var g = qn(y, 2);
  {
    var S = (U) => {
      var F = wE(), B = Ca(F), L = Ca(B);
      qt(B);
      var K = qn(B, 2);
      Ks(K, 17, () => ({ length: et(i) }), Xs, (G, te, de) => {
        t(G, () => de);
      }), qt(F), bi(() => Fi(L, `ISBN-${et(i) ?? ""}:`)), nn(U, F);
    }, E = (U) => {
      var F = yE(), B = qn(Ca(F), 2);
      wu(B, (L) => f = L, () => f), qt(F), nn(U, F);
    };
    y1(g, (U) => {
      n.value ? U(E, false) : U(S);
    });
  }
  var A = qn(g, 2);
  A.__click = async () => {
    if (n.value) {
      const U = f.value.trim();
      if (U === "") {
        a("Please enter a valid accession number.");
        return;
      }
      x.updateSpreadsheet(n.isbn, U), a(`Accession number ${U} added for ISBN ${n.isbn}.`), n.value = false;
      const F = Da.spreadsheets.update(n.isbn, { accession: U });
      console.log("dbIndex: ", F);
    } else await c();
  };
  var X = Ca(A, true);
  qt(A), bi(() => {
    Fi(m, a()), Fi(X, n.value ? "Update Accession Number" : "Search For ISBN");
  }), nn(e, _), gu();
}
_u(["keydown", "click"]);
var EE = hn('<th class="svelte-f5kcat"> </th>'), TE = hn('<td class="svelte-f5kcat"> </td>'), SE = hn('<tr class="svelte-f5kcat"></tr>'), bE = hn('<div class="isbn-details svelte-f5kcat"><table class="svelte-f5kcat"><thead class="svelte-f5kcat"><tr class="svelte-f5kcat"></tr></thead><tbody class="svelte-f5kcat"></tbody></table></div> <button class="download-excel svelte-f5kcat">Download Excel Sheet</button>', 1);
function YE(e, r) {
  vu(r, false);
  let t = gf(), a = gf();
  lu(async () => {
    Yn(t, oa.getInstance()), await et(t).loadFromDatabase(), et(t).renderSpreadsheet(), et(a).addEventListener("dblclick", (d) => {
      var _a2;
      const x = d.target, _ = x.closest("tr"), y = _.childNodes[2].textContent, m = _.childNodes[0], g = m.cloneNode(true);
      (_a2 = m.parentNode) == null ? void 0 : _a2.replaceChild(g, m);
      const S = _.childNodes[0];
      if (S.contentEditable = "true", S.textContent === "N/A") S.textContent = "\u200B", S.focus();
      else {
        S.focus();
        const E = document.createRange();
        E.selectNodeContents(S), E.collapse(false);
        const A = window.getSelection();
        A == null ? void 0 : A.removeAllRanges(), A == null ? void 0 : A.addRange(E);
      }
      S.addEventListener("blur", () => {
        S.contentEditable = "false", S.textContent == "\u200B" && (S.textContent = "N/A"), et(t).updateSpreadsheet(y), et(t).renderSpreadsheet();
        const E = Da.spreadsheets.update(y, { accession: S.textContent });
        console.log("dbIndex: ", E);
      }, { once: true }), et(t).renderSpreadsheet(), console.log("Real Target: ", x), console.log("Row chosen: ", x.closest("tr")), console.log(y);
    });
    const v = setTimeout(() => {
      et(t).scrollToView(), clearTimeout(v);
    }, 500);
  }), E1();
  var n = bE(), i = mu(n), s = Ca(i), f = Ca(s), c = Ca(f);
  Ks(c, 5, () => Ih, Xs, (v, d) => {
    var x = EE(), _ = Ca(x, true);
    qt(x), bi(() => Fi(_, et(d))), nn(v, x);
  }), qt(c), qt(f);
  var u = qn(f);
  Ks(u, 5, () => Dh.data, Xs, (v, d) => {
    var x = SE();
    Ks(x, 5, () => Object.entries(et(d)), Xs, (_, y) => {
      var m = _1(() => w1(et(y), 2));
      let g = () => et(m)[1];
      var S = TE(), E = Ca(S, true);
      qt(S), bi(() => Fi(E, g())), nn(_, S);
    }), qt(x), nn(v, x);
  }), qt(u), wu(u, (v) => Yn(a, v), () => et(a)), qt(s), qt(i);
  var h = qn(i, 2);
  h.__click = () => et(t).DownloadSpreadSheet.call(et(t)), nn(e, n), gu();
}
_u(["click"]);
export {
  qE as I,
  YE as S,
  oa as a
};
