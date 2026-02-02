var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { f as dn, a as sn } from "./DST53ZDr.js";
import { o as Bf } from "./BEnWiOuu.js";
import { n as q0, W as e1, a0 as Y0, h as an, at as r1, X as t1, g as sr, a7 as a1, Z as n1, _ as i1, $ as Yo, a1 as Z0, m as s1, t as Is, ah as f1, aB as o1, al as Zo, j as c1, aQ as Ma, o as wf, af as Jo, aN as yf, az as Lf, aR as u1, aS as l1, aT as h1, aU as d1, r as vu, l as mu, aV as J0, av as x1, ay as p1, k as v1, aW as gu, q as m1, aX as g1, a3 as _u, p as Mf, c as En, Q as pa, R as Gt, P as Jn, a as Ks, b as Uf, s as nn, E as Q0, x as _1, f as wu, aY as w1, aO as y1, aZ as k1 } from "./BR3rKFbi.js";
import { s as Qn } from "./B8RD_jRS.js";
import { p as js, i as E1 } from "./Cuf2qAe0.js";
import { s as Qo } from "./Buczzx1X.js";
import { d as Wf } from "./B36C9N_H.js";
import { b as yu } from "./BOZTa0ta.js";
import { i as T1 } from "./B2oESC31.js";
import "./F9G5yKTx.js";
function Gs(e, r) {
  return r;
}
function S1(e, r, t) {
  for (var a = [], n = r.length, i, s = r.length, f = 0; f < n; f++) {
    let v = r[f];
    mu(v, () => {
      if (i) {
        if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
          var d = e.outrogroups;
          kf(Lf(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else s -= 1;
    }, false);
  }
  if (s === 0) {
    var o = a.length === 0 && t !== null;
    if (o) {
      var u = t, h = u.parentNode;
      p1(h), h.append(u), e.items.clear();
    }
    kf(r, !o);
  } else i = { pending: new Set(r), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function kf(e, r = true) {
  for (var t = 0; t < e.length; t++) v1(e[t], r);
}
var ec;
function zs(e, r, t, a, n, i = null) {
  var s = e, f = /* @__PURE__ */ new Map(), o = (r & gu) !== 0;
  if (o) {
    var u = e;
    s = an ? Y0(r1(u)) : u.appendChild(q0());
  }
  an && t1();
  var h = null, v = a1(() => {
    var g = t();
    return u1(g) ? g : g == null ? [] : Lf(g);
  }), d, x = true;
  function _() {
    m.fallback = h, b1(m, d, s, r, a), h !== null && (d.length === 0 ? (h.f & Ma) === 0 ? vu(h) : (h.f ^= Ma, Si(h, null, s)) : mu(h, () => {
      h = null;
    }));
  }
  var y = e1(() => {
    d = sr(v);
    var g = d.length;
    let T = false;
    if (an) {
      var E = n1(s) === i1;
      E !== (g === 0) && (s = Yo(), Y0(s), Z0(false), T = true);
    }
    for (var A = /* @__PURE__ */ new Set(), X = c1, z = s1(), F = 0; F < g; F += 1) {
      an && Is.nodeType === f1 && Is.data === o1 && (s = Is, T = true, Z0(false));
      var U = d[F], D = a(U, F), W = x ? null : f.get(D);
      W ? (W.v && Zo(W.v, U), W.i && Zo(W.i, F), z && X.skipped_effects.delete(W.e)) : (W = F1(f, x ? s : ec ?? (ec = q0()), U, D, F, n, r, t), x || (W.e.f |= Ma), f.set(D, W)), A.add(D);
    }
    if (g === 0 && i && !h && (x ? h = wf(() => i(s)) : (h = wf(() => i(ec ?? (ec = q0()))), h.f |= Ma)), an && g > 0 && Y0(Yo()), !x) if (z) {
      for (const [K, ee] of f) A.has(K) || X.skipped_effects.add(ee.e);
      X.oncommit(_), X.ondiscard(() => {
      });
    } else _();
    T && Z0(true), sr(v);
  }), m = { effect: y, items: f, outrogroups: null, fallback: h };
  x = false, an && (s = Is);
}
function b1(e, r, t, a, n) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i;
  var i = (a & g1) !== 0, s = r.length, f = e.items, o = e.effect.first, u, h = null, v, d = [], x = [], _, y, m, g;
  if (i) for (g = 0; g < s; g += 1) _ = r[g], y = n(_, g), m = f.get(y).e, (m.f & Ma) === 0 && ((_b = (_a2 = m.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(m));
  for (g = 0; g < s; g += 1) {
    if (_ = r[g], y = n(_, g), m = f.get(y).e, e.outrogroups !== null) for (const W of e.outrogroups) W.pending.delete(m), W.done.delete(m);
    if ((m.f & Ma) !== 0) if (m.f ^= Ma, m === o) Si(m, null, t);
    else {
      var T = h ? h.next : o;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), rn(e, h, m), rn(e, m, T), Si(m, T, t), h = m, d = [], x = [], o = h.next;
      continue;
    }
    if ((m.f & J0) !== 0 && (vu(m), i && ((_d2 = (_c2 = m.nodes) == null ? void 0 : _c2.a) == null ? void 0 : _d2.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(m))), m !== o) {
      if (u !== void 0 && u.has(m)) {
        if (d.length < x.length) {
          var E = x[0], A;
          h = E.prev;
          var X = d[0], z = d[d.length - 1];
          for (A = 0; A < d.length; A += 1) Si(d[A], E, t);
          for (A = 0; A < x.length; A += 1) u.delete(x[A]);
          rn(e, X.prev, z.next), rn(e, h, X), rn(e, z, E), o = E, h = z, g -= 1, d = [], x = [];
        } else u.delete(m), Si(m, o, t), rn(e, m.prev, m.next), rn(e, m, h === null ? e.effect.first : h.next), rn(e, h, m), h = m;
        continue;
      }
      for (d = [], x = []; o !== null && o !== m; ) (u ?? (u = /* @__PURE__ */ new Set())).add(o), x.push(o), o = o.next;
      if (o === null) continue;
    }
    (m.f & Ma) === 0 && d.push(m), h = m, o = m.next;
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups) W.pending.size === 0 && (kf(Lf(W.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var F = [];
    if (u !== void 0) for (m of u) (m.f & J0) === 0 && F.push(m);
    for (; o !== null; ) (o.f & J0) === 0 && o !== e.fallback && F.push(o), o = o.next;
    var U = F.length;
    if (U > 0) {
      var D = (a & gu) !== 0 && s === 0 ? t : null;
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
  var o = (s & l1) !== 0 ? (s & h1) === 0 ? yf(t, false, false) : Jo(t) : null, u = (s & d1) !== 0 ? Jo(n) : null;
  return { v: o, i: u, e: wf(() => (i(r, o ?? t, u ?? n, f), () => {
    e.delete(a);
  })) };
}
function Si(e, r, t) {
  if (e.nodes) for (var a = e.nodes.start, n = e.nodes.end, i = r && (r.f & Ma) === 0 ? r.nodes.start : t; a !== null; ) {
    var s = x1(a);
    if (i.before(a), a === n) return;
    a = s;
  }
}
function rn(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function A1(e, r, t) {
  var a = e == null ? "" : "" + e;
  return a = a ? a + " " + r : r, a === "" ? null : a;
}
function C1(e, r, t, a, n, i) {
  var s = e.__className;
  if (an || s !== t || s === void 0) {
    var f = A1(t, a);
    (!an || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = t;
  }
  return i;
}
var I1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $s = { exports: {} }, O1 = $s.exports, rc;
function N1() {
  return rc || (rc = 1, (function(e, r) {
    (function(t, a) {
      e.exports = a();
    })(O1, function() {
      var t = function(c, l) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, w) {
          p.__proto__ = w;
        } || function(p, w) {
          for (var k in w) Object.prototype.hasOwnProperty.call(w, k) && (p[k] = w[k]);
        })(c, l);
      }, a = function() {
        return (a = Object.assign || function(c) {
          for (var l, p = 1, w = arguments.length; p < w; p++) for (var k in l = arguments[p]) Object.prototype.hasOwnProperty.call(l, k) && (c[k] = l[k]);
          return c;
        }).apply(this, arguments);
      };
      function n(c, l, p) {
        for (var w, k = 0, S = l.length; k < S; k++) !w && k in l || ((w = w || Array.prototype.slice.call(l, 0, k))[k] = l[k]);
        return c.concat(w || Array.prototype.slice.call(l));
      }
      var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : I1, s = Object.keys, f = Array.isArray;
      function o(c, l) {
        return typeof l != "object" || s(l).forEach(function(p) {
          c[p] = l[p];
        }), c;
      }
      typeof Promise > "u" || i.Promise || (i.Promise = Promise);
      var u = Object.getPrototypeOf, h = {}.hasOwnProperty;
      function v(c, l) {
        return h.call(c, l);
      }
      function d(c, l) {
        typeof l == "function" && (l = l(u(c))), (typeof Reflect > "u" ? s : Reflect.ownKeys)(l).forEach(function(p) {
          _(c, p, l[p]);
        });
      }
      var x = Object.defineProperty;
      function _(c, l, p, w) {
        x(c, l, o(p && v(p, "get") && typeof p.get == "function" ? { get: p.get, set: p.set, configurable: true } : { value: p, configurable: true, writable: true }, w));
      }
      function y(c) {
        return { from: function(l) {
          return c.prototype = Object.create(l.prototype), _(c.prototype, "constructor", c), { extend: d.bind(null, c.prototype) };
        } };
      }
      var m = Object.getOwnPropertyDescriptor, g = [].slice;
      function T(c, l, p) {
        return g.call(c, l, p);
      }
      function E(c, l) {
        return l(c);
      }
      function A(c) {
        if (!c) throw new Error("Assertion Failed");
      }
      function X(c) {
        i.setImmediate ? setImmediate(c) : setTimeout(c, 0);
      }
      function z(c, l) {
        if (typeof l == "string" && v(c, l)) return c[l];
        if (!l) return c;
        if (typeof l != "string") {
          for (var p = [], w = 0, k = l.length; w < k; ++w) {
            var S = z(c, l[w]);
            p.push(S);
          }
          return p;
        }
        var N = l.indexOf(".");
        if (N !== -1) {
          var H = c[l.substr(0, N)];
          return H == null ? void 0 : z(H, l.substr(N + 1));
        }
      }
      function F(c, l, p) {
        if (c && l !== void 0 && !("isFrozen" in Object && Object.isFrozen(c))) if (typeof l != "string" && "length" in l) {
          A(typeof p != "string" && "length" in p);
          for (var w = 0, k = l.length; w < k; ++w) F(c, l[w], p[w]);
        } else {
          var S, N, H = l.indexOf(".");
          H !== -1 ? (S = l.substr(0, H), (N = l.substr(H + 1)) === "" ? p === void 0 ? f(c) && !isNaN(parseInt(S)) ? c.splice(S, 1) : delete c[S] : c[S] = p : F(H = !(H = c[S]) || !v(c, S) ? c[S] = {} : H, N, p)) : p === void 0 ? f(c) && !isNaN(parseInt(l)) ? c.splice(l, 1) : delete c[l] : c[l] = p;
        }
      }
      function U(c) {
        var l, p = {};
        for (l in c) v(c, l) && (p[l] = c[l]);
        return p;
      }
      var D = [].concat;
      function W(c) {
        return D.apply([], c);
      }
      var Jr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(W([8, 16, 32, 64].map(function(c) {
        return ["Int", "Uint", "Float"].map(function(l) {
          return l + c + "Array";
        });
      }))).filter(function(c) {
        return i[c];
      }), K = new Set(Jr.map(function(c) {
        return i[c];
      })), ee = null;
      function de(c) {
        return ee = /* @__PURE__ */ new WeakMap(), c = (function l(p) {
          if (!p || typeof p != "object") return p;
          var w = ee.get(p);
          if (w) return w;
          if (f(p)) {
            w = [], ee.set(p, w);
            for (var k = 0, S = p.length; k < S; ++k) w.push(l(p[k]));
          } else if (K.has(p.constructor)) w = p;
          else {
            var N, H = u(p);
            for (N in w = H === Object.prototype ? {} : Object.create(H), ee.set(p, w), p) v(p, N) && (w[N] = l(p[N]));
          }
          return w;
        })(c), ee = null, c;
      }
      var Pe = {}.toString;
      function me(c) {
        return Pe.call(c).slice(8, -1);
      }
      var ze = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ke = typeof ze == "symbol" ? function(c) {
        var l;
        return c != null && (l = c[ze]) && l.apply(c);
      } : function() {
        return null;
      };
      function Be(c, l) {
        return l = c.indexOf(l), 0 <= l && c.splice(l, 1), 0 <= l;
      }
      var Qe = {};
      function he(c) {
        var l, p, w, k;
        if (arguments.length === 1) {
          if (f(c)) return c.slice();
          if (this === Qe && typeof c == "string") return [c];
          if (k = ke(c)) {
            for (p = []; !(w = k.next()).done; ) p.push(w.value);
            return p;
          }
          if (c == null) return [c];
          if (typeof (l = c.length) != "number") return [c];
          for (p = new Array(l); l--; ) p[l] = c[l];
          return p;
        }
        for (l = arguments.length, p = new Array(l); l--; ) p[l] = arguments[l];
        return p;
      }
      var fr = typeof Symbol < "u" ? function(c) {
        return c[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      }, Oe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], aa = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Oe), Me = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Te(c, l) {
        this.name = c, this.message = l;
      }
      function ye(c, l) {
        return c + ". Errors: " + Object.keys(l).map(function(p) {
          return l[p].toString();
        }).filter(function(p, w, k) {
          return k.indexOf(p) === w;
        }).join(`
`);
      }
      function je(c, l, p, w) {
        this.failures = l, this.failedKeys = w, this.successCount = p, this.message = ye(c, l);
      }
      function Ge(c, l) {
        this.name = "BulkError", this.failures = Object.keys(l).map(function(p) {
          return l[p];
        }), this.failuresByPos = l, this.message = ye(c, this.failures);
      }
      y(Te).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), y(je).from(Te), y(Ge).from(Te);
      var Ze = aa.reduce(function(c, l) {
        return c[l] = l + "Error", c;
      }, {}), P = Te, M = aa.reduce(function(c, l) {
        var p = l + "Error";
        function w(k, S) {
          this.name = p, k ? typeof k == "string" ? (this.message = "".concat(k).concat(S ? `
 ` + S : ""), this.inner = S || null) : typeof k == "object" && (this.message = "".concat(k.name, " ").concat(k.message), this.inner = k) : (this.message = Me[l] || p, this.inner = null);
        }
        return y(w).from(P), c[l] = w, c;
      }, {});
      M.Syntax = SyntaxError, M.Type = TypeError, M.Range = RangeError;
      var G = Oe.reduce(function(c, l) {
        return c[l + "Error"] = M[l], c;
      }, {}), V = aa.reduce(function(c, l) {
        return ["Syntax", "Type", "Range"].indexOf(l) === -1 && (c[l + "Error"] = M[l]), c;
      }, {});
      function ue() {
      }
      function O(c) {
        return c;
      }
      function Ce(c, l) {
        return c == null || c === O ? l : function(p) {
          return l(c(p));
        };
      }
      function We(c, l) {
        return function() {
          c.apply(this, arguments), l.apply(this, arguments);
        };
      }
      function Se(c, l) {
        return c === ue ? l : function() {
          var p = c.apply(this, arguments);
          p !== void 0 && (arguments[0] = p);
          var w = this.onsuccess, k = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var S = l.apply(this, arguments);
          return w && (this.onsuccess = this.onsuccess ? We(w, this.onsuccess) : w), k && (this.onerror = this.onerror ? We(k, this.onerror) : k), S !== void 0 ? S : p;
        };
      }
      function ar(c, l) {
        return c === ue ? l : function() {
          c.apply(this, arguments);
          var p = this.onsuccess, w = this.onerror;
          this.onsuccess = this.onerror = null, l.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? We(p, this.onsuccess) : p), w && (this.onerror = this.onerror ? We(w, this.onerror) : w);
        };
      }
      function rr(c, l) {
        return c === ue ? l : function(p) {
          var w = c.apply(this, arguments);
          o(p, w);
          var k = this.onsuccess, S = this.onerror;
          return this.onsuccess = null, this.onerror = null, p = l.apply(this, arguments), k && (this.onsuccess = this.onsuccess ? We(k, this.onsuccess) : k), S && (this.onerror = this.onerror ? We(S, this.onerror) : S), w === void 0 ? p === void 0 ? void 0 : p : o(w, p);
        };
      }
      function or(c, l) {
        return c === ue ? l : function() {
          return l.apply(this, arguments) !== false && c.apply(this, arguments);
        };
      }
      function Ir(c, l) {
        return c === ue ? l : function() {
          var p = c.apply(this, arguments);
          if (p && typeof p.then == "function") {
            for (var w = this, k = arguments.length, S = new Array(k); k--; ) S[k] = arguments[k];
            return p.then(function() {
              return l.apply(w, S);
            });
          }
          return l.apply(this, arguments);
        };
      }
      V.ModifyError = je, V.DexieError = Te, V.BulkError = Ge;
      var Er = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Kr(c) {
        Er = c;
      }
      var $e = {}, Tr = 100, Jr = typeof Promise > "u" ? [] : (function() {
        var c = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [c, u(c), c];
        var l = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [l, u(l), c];
      })(), Oe = Jr[0], aa = Jr[1], Jr = Jr[2], aa = aa && aa.then, qr = Oe && Oe.constructor, Ur = !!Jr, yt = function(c, l) {
        ya.push([c, l]), Ke && (queueMicrotask(E0), Ke = false);
      }, dt = true, Ke = true, kr = [], jr = [], zr = O, xt = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: ue, pgp: false, env: {}, finalize: ue }, Je = xt, ya = [], ka = 0, vn = [];
      function Xe(c) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var l = this._PSD = Je;
        if (typeof c != "function") {
          if (c !== $e) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === false && $a(this, this._value));
        }
        this._state = null, this._value = null, ++l.ref, (function p(w, k) {
          try {
            k(function(S) {
              if (w._state === null) {
                if (S === w) throw new TypeError("A promise cannot be resolved with itself.");
                var N = w._lib && qa();
                S && typeof S.then == "function" ? p(w, function(H, q) {
                  S instanceof Xe ? S._then(H, q) : S.then(H, q);
                }) : (w._state = true, w._value = S, ds(w)), N && Ya();
              }
            }, $a.bind(null, w));
          } catch (S) {
            $a(w, S);
          }
        })(this, c);
      }
      var hi = { get: function() {
        var c = Je, l = B;
        function p(w, k) {
          var S = this, N = !c.global && (c !== Je || l !== B), H = N && !L(), q = new Xe(function(Y, re) {
            di(S, new hs(Ee(w, c, N, H), Ee(k, c, N, H), Y, re, c));
          });
          return this._consoleTask && (q._consoleTask = this._consoleTask), q;
        }
        return p.prototype = $e, p;
      }, set: function(c) {
        _(this, "then", c && c.prototype === $e ? hi : { get: function() {
          return c;
        }, set: hi.set });
      } };
      function hs(c, l, p, w, k) {
        this.onFulfilled = typeof c == "function" ? c : null, this.onRejected = typeof l == "function" ? l : null, this.resolve = p, this.reject = w, this.psd = k;
      }
      function $a(c, l) {
        var p, w;
        jr.push(l), c._state === null && (p = c._lib && qa(), l = zr(l), c._state = false, c._value = l, w = c, kr.some(function(k) {
          return k._value === w._value;
        }) || kr.push(w), ds(c), p && Ya());
      }
      function ds(c) {
        var l = c._listeners;
        c._listeners = [];
        for (var p = 0, w = l.length; p < w; ++p) di(c, l[p]);
        var k = c._PSD;
        --k.ref || k.finalize(), ka === 0 && (++ka, yt(function() {
          --ka == 0 && xi();
        }, []));
      }
      function di(c, l) {
        if (c._state !== null) {
          var p = c._state ? l.onFulfilled : l.onRejected;
          if (p === null) return (c._state ? l.resolve : l.reject)(c._value);
          ++l.psd.ref, ++ka, yt(k0, [p, c, l]);
        } else c._listeners.push(l);
      }
      function k0(c, l, p) {
        try {
          var w, k = l._value;
          !l._state && jr.length && (jr = []), w = Er && l._consoleTask ? l._consoleTask.run(function() {
            return c(k);
          }) : c(k), l._state || jr.indexOf(k) !== -1 || (function(S) {
            for (var N = kr.length; N; ) if (kr[--N]._value === S._value) return kr.splice(N, 1);
          })(l), p.resolve(w);
        } catch (S) {
          p.reject(S);
        } finally {
          --ka == 0 && xi(), --p.psd.ref || p.psd.finalize();
        }
      }
      function E0() {
        ie(xt, function() {
          qa() && Ya();
        });
      }
      function qa() {
        var c = dt;
        return Ke = dt = false, c;
      }
      function Ya() {
        var c, l, p;
        do
          for (; 0 < ya.length; ) for (c = ya, ya = [], p = c.length, l = 0; l < p; ++l) {
            var w = c[l];
            w[0].apply(null, w[1]);
          }
        while (0 < ya.length);
        Ke = dt = true;
      }
      function xi() {
        var c = kr;
        kr = [], c.forEach(function(w) {
          w._PSD.onunhandled.call(null, w._value, w);
        });
        for (var l = vn.slice(0), p = l.length; p; ) l[--p]();
      }
      function Vn(c) {
        return new Xe($e, false, c);
      }
      function Wr(c, l) {
        var p = Je;
        return function() {
          var w = qa(), k = Je;
          try {
            return ne(p, true), c.apply(this, arguments);
          } catch (S) {
            l && l(S);
          } finally {
            ne(k, false), w && Ya();
          }
        };
      }
      d(Xe.prototype, { then: hi, _then: function(c, l) {
        di(this, new hs(null, null, c, l, Je));
      }, catch: function(c) {
        if (arguments.length === 1) return this.then(null, c);
        var l = c, p = arguments[1];
        return typeof l == "function" ? this.then(null, function(w) {
          return (w instanceof l ? p : Vn)(w);
        }) : this.then(null, function(w) {
          return (w && w.name === l ? p : Vn)(w);
        });
      }, finally: function(c) {
        return this.then(function(l) {
          return Xe.resolve(c()).then(function() {
            return l;
          });
        }, function(l) {
          return Xe.resolve(c()).then(function() {
            return Vn(l);
          });
        });
      }, timeout: function(c, l) {
        var p = this;
        return c < 1 / 0 ? new Xe(function(w, k) {
          var S = setTimeout(function() {
            return k(new M.Timeout(l));
          }, c);
          p.then(w, k).finally(clearTimeout.bind(null, S));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && _(Xe.prototype, Symbol.toStringTag, "Dexie.Promise"), xt.env = ce(), d(Xe, { all: function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          c.length === 0 && l([]);
          var w = c.length;
          c.forEach(function(k, S) {
            return Xe.resolve(k).then(function(N) {
              c[S] = N, --w || l(c);
            }, p);
          });
        });
      }, resolve: function(c) {
        return c instanceof Xe ? c : c && typeof c.then == "function" ? new Xe(function(l, p) {
          c.then(l, p);
        }) : new Xe($e, true, c);
      }, reject: Vn, race: function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          c.map(function(w) {
            return Xe.resolve(w).then(l, p);
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
      } }, follow: function(c, l) {
        return new Xe(function(p, w) {
          return I(function(k, S) {
            var N = Je;
            N.unhandleds = [], N.onunhandled = S, N.finalize = We(function() {
              var H, q = this;
              H = function() {
                q.unhandleds.length === 0 ? k() : S(q.unhandleds[0]);
              }, vn.push(function Y() {
                H(), vn.splice(vn.indexOf(Y), 1);
              }), ++ka, yt(function() {
                --ka == 0 && xi();
              }, []);
            }, N.finalize), c();
          }, l, p, w);
        });
      } }), qr && (qr.allSettled && _(Xe, "allSettled", function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(l) {
          c.length === 0 && l([]);
          var p = c.length, w = new Array(p);
          c.forEach(function(k, S) {
            return Xe.resolve(k).then(function(N) {
              return w[S] = { status: "fulfilled", value: N };
            }, function(N) {
              return w[S] = { status: "rejected", reason: N };
            }).then(function() {
              return --p || l(w);
            });
          });
        });
      }), qr.any && typeof AggregateError < "u" && _(Xe, "any", function() {
        var c = he.apply(null, arguments).map(fe);
        return new Xe(function(l, p) {
          c.length === 0 && p(new AggregateError([]));
          var w = c.length, k = new Array(w);
          c.forEach(function(S, N) {
            return Xe.resolve(S).then(function(H) {
              return l(H);
            }, function(H) {
              k[N] = H, --w || p(new AggregateError(k));
            });
          });
        });
      }), qr.withResolvers && (Xe.withResolvers = qr.withResolvers));
      var nt = { awaits: 0, echoes: 0, id: 0 }, T0 = 0, Xn = [], b = 0, B = 0, C = 0;
      function I(c, l, p, w) {
        var k = Je, S = Object.create(k);
        return S.parent = k, S.ref = 0, S.global = false, S.id = ++C, xt.env, S.env = Ur ? { Promise: Xe, PromiseProp: { value: Xe, configurable: true, writable: true }, all: Xe.all, race: Xe.race, allSettled: Xe.allSettled, any: Xe.any, resolve: Xe.resolve, reject: Xe.reject } : {}, l && o(S, l), ++k.ref, S.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, w = ie(S, c, p, w), S.ref === 0 && S.finalize(), w;
      }
      function R() {
        return nt.id || (nt.id = ++T0), ++nt.awaits, nt.echoes += Tr, nt.id;
      }
      function L() {
        return !!nt.awaits && (--nt.awaits == 0 && (nt.id = 0), nt.echoes = nt.awaits * Tr, true);
      }
      function fe(c) {
        return nt.echoes && c && c.constructor === qr ? (R(), c.then(function(l) {
          return L(), l;
        }, function(l) {
          return L(), Ie(l);
        })) : c;
      }
      function xe() {
        var c = Xn[Xn.length - 1];
        Xn.pop(), ne(c, false);
      }
      function ne(c, l) {
        var p, w = Je;
        (l ? !nt.echoes || b++ && c === Je : !b || --b && c === Je) || queueMicrotask(l ? (function(k) {
          ++B, nt.echoes && --nt.echoes != 0 || (nt.echoes = nt.awaits = nt.id = 0), Xn.push(Je), ne(k, true);
        }).bind(null, c) : xe), c !== Je && (Je = c, w === xt && (xt.env = ce()), Ur && (p = xt.env.Promise, l = c.env, (w.global || c.global) && (Object.defineProperty(i, "Promise", l.PromiseProp), p.all = l.all, p.race = l.race, p.resolve = l.resolve, p.reject = l.reject, l.allSettled && (p.allSettled = l.allSettled), l.any && (p.any = l.any))));
      }
      function ce() {
        var c = i.Promise;
        return Ur ? { Promise: c, PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"), all: c.all, race: c.race, allSettled: c.allSettled, any: c.any, resolve: c.resolve, reject: c.reject } : {};
      }
      function ie(c, l, p, w, k) {
        var S = Je;
        try {
          return ne(c, true), l(p, w, k);
        } finally {
          ne(S, false);
        }
      }
      function Ee(c, l, p, w) {
        return typeof c != "function" ? c : function() {
          var k = Je;
          p && R(), ne(l, true);
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
      ("" + aa).indexOf("[native code]") === -1 && (R = L = ue);
      var Ie = Xe.reject, we = "\uFFFF", be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", Nr = [], Hr = "__dbnames", it = "readonly", Ra = "readwrite";
      function $t(c, l) {
        return c ? l ? function() {
          return c.apply(this, arguments) && l.apply(this, arguments);
        } : c : l;
      }
      var Za = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function ta(c) {
        return typeof c != "string" || /\./.test(c) ? function(l) {
          return l;
        } : function(l) {
          return l[c] === void 0 && c in l && delete (l = de(l))[c], l;
        };
      }
      function Kn() {
        throw M.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ur(c, l) {
        try {
          var p = To(c), w = To(l);
          if (p !== w) return p === "Array" ? 1 : w === "Array" ? -1 : p === "binary" ? 1 : w === "binary" ? -1 : p === "string" ? 1 : w === "string" ? -1 : p === "Date" ? 1 : w !== "Date" ? NaN : -1;
          switch (p) {
            case "number":
            case "Date":
            case "string":
              return l < c ? 1 : c < l ? -1 : 0;
            case "binary":
              return (function(k, S) {
                for (var N = k.length, H = S.length, q = N < H ? N : H, Y = 0; Y < q; ++Y) if (k[Y] !== S[Y]) return k[Y] < S[Y] ? -1 : 1;
                return N === H ? 0 : N < H ? -1 : 1;
              })(So(c), So(l));
            case "Array":
              return (function(k, S) {
                for (var N = k.length, H = S.length, q = N < H ? N : H, Y = 0; Y < q; ++Y) {
                  var re = ur(k[Y], S[Y]);
                  if (re !== 0) return re;
                }
                return N === H ? 0 : N < H ? -1 : 1;
              })(c, l);
          }
        } catch {
        }
        return NaN;
      }
      function To(c) {
        var l = typeof c;
        return l != "object" ? l : ArrayBuffer.isView(c) ? "binary" : (c = me(c), c === "ArrayBuffer" ? "binary" : c);
      }
      function So(c) {
        return c instanceof Uint8Array ? c : ArrayBuffer.isView(c) ? new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : new Uint8Array(c);
      }
      function xs(c, l, p) {
        var w = c.schema.yProps;
        return w ? (l && 0 < p.numFailures && (l = l.filter(function(k, S) {
          return !p.failures[S];
        })), Promise.all(w.map(function(k) {
          return k = k.updatesTable, l ? c.db.table(k).where("k").anyOf(l).delete() : c.db.table(k).clear();
        })).then(function() {
          return p;
        })) : p;
      }
      var pi = (bo.prototype.execute = function(c) {
        var l = this["@@propmod"];
        if (l.add !== void 0) {
          var p = l.add;
          if (f(p)) return n(n([], f(c) ? c : [], true), p).sort();
          if (typeof p == "number") return (Number(c) || 0) + p;
          if (typeof p == "bigint") try {
            return BigInt(c) + p;
          } catch {
            return BigInt(0) + p;
          }
          throw new TypeError("Invalid term ".concat(p));
        }
        if (l.remove !== void 0) {
          var w = l.remove;
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
        return p = (p = l.replacePrefix) === null || p === void 0 ? void 0 : p[0], p && typeof c == "string" && c.startsWith(p) ? l.replacePrefix[1] + c.substring(p.length) : c;
      }, bo);
      function bo(c) {
        this["@@propmod"] = c;
      }
      function Fo(c, l) {
        for (var p = s(l), w = p.length, k = false, S = 0; S < w; ++S) {
          var N = p[S], H = l[N], q = z(c, N);
          H instanceof pi ? (F(c, N, H.execute(q)), k = true) : q !== H && (F(c, N, H), k = true);
        }
        return k;
      }
      var Ao = (Xr.prototype._trans = function(c, l, p) {
        var w = this._tx || Je.trans, k = this.name, S = Er && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(c === "readonly" ? "read" : "write", " ").concat(this.name));
        function N(Y, re, j) {
          if (!j.schema[k]) throw new M.NotFound("Table " + k + " not part of transaction");
          return l(j.idbtrans, j);
        }
        var H = qa();
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
            if (re._state.openComplete) return Ie(new M.DatabaseClosed(re._state.dbOpenError));
            if (!re._state.isBeingOpened) {
              if (!re._state.autoOpen) return Ie(new M.DatabaseClosed());
              re.open().catch(ue);
            }
            return re._state.dbReadyPromise.then(function() {
              return Y(re, j, ae, Z);
            });
          })(this.db, c, [this.name], N);
          return S && (q._consoleTask = S, q = q.catch(function(Y) {
            return console.trace(Y), Ie(Y);
          })), q;
        } finally {
          H && Ya();
        }
      }, Xr.prototype.get = function(c, l) {
        var p = this;
        return c && c.constructor === Object ? this.where(c).first(l) : c == null ? Ie(new M.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(w) {
          return p.core.get({ trans: w, key: c }).then(function(k) {
            return p.hook.reading.fire(k);
          });
        }).then(l);
      }, Xr.prototype.where = function(c) {
        if (typeof c == "string") return new this.db.WhereClause(this, c);
        if (f(c)) return new this.db.WhereClause(this, "[".concat(c.join("+"), "]"));
        var l = s(c);
        if (l.length === 1) return this.where(l[0]).equals(c[l[0]]);
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
          var S = p.keyPath.slice(0, l.length);
          return this.where(S).equals(S.map(function(q) {
            return c[q];
          }));
        }
        !p && Er && console.warn("The query ".concat(JSON.stringify(c), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(l.join("+"), "]"));
        var w = this.schema.idxByName;
        function k(H, q) {
          return ur(H, q) === 0;
        }
        var N = l.reduce(function(j, q) {
          var Y = j[0], re = j[1], j = w[q], ae = c[q];
          return [Y || j, Y || !j ? $t(re, j && j.multi ? function(Z) {
            return Z = z(Z, q), f(Z) && Z.some(function(J) {
              return k(ae, J);
            });
          } : function(Z) {
            return k(ae, z(Z, q));
          }) : re];
        }, [null, null]), S = N[0], N = N[1];
        return S ? this.where(S.name).equals(c[S.keyPath]).filter(N) : p ? this.filter(N) : this.where(l).equals("");
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
        var l, p = this.db, w = this.name;
        function k() {
          return l !== null && l.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = c).prototype instanceof Kn && ((function(q, Y) {
          if (typeof Y != "function" && Y !== null) throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
          function re() {
            this.constructor = q;
          }
          t(q, Y), q.prototype = Y === null ? Object.create(Y) : (re.prototype = Y.prototype, new re());
        })(k, l = c), Object.defineProperty(k.prototype, "db", { get: function() {
          return p;
        }, enumerable: false, configurable: true }), k.prototype.table = function() {
          return w;
        }, c = k);
        for (var S = /* @__PURE__ */ new Set(), N = c.prototype; N; N = u(N)) Object.getOwnPropertyNames(N).forEach(function(q) {
          return S.add(q);
        });
        function H(q) {
          if (!q) return q;
          var Y, re = Object.create(c.prototype);
          for (Y in q) if (!S.has(Y)) try {
            re[Y] = q[Y];
          } catch {
          }
          return re;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = H, this.hook("reading", H), c;
      }, Xr.prototype.defineClass = function() {
        return this.mapToClass(function(c) {
          o(this, c);
        });
      }, Xr.prototype.add = function(c, l) {
        var p = this, w = this.schema.primKey, k = w.auto, S = w.keyPath, N = c;
        return S && k && (N = ta(S)(c)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "add", keys: l != null ? [l] : null, values: [N] });
        }).then(function(H) {
          return H.numFailures ? Xe.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (S) try {
            F(c, S, H);
          } catch {
          }
          return H;
        });
      }, Xr.prototype.upsert = function(c, l) {
        var p = this, w = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(k) {
          return p.core.get({ trans: k, key: c }).then(function(S) {
            var N = S ?? {};
            return Fo(N, l), w && F(N, w, c), p.core.mutate({ trans: k, type: "put", values: [N], keys: [c], upsert: true, updates: { keys: [c], changeSpecs: [l] } }).then(function(H) {
              return H.numFailures ? Xe.reject(H.failures[0]) : !!S;
            });
          });
        });
      }, Xr.prototype.update = function(c, l) {
        return typeof c != "object" || f(c) ? this.where(":id").equals(c).modify(l) : (c = z(c, this.schema.primKey.keyPath), c === void 0 ? Ie(new M.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(c).modify(l));
      }, Xr.prototype.put = function(c, l) {
        var p = this, w = this.schema.primKey, k = w.auto, S = w.keyPath, N = c;
        return S && k && (N = ta(S)(c)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "put", values: [N], keys: l != null ? [l] : null });
        }).then(function(H) {
          return H.numFailures ? Xe.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (S) try {
            F(c, S, H);
          } catch {
          }
          return H;
        });
      }, Xr.prototype.delete = function(c) {
        var l = this;
        return this._trans("readwrite", function(p) {
          return l.core.mutate({ trans: p, type: "delete", keys: [c] }).then(function(w) {
            return xs(l, [c], w);
          }).then(function(w) {
            return w.numFailures ? Xe.reject(w.failures[0]) : void 0;
          });
        });
      }, Xr.prototype.clear = function() {
        var c = this;
        return this._trans("readwrite", function(l) {
          return c.core.mutate({ trans: l, type: "deleteRange", range: Za }).then(function(p) {
            return xs(c, null, p);
          });
        }).then(function(l) {
          return l.numFailures ? Xe.reject(l.failures[0]) : void 0;
        });
      }, Xr.prototype.bulkGet = function(c) {
        var l = this;
        return this._trans("readonly", function(p) {
          return l.core.getMany({ keys: c, trans: p }).then(function(w) {
            return w.map(function(k) {
              return l.hook.reading.fire(k);
            });
          });
        });
      }, Xr.prototype.bulkAdd = function(c, l, p) {
        var w = this, k = Array.isArray(l) ? l : void 0, S = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(N) {
          var Y = w.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new M.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && H ? c.map(ta(Y)) : c;
          return w.core.mutate({ trans: N, type: "add", keys: k, values: Y, wantResults: S }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return S ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkAdd(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkPut = function(c, l, p) {
        var w = this, k = Array.isArray(l) ? l : void 0, S = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(N) {
          var Y = w.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new M.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new M.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && H ? c.map(ta(Y)) : c;
          return w.core.mutate({ trans: N, type: "put", keys: k, values: Y, wantResults: S }).then(function(J) {
            var j = J.numFailures, ae = J.results, Z = J.lastResult, J = J.failures;
            if (j === 0) return S ? ae : Z;
            throw new Ge("".concat(w.name, ".bulkPut(): ").concat(j, " of ").concat(q, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkUpdate = function(c) {
        var l = this, p = this.core, w = c.map(function(N) {
          return N.key;
        }), k = c.map(function(N) {
          return N.changes;
        }), S = [];
        return this._trans("readwrite", function(N) {
          return p.getMany({ trans: N, keys: w, cache: "clone" }).then(function(H) {
            var q = [], Y = [];
            c.forEach(function(j, ae) {
              var Z = j.key, J = j.changes, Q = H[ae];
              if (Q) {
                for (var te = 0, se = Object.keys(J); te < se.length; te++) {
                  var le = se[te], pe = J[le];
                  if (le === l.schema.primKey.keyPath) {
                    if (ur(pe, Z) !== 0) throw new M.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(Q, le, pe);
                }
                S.push(ae), q.push(Z), Y.push(Q);
              }
            });
            var re = q.length;
            return p.mutate({ trans: N, type: "put", keys: q, values: Y, updates: { keys: w, changeSpecs: k } }).then(function(j) {
              var ae = j.numFailures, Z = j.failures;
              if (ae === 0) return re;
              for (var J = 0, Q = Object.keys(Z); J < Q.length; J++) {
                var te, se = Q[J], le = S[Number(se)];
                le != null && (te = Z[se], delete Z[se], Z[le] = te);
              }
              throw new Ge("".concat(l.name, ".bulkUpdate(): ").concat(ae, " of ").concat(re, " operations failed"), Z);
            });
          });
        });
      }, Xr.prototype.bulkDelete = function(c) {
        var l = this, p = c.length;
        return this._trans("readwrite", function(w) {
          return l.core.mutate({ trans: w, type: "delete", keys: c }).then(function(k) {
            return xs(l, c, k);
          });
        }).then(function(N) {
          var k = N.numFailures, S = N.lastResult, N = N.failures;
          if (k === 0) return S;
          throw new Ge("".concat(l.name, ".bulkDelete(): ").concat(k, " of ").concat(p, " operations failed"), N);
        });
      }, Xr);
      function Xr() {
      }
      function vi(c) {
        function l(N, H) {
          if (H) {
            for (var q = arguments.length, Y = new Array(q - 1); --q; ) Y[q - 1] = arguments[q];
            return p[N].subscribe.apply(null, Y), c;
          }
          if (typeof N == "string") return p[N];
        }
        var p = {};
        l.addEventType = S;
        for (var w = 1, k = arguments.length; w < k; ++w) S(arguments[w]);
        return l;
        function S(N, H, q) {
          if (typeof N != "object") {
            var Y;
            H = H || or;
            var re = { subscribers: [], fire: q = q || ue, subscribe: function(j) {
              re.subscribers.indexOf(j) === -1 && (re.subscribers.push(j), re.fire = H(re.fire, j));
            }, unsubscribe: function(j) {
              re.subscribers = re.subscribers.filter(function(ae) {
                return ae !== j;
              }), re.fire = re.subscribers.reduce(H, q);
            } };
            return p[N] = l[N] = re;
          }
          s(Y = N).forEach(function(j) {
            var ae = Y[j];
            if (f(ae)) S(j, Y[j][0], Y[j][1]);
            else {
              if (ae !== "asap") throw new M.InvalidArgument("Invalid event config");
              var Z = S(j, O, function() {
                for (var J = arguments.length, Q = new Array(J); J--; ) Q[J] = arguments[J];
                Z.subscribers.forEach(function(te) {
                  X(function() {
                    te.apply(null, Q);
                  });
                });
              });
            }
          });
        }
      }
      function mi(c, l) {
        return y(l).from({ prototype: c }), l;
      }
      function jn(c, l) {
        return !(c.filter || c.algorithm || c.or) && (l ? c.justLimit : !c.replayFilter);
      }
      function S0(c, l) {
        c.filter = $t(c.filter, l);
      }
      function b0(c, l, p) {
        var w = c.replayFilter;
        c.replayFilter = w ? function() {
          return $t(w(), l());
        } : l, c.justLimit = p && !w;
      }
      function ps(c, l) {
        if (c.isPrimKey) return l.primaryKey;
        var p = l.getIndexByKeyPath(c.index);
        if (!p) throw new M.Schema("KeyPath " + c.index + " on object store " + l.name + " is not indexed");
        return p;
      }
      function Co(c, l, p) {
        var w = ps(c, l.schema);
        return l.openCursor({ trans: p, values: !c.keysOnly, reverse: c.dir === "prev", unique: !!c.unique, query: { index: w, range: c.range } });
      }
      function vs(c, l, p, w) {
        var k = c.replayFilter ? $t(c.filter, c.replayFilter()) : c.filter;
        if (c.or) {
          var S = {}, N = function(H, q, Y) {
            var re, j;
            k && !k(q, Y, function(ae) {
              return q.stop(ae);
            }, function(ae) {
              return q.fail(ae);
            }) || ((j = "" + (re = q.primaryKey)) == "[object ArrayBuffer]" && (j = "" + new Uint8Array(re)), v(S, j) || (S[j] = true, l(H, q, Y)));
          };
          return Promise.all([c.or._iterate(N, p), Io(Co(c, w, p), c.algorithm, N, !c.keysOnly && c.valueMapper)]);
        }
        return Io(Co(c, w, p), $t(c.algorithm, k), l, !c.keysOnly && c.valueMapper);
      }
      function Io(c, l, p, w) {
        var k = Wr(w ? function(S, N, H) {
          return p(w(S), N, H);
        } : p);
        return c.then(function(S) {
          if (S) return S.start(function() {
            var N = function() {
              return S.continue();
            };
            l && !l(S, function(H) {
              return N = H;
            }, function(H) {
              S.stop(H), N = ue;
            }, function(H) {
              S.fail(H), N = ue;
            }) || k(S.value, S, function(H) {
              return N = H;
            }), N();
          });
        });
      }
      var Rh = (Or.prototype._read = function(c, l) {
        var p = this._ctx;
        return p.error ? p.table._trans(null, Ie.bind(null, p.error)) : p.table._trans("readonly", c).then(l);
      }, Or.prototype._write = function(c) {
        var l = this._ctx;
        return l.error ? l.table._trans(null, Ie.bind(null, l.error)) : l.table._trans("readwrite", c, "locked");
      }, Or.prototype._addAlgorithm = function(c) {
        var l = this._ctx;
        l.algorithm = $t(l.algorithm, c);
      }, Or.prototype._iterate = function(c, l) {
        return vs(this._ctx, c, l, this._ctx.table.core);
      }, Or.prototype.clone = function(c) {
        var l = Object.create(this.constructor.prototype), p = Object.create(this._ctx);
        return c && o(p, c), l._ctx = p, l;
      }, Or.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Or.prototype.each = function(c) {
        var l = this._ctx;
        return this._read(function(p) {
          return vs(l, c, p, l.table.core);
        });
      }, Or.prototype.count = function(c) {
        var l = this;
        return this._read(function(p) {
          var w = l._ctx, k = w.table.core;
          if (jn(w, true)) return k.count({ trans: p, query: { index: ps(w, k.schema), range: w.range } }).then(function(N) {
            return Math.min(N, w.limit);
          });
          var S = 0;
          return vs(w, function() {
            return ++S, false;
          }, p, k).then(function() {
            return S;
          });
        }).then(c);
      }, Or.prototype.sortBy = function(c, l) {
        var p = c.split(".").reverse(), w = p[0], k = p.length - 1;
        function S(q, Y) {
          return Y ? S(q[p[Y]], Y - 1) : q[w];
        }
        var N = this._ctx.dir === "next" ? 1 : -1;
        function H(q, Y) {
          return ur(S(q, k), S(Y, k)) * N;
        }
        return this.toArray(function(q) {
          return q.sort(H);
        }).then(l);
      }, Or.prototype.toArray = function(c) {
        var l = this;
        return this._read(function(p) {
          var w = l._ctx;
          if (w.dir === "next" && jn(w, true) && 0 < w.limit) {
            var k = w.valueMapper, S = ps(w, w.table.core.schema);
            return w.table.core.query({ trans: p, limit: w.limit, values: true, query: { index: S, range: w.range } }).then(function(H) {
              return H = H.result, k ? H.map(k) : H;
            });
          }
          var N = [];
          return vs(w, function(H) {
            return N.push(H);
          }, p, w.table.core).then(function() {
            return N;
          });
        }, c);
      }, Or.prototype.offset = function(c) {
        var l = this._ctx;
        return c <= 0 || (l.offset += c, jn(l) ? b0(l, function() {
          var p = c;
          return function(w, k) {
            return p === 0 || (p === 1 ? --p : k(function() {
              w.advance(p), p = 0;
            }), false);
          };
        }) : b0(l, function() {
          var p = c;
          return function() {
            return --p < 0;
          };
        })), this;
      }, Or.prototype.limit = function(c) {
        return this._ctx.limit = Math.min(this._ctx.limit, c), b0(this._ctx, function() {
          var l = c;
          return function(p, w, k) {
            return --l <= 0 && w(k), 0 <= l;
          };
        }, true), this;
      }, Or.prototype.until = function(c, l) {
        return S0(this._ctx, function(p, w, k) {
          return !c(p.value) || (w(k), l);
        }), this;
      }, Or.prototype.first = function(c) {
        return this.limit(1).toArray(function(l) {
          return l[0];
        }).then(c);
      }, Or.prototype.last = function(c) {
        return this.reverse().first(c);
      }, Or.prototype.filter = function(c) {
        var l;
        return S0(this._ctx, function(p) {
          return c(p.value);
        }), (l = this._ctx).isMatch = $t(l.isMatch, c), this;
      }, Or.prototype.and = function(c) {
        return this.filter(c);
      }, Or.prototype.or = function(c) {
        return new this.db.WhereClause(this._ctx.table, c, this);
      }, Or.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Or.prototype.desc = function() {
        return this.reverse();
      }, Or.prototype.eachKey = function(c) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, w) {
          c(w.key, w);
        });
      }, Or.prototype.eachUniqueKey = function(c) {
        return this._ctx.unique = "unique", this.eachKey(c);
      }, Or.prototype.eachPrimaryKey = function(c) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, w) {
          c(w.primaryKey, w);
        });
      }, Or.prototype.keys = function(c) {
        var l = this._ctx;
        l.keysOnly = !l.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.key);
        }).then(function() {
          return p;
        }).then(c);
      }, Or.prototype.primaryKeys = function(c) {
        var l = this._ctx;
        if (l.dir === "next" && jn(l, true) && 0 < l.limit) return this._read(function(w) {
          var k = ps(l, l.table.core.schema);
          return l.table.core.query({ trans: w, values: false, limit: l.limit, query: { index: k, range: l.range } });
        }).then(function(w) {
          return w.result;
        }).then(c);
        l.keysOnly = !l.isMatch;
        var p = [];
        return this.each(function(w, k) {
          p.push(k.primaryKey);
        }).then(function() {
          return p;
        }).then(c);
      }, Or.prototype.uniqueKeys = function(c) {
        return this._ctx.unique = "unique", this.keys(c);
      }, Or.prototype.firstKey = function(c) {
        return this.limit(1).keys(function(l) {
          return l[0];
        }).then(c);
      }, Or.prototype.lastKey = function(c) {
        return this.reverse().firstKey(c);
      }, Or.prototype.distinct = function() {
        var c = this._ctx, c = c.index && c.table.schema.idxByName[c.index];
        if (!c || !c.multi) return this;
        var l = {};
        return S0(this._ctx, function(k) {
          var w = k.primaryKey.toString(), k = v(l, w);
          return l[w] = true, !k;
        }), this;
      }, Or.prototype.modify = function(c) {
        var l = this, p = this._ctx;
        return this._write(function(w) {
          var k = typeof c == "function" ? c : function(Q) {
            return Fo(Q, c);
          }, S = p.table.core, Y = S.schema.primaryKey, N = Y.outbound, H = Y.extractKey, q = 200, Y = l.db._options.modifyChunkSize;
          Y && (q = typeof Y == "object" ? Y[S.name] || Y["*"] || 200 : Y);
          function re(Q, le) {
            var se = le.failures, le = le.numFailures;
            ae += Q - le;
            for (var pe = 0, ge = s(se); pe < ge.length; pe++) {
              var Re = ge[pe];
              j.push(se[Re]);
            }
          }
          var j = [], ae = 0, Z = [], J = c === Do;
          return l.clone().primaryKeys().then(function(Q) {
            function te(le) {
              var pe = Math.min(q, Q.length - le), ge = Q.slice(le, le + pe);
              return (J ? Promise.resolve([]) : S.getMany({ trans: w, keys: ge, cache: "immutable" })).then(function(Re) {
                var He = [], Fe = [], Le = N ? [] : null, Ve = J ? ge : [];
                if (!J) for (var Ue = 0; Ue < pe; ++Ue) {
                  var qe = Re[Ue], pr = { value: de(qe), primKey: Q[le + Ue] };
                  k.call(pr, pr.value, pr) !== false && (pr.value == null ? Ve.push(Q[le + Ue]) : N || ur(H(qe), H(pr.value)) === 0 ? (Fe.push(pr.value), N && Le.push(Q[le + Ue])) : (Ve.push(Q[le + Ue]), He.push(pr.value)));
                }
                return Promise.resolve(0 < He.length && S.mutate({ trans: w, type: "add", values: He }).then(function(_r) {
                  for (var Sr in _r.failures) Ve.splice(parseInt(Sr), 1);
                  re(He.length, _r);
                })).then(function() {
                  return (0 < Fe.length || se && typeof c == "object") && S.mutate({ trans: w, type: "put", keys: Le, values: Fe, criteria: se, changeSpec: typeof c != "function" && c, isAdditionalChunk: 0 < le }).then(function(_r) {
                    return re(Fe.length, _r);
                  });
                }).then(function() {
                  return (0 < Ve.length || se && J) && S.mutate({ trans: w, type: "delete", keys: Ve, criteria: se, isAdditionalChunk: 0 < le }).then(function(_r) {
                    return xs(p.table, Ve, _r);
                  }).then(function(_r) {
                    return re(Ve.length, _r);
                  });
                }).then(function() {
                  return Q.length > le + pe && te(le + q);
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
        var c = this._ctx, l = c.range;
        return !jn(c) || c.table.schema.yProps || !c.isPrimKey && l.type !== 3 ? this.modify(Do) : this._write(function(p) {
          var w = c.table.core.schema.primaryKey, k = l;
          return c.table.core.count({ trans: p, query: { index: w, range: k } }).then(function(S) {
            return c.table.core.mutate({ trans: p, type: "deleteRange", range: k }).then(function(q) {
              var H = q.failures, q = q.numFailures;
              if (q) throw new je("Could not delete some values", Object.keys(H).map(function(Y) {
                return H[Y];
              }), S - q);
              return S - q;
            });
          });
        });
      }, Or);
      function Or() {
      }
      var Do = function(c, l) {
        return l.value = null;
      };
      function Ph(c, l) {
        return c < l ? -1 : c === l ? 0 : 1;
      }
      function Bh(c, l) {
        return l < c ? -1 : c === l ? 0 : 1;
      }
      function qt(c, l, p) {
        return c = c instanceof No ? new c.Collection(c) : c, c._ctx.error = new (p || TypeError)(l), c;
      }
      function Gn(c) {
        return new c.Collection(c, function() {
          return Oo("");
        }).limit(0);
      }
      function ms(c, l, p, w) {
        var k, S, N, H, q, Y, re, j = p.length;
        if (!p.every(function(J) {
          return typeof J == "string";
        })) return qt(c, cr);
        function ae(J) {
          k = J === "next" ? function(te) {
            return te.toUpperCase();
          } : function(te) {
            return te.toLowerCase();
          }, S = J === "next" ? function(te) {
            return te.toLowerCase();
          } : function(te) {
            return te.toUpperCase();
          }, N = J === "next" ? Ph : Bh;
          var Q = p.map(function(te) {
            return { lower: S(te), upper: k(te) };
          }).sort(function(te, se) {
            return N(te.lower, se.lower);
          });
          H = Q.map(function(te) {
            return te.upper;
          }), q = Q.map(function(te) {
            return te.lower;
          }), re = (Y = J) === "next" ? "" : w;
        }
        ae("next"), c = new c.Collection(c, function() {
          return Ja(H[0], q[j - 1] + w);
        }), c._ondirectionchange = function(J) {
          ae(J);
        };
        var Z = 0;
        return c._addAlgorithm(function(J, Q, te) {
          var se = J.key;
          if (typeof se != "string") return false;
          var le = S(se);
          if (l(le, q, Z)) return true;
          for (var pe = null, ge = Z; ge < j; ++ge) {
            var Re = (function(He, Fe, Le, Ve, Ue, qe) {
              for (var pr = Math.min(He.length, Ve.length), _r = -1, Sr = 0; Sr < pr; ++Sr) {
                var Yt = Fe[Sr];
                if (Yt !== Ve[Sr]) return Ue(He[Sr], Le[Sr]) < 0 ? He.substr(0, Sr) + Le[Sr] + Le.substr(Sr + 1) : Ue(He[Sr], Ve[Sr]) < 0 ? He.substr(0, Sr) + Ve[Sr] + Le.substr(Sr + 1) : 0 <= _r ? He.substr(0, _r) + Fe[_r] + Le.substr(_r + 1) : null;
                Ue(He[Sr], Yt) < 0 && (_r = Sr);
              }
              return pr < Ve.length && qe === "next" ? He + Le.substr(He.length) : pr < He.length && qe === "prev" ? He.substr(0, Le.length) : _r < 0 ? null : He.substr(0, _r) + Ve[_r] + Le.substr(_r + 1);
            })(se, le, H[ge], q[ge], N, Y);
            Re === null && pe === null ? Z = ge + 1 : (pe === null || 0 < N(pe, Re)) && (pe = Re);
          }
          return Q(pe !== null ? function() {
            J.continue(pe + re);
          } : te), false;
        }), c;
      }
      function Ja(c, l, p, w) {
        return { type: 2, lower: c, upper: l, lowerOpen: p, upperOpen: w };
      }
      function Oo(c) {
        return { type: 1, lower: c, upper: c };
      }
      var No = (Object.defineProperty(pt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), pt.prototype.between = function(c, l, p, w) {
        p = p !== false, w = w === true;
        try {
          return 0 < this._cmp(c, l) || this._cmp(c, l) === 0 && (p || w) && (!p || !w) ? Gn(this) : new this.Collection(this, function() {
            return Ja(c, l, !p, !w);
          });
        } catch {
          return qt(this, be);
        }
      }, pt.prototype.equals = function(c) {
        return c == null ? qt(this, be) : new this.Collection(this, function() {
          return Oo(c);
        });
      }, pt.prototype.above = function(c) {
        return c == null ? qt(this, be) : new this.Collection(this, function() {
          return Ja(c, void 0, true);
        });
      }, pt.prototype.aboveOrEqual = function(c) {
        return c == null ? qt(this, be) : new this.Collection(this, function() {
          return Ja(c, void 0, false);
        });
      }, pt.prototype.below = function(c) {
        return c == null ? qt(this, be) : new this.Collection(this, function() {
          return Ja(void 0, c, false, true);
        });
      }, pt.prototype.belowOrEqual = function(c) {
        return c == null ? qt(this, be) : new this.Collection(this, function() {
          return Ja(void 0, c);
        });
      }, pt.prototype.startsWith = function(c) {
        return typeof c != "string" ? qt(this, cr) : this.between(c, c + we, true, true);
      }, pt.prototype.startsWithIgnoreCase = function(c) {
        return c === "" ? this.startsWith(c) : ms(this, function(l, p) {
          return l.indexOf(p[0]) === 0;
        }, [c], we);
      }, pt.prototype.equalsIgnoreCase = function(c) {
        return ms(this, function(l, p) {
          return l === p[0];
        }, [c], "");
      }, pt.prototype.anyOfIgnoreCase = function() {
        var c = he.apply(Qe, arguments);
        return c.length === 0 ? Gn(this) : ms(this, function(l, p) {
          return p.indexOf(l) !== -1;
        }, c, "");
      }, pt.prototype.startsWithAnyOfIgnoreCase = function() {
        var c = he.apply(Qe, arguments);
        return c.length === 0 ? Gn(this) : ms(this, function(l, p) {
          return p.some(function(w) {
            return l.indexOf(w) === 0;
          });
        }, c, we);
      }, pt.prototype.anyOf = function() {
        var c = this, l = he.apply(Qe, arguments), p = this._cmp;
        try {
          l.sort(p);
        } catch {
          return qt(this, be);
        }
        if (l.length === 0) return Gn(this);
        var w = new this.Collection(this, function() {
          return Ja(l[0], l[l.length - 1]);
        });
        w._ondirectionchange = function(S) {
          p = S === "next" ? c._ascending : c._descending, l.sort(p);
        };
        var k = 0;
        return w._addAlgorithm(function(S, N, H) {
          for (var q = S.key; 0 < p(q, l[k]); ) if (++k === l.length) return N(H), false;
          return p(q, l[k]) === 0 || (N(function() {
            S.continue(l[k]);
          }), false);
        }), w;
      }, pt.prototype.notEqual = function(c) {
        return this.inAnyRange([[-1 / 0, c], [c, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, pt.prototype.noneOf = function() {
        var c = he.apply(Qe, arguments);
        if (c.length === 0) return new this.Collection(this);
        try {
          c.sort(this._ascending);
        } catch {
          return qt(this, be);
        }
        var l = c.reduce(function(p, w) {
          return p ? p.concat([[p[p.length - 1][1], w]]) : [[-1 / 0, w]];
        }, null);
        return l.push([c[c.length - 1], this.db._maxKey]), this.inAnyRange(l, { includeLowers: false, includeUppers: false });
      }, pt.prototype.inAnyRange = function(se, l) {
        var p = this, w = this._cmp, k = this._ascending, S = this._descending, N = this._min, H = this._max;
        if (se.length === 0) return Gn(this);
        if (!se.every(function(le) {
          return le[0] !== void 0 && le[1] !== void 0 && k(le[0], le[1]) <= 0;
        })) return qt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", M.InvalidArgument);
        var q = !l || l.includeLowers !== false, Y = l && l.includeUppers === true, re, j = k;
        function ae(le, pe) {
          return j(le[0], pe[0]);
        }
        try {
          (re = se.reduce(function(le, pe) {
            for (var ge = 0, Re = le.length; ge < Re; ++ge) {
              var He = le[ge];
              if (w(pe[0], He[1]) < 0 && 0 < w(pe[1], He[0])) {
                He[0] = N(He[0], pe[0]), He[1] = H(He[1], pe[1]);
                break;
              }
            }
            return ge === Re && le.push(pe), le;
          }, [])).sort(ae);
        } catch {
          return qt(this, be);
        }
        var Z = 0, J = Y ? function(le) {
          return 0 < k(le, re[Z][1]);
        } : function(le) {
          return 0 <= k(le, re[Z][1]);
        }, Q = q ? function(le) {
          return 0 < S(le, re[Z][0]);
        } : function(le) {
          return 0 <= S(le, re[Z][0]);
        }, te = J, se = new this.Collection(this, function() {
          return Ja(re[0][0], re[re.length - 1][1], !q, !Y);
        });
        return se._ondirectionchange = function(le) {
          j = le === "next" ? (te = J, k) : (te = Q, S), re.sort(ae);
        }, se._addAlgorithm(function(le, pe, ge) {
          for (var Re, He = le.key; te(He); ) if (++Z === re.length) return pe(ge), false;
          return !J(Re = He) && !Q(Re) || (p._cmp(He, re[Z][1]) === 0 || p._cmp(He, re[Z][0]) === 0 || pe(function() {
            j === k ? le.continue(re[Z][0]) : le.continue(re[Z][1]);
          }), false);
        }), se;
      }, pt.prototype.startsWithAnyOf = function() {
        var c = he.apply(Qe, arguments);
        return c.every(function(l) {
          return typeof l == "string";
        }) ? c.length === 0 ? Gn(this) : this.inAnyRange(c.map(function(l) {
          return [l, l + we];
        })) : qt(this, "startsWithAnyOf() only works with strings");
      }, pt);
      function pt() {
      }
      function Ea(c) {
        return Wr(function(l) {
          return gi(l), c(l.target.error), false;
        });
      }
      function gi(c) {
        c.stopPropagation && c.stopPropagation(), c.preventDefault && c.preventDefault();
      }
      var _i = "storagemutated", F0 = "x-storagemutated-1", Qa = vi(null, _i), Lh = (Ta.prototype._lock = function() {
        return A(!Je.global), ++this._reculock, this._reculock !== 1 || Je.global || (Je.lockOwnerFor = this), this;
      }, Ta.prototype._unlock = function() {
        if (A(!Je.global), --this._reculock == 0) for (Je.global || (Je.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var c = this._blockedFuncs.shift();
          try {
            ie(c[1], c[0]);
          } catch {
          }
        }
        return this;
      }, Ta.prototype._locked = function() {
        return this._reculock && Je.lockOwnerFor !== this;
      }, Ta.prototype.create = function(c) {
        var l = this;
        if (!this.mode) return this;
        var p = this.db.idbdb, w = this.db._state.dbOpenError;
        if (A(!this.idbtrans), !c && !p) switch (w && w.name) {
          case "DatabaseClosedError":
            throw new M.DatabaseClosed(w);
          case "MissingAPIError":
            throw new M.MissingAPI(w.message, w);
          default:
            throw new M.OpenFailed(w);
        }
        if (!this.active) throw new M.TransactionInactive();
        return A(this._completion._state === null), (c = this.idbtrans = c || (this.db.core || p).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Wr(function(k) {
          gi(k), l._reject(c.error);
        }), c.onabort = Wr(function(k) {
          gi(k), l.active && l._reject(new M.Abort(c.error)), l.active = false, l.on("abort").fire(k);
        }), c.oncomplete = Wr(function() {
          l.active = false, l._resolve(), "mutatedParts" in c && Qa.storagemutated.fire(c.mutatedParts);
        }), this;
      }, Ta.prototype._promise = function(c, l, p) {
        var w = this;
        if (c === "readwrite" && this.mode !== "readwrite") return Ie(new M.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ie(new M.TransactionInactive());
        if (this._locked()) return new Xe(function(S, N) {
          w._blockedFuncs.push([function() {
            w._promise(c, l, p).then(S, N);
          }, Je]);
        });
        if (p) return I(function() {
          var S = new Xe(function(N, H) {
            w._lock();
            var q = l(N, H, w);
            q && q.then && q.then(N, H);
          });
          return S.finally(function() {
            return w._unlock();
          }), S._lib = true, S;
        });
        var k = new Xe(function(S, N) {
          var H = l(S, N, w);
          H && H.then && H.then(S, N);
        });
        return k._lib = true, k;
      }, Ta.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Ta.prototype.waitFor = function(c) {
        var l, p = this._root(), w = Xe.resolve(c);
        p._waitingFor ? p._waitingFor = p._waitingFor.then(function() {
          return w;
        }) : (p._waitingFor = w, p._waitingQueue = [], l = p.idbtrans.objectStore(p.storeNames[0]), (function S() {
          for (++p._spinCount; p._waitingQueue.length; ) p._waitingQueue.shift()();
          p._waitingFor && (l.get(-1 / 0).onsuccess = S);
        })());
        var k = p._waitingFor;
        return new Xe(function(S, N) {
          w.then(function(H) {
            return p._waitingQueue.push(Wr(S.bind(null, H)));
          }, function(H) {
            return p._waitingQueue.push(Wr(N.bind(null, H)));
          }).finally(function() {
            p._waitingFor === k && (p._waitingFor = null);
          });
        });
      }, Ta.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new M.Abort()));
      }, Ta.prototype.table = function(c) {
        var l = this._memoizedTables || (this._memoizedTables = {});
        if (v(l, c)) return l[c];
        var p = this.schema[c];
        if (!p) throw new M.NotFound("Table " + c + " not part of transaction");
        return p = new this.db.Table(c, p, this), p.core = this.db.core.table(c), l[c] = p;
      }, Ta);
      function Ta() {
      }
      function A0(c, l, p, w, k, S, N, H) {
        return { name: c, keyPath: l, unique: p, multi: w, auto: k, compound: S, src: (p && !N ? "&" : "") + (w ? "*" : "") + (k ? "++" : "") + Ro(l), type: H };
      }
      function Ro(c) {
        return typeof c == "string" ? c : c ? "[" + [].join.call(c, "+") + "]" : "";
      }
      function C0(c, l, p) {
        return { name: c, primKey: l, indexes: p, mappedClass: null, idxByName: (w = function(k) {
          return [k.name, k];
        }, p.reduce(function(k, S, N) {
          return N = w(S, N), N && (k[N[0]] = N[1]), k;
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
        } : typeof c == "string" ? (l = c).split(".").length === 1 ? function(p) {
          return p[l];
        } : function(p) {
          return z(p, l);
        } : function(p) {
          return z(p, c);
        };
        var l;
      }
      function Po(c) {
        return [].slice.call(c);
      }
      var Mh = 0;
      function yi(c) {
        return c == null ? ":id" : typeof c == "string" ? c : "[".concat(c.join("+"), "]");
      }
      function Uh(c, l, q) {
        function w(te) {
          if (te.type === 3) return null;
          if (te.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var Z = te.lower, J = te.upper, Q = te.lowerOpen, te = te.upperOpen;
          return Z === void 0 ? J === void 0 ? null : l.upperBound(J, !!te) : J === void 0 ? l.lowerBound(Z, !!Q) : l.bound(Z, J, !!Q, !!te);
        }
        function k(ae) {
          var Z, J = ae.name;
          return { name: J, schema: ae, mutate: function(Q) {
            var te = Q.trans, se = Q.type, le = Q.keys, pe = Q.values, ge = Q.range;
            return new Promise(function(Re, He) {
              Re = Wr(Re);
              var Fe = te.objectStore(J), Le = Fe.keyPath == null, Ve = se === "put" || se === "add";
              if (!Ve && se !== "delete" && se !== "deleteRange") throw new Error("Invalid operation type: " + se);
              var Ue, qe = (le || pe || { length: 1 }).length;
              if (le && pe && le.length !== pe.length) throw new Error("Given keys array must have same length as given values array.");
              if (qe === 0) return Re({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function pr(Mt) {
                ++Yt, gi(Mt);
              }
              var _r = [], Sr = [], Yt = 0;
              if (se === "deleteRange") {
                if (ge.type === 4) return Re({ numFailures: Yt, failures: Sr, results: [], lastResult: void 0 });
                ge.type === 3 ? _r.push(Ue = Fe.clear()) : _r.push(Ue = Fe.delete(w(ge)));
              } else {
                var Le = Ve ? Le ? [pe, le] : [pe, null] : [le, null], lr = Le[0], St = Le[1];
                if (Ve) for (var bt = 0; bt < qe; ++bt) _r.push(Ue = St && St[bt] !== void 0 ? Fe[se](lr[bt], St[bt]) : Fe[se](lr[bt])), Ue.onerror = pr;
                else for (bt = 0; bt < qe; ++bt) _r.push(Ue = Fe[se](lr[bt])), Ue.onerror = pr;
              }
              function Cs(Mt) {
                Mt = Mt.target.result, _r.forEach(function(_n, $0) {
                  return _n.error != null && (Sr[$0] = _n.error);
                }), Re({ numFailures: Yt, failures: Sr, results: se === "delete" ? le : _r.map(function(_n) {
                  return _n.result;
                }), lastResult: Mt });
              }
              Ue.onerror = function(Mt) {
                pr(Mt), Cs(Mt);
              }, Ue.onsuccess = Cs;
            });
          }, getMany: function(Q) {
            var te = Q.trans, se = Q.keys;
            return new Promise(function(le, pe) {
              le = Wr(le);
              for (var ge, Re = te.objectStore(J), He = se.length, Fe = new Array(He), Le = 0, Ve = 0, Ue = function(_r) {
                _r = _r.target, Fe[_r._pos] = _r.result, ++Ve === Le && le(Fe);
              }, qe = Ea(pe), pr = 0; pr < He; ++pr) se[pr] != null && ((ge = Re.get(se[pr]))._pos = pr, ge.onsuccess = Ue, ge.onerror = qe, ++Le);
              Le === 0 && le(Fe);
            });
          }, get: function(Q) {
            var te = Q.trans, se = Q.key;
            return new Promise(function(le, pe) {
              le = Wr(le);
              var ge = te.objectStore(J).get(se);
              ge.onsuccess = function(Re) {
                return le(Re.target.result);
              }, ge.onerror = Ea(pe);
            });
          }, query: (Z = Y, function(Q) {
            return new Promise(function(te, se) {
              te = Wr(te);
              var le, pe, ge, Le = Q.trans, Re = Q.values, He = Q.limit, Ue = Q.query, Fe = He === 1 / 0 ? void 0 : He, Ve = Ue.index, Ue = Ue.range, Le = Le.objectStore(J), Ve = Ve.isPrimaryKey ? Le : Le.index(Ve.name), Ue = w(Ue);
              if (He === 0) return te({ result: [] });
              Z ? ((Fe = Re ? Ve.getAll(Ue, Fe) : Ve.getAllKeys(Ue, Fe)).onsuccess = function(qe) {
                return te({ result: qe.target.result });
              }, Fe.onerror = Ea(se)) : (le = 0, pe = !Re && "openKeyCursor" in Ve ? Ve.openKeyCursor(Ue) : Ve.openCursor(Ue), ge = [], pe.onsuccess = function(qe) {
                var pr = pe.result;
                return pr ? (ge.push(Re ? pr.value : pr.primaryKey), ++le === He ? te({ result: ge }) : void pr.continue()) : te({ result: ge });
              }, pe.onerror = Ea(se));
            });
          }), openCursor: function(Q) {
            var te = Q.trans, se = Q.values, le = Q.query, pe = Q.reverse, ge = Q.unique;
            return new Promise(function(Re, He) {
              Re = Wr(Re);
              var Ve = le.index, Fe = le.range, Le = te.objectStore(J), Le = Ve.isPrimaryKey ? Le : Le.index(Ve.name), Ve = pe ? ge ? "prevunique" : "prev" : ge ? "nextunique" : "next", Ue = !se && "openKeyCursor" in Le ? Le.openKeyCursor(w(Fe), Ve) : Le.openCursor(w(Fe), Ve);
              Ue.onerror = Ea(He), Ue.onsuccess = Wr(function(qe) {
                var pr, _r, Sr, Yt, lr = Ue.result;
                lr ? (lr.___id = ++Mh, lr.done = false, pr = lr.continue.bind(lr), _r = (_r = lr.continuePrimaryKey) && _r.bind(lr), Sr = lr.advance.bind(lr), Yt = function() {
                  throw new Error("Cursor not stopped");
                }, lr.trans = te, lr.stop = lr.continue = lr.continuePrimaryKey = lr.advance = function() {
                  throw new Error("Cursor not started");
                }, lr.fail = Wr(He), lr.next = function() {
                  var St = this, bt = 1;
                  return this.start(function() {
                    return bt-- ? St.continue() : St.stop();
                  }).then(function() {
                    return St;
                  });
                }, lr.start = function(St) {
                  function bt() {
                    if (Ue.result) try {
                      St();
                    } catch (Mt) {
                      lr.fail(Mt);
                    }
                    else lr.done = true, lr.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, lr.stop();
                  }
                  var Cs = new Promise(function(Mt, _n) {
                    Mt = Wr(Mt), Ue.onerror = Ea(_n), lr.fail = _n, lr.stop = function($0) {
                      lr.stop = lr.continue = lr.continuePrimaryKey = lr.advance = Yt, Mt($0);
                    };
                  });
                  return Ue.onsuccess = Wr(function(Mt) {
                    Ue.onsuccess = bt, bt();
                  }), lr.continue = pr, lr.continuePrimaryKey = _r, lr.advance = Sr, bt(), Cs;
                }, Re(lr)) : Re(null);
              }, He);
            });
          }, count: function(Q) {
            var te = Q.query, se = Q.trans, le = te.index, pe = te.range;
            return new Promise(function(ge, Re) {
              var He = se.objectStore(J), Fe = le.isPrimaryKey ? He : He.index(le.name), He = w(pe), Fe = He ? Fe.count(He) : Fe.count();
              Fe.onsuccess = Wr(function(Le) {
                return ge(Le.target.result);
              }), Fe.onerror = Ea(Re);
            });
          } };
        }
        var S, N, H, re = (N = q, H = Po((S = c).objectStoreNames), { schema: { name: S.name, tables: H.map(function(ae) {
          return N.objectStore(ae);
        }).map(function(ae) {
          var Z = ae.keyPath, te = ae.autoIncrement, J = f(Z), Q = {}, te = { name: ae.name, primaryKey: { name: null, isPrimaryKey: true, outbound: Z == null, compound: J, keyPath: Z, autoIncrement: te, unique: true, extractKey: I0(Z) }, indexes: Po(ae.indexNames).map(function(se) {
            return ae.index(se);
          }).map(function(ge) {
            var le = ge.name, pe = ge.unique, Re = ge.multiEntry, ge = ge.keyPath, Re = { name: le, compound: f(ge), keyPath: ge, unique: pe, multiEntry: Re, extractKey: I0(ge) };
            return Q[yi(ge)] = Re;
          }), getIndexByKeyPath: function(se) {
            return Q[yi(se)];
          } };
          return Q[":id"] = te.primaryKey, Z != null && (Q[yi(Z)] = te.primaryKey), te;
        }) }, hasGetAll: 0 < H.length && "getAll" in N.objectStore(H[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), q = re.schema, Y = re.hasGetAll, re = q.tables.map(k), j = {};
        return re.forEach(function(ae) {
          return j[ae.name] = ae;
        }), { stack: "dbcore", transaction: c.transaction.bind(c), table: function(ae) {
          if (!j[ae]) throw new Error("Table '".concat(ae, "' not found"));
          return j[ae];
        }, MIN_KEY: -1 / 0, MAX_KEY: wi(l), schema: q };
      }
      function Wh(c, l, p, w) {
        var k = p.IDBKeyRange;
        return p.indexedDB, { dbcore: (w = Uh(l, k, w), c.dbcore.reduce(function(S, N) {
          return N = N.create, a(a({}, S), N(S));
        }, w)) };
      }
      function gs(c, w) {
        var p = w.db, w = Wh(c._middlewares, p, c._deps, w);
        c.core = w.dbcore, c.tables.forEach(function(k) {
          var S = k.name;
          c.core.schema.tables.some(function(N) {
            return N.name === S;
          }) && (k.core = c.core.table(S), c[S] instanceof c.Table && (c[S].core = k.core));
        });
      }
      function _s(c, l, p, w) {
        p.forEach(function(k) {
          var S = w[k];
          l.forEach(function(N) {
            var H = (function q(Y, re) {
              return m(Y, re) || (Y = u(Y)) && q(Y, re);
            })(N, k);
            (!H || "value" in H && H.value === void 0) && (N === c.Transaction.prototype || N instanceof c.Transaction ? _(N, k, { get: function() {
              return this.table(k);
            }, set: function(q) {
              x(this, k, { value: q, writable: true, configurable: true, enumerable: true });
            } }) : N[k] = new c.Table(k, S));
          });
        });
      }
      function D0(c, l) {
        l.forEach(function(p) {
          for (var w in p) p[w] instanceof c.Table && delete p[w];
        });
      }
      function Hh(c, l) {
        return c._cfg.version - l._cfg.version;
      }
      function Vh(c, l, p, w) {
        var k = c._dbSchema;
        p.objectStoreNames.contains("$meta") && !k.$meta && (k.$meta = C0("$meta", Lo("")[0], []), c._storeNames.push("$meta"));
        var S = c._createTransaction("readwrite", c._storeNames, k);
        S.create(p), S._completion.catch(w);
        var N = S._reject.bind(S), H = Je.transless || Je;
        I(function() {
          return Je.trans = S, Je.transless = H, l !== 0 ? (gs(c, p), Y = l, ((q = S).storeNames.includes("$meta") ? q.table("$meta").get("version").then(function(re) {
            return re ?? Y;
          }) : Xe.resolve(Y)).then(function(re) {
            return ae = re, Z = S, J = p, Q = [], re = (j = c)._versions, te = j._dbSchema = ys(0, j.idbdb, J), (re = re.filter(function(se) {
              return se._cfg.version >= ae;
            })).length !== 0 ? (re.forEach(function(se) {
              Q.push(function() {
                var le = te, pe = se._cfg.dbschema;
                ks(j, le, J), ks(j, pe, J), te = j._dbSchema = pe;
                var ge = O0(le, pe);
                ge.add.forEach(function(Ve) {
                  N0(J, Ve[0], Ve[1].primKey, Ve[1].indexes);
                }), ge.change.forEach(function(Ve) {
                  if (Ve.recreate) throw new M.Upgrade("Not yet support for changing primary key");
                  var Ue = J.objectStore(Ve.name);
                  Ve.add.forEach(function(qe) {
                    return ws(Ue, qe);
                  }), Ve.change.forEach(function(qe) {
                    Ue.deleteIndex(qe.name), ws(Ue, qe);
                  }), Ve.del.forEach(function(qe) {
                    return Ue.deleteIndex(qe);
                  });
                });
                var Re = se._cfg.contentUpgrade;
                if (Re && se._cfg.version > ae) {
                  gs(j, J), Z._memoizedTables = {};
                  var He = U(pe);
                  ge.del.forEach(function(Ve) {
                    He[Ve] = le[Ve];
                  }), D0(j, [j.Transaction.prototype]), _s(j, [j.Transaction.prototype], s(He), He), Z.schema = He;
                  var Fe, Le = fr(Re);
                  return Le && R(), ge = Xe.follow(function() {
                    var Ve;
                    (Fe = Re(Z)) && Le && (Ve = L.bind(null, null), Fe.then(Ve, Ve));
                  }), Fe && typeof Fe.then == "function" ? Xe.resolve(Fe) : ge.then(function() {
                    return Fe;
                  });
                }
              }), Q.push(function(le) {
                var pe, ge, Re = se._cfg.dbschema;
                pe = Re, ge = le, [].slice.call(ge.db.objectStoreNames).forEach(function(He) {
                  return pe[He] == null && ge.db.deleteObjectStore(He);
                }), D0(j, [j.Transaction.prototype]), _s(j, [j.Transaction.prototype], j._storeNames, j._dbSchema), Z.schema = j._dbSchema;
              }), Q.push(function(le) {
                j.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(j.idbdb.version / 10) === se._cfg.version ? (j.idbdb.deleteObjectStore("$meta"), delete j._dbSchema.$meta, j._storeNames = j._storeNames.filter(function(pe) {
                  return pe !== "$meta";
                })) : le.objectStore("$meta").put(se._cfg.version, "version"));
              });
            }), (function se() {
              return Q.length ? Xe.resolve(Q.shift()(Z.idbtrans)).then(se) : Xe.resolve();
            })().then(function() {
              Bo(te, J);
            })) : Xe.resolve();
            var j, ae, Z, J, Q, te;
          }).catch(N)) : (s(k).forEach(function(re) {
            N0(p, re, k[re].primKey, k[re].indexes);
          }), gs(c, p), void Xe.follow(function() {
            return c.on.populate.fire(S);
          }).catch(N));
          var q, Y;
        });
      }
      function Xh(c, l) {
        Bo(c._dbSchema, l), l.db.version % 10 != 0 || l.objectStoreNames.contains("$meta") || l.db.createObjectStore("$meta").add(Math.ceil(l.db.version / 10 - 1), "version");
        var p = ys(0, c.idbdb, l);
        ks(c, c._dbSchema, l);
        for (var w = 0, k = O0(p, c._dbSchema).change; w < k.length; w++) {
          var S = (function(N) {
            if (N.change.length || N.recreate) return console.warn("Unable to patch indexes of table ".concat(N.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var H = l.objectStore(N.name);
            N.add.forEach(function(q) {
              Er && console.debug("Dexie upgrade patch: Creating missing index ".concat(N.name, ".").concat(q.src)), ws(H, q);
            });
          })(k[w]);
          if (typeof S == "object") return S.value;
        }
      }
      function O0(c, l) {
        var p, w = { del: [], add: [], change: [] };
        for (p in c) l[p] || w.del.push(p);
        for (p in l) {
          var k = c[p], S = l[p];
          if (k) {
            var N = { name: p, def: S, recreate: false, del: [], add: [], change: [] };
            if ("" + (k.primKey.keyPath || "") != "" + (S.primKey.keyPath || "") || k.primKey.auto !== S.primKey.auto) N.recreate = true, w.change.push(N);
            else {
              var H = k.idxByName, q = S.idxByName, Y = void 0;
              for (Y in H) q[Y] || N.del.push(Y);
              for (Y in q) {
                var re = H[Y], j = q[Y];
                re ? re.src !== j.src && N.change.push(j) : N.add.push(j);
              }
              (0 < N.del.length || 0 < N.add.length || 0 < N.change.length) && w.change.push(N);
            }
          } else w.add.push([p, S]);
        }
        return w;
      }
      function N0(c, l, p, w) {
        var k = c.db.createObjectStore(l, p.keyPath ? { keyPath: p.keyPath, autoIncrement: p.auto } : { autoIncrement: p.auto });
        return w.forEach(function(S) {
          return ws(k, S);
        }), k;
      }
      function Bo(c, l) {
        s(c).forEach(function(p) {
          l.db.objectStoreNames.contains(p) || (Er && console.debug("Dexie: Creating missing table", p), N0(l, p, c[p].primKey, c[p].indexes));
        });
      }
      function ws(c, l) {
        c.createIndex(l.name, l.keyPath, { unique: l.unique, multiEntry: l.multi });
      }
      function ys(c, l, p) {
        var w = {};
        return T(l.objectStoreNames, 0).forEach(function(k) {
          for (var S = p.objectStore(k), N = A0(Ro(Y = S.keyPath), Y || "", true, false, !!S.autoIncrement, Y && typeof Y != "string", true), H = [], q = 0; q < S.indexNames.length; ++q) {
            var re = S.index(S.indexNames[q]), Y = re.keyPath, re = A0(re.name, Y, !!re.unique, !!re.multiEntry, false, Y && typeof Y != "string", false);
            H.push(re);
          }
          w[k] = C0(k, N, H);
        }), w;
      }
      function ks(c, l, p) {
        for (var w = p.db.objectStoreNames, k = 0; k < w.length; ++k) {
          var S = w[k], N = p.objectStore(S);
          c._hasGetAll = "getAll" in N;
          for (var H = 0; H < N.indexNames.length; ++H) {
            var q = N.indexNames[H], Y = N.index(q).keyPath, re = typeof Y == "string" ? Y : "[" + T(Y).join("+") + "]";
            !l[S] || (Y = l[S].idxByName[re]) && (Y.name = q, delete l[S].idxByName[re], l[S].idxByName[q] = Y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (c._hasGetAll = false);
      }
      function Lo(c) {
        return c.split(",").map(function(l, p) {
          var S = l.split(":"), w = (k = S[1]) === null || k === void 0 ? void 0 : k.trim(), k = (l = S[0].trim()).replace(/([&*]|\+\+)/g, ""), S = /^\[/.test(k) ? k.match(/^\[(.*)\]$/)[1].split("+") : k;
          return A0(k, S || null, /\&/.test(l), /\*/.test(l), /\+\+/.test(l), f(S), p === 0, w);
        });
      }
      var Kh = (zn.prototype._createTableSchema = C0, zn.prototype._parseIndexSyntax = Lo, zn.prototype._parseStoresSpec = function(c, l) {
        var p = this;
        s(c).forEach(function(w) {
          if (c[w] !== null) {
            var k = p._parseIndexSyntax(c[w]), S = k.shift();
            if (!S) throw new M.Schema("Invalid schema for table " + w + ": " + c[w]);
            if (S.unique = true, S.multi) throw new M.Schema("Primary key cannot be multiEntry*");
            k.forEach(function(N) {
              if (N.auto) throw new M.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!N.keyPath) throw new M.Schema("Index must have a name and cannot be an empty string");
            }), k = p._createTableSchema(w, S, k), l[w] = k;
          }
        });
      }, zn.prototype.stores = function(p) {
        var l = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, p) : p;
        var p = l._versions, w = {}, k = {};
        return p.forEach(function(S) {
          o(w, S._cfg.storesSource), k = S._cfg.dbschema = {}, S._parseStoresSpec(w, k);
        }), l._dbSchema = k, D0(l, [l._allTables, l, l.Transaction.prototype]), _s(l, [l._allTables, l, l.Transaction.prototype, this._cfg.tables], s(k), k), l._storeNames = s(k), this;
      }, zn.prototype.upgrade = function(c) {
        return this._cfg.contentUpgrade = Ir(this._cfg.contentUpgrade || ue, c), this;
      }, zn);
      function zn() {
      }
      function R0(c, l) {
        var p = c._dbNamesDB;
        return p || (p = c._dbNamesDB = new Pa(Hr, { addons: [], indexedDB: c, IDBKeyRange: l })).version(1).stores({ dbnames: "name" }), p.table("dbnames");
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
      var Tt = function(c, l) {
        if (!this) {
          var p = new Tt();
          return c && "d" in c && o(p, c), p;
        }
        o(this, arguments.length ? { d: 1, from: c, to: 1 < arguments.length ? l : c } : { d: 0 });
      };
      function ki(c, l, p) {
        var w = ur(l, p);
        if (!isNaN(w)) {
          if (0 < w) throw RangeError();
          if (L0(c)) return o(c, { from: l, to: p, d: 1 });
          var k = c.l, w = c.r;
          if (ur(p, c.from) < 0) return k ? ki(k, l, p) : c.l = { from: l, to: p, d: 1, l: null, r: null }, Uo(c);
          if (0 < ur(l, c.to)) return w ? ki(w, l, p) : c.r = { from: l, to: p, d: 1, l: null, r: null }, Uo(c);
          ur(l, c.from) < 0 && (c.from = l, c.l = null, c.d = w ? w.d + 1 : 1), 0 < ur(p, c.to) && (c.to = p, c.r = null, c.d = c.l ? c.l.d + 1 : 1), p = !c.r, k && !c.l && Ei(c, k), w && p && Ei(c, w);
        }
      }
      function Ei(c, l) {
        L0(l) || (function p(w, q) {
          var S = q.from, N = q.to, H = q.l, q = q.r;
          ki(w, S, N), H && p(w, H), q && p(w, q);
        })(c, l);
      }
      function Mo(c, l) {
        var p = Es(l), w = p.next();
        if (w.done) return false;
        for (var k = w.value, S = Es(c), N = S.next(k.from), H = N.value; !w.done && !N.done; ) {
          if (ur(H.from, k.to) <= 0 && 0 <= ur(H.to, k.from)) return true;
          ur(k.from, H.from) < 0 ? k = (w = p.next(H.from)).value : H = (N = S.next(k.from)).value;
        }
        return false;
      }
      function Es(c) {
        var l = L0(c) ? null : { s: 0, n: c };
        return { next: function(p) {
          for (var w = 0 < arguments.length; l; ) switch (l.s) {
            case 0:
              if (l.s = 1, w) for (; l.n.l && ur(p, l.n.from) < 0; ) l = { up: l, n: l.n.l, s: 1 };
              else for (; l.n.l; ) l = { up: l, n: l.n.l, s: 1 };
            case 1:
              if (l.s = 2, !w || ur(p, l.n.to) <= 0) return { value: l.n, done: false };
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
      function Uo(c) {
        var l, p, w = (((l = c.r) === null || l === void 0 ? void 0 : l.d) || 0) - (((p = c.l) === null || p === void 0 ? void 0 : p.d) || 0), k = 1 < w ? "r" : w < -1 ? "l" : "";
        k && (l = k == "r" ? "l" : "r", p = a({}, c), w = c[k], c.from = w.from, c.to = w.to, c[k] = w[k], p[k] = w[l], (c[l] = p).d = Wo(p)), c.d = Wo(c);
      }
      function Wo(p) {
        var l = p.r, p = p.l;
        return (l ? p ? Math.max(l.d, p.d) : l.d : p ? p.d : 0) + 1;
      }
      function Ts(c, l) {
        return s(l).forEach(function(p) {
          c[p] ? Ei(c[p], l[p]) : c[p] = (function w(k) {
            var S, N, H = {};
            for (S in k) v(k, S) && (N = k[S], H[S] = !N || typeof N != "object" || K.has(N.constructor) ? N : w(N));
            return H;
          })(l[p]);
        }), c;
      }
      function M0(c, l) {
        return c.all || l.all || Object.keys(c).some(function(p) {
          return l[p] && Mo(l[p], c[p]);
        });
      }
      d(Tt.prototype, ((aa = { add: function(c) {
        return Ei(this, c), this;
      }, addKey: function(c) {
        return ki(this, c, c), this;
      }, addKeys: function(c) {
        var l = this;
        return c.forEach(function(p) {
          return ki(l, p, p);
        }), this;
      }, hasKey: function(c) {
        var l = Es(this).next(c).value;
        return l && ur(l.from, c) <= 0 && 0 <= ur(l.to, c);
      } })[ze] = function() {
        return Es(this);
      }, aa));
      var mn = {}, U0 = {}, W0 = false;
      function Ss(c) {
        Ts(U0, c), W0 || (W0 = true, setTimeout(function() {
          W0 = false, H0(U0, !(U0 = {}));
        }, 0));
      }
      function H0(c, l) {
        l === void 0 && (l = false);
        var p = /* @__PURE__ */ new Set();
        if (c.all) for (var w = 0, k = Object.values(mn); w < k.length; w++) Ho(N = k[w], c, p, l);
        else for (var S in c) {
          var N, H = /^idb\:\/\/(.*)\/(.*)\//.exec(S);
          H && (S = H[1], H = H[2], (N = mn["idb://".concat(S, "/").concat(H)]) && Ho(N, c, p, l));
        }
        p.forEach(function(q) {
          return q();
        });
      }
      function Ho(c, l, p, w) {
        for (var k = [], S = 0, N = Object.entries(c.queries.query); S < N.length; S++) {
          for (var H = N[S], q = H[0], Y = [], re = 0, j = H[1]; re < j.length; re++) {
            var ae = j[re];
            M0(l, ae.obsSet) ? ae.subscribers.forEach(function(te) {
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
        var l = c._state, p = c._deps.indexedDB;
        if (l.isBeingOpened || c.idbdb) return l.dbReadyPromise.then(function() {
          return l.dbOpenError ? Ie(l.dbOpenError) : c;
        });
        l.isBeingOpened = true, l.dbOpenError = null, l.openComplete = false;
        var w = l.openCanceller, k = Math.round(10 * c.verno), S = false;
        function N() {
          if (l.openCanceller !== w) throw new M.DatabaseClosed("db.open() was cancelled");
        }
        function H() {
          return new Xe(function(ae, Z) {
            if (N(), !p) throw new M.MissingAPI();
            var J = c.name, Q = l.autoSchema || !k ? p.open(J) : p.open(J, k);
            if (!Q) throw new M.MissingAPI();
            Q.onerror = Ea(Z), Q.onblocked = Wr(c._fireOnBlocked), Q.onupgradeneeded = Wr(function(te) {
              var se;
              re = Q.transaction, l.autoSchema && !c._options.allowEmptyDB ? (Q.onerror = gi, re.abort(), Q.result.close(), (se = p.deleteDatabase(J)).onsuccess = se.onerror = Wr(function() {
                Z(new M.NoSuchDatabase("Database ".concat(J, " doesnt exist")));
              })) : (re.onerror = Ea(Z), te = te.oldVersion > Math.pow(2, 62) ? 0 : te.oldVersion, j = te < 1, c.idbdb = Q.result, S && Xh(c, re), Vh(c, te / 10, re, Z));
            }, Z), Q.onsuccess = Wr(function() {
              re = null;
              var te, se, le, pe, ge, Re = c.idbdb = Q.result, He = T(Re.objectStoreNames);
              if (0 < He.length) try {
                var Fe = Re.transaction((pe = He).length === 1 ? pe[0] : pe, "readonly");
                if (l.autoSchema) se = Re, le = Fe, (te = c).verno = se.version / 10, le = te._dbSchema = ys(0, se, le), te._storeNames = T(se.objectStoreNames, 0), _s(te, [te._allTables], s(le), le);
                else if (ks(c, c._dbSchema, Fe), ((ge = O0(ys(0, (ge = c).idbdb, Fe), ge._dbSchema)).add.length || ge.change.some(function(Le) {
                  return Le.add.length || Le.change.length;
                })) && !S) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Re.close(), k = Re.version + 1, S = true, ae(H());
                gs(c, Fe);
              } catch {
              }
              Nr.push(c), Re.onversionchange = Wr(function(Le) {
                l.vcFired = true, c.on("versionchange").fire(Le);
              }), Re.onclose = Wr(function() {
                c.close({ disableAutoOpen: false });
              }), j && (ge = c._deps, Fe = J, Re = ge.indexedDB, ge = ge.IDBKeyRange, P0(Re) || Fe === Hr || R0(Re, ge).put({ name: Fe }).catch(ue)), ae();
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
        var q, Y = l.dbReadyResolve, re = null, j = false;
        return Xe.race([w, (typeof navigator > "u" ? Xe.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(ae) {
          function Z() {
            return indexedDB.databases().finally(ae);
          }
          q = setInterval(Z, 100), Z();
        }).finally(function() {
          return clearInterval(q);
        }) : Promise.resolve()).then(H)]).then(function() {
          return N(), l.onReadyBeingFired = [], Xe.resolve(B0(function() {
            return c.on.ready.fire(c.vip);
          })).then(function ae() {
            if (0 < l.onReadyBeingFired.length) {
              var Z = l.onReadyBeingFired.reduce(Ir, ue);
              return l.onReadyBeingFired = [], Xe.resolve(B0(function() {
                return Z(c.vip);
              })).then(ae);
            }
          });
        }).finally(function() {
          l.openCanceller === w && (l.onReadyBeingFired = null, l.isBeingOpened = false);
        }).catch(function(ae) {
          l.dbOpenError = ae;
          try {
            re && re.abort();
          } catch {
          }
          return w === l.openCanceller && c._close(), Ie(ae);
        }).finally(function() {
          l.openComplete = true, Y();
        }).then(function() {
          var ae;
          return j && (ae = {}, c.tables.forEach(function(Z) {
            Z.schema.indexes.forEach(function(J) {
              J.name && (ae["idb://".concat(c.name, "/").concat(Z.name, "/").concat(J.name)] = new Tt(-1 / 0, [[[]]]));
            }), ae["idb://".concat(c.name, "/").concat(Z.name, "/")] = ae["idb://".concat(c.name, "/").concat(Z.name, "/:dels")] = new Tt(-1 / 0, [[[]]]);
          }), Qa(_i).fire(ae), H0(ae, true)), c;
        });
      }
      function V0(c) {
        function l(S) {
          return c.next(S);
        }
        var p = k(l), w = k(function(S) {
          return c.throw(S);
        });
        function k(S) {
          return function(q) {
            var H = S(q), q = H.value;
            return H.done ? q : q && typeof q.then == "function" ? q.then(p, w) : f(q) ? Promise.all(q).then(p, w) : p(q);
          };
        }
        return k(l)();
      }
      function bs(c, l, p) {
        for (var w = f(c) ? c.slice() : [c], k = 0; k < p; ++k) w.push(l);
        return w;
      }
      var Gh = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(c) {
        return a(a({}, c), { table: function(l) {
          var p = c.table(l), w = p.schema, k = {}, S = [];
          function N(j, ae, Z) {
            var J = yi(j), Q = k[J] = k[J] || [], te = j == null ? 0 : typeof j == "string" ? 1 : j.length, se = 0 < ae, se = a(a({}, Z), { name: se ? "".concat(J, "(virtual-from:").concat(Z.name, ")") : Z.name, lowLevelIndex: Z, isVirtual: se, keyTail: ae, keyLength: te, extractKey: I0(j), unique: !se && Z.unique });
            return Q.push(se), se.isPrimaryKey || S.push(se), 1 < te && N(te === 2 ? j[0] : j.slice(0, te - 1), ae + 1, Z), Q.sort(function(le, pe) {
              return le.keyTail - pe.keyTail;
            }), se;
          }
          l = N(w.primaryKey.keyPath, 0, w.primaryKey), k[":id"] = [l];
          for (var H = 0, q = w.indexes; H < q.length; H++) {
            var Y = q[H];
            N(Y.keyPath, 0, Y);
          }
          function re(j) {
            var ae, Z = j.query.index;
            return Z.isVirtual ? a(a({}, j), { query: { index: Z.lowLevelIndex, range: (ae = j.query.range, Z = Z.keyTail, { type: ae.type === 1 ? 2 : ae.type, lower: bs(ae.lower, ae.lowerOpen ? c.MAX_KEY : c.MIN_KEY, Z), lowerOpen: true, upper: bs(ae.upper, ae.upperOpen ? c.MIN_KEY : c.MAX_KEY, Z), upperOpen: true }) } }) : j;
          }
          return a(a({}, p), { schema: a(a({}, w), { primaryKey: l, indexes: S, getIndexByKeyPath: function(j) {
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
              return Object.create(se, { continue: { value: function(le) {
                le != null ? se.continue(bs(le, j.reverse ? c.MAX_KEY : c.MIN_KEY, Z)) : j.unique ? se.continue(se.key.slice(0, Q).concat(j.reverse ? c.MIN_KEY : c.MAX_KEY, Z)) : se.continue();
              } }, continuePrimaryKey: { value: function(le, pe) {
                se.continuePrimaryKey(bs(le, c.MAX_KEY, Z), pe);
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
      function X0(c, l, p, w) {
        return p = p || {}, w = w || "", s(c).forEach(function(k) {
          var S, N, H;
          v(l, k) ? (S = c[k], N = l[k], typeof S == "object" && typeof N == "object" && S && N ? (H = me(S)) !== me(N) ? p[w + k] = l[k] : H === "Object" ? X0(S, N, p, w + k + ".") : S !== N && (p[w + k] = l[k]) : S !== N && (p[w + k] = l[k])) : p[w + k] = void 0;
        }), s(l).forEach(function(k) {
          v(c, k) || (p[w + k] = l[k]);
        }), p;
      }
      function K0(c, l) {
        return l.type === "delete" ? l.keys : l.keys || l.values.map(c.extractKey);
      }
      var zh = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(c) {
        return a(a({}, c), { table: function(l) {
          var p = c.table(l), w = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(k) {
            var S = Je.trans, N = S.table(l).hook, H = N.deleting, q = N.creating, Y = N.updating;
            switch (k.type) {
              case "add":
                if (q.fire === ue) break;
                return S._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "put":
                if (q.fire === ue && Y.fire === ue) break;
                return S._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "delete":
                if (H.fire === ue) break;
                return S._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "deleteRange":
                if (H.fire === ue) break;
                return S._promise("readwrite", function() {
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
                var le = te.map(function(pe, ge) {
                  var Re, He, Fe, Le = se[ge], Ve = { onerror: null, onsuccess: null };
                  return j.type === "delete" ? H.fire.call(Ve, pe, Le, Q) : j.type === "add" || Le === void 0 ? (Re = q.fire.call(Ve, pe, j.values[ge], Q), pe == null && Re != null && (j.keys[ge] = pe = Re, w.outbound || F(j.values[ge], w.keyPath, pe))) : (Re = X0(Le, j.values[ge]), (He = Y.fire.call(Ve, Re, pe, Le, Q)) && (Fe = j.values[ge], Object.keys(He).forEach(function(Ue) {
                    v(Fe, Ue) ? Fe[Ue] = He[Ue] : F(Fe, Ue, He[Ue]);
                  }))), Ve;
                });
                return p.mutate(j).then(function(pe) {
                  for (var ge = pe.failures, Re = pe.results, He = pe.numFailures, pe = pe.lastResult, Fe = 0; Fe < te.length; ++Fe) {
                    var Le = (Re || te)[Fe], Ve = le[Fe];
                    Le == null ? Ve.onerror && Ve.onerror(ge[Fe]) : Ve.onsuccess && Ve.onsuccess(j.type === "put" && se[Fe] ? j.values[Fe] : Le);
                  }
                  return { failures: ge, results: Re, numFailures: He, lastResult: pe };
                }).catch(function(pe) {
                  return le.forEach(function(ge) {
                    return ge.onerror && ge.onerror(pe);
                  }), Promise.reject(pe);
                });
              });
            }
          } });
        } });
      } };
      function Vo(c, l, p) {
        try {
          if (!l || l.keys.length < c.length) return null;
          for (var w = [], k = 0, S = 0; k < l.keys.length && S < c.length; ++k) ur(l.keys[k], c[S]) === 0 && (w.push(p ? de(l.values[k]) : l.values[k]), ++S);
          return w.length === c.length ? w : null;
        } catch {
          return null;
        }
      }
      var $h = { stack: "dbcore", level: -1, create: function(c) {
        return { table: function(l) {
          var p = c.table(l);
          return a(a({}, p), { getMany: function(w) {
            if (!w.cache) return p.getMany(w);
            var k = Vo(w.keys, w.trans._cache, w.cache === "clone");
            return k ? Xe.resolve(k) : p.getMany(w).then(function(S) {
              return w.trans._cache = { keys: w.keys, values: w.cache === "clone" ? de(S) : S }, S;
            });
          }, mutate: function(w) {
            return w.type !== "add" && (w.trans._cache = null), p.mutate(w);
          } });
        } };
      } };
      function Xo(c, l) {
        return c.trans.mode === "readonly" && !!c.subscr && !c.trans.explicit && c.trans.db._options.cache !== "disabled" && !l.schema.primaryKey.outbound;
      }
      function Ko(c, l) {
        switch (c) {
          case "query":
            return l.values && !l.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return false;
        }
      }
      var qh = { stack: "dbcore", level: 0, name: "Observability", create: function(c) {
        var l = c.schema.name, p = new Tt(c.MIN_KEY, c.MAX_KEY);
        return a(a({}, c), { transaction: function(w, k, S) {
          if (Je.subscr && k !== "readonly") throw new M.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Je.querier));
          return c.transaction(w, k, S);
        }, table: function(w) {
          var k = c.table(w), S = k.schema, N = S.primaryKey, j = S.indexes, H = N.extractKey, q = N.outbound, Y = N.autoIncrement && j.filter(function(Z) {
            return Z.compound && Z.keyPath.includes(N.keyPath);
          }), re = a(a({}, k), { mutate: function(Z) {
            function J(Ue) {
              return Ue = "idb://".concat(l, "/").concat(w, "/").concat(Ue), pe[Ue] || (pe[Ue] = new Tt());
            }
            var Q, te, se, le = Z.trans, pe = Z.mutatedParts || (Z.mutatedParts = {}), ge = J(""), Re = J(":dels"), He = Z.type, Ve = Z.type === "deleteRange" ? [Z.range] : Z.type === "delete" ? [Z.keys] : Z.values.length < 50 ? [K0(N, Z).filter(function(Ue) {
              return Ue;
            }), Z.values] : [], Fe = Ve[0], Le = Ve[1], Ve = Z.trans._cache;
            return f(Fe) ? (ge.addKeys(Fe), (Ve = He === "delete" || Fe.length === Le.length ? Vo(Fe, Ve) : null) || Re.addKeys(Fe), (Ve || Le) && (Q = J, te = Ve, se = Le, S.indexes.forEach(function(Ue) {
              var qe = Q(Ue.name || "");
              function pr(Sr) {
                return Sr != null ? Ue.extractKey(Sr) : null;
              }
              function _r(Sr) {
                return Ue.multiEntry && f(Sr) ? Sr.forEach(function(Yt) {
                  return qe.addKey(Yt);
                }) : qe.addKey(Sr);
              }
              (te || se).forEach(function(Sr, St) {
                var lr = te && pr(te[St]), St = se && pr(se[St]);
                ur(lr, St) !== 0 && (lr != null && _r(lr), St != null && _r(St));
              });
            }))) : Fe ? (Le = { from: (Le = Fe.lower) !== null && Le !== void 0 ? Le : c.MIN_KEY, to: (Le = Fe.upper) !== null && Le !== void 0 ? Le : c.MAX_KEY }, Re.add(Le), ge.add(Le)) : (ge.add(p), Re.add(p), S.indexes.forEach(function(Ue) {
              return J(Ue.name).add(p);
            })), k.mutate(Z).then(function(Ue) {
              return !Fe || Z.type !== "add" && Z.type !== "put" || (ge.addKeys(Ue.results), Y && Y.forEach(function(qe) {
                for (var pr = Z.values.map(function(lr) {
                  return qe.extractKey(lr);
                }), _r = qe.keyPath.findIndex(function(lr) {
                  return lr === N.keyPath;
                }), Sr = 0, Yt = Ue.results.length; Sr < Yt; ++Sr) pr[Sr][_r] = Ue.results[Sr];
                J(qe.name).addKeys(pr);
              })), le.mutatedParts = Ts(le.mutatedParts || {}, pe), Ue;
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
              var Q = Je.subscr, te = !!Q, se = Xo(Je, k) && Ko(Z, J) ? J.obsSet = {} : Q;
              if (te) {
                var le = function(Le) {
                  return Le = "idb://".concat(l, "/").concat(w, "/").concat(Le), se[Le] || (se[Le] = new Tt());
                }, pe = le(""), ge = le(":dels"), Q = ae[Z](J), te = Q[0], Q = Q[1];
                if ((Z === "query" && te.isPrimaryKey && !J.values ? ge : le(te.name || "")).add(Q), !te.isPrimaryKey) {
                  if (Z !== "count") {
                    var Re = Z === "query" && q && J.values && k.query(a(a({}, J), { values: false }));
                    return k[Z].apply(this, arguments).then(function(Le) {
                      if (Z === "query") {
                        if (q && J.values) return Re.then(function(pr) {
                          return pr = pr.result, pe.addKeys(pr), Le;
                        });
                        var Ve = J.values ? Le.result.map(H) : Le.result;
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
      function jo(c, l, p) {
        if (p.numFailures === 0) return l;
        if (l.type === "deleteRange") return null;
        var w = l.keys ? l.keys.length : "values" in l && l.values ? l.values.length : 1;
        return p.numFailures === w ? null : (l = a({}, l), f(l.keys) && (l.keys = l.keys.filter(function(k, S) {
          return !(S in p.failures);
        })), "values" in l && f(l.values) && (l.values = l.values.filter(function(k, S) {
          return !(S in p.failures);
        })), l);
      }
      function j0(c, l) {
        return p = c, ((w = l).lower === void 0 || (w.lowerOpen ? 0 < ur(p, w.lower) : 0 <= ur(p, w.lower))) && (c = c, (l = l).upper === void 0 || (l.upperOpen ? ur(c, l.upper) < 0 : ur(c, l.upper) <= 0));
        var p, w;
      }
      function Go(c, l, ae, w, k, S) {
        if (!ae || ae.length === 0) return c;
        var N = l.query.index, H = N.multiEntry, q = l.query.range, Y = w.schema.primaryKey.extractKey, re = N.extractKey, j = (N.lowLevelIndex || N).extractKey, ae = ae.reduce(function(Z, J) {
          var Q = Z, te = [];
          if (J.type === "add" || J.type === "put") for (var se = new Tt(), le = J.values.length - 1; 0 <= le; --le) {
            var pe, ge = J.values[le], Re = Y(ge);
            se.hasKey(Re) || (pe = re(ge), (H && f(pe) ? pe.some(function(Ue) {
              return j0(Ue, q);
            }) : j0(pe, q)) && (se.addKey(Re), te.push(ge)));
          }
          switch (J.type) {
            case "add":
              var He = new Tt().addKeys(l.values ? Z.map(function(qe) {
                return Y(qe);
              }) : Z), Q = Z.concat(l.values ? te.filter(function(qe) {
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
                return !Fe.hasKey(l.values ? Y(qe) : qe);
              }).concat(l.values ? te : te.map(function(qe) {
                return Y(qe);
              }));
              break;
            case "delete":
              var Le = new Tt().addKeys(J.keys);
              Q = Z.filter(function(qe) {
                return !Le.hasKey(l.values ? Y(qe) : qe);
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
          return ur(j(Z), j(J)) || ur(Y(Z), Y(J));
        }), l.limit && l.limit < 1 / 0 && (ae.length > l.limit ? ae.length = l.limit : c.length === l.limit && ae.length < l.limit && (k.dirty = true)), S ? Object.freeze(ae) : ae);
      }
      function zo(c, l) {
        return ur(c.lower, l.lower) === 0 && ur(c.upper, l.upper) === 0 && !!c.lowerOpen == !!l.lowerOpen && !!c.upperOpen == !!l.upperOpen;
      }
      function Yh(c, l) {
        return (function(p, w, k, S) {
          if (p === void 0) return w !== void 0 ? -1 : 0;
          if (w === void 0) return 1;
          if ((w = ur(p, w)) === 0) {
            if (k && S) return 0;
            if (k) return 1;
            if (S) return -1;
          }
          return w;
        })(c.lower, l.lower, c.lowerOpen, l.lowerOpen) <= 0 && 0 <= (function(p, w, k, S) {
          if (p === void 0) return w !== void 0 ? 1 : 0;
          if (w === void 0) return -1;
          if ((w = ur(p, w)) === 0) {
            if (k && S) return 0;
            if (k) return -1;
            if (S) return 1;
          }
          return w;
        })(c.upper, l.upper, c.upperOpen, l.upperOpen);
      }
      function Zh(c, l, p, w) {
        c.subscribers.add(p), w.addEventListener("abort", function() {
          var k, S;
          c.subscribers.delete(p), c.subscribers.size === 0 && (k = c, S = l, setTimeout(function() {
            k.subscribers.size === 0 && Be(S, k);
          }, 3e3));
        });
      }
      var Jh = { stack: "dbcore", level: 0, name: "Cache", create: function(c) {
        var l = c.schema.name;
        return a(a({}, c), { transaction: function(p, w, k) {
          var S, N, H = c.transaction(p, w, k);
          return w === "readwrite" && (N = (S = new AbortController()).signal, k = function(q) {
            return function() {
              if (S.abort(), w === "readwrite") {
                for (var Y = /* @__PURE__ */ new Set(), re = 0, j = p; re < j.length; re++) {
                  var ae = j[re], Z = mn["idb://".concat(l, "/").concat(ae)];
                  if (Z) {
                    var J = c.table(ae), Q = Z.optimisticOps.filter(function(qe) {
                      return qe.trans === H;
                    });
                    if (H._explicit && q && H.mutatedParts) for (var te = 0, se = Object.values(Z.queries.query); te < se.length; te++) for (var le = 0, pe = (He = se[te]).slice(); le < pe.length; le++) M0((Fe = pe[le]).obsSet, H.mutatedParts) && (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
                      return Y.add(qe);
                    }));
                    else if (0 < Q.length) {
                      Z.optimisticOps = Z.optimisticOps.filter(function(qe) {
                        return qe.trans !== H;
                      });
                      for (var ge = 0, Re = Object.values(Z.queries.query); ge < Re.length; ge++) for (var He, Fe, Le, Ve = 0, Ue = (He = Re[ge]).slice(); Ve < Ue.length; Ve++) (Fe = Ue[Ve]).res != null && H.mutatedParts && (q && !Fe.dirty ? (Le = Object.isFrozen(Fe.res), Le = Go(Fe.res, Fe.req, Q, J, Fe, Le), Fe.dirty ? (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
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
          }, H.addEventListener("abort", k(false), { signal: N }), H.addEventListener("error", k(false), { signal: N }), H.addEventListener("complete", k(true), { signal: N })), H;
        }, table: function(p) {
          var w = c.table(p), k = w.schema.primaryKey;
          return a(a({}, w), { mutate: function(S) {
            var N = Je.trans;
            if (k.outbound || N.db._options.cache === "disabled" || N.explicit || N.idbtrans.mode !== "readwrite") return w.mutate(S);
            var H = mn["idb://".concat(l, "/").concat(p)];
            return H ? (N = w.mutate(S), S.type !== "add" && S.type !== "put" || !(50 <= S.values.length || K0(k, S).some(function(q) {
              return q == null;
            })) ? (H.optimisticOps.push(S), S.mutatedParts && Ss(S.mutatedParts), N.then(function(q) {
              0 < q.numFailures && (Be(H.optimisticOps, S), (q = jo(0, S, q)) && H.optimisticOps.push(q), S.mutatedParts && Ss(S.mutatedParts));
            }), N.catch(function() {
              Be(H.optimisticOps, S), S.mutatedParts && Ss(S.mutatedParts);
            })) : N.then(function(q) {
              var Y = jo(0, a(a({}, S), { values: S.values.map(function(re, j) {
                var ae;
                return q.failures[j] ? re : (re = (ae = k.keyPath) !== null && ae !== void 0 && ae.includes(".") ? de(re) : a({}, re), F(re, k.keyPath, q.results[j]), re);
              }) }), q);
              H.optimisticOps.push(Y), queueMicrotask(function() {
                return S.mutatedParts && Ss(S.mutatedParts);
              });
            }), N) : w.mutate(S);
          }, query: function(S) {
            if (!Xo(Je, w) || !Ko("query", S)) return w.query(S);
            var N = ((Y = Je.trans) === null || Y === void 0 ? void 0 : Y.db._options.cache) === "immutable", j = Je, H = j.requery, q = j.signal, Y = (function(J, Q, te, se) {
              var le = mn["idb://".concat(J, "/").concat(Q)];
              if (!le) return [];
              if (!(Q = le.queries[te])) return [null, false, le, null];
              var pe = Q[(se.query ? se.query.index.name : null) || ""];
              if (!pe) return [null, false, le, null];
              switch (te) {
                case "query":
                  var ge = pe.find(function(Re) {
                    return Re.req.limit === se.limit && Re.req.values === se.values && zo(Re.req.query.range, se.query.range);
                  });
                  return ge ? [ge, true, le, pe] : [pe.find(function(Re) {
                    return ("limit" in Re.req ? Re.req.limit : 1 / 0) >= se.limit && (!se.values || Re.req.values) && Yh(Re.req.query.range, se.query.range);
                  }), false, le, pe];
                case "count":
                  return ge = pe.find(function(Re) {
                    return zo(Re.req.query.range, se.query.range);
                  }), [ge, !!ge, le, pe];
              }
            })(l, p, "query", S), re = Y[0], j = Y[1], ae = Y[2], Z = Y[3];
            return re && j ? re.obsSet = S.obsSet : (j = w.query(S).then(function(J) {
              var Q = J.result;
              if (re && (re.res = Q), N) {
                for (var te = 0, se = Q.length; te < se; ++te) Object.freeze(Q[te]);
                Object.freeze(Q);
              } else J.result = de(Q);
              return J;
            }).catch(function(J) {
              return Z && re && Be(Z, re), Promise.reject(J);
            }), re = { obsSet: S.obsSet, promise: j, subscribers: /* @__PURE__ */ new Set(), type: "query", req: S, dirty: false }, Z ? Z.push(re) : (Z = [re], (ae = ae || (mn["idb://".concat(l, "/").concat(p)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[S.query.index.name || ""] = Z)), Zh(re, Z, H, q), re.promise.then(function(J) {
              return { result: Go(J.result, S, ae == null ? void 0 : ae.optimisticOps, w, re, N) };
            });
          } });
        } });
      } };
      function Fs(c, l) {
        return new Proxy(c, { get: function(p, w, k) {
          return w === "db" ? l : Reflect.get(p, w, k);
        } });
      }
      var Pa = (Qr.prototype.version = function(c) {
        if (isNaN(c) || c < 0.1) throw new M.Type("Given version is not a positive number");
        if (c = Math.round(10 * c) / 10, this.idbdb || this._state.isBeingOpened) throw new M.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, c);
        var l = this._versions, p = l.filter(function(w) {
          return w._cfg.version === c;
        })[0];
        return p || (p = new this.Version(c), l.push(p), l.sort(Hh), p.stores({}), this._state.autoSchema = false, p);
      }, Qr.prototype._whenReady = function(c) {
        var l = this;
        return this.idbdb && (this._state.openComplete || Je.letThrough || this._vip) ? c() : new Xe(function(p, w) {
          if (l._state.openComplete) return w(new M.DatabaseClosed(l._state.dbOpenError));
          if (!l._state.isBeingOpened) {
            if (!l._state.autoOpen) return void w(new M.DatabaseClosed());
            l.open().catch(ue);
          }
          l._state.dbReadyPromise.then(p, w);
        }).then(c);
      }, Qr.prototype.use = function(c) {
        var l = c.stack, p = c.create, w = c.level, k = c.name;
        return k && this.unuse({ stack: l, name: k }), c = this._middlewares[l] || (this._middlewares[l] = []), c.push({ stack: l, create: p, level: w ?? 10, name: k }), c.sort(function(S, N) {
          return S.level - N.level;
        }), this;
      }, Qr.prototype.unuse = function(c) {
        var l = c.stack, p = c.name, w = c.create;
        return l && this._middlewares[l] && (this._middlewares[l] = this._middlewares[l].filter(function(k) {
          return w ? k.create !== w : !!p && k.name !== p;
        })), this;
      }, Qr.prototype.open = function() {
        var c = this;
        return ie(xt, function() {
          return jh(c);
        });
      }, Qr.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var c = this._state, l = Nr.indexOf(this);
        if (0 <= l && Nr.splice(l, 1), this.idbdb) {
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
        var l = (p === void 0 ? { disableAutoOpen: true } : p).disableAutoOpen, p = this._state;
        l ? (p.isBeingOpened && p.cancelOpen(new M.DatabaseClosed()), this._close(), p.autoOpen = false, p.dbOpenError = new M.DatabaseClosed()) : (this._close(), p.autoOpen = this._options.autoOpen || p.isBeingOpened, p.openComplete = false, p.dbOpenError = null);
      }, Qr.prototype.delete = function(c) {
        var l = this;
        c === void 0 && (c = { disableAutoOpen: true });
        var p = 0 < arguments.length && typeof arguments[0] != "object", w = this._state;
        return new Xe(function(k, S) {
          function N() {
            l.close(c);
            var H = l._deps.indexedDB.deleteDatabase(l.name);
            H.onsuccess = Wr(function() {
              var q, Y, re;
              q = l._deps, Y = l.name, re = q.indexedDB, q = q.IDBKeyRange, P0(re) || Y === Hr || R0(re, q).delete(Y).catch(ue), k();
            }), H.onerror = Ea(S), H.onblocked = l._fireOnBlocked;
          }
          if (p) throw new M.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        return s(this._allTables).map(function(l) {
          return c._allTables[l];
        });
      }, enumerable: false, configurable: true }), Qr.prototype.transaction = function() {
        var c = (function(l, p, w) {
          var k = arguments.length;
          if (k < 2) throw new M.InvalidArgument("Too few arguments");
          for (var S = new Array(k - 1); --k; ) S[k - 1] = arguments[k];
          return w = S.pop(), [l, W(S), w];
        }).apply(this, arguments);
        return this._transaction.apply(this, c);
      }, Qr.prototype._transaction = function(c, l, p) {
        var w = this, k = Je.trans;
        k && k.db === this && c.indexOf("!") === -1 || (k = null);
        var S, N, H = c.indexOf("?") !== -1;
        c = c.replace("!", "").replace("?", "");
        try {
          if (N = l.map(function(Y) {
            if (Y = Y instanceof w.Table ? Y.name : Y, typeof Y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return Y;
          }), c == "r" || c === it) S = it;
          else {
            if (c != "rw" && c != Ra) throw new M.InvalidArgument("Invalid transaction mode: " + c);
            S = Ra;
          }
          if (k) {
            if (k.mode === it && S === Ra) {
              if (!H) throw new M.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              k = null;
            }
            k && N.forEach(function(Y) {
              if (k && k.storeNames.indexOf(Y) === -1) {
                if (!H) throw new M.SubTransaction("Table " + Y + " not included in parent transaction.");
                k = null;
              }
            }), H && k && !k.active && (k = null);
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
            var se, le = fr(J);
            return le && R(), Q = Xe.follow(function() {
              var pe;
              (se = J.call(te, te)) && (le ? (pe = L.bind(null, null), se.then(pe, pe)) : typeof se.next == "function" && typeof se.throw == "function" && (se = V0(se)));
            }, Q), (se && typeof se.then == "function" ? Xe.resolve(se).then(function(pe) {
              return te.active ? pe : Ie(new M.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
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
        }).bind(null, this, S, N, k, p);
        return k ? k._promise(S, q, "lock") : Je.trans ? ie(Je.transless, function() {
          return w._whenReady(q);
        }) : this._whenReady(q);
      }, Qr.prototype.table = function(c) {
        if (!v(this._allTables, c)) throw new M.InvalidTable("Table ".concat(c, " does not exist"));
        return this._allTables[c];
      }, Qr);
      function Qr(c, l) {
        var p = this;
        this._middlewares = {}, this.verno = 0;
        var w = Qr.dependencies;
        this._options = l = a({ addons: Qr.addons, autoOpen: true, indexedDB: w.indexedDB, IDBKeyRange: w.IDBKeyRange, cache: "cloned" }, l), this._deps = { indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange }, w = l.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var k, S, N, H, q, Y = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: ue, dbReadyPromise: null, cancelOpen: ue, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: l.autoOpen };
        Y.dbReadyPromise = new Xe(function(j) {
          Y.dbReadyResolve = j;
        }), Y.openCanceller = new Xe(function(j, ae) {
          Y.cancelOpen = ae;
        }), this._state = Y, this.name = c, this.on = vi(this, "populate", "blocked", "versionchange", "close", { ready: [Ir, ue] }), this.once = function(j, ae) {
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
          var Z = Za, J = null;
          if (te) try {
            Z = te();
          } catch (le) {
            J = le;
          }
          var Q = se._ctx, te = Q.table, se = te.hook.reading.fire;
          this._ctx = { table: te, index: Q.index, isPrimKey: !Q.index || te.schema.primKey.keyPath && Q.index === te.schema.primKey.name, range: Z, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: J, or: Q.or, valueMapper: se !== O ? se : null };
        })), this.Table = (S = this, mi(Ao.prototype, function(j, ae, Z) {
          this.db = S, this._tx = Z, this.name = j, this.schema = ae, this.hook = S._allTables[j] ? S._allTables[j].hook : vi(null, { creating: [Se, ue], reading: [Ce, O], updating: [rr, ue], deleting: [ar, ue] });
        })), this.Transaction = (N = this, mi(Lh.prototype, function(j, ae, Z, J, Q) {
          var te = this;
          j !== "readonly" && ae.forEach(function(se) {
            se = (se = Z[se]) === null || se === void 0 ? void 0 : se.yProps, se && (ae = ae.concat(se.map(function(le) {
              return le.updatesTable;
            })));
          }), this.db = N, this.mode = j, this.storeNames = ae, this.schema = Z, this.chromeTransactionDurability = J, this.idbtrans = null, this.on = vi(this, "complete", "error", "abort"), this.parent = Q || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Xe(function(se, le) {
            te._resolve = se, te._reject = le;
          }), this._completion.then(function() {
            te.active = false, te.on.complete.fire();
          }, function(se) {
            var le = te.active;
            return te.active = false, te.on.error.fire(se), te.parent ? te.parent._reject(se) : le && te.idbtrans && te.idbtrans.abort(), Ie(se);
          });
        })), this.Version = (H = this, mi(Kh.prototype, function(j) {
          this.db = H, this._cfg = { version: j, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (q = this, mi(No.prototype, function(j, ae, Z) {
          if (this.db = q, this._ctx = { table: j, index: ae === ":id" ? null : ae, or: Z }, this._cmp = this._ascending = ur, this._descending = function(J, Q) {
            return ur(Q, J);
          }, this._max = function(J, Q) {
            return 0 < ur(J, Q) ? J : Q;
          }, this._min = function(J, Q) {
            return ur(J, Q) < 0 ? J : Q;
          }, this._IDBKeyRange = q._deps.IDBKeyRange, !this._IDBKeyRange) throw new M.MissingAPI();
        })), this.on("versionchange", function(j) {
          0 < j.newVersion ? console.warn("Another connection wants to upgrade database '".concat(p.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(p.name, "'. Closing db now to resume the delete request.")), p.close({ disableAutoOpen: false });
        }), this.on("blocked", function(j) {
          !j.newVersion || j.newVersion < j.oldVersion ? console.warn("Dexie.delete('".concat(p.name, "') was blocked")) : console.warn("Upgrade '".concat(p.name, "' blocked by other connection holding version ").concat(j.oldVersion / 10));
        }), this._maxKey = wi(l.IDBKeyRange), this._createTransaction = function(j, ae, Z, J) {
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
            return Fs(p.table(Q), re);
          };
          var J = Reflect.get(j, ae, Z);
          return J instanceof Ao ? Fs(J, re) : ae === "tables" ? J.map(function(Q) {
            return Fs(Q, re);
          }) : ae === "_createTransaction" ? function() {
            return Fs(J.apply(this, arguments), re);
          } : J;
        } });
        this.vip = re, w.forEach(function(j) {
          return j(p);
        });
      }
      var As, aa = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Qh = (G0.prototype.subscribe = function(c, l, p) {
        return this._subscribe(c && typeof c != "function" ? c : { next: c, error: l, complete: p });
      }, G0.prototype[aa] = function() {
        return this;
      }, G0);
      function G0(c) {
        this._subscribe = c;
      }
      try {
        As = { indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB, IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange };
      } catch {
        As = { indexedDB: null, IDBKeyRange: null };
      }
      function $o(c) {
        var l, p = false, w = new Qh(function(k) {
          var S = fr(c), N, H = false, q = {}, Y = {}, re = { get closed() {
            return H;
          }, unsubscribe: function() {
            H || (H = true, N && N.abort(), j && Qa.storagemutated.unsubscribe(Z));
          } };
          k.start && k.start(re);
          var j = false, ae = function() {
            return Ne(J);
          }, Z = function(Q) {
            Ts(q, Q), M0(Y, q) && ae();
          }, J = function() {
            var Q, te, se;
            !H && As.indexedDB && (q = {}, Q = {}, N && N.abort(), N = new AbortController(), se = (function(le) {
              var pe = qa();
              try {
                S && R();
                var ge = I(c, le);
                return ge = S ? ge.finally(L) : ge;
              } finally {
                pe && Ya();
              }
            })(te = { subscr: Q, signal: N.signal, requery: ae, querier: c, trans: null }), Promise.resolve(se).then(function(le) {
              p = true, l = le, H || te.signal.aborted || (q = {}, (function(pe) {
                for (var ge in pe) if (v(pe, ge)) return;
                return 1;
              })(Y = Q) || j || (Qa(_i, Z), j = true), Ne(function() {
                return !H && k.next && k.next(le);
              }));
            }, function(le) {
              p = false, ["DatabaseClosedError", "AbortError"].includes(le == null ? void 0 : le.name) || H || Ne(function() {
                H || k.error && k.error(le);
              });
            }));
          };
          return setTimeout(ae, 0), re;
        });
        return w.hasValue = function() {
          return p;
        }, w.getValue = function() {
          return l;
        }, w;
      }
      var gn = Pa;
      function z0(c) {
        var l = en;
        try {
          en = true, Qa.storagemutated.fire(c), H0(c, true);
        } finally {
          en = l;
        }
      }
      d(gn, a(a({}, V), { delete: function(c) {
        return new gn(c, { addons: [] }).delete();
      }, exists: function(c) {
        return new gn(c, { addons: [] }).open().then(function(l) {
          return l.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(c) {
        try {
          return l = gn.dependencies, p = l.indexedDB, l = l.IDBKeyRange, (P0(p) ? Promise.resolve(p.databases()).then(function(w) {
            return w.map(function(k) {
              return k.name;
            }).filter(function(k) {
              return k !== Hr;
            });
          }) : R0(p, l).toCollection().primaryKeys()).then(c);
        } catch {
          return Ie(new M.MissingAPI());
        }
        var l, p;
      }, defineClass: function() {
        return function(c) {
          o(this, c);
        };
      }, ignoreTransaction: function(c) {
        return Je.trans ? ie(Je.transless, c) : c();
      }, vip: B0, async: function(c) {
        return function() {
          try {
            var l = V0(c.apply(this, arguments));
            return l && typeof l.then == "function" ? l : Xe.resolve(l);
          } catch (p) {
            return Ie(p);
          }
        };
      }, spawn: function(c, l, p) {
        try {
          var w = V0(c.apply(p, l || []));
          return w && typeof w.then == "function" ? w : Xe.resolve(w);
        } catch (k) {
          return Ie(k);
        }
      }, currentTransaction: { get: function() {
        return Je.trans || null;
      } }, waitFor: function(c, l) {
        return l = Xe.resolve(typeof c == "function" ? gn.ignoreTransaction(c) : c).timeout(l || 6e4), Je.trans ? Je.trans.waitFor(l) : l;
      }, Promise: Xe, debug: { get: function() {
        return Er;
      }, set: function(c) {
        Kr(c);
      } }, derive: y, extend: o, props: d, override: E, Events: vi, on: Qa, liveQuery: $o, extendObservabilitySet: Ts, getByKeyPath: z, setByKeyPath: F, delByKeyPath: function(c, l) {
        typeof l == "string" ? F(c, l, void 0) : "length" in l && [].map.call(l, function(p) {
          F(c, p, void 0);
        });
      }, shallowClone: U, deepClone: de, getObjectDiff: X0, cmp: ur, asap: X, minKey: -1 / 0, addons: [], connections: Nr, errnames: Ze, dependencies: As, cache: mn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(c) {
        return parseInt(c);
      }).reduce(function(c, l, p) {
        return c + l / Math.pow(10, 2 * p);
      }) })), gn.maxKey = wi(gn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Qa(_i, function(c) {
        en || (c = new CustomEvent(F0, { detail: c }), en = true, dispatchEvent(c), en = false);
      }), addEventListener(F0, function(c) {
        c = c.detail, en || z0(c);
      }));
      var $n, en = false, qo = function() {
      };
      return typeof BroadcastChannel < "u" && ((qo = function() {
        ($n = new BroadcastChannel(F0)).onmessage = function(c) {
          return c.data && z0(c.data);
        };
      })(), typeof $n.unref == "function" && $n.unref(), Qa(_i, function(c) {
        en || $n.postMessage(c);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(c) {
        if (!Pa.disableBfCache && c.persisted) {
          Er && console.debug("Dexie: handling persisted pagehide"), $n == null ? void 0 : $n.close();
          for (var l = 0, p = Nr; l < p.length; l++) p[l].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(c) {
        !Pa.disableBfCache && c.persisted && (Er && console.debug("Dexie: handling persisted pageshow"), qo(), z0({ all: new Tt(-1 / 0, [[]]) }));
      })), Xe.rejectionMapper = function(c, l) {
        return !c || c instanceof Te || c instanceof TypeError || c instanceof SyntaxError || !c.name || !G[c.name] ? c : (l = new G[c.name](l || c.message, c), "stack" in c && _(l, "stack", { get: function() {
          return this.inner.stack;
        } }), l);
      }, Kr(Er), a(Pa, Object.freeze({ __proto__: null, Dexie: Pa, liveQuery: $o, Entity: Kn, cmp: ur, PropModification: pi, replacePrefix: function(c, l) {
        return new pi({ replacePrefix: [c, l] });
      }, add: function(c) {
        return new pi({ add: c });
      }, remove: function(c) {
        return new pi({ remove: c });
      }, default: Pa, RangeSet: Tt, mergeRanges: Ei, rangesOverlap: Mo }), { default: Pa }), Pa;
    });
  })($s)), $s.exports;
}
var R1 = N1();
const Ef = D1(R1), tc = /* @__PURE__ */ Symbol.for("Dexie"), qs = globalThis[tc] || (globalThis[tc] = Ef);
if (Ef.semVer !== qs.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${Ef.semVer} and ${qs.semVer}`);
const { liveQuery: UE, mergeRanges: WE, rangesOverlap: HE, RangeSet: VE, cmp: XE, Entity: KE, PropModification: jE, replacePrefix: GE, add: zE, remove: $E, DexieYProvider: qE } = qs, ac = ["accession", "book_name", "isbn", "book_type", "author", "published", "num_of_pages", "image_links", "language"], Aa = new qs("SpreadsheetDatabase");
Aa.version(1).stores({ spreadsheets: "&isbn, accession, book_name, book_type, author, published, num_of_pages, image_links, language" });
Aa.version(1).stores({ settings: "key" });
var Ys = {};
Ys.version = "0.20.3";
var ca = 1200, P1 = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Hf = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, Vf = function(e) {
  P1.indexOf(e) != -1 && (Hf[0] = e);
};
function B1() {
  Vf(1252);
}
var va = function(e) {
  ca = e, Vf(e);
};
function Xf() {
  va(1200), B1();
}
function nc(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function ku(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function L1(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function Eu(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var bi = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? ku(e.slice(2)) : r == 254 && t == 255 ? Eu(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, Ds = function(r) {
  return String.fromCharCode(r);
}, ic = function(r) {
  return String.fromCharCode(r);
}, M1 = null, Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Zs(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), i = t >> 2, a = e.charCodeAt(u++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(o);
  return r;
}
function U1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(u++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(o);
  return r;
}
function W1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, u = 0; u < e.length; ) t = e[u++], i = t >> 2, a = e[u++], s = (t & 3) << 4 | a >> 4, n = e[u++], f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Rt.charAt(i) + Rt.charAt(s) + Rt.charAt(f) + Rt.charAt(o);
  return r;
}
function ea(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0;
  if (e.slice(0, 5) == "data:") {
    var u = e.slice(0, 1024).indexOf(";base64,");
    u > -1 && (e = e.slice(u + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var u = 0; u < e.length; ) i = Rt.indexOf(e.charAt(u++)), s = Rt.indexOf(e.charAt(u++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Rt.indexOf(e.charAt(u++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), o = Rt.indexOf(e.charAt(u++)), n = (f & 3) << 6 | o, o !== 64 && (r += String.fromCharCode(n));
  return r;
}
var mr = (function() {
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
})(), Wi = (function() {
  if (typeof Buffer > "u") return false;
  var e = Na([65, 0]);
  if (!e) return false;
  var r = e.toString("utf16le");
  return r.length == 1;
})();
function on(e) {
  return mr ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function sc(e) {
  return mr ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Vt = function(r) {
  return mr ? Na(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function o0(e) {
  if (typeof ArrayBuffer > "u") return Vt(e);
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
function H1(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function Kf(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return Kf(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var rt = mr ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Na(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(Vt(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function V1(e) {
  for (var r = [], t = 0, a = e.length + 250, n = on(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048) n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = on(65535), a = 65530);
  }
  return r.push(n.slice(0, t)), rt(r);
}
var zt = /\u0000/g, Fi = /[\u0001-\u0006]/g;
function ei(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function ma(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
function jf(e, r) {
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
var fc = Math.pow(2, 32);
function qn(e, r) {
  if (e > fc || e < -fc) return X1(e, r);
  var t = Math.round(e);
  return K1(t, r);
}
function Qs(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var oc = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], ef = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function j1(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var nr = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, cc = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, G1 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function e0(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, o = 1, u = 0, h = 0, v = Math.floor(n); u < r && (v = Math.floor(n), f = v * s + i, h = v * u + o, !(n - v < 5e-8)); ) n = 1 / (n - v), i = s, s = f, o = u, u = h;
  if (h > r && (u > r ? (h = o, f = i) : (h = u, f = s)), !t) return [0, a * f, h];
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
function La(e, r, t) {
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
function Gf(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function $1(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function q1(e) {
  var r = e < 0 ? 12 : 11, t = Gf(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function Y1(e) {
  var r = Gf(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function Hi(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = q1(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = Y1(e), Gf($1(t.toUpperCase()));
}
function In(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Hi(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return ra(14, Yr(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Z1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function J1(e, r, t, a) {
  var n = "", i = 0, s = 0, f = t.y, o, u = 0;
  switch (e) {
    case 98:
      f = t.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          o = f % 100, u = 2;
          break;
        default:
          o = f % 1e4, u = 4;
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          o = t.m, u = r.length;
          break;
        case 3:
          return ef[t.m - 1][1];
        case 5:
          return ef[t.m - 1][0];
        default:
          return ef[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          o = t.d, u = r.length;
          break;
        case 3:
          return oc[t.q][0];
        default:
          return oc[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          o = 1 + (t.H + 11) % 12, u = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          o = t.H, u = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          o = t.M, u = r.length;
          break;
        default:
          throw "bad minute format: " + r;
      }
      break;
    case 115:
      if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
      return t.u === 0 && (r == "s" || r == "ss") ? ma(t.S, r.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (t.S + t.u)), i >= 60 * s && (i = 0), r === "s" ? i === 0 ? "0" : "" + i / s : (n = ma(i, 2 + a), r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
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
      u = r.length === 3 ? 1 : 2;
      break;
    case 101:
      o = f, u = 1;
      break;
  }
  var h = u > 0 ? ma(o, u) : "";
  return h;
}
function Ua(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var Tu = /%/g;
function Q1(e, r, t) {
  var a = r.replace(Tu, ""), n = r.length - a.length;
  return Ha(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function ed(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Ha(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Su(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Su(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), t.indexOf("e") === -1) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i); t.substr(0, 2) === "0."; ) t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n), t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, u, h) {
      return o + u + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
var bu = /# (\?+)( ?)\/( ?)(\d+)/;
function rd(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Cr(" ", e[1].length + 1 + e[4].length) : jf(s, e[1].length) + e[2] + "/" + e[3] + ma(f, e[4].length));
}
function td(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Cr(" ", e[1].length + 2 + e[4].length);
}
var Fu = /^#*0*\.([0#]+)/, Au = /\)[^)]*[0#]/, Cu = /\(###\) ###\\?-####/;
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
function uc(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function lc(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function ad(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function nd(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function ia(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Au)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? ia("n", a, t) : "(" + ia("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return ed(e, r, t);
  if (r.indexOf("%") !== -1) return Q1(e, r, t);
  if (r.indexOf("E") !== -1) return Su(r, t);
  if (r.charCodeAt(0) === 36) return "$" + ia(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + qn(o, r.length);
  if (r.match(/^[#?]+$/)) return n = qn(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(bu)) return rd(i, o, u);
  if (r.match(/^#+0+$/)) return u + qn(o, r.length - r.indexOf("0"));
  if (i = r.match(Fu)) return n = uc(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Wt(i[1])).replace(/\.$/, "." + Wt(i[1])).replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Cr("0", Wt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + uc(o, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Ua(qn(o, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + ia(e, r, -t) : Ua("" + (Math.floor(t) + ad(t, i[1].length))) + "." + ma(lc(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return ia(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(ia(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Cu)) return n = ia(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + u, h = Ha("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Wt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? jf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = qn(t, 0), r.length <= n.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Wt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return s = lc(t, i[1].length), t < 0 ? "-" + ia(e, r, -t) : Ua(nd(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? ma(0, 3 - _.length) : "") + _;
  }) + "." + ma(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return ia(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Ua(qn(o, 0));
      return x !== "0" ? u + x : "";
    case "###,###.00":
      return ia(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return ia(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function id(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Ha(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function sd(e, r, t) {
  var a = r.replace(Tu, ""), n = r.length - a.length;
  return Ha(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function Iu(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Iu(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !t.match(/[Ee]/)) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i), t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, o, u, h) {
      return o + u + h.substr(0, (n + i) % n) + "." + h.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
function ba(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Au)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? ba("n", a, t) : "(" + ba("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return id(e, r, t);
  if (r.indexOf("%") !== -1) return sd(e, r, t);
  if (r.indexOf("E") !== -1) return Iu(r, t);
  if (r.charCodeAt(0) === 36) return "$" + ba(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + ma(o, r.length);
  if (r.match(/^[#?]+$/)) return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(bu)) return td(i, o, u);
  if (r.match(/^#+0+$/)) return u + ma(o, r.length - r.indexOf("0"));
  if (i = r.match(Fu)) return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Wt(i[1])).replace(/\.$/, "." + Wt(i[1])), n = n.replace(/\.(\d*)$/, function(_, y) {
    return "." + y + Cr("0", Wt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Ua("" + o);
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + ba(e, r, -t) : Ua("" + t) + "." + Cr("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return ba(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(ba(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(_) {
    return s < n.length ? n.charAt(s++) : _ === "0" ? "0" : "";
  }));
  if (r.match(Cu)) return n = ba(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + u, h = Ha("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Wt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? jf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : Wt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Wt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + ba(e, r, -t) : Ua("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(_) {
    return "00," + (_.length < 3 ? ma(0, 3 - _.length) : "") + _;
  }) + "." + ma(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Ua("" + o);
      return x !== "0" ? u + x : "";
    default:
      if (r.match(/\.[0#?]*$/)) return ba(e, r.slice(0, r.lastIndexOf(".")), t) + Wt(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function Ha(e, r, t) {
  return (t | 0) === t ? ba(e, r, t) : ia(e, r, t);
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
var Du = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
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
function od(e, r, t, a) {
  for (var n = [], i = "", s = 0, f = "", o = "t", u, h, v, d = "H"; s < e.length; ) switch (f = e.charAt(s)) {
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
        if (u == null && (u = La(r, t, e.charAt(s + 1) === "2"), u == null)) return "";
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
      if (r < 0 || u == null && (u = La(r, t), u == null)) return "";
      for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
      f === "m" && o.toLowerCase() === "h" && (f = "M"), f === "h" && (f = d), n[n.length] = { t: f, v: i }, o = f;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: f, v: f };
      if (u == null && (u = La(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (u != null && (y.v = u.H >= 12 ? e.charAt(s + 2) : f), y.t = "T", d = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (u != null && (y.v = u.H >= 12 ? "PM" : "AM"), y.t = "T", s += 5, d = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (u != null && (y.v = u.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", s += 5, d = "h") : (y.t = "t", ++s), u == null && y.t === "T") return "";
      n[n.length] = y, o = f;
      break;
    case "[":
      for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
      if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
      if (i.match(Du)) {
        if (u == null && (u = La(r, t), u == null)) return "";
        n[n.length] = { t: "Z", v: i.toLowerCase() }, o = i.charAt(1);
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
  var m = 0, g = 0, T;
  for (s = n.length - 1, o = "t"; s >= 0; --s) switch (n[s].t) {
    case "h":
    case "H":
      n[s].t = d, o = "h", m < 1 && (m = 1);
      break;
    case "s":
      (T = n[s].v.match(/\.0+$/)) && (g = Math.max(g, T[0].length - 1), m = 4), m < 3 && (m = 3);
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
      n[s].v = J1(n[s].t.charCodeAt(0), n[s].v, u, g), n[s].t = "t";
      break;
    case "n":
    case "?":
      for (X = s + 1; n[X] != null && ((f = n[X].t) === "?" || f === "D" || (f === " " || f === "t") && n[X + 1] != null && (n[X + 1].t === "?" || n[X + 1].t === "t" && n[X + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[X].v === "/" || n[X].v === " " && n[X + 1] != null && n[X + 1].t == "?")); ) n[s].v += n[X].v, n[X] = { v: "", t: ";" }, ++X;
      A += n[s].v, s = X - 1;
      break;
    case "G":
      n[s].t = "t", n[s].v = In(r, t);
      break;
  }
  var z = "", F, U;
  if (A.length > 0) {
    A.charCodeAt(0) == 40 ? (F = r < 0 && A.charCodeAt(0) === 45 ? -r : r, U = Ha("n", A, F)) : (F = r < 0 && a > 1 ? -r : r, U = Ha("n", A, F), F < 0 && n[0] && n[0].t == "t" && (U = U.substr(1), n[0].v = "-" + n[0].v)), X = U.length - 1;
    var D = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      D = s;
      break;
    }
    var W = n.length;
    if (D === n.length && U.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s) n[s] == null || "n?".indexOf(n[s].t) === -1 || (X >= n[s].v.length - 1 ? (X -= n[s].v.length, n[s].v = U.substr(X + 1, n[s].v.length)) : X < 0 ? n[s].v = "" : (n[s].v = U.substr(0, X + 1), X = -1), n[s].t = "t", W = s);
      X >= 0 && W < n.length && (n[W].v = U.substr(0, X + 1) + n[W].v);
    } else if (D !== n.length && U.indexOf("E") === -1) {
      for (X = U.indexOf(".") - 1, s = D; s >= 0; --s) if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
        for (h = n[s].v.indexOf(".") > -1 && s === D ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, z = n[s].v.substr(h + 1); h >= 0; --h) X >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#") && (z = U.charAt(X--) + z);
        n[s].v = z, n[s].t = "t", W = s;
      }
      for (X >= 0 && W < n.length && (n[W].v = U.substr(0, X + 1) + n[W].v), X = U.indexOf(".") + 1, s = D; s < n.length; ++s) if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== D)) {
        for (h = n[s].v.indexOf(".") > -1 && s === D ? n[s].v.indexOf(".") + 1 : 0, z = n[s].v.substr(0, h); h < n[s].v.length; ++h) X < U.length && (z += U.charAt(X++));
        n[s].v = z, n[s].t = "t", W = s;
      }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (F = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = Ha(n[s].t, n[s].v, F), n[s].t = "t");
  var K = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (K += n[s].v);
  return K;
}
var hc = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function dc(e, r) {
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
    var s = t[0].match(hc), f = t[1].match(hc);
    return dc(r, s) ? [a, t[0]] : dc(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function ra(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : nr)[e], a == null && (a = t.table && t.table[cc[e]] || nr[cc[e]]), a == null && (a = G1[e] || "General");
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
function Ou(e, r) {
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
function c0(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Ou(e[r], r);
}
function ci() {
  nr = j1();
}
var ud = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, r0 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ld(e) {
  var r = typeof e == "number" ? nr[e] : e;
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
  var u = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  u.length == 7 && (u = "0" + u), u.length == 8 && (u = "20" + u);
  var h = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  return s == -1 && f == -1 && o == -1 ? u : a == -1 && n == -1 && i == -1 ? h : u + "T" + h;
}
var dd = { "d.m": "d\\.m" };
function fn(e, r) {
  return Ou(dd[e] || e, r);
}
var xc = (function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var F = 0, U = new Array(256), D = 0; D != 256; ++D) F = D, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, U[D] = F;
    return typeof Int32Array < "u" ? new Int32Array(U) : U;
  }
  var t = r();
  function a(F) {
    var U = 0, D = 0, W = 0, K = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (W = 0; W != 256; ++W) K[W] = F[W];
    for (W = 0; W != 256; ++W) for (D = F[W], U = 256 + W; U < 4096; U += 256) D = K[U] = D >>> 8 ^ F[D & 255];
    var ee = [];
    for (W = 1; W != 16; ++W) ee[W - 1] = typeof Int32Array < "u" && typeof K.subarray == "function" ? K.subarray(W * 256, W * 256 + 256) : K.slice(W * 256, W * 256 + 256);
    return ee;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], o = n[3], u = n[4], h = n[5], v = n[6], d = n[7], x = n[8], _ = n[9], y = n[10], m = n[11], g = n[12], T = n[13], E = n[14];
  function A(F, U) {
    for (var D = U ^ -1, W = 0, K = F.length; W < K; ) D = D >>> 8 ^ t[(D ^ F.charCodeAt(W++)) & 255];
    return ~D;
  }
  function X(F, U) {
    for (var D = U ^ -1, W = F.length - 15, K = 0; K < W; ) D = E[F[K++] ^ D & 255] ^ T[F[K++] ^ D >> 8 & 255] ^ g[F[K++] ^ D >> 16 & 255] ^ m[F[K++] ^ D >>> 24] ^ y[F[K++]] ^ _[F[K++]] ^ x[F[K++]] ^ d[F[K++]] ^ v[F[K++]] ^ h[F[K++]] ^ u[F[K++]] ^ o[F[K++]] ^ f[F[K++]] ^ s[F[K++]] ^ i[F[K++]] ^ t[F[K++]];
    for (W += 15; K < W; ) D = D >>> 8 ^ t[(D ^ F[K++]) & 255];
    return ~D;
  }
  function z(F, U) {
    for (var D = U ^ -1, W = 0, K = F.length, ee = 0, de = 0; W < K; ) ee = F.charCodeAt(W++), ee < 128 ? D = D >>> 8 ^ t[(D ^ ee) & 255] : ee < 2048 ? (D = D >>> 8 ^ t[(D ^ (192 | ee >> 6 & 31)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee & 63)) & 255]) : ee >= 55296 && ee < 57344 ? (ee = (ee & 1023) + 64, de = F.charCodeAt(W++) & 1023, D = D >>> 8 ^ t[(D ^ (240 | ee >> 8 & 7)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee >> 2 & 63)) & 255], D = D >>> 8 ^ t[(D ^ (128 | de >> 6 & 15 | (ee & 3) << 4)) & 255], D = D >>> 8 ^ t[(D ^ (128 | de & 63)) & 255]) : (D = D >>> 8 ^ t[(D ^ (224 | ee >> 12 & 15)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee >> 6 & 63)) & 255], D = D >>> 8 ^ t[(D ^ (128 | ee & 63)) & 255]);
    return ~D;
  }
  return e.table = t, e.bstr = A, e.buf = X, e.str = z, e;
})(), ir = (function() {
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
    ct(b, 0);
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
  function u() {
    return o || (o = xd);
  }
  function h(b, B) {
    if (b[0] == 80 && b[1] == 75) return Xe(b, B);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return Ya(b, B);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var C = 3, I = 512, R = 0, L = 0, fe = 0, xe = 0, ne = 0, ce = [], ie = b.slice(0, 512);
    ct(ie, 0);
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
    I !== 512 && (ie = b.slice(0, I), ct(ie, 28));
    var Ne = b.slice(0, I);
    d(ie, C);
    var Ie = ie.read_shift(4, "i");
    if (C === 3 && Ie !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + Ie);
    ie.l += 4, fe = ie.read_shift(4, "i"), ie.l += 4, ie.chk("00100000", "Mini Stream Cutoff Size: "), xe = ie.read_shift(4, "i"), R = ie.read_shift(4, "i"), ne = ie.read_shift(4, "i"), L = ie.read_shift(4, "i");
    for (var we = -1, be = 0; be < 109 && (we = ie.read_shift(4, "i"), !(we < 0)); ++be) ce[be] = we;
    var cr = x(b, I);
    m(ne, L, cr, I, ce);
    var Nr = T(cr, fe, ce, I);
    fe < Nr.length && (Nr[fe].name = "!Directory"), R > 0 && xe !== de && (Nr[xe].name = "!MiniFAT"), Nr[ce[0]].name = "!FAT", Nr.fat_addrs = ce, Nr.ssz = I;
    var Hr = {}, it = [], Ra = [], $t = [];
    E(fe, Nr, cr, it, R, Hr, Ra, xe), _(Ra, $t, it), it.shift();
    var Za = { FileIndex: Ra, FullPaths: $t };
    return B && B.raw && (Za.raw = { header: Ne, sectors: cr }), Za;
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
    for (var I = b.start, R = b.size, L = [], fe = I; C && R > 0 && fe >= 0; ) L.push(B.slice(fe * ee, fe * ee + ee)), R -= ee, fe = kn(C, fe * 4);
    return L.length === 0 ? oe(0) : rt(L).slice(0, b.size);
  }
  function m(b, B, C, I, R) {
    var L = de;
    if (b === de) {
      if (B !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var fe = C[b], xe = (I >>> 2) - 1;
      if (!fe) return;
      for (var ne = 0; ne < xe && (L = kn(fe, ne * 4)) !== de; ++ne) R.push(L);
      B >= 1 && m(kn(fe, I - 4), B - 1, C, I, R);
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
      ne = kn(b[ie], ce);
    }
    return { nodes: L, data: Sc([fe]) };
  }
  function T(b, B, C, I) {
    var R = b.length, L = [], fe = [], xe = [], ne = [], ce = I - 1, ie = 0, Ee = 0, Ne = 0, Ie = 0;
    for (ie = 0; ie < R; ++ie) if (xe = [], Ne = ie + B, Ne >= R && (Ne -= R), !fe[Ne]) {
      ne = [];
      var we = [];
      for (Ee = Ne; Ee >= 0; ) {
        we[Ee] = true, fe[Ee] = true, xe[xe.length] = Ee, ne.push(b[Ee]);
        var be = C[Math.floor(Ee * 4 / I)];
        if (Ie = Ee * 4 & ce, I < 4 + Ie) throw new Error("FAT boundary crossed: " + Ee + " 4 " + I);
        if (!b[be] || (Ee = kn(b[be], Ie), we[Ee])) break;
      }
      L[Ne] = { nodes: xe, data: Sc([ne]) };
    }
    return L;
  }
  function E(b, B, C, I, R, L, fe, xe) {
    for (var ne = 0, ce = I.length ? 2 : 0, ie = B[b].data, Ee = 0, Ne = 0, Ie; Ee < ie.length; Ee += 128) {
      var we = ie.slice(Ee, Ee + 128);
      ct(we, 64), Ne = we.read_shift(2), Ie = Qf(we, 0, Ne - ce), I.push(Ie);
      var be = { name: Ie, type: we.read_shift(1), color: we.read_shift(1), L: we.read_shift(4, "i"), R: we.read_shift(4, "i"), C: we.read_shift(4, "i"), clsid: we.read_shift(16), state: we.read_shift(4, "i"), start: 0, size: 0 }, cr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      cr !== 0 && (be.ct = A(we, we.l - 8));
      var Nr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      Nr !== 0 && (be.mt = A(we, we.l - 8)), be.start = we.read_shift(4, "i"), be.size = we.read_shift(4, "i"), be.size < 0 && be.start < 0 && (be.size = be.type = 0, be.start = de, be.name = ""), be.type === 5 ? (ne = be.start, R > 0 && ne !== de && (B[ne].name = "!StreamData")) : be.size >= 4096 ? (be.storage = "fat", B[be.start] === void 0 && (B[be.start] = g(C, be.start, B.fat_addrs, B.ssz)), B[be.start].name = be.name, be.content = B[be.start].data.slice(0, be.size)) : (be.storage = "minifat", be.size < 0 ? be.size = 0 : ne !== de && be.start !== de && B[ne] && (be.content = y(be, B[ne].data, (B[xe] || {}).data))), be.content && ct(be.content, 0), L[Ie] = be, fe.push(be);
    }
  }
  function A(b, B) {
    return new Date((Jt(b, B + 4) / 1e7 * Math.pow(2, 32) + Jt(b, B) / 1e7 - 11644473600) * 1e3);
  }
  function X(b, B) {
    return u(), h(o.readFileSync(b), B);
  }
  function z(b, B) {
    var C = B && B.type;
    switch (C || mr && Buffer.isBuffer(b) && (C = "buffer"), C || "base64") {
      case "file":
        return X(b, B);
      case "base64":
        return h(Vt(ea(b)), B);
      case "binary":
        return h(Vt(b), B);
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
    if (!ir.find(b, "/" + B)) {
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
  function W(b, B) {
    var C = B || {};
    if (C.fileType == "mad") return xi(b, C);
    if (D(b), C.fileType === "zip") return hs(b, C);
    var I = (function(Ie) {
      for (var we = 0, be = 0, cr = 0; cr < Ie.FileIndex.length; ++cr) {
        var Nr = Ie.FileIndex[cr];
        if (Nr.content) {
          var Hr = Nr.content.length;
          Hr > 0 && (Hr < 4096 ? we += Hr + 63 >> 6 : be += Hr + 511 >> 9);
        }
      }
      for (var it = Ie.FullPaths.length + 3 >> 2, Ra = we + 7 >> 3, $t = we + 127 >> 7, Za = Ra + be + it + $t, ta = Za + 127 >> 7, Kn = ta <= 109 ? 0 : Math.ceil((ta - 109) / 127); Za + ta + Kn + 127 >> 7 > ta; ) Kn = ++ta <= 109 ? 0 : Math.ceil((ta - 109) / 127);
      var ur = [1, Kn, ta, $t, it, be, we, 0];
      return Ie.FileIndex[0].size = we << 6, ur[7] = (Ie.FileIndex[0].start = ur[0] + ur[1] + ur[2] + ur[3] + ur[4] + ur[5]) + (ur[6] + 7 >> 3), ur;
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
    var xe = !L.match(Fi);
    for (L = L.replace(zt, ""), xe && (L = L.replace(Fi, "!")), fe = 0; fe < C.length; ++fe) if ((xe ? C[fe].replace(Fi, "!") : C[fe]).replace(zt, "") == L || (xe ? I[fe].replace(Fi, "!") : I[fe]).replace(zt, "") == L) return b.FileIndex[fe];
    return null;
  }
  var ee = 64, de = -2, Pe = "d0cf11e0a1b11ae1", me = [208, 207, 17, 224, 161, 177, 26, 225], ze = "00000000000000000000000000000000", ke = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: de, FREESECT: -1, HEADER_SIGNATURE: Pe, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: ze, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function Be(b, B, C) {
    u();
    var I = W(b, C);
    o.writeFileSync(B, I);
  }
  function Qe(b) {
    for (var B = new Array(b.length), C = 0; C < b.length; ++C) B[C] = String.fromCharCode(b[C]);
    return B.join("");
  }
  function he(b, B) {
    var C = W(b, B);
    switch (B && B.type || "buffer") {
      case "file":
        return u(), o.writeFileSync(B.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : Qe(C);
      case "base64":
        return Zs(typeof C == "string" ? C : Qe(C));
      case "buffer":
        if (mr) return Buffer.isBuffer(C) ? C : Na(C);
      case "array":
        return typeof C == "string" ? Vt(C) : C;
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
    if (!fr) return ka(b, B);
    var C = fr.InflateRaw, I = new C(), R = I._processChunk(b.slice(b.l), I._finishFlushFlag);
    return b.l += I.bytesRead, R;
  }
  function ye(b) {
    return fr ? fr.deflateRawSync(b) : dt(b);
  }
  var je = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ge = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ze = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function P(b) {
    var B = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (B >> 16 | B >> 8 | B) & 255;
  }
  for (var M = typeof Uint8Array < "u", G = M ? new Uint8Array(256) : [], V = 0; V < 256; ++V) G[V] = P(V);
  function ue(b, B) {
    var C = G[b & 255];
    return B <= 8 ? C >>> 8 - B : (C = C << 8 | G[b >> 8 & 255], B <= 16 ? C >>> 16 - B : (C = C << 8 | G[b >> 16 & 255], C >>> 24 - B));
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
  function ar(b, B) {
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
      var L = sc(I);
      if (b.copy) b.copy(L);
      else for (; R < b.length; ++R) L[R] = b[R];
      return L;
    } else if (M) {
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
    var I = 1, R = 0, L = 0, fe = 0, xe = 0, ne = b.length, ce = M ? new Uint16Array(32) : Tr(32);
    for (L = 0; L < 32; ++L) ce[L] = 0;
    for (L = ne; L < C; ++L) b[L] = 0;
    ne = b.length;
    var ie = M ? new Uint16Array(ne) : Tr(ne);
    for (L = 0; L < ne; ++L) ce[R = b[L]]++, I < R && (I = R), ie[L] = 0;
    for (ce[0] = 0, L = 1; L <= I; ++L) ce[L + 16] = xe = xe + ce[L - 1] << 1;
    for (L = 0; L < ne; ++L) xe = b[L], xe != 0 && (ie[L] = ce[xe + 16]++);
    var Ee = 0;
    for (L = 0; L < ne; ++L) if (Ee = b[L], Ee != 0) for (xe = ue(ie[L], I) >> I - Ee, fe = (1 << I + 4 - Ee) - 1; fe >= 0; --fe) B[xe | fe << Ee] = Ee & 15 | L << 4;
    return I;
  }
  var Jr = M ? new Uint16Array(512) : Tr(512), qr = M ? new Uint16Array(32) : Tr(32);
  if (!M) {
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
    for (var B = M ? new Uint8Array(32768) : [], C = 0, I = 0; C < Ze.length - 1; ++C) for (; I < Ze[C + 1]; ++I) B[I] = C;
    for (; I < 32768; ++I) B[I] = 29;
    var R = M ? new Uint8Array(259) : [];
    for (C = 0, I = 0; C < Ge.length - 1; ++C) for (; I < Ge[C + 1]; ++I) R[I] = C;
    function L(xe, ne) {
      for (var ce = 0; ce < xe.length; ) {
        var ie = Math.min(65535, xe.length - ce), Ee = ce + ie == xe.length;
        for (ne.write_shift(1, +Ee), ne.write_shift(2, ie), ne.write_shift(2, ~ie & 65535); ie-- > 0; ) ne[ne.l++] = xe[ce++];
      }
      return ne.l;
    }
    function fe(xe, ne) {
      for (var ce = 0, ie = 0, Ee = M ? new Uint16Array(32768) : []; ie < xe.length; ) {
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
            we = R[cr], we <= 22 ? ce = Er(ne, ce, G[we + 1] >> 1) - 1 : (Er(ne, ce, 3), ce += 5, Er(ne, ce, G[we - 23] >> 5), ce += 3);
            var Nr = we < 8 ? 0 : we - 4 >> 2;
            Nr > 0 && (Kr(ne, ce, cr - Ge[we]), ce += Nr), we = B[ie - be], ce = Er(ne, ce, G[we] >> 3), ce -= 3;
            var Hr = we < 4 ? 0 : we - 2 >> 1;
            Hr > 0 && (Kr(ne, ce, ie - be - Ze[we]), ce += Hr);
            for (var it = 0; it < cr; ++it) Ee[Ie] = ie & 32767, Ie = (Ie << 5 ^ xe[ie]) & 32767, ++ie;
            Ne -= cr - 1;
          } else we <= 143 ? we = we + 48 : ce = Ir(ne, ce, 1), ce = Er(ne, ce, G[we]), Ee[Ie] = ie & 32767, ++ie;
        }
        ce = Er(ne, ce, 0) - 1;
      }
      return ne.l = (ce + 7) / 8 | 0, ne.l;
    }
    return function(ne, ce) {
      return ne.length < 8 ? L(ne, ce) : fe(ne, ce);
    };
  })();
  function dt(b) {
    var B = oe(50 + Math.floor(b.length * 1.1)), C = yt(b, B);
    return B.slice(0, C);
  }
  var Ke = M ? new Uint16Array(32768) : Tr(32768), kr = M ? new Uint16Array(32768) : Tr(32768), jr = M ? new Uint16Array(128) : Tr(128), zr = 1, xt = 1;
  function Je(b, B) {
    var C = Se(b, B) + 257;
    B += 5;
    var I = Se(b, B) + 1;
    B += 5;
    var R = We(b, B) + 4;
    B += 4;
    for (var L = 0, fe = M ? new Uint8Array(19) : Tr(19), xe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ne = 1, ce = M ? new Uint8Array(8) : Tr(8), ie = M ? new Uint8Array(8) : Tr(8), Ee = fe.length, Ne = 0; Ne < R; ++Ne) fe[je[Ne]] = L = Ce(b, B), ne < L && (ne = L), ce[L]++, B += 3;
    var Ie = 0;
    for (ce[0] = 0, Ne = 1; Ne <= ne; ++Ne) ie[Ne] = Ie = Ie + ce[Ne - 1] << 1;
    for (Ne = 0; Ne < Ee; ++Ne) (Ie = fe[Ne]) != 0 && (xe[Ne] = ie[Ie]++);
    var we = 0;
    for (Ne = 0; Ne < Ee; ++Ne) if (we = fe[Ne], we != 0) {
      Ie = G[xe[Ne]] >> 8 - we;
      for (var be = (1 << 7 - we) - 1; be >= 0; --be) jr[Ie | be << we] = we & 7 | Ne << 3;
    }
    var cr = [];
    for (ne = 1; cr.length < C + I; ) switch (Ie = jr[ar(b, B)], B += Ie & 7, Ie >>>= 3) {
      case 16:
        for (L = 3 + O(b, B), B += 2, Ie = cr[cr.length - 1]; L-- > 0; ) cr.push(Ie);
        break;
      case 17:
        for (L = 3 + Ce(b, B), B += 3; L-- > 0; ) cr.push(0);
        break;
      case 18:
        for (L = 11 + ar(b, B), B += 7; L-- > 0; ) cr.push(0);
        break;
      default:
        cr.push(Ie), ne < Ie && (ne = Ie);
        break;
    }
    var Nr = cr.slice(0, C), Hr = cr.slice(C);
    for (Ne = C; Ne < 286; ++Ne) Nr[Ne] = 0;
    for (Ne = I; Ne < 30; ++Ne) Hr[Ne] = 0;
    return zr = Oe(Nr, Ke, 286), xt = Oe(Hr, kr, 30), B;
  }
  function ya(b, B) {
    if (b[0] == 3 && !(b[1] & 3)) return [on(B), 2];
    for (var C = 0, I = 0, R = sc(B || 1 << 18), L = 0, fe = R.length >>> 0, xe = 0, ne = 0; (I & 1) == 0; ) {
      if (I = Ce(b, C), C += 3, I >>> 1) I >> 1 == 1 ? (xe = 9, ne = 5) : (C = Je(b, C), xe = zr, ne = xt);
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
  function ka(b, B) {
    var C = b.slice(b.l || 0), I = ya(C, B);
    return b.l += I[1], I[0];
  }
  function vn(b, B) {
    if (b) typeof console < "u" && console.error(B);
    else throw new Error(B);
  }
  function Xe(b, B) {
    var C = b;
    ct(C, 0);
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
    L & 8 && (ne = b.read_shift(4), ne == 134695760 && (ne = b.read_shift(4), Nr = true), ce = b.read_shift(4), ie = b.read_shift(4)), ce != B && vn(Nr, "Bad compressed size: " + B + " != " + ce), ie != C && vn(Nr, "Bad uncompressed size: " + C + " != " + ie), Wr(I, Ie, cr, { unsafe: true, mt: xe });
  }
  function hs(b, B) {
    var C = B || {}, I = [], R = [], L = oe(1), fe = C.compression ? 8 : 0, xe = 0, ne = 0, ce = 0, ie = 0, Ee = 0, Ne = b.FullPaths[0], Ie = Ne, we = b.FileIndex[0], be = [], cr = 0;
    for (ne = 1; ne < b.FullPaths.length; ++ne) if (Ie = b.FullPaths[ne].slice(Ne.length), we = b.FileIndex[ne], !(!we.size || !we.content || Array.isArray(we.content) && we.content.length == 0 || Ie == "Sh33tJ5")) {
      var Nr = ie, Hr = oe(Ie.length);
      for (ce = 0; ce < Ie.length; ++ce) Hr.write_shift(1, Ie.charCodeAt(ce) & 127);
      Hr = Hr.slice(0, Hr.l), be[Ee] = typeof we.content == "string" ? xc.bstr(we.content, 0) : xc.buf(we.content, 0);
      var it = typeof we.content == "string" ? Vt(we.content) : we.content;
      fe == 8 && (it = ye(it)), L = oe(30), L.write_shift(4, 67324752), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, fe), we.mt ? i(L, we.mt) : L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), ie += L.length, I.push(L), ie += Hr.length, I.push(Hr), ie += it.length, I.push(it), L = oe(46), L.write_shift(4, 33639248), L.write_shift(2, 0), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, fe), L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(4, 0), L.write_shift(4, Nr), cr += L.l, R.push(L), cr += Hr.length, R.push(Hr), ++Ee;
    }
    return L = oe(22), L.write_shift(4, 101010256), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, Ee), L.write_shift(2, Ee), L.write_shift(4, cr), L.write_shift(4, ie), L.write_shift(2, 0), rt([rt(I), rt(R), L]);
  }
  var $a = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function ds(b, B) {
    if (b.ctype) return b.ctype;
    var C = b.name || "", I = C.match(/\.([^\.]+)$/);
    return I && $a[I[1]] || B && (I = (C = B).match(/[\.\\]([^\.\\])+$/), I && $a[I[1]]) ? $a[I[1]] : "application/octet-stream";
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
    return Vt(B.join(`\r
`));
  }
  function qa(b, B, C) {
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
        fe = Vt(ea(B.slice(xe).join("")));
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
  function Ya(b, B) {
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
      Ie !== xe && Ie !== xe + "--" || (Ne++ && qa(ie, I.slice(Ee, R), C), Ee = R);
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
      R.push(I), R.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + fe), R.push("Content-Transfer-Encoding: " + (be ? "quoted-printable" : "base64")), R.push("Content-Type: " + ds(xe, fe)), R.push(""), R.push(be ? k0(ie) : di(ie));
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
    var L = !R && ir.find(b, B);
    if (!L) {
      var fe = b.FullPaths[0];
      B.slice(0, fe.length) == fe ? fe = B : (fe.slice(-1) != "/" && (fe += "/"), fe = (fe + B).replace("//", "/")), L = { name: n(B), type: 2 }, b.FileIndex.push(L), b.FullPaths.push(fe), R || ir.utils.cfb_gc(b);
    }
    return L.content = C, L.size = C ? C.length : 0, I && (I.CLSID && (L.clsid = I.CLSID), I.mt && (L.mt = I.mt), I.ct && (L.ct = I.ct)), L;
  }
  function nt(b, B) {
    F(b);
    var C = ir.find(b, B);
    if (C) {
      for (var I = 0; I < b.FileIndex.length; ++I) if (b.FileIndex[I] == C) return b.FileIndex.splice(I, 1), b.FullPaths.splice(I, 1), true;
    }
    return false;
  }
  function T0(b, B, C) {
    F(b);
    var I = ir.find(b, B);
    if (I) {
      for (var R = 0; R < b.FileIndex.length; ++R) if (b.FileIndex[R] == I) return b.FileIndex[R].name = n(C), b.FullPaths[R] = C, true;
    }
    return false;
  }
  function Xn(b) {
    D(b, true);
  }
  return r.find = K, r.read = z, r.parse = h, r.write = he, r.writeFile = Be, r.utils = { cfb_new: Vn, cfb_add: Wr, cfb_del: nt, cfb_mov: T0, cfb_gc: Xn, ReadShift: Ii, CheckField: tl, prep_blob: ct, bconcat: rt, use_zlib: Me, _deflateRaw: dt, _inflateRaw: ka, consts: ke }, r;
})(), xd;
function pc(e) {
  return typeof e == "string" ? o0(e) : Array.isArray(e) ? H1(e) : e;
}
function as(e, r, t) {
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
  var a = t == "utf8" ? Da(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([pc(a)], { type: "application/octet-stream" });
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
      var f = "data:application/octet-stream;base64," + W1(new Uint8Array(pc(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: true });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var o = File(e);
    return o.open("w"), o.encoding = "binary", Array.isArray(r) && (r = Oa(r)), o.write(r), o.close(), r;
  } catch (u) {
    if (!u.message || u.message.indexOf("onstruct") == -1) throw u;
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
function vc(e, r) {
  for (var t = [], a = Gr(e), n = 0; n !== a.length; ++n) t[e[a[n]][r]] == null && (t[e[a[n]][r]] = a[n]);
  return t;
}
function u0(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
  return r;
}
function l0(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
  return r;
}
function vd(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Nu = Date.UTC(1899, 11, 30, 0, 0, 0), md = Date.UTC(1899, 11, 31, 0, 0, 0), gd = Date.UTC(1904, 0, 1, 0, 0, 0);
function Yr(e, r) {
  var t = e.getTime(), a = (t - Nu) / (1440 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Va(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Nu), r;
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
var wd = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, yd = /^(\d+)-(\d+)-(\d+)$/, Ru = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function $r(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(wd);
  if (t) return new Date((r ? gd : md) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(yd), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(Ru), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function Dn(e, r) {
  if (mr && Buffer.isBuffer(e)) {
    if (r && Wi) {
      if (e[0] == 255 && e[1] == 254) return Da(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Da(Eu(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Da(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Da(new TextDecoder("utf-16be").decode(e.slice(2)));
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
function Qt(e) {
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
function Vi(e) {
  if (Td.test(e)) return e.indexOf("Z") == -1 ? h0(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(kd);
  if (a) return bd(a);
  if (a = t.match(Ed), a) return Fd(a);
  if (a = t.match(Ru), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
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
function zf(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function $f(e, r, t) {
  for (var a = [], n = e.indexOf(r); n > -1; ) {
    var i = e.indexOf(t, n + r.length);
    if (i == -1) break;
    a.push(e.slice(n, i + t.length)), n = e.indexOf(r, i + t.length);
  }
  return a.length > 0 ? a : null;
}
function ns(e, r, t) {
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
    var o = i.index, u = n[1].lastIndex;
    return [t.slice(s, u), t.slice(f, o)];
  };
})(), Pu = /* @__PURE__ */ (function() {
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
function Bu(e) {
  return e ? e.content && e.type ? Dn(e.content, true) : e.data ? bi(e.data) : e.asNodeBuffer && mr ? bi(e.asNodeBuffer().toString("binary")) : e.asBinary ? bi(e.asBinary()) : e._data && e._data.getContent ? bi(Dn(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Lu(e) {
  if (!e) return null;
  if (e.data) return nc(e.data);
  if (e.asNodeBuffer && mr) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? nc(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function Nd(e) {
  return e && e.name.slice(-4) === ".bin" ? Lu(e) : Bu(e);
}
function sa(e, r) {
  for (var t = e.FullPaths || Gr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function qf(e, r) {
  var t = sa(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function ft(e, r, t) {
  if (!t) return Nd(qf(e, r));
  if (!r) return null;
  try {
    return ft(e, r);
  } catch {
    return null;
  }
}
function Xt(e, r, t) {
  if (!t) return Bu(qf(e, r));
  if (!r) return null;
  try {
    return Xt(e, r);
  } catch {
    return null;
  }
}
function Rd(e, r, t) {
  return Lu(qf(e, r));
}
function mc(e) {
  for (var r = e.FullPaths || Gr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function hr(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return mr ? a = Na(t) : a = V1(t), ir.utils.cfb_add(e, r, a);
    }
    ir.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function Yf() {
  return ir.utils.cfb_new();
}
function Mu(e, r) {
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
`, Uu = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, gc = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, Pd = /<[^<>]*>/g, Et = at.match(gc) ? gc : Pd, Bd = /<\w*:/, Ld = /<(\/?)\w+:/;
function Ye(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(Uu), f = 0, o = "", u = 0, h = "", v = "", d = 1;
  if (s) for (u = 0; u != s.length; ++u) {
    for (v = s[u].slice(1), i = 0; i != v.length && v.charCodeAt(i) !== 61; ++i) ;
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
  var s = e.match(Uu), f = "", o = 0, u = "", h = "", v = 1;
  if (s) for (o = 0; o != s.length; ++o) {
    for (h = s[o].slice(1), i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i) ;
    for (u = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
    v = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(i + 1 + v, h.length - v), u.indexOf("_") > 0 && (u = u.slice(0, u.indexOf("_"))), a[u] = f, a[u.toLowerCase()] = f;
  }
  return a;
}
function la(e) {
  return e.replace(Ld, "<$1");
}
var Wu = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, Zf = u0(Wu), Ar = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, o) {
      return Wu[f] || String.fromCharCode(parseInt(o, f.indexOf("x") > -1 ? 16 : 10)) || f;
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
})(), Jf = /[&<>'"]/g, Ud = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function vr(e) {
  var r = e + "";
  return r.replace(Jf, function(t) {
    return Zf[t];
  }).replace(Ud, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function _c(e) {
  return vr(e).replace(/ /g, "_x0020_");
}
var Hu = /[\u0000-\u001f]/g;
function Ci(e) {
  var r = e + "";
  return r.replace(Jf, function(t) {
    return Zf[t];
  }).replace(/\n/g, "<br/>").replace(Hu, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Wd(e) {
  var r = e + "";
  return r.replace(Jf, function(t) {
    return Zf[t];
  }).replace(Hu, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var wc = /* @__PURE__ */ (function() {
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
function rf(e) {
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
function yc(e) {
  var r = on(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function kc(e) {
  return Na(e, "binary").toString("utf8");
}
var Os = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Br = mr && (kc(Os) == rf(Os) && kc || yc(Os) == rf(Os) && yc) || rf, Da = mr ? function(e) {
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
}, Vu = (function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
})(), Vd = /<\/?(?:vt:)?variant>/g, Xd = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function Ec(e, r) {
  var t = Ye(e), a = Pu(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(Vd, "").match(Xd);
    s && n.push({ v: Br(s[2]), t: s[1] });
  }), n;
}
var Xu = /(^\s|\s$|\n)/;
function kt(e, r) {
  return "<" + e + (r.match(Xu) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function Xi(e) {
  return Gr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function Ae(e, r, t) {
  return "<" + e + (t != null ? Xi(t) : "") + (r != null ? (r.match(Xu) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function Tf(e, r) {
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
  if (e instanceof Date) return Ae("vt:filetime", Tf(e));
  throw new Error("Unable to serialize " + e);
}
function d0(e) {
  if (mr && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Br(Oa(Kf(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ot = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, ut = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" }, Bn = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"], Zt = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
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
var Tc = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, Sc = mr ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Na(r);
  })) : Tc(e);
} : Tc, bc = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Wa(e, n)));
  return a.join("").replace(zt, "");
}, Qf = mr ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !Wi ? bc(e, r, t) : e.toString("utf16le", r, t).replace(zt, "");
} : bc, Fc = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Ku = mr ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Fc(e, r, t);
} : Fc, Ac = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(Yn(e, n)));
  return a.join("");
}, is = mr ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Ac(r, t, a);
} : Ac, ju = function(e, r) {
  var t = Jt(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, Gu = ju, zu = function(e, r) {
  var t = Jt(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, $u = zu, qu = function(e, r) {
  var t = 2 * Jt(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, Yu = qu, Zu = function(r, t) {
  var a = Jt(r, t);
  return a > 0 ? Qf(r, t + 4, t + 4 + a) : "";
}, Ju = Zu, Qu = function(e, r) {
  var t = Jt(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t) : "";
}, el = Qu, rl = function(e, r) {
  return jd(e, r);
}, t0 = rl, eo = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
mr && (Gu = function(r, t) {
  if (!Buffer.isBuffer(r)) return ju(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, $u = function(r, t) {
  if (!Buffer.isBuffer(r)) return zu(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, Yu = function(r, t) {
  if (!Buffer.isBuffer(r) || !Wi) return qu(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, Ju = function(r, t) {
  if (!Buffer.isBuffer(r) || !Wi) return Zu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, el = function(r, t) {
  if (!Buffer.isBuffer(r)) return Qu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, t0 = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : rl(r, t);
}, eo = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
var Yn = function(e, r) {
  return e[r];
}, Wa = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, zd = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, Jt = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, kn = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, $d = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function Ii(e, r) {
  var t = "", a, n, i = [], s, f, o, u;
  switch (r) {
    case "dbcs":
      if (u = this.l, mr && Buffer.isBuffer(this) && Wi) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (o = 0; o < e; ++o) t += String.fromCharCode(Wa(this, u)), u += 2;
      e *= 2;
      break;
    case "utf8":
      t = is(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = Qf(this, this.l, this.l + e);
      break;
    case "wstr":
      return Ii.call(this, e, "dbcs");
    case "lpstr-ansi":
      t = Gu(this, this.l), e = 4 + Jt(this, this.l);
      break;
    case "lpstr-cp":
      t = $u(this, this.l), e = 4 + Jt(this, this.l);
      break;
    case "lpwstr":
      t = Yu(this, this.l), e = 4 + 2 * Jt(this, this.l);
      break;
    case "lpp4":
      e = 4 + Jt(this, this.l), t = Ju(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Jt(this, this.l), t = el(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = Yn(this, this.l + e++)) !== 0; ) i.push(Ds(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Wa(this, this.l + e)) !== 0; ) i.push(Ds(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", u = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = Yn(this, u), this.l = u + 1, f = Ii.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds(Wa(this, u))), u += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", u = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = Yn(this, u), this.l = u + 1, f = Ii.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds(Yn(this, u))), u += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Yn(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? zd : Wa)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? kn : $d)(this, this.l), this.l += 4, a) : (n = Jt(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f") return e == 8 ? n = t0(this, this.l) : n = t0([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Ku(this, this.l, e);
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
function tl(e, r) {
  var t = Ku(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function ct(e, r) {
  e.l = r, e.read_shift = Ii, e.chk = tl, e.write_shift = Jd;
}
function Lt(e, r) {
  e.l += r;
}
function oe(e) {
  var r = on(e);
  return ct(r, 0), r;
}
function za(e, r, t) {
  if (e) {
    var a, n, i;
    ct(e, e.l || 0);
    for (var s = e.length, f = 0, o = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var u = Ji[f] || Ji[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      o = e.l + i;
      var h = u.f && u.f(e, i, t);
      if (e.l = o, r(h, u, f)) return;
    }
  }
}
function Pt() {
  var e = [], r = mr ? 16384 : 2048;
  mr && oe(r).copy;
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
  }, o = function(h) {
    n(), a = h, a.l == null && (a.l = a.length), i(r);
  };
  return { next: i, push: o, end: s, _bufs: e, end2: f };
}
function ve(e, r, t, a) {
  var n = +r, i;
  if (!isNaN(n)) {
    a || (a = Ji[n].p || (t || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f) if (a >= 128) s.write_shift(1, (a & 127) + 128), a >>= 7;
    else {
      s.write_shift(1, a);
      break;
    }
    a > 0 && eo(t) && e.push(t);
  }
}
function Di(e, r, t) {
  var a = Vr(e);
  if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
    for (; a.c >= 256; ) a.c -= 256;
    for (; a.r >= 65536; ) a.r -= 65536;
  }
  return a;
}
function Cc(e, r, t) {
  var a = Vr(e);
  return a.s = Di(a.s, r.s, t), a.e = Di(a.e, r.s, t), a;
}
function Oi(e, r) {
  if (e.cRel && e.c < 0) for (e = Vr(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Vr(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = yr(e);
  return !e.cRel && e.cRel != null && (t = rx(t)), !e.rRel && e.rRel != null && (t = Qd(t)), t;
}
function tf(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + gr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + gr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Fr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Fr(e.e.r) : Oi(e.s, r.biff) + ":" + Oi(e.e, r.biff);
}
function ro(e) {
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
function to(e) {
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
function Ki(e) {
  var r = wt(e);
  return "$" + gr(r.s.c) + "$" + Fr(r.s.r) + ":$" + gr(r.e.c) + "$" + Fr(r.e.r);
}
function ji(e, r) {
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
function Ic(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = ra(e.z, t ? Yr(r) : r);
  } catch {
  }
  try {
    return e.w = ra((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Yr(r) : r);
  } catch {
    return "" + r;
  }
}
function ja(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? ht[e.v] || e.v : r == null ? Ic(e, e.v) : Ic(e, r));
}
function xn(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function nx(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function al(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = e || (n ? { "!data": [] } : {});
  n && !i["!data"] && (i["!data"] = []);
  var s = 0, f = 0;
  if (i && a.origin != null) if (typeof a.origin == "number") s = a.origin;
  else {
    var o = typeof a.origin == "string" ? Lr(a.origin) : a.origin;
    s = o.r, f = o.c;
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
      var g = { v: y[m], t: "" }, T = f + m;
      if (u.s.r > _ && (u.s.r = _), u.s.c > T && (u.s.c = T), u.e.r < _ && (u.e.r = _), u.e.c < T && (u.e.c = T), d = true, y[m] && typeof y[m] == "object" && !Array.isArray(y[m]) && !(y[m] instanceof Date)) g = y[m];
      else if (Array.isArray(g.v) && (g.f = y[m][1], g.v = g.v[0]), g.v === null) if (g.f) g.t = "n";
      else if (a.nullError) g.t = "e", g.v = 0;
      else if (a.sheetStubs) g.t = "z";
      else continue;
      else typeof g.v == "number" ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || nr[14], a.UTC || (g.v = h0(g.v)), a.cellDates ? (g.t = "d", g.w = ra(g.z, Yr(g.v, a.date1904))) : (g.t = "n", g.v = Yr(g.v, a.date1904), g.w = ra(g.z, g.v))) : g.t = "s";
      if (n) v[T] && v[T].z && (g.z = v[T].z), v[T] = g;
      else {
        var E = gr(T) + (_ + 1);
        i[E] && i[E].z && (g.z = i[E].z), i[E] = g;
      }
    }
  }
  return d && u.s.c < 104e5 && (i["!ref"] = xr(u)), i;
}
function ui(e, r) {
  return al(null, e, r);
}
function ix(e) {
  return e.read_shift(4, "i");
}
function ga(e, r) {
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
function sx(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function fx(e, r) {
  return r || (r = oe(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function ao(e, r) {
  var t = e.l, a = e.read_shift(1), n = Bt(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o) i.push(sx(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function ox(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(15 + 4 * e.t.length)), r.write_shift(1, 0), lt(e.t, r), t ? r.slice(0, r.l) : r;
}
var cx = ao;
function ux(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(23 + 4 * e.t.length)), r.write_shift(1, 1), lt(e.t, r), r.write_shift(4, 1), fx({}, r), t ? r.slice(0, r.l) : r;
}
function ha(e) {
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
var lx = Bt, nl = lt;
function x0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function Gi(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var hx = Bt, Sf = x0, no = Gi;
function p0(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? t0([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : kn(r, 0) >> 2;
  return t ? n / 100 : n;
}
function il(e, r) {
  r == null && (r = oe(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function sl(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function dx(e, r) {
  return r || (r = oe(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var Wn = sl, li = dx;
function Nt(e) {
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
      var u = Sn[n];
      u && (r.rgb = $i(u));
      break;
    case 2:
      r.rgb = $i([s, f, o]);
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
function fl(e, r) {
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
  return fl(e, 1);
}
function gx(e) {
  return fl(e, 2);
}
var io = 2, jt = 3, Ns = 11, Dc = 12, n0 = 19, Rs = 64, _x = 65, wx = 71, yx = 4108, kx = 4126, mt = 80, ol = 81, Ex = [mt, ol], bf = { 1: { n: "CodePage", t: io }, 2: { n: "Category", t: mt }, 3: { n: "PresentationFormat", t: mt }, 4: { n: "ByteCount", t: jt }, 5: { n: "LineCount", t: jt }, 6: { n: "ParagraphCount", t: jt }, 7: { n: "SlideCount", t: jt }, 8: { n: "NoteCount", t: jt }, 9: { n: "HiddenCount", t: jt }, 10: { n: "MultimediaClipCount", t: jt }, 11: { n: "ScaleCrop", t: Ns }, 12: { n: "HeadingPairs", t: yx }, 13: { n: "TitlesOfParts", t: kx }, 14: { n: "Manager", t: mt }, 15: { n: "Company", t: mt }, 16: { n: "LinksUpToDate", t: Ns }, 17: { n: "CharacterCount", t: jt }, 19: { n: "SharedDoc", t: Ns }, 22: { n: "HyperlinksChanged", t: Ns }, 23: { n: "AppVersion", t: jt, p: "version" }, 24: { n: "DigSig", t: _x }, 26: { n: "ContentType", t: mt }, 27: { n: "ContentStatus", t: mt }, 28: { n: "Language", t: mt }, 29: { n: "Version", t: mt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Ff = { 1: { n: "CodePage", t: io }, 2: { n: "Title", t: mt }, 3: { n: "Subject", t: mt }, 4: { n: "Author", t: mt }, 5: { n: "Keywords", t: mt }, 6: { n: "Comments", t: mt }, 7: { n: "Template", t: mt }, 8: { n: "LastAuthor", t: mt }, 9: { n: "RevNumber", t: mt }, 10: { n: "EditTime", t: Rs }, 11: { n: "LastPrinted", t: Rs }, 12: { n: "CreatedDate", t: Rs }, 13: { n: "ModifiedDate", t: Rs }, 14: { n: "PageCount", t: jt }, 15: { n: "WordCount", t: jt }, 16: { n: "CharCount", t: jt }, 17: { n: "Thumbnail", t: wx }, 18: { n: "Application", t: mt }, 19: { n: "DocSecurity", t: jt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Oc = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, Tx = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Sx(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var bx = Sx([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Sn = Vr(bx), ht = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, _t = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, so = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"], Af = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" }, Ps = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
function fo() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function Fx(e) {
  var r = fo();
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
        r[Af[n.ContentType]] !== void 0 && r[Af[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== ut.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function cl(e, r, t) {
  var a = vd(Af), n = [], i;
  n[n.length] = at, n[n.length] = Ae("Types", null, { xmlns: ut.CT, "xmlns:xsd": ut.xsd, "xmlns:xsi": ut.xsi }), n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(u) {
    return Ae("Default", null, { Extension: u[0], ContentType: u[1] });
  }));
  var s = function(u) {
    e[u] && e[u].length > 0 && (i = e[u][0], n[n.length] = Ae("Override", null, { PartName: (i[0] == "/" ? "" : "/") + i, ContentType: Ps[u][r.bookType] || Ps[u].xlsx }));
  }, f = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: Ps[u][r.bookType] || Ps[u].xlsx });
    });
  }, o = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: a[u][0] });
    });
  };
  return s("workbooks"), f("sheets"), f("charts"), o("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(o), o("vba"), o("comments"), o("threadedcomments"), o("drawings"), f("metadata"), o("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var wr = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
function zi(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function Ni(e, r) {
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
function Nc(e, r, t) {
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
  for (var t = 0; t != e.length; ++t) r.push(Nc(e[t][0], e[t][1])), r.push(Dx("", e[t][0]));
  return r.push(Nc("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function ul(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Ys.version + "</meta:generator></office:meta></office:document-meta>";
}
var Xa = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function ll(e) {
  var r = {};
  e = Br(e);
  for (var t = 0; t < Xa.length; ++t) {
    var a = Xa[t], n = Tn(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = Ar(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = $r(r[a[1]]));
  }
  return r;
}
function af(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = vr(r), a[a.length] = t ? Ae(e, r, t) : kt(e, r));
}
function hl(e, r) {
  var t = r || {}, a = [at, Ae("cp:coreProperties", null, { "xmlns:cp": ut.CORE_PROPS, "xmlns:dc": ut.dc, "xmlns:dcterms": ut.dcterms, "xmlns:dcmitype": ut.dcmitype, "xmlns:xsi": ut.xsi })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && af("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Tf(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && af("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Tf(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != Xa.length; ++i) {
    var s = Xa[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === true ? f = "1" : f === false ? f = "0" : typeof f == "number" && (f = String(f)), f != null && af(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var bn = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]], dl = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function xl(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = Ec(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(h) {
    return { v: h };
  }));
  var s = typeof r == "string" ? Ec(r, a).map(function(h) {
    return h.v;
  }) : r, f = 0, o = 0;
  if (s.length > 0) for (var u = 0; u !== n.length; u += 2) {
    switch (o = +n[u + 1].v, n[u].v) {
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
  }), a.HeadingPairs && a.TitlesOfParts && xl(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function pl(e) {
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
    switch (la(f[0])) {
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
          var o = s.split(">"), u = o[0].slice(4), h = o[1];
          switch (u) {
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
              if (u.slice(-1) == "/") break;
              r.WTF && typeof console < "u" && console.warn("Unexpected", s, u, o);
          }
        } else if (s.slice(0, 2) !== "</") {
          if (r.WTF) throw new Error(s);
        }
    }
  }
  return t;
}
function vl(e) {
  var r = [at, Ae("Properties", null, { xmlns: ut.CUST_PROPS, "xmlns:vt": ut.vt })];
  if (!e) return r.join("");
  var t = 1;
  return Gr(e).forEach(function(n) {
    ++t, r[r.length] = Ae("property", Kd(e[n]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t, name: vr(n) });
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var Cf = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, nf;
function Bx(e, r, t) {
  nf || (nf = u0(Cf)), r = nf[r] || r, e[r] = t;
}
function Lx(e, r) {
  var t = [];
  return Gr(Cf).map(function(a) {
    for (var n = 0; n < Xa.length; ++n) if (Xa[n][1] == a) return Xa[n];
    for (n = 0; n < bn.length; ++n) if (bn[n][1] == a) return bn[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      a[2] === "date" && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), typeof n == "number" ? n = String(n) : n === true || n === false ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(kt(Cf[a[1]] || a[1], n));
    }
  }), Ae("DocumentProperties", t.join(""), { xmlns: Zt.o });
}
function Mx(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && Gr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < Xa.length; ++s) if (i == Xa[s][1]) return;
      for (s = 0; s < bn.length; ++s) if (i == bn[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], o = "string";
      typeof f == "number" ? (o = "float", f = String(f)) : f === true || f === false ? (o = "boolean", f = f ? "1" : "0") : f = String(f), n.push(Ae(_c(i), f, { "dt:dt": o }));
    }
  }), r && Gr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === true || s === false ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(Ae(_c(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Zt.o + '">' + n.join("") + "</" + a + ">";
}
function oo(e) {
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
function ml(e, r, t) {
  return r === 31 ? Hx(e) : Wx(e, r, t);
}
function Ri(e, r, t) {
  return ml(e, r, t === false ? 0 : 4);
}
function Vx(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return ml(e, r, 0);
}
function Xx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace(zt, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function Kx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(zt, "");
  return t;
}
function jx(e) {
  var r = e.l, t = i0(e, ol);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = i0(e, jt);
  return [t, a];
}
function Gx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(jx(e));
  return t;
}
function Rc(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace(zt, "").replace(Fi, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function gl(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function zx(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function i0(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== Dc && a !== r && Ex.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126)) throw new Error("Expected type " + r + " saw " + a);
  switch (r === Dc ? a : r) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      e.l += 4, val = Ri(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 31:
      e.l += 4, val = Ri(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 64:
      return oo(e);
    case 65:
      return gl(e);
    case 71:
      return zx(e);
    case 80:
      return Ri(e, a, !i.raw).replace(zt, "");
    case 81:
      return Vx(e, a).replace(zt, "");
    case 4108:
      return Gx(e);
    case 4126:
    case 4127:
      return a == 4127 ? Xx(e) : Kx(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Pc(e, r) {
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
function Bc(e, r) {
  var t = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, o = -1, u = {};
  for (s = 0; s != n; ++s) {
    var h = e.read_shift(4), v = e.read_shift(4);
    i[s] = [h, v + t];
  }
  i.sort(function(T, E) {
    return T[1] - E[1];
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
          va(f = d[_.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + d[_.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = d.CodePage = i0(e, io), va(f), o !== -1) {
        var y = e.l;
        e.l = i[o][1], u = Rc(e, f), e.l = y;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        o = s, e.l = i[s + 1][1];
        continue;
      }
      u = Rc(e, f);
    } else {
      var m = u[i[s][0]], g;
      switch (e[e.l]) {
        case 65:
          e.l += 4, g = gl(e);
          break;
        case 30:
          e.l += 4, g = Ri(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 31:
          e.l += 4, g = Ri(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
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
          e.l += 4, g = $r(oo(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      d[m] = g;
    }
  }
  return e.l = t + a, d;
}
var _l = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
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
function Lc(e, r, t) {
  var a = oe(8), n = [], i = [], s = 8, f = 0, o = oe(8), u = oe(8);
  if (o.write_shift(4, 2), o.write_shift(4, 1200), u.write_shift(4, 1), i.push(o), n.push(u), s += 8 + o.length, !r) {
    u = oe(8), u.write_shift(4, 0), n.unshift(u);
    var h = [oe(4)];
    for (h[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (o = oe(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), o.write_shift(4, f + 2), o.write_shift(4, v.length + 1), o.write_shift(0, v, "dbcs"); o.l != o.length; ) o.write_shift(1, 0);
      h.push(o);
    }
    o = rt(h), i.unshift(o), s += 8 + o.length;
  }
  for (f = 0; f < e.length; ++f) if (!(r && !r[e[f][0]]) && !(_l.indexOf(e[f][0]) > -1 || dl.indexOf(e[f][0]) > -1) && e[f][1] != null) {
    var d = e[f][1], x = 0;
    if (r) {
      x = +r[e[f][0]];
      var _ = t[x];
      if (_.p == "version" && typeof d == "string") {
        var y = d.split(".");
        d = (+y[0] << 16) + (+y[1] || 0);
      }
      o = Pc(_.t, d);
    } else {
      var m = $x(d);
      m == -1 && (m = 31, d = String(d)), o = Pc(m, d);
    }
    i.push(o), u = oe(8), u.write_shift(4, r ? x : 2 + f), n.push(u), s += 8 + o.length;
  }
  var g = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f) n[f].write_shift(4, g), g += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), rt([a].concat(n).concat(i));
}
function Mc(e, r, t) {
  var a = e.content;
  if (!a) return {};
  ct(a, 0);
  var n, i, s, f, o = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var u = a.read_shift(4), h = a.read_shift(16);
  if (h !== ir.utils.consts.HEADER_CLSID && h !== t) throw new Error("Bad PropertySet CLSID " + h);
  if (n = a.read_shift(4), n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l) throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), o = a.read_shift(4));
  var v = Bc(a, r), d = { SystemIdentifier: u };
  for (var x in v) d[x] = v[x];
  if (d.FMTID = i, n === 1) return d;
  if (o - a.l == 2 && (a.l += 2), a.l !== o) throw new Error("Length mismatch 2: " + a.l + " !== " + o);
  var _;
  try {
    _ = Bc(a, null);
  } catch {
  }
  for (x in _) d[x] = _[x];
  return d.FMTID = [i, s], d;
}
function Uc(e, r, t, a, n, i) {
  var s = oe(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, ir.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var o = Lc(e, t, a);
  if (f.push(o), n) {
    var u = Lc(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + o.length), f.push(u);
  }
  return rt(f);
}
function tn(e, r) {
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
function It(e, r) {
  return r || (r = oe(2)), r.write_shift(2, +!!e), r;
}
function Zr(e) {
  return e.read_shift(2, "u");
}
function oa(e, r) {
  return r || (r = oe(2)), r.write_shift(2, e), r;
}
function wl(e, r) {
  return Yx(e, r, Zr);
}
function yl(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function kl(e, r, t) {
  return t || (t = oe(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function si(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = ca;
  if (t && t.biff >= 8 && (ca = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return ca = i, f;
}
function Zx(e) {
  var r = ca;
  ca = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, o, u = {};
  i && (f = e.read_shift(2)), n && (o = e.read_shift(4));
  var h = s == 2 ? "dbcs-cont" : "sbcs-cont", v = t === 0 ? "" : e.read_shift(t, h);
  return i && (e.l += 4 * f), n && (e.l += o), u.t = v, i || (u.raw = "<t>" + u.t + "</t>", u.r = u.t), ca = r, u;
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
function ss(e, r, t) {
  var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : Rn(e, a, t);
}
function Hn(e, r, t) {
  if (t.biff > 5) return ss(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function El(e, r, t) {
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
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(zt, "");
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
  var s = e.read_shift(i >> 1, "utf16le").replace(zt, "");
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
function Bs(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace(zt, "") : "";
  return t;
}
function Wc(e, r) {
  r || (r = oe(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function ap(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, o, u = "", h, v;
  n & 16 && (i = Bs(e, t - e.l)), n & 128 && (s = Bs(e, t - e.l)), (n & 257) === 257 && (f = Bs(e, t - e.l)), (n & 257) === 1 && (o = tp(e, t - e.l)), n & 8 && (u = Bs(e, t - e.l)), n & 32 && (h = e.read_shift(16)), n & 64 && (v = oo(e)), e.l = t;
  var d = s || f || o || "";
  d && u && (d += "#" + u), d || (d = "#" + u), n & 2 && d.charAt(0) == "/" && d.charAt(1) != "/" && (d = "file://" + d);
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
  if (i == 28) a = a.slice(1), Wc(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && Wc(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var o = 0; a.slice(o * 3, o * 3 + 3) == "../" || a.slice(o * 3, o * 3 + 3) == "..\\"; ) ++o;
    for (r.write_shift(2, o), r.write_shift(4, a.length - 3 * o + 1), t = 0; t < a.length - 3 * o; ++t) r.write_shift(1, a.charCodeAt(t + 3 * o) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function Tl(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function Sl(e, r) {
  var t = Tl(e);
  return t[3] = 0, t;
}
function wa(e, r, t) {
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
function bl(e) {
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
function Fl(e, r) {
  return r || (r = oe(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function Al(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var cp = Al;
function Cl(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function up(e) {
  var r = {};
  return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
}
function lp(e) {
  var r = {};
  return e.l += 4, e.cf = e.read_shift(2), r;
}
function Ft(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var hp = { 0: Ft, 4: Ft, 5: Ft, 6: Ft, 7: lp, 8: Ft, 9: Ft, 10: Ft, 11: Ft, 12: Ft, 13: up, 14: Ft, 15: Ft, 16: Ft, 17: Ft, 18: Ft, 19: Ft, 20: Ft, 21: Cl };
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
function Ls(e, r) {
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
function co(e, r, t) {
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
function Hc(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function bp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), o = e.read_shift(2), u = e.read_shift(2);
  return { Pos: [r, t], Dim: [a, n], Flags: i, CurTab: s, FirstTab: f, Selected: o, TabRatio: u };
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
  var a = wa(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function Rp(e, r, t, a) {
  var n = oe(10);
  return Pn(e, r, a, n), n.write_shift(4, t), n;
}
function Pp(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = wa(e, r, t), i = ss(e, a - e.l, t);
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
function Vc(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), o = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c: o } };
}
function Vp(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = oe(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Xp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = bl(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function Kp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(bl(e));
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
function Xc(e, r, t, a) {
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
function Il(e) {
  var r = oe(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var Yp = Il;
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
  var a = wa(e, 6, t), n = yl(e);
  return a.val = n, a.t = n === true || n === false ? "b" : "e", a;
}
function sf(e, r, t, a, n, i) {
  var s = oe(8);
  return Pn(e, r, a, s), kl(t, i, s), s;
}
function tv(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = wa(e, 6, t), n = Nt(e);
  return a.val = n, a;
}
function av(e, r, t, a) {
  var n = oe(14);
  return Pn(e, r, a, n), Nn(t, n), n;
}
var Kc = sp;
function nv(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = Rn(e, i), f = []; a > e.l; ) f.push(ss(e));
  return [i, n, s, f];
}
function jc(e, r, t) {
  var a = e.read_shift(2), n, i = { fBuiltIn: a & 1, fWantAdvise: a >>> 1 & 1, fWantPict: a >>> 2 & 1, fOle: a >>> 3 & 1, fOleLink: a >>> 4 & 1, cf: a >>> 5 & 1023, fIcon: a >>> 15 & 1 };
  return t.sbcch === 14849 && (n = op(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function Gc(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), o = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), o = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var u = Rn(e, s, t);
  n & 32 && (u = so[u.charCodeAt(0)]);
  var h = a - e.l;
  t && t.biff == 2 && --h;
  var v = a == e.l || f === 0 || !(h > 0) ? [] : g_(e, h, t, f);
  return { chKey: i, Name: u, itab: o, rgce: v };
}
function Dl(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return zc(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(fp(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function zc(e, r, t) {
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
  var a = Al(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [__(e, r, t), n, a];
}
function $c(e, r, t) {
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
function ff(e, r, t, a) {
  var n = oe(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function uv(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(v0(e));
  return t;
}
function lv(e) {
  var r = oe(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) Fl(e[t], r);
  return r;
}
function hv(e, r, t) {
  if (t && t.biff < 8) return xv(e, r, t);
  var a = Cl(e), n = dp(e, r - 22, a[1]);
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
  return s.push((dv[a] || Lt)(e, r, t)), { cmo: [n, a, i], ft: s };
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
    for (var u = 1; u < e.lens.length - 1; ++u) {
      if (e.l - a != e.lens[u]) throw new Error("TxO: bad continue record");
      var h = e[e.l], v = Rn(e, e.lens[u + 1] - e.lens[u] - 1);
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
  return a = a.replace(zt, ""), [t, a];
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
  return t = e.read_shift(2), r[0] = Oc[t] || t, t = e.read_shift(2), r[1] = Oc[t] || t, r;
}
function yv(e) {
  return e || (e = oe(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function kv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Sl(e));
  return t;
}
function Ev(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Sl(e));
  return t;
}
function Tv(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function Ol(e, r, t) {
  if (!t.cellStyles) return Lt(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), o = e.read_shift(2);
  a == 2 && (e.l += 2);
  var u = { s: n, e: i, w: s, ixfe: f, flags: o };
  return (t.biff >= 5 || !t.biff) && (u.level = o >> 8 & 7), u;
}
function Sv(e, r) {
  var t = oe(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function bv(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Nt(e), t.footer = Nt(e), e.l += 2), t;
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
var Cv = wa, Iv = wl, Dv = ss;
function Ov(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function fs(e, r, t, a, n) {
  return e || (e = oe(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(1, a || 0), e.write_shift(1, n || 0), e.write_shift(1, 0), e;
}
function Nv(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = wa(e, 7, t), n = Hn(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function Rv(e, r, t) {
  var a = wa(e, 7, t), n = Nt(e);
  return a.t = "n", a.val = n, a;
}
function Pv(e, r, t, a, n) {
  var i = oe(15);
  return fs(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function Bv(e, r, t) {
  var a = wa(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function Lv(e, r, t, a, n) {
  var i = oe(9);
  return fs(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function Mv(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function Uv(e, r, t) {
  var a = e.l + 7, n = wa(e, 6, t);
  e.l = a;
  var i = yl(e);
  return n.val = i, n.t = i === true || i === false ? "b" : "e", n;
}
function Wv(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function Hv(e, r, t) {
  var a = e.l + r, n = wa(e, 6, t), i = e.read_shift(2), s = Rn(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function Vv(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var Xv = [2, 3, 48, 49, 131, 139, 140, 245], If = (function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, r = u0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function t(f, o) {
    var u = [], h = on(1);
    switch (o.type) {
      case "base64":
        h = Vt(ea(f));
        break;
      case "binary":
        h = Vt(f);
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
    o.codepage, v != 2 && (h.l += 16, h.read_shift(1), h[h.l] !== 0 && e[h[h.l]], h.l += 1, h.l += 2), _ && (h.l += 36);
    for (var T = [], E = {}, A = Math.min(h.length, v == 2 ? 521 : m - 10 - (x ? 264 : 0)), X = _ ? 32 : 11; h.l < A && h[h.l] != 13; ) switch (E = {}, E.name = Oa(h.slice(h.l, h.l + X)).replace(/[\u0000\r\n][\S\s]*$/g, ""), h.l += X, E.type = String.fromCharCode(h.read_shift(1)), v != 2 && !_ && (E.offset = h.read_shift(4)), E.len = h.read_shift(1), v == 2 && (E.offset = h.read_shift(2)), E.dec = h.read_shift(1), E.name.length && T.push(E), v != 2 && (h.l += _ ? 13 : 14), E.type) {
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
    var z = 0, F = 0;
    for (u[0] = [], F = 0; F != T.length; ++F) u[0][F] = T[F].name;
    for (; y-- > 0; ) {
      if (h[h.l] === 42) {
        h.l += g;
        continue;
      }
      for (++h.l, u[++z] = [], F = 0, F = 0; F != T.length; ++F) {
        var U = h.slice(h.l, h.l + T[F].len);
        h.l += T[F].len, ct(U, 0);
        var D = Oa(U);
        switch (T[F].type) {
          case "C":
            D.trim().length && (u[z][F] = D.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            D.length === 8 ? (u[z][F] = new Date(Date.UTC(+D.slice(0, 4), +D.slice(4, 6) - 1, +D.slice(6, 8), 0, 0, 0, 0)), o && o.UTC || (u[z][F] = On(u[z][F]))) : u[z][F] = D;
            break;
          case "F":
            u[z][F] = parseFloat(D.trim());
            break;
          case "+":
          case "I":
            u[z][F] = _ ? U.read_shift(-4, "i") ^ 2147483648 : U.read_shift(4, "i");
            break;
          case "L":
            switch (D.trim().toUpperCase()) {
              case "Y":
              case "T":
                u[z][F] = true;
                break;
              case "N":
              case "F":
                u[z][F] = false;
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
            u[z][F] = "##MEMO##" + (_ ? parseInt(D.trim(), 10) : U.read_shift(4));
            break;
          case "N":
            D = D.replace(/\u0000/g, "").trim(), D && D != "." && (u[z][F] = +D || 0);
            break;
          case "@":
            u[z][F] = new Date(U.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var W = U.read_shift(4), K = U.read_shift(4);
              if (W == 0 && K == 0) break;
              u[z][F] = new Date((W - 2440588) * 864e5 + K), o && o.UTC || (u[z][F] = On(u[z][F]));
            }
            break;
          case "Y":
            u[z][F] = U.read_shift(4, "i") / 1e4 + U.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            u[z][F] = -U.read_shift(-8, "f");
            break;
          case "B":
            if (x && T[F].len == 8) {
              u[z][F] = U.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            U.l += T[F].len;
            break;
          case "0":
            if (T[F].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + T[F].type);
        }
      }
    }
    if (v != 2 && h.l < h.length && h[h.l++] != 26) throw new Error("DBF EOF Marker missing " + (h.l - 1) + " of " + h.length + " " + h[h.l - 1].toString(16));
    return o && o.sheetRows && (u = u.slice(0, o.sheetRows)), o.DBF = T, u;
  }
  function a(f, o) {
    var u = o || {};
    u.dateNF || (u.dateNF = "yyyymmdd");
    var h = ui(t(f, u), u);
    return h["!cols"] = u.DBF.map(function(v) {
      return { wch: v.len, DBF: v };
    }), delete u.DBF, h;
  }
  function n(f, o) {
    try {
      var u = xn(a(f, o), o);
      return u.bookType = "dbf", u;
    } catch (h) {
      if (o && o.WTF) throw h;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, o) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var u = o || {}, h = ca;
    if (+u.codepage >= 0 && va(+u.codepage), u.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = Pt(), d = Pf(f, { header: 1, raw: true, cellDates: true }), x = d[0], _ = d.slice(1), y = f["!cols"] || [], m = 0, g = 0, T = 0, E = 1;
    for (m = 0; m < x.length; ++m) {
      if (((y[m] || {}).DBF || {}).name) {
        x[m] = y[m].DBF.name, ++T;
        continue;
      }
      if (x[m] != null) {
        if (++T, typeof x[m] == "number" && (x[m] = x[m].toString(10)), typeof x[m] != "string") throw new Error("DBF Invalid column name " + x[m] + " |" + typeof x[m] + "|");
        if (x.indexOf(x[m]) !== m) {
          for (g = 0; g < 1024; ++g) if (x.indexOf(x[m] + "_" + g) == -1) {
            x[m] += "_" + g;
            break;
          }
        }
      }
    }
    var A = Dr(f["!ref"]), X = [], z = [], F = [];
    for (m = 0; m <= A.e.c - A.s.c; ++m) {
      var U = "", D = "", W = 0, K = [];
      for (g = 0; g < _.length; ++g) _[g][m] != null && K.push(_[g][m]);
      if (K.length == 0 || x[m] == null) {
        X[m] = "?";
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
        W = Math.max(W, String(K[g]).length), U = U && U != D ? "C" : D;
      }
      W > 250 && (W = 250), D = ((y[m] || {}).DBF || {}).type, D == "C" && y[m].DBF.len > W && (W = y[m].DBF.len), U == "B" && D == "N" && (U = "N", F[m] = y[m].DBF.dec, W = y[m].DBF.len), z[m] = U == "C" || D == "N" ? W : i[U] || 0, E += z[m], X[m] = U;
    }
    var ee = v.next(32);
    for (ee.write_shift(4, 318902576), ee.write_shift(4, _.length), ee.write_shift(2, 296 + 32 * T), ee.write_shift(2, E), m = 0; m < 4; ++m) ee.write_shift(4, 0);
    var de = +r[ca] || 3;
    for (ee.write_shift(4, 0 | de << 8), e[de] != +u.codepage && (u.codepage && console.error("DBF Unsupported codepage " + ca + ", using 1252"), ca = 1252), m = 0, g = 0; m < x.length; ++m) if (x[m] != null) {
      var Pe = v.next(32), me = (x[m].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      Pe.write_shift(1, me, "sbcs"), Pe.write_shift(1, X[m] == "?" ? "C" : X[m], "sbcs"), Pe.write_shift(4, g), Pe.write_shift(1, z[m] || i[X[m]] || 0), Pe.write_shift(1, F[m] || 0), Pe.write_shift(1, 2), Pe.write_shift(4, 0), Pe.write_shift(1, 0), Pe.write_shift(4, 0), Pe.write_shift(4, 0), g += z[m] || i[X[m]] || 0;
    }
    var ze = v.next(264);
    for (ze.write_shift(4, 13), m = 0; m < 65; ++m) ze.write_shift(4, 0);
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
          var Be = "0";
          for (typeof _[m][g] == "number" && (Be = _[m][g].toFixed(F[g] || 0)), Be.length > z[g] && (Be = Be.slice(0, z[g])), T = 0; T < z[g] - Be.length; ++T) ke.write_shift(1, 32);
          ke.write_shift(1, Be, "sbcs");
          break;
        case "D":
          _[m][g] ? (ke.write_shift(4, ("0000" + _[m][g].getFullYear()).slice(-4), "sbcs"), ke.write_shift(2, ("00" + (_[m][g].getMonth() + 1)).slice(-2), "sbcs"), ke.write_shift(2, ("00" + _[m][g].getDate()).slice(-2), "sbcs")) : ke.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var Qe = ke.l, he = String(_[m][g] != null ? _[m][g] : "").slice(0, z[g]);
          for (ke.write_shift(1, he, "cpstr"), Qe += z[g] - ke.l, T = 0; T < Qe; ++T) ke.write_shift(1, 32);
          break;
      }
    }
    return ca = h, v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: n, to_sheet: a, from_sheet: s };
})(), Nl = (function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var t = function(x, _) {
    var y = e[_];
    return typeof y == "number" ? ic(y) : y;
  }, a = function(x, _, y) {
    var m = _.charCodeAt(0) - 32 << 4 | y.charCodeAt(0) - 48;
    return m == 59 ? x : ic(m);
  };
  e["|"] = 254;
  var n = function(x) {
    return x.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function i(x, _) {
    switch (_.type) {
      case "base64":
        return s(ea(x), _);
      case "binary":
        return s(x, _);
      case "buffer":
        return s(mr && Buffer.isBuffer(x) ? x.toString("binary") : Oa(x), _);
      case "array":
        return s(Dn(x), _);
    }
    throw new Error("Unrecognized type " + _.type);
  }
  function s(x, _) {
    var y = x.split(/[\n\r]+/), m = -1, g = -1, T = 0, E = 0, A = [], X = [], z = null, F = {}, U = [], D = [], W = [], K = 0, ee, de = { Workbook: { WBProps: {}, Names: [] } };
    for (+_.codepage >= 0 && va(+_.codepage); T !== y.length; ++T) {
      K = 0;
      var Pe = y[T].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), me = Pe.replace(/;;/g, "\0").split(";").map(function(V) {
        return V.replace(/\u0000/g, ";");
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
          me[1].charAt(0) === "P" && X.push(Pe.slice(3).replace(/;;/g, ";"));
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
              ke = me[E].slice(1), ke.charAt(0) === '"' ? (ke = ke.slice(1, ke.length - 1), Ze = "s") : ke === "TRUE" || ke === "FALSE" ? (ke = ke === "TRUE", Ze = "b") : ke.charAt(0) == "#" && _t[ke] != null ? (Ze = "e", ke = _t[ke]) : isNaN(Qt(ke)) || (ke = Qt(ke), Ze = "n", z !== null && ua(z) && _.cellDates && (ke = Va(de.Workbook.WBProps.date1904 ? ke + 1462 : ke), Ze = typeof ke == "number" ? "n" : "d")), he = true;
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
          if (he && (A[m][g] ? (A[m][g].t = Ze, A[m][g].v = ke) : A[m][g] = { t: Ze, v: ke }, z && (A[m][g].z = z), _.cellText !== false && z && (A[m][g].w = ra(A[m][g].z, A[m][g].v, { date1904: de.Workbook.WBProps.date1904 })), z = null), Me) {
            if (Te) throw new Error("SYLK shared formula cannot have own formula");
            var M = ye > -1 && A[ye][je];
            if (!M || !M[1]) throw new Error("SYLK shared formula cannot find base");
            Ge = zl(M[1], { r: m - ye, c: g - je });
          }
          Ge && (A[m][g] ? A[m][g].f = Ge : A[m][g] = { t: "n", f: Ge }), P && (A[m][g] || (A[m][g] = { t: "z" }), A[m][g].c = [{ a: "SheetJSYLK", t: P }]);
          break;
        case "F":
          var G = 0;
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "X":
              g = parseInt(me[E].slice(1), 10) - 1, ++G;
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
              z = X[parseInt(me[E].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (W = me[E].slice(1).split(" "), ee = parseInt(W[0], 10); ee <= parseInt(W[1], 10); ++ee) K = parseInt(W[2], 10), D[ee - 1] = K === 0 ? { hidden: true } : { wch: K };
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
          G < 1 && (z = null);
          break;
        default:
          if (_ && _.WTF) throw new Error("SYLK bad record " + Pe);
      }
    }
    return U.length > 0 && (F["!rows"] = U), D.length > 0 && (F["!cols"] = D), D.forEach(function(V) {
      cn(V);
    }), _ && _.sheetRows && (A = A.slice(0, _.sheetRows)), [A, F, de];
  }
  function f(x, _) {
    var y = i(x, _), m = y[0], g = y[1], T = y[2], E = Vr(_);
    E.date1904 = (((T || {}).Workbook || {}).WBProps || {}).date1904;
    var A = ui(m, E);
    Gr(g).forEach(function(z) {
      A[z] = g[z];
    });
    var X = xn(A, _);
    return Gr(T).forEach(function(z) {
      X[z] = T[z];
    }), X.bookType = "sylk", X;
  }
  function o(x, _, y, m, g, T) {
    var E = "C;Y" + (y + 1) + ";X" + (m + 1) + ";K";
    switch (x.t) {
      case "n":
        E += isFinite(x.v) ? x.v || 0 : ht[isNaN(x.v) ? 36 : 7], x.f && !x.F && (E += ";E" + g0(x.f, { r: y, c: m }));
        break;
      case "b":
        E += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        E += x.w || ht[x.v] || x.v;
        break;
      case "d":
        E += Yr($r(x.v, T), T);
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
      y.hidden ? g += "0" : (typeof y.width == "number" && !y.wpx && (y.wpx = qi(y.width)), typeof y.wpx == "number" && !y.wch && (y.wch = Yi(y.wpx)), typeof y.wch == "number" && (g += Math.round(y.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function v(x, _) {
    _.forEach(function(y, m) {
      var g = "F;";
      y.hidden ? g += "M0;" : y.hpt ? g += "M" + 20 * y.hpt + ";" : y.hpx && (g += "M" + 20 * Zi(y.hpx) + ";"), g.length > 2 && x.push(g + "R" + (m + 1));
    });
  }
  function d(x, _, y) {
    _ || (_ = {}), _._formats = ["General"];
    var m = ["ID;PSheetJS;N;E"], g = [], T = Dr(x["!ref"] || "A1"), E, A = x["!data"] != null, X = `\r
`, z = (((y || {}).Workbook || {}).WBProps || {}).date1904, F = "General";
    m.push("P;PGeneral");
    var U = T.s.r, D = T.s.c, W = [];
    if (x["!ref"]) {
      for (U = T.s.r; U <= T.e.r; ++U) if (!(A && !x["!data"][U])) {
        for (W = [], D = T.s.c; D <= T.e.c; ++D) E = A ? x["!data"][U][D] : x[gr(D) + Fr(U)], !(!E || !E.c) && W.push(u(E.c, U, D));
        W.length && g.push(W.join(X));
      }
    }
    if (x["!ref"]) {
      for (U = T.s.r; U <= T.e.r; ++U) if (!(A && !x["!data"][U])) {
        for (W = [], D = T.s.c; D <= T.e.c; ++D) if (E = A ? x["!data"][U][D] : x[gr(D) + Fr(U)], !(!E || E.v == null && (!E.f || E.F))) {
          if ((E.z || (E.t == "d" ? nr[14] : "General")) != F) {
            var K = _._formats.indexOf(E.z);
            K == -1 && (_._formats.push(E.z), K = _._formats.length - 1, m.push("P;P" + E.z.replace(/;/g, ";;"))), W.push("F;P" + K + ";Y" + (U + 1) + ";X" + (D + 1));
          }
          W.push(o(E, x, U, D, _, z));
        }
        g.push(W.join(X));
      }
    }
    return m.push("F;P0;DG0G8;M255"), x["!cols"] && h(m, x["!cols"]), x["!rows"] && v(m, x["!rows"]), x["!ref"] && m.push("B;Y" + (T.e.r - T.s.r + 1) + ";X" + (T.e.c - T.s.c + 1) + ";D" + [T.s.c, T.s.r, T.e.c, T.e.r].join(" ")), m.push("O;L;D;B" + (z ? ";V4" : "") + ";K47;G100 0.001"), delete _._formats, m.join(X) + X + g.join(X) + X + "E" + X;
  }
  return { to_workbook: f, from_sheet: d };
})(), Rl = /* @__PURE__ */ (function() {
  function e(f, o) {
    switch (o.type) {
      case "base64":
        return r(ea(f), o);
      case "binary":
        return r(f, o);
      case "buffer":
        return r(mr && Buffer.isBuffer(f) ? f.toString("binary") : Oa(f), o);
      case "array":
        return r(Dn(f), o);
    }
    throw new Error("Unrecognized type " + o.type);
  }
  function r(f, o) {
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
            g === "TRUE" ? x[h][v] = true : g === "FALSE" ? x[h][v] = false : isNaN(Qt(m)) ? isNaN(Vi(m).getDate()) ? x[h][v] = m : (x[h][v] = $r(m), o && o.UTC || (x[h][v] = On(x[h][v]))) : x[h][v] = Qt(m), ++v;
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
    return ui(e(f, o), o);
  }
  function a(f, o) {
    var u = xn(t(f, o), o);
    return u.bookType = "dif", u;
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
    for (var o = Dr(f["!ref"]), u = f["!data"] != null, h = [`TABLE\r
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
      for (var d = u ? f["!data"][v] : [], x = `-1,0\r
BOT\r
`, _ = o.s.c; _ <= o.e.c; ++_) {
        var y = u ? d && d[_] : f[yr({ r: v, c: _ })];
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
            y.w || (y.w = ra(y.z || nr[14], Yr($r(y.v)))), x += n(y.w, "V");
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
})(), Pl = (function() {
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
      var T = x[m].trim().split(":");
      if (T[0] === "cell") {
        var E = Lr(T[1]);
        if (g.length <= E.r) for (_ = g.length; _ <= E.r; ++_) g[_] || (g[_] = []);
        switch (_ = E.r, y = E.c, T[2]) {
          case "t":
            g[_][y] = e(T[3]);
            break;
          case "v":
            g[_][y] = +T[3];
            break;
          case "vtf":
            var A = T[T.length - 1];
          case "vtc":
            T[3] === "nl" ? g[_][y] = !!+T[4] : g[_][y] = T[T.length - 1].charAt(0) == "#" ? { t: "e", v: _t[T[T.length - 1]] } : +T[4], T[2] == "vtf" && (g[_][y] = [g[_][y], A]);
        }
      }
    }
    return d && d.sheetRows && (g = g.slice(0, d.sheetRows)), g;
  }
  function a(v, d) {
    return ui(t(v, d), d);
  }
  function n(v, d) {
    return xn(a(v, d), d);
  }
  var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`), s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`, f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function u(v) {
    if (!v || !v["!ref"]) return "";
    for (var d = [], x = [], _, y = "", m = wt(v["!ref"]), g = v["!data"] != null, T = m.s.r; T <= m.e.r; ++T) for (var E = m.s.c; E <= m.e.c; ++E) if (y = yr({ r: T, c: E }), _ = g ? (v["!data"][T] || [])[E] : v[y], !(!_ || _.v == null || _.t === "z")) {
      switch (x = ["cell", y, "t"], _.t) {
        case "s":
          x.push(r(_.v));
          break;
        case "b":
          x[2] = "vt" + (_.f ? "f" : "c"), x[3] = "nl", x[4] = _.v ? "1" : "0", x[5] = r(_.f || (_.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var A = Yr($r(_.v));
          x[2] = "vtc", x[3] = "nd", x[4] = "" + A, x[5] = _.w || ra(_.z || nr[14], A);
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
    return [i, s, f, s, u(v), o].join(`
`);
  }
  return { to_workbook: n, to_sheet: a, from_sheet: h };
})(), fi = /* @__PURE__ */ (function() {
  function e(h, v, d, x, _) {
    _.raw ? v[d][x] = h : h === "" || (h === "TRUE" ? v[d][x] = true : h === "FALSE" ? v[d][x] = false : isNaN(Qt(h)) ? isNaN(Vi(h).getDate()) ? h.charCodeAt(0) == 35 && _t[h] != null ? v[d][x] = { t: "e", v: _t[h], w: h } : v[d][x] = h : v[d][x] = $r(h) : v[d][x] = Qt(h));
  }
  function r(h, v) {
    var d = v || {}, x = [];
    if (!h || h.length === 0) return x;
    for (var _ = h.split(/[\r\n]/), y = _.length - 1; y >= 0 && _[y].length === 0; ) --y;
    for (var m = 10, g = 0, T = 0; T <= y; ++T) g = _[T].indexOf(" "), g == -1 ? g = _[T].length : g++, m = Math.max(m, g);
    for (T = 0; T <= y; ++T) {
      x[T] = [];
      var E = 0;
      for (e(_[T].slice(0, m).trim(), x, T, E, d), E = 1; E <= (_[T].length - m) / 10 + 1; ++E) e(_[T].slice(m + (E - 1) * 10, m + E * 10).trim(), x, T, E, d);
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
    var m = 0, g = 0, T = 0, E = 0, A = 0, X = x.charCodeAt(0), z = false, F = 0, U = h.charCodeAt(0), D = d.dateNF != null ? ld(d.dateNF) : null;
    function W() {
      var K = h.slice(E, A);
      K.slice(-1) == "\r" && (K = K.slice(0, -1));
      var ee = {};
      if (K.charAt(0) == '"' && K.charAt(K.length - 1) == '"' && (K = K.slice(1, -1).replace(/""/g, '"')), d.cellText !== false && (ee.w = K), K.length === 0) ee.t = "z";
      else if (d.raw) ee.t = "s", ee.v = K;
      else if (K.trim().length === 0) ee.t = "s", ee.v = K;
      else if (K.charCodeAt(0) == 61) K.charCodeAt(1) == 34 && K.charCodeAt(K.length - 1) == 34 ? (ee.t = "s", ee.v = K.slice(2, -1).replace(/""/g, '"')) : t2(K) ? (ee.t = "s", ee.f = K.slice(1), ee.v = K) : (ee.t = "s", ee.v = K);
      else if (K == "TRUE") ee.t = "b", ee.v = true;
      else if (K == "FALSE") ee.t = "b", ee.v = false;
      else if (!isNaN(T = Qt(K))) ee.t = "n", ee.v = T;
      else if (!isNaN((T = Vi(K)).getDate()) || D && K.match(D)) {
        if (ee.z = d.dateNF || nr[14], D && K.match(D)) {
          var de = hd(K, d.dateNF, K.match(D) || []);
          T = $r(de), d && d.UTC === false && (T = On(T));
        } else d && d.UTC === false ? T = On(T) : d.cellText !== false && d.dateNF && (ee.w = ra(ee.z, T));
        d.cellDates ? (ee.t = "d", ee.v = T) : (ee.t = "n", ee.v = Yr(T)), d.cellNF || delete ee.z;
      } else K.charCodeAt(0) == 35 && _t[K] != null ? (ee.t = "e", ee.w = K, ee.v = _t[K]) : (ee.t = "s", ee.v = K);
      if (ee.t == "z" || (d.dense ? (_["!data"][m] || (_["!data"][m] = []), _["!data"][m][g] = ee) : _[yr({ c: g, r: m })] = ee), E = A + 1, U = h.charCodeAt(E), y.e.c < g && (y.e.c = g), y.e.r < m && (y.e.r = m), F == X) ++g;
      else if (g = 0, ++m, d.sheetRows && d.sheetRows <= m) return true;
    }
    e: for (; A < h.length; ++A) switch (F = h.charCodeAt(A)) {
      case 34:
        U === 34 && (z = !z);
        break;
      case 13:
        if (z) break;
        h.charCodeAt(A + 1) == 10 && ++A;
      case X:
      case 10:
        if (!z && W()) break e;
        break;
    }
    return A - E > 0 && W(), _["!ref"] = xr(y), _;
  }
  function s(h, v) {
    return !(v && v.PRN) || v.FS || h.slice(0, 4) == "sep=" || h.indexOf("	") >= 0 || h.indexOf(",") >= 0 || h.indexOf(";") >= 0 ? i(h, v) : ui(r(h, v), v);
  }
  function f(h, v) {
    var d = "", x = v.type == "string" ? [0, 0, 0, 0] : yo(h, v);
    switch (v.type) {
      case "base64":
        d = ea(h);
        break;
      case "binary":
        d = h;
        break;
      case "buffer":
        v.codepage == 65001 ? d = h.toString("utf8") : (v.codepage, d = mr && Buffer.isBuffer(h) ? h.toString("binary") : Oa(h));
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
    return x[0] == 239 && x[1] == 187 && x[2] == 191 ? d = Br(d.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? d = Br(d) : v.type == "binary", d.slice(0, 19) == "socialcalc:version:" ? Pl.to_sheet(v.type == "string" ? d : Br(d), v) : s(d, v);
  }
  function o(h, v) {
    return xn(f(h, v), v);
  }
  function u(h) {
    var v = [];
    if (!h["!ref"]) return "";
    for (var d = Dr(h["!ref"]), x, _ = h["!data"] != null, y = d.s.r; y <= d.e.r; ++y) {
      for (var m = [], g = d.s.c; g <= d.e.c; ++g) {
        var T = yr({ r: y, c: g });
        if (x = _ ? (h["!data"][y] || [])[g] : h[T], !x || x.v == null) {
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
  return { to_workbook: o, to_sheet: f, from_sheet: u };
})();
function Kv(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = true;
  try {
    var n = Nl.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return fi.to_workbook(e, r);
  }
}
var Fn = /* @__PURE__ */ (function() {
  function e(P, M, G) {
    if (P) {
      ct(P, P.l || 0);
      for (var V = G.Enum || Te; P.l < P.length; ) {
        var ue = P.read_shift(2), O = V[ue] || V[65535], Ce = P.read_shift(2), We = P.l + Ce, Se = O.f && O.f(P, Ce, G);
        if (P.l = We, M(Se, O, ue)) return;
      }
    }
  }
  function r(P, M) {
    switch (M.type) {
      case "base64":
        return a(Vt(ea(P)), M);
      case "binary":
        return a(Vt(P), M);
      case "buffer":
      case "array":
        return a(P, M);
    }
    throw "Unsupported type " + M.type;
  }
  var t = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(P, M) {
    if (!P) return P;
    var G = M || {}, V = {}, ue = "Sheet1", O = "", Ce = 0, We = {}, Se = [], ar = [], rr = [];
    G.dense && (rr = V["!data"] = []);
    var or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ir = G.sheetRows || 0, Er = {};
    if (P[4] == 81 && P[5] == 80 && P[6] == 87) return Ze(P, M);
    if (P[2] == 0 && (P[3] == 8 || P[3] == 9) && P.length >= 16 && P[14] == 5 && P[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (P[2] == 2) G.Enum = Te, e(P, function(Oe, Jr, qr) {
      switch (qr) {
        case 0:
          G.vers = Oe, Oe >= 4096 && (G.qpro = true);
          break;
        case 255:
          G.vers = Oe, G.works = true;
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
          (!G.qpro && !G.works || qr == 51) && Oe[1].v.charCodeAt(0) < 48 && (Oe[1].v = Oe[1].v.slice(1)), (G.works || G.works2) && (Oe[1].v = Oe[1].v.replace(/\r\n/g, `
`));
        case 13:
        case 14:
        case 16:
          (Oe[2] & 112) == 112 && (Oe[2] & 15) > 1 && (Oe[2] & 15) < 15 && (Oe[1].z = G.dateNF || t[(Oe[2] & 15) - 1] || nr[14], G.cellDates && (Oe[1].v = Va(Oe[1].v), Oe[1].t = typeof Oe[1].v == "number" ? "n" : "d")), G.qpro && Oe[3] > Ce && (V["!ref"] = xr(or), We[ue] = V, Se.push(ue), V = {}, G.dense && (rr = V["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], ue = O || "Sheet" + (Ce + 1), O = "");
          var Ur = G.dense ? (rr[Oe[0].r] || [])[Oe[0].c] : V[yr(Oe[0])];
          if (Ur) {
            Ur.t = Oe[1].t, Ur.v = Oe[1].v, Oe[1].z != null && (Ur.z = Oe[1].z), Oe[1].f != null && (Ur.f = Oe[1].f), Er = Ur;
            break;
          }
          G.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : V[yr(Oe[0])] = Oe[1], Er = Oe[1];
          break;
        case 21509:
          G.works2 = true;
          break;
        case 21506:
          Oe == 5281 && (Er.z = "hh:mm:ss", G.cellDates && Er.t == "n" && (Er.v = Va(Er.v), Er.t = typeof Er.v == "number" ? "n" : "d"));
          break;
      }
    }, G);
    else if (P[2] == 26 || P[2] == 14) G.Enum = ye, P[2] == 14 && (G.qpro = true, P.l = 0), e(P, function(Oe, Jr, qr) {
      switch (qr) {
        case 204:
          ue = Oe;
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
          if (Oe[3] > Ce && (V["!ref"] = xr(or), We[ue] = V, Se.push(ue), V = {}, G.dense && (rr = V["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Oe[3], ue = "Sheet" + (Ce + 1)), Ir > 0 && Oe[0].r >= Ir) break;
          G.dense ? (rr[Oe[0].r] || (rr[Oe[0].r] = []), rr[Oe[0].r][Oe[0].c] = Oe[1]) : V[yr(Oe[0])] = Oe[1], or.e.c < Oe[0].c && (or.e.c = Oe[0].c), or.e.r < Oe[0].r && (or.e.r = Oe[0].r);
          break;
        case 27:
          Oe[14e3] && (ar[Oe[14e3][0]] = Oe[14e3][1]);
          break;
        case 1537:
          ar[Oe[0]] = Oe[1], Oe[0] == Ce && (ue = Oe[1]);
          break;
      }
    }, G);
    else throw new Error("Unrecognized LOTUS BOF " + P[2]);
    if (V["!ref"] = xr(or), We[O || ue] = V, Se.push(O || ue), !ar.length) return { SheetNames: Se, Sheets: We };
    for (var Kr = {}, $e = [], Tr = 0; Tr < ar.length; ++Tr) We[Se[Tr]] ? ($e.push(ar[Tr] || Se[Tr]), Kr[ar[Tr]] = We[ar[Tr]] || We[Se[Tr]]) : ($e.push(ar[Tr]), Kr[ar[Tr]] = { "!ref": "A1" });
    return { SheetNames: $e, Sheets: Kr };
  }
  function n(P, M) {
    var G = M || {};
    if (+G.codepage >= 0 && va(+G.codepage), G.type == "string") throw new Error("Cannot write WK1 to JS string");
    var V = Pt();
    if (!P["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var ue = Dr(P["!ref"]), O = P["!data"] != null, Ce = [];
    _e(V, 0, s(1030)), _e(V, 6, u(ue));
    for (var We = Math.min(ue.e.r, 8191), Se = ue.s.c; Se <= ue.e.c; ++Se) Ce[Se] = gr(Se);
    for (var ar = ue.s.r; ar <= We; ++ar) {
      var rr = Fr(ar);
      for (Se = ue.s.c; Se <= ue.e.c; ++Se) {
        var or = O ? (P["!data"][ar] || [])[Se] : P[Ce[Se] + rr];
        if (!(!or || or.t == "z")) switch (or.t) {
          case "n":
            (or.v | 0) == or.v && or.v >= -32768 && or.v <= 32767 ? _e(V, 13, m(ar, Se, or)) : _e(V, 14, T(ar, Se, or));
            break;
          case "d":
            var Ir = Yr(or.v);
            (Ir | 0) == Ir && Ir >= -32768 && Ir <= 32767 ? _e(V, 13, m(ar, Se, { v: Ir, z: or.z || nr[14] })) : _e(V, 14, T(ar, Se, { v: Ir, z: or.z || nr[14] }));
            break;
          default:
            var Er = ja(or);
            _e(V, 15, x(ar, Se, Er.slice(0, 239)));
        }
      }
    }
    return _e(V, 1), V.end();
  }
  function i(P, M) {
    var G = M || {};
    if (+G.codepage >= 0 && va(+G.codepage), G.type == "string") throw new Error("Cannot write WK3 to JS string");
    var V = Pt();
    _e(V, 0, f(P));
    for (var ue = 0, O = 0; ue < P.SheetNames.length; ++ue) (P.Sheets[P.SheetNames[ue]] || {})["!ref"] && _e(V, 27, Me(P.SheetNames[ue], O++));
    var Ce = 0;
    for (ue = 0; ue < P.SheetNames.length; ++ue) {
      var We = P.Sheets[P.SheetNames[ue]];
      if (!(!We || !We["!ref"])) {
        for (var Se = Dr(We["!ref"]), ar = We["!data"] != null, rr = [], or = Math.min(Se.e.r, 8191), Ir = Se.s.r; Ir <= or; ++Ir) for (var Er = Fr(Ir), Kr = Se.s.c; Kr <= Se.e.c; ++Kr) {
          Ir === Se.s.r && (rr[Kr] = gr(Kr));
          var $e = rr[Kr] + Er, Tr = ar ? (We["!data"][Ir] || [])[Kr] : We[$e];
          if (!(!Tr || Tr.t == "z")) if (Tr.t == "n") _e(V, 23, de(Ir, Kr, Ce, Tr.v));
          else {
            var Oe = ja(Tr);
            _e(V, 22, W(Ir, Kr, Ce, Oe.slice(0, 239)));
          }
        }
        ++Ce;
      }
    }
    return _e(V, 1), V.end();
  }
  function s(P) {
    var M = oe(2);
    return M.write_shift(2, P), M;
  }
  function f(P) {
    var M = oe(26);
    M.write_shift(2, 4096), M.write_shift(2, 4), M.write_shift(4, 0);
    for (var G = 0, V = 0, ue = 0, O = 0; O < P.SheetNames.length; ++O) {
      var Ce = P.SheetNames[O], We = P.Sheets[Ce];
      if (!(!We || !We["!ref"])) {
        ++ue;
        var Se = wt(We["!ref"]);
        G < Se.e.r && (G = Se.e.r), V < Se.e.c && (V = Se.e.c);
      }
    }
    return G > 8191 && (G = 8191), M.write_shift(2, G), M.write_shift(1, ue), M.write_shift(1, V), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(1, 1), M.write_shift(1, 2), M.write_shift(4, 0), M.write_shift(4, 0), M;
  }
  function o(P, M, G) {
    var V = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return M == 8 && G.qpro ? (V.s.c = P.read_shift(1), P.l++, V.s.r = P.read_shift(2), V.e.c = P.read_shift(1), P.l++, V.e.r = P.read_shift(2), V) : (V.s.c = P.read_shift(2), V.s.r = P.read_shift(2), M == 12 && G.qpro && (P.l += 2), V.e.c = P.read_shift(2), V.e.r = P.read_shift(2), M == 12 && G.qpro && (P.l += 2), V.s.c == 65535 && (V.s.c = V.e.c = V.s.r = V.e.r = 0), V);
  }
  function u(P) {
    var M = oe(8);
    return M.write_shift(2, P.s.c), M.write_shift(2, P.s.r), M.write_shift(2, P.e.c), M.write_shift(2, P.e.r), M;
  }
  function h(P, M, G) {
    var V = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return G.qpro && G.vers != 20768 ? (V[0].c = P.read_shift(1), V[3] = P.read_shift(1), V[0].r = P.read_shift(2), P.l += 2) : G.works ? (V[0].c = P.read_shift(2), V[0].r = P.read_shift(2), V[2] = P.read_shift(2)) : (V[2] = P.read_shift(1), V[0].c = P.read_shift(2), V[0].r = P.read_shift(2)), V;
  }
  function v(P) {
    return P.z && ua(P.z) ? 240 | (t.indexOf(P.z) + 1 || 2) : 255;
  }
  function d(P, M, G) {
    var V = P.l + M, ue = h(P, M, G);
    if (ue[1].t = "s", (G.vers & 65534) == 20768) {
      P.l++;
      var O = P.read_shift(1);
      return ue[1].v = P.read_shift(O, "utf8"), ue;
    }
    return G.qpro && P.l++, ue[1].v = P.read_shift(V - P.l, "cstr"), ue;
  }
  function x(P, M, G) {
    var V = oe(7 + G.length);
    V.write_shift(1, 255), V.write_shift(2, M), V.write_shift(2, P), V.write_shift(1, 39);
    for (var ue = 0; ue < V.length; ++ue) {
      var O = G.charCodeAt(ue);
      V.write_shift(1, O >= 128 ? 95 : O);
    }
    return V.write_shift(1, 0), V;
  }
  function _(P, M, G) {
    var V = P.l + M, ue = h(P, M, G);
    if (ue[1].t = "s", G.vers == 20768) {
      var O = P.read_shift(1);
      return ue[1].v = P.read_shift(O, "utf8"), ue;
    }
    return ue[1].v = P.read_shift(V - P.l, "cstr"), ue;
  }
  function y(P, M, G) {
    var V = h(P, M, G);
    return V[1].v = P.read_shift(2, "i"), V;
  }
  function m(P, M, G) {
    var V = oe(7);
    return V.write_shift(1, v(G)), V.write_shift(2, M), V.write_shift(2, P), V.write_shift(2, G.v, "i"), V;
  }
  function g(P, M, G) {
    var V = h(P, M, G);
    return V[1].v = P.read_shift(8, "f"), V;
  }
  function T(P, M, G) {
    var V = oe(13);
    return V.write_shift(1, v(G)), V.write_shift(2, M), V.write_shift(2, P), V.write_shift(8, G.v, "f"), V;
  }
  function E(P, M, G) {
    var V = P.l + M, ue = h(P, M, G);
    if (ue[1].v = P.read_shift(8, "f"), G.qpro) P.l = V;
    else {
      var O = P.read_shift(2);
      F(P.slice(P.l, P.l + O), ue), P.l += O;
    }
    return ue;
  }
  function A(P, M, G) {
    var V = M & 32768;
    return M &= -32769, M = (V ? P : 0) + (M >= 8192 ? M - 16384 : M), (V ? "" : "$") + (G ? gr(M) : Fr(M));
  }
  var X = { 31: ["NA", 0], 33: ["ABS", 1], 34: ["TRUNC", 1], 35: ["SQRT", 1], 36: ["LOG", 1], 37: ["LN", 1], 38: ["PI", 0], 39: ["SIN", 1], 40: ["COS", 1], 41: ["TAN", 1], 42: ["ATAN2", 2], 43: ["ATAN", 1], 44: ["ASIN", 1], 45: ["ACOS", 1], 46: ["EXP", 1], 47: ["MOD", 2], 49: ["ISNA", 1], 50: ["ISERR", 1], 51: ["FALSE", 0], 52: ["TRUE", 0], 53: ["RAND", 0], 54: ["DATE", 3], 63: ["ROUND", 2], 64: ["TIME", 3], 68: ["ISNUMBER", 1], 69: ["ISTEXT", 1], 70: ["LEN", 1], 71: ["VALUE", 1], 73: ["MID", 3], 74: ["CHAR", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 102: ["UPPER", 1], 103: ["LOWER", 1], 107: ["PROPER", 1], 109: ["TRIM", 1], 111: ["T", 1] }, z = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function F(P, M) {
    ct(P, 0);
    for (var G = [], V = 0, ue = "", O = "", Ce = "", We = ""; P.l < P.length; ) {
      var Se = P[P.l++];
      switch (Se) {
        case 0:
          G.push(P.read_shift(8, "f"));
          break;
        case 1:
          O = A(M[0].c, P.read_shift(2), true), ue = A(M[0].r, P.read_shift(2), false), G.push(O + ue);
          break;
        case 2:
          {
            var ar = A(M[0].c, P.read_shift(2), true), rr = A(M[0].r, P.read_shift(2), false);
            O = A(M[0].c, P.read_shift(2), true), ue = A(M[0].r, P.read_shift(2), false), G.push(ar + rr + ":" + O + ue);
          }
          break;
        case 3:
          if (P.l < P.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          G.push("(" + G.pop() + ")");
          break;
        case 5:
          G.push(P.read_shift(2));
          break;
        case 6:
          {
            for (var or = ""; Se = P[P.l++]; ) or += String.fromCharCode(Se);
            G.push('"' + or.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          G.push("-" + G.pop());
          break;
        case 23:
          G.push("+" + G.pop());
          break;
        case 22:
          G.push("NOT(" + G.pop() + ")");
          break;
        case 20:
        case 21:
          We = G.pop(), Ce = G.pop(), G.push(["AND", "OR"][Se - 20] + "(" + Ce + "," + We + ")");
          break;
        default:
          if (Se < 32 && z[Se]) We = G.pop(), Ce = G.pop(), G.push(Ce + z[Se] + We);
          else if (X[Se]) {
            if (V = X[Se][1], V == 69 && (V = P[P.l++]), V > G.length) {
              console.error("WK1 bad formula parse 0x" + Se.toString(16) + ":|" + G.join("|") + "|");
              return;
            }
            var Ir = G.slice(-V);
            G.length -= V, G.push(X[Se][0] + "(" + Ir.join(",") + ")");
          } else return Se <= 7 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 24 ? console.error("WK1 unsupported op " + Se.toString(16)) : Se <= 30 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 115 ? console.error("WK1 unsupported function opcode " + Se.toString(16)) : console.error("WK1 unrecognized opcode " + Se.toString(16));
      }
    }
    G.length == 1 ? M[1].f = "" + G[0] : console.error("WK1 bad formula parse |" + G.join("|") + "|");
  }
  function U(P) {
    var M = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return M[0].r = P.read_shift(2), M[3] = P[P.l++], M[0].c = P[P.l++], M;
  }
  function D(P, M) {
    var G = U(P);
    return G[1].t = "s", G[1].v = P.read_shift(M - 4, "cstr"), G;
  }
  function W(P, M, G, V) {
    var ue = oe(6 + V.length);
    ue.write_shift(2, P), ue.write_shift(1, G), ue.write_shift(1, M), ue.write_shift(1, 39);
    for (var O = 0; O < V.length; ++O) {
      var Ce = V.charCodeAt(O);
      ue.write_shift(1, Ce >= 128 ? 95 : Ce);
    }
    return ue.write_shift(1, 0), ue;
  }
  function K(P, M) {
    var G = U(P);
    G[1].v = P.read_shift(2);
    var V = G[1].v >> 1;
    if (G[1].v & 1) switch (V & 7) {
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
    return G[1].v = V, G;
  }
  function ee(P, M) {
    var G = U(P), V = P.read_shift(4), ue = P.read_shift(4), O = P.read_shift(2);
    if (O == 65535) return V === 0 && ue === 3221225472 ? (G[1].t = "e", G[1].v = 15) : V === 0 && ue === 3489660928 ? (G[1].t = "e", G[1].v = 42) : G[1].v = 0, G;
    var Ce = O & 32768;
    return O = (O & 32767) - 16446, G[1].v = (1 - Ce * 2) * (ue * Math.pow(2, O + 32) + V * Math.pow(2, O)), G;
  }
  function de(P, M, G, V) {
    var ue = oe(14);
    if (ue.write_shift(2, P), ue.write_shift(1, G), ue.write_shift(1, M), V == 0) return ue.write_shift(4, 0), ue.write_shift(4, 0), ue.write_shift(2, 65535), ue;
    var O = 0, Ce = 0, We = 0, Se = 0;
    return V < 0 && (O = 1, V = -V), Ce = Math.log2(V) | 0, V /= Math.pow(2, Ce - 31), Se = V >>> 0, (Se & 2147483648) == 0 && (V /= 2, ++Ce, Se = V >>> 0), V -= Se, Se |= 2147483648, Se >>>= 0, V *= Math.pow(2, 32), We = V >>> 0, ue.write_shift(4, We), ue.write_shift(4, Se), Ce += 16383 + (O ? 32768 : 0), ue.write_shift(2, Ce), ue;
  }
  function Pe(P, M) {
    var G = ee(P);
    return P.l += M - 14, G;
  }
  function me(P, M) {
    var G = U(P), V = P.read_shift(4);
    return G[1].v = V >> 6, G;
  }
  function ze(P, M) {
    var G = U(P), V = P.read_shift(8, "f");
    return G[1].v = V, G;
  }
  function ke(P, M) {
    var G = ze(P);
    return P.l += M - 12, G;
  }
  function Be(P, M) {
    return P[P.l + M - 1] == 0 ? P.read_shift(M, "cstr") : "";
  }
  function Qe(P, M) {
    var G = P[P.l++];
    G > M - 1 && (G = M - 1);
    for (var V = ""; V.length < G; ) V += String.fromCharCode(P[P.l++]);
    return V;
  }
  function he(P, M, G) {
    if (!(!G.qpro || M < 21)) {
      var V = P.read_shift(1);
      P.l += 17, P.l += 1, P.l += 2;
      var ue = P.read_shift(M - 21, "cstr");
      return [V, ue];
    }
  }
  function fr(P, M) {
    for (var G = {}, V = P.l + M; P.l < V; ) {
      var ue = P.read_shift(2);
      if (ue == 14e3) {
        for (G[ue] = [0, ""], G[ue][0] = P.read_shift(2); P[P.l]; ) G[ue][1] += String.fromCharCode(P[P.l]), P.l++;
        P.l++;
      }
    }
    return G;
  }
  function Me(P, M) {
    var G = oe(5 + P.length);
    G.write_shift(2, 14e3), G.write_shift(2, M);
    for (var V = 0; V < P.length; ++V) {
      var ue = P.charCodeAt(V);
      G[G.l++] = ue > 127 ? 95 : ue;
    }
    return G[G.l++] = 0, G;
  }
  var Te = { 0: { n: "BOF", f: Zr }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: o }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: y }, 14: { n: "NUMBER", f: g }, 15: { n: "LABEL", f: d }, 16: { n: "FORMULA", f: E }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: _ }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: Be }, 222: { n: "SHEETNAMELP", f: Qe }, 255: { n: "BOF", f: Zr }, 21506: { n: "WKSNF", f: Zr }, 65535: { n: "" } }, ye = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: D }, 23: { n: "NUMBER17", f: ee }, 24: { n: "NUMBER18", f: K }, 25: { n: "FORMULA19", f: Pe }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: fr }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: me }, 38: { n: "??" }, 39: { n: "NUMBER27", f: ze }, 40: { n: "FORMULA28", f: ke }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: Be }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: he }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }, je = { 5: "dd-mmm-yy", 6: "dd-mmm", 7: "mmm-yy", 8: "mm/dd/yy", 10: "hh:mm:ss AM/PM", 11: "hh:mm AM/PM", 14: "dd-mmm-yyyy", 15: "mmm-yyyy", 34: "0.00", 50: "0.00;[Red]0.00", 66: "0.00;(0.00)", 82: "0.00;[Red](0.00)", 162: '"$"#,##0.00;\\("$"#,##0.00\\)', 288: "0%", 304: "0E+00", 320: "# ?/?" };
  function Ge(P) {
    var M = P.read_shift(2), G = P.read_shift(1);
    if (G != 0) throw "unsupported QPW string type " + G.toString(16);
    return P.read_shift(M, "sbcs-cont");
  }
  function Ze(P, M) {
    ct(P, 0);
    var G = M || {}, V = {};
    G.dense && (V["!data"] = []);
    var ue = [], O = "", Ce = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, We = 0, Se = 0, ar = 0, rr = 0, or = { SheetNames: [], Sheets: {} }, Ir = [];
    e: for (; P.l < P.length; ) {
      var Er = P.read_shift(2), Kr = P.read_shift(2), $e = P.slice(P.l, P.l + Kr);
      switch (ct($e, 0), Er) {
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
          for ($e.l += 12; $e.l < $e.length; ) We = $e.read_shift(2), Se = $e.read_shift(1), ue.push($e.read_shift(We, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var yt = $e.read_shift(2);
            V = {}, G.dense && (V["!data"] = []), Ce.s.c = $e.read_shift(2), Ce.e.c = $e.read_shift(2), Ce.s.r = $e.read_shift(4), Ce.e.r = $e.read_shift(4), $e.l += 4, $e.l + 2 < $e.length && (We = $e.read_shift(2), Se = $e.read_shift(1), O = We == 0 ? "" : $e.read_shift(We, "cstr")), O || (O = gr(yt));
          }
          break;
        case 1538:
          {
            if (Ce.s.c > 255 || Ce.s.r > 999999) break;
            Ce.e.c < Ce.s.c && (Ce.e.c = Ce.s.c), Ce.e.r < Ce.s.r && (Ce.e.r = Ce.s.r), V["!ref"] = xr(Ce), ls(or, V, O);
          }
          break;
        case 2561:
          ar = $e.read_shift(2), Ce.e.c < ar && (Ce.e.c = ar), Ce.s.c > ar && (Ce.s.c = ar), rr = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), rr = $e.read_shift(4), Ce.e.r < rr && (Ce.e.r = rr);
          break;
        case 3073:
          {
            rr = $e.read_shift(4), We = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), Ce.e.r < rr + We - 1 && (Ce.e.r = rr + We - 1);
            for (var dt = gr(ar); $e.l < $e.length; ) {
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
                  Ke = { t: "s", v: ue[Se = $e.read_shift(4) - 1] };
                  break;
                case 8:
                  Ke = { t: "n", v: $e.read_shift(8, "f") }, $e.l += 2, $e.l += 4, isNaN(Ke.v) && (Ke = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (kr & 31);
              }
              jr != -1 && (Ir[jr - 1] || {}).z && (Ke.z = Ir[jr - 1].z);
              var xt = 0;
              if (kr & 32) switch (kr & 31) {
                case 2:
                  xt = $e.read_shift(2);
                  break;
                case 3:
                  xt = $e.read_shift(2, "i");
                  break;
                case 7:
                  xt = $e.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (kr & 31);
              }
              if (!(!G.sheetStubs && Ke.t == "z")) {
                var Je = Vr(Ke);
                Ke.t == "n" && Ke.z && ua(Ke.z) && G.cellDates && (Je.v = Va(Ke.v), Je.t = typeof Je.v == "number" ? "n" : "d"), V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = Je) : V[dt + Fr(rr)] = Je;
              }
              for (++rr, --We; zr-- > 0 && We >= 0; ) {
                if (kr & 32) switch (kr & 31) {
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
                    Ke = { t: "s", v: ue[Se = $e.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (kr & 31);
                }
                !G.sheetStubs && Ke.t == "z" || (V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = Ke) : V[dt + Fr(rr)] = Ke), ++rr, --We;
              }
            }
          }
          break;
        case 3074:
          {
            ar = $e.read_shift(2), rr = $e.read_shift(4);
            var ya = Ge($e);
            V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = { t: "s", v: ya }) : V[gr(ar) + Fr(rr)] = { t: "s", v: ya };
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
        r.cp = Hf[parseInt(i.val, 10)];
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
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Ar(Br(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true), a.r = Br(e), t && (a.h = Ci(a.t))) : e.match(qv) && (a.r = Br(e), a.t = Ar(Br((Dd(e, "rPh").match($v) || []).join("").replace(Et, "")), true), t && (a.h = zv(Gv(a.r)))), a) : { t: "" };
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
function am(e, r) {
  return r || (r = oe(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var nm = ox;
function im(e) {
  var r = Pt();
  ve(r, 159, am(e));
  for (var t = 0; t < e.length; ++t) ve(r, 19, nm(e[t]));
  return ve(r, 160), r.end();
}
function Bl(e) {
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function Ka(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function sm(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = Ka(e, 4), r.U = Ka(e, 4), r.W = Ka(e, 4), r;
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
function um(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = Ka(e, 4), r.U = Ka(e, 4), r.W = Ka(e, 4), r;
}
function lm(e) {
  var r = um(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function Ll(e, r) {
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
function Ml(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function hm(e) {
  var r = Ka(e);
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
  var t = e.read_shift(4), a = Ll(e, t), n = Ml(e, e.length - e.l);
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
function vm(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = Ka(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = Ll(e, n), r -= n, t.EncryptionVerifier = Ml(e, r), t;
}
function mm(e) {
  var r = {}, t = r.EncryptionVersionInfo = Ka(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function lo(e) {
  var r = 0, t, a = Bl(e), n = a.length + 1, i, s, f, o, u;
  for (t = on(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i) s = t[i], f = (r & 16384) === 0 ? 0 : 1, o = r << 1 & 32767, u = f | o, r = u ^ s;
  return r ^ 52811;
}
var Ul = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], o = 104, u = s.length - 1; u >= 0; --u) for (var h = s[u], v = 0; v != 7; ++v) h & 64 && (f ^= t[o]), h *= 2, --o;
    return f;
  };
  return function(s) {
    for (var f = Bl(s), o = i(f), u = f.length, h = on(16), v = 0; v != 16; ++v) h[v] = 0;
    var d, x, _;
    for ((u & 1) === 1 && (d = o >> 8, h[u] = n(e[0], d), --u, d = o & 255, x = f[f.length - 1], h[u] = n(x, d)); u > 0; ) --u, d = o >> 8, h[u] = n(f[u], d), --u, d = o & 255, h[u] = n(f[u], d);
    for (u = 15, _ = 15 - f.length; _ > 0; ) d = o >> 8, h[u] = n(e[_], d), --u, --_, d = o & 255, h[u] = n(f[u], d), --u, --_;
    return h;
  };
})(), gm = function(e, r, t, a, n) {
  n || (n = r), a || (a = Ul(e));
  var i, s;
  for (i = 0; i != r.length; ++i) s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, _m = function(e) {
  var r = 0, t = Ul(e);
  return function(a) {
    var n = gm("", a, r, t);
    return r = n[1], n[0];
  };
};
function wm(e, r, t, a) {
  var n = { key: Zr(e), verificationBytes: Zr(e) };
  return t.password && (n.verifier = lo(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = _m(t.password)), n;
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
      return Ms(ea(e), r);
    case "binary":
      return Ms(e, r);
    case "buffer":
      return Ms(mr && Buffer.isBuffer(e) ? e.toString("binary") : Oa(e), r);
    case "array":
      return Ms(Dn(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function Ms(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = $f(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(o, u) {
    n && (f = a["!data"][u] = []);
    for (var h = /\\[\w\-]+\b/g, v = 0, d, x = -1, _ = []; (d = h.exec(o)) != null; ) {
      var y = o.slice(v, h.lastIndex - d[0].length);
      switch (y.charCodeAt(0) == 32 && (y = y.slice(1)), y.length && _.push(y), d[0]) {
        case "\\cell":
          if (++x, _.length) {
            var m = { v: _.join(""), t: "s" };
            m.v == "TRUE" || m.v == "FALSE" ? (m.v = m.v == "TRUE", m.t = "b") : isNaN(Qt(m.v)) ? _t[m.v] != null && (m.t = "e", m.w = m.v, m.v = _t[m.v]) : (m.t = "n", t.cellText !== false && (m.w = m.v), m.v = Qt(m.v)), n ? f[x] = m : a[yr({ r: u, c: x })] = m;
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
  var t = xn(Em(e, r), r);
  return t.bookType = "rtf", t;
}
function Sm(e, r) {
  var t = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) return t[0] + "}";
  for (var a = Dr(e["!ref"]), n, i = e["!data"] != null, s = [], f = a.s.r; f <= a.e.r; ++f) {
    t.push("\\trowd\\trautofit1");
    for (var o = a.s.c; o <= a.e.c; ++o) t.push("\\cellx" + (o + 1));
    for (t.push("\\pard\\intbl"), i && (s = e["!data"][f] || []), o = a.s.c; o <= a.e.c; ++o) {
      var u = yr({ r: f, c: o });
      if (n = i ? s[o] : e[u], !n || n.v == null && (!n.f || n.F)) {
        t.push(" \\cell");
        continue;
      }
      t.push(" " + (n.w || (ja(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function bm(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function $i(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function Fm(e) {
  var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), i = Math.min(r, t, a), s = n - i;
  if (s === 0) return [0, 0, r];
  var f = 0, o = 0, u = n + i;
  switch (o = s / (u > 1 ? 2 - u : u), n) {
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
  return [f / 6, o, u / 2];
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
  for (var u = 0; u != 3; ++u) s[u] = Math.round(s[u] * 255);
  return s;
}
function s0(e, r) {
  if (r === 0) return e;
  var t = Fm(bm(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), $i(Am(t));
}
var Wl = 6, Cm = 15, Im = 1, Ot = Wl;
function qi(e) {
  return Math.floor((e + Math.round(128 / Ot) / 256) * Ot);
}
function Yi(e) {
  return Math.floor((e - 5) / Ot * 100 + 0.5) / 100;
}
function f0(e) {
  return Math.round((e * Ot + 5) / Ot * 256) / 256;
}
function of(e) {
  return f0(Yi(qi(e)));
}
function ho(e) {
  var r = Math.abs(e - of(e)), t = Ot;
  if (r > 5e-3) for (Ot = Im; Ot < Cm; ++Ot) Math.abs(e - of(e)) <= r && (r = Math.abs(e - of(e)), t = Ot);
  Ot = t;
}
function cn(e) {
  e.width ? (e.wpx = qi(e.width), e.wch = Yi(e.wpx), e.MDW = Ot) : e.wpx ? (e.wch = Yi(e.wpx), e.width = f0(e.wch), e.MDW = Ot) : typeof e.wch == "number" && (e.width = f0(e.wch), e.wpx = qi(e.width), e.MDW = Ot), e.customWidth && delete e.customWidth;
}
var Dm = 96, Hl = Dm;
function Zi(e) {
  return e * 96 / Hl;
}
function oi(e) {
  return e * Hl / 96;
}
var Om = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function Nm(e, r, t, a) {
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
function Pm(e, r, t, a) {
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
        f.codepage = Hf[parseInt(f.val, 10)];
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
  for (var a = Gr(nr), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = nr[a[n]];
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
          var f = Ar(Br(s.formatCode)), o = parseInt(s.numFmtId, 10);
          if (r.NumberFmt[o] = f, o > 0) {
            if (o > 392) {
              for (o = 392; o > 60 && r.NumberFmt[o] != null; --o) ;
              r.NumberFmt[o] = f;
            }
            fn(f, o);
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
var Us = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Ws = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Mm(e, r, t) {
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
        for (a = s, delete a[0], f = 0; f < Us.length; ++f) a[Us[f]] && (a[Us[f]] = parseInt(a[Us[f]], 10));
        for (f = 0; f < Ws.length; ++f) a[Ws[f]] && (a[Ws[f]] = Pr(a[Ws[f]]));
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
    t = zf(ns(t, "<!--", "-->"));
    var s;
    return (s = gt(t, "numFmts")) && Bm(s[0], i, n), (s = gt(t, "fonts")) && Pm(s[0], i, a, n), (s = gt(t, "fills")) && Rm(s[0], i, a, n), (s = gt(t, "borders")) && Nm(s[0], i, a, n), (s = gt(t, "cellXfs")) && Mm(s[0], i, n), i;
  };
})();
function Hm(e, r) {
  var t = [at, Ae("styleSheet", null, { xmlns: Bn[0], "xmlns:vt": ut.vt })], a;
  return e.SSF && (a = Lm(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Um(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Vm(e, r) {
  var t = e.read_shift(2), a = Bt(e);
  return [t, a];
}
function Xm(e, r, t) {
  t || (t = oe(6 + 4 * r.length)), t.write_shift(2, e), lt(r, t);
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
  return a.name = Bt(e), a;
}
function jm(e, r) {
  r || (r = oe(153)), r.write_shift(2, e.sz * 20), vx(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), a0(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), lt(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var Gm = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"], cf, zm = Lt;
function qc(e, r) {
  r || (r = oe(84)), cf || (cf = u0(Gm));
  var t = cf[e.patternType];
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
function Vl(e, r, t) {
  t || (t = oe(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function Ti(e, r) {
  return r || (r = oe(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var qm = Lt;
function Ym(e, r) {
  return r || (r = oe(51)), r.write_shift(1, 0), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Zm(e, r) {
  return r || (r = oe(52)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), Gi(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Jm(e, r, t) {
  var a = oe(2052);
  return a.write_shift(4, e), Gi(r, a), Gi(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function Qm(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in nr) a.NumberFmt[n] = nr[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = false;
  return za(e, function(o, u, h) {
    switch (h) {
      case 44:
        a.NumberFmt[o[0]] = o[1], fn(o[1], o[0]);
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
        if (u.T > 0) i.push(h);
        else if (u.T < 0) i.pop();
        else if (!s || t.WTF && i[i.length - 1] != 37) throw new Error("Unexpected record 0x" + h.toString(16));
    }
  }), a;
}
function eg(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (ve(e, 615, ga(t)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ve(e, 44, Xm(n, r[n]));
    }), ve(e, 616));
  }
}
function rg(e) {
  var r = 1;
  ve(e, 611, ga(r)), ve(e, 43, jm({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), ve(e, 612);
}
function tg(e) {
  var r = 2;
  ve(e, 603, ga(r)), ve(e, 45, qc({ patternType: "none" })), ve(e, 45, qc({ patternType: "gray125" })), ve(e, 604);
}
function ag(e) {
  var r = 1;
  ve(e, 613, ga(r)), ve(e, 46, Ym()), ve(e, 614);
}
function ng(e) {
  var r = 1;
  ve(e, 626, ga(r)), ve(e, 47, Vl({ numFmtId: 0 }, 65535)), ve(e, 627);
}
function ig(e, r) {
  ve(e, 617, ga(r.length)), r.forEach(function(t) {
    ve(e, 47, Vl(t, 0));
  }), ve(e, 618);
}
function sg(e) {
  var r = 1;
  ve(e, 619, ga(r)), ve(e, 48, Zm({ xfId: 0, name: "Normal" })), ve(e, 620);
}
function fg(e) {
  var r = 0;
  ve(e, 505, ga(r)), ve(e, 506);
}
function og(e) {
  var r = 0;
  ve(e, 508, Jm(r, "TableStyleMedium9", "PivotStyleMedium4")), ve(e, 509);
}
function cg(e, r) {
  var t = Pt();
  return ve(t, 278), eg(t, e.SSF), rg(t), tg(t), ag(t), ng(t), ig(t, r.cellXfs), sg(t), fg(t), og(t), ve(t, 279), t.end();
}
var ug = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function lg(e, r, t) {
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
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[ug.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
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
  if (lg(a, r, t), !(a = Tn(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = Tn(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Xl(e, r) {
  (!e || e.length === 0) && (e = xo());
  var t, a = {};
  if (!(t = Tn(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return hg(t[0], a, r), a.raw = e, a;
}
function xo(e, r) {
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
      s = Mu(i, { type: "array" });
    } catch {
      return;
    }
    var f = Xt(s, "theme/theme/theme1.xml", true);
    if (f) return Xl(f, t);
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
      r.xclrValue = Tl(e);
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
  return Lt(e, r);
}
function mg(e, r) {
  return Lt(e, r);
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
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Bt(e) };
}
function kg(e) {
  var r = oe(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), lt(e.name, r), r.slice(0, r.l);
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
  return t.write_shift(4, e), lt(r, t), t.slice(0, t.l);
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
  return za(e, function(o, u, h) {
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
        if (!u.T) {
          if (!s || n.WTF && i[i.length - 1] != 35) throw new Error("Unexpected record 0x" + h.toString(16));
        }
    }
  }), a;
}
function Cg() {
  var e = Pt();
  return ve(e, 332), ve(e, 334, ga(1)), ve(e, 335, kg({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), ve(e, 336), ve(e, 339, Sg(1, "XLDAPR")), ve(e, 52), ve(e, 35, ga(514)), ve(e, 4096, ga(0)), ve(e, 4097, oa(1)), ve(e, 36), ve(e, 53), ve(e, 340), ve(e, 337, Fg(1)), ve(e, 51, Tg([[1, 0]])), ve(e, 338), ve(e, 333), e.end();
}
function Ig(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = false, i = 2, s;
  return e.replace(Et, function(f) {
    var o = Ye(f);
    switch (la(o[0])) {
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
        for (var u = 0; u < a.Types.length; ++u) a.Types[u].name == o.name && (s = a.Types[u]);
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
function Pg(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = false;
  za(e, function(f, o, u) {
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
        if (!o.T) {
          if (!i || n.WTF) throw new Error("Unexpected record 0x" + u.toString(16));
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
  (Pu(e, "shape") || []).forEach(function(n) {
    var i = "", s = true, f = -1, o = -1, u = -1;
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
          o = +n.slice(f, d).trim();
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
      var h = ts(r, o >= 0 && u >= 0 ? yr({ r: o, c: u }) : t[a].ref);
      h.c && (h.c.hidden = s), ++a;
    }
  });
}
function Kl(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [Ae("xml", null, { "xmlns:v": Zt.v, "xmlns:o": Zt.o, "xmlns:x": Zt.x, "xmlns:mv": Zt.mv }).replace(/\/>/, ">"), Ae("o:shapelayout", Ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(Ae("v:shapetype", [Ae("v:stroke", null, { joinstyle: "miter" }), Ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(o) {
    ++s, i.push(Mg(o, s));
  }), i.push("</xml>"), i.join("");
}
function Mg(e, r, t) {
  var a = Lr(e[0]), n = { color2: "#BEFF82", type: "gradient" };
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? Ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = Ae("v:fill", i, n), f = { on: "t", obscured: "t" };
  return ["<v:shape" + Xi({ id: "_x0000_s" + r, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", s, Ae("v:shadow", null, f), Ae("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", kt("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), kt("x:AutoFill", "False"), kt("x:Row", String(a.r)), kt("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function Yc(e, r, t, a) {
  var n = e["!data"] != null, i;
  r.forEach(function(s) {
    var f = Lr(s.ref);
    if (!(f.r < 0 || f.c < 0)) {
      if (n ? (e["!data"][f.r] || (e["!data"][f.r] = []), i = e["!data"][f.r][f.c]) : i = e[s.ref], !i) {
        i = { t: "z" }, n ? e["!data"][f.r][f.c] = i : e[s.ref] = i;
        var o = Dr(e["!ref"] || "BDWGO1000001:A1");
        o.s.r > f.r && (o.s.r = f.r), o.e.r < f.r && (o.e.r = f.r), o.s.c > f.c && (o.s.c = f.c), o.e.c < f.c && (o.e.c = f.c);
        var u = xr(o);
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
        var o = Ye(f[0]), u = { author: o.authorId && t[o.authorId] || "sheetjsghost", ref: o.ref, guid: o.guid }, h = Lr(o.ref);
        if (!(r.sheetRows && r.sheetRows <= h.r)) {
          var v = gt(s, "text"), d = !!v && !!v[1] && uo(v[1]) || { r: "", t: "", h: "" };
          u.r = d.r, d.r == "<t></t>" && (d.t = d.h = ""), u.t = (d.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (u.h = d.h), a.push(u);
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
    if (a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), a[1].forEach(function(u) {
      u.a && (n = t.indexOf(vr(u.a))), u.T && ++s, i.push(u.t == null ? "" : vr(u.t));
    }), s === 0) a[1].forEach(function(u) {
      r.push('<comment ref="' + a[0] + '" authorId="' + t.indexOf(vr(u.a)) + '"><text>'), r.push(kt("t", u.t == null ? "" : vr(u.t))), r.push("</text></comment>");
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
        if (!a && r.WTF) throw new Error("unrecognized " + u[0] + " in threaded comments");
    }
    return f;
  }), t;
}
function jl(e, r, t) {
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
function Gl(e) {
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
  return r == null && (r = oe(36)), r.write_shift(4, e[1].iauthor), li(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var jg = Bt;
function Zc(e) {
  return lt(e.slice(0, 54));
}
function Gg(e, r) {
  var t = [], a = [], n = {}, i = false;
  return za(e, function(f, o, u) {
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
        if (!o.T) {
          if (!i || r.WTF) throw new Error("Unexpected record 0x" + u.toString(16));
        }
    }
  }), t;
}
function zg(e) {
  var r = Pt(), t = [];
  return ve(r, 628), ve(r, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), ve(r, 632, Zc(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), ve(r, 632, Zc("tc=" + n.ID))));
    });
  }), ve(r, 631), ve(r, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: Lr(a[0]), e: Lr(a[0]) };
      ve(r, 635, Kg([s, n])), n.t && n.t.length > 0 && ve(r, 637, ux(n)), ve(r, 636), delete n.iauthor;
    });
  }), ve(r, 634), ve(r, 629), r.end();
}
var $g = "application/vnd.ms-office.vbaProject";
function qg(e) {
  var r = ir.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      ir.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), ir.write(r);
}
function Yg(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && ir.utils.cfb_add(e, n, r.FileIndex[a].content);
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
    var u = i.length > 0 ? parseInt(i, 10) | 0 : 0, h = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? h += r.c : --h, o ? u += r.r : --u, n + (f ? "" : "$") + gr(h) + (o ? "" : "$") + Fr(u);
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
      var u = to(s) - (i ? 0 : t.c), h = ro(o) - (f ? 0 : t.r), v = f == "$" ? h + 1 : h == 0 ? "" : "[" + h + "]", d = i == "$" ? u + 1 : u == 0 ? "" : "[" + u + "]";
      return n + "R" + v + "C" + d;
    });
  };
})();
function zl(e, r) {
  return e.replace(m0, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : gr(to(i) + r.c)) + (s == "$" ? s + f : Fr(ro(f) + r.r));
  });
}
function Jc(e, r, t) {
  var a = wt(r), n = a.s, i = Lr(t), s = { r: i.r - n.r, c: i.c - n.c };
  return zl(e, s);
}
function t2(e) {
  return e.length != 1;
}
function Qc(e) {
  return e.replace(/_xlfn\./g, "");
}
function st(e) {
  e.l += 1;
}
function un(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function $l(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return ql(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = un(e), f = un(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function ql(e) {
  var r = un(e), t = un(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function a2(e, r, t) {
  if (t.biff < 8) return ql(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = un(e), s = un(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function Yl(e, r, t) {
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
  var a = (e[e.l++] & 96) >> 5, n = $l(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
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
  var s = $l(e, i, t);
  return [a, n, s];
}
function u2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
}
function l2(e, r, t) {
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
function eu(e) {
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
function Zl(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function _2(e) {
  return e.read_shift(2), Zl(e);
}
function w2(e) {
  return e.read_shift(2), Zl(e);
}
function y2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Yl(e, 0, t);
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
  var i = Yl(e, 0, t);
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
  return e.l++, ht[e.read_shift(1)];
}
function I2(e) {
  return e.l++, e.read_shift(2);
}
function D2(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function O2(e) {
  return e.l++, Nt(e);
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
      t[1] = ht[e[e.l]], e.l += r == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Nt(e);
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
var K2 = Lt, j2 = Lt, G2 = Lt;
function os(e, r, t) {
  return e.l += 2, [i2(e)];
}
function po(e) {
  return e.l += 6, [];
}
var z2 = os, $2 = po, q2 = po, Y2 = os;
function Jl(e) {
  return e.l += 2, [Zr(e), e.read_shift(2) & 1];
}
var Z2 = os, J2 = Jl, Q2 = po, e_ = os, r_ = os, t_ = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
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
var ru = { 1: { n: "PtgExp", f: A2 }, 2: { n: "PtgTbl", f: G2 }, 3: { n: "PtgAdd", f: st }, 4: { n: "PtgSub", f: st }, 5: { n: "PtgMul", f: st }, 6: { n: "PtgDiv", f: st }, 7: { n: "PtgPower", f: st }, 8: { n: "PtgConcat", f: st }, 9: { n: "PtgLt", f: st }, 10: { n: "PtgLe", f: st }, 11: { n: "PtgEq", f: st }, 12: { n: "PtgGe", f: st }, 13: { n: "PtgGt", f: st }, 14: { n: "PtgNe", f: st }, 15: { n: "PtgIsect", f: st }, 16: { n: "PtgUnion", f: st }, 17: { n: "PtgRange", f: st }, 18: { n: "PtgUplus", f: st }, 19: { n: "PtgUminus", f: st }, 20: { n: "PtgPercent", f: st }, 21: { n: "PtgParen", f: st }, 22: { n: "PtgMissArg", f: st }, 23: { n: "PtgStr", f: N2 }, 26: { n: "PtgSheet", f: i_ }, 27: { n: "PtgEndSheet", f: s_ }, 28: { n: "PtgErr", f: C2 }, 29: { n: "PtgBool", f: D2 }, 30: { n: "PtgInt", f: I2 }, 31: { n: "PtgNum", f: O2 }, 32: { n: "PtgArray", f: d2 }, 33: { n: "PtgFunc", f: T2 }, 34: { n: "PtgFuncVar", f: S2 }, 35: { n: "PtgName", f: L2 }, 36: { n: "PtgRef", f: y2 }, 37: { n: "PtgArea", f: o2 }, 38: { n: "PtgMemArea", f: W2 }, 39: { n: "PtgMemErr", f: K2 }, 40: { n: "PtgMemNoMem", f: j2 }, 41: { n: "PtgMemFunc", f: H2 }, 42: { n: "PtgRefErr", f: V2 }, 43: { n: "PtgAreaErr", f: u2 }, 44: { n: "PtgRefN", f: k2 }, 45: { n: "PtgAreaN", f: h2 }, 46: { n: "PtgMemAreaN", f: f_ }, 47: { n: "PtgMemNoMemN", f: o_ }, 57: { n: "PtgNameX", f: M2 }, 58: { n: "PtgRef3d", f: E2 }, 59: { n: "PtgArea3d", f: c2 }, 60: { n: "PtgRefErr3d", f: X2 }, 61: { n: "PtgAreaErr3d", f: l2 }, 255: {} }, u_ = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, l_ = { 1: { n: "PtgElfLel", f: Jl }, 2: { n: "PtgElfRw", f: e_ }, 3: { n: "PtgElfCol", f: z2 }, 6: { n: "PtgElfRwV", f: r_ }, 7: { n: "PtgElfColV", f: Y2 }, 10: { n: "PtgElfRadical", f: Z2 }, 11: { n: "PtgElfRadicalS", f: Q2 }, 13: { n: "PtgElfColS", f: $2 }, 15: { n: "PtgElfColSV", f: q2 }, 16: { n: "PtgElfRadicalLel", f: J2 }, 25: { n: "PtgList", f: a_ }, 29: { n: "PtgSxName", f: n_ }, 255: {} }, h_ = { 0: { n: "PtgAttrNoop", f: c_ }, 1: { n: "PtgAttrSemi", f: g2 }, 2: { n: "PtgAttrIf", f: v2 }, 4: { n: "PtgAttrChoose", f: x2 }, 8: { n: "PtgAttrGoto", f: p2 }, 16: { n: "PtgAttrSum", f: F2 }, 32: { n: "PtgAttrBaxcel", f: eu }, 33: { n: "PtgAttrBaxcel", f: eu }, 64: { n: "PtgAttrSpace", f: _2 }, 65: { n: "PtgAttrSpaceSemi", f: w2 }, 128: { n: "PtgAttrIfError", f: m2 }, 255: {} };
function cs(e, r, t, a) {
  if (a.biff < 8) return Lt(e, r);
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
  return r = n - e.l, r !== 0 && i.push(Lt(e, r)), i;
}
function us(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; ) r = a - e.l, i = e[e.l], n = ru[i] || ru[u_[i]], (i === 24 || i === 25) && (n = (i === 24 ? l_ : h_)[e[e.l + 1]]), !n || !n.f ? Lt(e, r) : s.push([n.n, n.f(e, r, t)]);
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
function Ql(e, r, t) {
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
function tu(e, r, t) {
  var a = Ql(e, r, t);
  return a == "#REF" ? a : ji(a, t);
}
function Dt(e, r, t, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 } }, f = [], o, u, h, v = 0, d = 0, x, _ = "";
  if (!e[0] || !e[0][0]) return "";
  for (var y = -1, m = "", g = 0, T = e[0].length; g < T; ++g) {
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
        if (o = f.pop(), u = f.pop(), y >= 0) {
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
          u = u + m, y = -1;
        }
        f.push(u + x_[E[0]] + o);
        break;
      case "PtgIsect":
        o = f.pop(), u = f.pop(), f.push(u + " " + o);
        break;
      case "PtgUnion":
        o = f.pop(), u = f.pop(), f.push(u + "," + o);
        break;
      case "PtgRange":
        o = f.pop(), u = f.pop(), f.push(p_(u, o));
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
        h = Di(E[1][1], s, n), f.push(Oi(h, i));
        break;
      case "PtgRefN":
        h = t ? Di(E[1][1], t, n) : E[1][1], f.push(Oi(h, i));
        break;
      case "PtgRef3d":
        v = E[1][1], h = Di(E[1][2], s, n), _ = tu(a, v, n), f.push(_ + "!" + Oi(h, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var A = E[1][0], X = E[1][1];
        A || (A = 0), A &= 127;
        var z = A == 0 ? [] : f.slice(-A);
        f.length -= A, X === "User" && (X = z.shift()), f.push(X + "(" + z.join(",") + ")");
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
        x = Cc(E[1][1], t ? { s: t } : s, n), f.push(tf(x, n));
        break;
      case "PtgArea":
        x = Cc(E[1][1], s, n), f.push(tf(x, n));
        break;
      case "PtgArea3d":
        v = E[1][1], x = E[1][2], _ = tu(a, v, n), f.push(_ + "!" + tf(x, n));
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
        var W;
        if (n.biff <= 5) D < 0 && (D = -D), a[D] && (W = a[D][d]);
        else {
          var K = "";
          if (((a[D] || [])[0] || [])[0] == 14849 || (((a[D] || [])[0] || [])[0] == 1025 ? a[D][d] && a[D][d].itab > 0 && (K = a.SheetNames[a[D][d].itab - 1] + "!") : K = a.SheetNames[d - 1] + "!"), a[D] && a[D][d]) K += a[D][d].Name;
          else if (a[0] && a[0][d]) K += a[0][d].Name;
          else {
            var ee = (Ql(a, D, n) || "").split(";;");
            ee[d - 1] ? K = ee[d - 1] : K += "SH33TJSERRX";
          }
          f.push(K);
          break;
        }
        W || (W = { Name: "SH33TJSERRY" }), f.push(W.Name);
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
          f.push(Dt(ze, s, me, a, n));
        } else {
          var ke = false;
          for (o = 0; o != a.arrayf.length; ++o) if (u = a.arrayf[o], !(h.c < u[0].s.c || h.c > u[0].e.c) && !(h.r < u[0].s.r || h.r > u[0].e.r)) {
            f.push(Dt(u[1], s, me, a, n)), ke = true;
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
  if (s == 65535) return [[], Lt(e, r - 2)];
  var f = us(e, s, t);
  return r !== s + n && (i = cs(e, r - s - n, f, t)), e.l = a, [f, i];
}
function m_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Lt(e, r - 2)];
  var f = us(e, s, t);
  return r !== s + n && (i = cs(e, r - s - n, f, t)), e.l = a, [f, i];
}
function g_(e, r, t, a) {
  var n = e.l + r, i = us(e, a, t), s;
  return n !== e.l && (s = cs(e, n - e.l, i, t)), [i, s];
}
function __(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = us(e, i, t);
  return i == 65535 ? [[], Lt(e, r - 2)] : (r !== i + 2 && (n = cs(e, a - i - 2, s, t)), [s, n]);
}
function w_(e) {
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
function y_(e) {
  if (e == null) {
    var r = oe(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return Nn(e);
  return Nn(0);
}
function uf(e, r, t) {
  var a = e.l + r, n = wa(e, 6, t), i = w_(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = m_(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function k_(e, r, t, a, n) {
  var i = Pn(r, t, n), s = y_(e.v), f = oe(6), o = 33;
  f.write_shift(2, o), f.write_shift(4, 0);
  for (var u = oe(e.bf.length), h = 0; h < e.bf.length; ++h) u[h] = e.bf[h];
  var v = rt([i, s, f, u]);
  return v;
}
function _0(e, r, t) {
  var a = e.read_shift(4), n = us(e, a, t), i = e.read_shift(4), s = i > 0 ? cs(e, i, n, t) : null;
  return [n, s];
}
var E_ = _0, w0 = _0, T_ = _0, S_ = _0;
function au(e) {
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
  if (typeof e == "number") return au(e);
  if (typeof e == "boolean") return F_(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return b_(+_t[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return C_(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return O_(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return R_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return I_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return N_(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return D_(e, r);
  if (/^".*"$/.test(e)) return A_(e);
  if (/^[+-]\d+$/.test(e)) return au(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var B_ = P_, L_ = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, eh = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, M_ = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function nu(e) {
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
function lf(e) {
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
var Pi = {}, ti = {}, Bi = typeof Map < "u";
function vo(e, r, t) {
  var a = 0, n = e.length;
  if (t) {
    if (Bi ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var i = Bi ? t.get(r) : t[r]; a < i.length; ++a) if (e[i[a]].t === r) return e.Count++, i[a];
    }
  } else for (; a < n; ++a) if (e[a].t === r) return e.Count++, a;
  return e[n] = { t: r }, e.Count++, e.Unique++, t && (Bi ? (t.has(r) || t.set(r, []), t.get(r).push(n)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n))), n;
}
function y0(e, r) {
  var t = { min: e + 1, max: e + 1 }, a = -1;
  return r.MDW && (Ot = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = Yi(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = f0(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = true), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function Cn(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function pn(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      fn(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = { numFmtId: a, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, i;
}
function th(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = nr[r]);
  } catch (o) {
    if (a.WTF) throw o;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = $r(e.v)), (!a || a.cellText !== false) && e.t !== "z") try {
      if (nr[r] == null && fn(ud[r] || "General", r), e.t === "e") e.w = e.w || ht[e.v];
      else if (r === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v);
      else if (e.t === "d") {
        var f = Yr(e.v, !!s);
        (f | 0) === f ? e.w = f.toString(10) : e.w = Hi(f);
      } else {
        if (e.v === void 0) return "";
        e.w = In(e.v, ti);
      }
      else e.t === "d" ? e.w = ra(r, Yr(e.v, !!s), ti) : e.w = ra(r, e.v, ti);
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
  var o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = "", h = "", v = gt(e, "sheetData");
  v ? (u = e.slice(0, v.index), h = e.slice(v.index + v[0].length)) : u = h = e;
  var d = u.match(ah);
  d ? mo(d[0], f, n, t) : (d = gt(u, "sheetPr")) && Y_(d[0], d[1] || "", f, n, t);
  var x = (u.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (x > 0) {
    var _ = u.slice(x, x + 50).match(K_);
    _ && !(r && r.nodim) && H_(f, _[1]);
  }
  var y = gt(u, "sheetViews");
  y && y[1] && cw(y[1], n);
  var m = [];
  if (r.cellStyles) {
    var g = u.match(j_);
    g && nw(m, g);
  }
  v && hw(v[1], f, r, o, i, s, n);
  var T = h.match(G_);
  T && (f["!autofilter"] = sw(T[0]));
  var E = [], A = h.match(V_);
  if (A) for (x = 0; x != A.length; ++x) E[x] = Dr(A[x].slice(A[x].indexOf("=") + 2));
  var X = h.match(X_);
  X && rw(f, X, a);
  var z = h.match(z_);
  z && (f["!margins"] = tw(Ye(z[0])));
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
function mo(e, r, t, a) {
  var n = Ye(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Ar(Br(n.codeName)));
}
function Y_(e, r, t, a, n) {
  mo(e.slice(0, e.indexOf(">")), t, a, n);
}
function Z_(e, r, t, a, n) {
  var i = false, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var o = r.SheetNames[t];
    try {
      r.Workbook && (o = r.Workbook.Sheets[t].CodeName || o);
    } catch {
    }
    i = true, s.codeName = Da(vr(o));
  }
  if (e && e["!outline"]) {
    var u = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (u.summaryBelow = 0), e["!outline"].left && (u.summaryRight = 0), f = (f || "") + Ae("outlinePr", null, u);
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
  }), e.password && (r.password = lo(e.password).toString(16).toUpperCase()), Ae("sheetProtection", null, r);
}
function rw(e, r, t) {
  for (var a = e["!data"] != null, n = 0; n != r.length; ++n) {
    var i = Ye(Br(r[n]), true);
    if (!i.ref) return;
    var s = ((t || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Ar(i.location))) : (i.Target = "#" + Ar(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Dr(i.ref), o = f.s.r; o <= f.e.r; ++o) for (var u = f.s.c; u <= f.e.c; ++u) {
      var h = gr(u) + Fr(o);
      a ? (e["!data"][o] || (e["!data"][o] = []), e["!data"][o][u] || (e["!data"][o][u] = { t: "z", v: void 0 }), e["!data"][o][u].l = i) : (e[h] || (e[h] = { t: "z", v: void 0 }), e[h].l = i);
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
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = true, ho(n.width)), cn(n); i <= s; ) e[i++] = Vr(n);
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
      o.Ref = ji(t.SheetNames[a]) + "!" + Ki(n);
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
function uw(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), Ae("sheetViews", Ae("sheetView", null, n), {});
}
function lw(e, r, t, a, n, i, s) {
  if (e.c && t["!comments"].push([r, e.c]), (e.v === void 0 || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var f = "", o = e.t, u = e.v;
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
        var h = $r(e.v, s);
        f = h.toISOString(), h.getUTCFullYear() < 1900 && (f = f.slice(f.indexOf("T") + 1).replace("Z", ""));
      } else e = Vr(e), e.t = "n", f = "" + (e.v = Yr($r(e.v, s), s));
      typeof e.z > "u" && (e.z = nr[14]);
      break;
    default:
      f = e.v;
      break;
  }
  var v = e.t == "z" || e.v == null ? "" : kt("v", vr(f)), d = { r }, x = pn(a.cellXfs, e, a);
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
        v = kt("v", "" + vo(a.Strings, e.v, a.revStrings)), d.t = "s";
        break;
      } else d.t = "str";
      break;
  }
  if (e.t != o && (e.t = o, e.v = u), typeof e.f == "string" && e.f) {
    var _ = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    v = Ae("f", vr(e.f), _) + (e.v != null ? v : "");
  }
  return e.l && (e.l.display = vr(f), t["!links"].push([r, e.l])), e.D && (d.cm = 1), Ae("c", v, d);
}
var hw = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, o, u, h, v) {
    for (var d = 0, x = "", _ = [], y = [], m = 0, g = 0, T = 0, E = "", A, X, z = 0, F = 0, U, D, W = 0, K = 0, ee = Array.isArray(h.CellXf), de, Pe = [], me = [], ze = s["!data"] != null, ke = [], Be = {}, Qe = false, he = !!f.sheetStubs, fr = !!((v || {}).WBProps || {}).date1904, Me = i.split(r), Te = 0, ye = Me.length; Te != ye; ++Te) {
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
              if (X = Ye(x.slice(Ge, d), true), z = X.r != null ? parseInt(X.r, 10) : z + 1, F = -1, f.sheetRows && f.sheetRows < z) continue;
              Be = {}, Qe = false, X.ht && (Qe = true, Be.hpt = parseFloat(X.ht), Be.hpx = oi(Be.hpt)), X.hidden && Pr(X.hidden) && (Qe = true, Be.hidden = true), X.outlineLevel != null && (Qe = true, Be.level = +X.outlineLevel), Qe && (ke[z - 1] = Be);
            }
            break;
          case "<":
            Ge = d;
            break;
        }
        if (Ge >= d) break;
        if (X = Ye(x.slice(Ge, d), true), z = X.r != null ? parseInt(X.r, 10) : z + 1, F = -1, !(f.sheetRows && f.sheetRows < z)) {
          f.nodim || (o.s.r > z - 1 && (o.s.r = z - 1), o.e.r < z - 1 && (o.e.r = z - 1)), f && f.cellStyles && (Be = {}, Qe = false, X.ht && (Qe = true, Be.hpt = parseFloat(X.ht), Be.hpx = oi(Be.hpt)), X.hidden && Pr(X.hidden) && (Qe = true, Be.hidden = true), X.outlineLevel != null && (Qe = true, Be.level = +X.outlineLevel), Qe && (ke[z - 1] = Be)), _ = x.slice(d).split(e);
          for (var Ze = 0; Ze != _.length && _[Ze].trim().charAt(0) == "<"; ++Ze) ;
          for (_ = _.slice(Ze), d = 0; d != _.length; ++d) if (x = _[d].trim(), x.length !== 0) {
            if (y = x.match(t), m = d, g = 0, T = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, y != null && y.length === 2) {
              for (m = 0, E = y[1], g = 0; g != E.length && !((T = E.charCodeAt(g) - 64) < 1 || T > 26); ++g) m = 26 * m + T;
              --m, F = m;
            } else ++F;
            for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g) ;
            if (++g, X = Ye(x.slice(0, g), true), X.r || (X.r = yr({ r: z - 1, c: F })), E = x.slice(g), A = { t: "" }, (y = gt(E, "v")) != null && y[1] !== "" && (A.v = Ar(y[1])), f.cellFormula) {
              if ((y = gt(E, "f")) != null) {
                if (y[1] == "") y[0].indexOf('t="shared"') > -1 && (D = Ye(y[0]), me[D.si] && (A.f = Jc(me[D.si][1], me[D.si][2], X.r)));
                else if (A.f = Ar(Br(y[1]), true), f.xlfn || (A.f = Qc(A.f)), y[0].indexOf('t="array"') > -1) A.F = (E.match(a) || [])[1], A.F.indexOf(":") > -1 && Pe.push([Dr(A.F), A.F]);
                else if (y[0].indexOf('t="shared"') > -1) {
                  D = Ye(y[0]);
                  var P = Ar(Br(y[1]));
                  f.xlfn || (P = Qc(P)), me[parseInt(D.si, 10)] = [D, P, X.r];
                }
              } else (y = E.match(/<f[^<>]*\/>/)) && (D = Ye(y[0]), me[D.si] && (A.f = Jc(me[D.si][1], me[D.si][2], X.r)));
              var M = Lr(X.r);
              for (g = 0; g < Pe.length; ++g) M.r >= Pe[g][0].s.r && M.r <= Pe[g][0].e.r && M.c >= Pe[g][0].s.c && M.c <= Pe[g][0].e.c && (A.F = Pe[g][1]);
            }
            if (X.t == null && A.v === void 0) if (A.f || A.F) A.v = 0, A.t = "n";
            else if (he) A.t = "z";
            else continue;
            else A.t = X.t || "n";
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
                } else U = Pi[parseInt(A.v, 10)], A.v = U.t, A.r = U.r, f.cellHTML && (A.h = U.h);
                break;
              case "str":
                A.t = "s", A.v = A.v != null ? Ar(Br(A.v), true) : "", f.cellHTML && (A.h = Ci(A.v));
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
            if (W = K = 0, de = null, ee && X.s !== void 0 && (de = h.CellXf[X.s], de != null && (de.numFmtId != null && (W = de.numFmtId), f.cellStyles && de.fillId != null && (K = de.fillId))), th(A, W, K, f, u, h, fr), f.cellDates && ee && A.t == "n" && ua(nr[W]) && (A.v = Va(A.v + (fr ? 1462 : 0)), A.t = typeof A.v == "number" ? "n" : "d"), X.cm && f.xlmeta) {
              var G = (f.xlmeta.Cell || [])[+X.cm - 1];
              G && G.type == "XLDAPR" && (A.D = true);
            }
            var V;
            f.nodim && (V = Lr(X.r), o.s.r > V.r && (o.s.r = V.r), o.e.r < V.r && (o.e.r = V.r)), ze ? (V = Lr(X.r), s["!data"][V.r] || (s["!data"][V.r] = []), s["!data"][V.r][V.c] = A) : s[X.r] = A;
          }
        }
      }
    }
    ke.length > 0 && (s["!rows"] = ke);
  };
})();
function dw(e, r, t, a) {
  var n = [], i = [], s = Dr(e["!ref"]), f = "", o, u = "", h = [], v = 0, d = 0, x = e["!rows"], _ = e["!data"] != null, y = _ ? e["!data"] : [], m = { r: u }, g, T = -1, E = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (d = s.s.c; d <= s.e.c; ++d) h[d] = gr(d);
  for (v = s.s.r; v <= s.e.r; ++v) {
    i = [], u = Fr(v);
    var A = _ ? y[v] : [];
    for (d = s.s.c; d <= s.e.c; ++d) {
      o = h[d] + u;
      var X = _ ? A[d] : e[o];
      X !== void 0 && (f = lw(X, o, e, r, t, a, E)) != null && i.push(f);
    }
    (i.length > 0 || x && x[v]) && (m = { r: u }, x && x[v] && (g = x[v], g.hidden && (m.hidden = 1), T = -1, g.hpx ? T = Zi(g.hpx) : g.hpt && (T = g.hpt), T > -1 && (m.ht = T, m.customHeight = 1), g.level && (m.outlineLevel = g.level)), n[n.length] = Ae("row", i.join(""), m));
  }
  if (x) for (; v < x.length; ++v) x && x[v] && (m = { r: v + 1 }, g = x[v], g.hidden && (m.hidden = 1), T = -1, g.hpx ? T = Zi(g.hpx) : g.hpt && (T = g.hpt), T > -1 && (m.ht = T, m.customHeight = 1), g.level && (m.outlineLevel = g.level), n[n.length] = Ae("row", "", m));
  return n.join("");
}
function xw(e, r, t, a) {
  var n = [at, Ae("worksheet", null, { xmlns: Bn[0], "xmlns:r": ut.r })], i = t.SheetNames[e], s = 0, f = "", o = t.Sheets[i];
  o == null && (o = {});
  var u = o["!ref"] || "A1", h = Dr(u);
  if (h.e.c > 16383 || h.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + u + " exceeds format limit A1:XFD1048576");
    h.e.c = Math.min(h.e.c, 16383), h.e.r = Math.min(h.e.c, 1048575), u = xr(h);
  }
  a || (a = {}), o["!comments"] = [];
  var v = [];
  Z_(o, t, e, r, n), n[n.length] = Ae("dimension", null, { ref: u }), n[n.length] = uw(o, r, e, t), r.sheetFormat && (n[n.length] = Ae("sheetFormatPr", null, { defaultRowHeight: r.sheetFormat.defaultRowHeight || "16", baseColWidth: r.sheetFormat.baseColWidth || "10", outlineLevelRow: r.sheetFormat.outlineLevelRow || "7" })), o["!cols"] != null && o["!cols"].length > 0 && (n[n.length] = iw(o, o["!cols"])), n[s = n.length] = "<sheetData/>", o["!links"] = [], o["!ref"] != null && (f = dw(o, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), o["!protect"] && (n[n.length] = ew(o["!protect"])), o["!autofilter"] != null && (n[n.length] = fw(o["!autofilter"], o, t, e)), o["!merges"] != null && o["!merges"].length > 0 && (n[n.length] = q_(o["!merges"]));
  var d = -1, x, _ = -1;
  return o["!links"].length > 0 && (n[n.length] = "<hyperlinks>", o["!links"].forEach(function(y) {
    y[1].Target && (x = { ref: y[0] }, y[1].Target.charAt(0) != "#" && (_ = Rr(a, -1, vr(y[1].Target).replace(/#[\s\S]*$/, ""), wr.HLINK), x["r:id"] = "rId" + _), (d = y[1].Target.indexOf("#")) > -1 && (x.location = vr(y[1].Target.slice(d + 1))), y[1].Tooltip && (x.tooltip = vr(y[1].Tooltip)), x.display = y[1].display, n[n.length] = Ae("hyperlink", null, x));
  }), n[n.length] = "</hyperlinks>"), delete o["!links"], o["!margins"] != null && (n[n.length] = aw(o["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = kt("ignoredErrors", Ae("ignoredError", null, { numberStoredAsText: 1, sqref: u }))), v.length > 0 && (_ = Rr(a, -1, "../drawings/drawing" + (e + 1) + ".xml", wr.DRAW), n[n.length] = Ae("drawing", null, { "r:id": "rId" + _ }), o["!drawing"] = v), o["!comments"].length > 0 && (_ = Rr(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", wr.VML), n[n.length] = Ae("legacyDrawing", null, { "r:id": "rId" + _ }), o["!legacy"] = _), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
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
  n.hpx ? i = Zi(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, o = a.l;
  a.l += 4;
  for (var u = { r: e, c: 0 }, h = t["!data"] != null, v = 0; v < 16; ++v) if (!(r.s.c > v + 1 << 10 || r.e.c < v << 10)) {
    for (var d = -1, x = -1, _ = v << 10; _ < v + 1 << 10; ++_) {
      u.c = _;
      var y = h ? (t["!data"][u.r] || [])[u.c] : t[yr(u)];
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
var gw = Wn, _w = li;
function ww() {
}
function yw(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = lx(e), t;
}
function kw(e, r, t) {
  t == null && (t = oe(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return a0({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), nl(e, t), t.slice(0, t.l);
}
function Ew(e) {
  var r = ha(e);
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
  var r = ha(e), t = e.read_shift(1);
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
  var r = ha(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function hf(e, r, t) {
  return t == null && (t = oe(9)), Ln(r, t), t.write_shift(1, e.v), t;
}
function Ow(e) {
  var r = Mn(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function df(e, r, t) {
  return t == null && (t = oe(8)), Un(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function Nw(e) {
  var r = ha(e), t = e.read_shift(4);
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
  var r = ha(e), t = Nt(e);
  return [r, t, "n"];
}
function Mw(e, r, t) {
  return t == null && (t = oe(16)), Ln(r, t), Nn(e.v, t), t;
}
function nh(e) {
  var r = Mn(e), t = Nt(e);
  return [r, t, "n"];
}
function Uw(e, r, t) {
  return t == null && (t = oe(12)), Un(r, t), Nn(e.v, t), t;
}
function Ww(e) {
  var r = ha(e), t = p0(e);
  return [r, t, "n"];
}
function Hw(e, r, t) {
  return t == null && (t = oe(12)), Ln(r, t), il(e.v, t), t;
}
function Vw(e) {
  var r = Mn(e), t = p0(e);
  return [r, t, "n"];
}
function Xw(e, r, t) {
  return t == null && (t = oe(8)), Un(r, t), il(e.v, t), t;
}
function Kw(e) {
  var r = ha(e), t = ao(e);
  return [r, t, "is"];
}
function jw(e) {
  var r = ha(e), t = Bt(e);
  return [r, t, "str"];
}
function Gw(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(12 + 4 * e.v.length)), Ln(r, t), lt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function zw(e) {
  var r = Mn(e), t = Bt(e);
  return [r, t, "str"];
}
function $w(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(8 + 4 * a.length)), Un(r, t), lt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function qw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Yw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Zw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = Nt(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function Jw(e, r, t) {
  var a = e.l + r, n = ha(e);
  n.r = t["!row"];
  var i = Bt(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var Qw = Wn, ey = li;
function ry(e, r) {
  return r == null && (r = oe(4)), r.write_shift(4, e), r;
}
function ty(e, r) {
  var t = e.l + r, a = Wn(e), n = x0(e), i = Bt(e), s = Bt(e), f = Bt(e);
  e.l = t;
  var o = { rfx: a, relId: n, loc: i, display: f };
  return s && (o.Tooltip = s), o;
}
function ay(e, r) {
  var t = oe(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  li({ s: Lr(e[0]), e: Lr(e[0]) }, t), no("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return lt(n || "", t), lt(e[1].Tooltip || "", t), lt("", t), t.slice(0, t.l);
}
function ny() {
}
function iy(e, r, t) {
  var a = e.l + r, n = sl(e), i = e.read_shift(1), s = [n];
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
    r[t] = Nt(e);
  }), r;
}
function cy(e, r) {
  return r == null && (r = oe(48)), Cn(e), ih.forEach(function(t) {
    Nn(e[t], r);
  }), r;
}
function uy(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function ly(e, r, t) {
  t == null && (t = oe(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function hy(e) {
  var r = oe(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), li(e, r), r;
}
function dy(e, r) {
  return r == null && (r = oe(66)), r.write_shift(2, e.password ? lo(e.password) : 0), r.write_shift(4, 1), [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
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
  var u, h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, v = false, d = false, x, _, y, m, g, T, E, A, X, z = [];
  f.biff = 12, f["!row"] = 0;
  var F = 0, U = false, D = [], W = {}, K = f.supbooks || n.supbooks || [[]];
  if (K.sharedf = W, K.arrayf = D, K.SheetNames = n.SheetNames || n.Sheets.map(function(Qe) {
    return Qe.name;
  }), !f.supbooks && (f.supbooks = K, n.Names)) for (var ee = 0; ee < n.Names.length; ++ee) K[0][ee + 1] = n.Names[ee];
  var de = [], Pe = [], me = false;
  Ji[16] = { n: "BrtShortReal", f: nh };
  var ze, ke = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if (za(e, function(he, fr, Me) {
    if (!d) switch (Me) {
      case 148:
        u = he;
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
            E = Pi[he[1]], _.v = E.t, _.r = E.r;
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
        if ((y = s.CellXf[he[0].iStyleRef]) && th(_, y.numFmtId, null, f, i, s, ke > 0), g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] = _) : o[gr(g) + A] = _, f.cellFormula) {
          for (U = false, F = 0; F < D.length; ++F) {
            var Te = D[F];
            x.r >= Te[0].s.r && x.r <= Te[0].e.r && g >= Te[0].s.c && g <= Te[0].e.c && (_.F = xr(Te[0]), U = true);
          }
          !U && he.length > 3 && (_.f = he[3]);
        }
        if (h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), f.cellDates && y && _.t == "n" && ua(nr[y.numFmtId])) {
          var ye = La(_.v + ke);
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
        z.push(he);
        break;
      case 49:
        ze = ((f.xlmeta || {}).Cell || [])[he - 1];
        break;
      case 494:
        var je = a["!id"][he.relId];
        for (je ? (he.Target = je.Target, he.loc && (he.Target += "#" + he.loc), he.Rel = je) : he.relId == "" && (he.Target = "#" + he.loc), m = he.rfx.s.r; m <= he.rfx.e.r; ++m) for (g = he.rfx.s.c; g <= he.rfx.e.c; ++g) f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] || (o["!data"][m][g] = { t: "z", v: void 0 }), o["!data"][m][g].l = he) : (T = gr(g) + Fr(m), o[T] || (o[T] = { t: "z", v: void 0 }), o[T].l = he);
        break;
      case 426:
        if (!f.cellFormula) break;
        D.push(he), X = f.dense ? o["!data"][m][g] : o[gr(g) + A], X.f = Dt(he[1], h, { r: x.r, c: g }, K, f), X.F = xr(he[0]);
        break;
      case 427:
        if (!f.cellFormula) break;
        W[yr(he[0].s)] = he[1], X = f.dense ? o["!data"][m][g] : o[gr(g) + A], X.f = Dt(he[1], h, { r: x.r, c: g }, K, f);
        break;
      case 60:
        if (!f.cellStyles) break;
        for (; he.e >= he.s; ) de[he.e--] = { width: he.w / 256, hidden: !!(he.flags & 1), level: he.level }, me || (me = true, ho(he.w / 256)), cn(de[he.e + 1]);
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
  }, f), delete f.supbooks, delete f["!row"], !o["!ref"] && (h.s.r < 2e6 || u && (u.e.r > 0 || u.e.c > 0 || u.s.r > 0 || u.s.c > 0)) && (o["!ref"] = xr(u || h)), f.sheetRows && o["!ref"]) {
    var Be = Dr(o["!ref"]);
    f.sheetRows <= +Be.e.r && (Be.e.r = f.sheetRows - 1, Be.e.r > h.e.r && (Be.e.r = h.e.r), Be.e.r < Be.s.r && (Be.s.r = Be.e.r), Be.e.c > h.e.c && (Be.e.c = h.e.c), Be.e.c < Be.s.c && (Be.s.c = Be.e.c), o["!fullref"] = o["!ref"], o["!ref"] = xr(Be));
  }
  return z.length > 0 && (o["!merges"] = z), de.length > 0 && (o["!cols"] = de), Pe.length > 0 && (o["!rows"] = Pe), a["!id"][o["!legrel"]] && (o["!legdrawel"] = a["!id"][o["!legrel"]]), o;
}
function my(e, r, t, a, n, i, s, f) {
  var o = { r: t, c: a };
  if (r.c && i["!comments"].push([yr(o), r.c]), r.v === void 0) return false;
  var u = "";
  switch (r.t) {
    case "b":
      u = r.v ? "1" : "0";
      break;
    case "d":
      r = Vr(r), r.z = r.z || nr[14], r.v = Yr($r(r.v, f), f), r.t = "n";
      break;
    case "n":
    case "e":
      u = "" + r.v;
      break;
    default:
      u = r.v;
      break;
  }
  switch (o.s = pn(n.cellXfs, r, n), r.l && i["!links"].push([yr(o), r.l]), r.t) {
    case "s":
    case "str":
      return n.bookSST ? (u = vo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), o.t = "s", o.v = u, s ? ve(e, 18, Bw(r, o)) : ve(e, 7, Rw(r, o))) : (o.t = "str", s ? ve(e, 17, $w(r, o)) : ve(e, 6, Gw(r, o))), true;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? ve(e, 13, Xw(r, o)) : ve(e, 2, Hw(r, o)) : isFinite(r.v) ? s ? ve(e, 16, Uw(r, o)) : ve(e, 5, Mw(r, o)) : (o.t = "e", isNaN(r.v) ? s ? ve(e, 14, df({ v: 36 }, o)) : ve(e, 3, hf({ v: 36 }, o)) : s ? ve(e, 14, df({ v: 7 }, o)) : ve(e, 3, hf({ v: 7 }, o))), true;
    case "b":
      return o.t = "b", s ? ve(e, 15, Iw(r, o)) : ve(e, 4, Aw(r, o)), true;
    case "e":
      return o.t = "e", s ? ve(e, 14, df(r, o)) : ve(e, 3, hf(r, o)), true;
  }
  return s ? ve(e, 12, bw(r, o)) : ve(e, 1, Tw(r, o)), true;
}
function gy(e, r, t, a, n) {
  var i = Dr(r["!ref"] || "A1"), s = "", f = [], o = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  ve(e, 145);
  var u = r["!data"] != null, h = u ? r["!data"][i.s.r] : [], v = i.e.r;
  r["!rows"] && (v = Math.max(i.e.r, r["!rows"].length - 1));
  for (var d = i.s.r; d <= v; ++d) if (s = Fr(d), u && (h = r["!data"][d]), mw(e, r, i, d), !(u && !h)) {
    var x = false;
    if (d <= i.e.r) for (var _ = i.s.c; _ <= i.e.c; ++_) {
      d === i.s.r && (f[_] = gr(_));
      var y = u ? h[_] : r[f[_] + s];
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
    ve(e, 551, no("rId" + n)), r["!legacy"] = n;
  }
}
function Ty(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : xr(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = wt(i);
    f.s.r == f.e.r && (f.e.r = wt(r["!ref"]).e.r, i = xr(f));
    for (var o = 0; o < s.length; ++o) {
      var u = s[o];
      if (u.Name == "_xlnm._FilterDatabase" && u.Sheet == a) {
        u.Ref = ji(t.SheetNames[a]) + "!" + Ki(i);
        break;
      }
    }
    o == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: ji(t.SheetNames[a]) + "!" + Ki(i) }), ve(e, 161, li(Dr(i))), ve(e, 162);
  }
}
function Sy(e, r, t) {
  ve(e, 133), ve(e, 137, ly(r, t)), ve(e, 138), ve(e, 134);
}
function by(e, r) {
  r["!protect"] && ve(e, 535, dy(r["!protect"]));
}
function Fy(e, r, t, a) {
  var n = Pt(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
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
  return ($f(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function Cy(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, o = 0, u = "A", h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return ($f(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(v) {
    var d = Ay(v);
    h.s.r = h.s.c = 0, h.e.c = f, u = gr(f), d[0].forEach(function(x, _) {
      s["!data"] ? (s["!data"][_] || (s["!data"][_] = []), s["!data"][_][f] = { t: "n", v: x, z: d[1] }) : s[u + Fr(_)] = { t: "n", v: x, z: d[1] }, o = _;
    }), h.e.r < o && (h.e.r = o), ++f;
  }), f > 0 && (s["!ref"] = xr(h)), s;
}
function Iy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(ah);
  return f && mo(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function Dy(e, r) {
  e.l += 10;
  var t = Bt(e);
  return { name: t };
}
function Oy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = false;
  return za(e, function(o, u, h) {
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
        if (!(u.T > 0)) {
          if (!(u.T < 0)) {
            if (!s || r.WTF) throw new Error("Unexpected record 0x" + h.toString(16));
          }
        }
    }
  }, r), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var go = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], Ny = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], Ry = [], Py = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function iu(e, r) {
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
function su(e, r) {
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
  su(e.WBProps, go), su(e.CalcPr, Py), iu(e.WBView, Ny), iu(e.Sheets, Ry), ti.date1904 = Pr(e.WBProps.date1904);
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
      var f = ji(a) + "!" + Ki(i["!autofilter"].ref);
      s ? s.Ref = f : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: f });
    }
  });
}
var Wy = /<\w+:workbook/;
function Hy(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = false, n = "xmlns", i = {}, s = 0;
  if (e.replace(Et, function(o, u) {
    var h = Ye(o);
    switch (la(h[0])) {
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
        go.forEach(function(v) {
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
        i = {}, i.Name = Br(h.name), h.comment && (i.Comment = h.comment), h.localSheetId && (i.Sheet = +h.localSheetId), Pr(h.hidden || "0") && (i.Hidden = true), s = u + o.length;
        break;
      case "</definedName>":
        i.Ref = Ar(Br(e.slice(s, u))), t.Names.push(i);
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
  e.Workbook && e.Workbook.WBProps && (go.forEach(function(f) {
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
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Sf(e), t.name = Bt(e), t;
}
function Ky(e, r) {
  return r || (r = oe(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), no(e.strRelID, r), lt(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function jy(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Bt(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function Gy(e, r) {
  r || (r = oe(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), nl(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
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
  var u = { Name: s, Ptg: f, Flags: n };
  return i < 268435455 && (u.Sheet = i), o && (u.Comment = o), u;
}
function qy(e, r) {
  var t = oe(9), a = 0, n = e.Name;
  so.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [t, lt(n), B_(e.Ref, r)];
  if (e.Comment) i.push(Gi(e.Comment));
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
  return s.SheetNames = [], s.XTI = [], Ji[16] = { n: "BrtFRTArchID$", f: zy }, za(e, function(o, u, h) {
    switch (h) {
      case 156:
        s.SheetNames.push(o.name), t.Sheets.push(o);
        break;
      case 153:
        t.WBProps = o;
        break;
      case 39:
        o.Sheet != null && (r.SID = o.Sheet), o.Ref = o.Ptg ? Dt(o.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete o.Ptg, i.push(o);
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
        if (!u.T) {
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
  return lt("SheetJS", r), lt(Ys.version, r), lt(Ys.version, r), lt("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
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
  var t = Pt();
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
function uk(e, r, t, a) {
  return r.slice(-4) === ".bin" ? Qm(e, t, a) : Wm(e, t, a);
}
function lk(e, r, t) {
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
function da(e, r) {
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
var Li;
function mk(e, r, t) {
  var a = Li[e] || Ar(e);
  return a === "General" ? In(r) : ra(a, r, { date1904: !!t });
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
      e.t === "e" ? e.w = e.w || ht[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v) : e.w = In(e.v) : e.w = mk(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = Li[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && ua(n)) {
        var i = La(e.v + (a ? 1462 : 0));
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
function yk(e, r, t, a, n, i, s, f, o, u, h) {
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
      a.t = "b", a.v = Pr(e);
      break;
    case "String":
      a.t = "s", a.r = wc(Ar(e)), a.v = e.indexOf("<") > -1 ? Ar(r || e).replace(/<[^<>]*>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = Yr($r(e, h), h), a.v !== a.v && (a.v = Ar(e)), (!v || v == "General") && (v = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = _t[e], u.cellText !== false && (a.w = e);
      break;
    default:
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = wc(r || e));
      break;
  }
  if (_k(a, v, u, h), u.cellFormula !== false) if (a.Formula) {
    var g = Ar(a.Formula);
    g.charCodeAt(0) == 61 && (g = g.slice(1)), a.f = An(g, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = An("RC:RC", n) : a.ArrayRange && (a.F = An(a.ArrayRange, n), o.push([Dr(a.F), a.F]));
  } else for (y = 0; y < o.length; ++y) n.r >= o[y][0].s.r && n.r <= o[y][0].e.r && n.c >= o[y][0].s.c && n.c <= o[y][0].e.c && (a.F = o[y][1]);
  u.cellStyles && (_.forEach(function(T) {
    !x.patternType && T.patternType && (x.patternType = T.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function kk(e) {
  return so.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function Ek(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function xf(e, r) {
  var t = r || {};
  ci();
  var a = bi(d0(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") && (a = Br(a));
  var n = a.slice(0, 1024).toLowerCase(), i = false;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = Vr(t);
    return s.type = "string", fi.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(rr) {
    n.indexOf("<" + rr) >= 0 && (i = true);
  }), i) return c4(a, t);
  Li = { "General Number": "General", "General Date": nr[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": nr[15], "Short Date": nr[14], "Long Time": nr[19], "Medium Time": nr[18], "Short Time": nr[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: nr[2], Standard: nr[4], Percent: nr[10], Scientific: nr[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var f, o = [], u, h = {}, v = [], d = {}, x = "";
  t.dense && (d["!data"] = []);
  var _ = {}, y = {}, m = da('<Data ss:Type="String">'), g = 0, T = 0, E = 0, A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, X = {}, z = {}, F = "", U = 0, D = [], W = {}, K = {}, ee = 0, de = [], Pe = [], me = {}, ze = [], ke, Be = false, Qe = [], he = [], fr = {}, Me = 0, Te = 0, ye = { Sheets: [], WBProps: { date1904: false } }, je = {};
  ot.lastIndex = 0, a = ns(a, "<!--", "-->");
  for (var Ge = ""; f = ot.exec(a); ) switch (f[3] = (Ge = f[3]).toLowerCase()) {
    case "data":
      if (Ge == "data") {
        if (f[1] === "/") {
          if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
        break;
      }
      if (o[o.length - 1][1]) break;
      f[1] === "/" ? yk(a.slice(g, f.index), F, m, o[o.length - 1][0] == "comment" ? me : _, { c: T, r: E }, X, ze[T], y, Qe, t, ye.WBProps.date1904) : (F = "", m = da(f[0]), g = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/") if (Pe.length > 0 && (_.c = Pe), (!t.sheetRows || t.sheetRows > E) && _.v !== void 0 && (t.dense ? (d["!data"][E] || (d["!data"][E] = []), d["!data"][E][T] = _) : d[gr(T) + Fr(E)] = _), _.HRef && (_.l = { Target: Ar(_.HRef) }, _.HRefScreenTip && (_.l.Tooltip = _.HRefScreenTip), delete _.HRef, delete _.HRefScreenTip), (_.MergeAcross || _.MergeDown) && (Me = T + (parseInt(_.MergeAcross, 10) | 0), Te = E + (parseInt(_.MergeDown, 10) | 0), (Me > T || Te > E) && D.push({ s: { c: T, r: E }, e: { c: Me, r: Te } })), !t.sheetStubs) _.MergeAcross ? T = Me + 1 : ++T;
      else if (_.MergeAcross || _.MergeDown) {
        for (var Ze = T; Ze <= Me; ++Ze) for (var P = E; P <= Te; ++P) (Ze > T || P > E) && (t.dense ? (d["!data"][P] || (d["!data"][P] = []), d["!data"][P][Ze] = { t: "z" }) : d[gr(Ze) + Fr(P)] = { t: "z" });
        T = Me + 1;
      } else ++T;
      else _ = vk(f[0]), _.Index && (T = +_.Index - 1), T < A.s.c && (A.s.c = T), T > A.e.c && (A.e.c = T), f[0].slice(-2) === "/>" && ++T, Pe = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (E < A.s.r && (A.s.r = E), E > A.e.r && (A.e.r = E), f[0].slice(-2) === "/>" && (y = da(f[0]), y.Index && (E = +y.Index - 1)), T = 0, ++E) : (y = da(f[0]), y.Index && (E = +y.Index - 1), fr = {}, (y.AutoFitHeight == "0" || y.Height) && (fr.hpx = parseInt(y.Height, 10), fr.hpt = Zi(fr.hpx), he[E] = fr), y.Hidden == "1" && (fr.hidden = true, he[E] = fr));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        v.push(x), A.s.r <= A.e.r && A.s.c <= A.e.c && (d["!ref"] = xr(A), t.sheetRows && t.sheetRows <= A.e.r && (d["!fullref"] = d["!ref"], A.e.r = t.sheetRows - 1, d["!ref"] = xr(A))), D.length && (d["!merges"] = D), ze.length > 0 && (d["!cols"] = ze), he.length > 0 && (d["!rows"] = he), h[x] = d;
      } else A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, E = T = 0, o.push([f[3], false]), u = da(f[0]), x = Ar(u.Name), d = {}, t.dense && (d["!data"] = []), D = [], Qe = [], he = [], je = { name: x, Hidden: 0 }, ye.Sheets.push(je);
      break;
    case "table":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        o.push([f[3], false]), ze = [], Be = false;
      }
      break;
    case "style":
      f[1] === "/" ? wk(X, z, t) : z = da(f[0]);
      break;
    case "numberformat":
      z.nf = Ar(da(f[0]).Format || "General"), Li[z.nf] && (z.nf = Li[z.nf]);
      for (var M = 0; M != 392 && nr[M] != z.nf; ++M) ;
      if (M == 392) {
        for (M = 57; M != 392; ++M) if (nr[M] == null) {
          fn(z.nf, M);
          break;
        }
      }
      break;
    case "column":
      if (o[o.length - 1][0] !== "table" || f[1] === "/") break;
      if (ke = da(f[0]), ke.Hidden && (ke.hidden = true, delete ke.Hidden), ke.Width && (ke.wpx = parseInt(ke.Width, 10)), !Be && ke.wpx > 10) {
        Be = true, Ot = Wl;
        for (var G = 0; G < ze.length; ++G) ze[G] && cn(ze[G]);
      }
      Be && cn(ke), ze[ke.Index - 1 || ze.length] = ke;
      for (var V = 0; V < +ke.Span; ++V) ze[ze.length] = Vr(ke);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      ye.Names || (ye.Names = []);
      var ue = Ye(f[0]), O = { Name: kk(ue.Name), Ref: An(ue.RefersTo.slice(1), { r: 0, c: 0 }) };
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
      z.Interior = da(f[0]);
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
      f[1] === "/" ? Bx(W, Ge, a.slice(ee, f.index)) : ee = f.index + f[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else o.push([f[3], false]);
      break;
    case "comment":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        Ek(me), Pe.push(me);
      } else o.push([f[3], false]), u = da(f[0]), Pr(u.ShowAlways || "0") || (Pe.hidden = true), me = { a: u.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var Ce = da(f[0]);
        d["!autofilter"] = { ref: An(Ce.Range).replace(/\$/g, "") }, o.push([f[3], true]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (f[1] === "/") {
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
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
        if ((u = o.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
      break;
    case "null":
      break;
    default:
      if (o.length == 0 && f[3] == "document" || o.length == 0 && f[3] == "uof") return uu(a, t);
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
  var ar = {};
  return !t.bookSheets && !t.bookProps && (ar.Sheets = h), ar.SheetNames = v, ar.Workbook = ye, ar.SSF = Vr(nr), ar.Props = W, ar.Custprops = K, ar.bookType = "xlml", ar;
}
function Df(e, r) {
  switch (_o(r = r || {}), r.type || "base64") {
    case "base64":
      return xf(ea(e), r);
    case "binary":
    case "buffer":
    case "file":
      return xf(e, r);
    case "array":
      return xf(Oa(e), r);
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
    i.push(Ae("NumberFormat", null, { "ss:Format": vr(nr[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    t.push(Ae("Style", i.join(""), s));
  }), Ae("Styles", t.join(""));
}
function uh(e) {
  return Ae("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + g0(e.Ref, { r: 0, c: 0 }) });
}
function Fk(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(uh(n)));
  }
  return Ae("Names", t.join(""));
}
function Ak(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(uh(f)));
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
  })), n.length == 0 ? "" : Ae("WorksheetOptions", n.join(""), { xmlns: Zt.x });
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
  if (e.l && e.l.Target && (f["ss:HRef"] = vr(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = vr(e.l.Tooltip))), t["!merges"]) for (var u = t["!merges"], h = 0; h != u.length; ++h) u[h].s.c != s.c || u[h].s.r != s.r || (u[h].e.c > u[h].s.c && (f["ss:MergeAcross"] = u[h].e.c - u[h].s.c), u[h].e.r > u[h].s.r && (f["ss:MergeDown"] = u[h].e.r - u[h].s.r));
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
      v = "String", d = Wd(e.v || "");
      break;
  }
  var x = pn(a.cellXfs, e, a);
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
    cn(m);
    var T = !!m.width, E = y0(g, m), A = { "ss:Index": g + 1 };
    T && (A["ss:Width"] = qi(E.width)), m.hidden && (A["ss:Hidden"] = "1"), f.push(Ae("Column", null, A));
  });
  for (var o = e["!data"] != null, u = { r: 0, c: 0 }, h = n.s.r; h <= n.e.r; ++h) {
    var v = [Ok(h, (e["!rows"] || [])[h])];
    u.r = h;
    for (var d = n.s.c; d <= n.e.c; ++d) {
      u.c = d;
      var x = false;
      for (s = 0; s != i.length; ++s) if (!(i[s].s.c > d) && !(i[s].s.r > h) && !(i[s].e.c < d) && !(i[s].e.r < h)) {
        (i[s].s.c != d || i[s].s.r != h) && (x = true);
        break;
      }
      if (!x) {
        var _ = gr(d) + Fr(h), y = o ? (e["!data"][h] || [])[d] : e[_];
        v.push(Dk(y, _, e, r, t, a, u));
      }
    }
    v.push("</Row>"), v.length > 2 && f.push(v.join(""));
  }
  return f.join("");
}
function Rk(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? Ak(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? Nk(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(Ck(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + g0(Ki(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function Pk(e, r) {
  r || (r = {}), e.SSF || (e.SSF = Vr(nr)), e.SSF && (ci(), c0(e.SSF), r.revssf = l0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], pn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Tk(e, r)), t.push(Sk(e)), t.push(""), t.push(Fk(e));
  for (var a = 0; a < e.SheetNames.length; ++a) t.push(Ae("Worksheet", Rk(a, r, e), { "ss:Name": vr(e.SheetNames[a]) }));
  return t[2] = bk(e, r), at + Ae("Workbook", t.join(""), { xmlns: Zt.ss, "xmlns:o": Zt.o, "xmlns:x": Zt.x, "xmlns:ss": Zt.ss, "xmlns:dt": Zt.dt, "xmlns:html": Zt.html });
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
  for (var o = Wa(t, t.l), u = Of[o], h = 0; u != null && Lk.indexOf(o) > -1; ) i = Wa(t, t.l + 2), h = t.l + 4, o == 2066 ? h += 4 : (o == 2165 || o == 2175) && (h += 12), f = t.slice(h, t.l + 4 + i), s.push(f), t.l += 4 + i, u = Of[o = Wa(t, t.l)];
  var v = rt(s);
  ct(v, 0);
  var d = 0;
  v.lens = [];
  for (var x = 0; x < s.length; ++x) v.lens.push(d), d += s[x].length;
  if (v.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + v.length + " < " + a;
  return r.f(v, v.length, n);
}
function Sa(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, r.cellNF && e.z == null && (e.z = nr[a]);
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (!r || r.cellText !== false) try {
      e.t === "e" ? e.w = e.w || ht[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v) : e.w = In(e.v) : e.w = ra(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && ua(nr[a] || String(a))) {
      var n = La(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Hs(e, r, t) {
  return { v: e, ixfe: r, t };
}
function Uk(e, r) {
  var t = { opts: {} }, a = {}, n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, o = [], u = "", h = {}, v, d = "", x, _, y, m, g = {}, T = [], E, A, X = [], z = [], F = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, U = {}, D = false, W = function(Ke) {
    return Ke < 8 ? Sn[Ke] : Ke < 64 && z[Ke - 8] || Sn[Ke];
  }, K = function(Ke, kr) {
    var jr = Ke.XF.data;
    if (!(!jr || !jr.patternType || !kr || !kr.cellStyles)) {
      Ke.s = {}, Ke.s.patternType = jr.patternType;
      var zr;
      (zr = $i(W(jr.icvFore))) && (Ke.s.fgColor = { rgb: zr }), (zr = $i(W(jr.icvBack))) && (Ke.s.bgColor = { rgb: zr });
    }
  }, ee = function(Ke, kr, jr) {
    if (!(!D && Me > 1) && !(jr.sheetRows && Ke.r >= jr.sheetRows)) {
      if (jr.cellStyles && kr.XF && kr.XF.data && K(kr, jr), delete kr.ixfe, delete kr.XF, v = Ke, d = yr(Ke), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ke.r < s.s.r && (s.s.r = Ke.r), Ke.c < s.s.c && (s.s.c = Ke.c), Ke.r + 1 > s.e.r && (s.e.r = Ke.r + 1), Ke.c + 1 > s.e.c && (s.e.c = Ke.c + 1), jr.cellFormula && kr.f) {
        for (var zr = 0; zr < T.length; ++zr) if (!(T[zr][0].s.c > Ke.c || T[zr][0].s.r > Ke.r) && !(T[zr][0].e.c < Ke.c || T[zr][0].e.r < Ke.r)) {
          kr.F = xr(T[zr][0]), (T[zr][0].s.c != Ke.c || T[zr][0].s.r != Ke.r) && delete kr.f, kr.f && (kr.f = "" + Dt(T[zr][1], s, Ke, he, de));
          break;
        }
      }
      jr.dense ? (n["!data"][Ke.r] || (n["!data"][Ke.r] = []), n["!data"][Ke.r][Ke.c] = kr) : n[d] = kr;
    }
  }, de = { enc: false, sbcch: 0, snames: [], sharedf: g, arrayf: T, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!r && !!r.cellStyles, WTF: !!r && !!r.wtf };
  r.password && (de.password = r.password);
  var Pe, me = [], ze = [], ke = [], Be = [], Qe = false, he = [];
  he.SheetNames = de.snames, he.sharedf = de.sharedf, he.arrayf = de.arrayf, he.names = [], he.XTI = [];
  var fr = 0, Me = 0, Te = 0, ye = [], je = [], Ge;
  de.codepage = 1200, va(1200);
  for (var Ze = false; e.l < e.length - 1; ) {
    var P = e.l, M = e.read_shift(2);
    if (M === 0 && fr === 10) break;
    var G = e.l === e.length ? 0 : e.read_shift(2), V = Of[M];
    if (Me == 0 && [9, 521, 1033, 2057].indexOf(M) == -1) break;
    if (V && V.f) {
      if (r.bookSheets && fr === 133 && M !== 133) break;
      if (fr = M, V.r === 2 || V.r == 12) {
        var ue = e.read_shift(2);
        if (G -= 2, !de.enc && ue !== M && ((ue & 255) << 8 | ue >> 8) !== M) throw new Error("rt mismatch: " + ue + "!=" + M);
        V.r == 12 && (e.l += 10, G -= 10);
      }
      var O = {};
      if (M === 10 ? O = V.f(e, G, de) : O = Mk(M, V, e, G, de), Me == 0 && [9, 521, 1033, 2057].indexOf(fr) === -1) continue;
      switch (M) {
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
          va(de.codepage = Ce), Ze = true;
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
          X.push(O);
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
          Ge = { Name: O.Name, Ref: Dt(O.rgce, s, null, he, de) }, O.itab > 0 && (Ge.Sheet = O.itab - 1), he.names.push(Ge), he[0] || (he[0] = [], he[0].XTI = []), he[he.length - 1].push(O), O.Name == "_xlnm._FilterDatabase" && O.itab > 0 && O.rgce && O.rgce[0] && O.rgce[0][0] && O.rgce[0][0][0] == "PtgArea3d" && (je[O.itab - 1] = { ref: xr(O.rgce[0][0][1][2]) });
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
            u === "" ? h = n : a[u] = n, n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (de.biff === 8 && (de.biff = { 9: 2, 521: 3, 1033: 4 }[M] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[O.BIFFVer] || 8), de.biffguess = O.BIFFVer == 0, O.BIFFVer == 0 && O.dt == 4096 && (de.biff = 5, Ze = true, va(de.codepage = 28591)), de.biff == 4 && O.dt & 256 && (D = true), de.biff == 8 && O.BIFFVer == 0 && O.dt == 16 && (de.biff = 2), Me++ && !D) break;
            if (n = {}, r.dense && (n["!data"] = []), de.biff < 8 && !Ze && (Ze = true, va(de.codepage = r.codepage || 1252)), de.biff == 4 && D) u = (i[de.snames.indexOf(u) + 1] || { name: "" }).name;
            else if (de.biff < 5 || O.BIFFVer == 0 && O.dt == 4096) {
              u === "" && (u = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Se = { pos: e.l - G, name: u };
              i[Se.pos] = Se, de.snames.push(u);
            } else u = (i[P] || { name: "" }).name;
            O.dt == 32 && (n["!type"] = "chart"), O.dt == 64 && (n["!type"] = "macro"), me = [], ze = [], de.arrayf = T = [], ke = [], Be = [], Qe = false, U = { Hidden: (i[P] || { hs: 0 }).hs, name: u };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][O.r] || [])[O.c] : n[gr(O.c) + Fr(O.r)]) && ++O.c, E = { ixfe: O.ixfe, XF: X[O.ixfe] || {}, v: O.val, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 5:
        case 517:
          E = { ixfe: O.ixfe, XF: X[O.ixfe], v: O.val, t: O.t }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 638:
          E = { ixfe: O.ixfe, XF: X[O.ixfe], v: O.rknum, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 189:
          for (var ar = O.c; ar <= O.C; ++ar) {
            var rr = O.rkrec[ar - O.c][0];
            E = { ixfe: rr, XF: X[rr], v: O.rkrec[ar - O.c][1], t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: ar, r: O.r }, E, r);
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
            if (E = Hs(O.val, O.cell.ixfe, O.tt), E.XF = X[E.ixfe], r.cellFormula) {
              var or = O.formula;
              if (or && or[0] && or[0][0] && or[0][0][0] == "PtgExp") {
                var Ir = or[0][0][1][0], Er = or[0][0][1][1], Kr = yr({ r: Ir, c: Er });
                g[Kr] ? E.f = "" + Dt(O.formula, s, O.cell, he, de) : E.F = ((r.dense ? (n["!data"][Ir] || [])[Er] : n[Kr]) || {}).F;
              } else E.f = "" + Dt(O.formula, s, O.cell, he, de);
            }
            Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee(O.cell, E, r), f = O;
          }
          break;
        case 7:
        case 519:
          if (f) f.val = O, E = Hs(O, f.cell.ixfe, "s"), E.XF = X[E.ixfe], r.cellFormula && (E.f = "" + Dt(f.formula, s, f.cell, he, de)), Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee(f.cell, E, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            T.push(O);
            var $e = yr(O[0].s);
            if (x = r.dense ? (n["!data"][O[0].s.r] || [])[O[0].s.c] : n[$e], r.cellFormula && x) {
              if (!f || !$e || !x) break;
              x.f = "" + Dt(O[1], s, O[0], he, de), x.F = xr(O[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (d) {
              if (!f) break;
              g[yr(f.cell)] = O[0], x = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[yr(f.cell)], (x || {}).f = "" + Dt(O[0], s, v, he, de);
            }
          }
          break;
        case 253:
          E = Hs(o[O.isst].t, O.ixfe, "s"), o[O.isst].h && (E.h = o[O.isst].h), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
          break;
        case 513:
          r.sheetStubs && (E = { ixfe: O.ixfe, XF: X[O.ixfe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r));
          break;
        case 190:
          if (r.sheetStubs) for (var Tr = O.c; Tr <= O.C; ++Tr) {
            var Oe = O.ixfe[Tr - O.c];
            E = { ixfe: Oe, XF: X[Oe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: Tr, r: O.r }, E, r);
          }
          break;
        case 214:
        case 516:
        case 4:
          E = Hs(O.val, O.ixfe, "s"), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ye[E.XF.numFmtId] || ye[E.ixfe >> 8 & 63]), Sa(E, r, t.opts.Date1904), ee({ c: O.c, r: O.r }, E, r);
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
            for (var Jr = 0; Jr < Te + 163 && nr[Jr] != O[1]; ++Jr) ;
            Jr >= 163 && fn(O[1], Te + 163);
          } else fn(O[1], O[0]);
          break;
        case 30:
          {
            ye[Te++] = O;
            for (var qr = 0; qr < Te + 163 && nr[qr] != O; ++qr) ;
            qr >= 163 && fn(O, Te + 163);
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
          wg(X[O.ixfe], O.ext);
          break;
        case 125:
          {
            if (!de.cellStyles) break;
            for (; O.e >= O.s; ) ke[O.e--] = { width: O.w / 256, level: O.level || 0, hidden: !!(O.flags & 1) }, Qe || (Qe = true, ho(O.w / 256)), cn(ke[O.e + 1]);
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
          n["!margins"] || Cn(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[M]] = O;
          break;
        case 161:
          n["!margins"] || Cn(n["!margins"] = {}), n["!margins"].header = O.header, n["!margins"].footer = O.footer;
          break;
        case 574:
          O.RTL && (F.Views[0].RTL = true);
          break;
        case 146:
          z = O;
          break;
        case 2198:
          Pe = O;
          break;
        case 140:
          A = O;
          break;
        case 442:
          u ? U.CodeName = O || U.name : F.WBProps.CodeName = O || "ThisWorkbook";
          break;
      }
    } else V || console.error("Missing Info for XLS Record 0x" + M.toString(16)), e.l += G;
  }
  return t.SheetNames = Gr(i).sort(function(dt, Ke) {
    return Number(dt) - Number(Ke);
  }).map(function(dt) {
    return i[dt].name;
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && h["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = h)) : t.Preamble = h, t.Sheets && je.forEach(function(dt, Ke) {
    t.Sheets[t.SheetNames[Ke]]["!autofilter"] = dt;
  }), t.Strings = o, t.SSF = Vr(nr), de.enc && (t.Encryption = de.enc), Pe && (t.Themes = Pe), t.Metadata = {}, A !== void 0 && (t.Metadata.Country = A), he.names.length > 0 && (F.Names = he.names), t.Workbook = F, t;
}
var Mi = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function Wk(e, r, t) {
  var a = ir.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = Mc(a, bf, Mi.DSI);
    for (var i in n) r[i] = n[i];
  } catch (u) {
    if (t.WTF) throw u;
  }
  var s = ir.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = Mc(s, Ff, Mi.SI);
    for (var o in f) r[o] == null && (r[o] = f[o]);
  } catch (u) {
    if (t.WTF) throw u;
  }
  r.HeadingPairs && r.TitlesOfParts && (xl(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function Hk(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = vc(bf, "n"), o = vc(Ff, "n");
  if (e.Props) for (s = Gr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops) for (s = Gr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var u = [];
  for (i = 0; i < n.length; ++i) _l.indexOf(n[i][0]) > -1 || dl.indexOf(n[i][0]) > -1 || n[i][1] != null && u.push(n[i]);
  a.length && ir.utils.cfb_add(r, "/SummaryInformation", Uc(a, Mi.SI, o, Ff)), (t.length || u.length) && ir.utils.cfb_add(r, "/DocumentSummaryInformation", Uc(t, Mi.DSI, f, bf, u.length ? u : null, Mi.UDI));
}
function lh(e, r) {
  r || (r = {}), _o(r), Xf(), r.codepage && Vf(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (ir.find(e, "/encryption")) throw new Error("File is password-protected");
    t = ir.find(e, "!CompObj"), a = ir.find(e, "/Workbook") || ir.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = Vt(ea(e));
        break;
      case "binary":
        e = Vt(e);
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
  if (t && Bk(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = mr ? "buffer" : "array";
    if (a && a.content) n = Uk(a.content, r);
    else if ((i = ir.find(e, "PerfectOffice_MAIN")) && i.content) n = Fn.to_workbook(i.content, (r.type = s, r));
    else if ((i = ir.find(e, "NativeContent_MAIN")) && i.content) n = Fn.to_workbook(i.content, (r.type = s, r));
    else throw (i = ir.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && ir.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = qg(e));
  }
  var f = {};
  return e.FullPaths && Wk(e, f, r), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function Vk(e, r) {
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
  return ir.utils.cfb_add(a, n, dh(e, t)), t.biff == 8 && (e.Props || e.Custprops) && Hk(e, a), t.biff == 8 && e.vbaraw && Yg(a, ir.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Ji = { 0: { f: pw }, 1: { f: Ew }, 2: { f: Ww }, 3: { f: Dw }, 4: { f: Fw }, 5: { f: Lw }, 6: { f: jw }, 7: { f: Nw }, 8: { f: Jw }, 9: { f: Zw }, 10: { f: qw }, 11: { f: Yw }, 12: { f: Sw }, 13: { f: Vw }, 14: { f: Ow }, 15: { f: Cw }, 16: { f: nh }, 17: { f: zw }, 18: { f: Pw }, 19: { f: ao }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: $y }, 40: {}, 42: {}, 43: { f: Km }, 44: { f: Vm }, 45: { f: zm }, 46: { f: qm }, 47: { f: $m }, 48: {}, 49: { f: ix }, 50: {}, 51: { f: Eg }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: Ol }, 62: { f: Kw }, 63: { f: Ng }, 64: { f: xy }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Lt, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: uy }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: yw }, 148: { f: gw, p: 16 }, 151: { f: ny }, 152: {}, 153: { f: jy }, 154: {}, 155: {}, 156: { f: Xy }, 157: {}, 158: {}, 159: { T: 1, f: rm }, 160: { T: -1 }, 161: { T: 1, f: Wn }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: Qw }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: yg }, 336: { T: -1 }, 337: { f: bg, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: Sf }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: Dl }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: iy }, 427: { f: sy }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: oy }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: ww }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: ty }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: Sf }, 551: { f: x0 }, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: jg }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: Xg }, 636: { T: -1 }, 637: { f: cx }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: Dy }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: py }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, Of = { 6: { f: uf }, 10: { f: tn }, 12: { f: Zr }, 13: { f: Zr }, 14: { f: et }, 15: { f: et }, 16: { f: Nt }, 17: { f: et }, 18: { f: et }, 19: { f: Zr }, 20: { f: Kc }, 21: { f: Kc }, 23: { f: Dl }, 24: { f: Gc }, 25: { f: et }, 26: {}, 27: {}, 28: { f: cv }, 29: {}, 34: { f: et }, 35: { f: jc }, 38: { f: Nt }, 39: { f: Nt }, 40: { f: Nt }, 41: { f: Nt }, 42: { f: et }, 43: { f: et }, 47: { f: km }, 49: { f: Dp }, 51: { f: Zr }, 60: {}, 61: { f: bp }, 64: { f: et }, 65: { f: Ip }, 66: { f: Zr }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Zr }, 89: {}, 90: {}, 91: {}, 92: { f: pp }, 93: { f: hv }, 94: {}, 95: { f: et }, 96: {}, 97: {}, 99: { f: et }, 125: { f: Ol }, 128: { f: Qp }, 129: { f: mp }, 130: { f: Zr }, 131: { f: et }, 132: { f: et }, 133: { f: gp }, 134: {}, 140: { f: wv }, 141: { f: Zr }, 144: {}, 146: { f: Ev }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Zr }, 157: {}, 158: {}, 160: { f: Iv }, 161: { f: bv }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: Kp }, 190: { f: jp }, 193: { f: tn }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: et }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Zr }, 220: {}, 221: { f: et }, 222: {}, 224: { f: zp }, 225: { f: xp }, 226: { f: tn }, 227: {}, 229: { f: uv }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: wp }, 253: { f: Np }, 255: { f: kp }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: wl }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: et }, 353: { f: tn }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: nv }, 431: { f: et }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: pv }, 439: { f: et }, 440: { f: vv }, 441: {}, 442: { f: ss }, 443: {}, 444: { f: Zr }, 445: {}, 446: {}, 448: { f: tn }, 449: { f: Sp, r: 2 }, 450: { f: tn }, 512: { f: Vc }, 513: { f: Cv }, 515: { f: tv }, 516: { f: Pp }, 517: { f: rv }, 519: { f: Dv }, 520: { f: Ep }, 523: {}, 545: { f: $c }, 549: { f: Hc }, 566: {}, 574: { f: Ap }, 638: { f: Xp }, 659: {}, 1048: {}, 1054: { f: Lp }, 1084: {}, 1212: { f: sv }, 2048: { f: gv }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: Ls }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: tn }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Tv, r: 12 }, 2173: { f: _g, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: et, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: iv, r: 12 }, 2197: {}, 2198: { f: dg, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: fv, r: 12 }, 2203: { f: tn }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: Tp }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Zr }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: Fv }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: kv }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: Vc }, 1: {}, 2: { f: Bv }, 3: { f: Rv }, 4: { f: Nv }, 5: { f: Uv }, 7: { f: Mv }, 8: {}, 9: { f: Ls }, 11: {}, 22: { f: Zr }, 30: { f: Up }, 31: {}, 32: {}, 33: { f: $c }, 36: {}, 37: { f: Hc }, 50: { f: Wv }, 62: {}, 52: {}, 67: { f: $p }, 68: { f: Zr }, 69: {}, 86: {}, 126: {}, 127: { f: Ov }, 135: {}, 136: {}, 137: {}, 143: { f: Vv }, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: Hv }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: uf }, 521: { f: Ls }, 536: { f: Gc }, 547: { f: jc }, 561: {}, 579: { f: Zp }, 1030: { f: uf }, 1033: { f: Ls }, 1091: { f: Jp }, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 101: {}, 102: {}, 105: {}, 106: {}, 107: {}, 109: {}, 112: {}, 114: {}, 29282: {} };
function _e(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && eo(t) && e.push(t);
  }
}
function Xk(e, r, t, a) {
  var n = (t || []).length || 0;
  if (n <= 8224) return _e(e, r, t, n);
  var i = r;
  if (!isNaN(i)) {
    for (var s = t.parts || [], f = 0, o = 0, u = 0; u + (s[f] || 8224) <= 8224; ) u += s[f] || 8224, f++;
    var h = e.next(4);
    for (h.write_shift(2, i), h.write_shift(2, u), e.push(t.slice(o, o + u)), o += u; o < n; ) {
      for (h = e.next(4), h.write_shift(2, 60), u = 0; u + (s[f] || 8224) <= 8224; ) u += s[f] || 8224, f++;
      h.write_shift(2, u), e.push(t.slice(o, o + u)), o += u;
    }
  }
}
function pf(e, r, t, a) {
  var n = oe(9);
  return fs(n, e, r), kl(t, a || "b", n), n;
}
function Kk(e, r, t) {
  var a = oe(8 + 2 * t.length);
  return fs(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function hh(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return _e(e, 28, ff(a, t[1], t[2]));
    _e(e, 28, ff(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) _e(e, 28, ff(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
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
      n.biff == 2 && o == (o | 0) && o >= 0 && o < 65536 ? _e(e, 2, Lv(t, a, o, f, s)) : isNaN(o) ? _e(e, 5, pf(t, a, 36, "e")) : isFinite(o) ? _e(e, 3, Pv(t, a, o, f, s)) : _e(e, 5, pf(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      _e(e, 5, pf(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      _e(e, 4, Kk(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  _e(e, 1, fs(null, t, a));
}
function Gk(e, r, t, a, n) {
  var i = r["!data"] != null, s = Dr(r["!ref"] || "A1"), f = "", o = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var u = (((n || {}).Workbook || {}).WBProps || {}).date1904, h = [], v = [], d = s.s.c; d <= s.e.c; ++d) o[d] = gr(d);
  for (var x = s.s.r; x <= s.e.r; ++x) for (i && (h = r["!data"][x] || []), f = Fr(x), d = s.s.c; d <= s.e.c; ++d) {
    var _ = i ? h[d] : r[o[d] + f];
    _ && (jk(e, _, x, d, a, u), _.c && v.push([_.c, x, d]));
  }
  hh(e, v);
}
function zk(e, r) {
  for (var t = r || {}, a = Pt(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  _e(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, co(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && _e(a, 34, It(true)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = Pt();
  return Gk(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? _e(a, 30, Wp(f)) : _e(a, 1054, Hp(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        _e(a, 67, qp(f));
        break;
      case 3:
        _e(a, 579, Il(f));
        break;
      case 4:
        _e(a, 1091, Yp(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), _e(a, 10), a.end();
}
var xa = 1, fa = [];
function $k() {
  var e = oe(82 + 8 * fa.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * fa.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * fa.length);
    {
      e.write_shift(4, xa), e.write_shift(4, fa.length + 1);
      for (var r = 0, t = 0; t < fa.length; ++t) r += fa[t] && fa[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, fa.length);
    }
    fa.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function qk(e, r) {
  var t = [], a = 0, n = Pt(), i = xa, s;
  r.forEach(function(o, u) {
    var h = "", v = o[0].map(function(E) {
      return E.a && !h && (h = E.a), E.t;
    }).join("");
    ++xa;
    {
      var d = oe(150);
      d.write_shift(2, 15), d.write_shift(2, 61444), d.write_shift(4, 150), d.write_shift(2, 3234), d.write_shift(2, 61450), d.write_shift(4, 8), d.write_shift(4, xa), d.write_shift(4, 2560), d.write_shift(2, 227), d.write_shift(2, 61451), d.write_shift(4, 84), d.write_shift(2, 128), d.write_shift(4, 0), d.write_shift(2, 139), d.write_shift(4, 2), d.write_shift(2, 191), d.write_shift(4, 524296), d.write_shift(2, 344), d.l += 4, d.write_shift(2, 385), d.write_shift(4, 134217808), d.write_shift(2, 387), d.write_shift(4, 134217808), d.write_shift(2, 389), d.write_shift(4, 268435700), d.write_shift(2, 447), d.write_shift(4, 1048592), d.write_shift(2, 448), d.write_shift(4, 134217809), d.write_shift(2, 451), d.write_shift(4, 268435700), d.write_shift(2, 513), d.write_shift(4, 134217809), d.write_shift(2, 515), d.write_shift(4, 268435700), d.write_shift(2, 575), d.write_shift(4, 196609), d.write_shift(2, 959), d.write_shift(4, 131072 | (o[0].hidden ? 2 : 0)), d.l += 2, d.write_shift(2, 61456), d.write_shift(4, 18), d.write_shift(2, 3), d.write_shift(2, o[2] + 2), d.l += 2, d.write_shift(2, o[1] + 1), d.l += 2, d.write_shift(2, o[2] + 4), d.l += 2, d.write_shift(2, o[1] + 5), d.l += 2, d.l += 2, d.write_shift(2, 61457), d.l += 4, d.l = 150, u == 0 ? s = d : _e(n, 236, d);
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
      var T = oe(12 + h.length);
      T.write_shift(2, o[1]), T.write_shift(2, o[2]), T.write_shift(2, 0 | (o[0].hidden ? 0 : 2)), T.write_shift(2, xa), T.write_shift(2, h.length), T.write_shift(1, 0), T.write_shift(h.length, h, "sbcs"), T.l++, t.push(T);
    }
  });
  {
    var f = oe(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, xa), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), _e(e, 236, s ? rt([f, s]) : f);
  }
  e.push(n.end()), t.forEach(function(o) {
    _e(e, 28, o);
  }), fa.push([i, r.length + 1, xa]), ++xa;
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
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), _e(e, 2151, t), t = oe(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), Fl(Dr(r["!ref"] || "A1"), t), t.write_shift(4, 4), _e(e, 2152, t);
}
function Qk(e, r) {
  for (var t = 0; t < 16; ++t) _e(e, 224, Xc({ numFmtId: 0, style: true }, 0, r));
  r.cellXfs.forEach(function(a) {
    _e(e, 224, Xc(a, 0, r));
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
  var s = 16 + pn(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    _e(e, 513, Pn(t, a, s));
    return;
  }
  if (r.bf) _e(e, 6, k_(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? Yr($r(r.v, i), i) : r.v;
      isNaN(f) ? _e(e, 517, sf(t, a, 36, s, n, "e")) : isFinite(f) ? _e(e, 515, av(t, a, f, s)) : _e(e, 517, sf(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      _e(e, 517, sf(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var o = vo(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        _e(e, 253, Rp(t, a, o, s));
      } else _e(e, 516, Bp(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      _e(e, 513, Pn(t, a, s));
  }
}
function a4(e, r, t) {
  var a = Pt(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, o = i["!data"] != null, u = r.biff == 8, h = "", v = [], d = Dr(i["!ref"] || "A1"), x = u ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= x) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + x);
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.r, x - 1);
  }
  _e(a, 2057, co(t, 16, r)), _e(a, 13, oa(1)), _e(a, 12, oa(100)), _e(a, 15, It(true)), _e(a, 17, It(false)), _e(a, 16, Nn(1e-3)), _e(a, 95, It(true)), _e(a, 42, It(false)), _e(a, 43, It(false)), _e(a, 130, oa(1)), _e(a, 128, ev()), _e(a, 131, It(false)), _e(a, 132, It(false)), u && r4(a, i["!cols"]), _e(a, 512, Vp(d, r));
  var _ = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  u && (i["!links"] = []);
  for (var y = d.s.c; y <= d.e.c; ++y) v[y] = gr(y);
  for (var m = [], g = [], T = d.s.r; T <= d.e.r; ++T) for (o && (g = i["!data"][T] || []), h = Fr(T), y = d.s.c; y <= d.e.c; ++y) {
    var E = o ? g[y] : i[v[y] + h];
    E && (t4(a, E, T, y, r, _), u && E.l && i["!links"].push([v[y] + h, E.l]), E.c && m.push([E.c, T, y]));
  }
  var A = f.CodeName || f.name || n;
  return u ? qk(a, m) : hh(a, m), u && _e(a, 574, Cp((s.Views || [])[0])), u && (i["!merges"] || []).length && _e(a, 229, lv(i["!merges"])), u && e4(a, i), _e(a, 442, El(A)), u && Jk(a, i), _e(a, 10), a.end();
}
function n4(e, r, t) {
  var a = Pt(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = t.biff == 8, o = t.biff == 5;
  if (_e(a, 2057, co(e, 5, t)), t.bookType == "xla" && _e(a, 135), _e(a, 225, f ? oa(1200) : null), _e(a, 193, qx(2)), o && _e(a, 191), o && _e(a, 192), _e(a, 226), _e(a, 92, vp("SheetJS", t)), _e(a, 66, oa(f ? 1200 : 1252)), f && _e(a, 353, oa(0)), f && _e(a, 448), _e(a, 317, Av(e.SheetNames.length)), f && e.vbaraw && _e(a, 211), f && e.vbaraw) {
    var u = s.CodeName || "ThisWorkbook";
    _e(a, 442, El(u));
  }
  _e(a, 156, oa(17)), _e(a, 25, It(false)), _e(a, 18, It(false)), _e(a, 19, oa(0)), f && _e(a, 431, It(false)), f && _e(a, 444, oa(0)), _e(a, 61, Fp()), _e(a, 64, It(false)), _e(a, 141, oa(0)), _e(a, 34, It(By(e) == "true")), _e(a, 14, It(true)), f && _e(a, 439, It(false)), _e(a, 218, oa(0)), Yk(a, e, t), Zk(a, e.SSF, t), Qk(a, t), f && _e(a, 352, It(false));
  var h = a.end(), v = Pt();
  f && _e(v, 140, yv()), f && fa.length && _e(v, 235, $k()), f && t.Strings && Xk(v, 252, yp(t.Strings)), _e(v, 10);
  var d = v.end(), x = Pt(), _ = 0, y = 0;
  for (y = 0; y < e.SheetNames.length; ++y) _ += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[y].length;
  var m = h.length + _ + d.length;
  for (y = 0; y < e.SheetNames.length; ++y) {
    var g = i[y] || {};
    _e(x, 133, _p({ pos: m, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[y] }, t)), m += r[y].length;
  }
  var T = x.end();
  if (_ != T.length) throw new Error("BS8 " + _ + " != " + T.length);
  var E = [];
  return h.length && E.push(h), T.length && E.push(T), d.length && E.push(d), rt(E);
}
function i4(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = Vr(nr)), e && e.SSF && (ci(), c0(e.SSF), t.revssf = l0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), xa = 1, fa = [], t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, wo(t), t.cellXfs = [], pn(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
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
function fu(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : M1, n = {};
  a && (n["!data"] = []), e = ns(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, o = s && s.index || e.length, u = Cd(e.slice(f, o), /(:?<tr[^<>]*>)/i, "<tr>"), h = -1, v = 0, d = 0, x = 0, _ = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, y = [];
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
      var T = m.split(/<\/t[dh]>/i);
      for (o = 0; o < T.length; ++o) {
        var E = T[o].trim();
        if (E.match(/<t[dh]/i)) {
          for (var A = E, X = 0; A.charAt(0) == "<" && (X = A.indexOf(">")) > -1; ) A = A.slice(X + 1);
          for (var z = 0; z < y.length; ++z) {
            var F = y[z];
            F.s.c == v && F.s.r < h && h <= F.e.r && (v = F.e.c + 1, z = -1);
          }
          var U = Ye(E.slice(0, E.indexOf(">")));
          x = U.colspan ? +U.colspan : 1, ((d = +U.rowspan) > 1 || x > 1) && y.push({ s: { r: h, c: v }, e: { r: h + (d || 1) - 1, c: v + x - 1 } });
          var D = U.t || U["data-t"] || "";
          if (!A.length) {
            v += x;
            continue;
          }
          if (A = Vu(A), _.s.r > h && (_.s.r = h), _.e.r < h && (_.e.r = h), _.s.c > v && (_.s.c = v), _.e.c < v && (_.e.c = v), !A.length) {
            v += x;
            continue;
          }
          var W = { t: "s", v: A };
          t.raw || !A.trim().length || D == "s" || (A === "TRUE" ? W = { t: "b", v: true } : A === "FALSE" ? W = { t: "b", v: false } : isNaN(Qt(A)) ? isNaN(Vi(A).getDate()) ? A.charCodeAt(0) == 35 && _t[A] != null && (W.t = "e", W.w = A, W.v = _t[A]) : (W = { t: "d", v: $r(A) }, t.UTC === false && (W.v = On(W.v)), t.cellDates || (W = { t: "n", v: Yr(W.v) }), W.z = t.dateNF || nr[14]) : W = { t: "n", v: Qt(A) }), W.cellText !== false && (W.w = A), a ? (n["!data"][h] || (n["!data"][h] = []), n["!data"][h][v] = W) : n[yr({ r: h, c: v })] = W, v += x;
        }
      }
    }
  }
  return n["!ref"] = xr(_), y.length && (n["!merges"] = y), n;
}
function s4(e, r, t, a) {
  for (var n = e["!merges"] || [], i = [], s = {}, f = e["!data"] != null, o = r.s.c; o <= r.e.c; ++o) {
    for (var u = 0, h = 0, v = 0; v < n.length; ++v) if (!(n[v].s.r > t || n[v].s.c > o) && !(n[v].e.r < t || n[v].e.c < o)) {
      if (n[v].s.r < t || n[v].s.c < o) {
        u = -1;
        break;
      }
      u = n[v].e.r - n[v].s.r + 1, h = n[v].e.c - n[v].s.c + 1;
      break;
    }
    if (!(u < 0)) {
      var d = gr(o) + Fr(t), x = f ? (e["!data"][t] || [])[o] : e[d];
      x && x.t == "n" && x.v != null && !isFinite(x.v) && (isNaN(x.v) ? x = { t: "e", v: 36, w: ht[36] } : x = { t: "e", v: 7, w: ht[7] });
      var _ = x && x.v != null && (x.h || Ci(x.w || (ja(x), x.w) || "")) || "";
      s = {}, u > 1 && (s.rowspan = u), h > 1 && (s.colspan = h), a.editable ? _ = '<span contenteditable="true">' + _ + "</span>" : x && (s["data-t"] = x && x.t || "z", x.v != null && (s["data-v"] = Ci(x.v instanceof Date ? x.v.toISOString() : x.v)), x.z != null && (s["data-z"] = x.z), x.l && (x.l.Target || "#").charAt(0) != "#" && (_ = '<a href="' + Ci(x.l.Target) + '">' + _ + "</a>")), s.id = (a.id || "sjs") + "-" + d, i.push(Ae("td", _, s));
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
    var a = xn(fu(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = Eo();
  return t.forEach(function(i, s) {
    ls(n, fu(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function u4(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function xh(e, r) {
  var t = r || {}, a = t.header != null ? t.header : f4, n = t.footer != null ? t.footer : o4, i = [a], s = wt(e["!ref"] || "A1");
  if (i.push(u4(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(s4(e, s, f, t));
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
  var u = Math.min(n.sheetRows || 1e7, a.length), h = { s: { r: 0, c: 0 }, e: { r: s, c: f } };
  if (e["!ref"]) {
    var v = wt(e["!ref"]);
    h.s.r = Math.min(h.s.r, v.s.r), h.s.c = Math.min(h.s.c, v.s.c), h.e.r = Math.max(h.e.r, v.e.r), h.e.c = Math.max(h.e.c, v.e.c), s == -1 && (h.e.r = s = v.e.r + 1);
  }
  var d = [], x = 0, _ = e["!rows"] || (e["!rows"] = []), y = 0, m = 0, g = 0, T = 0, E = 0, A = 0;
  for (e["!cols"] || (e["!cols"] = []); y < a.length && m < u; ++y) {
    var X = a[y];
    if (ou(X)) {
      if (n.display) continue;
      _[m] = { hidden: true };
    }
    var z = X.cells;
    for (g = T = 0; g < z.length; ++g) {
      var F = z[g];
      if (!(n.display && ou(F))) {
        var U = F.hasAttribute("data-v") ? F.getAttribute("data-v") : F.hasAttribute("v") ? F.getAttribute("v") : Vu(F.innerHTML), D = F.getAttribute("data-z") || F.getAttribute("z");
        for (x = 0; x < d.length; ++x) {
          var W = d[x];
          W.s.c == T + f && W.s.r < m + s && m + s <= W.e.r && (T = W.e.c + 1 - f, x = -1);
        }
        A = +F.getAttribute("colspan") || 1, ((E = +F.getAttribute("rowspan") || 1) > 1 || A > 1) && d.push({ s: { r: m + s, c: T + f }, e: { r: m + s + (E || 1) - 1, c: T + f + (A || 1) - 1 } });
        var K = { t: "s", v: U }, ee = F.getAttribute("data-t") || F.getAttribute("t") || "";
        U != null && (U.length == 0 ? K.t = ee || "z" : n.raw || U.trim().length == 0 || ee == "s" || (ee == "e" && ht[+U] ? K = { t: "e", v: +U, w: ht[+U] } : U === "TRUE" ? K = { t: "b", v: true } : U === "FALSE" ? K = { t: "b", v: false } : isNaN(Qt(U)) ? isNaN(Vi(U).getDate()) ? U.charCodeAt(0) == 35 && _t[U] != null && (K = { t: "e", v: _t[U], w: U }) : (K = { t: "d", v: $r(U) }, n.UTC && (K.v = h0(K.v)), n.cellDates || (K = { t: "n", v: Yr(K.v) }), K.z = n.dateNF || nr[14]) : K = { t: "n", v: Qt(U) })), K.z === void 0 && D != null && (K.z = D);
        var de = "", Pe = F.getElementsByTagName("A");
        if (Pe && Pe.length) for (var me = 0; me < Pe.length && !(Pe[me].hasAttribute("href") && (de = Pe[me].getAttribute("href"), de.charAt(0) != "#")); ++me) ;
        de && de.charAt(0) != "#" && de.slice(0, 11).toLowerCase() != "javascript:" && (K.l = { Target: de }), i ? (e["!data"][m + s] || (e["!data"][m + s] = []), e["!data"][m + s][T + f] = K) : e[yr({ c: T + f, r: m + s })] = K, h.e.c < T + f && (h.e.c = T + f), T += A;
      }
    }
    ++m;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), h.e.r = Math.max(h.e.r, m - 1 + s), e["!ref"] = xr(h), m >= u && (e["!fullref"] = xr((h.e.r = a.length - y + m - 1 + s, h))), e;
}
function vh(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), ph(a, e, r);
}
function l4(e, r) {
  var t = xn(vh(e, r), r);
  return t;
}
function ou(e) {
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
  ot.lastIndex = 0, n = zf(ns(n, "<!--", "-->"));
  for (var i, s, f = "", o = "", u, h = 0, v = -1, d = ""; i = ot.exec(n); ) switch (i[3] = i[3].replace(/_[\s\S]*$/, "")) {
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
        u["decimal-places"] && (f += "." + Cr("0", +u["decimal-places"]));
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
      u = Ye(i[0], false), f += "0." + Cr("0", +u["min-decimal-places"] || +u["decimal-places"] || 2) + Cr("?", +u["decimal-places"] - +u["min-decimal-places"] || 0) + "E" + (Pr(u["forced-exponent-sign"]) ? "+" : "") + Cr("0", +u["min-exponent-digits"] || 2);
      break;
    case "fraction":
      u = Ye(i[0], false), +u["min-integer-digits"] ? f += Cr("0", +u["min-integer-digits"]) : f += "#", f += " ", f += Cr("?", +u["min-numerator-digits"] || 1), f += "/", +u["denominator-value"] ? f += u["denominator-value"] : f += Cr("?", +u["min-denominator-digits"] || 1);
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
      u = Ye(i[0], false), Ar(u.condition) == "value()>=0" ? f = a[u["apply-style-name"]] + ";" + f : console.error("ODS number format may be incorrect: " + u.condition);
      break;
    case "number":
      if (i[1] === "/") break;
      u = Ye(i[0], false), o = "", o += Cr("0", +u["min-integer-digits"] || 1), Pr(u.grouping) && (o = Ua(Cr("#", Math.max(0, 4 - o.length)) + o)), (+u["min-decimal-places"] || +u["decimal-places"]) && (o += "."), +u["min-decimal-places"] && (o += Cr("0", +u["min-decimal-places"] || 1)), +u["decimal-places"] - (+u["min-decimal-places"] || 0) && (o += Cr("0", +u["decimal-places"] - (+u["min-decimal-places"] || 0))), f += o;
      break;
    case "embedded-text":
      i[1] === "/" ? h == 0 ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, h) + '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(h) : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex, h = -+Ye(i[0], false).position || 0);
      break;
  }
  return a;
}
function gh(e, r, t) {
  var a = r || {}, n = d0(e), i = [], s, f, o, u = "", h = 0, v, d, x = {}, _ = [], y = {};
  a.dense && (y["!data"] = []);
  var m, g, T = { value: "" }, E = {}, A = "", X = 0, z = "", F = 0, U = [], D = [], W = -1, K = -1, ee = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, de = 0, Pe = t || {}, me = {}, ze = [], ke = {}, Be = 0, Qe = 0, he = [], fr = 1, Me = 1, Te = [], ye = { Names: [], WBProps: {} }, je = {}, Ge = ["", ""], Ze = [], P = {}, M = "", G = 0, V = false, ue = false, O = 0;
  for (ot.lastIndex = 0, n = zf(ns(n, "<!--", "-->")); m = ot.exec(n); ) switch (m[3] = m[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      m[1] === "/" ? (ee.e.c >= ee.s.c && ee.e.r >= ee.s.r ? y["!ref"] = xr(ee) : y["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= ee.e.r && (y["!fullref"] = y["!ref"], ee.e.r = a.sheetRows - 1, y["!ref"] = xr(ee)), ze.length && (y["!merges"] = ze), he.length && (y["!rows"] = he), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), _.push(v.name), x[v.name] = y, ue = false) : m[0].charAt(m[0].length - 2) !== "/" && (v = Ye(m[0], false), W = K = -1, ee.s.r = ee.s.c = 1e7, ee.e.r = ee.e.c = 0, y = {}, a.dense && (y["!data"] = []), ze = [], he = [], ue = true);
      break;
    case "table-row-group":
      m[1] === "/" ? --de : ++de;
      break;
    case "table-row":
    case "\u884C":
      if (m[1] === "/") {
        W += fr, fr = 1;
        break;
      }
      if (d = Ye(m[0], false), d.\u884C\u53F7 ? W = d.\u884C\u53F7 - 1 : W == -1 && (W = 0), fr = +d["number-rows-repeated"] || 1, fr < 10) for (O = 0; O < fr; ++O) de > 0 && (he[W + O] = { level: de });
      K = -1;
      break;
    case "covered-table-cell":
      if (m[1] !== "/") if (++K, T = Ye(m[0], false), Me = parseInt(T["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
        for (; Me-- > 0; ) a.dense ? (y["!data"][W] || (y["!data"][W] = []), y["!data"][W][K] = { t: "z" }) : y[yr({ r: W, c: K })] = { t: "z" }, ++K;
        --K;
      } else K += Me - 1;
      A = "", U = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (m[0].charAt(m[0].length - 2) === "/") ++K, T = Ye(m[0], false), Me = parseInt(T["number-columns-repeated"] || "1", 10) || 1, g = { t: "z", v: null }, T.formula && a.cellFormula != false && (g.f = nu(Ar(T.formula))), T["style-name"] && me[T["style-name"]] && (g.z = me[T["style-name"]]), (T.\u6570\u636E\u7C7B\u578B || T["value-type"]) == "string" && (g.t = "s", g.v = Ar(T["string-value"] || ""), a.dense ? (y["!data"][W] || (y["!data"][W] = []), y["!data"][W][K] = g) : y[gr(K) + Fr(W)] = g), K += Me - 1;
      else if (m[1] !== "/") {
        ++K, A = z = "", X = F = 0, U = [], D = [], Me = 1;
        var Ce = fr ? W + fr - 1 : W;
        if (K > ee.e.c && (ee.e.c = K), K < ee.s.c && (ee.s.c = K), W < ee.s.r && (ee.s.r = W), Ce > ee.e.r && (ee.e.r = Ce), T = Ye(m[0], false), E = Md(m[0]), Ze = [], P = {}, g = { t: T.\u6570\u636E\u7C7B\u578B || T["value-type"], v: null }, T["style-name"] && me[T["style-name"]] && (g.z = me[T["style-name"]]), a.cellFormula) if (T.formula && (T.formula = Ar(T.formula)), T["number-matrix-columns-spanned"] && T["number-matrix-rows-spanned"] && (Be = parseInt(T["number-matrix-rows-spanned"], 10) || 0, Qe = parseInt(T["number-matrix-columns-spanned"], 10) || 0, ke = { s: { r: W, c: K }, e: { r: W + Be - 1, c: K + Qe - 1 } }, g.F = xr(ke), Te.push([ke, g.F])), T.formula) g.f = nu(T.formula);
        else for (O = 0; O < Te.length; ++O) W >= Te[O][0].s.r && W <= Te[O][0].e.r && K >= Te[O][0].s.c && K <= Te[O][0].e.c && (g.F = Te[O][1]);
        switch ((T["number-columns-spanned"] || T["number-rows-spanned"]) && (Be = parseInt(T["number-rows-spanned"] || "1", 10) || 1, Qe = parseInt(T["number-columns-spanned"] || "1", 10) || 1, Be * Qe > 1 && (ke = { s: { r: W, c: K }, e: { r: W + Be - 1, c: K + Qe - 1 } }, ze.push(ke))), T["number-columns-repeated"] && (Me = parseInt(T["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Pr(T["boolean-value"]) || +T["boolean-value"] >= 1;
            break;
          case "float":
            g.t = "n", g.v = parseFloat(T.value), a.cellDates && g.z && ua(g.z) && (g.v = Va(g.v + (ye.WBProps.date1904 ? 1462 : 0)), g.t = typeof g.v == "number" ? "n" : "d");
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(T.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(T.value);
            break;
          case "date":
            g.t = "d", g.v = $r(T["date-value"], ye.WBProps.date1904), a.cellDates || (g.t = "n", g.v = Yr(g.v, ye.WBProps.date1904)), g.z || (g.z = "m/d/yy");
            break;
          case "time":
            g.t = "n", g.v = _d(T["time-value"]) / 86400, a.cellDates && (g.v = Va(g.v), g.t = typeof g.v == "number" ? "n" : "d"), g.z || (g.z = "HH:MM:SS");
            break;
          case "number":
            g.t = "n", g.v = parseFloat(T.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t) g.t = "s", T["string-value"] != null && (A = Ar(T["string-value"]), U = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (V = false, E["calcext:value-type"] == "error" && _t[A] != null && (g.t = "e", g.w = A, g.v = _t[A]), g.t === "s" && (g.v = A || "", U.length && (g.R = U), V = X == 0), je.Target && (g.l = je), Ze.length > 0 && (g.c = Ze, Ze = []), A && a.cellText !== false && (g.w = A), V && (g.t = "z", delete g.v), (!V || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= W)) for (var We = 0; We < fr; ++We) {
          if (Me = parseInt(T["number-columns-repeated"] || "1", 10), a.dense) for (y["!data"][W + We] || (y["!data"][W + We] = []), y["!data"][W + We][K] = We == 0 ? g : Vr(g); --Me > 0; ) y["!data"][W + We][K + Me] = Vr(g);
          else for (y[yr({ r: W + We, c: K })] = g; --Me > 0; ) y[yr({ r: W + We, c: K + Me })] = Vr(g);
          ee.e.c <= K && (ee.e.c = K);
        }
        Me = parseInt(T["number-columns-repeated"] || "1", 10), K += Me - 1, Me = 0, g = {}, A = "", U = [];
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
        P.t = A, U.length && (P.R = U), P.a = M, Ze.push(P), A = z, X = F, U = D;
      } else if (m[0].charAt(m[0].length - 2) !== "/") {
        i.push([m[3], false]);
        var Se = Ye(m[0], true);
        Se.display && Pr(Se.display) || (Ze.hidden = true), z = A, F = X, D = U, A = "", X = 0, U = [];
      }
      M = "", G = 0;
      break;
    case "creator":
      m[1] === "/" ? M = n.slice(G, m.index) : G = m.index + m[0].length;
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
      A = "", X = 0, U = [];
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
        mh(n.slice(o, ot.lastIndex), r, Pe), ot.lastIndex = ar;
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
          u += n.slice(h, m.index);
          break;
      }
      else h = m.index + m[0].length;
      break;
    case "named-range":
      f = Ye(m[0], false), Ge = lf(f["cell-range-address"]);
      var or = { Name: f.name, Ref: Ge[0] + "!" + Ge[1] };
      ue && (or.Sheet = _.length), ye.Names.push(or);
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
      if (m[1] === "/" && (!T || !T["string-value"])) {
        var Ir = d4(n.slice(X, m.index));
        A = (A.length > 0 ? A + `
` : "") + Ir[0];
      } else m[0].slice(-2) == "/>" ? A += `
` : (Ye(m[0], false), X = m.index + m[0].length);
      break;
    case "s":
      break;
    case "database-range":
      if (m[1] === "/") break;
      try {
        Ge = lf(Ye(m[0])["target-range-address"]), x[Ge[0]]["!autofilter"] = { ref: Ge[1] };
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
        je.Target = Ar(je.href), delete je.href, je.Target.charAt(0) == "#" && je.Target.indexOf(".") > -1 ? (Ge = lf(je.Target.slice(1)), je.Target = "#" + Ge[0] + "!" + Ge[1]) : je.Target.match(/^\.\.[\\\/]/) && (je.Target = je.Target.slice(3));
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
function cu(e, r) {
  r = r || {}, sa(e, "META-INF/manifest.xml") && Cx(ft(e, "META-INF/manifest.xml"), r);
  var t = Xt(e, "styles.xml"), a = t && mh(Br(t)), n = Xt(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = gh(Br(n), r, a);
  return sa(e, "meta.xml") && (i.Props = ll(ft(e, "meta.xml"))), i.bookType = "ods", i;
}
function uu(e, r) {
  var t = gh(e, r);
  return t.bookType = "fods", t;
}
var x4 = (function() {
  var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""), r = "<office:document-styles " + Xi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>";
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
          t: for (var u = s + 1; u < e.length; ++u) switch (e[u]) {
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
function lu(e, r, t) {
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
var hu = /* @__PURE__ */ (function() {
  var e = function(n, i) {
    return vr(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, o, u) {
    var h = [];
    h.push('      <table:table table:name="' + vr(i.SheetNames[s]) + `" table:style-name="ta1">
`);
    var v = 0, d = 0, x = wt(n["!ref"] || "A1"), _ = n["!merges"] || [], y = 0, m = n["!data"] != null;
    if (n["!cols"]) for (d = 0; d <= x.e.c; ++d) h.push("        <table:table-column" + (n["!cols"][d] ? ' table:style-name="co' + n["!cols"][d].ods + '"' : "") + `></table:table-column>
`);
    var g = "", T = n["!rows"] || [];
    for (v = 0; v < x.s.r; ++v) g = T[v] ? ' table:style-name="ro' + T[v].ods + '"' : "", h.push("        <table:table-row" + g + `></table:table-row>
`);
    for (; v <= x.e.r; ++v) {
      for (g = T[v] ? ' table:style-name="ro' + T[v].ods + '"' : "", h.push("        <table:table-row" + g + `>
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
        var z = yr({ r: v, c: d }), F = m ? (n["!data"][v] || [])[d] : n[z];
        if (F && F.f && (A["table:formula"] = vr(U_(F.f)), F.F && F.F.slice(0, z.length) == z)) {
          var U = wt(F.F);
          A["table:number-matrix-columns-spanned"] = U.e.c - U.s.c + 1, A["table:number-matrix-rows-spanned"] = U.e.r - U.s.r + 1;
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
            X = F.w || $r(F.v, u).toISOString(), A["office:value-type"] = "date", A["office:date-value"] = $r(F.v, u).toISOString(), A["table:style-name"] = "ce1";
            break;
          default:
            h.push(r);
            continue;
        }
        var D = e(X);
        if (F.l && F.l.Target) {
          var W = F.l.Target;
          W = W.charAt(0) == "#" ? "#" + rh(W.slice(1)) : W, W.charAt(0) != "#" && !W.match(/^\w+:/) && (W = "../" + W), D = Ae("text:a", D, { "xlink:href": W.replace(/&/g, "&amp;") });
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
    return (i.Workbook || {}).Names && h.push(lu(i.Workbook.Names, i.SheetNames, s)), h.push(`      </table:table>
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
          cn(d), d.ods = s;
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
    var o = {}, u = 69;
    return i.SheetNames.map(function(h) {
      return i.Sheets[h];
    }).forEach(function(h) {
      if (h) {
        var v = h["!data"] != null;
        if (h["!ref"]) for (var d = wt(h["!ref"]), x = 0; x <= d.e.r; ++x) for (var _ = 0; _ <= d.e.c; ++_) {
          var y = v ? (h["!data"][x] || [])[_] : h[yr({ r: x, c: _ })];
          if (!(!y || !y.z || y.z.toLowerCase() == "general") && !o[y.z]) {
            var m = p4(y.z, "N" + u);
            m && (o[y.z] = "N" + u, ++u, n.push(m + `
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
    var f = [at], o = Xi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }), u = Xi({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
    s.bookType == "fods" ? (f.push("<office:document" + o + u + `>
`), f.push(ul().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
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
    return (i.Workbook || {}).Names && f.push(lu(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function _h(e, r) {
  if (r.bookType == "fods") return hu(e, r);
  var t = Yf(), a = "", n = [], i = [];
  return a = "mimetype", hr(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", hr(t, a, hu(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", hr(t, a, x4(e, r)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", hr(t, a, at + ul()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", hr(t, a, Ox(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", hr(t, a, Ix(n)), t;
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
function _a(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Br(Oa(e));
}
function Ut(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Vt(Da(e));
}
function ln(e) {
  for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
  var a = new Uint8Array(r), n = 0;
  for (t = 0; t < e.length; ++t) {
    var i = e[t], s = i.length;
    if (s < 250) for (var f = 0; f < s; ++f) a[n++] = i[f];
    else a.set(i, n), n += s;
  }
  return a;
}
function Ui(e) {
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
function Qi(e, r) {
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
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(Qi(e, r));
  return t;
}
function yh(e) {
  return ln(e.map(function(r) {
    return er(r);
  }));
}
function dr(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function De(e) {
  for (var r = [], t = { l: 0 }; t.l < e.length; ) {
    var a = t.l, n = Qi(e, t), i = n & 7;
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
          var o = Qi(e, t);
          s = e[tt](t.l, t.l + o), t.l += o;
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
  }), ln(r);
}
function hn(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function es(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = Qi(e, a), i = De(e[tt](a.l, a.l + n));
    a.l += n;
    var s = { id: dr(i[1][0].data), messages: [] };
    i[2].forEach(function(f) {
      var o = De(f.data), u = dr(o[3][0].data);
      s.messages.push({ meta: o, data: e[tt](a.l, a.l + u) }), a.l += u;
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
      n.push(s.data), s.meta[3] = [{ type: 0, data: er(s.data.length) }], a[2].push({ data: tr(s.meta), type: 2 });
    });
    var i = tr(a);
    r.push(er(i.length)), r.push(i), n.forEach(function(s) {
      return r.push(s);
    });
  }), ln(r);
}
function g4(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = { l: 0 }, a = Qi(r, t), n = [], i = t.l; i < r.length; ) {
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
      n.length > 25 && (n = [ln(n)]);
    }
  }
  for (var x = 0, _ = 0; _ < n.length; ++_) x += n[_].length;
  if (x != a) throw new Error("Unexpected length: ".concat(x, " != ").concat(a));
  return n;
}
function rs(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, g4(a, e[tt](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : ln(r);
}
function ni(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = er(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[tt](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return ln(r);
}
var _4 = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function kh(e, r, t, a, n) {
  var i, s, f, o, u = r & 255, h = r >> 8, v = h >= 5 ? n : a;
  e: if (t & (h > 4 ? 8 : 4) && e.t == "n" && u == 7) {
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
    var T = [], E = [];
    x == 1 && (g = m / 604800, _ == 1 ? E.push('d"d"') : (g |= 0, m -= 604800 * g), T.push(g + (d == 2 ? " week" + (g == 1 ? "" : "s") : d == 1 ? "w" : ""))), x <= 2 && _ >= 2 && (g = m / 86400, _ > 2 && (g |= 0, m -= 86400 * g), E.push('d"d"'), T.push(g + (d == 2 ? " day" + (g == 1 ? "" : "s") : d == 1 ? "d" : ""))), x <= 4 && _ >= 4 && (g = m / 3600, _ > 4 && (g |= 0, m -= 3600 * g), E.push((x >= 4 ? "[h]" : "h") + '"h"'), T.push(g + (d == 2 ? " hour" + (g == 1 ? "" : "s") : d == 1 ? "h" : ""))), x <= 8 && _ >= 8 && (g = m / 60, _ > 8 && (g |= 0, m -= 60 * g), E.push((x >= 8 ? "[m]" : "m") + '"m"'), d == 0 ? T.push((x == 8 && _ == 8 || g >= 10 ? "" : "0") + g) : T.push(g + (d == 2 ? " minute" + (g == 1 ? "" : "s") : d == 1 ? "m" : ""))), x <= 16 && _ >= 16 && (g = m, _ > 16 && (g |= 0, m -= g), E.push((x >= 16 ? "[s]" : "s") + '"s"'), d == 0 ? T.push((_ == 16 && x == 16 || g >= 10 ? "" : "0") + g) : T.push(g + (d == 2 ? " second" + (g == 1 ? "" : "s") : d == 1 ? "s" : ""))), _ >= 32 && (g = Math.round(1e3 * m), x < 32 && E.push('.000"ms"'), d == 0 ? T.push((g >= 100 ? "" : g >= 10 ? "0" : "00") + g) : T.push(g + (d == 2 ? " millisecond" + (g == 1 ? "" : "s") : d == 1 ? "ms" : ""))), e.w = T.join(d == 0 ? ":" : " "), e.z = E.join(d == 0 ? '":"' : " "), d == 0 && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
  }
}
function w4(e, r, t, a) {
  var n = Ga(e), i = n.getUint32(4, true), s = -1, f = -1, o = -1, u = NaN, h = 0, v = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
  i & 2 && (o = n.getUint32(d, true), d += 4), d += Ui(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(d, true), d += 4), d += Ui(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(d, true), d += 4), i & 32 && (u = n.getFloat64(d, true), d += 8), i & 64 && (v.setTime(v.getTime() + (h = n.getFloat64(d, true)) * 1e3), d += 8), t > 1 && (i = n.getUint32(8, true) >>> 16, i & 255 && (o == -1 && (o = n.getUint32(d, true)), d += 4));
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
  return o > -1 && kh(x, _ | t << 8, i, r.ofmt[o], r.nfmt[o]), _ == 7 && (x.v /= 86400), x;
}
function y4(e, r, t) {
  var a = Ga(e);
  a.getUint32(4, true);
  var n = a.getUint32(8, true), i = 12, s = -1, f = -1, o = -1, u = NaN, h = NaN, v = 0, d = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (u = v4(e, i), i += 16), n & 2 && (h = a.getFloat64(i, true), i += 8), n & 4 && (d.setTime(d.getTime() + (v = a.getFloat64(i, true)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, true), i += 4), n & 16 && (s = a.getUint32(i, true), i += 4), i += Ui(n & 480) * 4, n & 512 && (a.getUint32(i, true), i += 4), i += Ui(n & 1024) * 4, n & 2048 && (a.getUint32(i, true), i += 4);
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
  if (i += Ui(n & 4096) * 4, n & 516096 && (o == -1 && (o = a.getUint32(i, true)), i += 4), n & 524288) {
    var m = a.getUint32(i, true);
    i += 4, r.cmnt[m] && (x.c = S4(r.cmnt[m]));
  }
  return o > -1 && kh(x, _ | 1280, n >> 13, r.ofmt[o], r.nfmt[o]), _ == 7 && (x.v /= 86400), x;
}
function vf(e, r) {
  var t = new Uint8Array(32), a = Ga(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && ua(e.z)) {
        t[1] = 5, a.setFloat64(n, (Va(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
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
          var f = r.rsst.findIndex(function(u) {
            var h;
            return u.v == s && u.l == ((h = e.l) == null ? void 0 : h.Target);
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
function mf(e, r) {
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
function Ct(e) {
  return tr([[], [{ type: 0, data: er(e) }]]);
}
function At(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? wh(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: yh(a) }]);
}
function Ba(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? wh(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: yh(a.filter(function(n) {
    return n != r;
  })) }];
}
function wn(e, r) {
  var t = De(r.data), a = dr(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, o, u = De(s.data);
    if (u[1]) {
      var h = dr(u[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[h] = _a(u[3][0].data);
          break;
        case 8:
          {
            var v = e[br(u[9][0].data)][0], d = De(v.data), x = e[br(d[1][0].data)][0], _ = dr(x.meta[1][0].data);
            if (_ != 2001) throw new Error("2000 unexpected reference to ".concat(_));
            var y = De(x.data), m = { v: y[3].map(function(E) {
              return _a(E.data);
            }).join("") };
            i[h] = m;
            e: if ((f = y == null ? void 0 : y[11]) != null && f[0]) {
              var g = (o = De(y[11][0].data)) == null ? void 0 : o[1];
              if (!g) break e;
              g.forEach(function(E) {
                var A, X, z, F = De(E.data);
                if ((A = F[2]) != null && A[0]) {
                  var U = e[br((X = F[2]) == null ? void 0 : X[0].data)][0], D = dr(U.meta[1][0].data);
                  switch (D) {
                    case 2032:
                      var W = De(U.data);
                      (z = W == null ? void 0 : W[2]) != null && z[0] && !m.l && (m.l = _a(W[2][0].data));
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
          i[h] = De(u[6][0].data);
          break;
        case 3:
          i[h] = De(u[5][0].data);
          break;
        case 10:
          {
            var T = e[br(u[10][0].data)][0];
            i[h] = Eh(e, T.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function E4(e, r) {
  var t, a, n, i, s, f, o, u, h, v, d, x, _, y, m = De(e), g = dr(m[1][0].data) >>> 0, T = dr(m[2][0].data) >>> 0, E = ((a = (t = m[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && dr(m[8][0].data) > 0 || false, A, X;
  if ((i = (n = m[7]) == null ? void 0 : n[0]) != null && i.data && r != 0) A = (f = (s = m[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, X = (u = (o = m[6]) == null ? void 0 : o[0]) == null ? void 0 : u.data;
  else if ((v = (h = m[4]) == null ? void 0 : h[0]) != null && v.data && r != 1) A = (x = (d = m[4]) == null ? void 0 : d[0]) == null ? void 0 : x.data, X = (y = (_ = m[3]) == null ? void 0 : _[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var z = E ? 4 : 1, F = Ga(A), U = [], D = 0; D < A.length / 2; ++D) {
    var W = F.getUint16(D * 2, true);
    W < 65535 && U.push([D, W]);
  }
  if (U.length != T) throw "Expected ".concat(T, " cells, found ").concat(U.length);
  var K = [];
  for (D = 0; D < U.length - 1; ++D) K[U[D][0]] = X[tt](U[D][1] * z, U[D + 1][1] * z);
  return U.length >= 1 && (K[U[U.length - 1][0]] = X[tt](U[U.length - 1][1] * z)), { R: g, cells: K };
}
function T4(e, r) {
  var t, a = De(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (dr(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = hn(a[5], function(s) {
    return E4(s, n);
  });
  return { nrows: dr(a[4][0].data) >>> 0, data: i.reduce(function(s, f) {
    return s[f.R] || (s[f.R] = []), f.cells.forEach(function(o, u) {
      if (s[f.R][u]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(u));
      s[f.R][u] = o;
    }), s;
  }, []) };
}
function Eh(e, r) {
  var t, a, n, i, s, f, o, u, h, v, d = { t: "", a: "" }, x = De(r);
  if ((a = (t = x == null ? void 0 : x[1]) == null ? void 0 : t[0]) != null && a.data && (d.t = _a((i = (n = x == null ? void 0 : x[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = x == null ? void 0 : x[3]) == null ? void 0 : s[0]) != null && f.data) {
    var _ = e[br((u = (o = x == null ? void 0 : x[3]) == null ? void 0 : o[0]) == null ? void 0 : u.data)][0], y = De(_.data);
    (v = (h = y[1]) == null ? void 0 : h[0]) != null && v.data && (d.a = _a(y[1][0].data));
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
  var n, i, s, f, o, u, h, v, d, x, _, y, m, g, T = De(r.data), E = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (E.e.r = (dr(T[6][0].data) >>> 0) - 1, E.e.r < 0) throw new Error("Invalid row varint ".concat(T[6][0].data));
  if (E.e.c = (dr(T[7][0].data) >>> 0) - 1, E.e.c < 0) throw new Error("Invalid col varint ".concat(T[7][0].data));
  t["!ref"] = xr(E);
  var A = t["!data"] != null, X = t, z = De(T[4][0].data), F = _4();
  (n = z[4]) != null && n[0] && (F.sst = wn(e, e[br(z[4][0].data)][0])), (i = z[6]) != null && i[0] && (F.fmla = wn(e, e[br(z[6][0].data)][0])), (s = z[11]) != null && s[0] && (F.ofmt = wn(e, e[br(z[11][0].data)][0])), (f = z[12]) != null && f[0] && (F.ferr = wn(e, e[br(z[12][0].data)][0])), (o = z[17]) != null && o[0] && (F.rsst = wn(e, e[br(z[17][0].data)][0])), (u = z[19]) != null && u[0] && (F.cmnt = wn(e, e[br(z[19][0].data)][0])), (h = z[22]) != null && h[0] && (F.nfmt = wn(e, e[br(z[22][0].data)][0]));
  var U = De(z[3][0].data), D = 0;
  if (!((v = z[9]) != null && v[0])) throw "NUMBERS file missing row tree";
  var W = De(z[9][0].data)[1].map(function(me) {
    return De(me.data);
  });
  if (W.forEach(function(me) {
    D = dr(me[1][0].data);
    var ze = dr(me[2][0].data), ke = U[1][ze];
    if (!ke) throw "NUMBERS missing tile " + ze;
    var Be = De(ke.data), Qe = e[br(Be[2][0].data)][0], he = dr(Qe.meta[1][0].data);
    if (he != 6002) throw new Error("6001 unexpected reference to ".concat(he));
    var fr = T4(e, Qe);
    fr.data.forEach(function(Me, Te) {
      Me.forEach(function(ye, je) {
        var Ge = k4(ye, F, a);
        Ge && (A ? (X["!data"][D + Te] || (X["!data"][D + Te] = []), X["!data"][D + Te][je] = Ge) : t[gr(je) + Fr(D + Te)] = Ge);
      });
    }), D += fr.nrows;
  }), (d = z[13]) != null && d[0]) {
    var K = e[br(z[13][0].data)][0], ee = dr(K.meta[1][0].data);
    if (ee != 6144) throw new Error("Expected merge type 6144, found ".concat(ee));
    t["!merges"] = (x = De(K.data)) == null ? void 0 : x[1].map(function(me) {
      var ze = De(me.data), ke = Ga(De(ze[1][0].data)[1][0].data), Be = Ga(De(ze[2][0].data)[1][0].data);
      return { s: { r: ke.getUint16(0, true), c: ke.getUint16(2, true) }, e: { r: ke.getUint16(0, true) + Be.getUint16(0, true) - 1, c: ke.getUint16(2, true) + Be.getUint16(2, true) - 1 } };
    });
  }
  if (!((_ = t["!merges"]) != null && _.length) && ((y = T[47]) != null && y[0])) {
    var de = De(T[47][0].data);
    if ((m = de[2]) != null && m[0]) {
      var Pe = De(de[2][0].data);
      (g = Pe[3]) != null && g[0] && (t["!merges"] = hn(Pe[3], function(me) {
        var ze, ke, Be, Qe, he, fr = De(me), Me = De(fr[2][0].data), Te = De(Me[1][0].data);
        if ((ze = Te[1]) != null && ze[0]) {
          var ye = De(Te[1][0].data), je = dr(ye[1][0].data);
          if (je == 67) {
            var Ge = De(ye[40][0].data);
            if (!(!((ke = Ge[3]) != null && ke[0]) || !((Be = Ge[4]) != null && Be[0]))) {
              var Ze = De(Ge[3][0].data), P = De(Ge[4][0].data), M = dr(Ze[1][0].data), G = (Qe = Ze[2]) != null && Qe[0] ? dr(Ze[2][0].data) : M, V = dr(P[1][0].data), ue = (he = P[2]) != null && he[0] ? dr(P[2][0].data) : V;
              return { s: { r: V, c: M }, e: { r: ue, c: G } };
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
  var a, n = De(r.data), i = { name: (a = n[1]) != null && a[0] ? _a(n[1][0].data) : "", sheets: [] }, s = hn(n[2], br);
  return s.forEach(function(f) {
    e[f].forEach(function(o) {
      var u = dr(o.meta[1][0].data);
      u == 6e3 && i.sheets.push(A4(e, o, t));
    });
  }), i;
}
function I4(e, r, t) {
  var a, n = Eo();
  n.Workbook = { WBProps: { date1904: true } };
  var i = De(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = hn(i[1], br);
  if (s.forEach(function(f) {
    e[f].forEach(function(o) {
      var u = dr(o.meta[1][0].data);
      if (u == 2) {
        var h = C4(e, o, t);
        h.sheets.forEach(function(v, d) {
          ls(n, v, d == 0 ? h.name : h.name + "_" + d, true);
        });
      }
    });
  }), n.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return n.bookType = "numbers", n;
}
function gf(e, r) {
  var t, a, n, i, s, f, o, u = {}, h = [];
  if (e.FullPaths.forEach(function(d) {
    if (d.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(d) {
    if (d.name.match(/\.iwa$/) && d.content[0] == 0) {
      var x;
      try {
        x = rs(d.content);
      } catch (y) {
        return console.log("?? " + d.content.length + " " + (y.message || y));
      }
      var _;
      try {
        _ = es(x);
      } catch (y) {
        return console.log("## " + (y.message || y));
      }
      _.forEach(function(y) {
        u[y.id] = y.messages, h.push(y.id);
      });
    }
  }), !h.length) throw new Error("File has no messages");
  if ((n = (a = (t = u == null ? void 0 : u[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && dr(u[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var v = ((o = (f = (s = (i = u == null ? void 0 : u[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : o[0].data) && dr(u[1][0].meta[1][0].data) == 1 && u[1][0];
  if (v || h.forEach(function(d) {
    u[d].forEach(function(x) {
      var _ = dr(x.meta[1][0].data) >>> 0;
      if (_ == 1) if (!v) v = x;
      else throw new Error("Document has multiple roots");
    });
  }), !v) throw new Error("Cannot find Document root");
  return I4(u, v, r);
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
    var u = new Uint8Array(2 * e.length);
    u.set(s[4][0].data), s[4][0].data = u;
  }
  for (var h = Ga(s[7][0].data), v = 0, d = [], x = Ga(s[4][0].data), _ = 0, y = [], m = 4, g = 0; g < e.length; ++g) {
    if (e[g] == null || e[g].t == "z" && !((i = e[g].c) != null && i.length) || e[g].t == "e") {
      h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535);
      continue;
    }
    h.setUint16(g * 2, v / m, true), x.setUint16(g * 2, _ / m, true);
    var T, E;
    switch (e[g].t) {
      case "d":
        if (e[g].v instanceof Date) {
          T = vf(e[g], r), E = mf(e[g], r);
          break;
        }
        T = vf(e[g], r), E = mf(e[g], r);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        T = vf(e[g], r), E = mf(e[g], r);
        break;
      default:
        throw new Error("Unsupported value " + e[g]);
    }
    d.push(T), v += T.length, y.push(E), _ += E.length, ++f;
  }
  for (s[2][0].data = er(f), s[5][0].data = er(5); g < s[7][0].data.length / 2; ++g) h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535, true);
  return s[6][0].data = ln(d), s[3][0].data = ln(y), s[8] = [{ type: 0, data: er(1) }], s;
}
function Nf(e, r) {
  return { meta: [[], [{ type: 0, data: er(e) }]], data: r };
}
function Ca(e, r) {
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
    n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0 && es(rs(n.content)).forEach(function(s) {
      t.push(s.id), r[s.id] = { deps: [], location: i, type: dr(s.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(a) {
    a.name.match(/\.iwa/) && a.content[0] == 0 && es(rs(a.content)).forEach(function(n) {
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
function Vs(e, r, t) {
  return tr([[], [{ type: 0, data: er(1) }], [], [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }], [], [], [], [], [], [{ type: 0, data: er(1) }]]);
}
function du(e) {
  switch (e) {
    case 0:
      return Vs(99, 222, 171);
    case 1:
      return Vs(162, 197, 240);
    case 2:
      return Vs(255, 189, 189);
  }
  return Vs(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function N4(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = ir.read(r.numbers, { type: "base64" }), a = O4(t), n = Ia(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = hn(De(n.messages[0].data)[1], br);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (P4(t, a, f + 1), n = Ia(t, a, 1), i = hn(De(n.messages[0].data)[1], br)), B4(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function Mr(e, r, t, a) {
  var n = ir.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = es(rs(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = ni(ai(i)), n.size = n.content.length;
}
function Ia(e, r, t) {
  var a = ir.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = es(rs(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function Rf(e, r, t) {
  e[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(r) }], [{ type: 2, data: Ut(t.replace(/-[\s\S]*$/, "")) }], [{ type: 2, data: Ut(t) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), e[1] = [{ type: 0, data: er(Math.max(r + 1, dr(e[1][0].data))) }];
}
function yn(e, r, t, a, n, i) {
  i || (i = Ca({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, ir.utils.cfb_add(e, s, ni(ai([{ id: i, messages: [Nf(r, tr(t))] }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Mr(e, n, 2, function(o) {
    var u = De(o.messages[0].data);
    Rf(u, i || 0, f), o.messages[0].data = tr(u);
  }), i;
}
function Kt(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, u, h = De(f.data);
    return (o = h[3]) != null && o[0] ? _a(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && _a(h[2][0].data) == n);
  }), s = De(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({ type: 2, data: tr([[], [{ type: 0, data: er(f) }]]) });
  }), e[3][i].data = tr(s);
}
function R4(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, u, h = De(f.data);
    return (o = h[3]) != null && o[0] ? _a(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && _a(h[2][0].data) == n);
  }), s = De(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return dr(De(f.data)[1][0].data) != a;
  }), e[3][i].data = tr(s);
}
function P4(e, r, t) {
  var a = -1, n = -1, i = {};
  Mr(e, r, 1, function(o, u) {
    var h = De(o.messages[0].data);
    a = br(De(o.messages[0].data)[1][0].data), n = Ca({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, At(o, n), h[1].push({ type: 2, data: Ct(n) });
    var v = Ia(e, r, a);
    v.id = n, r[1].location == r[n].location ? u.push(v) : Mr(e, r, n, function(d, x) {
      return x.push(v);
    }), o.messages[0].data = tr(h);
  });
  var s = -1;
  Mr(e, r, n, function(o, u) {
    for (var h = De(o.messages[0].data), v = 3; v <= 69; ++v) delete h[v];
    var d = hn(h[2], br);
    d.forEach(function(_) {
      return Ba(o, _);
    }), s = Ca({ deps: [n], location: r[d[0]].location, type: r[d[0]].type }, r), At(o, s), i[d[0]] = s, h[2] = [{ type: 2, data: Ct(s) }];
    var x = Ia(e, r, d[0]);
    x.id = s, r[d[0]].location == r[n].location ? u.push(x) : (Mr(e, r, 2, function(_) {
      var y = De(_.messages[0].data);
      Kt(y, r, n, s), _.messages[0].data = tr(y);
    }), Mr(e, r, s, function(_, y) {
      return y.push(x);
    })), o.messages[0].data = tr(h);
  });
  var f = -1;
  Mr(e, r, s, function(o, u) {
    for (var h = De(o.messages[0].data), v = De(h[1][0].data), d = 3; d <= 69; ++d) delete v[d];
    var x = br(v[2][0].data);
    v[2][0].data = Ct(i[x]), h[1][0].data = tr(v);
    var _ = br(h[2][0].data);
    Ba(o, _), f = Ca({ deps: [s], location: r[_].location, type: r[_].type }, r), At(o, f), i[_] = f, h[2][0].data = Ct(f);
    var y = Ia(e, r, _);
    y.id = f, r[s].location == r[f].location ? u.push(y) : Mr(e, r, f, function(m, g) {
      return g.push(y);
    }), o.messages[0].data = tr(h);
  }), Mr(e, r, f, function(o, u) {
    var h, v, d = De(o.messages[0].data), x = _a(d[1][0].data), _ = x.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (d[1][0].data = Ut(_), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(X) {
      return delete d[X];
    }), d[45]) {
      var y = De(d[45][0].data), m = br(y[1][0].data);
      Ba(o, m), delete d[45];
    }
    if (d[70]) {
      var g = De(d[70][0].data);
      (h = g[2]) == null || h.forEach(function(X) {
        var z = De(X.data);
        [2, 3].map(function(F) {
          return z[F][0];
        }).forEach(function(F) {
          var U = De(F.data);
          if (U[8]) {
            var D = br(U[8][0].data);
            Ba(o, D);
          }
        });
      }), delete d[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function(X) {
      if (d[X]) {
        var z = br(d[X][0].data);
        delete d[X], Ba(o, z);
      }
    });
    var T = De(d[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(X) {
        var z;
        if ((z = T[X]) != null && z[0]) {
          var F = br(T[X][0].data), U = Ca({ deps: [f], location: r[F].location, type: r[F].type }, r);
          Ba(o, F), At(o, U), i[F] = U;
          var D = Ia(e, r, F);
          if (D.id = U, r[F].location == r[f].location) u.push(D);
          else {
            r[U].location = r[F].location.replace(F.toString(), U.toString()), r[U].location == r[F].location && (r[U].location = r[U].location.replace(/\.iwa/, "-".concat(U, ".iwa"))), ir.utils.cfb_add(e, r[U].location, ni(ai([D])));
            var W = r[U].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Mr(e, r, 2, function(K) {
              var ee = De(K.messages[0].data);
              Rf(ee, U, W), Kt(ee, r, f, U), K.messages[0].data = tr(ee);
            });
          }
          T[X][0].data = Ct(U);
        }
      });
      var E = De(T[1][0].data);
      (v = E[2]) == null || v.forEach(function(X) {
        var z = br(X.data), F = Ca({ deps: [f], location: r[z].location, type: r[z].type }, r);
        Ba(o, z), At(o, F), i[z] = F;
        var U = Ia(e, r, z);
        if (U.id = F, r[z].location == r[f].location) u.push(U);
        else {
          r[F].location = r[z].location.replace(z.toString(), F.toString()), r[F].location == r[z].location && (r[F].location = r[F].location.replace(/\.iwa/, "-".concat(F, ".iwa"))), ir.utils.cfb_add(e, r[F].location, ni(ai([U])));
          var D = r[F].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Mr(e, r, 2, function(W) {
            var K = De(W.messages[0].data);
            Rf(K, F, D), Kt(K, r, f, F), W.messages[0].data = tr(K);
          });
        }
        X.data = Ct(F);
      }), T[1][0].data = tr(E);
      var A = De(T[3][0].data);
      A[1].forEach(function(X) {
        var z = De(X.data), F = br(z[2][0].data), U = i[F];
        if (!i[F]) {
          U = Ca({ deps: [f], location: "", type: r[F].type }, r), r[U].location = "Root Entry/Index/Tables/Tile-".concat(U, ".iwa"), i[F] = U;
          var D = Ia(e, r, F);
          D.id = U, Ba(o, F), At(o, U), ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(U, ".iwa"), ni(ai([D]))), Mr(e, r, 2, function(W) {
            var K = De(W.messages[0].data);
            K[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(U) }], [{ type: 2, data: Ut("Tables/Tile") }], [{ type: 2, data: Ut("Tables/Tile-".concat(U)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), K[1] = [{ type: 0, data: er(Math.max(U + 1, dr(K[1][0].data))) }], Kt(K, r, f, U), W.messages[0].data = tr(K);
          });
        }
        z[2][0].data = Ct(U), X.data = tr(z);
      }), T[3][0].data = tr(A);
    }
    d[4][0].data = tr(T), o.messages[0].data = tr(d);
  });
}
function B4(e, r, t, a, n, i) {
  var s = [];
  Mr(e, r, i, function(u) {
    var h = De(u.messages[0].data);
    h[1] = [{ type: 2, data: Ut(a) }], s = hn(h[2], br), u.messages[0].data = tr(h);
  });
  var f = Ia(e, r, s[0]), o = br(De(f.messages[0].data)[2][0].data);
  Mr(e, r, o, function(u, h) {
    return L4(e, r, t, u, h, o);
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
    for (var u = [], h = 0; h <= s.e.c; ++h) u[h] = gr(h);
    for (var v = 0; v <= s.e.r; ++v) {
      o[v] = [];
      var d = "" + (v + 1);
      for (h = 0; h <= s.e.c; ++h) {
        var x = t[u[h] + d];
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
          Ze[1][0].data = er(Ge), Ze[4][0].data = er(o[Ge].length), je[2][Ge] = { type: je[2][0].type, data: tr(Ze) };
        }
        Me.messages[0].data = tr(je);
      });
      var T = br(m[2][0].data);
      Mr(e, r, T, function(Me, Te) {
        for (var ye = De(Me.messages[0].data), je = 0; je <= s.e.c; ++je) {
          var Ge = De(ye[2][0].data);
          Ge[1][0].data = er(je), Ge[4][0].data = er(s.e.r + 1), ye[2][je] = { type: ye[2][0].type, data: tr(Ge) };
        }
        Me.messages[0].data = tr(ye);
      });
      var E = De(m[9][0].data);
      E[1] = [];
      var A = De(m[3][0].data);
      {
        var X = 256;
        A[2] = [{ type: 0, data: er(X) }];
        var z = br(De(A[1][0].data)[2][0].data), F = (function() {
          var Me = Ia(e, r, 2), Te = De(Me.messages[0].data), ye = Te[3].filter(function(je) {
            return dr(De(je.data)[1][0].data) == z;
          });
          return (ye == null ? void 0 : ye.length) ? dr(De(ye[0].data)[12][0].data) : 0;
        })();
        ir.utils.cfb_del(e, r[z].location), Mr(e, r, 2, function(Me) {
          var Te = De(Me.messages[0].data);
          Te[3] = Te[3].filter(function(ye) {
            return dr(De(ye.data)[1][0].data) != z;
          }), R4(Te, r, i, z), Me.messages[0].data = tr(Te);
        }), Ba(a, z), A[1] = [];
        for (var U = Math.ceil((s.e.r + 1) / X), D = 0; D < U; ++D) {
          var W = Ca({ deps: [], location: "", type: 6002 }, r);
          r[W].location = "Root Entry/Index/Tables/Tile-".concat(W, ".iwa");
          for (var K = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min(s.e.r + 1, (D + 1) * X)) }], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min((D + 1) * X, s.e.r + 1) - D * X) }], [], [{ type: 0, data: er(5) }], [{ type: 0, data: er(1) }], [{ type: 0, data: er(1) }]], ee = D * X; ee <= Math.min(s.e.r, (D + 1) * X - 1); ++ee) {
            var de = D4(o[ee], _);
            de[1][0].data = er(ee - D * X), K[5].push({ data: tr(de), type: 2 });
          }
          A[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(D) }], [{ type: 2, data: Ct(W) }]]) });
          var Pe = { id: W, messages: [Nf(6002, tr(K))] }, me = ni(ai([Pe]));
          ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(W, ".iwa"), me), Mr(e, r, 2, function(Me) {
            var Te = De(Me.messages[0].data);
            Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(W) }], [{ type: 2, data: Ut("Tables/Tile") }], [{ type: 2, data: Ut("Tables/Tile-".concat(W)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(F) }]]) }), Te[1] = [{ type: 0, data: er(Math.max(W + 1, dr(Te[1][0].data))) }], Kt(Te, r, i, W), Me.messages[0].data = tr(Te);
          }), At(a, W), E[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(D * X) }], [{ type: 0, data: er(D) }]]) });
        }
      }
      if (m[3][0].data = tr(A), m[9][0].data = tr(E), m[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var ze = Ca({ type: 6144, deps: [i], location: r[i].location }, r);
        n.push({ id: ze, messages: [Nf(6144, tr([[], t["!merges"].map(function(Me) {
          return { type: 2, data: tr([[], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.s.r, Me.s.c]).buffer) }]]) }], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.e.r - Me.s.r + 1, Me.e.c - Me.s.c + 1]).buffer) }]]) }]]) };
        })]))] }), m[13] = [{ type: 2, data: Ct(ze) }], Mr(e, r, 2, function(Me) {
          var Te = De(Me.messages[0].data);
          Kt(Te, r, i, ze), Me.messages[0].data = tr(Te);
        }), At(a, ze);
      } else delete m[13];
      var ke = br(m[4][0].data);
      Mr(e, r, ke, function(Me) {
        var Te = De(Me.messages[0].data);
        Te[3] = [], _.sst.forEach(function(ye, je) {
          je != 0 && Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [{ type: 2, data: Ut(ye) }]]) });
        }), Me.messages[0].data = tr(Te);
      });
      var Be = br(m[17][0].data);
      if (Mr(e, r, Be, function(Me) {
        var Te = De(Me.messages[0].data);
        Te[3] = [];
        var ye = [904980, 903835, 903815, 903845];
        _.rsst.forEach(function(je, Ge) {
          if (Ge != 0) {
            var Ze = [[], [{ type: 0, data: new Uint8Array([5]) }], [], [{ type: 2, data: Ut(je.v) }]];
            Ze[10] = [{ type: 0, data: new Uint8Array([1]) }], Ze[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], Ze[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], Ze[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], Ze[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], Ze[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], Ze[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var P = Ca({ deps: [], location: "", type: 2001 }, r), M = [];
            if (je.l) {
              var G = yn(e, 2032, [[], [], [{ type: 2, data: Ut(je.l) }]], "/Index/Tables/DataList", r);
              Ze[11] = [];
              var V = [[], []];
              V[1] || (V[1] = []), V[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(0) }], [{ type: 2, data: Ct(G) }]]) }), Ze[11][0] = { type: 2, data: tr(V) }, M.push(G);
            }
            yn(e, 2001, Ze, "/Index/Tables/DataList", r, P), Mr(e, r, P, function(O) {
              ye.forEach(function(Ce) {
                return At(O, Ce);
              }), M.forEach(function(Ce) {
                return At(O, Ce);
              });
            });
            var ue = yn(e, 6218, [[], [{ type: 2, data: Ct(P) }], [], [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]], "/Index/Tables/DataList", r);
            Mr(e, r, ue, function(O) {
              return At(O, P);
            }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [{ type: 2, data: Ct(ue) }]]) }), At(Me, ue), Mr(e, r, 2, function(O) {
              var Ce = De(O.messages[0].data);
              Kt(Ce, r, Be, ue), Kt(Ce, r, ue, P), Kt(Ce, r, P, M), Kt(Ce, r, P, ye), O.messages[0].data = tr(Ce);
            });
          }
        }), Me.messages[0].data = tr(Te);
      }), _.cmnt.length > 1) {
        var Qe = br(m[19][0].data), he = {}, fr = 0;
        Mr(e, r, Qe, function(Me) {
          var Te = De(Me.messages[0].data);
          Te[3] = [], _.cmnt.forEach(function(ye, je) {
            if (je != 0) {
              var Ge = [];
              ye.replies && ye.replies.forEach(function(M) {
                he[M.a || ""] || (he[M.a || ""] = yn(e, 212, [[], [{ type: 2, data: Ut(M.a || "") }], [{ type: 2, data: du(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
                var G = he[M.a || ""], V = yn(e, 3056, [[], [{ type: 2, data: Ut(M.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Ct(G) }]], "/Index/Tables/DataList", r);
                Mr(e, r, V, function(ue) {
                  return At(ue, G);
                }), Ge.push(V), Mr(e, r, 2, function(ue) {
                  var O = De(ue.messages[0].data);
                  Kt(O, r, V, G), ue.messages[0].data = tr(O);
                });
              }), he[ye.a || ""] || (he[ye.a || ""] = yn(e, 212, [[], [{ type: 2, data: Ut(ye.a || "") }], [{ type: 2, data: du(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
              var Ze = he[ye.a || ""], P = yn(e, 3056, [[], [{ type: 2, data: Ut(ye.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Ct(Ze) }], Ge.map(function(M) {
                return { type: 2, data: Ct(M) };
              }), [{ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(0) }]]) }]], "/Index/Tables/DataList", r);
              Mr(e, r, P, function(M) {
                At(M, Ze), Ge.forEach(function(G) {
                  return At(M, G);
                });
              }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [], [{ type: 2, data: Ct(P) }]]) }), At(Me, P), Mr(e, r, 2, function(M) {
                var G = De(M.messages[0].data);
                Kt(G, r, Qe, P), Kt(G, r, P, Ze), Ge.length && Kt(G, r, P, Ge), M.messages[0].data = tr(G);
              });
            }
          }), Te[2][0].data = er(_.cmnt.length + 1), Me.messages[0].data = tr(Te);
        });
      }
    }
    y[4][0].data = tr(m);
  }
  a.messages[0].data = tr(y);
}
function Th(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function _o(e) {
  Th([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function wo(e) {
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
    var o = Zn(e["!legdrawel"].Target, a), u = Xt(t, o, true);
    u && Lg(Br(u), e, f || []);
  }
}
function H4(e, r, t, a, n, i, s, f, o, u, h, v) {
  try {
    i[a] = Ni(Xt(e, t, true), r);
    var d = ft(e, r), x;
    switch (f) {
      case "sheet":
        x = sk(d, r, n, o, i[a], u, h, v);
        break;
      case "chart":
        if (x = fk(d, r, n, o, i[a], u, h, v), !x || !x["!drawel"]) break;
        var _ = Zn(x["!drawel"].Target, r), y = zi(_), m = Bg(Xt(e, _, true), Ni(Xt(e, y, true), _)), g = Zn(m, _), T = zi(g);
        x = Cy(Xt(e, g, true), g, o, Ni(Xt(e, T, true), g), u, x);
        break;
      case "macro":
        x = ok(d, r, n, o, i[a], u, h, v);
        break;
      case "dialog":
        x = ck(d, r, n, o, i[a], u, h, v);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = x;
    var E = [], A = [];
    i && i[a] && Gr(i[a]).forEach(function(X) {
      var z = "";
      if (i[a][X].Type == wr.CMNT) {
        if (z = Zn(i[a][X].Target, r), E = hk(ft(e, z, true), z, o), !E || !E.length) return;
        Yc(x, E, false);
      }
      i[a][X].Type == wr.TCMNT && (z = Zn(i[a][X].Target, r), A = A.concat(Hg(ft(e, z, true), o)));
    }), A && A.length && Yc(x, A, true, o.people || []), W4(x, f, e, r, n, o, u, E);
  } catch (X) {
    if (o.WTF) throw X;
  }
}
function na(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function V4(e, r) {
  if (ci(), r = r || {}, _o(r), sa(e, "META-INF/manifest.xml") || sa(e, "objectdata.xml")) return cu(e, r);
  if (sa(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof gf < "u") {
      if (e.FileIndex) return gf(e, r);
      var t = ir.utils.cfb_new();
      return mc(e).forEach(function(me) {
        hr(t, me, Rd(e, me));
      }), gf(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!sa(e, "[Content_Types].xml")) {
    if (sa(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (sa(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = ir.find(e, "Index.zip");
    if (a) return r = Vr(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? ii(new Uint8Array(a.content), r) : ii(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = mc(e), i = Fx(Xt(e, "[Content_Types].xml")), s = false, f, o;
  if (i.workbooks.length === 0 && (o = "xl/workbook.xml", ft(e, o, true) && i.workbooks.push(o)), i.workbooks.length === 0) {
    if (o = "xl/workbook.bin", !ft(e, o, true)) throw new Error("Could not find workbook");
    i.workbooks.push(o), s = true;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = true);
  var u = {}, h = {};
  if (!r.bookSheets && !r.bookProps) {
    if (Pi = [], i.sst) try {
      Pi = lk(ft(e, na(i.sst)), i.sst, r);
    } catch (me) {
      if (r.WTF) throw me;
    }
    r.cellStyles && i.themes.length && (u = Xl(Xt(e, i.themes[0].replace(/^\//, ""), true) || "", r)), i.style && (h = uk(ft(e, na(i.style)), i.style, u, r));
  }
  i.links.map(function(me) {
    try {
      var ze = Ni(Xt(e, zi(na(me))), me);
      return xk(ft(e, na(me)), ze, me, r);
    } catch {
    }
  });
  var v = ik(ft(e, na(i.workbooks[0])), i.workbooks[0], r), d = {}, x = "";
  i.coreprops.length && (x = ft(e, na(i.coreprops[0]), true), x && (d = ll(x)), i.extprops.length !== 0 && (x = ft(e, na(i.extprops[0]), true), x && Nx(x, d, r)));
  var _ = {};
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (x = Xt(e, na(i.custprops[0]), true), x && (_ = Px(x, r)));
  var y = {};
  if ((r.bookSheets || r.bookProps) && (v.Sheets ? f = v.Sheets.map(function(ze) {
    return ze.name;
  }) : d.Worksheets && d.SheetNames.length > 0 && (f = d.SheetNames), r.bookProps && (y.Props = d, y.Custprops = _), r.bookSheets && typeof f < "u" && (y.SheetNames = f), r.bookSheets ? y.SheetNames : r.bookProps)) return y;
  f = {};
  var m = {};
  r.bookDeps && i.calcchain && (m = dk(ft(e, na(i.calcchain)), i.calcchain));
  var g = 0, T = {}, E, A;
  {
    var X = v.Sheets;
    d.Worksheets = X.length, d.SheetNames = [];
    for (var z = 0; z != X.length; ++z) d.SheetNames[z] = X[z].name;
  }
  var F = s ? "bin" : "xml", U = i.workbooks[0].lastIndexOf("/"), D = (i.workbooks[0].slice(0, U + 1) + "_rels/" + i.workbooks[0].slice(U + 1) + ".rels").replace(/^\//, "");
  sa(e, D) || (D = "xl/_rels/workbook." + F + ".rels");
  var W = Ni(Xt(e, D, true), D.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = pk(ft(e, na(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = Vg(ft(e, na(i.people[0])), r)), W && (W = U4(W, v.Sheets));
  var K = ft(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (g = 0; g != d.Worksheets; ++g) {
    var ee = "sheet";
    if (W && W[g] ? (E = "xl/" + W[g][1].replace(/[\/]?xl\//, ""), sa(e, E) || (E = W[g][1]), sa(e, E) || (E = D.replace(/_rels\/[\S\s]*$/, "") + W[g][1]), ee = W[g][2]) : (E = "xl/worksheets/sheet" + (g + 1 - K) + "." + F, E = E.replace(/sheet0\./, "sheet.")), A = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
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
    H4(e, E, A, d.SheetNames[g], g, T, f, ee, r, v, u, h);
  }
  return y = { Directory: i, Workbook: v, Props: d, Custprops: _, Deps: m, Sheets: f, SheetNames: d.SheetNames, Strings: Pi, Styles: h, Themes: u, SSF: Vr(nr) }, r && r.bookFiles && (e.files ? (y.keys = n, y.files = e.files) : (y.keys = [], y.files = {}, e.FullPaths.forEach(function(me, ze) {
    me = me.replace(/^Root Entry[\/]/, ""), y.keys.push(me), y.files[me] = e.FileIndex[ze];
  }))), r && r.bookVBA && (i.vba.length > 0 ? y.vbaraw = ft(e, na(i.vba[0]), true) : i.defaults && i.defaults.bin === $g && (y.vbaraw = ft(e, "xl/vbaProject.bin", true))), y.bookType = s ? "xlsb" : "xlsx", y;
}
function X4(e, r) {
  var t = r || {}, a = "Workbook", n = ir.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (sm(n.content), a = "/!DataSpaces/DataSpaceMap", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = om(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = cm(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    lm(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = hm(n.content);
  if (a = "/EncryptedPackage", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function K4(e, r) {
  e && !e.SSF && (e.SSF = Vr(nr)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = l0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Bi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = true, n = fo();
  wo(r = r || {});
  var i = Yf(), s = "", f = 0;
  if (r.cellXfs = [], pn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, hl(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && o.push(e.SheetNames[u]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, pl(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, vl(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
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
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, jl(_, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, zg(_)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Kl(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, zi(s), ri(v));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, im(r.Strings)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, nk(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml";
  var T = xo(e.Themes, r);
  return hr(i, s, T), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, cg(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Cg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Gl(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", cl(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function j4(e, r) {
  e && !e.SSF && (e.SSF = Vr(nr)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = l0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Bi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = Zg.indexOf(r.bookType) > -1, n = fo();
  wo(r = r || {});
  var i = Yf(), s = "", f = 0;
  if (r.cellXfs = [], pn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, hl(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && o.push(e.SheetNames[u]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, pl(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, vl(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, hr(i, s, xw(f - 1, r, e, v)), n.sheets.push(s), Rr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, wr.WS[0]), d) {
      var _ = d["!comments"], y = false, m = "";
      if (_ && _.length > 0) {
        var g = false;
        _.forEach(function(T) {
          T[1].forEach(function(E) {
            E.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, jl(_, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, Wg(_)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Kl(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, zi(s), ri(v));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, em(r.Strings, r)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, Vy(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml", hr(i, s, xo(e.Themes, r)), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, Hm(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Dg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Gl(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", cl(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function yo(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = ea(e.slice(0, 12));
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
  return ir.find(e, "EncryptedPackage") ? X4(e, r) : lh(e, r);
}
function z4(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t = Mu(a, n), V4(t, n);
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
      return Df(e.slice(t), r);
    default:
      break e;
  }
  return fi.to_workbook(e, r);
}
function $4(e, r) {
  var t = "", a = yo(e, r);
  switch (r.type) {
    case "base64":
      t = ea(e);
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
  return r.type == "base64" && (t = ea(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = mr && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : L1(t.slice(2)) : ku(t.slice(2)), r.type = "binary", Sh(t, r);
}
function Y4(e) {
  return e.match(/[^\x00-\x7F]/) ? Da(e) : e;
}
function _f(e, r, t, a) {
  return a ? (t.type = "string", fi.to_workbook(e, t)) : fi.to_workbook(r, t);
}
function ii(e, r) {
  Xf();
  var t = r || {};
  if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return ii(new Uint8Array(e), (t = Vr(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return ii(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = false;
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), ti = {}, t.dateNF && (ti.dateNF = t.dateNF), t.type || (t.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = mr ? "buffer" : "binary", a = pd(e), typeof Uint8Array < "u" && !mr && (t.type = "array")), t.type == "string" && (i = true, t.type = "binary", t.codepage = 65001, a = Y4(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo) return t = Vr(t), t.type = "array", ii(Kf(a), t);
  }
  switch ((n = yo(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return G4(ir.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return lh(a, t);
      break;
    case 60:
      return Df(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return Kv(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return Rl.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? z4(a, t) : _f(e, a, t, i);
    case 239:
      return n[3] === 60 ? Df(a, t) : _f(e, a, t, i);
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
      return If.to_workbook(a, t);
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
  return Xv.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? If.to_workbook(a, t) : _f(e, a, t, i);
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
      return as(r.file, ir.write(e, { type: mr ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return ir.write(e, r);
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
  var n = e.FullPaths ? ir.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[t.type] || t.type, compression: !!r.compression }) : e.generate(t);
  if (typeof Deno < "u" && typeof n == "string") {
    if (r.type == "binary" || r.type == "base64") return n;
    n = new Uint8Array(o0(n));
  }
  return r.password && typeof encrypt_agile < "u" ? bh(encrypt_agile(n, r.password), r) : r.type === "file" ? as(r.file, n) : r.type == "string" ? Br(n) : n;
}
function eE(e, r) {
  var t = r || {}, a = Vk(e, t);
  return bh(a, t);
}
function Fa(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return Zs(Da(a));
    case "binary":
      return Da(a);
    case "string":
      return e;
    case "file":
      return as(r.file, a, "utf8");
    case "buffer":
      return mr ? Na(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : Fa(a, { type: "binary" }).split("").map(function(n) {
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
      return as(r.file, e, "binary");
    case "buffer":
      return mr ? Na(e, "binary") : e.split("").map(function(t) {
        return t.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Xs(e, r) {
  switch (r.type) {
    case "string":
    case "base64":
    case "binary":
      for (var t = "", a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
      return r.type == "base64" ? Zs(t) : r.type == "string" ? Br(t) : t;
    case "file":
      return as(r.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
}
function Fh(e, r) {
  Xf(), Uy(e);
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
      return Fa(Pk(e, t), t);
    case "slk":
    case "sylk":
      return Fa(Nl.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return Fa(xh(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return rE(Ah(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return Fa(ko(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return Fa(Rl.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "dbf":
      return Xs(If.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return Fa(fi.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "rtf":
      return Fa(Sm(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return Fa(Pl.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "fods":
      return Fa(_h(e, t), t);
    case "wk1":
      return Xs(Fn.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Xs(Fn.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Xs(dh(e, t), t);
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
  var f = Fr(t), o = s.defval, u = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), h = true, v = e["!data"] != null, d = n === 1 ? [] : {};
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
        if (!_.z || !ua(_.z) || (y = Va(y), typeof y == "number")) break;
      case "d":
        s && (s.UTC || s.raw === false) || (y = On(new Date(y)));
        break;
      default:
        throw new Error("unrecognized type " + _.t);
    }
    if (i[x] != null) {
      if (y == null) if (_.t == "e" && y === null) d[i[x]] = null;
      else if (o !== void 0) d[i[x]] = o;
      else if (u && y === null) d[i[x]] = null;
      else continue;
      else d[i[x]] = (_.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : u) ? y : ja(_, y, s);
      y != null && (h = false);
    }
  }
  return { row: d, isempty: h };
}
function Pf(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, u = r || {}, h = u.range != null ? u.range : e["!ref"];
  switch (u.header === 1 ? a = 1 : u.header === "A" ? a = 2 : Array.isArray(u.header) ? a = 3 : u.header == null && (a = 0), typeof h) {
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
  var v = Fr(o.s.r), d = [], x = [], _ = 0, y = 0, m = e["!data"] != null, g = o.s.r, T = 0, E = {};
  m && !e["!data"][g] && (e["!data"][g] = []);
  var A = u.skipHidden && e["!cols"] || [], X = u.skipHidden && e["!rows"] || [];
  for (T = o.s.c; T <= o.e.c; ++T) if (!(A[T] || {}).hidden) switch (d[T] = gr(T), t = m ? e["!data"][g][T] : e[d[T] + v], a) {
    case 1:
      i[T] = T - o.s.c;
      break;
    case 2:
      i[T] = d[T];
      break;
    case 3:
      i[T] = u.header[T - o.s.c];
      break;
    default:
      if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = ja(t, null, u), y = E[s] || 0, !y) E[s] = 1;
      else {
        do
          f = s + "_" + y++;
        while (E[f]);
        E[s] = y, E[f] = 1;
      }
      i[T] = f;
  }
  for (g = o.s.r + n; g <= o.e.r; ++g) if (!(X[g] || {}).hidden) {
    var z = nE(e, o, g, d, a, i, u);
    (z.isempty === false || (a === 1 ? u.blankrows !== false : u.blankrows)) && (x[_++] = z.row);
  }
  return x.length = _, x;
}
var xu = /"/g;
function iE(e, r, t, a, n, i, s, f, o) {
  for (var u = true, h = [], v = "", d = Fr(t), x = e["!data"] != null, _ = x && e["!data"][t] || [], y = r.s.c; y <= r.e.c; ++y) if (a[y]) {
    var m = x ? _[y] : e[a[y] + d];
    if (m == null) v = "";
    else if (m.v != null) {
      u = false, v = "" + (o.rawNumbers && m.t == "n" ? m.v : ja(m, null, o));
      for (var g = 0, T = 0; g !== v.length; ++g) if ((T = v.charCodeAt(g)) === n || T === i || T === 34 || o.forceQuotes) {
        v = '"' + v.replace(xu, '""') + '"';
        break;
      }
      v == "ID" && f == 0 && h.length == 0 && (v = '"ID"');
    } else m.f != null && !m.F ? (u = false, v = "=" + m.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(xu, '""') + '"')) : v = "";
    h.push(v);
  }
  if (o.strip) for (; h[h.length - 1] === ""; ) --h.length;
  return o.blankrows === false && u ? null : h.join(s);
}
function ko(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Dr(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, o = f.charCodeAt(0), u = "", h = [], v = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], x = n.s.c; x <= n.e.c; ++x) (v[x] || {}).hidden || (h[x] = gr(x));
  for (var _ = 0, y = n.s.r; y <= n.e.r; ++y) (d[y] || {}).hidden || (u = iE(e, n, y, h, s, o, i, _, a), u != null && (u || a.blankrows !== false) && t.push((_++ ? f : "") + u));
  return t.join("");
}
function Ah(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = ko(e, r);
  return t;
}
function sE(e, r) {
  var t = "", a, n = "";
  if (e == null || e["!ref"] == null) return [];
  var i = Dr(e["!ref"]), s = "", f = [], o, u = [], h = e["!data"] != null;
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
    u[u.length] = t + "=" + n;
  }
  return u;
}
function Ch(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = +!a.skipHeader, s = e || {};
  !e && n && (s["!data"] = []);
  var f = 0, o = 0;
  if (s && a.origin != null) if (typeof a.origin == "number") f = a.origin;
  else {
    var u = typeof a.origin == "string" ? Lr(a.origin) : a.origin;
    f = u.r, o = u.c;
  }
  var h = { s: { c: 0, r: 0 }, e: { c: o, r: f + r.length - 1 + i } };
  if (s["!ref"]) {
    var v = Dr(s["!ref"]);
    h.e.c = Math.max(h.e.c, v.e.c), h.e.r = Math.max(h.e.r, v.e.r), f == -1 && (f = v.e.r + 1, h.e.r = f + r.length - 1 + i);
  } else f == -1 && (f = 0, h.e.r = r.length - 1 + i);
  var d = a.header || [], x = 0, _ = [];
  r.forEach(function(m, g) {
    n && !s["!data"][f + g + i] && (s["!data"][f + g + i] = []), n && (_ = s["!data"][f + g + i]), Gr(m).forEach(function(T) {
      (x = d.indexOf(T)) == -1 && (d[x = d.length] = T);
      var E = m[T], A = "z", X = "", z = n ? "" : gr(o + x) + Fr(f + g + i), F = n ? _[o + x] : s[z];
      E && typeof E == "object" && !(E instanceof Date) ? n ? _[o + x] = E : s[z] = E : (typeof E == "number" ? A = "n" : typeof E == "boolean" ? A = "b" : typeof E == "string" ? A = "s" : E instanceof Date ? (A = "d", a.UTC || (E = h0(E)), a.cellDates || (A = "n", E = Yr(E)), X = F != null && F.z && ua(F.z) ? F.z : a.dateNF || nr[14]) : E === null && a.nullError && (A = "e", E = 0), F ? (F.t = A, F.v = E, delete F.w, delete F.R, X && (F.z = X)) : n ? _[o + x] = F = { t: A, v: E } : s[z] = F = { t: A, v: E }, X && (F.z = X));
    });
  }), h.e.c = Math.max(h.e.c, o + d.length - 1);
  var y = Fr(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (x = 0; x < d.length; ++x) n ? s["!data"][f][x + o] = { t: "s", v: d[x] } : s[gr(x + o) + y] = { t: "s", v: d[x] };
  return s["!ref"] = xr(h), s;
}
function fE(e, r) {
  return Ch(null, e, r);
}
function ts(e, r, t) {
  if (typeof r == "string") {
    if (e["!data"] != null) {
      var a = Lr(r);
      return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? ts(e, yr(r)) : ts(e, gr(t || 0) + Fr(r));
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
function Eo(e, r) {
  var t = { SheetNames: [], Sheets: {} };
  return e && ls(t, e, r || "Sheet1"), t;
}
function ls(e, r, t, a) {
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
function uE(e, r) {
  return e.z = r, e;
}
function Ih(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function lE(e, r, t) {
  return Ih(e, "#" + r, t);
}
function hE(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function dE(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Dr(r), i = typeof r == "string" ? r : xr(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var o = ts(e, s, f);
    o.t = "n", o.F = i, delete o.v, s == n.s.r && f == n.s.c && (o.f = t, a && (o.D = true));
  }
  var u = wt(e["!ref"]);
  return u.s.r > n.s.r && (u.s.r = n.s.r), u.s.c > n.s.c && (u.s.c = n.s.c), u.e.r < n.e.r && (u.e.r = n.e.r), u.e.c < n.e.c && (u.e.c = n.e.c), e["!ref"] = xr(u), e;
}
var vt = { encode_col: gr, encode_row: Fr, encode_cell: yr, encode_range: xr, decode_col: to, decode_row: ro, split_cell: ax, decode_cell: Lr, decode_range: wt, format_cell: ja, sheet_new: nx, sheet_add_aoa: al, sheet_add_json: Ch, sheet_add_dom: ph, aoa_to_sheet: ui, json_to_sheet: fE, table_to_sheet: vh, table_to_book: l4, sheet_to_csv: ko, sheet_to_txt: Ah, sheet_to_json: Pf, sheet_to_html: xh, sheet_to_formulae: sE, sheet_to_row_object_array: Pf, sheet_get_cell: ts, book_new: Eo, book_append_sheet: ls, book_set_sheet_visibility: cE, cell_set_number_format: uE, cell_set_hyperlink: Ih, cell_set_internal_link: lE, cell_add_comment: hE, sheet_set_array_formula: dE, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
const Dh = _u({ data: [] }), Oh = ["ACCESSION NUMBER", "BOOK NAME", "ISBN NUMBER", "BOOK TYPE", "AUTHOR", "PUBLISHED DATE", "NUM OF PAGES", "IMAGE LINKS", "LANGUAGE"];
const _Ht = class _Ht {
  constructor() {
    __publicField(this, "workbook", null);
    __publicField(this, "worksheet", {});
    __publicField(this, "sheetName", "");
    __publicField(this, "m_jsonSpreadsheet", []);
  }
  createNewSpreadsheet() {
    if (localStorage.getItem("renderSpreadsheet") === "true") {
      Aa.spreadsheets.toArray().then((t) => {
        this.workbook = vt.book_new(), this.worksheet = vt.json_to_sheet(t), vt.book_append_sheet(this.workbook, this.worksheet, "Books");
      });
      return;
    }
    this.workbook = vt.book_new(), this.worksheet = vt.aoa_to_sheet([ac]), vt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = vt.sheet_to_json(this.worksheet, { defval: "N/A" }), localStorage.setItem("renderSpreadsheet", "true");
  }
  static init(r = "") {
    return _Ht.instance = new _Ht(), _Ht.instance.createNewSpreadsheet(), _Ht.instance;
  }
  mapToSpreadsheetData(r) {
    return r.map((t) => {
      const a = Object.values(t), n = {};
      return ac.forEach((i, s) => {
        n[i] = a[s] !== void 0 ? a[s] : "";
      }), n;
    });
  }
  async loadWorkbook(r) {
    try {
      const n = await Aa.spreadsheets.toArray();
      if (n.length > 0) return console.log(`Loading ${n.length} records from IndexedDB...`), this.workbook = vt.book_new(), this.worksheet = vt.json_to_sheet(n), vt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = n, console.log("Loaded Existing Data Form Database: ", this.m_jsonSpreadsheet), this.m_jsonSpreadsheet;
    } catch (n) {
      console.error("Error checking IndexedDB:", n);
    }
    const a = await (await fetch(r)).arrayBuffer();
    this.workbook = ii(a), this.sheetName = this.workbook.SheetNames[0], this.worksheet = this.workbook.Sheets[this.sheetName], this.m_jsonSpreadsheet = vt.sheet_to_json(this.worksheet, { defval: "N/A" });
    try {
      console.log("Storing spreadsheet data to database..."), console.log(this.m_jsonSpreadsheet);
      const n = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);
      console.log("Records to be added to the database: ", n), console.log("Record[0] to be added to the database: ", n[0]), await Aa.spreadsheets.add(n[0]), console.log(`Stored ${n.length} records to IndexedDB`);
    } catch (n) {
      console.error("Error loading data to IndexedDB:", n);
    }
    return this.m_jsonSpreadsheet;
  }
  static getInstance() {
    return _Ht.instance || (_Ht.instance = _Ht.init()), _Ht.instance;
  }
  getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }
  async loadFromDatabase() {
    const r = await Aa.spreadsheets.toArray();
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
      console.log("Records to be added to the database: ", a), console.log("Record[0] to be added to the database: ", a[0]), Aa.spreadsheets.add(a[0]).then((n) => {
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
    if (a === -1) {
      console.error("Cannot update, ISBN not found:", r);
      return;
    }
    console.log("isbn found has rowIndex: ", a);
    const n = a + 1;
    vt.sheet_add_aoa(this.worksheet, [[t]], { origin: { r: n, c: 0 } });
    const i = vt.sheet_to_json(this.worksheet, { defval: "N/A" });
    return this.m_jsonSpreadsheet = i, Aa.spreadsheets.update(r, { accession: t }), this.renderSpreadsheet(), this.scrollToView(a), `Accession number ${t} added for ISBN ${r}.`;
  }
  renderSpreadsheet() {
    Dh.data = [...this.m_jsonSpreadsheet];
  }
  findRowIndexByIsbn(r) {
    const t = this.m_jsonSpreadsheet.findIndex((a) => a.isbn === r);
    return t === -1 && console.error("Row with the given ISBN not found."), t;
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
      let t = vt.book_new();
      vt.book_append_sheet(t, this.worksheet, "Books"), vt.sheet_add_aoa(this.worksheet, [Oh], { origin: 0 }), aE(t, "backup.xlsx");
    } else console.error("Workbook is not loaded.");
  }
};
__publicField(_Ht, "instance");
let Ht = _Ht;
async function xE(e) {
  var _a2, _b, _c2, _d2, _e2;
  const t = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e}`)).json();
  if (console.log("Used google Api: ", ((_a2 = t == null ? void 0 : t.items) == null ? void 0 : _a2.length) > 0), t.items && t.items.length > 0) {
    const a = t.items[0].volumeInfo;
    return console.log("used  google books api: ", a), { title: a.title, authors: ((_b = a.authors) == null ? void 0 : _b.map((n) => ({ name: n }))) || [], publish_date: a.publishedDate, number_of_pages: a.pageCount, cover: { small: (_c2 = a.imageLinks) == null ? void 0 : _c2.thumbnail, large: (_d2 = a.imageLinks) == null ? void 0 : _d2.large }, subjects: ((_e2 = a.categories) == null ? void 0 : _e2.map((n) => ({ name: n }))) || [], languages: a.language ? [{ key: `/languages/${a.language}` }] : [] };
  }
}
async function pE(e) {
  const t = await (await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${e}&format=json&jscmd=data`)).json();
  return console.log("used OpenLibAPI: ", Object.keys(t).length !== 0), t[`ISBN:${e}`];
}
async function vE(e) {
  var _a2;
  const r = "https://corsproxy.io/?", t = `https://isbnsearch.org/search?s=${e}`;
  try {
    const n = await (await fetch(r + encodeURIComponent(t))).text(), f = new DOMParser().parseFromString(n, "text/html").querySelector(".bookinfo");
    if (!f) return console.error("Book info container not found"), null;
    const o = (_a2 = f.textContent) == null ? void 0 : _a2.trim().split(`
`).map((u) => u.trim());
    return mE(o);
  } catch (a) {
    return console.error("Error fetching ISBN:", a), null;
  }
}
function mE(e) {
  let r = { title: "", "isbn-13": "", "isbn-10": "", author: "", publish_date: "" };
  return e.forEach((t, a) => {
    a === 0 ? r.title = t.trim() : t.startsWith("ISBN-13:") ? r["isbn-13"] = t.replace("ISBN-13:", "").trim() : t.startsWith("ISBN-10:") ? r["isbn-10"] = t.replace("ISBN-10:", "").trim() : t.startsWith("Author:") ? r.author = t.replace("Author:", "").trim() : t.startsWith("Published:") && (r.publish_date = t.replace("Published:", "").trim());
  }), console.log("Parsed Result: ", r), r;
}
function gE(e) {
  let r = false;
  return e.forEach((t) => {
    t.value ? r = true : (t.classList.add("required"), r = false);
  }), r;
}
function pu(e) {
  let r = "";
  return e.forEach((t) => r += t.value), r;
}
function _E(e) {
  e.forEach((r) => r.value = ""), e[0].focus();
}
async function Ai(e, r = false) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j;
  let t, a = r, n, i = "", s = e.isbn;
  console.log("isbn: ", s);
  const f = await Nh(s);
  if (f) {
    console.log("used DB: ", f);
    const v = Ht.getInstance(), d = v.findRowIndexByIsbn(f.isbn);
    return v.scrollToView(d), e.value = true, `You have done that isbn already the Book Name is: ${f.book_name}`;
  }
  if (t = await pE(s) || await xE(s), console.log("Isbn Details: ", t), t) i = "Isbn Found Please Input the accession Number", e.value = true;
  else return a || (n = (_a2 = await vE(s)) == null ? void 0 : _a2["isbn-13"]), n ? (e.isbn = n, await Ai(e, true)) : (a = true, i = "No details found for the given ISBN from both sources.", i);
  const o = ["N/A", t == null ? void 0 : t.title, s, ((_c2 = (_b = t == null ? void 0 : t.subjects) == null ? void 0 : _b[0]) == null ? void 0 : _c2.name) ?? "N/A", (_e2 = (_d2 = t == null ? void 0 : t.authors) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.name, t == null ? void 0 : t.publish_date, t == null ? void 0 : t.number_of_pages, ((_f2 = t == null ? void 0 : t.cover) == null ? void 0 : _f2.large) ?? "N/A", ((_h2 = (_g2 = t == null ? void 0 : t.languages) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.key) ? (_j = (_i = t == null ? void 0 : t.languages) == null ? void 0 : _i[0]) == null ? void 0 : _j.key.replace("/languages/", "").toUpperCase() : "English"], u = Ht.getInstance();
  u.insertSpreadsheet(o), u.renderSpreadsheet();
  const h = setTimeout(() => {
    u.scrollToView(), clearTimeout(h);
  }, 500);
  return i;
}
async function Nh(e) {
  return await Aa.spreadsheets.get({ isbn: e });
}
var wE = dn('<div class="isbn-input"><div class="isbn-type">Accession No:</div> <span class="isbn-type" id="accessionType"> </span> <input type="text" name="accession" id="accession-input" class="svelte-1a3p2ai"/></div>');
function yE(e, r) {
  Mf(r, true);
  let t = js(r, "accessionInput", 15), a = js(r, "isbnFound", 15), n = js(r, "message", 15), i = Ks("OLD");
  Bf(() => {
    const v = setTimeout(() => {
      var _a2;
      t().focus();
      const d = Ht.getInstance(), x = d.findRowIndexByIsbn(a().isbn), _ = d.getRowElementByIndex(x);
      console.log("index and row: ", x, " ", _);
      let y = ((_a2 = _.firstElementChild) == null ? void 0 : _a2.textContent) + ",";
      console.log("Remounted"), y.startsWith("N/A") ? t(t().value = "", true) : t(t().value = y, true), clearTimeout(v);
    }, 300);
  });
  function s(v) {
    const d = v.target;
    switch (v.key) {
      case "Tab":
        if (v.preventDefault(), nn(i, sr(i) === "OLD" ? "ILS" : "OLD", true), d.value !== "") if (sr(i) === "OLD") {
          if (d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")), d.value.endsWith("ILS-SR-") && (d.value = d.value.replace("ILS-SR-", "")), d.value === "") return;
          d.value += ",";
        } else d.value = d.value.replace(",", ",ILS-SR-");
        else sr(i) === "OLD" ? d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")) : d.value === "" ? d.value = "ILS-SR-" : d.value = ",";
        console.log("last string removed ", d.value.substring(0, d.value.length - 1));
        break;
      case " ":
        v.preventDefault(), d.value += "()";
        const x = d.value.length - 1;
        d.focus(), d.setSelectionRange(x, x);
        break;
      case "Enter":
        v.preventDefault();
        const _ = Ht.getInstance();
        let y;
        sr(i) === "OLD" && d.value.endsWith(",") ? y = d.value.substring(0, d.value.length - 1) : sr(i) === "ILS" && d.value.endsWith(",ILS-SR-") ? y = d.value.substring(0, d.value.length - 8) : y = d.value, n(_.updateSpreadsheet(a().isbn, y)), a(a().value = false, true);
    }
  }
  var f = wE(), o = En(pa(f), 2), u = pa(o, true);
  Gt(o);
  var h = En(o, 2);
  h.__keydown = s, yu(h, (v) => t(v), () => t()), Gt(f), Jn(() => Qn(u, sr(i) === "OLD" ? "" : "ILS-SR-")), sn(e, f), Uf();
}
Wf(["keydown"]);
var kE = dn('<input type="text" maxlength="1" required inputmode="numeric"/>'), EE = dn('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja"> </div> <!></div>'), TE = dn('<div class="message svelte-f3psja"> </div> <!> <button id="search" class="svelte-f3psja"> </button>', 1);
function YE(e, r) {
  Mf(r, true);
  const t = (D, W = w1) => {
    var K = kE();
    K.__keydown = v, Jn((ee) => {
      C1(K, 1, `input-${W() + 1}`, "svelte-f3psja"), Qo(K, "name", ee), Qo(K, "id", `input-${W() + 1}`);
    }, [() => W().toString()]), sn(D, K);
  };
  let a = js(r, "message", 15), n, i = Ks(_u({ value: false, isbn: "" })), s = Ks(13), f = Ks(false), o, u = "";
  async function h() {
    const D = document.querySelectorAll('input[maxlength="1"]');
    sr(i).isbn = pu(D), a(await Ai(sr(i)));
  }
  async function v(D) {
    const W = document.querySelectorAll('input[maxlength="1"]'), K = parseInt(D.key), ee = D.target, de = D.key === "Backspace", Pe = ee.nextElementSibling, me = ee.previousElementSibling;
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
        if (D.preventDefault(), !gE(W)) return;
        sr(i).isbn = pu(W), _E(W), d(), await Nh(sr(i).isbn), a(await Ai(sr(i)));
        break;
    }
  }
  function d() {
    if (!sr(i).value) {
      const D = document.querySelectorAll("input[maxlength='1']");
      if (sr(s) === 13) {
        const W = [9, 7, 8];
        for (let K = 0; K < 3; K++) D.item(K).value = W[K].toString();
        setTimeout(() => {
          D.item(3).focus();
        }, 0);
      }
      if (sr(s) === 10) {
        for (let W = 0; W < 10; W++) D.item(W).value = "";
        setTimeout(() => {
          D.item(0).focus();
        }, 0);
      }
    }
  }
  function x(D) {
    D.preventDefault(), nn(s, sr(s) === 13 ? 10 : 13, true);
  }
  Q0(() => {
    sr(s) && d();
  }), Q0(() => {
    r.receivedIsbn && r.receivedIsbn !== u && !sr(i).value && (u = r.receivedIsbn, sr(i).isbn = r.receivedIsbn, Ai(sr(i)).then((D) => _1(() => a(D))), console.log("Input Effect"));
  });
  function _() {
    if (sr(i).isbn.length > 0) {
      nn(f, true);
      for (let D = 0; D < sr(i).isbn.length && D < n.length; D++) n[D].value = sr(i).isbn[D], n[D].classList.add("paste-fill"), setTimeout(() => {
        n[D].classList.remove("paste-fill");
      }, 100 * (D + 1));
      sr(i).isbn.length === 13 || sr(i).isbn.length === 10 || sr(i).isbn.length === 9 ? setTimeout(async () => {
        a(await Ai(sr(i))), nn(f, false);
      }, 200 * sr(i).isbn.length) : nn(f, false);
    }
  }
  async function y(D) {
    var _a2;
    D.preventDefault();
    const W = ((_a2 = D.clipboardData) == null ? void 0 : _a2.getData("text")) || "";
    sr(i).isbn = W.replace(/\D/g, "").slice(0, 13), _();
  }
  let m;
  Q0(() => {
    console.log("SEcond Effect"), a() === "Isbn Found Please Input the accession Number" || a().includes("You have done that isbn already") ? (sr(i).value = true, setTimeout(() => {
      o.value = "", o.focus();
    }, 0)) : a() && a() !== "" && (d(), setTimeout(() => {
      a("");
    }, 4e3));
  }), Bf(() => {
    d();
    const D = document.querySelectorAll('input[maxlength="1"]');
    n = [...D], m = Ht.getInstance(), D.forEach((W) => W.addEventListener("focus", (K) => {
      const ee = K.target, de = ee.value;
      ee.value = "", ee.value = de;
    })), window.addEventListener("paste", (W) => {
      y(W);
    });
  });
  var g = TE(), T = wu(g), E = pa(T, true);
  Gt(T);
  var A = En(T, 2);
  {
    var X = (D) => {
      var W = EE(), K = pa(W), ee = pa(K);
      Gt(K);
      var de = En(K, 2);
      zs(de, 17, () => ({ length: sr(s) }), Gs, (Pe, me, ze) => {
        t(Pe, () => ze);
      }), Gt(W), Jn(() => Qn(ee, `ISBN-${sr(s) ?? ""}:`)), sn(D, W);
    }, z = (D) => {
      yE(D, { get message() {
        return a();
      }, set message(W) {
        a(W);
      }, get isbnFound() {
        return sr(i);
      }, set isbnFound(W) {
        nn(i, W, true);
      }, get accessionInput() {
        return o;
      }, set accessionInput(W) {
        o = W;
      } });
    };
    E1(A, (D) => {
      sr(i).value ? D(z, false) : D(X);
    });
  }
  var F = En(A, 2);
  F.__click = async () => {
    if (sr(i).value) {
      const D = o.value.trim();
      a(m.updateSpreadsheet(sr(i).isbn, D)), sr(i).value = false;
    } else await h();
  };
  var U = pa(F, true);
  Gt(F), Jn(() => {
    Qn(E, a()), Qn(U, sr(i).value ? "Update Accession Number" : "Search For ISBN");
  }), sn(e, g), Uf();
}
Wf(["keydown", "click"]);
var SE = dn('<th class="svelte-f5kcat"> </th>'), bE = dn('<td class="svelte-f5kcat"> </td>'), FE = dn('<tr class="svelte-f5kcat"></tr>'), AE = dn('<div class="isbn-details svelte-f5kcat"><table class="svelte-f5kcat"><thead class="svelte-f5kcat"><tr class="svelte-f5kcat"></tr></thead><tbody class="svelte-f5kcat"></tbody></table></div> <button class="download-excel svelte-f5kcat">Download Excel Sheet</button>', 1);
function ZE(e, r) {
  Mf(r, false);
  let t = yf(), a = yf();
  Bf(async () => {
    nn(t, Ht.getInstance()), await sr(t).loadFromDatabase(), sr(t).renderSpreadsheet(), sr(a).addEventListener("dblclick", (d) => {
      var _a2;
      const x = d.target, _ = x.closest("tr"), y = _.childNodes[2].textContent, m = _.childNodes[0], g = m.cloneNode(true);
      (_a2 = m.parentNode) == null ? void 0 : _a2.replaceChild(g, m);
      const T = _.childNodes[0];
      if (T.contentEditable = "true", T.textContent === "N/A") T.textContent = "\u200B", T.focus();
      else {
        T.focus();
        const E = document.createRange();
        E.selectNodeContents(T), E.collapse(false);
        const A = window.getSelection();
        A == null ? void 0 : A.removeAllRanges(), A == null ? void 0 : A.addRange(E);
      }
      T.addEventListener("blur", () => {
        T.contentEditable = "false", T.textContent == "\u200B" && (T.textContent = "N/A"), sr(t).updateSpreadsheet(y), sr(t).renderSpreadsheet();
        const E = Aa.spreadsheets.update(y, { accession: T.textContent });
        console.log("dbIndex: ", E);
      }, { once: true }), sr(t).renderSpreadsheet(), console.log("Real Target: ", x), console.log("Row chosen: ", x.closest("tr")), console.log(y);
    });
    const v = setTimeout(() => {
      sr(t).scrollToView(), clearTimeout(v);
    }, 500);
  }), T1();
  var n = AE(), i = wu(n), s = pa(i), f = pa(s), o = pa(f);
  zs(o, 5, () => Oh, Gs, (v, d) => {
    var x = SE(), _ = pa(x, true);
    Gt(x), Jn(() => Qn(_, sr(d))), sn(v, x);
  }), Gt(o), Gt(f);
  var u = En(f);
  zs(u, 5, () => Dh.data, Gs, (v, d) => {
    var x = FE();
    zs(x, 5, () => Object.entries(sr(d)), Gs, (_, y) => {
      var m = y1(() => k1(sr(y), 2));
      let g = () => sr(m)[1];
      var T = bE(), E = pa(T, true);
      Gt(T), Jn(() => Qn(E, g())), sn(_, T);
    }), Gt(x), sn(v, x);
  }), Gt(u), yu(u, (v) => nn(a, v), () => sr(a)), Gt(s), Gt(i);
  var h = En(i, 2);
  h.__click = () => sr(t).DownloadSpreadSheet.call(sr(t)), sn(e, n), Uf();
}
Wf(["click"]);
export {
  YE as I,
  ZE as S,
  Ht as a
};
