var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { f as Pa, a as Ia } from "./Dy7lmqI0.js";
import { n as q0, V as f1, $ as Y0, h as on, at as o1, W as c1, g as nr, a4 as l1, Y as u1, Z as h1, _ as nc, a0 as Z0, m as d1, u as Is, ah as x1, aB as p1, al as ic, j as v1, aQ as Ha, t as yf, af as kf, aL as Ef, az as Xf, aR as m1, aS as g1, aT as _1, aU as w1, r as Sl, l as bl, aV as J0, av as y1, ay as k1, k as E1, aW as Fl, q as T1, aX as S1, s as At, a5 as Kf, p as jf, o as Gf, c as Va, P as Jt, Q as Ct, O as Tn, a as Si, b as zf, G as Q0, y as b1, f as Tf, aY as F1, aM as A1, aZ as C1 } from "./DUA4kTxm.js";
import { s as Sn } from "./Df04Hj-s.js";
import { p as ef, i as Sf } from "./J6GTVhZb.js";
import { s as bf } from "./CEiJdahZ.js";
import { d as $f } from "./Bme71SXR.js";
import { b as Ff } from "./DamuyVK_.js";
import { i as I1 } from "./DsF2ImuW.js";
import "./BZsgO9oN.js";
function Gs(e, r) {
  return r;
}
function D1(e, r, t) {
  for (var a = [], n = r.length, i, s = r.length, f = 0; f < n; f++) {
    let v = r[f];
    bl(v, () => {
      if (i) {
        if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
          var d = e.outrogroups;
          Af(Xf(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else s -= 1;
    }, false);
  }
  if (s === 0) {
    var o = a.length === 0 && t !== null;
    if (o) {
      var l = t, h = l.parentNode;
      k1(h), h.append(l), e.items.clear();
    }
    Af(r, !o);
  } else i = { pending: new Set(r), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Af(e, r = true) {
  for (var t = 0; t < e.length; t++) E1(e[t], r);
}
var sc;
function zs(e, r, t, a, n, i = null) {
  var s = e, f = /* @__PURE__ */ new Map(), o = (r & Fl) !== 0;
  if (o) {
    var l = e;
    s = on ? Y0(o1(l)) : l.appendChild(q0());
  }
  on && c1();
  var h = null, v = l1(() => {
    var g = t();
    return m1(g) ? g : g == null ? [] : Xf(g);
  }), d, x = true;
  function w() {
    m.fallback = h, O1(m, d, s, r, a), h !== null && (d.length === 0 ? (h.f & Ha) === 0 ? Sl(h) : (h.f ^= Ha, bi(h, null, s)) : bl(h, () => {
      h = null;
    }));
  }
  var y = f1(() => {
    d = nr(v);
    var g = d.length;
    let S = false;
    if (on) {
      var E = u1(s) === h1;
      E !== (g === 0) && (s = nc(), Y0(s), Z0(false), S = true);
    }
    for (var A = /* @__PURE__ */ new Set(), X = v1, j = d1(), F = 0; F < g; F += 1) {
      on && Is.nodeType === x1 && Is.data === p1 && (s = Is, S = true, Z0(false));
      var M = d[F], U = a(M, F), B = x ? null : f.get(U);
      B ? (B.v && ic(B.v, M), B.i && ic(B.i, F), j && X.skipped_effects.delete(B.e)) : (B = N1(f, x ? s : sc ?? (sc = q0()), M, U, F, n, r, t), x || (B.e.f |= Ha), f.set(U, B)), A.add(U);
    }
    if (g === 0 && i && !h && (x ? h = yf(() => i(s)) : (h = yf(() => i(sc ?? (sc = q0()))), h.f |= Ha)), on && g > 0 && Y0(nc()), !x) if (j) {
      for (const [K, J] of f) A.has(K) || X.skipped_effects.add(J.e);
      X.oncommit(w), X.ondiscard(() => {
      });
    } else w();
    S && Z0(true), nr(v);
  }), m = { effect: y, items: f, outrogroups: null, fallback: h };
  x = false, on && (s = Is);
}
function O1(e, r, t, a, n) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i;
  var i = (a & S1) !== 0, s = r.length, f = e.items, o = e.effect.first, l, h = null, v, d = [], x = [], w, y, m, g;
  if (i) for (g = 0; g < s; g += 1) w = r[g], y = n(w, g), m = f.get(y).e, (m.f & Ha) === 0 && ((_b = (_a2 = m.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(m));
  for (g = 0; g < s; g += 1) {
    if (w = r[g], y = n(w, g), m = f.get(y).e, e.outrogroups !== null) for (const B of e.outrogroups) B.pending.delete(m), B.done.delete(m);
    if ((m.f & Ha) !== 0) if (m.f ^= Ha, m === o) bi(m, null, t);
    else {
      var S = h ? h.next : o;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), sn(e, h, m), sn(e, m, S), bi(m, S, t), h = m, d = [], x = [], o = h.next;
      continue;
    }
    if ((m.f & J0) !== 0 && (Sl(m), i && ((_d2 = (_c2 = m.nodes) == null ? void 0 : _c2.a) == null ? void 0 : _d2.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(m))), m !== o) {
      if (l !== void 0 && l.has(m)) {
        if (d.length < x.length) {
          var E = x[0], A;
          h = E.prev;
          var X = d[0], j = d[d.length - 1];
          for (A = 0; A < d.length; A += 1) bi(d[A], E, t);
          for (A = 0; A < x.length; A += 1) l.delete(x[A]);
          sn(e, X.prev, j.next), sn(e, h, X), sn(e, j, E), o = E, h = j, g -= 1, d = [], x = [];
        } else l.delete(m), bi(m, o, t), sn(e, m.prev, m.next), sn(e, m, h === null ? e.effect.first : h.next), sn(e, h, m), h = m;
        continue;
      }
      for (d = [], x = []; o !== null && o !== m; ) (l ?? (l = /* @__PURE__ */ new Set())).add(o), x.push(o), o = o.next;
      if (o === null) continue;
    }
    (m.f & Ha) === 0 && d.push(m), h = m, o = m.next;
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups) B.pending.size === 0 && (Af(Xf(B.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var F = [];
    if (l !== void 0) for (m of l) (m.f & J0) === 0 && F.push(m);
    for (; o !== null; ) (o.f & J0) === 0 && o !== e.fallback && F.push(o), o = o.next;
    var M = F.length;
    if (M > 0) {
      var U = (a & Fl) !== 0 && s === 0 ? t : null;
      if (i) {
        for (g = 0; g < M; g += 1) (_g2 = (_f2 = F[g].nodes) == null ? void 0 : _f2.a) == null ? void 0 : _g2.measure();
        for (g = 0; g < M; g += 1) (_i = (_h2 = F[g].nodes) == null ? void 0 : _h2.a) == null ? void 0 : _i.fix();
      }
      D1(e, F, U);
    }
  }
  i && T1(() => {
    var _a3, _b2;
    if (v !== void 0) for (m of v) (_b2 = (_a3 = m.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
  });
}
function N1(e, r, t, a, n, i, s, f) {
  var o = (s & g1) !== 0 ? (s & _1) === 0 ? Ef(t, false, false) : kf(t) : null, l = (s & w1) !== 0 ? kf(n) : null;
  return { v: o, i: l, e: yf(() => (i(r, o ?? t, l ?? n, f), () => {
    e.delete(a);
  })) };
}
function bi(e, r, t) {
  if (e.nodes) for (var a = e.nodes.start, n = e.nodes.end, i = r && (r.f & Ha) === 0 ? r.nodes.start : t; a !== null; ) {
    var s = y1(a);
    if (i.before(a), a === n) return;
    a = s;
  }
}
function sn(e, r, t) {
  r === null ? e.effect.first = t : r.next = t, t === null ? e.effect.last = r : t.prev = r;
}
function Al(e) {
  var r, t, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (r = 0; r < n; r++) e[r] && (t = Al(e[r])) && (a && (a += " "), a += t);
  } else for (t in e) e[t] && (a && (a += " "), a += t);
  return a;
}
function R1() {
  for (var e, r, t = 0, a = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (r = Al(e)) && (a && (a += " "), a += r);
  return a;
}
function fc(e) {
  return typeof e == "object" ? R1(e) : e ?? "";
}
function P1(e, r, t) {
  var a = e == null ? "" : "" + e;
  return r && (a = a ? a + " " + r : r), a === "" ? null : a;
}
function Cf(e, r, t, a, n, i) {
  var s = e.__className;
  if (on || s !== t || s === void 0) {
    var f = P1(t, a);
    (!on || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = t;
  }
  return i;
}
function B1(e) {
  var r = kf(0);
  return function() {
    return arguments.length === 1 ? (At(r, nr(r) + 1), arguments[0]) : (nr(r), e());
  };
}
var L1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $s = { exports: {} }, U1 = $s.exports, oc;
function W1() {
  return oc || (oc = 1, (function(e, r) {
    (function(t, a) {
      e.exports = a();
    })(U1, function() {
      var t = function(c, u) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, _) {
          p.__proto__ = _;
        } || function(p, _) {
          for (var k in _) Object.prototype.hasOwnProperty.call(_, k) && (p[k] = _[k]);
        })(c, u);
      }, a = function() {
        return (a = Object.assign || function(c) {
          for (var u, p = 1, _ = arguments.length; p < _; p++) for (var k in u = arguments[p]) Object.prototype.hasOwnProperty.call(u, k) && (c[k] = u[k]);
          return c;
        }).apply(this, arguments);
      };
      function n(c, u, p) {
        for (var _, k = 0, T = u.length; k < T; k++) !_ && k in u || ((_ = _ || Array.prototype.slice.call(u, 0, k))[k] = u[k]);
        return c.concat(_ || Array.prototype.slice.call(u));
      }
      var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : L1, s = Object.keys, f = Array.isArray;
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
          w(c, p, u[p]);
        });
      }
      var x = Object.defineProperty;
      function w(c, u, p, _) {
        x(c, u, o(p && v(p, "get") && typeof p.get == "function" ? { get: p.get, set: p.set, configurable: true } : { value: p, configurable: true, writable: true }, _));
      }
      function y(c) {
        return { from: function(u) {
          return c.prototype = Object.create(u.prototype), w(c.prototype, "constructor", c), { extend: d.bind(null, c.prototype) };
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
      function X(c) {
        i.setImmediate ? setImmediate(c) : setTimeout(c, 0);
      }
      function j(c, u) {
        if (typeof u == "string" && v(c, u)) return c[u];
        if (!u) return c;
        if (typeof u != "string") {
          for (var p = [], _ = 0, k = u.length; _ < k; ++_) {
            var T = j(c, u[_]);
            p.push(T);
          }
          return p;
        }
        var O = u.indexOf(".");
        if (O !== -1) {
          var H = c[u.substr(0, O)];
          return H == null ? void 0 : j(H, u.substr(O + 1));
        }
      }
      function F(c, u, p) {
        if (c && u !== void 0 && !("isFrozen" in Object && Object.isFrozen(c))) if (typeof u != "string" && "length" in u) {
          A(typeof p != "string" && "length" in p);
          for (var _ = 0, k = u.length; _ < k; ++_) F(c, u[_], p[_]);
        } else {
          var T, O, H = u.indexOf(".");
          H !== -1 ? (T = u.substr(0, H), (O = u.substr(H + 1)) === "" ? p === void 0 ? f(c) && !isNaN(parseInt(T)) ? c.splice(T, 1) : delete c[T] : c[T] = p : F(H = !(H = c[T]) || !v(c, T) ? c[T] = {} : H, O, p)) : p === void 0 ? f(c) && !isNaN(parseInt(u)) ? c.splice(u, 1) : delete c[u] : c[u] = p;
        }
      }
      function M(c) {
        var u, p = {};
        for (u in c) v(c, u) && (p[u] = c[u]);
        return p;
      }
      var U = [].concat;
      function B(c) {
        return U.apply([], c);
      }
      var Jr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(B([8, 16, 32, 64].map(function(c) {
        return ["Int", "Uint", "Float"].map(function(u) {
          return u + c + "Array";
        });
      }))).filter(function(c) {
        return i[c];
      }), K = new Set(Jr.map(function(c) {
        return i[c];
      })), J = null;
      function ie(c) {
        return J = /* @__PURE__ */ new WeakMap(), c = (function u(p) {
          if (!p || typeof p != "object") return p;
          var _ = J.get(p);
          if (_) return _;
          if (f(p)) {
            _ = [], J.set(p, _);
            for (var k = 0, T = p.length; k < T; ++k) _.push(u(p[k]));
          } else if (K.has(p.constructor)) _ = p;
          else {
            var O, H = l(p);
            for (O in _ = H === Object.prototype ? {} : Object.create(H), J.set(p, _), p) v(p, O) && (_[O] = u(p[O]));
          }
          return _;
        })(c), J = null, c;
      }
      var Ie = {}.toString;
      function ve(c) {
        return Ie.call(c).slice(8, -1);
      }
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ye = typeof Ve == "symbol" ? function(c) {
        var u;
        return c != null && (u = c[Ve]) && u.apply(c);
      } : function() {
        return null;
      };
      function Be(c, u) {
        return u = c.indexOf(u), 0 <= u && c.splice(u, 1), 0 <= u;
      }
      var Qe = {};
      function de(c) {
        var u, p, _, k;
        if (arguments.length === 1) {
          if (f(c)) return c.slice();
          if (this === Qe && typeof c == "string") return [c];
          if (k = ye(c)) {
            for (p = []; !(_ = k.next()).done; ) p.push(_.value);
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
      }, Ne = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ia = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ne), Me = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Te(c, u) {
        this.name = c, this.message = u;
      }
      function ke(c, u) {
        return c + ". Errors: " + Object.keys(u).map(function(p) {
          return u[p].toString();
        }).filter(function(p, _, k) {
          return k.indexOf(p) === _;
        }).join(`
`);
      }
      function Ge(c, u, p, _) {
        this.failures = u, this.failedKeys = _, this.successCount = p, this.message = ke(c, u);
      }
      function ze(c, u) {
        this.name = "BulkError", this.failures = Object.keys(u).map(function(p) {
          return u[p];
        }), this.failuresByPos = u, this.message = ke(c, this.failures);
      }
      y(Te).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), y(Ge).from(Te), y(ze).from(Te);
      var Ze = ia.reduce(function(c, u) {
        return c[u] = u + "Error", c;
      }, {}), R = Te, W = ia.reduce(function(c, u) {
        var p = u + "Error";
        function _(k, T) {
          this.name = p, k ? typeof k == "string" ? (this.message = "".concat(k).concat(T ? `
 ` + T : ""), this.inner = T || null) : typeof k == "object" && (this.message = "".concat(k.name, " ").concat(k.message), this.inner = k) : (this.message = Me[u] || p, this.inner = null);
        }
        return y(_).from(R), c[u] = _, c;
      }, {});
      W.Syntax = SyntaxError, W.Type = TypeError, W.Range = RangeError;
      var z = Ne.reduce(function(c, u) {
        return c[u + "Error"] = W[u], c;
      }, {}), V = ia.reduce(function(c, u) {
        return ["Syntax", "Type", "Range"].indexOf(u) === -1 && (c[u + "Error"] = W[u]), c;
      }, {});
      function ue() {
      }
      function D(c) {
        return c;
      }
      function Ce(c, u) {
        return c == null || c === D ? u : function(p) {
          return u(c(p));
        };
      }
      function We(c, u) {
        return function() {
          c.apply(this, arguments), u.apply(this, arguments);
        };
      }
      function Se(c, u) {
        return c === ue ? u : function() {
          var p = c.apply(this, arguments);
          p !== void 0 && (arguments[0] = p);
          var _ = this.onsuccess, k = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var T = u.apply(this, arguments);
          return _ && (this.onsuccess = this.onsuccess ? We(_, this.onsuccess) : _), k && (this.onerror = this.onerror ? We(k, this.onerror) : k), T !== void 0 ? T : p;
        };
      }
      function ar(c, u) {
        return c === ue ? u : function() {
          c.apply(this, arguments);
          var p = this.onsuccess, _ = this.onerror;
          this.onsuccess = this.onerror = null, u.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? We(p, this.onsuccess) : p), _ && (this.onerror = this.onerror ? We(_, this.onerror) : _);
        };
      }
      function rr(c, u) {
        return c === ue ? u : function(p) {
          var _ = c.apply(this, arguments);
          o(p, _);
          var k = this.onsuccess, T = this.onerror;
          return this.onsuccess = null, this.onerror = null, p = u.apply(this, arguments), k && (this.onsuccess = this.onsuccess ? We(k, this.onsuccess) : k), T && (this.onerror = this.onerror ? We(T, this.onerror) : T), _ === void 0 ? p === void 0 ? void 0 : p : o(_, p);
        };
      }
      function or(c, u) {
        return c === ue ? u : function() {
          return u.apply(this, arguments) !== false && c.apply(this, arguments);
        };
      }
      function Ir(c, u) {
        return c === ue ? u : function() {
          var p = c.apply(this, arguments);
          if (p && typeof p.then == "function") {
            for (var _ = this, k = arguments.length, T = new Array(k); k--; ) T[k] = arguments[k];
            return p.then(function() {
              return u.apply(_, T);
            });
          }
          return u.apply(this, arguments);
        };
      }
      V.ModifyError = Ge, V.DexieError = Te, V.BulkError = ze;
      var Er = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Kr(c) {
        Er = c;
      }
      var $e = {}, Tr = 100, Jr = typeof Promise > "u" ? [] : (function() {
        var c = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [c, l(c), c];
        var u = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [u, l(u), c];
      })(), Ne = Jr[0], ia = Jr[1], Jr = Jr[2], ia = ia && ia.then, qr = Ne && Ne.constructor, Ur = !!Jr, yt = function(c, u) {
        Ea.push([c, u]), je && (queueMicrotask(E0), je = false);
      }, xt = true, je = true, kr = [], jr = [], zr = D, pt = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: ue, pgp: false, env: {}, finalize: ue }, Je = pt, Ea = [], Ta = 0, mn = [];
      function Ke(c) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var u = this._PSD = Je;
        if (typeof c != "function") {
          if (c !== $e) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === false && Ja(this, this._value));
        }
        this._state = null, this._value = null, ++u.ref, (function p(_, k) {
          try {
            k(function(T) {
              if (_._state === null) {
                if (T === _) throw new TypeError("A promise cannot be resolved with itself.");
                var O = _._lib && Qa();
                T && typeof T.then == "function" ? p(_, function(H, q) {
                  T instanceof Ke ? T._then(H, q) : T.then(H, q);
                }) : (_._state = true, _._value = T, ds(_)), O && en();
              }
            }, Ja.bind(null, _));
          } catch (T) {
            Ja(_, T);
          }
        })(this, c);
      }
      var hi = { get: function() {
        var c = Je, u = P;
        function p(_, k) {
          var T = this, O = !c.global && (c !== Je || u !== P), H = O && !L(), q = new Ke(function(Y, re) {
            di(T, new hs(Ee(_, c, O, H), Ee(k, c, O, H), Y, re, c));
          });
          return this._consoleTask && (q._consoleTask = this._consoleTask), q;
        }
        return p.prototype = $e, p;
      }, set: function(c) {
        w(this, "then", c && c.prototype === $e ? hi : { get: function() {
          return c;
        }, set: hi.set });
      } };
      function hs(c, u, p, _, k) {
        this.onFulfilled = typeof c == "function" ? c : null, this.onRejected = typeof u == "function" ? u : null, this.resolve = p, this.reject = _, this.psd = k;
      }
      function Ja(c, u) {
        var p, _;
        jr.push(u), c._state === null && (p = c._lib && Qa(), u = zr(u), c._state = false, c._value = u, _ = c, kr.some(function(k) {
          return k._value === _._value;
        }) || kr.push(_), ds(c), p && en());
      }
      function ds(c) {
        var u = c._listeners;
        c._listeners = [];
        for (var p = 0, _ = u.length; p < _; ++p) di(c, u[p]);
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
          var _, k = u._value;
          !u._state && jr.length && (jr = []), _ = Er && u._consoleTask ? u._consoleTask.run(function() {
            return c(k);
          }) : c(k), u._state || jr.indexOf(k) !== -1 || (function(T) {
            for (var O = kr.length; O; ) if (kr[--O]._value === T._value) return kr.splice(O, 1);
          })(u), p.resolve(_);
        } catch (T) {
          p.reject(T);
        } finally {
          --Ta == 0 && xi(), --p.psd.ref || p.psd.finalize();
        }
      }
      function E0() {
        se(pt, function() {
          Qa() && en();
        });
      }
      function Qa() {
        var c = xt;
        return je = xt = false, c;
      }
      function en() {
        var c, u, p;
        do
          for (; 0 < Ea.length; ) for (c = Ea, Ea = [], p = c.length, u = 0; u < p; ++u) {
            var _ = c[u];
            _[0].apply(null, _[1]);
          }
        while (0 < Ea.length);
        je = xt = true;
      }
      function xi() {
        var c = kr;
        kr = [], c.forEach(function(_) {
          _._PSD.onunhandled.call(null, _._value, _);
        });
        for (var u = mn.slice(0), p = u.length; p; ) u[--p]();
      }
      function Kn(c) {
        return new Ke($e, false, c);
      }
      function Wr(c, u) {
        var p = Je;
        return function() {
          var _ = Qa(), k = Je;
          try {
            return ne(p, true), c.apply(this, arguments);
          } catch (T) {
            u && u(T);
          } finally {
            ne(k, false), _ && en();
          }
        };
      }
      d(Ke.prototype, { then: hi, _then: function(c, u) {
        di(this, new hs(null, null, c, u, Je));
      }, catch: function(c) {
        if (arguments.length === 1) return this.then(null, c);
        var u = c, p = arguments[1];
        return typeof u == "function" ? this.then(null, function(_) {
          return (_ instanceof u ? p : Kn)(_);
        }) : this.then(null, function(_) {
          return (_ && _.name === u ? p : Kn)(_);
        });
      }, finally: function(c) {
        return this.then(function(u) {
          return Ke.resolve(c()).then(function() {
            return u;
          });
        }, function(u) {
          return Ke.resolve(c()).then(function() {
            return Kn(u);
          });
        });
      }, timeout: function(c, u) {
        var p = this;
        return c < 1 / 0 ? new Ke(function(_, k) {
          var T = setTimeout(function() {
            return k(new W.Timeout(u));
          }, c);
          p.then(_, k).finally(clearTimeout.bind(null, T));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && w(Ke.prototype, Symbol.toStringTag, "Dexie.Promise"), pt.env = le(), d(Ke, { all: function() {
        var c = de.apply(null, arguments).map(oe);
        return new Ke(function(u, p) {
          c.length === 0 && u([]);
          var _ = c.length;
          c.forEach(function(k, T) {
            return Ke.resolve(k).then(function(O) {
              c[T] = O, --_ || u(c);
            }, p);
          });
        });
      }, resolve: function(c) {
        return c instanceof Ke ? c : c && typeof c.then == "function" ? new Ke(function(u, p) {
          c.then(u, p);
        }) : new Ke($e, true, c);
      }, reject: Kn, race: function() {
        var c = de.apply(null, arguments).map(oe);
        return new Ke(function(u, p) {
          c.map(function(_) {
            return Ke.resolve(_).then(u, p);
          });
        });
      }, PSD: { get: function() {
        return Je;
      }, set: function(c) {
        return Je = c;
      } }, totalEchoes: { get: function() {
        return P;
      } }, newPSD: I, usePSD: se, scheduler: { get: function() {
        return yt;
      }, set: function(c) {
        yt = c;
      } }, rejectionMapper: { get: function() {
        return zr;
      }, set: function(c) {
        zr = c;
      } }, follow: function(c, u) {
        return new Ke(function(p, _) {
          return I(function(k, T) {
            var O = Je;
            O.unhandleds = [], O.onunhandled = T, O.finalize = We(function() {
              var H, q = this;
              H = function() {
                q.unhandleds.length === 0 ? k() : T(q.unhandleds[0]);
              }, mn.push(function Y() {
                H(), mn.splice(mn.indexOf(Y), 1);
              }), ++Ta, yt(function() {
                --Ta == 0 && xi();
              }, []);
            }, O.finalize), c();
          }, u, p, _);
        });
      } }), qr && (qr.allSettled && w(Ke, "allSettled", function() {
        var c = de.apply(null, arguments).map(oe);
        return new Ke(function(u) {
          c.length === 0 && u([]);
          var p = c.length, _ = new Array(p);
          c.forEach(function(k, T) {
            return Ke.resolve(k).then(function(O) {
              return _[T] = { status: "fulfilled", value: O };
            }, function(O) {
              return _[T] = { status: "rejected", reason: O };
            }).then(function() {
              return --p || u(_);
            });
          });
        });
      }), qr.any && typeof AggregateError < "u" && w(Ke, "any", function() {
        var c = de.apply(null, arguments).map(oe);
        return new Ke(function(u, p) {
          c.length === 0 && p(new AggregateError([]));
          var _ = c.length, k = new Array(_);
          c.forEach(function(T, O) {
            return Ke.resolve(T).then(function(H) {
              return u(H);
            }, function(H) {
              k[O] = H, --_ || p(new AggregateError(k));
            });
          });
        });
      }), qr.withResolvers && (Ke.withResolvers = qr.withResolvers));
      var nt = { awaits: 0, echoes: 0, id: 0 }, T0 = 0, jn = [], b = 0, P = 0, C = 0;
      function I(c, u, p, _) {
        var k = Je, T = Object.create(k);
        return T.parent = k, T.ref = 0, T.global = false, T.id = ++C, pt.env, T.env = Ur ? { Promise: Ke, PromiseProp: { value: Ke, configurable: true, writable: true }, all: Ke.all, race: Ke.race, allSettled: Ke.allSettled, any: Ke.any, resolve: Ke.resolve, reject: Ke.reject } : {}, u && o(T, u), ++k.ref, T.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, _ = se(T, c, p, _), T.ref === 0 && T.finalize(), _;
      }
      function N() {
        return nt.id || (nt.id = ++T0), ++nt.awaits, nt.echoes += Tr, nt.id;
      }
      function L() {
        return !!nt.awaits && (--nt.awaits == 0 && (nt.id = 0), nt.echoes = nt.awaits * Tr, true);
      }
      function oe(c) {
        return nt.echoes && c && c.constructor === qr ? (N(), c.then(function(u) {
          return L(), u;
        }, function(u) {
          return L(), De(u);
        })) : c;
      }
      function xe() {
        var c = jn[jn.length - 1];
        jn.pop(), ne(c, false);
      }
      function ne(c, u) {
        var p, _ = Je;
        (u ? !nt.echoes || b++ && c === Je : !b || --b && c === Je) || queueMicrotask(u ? (function(k) {
          ++P, nt.echoes && --nt.echoes != 0 || (nt.echoes = nt.awaits = nt.id = 0), jn.push(Je), ne(k, true);
        }).bind(null, c) : xe), c !== Je && (Je = c, _ === pt && (pt.env = le()), Ur && (p = pt.env.Promise, u = c.env, (_.global || c.global) && (Object.defineProperty(i, "Promise", u.PromiseProp), p.all = u.all, p.race = u.race, p.resolve = u.resolve, p.reject = u.reject, u.allSettled && (p.allSettled = u.allSettled), u.any && (p.any = u.any))));
      }
      function le() {
        var c = i.Promise;
        return Ur ? { Promise: c, PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"), all: c.all, race: c.race, allSettled: c.allSettled, any: c.any, resolve: c.resolve, reject: c.reject } : {};
      }
      function se(c, u, p, _, k) {
        var T = Je;
        try {
          return ne(c, true), u(p, _, k);
        } finally {
          ne(T, false);
        }
      }
      function Ee(c, u, p, _) {
        return typeof c != "function" ? c : function() {
          var k = Je;
          p && N(), ne(u, true);
          try {
            return c.apply(this, arguments);
          } finally {
            ne(k, false), _ && queueMicrotask(L);
          }
        };
      }
      function Re(c) {
        Promise === qr && nt.echoes === 0 ? b === 0 ? c() : enqueueNativeMicroTask(c) : setTimeout(c, 0);
      }
      ("" + ia).indexOf("[native code]") === -1 && (N = L = ue);
      var De = Ke.reject, we = "\uFFFF", be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", Nr = [], Hr = "__dbnames", it = "readonly", La = "readwrite";
      function qt(c, u) {
        return c ? u ? function() {
          return c.apply(this, arguments) && u.apply(this, arguments);
        } : c : u;
      }
      var rn = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function na(c) {
        return typeof c != "string" || /\./.test(c) ? function(u) {
          return u;
        } : function(u) {
          return u[c] === void 0 && c in u && delete (u = ie(u))[c], u;
        };
      }
      function Gn() {
        throw W.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function lr(c, u) {
        try {
          var p = Oo(c), _ = Oo(u);
          if (p !== _) return p === "Array" ? 1 : _ === "Array" ? -1 : p === "binary" ? 1 : _ === "binary" ? -1 : p === "string" ? 1 : _ === "string" ? -1 : p === "Date" ? 1 : _ !== "Date" ? NaN : -1;
          switch (p) {
            case "number":
            case "Date":
            case "string":
              return u < c ? 1 : c < u ? -1 : 0;
            case "binary":
              return (function(k, T) {
                for (var O = k.length, H = T.length, q = O < H ? O : H, Y = 0; Y < q; ++Y) if (k[Y] !== T[Y]) return k[Y] < T[Y] ? -1 : 1;
                return O === H ? 0 : O < H ? -1 : 1;
              })(No(c), No(u));
            case "Array":
              return (function(k, T) {
                for (var O = k.length, H = T.length, q = O < H ? O : H, Y = 0; Y < q; ++Y) {
                  var re = lr(k[Y], T[Y]);
                  if (re !== 0) return re;
                }
                return O === H ? 0 : O < H ? -1 : 1;
              })(c, u);
          }
        } catch {
        }
        return NaN;
      }
      function Oo(c) {
        var u = typeof c;
        return u != "object" ? u : ArrayBuffer.isView(c) ? "binary" : (c = ve(c), c === "ArrayBuffer" ? "binary" : c);
      }
      function No(c) {
        return c instanceof Uint8Array ? c : ArrayBuffer.isView(c) ? new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : new Uint8Array(c);
      }
      function xs(c, u, p) {
        var _ = c.schema.yProps;
        return _ ? (u && 0 < p.numFailures && (u = u.filter(function(k, T) {
          return !p.failures[T];
        })), Promise.all(_.map(function(k) {
          return k = k.updatesTable, u ? c.db.table(k).where("k").anyOf(u).delete() : c.db.table(k).clear();
        })).then(function() {
          return p;
        })) : p;
      }
      var pi = (Ro.prototype.execute = function(c) {
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
          var _ = u.remove;
          if (f(_)) return f(c) ? c.filter(function(k) {
            return !_.includes(k);
          }).sort() : [];
          if (typeof _ == "number") return Number(c) - _;
          if (typeof _ == "bigint") try {
            return BigInt(c) - _;
          } catch {
            return BigInt(0) - _;
          }
          throw new TypeError("Invalid subtrahend ".concat(_));
        }
        return p = (p = u.replacePrefix) === null || p === void 0 ? void 0 : p[0], p && typeof c == "string" && c.startsWith(p) ? u.replacePrefix[1] + c.substring(p.length) : c;
      }, Ro);
      function Ro(c) {
        this["@@propmod"] = c;
      }
      function Po(c, u) {
        for (var p = s(u), _ = p.length, k = false, T = 0; T < _; ++T) {
          var O = p[T], H = u[O], q = j(c, O);
          H instanceof pi ? (F(c, O, H.execute(q)), k = true) : q !== H && (F(c, O, H), k = true);
        }
        return k;
      }
      var Bo = (Xr.prototype._trans = function(c, u, p) {
        var _ = this._tx || Je.trans, k = this.name, T = Er && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(c === "readonly" ? "read" : "write", " ").concat(this.name));
        function O(Y, re, G) {
          if (!G.schema[k]) throw new W.NotFound("Table " + k + " not part of transaction");
          return u(G.idbtrans, G);
        }
        var H = Qa();
        try {
          var q = _ && _.db._novip === this.db._novip ? _ === Je.trans ? _._promise(c, O, p) : I(function() {
            return _._promise(c, O, p);
          }, { trans: _, transless: Je.transless || Je }) : (function Y(re, G, ae, Z) {
            if (re.idbdb && (re._state.openComplete || Je.letThrough || re._vip)) {
              var Q = re._createTransaction(G, ae, re._dbSchema);
              try {
                Q.create(), re._state.PR1398_maxLoop = 3;
              } catch (ee) {
                return ee.name === Ze.InvalidState && re.isOpen() && 0 < --re._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), re.close({ disableAutoOpen: false }), re.open().then(function() {
                  return Y(re, G, ae, Z);
                })) : De(ee);
              }
              return Q._promise(G, function(ee, te) {
                return I(function() {
                  return Je.trans = Q, Z(ee, te, Q);
                });
              }).then(function(ee) {
                if (G === "readwrite") try {
                  Q.idbtrans.commit();
                } catch {
                }
                return G === "readonly" ? ee : Q._completion.then(function() {
                  return ee;
                });
              });
            }
            if (re._state.openComplete) return De(new W.DatabaseClosed(re._state.dbOpenError));
            if (!re._state.isBeingOpened) {
              if (!re._state.autoOpen) return De(new W.DatabaseClosed());
              re.open().catch(ue);
            }
            return re._state.dbReadyPromise.then(function() {
              return Y(re, G, ae, Z);
            });
          })(this.db, c, [this.name], O);
          return T && (q._consoleTask = T, q = q.catch(function(Y) {
            return console.trace(Y), De(Y);
          })), q;
        } finally {
          H && en();
        }
      }, Xr.prototype.get = function(c, u) {
        var p = this;
        return c && c.constructor === Object ? this.where(c).first(u) : c == null ? De(new W.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(_) {
          return p.core.get({ trans: _, key: c }).then(function(k) {
            return p.hook.reading.fire(k);
          });
        }).then(u);
      }, Xr.prototype.where = function(c) {
        if (typeof c == "string") return new this.db.WhereClause(this, c);
        if (f(c)) return new this.db.WhereClause(this, "[".concat(c.join("+"), "]"));
        var u = s(c);
        if (u.length === 1) return this.where(u[0]).equals(c[u[0]]);
        var p = this.schema.indexes.concat(this.schema.primKey).filter(function(H) {
          if (H.compound && u.every(function(Y) {
            return 0 <= H.keyPath.indexOf(Y);
          })) {
            for (var q = 0; q < u.length; ++q) if (u.indexOf(H.keyPath[q]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(H, q) {
          return H.keyPath.length - q.keyPath.length;
        })[0];
        if (p && this.db._maxKey !== we) {
          var T = p.keyPath.slice(0, u.length);
          return this.where(T).equals(T.map(function(q) {
            return c[q];
          }));
        }
        !p && Er && console.warn("The query ".concat(JSON.stringify(c), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(u.join("+"), "]"));
        var _ = this.schema.idxByName;
        function k(H, q) {
          return lr(H, q) === 0;
        }
        var O = u.reduce(function(G, q) {
          var Y = G[0], re = G[1], G = _[q], ae = c[q];
          return [Y || G, Y || !G ? qt(re, G && G.multi ? function(Z) {
            return Z = j(Z, q), f(Z) && Z.some(function(Q) {
              return k(ae, Q);
            });
          } : function(Z) {
            return k(ae, j(Z, q));
          }) : re];
        }, [null, null]), T = O[0], O = O[1];
        return T ? this.where(T.name).equals(c[T.keyPath]).filter(O) : p ? this.filter(O) : this.where(u).equals("");
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
        var u, p = this.db, _ = this.name;
        function k() {
          return u !== null && u.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = c).prototype instanceof Gn && ((function(q, Y) {
          if (typeof Y != "function" && Y !== null) throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
          function re() {
            this.constructor = q;
          }
          t(q, Y), q.prototype = Y === null ? Object.create(Y) : (re.prototype = Y.prototype, new re());
        })(k, u = c), Object.defineProperty(k.prototype, "db", { get: function() {
          return p;
        }, enumerable: false, configurable: true }), k.prototype.table = function() {
          return _;
        }, c = k);
        for (var T = /* @__PURE__ */ new Set(), O = c.prototype; O; O = l(O)) Object.getOwnPropertyNames(O).forEach(function(q) {
          return T.add(q);
        });
        function H(q) {
          if (!q) return q;
          var Y, re = Object.create(c.prototype);
          for (Y in q) if (!T.has(Y)) try {
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
      }, Xr.prototype.add = function(c, u) {
        var p = this, _ = this.schema.primKey, k = _.auto, T = _.keyPath, O = c;
        return T && k && (O = na(T)(c)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "add", keys: u != null ? [u] : null, values: [O] });
        }).then(function(H) {
          return H.numFailures ? Ke.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (T) try {
            F(c, T, H);
          } catch {
          }
          return H;
        });
      }, Xr.prototype.upsert = function(c, u) {
        var p = this, _ = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(k) {
          return p.core.get({ trans: k, key: c }).then(function(T) {
            var O = T ?? {};
            return Po(O, u), _ && F(O, _, c), p.core.mutate({ trans: k, type: "put", values: [O], keys: [c], upsert: true, updates: { keys: [c], changeSpecs: [u] } }).then(function(H) {
              return H.numFailures ? Ke.reject(H.failures[0]) : !!T;
            });
          });
        });
      }, Xr.prototype.update = function(c, u) {
        return typeof c != "object" || f(c) ? this.where(":id").equals(c).modify(u) : (c = j(c, this.schema.primKey.keyPath), c === void 0 ? De(new W.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(c).modify(u));
      }, Xr.prototype.put = function(c, u) {
        var p = this, _ = this.schema.primKey, k = _.auto, T = _.keyPath, O = c;
        return T && k && (O = na(T)(c)), this._trans("readwrite", function(H) {
          return p.core.mutate({ trans: H, type: "put", values: [O], keys: u != null ? [u] : null });
        }).then(function(H) {
          return H.numFailures ? Ke.reject(H.failures[0]) : H.lastResult;
        }).then(function(H) {
          if (T) try {
            F(c, T, H);
          } catch {
          }
          return H;
        });
      }, Xr.prototype.delete = function(c) {
        var u = this;
        return this._trans("readwrite", function(p) {
          return u.core.mutate({ trans: p, type: "delete", keys: [c] }).then(function(_) {
            return xs(u, [c], _);
          }).then(function(_) {
            return _.numFailures ? Ke.reject(_.failures[0]) : void 0;
          });
        });
      }, Xr.prototype.clear = function() {
        var c = this;
        return this._trans("readwrite", function(u) {
          return c.core.mutate({ trans: u, type: "deleteRange", range: rn }).then(function(p) {
            return xs(c, null, p);
          });
        }).then(function(u) {
          return u.numFailures ? Ke.reject(u.failures[0]) : void 0;
        });
      }, Xr.prototype.bulkGet = function(c) {
        var u = this;
        return this._trans("readonly", function(p) {
          return u.core.getMany({ keys: c, trans: p }).then(function(_) {
            return _.map(function(k) {
              return u.hook.reading.fire(k);
            });
          });
        });
      }, Xr.prototype.bulkAdd = function(c, u, p) {
        var _ = this, k = Array.isArray(u) ? u : void 0, T = (p = p || (k ? void 0 : u)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(O) {
          var Y = _.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && H ? c.map(na(Y)) : c;
          return _.core.mutate({ trans: O, type: "add", keys: k, values: Y, wantResults: T }).then(function(Q) {
            var G = Q.numFailures, ae = Q.results, Z = Q.lastResult, Q = Q.failures;
            if (G === 0) return T ? ae : Z;
            throw new ze("".concat(_.name, ".bulkAdd(): ").concat(G, " of ").concat(q, " operations failed"), Q);
          });
        });
      }, Xr.prototype.bulkPut = function(c, u, p) {
        var _ = this, k = Array.isArray(u) ? u : void 0, T = (p = p || (k ? void 0 : u)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(O) {
          var Y = _.schema.primKey, H = Y.auto, Y = Y.keyPath;
          if (Y && k) throw new W.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== c.length) throw new W.InvalidArgument("Arguments objects and keys must have the same length");
          var q = c.length, Y = Y && H ? c.map(na(Y)) : c;
          return _.core.mutate({ trans: O, type: "put", keys: k, values: Y, wantResults: T }).then(function(Q) {
            var G = Q.numFailures, ae = Q.results, Z = Q.lastResult, Q = Q.failures;
            if (G === 0) return T ? ae : Z;
            throw new ze("".concat(_.name, ".bulkPut(): ").concat(G, " of ").concat(q, " operations failed"), Q);
          });
        });
      }, Xr.prototype.bulkUpdate = function(c) {
        var u = this, p = this.core, _ = c.map(function(O) {
          return O.key;
        }), k = c.map(function(O) {
          return O.changes;
        }), T = [];
        return this._trans("readwrite", function(O) {
          return p.getMany({ trans: O, keys: _, cache: "clone" }).then(function(H) {
            var q = [], Y = [];
            c.forEach(function(G, ae) {
              var Z = G.key, Q = G.changes, ee = H[ae];
              if (ee) {
                for (var te = 0, fe = Object.keys(Q); te < fe.length; te++) {
                  var he = fe[te], pe = Q[he];
                  if (he === u.schema.primKey.keyPath) {
                    if (lr(pe, Z) !== 0) throw new W.Constraint("Cannot update primary key in bulkUpdate()");
                  } else F(ee, he, pe);
                }
                T.push(ae), q.push(Z), Y.push(ee);
              }
            });
            var re = q.length;
            return p.mutate({ trans: O, type: "put", keys: q, values: Y, updates: { keys: _, changeSpecs: k } }).then(function(G) {
              var ae = G.numFailures, Z = G.failures;
              if (ae === 0) return re;
              for (var Q = 0, ee = Object.keys(Z); Q < ee.length; Q++) {
                var te, fe = ee[Q], he = T[Number(fe)];
                he != null && (te = Z[fe], delete Z[fe], Z[he] = te);
              }
              throw new ze("".concat(u.name, ".bulkUpdate(): ").concat(ae, " of ").concat(re, " operations failed"), Z);
            });
          });
        });
      }, Xr.prototype.bulkDelete = function(c) {
        var u = this, p = c.length;
        return this._trans("readwrite", function(_) {
          return u.core.mutate({ trans: _, type: "delete", keys: c }).then(function(k) {
            return xs(u, c, k);
          });
        }).then(function(O) {
          var k = O.numFailures, T = O.lastResult, O = O.failures;
          if (k === 0) return T;
          throw new ze("".concat(u.name, ".bulkDelete(): ").concat(k, " of ").concat(p, " operations failed"), O);
        });
      }, Xr);
      function Xr() {
      }
      function vi(c) {
        function u(O, H) {
          if (H) {
            for (var q = arguments.length, Y = new Array(q - 1); --q; ) Y[q - 1] = arguments[q];
            return p[O].subscribe.apply(null, Y), c;
          }
          if (typeof O == "string") return p[O];
        }
        var p = {};
        u.addEventType = T;
        for (var _ = 1, k = arguments.length; _ < k; ++_) T(arguments[_]);
        return u;
        function T(O, H, q) {
          if (typeof O != "object") {
            var Y;
            H = H || or;
            var re = { subscribers: [], fire: q = q || ue, subscribe: function(G) {
              re.subscribers.indexOf(G) === -1 && (re.subscribers.push(G), re.fire = H(re.fire, G));
            }, unsubscribe: function(G) {
              re.subscribers = re.subscribers.filter(function(ae) {
                return ae !== G;
              }), re.fire = re.subscribers.reduce(H, q);
            } };
            return p[O] = u[O] = re;
          }
          s(Y = O).forEach(function(G) {
            var ae = Y[G];
            if (f(ae)) T(G, Y[G][0], Y[G][1]);
            else {
              if (ae !== "asap") throw new W.InvalidArgument("Invalid event config");
              var Z = T(G, D, function() {
                for (var Q = arguments.length, ee = new Array(Q); Q--; ) ee[Q] = arguments[Q];
                Z.subscribers.forEach(function(te) {
                  X(function() {
                    te.apply(null, ee);
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
      function zn(c, u) {
        return !(c.filter || c.algorithm || c.or) && (u ? c.justLimit : !c.replayFilter);
      }
      function S0(c, u) {
        c.filter = qt(c.filter, u);
      }
      function b0(c, u, p) {
        var _ = c.replayFilter;
        c.replayFilter = _ ? function() {
          return qt(_(), u());
        } : u, c.justLimit = p && !_;
      }
      function ps(c, u) {
        if (c.isPrimKey) return u.primaryKey;
        var p = u.getIndexByKeyPath(c.index);
        if (!p) throw new W.Schema("KeyPath " + c.index + " on object store " + u.name + " is not indexed");
        return p;
      }
      function Lo(c, u, p) {
        var _ = ps(c, u.schema);
        return u.openCursor({ trans: p, values: !c.keysOnly, reverse: c.dir === "prev", unique: !!c.unique, query: { index: _, range: c.range } });
      }
      function vs(c, u, p, _) {
        var k = c.replayFilter ? qt(c.filter, c.replayFilter()) : c.filter;
        if (c.or) {
          var T = {}, O = function(H, q, Y) {
            var re, G;
            k && !k(q, Y, function(ae) {
              return q.stop(ae);
            }, function(ae) {
              return q.fail(ae);
            }) || ((G = "" + (re = q.primaryKey)) == "[object ArrayBuffer]" && (G = "" + new Uint8Array(re)), v(T, G) || (T[G] = true, u(H, q, Y)));
          };
          return Promise.all([c.or._iterate(O, p), Mo(Lo(c, _, p), c.algorithm, O, !c.keysOnly && c.valueMapper)]);
        }
        return Mo(Lo(c, _, p), qt(c.algorithm, k), u, !c.keysOnly && c.valueMapper);
      }
      function Mo(c, u, p, _) {
        var k = Wr(_ ? function(T, O, H) {
          return p(_(T), O, H);
        } : p);
        return c.then(function(T) {
          if (T) return T.start(function() {
            var O = function() {
              return T.continue();
            };
            u && !u(T, function(H) {
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
      var Hh = (Or.prototype._read = function(c, u) {
        var p = this._ctx;
        return p.error ? p.table._trans(null, De.bind(null, p.error)) : p.table._trans("readonly", c).then(u);
      }, Or.prototype._write = function(c) {
        var u = this._ctx;
        return u.error ? u.table._trans(null, De.bind(null, u.error)) : u.table._trans("readwrite", c, "locked");
      }, Or.prototype._addAlgorithm = function(c) {
        var u = this._ctx;
        u.algorithm = qt(u.algorithm, c);
      }, Or.prototype._iterate = function(c, u) {
        return vs(this._ctx, c, u, this._ctx.table.core);
      }, Or.prototype.clone = function(c) {
        var u = Object.create(this.constructor.prototype), p = Object.create(this._ctx);
        return c && o(p, c), u._ctx = p, u;
      }, Or.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Or.prototype.each = function(c) {
        var u = this._ctx;
        return this._read(function(p) {
          return vs(u, c, p, u.table.core);
        });
      }, Or.prototype.count = function(c) {
        var u = this;
        return this._read(function(p) {
          var _ = u._ctx, k = _.table.core;
          if (zn(_, true)) return k.count({ trans: p, query: { index: ps(_, k.schema), range: _.range } }).then(function(O) {
            return Math.min(O, _.limit);
          });
          var T = 0;
          return vs(_, function() {
            return ++T, false;
          }, p, k).then(function() {
            return T;
          });
        }).then(c);
      }, Or.prototype.sortBy = function(c, u) {
        var p = c.split(".").reverse(), _ = p[0], k = p.length - 1;
        function T(q, Y) {
          return Y ? T(q[p[Y]], Y - 1) : q[_];
        }
        var O = this._ctx.dir === "next" ? 1 : -1;
        function H(q, Y) {
          return lr(T(q, k), T(Y, k)) * O;
        }
        return this.toArray(function(q) {
          return q.sort(H);
        }).then(u);
      }, Or.prototype.toArray = function(c) {
        var u = this;
        return this._read(function(p) {
          var _ = u._ctx;
          if (_.dir === "next" && zn(_, true) && 0 < _.limit) {
            var k = _.valueMapper, T = ps(_, _.table.core.schema);
            return _.table.core.query({ trans: p, limit: _.limit, values: true, query: { index: T, range: _.range } }).then(function(H) {
              return H = H.result, k ? H.map(k) : H;
            });
          }
          var O = [];
          return vs(_, function(H) {
            return O.push(H);
          }, p, _.table.core).then(function() {
            return O;
          });
        }, c);
      }, Or.prototype.offset = function(c) {
        var u = this._ctx;
        return c <= 0 || (u.offset += c, zn(u) ? b0(u, function() {
          var p = c;
          return function(_, k) {
            return p === 0 || (p === 1 ? --p : k(function() {
              _.advance(p), p = 0;
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
          return function(p, _, k) {
            return --u <= 0 && _(k), 0 <= u;
          };
        }, true), this;
      }, Or.prototype.until = function(c, u) {
        return S0(this._ctx, function(p, _, k) {
          return !c(p.value) || (_(k), u);
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
        return u.keysOnly = !u.isMatch, this.each(function(p, _) {
          c(_.key, _);
        });
      }, Or.prototype.eachUniqueKey = function(c) {
        return this._ctx.unique = "unique", this.eachKey(c);
      }, Or.prototype.eachPrimaryKey = function(c) {
        var u = this._ctx;
        return u.keysOnly = !u.isMatch, this.each(function(p, _) {
          c(_.primaryKey, _);
        });
      }, Or.prototype.keys = function(c) {
        var u = this._ctx;
        u.keysOnly = !u.isMatch;
        var p = [];
        return this.each(function(_, k) {
          p.push(k.key);
        }).then(function() {
          return p;
        }).then(c);
      }, Or.prototype.primaryKeys = function(c) {
        var u = this._ctx;
        if (u.dir === "next" && zn(u, true) && 0 < u.limit) return this._read(function(_) {
          var k = ps(u, u.table.core.schema);
          return u.table.core.query({ trans: _, values: false, limit: u.limit, query: { index: k, range: u.range } });
        }).then(function(_) {
          return _.result;
        }).then(c);
        u.keysOnly = !u.isMatch;
        var p = [];
        return this.each(function(_, k) {
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
          var _ = k.primaryKey.toString(), k = v(u, _);
          return u[_] = true, !k;
        }), this;
      }, Or.prototype.modify = function(c) {
        var u = this, p = this._ctx;
        return this._write(function(_) {
          var k = typeof c == "function" ? c : function(ee) {
            return Po(ee, c);
          }, T = p.table.core, Y = T.schema.primaryKey, O = Y.outbound, H = Y.extractKey, q = 200, Y = u.db._options.modifyChunkSize;
          Y && (q = typeof Y == "object" ? Y[T.name] || Y["*"] || 200 : Y);
          function re(ee, he) {
            var fe = he.failures, he = he.numFailures;
            ae += ee - he;
            for (var pe = 0, ge = s(fe); pe < ge.length; pe++) {
              var Pe = ge[pe];
              G.push(fe[Pe]);
            }
          }
          var G = [], ae = 0, Z = [], Q = c === Uo;
          return u.clone().primaryKeys().then(function(ee) {
            function te(he) {
              var pe = Math.min(q, ee.length - he), ge = ee.slice(he, he + pe);
              return (Q ? Promise.resolve([]) : T.getMany({ trans: _, keys: ge, cache: "immutable" })).then(function(Pe) {
                var He = [], Fe = [], Le = O ? [] : null, Xe = Q ? ge : [];
                if (!Q) for (var Ue = 0; Ue < pe; ++Ue) {
                  var qe = Pe[Ue], pr = { value: ie(qe), primKey: ee[he + Ue] };
                  k.call(pr, pr.value, pr) !== false && (pr.value == null ? Xe.push(ee[he + Ue]) : O || lr(H(qe), H(pr.value)) === 0 ? (Fe.push(pr.value), O && Le.push(ee[he + Ue])) : (Xe.push(ee[he + Ue]), He.push(pr.value)));
                }
                return Promise.resolve(0 < He.length && T.mutate({ trans: _, type: "add", values: He }).then(function(_r) {
                  for (var Sr in _r.failures) Xe.splice(parseInt(Sr), 1);
                  re(He.length, _r);
                })).then(function() {
                  return (0 < Fe.length || fe && typeof c == "object") && T.mutate({ trans: _, type: "put", keys: Le, values: Fe, criteria: fe, changeSpec: typeof c != "function" && c, isAdditionalChunk: 0 < he }).then(function(_r) {
                    return re(Fe.length, _r);
                  });
                }).then(function() {
                  return (0 < Xe.length || fe && Q) && T.mutate({ trans: _, type: "delete", keys: Xe, criteria: fe, isAdditionalChunk: 0 < he }).then(function(_r) {
                    return xs(p.table, Xe, _r);
                  }).then(function(_r) {
                    return re(Xe.length, _r);
                  });
                }).then(function() {
                  return ee.length > he + pe && te(he + q);
                });
              });
            }
            var fe = zn(p) && p.limit === 1 / 0 && (typeof c != "function" || Q) && { index: p.index, range: p.range };
            return te(0).then(function() {
              if (0 < G.length) throw new Ge("Error modifying one or more objects", G, ae, Z);
              return ee.length;
            });
          });
        });
      }, Or.prototype.delete = function() {
        var c = this._ctx, u = c.range;
        return !zn(c) || c.table.schema.yProps || !c.isPrimKey && u.type !== 3 ? this.modify(Uo) : this._write(function(p) {
          var _ = c.table.core.schema.primaryKey, k = u;
          return c.table.core.count({ trans: p, query: { index: _, range: k } }).then(function(T) {
            return c.table.core.mutate({ trans: p, type: "deleteRange", range: k }).then(function(q) {
              var H = q.failures, q = q.numFailures;
              if (q) throw new Ge("Could not delete some values", Object.keys(H).map(function(Y) {
                return H[Y];
              }), T - q);
              return T - q;
            });
          });
        });
      }, Or);
      function Or() {
      }
      var Uo = function(c, u) {
        return u.value = null;
      };
      function Vh(c, u) {
        return c < u ? -1 : c === u ? 0 : 1;
      }
      function Xh(c, u) {
        return u < c ? -1 : c === u ? 0 : 1;
      }
      function Yt(c, u, p) {
        return c = c instanceof Ho ? new c.Collection(c) : c, c._ctx.error = new (p || TypeError)(u), c;
      }
      function $n(c) {
        return new c.Collection(c, function() {
          return Wo("");
        }).limit(0);
      }
      function ms(c, u, p, _) {
        var k, T, O, H, q, Y, re, G = p.length;
        if (!p.every(function(Q) {
          return typeof Q == "string";
        })) return Yt(c, cr);
        function ae(Q) {
          k = Q === "next" ? function(te) {
            return te.toUpperCase();
          } : function(te) {
            return te.toLowerCase();
          }, T = Q === "next" ? function(te) {
            return te.toLowerCase();
          } : function(te) {
            return te.toUpperCase();
          }, O = Q === "next" ? Vh : Xh;
          var ee = p.map(function(te) {
            return { lower: T(te), upper: k(te) };
          }).sort(function(te, fe) {
            return O(te.lower, fe.lower);
          });
          H = ee.map(function(te) {
            return te.upper;
          }), q = ee.map(function(te) {
            return te.lower;
          }), re = (Y = Q) === "next" ? "" : _;
        }
        ae("next"), c = new c.Collection(c, function() {
          return tn(H[0], q[G - 1] + _);
        }), c._ondirectionchange = function(Q) {
          ae(Q);
        };
        var Z = 0;
        return c._addAlgorithm(function(Q, ee, te) {
          var fe = Q.key;
          if (typeof fe != "string") return false;
          var he = T(fe);
          if (u(he, q, Z)) return true;
          for (var pe = null, ge = Z; ge < G; ++ge) {
            var Pe = (function(He, Fe, Le, Xe, Ue, qe) {
              for (var pr = Math.min(He.length, Xe.length), _r = -1, Sr = 0; Sr < pr; ++Sr) {
                var Zt = Fe[Sr];
                if (Zt !== Xe[Sr]) return Ue(He[Sr], Le[Sr]) < 0 ? He.substr(0, Sr) + Le[Sr] + Le.substr(Sr + 1) : Ue(He[Sr], Xe[Sr]) < 0 ? He.substr(0, Sr) + Xe[Sr] + Le.substr(Sr + 1) : 0 <= _r ? He.substr(0, _r) + Fe[_r] + Le.substr(_r + 1) : null;
                Ue(He[Sr], Zt) < 0 && (_r = Sr);
              }
              return pr < Xe.length && qe === "next" ? He + Le.substr(He.length) : pr < He.length && qe === "prev" ? He.substr(0, Le.length) : _r < 0 ? null : He.substr(0, _r) + Xe[_r] + Le.substr(_r + 1);
            })(fe, he, H[ge], q[ge], O, Y);
            Pe === null && pe === null ? Z = ge + 1 : (pe === null || 0 < O(pe, Pe)) && (pe = Pe);
          }
          return ee(pe !== null ? function() {
            Q.continue(pe + re);
          } : te), false;
        }), c;
      }
      function tn(c, u, p, _) {
        return { type: 2, lower: c, upper: u, lowerOpen: p, upperOpen: _ };
      }
      function Wo(c) {
        return { type: 1, lower: c, upper: c };
      }
      var Ho = (Object.defineProperty(vt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), vt.prototype.between = function(c, u, p, _) {
        p = p !== false, _ = _ === true;
        try {
          return 0 < this._cmp(c, u) || this._cmp(c, u) === 0 && (p || _) && (!p || !_) ? $n(this) : new this.Collection(this, function() {
            return tn(c, u, !p, !_);
          });
        } catch {
          return Yt(this, be);
        }
      }, vt.prototype.equals = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return Wo(c);
        });
      }, vt.prototype.above = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return tn(c, void 0, true);
        });
      }, vt.prototype.aboveOrEqual = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return tn(c, void 0, false);
        });
      }, vt.prototype.below = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return tn(void 0, c, false, true);
        });
      }, vt.prototype.belowOrEqual = function(c) {
        return c == null ? Yt(this, be) : new this.Collection(this, function() {
          return tn(void 0, c);
        });
      }, vt.prototype.startsWith = function(c) {
        return typeof c != "string" ? Yt(this, cr) : this.between(c, c + we, true, true);
      }, vt.prototype.startsWithIgnoreCase = function(c) {
        return c === "" ? this.startsWith(c) : ms(this, function(u, p) {
          return u.indexOf(p[0]) === 0;
        }, [c], we);
      }, vt.prototype.equalsIgnoreCase = function(c) {
        return ms(this, function(u, p) {
          return u === p[0];
        }, [c], "");
      }, vt.prototype.anyOfIgnoreCase = function() {
        var c = de.apply(Qe, arguments);
        return c.length === 0 ? $n(this) : ms(this, function(u, p) {
          return p.indexOf(u) !== -1;
        }, c, "");
      }, vt.prototype.startsWithAnyOfIgnoreCase = function() {
        var c = de.apply(Qe, arguments);
        return c.length === 0 ? $n(this) : ms(this, function(u, p) {
          return p.some(function(_) {
            return u.indexOf(_) === 0;
          });
        }, c, we);
      }, vt.prototype.anyOf = function() {
        var c = this, u = de.apply(Qe, arguments), p = this._cmp;
        try {
          u.sort(p);
        } catch {
          return Yt(this, be);
        }
        if (u.length === 0) return $n(this);
        var _ = new this.Collection(this, function() {
          return tn(u[0], u[u.length - 1]);
        });
        _._ondirectionchange = function(T) {
          p = T === "next" ? c._ascending : c._descending, u.sort(p);
        };
        var k = 0;
        return _._addAlgorithm(function(T, O, H) {
          for (var q = T.key; 0 < p(q, u[k]); ) if (++k === u.length) return O(H), false;
          return p(q, u[k]) === 0 || (O(function() {
            T.continue(u[k]);
          }), false);
        }), _;
      }, vt.prototype.notEqual = function(c) {
        return this.inAnyRange([[-1 / 0, c], [c, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, vt.prototype.noneOf = function() {
        var c = de.apply(Qe, arguments);
        if (c.length === 0) return new this.Collection(this);
        try {
          c.sort(this._ascending);
        } catch {
          return Yt(this, be);
        }
        var u = c.reduce(function(p, _) {
          return p ? p.concat([[p[p.length - 1][1], _]]) : [[-1 / 0, _]];
        }, null);
        return u.push([c[c.length - 1], this.db._maxKey]), this.inAnyRange(u, { includeLowers: false, includeUppers: false });
      }, vt.prototype.inAnyRange = function(fe, u) {
        var p = this, _ = this._cmp, k = this._ascending, T = this._descending, O = this._min, H = this._max;
        if (fe.length === 0) return $n(this);
        if (!fe.every(function(he) {
          return he[0] !== void 0 && he[1] !== void 0 && k(he[0], he[1]) <= 0;
        })) return Yt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", W.InvalidArgument);
        var q = !u || u.includeLowers !== false, Y = u && u.includeUppers === true, re, G = k;
        function ae(he, pe) {
          return G(he[0], pe[0]);
        }
        try {
          (re = fe.reduce(function(he, pe) {
            for (var ge = 0, Pe = he.length; ge < Pe; ++ge) {
              var He = he[ge];
              if (_(pe[0], He[1]) < 0 && 0 < _(pe[1], He[0])) {
                He[0] = O(He[0], pe[0]), He[1] = H(He[1], pe[1]);
                break;
              }
            }
            return ge === Pe && he.push(pe), he;
          }, [])).sort(ae);
        } catch {
          return Yt(this, be);
        }
        var Z = 0, Q = Y ? function(he) {
          return 0 < k(he, re[Z][1]);
        } : function(he) {
          return 0 <= k(he, re[Z][1]);
        }, ee = q ? function(he) {
          return 0 < T(he, re[Z][0]);
        } : function(he) {
          return 0 <= T(he, re[Z][0]);
        }, te = Q, fe = new this.Collection(this, function() {
          return tn(re[0][0], re[re.length - 1][1], !q, !Y);
        });
        return fe._ondirectionchange = function(he) {
          G = he === "next" ? (te = Q, k) : (te = ee, T), re.sort(ae);
        }, fe._addAlgorithm(function(he, pe, ge) {
          for (var Pe, He = he.key; te(He); ) if (++Z === re.length) return pe(ge), false;
          return !Q(Pe = He) && !ee(Pe) || (p._cmp(He, re[Z][1]) === 0 || p._cmp(He, re[Z][0]) === 0 || pe(function() {
            G === k ? he.continue(re[Z][0]) : he.continue(re[Z][1]);
          }), false);
        }), fe;
      }, vt.prototype.startsWithAnyOf = function() {
        var c = de.apply(Qe, arguments);
        return c.every(function(u) {
          return typeof u == "string";
        }) ? c.length === 0 ? $n(this) : this.inAnyRange(c.map(function(u) {
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
      var _i = "storagemutated", F0 = "x-storagemutated-1", an = vi(null, _i), Kh = (ba.prototype._lock = function() {
        return A(!Je.global), ++this._reculock, this._reculock !== 1 || Je.global || (Je.lockOwnerFor = this), this;
      }, ba.prototype._unlock = function() {
        if (A(!Je.global), --this._reculock == 0) for (Je.global || (Je.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var c = this._blockedFuncs.shift();
          try {
            se(c[1], c[0]);
          } catch {
          }
        }
        return this;
      }, ba.prototype._locked = function() {
        return this._reculock && Je.lockOwnerFor !== this;
      }, ba.prototype.create = function(c) {
        var u = this;
        if (!this.mode) return this;
        var p = this.db.idbdb, _ = this.db._state.dbOpenError;
        if (A(!this.idbtrans), !c && !p) switch (_ && _.name) {
          case "DatabaseClosedError":
            throw new W.DatabaseClosed(_);
          case "MissingAPIError":
            throw new W.MissingAPI(_.message, _);
          default:
            throw new W.OpenFailed(_);
        }
        if (!this.active) throw new W.TransactionInactive();
        return A(this._completion._state === null), (c = this.idbtrans = c || (this.db.core || p).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Wr(function(k) {
          gi(k), u._reject(c.error);
        }), c.onabort = Wr(function(k) {
          gi(k), u.active && u._reject(new W.Abort(c.error)), u.active = false, u.on("abort").fire(k);
        }), c.oncomplete = Wr(function() {
          u.active = false, u._resolve(), "mutatedParts" in c && an.storagemutated.fire(c.mutatedParts);
        }), this;
      }, ba.prototype._promise = function(c, u, p) {
        var _ = this;
        if (c === "readwrite" && this.mode !== "readwrite") return De(new W.ReadOnly("Transaction is readonly"));
        if (!this.active) return De(new W.TransactionInactive());
        if (this._locked()) return new Ke(function(T, O) {
          _._blockedFuncs.push([function() {
            _._promise(c, u, p).then(T, O);
          }, Je]);
        });
        if (p) return I(function() {
          var T = new Ke(function(O, H) {
            _._lock();
            var q = u(O, H, _);
            q && q.then && q.then(O, H);
          });
          return T.finally(function() {
            return _._unlock();
          }), T._lib = true, T;
        });
        var k = new Ke(function(T, O) {
          var H = u(T, O, _);
          H && H.then && H.then(T, O);
        });
        return k._lib = true, k;
      }, ba.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ba.prototype.waitFor = function(c) {
        var u, p = this._root(), _ = Ke.resolve(c);
        p._waitingFor ? p._waitingFor = p._waitingFor.then(function() {
          return _;
        }) : (p._waitingFor = _, p._waitingQueue = [], u = p.idbtrans.objectStore(p.storeNames[0]), (function T() {
          for (++p._spinCount; p._waitingQueue.length; ) p._waitingQueue.shift()();
          p._waitingFor && (u.get(-1 / 0).onsuccess = T);
        })());
        var k = p._waitingFor;
        return new Ke(function(T, O) {
          _.then(function(H) {
            return p._waitingQueue.push(Wr(T.bind(null, H)));
          }, function(H) {
            return p._waitingQueue.push(Wr(O.bind(null, H)));
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
      function A0(c, u, p, _, k, T, O, H) {
        return { name: c, keyPath: u, unique: p, multi: _, auto: k, compound: T, src: (p && !O ? "&" : "") + (_ ? "*" : "") + (k ? "++" : "") + Vo(u), type: H };
      }
      function Vo(c) {
        return typeof c == "string" ? c : c ? "[" + [].join.call(c, "+") + "]" : "";
      }
      function C0(c, u, p) {
        return { name: c, primKey: u, indexes: p, mappedClass: null, idxByName: (_ = function(k) {
          return [k.name, k];
        }, p.reduce(function(k, T, O) {
          return O = _(T, O), O && (k[O[0]] = O[1]), k;
        }, {})) };
        var _;
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
          return j(p, u);
        } : function(p) {
          return j(p, c);
        };
        var u;
      }
      function Xo(c) {
        return [].slice.call(c);
      }
      var jh = 0;
      function yi(c) {
        return c == null ? ":id" : typeof c == "string" ? c : "[".concat(c.join("+"), "]");
      }
      function Gh(c, u, q) {
        function _(te) {
          if (te.type === 3) return null;
          if (te.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var Z = te.lower, Q = te.upper, ee = te.lowerOpen, te = te.upperOpen;
          return Z === void 0 ? Q === void 0 ? null : u.upperBound(Q, !!te) : Q === void 0 ? u.lowerBound(Z, !!ee) : u.bound(Z, Q, !!ee, !!te);
        }
        function k(ae) {
          var Z, Q = ae.name;
          return { name: Q, schema: ae, mutate: function(ee) {
            var te = ee.trans, fe = ee.type, he = ee.keys, pe = ee.values, ge = ee.range;
            return new Promise(function(Pe, He) {
              Pe = Wr(Pe);
              var Fe = te.objectStore(Q), Le = Fe.keyPath == null, Xe = fe === "put" || fe === "add";
              if (!Xe && fe !== "delete" && fe !== "deleteRange") throw new Error("Invalid operation type: " + fe);
              var Ue, qe = (he || pe || { length: 1 }).length;
              if (he && pe && he.length !== pe.length) throw new Error("Given keys array must have same length as given values array.");
              if (qe === 0) return Pe({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function pr(Ht) {
                ++Zt, gi(Ht);
              }
              var _r = [], Sr = [], Zt = 0;
              if (fe === "deleteRange") {
                if (ge.type === 4) return Pe({ numFailures: Zt, failures: Sr, results: [], lastResult: void 0 });
                ge.type === 3 ? _r.push(Ue = Fe.clear()) : _r.push(Ue = Fe.delete(_(ge)));
              } else {
                var Le = Xe ? Le ? [pe, he] : [pe, null] : [he, null], ur = Le[0], St = Le[1];
                if (Xe) for (var bt = 0; bt < qe; ++bt) _r.push(Ue = St && St[bt] !== void 0 ? Fe[fe](ur[bt], St[bt]) : Fe[fe](ur[bt])), Ue.onerror = pr;
                else for (bt = 0; bt < qe; ++bt) _r.push(Ue = Fe[fe](ur[bt])), Ue.onerror = pr;
              }
              function Cs(Ht) {
                Ht = Ht.target.result, _r.forEach(function(wn, $0) {
                  return wn.error != null && (Sr[$0] = wn.error);
                }), Pe({ numFailures: Zt, failures: Sr, results: fe === "delete" ? he : _r.map(function(wn) {
                  return wn.result;
                }), lastResult: Ht });
              }
              Ue.onerror = function(Ht) {
                pr(Ht), Cs(Ht);
              }, Ue.onsuccess = Cs;
            });
          }, getMany: function(ee) {
            var te = ee.trans, fe = ee.keys;
            return new Promise(function(he, pe) {
              he = Wr(he);
              for (var ge, Pe = te.objectStore(Q), He = fe.length, Fe = new Array(He), Le = 0, Xe = 0, Ue = function(_r) {
                _r = _r.target, Fe[_r._pos] = _r.result, ++Xe === Le && he(Fe);
              }, qe = Sa(pe), pr = 0; pr < He; ++pr) fe[pr] != null && ((ge = Pe.get(fe[pr]))._pos = pr, ge.onsuccess = Ue, ge.onerror = qe, ++Le);
              Le === 0 && he(Fe);
            });
          }, get: function(ee) {
            var te = ee.trans, fe = ee.key;
            return new Promise(function(he, pe) {
              he = Wr(he);
              var ge = te.objectStore(Q).get(fe);
              ge.onsuccess = function(Pe) {
                return he(Pe.target.result);
              }, ge.onerror = Sa(pe);
            });
          }, query: (Z = Y, function(ee) {
            return new Promise(function(te, fe) {
              te = Wr(te);
              var he, pe, ge, Le = ee.trans, Pe = ee.values, He = ee.limit, Ue = ee.query, Fe = He === 1 / 0 ? void 0 : He, Xe = Ue.index, Ue = Ue.range, Le = Le.objectStore(Q), Xe = Xe.isPrimaryKey ? Le : Le.index(Xe.name), Ue = _(Ue);
              if (He === 0) return te({ result: [] });
              Z ? ((Fe = Pe ? Xe.getAll(Ue, Fe) : Xe.getAllKeys(Ue, Fe)).onsuccess = function(qe) {
                return te({ result: qe.target.result });
              }, Fe.onerror = Sa(fe)) : (he = 0, pe = !Pe && "openKeyCursor" in Xe ? Xe.openKeyCursor(Ue) : Xe.openCursor(Ue), ge = [], pe.onsuccess = function(qe) {
                var pr = pe.result;
                return pr ? (ge.push(Pe ? pr.value : pr.primaryKey), ++he === He ? te({ result: ge }) : void pr.continue()) : te({ result: ge });
              }, pe.onerror = Sa(fe));
            });
          }), openCursor: function(ee) {
            var te = ee.trans, fe = ee.values, he = ee.query, pe = ee.reverse, ge = ee.unique;
            return new Promise(function(Pe, He) {
              Pe = Wr(Pe);
              var Xe = he.index, Fe = he.range, Le = te.objectStore(Q), Le = Xe.isPrimaryKey ? Le : Le.index(Xe.name), Xe = pe ? ge ? "prevunique" : "prev" : ge ? "nextunique" : "next", Ue = !fe && "openKeyCursor" in Le ? Le.openKeyCursor(_(Fe), Xe) : Le.openCursor(_(Fe), Xe);
              Ue.onerror = Sa(He), Ue.onsuccess = Wr(function(qe) {
                var pr, _r, Sr, Zt, ur = Ue.result;
                ur ? (ur.___id = ++jh, ur.done = false, pr = ur.continue.bind(ur), _r = (_r = ur.continuePrimaryKey) && _r.bind(ur), Sr = ur.advance.bind(ur), Zt = function() {
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
                    } catch (Ht) {
                      ur.fail(Ht);
                    }
                    else ur.done = true, ur.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ur.stop();
                  }
                  var Cs = new Promise(function(Ht, wn) {
                    Ht = Wr(Ht), Ue.onerror = Sa(wn), ur.fail = wn, ur.stop = function($0) {
                      ur.stop = ur.continue = ur.continuePrimaryKey = ur.advance = Zt, Ht($0);
                    };
                  });
                  return Ue.onsuccess = Wr(function(Ht) {
                    Ue.onsuccess = bt, bt();
                  }), ur.continue = pr, ur.continuePrimaryKey = _r, ur.advance = Sr, bt(), Cs;
                }, Pe(ur)) : Pe(null);
              }, He);
            });
          }, count: function(ee) {
            var te = ee.query, fe = ee.trans, he = te.index, pe = te.range;
            return new Promise(function(ge, Pe) {
              var He = fe.objectStore(Q), Fe = he.isPrimaryKey ? He : He.index(he.name), He = _(pe), Fe = He ? Fe.count(He) : Fe.count();
              Fe.onsuccess = Wr(function(Le) {
                return ge(Le.target.result);
              }), Fe.onerror = Sa(Pe);
            });
          } };
        }
        var T, O, H, re = (O = q, H = Xo((T = c).objectStoreNames), { schema: { name: T.name, tables: H.map(function(ae) {
          return O.objectStore(ae);
        }).map(function(ae) {
          var Z = ae.keyPath, te = ae.autoIncrement, Q = f(Z), ee = {}, te = { name: ae.name, primaryKey: { name: null, isPrimaryKey: true, outbound: Z == null, compound: Q, keyPath: Z, autoIncrement: te, unique: true, extractKey: I0(Z) }, indexes: Xo(ae.indexNames).map(function(fe) {
            return ae.index(fe);
          }).map(function(ge) {
            var he = ge.name, pe = ge.unique, Pe = ge.multiEntry, ge = ge.keyPath, Pe = { name: he, compound: f(ge), keyPath: ge, unique: pe, multiEntry: Pe, extractKey: I0(ge) };
            return ee[yi(ge)] = Pe;
          }), getIndexByKeyPath: function(fe) {
            return ee[yi(fe)];
          } };
          return ee[":id"] = te.primaryKey, Z != null && (ee[yi(Z)] = te.primaryKey), te;
        }) }, hasGetAll: 0 < H.length && "getAll" in O.objectStore(H[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), q = re.schema, Y = re.hasGetAll, re = q.tables.map(k), G = {};
        return re.forEach(function(ae) {
          return G[ae.name] = ae;
        }), { stack: "dbcore", transaction: c.transaction.bind(c), table: function(ae) {
          if (!G[ae]) throw new Error("Table '".concat(ae, "' not found"));
          return G[ae];
        }, MIN_KEY: -1 / 0, MAX_KEY: wi(u), schema: q };
      }
      function zh(c, u, p, _) {
        var k = p.IDBKeyRange;
        return p.indexedDB, { dbcore: (_ = Gh(u, k, _), c.dbcore.reduce(function(T, O) {
          return O = O.create, a(a({}, T), O(T));
        }, _)) };
      }
      function gs(c, _) {
        var p = _.db, _ = zh(c._middlewares, p, c._deps, _);
        c.core = _.dbcore, c.tables.forEach(function(k) {
          var T = k.name;
          c.core.schema.tables.some(function(O) {
            return O.name === T;
          }) && (k.core = c.core.table(T), c[T] instanceof c.Table && (c[T].core = k.core));
        });
      }
      function _s(c, u, p, _) {
        p.forEach(function(k) {
          var T = _[k];
          u.forEach(function(O) {
            var H = (function q(Y, re) {
              return m(Y, re) || (Y = l(Y)) && q(Y, re);
            })(O, k);
            (!H || "value" in H && H.value === void 0) && (O === c.Transaction.prototype || O instanceof c.Transaction ? w(O, k, { get: function() {
              return this.table(k);
            }, set: function(q) {
              x(this, k, { value: q, writable: true, configurable: true, enumerable: true });
            } }) : O[k] = new c.Table(k, T));
          });
        });
      }
      function D0(c, u) {
        u.forEach(function(p) {
          for (var _ in p) p[_] instanceof c.Table && delete p[_];
        });
      }
      function $h(c, u) {
        return c._cfg.version - u._cfg.version;
      }
      function qh(c, u, p, _) {
        var k = c._dbSchema;
        p.objectStoreNames.contains("$meta") && !k.$meta && (k.$meta = C0("$meta", jo("")[0], []), c._storeNames.push("$meta"));
        var T = c._createTransaction("readwrite", c._storeNames, k);
        T.create(p), T._completion.catch(_);
        var O = T._reject.bind(T), H = Je.transless || Je;
        I(function() {
          return Je.trans = T, Je.transless = H, u !== 0 ? (gs(c, p), Y = u, ((q = T).storeNames.includes("$meta") ? q.table("$meta").get("version").then(function(re) {
            return re ?? Y;
          }) : Ke.resolve(Y)).then(function(re) {
            return ae = re, Z = T, Q = p, ee = [], re = (G = c)._versions, te = G._dbSchema = ys(0, G.idbdb, Q), (re = re.filter(function(fe) {
              return fe._cfg.version >= ae;
            })).length !== 0 ? (re.forEach(function(fe) {
              ee.push(function() {
                var he = te, pe = fe._cfg.dbschema;
                ks(G, he, Q), ks(G, pe, Q), te = G._dbSchema = pe;
                var ge = O0(he, pe);
                ge.add.forEach(function(Xe) {
                  N0(Q, Xe[0], Xe[1].primKey, Xe[1].indexes);
                }), ge.change.forEach(function(Xe) {
                  if (Xe.recreate) throw new W.Upgrade("Not yet support for changing primary key");
                  var Ue = Q.objectStore(Xe.name);
                  Xe.add.forEach(function(qe) {
                    return ws(Ue, qe);
                  }), Xe.change.forEach(function(qe) {
                    Ue.deleteIndex(qe.name), ws(Ue, qe);
                  }), Xe.del.forEach(function(qe) {
                    return Ue.deleteIndex(qe);
                  });
                });
                var Pe = fe._cfg.contentUpgrade;
                if (Pe && fe._cfg.version > ae) {
                  gs(G, Q), Z._memoizedTables = {};
                  var He = M(pe);
                  ge.del.forEach(function(Xe) {
                    He[Xe] = he[Xe];
                  }), D0(G, [G.Transaction.prototype]), _s(G, [G.Transaction.prototype], s(He), He), Z.schema = He;
                  var Fe, Le = fr(Pe);
                  return Le && N(), ge = Ke.follow(function() {
                    var Xe;
                    (Fe = Pe(Z)) && Le && (Xe = L.bind(null, null), Fe.then(Xe, Xe));
                  }), Fe && typeof Fe.then == "function" ? Ke.resolve(Fe) : ge.then(function() {
                    return Fe;
                  });
                }
              }), ee.push(function(he) {
                var pe, ge, Pe = fe._cfg.dbschema;
                pe = Pe, ge = he, [].slice.call(ge.db.objectStoreNames).forEach(function(He) {
                  return pe[He] == null && ge.db.deleteObjectStore(He);
                }), D0(G, [G.Transaction.prototype]), _s(G, [G.Transaction.prototype], G._storeNames, G._dbSchema), Z.schema = G._dbSchema;
              }), ee.push(function(he) {
                G.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(G.idbdb.version / 10) === fe._cfg.version ? (G.idbdb.deleteObjectStore("$meta"), delete G._dbSchema.$meta, G._storeNames = G._storeNames.filter(function(pe) {
                  return pe !== "$meta";
                })) : he.objectStore("$meta").put(fe._cfg.version, "version"));
              });
            }), (function fe() {
              return ee.length ? Ke.resolve(ee.shift()(Z.idbtrans)).then(fe) : Ke.resolve();
            })().then(function() {
              Ko(te, Q);
            })) : Ke.resolve();
            var G, ae, Z, Q, ee, te;
          }).catch(O)) : (s(k).forEach(function(re) {
            N0(p, re, k[re].primKey, k[re].indexes);
          }), gs(c, p), void Ke.follow(function() {
            return c.on.populate.fire(T);
          }).catch(O));
          var q, Y;
        });
      }
      function Yh(c, u) {
        Ko(c._dbSchema, u), u.db.version % 10 != 0 || u.objectStoreNames.contains("$meta") || u.db.createObjectStore("$meta").add(Math.ceil(u.db.version / 10 - 1), "version");
        var p = ys(0, c.idbdb, u);
        ks(c, c._dbSchema, u);
        for (var _ = 0, k = O0(p, c._dbSchema).change; _ < k.length; _++) {
          var T = (function(O) {
            if (O.change.length || O.recreate) return console.warn("Unable to patch indexes of table ".concat(O.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var H = u.objectStore(O.name);
            O.add.forEach(function(q) {
              Er && console.debug("Dexie upgrade patch: Creating missing index ".concat(O.name, ".").concat(q.src)), ws(H, q);
            });
          })(k[_]);
          if (typeof T == "object") return T.value;
        }
      }
      function O0(c, u) {
        var p, _ = { del: [], add: [], change: [] };
        for (p in c) u[p] || _.del.push(p);
        for (p in u) {
          var k = c[p], T = u[p];
          if (k) {
            var O = { name: p, def: T, recreate: false, del: [], add: [], change: [] };
            if ("" + (k.primKey.keyPath || "") != "" + (T.primKey.keyPath || "") || k.primKey.auto !== T.primKey.auto) O.recreate = true, _.change.push(O);
            else {
              var H = k.idxByName, q = T.idxByName, Y = void 0;
              for (Y in H) q[Y] || O.del.push(Y);
              for (Y in q) {
                var re = H[Y], G = q[Y];
                re ? re.src !== G.src && O.change.push(G) : O.add.push(G);
              }
              (0 < O.del.length || 0 < O.add.length || 0 < O.change.length) && _.change.push(O);
            }
          } else _.add.push([p, T]);
        }
        return _;
      }
      function N0(c, u, p, _) {
        var k = c.db.createObjectStore(u, p.keyPath ? { keyPath: p.keyPath, autoIncrement: p.auto } : { autoIncrement: p.auto });
        return _.forEach(function(T) {
          return ws(k, T);
        }), k;
      }
      function Ko(c, u) {
        s(c).forEach(function(p) {
          u.db.objectStoreNames.contains(p) || (Er && console.debug("Dexie: Creating missing table", p), N0(u, p, c[p].primKey, c[p].indexes));
        });
      }
      function ws(c, u) {
        c.createIndex(u.name, u.keyPath, { unique: u.unique, multiEntry: u.multi });
      }
      function ys(c, u, p) {
        var _ = {};
        return S(u.objectStoreNames, 0).forEach(function(k) {
          for (var T = p.objectStore(k), O = A0(Vo(Y = T.keyPath), Y || "", true, false, !!T.autoIncrement, Y && typeof Y != "string", true), H = [], q = 0; q < T.indexNames.length; ++q) {
            var re = T.index(T.indexNames[q]), Y = re.keyPath, re = A0(re.name, Y, !!re.unique, !!re.multiEntry, false, Y && typeof Y != "string", false);
            H.push(re);
          }
          _[k] = C0(k, O, H);
        }), _;
      }
      function ks(c, u, p) {
        for (var _ = p.db.objectStoreNames, k = 0; k < _.length; ++k) {
          var T = _[k], O = p.objectStore(T);
          c._hasGetAll = "getAll" in O;
          for (var H = 0; H < O.indexNames.length; ++H) {
            var q = O.indexNames[H], Y = O.index(q).keyPath, re = typeof Y == "string" ? Y : "[" + S(Y).join("+") + "]";
            !u[T] || (Y = u[T].idxByName[re]) && (Y.name = q, delete u[T].idxByName[re], u[T].idxByName[q] = Y);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (c._hasGetAll = false);
      }
      function jo(c) {
        return c.split(",").map(function(u, p) {
          var T = u.split(":"), _ = (k = T[1]) === null || k === void 0 ? void 0 : k.trim(), k = (u = T[0].trim()).replace(/([&*]|\+\+)/g, ""), T = /^\[/.test(k) ? k.match(/^\[(.*)\]$/)[1].split("+") : k;
          return A0(k, T || null, /\&/.test(u), /\*/.test(u), /\+\+/.test(u), f(T), p === 0, _);
        });
      }
      var Zh = (qn.prototype._createTableSchema = C0, qn.prototype._parseIndexSyntax = jo, qn.prototype._parseStoresSpec = function(c, u) {
        var p = this;
        s(c).forEach(function(_) {
          if (c[_] !== null) {
            var k = p._parseIndexSyntax(c[_]), T = k.shift();
            if (!T) throw new W.Schema("Invalid schema for table " + _ + ": " + c[_]);
            if (T.unique = true, T.multi) throw new W.Schema("Primary key cannot be multiEntry*");
            k.forEach(function(O) {
              if (O.auto) throw new W.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!O.keyPath) throw new W.Schema("Index must have a name and cannot be an empty string");
            }), k = p._createTableSchema(_, T, k), u[_] = k;
          }
        });
      }, qn.prototype.stores = function(p) {
        var u = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, p) : p;
        var p = u._versions, _ = {}, k = {};
        return p.forEach(function(T) {
          o(_, T._cfg.storesSource), k = T._cfg.dbschema = {}, T._parseStoresSpec(_, k);
        }), u._dbSchema = k, D0(u, [u._allTables, u, u.Transaction.prototype]), _s(u, [u._allTables, u, u.Transaction.prototype, this._cfg.tables], s(k), k), u._storeNames = s(k), this;
      }, qn.prototype.upgrade = function(c) {
        return this._cfg.contentUpgrade = Ir(this._cfg.contentUpgrade || ue, c), this;
      }, qn);
      function qn() {
      }
      function R0(c, u) {
        var p = c._dbNamesDB;
        return p || (p = c._dbNamesDB = new Ma(Hr, { addons: [], indexedDB: c, IDBKeyRange: u })).version(1).stores({ dbnames: "name" }), p.table("dbnames");
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
        var _ = lr(u, p);
        if (!isNaN(_)) {
          if (0 < _) throw RangeError();
          if (L0(c)) return o(c, { from: u, to: p, d: 1 });
          var k = c.l, _ = c.r;
          if (lr(p, c.from) < 0) return k ? ki(k, u, p) : c.l = { from: u, to: p, d: 1, l: null, r: null }, zo(c);
          if (0 < lr(u, c.to)) return _ ? ki(_, u, p) : c.r = { from: u, to: p, d: 1, l: null, r: null }, zo(c);
          lr(u, c.from) < 0 && (c.from = u, c.l = null, c.d = _ ? _.d + 1 : 1), 0 < lr(p, c.to) && (c.to = p, c.r = null, c.d = c.l ? c.l.d + 1 : 1), p = !c.r, k && !c.l && Ei(c, k), _ && p && Ei(c, _);
        }
      }
      function Ei(c, u) {
        L0(u) || (function p(_, q) {
          var T = q.from, O = q.to, H = q.l, q = q.r;
          ki(_, T, O), H && p(_, H), q && p(_, q);
        })(c, u);
      }
      function Go(c, u) {
        var p = Es(u), _ = p.next();
        if (_.done) return false;
        for (var k = _.value, T = Es(c), O = T.next(k.from), H = O.value; !_.done && !O.done; ) {
          if (lr(H.from, k.to) <= 0 && 0 <= lr(H.to, k.from)) return true;
          lr(k.from, H.from) < 0 ? k = (_ = p.next(H.from)).value : H = (O = T.next(k.from)).value;
        }
        return false;
      }
      function Es(c) {
        var u = L0(c) ? null : { s: 0, n: c };
        return { next: function(p) {
          for (var _ = 0 < arguments.length; u; ) switch (u.s) {
            case 0:
              if (u.s = 1, _) for (; u.n.l && lr(p, u.n.from) < 0; ) u = { up: u, n: u.n.l, s: 1 };
              else for (; u.n.l; ) u = { up: u, n: u.n.l, s: 1 };
            case 1:
              if (u.s = 2, !_ || lr(p, u.n.to) <= 0) return { value: u.n, done: false };
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
      function zo(c) {
        var u, p, _ = (((u = c.r) === null || u === void 0 ? void 0 : u.d) || 0) - (((p = c.l) === null || p === void 0 ? void 0 : p.d) || 0), k = 1 < _ ? "r" : _ < -1 ? "l" : "";
        k && (u = k == "r" ? "l" : "r", p = a({}, c), _ = c[k], c.from = _.from, c.to = _.to, c[k] = _[k], p[k] = _[u], (c[u] = p).d = $o(p)), c.d = $o(c);
      }
      function $o(p) {
        var u = p.r, p = p.l;
        return (u ? p ? Math.max(u.d, p.d) : u.d : p ? p.d : 0) + 1;
      }
      function Ts(c, u) {
        return s(u).forEach(function(p) {
          c[p] ? Ei(c[p], u[p]) : c[p] = (function _(k) {
            var T, O, H = {};
            for (T in k) v(k, T) && (O = k[T], H[T] = !O || typeof O != "object" || K.has(O.constructor) ? O : _(O));
            return H;
          })(u[p]);
        }), c;
      }
      function M0(c, u) {
        return c.all || u.all || Object.keys(c).some(function(p) {
          return u[p] && Go(u[p], c[p]);
        });
      }
      d(Tt.prototype, ((ia = { add: function(c) {
        return Ei(this, c), this;
      }, addKey: function(c) {
        return ki(this, c, c), this;
      }, addKeys: function(c) {
        var u = this;
        return c.forEach(function(p) {
          return ki(u, p, p);
        }), this;
      }, hasKey: function(c) {
        var u = Es(this).next(c).value;
        return u && lr(u.from, c) <= 0 && 0 <= lr(u.to, c);
      } })[Ve] = function() {
        return Es(this);
      }, ia));
      var gn = {}, U0 = {}, W0 = false;
      function Ss(c) {
        Ts(U0, c), W0 || (W0 = true, setTimeout(function() {
          W0 = false, H0(U0, !(U0 = {}));
        }, 0));
      }
      function H0(c, u) {
        u === void 0 && (u = false);
        var p = /* @__PURE__ */ new Set();
        if (c.all) for (var _ = 0, k = Object.values(gn); _ < k.length; _++) qo(O = k[_], c, p, u);
        else for (var T in c) {
          var O, H = /^idb\:\/\/(.*)\/(.*)\//.exec(T);
          H && (T = H[1], H = H[2], (O = gn["idb://".concat(T, "/").concat(H)]) && qo(O, c, p, u));
        }
        p.forEach(function(q) {
          return q();
        });
      }
      function qo(c, u, p, _) {
        for (var k = [], T = 0, O = Object.entries(c.queries.query); T < O.length; T++) {
          for (var H = O[T], q = H[0], Y = [], re = 0, G = H[1]; re < G.length; re++) {
            var ae = G[re];
            M0(u, ae.obsSet) ? ae.subscribers.forEach(function(te) {
              return p.add(te);
            }) : _ && Y.push(ae);
          }
          _ && k.push([q, Y]);
        }
        if (_) for (var Z = 0, Q = k; Z < Q.length; Z++) {
          var ee = Q[Z], q = ee[0], Y = ee[1];
          c.queries.query[q] = Y;
        }
      }
      function Jh(c) {
        var u = c._state, p = c._deps.indexedDB;
        if (u.isBeingOpened || c.idbdb) return u.dbReadyPromise.then(function() {
          return u.dbOpenError ? De(u.dbOpenError) : c;
        });
        u.isBeingOpened = true, u.dbOpenError = null, u.openComplete = false;
        var _ = u.openCanceller, k = Math.round(10 * c.verno), T = false;
        function O() {
          if (u.openCanceller !== _) throw new W.DatabaseClosed("db.open() was cancelled");
        }
        function H() {
          return new Ke(function(ae, Z) {
            if (O(), !p) throw new W.MissingAPI();
            var Q = c.name, ee = u.autoSchema || !k ? p.open(Q) : p.open(Q, k);
            if (!ee) throw new W.MissingAPI();
            ee.onerror = Sa(Z), ee.onblocked = Wr(c._fireOnBlocked), ee.onupgradeneeded = Wr(function(te) {
              var fe;
              re = ee.transaction, u.autoSchema && !c._options.allowEmptyDB ? (ee.onerror = gi, re.abort(), ee.result.close(), (fe = p.deleteDatabase(Q)).onsuccess = fe.onerror = Wr(function() {
                Z(new W.NoSuchDatabase("Database ".concat(Q, " doesnt exist")));
              })) : (re.onerror = Sa(Z), te = te.oldVersion > Math.pow(2, 62) ? 0 : te.oldVersion, G = te < 1, c.idbdb = ee.result, T && Yh(c, re), qh(c, te / 10, re, Z));
            }, Z), ee.onsuccess = Wr(function() {
              re = null;
              var te, fe, he, pe, ge, Pe = c.idbdb = ee.result, He = S(Pe.objectStoreNames);
              if (0 < He.length) try {
                var Fe = Pe.transaction((pe = He).length === 1 ? pe[0] : pe, "readonly");
                if (u.autoSchema) fe = Pe, he = Fe, (te = c).verno = fe.version / 10, he = te._dbSchema = ys(0, fe, he), te._storeNames = S(fe.objectStoreNames, 0), _s(te, [te._allTables], s(he), he);
                else if (ks(c, c._dbSchema, Fe), ((ge = O0(ys(0, (ge = c).idbdb, Fe), ge._dbSchema)).add.length || ge.change.some(function(Le) {
                  return Le.add.length || Le.change.length;
                })) && !T) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Pe.close(), k = Pe.version + 1, T = true, ae(H());
                gs(c, Fe);
              } catch {
              }
              Nr.push(c), Pe.onversionchange = Wr(function(Le) {
                u.vcFired = true, c.on("versionchange").fire(Le);
              }), Pe.onclose = Wr(function() {
                c.close({ disableAutoOpen: false });
              }), G && (ge = c._deps, Fe = Q, Pe = ge.indexedDB, ge = ge.IDBKeyRange, P0(Pe) || Fe === Hr || R0(Pe, ge).put({ name: Fe }).catch(ue)), ae();
            }, Z);
          }).catch(function(ae) {
            switch (ae == null ? void 0 : ae.name) {
              case "UnknownError":
                if (0 < u.PR1398_maxLoop) return u.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), H();
                break;
              case "VersionError":
                if (0 < k) return k = 0, H();
            }
            return Ke.reject(ae);
          });
        }
        var q, Y = u.dbReadyResolve, re = null, G = false;
        return Ke.race([_, (typeof navigator > "u" ? Ke.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(ae) {
          function Z() {
            return indexedDB.databases().finally(ae);
          }
          q = setInterval(Z, 100), Z();
        }).finally(function() {
          return clearInterval(q);
        }) : Promise.resolve()).then(H)]).then(function() {
          return O(), u.onReadyBeingFired = [], Ke.resolve(B0(function() {
            return c.on.ready.fire(c.vip);
          })).then(function ae() {
            if (0 < u.onReadyBeingFired.length) {
              var Z = u.onReadyBeingFired.reduce(Ir, ue);
              return u.onReadyBeingFired = [], Ke.resolve(B0(function() {
                return Z(c.vip);
              })).then(ae);
            }
          });
        }).finally(function() {
          u.openCanceller === _ && (u.onReadyBeingFired = null, u.isBeingOpened = false);
        }).catch(function(ae) {
          u.dbOpenError = ae;
          try {
            re && re.abort();
          } catch {
          }
          return _ === u.openCanceller && c._close(), De(ae);
        }).finally(function() {
          u.openComplete = true, Y();
        }).then(function() {
          var ae;
          return G && (ae = {}, c.tables.forEach(function(Z) {
            Z.schema.indexes.forEach(function(Q) {
              Q.name && (ae["idb://".concat(c.name, "/").concat(Z.name, "/").concat(Q.name)] = new Tt(-1 / 0, [[[]]]));
            }), ae["idb://".concat(c.name, "/").concat(Z.name, "/")] = ae["idb://".concat(c.name, "/").concat(Z.name, "/:dels")] = new Tt(-1 / 0, [[[]]]);
          }), an(_i).fire(ae), H0(ae, true)), c;
        });
      }
      function V0(c) {
        function u(T) {
          return c.next(T);
        }
        var p = k(u), _ = k(function(T) {
          return c.throw(T);
        });
        function k(T) {
          return function(q) {
            var H = T(q), q = H.value;
            return H.done ? q : q && typeof q.then == "function" ? q.then(p, _) : f(q) ? Promise.all(q).then(p, _) : p(q);
          };
        }
        return k(u)();
      }
      function bs(c, u, p) {
        for (var _ = f(c) ? c.slice() : [c], k = 0; k < p; ++k) _.push(u);
        return _;
      }
      var Qh = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(c) {
        return a(a({}, c), { table: function(u) {
          var p = c.table(u), _ = p.schema, k = {}, T = [];
          function O(G, ae, Z) {
            var Q = yi(G), ee = k[Q] = k[Q] || [], te = G == null ? 0 : typeof G == "string" ? 1 : G.length, fe = 0 < ae, fe = a(a({}, Z), { name: fe ? "".concat(Q, "(virtual-from:").concat(Z.name, ")") : Z.name, lowLevelIndex: Z, isVirtual: fe, keyTail: ae, keyLength: te, extractKey: I0(G), unique: !fe && Z.unique });
            return ee.push(fe), fe.isPrimaryKey || T.push(fe), 1 < te && O(te === 2 ? G[0] : G.slice(0, te - 1), ae + 1, Z), ee.sort(function(he, pe) {
              return he.keyTail - pe.keyTail;
            }), fe;
          }
          u = O(_.primaryKey.keyPath, 0, _.primaryKey), k[":id"] = [u];
          for (var H = 0, q = _.indexes; H < q.length; H++) {
            var Y = q[H];
            O(Y.keyPath, 0, Y);
          }
          function re(G) {
            var ae, Z = G.query.index;
            return Z.isVirtual ? a(a({}, G), { query: { index: Z.lowLevelIndex, range: (ae = G.query.range, Z = Z.keyTail, { type: ae.type === 1 ? 2 : ae.type, lower: bs(ae.lower, ae.lowerOpen ? c.MAX_KEY : c.MIN_KEY, Z), lowerOpen: true, upper: bs(ae.upper, ae.upperOpen ? c.MIN_KEY : c.MAX_KEY, Z), upperOpen: true }) } }) : G;
          }
          return a(a({}, p), { schema: a(a({}, _), { primaryKey: u, indexes: T, getIndexByKeyPath: function(G) {
            return (G = k[yi(G)]) && G[0];
          } }), count: function(G) {
            return p.count(re(G));
          }, query: function(G) {
            return p.query(re(G));
          }, openCursor: function(G) {
            var ae = G.query.index, Z = ae.keyTail, Q = ae.isVirtual, ee = ae.keyLength;
            return Q ? p.openCursor(re(G)).then(function(fe) {
              return fe && te(fe);
            }) : p.openCursor(G);
            function te(fe) {
              return Object.create(fe, { continue: { value: function(he) {
                he != null ? fe.continue(bs(he, G.reverse ? c.MAX_KEY : c.MIN_KEY, Z)) : G.unique ? fe.continue(fe.key.slice(0, ee).concat(G.reverse ? c.MIN_KEY : c.MAX_KEY, Z)) : fe.continue();
              } }, continuePrimaryKey: { value: function(he, pe) {
                fe.continuePrimaryKey(bs(he, c.MAX_KEY, Z), pe);
              } }, primaryKey: { get: function() {
                return fe.primaryKey;
              } }, key: { get: function() {
                var he = fe.key;
                return ee === 1 ? he[0] : he.slice(0, ee);
              } }, value: { get: function() {
                return fe.value;
              } } });
            }
          } });
        } });
      } };
      function X0(c, u, p, _) {
        return p = p || {}, _ = _ || "", s(c).forEach(function(k) {
          var T, O, H;
          v(u, k) ? (T = c[k], O = u[k], typeof T == "object" && typeof O == "object" && T && O ? (H = ve(T)) !== ve(O) ? p[_ + k] = u[k] : H === "Object" ? X0(T, O, p, _ + k + ".") : T !== O && (p[_ + k] = u[k]) : T !== O && (p[_ + k] = u[k])) : p[_ + k] = void 0;
        }), s(u).forEach(function(k) {
          v(c, k) || (p[_ + k] = u[k]);
        }), p;
      }
      function K0(c, u) {
        return u.type === "delete" ? u.keys : u.keys || u.values.map(c.extractKey);
      }
      var e1 = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(c) {
        return a(a({}, c), { table: function(u) {
          var p = c.table(u), _ = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(k) {
            var T = Je.trans, O = T.table(u).hook, H = O.deleting, q = O.creating, Y = O.updating;
            switch (k.type) {
              case "add":
                if (q.fire === ue) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "put":
                if (q.fire === ue && Y.fire === ue) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "delete":
                if (H.fire === ue) break;
                return T._promise("readwrite", function() {
                  return re(k);
                }, true);
              case "deleteRange":
                if (H.fire === ue) break;
                return T._promise("readwrite", function() {
                  return (function G(ae, Z, Q) {
                    return p.query({ trans: ae, values: false, query: { index: _, range: Z }, limit: Q }).then(function(ee) {
                      var te = ee.result;
                      return re({ type: "delete", keys: te, trans: ae }).then(function(fe) {
                        return 0 < fe.numFailures ? Promise.reject(fe.failures[0]) : te.length < Q ? { failures: [], numFailures: 0, lastResult: void 0 } : G(ae, a(a({}, Z), { lower: te[te.length - 1], lowerOpen: true }), Q);
                      });
                    });
                  })(k.trans, k.range, 1e4);
                }, true);
            }
            return p.mutate(k);
            function re(G) {
              var ae, Z, Q, ee = Je.trans, te = G.keys || K0(_, G);
              if (!te) throw new Error("Keys missing");
              return (G = G.type === "add" || G.type === "put" ? a(a({}, G), { keys: te }) : a({}, G)).type !== "delete" && (G.values = n([], G.values)), G.keys && (G.keys = n([], G.keys)), ae = p, Q = te, ((Z = G).type === "add" ? Promise.resolve([]) : ae.getMany({ trans: Z.trans, keys: Q, cache: "immutable" })).then(function(fe) {
                var he = te.map(function(pe, ge) {
                  var Pe, He, Fe, Le = fe[ge], Xe = { onerror: null, onsuccess: null };
                  return G.type === "delete" ? H.fire.call(Xe, pe, Le, ee) : G.type === "add" || Le === void 0 ? (Pe = q.fire.call(Xe, pe, G.values[ge], ee), pe == null && Pe != null && (G.keys[ge] = pe = Pe, _.outbound || F(G.values[ge], _.keyPath, pe))) : (Pe = X0(Le, G.values[ge]), (He = Y.fire.call(Xe, Pe, pe, Le, ee)) && (Fe = G.values[ge], Object.keys(He).forEach(function(Ue) {
                    v(Fe, Ue) ? Fe[Ue] = He[Ue] : F(Fe, Ue, He[Ue]);
                  }))), Xe;
                });
                return p.mutate(G).then(function(pe) {
                  for (var ge = pe.failures, Pe = pe.results, He = pe.numFailures, pe = pe.lastResult, Fe = 0; Fe < te.length; ++Fe) {
                    var Le = (Pe || te)[Fe], Xe = he[Fe];
                    Le == null ? Xe.onerror && Xe.onerror(ge[Fe]) : Xe.onsuccess && Xe.onsuccess(G.type === "put" && fe[Fe] ? G.values[Fe] : Le);
                  }
                  return { failures: ge, results: Pe, numFailures: He, lastResult: pe };
                }).catch(function(pe) {
                  return he.forEach(function(ge) {
                    return ge.onerror && ge.onerror(pe);
                  }), Promise.reject(pe);
                });
              });
            }
          } });
        } });
      } };
      function Yo(c, u, p) {
        try {
          if (!u || u.keys.length < c.length) return null;
          for (var _ = [], k = 0, T = 0; k < u.keys.length && T < c.length; ++k) lr(u.keys[k], c[T]) === 0 && (_.push(p ? ie(u.values[k]) : u.values[k]), ++T);
          return _.length === c.length ? _ : null;
        } catch {
          return null;
        }
      }
      var r1 = { stack: "dbcore", level: -1, create: function(c) {
        return { table: function(u) {
          var p = c.table(u);
          return a(a({}, p), { getMany: function(_) {
            if (!_.cache) return p.getMany(_);
            var k = Yo(_.keys, _.trans._cache, _.cache === "clone");
            return k ? Ke.resolve(k) : p.getMany(_).then(function(T) {
              return _.trans._cache = { keys: _.keys, values: _.cache === "clone" ? ie(T) : T }, T;
            });
          }, mutate: function(_) {
            return _.type !== "add" && (_.trans._cache = null), p.mutate(_);
          } });
        } };
      } };
      function Zo(c, u) {
        return c.trans.mode === "readonly" && !!c.subscr && !c.trans.explicit && c.trans.db._options.cache !== "disabled" && !u.schema.primaryKey.outbound;
      }
      function Jo(c, u) {
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
      var t1 = { stack: "dbcore", level: 0, name: "Observability", create: function(c) {
        var u = c.schema.name, p = new Tt(c.MIN_KEY, c.MAX_KEY);
        return a(a({}, c), { transaction: function(_, k, T) {
          if (Je.subscr && k !== "readonly") throw new W.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Je.querier));
          return c.transaction(_, k, T);
        }, table: function(_) {
          var k = c.table(_), T = k.schema, O = T.primaryKey, G = T.indexes, H = O.extractKey, q = O.outbound, Y = O.autoIncrement && G.filter(function(Z) {
            return Z.compound && Z.keyPath.includes(O.keyPath);
          }), re = a(a({}, k), { mutate: function(Z) {
            function Q(Ue) {
              return Ue = "idb://".concat(u, "/").concat(_, "/").concat(Ue), pe[Ue] || (pe[Ue] = new Tt());
            }
            var ee, te, fe, he = Z.trans, pe = Z.mutatedParts || (Z.mutatedParts = {}), ge = Q(""), Pe = Q(":dels"), He = Z.type, Xe = Z.type === "deleteRange" ? [Z.range] : Z.type === "delete" ? [Z.keys] : Z.values.length < 50 ? [K0(O, Z).filter(function(Ue) {
              return Ue;
            }), Z.values] : [], Fe = Xe[0], Le = Xe[1], Xe = Z.trans._cache;
            return f(Fe) ? (ge.addKeys(Fe), (Xe = He === "delete" || Fe.length === Le.length ? Yo(Fe, Xe) : null) || Pe.addKeys(Fe), (Xe || Le) && (ee = Q, te = Xe, fe = Le, T.indexes.forEach(function(Ue) {
              var qe = ee(Ue.name || "");
              function pr(Sr) {
                return Sr != null ? Ue.extractKey(Sr) : null;
              }
              function _r(Sr) {
                return Ue.multiEntry && f(Sr) ? Sr.forEach(function(Zt) {
                  return qe.addKey(Zt);
                }) : qe.addKey(Sr);
              }
              (te || fe).forEach(function(Sr, St) {
                var ur = te && pr(te[St]), St = fe && pr(fe[St]);
                lr(ur, St) !== 0 && (ur != null && _r(ur), St != null && _r(St));
              });
            }))) : Fe ? (Le = { from: (Le = Fe.lower) !== null && Le !== void 0 ? Le : c.MIN_KEY, to: (Le = Fe.upper) !== null && Le !== void 0 ? Le : c.MAX_KEY }, Pe.add(Le), ge.add(Le)) : (ge.add(p), Pe.add(p), T.indexes.forEach(function(Ue) {
              return Q(Ue.name).add(p);
            })), k.mutate(Z).then(function(Ue) {
              return !Fe || Z.type !== "add" && Z.type !== "put" || (ge.addKeys(Ue.results), Y && Y.forEach(function(qe) {
                for (var pr = Z.values.map(function(ur) {
                  return qe.extractKey(ur);
                }), _r = qe.keyPath.findIndex(function(ur) {
                  return ur === O.keyPath;
                }), Sr = 0, Zt = Ue.results.length; Sr < Zt; ++Sr) pr[Sr][_r] = Ue.results[Sr];
                Q(qe.name).addKeys(pr);
              })), he.mutatedParts = Ts(he.mutatedParts || {}, pe), Ue;
            });
          } }), G = function(Q) {
            var ee = Q.query, Q = ee.index, ee = ee.range;
            return [Q, new Tt((Q = ee.lower) !== null && Q !== void 0 ? Q : c.MIN_KEY, (ee = ee.upper) !== null && ee !== void 0 ? ee : c.MAX_KEY)];
          }, ae = { get: function(Z) {
            return [O, new Tt(Z.key)];
          }, getMany: function(Z) {
            return [O, new Tt().addKeys(Z.keys)];
          }, count: G, query: G, openCursor: G };
          return s(ae).forEach(function(Z) {
            re[Z] = function(Q) {
              var ee = Je.subscr, te = !!ee, fe = Zo(Je, k) && Jo(Z, Q) ? Q.obsSet = {} : ee;
              if (te) {
                var he = function(Le) {
                  return Le = "idb://".concat(u, "/").concat(_, "/").concat(Le), fe[Le] || (fe[Le] = new Tt());
                }, pe = he(""), ge = he(":dels"), ee = ae[Z](Q), te = ee[0], ee = ee[1];
                if ((Z === "query" && te.isPrimaryKey && !Q.values ? ge : he(te.name || "")).add(ee), !te.isPrimaryKey) {
                  if (Z !== "count") {
                    var Pe = Z === "query" && q && Q.values && k.query(a(a({}, Q), { values: false }));
                    return k[Z].apply(this, arguments).then(function(Le) {
                      if (Z === "query") {
                        if (q && Q.values) return Pe.then(function(pr) {
                          return pr = pr.result, pe.addKeys(pr), Le;
                        });
                        var Xe = Q.values ? Le.result.map(H) : Le.result;
                        (Q.values ? pe : ge).addKeys(Xe);
                      } else if (Z === "openCursor") {
                        var Ue = Le, qe = Q.values;
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
      function Qo(c, u, p) {
        if (p.numFailures === 0) return u;
        if (u.type === "deleteRange") return null;
        var _ = u.keys ? u.keys.length : "values" in u && u.values ? u.values.length : 1;
        return p.numFailures === _ ? null : (u = a({}, u), f(u.keys) && (u.keys = u.keys.filter(function(k, T) {
          return !(T in p.failures);
        })), "values" in u && f(u.values) && (u.values = u.values.filter(function(k, T) {
          return !(T in p.failures);
        })), u);
      }
      function j0(c, u) {
        return p = c, ((_ = u).lower === void 0 || (_.lowerOpen ? 0 < lr(p, _.lower) : 0 <= lr(p, _.lower))) && (c = c, (u = u).upper === void 0 || (u.upperOpen ? lr(c, u.upper) < 0 : lr(c, u.upper) <= 0));
        var p, _;
      }
      function ec(c, u, ae, _, k, T) {
        if (!ae || ae.length === 0) return c;
        var O = u.query.index, H = O.multiEntry, q = u.query.range, Y = _.schema.primaryKey.extractKey, re = O.extractKey, G = (O.lowLevelIndex || O).extractKey, ae = ae.reduce(function(Z, Q) {
          var ee = Z, te = [];
          if (Q.type === "add" || Q.type === "put") for (var fe = new Tt(), he = Q.values.length - 1; 0 <= he; --he) {
            var pe, ge = Q.values[he], Pe = Y(ge);
            fe.hasKey(Pe) || (pe = re(ge), (H && f(pe) ? pe.some(function(Ue) {
              return j0(Ue, q);
            }) : j0(pe, q)) && (fe.addKey(Pe), te.push(ge)));
          }
          switch (Q.type) {
            case "add":
              var He = new Tt().addKeys(u.values ? Z.map(function(qe) {
                return Y(qe);
              }) : Z), ee = Z.concat(u.values ? te.filter(function(qe) {
                return qe = Y(qe), !He.hasKey(qe) && (He.addKey(qe), true);
              }) : te.map(function(qe) {
                return Y(qe);
              }).filter(function(qe) {
                return !He.hasKey(qe) && (He.addKey(qe), true);
              }));
              break;
            case "put":
              var Fe = new Tt().addKeys(Q.values.map(function(qe) {
                return Y(qe);
              }));
              ee = Z.filter(function(qe) {
                return !Fe.hasKey(u.values ? Y(qe) : qe);
              }).concat(u.values ? te : te.map(function(qe) {
                return Y(qe);
              }));
              break;
            case "delete":
              var Le = new Tt().addKeys(Q.keys);
              ee = Z.filter(function(qe) {
                return !Le.hasKey(u.values ? Y(qe) : qe);
              });
              break;
            case "deleteRange":
              var Xe = Q.range;
              ee = Z.filter(function(qe) {
                return !j0(Y(qe), Xe);
              });
          }
          return ee;
        }, c);
        return ae === c ? c : (ae.sort(function(Z, Q) {
          return lr(G(Z), G(Q)) || lr(Y(Z), Y(Q));
        }), u.limit && u.limit < 1 / 0 && (ae.length > u.limit ? ae.length = u.limit : c.length === u.limit && ae.length < u.limit && (k.dirty = true)), T ? Object.freeze(ae) : ae);
      }
      function rc(c, u) {
        return lr(c.lower, u.lower) === 0 && lr(c.upper, u.upper) === 0 && !!c.lowerOpen == !!u.lowerOpen && !!c.upperOpen == !!u.upperOpen;
      }
      function a1(c, u) {
        return (function(p, _, k, T) {
          if (p === void 0) return _ !== void 0 ? -1 : 0;
          if (_ === void 0) return 1;
          if ((_ = lr(p, _)) === 0) {
            if (k && T) return 0;
            if (k) return 1;
            if (T) return -1;
          }
          return _;
        })(c.lower, u.lower, c.lowerOpen, u.lowerOpen) <= 0 && 0 <= (function(p, _, k, T) {
          if (p === void 0) return _ !== void 0 ? 1 : 0;
          if (_ === void 0) return -1;
          if ((_ = lr(p, _)) === 0) {
            if (k && T) return 0;
            if (k) return -1;
            if (T) return 1;
          }
          return _;
        })(c.upper, u.upper, c.upperOpen, u.upperOpen);
      }
      function n1(c, u, p, _) {
        c.subscribers.add(p), _.addEventListener("abort", function() {
          var k, T;
          c.subscribers.delete(p), c.subscribers.size === 0 && (k = c, T = u, setTimeout(function() {
            k.subscribers.size === 0 && Be(T, k);
          }, 3e3));
        });
      }
      var i1 = { stack: "dbcore", level: 0, name: "Cache", create: function(c) {
        var u = c.schema.name;
        return a(a({}, c), { transaction: function(p, _, k) {
          var T, O, H = c.transaction(p, _, k);
          return _ === "readwrite" && (O = (T = new AbortController()).signal, k = function(q) {
            return function() {
              if (T.abort(), _ === "readwrite") {
                for (var Y = /* @__PURE__ */ new Set(), re = 0, G = p; re < G.length; re++) {
                  var ae = G[re], Z = gn["idb://".concat(u, "/").concat(ae)];
                  if (Z) {
                    var Q = c.table(ae), ee = Z.optimisticOps.filter(function(qe) {
                      return qe.trans === H;
                    });
                    if (H._explicit && q && H.mutatedParts) for (var te = 0, fe = Object.values(Z.queries.query); te < fe.length; te++) for (var he = 0, pe = (He = fe[te]).slice(); he < pe.length; he++) M0((Fe = pe[he]).obsSet, H.mutatedParts) && (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
                      return Y.add(qe);
                    }));
                    else if (0 < ee.length) {
                      Z.optimisticOps = Z.optimisticOps.filter(function(qe) {
                        return qe.trans !== H;
                      });
                      for (var ge = 0, Pe = Object.values(Z.queries.query); ge < Pe.length; ge++) for (var He, Fe, Le, Xe = 0, Ue = (He = Pe[ge]).slice(); Xe < Ue.length; Xe++) (Fe = Ue[Xe]).res != null && H.mutatedParts && (q && !Fe.dirty ? (Le = Object.isFrozen(Fe.res), Le = ec(Fe.res, Fe.req, ee, Q, Fe, Le), Fe.dirty ? (Be(He, Fe), Fe.subscribers.forEach(function(qe) {
                        return Y.add(qe);
                      })) : Le !== Fe.res && (Fe.res = Le, Fe.promise = Ke.resolve({ result: Le }))) : (Fe.dirty && Be(He, Fe), Fe.subscribers.forEach(function(qe) {
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
          var _ = c.table(p), k = _.schema.primaryKey;
          return a(a({}, _), { mutate: function(T) {
            var O = Je.trans;
            if (k.outbound || O.db._options.cache === "disabled" || O.explicit || O.idbtrans.mode !== "readwrite") return _.mutate(T);
            var H = gn["idb://".concat(u, "/").concat(p)];
            return H ? (O = _.mutate(T), T.type !== "add" && T.type !== "put" || !(50 <= T.values.length || K0(k, T).some(function(q) {
              return q == null;
            })) ? (H.optimisticOps.push(T), T.mutatedParts && Ss(T.mutatedParts), O.then(function(q) {
              0 < q.numFailures && (Be(H.optimisticOps, T), (q = Qo(0, T, q)) && H.optimisticOps.push(q), T.mutatedParts && Ss(T.mutatedParts));
            }), O.catch(function() {
              Be(H.optimisticOps, T), T.mutatedParts && Ss(T.mutatedParts);
            })) : O.then(function(q) {
              var Y = Qo(0, a(a({}, T), { values: T.values.map(function(re, G) {
                var ae;
                return q.failures[G] ? re : (re = (ae = k.keyPath) !== null && ae !== void 0 && ae.includes(".") ? ie(re) : a({}, re), F(re, k.keyPath, q.results[G]), re);
              }) }), q);
              H.optimisticOps.push(Y), queueMicrotask(function() {
                return T.mutatedParts && Ss(T.mutatedParts);
              });
            }), O) : _.mutate(T);
          }, query: function(T) {
            if (!Zo(Je, _) || !Jo("query", T)) return _.query(T);
            var O = ((Y = Je.trans) === null || Y === void 0 ? void 0 : Y.db._options.cache) === "immutable", G = Je, H = G.requery, q = G.signal, Y = (function(Q, ee, te, fe) {
              var he = gn["idb://".concat(Q, "/").concat(ee)];
              if (!he) return [];
              if (!(ee = he.queries[te])) return [null, false, he, null];
              var pe = ee[(fe.query ? fe.query.index.name : null) || ""];
              if (!pe) return [null, false, he, null];
              switch (te) {
                case "query":
                  var ge = pe.find(function(Pe) {
                    return Pe.req.limit === fe.limit && Pe.req.values === fe.values && rc(Pe.req.query.range, fe.query.range);
                  });
                  return ge ? [ge, true, he, pe] : [pe.find(function(Pe) {
                    return ("limit" in Pe.req ? Pe.req.limit : 1 / 0) >= fe.limit && (!fe.values || Pe.req.values) && a1(Pe.req.query.range, fe.query.range);
                  }), false, he, pe];
                case "count":
                  return ge = pe.find(function(Pe) {
                    return rc(Pe.req.query.range, fe.query.range);
                  }), [ge, !!ge, he, pe];
              }
            })(u, p, "query", T), re = Y[0], G = Y[1], ae = Y[2], Z = Y[3];
            return re && G ? re.obsSet = T.obsSet : (G = _.query(T).then(function(Q) {
              var ee = Q.result;
              if (re && (re.res = ee), O) {
                for (var te = 0, fe = ee.length; te < fe; ++te) Object.freeze(ee[te]);
                Object.freeze(ee);
              } else Q.result = ie(ee);
              return Q;
            }).catch(function(Q) {
              return Z && re && Be(Z, re), Promise.reject(Q);
            }), re = { obsSet: T.obsSet, promise: G, subscribers: /* @__PURE__ */ new Set(), type: "query", req: T, dirty: false }, Z ? Z.push(re) : (Z = [re], (ae = ae || (gn["idb://".concat(u, "/").concat(p)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[T.query.index.name || ""] = Z)), n1(re, Z, H, q), re.promise.then(function(Q) {
              return { result: ec(Q.result, T, ae == null ? void 0 : ae.optimisticOps, _, re, O) };
            });
          } });
        } });
      } };
      function Fs(c, u) {
        return new Proxy(c, { get: function(p, _, k) {
          return _ === "db" ? u : Reflect.get(p, _, k);
        } });
      }
      var Ma = (Qr.prototype.version = function(c) {
        if (isNaN(c) || c < 0.1) throw new W.Type("Given version is not a positive number");
        if (c = Math.round(10 * c) / 10, this.idbdb || this._state.isBeingOpened) throw new W.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, c);
        var u = this._versions, p = u.filter(function(_) {
          return _._cfg.version === c;
        })[0];
        return p || (p = new this.Version(c), u.push(p), u.sort($h), p.stores({}), this._state.autoSchema = false, p);
      }, Qr.prototype._whenReady = function(c) {
        var u = this;
        return this.idbdb && (this._state.openComplete || Je.letThrough || this._vip) ? c() : new Ke(function(p, _) {
          if (u._state.openComplete) return _(new W.DatabaseClosed(u._state.dbOpenError));
          if (!u._state.isBeingOpened) {
            if (!u._state.autoOpen) return void _(new W.DatabaseClosed());
            u.open().catch(ue);
          }
          u._state.dbReadyPromise.then(p, _);
        }).then(c);
      }, Qr.prototype.use = function(c) {
        var u = c.stack, p = c.create, _ = c.level, k = c.name;
        return k && this.unuse({ stack: u, name: k }), c = this._middlewares[u] || (this._middlewares[u] = []), c.push({ stack: u, create: p, level: _ ?? 10, name: k }), c.sort(function(T, O) {
          return T.level - O.level;
        }), this;
      }, Qr.prototype.unuse = function(c) {
        var u = c.stack, p = c.name, _ = c.create;
        return u && this._middlewares[u] && (this._middlewares[u] = this._middlewares[u].filter(function(k) {
          return _ ? k.create !== _ : !!p && k.name !== p;
        })), this;
      }, Qr.prototype.open = function() {
        var c = this;
        return se(pt, function() {
          return Jh(c);
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
        c.isBeingOpened || (c.dbReadyPromise = new Ke(function(p) {
          c.dbReadyResolve = p;
        }), c.openCanceller = new Ke(function(p, _) {
          c.cancelOpen = _;
        }));
      }, Qr.prototype.close = function(p) {
        var u = (p === void 0 ? { disableAutoOpen: true } : p).disableAutoOpen, p = this._state;
        u ? (p.isBeingOpened && p.cancelOpen(new W.DatabaseClosed()), this._close(), p.autoOpen = false, p.dbOpenError = new W.DatabaseClosed()) : (this._close(), p.autoOpen = this._options.autoOpen || p.isBeingOpened, p.openComplete = false, p.dbOpenError = null);
      }, Qr.prototype.delete = function(c) {
        var u = this;
        c === void 0 && (c = { disableAutoOpen: true });
        var p = 0 < arguments.length && typeof arguments[0] != "object", _ = this._state;
        return new Ke(function(k, T) {
          function O() {
            u.close(c);
            var H = u._deps.indexedDB.deleteDatabase(u.name);
            H.onsuccess = Wr(function() {
              var q, Y, re;
              q = u._deps, Y = u.name, re = q.indexedDB, q = q.IDBKeyRange, P0(re) || Y === Hr || R0(re, q).delete(Y).catch(ue), k();
            }), H.onerror = Sa(T), H.onblocked = u._fireOnBlocked;
          }
          if (p) throw new W.InvalidArgument("Invalid closeOptions argument to db.delete()");
          _.isBeingOpened ? _.dbReadyPromise.then(O) : O();
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
        var c = (function(u, p, _) {
          var k = arguments.length;
          if (k < 2) throw new W.InvalidArgument("Too few arguments");
          for (var T = new Array(k - 1); --k; ) T[k - 1] = arguments[k];
          return _ = T.pop(), [u, B(T), _];
        }).apply(this, arguments);
        return this._transaction.apply(this, c);
      }, Qr.prototype._transaction = function(c, u, p) {
        var _ = this, k = Je.trans;
        k && k.db === this && c.indexOf("!") === -1 || (k = null);
        var T, O, H = c.indexOf("?") !== -1;
        c = c.replace("!", "").replace("?", "");
        try {
          if (O = u.map(function(Y) {
            if (Y = Y instanceof _.Table ? Y.name : Y, typeof Y != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return Y;
          }), c == "r" || c === it) T = it;
          else {
            if (c != "rw" && c != La) throw new W.InvalidArgument("Invalid transaction mode: " + c);
            T = La;
          }
          if (k) {
            if (k.mode === it && T === La) {
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
          return k ? k._promise(null, function(re, G) {
            G(Y);
          }) : De(Y);
        }
        var q = (function Y(re, G, ae, Z, Q) {
          return Ke.resolve().then(function() {
            var ee = Je.transless || Je, te = re._createTransaction(G, ae, re._dbSchema, Z);
            if (te.explicit = true, ee = { trans: te, transless: ee }, Z) te.idbtrans = Z.idbtrans;
            else try {
              te.create(), te.idbtrans._explicit = true, re._state.PR1398_maxLoop = 3;
            } catch (pe) {
              return pe.name === Ze.InvalidState && re.isOpen() && 0 < --re._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), re.close({ disableAutoOpen: false }), re.open().then(function() {
                return Y(re, G, ae, null, Q);
              })) : De(pe);
            }
            var fe, he = fr(Q);
            return he && N(), ee = Ke.follow(function() {
              var pe;
              (fe = Q.call(te, te)) && (he ? (pe = L.bind(null, null), fe.then(pe, pe)) : typeof fe.next == "function" && typeof fe.throw == "function" && (fe = V0(fe)));
            }, ee), (fe && typeof fe.then == "function" ? Ke.resolve(fe).then(function(pe) {
              return te.active ? pe : De(new W.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : ee.then(function() {
              return fe;
            })).then(function(pe) {
              return Z && te._resolve(), te._completion.then(function() {
                return pe;
              });
            }).catch(function(pe) {
              return te._reject(pe), De(pe);
            });
          });
        }).bind(null, this, T, O, k, p);
        return k ? k._promise(T, q, "lock") : Je.trans ? se(Je.transless, function() {
          return _._whenReady(q);
        }) : this._whenReady(q);
      }, Qr.prototype.table = function(c) {
        if (!v(this._allTables, c)) throw new W.InvalidTable("Table ".concat(c, " does not exist"));
        return this._allTables[c];
      }, Qr);
      function Qr(c, u) {
        var p = this;
        this._middlewares = {}, this.verno = 0;
        var _ = Qr.dependencies;
        this._options = u = a({ addons: Qr.addons, autoOpen: true, indexedDB: _.indexedDB, IDBKeyRange: _.IDBKeyRange, cache: "cloned" }, u), this._deps = { indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange }, _ = u.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var k, T, O, H, q, Y = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: ue, dbReadyPromise: null, cancelOpen: ue, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: u.autoOpen };
        Y.dbReadyPromise = new Ke(function(G) {
          Y.dbReadyResolve = G;
        }), Y.openCanceller = new Ke(function(G, ae) {
          Y.cancelOpen = ae;
        }), this._state = Y, this.name = c, this.on = vi(this, "populate", "blocked", "versionchange", "close", { ready: [Ir, ue] }), this.once = function(G, ae) {
          var Z = function() {
            for (var Q = [], ee = 0; ee < arguments.length; ee++) Q[ee] = arguments[ee];
            p.on(G).unsubscribe(Z), ae.apply(p, Q);
          };
          return p.on(G, Z);
        }, this.on.ready.subscribe = E(this.on.ready.subscribe, function(G) {
          return function(ae, Z) {
            Qr.vip(function() {
              var Q, ee = p._state;
              ee.openComplete ? (ee.dbOpenError || Ke.resolve().then(ae), Z && G(ae)) : ee.onReadyBeingFired ? (ee.onReadyBeingFired.push(ae), Z && G(ae)) : (G(ae), Q = p, Z || G(function te() {
                Q.on.ready.unsubscribe(ae), Q.on.ready.unsubscribe(te);
              }));
            });
          };
        }), this.Collection = (k = this, mi(Hh.prototype, function(fe, te) {
          this.db = k;
          var Z = rn, Q = null;
          if (te) try {
            Z = te();
          } catch (he) {
            Q = he;
          }
          var ee = fe._ctx, te = ee.table, fe = te.hook.reading.fire;
          this._ctx = { table: te, index: ee.index, isPrimKey: !ee.index || te.schema.primKey.keyPath && ee.index === te.schema.primKey.name, range: Z, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: Q, or: ee.or, valueMapper: fe !== D ? fe : null };
        })), this.Table = (T = this, mi(Bo.prototype, function(G, ae, Z) {
          this.db = T, this._tx = Z, this.name = G, this.schema = ae, this.hook = T._allTables[G] ? T._allTables[G].hook : vi(null, { creating: [Se, ue], reading: [Ce, D], updating: [rr, ue], deleting: [ar, ue] });
        })), this.Transaction = (O = this, mi(Kh.prototype, function(G, ae, Z, Q, ee) {
          var te = this;
          G !== "readonly" && ae.forEach(function(fe) {
            fe = (fe = Z[fe]) === null || fe === void 0 ? void 0 : fe.yProps, fe && (ae = ae.concat(fe.map(function(he) {
              return he.updatesTable;
            })));
          }), this.db = O, this.mode = G, this.storeNames = ae, this.schema = Z, this.chromeTransactionDurability = Q, this.idbtrans = null, this.on = vi(this, "complete", "error", "abort"), this.parent = ee || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ke(function(fe, he) {
            te._resolve = fe, te._reject = he;
          }), this._completion.then(function() {
            te.active = false, te.on.complete.fire();
          }, function(fe) {
            var he = te.active;
            return te.active = false, te.on.error.fire(fe), te.parent ? te.parent._reject(fe) : he && te.idbtrans && te.idbtrans.abort(), De(fe);
          });
        })), this.Version = (H = this, mi(Zh.prototype, function(G) {
          this.db = H, this._cfg = { version: G, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (q = this, mi(Ho.prototype, function(G, ae, Z) {
          if (this.db = q, this._ctx = { table: G, index: ae === ":id" ? null : ae, or: Z }, this._cmp = this._ascending = lr, this._descending = function(Q, ee) {
            return lr(ee, Q);
          }, this._max = function(Q, ee) {
            return 0 < lr(Q, ee) ? Q : ee;
          }, this._min = function(Q, ee) {
            return lr(Q, ee) < 0 ? Q : ee;
          }, this._IDBKeyRange = q._deps.IDBKeyRange, !this._IDBKeyRange) throw new W.MissingAPI();
        })), this.on("versionchange", function(G) {
          0 < G.newVersion ? console.warn("Another connection wants to upgrade database '".concat(p.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(p.name, "'. Closing db now to resume the delete request.")), p.close({ disableAutoOpen: false });
        }), this.on("blocked", function(G) {
          !G.newVersion || G.newVersion < G.oldVersion ? console.warn("Dexie.delete('".concat(p.name, "') was blocked")) : console.warn("Upgrade '".concat(p.name, "' blocked by other connection holding version ").concat(G.oldVersion / 10));
        }), this._maxKey = wi(u.IDBKeyRange), this._createTransaction = function(G, ae, Z, Q) {
          return new p.Transaction(G, ae, Z, p._options.chromeTransactionDurability, Q);
        }, this._fireOnBlocked = function(G) {
          p.on("blocked").fire(G), Nr.filter(function(ae) {
            return ae.name === p.name && ae !== p && !ae._state.vcFired;
          }).map(function(ae) {
            return ae.on("versionchange").fire(G);
          });
        }, this.use(r1), this.use(i1), this.use(t1), this.use(Qh), this.use(e1);
        var re = new Proxy(this, { get: function(G, ae, Z) {
          if (ae === "_vip") return true;
          if (ae === "table") return function(ee) {
            return Fs(p.table(ee), re);
          };
          var Q = Reflect.get(G, ae, Z);
          return Q instanceof Bo ? Fs(Q, re) : ae === "tables" ? Q.map(function(ee) {
            return Fs(ee, re);
          }) : ae === "_createTransaction" ? function() {
            return Fs(Q.apply(this, arguments), re);
          } : Q;
        } });
        this.vip = re, _.forEach(function(G) {
          return G(p);
        });
      }
      var As, ia = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", s1 = (G0.prototype.subscribe = function(c, u, p) {
        return this._subscribe(c && typeof c != "function" ? c : { next: c, error: u, complete: p });
      }, G0.prototype[ia] = function() {
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
      function tc(c) {
        var u, p = false, _ = new s1(function(k) {
          var T = fr(c), O, H = false, q = {}, Y = {}, re = { get closed() {
            return H;
          }, unsubscribe: function() {
            H || (H = true, O && O.abort(), G && an.storagemutated.unsubscribe(Z));
          } };
          k.start && k.start(re);
          var G = false, ae = function() {
            return Re(Q);
          }, Z = function(ee) {
            Ts(q, ee), M0(Y, q) && ae();
          }, Q = function() {
            var ee, te, fe;
            !H && As.indexedDB && (q = {}, ee = {}, O && O.abort(), O = new AbortController(), fe = (function(he) {
              var pe = Qa();
              try {
                T && N();
                var ge = I(c, he);
                return ge = T ? ge.finally(L) : ge;
              } finally {
                pe && en();
              }
            })(te = { subscr: ee, signal: O.signal, requery: ae, querier: c, trans: null }), Promise.resolve(fe).then(function(he) {
              p = true, u = he, H || te.signal.aborted || (q = {}, (function(pe) {
                for (var ge in pe) if (v(pe, ge)) return;
                return 1;
              })(Y = ee) || G || (an(_i, Z), G = true), Re(function() {
                return !H && k.next && k.next(he);
              }));
            }, function(he) {
              p = false, ["DatabaseClosedError", "AbortError"].includes(he == null ? void 0 : he.name) || H || Re(function() {
                H || k.error && k.error(he);
              });
            }));
          };
          return setTimeout(ae, 0), re;
        });
        return _.hasValue = function() {
          return p;
        }, _.getValue = function() {
          return u;
        }, _;
      }
      var _n = Ma;
      function z0(c) {
        var u = nn;
        try {
          nn = true, an.storagemutated.fire(c), H0(c, true);
        } finally {
          nn = u;
        }
      }
      d(_n, a(a({}, V), { delete: function(c) {
        return new _n(c, { addons: [] }).delete();
      }, exists: function(c) {
        return new _n(c, { addons: [] }).open().then(function(u) {
          return u.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(c) {
        try {
          return u = _n.dependencies, p = u.indexedDB, u = u.IDBKeyRange, (P0(p) ? Promise.resolve(p.databases()).then(function(_) {
            return _.map(function(k) {
              return k.name;
            }).filter(function(k) {
              return k !== Hr;
            });
          }) : R0(p, u).toCollection().primaryKeys()).then(c);
        } catch {
          return De(new W.MissingAPI());
        }
        var u, p;
      }, defineClass: function() {
        return function(c) {
          o(this, c);
        };
      }, ignoreTransaction: function(c) {
        return Je.trans ? se(Je.transless, c) : c();
      }, vip: B0, async: function(c) {
        return function() {
          try {
            var u = V0(c.apply(this, arguments));
            return u && typeof u.then == "function" ? u : Ke.resolve(u);
          } catch (p) {
            return De(p);
          }
        };
      }, spawn: function(c, u, p) {
        try {
          var _ = V0(c.apply(p, u || []));
          return _ && typeof _.then == "function" ? _ : Ke.resolve(_);
        } catch (k) {
          return De(k);
        }
      }, currentTransaction: { get: function() {
        return Je.trans || null;
      } }, waitFor: function(c, u) {
        return u = Ke.resolve(typeof c == "function" ? _n.ignoreTransaction(c) : c).timeout(u || 6e4), Je.trans ? Je.trans.waitFor(u) : u;
      }, Promise: Ke, debug: { get: function() {
        return Er;
      }, set: function(c) {
        Kr(c);
      } }, derive: y, extend: o, props: d, override: E, Events: vi, on: an, liveQuery: tc, extendObservabilitySet: Ts, getByKeyPath: j, setByKeyPath: F, delByKeyPath: function(c, u) {
        typeof u == "string" ? F(c, u, void 0) : "length" in u && [].map.call(u, function(p) {
          F(c, p, void 0);
        });
      }, shallowClone: M, deepClone: ie, getObjectDiff: X0, cmp: lr, asap: X, minKey: -1 / 0, addons: [], connections: Nr, errnames: Ze, dependencies: As, cache: gn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(c) {
        return parseInt(c);
      }).reduce(function(c, u, p) {
        return c + u / Math.pow(10, 2 * p);
      }) })), _n.maxKey = wi(_n.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (an(_i, function(c) {
        nn || (c = new CustomEvent(F0, { detail: c }), nn = true, dispatchEvent(c), nn = false);
      }), addEventListener(F0, function(c) {
        c = c.detail, nn || z0(c);
      }));
      var Yn, nn = false, ac = function() {
      };
      return typeof BroadcastChannel < "u" && ((ac = function() {
        (Yn = new BroadcastChannel(F0)).onmessage = function(c) {
          return c.data && z0(c.data);
        };
      })(), typeof Yn.unref == "function" && Yn.unref(), an(_i, function(c) {
        nn || Yn.postMessage(c);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(c) {
        if (!Ma.disableBfCache && c.persisted) {
          Er && console.debug("Dexie: handling persisted pagehide"), Yn == null ? void 0 : Yn.close();
          for (var u = 0, p = Nr; u < p.length; u++) p[u].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(c) {
        !Ma.disableBfCache && c.persisted && (Er && console.debug("Dexie: handling persisted pageshow"), ac(), z0({ all: new Tt(-1 / 0, [[]]) }));
      })), Ke.rejectionMapper = function(c, u) {
        return !c || c instanceof Te || c instanceof TypeError || c instanceof SyntaxError || !c.name || !z[c.name] ? c : (u = new z[c.name](u || c.message, c), "stack" in c && w(u, "stack", { get: function() {
          return this.inner.stack;
        } }), u);
      }, Kr(Er), a(Ma, Object.freeze({ __proto__: null, Dexie: Ma, liveQuery: tc, Entity: Gn, cmp: lr, PropModification: pi, replacePrefix: function(c, u) {
        return new pi({ replacePrefix: [c, u] });
      }, add: function(c) {
        return new pi({ add: c });
      }, remove: function(c) {
        return new pi({ remove: c });
      }, default: Ma, RangeSet: Tt, mergeRanges: Ei, rangesOverlap: Go }), { default: Ma }), Ma;
    });
  })($s)), $s.exports;
}
var H1 = W1();
const If = M1(H1), cc = /* @__PURE__ */ Symbol.for("Dexie"), qs = globalThis[cc] || (globalThis[cc] = If);
if (If.semVer !== qs.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${If.semVer} and ${qs.semVer}`);
const { liveQuery: zE, mergeRanges: $E, rangesOverlap: qE, RangeSet: YE, cmp: ZE, Entity: JE, PropModification: QE, replacePrefix: eT, add: rT, remove: tT, DexieYProvider: aT } = qs, lc = ["accession", "book_name", "isbn", "book_type", "author", "published", "num_of_pages", "image_links", "language"], ua = new qs("SpreadsheetDatabase");
ua.version(2).stores({ spreadsheets: "++, &isbn, accession, book_name, book_type, author, published, num_of_pages, image_links, language" });
ua.version(1).stores({ settings: "key" });
var Ys = {};
Ys.version = "0.20.3";
var ha = 1200, V1 = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], qf = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, Yf = function(e) {
  V1.indexOf(e) != -1 && (qf[0] = e);
};
function X1() {
  Yf(1252);
}
var ga = function(e) {
  ha = e, Yf(e);
};
function Zf() {
  ga(1200), X1();
}
function uc(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function Cl(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function K1(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function Il(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var Fi = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? Cl(e.slice(2)) : r == 254 && t == 255 ? Il(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, Ds = function(r) {
  return String.fromCharCode(r);
}, hc = function(r) {
  return String.fromCharCode(r);
}, j1 = null, Lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Zs(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e.charCodeAt(l++), i = t >> 2, a = e.charCodeAt(l++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(l++), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Lt.charAt(i) + Lt.charAt(s) + Lt.charAt(f) + Lt.charAt(o);
  return r;
}
function G1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e.charCodeAt(l++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(l++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(l++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Lt.charAt(i) + Lt.charAt(s) + Lt.charAt(f) + Lt.charAt(o);
  return r;
}
function z1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0, l = 0; l < e.length; ) t = e[l++], i = t >> 2, a = e[l++], s = (t & 3) << 4 | a >> 4, n = e[l++], f = (a & 15) << 2 | n >> 6, o = n & 63, isNaN(a) ? f = o = 64 : isNaN(n) && (o = 64), r += Lt.charAt(i) + Lt.charAt(s) + Lt.charAt(f) + Lt.charAt(o);
  return r;
}
function ta(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, o = 0;
  if (e.slice(0, 5) == "data:") {
    var l = e.slice(0, 1024).indexOf(";base64,");
    l > -1 && (e = e.slice(l + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; ) i = Lt.indexOf(e.charAt(l++)), s = Lt.indexOf(e.charAt(l++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Lt.indexOf(e.charAt(l++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), o = Lt.indexOf(e.charAt(l++)), n = (f & 3) << 6 | o, o !== 64 && (r += String.fromCharCode(n));
  return r;
}
var mr = (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), Ba = (function() {
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
  var e = Ba([65, 0]);
  if (!e) return false;
  var r = e.toString("utf16le");
  return r.length == 1;
})();
function ln(e) {
  return mr ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function dc(e) {
  return mr ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Kt = function(r) {
  return mr ? Ba(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function o0(e) {
  if (typeof ArrayBuffer > "u") return Kt(e);
  for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
  return r;
}
function Ra(e) {
  if (Array.isArray(e)) return e.map(function(a) {
    return String.fromCharCode(a);
  }).join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function $1(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function Jf(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return Jf(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var rt = mr ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Ba(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(Kt(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function q1(e) {
  for (var r = [], t = 0, a = e.length + 250, n = ln(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048) n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = ln(65535), a = 65530);
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
function Qf(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr(" ", r - t.length) + t;
}
function Js(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + Cr(" ", r - t.length);
}
function Y1(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
function Z1(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Cr("0", r - t.length) + t;
}
var xc = Math.pow(2, 32);
function Zn(e, r) {
  if (e > xc || e < -xc) return Y1(e, r);
  var t = Math.round(e);
  return Z1(t, r);
}
function Qs(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var pc = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], rf = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function J1(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var ir = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, vc = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, Q1 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function e0(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, o = 1, l = 0, h = 0, v = Math.floor(n); l < r && (v = Math.floor(n), f = v * s + i, h = v * l + o, !(n - v < 5e-8)); ) n = 1 / (n - v), i = s, s = f, o = l, l = h;
  if (h > r && (l > r ? (h = o, f = i) : (h = l, f = s)), !t) return [0, a * f, h];
  var d = Math.floor(a * f / h);
  return [d, a * f - d * h, h];
}
function ed(e) {
  var r = e.toPrecision(16);
  if (r.indexOf("e") > -1) {
    var t = r.slice(0, r.indexOf("e"));
    return t = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Cr("0", t.length - 15), t + r.slice(r.indexOf("e"));
  }
  var a = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Cr("0", r.length - 15);
  return Number(a);
}
function Wa(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  e = ed(e);
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), r && r.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60) s = t ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0) s = t ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + a - 1), s = [o.getFullYear(), o.getMonth() + 1, o.getDate()], i = o.getDay(), a < 60 && (i = (i + 6) % 7), t && (i = nd(o, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
function eo(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function rd(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function td(e) {
  var r = e < 0 ? 12 : 11, t = eo(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function ad(e) {
  var r = eo(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function Hi(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = td(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = ad(e), eo(rd(t.toUpperCase()));
}
function On(e, r) {
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
      if (e instanceof Date) return aa(14, Yr(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function nd(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function id(e, r, t, a) {
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
          return pc[t.q][0];
        default:
          return pc[t.q][1];
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
function Xa(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var Dl = /%/g;
function sd(e, r, t) {
  var a = r.replace(Dl, ""), n = r.length - a.length;
  return ja(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function fd(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return ja(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Ol(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Ol(e, -r);
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
var Nl = /# (\?+)( ?)\/( ?)(\d+)/;
function od(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Cr(" ", e[1].length + 1 + e[4].length) : Qf(s, e[1].length) + e[2] + "/" + e[3] + _a(f, e[4].length));
}
function cd(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Cr(" ", e[1].length + 2 + e[4].length);
}
var Rl = /^#*0*\.([0#]+)/, Pl = /\)[^)]*[0#]/, Bl = /\(###\) ###\\?-####/;
function Xt(e) {
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
function mc(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function gc(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function ld(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function ud(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function fa(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Pl)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? fa("n", a, t) : "(" + fa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return fd(e, r, t);
  if (r.indexOf("%") !== -1) return sd(e, r, t);
  if (r.indexOf("E") !== -1) return Ol(r, t);
  if (r.charCodeAt(0) === 36) return "$" + fa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + Zn(o, r.length);
  if (r.match(/^[#?]+$/)) return n = Zn(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Xt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Nl)) return od(i, o, l);
  if (r.match(/^#+0+$/)) return l + Zn(o, r.length - r.indexOf("0"));
  if (i = r.match(Rl)) return n = mc(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Xt(i[1])).replace(/\.$/, "." + Xt(i[1])).replace(/\.(\d*)$/, function(w, y) {
    return "." + y + Cr("0", Xt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return l + mc(o, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return l + Xa(Zn(o, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + fa(e, r, -t) : Xa("" + (Math.floor(t) + ld(t, i[1].length))) + "." + _a(gc(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return fa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(fa(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(w) {
    return s < n.length ? n.charAt(s++) : w === "0" ? "0" : "";
  }));
  if (r.match(Bl)) return n = fa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + l, h = ja("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Xt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Qf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = Zn(t, 0), r.length <= n.length ? n : Xt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Xt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return s = gc(t, i[1].length), t < 0 ? "-" + fa(e, r, -t) : Xa(ud(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(w) {
    return "00," + (w.length < 3 ? _a(0, 3 - w.length) : "") + w;
  }) + "." + _a(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return fa(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Xa(Zn(o, 0));
      return x !== "0" ? l + x : "";
    case "###,###.00":
      return fa(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return fa(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function hd(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return ja(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function dd(e, r, t) {
  var a = r.replace(Dl, ""), n = r.length - a.length;
  return ja(e, a, t * Math.pow(10, 2 * n)) + Cr("%", n);
}
function Ll(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Ll(e, -r);
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
  if (e.charCodeAt(0) === 40 && !r.match(Pl)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? Aa("n", a, t) : "(" + Aa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return hd(e, r, t);
  if (r.indexOf("%") !== -1) return dd(e, r, t);
  if (r.indexOf("E") !== -1) return Ll(r, t);
  if (r.charCodeAt(0) === 36) return "$" + Aa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, o = Math.abs(t), l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + _a(o, r.length);
  if (r.match(/^[#?]+$/)) return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Xt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Nl)) return cd(i, o, l);
  if (r.match(/^#+0+$/)) return l + _a(o, r.length - r.indexOf("0"));
  if (i = r.match(Rl)) return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Xt(i[1])).replace(/\.$/, "." + Xt(i[1])), n = n.replace(/\.(\d*)$/, function(w, y) {
    return "." + y + Cr("0", Xt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return l + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return l + Xa("" + o);
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + Aa(e, r, -t) : Xa("" + t) + "." + Cr("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return Aa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = ei(Aa(e, r.replace(/[\\-]/g, ""), t)), s = 0, ei(ei(r.replace(/\\/g, "")).replace(/[0#]/g, function(w) {
    return s < n.length ? n.charAt(s++) : w === "0" ? "0" : "";
  }));
  if (r.match(Bl)) return n = Aa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = e0(o, Math.pow(10, s) - 1, false), n = "" + l, h = ja("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Js(f[2], s), h.length < i[4].length && (h = Xt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = e0(o, Math.pow(10, s) - 1, true), l + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? Qf(f[1], s) + i[2] + "/" + i[3] + Js(f[2], s) : Cr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : Xt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Xt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + Aa(e, r, -t) : Xa("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(w) {
    return "00," + (w.length < 3 ? _a(0, 3 - w.length) : "") + w;
  }) + "." + _a(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Xa("" + o);
      return x !== "0" ? l + x : "";
    default:
      if (r.match(/\.[0#?]*$/)) return Aa(e, r.slice(0, r.lastIndexOf(".")), t) + Xt(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function ja(e, r, t) {
  return (t | 0) === t ? Aa(e, r, t) : fa(e, r, t);
}
function xd(e) {
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
var Ml = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function da(e) {
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
      if (a.match(Ml)) return true;
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
function pd(e, r, t, a) {
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
      var x = e.charAt(++s), w = x === "(" || x === ")" ? x : "t";
      n[n.length] = { t: w, v: x }, ++s;
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
        if (l == null && (l = Wa(r, t, e.charAt(s + 1) === "2"), l == null)) return "";
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
      if (r < 0 || l == null && (l = Wa(r, t), l == null)) return "";
      for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
      f === "m" && o.toLowerCase() === "h" && (f = "M"), f === "h" && (f = d), n[n.length] = { t: f, v: i }, o = f;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: f, v: f };
      if (l == null && (l = Wa(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (l != null && (y.v = l.H >= 12 ? e.charAt(s + 2) : f), y.t = "T", d = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (l != null && (y.v = l.H >= 12 ? "PM" : "AM"), y.t = "T", s += 5, d = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (l != null && (y.v = l.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", s += 5, d = "h") : (y.t = "t", ++s), l == null && y.t === "T") return "";
      n[n.length] = y, o = f;
      break;
    case "[":
      for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
      if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
      if (i.match(Ml)) {
        if (l == null && (l = Wa(r, t), l == null)) return "";
        n[n.length] = { t: "Z", v: i.toLowerCase() }, o = i.charAt(1);
      } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", da(e) || (n[n.length] = { t: "t", v: i }));
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
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H), l.H >= 24 && (l.H = 0, ++l.D, E = Wa(l.D), E.u = l.u, E.S = l.S, E.M = l.M, E.H = l.H, l = E);
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
      l.u >= 1 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H), l.H >= 24 && (l.H = 0, ++l.D, E = Wa(l.D), E.u = l.u, E.S = l.S, E.M = l.M, E.H = l.H, l = E);
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
      n[s].v = id(n[s].t.charCodeAt(0), n[s].v, l, g), n[s].t = "t";
      break;
    case "n":
    case "?":
      for (X = s + 1; n[X] != null && ((f = n[X].t) === "?" || f === "D" || (f === " " || f === "t") && n[X + 1] != null && (n[X + 1].t === "?" || n[X + 1].t === "t" && n[X + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[X].v === "/" || n[X].v === " " && n[X + 1] != null && n[X + 1].t == "?")); ) n[s].v += n[X].v, n[X] = { v: "", t: ";" }, ++X;
      A += n[s].v, s = X - 1;
      break;
    case "G":
      n[s].t = "t", n[s].v = On(r, t);
      break;
  }
  var j = "", F, M;
  if (A.length > 0) {
    A.charCodeAt(0) == 40 ? (F = r < 0 && A.charCodeAt(0) === 45 ? -r : r, M = ja("n", A, F)) : (F = r < 0 && a > 1 ? -r : r, M = ja("n", A, F), F < 0 && n[0] && n[0].t == "t" && (M = M.substr(1), n[0].v = "-" + n[0].v)), X = M.length - 1;
    var U = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      U = s;
      break;
    }
    var B = n.length;
    if (U === n.length && M.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s) n[s] == null || "n?".indexOf(n[s].t) === -1 || (X >= n[s].v.length - 1 ? (X -= n[s].v.length, n[s].v = M.substr(X + 1, n[s].v.length)) : X < 0 ? n[s].v = "" : (n[s].v = M.substr(0, X + 1), X = -1), n[s].t = "t", B = s);
      X >= 0 && B < n.length && (n[B].v = M.substr(0, X + 1) + n[B].v);
    } else if (U !== n.length && M.indexOf("E") === -1) {
      for (X = M.indexOf(".") - 1, s = U; s >= 0; --s) if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
        for (h = n[s].v.indexOf(".") > -1 && s === U ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, j = n[s].v.substr(h + 1); h >= 0; --h) X >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#") && (j = M.charAt(X--) + j);
        n[s].v = j, n[s].t = "t", B = s;
      }
      for (X >= 0 && B < n.length && (n[B].v = M.substr(0, X + 1) + n[B].v), X = M.indexOf(".") + 1, s = U; s < n.length; ++s) if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== U)) {
        for (h = n[s].v.indexOf(".") > -1 && s === U ? n[s].v.indexOf(".") + 1 : 0, j = n[s].v.substr(0, h); h < n[s].v.length; ++h) X < M.length && (j += M.charAt(X++));
        n[s].v = j, n[s].t = "t", B = s;
      }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (F = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = ja(n[s].t, n[s].v, F), n[s].t = "t");
  var K = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (K += n[s].v);
  return K;
}
var _c = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function wc(e, r) {
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
function vd(e, r) {
  var t = xd(e), a = t.length, n = t[a - 1].indexOf("@");
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
    var s = t[0].match(_c), f = t[1].match(_c);
    return wc(r, s) ? [a, t[0]] : wc(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function aa(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : ir)[e], a == null && (a = t.table && t.table[vc[e]] || ir[vc[e]]), a == null && (a = Q1[e] || "General");
      break;
  }
  if (Qs(a, 0)) return On(r, t);
  r instanceof Date && (r = Yr(r, t.date1904));
  var n = vd(a, r);
  if (Qs(n[1])) return On(r, t);
  if (r === true) r = "TRUE";
  else if (r === false) r = "FALSE";
  else {
    if (r === "" || r == null) return "";
    if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return pd(n[1], r, t, n[0]);
}
function Ul(e, r) {
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
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Ul(e[r], r);
}
function ci() {
  ir = J1();
}
var md = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, r0 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function gd(e) {
  var r = typeof e == "number" ? ir[e] : e;
  return r = r.replace(r0, "(\\d+)"), r0.lastIndex = 0, new RegExp("^" + r + "$");
}
function _d(e, r, t) {
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
var wd = { "d.m": "d\\.m" };
function cn(e, r) {
  return Ul(wd[e] || e, r);
}
var yc = (function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var F = 0, M = new Array(256), U = 0; U != 256; ++U) F = U, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, M[U] = F;
    return typeof Int32Array < "u" ? new Int32Array(M) : M;
  }
  var t = r();
  function a(F) {
    var M = 0, U = 0, B = 0, K = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (B = 0; B != 256; ++B) K[B] = F[B];
    for (B = 0; B != 256; ++B) for (U = F[B], M = 256 + B; M < 4096; M += 256) U = K[M] = U >>> 8 ^ F[U & 255];
    var J = [];
    for (B = 1; B != 16; ++B) J[B - 1] = typeof Int32Array < "u" && typeof K.subarray == "function" ? K.subarray(B * 256, B * 256 + 256) : K.slice(B * 256, B * 256 + 256);
    return J;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], o = n[3], l = n[4], h = n[5], v = n[6], d = n[7], x = n[8], w = n[9], y = n[10], m = n[11], g = n[12], S = n[13], E = n[14];
  function A(F, M) {
    for (var U = M ^ -1, B = 0, K = F.length; B < K; ) U = U >>> 8 ^ t[(U ^ F.charCodeAt(B++)) & 255];
    return ~U;
  }
  function X(F, M) {
    for (var U = M ^ -1, B = F.length - 15, K = 0; K < B; ) U = E[F[K++] ^ U & 255] ^ S[F[K++] ^ U >> 8 & 255] ^ g[F[K++] ^ U >> 16 & 255] ^ m[F[K++] ^ U >>> 24] ^ y[F[K++]] ^ w[F[K++]] ^ x[F[K++]] ^ d[F[K++]] ^ v[F[K++]] ^ h[F[K++]] ^ l[F[K++]] ^ o[F[K++]] ^ f[F[K++]] ^ s[F[K++]] ^ i[F[K++]] ^ t[F[K++]];
    for (B += 15; K < B; ) U = U >>> 8 ^ t[(U ^ F[K++]) & 255];
    return ~U;
  }
  function j(F, M) {
    for (var U = M ^ -1, B = 0, K = F.length, J = 0, ie = 0; B < K; ) J = F.charCodeAt(B++), J < 128 ? U = U >>> 8 ^ t[(U ^ J) & 255] : J < 2048 ? (U = U >>> 8 ^ t[(U ^ (192 | J >> 6 & 31)) & 255], U = U >>> 8 ^ t[(U ^ (128 | J & 63)) & 255]) : J >= 55296 && J < 57344 ? (J = (J & 1023) + 64, ie = F.charCodeAt(B++) & 1023, U = U >>> 8 ^ t[(U ^ (240 | J >> 8 & 7)) & 255], U = U >>> 8 ^ t[(U ^ (128 | J >> 2 & 63)) & 255], U = U >>> 8 ^ t[(U ^ (128 | ie >> 6 & 15 | (J & 3) << 4)) & 255], U = U >>> 8 ^ t[(U ^ (128 | ie & 63)) & 255]) : (U = U >>> 8 ^ t[(U ^ (224 | J >> 12 & 15)) & 255], U = U >>> 8 ^ t[(U ^ (128 | J >> 6 & 63)) & 255], U = U >>> 8 ^ t[(U ^ (128 | J & 63)) & 255]);
    return ~U;
  }
  return e.table = t, e.bstr = A, e.buf = X, e.str = j, e;
})(), sr = (function() {
  var r = {};
  r.version = "1.2.2";
  function t(b, P) {
    for (var C = b.split("/"), I = P.split("/"), N = 0, L = 0, oe = Math.min(C.length, I.length); N < oe; ++N) {
      if (L = C[N].length - I[N].length) return L;
      if (C[N] != I[N]) return C[N] < I[N] ? -1 : 1;
    }
    return C.length - I.length;
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
    var I = P.getFullYear() - 1980;
    I = I << 4 | P.getMonth() + 1, I = I << 5 | P.getDate(), b.write_shift(2, I);
  }
  function s(b) {
    var P = b.read_shift(2) & 65535, C = b.read_shift(2) & 65535, I = /* @__PURE__ */ new Date(), N = C & 31;
    C >>>= 5;
    var L = C & 15;
    C >>>= 4, I.setMilliseconds(0), I.setFullYear(C + 1980), I.setMonth(L - 1), I.setDate(N);
    var oe = P & 31;
    P >>>= 5;
    var xe = P & 63;
    return P >>>= 6, I.setHours(P), I.setMinutes(xe), I.setSeconds(oe << 1), I;
  }
  function f(b) {
    lt(b, 0);
    for (var P = {}, C = 0; b.l <= b.length - 4; ) {
      var I = b.read_shift(2), N = b.read_shift(2), L = b.l + N, oe = {};
      switch (I) {
        case 21589:
          C = b.read_shift(1), C & 1 && (oe.mtime = b.read_shift(4)), N > 5 && (C & 2 && (oe.atime = b.read_shift(4)), C & 4 && (oe.ctime = b.read_shift(4))), oe.mtime && (oe.mt = new Date(oe.mtime * 1e3));
          break;
        case 1:
          {
            var xe = b.read_shift(4), ne = b.read_shift(4);
            oe.usz = ne * Math.pow(2, 32) + xe, xe = b.read_shift(4), ne = b.read_shift(4), oe.csz = ne * Math.pow(2, 32) + xe;
          }
          break;
      }
      b.l = L, P[I] = oe;
    }
    return P;
  }
  var o;
  function l() {
    return o || (o = yd);
  }
  function h(b, P) {
    if (b[0] == 80 && b[1] == 75) return Ke(b, P);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return en(b, P);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var C = 3, I = 512, N = 0, L = 0, oe = 0, xe = 0, ne = 0, le = [], se = b.slice(0, 512);
    lt(se, 0);
    var Ee = v(se);
    switch (C = Ee[0], C) {
      case 3:
        I = 512;
        break;
      case 4:
        I = 4096;
        break;
      case 0:
        if (Ee[1] == 0) return Ke(b, P);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + C);
    }
    I !== 512 && (se = b.slice(0, I), lt(se, 28));
    var Re = b.slice(0, I);
    d(se, C);
    var De = se.read_shift(4, "i");
    if (C === 3 && De !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + De);
    se.l += 4, oe = se.read_shift(4, "i"), se.l += 4, se.chk("00100000", "Mini Stream Cutoff Size: "), xe = se.read_shift(4, "i"), N = se.read_shift(4, "i"), ne = se.read_shift(4, "i"), L = se.read_shift(4, "i");
    for (var we = -1, be = 0; be < 109 && (we = se.read_shift(4, "i"), !(we < 0)); ++be) le[be] = we;
    var cr = x(b, I);
    m(ne, L, cr, I, le);
    var Nr = S(cr, oe, le, I);
    oe < Nr.length && (Nr[oe].name = "!Directory"), N > 0 && xe !== ie && (Nr[xe].name = "!MiniFAT"), Nr[le[0]].name = "!FAT", Nr.fat_addrs = le, Nr.ssz = I;
    var Hr = {}, it = [], La = [], qt = [];
    E(oe, Nr, cr, it, N, Hr, La, xe), w(La, qt, it), it.shift();
    var rn = { FileIndex: La, FullPaths: qt };
    return P && P.raw && (rn.raw = { header: Re, sectors: cr }), rn;
  }
  function v(b) {
    if (b[b.l] == 80 && b[b.l + 1] == 75) return [0, 0];
    b.chk(Ie, "Header Signature: "), b.l += 16;
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
    for (var C = Math.ceil(b.length / P) - 1, I = [], N = 1; N < C; ++N) I[N - 1] = b.slice(N * P, (N + 1) * P);
    return I[C - 1] = b.slice(C * P), I;
  }
  function w(b, P, C) {
    for (var I = 0, N = 0, L = 0, oe = 0, xe = 0, ne = C.length, le = [], se = []; I < ne; ++I) le[I] = se[I] = I, P[I] = C[I];
    for (; xe < se.length; ++xe) I = se[xe], N = b[I].L, L = b[I].R, oe = b[I].C, le[I] === I && (N !== -1 && le[N] !== N && (le[I] = le[N]), L !== -1 && le[L] !== L && (le[I] = le[L])), oe !== -1 && (le[oe] = I), N !== -1 && I != le[I] && (le[N] = le[I], se.lastIndexOf(N) < xe && se.push(N)), L !== -1 && I != le[I] && (le[L] = le[I], se.lastIndexOf(L) < xe && se.push(L));
    for (I = 1; I < ne; ++I) le[I] === I && (L !== -1 && le[L] !== L ? le[I] = le[L] : N !== -1 && le[N] !== N && (le[I] = le[N]));
    for (I = 1; I < ne; ++I) if (b[I].type !== 0) {
      if (xe = I, xe != le[xe]) do
        xe = le[xe], P[I] = P[xe] + "/" + P[I];
      while (xe !== 0 && le[xe] !== -1 && xe != le[xe]);
      le[I] = -1;
    }
    for (P[0] += "/", I = 1; I < ne; ++I) b[I].type !== 2 && (P[I] += "/");
  }
  function y(b, P, C) {
    for (var I = b.start, N = b.size, L = [], oe = I; C && N > 0 && oe >= 0; ) L.push(P.slice(oe * J, oe * J + J)), N -= J, oe = En(C, oe * 4);
    return L.length === 0 ? ce(0) : rt(L).slice(0, b.size);
  }
  function m(b, P, C, I, N) {
    var L = ie;
    if (b === ie) {
      if (P !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var oe = C[b], xe = (I >>> 2) - 1;
      if (!oe) return;
      for (var ne = 0; ne < xe && (L = En(oe, ne * 4)) !== ie; ++ne) N.push(L);
      P >= 1 && m(En(oe, I - 4), P - 1, C, I, N);
    }
  }
  function g(b, P, C, I, N) {
    var L = [], oe = [];
    N || (N = []);
    var xe = I - 1, ne = 0, le = 0;
    for (ne = P; ne >= 0; ) {
      N[ne] = true, L[L.length] = ne, oe.push(b[ne]);
      var se = C[Math.floor(ne * 4 / I)];
      if (le = ne * 4 & xe, I < 4 + le) throw new Error("FAT boundary crossed: " + ne + " 4 " + I);
      if (!b[se]) break;
      ne = En(b[se], le);
    }
    return { nodes: L, data: Oc([oe]) };
  }
  function S(b, P, C, I) {
    var N = b.length, L = [], oe = [], xe = [], ne = [], le = I - 1, se = 0, Ee = 0, Re = 0, De = 0;
    for (se = 0; se < N; ++se) if (xe = [], Re = se + P, Re >= N && (Re -= N), !oe[Re]) {
      ne = [];
      var we = [];
      for (Ee = Re; Ee >= 0; ) {
        we[Ee] = true, oe[Ee] = true, xe[xe.length] = Ee, ne.push(b[Ee]);
        var be = C[Math.floor(Ee * 4 / I)];
        if (De = Ee * 4 & le, I < 4 + De) throw new Error("FAT boundary crossed: " + Ee + " 4 " + I);
        if (!b[be] || (Ee = En(b[be], De), we[Ee])) break;
      }
      L[Re] = { nodes: xe, data: Oc([ne]) };
    }
    return L;
  }
  function E(b, P, C, I, N, L, oe, xe) {
    for (var ne = 0, le = I.length ? 2 : 0, se = P[b].data, Ee = 0, Re = 0, De; Ee < se.length; Ee += 128) {
      var we = se.slice(Ee, Ee + 128);
      lt(we, 64), Re = we.read_shift(2), De = fo(we, 0, Re - le), I.push(De);
      var be = { name: De, type: we.read_shift(1), color: we.read_shift(1), L: we.read_shift(4, "i"), R: we.read_shift(4, "i"), C: we.read_shift(4, "i"), clsid: we.read_shift(16), state: we.read_shift(4, "i"), start: 0, size: 0 }, cr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      cr !== 0 && (be.ct = A(we, we.l - 8));
      var Nr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      Nr !== 0 && (be.mt = A(we, we.l - 8)), be.start = we.read_shift(4, "i"), be.size = we.read_shift(4, "i"), be.size < 0 && be.start < 0 && (be.size = be.type = 0, be.start = ie, be.name = ""), be.type === 5 ? (ne = be.start, N > 0 && ne !== ie && (P[ne].name = "!StreamData")) : be.size >= 4096 ? (be.storage = "fat", P[be.start] === void 0 && (P[be.start] = g(C, be.start, P.fat_addrs, P.ssz)), P[be.start].name = be.name, be.content = P[be.start].data.slice(0, be.size)) : (be.storage = "minifat", be.size < 0 ? be.size = 0 : ne !== ie && be.start !== ie && P[ne] && (be.content = y(be, P[ne].data, (P[xe] || {}).data))), be.content && lt(be.content, 0), L[De] = be, oe.push(be);
    }
  }
  function A(b, P) {
    return new Date((ea(b, P + 4) / 1e7 * Math.pow(2, 32) + ea(b, P) / 1e7 - 11644473600) * 1e3);
  }
  function X(b, P) {
    return l(), h(o.readFileSync(b), P);
  }
  function j(b, P) {
    var C = P && P.type;
    switch (C || mr && Buffer.isBuffer(b) && (C = "buffer"), C || "base64") {
      case "file":
        return X(b, P);
      case "base64":
        return h(Kt(ta(b)), P);
      case "binary":
        return h(Kt(b), P);
    }
    return h(b, P);
  }
  function F(b, P) {
    var C = P || {}, I = C.root || "Root Entry";
    if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
    b.FullPaths.length === 0 && (b.FullPaths[0] = I + "/", b.FileIndex[0] = { name: I, type: 5 }), C.CLSID && (b.FileIndex[0].clsid = C.CLSID), M(b);
  }
  function M(b) {
    var P = "Sh33tJ5";
    if (!sr.find(b, "/" + P)) {
      var C = ce(4);
      C[0] = 55, C[1] = C[3] = 50, C[2] = 54, b.FileIndex.push({ name: P, type: 2, content: C, size: 4, L: 69, R: 69, C: 69 }), b.FullPaths.push(b.FullPaths[0] + P), U(b);
    }
  }
  function U(b, P) {
    F(b);
    for (var C = false, I = false, N = b.FullPaths.length - 1; N >= 0; --N) {
      var L = b.FileIndex[N];
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
    if (!(!C && !P)) {
      var oe = new Date(1987, 1, 19), xe = 0, ne = Object.create ? /* @__PURE__ */ Object.create(null) : {}, le = [];
      for (N = 0; N < b.FullPaths.length; ++N) ne[b.FullPaths[N]] = true, b.FileIndex[N].type !== 0 && le.push([b.FullPaths[N], b.FileIndex[N]]);
      for (N = 0; N < le.length; ++N) {
        var se = a(le[N][0]);
        for (I = ne[se]; !I; ) {
          for (; a(se) && !ne[a(se)]; ) se = a(se);
          le.push([se, { name: n(se).replace("/", ""), type: 1, clsid: Ve, ct: oe, mt: oe, content: null }]), ne[se] = true, se = a(le[N][0]), I = ne[se];
        }
      }
      for (le.sort(function(De, we) {
        return t(De[0], we[0]);
      }), b.FullPaths = [], b.FileIndex = [], N = 0; N < le.length; ++N) b.FullPaths[N] = le[N][0], b.FileIndex[N] = le[N][1];
      for (N = 0; N < le.length; ++N) {
        var Ee = b.FileIndex[N], Re = b.FullPaths[N];
        if (Ee.name = n(Re).replace("/", ""), Ee.L = Ee.R = Ee.C = -(Ee.color = 1), Ee.size = Ee.content ? Ee.content.length : 0, Ee.start = 0, Ee.clsid = Ee.clsid || Ve, N === 0) Ee.C = le.length > 1 ? 1 : -1, Ee.size = 0, Ee.type = 5;
        else if (Re.slice(-1) == "/") {
          for (xe = N + 1; xe < le.length && a(b.FullPaths[xe]) != Re; ++xe) ;
          for (Ee.C = xe >= le.length ? -1 : xe, xe = N + 1; xe < le.length && a(b.FullPaths[xe]) != a(Re); ++xe) ;
          Ee.R = xe >= le.length ? -1 : xe, Ee.type = 1;
        } else a(b.FullPaths[N + 1] || "") == a(Re) && (Ee.R = N + 1), Ee.type = 2;
      }
    }
  }
  function B(b, P) {
    var C = P || {};
    if (C.fileType == "mad") return xi(b, C);
    if (U(b), C.fileType === "zip") return hs(b, C);
    var I = (function(De) {
      for (var we = 0, be = 0, cr = 0; cr < De.FileIndex.length; ++cr) {
        var Nr = De.FileIndex[cr];
        if (Nr.content) {
          var Hr = Nr.content.length;
          Hr > 0 && (Hr < 4096 ? we += Hr + 63 >> 6 : be += Hr + 511 >> 9);
        }
      }
      for (var it = De.FullPaths.length + 3 >> 2, La = we + 7 >> 3, qt = we + 127 >> 7, rn = La + be + it + qt, na = rn + 127 >> 7, Gn = na <= 109 ? 0 : Math.ceil((na - 109) / 127); rn + na + Gn + 127 >> 7 > na; ) Gn = ++na <= 109 ? 0 : Math.ceil((na - 109) / 127);
      var lr = [1, Gn, na, qt, it, be, we, 0];
      return De.FileIndex[0].size = we << 6, lr[7] = (De.FileIndex[0].start = lr[0] + lr[1] + lr[2] + lr[3] + lr[4] + lr[5]) + (lr[6] + 7 >> 3), lr;
    })(b), N = ce(I[7] << 9), L = 0, oe = 0;
    {
      for (L = 0; L < 8; ++L) N.write_shift(1, ve[L]);
      for (L = 0; L < 8; ++L) N.write_shift(2, 0);
      for (N.write_shift(2, 62), N.write_shift(2, 3), N.write_shift(2, 65534), N.write_shift(2, 9), N.write_shift(2, 6), L = 0; L < 3; ++L) N.write_shift(2, 0);
      for (N.write_shift(4, 0), N.write_shift(4, I[2]), N.write_shift(4, I[0] + I[1] + I[2] + I[3] - 1), N.write_shift(4, 0), N.write_shift(4, 4096), N.write_shift(4, I[3] ? I[0] + I[1] + I[2] - 1 : ie), N.write_shift(4, I[3]), N.write_shift(-4, I[1] ? I[0] - 1 : ie), N.write_shift(4, I[1]), L = 0; L < 109; ++L) N.write_shift(-4, L < I[2] ? I[1] + L : -1);
    }
    if (I[1]) for (oe = 0; oe < I[1]; ++oe) {
      for (; L < 236 + oe * 127; ++L) N.write_shift(-4, L < I[2] ? I[1] + L : -1);
      N.write_shift(-4, oe === I[1] - 1 ? ie : oe + 1);
    }
    var xe = function(De) {
      for (oe += De; L < oe - 1; ++L) N.write_shift(-4, L + 1);
      De && (++L, N.write_shift(-4, ie));
    };
    for (oe = L = 0, oe += I[1]; L < oe; ++L) N.write_shift(-4, ye.DIFSECT);
    for (oe += I[2]; L < oe; ++L) N.write_shift(-4, ye.FATSECT);
    xe(I[3]), xe(I[4]);
    for (var ne = 0, le = 0, se = b.FileIndex[0]; ne < b.FileIndex.length; ++ne) se = b.FileIndex[ne], se.content && (le = se.content.length, !(le < 4096) && (se.start = oe, xe(le + 511 >> 9)));
    for (xe(I[6] + 7 >> 3); N.l & 511; ) N.write_shift(-4, ye.ENDOFCHAIN);
    for (oe = L = 0, ne = 0; ne < b.FileIndex.length; ++ne) se = b.FileIndex[ne], se.content && (le = se.content.length, !(!le || le >= 4096) && (se.start = oe, xe(le + 63 >> 6)));
    for (; N.l & 511; ) N.write_shift(-4, ye.ENDOFCHAIN);
    for (L = 0; L < I[4] << 2; ++L) {
      var Ee = b.FullPaths[L];
      if (!Ee || Ee.length === 0) {
        for (ne = 0; ne < 17; ++ne) N.write_shift(4, 0);
        for (ne = 0; ne < 3; ++ne) N.write_shift(4, -1);
        for (ne = 0; ne < 12; ++ne) N.write_shift(4, 0);
        continue;
      }
      se = b.FileIndex[L], L === 0 && (se.start = se.size ? se.start - 1 : ie);
      var Re = L === 0 && C.root || se.name;
      if (Re.length > 31 && (console.error("Name " + Re + " will be truncated to " + Re.slice(0, 31)), Re = Re.slice(0, 31)), le = 2 * (Re.length + 1), N.write_shift(64, Re, "utf16le"), N.write_shift(2, le), N.write_shift(1, se.type), N.write_shift(1, se.color), N.write_shift(-4, se.L), N.write_shift(-4, se.R), N.write_shift(-4, se.C), se.clsid) N.write_shift(16, se.clsid, "hex");
      else for (ne = 0; ne < 4; ++ne) N.write_shift(4, 0);
      N.write_shift(4, se.state || 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, 0), N.write_shift(4, se.start), N.write_shift(4, se.size), N.write_shift(4, 0);
    }
    for (L = 1; L < b.FileIndex.length; ++L) if (se = b.FileIndex[L], se.size >= 4096) if (N.l = se.start + 1 << 9, mr && Buffer.isBuffer(se.content)) se.content.copy(N, N.l, 0, se.size), N.l += se.size + 511 & -512;
    else {
      for (ne = 0; ne < se.size; ++ne) N.write_shift(1, se.content[ne]);
      for (; ne & 511; ++ne) N.write_shift(1, 0);
    }
    for (L = 1; L < b.FileIndex.length; ++L) if (se = b.FileIndex[L], se.size > 0 && se.size < 4096) if (mr && Buffer.isBuffer(se.content)) se.content.copy(N, N.l, 0, se.size), N.l += se.size + 63 & -64;
    else {
      for (ne = 0; ne < se.size; ++ne) N.write_shift(1, se.content[ne]);
      for (; ne & 63; ++ne) N.write_shift(1, 0);
    }
    if (mr) N.l = N.length;
    else for (; N.l < N.length; ) N.write_shift(1, 0);
    return N;
  }
  function K(b, P) {
    var C = b.FullPaths.map(function(ne) {
      return ne.toUpperCase();
    }), I = C.map(function(ne) {
      var le = ne.split("/");
      return le[le.length - (ne.slice(-1) == "/" ? 2 : 1)];
    }), N = false;
    P.charCodeAt(0) === 47 ? (N = true, P = C[0].slice(0, -1) + P) : N = P.indexOf("/") !== -1;
    var L = P.toUpperCase(), oe = N === true ? C.indexOf(L) : I.indexOf(L);
    if (oe !== -1) return b.FileIndex[oe];
    var xe = !L.match(Ai);
    for (L = L.replace($t, ""), xe && (L = L.replace(Ai, "!")), oe = 0; oe < C.length; ++oe) if ((xe ? C[oe].replace(Ai, "!") : C[oe]).replace($t, "") == L || (xe ? I[oe].replace(Ai, "!") : I[oe]).replace($t, "") == L) return b.FileIndex[oe];
    return null;
  }
  var J = 64, ie = -2, Ie = "d0cf11e0a1b11ae1", ve = [208, 207, 17, 224, 161, 177, 26, 225], Ve = "00000000000000000000000000000000", ye = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: ie, FREESECT: -1, HEADER_SIGNATURE: Ie, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: Ve, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function Be(b, P, C) {
    l();
    var I = B(b, C);
    o.writeFileSync(P, I);
  }
  function Qe(b) {
    for (var P = new Array(b.length), C = 0; C < b.length; ++C) P[C] = String.fromCharCode(b[C]);
    return P.join("");
  }
  function de(b, P) {
    var C = B(b, P);
    switch (P && P.type || "buffer") {
      case "file":
        return l(), o.writeFileSync(P.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : Qe(C);
      case "base64":
        return Zs(typeof C == "string" ? C : Qe(C));
      case "buffer":
        if (mr) return Buffer.isBuffer(C) ? C : Ba(C);
      case "array":
        return typeof C == "string" ? Kt(C) : C;
    }
    return C;
  }
  var fr;
  function Me(b) {
    try {
      var P = b.InflateRaw, C = new P();
      if (C._processChunk(new Uint8Array([3, 0]), C._finishFlushFlag), C.bytesRead) fr = b;
      else throw new Error("zlib does not expose bytesRead");
    } catch (I) {
      console.error("cannot use native zlib: " + (I.message || I));
    }
  }
  function Te(b, P) {
    if (!fr) return Ta(b, P);
    var C = fr.InflateRaw, I = new C(), N = I._processChunk(b.slice(b.l), I._finishFlushFlag);
    return b.l += I.bytesRead, N;
  }
  function ke(b) {
    return fr ? fr.deflateRawSync(b) : xt(b);
  }
  var Ge = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ze = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ze = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function R(b) {
    var P = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (P >> 16 | P >> 8 | P) & 255;
  }
  for (var W = typeof Uint8Array < "u", z = W ? new Uint8Array(256) : [], V = 0; V < 256; ++V) z[V] = R(V);
  function ue(b, P) {
    var C = z[b & 255];
    return P <= 8 ? C >>> 8 - P : (C = C << 8 | z[b >> 8 & 255], P <= 16 ? C >>> 16 - P : (C = C << 8 | z[b >> 16 & 255], C >>> 24 - P));
  }
  function D(b, P) {
    var C = P & 7, I = P >>> 3;
    return (b[I] | (C <= 6 ? 0 : b[I + 1] << 8)) >>> C & 3;
  }
  function Ce(b, P) {
    var C = P & 7, I = P >>> 3;
    return (b[I] | (C <= 5 ? 0 : b[I + 1] << 8)) >>> C & 7;
  }
  function We(b, P) {
    var C = P & 7, I = P >>> 3;
    return (b[I] | (C <= 4 ? 0 : b[I + 1] << 8)) >>> C & 15;
  }
  function Se(b, P) {
    var C = P & 7, I = P >>> 3;
    return (b[I] | (C <= 3 ? 0 : b[I + 1] << 8)) >>> C & 31;
  }
  function ar(b, P) {
    var C = P & 7, I = P >>> 3;
    return (b[I] | (C <= 1 ? 0 : b[I + 1] << 8)) >>> C & 127;
  }
  function rr(b, P, C) {
    var I = P & 7, N = P >>> 3, L = (1 << C) - 1, oe = b[N] >>> I;
    return C < 8 - I || (oe |= b[N + 1] << 8 - I, C < 16 - I) || (oe |= b[N + 2] << 16 - I, C < 24 - I) || (oe |= b[N + 3] << 24 - I), oe & L;
  }
  function or(b, P, C) {
    var I = P & 7, N = P >>> 3;
    return I <= 5 ? b[N] |= (C & 7) << I : (b[N] |= C << I & 255, b[N + 1] = (C & 7) >> 8 - I), P + 3;
  }
  function Ir(b, P, C) {
    var I = P & 7, N = P >>> 3;
    return C = (C & 1) << I, b[N] |= C, P + 1;
  }
  function Er(b, P, C) {
    var I = P & 7, N = P >>> 3;
    return C <<= I, b[N] |= C & 255, C >>>= 8, b[N + 1] = C, P + 8;
  }
  function Kr(b, P, C) {
    var I = P & 7, N = P >>> 3;
    return C <<= I, b[N] |= C & 255, C >>>= 8, b[N + 1] = C & 255, b[N + 2] = C >>> 8, P + 16;
  }
  function $e(b, P) {
    var C = b.length, I = 2 * C > P ? 2 * C : P + 5, N = 0;
    if (C >= P) return b;
    if (mr) {
      var L = dc(I);
      if (b.copy) b.copy(L);
      else for (; N < b.length; ++N) L[N] = b[N];
      return L;
    } else if (W) {
      var oe = new Uint8Array(I);
      if (oe.set) oe.set(b);
      else for (; N < C; ++N) oe[N] = b[N];
      return oe;
    }
    return b.length = I, b;
  }
  function Tr(b) {
    for (var P = new Array(b), C = 0; C < b; ++C) P[C] = 0;
    return P;
  }
  function Ne(b, P, C) {
    var I = 1, N = 0, L = 0, oe = 0, xe = 0, ne = b.length, le = W ? new Uint16Array(32) : Tr(32);
    for (L = 0; L < 32; ++L) le[L] = 0;
    for (L = ne; L < C; ++L) b[L] = 0;
    ne = b.length;
    var se = W ? new Uint16Array(ne) : Tr(ne);
    for (L = 0; L < ne; ++L) le[N = b[L]]++, I < N && (I = N), se[L] = 0;
    for (le[0] = 0, L = 1; L <= I; ++L) le[L + 16] = xe = xe + le[L - 1] << 1;
    for (L = 0; L < ne; ++L) xe = b[L], xe != 0 && (se[L] = le[xe + 16]++);
    var Ee = 0;
    for (L = 0; L < ne; ++L) if (Ee = b[L], Ee != 0) for (xe = ue(se[L], I) >> I - Ee, oe = (1 << I + 4 - Ee) - 1; oe >= 0; --oe) P[xe | oe << Ee] = Ee & 15 | L << 4;
    return I;
  }
  var Jr = W ? new Uint16Array(512) : Tr(512), qr = W ? new Uint16Array(32) : Tr(32);
  if (!W) {
    for (var Ur = 0; Ur < 512; ++Ur) Jr[Ur] = 0;
    for (Ur = 0; Ur < 32; ++Ur) qr[Ur] = 0;
  }
  (function() {
    for (var b = [], P = 0; P < 32; P++) b.push(5);
    Ne(b, qr, 32);
    var C = [];
    for (P = 0; P <= 143; P++) C.push(8);
    for (; P <= 255; P++) C.push(9);
    for (; P <= 279; P++) C.push(7);
    for (; P <= 287; P++) C.push(8);
    Ne(C, Jr, 288);
  })();
  var yt = (function() {
    for (var P = W ? new Uint8Array(32768) : [], C = 0, I = 0; C < Ze.length - 1; ++C) for (; I < Ze[C + 1]; ++I) P[I] = C;
    for (; I < 32768; ++I) P[I] = 29;
    var N = W ? new Uint8Array(259) : [];
    for (C = 0, I = 0; C < ze.length - 1; ++C) for (; I < ze[C + 1]; ++I) N[I] = C;
    function L(xe, ne) {
      for (var le = 0; le < xe.length; ) {
        var se = Math.min(65535, xe.length - le), Ee = le + se == xe.length;
        for (ne.write_shift(1, +Ee), ne.write_shift(2, se), ne.write_shift(2, ~se & 65535); se-- > 0; ) ne[ne.l++] = xe[le++];
      }
      return ne.l;
    }
    function oe(xe, ne) {
      for (var le = 0, se = 0, Ee = W ? new Uint16Array(32768) : []; se < xe.length; ) {
        var Re = Math.min(65535, xe.length - se);
        if (Re < 10) {
          for (le = or(ne, le, +(se + Re == xe.length)), le & 7 && (le += 8 - (le & 7)), ne.l = le / 8 | 0, ne.write_shift(2, Re), ne.write_shift(2, ~Re & 65535); Re-- > 0; ) ne[ne.l++] = xe[se++];
          le = ne.l * 8;
          continue;
        }
        le = or(ne, le, +(se + Re == xe.length) + 2);
        for (var De = 0; Re-- > 0; ) {
          var we = xe[se];
          De = (De << 5 ^ we) & 32767;
          var be = -1, cr = 0;
          if ((be = Ee[De]) && (be |= se & -32768, be > se && (be -= 32768), be < se)) for (; xe[be + cr] == xe[se + cr] && cr < 250; ) ++cr;
          if (cr > 2) {
            we = N[cr], we <= 22 ? le = Er(ne, le, z[we + 1] >> 1) - 1 : (Er(ne, le, 3), le += 5, Er(ne, le, z[we - 23] >> 5), le += 3);
            var Nr = we < 8 ? 0 : we - 4 >> 2;
            Nr > 0 && (Kr(ne, le, cr - ze[we]), le += Nr), we = P[se - be], le = Er(ne, le, z[we] >> 3), le -= 3;
            var Hr = we < 4 ? 0 : we - 2 >> 1;
            Hr > 0 && (Kr(ne, le, se - be - Ze[we]), le += Hr);
            for (var it = 0; it < cr; ++it) Ee[De] = se & 32767, De = (De << 5 ^ xe[se]) & 32767, ++se;
            Re -= cr - 1;
          } else we <= 143 ? we = we + 48 : le = Ir(ne, le, 1), le = Er(ne, le, z[we]), Ee[De] = se & 32767, ++se;
        }
        le = Er(ne, le, 0) - 1;
      }
      return ne.l = (le + 7) / 8 | 0, ne.l;
    }
    return function(ne, le) {
      return ne.length < 8 ? L(ne, le) : oe(ne, le);
    };
  })();
  function xt(b) {
    var P = ce(50 + Math.floor(b.length * 1.1)), C = yt(b, P);
    return P.slice(0, C);
  }
  var je = W ? new Uint16Array(32768) : Tr(32768), kr = W ? new Uint16Array(32768) : Tr(32768), jr = W ? new Uint16Array(128) : Tr(128), zr = 1, pt = 1;
  function Je(b, P) {
    var C = Se(b, P) + 257;
    P += 5;
    var I = Se(b, P) + 1;
    P += 5;
    var N = We(b, P) + 4;
    P += 4;
    for (var L = 0, oe = W ? new Uint8Array(19) : Tr(19), xe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ne = 1, le = W ? new Uint8Array(8) : Tr(8), se = W ? new Uint8Array(8) : Tr(8), Ee = oe.length, Re = 0; Re < N; ++Re) oe[Ge[Re]] = L = Ce(b, P), ne < L && (ne = L), le[L]++, P += 3;
    var De = 0;
    for (le[0] = 0, Re = 1; Re <= ne; ++Re) se[Re] = De = De + le[Re - 1] << 1;
    for (Re = 0; Re < Ee; ++Re) (De = oe[Re]) != 0 && (xe[Re] = se[De]++);
    var we = 0;
    for (Re = 0; Re < Ee; ++Re) if (we = oe[Re], we != 0) {
      De = z[xe[Re]] >> 8 - we;
      for (var be = (1 << 7 - we) - 1; be >= 0; --be) jr[De | be << we] = we & 7 | Re << 3;
    }
    var cr = [];
    for (ne = 1; cr.length < C + I; ) switch (De = jr[ar(b, P)], P += De & 7, De >>>= 3) {
      case 16:
        for (L = 3 + D(b, P), P += 2, De = cr[cr.length - 1]; L-- > 0; ) cr.push(De);
        break;
      case 17:
        for (L = 3 + Ce(b, P), P += 3; L-- > 0; ) cr.push(0);
        break;
      case 18:
        for (L = 11 + ar(b, P), P += 7; L-- > 0; ) cr.push(0);
        break;
      default:
        cr.push(De), ne < De && (ne = De);
        break;
    }
    var Nr = cr.slice(0, C), Hr = cr.slice(C);
    for (Re = C; Re < 286; ++Re) Nr[Re] = 0;
    for (Re = I; Re < 30; ++Re) Hr[Re] = 0;
    return zr = Ne(Nr, je, 286), pt = Ne(Hr, kr, 30), P;
  }
  function Ea(b, P) {
    if (b[0] == 3 && !(b[1] & 3)) return [ln(P), 2];
    for (var C = 0, I = 0, N = dc(P || 1 << 18), L = 0, oe = N.length >>> 0, xe = 0, ne = 0; (I & 1) == 0; ) {
      if (I = Ce(b, C), C += 3, I >>> 1) I >> 1 == 1 ? (xe = 9, ne = 5) : (C = Je(b, C), xe = zr, ne = pt);
      else {
        C & 7 && (C += 8 - (C & 7));
        var le = b[C >>> 3] | b[(C >>> 3) + 1] << 8;
        if (C += 32, le > 0) for (!P && oe < L + le && (N = $e(N, L + le), oe = N.length); le-- > 0; ) N[L++] = b[C >>> 3], C += 8;
        continue;
      }
      for (; ; ) {
        !P && oe < L + 32767 && (N = $e(N, L + 32767), oe = N.length);
        var se = rr(b, C, xe), Ee = I >>> 1 == 1 ? Jr[se] : je[se];
        if (C += Ee & 15, Ee >>>= 4, (Ee >>> 8 & 255) === 0) N[L++] = Ee;
        else {
          if (Ee == 256) break;
          Ee -= 257;
          var Re = Ee < 8 ? 0 : Ee - 4 >> 2;
          Re > 5 && (Re = 0);
          var De = L + ze[Ee];
          Re > 0 && (De += rr(b, C, Re), C += Re), se = rr(b, C, ne), Ee = I >>> 1 == 1 ? qr[se] : kr[se], C += Ee & 15, Ee >>>= 4;
          var we = Ee < 4 ? 0 : Ee - 2 >> 1, be = Ze[Ee];
          for (we > 0 && (be += rr(b, C, we), C += we), !P && oe < De && (N = $e(N, De + 100), oe = N.length); L < De; ) N[L] = N[L - be], ++L;
        }
      }
    }
    return P ? [N, C + 7 >>> 3] : [N.slice(0, L), C + 7 >>> 3];
  }
  function Ta(b, P) {
    var C = b.slice(b.l || 0), I = Ea(C, P);
    return b.l += I[1], I[0];
  }
  function mn(b, P) {
    if (b) typeof console < "u" && console.error(P);
    else throw new Error(P);
  }
  function Ke(b, P) {
    var C = b;
    lt(C, 0);
    var I = [], N = [], L = { FileIndex: I, FullPaths: N };
    F(L, { root: P.root });
    for (var oe = C.length - 4; (C[oe] != 80 || C[oe + 1] != 75 || C[oe + 2] != 5 || C[oe + 3] != 6) && oe >= 0; ) --oe;
    C.l = oe + 4, C.l += 4;
    var xe = C.read_shift(2);
    C.l += 6;
    var ne = C.read_shift(4);
    for (C.l = ne, oe = 0; oe < xe; ++oe) {
      C.l += 20;
      var le = C.read_shift(4), se = C.read_shift(4), Ee = C.read_shift(2), Re = C.read_shift(2), De = C.read_shift(2);
      C.l += 8;
      var we = C.read_shift(4), be = f(C.slice(C.l + Ee, C.l + Ee + Re));
      C.l += Ee + Re + De;
      var cr = C.l;
      C.l = we + 4, be && be[1] && ((be[1] || {}).usz && (se = be[1].usz), (be[1] || {}).csz && (le = be[1].csz)), hi(C, le, se, L, be), C.l = cr;
    }
    return L;
  }
  function hi(b, P, C, I, N) {
    b.l += 2;
    var L = b.read_shift(2), oe = b.read_shift(2), xe = s(b);
    if (L & 8257) throw new Error("Unsupported ZIP encryption");
    for (var ne = b.read_shift(4), le = b.read_shift(4), se = b.read_shift(4), Ee = b.read_shift(2), Re = b.read_shift(2), De = "", we = 0; we < Ee; ++we) De += String.fromCharCode(b[b.l++]);
    if (Re) {
      var be = f(b.slice(b.l, b.l + Re));
      (be[21589] || {}).mt && (xe = be[21589].mt), (be[1] || {}).usz && (se = be[1].usz), (be[1] || {}).csz && (le = be[1].csz), N && ((N[21589] || {}).mt && (xe = N[21589].mt), (N[1] || {}).usz && (se = N[1].usz), (N[1] || {}).csz && (le = N[1].csz));
    }
    b.l += Re;
    var cr = b.slice(b.l, b.l + le);
    switch (oe) {
      case 8:
        cr = Te(b, se);
        break;
      case 0:
        b.l += le;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + oe);
    }
    var Nr = false;
    L & 8 && (ne = b.read_shift(4), ne == 134695760 && (ne = b.read_shift(4), Nr = true), le = b.read_shift(4), se = b.read_shift(4)), le != P && mn(Nr, "Bad compressed size: " + P + " != " + le), se != C && mn(Nr, "Bad uncompressed size: " + C + " != " + se), Wr(I, De, cr, { unsafe: true, mt: xe });
  }
  function hs(b, P) {
    var C = P || {}, I = [], N = [], L = ce(1), oe = C.compression ? 8 : 0, xe = 0, ne = 0, le = 0, se = 0, Ee = 0, Re = b.FullPaths[0], De = Re, we = b.FileIndex[0], be = [], cr = 0;
    for (ne = 1; ne < b.FullPaths.length; ++ne) if (De = b.FullPaths[ne].slice(Re.length), we = b.FileIndex[ne], !(!we.size || !we.content || Array.isArray(we.content) && we.content.length == 0 || De == "Sh33tJ5")) {
      var Nr = se, Hr = ce(De.length);
      for (le = 0; le < De.length; ++le) Hr.write_shift(1, De.charCodeAt(le) & 127);
      Hr = Hr.slice(0, Hr.l), be[Ee] = typeof we.content == "string" ? yc.bstr(we.content, 0) : yc.buf(we.content, 0);
      var it = typeof we.content == "string" ? Kt(we.content) : we.content;
      oe == 8 && (it = ke(it)), L = ce(30), L.write_shift(4, 67324752), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, oe), we.mt ? i(L, we.mt) : L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), se += L.length, I.push(L), se += Hr.length, I.push(Hr), se += it.length, I.push(it), L = ce(46), L.write_shift(4, 33639248), L.write_shift(2, 0), L.write_shift(2, 20), L.write_shift(2, xe), L.write_shift(2, oe), L.write_shift(4, 0), L.write_shift(-4, be[Ee]), L.write_shift(4, it.length), L.write_shift(4, we.content.length), L.write_shift(2, Hr.length), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(4, 0), L.write_shift(4, Nr), cr += L.l, N.push(L), cr += Hr.length, N.push(Hr), ++Ee;
    }
    return L = ce(22), L.write_shift(4, 101010256), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, Ee), L.write_shift(2, Ee), L.write_shift(4, cr), L.write_shift(4, se), L.write_shift(2, 0), rt([rt(I), rt(N), L]);
  }
  var Ja = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function ds(b, P) {
    if (b.ctype) return b.ctype;
    var C = b.name || "", I = C.match(/\.([^\.]+)$/);
    return I && Ja[I[1]] || P && (I = (C = P).match(/[\.\\]([^\.\\])+$/), I && Ja[I[1]]) ? Ja[I[1]] : "application/octet-stream";
  }
  function di(b) {
    for (var P = Zs(b), C = [], I = 0; I < P.length; I += 76) C.push(P.slice(I, I + 76));
    return C.join(`\r
`) + `\r
`;
  }
  function k0(b) {
    var P = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(le) {
      var se = le.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (se.length == 1 ? "0" + se : se);
    });
    P = P.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), P.charAt(0) == `
` && (P = "=0D" + P.slice(1)), P = P.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var C = [], I = P.split(`\r
`), N = 0; N < I.length; ++N) {
      var L = I[N];
      if (L.length == 0) {
        C.push("");
        continue;
      }
      for (var oe = 0; oe < L.length; ) {
        var xe = 76, ne = L.slice(oe, oe + xe);
        ne.charAt(xe - 1) == "=" ? xe-- : ne.charAt(xe - 2) == "=" ? xe -= 2 : ne.charAt(xe - 3) == "=" && (xe -= 3), ne = L.slice(oe, oe + xe), oe += xe, oe < L.length && (ne += "="), C.push(ne);
      }
    }
    return C.join(`\r
`);
  }
  function E0(b) {
    for (var P = [], C = 0; C < b.length; ++C) {
      for (var I = b[C]; C <= b.length && I.charAt(I.length - 1) == "="; ) I = I.slice(0, I.length - 1) + b[++C];
      P.push(I);
    }
    for (var N = 0; N < P.length; ++N) P[N] = P[N].replace(/[=][0-9A-Fa-f]{2}/g, function(L) {
      return String.fromCharCode(parseInt(L.slice(1), 16));
    });
    return Kt(P.join(`\r
`));
  }
  function Qa(b, P, C) {
    for (var I = "", N = "", L = "", oe, xe = 0; xe < 10; ++xe) {
      var ne = P[xe];
      if (!ne || ne.match(/^\s*$/)) break;
      var le = ne.match(/^([^:]*?):\s*([^\s].*)$/);
      if (le) switch (le[1].toLowerCase()) {
        case "content-location":
          I = le[2].trim();
          break;
        case "content-type":
          L = le[2].trim();
          break;
        case "content-transfer-encoding":
          N = le[2].trim();
          break;
      }
    }
    switch (++xe, N.toLowerCase()) {
      case "base64":
        oe = Kt(ta(P.slice(xe).join("")));
        break;
      case "quoted-printable":
        oe = E0(P.slice(xe));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + N);
    }
    var se = Wr(b, I.slice(C.length), oe, { unsafe: true });
    L && (se.ctype = L);
  }
  function en(b, P) {
    if (Qe(b.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var C = P && P.root || "", I = (mr && Buffer.isBuffer(b) ? b.toString("binary") : Qe(b)).split(`\r
`), N = 0, L = "";
    for (N = 0; N < I.length; ++N) if (L = I[N], !!/^Content-Location:/i.test(L) && (L = L.slice(L.indexOf("file")), C || (C = L.slice(0, L.lastIndexOf("/") + 1)), L.slice(0, C.length) != C)) for (; C.length > 0 && (C = C.slice(0, C.length - 1), C = C.slice(0, C.lastIndexOf("/") + 1), L.slice(0, C.length) != C); ) ;
    var oe = (I[1] || "").match(/boundary="(.*?)"/);
    if (!oe) throw new Error("MAD cannot find boundary");
    var xe = "--" + (oe[1] || ""), ne = [], le = [], se = { FileIndex: ne, FullPaths: le };
    F(se);
    var Ee, Re = 0;
    for (N = 0; N < I.length; ++N) {
      var De = I[N];
      De !== xe && De !== xe + "--" || (Re++ && Qa(se, I.slice(Ee, N), C), Ee = N);
    }
    return se;
  }
  function xi(b, P) {
    var C = P || {}, I = C.boundary || "SheetJS";
    I = "------=" + I;
    for (var N = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + I.slice(2) + '"', "", "", ""], L = b.FullPaths[0], oe = L, xe = b.FileIndex[0], ne = 1; ne < b.FullPaths.length; ++ne) if (oe = b.FullPaths[ne].slice(L.length), xe = b.FileIndex[ne], !(!xe.size || !xe.content || oe == "Sh33tJ5")) {
      oe = oe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(cr) {
        return "_x" + cr.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(cr) {
        return "_u" + cr.charCodeAt(0).toString(16) + "_";
      });
      for (var le = xe.content, se = mr && Buffer.isBuffer(le) ? le.toString("binary") : Qe(le), Ee = 0, Re = Math.min(1024, se.length), De = 0, we = 0; we <= Re; ++we) (De = se.charCodeAt(we)) >= 32 && De < 128 && ++Ee;
      var be = Ee >= Re * 4 / 5;
      N.push(I), N.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + oe), N.push("Content-Transfer-Encoding: " + (be ? "quoted-printable" : "base64")), N.push("Content-Type: " + ds(xe, oe)), N.push(""), N.push(be ? k0(se) : di(se));
    }
    return N.push(I + `--\r
`), N.join(`\r
`);
  }
  function Kn(b) {
    var P = {};
    return F(P, b), P;
  }
  function Wr(b, P, C, I) {
    var N = I && I.unsafe;
    N || F(b);
    var L = !N && sr.find(b, P);
    if (!L) {
      var oe = b.FullPaths[0];
      P.slice(0, oe.length) == oe ? oe = P : (oe.slice(-1) != "/" && (oe += "/"), oe = (oe + P).replace("//", "/")), L = { name: n(P), type: 2 }, b.FileIndex.push(L), b.FullPaths.push(oe), N || sr.utils.cfb_gc(b);
    }
    return L.content = C, L.size = C ? C.length : 0, I && (I.CLSID && (L.clsid = I.CLSID), I.mt && (L.mt = I.mt), I.ct && (L.ct = I.ct)), L;
  }
  function nt(b, P) {
    F(b);
    var C = sr.find(b, P);
    if (C) {
      for (var I = 0; I < b.FileIndex.length; ++I) if (b.FileIndex[I] == C) return b.FileIndex.splice(I, 1), b.FullPaths.splice(I, 1), true;
    }
    return false;
  }
  function T0(b, P, C) {
    F(b);
    var I = sr.find(b, P);
    if (I) {
      for (var N = 0; N < b.FileIndex.length; ++N) if (b.FileIndex[N] == I) return b.FileIndex[N].name = n(C), b.FullPaths[N] = C, true;
    }
    return false;
  }
  function jn(b) {
    U(b, true);
  }
  return r.find = K, r.read = j, r.parse = h, r.write = de, r.writeFile = Be, r.utils = { cfb_new: Kn, cfb_add: Wr, cfb_del: nt, cfb_mov: T0, cfb_gc: jn, ReadShift: Ii, CheckField: cu, prep_blob: lt, bconcat: rt, use_zlib: Me, _deflateRaw: xt, _inflateRaw: Ta, consts: ye }, r;
})(), yd;
function kc(e) {
  return typeof e == "string" ? o0(e) : Array.isArray(e) ? $1(e) : e;
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
  var a = t == "utf8" ? Na(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([kc(a)], { type: "application/octet-stream" });
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
      var f = "data:application/octet-stream;base64," + z1(new Uint8Array(kc(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: true });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var o = File(e);
    return o.open("w"), o.encoding = "binary", Array.isArray(r) && (r = Ra(r)), o.write(r), o.close(), r;
  } catch (l) {
    if (!l.message || l.message.indexOf("onstruct") == -1) throw l;
  }
  throw new Error("cannot save file " + e);
}
function kd(e) {
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
function Ec(e, r) {
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
function Ed(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Wl = Date.UTC(1899, 11, 30, 0, 0, 0), Td = Date.UTC(1899, 11, 31, 0, 0, 0), Sd = Date.UTC(1904, 0, 1, 0, 0, 0);
function Yr(e, r) {
  var t = e.getTime(), a = (t - Wl) / (1440 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Ga(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Wl), r;
}
function bd(e) {
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
var Fd = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, Ad = /^(\d+)-(\d+)-(\d+)$/, Hl = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function $r(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(Fd);
  if (t) return new Date((r ? Sd : Td) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(Ad), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(Hl), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function Nn(e, r) {
  if (mr && Buffer.isBuffer(e)) {
    if (r && Wi) {
      if (e[0] == 255 && e[1] == 254) return Na(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Na(Il(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Na(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Na(new TextDecoder("utf-16be").decode(e.slice(2)));
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
function ra(e) {
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
var Cd = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, Id = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, Dd = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, Od = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function Nd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function Rd(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var Pd = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Vi(e) {
  if (Dd.test(e)) return e.indexOf("Z") == -1 ? h0(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(Cd);
  if (a) return Nd(a);
  if (a = t.match(Id), a) return Rd(a);
  if (a = t.match(Hl), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(Od && e.indexOf("UTC") == -1 ? e + " UTC" : e), i = /* @__PURE__ */ new Date(NaN), s = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) return i;
  if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), r.length > 3 && Pd.indexOf(r) == -1) return i;
  } else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return i;
  return s < 0 || s > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? i : n;
}
var Bd = (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(t, a, n) {
    if (e || typeof a == "string") return t.split(a);
    for (var i = t.split(a), s = [i[0]], f = 1; f < i.length; ++f) s.push(n), s.push(i[f]);
    return s;
  };
})();
function Rn(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function h0(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function ro(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function to(e, r, t) {
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
var Ld = { " ": 1, "	": 1, "\r": 1, "\n": 1, ">": 1 };
function bn(e, r) {
  for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !Ld[e.charAt(t + a)]; ) t = e.indexOf("<" + r, t + 1);
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
})(), Vl = /* @__PURE__ */ (function() {
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
})(), Md = /* @__PURE__ */ (function() {
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
})(), Ud = /* @__PURE__ */ (function() {
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
function Xl(e) {
  return e ? e.content && e.type ? Nn(e.content, true) : e.data ? Fi(e.data) : e.asNodeBuffer && mr ? Fi(e.asNodeBuffer().toString("binary")) : e.asBinary ? Fi(e.asBinary()) : e._data && e._data.getContent ? Fi(Nn(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Kl(e) {
  if (!e) return null;
  if (e.data) return uc(e.data);
  if (e.asNodeBuffer && mr) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? uc(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function Wd(e) {
  return e && e.name.slice(-4) === ".bin" ? Kl(e) : Xl(e);
}
function oa(e, r) {
  for (var t = e.FullPaths || Gr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function ao(e, r) {
  var t = oa(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function ft(e, r, t) {
  if (!t) return Wd(ao(e, r));
  if (!r) return null;
  try {
    return ft(e, r);
  } catch {
    return null;
  }
}
function jt(e, r, t) {
  if (!t) return Xl(ao(e, r));
  if (!r) return null;
  try {
    return jt(e, r);
  } catch {
    return null;
  }
}
function Hd(e, r, t) {
  return Kl(ao(e, r));
}
function Tc(e) {
  for (var r = e.FullPaths || Gr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function hr(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return mr ? a = Ba(t) : a = q1(t), sr.utils.cfb_add(e, r, a);
    }
    sr.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function no() {
  return sr.utils.cfb_new();
}
function jl(e, r) {
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
function Qn(e, r) {
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
`, Gl = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, Sc = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, Vd = /<[^<>]*>/g, Et = at.match(Sc) ? Sc : Vd, Xd = /<\w*:/, Kd = /<(\/?)\w+:/;
function Ye(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(Gl), f = 0, o = "", l = 0, h = "", v = "", d = 1;
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
function jd(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (n === e.length) return a;
  var s = e.match(Gl), f = "", o = 0, l = "", h = "", v = 1;
  if (s) for (o = 0; o != s.length; ++o) {
    for (h = s[o].slice(1), i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i) ;
    for (l = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
    v = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(i + 1 + v, h.length - v), l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), a[l] = f, a[l.toLowerCase()] = f;
  }
  return a;
}
function xa(e) {
  return e.replace(Kd, "<$1");
}
var zl = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, io = l0(zl), Ar = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, o) {
      return zl[f] || String.fromCharCode(parseInt(o, f.indexOf("x") > -1 ? 16 : 10)) || f;
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
})(), so = /[&<>'"]/g, Gd = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function vr(e) {
  var r = e + "";
  return r.replace(so, function(t) {
    return io[t];
  }).replace(Gd, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function bc(e) {
  return vr(e).replace(/ /g, "_x0020_");
}
var $l = /[\u0000-\u001f]/g;
function Ci(e) {
  var r = e + "";
  return r.replace(so, function(t) {
    return io[t];
  }).replace(/\n/g, "<br/>").replace($l, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function zd(e) {
  var r = e + "";
  return r.replace(so, function(t) {
    return io[t];
  }).replace($l, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var Fc = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function r(t, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, r);
  };
})();
function $d(e) {
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
function Ac(e) {
  var r = ln(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function Cc(e) {
  return Ba(e, "binary").toString("utf8");
}
var Os = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Br = mr && (Cc(Os) == tf(Os) && Cc || Ac(Os) == tf(Os) && Ac) || tf, Na = mr ? function(e) {
  return Ba(e, "utf8").toString("binary");
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
}, ql = (function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
})(), qd = /<\/?(?:vt:)?variant>/g, Yd = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function Ic(e, r) {
  var t = Ye(e), a = Vl(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(qd, "").match(Yd);
    s && n.push({ v: Br(s[2]), t: s[1] });
  }), n;
}
var Yl = /(^\s|\s$|\n)/;
function kt(e, r) {
  return "<" + e + (r.match(Yl) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function Xi(e) {
  return Gr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function Ae(e, r, t) {
  return "<" + e + (t != null ? Xi(t) : "") + (r != null ? (r.match(Yl) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function Df(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (t) {
    if (r) throw t;
  }
  return "";
}
function Zd(e, r) {
  switch (typeof e) {
    case "string":
      var t = Ae("vt:lpwstr", vr(e));
      return t = t.replace(/&quot;/g, "_x0022_"), t;
    case "number":
      return Ae((e | 0) == e ? "vt:i4" : "vt:r8", vr(String(e)));
    case "boolean":
      return Ae("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return Ae("vt:filetime", Df(e));
  throw new Error("Unable to serialize " + e);
}
function d0(e) {
  if (mr && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Br(Ra(Jf(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ot = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, ut = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" }, Mn = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"], Qt = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
function Jd(e, r) {
  for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15), n = e[r + 6] & 15, i = 5; i >= 0; --i) n = n * 256 + e[r + i];
  return a == 2047 ? n == 0 ? t * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
}
function Qd(e, r, t) {
  var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -r : r;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(r) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
  e[t + 6] = (n & 15) << 4 | i & 15, e[t + 7] = n >> 4 | a;
}
var Dc = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, Oc = mr ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Ba(r);
  })) : Dc(e);
} : Dc, Nc = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Ka(e, n)));
  return a.join("").replace($t, "");
}, fo = mr ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !Wi ? Nc(e, r, t) : e.toString("utf16le", r, t).replace($t, "");
} : Nc, Rc = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Zl = mr ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Rc(e, r, t);
} : Rc, Pc = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(Jn(e, n)));
  return a.join("");
}, is = mr ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Pc(r, t, a);
} : Pc, Jl = function(e, r) {
  var t = ea(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, Ql = Jl, eu = function(e, r) {
  var t = ea(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, ru = eu, tu = function(e, r) {
  var t = 2 * ea(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t - 1) : "";
}, au = tu, nu = function(r, t) {
  var a = ea(r, t);
  return a > 0 ? fo(r, t + 4, t + 4 + a) : "";
}, iu = nu, su = function(e, r) {
  var t = ea(e, r);
  return t > 0 ? is(e, r + 4, r + 4 + t) : "";
}, fu = su, ou = function(e, r) {
  return Jd(e, r);
}, t0 = ou, oo = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
mr && (Ql = function(r, t) {
  if (!Buffer.isBuffer(r)) return Jl(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, ru = function(r, t) {
  if (!Buffer.isBuffer(r)) return eu(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, au = function(r, t) {
  if (!Buffer.isBuffer(r) || !Wi) return tu(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, iu = function(r, t) {
  if (!Buffer.isBuffer(r) || !Wi) return nu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, fu = function(r, t) {
  if (!Buffer.isBuffer(r)) return su(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, t0 = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : ou(r, t);
}, oo = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
var Jn = function(e, r) {
  return e[r];
}, Ka = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, ex = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, ea = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, En = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, rx = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function Ii(e, r) {
  var t = "", a, n, i = [], s, f, o, l;
  switch (r) {
    case "dbcs":
      if (l = this.l, mr && Buffer.isBuffer(this) && Wi) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (o = 0; o < e; ++o) t += String.fromCharCode(Ka(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      t = is(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = fo(this, this.l, this.l + e);
      break;
    case "wstr":
      return Ii.call(this, e, "dbcs");
    case "lpstr-ansi":
      t = Ql(this, this.l), e = 4 + ea(this, this.l);
      break;
    case "lpstr-cp":
      t = ru(this, this.l), e = 4 + ea(this, this.l);
      break;
    case "lpwstr":
      t = au(this, this.l), e = 4 + 2 * ea(this, this.l);
      break;
    case "lpp4":
      e = 4 + ea(this, this.l), t = iu(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + ea(this, this.l), t = fu(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = Jn(this, this.l + e++)) !== 0; ) i.push(Ds(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Ka(this, this.l + e)) !== 0; ) i.push(Ds(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", l = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) return s = Jn(this, l), this.l = l + 1, f = Ii.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds(Ka(this, l))), l += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", l = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(l) !== -1) return s = Jn(this, l), this.l = l + 1, f = Ii.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ds(Jn(this, l))), l += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Jn(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? ex : Ka)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? En : rx)(this, this.l), this.l += 4, a) : (n = ea(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f") return e == 8 ? n = t0(this, this.l) : n = t0([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Zl(this, this.l, e);
          break;
      }
  }
  return this.l += e, t;
}
var tx = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, ax = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, nx = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255;
};
function ix(e, r, t) {
  var a = 0, n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) nx(this, r.charCodeAt(n), this.l + 2 * n);
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
      a = 4, tx(this, r, this.l);
      break;
    case 8:
      if (a = 8, t === "f") {
        Qd(this, r, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      a = 4, ax(this, r, this.l);
      break;
  }
  return this.l += a, this;
}
function cu(e, r) {
  var t = Zl(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function lt(e, r) {
  e.l = r, e.read_shift = Ii, e.chk = cu, e.write_shift = ix;
}
function Wt(e, r) {
  e.l += r;
}
function ce(e) {
  var r = ln(e);
  return lt(r, 0), r;
}
function Za(e, r, t) {
  if (e) {
    var a, n, i;
    lt(e, e.l || 0);
    for (var s = e.length, f = 0, o = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var l = Ji[f] || Ji[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      o = e.l + i;
      var h = l.f && l.f(e, i, t);
      if (e.l = o, r(h, l, f)) return;
    }
  }
}
function Mt() {
  var e = [], r = mr ? 16384 : 2048;
  mr && ce(r).copy;
  var t = function(h) {
    var v = ce(h);
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
function me(e, r, t, a) {
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
    a > 0 && oo(t) && e.push(t);
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
function Bc(e, r, t) {
  var a = Vr(e);
  return a.s = Di(a.s, r.s, t), a.e = Di(a.e, r.s, t), a;
}
function Oi(e, r) {
  if (e.cRel && e.c < 0) for (e = Vr(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Vr(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = yr(e);
  return !e.cRel && e.cRel != null && (t = ox(t)), !e.rRel && e.rRel != null && (t = sx(t)), t;
}
function af(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + gr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + gr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Fr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Fr(e.e.r) : Oi(e.s, r.biff) + ":" + Oi(e.e, r.biff);
}
function co(e) {
  return parseInt(fx(e), 10) - 1;
}
function Fr(e) {
  return "" + (e + 1);
}
function sx(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function fx(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function lo(e) {
  for (var r = cx(e), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
  return t - 1;
}
function gr(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
  return r;
}
function ox(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function cx(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function lx(e) {
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
function Lc(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = aa(e.z, t ? Yr(r) : r);
  } catch {
  }
  try {
    return e.w = aa((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Yr(r) : r);
  } catch {
    return "" + r;
  }
}
function qa(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? dt[e.v] || e.v : r == null ? Lc(e, e.v) : Lc(e, r));
}
function pn(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function ux(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function lu(e, r, t) {
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
    var w = s + x;
    n && (i["!data"][w] || (i["!data"][w] = []), v = i["!data"][w]);
    for (var y = r[x], m = 0; m != y.length; ++m) if (!(typeof y[m] > "u")) {
      var g = { v: y[m], t: "" }, S = f + m;
      if (l.s.r > w && (l.s.r = w), l.s.c > S && (l.s.c = S), l.e.r < w && (l.e.r = w), l.e.c < S && (l.e.c = S), d = true, y[m] && typeof y[m] == "object" && !Array.isArray(y[m]) && !(y[m] instanceof Date)) g = y[m];
      else if (Array.isArray(g.v) && (g.f = y[m][1], g.v = g.v[0]), g.v === null) if (g.f) g.t = "n";
      else if (a.nullError) g.t = "e", g.v = 0;
      else if (a.sheetStubs) g.t = "z";
      else continue;
      else typeof g.v == "number" ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || ir[14], a.UTC || (g.v = h0(g.v)), a.cellDates ? (g.t = "d", g.w = aa(g.z, Yr(g.v, a.date1904))) : (g.t = "n", g.v = Yr(g.v, a.date1904), g.w = aa(g.z, g.v))) : g.t = "s";
      if (n) v[S] && v[S].z && (g.z = v[S].z), v[S] = g;
      else {
        var E = gr(S) + (w + 1);
        i[E] && i[E].z && (g.z = i[E].z), i[E] = g;
      }
    }
  }
  return d && l.s.c < 104e5 && (i["!ref"] = xr(l)), i;
}
function li(e, r) {
  return lu(null, e, r);
}
function hx(e) {
  return e.read_shift(4, "i");
}
function wa(e, r) {
  return r || (r = ce(4)), r.write_shift(4, e), r;
}
function Ut(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function ht(e, r) {
  var t = false;
  return r == null && (t = true, r = ce(4 + 2 * e.length)), r.write_shift(4, e.length), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
function dx(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function xx(e, r) {
  return r || (r = ce(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function uo(e, r) {
  var t = e.l, a = e.read_shift(1), n = Ut(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), o = 0; o != f; ++o) i.push(dx(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function px(e, r) {
  var t = false;
  return r == null && (t = true, r = ce(15 + 4 * e.t.length)), r.write_shift(1, 0), ht(e.t, r), t ? r.slice(0, r.l) : r;
}
var vx = uo;
function mx(e, r) {
  var t = false;
  return r == null && (t = true, r = ce(23 + 4 * e.t.length)), r.write_shift(1, 1), ht(e.t, r), r.write_shift(4, 1), xx({}, r), t ? r.slice(0, r.l) : r;
}
function pa(e) {
  var r = e.read_shift(4), t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: r, iStyleRef: t };
}
function Un(e, r) {
  return r == null && (r = ce(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
function Wn(e) {
  var r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: r };
}
function Hn(e, r) {
  return r == null && (r = ce(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
var gx = Ut, uu = ht;
function x0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function Gi(e, r) {
  var t = false;
  return r == null && (t = true, r = ce(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var _x = Ut, Of = x0, ho = Gi;
function p0(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? t0([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : En(r, 0) >> 2;
  return t ? n / 100 : n;
}
function hu(e, r) {
  r == null && (r = ce(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function du(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function wx(e, r) {
  return r || (r = ce(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var Vn = du, ui = wx;
function Bt(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Pn(e, r) {
  return (r || ce(8)).write_shift(8, e, "f");
}
function yx(e) {
  var r = {}, t = e.read_shift(1), a = t >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), o = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var l = Fn[n];
      l && (r.rgb = $i(l));
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
  if (r || (r = ce(8)), !e || e.auto) return r.write_shift(4, 0), r.write_shift(4, 0), r;
  e.index != null ? (r.write_shift(1, 2), r.write_shift(1, e.index)) : e.theme != null ? (r.write_shift(1, 6), r.write_shift(1, e.theme)) : (r.write_shift(1, 5), r.write_shift(1, 0));
  var t = e.tint || 0;
  if (t > 0 ? t *= 32767 : t < 0 && (t *= 32768), r.write_shift(2, t), !e.rgb || e.theme != null) r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  else {
    var a = e.rgb || "FFFFFF";
    typeof a == "number" && (a = ("000000" + a.toString(16)).slice(-6)), r.write_shift(1, parseInt(a.slice(0, 2), 16)), r.write_shift(1, parseInt(a.slice(2, 4), 16)), r.write_shift(1, parseInt(a.slice(4, 6), 16)), r.write_shift(1, 255);
  }
  return r;
}
function kx(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = { fBold: r & 1, fItalic: r & 2, fUnderline: r & 4, fStrikeout: r & 8, fOutline: r & 16, fShadow: r & 32, fCondense: r & 64, fExtend: r & 128 };
  return t;
}
function Ex(e, r) {
  r || (r = ce(2));
  var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
function xu(e, r) {
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
function Tx(e) {
  return xu(e, 1);
}
function Sx(e) {
  return xu(e, 2);
}
var xo = 2, zt = 3, Ns = 11, Mc = 12, n0 = 19, Rs = 64, bx = 65, Fx = 71, Ax = 4108, Cx = 4126, mt = 80, pu = 81, Ix = [mt, pu], Nf = { 1: { n: "CodePage", t: xo }, 2: { n: "Category", t: mt }, 3: { n: "PresentationFormat", t: mt }, 4: { n: "ByteCount", t: zt }, 5: { n: "LineCount", t: zt }, 6: { n: "ParagraphCount", t: zt }, 7: { n: "SlideCount", t: zt }, 8: { n: "NoteCount", t: zt }, 9: { n: "HiddenCount", t: zt }, 10: { n: "MultimediaClipCount", t: zt }, 11: { n: "ScaleCrop", t: Ns }, 12: { n: "HeadingPairs", t: Ax }, 13: { n: "TitlesOfParts", t: Cx }, 14: { n: "Manager", t: mt }, 15: { n: "Company", t: mt }, 16: { n: "LinksUpToDate", t: Ns }, 17: { n: "CharacterCount", t: zt }, 19: { n: "SharedDoc", t: Ns }, 22: { n: "HyperlinksChanged", t: Ns }, 23: { n: "AppVersion", t: zt, p: "version" }, 24: { n: "DigSig", t: bx }, 26: { n: "ContentType", t: mt }, 27: { n: "ContentStatus", t: mt }, 28: { n: "Language", t: mt }, 29: { n: "Version", t: mt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Rf = { 1: { n: "CodePage", t: xo }, 2: { n: "Title", t: mt }, 3: { n: "Subject", t: mt }, 4: { n: "Author", t: mt }, 5: { n: "Keywords", t: mt }, 6: { n: "Comments", t: mt }, 7: { n: "Template", t: mt }, 8: { n: "LastAuthor", t: mt }, 9: { n: "RevNumber", t: mt }, 10: { n: "EditTime", t: Rs }, 11: { n: "LastPrinted", t: Rs }, 12: { n: "CreatedDate", t: Rs }, 13: { n: "ModifiedDate", t: Rs }, 14: { n: "PageCount", t: zt }, 15: { n: "WordCount", t: zt }, 16: { n: "CharCount", t: zt }, 17: { n: "Thumbnail", t: Fx }, 18: { n: "Application", t: mt }, 19: { n: "DocSecurity", t: zt }, 255: {}, 2147483648: { n: "Locale", t: n0 }, 2147483651: { n: "Behavior", t: n0 }, 1919054434: {} }, Uc = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, Dx = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function Ox(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var Nx = Ox([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Fn = Vr(Nx), dt = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, _t = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, po = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"], Pf = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" }, Ps = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
function vo() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function Rx(e) {
  var r = vo();
  if (!e || !e.match) return r;
  var t = {};
  if ((e.match(Et) || []).forEach(function(a) {
    var n = Ye(a);
    switch (n[0].replace(Xd, "<")) {
      case "<?xml":
        break;
      case "<Types":
        r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        t[n.Extension.toLowerCase()] = n.ContentType;
        break;
      case "<Override":
        r[Pf[n.ContentType]] !== void 0 && r[Pf[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== ut.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function vu(e, r, t) {
  var a = Ed(Pf), n = [], i;
  n[n.length] = at, n[n.length] = Ae("Types", null, { xmlns: ut.CT, "xmlns:xsd": ut.xsd, "xmlns:xsi": ut.xsi }), n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(l) {
    return Ae("Default", null, { Extension: l[0], ContentType: l[1] });
  }));
  var s = function(l) {
    e[l] && e[l].length > 0 && (i = e[l][0], n[n.length] = Ae("Override", null, { PartName: (i[0] == "/" ? "" : "/") + i, ContentType: Ps[l][r.bookType] || Ps[l].xlsx }));
  }, f = function(l) {
    (e[l] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: Ps[l][r.bookType] || Ps[l].xlsx });
    });
  }, o = function(l) {
    (e[l] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: a[l][0] });
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
      var f = i.TargetMode === "External" ? i.Target : Qn(i.Target, r);
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
var Px = "application/vnd.oasis.opendocument.spreadsheet";
function Bx(e, r) {
  for (var t = d0(e), a, n; a = ot.exec(t); ) switch (a[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (n = Ye(a[0], false), n.path == "/" && n.type !== Px) throw new Error("This OpenDocument is not a spreadsheet");
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
function Lx(e) {
  var r = [at];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t) r.push('  <manifest:file-entry manifest:full-path="' + e[t][0] + '" manifest:media-type="' + e[t][1] + `"/>
`);
  return r.push("</manifest:manifest>"), r.join("");
}
function Wc(e, r, t) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function Mx(e, r) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function Ux(e) {
  var r = [at];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t) r.push(Wc(e[t][0], e[t][1])), r.push(Mx("", e[t][0]));
  return r.push(Wc("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function mu(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Ys.version + "</meta:generator></office:meta></office:document-meta>";
}
var za = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function gu(e) {
  var r = {};
  e = Br(e);
  for (var t = 0; t < za.length; ++t) {
    var a = za[t], n = bn(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = Ar(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = $r(r[a[1]]));
  }
  return r;
}
function nf(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = vr(r), a[a.length] = t ? Ae(e, r, t) : kt(e, r));
}
function _u(e, r) {
  var t = r || {}, a = [at, Ae("cp:coreProperties", null, { "xmlns:cp": ut.CORE_PROPS, "xmlns:dc": ut.dc, "xmlns:dcterms": ut.dcterms, "xmlns:dcmitype": ut.dcmitype, "xmlns:xsi": ut.xsi })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && nf("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Df(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && nf("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Df(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != za.length; ++i) {
    var s = za[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === true ? f = "1" : f === false ? f = "0" : typeof f == "number" && (f = String(f)), f != null && nf(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var An = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]], wu = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function yu(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = Ic(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(h) {
    return { v: h };
  }));
  var s = typeof r == "string" ? Ic(r, a).map(function(h) {
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
function Wx(e, r, t) {
  var a = {};
  return r || (r = {}), e = Br(e), An.forEach(function(n) {
    var i = (gt(e, n[0]) || [])[1];
    switch (n[2]) {
      case "string":
        i && (r[n[1]] = Ar(i));
        break;
      case "bool":
        r[n[1]] = i === "true";
        break;
      case "raw":
        var s = bn(e, n[0]);
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && yu(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function ku(e) {
  var r = [], t = Ae;
  return e || (e = {}), e.Application = "SheetJS", r[r.length] = at, r[r.length] = Ae("Properties", null, { xmlns: ut.EXT_PROPS, "xmlns:vt": ut.vt }), An.forEach(function(a) {
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
var Hx = /<[^<>]+>[^<]*/g;
function Vx(e, r) {
  var t = {}, a = "", n = e.match(Hx);
  if (n) for (var i = 0; i != n.length; ++i) {
    var s = n[i], f = Ye(s);
    switch (xa(f[0])) {
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
function Eu(e) {
  var r = [at, Ae("Properties", null, { xmlns: ut.CUST_PROPS, "xmlns:vt": ut.vt })];
  if (!e) return r.join("");
  var t = 1;
  return Gr(e).forEach(function(n) {
    ++t, r[r.length] = Ae("property", Zd(e[n]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t, name: vr(n) });
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var Bf = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, sf;
function Xx(e, r, t) {
  sf || (sf = l0(Bf)), r = sf[r] || r, e[r] = t;
}
function Kx(e, r) {
  var t = [];
  return Gr(Bf).map(function(a) {
    for (var n = 0; n < za.length; ++n) if (za[n][1] == a) return za[n];
    for (n = 0; n < An.length; ++n) if (An[n][1] == a) return An[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      a[2] === "date" && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), typeof n == "number" ? n = String(n) : n === true || n === false ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(kt(Bf[a[1]] || a[1], n));
    }
  }), Ae("DocumentProperties", t.join(""), { xmlns: Qt.o });
}
function jx(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && Gr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < za.length; ++s) if (i == za[s][1]) return;
      for (s = 0; s < An.length; ++s) if (i == An[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], o = "string";
      typeof f == "number" ? (o = "float", f = String(f)) : f === true || f === false ? (o = "boolean", f = f ? "1" : "0") : f = String(f), n.push(Ae(bc(i), f, { "dt:dt": o }));
    }
  }), r && Gr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === true || s === false ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(Ae(bc(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Qt.o + '">' + n.join("") + "</" + a + ">";
}
function mo(e) {
  var r = e.read_shift(4), t = e.read_shift(4);
  return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Gx(e) {
  var r = typeof e == "string" ? new Date(Date.parse(e)) : e, t = r.getTime() / 1e3 + 11644473600, a = t % Math.pow(2, 32), n = (t - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = ce(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function zx(e, r, t) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (t) for (; e.l - a & 3; ) ++e.l;
  return n;
}
function $x(e, r, t) {
  var a = e.read_shift(0, "lpwstr");
  return a;
}
function Tu(e, r, t) {
  return r === 31 ? $x(e) : zx(e, r, t);
}
function Ri(e, r, t) {
  return Tu(e, r, t === false ? 0 : 4);
}
function qx(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return Tu(e, r, 0);
}
function Yx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace($t, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function Zx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace($t, "");
  return t;
}
function Jx(e) {
  var r = e.l, t = i0(e, pu);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = i0(e, zt);
  return [t, a];
}
function Qx(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(Jx(e));
  return t;
}
function Hc(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace($t, "").replace(Ai, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function Su(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function ep(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function i0(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== Mc && a !== r && Ix.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126)) throw new Error("Expected type " + r + " saw " + a);
  switch (r === Mc ? a : r) {
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
      return mo(e);
    case 65:
      return Su(e);
    case 71:
      return ep(e);
    case 80:
      return Ri(e, a, !i.raw).replace($t, "");
    case 81:
      return qx(e, a).replace($t, "");
    case 4108:
      return Qx(e);
    case 4126:
    case 4127:
      return a == 4127 ? Yx(e) : Zx(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Vc(e, r) {
  var t = ce(4), a = ce(4);
  switch (t.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      a.write_shift(-4, r);
      break;
    case 5:
      a = ce(8), a.write_shift(8, r, "f");
      break;
    case 11:
      a.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      a = Gx(r);
      break;
    case 31:
    case 80:
      for (a = ce(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)), a.write_shift(4, r.length + 1), a.write_shift(0, r, "dbcs"); a.l != a.length; ) a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
  }
  return rt([t, a]);
}
function Xc(e, r) {
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
      var w = r[i[s][0]];
      if (d[w.n] = i0(e, w.t, { raw: true }), w.p === "version" && (d[w.n] = String(d[w.n] >> 16) + "." + ("0000" + String(d[w.n] & 65535)).slice(-4)), w.n == "CodePage") switch (d[w.n]) {
        case 0:
          d[w.n] = 1252;
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
          ga(f = d[w.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + d[w.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = d.CodePage = i0(e, xo), ga(f), o !== -1) {
        var y = e.l;
        e.l = i[o][1], l = Hc(e, f), e.l = y;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        o = s, e.l = i[s + 1][1];
        continue;
      }
      l = Hc(e, f);
    } else {
      var m = l[i[s][0]], g;
      switch (e[e.l]) {
        case 65:
          e.l += 4, g = Su(e);
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
          e.l += 4, g = $r(mo(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      d[m] = g;
    }
  }
  return e.l = t + a, d;
}
var bu = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function rp(e) {
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
function Kc(e, r, t) {
  var a = ce(8), n = [], i = [], s = 8, f = 0, o = ce(8), l = ce(8);
  if (o.write_shift(4, 2), o.write_shift(4, 1200), l.write_shift(4, 1), i.push(o), n.push(l), s += 8 + o.length, !r) {
    l = ce(8), l.write_shift(4, 0), n.unshift(l);
    var h = [ce(4)];
    for (h[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (o = ce(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), o.write_shift(4, f + 2), o.write_shift(4, v.length + 1), o.write_shift(0, v, "dbcs"); o.l != o.length; ) o.write_shift(1, 0);
      h.push(o);
    }
    o = rt(h), i.unshift(o), s += 8 + o.length;
  }
  for (f = 0; f < e.length; ++f) if (!(r && !r[e[f][0]]) && !(bu.indexOf(e[f][0]) > -1 || wu.indexOf(e[f][0]) > -1) && e[f][1] != null) {
    var d = e[f][1], x = 0;
    if (r) {
      x = +r[e[f][0]];
      var w = t[x];
      if (w.p == "version" && typeof d == "string") {
        var y = d.split(".");
        d = (+y[0] << 16) + (+y[1] || 0);
      }
      o = Vc(w.t, d);
    } else {
      var m = rp(d);
      m == -1 && (m = 31, d = String(d)), o = Vc(m, d);
    }
    i.push(o), l = ce(8), l.write_shift(4, r ? x : 2 + f), n.push(l), s += 8 + o.length;
  }
  var g = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f) n[f].write_shift(4, g), g += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), rt([a].concat(n).concat(i));
}
function jc(e, r, t) {
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
  var v = Xc(a, r), d = { SystemIdentifier: l };
  for (var x in v) d[x] = v[x];
  if (d.FMTID = i, n === 1) return d;
  if (o - a.l == 2 && (a.l += 2), a.l !== o) throw new Error("Length mismatch 2: " + a.l + " !== " + o);
  var w;
  try {
    w = Xc(a, null);
  } catch {
  }
  for (x in w) d[x] = w[x];
  return d.FMTID = [i, s], d;
}
function Gc(e, r, t, a, n, i) {
  var s = ce(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, sr.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var o = Kc(e, t, a);
  if (f.push(o), n) {
    var l = Kc(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + o.length), f.push(l);
  }
  return rt(f);
}
function fn(e, r) {
  return e.read_shift(r), null;
}
function tp(e, r) {
  r || (r = ce(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function ap(e, r, t) {
  for (var a = [], n = e.l + r; e.l < n; ) a.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return a;
}
function et(e, r) {
  return e.read_shift(r) === 1;
}
function Ot(e, r) {
  return r || (r = ce(2)), r.write_shift(2, +!!e), r;
}
function Zr(e) {
  return e.read_shift(2, "u");
}
function la(e, r) {
  return r || (r = ce(2)), r.write_shift(2, e), r;
}
function Fu(e, r) {
  return ap(e, r, Zr);
}
function Au(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function Cu(e, r, t) {
  return t || (t = ce(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function si(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = ha;
  if (t && t.biff >= 8 && (ha = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return ha = i, f;
}
function np(e) {
  var r = ha;
  ha = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, o, l = {};
  i && (f = e.read_shift(2)), n && (o = e.read_shift(4));
  var h = s == 2 ? "dbcs-cont" : "sbcs-cont", v = t === 0 ? "" : e.read_shift(t, h);
  return i && (e.l += 4 * f), n && (e.l += o), l.t = v, i || (l.raw = "<t>" + l.t + "</t>", l.r = l.t), ha = r, l;
}
function ip(e) {
  var r = e.t || "", t = ce(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var a = ce(2 * r.length);
  a.write_shift(2 * r.length, r, "utf16le");
  var n = [t, a];
  return rt(n);
}
function Bn(e, r, t) {
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
  return a === 0 ? (e.l++, "") : Bn(e, a, t);
}
function Xn(e, r, t) {
  if (t.biff > 5) return ss(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Iu(e, r, t) {
  return t || (t = ce(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), t.write_shift(31, e, "utf16le"), t;
}
function sp(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return e.l += 2, [r, t];
}
function fp(e) {
  var r = e.read_shift(4), t = e.l, a = false;
  r > 24 && (e.l += r - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = true), e.l = t);
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace($t, "");
  return a && (e.l += 24), n;
}
function op(e) {
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
function cp(e, r) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return fp(e);
    case "0303000000000000c000000000000046":
      return op(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function Bs(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace($t, "") : "";
  return t;
}
function zc(e, r) {
  r || (r = ce(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function lp(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, o, l = "", h, v;
  n & 16 && (i = Bs(e, t - e.l)), n & 128 && (s = Bs(e, t - e.l)), (n & 257) === 257 && (f = Bs(e, t - e.l)), (n & 257) === 1 && (o = cp(e, t - e.l)), n & 8 && (l = Bs(e, t - e.l)), n & 32 && (h = e.read_shift(16)), n & 64 && (v = mo(e)), e.l = t;
  var d = s || f || o || "";
  d && l && (d += "#" + l), d || (d = "#" + l), n & 2 && d.charAt(0) == "/" && d.charAt(1) != "/" && (d = "file://" + d);
  var x = { Target: d };
  return h && (x.guid = h), v && (x.time = v), i && (x.Tooltip = i), x;
}
function up(e) {
  var r = ce(512), t = 0, a = e.Target;
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
  if (i == 28) a = a.slice(1), zc(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && zc(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var o = 0; a.slice(o * 3, o * 3 + 3) == "../" || a.slice(o * 3, o * 3 + 3) == "..\\"; ) ++o;
    for (r.write_shift(2, o), r.write_shift(4, a.length - 3 * o + 1), t = 0; t < a.length - 3 * o; ++t) r.write_shift(1, a.charCodeAt(t + 3 * o) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function Du(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function Ou(e, r) {
  var t = Du(e);
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
function Ln(e, r, t, a) {
  return a || (a = ce(6)), a.write_shift(2, e), a.write_shift(2, r), a.write_shift(2, t || 0), a;
}
function hp(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return e.l += 8, { type: r, flags: t };
}
function dp(e, r, t) {
  return r === 0 ? "" : Xn(e, r, t);
}
function xp(e, r, t) {
  var a = t.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function Nu(e) {
  var r = e.read_shift(2), t = p0(e);
  return [r, t];
}
function pp(e, r, t) {
  e.l += 4, r -= 4;
  var a = e.l + r, n = si(e, r, t), i = e.read_shift(2);
  if (a -= e.l, i !== a) throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function v0(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
function Ru(e, r) {
  return r || (r = ce(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function Pu(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var vp = Pu;
function Bu(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function mp(e) {
  var r = {};
  return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
}
function gp(e) {
  var r = {};
  return e.l += 4, e.cf = e.read_shift(2), r;
}
function Ft(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var _p = { 0: Ft, 4: Ft, 5: Ft, 6: Ft, 7: gp, 8: Ft, 9: Ft, 10: Ft, 11: Ft, 12: Ft, 13: mp, 14: Ft, 15: Ft, 16: Ft, 17: Ft, 18: Ft, 19: Ft, 20: Ft, 21: Bu };
function wp(e, r) {
  for (var t = e.l + r, a = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a[n] = _p[n](e, t - e.l);
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
function go(e, r, t) {
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
  var i = ce(n);
  return i.write_shift(2, a), i.write_shift(2, r), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function yp(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function kp(e, r, t) {
  if (t.enc) return e.l += r, "";
  var a = e.l, n = Xn(e, 0, t);
  return e.read_shift(r + a - e.l), n;
}
function Ep(e, r) {
  var t = !r || r.biff == 8, a = ce(t ? 112 : 54);
  for (a.write_shift(r.biff == 8 ? 2 : 1, 7), t && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (t ? 0 : 536870912)); a.l < a.length; ) a.write_shift(1, t ? 0 : 32);
  return a;
}
function Tp(e, r, t) {
  var a = t && t.biff == 8 || r == 2 ? e.read_shift(2) : (e.l += r, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function Sp(e, r, t) {
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
function bp(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1, a = ce(8 + t * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), r.biff >= 8 && a.write_shift(1, 1), a.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function Fp(e, r) {
  for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < t; ++s) i.push(np(e));
  return i.Count = a, i.Unique = n, i;
}
function Ap(e, r) {
  var t = ce(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n) a[n] = ip(e[n]);
  var i = rt([t].concat(a));
  return i.parts = [t.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function Cp(e, r) {
  var t = {};
  return t.dsst = e.read_shift(2), e.l += r - 2, t;
}
function Ip(e) {
  var r = {};
  r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
  var t = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (r.level = a & 7), a & 32 && (r.hidden = true), a & 64 && (r.hpt = t / 20), r;
}
function Dp(e) {
  var r = hp(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function Op(e) {
  return e.read_shift(2), e.read_shift(4);
}
function $c(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function Np(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), o = e.read_shift(2), l = e.read_shift(2);
  return { Pos: [r, t], Dim: [a, n], Flags: i, CurTab: s, FirstTab: f, Selected: o, TabRatio: l };
}
function Rp() {
  var e = ce(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Pp(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Bp(e) {
  var r = ce(18), t = 1718;
  return e && e.RTL && (t |= 64), r.write_shift(2, t), r.write_shift(4, 0), r.write_shift(4, 64), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
function Lp() {
}
function Mp(e, r, t) {
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
function Up(e, r) {
  var t = e.name || "Arial", a = r && r.biff == 5, n = a ? 15 + t.length : 16 + 2 * t.length, i = ce(n);
  return i.write_shift(2, e.sz * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, t.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le"), i;
}
function Wp(e, r, t) {
  var a = ka(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function Hp(e, r, t, a) {
  var n = ce(10);
  return Ln(e, r, a, n), n.write_shift(4, t), n;
}
function Vp(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = ka(e, r, t), i = ss(e, a - e.l, t);
  return n.val = i, n;
}
function Xp(e, r, t, a, n) {
  var i = !n || n.biff == 8, s = ce(8 + +i + (1 + i) * t.length);
  return Ln(e, r, a, s), s.write_shift(2, t.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * t.length, t, i ? "utf16le" : "sbcs"), s;
}
function Kp(e, r, t) {
  var a = e.read_shift(2), n = Xn(e, 0, t);
  return [a, n];
}
function jp(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = ce(n ? 3 + r.length : 5 + 2 * r.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Gp = Xn;
function zp(e) {
  var r = ce(1 + e.length);
  return r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function $p(e) {
  var r = ce(3 + e.length);
  return r.l += 2, r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function qc(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), o = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c: o } };
}
function qp(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = ce(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Yp(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = Nu(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function Zp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(Nu(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function Jp(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function Qp(e, r, t, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), o = e.read_shift(2);
  return n.patternType = Dx[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = o & 127, n.icvBack = o >> 7 & 127, n.fsxButton = o >> 14 & 1), n;
}
function ev(e, r, t) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, r -= 6, a.data = Qp(e, r, a.fStyle, t), a;
}
function Yc(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = ce(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function rv(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = r.flags & 63, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
}
function tv(e) {
  var r = ce(4);
  return r.l += 2, r.write_shift(1, e.numFmtId), r.l++, r;
}
function Lu(e) {
  var r = ce(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var av = Lu;
function nv(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function iv(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function sv(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if (r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function fv(e) {
  var r = ce(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function ov(e, r, t) {
  var a = ka(e, 6, t), n = Au(e);
  return a.val = n, a.t = n === true || n === false ? "b" : "e", a;
}
function ff(e, r, t, a, n, i) {
  var s = ce(8);
  return Ln(e, r, a, s), Cu(t, i, s), s;
}
function cv(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = ka(e, 6, t), n = Bt(e);
  return a.val = n, a;
}
function lv(e, r, t, a) {
  var n = ce(14);
  return Ln(e, r, a, n), Pn(t, n), n;
}
var Zc = dp;
function uv(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = Bn(e, i), f = []; a > e.l; ) f.push(ss(e));
  return [i, n, s, f];
}
function Jc(e, r, t) {
  var a = e.read_shift(2), n, i = { fBuiltIn: a & 1, fWantAdvise: a >>> 1 & 1, fWantPict: a >>> 2 & 1, fOle: a >>> 3 & 1, fOleLink: a >>> 4 & 1, cf: a >>> 5 & 1023, fIcon: a >>> 15 & 1 };
  return t.sbcch === 14849 && (n = pp(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function Qc(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), o = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), o = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var l = Bn(e, s, t);
  n & 32 && (l = po[l.charCodeAt(0)]);
  var h = a - e.l;
  t && t.biff == 2 && --h;
  var v = a == e.l || f === 0 || !(h > 0) ? [] : S_(e, h, t, f);
  return { chKey: i, Name: l, itab: o, rgce: v };
}
function Mu(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return el(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(xp(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function el(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = si(e, r, t);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function hv(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = Bn(e, a, t), s = Bn(e, n, t);
  return [i, s];
}
function dv(e, r, t) {
  var a = Pu(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [b_(e, r, t), n, a];
}
function rl(e, r, t) {
  var a = vp(e);
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
  return [a, E_(e, r, t)];
}
function xv(e) {
  var r = e.read_shift(4) !== 0, t = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [r, t, a];
}
function pv(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Xn(e, 0, t);
  return [{ r: a, c: n }, f, s, i];
}
function vv(e, r, t) {
  if (t && t.biff < 8) {
    var a = e.read_shift(2), n = e.read_shift(2);
    if (a == 65535 || a == -1) return;
    var i = e.read_shift(2), s = e.read_shift(Math.min(i, 2048), "cpstr");
    return [{ r: a, c: n }, s];
  }
  return pv(e, r, t);
}
function of(e, r, t, a) {
  var n = ce(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function mv(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(v0(e));
  return t;
}
function gv(e) {
  var r = ce(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) Ru(e[t], r);
  return r;
}
function _v(e, r, t) {
  if (t && t.biff < 8) return yv(e, r, t);
  var a = Bu(e), n = wp(e, r - 22, a[1]);
  return { cmo: a, ft: n };
}
var wv = { 8: function(e, r) {
  var t = e.l + r;
  e.l += 10;
  var a = e.read_shift(2);
  e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
  var n = e.read_shift(1);
  return e.l += n, e.l = t, { fmt: a };
} };
function yv(e, r, t) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
  var s = [];
  return s.push((wv[a] || Wt)(e, r, t)), { cmo: [n, a, i], ft: s };
}
function kv(e, r, t) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (t.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = sp(e, 6, t);
    var f = e.read_shift(2);
    e.read_shift(2), Zr(e, 2);
    var o = e.read_shift(2);
    e.l += o;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - a != e.lens[l]) throw new Error("TxO: bad continue record");
      var h = e[e.l], v = Bn(e, e.lens[l + 1] - e.lens[l] - 1);
      if (n += v, n.length >= (h ? f : 2 * f)) break;
    }
    if (n.length !== f && n.length !== f * 2) throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + r, { t: n };
  } catch {
    return e.l = a + r, { t: n };
  }
}
function Ev(e, r) {
  var t = v0(e);
  e.l += 16;
  var a = lp(e, r - 24);
  return [t, a];
}
function Tv(e) {
  var r = ce(24), t = Lr(e[0]);
  r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) r.write_shift(1, parseInt(a[n], 16));
  return rt([r, up(e[1])]);
}
function Sv(e, r) {
  e.read_shift(2);
  var t = v0(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
  return a = a.replace($t, ""), [t, a];
}
function bv(e) {
  var r = e[1].Tooltip, t = ce(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var a = Lr(e[0]);
  t.write_shift(2, a.r), t.write_shift(2, a.r), t.write_shift(2, a.c), t.write_shift(2, a.c);
  for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
  return t.write_shift(2, 0), t;
}
function Fv(e) {
  var r = [0, 0], t;
  return t = e.read_shift(2), r[0] = Uc[t] || t, t = e.read_shift(2), r[1] = Uc[t] || t, r;
}
function Av(e) {
  return e || (e = ce(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Cv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Ou(e));
  return t;
}
function Iv(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Ou(e));
  return t;
}
function Dv(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function Uu(e, r, t) {
  if (!t.cellStyles) return Wt(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), o = e.read_shift(2);
  a == 2 && (e.l += 2);
  var l = { s: n, e: i, w: s, ixfe: f, flags: o };
  return (t.biff >= 5 || !t.biff) && (l.level = o >> 8 & 7), l;
}
function Ov(e, r) {
  var t = ce(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function Nv(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Bt(e), t.footer = Bt(e), e.l += 2), t;
}
function Rv(e, r, t) {
  var a = { area: false };
  if (t.biff != 5) return e.l += r, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = true), a;
}
function Pv(e) {
  for (var r = ce(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
var Bv = ka, Lv = Fu, Mv = ss;
function Uv(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function fs(e, r, t, a, n) {
  return e || (e = ce(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(1, a || 0), e.write_shift(1, n || 0), e.write_shift(1, 0), e;
}
function Wv(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = ka(e, 7, t), n = Xn(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function Hv(e, r, t) {
  var a = ka(e, 7, t), n = Bt(e);
  return a.t = "n", a.val = n, a;
}
function Vv(e, r, t, a, n) {
  var i = ce(15);
  return fs(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function Xv(e, r, t) {
  var a = ka(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function Kv(e, r, t, a, n) {
  var i = ce(9);
  return fs(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function jv(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function Gv(e, r, t) {
  var a = e.l + 7, n = ka(e, 6, t);
  e.l = a;
  var i = Au(e);
  return n.val = i, n.t = i === true || i === false ? "b" : "e", n;
}
function zv(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function $v(e, r, t) {
  var a = e.l + r, n = ka(e, 6, t), i = e.read_shift(2), s = Bn(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function qv(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var Yv = [2, 3, 48, 49, 131, 139, 140, 245], Lf = (function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, r = l0({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function t(f, o) {
    var l = [], h = ln(1);
    switch (o.type) {
      case "base64":
        h = Kt(ta(f));
        break;
      case "binary":
        h = Kt(f);
        break;
      case "buffer":
      case "array":
        h = f;
        break;
    }
    lt(h, 0);
    var v = h.read_shift(1), d = !!(v & 136), x = false, w = false;
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
        w = true;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + v.toString(16));
    }
    var y = 0, m = 521;
    v == 2 && (y = h.read_shift(2)), h.l += 3, v != 2 && (y = h.read_shift(4)), y > 1048576 && (y = 1e6), v != 2 && (m = h.read_shift(2));
    var g = h.read_shift(2);
    o.codepage, v != 2 && (h.l += 16, h.read_shift(1), h[h.l] !== 0 && e[h[h.l]], h.l += 1, h.l += 2), w && (h.l += 36);
    for (var S = [], E = {}, A = Math.min(h.length, v == 2 ? 521 : m - 10 - (x ? 264 : 0)), X = w ? 32 : 11; h.l < A && h[h.l] != 13; ) switch (E = {}, E.name = Ra(h.slice(h.l, h.l + X)).replace(/[\u0000\r\n][\S\s]*$/g, ""), h.l += X, E.type = String.fromCharCode(h.read_shift(1)), v != 2 && !w && (E.offset = h.read_shift(4)), E.len = h.read_shift(1), v == 2 && (E.offset = h.read_shift(2)), E.dec = h.read_shift(1), E.name.length && S.push(E), v != 2 && (h.l += w ? 13 : 14), E.type) {
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
    var j = 0, F = 0;
    for (l[0] = [], F = 0; F != S.length; ++F) l[0][F] = S[F].name;
    for (; y-- > 0; ) {
      if (h[h.l] === 42) {
        h.l += g;
        continue;
      }
      for (++h.l, l[++j] = [], F = 0, F = 0; F != S.length; ++F) {
        var M = h.slice(h.l, h.l + S[F].len);
        h.l += S[F].len, lt(M, 0);
        var U = Ra(M);
        switch (S[F].type) {
          case "C":
            U.trim().length && (l[j][F] = U.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            U.length === 8 ? (l[j][F] = new Date(Date.UTC(+U.slice(0, 4), +U.slice(4, 6) - 1, +U.slice(6, 8), 0, 0, 0, 0)), o && o.UTC || (l[j][F] = Rn(l[j][F]))) : l[j][F] = U;
            break;
          case "F":
            l[j][F] = parseFloat(U.trim());
            break;
          case "+":
          case "I":
            l[j][F] = w ? M.read_shift(-4, "i") ^ 2147483648 : M.read_shift(4, "i");
            break;
          case "L":
            switch (U.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[j][F] = true;
                break;
              case "N":
              case "F":
                l[j][F] = false;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + U + "|");
            }
            break;
          case "M":
            if (!d) throw new Error("DBF Unexpected MEMO for type " + v.toString(16));
            l[j][F] = "##MEMO##" + (w ? parseInt(U.trim(), 10) : M.read_shift(4));
            break;
          case "N":
            U = U.replace(/\u0000/g, "").trim(), U && U != "." && (l[j][F] = +U || 0);
            break;
          case "@":
            l[j][F] = new Date(M.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var B = M.read_shift(4), K = M.read_shift(4);
              if (B == 0 && K == 0) break;
              l[j][F] = new Date((B - 2440588) * 864e5 + K), o && o.UTC || (l[j][F] = Rn(l[j][F]));
            }
            break;
          case "Y":
            l[j][F] = M.read_shift(4, "i") / 1e4 + M.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[j][F] = -M.read_shift(-8, "f");
            break;
          case "B":
            if (x && S[F].len == 8) {
              l[j][F] = M.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            M.l += S[F].len;
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
    var l = o || {}, h = ha;
    if (+l.codepage >= 0 && ga(+l.codepage), l.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = Mt(), d = Vf(f, { header: 1, raw: true, cellDates: true }), x = d[0], w = d.slice(1), y = f["!cols"] || [], m = 0, g = 0, S = 0, E = 1;
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
    var A = Dr(f["!ref"]), X = [], j = [], F = [];
    for (m = 0; m <= A.e.c - A.s.c; ++m) {
      var M = "", U = "", B = 0, K = [];
      for (g = 0; g < w.length; ++g) w[g][m] != null && K.push(w[g][m]);
      if (K.length == 0 || x[m] == null) {
        X[m] = "?";
        continue;
      }
      for (g = 0; g < K.length; ++g) {
        switch (typeof K[g]) {
          case "number":
            U = "B";
            break;
          case "string":
            U = "C";
            break;
          case "boolean":
            U = "L";
            break;
          case "object":
            U = K[g] instanceof Date ? "D" : "C";
            break;
          default:
            U = "C";
        }
        B = Math.max(B, String(K[g]).length), M = M && M != U ? "C" : U;
      }
      B > 250 && (B = 250), U = ((y[m] || {}).DBF || {}).type, U == "C" && y[m].DBF.len > B && (B = y[m].DBF.len), M == "B" && U == "N" && (M = "N", F[m] = y[m].DBF.dec, B = y[m].DBF.len), j[m] = M == "C" || U == "N" ? B : i[M] || 0, E += j[m], X[m] = M;
    }
    var J = v.next(32);
    for (J.write_shift(4, 318902576), J.write_shift(4, w.length), J.write_shift(2, 296 + 32 * S), J.write_shift(2, E), m = 0; m < 4; ++m) J.write_shift(4, 0);
    var ie = +r[ha] || 3;
    for (J.write_shift(4, 0 | ie << 8), e[ie] != +l.codepage && (l.codepage && console.error("DBF Unsupported codepage " + ha + ", using 1252"), ha = 1252), m = 0, g = 0; m < x.length; ++m) if (x[m] != null) {
      var Ie = v.next(32), ve = (x[m].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      Ie.write_shift(1, ve, "sbcs"), Ie.write_shift(1, X[m] == "?" ? "C" : X[m], "sbcs"), Ie.write_shift(4, g), Ie.write_shift(1, j[m] || i[X[m]] || 0), Ie.write_shift(1, F[m] || 0), Ie.write_shift(1, 2), Ie.write_shift(4, 0), Ie.write_shift(1, 0), Ie.write_shift(4, 0), Ie.write_shift(4, 0), g += j[m] || i[X[m]] || 0;
    }
    var Ve = v.next(264);
    for (Ve.write_shift(4, 13), m = 0; m < 65; ++m) Ve.write_shift(4, 0);
    for (m = 0; m < w.length; ++m) {
      var ye = v.next(E);
      for (ye.write_shift(1, 0), g = 0; g < x.length; ++g) if (x[g] != null) switch (X[g]) {
        case "L":
          ye.write_shift(1, w[m][g] == null ? 63 : w[m][g] ? 84 : 70);
          break;
        case "B":
          ye.write_shift(8, w[m][g] || 0, "f");
          break;
        case "N":
          var Be = "0";
          for (typeof w[m][g] == "number" && (Be = w[m][g].toFixed(F[g] || 0)), Be.length > j[g] && (Be = Be.slice(0, j[g])), S = 0; S < j[g] - Be.length; ++S) ye.write_shift(1, 32);
          ye.write_shift(1, Be, "sbcs");
          break;
        case "D":
          w[m][g] ? (ye.write_shift(4, ("0000" + w[m][g].getFullYear()).slice(-4), "sbcs"), ye.write_shift(2, ("00" + (w[m][g].getMonth() + 1)).slice(-2), "sbcs"), ye.write_shift(2, ("00" + w[m][g].getDate()).slice(-2), "sbcs")) : ye.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var Qe = ye.l, de = String(w[m][g] != null ? w[m][g] : "").slice(0, j[g]);
          for (ye.write_shift(1, de, "cpstr"), Qe += j[g] - ye.l, S = 0; S < Qe; ++S) ye.write_shift(1, 32);
          break;
      }
    }
    return ha = h, v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: n, to_sheet: a, from_sheet: s };
})(), Wu = (function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var t = function(x, w) {
    var y = e[w];
    return typeof y == "number" ? hc(y) : y;
  }, a = function(x, w, y) {
    var m = w.charCodeAt(0) - 32 << 4 | y.charCodeAt(0) - 48;
    return m == 59 ? x : hc(m);
  };
  e["|"] = 254;
  var n = function(x) {
    return x.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function i(x, w) {
    switch (w.type) {
      case "base64":
        return s(ta(x), w);
      case "binary":
        return s(x, w);
      case "buffer":
        return s(mr && Buffer.isBuffer(x) ? x.toString("binary") : Ra(x), w);
      case "array":
        return s(Nn(x), w);
    }
    throw new Error("Unrecognized type " + w.type);
  }
  function s(x, w) {
    var y = x.split(/[\n\r]+/), m = -1, g = -1, S = 0, E = 0, A = [], X = [], j = null, F = {}, M = [], U = [], B = [], K = 0, J, ie = { Workbook: { WBProps: {}, Names: [] } };
    for (+w.codepage >= 0 && ga(+w.codepage); S !== y.length; ++S) {
      K = 0;
      var Ie = y[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), ve = Ie.replace(/;;/g, "\0").split(";").map(function(V) {
        return V.replace(/\u0000/g, ";");
      }), Ve = ve[0], ye;
      if (Ie.length > 0) switch (Ve) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          for (E = 1; E < ve.length; ++E) switch (ve[E].charAt(0)) {
            case "V":
              {
                var Be = parseInt(ve[E].slice(1), 10);
                Be >= 1 && Be <= 4 && (ie.Workbook.WBProps.date1904 = true);
              }
              break;
          }
          break;
        case "W":
          break;
        case "P":
          ve[1].charAt(0) === "P" && X.push(Ie.slice(3).replace(/;;/g, ";"));
          break;
        case "NN":
          {
            var Qe = { Sheet: 0 };
            for (E = 1; E < ve.length; ++E) switch (ve[E].charAt(0)) {
              case "N":
                Qe.Name = ve[E].slice(1);
                break;
              case "E":
                Qe.Ref = (w && w.sheet || "Sheet1") + "!" + In(ve[E].slice(1));
                break;
            }
            ie.Workbook.Names.push(Qe);
          }
          break;
        case "C":
          var de = false, fr = false, Me = false, Te = false, ke = -1, Ge = -1, ze = "", Ze = "z", R = "";
          for (E = 1; E < ve.length; ++E) switch (ve[E].charAt(0)) {
            case "A":
              R = ve[E].slice(1);
              break;
            case "X":
              g = parseInt(ve[E].slice(1), 10) - 1, fr = true;
              break;
            case "Y":
              for (m = parseInt(ve[E].slice(1), 10) - 1, fr || (g = 0), J = A.length; J <= m; ++J) A[J] = [];
              break;
            case "K":
              ye = ve[E].slice(1), ye.charAt(0) === '"' ? (ye = ye.slice(1, ye.length - 1), Ze = "s") : ye === "TRUE" || ye === "FALSE" ? (ye = ye === "TRUE", Ze = "b") : ye.charAt(0) == "#" && _t[ye] != null ? (Ze = "e", ye = _t[ye]) : isNaN(ra(ye)) || (ye = ra(ye), Ze = "n", j !== null && da(j) && w.cellDates && (ye = Ga(ie.Workbook.WBProps.date1904 ? ye + 1462 : ye), Ze = typeof ye == "number" ? "n" : "d")), de = true;
              break;
            case "E":
              Te = true, ze = In(ve[E].slice(1), { r: m, c: g });
              break;
            case "S":
              Me = true;
              break;
            case "G":
              break;
            case "R":
              ke = parseInt(ve[E].slice(1), 10) - 1;
              break;
            case "C":
              Ge = parseInt(ve[E].slice(1), 10) - 1;
              break;
            default:
              if (w && w.WTF) throw new Error("SYLK bad record " + Ie);
          }
          if (de && (A[m][g] ? (A[m][g].t = Ze, A[m][g].v = ye) : A[m][g] = { t: Ze, v: ye }, j && (A[m][g].z = j), w.cellText !== false && j && (A[m][g].w = aa(A[m][g].z, A[m][g].v, { date1904: ie.Workbook.WBProps.date1904 })), j = null), Me) {
            if (Te) throw new Error("SYLK shared formula cannot have own formula");
            var W = ke > -1 && A[ke][Ge];
            if (!W || !W[1]) throw new Error("SYLK shared formula cannot find base");
            ze = eh(W[1], { r: m - ke, c: g - Ge });
          }
          ze && (A[m][g] ? A[m][g].f = ze : A[m][g] = { t: "n", f: ze }), R && (A[m][g] || (A[m][g] = { t: "z" }), A[m][g].c = [{ a: "SheetJSYLK", t: R }]);
          break;
        case "F":
          var z = 0;
          for (E = 1; E < ve.length; ++E) switch (ve[E].charAt(0)) {
            case "X":
              g = parseInt(ve[E].slice(1), 10) - 1, ++z;
              break;
            case "Y":
              for (m = parseInt(ve[E].slice(1), 10) - 1, J = A.length; J <= m; ++J) A[J] = [];
              break;
            case "M":
              K = parseInt(ve[E].slice(1), 10) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              j = X[parseInt(ve[E].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (B = ve[E].slice(1).split(" "), J = parseInt(B[0], 10); J <= parseInt(B[1], 10); ++J) K = parseInt(B[2], 10), U[J - 1] = K === 0 ? { hidden: true } : { wch: K };
              break;
            case "C":
              g = parseInt(ve[E].slice(1), 10) - 1, U[g] || (U[g] = {});
              break;
            case "R":
              m = parseInt(ve[E].slice(1), 10) - 1, M[m] || (M[m] = {}), K > 0 ? (M[m].hpt = K, M[m].hpx = oi(K)) : K === 0 && (M[m].hidden = true);
              break;
            default:
              if (w && w.WTF) throw new Error("SYLK bad record " + Ie);
          }
          z < 1 && (j = null);
          break;
        default:
          if (w && w.WTF) throw new Error("SYLK bad record " + Ie);
      }
    }
    return M.length > 0 && (F["!rows"] = M), U.length > 0 && (F["!cols"] = U), U.forEach(function(V) {
      un(V);
    }), w && w.sheetRows && (A = A.slice(0, w.sheetRows)), [A, F, ie];
  }
  function f(x, w) {
    var y = i(x, w), m = y[0], g = y[1], S = y[2], E = Vr(w);
    E.date1904 = (((S || {}).Workbook || {}).WBProps || {}).date1904;
    var A = li(m, E);
    Gr(g).forEach(function(j) {
      A[j] = g[j];
    });
    var X = pn(A, w);
    return Gr(S).forEach(function(j) {
      X[j] = S[j];
    }), X.bookType = "sylk", X;
  }
  function o(x, w, y, m, g, S) {
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
  function l(x, w, y) {
    var m = "C;Y" + (w + 1) + ";X" + (y + 1) + ";A";
    return m += n(x.map(function(g) {
      return g.t;
    }).join("")), m;
  }
  function h(x, w) {
    w.forEach(function(y, m) {
      var g = "F;W" + (m + 1) + " " + (m + 1) + " ";
      y.hidden ? g += "0" : (typeof y.width == "number" && !y.wpx && (y.wpx = qi(y.width)), typeof y.wpx == "number" && !y.wch && (y.wch = Yi(y.wpx)), typeof y.wch == "number" && (g += Math.round(y.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function v(x, w) {
    w.forEach(function(y, m) {
      var g = "F;";
      y.hidden ? g += "M0;" : y.hpt ? g += "M" + 20 * y.hpt + ";" : y.hpx && (g += "M" + 20 * Zi(y.hpx) + ";"), g.length > 2 && x.push(g + "R" + (m + 1));
    });
  }
  function d(x, w, y) {
    w || (w = {}), w._formats = ["General"];
    var m = ["ID;PSheetJS;N;E"], g = [], S = Dr(x["!ref"] || "A1"), E, A = x["!data"] != null, X = `\r
`, j = (((y || {}).Workbook || {}).WBProps || {}).date1904, F = "General";
    m.push("P;PGeneral");
    var M = S.s.r, U = S.s.c, B = [];
    if (x["!ref"]) {
      for (M = S.s.r; M <= S.e.r; ++M) if (!(A && !x["!data"][M])) {
        for (B = [], U = S.s.c; U <= S.e.c; ++U) E = A ? x["!data"][M][U] : x[gr(U) + Fr(M)], !(!E || !E.c) && B.push(l(E.c, M, U));
        B.length && g.push(B.join(X));
      }
    }
    if (x["!ref"]) {
      for (M = S.s.r; M <= S.e.r; ++M) if (!(A && !x["!data"][M])) {
        for (B = [], U = S.s.c; U <= S.e.c; ++U) if (E = A ? x["!data"][M][U] : x[gr(U) + Fr(M)], !(!E || E.v == null && (!E.f || E.F))) {
          if ((E.z || (E.t == "d" ? ir[14] : "General")) != F) {
            var K = w._formats.indexOf(E.z);
            K == -1 && (w._formats.push(E.z), K = w._formats.length - 1, m.push("P;P" + E.z.replace(/;/g, ";;"))), B.push("F;P" + K + ";Y" + (M + 1) + ";X" + (U + 1));
          }
          B.push(o(E, x, M, U, w, j));
        }
        g.push(B.join(X));
      }
    }
    return m.push("F;P0;DG0G8;M255"), x["!cols"] && h(m, x["!cols"]), x["!rows"] && v(m, x["!rows"]), x["!ref"] && m.push("B;Y" + (S.e.r - S.s.r + 1) + ";X" + (S.e.c - S.s.c + 1) + ";D" + [S.s.c, S.s.r, S.e.c, S.e.r].join(" ")), m.push("O;L;D;B" + (j ? ";V4" : "") + ";K47;G100 0.001"), delete w._formats, m.join(X) + X + g.join(X) + X + "E" + X;
  }
  return { to_workbook: f, from_sheet: d };
})(), Hu = /* @__PURE__ */ (function() {
  function e(f, o) {
    switch (o.type) {
      case "base64":
        return r(ta(f), o);
      case "binary":
        return r(f, o);
      case "buffer":
        return r(mr && Buffer.isBuffer(f) ? f.toString("binary") : Ra(f), o);
      case "array":
        return r(Nn(f), o);
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
        var w = l[d].trim().split(","), y = w[0], m = w[1];
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
            g === "TRUE" ? x[h][v] = true : g === "FALSE" ? x[h][v] = false : isNaN(ra(m)) ? isNaN(Vi(m).getDate()) ? x[h][v] = m : (x[h][v] = $r(m), o && o.UTC || (x[h][v] = Rn(x[h][v]))) : x[h][v] = ra(m), ++v;
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
`, w = o.s.c; w <= o.e.c; ++w) {
        var y = l ? d && d[w] : f[yr({ r: v, c: w })];
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
            y.w || (y.w = aa(y.z || ir[14], Yr($r(y.v)))), x += n(y.w, "V");
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
})(), Vu = (function() {
  function e(v) {
    return v.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function r(v) {
    return v.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function t(v, d) {
    for (var x = v.split(`
`), w = -1, y = -1, m = 0, g = []; m !== x.length; ++m) {
      var S = x[m].trim().split(":");
      if (S[0] === "cell") {
        var E = Lr(S[1]);
        if (g.length <= E.r) for (w = g.length; w <= E.r; ++w) g[w] || (g[w] = []);
        switch (w = E.r, y = E.c, S[2]) {
          case "t":
            g[w][y] = e(S[3]);
            break;
          case "v":
            g[w][y] = +S[3];
            break;
          case "vtf":
            var A = S[S.length - 1];
          case "vtc":
            S[3] === "nl" ? g[w][y] = !!+S[4] : g[w][y] = S[S.length - 1].charAt(0) == "#" ? { t: "e", v: _t[S[S.length - 1]] } : +S[4], S[2] == "vtf" && (g[w][y] = [g[w][y], A]);
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
    for (var d = [], x = [], w, y = "", m = wt(v["!ref"]), g = v["!data"] != null, S = m.s.r; S <= m.e.r; ++S) for (var E = m.s.c; E <= m.e.c; ++E) if (y = yr({ r: S, c: E }), w = g ? (v["!data"][S] || [])[E] : v[y], !(!w || w.v == null || w.t === "z")) {
      switch (x = ["cell", y, "t"], w.t) {
        case "s":
          x.push(r(w.v));
          break;
        case "b":
          x[2] = "vt" + (w.f ? "f" : "c"), x[3] = "nl", x[4] = w.v ? "1" : "0", x[5] = r(w.f || (w.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var A = Yr($r(w.v));
          x[2] = "vtc", x[3] = "nd", x[4] = "" + A, x[5] = w.w || aa(w.z || ir[14], A);
          break;
        case "n":
          isFinite(w.v) ? w.f ? (x[2] = "vtf", x[3] = "n", x[4] = w.v, x[5] = r(w.f)) : (x[2] = "v", x[3] = w.v) : (x[2] = "vt" + (w.f ? "f" : "c"), x[3] = "e" + dt[isNaN(w.v) ? 36 : 7], x[4] = "0", x[5] = w.f || x[3].slice(1), x[6] = "e", x[7] = x[3].slice(1));
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
  function e(h, v, d, x, w) {
    w.raw ? v[d][x] = h : h === "" || (h === "TRUE" ? v[d][x] = true : h === "FALSE" ? v[d][x] = false : isNaN(ra(h)) ? isNaN(Vi(h).getDate()) ? h.charCodeAt(0) == 35 && _t[h] != null ? v[d][x] = { t: "e", v: _t[h], w: h } : v[d][x] = h : v[d][x] = $r(h) : v[d][x] = ra(h));
  }
  function r(h, v) {
    var d = v || {}, x = [];
    if (!h || h.length === 0) return x;
    for (var w = h.split(/[\r\n]/), y = w.length - 1; y >= 0 && w[y].length === 0; ) --y;
    for (var m = 10, g = 0, S = 0; S <= y; ++S) g = w[S].indexOf(" "), g == -1 ? g = w[S].length : g++, m = Math.max(m, g);
    for (S = 0; S <= y; ++S) {
      x[S] = [];
      var E = 0;
      for (e(w[S].slice(0, m).trim(), x, S, E, d), E = 1; E <= (w[S].length - m) / 10 + 1; ++E) e(w[S].slice(m + (E - 1) * 10, m + E * 10).trim(), x, S, E, d);
    }
    return d.sheetRows && (x = x.slice(0, d.sheetRows)), x;
  }
  var t = { 44: ",", 9: "	", 59: ";", 124: "|" }, a = { 44: 3, 9: 2, 59: 1, 124: 0 };
  function n(h) {
    for (var v = {}, d = false, x = 0, w = 0; x < h.length; ++x) (w = h.charCodeAt(x)) == 34 ? d = !d : !d && w in t && (v[w] = (v[w] || 0) + 1);
    w = [];
    for (x in v) Object.prototype.hasOwnProperty.call(v, x) && w.push([v[x], x]);
    if (!w.length) {
      v = a;
      for (x in v) Object.prototype.hasOwnProperty.call(v, x) && w.push([v[x], x]);
    }
    return w.sort(function(y, m) {
      return y[0] - m[0] || a[y[1]] - a[m[1]];
    }), t[w.pop()[1]] || 44;
  }
  function i(h, v) {
    var d = v || {}, x = "", w = {};
    d.dense && (w["!data"] = []);
    var y = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    h.slice(0, 4) == "sep=" ? h.charCodeAt(5) == 13 && h.charCodeAt(6) == 10 ? (x = h.charAt(4), h = h.slice(7)) : h.charCodeAt(5) == 13 || h.charCodeAt(5) == 10 ? (x = h.charAt(4), h = h.slice(6)) : x = n(h.slice(0, 1024)) : d && d.FS ? x = d.FS : x = n(h.slice(0, 1024));
    var m = 0, g = 0, S = 0, E = 0, A = 0, X = x.charCodeAt(0), j = false, F = 0, M = h.charCodeAt(0), U = d.dateNF != null ? gd(d.dateNF) : null;
    function B() {
      var K = h.slice(E, A);
      K.slice(-1) == "\r" && (K = K.slice(0, -1));
      var J = {};
      if (K.charAt(0) == '"' && K.charAt(K.length - 1) == '"' && (K = K.slice(1, -1).replace(/""/g, '"')), d.cellText !== false && (J.w = K), K.length === 0) J.t = "z";
      else if (d.raw) J.t = "s", J.v = K;
      else if (K.trim().length === 0) J.t = "s", J.v = K;
      else if (K.charCodeAt(0) == 61) K.charCodeAt(1) == 34 && K.charCodeAt(K.length - 1) == 34 ? (J.t = "s", J.v = K.slice(2, -1).replace(/""/g, '"')) : c2(K) ? (J.t = "s", J.f = K.slice(1), J.v = K) : (J.t = "s", J.v = K);
      else if (K == "TRUE") J.t = "b", J.v = true;
      else if (K == "FALSE") J.t = "b", J.v = false;
      else if (!isNaN(S = ra(K))) J.t = "n", J.v = S;
      else if (!isNaN((S = Vi(K)).getDate()) || U && K.match(U)) {
        if (J.z = d.dateNF || ir[14], U && K.match(U)) {
          var ie = _d(K, d.dateNF, K.match(U) || []);
          S = $r(ie), d && d.UTC === false && (S = Rn(S));
        } else d && d.UTC === false ? S = Rn(S) : d.cellText !== false && d.dateNF && (J.w = aa(J.z, S));
        d.cellDates ? (J.t = "d", J.v = S) : (J.t = "n", J.v = Yr(S)), d.cellNF || delete J.z;
      } else K.charCodeAt(0) == 35 && _t[K] != null ? (J.t = "e", J.w = K, J.v = _t[K]) : (J.t = "s", J.v = K);
      if (J.t == "z" || (d.dense ? (w["!data"][m] || (w["!data"][m] = []), w["!data"][m][g] = J) : w[yr({ c: g, r: m })] = J), E = A + 1, M = h.charCodeAt(E), y.e.c < g && (y.e.c = g), y.e.r < m && (y.e.r = m), F == X) ++g;
      else if (g = 0, ++m, d.sheetRows && d.sheetRows <= m) return true;
    }
    e: for (; A < h.length; ++A) switch (F = h.charCodeAt(A)) {
      case 34:
        M === 34 && (j = !j);
        break;
      case 13:
        if (j) break;
        h.charCodeAt(A + 1) == 10 && ++A;
      case X:
      case 10:
        if (!j && B()) break e;
        break;
    }
    return A - E > 0 && B(), w["!ref"] = xr(y), w;
  }
  function s(h, v) {
    return !(v && v.PRN) || v.FS || h.slice(0, 4) == "sep=" || h.indexOf("	") >= 0 || h.indexOf(",") >= 0 || h.indexOf(";") >= 0 ? i(h, v) : li(r(h, v), v);
  }
  function f(h, v) {
    var d = "", x = v.type == "string" ? [0, 0, 0, 0] : Co(h, v);
    switch (v.type) {
      case "base64":
        d = ta(h);
        break;
      case "binary":
        d = h;
        break;
      case "buffer":
        v.codepage == 65001 ? d = h.toString("utf8") : (v.codepage, d = mr && Buffer.isBuffer(h) ? h.toString("binary") : Ra(h));
        break;
      case "array":
        d = Nn(h);
        break;
      case "string":
        d = h;
        break;
      default:
        throw new Error("Unrecognized type " + v.type);
    }
    return x[0] == 239 && x[1] == 187 && x[2] == 191 ? d = Br(d.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? d = Br(d) : v.type == "binary", d.slice(0, 19) == "socialcalc:version:" ? Vu.to_sheet(v.type == "string" ? d : Br(d), v) : s(d, v);
  }
  function o(h, v) {
    return pn(f(h, v), v);
  }
  function l(h) {
    var v = [];
    if (!h["!ref"]) return "";
    for (var d = Dr(h["!ref"]), x, w = h["!data"] != null, y = d.s.r; y <= d.e.r; ++y) {
      for (var m = [], g = d.s.c; g <= d.e.c; ++g) {
        var S = yr({ r: y, c: g });
        if (x = w ? (h["!data"][y] || [])[g] : h[S], !x || x.v == null) {
          m.push("          ");
          continue;
        }
        for (var E = (x.w || (qa(x), x.w) || "").slice(0, 10); E.length < 10; ) E += " ";
        m.push(E + (g === 0 ? " " : ""));
      }
      v.push(m.join(""));
    }
    return v.join(`
`);
  }
  return { to_workbook: o, to_sheet: f, from_sheet: l };
})();
function Zv(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = true;
  try {
    var n = Wu.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return fi.to_workbook(e, r);
  }
}
var Cn = /* @__PURE__ */ (function() {
  function e(R, W, z) {
    if (R) {
      lt(R, R.l || 0);
      for (var V = z.Enum || Te; R.l < R.length; ) {
        var ue = R.read_shift(2), D = V[ue] || V[65535], Ce = R.read_shift(2), We = R.l + Ce, Se = D.f && D.f(R, Ce, z);
        if (R.l = We, W(Se, D, ue)) return;
      }
    }
  }
  function r(R, W) {
    switch (W.type) {
      case "base64":
        return a(Kt(ta(R)), W);
      case "binary":
        return a(Kt(R), W);
      case "buffer":
      case "array":
        return a(R, W);
    }
    throw "Unsupported type " + W.type;
  }
  var t = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(R, W) {
    if (!R) return R;
    var z = W || {}, V = {}, ue = "Sheet1", D = "", Ce = 0, We = {}, Se = [], ar = [], rr = [];
    z.dense && (rr = V["!data"] = []);
    var or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ir = z.sheetRows || 0, Er = {};
    if (R[4] == 81 && R[5] == 80 && R[6] == 87) return Ze(R, W);
    if (R[2] == 0 && (R[3] == 8 || R[3] == 9) && R.length >= 16 && R[14] == 5 && R[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (R[2] == 2) z.Enum = Te, e(R, function(Ne, Jr, qr) {
      switch (qr) {
        case 0:
          z.vers = Ne, Ne >= 4096 && (z.qpro = true);
          break;
        case 255:
          z.vers = Ne, z.works = true;
          break;
        case 6:
          or = Ne;
          break;
        case 204:
          Ne && (D = Ne);
          break;
        case 222:
          D = Ne;
          break;
        case 15:
        case 51:
          (!z.qpro && !z.works || qr == 51) && Ne[1].v.charCodeAt(0) < 48 && (Ne[1].v = Ne[1].v.slice(1)), (z.works || z.works2) && (Ne[1].v = Ne[1].v.replace(/\r\n/g, `
`));
        case 13:
        case 14:
        case 16:
          (Ne[2] & 112) == 112 && (Ne[2] & 15) > 1 && (Ne[2] & 15) < 15 && (Ne[1].z = z.dateNF || t[(Ne[2] & 15) - 1] || ir[14], z.cellDates && (Ne[1].v = Ga(Ne[1].v), Ne[1].t = typeof Ne[1].v == "number" ? "n" : "d")), z.qpro && Ne[3] > Ce && (V["!ref"] = xr(or), We[ue] = V, Se.push(ue), V = {}, z.dense && (rr = V["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Ne[3], ue = D || "Sheet" + (Ce + 1), D = "");
          var Ur = z.dense ? (rr[Ne[0].r] || [])[Ne[0].c] : V[yr(Ne[0])];
          if (Ur) {
            Ur.t = Ne[1].t, Ur.v = Ne[1].v, Ne[1].z != null && (Ur.z = Ne[1].z), Ne[1].f != null && (Ur.f = Ne[1].f), Er = Ur;
            break;
          }
          z.dense ? (rr[Ne[0].r] || (rr[Ne[0].r] = []), rr[Ne[0].r][Ne[0].c] = Ne[1]) : V[yr(Ne[0])] = Ne[1], Er = Ne[1];
          break;
        case 21509:
          z.works2 = true;
          break;
        case 21506:
          Ne == 5281 && (Er.z = "hh:mm:ss", z.cellDates && Er.t == "n" && (Er.v = Ga(Er.v), Er.t = typeof Er.v == "number" ? "n" : "d"));
          break;
      }
    }, z);
    else if (R[2] == 26 || R[2] == 14) z.Enum = ke, R[2] == 14 && (z.qpro = true, R.l = 0), e(R, function(Ne, Jr, qr) {
      switch (qr) {
        case 204:
          ue = Ne;
          break;
        case 22:
          Ne[1].v.charCodeAt(0) < 48 && (Ne[1].v = Ne[1].v.slice(1)), Ne[1].v = Ne[1].v.replace(/\x0F./g, function(Ur) {
            return String.fromCharCode(Ur.charCodeAt(1) - 32);
          }).replace(/\r\n/g, `
`);
        case 23:
        case 24:
        case 25:
        case 37:
        case 39:
        case 40:
          if (Ne[3] > Ce && (V["!ref"] = xr(or), We[ue] = V, Se.push(ue), V = {}, z.dense && (rr = V["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Ne[3], ue = "Sheet" + (Ce + 1)), Ir > 0 && Ne[0].r >= Ir) break;
          z.dense ? (rr[Ne[0].r] || (rr[Ne[0].r] = []), rr[Ne[0].r][Ne[0].c] = Ne[1]) : V[yr(Ne[0])] = Ne[1], or.e.c < Ne[0].c && (or.e.c = Ne[0].c), or.e.r < Ne[0].r && (or.e.r = Ne[0].r);
          break;
        case 27:
          Ne[14e3] && (ar[Ne[14e3][0]] = Ne[14e3][1]);
          break;
        case 1537:
          ar[Ne[0]] = Ne[1], Ne[0] == Ce && (ue = Ne[1]);
          break;
      }
    }, z);
    else throw new Error("Unrecognized LOTUS BOF " + R[2]);
    if (V["!ref"] = xr(or), We[D || ue] = V, Se.push(D || ue), !ar.length) return { SheetNames: Se, Sheets: We };
    for (var Kr = {}, $e = [], Tr = 0; Tr < ar.length; ++Tr) We[Se[Tr]] ? ($e.push(ar[Tr] || Se[Tr]), Kr[ar[Tr]] = We[ar[Tr]] || We[Se[Tr]]) : ($e.push(ar[Tr]), Kr[ar[Tr]] = { "!ref": "A1" });
    return { SheetNames: $e, Sheets: Kr };
  }
  function n(R, W) {
    var z = W || {};
    if (+z.codepage >= 0 && ga(+z.codepage), z.type == "string") throw new Error("Cannot write WK1 to JS string");
    var V = Mt();
    if (!R["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var ue = Dr(R["!ref"]), D = R["!data"] != null, Ce = [];
    _e(V, 0, s(1030)), _e(V, 6, l(ue));
    for (var We = Math.min(ue.e.r, 8191), Se = ue.s.c; Se <= ue.e.c; ++Se) Ce[Se] = gr(Se);
    for (var ar = ue.s.r; ar <= We; ++ar) {
      var rr = Fr(ar);
      for (Se = ue.s.c; Se <= ue.e.c; ++Se) {
        var or = D ? (R["!data"][ar] || [])[Se] : R[Ce[Se] + rr];
        if (!(!or || or.t == "z")) switch (or.t) {
          case "n":
            (or.v | 0) == or.v && or.v >= -32768 && or.v <= 32767 ? _e(V, 13, m(ar, Se, or)) : _e(V, 14, S(ar, Se, or));
            break;
          case "d":
            var Ir = Yr(or.v);
            (Ir | 0) == Ir && Ir >= -32768 && Ir <= 32767 ? _e(V, 13, m(ar, Se, { v: Ir, z: or.z || ir[14] })) : _e(V, 14, S(ar, Se, { v: Ir, z: or.z || ir[14] }));
            break;
          default:
            var Er = qa(or);
            _e(V, 15, x(ar, Se, Er.slice(0, 239)));
        }
      }
    }
    return _e(V, 1), V.end();
  }
  function i(R, W) {
    var z = W || {};
    if (+z.codepage >= 0 && ga(+z.codepage), z.type == "string") throw new Error("Cannot write WK3 to JS string");
    var V = Mt();
    _e(V, 0, f(R));
    for (var ue = 0, D = 0; ue < R.SheetNames.length; ++ue) (R.Sheets[R.SheetNames[ue]] || {})["!ref"] && _e(V, 27, Me(R.SheetNames[ue], D++));
    var Ce = 0;
    for (ue = 0; ue < R.SheetNames.length; ++ue) {
      var We = R.Sheets[R.SheetNames[ue]];
      if (!(!We || !We["!ref"])) {
        for (var Se = Dr(We["!ref"]), ar = We["!data"] != null, rr = [], or = Math.min(Se.e.r, 8191), Ir = Se.s.r; Ir <= or; ++Ir) for (var Er = Fr(Ir), Kr = Se.s.c; Kr <= Se.e.c; ++Kr) {
          Ir === Se.s.r && (rr[Kr] = gr(Kr));
          var $e = rr[Kr] + Er, Tr = ar ? (We["!data"][Ir] || [])[Kr] : We[$e];
          if (!(!Tr || Tr.t == "z")) if (Tr.t == "n") _e(V, 23, ie(Ir, Kr, Ce, Tr.v));
          else {
            var Ne = qa(Tr);
            _e(V, 22, B(Ir, Kr, Ce, Ne.slice(0, 239)));
          }
        }
        ++Ce;
      }
    }
    return _e(V, 1), V.end();
  }
  function s(R) {
    var W = ce(2);
    return W.write_shift(2, R), W;
  }
  function f(R) {
    var W = ce(26);
    W.write_shift(2, 4096), W.write_shift(2, 4), W.write_shift(4, 0);
    for (var z = 0, V = 0, ue = 0, D = 0; D < R.SheetNames.length; ++D) {
      var Ce = R.SheetNames[D], We = R.Sheets[Ce];
      if (!(!We || !We["!ref"])) {
        ++ue;
        var Se = wt(We["!ref"]);
        z < Se.e.r && (z = Se.e.r), V < Se.e.c && (V = Se.e.c);
      }
    }
    return z > 8191 && (z = 8191), W.write_shift(2, z), W.write_shift(1, ue), W.write_shift(1, V), W.write_shift(2, 0), W.write_shift(2, 0), W.write_shift(1, 1), W.write_shift(1, 2), W.write_shift(4, 0), W.write_shift(4, 0), W;
  }
  function o(R, W, z) {
    var V = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return W == 8 && z.qpro ? (V.s.c = R.read_shift(1), R.l++, V.s.r = R.read_shift(2), V.e.c = R.read_shift(1), R.l++, V.e.r = R.read_shift(2), V) : (V.s.c = R.read_shift(2), V.s.r = R.read_shift(2), W == 12 && z.qpro && (R.l += 2), V.e.c = R.read_shift(2), V.e.r = R.read_shift(2), W == 12 && z.qpro && (R.l += 2), V.s.c == 65535 && (V.s.c = V.e.c = V.s.r = V.e.r = 0), V);
  }
  function l(R) {
    var W = ce(8);
    return W.write_shift(2, R.s.c), W.write_shift(2, R.s.r), W.write_shift(2, R.e.c), W.write_shift(2, R.e.r), W;
  }
  function h(R, W, z) {
    var V = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return z.qpro && z.vers != 20768 ? (V[0].c = R.read_shift(1), V[3] = R.read_shift(1), V[0].r = R.read_shift(2), R.l += 2) : z.works ? (V[0].c = R.read_shift(2), V[0].r = R.read_shift(2), V[2] = R.read_shift(2)) : (V[2] = R.read_shift(1), V[0].c = R.read_shift(2), V[0].r = R.read_shift(2)), V;
  }
  function v(R) {
    return R.z && da(R.z) ? 240 | (t.indexOf(R.z) + 1 || 2) : 255;
  }
  function d(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].t = "s", (z.vers & 65534) == 20768) {
      R.l++;
      var D = R.read_shift(1);
      return ue[1].v = R.read_shift(D, "utf8"), ue;
    }
    return z.qpro && R.l++, ue[1].v = R.read_shift(V - R.l, "cstr"), ue;
  }
  function x(R, W, z) {
    var V = ce(7 + z.length);
    V.write_shift(1, 255), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(1, 39);
    for (var ue = 0; ue < V.length; ++ue) {
      var D = z.charCodeAt(ue);
      V.write_shift(1, D >= 128 ? 95 : D);
    }
    return V.write_shift(1, 0), V;
  }
  function w(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].t = "s", z.vers == 20768) {
      var D = R.read_shift(1);
      return ue[1].v = R.read_shift(D, "utf8"), ue;
    }
    return ue[1].v = R.read_shift(V - R.l, "cstr"), ue;
  }
  function y(R, W, z) {
    var V = h(R, W, z);
    return V[1].v = R.read_shift(2, "i"), V;
  }
  function m(R, W, z) {
    var V = ce(7);
    return V.write_shift(1, v(z)), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(2, z.v, "i"), V;
  }
  function g(R, W, z) {
    var V = h(R, W, z);
    return V[1].v = R.read_shift(8, "f"), V;
  }
  function S(R, W, z) {
    var V = ce(13);
    return V.write_shift(1, v(z)), V.write_shift(2, W), V.write_shift(2, R), V.write_shift(8, z.v, "f"), V;
  }
  function E(R, W, z) {
    var V = R.l + W, ue = h(R, W, z);
    if (ue[1].v = R.read_shift(8, "f"), z.qpro) R.l = V;
    else {
      var D = R.read_shift(2);
      F(R.slice(R.l, R.l + D), ue), R.l += D;
    }
    return ue;
  }
  function A(R, W, z) {
    var V = W & 32768;
    return W &= -32769, W = (V ? R : 0) + (W >= 8192 ? W - 16384 : W), (V ? "" : "$") + (z ? gr(W) : Fr(W));
  }
  var X = { 31: ["NA", 0], 33: ["ABS", 1], 34: ["TRUNC", 1], 35: ["SQRT", 1], 36: ["LOG", 1], 37: ["LN", 1], 38: ["PI", 0], 39: ["SIN", 1], 40: ["COS", 1], 41: ["TAN", 1], 42: ["ATAN2", 2], 43: ["ATAN", 1], 44: ["ASIN", 1], 45: ["ACOS", 1], 46: ["EXP", 1], 47: ["MOD", 2], 49: ["ISNA", 1], 50: ["ISERR", 1], 51: ["FALSE", 0], 52: ["TRUE", 0], 53: ["RAND", 0], 54: ["DATE", 3], 63: ["ROUND", 2], 64: ["TIME", 3], 68: ["ISNUMBER", 1], 69: ["ISTEXT", 1], 70: ["LEN", 1], 71: ["VALUE", 1], 73: ["MID", 3], 74: ["CHAR", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 102: ["UPPER", 1], 103: ["LOWER", 1], 107: ["PROPER", 1], 109: ["TRIM", 1], 111: ["T", 1] }, j = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function F(R, W) {
    lt(R, 0);
    for (var z = [], V = 0, ue = "", D = "", Ce = "", We = ""; R.l < R.length; ) {
      var Se = R[R.l++];
      switch (Se) {
        case 0:
          z.push(R.read_shift(8, "f"));
          break;
        case 1:
          D = A(W[0].c, R.read_shift(2), true), ue = A(W[0].r, R.read_shift(2), false), z.push(D + ue);
          break;
        case 2:
          {
            var ar = A(W[0].c, R.read_shift(2), true), rr = A(W[0].r, R.read_shift(2), false);
            D = A(W[0].c, R.read_shift(2), true), ue = A(W[0].r, R.read_shift(2), false), z.push(ar + rr + ":" + D + ue);
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
            for (var or = ""; Se = R[R.l++]; ) or += String.fromCharCode(Se);
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
          if (Se < 32 && j[Se]) We = z.pop(), Ce = z.pop(), z.push(Ce + j[Se] + We);
          else if (X[Se]) {
            if (V = X[Se][1], V == 69 && (V = R[R.l++]), V > z.length) {
              console.error("WK1 bad formula parse 0x" + Se.toString(16) + ":|" + z.join("|") + "|");
              return;
            }
            var Ir = z.slice(-V);
            z.length -= V, z.push(X[Se][0] + "(" + Ir.join(",") + ")");
          } else return Se <= 7 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 24 ? console.error("WK1 unsupported op " + Se.toString(16)) : Se <= 30 ? console.error("WK1 invalid opcode " + Se.toString(16)) : Se <= 115 ? console.error("WK1 unsupported function opcode " + Se.toString(16)) : console.error("WK1 unrecognized opcode " + Se.toString(16));
      }
    }
    z.length == 1 ? W[1].f = "" + z[0] : console.error("WK1 bad formula parse |" + z.join("|") + "|");
  }
  function M(R) {
    var W = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return W[0].r = R.read_shift(2), W[3] = R[R.l++], W[0].c = R[R.l++], W;
  }
  function U(R, W) {
    var z = M(R);
    return z[1].t = "s", z[1].v = R.read_shift(W - 4, "cstr"), z;
  }
  function B(R, W, z, V) {
    var ue = ce(6 + V.length);
    ue.write_shift(2, R), ue.write_shift(1, z), ue.write_shift(1, W), ue.write_shift(1, 39);
    for (var D = 0; D < V.length; ++D) {
      var Ce = V.charCodeAt(D);
      ue.write_shift(1, Ce >= 128 ? 95 : Ce);
    }
    return ue.write_shift(1, 0), ue;
  }
  function K(R, W) {
    var z = M(R);
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
  function J(R, W) {
    var z = M(R), V = R.read_shift(4), ue = R.read_shift(4), D = R.read_shift(2);
    if (D == 65535) return V === 0 && ue === 3221225472 ? (z[1].t = "e", z[1].v = 15) : V === 0 && ue === 3489660928 ? (z[1].t = "e", z[1].v = 42) : z[1].v = 0, z;
    var Ce = D & 32768;
    return D = (D & 32767) - 16446, z[1].v = (1 - Ce * 2) * (ue * Math.pow(2, D + 32) + V * Math.pow(2, D)), z;
  }
  function ie(R, W, z, V) {
    var ue = ce(14);
    if (ue.write_shift(2, R), ue.write_shift(1, z), ue.write_shift(1, W), V == 0) return ue.write_shift(4, 0), ue.write_shift(4, 0), ue.write_shift(2, 65535), ue;
    var D = 0, Ce = 0, We = 0, Se = 0;
    return V < 0 && (D = 1, V = -V), Ce = Math.log2(V) | 0, V /= Math.pow(2, Ce - 31), Se = V >>> 0, (Se & 2147483648) == 0 && (V /= 2, ++Ce, Se = V >>> 0), V -= Se, Se |= 2147483648, Se >>>= 0, V *= Math.pow(2, 32), We = V >>> 0, ue.write_shift(4, We), ue.write_shift(4, Se), Ce += 16383 + (D ? 32768 : 0), ue.write_shift(2, Ce), ue;
  }
  function Ie(R, W) {
    var z = J(R);
    return R.l += W - 14, z;
  }
  function ve(R, W) {
    var z = M(R), V = R.read_shift(4);
    return z[1].v = V >> 6, z;
  }
  function Ve(R, W) {
    var z = M(R), V = R.read_shift(8, "f");
    return z[1].v = V, z;
  }
  function ye(R, W) {
    var z = Ve(R);
    return R.l += W - 12, z;
  }
  function Be(R, W) {
    return R[R.l + W - 1] == 0 ? R.read_shift(W, "cstr") : "";
  }
  function Qe(R, W) {
    var z = R[R.l++];
    z > W - 1 && (z = W - 1);
    for (var V = ""; V.length < z; ) V += String.fromCharCode(R[R.l++]);
    return V;
  }
  function de(R, W, z) {
    if (!(!z.qpro || W < 21)) {
      var V = R.read_shift(1);
      R.l += 17, R.l += 1, R.l += 2;
      var ue = R.read_shift(W - 21, "cstr");
      return [V, ue];
    }
  }
  function fr(R, W) {
    for (var z = {}, V = R.l + W; R.l < V; ) {
      var ue = R.read_shift(2);
      if (ue == 14e3) {
        for (z[ue] = [0, ""], z[ue][0] = R.read_shift(2); R[R.l]; ) z[ue][1] += String.fromCharCode(R[R.l]), R.l++;
        R.l++;
      }
    }
    return z;
  }
  function Me(R, W) {
    var z = ce(5 + R.length);
    z.write_shift(2, 14e3), z.write_shift(2, W);
    for (var V = 0; V < R.length; ++V) {
      var ue = R.charCodeAt(V);
      z[z.l++] = ue > 127 ? 95 : ue;
    }
    return z[z.l++] = 0, z;
  }
  var Te = { 0: { n: "BOF", f: Zr }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: o }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: y }, 14: { n: "NUMBER", f: g }, 15: { n: "LABEL", f: d }, 16: { n: "FORMULA", f: E }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: w }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: Be }, 222: { n: "SHEETNAMELP", f: Qe }, 255: { n: "BOF", f: Zr }, 21506: { n: "WKSNF", f: Zr }, 65535: { n: "" } }, ke = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: U }, 23: { n: "NUMBER17", f: J }, 24: { n: "NUMBER18", f: K }, 25: { n: "FORMULA19", f: Ie }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: fr }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: ve }, 38: { n: "??" }, 39: { n: "NUMBER27", f: Ve }, 40: { n: "FORMULA28", f: ye }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: Be }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: de }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }, Ge = { 5: "dd-mmm-yy", 6: "dd-mmm", 7: "mmm-yy", 8: "mm/dd/yy", 10: "hh:mm:ss AM/PM", 11: "hh:mm AM/PM", 14: "dd-mmm-yyyy", 15: "mmm-yyyy", 34: "0.00", 50: "0.00;[Red]0.00", 66: "0.00;(0.00)", 82: "0.00;[Red](0.00)", 162: '"$"#,##0.00;\\("$"#,##0.00\\)', 288: "0%", 304: "0E+00", 320: "# ?/?" };
  function ze(R) {
    var W = R.read_shift(2), z = R.read_shift(1);
    if (z != 0) throw "unsupported QPW string type " + z.toString(16);
    return R.read_shift(W, "sbcs-cont");
  }
  function Ze(R, W) {
    lt(R, 0);
    var z = W || {}, V = {};
    z.dense && (V["!data"] = []);
    var ue = [], D = "", Ce = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, We = 0, Se = 0, ar = 0, rr = 0, or = { SheetNames: [], Sheets: {} }, Ir = [];
    e: for (; R.l < R.length; ) {
      var Er = R.read_shift(2), Kr = R.read_shift(2), $e = R.slice(R.l, R.l + Kr);
      switch (lt($e, 0), Er) {
        case 1:
          if ($e.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var Tr = $e.read_shift(4), Ne = ($e.length - $e.l) / Tr | 0, Jr = 0; Jr < Tr; ++Jr) {
            var qr = $e.l + Ne, Ur = {};
            $e.l += 2, Ur.numFmtId = $e.read_shift(2), Ge[Ur.numFmtId] && (Ur.z = Ge[Ur.numFmtId]), $e.l = qr, Ir.push(Ur);
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
            V = {}, z.dense && (V["!data"] = []), Ce.s.c = $e.read_shift(2), Ce.e.c = $e.read_shift(2), Ce.s.r = $e.read_shift(4), Ce.e.r = $e.read_shift(4), $e.l += 4, $e.l + 2 < $e.length && (We = $e.read_shift(2), Se = $e.read_shift(1), D = We == 0 ? "" : $e.read_shift(We, "cstr")), D || (D = gr(yt));
          }
          break;
        case 1538:
          {
            if (Ce.s.c > 255 || Ce.s.r > 999999) break;
            Ce.e.c < Ce.s.c && (Ce.e.c = Ce.s.c), Ce.e.r < Ce.s.r && (Ce.e.r = Ce.s.r), V["!ref"] = xr(Ce), us(or, V, D);
          }
          break;
        case 2561:
          ar = $e.read_shift(2), Ce.e.c < ar && (Ce.e.c = ar), Ce.s.c > ar && (Ce.s.c = ar), rr = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), rr = $e.read_shift(4), Ce.e.r < rr && (Ce.e.r = rr);
          break;
        case 3073:
          {
            rr = $e.read_shift(4), We = $e.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), Ce.e.r < rr + We - 1 && (Ce.e.r = rr + We - 1);
            for (var xt = gr(ar); $e.l < $e.length; ) {
              var je = { t: "z" }, kr = $e.read_shift(1), jr = -1;
              kr & 128 && (jr = $e.read_shift(2));
              var zr = kr & 64 ? $e.read_shift(2) - 1 : 0;
              switch (kr & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  je = { t: "n", v: $e.read_shift(2) };
                  break;
                case 3:
                  je = { t: "n", v: $e.read_shift(2, "i") };
                  break;
                case 4:
                  je = { t: "n", v: p0($e) };
                  break;
                case 5:
                  je = { t: "n", v: $e.read_shift(8, "f") };
                  break;
                case 7:
                  je = { t: "s", v: ue[Se = $e.read_shift(4) - 1] };
                  break;
                case 8:
                  je = { t: "n", v: $e.read_shift(8, "f") }, $e.l += 2, $e.l += 4, isNaN(je.v) && (je = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (kr & 31);
              }
              jr != -1 && (Ir[jr - 1] || {}).z && (je.z = Ir[jr - 1].z);
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
              if (!(!z.sheetStubs && je.t == "z")) {
                var Je = Vr(je);
                je.t == "n" && je.z && da(je.z) && z.cellDates && (Je.v = Ga(je.v), Je.t = typeof Je.v == "number" ? "n" : "d"), V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = Je) : V[xt + Fr(rr)] = Je;
              }
              for (++rr, --We; zr-- > 0 && We >= 0; ) {
                if (kr & 32) switch (kr & 31) {
                  case 2:
                    je = { t: "n", v: je.v + pt & 65535 };
                    break;
                  case 3:
                    je = { t: "n", v: je.v + pt & 65535 }, je.v > 32767 && (je.v -= 65536);
                    break;
                  case 7:
                    je = { t: "s", v: ue[Se = Se + pt >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (kr & 31);
                }
                else switch (kr & 31) {
                  case 1:
                    je = { t: "z" };
                    break;
                  case 2:
                    je = { t: "n", v: $e.read_shift(2) };
                    break;
                  case 7:
                    je = { t: "s", v: ue[Se = $e.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (kr & 31);
                }
                !z.sheetStubs && je.t == "z" || (V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = je) : V[xt + Fr(rr)] = je), ++rr, --We;
              }
            }
          }
          break;
        case 3074:
          {
            ar = $e.read_shift(2), rr = $e.read_shift(4);
            var Ea = ze($e);
            V["!data"] != null ? (V["!data"][rr] || (V["!data"][rr] = []), V["!data"][rr][ar] = { t: "s", v: Ea }) : V[gr(ar) + Fr(rr)] = { t: "s", v: Ea };
          }
          break;
      }
      R.l += Kr;
    }
    return or;
  }
  return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
})();
function Jv(e) {
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
        r.cp = qf[parseInt(i.val, 10)];
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
var Qv = /* @__PURE__ */ (function() {
  function e(a) {
    var n = gt(a, "t");
    if (!n) return { t: "s", v: "" };
    var i = { t: "s", v: Ar(n[1]) }, s = gt(a, "rPr");
    return s && (i.s = Jv(s[1])), i;
  }
  var r = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(n) {
    return n.replace(r, "").split(t).map(e).filter(function(i) {
      return i.v;
    });
  };
})(), em = /* @__PURE__ */ (function() {
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
})(), rm = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, tm = /<(?:\w+:)?r\b[^<>]*>/;
function _o(e, r) {
  var t = r ? r.cellHTML : true, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Ar(Br(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true), a.r = Br(e), t && (a.h = Ci(a.t))) : e.match(tm) && (a.r = Br(e), a.t = Ar(Br((Md(e, "rPh").match(rm) || []).join("").replace(Et, "")), true), t && (a.h = em(Qv(a.r)))), a) : { t: "" };
}
var am = /<(?:\w+:)?(?:si|sstItem)>/g, nm = /<\/(?:\w+:)?(?:si|sstItem)>/;
function im(e, r) {
  var t = [], a = "";
  if (!e) return t;
  var n = gt(e, "sst");
  if (n) {
    a = n[1].replace(am, "").split(nm);
    for (var i = 0; i != a.length; ++i) {
      var s = _o(a[i].trim(), r);
      s != null && (t[t.length] = s);
    }
    n = Ye(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
  }
  return t;
}
var sm = /^\s|\s$|[\t\n\r]/;
function fm(e, r) {
  if (!r.bookSST) return "";
  var t = [at];
  t[t.length] = Ae("sst", null, { xmlns: Mn[0], count: e.Count, uniqueCount: e.Unique });
  for (var a = 0; a != e.length; ++a) if (e[a] != null) {
    var n = e[a], i = "<si>";
    n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), typeof n.t != "string" && (n.t = String(n.t)), n.t.match(sm) && (i += ' xml:space="preserve"'), i += ">" + vr(n.t) + "</t>"), i += "</si>", t[t.length] = i;
  }
  return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function om(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function cm(e, r) {
  var t = [], a = false;
  return Za(e, function(i, s, f) {
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
function lm(e, r) {
  return r || (r = ce(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var um = px;
function hm(e) {
  var r = Mt();
  me(r, 159, lm(e));
  for (var t = 0; t < e.length; ++t) me(r, 19, um(e[t]));
  return me(r, 160), r.end();
}
function Xu(e) {
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function $a(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function dm(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = $a(e, 4), r.U = $a(e, 4), r.W = $a(e, 4), r;
}
function xm(e) {
  for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return a;
}
function pm(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(xm(e));
  return r;
}
function vm(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function mm(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = $a(e, 4), r.U = $a(e, 4), r.W = $a(e, 4), r;
}
function gm(e) {
  var r = mm(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function Ku(e, r) {
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
function ju(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function _m(e) {
  var r = $a(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, wm(e)];
    case 3:
      return [r.Minor, ym()];
    case 4:
      return [r.Minor, km(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function wm(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4), a = Ku(e, t), n = ju(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function ym() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function km(e) {
  var r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"), a = {};
  return t.replace(Et, function(i) {
    var s = Ye(i);
    switch (xa(s[0])) {
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
function Em(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = $a(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = Ku(e, n), r -= n, t.EncryptionVerifier = ju(e, r), t;
}
function Tm(e) {
  var r = {}, t = r.EncryptionVersionInfo = $a(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function wo(e) {
  var r = 0, t, a = Xu(e), n = a.length + 1, i, s, f, o, l;
  for (t = ln(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i) s = t[i], f = (r & 16384) === 0 ? 0 : 1, o = r << 1 & 32767, l = f | o, r = l ^ s;
  return r ^ 52811;
}
var Gu = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], o = 104, l = s.length - 1; l >= 0; --l) for (var h = s[l], v = 0; v != 7; ++v) h & 64 && (f ^= t[o]), h *= 2, --o;
    return f;
  };
  return function(s) {
    for (var f = Xu(s), o = i(f), l = f.length, h = ln(16), v = 0; v != 16; ++v) h[v] = 0;
    var d, x, w;
    for ((l & 1) === 1 && (d = o >> 8, h[l] = n(e[0], d), --l, d = o & 255, x = f[f.length - 1], h[l] = n(x, d)); l > 0; ) --l, d = o >> 8, h[l] = n(f[l], d), --l, d = o & 255, h[l] = n(f[l], d);
    for (l = 15, w = 15 - f.length; w > 0; ) d = o >> 8, h[l] = n(e[w], d), --l, --w, d = o & 255, h[l] = n(f[l], d), --l, --w;
    return h;
  };
})(), Sm = function(e, r, t, a, n) {
  n || (n = r), a || (a = Gu(e));
  var i, s;
  for (i = 0; i != r.length; ++i) s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, bm = function(e) {
  var r = 0, t = Gu(e);
  return function(a) {
    var n = Sm("", a, r, t);
    return r = n[1], n[0];
  };
};
function Fm(e, r, t, a) {
  var n = { key: Zr(e), verificationBytes: Zr(e) };
  return t.password && (n.verifier = wo(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = bm(t.password)), n;
}
function Am(e, r, t) {
  var a = t || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = Tm(e) : a.Data = Em(e, r), a;
}
function Cm(e, r, t) {
  var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? Am(e, r - 2, a) : Fm(e, t.biff >= 8 ? r : r - 2, t, a), a;
}
function Im(e, r) {
  switch (r.type) {
    case "base64":
      return Ms(ta(e), r);
    case "binary":
      return Ms(e, r);
    case "buffer":
      return Ms(mr && Buffer.isBuffer(e) ? e.toString("binary") : Ra(e), r);
    case "array":
      return Ms(Nn(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function Ms(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = to(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(o, l) {
    n && (f = a["!data"][l] = []);
    for (var h = /\\[\w\-]+\b/g, v = 0, d, x = -1, w = []; (d = h.exec(o)) != null; ) {
      var y = o.slice(v, h.lastIndex - d[0].length);
      switch (y.charCodeAt(0) == 32 && (y = y.slice(1)), y.length && w.push(y), d[0]) {
        case "\\cell":
          if (++x, w.length) {
            var m = { v: w.join(""), t: "s" };
            m.v == "TRUE" || m.v == "FALSE" ? (m.v = m.v == "TRUE", m.t = "b") : isNaN(ra(m.v)) ? _t[m.v] != null && (m.t = "e", m.w = m.v, m.v = _t[m.v]) : (m.t = "n", t.cellText !== false && (m.w = m.v), m.v = ra(m.v)), n ? f[x] = m : a[yr({ r: l, c: x })] = m;
          }
          w = [];
          break;
        case "\\par":
          w.push(`
`);
          break;
      }
      v = h.lastIndex;
    }
    x > s.e.c && (s.e.c = x);
  }), a["!ref"] = xr(s), a;
}
function Dm(e, r) {
  var t = pn(Im(e, r), r);
  return t.bookType = "rtf", t;
}
function Om(e, r) {
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
      t.push(" " + (n.w || (qa(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function Nm(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function $i(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function Rm(e) {
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
function Pm(e) {
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
  var t = Rm(Nm(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), $i(Pm(t));
}
var zu = 6, Bm = 15, Lm = 1, Pt = zu;
function qi(e) {
  return Math.floor((e + Math.round(128 / Pt) / 256) * Pt);
}
function Yi(e) {
  return Math.floor((e - 5) / Pt * 100 + 0.5) / 100;
}
function f0(e) {
  return Math.round((e * Pt + 5) / Pt * 256) / 256;
}
function cf(e) {
  return f0(Yi(qi(e)));
}
function yo(e) {
  var r = Math.abs(e - cf(e)), t = Pt;
  if (r > 5e-3) for (Pt = Lm; Pt < Bm; ++Pt) Math.abs(e - cf(e)) <= r && (r = Math.abs(e - cf(e)), t = Pt);
  Pt = t;
}
function un(e) {
  e.width ? (e.wpx = qi(e.width), e.wch = Yi(e.wpx), e.MDW = Pt) : e.wpx ? (e.wch = Yi(e.wpx), e.width = f0(e.wch), e.MDW = Pt) : typeof e.wch == "number" && (e.width = f0(e.wch), e.wpx = qi(e.width), e.MDW = Pt), e.customWidth && delete e.customWidth;
}
var Mm = 96, $u = Mm;
function Zi(e) {
  return e * 96 / $u;
}
function oi(e) {
  return e * $u / 96;
}
var Um = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function Wm(e, r, t, a) {
  r.Borders = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (xa(f[0])) {
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
function Hm(e, r, t, a) {
  r.Fills = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (xa(f[0])) {
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
function Vm(e, r, t, a) {
  r.Fonts = [];
  var n = {}, i = false;
  (e.match(Et) || []).forEach(function(s) {
    var f = Ye(s);
    switch (xa(f[0])) {
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
        f.codepage = qf[parseInt(f.val, 10)];
        break;
      case "<charset/>":
      case "</charset>":
      case "</charset":
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = Pr(f.auto)), f.rgb) n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var o = Fn[n.color.index];
          n.color.index == 81 && (o = Fn[1]), o || (o = Fn[1]), n.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
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
function Xm(e, r, t) {
  r.NumberFmt = [];
  for (var a = Gr(ir), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = ir[a[n]];
  var i = e.match(Et);
  if (i) for (n = 0; n < i.length; ++n) {
    var s = Ye(i[n]);
    switch (xa(s[0])) {
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
            cn(f, o);
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
function Km(e) {
  var r = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(t) {
    for (var a = t[0]; a <= t[1]; ++a) e[a] != null && (r[r.length] = Ae("numFmt", null, { numFmtId: a, formatCode: vr(e[a]) }));
  }), r.length === 1 ? "" : (r[r.length] = "</numFmts>", r[0] = Ae("numFmts", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Us = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Ws = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function jm(e, r, t) {
  r.CellXf = [];
  var a, n = false;
  (e.match(Et) || []).forEach(function(i) {
    var s = Ye(i), f = 0;
    switch (xa(s[0])) {
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
function Gm(e) {
  var r = [];
  return r[r.length] = Ae("cellXfs", null), e.forEach(function(t) {
    r[r.length] = Ae("xf", null, t);
  }), r[r.length] = "</cellXfs>", r.length === 2 ? "" : (r[0] = Ae("cellXfs", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var zm = /* @__PURE__ */ (function() {
  return function(t, a, n) {
    var i = {};
    if (!t) return i;
    t = ro(ns(t, "<!--", "-->"));
    var s;
    return (s = gt(t, "numFmts")) && Xm(s[0], i, n), (s = gt(t, "fonts")) && Vm(s[0], i, a, n), (s = gt(t, "fills")) && Hm(s[0], i, a, n), (s = gt(t, "borders")) && Wm(s[0], i, a, n), (s = gt(t, "cellXfs")) && jm(s[0], i, n), i;
  };
})();
function $m(e, r) {
  var t = [at, Ae("styleSheet", null, { xmlns: Mn[0], "xmlns:vt": ut.vt })], a;
  return e.SSF && (a = Km(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Gm(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function qm(e, r) {
  var t = e.read_shift(2), a = Ut(e);
  return [t, a];
}
function Ym(e, r, t) {
  t || (t = ce(6 + 4 * r.length)), t.write_shift(2, e), ht(r, t);
  var a = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), a;
}
function Zm(e, r, t) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = kx(e);
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
  switch (o > 0 && (a.charset = o), e.l++, a.color = yx(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Ut(e), a;
}
function Jm(e, r) {
  r || (r = ce(153)), r.write_shift(2, e.sz * 20), Ex(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), a0(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), ht(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var Qm = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"], lf, eg = Wt;
function tl(e, r) {
  r || (r = ce(84)), lf || (lf = l0(Qm));
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
function rg(e, r) {
  var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = t, { ixfe: a, numFmtId: n };
}
function qu(e, r, t) {
  t || (t = ce(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function Ti(e, r) {
  return r || (r = ce(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var tg = Wt;
function ag(e, r) {
  return r || (r = ce(51)), r.write_shift(1, 0), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), Ti(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function ng(e, r) {
  return r || (r = ce(52)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), Gi(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function ig(e, r, t) {
  var a = ce(2052);
  return a.write_shift(4, e), Gi(r, a), Gi(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function sg(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in ir) a.NumberFmt[n] = ir[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = false;
  return Za(e, function(o, l, h) {
    switch (h) {
      case 44:
        a.NumberFmt[o[0]] = o[1], cn(o[1], o[0]);
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
function fg(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (me(e, 615, wa(t)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && me(e, 44, Ym(n, r[n]));
    }), me(e, 616));
  }
}
function og(e) {
  var r = 1;
  me(e, 611, wa(r)), me(e, 43, Jm({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), me(e, 612);
}
function cg(e) {
  var r = 2;
  me(e, 603, wa(r)), me(e, 45, tl({ patternType: "none" })), me(e, 45, tl({ patternType: "gray125" })), me(e, 604);
}
function lg(e) {
  var r = 1;
  me(e, 613, wa(r)), me(e, 46, ag()), me(e, 614);
}
function ug(e) {
  var r = 1;
  me(e, 626, wa(r)), me(e, 47, qu({ numFmtId: 0 }, 65535)), me(e, 627);
}
function hg(e, r) {
  me(e, 617, wa(r.length)), r.forEach(function(t) {
    me(e, 47, qu(t, 0));
  }), me(e, 618);
}
function dg(e) {
  var r = 1;
  me(e, 619, wa(r)), me(e, 48, ng({ xfId: 0, name: "Normal" })), me(e, 620);
}
function xg(e) {
  var r = 0;
  me(e, 505, wa(r)), me(e, 506);
}
function pg(e) {
  var r = 0;
  me(e, 508, ig(r, "TableStyleMedium9", "PivotStyleMedium4")), me(e, 509);
}
function vg(e, r) {
  var t = Mt();
  return me(t, 278), fg(t, e.SSF), og(t), cg(t), lg(t), ug(t), hg(t, r.cellXfs), dg(t), xg(t), pg(t), me(t, 279), t.end();
}
var mg = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function gg(e, r, t) {
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
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[mg.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (t && t.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function _g(e, r, t) {
  r.themeElements = {};
  var a;
  if (!(a = bn(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
  if (gg(a, r, t), !(a = bn(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = bn(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Yu(e, r) {
  (!e || e.length === 0) && (e = ko());
  var t, a = {};
  if (!(t = bn(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return _g(t[0], a, r), a.raw = e, a;
}
function ko(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [at];
  return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", t[t.length] = "</a:theme>", t.join("");
}
function wg(e, r, t) {
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
      s = jl(i, { type: "array" });
    } catch {
      return;
    }
    var f = jt(s, "theme/theme/theme1.xml", true);
    if (f) return Yu(f, t);
  }
}
function yg(e) {
  return e.read_shift(4);
}
function kg(e) {
  var r = {};
  switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = Eg(e, 4);
      break;
    case 2:
      r.xclrValue = Du(e);
      break;
    case 3:
      r.xclrValue = yg(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, r;
}
function Eg(e, r) {
  return Wt(e, r);
}
function Tg(e, r) {
  return Wt(e, r);
}
function Sg(e) {
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
      a[1] = kg(e);
      break;
    case 6:
      a[1] = Tg(e, t);
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
function bg(e, r) {
  var t = e.l + r;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; ) i.push(Sg(e, t - e.l));
  return { ixfe: a, ext: i };
}
function Fg(e, r) {
  r.forEach(function(t) {
    t[0];
  });
}
function Ag(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Ut(e) };
}
function Cg(e) {
  var r = ce(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), ht(e.name, r), r.slice(0, r.l);
}
function Ig(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function Dg(e) {
  var r = ce(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Og(e, r) {
  var t = ce(8 + 2 * r.length);
  return t.write_shift(4, e), ht(r, t), t.slice(0, t.l);
}
function Ng(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Rg(e, r) {
  var t = ce(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Pg(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] }, n = t || {}, i = [], s = false, f = 2;
  return Za(e, function(o, l, h) {
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
function Bg() {
  var e = Mt();
  return me(e, 332), me(e, 334, wa(1)), me(e, 335, Cg({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), me(e, 336), me(e, 339, Og(1, "XLDAPR")), me(e, 52), me(e, 35, wa(514)), me(e, 4096, wa(0)), me(e, 4097, la(1)), me(e, 36), me(e, 53), me(e, 340), me(e, 337, Rg(1)), me(e, 51, Dg([[1, 0]])), me(e, 338), me(e, 333), e.end();
}
function Lg(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = false, i = 2, s;
  return e.replace(Et, function(f) {
    var o = Ye(f);
    switch (xa(o[0])) {
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
function Mg() {
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
function Ug(e) {
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
function Wg(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = yr(t);
  var a = e.read_shift(1);
  return a & 2 && (r.l = "1"), a & 8 && (r.a = "1"), r;
}
function Hg(e, r, t) {
  var a = [];
  return Za(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function Vg(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = false;
  Za(e, function(f, o, l) {
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
function Xg(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function Kg(e, r, t) {
  var a = 0;
  (Vl(e, "shape") || []).forEach(function(n) {
    var i = "", s = true, f = -1, o = -1, l = -1;
    if (n.replace(Et, function(v, d) {
      var x = Ye(v);
      switch (xa(x[0])) {
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
      var h = ts(r, o >= 0 && l >= 0 ? yr({ r: o, c: l }) : t[a].ref);
      h.c && (h.c.hidden = s), ++a;
    }
  });
}
function Zu(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [Ae("xml", null, { "xmlns:v": Qt.v, "xmlns:o": Qt.o, "xmlns:x": Qt.x, "xmlns:mv": Qt.mv }).replace(/\/>/, ">"), Ae("o:shapelayout", Ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(Ae("v:shapetype", [Ae("v:stroke", null, { joinstyle: "miter" }), Ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(o) {
    ++s, i.push(jg(o, s));
  }), i.push("</xml>"), i.join("");
}
function jg(e, r, t) {
  var a = Lr(e[0]), n = { color2: "#BEFF82", type: "gradient" };
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? Ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = Ae("v:fill", i, n), f = { on: "t", obscured: "t" };
  return ["<v:shape" + Xi({ id: "_x0000_s" + r, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", s, Ae("v:shadow", null, f), Ae("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", kt("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), kt("x:AutoFill", "False"), kt("x:Row", String(a.r)), kt("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function al(e, r, t, a) {
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
function Gg(e, r) {
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
          var v = gt(s, "text"), d = !!v && !!v[1] && _o(v[1]) || { r: "", t: "", h: "" };
          l.r = d.r, d.r == "<t></t>" && (d.t = d.h = ""), l.t = (d.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (l.h = d.h), a.push(l);
        }
      }
    }
  }), a;
}
function zg(e) {
  var r = [at, Ae("comments", null, { xmlns: Mn[0] })], t = [];
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
function $g(e, r) {
  var t = [], a = false, n = {}, i = 0;
  return e.replace(Et, function(f, o) {
    var l = Ye(f);
    switch (xa(l[0])) {
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
function Ju(e, r, t) {
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
function qg(e, r) {
  var t = [], a = false;
  return e.replace(Et, function(i) {
    var s = Ye(i);
    switch (xa(s[0])) {
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
function Qu(e) {
  var r = [at, Ae("personList", null, { xmlns: ut.TCMNT, "xmlns:x": Mn[0] }).replace(/[\/]>/, ">")];
  return e.forEach(function(t, a) {
    r.push(Ae("person", null, { displayName: t, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}", userId: t, providerId: "None" }));
  }), r.push("</personList>"), r.join("");
}
function Yg(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = Vn(e);
  return r.rfx = t.s, r.ref = yr(t.s), e.l += 16, r;
}
function Zg(e, r) {
  return r == null && (r = ce(36)), r.write_shift(4, e[1].iauthor), ui(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var Jg = Ut;
function nl(e) {
  return ht(e.slice(0, 54));
}
function Qg(e, r) {
  var t = [], a = [], n = {}, i = false;
  return Za(e, function(f, o, l) {
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
function e2(e) {
  var r = Mt(), t = [];
  return me(r, 628), me(r, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), me(r, 632, nl(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), me(r, 632, nl("tc=" + n.ID))));
    });
  }), me(r, 631), me(r, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: Lr(a[0]), e: Lr(a[0]) };
      me(r, 635, Zg([s, n])), n.t && n.t.length > 0 && me(r, 637, mx(n)), me(r, 636), delete n.iauthor;
    });
  }), me(r, 634), me(r, 629), r.end();
}
var r2 = "application/vnd.ms-office.vbaProject";
function t2(e) {
  var r = sr.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      sr.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), sr.write(r);
}
function a2(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && sr.utils.cfb_add(e, n, r.FileIndex[a].content);
    }
  });
}
var n2 = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function i2() {
  return { "!type": "dialog" };
}
function s2() {
  return { "!type": "dialog" };
}
function f2() {
  return { "!type": "macro" };
}
function o2() {
  return { "!type": "macro" };
}
var In = /* @__PURE__ */ (function() {
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
      var l = lo(s) - (i ? 0 : t.c), h = co(o) - (f ? 0 : t.r), v = f == "$" ? h + 1 : h == 0 ? "" : "[" + h + "]", d = i == "$" ? l + 1 : l == 0 ? "" : "[" + l + "]";
      return n + "R" + v + "C" + d;
    });
  };
})();
function eh(e, r) {
  return e.replace(m0, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : gr(lo(i) + r.c)) + (s == "$" ? s + f : Fr(co(f) + r.r));
  });
}
function il(e, r, t) {
  var a = wt(r), n = a.s, i = Lr(t), s = { r: i.r - n.r, c: i.c - n.c };
  return eh(e, s);
}
function c2(e) {
  return e.length != 1;
}
function sl(e) {
  return e.replace(/_xlfn\./g, "");
}
function st(e) {
  e.l += 1;
}
function hn(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function rh(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return th(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = hn(e), f = hn(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function th(e) {
  var r = hn(e), t = hn(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function l2(e, r, t) {
  if (t.biff < 8) return th(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = hn(e), s = hn(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function ah(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return u2(e);
  var a = e.read_shift(t && t.biff == 12 ? 4 : 2), n = hn(e);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function u2(e) {
  var r = hn(e), t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function h2(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return { r, c: t & 255, fQuoted: !!(t & 16384), cRel: t >> 15, rRel: t >> 15 };
}
function d2(e, r, t) {
  var a = t && t.biff ? t.biff : 8;
  if (a >= 2 && a <= 5) return x2(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1) for (; n > 524287; ) n -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function x2(e) {
  var r = e.read_shift(2), t = e.read_shift(1), a = (r & 32768) >> 15, n = (r & 16384) >> 14;
  return r &= 16383, a == 1 && r >= 8192 && (r = r - 16384), n == 1 && t >= 128 && (t = t - 256), { r, c: t, cRel: n, rRel: a };
}
function p2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = rh(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [a, n];
}
function v2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = rh(e, i, t);
  return [a, n, s];
}
function m2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
}
function g2(e, r, t) {
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
function _2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = l2(e, r - 1, t);
  return [a, n];
}
function w2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [a];
}
function fl(e) {
  var r = e[e.l + 1] & 1, t = 1;
  return e.l += 4, [r, t];
}
function y2(e, r, t) {
  e.l += 2;
  for (var a = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function k2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function E2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function T2(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [r, e.read_shift(2)];
}
function S2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += t && t.biff == 2 ? 3 : 4, [a];
}
function nh(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function b2(e) {
  return e.read_shift(2), nh(e);
}
function F2(e) {
  return e.read_shift(2), nh(e);
}
function A2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = ah(e, 0, t);
  return [a, n];
}
function C2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = d2(e, 0, t);
  return [a, n];
}
function I2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var i = ah(e, 0, t);
  return [a, n, i];
}
function D2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [j_[n], fh[n], a];
}
function O2(e, r, t) {
  var a = e[e.l++], n = e.read_shift(1), i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : N2(e);
  return [n, (i[0] === 0 ? fh : K_)[i[1]]];
}
function N2(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function R2(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function P2(e, r, t) {
  if (e.l++, t && t.biff == 12) return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function B2(e) {
  return e.l++, dt[e.read_shift(1)];
}
function L2(e) {
  return e.l++, e.read_shift(2);
}
function M2(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function U2(e) {
  return e.l++, Bt(e);
}
function W2(e, r, t) {
  return e.l++, si(e, r - 1, t);
}
function H2(e, r) {
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
      t[1] = Bt(e);
      break;
    case 2:
      t[1] = Xn(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function V2(e, r, t) {
  for (var a = e.read_shift(t.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((t.biff == 12 ? Vn : v0)(e));
  return n;
}
function X2(e, r, t) {
  var a = 0, n = 0;
  t.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i) for (var f = 0; f != n; ++f) s[i][f] = H2(e, t.biff);
  return s;
}
function K2(e, r, t) {
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
function j2(e, r, t) {
  if (t.biff == 5) return G2(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function G2(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function z2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function $2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function q2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [a];
}
function Y2(e, r, t) {
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
var Z2 = Wt, J2 = Wt, Q2 = Wt;
function os(e, r, t) {
  return e.l += 2, [h2(e)];
}
function Eo(e) {
  return e.l += 6, [];
}
var e_ = os, r_ = Eo, t_ = Eo, a_ = os;
function ih(e) {
  return e.l += 2, [Zr(e), e.read_shift(2) & 1];
}
var n_ = os, i_ = ih, s_ = Eo, f_ = os, o_ = os, c_ = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function l_(e) {
  e.l += 2;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = c_[t >> 2 & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
}
function u_(e) {
  return e.l += 2, [e.read_shift(4)];
}
function h_(e, r, t) {
  return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function d_(e, r, t) {
  return e.l += t.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function x_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function p_(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function v_(e) {
  return e.l += 4, [0, 0];
}
var ol = { 1: { n: "PtgExp", f: P2 }, 2: { n: "PtgTbl", f: Q2 }, 3: { n: "PtgAdd", f: st }, 4: { n: "PtgSub", f: st }, 5: { n: "PtgMul", f: st }, 6: { n: "PtgDiv", f: st }, 7: { n: "PtgPower", f: st }, 8: { n: "PtgConcat", f: st }, 9: { n: "PtgLt", f: st }, 10: { n: "PtgLe", f: st }, 11: { n: "PtgEq", f: st }, 12: { n: "PtgGe", f: st }, 13: { n: "PtgGt", f: st }, 14: { n: "PtgNe", f: st }, 15: { n: "PtgIsect", f: st }, 16: { n: "PtgUnion", f: st }, 17: { n: "PtgRange", f: st }, 18: { n: "PtgUplus", f: st }, 19: { n: "PtgUminus", f: st }, 20: { n: "PtgPercent", f: st }, 21: { n: "PtgParen", f: st }, 22: { n: "PtgMissArg", f: st }, 23: { n: "PtgStr", f: W2 }, 26: { n: "PtgSheet", f: h_ }, 27: { n: "PtgEndSheet", f: d_ }, 28: { n: "PtgErr", f: B2 }, 29: { n: "PtgBool", f: M2 }, 30: { n: "PtgInt", f: L2 }, 31: { n: "PtgNum", f: U2 }, 32: { n: "PtgArray", f: w2 }, 33: { n: "PtgFunc", f: D2 }, 34: { n: "PtgFuncVar", f: O2 }, 35: { n: "PtgName", f: K2 }, 36: { n: "PtgRef", f: A2 }, 37: { n: "PtgArea", f: p2 }, 38: { n: "PtgMemArea", f: z2 }, 39: { n: "PtgMemErr", f: Z2 }, 40: { n: "PtgMemNoMem", f: J2 }, 41: { n: "PtgMemFunc", f: $2 }, 42: { n: "PtgRefErr", f: q2 }, 43: { n: "PtgAreaErr", f: m2 }, 44: { n: "PtgRefN", f: C2 }, 45: { n: "PtgAreaN", f: _2 }, 46: { n: "PtgMemAreaN", f: x_ }, 47: { n: "PtgMemNoMemN", f: p_ }, 57: { n: "PtgNameX", f: j2 }, 58: { n: "PtgRef3d", f: I2 }, 59: { n: "PtgArea3d", f: v2 }, 60: { n: "PtgRefErr3d", f: Y2 }, 61: { n: "PtgAreaErr3d", f: g2 }, 255: {} }, m_ = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, g_ = { 1: { n: "PtgElfLel", f: ih }, 2: { n: "PtgElfRw", f: f_ }, 3: { n: "PtgElfCol", f: e_ }, 6: { n: "PtgElfRwV", f: o_ }, 7: { n: "PtgElfColV", f: a_ }, 10: { n: "PtgElfRadical", f: n_ }, 11: { n: "PtgElfRadicalS", f: s_ }, 13: { n: "PtgElfColS", f: r_ }, 15: { n: "PtgElfColSV", f: t_ }, 16: { n: "PtgElfRadicalLel", f: i_ }, 25: { n: "PtgList", f: l_ }, 29: { n: "PtgSxName", f: u_ }, 255: {} }, __ = { 0: { n: "PtgAttrNoop", f: v_ }, 1: { n: "PtgAttrSemi", f: S2 }, 2: { n: "PtgAttrIf", f: E2 }, 4: { n: "PtgAttrChoose", f: y2 }, 8: { n: "PtgAttrGoto", f: k2 }, 16: { n: "PtgAttrSum", f: R2 }, 32: { n: "PtgAttrBaxcel", f: fl }, 33: { n: "PtgAttrBaxcel", f: fl }, 64: { n: "PtgAttrSpace", f: b2 }, 65: { n: "PtgAttrSpaceSemi", f: F2 }, 128: { n: "PtgAttrIfError", f: T2 }, 255: {} };
function cs(e, r, t, a) {
  if (a.biff < 8) return Wt(e, r);
  for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s) switch (t[s][0]) {
    case "PtgArray":
      t[s][1] = X2(e, 0, a), i.push(t[s][1]);
      break;
    case "PtgMemArea":
      t[s][2] = V2(e, t[s][1], a), i.push(t[s][2]);
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
  return r = n - e.l, r !== 0 && i.push(Wt(e, r)), i;
}
function ls(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; ) r = a - e.l, i = e[e.l], n = ol[i] || ol[m_[i]], (i === 24 || i === 25) && (n = (i === 24 ? g_ : __)[e[e.l + 1]]), !n || !n.f ? Wt(e, r) : s.push([n.n, n.f(e, r, t)]);
  return s;
}
function w_(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      s ? s[0] === 2 ? n.push('"' + s[1].replace(/"/g, '""') + '"') : n.push(s[1]) : n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var y_ = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function k_(e, r) {
  var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
  return t == -1 && a == -1 ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function sh(e, r, t) {
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
function cl(e, r, t) {
  var a = sh(e, r, t);
  return a == "#REF" ? a : ji(a, t);
}
function Rt(e, r, t, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 } }, f = [], o, l, h, v = 0, d = 0, x, w = "";
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
        f.push(l + y_[E[0]] + o);
        break;
      case "PtgIsect":
        o = f.pop(), l = f.pop(), f.push(l + " " + o);
        break;
      case "PtgUnion":
        o = f.pop(), l = f.pop(), f.push(l + "," + o);
        break;
      case "PtgRange":
        o = f.pop(), l = f.pop(), f.push(k_(l, o));
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
        v = E[1][1], h = Di(E[1][2], s, n), w = cl(a, v, n), f.push(w + "!" + Oi(h, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var A = E[1][0], X = E[1][1];
        A || (A = 0), A &= 127;
        var j = A == 0 ? [] : f.slice(-A);
        f.length -= A, X === "User" && (X = j.shift()), f.push(X + "(" + j.join(",") + ")");
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
        x = Bc(E[1][1], t ? { s: t } : s, n), f.push(af(x, n));
        break;
      case "PtgArea":
        x = Bc(E[1][1], s, n), f.push(af(x, n));
        break;
      case "PtgArea3d":
        v = E[1][1], x = E[1][2], w = cl(a, v, n), f.push(w + "!" + af(x, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        d = E[1][2];
        var F = (a.names || [])[d - 1] || (a[0] || [])[d], M = F ? F.Name : "SH33TJSNAME" + String(d);
        M && M.slice(0, 6) == "_xlfn." && !n.xlfn && (M = M.slice(6)), f.push(M);
        break;
      case "PtgNameX":
        var U = E[1][1];
        d = E[1][2];
        var B;
        if (n.biff <= 5) U < 0 && (U = -U), a[U] && (B = a[U][d]);
        else {
          var K = "";
          if (((a[U] || [])[0] || [])[0] == 14849 || (((a[U] || [])[0] || [])[0] == 1025 ? a[U][d] && a[U][d].itab > 0 && (K = a.SheetNames[a[U][d].itab - 1] + "!") : K = a.SheetNames[d - 1] + "!"), a[U] && a[U][d]) K += a[U][d].Name;
          else if (a[0] && a[0][d]) K += a[0][d].Name;
          else {
            var J = (sh(a, U, n) || "").split(";;");
            J[d - 1] ? K = J[d - 1] : K += "SH33TJSERRX";
          }
          f.push(K);
          break;
        }
        B || (B = { Name: "SH33TJSERRY" }), f.push(B.Name);
        break;
      case "PtgParen":
        var ie = "(", Ie = ")";
        if (y >= 0) {
          switch (m = "", e[0][y][1][0]) {
            case 2:
              ie = Cr(" ", e[0][y][1][1]) + ie;
              break;
            case 3:
              ie = Cr("\r", e[0][y][1][1]) + ie;
              break;
            case 4:
              Ie = Cr(" ", e[0][y][1][1]) + Ie;
              break;
            case 5:
              Ie = Cr("\r", e[0][y][1][1]) + Ie;
              break;
            default:
              if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          y = -1;
        }
        f.push(ie + f.pop() + Ie);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        h = { c: E[1][1], r: E[1][0] };
        var ve = { c: t.c, r: t.r };
        if (a.sharedf[yr(h)]) {
          var Ve = a.sharedf[yr(h)];
          f.push(Rt(Ve, s, ve, a, n));
        } else {
          var ye = false;
          for (o = 0; o != a.arrayf.length; ++o) if (l = a.arrayf[o], !(h.c < l[0].s.c || h.c > l[0].e.c) && !(h.r < l[0].s.r || h.r > l[0].e.r)) {
            f.push(Rt(l[1], s, ve, a, n)), ye = true;
            break;
          }
          ye || f.push(E[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + w_(E[1]) + "}");
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
function E_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Wt(e, r - 2)];
  var f = ls(e, s, t);
  return r !== s + n && (i = cs(e, r - s - n, f, t)), e.l = a, [f, i];
}
function T_(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Wt(e, r - 2)];
  var f = ls(e, s, t);
  return r !== s + n && (i = cs(e, r - s - n, f, t)), e.l = a, [f, i];
}
function S_(e, r, t, a) {
  var n = e.l + r, i = ls(e, a, t), s;
  return n !== e.l && (s = cs(e, n - e.l, i, t)), [i, s];
}
function b_(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = ls(e, i, t);
  return i == 65535 ? [[], Wt(e, r - 2)] : (r !== i + 2 && (n = cs(e, a - i - 2, s, t)), [s, n]);
}
function F_(e) {
  var r;
  if (Ka(e, e.l + 6) !== 65535) return [Bt(e), "n"];
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
function A_(e) {
  if (e == null) {
    var r = ce(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return Pn(e);
  return Pn(0);
}
function uf(e, r, t) {
  var a = e.l + r, n = ka(e, 6, t), i = F_(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = T_(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function C_(e, r, t, a, n) {
  var i = Ln(r, t, n), s = A_(e.v), f = ce(6), o = 33;
  f.write_shift(2, o), f.write_shift(4, 0);
  for (var l = ce(e.bf.length), h = 0; h < e.bf.length; ++h) l[h] = e.bf[h];
  var v = rt([i, s, f, l]);
  return v;
}
function _0(e, r, t) {
  var a = e.read_shift(4), n = ls(e, a, t), i = e.read_shift(4), s = i > 0 ? cs(e, i, n, t) : null;
  return [n, s];
}
var I_ = _0, w0 = _0, D_ = _0, O_ = _0;
function ll(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var r = ce(11);
    return r.write_shift(4, 3), r.write_shift(1, 30), r.write_shift(2, e), r.write_shift(4, 0), r;
  }
  var t = ce(17);
  return t.write_shift(4, 11), t.write_shift(1, 31), t.write_shift(8, e), t.write_shift(4, 0), t;
}
function N_(e) {
  var r = ce(10);
  return r.write_shift(4, 2), r.write_shift(1, 28), r.write_shift(1, e), r.write_shift(4, 0), r;
}
function R_(e) {
  var r = ce(10);
  return r.write_shift(4, 2), r.write_shift(1, 29), r.write_shift(1, e ? 1 : 0), r.write_shift(4, 0), r;
}
function P_(e) {
  var r = ce(7);
  r.write_shift(4, 3 + 2 * e.length), r.write_shift(1, 23), r.write_shift(2, e.length);
  var t = ce(2 * e.length);
  t.write_shift(2 * e.length, e, "utf16le");
  var a = ce(4);
  return a.write_shift(4, 0), rt([r, t, a]);
}
function B_(e) {
  var r = Lr(e), t = ce(15);
  return t.write_shift(4, 7), t.write_shift(1, 36), t.write_shift(4, r.r), t.write_shift(2, r.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), t.write_shift(4, 0), t;
}
function L_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1);
  var n = Lr(e);
  a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var i = ce(17);
  return i.write_shift(4, 9), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.r), i.write_shift(2, n.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(4, 0), i;
}
function M_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = ce(17);
  return n.write_shift(4, 9), n.write_shift(1, 60), n.write_shift(2, 2 + r.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase())), n.write_shift(4, 0), n.write_shift(2, 0), n.write_shift(4, 0), n;
}
function U_(e) {
  var r = e.split(":"), t = r[0], a = ce(23);
  a.write_shift(4, 15), t = r[0];
  var n = Lr(t);
  return a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), t = r[1], n = Lr(t), a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), a.write_shift(1, 17), a.write_shift(4, 0), a;
}
function W_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = e.split(":"), i = ce(27);
  i.write_shift(4, 19);
  var s = n[0], f = Lr(s);
  return i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), s = n[1], f = Lr(s), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(o) {
    return o.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(1, 17), i.write_shift(4, 0), i;
}
function H_(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = wt(e), i = ce(23);
  return i.write_shift(4, 15), i.write_shift(1, 59), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.s.r), i.write_shift(4, n.e.r), i.write_shift(2, n.s.c), i.write_shift(2, n.e.c), i.write_shift(4, 0), i;
}
function V_(e, r) {
  if (typeof e == "number") return ll(e);
  if (typeof e == "boolean") return R_(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return N_(+_t[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return B_(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return U_(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return H_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return L_(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return W_(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return M_(e, r);
  if (/^".*"$/.test(e)) return P_(e);
  if (/^[+-]\d+$/.test(e)) return ll(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var X_ = V_, K_ = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, fh = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, j_ = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function ul(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(r, t) {
    return t.replace(/\./g, "");
  }), e = e.replace(/\$'([^']|'')+'/g, function(r) {
    return r.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(r, t) {
    return t.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? r : t;
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function G_(e) {
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
function oh(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var Pi = {}, ti = {}, Bi = typeof Map < "u";
function To(e, r, t) {
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
  return r.MDW && (Pt = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = Yi(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = f0(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = true), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function Dn(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function vn(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      cn(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = { numFmtId: a, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, i;
}
function ch(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = ir[r]);
  } catch (o) {
    if (a.WTF) throw o;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = $r(e.v)), (!a || a.cellText !== false) && e.t !== "z") try {
      if (ir[r] == null && cn(md[r] || "General", r), e.t === "e") e.w = e.w || dt[e.v];
      else if (r === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v);
      else if (e.t === "d") {
        var f = Yr(e.v, !!s);
        (f | 0) === f ? e.w = f.toString(10) : e.w = Hi(f);
      } else {
        if (e.v === void 0) return "";
        e.w = On(e.v, ti);
      }
      else e.t === "d" ? e.w = aa(r, Yr(e.v, !!s), ti) : e.w = aa(r, e.v, ti);
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
function z_(e, r, t) {
  if (e && e["!ref"]) {
    var a = Dr(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
  }
}
function $_(e, r) {
  var t = Dr(r);
  t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = xr(t));
}
var q_ = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, Y_ = /<(?:\w+:)?hyperlink [^<>]*>/mg, Z_ = /"(\w*:\w*)"/, J_ = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, Q_ = /<(?:\w+:)?autoFilter[^>]*/g, ew = /<(?:\w+:)?pageMargins[^<>]*\/>/g, lh = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function rw(e, r, t, a, n, i, s) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var f = {};
  r.dense && (f["!data"] = []);
  var o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, l = "", h = "", v = gt(e, "sheetData");
  v ? (l = e.slice(0, v.index), h = e.slice(v.index + v[0].length)) : l = h = e;
  var d = l.match(lh);
  d ? So(d[0], f, n, t) : (d = gt(l, "sheetPr")) && aw(d[0], d[1] || "", f, n, t);
  var x = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (x > 0) {
    var w = l.slice(x, x + 50).match(Z_);
    w && !(r && r.nodim) && $_(f, w[1]);
  }
  var y = gt(l, "sheetViews");
  y && y[1] && vw(y[1], n);
  var m = [];
  if (r.cellStyles) {
    var g = l.match(J_);
    g && uw(m, g);
  }
  v && _w(v[1], f, r, o, i, s, n);
  var S = h.match(Q_);
  S && (f["!autofilter"] = dw(S[0]));
  var E = [], A = h.match(q_);
  if (A) for (x = 0; x != A.length; ++x) E[x] = Dr(A[x].slice(A[x].indexOf("=") + 2));
  var X = h.match(Y_);
  X && ow(f, X, a);
  var j = h.match(ew);
  j && (f["!margins"] = cw(Ye(j[0])));
  var F;
  if ((F = h.match(/legacyDrawing r:id="(.*?)"/)) && (f["!legrel"] = F[1]), r && r.nodim && (o.s.c = o.s.r = 0), !f["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (f["!ref"] = xr(o)), r.sheetRows > 0 && f["!ref"]) {
    var M = Dr(f["!ref"]);
    r.sheetRows <= +M.e.r && (M.e.r = r.sheetRows - 1, M.e.r > o.e.r && (M.e.r = o.e.r), M.e.r < M.s.r && (M.s.r = M.e.r), M.e.c > o.e.c && (M.e.c = o.e.c), M.e.c < M.s.c && (M.s.c = M.e.c), f["!fullref"] = f["!ref"], f["!ref"] = xr(M));
  }
  return m.length > 0 && (f["!cols"] = m), E.length > 0 && (f["!merges"] = E), a["!id"][f["!legrel"]] && (f["!legdrawel"] = a["!id"][f["!legrel"]]), f;
}
function tw(e) {
  if (e.length === 0) return "";
  for (var r = '<mergeCells count="' + e.length + '">', t = 0; t != e.length; ++t) r += '<mergeCell ref="' + xr(e[t]) + '"/>';
  return r + "</mergeCells>";
}
function So(e, r, t, a) {
  var n = Ye(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Ar(Br(n.codeName)));
}
function aw(e, r, t, a, n) {
  So(e.slice(0, e.indexOf(">")), t, a, n);
}
function nw(e, r, t, a, n) {
  var i = false, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var o = r.SheetNames[t];
    try {
      r.Workbook && (o = r.Workbook.Sheets[t].CodeName || o);
    } catch {
    }
    i = true, s.codeName = Na(vr(o));
  }
  if (e && e["!outline"]) {
    var l = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (l.summaryBelow = 0), e["!outline"].left && (l.summaryRight = 0), f = (f || "") + Ae("outlinePr", null, l);
  }
  !i && !f || (n[n.length] = Ae("sheetPr", f, s));
}
var iw = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], sw = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
function fw(e) {
  var r = { sheet: 1 };
  return iw.forEach(function(t) {
    e[t] != null && e[t] && (r[t] = "1");
  }), sw.forEach(function(t) {
    e[t] != null && !e[t] && (r[t] = "0");
  }), e.password && (r.password = wo(e.password).toString(16).toUpperCase()), Ae("sheetProtection", null, r);
}
function ow(e, r, t) {
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
function cw(e) {
  var r = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
    e[t] && (r[t] = parseFloat(e[t]));
  }), r;
}
function lw(e) {
  return Dn(e), Ae("pageMargins", null, e);
}
function uw(e, r) {
  for (var t = false, a = 0; a != r.length; ++a) {
    var n = Ye(r[a], true);
    n.hidden && (n.hidden = Pr(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = true, yo(n.width)), un(n); i <= s; ) e[i++] = Vr(n);
  }
}
function hw(e, r) {
  for (var t = ["<cols>"], a, n = 0; n != r.length; ++n) (a = r[n]) && (t[t.length] = Ae("col", null, y0(n, a)));
  return t[t.length] = "</cols>", t.join("");
}
function dw(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
function xw(e, r, t, a) {
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
var pw = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g;
function vw(e, r) {
  r.Views || (r.Views = [{}]), (e.match(pw) || []).forEach(function(t, a) {
    var n = Ye(t);
    r.Views[a] || (r.Views[a] = {}), +n.zoomScale && (r.Views[a].zoom = +n.zoomScale), n.rightToLeft && Pr(n.rightToLeft) && (r.Views[a].RTL = true);
  });
}
function mw(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), Ae("sheetViews", Ae("sheetView", null, n), {});
}
function gw(e, r, t, a, n, i, s) {
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
        v = kt("v", "" + To(a.Strings, e.v, a.revStrings)), d.t = "s";
        break;
      } else d.t = "str";
      break;
  }
  if (e.t != o && (e.t = o, e.v = l), typeof e.f == "string" && e.f) {
    var w = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    v = Ae("f", vr(e.f), w) + (e.v != null ? v : "");
  }
  return e.l && (e.l.display = vr(f), t["!links"].push([r, e.l])), e.D && (d.cm = 1), Ae("c", v, d);
}
var _w = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, o, l, h, v) {
    for (var d = 0, x = "", w = [], y = [], m = 0, g = 0, S = 0, E = "", A, X, j = 0, F = 0, M, U, B = 0, K = 0, J = Array.isArray(h.CellXf), ie, Ie = [], ve = [], Ve = s["!data"] != null, ye = [], Be = {}, Qe = false, de = !!f.sheetStubs, fr = !!((v || {}).WBProps || {}).date1904, Me = i.split(r), Te = 0, ke = Me.length; Te != ke; ++Te) {
      x = Me[Te].trim();
      var Ge = x.length;
      if (Ge !== 0) {
        var ze = 0;
        e: for (d = 0; d < Ge; ++d) switch (x[d]) {
          case ">":
            if (x[d - 1] != "/") {
              ++d;
              break e;
            }
            if (f && f.cellStyles) {
              if (X = Ye(x.slice(ze, d), true), j = X.r != null ? parseInt(X.r, 10) : j + 1, F = -1, f.sheetRows && f.sheetRows < j) continue;
              Be = {}, Qe = false, X.ht && (Qe = true, Be.hpt = parseFloat(X.ht), Be.hpx = oi(Be.hpt)), X.hidden && Pr(X.hidden) && (Qe = true, Be.hidden = true), X.outlineLevel != null && (Qe = true, Be.level = +X.outlineLevel), Qe && (ye[j - 1] = Be);
            }
            break;
          case "<":
            ze = d;
            break;
        }
        if (ze >= d) break;
        if (X = Ye(x.slice(ze, d), true), j = X.r != null ? parseInt(X.r, 10) : j + 1, F = -1, !(f.sheetRows && f.sheetRows < j)) {
          f.nodim || (o.s.r > j - 1 && (o.s.r = j - 1), o.e.r < j - 1 && (o.e.r = j - 1)), f && f.cellStyles && (Be = {}, Qe = false, X.ht && (Qe = true, Be.hpt = parseFloat(X.ht), Be.hpx = oi(Be.hpt)), X.hidden && Pr(X.hidden) && (Qe = true, Be.hidden = true), X.outlineLevel != null && (Qe = true, Be.level = +X.outlineLevel), Qe && (ye[j - 1] = Be)), w = x.slice(d).split(e);
          for (var Ze = 0; Ze != w.length && w[Ze].trim().charAt(0) == "<"; ++Ze) ;
          for (w = w.slice(Ze), d = 0; d != w.length; ++d) if (x = w[d].trim(), x.length !== 0) {
            if (y = x.match(t), m = d, g = 0, S = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, y != null && y.length === 2) {
              for (m = 0, E = y[1], g = 0; g != E.length && !((S = E.charCodeAt(g) - 64) < 1 || S > 26); ++g) m = 26 * m + S;
              --m, F = m;
            } else ++F;
            for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g) ;
            if (++g, X = Ye(x.slice(0, g), true), X.r || (X.r = yr({ r: j - 1, c: F })), E = x.slice(g), A = { t: "" }, (y = gt(E, "v")) != null && y[1] !== "" && (A.v = Ar(y[1])), f.cellFormula) {
              if ((y = gt(E, "f")) != null) {
                if (y[1] == "") y[0].indexOf('t="shared"') > -1 && (U = Ye(y[0]), ve[U.si] && (A.f = il(ve[U.si][1], ve[U.si][2], X.r)));
                else if (A.f = Ar(Br(y[1]), true), f.xlfn || (A.f = sl(A.f)), y[0].indexOf('t="array"') > -1) A.F = (E.match(a) || [])[1], A.F.indexOf(":") > -1 && Ie.push([Dr(A.F), A.F]);
                else if (y[0].indexOf('t="shared"') > -1) {
                  U = Ye(y[0]);
                  var R = Ar(Br(y[1]));
                  f.xlfn || (R = sl(R)), ve[parseInt(U.si, 10)] = [U, R, X.r];
                }
              } else (y = E.match(/<f[^<>]*\/>/)) && (U = Ye(y[0]), ve[U.si] && (A.f = il(ve[U.si][1], ve[U.si][2], X.r)));
              var W = Lr(X.r);
              for (g = 0; g < Ie.length; ++g) W.r >= Ie[g][0].s.r && W.r <= Ie[g][0].e.r && W.c >= Ie[g][0].s.c && W.c <= Ie[g][0].e.c && (A.F = Ie[g][1]);
            }
            if (X.t == null && A.v === void 0) if (A.f || A.F) A.v = 0, A.t = "n";
            else if (de) A.t = "z";
            else continue;
            else A.t = X.t || "n";
            switch (o.s.c > F && (o.s.c = F), o.e.c < F && (o.e.c = F), A.t) {
              case "n":
                if (A.v == "" || A.v == null) {
                  if (!de) continue;
                  A.t = "z";
                } else A.v = parseFloat(A.v);
                break;
              case "s":
                if (typeof A.v > "u") {
                  if (!de) continue;
                  A.t = "z";
                } else M = Pi[parseInt(A.v, 10)], A.v = M.t, A.r = M.r, f.cellHTML && (A.h = M.h);
                break;
              case "str":
                A.t = "s", A.v = A.v != null ? Ar(Br(A.v), true) : "", f.cellHTML && (A.h = Ci(A.v));
                break;
              case "inlineStr":
                y = gt(E, "is"), A.t = "s", y != null && (M = _o(y[1])) ? (A.v = M.t, f.cellHTML && (A.h = M.h)) : A.v = "";
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
            if (B = K = 0, ie = null, J && X.s !== void 0 && (ie = h.CellXf[X.s], ie != null && (ie.numFmtId != null && (B = ie.numFmtId), f.cellStyles && ie.fillId != null && (K = ie.fillId))), ch(A, B, K, f, l, h, fr), f.cellDates && J && A.t == "n" && da(ir[B]) && (A.v = Ga(A.v + (fr ? 1462 : 0)), A.t = typeof A.v == "number" ? "n" : "d"), X.cm && f.xlmeta) {
              var z = (f.xlmeta.Cell || [])[+X.cm - 1];
              z && z.type == "XLDAPR" && (A.D = true);
            }
            var V;
            f.nodim && (V = Lr(X.r), o.s.r > V.r && (o.s.r = V.r), o.e.r < V.r && (o.e.r = V.r)), Ve ? (V = Lr(X.r), s["!data"][V.r] || (s["!data"][V.r] = []), s["!data"][V.r][V.c] = A) : s[X.r] = A;
          }
        }
      }
    }
    ye.length > 0 && (s["!rows"] = ye);
  };
})();
function ww(e, r, t, a) {
  var n = [], i = [], s = Dr(e["!ref"]), f = "", o, l = "", h = [], v = 0, d = 0, x = e["!rows"], w = e["!data"] != null, y = w ? e["!data"] : [], m = { r: l }, g, S = -1, E = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (d = s.s.c; d <= s.e.c; ++d) h[d] = gr(d);
  for (v = s.s.r; v <= s.e.r; ++v) {
    i = [], l = Fr(v);
    var A = w ? y[v] : [];
    for (d = s.s.c; d <= s.e.c; ++d) {
      o = h[d] + l;
      var X = w ? A[d] : e[o];
      X !== void 0 && (f = gw(X, o, e, r, t, a, E)) != null && i.push(f);
    }
    (i.length > 0 || x && x[v]) && (m = { r: l }, x && x[v] && (g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Zi(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level)), n[n.length] = Ae("row", i.join(""), m));
  }
  if (x) for (; v < x.length; ++v) x && x[v] && (m = { r: v + 1 }, g = x[v], g.hidden && (m.hidden = 1), S = -1, g.hpx ? S = Zi(g.hpx) : g.hpt && (S = g.hpt), S > -1 && (m.ht = S, m.customHeight = 1), g.level && (m.outlineLevel = g.level), n[n.length] = Ae("row", "", m));
  return n.join("");
}
function yw(e, r, t, a) {
  var n = [at, Ae("worksheet", null, { xmlns: Mn[0], "xmlns:r": ut.r })], i = t.SheetNames[e], s = 0, f = "", o = t.Sheets[i];
  o == null && (o = {});
  var l = o["!ref"] || "A1", h = Dr(l);
  if (h.e.c > 16383 || h.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + l + " exceeds format limit A1:XFD1048576");
    h.e.c = Math.min(h.e.c, 16383), h.e.r = Math.min(h.e.c, 1048575), l = xr(h);
  }
  a || (a = {}), o["!comments"] = [];
  var v = [];
  nw(o, t, e, r, n), n[n.length] = Ae("dimension", null, { ref: l }), n[n.length] = mw(o, r, e, t), r.sheetFormat && (n[n.length] = Ae("sheetFormatPr", null, { defaultRowHeight: r.sheetFormat.defaultRowHeight || "16", baseColWidth: r.sheetFormat.baseColWidth || "10", outlineLevelRow: r.sheetFormat.outlineLevelRow || "7" })), o["!cols"] != null && o["!cols"].length > 0 && (n[n.length] = hw(o, o["!cols"])), n[s = n.length] = "<sheetData/>", o["!links"] = [], o["!ref"] != null && (f = ww(o, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), o["!protect"] && (n[n.length] = fw(o["!protect"])), o["!autofilter"] != null && (n[n.length] = xw(o["!autofilter"], o, t, e)), o["!merges"] != null && o["!merges"].length > 0 && (n[n.length] = tw(o["!merges"]));
  var d = -1, x, w = -1;
  return o["!links"].length > 0 && (n[n.length] = "<hyperlinks>", o["!links"].forEach(function(y) {
    y[1].Target && (x = { ref: y[0] }, y[1].Target.charAt(0) != "#" && (w = Rr(a, -1, vr(y[1].Target).replace(/#[\s\S]*$/, ""), wr.HLINK), x["r:id"] = "rId" + w), (d = y[1].Target.indexOf("#")) > -1 && (x.location = vr(y[1].Target.slice(d + 1))), y[1].Tooltip && (x.tooltip = vr(y[1].Tooltip)), x.display = y[1].display, n[n.length] = Ae("hyperlink", null, x));
  }), n[n.length] = "</hyperlinks>"), delete o["!links"], o["!margins"] != null && (n[n.length] = lw(o["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = kt("ignoredErrors", Ae("ignoredError", null, { numberStoredAsText: 1, sqref: l }))), v.length > 0 && (w = Rr(a, -1, "../drawings/drawing" + (e + 1) + ".xml", wr.DRAW), n[n.length] = Ae("drawing", null, { "r:id": "rId" + w }), o["!drawing"] = v), o["!comments"].length > 0 && (w = Rr(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", wr.VML), n[n.length] = Ae("legacyDrawing", null, { "r:id": "rId" + w }), o["!legacy"] = w), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
}
function kw(e, r) {
  var t = {}, a = e.l + r;
  t.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (t.level = i & 7), i & 16 && (t.hidden = true), i & 32 && (t.hpt = n / 20), t;
}
function Ew(e, r, t) {
  var a = ce(145), n = (t["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Zi(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, o = a.l;
  a.l += 4;
  for (var l = { r: e, c: 0 }, h = t["!data"] != null, v = 0; v < 16; ++v) if (!(r.s.c > v + 1 << 10 || r.e.c < v << 10)) {
    for (var d = -1, x = -1, w = v << 10; w < v + 1 << 10; ++w) {
      l.c = w;
      var y = h ? (t["!data"][l.r] || [])[l.c] : t[yr(l)];
      y && (d < 0 && (d = w), x = w);
    }
    d < 0 || (++f, a.write_shift(4, d), a.write_shift(4, x));
  }
  var m = a.l;
  return a.l = o, a.write_shift(4, f), a.l = m, a.length > a.l ? a.slice(0, a.l) : a;
}
function Tw(e, r, t, a) {
  var n = Ew(a, t, r);
  (n.length > 17 || (r["!rows"] || [])[a]) && me(e, 0, n);
}
var Sw = Vn, bw = ui;
function Fw() {
}
function Aw(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = gx(e), t;
}
function Cw(e, r, t) {
  t == null && (t = ce(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return a0({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), uu(e, t), t.slice(0, t.l);
}
function Iw(e) {
  var r = pa(e);
  return [r];
}
function Dw(e, r, t) {
  return t == null && (t = ce(8)), Un(r, t);
}
function Ow(e) {
  var r = Wn(e);
  return [r];
}
function Nw(e, r, t) {
  return t == null && (t = ce(4)), Hn(r, t);
}
function Rw(e) {
  var r = pa(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Pw(e, r, t) {
  return t == null && (t = ce(9)), Un(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Bw(e) {
  var r = Wn(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Lw(e, r, t) {
  return t == null && (t = ce(5)), Hn(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Mw(e) {
  var r = pa(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function df(e, r, t) {
  return t == null && (t = ce(9)), Un(r, t), t.write_shift(1, e.v), t;
}
function Uw(e) {
  var r = Wn(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function xf(e, r, t) {
  return t == null && (t = ce(8)), Hn(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function Ww(e) {
  var r = pa(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Hw(e, r, t) {
  return t == null && (t = ce(12)), Un(r, t), t.write_shift(4, r.v), t;
}
function Vw(e) {
  var r = Wn(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Xw(e, r, t) {
  return t == null && (t = ce(8)), Hn(r, t), t.write_shift(4, r.v), t;
}
function Kw(e) {
  var r = pa(e), t = Bt(e);
  return [r, t, "n"];
}
function jw(e, r, t) {
  return t == null && (t = ce(16)), Un(r, t), Pn(e.v, t), t;
}
function uh(e) {
  var r = Wn(e), t = Bt(e);
  return [r, t, "n"];
}
function Gw(e, r, t) {
  return t == null && (t = ce(12)), Hn(r, t), Pn(e.v, t), t;
}
function zw(e) {
  var r = pa(e), t = p0(e);
  return [r, t, "n"];
}
function $w(e, r, t) {
  return t == null && (t = ce(12)), Un(r, t), hu(e.v, t), t;
}
function qw(e) {
  var r = Wn(e), t = p0(e);
  return [r, t, "n"];
}
function Yw(e, r, t) {
  return t == null && (t = ce(8)), Hn(r, t), hu(e.v, t), t;
}
function Zw(e) {
  var r = pa(e), t = uo(e);
  return [r, t, "is"];
}
function Jw(e) {
  var r = pa(e), t = Ut(e);
  return [r, t, "str"];
}
function Qw(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = ce(12 + 4 * e.v.length)), Un(r, t), ht(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function ey(e) {
  var r = Wn(e), t = Ut(e);
  return [r, t, "str"];
}
function ry(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = ce(8 + 4 * a.length)), Hn(r, t), ht(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function ty(e, r, t) {
  var a = e.l + r, n = pa(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Rt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function ay(e, r, t) {
  var a = e.l + r, n = pa(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Rt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function ny(e, r, t) {
  var a = e.l + r, n = pa(e);
  n.r = t["!row"];
  var i = Bt(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Rt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function iy(e, r, t) {
  var a = e.l + r, n = pa(e);
  n.r = t["!row"];
  var i = Ut(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = w0(e, a - e.l, t);
    s[3] = Rt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var sy = Vn, fy = ui;
function oy(e, r) {
  return r == null && (r = ce(4)), r.write_shift(4, e), r;
}
function cy(e, r) {
  var t = e.l + r, a = Vn(e), n = x0(e), i = Ut(e), s = Ut(e), f = Ut(e);
  e.l = t;
  var o = { rfx: a, relId: n, loc: i, display: f };
  return s && (o.Tooltip = s), o;
}
function ly(e, r) {
  var t = ce(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  ui({ s: Lr(e[0]), e: Lr(e[0]) }, t), ho("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return ht(n || "", t), ht(e[1].Tooltip || "", t), ht("", t), t.slice(0, t.l);
}
function uy() {
}
function hy(e, r, t) {
  var a = e.l + r, n = du(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, t.cellFormula) {
    var f = I_(e, a - e.l, t);
    s[1] = f;
  } else e.l = a;
  return s;
}
function dy(e, r, t) {
  var a = e.l + r, n = Vn(e), i = [n];
  if (t.cellFormula) {
    var s = O_(e, a - e.l, t);
    i[1] = s, e.l = a;
  } else e.l = a;
  return i;
}
function xy(e, r, t) {
  t == null && (t = ce(18));
  var a = y0(e, r);
  t.write_shift(-4, e), t.write_shift(-4, e), t.write_shift(4, (a.width || 10) * 256), t.write_shift(4, 0);
  var n = 0;
  return r.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), r.level && (n |= r.level << 8), t.write_shift(2, n), t;
}
var hh = ["left", "right", "top", "bottom", "header", "footer"];
function py(e) {
  var r = {};
  return hh.forEach(function(t) {
    r[t] = Bt(e);
  }), r;
}
function vy(e, r) {
  return r == null && (r = ce(48)), Dn(e), hh.forEach(function(t) {
    Pn(e[t], r);
  }), r;
}
function my(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function gy(e, r, t) {
  t == null && (t = ce(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function _y(e) {
  var r = ce(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), ui(e, r), r;
}
function wy(e, r) {
  return r == null && (r = ce(66)), r.write_shift(2, e.password ? wo(e.password) : 0), r.write_shift(4, 1), [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
    t[1] ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0) : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
  }), r;
}
function yy() {
}
function ky() {
}
function Ey(e, r, t, a, n, i, s) {
  if (!e) return e;
  var f = r || {};
  a || (a = { "!id": {} });
  var o = {};
  f.dense && (o["!data"] = []);
  var l, h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, v = false, d = false, x, w, y, m, g, S, E, A, X, j = [];
  f.biff = 12, f["!row"] = 0;
  var F = 0, M = false, U = [], B = {}, K = f.supbooks || n.supbooks || [[]];
  if (K.sharedf = B, K.arrayf = U, K.SheetNames = n.SheetNames || n.Sheets.map(function(Qe) {
    return Qe.name;
  }), !f.supbooks && (f.supbooks = K, n.Names)) for (var J = 0; J < n.Names.length; ++J) K[0][J + 1] = n.Names[J];
  var ie = [], Ie = [], ve = false;
  Ji[16] = { n: "BrtShortReal", f: uh };
  var Ve, ye = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if (Za(e, function(de, fr, Me) {
    if (!d) switch (Me) {
      case 148:
        l = de;
        break;
      case 0:
        x = de, f.sheetRows && f.sheetRows <= x.r && (d = true), A = Fr(m = x.r), f["!row"] = x.r, (de.hidden || de.hpt || de.level != null) && (de.hpt && (de.hpx = oi(de.hpt)), Ie[de.r] = de);
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
        switch (w = { t: de[2] }, de[2]) {
          case "n":
            w.v = de[1];
            break;
          case "s":
            E = Pi[de[1]], w.v = E.t, w.r = E.r;
            break;
          case "b":
            w.v = !!de[1];
            break;
          case "e":
            w.v = de[1], f.cellText !== false && (w.w = dt[w.v]);
            break;
          case "str":
            w.t = "s", w.v = de[1];
            break;
          case "is":
            w.t = "s", w.v = de[1].t;
            break;
        }
        if ((y = s.CellXf[de[0].iStyleRef]) && ch(w, y.numFmtId, null, f, i, s, ye > 0), g = de[0].c == -1 ? g + 1 : de[0].c, f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] = w) : o[gr(g) + A] = w, f.cellFormula) {
          for (M = false, F = 0; F < U.length; ++F) {
            var Te = U[F];
            x.r >= Te[0].s.r && x.r <= Te[0].e.r && g >= Te[0].s.c && g <= Te[0].e.c && (w.F = xr(Te[0]), M = true);
          }
          !M && de.length > 3 && (w.f = de[3]);
        }
        if (h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), f.cellDates && y && w.t == "n" && da(ir[y.numFmtId])) {
          var ke = Wa(w.v + ye);
          ke && (w.t = "d", w.v = new Date(Date.UTC(ke.y, ke.m - 1, ke.d, ke.H, ke.M, ke.S, ke.u)));
        }
        Ve && (Ve.type == "XLDAPR" && (w.D = true), Ve = void 0);
        break;
      case 1:
      case 12:
        if (!f.sheetStubs || v) break;
        w = { t: "z", v: void 0 }, g = de[0].c == -1 ? g + 1 : de[0].c, f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] = w) : o[gr(g) + A] = w, h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), Ve && (Ve.type == "XLDAPR" && (w.D = true), Ve = void 0);
        break;
      case 176:
        j.push(de);
        break;
      case 49:
        Ve = ((f.xlmeta || {}).Cell || [])[de - 1];
        break;
      case 494:
        var Ge = a["!id"][de.relId];
        for (Ge ? (de.Target = Ge.Target, de.loc && (de.Target += "#" + de.loc), de.Rel = Ge) : de.relId == "" && (de.Target = "#" + de.loc), m = de.rfx.s.r; m <= de.rfx.e.r; ++m) for (g = de.rfx.s.c; g <= de.rfx.e.c; ++g) f.dense ? (o["!data"][m] || (o["!data"][m] = []), o["!data"][m][g] || (o["!data"][m][g] = { t: "z", v: void 0 }), o["!data"][m][g].l = de) : (S = gr(g) + Fr(m), o[S] || (o[S] = { t: "z", v: void 0 }), o[S].l = de);
        break;
      case 426:
        if (!f.cellFormula) break;
        U.push(de), X = f.dense ? o["!data"][m][g] : o[gr(g) + A], X.f = Rt(de[1], h, { r: x.r, c: g }, K, f), X.F = xr(de[0]);
        break;
      case 427:
        if (!f.cellFormula) break;
        B[yr(de[0].s)] = de[1], X = f.dense ? o["!data"][m][g] : o[gr(g) + A], X.f = Rt(de[1], h, { r: x.r, c: g }, K, f);
        break;
      case 60:
        if (!f.cellStyles) break;
        for (; de.e >= de.s; ) ie[de.e--] = { width: de.w / 256, hidden: !!(de.flags & 1), level: de.level }, ve || (ve = true, yo(de.w / 256)), un(ie[de.e + 1]);
        break;
      case 551:
        de && (o["!legrel"] = de);
        break;
      case 161:
        o["!autofilter"] = { ref: xr(de) };
        break;
      case 476:
        o["!margins"] = de;
        break;
      case 147:
        n.Sheets[t] || (n.Sheets[t] = {}), de.name && (n.Sheets[t].CodeName = de.name), (de.above || de.left) && (o["!outline"] = { above: de.above, left: de.left });
        break;
      case 137:
        n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), de.RTL && (n.Views[0].RTL = true);
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
  return j.length > 0 && (o["!merges"] = j), ie.length > 0 && (o["!cols"] = ie), Ie.length > 0 && (o["!rows"] = Ie), a["!id"][o["!legrel"]] && (o["!legdrawel"] = a["!id"][o["!legrel"]]), o;
}
function Ty(e, r, t, a, n, i, s, f) {
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
      return n.bookSST ? (l = To(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), o.t = "s", o.v = l, s ? me(e, 18, Xw(r, o)) : me(e, 7, Hw(r, o))) : (o.t = "str", s ? me(e, 17, ry(r, o)) : me(e, 6, Qw(r, o))), true;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? me(e, 13, Yw(r, o)) : me(e, 2, $w(r, o)) : isFinite(r.v) ? s ? me(e, 16, Gw(r, o)) : me(e, 5, jw(r, o)) : (o.t = "e", isNaN(r.v) ? s ? me(e, 14, xf({ v: 36 }, o)) : me(e, 3, df({ v: 36 }, o)) : s ? me(e, 14, xf({ v: 7 }, o)) : me(e, 3, df({ v: 7 }, o))), true;
    case "b":
      return o.t = "b", s ? me(e, 15, Lw(r, o)) : me(e, 4, Pw(r, o)), true;
    case "e":
      return o.t = "e", s ? me(e, 14, xf(r, o)) : me(e, 3, df(r, o)), true;
  }
  return s ? me(e, 12, Nw(r, o)) : me(e, 1, Dw(r, o)), true;
}
function Sy(e, r, t, a, n) {
  var i = Dr(r["!ref"] || "A1"), s = "", f = [], o = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  me(e, 145);
  var l = r["!data"] != null, h = l ? r["!data"][i.s.r] : [], v = i.e.r;
  r["!rows"] && (v = Math.max(i.e.r, r["!rows"].length - 1));
  for (var d = i.s.r; d <= v; ++d) if (s = Fr(d), l && (h = r["!data"][d]), Tw(e, r, i, d), !(l && !h)) {
    var x = false;
    if (d <= i.e.r) for (var w = i.s.c; w <= i.e.c; ++w) {
      d === i.s.r && (f[w] = gr(w));
      var y = l ? h[w] : r[f[w] + s];
      if (!y) {
        x = false;
        continue;
      }
      x = Ty(e, y, d, w, a, r, x, o);
    }
  }
  me(e, 146);
}
function by(e, r) {
  !r || !r["!merges"] || (me(e, 177, oy(r["!merges"].length)), r["!merges"].forEach(function(t) {
    me(e, 176, fy(t));
  }), me(e, 178));
}
function Fy(e, r) {
  !r || !r["!cols"] || (me(e, 390), r["!cols"].forEach(function(t, a) {
    t && me(e, 60, xy(a, t));
  }), me(e, 391));
}
function Ay(e, r) {
  !r || !r["!ref"] || (me(e, 648), me(e, 649, _y(Dr(r["!ref"]))), me(e, 650));
}
function Cy(e, r, t) {
  r["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = Rr(t, -1, a[1].Target.replace(/#[\s\S]*$/, ""), wr.HLINK);
      me(e, 494, ly(a, n));
    }
  }), delete r["!links"];
}
function Iy(e, r, t, a) {
  if (r["!comments"].length > 0) {
    var n = Rr(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", wr.VML);
    me(e, 551, ho("rId" + n)), r["!legacy"] = n;
  }
}
function Dy(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : xr(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = wt(i);
    f.s.r == f.e.r && (f.e.r = wt(r["!ref"]).e.r, i = xr(f));
    for (var o = 0; o < s.length; ++o) {
      var l = s[o];
      if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == a) {
        l.Ref = ji(t.SheetNames[a]) + "!" + Ki(i);
        break;
      }
    }
    o == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: ji(t.SheetNames[a]) + "!" + Ki(i) }), me(e, 161, ui(Dr(i))), me(e, 162);
  }
}
function Oy(e, r, t) {
  me(e, 133), me(e, 137, gy(r, t)), me(e, 138), me(e, 134);
}
function Ny(e, r) {
  r["!protect"] && me(e, 535, wy(r["!protect"]));
}
function Ry(e, r, t, a) {
  var n = Mt(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var o = Dr(s["!ref"] || "A1");
  if (o.e.c > 16383 || o.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    o.e.c = Math.min(o.e.c, 16383), o.e.r = Math.min(o.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], me(n, 129), (t.vbaraw || s["!outline"]) && me(n, 147, Cw(f, s["!outline"])), me(n, 148, bw(o)), Oy(n, s, t.Workbook), Fy(n, s), Sy(n, s, e, r, t), Ny(n, s), Dy(n, s, t, e), by(n, s), Cy(n, s, a), s["!margins"] && me(n, 476, vy(s["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && Ay(n, s), Iy(n, s, e, a), me(n, 130), n.end();
}
function Py(e) {
  var r = [], t = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
    s && (r[+s[1]] = t ? +s[2] : s[2]);
  });
  var n = Ar((bn(e, "c:formatCode") || ["", "General"])[1]);
  return (to(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function By(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, o = 0, l = "A", h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (to(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(v) {
    var d = Py(v);
    h.s.r = h.s.c = 0, h.e.c = f, l = gr(f), d[0].forEach(function(x, w) {
      s["!data"] ? (s["!data"][w] || (s["!data"][w] = []), s["!data"][w][f] = { t: "n", v: x, z: d[1] }) : s[l + Fr(w)] = { t: "n", v: x, z: d[1] }, o = w;
    }), h.e.r < o && (h.e.r = o), ++f;
  }), f > 0 && (s["!ref"] = xr(h)), s;
}
function Ly(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(lh);
  return f && So(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function My(e, r) {
  e.l += 10;
  var t = Ut(e);
  return { name: t };
}
function Uy(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = false;
  return Za(e, function(o, l, h) {
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
var bo = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], Wy = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], Hy = [], Vy = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function hl(e, r) {
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
function dl(e, r) {
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
function dh(e) {
  dl(e.WBProps, bo), dl(e.CalcPr, Vy), hl(e.WBView, Wy), hl(e.Sheets, Hy), ti.date1904 = Pr(e.WBProps.date1904);
}
function Xy(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Pr(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var Ky = ":][*?/\\".split("");
function xh(e, r) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    Ky.forEach(function(t) {
      if (e.indexOf(t) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (t) {
    throw t;
  }
  return true;
}
function jy(e, r, t) {
  e.forEach(function(a, n) {
    xh(a);
    for (var i = 0; i < n; ++i) if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
    if (t) {
      var s = r && r[n] && r[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function Gy(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var r = e.Workbook && e.Workbook.Sheets || [];
  jy(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t) z_(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
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
var zy = /<\w+:workbook/;
function $y(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = false, n = "xmlns", i = {}, s = 0;
  if (e.replace(Et, function(o, l) {
    var h = Ye(o);
    switch (xa(h[0])) {
      case "<?xml":
        break;
      case "<workbook":
        o.match(zy) && (n = "xmlns" + o.match(/<(\w+):/)[1]), t.xmlns = h[n];
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
        bo.forEach(function(v) {
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
  }), Mn.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
  return dh(t), t;
}
function qy(e) {
  var r = [at];
  r[r.length] = Ae("workbook", null, { xmlns: Mn[0], "xmlns:r": ut.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (bo.forEach(function(f) {
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
function Yy(e, r) {
  var t = {};
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Of(e), t.name = Ut(e), t;
}
function Zy(e, r) {
  return r || (r = ce(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), ho(e.strRelID, r), ht(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Jy(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Ut(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function Qy(e, r) {
  r || (r = ce(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), uu(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
}
function ek(e, r) {
  var t = {};
  return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function rk(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  e.l += 1;
  var i = e.read_shift(4), s = _x(e), f, o = "";
  try {
    f = D_(e, 0, t);
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
function tk(e, r) {
  var t = ce(9), a = 0, n = e.Name;
  po.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [t, ht(n), X_(e.Ref, r)];
  if (e.Comment) i.push(Gi(e.Comment));
  else {
    var s = ce(4);
    s.write_shift(4, 4294967295), i.push(s);
  }
  return rt(i);
}
function ak(e, r) {
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = false;
  r || (r = {}), r.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Ji[16] = { n: "BrtFRTArchID$", f: ek }, Za(e, function(o, l, h) {
    switch (h) {
      case 156:
        s.SheetNames.push(o.name), t.Sheets.push(o);
        break;
      case 153:
        t.WBProps = o;
        break;
      case 39:
        o.Sheet != null && (r.SID = o.Sheet), o.Ref = o.Ptg ? Rt(o.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete o.Ptg, i.push(o);
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
  }, r), dh(t), t.Names = i, t.supbooks = s, t;
}
function nk(e, r) {
  me(e, 143);
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var a = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[t] && r.Workbook.Sheets[t].Hidden || 0, n = { Hidden: a, iTabID: t + 1, strRelID: "rId" + (t + 1), name: r.SheetNames[t] };
    me(e, 156, Zy(n));
  }
  me(e, 144);
}
function ik(e, r) {
  r || (r = ce(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return ht("SheetJS", r), ht(Ys.version, r), ht(Ys.version, r), ht("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function sk(e, r) {
  r || (r = ce(29)), r.write_shift(-4, 0), r.write_shift(-4, 460), r.write_shift(4, 28800), r.write_shift(4, 17600), r.write_shift(4, 500), r.write_shift(4, e), r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function fk(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, a = 0, n = -1, i = -1; a < t.length; ++a) !t[a] || !t[a].Hidden && n == -1 ? n = a : t[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (me(e, 135), me(e, 158, sk(n)), me(e, 136));
  }
}
function ok(e, r) {
  !r.Workbook || !r.Workbook.Names || r.Workbook.Names.forEach(function(t) {
    try {
      if (t.Flags & 14) return;
      me(e, 39, tk(t, r));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(t));
    }
  });
}
function ck(e) {
  var r = e.SheetNames.length, t = ce(12 * r + 28);
  t.write_shift(4, r + 2), t.write_shift(4, 0), t.write_shift(4, -2), t.write_shift(4, -2), t.write_shift(4, 0), t.write_shift(4, -1), t.write_shift(4, -1);
  for (var a = 0; a < r; ++a) t.write_shift(4, 0), t.write_shift(4, a), t.write_shift(4, a);
  return t;
}
function lk(e, r) {
  me(e, 353), me(e, 357), me(e, 362, ck(r)), me(e, 354);
}
function uk(e, r) {
  var t = Mt();
  return me(t, 131), me(t, 128, ik()), me(t, 153, Qy(e.Workbook && e.Workbook.WBProps || null)), fk(t, e), nk(t, e), lk(t, e), (e.Workbook || {}).Names && ok(t, e), me(t, 132), t.end();
}
function hk(e, r, t) {
  return r.slice(-4) === ".bin" ? ak(e, t) : $y(e, t);
}
function dk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Ey(e, a, t, n, i, s, f) : rw(e, a, t, n, i, s, f);
}
function xk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Uy(e, a, t, n, i) : Ly(e, a, t, n, i);
}
function pk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? f2() : o2();
}
function vk(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? i2() : s2();
}
function mk(e, r, t, a) {
  return r.slice(-4) === ".bin" ? sg(e, t, a) : zm(e, t, a);
}
function gk(e, r, t) {
  return r.slice(-4) === ".bin" ? cm(e, t) : im(e, t);
}
function _k(e, r, t) {
  return r.slice(-4) === ".bin" ? Qg(e, t) : Gg(e, t);
}
function wk(e, r, t) {
  return r.slice(-4) === ".bin" ? Hg(e) : Ug(e);
}
function yk(e, r, t, a) {
  return t.slice(-4) === ".bin" ? Vg(e, r, t, a) : void 0;
}
function kk(e, r, t) {
  return r.slice(-4) === ".bin" ? Pg(e, r, t) : Lg(e, r, t);
}
var ph = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, vh = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function va(e, r) {
  var t = e.split(/\s+/), a = [];
  if (a[0] = t[0], t.length === 1) return a;
  var n = e.match(ph), i, s, f, o;
  if (n) for (o = 0; o != n.length; ++o) i = n[o].match(vh), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function Ek(e) {
  var r = e.split(/\s+/), t = {};
  if (r.length === 1) return t;
  var a = e.match(ph), n, i, s, f;
  if (a) for (f = 0; f != a.length; ++f) n = a[f].match(vh), (i = n[1].indexOf(":")) === -1 ? t[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), t[s] = n[2].slice(1, n[2].length - 1));
  return t;
}
var Li;
function Tk(e, r, t) {
  var a = Li[e] || Ar(e);
  return a === "General" ? On(r) : aa(a, r, { date1904: !!t });
}
function Sk(e, r, t, a) {
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
function bk(e, r, t, a) {
  if (e.t !== "z") {
    if (!t || t.cellText !== false) try {
      e.t === "e" ? e.w = e.w || dt[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v) : e.w = On(e.v) : e.w = Tk(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = Li[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && da(n)) {
        var i = Wa(e.v + (a ? 1462 : 0));
        i && (e.t = "d", e.v = new Date(Date.UTC(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function Fk(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var a = r.Interior;
    a.Pattern && (a.patternType = Um[a.Pattern] || a.Pattern);
  }
  e[r.ID] = r;
}
function Ak(e, r, t, a, n, i, s, f, o, l, h) {
  var v = "General", d = a.StyleID, x = {};
  l = l || {};
  var w = [], y = 0;
  for (d === void 0 && f && (d = f.StyleID), d === void 0 && s && (d = s.StyleID); i[d] !== void 0; ) {
    var m = i[d];
    if (m.nf && (v = m.nf), m.Interior && w.push(m.Interior), !m.Parent) break;
    d = m.Parent;
  }
  switch (t.Type) {
    case "Boolean":
      a.t = "b", a.v = Pr(e);
      break;
    case "String":
      a.t = "s", a.r = Fc(Ar(e)), a.v = e.indexOf("<") > -1 ? Ar(r || e).replace(/<[^<>]*>/g, "") : a.r;
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
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = Fc(r || e));
      break;
  }
  if (bk(a, v, l, h), l.cellFormula !== false) if (a.Formula) {
    var g = Ar(a.Formula);
    g.charCodeAt(0) == 61 && (g = g.slice(1)), a.f = In(g, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = In("RC:RC", n) : a.ArrayRange && (a.F = In(a.ArrayRange, n), o.push([Dr(a.F), a.F]));
  } else for (y = 0; y < o.length; ++y) n.r >= o[y][0].s.r && n.r <= o[y][0].e.r && n.c >= o[y][0].s.c && n.c <= o[y][0].e.c && (a.F = o[y][1]);
  l.cellStyles && (w.forEach(function(S) {
    !x.patternType && S.patternType && (x.patternType = S.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function Ck(e) {
  return po.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function Ik(e) {
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
  }), i) return v4(a, t);
  Li = { "General Number": "General", "General Date": ir[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": ir[15], "Short Date": ir[14], "Long Time": ir[19], "Medium Time": ir[18], "Short Time": ir[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: ir[2], Standard: ir[4], Percent: ir[10], Scientific: ir[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var f, o = [], l, h = {}, v = [], d = {}, x = "";
  t.dense && (d["!data"] = []);
  var w = {}, y = {}, m = va('<Data ss:Type="String">'), g = 0, S = 0, E = 0, A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, X = {}, j = {}, F = "", M = 0, U = [], B = {}, K = {}, J = 0, ie = [], Ie = [], ve = {}, Ve = [], ye, Be = false, Qe = [], de = [], fr = {}, Me = 0, Te = 0, ke = { Sheets: [], WBProps: { date1904: false } }, Ge = {};
  ot.lastIndex = 0, a = ns(a, "<!--", "-->");
  for (var ze = ""; f = ot.exec(a); ) switch (f[3] = (ze = f[3]).toLowerCase()) {
    case "data":
      if (ze == "data") {
        if (f[1] === "/") {
          if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && o.push([f[3], true]);
        break;
      }
      if (o[o.length - 1][1]) break;
      f[1] === "/" ? Ak(a.slice(g, f.index), F, m, o[o.length - 1][0] == "comment" ? ve : w, { c: S, r: E }, X, Ve[S], y, Qe, t, ke.WBProps.date1904) : (F = "", m = va(f[0]), g = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/") if (Ie.length > 0 && (w.c = Ie), (!t.sheetRows || t.sheetRows > E) && w.v !== void 0 && (t.dense ? (d["!data"][E] || (d["!data"][E] = []), d["!data"][E][S] = w) : d[gr(S) + Fr(E)] = w), w.HRef && (w.l = { Target: Ar(w.HRef) }, w.HRefScreenTip && (w.l.Tooltip = w.HRefScreenTip), delete w.HRef, delete w.HRefScreenTip), (w.MergeAcross || w.MergeDown) && (Me = S + (parseInt(w.MergeAcross, 10) | 0), Te = E + (parseInt(w.MergeDown, 10) | 0), (Me > S || Te > E) && U.push({ s: { c: S, r: E }, e: { c: Me, r: Te } })), !t.sheetStubs) w.MergeAcross ? S = Me + 1 : ++S;
      else if (w.MergeAcross || w.MergeDown) {
        for (var Ze = S; Ze <= Me; ++Ze) for (var R = E; R <= Te; ++R) (Ze > S || R > E) && (t.dense ? (d["!data"][R] || (d["!data"][R] = []), d["!data"][R][Ze] = { t: "z" }) : d[gr(Ze) + Fr(R)] = { t: "z" });
        S = Me + 1;
      } else ++S;
      else w = Ek(f[0]), w.Index && (S = +w.Index - 1), S < A.s.c && (A.s.c = S), S > A.e.c && (A.e.c = S), f[0].slice(-2) === "/>" && ++S, Ie = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (E < A.s.r && (A.s.r = E), E > A.e.r && (A.e.r = E), f[0].slice(-2) === "/>" && (y = va(f[0]), y.Index && (E = +y.Index - 1)), S = 0, ++E) : (y = va(f[0]), y.Index && (E = +y.Index - 1), fr = {}, (y.AutoFitHeight == "0" || y.Height) && (fr.hpx = parseInt(y.Height, 10), fr.hpt = Zi(fr.hpx), de[E] = fr), y.Hidden == "1" && (fr.hidden = true, de[E] = fr));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
        v.push(x), A.s.r <= A.e.r && A.s.c <= A.e.c && (d["!ref"] = xr(A), t.sheetRows && t.sheetRows <= A.e.r && (d["!fullref"] = d["!ref"], A.e.r = t.sheetRows - 1, d["!ref"] = xr(A))), U.length && (d["!merges"] = U), Ve.length > 0 && (d["!cols"] = Ve), de.length > 0 && (d["!rows"] = de), h[x] = d;
      } else A = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, E = S = 0, o.push([f[3], false]), l = va(f[0]), x = Ar(l.Name), d = {}, t.dense && (d["!data"] = []), U = [], Qe = [], de = [], Ge = { name: x, Hidden: 0 }, ke.Sheets.push(Ge);
      break;
    case "table":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        o.push([f[3], false]), Ve = [], Be = false;
      }
      break;
    case "style":
      f[1] === "/" ? Fk(X, j, t) : j = va(f[0]);
      break;
    case "numberformat":
      j.nf = Ar(va(f[0]).Format || "General"), Li[j.nf] && (j.nf = Li[j.nf]);
      for (var W = 0; W != 392 && ir[W] != j.nf; ++W) ;
      if (W == 392) {
        for (W = 57; W != 392; ++W) if (ir[W] == null) {
          cn(j.nf, W);
          break;
        }
      }
      break;
    case "column":
      if (o[o.length - 1][0] !== "table" || f[1] === "/") break;
      if (ye = va(f[0]), ye.Hidden && (ye.hidden = true, delete ye.Hidden), ye.Width && (ye.wpx = parseInt(ye.Width, 10)), !Be && ye.wpx > 10) {
        Be = true, Pt = zu;
        for (var z = 0; z < Ve.length; ++z) Ve[z] && un(Ve[z]);
      }
      Be && un(ye), Ve[ye.Index - 1 || Ve.length] = ye;
      for (var V = 0; V < +ye.Span; ++V) Ve[Ve.length] = Vr(ye);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      ke.Names || (ke.Names = []);
      var ue = Ye(f[0]), D = { Name: Ck(ue.Name), Ref: In(ue.RefersTo.slice(1), { r: 0, c: 0 }) };
      ke.Sheets.length > 0 && (D.Sheet = ke.Sheets.length - 1), ke.Names.push(D);
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
      f[1] === "/" ? F += a.slice(M, f.index) : M = f.index + f[0].length;
      break;
    case "interior":
      if (!t.cellStyles) break;
      j.Interior = va(f[0]);
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
      f[1] === "/" ? Xx(B, ze, a.slice(J, f.index)) : J = f.index + f[0].length;
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
        Ik(ve), Ie.push(ve);
      } else o.push([f[3], false]), l = va(f[0]), Pr(l.ShowAlways || "0") || (Ie.hidden = true), ve = { a: l.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((l = o.pop())[0] !== f[3]) throw new Error("Bad state: " + l.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var Ce = va(f[0]);
        d["!autofilter"] = { ref: In(Ce.Range).replace(/\$/g, "") }, o.push([f[3], true]);
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
      if (o.length == 0 && f[3] == "document" || o.length == 0 && f[3] == "uof") return ml(a, t);
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
              ke.WBProps.date1904 = true;
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
              if (f[0].slice(-2) !== "/>") if (f[1] === "/") switch (a.slice(J, f.index)) {
                case "SheetHidden":
                  Ge.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  Ge.Hidden = 2;
                  break;
              }
              else J = f.index + f[0].length;
              break;
            case "header":
              d["!margins"] || Dn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].header = +Ye(f[0]).Margin);
              break;
            case "footer":
              d["!margins"] || Dn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].footer = +Ye(f[0]).Margin);
              break;
            case "pagemargins":
              var Se = Ye(f[0]);
              d["!margins"] || Dn(d["!margins"] = {}, "xlml"), isNaN(+Se.Top) || (d["!margins"].top = +Se.Top), isNaN(+Se.Left) || (d["!margins"].left = +Se.Left), isNaN(+Se.Right) || (d["!margins"].right = +Se.Right), isNaN(+Se.Bottom) || (d["!margins"].bottom = +Se.Bottom);
              break;
            case "displayrighttoleft":
              ke.Views || (ke.Views = []), ke.Views[0] || (ke.Views[0] = {}), ke.Views[0].RTL = true;
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
        f[1] === "/" ? Sk(K, ze, ie, a.slice(J, f.index)) : (ie = f, J = f.index + f[0].length);
        break;
      }
      if (t.WTF) throw "Unrecognized tag: " + f[3] + "|" + o.join("|");
  }
  var ar = {};
  return !t.bookSheets && !t.bookProps && (ar.Sheets = h), ar.SheetNames = v, ar.Workbook = ke, ar.SSF = Vr(ir), ar.Props = B, ar.Custprops = K, ar.bookType = "xlml", ar;
}
function Mf(e, r) {
  switch (Fo(r = r || {}), r.type || "base64") {
    case "base64":
      return pf(ta(e), r);
    case "binary":
    case "buffer":
    case "file":
      return pf(e, r);
    case "array":
      return pf(Ra(e), r);
  }
}
function Dk(e, r) {
  var t = [];
  return e.Props && t.push(Kx(e.Props, r)), e.Custprops && t.push(jx(e.Props, e.Custprops)), t.join("");
}
function Ok(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function Nk(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return r.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(Ae("NumberFormat", null, { "ss:Format": vr(ir[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    t.push(Ae("Style", i.join(""), s));
  }), Ae("Styles", t.join(""));
}
function mh(e) {
  return Ae("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + g0(e.Ref, { r: 0, c: 0 }) });
}
function Rk(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(mh(n)));
  }
  return Ae("Names", t.join(""));
}
function Pk(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(mh(f)));
  }
  return i.join("");
}
function Bk(e, r, t, a) {
  if (!e) return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(Ae("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(Ae("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(Ae("PageMargins", null, { "x:Bottom": e["!margins"].bottom || "0.75", "x:Left": e["!margins"].left || "0.7", "x:Right": e["!margins"].right || "0.7", "x:Top": e["!margins"].top || "0.75" })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) if (a.Workbook.Sheets[t].Hidden) n.push(Ae("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
  else {
    for (var i = 0; i < t && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i) ;
    i == t && n.push("<Selected/>");
  }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(kt("ProtectContents", "True")), e["!protect"].objects && n.push(kt("ProtectObjects", "True")), e["!protect"].scenarios && n.push(kt("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(kt("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(kt("EnableSelection", "UnlockedCells")), [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : Ae("WorksheetOptions", n.join(""), { xmlns: Qt.x });
}
function Lk(e) {
  return e.map(function(r) {
    var t = $d(r.t || ""), a = Ae("ss:Data", t, { xmlns: "http://www.w3.org/TR/REC-html40" }), n = {};
    return r.a && (n["ss:Author"] = r.a), e.hidden || (n["ss:ShowAlways"] = "1"), Ae("Comment", a, n);
  }).join("");
}
function Mk(e, r, t, a, n, i, s) {
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
      v = "String", d = zd(e.v || "");
      break;
  }
  var x = vn(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + x), f["ss:Index"] = s.c + 1;
  var w = e.v != null ? d : "", y = e.t == "z" ? "" : '<Data ss:Type="' + v + '">' + w + "</Data>";
  return (e.c || []).length > 0 && (y += Lk(e.c)), Ae("Cell", y, f);
}
function Uk(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return r && (r.hpt && !r.hpx && (r.hpx = oi(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), r.hidden && (t += ' ss:Hidden="1"')), t + ">";
}
function Wk(e, r, t, a) {
  if (!e["!ref"]) return "";
  var n = Dr(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(m, g) {
    un(m);
    var S = !!m.width, E = y0(g, m), A = { "ss:Index": g + 1 };
    S && (A["ss:Width"] = qi(E.width)), m.hidden && (A["ss:Hidden"] = "1"), f.push(Ae("Column", null, A));
  });
  for (var o = e["!data"] != null, l = { r: 0, c: 0 }, h = n.s.r; h <= n.e.r; ++h) {
    var v = [Uk(h, (e["!rows"] || [])[h])];
    l.r = h;
    for (var d = n.s.c; d <= n.e.c; ++d) {
      l.c = d;
      var x = false;
      for (s = 0; s != i.length; ++s) if (!(i[s].s.c > d) && !(i[s].s.r > h) && !(i[s].e.c < d) && !(i[s].e.r < h)) {
        (i[s].s.c != d || i[s].s.r != h) && (x = true);
        break;
      }
      if (!x) {
        var w = gr(d) + Fr(h), y = o ? (e["!data"][h] || [])[d] : e[w];
        v.push(Mk(y, w, e, r, t, a, l));
      }
    }
    v.push("</Row>"), v.length > 2 && f.push(v.join(""));
  }
  return f.join("");
}
function Hk(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? Pk(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? Wk(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(Bk(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + g0(Ki(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function Vk(e, r) {
  r || (r = {}), e.SSF || (e.SSF = Vr(ir)), e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Dk(e, r)), t.push(Ok(e)), t.push(""), t.push(Rk(e));
  for (var a = 0; a < e.SheetNames.length; ++a) t.push(Ae("Worksheet", Hk(a, r, e), { "ss:Name": vr(e.SheetNames[a]) }));
  return t[2] = Nk(e, r), at + Ae("Workbook", t.join(""), { xmlns: Qt.ss, "xmlns:o": Qt.o, "xmlns:x": Qt.x, "xmlns:ss": Qt.ss, "xmlns:dt": Qt.dt, "xmlns:html": Qt.html });
}
function Xk(e) {
  var r = {}, t = e.content;
  if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = Tx(t), t.length - t.l <= 4) return r;
  var a = t.read_shift(4);
  if (a == 0 || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4) || (a = t.read_shift(4), a !== 1907505652) || (r.UnicodeClipboardFormat = Sx(t), a = t.read_shift(4), a == 0 || a > 40)) return r;
  t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr");
}
var Kk = [60, 1084, 2066, 2165, 2175];
function jk(e, r, t, a, n) {
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
  for (var o = Ka(t, t.l), l = Uf[o], h = 0; l != null && Kk.indexOf(o) > -1; ) i = Ka(t, t.l + 2), h = t.l + 4, o == 2066 ? h += 4 : (o == 2165 || o == 2175) && (h += 12), f = t.slice(h, t.l + 4 + i), s.push(f), t.l += 4 + i, l = Uf[o = Ka(t, t.l)];
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
      e.t === "e" ? e.w = e.w || dt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Hi(e.v) : e.w = On(e.v) : e.w = aa(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && da(ir[a] || String(a))) {
      var n = Wa(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Hs(e, r, t) {
  return { v: e, ixfe: r, t };
}
function Gk(e, r) {
  var t = { opts: {} }, a = {}, n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, o = [], l = "", h = {}, v, d = "", x, w, y, m, g = {}, S = [], E, A, X = [], j = [], F = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, M = {}, U = false, B = function(je) {
    return je < 8 ? Fn[je] : je < 64 && j[je - 8] || Fn[je];
  }, K = function(je, kr) {
    var jr = je.XF.data;
    if (!(!jr || !jr.patternType || !kr || !kr.cellStyles)) {
      je.s = {}, je.s.patternType = jr.patternType;
      var zr;
      (zr = $i(B(jr.icvFore))) && (je.s.fgColor = { rgb: zr }), (zr = $i(B(jr.icvBack))) && (je.s.bgColor = { rgb: zr });
    }
  }, J = function(je, kr, jr) {
    if (!(!U && Me > 1) && !(jr.sheetRows && je.r >= jr.sheetRows)) {
      if (jr.cellStyles && kr.XF && kr.XF.data && K(kr, jr), delete kr.ixfe, delete kr.XF, v = je, d = yr(je), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), je.r < s.s.r && (s.s.r = je.r), je.c < s.s.c && (s.s.c = je.c), je.r + 1 > s.e.r && (s.e.r = je.r + 1), je.c + 1 > s.e.c && (s.e.c = je.c + 1), jr.cellFormula && kr.f) {
        for (var zr = 0; zr < S.length; ++zr) if (!(S[zr][0].s.c > je.c || S[zr][0].s.r > je.r) && !(S[zr][0].e.c < je.c || S[zr][0].e.r < je.r)) {
          kr.F = xr(S[zr][0]), (S[zr][0].s.c != je.c || S[zr][0].s.r != je.r) && delete kr.f, kr.f && (kr.f = "" + Rt(S[zr][1], s, je, de, ie));
          break;
        }
      }
      jr.dense ? (n["!data"][je.r] || (n["!data"][je.r] = []), n["!data"][je.r][je.c] = kr) : n[d] = kr;
    }
  }, ie = { enc: false, sbcch: 0, snames: [], sharedf: g, arrayf: S, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!r && !!r.cellStyles, WTF: !!r && !!r.wtf };
  r.password && (ie.password = r.password);
  var Ie, ve = [], Ve = [], ye = [], Be = [], Qe = false, de = [];
  de.SheetNames = ie.snames, de.sharedf = ie.sharedf, de.arrayf = ie.arrayf, de.names = [], de.XTI = [];
  var fr = 0, Me = 0, Te = 0, ke = [], Ge = [], ze;
  ie.codepage = 1200, ga(1200);
  for (var Ze = false; e.l < e.length - 1; ) {
    var R = e.l, W = e.read_shift(2);
    if (W === 0 && fr === 10) break;
    var z = e.l === e.length ? 0 : e.read_shift(2), V = Uf[W];
    if (Me == 0 && [9, 521, 1033, 2057].indexOf(W) == -1) break;
    if (V && V.f) {
      if (r.bookSheets && fr === 133 && W !== 133) break;
      if (fr = W, V.r === 2 || V.r == 12) {
        var ue = e.read_shift(2);
        if (z -= 2, !ie.enc && ue !== W && ((ue & 255) << 8 | ue >> 8) !== W) throw new Error("rt mismatch: " + ue + "!=" + W);
        V.r == 12 && (e.l += 10, z -= 10);
      }
      var D = {};
      if (W === 10 ? D = V.f(e, z, ie) : D = jk(W, V, e, z, ie), Me == 0 && [9, 521, 1033, 2057].indexOf(fr) === -1) continue;
      switch (W) {
        case 34:
          t.opts.Date1904 = F.WBProps.date1904 = D;
          break;
        case 134:
          t.opts.WriteProtect = true;
          break;
        case 47:
          if (ie.enc || (e.l = 0), ie.enc = D, !r.password) throw new Error("File is password-protected");
          if (D.valid == null) throw new Error("Encryption scheme unsupported");
          if (!D.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          ie.lastuser = D;
          break;
        case 66:
          var Ce = Number(D);
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
          ga(ie.codepage = Ce), Ze = true;
          break;
        case 317:
          ie.rrtabid = D;
          break;
        case 25:
          ie.winlocked = D;
          break;
        case 439:
          t.opts.RefreshAll = D;
          break;
        case 12:
          t.opts.CalcCount = D;
          break;
        case 16:
          t.opts.CalcDelta = D;
          break;
        case 17:
          t.opts.CalcIter = D;
          break;
        case 13:
          t.opts.CalcMode = D;
          break;
        case 14:
          t.opts.CalcPrecision = D;
          break;
        case 95:
          t.opts.CalcSaveRecalc = D;
          break;
        case 15:
          ie.CalcRefMode = D;
          break;
        case 2211:
          t.opts.FullCalc = D;
          break;
        case 129:
          D.fDialog && (n["!type"] = "dialog"), D.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = true), D.fRight || ((n["!outline"] || (n["!outline"] = {})).left = true);
          break;
        case 67:
        case 579:
        case 1091:
        case 224:
          X.push(D);
          break;
        case 430:
          de.push([D]), de[de.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          de[de.length - 1].push(D);
          break;
        case 24:
        case 536:
          ze = { Name: D.Name, Ref: Rt(D.rgce, s, null, de, ie) }, D.itab > 0 && (ze.Sheet = D.itab - 1), de.names.push(ze), de[0] || (de[0] = [], de[0].XTI = []), de[de.length - 1].push(D), D.Name == "_xlnm._FilterDatabase" && D.itab > 0 && D.rgce && D.rgce[0] && D.rgce[0][0] && D.rgce[0][0][0] == "PtgArea3d" && (Ge[D.itab - 1] = { ref: xr(D.rgce[0][0][1][2]) });
          break;
        case 22:
          ie.ExternCount = D;
          break;
        case 23:
          de.length == 0 && (de[0] = [], de[0].XTI = []), de[de.length - 1].XTI = de[de.length - 1].XTI.concat(D), de.XTI = de.XTI.concat(D);
          break;
        case 2196:
          if (ie.biff < 8) break;
          ze != null && (ze.Comment = D[1]);
          break;
        case 18:
          n["!protect"] = D;
          break;
        case 19:
          D !== 0 && ie.WTF && console.error("Password verifier: " + D);
          break;
        case 133:
          i[ie.biff == 4 ? ie.snames.length : D.pos] = D, ie.snames.push(D.name);
          break;
        case 10:
          {
            if (--Me ? !U : U) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = xr(s), r.sheetRows && r.sheetRows <= s.e.r) {
                  var We = s.e.r;
                  s.e.r = r.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = xr(s), s.e.r = We;
                }
                s.e.r++, s.e.c++;
              }
              ve.length > 0 && (n["!merges"] = ve), Ve.length > 0 && (n["!objects"] = Ve), ye.length > 0 && (n["!cols"] = ye), Be.length > 0 && (n["!rows"] = Be), F.Sheets.push(M);
            }
            l === "" ? h = n : a[l] = n, n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (ie.biff === 8 && (ie.biff = { 9: 2, 521: 3, 1033: 4 }[W] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[D.BIFFVer] || 8), ie.biffguess = D.BIFFVer == 0, D.BIFFVer == 0 && D.dt == 4096 && (ie.biff = 5, Ze = true, ga(ie.codepage = 28591)), ie.biff == 4 && D.dt & 256 && (U = true), ie.biff == 8 && D.BIFFVer == 0 && D.dt == 16 && (ie.biff = 2), Me++ && !U) break;
            if (n = {}, r.dense && (n["!data"] = []), ie.biff < 8 && !Ze && (Ze = true, ga(ie.codepage = r.codepage || 1252)), ie.biff == 4 && U) l = (i[ie.snames.indexOf(l) + 1] || { name: "" }).name;
            else if (ie.biff < 5 || D.BIFFVer == 0 && D.dt == 4096) {
              l === "" && (l = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Se = { pos: e.l - z, name: l };
              i[Se.pos] = Se, ie.snames.push(l);
            } else l = (i[R] || { name: "" }).name;
            D.dt == 32 && (n["!type"] = "chart"), D.dt == 64 && (n["!type"] = "macro"), ve = [], Ve = [], ie.arrayf = S = [], ye = [], Be = [], Qe = false, M = { Hidden: (i[R] || { hs: 0 }).hs, name: l };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][D.r] || [])[D.c] : n[gr(D.c) + Fr(D.r)]) && ++D.c, E = { ixfe: D.ixfe, XF: X[D.ixfe] || {}, v: D.val, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r);
          break;
        case 5:
        case 517:
          E = { ixfe: D.ixfe, XF: X[D.ixfe], v: D.val, t: D.t }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r);
          break;
        case 638:
          E = { ixfe: D.ixfe, XF: X[D.ixfe], v: D.rknum, t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r);
          break;
        case 189:
          for (var ar = D.c; ar <= D.C; ++ar) {
            var rr = D.rkrec[ar - D.c][0];
            E = { ixfe: rr, XF: X[rr], v: D.rkrec[ar - D.c][1], t: "n" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: ar, r: D.r }, E, r);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (D.val == "String") {
              f = D;
              break;
            }
            if (E = Hs(D.val, D.cell.ixfe, D.tt), E.XF = X[E.ixfe], r.cellFormula) {
              var or = D.formula;
              if (or && or[0] && or[0][0] && or[0][0][0] == "PtgExp") {
                var Ir = or[0][0][1][0], Er = or[0][0][1][1], Kr = yr({ r: Ir, c: Er });
                g[Kr] ? E.f = "" + Rt(D.formula, s, D.cell, de, ie) : E.F = ((r.dense ? (n["!data"][Ir] || [])[Er] : n[Kr]) || {}).F;
              } else E.f = "" + Rt(D.formula, s, D.cell, de, ie);
            }
            Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J(D.cell, E, r), f = D;
          }
          break;
        case 7:
        case 519:
          if (f) f.val = D, E = Hs(D, f.cell.ixfe, "s"), E.XF = X[E.ixfe], r.cellFormula && (E.f = "" + Rt(f.formula, s, f.cell, de, ie)), Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J(f.cell, E, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            S.push(D);
            var $e = yr(D[0].s);
            if (x = r.dense ? (n["!data"][D[0].s.r] || [])[D[0].s.c] : n[$e], r.cellFormula && x) {
              if (!f || !$e || !x) break;
              x.f = "" + Rt(D[1], s, D[0], de, ie), x.F = xr(D[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (d) {
              if (!f) break;
              g[yr(f.cell)] = D[0], x = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[yr(f.cell)], (x || {}).f = "" + Rt(D[0], s, v, de, ie);
            }
          }
          break;
        case 253:
          E = Hs(o[D.isst].t, D.ixfe, "s"), o[D.isst].h && (E.h = o[D.isst].h), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r);
          break;
        case 513:
          r.sheetStubs && (E = { ixfe: D.ixfe, XF: X[D.ixfe], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r));
          break;
        case 190:
          if (r.sheetStubs) for (var Tr = D.c; Tr <= D.C; ++Tr) {
            var Ne = D.ixfe[Tr - D.c];
            E = { ixfe: Ne, XF: X[Ne], t: "z" }, Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: Tr, r: D.r }, E, r);
          }
          break;
        case 214:
        case 516:
        case 4:
          E = Hs(D.val, D.ixfe, "s"), E.XF = X[E.ixfe], Te > 0 && (E.z = E.XF && E.XF.numFmtId && ke[E.XF.numFmtId] || ke[E.ixfe >> 8 & 63]), Fa(E, r, t.opts.Date1904), J({ c: D.c, r: D.r }, E, r);
          break;
        case 0:
        case 512:
          Me === 1 && (s = D);
          break;
        case 252:
          o = D;
          break;
        case 1054:
          if (ie.biff >= 3 && ie.biff <= 4) {
            ke[Te++] = D[1];
            for (var Jr = 0; Jr < Te + 163 && ir[Jr] != D[1]; ++Jr) ;
            Jr >= 163 && cn(D[1], Te + 163);
          } else cn(D[1], D[0]);
          break;
        case 30:
          {
            ke[Te++] = D;
            for (var qr = 0; qr < Te + 163 && ir[qr] != D; ++qr) ;
            qr >= 163 && cn(D, Te + 163);
          }
          break;
        case 229:
          ve = ve.concat(D);
          break;
        case 93:
          Ve[D.cmo[0]] = ie.lastobj = D;
          break;
        case 438:
          ie.lastobj.TxO = D;
          break;
        case 127:
          ie.lastobj.ImData = D;
          break;
        case 440:
          for (m = D[0].s.r; m <= D[0].e.r; ++m) for (y = D[0].s.c; y <= D[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[yr({ c: y, r: m })], x && (x.l = D[1]);
          break;
        case 2048:
          for (m = D[0].s.r; m <= D[0].e.r; ++m) for (y = D[0].s.c; y <= D[0].e.c; ++y) x = r.dense ? (n["!data"][m] || [])[y] : n[yr({ c: y, r: m })], x && x.l && (x.l.Tooltip = D[1]);
          break;
        case 28:
          {
            if (x = r.dense ? (n["!data"][D[0].r] || [])[D[0].c] : n[yr(D[0])], x || (r.dense ? (n["!data"][D[0].r] || (n["!data"][D[0].r] = []), x = n["!data"][D[0].r][D[0].c] = { t: "z" }) : x = n[yr(D[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, D[0].r), s.s.r = Math.min(s.s.r, D[0].r), s.e.c = Math.max(s.e.c, D[0].c), s.s.c = Math.min(s.s.c, D[0].c)), x.c || (x.c = []), ie.biff <= 5 && ie.biff >= 2) w = { a: "SheetJ5", t: D[1] };
            else {
              var Ur = Ve[D[2]];
              w = { a: D[1], t: Ur.TxO.t }, D[3] != null && !(D[3] & 2) && (x.c.hidden = true);
            }
            x.c.push(w);
          }
          break;
        case 2173:
          Fg(X[D.ixfe], D.ext);
          break;
        case 125:
          {
            if (!ie.cellStyles) break;
            for (; D.e >= D.s; ) ye[D.e--] = { width: D.w / 256, level: D.level || 0, hidden: !!(D.flags & 1) }, Qe || (Qe = true, yo(D.w / 256)), un(ye[D.e + 1]);
          }
          break;
        case 520:
          {
            var yt = {};
            D.level != null && (Be[D.r] = yt, yt.level = D.level), D.hidden && (Be[D.r] = yt, yt.hidden = true), D.hpt && (Be[D.r] = yt, yt.hpt = D.hpt, yt.hpx = oi(D.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || Dn(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[W]] = D;
          break;
        case 161:
          n["!margins"] || Dn(n["!margins"] = {}), n["!margins"].header = D.header, n["!margins"].footer = D.footer;
          break;
        case 574:
          D.RTL && (F.Views[0].RTL = true);
          break;
        case 146:
          j = D;
          break;
        case 2198:
          Ie = D;
          break;
        case 140:
          A = D;
          break;
        case 442:
          l ? M.CodeName = D || M.name : F.WBProps.CodeName = D || "ThisWorkbook";
          break;
      }
    } else V || console.error("Missing Info for XLS Record 0x" + W.toString(16)), e.l += z;
  }
  return t.SheetNames = Gr(i).sort(function(xt, je) {
    return Number(xt) - Number(je);
  }).map(function(xt) {
    return i[xt].name;
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && h["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = h)) : t.Preamble = h, t.Sheets && Ge.forEach(function(xt, je) {
    t.Sheets[t.SheetNames[je]]["!autofilter"] = xt;
  }), t.Strings = o, t.SSF = Vr(ir), ie.enc && (t.Encryption = ie.enc), Ie && (t.Themes = Ie), t.Metadata = {}, A !== void 0 && (t.Metadata.Country = A), de.names.length > 0 && (F.Names = de.names), t.Workbook = F, t;
}
var Mi = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function zk(e, r, t) {
  var a = sr.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = jc(a, Nf, Mi.DSI);
    for (var i in n) r[i] = n[i];
  } catch (l) {
    if (t.WTF) throw l;
  }
  var s = sr.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = jc(s, Rf, Mi.SI);
    for (var o in f) r[o] == null && (r[o] = f[o]);
  } catch (l) {
    if (t.WTF) throw l;
  }
  r.HeadingPairs && r.TitlesOfParts && (yu(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function $k(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = Ec(Nf, "n"), o = Ec(Rf, "n");
  if (e.Props) for (s = Gr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops) for (s = Gr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(o, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var l = [];
  for (i = 0; i < n.length; ++i) bu.indexOf(n[i][0]) > -1 || wu.indexOf(n[i][0]) > -1 || n[i][1] != null && l.push(n[i]);
  a.length && sr.utils.cfb_add(r, "/SummaryInformation", Gc(a, Mi.SI, o, Rf)), (t.length || l.length) && sr.utils.cfb_add(r, "/DocumentSummaryInformation", Gc(t, Mi.DSI, f, Nf, l.length ? l : null, Mi.UDI));
}
function gh(e, r) {
  r || (r = {}), Fo(r), Zf(), r.codepage && Yf(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (sr.find(e, "/encryption")) throw new Error("File is password-protected");
    t = sr.find(e, "!CompObj"), a = sr.find(e, "/Workbook") || sr.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = Kt(ta(e));
        break;
      case "binary":
        e = Kt(e);
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
  if (t && Xk(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = mr ? "buffer" : "array";
    if (a && a.content) n = Gk(a.content, r);
    else if ((i = sr.find(e, "PerfectOffice_MAIN")) && i.content) n = Cn.to_workbook(i.content, (r.type = s, r));
    else if ((i = sr.find(e, "NativeContent_MAIN")) && i.content) n = Cn.to_workbook(i.content, (r.type = s, r));
    else throw (i = sr.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && sr.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = t2(e));
  }
  var f = {};
  return e.FullPaths && zk(e, f, r), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function qk(e, r) {
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
  return sr.utils.cfb_add(a, n, wh(e, t)), t.biff == 8 && (e.Props || e.Custprops) && $k(e, a), t.biff == 8 && e.vbaraw && a2(a, sr.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Ji = { 0: { f: kw }, 1: { f: Iw }, 2: { f: zw }, 3: { f: Mw }, 4: { f: Rw }, 5: { f: Kw }, 6: { f: Jw }, 7: { f: Ww }, 8: { f: iy }, 9: { f: ny }, 10: { f: ty }, 11: { f: ay }, 12: { f: Ow }, 13: { f: qw }, 14: { f: Uw }, 15: { f: Bw }, 16: { f: uh }, 17: { f: ey }, 18: { f: Vw }, 19: { f: uo }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: rk }, 40: {}, 42: {}, 43: { f: Zm }, 44: { f: qm }, 45: { f: eg }, 46: { f: tg }, 47: { f: rg }, 48: {}, 49: { f: hx }, 50: {}, 51: { f: Ig }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: Uu }, 62: { f: Zw }, 63: { f: Wg }, 64: { f: yy }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Wt, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: my }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: Aw }, 148: { f: Sw, p: 16 }, 151: { f: uy }, 152: {}, 153: { f: Jy }, 154: {}, 155: {}, 156: { f: Yy }, 157: {}, 158: {}, 159: { T: 1, f: om }, 160: { T: -1 }, 161: { T: 1, f: Vn }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: sy }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: Ag }, 336: { T: -1 }, 337: { f: Ng, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: Of }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: Mu }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: hy }, 427: { f: dy }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: py }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: Fw }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: cy }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: Of }, 551: { f: x0 }, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: Jg }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: Yg }, 636: { T: -1 }, 637: { f: vx }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: My }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: ky }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, Uf = { 6: { f: uf }, 10: { f: fn }, 12: { f: Zr }, 13: { f: Zr }, 14: { f: et }, 15: { f: et }, 16: { f: Bt }, 17: { f: et }, 18: { f: et }, 19: { f: Zr }, 20: { f: Zc }, 21: { f: Zc }, 23: { f: Mu }, 24: { f: Qc }, 25: { f: et }, 26: {}, 27: {}, 28: { f: vv }, 29: {}, 34: { f: et }, 35: { f: Jc }, 38: { f: Bt }, 39: { f: Bt }, 40: { f: Bt }, 41: { f: Bt }, 42: { f: et }, 43: { f: et }, 47: { f: Cm }, 49: { f: Mp }, 51: { f: Zr }, 60: {}, 61: { f: Np }, 64: { f: et }, 65: { f: Lp }, 66: { f: Zr }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Zr }, 89: {}, 90: {}, 91: {}, 92: { f: kp }, 93: { f: _v }, 94: {}, 95: { f: et }, 96: {}, 97: {}, 99: { f: et }, 125: { f: Uu }, 128: { f: sv }, 129: { f: Tp }, 130: { f: Zr }, 131: { f: et }, 132: { f: et }, 133: { f: Sp }, 134: {}, 140: { f: Fv }, 141: { f: Zr }, 144: {}, 146: { f: Iv }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Zr }, 157: {}, 158: {}, 160: { f: Lv }, 161: { f: Nv }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: Zp }, 190: { f: Jp }, 193: { f: fn }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: et }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Zr }, 220: {}, 221: { f: et }, 222: {}, 224: { f: ev }, 225: { f: yp }, 226: { f: fn }, 227: {}, 229: { f: mv }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: Fp }, 253: { f: Wp }, 255: { f: Cp }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: Fu }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: et }, 353: { f: fn }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: uv }, 431: { f: et }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: kv }, 439: { f: et }, 440: { f: Ev }, 441: {}, 442: { f: ss }, 443: {}, 444: { f: Zr }, 445: {}, 446: {}, 448: { f: fn }, 449: { f: Op, r: 2 }, 450: { f: fn }, 512: { f: qc }, 513: { f: Bv }, 515: { f: cv }, 516: { f: Vp }, 517: { f: ov }, 519: { f: Mv }, 520: { f: Ip }, 523: {}, 545: { f: rl }, 549: { f: $c }, 566: {}, 574: { f: Pp }, 638: { f: Yp }, 659: {}, 1048: {}, 1054: { f: Kp }, 1084: {}, 1212: { f: dv }, 2048: { f: Sv }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: Ls }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: fn }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Dv, r: 12 }, 2173: { f: bg, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: et, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: hv, r: 12 }, 2197: {}, 2198: { f: wg, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: xv, r: 12 }, 2203: { f: fn }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: Dp }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Zr }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: Rv }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: Cv }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: qc }, 1: {}, 2: { f: Xv }, 3: { f: Hv }, 4: { f: Wv }, 5: { f: Gv }, 7: { f: jv }, 8: {}, 9: { f: Ls }, 11: {}, 22: { f: Zr }, 30: { f: Gp }, 31: {}, 32: {}, 33: { f: rl }, 36: {}, 37: { f: $c }, 50: { f: zv }, 62: {}, 52: {}, 67: { f: rv }, 68: { f: Zr }, 69: {}, 86: {}, 126: {}, 127: { f: Uv }, 135: {}, 136: {}, 137: {}, 143: { f: qv }, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: $v }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: uf }, 521: { f: Ls }, 536: { f: Qc }, 547: { f: Jc }, 561: {}, 579: { f: nv }, 1030: { f: uf }, 1033: { f: Ls }, 1091: { f: iv }, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 101: {}, 102: {}, 105: {}, 106: {}, 107: {}, 109: {}, 112: {}, 114: {}, 29282: {} };
function _e(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && oo(t) && e.push(t);
  }
}
function Yk(e, r, t, a) {
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
  var n = ce(9);
  return fs(n, e, r), Cu(t, a || "b", n), n;
}
function Zk(e, r, t) {
  var a = ce(8 + 2 * t.length);
  return fs(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function _h(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return _e(e, 28, of(a, t[1], t[2]));
    _e(e, 28, of(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) _e(e, 28, of(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
  });
}
function Jk(e, r, t, a, n, i) {
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
      n.biff == 2 && o == (o | 0) && o >= 0 && o < 65536 ? _e(e, 2, Kv(t, a, o, f, s)) : isNaN(o) ? _e(e, 5, vf(t, a, 36, "e")) : isFinite(o) ? _e(e, 3, Vv(t, a, o, f, s)) : _e(e, 5, vf(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      _e(e, 5, vf(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      _e(e, 4, Zk(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  _e(e, 1, fs(null, t, a));
}
function Qk(e, r, t, a, n) {
  var i = r["!data"] != null, s = Dr(r["!ref"] || "A1"), f = "", o = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var l = (((n || {}).Workbook || {}).WBProps || {}).date1904, h = [], v = [], d = s.s.c; d <= s.e.c; ++d) o[d] = gr(d);
  for (var x = s.s.r; x <= s.e.r; ++x) for (i && (h = r["!data"][x] || []), f = Fr(x), d = s.s.c; d <= s.e.c; ++d) {
    var w = i ? h[d] : r[o[d] + f];
    w && (Jk(e, w, x, d, a, l), w.c && v.push([w.c, x, d]));
  }
  _h(e, v);
}
function e4(e, r) {
  for (var t = r || {}, a = Mt(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  _e(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, go(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && _e(a, 34, Ot(true)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = Mt();
  return Qk(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? _e(a, 30, zp(f)) : _e(a, 1054, $p(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        _e(a, 67, tv(f));
        break;
      case 3:
        _e(a, 579, Lu(f));
        break;
      case 4:
        _e(a, 1091, av(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), _e(a, 10), a.end();
}
var ma = 1, ca = [];
function r4() {
  var e = ce(82 + 8 * ca.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * ca.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * ca.length);
    {
      e.write_shift(4, ma), e.write_shift(4, ca.length + 1);
      for (var r = 0, t = 0; t < ca.length; ++t) r += ca[t] && ca[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, ca.length);
    }
    ca.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function t4(e, r) {
  var t = [], a = 0, n = Mt(), i = ma, s;
  r.forEach(function(o, l) {
    var h = "", v = o[0].map(function(E) {
      return E.a && !h && (h = E.a), E.t;
    }).join("");
    ++ma;
    {
      var d = ce(150);
      d.write_shift(2, 15), d.write_shift(2, 61444), d.write_shift(4, 150), d.write_shift(2, 3234), d.write_shift(2, 61450), d.write_shift(4, 8), d.write_shift(4, ma), d.write_shift(4, 2560), d.write_shift(2, 227), d.write_shift(2, 61451), d.write_shift(4, 84), d.write_shift(2, 128), d.write_shift(4, 0), d.write_shift(2, 139), d.write_shift(4, 2), d.write_shift(2, 191), d.write_shift(4, 524296), d.write_shift(2, 344), d.l += 4, d.write_shift(2, 385), d.write_shift(4, 134217808), d.write_shift(2, 387), d.write_shift(4, 134217808), d.write_shift(2, 389), d.write_shift(4, 268435700), d.write_shift(2, 447), d.write_shift(4, 1048592), d.write_shift(2, 448), d.write_shift(4, 134217809), d.write_shift(2, 451), d.write_shift(4, 268435700), d.write_shift(2, 513), d.write_shift(4, 134217809), d.write_shift(2, 515), d.write_shift(4, 268435700), d.write_shift(2, 575), d.write_shift(4, 196609), d.write_shift(2, 959), d.write_shift(4, 131072 | (o[0].hidden ? 2 : 0)), d.l += 2, d.write_shift(2, 61456), d.write_shift(4, 18), d.write_shift(2, 3), d.write_shift(2, o[2] + 2), d.l += 2, d.write_shift(2, o[1] + 1), d.l += 2, d.write_shift(2, o[2] + 4), d.l += 2, d.write_shift(2, o[1] + 5), d.l += 2, d.l += 2, d.write_shift(2, 61457), d.l += 4, d.l = 150, l == 0 ? s = d : _e(n, 236, d);
    }
    a += 150;
    {
      var x = ce(52);
      x.write_shift(2, 21), x.write_shift(2, 18), x.write_shift(2, 25), x.write_shift(2, ma), x.write_shift(2, 0), x.l = 22, x.write_shift(2, 13), x.write_shift(2, 22), x.write_shift(4, 1651663474), x.write_shift(4, 2503426821), x.write_shift(4, 2150634280), x.write_shift(4, 1768515844 + ma * 256), x.write_shift(2, 0), x.write_shift(4, 0), x.l += 4, _e(n, 93, x);
    }
    {
      var w = ce(8);
      w.l += 2, w.write_shift(2, 61453), w.l += 4, _e(n, 236, w);
    }
    a += 8;
    {
      var y = ce(18);
      y.write_shift(2, 18), y.l += 8, y.write_shift(2, v.length), y.write_shift(2, 16), y.l += 4, _e(n, 438, y);
      {
        var m = ce(1 + v.length);
        m.write_shift(1, 0), m.write_shift(v.length, v, "sbcs"), _e(n, 60, m);
      }
      {
        var g = ce(16);
        g.l += 8, g.write_shift(2, v.length), g.l += 6, _e(n, 60, g);
      }
    }
    {
      var S = ce(12 + h.length);
      S.write_shift(2, o[1]), S.write_shift(2, o[2]), S.write_shift(2, 0 | (o[0].hidden ? 0 : 2)), S.write_shift(2, ma), S.write_shift(2, h.length), S.write_shift(1, 0), S.write_shift(h.length, h, "sbcs"), S.l++, t.push(S);
    }
  });
  {
    var f = ce(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, ma), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), _e(e, 236, s ? rt([f, s]) : f);
  }
  e.push(n.end()), t.forEach(function(o) {
    _e(e, 28, o);
  }), ca.push([i, r.length + 1, ma]), ++ma;
}
function a4(e, r, t) {
  _e(e, 49, Up({ sz: 12, name: "Arial" }, t));
}
function n4(e, r, t) {
  r && [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n) r[n] != null && _e(e, 1054, jp(n, r[n], t));
  });
}
function i4(e, r) {
  var t = ce(19);
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), _e(e, 2151, t), t = ce(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), Ru(Dr(r["!ref"] || "A1"), t), t.write_shift(4, 4), _e(e, 2152, t);
}
function s4(e, r) {
  for (var t = 0; t < 16; ++t) _e(e, 224, Yc({ numFmtId: 0, style: true }, 0, r));
  r.cellXfs.forEach(function(a) {
    _e(e, 224, Yc(a, 0, r));
  });
}
function f4(e, r) {
  for (var t = 0; t < r["!links"].length; ++t) {
    var a = r["!links"][t];
    _e(e, 440, Tv(a)), a[1].Tooltip && _e(e, 2048, bv(a));
  }
  delete r["!links"];
}
function o4(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function(a, n) {
      ++t <= 256 && a && _e(e, 125, Ov(y0(n, a), n));
    });
  }
}
function c4(e, r, t, a, n, i) {
  var s = 16 + vn(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    _e(e, 513, Ln(t, a, s));
    return;
  }
  if (r.bf) _e(e, 6, C_(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? Yr($r(r.v, i), i) : r.v;
      isNaN(f) ? _e(e, 517, ff(t, a, 36, s, n, "e")) : isFinite(f) ? _e(e, 515, lv(t, a, f, s)) : _e(e, 517, ff(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      _e(e, 517, ff(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var o = To(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        _e(e, 253, Hp(t, a, o, s));
      } else _e(e, 516, Xp(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      _e(e, 513, Ln(t, a, s));
  }
}
function l4(e, r, t) {
  var a = Mt(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, o = i["!data"] != null, l = r.biff == 8, h = "", v = [], d = Dr(i["!ref"] || "A1"), x = l ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= x) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + x);
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.r, x - 1);
  }
  _e(a, 2057, go(t, 16, r)), _e(a, 13, la(1)), _e(a, 12, la(100)), _e(a, 15, Ot(true)), _e(a, 17, Ot(false)), _e(a, 16, Pn(1e-3)), _e(a, 95, Ot(true)), _e(a, 42, Ot(false)), _e(a, 43, Ot(false)), _e(a, 130, la(1)), _e(a, 128, fv()), _e(a, 131, Ot(false)), _e(a, 132, Ot(false)), l && o4(a, i["!cols"]), _e(a, 512, qp(d, r));
  var w = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  l && (i["!links"] = []);
  for (var y = d.s.c; y <= d.e.c; ++y) v[y] = gr(y);
  for (var m = [], g = [], S = d.s.r; S <= d.e.r; ++S) for (o && (g = i["!data"][S] || []), h = Fr(S), y = d.s.c; y <= d.e.c; ++y) {
    var E = o ? g[y] : i[v[y] + h];
    E && (c4(a, E, S, y, r, w), l && E.l && i["!links"].push([v[y] + h, E.l]), E.c && m.push([E.c, S, y]));
  }
  var A = f.CodeName || f.name || n;
  return l ? t4(a, m) : _h(a, m), l && _e(a, 574, Bp((s.Views || [])[0])), l && (i["!merges"] || []).length && _e(a, 229, gv(i["!merges"])), l && f4(a, i), _e(a, 442, Iu(A)), l && i4(a, i), _e(a, 10), a.end();
}
function u4(e, r, t) {
  var a = Mt(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = t.biff == 8, o = t.biff == 5;
  if (_e(a, 2057, go(e, 5, t)), t.bookType == "xla" && _e(a, 135), _e(a, 225, f ? la(1200) : null), _e(a, 193, tp(2)), o && _e(a, 191), o && _e(a, 192), _e(a, 226), _e(a, 92, Ep("SheetJS", t)), _e(a, 66, la(f ? 1200 : 1252)), f && _e(a, 353, la(0)), f && _e(a, 448), _e(a, 317, Pv(e.SheetNames.length)), f && e.vbaraw && _e(a, 211), f && e.vbaraw) {
    var l = s.CodeName || "ThisWorkbook";
    _e(a, 442, Iu(l));
  }
  _e(a, 156, la(17)), _e(a, 25, Ot(false)), _e(a, 18, Ot(false)), _e(a, 19, la(0)), f && _e(a, 431, Ot(false)), f && _e(a, 444, la(0)), _e(a, 61, Rp()), _e(a, 64, Ot(false)), _e(a, 141, la(0)), _e(a, 34, Ot(Xy(e) == "true")), _e(a, 14, Ot(true)), f && _e(a, 439, Ot(false)), _e(a, 218, la(0)), a4(a, e, t), n4(a, e.SSF, t), s4(a, t), f && _e(a, 352, Ot(false));
  var h = a.end(), v = Mt();
  f && _e(v, 140, Av()), f && ca.length && _e(v, 235, r4()), f && t.Strings && Yk(v, 252, Ap(t.Strings)), _e(v, 10);
  var d = v.end(), x = Mt(), w = 0, y = 0;
  for (y = 0; y < e.SheetNames.length; ++y) w += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[y].length;
  var m = h.length + w + d.length;
  for (y = 0; y < e.SheetNames.length; ++y) {
    var g = i[y] || {};
    _e(x, 133, bp({ pos: m, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[y] }, t)), m += r[y].length;
  }
  var S = x.end();
  if (w != S.length) throw new Error("BS8 " + w + " != " + S.length);
  var E = [];
  return h.length && E.push(h), S.length && E.push(S), d.length && E.push(d), rt(E);
}
function h4(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), t.revssf = u0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), ma = 1, ca = [], t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ao(t), t.cellXfs = [], vn(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = l4(n, t, e);
  return a.unshift(u4(e, a, t)), rt(a);
}
function wh(e, r) {
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
      return h4(e, r);
    case 4:
    case 3:
    case 2:
      return e4(e, r);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function xl(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : j1, n = {};
  a && (n["!data"] = []), e = ns(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, o = s && s.index || e.length, l = Bd(e.slice(f, o), /(:?<tr[^<>]*>)/i, "<tr>"), h = -1, v = 0, d = 0, x = 0, w = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, y = [];
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
          for (var A = E, X = 0; A.charAt(0) == "<" && (X = A.indexOf(">")) > -1; ) A = A.slice(X + 1);
          for (var j = 0; j < y.length; ++j) {
            var F = y[j];
            F.s.c == v && F.s.r < h && h <= F.e.r && (v = F.e.c + 1, j = -1);
          }
          var M = Ye(E.slice(0, E.indexOf(">")));
          x = M.colspan ? +M.colspan : 1, ((d = +M.rowspan) > 1 || x > 1) && y.push({ s: { r: h, c: v }, e: { r: h + (d || 1) - 1, c: v + x - 1 } });
          var U = M.t || M["data-t"] || "";
          if (!A.length) {
            v += x;
            continue;
          }
          if (A = ql(A), w.s.r > h && (w.s.r = h), w.e.r < h && (w.e.r = h), w.s.c > v && (w.s.c = v), w.e.c < v && (w.e.c = v), !A.length) {
            v += x;
            continue;
          }
          var B = { t: "s", v: A };
          t.raw || !A.trim().length || U == "s" || (A === "TRUE" ? B = { t: "b", v: true } : A === "FALSE" ? B = { t: "b", v: false } : isNaN(ra(A)) ? isNaN(Vi(A).getDate()) ? A.charCodeAt(0) == 35 && _t[A] != null && (B.t = "e", B.w = A, B.v = _t[A]) : (B = { t: "d", v: $r(A) }, t.UTC === false && (B.v = Rn(B.v)), t.cellDates || (B = { t: "n", v: Yr(B.v) }), B.z = t.dateNF || ir[14]) : B = { t: "n", v: ra(A) }), B.cellText !== false && (B.w = A), a ? (n["!data"][h] || (n["!data"][h] = []), n["!data"][h][v] = B) : n[yr({ r: h, c: v })] = B, v += x;
        }
      }
    }
  }
  return n["!ref"] = xr(w), y.length && (n["!merges"] = y), n;
}
function d4(e, r, t, a) {
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
      var w = x && x.v != null && (x.h || Ci(x.w || (qa(x), x.w) || "")) || "";
      s = {}, l > 1 && (s.rowspan = l), h > 1 && (s.colspan = h), a.editable ? w = '<span contenteditable="true">' + w + "</span>" : x && (s["data-t"] = x && x.t || "z", x.v != null && (s["data-v"] = Ci(x.v instanceof Date ? x.v.toISOString() : x.v)), x.z != null && (s["data-z"] = x.z), x.l && (x.l.Target || "#").charAt(0) != "#" && (w = '<a href="' + Ci(x.l.Target) + '">' + w + "</a>")), s.id = (a.id || "sjs") + "-" + d, i.push(Ae("td", w, s));
    }
  }
  var y = "<tr>";
  return y + i.join("") + "</tr>";
}
var x4 = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', p4 = "</body></html>";
function v4(e, r) {
  var t = Ud(e, "table");
  if (!t || t.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) {
    var a = pn(xl(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = Do();
  return t.forEach(function(i, s) {
    us(n, xl(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function m4(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function yh(e, r) {
  var t = r || {}, a = t.header != null ? t.header : x4, n = t.footer != null ? t.footer : p4, i = [a], s = wt(e["!ref"] || "A1");
  if (i.push(m4(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(d4(e, s, f, t));
  return i.push("</table>" + n), i.join("");
}
function kh(e, r, t) {
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
  var d = [], x = 0, w = e["!rows"] || (e["!rows"] = []), y = 0, m = 0, g = 0, S = 0, E = 0, A = 0;
  for (e["!cols"] || (e["!cols"] = []); y < a.length && m < l; ++y) {
    var X = a[y];
    if (pl(X)) {
      if (n.display) continue;
      w[m] = { hidden: true };
    }
    var j = X.cells;
    for (g = S = 0; g < j.length; ++g) {
      var F = j[g];
      if (!(n.display && pl(F))) {
        var M = F.hasAttribute("data-v") ? F.getAttribute("data-v") : F.hasAttribute("v") ? F.getAttribute("v") : ql(F.innerHTML), U = F.getAttribute("data-z") || F.getAttribute("z");
        for (x = 0; x < d.length; ++x) {
          var B = d[x];
          B.s.c == S + f && B.s.r < m + s && m + s <= B.e.r && (S = B.e.c + 1 - f, x = -1);
        }
        A = +F.getAttribute("colspan") || 1, ((E = +F.getAttribute("rowspan") || 1) > 1 || A > 1) && d.push({ s: { r: m + s, c: S + f }, e: { r: m + s + (E || 1) - 1, c: S + f + (A || 1) - 1 } });
        var K = { t: "s", v: M }, J = F.getAttribute("data-t") || F.getAttribute("t") || "";
        M != null && (M.length == 0 ? K.t = J || "z" : n.raw || M.trim().length == 0 || J == "s" || (J == "e" && dt[+M] ? K = { t: "e", v: +M, w: dt[+M] } : M === "TRUE" ? K = { t: "b", v: true } : M === "FALSE" ? K = { t: "b", v: false } : isNaN(ra(M)) ? isNaN(Vi(M).getDate()) ? M.charCodeAt(0) == 35 && _t[M] != null && (K = { t: "e", v: _t[M], w: M }) : (K = { t: "d", v: $r(M) }, n.UTC && (K.v = h0(K.v)), n.cellDates || (K = { t: "n", v: Yr(K.v) }), K.z = n.dateNF || ir[14]) : K = { t: "n", v: ra(M) })), K.z === void 0 && U != null && (K.z = U);
        var ie = "", Ie = F.getElementsByTagName("A");
        if (Ie && Ie.length) for (var ve = 0; ve < Ie.length && !(Ie[ve].hasAttribute("href") && (ie = Ie[ve].getAttribute("href"), ie.charAt(0) != "#")); ++ve) ;
        ie && ie.charAt(0) != "#" && ie.slice(0, 11).toLowerCase() != "javascript:" && (K.l = { Target: ie }), i ? (e["!data"][m + s] || (e["!data"][m + s] = []), e["!data"][m + s][S + f] = K) : e[yr({ c: S + f, r: m + s })] = K, h.e.c < S + f && (h.e.c = S + f), S += A;
      }
    }
    ++m;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), h.e.r = Math.max(h.e.r, m - 1 + s), e["!ref"] = xr(h), m >= l && (e["!fullref"] = xr((h.e.r = a.length - y + m - 1 + s, h))), e;
}
function Eh(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), kh(a, e, r);
}
function g4(e, r) {
  var t = pn(Eh(e, r), r);
  return t;
}
function pl(e) {
  var r = "", t = _4(e);
  return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), r === "none";
}
function _4(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function w4(e) {
  var r = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), t = Ar(r.replace(/<[^<>]*>/g, ""));
  return [t];
}
function Th(e, r, t) {
  var a = t || {}, n = d0(e);
  ot.lastIndex = 0, n = ro(ns(n, "<!--", "-->"));
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
      l = Ye(i[0], false), o = "", o += Cr("0", +l["min-integer-digits"] || 1), Pr(l.grouping) && (o = Xa(Cr("#", Math.max(0, 4 - o.length)) + o)), (+l["min-decimal-places"] || +l["decimal-places"]) && (o += "."), +l["min-decimal-places"] && (o += Cr("0", +l["min-decimal-places"] || 1)), +l["decimal-places"] - (+l["min-decimal-places"] || 0) && (o += Cr("0", +l["decimal-places"] - (+l["min-decimal-places"] || 0))), f += o;
      break;
    case "embedded-text":
      i[1] === "/" ? h == 0 ? f += '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, h) + '"' + n.slice(v, ot.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(h) : i[0].charAt(i[0].length - 2) !== "/" && (v = ot.lastIndex, h = -+Ye(i[0], false).position || 0);
      break;
  }
  return a;
}
function Sh(e, r, t) {
  var a = r || {}, n = d0(e), i = [], s, f, o, l = "", h = 0, v, d, x = {}, w = [], y = {};
  a.dense && (y["!data"] = []);
  var m, g, S = { value: "" }, E = {}, A = "", X = 0, j = "", F = 0, M = [], U = [], B = -1, K = -1, J = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, ie = 0, Ie = t || {}, ve = {}, Ve = [], ye = {}, Be = 0, Qe = 0, de = [], fr = 1, Me = 1, Te = [], ke = { Names: [], WBProps: {} }, Ge = {}, ze = ["", ""], Ze = [], R = {}, W = "", z = 0, V = false, ue = false, D = 0;
  for (ot.lastIndex = 0, n = ro(ns(n, "<!--", "-->")); m = ot.exec(n); ) switch (m[3] = m[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      m[1] === "/" ? (J.e.c >= J.s.c && J.e.r >= J.s.r ? y["!ref"] = xr(J) : y["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= J.e.r && (y["!fullref"] = y["!ref"], J.e.r = a.sheetRows - 1, y["!ref"] = xr(J)), Ve.length && (y["!merges"] = Ve), de.length && (y["!rows"] = de), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), w.push(v.name), x[v.name] = y, ue = false) : m[0].charAt(m[0].length - 2) !== "/" && (v = Ye(m[0], false), B = K = -1, J.s.r = J.s.c = 1e7, J.e.r = J.e.c = 0, y = {}, a.dense && (y["!data"] = []), Ve = [], de = [], ue = true);
      break;
    case "table-row-group":
      m[1] === "/" ? --ie : ++ie;
      break;
    case "table-row":
    case "\u884C":
      if (m[1] === "/") {
        B += fr, fr = 1;
        break;
      }
      if (d = Ye(m[0], false), d.\u884C\u53F7 ? B = d.\u884C\u53F7 - 1 : B == -1 && (B = 0), fr = +d["number-rows-repeated"] || 1, fr < 10) for (D = 0; D < fr; ++D) ie > 0 && (de[B + D] = { level: ie });
      K = -1;
      break;
    case "covered-table-cell":
      if (m[1] !== "/") if (++K, S = Ye(m[0], false), Me = parseInt(S["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
        for (; Me-- > 0; ) a.dense ? (y["!data"][B] || (y["!data"][B] = []), y["!data"][B][K] = { t: "z" }) : y[yr({ r: B, c: K })] = { t: "z" }, ++K;
        --K;
      } else K += Me - 1;
      A = "", M = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (m[0].charAt(m[0].length - 2) === "/") ++K, S = Ye(m[0], false), Me = parseInt(S["number-columns-repeated"] || "1", 10) || 1, g = { t: "z", v: null }, S.formula && a.cellFormula != false && (g.f = ul(Ar(S.formula))), S["style-name"] && ve[S["style-name"]] && (g.z = ve[S["style-name"]]), (S.\u6570\u636E\u7C7B\u578B || S["value-type"]) == "string" && (g.t = "s", g.v = Ar(S["string-value"] || ""), a.dense ? (y["!data"][B] || (y["!data"][B] = []), y["!data"][B][K] = g) : y[gr(K) + Fr(B)] = g), K += Me - 1;
      else if (m[1] !== "/") {
        ++K, A = j = "", X = F = 0, M = [], U = [], Me = 1;
        var Ce = fr ? B + fr - 1 : B;
        if (K > J.e.c && (J.e.c = K), K < J.s.c && (J.s.c = K), B < J.s.r && (J.s.r = B), Ce > J.e.r && (J.e.r = Ce), S = Ye(m[0], false), E = jd(m[0]), Ze = [], R = {}, g = { t: S.\u6570\u636E\u7C7B\u578B || S["value-type"], v: null }, S["style-name"] && ve[S["style-name"]] && (g.z = ve[S["style-name"]]), a.cellFormula) if (S.formula && (S.formula = Ar(S.formula)), S["number-matrix-columns-spanned"] && S["number-matrix-rows-spanned"] && (Be = parseInt(S["number-matrix-rows-spanned"], 10) || 0, Qe = parseInt(S["number-matrix-columns-spanned"], 10) || 0, ye = { s: { r: B, c: K }, e: { r: B + Be - 1, c: K + Qe - 1 } }, g.F = xr(ye), Te.push([ye, g.F])), S.formula) g.f = ul(S.formula);
        else for (D = 0; D < Te.length; ++D) B >= Te[D][0].s.r && B <= Te[D][0].e.r && K >= Te[D][0].s.c && K <= Te[D][0].e.c && (g.F = Te[D][1]);
        switch ((S["number-columns-spanned"] || S["number-rows-spanned"]) && (Be = parseInt(S["number-rows-spanned"] || "1", 10) || 1, Qe = parseInt(S["number-columns-spanned"] || "1", 10) || 1, Be * Qe > 1 && (ye = { s: { r: B, c: K }, e: { r: B + Be - 1, c: K + Qe - 1 } }, Ve.push(ye))), S["number-columns-repeated"] && (Me = parseInt(S["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Pr(S["boolean-value"]) || +S["boolean-value"] >= 1;
            break;
          case "float":
            g.t = "n", g.v = parseFloat(S.value), a.cellDates && g.z && da(g.z) && (g.v = Ga(g.v + (ke.WBProps.date1904 ? 1462 : 0)), g.t = typeof g.v == "number" ? "n" : "d");
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(S.value);
            break;
          case "date":
            g.t = "d", g.v = $r(S["date-value"], ke.WBProps.date1904), a.cellDates || (g.t = "n", g.v = Yr(g.v, ke.WBProps.date1904)), g.z || (g.z = "m/d/yy");
            break;
          case "time":
            g.t = "n", g.v = bd(S["time-value"]) / 86400, a.cellDates && (g.v = Ga(g.v), g.t = typeof g.v == "number" ? "n" : "d"), g.z || (g.z = "HH:MM:SS");
            break;
          case "number":
            g.t = "n", g.v = parseFloat(S.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t) g.t = "s", S["string-value"] != null && (A = Ar(S["string-value"]), M = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (V = false, E["calcext:value-type"] == "error" && _t[A] != null && (g.t = "e", g.w = A, g.v = _t[A]), g.t === "s" && (g.v = A || "", M.length && (g.R = M), V = X == 0), Ge.Target && (g.l = Ge), Ze.length > 0 && (g.c = Ze, Ze = []), A && a.cellText !== false && (g.w = A), V && (g.t = "z", delete g.v), (!V || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= B)) for (var We = 0; We < fr; ++We) {
          if (Me = parseInt(S["number-columns-repeated"] || "1", 10), a.dense) for (y["!data"][B + We] || (y["!data"][B + We] = []), y["!data"][B + We][K] = We == 0 ? g : Vr(g); --Me > 0; ) y["!data"][B + We][K + Me] = Vr(g);
          else for (y[yr({ r: B + We, c: K })] = g; --Me > 0; ) y[yr({ r: B + We, c: K + Me })] = Vr(g);
          J.e.c <= K && (J.e.c = K);
        }
        Me = parseInt(S["number-columns-repeated"] || "1", 10), K += Me - 1, Me = 0, g = {}, A = "", M = [];
      }
      Ge = {};
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
        R.t = A, M.length && (R.R = M), R.a = W, Ze.push(R), A = j, X = F, M = U;
      } else if (m[0].charAt(m[0].length - 2) !== "/") {
        i.push([m[3], false]);
        var Se = Ye(m[0], true);
        Se.display && Pr(Se.display) || (Ze.hidden = true), j = A, F = X, U = M, A = "", X = 0, M = [];
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
      A = "", X = 0, M = [];
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
        Th(n.slice(o, ot.lastIndex), r, Ie), ot.lastIndex = ar;
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
        rr.family == "table-cell" && Ie[rr["data-style-name"]] && (ve[rr.name] = Ie[rr["data-style-name"]]);
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
      f = Ye(m[0], false), ze = hf(f["cell-range-address"]);
      var or = { Name: f.name, Ref: ze[0] + "!" + ze[1] };
      ue && (or.Sheet = w.length), ke.Names.push(or);
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
      f = Ye(m[0], false), f["date-value"] === "1904-01-01" && (ke.WBProps.date1904 = true);
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
        var Ir = w4(n.slice(X, m.index));
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
        ze = hf(Ye(m[0])["target-range-address"]), x[ze[0]]["!autofilter"] = { ref: ze[1] };
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
        if (Ge = Ye(m[0], false), !Ge.href) break;
        Ge.Target = Ar(Ge.href), delete Ge.href, Ge.Target.charAt(0) == "#" && Ge.Target.indexOf(".") > -1 ? (ze = hf(Ge.Target.slice(1)), Ge.Target = "#" + ze[0] + "!" + ze[1]) : Ge.Target.match(/^\.\.[\\\/]/) && (Ge.Target = Ge.Target.slice(3));
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
  var Er = { Sheets: x, SheetNames: w, Workbook: ke };
  return a.bookSheets && delete Er.Sheets, Er;
}
function vl(e, r) {
  r = r || {}, oa(e, "META-INF/manifest.xml") && Bx(ft(e, "META-INF/manifest.xml"), r);
  var t = jt(e, "styles.xml"), a = t && Th(Br(t)), n = jt(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = Sh(Br(n), r, a);
  return oa(e, "meta.xml") && (i.Props = gu(ft(e, "meta.xml"))), i.bookType = "ods", i;
}
function ml(e, r) {
  var t = Sh(e, r);
  return t.bookType = "fods", t;
}
var y4 = (function() {
  var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""), r = "<office:document-styles " + Xi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>";
  return function() {
    return at + r;
  };
})();
function k4(e, r) {
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
function gl(e, r, t) {
  for (var a = [], n = 0; n < e.length; ++n) {
    var i = e[n];
    i && i.Sheet == (t == -1 ? null : t) && a.push(i);
  }
  return a.length ? `      <table:named-expressions>
` + a.map(function(s) {
    var f = (t == -1 ? "$" : "") + oh(s.Ref);
    return "        " + Ae("table:named-range", null, { "table:name": s.Name, "table:cell-range-address": f, "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1") });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var _l = /* @__PURE__ */ (function() {
  var e = function(n, i) {
    return vr(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, o, l) {
    var h = [];
    h.push('      <table:table table:name="' + vr(i.SheetNames[s]) + `" table:style-name="ta1">
`);
    var v = 0, d = 0, x = wt(n["!ref"] || "A1"), w = n["!merges"] || [], y = 0, m = n["!data"] != null;
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
        for (y = 0; y != w.length; ++y) if (!(w[y].s.c > d) && !(w[y].s.r > v) && !(w[y].e.c < d) && !(w[y].e.r < v)) {
          (w[y].s.c != d || w[y].s.r != v) && (E = true), A["table:number-columns-spanned"] = w[y].e.c - w[y].s.c + 1, A["table:number-rows-spanned"] = w[y].e.r - w[y].s.r + 1;
          break;
        }
        if (E) {
          h.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var j = yr({ r: v, c: d }), F = m ? (n["!data"][v] || [])[d] : n[j];
        if (F && F.f && (A["table:formula"] = vr(G_(F.f)), F.F && F.F.slice(0, j.length) == j)) {
          var M = wt(F.F);
          A["table:number-matrix-columns-spanned"] = M.e.c - M.s.c + 1, A["table:number-matrix-rows-spanned"] = M.e.r - M.s.r + 1;
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
            X = F.w || $r(F.v, l).toISOString(), A["office:value-type"] = "date", A["office:date-value"] = $r(F.v, l).toISOString(), A["table:style-name"] = "ce1";
            break;
          default:
            h.push(r);
            continue;
        }
        var U = e(X);
        if (F.l && F.l.Target) {
          var B = F.l.Target;
          B = B.charAt(0) == "#" ? "#" + oh(B.slice(1)) : B, B.charAt(0) != "#" && !B.match(/^\w+:/) && (B = "../" + B), U = Ae("text:a", U, { "xlink:href": B.replace(/&/g, "&amp;") });
        }
        o[F.z] && (A["table:style-name"] = "ce" + o[F.z].slice(1));
        var K = Ae("text:p", U, {});
        if (F.c) {
          for (var J = "", ie = "", Ie = {}, ve = 0; ve < F.c.length; ++ve) !J && F.c[ve].a && (J = F.c[ve].a), ie += "<text:p>" + e(F.c[ve].t) + "</text:p>";
          F.c.hidden || (Ie["office:display"] = true), K = Ae("office:annotation", ie, Ie) + K;
        }
        h.push("          " + Ae("table:table-cell", K, A) + `
`);
      }
      h.push(`        </table:table-row>
`);
    }
    return (i.Workbook || {}).Names && h.push(gl(i.Workbook.Names, i.SheetNames, s)), h.push(`      </table:table>
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
          un(d), d.ods = s;
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
        if (h["!ref"]) for (var d = wt(h["!ref"]), x = 0; x <= d.e.r; ++x) for (var w = 0; w <= d.e.c; ++w) {
          var y = v ? (h["!data"][x] || [])[w] : h[yr({ r: x, c: w })];
          if (!(!y || !y.z || y.z.toLowerCase() == "general") && !o[y.z]) {
            var m = k4(y.z, "N" + l);
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
    var f = [at], o = Xi({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }), l = Xi({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
    s.bookType == "fods" ? (f.push("<office:document" + o + l + `>
`), f.push(mu().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
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
    return (i.Workbook || {}).Names && f.push(gl(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function bh(e, r) {
  if (r.bookType == "fods") return _l(e, r);
  var t = no(), a = "", n = [], i = [];
  return a = "mimetype", hr(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", hr(t, a, _l(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", hr(t, a, y4(e, r)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", hr(t, a, at + mu()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", hr(t, a, Ux(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", hr(t, a, Lx(n)), t;
}
var tt = (function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
})();
function Ya(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ya(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Br(Ra(e));
}
function Vt(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Kt(Na(e));
}
function dn(e) {
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
function E4(e, r) {
  for (var t = (e[r + 15] & 127) << 7 | e[r + 14] >> 1, a = e[r + 14] & 1, n = r + 13; n >= r; --n) a = a * 256 + e[n];
  return (e[r + 15] & 128 ? -a : a) * Math.pow(10, t - 6176);
}
function T4(e, r, t) {
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
function Fh(e) {
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(Qi(e, r));
  return t;
}
function Ah(e) {
  return dn(e.map(function(r) {
    return er(r);
  }));
}
function dr(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function Oe(e) {
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
    var l = { data: s, type: i };
    r[n] == null && (r[n] = []), r[n].push(l);
  }
  return r;
}
function tr(e) {
  var r = [];
  return e.forEach(function(t, a) {
    a != 0 && t.forEach(function(n) {
      n.data && (r.push(er(a * 8 + n.type)), n.type == 2 && r.push(er(n.data.length)), r.push(n.data));
    });
  }), dn(r);
}
function xn(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function es(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = Qi(e, a), i = Oe(e[tt](a.l, a.l + n));
    a.l += n;
    var s = { id: dr(i[1][0].data), messages: [] };
    i[2].forEach(function(f) {
      var o = Oe(f.data), l = dr(o[3][0].data);
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
      n.push(s.data), s.meta[3] = [{ type: 0, data: er(s.data.length) }], a[2].push({ data: tr(s.meta), type: 2 });
    });
    var i = tr(a);
    r.push(er(i.length)), r.push(i), n.forEach(function(s) {
      return r.push(s);
    });
  }), dn(r);
}
function S4(e, r) {
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
      n.length > 25 && (n = [dn(n)]);
    }
  }
  for (var x = 0, w = 0; w < n.length; ++w) x += n[w].length;
  if (x != a) throw new Error("Unexpected length: ".concat(x, " != ").concat(a));
  return n;
}
function rs(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, S4(a, e[tt](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : dn(r);
}
function ni(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = er(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[tt](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return dn(r);
}
var b4 = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function Ch(e, r, t, a, n) {
  var i, s, f, o, l = r & 255, h = r >> 8, v = h >= 5 ? n : a;
  e: if (t & (h > 4 ? 8 : 4) && e.t == "n" && l == 7) {
    var d = (i = v[7]) != null && i[0] ? dr(v[7][0].data) : -1;
    if (d == -1) break e;
    var x = (s = v[15]) != null && s[0] ? dr(v[15][0].data) : -1, w = (f = v[16]) != null && f[0] ? dr(v[16][0].data) : -1, y = (o = v[40]) != null && o[0] ? dr(v[40][0].data) : -1, m = e.v, g = m;
    r: if (y) {
      if (m == 0) {
        x = w = 2;
        break r;
      }
      m >= 604800 ? x = 1 : m >= 86400 ? x = 2 : m >= 3600 ? x = 4 : m >= 60 ? x = 8 : m >= 1 ? x = 16 : x = 32, Math.floor(m) != m ? w = 32 : m % 60 ? w = 16 : m % 3600 ? w = 8 : m % 86400 ? w = 4 : m % 604800 && (w = 2), w < x && (w = x);
    }
    if (x == -1 || w == -1) break e;
    var S = [], E = [];
    x == 1 && (g = m / 604800, w == 1 ? E.push('d"d"') : (g |= 0, m -= 604800 * g), S.push(g + (d == 2 ? " week" + (g == 1 ? "" : "s") : d == 1 ? "w" : ""))), x <= 2 && w >= 2 && (g = m / 86400, w > 2 && (g |= 0, m -= 86400 * g), E.push('d"d"'), S.push(g + (d == 2 ? " day" + (g == 1 ? "" : "s") : d == 1 ? "d" : ""))), x <= 4 && w >= 4 && (g = m / 3600, w > 4 && (g |= 0, m -= 3600 * g), E.push((x >= 4 ? "[h]" : "h") + '"h"'), S.push(g + (d == 2 ? " hour" + (g == 1 ? "" : "s") : d == 1 ? "h" : ""))), x <= 8 && w >= 8 && (g = m / 60, w > 8 && (g |= 0, m -= 60 * g), E.push((x >= 8 ? "[m]" : "m") + '"m"'), d == 0 ? S.push((x == 8 && w == 8 || g >= 10 ? "" : "0") + g) : S.push(g + (d == 2 ? " minute" + (g == 1 ? "" : "s") : d == 1 ? "m" : ""))), x <= 16 && w >= 16 && (g = m, w > 16 && (g |= 0, m -= g), E.push((x >= 16 ? "[s]" : "s") + '"s"'), d == 0 ? S.push((w == 16 && x == 16 || g >= 10 ? "" : "0") + g) : S.push(g + (d == 2 ? " second" + (g == 1 ? "" : "s") : d == 1 ? "s" : ""))), w >= 32 && (g = Math.round(1e3 * m), x < 32 && E.push('.000"ms"'), d == 0 ? S.push((g >= 100 ? "" : g >= 10 ? "0" : "00") + g) : S.push(g + (d == 2 ? " millisecond" + (g == 1 ? "" : "s") : d == 1 ? "ms" : ""))), e.w = S.join(d == 0 ? ":" : " "), e.z = E.join(d == 0 ? '":"' : " "), d == 0 && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
  }
}
function F4(e, r, t, a) {
  var n = Ya(e), i = n.getUint32(4, true), s = -1, f = -1, o = -1, l = NaN, h = 0, v = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
  i & 2 && (o = n.getUint32(d, true), d += 4), d += Ui(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(d, true), d += 4), d += Ui(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(d, true), d += 4), i & 32 && (l = n.getFloat64(d, true), d += 8), i & 64 && (v.setTime(v.getTime() + (h = n.getFloat64(d, true)) * 1e3), d += 8), t > 1 && (i = n.getUint32(8, true) >>> 16, i & 255 && (o == -1 && (o = n.getUint32(d, true)), d += 4));
  var x, w = e[t >= 4 ? 1 : 2];
  switch (w) {
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
  return o > -1 && Ch(x, w | t << 8, i, r.ofmt[o], r.nfmt[o]), w == 7 && (x.v /= 86400), x;
}
function A4(e, r, t) {
  var a = Ya(e);
  a.getUint32(4, true);
  var n = a.getUint32(8, true), i = 12, s = -1, f = -1, o = -1, l = NaN, h = NaN, v = 0, d = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (l = E4(e, i), i += 16), n & 2 && (h = a.getFloat64(i, true), i += 8), n & 4 && (d.setTime(d.getTime() + (v = a.getFloat64(i, true)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, true), i += 4), n & 16 && (s = a.getUint32(i, true), i += 4), i += Ui(n & 480) * 4, n & 512 && (a.getUint32(i, true), i += 4), i += Ui(n & 1024) * 4, n & 2048 && (a.getUint32(i, true), i += 4);
  var x, w = e[1];
  switch (w) {
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
  if (i += Ui(n & 4096) * 4, n & 516096 && (o == -1 && (o = a.getUint32(i, true)), i += 4), n & 524288) {
    var m = a.getUint32(i, true);
    i += 4, r.cmnt[m] && (x.c = O4(r.cmnt[m]));
  }
  return o > -1 && Ch(x, w | 1280, n >> 13, r.ofmt[o], r.nfmt[o]), w == 7 && (x.v /= 86400), x;
}
function mf(e, r) {
  var t = new Uint8Array(32), a = Ya(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && da(e.z)) {
        t[1] = 5, a.setFloat64(n, (Ga(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
        break;
      } else t[1] = 2, T4(t, n, e.v), i |= 1, n += 16;
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
  return e.c && (r.cmnt.push(N4(e.c)), a.setUint32(n, r.cmnt.length - 1, true), i |= 524288, n += 4), a.setUint32(8, i, true), t[tt](0, n);
}
function gf(e, r) {
  var t = new Uint8Array(32), a = Ya(t), n = 12, i = 0, s = "";
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
function C4(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return F4(e, r, e[0], t);
    case 5:
      return A4(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function br(e) {
  var r = Oe(e);
  return dr(r[1][0].data);
}
function Dt(e) {
  return tr([[], [{ type: 0, data: er(e) }]]);
}
function It(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? Fh(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: Ah(a) }]);
}
function Ua(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? Fh(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: Ah(a.filter(function(n) {
    return n != r;
  })) }];
}
function yn(e, r) {
  var t = Oe(r.data), a = dr(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, o, l = Oe(s.data);
    if (l[1]) {
      var h = dr(l[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[h] = ya(l[3][0].data);
          break;
        case 8:
          {
            var v = e[br(l[9][0].data)][0], d = Oe(v.data), x = e[br(d[1][0].data)][0], w = dr(x.meta[1][0].data);
            if (w != 2001) throw new Error("2000 unexpected reference to ".concat(w));
            var y = Oe(x.data), m = { v: y[3].map(function(E) {
              return ya(E.data);
            }).join("") };
            i[h] = m;
            e: if ((f = y == null ? void 0 : y[11]) != null && f[0]) {
              var g = (o = Oe(y[11][0].data)) == null ? void 0 : o[1];
              if (!g) break e;
              g.forEach(function(E) {
                var A, X, j, F = Oe(E.data);
                if ((A = F[2]) != null && A[0]) {
                  var M = e[br((X = F[2]) == null ? void 0 : X[0].data)][0], U = dr(M.meta[1][0].data);
                  switch (U) {
                    case 2032:
                      var B = Oe(M.data);
                      (j = B == null ? void 0 : B[2]) != null && j[0] && !m.l && (m.l = ya(B[2][0].data));
                      break;
                    case 2039:
                      break;
                    default:
                      console.log("unrecognized ObjectAttribute type ".concat(U));
                  }
                }
              });
            }
          }
          break;
        case 2:
          i[h] = Oe(l[6][0].data);
          break;
        case 3:
          i[h] = Oe(l[5][0].data);
          break;
        case 10:
          {
            var S = e[br(l[10][0].data)][0];
            i[h] = Ih(e, S.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function I4(e, r) {
  var t, a, n, i, s, f, o, l, h, v, d, x, w, y, m = Oe(e), g = dr(m[1][0].data) >>> 0, S = dr(m[2][0].data) >>> 0, E = ((a = (t = m[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && dr(m[8][0].data) > 0 || false, A, X;
  if ((i = (n = m[7]) == null ? void 0 : n[0]) != null && i.data && r != 0) A = (f = (s = m[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, X = (l = (o = m[6]) == null ? void 0 : o[0]) == null ? void 0 : l.data;
  else if ((v = (h = m[4]) == null ? void 0 : h[0]) != null && v.data && r != 1) A = (x = (d = m[4]) == null ? void 0 : d[0]) == null ? void 0 : x.data, X = (y = (w = m[3]) == null ? void 0 : w[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var j = E ? 4 : 1, F = Ya(A), M = [], U = 0; U < A.length / 2; ++U) {
    var B = F.getUint16(U * 2, true);
    B < 65535 && M.push([U, B]);
  }
  if (M.length != S) throw "Expected ".concat(S, " cells, found ").concat(M.length);
  var K = [];
  for (U = 0; U < M.length - 1; ++U) K[M[U][0]] = X[tt](M[U][1] * j, M[U + 1][1] * j);
  return M.length >= 1 && (K[M[M.length - 1][0]] = X[tt](M[M.length - 1][1] * j)), { R: g, cells: K };
}
function D4(e, r) {
  var t, a = Oe(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (dr(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = xn(a[5], function(s) {
    return I4(s, n);
  });
  return { nrows: dr(a[4][0].data) >>> 0, data: i.reduce(function(s, f) {
    return s[f.R] || (s[f.R] = []), f.cells.forEach(function(o, l) {
      if (s[f.R][l]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(l));
      s[f.R][l] = o;
    }), s;
  }, []) };
}
function Ih(e, r) {
  var t, a, n, i, s, f, o, l, h, v, d = { t: "", a: "" }, x = Oe(r);
  if ((a = (t = x == null ? void 0 : x[1]) == null ? void 0 : t[0]) != null && a.data && (d.t = ya((i = (n = x == null ? void 0 : x[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = x == null ? void 0 : x[3]) == null ? void 0 : s[0]) != null && f.data) {
    var w = e[br((l = (o = x == null ? void 0 : x[3]) == null ? void 0 : o[0]) == null ? void 0 : l.data)][0], y = Oe(w.data);
    (v = (h = y[1]) == null ? void 0 : h[0]) != null && v.data && (d.a = ya(y[1][0].data));
  }
  return (x == null ? void 0 : x[4]) && (d.replies = [], x[4].forEach(function(m) {
    var g = e[br(m.data)][0];
    d.replies.push(Ih(e, g.data));
  })), d;
}
function O4(e) {
  var r = [];
  return r.push({ t: e.t || "", a: e.a, T: e.replies && e.replies.length > 0 }), e.replies && e.replies.forEach(function(t) {
    r.push({ t: t.t || "", a: t.a, T: true });
  }), r;
}
function N4(e) {
  for (var r = { a: "", t: "", replies: [] }, t = 0; t < e.length; ++t) t == 0 ? (r.a = e[t].a, r.t = e[t].t) : r.replies.push({ a: e[t].a, t: e[t].t });
  return r;
}
function R4(e, r, t, a) {
  var n, i, s, f, o, l, h, v, d, x, w, y, m, g, S = Oe(r.data), E = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (E.e.r = (dr(S[6][0].data) >>> 0) - 1, E.e.r < 0) throw new Error("Invalid row varint ".concat(S[6][0].data));
  if (E.e.c = (dr(S[7][0].data) >>> 0) - 1, E.e.c < 0) throw new Error("Invalid col varint ".concat(S[7][0].data));
  t["!ref"] = xr(E);
  var A = t["!data"] != null, X = t, j = Oe(S[4][0].data), F = b4();
  (n = j[4]) != null && n[0] && (F.sst = yn(e, e[br(j[4][0].data)][0])), (i = j[6]) != null && i[0] && (F.fmla = yn(e, e[br(j[6][0].data)][0])), (s = j[11]) != null && s[0] && (F.ofmt = yn(e, e[br(j[11][0].data)][0])), (f = j[12]) != null && f[0] && (F.ferr = yn(e, e[br(j[12][0].data)][0])), (o = j[17]) != null && o[0] && (F.rsst = yn(e, e[br(j[17][0].data)][0])), (l = j[19]) != null && l[0] && (F.cmnt = yn(e, e[br(j[19][0].data)][0])), (h = j[22]) != null && h[0] && (F.nfmt = yn(e, e[br(j[22][0].data)][0]));
  var M = Oe(j[3][0].data), U = 0;
  if (!((v = j[9]) != null && v[0])) throw "NUMBERS file missing row tree";
  var B = Oe(j[9][0].data)[1].map(function(ve) {
    return Oe(ve.data);
  });
  if (B.forEach(function(ve) {
    U = dr(ve[1][0].data);
    var Ve = dr(ve[2][0].data), ye = M[1][Ve];
    if (!ye) throw "NUMBERS missing tile " + Ve;
    var Be = Oe(ye.data), Qe = e[br(Be[2][0].data)][0], de = dr(Qe.meta[1][0].data);
    if (de != 6002) throw new Error("6001 unexpected reference to ".concat(de));
    var fr = D4(e, Qe);
    fr.data.forEach(function(Me, Te) {
      Me.forEach(function(ke, Ge) {
        var ze = C4(ke, F, a);
        ze && (A ? (X["!data"][U + Te] || (X["!data"][U + Te] = []), X["!data"][U + Te][Ge] = ze) : t[gr(Ge) + Fr(U + Te)] = ze);
      });
    }), U += fr.nrows;
  }), (d = j[13]) != null && d[0]) {
    var K = e[br(j[13][0].data)][0], J = dr(K.meta[1][0].data);
    if (J != 6144) throw new Error("Expected merge type 6144, found ".concat(J));
    t["!merges"] = (x = Oe(K.data)) == null ? void 0 : x[1].map(function(ve) {
      var Ve = Oe(ve.data), ye = Ya(Oe(Ve[1][0].data)[1][0].data), Be = Ya(Oe(Ve[2][0].data)[1][0].data);
      return { s: { r: ye.getUint16(0, true), c: ye.getUint16(2, true) }, e: { r: ye.getUint16(0, true) + Be.getUint16(0, true) - 1, c: ye.getUint16(2, true) + Be.getUint16(2, true) - 1 } };
    });
  }
  if (!((w = t["!merges"]) != null && w.length) && ((y = S[47]) != null && y[0])) {
    var ie = Oe(S[47][0].data);
    if ((m = ie[2]) != null && m[0]) {
      var Ie = Oe(ie[2][0].data);
      (g = Ie[3]) != null && g[0] && (t["!merges"] = xn(Ie[3], function(ve) {
        var Ve, ye, Be, Qe, de, fr = Oe(ve), Me = Oe(fr[2][0].data), Te = Oe(Me[1][0].data);
        if ((Ve = Te[1]) != null && Ve[0]) {
          var ke = Oe(Te[1][0].data), Ge = dr(ke[1][0].data);
          if (Ge == 67) {
            var ze = Oe(ke[40][0].data);
            if (!(!((ye = ze[3]) != null && ye[0]) || !((Be = ze[4]) != null && Be[0]))) {
              var Ze = Oe(ze[3][0].data), R = Oe(ze[4][0].data), W = dr(Ze[1][0].data), z = (Qe = Ze[2]) != null && Qe[0] ? dr(Ze[2][0].data) : W, V = dr(R[1][0].data), ue = (de = R[2]) != null && de[0] ? dr(R[2][0].data) : V;
              return { s: { r: V, c: W }, e: { r: ue, c: z } };
            }
          }
        }
      }).filter(function(ve) {
        return ve != null;
      }));
    }
  }
}
function P4(e, r, t) {
  var a = Oe(r.data), n = { "!ref": "A1" };
  (t == null ? void 0 : t.dense) && (n["!data"] = []);
  var i = e[br(a[2][0].data)], s = dr(i[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return R4(e, i[0], n, t), n;
}
function B4(e, r, t) {
  var a, n = Oe(r.data), i = { name: (a = n[1]) != null && a[0] ? ya(n[1][0].data) : "", sheets: [] }, s = xn(n[2], br);
  return s.forEach(function(f) {
    e[f].forEach(function(o) {
      var l = dr(o.meta[1][0].data);
      l == 6e3 && i.sheets.push(P4(e, o, t));
    });
  }), i;
}
function L4(e, r, t) {
  var a, n = Do();
  n.Workbook = { WBProps: { date1904: true } };
  var i = Oe(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = xn(i[1], br);
  if (s.forEach(function(f) {
    e[f].forEach(function(o) {
      var l = dr(o.meta[1][0].data);
      if (l == 2) {
        var h = B4(e, o, t);
        h.sheets.forEach(function(v, d) {
          us(n, v, d == 0 ? h.name : h.name + "_" + d, true);
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
        x = rs(d.content);
      } catch (y) {
        return console.log("?? " + d.content.length + " " + (y.message || y));
      }
      var w;
      try {
        w = es(x);
      } catch (y) {
        return console.log("## " + (y.message || y));
      }
      w.forEach(function(y) {
        l[y.id] = y.messages, h.push(y.id);
      });
    }
  }), !h.length) throw new Error("File has no messages");
  if ((n = (a = (t = l == null ? void 0 : l[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && dr(l[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var v = ((o = (f = (s = (i = l == null ? void 0 : l[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : o[0].data) && dr(l[1][0].meta[1][0].data) == 1 && l[1][0];
  if (v || h.forEach(function(d) {
    l[d].forEach(function(x) {
      var w = dr(x.meta[1][0].data) >>> 0;
      if (w == 1) if (!v) v = x;
      else throw new Error("Document has multiple roots");
    });
  }), !v) throw new Error("Cannot find Document root");
  return L4(l, v, r);
}
function M4(e, r, t) {
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
  for (var h = Ya(s[7][0].data), v = 0, d = [], x = Ya(s[4][0].data), w = 0, y = [], m = 4, g = 0; g < e.length; ++g) {
    if (e[g] == null || e[g].t == "z" && !((i = e[g].c) != null && i.length) || e[g].t == "e") {
      h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535);
      continue;
    }
    h.setUint16(g * 2, v / m, true), x.setUint16(g * 2, w / m, true);
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
    d.push(S), v += S.length, y.push(E), w += E.length, ++f;
  }
  for (s[2][0].data = er(f), s[5][0].data = er(5); g < s[7][0].data.length / 2; ++g) h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535, true);
  return s[6][0].data = dn(d), s[3][0].data = dn(y), s[8] = [{ type: 0, data: er(1) }], s;
}
function Wf(e, r) {
  return { meta: [[], [{ type: 0, data: er(e) }]], data: r };
}
function Da(e, r) {
  r.last || (r.last = 927262);
  for (var t = r.last; t < 2e6; ++t) if (!r[t]) return r[r.last = t] = e, t;
  throw new Error("Too many messages");
}
function U4(e) {
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
function wl(e) {
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
function W4(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = sr.read(r.numbers, { type: "base64" }), a = U4(t), n = Oa(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = xn(Oe(n.messages[0].data)[1], br);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (V4(t, a, f + 1), n = Oa(t, a, 1), i = xn(Oe(n.messages[0].data)[1], br)), X4(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function Mr(e, r, t, a) {
  var n = sr.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = es(rs(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = ni(ai(i)), n.size = n.content.length;
}
function Oa(e, r, t) {
  var a = sr.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = es(rs(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function Hf(e, r, t) {
  e[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(r) }], [{ type: 2, data: Vt(t.replace(/-[\s\S]*$/, "")) }], [{ type: 2, data: Vt(t) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), e[1] = [{ type: 0, data: er(Math.max(r + 1, dr(e[1][0].data))) }];
}
function kn(e, r, t, a, n, i) {
  i || (i = Da({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, sr.utils.cfb_add(e, s, ni(ai([{ id: i, messages: [Wf(r, tr(t))] }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Mr(e, n, 2, function(o) {
    var l = Oe(o.messages[0].data);
    Hf(l, i || 0, f), o.messages[0].data = tr(l);
  }), i;
}
function Gt(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, l, h = Oe(f.data);
    return (o = h[3]) != null && o[0] ? ya(h[3][0].data) == n : !!((l = h[2]) != null && l[0] && ya(h[2][0].data) == n);
  }), s = Oe(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({ type: 2, data: tr([[], [{ type: 0, data: er(f) }]]) });
  }), e[3][i].data = tr(s);
}
function H4(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var o, l, h = Oe(f.data);
    return (o = h[3]) != null && o[0] ? ya(h[3][0].data) == n : !!((l = h[2]) != null && l[0] && ya(h[2][0].data) == n);
  }), s = Oe(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return dr(Oe(f.data)[1][0].data) != a;
  }), e[3][i].data = tr(s);
}
function V4(e, r, t) {
  var a = -1, n = -1, i = {};
  Mr(e, r, 1, function(o, l) {
    var h = Oe(o.messages[0].data);
    a = br(Oe(o.messages[0].data)[1][0].data), n = Da({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, It(o, n), h[1].push({ type: 2, data: Dt(n) });
    var v = Oa(e, r, a);
    v.id = n, r[1].location == r[n].location ? l.push(v) : Mr(e, r, n, function(d, x) {
      return x.push(v);
    }), o.messages[0].data = tr(h);
  });
  var s = -1;
  Mr(e, r, n, function(o, l) {
    for (var h = Oe(o.messages[0].data), v = 3; v <= 69; ++v) delete h[v];
    var d = xn(h[2], br);
    d.forEach(function(w) {
      return Ua(o, w);
    }), s = Da({ deps: [n], location: r[d[0]].location, type: r[d[0]].type }, r), It(o, s), i[d[0]] = s, h[2] = [{ type: 2, data: Dt(s) }];
    var x = Oa(e, r, d[0]);
    x.id = s, r[d[0]].location == r[n].location ? l.push(x) : (Mr(e, r, 2, function(w) {
      var y = Oe(w.messages[0].data);
      Gt(y, r, n, s), w.messages[0].data = tr(y);
    }), Mr(e, r, s, function(w, y) {
      return y.push(x);
    })), o.messages[0].data = tr(h);
  });
  var f = -1;
  Mr(e, r, s, function(o, l) {
    for (var h = Oe(o.messages[0].data), v = Oe(h[1][0].data), d = 3; d <= 69; ++d) delete v[d];
    var x = br(v[2][0].data);
    v[2][0].data = Dt(i[x]), h[1][0].data = tr(v);
    var w = br(h[2][0].data);
    Ua(o, w), f = Da({ deps: [s], location: r[w].location, type: r[w].type }, r), It(o, f), i[w] = f, h[2][0].data = Dt(f);
    var y = Oa(e, r, w);
    y.id = f, r[s].location == r[f].location ? l.push(y) : Mr(e, r, f, function(m, g) {
      return g.push(y);
    }), o.messages[0].data = tr(h);
  }), Mr(e, r, f, function(o, l) {
    var h, v, d = Oe(o.messages[0].data), x = ya(d[1][0].data), w = x.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (d[1][0].data = Vt(w), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(X) {
      return delete d[X];
    }), d[45]) {
      var y = Oe(d[45][0].data), m = br(y[1][0].data);
      Ua(o, m), delete d[45];
    }
    if (d[70]) {
      var g = Oe(d[70][0].data);
      (h = g[2]) == null || h.forEach(function(X) {
        var j = Oe(X.data);
        [2, 3].map(function(F) {
          return j[F][0];
        }).forEach(function(F) {
          var M = Oe(F.data);
          if (M[8]) {
            var U = br(M[8][0].data);
            Ua(o, U);
          }
        });
      }), delete d[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function(X) {
      if (d[X]) {
        var j = br(d[X][0].data);
        delete d[X], Ua(o, j);
      }
    });
    var S = Oe(d[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(X) {
        var j;
        if ((j = S[X]) != null && j[0]) {
          var F = br(S[X][0].data), M = Da({ deps: [f], location: r[F].location, type: r[F].type }, r);
          Ua(o, F), It(o, M), i[F] = M;
          var U = Oa(e, r, F);
          if (U.id = M, r[F].location == r[f].location) l.push(U);
          else {
            r[M].location = r[F].location.replace(F.toString(), M.toString()), r[M].location == r[F].location && (r[M].location = r[M].location.replace(/\.iwa/, "-".concat(M, ".iwa"))), sr.utils.cfb_add(e, r[M].location, ni(ai([U])));
            var B = r[M].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Mr(e, r, 2, function(K) {
              var J = Oe(K.messages[0].data);
              Hf(J, M, B), Gt(J, r, f, M), K.messages[0].data = tr(J);
            });
          }
          S[X][0].data = Dt(M);
        }
      });
      var E = Oe(S[1][0].data);
      (v = E[2]) == null || v.forEach(function(X) {
        var j = br(X.data), F = Da({ deps: [f], location: r[j].location, type: r[j].type }, r);
        Ua(o, j), It(o, F), i[j] = F;
        var M = Oa(e, r, j);
        if (M.id = F, r[j].location == r[f].location) l.push(M);
        else {
          r[F].location = r[j].location.replace(j.toString(), F.toString()), r[F].location == r[j].location && (r[F].location = r[F].location.replace(/\.iwa/, "-".concat(F, ".iwa"))), sr.utils.cfb_add(e, r[F].location, ni(ai([M])));
          var U = r[F].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Mr(e, r, 2, function(B) {
            var K = Oe(B.messages[0].data);
            Hf(K, F, U), Gt(K, r, f, F), B.messages[0].data = tr(K);
          });
        }
        X.data = Dt(F);
      }), S[1][0].data = tr(E);
      var A = Oe(S[3][0].data);
      A[1].forEach(function(X) {
        var j = Oe(X.data), F = br(j[2][0].data), M = i[F];
        if (!i[F]) {
          M = Da({ deps: [f], location: "", type: r[F].type }, r), r[M].location = "Root Entry/Index/Tables/Tile-".concat(M, ".iwa"), i[F] = M;
          var U = Oa(e, r, F);
          U.id = M, Ua(o, F), It(o, M), sr.utils.cfb_add(e, "/Index/Tables/Tile-".concat(M, ".iwa"), ni(ai([U]))), Mr(e, r, 2, function(B) {
            var K = Oe(B.messages[0].data);
            K[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(M) }], [{ type: 2, data: Vt("Tables/Tile") }], [{ type: 2, data: Vt("Tables/Tile-".concat(M)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), K[1] = [{ type: 0, data: er(Math.max(M + 1, dr(K[1][0].data))) }], Gt(K, r, f, M), B.messages[0].data = tr(K);
          });
        }
        j[2][0].data = Dt(M), X.data = tr(j);
      }), S[3][0].data = tr(A);
    }
    d[4][0].data = tr(S), o.messages[0].data = tr(d);
  });
}
function X4(e, r, t, a, n, i) {
  var s = [];
  Mr(e, r, i, function(l) {
    var h = Oe(l.messages[0].data);
    h[1] = [{ type: 2, data: Vt(a) }], s = xn(h[2], br), l.messages[0].data = tr(h);
  });
  var f = Oa(e, r, s[0]), o = br(Oe(f.messages[0].data)[2][0].data);
  Mr(e, r, o, function(l, h) {
    return K4(e, r, t, l, h, o);
  });
}
function K4(e, r, t, a, n, i) {
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
  var w = { cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }], rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }], sst: ["~Sh33tJ5~"] }, y = Oe(a.messages[0].data);
  {
    y[6][0].data = er(s.e.r + 1), y[7][0].data = er(s.e.c + 1), delete y[46];
    var m = Oe(y[4][0].data);
    {
      var g = br(Oe(m[1][0].data)[2][0].data);
      Mr(e, r, g, function(Me, Te) {
        var ke, Ge = Oe(Me.messages[0].data);
        if ((ke = Ge == null ? void 0 : Ge[2]) != null && ke[0]) for (var ze = 0; ze < o.length; ++ze) {
          var Ze = Oe(Ge[2][0].data);
          Ze[1][0].data = er(ze), Ze[4][0].data = er(o[ze].length), Ge[2][ze] = { type: Ge[2][0].type, data: tr(Ze) };
        }
        Me.messages[0].data = tr(Ge);
      });
      var S = br(m[2][0].data);
      Mr(e, r, S, function(Me, Te) {
        for (var ke = Oe(Me.messages[0].data), Ge = 0; Ge <= s.e.c; ++Ge) {
          var ze = Oe(ke[2][0].data);
          ze[1][0].data = er(Ge), ze[4][0].data = er(s.e.r + 1), ke[2][Ge] = { type: ke[2][0].type, data: tr(ze) };
        }
        Me.messages[0].data = tr(ke);
      });
      var E = Oe(m[9][0].data);
      E[1] = [];
      var A = Oe(m[3][0].data);
      {
        var X = 256;
        A[2] = [{ type: 0, data: er(X) }];
        var j = br(Oe(A[1][0].data)[2][0].data), F = (function() {
          var Me = Oa(e, r, 2), Te = Oe(Me.messages[0].data), ke = Te[3].filter(function(Ge) {
            return dr(Oe(Ge.data)[1][0].data) == j;
          });
          return (ke == null ? void 0 : ke.length) ? dr(Oe(ke[0].data)[12][0].data) : 0;
        })();
        sr.utils.cfb_del(e, r[j].location), Mr(e, r, 2, function(Me) {
          var Te = Oe(Me.messages[0].data);
          Te[3] = Te[3].filter(function(ke) {
            return dr(Oe(ke.data)[1][0].data) != j;
          }), H4(Te, r, i, j), Me.messages[0].data = tr(Te);
        }), Ua(a, j), A[1] = [];
        for (var M = Math.ceil((s.e.r + 1) / X), U = 0; U < M; ++U) {
          var B = Da({ deps: [], location: "", type: 6002 }, r);
          r[B].location = "Root Entry/Index/Tables/Tile-".concat(B, ".iwa");
          for (var K = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min(s.e.r + 1, (U + 1) * X)) }], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min((U + 1) * X, s.e.r + 1) - U * X) }], [], [{ type: 0, data: er(5) }], [{ type: 0, data: er(1) }], [{ type: 0, data: er(1) }]], J = U * X; J <= Math.min(s.e.r, (U + 1) * X - 1); ++J) {
            var ie = M4(o[J], w);
            ie[1][0].data = er(J - U * X), K[5].push({ data: tr(ie), type: 2 });
          }
          A[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(U) }], [{ type: 2, data: Dt(B) }]]) });
          var Ie = { id: B, messages: [Wf(6002, tr(K))] }, ve = ni(ai([Ie]));
          sr.utils.cfb_add(e, "/Index/Tables/Tile-".concat(B, ".iwa"), ve), Mr(e, r, 2, function(Me) {
            var Te = Oe(Me.messages[0].data);
            Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(B) }], [{ type: 2, data: Vt("Tables/Tile") }], [{ type: 2, data: Vt("Tables/Tile-".concat(B)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(F) }]]) }), Te[1] = [{ type: 0, data: er(Math.max(B + 1, dr(Te[1][0].data))) }], Gt(Te, r, i, B), Me.messages[0].data = tr(Te);
          }), It(a, B), E[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(U * X) }], [{ type: 0, data: er(U) }]]) });
        }
      }
      if (m[3][0].data = tr(A), m[9][0].data = tr(E), m[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var Ve = Da({ type: 6144, deps: [i], location: r[i].location }, r);
        n.push({ id: Ve, messages: [Wf(6144, tr([[], t["!merges"].map(function(Me) {
          return { type: 2, data: tr([[], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.s.r, Me.s.c]).buffer) }]]) }], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Me.e.r - Me.s.r + 1, Me.e.c - Me.s.c + 1]).buffer) }]]) }]]) };
        })]))] }), m[13] = [{ type: 2, data: Dt(Ve) }], Mr(e, r, 2, function(Me) {
          var Te = Oe(Me.messages[0].data);
          Gt(Te, r, i, Ve), Me.messages[0].data = tr(Te);
        }), It(a, Ve);
      } else delete m[13];
      var ye = br(m[4][0].data);
      Mr(e, r, ye, function(Me) {
        var Te = Oe(Me.messages[0].data);
        Te[3] = [], w.sst.forEach(function(ke, Ge) {
          Ge != 0 && Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(1) }], [{ type: 2, data: Vt(ke) }]]) });
        }), Me.messages[0].data = tr(Te);
      });
      var Be = br(m[17][0].data);
      if (Mr(e, r, Be, function(Me) {
        var Te = Oe(Me.messages[0].data);
        Te[3] = [];
        var ke = [904980, 903835, 903815, 903845];
        w.rsst.forEach(function(Ge, ze) {
          if (ze != 0) {
            var Ze = [[], [{ type: 0, data: new Uint8Array([5]) }], [], [{ type: 2, data: Vt(Ge.v) }]];
            Ze[10] = [{ type: 0, data: new Uint8Array([1]) }], Ze[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], Ze[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], Ze[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], Ze[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], Ze[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], Ze[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Ze[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var R = Da({ deps: [], location: "", type: 2001 }, r), W = [];
            if (Ge.l) {
              var z = kn(e, 2032, [[], [], [{ type: 2, data: Vt(Ge.l) }]], "/Index/Tables/DataList", r);
              Ze[11] = [];
              var V = [[], []];
              V[1] || (V[1] = []), V[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(0) }], [{ type: 2, data: Dt(z) }]]) }), Ze[11][0] = { type: 2, data: tr(V) }, W.push(z);
            }
            kn(e, 2001, Ze, "/Index/Tables/DataList", r, R), Mr(e, r, R, function(D) {
              ke.forEach(function(Ce) {
                return It(D, Ce);
              }), W.forEach(function(Ce) {
                return It(D, Ce);
              });
            });
            var ue = kn(e, 6218, [[], [{ type: 2, data: Dt(R) }], [], [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]], "/Index/Tables/DataList", r);
            Mr(e, r, ue, function(D) {
              return It(D, R);
            }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(ze) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [{ type: 2, data: Dt(ue) }]]) }), It(Me, ue), Mr(e, r, 2, function(D) {
              var Ce = Oe(D.messages[0].data);
              Gt(Ce, r, Be, ue), Gt(Ce, r, ue, R), Gt(Ce, r, R, W), Gt(Ce, r, R, ke), D.messages[0].data = tr(Ce);
            });
          }
        }), Me.messages[0].data = tr(Te);
      }), w.cmnt.length > 1) {
        var Qe = br(m[19][0].data), de = {}, fr = 0;
        Mr(e, r, Qe, function(Me) {
          var Te = Oe(Me.messages[0].data);
          Te[3] = [], w.cmnt.forEach(function(ke, Ge) {
            if (Ge != 0) {
              var ze = [];
              ke.replies && ke.replies.forEach(function(W) {
                de[W.a || ""] || (de[W.a || ""] = kn(e, 212, [[], [{ type: 2, data: Vt(W.a || "") }], [{ type: 2, data: wl(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
                var z = de[W.a || ""], V = kn(e, 3056, [[], [{ type: 2, data: Vt(W.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Dt(z) }]], "/Index/Tables/DataList", r);
                Mr(e, r, V, function(ue) {
                  return It(ue, z);
                }), ze.push(V), Mr(e, r, 2, function(ue) {
                  var D = Oe(ue.messages[0].data);
                  Gt(D, r, V, z), ue.messages[0].data = tr(D);
                });
              }), de[ke.a || ""] || (de[ke.a || ""] = kn(e, 212, [[], [{ type: 2, data: Vt(ke.a || "") }], [{ type: 2, data: wl(++fr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
              var Ze = de[ke.a || ""], R = kn(e, 3056, [[], [{ type: 2, data: Vt(ke.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: Dt(Ze) }], ze.map(function(W) {
                return { type: 2, data: Dt(W) };
              }), [{ type: 2, data: tr([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(0) }]]) }]], "/Index/Tables/DataList", r);
              Mr(e, r, R, function(W) {
                It(W, Ze), ze.forEach(function(z) {
                  return It(W, z);
                });
              }), Te[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ge) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [], [{ type: 2, data: Dt(R) }]]) }), It(Me, R), Mr(e, r, 2, function(W) {
                var z = Oe(W.messages[0].data);
                Gt(z, r, Qe, R), Gt(z, r, R, Ze), ze.length && Gt(z, r, R, ze), W.messages[0].data = tr(z);
              });
            }
          }), Te[2][0].data = er(w.cmnt.length + 1), Me.messages[0].data = tr(Te);
        });
      }
    }
    y[4][0].data = tr(m);
  }
  a.messages[0].data = tr(y);
}
function Dh(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function Fo(e) {
  Dh([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function Ao(e) {
  Dh([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e);
}
function j4(e) {
  return wr.WS.indexOf(e) > -1 ? "sheet" : e == wr.CS ? "chart" : e == wr.DS ? "dialog" : e == wr.MS ? "macro" : e && e.length ? e : "sheet";
}
function G4(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, j4(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function z4(e, r, t, a, n, i, s, f) {
  if (!(!e || !e["!legdrawel"])) {
    var o = Qn(e["!legdrawel"].Target, a), l = jt(t, o, true);
    l && Kg(Br(l), e, f || []);
  }
}
function $4(e, r, t, a, n, i, s, f, o, l, h, v) {
  try {
    i[a] = Ni(jt(e, t, true), r);
    var d = ft(e, r), x;
    switch (f) {
      case "sheet":
        x = dk(d, r, n, o, i[a], l, h, v);
        break;
      case "chart":
        if (x = xk(d, r, n, o, i[a], l, h, v), !x || !x["!drawel"]) break;
        var w = Qn(x["!drawel"].Target, r), y = zi(w), m = Xg(jt(e, w, true), Ni(jt(e, y, true), w)), g = Qn(m, w), S = zi(g);
        x = By(jt(e, g, true), g, o, Ni(jt(e, S, true), g), l, x);
        break;
      case "macro":
        x = pk(d, r, n, o, i[a], l, h, v);
        break;
      case "dialog":
        x = vk(d, r, n, o, i[a], l, h, v);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = x;
    var E = [], A = [];
    i && i[a] && Gr(i[a]).forEach(function(X) {
      var j = "";
      if (i[a][X].Type == wr.CMNT) {
        if (j = Qn(i[a][X].Target, r), E = _k(ft(e, j, true), j, o), !E || !E.length) return;
        al(x, E, false);
      }
      i[a][X].Type == wr.TCMNT && (j = Qn(i[a][X].Target, r), A = A.concat($g(ft(e, j, true), o)));
    }), A && A.length && al(x, A, true, o.people || []), z4(x, f, e, r, n, o, l, E);
  } catch (X) {
    if (o.WTF) throw X;
  }
}
function sa(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function q4(e, r) {
  if (ci(), r = r || {}, Fo(r), oa(e, "META-INF/manifest.xml") || oa(e, "objectdata.xml")) return vl(e, r);
  if (oa(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof _f < "u") {
      if (e.FileIndex) return _f(e, r);
      var t = sr.utils.cfb_new();
      return Tc(e).forEach(function(ve) {
        hr(t, ve, Hd(e, ve));
      }), _f(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!oa(e, "[Content_Types].xml")) {
    if (oa(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (oa(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = sr.find(e, "Index.zip");
    if (a) return r = Vr(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? ii(new Uint8Array(a.content), r) : ii(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = Tc(e), i = Rx(jt(e, "[Content_Types].xml")), s = false, f, o;
  if (i.workbooks.length === 0 && (o = "xl/workbook.xml", ft(e, o, true) && i.workbooks.push(o)), i.workbooks.length === 0) {
    if (o = "xl/workbook.bin", !ft(e, o, true)) throw new Error("Could not find workbook");
    i.workbooks.push(o), s = true;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = true);
  var l = {}, h = {};
  if (!r.bookSheets && !r.bookProps) {
    if (Pi = [], i.sst) try {
      Pi = gk(ft(e, sa(i.sst)), i.sst, r);
    } catch (ve) {
      if (r.WTF) throw ve;
    }
    r.cellStyles && i.themes.length && (l = Yu(jt(e, i.themes[0].replace(/^\//, ""), true) || "", r)), i.style && (h = mk(ft(e, sa(i.style)), i.style, l, r));
  }
  i.links.map(function(ve) {
    try {
      var Ve = Ni(jt(e, zi(sa(ve))), ve);
      return yk(ft(e, sa(ve)), Ve, ve, r);
    } catch {
    }
  });
  var v = hk(ft(e, sa(i.workbooks[0])), i.workbooks[0], r), d = {}, x = "";
  i.coreprops.length && (x = ft(e, sa(i.coreprops[0]), true), x && (d = gu(x)), i.extprops.length !== 0 && (x = ft(e, sa(i.extprops[0]), true), x && Wx(x, d, r)));
  var w = {};
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (x = jt(e, sa(i.custprops[0]), true), x && (w = Vx(x, r)));
  var y = {};
  if ((r.bookSheets || r.bookProps) && (v.Sheets ? f = v.Sheets.map(function(Ve) {
    return Ve.name;
  }) : d.Worksheets && d.SheetNames.length > 0 && (f = d.SheetNames), r.bookProps && (y.Props = d, y.Custprops = w), r.bookSheets && typeof f < "u" && (y.SheetNames = f), r.bookSheets ? y.SheetNames : r.bookProps)) return y;
  f = {};
  var m = {};
  r.bookDeps && i.calcchain && (m = wk(ft(e, sa(i.calcchain)), i.calcchain));
  var g = 0, S = {}, E, A;
  {
    var X = v.Sheets;
    d.Worksheets = X.length, d.SheetNames = [];
    for (var j = 0; j != X.length; ++j) d.SheetNames[j] = X[j].name;
  }
  var F = s ? "bin" : "xml", M = i.workbooks[0].lastIndexOf("/"), U = (i.workbooks[0].slice(0, M + 1) + "_rels/" + i.workbooks[0].slice(M + 1) + ".rels").replace(/^\//, "");
  oa(e, U) || (U = "xl/_rels/workbook." + F + ".rels");
  var B = Ni(jt(e, U, true), U.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = kk(ft(e, sa(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = qg(ft(e, sa(i.people[0])), r)), B && (B = G4(B, v.Sheets));
  var K = ft(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (g = 0; g != d.Worksheets; ++g) {
    var J = "sheet";
    if (B && B[g] ? (E = "xl/" + B[g][1].replace(/[\/]?xl\//, ""), oa(e, E) || (E = B[g][1]), oa(e, E) || (E = U.replace(/_rels\/[\S\s]*$/, "") + B[g][1]), J = B[g][2]) : (E = "xl/worksheets/sheet" + (g + 1 - K) + "." + F, E = E.replace(/sheet0\./, "sheet.")), A = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
      case "number":
        if (g != r.sheets) continue e;
        break;
      case "string":
        if (d.SheetNames[g].toLowerCase() != r.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(r.sheets)) {
          for (var ie = false, Ie = 0; Ie != r.sheets.length; ++Ie) typeof r.sheets[Ie] == "number" && r.sheets[Ie] == g && (ie = 1), typeof r.sheets[Ie] == "string" && r.sheets[Ie].toLowerCase() == d.SheetNames[g].toLowerCase() && (ie = 1);
          if (!ie) continue e;
        }
    }
    $4(e, E, A, d.SheetNames[g], g, S, f, J, r, v, l, h);
  }
  return y = { Directory: i, Workbook: v, Props: d, Custprops: w, Deps: m, Sheets: f, SheetNames: d.SheetNames, Strings: Pi, Styles: h, Themes: l, SSF: Vr(ir) }, r && r.bookFiles && (e.files ? (y.keys = n, y.files = e.files) : (y.keys = [], y.files = {}, e.FullPaths.forEach(function(ve, Ve) {
    ve = ve.replace(/^Root Entry[\/]/, ""), y.keys.push(ve), y.files[ve] = e.FileIndex[Ve];
  }))), r && r.bookVBA && (i.vba.length > 0 ? y.vbaraw = ft(e, sa(i.vba[0]), true) : i.defaults && i.defaults.bin === r2 && (y.vbaraw = ft(e, "xl/vbaProject.bin", true))), y.bookType = s ? "xlsb" : "xlsx", y;
}
function Y4(e, r) {
  var t = r || {}, a = "Workbook", n = sr.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (dm(n.content), a = "/!DataSpaces/DataSpaceMap", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = pm(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = vm(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    gm(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = _m(n.content);
  if (a = "/EncryptedPackage", n = sr.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function Z4(e, r) {
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Bi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = true, n = vo();
  Ao(r = r || {});
  var i = no(), s = "", f = 0;
  if (r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, _u(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], l = 0; l < e.SheetNames.length; ++l) (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, ku(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, Eu(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, hr(i, s, Ry(f - 1, r, e, v)), n.sheets.push(s), Rr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, wr.WS[0]), d) {
      var w = d["!comments"], y = false, m = "";
      if (w && w.length > 0) {
        var g = false;
        w.forEach(function(E) {
          E[1].forEach(function(A) {
            A.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, Ju(w, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, e2(w)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Zu(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, zi(s), ri(v));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, hm(r.Strings)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, uk(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml";
  var S = ko(e.Themes, r);
  return hr(i, s, S), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, vg(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Bg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Qu(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", vu(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function J4(e, r) {
  e && !e.SSF && (e.SSF = Vr(ir)), e && e.SSF && (ci(), c0(e.SSF), r.revssf = u0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Bi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = n2.indexOf(r.bookType) > -1, n = vo();
  Ao(r = r || {});
  var i = no(), s = "", f = 0;
  if (r.cellXfs = [], vn(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", hr(i, s, _u(e.Props, r)), n.coreprops.push(s), Rr(r.rels, 2, s, wr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var o = [], l = 0; l < e.SheetNames.length; ++l) (e.Workbook.Sheets[l] || {}).Hidden != 2 && o.push(e.SheetNames[l]);
    e.Props.SheetNames = o;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, hr(i, s, ku(e.Props)), n.extprops.push(s), Rr(r.rels, 3, s, wr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", hr(i, s, Eu(e.Custprops)), n.custprops.push(s), Rr(r.rels, 4, s, wr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, hr(i, s, yw(f - 1, r, e, v)), n.sheets.push(s), Rr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, wr.WS[0]), d) {
      var w = d["!comments"], y = false, m = "";
      if (w && w.length > 0) {
        var g = false;
        w.forEach(function(S) {
          S[1].forEach(function(E) {
            E.T == true && (g = true);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + f + ".xml", hr(i, m, Ju(w, h, r)), n.threadedcomments.push(m), Rr(v, -1, "../threadedComments/threadedComment" + f + ".xml", wr.TCMNT)), m = "xl/comments" + f + "." + t, hr(i, m, zg(w)), n.comments.push(m), Rr(v, -1, "../comments" + f + "." + t, wr.CMNT), y = true;
      }
      d["!legacy"] && y && hr(i, "xl/drawings/vmlDrawing" + f + ".vml", Zu(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && hr(i, zi(s), ri(v));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, hr(i, s, fm(r.Strings, r)), n.strs.push(s), Rr(r.wbrels, -1, "sharedStrings." + t, wr.SST)), s = "xl/workbook." + t, hr(i, s, qy(e)), n.workbooks.push(s), Rr(r.rels, 1, s, wr.WB), s = "xl/theme/theme1.xml", hr(i, s, ko(e.Themes, r)), n.themes.push(s), Rr(r.wbrels, -1, "theme/theme1.xml", wr.THEME), s = "xl/styles." + t, hr(i, s, $m(e, r)), n.styles.push(s), Rr(r.wbrels, -1, "styles." + t, wr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", hr(i, s, e.vbaraw), n.vba.push(s), Rr(r.wbrels, -1, "vbaProject.bin", wr.VBA)), s = "xl/metadata." + t, hr(i, s, Mg()), n.metadata.push(s), Rr(r.wbrels, -1, "metadata." + t, wr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", hr(i, s, Qu(h)), n.people.push(s), Rr(r.wbrels, -1, "persons/person.xml", wr.PEOPLE)), hr(i, "[Content_Types].xml", vu(n, r)), hr(i, "_rels/.rels", ri(r.rels)), hr(i, "xl/_rels/workbook." + t + ".rels", ri(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function Co(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = ta(e.slice(0, 12));
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
function Q4(e, r) {
  return sr.find(e, "EncryptedPackage") ? Y4(e, r) : gh(e, r);
}
function eE(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t = jl(a, n), q4(t, n);
}
function Oh(e, r) {
  var t = 0;
  e: for (; t < e.length; ) switch (e.charCodeAt(t)) {
    case 10:
    case 13:
    case 32:
      ++t;
      break;
    case 60:
      return Mf(e.slice(t), r);
    default:
      break e;
  }
  return fi.to_workbook(e, r);
}
function rE(e, r) {
  var t = "", a = Co(e, r);
  switch (r.type) {
    case "base64":
      t = ta(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = Nn(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (t = Br(t)), r.type = "binary", Oh(t, r);
}
function tE(e, r) {
  var t = e;
  return r.type == "base64" && (t = ta(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = mr && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : K1(t.slice(2)) : Cl(t.slice(2)), r.type = "binary", Oh(t, r);
}
function aE(e) {
  return e.match(/[^\x00-\x7F]/) ? Na(e) : e;
}
function wf(e, r, t, a) {
  return a ? (t.type = "string", fi.to_workbook(e, t)) : fi.to_workbook(r, t);
}
function ii(e, r) {
  Zf();
  var t = r || {};
  if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return ii(new Uint8Array(e), (t = Vr(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return ii(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = false;
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), ti = {}, t.dateNF && (ti.dateNF = t.dateNF), t.type || (t.type = mr && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = mr ? "buffer" : "binary", a = kd(e), typeof Uint8Array < "u" && !mr && (t.type = "array")), t.type == "string" && (i = true, t.type = "binary", t.codepage = 65001, a = aE(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo) return t = Vr(t), t.type = "array", ii(Jf(a), t);
  }
  switch ((n = Co(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return Q4(sr.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return gh(a, t);
      break;
    case 60:
      return Mf(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return Zv(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return Hu.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? eE(a, t) : wf(e, a, t, i);
    case 239:
      return n[3] === 60 ? Mf(a, t) : wf(e, a, t, i);
    case 255:
      if (n[1] === 254) return tE(a, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return Cn.to_workbook(a, t);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9))) return Cn.to_workbook(a, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Lf.to_workbook(a, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116) return Dm(a, t);
      break;
    case 10:
    case 13:
    case 32:
      return rE(a, t);
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
  return Yv.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? Lf.to_workbook(a, t) : wf(e, a, t, i);
}
function Nh(e, r) {
  switch (r.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      r.type = "";
      break;
    case "file":
      return as(r.file, sr.write(e, { type: mr ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return sr.write(e, r);
}
function nE(e, r) {
  switch (r.bookType) {
    case "ods":
      return bh(e, r);
    case "numbers":
      return W4(e, r);
    case "xlsb":
      return Z4(e, r);
    default:
      return J4(e, r);
  }
}
function iE(e, r) {
  var t = Vr(r || {}), a = nE(e, t);
  return sE(a, t);
}
function sE(e, r) {
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
  return r.password && typeof encrypt_agile < "u" ? Nh(encrypt_agile(n, r.password), r) : r.type === "file" ? as(r.file, n) : r.type == "string" ? Br(n) : n;
}
function fE(e, r) {
  var t = r || {}, a = qk(e, t);
  return Nh(a, t);
}
function Ca(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return Zs(Na(a));
    case "binary":
      return Na(a);
    case "string":
      return e;
    case "file":
      return as(r.file, a, "utf8");
    case "buffer":
      return mr ? Ba(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : Ca(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function oE(e, r) {
  switch (r.type) {
    case "base64":
      return G1(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return as(r.file, e, "binary");
    case "buffer":
      return mr ? Ba(e, "binary") : e.split("").map(function(t) {
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
function Rh(e, r) {
  Zf(), Gy(e);
  var t = Vr(r || {});
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), t.type == "array") {
    t.type = "binary";
    var a = Rh(e, t);
    return t.type = "array", o0(a);
  }
  var n = 0;
  if (t.sheet && (typeof t.sheet == "number" ? n = t.sheet : n = e.SheetNames.indexOf(t.sheet), !e.SheetNames[n])) throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
  switch (t.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Ca(Vk(e, t), t);
    case "slk":
    case "sylk":
      return Ca(Wu.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return Ca(yh(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return oE(Ph(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return Ca(Io(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return Ca(Hu.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "dbf":
      return Xs(Lf.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return Ca(fi.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "rtf":
      return Ca(Om(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return Ca(Vu.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "fods":
      return Ca(bh(e, t), t);
    case "wk1":
      return Xs(Cn.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Xs(Cn.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Xs(wh(e, t), t);
    case "biff5":
      t.biff || (t.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return t.biff || (t.biff = 8), fE(e, t);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return iE(e, t);
    default:
      throw new Error("Unrecognized bookType |" + t.bookType + "|");
  }
}
function cE(e) {
  if (!e.bookType) {
    var r = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" }, t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = r[e.bookType] || e.bookType;
  }
}
function lE(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, cE(a), Rh(e, a);
}
function uE(e, r, t, a, n, i, s) {
  var f = Fr(t), o = s.defval, l = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), h = true, v = e["!data"] != null, d = n === 1 ? [] : {};
  if (n !== 1) if (Object.defineProperty) try {
    Object.defineProperty(d, "__rowNum__", { value: t, enumerable: false });
  } catch {
    d.__rowNum__ = t;
  }
  else d.__rowNum__ = t;
  if (!v || e["!data"][t]) for (var x = r.s.c; x <= r.e.c; ++x) {
    var w = v ? (e["!data"][t] || [])[x] : e[a[x] + f];
    if (w == null || w.t === void 0) {
      if (o === void 0) continue;
      i[x] != null && (d[i[x]] = o);
      continue;
    }
    var y = w.v;
    switch (w.t) {
      case "z":
        if (y == null) break;
        continue;
      case "e":
        y = y == 0 ? null : void 0;
        break;
      case "s":
      case "b":
      case "n":
        if (!w.z || !da(w.z) || (y = Ga(y), typeof y == "number")) break;
      case "d":
        s && (s.UTC || s.raw === false) || (y = Rn(new Date(y)));
        break;
      default:
        throw new Error("unrecognized type " + w.t);
    }
    if (i[x] != null) {
      if (y == null) if (w.t == "e" && y === null) d[i[x]] = null;
      else if (o !== void 0) d[i[x]] = o;
      else if (l && y === null) d[i[x]] = null;
      else continue;
      else d[i[x]] = (w.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : l) ? y : qa(w, y, s);
      y != null && (h = false);
    }
  }
  return { row: d, isempty: h };
}
function Vf(e, r) {
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
  var v = Fr(o.s.r), d = [], x = [], w = 0, y = 0, m = e["!data"] != null, g = o.s.r, S = 0, E = {};
  m && !e["!data"][g] && (e["!data"][g] = []);
  var A = l.skipHidden && e["!cols"] || [], X = l.skipHidden && e["!rows"] || [];
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
      if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = qa(t, null, l), y = E[s] || 0, !y) E[s] = 1;
      else {
        do
          f = s + "_" + y++;
        while (E[f]);
        E[s] = y, E[f] = 1;
      }
      i[S] = f;
  }
  for (g = o.s.r + n; g <= o.e.r; ++g) if (!(X[g] || {}).hidden) {
    var j = uE(e, o, g, d, a, i, l);
    (j.isempty === false || (a === 1 ? l.blankrows !== false : l.blankrows)) && (x[w++] = j.row);
  }
  return x.length = w, x;
}
var yl = /"/g;
function hE(e, r, t, a, n, i, s, f, o) {
  for (var l = true, h = [], v = "", d = Fr(t), x = e["!data"] != null, w = x && e["!data"][t] || [], y = r.s.c; y <= r.e.c; ++y) if (a[y]) {
    var m = x ? w[y] : e[a[y] + d];
    if (m == null) v = "";
    else if (m.v != null) {
      l = false, v = "" + (o.rawNumbers && m.t == "n" ? m.v : qa(m, null, o));
      for (var g = 0, S = 0; g !== v.length; ++g) if ((S = v.charCodeAt(g)) === n || S === i || S === 34 || o.forceQuotes) {
        v = '"' + v.replace(yl, '""') + '"';
        break;
      }
      v == "ID" && f == 0 && h.length == 0 && (v = '"ID"');
    } else m.f != null && !m.F ? (l = false, v = "=" + m.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(yl, '""') + '"')) : v = "";
    h.push(v);
  }
  if (o.strip) for (; h[h.length - 1] === ""; ) --h.length;
  return o.blankrows === false && l ? null : h.join(s);
}
function Io(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Dr(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, o = f.charCodeAt(0), l = "", h = [], v = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], x = n.s.c; x <= n.e.c; ++x) (v[x] || {}).hidden || (h[x] = gr(x));
  for (var w = 0, y = n.s.r; y <= n.e.r; ++y) (d[y] || {}).hidden || (l = hE(e, n, y, h, s, o, i, w, a), l != null && (l || a.blankrows !== false) && t.push((w++ ? f : "") + l));
  return t.join("");
}
function Ph(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = Io(e, r);
  return t;
}
function dE(e, r) {
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
function Bh(e, r, t) {
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
  var d = a.header || [], x = 0, w = [];
  r.forEach(function(m, g) {
    n && !s["!data"][f + g + i] && (s["!data"][f + g + i] = []), n && (w = s["!data"][f + g + i]), Gr(m).forEach(function(S) {
      (x = d.indexOf(S)) == -1 && (d[x = d.length] = S);
      var E = m[S], A = "z", X = "", j = n ? "" : gr(o + x) + Fr(f + g + i), F = n ? w[o + x] : s[j];
      E && typeof E == "object" && !(E instanceof Date) ? n ? w[o + x] = E : s[j] = E : (typeof E == "number" ? A = "n" : typeof E == "boolean" ? A = "b" : typeof E == "string" ? A = "s" : E instanceof Date ? (A = "d", a.UTC || (E = h0(E)), a.cellDates || (A = "n", E = Yr(E)), X = F != null && F.z && da(F.z) ? F.z : a.dateNF || ir[14]) : E === null && a.nullError && (A = "e", E = 0), F ? (F.t = A, F.v = E, delete F.w, delete F.R, X && (F.z = X)) : n ? w[o + x] = F = { t: A, v: E } : s[j] = F = { t: A, v: E }, X && (F.z = X));
    });
  }), h.e.c = Math.max(h.e.c, o + d.length - 1);
  var y = Fr(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (x = 0; x < d.length; ++x) n ? s["!data"][f][x + o] = { t: "s", v: d[x] } : s[gr(x + o) + y] = { t: "s", v: d[x] };
  return s["!ref"] = xr(h), s;
}
function xE(e, r) {
  return Bh(null, e, r);
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
function pE(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function Do(e, r) {
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
  if (xh(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), e.Sheets[t] = r, t;
}
function vE(e, r, t) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = pE(e, r);
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
function mE(e, r) {
  return e.z = r, e;
}
function Lh(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function gE(e, r, t) {
  return Lh(e, "#" + r, t);
}
function _E(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function wE(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Dr(r), i = typeof r == "string" ? r : xr(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var o = ts(e, s, f);
    o.t = "n", o.F = i, delete o.v, s == n.s.r && f == n.s.c && (o.f = t, a && (o.D = true));
  }
  var l = wt(e["!ref"]);
  return l.s.r > n.s.r && (l.s.r = n.s.r), l.s.c > n.s.c && (l.s.c = n.s.c), l.e.r < n.e.r && (l.e.r = n.e.r), l.e.c < n.e.c && (l.e.c = n.e.c), e["!ref"] = xr(l), e;
}
var ct = { encode_col: gr, encode_row: Fr, encode_cell: yr, encode_range: xr, decode_col: lo, decode_row: co, split_cell: lx, decode_cell: Lr, decode_range: wt, format_cell: qa, sheet_new: ux, sheet_add_aoa: lu, sheet_add_json: Bh, sheet_add_dom: kh, aoa_to_sheet: li, json_to_sheet: xE, table_to_sheet: Eh, table_to_book: g4, sheet_to_csv: Io, sheet_to_txt: Ph, sheet_to_json: Vf, sheet_to_html: yh, sheet_to_formulae: dE, sheet_to_row_object_array: Vf, sheet_get_cell: ts, book_new: Do, book_append_sheet: us, book_set_sheet_visibility: vE, cell_set_number_format: mE, cell_set_hyperlink: Lh, cell_set_internal_link: gE, cell_add_comment: _E, sheet_set_array_formula: wE, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
function yE(e) {
  e.preventDefault();
  const t = e.target.closest("tr"), a = document.getElementById("context_menu");
  t && (a.style.top = `${e.clientY}px`, a.style.left = `${e.clientX}px`, a.classList.remove("hidden"), document.getElementById("delete_row").onclick = () => {
    var _a2, _b;
    const n = ((_b = (_a2 = t.children[2]) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || "";
    if (console.log(n), n) {
      const i = Nt.getInstance();
      i.findRowIndexByIsbn(n) !== -1 && (i.deleteSpreadsheet(n), i.renderSpreadsheet());
    }
    a.classList.add("hidden");
  }, document.addEventListener("click", function(n) {
    n.button !== 2 && a.classList.add("hidden");
  }, { once: true }));
}
const Mh = Kf({ data: [] }), Uh = ["ACCESSION NUMBER", "BOOK NAME", "ISBN NUMBER", "BOOK TYPE", "AUTHOR", "PUBLISHED DATE", "NUM OF PAGES", "IMAGE LINKS", "LANGUAGE"];
const _Nt = class _Nt {
  constructor() {
    __publicField(this, "workbook", null);
    __publicField(this, "worksheet", {});
    __publicField(this, "sheetName", "");
    __publicField(this, "m_jsonSpreadsheet", []);
  }
  createNewSpreadsheet() {
    if (localStorage.getItem("renderSpreadsheet") === "true") {
      ua.spreadsheets.toArray().then((n) => {
        this.workbook = ct.book_new(), this.worksheet = ct.json_to_sheet(n), ct.book_append_sheet(this.workbook, this.worksheet, "Books");
      });
      return;
    }
    this.workbook = ct.book_new();
    const a = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
    window.localStorage.setItem("begin_date", a), this.worksheet = ct.aoa_to_sheet([lc]), ct.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = ct.sheet_to_json(this.worksheet, { defval: "N/A" }), localStorage.setItem("renderSpreadsheet", "true");
  }
  static init(r = "") {
    return _Nt.instance = new _Nt(), _Nt.instance.createNewSpreadsheet(), _Nt.instance;
  }
  mapToSpreadsheetData(r) {
    return r.map((t) => {
      const a = Object.values(t), n = {};
      return lc.forEach((i, s) => {
        n[i] = a[s] !== void 0 ? a[s] : "";
      }), n;
    });
  }
  async loadWorkbook(r) {
    try {
      const n = await ua.spreadsheets.toArray();
      if (n.length > 0) return console.log(`Loading ${n.length} records from IndexedDB...`), this.workbook = ct.book_new(), this.worksheet = ct.json_to_sheet(n), ct.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = n, console.log("Loaded Existing Data Form Database: ", this.m_jsonSpreadsheet), this.m_jsonSpreadsheet;
    } catch (n) {
      console.error("Error checking IndexedDB:", n);
    }
    const a = await (await fetch(r)).arrayBuffer();
    this.workbook = ii(a), this.sheetName = this.workbook.SheetNames[0], this.worksheet = this.workbook.Sheets[this.sheetName], this.m_jsonSpreadsheet = ct.sheet_to_json(this.worksheet, { defval: "N/A" });
    try {
      console.log("Storing spreadsheet data to database..."), console.log(this.m_jsonSpreadsheet);
      const n = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);
      console.log("Records to be added to the database: ", n), console.log("Record[0] to be added to the database: ", n[0]), await ua.spreadsheets.add(n[0]), console.log(`Stored ${n.length} records to IndexedDB`);
    } catch (n) {
      console.error("Error loading data to IndexedDB:", n);
    }
    return this.m_jsonSpreadsheet;
  }
  static getInstance() {
    return _Nt.instance || (_Nt.instance = _Nt.init()), _Nt.instance;
  }
  getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }
  async loadFromDatabase() {
    const r = await ua.spreadsheets.toArray();
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
      console.log("Records to be added to the database: ", a), console.log("Record[0] to be added to the database: ", a[0]), ua.spreadsheets.add(a[0]).then((n) => {
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
    return this.m_jsonSpreadsheet = i, ua.spreadsheets.where("isbn").equals(r).modify({ accession: t }), this.renderSpreadsheet(), this.scrollToView(a), `Accession number ${t} added for ISBN ${r}.`;
  }
  async deleteSpreadsheet(r) {
    if (!this.workbook) return console.error("Workbook is not loaded yet."), "Workbook is not loaded yet.";
    const t = this.findRowIndexByIsbn(r);
    this.m_jsonSpreadsheet.splice(t, 1), this.worksheet = ct.json_to_sheet(this.m_jsonSpreadsheet);
    const a = await ua.spreadsheets.where("isbn").equals(r).delete();
    console.log("Deleting db: ", a), this.getRowElementByIndex(t);
  }
  renderSpreadsheet() {
    Mh.data = [...this.m_jsonSpreadsheet];
  }
  findRowIndexByIsbn(r) {
    const t = this.m_jsonSpreadsheet.findIndex((a) => a.isbn === r);
    if (console.log(" Isbn is: " + r + " This jsonSpreadsheet: ", this.m_jsonSpreadsheet), t === -1) {
      const a = this.m_jsonSpreadsheet.findIndex((n) => Object.values(n).includes(r));
      return console.log("rowIndex found by value: ", a), a === -1 && console.error("Row with the given ISBN not found."), a;
    }
    return t;
  }
  getRowElementByIndex(r) {
    var _a2, _b;
    return (_b = (_a2 = document.querySelector("tbody")) == null ? void 0 : _a2.querySelectorAll("tr")) == null ? void 0 : _b.item(r);
  }
  scrollToView(r = -1) {
    var _a2, _b, _c2;
    const t = document.querySelector("tbody"), n = (_a2 = t == null ? void 0 : t.querySelectorAll("tr")) == null ? void 0 : _a2.item(r), i = (_b = n == null ? void 0 : n.style) == null ? void 0 : _b.backgroundColor;
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
      ct.book_append_sheet(t, this.worksheet, "Books"), ct.sheet_add_aoa(this.worksheet, [Uh], { origin: 0 });
      const a = window.localStorage.getItem("begin_date") || "", i = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
      lE(t, a ? "from" + a + " to " + i + "-library_stock.xlsx" : i + "-library_stock.xlsx");
    } else console.error("Workbook is not loaded.");
  }
};
__publicField(_Nt, "instance");
let Nt = _Nt;
async function kl(e) {
  var _a2, _b, _c2, _d2, _e2, _f2;
  const a = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e + ""}`)).json();
  if (console.log("Used google Api: ", ((_a2 = a == null ? void 0 : a.items) == null ? void 0 : _a2.length) > 0), a.items && a.items.length > 0) {
    const n = a.items[0].volumeInfo;
    console.log("used  google books api: ", n);
    const i = n.language ? [{ key: `/languages/${n.language}` }] : [];
    return ["google", { title: n.title, authors: ((_b = n.authors) == null ? void 0 : _b.map((s) => ({ name: s }))) || [], publish_date: n.publishedDate, number_of_pages: n.pageCount, cover: { small: (_c2 = n.imageLinks) == null ? void 0 : _c2.thumbnail, large: ((_d2 = n.imageLinks) == null ? void 0 : _d2.large) || ((_e2 = n.imageLinks) == null ? void 0 : _e2.thumbnail) }, subjects: ((_f2 = n.categories) == null ? void 0 : _f2.map((s) => ({ name: s }))) || [], languages: i }];
  }
}
async function El(e) {
  const t = await (await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${e}&format=json&jscmd=data`)).json();
  if (console.log("used OpenLibAPI: ", Object.keys(t).length !== 0), Object.keys(t).length !== 0) return ["openLib", t[`ISBN:${e}`]];
}
async function kE(e) {
  var _a2;
  const r = "https://corsproxy.io/?", t = `https://isbnsearch.org/isbn/${e}`;
  try {
    const n = await (await fetch(r + encodeURIComponent(t))).text(), s = new DOMParser().parseFromString(n, "text/html");
    console.log("doc: ", s);
    const f = s.querySelector(".bookinfo"), o = s.querySelector(".image > img");
    console.log("Image tag: ", o);
    let h = { cover: { large: o.src } };
    if (!f) return console.error("Book info container not found"), null;
    const v = (_a2 = f.textContent) == null ? void 0 : _a2.trim().split(`
`).map((x) => x.trim());
    return ["isbndb", { ...EE(v), ...h }];
  } catch (a) {
    return console.error("Error fetching ISBN:", a), null;
  }
}
function EE(e) {
  let r = { title: "", isbn: "", "isbn-10": "", authors: [{ name: "" }], publish_date: "" };
  return e.forEach((t, a) => {
    a === 0 ? r.title = t.trim() : t.startsWith("ISBN-13:") ? r.isbn = t.replace("ISBN-13:", "").trim() : t.startsWith("ISBN-10:") ? r["isbn-10"] = t.replace("ISBN-10:", "").trim() : t.startsWith("Author:") ? r.authors[0].name = t.replace("Author:", "").trim() : t.startsWith("Published:") && (r.publish_date = t.replace("Published:", "").trim());
  }), console.log("Parsed Result: ", r), r;
}
function TE(e) {
  let r = false;
  return e.forEach((t) => {
    t.value ? r = true : (t.classList.add("required"), r = false);
  }), r;
}
function Tl(e) {
  let r = "";
  return e.forEach((t) => r += t.value), r;
}
function SE(e) {
  e.forEach((r) => r.value = ""), e[0].focus();
}
async function Ks(e, r = false) {
  var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i;
  let t, a = "", n, i = e.isbn;
  console.log("isbn: ", i);
  const s = await Wh(i);
  if (s) {
    console.log("used DB: ", s);
    const v = Nt.getInstance(), d = v.findRowIndexByIsbn(s.isbn);
    return v.scrollToView(d), e.value = true, `You have done that isbn already the Book Name is: ${s.book_name}`;
  }
  if ([n, t] = await kl(i) || await El(i) || await kE(i) || [null, null], t) {
    if (n === "isbndb") {
      console.log("IsbnDetails: ", t);
      let v = t.isbn;
      console.log("isbn13: ", v);
      let [d, x] = await kl(v) || await El(v) || [null, null];
      x && (t = x);
    }
  } else return a = "No details found for the given ISBN from all sources.";
  console.log("Isbn Details: ", t), a = "Isbn Found Please Input the accession Number", e.value = true;
  let f = ((_b = (_a2 = t == null ? void 0 : t.languages) == null ? void 0 : _a2[0]) == null ? void 0 : _b.key) ? (_d2 = (_c2 = t == null ? void 0 : t.languages) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.key.replace("/languages/", "").toUpperCase() : "English";
  f = f === "EN" ? "English" : f;
  const o = ["N/A", t == null ? void 0 : t.title, i, ((_f2 = (_e2 = t == null ? void 0 : t.subjects) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.name) ?? "N/A", (_h2 = (_g2 = t == null ? void 0 : t.authors) == null ? void 0 : _g2[0]) == null ? void 0 : _h2.name, (t == null ? void 0 : t.publish_date) ?? "N/A", (t == null ? void 0 : t.number_of_pages) ?? "N/A", ((_i = t == null ? void 0 : t.cover) == null ? void 0 : _i.large) ?? "N/A", f], l = Nt.getInstance();
  l.insertSpreadsheet(o), l.renderSpreadsheet();
  const h = setTimeout(() => {
    l.scrollToView(), clearTimeout(h);
  }, 500);
  return a;
}
async function Wh(e) {
  return await ua.spreadsheets.get({ isbn: e });
}
var bE = Pa('<div class="isbn-input"><div class="isbn-type">Accession No:</div> <span class="isbn-type" id="accessionType"> </span> <input type="text" name="accession" id="accession-input" class="svelte-1a3p2ai"/></div>');
function FE(e, r) {
  jf(r, true);
  let t = ef(r, "accessionInput", 15), a = ef(r, "isbnFound", 15), n = ef(r, "message", 15), i = Si("OLD");
  Gf(() => {
    const v = setTimeout(() => {
      var _a2;
      t().focus();
      const d = Nt.getInstance(), x = d.findRowIndexByIsbn(a().isbn), w = d.getRowElementByIndex(x);
      console.log("index and row: ", x, " ", w);
      let y = ((_a2 = w.firstElementChild) == null ? void 0 : _a2.textContent) + ",";
      console.log("Remounted"), y.startsWith("N/A") ? t(t().value = "", true) : t(t().value = y, true), clearTimeout(v);
    }, 300);
  });
  function s(v) {
    const d = v.target;
    switch (v.key) {
      case "Tab":
        if (v.preventDefault(), At(i, nr(i) === "OLD" ? "ILS" : "OLD", true), d.value !== "") if (nr(i) === "OLD") {
          if (d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")), d.value.endsWith("ILS-SR-") && (d.value = d.value.replace("ILS-SR-", "")), d.value === "") return;
          d.value += ",";
        } else d.value = d.value.replace(",", ",ILS-SR-");
        else nr(i) === "OLD" ? d.value.endsWith(",ILS-SR-") && (d.value = d.value.replace(",ILS-SR-", "")) : d.value === "" ? d.value = "ILS-SR-" : d.value = ",";
        console.log("last string removed ", d.value.substring(0, d.value.length - 1));
        break;
      case " ":
        v.preventDefault(), d.value += "()";
        const x = d.value.length - 1;
        d.focus(), d.setSelectionRange(x, x);
        break;
      case "Enter":
        v.preventDefault();
        const w = Nt.getInstance();
        let y;
        nr(i) === "OLD" && d.value.endsWith(",") ? y = d.value.substring(0, d.value.length - 1) : nr(i) === "ILS" && d.value.endsWith(",ILS-SR-") ? y = d.value.substring(0, d.value.length - 8) : y = d.value, n(w.updateSpreadsheet(a().isbn, y)), a(a().value = false, true);
    }
  }
  var f = bE(), o = Va(Jt(f), 2), l = Jt(o, true);
  Ct(o);
  var h = Va(o, 2);
  h.__keydown = s, Ff(h, (v) => t(v), () => t()), Ct(f), Tn(() => Sn(l, nr(i) === "OLD" ? "" : "ILS-SR-")), Ia(e, f), zf();
}
$f(["keydown"]);
var AE = Pa('<input type="text" maxlength="1" required inputmode="numeric"/>'), CE = Pa('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja"> </div> <!></div>'), IE = Pa('<div class="message svelte-f3psja"> </div> <!> <button id="search" class="svelte-f3psja"> </button> <button class="download-excel svelte-f3psja">Download Excel Sheet</button>', 1);
function nT(e, r) {
  jf(r, true);
  const t = (B, K = F1) => {
    var J = AE();
    J.__keydown = v, Tn((ie) => {
      Cf(J, 1, `input-${K() + 1}`, "svelte-f3psja"), bf(J, "name", ie), bf(J, "id", `input-${K() + 1}`);
    }, [() => K().toString()]), Ia(B, J);
  };
  let a = Si(""), n, i = Si(Kf({ value: false, isbn: "" })), s = Si(13), f = Si(false), o, l = "";
  async function h() {
    const B = document.querySelectorAll('input[maxlength="1"]');
    nr(i).isbn = Tl(B), At(a, await Ks(nr(i)), true);
  }
  async function v(B) {
    const K = document.querySelectorAll('input[maxlength="1"]'), J = parseInt(B.key), ie = B.target, Ie = B.key === "Backspace", ve = ie.nextElementSibling, Ve = ie.previousElementSibling;
    if (ie.classList.remove("required"), Ie) {
      if (B.preventDefault(), ie.value == "") {
        Ve && Ve.focus();
        return;
      }
      ie.value = "";
      return;
    }
    switch (isNaN(J) || (B.preventDefault(), ie.value == "", ie.value = B.key, ve && ve.focus()), B.key) {
      case "Tab":
        x(B);
        break;
      case "ArrowLeft":
        B.preventDefault(), Ve && Ve.focus();
        break;
      case "ArrowRight":
        B.preventDefault(), ve && ve.focus();
        break;
      case "ArrowUp":
        B.preventDefault(), Ve && Ve.focus();
        break;
      case "ArrowDown":
        B.preventDefault(), ve && ve.focus();
        break;
      case "Enter":
        if (B.preventDefault(), !TE(K)) return;
        nr(i).isbn = Tl(K), SE(K), d(), await Wh(nr(i).isbn), At(a, await Ks(nr(i)), true);
        break;
    }
  }
  function d() {
    if (!nr(i).value) {
      const B = document.querySelectorAll("input[maxlength='1']");
      if (nr(s) === 13) {
        const K = [9, 7, 8];
        for (let J = 0; J < 3; J++) B.item(J).value = K[J].toString();
        setTimeout(() => {
          B.item(3).focus();
        }, 0);
      }
      if (nr(s) === 10) {
        for (let K = 0; K < 10; K++) B.item(K).value = "";
        setTimeout(() => {
          B.item(0).focus();
        }, 0);
      }
    }
  }
  function x(B) {
    B.preventDefault(), At(s, nr(s) === 13 ? 10 : 13, true);
  }
  Q0(() => {
    nr(s) && d();
  }), Q0(() => {
    r.receivedIsbn && r.receivedIsbn !== l && !nr(i).value && (l = r.receivedIsbn, nr(i).isbn = r.receivedIsbn, Ks(nr(i)).then((B) => b1(() => At(a, B, true))), console.log("Input Effect"));
  });
  function w() {
    if (nr(i).isbn.length > 0) {
      At(f, true);
      for (let B = 0; B < nr(i).isbn.length && B < n.length; B++) n[B].value = nr(i).isbn[B], n[B].classList.add("paste-fill"), setTimeout(() => {
        n[B].classList.remove("paste-fill");
      }, 100 * (B + 1));
      nr(i).isbn.length === 13 || nr(i).isbn.length === 10 || nr(i).isbn.length === 9 ? setTimeout(async () => {
        At(a, await Ks(nr(i)), true), At(f, false);
      }, 200 * nr(i).isbn.length) : At(f, false);
    }
  }
  async function y(B) {
    var _a2;
    B.preventDefault();
    const K = ((_a2 = B.clipboardData) == null ? void 0 : _a2.getData("text")) || "";
    nr(i).isbn = K.replace(/\D/g, "").slice(0, 13), w();
  }
  let m;
  Q0(() => {
    console.log("Second Effect"), nr(a) === "Isbn Found Please Input the accession Number" || nr(a).includes("You have done that isbn already") ? (nr(i).value = true, setTimeout(() => {
      o.value = "", o.focus();
    }, 0)) : nr(a) && nr(a) !== "" && (d(), setTimeout(() => {
      At(a, "");
    }, 4e3));
  }), Gf(() => {
    d();
    const B = document.querySelectorAll('input[maxlength="1"]');
    n = [...B], m = Nt.getInstance(), B.forEach((K) => K.addEventListener("focus", (J) => {
      const ie = J.target, Ie = ie.value;
      ie.value = "", ie.value = Ie;
    })), window.addEventListener("paste", (K) => {
      y(K);
    });
  });
  var g = IE(), S = Tf(g), E = Jt(S, true);
  Ct(S);
  var A = Va(S, 2);
  {
    var X = (B) => {
      var K = CE(), J = Jt(K), ie = Jt(J);
      Ct(J);
      var Ie = Va(J, 2);
      zs(Ie, 17, () => ({ length: nr(s) }), Gs, (ve, Ve, ye) => {
        t(ve, () => ye);
      }), Ct(K), Tn(() => Sn(ie, `ISBN-${nr(s) ?? ""}:`)), Ia(B, K);
    }, j = (B) => {
      FE(B, { get message() {
        return nr(a);
      }, set message(K) {
        At(a, K, true);
      }, get isbnFound() {
        return nr(i);
      }, set isbnFound(K) {
        At(i, K, true);
      }, get accessionInput() {
        return o;
      }, set accessionInput(K) {
        o = K;
      } });
    };
    Sf(A, (B) => {
      nr(i).value ? B(j, false) : B(X);
    });
  }
  var F = Va(A, 2);
  F.__click = async () => {
    if (nr(i).value) {
      const B = o.value.trim();
      At(a, m.updateSpreadsheet(nr(i).isbn, B), true), nr(i).value = false;
    } else await h();
  };
  var M = Jt(F, true);
  Ct(F);
  var U = Va(F, 2);
  U.__click = () => m.DownloadSpreadSheet.call(m), Tn(() => {
    Sn(E, nr(a)), Sn(M, nr(i).value ? "Update Accession Number" : "Search For ISBN");
  }), Ia(e, g), zf();
}
$f(["keydown", "click"]);
let DE = Kf({ activeView: false, data: {} });
var js = B1(() => DE), OE = Pa('<th class="table-label svelte-f5kcat"> </th>'), NE = Pa('<td><a target="_blank"> </a></td>'), RE = Pa("<td> </td>"), PE = Pa("<!> <!>", 1), BE = Pa('<tr class="table-row svelte-f5kcat"></tr>'), LE = Pa('<div class="isbn-details svelte-f5kcat"><table class="svelte-f5kcat"><thead class="svelte-f5kcat"><tr class="svelte-f5kcat"></tr></thead><tbody class="svelte-f5kcat"></tbody></table></div> <div id="context_menu" class="hidden svelte-f5kcat"><ul class="svelte-f5kcat"><li id="delete_row" class="svelte-f5kcat">Delete Row</li></ul></div>', 1);
function iT(e, r) {
  jf(r, false);
  let t, a = Ef(), n = Ef(), i;
  async function s(y) {
    if (console.log("event.detail: ", y.detail), y.detail === 2) {
      console.log("Clearing Timer: "), clearTimeout(i);
      return;
    } else i = setTimeout(async () => {
      var _a2, _b;
      console.log(y);
      const g = (_b = (_a2 = y.target.parentElement) == null ? void 0 : _a2.querySelector(".isbn")) == null ? void 0 : _b.textContent;
      console.log("isbn from click: ", g);
      const S = await ua.spreadsheets.where("isbn").equals(g).first();
      S && (js(js().activeView = true), js(js().data = S)), console.log(S), clearTimeout(i);
    }, 200);
  }
  function f(y, m) {
    y.contentEditable = "false", y.textContent == "\u200B" && (y.textContent = "N/A"), t.updateSpreadsheet(m), t.renderSpreadsheet(), ua.spreadsheets.where("isbn").equals(m).modify({ accession: y.textContent });
  }
  Gf(async () => {
    t = Nt.getInstance(), await t.loadFromDatabase(), t.renderSpreadsheet(), nr(a).addEventListener("dblclick", (m) => {
      var _a2;
      const g = m.target, S = g.closest("tr"), E = S.querySelector("td:nth-of-type(3)").textContent, A = S.querySelector("td");
      console.log("activeRow: ", S);
      const X = A.cloneNode(true);
      (_a2 = A.parentNode) == null ? void 0 : _a2.replaceChild(X, A);
      const j = S.querySelector("td");
      if (console.log("newAccessionCell: ", j), j.contentEditable = "true", j.textContent === "N/A") j.textContent = "\u200B", j.focus();
      else {
        j.focus();
        const M = document.createRange();
        M.selectNodeContents(j), M.collapse(false);
        const U = window.getSelection();
        U == null ? void 0 : U.removeAllRanges(), U == null ? void 0 : U.addRange(M);
      }
      j.addEventListener("blur", () => f(j, E), { once: true });
      const F = (M) => {
        console.log(M.key), M.key === "Enter" && (M.preventDefault(), console.log("Key down Pressed"), f(j, E), j.removeEventListener("keydown", F));
      };
      j.addEventListener("keydown", F), t.renderSpreadsheet(), console.log("Real Target: ", g), console.log("Row chosen: ", g.closest("tr")), console.log(E);
    });
    const y = setTimeout(() => {
      t.scrollToView(), clearTimeout(y);
    }, 500);
  }), I1();
  var o = LE(), l = Tf(o), h = Jt(l), v = Jt(h), d = Jt(v);
  zs(d, 5, () => Uh, Gs, (y, m) => {
    var g = OE(), S = Jt(g, true);
    Ct(g), Tn(() => Sn(S, nr(m))), Ia(y, g);
  }), Ct(d), Ct(v);
  var x = Va(v);
  x.__contextmenu = function(...y) {
    yE == null ? void 0 : yE.apply(this, y);
  }, x.__click = s, zs(x, 5, () => Mh.data, Gs, (y, m) => {
    var g = BE();
    zs(g, 5, () => Object.entries(nr(m)), Gs, (S, E) => {
      var A = A1(() => C1(nr(E), 2));
      let X = () => nr(A)[0], j = () => nr(A)[1];
      var F = PE(), M = Tf(F);
      {
        var U = (J) => {
          var ie = NE(), Ie = Jt(ie), ve = Jt(Ie, true);
          Ct(Ie), Ct(ie), Tn(() => {
            Cf(ie, 1, fc(X()), "svelte-f5kcat"), bf(Ie, "href", j()), Sn(ve, j());
          }), Ia(J, ie);
        };
        Sf(M, (J) => {
          X() === "image_links" && J(U);
        });
      }
      var B = Va(M, 2);
      {
        var K = (J) => {
          var ie = RE(), Ie = Jt(ie, true);
          Ct(ie), Tn(() => {
            Cf(ie, 1, fc(X()), "svelte-f5kcat"), Sn(Ie, j());
          }), Ia(J, ie);
        };
        Sf(B, (J) => {
          X() !== "image_links" && J(K);
        });
      }
      Ia(S, F);
    }), Ct(g), Ia(y, g);
  }), Ct(x), Ff(x, (y) => At(a, y), () => nr(a)), Ct(h), Ct(l);
  var w = Va(l, 2);
  Ff(w, (y) => At(n, y), () => nr(n)), Ia(e, o), zf();
}
$f(["contextmenu", "click"]);
export {
  nT as I,
  iT as S,
  Nt as a,
  DE as b,
  B1 as r
};
