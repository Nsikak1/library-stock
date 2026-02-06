var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { f as xn, a as sn } from "./Bw-Wuv52.js";
import { o as Lf } from "./DzzNYz1_.js";
import { n as q0, W as e1, a0 as Y0, h as nn, at as r1, X as t1, g as tr, a5 as a1, Z as n1, _ as i1, $ as Zo, a1 as Z0, m as s1, t as Ds, ah as f1, aB as o1, al as Jo, j as c1, aQ as Ua, o as yf, af as Qo, aN as js, az as Mf, aR as l1, aS as u1, aT as h1, aU as d1, r as ml, l as gl, aV as J0, av as x1, ay as p1, k as v1, aW as _l, q as m1, aX as g1, a6 as wl, p as Uf, c as fn, Q as ma, R as zt, P as Jn, a as Si, b as Wf, s as At, E as Q0, x as _1, f as yl, aY as w1, aO as y1, aZ as k1 } from "./SbAXgMIg.js";
import { s as Qn } from "./BKasJPZb.js";
import { p as ef, i as E1 } from "./GWIgz6Mc.js";
import { s as ec } from "./HVy_KHCI.js";
import { d as Hf } from "./k-CT1vo6.js";
import { b as kf } from "./BOS2cBk9.js";
import { i as T1 } from "./QIZ8oGIf.js";
import "./CqW8gm3D.js";
function Gs(e, r) {
  return r;
}
function S1(e, r, t) {
  for (var a = [], n = r.length, i, s = r.length, f = 0; f < n; f++) {
    let v = r[f];
    gl(v, () => {
      if (i) {
        if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
          var d = e.outrogroups;
          Ef(Mf(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else s -= 1;
    }, false);
  }
  if (s === 0) {
    var o = a.length === 0 && t !== null;
    if (o) {
      var l = t, h = l.parentNode;
      p1(h), h.append(l), e.items.clear();
    }
    Ef(r, !o);
  } else i = { pending: new Set(r), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Ef(e, r = true) {
  for (var t = 0; t < e.length; t++) v1(e[t], r);
}
var rc;
function zs(e, r, t, a, n, i = null) {
  var s = e, f = /* @__PURE__ */ new Map(), o = (r & _l) !== 0;
  if (o) {
    var l = e;
    s = nn ? Y0(r1(l)) : l.appendChild(q0());
  }
  nn && t1();
  var h = null, v = a1(() => {
    var g = t();
    return l1(g) ? g : g == null ? [] : Mf(g);
  }), d, x = true;
  function _() {
    m.fallback = h, b1(m, d, s, r, a), h !== null && (d.length === 0 ? (h.f & Ua) === 0 ? ml(h) : (h.f ^= Ua, bi(h, null, s)) : gl(h, () => {
      h = null;
    }));
  }
  var y = e1(() => {
    d = tr(v);
    var g = d.length;
    let S = false;
    if (nn) {
      var E = n1(s) === i1;
      E !== (g === 0) && (s = Zo(), Y0(s), Z0(false), S = true);
    }
    for (var A = /* @__PURE__ */ new Set(), M = c1, G = s1(), F = 0; F < g; F += 1) {
      nn && Ds.nodeType === f1 && Ds.data === o1 && (s = Ds, S = true, Z0(false));
      var U = d[F], D = a(U, F), H = x ? null : f.get(D);
      H ? (H.v && Jo(H.v, U), H.i && Jo(H.i, F), G && M.skipped_effects.delete(H.e)) : (H = F1(f, x ? s : rc ?? (rc = q0()), U, D, F, n, r, t), x || (H.e.f |= Ua), f.set(D, H)), A.add(D);
    }
    if (g === 0 && i && !h && (x ? h = yf(() => i(s)) : (h = yf(() => i(rc ?? (rc = q0()))), h.f |= Ua)), nn && g > 0 && Y0(Zo()), !x) if (G) {
      for (const [K, ee] of f) A.has(K) || M.skipped_effects.add(ee.e);
      M.oncommit(_), M.ondiscard(() => {
      });
    } else _();
    S && Z0(true), tr(v);
  }), m = { effect: y, items: f, outrogroups: null, fallback: h };
  x = false, nn && (s = Ds);
}
function b1(e, r, t, a, n) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i;
  var i = (a & g1) !== 0, s = r.length, f = e.items, o = e.effect.first, l, h = null, v, d = [], x = [], _, y, m, g;
  if (i) for (g = 0; g < s; g += 1) _ = r[g], y = n(_, g), m = f.get(y).e, (m.f & Ua) === 0 && ((_b = (_a2 = m.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(m));
  for (g = 0; g < s; g += 1) {
    if (_ = r[g], y = n(_, g), m = f.get(y).e, e.outrogroups !== null) for (const H of e.outrogroups) H.pending.delete(m), H.done.delete(m);
    if ((m.f & Ua) !== 0) if (m.f ^= Ua, m === o) bi(m, null, t);
    else {
      var S = h ? h.next : o;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), tn(e, h, m), tn(e, m, S), bi(m, S, t), h = m, d = [], x = [], o = h.next;
      continue;
    }
    if ((m.f & J0) !== 0 && (ml(m), i && ((_d2 = (_c2 = m.nodes) == null ? void 0 : _c2.a) == null ? void 0 : _d2.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(m))), m !== o) {
      if (l !== void 0 && l.has(m)) {
        if (d.length < x.length) {
          var E = x[0], A;
          h = E.prev;
          var M = d[0], G = d[d.length - 1];
          for (A = 0; A < d.length; A += 1) bi(d[A], E, t);
          for (A = 0; A < x.length; A += 1) l.delete(x[A]);
          tn(e, M.prev, G.next), tn(e, h, M), tn(e, G, E), o = E, h = G, g -= 1, d = [], x = [];
        } else l.delete(m), bi(m, o, t), tn(e, m.prev, m.next), tn(e, m, h === null ? e.effect.first : h.next), tn(e, h, m), h = m;
        continue;
      }
      for (d = [], x = []; o !== null && o !== m; ) (l ?? (l = /* @__PURE__ */ new Set())).add(o), x.push(o), o = o.next;
      if (o === null) continue;
    }
    (m.f & Ua) === 0 && d.push(m), h = m, o = m.next;
  }
  if (e.outrogroups !== null) {
    for (const H of e.outrogroups) H.pending.size === 0 && (Ef(Mf(H.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(H));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var F = [];
    if (l !== void 0) for (m of l) (m.f & J0) === 0 && F.push(m);
    for (; o !== null; ) (o.f & J0) === 0 && o !== e.fallback && F.push(o), o = o.next;
    var U = F.length;
    if (U > 0) {
      var D = (a & _l) !== 0 && s === 0 ? t : null;
      if (i) {
        for (g = 0; g < U; g += 1) (_g2 = (_f2 = F[g].nodes) == null ? void 0 : _f2.a) == null ? void 0 : _g2.measure();
        for (g = 0; g < U; g += 1) (_i = (_h2 = F[g].nodes) == null ? void 0 : _h2.a) == null ? void 0 : _i.fix();
      }
      S1(e, F, D);
    }
  }
  i && m1(() => {
    var _a3, _b2;
    if (v !== void 0) for (m of v) (_b2 = (_a3 = m.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
  });
}
function F1(e, r, t, a, n, i, s, f) {
  var o = (s & u1) !== 0 ? (s & h1) === 0 ? js(t, false, false) : Qo(t) : null, l = (s & d1) !== 0 ? Qo(n) : null;
  return { v: o, i: l, e: yf(() => (i(r, o ?? t, l ?? n, f), () => {
    e.delete(a);
  })) };
}
function bi(e, r, t) {
  if (e.nodes) for (var a = e.nodes.start, n = e.nodes.end, i = r && (r.f & Ua) === 0 ? r.nodes.start : t; a !== null; ) {
    var s = x1(a);
    if (i.before(a), a === n) return;
    a = s;
  }
}
function tn(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function A1(e, r, t) {
  var a = e == null ? "" : "" + e;
  return a = a ? a + " " + r : r, a === "" ? null : a;
}
function C1(e, r, t, a, n, i) {
  var s = e.__className;
  if (nn || s !== t || s === void 0) {
    var f = A1(t, a);
    (!nn || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = t;
  }
  return i;
}
var I1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $s = { exports: {} }, O1 = $s.exports, tc;
function N1() {
  return tc || (tc = 1, (function(e, r) {
    (function(t, a) {
      e.exports = a();
    })(O1, function() {
      var t = function(c, u) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, w) {
          p.__proto__ = w;
        } || function(p, w) {
          for (var k in w) Object.prototype.hasOwnProperty.call(w, k) && (p[k] = w[k]);
        })(c, u);
      }, a = function() {
        return (a = Object.assign || function(c) {
          for (var u, p = 1, w = arguments.length; p < w; p++) for (var k in u = arguments[p]) Object.prototype.hasOwnProperty.call(u, k) && (c[k] = u[k]);
          return c;
        }).apply(this, arguments);
      };
      function n(c, u, p) {
        for (var w, k = 0, T = u.length; k < T; k++) !w && k in u || ((w = w || Array.prototype.slice.call(u, 0, k))[k] = u[k]);
        return c.concat(w || Array.prototype.slice.call(u));
      }
      var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : I1, s = Object.keys, f = Array.isArray;
      function o(c, u) {
        return typeof u != "object" || s(u).forEach(function(p) {
          c[p] = u[p];
        }), c;
      }
      typeof Promise > "u" || i.Promise || (i.Promise = Promise);
      var l = Object.getPrototypeOf, h = {}.hasOwnProperty;
      function v(c, u) {
        return h.call(c, u);
      }
      function d(c, u) {
        typeof u == "function" && (u = u(l(c))), (typeof Reflect > "u" ? s : Reflect.ownKeys)(u).forEach(function(p) {
          _(c, p, u[p]);
        });
      }
      var x = Object.defineProperty;
      function _(c, u, p, w) {
        x(c, u, o(p && v(p, "get") && typeof p.get == "function" ? { get: p.get, set: p.set, configurable: true } : { value: p, configurable: true, writable: true }, w));
      }
      function y(c) {
        return { from: function(u) {
          return c.prototype = Object.create(u.prototype), _(c.prototype, "constructor", c), { extend: d.bind(null, c.prototype) };
        } };
      }
      var m = Object.getOwnPropertyDescriptor, g = [].slice;
      function S(c, u, p) {
        return g.call(c, u, p);
      }
      function E(c, u) {
        return u(c);
      }
      function A(c) {
        if (!c) throw new Error("Assertion Failed");
      }
      function M(c) {
        i.setImmediate ? setImmediate(c) : setTimeout(c, 0);
      }
      function G(c, u) {
        if (typeof u == "string" && v(c, u)) return c[u];
        if (!u) return c;
        if (typeof u != "string") {
          for (var p = [], w = 0, k = u.length; w < k; ++w) {
            var T = G(c, u[w]);
            p.push(T);
          }
          return p;
        }
        var N = u.indexOf(".");
        if (N !== -1) {
          var V = c[u.substr(0, N)];
          return V == null ? void 0 : G(V, u.substr(N + 1));
        }
      }
      function F(c, u, p) {
        if (c && u !== void 0 && !("isFrozen" in Object && Object.isFrozen(c))) if (typeof u != "string" && "length" in u) {
          A(typeof p != "string" && "length" in p);
          for (var w = 0, k = u.length; w < k; ++w) F(c, u[w], p[w]);
        } else {
          var T, N, V = u.indexOf(".");
          V !== -1 ? (T = u.substr(0, V), (N = u.substr(V + 1)) === "" ? p === void 0 ? f(c) && !isNaN(parseInt(T)) ? c.splice(T, 1) : delete c[T] : c[T] = p : F(V = !(V = c[T]) || !v(c, T) ? c[T] = {} : V, N, p)) : p === void 0 ? f(c) && !isNaN(parseInt(u)) ? c.splice(u, 1) : delete c[u] : c[u] = p;
        }
      }
      function U(c) {
        var u, p = {};
        for (u in c) v(c, u) && (p[u] = c[u]);
        return p;
      }
      var D = [].concat;
      function H(c) {
        return D.apply([], c);
      }
      var Jr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(H([8, 16, 32, 64].map(function(c) {
        return ["Int", "Uint", "Float"].map(function(u) {
          return u + c + "Array";
        });
      }))).filter(function(c) {
        return i[c];
      }), K = new Set(Jr.map(function(c) {
        return i[c];
      })), ee = null;
      function de(c) {
        return ee = /* @__PURE__ */ new WeakMap(), c = (function u(p) {
          if (!p || typeof p != "object") return p;
          var w = ee.get(p);
          if (w) return w;
          if (f(p)) {
            w = [], ee.set(p, w);
            for (var k = 0, T = p.length; k < T; ++k) w.push(u(p[k]));
          } else if (K.has(p.constructor)) w = p;
          else {
            var N, V = l(p);
            for (N in w = V === Object.prototype ? {} : Object.create(V), ee.set(p, w), p) v(p, N) && (w[N] = u(p[N]));
          }
          return w;
        })(c), ee = null, c;
      }
      var Pe = {}.toString;
      function me(c) {
        return Pe.call(c).slice(8, -1);
      }
      var ze = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ke = typeof ze == "symbol" ? function(c) {
        var u;
        return c != null && (u = c[ze]) && u.apply(c);
      } : function() {
        return null;
      };
      function Be(c, u) {
        return u = c.indexOf(u), 0 <= u && c.splice(u, 1), 0 <= u;
      }
      var Qe = {};
      function he(c) {
        var u, p, w, k;
        if (arguments.length === 1) {
          if (f(c)) return c.slice();
          if (this === Qe && typeof c == "string") return [c];
          if (k = ke(c)) {
            for (p = []; !(w = k.next()).done; ) p.push(w.value);
            return p;
          }
          if (c == null) return [c];
          if (typeof (u = c.length) != "number") return [c];
          for (p = new Array(u); u--; ) p[u] = c[u];
          return p;
        }
        for (u = arguments.length, p = new Array(u); u--; ) p[u] = arguments[u];
        return p;
      }
      var fr = typeof Symbol < "u" ? function(c) {
        return c[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      }, Oe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], na = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Oe), Me = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Te(c, u) {
        this.name = c, this.message = u;
      }
      function ye(c, u) {
        return c + ". Errors: " + Object.keys(u).map(function(p) {
          return u[p].toString();
        }).filter(function(p, w, k) {
          return k.indexOf(p) === w;
        }).join(`
`);
      }
      function je(c, u, p, w) {
        this.failures = u, this.failedKeys = w, this.successCount = p, this.message = ye(c, u);
      }
      function Ge(c, u) {
        this.name = "BulkError", this.failures = Object.keys(u).map(function(p) {
          return u[p];
        }), this.failuresByPos = u, this.message = ye(c, this.failures);
      }
      y(Te).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), y(je).from(Te), y(Ge).from(Te);
      var Ze = na.reduce(function(c, u) {
        return c[u] = u + "Error", c;
      }, {}), P = Te, W = na.reduce(function(c, u) {
        var p = u + "Error";
        function w(k, T) {
          this.name = p, k ? typeof k == "string" ? (this.message = "".concat(k).concat(T ? `
 ` + T : ""), this.inner = T || null) : typeof k == "object" && (this.message = "".concat(k.name, " ").concat(k.message), this.inner = k) : (this.message = Me[u] || p, this.inner = null);
        }
        return y(w).from(P), c[u] = w, c;
      }, {});
      W.Syntax = SyntaxError, W.Type = TypeError, W.Range = RangeError;
      var z = Oe.reduce(function(c, u) {
        return c[u + "Error"] = W[u], c;
      }, {}), X = na.reduce(function(c, u) {
        return ["Syntax", "Type", "Range"].indexOf(u) === -1 && (c[u + "Error"] = W[u]), c;
      }, {});
      function le() {
      }
      function O(c) {
        return c;
      }
      function Ce(c, u) {
        return c == null || c === O ? u : function(p) {
          return u(c(p));
        };
      }
      function We(c, u) {
        return function() {
          c.apply(this, arguments), u.apply(this, arguments);
        };
      }
      function Se(c, u) {
        return c === le ? u : function() {
          var p = c.apply(this, arguments);
          p !== void 0 && (arguments[0] = p);
          var w = this.onsuccess, k = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var T = u.apply(this, arguments);
          return w && (this.onsuccess = this.onsuccess ? We(w, this.onsuccess) : w), k && (this.onerror = this.onerror ? We(k, this.onerror) : k), T !== void 0 ? T : p;
        };
      }
      function nr(c, u) {
        return c === le ? u : function() {
          c.apply(this, arguments);
          var p = this.onsuccess, w = this.onerror;
          this.onsuccess = this.onerror = null, u.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? We(p, this.onsuccess) : p), w && (this.onerror = this.onerror ? We(w, this.onerror) : w);
        };
      }
      function rr(c, u) {
        return c === le ? u : function(p) {
          var w = c.apply(this, arguments);
          o(p, w);
          var k = this.onsuccess, T = this.onerror;
          return this.onsuccess = null, this.onerror = null, p = u.apply(this, arguments), k && (this.onsuccess = this.onsuccess ? We(k, this.onsuccess) : k), T && (this.onerror = this.onerror ? We(T, this.onerror) : T), w === void 0 ? p === void 0 ? void 0 : p : o(w, p);
        };
      }
      function or(c, u) {
        return c === le ? u : function() {
          return u.apply(this, arguments) !== false && c.apply(this, arguments);
        };
      }
      function Ir(c, u) {
        return c === le ? u : function() {
          var p = c.apply(this, arguments);
          if (p && typeof p.then == "function") {
            for (var w = this, k = arguments.length, T = new Array(k); k--; ) T[k] = arguments[k];
            return p.then(function() {
              return u.apply(w, T);
            });
          }
          return u.apply(this, arguments);
        };
      }
      X.ModifyError = je, X.DexieError = Te, X.BulkError = Ge;
      var Er = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Kr(c) {
        Er = c;
      }
      var $e = {}, Tr = 100, Jr = typeof Promise > "u" ? [] : (function() {
        var c = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [c, l(c), c];
        var u = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [u, l(u), c];
      })(), Oe = Jr[0], na = Jr[1], Jr = Jr[2], na = na && na.then, qr = Oe && Oe.constructor, Ur = !!Jr, yt = function(c, u) {
        Ea.push([c, u]), Ke && (queueMicrotask(E0), Ke = false);
      }, xt = true, Ke = true, kr = [], jr = [], zr = O, pt = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: le, pgp: false, env: {}, finalize: le }, Je = pt, Ea = [], Ta = 0, mn = [];
      function Xe(c) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var u = this._PSD = Je;
        if (typeof c != "function") {
          if (c !== $e) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === false && qa(this, this._value));
        }
        this._state = null, this._value = null, ++u.ref, (function p(w, k) {
          try {
            k(function(T) {
              if (w._state === null) {
                if (T === w) throw new TypeError("A promise cannot be resolved with itself.");
                var N = w._lib && Ya();
                T && typeof T.then == "function" ? p(w, function(V, q) {
                  T instanceof Xe ? T._then(V, q) : T.then(V, q);
                }) : (w._state = true, w._value = T, xs(w)), N && Za();
              }
            }, qa.bind(null, w));
          } catch (T) {
            qa(w, T);
          }
        })(this, c);
      }
      var hi = { get: function() {
        var c = Je, u = B;
        function p(w, k) {
          var T = this, N = !c.global && (c !== Je || u !== B), V = N && !L(), q = new Xe(function(Y, re) {
            di(T, new ds(Ee(w, c, N, V), Ee(k, c, N, V), Y, re, c));
          });
          return this._consoleTask && (q._consoleTask = this._consoleTask), q;
        }
        return p.prototype = $e, p;
      }, set: function(c) {
        _(this, "then", c && c.prototype === $e ? hi : { get: function() {
          return c;
        }, set: hi.set });
      } };
      function ds(c, u, p, w, k) {
        this.onFulfilled = typeof c == "function" ? c : null, this.onRejected = typeof u == "function" ? u : null, this.resolve = p, this.reject = w, this.psd = k;
      }
      function qa(c, u) {
        var p, w;
        jr.push(u), c._state === null && (p = c._lib && Ya(), u = zr(u), c._state = false, c._value = u, w = c, kr.some(function(k) {
          return k._value === w._value;
        }) || kr.push(w), xs(c), p && Za());
      }
      function xs(c) {
        var u = c._listeners;
        c._listeners = [];
        for (var p = 0, w = u.length; p < w; ++p) di(c, u[p]);
        var k = c._PSD;
        --k.ref || k.finalize(), Ta === 0 && (++Ta, yt(function() {
          --Ta == 0 && xi();
        }, []));
      }
      function di(c, u) {
        if (c._state !== null) {
          var p = c._state ? u.onFulfilled : u.onRejected;
          if (p === null) return (c._state ? u.resolve : u.reject)(c._value);
          ++u.psd.ref, ++Ta, yt(k0, [p, c, u]);
        } else c._listeners.push(u);
      }
      function k0(c, u, p) {
        try {
          var w, k = u._value;
          !u._state && jr.length && (jr = []), w = Er && u._consoleTask ? u._consoleTask.run(function() {
            return c(k);
          }) : c(k), u._state || jr.indexOf(k) !== -1 || (function(T) {
            for (var N = kr.length; N; ) if (kr[--N]._value === T._value) return kr.splice(N, 1);
          })(u), p.resolve(w);
        } catch (T) {
          p.reject(T);
        } finally {
          --Ta == 0 && xi(), --p.psd.ref || p.psd.finalize();
        }
      }
      function E0() {
        ie(pt, function() {
          Ya() && Za();
        });
      }
      function Ya() {
        var c = xt;
        return Ke = xt = false, c;
      }
      function Za() {
        var c, u, p;
        do
          for (; 0 < Ea.length; ) for (c = Ea, Ea = [], p = c.length, u = 0; u < p; ++u) {
            var w = c[u];
            w[0].apply(null, w[1]);
          }
        while (0 < Ea.length);
        Ke = xt = true;
      }
      function xi() {
        var c = kr;
        kr = [], c.forEach(function(w) {
          w._PSD.onunhandled.call(null, w._value, w);
        });
        for (var u = mn.slice(0), p = u.length; p; ) u[--p]();
      }
      function Vn(c) {
        return new Xe($e, false, c);
      }
      function Wr(c, u) {
        var p = Je;
        return function() {
          var w = Ya(), k = Je;
          try {
            return ne(p, true), c.apply(this, arguments);
          } catch (T) {
            u && u(T);
          } finally {
            ne(k, false), w && Za();
          }
        };
      }
      d(Xe.prototype, { then: hi, _then: function(c, u) {
        di(this, new ds(null, null, c, u, Je));
      }, catch: function(c) {
        if (arguments.length === 1) return this.then(null, c);
        var u = c, p = arguments[1];
        return typeof u == "function" ? this.then(null, function(w) {
          return (w instanceof u ? p : Vn)(w);
        }) : this.then(null, function(w) {
          return (w && w.name === u ? p : Vn)(w);
        });
      }, finally: function(c) {
        return this.then(function(u) {
          return Xe.resolve(c()).then(function() {
            return u;
          });
        }, function(u) {
          return Xe.resolve(c()).then(function() {
            return Vn(u);
          });
        });
      }, timeout: function(c, u) {
        var p = this;
        return c < 1 / 0 ? new Xe(function(w, k) {
          var T = setTimeout(function() {
            return k(new W.Timeout(u));
          }, c);
          p.then(w, k).finally(clearTimeout.bind(null, T));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && _(Xe.prototype, Symbol.toStringTag, "Dexie.Promise"), pt.env = ce(), d(Xe, { all: function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(u, p) {
          c.length === 0 && u([]);
          var w = c.length;
          c.forEach(function(k, T) {
            return Xe.resolve(k).then(function(N) {
              c[T] = N, --w || u(c);
            }, p);
          });
        });
      }, resolve: function(c) {
        return c instanceof Xe ? c : c && typeof c.then == "function" ? new Xe(function(u, p) {
          c.then(u, p);
        }) : new Xe($e, true, c);
      }, reject: Vn, race: function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(u, p) {
          c.map(function(w) {
            return Xe.resolve(w).then(u, p);
          });
        });
      }, PSD: { get: function() {
        return Je;
      }, set: function(c) {
        return Je = c;
      } }, totalEchoes: { get: function() {
        return B;
      } }, newPSD: I, usePSD: ie, scheduler: { get: function() {
        return yt;
      }, set: function(c) {
        yt = c;
      } }, rejectionMapper: { get: function() {
        return zr;
      }, set: function(c) {
        zr = c;
      } }, follow: function(c, u) {
        return new Xe(function(p, w) {
          return I(function(k, T) {
            var N = Je;
            N.unhandleds = [], N.onunhandled = T, N.finalize = We(function() {
              var V, q = this;
              V = function() {
                q.unhandleds.length === 0 ? k() : T(q.unhandleds[0]);
              }, mn.push(function Y() {
                V(), mn.splice(mn.indexOf(Y), 1);
              }), ++Ta, yt(function() {
                --Ta == 0 && xi();
              }, []);
            }, N.finalize), c();
          }, u, p, w);
        });
      } }), qr && (qr.allSettled && _(Xe, "allSettled", function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(u) {
          c.length === 0 && u([]);
          var p = c.length, w = new Array(p);
          c.forEach(function(k, T) {
            return Xe.resolve(k).then(function(N) {
              return w[T] = { status: "fulfilled", value: N };
            }, function(N) {
              return w[T] = { status: "rejected", reason: N };
            }).then(function() {
              return --p || u(w);
            });
          });
        });
      }), qr.any && typeof AggregateError < "u" && _(Xe, "any", function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(u, p) {
          c.length === 0 && p(new AggregateError([]));
          var w = c.length, k = new Array(w);
          c.forEach(function(T, N) {
            return Xe.resolve(T).then(function(V) {
              return u(V);
            }, function(V) {
              k[N] = V, --w || p(new AggregateError(k));
            });
          });
        });
      }), qr.withResolvers && (Xe.withResolvers = qr.withResolvers));
      var nt = { awaits: 0, echoes: 0, id: 0 }, T0 = 0, Xn = [], b = 0, B = 0, C = 0;
      function I(c, u, p, w) {
        var k = Je, T = Object.create(k);
        return T.parent = k, T.ref = 0, T.global = false, T.id = ++C, pt.env, T.env = Ur ? { Promise: Xe, PromiseProp: { value: Xe, configurable: true, writable: true }, all: Xe.all, race: Xe.race, allSettled: Xe.allSettled, any: Xe.any, resolve: Xe.resolve, reject: Xe.reject } : {}, u && o(T, u), ++k.ref, T.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, w = ie(T, c, p, w), T.ref === 0 && T.finalize(), w;
      }
      function R() {
        return nt.id || (nt.id = ++T0), ++nt.awaits, nt.echoes += Tr, nt.id;
      }
      function L() {
        return !!nt.awaits && (--nt.awaits == 0 && (nt.id = 0), nt.echoes = nt.awaits * Tr, true);
      }
      function fe(c) {
        return nt.echoes && c && c.constructor === qr ? (R(), c.then(function(u) {
          return L(), u;
        }, function(u) {
          return L(), Ie(u);
        })) : c;
      }
      function xe() {
        var c = Xn[Xn.length - 1];
        Xn.pop(), ne(c, false);
      }
      function ne(c, u) {
        var p, w = Je;
        (u ? !nt.echoes || b++ && c === Je : !b || --b && c === Je) || queueMicrotask(u ? (function(k) {
          ++B, nt.echoes && --nt.echoes != 0 || (nt.echoes = nt.awaits = nt.id = 0), Xn.push(Je), ne(k, true);
        }).bind(null, c) : xe), c !== Je && (Je = c, w === pt && (pt.env = ce()), Ur && (p = pt.env.Promise, u = c.env, (w.global || c.global) && (Object.defineProperty(i, "Promise", u.PromiseProp), p.all = u.all, p.race = u.race, p.resolve = u.resolve, p.reject = u.reject, u.allSettled && (p.allSettled = u.allSettled), u.any && (p.any = u.any))));
      }
      function ce() {
        var c = i.Promise;
        return Ur ? { Promise: c, PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"), all: c.all, race: c.race, allSettled: c.allSettled, any: c.any, resolve: c.resolve, reject: c.reject } : {};
      }
      function ie(c, u, p, w, k) {
        var T = Je;
        try {
          return ne(c, true), u(p, w, k);
        } finally {
          ne(T, false);
        }
      }
      function Ee(c, u, p, w) {
        return typeof c != "function" ? c : function() {
          var k = Je;
          p && R(), ne(u, true);
          try {
            return c.apply(this, arguments);
          } finally {
            ne(k, false), w && queueMicrotask(L);
          }
        };
      }
      function Ne(c) {
        Promise === qr && nt.echoes === 0 ? b === 0 ? c() : enqueueNativeMicroTask(c) : setTimeout(c, 0);
      }
      ("" + na).indexOf("[native code]") === -1 && (R = L = le);
      var Ie = Xe.reject, we = "\uFFFF", be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", Nr = [], Hr = "__dbnames", it = "readonly", Pa = "readwrite";
      function qt(c, u) {
        return c ? u ? function() {
          return c.apply(this, arguments) && u.apply(this, arguments);
        } : c : u;
      }
      var Ja = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function aa(c) {
        return typeof c != "string" || /\./.test(c) ? function(u) {
          return u;
        } : function(u) {
          return u[c] === void 0 && c in u && delete (u = de(u))[c], u;
        };
      }
      function Kn() {
        throw W.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function lr(c, u) {
        try {
          var p = So(c), w = So(u);
          if (p !== w) return p === "Array" ? 1 : w === "Array" ? -1 : p === "binary" ? 1 : w === "binary" ? -1 : p === "string" ? 1 : w === "string" ? -1 : p === "Date" ? 1 : w !== "Date" ? NaN : -1;
          switch (p) {
            case "number":
            case "Date":
            case "string":
              return u < c ? 1 : c < u ? -1 : 0;
            case "binary":
              return (function(k, T) {
                for (var N = k.length, V = T.length, q = N < V ? N : V, Y = 0; Y < q; ++Y) if (k[Y] !== T[Y]) return k[Y] < T[Y] ? -1 : 1;
                return N === V ? 0 : N < V ? -1 : 1;
              })(bo(c), bo(u));
            case "Array":
              return (function(k, T) {
                for (var N = k.length, V = T.length, q = N < V ? N : V, Y = 0; Y < q; ++Y) {
                  var re = lr(k[Y], T[Y]);
                  if (re !== 0) return re;
                }
                return N === V ? 0 : N < V ? -1 : 1;
              })(c, u);
          }
        } catch {
        }
        return NaN;
      }
      function So(c) {
        var u = typeof c;
        return u != "object" ? u : ArrayBuffer.isView(c) ? "binary" : (c = me(c), c === "ArrayBuffer" ? "binary" : c);
      }
      function bo(c) {
        return c instanceof Uint8Array ? c : ArrayBuffer.isView(c) ? new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : new Uint8Array(c);
      }
      function ps(c, u, p) {
        var w = c.schema.yProps;
        return w ? (u && 0 < p.numFailures && (u = u.filter(function(k, T) {
          return !p.failures[T];
        })), Promise.all(w.map(function(k) {
          return k = k.updatesTable, u ? c.db.table(k).where("k").anyOf(u).delete() : c.db.table(k).clear();
        })).then(function() {
          return p;
        })) : p;
      }
      var pi = (Fo.prototype.execute = function(c) {
        var u = this["@@propmod"];
        if (u.add !== void 0) {
          var p = u.add;
          if (f(p)) return n(n([], f(c) ? c : [], true), p).sort();
          if (typeof p == "number") return (Number(c) || 0) + p;
          if (typeof p == "bigint") try {
            return BigInt(c) + p;
          } catch {
            return BigInt(0) + p;
          }
          throw new TypeError("Invalid term ".concat(p));
        }
        if (u.remove !== void 0) {
          var w = u.remove;
          if (f(w)) return f(c) ? c.filter(function(k) {
            return !w.includes(k);
          }).sort() : [];
          if (typeof w == "number") return Number(c) - w;
          if (typeof w == "bigint") try {
            return BigInt(c) - w;
          } catch {
            return BigInt(0) - w;
          }
          throw new TypeError("Invalid subtrahend ".concat(w));
        }
        return p = (p = u.replacePrefix) === null || p === void 0 ? void 0 : p[0], p && typeof c == "string" && c.startsWith(p) ? u.replacePrefix[1] + c.substring(p.length) : c;
      }, Fo);
      function Fo(c) {
        this["@@propmod"] = c;
      }
      function Ao(c, u) {
        for (var p = s(u), w = p.length, k = false, T = 0; T < w; ++T) {
          var N = p[T], V = u[N], q = G(c, N);
          V instanceof pi ? (F(c, N, V.execute(q)), k = true) : q !== V && (F(c, N, V), k = true);
        }
        return k;
      }
      var Co = (Xr.prototype._trans = function(c, u, p) {
        var w = this._tx || Je.trans, k = this.name, T = Er && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(c === "readonly" ? "read" : "write", " ").concat(this.name));
        function N(Y, re, j) {
          if (!j.schema[k]) throw new W.NotFound("Table " + k + " not part of transaction");
          return u(j.idbtrans, j);
        }
        var V = Ya();
        try {
          var q = w && w.db._novip === this.db._novip ? w === Je.trans ? w._promise(c, N, p) : I(function() {
            return w._promise(c, N, p);
          }, { trans: w, transless: Je.transless || Je }) : (function Y(re, j, ae, Z) {
            if (re.idbdb && (re._state.openComplete || Je.letThrough || re._vip)) {
              var J = re._createTransaction(j, ae, re._dbSchema);
              try {
                J.create(), re._state.PR1398_maxLoop = 3;
              } catch (Q) {
                return Q.name === Ze.InvalidState && re.isOpen() && 0 < --re._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), re.close({ disableAutoOpen: false }), re.open().then(function() {
                  return Y(re, j, ae, Z);
                })) : Ie(Q);
              }
              return J._promise(j, function(Q, te) {
                return I(function() {
                  return Je.trans = J, Z(Q, te, J);
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
            if (re._state.openComplete) return Ie(new W.DatabaseClosed(re._state.dbOpenError));
            if (!re._state.isBeingOpened) {
              if (!re._state.autoOpen) return Ie(new W.DatabaseClosed());
              re.open().catch(le);
            }
            return re._state.dbReadyPromise.then(function() {
              return Y(re, j, ae, Z);
            });
          })(this.db, c, [this.name], N);
          return T && (q._consoleTask = T, q = q.catch(function(Y) {
            return console.trace(Y), Ie(Y);
          })), q;
        } finally {
          V && Za();
        }
      }, Xr.prototype.get = function(c, u) {
        var p = this;
        return c && c.constructor === Object ? this.where(c).first(u) : c == null ? Ie(new W.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(w) {
          return p.core.get({ trans: w, key: c }).then(function(k) {
            return p.hook.reading.fire(k);
          });
        }).then(u);
      }, Xr.prototype.where = function(c) {
        if (typeof c == "string") return new this.db.WhereClause(this, c);
        if (f(c)) return new this.db.WhereClause(this, "[".concat(c.join("+"), "]"));
        var u = s(c);
        if (u.length === 1) return this.where(u[0]).equals(c[u[0]]);
        var p = this.schema.indexes.concat(this.schema.primKey).filter(function(V) {
          if (V.compound && u.every(function(Y) {
            return 0 <= V.keyPath.indexOf(Y);
          })) {
            for (var q = 0; q < u.length; ++q) if (u.indexOf(V.keyPath[q]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(V, q) {
          return V.keyPath.length - q.keyPath.length;
        })[0];
        if (p && this.db._maxKey !== we) {
          var T = p.keyPath.slice(0, u.length);
          return this.where(T).equals(T.map(function(q) {
            return c[q];
          }));
        }
        !p && Er && console.warn("The query ".concat(JSON.stringify(c), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(u.join("+"), "]"));
        var w = this.schema.idxByName;
        function k(V, q) {
          return lr(V, q) === 0;
        }
        var N = u.reduce(function(j, q) {
          var Y = j[0], re = j[1], j = w[q], ae = c[q];
          return [Y || j, Y || !j ? qt(re, j && j.multi ? function(Z) {
            return Z = G(Z, q), f(Z) && Z.some(function(J) {
              return k(ae, J);
            });
          } : function(Z) {
            return k(ae, G(Z, q));
          }) : re];
        }, [null, null]), T = N[0], N = N[1];
        return T ? this.where(T.name).equals(c[T.keyPath]).filter(N) : p ? this.filter(N) : this.where(u).equals("");
      }, Xr.prototype.filter = function(c) {
        return this.toCollection().and(c);
      }, Xr.prototype.count = function(c) {
        return this.toCollection().count(c);
      }, Xr.prototype.offset = function(c) {
        return this.toCollection().offset(c);
      }, Xr.prototype.limit = function(c) {
        return this.toCollection().limit(c);
      }, Xr.prototype.each = function(c) {
        return this.toCollection().each(c);
      }, Xr.prototype.toArray = function(c) {
        return this.toCollection().toArray(c);
      }, Xr.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Xr.prototype.orderBy = function(c) {
        return new this.db.Collection(new this.db.WhereClause(this, f(c) ? "[".concat(c.join("+"), "]") : c));
      }, Xr.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Xr.prototype.mapToClass = function(c) {
        var u, p = this.db, w = this.name;
        function k() {
          return u !== null && u.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = c).prototype instanceof Kn && ((function(q, Y) {
          if (typeof Y != "function" && Y !== null) throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
          function re() {
            this.constructor = q;
          }
          t(q, Y), q.prototype = Y === null ? Object.create(Y) : (re.prototype = Y.prototype, new re());
        })(k, u = c), Object.defineProperty(k.prototype, "db", { get: function() {
          return p;
        }, enumerable: false, configurable: true }), k.prototype.table = function() {
          return w;
        }, c = k);
        for (var T = /* @__PURE__ */ new Set(), N = c.prototype; N; N = l(N)) Object.getOwnPropertyNames(N).forEach(function(q) {
          return T.add(q);
        });
        function V(q) {
          if (!q) return q;
          var Y, re = Object.create(c.prototype);
          for (Y in q) if (!T.has(Y)) try {
            re[Y] = q[Y];
          } catch {
          }
          return re;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = V, this.hook("reading", V), c;
      }, Xr.prototype.defineClass = function() {
        return this.mapToClass(function(c) {
          o(this, c);
        });
      }, Xr.prototype.add = function(c, u) {
        var p = this, w = this.schema.primKey, k = w.auto, T = w.keyPath, N = c;
        return T && k && (N = aa(T)(c)), this._trans("readwrite", function(V) {
          return p.core.mutate({ trans: V, type: "add", keys: u != null ? [u] : null, values: [N] });
        }).then(function(V) {
          return V.numFailures ? Xe.reject(V.failures[0]) : V.lastResult;
        }).then(function(V) {
          if (T) try {
            F(c, T, V);
          } catch {
          }
          return V;
        });
      }, Xr.prototype.upsert = function(c, u) {
        var p = this, w = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(k) {
          return p.core.get({ trans: k, key: c }).then(function(T) {
            var N = T ?? {};
            return Ao(N, u), w && F(N, w, c), p.core.mutate({ trans: k, type: "put", values: [N], keys: [c], upsert: true, updates: { keys: [c], changeSpecs: [u] } }).then(function(V) {
              return V.numFailures ? Xe.reject(V.failures[0]) : !!T;
            });
          });
        });
      }, Xr.prototype.update = function(c, u) {
        return typeof c != "object" || f(c) ? this.where(":id").equals(c).modify(u) : (c = G(c, this.schema.primKey.keyPath), c === void 0 ? Ie(new W.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(c).modify(u));
      }, Xr.prototype.put = function(c, u) {
        var p = this, w = this.schema.primKey, k = w.auto, T = w.keyPath, N = c;
        return T && k && (N = aa(T)(c)), this._trans("readwrite", function(V) {
          return p.core.mutate({ trans: V, type: "put", values: [N], keys: u != null ? [u] : null });
        }).then(function(V) {
          return V.numFailures ? Xe.reject(V.failures[0]) : V.lastResult;
        }).then(function(V) {
          if (T) try {
            F(c, T, V);
          } catch {
          }
          return V;
        });
      }, Xr.prototype.delete = function(c) {
        var u = this;
        return this._trans("readwrite", function(p) {
          return u.core.mutate({ trans: p, type: "delete", keys: [c] }).then(function(w) {
            return ps(u, [c], w);
          }).then(function(w) {
            return w.numFailures ? Xe.reject(w.failures[0]) : void 0;
          });
        });
      }, Xr.prototype.clear = function() {
        var c = this;
        return this._trans("readwrite", function(u) {
          return c.core.mutate({ trans: u, type: "deleteRange", range: Ja }).then(function(p) {
            return ps(c, null, p);
          });
        }).then(function(u) {
          return u.numFailures ? Xe.reject(u.failures[0]) : void 0;
        });
      }, Xr.prototype.bulkGet = function(c) {
        var u = this;
        return this._trans("readonly", function(p) {
          return u.core.getMany({ keys: c, trans: p }).then(function(w) {
            return w.map(function(k) {
              return u.hook.reading.fire(k);
            });
          });
        });
      }, Xr.prototype.bulkAdd = function(c, u, p) {
        var w = this, k = Array.isArray(u) ? u : void 0, T = (p = p || (k ? void 0 : u)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(N) {
          var Y = w.schema.primKey, V = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && V ? c.map(aa(Y)) : c;
          return w.core.mutate({ trans: N, type: "add", keys: k, values: Y, wantResults: T }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return T ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkAdd(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkPut = function(c, u, p) {
        var w = this, k = Array.isArray(u) ? u : void 0, T = (p = p || (k ? void 0 : u)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(N) {
          var Y = w.schema.primKey, V = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && V ? c.map(aa(Y)) : c;
          return w.core.mutate({ trans: N, type: "put", keys: k, values: Y, wantResults: T }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return T ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkPut(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkUpdate = function(c) {
        var u = this, p = this.core, w = c.map(function(N) {
          return N.key;
        }), k = c.map(function(N) {
          return N.changes;
        }), T = [];
        return this._trans("readwrite", function(N) {
          return p.getMany({ trans: N, keys: w, cache: "clone" }).then(function(V) {
            var q = [], Y = [];
            c.forEach(function(j, ae) {
              var Z = j.key, J = j.changes, Q = V[ae];
              if (Q) {
                for (var te = 0, se = Object.keys(J); te < se.length; te++) {
                  var ue = se[te], pe = J[ue];
                  if (ue === u.schema.primKey.keyPath) {
                    if (lr(pe, Z) !== 0) throw new W.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(Q, ue, pe);
                }
                T.push(ae), q.push(Z), Y.push(Q);
              }
            });
            var re = q.length;
            return p.mutate({ trans: N, type: "put", keys: q, values: Y, updates: { keys: w, changeSpecs: k } }).then(function(j) {
              var ae = j.numFailures, Z = j.failures;
              if (ae === 0) return re;
              for (var J = 0, Q = Object.keys(Z); J < Q.length; J++) {
                var te, se = Q[J], ue = T[Number(se)];
                ue != null && (te = Z[se], delete Z[se], Z[ue] = te);
              }
              throw new Ge("".concat(u.name, ".bulkUpdate(): ").concat(ae, " of ").concat(re, " operations failed"), Z);
            });
          });
        });
      }, Xr.prototype.bulkDelete = function(c) {
        var u = this, p = c.length;
        return this._trans("readwrite", function(w) {
          return u.core.mutate({ trans: w, type: "delete", keys: c }).then(function(k) {
            return ps(u, c, k);
          });
        }).then(function(N) {
          var k = N.numFailures, T = N.lastResult, N = N.failures;
          if (k === 0) return T;
          throw new Ge("".concat(u.name, ".bulkDelete(): ").concat(k, " of ").concat(p, " operations failed"), N);
        });
      }, Xr);
      function Xr() {
      }
      function vi(c) {
        function u(N, V) {
          if (V) {
            for (var q = arguments.length, Y = new Array(q - 1); --q; ) Y[q - 1] = arguments[q];
            return p[N].subscribe.apply(null, Y), c;
          }
          if (typeof N == "string") return p[N];
        }
        var p = {};
        u.addEventType = T;
        for (var w = 1, k = arguments.length; w < k; ++w) T(arguments[w]);
        return u;
        function T(N, V, q) {
          if (typeof N != "object") {
            var Y;
            V = V || or;
            var re = { subscribers: [], fire: q = q || le, subscribe: function(j) {
              re.subscribers.indexOf(j) === -1 && (re.subscribers.push(j), re.fire = V(re.fire, j));
            }, unsubscribe: function(j) {
              re.subscribers = re.subscribers.filter(function(ae) {
                return ae !== j;
              }), re.fire = re.subscribers.reduce(V, q);
            } };
            return p[N] = u[N] = re;
          }
          s(Y = N).forEach(function(j) {
            var ae = Y[j];
            if (f(ae)) T(j, Y[j][0], Y[j][1]);
            else {
              if (ae !== "asap") throw new W.InvalidArgument("Invalid event config");
              var Z = T(j, O, function() {
                for (var J = arguments.length, Q = new Array(J); J--; ) Q[J] = arguments[J];
                Z.subscribers.forEach(function(te) {
                  M(function() {
                    te.apply(null, Q);
                  });
                });
              });
            }
          });
        }
      }
      function mi(c, u) {
        return y(u).from({ prototype: c }), u;
      }
      function jn(c, u) {
        return !(c.filter || c.algorithm || c.or) && (u ? c.justLimit : !c.replayFilter);
      }
      function S0(c, u) {
        c.filter = qt(c.filter, u);
      }
      function b0(c, u, p) {
        var w = c.replayFilter;
        c.replayFilter = w ? function() {
          return qt(w(), u());
        } : u, c.justLimit = p && !w;
      }
      function vs(c, u) {
        if (c.isPrimKey) return u.primaryKey;
        var p = u.getIndexByKeyPath(c.index);
        if (!p) throw new W.Schema("KeyPath " + c.index + " on object store " + u.name + " is not indexed");
        return p;
      }
      function Io(c, u, p) {
        var w = vs(c, u.schema);
        return u.openCursor({ trans: p, values: !c.keysOnly, reverse: c.dir === "prev", unique: !!c.unique, query: { index: w, range: c.range } });
      }
      function ms(c, u, p, w) {
        var k = c.replayFilter ? qt(c.filter, c.replayFilter()) : c.filter;
        if (c.or) {
          var T = {}, N = function(V, q, Y) {
            var re, j;
            k && !k(q, Y, function(ae) {
              return q.stop(ae);
            }, function(ae) {
              return q.fail(ae);
            }) || ((j = "" + (re = q.primaryKey)) == "[object ArrayBuffer]" && (j = "" + new Uint8Array(re)), v(T, j) || (T[j] = true, u(V, q, Y)));
          };
          return Promise.all([c.or._iterate(N, p), Do(Io(c, w, p), c.algorithm, N, !c.keysOnly && c.valueMapper)]);
        }
        return Do(Io(c, w, p), qt(c.algorithm, k), u, !c.keysOnly && c.valueMapper);
      }
      function Do(c, u, p, w) {
        var k = Wr(w ? function(T, N, V) {
          return p(w(T), N, V);
        } : p);
        return c.then(function(T) {
          if (T) return T.start(function() {
            var N = function() {
              return T.continue();
            };
            u && !u(T, function(V) {
              return N = V;
            }, function(V) {
              T.stop(V), N = le;
            }, function(V) {
              T.fail(V), N = le;
            }) || k(T.value, T, function(V) {
              return N = V;
            }), N();
          });
        });
      }
      var Rh = (Or.prototype._read = function(c, u) {
        var p = this._ctx;
        return p.error ? p.table._trans(null, Ie.bind(null, p.error)) : p.table._trans("readonly", c).then(u);
      }, Or.prototype._write = function(c) {
        var u = this._ctx;
        return u.error ? u.table._trans(null, Ie.bind(null, u.error)) : u.table._trans("readwrite", c, "locked");
      }, Or.prototype._addAlgorithm = function(c) {
        var u = this._ctx;
        u.algorithm = qt(u.algorithm, c);
      }, Or.prototype._iterate = function(c, u) {
        return ms(this._ctx, c, u, this._ctx.table.core);
      }, Or.prototype.clone = function(c) {
        var u = Object.create(this.constructor.prototype), p = Object.create(this._ctx);
        return c && o(p, c), u._ctx = p, u;
      }, Or.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Or.prototype.each = function(c) {
        var u = this._ctx;
        return this._read(function(p) {
          return ms(u, c, p, u.table.core);
        });
      }, Or.prototype.count = function(c) {
        var u = this;
        return this._read(function(p) {
          var w = u._ctx, k = w.table.core;
          if (jn(w, true)) return k.count({ trans: p, query: { index: vs(w, k.schema), range: w.range } }).then(function(N) {
            return Math.min(N, w.limit);
          });
          var T = 0;
          return ms(w, function() {
            return ++T, false;
          }, p, k).then(function() {
            return T;
          });
        }).then(c);
      }, Or.prototype.sortBy = function(c, u) {
        var p = c.split(".").reverse(), w = p[0], k = p.length - 1;
        function T(q, Y) {
          return Y ? T(q[p[Y]], Y - 1) : q[w];
        }
        var N = this._ctx.dir === "next" ? 1 : -1;
        function V(q, Y) {
          return lr(T(q, k), T(Y, k)) * N;
        }
        return this.toArray(function(q) {
          return q.sort(V);
        }).then(u);
      }, Or.prototype.toArray = function(c) {
        var u = this;
        return this._read(function(p) {
          var w = u._ctx;
          if (w.dir === "next" && jn(w, true) && 0 < w.limit) {
            var k = w.valueMapper, T = vs(w, w.table.core.schema);
            return w.table.core.query({ trans: p, limit: w.limit, values: true, query: { index: T, range: w.range } }).then(function(V) {
              return V = V.result, k ? V.map(k) : V;
            });
          }
          var N = [];
          return ms(w, function(V) {
            return N.push(V);
          }, p, w.table.core).then(function() {
            return N;
          });
        }, c);
      }, Or.prototype.offset = function(c) {
        var u = this._ctx;
        return c <= 0 || (u.offset += c, jn(u) ? b0(u, function() {
          var p = c;
          return function(w, k) {
            return p === 0 || (p === 1 ? --p : k(function() {
              w.advance(p), p = 0;
            }), false);
          };
        }) : b0(u, function() {
          var p = c;
          return function() {
            return --p < 0;
          };
        })), this;
      }, Or.prototype.limit = function(c) {
        return this._ctx.limit = Math.min(this._ctx.limit, c), b0(this._ctx, function() {
          var u = c;
          return function(p, w, k) {
            return --u <= 0 && w(k), 0 <= u;
          };
        }, true), this;
      }, Or.prototype.until = function(c, u) {
        return S0(this._ctx, function(p, w, k) {
          return !c(p.value) || (w(k), u);
        }), this;
      }, Or.prototype.first = function(c) {
        return this.limit(1).toArray(function(u) {
          return u[0];
        }).then(c);
      }, Or.prototype.last = function(c) {
        return this.reverse().first(c);
      }, Or.prototype.filter = function(c) {
        var u;
        return S0(this._ctx, function(p) {
          return c(p.value);
        }), (u = this._ctx).isMatch = qt(u.isMatch, c), this;
      }, Or.prototype.and = function(c) {
        return this.filter(c);
      }, Or.prototype.or = function(c) {
        return new this.db.WhereClause(this._ctx.table, c, this);
      }, Or.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Or.prototype.desc = function() {
        return this.reverse();
      }, Or.prototype.eachKey = function(c) {
        var u = this._ctx;
        return u.keysOnly = !u.isMatch, this.each(function(p, w) {
          c(w.key, w);
        });
      }, Or.prototype.eachUniqueKey = function(c) {
        return this._ctx.unique = "unique", this.eachKey(c);
      }, Or.prototype.eachPrimaryKey = function(c) {
        var u = this._ctx;
        return u.keysOnly = !u.isMatch, this.each(function(p, w) {
          c(w.primaryKey, w);
        });
      }, Or.prototype.keys = function(c) {
        var u = this._ctx;
        u.keysOnly = !u.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.key);
        }).then(function() {
          return p;
        }).then(c);
      }, Or.prototype.primaryKeys = function(c) {
        var u = this._ctx;
        if (u.dir === "next" && jn(u, true) && 0 < u.limit) return this._read(function(w) {
          var k = vs(u, u.table.core.schema);
          return u.table.core.query({ trans: w, values: false, limit: u.limit, query: { index: k, range: u.range } });
        }).then(function(w) {
          return w.result;
        }).then(c);
        u.keysOnly = !u.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.primaryKey);
        }).then(function() {
          return p;
        }).then(c);
      }, Or.prototype.uniqueKeys = function(c) {
        return this._ctx.unique = "unique", this.keys(c);
      }, Or.prototype.firstKey = function(c) {
        return this.limit(1).keys(function(u) {
          return u[0];
        }).then(c);
      }, Or.prototype.lastKey = function(c) {
        return this.reverse().firstKey(c);
      }, Or.prototype.distinct = function() {
        var c = this._ctx, c = c.index && c.table.schema.idxByName[c.index];
        if (!c || !c.multi) return this;
        var u = {};
        return S0(this._ctx, function(k) {
          var w = k.primaryKey.toString(), k = v(u, w);
          return u[w] = true, !k;
        }), this;
      }, Or.prototype.modify = function(c) {
        var u = this, p = this._ctx;
        return this._write(function(w) {
          var k = typeof c == "function" ? c : function(Q) {
            return Ao(Q, c);
          }, T = p.table.core, Y = T.schema.primaryKey, N = Y.outbound, V = Y.extractKey, q = 200, Y = u.db._options.modifyChunkSize;
          Y && (q = typeof Y == "object" ? Y[T.name] || Y["*"] || 200 : Y);
          function re(Q, ue) {
            var se = ue.failures, ue = ue.numFailures;
            ae += Q - ue;
            for (var pe = 0, ge = s(se); pe < ge.length; pe++) {
              var Re = ge[pe];
              j.push(se[Re]);
            }
          }
          var j = [], ae = 0, Z = [], J = c === Oo;
          return u.clone().primaryKeys().then(function(Q) {
            function te(ue) {
              var pe = Math.min(q, Q.length - ue), ge = Q.slice(ue, ue + pe);
              return (J ? Promise.resolve([]) : T.getMany({ trans: w, keys: ge, cache: "immutable" })).then(function(Re) {
                var He = [], Fe = [], Le = N ? [] : null, Ve = J ? ge : [];
                if (!J) for (var Ue = 0; Ue < pe; ++Ue) {
                  var qe = Re[Ue], pr = { value: de(qe), primKey: Q[ue + Ue] };
                  k.call(pr, pr.value, pr) !== false && (pr.value == null ? Ve.push(Q[ue + Ue]) : N || lr(V(qe), V(pr.value)) === 0 ? (Fe.push(pr.value), N && Le.push(Q[ue + Ue])) : (Ve.push(Q[ue + Ue]), He.push(pr.value)));
                }
                return Promise.resolve(0 < He.length && T.mutate({ trans: w, type: "add", values: He }).then(function(_r) {
                  for (var Sr in _r.failures) Ve.splice(parseInt(Sr), 1);
                  re(He.length, _r);
                })).then(function() {
                  return (0 < Fe.length || se && typeof c == "object") && T.mutate({ trans: w, type: "put", keys: Le, values: Fe, criteria: se, changeSpec: typeof c != "function" && c, isAdditionalChunk: 0 < ue }).then(function(_r) {
                    return re(Fe.length, _r);
                  });
                }).then(function() {
                  return (0 < Ve.length || se && J) && T.mutate({ trans: w, type: "delete", keys: Ve, criteria: se, isAdditionalChunk: 0 < ue }).then(function(_r) {
                    return ps(p.table, Ve, _r);
                  }).then(function(_r) {
                    return re(Ve.length, _r);
                  });
                }).then(function() {
                  return Q.length > ue + pe && te(ue + q);
                });
              });
            }
            var se = jn(p) && p.limit === 1 / 0 && (typeof c != "function" || J) && { index: p.index, range: p.range };
            return te(0).then(function() {
              if (0 < j.length) throw new je("Error modifying one or more objects", j, ae, Z);
              return Q.length;
            });
          });
        });
      }, Or.prototype.delete = function() {
        var c = this._ctx, u = c.range;
        return !jn(c) || c.table.schema.yProps || !c.isPrimKey && u.type !== 3 ? this.modify(Oo) : this._write(function(p) {
          var w = c.table.core.schema.primaryKey, k = u;
          return c.table.core.count({ trans: p, query: { index: w, range: k } }).then(function(T) {
            return c.table.core.mutate({ trans: p, type: "deleteRange", range: k }).then(function(q) {
              var V = q.failures, q = q.numFailures;
              if (q) throw new je("Could not delete some values", Object.keys(V).map(function(Y) {
                return V[Y];
              }), T - q);
              return T - q;
            });
          });
        });
      }, Or);
      function Or() {
      }
      var Oo = function(c, u) {
        return u.value = null;
      };
      function Ph(c, u) {
        return c < u ? -1 : c === u ? 0 : 1;
      }
      function Bh(c, u) {
        return u < c ? -1 : c === u ? 0 : 1;
      }
      function Yt(c, u, p) {
        return c = c instanceof Ro ? new c.Collection(c) : c, c._ctx.error = new (p || TypeError)(u), c;
      }
      function Gn(c) {
        return new c.Collection(c, function() {
          return No("");
        }).limit(0);
      }
      function gs(c, u, p, w) {
        var k, T, N, V, q, Y, re, j = p.length;
        if (!p.every(function(J) {
          return typeof J == "string";
        })) return Yt(c, cr);
        function ae(J) {
          k = J === "next" ? function(te) {
            return te.toUpperCase();
          } : function(te) {
            return te.toLowerCase();
          }, T = J === "next" ? function(te) {
            return te.toLowerCase();
          } : function(te) {
            return te.toUpperCase();
          }, N = J === "next" ? Ph : Bh;
          var Q = p.map(function(te) {
            return { lower: T(te), upper: k(te) };
          }).sort(function(te, se) {
            return N(te.lower, se.lower);
          });
          V = Q.map(function(te) {
            return te.upper;
          }), q = Q.map(function(te) {
            return te.lower;
          }), re = (Y = J) === "next" ? "" : w;
        }
        ae("next"), c = new c.Collection(c, function() {
          return Qa(V[0], q[j - 1] + w);
        }), c._ondirectionchange = function(J) {
          ae(J);
        };
        var Z = 0;
        return c._addAlgorithm(function(J, Q, te) {
          var se = J.key;
          if (typeof se != "string") return false;
          var ue = T(se);
          if (u(ue, q, Z)) return true;
          for (var pe = null, ge = Z; ge < j; ++ge) {
            var Re = (function(He, Fe, Le, Ve, Ue, qe) {
              for (var pr = Math.min(He.length, Ve.length), _r = -1, Sr = 0; Sr < pr; ++Sr) {
                var Zt = Fe[Sr];
                if (Zt !== Ve[Sr]) return Ue(He[Sr], Le[Sr]) < 0 ? He.substr(0, Sr) + Le[Sr] + Le.substr(Sr + 1) : Ue(He[Sr], Ve[Sr]) < 0 ? He.substr(0, Sr) + Ve[Sr] + Le.substr(Sr + 1) : 0 <= _r ? He.substr(0, _r) + Fe[_r] + Le.substr(_r + 1) : null;
                Ue(He[Sr], Zt) < 0 && (_r = Sr);
              }
              return pr < Ve.length && qe === "next" ? He + Le.substr(He.length) : pr < He.length && qe === "prev" ? He.substr(0, Le.length) : _r < 0 ? null : He.substr(0, _r) + Ve[_r] + Le.substr(_r + 1);
            })(se, ue, V[ge], q[ge], N, Y);
            Re === null && pe === null ? Z = ge + 1 : (pe === null || 0 < N(pe, Re)) && (pe = Re);
          }
          return Q(pe !== null ? function() {
            J.continue(pe + re);
          } : te), false;
        }), c;
      }
      function Qa(c, u, p, w) {
        return { type: 2, lower: c, upper: u, lowerOpen: p, upperOpen: w };
      }
      function No(c) {
        return { type: 1, lower: c, upper: c };
      }
      var Ro = (Object.defineProperty(vt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), vt.prototype.between = function(c, u, p, w) {
        p = p !== false, w = w === true;
        try {
          return 0 < this._cmp(c, u) || this._cmp(c, u) === 0 && (p || w) && (!p || !w) ? Gn(this) : new this.Collection(this, function() {
            return Qa(c, u, !p, !w);
          });
        } catch {
          return Yt(this, be);
        }
      }, vt.prototype.equals = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return No(c);
        });
      }, vt.prototype.above = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return Qa(c, void 0, true);
        });
      }, vt.prototype.aboveOrEqual = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return Qa(c, void 0, false);
        });
      }, vt.prototype.below = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return Qa(void 0, c, false, true);
        });
      }, vt.prototype.belowOrEqual = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return Qa(void 0, c);
        });
      }, vt.prototype.startsWith = function(c) {
        return typeof c != "string" ? Yt(this, cr) : this.between(c, c + we, true, true);
      }, vt.prototype.startsWithIgnoreCase = function(c) {
        return c === "" ? this.startsWith(c) : gs(this, function(u, p) {
          return u.indexOf(p[0]) === 0;
        }, [c], we);
      }, vt.prototype.equalsIgnoreCase = function(c) {
        return gs(this, function(u, p) {
          return u === p[0];
        }, [c], "");
      }, vt.prototype.anyOfIgnoreCase = function() {
        var c = he.apply(Qe, arguments);
        return c.length === 0 ? Gn(this) : gs(this, function(u, p) {
          return p.indexOf(u) !== -1;
        }, c, "");
      }, vt.prototype.startsWithAnyOfIgnoreCase = function() {
        var c = he.apply(Qe, arguments);
        return c.length === 0 ? Gn(this) : gs(this, function(u, p) {
          return p.some(function(w) {
            return u.indexOf(w) === 0;
          });
        }, c, we);
      }, vt.prototype.anyOf = function() {
        var c = this, u = he.apply(Qe, arguments), p = this._cmp;
        try {
          u.sort(p);
        } catch {
          return Yt(this, be);
        }
        if (u.length === 0) return Gn(this);
        var w = new this.Collection(this, function() {
          return Qa(u[0], u[u.length - 1]);
        });
        w._ondirectionchange = function(T) {
          p = T === "next" ? c._ascending : c._descending, u.sort(p);
        };
        var k = 0;
        return w._addAlgorithm(function(T, N, V) {
          for (var q = T.key; 0 < p(q, u[k]); ) if (++k === u.length) return N(V), false;
          return p(q, u[k]) === 0 || (N(function() {
            T.continue(u[k]);
          }), false);
        }), w;
      }, vt.prototype.notEqual = function(c) {
        return this.inAnyRange([[-1 / 0, c], [c, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, vt.prototype.noneOf = function() {
        var c = he.apply(Qe, arguments);
        if (c.length === 0) return new this.Collection(this);
        try {
          c.sort(this._ascending);
        } catch {
          return Yt(this, be);
        }
        var u = c.reduce(function(p, w) {
          return p ? p.concat([[p[p.length - 1][1], w]]) : [[-1 / 0, w]];
        }, null);
        return u.push([c[c.length - 1], this.db._maxKey]), this.inAnyRange(u, { includeLowers: false, includeUppers: false });
      }, vt.prototype.inAnyRange = function(se, u) {
        var p = this, w = this._cmp, k = this._ascending, T = this._descending, N = this._min, V = this._max;
        if (se.length === 0) return Gn(this);
        if (!se.every(function(ue) {
          return ue[0] !== void 0 && ue[1] !== void 0 && k(ue[0], ue[1]) <= 0;
        })) return Yt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", W.InvalidArgument);
        var q = !u || u.includeLowers !== false, Y = u && u.includeUppers === true, re, j = k;
        function ae(ue, pe) {
          return j(ue[0], pe[0]);
        }
        try {
          (re = se.reduce(function(ue, pe) {
            for (var ge = 0, Re = ue.length; ge < Re; ++ge) {
              var He = ue[ge];
              if (w(pe[0], He[1]) < 0 && 0 < w(pe[1], He[0])) {
                He[0] = N(He[0], pe[0]), He[1] = V(He[1], pe[1]);
                break;
              }
            }
            return ge === Re && ue.push(pe), ue;
          }, [])).sort(ae);
        } catch {
          return Yt(this, be);
        }
        var Z = 0, J = Y ? function(ue) {
          return 0 < k(ue, re[Z][1]);
        } : function(ue) {
          return 0 <= k(ue, re[Z][1]);
        }, Q = q ? function(ue) {
          return 0 < T(ue, re[Z][0]);
        } : function(ue) {
          return 0 <= T(ue, re[Z][0]);
        }, te = J, se = new this.Collection(this, function() {
          return Qa(re[0][0], re[re.length - 1][1], !q, !Y);
        });
        return se._ondirectionchange = function(ue) {
          j = ue === "next" ? (te = J, k) : (te = Q, T), re.sort(ae);
        }, se._addAlgorithm(function(ue, pe, ge) {
          for (var Re, He = ue.key; te(He); ) if (++Z === re.length) return pe(ge), false;
          return !J(Re = He) && !Q(Re) || (p._cmp(He, re[Z][1]) === 0 || p._cmp(He, re[Z][0]) === 0 || pe(function() {
            j === k ? ue.continue(re[Z][0]) : ue.continue(re[Z][1]);
          }), false);
        }), se;
      }, vt.prototype.startsWithAnyOf = function() {
        var c = he.apply(Qe, arguments);
        return c.every(function(u) {
          return typeof u == "string";
        }) ? c.length === 0 ? Gn(this) : this.inAnyRange(c.map(function(u) {
          return [u, u + we];
        })) : Yt(this, "startsWithAnyOf() only works with strings");
      }, vt);
      function vt() {
      }
      function Sa(c) {
        return Wr(function(u) {
          return gi(u), c(u.target.error), false;
        });
      }
      function gi(c) {
        c.stopPropagation && c.stopPropagation(), c.preventDefault && c.preventDefault();
      }
      var _i = "storagemutated", F0 = "x-storagemutated-1", en = vi(null, _i), Lh = (ba.prototype._lock = function() {
        return A(!Je.global), ++this._reculock, this._reculock !== 1 || Je.global || (Je.lockOwnerFor = this), this;
      }, ba.prototype._unlock = function() {
        if (A(!Je.global), --this._reculock == 0) for (Je.global || (Je.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var c = this._blockedFuncs.shift();
          try {
            ie(c[1], c[0]);
          } catch {
          }
        }
        return this;
      }, ba.prototype._locked = function() {
        return this._reculock && Je.lockOwnerFor !== this;
      }, ba.prototype.create = function(c) {
        var u = this;
        if (!this.mode) return this;
        var p = this.db.idbdb, w = this.db._state.dbOpenError;
        if (A(!this.idbtrans), !c && !p) switch (w && w.name) {
          case "DatabaseClosedError":
            throw new W.DatabaseClosed(w);
          case "MissingAPIError":
            throw new W.MissingAPI(w.message, w);
          default:
            throw new W.OpenFailed(w);
        }
        if (!this.active) throw new W.TransactionInactive();
        return A(this._completion._state === null), (c = this.idbtrans = c || (this.db.core || p).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Wr(function(k) {
          gi(k), u._reject(c.error);
        }), c.onabort = Wr(function(k) {
          gi(k), u.active && u._reject(new W.Abort(c.error)), u.active = false, u.on("abort").fire(k);
        }), c.oncomplete = Wr(function() {
          u.active = false, u._resolve(), "mutatedParts" in c && en.storagemutated.fire(c.mutatedParts);
        }), this;
      }, ba.prototype._promise = function(c, u, p) {
        var w = this;
        if (c === "readwrite" && this.mode !== "readwrite") return Ie(new W.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ie(new W.TransactionInactive());
        if (this._locked()) return new Xe(function(T, N) {
          w._blockedFuncs.push([function() {
            w._promise(c, u, p).then(T, N);
          }, Je]);
        });
        if (p) return I(function() {
          var T = new Xe(function(N, V) {
            w._lock();
            var q = u(N, V, w);
            q && q.then && q.then(N, V);
          });
          return T.finally(function() {
            return w._unlock();
          }), T._lib = true, T;
        });
        var k = new Xe(function(T, N) {
          var V = u(T, N, w);
          V && V.then && V.then(T, N);
        });
        return k._lib = true, k;
      }, ba.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ba.prototype.waitFor = function(c) {
        var u, p = this._root(), w = Xe.resolve(c);
        p._waitingFor ? p._waitingFor = p._waitingFor.then(function() {
          return w;
        }) : (p._waitingFor = w, p._waitingQueue = [], u = p.idbtrans.objectStore(p.storeNames[0]), (function T() {
          for (++p._spinCount; p._waitingQueue.length; ) p._waitingQueue.shift()();
          p._waitingFor && (u.get(-1 / 0).onsuccess = T);
        })());
        var k = p._waitingFor;
        return new Xe(function(T, N) {
          w.then(function(V) {
            return p._waitingQueue.push(Wr(T.bind(null, V)));
          }, function(V) {
            return p._waitingQueue.push(Wr(N.bind(null, V)));
          }).finally(function() {
            p._waitingFor === k && (p._waitingFor = null);
          });
        });
      }, ba.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new W.Abort()));
      }, ba.prototype.table = function(c) {
        var u = this._memoizedTables || (this._memoizedTables = {});
        if (v(u, c)) return u[c];
        var p = this.schema[c];
        if (!p) throw new W.NotFound("Table " + c + " not part of transaction");
        return p = new this.db.Table(c, p, this), p.core = this.db.core.table(c), u[c] = p;
      }, ba);
      function ba() {
      }
      function A0(c, u, p, w, k, T, N, V) {
        return { name: c, keyPath: u, unique: p, multi: w, auto: k, compound: T, src: (p && !N ? "&" : "") + (w ? "*" : "") + (k ? "++" : "") + Po(u), type: V };
      }
      function Po(c) {
        return typeof c == "string" ? c : c ? "[" + [].join.call(c, "+") + "]" : "";
      }
      function C0(c, u, p) {
        return { name: c, primKey: u, indexes: p, mappedClass: null, idxByName: (w = function(k) {
          return [k.name, k];
        }, p.reduce(function(k, T, N) {
          return N = w(T, N), N && (k[N[0]] = N[1]), k;
        }, {})) };
        var w;
      }
      var wi = function(c) {
        try {
          return c.only([[]]), wi = function() {
            return [[]];
          }, [[]];
        } catch {
          return wi = function() {
            return we;
          }, we;
        }
      };
      function I0(c) {
        return c == null ? function() {
        } : typeof c == "string" ? (u = c).split(".").length === 1 ? function(p) {
          return p[u];
        } : function(p) {
          return G(p, u);
        } : function(p) {
          return G(p, c);
        };
        var u;
      }
      function Bo(c) {
        return [].slice.call(c);
      }
      var Mh = 0;
      function yi(c) {
        return c == null ? ":id" : typeof c == "string" ? c : "[".concat(c.join("+"), "]");
      }
      function Uh(c, u, q) {
        function w(te) {
          if (te.type === 3) return null;
          if (te.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var Z = te.lower, J = te.upper, Q = te.lowerOpen, te = te.upperOpen;
          return Z === void 0 ? J === void 0 ? null : u.upperBound(J, !!te) : J === void 0 ? u.lowerBound(Z, !!Q) : u.bound(Z, J, !!Q, !!te);
        }
        function k(ae) {
          var Z, J = ae.name;
          return { name: J, schema: ae, mutate: function(Q) {
            var te = Q.trans, se = Q.type, ue = Q.keys, pe = Q.values, ge = Q.range;
            return new Promise(function(Re, He) {
              Re = Wr(Re);
              var Fe = te.objectStore(J), Le = Fe.keyPath == null, Ve = se === "put" || se === "add";
              if (!Ve && se !== "delete" && se !== "deleteRange") throw new Error("Invalid operation type: " + se);
              var Ue, qe = (ue || pe || { length: 1 }).length;
              if (ue && pe && ue.length !== pe.length) throw new Error("Given keys array must have same length as given values array.");
              if (qe === 0) return Re({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function pr(Wt) {
                ++Zt, gi(Wt);
              }
              var _r = [], Sr = [], Zt = 0;
              if (se === "deleteRange") {
                if (ge.type === 4) return Re({ numFailures: Zt, failures: Sr, results: [], lastResult: void 0 });
                ge.type === 3 ? _r.push(Ue = Fe.clear()) : _r.push(Ue = Fe.delete(w(ge)));
              } else {
                var Le = Ve ? Le ? [pe, ue] : [pe, null] : [ue, null], ur = Le[0], St = Le[1];
                if (Ve) for (var bt = 0; bt < qe; ++bt) _r.push(Ue = St && St[bt] !== void 0 ? Fe[se](ur[bt], St[bt]) : Fe[se](ur[bt])), Ue.onerror = pr;
                else for (bt = 0; bt < qe; ++bt) _r.push(Ue = Fe[se](ur[bt])), Ue.onerror = pr;
              }
              function Is(Wt) {
                Wt = Wt.target.result, _r.forEach(function(wn, $0) {
                  return wn.error != null && (Sr[$0] = wn.error);
                }), Re({ numFailures: Zt, failures: Sr, results: se === "delete" ? ue : _r.map(function(wn) {
                  return wn.result;
                }), lastResult: Wt });
              }
              Ue.onerror = function(Wt) {
                pr(Wt), Is(Wt);
              }, Ue.onsuccess = Is;
            });
          }, getMany: function(Q) {
            var te = Q.trans, se = Q.keys;
            return new Promise(function(ue, pe) {
              ue = Wr(ue);
              for (var ge, Re = te.objectStore(J), He = se.length, Fe = new Array(He), Le = 0, Ve = 0, Ue = function(_r) {
                _r = _r.target, Fe[_r._pos] = _r.result, ++Ve === Le && ue(Fe);
              }, qe = Sa(pe), pr = 0; pr < He; ++pr) se[pr] != null && ((ge = Re.get(se[pr]))._pos = pr, ge.onsuccess = Ue, ge.onerror = qe, ++Le);
              Le === 0 && ue(Fe);
            });
          }, get: function(Q) {
            var te = Q.trans, se = Q.key;
            return new Promise(function(ue, pe) {
              ue = Wr(ue);
              var ge = te.objectStore(J).get(se);
              ge.onsuccess = function(Re) {
                return ue(Re.target.result);
              }, ge.onerror = Sa(pe);
            });
          }, query: (Z = Y, function(Q) {
            return new Promise(function(te, se) {
              te = Wr(te);
              var ue, pe, ge, Le = Q.trans, Re = Q.values, He = Q.limit, Ue = Q.query, Fe = He === 1 / 0 ? void 0 : He, Ve = Ue.index, Ue = Ue.range, Le = Le.objectStore(J), Ve = Ve.isPrimaryKey ? Le : Le.index(Ve.name), Ue = w(Ue);
              if (He === 0) return te({ result: [] });
              Z ? ((Fe = Re ? Ve.getAll(Ue, Fe) : Ve.getAllKeys(Ue, Fe)).onsuccess = function(qe) {
                return te({ result: qe.target.result });
              }, Fe.onerror = Sa(se)) : (ue = 0, pe = !Re && "openKeyCursor" in Ve ? Ve.openKeyCursor(Ue) : Ve.openCursor(Ue), ge = [], pe.onsuccess = function(qe) {
                var pr = pe.result;
                return pr ? (ge.push(Re ? pr.value : pr.primaryKey), ++ue === He ? te({ result: ge }) : void pr.continue()) : te({ result: ge });
              }, pe.onerror = Sa(se));
            });
          }), openCursor: function(Q) {
            var te = Q.trans, se = Q.values, ue = Q.query, pe = Q.reverse, ge = Q.unique;
            return new Promise(function(Re, He) {
              Re = Wr(Re);
              var Ve = ue.index, Fe = ue.range, Le = te.objectStore(J), Le = Ve.isPrimaryKey ? Le : Le.index(Ve.name), Ve = pe ? ge ? "prevunique" : "prev" : ge ? "nextunique" : "next", Ue = !se && "openKeyCursor" in Le ? Le.openKeyCursor(w(Fe), Ve) : Le.openCursor(w(Fe), Ve);
              Ue.onerror = Sa(He), Ue.onsuccess = Wr(function(qe) {
                var pr, _r, Sr, Zt, ur = Ue.result;
                ur ? (ur.___id = ++Mh, ur.done = false, pr = ur.continue.bind(ur), _r = (_r = ur.continuePrimaryKey) && _r.bind(ur), Sr = ur.advance.bind(ur), Zt = function() {
                  throw new Error("Cursor not stopped");
                }, ur.trans = te, ur.stop = ur.continue = ur.continuePrimaryKey = ur.advance = function() {
                  throw new Error("Cursor not started");
                }, ur.fail = Wr(He), ur.next = function() {
                  var St = this, bt = 1;
                  return this.start(function() {
                    return bt-- ? St.continue() : St.stop();
                  }).then(function() {
                    return St;
                  });
                }, ur.start = function(St) {
                  function bt() {
                    if (Ue.result) try {
                      St();
                    } catch (Wt) {
                      ur.fail(Wt);
                    }
                    else ur.done = true, ur.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ur.stop();
                  }
                  var Is = new Promise(function(Wt, wn) {
                    Wt = Wr(Wt), Ue.onerror = Sa(wn), ur.fail = wn, ur.stop = function($0) {
                      ur.stop = ur.continue = ur.continuePrimaryKey = ur.advance = Zt, Wt($0);
                    };
                  });
                  return Ue.onsuccess = Wr(function(Wt) {
                    Ue.onsuccess = bt, bt();
                  }), ur.continue = pr, ur.continuePrimaryKey = _r, ur.advance = Sr, bt(), Is;
                }, Re(ur)) : Re(null);
              }, He);
            });
          }, count: function(Q) {
            var te = Q.query, se = Q.trans, ue = te.index, pe = te.range;
            return new Promise(function(ge, Re) {
              var He = se.objectStore(J), Fe = ue.isPrimaryKey ? He : He.index(ue.name), He = w(pe), Fe = He ? Fe.count(He) : Fe.count();
              Fe.onsuccess = Wr(function(Le) {
                return ge(Le.target.result);
              }), Fe.onerror = Sa(Re);
            });
          } };
        }
        var T, N, V, re = (N = q, V = Bo((T = c).objectStoreNames), { schema: { name: T.name, tables: V.map(function(ae) {
          return N.objectStore(ae);
        }).map(function(ae) {
          var Z = ae.keyPath, te = ae.autoIncrement, J = f(Z), Q = {}, te = { name: ae.name, primaryKey: { name: null, isPrimaryKey: true, outbound: Z == null, compound: J, keyPath: Z, autoIncrement: te, unique: true, extractKey: I0(Z) }, indexes: Bo(ae.indexNames).map(function(se) {
            return ae.index(se);
          }).map(function(ge) {
            var ue = ge.name, pe = ge.unique, Re = ge.multiEntry, ge = ge.keyPath, Re = { name: ue, compound: f(ge), keyPath: ge, unique: pe, multiEntry: Re, extractKey: I0(ge) };
            return Q[yi(ge)] = Re;
          }), getIndexByKeyPath: function(se) {
            return Q[yi(se)];
          } };
          return Q[":id"] = te.primaryKey, Z != null && (Q[yi(Z)] = te.primaryKey), te;
        }) }, hasGetAll: 0 < V.length && "getAll" in N.objectStore(V[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), q = re.schema, Y = re.hasGetAll, re = q.tables.map(k), j = {};
        return re.forEach(function(ae) {
          return j[ae.name] = ae;
        }), { stack: "dbcore", transaction: c.transaction.bind(c), table: function(ae) {
          if (!j[ae]) throw new Error("Table '".concat(ae, "' not found"));
          return j[ae];
        }, MIN_KEY: -1 / 0, MAX_KEY: wi(u), schema: q };
      }
      function Wh(c, u, p, w) {
        var k = p.IDBKeyRange;
        return p.indexedDB, { dbcore: (w = Uh(u, k, w), c.dbcore.reduce(function(T, N) {
          return N = N.create, a(a({}, T), N(T));
        }, w)) };
      }
      function _s(c, w) {
        var p = w.db, w = Wh(c._middlewares, p, c._deps, w);
        c.core = w.dbcore, c.tables.forEach(function(k) {
          var T = k.name;
          c.core.schema.tables.some(function(N) {
            return N.name === T;
          }) && (k.core = c.core.table(T), c[T] instanceof c.Table && (c[T].core = k.core));
        });
      }
      function ws(c, u, p, w) {
        p.forEach(function(k) {
          var T = w[k];
          u.forEach(function(N) {
            var V = (function q(Y, re) {
              return m(Y, re) || (Y = l(Y)) && q(Y, re);
            })(N, k);
            (!V || "value" in V && V.value === void 0) && (N === c.Transaction.prototype || N instanceof c.Transaction ? _(N, k, { get: function() {
              return this.table(k);
            }, set: function(q) {
              x(this, k, { value: q, writable: true, configurable: true, enumerable: true });
            } }) : N[k] = new c.Table(k, T));
          });
        });
      }
      function D0(c, u) {
        u.forEach(function(p) {
          for (var w in p) p[w] instanceof c.Table && delete p[w];
        });
      }
      function Hh(c, u) {
        return c._cfg.version - u._cfg.version;
      }
      function Vh(c, u, p, w) {
        var k = c._dbSchema;
        p.objectStoreNames.contains("$meta") && !k.$meta && (k.$meta = C0("$meta", Mo("")[0], []), c._storeNames.push("$meta"));
        var T = c._createTransaction("readwrite", c._storeNames, k);
        T.create(p), T._completion.catch(w);
        var N = T._reject.bind(T), V = Je.transless || Je;
        I(function() {
          return Je.trans = T, Je.transless = V, u !== 0 ? (_s(c, p), Y = u, ((q = T).storeNames.includes("$meta") ? q.table("$meta").get("version").then(function(re) {
            return re ?? Y;
          }) : Xe.resolve(Y)).then(function(re) {
            return ae = re, Z = T, J = p, Q = [], re = (j = c)._versions, te = j._dbSchema = ks(0, j.idbdb, J), (re = re.filter(function(se) {
              return se._cfg.version >= ae;
            })).length !== 0 ? (re.forEach(function(se) {
              Q.push(function() {
                var ue = te, pe = se._cfg.dbschema;
                Es(j, ue, J), Es(j, pe, J), te = j._dbSchema = pe;
                var ge = O0(ue, pe);
                ge.add.forEach(function(Ve) {
                  N0(J, Ve[0], Ve[1].primKey, Ve[1].indexes);
                }), ge.change.forEach(function(Ve) {
                  if (Ve.recreate) throw new W.Upgrade("Not yet support for changing primary key");
                  var Ue = J.objectStore(Ve.name);
                  Ve.add.forEach(function(qe) {
                    return ys(Ue, qe);
                  }), Ve.change.forEach(function(qe) {
                    Ue.deleteIndex(qe.name), ys(Ue, qe);
                  }), Ve.del.forEach(function(qe) {
                    return Ue.deleteIndex(qe);
                  });
                });
                var Re = se._cfg.contentUpgrade;
                if (Re && se._cfg.version > ae) {
                  _s(j, J), Z._memoizedTables = {};
                  var He = U(pe);
                  ge.del.forEach(function(Ve) {
                    He[Ve] = ue[Ve];
                  }), D0(j, [j.Transaction.prototype]), ws(j, [j.Transaction.prototype], s(He), He), Z.schema = He;
                  var Fe, Le = fr(Re);
                  return Le && R(), ge = Xe.follow(function() {
                    var Ve;
                    (Fe = Re(Z)) && Le && (Ve = L.bind(null, null), Fe.then(Ve, Ve));
                  }), Fe && typeof Fe.then == "function" ? Xe.resolve(Fe) : ge.then(function() {
                    return Fe;
                  });
                }
              }), Q.push(function(ue) {
                var pe, ge, Re = se._cfg.dbschema;
                pe = Re, ge = ue, [].slice.call(ge.db.objectStoreNames).forEach(function(He) {
                  return pe[He] == null && ge.db.deleteObjectStore(He);
                }), D0(j, [j.Transaction.prototype]), ws(j, [j.Transaction.prototype], j._storeNames, j._dbSchema), Z.schema = j._dbSchema;
              }), Q.push(function(ue) {
                j.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(j.idbdb.version / 10) === se._cfg.version ? (j.idbdb.deleteObjectStore("$meta"), delete j._dbSchema.$meta, j._storeNames = j._storeNames.filter(function(pe) {
                  return pe !== "$meta";
                })) : ue.objectStore("$meta").put(se._cfg.version, "version"));
              });
            }), (function se() {
              return Q.length ? Xe.resolve(Q.shift()(Z.idbtrans)).then(se) : Xe.resolve();
            })().then(function() {
              Lo(te, J);
            })) : Xe.resolve();
            var j, ae, Z, J, Q, te;
          }).catch(N)) : (s(k).forEach(function(re) {
            N0(p, re, k[re].primKey, k[re].indexes);
          }), _s(c, p), void Xe.follow(function() {
            return c.on.populate.fire(T);
          }).catch(N));
          var q, Y;
        });
      }
      function Xh(c, u) {
        Lo(c._dbSchema, u), u.db.version % 10 != 0 || u.objectStoreNames.contains("$meta") || u.db.createObjectStore("$meta").add(Math.ceil(u.db.version / 10 - 1), "version");
        var p = ks(0, c.idbdb, u);
        Es(c, c._dbSchema, u);
        for (var w = 0, k = O0(p, c._dbSchema).change; w < k.length; w++) {
          var T = (function(N) {
            if (N.change.length || N.recreate) return console.warn("Unable to patch indexes of table ".concat(N.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var V = u.objectStore(N.name);
            N.add.forEach(function(q) {
              Er && console.debug("Dexie upgrade patch: Creating missing index ".concat(N.name, ".").concat(q.src)), ys(V, q);
            });
          })(k[w]);
          if (typeof T == "object") return T.value;
        }
      }
      function O0(c, u) {
        var p, w = { del: [], add: [], change: [] };
        for (p in c) u[p] || w.del.push(p);
        for (p in u) {
          var k = c[p], T = u[p];
          if (k) {
            var N = { name: p, def: T, recreate: false, del: [], add: [], change: [] };
            if ("" + (k.primKey.keyPath || "") != "" + (T.primKey.keyPath || "") || k.primKey.auto !== T.primKey.auto) N.recreate = true, w.change.push(N);
            else {
              var V = k.idxByName, q = T.idxByName, Y = void 0;
              for (Y in V) q[Y] || N.del.push(Y);
              for (Y in q) {
                var re = V[Y], j = q[Y];
                re ? re.src !== j.src && N.change.push(j) : N.add.push(j);
              }
              (0 < N.del.length || 0 < N.add.length || 0 < N.change.length) && w.change.push(N);
            }
          } else w.add.push([p, T]);
        }
        return w;
      }
      function N0(c, u, p, w) {
        var k = c.db.createObjectStore(u, p.keyPath ? { keyPath: p.keyPath, autoIncrement: p.auto } : { autoIncrement: p.auto });
        return w.forEach(function(T) {
          return ys(k, T);
        }), k;
      }
      function Lo(c, u) {
        s(c).forEach(function(p) {
          u.db.objectStoreNames.contains(p) || (Er && console.debug("Dexie: Creating missing table", p), N0(u, p, c[p].primKey, c[p].indexes));
        });
      }
      function ys(c, u) {
        c.createIndex(u.name, u.keyPath, { unique: u.unique, multiEntry: u.multi });
      }
      function ks(c, u, p) {
        var w = {};
        return S(u.objectStoreNames, 0).forEach(function(k) {
          for (var T = p.objectStore(k), N = A0(Po(Y = T.keyPath), Y || "", true, false, !!T.autoIncrement, Y && typeof Y != "string", true), V = [], q = 0; q < T.indexNames.length; ++q) {
            var re = T.index(T.indexNames[q]), Y = re.keyPath, re = A0(re.name, Y, !!re.unique, !!re.multiEntry, false, Y && typeof Y != "string", false);
            V.push(re);
          }
          w[k] = C0(k, N, V);
        }), w;
      }
      function Es(c, u, p) {
        for (var w = p.db.objectStoreNames, k = 0; k < w.length; ++k) {
          var T = w[k], N = p.objectStore(T);
          c._hasGetAll = "getAll" in N;
          for (var V = 0; V < N.indexNames.length; ++V) {
            var q = N.indexNames[V], Y = N.index(q).keyPath, re = typeof Y == "string" ? Y : "[" + S(Y).join("+") + "]";
            !u[T] || (Y = u[T].idxByName[re]) && (Y.name = q, delete u[T].idxByName[re], u[T].idxByName[q] = Y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (c._hasGetAll = false);
      }
      function Mo(c) {
        return c.split(",").map(function(u, p) {
          var T = u.split(":"), w = (k = T[1]) === null || k === void 0 ? void 0 : k.trim(), k = (u = T[0].trim()).replace(/([&*]|\+\+)/g, ""), T = /^\[/.test(k) ? k.match(/^\[(.*)\]$/)[1].split("+") : k;
          return A0(k, T || null, /\&/.test(u), /\*/.test(u), /\+\+/.test(u), f(T), p === 0, w);
        });
      }
      var Kh = (zn.prototype._createTableSchema = C0, zn.prototype._parseIndexSyntax = Mo, zn.prototype._parseStoresSpec = function(c, u) {
        var p = this;
        s(c).forEach(function(w) {
          if (c[w] !== null) {
            var k = p._parseIndexSyntax(c[w]), T = k.shift();
            if (!T) throw new W.Schema("Invalid schema for table " + w + ": " + c[w]);
            if (T.unique = true, T.multi) throw new W.Schema("Primary key cannot be multiEntry*");
            k.forEach(function(N) {
              if (N.auto) throw new W.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!N.keyPath) throw new W.Schema("Index must have a name and cannot be an empty string");
            }), k = p._createTableSchema(w, T, k), u[w] = k;
          }
        });
      }, zn.prototype.stores = function(p) {
        var u = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, p) : p;
        var p = u._versions, w = {}, k = {};
        return p.forEach(function(T) {
          o(w, T._cfg.storesSource), k = T._cfg.dbschema = {}, T._parseStoresSpec(w, k);
        }), u._dbSchema = k, D0(u, [u._allTables, u, u.Transaction.prototype]), ws(u, [u._allTables, u, u.Transaction.prototype, this._cfg.tables], s(k), k), u._storeNames = s(k), this;
      }, zn.prototype.upgrade = function(c) {
        return this._cfg.contentUpgrade = Ir(this._cfg.contentUpgrade || le, c), this;
      }, zn);
      function zn() {
      }
      function R0(c, u) {
        var p = c._dbNamesDB;
        return p || (p = c._dbNamesDB = new Ba(Hr, { addons: [], indexedDB: c, IDBKeyRange: u })).version(1).stores({ dbnames: "name" }), p.table("dbnames");
      }
      function P0(c) {
        return c && typeof c.databases == "function";
      }
      function B0(c) {
        return I(function() {
          return Je.letThrough = true, c();
        });
      }
      function L0(c) {
        return !("from" in c);
      }
      var Tt = function(c, u) {
        if (!this) {
          var p = new Tt();
          return c && "d" in c && o(p, c), p;
        }
        o(this, arguments.length ? { d: 1, from: c, to: 1 < arguments.length ? u : c } : { d: 0 });
      };
      function ki(c, u, p) {
        var w = lr(u, p);
        if (!isNaN(w)) {
          if (0 < w) throw RangeError();
          if (L0(c)) return o(c, { from: u, to: p, d: 1 });
          var k = c.l, w = c.r;
          if (lr(p, c.from) < 0) return k ? ki(k, u, p) : c.l = { from: u, to: p, d: 1, l: null, r: null }, Wo(c);
          if (0 < lr(u, c.to)) return w ? ki(w, u, p) : c.r = { from: u, to: p, d: 1, l: null, r: null }, Wo(c);
          lr(u, c.from) < 0 && (c.from = u, c.l = null, c.d = w ? w.d + 1 : 1), 0 < lr(p, c.to) && (c.to = p, c.r = null, c.d = c.l ? c.l.d + 1 : 1), p = !c.r, k && !c.l && Ei(c, k), w && p && Ei(c, w);
        }
      }
      function Ei(c, u) {
        L0(u) || (function p(w, q) {
          var T = q.from, N = q.to, V = q.l, q = q.r;
          ki(w, T, N), V && p(w, V), q && p(w, q);
        })(c, u);
      }
      function Uo(c, u) {
        var p = Ts(u), w = p.next();
        if (w.done) return false;
        for (var k = w.value, T = Ts(c), N = T.next(k.from), V = N.value; !w.done && !N.done; ) {
          if (lr(V.from, k.to) <= 0 && 0 <= lr(V.to, k.from)) return true;
          lr(k.from, V.from) < 0 ? k = (w = p.next(V.from)).value : V = (N = T.next(k.from)).value;
        }
        return false;
      }
      function Ts(c) {
        var u = L0(c) ? null : { s: 0, n: c };
        return { next: function(p) {
          for (var w = 0 < arguments.length; u; ) switch (u.s) {
            case 0:
              if (u.s = 1, w) for (; u.n.l && lr(p, u.n.from) < 0; ) u = { up: u, n: u.n.l, s: 1 };
              else for (; u.n.l; ) u = { up: u, n: u.n.l, s: 1 };
            case 1:
              if (u.s = 2, !w || lr(p, u.n.to) <= 0) return { value: u.n, done: false };
            case 2:
              if (u.n.r) {
                u.s = 3, u = { up: u, n: u.n.r, s: 0 };
                continue;
              }
            case 3:
              u = u.up;
          }
          return { done: true };
        } };
      }
      function Wo(c) {
        var u, p, w = (((u = c.r) === null || u === void 0 ? void 0 : u.d) || 0) - (((p = c.l) === null || p === void 0 ? void 0 : p.d) || 0), k = 1 < w ? "r" : w < -1 ? "l" : "";
        k && (u = k == "r" ? "l" : "r", p = a({}, c), w = c[k], c.from = w.from, c.to = w.to, c[k] = w[k], p[k] = w[u], (c[u] = p).d = Ho(p)), c.d = Ho(c);
      }
      function Ho(p) {
        var u = p.r, p = p.l;
        return (u ? p ? Math.max(u.d, p.d) : u.d : p ? p.d : 0) + 1;
      }
      function Ss(c, u) {
        return s(u).forEach(function(p) {
          c[p] ? Ei(c[p], u[p]) : c[p] = (function w(k) {
            var T, N, V = {};
            for (T in k) v(k, T) && (N = k[T], V[T] = !N || typeof N != "object" || K.has(N.constructor) ? N : w(N));
            return V;
          })(u[p]);
        }), c;
      }
      function M0(c, u) {
        return c.all || u.all || Object.keys(c).some(function(p) {
          return u[p] && Uo(u[p], c[p]);
        });
      }
      d(Tt.prototype, ((na = { add: function(c) {
        return Ei(this, c), this;
      }, addKey: function(c) {
        return ki(this, c, c), this;
      }, addKeys: function(c) {
        var u = this;
        return c.forEach(function(p) {
          return ki(u, p, p);
        }), this;
      }, hasKey: function(c) {
        var u = Ts(this).next(c).value;
        return u && lr(u.from, c) <= 0 && 0 <= lr(u.to, c);
      } })[ze] = function() {
        return Ts(this);
      }, na));
      var gn = {}, U0 = {}, W0 = false;
      function bs(c) {
        Ss(U0, c), W0 || (W0 = true, setTimeout(function() {
          W0 = false, H0(U0, !(U0 = {}));
        }, 0));
      }
      function H0(c, u) {
        u === void 0 && (u = false);
        var p = /* @__PURE__ */ new Set();
        if (c.all) for (var w = 0, k = Object.values(gn); w < k.length; w++) Vo(N = k[w], c, p, u);
        else for (var T in c) {
          var N, V = /^idb\:\/\/(.*)\/(.*)\//.exec(T);
          V && (T = V[1], V = V[2], (N = gn["idb://".concat(T, "/").concat(V)]) && Vo(N, c, p, u));
        }
        p.forEach(function(q) {
          return q();
        });
      }
      function Vo(c, u, p, w) {
        for (var k = [], T = 0, N = Object.entries(c.queries.query); T < N.length; T++) {
          for (var V = N[T], q = V[0], Y = [], re = 0, j = V[1]; re < j.length; re++) {
            var ae = j[re];
            M0(u, ae.obsSet) ? ae.subscribers.forEach(function(te) {
              return p.add(te);
            }) : w && Y.push(ae);
          }
          w && k.push([q, Y]);
        }
        if (w) for (var Z = 0, J = k; Z < J.length; Z++) {
          var Q = J[Z], q = Q[0], Y = Q[1];
          c.queries.query[q] = Y;
        }
      }
      function jh(c) {
        var u = c._state, p = c._deps.indexedDB;
        if (u.isBeingOpened || c.idbdb) return u.dbReadyPromise.then(function() {
          return u.dbOpenError ? Ie(u.dbOpenError) : c;
        });
        u.isBeingOpened = true, u.dbOpenError = null, u.openComplete = false;
        var w = u.openCanceller, k = Math.round(10 * c.verno), T = false;
        function N() {
          if (u.openCanceller !== w) throw new W.DatabaseClosed("db.open() was cancelled");
        }
        function V() {
          return new Xe(function(ae, Z) {
            if (N(), !p) throw new W.MissingAPI();
            var J = c.name, Q = u.autoSchema || !k ? p.open(J) : p.open(J, k);
            if (!Q) throw new W.MissingAPI();
            Q.onerror = Sa(Z), Q.onblocked = Wr(c._fireOnBlocked), Q.onupgradeneeded = Wr(function(te) {
              var se;
              re = Q.transaction, u.autoSchema && !c._options.allowEmptyDB ? (Q.onerror = gi, re.abort(), Q.result.close(), (se = p.deleteDatabase(J)).onsuccess = se.onerror = Wr(function() {
                Z(new W.NoSuchDatabase("Database ".concat(J, " doesnt exist")));
              })) : (re.onerror = Sa(Z), te = te.oldVersion > Math.pow(2, 62) ? 0 : te.oldVersion, j = te < 1, c.idbdb = Q.result, T && Xh(c, re), Vh(c, te / 10, re, Z));
            }, Z), Q.onsuccess = Wr(function() {
              re = null;
              var te, se, ue, pe, ge, Re = c.idbdb = Q.result, He = S(Re.objectStoreNames);
              if (0 < He.length) try {
                var Fe = Re.transaction((pe = He).length === 1 ? pe[0] : pe, "readonly");
                if (u.autoSchema) se = Re, ue = Fe, (te = c).verno = se.version / 10, ue = te._dbSchema = ks(0, se, ue), te._storeNames = S(se.objectStoreNames, 0), ws(te, [te._allTables], s(ue), ue);
                else if (Es(c, c._dbSchema, Fe), ((ge = O0(ks(0, (ge = c).idbdb, Fe), ge._dbSchema)).add.length || ge.change.some(function(Le) {
                  return Le.add.length || Le.change.length;
                })) && !T) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Re.close(), k = Re.version + 1, T = true, ae(V());
                _s(c, Fe);
              } catch {
              }
              Nr.push(c), Re.onversionchange = Wr(function(Le) {
                u.vcFired = true, c.on("versionchange").fire(Le);
              }), Re.onclose = Wr(function() {
                c.close({ disableAutoOpen: false });
              }), j && (ge = c._deps, Fe = J, Re = ge.indexedDB, ge = ge.IDBKeyRange, P0(Re) || Fe === Hr || R0(Re, ge).put({ name: Fe }).catch(le)), ae();
            }, Z);
          }).catch(function(ae) {
            switch (ae == null ? void 0 : ae.name) {
              case "UnknownError":
                if (0 < u.PR1398_maxLoop) return u.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), V();
                break;
              case "VersionError":
                if (0 < k) return k = 0, V();
            }
            return Xe.reject(ae);
          });
        }
        var q, Y = u.dbReadyResolve, re = null, j = false;
        return Xe.race([w, (typeof navigator > "u" ? Xe.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(ae) {
          function Z() {
            return indexedDB.databases().finally(ae);
          }
          q = setInterval(Z, 100), Z();
        }).finally(function() {
          return clearInterval(q);
        }) : Promise.resolve()).then(V)]).then(function() {
          return N(), u.onReadyBeingFired = [], Xe.resolve(B0(function() {
            return c.on.ready.fire(c.vip);
          })).then(function ae() {
            if (0 < u.onReadyBeingFired.length) {
              var Z = u.onReadyBeingFired.reduce(Ir, le);
              return u.onReadyBeingFired = [], Xe.resolve(B0(function() {
                return Z(c.vip);
              })).then(ae);
            }
          });
        }).finally(function() {
          u.openCanceller === w && (u.onReadyBeingFired = null, u.isBeingOpened = false);
        }).catch(function(ae) {
          u.dbOpenError = ae;
          try {
            re && re.abort();
          } catch {
          }
          return w === u.openCanceller && c._close(), Ie(ae);
        }).finally(function() {
          u.openComplete = true, Y();
        }).then(function() {
          var ae;
          return j && (ae = {}, c.tables.forEach(function(Z) {
            Z.schema.indexes.forEach(function(J) {
              J.name && (ae["idb://".concat(c.name, "/").concat(Z.name, "/").concat(J.name)] = new Tt(-1 / 0, [[[]]]));
            }), ae["idb://".concat(c.name, "/").concat(Z.name, "/")] = ae["idb://".concat(c.name, "/").concat(Z.name, "/:dels")] = new Tt(-1 / 0, [[[]]]);
          }), en(_i).fire(ae), H0(ae, true)), c;
        });
      }
      function V0(c) {
        function u(T) {
          return c.next(T);
        }
        var p = k(u), w = k(function(T) {
          return c.throw(T);
        });
        function k(T) {
          return function(q) {
            var V = T(q), q = V.value;
            return V.done ? q : q && typeof q.then == "function" ? q.then(p, w) : f(q) ? Promise.all(q).then(p, w) : p(q);
          };
        }
        return k(u)();
      }
      function Fs(c, u, p) {
        for (var w = f(c) ? c.slice() : [c], k = 0; k < p; ++k) w.push(u);
        return w;
      }
      var Gh = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(c) {
        return a(a({}, c), { table: function(u) {
          var p = c.table(u), w = p.schema, k = {}, T = [];
          function N(j, ae, Z) {
            var J = yi(j), Q = k[J] = k[J] || [], te = j == null ? 0 : typeof j == "string" ? 1 : j.length, se = 0 < ae, se = a(a({}, Z), { name: se ? "".concat(J, "(virtual-from:").concat(Z.name, ")") : Z.name, lowLevelIndex: Z, isVirtual: se, keyTail: ae, keyLength: te, extractKey: I0(j), unique: !se && Z.unique });
            return Q.push(se), se.isPrimaryKey || T.push(se), 1 < te && N(te === 2 ? j[0] : j.slice(0, te - 1), ae + 1, Z), Q.sort(function(ue, pe) {
              return ue.keyTail - pe.keyTail;
            }), se;
          }
          u = N(w.primaryKey.keyPath, 0, w.primaryKey), k[":id"] = [u];
          for (var V = 0, q = w.indexes; V < q.length; V++) {
            var Y = q[V];
            N(Y.keyPath, 0, Y);
          }
          function re(j) {
            var ae, Z = j.query.index;
            return Z.isVirtual ? a(a({}, j), { query: { index: Z.lowLevelIndex, range: (ae = j.query.range, Z = Z.keyTail, { type: ae.type === 1 ? 2 : ae.type, lower: Fs(ae.lower, ae.lowerOpen ? c.MAX_KEY : c.MIN_KEY, Z), lowerOpen: true, upper: Fs(ae.upper, ae.upperOpen ? c.MIN_KEY : c.MAX_KEY, Z), upperOpen: true }) } }) : j;
          }
          return a(a({}, p), { schema: a(a({}, w), { primaryKey: u, indexes: T, getIndexByKeyPath: function(j) {
            return (j = k[yi(j)]) && j[0];
          } }), count: function(j) {
            return p.count(re(j));
          }, query: function(j) {
            return p.query(re(j));
          }, openCursor: function(j) {
            var ae = j.query.index, Z = ae.keyTail, J = ae.isVirtual, Q = ae.keyLength;
            return J ? p.openCursor(re(j)).then(function(se) {
              return se && te(se);
            }) : p.openCursor(j);
            function te(se) {
              return Object.create(se, { continue: { value: function(ue) {
                ue != null ? se.continue(Fs(ue, j.reverse ? c.MAX_KEY : c.MIN_KEY, Z)) : j.unique ? se.continue(se.key.slice(0, Q).concat(j.reverse ? c.MIN_KEY : c.MAX_KEY, Z)) : se.continue();
              } }, continuePrimaryKey: { value: function(ue, pe) {
                se.continuePrimaryKey(Fs(ue, c.MAX_KEY, Z), pe);
              } }, primaryKey: { get: function() {
                return se.primaryKey;
              } }, key: { get: function() {
                var ue = se.key;
                return Q === 1 ? ue[0] : ue.slice(0, Q);
              } }, value: { get: function() {
                return se.value;
              } } });
            }
          } });
        } });
      } };
      function X0(c, u, p, w) {
        return p = p || {}, w = w || "", s(c).forEach(function(k) {
          var T, N, V;
          v(u, k) ? (T = c[k], N = u[k], typeof T == "object" && typeof N == "object" && T && N ? (V = me(T)) !== me(N) ? p[w + k] = u[k] : V === "Object" ? X0(T, N, p, w + k + ".") : T !== N && (p[w + k] = u[k]) : T !== N && (p[w + k] = u[k])) : p[w + k] = void 0;
        }), s(u).forEach(function(k) {
          v(c, k) || (p[w + k] = u[k]);
        }), p;
      }
      function K0(c, u) {
        return u.type === "delete" ? u.keys : u.keys || u.values.map(c.extractKey);
      }
      var zh = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(c) {
        return a(a({}, c), { table: function(u) {
          var p = c.table(u), w = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(k) {
            var T = Je.trans, N = T.table(u).hook, V = N.deleting, q = N.creating, Y = N.updating;
            switch (k.type) {
              case "add":
                if (q.fire === le) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "put":
                if (q.fire === le && Y.fire === le) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "delete":
                if (V.fire === le) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "deleteRange":
                if (V.fire === le) break;
                return T._promise("readwrite", function() {
                  return (function j(ae, Z, J) {
                    return p.query({ trans: ae, values: false, query: { index: w, range: Z }, limit: J }).then(function(Q) {
                      var te = Q.result;
                      return re({ type: "delete", keys: te, trans: ae }).then(function(se) {
                        return 0 < se.numFailures ? Promise.reject(se.failures[0]) : te.length < J ? { failures: [], numFailures: 0, lastResult: void 0 } : j(ae, a(a({}, Z), { lower: te[te.length - 1], lowerOpen: true }), J);
                      });
                    });
                  })(k.trans, k.range, 1e4);
                }, true);
            }
            return p.mutate(k);
            function re(j) {
              var ae, Z, J, Q = Je.trans, te = j.keys || K0(w, j);
              if (!te) throw new Error("Keys missing");
              return (j = j.type === "add" || j.type === "put" ? a(a({}, j), { keys: te }) : a({}, j)).type !== "delete" && (j.values = n([], j.values)), j.keys && (j.keys = n([], j.keys)), ae = p, J = te, ((Z = j).type === "add" ? Promise.resolve([]) : ae.getMany({ trans: Z.trans, keys: J, cache: "immutable" })).then(function(se) {
                var ue = te.map(function(pe, ge) {
                  var Re, He, Fe, Le = se[ge], Ve = { onerror: null, onsuccess: null };
                  return j.type === "delete" ? V.fire.call(Ve, pe, Le, Q) : j.type === "add" || Le === void 0 ? (Re = q.fire.call(Ve, pe, j.values[ge], Q), pe == null && Re != null && (j.keys[ge] = pe = Re, w.outbound || F(j.values[ge], w.keyPath, pe))) : (Re = X0(Le, j.values[ge]), (He = Y.fire.call(Ve, Re, pe, Le, Q)) && (Fe = j.values[ge], Object.keys(He).forEach(function(Ue) {
                    v(Fe, Ue) ? Fe[Ue] = He[Ue] : F(Fe, Ue, He[Ue]);
                  }))), Ve;
                });
                return p.mutate(j).then(function(pe) {
                  for (var ge = pe.failures, Re = pe.results, He = pe.numFailures, pe = pe.lastResult, Fe = 0; Fe < te.length; ++Fe) {
                    var Le = (Re || te)[Fe], Ve = ue[Fe];
                    Le == null ? Ve.onerror && Ve.onerror(ge[Fe]) : Ve.onsuccess && Ve.onsuccess(j.type === "put" && se[Fe] ? j.values[Fe] : Le);
                  }
                  return { failures: ge, results: Re, numFailures: He, lastResult: pe };
                }).catch(function(pe) {
                  return ue.forEach(function(ge) {
                    return ge.onerror && ge.onerror(pe);
                  }), Promise.reject(pe);
                });
              });
            }
          } });
        } });
      } };
      function Xo(c, u, p) {
        try {
          if (!u || u.keys.length < c.length) return null;
          for (var w = [], k = 0, T = 0; k < u.keys.length && T < c.length; ++k) lr(u.keys[k], c[T]) === 0 && (w.push(p ? de(u.values[k]) : u.values[k]), ++T);
          return w.length === c.length ? w : null;
        } catch {
          return null;
        }
      }
      var $h = { stack: "dbcore", level: -1, create: function(c) {
        return { table: function(u) {
          var p = c.table(u);
          return a(a({}, p), { getMany: function(w) {
            if (!w.cache) return p.getMany(w);
            var k = Xo(w.keys, w.trans._cache, w.cache === "clone");
            return k ? Xe.resolve(k) : p.getMany(w).then(function(T) {
              return w.trans._cache = { keys: w.keys, values: w.cache === "clone" ? de(T) : T }, T;
            });
          }, mutate: function(w) {
            return w.type !== "add" && (w.trans._cache = null), p.mutate(w);
          } });
        } };
      } };
      function Ko(c, u) {
        return c.trans.mode === "readonly" && !!c.subscr && !c.trans.explicit && c.trans.db._options.cache !== "disabled" && !u.schema.primaryKey.outbound;
      }
      function jo(c, u) {
        switch (c) {
          case "query":
            return u.values && !u.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return false;
        }
      }
      var qh = { stack: "dbcore", level: 0, name: "Observability", create: function(c) {
        var u = c.schema.name, p = new Tt(c.MIN_KEY, c.MAX_KEY);
        return a(a({}, c), { transaction: function(w, k, T) {
          if (Je.subscr && k !== "readonly") throw new W.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Je.querier));
          return c.transaction(w, k, T);
        }, table: function(w) {
          var k = c.table(w), T = k.schema, N = T.primaryKey, j = T.indexes, V = N.extractKey, q = N.outbound, Y = N.autoIncrement && j.filter(function(Z) {
            return Z.compound && Z.keyPath.includes(N.keyPath);
          }), re = a(a({}, k), { mutate: function(Z) {
            function J(Ue) {
              return Ue = "idb://".concat(u, "/").concat(w, "/").concat(Ue), pe[Ue] || (pe[Ue] = new Tt());
            }
            var Q, te, se, ue = Z.trans, pe = Z.mutatedParts || (Z.mutatedParts = {}), ge = J(""), Re = J(":dels"), He = Z.type, Ve = Z.type === "deleteRange" ? [Z.range] : Z.type === "delete" ? [Z.keys] : Z.values.length < 50 ? [K0(N, Z).filter(function(Ue) {
              return Ue;
            }), Z.values] : [], Fe = Ve[0], Le = Ve[1], Ve = Z.trans._cache;
            return f(Fe) ? (ge.addKeys(Fe), (Ve = He === "delete" || Fe.length === Le.length ? Xo(Fe, Ve) : null) || Re.addKeys(Fe), (Ve || Le) && (Q = J, te = Ve, se = Le, T.indexes.forEach(function(Ue) {
              var qe = Q(Ue.name || "");
              function pr(Sr) {
                return Sr != null ? Ue.extractKey(Sr) : null;
              }
              function _r(Sr) {
                return Ue.multiEntry && f(Sr) ? Sr.forEach(function(Zt) {
                  return qe.addKey(Zt);
                }) : qe.addKey(Sr);
              }
              (te || se).forEach(function(Sr, St) {
                var ur = te && pr(te[St]), St = se && pr(se[St]);
                lr(ur, St) !== 0 && (ur != null && _r(ur), St != null && _r(St));
              });
            }))) : Fe ? (Le = { from: (Le = Fe.lower) !== null && Le !== void 0 ? Le : c.MIN_KEY, to: (Le = Fe.upper) !== null && Le !== void 0 ? Le : c.MAX_KEY }, Re.add(Le), ge.add(Le)) : (ge.add(p), Re.add(p), T.indexes.forEach(function(Ue) {
              return J(Ue.name).add(p);
            })), k.mutate(Z).then(function(Ue) {
              return !Fe || Z.type !== "add" && Z.type !== "put" || (ge.addKeys(Ue.results), Y && Y.forEach(function(qe) {
                for (var pr = Z.values.map(function(ur) {
                  return qe.extractKey(ur);
                }), _r = qe.keyPath.findIndex(function(ur) {
                  return ur === N.keyPath;
                }), Sr = 0, Zt = Ue.results.length; Sr < Zt; ++Sr) pr[Sr][_r] = Ue.results[Sr];
                J(qe.name).addKeys(pr);
              })), ue.mutatedParts = Ss(ue.mutatedParts || {}, pe), Ue;
            });
          } }), j = function(J) {
            var Q = J.query, J = Q.index, Q = Q.range;
            return [J, new Tt((J = Q.lower) !== null && J !== void 0 ? J : c.MIN_KEY, (Q = Q.upper) !== null && Q !== void 0 ? Q : c.MAX_KEY)];
          }, ae = { get: function(Z) {
            return [N, new Tt(Z.key)];
          }, getMany: function(Z) {
            return [N, new Tt().addKeys(Z.keys)];
          }, count: j, query: j, openCursor: j };
          return s(ae).forEach(function(Z) {
            re[Z] = function(J) {
              var Q = Je.subscr, te = !!Q, se = Ko(Je, k) && jo(Z, J) ? J.obsSet = {} : Q;
              if (te) {
                var ue = function(Le) {
                  return Le = "idb://".concat(u, "/").concat(w, "/").concat(Le), se[Le] || (se[Le] = new Tt());
                }, pe = ue(""), ge = ue(":dels"), Q = ae[Z](J), te = Q[0], Q = Q[1];
                if ((Z === "query" && te.isPrimaryKey && !J.values ? ge : ue(te.name || "")).add(Q), !te.isPrimaryKey) {
                  if (Z !== "count") {
                    var Re = Z === "query" && q && J.values && k.query(a(a({}, J), { values: false }));
                    return k[Z].apply(this, arguments).then(function(Le) {
                      if (Z === "query") {
                        if (q && J.values) return Re.then(function(pr) {
                          return pr = pr.result, pe.addKeys(pr), Le;
                        });
                        var Ve = J.values ? Le.result.map(V) : Le.result;
                        (J.values ? pe : ge).addKeys(Ve);
                      } else if (Z === "openCursor") {
                        var Ue = Le, qe = J.values;
                        return Ue && Object.create(Ue, { key: { get: function() {
                          return ge.addKey(Ue.primaryKey), Ue.key;
                        } }, primaryKey: { get: function() {
                          var pr = Ue.primaryKey;
                          return ge.addKey(pr), pr;
                        } }, value: { get: function() {
                          return qe && pe.addKey(Ue.primaryKey), Ue.value;
                        } } });
                      }
                      return Le;
                    });
                  }
                  ge.add(p);
                }
              }
              return k[Z].apply(this, arguments);
            };
          }), re;
        } });
      } };
      function Go(c, u, p) {
        if (p.numFailures === 0) return u;
        if (u.type === "deleteRange") return null;
        var w = u.keys ? u.keys.length : "values" in u && u.values ? u.values.length : 1;
        return p.numFailures === w ? null : (u = a({}, u), f(u.keys) && (u.keys = u.keys.filter(function(k, T) {
          return !(T in p.failures);
        })), "values" in u && f(u.values) && (u.values = u.values.filter(function(k, T) {
          return !(T in p.failures);
        })), u);
      }
      function j0(c, u) {
        return p = c, ((w = u).lower === void 0 || (w.lowerOpen ? 0 < lr(p, w.lower) : 0 <= lr(p, w.lower))) && (c = c, (u = u).upper === void 0 || (u.upperOpen ? lr(c, u.upper) < 0 : lr(c, u.upper) <= 0));
        var p, w;
      }
      function zo(c, u, ae, w, k, T) {
        if (!ae || ae.length === 0) return c;
        var N = u.query.index, V = N.multiEntry, q = u.query.range, Y = w.schema.primaryKey.extractKey, re = N.extractKey, j = (N.lowLevelIndex || N).extractKey, ae = ae.reduce(function(Z, J) {
          var Q = Z, te = [];
          if (J.type === "add" || J.type === "put") for (var se = new Tt(), ue = J.values.length - 1; 0 <= ue; --ue) {
            var pe, ge = J.values[ue], Re = Y(ge);
            se.hasKey(Re) || (pe = re(ge), (V && f(pe) ? pe.some(function(Ue) {
              return j0(Ue, q);
            }) : j0(pe, q)) && (se.addKey(Re), te.push(ge)));
          }
          switch (J.type) {
            case "add":
              var He = new Tt().addKeys(u.values ? Z.map(function(qe) {
                return Y(qe);
              }) : Z), Q = Z.concat(u.values ? te.filter(function(qe) {
                return qe = Y(qe), !He.hasKey(qe) && (He.addKey(qe), true);
              }) : te.map(function(qe) {
                return Y(qe);
              }).filter(function(qe) {
                return !He.hasKey(qe) && (He.addKey(qe), true);
              }));
              break;
            case "put":
              var Fe = new Tt().addKeys(J.values.map(function(qe) {
                return Y(qe);
              }));
              Q = Z.filter(function(qe) {
                return !Fe.hasKey(u.values ? Y(qe) : qe);
              }).concat(u.values ? te : te.map(function(qe) {
                return Y(qe);
              }));
              break;
            case "delete":
              var Le = new Tt().addKeys(J.keys);
              Q = Z.filter(function(qe) {
                return !Le.hasKey(u.values ? Y(qe) : qe);
              });
              break;
            case "deleteRange":
              var Ve = J.range;
              Q = Z.filter(function(qe) {
                return !j0(Y(qe), Ve);
              });
          }
          return Q;
        }, c);
        return ae === c ? c : (ae.sort(function(Z, J) {
          return lr(j(Z), j(J)) || lr(Y(Z), Y(J));
        }), u.limit && u.limit < 1 / 0 && (ae.length > u.limit ? ae.length = u.limit : c.length === u.limit && ae.length < u.limit && (k.dirty = true)), T ? Object.freeze(ae) : ae);
      }
      function $o(c, u) {
        return lr(c.lower, u.lower) === 0 && lr(c.upper, u.upper) === 0 && !!c.lowerOpen == !!u.lowerOpen && !!c.upperOpen == !!u.upperOpen;
      }
      function Yh(c, u) {
        return (function(p, w, k, T) {
          if (p === void 0) return w !== void 0 ? -1 : 0;
          if (w === void 0) return 1;
          if ((w = lr(p, w)) === 0) {
            if (k && T) return 0;
            if (k) return 1;
            if (T) return -1;
          }
          return w;
        })(c.lower, u.lower, c.lowerOpen, u.lowerOpen) <= 0 && 0 <= (function(p, w, k, T) {
          if (p === void 0) return w !== void 0 ? 1 : 0;
          if (w === void 0) return -1;
          if ((w = lr(p, w)) === 0) {
            if (k && T) return 0;
            if (k) return -1;
            if (T) return 1;
          }
          return w;
        })(c.upper, u.upper, c.upperOpen, u.upperOpen);
      }
      function Zh(c, u, p, w) {
        c.subscribers.add(p), w.addEventListener("abort", function() {
          var k, T;
          c.subscribers.delete(p), c.subscribers.size === 0 && (k = c, T = u, setTimeout(function() {
            k.subscribers.size === 0 && Be(T, k);
          }, 3e3));
        });
      }
      var Jh = { stack: "dbcore", level: 0, name: "Cache", create: function(c) {
        var u = c.schema.name;
        return a(a({}, c), { transaction: function(p, w, k) {
          var T, N, V = c.transaction(p, w, k);
          return w === "readwrite" && (N = (T = new AbortController()).signal, k = function(q) {
            return function() {
              if (T.abort(), w === "readwrite") {
                for (var Y = /* @__PURE__ */ new Set(), re = 0, j = p; re < j.length; re++) {
                  var ae = j[re], Z = gn["idb://".concat(u, "/").concat(ae)];
                  if (Z) {
                    var J = c.table(ae), Q = Z.optimisticOps.filter(function(qe) {
                      return qe.trans === V;
                    });
                    if (V._explicit && q && V.mutatedParts) for (var te = 0, se = Object.values(Z.queries.query); te < se.length; te++) for (var ue = 0, pe = (He = se[te]).slice(); ue < pe.length; ue++) M0((Fe = pe[ue]).obsSet, V.mutatedParts) && (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
                      return Y.add(qe);
                    }));
                    else if (0 < Q.length) {
                      Z.optimisticOps = Z.optimisticOps.filter(function(qe) {
                        return qe.trans !== V;
                      });
                      for (var ge = 0, Re = Object.values(Z.queries.query); ge < Re.length; ge++) for (var He, Fe, Le, Ve = 0, Ue = (He = Re[ge]).slice(); Ve < Ue.length; Ve++) (Fe = Ue[Ve]).res != null && V.mutatedParts && (q && !Fe.dirty ? (Le = Object.isFrozen(Fe.res), Le = zo(Fe.res, Fe.req, Q, J, Fe, Le), Fe.dirty ? (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
                        return Y.add(qe);
                      })) : Le !== Fe.res && (Fe.res = Le, Fe.promise = Xe.resolve({ result: Le }))) : (Fe.dirty && Be(He, Fe), Fe.subscribers.forEach(function(qe) {
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
          }, V.addEventListener("abort", k(false), { signal: N }), V.addEventListener("error", k(false), { signal: N }), V.addEventListener("complete", k(true), { signal: N })), V;
        }, table: function(p) {
          var w = c.table(p), k = w.schema.primaryKey;
          return a(a({}, w), { mutate: function(T) {
            var N = Je.trans;
            if (k.outbound || N.db._options.cache === "disabled" || N.explicit || N.idbtrans.mode !== "readwrite") return w.mutate(T);
            var V = gn["idb://".concat(u, "/").concat(p)];
            return V ? (N = w.mutate(T), T.type !== "add" && T.type !== "put" || !(50 <= T.values.length || K0(k, T).some(function(q) {
              return q == null;
            })) ? (V.optimisticOps.push(T), T.mutatedParts && bs(T.mutatedParts), N.then(function(q) {
              0 < q.numFailures && (Be(V.optimisticOps, T), (q = Go(0, T, q)) && V.optimisticOps.push(q), T.mutatedParts && bs(T.mutatedParts));
            }), N.catch(function() {
              Be(V.optimisticOps, T), T.mutatedParts && bs(T.mutatedParts);
            })) : N.then(function(q) {
              var Y = Go(0, a(a({}, T), { values: T.values.map(function(re, j) {
                var ae;
                return q.failures[j] ? re : (re = (ae = k.keyPath) !== null && ae !== void 0 && ae.includes(".") ? de(re) : a({}, re), F(re, k.keyPath, q.results[j]), re);
              }) }), q);
              V.optimisticOps.push(Y), queueMicrotask(function() {
                return T.mutatedParts && bs(T.mutatedParts);
              });
            }), N) : w.mutate(T);
          }, query: function(T) {
            if (!Ko(Je, w) || !jo("query", T)) return w.query(T);
            var N = ((Y = Je.trans) === null || Y === void 0 ? void 0 : Y.db._options.cache) === "immutable", j = Je, V = j.requery, q = j.signal, Y = (function(J, Q, te, se) {
              var ue = gn["idb://".concat(J, "/").concat(Q)];
              if (!ue) return [];
              if (!(Q = ue.queries[te])) return [null, false, ue, null];
              var pe = Q[(se.query ? se.query.index.name : null) || ""];
              if (!pe) return [null, false, ue, null];
              switch (te) {
                case "query":
                  var ge = pe.find(function(Re) {
                    return Re.req.limit === se.limit && Re.req.values === se.values && $o(Re.req.query.range, se.query.range);
                  });
                  return ge ? [ge, true, ue, pe] : [pe.find(function(Re) {
                    return ("limit" in Re.req ? Re.req.limit : 1 / 0) >= se.limit && (!se.values || Re.req.values) && Yh(Re.req.query.range, se.query.range);
                  }), false, ue, pe];
                case "count":
                  return ge = pe.find(function(Re) {
                    return $o(Re.req.query.range, se.query.range);
                  }), [ge, !!ge, ue, pe];
              }
            })(u, p, "query", T), re = Y[0], j = Y[1], ae = Y[2], Z = Y[3];
            return re && j ? re.obsSet = T.obsSet : (j = w.query(T).then(function(J) {
              var Q = J.result;
              if (re && (re.res = Q), N) {
                for (var te = 0, se = Q.length; te < se; ++te) Object.freeze(Q[te]);
                Object.freeze(Q);
              } else J.result = de(Q);
              return J;
            }).catch(function(J) {
              return Z && re && Be(Z, re), Promise.reject(J);
            }), re = { obsSet: T.obsSet, promise: j, subscribers: /* @__PURE__ */ new Set(), type: "query", req: T, dirty: false }, Z ? Z.push(re) : (Z = [re], (ae = ae || (gn["idb://".concat(u, "/").concat(p)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[T.query.index.name || ""] = Z)), Zh(re, Z, V, q), re.promise.then(function(J) {
              return { result: zo(J.result, T, ae == null ? void 0 : ae.optimisticOps, w, re, N) };
            });
          } });
        } });
      } };
      function As(c, u) {
        return new Proxy(c, { get: function(p, w, k) {
          return w === "db" ? u : Reflect.get(p, w, k);
        } });
      }
      var Ba = (Qr.prototype.version = function(c) {
        if (isNaN(c) || c < 0.1) throw new W.Type("Given version is not a positive number");
        if (c = Math.round(10 * c) / 10, this.idbdb || this._state.isBeingOpened) throw new W.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, c);
        var u = this._versions, p = u.filter(function(w) {
          return w._cfg.version === c;
        })[0];
        return p || (p = new this.Version(c), u.push(p), u.sort(Hh), p.stores({}), this._state.autoSchema = false, p);
      }, Qr.prototype._whenReady = function(c) {
        var u = this;
        return this.idbdb && (this._state.openComplete || Je.letThrough || this._vip) ? c() : new Xe(function(p, w) {
          if (u._state.openComplete) return w(new W.DatabaseClosed(u._state.dbOpenError));
          if (!u._state.isBeingOpened) {
            if (!u._state.autoOpen) return void w(new W.DatabaseClosed());
            u.open().catch(le);
          }
          u._state.dbReadyPromise.then(p, w);
        }).then(c);
      }, Qr.prototype.use = function(c) {
        var u = c.stack, p = c.create, w = c.level, k = c.name;
        return k && this.unuse({ stack: u, name: k }), c = this._middlewares[u] || (this._middlewares[u] = []), c.push({ stack: u, create: p, level: w ?? 10, name: k }), c.sort(function(T, N) {
          return T.level - N.level;
        }), this;
      }, Qr.prototype.unuse = function(c) {
        var u = c.stack, p = c.name, w = c.create;
        return u && this._middlewares[u] && (this._middlewares[u] = this._middlewares[u].filter(function(k) {
          return w ? k.create !== w : !!p && k.name !== p;
        })), this;
      }, Qr.prototype.open = function() {
        var c = this;
        return ie(pt, function() {
          return jh(c);
        });
      }, Qr.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var c = this._state, u = Nr.indexOf(this);
        if (0 <= u && Nr.splice(u, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        c.isBeingOpened || (c.dbReadyPromise = new Xe(function(p) {
          c.dbReadyResolve = p;
        }), c.openCanceller = new Xe(function(p, w) {
          c.cancelOpen = w;
        }));
      }, Qr.prototype.close = function(p) {
        var u = (p === void 0 ? { disableAutoOpen: true } : p).disableAutoOpen, p = this._state;
        u ? (p.isBeingOpened && p.cancelOpen(new W.DatabaseClosed()), this._close(), p.autoOpen = false, p.dbOpenError = new W.DatabaseClosed()) : (this._close(), p.autoOpen = this._options.autoOpen || p.isBeingOpened, p.openComplete = false, p.dbOpenError = null);
      }, Qr.prototype.delete = function(c) {
        var u = this;
        c === void 0 && (c = { disableAutoOpen: true });
        var p = 0 < arguments.length && typeof arguments[0] != "object", w = this._state;
        return new Xe(function(k, T) {
          function N() {
            u.close(c);
            var V = u._deps.indexedDB.deleteDatabase(u.name);
            V.onsuccess = Wr(function() {
              var q, Y, re;
              q = u._deps, Y = u.name, re = q.indexedDB, q = q.IDBKeyRange, P0(re) || Y === Hr || R0(re, q).delete(Y).catch(le), k();
            }), V.onerror = Sa(T), V.onblocked = u._fireOnBlocked;
          }
          if (p) throw new W.InvalidArgument("Invalid closeOptions argument to db.delete()");
          w.isBeingOpened ? w.dbReadyPromise.then(N) : N();
        });
      }, Qr.prototype.backendDB = function() {
        return this.idbdb;
      }, Qr.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Qr.prototype.hasBeenClosed = function() {
        var c = this._state.dbOpenError;
        return c && c.name === "DatabaseClosed";
      }, Qr.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Qr.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Qr.prototype, "tables", { get: function() {
        var c = this;
        return s(this._allTables).map(function(u) {
          return c._allTables[u];
        });
      }, enumerable: false, configurable: true }), Qr.prototype.transaction = function() {
        var c = (function(u, p, w) {
          var k = arguments.length;
          if (k < 2) throw new W.InvalidArgument("Too few arguments");
          for (var T = new Array(k - 1); --k; ) T[k - 1] = arguments[k];
          return w = T.pop(), [u, H(T), w];
        }).apply(this, arguments);
        return this._transaction.apply(this, c);
      }, Qr.prototype._transaction = function(c, u, p) {
        var w = this, k = Je.trans;
        k && k.db === this && c.indexOf("!") === -1 || (k = null);
        var T, N, V = c.indexOf("?") !== -1;
        c = c.replace("!", "").replace("?", "");
        try {
          if (N = u.map(function(Y) {
            if (Y = Y instanceof w.Table ? Y.name : Y, typeof Y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return Y;
          }), c == "r" || c === it) T = it;
          else {
            if (c != "rw" && c != Pa) throw new W.InvalidArgument("Invalid transaction mode: " + c);
            T = Pa;
          }
          if (k) {
            if (k.mode === it && T === Pa) {
              if (!V) throw new W.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              k = null;
            }
            k && N.forEach(function(Y) {
              if (k && k.storeNames.indexOf(Y) === -1) {
                if (!V) throw new W.SubTransaction("Table " + Y + " not included in parent transaction.");
                k = null;
              }
            }), V && k && !k.active && (k = null);
          }
        } catch (Y) {
          return k ? k._promise(null, function(re, j) {
            j(Y);
          }) : Ie(Y);
        }
        var q = (function Y(re, j, ae, Z, J) {
          return Xe.resolve().then(function() {
            var Q = Je.transless || Je, te = re._createTransaction(j, ae, re._dbSchema, Z);
            if (te.explicit = true, Q = { trans: te, transless: Q }, Z) te.idbtrans = Z.idbtrans;
            else try {
              te.create(), te.idbtrans._explicit = true, re._state.PR1398_maxLoop = 3;
            } catch (pe) {
              return pe.name === Ze.InvalidState && re.isOpen() && 0 < --re._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), re.close({ disableAutoOpen: false }), re.open().then(function() {
                return Y(re, j, ae, null, J);
              })) : Ie(pe);
            }
            var se, ue = fr(J);
            return ue && R(), Q = Xe.follow(function() {
              var pe;
              (se = J.call(te, te)) && (ue ? (pe = L.bind(null, null), se.then(pe, pe)) : typeof se.next == "function" && typeof se.throw == "function" && (se = V0(se)));
            }, Q), (se && typeof se.then == "function" ? Xe.resolve(se).then(function(pe) {
              return te.active ? pe : Ie(new W.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : Q.then(function() {
              return se;
            })).then(function(pe) {
              return Z && te._resolve(), te._completion.then(function() {
                return pe;
              });
            }).catch(function(pe) {
              return te._reject(pe), Ie(pe);
            });
          });
        }).bind(null, this, T, N, k, p);
        return k ? k._promise(T, q, "lock") : Je.trans ? ie(Je.transless, function() {
          return w._whenReady(q);
        }) : this._whenReady(q);
      }, Qr.prototype.table = function(c) {
        if (!v(this._allTables, c)) throw new W.InvalidTable("Table ".concat(c, " does not exist"));
        return this._allTables[c];
      }, Qr);
      function Qr(c, u) {
        var p = this;
        this._middlewares = {}, this.verno = 0;
        var w = Qr.dependencies;
        this._options = u = a({ addons: Qr.addons, autoOpen: true, indexedDB: w.indexedDB, IDBKeyRange: w.IDBKeyRange, cache: "cloned" }, u), this._deps = { indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange }, w = u.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var k, T, N, V, q, Y = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: le, dbReadyPromise: null, cancelOpen: le, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: u.autoOpen };
        Y.dbReadyPromise = new Xe(function(j) {
          Y.dbReadyResolve = j;
        }), Y.openCanceller = new Xe(function(j, ae) {
          Y.cancelOpen = ae;
        }), this._state = Y, this.name = c, this.on = vi(this, "populate", "blocked", "versionchange", "close", { ready: [Ir, le] }), this.once = function(j, ae) {
          var Z = function() {
            for (var J = [], Q = 0; Q < arguments.length; Q++) J[Q] = arguments[Q];
            p.on(j).unsubscribe(Z), ae.apply(p, J);
          };
          return p.on(j, Z);
        }, this.on.ready.subscribe = E(this.on.ready.subscribe, function(j) {
          return function(ae, Z) {
            Qr.vip(function() {
              var J, Q = p._state;
              Q.openComplete ? (Q.dbOpenError || Xe.resolve().then(ae), Z && j(ae)) : Q.onReadyBeingFired ? (Q.onReadyBeingFired.push(ae), Z && j(ae)) : (j(ae), J = p, Z || j(function te() {
                J.on.ready.unsubscribe(ae), J.on.ready.unsubscribe(te);
              }));
            });
          };
        }), this.Collection = (k = this, mi(Rh.prototype, function(se, te) {
          this.db = k;
          var Z = Ja, J = null;
          if (te) try {
            Z = te();
          } catch (ue) {
            J = ue;
          }
          var Q = se._ctx, te = Q.table, se = te.hook.reading.fire;
          this._ctx = { table: te, index: Q.index, isPrimKey: !Q.index || te.schema.primKey.keyPath && Q.index === te.schema.primKey.name, range: Z, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: J, or: Q.or, valueMapper: se !== O ? se : null };
        })), this.Table = (T = this, mi(Co.prototype, function(j, ae, Z) {
          this.db = T, this._tx = Z, this.name = j, this.schema = ae, this.hook = T._allTables[j] ? T._allTables[j].hook : vi(null, { creating: [Se, le], reading: [Ce, O], updating: [rr, le], deleting: [nr, le] });
        })), this.Transaction = (N = this, mi(Lh.prototype, function(j, ae, Z, J, Q) {
          var te = this;
          j !== "readonly" && ae.forEach(function(se) {
            se = (se = Z[se]) === null || se === void 0 ? void 0 : se.yProps, se && (ae = ae.concat(se.map(function(ue) {
              return ue.updatesTable;
            })));
          }), this.db = N, this.mode = j, this.storeNames = ae, this.schema = Z, this.chromeTransactionDurability = J, this.idbtrans = null, this.on = vi(this, "complete", "error", "abort"), this.parent = Q || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Xe(function(se, ue) {
            te._resolve = se, te._reject = ue;
          }), this._completion.then(function() {
            te.active = false, te.on.complete.fire();
          }, function(se) {
            var ue = te.active;
            return te.active = false, te.on.error.fire(se), te.parent ? te.parent._reject(se) : ue && te.idbtrans && te.idbtrans.abort(), Ie(se);
          });
        })), this.Version = (V = this, mi(Kh.prototype, function(j) {
          this.db = V, this._cfg = { version: j, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (q = this, mi(Ro.prototype, function(j, ae, Z) {
          if (this.db = q, this._ctx = { table: j, index: ae === ":id" ? null : ae, or: Z }, this._cmp = this._ascending = lr, this._descending = function(J, Q) {
            return lr(Q, J);
          }, this._max = function(J, Q) {
            return 0 < lr(J, Q) ? J : Q;
          }, this._min = function(J, Q) {
            return lr(J, Q) < 0 ? J : Q;
          }, this._IDBKeyRange = q._deps.IDBKeyRange, !this._IDBKeyRange) throw new W.MissingAPI();
        })), this.on("versionchange", function(j) {
          0 < j.newVersion ? console.warn("Another connection wants to upgrade database '".concat(p.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(p.name, "'. Closing db now to resume the delete request.")), p.close({ disableAutoOpen: false });
        }), this.on("blocked", function(j) {
          !j.newVersion || j.newVersion < j.oldVersion ? console.warn("Dexie.delete('".concat(p.name, "') was blocked")) : console.warn("Upgrade '".concat(p.name, "' blocked by other connection holding version ").concat(j.oldVersion / 10));
        }), this._maxKey = wi(u.IDBKeyRange), this._createTransaction = function(j, ae, Z, J) {
          return new p.Transaction(j, ae, Z, p._options.chromeTransactionDurability, J);
        }, this._fireOnBlocked = function(j) {
          p.on("blocked").fire(j), Nr.filter(function(ae) {
            return ae.name === p.name && ae !== p && !ae._state.vcFired;
          }).map(function(ae) {
            return ae.on("versionchange").fire(j);
          });
        }, this.use($h), this.use(Jh), this.use(qh), this.use(Gh), this.use(zh);
        var re = new Proxy(this, { get: function(j, ae, Z) {
          if (ae === "_vip") return true;
          if (ae === "table") return function(Q) {
            return As(p.table(Q), re);
          };
          var J = Reflect.get(j, ae, Z);
          return J instanceof Co ? As(J, re) : ae === "tables" ? J.map(function(Q) {
            return As(Q, re);
          }) : ae === "_createTransaction" ? function() {
            return As(J.apply(this, arguments), re);
          } : J;
        } });
        this.vip = re, w.forEach(function(j) {
          return j(p);
        });
      }
      var Cs, na = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Qh = (G0.prototype.subscribe = function(c, u, p) {
        return this._subscribe(c && typeof c != "function" ? c : { next: c, error: u, complete: p });
      }, G0.prototype[na] = function() {
        return this;
      }, G0);
      function G0(c) {
        this._subscribe = c;
      }
      try {
        Cs = { indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB, IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange };
      } catch {
        Cs = { indexedDB: null, IDBKeyRange: null };
      }
      function qo(c) {
        var u, p = false, w = new Qh(function(k) {
          var T = fr(c), N, V = false, q = {}, Y = {}, re = { get closed() {
            return V;
          }, unsubscribe: function() {
            V || (V = true, N && N.abort(), j && en.storagemutated.unsubscribe(Z));
          } };
          k.start && k.start(re);
          var j = false, ae = function() {
            return Ne(J);
          }, Z = function(Q) {
            Ss(q, Q), M0(Y, q) && ae();
          }, J = function() {
            var Q, te, se;
            !V && Cs.indexedDB && (q = {}, Q = {}, N && N.abort(), N = new AbortController(), se = (function(ue) {
              var pe = Ya();
              try {
                T && R();
                var ge = I(c, ue);
                return ge = T ? ge.finally(L) : ge;
              } finally {
                pe && Za();
              }
            })(te = { subscr: Q, signal: N.signal, requery: ae, querier: c, trans: null }), Promise.resolve(se).then(function(ue) {
              p = true, u = ue, V || te.signal.aborted || (q = {}, (function(pe) {
                for (var ge in pe) if (v(pe, ge)) return;
                return 1;
              })(Y = Q) || j || (en(_i, Z), j = true), Ne(function() {
                return !V && k.next && k.next(ue);
              }));
            }, function(ue) {
              p = false, ["DatabaseClosedError", "AbortError"].includes(ue == null ? void 0 : ue.name) || V || Ne(function() {
                V || k.error && k.error(ue);
              });
            }));
          };
          return setTimeout(ae, 0), re;
        });
        return w.hasValue = function() {
          return p;
        }, w.getValue = function() {
          return u;
        }, w;
      }
      var _n = Ba;
      function z0(c) {
        var u = rn;
        try {
          rn = true, en.storagemutated.fire(c), H0(c, true);
        } finally {
          rn = u;
        }
      }
      d(_n, a(a({}, X), { delete: function(c) {
        return new _n(c, { addons: [] }).delete();
      }, exists: function(c) {
        return new _n(c, { addons: [] }).open().then(function(u) {
          return u.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(c) {
        try {
          return u = _n.dependencies, p = u.indexedDB, u = u.IDBKeyRange, (P0(p) ? Promise.resolve(p.databases()).then(function(w) {
            return w.map(function(k) {
              return k.name;
            }).filter(function(k) {
              return k !== Hr;
            });
          }) : R0(p, u).toCollection().primaryKeys()).then(c);
        } catch {
          return Ie(new W.MissingAPI());
        }
        var u, p;
      }, defineClass: function() {
        return function(c) {
          o(this, c);
        };
      }, ignoreTransaction: function(c) {
        return Je.trans ? ie(Je.transless, c) : c();
      }, vip: B0, async: function(c) {
        return function() {
          try {
            var u = V0(c.apply(this, arguments));
            return u && typeof u.then == "function" ? u : Xe.resolve(u);
          } catch (p) {
            return Ie(p);
          }
        };
      }, spawn: function(c, u, p) {
        try {
          var w = V0(c.apply(p, u || []));
          return w && typeof w.then == "function" ? w : Xe.resolve(w);
        } catch (k) {
          return Ie(k);
        }
      }, currentTransaction: { get: function() {
        return Je.trans || null;
      } }, waitFor: function(c, u) {
        return u = Xe.resolve(typeof c == "function" ? _n.ignoreTransaction(c) : c).timeout(u || 6e4), Je.trans ? Je.trans.waitFor(u) : u;
      }, Promise: Xe, debug: { get: function() {
        return Er;
      }, set: function(c) {
        Kr(c);
      } }, derive: y, extend: o, props: d, override: E, Events: vi, on: en, liveQuery: qo, extendObservabilitySet: Ss, getByKeyPath: G, setByKeyPath: F, delByKeyPath: function(c, u) {
        typeof u == "string" ? F(c, u, void 0) : "length" in u && [].map.call(u, function(p) {
          F(c, p, void 0);
        });
      }, shallowClone: U, deepClone: de, getObjectDiff: X0, cmp: lr, asap: M, minKey: -1 / 0, addons: [], connections: Nr, errnames: Ze, dependencies: Cs, cache: gn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(c) {
        return parseInt(c);
      }).reduce(function(c, u, p) {
        return c + u / Math.pow(10, 2 * p);
      }) })), _n.maxKey = wi(_n.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (en(_i, function(c) {
        rn || (c = new CustomEvent(F0, { detail: c }), rn = true, dispatchEvent(c), rn = false);
      }), addEventListener(F0, function(c) {
        c = c.detail, rn || z0(c);
      }));
      var $n, rn = false, Yo = function() {
      };
      return typeof BroadcastChannel < "u" && ((Yo = function() {
        ($n = new BroadcastChannel(F0)).onmessage = function(c) {
          return c.data && z0(c.data);
        };
      })(), typeof $n.unref == "function" && $n.unref(), en(_i, function(c) {
        rn || $n.postMessage(c);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(c) {
        if (!Ba.disableBfCache && c.persisted) {
          Er && console.debug("Dexie: handling persisted pagehide"), $n == null ? void 0 : $n.close();
          for (var u = 0, p = Nr; u < p.length; u++) p[u].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(c) {
        !Ba.disableBfCache && c.persisted && (Er && console.debug("Dexie: handling persisted pageshow"), Yo(), z0({ all: new Tt(-1 / 0, [[]]) }));
      })), Xe.rejectionMapper = function(c, u) {
        return !c || c instanceof Te || c instanceof TypeError || c instanceof SyntaxError || !c.name || !z[c.name] ? c : (u = new z[c.name](u || c.message, c), "stack" in c && _(u, "stack", { get: function() {
          return this.inner.stack;
        } }), u);
      }, Kr(Er), a(Ba, Object.freeze({ __proto__: null, Dexie: Ba, liveQuery: qo, Entity: Kn, cmp: lr, PropModification: pi, replacePrefix: function(c, u) {
        return new pi({ replacePrefix: [c, u] });
      }, add: function(c) {
        return new pi({ add: c });
      }, remove: function(c) {
        return new pi({ remove: c });
      }, default: Ba, RangeSet: Tt, mergeRanges: Ei, rangesOverlap: Uo }), { default: Ba }), Ba;
    });
  })($s)), $s.exports;
}
var R1 = N1();
const Tf = D1(R1), ac = /* @__PURE__ */ Symbol.for("Dexie"), qs = globalThis[ac] || (globalThis[ac] = Tf);
if (Tf.semVer !== qs.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${Tf.semVer} and ${qs.semVer}`);
const { liveQuery: WE, mergeRanges: HE, rangesOverlap: VE, RangeSet: XE, cmp: KE, Entity: jE, PropModification: GE, replacePrefix: zE, add: $E, remove: qE, DexieYProvider: YE } = qs, nc = ["accession", "book_name", "isbn", "book_type", "author", "published", "num_of_pages", "image_links", "language"], va = new qs("SpreadsheetDatabase");
va.version(2).stores({ spreadsheets: "++, &isbn, accession, book_name, book_type, author, published, num_of_pages, image_links, language" });
va.version(1).stores({ settings: "key" });
var Ys = {};
Ys.version = "0.20.3";
var la = 1200, P1 = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Vf = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, Xf = function(e) {
  P1.indexOf(e) != -1 && (Vf[0] = e);
};
function B1() {
  Xf(1252);
}
var ga = function(e) {
  la = e, Xf(e);
};
function Kf() {
  ga(1200), B1();
}
function ic(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function kl(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function L1(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function El(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var Fi = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? kl(e.slice(2)) : r == 254 && t == 255 ? El(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, Os = function(r) {
  return String.fromCharCode(r);
}, sc = function(r) {
  return String.fromCharCode(r);
}, M1 = null, Bt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Zs(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e.charCodeAt(l++), i = t >> 2, a = e.charCodeAt(l++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(l++), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Bt.charAt(i) + Bt.charAt(s) + Bt.charAt(f) + Bt.charAt(o);
  return r;
}
function U1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e.charCodeAt(l++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(l++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(l++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Bt.charAt(i) + Bt.charAt(s) + Bt.charAt(f) + Bt.charAt(o);
  return r;
}
function W1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e[l++], i = t >> 2, a = e[l++], s = (t & 3) << 4 | a >> 4, n = e[l++], f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Bt.charAt(i) + Bt.charAt(s) + Bt.charAt(f) + Bt.charAt(o);
  return r;
}
function ra(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0;
  if (e.slice(0, 5) == "data:") {
    var l = e.slice(0, 1024).indexOf(";base64,");
    l > -1 && (e = e.slice(l + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; ) i = Bt.indexOf(e.charAt(l++)), s = Bt.indexOf(e.charAt(l++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Bt.indexOf(e.charAt(l++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), o = Bt.indexOf(e.charAt(l++)), n = (f & 3) << 6 | o, o !== 64 && (r += String.fromCharCode(n));
  return r;
}
var mr = (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), Ra = (function() {
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
})(), Hi = (function() {
  if (typeof Buffer > "u") return false;
  var e = Ra([65, 0]);
  if (!e) return false;
  var r = e.toString("utf16le");
  return r.length == 1;
})();
function cn(e) {
  return mr ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function fc(e) {
  return mr ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Xt = function(r) {
  return mr ? Ra(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function o0(e) {
  if (typeof ArrayBuffer > "u") return Xt(e);
  for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
  return r;
}
function Na(e) {
  if (Array.isArray(e)) return e.map(function(a) {
    return String.fromCharCode(a);
  }).join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function H1(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function jf(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return jf(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var rt = mr ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Ra(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(Xt(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function V1(e) {
  for (var r = [], t = 0, a = e.length + 250, n = cn(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048) n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = cn(65535), a = 65530);
  }
  return r.push(n.slice(0, t)), rt(r);
}
var $t = /\u0000/g, Ai = /[\u0001-\u0006]/g;
function ei(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function _a(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
function Gf(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr(" ", r - t.length) + t;
}
function Js(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + Cr(" ", r - t.length);
}
function X1(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
function K1(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
var oc = Math.pow(2, 32);
function qn(e, r) {
  if (e > oc || e < -oc) return X1(e, r);
  var t = Math.round(e);
  return K1(t, r);
}
function Qs(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var cc = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], rf = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function j1(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var ir = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, lc = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, G1 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function e0(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, o = 1, l = 0, h = 0, v = Math.floor(n); l < r && (v = Math.floor(n), f = v * s + i, h = v * l + o, !(n - v < 5e-8)); ) n = 1 / (n - v), i = s, s = f, o = l, l = h;
  if (h > r && (l > r ? (h = o, f = i) : (h = l, f = s)), !t) return [0, a * f, h];
  var d = Math.floor(a * f / h);
  return [d, a * f - d * h, h];
}
function z1(e) {
  var r = e.toPrecision(16);
  if (r.indexOf("e") > -1) {
    var t = r.slice(0, r.indexOf("e"));
    return t = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Cr("0", t.length - 15), t + r.slice(r.indexOf("e"));
  }
  var a = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Cr("0", r.length - 15);
  return Number(a);
}
function Ma(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  e = z1(e);
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), r && r.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60) s = t ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0) s = t ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + a - 1), s = [o.getFullYear(), o.getMonth() + 1, o.getDate()], i = o.getDay(), a < 60 && (i = (i + 6) % 7), t && (i = Z1(o, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
function zf(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function $1(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function q1(e) {
  var r = e < 0 ? 12 : 11, t = zf(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function Y1(e) {
  var r = zf(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function Vi(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = q1(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = Y1(e), zf($1(t.toUpperCase()));
}
function In(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Vi(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return ta(14, Yr(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Z1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function J1(e, r, t, a) {
  var n = "", i = 0, s = 0, f = t.y, o, l = 0;
  switch (e) {
    case 98:
      f = t.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          o = f % 100, l = 2;
          break;
        default:
          o = f % 1e4, l = 4;
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          o = t.m, l = r.length;
          break;
        case 3:
          return rf[t.m - 1][1];
        case 5:
          return rf[t.m - 1][0];
        default:
          return rf[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          o = t.d, l = r.length;
          break;
        case 3:
          return cc[t.q][0];
        default:
          return cc[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          o = 1 + (t.H + 11) % 12, l = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          o = t.H, l = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          o = t.M, l = r.length;
          break;
        default:
          throw "bad minute format: " + r;
      }
      break;
    case 115:
      if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
      return t.u === 0 && (r == "s" || r == "ss") ? _a(t.S, r.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (t.S + t.u)), i >= 60 * s && (i = 0), r === "s" ? i === 0 ? "0" : "" + i / s : (n = _a(i, 2 + a), r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case "[h]":
        case "[hh]":
          o = t.D * 24 + t.H;
          break;
        case "[m]":
        case "[mm]":
          o = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case "[s]":
        case "[ss]":
          o = ((t.D * 24 + t.H) * 60 + t.M) * 60 + (a == 0 ? Math.round(t.S + t.u) : t.S);
          break;
        default:
          throw "bad abstime format: " + r;
      }
      l = r.length === 3 ? 1 : 2;
      break;
    case 101:
      o = f, l = 1;
      break;
  }
  var h = l > 0 ? _a(o, l) : "";
  return h;
}
function Wa(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var Tl = /%/g;
function Q1(e, r, t) {
  var a = r.replace(Tl, ""), n = r.length - a.length;
  return Va(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function ed(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Va(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Sl(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Sl(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), t.indexOf("e") === -1) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i); t.substr(0, 2) === "0."; ) t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n), t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, l, h) {
      return o + l + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
var bl = /# (\?+)( ?)\/( ?)(\d+)/;
function rd(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Cr(" ", e[1].length + 1 + e[4].length) : Gf(s, e[1].length) + e[2] + "/" + e[3] + _a(f, e[4].length));
}
function td(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Cr(" ", e[1].length + 2 + e[4].length);
}
var Fl = /^#*0*\.([0#]+)/, Al = /\)[^)]*[0#]/, Cl = /\(###\) ###\\?-####/;
function Vt(e) {
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
function uc(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function hc(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function ad(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function nd(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function sa(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Al)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? sa("n", a, t) : "(" + sa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return ed(e, r, t);
  if (r.indexOf("%") !== -1) return Q1(e, r, t);
  if (r.indexOf("E") !== -1) return Sl(r, t);
  if (r.charCodeAt(0) === 36) return "$" + sa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + qn(o, r.length);
  if (r.match(/^[#?]+$/)) return n = qn(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Vt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(bl)) return rd(i, o, l);
  if (r.match(/^#+0+$/)) return l + qn(o, r.length - r.indexOf("0"));
  if (i = r.match(Fl)) return n = uc(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Vt(i[1])).replace(/\.$/, "." + Vt(i[1])).replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Cr("0", Vt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return l + uc(o, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return l + Wa(qn(o, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + sa(e, r, -t) : Wa("" + (Math.floor(t) + ad(t, i[1].length))) + "." + _a(hc(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return sa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(sa(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Cl)) return n = sa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + l, h = Va("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Vt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Gf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = qn(t, 0), r.length <= n.length ? n : Vt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Vt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return s = hc(t, i[1].length), t < 0 ? "-" + sa(e, r, -t) : Wa(nd(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? _a(0, 3 - _.length) : "") + _;
  }) + "." + _a(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return sa(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Wa(qn(o, 0));
      return x !== "0" ? l + x : "";
    case "###,###.00":
      return sa(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return sa(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function id(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Va(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function sd(e, r, t) {
  var a = r.replace(Tl, ""), n = r.length - a.length;
  return Va(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function Il(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Il(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !t.match(/[Ee]/)) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i), t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, l, h) {
      return o + l + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
function Aa(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Al)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? Aa("n", a, t) : "(" + Aa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return id(e, r, t);
  if (r.indexOf("%") !== -1) return sd(e, r, t);
  if (r.indexOf("E") !== -1) return Il(r, t);
  if (r.charCodeAt(0) === 36) return "$" + Aa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + _a(o, r.length);
  if (r.match(/^[#?]+$/)) return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Vt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(bl)) return td(i, o, l);
  if (r.match(/^#+0+$/)) return l + _a(o, r.length - r.indexOf("0"));
  if (i = r.match(Fl)) return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Vt(i[1])).replace(/\.$/, "." + Vt(i[1])), n = n.replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Cr("0", Vt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return l + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return l + Wa("" + o);
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + Aa(e, r, -t) : Wa("" + t) + "." + Cr("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return Aa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(Aa(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Cl)) return n = Aa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + l, h = Va("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Vt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Gf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : Vt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Vt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + Aa(e, r, -t) : Wa("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? _a(0, 3 - _.length) : "") + _;
  }) + "." + _a(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Wa("" + o);
      return x !== "0" ? l + x : "";
    default:
      if (r.match(/\.[0#?]*$/)) return Aa(e, r.slice(0, r.lastIndexOf(".")), t) + Vt(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function Va(e, r, t) {
  return (t | 0) === t ? Aa(e, r, t) : sa(e, r, t);
}
function fd(e) {
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
var Dl = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ua(e) {
  for (var r = 0, t = "", a = ""; r < e.length; ) switch (t = e.charAt(r)) {
    case "G":
      Qs(e, r) && (r += 6), r++;
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
      if (a.match(Dl)) return true;
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
function od(e, r, t, a) {
  for (var n = [], i = "", s = 0, f = "", o = "t", l, h, v, d = "H"; s < e.length; ) switch (f = e.charAt(s)) {
    case "G":
      if (!Qs(e, s)) throw new Error("unrecognized character " + f + " in " + e);
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
        if (l == null && (l = Ma(r, t, e.charAt(s + 1) === "2"), l == null)) return "";
        n[n.length] = { t: "X", v: e.substr(s, 2) }, o = f, s += 2;
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
      if (r < 0 || l == null && (l = Ma(r, t), l == null)) return "";
      for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
      f === "m" && o.toLowerCase() === "h" && (f = "M"), f === "h" && (f = d), n[n.length] = { t: f, v: i }, o = f;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: f, v: f };
      if (l == null && (l = Ma(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (l != null && (y.v = l.H >= 12 ? e.charAt(s + 2) : f), y.t = "T", d = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (l != null && (y.v = l.H >= 12 ? "PM" : "AM"), y.t = "T", s += 5, d = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (l != null && (y.v = l.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", s += 5, d = "h") : (y.t = "t", ++s), l == null && y.t === "T") return "";
      n[n.length] = y, o = f;
      break;
    case "[":
      for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
      if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
      if (i.match(Dl)) {
        if (l == null && (l = Ma(r, t), l == null)) return "";
        n[n.length] = { t: "Z", v: i.toLowerCase() }, o = i.charAt(1);
      } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", ua(e) || (n[n.length] = { t: "t", v: i }));
      break;
    case ".":
      if (l != null) {
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
      n[n.length] = { t: f, v: i }, o = f;
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
  for (s = n.length - 1, o = "t"; s >= 0; --s) switch (n[s].t) {
    case "h":
    case "H":
      n[s].t = d, o = "h", m < 1 && (m = 1);
      break;
    case "s":
      (S = n[s].v.match(/\.0+$/)) && (g = Math.max(g, S[0].length - 1), m = 4), m < 3 && (m = 3);
    case "d":
    case "y":
    case "e":
      o = n[s].t;
      break;
    case "M":
      o = n[s].t, m < 2 && (m = 2);
      break;
    case "m":
      o === "s" && (n[s].t = "M", m < 2 && (m = 2));
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
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H), l.H >= 24 && (l.H = 0, ++l.D, E = Ma(l.D), E.u = l.u, E.S = l.S, E.M = l.M, E.H = l.H, l = E);
      break;
    case 4:
      switch (g) {
        case 1:
          l.u = Math.round(l.u * 10) / 10;
          break;
        case 2:
          l.u = Math.round(l.u * 100) / 100;
          break;
        case 3:
          l.u = Math.round(l.u * 1e3) / 1e3;
          break;
      }
      l.u >= 1 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H), l.H >= 24 && (l.H = 0, ++l.D, E = Ma(l.D), E.u = l.u, E.S = l.S, E.M = l.M, E.H = l.H, l = E);
      break;
  }
  var A = "", M;
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
      n[s].v = J1(n[s].t.charCodeAt(0), n[s].v, l, g), n[s].t = "t";
      break;
    case "n":
    case "?":
      for (M = s + 1; n[M] != null && ((f = n[M].t) === "?" || f === "D" || (f === " " || f === "t") && n[M + 1] != null && (n[M + 1].t === "?" || n[M + 1].t === "t" && n[M + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[M].v === "/" || n[M].v === " " && n[M + 1] != null && n[M + 1].t == "?")); ) n[s].v += n[M].v, n[M] = { v: "", t: ";" }, ++M;
      A += n[s].v, s = M - 1;
      break;
    case "G":
      n[s].t = "t", n[s].v = In(r, t);
      break;
  }
  var G = "", F, U;
  if (A.length > 0) {
    A.charCodeAt(0) == 40 ? (F = r < 0 && A.charCodeAt(0) === 45 ? -r : r, U = Va("n", A, F)) : (F = r < 0 && a > 1 ? -r : r, U = Va("n", A, F), F < 0 && n[0] && n[0].t == "t" && (U = U.substr(1), n[0].v = "-" + n[0].v)), M = U.length - 1;
    var D = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      D = s;
      break;
    }
    var H = n.length;
    if (D === n.length && U.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s) n[s] == null || "n?".indexOf(n[s].t) === -1 || (M >= n[s].v.length - 1 ? (M -= n[s].v.length, n[s].v = U.substr(M + 1, n[s].v.length)) : M < 0 ? n[s].v = "" : (n[s].v = U.substr(0, M + 1), M = -1), n[s].t = "t", H = s);
      M >= 0 && H < n.length && (n[H].v = U.substr(0, M + 1) + n[H].v);
    } else if (D !== n.length && U.indexOf("E") === -1) {
      for (M = U.indexOf(".") - 1, s = D; s >= 0; --s) if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
        for (h = n[s].v.indexOf(".") > -1 && s === D ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, G = n[s].v.substr(h + 1); h >= 0; --h) M >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#") && (G = U.charAt(M--) + G);
        n[s].v = G, n[s].t = "t", H = s;
      }
      for (M >= 0 && H < n.length && (n[H].v = U.substr(0, M + 1) + n[H].v), M = U.indexOf(".") + 1, s = D; s < n.length; ++s) if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== D)) {
        for (h = n[s].v.indexOf(".") > -1 && s === D ? n[s].v.indexOf(".") + 1 : 0, G = n[s].v.substr(0, h); h < n[s].v.length; ++h) M < U.length && (G += U.charAt(M++));
        n[s].v = G, n[s].t = "t", H = s;
      }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (F = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = Va(n[s].t, n[s].v, F), n[s].t = "t");
  var K = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (K += n[s].v);
  return K;
}
var dc = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function xc(e, r) {
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
function cd(e, r) {
  var t = fd(e), a = t.length, n = t[a - 1].indexOf("@");
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
    var s = t[0].match(dc), f = t[1].match(dc);
    return xc(r, s) ? [a, t[0]] : xc(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function ta(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : ir)[e], a == null && (a = t.table && t.table[lc[e]] || ir[lc[e]]), a == null && (a = G1[e] || "General");
      break;
  }
  if (Qs(a, 0)) return In(r, t);
  r instanceof Date && (r = Yr(r, t.date1904));
  var n = cd(a, r);
  if (Qs(n[1])) return In(r, t);
  if (r === true) r = "TRUE";
  else if (r === false) r = "FALSE";
  else {
    if (r === "" || r == null) return "";
    if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return od(n[1], r, t, n[0]);
}
function Ol(e, r) {
  if (typeof r != "number") {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (ir[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (ir[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return ir[r] = e, r;
}
function c0(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Ol(e[r], r);
}
function ci() {
  ir = j1();
}
var ld = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, r0 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ud(e) {
  var r = typeof e == "number" ? ir[e] : e;
  return r = r.replace(r0, "(\\d+)"), r0.lastIndex = 0, new RegExp("^" + r + "$");
}
function hd(e, r, t) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, o = -1;
  (r.match(r0) || []).forEach(function(v, d) {
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
        o = x;
        break;
      case "m":
        s >= 0 ? f = x : n = x;
        break;
    }
  }), r0.lastIndex = 0, o >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var l = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var h = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  return s == -1 && f == -1 && o == -1 ? l : a == -1 && n == -1 && i == -1 ? h : l + "T" + h;
}
var dd = { "d.m": "d\\.m" };
function on(e, r) {
  return Ol(dd[e] || e, r);
}
var pc = (function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var F = 0, U = new Array(256), D = 0; D != 256; ++D) F = D, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, U[D] = F;
    return typeof Int32Array < "u" ? new Int32Array(U) : U;
  }
  var t = r();
  function a(F) {
    var U = 0, D = 0, H = 0, K = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (H = 0; H != 256; ++H) K[H] = F[H];
    for (H = 0; H != 256; ++H) for (D = F[H], U = 256 + H; U < 4096; U += 256) D = K[U] = D >>> 8 ^ F[D & 255];
    var ee = [];
    for (H = 1; H != 16; ++H) ee[H - 1] = typeof Int32Array < "u" && typeof K.subarray == "function" ? K.subarray(H * 256, H * 256 + 256) : K.slice(H * 256, H * 256 + 256);
    return ee;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], o = n[3], l = n[4], h = n[5], v = n[6], d = n[7], x = n[8], _ = n[9], y = n[10], m = n[11], g = n[12], S = n[13], E = n[14];
  function A(F, U) {
    for (var D = U ^ -1, H = 0, K = F.length; H < K; ) D = D >>> 8 ^ t[(D ^ F.charCodeAt(H++)) & 255];
    return ~D;
  }
  function M(F, U) {
    for (var D = U ^ -1, H = F.length - 15, K = 0; K < H; ) D = E[F[K++] ^ D & 255] ^ S[F[K++] ^ D >> 8 & 255] ^ g[F[K++] ^ D >> 16 & 255] ^ m[F[K++] ^ D >>> 24] ^ y[F[K++]] ^ _[F[K++]] ^ x[F[K++]] ^ d[F[K++]] ^ v[F[K++]] ^ h[F[K++]] ^ l[F[K++]] ^ o[F[K++]] ^ f[F[K++]] ^ s[F[K++]] ^ i[F[K++]] ^ t[F[K++]];
    for (H += 15; K < H; ) D = D >>> 8 ^ t[(D ^ F[K++]) & 255];
    return ~D;
  }
  function G(F, U) {
    for (var D = U ^ -1, H = 0, K = F.length, ee = 0, de = 0; H < K; ) ee = F.charCodeAt(H++), ee < 128 ? D = D >>> 8 ^ t[(D ^ ee) & 255] : ee < 2048 ? (D = D >>> 8 ^ t[(D ^ (192 | ee >> 6 & 31)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee & 63)) & 255]) : ee >= 55296 && ee < 57344 ? (ee = (ee & 1023) + 64, de = F.charCodeAt(H++) & 1023, D = D >>> 8 ^ t[(D ^ (240 | ee >> 8 & 7)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee >> 2 & 63)) & 255], D = D >>> 8 ^ t[(D ^ (128 | de >> 6 & 15 | (ee & 3) << 4)) & 255], D = D >>> 8 ^ t[(D ^ (128 | de & 63)) & 255]) : (D = D >>> 8 ^ t[(D ^ (224 | ee >> 12 & 15)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee >> 6 & 63)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee & 63)) & 255]);
    return ~D;
  }
  return e.table = t, e.bstr = A, e.buf = M, e.str = G, e;
})(), sr = (function() {
  var r = {};
  r.version = "1.2.2";
  function t(b, B) {
    for (var C = b.split("/"), I = B.split("/"), R = 0, L = 0, fe = Math.min(C.length, I.length); R < fe; ++R) {
      if (L = C[R].length - I[R].length) return L;
      if (C[R] != I[R]) return C[R] < I[R] ? -1 : 1;
    }
    return C.length - I.length;
  }
  function a(b) {
    if (b.charAt(b.length - 1) == "/") return b.slice(0, -1).indexOf("/") === -1 ? b : a(b.slice(0, -1));
    var B = b.lastIndexOf("/");
    return B === -1 ? b : b.slice(0, B + 1);
  }
  function n(b) {
    if (b.charAt(b.length - 1) == "/") return n(b.slice(0, -1));
    var B = b.lastIndexOf("/");
    return B === -1 ? b : b.slice(B + 1);
  }
  function i(b, B) {
    typeof B == "string" && (B = new Date(B));
    var C = B.getHours();
    C = C << 6 | B.getMinutes(), C = C << 5 | B.getSeconds() >>> 1, b.write_shift(2, C);
    var I = B.getFullYear() - 1980;
    I = I << 4 | B.getMonth() + 1, I = I << 5 | B.getDate(), b.write_shift(2, I);
  }
  function s(b) {
    var B = b.read_shift(2) & 65535, C = b.read_shift(2) & 65535, I = /* @__PURE__ */ new Date(), R = C & 31;
    C >>>= 5;
    var L = C & 15;
    C >>>= 4, I.setMilliseconds(0), I.setFullYear(C + 1980), I.setMonth(L - 1), I.setDate(R);
    var fe = B & 31;
    B >>>= 5;
    var xe = B & 63;
    return B >>>= 6, I.setHours(B), I.setMinutes(xe), I.setSeconds(fe << 1), I;
  }
  function f(b) {
    lt(b, 0);
    for (var B = {}, C = 0; b.l <= b.length - 4; ) {
      var I = b.read_shift(2), R = b.read_shift(2), L = b.l + R, fe = {};
      switch (I) {
        case 21589:
          C = b.read_shift(1), C & 1 && (fe.mtime = b.read_shift(4)), R > 5 && (C & 2 && (fe.atime = b.read_shift(4)), C & 4 && (fe.ctime = b.read_shift(4))), fe.mtime && (fe.mt = new Date(fe.mtime * 1e3));
          break;
        case 1:
          {
            var xe = b.read_shift(4), ne = b.read_shift(4);
            fe.usz = ne * Math.pow(2, 32) + xe, xe = b.read_shift(4), ne = b.read_shift(4), fe.csz = ne * Math.pow(2, 32) + xe;
          }
          break;
      }
      b.l = L, B[I] = fe;
    }
    return B;
  }
  var o;
  function l() {
    return o || (o = xd);
  }
  function h(b, B) {
    if (b[0] == 80 && b[1] == 75) return Xe(b, B);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return Za(b, B);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var C = 3, I = 512, R = 0, L = 0, fe = 0, xe = 0, ne = 0, ce = [], ie = b.slice(0, 512);
    lt(ie, 0);
    var Ee = v(ie);
    switch (C = Ee[0], C) {
      case 3:
        I = 512;
        break;
      case 4:
        I = 4096;
        break;
      case 0:
        if (Ee[1] == 0) return Xe(b, B);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + C);
    }
    I !== 512 && (ie = b.slice(0, I), lt(ie, 28));
    var Ne = b.slice(0, I);
    d(ie, C);
    var Ie = ie.read_shift(4, "i");
    if (C === 3 && Ie !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + Ie);
    ie.l += 4, fe = ie.read_shift(4, "i"), ie.l += 4, ie.chk("00100000", "Mini Stream Cutoff Size: "), xe = ie.read_shift(4, "i"), R = ie.read_shift(4, "i"), ne = ie.read_shift(4, "i"), L = ie.read_shift(4, "i");
    for (var we = -1, be = 0; be < 109 && (we = ie.read_shift(4, "i"), !(we < 0)); ++be) ce[be] = we;
    var cr = x(b, I);
    m(ne, L, cr, I, ce);
    var Nr = S(cr, fe, ce, I);
    fe < Nr.length && (Nr[fe].name = "!Directory"), R > 0 && xe !== de && (Nr[xe].name = "!MiniFAT"), Nr[ce[0]].name = "!FAT", Nr.fat_addrs = ce, Nr.ssz = I;
    var Hr = {}, it = [], Pa = [], qt = [];
    E(fe, Nr, cr, it, R, Hr, Pa, xe), _(Pa, qt, it), it.shift();
    var Ja = { FileIndex: Pa, FullPaths: qt };
    return B && B.raw && (Ja.raw = { header: Ne, sectors: cr }), Ja;
  }
  function v(b) {
    if (b[b.l] == 80 && b[b.l + 1] == 75) return [0, 0];
    b.chk(Pe, "Header Signature: "), b.l += 16;
    var B = b.read_shift(2, "u");
    return [b.read_shift(2, "u"), B];
  }
  function d(b, B) {
    var C = 9;
    switch (b.l += 2, C = b.read_shift(2)) {
      case 9:
        if (B != 3) throw new Error("Sector Shift: Expected 9 saw " + C);
        break;
      case 12:
        if (B != 4) throw new Error("Sector Shift: Expected 12 saw " + C);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + C);
    }
    b.chk("0600", "Mini Sector Shift: "), b.chk("000000000000", "Reserved: ");
  }
  function x(b, B) {
    for (var C = Math.ceil(b.length / B) - 1, I = [], R = 1; R < C; ++R) I[R - 1] = b.slice(R * B, (R + 1) * B);
    return I[C - 1] = b.slice(C * B), I;
  }
  function _(b, B, C) {
    for (var I = 0, R = 0, L = 0, fe = 0, xe = 0, ne = C.length, ce = [], ie = []; I < ne; ++I) ce[I] = ie[I] = I, B[I] = C[I];
    for (; xe < ie.length; ++xe) I = ie[xe], R = b[I].L, L = b[I].R, fe = b[I].C, ce[I] === I && (R !== -1 && ce[R] !== R && (ce[I] = ce[R]), L !== -1 && ce[L] !== L && (ce[I] = ce[L])), fe !== -1 && (ce[fe] = I), R !== -1 && I != ce[I] && (ce[R] = ce[I], ie.lastIndexOf(R) < xe && ie.push(R)), L !== -1 && I != ce[I] && (ce[L] = ce[I], ie.lastIndexOf(L) < xe && ie.push(L));
    for (I = 1; I < ne; ++I) ce[I] === I && (L !== -1 && ce[L] !== L ? ce[I] = ce[L] : R !== -1 && ce[R] !== R && (ce[I] = ce[R]));
    for (I = 1; I < ne; ++I) if (b[I].type !== 0) {
      if (xe = I, xe != ce[xe]) do
        xe = ce[xe], B[I] = B[xe] + "/" + B[I];
      while (xe !== 0 && ce[xe] !== -1 && xe != ce[xe]);
      ce[I] = -1;
    }
    for (B[0] += "/", I = 1; I < ne; ++I) b[I].type !== 2 && (B[I] += "/");
  }
  function y(b, B, C) {
    for (var I = b.start, R = b.size, L = [], fe = I; C && R > 0 && fe >= 0; ) L.push(B.slice(fe * ee, fe * ee + ee)), R -= ee, fe = En(C, fe * 4);
    return L.length === 0 ? oe(0) : rt(L).slice(0, b.size);
  }
  function m(b, B, C, I, R) {
    var L = de;
    if (b === de) {
      if (B !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var fe = C[b], xe = (I >>> 2) - 1;
      if (!fe) return;
      for (var ne = 0; ne < xe && (L = En(fe, ne * 4)) !== de; ++ne) R.push(L);
      B >= 1 && m(En(fe, I - 4), B - 1, C, I, R);
    }
  }
  function g(b, B, C, I, R) {
    var L = [], fe = [];
    R || (R = []);
    var xe = I - 1, ne = 0, ce = 0;
    for (ne = B; ne >= 0; ) {
      R[ne] = true, L[L.length] = ne, fe.push(b[ne]);
      var ie = C[Math.floor(ne * 4 / I)];
      if (ce = ne * 4 & xe, I < 4 + ce) throw new Error("FAT boundary crossed: " + ne + " 4 " + I);
      if (!b[ie]) break;
      ne = En(b[ie], ce);
    }
    return { nodes: L, data: bc([fe]) };
  }
  function S(b, B, C, I) {
    var R = b.length, L = [], fe = [], xe = [], ne = [], ce = I - 1, ie = 0, Ee = 0, Ne = 0, Ie = 0;
    for (ie = 0; ie < R; ++ie) if (xe = [], Ne = ie + B, Ne >= R && (Ne -= R), !fe[Ne]) {
      ne = [];
      var we = [];
      for (Ee = Ne; Ee >= 0; ) {
        we[Ee] = true, fe[Ee] = true, xe[xe.length] = Ee, ne.push(b[Ee]);
        var be = C[Math.floor(Ee * 4 / I)];
        if (Ie = Ee * 4 & ce, I < 4 + Ie) throw new Error("FAT boundary crossed: " + Ee + " 4 " + I);
        if (!b[be] || (Ee = En(b[be], Ie), we[Ee])) break;
      }
      L[Ne] = { nodes: xe, data: bc([ne]) };
    }
    return L;
  }
  function E(b, B, C, I, R, L, fe, xe) {
    for (var ne = 0, ce = I.length ? 2 : 0, ie = B[b].data, Ee = 0, Ne = 0, Ie; Ee < ie.length; Ee += 128) {
      var we = ie.slice(Ee, Ee + 128);
      lt(we, 64), Ne = we.read_shift(2), Ie = eo(we, 0, Ne - ce), I.push(Ie);
      var be = { name: Ie, type: we.read_shift(1), color: we.read_shift(1), L: we.read_shift(4, "i"), R: we.read_shift(4, "i"), C: we.read_shift(4, "i"), clsid: we.read_shift(16), state: we.read_shift(4, "i"), start: 0, size: 0 }, cr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      cr !== 0 && (be.ct = A(we, we.l - 8));
      var Nr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      Nr !== 0 && (be.mt = A(we, we.l - 8)), be.start = we.read_shift(4, "i"), be.size = we.read_shift(4, "i"), be.size < 0 && be.start < 0 && (be.size = be.type = 0, be.start = de, be.name = ""), be.type === 5 ? (ne = be.start, R > 0 && ne !== de && (B[ne].name = "!StreamData")) : be.size >= 4096 ? (be.storage = "fat", B[be.start] === void 0 && (B[be.start] = g(C, be.start, B.fat_addrs, B.ssz)), B[be.start].name = be.name, be.content = B[be.start].data.slice(0, be.size)) : (be.storage = "minifat", be.size < 0 ? be.size = 0 : ne !== de && be.start !== de && B[ne] && (be.content = y(be, B[ne].data, (B[xe] || {}).data))), be.content && lt(be.content, 0), L[Ie] = be, fe.push(be);
    }
  }
  function A(b, B) {
    return new Date((Qt(b, B + 4) / 1e7 * Math.pow(2, 32) + Qt(b, B) / 1e7 - 11644473600) * 1e3);
  }
  function M(b, B) {
    return l(), h(o.readFileSync(b), B);
  }
  function G(b, B) {
    var C = B && B.type;
    switch (C || mr && Buffer.isBuffer(b) && (C = "buffer"), C || "base64") {
      case "file":
        return M(b, B);
      case "base64":
        return h(Xt(ra(b)), B);
      case "binary":
        return h(Xt(b), B);
    }
    return h(b, B);
  }
  function F(b, B) {
    var C = B || {}, I = C.root || "Root Entry";
    if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
    b.FullPaths.length === 0 && (b.FullPaths[0] = I + "/", b.FileIndex[0] = { name: I, type: 5 }), C.CLSID && (b.FileIndex[0].clsid = C.CLSID), U(b);
  }
  function U(b) {
    var B = "Sh33tJ5";
    if (!sr.find(b, "/" + B)) {
      var C = oe(4);
      C[0] = 55, C[1] = C[3] = 50, C[2] = 54, b.FileIndex.push({ name: B, type: 2, content: C, size: 4, L: 69, R: 69, C: 69 }), b.FullPaths.push(b.FullPaths[0] + B), D(b);
    }
  }
  function D(b, B) {
    F(b);
    for (var C = false, I = false, R = b.FullPaths.length - 1; R >= 0; --R) {
      var L = b.FileIndex[R];
      switch (L.type) {
        case 0:
          I ? C = true : (b.FileIndex.pop(), b.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          I = true, isNaN(L.R * L.L * L.C) && (C = true), L.R > -1 && L.L > -1 && L.R == L.L && (C = true);
          break;
        default:
          C = true;
          break;
      }
    }
    if (!(!C && !B)) {
      var fe = new Date(1987, 1, 19), xe = 0, ne = Object.create ? /* @__PURE__ */ Object.create(null) : {}, ce = [];
      for (R = 0; R < b.FullPaths.length; ++R) ne[b.FullPaths[R]] = true, b.FileIndex[R].type !== 0 && ce.push([b.FullPaths[R], b.FileIndex[R]]);
      for (R = 0; R < ce.length; ++R) {
        var ie = a(ce[R][0]);
        for (I = ne[ie]; !I; ) {
          for (; a(ie) && !ne[a(ie)]; ) ie = a(ie);
          ce.push([ie, { name: n(ie).replace("/", ""), type: 1, clsid: ze, ct: fe, mt: fe, content: null }]), ne[ie] = true, ie = a(ce[R][0]), I = ne[ie];
        }
      }
      for (ce.sort(function(Ie, we) {
        return t(Ie[0], we[0]);
      }), b.FullPaths = [], b.FileIndex = [], R = 0; R < ce.length; ++R) b.FullPaths[R] = ce[R][0], b.FileIndex[R] = ce[R][1];
      for (R = 0; R < ce.length; ++R) {
        var Ee = b.FileIndex[R], Ne = b.FullPaths[R];
        if (Ee.name = n(Ne).replace("/", ""), Ee.L = Ee.R = Ee.C = -(Ee.color = 1), Ee.size = Ee.content ? Ee.content.length : 0, Ee.start = 0, Ee.clsid = Ee.clsid || ze, R === 0) Ee.C = ce.length > 1 ? 1 : -1, Ee.size = 0, Ee.type = 5;
        else if (Ne.slice(-1) == "/") {
          for (xe = R + 1; xe < ce.length && a(b.FullPaths[xe]) != Ne; ++xe) ;
          for (Ee.C = xe >= ce.length ? -1 : xe, xe = R + 1; xe < ce.length && a(b.FullPaths[xe]) != a(Ne); ++xe) ;
          Ee.R = xe >= ce.length ? -1 : xe, Ee.type = 1;
        } else a(b.FullPaths[R + 1] || "") == a(Ne) && (Ee.R = R + 1), Ee.type = 2;
      }
    }
  }
  function H(b, B) {
    var C = B || {};
    if (C.fileType == "mad") return xi(b, C);
    if (D(b), C.fileType === "zip") return ds(b, C);
    var I = (function(Ie) {
      for (var we = 0, be = 0, cr = 0; cr < Ie.FileIndex.length; ++cr) {
        var Nr = Ie.FileIndex[cr];
        if (Nr.content) {
          var Hr = Nr.content.length;
          Hr > 0 && (Hr < 4096 ? we += Hr + 63 >> 6 : be += Hr + 511 >> 9);
        }
      }
      for (var it = Ie.FullPaths.length + 3 >> 2, Pa = we + 7 >> 3, qt = we + 127 >> 7, Ja = Pa + be + it + qt, aa = Ja + 127 >> 7, Kn = aa <= 109 ? 0 : Math.ceil((aa - 109) / 127); Ja + aa + Kn + 127 >> 7 > aa; ) Kn = ++aa <= 109 ? 0 : Math.ceil((aa - 109) / 127);
      var lr = [1, Kn, aa, qt, it, be, we, 0];
      return Ie.FileIndex[0].size = we << 6, lr[7] = (Ie.FileIndex[0].start = lr[0] + lr[1] + lr[2] + lr[3] + lr[4] + lr[5]) + (lr[6] + 7 >> 3), lr;
    })(b), R = oe(I[7] << 9), L = 0, fe = 0;
    {
      for (L = 0; L < 8; ++L) R.write_shift(1, me[L]);
      for (L = 0; L < 8; ++L) R.write_shift(2, 0);
      for (R.write_shift(2, 62), R.write_shift(2, 3), R.write_shift(2, 65534), R.write_shift(2, 9), R.write_shift(2, 6), L = 0; L < 3; ++L) R.write_shift(2, 0);
      for (R.write_shift(4, 0), R.write_shift(4, I[2]), R.write_shift(4, I[0] + I[1] + I[2] + I[3] - 1), R.write_shift(4, 0), R.write_shift(4, 4096), R.write_shift(4, I[3] ? I[0] + I[1] + I[2] - 1 : de), R.write_shift(4, I[3]), R.write_shift(-4, I[1] ? I[0] - 1 : de), R.write_shift(4, I[1]), L = 0; L < 109; ++L) R.write_shift(-4, L < I[2] ? I[1] + L : -1);
    }
    if (I[1]) for (fe = 0; fe < I[1]; ++fe) {
      for (; L < 236 + fe * 127; ++L) R.write_shift(-4, L < I[2] ? I[1] + L : -1);
      R.write_shift(-4, fe === I[1] - 1 ? de : fe + 1);
    }
    var xe = function(Ie) {
      for (fe += Ie; L < fe - 1; ++L) R.write_shift(-4, L + 1);
      Ie && (++L, R.write_shift(-4, de));
    };
    for (fe = L = 0, fe += I[1]; L < fe; ++L) R.write_shift(-4, ke.DIFSECT);
    for (fe += I[2]; L < fe; ++L) R.write_shift(-4, ke.FATSECT);
    xe(I[3]), xe(I[4]);
    for (var ne = 0, ce = 0, ie = b.FileIndex[0]; ne < b.FileIndex.length; ++ne) ie = b.FileIndex[ne], ie.content && (ce = ie.content.length, !(ce < 4096) && (ie.start = fe, xe(ce + 511 >> 9)));
    for (xe(I[6] + 7 >> 3); R.l & 511; ) R.write_shift(-4, ke.ENDOFCHAIN);
    for (fe = L = 0, ne = 0; ne < b.FileIndex.length; ++ne) ie = b.FileIndex[ne], ie.content && (ce = ie.content.length, !(!ce || ce >= 4096) && (ie.start = fe, xe(ce + 63 >> 6)));
    for (; R.l & 511; ) R.write_shift(-4, ke.ENDOFCHAIN);
    for (L = 0; L < I[4] << 2; ++L) {
      var Ee = b.FullPaths[L];
      if (!Ee || Ee.length === 0) {
        for (ne = 0; ne < 17; ++ne) R.write_shift(4, 0);
        for (ne = 0; ne < 3; ++ne) R.write_shift(4, -1);
        for (ne = 0; ne < 12; ++ne) R.write_shift(4, 0);
        continue;
      }
      ie = b.FileIndex[L], L === 0 && (ie.start = ie.size ? ie.start - 1 : de);
      var Ne = L === 0 && C.root || ie.name;
      if (Ne.length > 31 && (console.error("Name " + Ne + " will be truncated to " + Ne.slice(0, 31)), Ne = Ne.slice(0, 31)), ce = 2 * (Ne.length + 1), R.write_shift(64, Ne, "utf16le"), R.write_shift(2, ce), R.write_shift(1, ie.type), R.write_shift(1, ie.color), R.write_shift(-4, ie.L), R.write_shift(-4, ie.R), R.write_shift(-4, ie.C), ie.clsid) R.write_shift(16, ie.clsid, "hex");
      else for (ne = 0; ne < 4; ++ne) R.write_shift(4, 0);
      R.write_shift(4, ie.state || 0), R.write_shift(4, 0), R.write_shift(4, 0), R.write_shift(4, 0), R.write_shift(4, 0), R.write_shift(4, ie.start), R.write_shift(4, ie.size), R.write_shift(4, 0);
    }
    for (L = 1; L < b.FileIndex.length; ++L) if (ie = b.FileIndex[L], ie.size >= 4096) if (R.l = ie.start + 1 << 9, mr && Buffer.isBuffer(ie.content)) ie.content.copy(R, R.l, 0, ie.size), R.l += ie.size + 511 & -512;
    else {
      for (ne = 0; ne < ie.size; ++ne) R.write_shift(1, ie.content[ne]);
      for (; ne & 511; ++ne) R.write_shift(1, 0);
    }
    for (L = 1; L < b.FileIndex.length; ++L) if (ie = b.FileIndex[L], ie.size > 0 && ie.size < 4096) if (mr && Buffer.isBuffer(ie.content)) ie.content.copy(R, R.l, 0, ie.size), R.l += ie.size + 63 & -64;
    else {
      for (ne = 0; ne < ie.size; ++ne) R.write_shift(1, ie.content[ne]);
      for (; ne & 63; ++ne) R.write_shift(1, 0);
    }
    if (mr) R.l = R.length;
    else for (; R.l < R.length; ) R.write_shift(1, 0);
    return R;
  }
  function K(b, B) {
    var C = b.FullPaths.map(function(ne) {
      return ne.toUpperCase();
    }), I = C.map(function(ne) {
      var ce = ne.split("/");
      return ce[ce.length - (ne.slice(-1) == "/" ? 2 : 1)];
    }), R = false;
    B.charCodeAt(0) === 47 ? (R = true, B = C[0].slice(0, -1) + B) : R = B.indexOf("/") !== -1;
    var L = B.toUpperCase(), fe = R === true ? C.indexOf(L) : I.indexOf(L);
    if (fe !== -1) return b.FileIndex[fe];
    var xe = !L.match(Ai);
    for (L = L.replace($t, ""), xe && (L = L.replace(Ai, "!")), fe = 0; fe < C.length; ++fe) if ((xe ? C[fe].replace(Ai, "!") : C[fe]).replace($t, "") == L || (xe ? I[fe].replace(Ai, "!") : I[fe]).replace($t, "") == L) return b.FileIndex[fe];
    return null;
  }
  var ee = 64, de = -2, Pe = "d0cf11e0a1b11ae1", me = [208, 207, 17, 224, 161, 177, 26, 225], ze = "00000000000000000000000000000000", ke = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: de, FREESECT: -1, HEADER_SIGNATURE: Pe, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: ze, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function Be(b, B, C) {
    l();
    var I = H(b, C);
    o.writeFileSync(B, I);
  }
  function Qe(b) {
    for (var B = new Array(b.length), C = 0; C < b.length; ++C) B[C] = String.fromCharCode(b[C]);
    return B.join("");
  }
  function he(b, B) {
    var C = H(b, B);
    switch (B && B.type || "buffer") {
      case "file":
        return l(), o.writeFileSync(B.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : Qe(C);
      case "base64":
        return Zs(typeof C == "string" ? C : Qe(C));
      case "buffer":
        if (mr) return Buffer.isBuffer(C) ? C : Ra(C);
      case "array":
        return typeof C == "string" ? Xt(C) : C;
    }
    return C;
  }
  var fr;
  function Me(b) {
    try {
      var B = b.InflateRaw, C = new B();
      if (C._processChunk(new Uint8Array([3, 0]), C._finishFlushFlag), C.bytesRead) fr = b;
      else throw new Error("zlib does not expose bytesRead");
    } catch (I) {
      console.error("cannot use native zlib: " + (I.message || I));
    }
  }
  function Te(b, B) {
    if (!fr) return Ta(b, B);
    var C = fr.InflateRaw, I = new C(), R = I._processChunk(b.slice(b.l), I._finishFlushFlag);
    return b.l += I.bytesRead, R;
  }
  function ye(b) {
    return fr ? fr.deflateRawSync(b) : xt(b);
  }
  var je = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ge = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ze = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function P(b) {
    var B = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (B >> 16 | B >> 8 | B) & 255;
  }
  for (var W = typeof Uint8Array < "u", z = W ? new Uint8Array(256) : [], X = 0; X < 256; ++X) z[X] = P(X);
  function le(b, B) {
    var C = z[b & 255];
    return B <= 8 ? C >>> 8 - B : (C = C << 8 | z[b >> 8 & 255], B <= 16 ? C >>> 16 - B : (C = C << 8 | z[b >> 16 & 255], C >>> 24 - B));
  }
  function O(b, B) {
    var C = B & 7, I = B >>> 3;
    return (b[I] | (C <= 6 ? 0 : b[I + 1] << 8)) >>> C & 3;
  }
  function Ce(b, B) {
    var C = B & 7, I = B >>> 3;
    return (b[I] | (C <= 5 ? 0 : b[I + 1] << 8)) >>> C & 7;
  }
  function We(b, B) {
    var C = B & 7, I = B >>> 3;
    return (b[I] | (C <= 4 ? 0 : b[I + 1] << 8)) >>> C & 15;
  }
  function Se(b, B) {
    var C = B & 7, I = B >>> 3;
    return (b[I] | (C <= 3 ? 0 : b[I + 1] << 8)) >>> C & 31;
  }
  function nr(b, B) {
    var C = B & 7, I = B >>> 3;
    return (b[I] | (C <= 1 ? 0 : b[I + 1] << 8)) >>> C & 127;
  }
  function rr(b, B, C) {
    var I = B & 7, R = B >>> 3, L = (1 << C) - 1, fe = b[R] >>> I;
    return C < 8 - I || (fe |= b[R + 1] << 8 - I, C < 16 - I) || (fe |= b[R + 2] << 16 - I, C < 24 - I) || (fe |= b[R + 3] << 24 - I), fe & L;
  }
  function or(b, B, C) {
    var I = B & 7, R = B >>> 3;
    return I <= 5 ? b[R] |= (C & 7) << I : (b[R] |= C << I & 255, b[R + 1] = (C & 7) >> 8 - I), B + 3;
  }
  function Ir(b, B, C) {
    var I = B & 7, R = B >>> 3;
    return C = (C & 1) << I, b[R] |= C, B + 1;
  }
  function Er(b, B, C) {
    var I = B & 7, R = B >>> 3;
    return C <<= I, b[R] |= C & 255, C >>>= 8, b[R + 1] = C, B + 8;
  }
  function Kr(b, B, C) {
    var I = B & 7, R = B >>> 3;
    return C <<= I, b[R] |= C & 255, C >>>= 8, b[R + 1] = C & 255, b[R + 2] = C >>> 8, B + 16;
  }
  function $e(b, B) {
    var C = b.length, I = 2 * C > B ? 2 * C : B + 5, R = 0;
    if (C >= B) return b;
    if (mr) {
      var L = fc(I);
      if (b.copy) b.copy(L);
      else for (; R < b.length; ++R) L[R] = b[R];
      return L;
    } else if (W) {
      var fe = new Uint8Array(I);
      if (fe.set) fe.set(b);
      else for (; R < C; ++R) fe[R] = b[R];
      return fe;
    }
    return b.length = I, b;
  }
  function Tr(b) {
    for (var B = new Array(b), C = 0; C < b; ++C) B[C] = 0;
    return B;
  }
  function Oe(b, B, C) {
    var I = 1, R = 0, L = 0, fe = 0, xe = 0, ne = b.length, ce = W ? new Uint16Array(32) : Tr(32);
    for (L = 0; L < 32; ++L) ce[L] = 0;
    for (L = ne; L < C; ++L) b[L] = 0;
    ne = b.length;
    var ie = W ? new Uint16Array(ne) : Tr(ne);
    for (L = 0; L < ne; ++L) ce[R = b[L]]++, I < R && (I = R), ie[L] = 0;
    for (ce[0] = 0, L = 1; L <= I; ++L) ce[L + 16] = xe = xe + ce[L - 1] << 1;
    for (L = 0; L < ne; ++L) xe = b[L], xe != 0 && (ie[L] = ce[xe + 16]++);
    var Ee = 0;
    for (L = 0; L < ne; ++L) if (Ee = b[L], Ee != 0) for (xe = le(ie[L], I) >> I - Ee, fe = (1 << I + 4 - Ee) - 1; fe >= 0; --fe) B[xe | fe << Ee] = Ee & 15 | L << 4;
    return I;
  }
  var Jr = W ? new Uint16Array(512) : Tr(512), qr = W ? new Uint16Array(32) : Tr(32);
  if (!W) {
    for (var Ur = 0; Ur < 512; ++Ur) Jr[Ur] = 0;
    for (Ur = 0; Ur < 32; ++Ur) qr[Ur] = 0;
  }
  (function() {
    for (var b = [], B = 0; B < 32; B++) b.push(5);
    Oe(b, qr, 32);
    var C = [];
    for (B = 0; B <= 143; B++) C.push(8);
    for (; B <= 255; B++) C.push(9);
    for (; B <= 279; B++) C.push(7);
    for (; B <= 287; B++) C.push(8);
    Oe(C, Jr, 288);
  })();
  var yt = (function() {
    for (var B = W ? new Uint8Array(32768) : [], C = 0, I = 0; C < Ze.length - 1; ++C) for (; I < Ze[C + 1]; ++I) B[I] = C;
    for (; I < 32768; ++I) B[I] = 29;
    var R = W ? new Uint8Array(259) : [];
    for (C = 0, I = 0; C < Ge.length - 1; ++C) for (; I < Ge[C + 1]; ++I) R[I] = C;
    function L(xe, ne) {
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
          for (ce = or(ne, ce, +(ie + Ne == xe.length)), ce & 7 && (ce += 8 - (ce & 7)), ne.l = ce / 8 | 0, ne.write_shift(2, Ne), ne.write_shift(2, ~Ne & 65535); Ne-- > 0; ) ne[ne.l++] = xe[ie++];
          ce = ne.l * 8;
          continue;
        }
        ce = or(ne, ce, +(ie + Ne == xe.length) + 2);
        for (var Ie = 0; Ne-- > 0; ) {
          var we = xe[ie];
          Ie = (Ie << 5 ^ we) & 32767;
          var be = -1, cr = 0;
          if ((be = Ee[Ie]) && (be |= ie & -32768, be > ie && (be -= 32768), be < ie)) for (; xe[be + cr] == xe[ie + cr] && cr < 250; ) ++cr;
          if (cr > 2) {
            we = R[cr], we <= 22 ? ce = Er(ne, ce, z[we + 1] >> 1) - 1 : (Er(ne, ce, 3), ce += 5, Er(ne, ce, z[we - 23] >> 5), ce += 3);
            var Nr = we < 8 ? 0 : we - 4 >> 2;
            Nr > 0 && (Kr(ne, ce, cr - Ge[we]), ce += Nr), we = B[ie - be], ce = Er(ne, ce, z[we] >> 3), ce -= 3;
            var Hr = we < 4 ? 0 : we - 2 >> 1;
            Hr > 0 && (Kr(ne, ce, ie - be - Ze[we]), ce += Hr);
            for (var it = 0; it < cr; ++it) Ee[Ie] = ie & 32767, Ie = (Ie << 5 ^ xe[ie]) & 32767, ++ie;
            Ne -= cr - 1;
          } else we <= 143 ? we = we + 48 : ce = Ir(ne, ce, 1), ce = Er(ne, ce, z[we]), Ee[Ie] = ie & 32767, ++ie;
        }
        ce = Er(ne, ce, 0) - 1;
      }
      return ne.l = (ce + 7) / 8 | 0, ne.l;
    }
    return function(ne, ce) {
      return ne.length < 8 ? L(ne, ce) : fe(ne, ce);
    };
  })();
  function xt(b) {
    var B = oe(50 + Math.floor(b.length * 1.1)), C = yt(b, B);
    return B.slice(0, C);
  }
  var Ke = W ? new Uint16Array(32768) : Tr(32768), kr = W ? new Uint16Array(32768) : Tr(32768), jr = W ? new Uint16Array(128) : Tr(128), zr = 1, pt = 1;
  function Je(b, B) {
    var C = Se(b, B) + 257;
    B += 5;
    var I = Se(b, B) + 1;
    B += 5;
    var R = We(b, B) + 4;
    B += 4;
    for (var L = 0, fe = W ? new Uint8Array(19) : Tr(19), xe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ne = 1, ce = W ? new Uint8Array(8) : Tr(8), ie = W ? new Uint8Array(8) : Tr(8), Ee = fe.length, Ne = 0; Ne < R; ++Ne) fe[je[Ne]] = L = Ce(b, B), ne < L && (ne = L), ce[L]++, B += 3;
    var Ie = 0;
    for (ce[0] = 0, Ne = 1; Ne <= ne; ++Ne) ie[Ne] = Ie = Ie + ce[Ne - 1] << 1;
    for (Ne = 0; Ne < Ee; ++Ne) (Ie = fe[Ne]) != 0 && (xe[Ne] = ie[Ie]++);
    var we = 0;
    for (Ne = 0; Ne < Ee; ++Ne) if (we = fe[Ne], we != 0) {
      Ie = z[xe[Ne]] >> 8 - we;
      for (var be = (1 << 7 - we) - 1; be >= 0; --be) jr[Ie | be << we] = we & 7 | Ne << 3;
    }
    var cr = [];
    for (ne = 1; cr.length < C + I; ) switch (Ie = jr[nr(b, B)], B += Ie & 7, Ie >>>= 3) {
      case 16:
        for (L = 3 + O(b, B), B += 2, Ie = cr[cr.length - 1]; L-- > 0; ) cr.push(Ie);
        break;
      case 17:
        for (L = 3 + Ce(b, B), B += 3; L-- > 0; ) cr.push(0);
        break;
      case 18:
        for (L = 11 + nr(b, B), B += 7; L-- > 0; ) cr.push(0);
        break;
      default:
        cr.push(Ie), ne < Ie && (ne = Ie);
        break;
    }
    var Nr = cr.slice(0, C), Hr = cr.slice(C);
    for (Ne = C; Ne < 286; ++Ne) Nr[Ne] = 0;
    for (Ne = I; Ne < 30; ++Ne) Hr[Ne] = 0;
    return zr = Oe(Nr, Ke, 286), pt = Oe(Hr, kr, 30), B;
  }
  function Ea(b, B) {
    if (b[0] == 3 && !(b[1] & 3)) return [cn(B), 2];
    for (var C = 0, I = 0, R = fc(B || 1 << 18), L = 0, fe = R.length >>> 0, xe = 0, ne = 0; (I & 1) == 0; ) {
      if (I = Ce(b, C), C += 3, I >>> 1) I >> 1 == 1 ? (xe = 9, ne = 5) : (C = Je(b, C), xe = zr, ne = pt);
      else {
        C & 7 && (C += 8 - (C & 7));
        var ce = b[C >>> 3] | b[(C >>> 3) + 1] << 8;
        if (C += 32, ce > 0) for (!B && fe < L + ce && (R = $e(R, L + ce), fe = R.length); ce-- > 0; ) R[L++] = b[C >>> 3], C += 8;
        continue;
      }
      for (; ; ) {
        !B && fe < L + 32767 && (R = $e(R, L + 32767), fe = R.length);
        var ie = rr(b, C, xe), Ee = I >>> 1 == 1 ? Jr[ie] : Ke[ie];
        if (C += Ee & 15, Ee >>>= 4, (Ee >>> 8 & 255) === 0) R[L++] = Ee;
        else {
          if (Ee == 256) break;
          Ee -= 257;
          var Ne = Ee < 8 ? 0 : Ee - 4 >> 2;
          Ne > 5 && (Ne = 0);
          var Ie = L + Ge[Ee];
          Ne > 0 && (Ie += rr(b, C, Ne), C += Ne), ie = rr(b, C, ne), Ee = I >>> 1 == 1 ? qr[ie] : kr[ie], C += Ee & 15, Ee >>>= 4;
          var we = Ee < 4 ? 0 : Ee - 2 >> 1, be = Ze[Ee];
          for (we > 0 && (be += rr(b, C, we), C += we), !B && fe < Ie && (R = $e(R, Ie + 100), fe = R.length); L < Ie; ) R[L] = R[L - be], ++L;
        }
      }
    }
    return B ? [R, C + 7 >>> 3] : [R.slice(0, L), C + 7 >>> 3];
  }
  function Ta(b, B) {
    var C = b.slice(b.l || 0), I = Ea(C, B);
    return b.l += I[1], I[0];
  }
  function mn(b, B) {
    if (b) typeof console < "u" && console.error(B);
    else throw new Error(B);
  }
  function Xe(b, B) {
    var C = b;
    lt(C, 0);
    var I = [], R = [], L = { FileIndex: I, FullPaths: R };
    F(L, { root: B.root });
    for (var fe = C.length - 4; (C[fe] != 80 || C[fe + 1] != 75 || C[fe + 2] != 5 || C[fe + 3] != 6) && fe >= 0; ) --fe;
    C.l = fe + 4, C.l += 4;
    var xe = C.read_shift(2);
    C.l += 6;
    var ne = C.read_shift(4);
    for (C.l = ne, fe = 0; fe < xe; ++fe) {
      C.l += 20;
      var ce = C.read_shift(4), ie = C.read_shift(4), Ee = C.read_shift(2), Ne = C.read_shift(2), Ie = C.read_shift(2);
      C.l += 8;
      var we = C.read_shift(4), be = f(C.slice(C.l + Ee, C.l + Ee + Ne));
      C.l += Ee + Ne + Ie;
      var cr = C.l;
      C.l = we + 4, be && be[1] && ((be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz)), hi(C, ce, ie, L, be), C.l = cr;
    }
    return L;
  }
  function hi(b, B, C, I, R) {
    b.l += 2;
    var L = b.read_shift(2), fe = b.read_shift(2), xe = s(b);
    if (L & 8257) throw new Error("Unsupported ZIP encryption");
    for (var ne = b.read_shift(4), ce = b.read_shift(4), ie = b.read_shift(4), Ee = b.read_shift(2), Ne = b.read_shift(2), Ie = "", we = 0; we < Ee; ++we) Ie += String.fromCharCode(b[b.l++]);
    if (Ne) {
      var be = f(b.slice(b.l, b.l + Ne));
      (be[21589] || {}).mt && (xe = be[21589].mt), (be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz), R && ((R[21589] || {}).mt && (xe = R[21589].mt), (R[1] || {}).usz && (ie = R[1].usz), (R[1] || {}).csz && (ce = R[1].csz));
    }
    b.l += Ne;
    var cr = b.slice(b.l, b.l + ce);
    switch (fe) {
      case 8:
        cr = Te(b, ie);
        break;
      case 0:
        b.l += ce;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + fe);
    }
    var Nr = false;
    L & 8 && (ne = b.read_shift(4), ne == 134695760 && (ne = b.read_shift(4), Nr = true), ce = b.read_shift(4), ie = b.read_shift(4)), ce != B && mn(Nr, "Bad compressed size: " + B + " != " + ce), ie != C && mn(Nr, "Bad uncompressed size: " + C + " != " + ie), Wr(I, Ie, cr, { unsafe: true, mt: xe });
  }
  function ds(b, B) {
    var C = B || {}, I = [], R = [], L = oe(1), fe = C.compression ? 8 : 0, xe = 0, ne = 0, ce = 0, ie = 0, Ee = 0, Ne = b.FullPaths[0], Ie = Ne, we = b.FileIndex[0], be = [], cr = 0;
    for (ne = 1; ne < b.FullPaths.length; ++ne) if (Ie = b.FullPaths[ne].slice(Ne.length), we = b.FileIndex[ne], !(!we.size || !we.content || Array.isArray(we.content) && we.content.length == 0 || Ie == "Sh33tJ5")) {
      var Nr = ie, Hr = oe(Ie.length);
      for (ce = 0; ce < Ie.length; ++ce) Hr.write_shift(1, Ie.charCodeAt(ce) & 127);
      Hr = Hr.slice(0, Hr.l), be[Ee] = typeof we.content == "string" ? pc.bstr(we.content, 0) : pc.buf(we.content, 0);
      var it = typeof we.content == "string" ? Xt(we.content) : we.content;
      fe == 8 && (it = ye(it)), L = oe(30), L.write_shift(4, 67324752), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, fe), we.mt ? i(L, we.mt) : L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), ie += L.length, I.push(L), ie += Hr.length, I.push(Hr), ie += it.length, I.push(it), L = oe(46), L.write_shift(4, 33639248), L.write_shift(2, 0), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, fe), L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(4, 0), L.write_shift(4, Nr), cr += L.l, R.push(L), cr += Hr.length, R.push(Hr), ++Ee;
    }
    return L = oe(22), L.write_shift(4, 101010256), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, Ee), L.write_shift(2, Ee), L.write_shift(4, cr), L.write_shift(4, ie), L.write_shift(2, 0), rt([rt(I), rt(R), L]);
  }
  var qa = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function xs(b, B) {
    if (b.ctype) return b.ctype;
    var C = b.name || "", I = C.match(/\.([^\.]+)$/);
    return I && qa[I[1]] || B && (I = (C = B).match(/[\.\\]([^\.\\])+$/), I && qa[I[1]]) ? qa[I[1]] : "application/octet-stream";
  }
  function di(b) {
    for (var B = Zs(b), C = [], I = 0; I < B.length; I += 76) C.push(B.slice(I, I + 76));
    return C.join(`\r
`) + `\r
`;
  }
  function k0(b) {
    var B = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(ce) {
      var ie = ce.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (ie.length == 1 ? "0" + ie : ie);
    });
    B = B.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), B.charAt(0) == `
` && (B = "=0D" + B.slice(1)), B = B.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var C = [], I = B.split(`\r
`), R = 0; R < I.length; ++R) {
      var L = I[R];
      if (L.length == 0) {
        C.push("");
        continue;
      }
      for (var fe = 0; fe < L.length; ) {
        var xe = 76, ne = L.slice(fe, fe + xe);
        ne.charAt(xe - 1) == "=" ? xe-- : ne.charAt(xe - 2) == "=" ? xe -= 2 : ne.charAt(xe - 3) == "=" && (xe -= 3), ne = L.slice(fe, fe + xe), fe += xe, fe < L.length && (ne += "="), C.push(ne);
      }
    }
    return C.join(`\r
`);
  }
  function E0(b) {
    for (var B = [], C = 0; C < b.length; ++C) {
      for (var I = b[C]; C <= b.length && I.charAt(I.length - 1) == "="; ) I = I.slice(0, I.length - 1) + b[++C];
      B.push(I);
    }
    for (var R = 0; R < B.length; ++R) B[R] = B[R].replace(/[=][0-9A-Fa-f]{2}/g, function(L) {
      return String.fromCharCode(parseInt(L.slice(1), 16));
    });
    return Xt(B.join(`\r
`));
  }
  function Ya(b, B, C) {
    for (var I = "", R = "", L = "", fe, xe = 0; xe < 10; ++xe) {
      var ne = B[xe];
      if (!ne || ne.match(/^\s*$/)) break;
      var ce = ne.match(/^([^:]*?):\s*([^\s].*)$/);
      if (ce) switch (ce[1].toLowerCase()) {
        case "content-location":
          I = ce[2].trim();
          break;
        case "content-type":
          L = ce[2].trim();
          break;
        case "content-transfer-encoding":
          R = ce[2].trim();
          break;
      }
    }
    switch (++xe, R.toLowerCase()) {
      case "base64":
        fe = Xt(ra(B.slice(xe).join("")));
        break;
      case "quoted-printable":
        fe = E0(B.slice(xe));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + R);
    }
    var ie = Wr(b, I.slice(C.length), fe, { unsafe: true });
    L && (ie.ctype = L);
  }
  function Za(b, B) {
    if (Qe(b.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var C = B && B.root || "", I = (mr && Buffer.isBuffer(b) ? b.toString("binary") : Qe(b)).split(`\r
`), R = 0, L = "";
    for (R = 0; R < I.length; ++R) if (L = I[R], !!/^Content-Location:/i.test(L) && (L = L.slice(L.indexOf("file")), C || (C = L.slice(0, L.lastIndexOf("/") + 1)), L.slice(0, C.length) != C)) for (; C.length > 0 && (C = C.slice(0, C.length - 1), C = C.slice(0, C.lastIndexOf("/") + 1), L.slice(0, C.length) != C); ) ;
    var fe = (I[1] || "").match(/boundary="(.*?)"/);
    if (!fe) throw new Error("MAD cannot find boundary");
    var xe = "--" + (fe[1] || ""), ne = [], ce = [], ie = { FileIndex: ne, FullPaths: ce };
    F(ie);
    var Ee, Ne = 0;
    for (R = 0; R < I.length; ++R) {
      var Ie = I[R];
      Ie !== xe && Ie !== xe + "--" || (Ne++ && Ya(ie, I.slice(Ee, R), C), Ee = R);
    }
    return ie;
  }
  function xi(b, B) {
    var C = B || {}, I = C.boundary || "SheetJS";
    I = "------=" + I;
    for (var R = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + I.slice(2) + '"', "", "", ""], L = b.FullPaths[0], fe = L, xe = b.FileIndex[0], ne = 1; ne < b.FullPaths.length; ++ne) if (fe = b.FullPaths[ne].slice(L.length), xe = b.FileIndex[ne], !(!xe.size || !xe.content || fe == "Sh33tJ5")) {
      fe = fe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(cr) {
        return "_x" + cr.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(cr) {
        return "_u" + cr.charCodeAt(0).toString(16) + "_";
      });
      for (var ce = xe.content, ie = mr && Buffer.isBuffer(ce) ? ce.toString("binary") : Qe(ce), Ee = 0, Ne = Math.min(1024, ie.length), Ie = 0, we = 0; we <= Ne; ++we) (Ie = ie.charCodeAt(we)) >= 32 && Ie < 128 && ++Ee;
      var be = Ee >= Ne * 4 / 5;
      R.push(I), R.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + fe), R.push("Content-Transfer-Encoding: " + (be ? "quoted-printable" : "base64")), R.push("Content-Type: " + xs(xe, fe)), R.push(""), R.push(be ? k0(ie) : di(ie));
    }
    return R.push(I + `--\r
`), R.join(`\r
`);
  }
  function Vn(b) {
    var B = {};
    return F(B, b), B;
  }
  function Wr(b, B, C, I) {
    var R = I && I.unsafe;
    R || F(b);
    var L = !R && sr.find(b, B);
    if (!L) {
      var fe = b.FullPaths[0];
      B.slice(0, fe.length) == fe ? fe = B : (fe.slice(-1) != "/" && (fe += "/"), fe = (fe + B).replace("//", "/")), L = { name: n(B), type: 2 }, b.FileIndex.push(L), b.FullPaths.push(fe), R || sr.utils.cfb_gc(b);
    }
    return L.content = C, L.size = C ? C.length : 0, I && (I.CLSID && (L.clsid = I.CLSID), I.mt && (L.mt = I.mt), I.ct && (L.ct = I.ct)), L;
  }
  function nt(b, B) {
    F(b);
    var C = sr.find(b, B);
    if (C) {
      for (var I = 0; I < b.FileIndex.length; ++I) if (b.FileIndex[I] == C) return b.FileIndex.splice(I, 1), b.FullPaths.splice(I, 1), true;
    }
    return false;
  }
  function T0(b, B, C) {
    F(b);
    var I = sr.find(b, B);
    if (I) {
      for (var R = 0; R < b.FileIndex.length; ++R) if (b.FileIndex[R] == I) return b.FileIndex[R].name = n(C), b.FullPaths[R] = C, true;
    }
    return false;
  }
  function Xn(b) {
    D(b, true);
  }
  return r.find = K, r.read = G, r.parse = h, r.write = he, r.writeFile = Be, r.utils = { cfb_new: Vn, cfb_add: Wr, cfb_del: nt, cfb_mov: T0, cfb_gc: Xn, ReadShift: Di, CheckField: tu, prep_blob: lt, bconcat: rt, use_zlib: Me, _deflateRaw: xt, _inflateRaw: Ta, consts: ke }, r;
})(), xd;
function vc(e) {
  return typeof e == "string" ? o0(e) : Array.isArray(e) ? H1(e) : e;
}
function ns(e, r, t) {
  if (typeof Deno < "u") {
    if (t && typeof r == "string") switch (t) {
      case "utf8":
        r = new TextEncoder(t).encode(r);
        break;
      case "binary":
        r = o0(r);
        break;
      default:
        throw new Error("Unsupported encoding " + t);
    }
    return Deno.writeFileSync(e, r);
  }
  var a = t == "utf8" ? Oa(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([vc(a)], { type: "application/octet-stream" });
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
      var f = "data:application/octet-stream;base64," + W1(new Uint8Array(vc(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: true });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var o = File(e);
    return o.open("w"), o.encoding = "binary", Array.isArray(r) && (r = Na(r)), o.write(r), o.close(), r;
  } catch (l) {
    if (!l.message || l.message.indexOf("onstruct") == -1) throw l;
  }
  throw new Error("cannot save file " + e);
}
function pd(e) {
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
function Gr(e) {
  for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a) Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
  return t;
}
function mc(e, r) {
  for (var t = [], a = Gr(e), n = 0; n !== a.length; ++n) t[e[a[n]][r]] == null && (t[e[a[n]][r]] = a[n]);
  return t;
}
function l0(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
  return r;
}
function u0(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
  return r;
}
function vd(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Nl = Date.UTC(1899, 11, 30, 0, 0, 0), md = Date.UTC(1899, 11, 31, 0, 0, 0), gd = Date.UTC(1904, 0, 1, 0, 0, 0);
function Yr(e, r) {
  var t = e.getTime(), a = (t - Nl) / (1440 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Xa(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Nl), r;
}
function _d(e) {
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
var wd = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, yd = /^(\d+)-(\d+)-(\d+)$/, Rl = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function $r(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(wd);
  if (t) return new Date((r ? gd : md) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(yd), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(Rl), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function Dn(e, r) {
  if (mr && Buffer.isBuffer(e)) {
    if (r && Hi) {
      if (e[0] == 255 && e[1] == 254) return Oa(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Oa(El(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Oa(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Oa(new TextDecoder("utf-16be").decode(e.slice(2)));
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
function Vr(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = Vr(e[t]));
  return r;
}
function Cr(e, r) {
  for (var t = ""; t.length < r; ) t += e;
  return t;
}
function ea(e) {
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
var kd = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, Ed = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, Td = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, Sd = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function bd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function Fd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var Ad = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Xi(e) {
  if (Td.test(e)) return e.indexOf("Z") == -1 ? h0(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(kd);
  if (a) return bd(a);
  if (a = t.match(Ed), a) return Fd(a);
  if (a = t.match(Rl), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(Sd && e.indexOf("UTC") == -1 ? e + " UTC" : e), i = /* @__PURE__ */ new Date(NaN), s = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) return i;
  if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), r.length > 3 && Ad.indexOf(r) == -1) return i;
  } else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return i;
  return s < 0 || s > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? i : n;
}
var Cd = (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(t, a, n) {
    if (e || typeof a == "string") return t.split(a);
    for (var i = t.split(a), s = [i[0]], f = 1; f < i.length; ++f) s.push(n), s.push(i[f]);
    return s;
  };
})();
function On(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function h0(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function $f(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function qf(e, r, t) {
  for (var a = [], n = e.indexOf(r); n > -1; ) {
    var i = e.indexOf(t, n + r.length);
    if (i == -1) break;
    a.push(e.slice(n, i + t.length)), n = e.indexOf(r, i + t.length);
  }
  return a.length > 0 ? a : null;
}
function is(e, r, t) {
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
var Id = { " ": 1, "	": 1, "\r": 1, "\n": 1, ">": 1 };
function Tn(e, r) {
  for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !Id[e.charAt(t + a)]; ) t = e.indexOf("<" + r, t + 1);
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
    var o = i.index, l = n[1].lastIndex;
    return [t.slice(s, l), t.slice(f, o)];
  };
})(), Pl = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + a + ">", "g")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var o = i[1].lastIndex;
      n.push(t.slice(f, o)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
})(), Dd = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + a + ">", "g")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s, f = 0, o = 0; s = i[0].exec(t); ) {
      if (f = s.index, n.push(t.slice(o, f)), o = f, i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      o = i[1].lastIndex, i[0].lastIndex = i[1].lastIndex;
    }
    return n.push(t.slice(o)), n.length == 0 ? "" : n.join("");
  };
})(), Od = /* @__PURE__ */ (function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [new RegExp("<" + a + "\\b[^<>]*>", "ig"), new RegExp("</" + a + ">", "ig")]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var o = i[1].lastIndex;
      n.push(t.slice(f, o)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
})();
function Bl(e) {
  return e ? e.content && e.type ? Dn(e.content, true) : e.data ? Fi(e.data) : e.asNodeBuffer && mr ? Fi(e.asNodeBuffer().toString("binary")) : e.asBinary ? Fi(e.asBinary()) : e._data && e._data.getContent ? Fi(Dn(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Ll(e) {
  if (!e) return null;
  if (e.data) return ic(e.data);
  if (e.asNodeBuffer && mr) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? ic(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function Nd(e) {
  return e && e.name.slice(-4) === ".bin" ? Ll(e) : Bl(e);
}
function fa(e, r) {
  for (var t = e.FullPaths || Gr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function Yf(e, r) {
  var t = fa(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function ft(e, r, t) {
  if (!t) return Nd(Yf(e, r));
  if (!r) return null;
  try {
    return ft(e, r);
  } catch {
    return null;
  }
}
function Kt(e, r, t) {
  if (!t) return Bl(Yf(e, r));
  if (!r) return null;
  try {
    return Kt(e, r);
  } catch {
    return null;
  }
}
function Rd(e, r, t) {
  return Ll(Yf(e, r));
}
function gc(e) {
  for (var r = e.FullPaths || Gr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function hr(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return mr ? a = Ra(t) : a = V1(t), sr.utils.cfb_add(e, r, a);
    }
    sr.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function Zf() {
  return sr.utils.cfb_new();
}
function Ml(e, r) {
  switch (r.type) {
    case "base64":
      return sr.read(e, { type: "base64" });
    case "binary":
      return sr.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return sr.read(e, { type: "buffer" });
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
`, Ul = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, _c = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, Pd = /<[^<>]*>/g, Et = at.match(_c) ? _c : Pd, Bd = /<\w*:/, Ld = /<(\/?)\w+:/;
function Ye(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(Ul), f = 0, o = "", l = 0, h = "", v = "", d = 1;
  if (s) for (l = 0; l != s.length; ++l) {
    for (v = s[l].slice(1), i = 0; i != v.length && v.charCodeAt(i) !== 61; ++i) ;
    for (h = v.slice(0, i).trim(); v.charCodeAt(i + 1) == 32; ) ++i;
    for (d = (n = v.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, o = v.slice(i + 1 + d, v.length - d), f = 0; f != h.length && h.charCodeAt(f) !== 58; ++f) ;
    if (f === h.length) h.indexOf("_") > 0 && (h = h.slice(0, h.indexOf("_"))), a[h] = o, a[h.toLowerCase()] = o;
    else {
      var x = (f === 5 && h.slice(0, 5) === "xmlns" ? "xmlns" : "") + h.slice(f + 1);
      if (a[x] && h.slice(f - 3, f) == "ext") continue;
      a[x] = o, a[x.toLowerCase()] = o;
    }
  }
  return a;
}
function Md(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (n === e.length) return a;
  var s = e.match(Ul), f = "", o = 0, l = "", h = "", v = 1;
  if (s) for (o = 0; o != s.length; ++o) {
    for (h = s[o].slice(1), i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i) ;
    for (l = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
    v = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(i + 1 + v, h.length - v), l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), a[l] = f, a[l.toLowerCase()] = f;
  }
  return a;
}
function ha(e) {
  return e.replace(Ld, "<$1");
}
var Wl = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, Jf = l0(Wl), Ar = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, o) {
      return Wl[f] || String.fromCharCode(parseInt(o, f.indexOf("x") > -1 ? 16 : 10)) || f;
    }).replace(r, function(f, o) {
      return String.fromCharCode(parseInt(o, 16));
    });
    var s = n.indexOf("]]>");
    return t(n.slice(0, i)) + n.slice(i + 9, s) + t(n.slice(s + 3));
  }
  return function(n, i) {
    var s = t(n);
    return i ? s.replace(/\r\n/g, `
`) : s;
  };
})(), Qf = /[&<>'"]/g, Ud = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function vr(e) {
  var r = e + "";
  return r.replace(Qf, function(t) {
    return Jf[t];
  }).replace(Ud, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function wc(e) {
  return vr(e).replace(/ /g, "_x0020_");
}
var Hl = /[\u0000-\u001f]/g;
function Ii(e) {
  var r = e + "";
  return r.replace(Qf, function(t) {
    return Jf[t];
  }).replace(/\n/g, "<br/>").replace(Hl, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Wd(e) {
  var r = e + "";
  return r.replace(Qf, function(t) {
    return Jf[t];
  }).replace(Hl, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var yc = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function r(t, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, r);
  };
})();
function Hd(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Pr(e) {
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
function tf(e) {
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
function kc(e) {
  var r = cn(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function Ec(e) {
  return Ra(e, "binary").toString("utf8");
}
var Ns = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Br = mr && (Ec(Ns) == tf(Ns) && Ec || kc(Ns) == tf(Ns) && kc) || tf, Oa = mr ? function(e) {
  return Ra(e, "utf8").toString("binary");
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
}, Vl = (function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
})(), Vd = /<\/?(?:vt:)?variant>/g, Xd = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function Tc(e, r) {
  var t = Ye(e), a = Pl(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(Vd, "").match(Xd);
    s && n.push({ v: Br(s[2]), t: s[1] });
  }), n;
}
var Xl = /(^\s|\s$|\n)/;
function kt(e, r) {
  return "<" + e + (r.match(Xl) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function Ki(e) {
  return Gr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function Ae(e, r, t) {
  return "<" + e + (t != null ? Ki(t) : "") + (r != null ? (r.match(Xl) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function Sf(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (t) {
    if (r) throw t;
  }
  return "";
}
function Kd(e, r) {
  switch (typeof e) {
    case "string":
      var t = Ae("vt:lpwstr", vr(e));
      return t = t.replace(/&quot;/g, "_x0022_"), t;
    case "number":
      return Ae((e | 0) == e ? "vt:i4" : "vt:r8", vr(String(e)));
    case "boolean":
      return Ae("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return Ae("vt:filetime", Sf(e));
  throw new Error("Unable to serialize " + e);
}
function d0(e) {
  if (mr && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Br(Na(jf(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ot = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, ut = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" }, Bn = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"], Jt = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
function jd(e, r) {
  for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15), n = e[r + 6] & 15, i = 5; i >= 0; --i) n = n * 256 + e[r + i];
  return a == 2047 ? n == 0 ? t * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
}
function Gd(e, r, t) {
  var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -r : r;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(r) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
  e[t + 6] = (n & 15) << 4 | i & 15, e[t + 7] = n >> 4 | a;
}
var Sc = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, bc = mr ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Ra(r);
  })) : Sc(e);
} : Sc, Fc = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Ha(e, n)));
  return a.join("").replace($t, "");
}, eo = mr ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !Hi ? Fc(e, r, t) : e.toString("utf16le", r, t).replace($t, "");
} : Fc, Ac = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Kl = mr ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Ac(e, r, t);
} : Ac, Cc = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(Yn(e, n)));
  return a.join("");
}, ss = mr ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Cc(r, t, a);
} : Cc, jl = function(e, r) {
  var t = Qt(e, r);
  return t > 0 ? ss(e, r + 4, r + 4 + t - 1) : "";
}, Gl = jl, zl = function(e, r) {
  var t = Qt(e, r);
  return t > 0 ? ss(e, r + 4, r + 4 + t - 1) : "";
}, $l = zl, ql = function(e, r) {
  var t = 2 * Qt(e, r);
  return t > 0 ? ss(e, r + 4, r + 4 + t - 1) : "";
}, Yl = ql, Zl = function(r, t) {
  var a = Qt(r, t);
  return a > 0 ? eo(r, t + 4, t + 4 + a) : "";
}, Jl = Zl, Ql = function(e, r) {
  var t = Qt(e, r);
  return t > 0 ? ss(e, r + 4, r + 4 + t) : "";
}, eu = Ql, ru = function(e, r) {
  return jd(e, r);
}, t0 = ru, ro = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
mr && (Gl = function(r, t) {
  if (!Buffer.isBuffer(r)) return jl(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, $l = function(r, t) {
  if (!Buffer.isBuffer(r)) return zl(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, Yl = function(r, t) {
  if (!Buffer.isBuffer(r) || !Hi) return ql(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, Jl = function(r, t) {
  if (!Buffer.isBuffer(r) || !Hi) return Zl(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, eu = function(r, t) {
  if (!Buffer.isBuffer(r)) return Ql(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, t0 = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : ru(r, t);
}, ro = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
var Yn = function(e, r) {
  return e[r];
}, Ha = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, zd = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, Qt = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, En = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, $d = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function Di(e, r) {
  var t = "", a, n, i = [], s, f, o, l;
  switch (r) {
    case "dbcs":
      if (l = this.l, mr && Buffer.isBuffer(this) && Hi) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (o = 0; o < e; ++o) t += String.fromCharCode(Ha(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      t = ss(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = eo(this, this.l, this.l + e);
      break;
    case "wstr":
      return Di.call(this, e, "dbcs");
    case "lpstr-ansi":
      t = Gl(this, this.l), e = 4 + Qt(this, this.l);
      break;
    case "lpstr-cp":
      t = $l(this, this.l), e = 4 + Qt(this, this.l);
      break;
    case "lpwstr":
      t = Yl(this, this.l), e = 4 + 2 * Qt(this, this.l);
      break;
    case "lpp4":
      e = 4 + Qt(this, this.l), t = Jl(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Qt(this, this.l), t = eu(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = Yn(this, this.l + e++)) !== 0; ) i.push(Os(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Ha(this, this.l + e)) !== 0; ) i.push(Os(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", l = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) return s = Yn(this, l), this.l = l + 1, f = Di.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Os(Ha(this, l))), l += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", l = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) return s = Yn(this, l), this.l = l + 1, f = Di.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Os(Yn(this, l))), l += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Yn(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? zd : Ha)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? En : $d)(this, this.l), this.l += 4, a) : (n = Qt(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f") return e == 8 ? n = t0(this, this.l) : n = t0([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Kl(this, this.l, e);
          break;
      }
  }
  return this.l += e, t;
}
var qd = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, Yd = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, Zd = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255;
};
function Jd(e, r, t) {
  var a = 0, n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) Zd(this, r.charCodeAt(n), this.l + 2 * n);
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
      a = 4, qd(this, r, this.l);
      break;
    case 8:
      if (a = 8, t === "f") {
        Gd(this, r, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      a = 4, Yd(this, r, this.l);
      break;
  }
  return this.l += a, this;
}
function tu(e, r) {
  var t = Kl(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function lt(e, r) {
  e.l = r, e.read_shift = Di, e.chk = tu, e.write_shift = Jd;
}
function Ut(e, r) {
  e.l += r;
}
function oe(e) {
  var r = cn(e);
  return lt(r, 0), r;
}
function $a(e, r, t) {
  if (e) {
    var a, n, i;
    lt(e, e.l || 0);
    for (var s = e.length, f = 0, o = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var l = Qi[f] || Qi[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      o = e.l + i;
      var h = l.f && l.f(e, i, t);
      if (e.l = o, r(h, l, f)) return;
    }
  }
}
function Lt() {
  var e = [], r = mr ? 16384 : 2048;
  mr && oe(r).copy;
  var t = function(h) {
    var v = oe(h);
    return lt(v, 0), v;
  }, a = t(r), n = function() {
    a && (a.l && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a)), a = null);
  }, i = function(h) {
    return a && h < a.length - a.l ? a : (n(), a = t(Math.max(h + 1, r)));
  }, s = function() {
    return n(), rt(e);
  }, f = function() {
    return n(), e;
  }, o = function(h) {
    n(), a = h, a.l == null && (a.l = a.length), i(r);
  };
  return { next: i, push: o, end: s, _bufs: e, end2: f };
}
function ve(e, r, t, a) {
  var n = +r, i;
  if (!isNaN(n)) {
    a || (a = Qi[n].p || (t || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f) if (a >= 128) s.write_shift(1, (a & 127) + 128), a >>= 7;
    else {
      s.write_shift(1, a);
      break;
    }
    a > 0 && ro(t) && e.push(t);
  }
}
function Oi(e, r, t) {
  var a = Vr(e);
  if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
    for (; a.c >= 256; ) a.c -= 256;
    for (; a.r >= 65536; ) a.r -= 65536;
  }
  return a;
}
function Ic(e, r, t) {
  var a = Vr(e);
  return a.s = Oi(a.s, r.s, t), a.e = Oi(a.e, r.s, t), a;
}
function Ni(e, r) {
  if (e.cRel && e.c < 0) for (e = Vr(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Vr(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = yr(e);
  return !e.cRel && e.cRel != null && (t = rx(t)), !e.rRel && e.rRel != null && (t = Qd(t)), t;
}
function af(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + gr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + gr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Fr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Fr(e.e.r) : Ni(e.s, r.biff) + ":" + Ni(e.e, r.biff);
}
function to(e) {
  return parseInt(ex(e), 10) - 1;
}
function Fr(e) {
  return "" + (e + 1);
}
function Qd(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function ex(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function ao(e) {
  for (var r = tx(e), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
  return t - 1;
}
function gr(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
  return r;
}
function rx(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function tx(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function ax(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Lr(e) {
  for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function yr(e) {
  for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
  return t + (e.r + 1);
}
function wt(e) {
  var r = e.indexOf(":");
  return r == -1 ? { s: Lr(e), e: Lr(e) } : { s: Lr(e.slice(0, r)), e: Lr(e.slice(r + 1)) };
}
function xr(e, r) {
  return typeof r > "u" || typeof r == "number" ? xr(e.s, e.e) : (typeof e != "string" && (e = yr(e)), typeof r != "string" && (r = yr(r)), e == r ? e : e + ":" + r);
}
function ji(e) {
  var r = wt(e);
  return "$" + gr(r.s.c) + "$" + Fr(r.s.r) + ":$" + gr(r.e.c) + "$" + Fr(r.e.r);
}
function Gi(e, r) {
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
function Dc(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = ta(e.z, t ? Yr(r) : r);
  } catch {
  }
  try {
    return e.w = ta((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Yr(r) : r);
  } catch {
    return "" + r;
  }
}
function Ga(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? dt[e.v] || e.v : r == null ? Dc(e, e.v) : Dc(e, r));
}
function pn(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function nx(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function au(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = e || (n ? { "!data": [] } : {});
  n && !i["!data"] && (i["!data"] = []);
  var s = 0, f = 0;
  if (i && a.origin != null) if (typeof a.origin == "number") s = a.origin;
  else {
    var o = typeof a.origin == "string" ? Lr(a.origin) : a.origin;
    s = o.r, f = o.c;
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var h = Dr(i["!ref"]);
    l.s.c = h.s.c, l.s.r = h.s.r, l.e.c = Math.max(l.e.c, h.e.c), l.e.r = Math.max(l.e.r, h.e.r), s == -1 && (l.e.r = s = i["!ref"] ? h.e.r + 1 : 0);
  } else l.s.c = l.e.c = l.s.r = l.e.r = 0;
  for (var v = [], d = false, x = 0; x != r.length; ++x) if (r[x]) {
    if (!Array.isArray(r[x])) throw new Error("aoa_to_sheet expects an array of arrays");
    var _ = s + x;
    n && (i["!data"][_] || (i["!data"][_] = []), v = i["!data"][_]);
    for (var y = r[x], m = 0; m != y.length; ++m) if (!(typeof y[m] > "u")) {
      var g = { v: y[m], t: "" }, S = f + m;
      if (l.s.r > _ && (l.s.r = _), l.s.c > S && (l.s.c = S), l.e.r < _ && (l.e.r = _), l.e.c < S && (l.e.c = S), d = true, y[m] && typeof y[m] == "object" && !Array.isArray(y[m]) && !(y[m] instanceof Date)) g = y[m];
      else if (Array.isArray(g.v) && (g.f = y[m][1], g.v = g.v[0]), g.v === null) if (g.f) g.t = "n";
      else if (a.nullError) g.t = "e", g.v = 0;
      else if (a.sheetStubs) g.t = "z";
      else continue;
      else typeof g.v == "number" ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || ir[14], a.UTC || (g.v = h0(g.v)), a.cellDates ? (g.t = "d", g.w = ta(g.z, Yr(g.v, a.date1904))) : (g.t = "n", g.v = Yr(g.v, a.date1904), g.w = ta(g.z, g.v))) : g.t = "s";
      if (n) v[S] && v[S].z && (g.z = v[S].z), v[S] = g;
      else {
        var E = gr(S) + (_ + 1);
        i[E] && i[E].z && (g.z = i[E].z), i[E] = g;
      }
    }
  }
  return d && l.s.c < 104e5 && (i["!ref"] = xr(l)), i;
}
function li(e, r) {
  return au(null, e, r);
}
function ix(e) {
  return e.read_shift(4, "i");
}
function wa(e, r) {
  return r || (r = oe(4)), r.write_shift(4, e), r;
}
function Mt(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function ht(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(4 + 2 * e.length)), r.write_shift(4, e.length), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
function sx(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function fx(e, r) {
  return r || (r = oe(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function no(e, r) {
  var t = e.l, a = e.read_shift(1), n = Mt(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o) i.push(sx(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function ox(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(15 + 4 * e.t.length)), r.write_shift(1, 0), ht(e.t, r), t ? r.slice(0, r.l) : r;
}
var cx = no;
function lx(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(23 + 4 * e.t.length)), r.write_shift(1, 1), ht(e.t, r), r.write_shift(4, 1), fx({}, r), t ? r.slice(0, r.l) : r;
}
function da(e) {
  var r = e.read_shift(4), t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: r, iStyleRef: t };
}
function Ln(e, r) {
  return r == null && (r = oe(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
function Mn(e) {
  var r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: r };
}
function Un(e, r) {
  return r == null && (r = oe(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
var ux = Mt, nu = ht;
function x0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function zi(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var hx = Mt, bf = x0, io = zi;
function p0(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? t0([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : En(r, 0) >> 2;
  return t ? n / 100 : n;
}
function iu(e, r) {
  r == null && (r = oe(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function su(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function dx(e, r) {
  return r || (r = oe(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var Wn = su, ui = dx;
function Pt(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Nn(e, r) {
  return (r || oe(8)).write_shift(8, e, "f");
}
function xx(e) {
  var r = {}, t = e.read_shift(1), a = t >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), o = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var l = Sn[n];
      l && (r.rgb = qi(l));
      break;
    case 2:
      r.rgb = qi([s, f, o]);
      break;
    case 3:
      r.theme = n;
      break;
  }
  return i != 0 && (r.tint = i > 0 ? i / 32767 : i / 32768), r;
}
function a0(e, r) {
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
function px(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = { fBold: r & 1, fItalic: r & 2, fUnderline: r & 4, fStrikeout: r & 8, fOutline: r & 16, fShadow: r & 32, fCondense: r & 64, fExtend: r & 128 };
  return t;
}
function vx(e, r) {
  r || (r = oe(2));
  var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
function fu(e, r) {
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
function mx(e) {
  return fu(e, 1);
}
function gx(e) {
  return fu(e, 2);
}
var so = 2, Gt = 3, Rs = 11, Oc = 12, n0 = 19, Ps = 64, _x = 65, wx = 71, yx = 4108, kx = 4126, mt = 80, ou = 81, Ex = [mt, ou], Ff = { 1: { n: "CodePage", t: so }, 2: { n: "Category", t: mt }, 3: { n: "PresentationFormat", t: mt }, 4: { n: "ByteCount", t: Gt }, 5: { n: "LineCount", t: Gt }, 6: { n: "ParagraphCount", t: Gt }, 7: { n: "SlideCount", t: Gt }, 8: { n: "NoteCount", t: Gt }, 9: { n: "HiddenCount", t: Gt }, 10: { n: "MultimediaClipCount", t: Gt }, 11: { n: "ScaleCrop", t: Rs }, 12: { n: "HeadingPairs", t: yx }, 13: { n: "TitlesOfParts", t: kx }, 14: { n: "Manager", t: mt }, 15: { n: "Company", t: mt }, 16: { n: "LinksUpToDate", t: Rs }, 17: { n: "CharacterCount", t: Gt }, 19: { n: "SharedDoc", t: Rs }, 22: { n: "HyperlinksChanged", t: Rs }, 23: { n: "AppVersion", t: Gt, p: "version" }, 24: { n: "DigSig", t: _x }, 26: { n: "ContentType", t: mt }, 27: { n: "ContentStatus", t: mt }, 28: { n: "Language", t: mt }, 29: { n: "Version", t: mt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Af = { 1: { n: "CodePage", t: so }, 2: { n: "Title", t: mt }, 3: { n: "Subject", t: mt }, 4: { n: "Author", t: mt }, 5: { n: "Keywords", t: mt }, 6: { n: "Comments", t: mt }, 7: { n: "Template", t: mt }, 8: { n: "LastAuthor", t: mt }, 9: { n: "RevNumber", t: mt }, 10: { n: "EditTime", t: Ps }, 11: { n: "LastPrinted", t: Ps }, 12: { n: "CreatedDate", t: Ps }, 13: { n: "ModifiedDate", t: Ps }, 14: { n: "PageCount", t: Gt }, 15: { n: "WordCount", t: Gt }, 16: { n: "CharCount", t: Gt }, 17: { n: "Thumbnail", t: wx }, 18: { n: "Application", t: mt }, 19: { n: "DocSecurity", t: Gt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Nc = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, Tx = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Sx(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var bx = Sx([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Sn = Vr(bx), dt = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, _t = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, fo = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"], Cf = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" }, Bs = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
function oo() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function Fx(e) {
  var r = oo();
  if (!e || !e.match) return r;
  var t = {};
  if ((e.match(Et) || []).forEach(function(a) {
    var n = Ye(a);
    switch (n[0].replace(Bd, "<")) {
      case "<?xml":
        break;
      case "<Types":
        r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        t[n.Extension.toLowerCase()] = n.ContentType;
        break;
      case "<Override":
        r[Cf[n.ContentType]] !== void 0 && r[Cf[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== ut.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function cu(e, r, t) {
  var a = vd(Cf), n = [], i;
  n[n.length] = at, n[n.length] = Ae("Types", null, { xmlns: ut.CT, "xmlns:xsd": ut.xsd, "xmlns:xsi": ut.xsi }), n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(l) {
    return Ae("Default", null, { Extension: l[0], ContentType: l[1] });
  }));
  var s = function(l) {
    e[l] && e[l].length > 0 && (i = e[l][0], n[n.length] = Ae("Override", null, { PartName: (i[0] == "/" ? "" : "/") + i, ContentType: Bs[l][r.bookType] || Bs[l].xlsx }));
  }, f = function(l) {
    (e[l] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: Bs[l][r.bookType] || Bs[l].xlsx });
    });
  }, o = function(l) {
    (e[l] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: a[l][0] });
    });
  };
  return s("workbooks"), f("sheets"), f("charts"), o("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(o), o("vba"), o("comments"), o("threadedcomments"), o("drawings"), f("metadata"), o("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var wr = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
function $i(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function Ri(e, r) {
  var t = { "!id": {} };
  if (!e) return t;
  r.charAt(0) !== "/" && (r = "/" + r);
  var a = {};
  return (e.match(Et) || []).forEach(function(n) {
    var i = Ye(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = Ar(i.Target), s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : Zn(i.Target, r);
      t[f] = s, a[i.Id] = s;
    }
  }), t["!id"] = a, t;
}
function ri(e) {
  var r = [at, Ae("Relationships", null, { xmlns: ut.RELS })];
  return Gr(e["!id"]).forEach(function(t) {
    r[r.length] = Ae("Relationship", null, e["!id"][t]);
  }), r.length > 2 && (r[r.length] = "</Relationships>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Rr(e, r, t, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), r < 0) for (r = e["!idx"]; e["!id"]["rId" + r]; ++r) ;
  if (e["!idx"] = r + 1, n.Id = "rId" + r, n.Type = a, n.Target = t, [wr.HLINK, wr.XPATH, wr.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, r;
}
var Ax = "application/vnd.oasis.opendocument.spreadsheet";
function Cx(e, r) {
  for (var t = d0(e), a, n; a = ot.exec(t); ) switch (a[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (n = Ye(a[0], false), n.path == "/" && n.type !== Ax) throw new Error("This OpenDocument is not a spreadsheet");
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
function Ix(e) {
  var r = [at];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t) r.push('  <manifest:file-entry manifest:full-path="' + e[t][0] + '" manifest:media-type="' + e[t][1] + `"/>
`);
  return r.push("</manifest:manifest>"), r.join("");
}
function Rc(e, r, t) {
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
function Ox(e) {
  var r = [at];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t) r.push(Rc(e[t][0], e[t][1])), r.push(Dx("", e[t][0]));
  return r.push(Rc("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function lu(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Ys.version + "</meta:generator></office:meta></office:document-meta>";
}
var Ka = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function uu(e) {
  var r = {};
  e = Br(e);
  for (var t = 0; t < Ka.length; ++t) {
    var a = Ka[t], n = Tn(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = Ar(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = $r(r[a[1]]));
  }
  return r;
}
function nf(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = vr(r), a[a.length] = t ? Ae(e, r, t) : kt(e, r));
}
function hu(e, r) {
  var t = r || {}, a = [at, Ae("cp:coreProperties", null, { "xmlns:cp": ut.CORE_PROPS, "xmlns:dc": ut.dc, "xmlns:dcterms": ut.dcterms, "xmlns:dcmitype": ut.dcmitype, "xmlns:xsi": ut.xsi })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && nf("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Sf(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && nf("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Sf(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != Ka.length; ++i) {
    var s = Ka[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === true ? f = "1" : f === false ? f = "0" : typeof f == "number" && (f = String(f)), f != null && nf(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var bn = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]], du = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function xu(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = Tc(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(h) {
    return { v: h };
  }));
  var s = typeof r == "string" ? Tc(r, a).map(function(h) {
    return h.v;
  }) : r, f = 0, o = 0;
  if (s.length > 0) for (var l = 0; l !== n.length; l += 2) {
    switch (o = +n[l + 1].v, n[l].v) {
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
        t.Worksheets = o, t.SheetNames = s.slice(f, f + o);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "\u540D\u524D\u4ED8\u304D\u4E00\u89A7":
      case "Benannte Bereiche":
      case "Navngivne omr\xE5der":
        t.NamedRanges = o, t.DefinedNames = s.slice(f, f + o);
        break;
      case "Charts":
      case "Diagramme":
        t.Chartsheets = o, t.ChartNames = s.slice(f, f + o);
        break;
    }
    f += o;
  }
}
function Nx(e, r, t) {
  var a = {};
  return r || (r = {}), e = Br(e), bn.forEach(function(n) {
    var i = (gt(e, n[0]) || [])[1];
    switch (n[2]) {
      case "string":
        i && (r[n[1]] = Ar(i));
        break;
      case "bool":
        r[n[1]] = i === "true";
        break;
      case "raw":
        var s = Tn(e, n[0]);
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && xu(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function pu(e) {
  var r = [], t = Ae;
  return e || (e = {}), e.Application = "SheetJS", r[r.length] = at, r[r.length] = Ae("Properties", null, { xmlns: ut.EXT_PROPS, "xmlns:vt": ut.vt }), bn.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = vr(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (r[r.length] = t(a[0], n));
    }
  }), r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + vr(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var Rx = /<[^<>]+>[^<]*/g;
function Px(e, r) {
  var t = {}, a = "", n = e.match(Rx);
  if (n) for (var i = 0; i != n.length; ++i) {
    var s = n[i], f = Ye(s);
    switch (ha(f[0])) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        a = Ar(f.name);
        break;
      case "</property>":
        a = null;
        break;
      default:
        if (s.indexOf("<vt:") === 0) {
          var o = s.split(">"), l = o[0].slice(4), h = o[1];
          switch (l) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              t[a] = Ar(h);
              break;
            case "bool":
              t[a] = Pr(h);
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
              t[a] = $r(h);
              break;
            case "cy":
            case "error":
              t[a] = Ar(h);
              break;
            default:
              if (l.slice(-1) == "/") break;
              r.WTF && typeof console < "u" && console.warn("Unexpected", s, l, o);
          }
        } else if (s.slice(0, 2) !== "</") {
          if (r.WTF) throw new Error(s);
        }
    }
  }
  return t;
}
function vu(e) {
  var r = [at, Ae("Properties", null, { xmlns: ut.CUST_PROPS, "xmlns:vt": ut.vt })];
  if (!e) return r.join("");
  var t = 1;
  return Gr(e).forEach(function(n) {
    ++t, r[r.length] = Ae("property", Kd(e[n]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t, name: vr(n) });
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var If = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, sf;
function Bx(e, r, t) {
  sf || (sf = l0(If)), r = sf[r] || r, e[r] = t;
}
function Lx(e, r) {
  var t = [];
  return Gr(If).map(function(a) {
    for (var n = 0; n < Ka.length; ++n) if (Ka[n][1] == a) return Ka[n];
    for (n = 0; n < bn.length; ++n) if (bn[n][1] == a) return bn[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      a[2] === "date" && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), typeof n == "number" ? n = String(n) : n === true || n === false ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(kt(If[a[1]] || a[1], n));
    }
  }), Ae("DocumentProperties", t.join(""), { xmlns: Jt.o });
}
function Mx(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && Gr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < Ka.length; ++s) if (i == Ka[s][1]) return;
      for (s = 0; s < bn.length; ++s) if (i == bn[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], o = "string";
      typeof f == "number" ? (o = "float", f = String(f)) : f === true || f === false ? (o = "boolean", f = f ? "1" : "0") : f = String(f), n.push(Ae(wc(i), f, { "dt:dt": o }));
    }
  }), r && Gr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === true || s === false ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(Ae(wc(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Jt.o + '">' + n.join("") + "</" + a + ">";
}
function co(e) {
  var r = e.read_shift(4), t = e.read_shift(4);
  return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Ux(e) {
  var r = typeof e == "string" ? new Date(Date.parse(e)) : e, t = r.getTime() / 1e3 + 11644473600, a = t % Math.pow(2, 32), n = (t - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = oe(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function Wx(e, r, t) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (t) for (; e.l - a & 3; ) ++e.l;
  return n;
}
function Hx(e, r, t) {
  var a = e.read_shift(0, "lpwstr");
  return a;
}
function mu(e, r, t) {
  return r === 31 ? Hx(e) : Wx(e, r, t);
}
function Pi(e, r, t) {
  return mu(e, r, t === false ? 0 : 4);
}
function Vx(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return mu(e, r, 0);
}
function Xx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace($t, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function Kx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace($t, "");
  return t;
}
function jx(e) {
  var r = e.l, t = i0(e, ou);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = i0(e, Gt);
  return [t, a];
}
function Gx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(jx(e));
  return t;
}
function Pc(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace($t, "").replace(Ai, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function gu(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function zx(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function i0(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== Oc && a !== r && Ex.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126)) throw new Error("Expected type " + r + " saw " + a);
  switch (r === Oc ? a : r) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      e.l += 4, val = Pi(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 31:
      e.l += 4, val = Pi(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 64:
      return co(e);
    case 65:
      return gu(e);
    case 71:
      return zx(e);
    case 80:
      return Pi(e, a, !i.raw).replace($t, "");
    case 81:
      return Vx(e, a).replace($t, "");
    case 4108:
      return Gx(e);
    case 4126:
    case 4127:
      return a == 4127 ? Xx(e) : Kx(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Bc(e, r) {
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
      a = Ux(r);
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
function Lc(e, r) {
  var t = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, o = -1, l = {};
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
      if (d[_.n] = i0(e, _.t, { raw: true }), _.p === "version" && (d[_.n] = String(d[_.n] >> 16) + "." + ("0000" + String(d[_.n] & 65535)).slice(-4)), _.n == "CodePage") switch (d[_.n]) {
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
          ga(f = d[_.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + d[_.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = d.CodePage = i0(e, so), ga(f), o !== -1) {
        var y = e.l;
        e.l = i[o][1], l = Pc(e, f), e.l = y;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        o = s, e.l = i[s + 1][1];
        continue;
      }
      l = Pc(e, f);
    } else {
      var m = l[i[s][0]], g;
      switch (e[e.l]) {
        case 65:
          e.l += 4, g = gu(e);
          break;
        case 30:
          e.l += 4, g = Pi(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 31:
          e.l += 4, g = Pi(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
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
          e.l += 4, g = et(e, 4);
          break;
        case 64:
          e.l += 4, g = $r(co(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      d[m] = g;
    }
  }
  return e.l = t + a, d;
}
var _u = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function $x(e) {
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
function Mc(e, r, t) {
  var a = oe(8), n = [], i = [], s = 8, f = 0, o = oe(8), l = oe(8);
  if (o.write_shift(4, 2), o.write_shift(4, 1200), l.write_shift(4, 1), i.push(o), n.push(l), s += 8 + o.length, !r) {
    l = oe(8), l.write_shift(4, 0), n.unshift(l);
    var h = [oe(4)];
    for (h[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (o = oe(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), o.write_shift(4, f + 2), o.write_shift(4, v.length + 1), o.write_shift(0, v, "dbcs"); o.l != o.length; ) o.write_shift(1, 0);
      h.push(o);
    }
    o = rt(h), i.unshift(o), s += 8 + o.length;
  }
  for (f = 0; f < e.length; ++f) if (!(r && !r[e[f][0]]) && !(_u.indexOf(e[f][0]) > -1 || du.indexOf(e[f][0]) > -1) && e[f][1] != null) {
    var d = e[f][1], x = 0;
    if (r) {
      x = +r[e[f][0]];
      var _ = t[x];
      if (_.p == "version" && typeof d == "string") {
        var y = d.split(".");
        d = (+y[0] << 16) + (+y[1] || 0);
      }
      o = Bc(_.t, d);
    } else {
      var m = $x(d);
      m == -1 && (m = 31, d = String(d)), o = Bc(m, d);
    }
    i.push(o), l = oe(8), l.write_shift(4, r ? x : 2 + f), n.push(l), s += 8 + o.length;
  }
  var g = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f) n[f].write_shift(4, g), g += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), rt([a].concat(n).concat(i));
}
function Uc(e, r, t) {
  var a = e.content;
  if (!a) return {};
  lt(a, 0);
  var n, i, s, f, o = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var l = a.read_shift(4), h = a.read_shift(16);
  if (h !== sr.utils.consts.HEADER_CLSID && h !== t) throw new Error("Bad PropertySet CLSID " + h);
  if (n = a.read_shift(4), n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l) throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), o = a.read_shift(4));
  var v = Lc(a, r), d = { SystemIdentifier: l };
  for (var x in v) d[x] = v[x];
  if (d.FMTID = i, n === 1) return d;
  if (o - a.l == 2 && (a.l += 2), a.l !== o) throw new Error("Length mismatch 2: " + a.l + " !== " + o);
  var _;
  try {
    _ = Lc(a, null);
  } catch {
  }
  for (x in _) d[x] = _[x];
  return d.FMTID = [i, s], d;
}
function Wc(e, r, t, a, n, i) {
  var s = oe(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, sr.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var o = Mc(e, t, a);
  if (f.push(o), n) {
    var l = Mc(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + o.length), f.push(l);
  }
  return rt(f);
}
function an(e, r) {
  return e.read_shift(r), null;
}
function qx(e, r) {
  r || (r = oe(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function Yx(e, r, t) {
  for (var a = [], n = e.l + r; e.l < n; ) a.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return a;
}
function et(e, r) {
  return e.read_shift(r) === 1;
}
function Dt(e, r) {
  return r || (r = oe(2)), r.write_shift(2, +!!e), r;
}
function Zr(e) {
  return e.read_shift(2, "u");
}
function ca(e, r) {
  return r || (r = oe(2)), r.write_shift(2, e), r;
}
function wu(e, r) {
  return Yx(e, r, Zr);
}
function yu(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function ku(e, r, t) {
  return t || (t = oe(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function si(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = la;
  if (t && t.biff >= 8 && (la = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return la = i, f;
}
function Zx(e) {
  var r = la;
  la = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, o, l = {};
  i && (f = e.read_shift(2)), n && (o = e.read_shift(4));
  var h = s == 2 ? "dbcs-cont" : "sbcs-cont", v = t === 0 ? "" : e.read_shift(t, h);
  return i && (e.l += 4 * f), n && (e.l += o), l.t = v, i || (l.raw = "<t>" + l.t + "</t>", l.r = l.t), la = r, l;
}
function Jx(e) {
  var r = e.t || "", t = oe(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var a = oe(2 * r.length);
  a.write_shift(2 * r.length, r, "utf16le");
  var n = [t, a];
  return rt(n);
}
function Rn(e, r, t) {
  var a;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
    if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(r, "sbcs-cont") : a = e.read_shift(r, "dbcs-cont"), a;
}
function fs(e, r, t) {
  var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : Rn(e, a, t);
}
function Hn(e, r, t) {
  if (t.biff > 5) return fs(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Eu(e, r, t) {
  return t || (t = oe(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), t.write_shift(31, e, "utf16le"), t;
}
function Qx(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return e.l += 2, [r, t];
}
function ep(e) {
  var r = e.read_shift(4), t = e.l, a = false;
  r > 24 && (e.l += r - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = true), e.l = t);
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace($t, "");
  return a && (e.l += 24), n;
}
function rp(e) {
  for (var r = e.read_shift(2), t = ""; r-- > 0; ) t += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace($t, "");
  return t + s;
}
function tp(e, r) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return ep(e);
    case "0303000000000000c000000000000046":
      return rp(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function Ls(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace($t, "") : "";
  return t;
}
function Hc(e, r) {
  r || (r = oe(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function ap(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, o, l = "", h, v;
  n & 16 && (i = Ls(e, t - e.l)), n & 128 && (s = Ls(e, t - e.l)), (n & 257) === 257 && (f = Ls(e, t - e.l)), (n & 257) === 1 && (o = tp(e, t - e.l)), n & 8 && (l = Ls(e, t - e.l)), n & 32 && (h = e.read_shift(16)), n & 64 && (v = co(e)), e.l = t;
  var d = s || f || o || "";
  d && l && (d += "#" + l), d || (d = "#" + l), n & 2 && d.charAt(0) == "/" && d.charAt(1) != "/" && (d = "file://" + d);
  var x = { Target: d };
  return h && (x.guid = h), v && (x.time = v), i && (x.Tooltip = i), x;
}
function np(e) {
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
  if (i == 28) a = a.slice(1), Hc(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && Hc(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var o = 0; a.slice(o * 3, o * 3 + 3) == "../" || a.slice(o * 3, o * 3 + 3) == "..\\"; ) ++o;
    for (r.write_shift(2, o), r.write_shift(4, a.length - 3 * o + 1), t = 0; t < a.length - 3 * o; ++t) r.write_shift(1, a.charCodeAt(t + 3 * o) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function Tu(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function Su(e, r) {
  var t = Tu(e);
  return t[3] = 0, t;
}
function ka(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = { r: a, c: n, ixfe: 0 };
  if (t && t.biff == 2 || r == 7) {
    var s = e.read_shift(1);
    i.ixfe = s & 63, e.l += 2;
  } else i.ixfe = e.read_shift(2);
  return i;
}
function Pn(e, r, t, a) {
  return a || (a = oe(6)), a.write_shift(2, e), a.write_shift(2, r), a.write_shift(2, t || 0), a;
}
function ip(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return e.l += 8, { type: r, flags: t };
}
function sp(e, r, t) {
  return r === 0 ? "" : Hn(e, r, t);
}
function fp(e, r, t) {
  var a = t.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function bu(e) {
  var r = e.read_shift(2), t = p0(e);
  return [r, t];
}
function op(e, r, t) {
  e.l += 4, r -= 4;
  var a = e.l + r, n = si(e, r, t), i = e.read_shift(2);
  if (a -= e.l, i !== a) throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function v0(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
function Fu(e, r) {
  return r || (r = oe(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function Au(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var cp = Au;
function Cu(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function lp(e) {
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
var hp = { 0: Ft, 4: Ft, 5: Ft, 6: Ft, 7: up, 8: Ft, 9: Ft, 10: Ft, 11: Ft, 12: Ft, 13: lp, 14: Ft, 15: Ft, 16: Ft, 17: Ft, 18: Ft, 19: Ft, 20: Ft, 21: Cu };
function dp(e, r) {
  for (var t = e.l + r, a = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a[n] = hp[n](e, t - e.l);
    } catch {
      return e.l = t, a;
    }
  }
  return e.l != t && (e.l = t), a;
}
function Ms(e, r) {
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
function lo(e, r, t) {
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
function xp(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function pp(e, r, t) {
  if (t.enc) return e.l += r, "";
  var a = e.l, n = Hn(e, 0, t);
  return e.read_shift(r + a - e.l), n;
}
function vp(e, r) {
  var t = !r || r.biff == 8, a = oe(t ? 112 : 54);
  for (a.write_shift(r.biff == 8 ? 2 : 1, 7), t && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (t ? 0 : 536870912)); a.l < a.length; ) a.write_shift(1, t ? 0 : 32);
  return a;
}
function mp(e, r, t) {
  var a = t && t.biff == 8 || r == 2 ? e.read_shift(2) : (e.l += r, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function gp(e, r, t) {
  var a = "";
  if (t.biff == 4) return a = si(e, 0, t), a.length === 0 && (a = "Sheet1"), { name: a };
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
  return a = si(e, 0, t), a.length === 0 && (a = "Sheet1"), { pos: n, hs: i, dt: s, name: a };
}
function _p(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1, a = oe(8 + t * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), r.biff >= 8 && a.write_shift(1, 1), a.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function wp(e, r) {
  for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < t; ++s) i.push(Zx(e));
  return i.Count = a, i.Unique = n, i;
}
function yp(e, r) {
  var t = oe(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n) a[n] = Jx(e[n]);
  var i = rt([t].concat(a));
  return i.parts = [t.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function kp(e, r) {
  var t = {};
  return t.dsst = e.read_shift(2), e.l += r - 2, t;
}
function Ep(e) {
  var r = {};
  r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
  var t = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (r.level = a & 7), a & 32 && (r.hidden = true), a & 64 && (r.hpt = t / 20), r;
}
function Tp(e) {
  var r = ip(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function Sp(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Vc(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function bp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), o = e.read_shift(2), l = e.read_shift(2);
  return { Pos: [r, t], Dim: [a, n], Flags: i, CurTab: s, FirstTab: f, Selected: o, TabRatio: l };
}
function Fp() {
  var e = oe(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Ap(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Cp(e) {
  var r = oe(18), t = 1718;
  return e && e.RTL && (t |= 64), r.write_shift(2, t), r.write_shift(4, 0), r.write_shift(4, 64), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
function Ip() {
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
  return a.name = si(e, 0, t), a;
}
function Op(e, r) {
  var t = e.name || "Arial", a = r && r.biff == 5, n = a ? 15 + t.length : 16 + 2 * t.length, i = oe(n);
  return i.write_shift(2, e.sz * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, t.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le"), i;
}
function Np(e, r, t) {
  var a = ka(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function Rp(e, r, t, a) {
  var n = oe(10);
  return Pn(e, r, a, n), n.write_shift(4, t), n;
}
function Pp(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = ka(e, r, t), i = fs(e, a - e.l, t);
  return n.val = i, n;
}
function Bp(e, r, t, a, n) {
  var i = !n || n.biff == 8, s = oe(8 + +i + (1 + i) * t.length);
  return Pn(e, r, a, s), s.write_shift(2, t.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * t.length, t, i ? "utf16le" : "sbcs"), s;
}
function Lp(e, r, t) {
  var a = e.read_shift(2), n = Hn(e, 0, t);
  return [a, n];
}
function Mp(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 3 + r.length : 5 + 2 * r.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Up = Hn;
function Wp(e) {
  var r = oe(1 + e.length);
  return r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function Hp(e) {
  var r = oe(3 + e.length);
  return r.l += 2, r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function Xc(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), o = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c: o } };
}
function Vp(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = oe(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Xp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = bu(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function Kp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(bu(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function jp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function Gp(e, r, t, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), o = e.read_shift(2);
  return n.patternType = Tx[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = o & 127, n.icvBack = o >> 7 & 127, n.fsxButton = o >> 14 & 1), n;
}
function zp(e, r, t) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, r -= 6, a.data = Gp(e, r, a.fStyle, t), a;
}
function Kc(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function $p(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = r.flags & 63, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
}
function qp(e) {
  var r = oe(4);
  return r.l += 2, r.write_shift(1, e.numFmtId), r.l++, r;
}
function Iu(e) {
  var r = oe(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var Yp = Iu;
function Zp(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Jp(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Qp(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if (r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function ev(e) {
  var r = oe(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function rv(e, r, t) {
  var a = ka(e, 6, t), n = yu(e);
  return a.val = n, a.t = n === true || n === false ? "b" : "e", a;
}
function ff(e, r, t, a, n, i) {
  var s = oe(8);
  return Pn(e, r, a, s), ku(t, i, s), s;
}
function tv(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = ka(e, 6, t), n = Pt(e);
  return a.val = n, a;
}
function av(e, r, t, a) {
  var n = oe(14);
  return Pn(e, r, a, n), Nn(t, n), n;
}
var jc = sp;
function nv(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = Rn(e, i), f = []; a > e.l; ) f.push(fs(e));
  return [i, n, s, f];
}
function Gc(e, r, t) {
  var a = e.read_shift(2), n, i = { fBuiltIn: a & 1, fWantAdvise: a >>> 1 & 1, fWantPict: a >>> 2 & 1, fOle: a >>> 3 & 1, fOleLink: a >>> 4 & 1, cf: a >>> 5 & 1023, fIcon: a >>> 15 & 1 };
  return t.sbcch === 14849 && (n = op(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function zc(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), o = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), o = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var l = Rn(e, s, t);
  n & 32 && (l = fo[l.charCodeAt(0)]);
  var h = a - e.l;
  t && t.biff == 2 && --h;
  var v = a == e.l || f === 0 || !(h > 0) ? [] : g_(e, h, t, f);
  return { chKey: i, Name: l, itab: o, rgce: v };
}
function Du(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return $c(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(fp(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function $c(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = si(e, r, t);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function iv(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = Rn(e, a, t), s = Rn(e, n, t);
  return [i, s];
}
function sv(e, r, t) {
  var a = Au(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [__(e, r, t), n, a];
}
function qc(e, r, t) {
  var a = cp(e);
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
  return [a, v_(e, r, t)];
}
function fv(e) {
  var r = e.read_shift(4) !== 0, t = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [r, t, a];
}
function ov(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Hn(e, 0, t);
  return [{ r: a, c: n }, f, s, i];
}
function cv(e, r, t) {
  if (t && t.biff < 8) {
    var a = e.read_shift(2), n = e.read_shift(2);
    if (a == 65535 || a == -1) return;
    var i = e.read_shift(2), s = e.read_shift(Math.min(i, 2048), "cpstr");
    return [{ r: a, c: n }, s];
  }
  return ov(e, r, t);
}
function of(e, r, t, a) {
  var n = oe(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function lv(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(v0(e));
  return t;
}
function uv(e) {
  var r = oe(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) Fu(e[t], r);
  return r;
}
function hv(e, r, t) {
  if (t && t.biff < 8) return xv(e, r, t);
  var a = Cu(e), n = dp(e, r - 22, a[1]);
  return { cmo: a, ft: n };
}
var dv = { 8: function(e, r) {
  var t = e.l + r;
  e.l += 10;
  var a = e.read_shift(2);
  e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
  var n = e.read_shift(1);
  return e.l += n, e.l = t, { fmt: a };
} };
function xv(e, r, t) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
  var s = [];
  return s.push((dv[a] || Ut)(e, r, t)), { cmo: [n, a, i], ft: s };
}
function pv(e, r, t) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (t.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = Qx(e, 6, t);
    var f = e.read_shift(2);
    e.read_shift(2), Zr(e, 2);
    var o = e.read_shift(2);
    e.l += o;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - a != e.lens[l]) throw new Error("TxO: bad continue record");
      var h = e[e.l], v = Rn(e, e.lens[l + 1] - e.lens[l] - 1);
      if (n += v, n.length >= (h ? f : 2 * f)) break;
    }
    if (n.length !== f && n.length !== f * 2) throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + r, { t: n };
  } catch {
    return e.l = a + r, { t: n };
  }
}
function vv(e, r) {
  var t = v0(e);
  e.l += 16;
  var a = ap(e, r - 24);
  return [t, a];
}
function mv(e) {
  var r = oe(24), t = Lr(e[0]);
  r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) r.write_shift(1, parseInt(a[n], 16));
  return rt([r, np(e[1])]);
}
function gv(e, r) {
  e.read_shift(2);
  var t = v0(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
  return a = a.replace($t, ""), [t, a];
}
function _v(e) {
  var r = e[1].Tooltip, t = oe(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var a = Lr(e[0]);
  t.write_shift(2, a.r), t.write_shift(2, a.r), t.write_shift(2, a.c), t.write_shift(2, a.c);
  for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
  return t.write_shift(2, 0), t;
}
function wv(e) {
  var r = [0, 0], t;
  return t = e.read_shift(2), r[0] = Nc[t] || t, t = e.read_shift(2), r[1] = Nc[t] || t, r;
}
function yv(e) {
  return e || (e = oe(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function kv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Su(e));
  return t;
}
function Ev(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Su(e));
  return t;
}
function Tv(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function Ou(e, r, t) {
  if (!t.cellStyles) return Ut(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), o = e.read_shift(2);
  a == 2 && (e.l += 2);
  var l = { s: n, e: i, w: s, ixfe: f, flags: o };
  return (t.biff >= 5 || !t.biff) && (l.level = o >> 8 & 7), l;
}
function Sv(e, r) {
  var t = oe(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function bv(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Pt(e), t.footer = Pt(e), e.l += 2), t;
}
function Fv(e, r, t) {
  var a = { area: false };
  if (t.biff != 5) return e.l += r, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = true), a;
}
function Av(e) {
  for (var r = oe(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
var Cv = ka, Iv = wu, Dv = fs;
function Ov(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function os(e, r, t, a, n) {
  return e || (e = oe(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(1, a || 0), e.write_shift(1, n || 0), e.write_shift(1, 0), e;
}
function Nv(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = ka(e, 7, t), n = Hn(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function Rv(e, r, t) {
  var a = ka(e, 7, t), n = Pt(e);
  return a.t = "n", a.val = n, a;
}
function Pv(e, r, t, a, n) {
  var i = oe(15);
  return os(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function Bv(e, r, t) {
  var a = ka(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function Lv(e, r, t, a, n) {
  var i = oe(9);
  return os(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function Mv(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function Uv(e, r, t) {
  var a = e.l + 7, n = ka(e, 6, t);
  e.l = a;
  var i = yu(e);
  return n.val = i, n.t = i === true || i === false ? "b" : "e", n;
}
function Wv(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function Hv(e, r, t) {
  var a = e.l + r, n = ka(e, 6, t), i = e.read_shift(2), s = Rn(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function Vv(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var Xv = [2, 3, 48, 49, 131, 139, 140, 245], Df = (function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, r = l0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function t(f, o) {
    var l = [], h = cn(1);
    switch (o.type) {
      case "base64":
        h = Xt(ra(f));
        break;
      case "binary":
        h = Xt(f);
        break;
      case "buffer":
      case "array":
        h = f;
        break;
    }
    lt(h, 0);
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
    o.codepage, v != 2 && (h.l += 16, h.read_shift(1), h[h.l] !== 0 && e[h[h.l]], h.l += 1, h.l += 2), _ && (h.l += 36);
    for (var S = [], E = {}, A = Math.min(h.length, v == 2 ? 521 : m - 10 - (x ? 264 : 0)), M = _ ? 32 : 11; h.l < A && h[h.l] != 13; ) switch (E = {}, E.name = Na(h.slice(h.l, h.l + M)).replace(/[\u0000\r\n][\S\s]*$/g, ""), h.l += M, E.type = String.fromCharCode(h.read_shift(1)), v != 2 && !_ && (E.offset = h.read_shift(4)), E.len = h.read_shift(1), v == 2 && (E.offset = h.read_shift(2)), E.dec = h.read_shift(1), E.name.length && S.push(E), v != 2 && (h.l += _ ? 13 : 14), E.type) {
      case "B":
        (!x || E.len != 8) && o.WTF && console.log("Skipping " + E.name + ":" + E.type);
        break;
      case "G":
      case "P":
        o.WTF && console.log("Skipping " + E.name + ":" + E.type);
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
    var G = 0, F = 0;
    for (l[0] = [], F = 0; F != S.length; ++F) l[0][F] = S[F].name;
    for (; y-- > 0; ) {
      if (h[h.l] === 42) {
        h.l += g;
        continue;
      }
      for (++h.l, l[++G] = [], F = 0, F = 0; F != S.length; ++F) {
        var U = h.slice(h.l, h.l + S[F].len);
        h.l += S[F].len, lt(U, 0);
        var D = Na(U);
        switch (S[F].type) {
          case "C":
            D.trim().length && (l[G][F] = D.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            D.length === 8 ? (l[G][F] = new Date(Date.UTC(+D.slice(0, 4), +D.slice(4, 6) - 1, +D.slice(6, 8), 0, 0, 0, 0)), o && o.UTC || (l[G][F] = On(l[G][F]))) : l[G][F] = D;
            break;
          case "F":
            l[G][F] = parseFloat(D.trim());
            break;
          case "+":
          case "I":
            l[G][F] = _ ? U.read_shift(-4, "i") ^ 2147483648 : U.read_shift(4, "i");
            break;
          case "L":
            switch (D.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[G][F] = true;
                break;
              case "N":
              case "F":
                l[G][F] = false;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + D + "|");
            }
            break;
          case "M":
            if (!d) throw new Error("DBF Unexpected MEMO for type " + v.toString(16));
            l[G][F] = "##MEMO##" + (_ ? parseInt(D.trim(), 10) : U.read_shift(4));
            break;
          case "N":
            D = D.replace(/\u0000/g, "").trim(), D && D != "." && (l[G][F] = +D || 0);
            break;
          case "@":
            l[G][F] = new Date(U.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var H = U.read_shift(4), K = U.read_shift(4);
              if (H == 0 && K == 0) break;
              l[G][F] = new Date((H - 2440588) * 864e5 + K), o && o.UTC || (l[G][F] = On(l[G][F]));
            }
            break;
          case "Y":
            l[G][F] = U.read_shift(4, "i") / 1e4 + U.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[G][F] = -U.read_shift(-8, "f");
            break;
          case "B":
            if (x && S[F].len == 8) {
              l[G][F] = U.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            U.l += S[F].len;
            break;
          case "0":
            if (S[F].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + S[F].type);
        }
      }
    }
    if (v != 2 && h.l < h.length && h[h.l++] != 26) throw new Error("DBF EOF Marker missing " + (h.l - 1) + " of " + h.length + " " + h[h.l - 1].toString(16));
    return o && o.sheetRows && (l = l.slice(0, o.sheetRows)), o.DBF = S, l;
  }
  function a(f, o) {
    var l = o || {};
    l.dateNF || (l.dateNF = "yyyymmdd");
    var h = li(t(f, l), l);
    return h["!cols"] = l.DBF.map(function(v) {
      return { wch: v.len, DBF: v };
    }), delete l.DBF, h;
  }
  function n(f, o) {
    try {
      var l = pn(a(f, o), o);
      return l.bookType = "dbf", l;
    } catch (h) {
      if (o && o.WTF) throw h;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, o) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var l = o || {}, h = la;
    if (+l.codepage >= 0 && ga(+l.codepage), l.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = Lt(), d = Bf(f, { header: 1, raw: true, cellDates: true }), x = d[0], _ = d.slice(1), y = f["!cols"] || [], m = 0, g = 0, S = 0, E = 1;
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
    var A = Dr(f["!ref"]), M = [], G = [], F = [];
    for (m = 0; m <= A.e.c - A.s.c; ++m) {
      var U = "", D = "", H = 0, K = [];
      for (g = 0; g < _.length; ++g) _[g][m] != null && K.push(_[g][m]);
      if (K.length == 0 || x[m] == null) {
        M[m] = "?";
        continue;
      }
      for (g = 0; g < K.length; ++g) {
        switch (typeof K[g]) {
          case "number":
            D = "B";
            break;
          case "string":
            D = "C";
            break;
          case "boolean":
            D = "L";
            break;
          case "object":
            D = K[g] instanceof Date ? "D" : "C";
            break;
          default:
            D = "C";
        }
        H = Math.max(H, String(K[g]).length), U = U && U != D ? "C" : D;
      }
      H > 250 && (H = 250), D = ((y[m] || {}).DBF || {}).type, D == "C" && y[m].DBF.len > H && (H = y[m].DBF.len), U == "B" && D == "N" && (U = "N", F[m] = y[m].DBF.dec, H = y[m].DBF.len), G[m] = U == "C" || D == "N" ? H : i[U] || 0, E += G[m], M[m] = U;
    }
    var ee = v.next(32);
    for (ee.write_shift(4, 318902576), ee.write_shift(4, _.length), ee.write_shift(2, 296 + 32 * S), ee.write_shift(2, E), m = 0; m < 4; ++m) ee.write_shift(4, 0);
    var de = +r[la] || 3;
    for (ee.write_shift(4, 0 | de << 8), e[de] != +l.codepage && (l.codepage && console.error("DBF Unsupported codepage " + la + ", using 1252"), la = 1252), m = 0, g = 0; m < x.length; ++m) if (x[m] != null) {
      var Pe = v.next(32), me = (x[m].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      Pe.write_shift(1, me, "sbcs"), Pe.write_shift(1, M[m] == "?" ? "C" : M[m], "sbcs"), Pe.write_shift(4, g), Pe.write_shift(1, G[m] || i[M[m]] || 0), Pe.write_shift(1, F[m] || 0), Pe.write_shift(1, 2), Pe.write_shift(4, 0), Pe.write_shift(1, 0), Pe.write_shift(4, 0), Pe.write_shift(4, 0), g += G[m] || i[M[m]] || 0;
    }
    var ze = v.next(264);
    for (ze.write_shift(4, 13), m = 0; m < 65; ++m) ze.write_shift(4, 0);
    for (m = 0; m < _.length; ++m) {
      var ke = v.next(E);
      for (ke.write_shift(1, 0), g = 0; g < x.length; ++g) if (x[g] != null) switch (M[g]) {
        case "L":
          ke.write_shift(1, _[m][g] == null ? 63 : _[m][g] ? 84 : 70);
          break;
        case "B":
          ke.write_shift(8, _[m][g] || 0, "f");
          break;
        case "N":
          var Be = "0";
          for (typeof _[m][g] == "number" && (Be = _[m][g].toFixed(F[g] || 0)), Be.length > G[g] && (Be = Be.slice(0, G[g])), S = 0; S < G[g] - Be.length; ++S) ke.write_shift(1, 32);
          ke.write_shift(1, Be, "sbcs");
          break;
        case "D":
          _[m][g] ? (ke.write_shift(4, ("0000" + _[m][g].getFullYear()).slice(-4), "sbcs"), ke.write_shift(2, ("00" + (_[m][g].getMonth() + 1)).slice(-2), "sbcs"), ke.write_shift(2, ("00" + _[m][g].getDate()).slice(-2), "sbcs")) : ke.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var Qe = ke.l, he = String(_[m][g] != null ? _[m][g] : "").slice(0, G[g]);
          for (ke.write_shift(1, he, "cpstr"), Qe += G[g] - ke.l, S = 0; S < Qe; ++S) ke.write_shift(1, 32);
          break;
      }
    }
    return la = h, v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: n, to_sheet: a, from_sheet: s };
})(), Nu = (function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var t = function(x, _) {
    var y = e[_];
    return typeof y == "number" ? sc(y) : y;
  }, a = function(x, _, y) {
    var m = _.charCodeAt(0) - 32 << 4 | y.charCodeAt(0) - 48;
    return m == 59 ? x : sc(m);
  };
  e["|"] = 254;
  var n = function(x) {
    return x.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function i(x, _) {
    switch (_.type) {
      case "base64":
        return s(ra(x), _);
      case "binary":
        return s(x, _);
      case "buffer":
        return s(mr && Buffer.isBuffer(x) ? x.toString("binary") : Na(x), _);
      case "array":
        return s(Dn(x), _);
    }
    throw new Error("Unrecognized type " + _.type);
  }
  function s(x, _) {
    var y = x.split(/[\n\r]+/), m = -1, g = -1, S = 0, E = 0, A = [], M = [], G = null, F = {}, U = [], D = [], H = [], K = 0, ee, de = { Workbook: { WBProps: {}, Names: [] } };
    for (+_.codepage >= 0 && ga(+_.codepage); S !== y.length; ++S) {
      K = 0;
      var Pe = y[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), me = Pe.replace(/;;/g, "\0").split(";").map(function(X) {
        return X.replace(/\u0000/g, ";");
      }), ze = me[0], ke;
      if (Pe.length > 0) switch (ze) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "V":
              {
                var Be = parseInt(me[E].slice(1), 10);
                Be >= 1 && Be <= 4 && (de.Workbook.WBProps.date1904 = true);
              }
              break;
          }
          break;
        case "W":
          break;
        case "P":
          me[1].charAt(0) === "P" && M.push(Pe.slice(3).replace(/;;/g, ";"));
          break;
        case "NN":
          {
            var Qe = { Sheet: 0 };
            for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
              case "N":
                Qe.Name = me[E].slice(1);
                break;
              case "E":
                Qe.Ref = (_ && _.sheet || "Sheet1") + "!" + An(me[E].slice(1));
                break;
            }
            de.Workbook.Names.push(Qe);
          }
          break;
        case "C":
          var he = false, fr = false, Me = false, Te = false, ye = -1, je = -1, Ge = "", Ze = "z", P = "";
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "A":
              P = me[E].slice(1);
              break;
            case "X":
              g = parseInt(me[E].slice(1), 10) - 1, fr = true;
              break;
            case "Y":
              for (m = parseInt(me[E].slice(1), 10) - 1, fr || (g = 0), ee = A.length; ee <= m; ++ee) A[ee] = [];
              break;
            case "K":
              ke = me[E].slice(1), ke.charAt(0) === '"' ? (ke = ke.slice(1, ke.length - 1), Ze = "s") : ke === "TRUE" || ke === "FALSE" ? (ke = ke === "TRUE", Ze = "b") : ke.charAt(0) == "#" && _t[ke] != null ? (Ze = "e", ke = _t[ke]) : isNaN(ea(ke)) || (ke = ea(ke), Ze = "n", G !== null && ua(G) && _.cellDates && (ke = Xa(de.Workbook.WBProps.date1904 ? ke + 1462 : ke), Ze = typeof ke == "number" ? "n" : "d")), he = true;
              break;
            case "E":
              Te = true, Ge = An(me[E].slice(1), { r: m, c: g });
              break;
            case "S":
              Me = true;
              break;
            case "G":
              break;
            case "R":
              ye = parseInt(me[E].slice(1), 10) - 1;
              break;
            case "C":
              je = parseInt(me[E].slice(1), 10) - 1;
              break;
            default:
              if (_ && _.WTF) throw new Error("SYLK bad record " + Pe);
          }
          if (he && (A[m][g] ? (A[m][g].t = Ze, A[m][g].v = ke) : A[m][g] = { t: Ze, v: ke }, G && (A[m][g].z = G), _.cellText !== false && G && (A[m][g].w = ta(A[m][g].z, A[m][g].v, { date1904: de.Workbook.WBProps.date1904 })), G = null), Me) {
            if (Te) throw new Error("SYLK shared formula cannot have own formula");
            var W = ye > -1 && A[ye][je];
            if (!W || !W[1]) throw new Error("SYLK shared formula cannot find base");
            Ge = zu(W[1], { r: m - ye, c: g - je });
          }
          Ge && (A[m][g] ? A[m][g].f = Ge : A[m][g] = { t: "n", f: Ge }), P && (A[m][g] || (A[m][g] = { t: "z" }), A[m][g].c = [{ a: "SheetJSYLK", t: P }]);
          break;
        case "F":
          var z = 0;
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "X":
              g = parseInt(me[E].slice(1), 10) - 1, ++z;
              break;
            case "Y":
              for (m = parseInt(me[E].slice(1), 10) - 1, ee = A.length; ee <= m; ++ee) A[ee] = [];
              break;
            case "M":
              K = parseInt(me[E].slice(1), 10) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              G = M[parseInt(me[E].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (H = me[E].slice(1).split(" "), ee = parseInt(H[0], 10); ee <= parseInt(H[1], 10); ++ee) K = parseInt(H[2], 10), D[ee - 1] = K === 0 ? { hidden: true } : { wch: K };
              break;
            case "C":
              g = parseInt(me[E].slice(1), 10) - 1, D[g] || (D[g] = {});
              break;
            case "R":
              m = parseInt(me[E].slice(1), 10) - 1, U[m] || (U[m] = {}), K > 0 ? (U[m].hpt = K, U[m].hpx = oi(K)) : K === 0 && (U[m].hidden = true);
              break;
            default:
              if (_ && _.WTF) throw new Error("SYLK bad record " + Pe);
          }
          z < 1 && (G = null);
          break;
        default:
          if (_ && _.WTF) throw new Error("SYLK bad record " + Pe);
      }
    }
    return U.length > 0 && (F["!rows"] = U), D.length > 0 && (F["!cols"] = D), D.forEach(function(X) {
      ln(X);
    }), _ && _.sheetRows && (A = A.slice(0, _.sheetRows)), [A, F, de];
  }
  function f(x, _) {
    var y = i(x, _), m = y[0], g = y[1], S = y[2], E = Vr(_);
    E.date1904 = (((S || {}).Workbook || {}).WBProps || {}).date1904;
    var A = li(m, E);
    Gr(g).forEach(function(G) {
      A[G] = g[G];
    });
    var M = pn(A, _);
    return Gr(S).forEach(function(G) {
      M[G] = S[G];
    }), M.bookType = "sylk", M;
  }
  function o(x, _, y, m, g, S) {
    var E = "C;Y" + (y + 1) + ";X" + (m + 1) + ";K";
    switch (x.t) {
      case "n":
        E += isFinite(x.v) ? x.v || 0 : dt[isNaN(x.v) ? 36 : 7], x.f && !x.F && (E += ";E" + g0(x.f, { r: y, c: m }));
        break;
      case "b":
        E += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        E += x.w || dt[x.v] || x.v;
        break;
      case "d":
        E += Yr($r(x.v, S), S);
        break;
      case "s":
        E += '"' + (x.v == null ? "" : String(x.v)).replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return E;
  }
  function l(x, _, y) {
    var m = "C;Y" + (_ + 1) + ";X" + (y + 1) + ";A";
    return m += n(x.map(function(g) {
      return g.t;
    }).join("")), m;
  }
  function h(x, _) {
    _.forEach(function(y, m) {
      var g = "F;W" + (m + 1) + " " + (m + 1) + " ";
      y.hidden ? g += "0" : (typeof y.width == "number" && !y.wpx && (y.wpx = Yi(y.width)), typeof y.wpx == "number" && !y.wch && (y.wch = Zi(y.wpx)), typeof y.wch == "number" && (g += Math.round(y.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function v(x, _) {
    _.forEach(function(y, m) {
      var g = "F;";
      y.hidden ? g += "M0;" : y.hpt ? g += "M" + 20 * y.hpt + ";" : y.hpx && (g += "M" + 20 * Ji(y.hpx) + ";"), g.length > 2 && x.push(g + "R" + (m + 1));
    });
  }
  function d(x, _, y) {
    _ || (_ = {}), _._formats = ["General"];
    var m = ["ID;PSheetJS;N;E"], g = [], S = Dr(x["!ref"] || "A1"), E, A = x["!data"] != null, M = `\r
`, G = (((y || {}).Workbook || {}).WBProps || {}).date1904, F = "General";
    m.push("P;PGeneral");
    var U = S.s.r, D = S.s.c, H = [];
    if (x["!ref"]) {
      for (U = S.s.r; U <= S.e.r; ++U) if (!(A && !x["!data"][U])) {
        for (H = [], D = S.s.c; D <= S.e.c; ++D) E = A ? x["!data"][U][D] : x[gr(D) + Fr(U)], !(!E || !E.c) && H.push(l(E.c, U, D));
        H.length && g.push(H.join(M));
      }
    }
    if (x["!ref"]) {
      for (U = S.s.r; U <= S.e.r; ++U) if (!(A && !x["!data"][U])) {
        for (H = [], D = S.s.c; D <= S.e.c; ++D) if (E = A ? x["!data"][U][D] : x[gr(D) + Fr(U)], !(!E || E.v == null && (!E.f || E.F))) {
          if ((E.z || (E.t == "d" ? ir[14] : "General")) != F) {
            var K = _._formats.indexOf(E.z);
            K == -1 && (_._formats.push(E.z), K = _._formats.length - 1, m.push("P;P" + E.z.replace(/;/g, ";;"))), H.push("F;P" + K + ";Y" + (U + 1) + ";X" + (D + 1));
          }
          H.push(o(E, x, U, D, _, G));
        }
        g.push(H.join(M));
      }
    }
    return m.push("F;P0;DG0G8;M255"), x["!cols"] && h(m, x["!cols"]), x["!rows"] && v(m, x["!rows"]), x["!ref"] && m.push("B;Y" + (S.e.r - S.s.r + 1) + ";X" + (S.e.c - S.s.c + 1) + ";D" + [S.s.c, S.s.r, S.e.c, S.e.r].join(" ")), m.push("O;L;D;B" + (G ? ";V4" : "") + ";K47;G100 0.001"), delete _._formats, m.join(M) + M + g.join(M) + M + "E" + M;
  }
  return { to_workbook: f, from_sheet: d };
})(), Ru = /* @__PURE__ */ (function() {
  function e(f, o) {
    switch (o.type) {
      case "base64":
        return r(ra(f), o);
      case "binary":
        return r(f, o);
      case "buffer":
        return r(mr && Buffer.isBuffer(f) ? f.toString("binary") : Na(f), o);
      case "array":
        return r(Dn(f), o);
    }
    throw new Error("Unrecognized type " + o.type);
  }
  function r(f, o) {
    for (var l = f.split(`
`), h = -1, v = -1, d = 0, x = []; d !== l.length; ++d) {
      if (l[d].trim() === "BOT") {
        x[++h] = [], v = 0;
        continue;
      }
      if (!(h < 0)) {
        var _ = l[d].trim().split(","), y = _[0], m = _[1];
        ++d;
        for (var g = l[d] || ""; (g.match(/["]/g) || []).length & 1 && d < l.length - 1; ) g += `
` + l[++d];
        switch (g = g.trim(), +y) {
          case -1:
            if (g === "BOT") {
              x[++h] = [], v = 0;
              continue;
            } else if (g !== "EOD") throw new Error("Unrecognized DIF special command " + g);
            break;
          case 0:
            g === "TRUE" ? x[h][v] = true : g === "FALSE" ? x[h][v] = false : isNaN(ea(m)) ? isNaN(Xi(m).getDate()) ? x[h][v] = m : (x[h][v] = $r(m), o && o.UTC || (x[h][v] = On(x[h][v]))) : x[h][v] = ea(m), ++v;
            break;
          case 1:
            g = g.slice(1, g.length - 1), g = g.replace(/""/g, '"'), g && g.match(/^=".*"$/) && (g = g.slice(2, -1)), x[h][v++] = g !== "" ? g : null;
            break;
        }
        if (g === "EOD") break;
      }
    }
    return o && o.sheetRows && (x = x.slice(0, o.sheetRows)), x;
  }
  function t(f, o) {
    return li(e(f, o), o);
  }
  function a(f, o) {
    var l = pn(t(f, o), o);
    return l.bookType = "dif", l;
  }
  function n(f, o) {
    return "0," + String(f) + `\r
` + o;
  }
  function i(f) {
    return `1,0\r
"` + f.replace(/"/g, '""') + '"';
  }
  function s(f) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DIF");
    for (var o = Dr(f["!ref"]), l = f["!data"] != null, h = [`TABLE\r
0,1\r
"sheetjs"\r
`, `VECTORS\r
0,` + (o.e.r - o.s.r + 1) + `\r
""\r
`, `TUPLES\r
0,` + (o.e.c - o.s.c + 1) + `\r
""\r
`, `DATA\r
0,0\r
""\r
`], v = o.s.r; v <= o.e.r; ++v) {
      for (var d = l ? f["!data"][v] : [], x = `-1,0\r
BOT\r
`, _ = o.s.c; _ <= o.e.c; ++_) {
        var y = l ? d && d[_] : f[yr({ r: v, c: _ })];
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
            y.w || (y.w = ta(y.z || ir[14], Yr($r(y.v)))), x += n(y.w, "V");
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
})(), Pu = (function() {
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
        var E = Lr(S[1]);
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
    return li(t(v, d), d);
  }
  function n(v, d) {
    return pn(a(v, d), d);
  }
  var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`), s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`, f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function l(v) {
    if (!v || !v["!ref"]) return "";
    for (var d = [], x = [], _, y = "", m = wt(v["!ref"]), g = v["!data"] != null, S = m.s.r; S <= m.e.r; ++S) for (var E = m.s.c; E <= m.e.c; ++E) if (y = yr({ r: S, c: E }), _ = g ? (v["!data"][S] || [])[E] : v[y], !(!_ || _.v == null || _.t === "z")) {
      switch (x = ["cell", y, "t"], _.t) {
        case "s":
          x.push(r(_.v));
          break;
        case "b":
          x[2] = "vt" + (_.f ? "f" : "c"), x[3] = "nl", x[4] = _.v ? "1" : "0", x[5] = r(_.f || (_.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var A = Yr($r(_.v));
          x[2] = "vtc", x[3] = "nd", x[4] = "" + A, x[5] = _.w || ta(_.z || ir[14], A);
          break;
        case "n":
          isFinite(_.v) ? _.f ? (x[2] = "vtf", x[3] = "n", x[4] = _.v, x[5] = r(_.f)) : (x[2] = "v", x[3] = _.v) : (x[2] = "vt" + (_.f ? "f" : "c"), x[3] = "e" + dt[isNaN(_.v) ? 36 : 7], x[4] = "0", x[5] = _.f || x[3].slice(1), x[6] = "e", x[7] = x[3].slice(1));
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
    return [i, s, f, s, l(v), o].join(`
`);
  }
  return { to_workbook: n, to_sheet: a, from_sheet: h };
})(), fi = /* @__PURE__ */ (function() {
  function e(h, v, d, x, _) {
    _.raw ? v[d][x] = h : h === "" || (h === "TRUE" ? v[d][x] = true : h === "FALSE" ? v[d][x] = false : isNaN(ea(h)) ? isNaN(Xi(h).getDate()) ? h.charCodeAt(0) == 35 && _t[h] != null ? v[d][x] = { t: "e", v: _t[h], w: h } : v[d][x] = h : v[d][x] = $r(h) : v[d][x] = ea(h));
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
    var m = 0, g = 0, S = 0, E = 0, A = 0, M = x.charCodeAt(0), G = false, F = 0, U = h.charCodeAt(0), D = d.dateNF != null ? ud(d.dateNF) : null;
    function H() {
      var K = h.slice(E, A);
      K.slice(-1) == "\r" && (K = K.slice(0, -1));
      var ee = {};
      if (K.charAt(0) == '"' && K.charAt(K.length - 1) == '"' && (K = K.slice(1, -1).replace(/""/g, '"')), d.cellText !== false && (ee.w = K), K.length === 0) ee.t = "z";
      else if (d.raw) ee.t = "s", ee.v = K;
      else if (K.trim().length === 0) ee.t = "s", ee.v = K;
      else if (K.charCodeAt(0) == 61) K.charCodeAt(1) == 34 && K.charCodeAt(K.length - 1) == 34 ? (ee.t = "s", ee.v = K.slice(2, -1).replace(/""/g, '"')) : t2(K) ? (ee.t = "s", ee.f = K.slice(1), ee.v = K) : (ee.t = "s", ee.v = K);
      else if (K == "TRUE") ee.t = "b", ee.v = true;
      else if (K == "FALSE") ee.t = "b", ee.v = false;
      else if (!isNaN(S = ea(K))) ee.t = "n", ee.v = S;
      else if (!isNaN((S = Xi(K)).getDate()) || D && K.match(D)) {
        if (ee.z = d.dateNF || ir[14], D && K.match(D)) {
          var de = hd(K, d.dateNF, K.match(D) || []);
          S = $r(de), d && d.UTC === false && (S = On(S));
        } else d && d.UTC === false ? S = On(S) : d.cellText !== false && d.dateNF && (ee.w = ta(ee.z, S));
        d.cellDates ? (ee.t = "d", ee.v = S) : (ee.t = "n", ee.v = Yr(S)), d.cellNF || delete ee.z;
      } else K.charCodeAt(0) == 35 && _t[K] != null ? (ee.t = "e", ee.w = K, ee.v = _t[K]) : (ee.t = "s", ee.v = K);
      if (ee.t == "z" || (d.dense ? (_["!data"][m] || (_["!data"][m] = []), _["!data"][m][g] = ee) : _[yr({ c: g, r: m })] = ee), E = A + 1, U = h.charCodeAt(E), y.e.c < g && (y.e.c = g), y.e.r < m && (y.e.r = m), F == M) ++g;
      else if (g = 0, ++m, d.sheetRows && d.sheetRows <= m) return true;
    }
    e: for (; A < h.length; ++A) switch (F = h.charCodeAt(A)) {
      case 34:
        U === 34 && (G = !G);
        break;
      case 13:
        if (G) break;
        h.charCodeAt(A + 1) == 10 && ++A;
      case M:
      case 10:
        if (!G && H()) break e;
        break;
    }
    return A - E > 0 && H(), _["!ref"] = xr(y), _;
  }
  function s(h, v) {
    return !(v && v.PRN) || v.FS || h.slice(0, 4) == "sep=" || h.indexOf("	") >= 0 || h.indexOf(",") >= 0 || h.indexOf(";") >= 0 ? i(h, v) : li(r(h, v), v);
  }
  function f(h, v) {
    var d = "", x = v.type == "string" ? [0, 0, 0, 0] : ko(h, v);
    switch (v.type) {
      case "base64":
        d = ra(h);
        break;
      case "binary":
        d = h;
        break;
      case "buffer":
        v.codepage == 65001 ? d = h.toString("utf8") : (v.codepage, d = mr && Buffer.isBuffer(h) ? h.toString("binary") : Na(h));
        break;
      case "array":
        d = Dn(h);
        break;
      case "string":
        d = h;
        break;
      default:
        throw new Error("Unrecognized type " + v.type);
    }
    return x[0] == 239 && x[1] == 187 && x[2] == 191 ? d = Br(d.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? d = Br(d) : v.type == "binary", d.slice(0, 19) == "socialcalc:version:" ? Pu.to_sheet(v.type == "string" ? d : Br(d), v) : s(d, v);
  }
  function o(h, v) {
    return pn(f(h, v), v);
  }
  function l(h) {
    var v = [];
    if (!h["!ref"]) return "";
    for (var d = Dr(h["!ref"]), x, _ = h["!data"] != null, y = d.s.r; y <= d.e.r; ++y) {
      for (var m = [], g = d.s.c; g <= d.e.c; ++g) {
        var S = yr({ r: y, c: g });
        if (x = _ ? (h["!data"][y] || [])[g] : h[S], !x || x.v == null) {
          m.push("          ");
          continue;
        }
        for (var E = (x.w || (Ga(x), x.w) || "").slice(0, 10); E.length < 10; ) E += " ";
        m.push(E + (g === 0 ? " " : ""));
      }
      v.push(m.join(""));
    }
    return v.join(`
`);
  }
  return { to_workbook: o, to_sheet: f, from_sheet: l };
})();
function Kv(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = true;
  try {
    var n = Nu.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return fi.to_workbook(e, r);
  }
}
var Fn = /* @__PURE__ */ (function() {
  function e(P, W, z) {
    if (P) {
      lt(P, P.l || 0);
      for (var X = z.Enum || Te; P.l < P.length; ) {
        var le = P.read_shift(2), O = X[le] || X[65535], Ce = P.read_shift(2), We = P.l + Ce, Se = O.f && O.f(P, Ce, z);
        if (P.l = We, W(Se, O, le)) return;
      }
    }
  }
  function r(P, W) {
    switch (W.type) {
      case "base64":
        return a(Xt(ra(P)), W);
      case "binary":
        return a(Xt(P), W);
      case "buffer":
      case "array":
        return a(P, W);
    }
    throw "Unsupported type " + W.type;
  }
  var t = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(P, W) {
    if (!P) return P;
    var z = W || {}, X = {}, le = "Sheet1", O = "", Ce = 0, We = {}, Se = [], nr = [], rr = [];
    z.dense && (rr = X["!data"] = []);
    var or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ir = z.sheetRows || 0, Er = {};
    if (P[4] == 81 && P[5] == 80 && P[6] == 87) return Ze(P, W);
    if (P[2] == 0 && (P[3] == 8 || P[3] == 9) && P.length >= 16 && P[14] == 5 && P[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (P[2] == 2) z.Enum = Te, e(P, function(Oe, Jr, qr) {
      switch (qr) {
        case 0:
          z.vers = Oe, Oe >= 4096 && (z.qpro = true);
          break;
        case 255:
          z.vers = Oe, z.works = true;
          break;
        case 6:
          or = Oe;
          break;
        case 204:
          Oe && (O = Oe);
          break;
        case 222:
          O = Oe;
          break;
        case 15:
        case 51:
          (!z.qpro && !z.works || qr == 51) && Oe[1].v.charCodeAt(0) < 48 && (Oe[1].v = Oe[1].v.slice(1)), (z.works || z.works2) && (Oe[1].v = Oe[1].v.replace(/\r\n/g, `
`));
        case 13:
        case 14:
        case 16:
          (Oe[2] & 112) == 112 && (Oe[2] & 15) > 1 && (Oe[2] & 15) < 15 && (Oe[1].z = z.dateNF || t[(Oe[2] & 15) - 1] || ir[14], z.cellDates && (Oe[1].v = Xa(Oe[1].v), Oe[1].t = typeof Oe[1].v == "number" ? "n" : "d")), z.qpro && Oe[3] > Ce && (X["!ref"] = xr(or), We[le] = X, Se.push(le), X = {}, z.dense && (rr = X["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], le = O || "Sheet" + (Ce + 1), O = "");
          var Ur = z.dense ? (rr[Oe[0].r] || [])[Oe[0].c] : X[yr(Oe[0])];
          if (Ur) {
            Ur.t = Oe[1].t, Ur.v = Oe[1].v, Oe[1].z != null && (Ur.z = Oe[1].z), Oe[1].f != null && (Ur.f = Oe[1].f), Er = Ur;
            break;
          }
          z.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : X[yr(Oe[0])] = Oe[1], Er = Oe[1];
          break;
        case 21509:
          z.works2 = true;
          break;
        case 21506:
          Oe == 5281 && (Er.z = "hh:mm:ss", z.cellDates && Er.t == "n" && (Er.v = Xa(Er.v), Er.t = typeof Er.v == "number" ? "n" : "d"));
          break;
      }
    }, z);
    else if (P[2] == 26 || P[2] == 14) z.Enum = ye, P[2] == 14 && (z.qpro = true, P.l = 0), e(P, function(Oe, Jr, qr) {
      switch (qr) {
        case 204:
          le = Oe;
          break;
        case 22:
          Oe[1].v.charCodeAt(0) < 48 && (Oe[1].v = Oe[1].v.slice(1)), Oe[1].v = Oe[1].v.replace(/\x0F./g, function(Ur) {
            return String.fromCharCode(Ur.charCodeAt(1) - 32);
          }).replace(/\r\n/g, `
`);
        case 23:
        case 24:
        case 25:
        case 37:
        case 39:
        case 40:
          if (Oe[3] > Ce && (X["!ref"] = xr(or), We[le] = X, Se.push(le), X = {}, z.dense && (rr = X["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], le = "Sheet" + (Ce + 1)), Ir > 0 && Oe[0].r >= Ir) break;
          z.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : X[yr(Oe[0])] = Oe[1], or.e.c < Oe[0].c && (or.e.c = Oe[0].c), or.e.r < Oe[0].r && (or.e.r = Oe[0].r);
          break;
        case 27:
          Oe[14e3] && (nr[Oe[14e3][0]] = Oe[14e3][1]);
          break;
        case 1537:
          nr[Oe[0]] = Oe[1], Oe[0] == Ce && (le = Oe[1]);
          break;
      }
    }, z);
    else throw new Error("Unrecognized LOTUS BOF " + P[2]);
    if (X["!ref"] = xr(or), We[O || le] = X, Se.push(O || le), !nr.length) return { SheetNames: Se, Sheets: We };
    for (var Kr = {}, $e = [], Tr = 0; Tr < nr.length; ++Tr) We[Se[Tr]] ? ($e.push(nr[Tr] || Se[Tr]), Kr[nr[Tr]] = We[nr[Tr]] || We[Se[Tr]]) : ($e.push(nr[Tr]), Kr[nr[Tr]] = { "!ref": "A1" });
    return { SheetNames: $e, Sheets: Kr };
  }
  function n(P, W) {
    var z = W || {};
    if (+z.codepage >= 0 && ga(+z.codepage), z.type == "string") throw new Error("Cannot write WK1 to JS string");
    var X = Lt();
    if (!P["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var le = Dr(P["!ref"]), O = P["!data"] != null, Ce = [];
    _e(X, 0, s(1030)), _e(X, 6, l(le));
    for (var We = Math.min(le.e.r, 8191), Se = le.s.c; Se <= le.e.c; ++Se) Ce[Se] = gr(Se);
    for (var nr = le.s.r; nr <= We; ++nr) {
      var rr = Fr(nr);
      for (Se = le.s.c; Se <= le.e.c; ++Se) {
        var or = O ? (P["!data"][nr] || [])[Se] : P[Ce[Se] + rr];
        if (!(!or || or.t == "z")) switch (or.t) {
          case "n":
            (or.v | 0) == or.v && or.v >= -32768 && or.v <= 32767 ? _e(X, 13, m(nr, Se, or)) : _e(X, 14, S(nr, Se, or));
            break;
          case "d":
            var Ir = Yr(or.v);
            (Ir | 0) == Ir && Ir >= -32768 && Ir <= 32767 ? _e(X, 13, m(nr, Se, { v: Ir, z: or.z || ir[14] })) : _e(X, 14, S(nr, Se, { v: Ir, z: or.z || ir[14] }));
            break;
          default:
            var Er = Ga(or);
            _e(X, 15, x(nr, Se, Er.slice(0, 239)));
        }
      }
    }
    return _e(X, 1), X.end();
  }
  function i(P, W) {
    var z = W || {};
    if (+z.codepage >= 0 && ga(+z.codepage), z.type == "string") throw new Error("Cannot write WK3 to JS string");
    var X = Lt();
    _e(X, 0, f(P));
    for (var le = 0, O = 0; le < P.SheetNames.length; ++le) (P.Sheets[P.SheetNames[le]] || {})["!ref"] && _e(X, 27, Me(P.SheetNames[le], O++));
    var Ce = 0;
    for (le = 0; le < P.SheetNames.length; ++le) {
      var We = P.Sheets[P.SheetNames[le]];
      if (!(!We || !We["!ref"])) {
        for (var Se = Dr(We["!ref"]), nr = We["!data"] != null, rr = [], or = Math.min(Se.e.r, 8191), Ir = Se.s.r; Ir <= or; ++Ir) for (var Er = Fr(Ir), Kr = Se.s.c; Kr <= Se.e.c; ++Kr) {
          Ir === Se.s.r && (rr[Kr] = gr(Kr));
          var $e = rr[Kr] + Er, Tr = nr ? (We["!data"][Ir] || [])[Kr] : We[$e];
          if (!(!Tr || Tr.t == "z")) if (Tr.t == "n") _e(X, 23, de(Ir, Kr, Ce, Tr.v));
          else {
            var Oe = Ga(Tr);
            _e(X, 22, H(Ir, Kr, Ce, Oe.slice(0, 239)));
          }
        }
        ++Ce;
      }
    }
    return _e(X, 1), X.end();
  }
  function s(P) {
    var W = oe(2);
    return W.write_shift(2, P), W;
  }
  function f(P) {
    var W = oe(26);
    W.write_shift(2, 4096), W.write_shift(2, 4), W.write_shift(4, 0);
    for (var z = 0, X = 0, le = 0, O = 0; O < P.SheetNames.length; ++O) {
      var Ce = P.SheetNames[O], We = P.Sheets[Ce];
      if (!(!We || !We["!ref"])) {
        ++le;
        var Se = wt(We["!ref"]);
        z < Se.e.r && (z = Se.e.r), X < Se.e.c && (X = Se.e.c);
      }
    }
    return z > 8191 && (z = 8191), W.write_shift(2, z), W.write_shift(1, le), W.write_shift(1, X), W.write_shift(2, 0), W.write_shift(2, 0), W.write_shift(1, 1), W.write_shift(1, 2), W.write_shift(4, 0), W.write_shift(4, 0), W;
  }
  function o(P, W, z) {
    var X = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return W == 8 && z.qpro ? (X.s.c = P.read_shift(1), P.l++, X.s.r = P.read_shift(2), X.e.c = P.read_shift(1), P.l++, X.e.r = P.read_shift(2), X) : (X.s.c = P.read_shift(2), X.s.r = P.read_shift(2), W == 12 && z.qpro && (P.l += 2), X.e.c = P.read_shift(2), X.e.r = P.read_shift(2), W == 12 && z.qpro && (P.l += 2), X.s.c == 65535 && (X.s.c = X.e.c = X.s.r = X.e.r = 0), X);
  }
  function l(P) {
    var W = oe(8);
    return W.write_shift(2, P.s.c), W.write_shift(2, P.s.r), W.write_shift(2, P.e.c), W.write_shift(2, P.e.r), W;
  }
  function h(P, W, z) {
    var X = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return z.qpro && z.vers != 20768 ? (X[0].c = P.read_shift(1), X[3] = P.read_shift(1), X[0].r = P.read_shift(2), P.l += 2) : z.works ? (X[0].c = P.read_shift(2), X[0].r = P.read_shift(2), X[2] = P.read_shift(2)) : (X[2] = P.read_shift(1), X[0].c = P.read_shift(2), X[0].r = P.read_shift(2)), X;
  }
  function v(P) {
    return P.z && ua(P.z) ? 240 | (t.indexOf(P.z) + 1 || 2) : 255;
  }
  function d(P, W, z) {
    var X = P.l + W, le = h(P, W, z);
    if (le[1].t = "s", (z.vers & 65534) == 20768) {
      P.l++;
      var O = P.read_shift(1);
      return le[1].v = P.read_shift(O, "utf8"), le;
    }
    return z.qpro && P.l++, le[1].v = P.read_shift(X - P.l, "cstr"), le;
  }
  function x(P, W, z) {
    var X = oe(7 + z.length);
    X.write_shift(1, 255), X.write_shift(2, W), X.write_shift(2, P), X.write_shift(1, 39);
    for (var le = 0; le < X.length; ++le) {
      var O = z.charCodeAt(le);
      X.write_shift(1, O >= 128 ? 95 : O);
    }
    return X.write_shift(1, 0), X;
  }
  function _(P, W, z) {
    var X = P.l + W, le = h(P, W, z);
    if (le[1].t = "s", z.vers == 20768) {
      var O = P.read_shift(1);
      return le[1].v = P.read_shift(O, "utf8"), le;
    }
    return le[1].v = P.read_shift(X - P.l, "cstr"), le;
  }
  function y(P, W, z) {
    var X = h(P, W, z);
    return X[1].v = P.read_shift(2, "i"), X;
  }
  function m(P, W, z) {
    var X = oe(7);
    return X.write_shift(1, v(z)), X.write_shift(2, W), X.write_shift(2, P), X.write_shift(2, z.v, "i"), X;
  }
  function g(P, W, z) {
    var X = h(P, W, z);
    return X[1].v = P.read_shift(8, "f"), X;
  }
  function S(P, W, z) {
    var X = oe(13);
    return X.write_shift(1, v(z)), X.write_shift(2, W), X.write_shift(2, P), X.write_shift(8, z.v, "f"), X;
  }
  function E(P, W, z) {
    var X = P.l + W, le = h(P, W, z);
    if (le[1].v = P.read_shift(8, "f"), z.qpro) P.l = X;
    else {
      var O = P.read_shift(2);
      F(P.slice(P.l, P.l + O), le), P.l += O;
    }
    return le;
  }
  function A(P, W, z) {
    var X = W & 32768;
    return W &= -32769, W = (X ? P : 0) + (W >= 8192 ? W - 16384 : W), (X ? "" : "$") + (z ? gr(W) : Fr(W));
  }
  var M = { 31: ["NA", 0], 33: ["ABS", 1], 34: ["TRUNC", 1], 35: ["SQRT", 1], 36: ["LOG", 1], 37: ["LN", 1], 38: ["PI", 0], 39: ["SIN", 1], 40: ["COS", 1], 41: ["TAN", 1], 42: ["ATAN2", 2], 43: ["ATAN", 1], 44: ["ASIN", 1], 45: ["ACOS", 1], 46: ["EXP", 1], 47: ["MOD", 2], 49: ["ISNA", 1], 50: ["ISERR", 1], 51: ["FALSE", 0], 52: ["TRUE", 0], 53: ["RAND", 0], 54: ["DATE", 3], 63: ["ROUND", 2], 64: ["TIME", 3], 68: ["ISNUMBER", 1], 69: ["ISTEXT", 1], 70: ["LEN", 1], 71: ["VALUE", 1], 73: ["MID", 3], 74: ["CHAR", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 102: ["UPPER", 1], 103: ["LOWER", 1], 107: ["PROPER", 1], 109: ["TRIM", 1], 111: ["T", 1] }, G = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function F(P, W) {
    lt(P, 0);
    for (var z = [], X = 0, le = "", O = "", Ce = "", We = ""; P.l < P.length; ) {
      var Se = P[P.l++];
      switch (Se) {
        case 0:
          z.push(P.read_shift(8, "f"));
          break;
        case 1:
          O = A(W[0].c, P.read_shift(2), true), le = A(W[0].r, P.read_shift(2), false), z.push(O + le);
          break;
        case 2:
          {
            var nr = A(W[0].c, P.read_shift(2), true), rr = A(W[0].r, P.read_shift(2), false);
            O = A(W[0].c, P.read_shift(2), true), le = A(W[0].r, P.read_shift(2), false), z.push(nr + rr + ":" + O + le);
          }
          break;
        case 3:
          if (P.l < P.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          z.push("(" + z.pop() + ")");
          break;
        case 5:
          z.push(P.read_shift(2));
          break;
        case 6:
          {
            for (var or = ""; Se = P[P.l++]; ) or += String.fromCharCode(Se);
            z.push('"' + or.replace(/"/g, '""') + '"');
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
          We = z.pop(), Ce = z.pop(), z.push(["AND", "OR"][Se - 20] + "(" + Ce + "," + We + ")");
          break;
        default:
          if (Se < 32 && G[Se]) We = z.pop(), Ce = z.pop(), z.push(Ce + G[Se] + We);
          else if (M[Se]) {
            if (X = M[Se][1], X == 69 && (X = P[P.l++]), X > z.length) {
              console.error("WK1 bad formula parse 0x" + Se.toString(16) + ":|" + z.join("|") + "|");
              return;
            }
            var Ir = z.slice(-X);
            z.length -= X, z.push(M[Se][0] + "(" + Ir.join(",") + ")");
          } else return Se <= 7 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 24 ? console.error("WK1 unsupported op " + Se.toString(16)) : Se <= 30 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 115 ? console.error("WK1 unsupported function opcode " + Se.toString(16)) : console.error("WK1 unrecognized opcode " + Se.toString(16));
      }
    }
    z.length == 1 ? W[1].f = "" + z[0] : console.error("WK1 bad formula parse |" + z.join("|") + "|");
  }
  function U(P) {
    var W = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return W[0].r = P.read_shift(2), W[3] = P[P.l++], W[0].c = P[P.l++], W;
  }
  function D(P, W) {
    var z = U(P);
    return z[1].t = "s", z[1].v = P.read_shift(W - 4, "cstr"), z;
  }
  function H(P, W, z, X) {
    var le = oe(6 + X.length);
    le.write_shift(2, P), le.write_shift(1, z), le.write_shift(1, W), le.write_shift(1, 39);
    for (var O = 0; O < X.length; ++O) {
      var Ce = X.charCodeAt(O);
      le.write_shift(1, Ce >= 128 ? 95 : Ce);
    }
    return le.write_shift(1, 0), le;
  }
  function K(P, W) {
    var z = U(P);
    z[1].v = P.read_shift(2);
    var X = z[1].v >> 1;
    if (z[1].v & 1) switch (X & 7) {
      case 0:
        X = (X >> 3) * 5e3;
        break;
      case 1:
        X = (X >> 3) * 500;
        break;
      case 2:
        X = (X >> 3) / 20;
        break;
      case 3:
        X = (X >> 3) / 200;
        break;
      case 4:
        X = (X >> 3) / 2e3;
        break;
      case 5:
        X = (X >> 3) / 2e4;
        break;
      case 6:
        X = (X >> 3) / 16;
        break;
      case 7:
        X = (X >> 3) / 64;
        break;
    }
    return z[1].v = X, z;
  }
  function ee(P, W) {
    var z = U(P), X = P.read_shift(4), le = P.read_shift(4), O = P.read_shift(2);
    if (O == 65535) return X === 0 && le === 3221225472 ? (z[1].t = "e", z[1].v = 15) : X === 0 && le === 3489660928 ? (z[1].t = "e", z[1].v = 42) : z[1].v = 0, z;
    var Ce = O & 32768;
    return O = (O & 32767) - 16446, z[1].v = (1 - Ce * 2) * (le * Math.pow(2, O + 32) + X * Math.pow(2, O)), z;
  }
  function de(P, W, z, X) {
    var le = oe(14);
    if (le.write_shift(2, P), le.write_shift(1, z), le.write_shift(1, W), X == 0) return le.write_shift(4, 0), le.write_shift(4, 0), le.write_shift(2, 65535), le;
    var O = 0, Ce = 0, We = 0, Se = 0;
    return X < 0 && (O = 1, X = -X), Ce = Math.log2(X) | 0, X /= Math.pow(2, Ce - 31), Se = X >>> 0, (Se & 2147483648) == 0 && (X /= 2, ++Ce, Se = X >>> 0), X -= Se, Se |= 2147483648, Se >>>= 0, X *= Math.pow(2, 32), We = X >>> 0, le.write_shift(4, We), le.write_shift(4, Se), Ce += 16383 + (O ? 32768 : 0), le.write_shift(2, Ce), le;
  }
  function Pe(P, W) {
    var z = ee(P);
    return P.l += W - 14, z;
  }
  function me(P, W) {
    var z = U(P), X = P.read_shift(4);
    return z[1].v = X >> 6, z;
  }
  function ze(P, W) {
    var z = U(P), X = P.read_shift(8, "f");
    return z[1].v = X, z;
  }
  function ke(P, W) {
    var z = ze(P);
    return P.l += W - 12, z;
  }
  function Be(P, W) {
    return P[P.l + W - 1] == 0 ? P.read_shift(W, "cstr") : "";
  }
  function Qe(P, W) {
    var z = P[P.l++];
    z > W - 1 && (z = W - 1);
    for (var X = ""; X.length < z; ) X += String.fromCharCode(P[P.l++]);
    return X;
  }
  function he(P, W, z) {
    if (!(!z.qpro || W < 21)) {
      var X = P.read_shift(1);
      P.l += 17, P.l += 1, P.l += 2;
      var le = P.read_shift(W - 21, "cstr");
      return [X, le];
    }
  }
  function fr(P, W) {
    for (var z = {}, X = P.l + W; P.l < X; ) {
      var le = P.read_shift(2);
      if (le == 14e3) {
        for (z[le] = [0, ""], z[le][0] = P.read_shift(2); P[P.l]; ) z[le][1] += String.fromCharCode(P[P.l]), P.l++;
        P.l++;
      }
    }
    return z;
  }
  function Me(P, W) {
    var z = oe(5 + P.length);
    z.write_shift(2, 14e3), z.write_shift(2, W);
    for (var X = 0; X < P.length; ++X) {
      var le = P.charCodeAt(X);
      z[z.l++] = le > 127 ? 95 : le;
    }
    return z[z.l++] = 0, z;
  }
  var Te = { 0: { n: "BOF", f: Zr }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: o }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: y }, 14: { n: "NUMBER", f: g }, 15: { n: "LABEL", f: d }, 16: { n: "FORMULA", f: E }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: _ }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: Be }, 222: { n: "SHEETNAMELP", f: Qe }, 255: { n: "BOF", f: Zr }, 21506: { n: "WKSNF", f: Zr }, 65535: { n: "" } }, ye = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: D }, 23: { n: "NUMBER17", f: ee }, 24: { n: "NUMBER18", f: K }, 25: { n: "FORMULA19", f: Pe }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: fr }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: me }, 38: { n: "??" }, 39: { n: "NUMBER27", f: ze }, 40: { n: "FORMULA28", f: ke }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: Be }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: he }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }, je = { 5: "dd-mmm-yy", 6: "dd-mmm", 7: "mmm-yy", 8: "mm/dd/yy", 10: "hh:mm:ss AM/PM", 11: "hh:mm AM/PM", 14: "dd-mmm-yyyy", 15: "mmm-yyyy", 34: "0.00", 50: "0.00;[Red]0.00", 66: "0.00;(0.00)", 82: "0.00;[Red](0.00)", 162: '"$"#,##0.00;\\("$"#,##0.00\\)', 288: "0%", 304: "0E+00", 320: "# ?/?" };
  function Ge(P) {
    var W = P.read_shift(2), z = P.read_shift(1);
    if (z != 0) throw "unsupported QPW string type " + z.toString(16);
    return P.read_shift(W, "sbcs-cont");
  }
  function Ze(P, W) {
    lt(P, 0);
    var z = W || {}, X = {};
    z.dense && (X["!data"] = []);
    var le = [], O = "", Ce = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, We = 0, Se = 0, nr = 0, rr = 0, or = { SheetNames: [], Sheets: {} }, Ir = [];
    e: for (; P.l < P.length; ) {
      var Er = P.read_shift(2), Kr = P.read_shift(2), $e = P.slice(P.l, P.l + Kr);
      switch (lt($e, 0), Er) {
        case 1:
          if ($e.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var Tr = $e.read_shift(4), Oe = ($e.length - $e.l) / Tr | 0, Jr = 0; Jr < Tr; ++Jr) {
            var qr = $e.l + Oe, Ur = {};
            $e.l += 2, Ur.numFmtId = $e.read_shift(2), je[Ur.numFmtId] && (Ur.z = je[Ur.numFmtId]), $e.l = qr, Ir.push(Ur);
          }
          break;
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for ($e.l += 12; $e.l < $e.length; ) We = $e.read_shift(2), Se = $e.read_shift(1), le.push($e.read_shift(We, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var yt = $e.read_shift(2);
            X = {}, z.dense && (X["!data"] = []), Ce.s.c = $e.read_shift(2), Ce.e.c = $e.read_shift(2), Ce.s.r = $e.read_shift(4), Ce.e.r = $e.read_shift(4), $e.l += 4, $e.l + 2 < $e.length && (We = $e.read_shift(2), Se = $e.read_shift(1), O = We == 0 ? "" : $e.read_shift(We, "cstr")), O || (O = gr(yt));
          }
          break;
        case 1538:
          {
            if (Ce.s.c > 255 || Ce.s.r > 999999) break;
            Ce.e.c < Ce.s.c && (Ce.e.c = Ce.s.c), Ce.e.r < Ce.s.r && (Ce.e.r = Ce.s.r), X["!ref"] = xr(Ce), hs(or, X, O);
          }
          break;
        case 2561:
          nr = $e.read_shift(2), Ce.e.c < nr && (Ce.e.c = nr), Ce.s.c > nr && (Ce.s.c = nr), rr = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), rr = $e.read_shift(4), Ce.e.r < rr && (Ce.e.r = rr);
          break;
        case 3073:
          {
            rr = $e.read_shift(4), We = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), Ce.e.r < rr + We - 1 && (Ce.e.r = rr + We - 1);
            for (var xt = gr(nr); $e.l < $e.length; ) {
              var Ke = { t: "z" }, kr = $e.read_shift(1), jr = -1;
              kr & 128 && (jr = $e.read_shift(2));
              var zr = kr & 64 ? $e.read_shift(2) - 1 : 0;
              switch (kr & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  Ke = { t: "n", v: $e.read_shift(2) };
                  break;
                case 3:
                  Ke = { t: "n", v: $e.read_shift(2, "i") };
                  break;
                case 4:
                  Ke = { t: "n", v: p0($e) };
                  break;
                case 5:
                  Ke = { t: "n", v: $e.read_shift(8, "f") };
                  break;
                case 7:
                  Ke = { t: "s", v: le[Se = $e.read_shift(4) - 1] };
                  break;
                case 8:
                  Ke = { t: "n", v: $e.read_shift(8, "f") }, $e.l += 2, $e.l += 4, isNaN(Ke.v) && (Ke = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (kr & 31);
              }
              jr != -1 && (Ir[jr - 1] || {}).z && (Ke.z = Ir[jr - 1].z);
              var pt = 0;
              if (kr & 32) switch (kr & 31) {
                case 2:
                  pt = $e.read_shift(2);
                  break;
                case 3:
                  pt = $e.read_shift(2, "i");
                  break;
                case 7:
                  pt = $e.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (kr & 31);
              }
              if (!(!z.sheetStubs && Ke.t == "z")) {
                var Je = Vr(Ke);
                Ke.t == "n" && Ke.z && ua(Ke.z) && z.cellDates && (Je.v = Xa(Ke.v), Je.t = typeof Je.v == "number" ? "n" : "d"), X["!data"] != null ? (X["!data"][rr] || (X["!data"][rr] = []), X["!data"][rr][nr] = Je) : X[xt + Fr(rr)] = Je;
              }
              for (++rr, --We; zr-- > 0 && We >= 0; ) {
                if (kr & 32) switch (kr & 31) {
                  case 2:
                    Ke = { t: "n", v: Ke.v + pt & 65535 };
                    break;
                  case 3:
                    Ke = { t: "n", v: Ke.v + pt & 65535 }, Ke.v > 32767 && (Ke.v -= 65536);
                    break;
                  case 7:
                    Ke = { t: "s", v: le[Se = Se + pt >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (kr & 31);
                }
                else switch (kr & 31) {
                  case 1:
                    Ke = { t: "z" };
                    break;
                  case 2:
                    Ke = { t: "n", v: $e.read_shift(2) };
                    break;
                  case 7:
                    Ke = { t: "s", v: le[Se = $e.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (kr & 31);
                }
                !z.sheetStubs && Ke.t == "z" || (X["!data"] != null ? (X["!data"][rr] || (X["!data"][rr] = []), X["!data"][rr][nr] = Ke) : X[xt + Fr(rr)] = Ke), ++rr, --We;
              }
            }
          }
          break;
        case 3074:
          {
            nr = $e.read_shift(2), rr = $e.read_shift(4);
            var Ea = Ge($e);
            X["!data"] != null ? (X["!data"][rr] || (X["!data"][rr] = []), X["!data"][rr][nr] = { t: "s", v: Ea }) : X[gr(nr) + Fr(rr)] = { t: "s", v: Ea };
          }
          break;
      }
      P.l += Kr;
    }
    return or;
  }
  return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
})();
function jv(e) {
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
        r.cp = Vf[parseInt(i.val, 10)];
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
var Gv = /* @__PURE__ */ (function() {
  function e(a) {
    var n = gt(a, "t");
    if (!n) return { t: "s", v: "" };
    var i = { t: "s", v: Ar(n[1]) }, s = gt(a, "rPr");
    return s && (i.s = jv(s[1])), i;
  }
  var r = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(n) {
    return n.replace(r, "").split(t).map(e).filter(function(i) {
      return i.v;
    });
  };
})(), zv = /* @__PURE__ */ (function() {
  var r = /(\r\n|\n)/g;
  function t(n, i, s) {
    var f = [];
    n.u && f.push("text-decoration: underline;"), n.uval && f.push("text-underline-style:" + n.uval + ";"), n.sz && f.push("font-size:" + n.sz + "pt;"), n.outline && f.push("text-effect: outline;"), n.shadow && f.push("text-shadow: auto;"), i.push('<span style="' + f.join("") + '">'), n.b && (i.push("<b>"), s.push("</b>")), n.i && (i.push("<i>"), s.push("</i>")), n.strike && (i.push("<s>"), s.push("</s>"));
    var o = n.valign || "";
    return o == "superscript" || o == "super" ? o = "sup" : o == "subscript" && (o = "sub"), o != "" && (i.push("<" + o + ">"), s.push("</" + o + ">")), s.push("</span>"), n;
  }
  function a(n) {
    var i = [[], n.v, []];
    return n.v ? (n.s && t(n.s, i[0], i[2]), i[0].join("") + i[1].replace(r, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(a).join("");
  };
})(), $v = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, qv = /<(?:\w+:)?r\b[^<>]*>/;
function uo(e, r) {
  var t = r ? r.cellHTML : true, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Ar(Br(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true), a.r = Br(e), t && (a.h = Ii(a.t))) : e.match(qv) && (a.r = Br(e), a.t = Ar(Br((Dd(e, "rPh").match($v) || []).join("").replace(Et, "")), true), t && (a.h = zv(Gv(a.r)))), a) : { t: "" };
}
var Yv = /<(?:\w+:)?(?:si|sstItem)>/g, Zv = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Jv(e, r) {
  var t = [], a = "";
  if (!e) return t;
  var n = gt(e, "sst");
  if (n) {
    a = n[1].replace(Yv, "").split(Zv);
    for (var i = 0; i != a.length; ++i) {
      var s = uo(a[i].trim(), r);
      s != null && (t[t.length] = s);
    }
    n = Ye(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
  }
  return t;
}
var Qv = /^\s|\s$|[\t\n\r]/;
function em(e, r) {
  if (!r.bookSST) return "";
  var t = [at];
  t[t.length] = Ae("sst", null, { xmlns: Bn[0], count: e.Count, uniqueCount: e.Unique });
  for (var a = 0; a != e.length; ++a) if (e[a] != null) {
    var n = e[a], i = "<si>";
    n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), typeof n.t != "string" && (n.t = String(n.t)), n.t.match(Qv) && (i += ' xml:space="preserve"'), i += ">" + vr(n.t) + "</t>"), i += "</si>", t[t.length] = i;
  }
  return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function rm(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function tm(e, r) {
  var t = [], a = false;
  return $a(e, function(i, s, f) {
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
function am(e, r) {
  return r || (r = oe(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var nm = ox;
function im(e) {
  var r = Lt();
  ve(r, 159, am(e));
  for (var t = 0; t < e.length; ++t) ve(r, 19, nm(e[t]));
  return ve(r, 160), r.end();
}
function Bu(e) {
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function ja(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function sm(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = ja(e, 4), r.U = ja(e, 4), r.W = ja(e, 4), r;
}
function fm(e) {
  for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return a;
}
function om(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(fm(e));
  return r;
}
function cm(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function lm(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = ja(e, 4), r.U = ja(e, 4), r.W = ja(e, 4), r;
}
function um(e) {
  var r = lm(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function Lu(e, r) {
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
function Mu(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function hm(e) {
  var r = ja(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, dm(e)];
    case 3:
      return [r.Minor, xm()];
    case 4:
      return [r.Minor, pm(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function dm(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4), a = Lu(e, t), n = Mu(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function xm() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function pm(e) {
  var r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"), a = {};
  return t.replace(Et, function(i) {
    var s = Ye(i);
    switch (ha(s[0])) {
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
function vm(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = ja(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = Lu(e, n), r -= n, t.EncryptionVerifier = Mu(e, r), t;
}
function mm(e) {
  var r = {}, t = r.EncryptionVersionInfo = ja(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function ho(e) {
  var r = 0, t, a = Bu(e), n = a.length + 1, i, s, f, o, l;
  for (t = cn(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i) s = t[i], f = (r & 16384) === 0 ? 0 : 1, o = r << 1 & 32767, l = f | o, r = l ^ s;
  return r ^ 52811;
}
var Uu = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], o = 104, l = s.length - 1; l >= 0; --l) for (var h = s[l], v = 0; v != 7; ++v) h & 64 && (f ^= t[o]), h *= 2, --o;
    return f;
  };
  return function(s) {
    for (var f = Bu(s), o = i(f), l = f.length, h = cn(16), v = 0; v != 16; ++v) h[v] = 0;
    var d, x, _;
    for ((l & 1) === 1 && (d = o >> 8, h[l] = n(e[0], d), --l, d = o & 255, x = f[f.length - 1], h[l] = n(x, d)); l > 0; ) --l, d = o >> 8, h[l] = n(f[l], d), --l, d = o & 255, h[l] = n(f[l], d);
    for (l = 15, _ = 15 - f.length; _ > 0; ) d = o >> 8, h[l] = n(e[_], d), --l, --_, d = o & 255, h[l] = n(f[l], d), --l, --_;
    return h;
  };
})(), gm = function(e, r, t, a, n) {
  n || (n = r), a || (a = Uu(e));
  var i, s;
  for (i = 0; i != r.length; ++i) s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, _m = function(e) {
  var r = 0, t = Uu(e);
  return function(a) {
    var n = gm("", a, r, t);
    return r = n[1], n[0];
  };
};
function wm(e, r, t, a) {
  var n = { key: Zr(e), verificationBytes: Zr(e) };
  return t.password && (n.verifier = ho(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = _m(t.password)), n;
}
function ym(e, r, t) {
  var a = t || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = mm(e) : a.Data = vm(e, r), a;
}
function km(e, r, t) {
  var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? ym(e, r - 2, a) : wm(e, t.biff >= 8 ? r : r - 2, t, a), a;
}
function Em(e, r) {
  switch (r.type) {
    case "base64":
      return Us(ra(e), r);
    case "binary":
      return Us(e, r);
    case "buffer":
      return Us(mr && Buffer.isBuffer(e) ? e.toString("binary") : Na(e), r);
    case "array":
      return Us(Dn(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function Us(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = qf(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(o, l) {
    n && (f = a["!data"][l] = []);
    for (var h = /\\[\w\-]+\b/g, v = 0, d, x = -1, _ = []; (d = h.exec(o)) != null; ) {
      var y = o.slice(v, h.lastIndex - d[0].length);
      switch (y.charCodeAt(0) == 32 && (y = y.slice(1)), y.length && _.push(y), d[0]) {
        case "\\cell":
          if (++x, _.length) {
            var m = { v: _.join(""), t: "s" };
            m.v == "TRUE" || m.v == "FALSE" ? (m.v = m.v == "TRUE", m.t = "b") : isNaN(ea(m.v)) ? _t[m.v] != null && (m.t = "e", m.w = m.v, m.v = _t[m.v]) : (m.t = "n", t.cellText !== false && (m.w = m.v), m.v = ea(m.v)), n ? f[x] = m : a[yr({ r: l, c: x })] = m;
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
  }), a["!ref"] = xr(s), a;
}
function Tm(e, r) {
  var t = pn(Em(e, r), r);
  return t.bookType = "rtf", t;
}
function Sm(e, r) {
  var t = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) return t[0] + "}";
  for (var a = Dr(e["!ref"]), n, i = e["!data"] != null, s = [], f = a.s.r; f <= a.e.r; ++f) {
    t.push("\\trowd\\trautofit1");
    for (var o = a.s.c; o <= a.e.c; ++o) t.push("\\cellx" + (o + 1));
    for (t.push("\\pard\\intbl"), i && (s = e["!data"][f] || []), o = a.s.c; o <= a.e.c; ++o) {
      var l = yr({ r: f, c: o });
      if (n = i ? s[o] : e[l], !n || n.v == null && (!n.f || n.F)) {
        t.push(" \\cell");
        continue;
      }
      t.push(" " + (n.w || (Ga(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function bm(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function qi(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function Fm(e) {
  var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), i = Math.min(r, t, a), s = n - i;
  if (s === 0) return [0, 0, r];
  var f = 0, o = 0, l = n + i;
  switch (o = s / (l > 1 ? 2 - l : l), n) {
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
  return [f / 6, o, l / 2];
}
function Am(e) {
  var r = e[0], t = e[1], a = e[2], n = t * 2 * (a < 0.5 ? a : 1 - a), i = a - n / 2, s = [i, i, i], f = 6 * r, o;
  if (t !== 0) switch (f | 0) {
    case 0:
    case 6:
      o = n * f, s[0] += n, s[1] += o;
      break;
    case 1:
      o = n * (2 - f), s[0] += o, s[1] += n;
      break;
    case 2:
      o = n * (f - 2), s[1] += n, s[2] += o;
      break;
    case 3:
      o = n * (4 - f), s[1] += o, s[2] += n;
      break;
    case 4:
      o = n * (f - 4), s[2] += n, s[0] += o;
      break;
    case 5:
      o = n * (6 - f), s[2] += o, s[0] += n;
      break;
  }
  for (var l = 0; l != 3; ++l) s[l] = Math.round(s[l] * 255);
  return s;
}
function s0(e, r) {
  if (r === 0) return e;
  var t = Fm(bm(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), qi(Am(t));
}
var Wu = 6, Cm = 15, Im = 1, Rt = Wu;
function Yi(e) {
  return Math.floor((e + Math.round(128 / Rt) / 256) * Rt);
}
function Zi(e) {
  return Math.floor((e - 5) / Rt * 100 + 0.5) / 100;
}
function f0(e) {
  return Math.round((e * Rt + 5) / Rt * 256) / 256;
}
function cf(e) {
  return f0(Zi(Yi(e)));
}
function xo(e) {
  var r = Math.abs(e - cf(e)), t = Rt;
  if (r > 5e-3) for (Rt = Im; Rt < Cm; ++Rt) Math.abs(e - cf(e)) <= r && (r = Math.abs(e - cf(e)), t = Rt);
  Rt = t;
}
function ln(e) {
  e.width ? (e.wpx = Yi(e.width), e.wch = Zi(e.wpx), e.MDW = Rt) : e.wpx ? (e.wch = Zi(e.wpx), e.width = f0(e.wch), e.MDW = Rt) : typeof e.wch == "number" && (e.width = f0(e.wch), e.wpx = Yi(e.width), e.MDW = Rt), e.customWidth && delete e.customWidth;
}
var Dm = 96, Hu = Dm;
function Ji(e) {
  return e * 96 / Hu;
}
function oi(e) {
  return e * Hu / 96;
}
var Om = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function Nm(e, r, t, a) {
  r.Borders = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (ha(f[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = {}, f.diagonalUp && (n.diagonalUp = Pr(f.diagonalUp)), f.diagonalDown && (n.diagonalDown = Pr(f.diagonalDown)), r.Borders.push(n);
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
function Rm(e, r, t, a) {
  r.Fills = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (ha(f[0])) {
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
function Pm(e, r, t, a) {
  r.Fonts = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (ha(f[0])) {
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
        f.val && (n.name = Br(f.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = f.val ? Pr(f.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "</b>":
      case "</b":
        break;
      case "<i":
        n.italic = f.val ? Pr(f.val) : 1;
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
        n.strike = f.val ? Pr(f.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "</strike>":
      case "</strike":
        break;
      case "<outline":
        n.outline = f.val ? Pr(f.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "</outline>":
      case "</outline":
        break;
      case "<shadow":
        n.shadow = f.val ? Pr(f.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "</shadow>":
      case "</shadow":
        break;
      case "<condense":
        n.condense = f.val ? Pr(f.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "</condense>":
      case "</condense":
        break;
      case "<extend":
        n.extend = f.val ? Pr(f.val) : 1;
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
        f.codepage = Vf[parseInt(f.val, 10)];
        break;
      case "<charset/>":
      case "</charset>":
      case "</charset":
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = Pr(f.auto)), f.rgb) n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var o = Sn[n.color.index];
          n.color.index == 81 && (o = Sn[1]), o || (o = Sn[1]), n.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
        } else f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && t.themeElements && t.themeElements.clrScheme && (n.color.rgb = s0(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
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
function Bm(e, r, t) {
  r.NumberFmt = [];
  for (var a = Gr(ir), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = ir[a[n]];
  var i = e.match(Et);
  if (i) for (n = 0; n < i.length; ++n) {
    var s = Ye(i[n]);
    switch (ha(s[0])) {
      case "<numFmts":
      case "</numFmts>":
      case "<numFmts/>":
      case "<numFmts>":
        break;
      case "<numFmt":
        {
          var f = Ar(Br(s.formatCode)), o = parseInt(s.numFmtId, 10);
          if (r.NumberFmt[o] = f, o > 0) {
            if (o > 392) {
              for (o = 392; o > 60 && r.NumberFmt[o] != null; --o) ;
              r.NumberFmt[o] = f;
            }
            on(f, o);
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
function Lm(e) {
  var r = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(t) {
    for (var a = t[0]; a <= t[1]; ++a) e[a] != null && (r[r.length] = Ae("numFmt", null, { numFmtId: a, formatCode: vr(e[a]) }));
  }), r.length === 1 ? "" : (r[r.length] = "</numFmts>", r[0] = Ae("numFmts", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Ws = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Hs = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Mm(e, r, t) {
  r.CellXf = [];
  var a, n = false;
  (e.match(Et) || []).forEach(function(i) {
    var s = Ye(i), f = 0;
    switch (ha(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
      case "<xf>":
        for (a = s, delete a[0], f = 0; f < Ws.length; ++f) a[Ws[f]] && (a[Ws[f]] = parseInt(a[Ws[f]], 10));
        for (f = 0; f < Hs.length; ++f) a[Hs[f]] && (a[Hs[f]] = Pr(a[Hs[f]]));
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
        var o = {};
        s.vertical && (o.vertical = s.vertical), s.horizontal && (o.horizontal = s.horizontal), s.textRotation != null && (o.textRotation = s.textRotation), s.indent && (o.indent = s.indent), s.wrapText && (o.wrapText = Pr(s.wrapText)), a.alignment = o;
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
function Um(e) {
  var r = [];
  return r[r.length] = Ae("cellXfs", null), e.forEach(function(t) {
    r[r.length] = Ae("xf", null, t);
  }), r[r.length] = "</cellXfs>", r.length === 2 ? "" : (r[0] = Ae("cellXfs", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Wm = /* @__PURE__ */ (function() {
  return function(t, a, n) {
    var i = {};
    if (!t) return i;
    t = $f(is(t, "<!--", "-->"));
    var s;
    return (s = gt(t, "numFmts")) && Bm(s[0], i, n), (s = gt(t, "fonts")) && Pm(s[0], i, a, n), (s = gt(t, "fills")) && Rm(s[0], i, a, n), (s = gt(t, "borders")) && Nm(s[0], i, a, n), (s = gt(t, "cellXfs")) && Mm(s[0], i, n), i;
  };
})();
function Hm(e, r) {
  var t = [at, Ae("styleSheet", null, { xmlns: Bn[0], "xmlns:vt": ut.vt })], a;
  return e.SSF && (a = Lm(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Um(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Vm(e, r) {
  var t = e.read_shift(2), a = Mt(e);
  return [t, a];
}
function Xm(e, r, t) {
  t || (t = oe(6 + 4 * r.length)), t.write_shift(2, e), ht(r, t);
  var a = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), a;
}
function Km(e, r, t) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = px(e);
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
  var o = e.read_shift(1);
  switch (o > 0 && (a.charset = o), e.l++, a.color = xx(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Mt(e), a;
}
function jm(e, r) {
  r || (r = oe(153)), r.write_shift(2, e.sz * 20), vx(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), a0(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), ht(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var Gm = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"], lf, zm = Ut;
function Yc(e, r) {
  r || (r = oe(84)), lf || (lf = l0(Gm));
  var t = lf[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var a = 0;
  if (t != 40) for (a0({ auto: 1 }, r), a0({ auto: 1 }, r); a < 12; ++a) r.write_shift(4, 0);
  else {
    for (; a < 4; ++a) r.write_shift(4, 0);
    for (; a < 12; ++a) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function $m(e, r) {
  var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = t, { ixfe: a, numFmtId: n };
}
function Vu(e, r, t) {
  t || (t = oe(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function Ti(e, r) {
  return r || (r = oe(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var qm = Ut;
function Ym(e, r) {
  return r || (r = oe(51)), r.write_shift(1, 0), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Zm(e, r) {
  return r || (r = oe(52)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), zi(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Jm(e, r, t) {
  var a = oe(2052);
  return a.write_shift(4, e), zi(r, a), zi(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function Qm(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in ir) a.NumberFmt[n] = ir[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = false;
  return $a(e, function(o, l, h) {
    switch (h) {
      case 44:
        a.NumberFmt[o[0]] = o[1], on(o[1], o[0]);
        break;
      case 43:
        a.Fonts.push(o), o.color.theme != null && r && r.themeElements && r.themeElements.clrScheme && (o.color.rgb = s0(r.themeElements.clrScheme[o.color.theme].rgb, o.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && a.CellXf.push(o);
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
        if (l.T > 0) i.push(h);
        else if (l.T < 0) i.pop();
        else if (!s || t.WTF && i[i.length - 1] != 37) throw new Error("Unexpected record 0x" + h.toString(16));
    }
  }), a;
}
function eg(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (ve(e, 615, wa(t)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ve(e, 44, Xm(n, r[n]));
    }), ve(e, 616));
  }
}
function rg(e) {
  var r = 1;
  ve(e, 611, wa(r)), ve(e, 43, jm({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), ve(e, 612);
}
function tg(e) {
  var r = 2;
  ve(e, 603, wa(r)), ve(e, 45, Yc({ patternType: "none" })), ve(e, 45, Yc({ patternType: "gray125" })), ve(e, 604);
}
function ag(e) {
  var r = 1;
  ve(e, 613, wa(r)), ve(e, 46, Ym()), ve(e, 614);
}
function ng(e) {
  var r = 1;
  ve(e, 626, wa(r)), ve(e, 47, Vu({ numFmtId: 0 }, 65535)), ve(e, 627);
}
function ig(e, r) {
  ve(e, 617, wa(r.length)), r.forEach(function(t) {
    ve(e, 47, Vu(t, 0));
  }), ve(e, 618);
}
function sg(e) {
  var r = 1;
  ve(e, 619, wa(r)), ve(e, 48, Zm({ xfId: 0, name: "Normal" })), ve(e, 620);
}
function fg(e) {
  var r = 0;
  ve(e, 505, wa(r)), ve(e, 506);
}
function og(e) {
  var r = 0;
  ve(e, 508, Jm(r, "TableStyleMedium9", "PivotStyleMedium4")), ve(e, 509);
}
function cg(e, r) {
  var t = Lt();
  return ve(t, 278), eg(t, e.SSF), rg(t), tg(t), ag(t), ng(t), ig(t, r.cellXfs), sg(t), fg(t), og(t), ve(t, 279), t.end();
}
var lg = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
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
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[lg.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (t && t.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function hg(e, r, t) {
  r.themeElements = {};
  var a;
  if (!(a = Tn(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
  if (ug(a, r, t), !(a = Tn(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = Tn(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Xu(e, r) {
  (!e || e.length === 0) && (e = po());
  var t, a = {};
  if (!(t = Tn(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return hg(t[0], a, r), a.raw = e, a;
}
function po(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [at];
  return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", t[t.length] = "</a:theme>", t.join("");
}
function dg(e, r, t) {
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
      s = Ml(i, { type: "array" });
    } catch {
      return;
    }
    var f = Kt(s, "theme/theme/theme1.xml", true);
    if (f) return Xu(f, t);
  }
}
function xg(e) {
  return e.read_shift(4);
}
function pg(e) {
  var r = {};
  switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = vg(e, 4);
      break;
    case 2:
      r.xclrValue = Tu(e);
      break;
    case 3:
      r.xclrValue = xg(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, r;
}
function vg(e, r) {
  return Ut(e, r);
}
function mg(e, r) {
  return Ut(e, r);
}
function gg(e) {
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
      a[1] = pg(e);
      break;
    case 6:
      a[1] = mg(e, t);
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
function _g(e, r) {
  var t = e.l + r;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; ) i.push(gg(e, t - e.l));
  return { ixfe: a, ext: i };
}
function wg(e, r) {
  r.forEach(function(t) {
    t[0];
  });
}
function yg(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Mt(e) };
}
function kg(e) {
  var r = oe(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), ht(e.name, r), r.slice(0, r.l);
}
function Eg(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function Tg(e) {
  var r = oe(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Sg(e, r) {
  var t = oe(8 + 2 * r.length);
  return t.write_shift(4, e), ht(r, t), t.slice(0, t.l);
}
function bg(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Fg(e, r) {
  var t = oe(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Ag(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] }, n = t || {}, i = [], s = false, f = 2;
  return $a(e, function(o, l, h) {
    switch (h) {
      case 335:
        a.Types.push({ name: o.name });
        break;
      case 51:
        o.forEach(function(v) {
          f == 1 ? a.Cell.push({ type: a.Types[v[0] - 1].name, index: v[1] }) : f == 0 && a.Value.push({ type: a.Types[v[0] - 1].name, index: v[1] });
        });
        break;
      case 337:
        f = o ? 1 : 0;
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
        if (!l.T) {
          if (!s || n.WTF && i[i.length - 1] != 35) throw new Error("Unexpected record 0x" + h.toString(16));
        }
    }
  }), a;
}
function Cg() {
  var e = Lt();
  return ve(e, 332), ve(e, 334, wa(1)), ve(e, 335, kg({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), ve(e, 336), ve(e, 339, Sg(1, "XLDAPR")), ve(e, 52), ve(e, 35, wa(514)), ve(e, 4096, wa(0)), ve(e, 4097, ca(1)), ve(e, 36), ve(e, 53), ve(e, 340), ve(e, 337, Fg(1)), ve(e, 51, Tg([[1, 0]])), ve(e, 338), ve(e, 333), e.end();
}
function Ig(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = false, i = 2, s;
  return e.replace(Et, function(f) {
    var o = Ye(f);
    switch (ha(o[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: o.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var l = 0; l < a.Types.length; ++l) a.Types[l].name == o.name && (s = a.Types[l]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? a.Cell.push({ type: a.Types[o.t - 1].name, index: +o.v }) : i == 0 && a.Value.push({ type: a.Types[o.t - 1].name, index: +o.v });
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
        s.offsets || (s.offsets = []), s.offsets.push(+o.i);
        break;
      default:
        if (!n && (t == null ? void 0 : t.WTF)) throw new Error("unrecognized " + o[0] + " in metadata");
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
function Og(e) {
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
function Ng(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = yr(t);
  var a = e.read_shift(1);
  return a & 2 && (r.l = "1"), a & 8 && (r.a = "1"), r;
}
function Rg(e, r, t) {
  var a = [];
  return $a(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function Pg(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = false;
  $a(e, function(f, o, l) {
    switch (l) {
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
        if (!o.T) {
          if (!i || n.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, n);
}
function Bg(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function Lg(e, r, t) {
  var a = 0;
  (Pl(e, "shape") || []).forEach(function(n) {
    var i = "", s = true, f = -1, o = -1, l = -1;
    if (n.replace(Et, function(v, d) {
      var x = Ye(v);
      switch (ha(x[0])) {
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
          o = +n.slice(f, d).trim();
          break;
        case "<Column":
        case "<Column>":
          f = d + v.length;
          break;
        case "</Column>":
          l = +n.slice(f, d).trim();
          break;
      }
      return "";
    }), i === "Note") {
      var h = as(r, o >= 0 && l >= 0 ? yr({ r: o, c: l }) : t[a].ref);
      h.c && (h.c.hidden = s), ++a;
    }
  });
}
function Ku(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [Ae("xml", null, { "xmlns:v": Jt.v, "xmlns:o": Jt.o, "xmlns:x": Jt.x, "xmlns:mv": Jt.mv }).replace(/\/>/, ">"), Ae("o:shapelayout", Ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(Ae("v:shapetype", [Ae("v:stroke", null, { joinstyle: "miter" }), Ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(o) {
    ++s, i.push(Mg(o, s));
  }), i.push("</xml>"), i.join("");
}
function Mg(e, r, t) {
  var a = Lr(e[0]), n = { color2: "#BEFF82", type: "gradient" };
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? Ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = Ae("v:fill", i, n), f = { on: "t", obscured: "t" };
  return ["<v:shape" + Ki({ id: "_x0000_s" + r, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", s, Ae("v:shadow", null, f), Ae("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", kt("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), kt("x:AutoFill", "False"), kt("x:Row", String(a.r)), kt("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function Zc(e, r, t, a) {
  var n = e["!data"] != null, i;
  r.forEach(function(s) {
    var f = Lr(s.ref);
    if (!(f.r < 0 || f.c < 0)) {
      if (n ? (e["!data"][f.r] || (e["!data"][f.r] = []), i = e["!data"][f.r][f.c]) : i = e[s.ref], !i) {
        i = { t: "z" }, n ? e["!data"][f.r][f.c] = i : e[s.ref] = i;
        var o = Dr(e["!ref"] || "BDWGO1000001:A1");
        o.s.r > f.r && (o.s.r = f.r), o.e.r < f.r && (o.e.r = f.r), o.s.c > f.c && (o.s.c = f.c), o.e.c < f.c && (o.e.c = f.c);
        var l = xr(o);
        e["!ref"] = l;
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
function Ug(e, r) {
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
        var o = Ye(f[0]), l = { author: o.authorId && t[o.authorId] || "sheetjsghost", ref: o.ref, guid: o.guid }, h = Lr(o.ref);
        if (!(r.sheetRows && r.sheetRows <= h.r)) {
          var v = gt(s, "text"), d = !!v && !!v[1] && uo(v[1]) || { r: "", t: "", h: "" };
          l.r = d.r, d.r == "<t></t>" && (d.t = d.h = ""), l.t = (d.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (l.h = d.h), a.push(l);
        }
      }
    }
  }), a;
}
function Wg(e) {
  var r = [at, Ae("comments", null, { xmlns: Bn[0] })], t = [];
  return r.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = vr(n.a);
      t.indexOf(i) == -1 && (t.push(i), r.push("<author>" + i + "</author>")), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), r.push("<author>tc=" + n.ID + "</author>"));
    });
  }), t.length == 0 && (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")), r.push("</authors>"), r.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [], s = 0;
    if (a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), a[1].forEach(function(l) {
      l.a && (n = t.indexOf(vr(l.a))), l.T && ++s, i.push(l.t == null ? "" : vr(l.t));
    }), s === 0) a[1].forEach(function(l) {
      r.push('<comment ref="' + a[0] + '" authorId="' + t.indexOf(vr(l.a)) + '"><text>'), r.push(kt("t", l.t == null ? "" : vr(l.t))), r.push("</text></comment>");
    });
    else {
      a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), r.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>');
      for (var f = `Comment:
    ` + i[0] + `
`, o = 1; o < i.length; ++o) f += `Reply:
    ` + i[o] + `
`;
      r.push(kt("t", vr(f))), r.push("</text></comment>");
    }
  }), r.push("</commentList>"), r.length > 2 && (r[r.length] = "</comments>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Hg(e, r) {
  var t = [], a = false, n = {}, i = 0;
  return e.replace(Et, function(f, o) {
    var l = Ye(f);
    switch (ha(l[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: l.personId, guid: l.id, ref: l.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && t.push(n);
        break;
      case "<text>":
      case "<text":
        i = o + f.length;
        break;
      case "</text>":
        n.t = e.slice(i, o).replace(/\r\n/g, `
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
        if (!a && r.WTF) throw new Error("unrecognized " + l[0] + " in threaded comments");
    }
    return f;
  }), t;
}
function ju(e, r, t) {
  var a = [at, Ae("ThreadedComments", null, { xmlns: ut.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && r.indexOf(s.a) == -1 && r.push(s.a);
      var o = { ref: n[0], id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t.tcid++).slice(-12) + "}" };
      f == 0 ? i = o.id : o.parentId = i, s.ID = o.id, s.a && (o.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r.indexOf(s.a)).slice(-12) + "}"), a.push(Ae("threadedComment", kt("text", s.t || ""), o));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function Vg(e, r) {
  var t = [], a = false;
  return e.replace(Et, function(i) {
    var s = Ye(i);
    switch (ha(s[0])) {
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
function Gu(e) {
  var r = [at, Ae("personList", null, { xmlns: ut.TCMNT, "xmlns:x": Bn[0] }).replace(/[\/]>/, ">")];
  return e.forEach(function(t, a) {
    r.push(Ae("person", null, { displayName: t, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}", userId: t, providerId: "None" }));
  }), r.push("</personList>"), r.join("");
}
function Xg(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = Wn(e);
  return r.rfx = t.s, r.ref = yr(t.s), e.l += 16, r;
}
function Kg(e, r) {
  return r == null && (r = oe(36)), r.write_shift(4, e[1].iauthor), ui(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var jg = Mt;
function Jc(e) {
  return ht(e.slice(0, 54));
}
function Gg(e, r) {
  var t = [], a = [], n = {}, i = false;
  return $a(e, function(f, o, l) {
    switch (l) {
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
        if (!o.T) {
          if (!i || r.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), t;
}
function zg(e) {
  var r = Lt(), t = [];
  return ve(r, 628), ve(r, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), ve(r, 632, Jc(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), ve(r, 632, Jc("tc=" + n.ID))));
    });
  }), ve(r, 631), ve(r, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: Lr(a[0]), e: Lr(a[0]) };
      ve(r, 635, Kg([s, n])), n.t && n.t.length > 0 && ve(r, 637, lx(n)), ve(r, 636), delete n.iauthor;
    });
  }), ve(r, 634), ve(r, 629), r.end();
}
var $g = "application/vnd.ms-office.vbaProject";
function qg(e) {
  var r = sr.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      sr.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), sr.write(r);
}
function Yg(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && sr.utils.cfb_add(e, n, r.FileIndex[a].content);
    }
  });
}
var Zg = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function Jg() {
  return { "!type": "dialog" };
}
function Qg() {
  return { "!type": "dialog" };
}
function e2() {
  return { "!type": "macro" };
}
function r2() {
  return { "!type": "macro" };
}
var An = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = { r: 0, c: 0 };
  function t(a, n, i, s) {
    var f = false, o = false;
    i.length == 0 ? o = true : i.charAt(0) == "[" && (o = true, i = i.slice(1, -1)), s.length == 0 ? f = true : s.charAt(0) == "[" && (f = true, s = s.slice(1, -1));
    var l = i.length > 0 ? parseInt(i, 10) | 0 : 0, h = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? h += r.c : --h, o ? l += r.r : --l, n + (f ? "" : "$") + gr(h) + (o ? "" : "$") + Fr(l);
  }
  return function(n, i) {
    return r = i, n.replace(e, t);
  };
})(), m0 = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  m0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {
}
var g0 = /* @__PURE__ */ (function() {
  return function(r, t) {
    return r.replace(m0, function(a, n, i, s, f, o) {
      var l = ao(s) - (i ? 0 : t.c), h = to(o) - (f ? 0 : t.r), v = f == "$" ? h + 1 : h == 0 ? "" : "[" + h + "]", d = i == "$" ? l + 1 : l == 0 ? "" : "[" + l + "]";
      return n + "R" + v + "C" + d;
    });
  };
})();
function zu(e, r) {
  return e.replace(m0, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : gr(ao(i) + r.c)) + (s == "$" ? s + f : Fr(to(f) + r.r));
  });
}
function Qc(e, r, t) {
  var a = wt(r), n = a.s, i = Lr(t), s = { r: i.r - n.r, c: i.c - n.c };
  return zu(e, s);
}
function t2(e) {
  return e.length != 1;
}
function el(e) {
  return e.replace(/_xlfn\./g, "");
}
function st(e) {
  e.l += 1;
}
function un(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function $u(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return qu(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = un(e), f = un(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function qu(e) {
  var r = un(e), t = un(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function a2(e, r, t) {
  if (t.biff < 8) return qu(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = un(e), s = un(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function Yu(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return n2(e);
  var a = e.read_shift(t && t.biff == 12 ? 4 : 2), n = un(e);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function n2(e) {
  var r = un(e), t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function i2(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return { r, c: t & 255, fQuoted: !!(t & 16384), cRel: t >> 15, rRel: t >> 15 };
}
function s2(e, r, t) {
  var a = t && t.biff ? t.biff : 8;
  if (a >= 2 && a <= 5) return f2(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1) for (; n > 524287; ) n -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function f2(e) {
  var r = e.read_shift(2), t = e.read_shift(1), a = (r & 32768) >> 15, n = (r & 16384) >> 14;
  return r &= 16383, a == 1 && r >= 8192 && (r = r - 16384), n == 1 && t >= 128 && (t = t - 256), { r, c: t, cRel: n, rRel: a };
}
function o2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = $u(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [a, n];
}
function c2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = $u(e, i, t);
  return [a, n, s];
}
function l2(e, r, t) {
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
function h2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = a2(e, r - 1, t);
  return [a, n];
}
function d2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [a];
}
function rl(e) {
  var r = e[e.l + 1] & 1, t = 1;
  return e.l += 4, [r, t];
}
function x2(e, r, t) {
  e.l += 2;
  for (var a = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function p2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function v2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function m2(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [r, e.read_shift(2)];
}
function g2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += t && t.biff == 2 ? 3 : 4, [a];
}
function Zu(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function _2(e) {
  return e.read_shift(2), Zu(e);
}
function w2(e) {
  return e.read_shift(2), Zu(e);
}
function y2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Yu(e, 0, t);
  return [a, n];
}
function k2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = s2(e, 0, t);
  return [a, n];
}
function E2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var i = Yu(e, 0, t);
  return [a, n, i];
}
function T2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [M_[n], eh[n], a];
}
function S2(e, r, t) {
  var a = e[e.l++], n = e.read_shift(1), i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : b2(e);
  return [n, (i[0] === 0 ? eh : L_)[i[1]]];
}
function b2(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function F2(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function A2(e, r, t) {
  if (e.l++, t && t.biff == 12) return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function C2(e) {
  return e.l++, dt[e.read_shift(1)];
}
function I2(e) {
  return e.l++, e.read_shift(2);
}
function D2(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function O2(e) {
  return e.l++, Pt(e);
}
function N2(e, r, t) {
  return e.l++, si(e, r - 1, t);
}
function R2(e, r) {
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
      t[1] = et(e, 1) ? "TRUE" : "FALSE", r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      t[1] = dt[e[e.l]], e.l += r == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Pt(e);
      break;
    case 2:
      t[1] = Hn(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function P2(e, r, t) {
  for (var a = e.read_shift(t.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((t.biff == 12 ? Wn : v0)(e));
  return n;
}
function B2(e, r, t) {
  var a = 0, n = 0;
  t.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i) for (var f = 0; f != n; ++f) s[i][f] = R2(e, t.biff);
  return s;
}
function L2(e, r, t) {
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
function M2(e, r, t) {
  if (t.biff == 5) return U2(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function U2(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function W2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function H2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function V2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [a];
}
function X2(e, r, t) {
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
var K2 = Ut, j2 = Ut, G2 = Ut;
function cs(e, r, t) {
  return e.l += 2, [i2(e)];
}
function vo(e) {
  return e.l += 6, [];
}
var z2 = cs, $2 = vo, q2 = vo, Y2 = cs;
function Ju(e) {
  return e.l += 2, [Zr(e), e.read_shift(2) & 1];
}
var Z2 = cs, J2 = Ju, Q2 = vo, e_ = cs, r_ = cs, t_ = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function a_(e) {
  e.l += 2;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = t_[t >> 2 & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
}
function n_(e) {
  return e.l += 2, [e.read_shift(4)];
}
function i_(e, r, t) {
  return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function s_(e, r, t) {
  return e.l += t.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function f_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function o_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function c_(e) {
  return e.l += 4, [0, 0];
}
var tl = { 1: { n: "PtgExp", f: A2 }, 2: { n: "PtgTbl", f: G2 }, 3: { n: "PtgAdd", f: st }, 4: { n: "PtgSub", f: st }, 5: { n: "PtgMul", f: st }, 6: { n: "PtgDiv", f: st }, 7: { n: "PtgPower", f: st }, 8: { n: "PtgConcat", f: st }, 9: { n: "PtgLt", f: st }, 10: { n: "PtgLe", f: st }, 11: { n: "PtgEq", f: st }, 12: { n: "PtgGe", f: st }, 13: { n: "PtgGt", f: st }, 14: { n: "PtgNe", f: st }, 15: { n: "PtgIsect", f: st }, 16: { n: "PtgUnion", f: st }, 17: { n: "PtgRange", f: st }, 18: { n: "PtgUplus", f: st }, 19: { n: "PtgUminus", f: st }, 20: { n: "PtgPercent", f: st }, 21: { n: "PtgParen", f: st }, 22: { n: "PtgMissArg", f: st }, 23: { n: "PtgStr", f: N2 }, 26: { n: "PtgSheet", f: i_ }, 27: { n: "PtgEndSheet", f: s_ }, 28: { n: "PtgErr", f: C2 }, 29: { n: "PtgBool", f: D2 }, 30: { n: "PtgInt", f: I2 }, 31: { n: "PtgNum", f: O2 }, 32: { n: "PtgArray", f: d2 }, 33: { n: "PtgFunc", f: T2 }, 34: { n: "PtgFuncVar", f: S2 }, 35: { n: "PtgName", f: L2 }, 36: { n: "PtgRef", f: y2 }, 37: { n: "PtgArea", f: o2 }, 38: { n: "PtgMemArea", f: W2 }, 39: { n: "PtgMemErr", f: K2 }, 40: { n: "PtgMemNoMem", f: j2 }, 41: { n: "PtgMemFunc", f: H2 }, 42: { n: "PtgRefErr", f: V2 }, 43: { n: "PtgAreaErr", f: l2 }, 44: { n: "PtgRefN", f: k2 }, 45: { n: "PtgAreaN", f: h2 }, 46: { n: "PtgMemAreaN", f: f_ }, 47: { n: "PtgMemNoMemN", f: o_ }, 57: { n: "PtgNameX", f: M2 }, 58: { n: "PtgRef3d", f: E2 }, 59: { n: "PtgArea3d", f: c2 }, 60: { n: "PtgRefErr3d", f: X2 }, 61: { n: "PtgAreaErr3d", f: u2 }, 255: {} }, l_ = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, u_ = { 1: { n: "PtgElfLel", f: Ju }, 2: { n: "PtgElfRw", f: e_ }, 3: { n: "PtgElfCol", f: z2 }, 6: { n: "PtgElfRwV", f: r_ }, 7: { n: "PtgElfColV", f: Y2 }, 10: { n: "PtgElfRadical", f: Z2 }, 11: { n: "PtgElfRadicalS", f: Q2 }, 13: { n: "PtgElfColS", f: $2 }, 15: { n: "PtgElfColSV", f: q2 }, 16: { n: "PtgElfRadicalLel", f: J2 }, 25: { n: "PtgList", f: a_ }, 29: { n: "PtgSxName", f: n_ }, 255: {} }, h_ = { 0: { n: "PtgAttrNoop", f: c_ }, 1: { n: "PtgAttrSemi", f: g2 }, 2: { n: "PtgAttrIf", f: v2 }, 4: { n: "PtgAttrChoose", f: x2 }, 8: { n: "PtgAttrGoto", f: p2 }, 16: { n: "PtgAttrSum", f: F2 }, 32: { n: "PtgAttrBaxcel", f: rl }, 33: { n: "PtgAttrBaxcel", f: rl }, 64: { n: "PtgAttrSpace", f: _2 }, 65: { n: "PtgAttrSpaceSemi", f: w2 }, 128: { n: "PtgAttrIfError", f: m2 }, 255: {} };
function ls(e, r, t, a) {
  if (a.biff < 8) return Ut(e, r);
  for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s) switch (t[s][0]) {
    case "PtgArray":
      t[s][1] = B2(e, 0, a), i.push(t[s][1]);
      break;
    case "PtgMemArea":
      t[s][2] = P2(e, t[s][1], a), i.push(t[s][2]);
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
  return r = n - e.l, r !== 0 && i.push(Ut(e, r)), i;
}
function us(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; ) r = a - e.l, i = e[e.l], n = tl[i] || tl[l_[i]], (i === 24 || i === 25) && (n = (i === 24 ? u_ : h_)[e[e.l + 1]]), !n || !n.f ? Ut(e, r) : s.push([n.n, n.f(e, r, t)]);
  return s;
}
function d_(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      s ? s[0] === 2 ? n.push('"' + s[1].replace(/"/g, '""') + '"') : n.push(s[1]) : n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var x_ = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function p_(e, r) {
  var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
  return t == -1 && a == -1 ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function Qu(e, r, t) {
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
function al(e, r, t) {
  var a = Qu(e, r, t);
  return a == "#REF" ? a : Gi(a, t);
}
function Nt(e, r, t, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 } }, f = [], o, l, h, v = 0, d = 0, x, _ = "";
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
        if (o = f.pop(), l = f.pop(), y >= 0) {
          switch (e[0][y][1][0]) {
            case 0:
              m = Cr(" ", e[0][y][1][1]);
              break;
            case 1:
              m = Cr("\r", e[0][y][1][1]);
              break;
            default:
              if (m = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          l = l + m, y = -1;
        }
        f.push(l + x_[E[0]] + o);
        break;
      case "PtgIsect":
        o = f.pop(), l = f.pop(), f.push(l + " " + o);
        break;
      case "PtgUnion":
        o = f.pop(), l = f.pop(), f.push(l + "," + o);
        break;
      case "PtgRange":
        o = f.pop(), l = f.pop(), f.push(p_(l, o));
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
        h = Oi(E[1][1], s, n), f.push(Ni(h, i));
        break;
      case "PtgRefN":
        h = t ? Oi(E[1][1], t, n) : E[1][1], f.push(Ni(h, i));
        break;
      case "PtgRef3d":
        v = E[1][1], h = Oi(E[1][2], s, n), _ = al(a, v, n), f.push(_ + "!" + Ni(h, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var A = E[1][0], M = E[1][1];
        A || (A = 0), A &= 127;
        var G = A == 0 ? [] : f.slice(-A);
        f.length -= A, M === "User" && (M = G.shift()), f.push(M + "(" + G.join(",") + ")");
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
        x = Ic(E[1][1], t ? { s: t } : s, n), f.push(af(x, n));
        break;
      case "PtgArea":
        x = Ic(E[1][1], s, n), f.push(af(x, n));
        break;
      case "PtgArea3d":
        v = E[1][1], x = E[1][2], _ = al(a, v, n), f.push(_ + "!" + af(x, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        d = E[1][2];
        var F = (a.names || [])[d - 1] || (a[0] || [])[d], U = F ? F.Name : "SH33TJSNAME" + String(d);
        U && U.slice(0, 6) == "_xlfn." && !n.xlfn && (U = U.slice(6)), f.push(U);
        break;
      case "PtgNameX":
        var D = E[1][1];
        d = E[1][2];
        var H;
        if (n.biff <= 5) D < 0 && (D = -D), a[D] && (H = a[D][d]);
        else {
          var K = "";
          if (((a[D] || [])[0] || [])[0] == 14849 || (((a[D] || [])[0] || [])[0] == 1025 ? a[D][d] && a[D][d].itab > 0 && (K = a.SheetNames[a[D][d].itab - 1] + "!") : K = a.SheetNames[d - 1] + "!"), a[D] && a[D][d]) K += a[D][d].Name;
          else if (a[0] && a[0][d]) K += a[0][d].Name;
          else {
            var ee = (Qu(a, D, n) || "").split(";;");
            ee[d - 1] ? K = ee[d - 1] : K += "SH33TJSERRX";
          }
          f.push(K);
          break;
        }
        H || (H = { Name: "SH33TJSERRY" }), f.push(H.Name);
        break;
      case "PtgParen":
        var de = "(", Pe = ")";
        if (y >= 0) {
          switch (m = "", e[0][y][1][0]) {
            case 2:
              de = Cr(" ", e[0][y][1][1]) + de;
              break;
            case 3:
              de = Cr("\r", e[0][y][1][1]) + de;
              break;
            case 4:
              Pe = Cr(" ", e[0][y][1][1]) + Pe;
              break;
            case 5:
              Pe = Cr("\r", e[0][y][1][1]) + Pe;
              break;
            default:
              if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          y = -1;
        }
        f.push(de + f.pop() + Pe);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        h = { c: E[1][1], r: E[1][0] };
        var me = { c: t.c, r: t.r };
        if (a.sharedf[yr(h)]) {
          var ze = a.sharedf[yr(h)];
          f.push(Nt(ze, s, me, a, n));
        } else {
          var ke = false;
          for (o = 0; o != a.arrayf.length; ++o) if (l = a.arrayf[o], !(h.c < l[0].s.c || h.c > l[0].e.c) && !(h.r < l[0].s.r || h.r > l[0].e.r)) {
            f.push(Nt(l[1], s, me, a, n)), ke = true;
            break;
          }
          ke || f.push(E[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + d_(E[1]) + "}");
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
    var Be = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && y >= 0 && Be.indexOf(e[0][g][0]) == -1) {
      E = e[0][y];
      var Qe = true;
      switch (E[1][0]) {
        case 4:
          Qe = false;
        case 0:
          m = Cr(" ", E[1][1]);
          break;
        case 5:
          Qe = false;
        case 1:
          m = Cr("\r", E[1][1]);
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
function v_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Ut(e, r - 2)];
  var f = us(e, s, t);
  return r !== s + n && (i = ls(e, r - s - n, f, t)), e.l = a, [f, i];
}
function m_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Ut(e, r - 2)];
  var f = us(e, s, t);
  return r !== s + n && (i = ls(e, r - s - n, f, t)), e.l = a, [f, i];
}
function g_(e, r, t, a) {
  var n = e.l + r, i = us(e, a, t), s;
  return n !== e.l && (s = ls(e, n - e.l, i, t)), [i, s];
}
function __(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = us(e, i, t);
  return i == 65535 ? [[], Ut(e, r - 2)] : (r !== i + 2 && (n = ls(e, a - i - 2, s, t)), [s, n]);
}
function w_(e) {
  var r;
  if (Ha(e, e.l + 6) !== 65535) return [Pt(e), "n"];
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
function y_(e) {
  if (e == null) {
    var r = oe(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return Nn(e);
  return Nn(0);
}
function uf(e, r, t) {
  var a = e.l + r, n = ka(e, 6, t), i = w_(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = m_(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function k_(e, r, t, a, n) {
  var i = Pn(r, t, n), s = y_(e.v), f = oe(6), o = 33;
  f.write_shift(2, o), f.write_shift(4, 0);
  for (var l = oe(e.bf.length), h = 0; h < e.bf.length; ++h) l[h] = e.bf[h];
  var v = rt([i, s, f, l]);
  return v;
}
function _0(e, r, t) {
  var a = e.read_shift(4), n = us(e, a, t), i = e.read_shift(4), s = i > 0 ? ls(e, i, n, t) : null;
  return [n, s];
}
var E_ = _0, w0 = _0, T_ = _0, S_ = _0;
function nl(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var r = oe(11);
    return r.write_shift(4, 3), r.write_shift(1, 30), r.write_shift(2, e), r.write_shift(4, 0), r;
  }
  var t = oe(17);
  return t.write_shift(4, 11), t.write_shift(1, 31), t.write_shift(8, e), t.write_shift(4, 0), t;
}
function b_(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 28), r.write_shift(1, e), r.write_shift(4, 0), r;
}
function F_(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 29), r.write_shift(1, e ? 1 : 0), r.write_shift(4, 0), r;
}
function A_(e) {
  var r = oe(7);
  r.write_shift(4, 3 + 2 * e.length), r.write_shift(1, 23), r.write_shift(2, e.length);
  var t = oe(2 * e.length);
  t.write_shift(2 * e.length, e, "utf16le");
  var a = oe(4);
  return a.write_shift(4, 0), rt([r, t, a]);
}
function C_(e) {
  var r = Lr(e), t = oe(15);
  return t.write_shift(4, 7), t.write_shift(1, 36), t.write_shift(4, r.r), t.write_shift(2, r.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), t.write_shift(4, 0), t;
}
function I_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1);
  var n = Lr(e);
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
function O_(e) {
  var r = e.split(":"), t = r[0], a = oe(23);
  a.write_shift(4, 15), t = r[0];
  var n = Lr(t);
  return a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), t = r[1], n = Lr(t), a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), a.write_shift(1, 17), a.write_shift(4, 0), a;
}
function N_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = e.split(":"), i = oe(27);
  i.write_shift(4, 19);
  var s = n[0], f = Lr(s);
  return i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), s = n[1], f = Lr(s), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(1, 17), i.write_shift(4, 0), i;
}
function R_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = wt(e), i = oe(23);
  return i.write_shift(4, 15), i.write_shift(1, 59), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.s.r), i.write_shift(4, n.e.r), i.write_shift(2, n.s.c), i.write_shift(2, n.e.c), i.write_shift(4, 0), i;
}
function P_(e, r) {
  if (typeof e == "number") return nl(e);
  if (typeof e == "boolean") return F_(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return b_(+_t[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return C_(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return O_(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return R_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return I_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return N_(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return D_(e, r);
  if (/^".*"$/.test(e)) return A_(e);
  if (/^[+-]\d+$/.test(e)) return nl(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var B_ = P_, L_ = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, eh = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, M_ = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function il(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(r, t) {
    return t.replace(/\./g, "");
  }), e = e.replace(/\$'([^']|'')+'/g, function(r) {
    return r.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(r, t) {
    return t.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? r : t;
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function U_(e) {
  var r = "of:=" + e.replace(m0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return r.replace(/;/g, "|").replace(/,/g, ";");
}
function hf(e) {
  e = e.replace(/\$'([^']|'')+'/g, function(a) {
    return a.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(a, n) {
    return n.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? a : n;
  });
  var r = e.split(":"), t = r[0].split(".")[0];
  return [t, r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")];
}
function rh(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var Bi = {}, ti = {}, Li = typeof Map < "u";
function mo(e, r, t) {
  var a = 0, n = e.length;
  if (t) {
    if (Li ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var i = Li ? t.get(r) : t[r]; a < i.length; ++a) if (e[i[a]].t === r) return e.Count++, i[a];
    }
  } else for (; a < n; ++a) if (e[a].t === r) return e.Count++, a;
  return e[n] = { t: r }, e.Count++, e.Unique++, t && (Li ? (t.has(r) || t.set(r, []), t.get(r).push(n)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n))), n;
}
function y0(e, r) {
  var t = { min: e + 1, max: e + 1 }, a = -1;
  return r.MDW && (Rt = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = Zi(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = f0(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = true), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function Cn(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function vn(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      on(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = { numFmtId: a, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, i;
}
function th(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = ir[r]);
  } catch (o) {
    if (a.WTF) throw o;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = $r(e.v)), (!a || a.cellText !== false) && e.t !== "z") try {
      if (ir[r] == null && on(ld[r] || "General", r), e.t === "e") e.w = e.w || dt[e.v];
      else if (r === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Vi(e.v);
      else if (e.t === "d") {
        var f = Yr(e.v, !!s);
        (f | 0) === f ? e.w = f.toString(10) : e.w = Vi(f);
      } else {
        if (e.v === void 0) return "";
        e.w = In(e.v, ti);
      }
      else e.t === "d" ? e.w = ta(r, Yr(e.v, !!s), ti) : e.w = ta(r, e.v, ti);
    } catch (o) {
      if (a.WTF) throw o;
    }
    if (a.cellStyles && t != null) try {
      e.s = i.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = s0(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = s0(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
    } catch (o) {
      if (a.WTF && i.Fills) throw o;
    }
  }
}
function W_(e, r, t) {
  if (e && e["!ref"]) {
    var a = Dr(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
  }
}
function H_(e, r) {
  var t = Dr(r);
  t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = xr(t));
}
var V_ = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, X_ = /<(?:\w+:)?hyperlink [^<>]*>/mg, K_ = /"(\w*:\w*)"/, j_ = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, G_ = /<(?:\w+:)?autoFilter[^>]*/g, z_ = /<(?:\w+:)?pageMargins[^<>]*\/>/g, ah = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function $_(e, r, t, a, n, i, s) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var f = {};
  r.dense && (f["!data"] = []);
  var o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, l = "", h = "", v = gt(e, "sheetData");
  v ? (l = e.slice(0, v.index), h = e.slice(v.index + v[0].length)) : l = h = e;
  var d = l.match(ah);
  d ? go(d[0], f, n, t) : (d = gt(l, "sheetPr")) && Y_(d[0], d[1] || "", f, n, t);
  var x = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (x > 0) {
    var _ = l.slice(x, x + 50).match(K_);
    _ && !(r && r.nodim) && H_(f, _[1]);
  }
  var y = gt(l, "sheetViews");
  y && y[1] && cw(y[1], n);
  var m = [];
  if (r.cellStyles) {
    var g = l.match(j_);
    g && nw(m, g);
  }
  v && hw(v[1], f, r, o, i, s, n);
  var S = h.match(G_);
  S && (f["!autofilter"] = sw(S[0]));
  var E = [], A = h.match(V_);
  if (A) for (x = 0; x != A.length; ++x) E[x] = Dr(A[x].slice(A[x].indexOf("=") + 2));
  var M = h.match(X_);
  M && rw(f, M, a);
  var G = h.match(z_);
  G && (f["!margins"] = tw(Ye(G[0])));
  var F;
  if ((F = h.match(/legacyDrawing r:id="(.*?)"/)) && (f["!legrel"] = F[1]), r && r.nodim && (o.s.c = o.s.r = 0), !f["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (f["!ref"] = xr(o)), r.sheetRows > 0 && f["!ref"]) {
    var U = Dr(f["!ref"]);
    r.sheetRows <= +U.e.r && (U.e.r = r.sheetRows - 1, U.e.r > o.e.r && (U.e.r = o.e.r), U.e.r < U.s.r && (U.s.r = U.e.r), U.e.c > o.e.c && (U.e.c = o.e.c), U.e.c < U.s.c && (U.s.c = U.e.c), f["!fullref"] = f["!ref"], f["!ref"] = xr(U));
  }
  return m.length > 0 && (f["!cols"] = m), E.length > 0 && (f["!merges"] = E), a["!id"][f["!legrel"]] && (f["!legdrawel"] = a["!id"][f["!legrel"]]), f;
}
function q_(e) {
  if (e.length === 0) return "";
  for (var r = '<mergeCells count="' + e.length + '">', t = 0; t != e.length; ++t) r += '<mergeCell ref="' + xr(e[t]) + '"/>';
  return r + "</mergeCells>";
}
function go(e, r, t, a) {
  var n = Ye(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Ar(Br(n.codeName)));
}
function Y_(e, r, t, a, n) {
  go(e.slice(0, e.indexOf(">")), t, a, n);
}
function Z_(e, r, t, a, n) {
  var i = false, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var o = r.SheetNames[t];
    try {
      r.Workbook && (o = r.Workbook.Sheets[t].CodeName || o);
    } catch {
    }
    i = true, s.codeName = Oa(vr(o));
  }
  if (e && e["!outline"]) {
    var l = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (l.summaryBelow = 0), e["!outline"].left && (l.summaryRight = 0), f = (f || "") + Ae("outlinePr", null, l);
  }
  !i && !f || (n[n.length] = Ae("sheetPr", f, s));
}
var J_ = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Q_ = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
function ew(e) {
  var r = { sheet: 1 };
  return J_.forEach(function(t) {
    e[t] != null && e[t] && (r[t] = "1");
  }), Q_.forEach(function(t) {
    e[t] != null && !e[t] && (r[t] = "0");
  }), e.password && (r.password = ho(e.password).toString(16).toUpperCase()), Ae("sheetProtection", null, r);
}
function rw(e, r, t) {
  for (var a = e["!data"] != null, n = 0; n != r.length; ++n) {
    var i = Ye(Br(r[n]), true);
    if (!i.ref) return;
    var s = ((t || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Ar(i.location))) : (i.Target = "#" + Ar(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Dr(i.ref), o = f.s.r; o <= f.e.r; ++o) for (var l = f.s.c; l <= f.e.c; ++l) {
      var h = gr(l) + Fr(o);
      a ? (e["!data"][o] || (e["!data"][o] = []), e["!data"][o][l] || (e["!data"][o][l] = { t: "z", v: void 0 }), e["!data"][o][l].l = i) : (e[h] || (e[h] = { t: "z", v: void 0 }), e[h].l = i);
    }
  }
}
function tw(e) {
  var r = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
    e[t] && (r[t] = parseFloat(e[t]));
  }), r;
}
function aw(e) {
  return Cn(e), Ae("pageMargins", null, e);
}
function nw(e, r) {
  for (var t = false, a = 0; a != r.length; ++a) {
    var n = Ye(r[a], true);
    n.hidden && (n.hidden = Pr(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = true, xo(n.width)), ln(n); i <= s; ) e[i++] = Vr(n);
  }
}
function iw(e, r) {
  for (var t = ["<cols>"], a, n = 0; n != r.length; ++n) (a = r[n]) && (t[t.length] = Ae("col", null, y0(n, a)));
  return t[t.length] = "</cols>", t.join("");
}
function sw(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
function fw(e, r, t, a) {
  var n = typeof e.ref == "string" ? e.ref : xr(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
  var i = t.Workbook.Names, s = wt(n);
  s.s.r == s.e.r && (s.e.r = wt(r["!ref"]).e.r, n = xr(s));
  for (var f = 0; f < i.length; ++f) {
    var o = i[f];
    if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
      o.Ref = Gi(t.SheetNames[a]) + "!" + ji(n);
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + t.SheetNames[a] + "'!" + n }), Ae("autoFilter", null, { ref: n });
}
var ow = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g;
function cw(e, r) {
  r.Views || (r.Views = [{}]), (e.match(ow) || []).forEach(function(t, a) {
    var n = Ye(t);
    r.Views[a] || (r.Views[a] = {}), +n.zoomScale && (r.Views[a].zoom = +n.zoomScale), n.rightToLeft && Pr(n.rightToLeft) && (r.Views[a].RTL = true);
  });
}
function lw(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), Ae("sheetViews", Ae("sheetView", null, n), {});
}
function uw(e, r, t, a, n, i, s) {
  if (e.c && t["!comments"].push([r, e.c]), (e.v === void 0 || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var f = "", o = e.t, l = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      f = e.v ? "1" : "0";
      break;
    case "n":
      isNaN(e.v) ? (e.t = "e", f = dt[e.v = 36]) : isFinite(e.v) ? f = "" + e.v : (e.t = "e", f = dt[e.v = 7]);
      break;
    case "e":
      f = dt[e.v];
      break;
    case "d":
      if (a && a.cellDates) {
        var h = $r(e.v, s);
        f = h.toISOString(), h.getUTCFullYear() < 1900 && (f = f.slice(f.indexOf("T") + 1).replace("Z", ""));
      } else e = Vr(e), e.t = "n", f = "" + (e.v = Yr($r(e.v, s), s));
      typeof e.z > "u" && (e.z = ir[14]);
      break;
    default:
      f = e.v;
      break;
  }
  var v = e.t == "z" || e.v == null ? "" : kt("v", vr(f)), d = { r }, x = vn(a.cellXfs, e, a);
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
        v = kt("v", "" + mo(a.Strings, e.v, a.revStrings)), d.t = "s";
        break;
      } else d.t = "str";
      break;
  }
  if (e.t != o && (e.t = o, e.v = l), typeof e.f == "string" && e.f) {
    var _ = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    v = Ae("f", vr(e.f), _) + (e.v != null ? v : "");
  }
  return e.l && (e.l.display = vr(f), t["!links"].push([r, e.l])), e.D && (d.cm = 1), Ae("c", v, d);
}
var hw = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, o, l, h, v) {
    for (var d = 0, x = "", _ = [], y = [], m = 0, g = 0, S = 0, E = "", A, M, G = 0, F = 0, U, D, H = 0, K = 0, ee = Array.isArray(h.CellXf), de, Pe = [], me = [], ze = s["!data"] != null, ke = [], Be = {}, Qe = false, he = !!f.sheetStubs, fr = !!((v || {}).WBProps || {}).date1904, Me = i.split(r), Te = 0, ye = Me.length; Te != ye; ++Te) {
      x = Me[Te].trim();
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
              if (M = Ye(x.slice(Ge, d), true), G = M.r != null ? parseInt(M.r, 10) : G + 1, F = -1, f.sheetRows && f.sheetRows < G) continue;
              Be = {}, Qe = false, M.ht && (Qe = true, Be.hpt = parseFloat(M.ht), Be.hpx = oi(Be.hpt)), M.hidden && Pr(M.hidden) && (Qe = true, Be.hidden = true), M.outlineLevel != null && (Qe = true, Be.level = +M.outlineLevel), Qe && (ke[G - 1] = Be);
            }
            break;
          case "<":
            Ge = d;
            break;
        }
        if (Ge >= d) break;
        if (M = Ye(x.slice(Ge, d), true), G = M.r != null ? parseInt(M.r, 10) : G + 1, F = -1, !(f.sheetRows && f.sheetRows < G)) {
          f.nodim || (o.s.r > G - 1 && (o.s.r = G - 1), o.e.r < G - 1 && (o.e.r = G - 1)), f && f.cellStyles && (Be = {}, Qe = false, M.ht && (Qe = true, Be.hpt = parseFloat(M.ht), Be.hpx = oi(Be.hpt)), M.hidden && Pr(M.hidden) && (Qe = true, Be.hidden = true), M.outlineLevel != null && (Qe = true, Be.level = +M.outlineLevel), Qe && (ke[G - 1] = Be)), _ = x.slice(d).split(e);
          for (var Ze = 0; Ze != _.length && _[Ze].trim().charAt(0) == "<"; ++Ze) ;
          for (_ = _.slice(Ze), d = 0; d != _.length; ++d) if (x = _[d].trim(), x.length !== 0) {
            if (y = x.match(t), m = d, g = 0, S = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, y != null && y.length === 2) {
              for (m = 0, E = y[1], g = 0; g != E.length && !((S = E.charCodeAt(g) - 64) < 1 || S > 26); ++g) m = 26 * m + S;
              --m, F = m;
            } else ++F;
            for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g) ;
            if (++g, M = Ye(x.slice(0, g), true), M.r || (M.r = yr({ r: G - 1, c: F })), E = x.slice(g), A = { t: "" }, (y = gt(E, "v")) != null && y[1] !== "" && (A.v = Ar(y[1])), f.cellFormula) {
              if ((y = gt(E, "f")) != null) {
                if (y[1] == "") y[0].indexOf('t="shared"') > -1 && (D = Ye(y[0]), me[D.si] && (A.f = Qc(me[D.si][1], me[D.si][2], M.r)));
                else if (A.f = Ar(Br(y[1]), true), f.xlfn || (A.f = el(A.f)), y[0].indexOf('t="array"') > -1) A.F = (E.match(a) || [])[1], A.F.indexOf(":") > -1 && Pe.push([Dr(A.F), A.F]);
                else if (y[0].indexOf('t="shared"') > -1) {
                  D = Ye(y[0]);
                  var P = Ar(Br(y[1]));
                  f.xlfn || (P = el(P)), me[parseInt(D.si, 10)] = [D, P, M.r];
                }
              } else (y = E.match(/<f[^<>]*\/>/)) && (D = Ye(y[0]), me[D.si] && (A.f = Qc(me[D.si][1], me[D.si][2], M.r)));
              var W = Lr(M.r);
              for (g = 0; g < Pe.length; ++g) W.r >= Pe[g][0].s.r && W.r <= Pe[g][0].e.r && W.c >= Pe[g][0].s.c && W.c <= Pe[g][0].e.c && (A.F = Pe[g][1]);
            }
            if (M.t == null && A.v === void 0) if (A.f || A.F) A.v = 0, A.t = "n";
            else if (he) A.t = "z";
            else continue;
            else A.t = M.t || "n";
            switch (o.s.c > F && (o.s.c = F), o.e.c < F && (o.e.c = F), A.t) {
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
                } else U = Bi[parseInt(A.v, 10)], A.v = U.t, A.r = U.r, f.cellHTML && (A.h = U.h);
                break;
              case "str":
                A.t = "s", A.v = A.v != null ? Ar(Br(A.v), true) : "", f.cellHTML && (A.h = Ii(A.v));
                break;
              case "inlineStr":
                y = gt(E, "is"), A.t = "s", y != null && (U = uo(y[1])) ? (A.v = U.t, f.cellHTML && (A.h = U.h)) : A.v = "";
                break;
              case "b":
                A.v = Pr(A.v);
                break;
              case "d":
                f.cellDates ? A.v = $r(A.v, fr) : (A.v = Yr($r(A.v, fr), fr), A.t = "n");
                break;
              case "e":
                (!f || f.cellText !== false) && (A.w = A.v), A.v = _t[A.v];
                break;
            }
            if (H = K = 0, de = null, ee && M.s !== void 0 && (de = h.CellXf[M.s], de != null && (de.numFmtId != null && (H = de.numFmtId), f.cellStyles && de.fillId != null && (K = de.fillId))), th(A, H, K, f, l, h, fr), f.cellDates && ee && A.t == "n" && ua(ir[H]) && (A.v = Xa(A.v + (fr ? 1462 : 0)), A.t = typeof A.v == "number" ? "n" : "d"), M.cm && f.xlmeta) {
              var z = (f.xlmeta.Cell || [])[+M.cm - 1];
              z && z.type == "XLDAPR" && (A.D = true);
            }
            var X;
            f.nodim && (X = Lr(M.r), o.s.r > X.r && (o.s.r = X.r), o.e.r < X.r && (o.e.r = X.r)), ze ? (X = Lr(M.r), s["!data"][X.r] || (s["!data"][X.r] = []), s["!data"][X.r][X.c] = A) : s[M.r] = A;
          }
        }
      }
    }
    ke.length > 0 && (s["!rows"] = ke);
  };
})();
function dw(e, r, t, a) {
  var n = [], i = [], s = Dr(e["!ref"]), f = "", o, l = "", h = [], v = 0, d = 0, x = e["!rows"], _ = e["!data"] != null, y = _ ? e["!data"] : [], m = { r: l }, g, S = -1, E = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (d = s.s.c; d <= s.e.c; ++d) h[d] = gr(d);
  for (v = s.s.r; v <= s.e.r; ++v) {
    i = [], l = Fr(v);
    var A = _ ? y[v] : [];
    for (d = s.s.c; d <= s.e.c; ++d) {
      o = h[d] + l;
      var M = _ ? A[d] : e[o];
      M !== void 0 && (f = uw(M, o, e, r, t, a, E)) != null && i.push(f);
    }
    (i.length > 0 || x && x[v]) && (m = { r: l }, x && x[v] && (g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Ji(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level)), n[n.length] = Ae("row", i.join(""), m));
  }
  if (x) for (; v < x.length; ++v) x && x[v] && (m = { r: v + 1 }, g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Ji(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level), n[n.length] = Ae("row", "", m));
  return n.join("");
}
function xw(e, r, t, a) {
  var n = [at, Ae("worksheet", null, { xmlns: Bn[0], "xmlns:r": ut.r })], i = t.SheetNames[e], s = 0, f = "", o = t.Sheets[i];
  o == null && (o = {});
  var l = o["!ref"] || "A1", h = Dr(l);
  if (h.e.c > 16383 || h.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + l + " exceeds format limit A1:XFD1048576");
    h.e.c = Math.min(h.e.c, 16383), h.e.r = Math.min(h.e.c, 1048575), l = xr(h);
  }
  a || (a = {}), o["!comments"] = [];
  var v = [];
  Z_(o, t, e, r, n), n[n.length] = Ae("dimension", null, { ref: l }), n[n.length] = lw(o, r, e, t), r.sheetFormat && (n[n.length] = Ae("sheetFormatPr", null, { defaultRowHeight: r.sheetFormat.defaultRowHeight || "16", baseColWidth: r.sheetFormat.baseColWidth || "10", outlineLevelRow: r.sheetFormat.outlineLevelRow || "7" })), o["!cols"] != null && o["!cols"].length > 0 && (n[n.length] = iw(o, o["!cols"])), n[s = n.length] = "<sheetData/>", o["!links"] = [], o["!ref"] != null && (f = dw(o, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), o["!protect"] && (n[n.length] = ew(o["!protect"])), o["!autofilter"] != null && (n[n.length] = fw(o["!autofilter"], o, t, e)), o["!merges"] != null && o["!merges"].length > 0 && (n[n.length] = q_(o["!merges"]));
  var d = -1, x, _ = -1;
  return o["!links"].length > 0 && (n[n.length] = "<hyperlinks>", o["!links"].forEach(function(y) {
    y[1].Target && (x = { ref: y[0] }, y[1].Target.charAt(0) != "#" && (_ = Rr(a, -1, vr(y[1].Target).replace(/#[\s\S]*$/, ""), wr.HLINK), x["r:id"] = "rId" + _), (d = y[1].Target.indexOf("#")) > -1 && (x.location = vr(y[1].Target.slice(d + 1))), y[1].Tooltip && (x.tooltip = vr(y[1].Tooltip)), x.display = y[1].display, n[n.length] = Ae("hyperlink", null, x));
  }), n[n.length] = "</hyperlinks>"), delete o["!links"], o["!margins"] != null && (n[n.length] = aw(o["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = kt("ignoredErrors", Ae("ignoredError", null, { numberStoredAsText: 1, sqref: l }))), v.length > 0 && (_ = Rr(a, -1, "../drawings/drawing" + (e + 1) + ".xml", wr.DRAW), n[n.length] = Ae("drawing", null, { "r:id": "rId" + _ }), o["!drawing"] = v), o["!comments"].length > 0 && (_ = Rr(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", wr.VML), n[n.length] = Ae("legacyDrawing", null, { "r:id": "rId" + _ }), o["!legacy"] = _), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
}
function pw(e, r) {
  var t = {}, a = e.l + r;
  t.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (t.level = i & 7), i & 16 && (t.hidden = true), i & 32 && (t.hpt = n / 20), t;
}
function vw(e, r, t) {
  var a = oe(145), n = (t["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Ji(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, o = a.l;
  a.l += 4;
  for (var l = { r: e, c: 0 }, h = t["!data"] != null, v = 0; v < 16; ++v) if (!(r.s.c > v + 1 << 10 || r.e.c < v << 10)) {
    for (var d = -1, x = -1, _ = v << 10; _ < v + 1 << 10; ++_) {
      l.c = _;
      var y = h ? (t["!data"][l.r] || [])[l.c] : t[yr(l)];
      y && (d < 0 && (d = _), x = _);
    }
    d < 0 || (++f, a.write_shift(4, d), a.write_shift(4, x));
  }
  var m = a.l;
  return a.l = o, a.write_shift(4, f), a.l = m, a.length > a.l ? a.slice(0, a.l) : a;
}
function mw(e, r, t, a) {
  var n = vw(a, t, r);
  (n.length > 17 || (r["!rows"] || [])[a]) && ve(e, 0, n);
}
var gw = Wn, _w = ui;
function ww() {
}
function yw(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = ux(e), t;
}
function kw(e, r, t) {
  t == null && (t = oe(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return a0({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), nu(e, t), t.slice(0, t.l);
}
function Ew(e) {
  var r = da(e);
  return [r];
}
function Tw(e, r, t) {
  return t == null && (t = oe(8)), Ln(r, t);
}
function Sw(e) {
  var r = Mn(e);
  return [r];
}
function bw(e, r, t) {
  return t == null && (t = oe(4)), Un(r, t);
}
function Fw(e) {
  var r = da(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Aw(e, r, t) {
  return t == null && (t = oe(9)), Ln(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Cw(e) {
  var r = Mn(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Iw(e, r, t) {
  return t == null && (t = oe(5)), Un(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Dw(e) {
  var r = da(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function df(e, r, t) {
  return t == null && (t = oe(9)), Ln(r, t), t.write_shift(1, e.v), t;
}
function Ow(e) {
  var r = Mn(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function xf(e, r, t) {
  return t == null && (t = oe(8)), Un(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function Nw(e) {
  var r = da(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Rw(e, r, t) {
  return t == null && (t = oe(12)), Ln(r, t), t.write_shift(4, r.v), t;
}
function Pw(e) {
  var r = Mn(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Bw(e, r, t) {
  return t == null && (t = oe(8)), Un(r, t), t.write_shift(4, r.v), t;
}
function Lw(e) {
  var r = da(e), t = Pt(e);
  return [r, t, "n"];
}
function Mw(e, r, t) {
  return t == null && (t = oe(16)), Ln(r, t), Nn(e.v, t), t;
}
function nh(e) {
  var r = Mn(e), t = Pt(e);
  return [r, t, "n"];
}
function Uw(e, r, t) {
  return t == null && (t = oe(12)), Un(r, t), Nn(e.v, t), t;
}
function Ww(e) {
  var r = da(e), t = p0(e);
  return [r, t, "n"];
}
function Hw(e, r, t) {
  return t == null && (t = oe(12)), Ln(r, t), iu(e.v, t), t;
}
function Vw(e) {
  var r = Mn(e), t = p0(e);
  return [r, t, "n"];
}
function Xw(e, r, t) {
  return t == null && (t = oe(8)), Un(r, t), iu(e.v, t), t;
}
function Kw(e) {
  var r = da(e), t = no(e);
  return [r, t, "is"];
}
function jw(e) {
  var r = da(e), t = Mt(e);
  return [r, t, "str"];
}
function Gw(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(12 + 4 * e.v.length)), Ln(r, t), ht(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function zw(e) {
  var r = Mn(e), t = Mt(e);
  return [r, t, "str"];
}
function $w(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(8 + 4 * a.length)), Un(r, t), ht(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function qw(e, r, t) {
  var a = e.l + r, n = da(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Nt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Yw(e, r, t) {
  var a = e.l + r, n = da(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Nt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Zw(e, r, t) {
  var a = e.l + r, n = da(e);
  n.r = t["!row"];
  var i = Pt(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Nt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Jw(e, r, t) {
  var a = e.l + r, n = da(e);
  n.r = t["!row"];
  var i = Mt(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Nt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var Qw = Wn, ey = ui;
function ry(e, r) {
  return r == null && (r = oe(4)), r.write_shift(4, e), r;
}
function ty(e, r) {
  var t = e.l + r, a = Wn(e), n = x0(e), i = Mt(e), s = Mt(e), f = Mt(e);
  e.l = t;
  var o = { rfx: a, relId: n, loc: i, display: f };
  return s && (o.Tooltip = s), o;
}
function ay(e, r) {
  var t = oe(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  ui({ s: Lr(e[0]), e: Lr(e[0]) }, t), io("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return ht(n || "", t), ht(e[1].Tooltip || "", t), ht("", t), t.slice(0, t.l);
}
function ny() {
}
function iy(e, r, t) {
  var a = e.l + r, n = su(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, t.cellFormula) {
    var f = E_(e, a - e.l, t);
    s[1] = f;
  } else e.l = a;
  return s;
}
function sy(e, r, t) {
  var a = e.l + r, n = Wn(e), i = [n];
  if (t.cellFormula) {
    var s = S_(e, a - e.l, t);
    i[1] = s, e.l = a;
  } else e.l = a;
  return i;
}
function fy(e, r, t) {
  t == null && (t = oe(18));
  var a = y0(e, r);
  t.write_shift(-4, e), t.write_shift(-4, e), t.write_shift(4, (a.width || 10) * 256), t.write_shift(4, 0);
  var n = 0;
  return r.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), r.level && (n |= r.level << 8), t.write_shift(2, n), t;
}
var ih = ["left", "right", "top", "bottom", "header", "footer"];
function oy(e) {
  var r = {};
  return ih.forEach(function(t) {
    r[t] = Pt(e);
  }), r;
}
function cy(e, r) {
  return r == null && (r = oe(48)), Cn(e), ih.forEach(function(t) {
    Nn(e[t], r);
  }), r;
}
function ly(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function uy(e, r, t) {
  t == null && (t = oe(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function hy(e) {
  var r = oe(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), ui(e, r), r;
}
function dy(e, r) {
  return r == null && (r = oe(66)), r.write_shift(2, e.password ? ho(e.password) : 0), r.write_shift(4, 1), [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
    t[1] ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0) : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
  }), r;
}
function xy() {
}
function py() {
}
function vy(e, r, t, a, n, i, s) {
  if (!e) return e;
  var f = r || {};
  a || (a = { "!id": {} });
  var o = {};
  f.dense && (o["!data"] = []);
  var l, h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, v = false, d = false, x, _, y, m, g, S, E, A, M, G = [];
  f.biff = 12, f["!row"] = 0;
  var F = 0, U = false, D = [], H = {}, K = f.supbooks || n.supbooks || [[]];
  if (K.sharedf = H, K.arrayf = D, K.SheetNames = n.SheetNames || n.Sheets.map(function(Qe) {
    return Qe.name;
  }), !f.supbooks && (f.supbooks = K, n.Names)) for (var ee = 0; ee < n.Names.length; ++ee) K[0][ee + 1] = n.Names[ee];
  var de = [], Pe = [], me = false;
  Qi[16] = { n: "BrtShortReal", f: nh };
  var ze, ke = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if ($a(e, function(he, fr, Me) {
    if (!d) switch (Me) {
      case 148:
        l = he;
        break;
      case 0:
        x = he, f.sheetRows && f.sheetRows <= x.r && (d = true), A = Fr(m = x.r), f["!row"] = x.r, (he.hidden || he.hpt || he.level != null) && (he.hpt && (he.hpx = oi(he.hpt)), Pe[he.r] = he);
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
            E = Bi[he[1]], _.v = E.t, _.r = E.r;
            break;
          case "b":
            _.v = !!he[1];
            break;
          case "e":
            _.v = he[1], f.cellText !== false && (_.w = dt[_.v]);
            break;
          case "str":
            _.t = "s", _.v = he[1];
            break;
          case "is":
            _.t = "s", _.v = he[1].t;
            break;
        }
        if ((y = s.CellXf[he[0].iStyleRef]) && th(_, y.numFmtId, null, f, i, s, ke > 0), g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] = _) : o[gr(g) + A] = _, f.cellFormula) {
          for (U = false, F = 0; F < D.length; ++F) {
            var Te = D[F];
            x.r >= Te[0].s.r && x.r <= Te[0].e.r && g >= Te[0].s.c && g <= Te[0].e.c && (_.F = xr(Te[0]), U = true);
          }
          !U && he.length > 3 && (_.f = he[3]);
        }
        if (h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), f.cellDates && y && _.t == "n" && ua(ir[y.numFmtId])) {
          var ye = Ma(_.v + ke);
          ye && (_.t = "d", _.v = new Date(Date.UTC(ye.y, ye.m - 1, ye.d, ye.H, ye.M, ye.S, ye.u)));
        }
        ze && (ze.type == "XLDAPR" && (_.D = true), ze = void 0);
        break;
      case 1:
      case 12:
        if (!f.sheetStubs || v) break;
        _ = { t: "z", v: void 0 }, g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] = _) : o[gr(g) + A] = _, h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), ze && (ze.type == "XLDAPR" && (_.D = true), ze = void 0);
        break;
      case 176:
        G.push(he);
        break;
      case 49:
        ze = ((f.xlmeta || {}).Cell || [])[he - 1];
        break;
      case 494:
        var je = a["!id"][he.relId];
        for (je ? (he.Target = je.Target, he.loc && (he.Target += "#" + he.loc), he.Rel = je) : he.relId == "" && (he.Target = "#" + he.loc), m = he.rfx.s.r; m <= he.rfx.e.r; ++m) for (g = he.rfx.s.c; g <= he.rfx.e.c; ++g) f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] || (o["!data"][m][g] = { t: "z", v: void 0 }), o["!data"][m][g].l = he) : (S = gr(g) + Fr(m), o[S] || (o[S] = { t: "z", v: void 0 }), o[S].l = he);
        break;
      case 426:
        if (!f.cellFormula) break;
        D.push(he), M = f.dense ? o["!data"][m][g] : o[gr(g) + A], M.f = Nt(he[1], h, { r: x.r, c: g }, K, f), M.F = xr(he[0]);
        break;
      case 427:
        if (!f.cellFormula) break;
        H[yr(he[0].s)] = he[1], M = f.dense ? o["!data"][m][g] : o[gr(g) + A], M.f = Nt(he[1], h, { r: x.r, c: g }, K, f);
        break;
      case 60:
        if (!f.cellStyles) break;
        for (; he.e >= he.s; ) de[he.e--] = { width: he.w / 256, hidden: !!(he.flags & 1), level: he.level }, me || (me = true, xo(he.w / 256)), ln(de[he.e + 1]);
        break;
      case 551:
        he && (o["!legrel"] = he);
        break;
      case 161:
        o["!autofilter"] = { ref: xr(he) };
        break;
      case 476:
        o["!margins"] = he;
        break;
      case 147:
        n.Sheets[t] || (n.Sheets[t] = {}), he.name && (n.Sheets[t].CodeName = he.name), (he.above || he.left) && (o["!outline"] = { above: he.above, left: he.left });
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
        if (!fr.T) {
          if (!v || f.WTF) throw new Error("Unexpected record 0x" + Me.toString(16));
        }
    }
  }, f), delete f.supbooks, delete f["!row"], !o["!ref"] && (h.s.r < 2e6 || l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0)) && (o["!ref"] = xr(l || h)), f.sheetRows && o["!ref"]) {
    var Be = Dr(o["!ref"]);
    f.sheetRows <= +Be.e.r && (Be.e.r = f.sheetRows - 1, Be.e.r > h.e.r && (Be.e.r = h.e.r), Be.e.r < Be.s.r && (Be.s.r = Be.e.r), Be.e.c > h.e.c && (Be.e.c = h.e.c), Be.e.c < Be.s.c && (Be.s.c = Be.e.c), o["!fullref"] = o["!ref"], o["!ref"] = xr(Be));
  }
  return G.length > 0 && (o["!merges"] = G), de.length > 0 && (o["!cols"] = de), Pe.length > 0 && (o["!rows"] = Pe), a["!id"][o["!legrel"]] && (o["!legdrawel"] = a["!id"][o["!legrel"]]), o;
}
function my(e, r, t, a, n, i, s, f) {
  var o = { r: t, c: a };
  if (r.c && i["!comments"].push([yr(o), r.c]), r.v === void 0) return false;
  var l = "";
  switch (r.t) {
    case "b":
      l = r.v ? "1" : "0";
      break;
    case "d":
      r = Vr(r), r.z = r.z || ir[14], r.v = Yr($r(r.v, f), f), r.t = "n";
      break;
    case "n":
    case "e":
      l = "" + r.v;
      break;
    default:
      l = r.v;
      break;
  }
  switch (o.s = vn(n.cellXfs, r, n), r.l && i["!links"].push([yr(o), r.l]), r.t) {
    case "s":
    case "str":
      return n.bookSST ? (l = mo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), o.t = "s", o.v = l, s ? ve(e, 18, Bw(r, o)) : ve(e, 7, Rw(r, o))) : (o.t = "str", s ? ve(e, 17, $w(r, o)) : ve(e, 6, Gw(r, o))), true;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? ve(e, 13, Xw(r, o)) : ve(e, 2, Hw(r, o)) : isFinite(r.v) ? s ? ve(e, 16, Uw(r, o)) : ve(e, 5, Mw(r, o)) : (o.t = "e", isNaN(r.v) ? s ? ve(e, 14, xf({ v: 36 }, o)) : ve(e, 3, df({ v: 36 }, o)) : s ? ve(e, 14, xf({ v: 7 }, o)) : ve(e, 3, df({ v: 7 }, o))), true;
    case "b":
      return o.t = "b", s ? ve(e, 15, Iw(r, o)) : ve(e, 4, Aw(r, o)), true;
    case "e":
      return o.t = "e", s ? ve(e, 14, xf(r, o)) : ve(e, 3, df(r, o)), true;
  }
  return s ? ve(e, 12, bw(r, o)) : ve(e, 1, Tw(r, o)), true;
}
function gy(e, r, t, a, n) {
  var i = Dr(r["!ref"] || "A1"), s = "", f = [], o = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  ve(e, 145);
  var l = r["!data"] != null, h = l ? r["!data"][i.s.r] : [], v = i.e.r;
  r["!rows"] && (v = Math.max(i.e.r, r["!rows"].length - 1));
  for (var d = i.s.r; d <= v; ++d) if (s = Fr(d), l && (h = r["!data"][d]), mw(e, r, i, d), !(l && !h)) {
    var x = false;
    if (d <= i.e.r) for (var _ = i.s.c; _ <= i.e.c; ++_) {
      d === i.s.r && (f[_] = gr(_));
      var y = l ? h[_] : r[f[_] + s];
      if (!y) {
        x = false;
        continue;
      }
      x = my(e, y, d, _, a, r, x, o);
    }
  }
  ve(e, 146);
}
function _y(e, r) {
  !r || !r["!merges"] || (ve(e, 177, ry(r["!merges"].length)), r["!merges"].forEach(function(t) {
    ve(e, 176, ey(t));
  }), ve(e, 178));
}
function wy(e, r) {
  !r || !r["!cols"] || (ve(e, 390), r["!cols"].forEach(function(t, a) {
    t && ve(e, 60, fy(a, t));
  }), ve(e, 391));
}
function yy(e, r) {
  !r || !r["!ref"] || (ve(e, 648), ve(e, 649, hy(Dr(r["!ref"]))), ve(e, 650));
}
function ky(e, r, t) {
  r["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = Rr(t, -1, a[1].Target.replace(/#[\s\S]*$/, ""), wr.HLINK);
      ve(e, 494, ay(a, n));
    }
  }), delete r["!links"];
}
function Ey(e, r, t, a) {
  if (r["!comments"].length > 0) {
    var n = Rr(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", wr.VML);
    ve(e, 551, io("rId" + n)), r["!legacy"] = n;
  }
}
function Ty(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : xr(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = wt(i);
    f.s.r == f.e.r && (f.e.r = wt(r["!ref"]).e.r, i = xr(f));
    for (var o = 0; o < s.length; ++o) {
      var l = s[o];
      if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == a) {
        l.Ref = Gi(t.SheetNames[a]) + "!" + ji(i);
        break;
      }
    }
    o == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: Gi(t.SheetNames[a]) + "!" + ji(i) }), ve(e, 161, ui(Dr(i))), ve(e, 162);
  }
}
function Sy(e, r, t) {
  ve(e, 133), ve(e, 137, uy(r, t)), ve(e, 138), ve(e, 134);
}
function by(e, r) {
  r["!protect"] && ve(e, 535, dy(r["!protect"]));
}
function Fy(e, r, t, a) {
  var n = Lt(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var o = Dr(s["!ref"] || "A1");
  if (o.e.c > 16383 || o.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    o.e.c = Math.min(o.e.c, 16383), o.e.r = Math.min(o.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], ve(n, 129), (t.vbaraw || s["!outline"]) && ve(n, 147, kw(f, s["!outline"])), ve(n, 148, _w(o)), Sy(n, s, t.Workbook), wy(n, s), gy(n, s, e, r, t), by(n, s), Ty(n, s, t, e), _y(n, s), ky(n, s, a), s["!margins"] && ve(n, 476, cy(s["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && yy(n, s), Ey(n, s, e, a), ve(n, 130), n.end();
}
function Ay(e) {
  var r = [], t = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
    s && (r[+s[1]] = t ? +s[2] : s[2]);
  });
  var n = Ar((Tn(e, "c:formatCode") || ["", "General"])[1]);
  return (qf(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function Cy(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, o = 0, l = "A", h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (qf(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(v) {
    var d = Ay(v);
    h.s.r = h.s.c = 0, h.e.c = f, l = gr(f), d[0].forEach(function(x, _) {
      s["!data"] ? (s["!data"][_] || (s["!data"][_] = []), s["!data"][_][f] = { t: "n", v: x, z: d[1] }) : s[l + Fr(_)] = { t: "n", v: x, z: d[1] }, o = _;
    }), h.e.r < o && (h.e.r = o), ++f;
  }), f > 0 && (s["!ref"] = xr(h)), s;
}
function Iy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(ah);
  return f && go(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function Dy(e, r) {
  e.l += 10;
  var t = Mt(e);
  return { name: t };
}
function Oy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = false;
  return $a(e, function(o, l, h) {
    switch (h) {
      case 550:
        i["!rel"] = o;
        break;
      case 651:
        n.Sheets[t] || (n.Sheets[t] = {}), o.name && (n.Sheets[t].CodeName = o.name);
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
        if (!(l.T > 0)) {
          if (!(l.T < 0)) {
            if (!s || r.WTF) throw new Error("Unexpected record 0x" + h.toString(16));
          }
        }
    }
  }, r), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var _o = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], Ny = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], Ry = [], Py = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function sl(e, r) {
  for (var t = 0; t != e.length; ++t) for (var a = e[t], n = 0; n != r.length; ++n) {
    var i = r[n];
    if (a[i[0]] == null) a[i[0]] = i[1];
    else switch (i[2]) {
      case "bool":
        typeof a[i[0]] == "string" && (a[i[0]] = Pr(a[i[0]]));
        break;
      case "int":
        typeof a[i[0]] == "string" && (a[i[0]] = parseInt(a[i[0]], 10));
        break;
    }
  }
}
function fl(e, r) {
  for (var t = 0; t != r.length; ++t) {
    var a = r[t];
    if (e[a[0]] == null) e[a[0]] = a[1];
    else switch (a[2]) {
      case "bool":
        typeof e[a[0]] == "string" && (e[a[0]] = Pr(e[a[0]]));
        break;
      case "int":
        typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
        break;
    }
  }
}
function sh(e) {
  fl(e.WBProps, _o), fl(e.CalcPr, Py), sl(e.WBView, Ny), sl(e.Sheets, Ry), ti.date1904 = Pr(e.WBProps.date1904);
}
function By(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Pr(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var Ly = ":][*?/\\".split("");
function fh(e, r) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    Ly.forEach(function(t) {
      if (e.indexOf(t) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (t) {
    throw t;
  }
  return true;
}
function My(e, r, t) {
  e.forEach(function(a, n) {
    fh(a);
    for (var i = 0; i < n; ++i) if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
    if (t) {
      var s = r && r[n] && r[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function Uy(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var r = e.Workbook && e.Workbook.Sheets || [];
  My(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t) W_(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
  e.SheetNames.forEach(function(a, n) {
    var i = e.Sheets[a];
    if (!(!i || !i["!autofilter"])) {
      var s;
      e.Workbook || (e.Workbook = {}), e.Workbook.Names || (e.Workbook.Names = []), e.Workbook.Names.forEach(function(o) {
        o.Name == "_xlnm._FilterDatabase" && o.Sheet == n && (s = o);
      });
      var f = Gi(a) + "!" + ji(i["!autofilter"].ref);
      s ? s.Ref = f : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: f });
    }
  });
}
var Wy = /<\w+:workbook/;
function Hy(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = false, n = "xmlns", i = {}, s = 0;
  if (e.replace(Et, function(o, l) {
    var h = Ye(o);
    switch (ha(h[0])) {
      case "<?xml":
        break;
      case "<workbook":
        o.match(Wy) && (n = "xmlns" + o.match(/<(\w+):/)[1]), t.xmlns = h[n];
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
        _o.forEach(function(v) {
          if (h[v[0]] != null) switch (v[2]) {
            case "bool":
              t.WBProps[v[0]] = Pr(h[v[0]]);
              break;
            case "int":
              t.WBProps[v[0]] = parseInt(h[v[0]], 10);
              break;
            default:
              t.WBProps[v[0]] = h[v[0]];
          }
        }), h.codeName && (t.WBProps.CodeName = Br(h.codeName));
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
        delete h.state, h.name = Ar(Br(h.name)), delete h[0], t.Sheets.push(h);
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
        i = {}, i.Name = Br(h.name), h.comment && (i.Comment = h.comment), h.localSheetId && (i.Sheet = +h.localSheetId), Pr(h.hidden || "0") && (i.Hidden = true), s = l + o.length;
        break;
      case "</definedName>":
        i.Ref = Ar(Br(e.slice(s, l))), t.Names.push(i);
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
    return o;
  }), Bn.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
  return sh(t), t;
}
function Vy(e) {
  var r = [at];
  r[r.length] = Ae("workbook", null, { xmlns: Bn[0], "xmlns:r": ut.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (_o.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), r[r.length] = Ae("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && n[0].Hidden) {
    for (r[r.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i) ;
    i == e.SheetNames.length && (i = 0), r[r.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', r[r.length] = "</bookViews>";
  }
  for (r[r.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: vr(e.SheetNames[i].slice(0, 31)) };
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
    var o = { name: f.Name };
    f.Comment && (o.comment = f.Comment), f.Sheet != null && (o.localSheetId = "" + f.Sheet), f.Hidden && (o.hidden = "1"), f.Ref && (r[r.length] = Ae("definedName", vr(f.Ref), o));
  }), r[r.length] = "</definedNames>"), r.length > 2 && (r[r.length] = "</workbook>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Xy(e, r) {
  var t = {};
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = bf(e), t.name = Mt(e), t;
}
function Ky(e, r) {
  return r || (r = oe(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), io(e.strRelID, r), ht(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function jy(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Mt(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function Gy(e, r) {
  r || (r = oe(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), nu(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
}
function zy(e, r) {
  var t = {};
  return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function $y(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  e.l += 1;
  var i = e.read_shift(4), s = hx(e), f, o = "";
  try {
    f = T_(e, 0, t);
    try {
      o = x0(e);
    } catch {
    }
  } catch {
    console.error("Could not parse defined name " + s);
  }
  n & 32 && (s = "_xlnm." + s), e.l = a;
  var l = { Name: s, Ptg: f, Flags: n };
  return i < 268435455 && (l.Sheet = i), o && (l.Comment = o), l;
}
function qy(e, r) {
  var t = oe(9), a = 0, n = e.Name;
  fo.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [t, ht(n), B_(e.Ref, r)];
  if (e.Comment) i.push(zi(e.Comment));
  else {
    var s = oe(4);
    s.write_shift(4, 4294967295), i.push(s);
  }
  return rt(i);
}
function Yy(e, r) {
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = false;
  r || (r = {}), r.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Qi[16] = { n: "BrtFRTArchID$", f: zy }, $a(e, function(o, l, h) {
    switch (h) {
      case 156:
        s.SheetNames.push(o.name), t.Sheets.push(o);
        break;
      case 153:
        t.WBProps = o;
        break;
      case 39:
        o.Sheet != null && (r.SID = o.Sheet), o.Ref = o.Ptg ? Nt(o.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete o.Ptg, i.push(o);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        s[0].length ? s.push([h, o]) : s[0] = [h, o], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(o), s.XTI = s.XTI.concat(o);
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
        if (!l.T) {
          if (!n || r.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35) throw new Error("Unexpected record 0x" + h.toString(16));
        }
    }
  }, r), sh(t), t.Names = i, t.supbooks = s, t;
}
function Zy(e, r) {
  ve(e, 143);
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var a = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[t] && r.Workbook.Sheets[t].Hidden || 0, n = { Hidden: a, iTabID: t + 1, strRelID: "rId" + (t + 1), name: r.SheetNames[t] };
    ve(e, 156, Ky(n));
  }
  ve(e, 144);
}
function Jy(e, r) {
  r || (r = oe(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return ht("SheetJS", r), ht(Ys.version, r), ht(Ys.version, r), ht("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Qy(e, r) {
  r || (r = oe(29)), r.write_shift(-4, 0), r.write_shift(-4, 460), r.write_shift(4, 28800), r.write_shift(4, 17600), r.write_shift(4, 500), r.write_shift(4, e), r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function ek(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, a = 0, n = -1, i = -1; a < t.length; ++a) !t[a] || !t[a].Hidden && n == -1 ? n = a : t[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (ve(e, 135), ve(e, 158, Qy(n)), ve(e, 136));
  }
}
function rk(e, r) {
  !r.Workbook || !r.Workbook.Names || r.Workbook.Names.forEach(function(t) {
    try {
      if (t.Flags & 14) return;
      ve(e, 39, qy(t, r));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(t));
    }
  });
}
function tk(e) {
  var r = e.SheetNames.length, t = oe(12 * r + 28);
  t.write_shift(4, r + 2), t.write_shift(4, 0), t.write_shift(4, -2), t.write_shift(4, -2), t.write_shift(4, 0), t.write_shift(4, -1), t.write_shift(4, -1);
  for (var a = 0; a < r; ++a) t.write_shift(4, 0), t.write_shift(4, a), t.write_shift(4, a);
  return t;
}
function ak(e, r) {
  ve(e, 353), ve(e, 357), ve(e, 362, tk(r)), ve(e, 354);
}
function nk(e, r) {
  var t = Lt();
  return ve(t, 131), ve(t, 128, Jy()), ve(t, 153, Gy(e.Workbook && e.Workbook.WBProps || null)), ek(t, e), Zy(t, e), ak(t, e), (e.Workbook || {}).Names && rk(t, e), ve(t, 132), t.end();
}
function ik(e, r, t) {
  return r.slice(-4) === ".bin" ? Yy(e, t) : Hy(e, t);
}
function sk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? vy(e, a, t, n, i, s, f) : $_(e, a, t, n, i, s, f);
}
function fk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Oy(e, a, t, n, i) : Iy(e, a, t, n, i);
}
function ok(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? e2() : r2();
}
function ck(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Jg() : Qg();
}
function lk(e, r, t, a) {
  return r.slice(-4) === ".bin" ? Qm(e, t, a) : Wm(e, t, a);
}
function uk(e, r, t) {
  return r.slice(-4) === ".bin" ? tm(e, t) : Jv(e, t);
}
function hk(e, r, t) {
  return r.slice(-4) === ".bin" ? Gg(e, t) : Ug(e, t);
}
function dk(e, r, t) {
  return r.slice(-4) === ".bin" ? Rg(e) : Og(e);
}
function xk(e, r, t, a) {
  return t.slice(-4) === ".bin" ? Pg(e, r, t, a) : void 0;
}
function pk(e, r, t) {
  return r.slice(-4) === ".bin" ? Ag(e, r, t) : Ig(e, r, t);
}
var oh = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, ch = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function xa(e, r) {
  var t = e.split(/\s+/), a = [];
  if (a[0] = t[0], t.length === 1) return a;
  var n = e.match(oh), i, s, f, o;
  if (n) for (o = 0; o != n.length; ++o) i = n[o].match(ch), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function vk(e) {
  var r = e.split(/\s+/), t = {};
  if (r.length === 1) return t;
  var a = e.match(oh), n, i, s, f;
  if (a) for (f = 0; f != a.length; ++f) n = a[f].match(ch), (i = n[1].indexOf(":")) === -1 ? t[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), t[s] = n[2].slice(1, n[2].length - 1));
  return t;
}
var Mi;
function mk(e, r, t) {
  var a = Mi[e] || Ar(e);
  return a === "General" ? In(r) : ta(a, r, { date1904: !!t });
}
function gk(e, r, t, a) {
  var n = a;
  switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = Pr(a);
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
      n = $r(a);
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
  e[Ar(r)] = n;
}
function _k(e, r, t, a) {
  if (e.t !== "z") {
    if (!t || t.cellText !== false) try {
      e.t === "e" ? e.w = e.w || dt[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Vi(e.v) : e.w = In(e.v) : e.w = mk(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = Mi[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && ua(n)) {
        var i = Ma(e.v + (a ? 1462 : 0));
        i && (e.t = "d", e.v = new Date(Date.UTC(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function wk(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var a = r.Interior;
    a.Pattern && (a.patternType = Om[a.Pattern] || a.Pattern);
  }
  e[r.ID] = r;
}
function yk(e, r, t, a, n, i, s, f, o, l, h) {
  var v = "General", d = a.StyleID, x = {};
  l = l || {};
  var _ = [], y = 0;
  for (d === void 0 && f && (d = f.StyleID), d === void 0 && s && (d = s.StyleID); i[d] !== void 0; ) {
    var m = i[d];
    if (m.nf && (v = m.nf), m.Interior && _.push(m.Interior), !m.Parent) break;
    d = m.Parent;
  }
  switch (t.Type) {
    case "Boolean":
      a.t = "b", a.v = Pr(e);
      break;
    case "String":
      a.t = "s", a.r = yc(Ar(e)), a.v = e.indexOf("<") > -1 ? Ar(r || e).replace(/<[^<>]*>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = Yr($r(e, h), h), a.v !== a.v && (a.v = Ar(e)), (!v || v == "General") && (v = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = _t[e], l.cellText !== false && (a.w = e);
      break;
    default:
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = yc(r || e));
      break;
  }
  if (_k(a, v, l, h), l.cellFormula !== false) if (a.Formula) {
    var g = Ar(a.Formula);
    g.charCodeAt(0) == 61 && (g = g.slice(1)), a.f = An(g, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = An("RC:RC", n) : a.ArrayRange && (a.F = An(a.ArrayRange, n), o.push([Dr(a.F), a.F]));
  } else for (y = 0; y < o.length; ++y) n.r >= o[y][0].s.r && n.r <= o[y][0].e.r && n.c >= o[y][0].s.c && n.c <= o[y][0].e.c && (a.F = o[y][1]);
  l.cellStyles && (_.forEach(function(S) {
    !x.patternType && S.patternType && (x.patternType = S.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function kk(e) {
  return fo.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function Ek(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function pf(e, r) {
  var t = r || {};
  ci();
  var a = Fi(d0(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") && (a = Br(a));
  var n = a.slice(0, 1024).toLowerCase(), i = false;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = Vr(t);
    return s.type = "string", fi.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(rr) {
    n.indexOf("<" + rr) >= 0 && (i = true);
  }), i) return c4(a, t);
  Mi = { "General Number": "General", "General Date": ir[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": ir[15], "Short Date": ir[14], "Long Time": ir[19], "Medium Time": ir[18], "Short Time": ir[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: ir[2], Standard: ir[4], Percent: ir[10], Scientific: ir[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var f, o = [], l, h = {}, v = [], d = {}, x = "";
  t.dense && (d["!data"] = []);
  var _ = {}, y = {}, m = xa('<Data ss:Type="String">'), g = 0, S = 0, E = 0, A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, M = {}, G = {}, F = "", U = 0, D = [], H = {}, K = {}, ee = 0, de = [], Pe = [], me = {}, ze = [], ke, Be = false, Qe = [], he = [], fr = {}, Me = 0, Te = 0, ye = { Sheets: [], WBProps: { date1904: false } }, je = {};
  ot.lastIndex = 0, a = is(a, "<!--", "-->");
  for (var Ge = ""; f = ot.exec(a); ) switch (f[3] = (Ge = f[3]).toLowerCase()) {
    case "data":
      if (Ge == "data") {
        if (f[1] === "/") {
          if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
        break;
      }
      if (o[o.length - 1][1]) break;
      f[1] === "/" ? yk(a.slice(g, f.index), F, m, o[o.length - 1][0] == "comment" ? me : _, { c: S, r: E }, M, ze[S], y, Qe, t, ye.WBProps.date1904) : (F = "", m = xa(f[0]), g = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/") if (Pe.length > 0 && (_.c = Pe), (!t.sheetRows || t.sheetRows > E) && _.v !== void 0 && (t.dense ? (d["!data"][E] || (d["!data"][E] = []), d["!data"][E][S] = _) : d[gr(S) + Fr(E)] = _), _.HRef && (_.l = { Target: Ar(_.HRef) }, _.HRefScreenTip && (_.l.Tooltip = _.HRefScreenTip), delete _.HRef, delete _.HRefScreenTip), (_.MergeAcross || _.MergeDown) && (Me = S + (parseInt(_.MergeAcross, 10) | 0), Te = E + (parseInt(_.MergeDown, 10) | 0), (Me > S || Te > E) && D.push({ s: { c: S, r: E }, e: { c: Me, r: Te } })), !t.sheetStubs) _.MergeAcross ? S = Me + 1 : ++S;
      else if (_.MergeAcross || _.MergeDown) {
        for (var Ze = S; Ze <= Me; ++Ze) for (var P = E; P <= Te; ++P) (Ze > S || P > E) && (t.dense ? (d["!data"][P] || (d["!data"][P] = []), d["!data"][P][Ze] = { t: "z" }) : d[gr(Ze) + Fr(P)] = { t: "z" });
        S = Me + 1;
      } else ++S;
      else _ = vk(f[0]), _.Index && (S = +_.Index - 1), S < A.s.c && (A.s.c = S), S > A.e.c && (A.e.c = S), f[0].slice(-2) === "/>" && ++S, Pe = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (E < A.s.r && (A.s.r = E), E > A.e.r && (A.e.r = E), f[0].slice(-2) === "/>" && (y = xa(f[0]), y.Index && (E = +y.Index - 1)), S = 0, ++E) : (y = xa(f[0]), y.Index && (E = +y.Index - 1), fr = {}, (y.AutoFitHeight == "0" || y.Height) && (fr.hpx = parseInt(y.Height, 10), fr.hpt = Ji(fr.hpx), he[E] = fr), y.Hidden == "1" && (fr.hidden = true, he[E] = fr));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
        v.push(x), A.s.r <= A.e.r && A.s.c <= A.e.c && (d["!ref"] = xr(A), t.sheetRows && t.sheetRows <= A.e.r && (d["!fullref"] = d["!ref"], A.e.r = t.sheetRows - 1, d["!ref"] = xr(A))), D.length && (d["!merges"] = D), ze.length > 0 && (d["!cols"] = ze), he.length > 0 && (d["!rows"] = he), h[x] = d;
      } else A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, E = S = 0, o.push([f[3], false]), l = xa(f[0]), x = Ar(l.Name), d = {}, t.dense && (d["!data"] = []), D = [], Qe = [], he = [], je = { name: x, Hidden: 0 }, ye.Sheets.push(je);
      break;
    case "table":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        o.push([f[3], false]), ze = [], Be = false;
      }
      break;
    case "style":
      f[1] === "/" ? wk(M, G, t) : G = xa(f[0]);
      break;
    case "numberformat":
      G.nf = Ar(xa(f[0]).Format || "General"), Mi[G.nf] && (G.nf = Mi[G.nf]);
      for (var W = 0; W != 392 && ir[W] != G.nf; ++W) ;
      if (W == 392) {
        for (W = 57; W != 392; ++W) if (ir[W] == null) {
          on(G.nf, W);
          break;
        }
      }
      break;
    case "column":
      if (o[o.length - 1][0] !== "table" || f[1] === "/") break;
      if (ke = xa(f[0]), ke.Hidden && (ke.hidden = true, delete ke.Hidden), ke.Width && (ke.wpx = parseInt(ke.Width, 10)), !Be && ke.wpx > 10) {
        Be = true, Rt = Wu;
        for (var z = 0; z < ze.length; ++z) ze[z] && ln(ze[z]);
      }
      Be && ln(ke), ze[ke.Index - 1 || ze.length] = ke;
      for (var X = 0; X < +ke.Span; ++X) ze[ze.length] = Vr(ke);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      ye.Names || (ye.Names = []);
      var le = Ye(f[0]), O = { Name: kk(le.Name), Ref: An(le.RefersTo.slice(1), { r: 0, c: 0 }) };
      ye.Sheets.length > 0 && (O.Sheet = ye.Sheets.length - 1), ye.Names.push(O);
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
      f[1] === "/" ? F += a.slice(U, f.index) : U = f.index + f[0].length;
      break;
    case "interior":
      if (!t.cellStyles) break;
      G.Interior = xa(f[0]);
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
      f[1] === "/" ? Bx(H, Ge, a.slice(ee, f.index)) : ee = f.index + f[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else o.push([f[3], false]);
      break;
    case "comment":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
        Ek(me), Pe.push(me);
      } else o.push([f[3], false]), l = xa(f[0]), Pr(l.ShowAlways || "0") || (Pe.hidden = true), me = { a: l.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var Ce = xa(f[0]);
        d["!autofilter"] = { ref: An(Ce.Range).replace(/\$/g, "") }, o.push([f[3], true]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
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
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
      break;
    case "null":
      break;
    default:
      if (o.length == 0 && f[3] == "document" || o.length == 0 && f[3] == "uof") return ul(a, t);
      var We = true;
      switch (o[o.length - 1][0]) {
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
          }
          break;
        case "worksheetoptions":
          switch (f[3]) {
            case "visible":
              if (f[0].slice(-2) !== "/>") if (f[1] === "/") switch (a.slice(ee, f.index)) {
                case "SheetHidden":
                  je.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  je.Hidden = 2;
                  break;
              }
              else ee = f.index + f[0].length;
              break;
            case "header":
              d["!margins"] || Cn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].header = +Ye(f[0]).Margin);
              break;
            case "footer":
              d["!margins"] || Cn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].footer = +Ye(f[0]).Margin);
              break;
            case "pagemargins":
              var Se = Ye(f[0]);
              d["!margins"] || Cn(d["!margins"] = {}, "xlml"), isNaN(+Se.Top) || (d["!margins"].top = +Se.Top), isNaN(+Se.Left) || (d["!margins"].left = +Se.Left), isNaN(+Se.Right) || (d["!margins"].right = +Se.Right), isNaN(+Se.Bottom) || (d["!margins"].bottom = +Se.Bottom);
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
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
              We = false;
          }
          break;
        case "smarttags":
          break;
        default:
          We = false;
          break;
      }
      if (We || f[3].match(/!\[CDATA/)) break;
      if (!o[o.length - 1][1]) throw "Unrecognized tag: " + f[3] + "|" + o.join("|");
      if (o[o.length - 1][0] === "customdocumentproperties") {
        if (f[0].slice(-2) === "/>") break;
        f[1] === "/" ? gk(K, Ge, de, a.slice(ee, f.index)) : (de = f, ee = f.index + f[0].length);
        break;
      }
      if (t.WTF) throw "Unrecognized tag: " + f[3] + "|" + o.join("|");
  }
  var nr = {};
  return !t.bookSheets && !t.bookProps && (nr.Sheets = h), nr.SheetNames = v, nr.Workbook = ye, nr.SSF = Vr(ir), nr.Props = H, nr.Custprops = K, nr.bookType = "xlml", nr;
}
function Of(e, r) {
  switch (wo(r = r || {}), r.type || "base64") {
    case "base64":
      return pf(ra(e), r);
    case "binary":
    case "buffer":
    case "file":
      return pf(e, r);
    case "array":
      return pf(Na(e), r);
  }
}
function Tk(e, r) {
  var t = [];
  return e.Props && t.push(Lx(e.Props, r)), e.Custprops && t.push(Mx(e.Props, e.Custprops)), t.join("");
}
function Sk(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function bk(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return r.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(Ae("NumberFormat", null, { "ss:Format": vr(ir[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    t.push(Ae("Style", i.join(""), s));
  }), Ae("Styles", t.join(""));
}
function lh(e) {
  return Ae("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + g0(e.Ref, { r: 0, c: 0 }) });
}
function Fk(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(lh(n)));
  }
  return Ae("Names", t.join(""));
}
function Ak(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(lh(f)));
  }
  return i.join("");
}
function Ck(e, r, t, a) {
  if (!e) return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(Ae("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(Ae("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(Ae("PageMargins", null, { "x:Bottom": e["!margins"].bottom || "0.75", "x:Left": e["!margins"].left || "0.7", "x:Right": e["!margins"].right || "0.7", "x:Top": e["!margins"].top || "0.75" })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) if (a.Workbook.Sheets[t].Hidden) n.push(Ae("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
  else {
    for (var i = 0; i < t && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i) ;
    i == t && n.push("<Selected/>");
  }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(kt("ProtectContents", "True")), e["!protect"].objects && n.push(kt("ProtectObjects", "True")), e["!protect"].scenarios && n.push(kt("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(kt("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(kt("EnableSelection", "UnlockedCells")), [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : Ae("WorksheetOptions", n.join(""), { xmlns: Jt.x });
}
function Ik(e) {
  return e.map(function(r) {
    var t = Hd(r.t || ""), a = Ae("ss:Data", t, { xmlns: "http://www.w3.org/TR/REC-html40" }), n = {};
    return r.a && (n["ss:Author"] = r.a), e.hidden || (n["ss:ShowAlways"] = "1"), Ae("Comment", a, n);
  }).join("");
}
function Dk(e, r, t, a, n, i, s) {
  if (!e || e.v == null && e.f == null) return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + vr(g0(e.f, s))), e.F && e.F.slice(0, r.length) == r) {
    var o = Lr(e.F.slice(r.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (o.r == s.r ? "" : "[" + (o.r - s.r) + "]") + "C" + (o.c == s.c ? "" : "[" + (o.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = vr(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = vr(e.l.Tooltip))), t["!merges"]) for (var l = t["!merges"], h = 0; h != l.length; ++h) l[h].s.c != s.c || l[h].s.r != s.r || (l[h].e.c > l[h].s.c && (f["ss:MergeAcross"] = l[h].e.c - l[h].s.c), l[h].e.r > l[h].s.r && (f["ss:MergeDown"] = l[h].e.r - l[h].s.r));
  var v = "", d = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs) return "";
      break;
    case "n":
      isFinite(e.v) ? (v = "Number", d = String(e.v)) : (v = "Error", d = dt[isNaN(e.v) ? 36 : 7]);
      break;
    case "b":
      v = "Boolean", d = e.v ? "1" : "0";
      break;
    case "e":
      v = "Error", d = dt[e.v];
      break;
    case "d":
      v = "DateTime", d = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || ir[14]);
      break;
    case "s":
      v = "String", d = Wd(e.v || "");
      break;
  }
  var x = vn(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + x), f["ss:Index"] = s.c + 1;
  var _ = e.v != null ? d : "", y = e.t == "z" ? "" : '<Data ss:Type="' + v + '">' + _ + "</Data>";
  return (e.c || []).length > 0 && (y += Ik(e.c)), Ae("Cell", y, f);
}
function Ok(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return r && (r.hpt && !r.hpx && (r.hpx = oi(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), r.hidden && (t += ' ss:Hidden="1"')), t + ">";
}
function Nk(e, r, t, a) {
  if (!e["!ref"]) return "";
  var n = Dr(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(m, g) {
    ln(m);
    var S = !!m.width, E = y0(g, m), A = { "ss:Index": g + 1 };
    S && (A["ss:Width"] = Yi(E.width)), m.hidden && (A["ss:Hidden"] = "1"), f.push(Ae("Column", null, A));
  });
  for (var o = e["!data"] != null, l = { r: 0, c: 0 }, h = n.s.r; h <= n.e.r; ++h) {
    var v = [Ok(h, (e["!rows"] || [])[h])];
    l.r = h;
    for (var d = n.s.c; d <= n.e.c; ++d) {
      l.c = d;
      var x = false;
      for (s = 0; s != i.length; ++s) if (!(i[s].s.c > d) && !(i[s].s.r > h) && !(i[s].e.c < d) && !(i[s].e.r < h)) {
        (i[s].s.c != d || i[s].s.r != h) && (x = true);
        break;
      }
      if (!x) {
        var _ = gr(d) + Fr(h), y = o ? (e["!data"][h] || [])[d] : e[_];
        v.push(Dk(y, _, e, r, t, a, l));
      }
    }
    v.push("</Row>"), v.length > 2 && f.push(v.join(""));
  }
  return f.join("");
}
function Rk(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? Ak(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? Nk(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(Ck(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + g0(ji(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function Pk(e, r) {
  r || (r = {}), e.SSF || (e.SSF = Vr(ir)), e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Tk(e, r)), t.push(Sk(e)), t.push(""), t.push(Fk(e));
  for (var a = 0; a < e.SheetNames.length; ++a) t.push(Ae("Worksheet", Rk(a, r, e), { "ss:Name": vr(e.SheetNames[a]) }));
  return t[2] = bk(e, r), at + Ae("Workbook", t.join(""), { xmlns: Jt.ss, "xmlns:o": Jt.o, "xmlns:x": Jt.x, "xmlns:ss": Jt.ss, "xmlns:dt": Jt.dt, "xmlns:html": Jt.html });
}
function Bk(e) {
  var r = {}, t = e.content;
  if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = mx(t), t.length - t.l <= 4) return r;
  var a = t.read_shift(4);
  if (a == 0 || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4) || (a = t.read_shift(4), a !== 1907505652) || (r.UnicodeClipboardFormat = gx(t), a = t.read_shift(4), a == 0 || a > 40)) return r;
  t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr");
}
var Lk = [60, 1084, 2066, 2165, 2175];
function Mk(e, r, t, a, n) {
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
  for (var o = Ha(t, t.l), l = Nf[o], h = 0; l != null && Lk.indexOf(o) > -1; ) i = Ha(t, t.l + 2), h = t.l + 4, o == 2066 ? h += 4 : (o == 2165 || o == 2175) && (h += 12), f = t.slice(h, t.l + 4 + i), s.push(f), t.l += 4 + i, l = Nf[o = Ha(t, t.l)];
  var v = rt(s);
  lt(v, 0);
  var d = 0;
  v.lens = [];
  for (var x = 0; x < s.length; ++x) v.lens.push(d), d += s[x].length;
  if (v.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + v.length + " < " + a;
  return r.f(v, v.length, n);
}
function Fa(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, r.cellNF && e.z == null && (e.z = ir[a]);
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (!r || r.cellText !== false) try {
      e.t === "e" ? e.w = e.w || dt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Vi(e.v) : e.w = In(e.v) : e.w = ta(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && ua(ir[a] || String(a))) {
      var n = Ma(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Vs(e, r, t) {
  return { v: e, ixfe: r, t };
}
function Uk(e, r) {
  var t = { opts: {} }, a = {}, n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, o = [], l = "", h = {}, v, d = "", x, _, y, m, g = {}, S = [], E, A, M = [], G = [], F = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, U = {}, D = false, H = function(Ke) {
    return Ke < 8 ? Sn[Ke] : Ke < 64 && G[Ke - 8] || Sn[Ke];
  }, K = function(Ke, kr) {
    var jr = Ke.XF.data;
    if (!(!jr || !jr.patternType || !kr || !kr.cellStyles)) {
      Ke.s = {}, Ke.s.patternType = jr.patternType;
      var zr;
      (zr = qi(H(jr.icvFore))) && (Ke.s.fgColor = { rgb: zr }), (zr = qi(H(jr.icvBack))) && (Ke.s.bgColor = { rgb: zr });
    }
  }, ee = function(Ke, kr, jr) {
    if (!(!D && Me > 1) && !(jr.sheetRows && Ke.r >= jr.sheetRows)) {
      if (jr.cellStyles && kr.XF && kr.XF.data && K(kr, jr), delete kr.ixfe, delete kr.XF, v = Ke, d = yr(Ke), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ke.r < s.s.r && (s.s.r = Ke.r), Ke.c < s.s.c && (s.s.c = Ke.c), Ke.r + 1 > s.e.r && (s.e.r = Ke.r + 1), Ke.c + 1 > s.e.c && (s.e.c = Ke.c + 1), jr.cellFormula && kr.f) {
        for (var zr = 0; zr < S.length; ++zr) if (!(S[zr][0].s.c > Ke.c || S[zr][0].s.r > Ke.r) && !(S[zr][0].e.c < Ke.c || S[zr][0].e.r < Ke.r)) {
          kr.F = xr(S[zr][0]), (S[zr][0].s.c != Ke.c || S[zr][0].s.r != Ke.r) && delete kr.f, kr.f && (kr.f = "" + Nt(S[zr][1], s, Ke, he, de));
          break;
        }
      }
      jr.dense ? (n["!data"][Ke.r] || (n["!data"][Ke.r] = []), n["!data"][Ke.r][Ke.c] = kr) : n[d] = kr;
    }
  }, de = { enc: false, sbcch: 0, snames: [], sharedf: g, arrayf: S, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!r && !!r.cellStyles, WTF: !!r && !!r.wtf };
  r.password && (de.password = r.password);
  var Pe, me = [], ze = [], ke = [], Be = [], Qe = false, he = [];
  he.SheetNames = de.snames, he.sharedf = de.sharedf, he.arrayf = de.arrayf, he.names = [], he.XTI = [];
  var fr = 0, Me = 0, Te = 0, ye = [], je = [], Ge;
  de.codepage = 1200, ga(1200);
  for (var Ze = false; e.l < e.length - 1; ) {
    var P = e.l, W = e.read_shift(2);
    if (W === 0 && fr === 10) break;
    var z = e.l === e.length ? 0 : e.read_shift(2), X = Nf[W];
    if (Me == 0 && [9, 521, 1033, 2057].indexOf(W) == -1) break;
    if (X && X.f) {
      if (r.bookSheets && fr === 133 && W !== 133) break;
      if (fr = W, X.r === 2 || X.r == 12) {
        var le = e.read_shift(2);
        if (z -= 2, !de.enc && le !== W && ((le & 255) << 8 | le >> 8) !== W) throw new Error("rt mismatch: " + le + "!=" + W);
        X.r == 12 && (e.l += 10, z -= 10);
      }
      var O = {};
      if (W === 10 ? O = X.f(e, z, de) : O = Mk(W, X, e, z, de), Me == 0 && [9, 521, 1033, 2057].indexOf(fr) === -1) continue;
      switch (W) {
        case 34:
          t.opts.Date1904 = F.WBProps.date1904 = O;
          break;
        case 134:
          t.opts.WriteProtect = true;
          break;
        case 47:
          if (de.enc || (e.l = 0), de.enc = O, !r.password) throw new Error("File is password-protected");
          if (O.valid == null) throw new Error("Encryption scheme unsupported");
          if (!O.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          de.lastuser = O;
          break;
        case 66:
          var Ce = Number(O);
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
          ga(de.codepage = Ce), Ze = true;
          break;
        case 317:
          de.rrtabid = O;
          break;
        case 25:
          de.winlocked = O;
          break;
        case 439:
          t.opts.RefreshAll = O;
          break;
        case 12:
          t.opts.CalcCount = O;
          break;
        case 16:
          t.opts.CalcDelta = O;
          break;
        case 17:
          t.opts.CalcIter = O;
          break;
        case 13:
          t.opts.CalcMode = O;
          break;
        case 14:
          t.opts.CalcPrecision = O;
          break;
        case 95:
          t.opts.CalcSaveRecalc = O;
          break;
        case 15:
          de.CalcRefMode = O;
          break;
        case 2211:
          t.opts.FullCalc = O;
          break;
        case 129:
          O.fDialog && (n["!type"] = "dialog"), O.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = true), O.fRight || ((n["!outline"] || (n["!outline"] = {})).left = true);
          break;
        case 67:
        case 579:
        case 1091:
        case 224:
          M.push(O);
          break;
        case 430:
          he.push([O]), he[he.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          he[he.length - 1].push(O);
          break;
        case 24:
        case 536:
          Ge = { Name: O.Name, Ref: Nt(O.rgce, s, null, he, de) }, O.itab > 0 && (Ge.Sheet = O.itab - 1), he.names.push(Ge), he[0] || (he[0] = [], he[0].XTI = []), he[he.length - 1].push(O), O.Name == "_xlnm._FilterDatabase" && O.itab > 0 && O.rgce && O.rgce[0] && O.rgce[0][0] && O.rgce[0][0][0] == "PtgArea3d" && (je[O.itab - 1] = { ref: xr(O.rgce[0][0][1][2]) });
          break;
        case 22:
          de.ExternCount = O;
          break;
        case 23:
          he.length == 0 && (he[0] = [], he[0].XTI = []), he[he.length - 1].XTI = he[he.length - 1].XTI.concat(O), he.XTI = he.XTI.concat(O);
          break;
        case 2196:
          if (de.biff < 8) break;
          Ge != null && (Ge.Comment = O[1]);
          break;
        case 18:
          n["!protect"] = O;
          break;
        case 19:
          O !== 0 && de.WTF && console.error("Password verifier: " + O);
          break;
        case 133:
          i[de.biff == 4 ? de.snames.length : O.pos] = O, de.snames.push(O.name);
          break;
        case 10:
          {
            if (--Me ? !D : D) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = xr(s), r.sheetRows && r.sheetRows <= s.e.r) {
                  var We = s.e.r;
                  s.e.r = r.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = xr(s), s.e.r = We;
                }
                s.e.r++, s.e.c++;
              }
              me.length > 0 && (n["!merges"] = me), ze.length > 0 && (n["!objects"] = ze), ke.length > 0 && (n["!cols"] = ke), Be.length > 0 && (n["!rows"] = Be), F.Sheets.push(U);
            }
            l === "" ? h = n : a[l] = n, n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (de.biff === 8 && (de.biff = { 9: 2, 521: 3, 1033: 4 }[W] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[O.BIFFVer] || 8), de.biffguess = O.BIFFVer == 0, O.BIFFVer == 0 && O.dt == 4096 && (de.biff = 5, Ze = true, ga(de.codepage = 28591)), de.biff == 4 && O.dt & 256 && (D = true), de.biff == 8 && O.BIFFVer == 0 && O.dt == 16 && (de.biff = 2), Me++ && !D) break;
            if (n = {}, r.dense && (n["!data"] = []), de.biff < 8 && !Ze && (Ze = true, ga(de.codepage = r.codepage || 1252)), de.biff == 4 && D) l = (i[de.snames.indexOf(l) + 1] || { name: "" }).name;
            else if (de.biff < 5 || O.BIFFVer == 0 && O.dt == 4096) {
              l === "" && (l = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Se = { pos: e.l - z, name: l };
              i[Se.pos] = Se, de.snames.push(l);
            } else l = (i[P] || { name: "" }).name;
            O.dt == 32 && (n["!type"] = "chart"), O.dt == 64 && (n["!type"] = "macro"), me = [], ze = [], de.arrayf = S = [], ke = [], Be = [], Qe = false, U = { Hidden: (i[P] || { hs: 0 }).hs, name: l };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][O.r] || [])[O.c] : n[gr(O.c) + Fr(O.r)]) && ++O.c, E = { ixfe: O.ixfe, XF: M[O.ixfe] || {}, v: O.val, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 5:
        case 517:
          E = { ixfe: O.ixfe, XF: M[O.ixfe], v: O.val, t: O.t }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 638:
          E = { ixfe: O.ixfe, XF: M[O.ixfe], v: O.rknum, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 189:
          for (var nr = O.c; nr <= O.C; ++nr) {
            var rr = O.rkrec[nr - O.c][0];
            E = { ixfe: rr, XF: M[rr], v: O.rkrec[nr - O.c][1], t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: nr, r: O.r }, E, r);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (O.val == "String") {
              f = O;
              break;
            }
            if (E = Vs(O.val, O.cell.ixfe, O.tt), E.XF = M[E.ixfe], r.cellFormula) {
              var or = O.formula;
              if (or && or[0] && or[0][0] && or[0][0][0] == "PtgExp") {
                var Ir = or[0][0][1][0], Er = or[0][0][1][1], Kr = yr({ r: Ir, c: Er });
                g[Kr] ? E.f = "" + Nt(O.formula, s, O.cell, he, de) : E.F = ((r.dense ? (n["!data"][Ir] || [])[Er] : n[Kr]) || {}).F;
              } else E.f = "" + Nt(O.formula, s, O.cell, he, de);
            }
            Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee(O.cell, E, r), f = O;
          }
          break;
        case 7:
        case 519:
          if (f) f.val = O, E = Vs(O, f.cell.ixfe, "s"), E.XF = M[E.ixfe], r.cellFormula && (E.f = "" + Nt(f.formula, s, f.cell, he, de)), Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee(f.cell, E, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            S.push(O);
            var $e = yr(O[0].s);
            if (x = r.dense ? (n["!data"][O[0].s.r] || [])[O[0].s.c] : n[$e], r.cellFormula && x) {
              if (!f || !$e || !x) break;
              x.f = "" + Nt(O[1], s, O[0], he, de), x.F = xr(O[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (d) {
              if (!f) break;
              g[yr(f.cell)] = O[0], x = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[yr(f.cell)], (x || {}).f = "" + Nt(O[0], s, v, he, de);
            }
          }
          break;
        case 253:
          E = Vs(o[O.isst].t, O.ixfe, "s"), o[O.isst].h && (E.h = o[O.isst].h), E.XF = M[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 513:
          r.sheetStubs && (E = { ixfe: O.ixfe, XF: M[O.ixfe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r));
          break;
        case 190:
          if (r.sheetStubs) for (var Tr = O.c; Tr <= O.C; ++Tr) {
            var Oe = O.ixfe[Tr - O.c];
            E = { ixfe: Oe, XF: M[Oe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: Tr, r: O.r }, E, r);
          }
          break;
        case 214:
        case 516:
        case 4:
          E = Vs(O.val, O.ixfe, "s"), E.XF = M[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 0:
        case 512:
          Me === 1 && (s = O);
          break;
        case 252:
          o = O;
          break;
        case 1054:
          if (de.biff >= 3 && de.biff <= 4) {
            ye[Te++] = O[1];
            for (var Jr = 0; Jr < Te + 163 && ir[Jr] != O[1]; ++Jr) ;
            Jr >= 163 && on(O[1], Te + 163);
          } else on(O[1], O[0]);
          break;
        case 30:
          {
            ye[Te++] = O;
            for (var qr = 0; qr < Te + 163 && ir[qr] != O; ++qr) ;
            qr >= 163 && on(O, Te + 163);
          }
          break;
        case 229:
          me = me.concat(O);
          break;
        case 93:
          ze[O.cmo[0]] = de.lastobj = O;
          break;
        case 438:
          de.lastobj.TxO = O;
          break;
        case 127:
          de.lastobj.ImData = O;
          break;
        case 440:
          for (m = O[0].s.r; m <= O[0].e.r; ++m) for (y = O[0].s.c; y <= O[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[yr({ c: y, r: m })], x && (x.l = O[1]);
          break;
        case 2048:
          for (m = O[0].s.r; m <= O[0].e.r; ++m) for (y = O[0].s.c; y <= O[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[yr({ c: y, r: m })], x && x.l && (x.l.Tooltip = O[1]);
          break;
        case 28:
          {
            if (x = r.dense ? (n["!data"][O[0].r] || [])[O[0].c] : n[yr(O[0])], x || (r.dense ? (n["!data"][O[0].r] || (n["!data"][O[0].r] = []), x = n["!data"][O[0].r][O[0].c] = { t: "z" }) : x = n[yr(O[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, O[0].r), s.s.r = Math.min(s.s.r, O[0].r), s.e.c = Math.max(s.e.c, O[0].c), s.s.c = Math.min(s.s.c, O[0].c)), x.c || (x.c = []), de.biff <= 5 && de.biff >= 2) _ = { a: "SheetJ5", t: O[1] };
            else {
              var Ur = ze[O[2]];
              _ = { a: O[1], t: Ur.TxO.t }, O[3] != null && !(O[3] & 2) && (x.c.hidden = true);
            }
            x.c.push(_);
          }
          break;
        case 2173:
          wg(M[O.ixfe], O.ext);
          break;
        case 125:
          {
            if (!de.cellStyles) break;
            for (; O.e >= O.s; ) ke[O.e--] = { width: O.w / 256, level: O.level || 0, hidden: !!(O.flags & 1) }, Qe || (Qe = true, xo(O.w / 256)), ln(ke[O.e + 1]);
          }
          break;
        case 520:
          {
            var yt = {};
            O.level != null && (Be[O.r] = yt, yt.level = O.level), O.hidden && (Be[O.r] = yt, yt.hidden = true), O.hpt && (Be[O.r] = yt, yt.hpt = O.hpt, yt.hpx = oi(O.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || Cn(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[W]] = O;
          break;
        case 161:
          n["!margins"] || Cn(n["!margins"] = {}), n["!margins"].header = O.header, n["!margins"].footer = O.footer;
          break;
        case 574:
          O.RTL && (F.Views[0].RTL = true);
          break;
        case 146:
          G = O;
          break;
        case 2198:
          Pe = O;
          break;
        case 140:
          A = O;
          break;
        case 442:
          l ? U.CodeName = O || U.name : F.WBProps.CodeName = O || "ThisWorkbook";
          break;
      }
    } else X || console.error("Missing Info for XLS Record 0x" + W.toString(16)), e.l += z;
  }
  return t.SheetNames = Gr(i).sort(function(xt, Ke) {
    return Number(xt) - Number(Ke);
  }).map(function(xt) {
    return i[xt].name;
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && h["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = h)) : t.Preamble = h, t.Sheets && je.forEach(function(xt, Ke) {
    t.Sheets[t.SheetNames[Ke]]["!autofilter"] = xt;
  }), t.Strings = o, t.SSF = Vr(ir), de.enc && (t.Encryption = de.enc), Pe && (t.Themes = Pe), t.Metadata = {}, A !== void 0 && (t.Metadata.Country = A), he.names.length > 0 && (F.Names = he.names), t.Workbook = F, t;
}
var Ui = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function Wk(e, r, t) {
  var a = sr.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = Uc(a, Ff, Ui.DSI);
    for (var i in n) r[i] = n[i];
  } catch (l) {
    if (t.WTF) throw l;
  }
  var s = sr.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = Uc(s, Af, Ui.SI);
    for (var o in f) r[o] == null && (r[o] = f[o]);
  } catch (l) {
    if (t.WTF) throw l;
  }
  r.HeadingPairs && r.TitlesOfParts && (xu(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function Hk(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = mc(Ff, "n"), o = mc(Af, "n");
  if (e.Props) for (s = Gr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops) for (s = Gr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var l = [];
  for (i = 0; i < n.length; ++i) _u.indexOf(n[i][0]) > -1 || du.indexOf(n[i][0]) > -1 || n[i][1] != null && l.push(n[i]);
  a.length && sr.utils.cfb_add(r, "/SummaryInformation", Wc(a, Ui.SI, o, Af)), (t.length || l.length) && sr.utils.cfb_add(r, "/DocumentSummaryInformation", Wc(t, Ui.DSI, f, Ff, l.length ? l : null, Ui.UDI));
}
function uh(e, r) {
  r || (r = {}), wo(r), Kf(), r.codepage && Xf(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (sr.find(e, "/encryption")) throw new Error("File is password-protected");
    t = sr.find(e, "!CompObj"), a = sr.find(e, "/Workbook") || sr.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = Xt(ra(e));
        break;
      case "binary":
        e = Xt(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    lt(e, 0), a = { content: e };
  }
  var n, i;
  if (t && Bk(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = mr ? "buffer" : "array";
    if (a && a.content) n = Uk(a.content, r);
    else if ((i = sr.find(e, "PerfectOffice_MAIN")) && i.content) n = Fn.to_workbook(i.content, (r.type = s, r));
    else if ((i = sr.find(e, "NativeContent_MAIN")) && i.content) n = Fn.to_workbook(i.content, (r.type = s, r));
    else throw (i = sr.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && sr.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = qg(e));
  }
  var f = {};
  return e.FullPaths && Wk(e, f, r), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function Vk(e, r) {
  var t = r || {}, a = sr.utils.cfb_new({ root: "R" }), n = "/Workbook";
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
  return sr.utils.cfb_add(a, n, dh(e, t)), t.biff == 8 && (e.Props || e.Custprops) && Hk(e, a), t.biff == 8 && e.vbaraw && Yg(a, sr.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Qi = { 0: { f: pw }, 1: { f: Ew }, 2: { f: Ww }, 3: { f: Dw }, 4: { f: Fw }, 5: { f: Lw }, 6: { f: jw }, 7: { f: Nw }, 8: { f: Jw }, 9: { f: Zw }, 10: { f: qw }, 11: { f: Yw }, 12: { f: Sw }, 13: { f: Vw }, 14: { f: Ow }, 15: { f: Cw }, 16: { f: nh }, 17: { f: zw }, 18: { f: Pw }, 19: { f: no }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: $y }, 40: {}, 42: {}, 43: { f: Km }, 44: { f: Vm }, 45: { f: zm }, 46: { f: qm }, 47: { f: $m }, 48: {}, 49: { f: ix }, 50: {}, 51: { f: Eg }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: Ou }, 62: { f: Kw }, 63: { f: Ng }, 64: { f: xy }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Ut, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: ly }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: yw }, 148: { f: gw, p: 16 }, 151: { f: ny }, 152: {}, 153: { f: jy }, 154: {}, 155: {}, 156: { f: Xy }, 157: {}, 158: {}, 159: { T: 1, f: rm }, 160: { T: -1 }, 161: { T: 1, f: Wn }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: Qw }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: yg }, 336: { T: -1 }, 337: { f: bg, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: bf }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: Du }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: iy }, 427: { f: sy }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: oy }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: ww }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: ty }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: bf }, 551: { f: x0 }, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: jg }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: Xg }, 636: { T: -1 }, 637: { f: cx }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: Dy }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: py }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, Nf = { 6: { f: uf }, 10: { f: an }, 12: { f: Zr }, 13: { f: Zr }, 14: { f: et }, 15: { f: et }, 16: { f: Pt }, 17: { f: et }, 18: { f: et }, 19: { f: Zr }, 20: { f: jc }, 21: { f: jc }, 23: { f: Du }, 24: { f: zc }, 25: { f: et }, 26: {}, 27: {}, 28: { f: cv }, 29: {}, 34: { f: et }, 35: { f: Gc }, 38: { f: Pt }, 39: { f: Pt }, 40: { f: Pt }, 41: { f: Pt }, 42: { f: et }, 43: { f: et }, 47: { f: km }, 49: { f: Dp }, 51: { f: Zr }, 60: {}, 61: { f: bp }, 64: { f: et }, 65: { f: Ip }, 66: { f: Zr }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Zr }, 89: {}, 90: {}, 91: {}, 92: { f: pp }, 93: { f: hv }, 94: {}, 95: { f: et }, 96: {}, 97: {}, 99: { f: et }, 125: { f: Ou }, 128: { f: Qp }, 129: { f: mp }, 130: { f: Zr }, 131: { f: et }, 132: { f: et }, 133: { f: gp }, 134: {}, 140: { f: wv }, 141: { f: Zr }, 144: {}, 146: { f: Ev }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Zr }, 157: {}, 158: {}, 160: { f: Iv }, 161: { f: bv }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: Kp }, 190: { f: jp }, 193: { f: an }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: et }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Zr }, 220: {}, 221: { f: et }, 222: {}, 224: { f: zp }, 225: { f: xp }, 226: { f: an }, 227: {}, 229: { f: lv }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: wp }, 253: { f: Np }, 255: { f: kp }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: wu }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: et }, 353: { f: an }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: nv }, 431: { f: et }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: pv }, 439: { f: et }, 440: { f: vv }, 441: {}, 442: { f: fs }, 443: {}, 444: { f: Zr }, 445: {}, 446: {}, 448: { f: an }, 449: { f: Sp, r: 2 }, 450: { f: an }, 512: { f: Xc }, 513: { f: Cv }, 515: { f: tv }, 516: { f: Pp }, 517: { f: rv }, 519: { f: Dv }, 520: { f: Ep }, 523: {}, 545: { f: qc }, 549: { f: Vc }, 566: {}, 574: { f: Ap }, 638: { f: Xp }, 659: {}, 1048: {}, 1054: { f: Lp }, 1084: {}, 1212: { f: sv }, 2048: { f: gv }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: Ms }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: an }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Tv, r: 12 }, 2173: { f: _g, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: et, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: iv, r: 12 }, 2197: {}, 2198: { f: dg, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: fv, r: 12 }, 2203: { f: an }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: Tp }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Zr }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: Fv }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: kv }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: Xc }, 1: {}, 2: { f: Bv }, 3: { f: Rv }, 4: { f: Nv }, 5: { f: Uv }, 7: { f: Mv }, 8: {}, 9: { f: Ms }, 11: {}, 22: { f: Zr }, 30: { f: Up }, 31: {}, 32: {}, 33: { f: qc }, 36: {}, 37: { f: Vc }, 50: { f: Wv }, 62: {}, 52: {}, 67: { f: $p }, 68: { f: Zr }, 69: {}, 86: {}, 126: {}, 127: { f: Ov }, 135: {}, 136: {}, 137: {}, 143: { f: Vv }, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: Hv }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: uf }, 521: { f: Ms }, 536: { f: zc }, 547: { f: Gc }, 561: {}, 579: { f: Zp }, 1030: { f: uf }, 1033: { f: Ms }, 1091: { f: Jp }, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 101: {}, 102: {}, 105: {}, 106: {}, 107: {}, 109: {}, 112: {}, 114: {}, 29282: {} };
function _e(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && ro(t) && e.push(t);
  }
}
function Xk(e, r, t, a) {
  var n = (t || []).length || 0;
  if (n <= 8224) return _e(e, r, t, n);
  var i = r;
  if (!isNaN(i)) {
    for (var s = t.parts || [], f = 0, o = 0, l = 0; l + (s[f] || 8224) <= 8224; ) l += s[f] || 8224, f++;
    var h = e.next(4);
    for (h.write_shift(2, i), h.write_shift(2, l), e.push(t.slice(o, o + l)), o += l; o < n; ) {
      for (h = e.next(4), h.write_shift(2, 60), l = 0; l + (s[f] || 8224) <= 8224; ) l += s[f] || 8224, f++;
      h.write_shift(2, l), e.push(t.slice(o, o + l)), o += l;
    }
  }
}
function vf(e, r, t, a) {
  var n = oe(9);
  return os(n, e, r), ku(t, a || "b", n), n;
}
function Kk(e, r, t) {
  var a = oe(8 + 2 * t.length);
  return os(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function hh(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return _e(e, 28, of(a, t[1], t[2]));
    _e(e, 28, of(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) _e(e, 28, of(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
  });
}
function jk(e, r, t, a, n, i) {
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
      var o = r.t == "d" ? Yr($r(r.v, i), i) : r.v;
      n.biff == 2 && o == (o | 0) && o >= 0 && o < 65536 ? _e(e, 2, Lv(t, a, o, f, s)) : isNaN(o) ? _e(e, 5, vf(t, a, 36, "e")) : isFinite(o) ? _e(e, 3, Pv(t, a, o, f, s)) : _e(e, 5, vf(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      _e(e, 5, vf(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      _e(e, 4, Kk(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  _e(e, 1, os(null, t, a));
}
function Gk(e, r, t, a, n) {
  var i = r["!data"] != null, s = Dr(r["!ref"] || "A1"), f = "", o = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var l = (((n || {}).Workbook || {}).WBProps || {}).date1904, h = [], v = [], d = s.s.c; d <= s.e.c; ++d) o[d] = gr(d);
  for (var x = s.s.r; x <= s.e.r; ++x) for (i && (h = r["!data"][x] || []), f = Fr(x), d = s.s.c; d <= s.e.c; ++d) {
    var _ = i ? h[d] : r[o[d] + f];
    _ && (jk(e, _, x, d, a, l), _.c && v.push([_.c, x, d]));
  }
  hh(e, v);
}
function zk(e, r) {
  for (var t = r || {}, a = Lt(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  _e(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, lo(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && _e(a, 34, Dt(true)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = Lt();
  return Gk(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? _e(a, 30, Wp(f)) : _e(a, 1054, Hp(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        _e(a, 67, qp(f));
        break;
      case 3:
        _e(a, 579, Iu(f));
        break;
      case 4:
        _e(a, 1091, Yp(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), _e(a, 10), a.end();
}
var pa = 1, oa = [];
function $k() {
  var e = oe(82 + 8 * oa.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * oa.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * oa.length);
    {
      e.write_shift(4, pa), e.write_shift(4, oa.length + 1);
      for (var r = 0, t = 0; t < oa.length; ++t) r += oa[t] && oa[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, oa.length);
    }
    oa.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function qk(e, r) {
  var t = [], a = 0, n = Lt(), i = pa, s;
  r.forEach(function(o, l) {
    var h = "", v = o[0].map(function(E) {
      return E.a && !h && (h = E.a), E.t;
    }).join("");
    ++pa;
    {
      var d = oe(150);
      d.write_shift(2, 15), d.write_shift(2, 61444), d.write_shift(4, 150), d.write_shift(2, 3234), d.write_shift(2, 61450), d.write_shift(4, 8), d.write_shift(4, pa), d.write_shift(4, 2560), d.write_shift(2, 227), d.write_shift(2, 61451), d.write_shift(4, 84), d.write_shift(2, 128), d.write_shift(4, 0), d.write_shift(2, 139), d.write_shift(4, 2), d.write_shift(2, 191), d.write_shift(4, 524296), d.write_shift(2, 344), d.l += 4, d.write_shift(2, 385), d.write_shift(4, 134217808), d.write_shift(2, 387), d.write_shift(4, 134217808), d.write_shift(2, 389), d.write_shift(4, 268435700), d.write_shift(2, 447), d.write_shift(4, 1048592), d.write_shift(2, 448), d.write_shift(4, 134217809), d.write_shift(2, 451), d.write_shift(4, 268435700), d.write_shift(2, 513), d.write_shift(4, 134217809), d.write_shift(2, 515), d.write_shift(4, 268435700), d.write_shift(2, 575), d.write_shift(4, 196609), d.write_shift(2, 959), d.write_shift(4, 131072 | (o[0].hidden ? 2 : 0)), d.l += 2, d.write_shift(2, 61456), d.write_shift(4, 18), d.write_shift(2, 3), d.write_shift(2, o[2] + 2), d.l += 2, d.write_shift(2, o[1] + 1), d.l += 2, d.write_shift(2, o[2] + 4), d.l += 2, d.write_shift(2, o[1] + 5), d.l += 2, d.l += 2, d.write_shift(2, 61457), d.l += 4, d.l = 150, l == 0 ? s = d : _e(n, 236, d);
    }
    a += 150;
    {
      var x = oe(52);
      x.write_shift(2, 21), x.write_shift(2, 18), x.write_shift(2, 25), x.write_shift(2, pa), x.write_shift(2, 0), x.l = 22, x.write_shift(2, 13), x.write_shift(2, 22), x.write_shift(4, 1651663474), x.write_shift(4, 2503426821), x.write_shift(4, 2150634280), x.write_shift(4, 1768515844 + pa * 256), x.write_shift(2, 0), x.write_shift(4, 0), x.l += 4, _e(n, 93, x);
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
      S.write_shift(2, o[1]), S.write_shift(2, o[2]), S.write_shift(2, 0 | (o[0].hidden ? 0 : 2)), S.write_shift(2, pa), S.write_shift(2, h.length), S.write_shift(1, 0), S.write_shift(h.length, h, "sbcs"), S.l++, t.push(S);
    }
  });
  {
    var f = oe(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, pa), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), _e(e, 236, s ? rt([f, s]) : f);
  }
  e.push(n.end()), t.forEach(function(o) {
    _e(e, 28, o);
  }), oa.push([i, r.length + 1, pa]), ++pa;
}
function Yk(e, r, t) {
  _e(e, 49, Op({ sz: 12, name: "Arial" }, t));
}
function Zk(e, r, t) {
  r && [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n) r[n] != null && _e(e, 1054, Mp(n, r[n], t));
  });
}
function Jk(e, r) {
  var t = oe(19);
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), _e(e, 2151, t), t = oe(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), Fu(Dr(r["!ref"] || "A1"), t), t.write_shift(4, 4), _e(e, 2152, t);
}
function Qk(e, r) {
  for (var t = 0; t < 16; ++t) _e(e, 224, Kc({ numFmtId: 0, style: true }, 0, r));
  r.cellXfs.forEach(function(a) {
    _e(e, 224, Kc(a, 0, r));
  });
}
function e4(e, r) {
  for (var t = 0; t < r["!links"].length; ++t) {
    var a = r["!links"][t];
    _e(e, 440, mv(a)), a[1].Tooltip && _e(e, 2048, _v(a));
  }
  delete r["!links"];
}
function r4(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function(a, n) {
      ++t <= 256 && a && _e(e, 125, Sv(y0(n, a), n));
    });
  }
}
function t4(e, r, t, a, n, i) {
  var s = 16 + vn(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    _e(e, 513, Pn(t, a, s));
    return;
  }
  if (r.bf) _e(e, 6, k_(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? Yr($r(r.v, i), i) : r.v;
      isNaN(f) ? _e(e, 517, ff(t, a, 36, s, n, "e")) : isFinite(f) ? _e(e, 515, av(t, a, f, s)) : _e(e, 517, ff(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      _e(e, 517, ff(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var o = mo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        _e(e, 253, Rp(t, a, o, s));
      } else _e(e, 516, Bp(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      _e(e, 513, Pn(t, a, s));
  }
}
function a4(e, r, t) {
  var a = Lt(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, o = i["!data"] != null, l = r.biff == 8, h = "", v = [], d = Dr(i["!ref"] || "A1"), x = l ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= x) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + x);
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.r, x - 1);
  }
  _e(a, 2057, lo(t, 16, r)), _e(a, 13, ca(1)), _e(a, 12, ca(100)), _e(a, 15, Dt(true)), _e(a, 17, Dt(false)), _e(a, 16, Nn(1e-3)), _e(a, 95, Dt(true)), _e(a, 42, Dt(false)), _e(a, 43, Dt(false)), _e(a, 130, ca(1)), _e(a, 128, ev()), _e(a, 131, Dt(false)), _e(a, 132, Dt(false)), l && r4(a, i["!cols"]), _e(a, 512, Vp(d, r));
  var _ = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  l && (i["!links"] = []);
  for (var y = d.s.c; y <= d.e.c; ++y) v[y] = gr(y);
  for (var m = [], g = [], S = d.s.r; S <= d.e.r; ++S) for (o && (g = i["!data"][S] || []), h = Fr(S), y = d.s.c; y <= d.e.c; ++y) {
    var E = o ? g[y] : i[v[y] + h];
    E && (t4(a, E, S, y, r, _), l && E.l && i["!links"].push([v[y] + h, E.l]), E.c && m.push([E.c, S, y]));
  }
  var A = f.CodeName || f.name || n;
  return l ? qk(a, m) : hh(a, m), l && _e(a, 574, Cp((s.Views || [])[0])), l && (i["!merges"] || []).length && _e(a, 229, uv(i["!merges"])), l && e4(a, i), _e(a, 442, Eu(A)), l && Jk(a, i), _e(a, 10), a.end();
}
function n4(e, r, t) {
  var a = Lt(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = t.biff == 8, o = t.biff == 5;
  if (_e(a, 2057, lo(e, 5, t)), t.bookType == "xla" && _e(a, 135), _e(a, 225, f ? ca(1200) : null), _e(a, 193, qx(2)), o && _e(a, 191), o && _e(a, 192), _e(a, 226), _e(a, 92, vp("SheetJS", t)), _e(a, 66, ca(f ? 1200 : 1252)), f && _e(a, 353, ca(0)), f && _e(a, 448), _e(a, 317, Av(e.SheetNames.length)), f && e.vbaraw && _e(a, 211), f && e.vbaraw) {
    var l = s.CodeName || "ThisWorkbook";
    _e(a, 442, Eu(l));
  }
  _e(a, 156, ca(17)), _e(a, 25, Dt(false)), _e(a, 18, Dt(false)), _e(a, 19, ca(0)), f && _e(a, 431, Dt(false)), f && _e(a, 444, ca(0)), _e(a, 61, Fp()), _e(a, 64, Dt(false)), _e(a, 141, ca(0)), _e(a, 34, Dt(By(e) == "true")), _e(a, 14, Dt(true)), f && _e(a, 439, Dt(false)), _e(a, 218, ca(0)), Yk(a, e, t), Zk(a, e.SSF, t), Qk(a, t), f && _e(a, 352, Dt(false));
  var h = a.end(), v = Lt();
  f && _e(v, 140, yv()), f && oa.length && _e(v, 235, $k()), f && t.Strings && Xk(v, 252, yp(t.Strings)), _e(v, 10);
  var d = v.end(), x = Lt(), _ = 0, y = 0;
  for (y = 0; y < e.SheetNames.length; ++y) _ += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[y].length;
  var m = h.length + _ + d.length;
  for (y = 0; y < e.SheetNames.length; ++y) {
    var g = i[y] || {};
    _e(x, 133, _p({ pos: m, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[y] }, t)), m += r[y].length;
  }
  var S = x.end();
  if (_ != S.length) throw new Error("BS8 " + _ + " != " + S.length);
  var E = [];
  return h.length && E.push(h), S.length && E.push(S), d.length && E.push(d), rt(E);
}
function i4(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), t.revssf = u0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), pa = 1, oa = [], t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, yo(t), t.cellXfs = [], vn(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = a4(n, t, e);
  return a.unshift(n4(e, a, t)), rt(a);
}
function dh(e, r) {
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
      return i4(e, r);
    case 4:
    case 3:
    case 2:
      return zk(e, r);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function ol(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : M1, n = {};
  a && (n["!data"] = []), e = is(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, o = s && s.index || e.length, l = Cd(e.slice(f, o), /(:?<tr[^<>]*>)/i, "<tr>"), h = -1, v = 0, d = 0, x = 0, _ = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, y = [];
  for (f = 0; f < l.length; ++f) {
    var m = l[f].trim(), g = m.slice(0, 3).toLowerCase();
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
      for (o = 0; o < S.length; ++o) {
        var E = S[o].trim();
        if (E.match(/<t[dh]/i)) {
          for (var A = E, M = 0; A.charAt(0) == "<" && (M = A.indexOf(">")) > -1; ) A = A.slice(M + 1);
          for (var G = 0; G < y.length; ++G) {
            var F = y[G];
            F.s.c == v && F.s.r < h && h <= F.e.r && (v = F.e.c + 1, G = -1);
          }
          var U = Ye(E.slice(0, E.indexOf(">")));
          x = U.colspan ? +U.colspan : 1, ((d = +U.rowspan) > 1 || x > 1) && y.push({ s: { r: h, c: v }, e: { r: h + (d || 1) - 1, c: v + x - 1 } });
          var D = U.t || U["data-t"] || "";
          if (!A.length) {
            v += x;
            continue;
          }
          if (A = Vl(A), _.s.r > h && (_.s.r = h), _.e.r < h && (_.e.r = h), _.s.c > v && (_.s.c = v), _.e.c < v && (_.e.c = v), !A.length) {
            v += x;
            continue;
          }
          var H = { t: "s", v: A };
          t.raw || !A.trim().length || D == "s" || (A === "TRUE" ? H = { t: "b", v: true } : A === "FALSE" ? H = { t: "b", v: false } : isNaN(ea(A)) ? isNaN(Xi(A).getDate()) ? A.charCodeAt(0) == 35 && _t[A] != null && (H.t = "e", H.w = A, H.v = _t[A]) : (H = { t: "d", v: $r(A) }, t.UTC === false && (H.v = On(H.v)), t.cellDates || (H = { t: "n", v: Yr(H.v) }), H.z = t.dateNF || ir[14]) : H = { t: "n", v: ea(A) }), H.cellText !== false && (H.w = A), a ? (n["!data"][h] || (n["!data"][h] = []), n["!data"][h][v] = H) : n[yr({ r: h, c: v })] = H, v += x;
        }
      }
    }
  }
  return n["!ref"] = xr(_), y.length && (n["!merges"] = y), n;
}
function s4(e, r, t, a) {
  for (var n = e["!merges"] || [], i = [], s = {}, f = e["!data"] != null, o = r.s.c; o <= r.e.c; ++o) {
    for (var l = 0, h = 0, v = 0; v < n.length; ++v) if (!(n[v].s.r > t || n[v].s.c > o) && !(n[v].e.r < t || n[v].e.c < o)) {
      if (n[v].s.r < t || n[v].s.c < o) {
        l = -1;
        break;
      }
      l = n[v].e.r - n[v].s.r + 1, h = n[v].e.c - n[v].s.c + 1;
      break;
    }
    if (!(l < 0)) {
      var d = gr(o) + Fr(t), x = f ? (e["!data"][t] || [])[o] : e[d];
      x && x.t == "n" && x.v != null && !isFinite(x.v) && (isNaN(x.v) ? x = { t: "e", v: 36, w: dt[36] } : x = { t: "e", v: 7, w: dt[7] });
      var _ = x && x.v != null && (x.h || Ii(x.w || (Ga(x), x.w) || "")) || "";
      s = {}, l > 1 && (s.rowspan = l), h > 1 && (s.colspan = h), a.editable ? _ = '<span contenteditable="true">' + _ + "</span>" : x && (s["data-t"] = x && x.t || "z", x.v != null && (s["data-v"] = Ii(x.v instanceof Date ? x.v.toISOString() : x.v)), x.z != null && (s["data-z"] = x.z), x.l && (x.l.Target || "#").charAt(0) != "#" && (_ = '<a href="' + Ii(x.l.Target) + '">' + _ + "</a>")), s.id = (a.id || "sjs") + "-" + d, i.push(Ae("td", _, s));
    }
  }
  var y = "<tr>";
  return y + i.join("") + "</tr>";
}
var f4 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', o4 = "</body></html>";
function c4(e, r) {
  var t = Od(e, "table");
  if (!t || t.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) {
    var a = pn(ol(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = To();
  return t.forEach(function(i, s) {
    hs(n, ol(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function l4(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function xh(e, r) {
  var t = r || {}, a = t.header != null ? t.header : f4, n = t.footer != null ? t.footer : o4, i = [a], s = wt(e["!ref"] || "A1");
  if (i.push(l4(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(s4(e, s, f, t));
  return i.push("</table>" + n), i.join("");
}
function ph(e, r, t) {
  var a = r.rows;
  if (!a) throw "Unsupported origin when " + r.tagName + " is not a TABLE";
  var n = t || {}, i = e["!data"] != null, s = 0, f = 0;
  if (n.origin != null) if (typeof n.origin == "number") s = n.origin;
  else {
    var o = typeof n.origin == "string" ? Lr(n.origin) : n.origin;
    s = o.r, f = o.c;
  }
  var l = Math.min(n.sheetRows || 1e7, a.length), h = { s: { r: 0, c: 0 }, e: { r: s, c: f } };
  if (e["!ref"]) {
    var v = wt(e["!ref"]);
    h.s.r = Math.min(h.s.r, v.s.r), h.s.c = Math.min(h.s.c, v.s.c), h.e.r = Math.max(h.e.r, v.e.r), h.e.c = Math.max(h.e.c, v.e.c), s == -1 && (h.e.r = s = v.e.r + 1);
  }
  var d = [], x = 0, _ = e["!rows"] || (e["!rows"] = []), y = 0, m = 0, g = 0, S = 0, E = 0, A = 0;
  for (e["!cols"] || (e["!cols"] = []); y < a.length && m < l; ++y) {
    var M = a[y];
    if (cl(M)) {
      if (n.display) continue;
      _[m] = { hidden: true };
    }
    var G = M.cells;
    for (g = S = 0; g < G.length; ++g) {
      var F = G[g];
      if (!(n.display && cl(F))) {
        var U = F.hasAttribute("data-v") ? F.getAttribute("data-v") : F.hasAttribute("v") ? F.getAttribute("v") : Vl(F.innerHTML), D = F.getAttribute("data-z") || F.getAttribute("z");
        for (x = 0; x < d.length; ++x) {
          var H = d[x];
          H.s.c == S + f && H.s.r < m + s && m + s <= H.e.r && (S = H.e.c + 1 - f, x = -1);
        }
        A = +F.getAttribute("colspan") || 1, ((E = +F.getAttribute("rowspan") || 1) > 1 || A > 1) && d.push({ s: { r: m + s, c: S + f }, e: { r: m + s + (E || 1) - 1, c: S + f + (A || 1) - 1 } });
        var K = { t: "s", v: U }, ee = F.getAttribute("data-t") || F.getAttribute("t") || "";
        U != null && (U.length == 0 ? K.t = ee || "z" : n.raw || U.trim().length == 0 || ee == "s" || (ee == "e" && dt[+U] ? K = { t: "e", v: +U, w: dt[+U] } : U === "TRUE" ? K = { t: "b", v: true } : U === "FALSE" ? K = { t: "b", v: false } : isNaN(ea(U)) ? isNaN(Xi(U).getDate()) ? U.charCodeAt(0) == 35 && _t[U] != null && (K = { t: "e", v: _t[U], w: U }) : (K = { t: "d", v: $r(U) }, n.UTC && (K.v = h0(K.v)), n.cellDates || (K = { t: "n", v: Yr(K.v) }), K.z = n.dateNF || ir[14]) : K = { t: "n", v: ea(U) })), K.z === void 0 && D != null && (K.z = D);
        var de = "", Pe = F.getElementsByTagName("A");
        if (Pe && Pe.length) for (var me = 0; me < Pe.length && !(Pe[me].hasAttribute("href") && (de = Pe[me].getAttribute("href"), de.charAt(0) != "#")); ++me) ;
        de && de.charAt(0) != "#" && de.slice(0, 11).toLowerCase() != "javascript:" && (K.l = { Target: de }), i ? (e["!data"][m + s] || (e["!data"][m + s] = []), e["!data"][m + s][S + f] = K) : e[yr({ c: S + f, r: m + s })] = K, h.e.c < S + f && (h.e.c = S + f), S += A;
      }
    }
    ++m;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), h.e.r = Math.max(h.e.r, m - 1 + s), e["!ref"] = xr(h), m >= l && (e["!fullref"] = xr((h.e.r = a.length - y + m - 1 + s, h))), e;
}
function vh(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), ph(a, e, r);
}
function u4(e, r) {
  var t = pn(vh(e, r), r);
  return t;
}
function cl(e) {
  var r = "", t = h4(e);
  return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), r === "none";
}
function h4(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function d4(e) {
  var r = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), t = Ar(r.replace(/<[^<>]*>/g, ""));
  return [t];
}
function mh(e, r, t) {
  var a = t || {}, n = d0(e);
  ot.lastIndex = 0, n = $f(is(n, "<!--", "-->"));
  for (var i, s, f = "", o = "", l, h = 0, v = -1, d = ""; i = ot.exec(n); ) switch (i[3] = i[3].replace(/_[\s\S]*$/, "")) {
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
      switch (l = Ye(i[0], false), l.style) {
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
      switch (l = Ye(i[0], false), l.style) {
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
      switch (l = Ye(i[0], false), l.style) {
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
      switch (l = Ye(i[0], false), l.style) {
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
      switch (l = Ye(i[0], false), l.style) {
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
      switch (l = Ye(i[0], false), l.textual && (f += "mm"), l.style) {
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
        switch (l = Ye(i[0], false), l.style) {
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
        l["decimal-places"] && (f += "." + Cr("0", +l["decimal-places"]));
      }
      break;
    case "year":
      switch (l = Ye(i[0], false), l.style) {
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
      l = Ye(i[0], false), f += "0." + Cr("0", +l["min-decimal-places"] || +l["decimal-places"] || 2) + Cr("?", +l["decimal-places"] - +l["min-decimal-places"] || 0) + "E" + (Pr(l["forced-exponent-sign"]) ? "+" : "") + Cr("0", +l["min-exponent-digits"] || 2);
      break;
    case "fraction":
      l = Ye(i[0], false), +l["min-integer-digits"] ? f += Cr("0", +l["min-integer-digits"]) : f += "#", f += " ", f += Cr("?", +l["min-numerator-digits"] || 1), f += "/", +l["denominator-value"] ? f += l["denominator-value"] : f += Cr("?", +l["min-denominator-digits"] || 1);
      break;
    case "currency-symbol":
      i[1] === "/" ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : i[0].charAt(i[0].length - 2) !== "/" ? v = ot.lastIndex : f += "$";
      break;
    case "text-properties":
      switch (l = Ye(i[0], false), (l.color || "").toLowerCase().replace("#", "")) {
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
      l = Ye(i[0], false), Ar(l.condition) == "value()>=0" ? f = a[l["apply-style-name"]] + ";" + f : console.error("ODS number format may be incorrect: " + l.condition);
      break;
    case "number":
      if (i[1] === "/") break;
      l = Ye(i[0], false), o = "", o += Cr("0", +l["min-integer-digits"] || 1), Pr(l.grouping) && (o = Wa(Cr("#", Math.max(0, 4 - o.length)) + o)), (+l["min-decimal-places"] || +l["decimal-places"]) && (o += "."), +l["min-decimal-places"] && (o += Cr("0", +l["min-decimal-places"] || 1)), +l["decimal-places"] - (+l["min-decimal-places"] || 0) && (o += Cr("0", +l["decimal-places"] - (+l["min-decimal-places"] || 0))), f += o;
      break;
    case "embedded-text":
      i[1] === "/" ? h == 0 ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, h) + '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(h) : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex, h = -+Ye(i[0], false).position || 0);
      break;
  }
  return a;
}
function gh(e, r, t) {
  var a = r || {}, n = d0(e), i = [], s, f, o, l = "", h = 0, v, d, x = {}, _ = [], y = {};
  a.dense && (y["!data"] = []);
  var m, g, S = { value: "" }, E = {}, A = "", M = 0, G = "", F = 0, U = [], D = [], H = -1, K = -1, ee = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, de = 0, Pe = t || {}, me = {}, ze = [], ke = {}, Be = 0, Qe = 0, he = [], fr = 1, Me = 1, Te = [], ye = { Names: [], WBProps: {} }, je = {}, Ge = ["", ""], Ze = [], P = {}, W = "", z = 0, X = false, le = false, O = 0;
  for (ot.lastIndex = 0, n = $f(is(n, "<!--", "-->")); m = ot.exec(n); ) switch (m[3] = m[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      m[1] === "/" ? (ee.e.c >= ee.s.c && ee.e.r >= ee.s.r ? y["!ref"] = xr(ee) : y["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= ee.e.r && (y["!fullref"] = y["!ref"], ee.e.r = a.sheetRows - 1, y["!ref"] = xr(ee)), ze.length && (y["!merges"] = ze), he.length && (y["!rows"] = he), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), _.push(v.name), x[v.name] = y, le = false) : m[0].charAt(m[0].length - 2) !== "/" && (v = Ye(m[0], false), H = K = -1, ee.s.r = ee.s.c = 1e7, ee.e.r = ee.e.c = 0, y = {}, a.dense && (y["!data"] = []), ze = [], he = [], le = true);
      break;
    case "table-row-group":
      m[1] === "/" ? --de : ++de;
      break;
    case "table-row":
    case "\u884C":
      if (m[1] === "/") {
        H += fr, fr = 1;
        break;
      }
      if (d = Ye(m[0], false), d.\u884C\u53F7 ? H = d.\u884C\u53F7 - 1 : H == -1 && (H = 0), fr = +d["number-rows-repeated"] || 1, fr < 10) for (O = 0; O < fr; ++O) de > 0 && (he[H + O] = { level: de });
      K = -1;
      break;
    case "covered-table-cell":
      if (m[1] !== "/") if (++K, S = Ye(m[0], false), Me = parseInt(S["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
        for (; Me-- > 0; ) a.dense ? (y["!data"][H] || (y["!data"][H] = []), y["!data"][H][K] = { t: "z" }) : y[yr({ r: H, c: K })] = { t: "z" }, ++K;
        --K;
      } else K += Me - 1;
      A = "", U = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (m[0].charAt(m[0].length - 2) === "/") ++K, S = Ye(m[0], false), Me = parseInt(S["number-columns-repeated"] || "1", 10) || 1, g = { t: "z", v: null }, S.formula && a.cellFormula != false && (g.f = il(Ar(S.formula))), S["style-name"] && me[S["style-name"]] && (g.z = me[S["style-name"]]), (S.\u6570\u636E\u7C7B\u578B || S["value-type"]) == "string" && (g.t = "s", g.v = Ar(S["string-value"] || ""), a.dense ? (y["!data"][H] || (y["!data"][H] = []), y["!data"][H][K] = g) : y[gr(K) + Fr(H)] = g), K += Me - 1;
      else if (m[1] !== "/") {
        ++K, A = G = "", M = F = 0, U = [], D = [], Me = 1;
        var Ce = fr ? H + fr - 1 : H;
        if (K > ee.e.c && (ee.e.c = K), K < ee.s.c && (ee.s.c = K), H < ee.s.r && (ee.s.r = H), Ce > ee.e.r && (ee.e.r = Ce), S = Ye(m[0], false), E = Md(m[0]), Ze = [], P = {}, g = { t: S.\u6570\u636E\u7C7B\u578B || S["value-type"], v: null }, S["style-name"] && me[S["style-name"]] && (g.z = me[S["style-name"]]), a.cellFormula) if (S.formula && (S.formula = Ar(S.formula)), S["number-matrix-columns-spanned"] && S["number-matrix-rows-spanned"] && (Be = parseInt(S["number-matrix-rows-spanned"], 10) || 0, Qe = parseInt(S["number-matrix-columns-spanned"], 10) || 0, ke = { s: { r: H, c: K }, e: { r: H + Be - 1, c: K + Qe - 1 } }, g.F = xr(ke), Te.push([ke, g.F])), S.formula) g.f = il(S.formula);
        else for (O = 0; O < Te.length; ++O) H >= Te[O][0].s.r && H <= Te[O][0].e.r && K >= Te[O][0].s.c && K <= Te[O][0].e.c && (g.F = Te[O][1]);
        switch ((S["number-columns-spanned"] || S["number-rows-spanned"]) && (Be = parseInt(S["number-rows-spanned"] || "1", 10) || 1, Qe = parseInt(S["number-columns-spanned"] || "1", 10) || 1, Be * Qe > 1 && (ke = { s: { r: H, c: K }, e: { r: H + Be - 1, c: K + Qe - 1 } }, ze.push(ke))), S["number-columns-repeated"] && (Me = parseInt(S["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Pr(S["boolean-value"]) || +S["boolean-value"] >= 1;
            break;
          case "float":
            g.t = "n", g.v = parseFloat(S.value), a.cellDates && g.z && ua(g.z) && (g.v = Xa(g.v + (ye.WBProps.date1904 ? 1462 : 0)), g.t = typeof g.v == "number" ? "n" : "d");
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "date":
            g.t = "d", g.v = $r(S["date-value"], ye.WBProps.date1904), a.cellDates || (g.t = "n", g.v = Yr(g.v, ye.WBProps.date1904)), g.z || (g.z = "m/d/yy");
            break;
          case "time":
            g.t = "n", g.v = _d(S["time-value"]) / 86400, a.cellDates && (g.v = Xa(g.v), g.t = typeof g.v == "number" ? "n" : "d"), g.z || (g.z = "HH:MM:SS");
            break;
          case "number":
            g.t = "n", g.v = parseFloat(S.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t) g.t = "s", S["string-value"] != null && (A = Ar(S["string-value"]), U = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (X = false, E["calcext:value-type"] == "error" && _t[A] != null && (g.t = "e", g.w = A, g.v = _t[A]), g.t === "s" && (g.v = A || "", U.length && (g.R = U), X = M == 0), je.Target && (g.l = je), Ze.length > 0 && (g.c = Ze, Ze = []), A && a.cellText !== false && (g.w = A), X && (g.t = "z", delete g.v), (!X || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= H)) for (var We = 0; We < fr; ++We) {
          if (Me = parseInt(S["number-columns-repeated"] || "1", 10), a.dense) for (y["!data"][H + We] || (y["!data"][H + We] = []), y["!data"][H + We][K] = We == 0 ? g : Vr(g); --Me > 0; ) y["!data"][H + We][K + Me] = Vr(g);
          else for (y[yr({ r: H + We, c: K })] = g; --Me > 0; ) y[yr({ r: H + We, c: K + Me })] = Vr(g);
          ee.e.c <= K && (ee.e.c = K);
        }
        Me = parseInt(S["number-columns-repeated"] || "1", 10), K += Me - 1, Me = 0, g = {}, A = "", U = [];
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
        P.t = A, U.length && (P.R = U), P.a = W, Ze.push(P), A = G, M = F, U = D;
      } else if (m[0].charAt(m[0].length - 2) !== "/") {
        i.push([m[3], false]);
        var Se = Ye(m[0], true);
        Se.display && Pr(Se.display) || (Ze.hidden = true), G = A, F = M, D = U, A = "", M = 0, U = [];
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
      A = "", M = 0, U = [];
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
        var nr = ot.lastIndex;
        mh(n.slice(o, ot.lastIndex), r, Pe), ot.lastIndex = nr;
      } else m[0].charAt(m[0].length - 2) !== "/" && (o = ot.lastIndex - m[0].length);
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
        rr.family == "table-cell" && Pe[rr["data-style-name"]] && (me[rr.name] = Pe[rr["data-style-name"]]);
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
          l += n.slice(h, m.index);
          break;
      }
      else h = m.index + m[0].length;
      break;
    case "named-range":
      f = Ye(m[0], false), Ge = hf(f["cell-range-address"]);
      var or = { Name: f.name, Ref: Ge[0] + "!" + Ge[1] };
      le && (or.Sheet = _.length), ye.Names.push(or);
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
        var Ir = d4(n.slice(M, m.index));
        A = (A.length > 0 ? A + `
` : "") + Ir[0];
      } else m[0].slice(-2) == "/>" ? A += `
` : (Ye(m[0], false), M = m.index + m[0].length);
      break;
    case "s":
      break;
    case "database-range":
      if (m[1] === "/") break;
      try {
        Ge = hf(Ye(m[0])["target-range-address"]), x[Ge[0]]["!autofilter"] = { ref: Ge[1] };
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
        je.Target = Ar(je.href), delete je.href, je.Target.charAt(0) == "#" && je.Target.indexOf(".") > -1 ? (Ge = hf(je.Target.slice(1)), je.Target = "#" + Ge[0] + "!" + Ge[1]) : je.Target.match(/^\.\.[\\\/]/) && (je.Target = je.Target.slice(3));
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
  var Er = { Sheets: x, SheetNames: _, Workbook: ye };
  return a.bookSheets && delete Er.Sheets, Er;
}
function ll(e, r) {
  r = r || {}, fa(e, "META-INF/manifest.xml") && Cx(ft(e, "META-INF/manifest.xml"), r);
  var t = Kt(e, "styles.xml"), a = t && mh(Br(t)), n = Kt(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = gh(Br(n), r, a);
  return fa(e, "meta.xml") && (i.Props = uu(ft(e, "meta.xml"))), i.bookType = "ods", i;
}
function ul(e, r) {
  var t = gh(e, r);
  return t.bookType = "fods", t;
}
var x4 = (function() {
  var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""), r = "<office:document-styles " + Ki({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>";
  return function() {
    return at + r;
  };
})();
function p4(e, r) {
  var t = "number", a = "", n = { "style:name": r }, i = "", s = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1 && (console.error("Unsupported ODS Style Map exported.  Using first branch of " + e), e = e.slice(0, e.indexOf(";"))), e == "@") {
      t = "text", a = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + vr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + vr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
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
    var o = false;
    if (["y", "m", "d"].indexOf(e[0]) > -1) {
      t = "date";
      r: for (; s < e.length; ++s) switch (i = e[s].toLowerCase()) {
        case "h":
        case "s":
          o = true, --s;
          break r;
        case "m":
          t: for (var l = s + 1; l < e.length; ++l) switch (e[l]) {
            case "y":
            case "d":
              break t;
            case "h":
            case "s":
              o = true, --s;
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
          --s, a += "<number:text>" + vr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "\\":
          i = e[++s], a += "<number:text>" + vr(i) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + vr(i) + "</number:text>";
          break;
        default:
          console.error("unrecognized character " + i + " in ODF format " + e);
      }
      if (!o) break e;
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
          --s, a += "<number:text>" + vr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + vr(i) + "</number:text>";
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
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + vr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + vr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var h = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!h || !h[0]) console.error("Could not find numeric part of " + e);
    else {
      var v = h[1].replace(/,/g, "");
      a += "<number:" + (h[3] ? "scientific-" : "") + 'number number:min-integer-digits="' + (v.indexOf("0") == -1 ? "0" : v.length - v.indexOf("0")) + '"' + (h[0].indexOf(",") > -1 ? ' number:grouping="true"' : "") + (h[2] && ' number:decimal-places="' + (h[2].length - 1) + '"' || ' number:decimal-places="0"') + (h[3] && h[3].indexOf("+") > -1 ? ' number:forced-exponent-sign="true"' : "") + (h[3] ? ' number:min-exponent-digits="' + h[3].match(/0+/)[0].length + '"' : "") + "></number:" + (h[3] ? "scientific-" : "") + "number>", s = h.index + h[0].length;
    }
    if (e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, a += "<number:text>" + vr(i.replace(/""/g, '"')) + "</number:text>";
    }
  }
  return a ? Ae("number:" + t + "-style", a, n) : (console.error("Could not generate ODS number format for |" + e + "|"), "");
}
function hl(e, r, t) {
  for (var a = [], n = 0; n < e.length; ++n) {
    var i = e[n];
    i && i.Sheet == (t == -1 ? null : t) && a.push(i);
  }
  return a.length ? `      <table:named-expressions>
` + a.map(function(s) {
    var f = (t == -1 ? "$" : "") + rh(s.Ref);
    return "        " + Ae("table:named-range", null, { "table:name": s.Name, "table:cell-range-address": f, "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1") });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var dl = /* @__PURE__ */ (function() {
  var e = function(n, i) {
    return vr(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, o, l) {
    var h = [];
    h.push('      <table:table table:name="' + vr(i.SheetNames[s]) + `" table:style-name="ta1">
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
        var E = false, A = {}, M = "";
        for (y = 0; y != _.length; ++y) if (!(_[y].s.c > d) && !(_[y].s.r > v) && !(_[y].e.c < d) && !(_[y].e.r < v)) {
          (_[y].s.c != d || _[y].s.r != v) && (E = true), A["table:number-columns-spanned"] = _[y].e.c - _[y].s.c + 1, A["table:number-rows-spanned"] = _[y].e.r - _[y].s.r + 1;
          break;
        }
        if (E) {
          h.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var G = yr({ r: v, c: d }), F = m ? (n["!data"][v] || [])[d] : n[G];
        if (F && F.f && (A["table:formula"] = vr(U_(F.f)), F.F && F.F.slice(0, G.length) == G)) {
          var U = wt(F.F);
          A["table:number-matrix-columns-spanned"] = U.e.c - U.s.c + 1, A["table:number-matrix-rows-spanned"] = U.e.r - U.s.r + 1;
        }
        if (!F) {
          h.push(r);
          continue;
        }
        switch (F.t) {
          case "b":
            M = F.v ? "TRUE" : "FALSE", A["office:value-type"] = "boolean", A["office:boolean-value"] = F.v ? "true" : "false";
            break;
          case "n":
            isFinite(F.v) ? (M = F.w || String(F.v || 0), A["office:value-type"] = "float", A["office:value"] = F.v || 0) : (isNaN(F.v) ? (M = "#NUM!", A["table:formula"] = "of:=#NUM!") : (M = "#DIV/0!", A["table:formula"] = "of:=" + (F.v < 0 ? "-" : "") + "1/0"), A["office:string-value"] = "", A["office:value-type"] = "string", A["calcext:value-type"] = "error");
            break;
          case "s":
          case "str":
            M = F.v == null ? "" : F.v, A["office:value-type"] = "string";
            break;
          case "d":
            M = F.w || $r(F.v, l).toISOString(), A["office:value-type"] = "date", A["office:date-value"] = $r(F.v, l).toISOString(), A["table:style-name"] = "ce1";
            break;
          default:
            h.push(r);
            continue;
        }
        var D = e(M);
        if (F.l && F.l.Target) {
          var H = F.l.Target;
          H = H.charAt(0) == "#" ? "#" + rh(H.slice(1)) : H, H.charAt(0) != "#" && !H.match(/^\w+:/) && (H = "../" + H), D = Ae("text:a", D, { "xlink:href": H.replace(/&/g, "&amp;") });
        }
        o[F.z] && (A["table:style-name"] = "ce" + o[F.z].slice(1));
        var K = Ae("text:p", D, {});
        if (F.c) {
          for (var ee = "", de = "", Pe = {}, me = 0; me < F.c.length; ++me) !ee && F.c[me].a && (ee = F.c[me].a), de += "<text:p>" + e(F.c[me].t) + "</text:p>";
          F.c.hidden || (Pe["office:display"] = true), K = Ae("office:annotation", de, Pe) + K;
        }
        h.push("          " + Ae("table:table-cell", K, A) + `
`);
      }
      h.push(`        </table:table-row>
`);
    }
    return (i.Workbook || {}).Names && h.push(hl(i.Workbook.Names, i.SheetNames, s)), h.push(`      </table:table>
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
          ln(d), d.ods = s;
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
    var o = {}, l = 69;
    return i.SheetNames.map(function(h) {
      return i.Sheets[h];
    }).forEach(function(h) {
      if (h) {
        var v = h["!data"] != null;
        if (h["!ref"]) for (var d = wt(h["!ref"]), x = 0; x <= d.e.r; ++x) for (var _ = 0; _ <= d.e.c; ++_) {
          var y = v ? (h["!data"][x] || [])[_] : h[yr({ r: x, c: _ })];
          if (!(!y || !y.z || y.z.toLowerCase() == "general") && !o[y.z]) {
            var m = p4(y.z, "N" + l);
            m && (o[y.z] = "N" + l, ++l, n.push(m + `
`));
          }
        }
      }
    }), n.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), Gr(o).forEach(function(h) {
      n.push('<style:style style:name="ce' + o[h].slice(1) + '" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="' + o[h] + `"/>
`);
    }), n.push(` </office:automatic-styles>
`), o;
  };
  return function(i, s) {
    var f = [at], o = Ki({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }), l = Ki({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
    s.bookType == "fods" ? (f.push("<office:document" + o + l + `>
`), f.push(lu().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
`)) : f.push("<office:document-content" + o + `>
`);
    var h = a(f, i);
    f.push(`  <office:body>
`), f.push(`    <office:spreadsheet>
`), ((i.Workbook || {}).WBProps || {}).date1904 && f.push(`      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">
        <table:null-date table:date-value="1904-01-01"/>
      </table:calculation-settings>
`);
    for (var v = 0; v != i.SheetNames.length; ++v) f.push(t(i.Sheets[i.SheetNames[v]], i, v, s, h, ((i.Workbook || {}).WBProps || {}).date1904));
    return (i.Workbook || {}).Names && f.push(hl(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function _h(e, r) {
  if (r.bookType == "fods") return dl(e, r);
  var t = Zf(), a = "", n = [], i = [];
  return a = "mimetype", hr(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", hr(t, a, dl(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", hr(t, a, x4(e, r)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", hr(t, a, at + lu()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", hr(t, a, Ox(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", hr(t, a, Ix(n)), t;
}
var tt = (function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
})();
function za(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ya(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Br(Na(e));
}
function Ht(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Xt(Oa(e));
}
function hn(e) {
  for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
  var a = new Uint8Array(r), n = 0;
  for (t = 0; t < e.length; ++t) {
    var i = e[t], s = i.length;
    if (s < 250) for (var f = 0; f < s; ++f) a[n++] = i[f];
    else a.set(i, n), n += s;
  }
  return a;
}
function Wi(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function v4(e, r) {
  for (var t = (e[r + 15] & 127) << 7 | e[r + 14] >> 1, a = e[r + 14] & 1, n = r + 13; n >= r; --n) a = a * 256 + e[n];
  return (e[r + 15] & 128 ? -a : a) * Math.pow(10, t - 6176);
}
function m4(e, r, t) {
  var a = Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 16, n = t / Math.pow(10, a - 6176);
  e[r + 15] |= a >> 7, e[r + 14] |= (a & 127) << 1;
  for (var i = 0; n >= 1; ++i, n /= 256) e[r + i] = n & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function es(e, r) {
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
function wh(e) {
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(es(e, r));
  return t;
}
function yh(e) {
  return hn(e.map(function(r) {
    return er(r);
  }));
}
function dr(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function De(e) {
  for (var r = [], t = { l: 0 }; t.l < e.length; ) {
    var a = t.l, n = es(e, t), i = n & 7;
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
          var o = es(e, t);
          s = e[tt](t.l, t.l + o), t.l += o;
        }
        break;
      case 5:
        s = e[tt](f, f + 4), t.l = f + 4;
        break;
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a));
    }
    var l = { data: s, type: i };
    r[n] == null && (r[n] = []), r[n].push(l);
  }
  return r;
}
function ar(e) {
  var r = [];
  return e.forEach(function(t, a) {
    a != 0 && t.forEach(function(n) {
      n.data && (r.push(er(a * 8 + n.type)), n.type == 2 && r.push(er(n.data.length)), r.push(n.data));
    });
  }), hn(r);
}
function dn(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function rs(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = es(e, a), i = De(e[tt](a.l, a.l + n));
    a.l += n;
    var s = { id: dr(i[1][0].data), messages: [] };
    i[2].forEach(function(f) {
      var o = De(f.data), l = dr(o[3][0].data);
      s.messages.push({ meta: o, data: e[tt](a.l, a.l + l) }), a.l += l;
    }), (r = i[3]) != null && r[0] && (s.merge = dr(i[3][0].data) >>> 0 > 0), t.push(s);
  }
  return t;
}
function ai(e) {
  var r = [];
  return e.forEach(function(t) {
    var a = [[], [{ data: er(t.id), type: 0 }], []];
    t.merge != null && (a[3] = [{ data: er(+!!t.merge), type: 0 }]);
    var n = [];
    t.messages.forEach(function(s) {
      n.push(s.data), s.meta[3] = [{ type: 0, data: er(s.data.length) }], a[2].push({ data: ar(s.meta), type: 2 });
    });
    var i = ar(a);
    r.push(er(i.length)), r.push(i), n.forEach(function(s) {
      return r.push(s);
    });
  }), hn(r);
}
function g4(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = { l: 0 }, a = es(r, t), n = [], i = t.l; i < r.length; ) {
    var s = r[i] & 3;
    if (s == 0) {
      var f = r[i++] >> 2;
      if (f < 60) ++f;
      else {
        var o = f - 59;
        f = r[i], o > 1 && (f |= r[i + 1] << 8), o > 2 && (f |= r[i + 2] << 16), o > 3 && (f |= r[i + 3] << 24), f >>>= 0, f++, i += o;
      }
      n.push(r[tt](i, i + f)), i += f;
      continue;
    } else {
      var l = 0, h = 0;
      if (s == 1 ? (h = (r[i] >> 2 & 7) + 4, l = (r[i++] & 224) << 3, l |= r[i++]) : (h = (r[i++] >> 2) + 1, s == 2 ? (l = r[i] | r[i + 1] << 8, i += 2) : (l = (r[i] | r[i + 1] << 8 | r[i + 2] << 16 | r[i + 3] << 24) >>> 0, i += 4)), l == 0) throw new Error("Invalid offset 0");
      for (var v = n.length - 1, d = l; v >= 0 && d >= n[v].length; ) d -= n[v].length, --v;
      if (v < 0) if (d == 0) d = n[v = 0].length;
      else throw new Error("Invalid offset beyond length");
      if (h < d) n.push(n[v][tt](n[v].length - d, n[v].length - d + h));
      else {
        for (d > 0 && (n.push(n[v][tt](n[v].length - d)), h -= d), ++v; h >= n[v].length; ) n.push(n[v]), h -= n[v].length, ++v;
        h && n.push(n[v][tt](0, h));
      }
      n.length > 25 && (n = [hn(n)]);
    }
  }
  for (var x = 0, _ = 0; _ < n.length; ++_) x += n[_].length;
  if (x != a) throw new Error("Unexpected length: ".concat(x, " != ").concat(a));
  return n;
}
function ts(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, g4(a, e[tt](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : hn(r);
}
function ni(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = er(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[tt](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return hn(r);
}
var _4 = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function kh(e, r, t, a, n) {
  var i, s, f, o, l = r & 255, h = r >> 8, v = h >= 5 ? n : a;
  e: if (t & (h > 4 ? 8 : 4) && e.t == "n" && l == 7) {
    var d = (i = v[7]) != null && i[0] ? dr(v[7][0].data) : -1;
    if (d == -1) break e;
    var x = (s = v[15]) != null && s[0] ? dr(v[15][0].data) : -1, _ = (f = v[16]) != null && f[0] ? dr(v[16][0].data) : -1, y = (o = v[40]) != null && o[0] ? dr(v[40][0].data) : -1, m = e.v, g = m;
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
function w4(e, r, t, a) {
  var n = za(e), i = n.getUint32(4, true), s = -1, f = -1, o = -1, l = NaN, h = 0, v = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
  i & 2 && (o = n.getUint32(d, true), d += 4), d += Wi(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(d, true), d += 4), d += Wi(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(d, true), d += 4), i & 32 && (l = n.getFloat64(d, true), d += 8), i & 64 && (v.setTime(v.getTime() + (h = n.getFloat64(d, true)) * 1e3), d += 8), t > 1 && (i = n.getUint32(8, true) >>> 16, i & 255 && (o == -1 && (o = n.getUint32(d, true)), d += 4));
  var x, _ = e[t >= 4 ? 1 : 2];
  switch (_) {
    case 0:
      return;
    case 2:
      x = { t: "n", v: l };
      break;
    case 3:
      x = { t: "s", v: r.sst[f] };
      break;
    case 5:
      (a == null ? void 0 : a.cellDates) ? x = { t: "d", v } : x = { t: "n", v: h / 86400 + 35430, z: ir[14] };
      break;
    case 6:
      x = { t: "b", v: l > 0 };
      break;
    case 7:
      x = { t: "n", v: l };
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
  return o > -1 && kh(x, _ | t << 8, i, r.ofmt[o], r.nfmt[o]), _ == 7 && (x.v /= 86400), x;
}
function y4(e, r, t) {
  var a = za(e);
  a.getUint32(4, true);
  var n = a.getUint32(8, true), i = 12, s = -1, f = -1, o = -1, l = NaN, h = NaN, v = 0, d = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (l = v4(e, i), i += 16), n & 2 && (h = a.getFloat64(i, true), i += 8), n & 4 && (d.setTime(d.getTime() + (v = a.getFloat64(i, true)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, true), i += 4), n & 16 && (s = a.getUint32(i, true), i += 4), i += Wi(n & 480) * 4, n & 512 && (a.getUint32(i, true), i += 4), i += Wi(n & 1024) * 4, n & 2048 && (a.getUint32(i, true), i += 4);
  var x, _ = e[1];
  switch (_) {
    case 0:
      x = { t: "z" };
      break;
    case 2:
      x = { t: "n", v: l };
      break;
    case 3:
      x = { t: "s", v: r.sst[f] };
      break;
    case 5:
      (t == null ? void 0 : t.cellDates) ? x = { t: "d", v: d } : x = { t: "n", v: v / 86400 + 35430, z: ir[14] };
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
      x = { t: "n", v: l };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[tt](0, 4)));
  }
  if (i += Wi(n & 4096) * 4, n & 516096 && (o == -1 && (o = a.getUint32(i, true)), i += 4), n & 524288) {
    var m = a.getUint32(i, true);
    i += 4, r.cmnt[m] && (x.c = S4(r.cmnt[m]));
  }
  return o > -1 && kh(x, _ | 1280, n >> 13, r.ofmt[o], r.nfmt[o]), _ == 7 && (x.v /= 86400), x;
}
function mf(e, r) {
  var t = new Uint8Array(32), a = za(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && ua(e.z)) {
        t[1] = 5, a.setFloat64(n, (Xa(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
        break;
      } else t[1] = 2, m4(t, n, e.v), i |= 1, n += 16;
      break;
    case "b":
      t[1] = 6, a.setFloat64(n, e.v ? 1 : 0, true), i |= 2, n += 8;
      break;
    case "s":
      {
        var s = e.v == null ? "" : String(e.v);
        if (e.l) {
          var f = r.rsst.findIndex(function(l) {
            var h;
            return l.v == s && l.l == ((h = e.l) == null ? void 0 : h.Target);
          });
          f == -1 && (r.rsst[f = r.rsst.length] = { v: s, l: e.l.Target }), t[1] = 9, a.setUint32(n, f, true), i |= 16, n += 4;
        } else {
          var o = r.sst.indexOf(s);
          o == -1 && (r.sst[o = r.sst.length] = s), t[1] = 3, a.setUint32(n, o, true), i |= 8, n += 4;
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
  return e.c && (r.cmnt.push(b4(e.c)), a.setUint32(n, r.cmnt.length - 1, true), i |= 524288, n += 4), a.setUint32(8, i, true), t[tt](0, n);
}
function gf(e, r) {
  var t = new Uint8Array(32), a = za(t), n = 12, i = 0, s = "";
  switch (t[0] = 4, e.t) {
    case "n":
      break;
    case "b":
      break;
    case "s":
      if (s = e.v == null ? "" : String(e.v), e.l) {
        var f = r.rsst.findIndex(function(l) {
          var h;
          return l.v == s && l.l == ((h = e.l) == null ? void 0 : h.Target);
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
        var o = r.sst.indexOf(s);
        o == -1 && (r.sst[o = r.sst.length] = s), t[1] = 3, a.setUint32(n, o, true), i |= 16, n += 4;
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
function k4(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return w4(e, r, e[0], t);
    case 5:
      return y4(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function br(e) {
  var r = De(e);
  return dr(r[1][0].data);
}
function It(e) {
  return ar([[], [{ type: 0, data: er(e) }]]);
}
function Ct(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? wh(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: yh(a) }]);
}
function La(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? wh(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: yh(a.filter(function(n) {
    return n != r;
  })) }];
}
function yn(e, r) {
  var t = De(r.data), a = dr(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, o, l = De(s.data);
    if (l[1]) {
      var h = dr(l[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[h] = ya(l[3][0].data);
          break;
        case 8:
          {
            var v = e[br(l[9][0].data)][0], d = De(v.data), x = e[br(d[1][0].data)][0], _ = dr(x.meta[1][0].data);
            if (_ != 2001) throw new Error("2000 unexpected reference to ".concat(_));
            var y = De(x.data), m = { v: y[3].map(function(E) {
              return ya(E.data);
            }).join("") };
            i[h] = m;
            e: if ((f = y == null ? void 0 : y[11]) != null && f[0]) {
              var g = (o = De(y[11][0].data)) == null ? void 0 : o[1];
              if (!g) break e;
              g.forEach(function(E) {
                var A, M, G, F = De(E.data);
                if ((A = F[2]) != null && A[0]) {
                  var U = e[br((M = F[2]) == null ? void 0 : M[0].data)][0], D = dr(U.meta[1][0].data);
                  switch (D) {
                    case 2032:
                      var H = De(U.data);
                      (G = H == null ? void 0 : H[2]) != null && G[0] && !m.l && (m.l = ya(H[2][0].data));
                      break;
                    case 2039:
                      break;
                    default:
                      console.log("unrecognized ObjectAttribute type ".concat(D));
                  }
                }
              });
            }
          }
          break;
        case 2:
          i[h] = De(l[6][0].data);
          break;
        case 3:
          i[h] = De(l[5][0].data);
          break;
        case 10:
          {
            var S = e[br(l[10][0].data)][0];
            i[h] = Eh(e, S.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function E4(e, r) {
  var t, a, n, i, s, f, o, l, h, v, d, x, _, y, m = De(e), g = dr(m[1][0].data) >>> 0, S = dr(m[2][0].data) >>> 0, E = ((a = (t = m[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && dr(m[8][0].data) > 0 || false, A, M;
  if ((i = (n = m[7]) == null ? void 0 : n[0]) != null && i.data && r != 0) A = (f = (s = m[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, M = (l = (o = m[6]) == null ? void 0 : o[0]) == null ? void 0 : l.data;
  else if ((v = (h = m[4]) == null ? void 0 : h[0]) != null && v.data && r != 1) A = (x = (d = m[4]) == null ? void 0 : d[0]) == null ? void 0 : x.data, M = (y = (_ = m[3]) == null ? void 0 : _[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var G = E ? 4 : 1, F = za(A), U = [], D = 0; D < A.length / 2; ++D) {
    var H = F.getUint16(D * 2, true);
    H < 65535 && U.push([D, H]);
  }
  if (U.length != S) throw "Expected ".concat(S, " cells, found ").concat(U.length);
  var K = [];
  for (D = 0; D < U.length - 1; ++D) K[U[D][0]] = M[tt](U[D][1] * G, U[D + 1][1] * G);
  return U.length >= 1 && (K[U[U.length - 1][0]] = M[tt](U[U.length - 1][1] * G)), { R: g, cells: K };
}
function T4(e, r) {
  var t, a = De(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (dr(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = dn(a[5], function(s) {
    return E4(s, n);
  });
  return { nrows: dr(a[4][0].data) >>> 0, data: i.reduce(function(s, f) {
    return s[f.R] || (s[f.R] = []), f.cells.forEach(function(o, l) {
      if (s[f.R][l]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(l));
      s[f.R][l] = o;
    }), s;
  }, []) };
}
function Eh(e, r) {
  var t, a, n, i, s, f, o, l, h, v, d = { t: "", a: "" }, x = De(r);
  if ((a = (t = x == null ? void 0 : x[1]) == null ? void 0 : t[0]) != null && a.data && (d.t = ya((i = (n = x == null ? void 0 : x[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = x == null ? void 0 : x[3]) == null ? void 0 : s[0]) != null && f.data) {
    var _ = e[br((l = (o = x == null ? void 0 : x[3]) == null ? void 0 : o[0]) == null ? void 0 : l.data)][0], y = De(_.data);
    (v = (h = y[1]) == null ? void 0 : h[0]) != null && v.data && (d.a = ya(y[1][0].data));
  }
  return (x == null ? void 0 : x[4]) && (d.replies = [], x[4].forEach(function(m) {
    var g = e[br(m.data)][0];
    d.replies.push(Eh(e, g.data));
  })), d;
}
function S4(e) {
  var r = [];
  return r.push({ t: e.t || "", a: e.a, T: e.replies && e.replies.length > 0 }), e.replies && e.replies.forEach(function(t) {
    r.push({ t: t.t || "", a: t.a, T: true });
  }), r;
}
function b4(e) {
  for (var r = { a: "", t: "", replies: [] }, t = 0; t < e.length; ++t) t == 0 ? (r.a = e[t].a, r.t = e[t].t) : r.replies.push({ a: e[t].a, t: e[t].t });
  return r;
}
function F4(e, r, t, a) {
  var n, i, s, f, o, l, h, v, d, x, _, y, m, g, S = De(r.data), E = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (E.e.r = (dr(S[6][0].data) >>> 0) - 1, E.e.r < 0) throw new Error("Invalid row varint ".concat(S[6][0].data));
  if (E.e.c = (dr(S[7][0].data) >>> 0) - 1, E.e.c < 0) throw new Error("Invalid col varint ".concat(S[7][0].data));
  t["!ref"] = xr(E);
  var A = t["!data"] != null, M = t, G = De(S[4][0].data), F = _4();
  (n = G[4]) != null && n[0] && (F.sst = yn(e, e[br(G[4][0].data)][0])), (i = G[6]) != null && i[0] && (F.fmla = yn(e, e[br(G[6][0].data)][0])), (s = G[11]) != null && s[0] && (F.ofmt = yn(e, e[br(G[11][0].data)][0])), (f = G[12]) != null && f[0] && (F.ferr = yn(e, e[br(G[12][0].data)][0])), (o = G[17]) != null && o[0] && (F.rsst = yn(e, e[br(G[17][0].data)][0])), (l = G[19]) != null && l[0] && (F.cmnt = yn(e, e[br(G[19][0].data)][0])), (h = G[22]) != null && h[0] && (F.nfmt = yn(e, e[br(G[22][0].data)][0]));
  var U = De(G[3][0].data), D = 0;
  if (!((v = G[9]) != null && v[0])) throw "NUMBERS file missing row tree";
  var H = De(G[9][0].data)[1].map(function(me) {
    return De(me.data);
  });
  if (H.forEach(function(me) {
    D = dr(me[1][0].data);
    var ze = dr(me[2][0].data), ke = U[1][ze];
    if (!ke) throw "NUMBERS missing tile " + ze;
    var Be = De(ke.data), Qe = e[br(Be[2][0].data)][0], he = dr(Qe.meta[1][0].data);
    if (he != 6002) throw new Error("6001 unexpected reference to ".concat(he));
    var fr = T4(e, Qe);
    fr.data.forEach(function(Me, Te) {
      Me.forEach(function(ye, je) {
        var Ge = k4(ye, F, a);
        Ge && (A ? (M["!data"][D + Te] || (M["!data"][D + Te] = []), M["!data"][D + Te][je] = Ge) : t[gr(je) + Fr(D + Te)] = Ge);
      });
    }), D += fr.nrows;
  }), (d = G[13]) != null && d[0]) {
    var K = e[br(G[13][0].data)][0], ee = dr(K.meta[1][0].data);
    if (ee != 6144) throw new Error("Expected merge type 6144, found ".concat(ee));
    t["!merges"] = (x = De(K.data)) == null ? void 0 : x[1].map(function(me) {
      var ze = De(me.data), ke = za(De(ze[1][0].data)[1][0].data), Be = za(De(ze[2][0].data)[1][0].data);
      return { s: { r: ke.getUint16(0, true), c: ke.getUint16(2, true) }, e: { r: ke.getUint16(0, true) + Be.getUint16(0, true) - 1, c: ke.getUint16(2, true) + Be.getUint16(2, true) - 1 } };
    });
  }
  if (!((_ = t["!merges"]) != null && _.length) && ((y = S[47]) != null && y[0])) {
    var de = De(S[47][0].data);
    if ((m = de[2]) != null && m[0]) {
      var Pe = De(de[2][0].data);
      (g = Pe[3]) != null && g[0] && (t["!merges"] = dn(Pe[3], function(me) {
        var ze, ke, Be, Qe, he, fr = De(me), Me = De(fr[2][0].data), Te = De(Me[1][0].data);
        if ((ze = Te[1]) != null && ze[0]) {
          var ye = De(Te[1][0].data), je = dr(ye[1][0].data);
          if (je == 67) {
            var Ge = De(ye[40][0].data);
            if (!(!((ke = Ge[3]) != null && ke[0]) || !((Be = Ge[4]) != null && Be[0]))) {
              var Ze = De(Ge[3][0].data), P = De(Ge[4][0].data), W = dr(Ze[1][0].data), z = (Qe = Ze[2]) != null && Qe[0] ? dr(Ze[2][0].data) : W, X = dr(P[1][0].data), le = (he = P[2]) != null && he[0] ? dr(P[2][0].data) : X;
              return { s: { r: X, c: W }, e: { r: le, c: z } };
            }
          }
        }
      }).filter(function(me) {
        return me != null;
      }));
    }
  }
}
function A4(e, r, t) {
  var a = De(r.data), n = { "!ref": "A1" };
  (t == null ? void 0 : t.dense) && (n["!data"] = []);
  var i = e[br(a[2][0].data)], s = dr(i[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return F4(e, i[0], n, t), n;
}
function C4(e, r, t) {
  var a, n = De(r.data), i = { name: (a = n[1]) != null && a[0] ? ya(n[1][0].data) : "", sheets: [] }, s = dn(n[2], br);
  return s.forEach(function(f) {
    e[f].forEach(function(o) {
      var l = dr(o.meta[1][0].data);
      l == 6e3 && i.sheets.push(A4(e, o, t));
    });
  }), i;
}
function I4(e, r, t) {
  var a, n = To();
  n.Workbook = { WBProps: { date1904: true } };
  var i = De(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = dn(i[1], br);
  if (s.forEach(function(f) {
    e[f].forEach(function(o) {
      var l = dr(o.meta[1][0].data);
      if (l == 2) {
        var h = C4(e, o, t);
        h.sheets.forEach(function(v, d) {
          hs(n, v, d == 0 ? h.name : h.name + "_" + d, true);
        });
      }
    });
  }), n.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return n.bookType = "numbers", n;
}
function _f(e, r) {
  var t, a, n, i, s, f, o, l = {}, h = [];
  if (e.FullPaths.forEach(function(d) {
    if (d.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(d) {
    if (d.name.match(/\.iwa$/) && d.content[0] == 0) {
      var x;
      try {
        x = ts(d.content);
      } catch (y) {
        return console.log("?? " + d.content.length + " " + (y.message || y));
      }
      var _;
      try {
        _ = rs(x);
      } catch (y) {
        return console.log("## " + (y.message || y));
      }
      _.forEach(function(y) {
        l[y.id] = y.messages, h.push(y.id);
      });
    }
  }), !h.length) throw new Error("File has no messages");
  if ((n = (a = (t = l == null ? void 0 : l[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && dr(l[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var v = ((o = (f = (s = (i = l == null ? void 0 : l[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : o[0].data) && dr(l[1][0].meta[1][0].data) == 1 && l[1][0];
  if (v || h.forEach(function(d) {
    l[d].forEach(function(x) {
      var _ = dr(x.meta[1][0].data) >>> 0;
      if (_ == 1) if (!v) v = x;
      else throw new Error("Document has multiple roots");
    });
  }), !v) throw new Error("Cannot find Document root");
  return I4(l, v, r);
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
    var o = new Uint8Array(2 * e.length);
    o.set(s[7][0].data), s[7][0].data = o;
  }
  if (s[4][0].data.length < 2 * e.length) {
    var l = new Uint8Array(2 * e.length);
    l.set(s[4][0].data), s[4][0].data = l;
  }
  for (var h = za(s[7][0].data), v = 0, d = [], x = za(s[4][0].data), _ = 0, y = [], m = 4, g = 0; g < e.length; ++g) {
    if (e[g] == null || e[g].t == "z" && !((i = e[g].c) != null && i.length) || e[g].t == "e") {
      h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535);
      continue;
    }
    h.setUint16(g * 2, v / m, true), x.setUint16(g * 2, _ / m, true);
    var S, E;
    switch (e[g].t) {
      case "d":
        if (e[g].v instanceof Date) {
          S = mf(e[g], r), E = gf(e[g], r);
          break;
        }
        S = mf(e[g], r), E = gf(e[g], r);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        S = mf(e[g], r), E = gf(e[g], r);
        break;
      default:
        throw new Error("Unsupported value " + e[g]);
    }
    d.push(S), v += S.length, y.push(E), _ += E.length, ++f;
  }
  for (s[2][0].data = er(f), s[5][0].data = er(5); g < s[7][0].data.length / 2; ++g) h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535, true);
  return s[6][0].data = hn(d), s[3][0].data = hn(y), s[8] = [{ type: 0, data: er(1) }], s;
}
function Rf(e, r) {
  return { meta: [[], [{ type: 0, data: er(e) }]], data: r };
}
function Ia(e, r) {
  r.last || (r.last = 927262);
  for (var t = r.last; t < 2e6; ++t) if (!r[t]) return r[r.last = t] = e, t;
  throw new Error("Too many messages");
}
function O4(e) {
  var r = {}, t = [];
  return e.FileIndex.map(function(a, n) {
    return [a, e.FullPaths[n]];
  }).forEach(function(a) {
    var n = a[0], i = a[1];
    n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0 && rs(ts(n.content)).forEach(function(s) {
      t.push(s.id), r[s.id] = { deps: [], location: i, type: dr(s.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(a) {
    a.name.match(/\.iwa/) && a.content[0] == 0 && rs(ts(a.content)).forEach(function(n) {
      n.messages.forEach(function(i) {
        [5, 6].forEach(function(s) {
          i.meta[s] && i.meta[s].forEach(function(f) {
            r[n.id].deps.push(dr(f.data));
          });
        });
      });
    });
  }), r;
}
function Xs(e, r, t) {
  return ar([[], [{ type: 0, data: er(1) }], [], [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }], [], [], [], [], [], [{ type: 0, data: er(1) }]]);
}
function xl(e) {
  switch (e) {
    case 0:
      return Xs(99, 222, 171);
    case 1:
      return Xs(162, 197, 240);
    case 2:
      return Xs(255, 189, 189);
  }
  return Xs(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function N4(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = sr.read(r.numbers, { type: "base64" }), a = O4(t), n = Da(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = dn(De(n.messages[0].data)[1], br);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (P4(t, a, f + 1), n = Da(t, a, 1), i = dn(De(n.messages[0].data)[1], br)), B4(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function Mr(e, r, t, a) {
  var n = sr.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = rs(ts(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = ni(ai(i)), n.size = n.content.length;
}
function Da(e, r, t) {
  var a = sr.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = rs(ts(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function Pf(e, r, t) {
  e[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(r) }], [{ type: 2, data: Ht(t.replace(/-[\s\S]*$/, "")) }], [{ type: 2, data: Ht(t) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), e[1] = [{ type: 0, data: er(Math.max(r + 1, dr(e[1][0].data))) }];
}
function kn(e, r, t, a, n, i) {
  i || (i = Ia({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, sr.utils.cfb_add(e, s, ni(ai([{ id: i, messages: [Rf(r, ar(t))] }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Mr(e, n, 2, function(o) {
    var l = De(o.messages[0].data);
    Pf(l, i || 0, f), o.messages[0].data = ar(l);
  }), i;
}
function jt(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, l, h = De(f.data);
    return (o = h[3]) != null && o[0] ? ya(h[3][0].data) == n : !!((l = h[2]) != null && l[0] && ya(h[2][0].data) == n);
  }), s = De(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({ type: 2, data: ar([[], [{ type: 0, data: er(f) }]]) });
  }), e[3][i].data = ar(s);
}
function R4(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, l, h = De(f.data);
    return (o = h[3]) != null && o[0] ? ya(h[3][0].data) == n : !!((l = h[2]) != null && l[0] && ya(h[2][0].data) == n);
  }), s = De(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return dr(De(f.data)[1][0].data) != a;
  }), e[3][i].data = ar(s);
}
function P4(e, r, t) {
  var a = -1, n = -1, i = {};
  Mr(e, r, 1, function(o, l) {
    var h = De(o.messages[0].data);
    a = br(De(o.messages[0].data)[1][0].data), n = Ia({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, Ct(o, n), h[1].push({ type: 2, data: It(n) });
    var v = Da(e, r, a);
    v.id = n, r[1].location == r[n].location ? l.push(v) : Mr(e, r, n, function(d, x) {
      return x.push(v);
    }), o.messages[0].data = ar(h);
  });
  var s = -1;
  Mr(e, r, n, function(o, l) {
    for (var h = De(o.messages[0].data), v = 3; v <= 69; ++v) delete h[v];
    var d = dn(h[2], br);
    d.forEach(function(_) {
      return La(o, _);
    }), s = Ia({ deps: [n], location: r[d[0]].location, type: r[d[0]].type }, r), Ct(o, s), i[d[0]] = s, h[2] = [{ type: 2, data: It(s) }];
    var x = Da(e, r, d[0]);
    x.id = s, r[d[0]].location == r[n].location ? l.push(x) : (Mr(e, r, 2, function(_) {
      var y = De(_.messages[0].data);
      jt(y, r, n, s), _.messages[0].data = ar(y);
    }), Mr(e, r, s, function(_, y) {
      return y.push(x);
    })), o.messages[0].data = ar(h);
  });
  var f = -1;
  Mr(e, r, s, function(o, l) {
    for (var h = De(o.messages[0].data), v = De(h[1][0].data), d = 3; d <= 69; ++d) delete v[d];
    var x = br(v[2][0].data);
    v[2][0].data = It(i[x]), h[1][0].data = ar(v);
    var _ = br(h[2][0].data);
    La(o, _), f = Ia({ deps: [s], location: r[_].location, type: r[_].type }, r), Ct(o, f), i[_] = f, h[2][0].data = It(f);
    var y = Da(e, r, _);
    y.id = f, r[s].location == r[f].location ? l.push(y) : Mr(e, r, f, function(m, g) {
      return g.push(y);
    }), o.messages[0].data = ar(h);
  }), Mr(e, r, f, function(o, l) {
    var h, v, d = De(o.messages[0].data), x = ya(d[1][0].data), _ = x.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (d[1][0].data = Ht(_), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(M) {
      return delete d[M];
    }), d[45]) {
      var y = De(d[45][0].data), m = br(y[1][0].data);
      La(o, m), delete d[45];
    }
    if (d[70]) {
      var g = De(d[70][0].data);
      (h = g[2]) == null || h.forEach(function(M) {
        var G = De(M.data);
        [2, 3].map(function(F) {
          return G[F][0];
        }).forEach(function(F) {
          var U = De(F.data);
          if (U[8]) {
            var D = br(U[8][0].data);
            La(o, D);
          }
        });
      }), delete d[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function(M) {
      if (d[M]) {
        var G = br(d[M][0].data);
        delete d[M], La(o, G);
      }
    });
    var S = De(d[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(M) {
        var G;
        if ((G = S[M]) != null && G[0]) {
          var F = br(S[M][0].data), U = Ia({ deps: [f], location: r[F].location, type: r[F].type }, r);
          La(o, F), Ct(o, U), i[F] = U;
          var D = Da(e, r, F);
          if (D.id = U, r[F].location == r[f].location) l.push(D);
          else {
            r[U].location = r[F].location.replace(F.toString(), U.toString()), r[U].location == r[F].location && (r[U].location = r[U].location.replace(/\.iwa/, "-".concat(U, ".iwa"))), sr.utils.cfb_add(e, r[U].location, ni(ai([D])));
            var H = r[U].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Mr(e, r, 2, function(K) {
              var ee = De(K.messages[0].data);
              Pf(ee, U, H), jt(ee, r, f, U), K.messages[0].data = ar(ee);
            });
          }
          S[M][0].data = It(U);
        }
      });
      var E = De(S[1][0].data);
      (v = E[2]) == null || v.forEach(function(M) {
        var G = br(M.data), F = Ia({ deps: [f], location: r[G].location, type: r[G].type }, r);
        La(o, G), Ct(o, F), i[G] = F;
        var U = Da(e, r, G);
        if (U.id = F, r[G].location == r[f].location) l.push(U);
        else {
          r[F].location = r[G].location.replace(G.toString(), F.toString()), r[F].location == r[G].location && (r[F].location = r[F].location.replace(/\.iwa/, "-".concat(F, ".iwa"))), sr.utils.cfb_add(e, r[F].location, ni(ai([U])));
          var D = r[F].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Mr(e, r, 2, function(H) {
            var K = De(H.messages[0].data);
            Pf(K, F, D), jt(K, r, f, F), H.messages[0].data = ar(K);
          });
        }
        M.data = It(F);
      }), S[1][0].data = ar(E);
      var A = De(S[3][0].data);
      A[1].forEach(function(M) {
        var G = De(M.data), F = br(G[2][0].data), U = i[F];
        if (!i[F]) {
          U = Ia({ deps: [f], location: "", type: r[F].type }, r), r[U].location = "Root Entry/Index/Tables/Tile-".concat(U, ".iwa"), i[F] = U;
          var D = Da(e, r, F);
          D.id = U, La(o, F), Ct(o, U), sr.utils.cfb_add(e, "/Index/Tables/Tile-".concat(U, ".iwa"), ni(ai([D]))), Mr(e, r, 2, function(H) {
            var K = De(H.messages[0].data);
            K[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(U) }], [{ type: 2, data: Ht("Tables/Tile") }], [{ type: 2, data: Ht("Tables/Tile-".concat(U)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), K[1] = [{ type: 0, data: er(Math.max(U + 1, dr(K[1][0].data))) }], jt(K, r, f, U), H.messages[0].data = ar(K);
          });
        }
        G[2][0].data = It(U), M.data = ar(G);
      }), S[3][0].data = ar(A);
    }
    d[4][0].data = ar(S), o.messages[0].data = ar(d);
  });
}
function B4(e, r, t, a, n, i) {
  var s = [];
  Mr(e, r, i, function(l) {
    var h = De(l.messages[0].data);
    h[1] = [{ type: 2, data: Ht(a) }], s = dn(h[2], br), l.messages[0].data = ar(h);
  });
  var f = Da(e, r, s[0]), o = br(De(f.messages[0].data)[2][0].data);
  Mr(e, r, o, function(l, h) {
    return L4(e, r, t, l, h, o);
  });
}
function L4(e, r, t, a, n, i) {
  if (!t["!ref"]) throw new Error("Cannot export empty sheet to NUMBERS");
  var s = wt(t["!ref"]);
  s.s.r = s.s.c = 0;
  var f = false;
  s.e.c > 999 && (f = true, s.e.c = 999), s.e.r > 999999 && (f = true, s.e.r = 999999), f && console.error("Truncating to ".concat(xr(s)));
  var o = [];
  if (t["!data"]) o = t["!data"];
  else {
    for (var l = [], h = 0; h <= s.e.c; ++h) l[h] = gr(h);
    for (var v = 0; v <= s.e.r; ++v) {
      o[v] = [];
      var d = "" + (v + 1);
      for (h = 0; h <= s.e.c; ++h) {
        var x = t[l[h] + d];
        x && (o[v][h] = x);
      }
    }
  }
  var _ = { cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }], rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }], sst: ["~Sh33tJ5~"] }, y = De(a.messages[0].data);
  {
    y[6][0].data = er(s.e.r + 1), y[7][0].data = er(s.e.c + 1), delete y[46];
    var m = De(y[4][0].data);
    {
      var g = br(De(m[1][0].data)[2][0].data);
      Mr(e, r, g, function(Me, Te) {
        var ye, je = De(Me.messages[0].data);
        if ((ye = je == null ? void 0 : je[2]) != null && ye[0]) for (var Ge = 0; Ge < o.length; ++Ge) {
          var Ze = De(je[2][0].data);
          Ze[1][0].data = er(Ge), Ze[4][0].data = er(o[Ge].length), je[2][Ge] = { type: je[2][0].type, data: ar(Ze) };
        }
        Me.messages[0].data = ar(je);
      });
      var S = br(m[2][0].data);
      Mr(e, r, S, function(Me, Te) {
        for (var ye = De(Me.messages[0].data), je = 0; je <= s.e.c; ++je) {
          var Ge = De(ye[2][0].data);
          Ge[1][0].data = er(je), Ge[4][0].data = er(s.e.r + 1), ye[2][je] = { type: ye[2][0].type, data: ar(Ge) };
        }
        Me.messages[0].data = ar(ye);
      });
      var E = De(m[9][0].data);
      E[1] = [];
      var A = De(m[3][0].data);
      {
        var M = 256;
        A[2] = [{ type: 0, data: er(M) }];
        var G = br(De(A[1][0].data)[2][0].data), F = (function() {
          var Me = Da(e, r, 2), Te = De(Me.messages[0].data), ye = Te[3].filter(function(je) {
            return dr(De(je.data)[1][0].data) == G;
          });
          return (ye == null ? void 0 : ye.length) ? dr(De(ye[0].data)[12][0].data) : 0;
        })();
        sr.utils.cfb_del(e, r[G].location), Mr(e, r, 2, function(Me) {
          var Te = De(Me.messages[0].data);
          Te[3] = Te[3].filter(function(ye) {
            return dr(De(ye.data)[1][0].data) != G;
          }), R4(Te, r, i, G), Me.messages[0].data = ar(Te);
        }), La(a, G), A[1] = [];
        for (var U = Math.ceil((s.e.r + 1) / M), D = 0; D < U; ++D) {
          var H = Ia({ deps: [], location: "", type: 6002 }, r);
          r[H].location = "Root Entry/Index/Tables/Tile-".concat(H, ".iwa");
          for (var K = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min(s.e.r + 1, (D + 1) * M)) }], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min((D + 1) * M, s.e.r + 1) - D * M) }], [], [{ type: 0, data: er(5) }], [{ type: 0, data: er(1) }], [{ type: 0, data: er(1) }]], ee = D * M; ee <= Math.min(s.e.r, (D + 1) * M - 1); ++ee) {
            var de = D4(o[ee], _);
            de[1][0].data = er(ee - D * M), K[5].push({ data: ar(de), type: 2 });
          }
          A[1].push({ type: 2, data: ar([[], [{ type: 0, data: er(D) }], [{ type: 2, data: It(H) }]]) });
          var Pe = { id: H, messages: [Rf(6002, ar(K))] }, me = ni(ai([Pe]));
          sr.utils.cfb_add(e, "/Index/Tables/Tile-".concat(H, ".iwa"), me), Mr(e, r, 2, function(Me) {
            var Te = De(Me.messages[0].data);
            Te[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(H) }], [{ type: 2, data: Ht("Tables/Tile") }], [{ type: 2, data: Ht("Tables/Tile-".concat(H)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(F) }]]) }), Te[1] = [{ type: 0, data: er(Math.max(H + 1, dr(Te[1][0].data))) }], jt(Te, r, i, H), Me.messages[0].data = ar(Te);
          }), Ct(a, H), E[1].push({ type: 2, data: ar([[], [{ type: 0, data: er(D * M) }], [{ type: 0, data: er(D) }]]) });
        }
      }
      if (m[3][0].data = ar(A), m[9][0].data = ar(E), m[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var ze = Ia({ type: 6144, deps: [i], location: r[i].location }, r);
        n.push({ id: ze, messages: [Rf(6144, ar([[], t["!merges"].map(function(Me) {
          return { type: 2, data: ar([[], [{ type: 2, data: ar([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.s.r, Me.s.c]).buffer) }]]) }], [{ type: 2, data: ar([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.e.r - Me.s.r + 1, Me.e.c - Me.s.c + 1]).buffer) }]]) }]]) };
        })]))] }), m[13] = [{ type: 2, data: It(ze) }], Mr(e, r, 2, function(Me) {
          var Te = De(Me.messages[0].data);
          jt(Te, r, i, ze), Me.messages[0].data = ar(Te);
        }), Ct(a, ze);
      } else delete m[13];
      var ke = br(m[4][0].data);
      Mr(e, r, ke, function(Me) {
        var Te = De(Me.messages[0].data);
        Te[3] = [], _.sst.forEach(function(ye, je) {
          je != 0 && Te[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [{ type: 2, data: Ht(ye) }]]) });
        }), Me.messages[0].data = ar(Te);
      });
      var Be = br(m[17][0].data);
      if (Mr(e, r, Be, function(Me) {
        var Te = De(Me.messages[0].data);
        Te[3] = [];
        var ye = [904980, 903835, 903815, 903845];
        _.rsst.forEach(function(je, Ge) {
          if (Ge != 0) {
            var Ze = [[], [{ type: 0, data: new Uint8Array([5]) }], [], [{ type: 2, data: Ht(je.v) }]];
            Ze[10] = [{ type: 0, data: new Uint8Array([1]) }], Ze[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], Ze[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], Ze[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], Ze[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], Ze[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], Ze[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var P = Ia({ deps: [], location: "", type: 2001 }, r), W = [];
            if (je.l) {
              var z = kn(e, 2032, [[], [], [{ type: 2, data: Ht(je.l) }]], "/Index/Tables/DataList", r);
              Ze[11] = [];
              var X = [[], []];
              X[1] || (X[1] = []), X[1].push({ type: 2, data: ar([[], [{ type: 0, data: er(0) }], [{ type: 2, data: It(z) }]]) }), Ze[11][0] = { type: 2, data: ar(X) }, W.push(z);
            }
            kn(e, 2001, Ze, "/Index/Tables/DataList", r, P), Mr(e, r, P, function(O) {
              ye.forEach(function(Ce) {
                return Ct(O, Ce);
              }), W.forEach(function(Ce) {
                return Ct(O, Ce);
              });
            });
            var le = kn(e, 6218, [[], [{ type: 2, data: It(P) }], [], [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]], "/Index/Tables/DataList", r);
            Mr(e, r, le, function(O) {
              return Ct(O, P);
            }), Te[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [{ type: 2, data: It(le) }]]) }), Ct(Me, le), Mr(e, r, 2, function(O) {
              var Ce = De(O.messages[0].data);
              jt(Ce, r, Be, le), jt(Ce, r, le, P), jt(Ce, r, P, W), jt(Ce, r, P, ye), O.messages[0].data = ar(Ce);
            });
          }
        }), Me.messages[0].data = ar(Te);
      }), _.cmnt.length > 1) {
        var Qe = br(m[19][0].data), he = {}, fr = 0;
        Mr(e, r, Qe, function(Me) {
          var Te = De(Me.messages[0].data);
          Te[3] = [], _.cmnt.forEach(function(ye, je) {
            if (je != 0) {
              var Ge = [];
              ye.replies && ye.replies.forEach(function(W) {
                he[W.a || ""] || (he[W.a || ""] = kn(e, 212, [[], [{ type: 2, data: Ht(W.a || "") }], [{ type: 2, data: xl(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
                var z = he[W.a || ""], X = kn(e, 3056, [[], [{ type: 2, data: Ht(W.t || "") }], [{ type: 2, data: ar([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: It(z) }]], "/Index/Tables/DataList", r);
                Mr(e, r, X, function(le) {
                  return Ct(le, z);
                }), Ge.push(X), Mr(e, r, 2, function(le) {
                  var O = De(le.messages[0].data);
                  jt(O, r, X, z), le.messages[0].data = ar(O);
                });
              }), he[ye.a || ""] || (he[ye.a || ""] = kn(e, 212, [[], [{ type: 2, data: Ht(ye.a || "") }], [{ type: 2, data: xl(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
              var Ze = he[ye.a || ""], P = kn(e, 3056, [[], [{ type: 2, data: Ht(ye.t || "") }], [{ type: 2, data: ar([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: It(Ze) }], Ge.map(function(W) {
                return { type: 2, data: It(W) };
              }), [{ type: 2, data: ar([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(0) }]]) }]], "/Index/Tables/DataList", r);
              Mr(e, r, P, function(W) {
                Ct(W, Ze), Ge.forEach(function(z) {
                  return Ct(W, z);
                });
              }), Te[3].push({ type: 2, data: ar([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [], [{ type: 2, data: It(P) }]]) }), Ct(Me, P), Mr(e, r, 2, function(W) {
                var z = De(W.messages[0].data);
                jt(z, r, Qe, P), jt(z, r, P, Ze), Ge.length && jt(z, r, P, Ge), W.messages[0].data = ar(z);
              });
            }
          }), Te[2][0].data = er(_.cmnt.length + 1), Me.messages[0].data = ar(Te);
        });
      }
    }
    y[4][0].data = ar(m);
  }
  a.messages[0].data = ar(y);
}
function Th(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function wo(e) {
  Th([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function yo(e) {
  Th([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e);
}
function M4(e) {
  return wr.WS.indexOf(e) > -1 ? "sheet" : e == wr.CS ? "chart" : e == wr.DS ? "dialog" : e == wr.MS ? "macro" : e && e.length ? e : "sheet";
}
function U4(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, M4(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function W4(e, r, t, a, n, i, s, f) {
  if (!(!e || !e["!legdrawel"])) {
    var o = Zn(e["!legdrawel"].Target, a), l = Kt(t, o, true);
    l && Lg(Br(l), e, f || []);
  }
}
function H4(e, r, t, a, n, i, s, f, o, l, h, v) {
  try {
    i[a] = Ri(Kt(e, t, true), r);
    var d = ft(e, r), x;
    switch (f) {
      case "sheet":
        x = sk(d, r, n, o, i[a], l, h, v);
        break;
      case "chart":
        if (x = fk(d, r, n, o, i[a], l, h, v), !x || !x["!drawel"]) break;
        var _ = Zn(x["!drawel"].Target, r), y = $i(_), m = Bg(Kt(e, _, true), Ri(Kt(e, y, true), _)), g = Zn(m, _), S = $i(g);
        x = Cy(Kt(e, g, true), g, o, Ri(Kt(e, S, true), g), l, x);
        break;
      case "macro":
        x = ok(d, r, n, o, i[a], l, h, v);
        break;
      case "dialog":
        x = ck(d, r, n, o, i[a], l, h, v);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = x;
    var E = [], A = [];
    i && i[a] && Gr(i[a]).forEach(function(M) {
      var G = "";
      if (i[a][M].Type == wr.CMNT) {
        if (G = Zn(i[a][M].Target, r), E = hk(ft(e, G, true), G, o), !E || !E.length) return;
        Zc(x, E, false);
      }
      i[a][M].Type == wr.TCMNT && (G = Zn(i[a][M].Target, r), A = A.concat(Hg(ft(e, G, true), o)));
    }), A && A.length && Zc(x, A, true, o.people || []), W4(x, f, e, r, n, o, l, E);
  } catch (M) {
    if (o.WTF) throw M;
  }
}
function ia(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function V4(e, r) {
  if (ci(), r = r || {}, wo(r), fa(e, "META-INF/manifest.xml") || fa(e, "objectdata.xml")) return ll(e, r);
  if (fa(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof _f < "u") {
      if (e.FileIndex) return _f(e, r);
      var t = sr.utils.cfb_new();
      return gc(e).forEach(function(me) {
        hr(t, me, Rd(e, me));
      }), _f(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!fa(e, "[Content_Types].xml")) {
    if (fa(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (fa(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = sr.find(e, "Index.zip");
    if (a) return r = Vr(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? ii(new Uint8Array(a.content), r) : ii(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = gc(e), i = Fx(Kt(e, "[Content_Types].xml")), s = false, f, o;
  if (i.workbooks.length === 0 && (o = "xl/workbook.xml", ft(e, o, true) && i.workbooks.push(o)), i.workbooks.length === 0) {
    if (o = "xl/workbook.bin", !ft(e, o, true)) throw new Error("Could not find workbook");
    i.workbooks.push(o), s = true;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = true);
  var l = {}, h = {};
  if (!r.bookSheets && !r.bookProps) {
    if (Bi = [], i.sst) try {
      Bi = uk(ft(e, ia(i.sst)), i.sst, r);
    } catch (me) {
      if (r.WTF) throw me;
    }
    r.cellStyles && i.themes.length && (l = Xu(Kt(e, i.themes[0].replace(/^\//, ""), true) || "", r)), i.style && (h = lk(ft(e, ia(i.style)), i.style, l, r));
  }
  i.links.map(function(me) {
    try {
      var ze = Ri(Kt(e, $i(ia(me))), me);
      return xk(ft(e, ia(me)), ze, me, r);
    } catch {
    }
  });
  var v = ik(ft(e, ia(i.workbooks[0])), i.workbooks[0], r), d = {}, x = "";
  i.coreprops.length && (x = ft(e, ia(i.coreprops[0]), true), x && (d = uu(x)), i.extprops.length !== 0 && (x = ft(e, ia(i.extprops[0]), true), x && Nx(x, d, r)));
  var _ = {};
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (x = Kt(e, ia(i.custprops[0]), true), x && (_ = Px(x, r)));
  var y = {};
  if ((r.bookSheets || r.bookProps) && (v.Sheets ? f = v.Sheets.map(function(ze) {
    return ze.name;
  }) : d.Worksheets && d.SheetNames.length > 0 && (f = d.SheetNames), r.bookProps && (y.Props = d, y.Custprops = _), r.bookSheets && typeof f < "u" && (y.SheetNames = f), r.bookSheets ? y.SheetNames : r.bookProps)) return y;
  f = {};
  var m = {};
  r.bookDeps && i.calcchain && (m = dk(ft(e, ia(i.calcchain)), i.calcchain));
  var g = 0, S = {}, E, A;
  {
    var M = v.Sheets;
    d.Worksheets = M.length, d.SheetNames = [];
    for (var G = 0; G != M.length; ++G) d.SheetNames[G] = M[G].name;
  }
  var F = s ? "bin" : "xml", U = i.workbooks[0].lastIndexOf("/"), D = (i.workbooks[0].slice(0, U + 1) + "_rels/" + i.workbooks[0].slice(U + 1) + ".rels").replace(/^\//, "");
  fa(e, D) || (D = "xl/_rels/workbook." + F + ".rels");
  var H = Ri(Kt(e, D, true), D.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = pk(ft(e, ia(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = Vg(ft(e, ia(i.people[0])), r)), H && (H = U4(H, v.Sheets));
  var K = ft(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (g = 0; g != d.Worksheets; ++g) {
    var ee = "sheet";
    if (H && H[g] ? (E = "xl/" + H[g][1].replace(/[\/]?xl\//, ""), fa(e, E) || (E = H[g][1]), fa(e, E) || (E = D.replace(/_rels\/[\S\s]*$/, "") + H[g][1]), ee = H[g][2]) : (E = "xl/worksheets/sheet" + (g + 1 - K) + "." + F, E = E.replace(/sheet0\./, "sheet.")), A = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
      case "number":
        if (g != r.sheets) continue e;
        break;
      case "string":
        if (d.SheetNames[g].toLowerCase() != r.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(r.sheets)) {
          for (var de = false, Pe = 0; Pe != r.sheets.length; ++Pe) typeof r.sheets[Pe] == "number" && r.sheets[Pe] == g && (de = 1), typeof r.sheets[Pe] == "string" && r.sheets[Pe].toLowerCase() == d.SheetNames[g].toLowerCase() && (de = 1);
          if (!de) continue e;
        }
    }
    H4(e, E, A, d.SheetNames[g], g, S, f, ee, r, v, l, h);
  }
  return y = { Directory: i, Workbook: v, Props: d, Custprops: _, Deps: m, Sheets: f, SheetNames: d.SheetNames, Strings: Bi, Styles: h, Themes: l, SSF: Vr(ir) }, r && r.bookFiles && (e.files ? (y.keys = n, y.files = e.files) : (y.keys = [], y.files = {}, e.FullPaths.forEach(function(me, ze) {
    me = me.replace(/^Root Entry[\/]/, ""), y.keys.push(me), y.files[me] = e.FileIndex[ze];
  }))), r && r.bookVBA && (i.vba.length > 0 ? y.vbaraw = ft(e, ia(i.vba[0]), true) : i.defaults && i.defaults.bin === $g && (y.vbaraw = ft(e, "xl/vbaProject.bin", true))), y.bookType = s ? "xlsb" : "xlsx", y;
}
function X4(e, r) {
  var t = r || {}, a = "Workbook", n = sr.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (sm(n.content), a = "/!DataSpaces/DataSpaceMap", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = om(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = cm(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    um(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = hm(n.content);
  if (a = "/EncryptedPackage", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function K4(e, r) {
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Li ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = true, n = oo();
  yo(r = r || {});
  var i = Zf(), s = "", f = 0;
  if (r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, hu(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], l = 0; l < e.SheetNames.length; ++l) (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, pu(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, vu(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, hr(i, s, Fy(f - 1, r, e, v)), n.sheets.push(s), Rr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, wr.WS[0]), d) {
      var _ = d["!comments"], y = false, m = "";
      if (_ && _.length > 0) {
        var g = false;
        _.forEach(function(E) {
          E[1].forEach(function(A) {
            A.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, ju(_, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, zg(_)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Ku(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, $i(s), ri(v));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, im(r.Strings)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, nk(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml";
  var S = po(e.Themes, r);
  return hr(i, s, S), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, cg(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Cg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Gu(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", cu(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function j4(e, r) {
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Li ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = Zg.indexOf(r.bookType) > -1, n = oo();
  yo(r = r || {});
  var i = Zf(), s = "", f = 0;
  if (r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, hu(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], l = 0; l < e.SheetNames.length; ++l) (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, pu(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, vu(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, hr(i, s, xw(f - 1, r, e, v)), n.sheets.push(s), Rr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, wr.WS[0]), d) {
      var _ = d["!comments"], y = false, m = "";
      if (_ && _.length > 0) {
        var g = false;
        _.forEach(function(S) {
          S[1].forEach(function(E) {
            E.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, ju(_, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, Wg(_)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Ku(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, $i(s), ri(v));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, em(r.Strings, r)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, Vy(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml", hr(i, s, po(e.Themes, r)), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, Hm(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Dg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Gu(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", cu(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function ko(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = ra(e.slice(0, 12));
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
function G4(e, r) {
  return sr.find(e, "EncryptedPackage") ? X4(e, r) : uh(e, r);
}
function z4(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t = Ml(a, n), V4(t, n);
}
function Sh(e, r) {
  var t = 0;
  e: for (; t < e.length; ) switch (e.charCodeAt(t)) {
    case 10:
    case 13:
    case 32:
      ++t;
      break;
    case 60:
      return Of(e.slice(t), r);
    default:
      break e;
  }
  return fi.to_workbook(e, r);
}
function $4(e, r) {
  var t = "", a = ko(e, r);
  switch (r.type) {
    case "base64":
      t = ra(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = Dn(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (t = Br(t)), r.type = "binary", Sh(t, r);
}
function q4(e, r) {
  var t = e;
  return r.type == "base64" && (t = ra(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = mr && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : L1(t.slice(2)) : kl(t.slice(2)), r.type = "binary", Sh(t, r);
}
function Y4(e) {
  return e.match(/[^\x00-\x7F]/) ? Oa(e) : e;
}
function wf(e, r, t, a) {
  return a ? (t.type = "string", fi.to_workbook(e, t)) : fi.to_workbook(r, t);
}
function ii(e, r) {
  Kf();
  var t = r || {};
  if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return ii(new Uint8Array(e), (t = Vr(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return ii(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = false;
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), ti = {}, t.dateNF && (ti.dateNF = t.dateNF), t.type || (t.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = mr ? "buffer" : "binary", a = pd(e), typeof Uint8Array < "u" && !mr && (t.type = "array")), t.type == "string" && (i = true, t.type = "binary", t.codepage = 65001, a = Y4(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo) return t = Vr(t), t.type = "array", ii(jf(a), t);
  }
  switch ((n = ko(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return G4(sr.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return uh(a, t);
      break;
    case 60:
      return Of(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return Kv(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return Ru.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? z4(a, t) : wf(e, a, t, i);
    case 239:
      return n[3] === 60 ? Of(a, t) : wf(e, a, t, i);
    case 255:
      if (n[1] === 254) return q4(a, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return Fn.to_workbook(a, t);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9))) return Fn.to_workbook(a, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Df.to_workbook(a, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116) return Tm(a, t);
      break;
    case 10:
    case 13:
    case 32:
      return $4(a, t);
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
  return Xv.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Df.to_workbook(a, t) : wf(e, a, t, i);
}
function bh(e, r) {
  switch (r.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      r.type = "";
      break;
    case "file":
      return ns(r.file, sr.write(e, { type: mr ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return sr.write(e, r);
}
function Z4(e, r) {
  switch (r.bookType) {
    case "ods":
      return _h(e, r);
    case "numbers":
      return N4(e, r);
    case "xlsb":
      return K4(e, r);
    default:
      return j4(e, r);
  }
}
function J4(e, r) {
  var t = Vr(r || {}), a = Z4(e, t);
  return Q4(a, t);
}
function Q4(e, r) {
  var t = {}, a = mr ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
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
  var n = e.FullPaths ? sr.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[t.type] || t.type, compression: !!r.compression }) : e.generate(t);
  if (typeof Deno < "u" && typeof n == "string") {
    if (r.type == "binary" || r.type == "base64") return n;
    n = new Uint8Array(o0(n));
  }
  return r.password && typeof encrypt_agile < "u" ? bh(encrypt_agile(n, r.password), r) : r.type === "file" ? ns(r.file, n) : r.type == "string" ? Br(n) : n;
}
function eE(e, r) {
  var t = r || {}, a = Vk(e, t);
  return bh(a, t);
}
function Ca(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return Zs(Oa(a));
    case "binary":
      return Oa(a);
    case "string":
      return e;
    case "file":
      return ns(r.file, a, "utf8");
    case "buffer":
      return mr ? Ra(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : Ca(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function rE(e, r) {
  switch (r.type) {
    case "base64":
      return U1(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return ns(r.file, e, "binary");
    case "buffer":
      return mr ? Ra(e, "binary") : e.split("").map(function(t) {
        return t.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Ks(e, r) {
  switch (r.type) {
    case "string":
    case "base64":
    case "binary":
      for (var t = "", a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
      return r.type == "base64" ? Zs(t) : r.type == "string" ? Br(t) : t;
    case "file":
      return ns(r.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
}
function Fh(e, r) {
  Kf(), Uy(e);
  var t = Vr(r || {});
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), t.type == "array") {
    t.type = "binary";
    var a = Fh(e, t);
    return t.type = "array", o0(a);
  }
  var n = 0;
  if (t.sheet && (typeof t.sheet == "number" ? n = t.sheet : n = e.SheetNames.indexOf(t.sheet), !e.SheetNames[n])) throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
  switch (t.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Ca(Pk(e, t), t);
    case "slk":
    case "sylk":
      return Ca(Nu.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return Ca(xh(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return rE(Ah(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return Ca(Eo(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return Ca(Ru.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "dbf":
      return Ks(Df.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return Ca(fi.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "rtf":
      return Ca(Sm(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return Ca(Pu.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "fods":
      return Ca(_h(e, t), t);
    case "wk1":
      return Ks(Fn.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Ks(Fn.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Ks(dh(e, t), t);
    case "biff5":
      t.biff || (t.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return t.biff || (t.biff = 8), eE(e, t);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return J4(e, t);
    default:
      throw new Error("Unrecognized bookType |" + t.bookType + "|");
  }
}
function tE(e) {
  if (!e.bookType) {
    var r = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" }, t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = r[e.bookType] || e.bookType;
  }
}
function aE(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, tE(a), Fh(e, a);
}
function nE(e, r, t, a, n, i, s) {
  var f = Fr(t), o = s.defval, l = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), h = true, v = e["!data"] != null, d = n === 1 ? [] : {};
  if (n !== 1) if (Object.defineProperty) try {
    Object.defineProperty(d, "__rowNum__", { value: t, enumerable: false });
  } catch {
    d.__rowNum__ = t;
  }
  else d.__rowNum__ = t;
  if (!v || e["!data"][t]) for (var x = r.s.c; x <= r.e.c; ++x) {
    var _ = v ? (e["!data"][t] || [])[x] : e[a[x] + f];
    if (_ == null || _.t === void 0) {
      if (o === void 0) continue;
      i[x] != null && (d[i[x]] = o);
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
        if (!_.z || !ua(_.z) || (y = Xa(y), typeof y == "number")) break;
      case "d":
        s && (s.UTC || s.raw === false) || (y = On(new Date(y)));
        break;
      default:
        throw new Error("unrecognized type " + _.t);
    }
    if (i[x] != null) {
      if (y == null) if (_.t == "e" && y === null) d[i[x]] = null;
      else if (o !== void 0) d[i[x]] = o;
      else if (l && y === null) d[i[x]] = null;
      else continue;
      else d[i[x]] = (_.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : l) ? y : Ga(_, y, s);
      y != null && (h = false);
    }
  }
  return { row: d, isempty: h };
}
function Bf(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = r || {}, h = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? a = 1 : l.header === "A" ? a = 2 : Array.isArray(l.header) ? a = 3 : l.header == null && (a = 0), typeof h) {
    case "string":
      o = Dr(h);
      break;
    case "number":
      o = Dr(e["!ref"]), o.s.r = h;
      break;
    default:
      o = h;
  }
  a > 0 && (n = 0);
  var v = Fr(o.s.r), d = [], x = [], _ = 0, y = 0, m = e["!data"] != null, g = o.s.r, S = 0, E = {};
  m && !e["!data"][g] && (e["!data"][g] = []);
  var A = l.skipHidden && e["!cols"] || [], M = l.skipHidden && e["!rows"] || [];
  for (S = o.s.c; S <= o.e.c; ++S) if (!(A[S] || {}).hidden) switch (d[S] = gr(S), t = m ? e["!data"][g][S] : e[d[S] + v], a) {
    case 1:
      i[S] = S - o.s.c;
      break;
    case 2:
      i[S] = d[S];
      break;
    case 3:
      i[S] = l.header[S - o.s.c];
      break;
    default:
      if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = Ga(t, null, l), y = E[s] || 0, !y) E[s] = 1;
      else {
        do
          f = s + "_" + y++;
        while (E[f]);
        E[s] = y, E[f] = 1;
      }
      i[S] = f;
  }
  for (g = o.s.r + n; g <= o.e.r; ++g) if (!(M[g] || {}).hidden) {
    var G = nE(e, o, g, d, a, i, l);
    (G.isempty === false || (a === 1 ? l.blankrows !== false : l.blankrows)) && (x[_++] = G.row);
  }
  return x.length = _, x;
}
var pl = /"/g;
function iE(e, r, t, a, n, i, s, f, o) {
  for (var l = true, h = [], v = "", d = Fr(t), x = e["!data"] != null, _ = x && e["!data"][t] || [], y = r.s.c; y <= r.e.c; ++y) if (a[y]) {
    var m = x ? _[y] : e[a[y] + d];
    if (m == null) v = "";
    else if (m.v != null) {
      l = false, v = "" + (o.rawNumbers && m.t == "n" ? m.v : Ga(m, null, o));
      for (var g = 0, S = 0; g !== v.length; ++g) if ((S = v.charCodeAt(g)) === n || S === i || S === 34 || o.forceQuotes) {
        v = '"' + v.replace(pl, '""') + '"';
        break;
      }
      v == "ID" && f == 0 && h.length == 0 && (v = '"ID"');
    } else m.f != null && !m.F ? (l = false, v = "=" + m.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(pl, '""') + '"')) : v = "";
    h.push(v);
  }
  if (o.strip) for (; h[h.length - 1] === ""; ) --h.length;
  return o.blankrows === false && l ? null : h.join(s);
}
function Eo(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Dr(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, o = f.charCodeAt(0), l = "", h = [], v = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], x = n.s.c; x <= n.e.c; ++x) (v[x] || {}).hidden || (h[x] = gr(x));
  for (var _ = 0, y = n.s.r; y <= n.e.r; ++y) (d[y] || {}).hidden || (l = iE(e, n, y, h, s, o, i, _, a), l != null && (l || a.blankrows !== false) && t.push((_++ ? f : "") + l));
  return t.join("");
}
function Ah(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = Eo(e, r);
  return t;
}
function sE(e, r) {
  var t = "", a, n = "";
  if (e == null || e["!ref"] == null) return [];
  var i = Dr(e["!ref"]), s = "", f = [], o, l = [], h = e["!data"] != null;
  for (o = i.s.c; o <= i.e.c; ++o) f[o] = gr(o);
  for (var v = i.s.r; v <= i.e.r; ++v) for (s = Fr(v), o = i.s.c; o <= i.e.c; ++o) if (t = f[o] + s, a = h ? (e["!data"][v] || [])[o] : e[t], n = "", a !== void 0) {
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
    l[l.length] = t + "=" + n;
  }
  return l;
}
function Ch(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = +!a.skipHeader, s = e || {};
  !e && n && (s["!data"] = []);
  var f = 0, o = 0;
  if (s && a.origin != null) if (typeof a.origin == "number") f = a.origin;
  else {
    var l = typeof a.origin == "string" ? Lr(a.origin) : a.origin;
    f = l.r, o = l.c;
  }
  var h = { s: { c: 0, r: 0 }, e: { c: o, r: f + r.length - 1 + i } };
  if (s["!ref"]) {
    var v = Dr(s["!ref"]);
    h.e.c = Math.max(h.e.c, v.e.c), h.e.r = Math.max(h.e.r, v.e.r), f == -1 && (f = v.e.r + 1, h.e.r = f + r.length - 1 + i);
  } else f == -1 && (f = 0, h.e.r = r.length - 1 + i);
  var d = a.header || [], x = 0, _ = [];
  r.forEach(function(m, g) {
    n && !s["!data"][f + g + i] && (s["!data"][f + g + i] = []), n && (_ = s["!data"][f + g + i]), Gr(m).forEach(function(S) {
      (x = d.indexOf(S)) == -1 && (d[x = d.length] = S);
      var E = m[S], A = "z", M = "", G = n ? "" : gr(o + x) + Fr(f + g + i), F = n ? _[o + x] : s[G];
      E && typeof E == "object" && !(E instanceof Date) ? n ? _[o + x] = E : s[G] = E : (typeof E == "number" ? A = "n" : typeof E == "boolean" ? A = "b" : typeof E == "string" ? A = "s" : E instanceof Date ? (A = "d", a.UTC || (E = h0(E)), a.cellDates || (A = "n", E = Yr(E)), M = F != null && F.z && ua(F.z) ? F.z : a.dateNF || ir[14]) : E === null && a.nullError && (A = "e", E = 0), F ? (F.t = A, F.v = E, delete F.w, delete F.R, M && (F.z = M)) : n ? _[o + x] = F = { t: A, v: E } : s[G] = F = { t: A, v: E }, M && (F.z = M));
    });
  }), h.e.c = Math.max(h.e.c, o + d.length - 1);
  var y = Fr(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (x = 0; x < d.length; ++x) n ? s["!data"][f][x + o] = { t: "s", v: d[x] } : s[gr(x + o) + y] = { t: "s", v: d[x] };
  return s["!ref"] = xr(h), s;
}
function fE(e, r) {
  return Ch(null, e, r);
}
function as(e, r, t) {
  if (typeof r == "string") {
    if (e["!data"] != null) {
      var a = Lr(r);
      return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? as(e, yr(r)) : as(e, gr(t || 0) + Fr(r));
}
function oE(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function To(e, r) {
  var t = { SheetNames: [], Sheets: {} };
  return e && hs(t, e, r || "Sheet1"), t;
}
function hs(e, r, t, a) {
  var n = 1;
  if (!t) for (; n <= 65535 && e.SheetNames.indexOf(t = "Sheet" + n) != -1; ++n, t = void 0) ;
  if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(t) >= 0 && t.length < 32) {
    var i = t.match(/\d+$/);
    n = i && +i[0] || 0;
    var s = i && t.slice(0, i.index) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf(t = s + n) != -1; ++n) ;
  }
  if (fh(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), e.Sheets[t] = r, t;
}
function cE(e, r, t) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = oE(e, r);
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
function lE(e, r) {
  return e.z = r, e;
}
function Ih(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function uE(e, r, t) {
  return Ih(e, "#" + r, t);
}
function hE(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function dE(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Dr(r), i = typeof r == "string" ? r : xr(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var o = as(e, s, f);
    o.t = "n", o.F = i, delete o.v, s == n.s.r && f == n.s.c && (o.f = t, a && (o.D = true));
  }
  var l = wt(e["!ref"]);
  return l.s.r > n.s.r && (l.s.r = n.s.r), l.s.c > n.s.c && (l.s.c = n.s.c), l.e.r < n.e.r && (l.e.r = n.e.r), l.e.c < n.e.c && (l.e.c = n.e.c), e["!ref"] = xr(l), e;
}
var ct = { encode_col: gr, encode_row: Fr, encode_cell: yr, encode_range: xr, decode_col: ao, decode_row: to, split_cell: ax, decode_cell: Lr, decode_range: wt, format_cell: Ga, sheet_new: nx, sheet_add_aoa: au, sheet_add_json: Ch, sheet_add_dom: ph, aoa_to_sheet: li, json_to_sheet: fE, table_to_sheet: vh, table_to_book: u4, sheet_to_csv: Eo, sheet_to_txt: Ah, sheet_to_json: Bf, sheet_to_html: xh, sheet_to_formulae: sE, sheet_to_row_object_array: Bf, sheet_get_cell: as, book_new: To, book_append_sheet: hs, book_set_sheet_visibility: cE, cell_set_number_format: lE, cell_set_hyperlink: Ih, cell_set_internal_link: uE, cell_add_comment: hE, sheet_set_array_formula: dE, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
function xE(e) {
  e.preventDefault();
  const t = e.target.closest("tr"), a = document.getElementById("context_menu");
  t && (a.style.top = `${e.clientY}px`, a.style.left = `${e.clientX}px`, a.classList.remove("hidden"), document.getElementById("delete_row").onclick = () => {
    var _a2, _b;
    const n = ((_b = (_a2 = t.children[2]) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || "";
    if (console.log(n), n) {
      const i = Ot.getInstance();
      i.findRowIndexByIsbn(n) !== -1 && (i.deleteSpreadsheet(n), i.renderSpreadsheet());
    }
    a.classList.add("hidden");
  }, document.addEventListener("click", function(n) {
    n.button !== 2 && a.classList.add("hidden");
  }, { once: true }));
}
const Dh = wl({ data: [] }), Oh = ["ACCESSION NUMBER", "BOOK NAME", "ISBN NUMBER", "BOOK TYPE", "AUTHOR", "PUBLISHED DATE", "NUM OF PAGES", "IMAGE LINKS", "LANGUAGE"];
const _Ot = class _Ot {
  constructor() {
    __publicField(this, "workbook", null);
    __publicField(this, "worksheet", {});
    __publicField(this, "sheetName", "");
    __publicField(this, "m_jsonSpreadsheet", []);
  }
  createNewSpreadsheet() {
    if (localStorage.getItem("renderSpreadsheet") === "true") {
      va.spreadsheets.toArray().then((n) => {
        this.workbook = ct.book_new(), this.worksheet = ct.json_to_sheet(n), ct.book_append_sheet(this.workbook, this.worksheet, "Books");
      });
      return;
    }
    this.workbook = ct.book_new();
    const a = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
    window.localStorage.setItem("begin_date", a), this.worksheet = ct.aoa_to_sheet([nc]), ct.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = ct.sheet_to_json(this.worksheet, { defval: "N/A" }), localStorage.setItem("renderSpreadsheet", "true");
  }
  static init(r = "") {
    return _Ot.instance = new _Ot(), _Ot.instance.createNewSpreadsheet(), _Ot.instance;
  }
  mapToSpreadsheetData(r) {
    return r.map((t) => {
      const a = Object.values(t), n = {};
      return nc.forEach((i, s) => {
        n[i] = a[s] !== void 0 ? a[s] : "";
      }), n;
    });
  }
  async loadWorkbook(r) {
    try {
      const n = await va.spreadsheets.toArray();
      if (n.length > 0) return console.log(`Loading ${n.length} records from IndexedDB...`), this.workbook = ct.book_new(), this.worksheet = ct.json_to_sheet(n), ct.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = n, console.log("Loaded Existing Data Form Database: ", this.m_jsonSpreadsheet), this.m_jsonSpreadsheet;
    } catch (n) {
      console.error("Error checking IndexedDB:", n);
    }
    const a = await (await fetch(r)).arrayBuffer();
    this.workbook = ii(a), this.sheetName = this.workbook.SheetNames[0], this.worksheet = this.workbook.Sheets[this.sheetName], this.m_jsonSpreadsheet = ct.sheet_to_json(this.worksheet, { defval: "N/A" });
    try {
      console.log("Storing spreadsheet data to database..."), console.log(this.m_jsonSpreadsheet);
      const n = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);
      console.log("Records to be added to the database: ", n), console.log("Record[0] to be added to the database: ", n[0]), await va.spreadsheets.add(n[0]), console.log(`Stored ${n.length} records to IndexedDB`);
    } catch (n) {
      console.error("Error loading data to IndexedDB:", n);
    }
    return this.m_jsonSpreadsheet;
  }
  static getInstance() {
    return _Ot.instance || (_Ot.instance = _Ot.init()), _Ot.instance;
  }
  getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }
  async loadFromDatabase() {
    const r = await va.spreadsheets.toArray();
    return this.m_jsonSpreadsheet = r, console.log("In Database: ", r), r;
  }
  insertSpreadsheet(r) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }
    ct.sheet_add_aoa(this.worksheet, [r], { origin: -1 });
    const t = ct.sheet_to_json(this.worksheet, { defval: "N/A" });
    this.m_jsonSpreadsheet = t, console.log(" Outside Saving new data to IndexedDB...");
    try {
      const a = this.mapToSpreadsheetData([r]);
      console.log("Records to be added to the database: ", a), console.log("Record[0] to be added to the database: ", a[0]), va.spreadsheets.add(a[0]).then((n) => {
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
    if (!this.workbook) return console.error("Workbook is not loaded yet."), "Workbook is not loaded yet.";
    if (t === "") return "Please enter a valid accession number.";
    console.log("jsonSpreadsheet", this.m_jsonSpreadsheet);
    const a = this.findRowIndexByIsbn(r);
    if (a === -1) return;
    console.log("isbn found has rowIndex: ", a);
    const n = a + 1;
    ct.sheet_add_aoa(this.worksheet, [[t]], { origin: { r: n, c: 0 } });
    const i = ct.sheet_to_json(this.worksheet, { defval: "N/A" });
    return this.m_jsonSpreadsheet = i, va.spreadsheets.where("isbn").equals(r).modify({ accession: t }), this.renderSpreadsheet(), this.scrollToView(a), `Accession number ${t} added for ISBN ${r}.`;
  }
  async deleteSpreadsheet(r) {
    if (!this.workbook) return console.error("Workbook is not loaded yet."), "Workbook is not loaded yet.";
    const t = this.findRowIndexByIsbn(r);
    this.m_jsonSpreadsheet.splice(t, 1), this.worksheet = ct.json_to_sheet(this.m_jsonSpreadsheet);
    const a = await va.spreadsheets.where("isbn").equals(r).delete();
    console.log("Deleting db: ", a), this.getRowElementByIndex(t);
  }
  renderSpreadsheet() {
    Dh.data = [...this.m_jsonSpreadsheet];
  }
  findRowIndexByIsbn(r) {
    const t = this.m_jsonSpreadsheet.findIndex((a) => a.isbn === r);
    if (console.log("This jsonSpreadsheet: ", this.m_jsonSpreadsheet), t === -1) {
      const a = this.m_jsonSpreadsheet.findIndex((n) => Object.values(n).includes(r));
      return console.log("rowIndex found by value: ", a), a === -1 && console.error("Row with the given ISBN not found."), a;
    }
    return t;
  }
  getRowElementByIndex(r) {
    var _a2, _b;
    return (_b = (_a2 = document.querySelector("tbody")) == null ? void 0 : _a2.children) == null ? void 0 : _b.item(r);
  }
  scrollToView(r = -1) {
    var _a2, _b, _c2;
    const t = document.querySelector("tbody"), n = (_a2 = t == null ? void 0 : t.children) == null ? void 0 : _a2.item(r), i = (_b = n == null ? void 0 : n.style) == null ? void 0 : _b.backgroundColor;
    r === -1 && ((_c2 = t == null ? void 0 : t.lastElementChild) == null ? void 0 : _c2.scrollIntoView({ behavior: "smooth", block: "end" }));
    const s = setTimeout(() => {
      n == null ? void 0 : n.scrollIntoView({ behavior: "smooth", block: "end" }), n && (console.log("color: ", i), n.style.backgroundColor = "green"), clearTimeout(s);
    }, 0), f = setTimeout(() => {
      n && (n.style.backgroundColor = i, console.log("also ran")), clearTimeout(f);
    }, 1e3);
  }
  DownloadSpreadSheet() {
    const r = [{ wch: 10 }, { wch: 50 }, { wch: 18 }, { wch: 50 }, { wch: 18 }, { wch: 10 }, { wch: 15 }, { wch: 25 }, { wch: 10 }];
    if (this.workbook) {
      this.worksheet["!cols"] = r;
      let t = ct.book_new();
      ct.book_append_sheet(t, this.worksheet, "Books"), ct.sheet_add_aoa(this.worksheet, [Oh], { origin: 0 });
      const a = window.localStorage.getItem("begin_date") || "", i = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
      aE(t, a ? "from" + a + " to " + i + "-library_stock.xlsx" : i + "-library_stock.xlsx");
    } else console.error("Workbook is not loaded.");
  }
};
__publicField(_Ot, "instance");
let Ot = _Ot;
async function pE(e) {
  var _a2, _b, _c2, _d2, _e2;
  const t = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e}`)).json();
  if (console.log("Used google Api: ", ((_a2 = t == null ? void 0 : t.items) == null ? void 0 : _a2.length) > 0), t.items && t.items.length > 0) {
    const a = t.items[0].volumeInfo;
    return console.log("used  google books api: ", a), { title: a.title, authors: ((_b = a.authors) == null ? void 0 : _b.map((n) => ({ name: n }))) || [], publish_date: a.publishedDate, number_of_pages: a.pageCount, cover: { small: (_c2 = a.imageLinks) == null ? void 0 : _c2.thumbnail, large: (_d2 = a.imageLinks) == null ? void 0 : _d2.large }, subjects: ((_e2 = a.categories) == null ? void 0 : _e2.map((n) => ({ name: n }))) || [], languages: a.language ? [{ key: `/languages/${a.language}` }] : [] };
  }
}
async function vE(e) {
  const t = await (await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${e}&format=json&jscmd=data`)).json();
  return console.log("used OpenLibAPI: ", Object.keys(t).length !== 0), t[`ISBN:${e}`];
}
async function mE(e) {
  var _a2;
  const r = "https://corsproxy.io/?", t = `https://isbnsearch.org/search?s=${e}`;
  try {
    const n = await (await fetch(r + encodeURIComponent(t))).text(), f = new DOMParser().parseFromString(n, "text/html").querySelector(".bookinfo");
    if (!f) return console.error("Book info container not found"), null;
    const o = (_a2 = f.textContent) == null ? void 0 : _a2.trim().split(`
`).map((l) => l.trim());
    return gE(o);
  } catch (a) {
    return console.error("Error fetching ISBN:", a), null;
  }
}
function gE(e) {
  let r = { title: "", "isbn-13": "", "isbn-10": "", author: "", publish_date: "" };
  return e.forEach((t, a) => {
    a === 0 ? r.title = t.trim() : t.startsWith("ISBN-13:") ? r["isbn-13"] = t.replace("ISBN-13:", "").trim() : t.startsWith("ISBN-10:") ? r["isbn-10"] = t.replace("ISBN-10:", "").trim() : t.startsWith("Author:") ? r.author = t.replace("Author:", "").trim() : t.startsWith("Published:") && (r.publish_date = t.replace("Published:", "").trim());
  }), console.log("Parsed Result: ", r), r;
}
function _E(e) {
  let r = false;
  return e.forEach((t) => {
    t.value ? r = true : (t.classList.add("required"), r = false);
  }), r;
}
function vl(e) {
  let r = "";
  return e.forEach((t) => r += t.value), r;
}
function wE(e) {
  e.forEach((r) => r.value = ""), e[0].focus();
}
async function Ci(e, r = false) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
  let t, a = r, n, i = "", s = e.isbn;
  console.log("isbn: ", s);
  const f = await Nh(s);
  if (f) {
    console.log("used DB: ", f);
    const v = Ot.getInstance(), d = v.findRowIndexByIsbn(f.isbn);
    return v.scrollToView(d), e.value = true, `You have done that isbn already the Book Name is: ${f.book_name}`;
  }
  if (t = await vE(s) || await pE(s), console.log("Isbn Details: ", t), t) i = "Isbn Found Please Input the accession Number", e.value = true;
  else return a || (n = (_a2 = await mE(s)) == null ? void 0 : _a2["isbn-13"]), n ? (e.isbn = n, await Ci(e, true)) : (a = true, i = "No details found for the given ISBN from both sources.", i);
  const o = ["N/A", t == null ? void 0 : t.title, s, ((_c2 = (_b = t == null ? void 0 : t.subjects) == null ? void 0 : _b[0]) == null ? void 0 : _c2.name) ?? "N/A", (_e2 = (_d2 = t == null ? void 0 : t.authors) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.name, t == null ? void 0 : t.publish_date, t == null ? void 0 : t.number_of_pages, ((_f2 = t == null ? void 0 : t.cover) == null ? void 0 : _f2.large) ?? "N/A", ((_h2 = (_g2 = t == null ? void 0 : t.languages) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.key) ? (_j = (_i = t == null ? void 0 : t.languages) == null ? void 0 : _i[0]) == null ? void 0 : _j.key.replace("/languages/", "").toUpperCase() : "English"], l = Ot.getInstance();
  l.insertSpreadsheet(o), l.renderSpreadsheet();
  const h = setTimeout(() => {
    l.scrollToView(), clearTimeout(h);
  }, 500);
  return i;
}
async function Nh(e) {
  return await va.spreadsheets.get({ isbn: e });
}
var yE = xn('<div class="isbn-input"><div class="isbn-type">Accession No:</div> <span class="isbn-type" id="accessionType"> </span> <input type="text" name="accession" id="accession-input" class="svelte-1a3p2ai"/></div>');
function kE(e, r) {
  Uf(r, true);
  let t = ef(r, "accessionInput", 15), a = ef(r, "isbnFound", 15), n = ef(r, "message", 15), i = Si("OLD");
  Lf(() => {
    const v = setTimeout(() => {
      var _a2;
      t().focus();
      const d = Ot.getInstance(), x = d.findRowIndexByIsbn(a().isbn), _ = d.getRowElementByIndex(x);
      console.log("index and row: ", x, " ", _);
      let y = ((_a2 = _.firstElementChild) == null ? void 0 : _a2.textContent) + ",";
      console.log("Remounted"), y.startsWith("N/A") ? t(t().value = "", true) : t(t().value = y, true), clearTimeout(v);
    }, 300);
  });
  function s(v) {
    const d = v.target;
    switch (v.key) {
      case "Tab":
        if (v.preventDefault(), At(i, tr(i) === "OLD" ? "ILS" : "OLD", true), d.value !== "") if (tr(i) === "OLD") {
          if (d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")), d.value.endsWith("ILS-SR-") && (d.value = d.value.replace("ILS-SR-", "")), d.value === "") return;
          d.value += ",";
        } else d.value = d.value.replace(",", ",ILS-SR-");
        else tr(i) === "OLD" ? d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")) : d.value === "" ? d.value = "ILS-SR-" : d.value = ",";
        console.log("last string removed ", d.value.substring(0, d.value.length - 1));
        break;
      case " ":
        v.preventDefault(), d.value += "()";
        const x = d.value.length - 1;
        d.focus(), d.setSelectionRange(x, x);
        break;
      case "Enter":
        v.preventDefault();
        const _ = Ot.getInstance();
        let y;
        tr(i) === "OLD" && d.value.endsWith(",") ? y = d.value.substring(0, d.value.length - 1) : tr(i) === "ILS" && d.value.endsWith(",ILS-SR-") ? y = d.value.substring(0, d.value.length - 8) : y = d.value, n(_.updateSpreadsheet(a().isbn, y)), a(a().value = false, true);
    }
  }
  var f = yE(), o = fn(ma(f), 2), l = ma(o, true);
  zt(o);
  var h = fn(o, 2);
  h.__keydown = s, kf(h, (v) => t(v), () => t()), zt(f), Jn(() => Qn(l, tr(i) === "OLD" ? "" : "ILS-SR-")), sn(e, f), Wf();
}
Hf(["keydown"]);
var EE = xn('<input type="text" maxlength="1" required inputmode="numeric"/>'), TE = xn('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja"> </div> <!></div>'), SE = xn('<div class="message svelte-f3psja"> </div> <!> <button id="search" class="svelte-f3psja"> </button>', 1);
function ZE(e, r) {
  Uf(r, true);
  const t = (D, H = w1) => {
    var K = EE();
    K.__keydown = v, Jn((ee) => {
      C1(K, 1, `input-${H() + 1}`, "svelte-f3psja"), ec(K, "name", ee), ec(K, "id", `input-${H() + 1}`);
    }, [() => H().toString()]), sn(D, K);
  };
  let a = Si(""), n, i = Si(wl({ value: false, isbn: "" })), s = Si(13), f = Si(false), o, l = "";
  async function h() {
    const D = document.querySelectorAll('input[maxlength="1"]');
    tr(i).isbn = vl(D), At(a, await Ci(tr(i)), true);
  }
  async function v(D) {
    const H = document.querySelectorAll('input[maxlength="1"]'), K = parseInt(D.key), ee = D.target, de = D.key === "Backspace", Pe = ee.nextElementSibling, me = ee.previousElementSibling;
    if (ee.classList.remove("required"), de) {
      if (D.preventDefault(), ee.value == "") {
        me && me.focus();
        return;
      }
      ee.value = "";
      return;
    }
    switch (isNaN(K) || (D.preventDefault(), ee.value == "", ee.value = D.key, Pe && Pe.focus()), D.key) {
      case "Tab":
        x(D);
        break;
      case "ArrowLeft":
        D.preventDefault(), me && me.focus();
        break;
      case "ArrowRight":
        D.preventDefault(), Pe && Pe.focus();
        break;
      case "ArrowUp":
        D.preventDefault(), me && me.focus();
        break;
      case "ArrowDown":
        D.preventDefault(), Pe && Pe.focus();
        break;
      case "Enter":
        if (D.preventDefault(), !_E(H)) return;
        tr(i).isbn = vl(H), wE(H), d(), await Nh(tr(i).isbn), At(a, await Ci(tr(i)), true);
        break;
    }
  }
  function d() {
    if (!tr(i).value) {
      const D = document.querySelectorAll("input[maxlength='1']");
      if (tr(s) === 13) {
        const H = [9, 7, 8];
        for (let K = 0; K < 3; K++) D.item(K).value = H[K].toString();
        setTimeout(() => {
          D.item(3).focus();
        }, 0);
      }
      if (tr(s) === 10) {
        for (let H = 0; H < 10; H++) D.item(H).value = "";
        setTimeout(() => {
          D.item(0).focus();
        }, 0);
      }
    }
  }
  function x(D) {
    D.preventDefault(), At(s, tr(s) === 13 ? 10 : 13, true);
  }
  Q0(() => {
    tr(s) && d();
  }), Q0(() => {
    r.receivedIsbn && r.receivedIsbn !== l && !tr(i).value && (l = r.receivedIsbn, tr(i).isbn = r.receivedIsbn, Ci(tr(i)).then((D) => _1(() => At(a, D, true))), console.log("Input Effect"));
  });
  function _() {
    if (tr(i).isbn.length > 0) {
      At(f, true);
      for (let D = 0; D < tr(i).isbn.length && D < n.length; D++) n[D].value = tr(i).isbn[D], n[D].classList.add("paste-fill"), setTimeout(() => {
        n[D].classList.remove("paste-fill");
      }, 100 * (D + 1));
      tr(i).isbn.length === 13 || tr(i).isbn.length === 10 || tr(i).isbn.length === 9 ? setTimeout(async () => {
        At(a, await Ci(tr(i)), true), At(f, false);
      }, 200 * tr(i).isbn.length) : At(f, false);
    }
  }
  async function y(D) {
    var _a2;
    D.preventDefault();
    const H = ((_a2 = D.clipboardData) == null ? void 0 : _a2.getData("text")) || "";
    tr(i).isbn = H.replace(/\D/g, "").slice(0, 13), _();
  }
  let m;
  Q0(() => {
    console.log("Second Effect"), tr(a) === "Isbn Found Please Input the accession Number" || tr(a).includes("You have done that isbn already") ? (tr(i).value = true, setTimeout(() => {
      o.value = "", o.focus();
    }, 0)) : tr(a) && tr(a) !== "" && (d(), setTimeout(() => {
      At(a, "");
    }, 4e3));
  }), Lf(() => {
    d();
    const D = document.querySelectorAll('input[maxlength="1"]');
    n = [...D], m = Ot.getInstance(), D.forEach((H) => H.addEventListener("focus", (K) => {
      const ee = K.target, de = ee.value;
      ee.value = "", ee.value = de;
    })), window.addEventListener("paste", (H) => {
      y(H);
    });
  });
  var g = SE(), S = yl(g), E = ma(S, true);
  zt(S);
  var A = fn(S, 2);
  {
    var M = (D) => {
      var H = TE(), K = ma(H), ee = ma(K);
      zt(K);
      var de = fn(K, 2);
      zs(de, 17, () => ({ length: tr(s) }), Gs, (Pe, me, ze) => {
        t(Pe, () => ze);
      }), zt(H), Jn(() => Qn(ee, `ISBN-${tr(s) ?? ""}:`)), sn(D, H);
    }, G = (D) => {
      kE(D, { get message() {
        return tr(a);
      }, set message(H) {
        At(a, H, true);
      }, get isbnFound() {
        return tr(i);
      }, set isbnFound(H) {
        At(i, H, true);
      }, get accessionInput() {
        return o;
      }, set accessionInput(H) {
        o = H;
      } });
    };
    E1(A, (D) => {
      tr(i).value ? D(G, false) : D(M);
    });
  }
  var F = fn(A, 2);
  F.__click = async () => {
    if (tr(i).value) {
      const D = o.value.trim();
      At(a, m.updateSpreadsheet(tr(i).isbn, D), true), tr(i).value = false;
    } else await h();
  };
  var U = ma(F, true);
  zt(F), Jn(() => {
    Qn(E, tr(a)), Qn(U, tr(i).value ? "Update Accession Number" : "Search For ISBN");
  }), sn(e, g), Wf();
}
Hf(["keydown", "click"]);
var bE = xn('<th class="svelte-f5kcat"> </th>'), FE = xn('<td class="svelte-f5kcat"> </td>'), AE = xn('<tr class="svelte-f5kcat"></tr>'), CE = xn('<div class="isbn-details svelte-f5kcat"><table class="svelte-f5kcat"><thead class="svelte-f5kcat"><tr class="svelte-f5kcat"></tr></thead><tbody class="svelte-f5kcat"></tbody></table></div> <button class="download-excel svelte-f5kcat">Download Excel Sheet</button> <div id="context_menu" class="hidden svelte-f5kcat"><ul class="svelte-f5kcat"><li id="delete_row" class="svelte-f5kcat">Delete Row</li></ul></div>', 1);
function JE(e, r) {
  Uf(r, false);
  let t = js(), a = js(), n = js();
  function i(_, y) {
    _.contentEditable = "false", _.textContent == "\u200B" && (_.textContent = "N/A"), tr(t).updateSpreadsheet(y), tr(t).renderSpreadsheet(), va.spreadsheets.where("isbn").equals(y).modify({ accession: _.textContent });
  }
  Lf(async () => {
    At(t, Ot.getInstance()), await tr(t).loadFromDatabase(), tr(t).renderSpreadsheet(), tr(a).addEventListener("dblclick", (y) => {
      var _a2;
      const m = y.target, g = m.closest("tr"), S = g.childNodes[2].textContent, E = g.childNodes[0], A = E.cloneNode(true);
      (_a2 = E.parentNode) == null ? void 0 : _a2.replaceChild(A, E);
      const M = g.childNodes[0];
      if (M.contentEditable = "true", M.textContent === "N/A") M.textContent = "\u200B", M.focus();
      else {
        M.focus();
        const F = document.createRange();
        F.selectNodeContents(M), F.collapse(false);
        const U = window.getSelection();
        U == null ? void 0 : U.removeAllRanges(), U == null ? void 0 : U.addRange(F);
      }
      M.addEventListener("blur", () => i(M, S), { once: true });
      const G = (F) => {
        console.log(F.key), F.key === "Enter" && (F.preventDefault(), console.log("Key down Pressed"), i(M, S), M.removeEventListener("keydown", G));
      };
      M.addEventListener("keydown", G), tr(t).renderSpreadsheet(), console.log("Real Target: ", m), console.log("Row chosen: ", m.closest("tr")), console.log(S);
    });
    const _ = setTimeout(() => {
      tr(t).scrollToView(), clearTimeout(_);
    }, 500);
  }), T1();
  var s = CE(), f = yl(s), o = ma(f), l = ma(o), h = ma(l);
  zs(h, 5, () => Oh, Gs, (_, y) => {
    var m = bE(), g = ma(m, true);
    zt(m), Jn(() => Qn(g, tr(y))), sn(_, m);
  }), zt(h), zt(l);
  var v = fn(l);
  v.__contextmenu = function(..._) {
    xE == null ? void 0 : xE.apply(this, _);
  }, zs(v, 5, () => Dh.data, Gs, (_, y) => {
    var m = AE();
    zs(m, 5, () => Object.entries(tr(y)), Gs, (g, S) => {
      var E = y1(() => k1(tr(S), 2));
      let A = () => tr(E)[1];
      var M = FE(), G = ma(M, true);
      zt(M), Jn(() => Qn(G, A())), sn(g, M);
    }), zt(m), sn(_, m);
  }), zt(v), kf(v, (_) => At(a, _), () => tr(a)), zt(o), zt(f);
  var d = fn(f, 2);
  d.__click = () => tr(t).DownloadSpreadSheet.call(tr(t));
  var x = fn(d, 2);
  kf(x, (_) => At(n, _), () => tr(n)), sn(e, s), Wf();
}
Hf(["contextmenu", "click"]);
export {
  ZE as I,
  JE as S,
  Ot as a
};
