var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a9 as ih } from "./BtsFhd5D.js";
import "./BSmzKAbf.js";
var sh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bs = { exports: {} }, oh = bs.exports, mo;
function ch() {
  return mo || (mo = 1, (function(e, r) {
    ((t, a) => {
      e.exports = a();
    })(oh, function() {
      var t = function(o, l) {
        return (t = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(p, m) {
          p.__proto__ = m;
        } : function(p, m) {
          for (var k in m) Object.prototype.hasOwnProperty.call(m, k) && (p[k] = m[k]);
        }))(o, l);
      }, a = function() {
        return (a = Object.assign || function(o) {
          for (var l, p = 1, m = arguments.length; p < m; p++) for (var k in l = arguments[p]) Object.prototype.hasOwnProperty.call(l, k) && (o[k] = l[k]);
          return o;
        }).apply(this, arguments);
      };
      function n(o, l, p) {
        for (var m, k = 0, T = l.length; k < T; k++) !m && k in l || ((m = m || Array.prototype.slice.call(l, 0, k))[k] = l[k]);
        return o.concat(m || Array.prototype.slice.call(l));
      }
      var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : sh, s = Object.keys, f = Array.isArray;
      function c(o, l) {
        return typeof l == "object" && s(l).forEach(function(p) {
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
          w(o, p, l[p]);
        });
      }
      var x = Object.defineProperty;
      function w(o, l, p, m) {
        x(o, l, c(p && v(p, "get") && typeof p.get == "function" ? { get: p.get, set: p.set, configurable: true } : { value: p, configurable: true, writable: true }, m));
      }
      function y(o) {
        return { from: function(l) {
          return o.prototype = Object.create(l.prototype), w(o.prototype, "constructor", o), { extend: d.bind(null, o.prototype) };
        } };
      }
      var _ = Object.getOwnPropertyDescriptor, g = [].slice;
      function F(o, l, p) {
        return g.call(o, l, p);
      }
      function E(o, l) {
        return l(o);
      }
      function I(o) {
        if (!o) throw new Error("Assertion Failed");
      }
      function V(o) {
        i.setImmediate ? setImmediate(o) : setTimeout(o, 0);
      }
      function K(o, l) {
        if (typeof l == "string" && v(o, l)) return o[l];
        if (!l) return o;
        if (typeof l != "string") {
          for (var p = [], m = 0, k = l.length; m < k; ++m) {
            var T = K(o, l[m]);
            p.push(T);
          }
          return p;
        }
        var b, N = l.indexOf(".");
        return N === -1 || (b = o[l.substr(0, N)]) == null ? void 0 : K(b, l.substr(N + 1));
      }
      function A(o, l, p) {
        if (o && l !== void 0 && !("isFrozen" in Object && Object.isFrozen(o))) if (typeof l != "string" && "length" in l) {
          I(typeof p != "string" && "length" in p);
          for (var m = 0, k = l.length; m < k; ++m) A(o, l[m], p[m]);
        } else {
          var T, b, N = l.indexOf(".");
          N !== -1 ? (T = l.substr(0, N), (N = l.substr(N + 1)) === "" ? p === void 0 ? f(o) && !isNaN(parseInt(T)) ? o.splice(T, 1) : delete o[T] : o[T] = p : A(b = (b = o[T]) && v(o, T) ? b : o[T] = {}, N, p)) : p === void 0 ? f(o) && !isNaN(parseInt(l)) ? o.splice(l, 1) : delete o[l] : o[l] = p;
        }
      }
      function H(o) {
        var l, p = {};
        for (l in o) v(o, l) && (p[l] = o[l]);
        return p;
      }
      var W = [].concat;
      function Z(o) {
        return W.apply([], o);
      }
      var Se = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Z([8, 16, 32, 64].map(function(o) {
        return ["Int", "Uint", "Float"].map(function(l) {
          return l + o + "Array";
        });
      }))).filter(function(o) {
        return i[o];
      }), j = new Set(Se.map(function(o) {
        return i[o];
      })), ne = null;
      function de(o) {
        return ne = /* @__PURE__ */ new WeakMap(), o = (function l(p) {
          if (!p || typeof p != "object") return p;
          var m = ne.get(p);
          if (m) return m;
          if (f(p)) {
            m = [], ne.set(p, m);
            for (var k = 0, T = p.length; k < T; ++k) m.push(l(p[k]));
          } else if (j.has(p.constructor)) m = p;
          else {
            var b, N = u(p);
            for (b in m = N === Object.prototype ? {} : Object.create(N), ne.set(p, m), p) v(p, b) && (m[b] = l(p[b]));
          }
          return m;
        })(o), ne = null, o;
      }
      var We = {}.toString;
      function me(o) {
        return We.call(o).slice(8, -1);
      }
      var ze = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ke = typeof ze == "symbol" ? function(o) {
        var l;
        return o != null && (l = o[ze]) && l.apply(o);
      } : function() {
        return null;
      };
      function Be(o, l) {
        l = o.indexOf(l), 0 <= l && o.splice(l, 1);
      }
      var Qe = {};
      function he(o) {
        var l, p, m, k;
        if (arguments.length === 1) {
          if (f(o)) return o.slice();
          if (this === Qe && typeof o == "string") return [o];
          if (k = ke(o)) for (p = []; !(m = k.next()).done; ) p.push(m.value);
          else {
            if (o == null) return [o];
            if (typeof (l = o.length) != "number") return [o];
            for (p = new Array(l); l--; ) p[l] = o[l];
          }
        } else for (l = arguments.length, p = new Array(l); l--; ) p[l] = arguments[l];
        return p;
      }
      var sr = typeof Symbol < "u" ? function(o) {
        return o[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      }, Se = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Vr = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Se), Oe = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function _e(o, l) {
        this.name = o, this.message = l;
      }
      function Ke(o, l) {
        return o + ". Errors: " + Object.keys(l).map(function(p) {
          return l[p].toString();
        }).filter(function(p, m, k) {
          return k.indexOf(p) === m;
        }).join(`
`);
      }
      function je(o, l, p, m) {
        this.failures = l, this.failedKeys = m, this.successCount = p, this.message = Ke(o, l);
      }
      function $e(o, l) {
        this.name = "BulkError", this.failures = Object.keys(l).map(function(p) {
          return l[p];
        }), this.failuresByPos = l, this.message = Ke(o, this.failures);
      }
      y(_e).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), y(je).from(_e), y($e).from(_e);
      var R = Vr.reduce(function(o, l) {
        return o[l] = l + "Error", o;
      }, {}), ee = _e, L = Vr.reduce(function(o, l) {
        var p = l + "Error";
        function m(k, T) {
          this.name = p, k ? typeof k == "string" ? (this.message = "".concat(k).concat(T ? `
 ` + T : ""), this.inner = T || null) : typeof k == "object" && (this.message = "".concat(k.name, " ").concat(k.message), this.inner = k) : (this.message = Oe[l] || p, this.inner = null);
        }
        return y(m).from(ee), o[l] = m, o;
      }, {}), U = (L.Syntax = SyntaxError, L.Type = TypeError, L.Range = RangeError, Se.reduce(function(o, l) {
        return o[l + "Error"] = L[l], o;
      }, {}));
      Se = Vr.reduce(function(o, l) {
        return ["Syntax", "Type", "Range"].indexOf(l) === -1 && (o[l + "Error"] = L[l]), o;
      }, {});
      function ue() {
      }
      function O(o) {
        return o;
      }
      function Ce(o, l) {
        return o == null || o === O ? l : function(p) {
          return l(o(p));
        };
      }
      function Ue(o, l) {
        return function() {
          o.apply(this, arguments), l.apply(this, arguments);
        };
      }
      function Fe(o, l) {
        return o === ue ? l : function() {
          var p = o.apply(this, arguments), m = (p !== void 0 && (arguments[0] = p), this.onsuccess), k = this.onerror, T = (this.onsuccess = null, this.onerror = null, l.apply(this, arguments));
          return m && (this.onsuccess = this.onsuccess ? Ue(m, this.onsuccess) : m), k && (this.onerror = this.onerror ? Ue(k, this.onerror) : k), T !== void 0 ? T : p;
        };
      }
      function ar(o, l) {
        return o === ue ? l : function() {
          o.apply(this, arguments);
          var p = this.onsuccess, m = this.onerror;
          this.onsuccess = this.onerror = null, l.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? Ue(p, this.onsuccess) : p), m && (this.onerror = this.onerror ? Ue(m, this.onerror) : m);
        };
      }
      function rr(o, l) {
        return o === ue ? l : function(k) {
          var m = o.apply(this, arguments), k = (c(k, m), this.onsuccess), T = this.onerror, b = (this.onsuccess = null, this.onerror = null, l.apply(this, arguments));
          return k && (this.onsuccess = this.onsuccess ? Ue(k, this.onsuccess) : k), T && (this.onerror = this.onerror ? Ue(T, this.onerror) : T), m === void 0 ? b === void 0 ? void 0 : b : c(m, b);
        };
      }
      function or(o, l) {
        return o === ue ? l : function() {
          return l.apply(this, arguments) !== false && o.apply(this, arguments);
        };
      }
      function br(o, l) {
        return o === ue ? l : function() {
          var p = o.apply(this, arguments);
          if (p && typeof p.then == "function") {
            for (var m = this, k = arguments.length, T = new Array(k); k--; ) T[k] = arguments[k];
            return p.then(function() {
              return l.apply(m, T);
            });
          }
          return l.apply(this, arguments);
        };
      }
      Se.ModifyError = je, Se.DexieError = _e, Se.BulkError = $e;
      var yr = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Kr(o) {
        yr = o;
      }
      var Ge = {}, kr = 100, Re = typeof Promise > "u" ? [] : (Vr = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [Re = crypto.subtle.digest("SHA-512", new Uint8Array([0])), u(Re), Vr] : [Vr, u(Vr), Vr]), Vr = Re[0], Bn = Re[1], Bn = Bn && Bn.then, qr = Vr && Vr.constructor, Mr = !!Re[2], kt = function(o, l) {
        pa.push([o, l]), Ve && (queueMicrotask(t0), Ve = false);
      }, pt = true, Ve = true, _r = [], jr = [], zr = O, vt = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: ue, pgp: false, env: {}, finalize: ue }, Ze = vt, pa = [], va = 0, nn = [];
      function He(o) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = false;
        var l = this._PSD = Ze;
        if (typeof o != "function") {
          if (o !== Ge) throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === false && Va(this, this._value);
        } else this._state = null, this._value = null, ++l.ref, (function p(m, k) {
          try {
            k(function(T) {
              if (m._state === null) {
                if (T === m) throw new TypeError("A promise cannot be resolved with itself.");
                var b = m._lib && Xa();
                T && typeof T.then == "function" ? p(m, function(N, z) {
                  T instanceof He ? T._then(N, z) : T.then(N, z);
                }) : (m._state = true, m._value = T, Ji(m)), b && Ka();
              }
            }, Va.bind(null, m));
          } catch (T) {
            Va(m, T);
          }
        })(this, o);
      }
      var Qn = { get: function() {
        var o = Ze, l = B;
        function p(m, k) {
          var T = this, b = !o.global && (o !== Ze || l !== B), N = b && !M(), z = new He(function(ae, q) {
            ei(T, new Zi(Te(m, o, b, N), Te(k, o, b, N), ae, q, o));
          });
          return this._consoleTask && (z._consoleTask = this._consoleTask), z;
        }
        return p.prototype = Ge, p;
      }, set: function(o) {
        w(this, "then", o && o.prototype === Ge ? Qn : { get: function() {
          return o;
        }, set: Qn.set });
      } };
      function Zi(o, l, p, m, k) {
        this.onFulfilled = typeof o == "function" ? o : null, this.onRejected = typeof l == "function" ? l : null, this.resolve = p, this.reject = m, this.psd = k;
      }
      function Va(o, l) {
        var p, m;
        jr.push(l), o._state === null && (p = o._lib && Xa(), l = zr(l), o._state = false, o._value = l, m = o, _r.some(function(k) {
          return k._value === m._value;
        }) || _r.push(m), Ji(o), p) && Ka();
      }
      function Ji(o) {
        var l = o._listeners;
        o._listeners = [];
        for (var p = 0, m = l.length; p < m; ++p) ei(o, l[p]);
        var k = o._PSD;
        --k.ref || k.finalize(), va === 0 && (++va, kt(function() {
          --va == 0 && ri();
        }, []));
      }
      function ei(o, l) {
        if (o._state === null) o._listeners.push(l);
        else {
          var p = o._state ? l.onFulfilled : l.onRejected;
          if (p === null) return (o._state ? l.resolve : l.reject)(o._value);
          ++l.psd.ref, ++va, kt(r0, [p, o, l]);
        }
      }
      function r0(o, l, p) {
        try {
          var m, k = l._value;
          !l._state && jr.length && (jr = []), m = yr && l._consoleTask ? l._consoleTask.run(function() {
            return o(k);
          }) : o(k), l._state || jr.indexOf(k) !== -1 || ((T) => {
            for (var b = _r.length; b; ) if (_r[--b]._value === T._value) return _r.splice(b, 1);
          })(l), p.resolve(m);
        } catch (T) {
          p.reject(T);
        } finally {
          --va == 0 && ri(), --p.psd.ref || p.psd.finalize();
        }
      }
      function t0() {
        ie(vt, function() {
          Xa() && Ka();
        });
      }
      function Xa() {
        var o = pt;
        return Ve = pt = false, o;
      }
      function Ka() {
        var o, l, p;
        do
          for (; 0 < pa.length; ) for (o = pa, pa = [], p = o.length, l = 0; l < p; ++l) {
            var m = o[l];
            m[0].apply(null, m[1]);
          }
        while (0 < pa.length);
        Ve = pt = true;
      }
      function ri() {
        for (var o = _r, l = (_r = [], o.forEach(function(m) {
          m._PSD.onunhandled.call(null, m._value, m);
        }), nn.slice(0)), p = l.length; p; ) l[--p]();
      }
      function Dn(o) {
        return new He(Ge, false, o);
      }
      function Ur(o, l) {
        var p = Ze;
        return function() {
          var m = Xa(), k = Ze;
          try {
            return te(p, true), o.apply(this, arguments);
          } catch (T) {
            l && l(T);
          } finally {
            te(k, false), m && Ka();
          }
        };
      }
      d(He.prototype, { then: Qn, _then: function(o, l) {
        ei(this, new Zi(null, null, o, l, Ze));
      }, catch: function(o) {
        var l, p;
        return arguments.length === 1 ? this.then(null, o) : (l = o, p = arguments[1], typeof l == "function" ? this.then(null, function(m) {
          return (m instanceof l ? p : Dn)(m);
        }) : this.then(null, function(m) {
          return (m && m.name === l ? p : Dn)(m);
        }));
      }, finally: function(o) {
        return this.then(function(l) {
          return He.resolve(o()).then(function() {
            return l;
          });
        }, function(l) {
          return He.resolve(o()).then(function() {
            return Dn(l);
          });
        });
      }, timeout: function(o, l) {
        var p = this;
        return o < 1 / 0 ? new He(function(m, k) {
          var T = setTimeout(function() {
            return k(new L.Timeout(l));
          }, o);
          p.then(m, k).finally(clearTimeout.bind(null, T));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && w(He.prototype, Symbol.toStringTag, "Dexie.Promise"), vt.env = ce(), d(He, { all: function() {
        var o = he.apply(null, arguments).map(fe);
        return new He(function(l, p) {
          o.length === 0 && l([]);
          var m = o.length;
          o.forEach(function(k, T) {
            return He.resolve(k).then(function(b) {
              o[T] = b, --m || l(o);
            }, p);
          });
        });
      }, resolve: function(o) {
        return o instanceof He ? o : o && typeof o.then == "function" ? new He(function(l, p) {
          o.then(l, p);
        }) : new He(Ge, true, o);
      }, reject: Dn, race: function() {
        var o = he.apply(null, arguments).map(fe);
        return new He(function(l, p) {
          o.map(function(m) {
            return He.resolve(m).then(l, p);
          });
        });
      }, PSD: { get: function() {
        return Ze;
      }, set: function(o) {
        return Ze = o;
      } }, totalEchoes: { get: function() {
        return B;
      } }, newPSD: D, usePSD: ie, scheduler: { get: function() {
        return kt;
      }, set: function(o) {
        kt = o;
      } }, rejectionMapper: { get: function() {
        return zr;
      }, set: function(o) {
        zr = o;
      } }, follow: function(o, l) {
        return new He(function(p, m) {
          return D(function(k, T) {
            var b = Ze;
            b.unhandleds = [], b.onunhandled = T, b.finalize = Ue(function() {
              var N, z = this;
              N = function() {
                z.unhandleds.length === 0 ? k() : T(z.unhandleds[0]);
              }, nn.push(function ae() {
                N(), nn.splice(nn.indexOf(ae), 1);
              }), ++va, kt(function() {
                --va == 0 && ri();
              }, []);
            }, b.finalize), o();
          }, l, p, m);
        });
      } }), qr && (qr.allSettled && w(He, "allSettled", function() {
        var o = he.apply(null, arguments).map(fe);
        return new He(function(l) {
          o.length === 0 && l([]);
          var p = o.length, m = new Array(p);
          o.forEach(function(k, T) {
            return He.resolve(k).then(function(b) {
              return m[T] = { status: "fulfilled", value: b };
            }, function(b) {
              return m[T] = { status: "rejected", reason: b };
            }).then(function() {
              return --p || l(m);
            });
          });
        });
      }), qr.any && typeof AggregateError < "u" && w(He, "any", function() {
        var o = he.apply(null, arguments).map(fe);
        return new He(function(l, p) {
          o.length === 0 && p(new AggregateError([]));
          var m = o.length, k = new Array(m);
          o.forEach(function(T, b) {
            return He.resolve(T).then(function(N) {
              return l(N);
            }, function(N) {
              k[b] = N, --m || p(new AggregateError(k));
            });
          });
        });
      }), qr.withResolvers) && (He.withResolvers = qr.withResolvers);
      var st = { awaits: 0, echoes: 0, id: 0 }, a0 = 0, In = [], S = 0, B = 0, C = 0;
      function D(o, b, p, m) {
        var k = Ze, T = Object.create(k), b = (T.parent = k, T.ref = 0, T.global = false, T.id = ++C, vt.env, T.env = Mr ? { Promise: He, PromiseProp: { value: He, configurable: true, writable: true }, all: He.all, race: He.race, allSettled: He.allSettled, any: He.any, resolve: He.resolve, reject: He.reject } : {}, b && c(T, b), ++k.ref, T.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, ie(T, o, p, m));
        return T.ref === 0 && T.finalize(), b;
      }
      function P() {
        return st.id || (st.id = ++a0), ++st.awaits, st.echoes += kr, st.id;
      }
      function M() {
        return !!st.awaits && (--st.awaits == 0 && (st.id = 0), st.echoes = st.awaits * kr, true);
      }
      function fe(o) {
        return st.echoes && o && o.constructor === qr ? (P(), o.then(function(l) {
          return M(), l;
        }, function(l) {
          return M(), De(l);
        })) : o;
      }
      function xe() {
        var o = In[In.length - 1];
        In.pop(), te(o, false);
      }
      function te(o, l) {
        var p, m, k = Ze;
        (l ? !st.echoes || S++ && o === Ze : !S || --S && o === Ze) || queueMicrotask(l ? (function(T) {
          ++B, st.echoes && --st.echoes != 0 || (st.echoes = st.awaits = st.id = 0), In.push(Ze), te(T, true);
        }).bind(null, o) : xe), o !== Ze && (Ze = o, k === vt && (vt.env = ce()), Mr) && (p = vt.env.Promise, m = o.env, k.global || o.global) && (Object.defineProperty(i, "Promise", m.PromiseProp), p.all = m.all, p.race = m.race, p.resolve = m.resolve, p.reject = m.reject, m.allSettled && (p.allSettled = m.allSettled), m.any) && (p.any = m.any);
      }
      function ce() {
        var o = i.Promise;
        return Mr ? { Promise: o, PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"), all: o.all, race: o.race, allSettled: o.allSettled, any: o.any, resolve: o.resolve, reject: o.reject } : {};
      }
      function ie(o, l, p, m, k) {
        var T = Ze;
        try {
          return te(o, true), l(p, m, k);
        } finally {
          te(T, false);
        }
      }
      function Te(o, l, p, m) {
        return typeof o != "function" ? o : function() {
          var k = Ze;
          p && P(), te(l, true);
          try {
            return o.apply(this, arguments);
          } finally {
            te(k, false), m && queueMicrotask(M);
          }
        };
      }
      function Pe(o) {
        Promise === qr && st.echoes === 0 ? S === 0 ? o() : enqueueNativeMicroTask(o) : setTimeout(o, 0);
      }
      ("" + Bn).indexOf("[native code]") === -1 && (P = M = ue);
      var De = He.reject, we = "\uFFFF", be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", cr = "String expected.", Or = [], Wr = "__dbnames", ft = "readonly", Ca = "readwrite";
      function Kt(o, l) {
        return o ? l ? function() {
          return o.apply(this, arguments) && l.apply(this, arguments);
        } : o : l;
      }
      var ja = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function Zt(o) {
        return typeof o != "string" || /\./.test(o) ? function(l) {
          return l;
        } : function(l) {
          return l[o] === void 0 && o in l && delete (l = de(l))[o], l;
        };
      }
      function On() {
        throw L.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ur(o, l) {
        try {
          var p = Kf(o), m = Kf(l);
          if (p !== m) return p === "Array" ? 1 : m === "Array" ? -1 : p === "binary" ? 1 : m === "binary" ? -1 : p === "string" ? 1 : m === "string" ? -1 : p === "Date" ? 1 : m !== "Date" ? NaN : -1;
          switch (p) {
            case "number":
            case "Date":
            case "string":
              return l < o ? 1 : o < l ? -1 : 0;
            case "binary":
              for (var k = jf(o), T = jf(l), b = k.length, N = T.length, z = b < N ? b : N, ae = 0; ae < z; ++ae) if (k[ae] !== T[ae]) return k[ae] < T[ae] ? -1 : 1;
              return b === N ? 0 : b < N ? -1 : 1;
            case "Array":
              for (var q = o, X = l, J = q.length, Q = X.length, Y = J < Q ? J : Q, G = 0; G < Y; ++G) {
                var se = ur(q[G], X[G]);
                if (se !== 0) return se;
              }
              return J === Q ? 0 : J < Q ? -1 : 1;
          }
        } catch {
        }
        return NaN;
      }
      function Kf(o) {
        var l = typeof o;
        return l == "object" && (ArrayBuffer.isView(o) || (l = me(o)) === "ArrayBuffer") ? "binary" : l;
      }
      function jf(o) {
        return o instanceof Uint8Array ? o : ArrayBuffer.isView(o) ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength) : new Uint8Array(o);
      }
      function Qi(o, l, p) {
        var m = o.schema.yProps;
        return m ? (l && 0 < p.numFailures && (l = l.filter(function(k, T) {
          return !p.failures[T];
        })), Promise.all(m.map(function(k) {
          return k = k.updatesTable, l ? o.db.table(k).where("k").anyOf(l).delete() : o.db.table(k).clear();
        })).then(function() {
          return p;
        })) : p;
      }
      Gf.prototype.execute = function(o) {
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
          var m = l.remove;
          if (f(m)) return f(o) ? o.filter(function(k) {
            return !m.includes(k);
          }).sort() : [];
          if (typeof m == "number") return Number(o) - m;
          if (typeof m == "bigint") try {
            return BigInt(o) - m;
          } catch {
            return BigInt(0) - m;
          }
          throw new TypeError("Invalid subtrahend ".concat(m));
        }
        return p = (p = l.replacePrefix) == null ? void 0 : p[0], p && typeof o == "string" && o.startsWith(p) ? l.replacePrefix[1] + o.substring(p.length) : o;
      };
      var ti = Gf;
      function Gf(o) {
        this["@@propmod"] = o;
      }
      function zf(o, l) {
        for (var p = s(l), m = p.length, k = false, T = 0; T < m; ++T) {
          var b = p[T], N = l[b], z = K(o, b);
          N instanceof ti ? (A(o, b, N.execute(z)), k = true) : z !== N && (A(o, b, N), k = true);
        }
        return k;
      }
      Xr.prototype._trans = function(o, l, p) {
        var m = this._tx || Ze.trans, k = this.name, T = yr && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(o === "readonly" ? "read" : "write", " ").concat(this.name));
        function b(ae, q, X) {
          if (X.schema[k]) return l(X.idbtrans, X);
          throw new L.NotFound("Table " + k + " not part of transaction");
        }
        var N = Xa();
        try {
          var z = m && m.db._novip === this.db._novip ? m === Ze.trans ? m._promise(o, b, p) : D(function() {
            return m._promise(o, b, p);
          }, { trans: m, transless: Ze.transless || Ze }) : (function ae(q, X, J, Q) {
            if (q.idbdb && (q._state.openComplete || Ze.letThrough || q._vip)) {
              var Y = q._createTransaction(X, J, q._dbSchema);
              try {
                Y.create(), q._state.PR1398_maxLoop = 3;
              } catch (G) {
                return G.name === R.InvalidState && q.isOpen() && 0 < --q._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), q.close({ disableAutoOpen: false }), q.open().then(function() {
                  return ae(q, X, J, Q);
                })) : De(G);
              }
              return Y._promise(X, function(G, se) {
                return D(function() {
                  return Ze.trans = Y, Q(G, se, Y);
                });
              }).then(function(G) {
                if (X === "readwrite") try {
                  Y.idbtrans.commit();
                } catch {
                }
                return X === "readonly" ? G : Y._completion.then(function() {
                  return G;
                });
              });
            }
            if (q._state.openComplete) return De(new L.DatabaseClosed(q._state.dbOpenError));
            if (!q._state.isBeingOpened) {
              if (!q._state.autoOpen) return De(new L.DatabaseClosed());
              q.open().catch(ue);
            }
            return q._state.dbReadyPromise.then(function() {
              return ae(q, X, J, Q);
            });
          })(this.db, o, [this.name], b);
          return T && (z._consoleTask = T, z = z.catch(function(ae) {
            return console.trace(ae), De(ae);
          })), z;
        } finally {
          N && Ka();
        }
      }, Xr.prototype.get = function(o, l) {
        var p = this;
        return o && o.constructor === Object ? this.where(o).first(l) : o == null ? De(new L.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(m) {
          return p.core.get({ trans: m, key: o }).then(function(k) {
            return p.hook.reading.fire(k);
          });
        }).then(l);
      }, Xr.prototype.where = function(o) {
        if (typeof o == "string") return new this.db.WhereClause(this, o);
        if (f(o)) return new this.db.WhereClause(this, "[".concat(o.join("+"), "]"));
        var l = s(o);
        if (l.length === 1) return this.where(l[0]).equals(o[l[0]]);
        var p = this.schema.indexes.concat(this.schema.primKey).filter(function(N) {
          if (N.compound && l.every(function(ae) {
            return 0 <= N.keyPath.indexOf(ae);
          })) {
            for (var z = 0; z < l.length; ++z) if (l.indexOf(N.keyPath[z]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(N, z) {
          return N.keyPath.length - z.keyPath.length;
        })[0];
        if (p && this.db._maxKey !== we) return b = p.keyPath.slice(0, l.length), this.where(b).equals(b.map(function(N) {
          return o[N];
        }));
        !p && yr && console.warn("The query ".concat(JSON.stringify(o), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(l.join("+"), "]"));
        var m = this.schema.idxByName;
        function k(N, z) {
          return ur(N, z) === 0;
        }
        var b = l.reduce(function(q, z) {
          var ae = q[0], q = q[1], X = m[z], J = o[z];
          return [ae || X, ae || !X ? Kt(q, X && X.multi ? function(Q) {
            return Q = K(Q, z), f(Q) && Q.some(function(Y) {
              return k(J, Y);
            });
          } : function(Q) {
            return k(J, K(Q, z));
          }) : q];
        }, [null, null]), T = b[0], b = b[1];
        return T ? this.where(T.name).equals(o[T.keyPath]).filter(b) : p ? this.filter(b) : this.where(l).equals("");
      }, Xr.prototype.filter = function(o) {
        return this.toCollection().and(o);
      }, Xr.prototype.count = function(o) {
        return this.toCollection().count(o);
      }, Xr.prototype.offset = function(o) {
        return this.toCollection().offset(o);
      }, Xr.prototype.limit = function(o) {
        return this.toCollection().limit(o);
      }, Xr.prototype.each = function(o) {
        return this.toCollection().each(o);
      }, Xr.prototype.toArray = function(o) {
        return this.toCollection().toArray(o);
      }, Xr.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Xr.prototype.orderBy = function(o) {
        return new this.db.Collection(new this.db.WhereClause(this, f(o) ? "[".concat(o.join("+"), "]") : o));
      }, Xr.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Xr.prototype.mapToClass = function(o) {
        for (var l = this.db, p = this.name, m = ((this.schema.mappedClass = o).prototype instanceof On && (o = ((b) => {
          var N = q, z = b;
          if (typeof z != "function" && z !== null) throw new TypeError("Class extends value " + String(z) + " is not a constructor or null");
          function ae() {
            this.constructor = N;
          }
          function q() {
            return b !== null && b.apply(this, arguments) || this;
          }
          return t(N, z), N.prototype = z === null ? Object.create(z) : (ae.prototype = z.prototype, new ae()), Object.defineProperty(q.prototype, "db", { get: function() {
            return l;
          }, enumerable: false, configurable: true }), q.prototype.table = function() {
            return p;
          }, q;
        })(o)), /* @__PURE__ */ new Set()), k = o.prototype; k; k = u(k)) Object.getOwnPropertyNames(k).forEach(function(b) {
          return m.add(b);
        });
        function T(b) {
          if (!b) return b;
          var N, z = Object.create(o.prototype);
          for (N in b) if (!m.has(N)) try {
            z[N] = b[N];
          } catch {
          }
          return z;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = T, this.hook("reading", T), o;
      }, Xr.prototype.defineClass = function() {
        return this.mapToClass(function(o) {
          c(this, o);
        });
      }, Xr.prototype.add = function(o, l) {
        var p = this, m = this.schema.primKey, k = m.auto, T = m.keyPath, b = o;
        return T && k && (b = Zt(T)(o)), this._trans("readwrite", function(N) {
          return p.core.mutate({ trans: N, type: "add", keys: l != null ? [l] : null, values: [b] });
        }).then(function(N) {
          return N.numFailures ? He.reject(N.failures[0]) : N.lastResult;
        }).then(function(N) {
          if (T) try {
            A(o, T, N);
          } catch {
          }
          return N;
        });
      }, Xr.prototype.upsert = function(o, l) {
        var p = this, m = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(k) {
          return p.core.get({ trans: k, key: o }).then(function(T) {
            var b = T ?? {};
            return zf(b, l), m && A(b, m, o), p.core.mutate({ trans: k, type: "put", values: [b], keys: [o], upsert: true, updates: { keys: [o], changeSpecs: [l] } }).then(function(N) {
              return N.numFailures ? He.reject(N.failures[0]) : !!T;
            });
          });
        });
      }, Xr.prototype.update = function(o, l) {
        return typeof o != "object" || f(o) ? this.where(":id").equals(o).modify(l) : (o = K(o, this.schema.primKey.keyPath)) === void 0 ? De(new L.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(o).modify(l);
      }, Xr.prototype.put = function(o, l) {
        var p = this, m = this.schema.primKey, k = m.auto, T = m.keyPath, b = o;
        return T && k && (b = Zt(T)(o)), this._trans("readwrite", function(N) {
          return p.core.mutate({ trans: N, type: "put", values: [b], keys: l != null ? [l] : null });
        }).then(function(N) {
          return N.numFailures ? He.reject(N.failures[0]) : N.lastResult;
        }).then(function(N) {
          if (T) try {
            A(o, T, N);
          } catch {
          }
          return N;
        });
      }, Xr.prototype.delete = function(o) {
        var l = this;
        return this._trans("readwrite", function(p) {
          return l.core.mutate({ trans: p, type: "delete", keys: [o] }).then(function(m) {
            return Qi(l, [o], m);
          }).then(function(m) {
            return m.numFailures ? He.reject(m.failures[0]) : void 0;
          });
        });
      }, Xr.prototype.clear = function() {
        var o = this;
        return this._trans("readwrite", function(l) {
          return o.core.mutate({ trans: l, type: "deleteRange", range: ja }).then(function(p) {
            return Qi(o, null, p);
          });
        }).then(function(l) {
          return l.numFailures ? He.reject(l.failures[0]) : void 0;
        });
      }, Xr.prototype.bulkGet = function(o) {
        var l = this;
        return this._trans("readonly", function(p) {
          return l.core.getMany({ keys: o, trans: p }).then(function(m) {
            return m.map(function(k) {
              return l.hook.reading.fire(k);
            });
          });
        });
      }, Xr.prototype.bulkAdd = function(o, l, p) {
        var m = this, k = Array.isArray(l) ? l : void 0, T = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(b) {
          var N = m.schema.primKey, ae = N.auto, N = N.keyPath;
          if (N && k) throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== o.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var z = o.length, ae = N && ae ? o.map(Zt(N)) : o;
          return m.core.mutate({ trans: b, type: "add", keys: k, values: ae, wantResults: T }).then(function(q) {
            var X = q.numFailures, J = q.failures;
            if (X === 0) return T ? q.results : q.lastResult;
            throw new $e("".concat(m.name, ".bulkAdd(): ").concat(X, " of ").concat(z, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkPut = function(o, l, p) {
        var m = this, k = Array.isArray(l) ? l : void 0, T = (p = p || (k ? void 0 : l)) ? p.allKeys : void 0;
        return this._trans("readwrite", function(b) {
          var N = m.schema.primKey, ae = N.auto, N = N.keyPath;
          if (N && k) throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (k && k.length !== o.length) throw new L.InvalidArgument("Arguments objects and keys must have the same length");
          var z = o.length, ae = N && ae ? o.map(Zt(N)) : o;
          return m.core.mutate({ trans: b, type: "put", keys: k, values: ae, wantResults: T }).then(function(q) {
            var X = q.numFailures, J = q.failures;
            if (X === 0) return T ? q.results : q.lastResult;
            throw new $e("".concat(m.name, ".bulkPut(): ").concat(X, " of ").concat(z, " operations failed"), J);
          });
        });
      }, Xr.prototype.bulkUpdate = function(o) {
        var l = this, p = this.core, m = o.map(function(b) {
          return b.key;
        }), k = o.map(function(b) {
          return b.changes;
        }), T = [];
        return this._trans("readwrite", function(b) {
          return p.getMany({ trans: b, keys: m, cache: "clone" }).then(function(N) {
            var z = [], ae = [], q = (o.forEach(function(X, J) {
              var Q = X.key, Y = X.changes, G = N[J];
              if (G) {
                for (var se = 0, le = Object.keys(Y); se < le.length; se++) {
                  var re = le[se], pe = Y[re];
                  if (re === l.schema.primKey.keyPath) {
                    if (ur(pe, Q) !== 0) throw new L.Constraint("Cannot update primary key in bulkUpdate()");
                  } else A(G, re, pe);
                }
                T.push(J), z.push(Q), ae.push(G);
              }
            }), z.length);
            return p.mutate({ trans: b, type: "put", keys: z, values: ae, updates: { keys: m, changeSpecs: k } }).then(function(X) {
              var J = X.numFailures, Q = X.failures;
              if (J === 0) return q;
              for (var Y = 0, G = Object.keys(Q); Y < G.length; Y++) {
                var se, le = G[Y], re = T[Number(le)];
                re != null && (se = Q[le], delete Q[le], Q[re] = se);
              }
              throw new $e("".concat(l.name, ".bulkUpdate(): ").concat(J, " of ").concat(q, " operations failed"), Q);
            });
          });
        });
      }, Xr.prototype.bulkDelete = function(o) {
        var l = this, p = o.length;
        return this._trans("readwrite", function(m) {
          return l.core.mutate({ trans: m, type: "delete", keys: o }).then(function(k) {
            return Qi(l, o, k);
          });
        }).then(function(m) {
          var k = m.numFailures, T = m.failures;
          if (k === 0) return m.lastResult;
          throw new $e("".concat(l.name, ".bulkDelete(): ").concat(k, " of ").concat(p, " operations failed"), T);
        });
      };
      var $f = Xr;
      function Xr() {
      }
      function ai(o) {
        function l(b, N) {
          if (N) {
            for (var z = arguments.length, ae = new Array(z - 1); --z; ) ae[z - 1] = arguments[z];
            return p[b].subscribe.apply(null, ae), o;
          }
          if (typeof b == "string") return p[b];
        }
        var p = {};
        l.addEventType = T;
        for (var m = 1, k = arguments.length; m < k; ++m) T(arguments[m]);
        return l;
        function T(b, N, z) {
          var ae, q;
          if (typeof b != "object") return N = N || or, q = { subscribers: [], fire: z = z || ue, subscribe: function(X) {
            q.subscribers.indexOf(X) === -1 && (q.subscribers.push(X), q.fire = N(q.fire, X));
          }, unsubscribe: function(X) {
            q.subscribers = q.subscribers.filter(function(J) {
              return J !== X;
            }), q.fire = q.subscribers.reduce(N, z);
          } }, p[b] = l[b] = q;
          s(ae = b).forEach(function(X) {
            var J = ae[X];
            if (f(J)) T(X, ae[X][0], ae[X][1]);
            else {
              if (J !== "asap") throw new L.InvalidArgument("Invalid event config");
              var Q = T(X, O, function() {
                for (var Y = arguments.length, G = new Array(Y); Y--; ) G[Y] = arguments[Y];
                Q.subscribers.forEach(function(se) {
                  V(function() {
                    se.apply(null, G);
                  });
                });
              });
            }
          });
        }
      }
      function ni(o, l) {
        return y(l).from({ prototype: o }), l;
      }
      function Nn(o, l) {
        return !(o.filter || o.algorithm || o.or) && (l ? o.justLimit : !o.replayFilter);
      }
      function n0(o, l) {
        o.filter = Kt(o.filter, l);
      }
      function i0(o, l, p) {
        var m = o.replayFilter;
        o.replayFilter = m ? function() {
          return Kt(m(), l());
        } : l, o.justLimit = p && !m;
      }
      function es(o, l) {
        if (o.isPrimKey) return l.primaryKey;
        var p = l.getIndexByKeyPath(o.index);
        if (p) return p;
        throw new L.Schema("KeyPath " + o.index + " on object store " + l.name + " is not indexed");
      }
      function qf(o, l, p) {
        var m = es(o, l.schema);
        return l.openCursor({ trans: p, values: !o.keysOnly, reverse: o.dir === "prev", unique: !!o.unique, query: { index: m, range: o.range } });
      }
      function rs(o, l, p, m) {
        var k, T, b = o.replayFilter ? Kt(o.filter, o.replayFilter()) : o.filter;
        return o.or ? (k = {}, T = function(N, z, ae) {
          var q, X;
          b && !b(z, ae, function(J) {
            return z.stop(J);
          }, function(J) {
            return z.fail(J);
          }) || ((X = "" + (q = z.primaryKey)) == "[object ArrayBuffer]" && (X = "" + new Uint8Array(q)), v(k, X)) || (k[X] = true, l(N, z, ae));
        }, Promise.all([o.or._iterate(T, p), Yf(qf(o, m, p), o.algorithm, T, !o.keysOnly && o.valueMapper)])) : Yf(qf(o, m, p), Kt(o.algorithm, b), l, !o.keysOnly && o.valueMapper);
      }
      function Yf(o, l, p, m) {
        var k = Ur(m ? function(T, b, N) {
          return p(m(T), b, N);
        } : p);
        return o.then(function(T) {
          if (T) return T.start(function() {
            var b = function() {
              return T.continue();
            };
            l && !l(T, function(N) {
              return b = N;
            }, function(N) {
              T.stop(N), b = ue;
            }, function(N) {
              T.fail(N), b = ue;
            }) || k(T.value, T, function(N) {
              return b = N;
            }), b();
          });
        });
      }
      Dr.prototype._read = function(o, l) {
        var p = this._ctx;
        return p.error ? p.table._trans(null, De.bind(null, p.error)) : p.table._trans("readonly", o).then(l);
      }, Dr.prototype._write = function(o) {
        var l = this._ctx;
        return l.error ? l.table._trans(null, De.bind(null, l.error)) : l.table._trans("readwrite", o, "locked");
      }, Dr.prototype._addAlgorithm = function(o) {
        var l = this._ctx;
        l.algorithm = Kt(l.algorithm, o);
      }, Dr.prototype._iterate = function(o, l) {
        return rs(this._ctx, o, l, this._ctx.table.core);
      }, Dr.prototype.clone = function(o) {
        var l = Object.create(this.constructor.prototype), p = Object.create(this._ctx);
        return o && c(p, o), l._ctx = p, l;
      }, Dr.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Dr.prototype.each = function(o) {
        var l = this._ctx;
        return this._read(function(p) {
          return rs(l, o, p, l.table.core);
        });
      }, Dr.prototype.count = function(o) {
        var l = this;
        return this._read(function(p) {
          var m, k = l._ctx, T = k.table.core;
          return Nn(k, true) ? T.count({ trans: p, query: { index: es(k, T.schema), range: k.range } }).then(function(b) {
            return Math.min(b, k.limit);
          }) : (m = 0, rs(k, function() {
            return ++m, false;
          }, p, T).then(function() {
            return m;
          }));
        }).then(o);
      }, Dr.prototype.sortBy = function(o, l) {
        var p = o.split(".").reverse(), m = p[0], k = p.length - 1;
        function T(z, ae) {
          return ae ? T(z[p[ae]], ae - 1) : z[m];
        }
        var b = this._ctx.dir === "next" ? 1 : -1;
        function N(z, ae) {
          return ur(T(z, k), T(ae, k)) * b;
        }
        return this.toArray(function(z) {
          return z.sort(N);
        }).then(l);
      }, Dr.prototype.toArray = function(o) {
        var l = this;
        return this._read(function(p) {
          var m, k, T, b = l._ctx;
          return b.dir === "next" && Nn(b, true) && 0 < b.limit ? (m = b.valueMapper, k = es(b, b.table.core.schema), b.table.core.query({ trans: p, limit: b.limit, values: true, query: { index: k, range: b.range } }).then(function(N) {
            return N = N.result, m ? N.map(m) : N;
          })) : (T = [], rs(b, function(N) {
            return T.push(N);
          }, p, b.table.core).then(function() {
            return T;
          }));
        }, o);
      }, Dr.prototype.offset = function(o) {
        var l = this._ctx;
        return o <= 0 || (l.offset += o, Nn(l) ? i0(l, function() {
          var p = o;
          return function(m, k) {
            return p === 0 || (p === 1 ? --p : k(function() {
              m.advance(p), p = 0;
            }), false);
          };
        }) : i0(l, function() {
          var p = o;
          return function() {
            return --p < 0;
          };
        })), this;
      }, Dr.prototype.limit = function(o) {
        return this._ctx.limit = Math.min(this._ctx.limit, o), i0(this._ctx, function() {
          var l = o;
          return function(p, m, k) {
            return --l <= 0 && m(k), 0 <= l;
          };
        }, true), this;
      }, Dr.prototype.until = function(o, l) {
        return n0(this._ctx, function(p, m, k) {
          return !o(p.value) || (m(k), l);
        }), this;
      }, Dr.prototype.first = function(o) {
        return this.limit(1).toArray(function(l) {
          return l[0];
        }).then(o);
      }, Dr.prototype.last = function(o) {
        return this.reverse().first(o);
      }, Dr.prototype.filter = function(o) {
        var l;
        return n0(this._ctx, function(p) {
          return o(p.value);
        }), (l = this._ctx).isMatch = Kt(l.isMatch, o), this;
      }, Dr.prototype.and = function(o) {
        return this.filter(o);
      }, Dr.prototype.or = function(o) {
        return new this.db.WhereClause(this._ctx.table, o, this);
      }, Dr.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Dr.prototype.desc = function() {
        return this.reverse();
      }, Dr.prototype.eachKey = function(o) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, m) {
          o(m.key, m);
        });
      }, Dr.prototype.eachUniqueKey = function(o) {
        return this._ctx.unique = "unique", this.eachKey(o);
      }, Dr.prototype.eachPrimaryKey = function(o) {
        var l = this._ctx;
        return l.keysOnly = !l.isMatch, this.each(function(p, m) {
          o(m.primaryKey, m);
        });
      }, Dr.prototype.keys = function(o) {
        var l = this._ctx, p = (l.keysOnly = !l.isMatch, []);
        return this.each(function(m, k) {
          p.push(k.key);
        }).then(function() {
          return p;
        }).then(o);
      }, Dr.prototype.primaryKeys = function(o) {
        var l = this._ctx;
        if (l.dir === "next" && Nn(l, true) && 0 < l.limit) return this._read(function(m) {
          var k = es(l, l.table.core.schema);
          return l.table.core.query({ trans: m, values: false, limit: l.limit, query: { index: k, range: l.range } });
        }).then(function(m) {
          return m.result;
        }).then(o);
        l.keysOnly = !l.isMatch;
        var p = [];
        return this.each(function(m, k) {
          p.push(k.primaryKey);
        }).then(function() {
          return p;
        }).then(o);
      }, Dr.prototype.uniqueKeys = function(o) {
        return this._ctx.unique = "unique", this.keys(o);
      }, Dr.prototype.firstKey = function(o) {
        return this.limit(1).keys(function(l) {
          return l[0];
        }).then(o);
      }, Dr.prototype.lastKey = function(o) {
        return this.reverse().firstKey(o);
      }, Dr.prototype.distinct = function() {
        var o, l = this._ctx, l = l.index && l.table.schema.idxByName[l.index];
        return l && l.multi && (o = {}, n0(this._ctx, function(m) {
          var m = m.primaryKey.toString(), k = v(o, m);
          return o[m] = true, !k;
        })), this;
      }, Dr.prototype.modify = function(o) {
        var l = this, p = this._ctx;
        return this._write(function(m) {
          function k(G, se) {
            var le = se.failures;
            J += G - se.numFailures;
            for (var re = 0, pe = s(le); re < pe.length; re++) {
              var ye = pe[re];
              X.push(le[ye]);
            }
          }
          var T = typeof o == "function" ? o : function(G) {
            return zf(G, o);
          }, b = p.table.core, q = b.schema.primaryKey, N = q.outbound, z = q.extractKey, ae = 200, q = l.db._options.modifyChunkSize, X = (q && (ae = typeof q == "object" ? q[b.name] || q["*"] || 200 : q), []), J = 0, Q = [], Y = o === Zf;
          return l.clone().primaryKeys().then(function(G) {
            function se(re) {
              var pe = Math.min(ae, G.length - re), ye = G.slice(re, re + pe);
              return (Y ? Promise.resolve([]) : b.getMany({ trans: m, keys: ye, cache: "immutable" })).then(function(Le) {
                var Me = [], Ee = [], qe = N ? [] : null, Xe = Y ? ye : [];
                if (!Y) for (var Ne = 0; Ne < pe; ++Ne) {
                  var Je = Le[Ne], Ar = { value: de(Je), primKey: G[re + Ne] };
                  T.call(Ar, Ar.value, Ar) !== false && (Ar.value == null ? Xe.push(G[re + Ne]) : N || ur(z(Je), z(Ar.value)) === 0 ? (Ee.push(Ar.value), N && qe.push(G[re + Ne])) : (Xe.push(G[re + Ne]), Me.push(Ar.value)));
                }
                return Promise.resolve(0 < Me.length && b.mutate({ trans: m, type: "add", values: Me }).then(function(Ir) {
                  for (var fr in Ir.failures) Xe.splice(parseInt(fr), 1);
                  k(Me.length, Ir);
                })).then(function() {
                  return (0 < Ee.length || le && typeof o == "object") && b.mutate({ trans: m, type: "put", keys: qe, values: Ee, criteria: le, changeSpec: typeof o != "function" && o, isAdditionalChunk: 0 < re }).then(function(Ir) {
                    return k(Ee.length, Ir);
                  });
                }).then(function() {
                  return (0 < Xe.length || le && Y) && b.mutate({ trans: m, type: "delete", keys: Xe, criteria: le, isAdditionalChunk: 0 < re }).then(function(Ir) {
                    return Qi(p.table, Xe, Ir);
                  }).then(function(Ir) {
                    return k(Xe.length, Ir);
                  });
                }).then(function() {
                  return G.length > re + pe && se(re + ae);
                });
              });
            }
            var le = Nn(p) && p.limit === 1 / 0 && (typeof o != "function" || Y) && { index: p.index, range: p.range };
            return se(0).then(function() {
              if (0 < X.length) throw new je("Error modifying one or more objects", X, J, Q);
              return G.length;
            });
          });
        });
      }, Dr.prototype.delete = function() {
        var o = this._ctx, l = o.range;
        return !Nn(o) || o.table.schema.yProps || !o.isPrimKey && l.type !== 3 ? this.modify(Zf) : this._write(function(p) {
          var m = o.table.core.schema.primaryKey, k = l;
          return o.table.core.count({ trans: p, query: { index: m, range: k } }).then(function(T) {
            return o.table.core.mutate({ trans: p, type: "deleteRange", range: k }).then(function(z) {
              var N = z.failures, z = z.numFailures;
              if (z) throw new je("Could not delete some values", Object.keys(N).map(function(ae) {
                return N[ae];
              }), T - z);
              return T - z;
            });
          });
        });
      };
      var Ul = Dr;
      function Dr() {
      }
      var Zf = function(o, l) {
        return l.value = null;
      };
      function Wl(o, l) {
        return o < l ? -1 : o === l ? 0 : 1;
      }
      function Hl(o, l) {
        return l < o ? -1 : o === l ? 0 : 1;
      }
      function jt(o, l, p) {
        return o = o instanceof Qf ? new o.Collection(o) : o, o._ctx.error = new (p || TypeError)(l), o;
      }
      function Rn(o) {
        return new o.Collection(o, function() {
          return Jf("");
        }).limit(0);
      }
      function ts(Q, l, p, m) {
        var k, T, b, N, z, ae, q, X = p.length;
        if (!p.every(function(G) {
          return typeof G == "string";
        })) return jt(Q, cr);
        function J(G) {
          k = G === "next" ? function(le) {
            return le.toUpperCase();
          } : function(le) {
            return le.toLowerCase();
          }, T = G === "next" ? function(le) {
            return le.toLowerCase();
          } : function(le) {
            return le.toUpperCase();
          }, b = G === "next" ? Wl : Hl;
          var se = p.map(function(le) {
            return { lower: T(le), upper: k(le) };
          }).sort(function(le, re) {
            return b(le.lower, re.lower);
          });
          N = se.map(function(le) {
            return le.upper;
          }), z = se.map(function(le) {
            return le.lower;
          }), q = (ae = G) === "next" ? "" : m;
        }
        J("next");
        var Q = new Q.Collection(Q, function() {
          return Ga(N[0], z[X - 1] + m);
        }), Y = (Q._ondirectionchange = function(G) {
          J(G);
        }, 0);
        return Q._addAlgorithm(function(G, se, le) {
          var re = G.key;
          if (typeof re == "string") {
            var pe = T(re);
            if (l(pe, z, Y)) return true;
            for (var ye = null, Le = Y; Le < X; ++Le) {
              var Me = ((Ee, qe, Xe, Ne, Je, Ar) => {
                for (var Ir = Math.min(Ee.length, Ne.length), fr = -1, wr = 0; wr < Ir; ++wr) {
                  var Yr = qe[wr];
                  if (Yr !== Ne[wr]) return Je(Ee[wr], Xe[wr]) < 0 ? Ee.substr(0, wr) + Xe[wr] + Xe.substr(wr + 1) : Je(Ee[wr], Ne[wr]) < 0 ? Ee.substr(0, wr) + Ne[wr] + Xe.substr(wr + 1) : 0 <= fr ? Ee.substr(0, fr) + qe[fr] + Xe.substr(fr + 1) : null;
                  Je(Ee[wr], Yr) < 0 && (fr = wr);
                }
                return Ir < Ne.length && Ar === "next" ? Ee + Xe.substr(Ee.length) : Ir < Ee.length && Ar === "prev" ? Ee.substr(0, Xe.length) : fr < 0 ? null : Ee.substr(0, fr) + Ne[fr] + Xe.substr(fr + 1);
              })(re, pe, N[Le], z[Le], b, ae);
              Me === null && ye === null ? Y = Le + 1 : (ye === null || 0 < b(ye, Me)) && (ye = Me);
            }
            se(ye !== null ? function() {
              G.continue(ye + q);
            } : le);
          }
          return false;
        }), Q;
      }
      function Ga(o, l, p, m) {
        return { type: 2, lower: o, upper: l, lowerOpen: p, upperOpen: m };
      }
      function Jf(o) {
        return { type: 1, lower: o, upper: o };
      }
      Object.defineProperty(mt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), mt.prototype.between = function(o, l, p, m) {
        p = p !== false, m = m === true;
        try {
          return 0 < this._cmp(o, l) || this._cmp(o, l) === 0 && (p || m) && (!p || !m) ? Rn(this) : new this.Collection(this, function() {
            return Ga(o, l, !p, !m);
          });
        } catch {
          return jt(this, be);
        }
      }, mt.prototype.equals = function(o) {
        return o == null ? jt(this, be) : new this.Collection(this, function() {
          return Jf(o);
        });
      }, mt.prototype.above = function(o) {
        return o == null ? jt(this, be) : new this.Collection(this, function() {
          return Ga(o, void 0, true);
        });
      }, mt.prototype.aboveOrEqual = function(o) {
        return o == null ? jt(this, be) : new this.Collection(this, function() {
          return Ga(o, void 0, false);
        });
      }, mt.prototype.below = function(o) {
        return o == null ? jt(this, be) : new this.Collection(this, function() {
          return Ga(void 0, o, false, true);
        });
      }, mt.prototype.belowOrEqual = function(o) {
        return o == null ? jt(this, be) : new this.Collection(this, function() {
          return Ga(void 0, o);
        });
      }, mt.prototype.startsWith = function(o) {
        return typeof o != "string" ? jt(this, cr) : this.between(o, o + we, true, true);
      }, mt.prototype.startsWithIgnoreCase = function(o) {
        return o === "" ? this.startsWith(o) : ts(this, function(l, p) {
          return l.indexOf(p[0]) === 0;
        }, [o], we);
      }, mt.prototype.equalsIgnoreCase = function(o) {
        return ts(this, function(l, p) {
          return l === p[0];
        }, [o], "");
      }, mt.prototype.anyOfIgnoreCase = function() {
        var o = he.apply(Qe, arguments);
        return o.length === 0 ? Rn(this) : ts(this, function(l, p) {
          return p.indexOf(l) !== -1;
        }, o, "");
      }, mt.prototype.startsWithAnyOfIgnoreCase = function() {
        var o = he.apply(Qe, arguments);
        return o.length === 0 ? Rn(this) : ts(this, function(l, p) {
          return p.some(function(m) {
            return l.indexOf(m) === 0;
          });
        }, o, we);
      }, mt.prototype.anyOf = function() {
        var o, l, p = this, m = he.apply(Qe, arguments), k = this._cmp;
        try {
          m.sort(k);
        } catch {
          return jt(this, be);
        }
        return m.length === 0 ? Rn(this) : ((o = new this.Collection(this, function() {
          return Ga(m[0], m[m.length - 1]);
        }))._ondirectionchange = function(T) {
          k = T === "next" ? p._ascending : p._descending, m.sort(k);
        }, l = 0, o._addAlgorithm(function(T, b, N) {
          for (var z = T.key; 0 < k(z, m[l]); ) if (++l === m.length) return b(N), false;
          return k(z, m[l]) === 0 || (b(function() {
            T.continue(m[l]);
          }), false);
        }), o);
      }, mt.prototype.notEqual = function(o) {
        return this.inAnyRange([[-1 / 0, o], [o, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, mt.prototype.noneOf = function() {
        var o = he.apply(Qe, arguments);
        if (o.length === 0) return new this.Collection(this);
        try {
          o.sort(this._ascending);
        } catch {
          return jt(this, be);
        }
        var l = o.reduce(function(p, m) {
          return p ? p.concat([[p[p.length - 1][1], m]]) : [[-1 / 0, m]];
        }, null);
        return l.push([o[o.length - 1], this.db._maxKey]), this.inAnyRange(l, { includeLowers: false, includeUppers: false });
      }, mt.prototype.inAnyRange = function(o, le) {
        var p = this, m = this._cmp, k = this._ascending, T = this._descending, b = this._min, N = this._max;
        if (o.length === 0) return Rn(this);
        if (!o.every(function(re) {
          return re[0] !== void 0 && re[1] !== void 0 && k(re[0], re[1]) <= 0;
        })) return jt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", L.InvalidArgument);
        var z = !le || le.includeLowers !== false, ae = le && le.includeUppers === true, q, X = k;
        function J(re, pe) {
          return X(re[0], pe[0]);
        }
        try {
          (q = o.reduce(function(re, pe) {
            for (var ye = 0, Le = re.length; ye < Le; ++ye) {
              var Me = re[ye];
              if (m(pe[0], Me[1]) < 0 && 0 < m(pe[1], Me[0])) {
                Me[0] = b(Me[0], pe[0]), Me[1] = N(Me[1], pe[1]);
                break;
              }
            }
            return ye === Le && re.push(pe), re;
          }, [])).sort(J);
        } catch {
          return jt(this, be);
        }
        var Q = 0, Y = ae ? function(re) {
          return 0 < k(re, q[Q][1]);
        } : function(re) {
          return 0 <= k(re, q[Q][1]);
        }, G = z ? function(re) {
          return 0 < T(re, q[Q][0]);
        } : function(re) {
          return 0 <= T(re, q[Q][0]);
        }, se = Y, le = new this.Collection(this, function() {
          return Ga(q[0][0], q[q.length - 1][1], !z, !ae);
        });
        return le._ondirectionchange = function(re) {
          X = re === "next" ? (se = Y, k) : (se = G, T), q.sort(J);
        }, le._addAlgorithm(function(re, pe, ye) {
          for (var Le, Me = re.key; se(Me); ) if (++Q === q.length) return pe(ye), false;
          return !Y(Le = Me) && !G(Le) || (p._cmp(Me, q[Q][1]) === 0 || p._cmp(Me, q[Q][0]) === 0 || pe(function() {
            X === k ? re.continue(q[Q][0]) : re.continue(q[Q][1]);
          }), false);
        }), le;
      }, mt.prototype.startsWithAnyOf = function() {
        var o = he.apply(Qe, arguments);
        return o.every(function(l) {
          return typeof l == "string";
        }) ? o.length === 0 ? Rn(this) : this.inAnyRange(o.map(function(l) {
          return [l, l + we];
        })) : jt(this, "startsWithAnyOf() only works with strings");
      };
      var Qf = mt;
      function mt() {
      }
      function ma(o) {
        return Ur(function(l) {
          return ii(l), o(l.target.error), false;
        });
      }
      function ii(o) {
        o.stopPropagation && o.stopPropagation(), o.preventDefault && o.preventDefault();
      }
      var si = "storagemutated", s0 = "x-storagemutated-1", za = ai(null, si), Vl = (ga.prototype._lock = function() {
        return I(!Ze.global), ++this._reculock, this._reculock !== 1 || Ze.global || (Ze.lockOwnerFor = this), this;
      }, ga.prototype._unlock = function() {
        if (I(!Ze.global), --this._reculock == 0) for (Ze.global || (Ze.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var o = this._blockedFuncs.shift();
          try {
            ie(o[1], o[0]);
          } catch {
          }
        }
        return this;
      }, ga.prototype._locked = function() {
        return this._reculock && Ze.lockOwnerFor !== this;
      }, ga.prototype.create = function(o) {
        var l = this;
        if (this.mode) {
          var p = this.db.idbdb, m = this.db._state.dbOpenError;
          if (I(!this.idbtrans), !o && !p) switch (m && m.name) {
            case "DatabaseClosedError":
              throw new L.DatabaseClosed(m);
            case "MissingAPIError":
              throw new L.MissingAPI(m.message, m);
            default:
              throw new L.OpenFailed(m);
          }
          if (!this.active) throw new L.TransactionInactive();
          I(this._completion._state === null), (o = this.idbtrans = o || (this.db.core || p).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ur(function(k) {
            ii(k), l._reject(o.error);
          }), o.onabort = Ur(function(k) {
            ii(k), l.active && l._reject(new L.Abort(o.error)), l.active = false, l.on("abort").fire(k);
          }), o.oncomplete = Ur(function() {
            l.active = false, l._resolve(), "mutatedParts" in o && za.storagemutated.fire(o.mutatedParts);
          });
        }
        return this;
      }, ga.prototype._promise = function(o, l, p) {
        var m, k = this;
        return o === "readwrite" && this.mode !== "readwrite" ? De(new L.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new He(function(T, b) {
          k._blockedFuncs.push([function() {
            k._promise(o, l, p).then(T, b);
          }, Ze]);
        }) : p ? D(function() {
          var T = new He(function(b, N) {
            k._lock();
            var z = l(b, N, k);
            z && z.then && z.then(b, N);
          });
          return T.finally(function() {
            return k._unlock();
          }), T._lib = true, T;
        }) : ((m = new He(function(T, b) {
          var N = l(T, b, k);
          N && N.then && N.then(T, b);
        }))._lib = true, m) : De(new L.TransactionInactive());
      }, ga.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, ga.prototype.waitFor = function(o) {
        var l, p = this._root(), m = He.resolve(o), k = (p._waitingFor ? p._waitingFor = p._waitingFor.then(function() {
          return m;
        }) : (p._waitingFor = m, p._waitingQueue = [], l = p.idbtrans.objectStore(p.storeNames[0]), (function T() {
          for (++p._spinCount; p._waitingQueue.length; ) p._waitingQueue.shift()();
          p._waitingFor && (l.get(-1 / 0).onsuccess = T);
        })()), p._waitingFor);
        return new He(function(T, b) {
          m.then(function(N) {
            return p._waitingQueue.push(Ur(T.bind(null, N)));
          }, function(N) {
            return p._waitingQueue.push(Ur(b.bind(null, N)));
          }).finally(function() {
            p._waitingFor === k && (p._waitingFor = null);
          });
        });
      }, ga.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new L.Abort()));
      }, ga.prototype.table = function(o) {
        var l = this._memoizedTables || (this._memoizedTables = {});
        if (v(l, o)) return l[o];
        var p = this.schema[o];
        if (p) return (p = new this.db.Table(o, p, this)).core = this.db.core.table(o), l[o] = p;
        throw new L.NotFound("Table " + o + " not part of transaction");
      }, ga);
      function ga() {
      }
      function f0(o, l, p, m, k, T, b, N) {
        return { name: o, keyPath: l, unique: p, multi: m, auto: k, compound: T, src: (p && !b ? "&" : "") + (m ? "*" : "") + (k ? "++" : "") + eo(l), type: N };
      }
      function eo(o) {
        return typeof o == "string" ? o : o ? "[" + [].join.call(o, "+") + "]" : "";
      }
      function o0(o, l, p) {
        return { name: o, primKey: l, indexes: p, mappedClass: null, idxByName: (m = function(k) {
          return [k.name, k];
        }, p.reduce(function(k, T, b) {
          return T = m(T, b), T && (k[T[0]] = T[1]), k;
        }, {})) };
        var m;
      }
      var fi = function(o) {
        try {
          return o.only([[]]), fi = function() {
            return [[]];
          }, [[]];
        } catch {
          return fi = function() {
            return we;
          }, we;
        }
      };
      function c0(o) {
        return o == null ? function() {
        } : typeof o == "string" ? (l = o).split(".").length === 1 ? function(p) {
          return p[l];
        } : function(p) {
          return K(p, l);
        } : function(p) {
          return K(p, o);
        };
        var l;
      }
      function ro(o) {
        return [].slice.call(o);
      }
      var Xl = 0;
      function oi(o) {
        return o == null ? ":id" : typeof o == "string" ? o : "[".concat(o.join("+"), "]");
      }
      function Kl(o, l, z) {
        function m(Y) {
          if (Y.type === 3) return null;
          if (Y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var X = Y.lower, J = Y.upper, Q = Y.lowerOpen, Y = Y.upperOpen;
          return X === void 0 ? J === void 0 ? null : l.upperBound(J, !!Y) : J === void 0 ? l.lowerBound(X, !!Q) : l.bound(X, J, !!Q, !!Y);
        }
        function k(q) {
          var X, J = q.name;
          return { name: J, schema: q, mutate: function(Q) {
            var Y = Q.trans, G = Q.type, se = Q.keys, le = Q.values, re = Q.range;
            return new Promise(function(pe, ye) {
              pe = Ur(pe);
              var Le = Y.objectStore(J), Me = Le.keyPath == null, Ee = G === "put" || G === "add";
              if (!Ee && G !== "delete" && G !== "deleteRange") throw new Error("Invalid operation type: " + G);
              var qe, Xe = (se || le || { length: 1 }).length;
              if (se && le && se.length !== le.length) throw new Error("Given keys array must have same length as given values array.");
              if (Xe === 0) return pe({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ne(Jr) {
                ++Ir, ii(Jr);
              }
              var Je = [], Ar = [], Ir = 0;
              if (G === "deleteRange") {
                if (re.type === 4) return pe({ numFailures: Ir, failures: Ar, results: [], lastResult: void 0 });
                re.type === 3 ? Je.push(qe = Le.clear()) : Je.push(qe = Le.delete(m(re)));
              } else {
                var Me = Ee ? Me ? [le, se] : [le, null] : [se, null], fr = Me[0], wr = Me[1];
                if (Ee) for (var Yr = 0; Yr < Xe; ++Yr) Je.push(qe = wr && wr[Yr] !== void 0 ? Le[G](fr[Yr], wr[Yr]) : Le[G](fr[Yr])), qe.onerror = Ne;
                else for (Yr = 0; Yr < Xe; ++Yr) Je.push(qe = Le[G](fr[Yr])), qe.onerror = Ne;
              }
              function Jt(Jr) {
                Jr = Jr.target.result, Je.forEach(function(on, b0) {
                  return on.error != null && (Ar[b0] = on.error);
                }), pe({ numFailures: Ir, failures: Ar, results: G === "delete" ? se : Je.map(function(on) {
                  return on.result;
                }), lastResult: Jr });
              }
              qe.onerror = function(Jr) {
                Ne(Jr), Jt(Jr);
              }, qe.onsuccess = Jt;
            });
          }, getMany: function(Q) {
            var Y = Q.trans, G = Q.keys;
            return new Promise(function(se, le) {
              se = Ur(se);
              for (var re, pe = Y.objectStore(J), ye = G.length, Le = new Array(ye), Me = 0, Ee = 0, qe = function(Je) {
                Je = Je.target, Le[Je._pos] = Je.result, ++Ee === Me && se(Le);
              }, Xe = ma(le), Ne = 0; Ne < ye; ++Ne) G[Ne] != null && ((re = pe.get(G[Ne]))._pos = Ne, re.onsuccess = qe, re.onerror = Xe, ++Me);
              Me === 0 && se(Le);
            });
          }, get: function(Q) {
            var Y = Q.trans, G = Q.key;
            return new Promise(function(se, le) {
              se = Ur(se);
              var re = Y.objectStore(J).get(G);
              re.onsuccess = function(pe) {
                return se(pe.target.result);
              }, re.onerror = ma(le);
            });
          }, query: (X = N, function(Q) {
            return new Promise(function(Y, G) {
              Y = Ur(Y);
              var se, le, re, Ee = Q.trans, pe = Q.values, ye = Q.limit, Me = Q.query, Le = ye === 1 / 0 ? void 0 : ye, qe = Me.index, Me = Me.range, Ee = Ee.objectStore(J), Ee = qe.isPrimaryKey ? Ee : Ee.index(qe.name), qe = m(Me);
              if (ye === 0) return Y({ result: [] });
              X ? ((Me = pe ? Ee.getAll(qe, Le) : Ee.getAllKeys(qe, Le)).onsuccess = function(Xe) {
                return Y({ result: Xe.target.result });
              }, Me.onerror = ma(G)) : (se = 0, le = !pe && "openKeyCursor" in Ee ? Ee.openKeyCursor(qe) : Ee.openCursor(qe), re = [], le.onsuccess = function(Xe) {
                var Ne = le.result;
                return !Ne || (re.push(pe ? Ne.value : Ne.primaryKey), ++se === ye) ? Y({ result: re }) : void Ne.continue();
              }, le.onerror = ma(G));
            });
          }), openCursor: function(Q) {
            var Y = Q.trans, G = Q.values, se = Q.query, le = Q.reverse, re = Q.unique;
            return new Promise(function(pe, ye) {
              pe = Ur(pe);
              var Ee = se.index, Le = se.range, Me = Y.objectStore(J), Me = Ee.isPrimaryKey ? Me : Me.index(Ee.name), Ee = le ? re ? "prevunique" : "prev" : re ? "nextunique" : "next", qe = !G && "openKeyCursor" in Me ? Me.openKeyCursor(m(Le), Ee) : Me.openCursor(m(Le), Ee);
              qe.onerror = ma(ye), qe.onsuccess = Ur(function(Xe) {
                var Ne, Je, Ar, Ir, fr = qe.result;
                fr ? (fr.___id = ++Xl, fr.done = false, Ne = fr.continue.bind(fr), Je = (Je = fr.continuePrimaryKey) && Je.bind(fr), Ar = fr.advance.bind(fr), Ir = function() {
                  throw new Error("Cursor not stopped");
                }, fr.trans = Y, fr.stop = fr.continue = fr.continuePrimaryKey = fr.advance = function() {
                  throw new Error("Cursor not started");
                }, fr.fail = Ur(ye), fr.next = function() {
                  var wr = this, Yr = 1;
                  return this.start(function() {
                    return Yr-- ? wr.continue() : wr.stop();
                  }).then(function() {
                    return wr;
                  });
                }, fr.start = function(wr) {
                  function Yr() {
                    if (qe.result) try {
                      wr();
                    } catch (Jr) {
                      fr.fail(Jr);
                    }
                    else fr.done = true, fr.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, fr.stop();
                  }
                  var Jt = new Promise(function(Jr, on) {
                    Jr = Ur(Jr), qe.onerror = ma(on), fr.fail = on, fr.stop = function(b0) {
                      fr.stop = fr.continue = fr.continuePrimaryKey = fr.advance = Ir, Jr(b0);
                    };
                  });
                  return qe.onsuccess = Ur(function(Jr) {
                    qe.onsuccess = Yr, Yr();
                  }), fr.continue = Ne, fr.continuePrimaryKey = Je, fr.advance = Ar, Yr(), Jt;
                }, pe(fr)) : pe(null);
              }, ye);
            });
          }, count: function(Q) {
            var Y = Q.query, G = Q.trans, se = Y.index, le = Y.range;
            return new Promise(function(re, pe) {
              var ye = G.objectStore(J), ye = se.isPrimaryKey ? ye : ye.index(se.name), Le = m(le), Le = Le ? ye.count(Le) : ye.count();
              Le.onsuccess = Ur(function(Me) {
                return re(Me.target.result);
              }), Le.onerror = ma(pe);
            });
          } };
        }
        T = z, b = ro((z = o).objectStoreNames);
        var T, z = { schema: { name: z.name, tables: b.map(function(q) {
          return T.objectStore(q);
        }).map(function(q) {
          var X = q.keyPath, J = q.autoIncrement, Y = f(X), Q = {}, Y = { name: q.name, primaryKey: { name: null, isPrimaryKey: true, outbound: X == null, compound: Y, keyPath: X, autoIncrement: J, unique: true, extractKey: c0(X) }, indexes: ro(q.indexNames).map(function(G) {
            return q.index(G);
          }).map(function(re) {
            var pe = re.name, se = re.unique, le = re.multiEntry, re = re.keyPath, pe = { name: pe, compound: f(re), keyPath: re, unique: se, multiEntry: le, extractKey: c0(re) };
            return Q[oi(re)] = pe;
          }), getIndexByKeyPath: function(G) {
            return Q[oi(G)];
          } };
          return Q[":id"] = Y.primaryKey, X != null && (Q[oi(X)] = Y.primaryKey), Y;
        }) }, hasGetAll: 0 < b.length && "getAll" in T.objectStore(b[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }, b = z.schema, N = z.hasGetAll, z = b.tables.map(k), ae = {};
        return z.forEach(function(q) {
          return ae[q.name] = q;
        }), { stack: "dbcore", transaction: o.transaction.bind(o), table: function(q) {
          if (ae[q]) return ae[q];
          throw new Error("Table '".concat(q, "' not found"));
        }, MIN_KEY: -1 / 0, MAX_KEY: fi(l), schema: b };
      }
      function jl(o, l, p, m) {
        return p = p.IDBKeyRange, l = Kl(l, p, m), { dbcore: o.dbcore.reduce(function(k, T) {
          return T = T.create, a(a({}, k), T(k));
        }, l) };
      }
      function as(o, l) {
        var p = l.db, p = jl(o._middlewares, p, o._deps, l);
        o.core = p.dbcore, o.tables.forEach(function(m) {
          var k = m.name;
          o.core.schema.tables.some(function(T) {
            return T.name === k;
          }) && (m.core = o.core.table(k), o[k] instanceof o.Table) && (o[k].core = m.core);
        });
      }
      function ns(o, l, p, m) {
        p.forEach(function(k) {
          var T = m[k];
          l.forEach(function(b) {
            var N = (function z(ae, q) {
              return _(ae, q) || (ae = u(ae)) && z(ae, q);
            })(b, k);
            (!N || "value" in N && N.value === void 0) && (b === o.Transaction.prototype || b instanceof o.Transaction ? w(b, k, { get: function() {
              return this.table(k);
            }, set: function(z) {
              x(this, k, { value: z, writable: true, configurable: true, enumerable: true });
            } }) : b[k] = new o.Table(k, T));
          });
        });
      }
      function u0(o, l) {
        l.forEach(function(p) {
          for (var m in p) p[m] instanceof o.Table && delete p[m];
        });
      }
      function Gl(o, l) {
        return o._cfg.version - l._cfg.version;
      }
      function zl(o, l, p, m) {
        var k = o._dbSchema, T = (p.objectStoreNames.contains("$meta") && !k.$meta && (k.$meta = o0("$meta", ao("")[0], []), o._storeNames.push("$meta")), o._createTransaction("readwrite", o._storeNames, k)), b = (T.create(p), T._completion.catch(m), T._reject.bind(T)), N = Ze.transless || Ze;
        D(function() {
          if (Ze.trans = T, Ze.transless = N, l !== 0) return as(o, p), ae = l, ((z = T).storeNames.includes("$meta") ? z.table("$meta").get("version").then(function(q) {
            return q ?? ae;
          }) : He.resolve(ae)).then(function(se) {
            var X = o, J = se, Q = T, Y = p, G = [], se = X._versions, le = X._dbSchema = ss(0, X.idbdb, Y);
            return (se = se.filter(function(re) {
              return re._cfg.version >= J;
            })).length === 0 ? He.resolve() : (se.forEach(function(re) {
              G.push(function() {
                var pe, ye, Le, Me = le, Ee = re._cfg.dbschema, qe = (fs(X, Me, Y), fs(X, Ee, Y), le = X._dbSchema = Ee, l0(Me, Ee)), Xe = (qe.add.forEach(function(Ne) {
                  h0(Y, Ne[0], Ne[1].primKey, Ne[1].indexes);
                }), qe.change.forEach(function(Ne) {
                  if (Ne.recreate) throw new L.Upgrade("Not yet support for changing primary key");
                  var Je = Y.objectStore(Ne.name);
                  Ne.add.forEach(function(Ar) {
                    return is(Je, Ar);
                  }), Ne.change.forEach(function(Ar) {
                    Je.deleteIndex(Ar.name), is(Je, Ar);
                  }), Ne.del.forEach(function(Ar) {
                    return Je.deleteIndex(Ar);
                  });
                }), re._cfg.contentUpgrade);
                if (Xe && re._cfg.version > J) return as(X, Y), Q._memoizedTables = {}, pe = H(Ee), qe.del.forEach(function(Ne) {
                  pe[Ne] = Me[Ne];
                }), u0(X, [X.Transaction.prototype]), ns(X, [X.Transaction.prototype], s(pe), pe), Q.schema = pe, (ye = sr(Xe)) && P(), Ee = He.follow(function() {
                  var Ne;
                  (Le = Xe(Q)) && ye && (Ne = M.bind(null, null), Le.then(Ne, Ne));
                }), Le && typeof Le.then == "function" ? He.resolve(Le) : Ee.then(function() {
                  return Le;
                });
              }), G.push(function(pe) {
                var ye, Le, Me = re._cfg.dbschema;
                ye = Me, Le = pe, [].slice.call(Le.db.objectStoreNames).forEach(function(Ee) {
                  return ye[Ee] == null && Le.db.deleteObjectStore(Ee);
                }), u0(X, [X.Transaction.prototype]), ns(X, [X.Transaction.prototype], X._storeNames, X._dbSchema), Q.schema = X._dbSchema;
              }), G.push(function(pe) {
                X.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(X.idbdb.version / 10) === re._cfg.version ? (X.idbdb.deleteObjectStore("$meta"), delete X._dbSchema.$meta, X._storeNames = X._storeNames.filter(function(ye) {
                  return ye !== "$meta";
                })) : pe.objectStore("$meta").put(re._cfg.version, "version"));
              });
            }), (function re() {
              return G.length ? He.resolve(G.shift()(Q.idbtrans)).then(re) : He.resolve();
            })().then(function() {
              to(le, Y);
            }));
          }).catch(b);
          var z, ae;
          s(k).forEach(function(q) {
            h0(p, q, k[q].primKey, k[q].indexes);
          }), as(o, p), He.follow(function() {
            return o.on.populate.fire(T);
          }).catch(b);
        });
      }
      function $l(o, l) {
        to(o._dbSchema, l), l.db.version % 10 != 0 || l.objectStoreNames.contains("$meta") || l.db.createObjectStore("$meta").add(Math.ceil(l.db.version / 10 - 1), "version");
        var p = ss(0, o.idbdb, l);
        fs(o, o._dbSchema, l);
        for (var m = 0, k = l0(p, o._dbSchema).change; m < k.length; m++) {
          var T = ((b) => {
            if (b.change.length || b.recreate) return console.warn("Unable to patch indexes of table ".concat(b.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var N = l.objectStore(b.name);
            b.add.forEach(function(z) {
              yr && console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name, ".").concat(z.src)), is(N, z);
            });
          })(k[m]);
          if (typeof T == "object") return T.value;
        }
      }
      function l0(o, l) {
        var p, m = { del: [], add: [], change: [] };
        for (p in o) l[p] || m.del.push(p);
        for (p in l) {
          var k = o[p], T = l[p];
          if (k) {
            var b = { name: p, def: T, recreate: false, del: [], add: [], change: [] };
            if ("" + (k.primKey.keyPath || "") != "" + (T.primKey.keyPath || "") || k.primKey.auto !== T.primKey.auto) b.recreate = true, m.change.push(b);
            else {
              var N = k.idxByName, z = T.idxByName, ae = void 0;
              for (ae in N) z[ae] || b.del.push(ae);
              for (ae in z) {
                var q = N[ae], X = z[ae];
                q ? q.src !== X.src && b.change.push(X) : b.add.push(X);
              }
              (0 < b.del.length || 0 < b.add.length || 0 < b.change.length) && m.change.push(b);
            }
          } else m.add.push([p, T]);
        }
        return m;
      }
      function h0(o, l, p, m) {
        var k = o.db.createObjectStore(l, p.keyPath ? { keyPath: p.keyPath, autoIncrement: p.auto } : { autoIncrement: p.auto });
        m.forEach(function(T) {
          return is(k, T);
        });
      }
      function to(o, l) {
        s(o).forEach(function(p) {
          l.db.objectStoreNames.contains(p) || (yr && console.debug("Dexie: Creating missing table", p), h0(l, p, o[p].primKey, o[p].indexes));
        });
      }
      function is(o, l) {
        o.createIndex(l.name, l.keyPath, { unique: l.unique, multiEntry: l.multi });
      }
      function ss(o, l, p) {
        var m = {};
        return F(l.objectStoreNames, 0).forEach(function(k) {
          for (var T = p.objectStore(k), b = f0(eo(ae = T.keyPath), ae || "", true, false, !!T.autoIncrement, ae && typeof ae != "string", true), N = [], z = 0; z < T.indexNames.length; ++z) {
            var q = T.index(T.indexNames[z]), ae = q.keyPath, q = f0(q.name, ae, !!q.unique, !!q.multiEntry, false, ae && typeof ae != "string", false);
            N.push(q);
          }
          m[k] = o0(k, b, N);
        }), m;
      }
      function fs(o, l, p) {
        for (var m = p.db.objectStoreNames, k = 0; k < m.length; ++k) {
          var T = m[k], b = p.objectStore(T);
          o._hasGetAll = "getAll" in b;
          for (var N = 0; N < b.indexNames.length; ++N) {
            var z, ae = b.indexNames[N], q = b.index(ae).keyPath, q = typeof q == "string" ? q : "[" + F(q).join("+") + "]";
            l[T] && (z = l[T].idxByName[q]) && (z.name = ae, delete l[T].idxByName[q], l[T].idxByName[ae] = z);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (o._hasGetAll = false);
      }
      function ao(o) {
        return o.split(",").map(function(l, p) {
          var k = l.split(":"), m = (m = k[1]) == null ? void 0 : m.trim(), k = (l = k[0].trim()).replace(/([&*]|\+\+)/g, ""), T = /^\[/.test(k) ? k.match(/^\[(.*)\]$/)[1].split("+") : k;
          return f0(k, T || null, /\&/.test(l), /\*/.test(l), /\+\+/.test(l), f(T), p === 0, m);
        });
      }
      Pn.prototype._createTableSchema = o0, Pn.prototype._parseIndexSyntax = ao, Pn.prototype._parseStoresSpec = function(o, l) {
        var p = this;
        s(o).forEach(function(m) {
          if (o[m] !== null) {
            var k = p._parseIndexSyntax(o[m]), T = k.shift();
            if (!T) throw new L.Schema("Invalid schema for table " + m + ": " + o[m]);
            if (T.unique = true, T.multi) throw new L.Schema("Primary key cannot be multiEntry*");
            k.forEach(function(b) {
              if (b.auto) throw new L.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!b.keyPath) throw new L.Schema("Index must have a name and cannot be an empty string");
            }), T = p._createTableSchema(m, T, k), l[m] = T;
          }
        });
      }, Pn.prototype.stores = function(p) {
        var l = this.db, p = (this._cfg.storesSource = this._cfg.storesSource ? c(this._cfg.storesSource, p) : p, l._versions), m = {}, k = {};
        return p.forEach(function(T) {
          c(m, T._cfg.storesSource), k = T._cfg.dbschema = {}, T._parseStoresSpec(m, k);
        }), l._dbSchema = k, u0(l, [l._allTables, l, l.Transaction.prototype]), ns(l, [l._allTables, l, l.Transaction.prototype, this._cfg.tables], s(k), k), l._storeNames = s(k), this;
      }, Pn.prototype.upgrade = function(o) {
        return this._cfg.contentUpgrade = br(this._cfg.contentUpgrade || ue, o), this;
      };
      var ql = Pn;
      function Pn() {
      }
      function d0(o, l) {
        var p = o._dbNamesDB;
        return p || (p = o._dbNamesDB = new Da(Wr, { addons: [], indexedDB: o, IDBKeyRange: l })).version(1).stores({ dbnames: "name" }), p.table("dbnames");
      }
      function x0(o) {
        return o && typeof o.databases == "function";
      }
      function p0(o) {
        return D(function() {
          return Ze.letThrough = true, o();
        });
      }
      function v0(o) {
        return !("from" in o);
      }
      var St = function(o, l) {
        var p;
        if (!this) return p = new St(), o && "d" in o && c(p, o), p;
        c(this, arguments.length ? { d: 1, from: o, to: 1 < arguments.length ? l : o } : { d: 0 });
      };
      function ci(o, l, p) {
        var m = ur(l, p);
        if (!isNaN(m)) {
          if (0 < m) throw RangeError();
          if (v0(o)) return c(o, { from: l, to: p, d: 1 });
          var m = o.l, k = o.r;
          if (ur(p, o.from) < 0) return m ? ci(m, l, p) : o.l = { from: l, to: p, d: 1, l: null, r: null }, io(o);
          if (0 < ur(l, o.to)) return k ? ci(k, l, p) : o.r = { from: l, to: p, d: 1, l: null, r: null }, io(o);
          ur(l, o.from) < 0 && (o.from = l, o.l = null, o.d = k ? k.d + 1 : 1), 0 < ur(p, o.to) && (o.to = p, o.r = null, o.d = o.l ? o.l.d + 1 : 1), l = !o.r, m && !o.l && ui(o, m), k && l && ui(o, k);
        }
      }
      function ui(o, l) {
        v0(l) || (function p(m, k) {
          var T = k.from, b = k.l, N = k.r;
          ci(m, T, k.to), b && p(m, b), N && p(m, N);
        })(o, l);
      }
      function no(o, l) {
        var p = os(l), m = p.next();
        if (!m.done) for (var k = m.value, T = os(o), b = T.next(k.from), N = b.value; !m.done && !b.done; ) {
          if (ur(N.from, k.to) <= 0 && 0 <= ur(N.to, k.from)) return true;
          ur(k.from, N.from) < 0 ? k = (m = p.next(N.from)).value : N = (b = T.next(k.from)).value;
        }
        return false;
      }
      function os(o) {
        var l = v0(o) ? null : { s: 0, n: o };
        return { next: function(p) {
          for (var m = 0 < arguments.length; l; ) switch (l.s) {
            case 0:
              if (l.s = 1, m) for (; l.n.l && ur(p, l.n.from) < 0; ) l = { up: l, n: l.n.l, s: 1 };
              else for (; l.n.l; ) l = { up: l, n: l.n.l, s: 1 };
            case 1:
              if (l.s = 2, !m || ur(p, l.n.to) <= 0) return { value: l.n, done: false };
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
      function io(o) {
        var l, p, m, k = (((k = o.r) == null ? void 0 : k.d) || 0) - (((k = o.l) == null ? void 0 : k.d) || 0), k = 1 < k ? "r" : k < -1 ? "l" : "";
        k && (l = k == "r" ? "l" : "r", p = a({}, o), m = o[k], o.from = m.from, o.to = m.to, o[k] = m[k], p[k] = m[l], (o[l] = p).d = so(p)), o.d = so(o);
      }
      function so(p) {
        var l = p.r, p = p.l;
        return (l ? p ? Math.max(l.d, p.d) : l.d : p ? p.d : 0) + 1;
      }
      function cs(o, l) {
        return s(l).forEach(function(p) {
          o[p] ? ui(o[p], l[p]) : o[p] = (function m(k) {
            var T, b, N = {};
            for (T in k) v(k, T) && (b = k[T], N[T] = !b || typeof b != "object" || j.has(b.constructor) ? b : m(b));
            return N;
          })(l[p]);
        }), o;
      }
      function m0(o, l) {
        return o.all || l.all || Object.keys(o).some(function(p) {
          return l[p] && no(l[p], o[p]);
        });
      }
      d(St.prototype, ((Vr = { add: function(o) {
        return ui(this, o), this;
      }, addKey: function(o) {
        return ci(this, o, o), this;
      }, addKeys: function(o) {
        var l = this;
        return o.forEach(function(p) {
          return ci(l, p, p);
        }), this;
      }, hasKey: function(o) {
        var l = os(this).next(o).value;
        return l && ur(l.from, o) <= 0 && 0 <= ur(l.to, o);
      } })[ze] = function() {
        return os(this);
      }, Vr));
      var sn = {}, g0 = {}, _0 = false;
      function us(o) {
        cs(g0, o), _0 || (_0 = true, setTimeout(function() {
          _0 = false, w0(g0, !(g0 = {}));
        }, 0));
      }
      function w0(o, l) {
        l === void 0 && (l = false);
        var p = /* @__PURE__ */ new Set();
        if (o.all) for (var m = 0, k = Object.values(sn); m < k.length; m++) fo(N = k[m], o, p, l);
        else for (var T in o) {
          var b, N, T = /^idb\:\/\/(.*)\/(.*)\//.exec(T);
          T && (b = T[1], T = T[2], N = sn["idb://".concat(b, "/").concat(T)]) && fo(N, o, p, l);
        }
        p.forEach(function(z) {
          return z();
        });
      }
      function fo(o, l, p, m) {
        for (var k = [], T = 0, b = Object.entries(o.queries.query); T < b.length; T++) {
          for (var N = b[T], z = N[0], ae = [], q = 0, X = N[1]; q < X.length; q++) {
            var J = X[q];
            m0(l, J.obsSet) ? J.subscribers.forEach(function(se) {
              return p.add(se);
            }) : m && ae.push(J);
          }
          m && k.push([z, ae]);
        }
        if (m) for (var Q = 0, Y = k; Q < Y.length; Q++) {
          var G = Y[Q], z = G[0], ae = G[1];
          o.queries.query[z] = ae;
        }
      }
      function Yl(o) {
        var l = o._state, p = o._deps.indexedDB;
        if (l.isBeingOpened || o.idbdb) return l.dbReadyPromise.then(function() {
          return l.dbOpenError ? De(l.dbOpenError) : o;
        });
        l.isBeingOpened = true, l.dbOpenError = null, l.openComplete = false;
        var m = l.openCanceller, k = Math.round(10 * o.verno), T = false;
        function b() {
          if (l.openCanceller !== m) throw new L.DatabaseClosed("db.open() was cancelled");
        }
        function N() {
          return new He(function(J, Q) {
            if (b(), !p) throw new L.MissingAPI();
            var Y = o.name, G = l.autoSchema || !k ? p.open(Y) : p.open(Y, k);
            if (!G) throw new L.MissingAPI();
            G.onerror = ma(Q), G.onblocked = Ur(o._fireOnBlocked), G.onupgradeneeded = Ur(function(se) {
              var le;
              q = G.transaction, l.autoSchema && !o._options.allowEmptyDB ? (G.onerror = ii, q.abort(), G.result.close(), (le = p.deleteDatabase(Y)).onsuccess = le.onerror = Ur(function() {
                Q(new L.NoSuchDatabase("Database ".concat(Y, " doesnt exist")));
              })) : (q.onerror = ma(Q), le = se.oldVersion > Math.pow(2, 62) ? 0 : se.oldVersion, X = le < 1, o.idbdb = G.result, T && $l(o, q), zl(o, le / 10, q, Q));
            }, Q), G.onsuccess = Ur(function() {
              q = null;
              var se, le, re, pe, ye, Le, Me = o.idbdb = G.result, Ee = F(Me.objectStoreNames);
              if (0 < Ee.length) try {
                var qe = Me.transaction((ye = Ee).length === 1 ? ye[0] : ye, "readonly");
                if (l.autoSchema) Le = Me, pe = qe, (re = o).verno = Le.version / 10, pe = re._dbSchema = ss(0, Le, pe), re._storeNames = F(Le.objectStoreNames, 0), ns(re, [re._allTables], s(pe), pe);
                else if (fs(o, o._dbSchema, qe), le = qe, ((le = l0(ss(0, (se = o).idbdb, le), se._dbSchema)).add.length || le.change.some(function(Xe) {
                  return Xe.add.length || Xe.change.length;
                })) && !T) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Me.close(), k = Me.version + 1, T = true, J(N());
                as(o, qe);
              } catch {
              }
              Or.push(o), Me.onversionchange = Ur(function(Xe) {
                l.vcFired = true, o.on("versionchange").fire(Xe);
              }), Me.onclose = Ur(function() {
                o.close({ disableAutoOpen: false });
              }), X && (Ee = o._deps, ye = Y, x0(Le = Ee.indexedDB) || ye === Wr || d0(Le, Ee.IDBKeyRange).put({ name: ye }).catch(ue)), J();
            }, Q);
          }).catch(function(J) {
            switch (J == null ? void 0 : J.name) {
              case "UnknownError":
                if (0 < l.PR1398_maxLoop) return l.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), N();
                break;
              case "VersionError":
                if (0 < k) return k = 0, N();
            }
            return He.reject(J);
          });
        }
        var z, ae = l.dbReadyResolve, q = null, X = false;
        return He.race([m, (typeof navigator > "u" ? He.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(J) {
          function Q() {
            return indexedDB.databases().finally(J);
          }
          z = setInterval(Q, 100), Q();
        }).finally(function() {
          return clearInterval(z);
        }) : Promise.resolve()).then(N)]).then(function() {
          return b(), l.onReadyBeingFired = [], He.resolve(p0(function() {
            return o.on.ready.fire(o.vip);
          })).then(function J() {
            var Q;
            if (0 < l.onReadyBeingFired.length) return Q = l.onReadyBeingFired.reduce(br, ue), l.onReadyBeingFired = [], He.resolve(p0(function() {
              return Q(o.vip);
            })).then(J);
          });
        }).finally(function() {
          l.openCanceller === m && (l.onReadyBeingFired = null, l.isBeingOpened = false);
        }).catch(function(J) {
          l.dbOpenError = J;
          try {
            q && q.abort();
          } catch {
          }
          return m === l.openCanceller && o._close(), De(J);
        }).finally(function() {
          l.openComplete = true, ae();
        }).then(function() {
          var J;
          return X && (J = {}, o.tables.forEach(function(Q) {
            Q.schema.indexes.forEach(function(Y) {
              Y.name && (J["idb://".concat(o.name, "/").concat(Q.name, "/").concat(Y.name)] = new St(-1 / 0, [[[]]]));
            }), J["idb://".concat(o.name, "/").concat(Q.name, "/")] = J["idb://".concat(o.name, "/").concat(Q.name, "/:dels")] = new St(-1 / 0, [[[]]]);
          }), za(si).fire(J), w0(J, true)), o;
        });
      }
      function y0(o) {
        function l(T) {
          return o.next(T);
        }
        var p = k(l), m = k(function(T) {
          return o.throw(T);
        });
        function k(T) {
          return function(N) {
            var N = T(N), z = N.value;
            return N.done ? z : z && typeof z.then == "function" ? z.then(p, m) : f(z) ? Promise.all(z).then(p, m) : p(z);
          };
        }
        return k(l)();
      }
      function ls(o, l, p) {
        for (var m = f(o) ? o.slice() : [o], k = 0; k < p; ++k) m.push(l);
        return m;
      }
      var Zl = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(o) {
        return a(a({}, o), { table: function(m) {
          var p = o.table(m), m = p.schema, k = {}, T = [];
          function b(J, Q, Y) {
            var re = oi(J), G = k[re] = k[re] || [], se = J == null ? 0 : typeof J == "string" ? 1 : J.length, le = 0 < Q, re = a(a({}, Y), { name: le ? "".concat(re, "(virtual-from:").concat(Y.name, ")") : Y.name, lowLevelIndex: Y, isVirtual: le, keyTail: Q, keyLength: se, extractKey: c0(J), unique: !le && Y.unique });
            return G.push(re), re.isPrimaryKey || T.push(re), 1 < se && b(se === 2 ? J[0] : J.slice(0, se - 1), Q + 1, Y), G.sort(function(pe, ye) {
              return pe.keyTail - ye.keyTail;
            }), re;
          }
          var N = b(m.primaryKey.keyPath, 0, m.primaryKey);
          k[":id"] = [N];
          for (var z = 0, ae = m.indexes; z < ae.length; z++) {
            var q = ae[z];
            b(q.keyPath, 0, q);
          }
          function X(J) {
            var Q, Y = J.query.index;
            return Y.isVirtual ? a(a({}, J), { query: { index: Y.lowLevelIndex, range: (Q = J.query.range, Y = Y.keyTail, { type: Q.type === 1 ? 2 : Q.type, lower: ls(Q.lower, Q.lowerOpen ? o.MAX_KEY : o.MIN_KEY, Y), lowerOpen: true, upper: ls(Q.upper, Q.upperOpen ? o.MIN_KEY : o.MAX_KEY, Y), upperOpen: true }) } }) : J;
          }
          return a(a({}, p), { schema: a(a({}, m), { primaryKey: N, indexes: T, getIndexByKeyPath: function(J) {
            return (J = k[oi(J)]) && J[0];
          } }), count: function(J) {
            return p.count(X(J));
          }, query: function(J) {
            return p.query(X(J));
          }, openCursor: function(J) {
            var Q = J.query.index, Y = Q.keyTail, G = Q.keyLength;
            return Q.isVirtual ? p.openCursor(X(J)).then(function(le) {
              return le && se(le);
            }) : p.openCursor(J);
            function se(le) {
              return Object.create(le, { continue: { value: function(re) {
                re != null ? le.continue(ls(re, J.reverse ? o.MAX_KEY : o.MIN_KEY, Y)) : J.unique ? le.continue(le.key.slice(0, G).concat(J.reverse ? o.MIN_KEY : o.MAX_KEY, Y)) : le.continue();
              } }, continuePrimaryKey: { value: function(re, pe) {
                le.continuePrimaryKey(ls(re, o.MAX_KEY, Y), pe);
              } }, primaryKey: { get: function() {
                return le.primaryKey;
              } }, key: { get: function() {
                var re = le.key;
                return G === 1 ? re[0] : re.slice(0, G);
              } }, value: { get: function() {
                return le.value;
              } } });
            }
          } });
        } });
      } };
      function k0(o, l, p, m) {
        return p = p || {}, m = m || "", s(o).forEach(function(k) {
          var T, b, N;
          v(l, k) ? (T = o[k], b = l[k], typeof T == "object" && typeof b == "object" && T && b ? (N = me(T)) !== me(b) ? p[m + k] = l[k] : N === "Object" ? k0(T, b, p, m + k + ".") : T !== b && (p[m + k] = l[k]) : T !== b && (p[m + k] = l[k])) : p[m + k] = void 0;
        }), s(l).forEach(function(k) {
          v(o, k) || (p[m + k] = l[k]);
        }), p;
      }
      function E0(o, l) {
        return l.type === "delete" ? l.keys : l.keys || l.values.map(o.extractKey);
      }
      var Jl = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(o) {
        return a(a({}, o), { table: function(l) {
          var p = o.table(l), m = p.schema.primaryKey;
          return a(a({}, p), { mutate: function(k) {
            var T = Ze.trans, b = T.table(l).hook, N = b.deleting, z = b.creating, ae = b.updating;
            switch (k.type) {
              case "add":
                if (z.fire === ue) break;
                return T._promise("readwrite", function() {
                  return q(k);
                }, true);
              case "put":
                if (z.fire === ue && ae.fire === ue) break;
                return T._promise("readwrite", function() {
                  return q(k);
                }, true);
              case "delete":
                if (N.fire === ue) break;
                return T._promise("readwrite", function() {
                  return q(k);
                }, true);
              case "deleteRange":
                if (N.fire === ue) break;
                return T._promise("readwrite", function() {
                  return (function X(J, Q, Y) {
                    return p.query({ trans: J, values: false, query: { index: m, range: Q }, limit: Y }).then(function(G) {
                      var se = G.result;
                      return q({ type: "delete", keys: se, trans: J }).then(function(le) {
                        return 0 < le.numFailures ? Promise.reject(le.failures[0]) : se.length < Y ? { failures: [], numFailures: 0, lastResult: void 0 } : X(J, a(a({}, Q), { lower: se[se.length - 1], lowerOpen: true }), Y);
                      });
                    });
                  })(k.trans, k.range, 1e4);
                }, true);
            }
            return p.mutate(k);
            function q(X) {
              var J, Q, Y, G = Ze.trans, se = X.keys || E0(m, X);
              if (se) return (X = X.type === "add" || X.type === "put" ? a(a({}, X), { keys: se }) : a({}, X)).type !== "delete" && (X.values = n([], X.values)), X.keys && (X.keys = n([], X.keys)), J = p, Y = se, ((Q = X).type === "add" ? Promise.resolve([]) : J.getMany({ trans: Q.trans, keys: Y, cache: "immutable" })).then(function(le) {
                var re = se.map(function(pe, ye) {
                  var Le, Me, Ee, qe = le[ye], Xe = { onerror: null, onsuccess: null };
                  return X.type === "delete" ? N.fire.call(Xe, pe, qe, G) : X.type === "add" || qe === void 0 ? (Le = z.fire.call(Xe, pe, X.values[ye], G), pe == null && Le != null && (X.keys[ye] = pe = Le, m.outbound || A(X.values[ye], m.keyPath, pe))) : (Le = k0(qe, X.values[ye]), (Me = ae.fire.call(Xe, Le, pe, qe, G)) && (Ee = X.values[ye], Object.keys(Me).forEach(function(Ne) {
                    v(Ee, Ne) ? Ee[Ne] = Me[Ne] : A(Ee, Ne, Me[Ne]);
                  }))), Xe;
                });
                return p.mutate(X).then(function(pe) {
                  for (var ye = pe.failures, Le = pe.results, Me = pe.numFailures, pe = pe.lastResult, Ee = 0; Ee < se.length; ++Ee) {
                    var qe = (Le || se)[Ee], Xe = re[Ee];
                    qe == null ? Xe.onerror && Xe.onerror(ye[Ee]) : Xe.onsuccess && Xe.onsuccess(X.type === "put" && le[Ee] ? X.values[Ee] : qe);
                  }
                  return { failures: ye, results: Le, numFailures: Me, lastResult: pe };
                }).catch(function(pe) {
                  return re.forEach(function(ye) {
                    return ye.onerror && ye.onerror(pe);
                  }), Promise.reject(pe);
                });
              });
              throw new Error("Keys missing");
            }
          } });
        } });
      } };
      function oo(o, l, p) {
        try {
          if (!l || l.keys.length < o.length) return null;
          for (var m = [], k = 0, T = 0; k < l.keys.length && T < o.length; ++k) ur(l.keys[k], o[T]) === 0 && (m.push(p ? de(l.values[k]) : l.values[k]), ++T);
          return m.length === o.length ? m : null;
        } catch {
          return null;
        }
      }
      var Ql = { stack: "dbcore", level: -1, create: function(o) {
        return { table: function(l) {
          var p = o.table(l);
          return a(a({}, p), { getMany: function(m) {
            var k;
            return m.cache ? (k = oo(m.keys, m.trans._cache, m.cache === "clone")) ? He.resolve(k) : p.getMany(m).then(function(T) {
              return m.trans._cache = { keys: m.keys, values: m.cache === "clone" ? de(T) : T }, T;
            }) : p.getMany(m);
          }, mutate: function(m) {
            return m.type !== "add" && (m.trans._cache = null), p.mutate(m);
          } });
        } };
      } };
      function co(o, l) {
        return o.trans.mode === "readonly" && !!o.subscr && !o.trans.explicit && o.trans.db._options.cache !== "disabled" && !l.schema.primaryKey.outbound;
      }
      function uo(o, l) {
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
      var eh = { stack: "dbcore", level: 0, name: "Observability", create: function(o) {
        var l = o.schema.name, p = new St(o.MIN_KEY, o.MAX_KEY);
        return a(a({}, o), { transaction: function(m, k, T) {
          if (Ze.subscr && k !== "readonly") throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ze.querier));
          return o.transaction(m, k, T);
        }, table: function(m) {
          function k(se) {
            var G, se = se.query;
            return [G = se.index, new St((G = (se = se.range).lower) != null ? G : o.MIN_KEY, (G = se.upper) != null ? G : o.MAX_KEY)];
          }
          var T = o.table(m), b = T.schema, N = b.primaryKey, z = b.indexes, ae = N.extractKey, q = N.outbound, X = N.autoIncrement && z.filter(function(Y) {
            return Y.compound && Y.keyPath.includes(N.keyPath);
          }), J = a(a({}, T), { mutate: function(Y) {
            function G(Je) {
              return Je = "idb://".concat(l, "/").concat(m, "/").concat(Je), ye[Je] || (ye[Je] = new St());
            }
            var se, le, re, pe = Y.trans, ye = Y.mutatedParts || (Y.mutatedParts = {}), Le = G(""), Me = G(":dels"), Ee = Y.type, Xe = Y.type === "deleteRange" ? [Y.range] : Y.type === "delete" ? [Y.keys] : Y.values.length < 50 ? [E0(N, Y).filter(function(Je) {
              return Je;
            }), Y.values] : [], qe = Xe[0], Xe = Xe[1], Ne = Y.trans._cache;
            return f(qe) ? (Le.addKeys(qe), (Ee = Ee === "delete" || qe.length === Xe.length ? oo(qe, Ne) : null) || Me.addKeys(qe), (Ee || Xe) && (se = G, le = Ee, re = Xe, b.indexes.forEach(function(Je) {
              var Ar = se(Je.name || "");
              function Ir(wr) {
                return wr != null ? Je.extractKey(wr) : null;
              }
              function fr(wr) {
                Je.multiEntry && f(wr) ? wr.forEach(function(Yr) {
                  return Ar.addKey(Yr);
                }) : Ar.addKey(wr);
              }
              (le || re).forEach(function(wr, Jr) {
                var Jt = le && Ir(le[Jr]), Jr = re && Ir(re[Jr]);
                ur(Jt, Jr) !== 0 && (Jt != null && fr(Jt), Jr != null) && fr(Jr);
              });
            }))) : qe ? (Xe = { from: (Ne = qe.lower) != null ? Ne : o.MIN_KEY, to: (Ee = qe.upper) != null ? Ee : o.MAX_KEY }, Me.add(Xe), Le.add(Xe)) : (Le.add(p), Me.add(p), b.indexes.forEach(function(Je) {
              return G(Je.name).add(p);
            })), T.mutate(Y).then(function(Je) {
              return !qe || Y.type !== "add" && Y.type !== "put" || (Le.addKeys(Je.results), X && X.forEach(function(Ar) {
                for (var Ir = Y.values.map(function(Jt) {
                  return Ar.extractKey(Jt);
                }), fr = Ar.keyPath.findIndex(function(Jt) {
                  return Jt === N.keyPath;
                }), wr = 0, Yr = Je.results.length; wr < Yr; ++wr) Ir[wr][fr] = Je.results[wr];
                G(Ar.name).addKeys(Ir);
              })), pe.mutatedParts = cs(pe.mutatedParts || {}, ye), Je;
            });
          } }), Q = { get: function(Y) {
            return [N, new St(Y.key)];
          }, getMany: function(Y) {
            return [N, new St().addKeys(Y.keys)];
          }, count: k, query: k, openCursor: k };
          return s(Q).forEach(function(Y) {
            J[Y] = function(G) {
              var se = Ze.subscr, le = !!se, re = co(Ze, T) && uo(Y, G) ? G.obsSet = {} : se;
              if (le) {
                var pe, se = function(Xe) {
                  return Xe = "idb://".concat(l, "/").concat(m, "/").concat(Xe), re[Xe] || (re[Xe] = new St());
                }, ye = se(""), Le = se(":dels"), le = Q[Y](G), Me = le[0], le = le[1];
                if ((Y === "query" && Me.isPrimaryKey && !G.values ? Le : se(Me.name || "")).add(le), !Me.isPrimaryKey) {
                  if (Y !== "count") return pe = Y === "query" && q && G.values && T.query(a(a({}, G), { values: false })), T[Y].apply(this, arguments).then(function(Xe) {
                    if (Y === "query") {
                      if (q && G.values) return pe.then(function(Ir) {
                        return Ir = Ir.result, ye.addKeys(Ir), Xe;
                      });
                      var Ne = G.values ? Xe.result.map(ae) : Xe.result;
                      (G.values ? ye : Le).addKeys(Ne);
                    } else {
                      var Je, Ar;
                      if (Y === "openCursor") return Ar = G.values, (Je = Xe) && Object.create(Je, { key: { get: function() {
                        return Le.addKey(Je.primaryKey), Je.key;
                      } }, primaryKey: { get: function() {
                        var Ir = Je.primaryKey;
                        return Le.addKey(Ir), Ir;
                      } }, value: { get: function() {
                        return Ar && ye.addKey(Je.primaryKey), Je.value;
                      } } });
                    }
                    return Xe;
                  });
                  Le.add(p);
                }
              }
              return T[Y].apply(this, arguments);
            };
          }), J;
        } });
      } };
      function lo(o, l, p) {
        var m;
        return p.numFailures === 0 ? l : l.type === "deleteRange" || (m = l.keys ? l.keys.length : "values" in l && l.values ? l.values.length : 1, p.numFailures === m) ? null : (m = a({}, l), f(m.keys) && (m.keys = m.keys.filter(function(k, T) {
          return !(T in p.failures);
        })), "values" in m && f(m.values) && (m.values = m.values.filter(function(k, T) {
          return !(T in p.failures);
        })), m);
      }
      function T0(o, l) {
        return p = o, ((m = l).lower === void 0 || (m.lowerOpen ? 0 < ur(p, m.lower) : 0 <= ur(p, m.lower))) && (p = o, (m = l).upper === void 0 || (m.upperOpen ? ur(p, m.upper) < 0 : ur(p, m.upper) <= 0));
        var p, m;
      }
      function ho(o, l, p, m, k, T) {
        var b, N, z, ae, q, X;
        return !p || p.length === 0 || (b = l.query.index, N = b.multiEntry, z = l.query.range, ae = m.schema.primaryKey.extractKey, q = b.extractKey, X = (b.lowLevelIndex || b).extractKey, (m = p.reduce(function(J, Q) {
          var Y = J, G = [];
          if (Q.type === "add" || Q.type === "put") for (var se = new St(), le = Q.values.length - 1; 0 <= le; --le) {
            var re, pe = Q.values[le], ye = ae(pe);
            !se.hasKey(ye) && (re = q(pe), N && f(re) ? re.some(function(Xe) {
              return T0(Xe, z);
            }) : T0(re, z)) && (se.addKey(ye), G.push(pe));
          }
          switch (Q.type) {
            case "add":
              var Le = new St().addKeys(l.values ? J.map(function(Ne) {
                return ae(Ne);
              }) : J), Y = J.concat(l.values ? G.filter(function(Ne) {
                return Ne = ae(Ne), !Le.hasKey(Ne) && (Le.addKey(Ne), true);
              }) : G.map(function(Ne) {
                return ae(Ne);
              }).filter(function(Ne) {
                return !Le.hasKey(Ne) && (Le.addKey(Ne), true);
              }));
              break;
            case "put":
              var Me = new St().addKeys(Q.values.map(function(Ne) {
                return ae(Ne);
              }));
              Y = J.filter(function(Ne) {
                return !Me.hasKey(l.values ? ae(Ne) : Ne);
              }).concat(l.values ? G : G.map(function(Ne) {
                return ae(Ne);
              }));
              break;
            case "delete":
              var Ee = new St().addKeys(Q.keys);
              Y = J.filter(function(Ne) {
                return !Ee.hasKey(l.values ? ae(Ne) : Ne);
              });
              break;
            case "deleteRange":
              var qe = Q.range;
              Y = J.filter(function(Ne) {
                return !T0(ae(Ne), qe);
              });
          }
          return Y;
        }, o)) === o) ? o : (m.sort(function(J, Q) {
          return ur(X(J), X(Q)) || ur(ae(J), ae(Q));
        }), l.limit && l.limit < 1 / 0 && (m.length > l.limit ? m.length = l.limit : o.length === l.limit && m.length < l.limit && (k.dirty = true)), T ? Object.freeze(m) : m);
      }
      function xo(o, l) {
        return ur(o.lower, l.lower) === 0 && ur(o.upper, l.upper) === 0 && !!o.lowerOpen == !!l.lowerOpen && !!o.upperOpen == !!l.upperOpen;
      }
      function rh(o, l) {
        return ((p, m, k, T) => {
          if (p === void 0) return m !== void 0 ? -1 : 0;
          if (m === void 0) return 1;
          if ((p = ur(p, m)) === 0) {
            if (k && T) return 0;
            if (k) return 1;
            if (T) return -1;
          }
          return p;
        })(o.lower, l.lower, o.lowerOpen, l.lowerOpen) <= 0 && 0 <= ((p, m, k, T) => {
          if (p === void 0) return m !== void 0 ? 1 : 0;
          if (m === void 0) return -1;
          if ((p = ur(p, m)) === 0) {
            if (k && T) return 0;
            if (k) return -1;
            if (T) return 1;
          }
          return p;
        })(o.upper, l.upper, o.upperOpen, l.upperOpen);
      }
      function th(o, l, p, m) {
        o.subscribers.add(p), m.addEventListener("abort", function() {
          var k, T;
          o.subscribers.delete(p), o.subscribers.size === 0 && (k = o, T = l, setTimeout(function() {
            k.subscribers.size === 0 && Be(T, k);
          }, 3e3));
        });
      }
      var ah = { stack: "dbcore", level: 0, name: "Cache", create: function(o) {
        var l = o.schema.name;
        return a(a({}, o), { transaction: function(p, m, k) {
          var T, b, N = o.transaction(p, m, k);
          return m === "readwrite" && (k = (T = new AbortController()).signal, N.addEventListener("abort", (b = function(z) {
            return function() {
              if (T.abort(), m === "readwrite") {
                for (var ae = /* @__PURE__ */ new Set(), q = 0, X = p; q < X.length; q++) {
                  var J = X[q], Q = sn["idb://".concat(l, "/").concat(J)];
                  if (Q) {
                    var Y = o.table(J), G = Q.optimisticOps.filter(function(Je) {
                      return Je.trans === N;
                    });
                    if (N._explicit && z && N.mutatedParts) for (var se = 0, le = Object.values(Q.queries.query); se < le.length; se++) for (var re = 0, pe = (Me = le[se]).slice(); re < pe.length; re++) m0((Ee = pe[re]).obsSet, N.mutatedParts) && (Be(Me, Ee), Ee.subscribers.forEach(function(Je) {
                      return ae.add(Je);
                    }));
                    else if (0 < G.length) {
                      Q.optimisticOps = Q.optimisticOps.filter(function(Je) {
                        return Je.trans !== N;
                      });
                      for (var ye = 0, Le = Object.values(Q.queries.query); ye < Le.length; ye++) for (var Me, Ee, qe, Xe = 0, Ne = (Me = Le[ye]).slice(); Xe < Ne.length; Xe++) (Ee = Ne[Xe]).res != null && N.mutatedParts && (z && !Ee.dirty ? (qe = Object.isFrozen(Ee.res), qe = ho(Ee.res, Ee.req, G, Y, Ee, qe), Ee.dirty ? (Be(Me, Ee), Ee.subscribers.forEach(function(Je) {
                        return ae.add(Je);
                      })) : qe !== Ee.res && (Ee.res = qe, Ee.promise = He.resolve({ result: qe }))) : (Ee.dirty && Be(Me, Ee), Ee.subscribers.forEach(function(Je) {
                        return ae.add(Je);
                      })));
                    }
                  }
                }
                ae.forEach(function(Je) {
                  return Je();
                });
              }
            };
          })(false), { signal: k }), N.addEventListener("error", b(false), { signal: k }), N.addEventListener("complete", b(true), { signal: k })), N;
        }, table: function(p) {
          var m = o.table(p), k = m.schema.primaryKey;
          return a(a({}, m), { mutate: function(T) {
            var b, N = Ze.trans;
            return !k.outbound && N.db._options.cache !== "disabled" && !N.explicit && N.idbtrans.mode === "readwrite" && (b = sn["idb://".concat(l, "/").concat(p)]) ? (N = m.mutate(T), T.type !== "add" && T.type !== "put" || !(50 <= T.values.length || E0(k, T).some(function(z) {
              return z == null;
            })) ? (b.optimisticOps.push(T), T.mutatedParts && us(T.mutatedParts), N.then(function(z) {
              0 < z.numFailures && (Be(b.optimisticOps, T), (z = lo(0, T, z)) && b.optimisticOps.push(z), T.mutatedParts) && us(T.mutatedParts);
            }), N.catch(function() {
              Be(b.optimisticOps, T), T.mutatedParts && us(T.mutatedParts);
            })) : N.then(function(z) {
              var ae = lo(0, a(a({}, T), { values: T.values.map(function(q, X) {
                var J;
                return z.failures[X] ? q : (A(J = (J = k.keyPath) != null && J.includes(".") ? de(q) : a({}, q), k.keyPath, z.results[X]), J);
              }) }), z);
              b.optimisticOps.push(ae), queueMicrotask(function() {
                return T.mutatedParts && us(T.mutatedParts);
              });
            }), N) : m.mutate(T);
          }, query: function(T) {
            var b, N, z, ae, q, X, J;
            return co(Ze, m) && uo("query", T) ? (b = ((z = Ze.trans) == null ? void 0 : z.db._options.cache) === "immutable", N = (z = Ze).requery, z = z.signal, X = ((Q, Y, G, se) => {
              var le = sn["idb://".concat(Q, "/").concat(Y)];
              if (!le) return [];
              if (!(Q = le.queries[G])) return [null, false, le, null];
              var re = Q[(se.query ? se.query.index.name : null) || ""];
              if (!re) return [null, false, le, null];
              switch (G) {
                case "query":
                  var pe = re.find(function(ye) {
                    return ye.req.limit === se.limit && ye.req.values === se.values && xo(ye.req.query.range, se.query.range);
                  });
                  return pe ? [pe, true, le, re] : [re.find(function(ye) {
                    return ("limit" in ye.req ? ye.req.limit : 1 / 0) >= se.limit && (!se.values || ye.req.values) && rh(ye.req.query.range, se.query.range);
                  }), false, le, re];
                case "count":
                  return pe = re.find(function(ye) {
                    return xo(ye.req.query.range, se.query.range);
                  }), [pe, !!pe, le, re];
              }
            })(l, p, "query", T), J = X[0], ae = X[2], q = X[3], J && X[1] ? J.obsSet = T.obsSet : (X = m.query(T).then(function(Q) {
              var Y = Q.result;
              if (J && (J.res = Y), b) {
                for (var G = 0, se = Y.length; G < se; ++G) Object.freeze(Y[G]);
                Object.freeze(Y);
              } else Q.result = de(Y);
              return Q;
            }).catch(function(Q) {
              return q && J && Be(q, J), Promise.reject(Q);
            }), J = { obsSet: T.obsSet, promise: X, subscribers: /* @__PURE__ */ new Set(), type: "query", req: T, dirty: false }, q ? q.push(J) : (q = [J], (ae = ae || (sn["idb://".concat(l, "/").concat(p)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[T.query.index.name || ""] = q)), th(J, q, N, z), J.promise.then(function(Q) {
              return { result: ho(Q.result, T, ae == null ? void 0 : ae.optimisticOps, m, J, b) };
            })) : m.query(T);
          } });
        } });
      } };
      function hs(o, l) {
        return new Proxy(o, { get: function(p, m, k) {
          return m === "db" ? l : Reflect.get(p, m, k);
        } });
      }
      et.prototype.version = function(o) {
        if (isNaN(o) || o < 0.1) throw new L.Type("Given version is not a positive number");
        if (o = Math.round(10 * o) / 10, this.idbdb || this._state.isBeingOpened) throw new L.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, o);
        var l = this._versions, p = l.filter(function(m) {
          return m._cfg.version === o;
        })[0];
        return p || (p = new this.Version(o), l.push(p), l.sort(Gl), p.stores({}), this._state.autoSchema = false), p;
      }, et.prototype._whenReady = function(o) {
        var l = this;
        return this.idbdb && (this._state.openComplete || Ze.letThrough || this._vip) ? o() : new He(function(p, m) {
          if (l._state.openComplete) return m(new L.DatabaseClosed(l._state.dbOpenError));
          if (!l._state.isBeingOpened) {
            if (!l._state.autoOpen) return void m(new L.DatabaseClosed());
            l.open().catch(ue);
          }
          l._state.dbReadyPromise.then(p, m);
        }).then(o);
      }, et.prototype.use = function(k) {
        var l = k.stack, p = k.create, m = k.level, k = k.name, T = (k && this.unuse({ stack: l, name: k }), this._middlewares[l] || (this._middlewares[l] = []));
        return T.push({ stack: l, create: p, level: m ?? 10, name: k }), T.sort(function(b, N) {
          return b.level - N.level;
        }), this;
      }, et.prototype.unuse = function(o) {
        var l = o.stack, p = o.name, m = o.create;
        return l && this._middlewares[l] && (this._middlewares[l] = this._middlewares[l].filter(function(k) {
          return m ? k.create !== m : !!p && k.name !== p;
        })), this;
      }, et.prototype.open = function() {
        var o = this;
        return ie(vt, function() {
          return Yl(o);
        });
      }, et.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var o = this._state, l = Or.indexOf(this);
        if (0 <= l && Or.splice(l, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        o.isBeingOpened || (o.dbReadyPromise = new He(function(p) {
          o.dbReadyResolve = p;
        }), o.openCanceller = new He(function(p, m) {
          o.cancelOpen = m;
        }));
      }, et.prototype.close = function(l) {
        var l = (l === void 0 ? { disableAutoOpen: true } : l).disableAutoOpen, p = this._state;
        l ? (p.isBeingOpened && p.cancelOpen(new L.DatabaseClosed()), this._close(), p.autoOpen = false, p.dbOpenError = new L.DatabaseClosed()) : (this._close(), p.autoOpen = this._options.autoOpen || p.isBeingOpened, p.openComplete = false, p.dbOpenError = null);
      }, et.prototype.delete = function(o) {
        var l = this, p = (o === void 0 && (o = { disableAutoOpen: true }), 0 < arguments.length && typeof arguments[0] != "object"), m = this._state;
        return new He(function(k, T) {
          function b() {
            l.close(o);
            var N = l._deps.indexedDB.deleteDatabase(l.name);
            N.onsuccess = Ur(function() {
              var z, ae, q;
              z = l._deps, ae = l.name, x0(q = z.indexedDB) || ae === Wr || d0(q, z.IDBKeyRange).delete(ae).catch(ue), k();
            }), N.onerror = ma(T), N.onblocked = l._fireOnBlocked;
          }
          if (p) throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");
          m.isBeingOpened ? m.dbReadyPromise.then(b) : b();
        });
      }, et.prototype.backendDB = function() {
        return this.idbdb;
      }, et.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, et.prototype.hasBeenClosed = function() {
        var o = this._state.dbOpenError;
        return o && o.name === "DatabaseClosed";
      }, et.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, et.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(et.prototype, "tables", { get: function() {
        var o = this;
        return s(this._allTables).map(function(l) {
          return o._allTables[l];
        });
      }, enumerable: false, configurable: true }), et.prototype.transaction = function() {
        var o = (function(l, p, m) {
          var k = arguments.length;
          if (k < 2) throw new L.InvalidArgument("Too few arguments");
          for (var T = new Array(k - 1); --k; ) T[k - 1] = arguments[k];
          return m = T.pop(), [l, Z(T), m];
        }).apply(this, arguments);
        return this._transaction.apply(this, o);
      }, et.prototype._transaction = function(o, l, p) {
        var m, k, T = this, b = Ze.trans, N = (b && b.db === this && o.indexOf("!") === -1 || (b = null), o.indexOf("?") !== -1);
        o = o.replace("!", "").replace("?", "");
        try {
          if (k = l.map(function(ae) {
            if (ae = ae instanceof T.Table ? ae.name : ae, typeof ae != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return ae;
          }), o == "r" || o === ft) m = ft;
          else {
            if (o != "rw" && o != Ca) throw new L.InvalidArgument("Invalid transaction mode: " + o);
            m = Ca;
          }
          if (b) {
            if (b.mode === ft && m === Ca) {
              if (!N) throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              b = null;
            }
            b && k.forEach(function(ae) {
              if (b && b.storeNames.indexOf(ae) === -1) {
                if (!N) throw new L.SubTransaction("Table " + ae + " not included in parent transaction.");
                b = null;
              }
            }), N && b && !b.active && (b = null);
          }
        } catch (ae) {
          return b ? b._promise(null, function(q, X) {
            X(ae);
          }) : De(ae);
        }
        var z = (function ae(q, X, J, Q, Y) {
          return He.resolve().then(function() {
            var re = Ze.transless || Ze, G = q._createTransaction(X, J, q._dbSchema, Q), re = (G.explicit = true, { trans: G, transless: re });
            if (Q) G.idbtrans = Q.idbtrans;
            else try {
              G.create(), G.idbtrans._explicit = true, q._state.PR1398_maxLoop = 3;
            } catch (pe) {
              return pe.name === R.InvalidState && q.isOpen() && 0 < --q._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), q.close({ disableAutoOpen: false }), q.open().then(function() {
                return ae(q, X, J, null, Y);
              })) : De(pe);
            }
            var se, le = sr(Y), re = (le && P(), He.follow(function() {
              var pe;
              (se = Y.call(G, G)) && (le ? (pe = M.bind(null, null), se.then(pe, pe)) : typeof se.next == "function" && typeof se.throw == "function" && (se = y0(se)));
            }, re));
            return (se && typeof se.then == "function" ? He.resolve(se).then(function(pe) {
              return G.active ? pe : De(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : re.then(function() {
              return se;
            })).then(function(pe) {
              return Q && G._resolve(), G._completion.then(function() {
                return pe;
              });
            }).catch(function(pe) {
              return G._reject(pe), De(pe);
            });
          });
        }).bind(null, this, m, k, b, p);
        return b ? b._promise(m, z, "lock") : Ze.trans ? ie(Ze.transless, function() {
          return T._whenReady(z);
        }) : this._whenReady(z);
      }, et.prototype.table = function(o) {
        if (v(this._allTables, o)) return this._allTables[o];
        throw new L.InvalidTable("Table ".concat(o, " does not exist"));
      };
      var Da = et;
      function et(o, l) {
        var p, m, k, T, b, N = this, z = (this._middlewares = {}, this.verno = 0, et.dependencies), z = (this._options = l = a({ addons: et.addons, autoOpen: true, indexedDB: z.indexedDB, IDBKeyRange: z.IDBKeyRange, cache: "cloned" }, l), this._deps = { indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange }, l.addons), ae = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: ue, dbReadyPromise: null, cancelOpen: ue, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: l.autoOpen }), q = (ae.dbReadyPromise = new He(function(X) {
          ae.dbReadyResolve = X;
        }), ae.openCanceller = new He(function(X, J) {
          ae.cancelOpen = J;
        }), this._state = ae, this.name = o, this.on = ai(this, "populate", "blocked", "versionchange", "close", { ready: [br, ue] }), this.once = function(X, J) {
          var Q = function() {
            for (var Y = [], G = 0; G < arguments.length; G++) Y[G] = arguments[G];
            N.on(X).unsubscribe(Q), J.apply(N, Y);
          };
          return N.on(X, Q);
        }, this.on.ready.subscribe = E(this.on.ready.subscribe, function(X) {
          return function(J, Q) {
            et.vip(function() {
              var Y, G = N._state;
              G.openComplete ? (G.dbOpenError || He.resolve().then(J), Q && X(J)) : G.onReadyBeingFired ? (G.onReadyBeingFired.push(J), Q && X(J)) : (X(J), Y = N, Q || X(function se() {
                Y.on.ready.unsubscribe(J), Y.on.ready.unsubscribe(se);
              }));
            });
          };
        }), this.Collection = (p = this, ni(Ul.prototype, function(se, G) {
          this.db = p;
          var Q = ja, Y = null;
          if (G) try {
            Q = G();
          } catch (re) {
            Y = re;
          }
          var G = se._ctx, se = G.table, le = se.hook.reading.fire;
          this._ctx = { table: se, index: G.index, isPrimKey: !G.index || se.schema.primKey.keyPath && G.index === se.schema.primKey.name, range: Q, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: Y, or: G.or, valueMapper: le !== O ? le : null };
        })), this.Table = (m = this, ni($f.prototype, function(X, J, Q) {
          this.db = m, this._tx = Q, this.name = X, this.schema = J, this.hook = m._allTables[X] ? m._allTables[X].hook : ai(null, { creating: [Fe, ue], reading: [Ce, O], updating: [rr, ue], deleting: [ar, ue] });
        })), this.Transaction = (k = this, ni(Vl.prototype, function(X, J, Q, Y, G) {
          var se = this;
          X !== "readonly" && J.forEach(function(le) {
            le = (le = Q[le]) == null ? void 0 : le.yProps, le && (J = J.concat(le.map(function(re) {
              return re.updatesTable;
            })));
          }), this.db = k, this.mode = X, this.storeNames = J, this.schema = Q, this.chromeTransactionDurability = Y, this.idbtrans = null, this.on = ai(this, "complete", "error", "abort"), this.parent = G || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new He(function(le, re) {
            se._resolve = le, se._reject = re;
          }), this._completion.then(function() {
            se.active = false, se.on.complete.fire();
          }, function(le) {
            var re = se.active;
            return se.active = false, se.on.error.fire(le), se.parent ? se.parent._reject(le) : re && se.idbtrans && se.idbtrans.abort(), De(le);
          });
        })), this.Version = (T = this, ni(ql.prototype, function(X) {
          this.db = T, this._cfg = { version: X, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, ni(Qf.prototype, function(X, J, Q) {
          if (this.db = b, this._ctx = { table: X, index: J === ":id" ? null : J, or: Q }, this._cmp = this._ascending = ur, this._descending = function(Y, G) {
            return ur(G, Y);
          }, this._max = function(Y, G) {
            return 0 < ur(Y, G) ? Y : G;
          }, this._min = function(Y, G) {
            return ur(Y, G) < 0 ? Y : G;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new L.MissingAPI();
        })), this.on("versionchange", function(X) {
          0 < X.newVersion ? console.warn("Another connection wants to upgrade database '".concat(N.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(N.name, "'. Closing db now to resume the delete request.")), N.close({ disableAutoOpen: false });
        }), this.on("blocked", function(X) {
          !X.newVersion || X.newVersion < X.oldVersion ? console.warn("Dexie.delete('".concat(N.name, "') was blocked")) : console.warn("Upgrade '".concat(N.name, "' blocked by other connection holding version ").concat(X.oldVersion / 10));
        }), this._maxKey = fi(l.IDBKeyRange), this._createTransaction = function(X, J, Q, Y) {
          return new N.Transaction(X, J, Q, N._options.chromeTransactionDurability, Y);
        }, this._fireOnBlocked = function(X) {
          N.on("blocked").fire(X), Or.filter(function(J) {
            return J.name === N.name && J !== N && !J._state.vcFired;
          }).map(function(J) {
            return J.on("versionchange").fire(X);
          });
        }, this.use(Ql), this.use(ah), this.use(eh), this.use(Zl), this.use(Jl), new Proxy(this, { get: function(X, J, Q) {
          var Y;
          return J === "_vip" || (J === "table" ? function(G) {
            return hs(N.table(G), q);
          } : (Y = Reflect.get(X, J, Q)) instanceof $f ? hs(Y, q) : J === "tables" ? Y.map(function(G) {
            return hs(G, q);
          }) : J === "_createTransaction" ? function() {
            return hs(Y.apply(this, arguments), q);
          } : Y);
        } }));
        this.vip = q, z.forEach(function(X) {
          return X(N);
        });
      }
      var ds, Bn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", nh = (S0.prototype.subscribe = function(o, l, p) {
        return this._subscribe(o && typeof o != "function" ? o : { next: o, error: l, complete: p });
      }, S0.prototype[Bn] = function() {
        return this;
      }, S0);
      function S0(o) {
        this._subscribe = o;
      }
      try {
        ds = { indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB, IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange };
      } catch {
        ds = { indexedDB: null, IDBKeyRange: null };
      }
      function po(o) {
        var l, p = false, m = new nh(function(k) {
          var T = sr(o), b, N = false, z = {}, ae = {}, q = { get closed() {
            return N;
          }, unsubscribe: function() {
            N || (N = true, b && b.abort(), X && za.storagemutated.unsubscribe(Q));
          } }, X = (k.start && k.start(q), false), J = function() {
            return Pe(Y);
          }, Q = function(G) {
            cs(z, G), m0(ae, z) && J();
          }, Y = function() {
            var G, se, le;
            !N && ds.indexedDB && (z = {}, G = {}, b && b.abort(), b = new AbortController(), le = ((re) => {
              var pe = Xa();
              try {
                T && P();
                var ye = D(o, re);
                return ye = T ? ye.finally(M) : ye;
              } finally {
                pe && Ka();
              }
            })(se = { subscr: G, signal: b.signal, requery: J, querier: o, trans: null }), Promise.resolve(le).then(function(re) {
              p = true, l = re, N || se.signal.aborted || (z = {}, ((pe) => {
                for (var ye in pe) if (v(pe, ye)) return;
                return 1;
              })(ae = G) || X || (za(si, Q), X = true), Pe(function() {
                return !N && k.next && k.next(re);
              }));
            }, function(re) {
              p = false, ["DatabaseClosedError", "AbortError"].includes(re == null ? void 0 : re.name) || N || Pe(function() {
                N || k.error && k.error(re);
              });
            }));
          };
          return setTimeout(J, 0), q;
        });
        return m.hasValue = function() {
          return p;
        }, m.getValue = function() {
          return l;
        }, m;
      }
      var fn = Da;
      function F0(o) {
        var l = $a;
        try {
          $a = true, za.storagemutated.fire(o), w0(o, true);
        } finally {
          $a = l;
        }
      }
      d(fn, a(a({}, Se), { delete: function(o) {
        return new fn(o, { addons: [] }).delete();
      }, exists: function(o) {
        return new fn(o, { addons: [] }).open().then(function(l) {
          return l.close(), true;
        }).catch("NoSuchDatabaseError", function() {
          return false;
        });
      }, getDatabaseNames: function(o) {
        try {
          return l = fn.dependencies, p = l.indexedDB, l = l.IDBKeyRange, (x0(p) ? Promise.resolve(p.databases()).then(function(m) {
            return m.map(function(k) {
              return k.name;
            }).filter(function(k) {
              return k !== Wr;
            });
          }) : d0(p, l).toCollection().primaryKeys()).then(o);
        } catch {
          return De(new L.MissingAPI());
        }
        var l, p;
      }, defineClass: function() {
        return function(o) {
          c(this, o);
        };
      }, ignoreTransaction: function(o) {
        return Ze.trans ? ie(Ze.transless, o) : o();
      }, vip: p0, async: function(o) {
        return function() {
          try {
            var l = y0(o.apply(this, arguments));
            return l && typeof l.then == "function" ? l : He.resolve(l);
          } catch (p) {
            return De(p);
          }
        };
      }, spawn: function(o, l, p) {
        try {
          var m = y0(o.apply(p, l || []));
          return m && typeof m.then == "function" ? m : He.resolve(m);
        } catch (k) {
          return De(k);
        }
      }, currentTransaction: { get: function() {
        return Ze.trans || null;
      } }, waitFor: function(o, l) {
        return o = He.resolve(typeof o == "function" ? fn.ignoreTransaction(o) : o).timeout(l || 6e4), Ze.trans ? Ze.trans.waitFor(o) : o;
      }, Promise: He, debug: { get: function() {
        return yr;
      }, set: function(o) {
        Kr(o);
      } }, derive: y, extend: c, props: d, override: E, Events: ai, on: za, liveQuery: po, extendObservabilitySet: cs, getByKeyPath: K, setByKeyPath: A, delByKeyPath: function(o, l) {
        typeof l == "string" ? A(o, l, void 0) : "length" in l && [].map.call(l, function(p) {
          A(o, p, void 0);
        });
      }, shallowClone: H, deepClone: de, getObjectDiff: k0, cmp: ur, asap: V, minKey: -1 / 0, addons: [], connections: Or, errnames: R, dependencies: ds, cache: sn, semVer: "4.3.0", version: "4.3.0".split(".").map(function(o) {
        return parseInt(o);
      }).reduce(function(o, l, p) {
        return o + l / Math.pow(10, 2 * p);
      }) })), fn.maxKey = fi(fn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (za(si, function(o) {
        $a || (o = new CustomEvent(s0, { detail: o }), $a = true, dispatchEvent(o), $a = false);
      }), addEventListener(s0, function(o) {
        o = o.detail, $a || F0(o);
      }));
      var Ln, $a = false, vo = function() {
      };
      return typeof BroadcastChannel < "u" && ((vo = function() {
        (Ln = new BroadcastChannel(s0)).onmessage = function(o) {
          return o.data && F0(o.data);
        };
      })(), typeof Ln.unref == "function" && Ln.unref(), za(si, function(o) {
        $a || Ln.postMessage(o);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(o) {
        if (!Da.disableBfCache && o.persisted) {
          yr && console.debug("Dexie: handling persisted pagehide"), Ln == null ? void 0 : Ln.close();
          for (var l = 0, p = Or; l < p.length; l++) p[l].close({ disableAutoOpen: false });
        }
      }), addEventListener("pageshow", function(o) {
        !Da.disableBfCache && o.persisted && (yr && console.debug("Dexie: handling persisted pageshow"), vo(), F0({ all: new St(-1 / 0, [[]]) }));
      })), He.rejectionMapper = function(o, l) {
        return !o || o instanceof _e || o instanceof TypeError || o instanceof SyntaxError || !o.name || !U[o.name] ? o : (l = new U[o.name](l || o.message, o), "stack" in o && w(l, "stack", { get: function() {
          return this.inner.stack;
        } }), l);
      }, Kr(yr), a(Da, Object.freeze({ __proto__: null, Dexie: Da, Entity: On, PropModification: ti, RangeSet: St, add: function(o) {
        return new ti({ add: o });
      }, cmp: ur, default: Da, liveQuery: po, mergeRanges: ui, rangesOverlap: no, remove: function(o) {
        return new ti({ remove: o });
      }, replacePrefix: function(o, l) {
        return new ti({ replacePrefix: [o, l] });
      } }), { default: Da }), Da;
    });
  })(bs)), bs.exports;
}
var uh = ch();
const $0 = fh(uh), go = /* @__PURE__ */ Symbol.for("Dexie"), As = globalThis[go] || (globalThis[go] = $0);
if ($0.semVer !== As.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${$0.semVer} and ${As.semVer}`);
const { liveQuery: $k, mergeRanges: qk, rangesOverlap: Yk, RangeSet: Zk, cmp: Jk, Entity: Qk, PropModification: e4, replacePrefix: r4, add: t4, remove: a4, DexieYProvider: n4 } = As, A0 = ["accession", "book_name", "isbn", "book_type", "author", "published", "num_of_pages", "image_links", "language"], ka = new As("SpreadsheetDatabase");
ka.version(2).stores({ spreadsheets: "++, &isbn, accession, book_name, book_type, author, published, num_of_pages, image_links, language" });
ka.version(1).stores({ settings: "key" });
var Cs = {};
Cs.version = "0.20.3";
var na = 1200, lh = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], of = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, cf = function(e) {
  lh.indexOf(e) != -1 && (of[0] = e);
};
function hh() {
  cf(1252);
}
var ua = function(e) {
  na = e, cf(e);
};
function uf() {
  ua(1200), hh();
}
function _o(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function Dc(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function dh(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function Ic(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var hi = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? Dc(e.slice(2)) : r == 254 && t == 255 ? Ic(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, xs = function(r) {
  return String.fromCharCode(r);
}, wo = function(r) {
  return String.fromCharCode(r);
}, xh = null, Nt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Ds(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), i = t >> 2, a = e.charCodeAt(u++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Nt.charAt(i) + Nt.charAt(s) + Nt.charAt(f) + Nt.charAt(c);
  return r;
}
function ph(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e.charCodeAt(u++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(u++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(u++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Nt.charAt(i) + Nt.charAt(s) + Nt.charAt(f) + Nt.charAt(c);
  return r;
}
function vh(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, u = 0; u < e.length; ) t = e[u++], i = t >> 2, a = e[u++], s = (t & 3) << 4 | a >> 4, n = e[u++], f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Nt.charAt(i) + Nt.charAt(s) + Nt.charAt(f) + Nt.charAt(c);
  return r;
}
function qt(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0;
  if (e.slice(0, 5) == "data:") {
    var u = e.slice(0, 1024).indexOf(";base64,");
    u > -1 && (e = e.slice(u + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var u = 0; u < e.length; ) i = Nt.indexOf(e.charAt(u++)), s = Nt.indexOf(e.charAt(u++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Nt.indexOf(e.charAt(u++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), c = Nt.indexOf(e.charAt(u++)), n = (f & 3) << 6 | c, c !== 64 && (r += String.fromCharCode(n));
  return r;
}
var pr = (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), Aa = (function() {
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
})(), Si = (function() {
  if (typeof Buffer > "u") return false;
  var e = Aa([65, 0]);
  if (!e) return false;
  var r = e.toString("utf16le");
  return r.length == 1;
})();
function Za(e) {
  return pr ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function yo(e) {
  return pr ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Ut = function(r) {
  return pr ? Aa(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function Hs(e) {
  if (typeof ArrayBuffer > "u") return Ut(e);
  for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
  return r;
}
function ba(e) {
  if (Array.isArray(e)) return e.map(function(a) {
    return String.fromCharCode(a);
  }).join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function mh(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function lf(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return lf(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var at = pr ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Aa(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(Ut(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function gh(e) {
  for (var r = [], t = 0, a = e.length + 250, n = Za(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048) n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = Za(65535), a = 65530);
  }
  return r.push(n.slice(0, t)), at(r);
}
var Xt = /\u0000/g, di = /[\u0001-\u0006]/g;
function Hn(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function la(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Fr("0", r - t.length) + t;
}
function hf(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Fr(" ", r - t.length) + t;
}
function Is(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + Fr(" ", r - t.length);
}
function _h(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : Fr("0", r - t.length) + t;
}
function wh(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Fr("0", r - t.length) + t;
}
var ko = Math.pow(2, 32);
function Mn(e, r) {
  if (e > ko || e < -ko) return _h(e, r);
  var t = Math.round(e);
  return wh(t, r);
}
function Os(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var Eo = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], C0 = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function yh(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var nr = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, To = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, kh = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function Ns(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, u = 0, h = 0, v = Math.floor(n); u < r && (v = Math.floor(n), f = v * s + i, h = v * u + c, !(n - v < 5e-8)); ) n = 1 / (n - v), i = s, s = f, c = u, u = h;
  if (h > r && (u > r ? (h = c, f = i) : (h = u, f = s)), !t) return [0, a * f, h];
  var d = Math.floor(a * f / h);
  return [d, a * f - d * h, h];
}
function Eh(e) {
  var r = e.toPrecision(16);
  if (r.indexOf("e") > -1) {
    var t = r.slice(0, r.indexOf("e"));
    return t = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Fr("0", t.length - 15), t + r.slice(r.indexOf("e"));
  }
  var a = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Fr("0", r.length - 15);
  return Number(a);
}
function Oa(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  e = Eh(e);
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), r && r.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60) s = t ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0) s = t ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), t && (i = bh(c, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
function df(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Th(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Sh(e) {
  var r = e < 0 ? 12 : 11, t = df(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function Fh(e) {
  var r = df(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function Fi(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = Sh(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = Fh(e), df(Th(t.toUpperCase()));
}
function gn(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Fi(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Yt(14, Zr(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function bh(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function Ah(e, r, t, a) {
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
          return C0[t.m - 1][1];
        case 5:
          return C0[t.m - 1][0];
        default:
          return C0[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          c = t.d, u = r.length;
          break;
        case 3:
          return Eo[t.q][0];
        default:
          return Eo[t.q][1];
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
      return t.u === 0 && (r == "s" || r == "ss") ? la(t.S, r.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (t.S + t.u)), i >= 60 * s && (i = 0), r === "s" ? i === 0 ? "0" : "" + i / s : (n = la(i, 2 + a), r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
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
  var h = u > 0 ? la(c, u) : "";
  return h;
}
function Na(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var Oc = /%/g;
function Ch(e, r, t) {
  var a = r.replace(Oc, ""), n = r.length - a.length;
  return Pa(e, a, t * Math.pow(10, 2 * n)) + Fr("%", n);
}
function Dh(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Pa(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Nc(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Nc(e, -r);
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
var Rc = /# (\?+)( ?)\/( ?)(\d+)/;
function Ih(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Fr(" ", e[1].length + 1 + e[4].length) : hf(s, e[1].length) + e[2] + "/" + e[3] + la(f, e[4].length));
}
function Oh(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Fr(" ", e[1].length + 2 + e[4].length);
}
var Pc = /^#*0*\.([0#]+)/, Bc = /\)[^)]*[0#]/, Lc = /\(###\) ###\\?-####/;
function Mt(e) {
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
function So(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function Fo(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function Nh(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function Rh(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function ea(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Bc)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? ea("n", a, t) : "(" + ea("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return Dh(e, r, t);
  if (r.indexOf("%") !== -1) return Ch(e, r, t);
  if (r.indexOf("E") !== -1) return Nc(r, t);
  if (r.charCodeAt(0) === 36) return "$" + ea(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + Mn(c, r.length);
  if (r.match(/^[#?]+$/)) return n = Mn(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Mt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Rc)) return Ih(i, c, u);
  if (r.match(/^#+0+$/)) return u + Mn(c, r.length - r.indexOf("0"));
  if (i = r.match(Pc)) return n = So(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Mt(i[1])).replace(/\.$/, "." + Mt(i[1])).replace(/\.(\d*)$/, function(w, y) {
    return "." + y + Fr("0", Mt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + So(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Na(Mn(c, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + ea(e, r, -t) : Na("" + (Math.floor(t) + Nh(t, i[1].length))) + "." + la(Fo(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return ea(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = Hn(ea(e, r.replace(/[\\-]/g, ""), t)), s = 0, Hn(Hn(r.replace(/\\/g, "")).replace(/[0#]/g, function(w) {
    return s < n.length ? n.charAt(s++) : w === "0" ? "0" : "";
  }));
  if (r.match(Lc)) return n = ea(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = Ns(c, Math.pow(10, s) - 1, false), n = "" + u, h = Pa("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Is(f[2], s), h.length < i[4].length && (h = Mt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Ns(c, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? hf(f[1], s) + i[2] + "/" + i[3] + Is(f[2], s) : Fr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = Mn(t, 0), r.length <= n.length ? n : Mt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Mt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return s = Fo(t, i[1].length), t < 0 ? "-" + ea(e, r, -t) : Na(Rh(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(w) {
    return "00," + (w.length < 3 ? la(0, 3 - w.length) : "") + w;
  }) + "." + la(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return ea(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Na(Mn(c, 0));
      return x !== "0" ? u + x : "";
    case "###,###.00":
      return ea(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return ea(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function Ph(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Pa(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function Bh(e, r, t) {
  var a = r.replace(Oc, ""), n = r.length - a.length;
  return Pa(e, a, t * Math.pow(10, 2 * n)) + Fr("%", n);
}
function Mc(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Mc(e, -r);
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
function wa(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Bc)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? wa("n", a, t) : "(" + wa("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return Ph(e, r, t);
  if (r.indexOf("%") !== -1) return Bh(e, r, t);
  if (r.indexOf("E") !== -1) return Mc(r, t);
  if (r.charCodeAt(0) === 36) return "$" + wa(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), u = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return u + la(c, r.length);
  if (r.match(/^[#?]+$/)) return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Mt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(Rc)) return Oh(i, c, u);
  if (r.match(/^#+0+$/)) return u + la(c, r.length - r.indexOf("0"));
  if (i = r.match(Pc)) return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Mt(i[1])).replace(/\.$/, "." + Mt(i[1])), n = n.replace(/\.(\d*)$/, function(w, y) {
    return "." + y + Fr("0", Mt(i[1]).length - y.length);
  }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/)) return u + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return u + Na("" + c);
  if (i = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + wa(e, r, -t) : Na("" + t) + "." + Fr("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return wa(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = Hn(wa(e, r.replace(/[\\-]/g, ""), t)), s = 0, Hn(Hn(r.replace(/\\/g, "")).replace(/[0#]/g, function(w) {
    return s < n.length ? n.charAt(s++) : w === "0" ? "0" : "";
  }));
  if (r.match(Lc)) return n = wa(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var h = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(i[4].length, 7), f = Ns(c, Math.pow(10, s) - 1, false), n = "" + u, h = Pa("n", i[1], f[1]), h.charAt(h.length - 1) == " " && (h = h.substr(0, h.length - 1) + "0"), n += h + i[2] + "/" + i[3], h = Is(f[2], s), h.length < i[4].length && (h = Mt(i[4].substr(i[4].length - h.length)) + h), n += h, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Ns(c, Math.pow(10, s) - 1, true), u + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? hf(f[1], s) + i[2] + "/" + i[3] + Is(f[2], s) : Fr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : Mt(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var v = r.indexOf(".") - s, d = r.length - n.length - v;
    return Mt(r.substr(0, v) + n + r.substr(r.length - d));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + wa(e, r, -t) : Na("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(w) {
    return "00," + (w.length < 3 ? la(0, 3 - w.length) : "") + w;
  }) + "." + la(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x = Na("" + c);
      return x !== "0" ? u + x : "";
    default:
      if (r.match(/\.[0#?]*$/)) return wa(e, r.slice(0, r.lastIndexOf(".")), t) + Mt(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function Pa(e, r, t) {
  return (t | 0) === t ? wa(e, r, t) : ea(e, r, t);
}
function Lh(e) {
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
var Uc = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ia(e) {
  for (var r = 0, t = "", a = ""; r < e.length; ) switch (t = e.charAt(r)) {
    case "G":
      Os(e, r) && (r += 6), r++;
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
      if (a.match(Uc)) return true;
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
function Mh(e, r, t, a) {
  for (var n = [], i = "", s = 0, f = "", c = "t", u, h, v, d = "H"; s < e.length; ) switch (f = e.charAt(s)) {
    case "G":
      if (!Os(e, s)) throw new Error("unrecognized character " + f + " in " + e);
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
        if (u == null && (u = Oa(r, t, e.charAt(s + 1) === "2"), u == null)) return "";
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
      if (r < 0 || u == null && (u = Oa(r, t), u == null)) return "";
      for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
      f === "m" && c.toLowerCase() === "h" && (f = "M"), f === "h" && (f = d), n[n.length] = { t: f, v: i }, c = f;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: f, v: f };
      if (u == null && (u = Oa(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (u != null && (y.v = u.H >= 12 ? e.charAt(s + 2) : f), y.t = "T", d = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (u != null && (y.v = u.H >= 12 ? "PM" : "AM"), y.t = "T", s += 5, d = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (u != null && (y.v = u.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", s += 5, d = "h") : (y.t = "t", ++s), u == null && y.t === "T") return "";
      n[n.length] = y, c = f;
      break;
    case "[":
      for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
      if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
      if (i.match(Uc)) {
        if (u == null && (u = Oa(r, t), u == null)) return "";
        n[n.length] = { t: "Z", v: i.toLowerCase() }, c = i.charAt(1);
      } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", ia(e) || (n[n.length] = { t: "t", v: i }));
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
  var _ = 0, g = 0, F;
  for (s = n.length - 1, c = "t"; s >= 0; --s) switch (n[s].t) {
    case "h":
    case "H":
      n[s].t = d, c = "h", _ < 1 && (_ = 1);
      break;
    case "s":
      (F = n[s].v.match(/\.0+$/)) && (g = Math.max(g, F[0].length - 1), _ = 4), _ < 3 && (_ = 3);
    case "d":
    case "y":
    case "e":
      c = n[s].t;
      break;
    case "M":
      c = n[s].t, _ < 2 && (_ = 2);
      break;
    case "m":
      c === "s" && (n[s].t = "M", _ < 2 && (_ = 2));
      break;
    case "X":
      break;
    case "Z":
      _ < 1 && n[s].v.match(/[Hh]/) && (_ = 1), _ < 2 && n[s].v.match(/[Mm]/) && (_ = 2), _ < 3 && n[s].v.match(/[Ss]/) && (_ = 3);
  }
  var E;
  switch (_) {
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      u.u >= 0.5 && (u.u = 0, ++u.S), u.S >= 60 && (u.S = 0, ++u.M), u.M >= 60 && (u.M = 0, ++u.H), u.H >= 24 && (u.H = 0, ++u.D, E = Oa(u.D), E.u = u.u, E.S = u.S, E.M = u.M, E.H = u.H, u = E);
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
      u.u >= 1 && (u.u = 0, ++u.S), u.S >= 60 && (u.S = 0, ++u.M), u.M >= 60 && (u.M = 0, ++u.H), u.H >= 24 && (u.H = 0, ++u.D, E = Oa(u.D), E.u = u.u, E.S = u.S, E.M = u.M, E.H = u.H, u = E);
      break;
  }
  var I = "", V;
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
      n[s].v = Ah(n[s].t.charCodeAt(0), n[s].v, u, g), n[s].t = "t";
      break;
    case "n":
    case "?":
      for (V = s + 1; n[V] != null && ((f = n[V].t) === "?" || f === "D" || (f === " " || f === "t") && n[V + 1] != null && (n[V + 1].t === "?" || n[V + 1].t === "t" && n[V + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[V].v === "/" || n[V].v === " " && n[V + 1] != null && n[V + 1].t == "?")); ) n[s].v += n[V].v, n[V] = { v: "", t: ";" }, ++V;
      I += n[s].v, s = V - 1;
      break;
    case "G":
      n[s].t = "t", n[s].v = gn(r, t);
      break;
  }
  var K = "", A, H;
  if (I.length > 0) {
    I.charCodeAt(0) == 40 ? (A = r < 0 && I.charCodeAt(0) === 45 ? -r : r, H = Pa("n", I, A)) : (A = r < 0 && a > 1 ? -r : r, H = Pa("n", I, A), A < 0 && n[0] && n[0].t == "t" && (H = H.substr(1), n[0].v = "-" + n[0].v)), V = H.length - 1;
    var W = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      W = s;
      break;
    }
    var Z = n.length;
    if (W === n.length && H.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s) n[s] == null || "n?".indexOf(n[s].t) === -1 || (V >= n[s].v.length - 1 ? (V -= n[s].v.length, n[s].v = H.substr(V + 1, n[s].v.length)) : V < 0 ? n[s].v = "" : (n[s].v = H.substr(0, V + 1), V = -1), n[s].t = "t", Z = s);
      V >= 0 && Z < n.length && (n[Z].v = H.substr(0, V + 1) + n[Z].v);
    } else if (W !== n.length && H.indexOf("E") === -1) {
      for (V = H.indexOf(".") - 1, s = W; s >= 0; --s) if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
        for (h = n[s].v.indexOf(".") > -1 && s === W ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, K = n[s].v.substr(h + 1); h >= 0; --h) V >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#") && (K = H.charAt(V--) + K);
        n[s].v = K, n[s].t = "t", Z = s;
      }
      for (V >= 0 && Z < n.length && (n[Z].v = H.substr(0, V + 1) + n[Z].v), V = H.indexOf(".") + 1, s = W; s < n.length; ++s) if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== W)) {
        for (h = n[s].v.indexOf(".") > -1 && s === W ? n[s].v.indexOf(".") + 1 : 0, K = n[s].v.substr(0, h); h < n[s].v.length; ++h) V < H.length && (K += H.charAt(V++));
        n[s].v = K, n[s].t = "t", Z = s;
      }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (A = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = Pa(n[s].t, n[s].v, A), n[s].t = "t");
  var j = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (j += n[s].v);
  return j;
}
var bo = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Ao(e, r) {
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
function Uh(e, r) {
  var t = Lh(e), a = t.length, n = t[a - 1].indexOf("@");
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
    var s = t[0].match(bo), f = t[1].match(bo);
    return Ao(r, s) ? [a, t[0]] : Ao(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function Yt(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : nr)[e], a == null && (a = t.table && t.table[To[e]] || nr[To[e]]), a == null && (a = kh[e] || "General");
      break;
  }
  if (Os(a, 0)) return gn(r, t);
  r instanceof Date && (r = Zr(r, t.date1904));
  var n = Uh(a, r);
  if (Os(n[1])) return gn(r, t);
  if (r === true) r = "TRUE";
  else if (r === false) r = "FALSE";
  else {
    if (r === "" || r == null) return "";
    if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return Mh(n[1], r, t, n[0]);
}
function Wc(e, r) {
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
function Vs(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Wc(e[r], r);
}
function Yn() {
  nr = yh();
}
var Wh = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, Rs = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function Hh(e) {
  var r = typeof e == "number" ? nr[e] : e;
  return r = r.replace(Rs, "(\\d+)"), Rs.lastIndex = 0, new RegExp("^" + r + "$");
}
function Vh(e, r, t) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, c = -1;
  (r.match(Rs) || []).forEach(function(v, d) {
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
  }), Rs.lastIndex = 0, c >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var u = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  u.length == 7 && (u = "0" + u), u.length == 8 && (u = "20" + u);
  var h = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
  return s == -1 && f == -1 && c == -1 ? u : a == -1 && n == -1 && i == -1 ? h : u + "T" + h;
}
var Xh = { "d.m": "d\\.m" };
function Ya(e, r) {
  return Wc(Xh[e] || e, r);
}
var Co = (function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var A = 0, H = new Array(256), W = 0; W != 256; ++W) A = W, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, H[W] = A;
    return typeof Int32Array < "u" ? new Int32Array(H) : H;
  }
  var t = r();
  function a(A) {
    var H = 0, W = 0, Z = 0, j = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (Z = 0; Z != 256; ++Z) j[Z] = A[Z];
    for (Z = 0; Z != 256; ++Z) for (W = A[Z], H = 256 + Z; H < 4096; H += 256) W = j[H] = W >>> 8 ^ A[W & 255];
    var ne = [];
    for (Z = 1; Z != 16; ++Z) ne[Z - 1] = typeof Int32Array < "u" && typeof j.subarray == "function" ? j.subarray(Z * 256, Z * 256 + 256) : j.slice(Z * 256, Z * 256 + 256);
    return ne;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], c = n[3], u = n[4], h = n[5], v = n[6], d = n[7], x = n[8], w = n[9], y = n[10], _ = n[11], g = n[12], F = n[13], E = n[14];
  function I(A, H) {
    for (var W = H ^ -1, Z = 0, j = A.length; Z < j; ) W = W >>> 8 ^ t[(W ^ A.charCodeAt(Z++)) & 255];
    return ~W;
  }
  function V(A, H) {
    for (var W = H ^ -1, Z = A.length - 15, j = 0; j < Z; ) W = E[A[j++] ^ W & 255] ^ F[A[j++] ^ W >> 8 & 255] ^ g[A[j++] ^ W >> 16 & 255] ^ _[A[j++] ^ W >>> 24] ^ y[A[j++]] ^ w[A[j++]] ^ x[A[j++]] ^ d[A[j++]] ^ v[A[j++]] ^ h[A[j++]] ^ u[A[j++]] ^ c[A[j++]] ^ f[A[j++]] ^ s[A[j++]] ^ i[A[j++]] ^ t[A[j++]];
    for (Z += 15; j < Z; ) W = W >>> 8 ^ t[(W ^ A[j++]) & 255];
    return ~W;
  }
  function K(A, H) {
    for (var W = H ^ -1, Z = 0, j = A.length, ne = 0, de = 0; Z < j; ) ne = A.charCodeAt(Z++), ne < 128 ? W = W >>> 8 ^ t[(W ^ ne) & 255] : ne < 2048 ? (W = W >>> 8 ^ t[(W ^ (192 | ne >> 6 & 31)) & 255], W = W >>> 8 ^ t[(W ^ (128 | ne & 63)) & 255]) : ne >= 55296 && ne < 57344 ? (ne = (ne & 1023) + 64, de = A.charCodeAt(Z++) & 1023, W = W >>> 8 ^ t[(W ^ (240 | ne >> 8 & 7)) & 255], W = W >>> 8 ^ t[(W ^ (128 | ne >> 2 & 63)) & 255], W = W >>> 8 ^ t[(W ^ (128 | de >> 6 & 15 | (ne & 3) << 4)) & 255], W = W >>> 8 ^ t[(W ^ (128 | de & 63)) & 255]) : (W = W >>> 8 ^ t[(W ^ (224 | ne >> 12 & 15)) & 255], W = W >>> 8 ^ t[(W ^ (128 | ne >> 6 & 63)) & 255], W = W >>> 8 ^ t[(W ^ (128 | ne & 63)) & 255]);
    return ~W;
  }
  return e.table = t, e.bstr = I, e.buf = V, e.str = K, e;
})(), ir = (function() {
  var r = {};
  r.version = "1.2.2";
  function t(S, B) {
    for (var C = S.split("/"), D = B.split("/"), P = 0, M = 0, fe = Math.min(C.length, D.length); P < fe; ++P) {
      if (M = C[P].length - D[P].length) return M;
      if (C[P] != D[P]) return C[P] < D[P] ? -1 : 1;
    }
    return C.length - D.length;
  }
  function a(S) {
    if (S.charAt(S.length - 1) == "/") return S.slice(0, -1).indexOf("/") === -1 ? S : a(S.slice(0, -1));
    var B = S.lastIndexOf("/");
    return B === -1 ? S : S.slice(0, B + 1);
  }
  function n(S) {
    if (S.charAt(S.length - 1) == "/") return n(S.slice(0, -1));
    var B = S.lastIndexOf("/");
    return B === -1 ? S : S.slice(B + 1);
  }
  function i(S, B) {
    typeof B == "string" && (B = new Date(B));
    var C = B.getHours();
    C = C << 6 | B.getMinutes(), C = C << 5 | B.getSeconds() >>> 1, S.write_shift(2, C);
    var D = B.getFullYear() - 1980;
    D = D << 4 | B.getMonth() + 1, D = D << 5 | B.getDate(), S.write_shift(2, D);
  }
  function s(S) {
    var B = S.read_shift(2) & 65535, C = S.read_shift(2) & 65535, D = /* @__PURE__ */ new Date(), P = C & 31;
    C >>>= 5;
    var M = C & 15;
    C >>>= 4, D.setMilliseconds(0), D.setFullYear(C + 1980), D.setMonth(M - 1), D.setDate(P);
    var fe = B & 31;
    B >>>= 5;
    var xe = B & 63;
    return B >>>= 6, D.setHours(B), D.setMinutes(xe), D.setSeconds(fe << 1), D;
  }
  function f(S) {
    lt(S, 0);
    for (var B = {}, C = 0; S.l <= S.length - 4; ) {
      var D = S.read_shift(2), P = S.read_shift(2), M = S.l + P, fe = {};
      switch (D) {
        case 21589:
          C = S.read_shift(1), C & 1 && (fe.mtime = S.read_shift(4)), P > 5 && (C & 2 && (fe.atime = S.read_shift(4)), C & 4 && (fe.ctime = S.read_shift(4))), fe.mtime && (fe.mt = new Date(fe.mtime * 1e3));
          break;
        case 1:
          {
            var xe = S.read_shift(4), te = S.read_shift(4);
            fe.usz = te * Math.pow(2, 32) + xe, xe = S.read_shift(4), te = S.read_shift(4), fe.csz = te * Math.pow(2, 32) + xe;
          }
          break;
      }
      S.l = M, B[D] = fe;
    }
    return B;
  }
  var c;
  function u() {
    return c || (c = Kh);
  }
  function h(S, B) {
    if (S[0] == 80 && S[1] == 75) return He(S, B);
    if ((S[0] | 32) == 109 && (S[1] | 32) == 105) return Ka(S, B);
    if (S.length < 512) throw new Error("CFB file size " + S.length + " < 512");
    var C = 3, D = 512, P = 0, M = 0, fe = 0, xe = 0, te = 0, ce = [], ie = S.slice(0, 512);
    lt(ie, 0);
    var Te = v(ie);
    switch (C = Te[0], C) {
      case 3:
        D = 512;
        break;
      case 4:
        D = 4096;
        break;
      case 0:
        if (Te[1] == 0) return He(S, B);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + C);
    }
    D !== 512 && (ie = S.slice(0, D), lt(ie, 28));
    var Pe = S.slice(0, D);
    d(ie, C);
    var De = ie.read_shift(4, "i");
    if (C === 3 && De !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + De);
    ie.l += 4, fe = ie.read_shift(4, "i"), ie.l += 4, ie.chk("00100000", "Mini Stream Cutoff Size: "), xe = ie.read_shift(4, "i"), P = ie.read_shift(4, "i"), te = ie.read_shift(4, "i"), M = ie.read_shift(4, "i");
    for (var we = -1, be = 0; be < 109 && (we = ie.read_shift(4, "i"), !(we < 0)); ++be) ce[be] = we;
    var cr = x(S, D);
    _(te, M, cr, D, ce);
    var Or = F(cr, fe, ce, D);
    fe < Or.length && (Or[fe].name = "!Directory"), P > 0 && xe !== de && (Or[xe].name = "!MiniFAT"), Or[ce[0]].name = "!FAT", Or.fat_addrs = ce, Or.ssz = D;
    var Wr = {}, ft = [], Ca = [], Kt = [];
    E(fe, Or, cr, ft, P, Wr, Ca, xe), w(Ca, Kt, ft), ft.shift();
    var ja = { FileIndex: Ca, FullPaths: Kt };
    return B && B.raw && (ja.raw = { header: Pe, sectors: cr }), ja;
  }
  function v(S) {
    if (S[S.l] == 80 && S[S.l + 1] == 75) return [0, 0];
    S.chk(We, "Header Signature: "), S.l += 16;
    var B = S.read_shift(2, "u");
    return [S.read_shift(2, "u"), B];
  }
  function d(S, B) {
    var C = 9;
    switch (S.l += 2, C = S.read_shift(2)) {
      case 9:
        if (B != 3) throw new Error("Sector Shift: Expected 9 saw " + C);
        break;
      case 12:
        if (B != 4) throw new Error("Sector Shift: Expected 12 saw " + C);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + C);
    }
    S.chk("0600", "Mini Sector Shift: "), S.chk("000000000000", "Reserved: ");
  }
  function x(S, B) {
    for (var C = Math.ceil(S.length / B) - 1, D = [], P = 1; P < C; ++P) D[P - 1] = S.slice(P * B, (P + 1) * B);
    return D[C - 1] = S.slice(C * B), D;
  }
  function w(S, B, C) {
    for (var D = 0, P = 0, M = 0, fe = 0, xe = 0, te = C.length, ce = [], ie = []; D < te; ++D) ce[D] = ie[D] = D, B[D] = C[D];
    for (; xe < ie.length; ++xe) D = ie[xe], P = S[D].L, M = S[D].R, fe = S[D].C, ce[D] === D && (P !== -1 && ce[P] !== P && (ce[D] = ce[P]), M !== -1 && ce[M] !== M && (ce[D] = ce[M])), fe !== -1 && (ce[fe] = D), P !== -1 && D != ce[D] && (ce[P] = ce[D], ie.lastIndexOf(P) < xe && ie.push(P)), M !== -1 && D != ce[D] && (ce[M] = ce[D], ie.lastIndexOf(M) < xe && ie.push(M));
    for (D = 1; D < te; ++D) ce[D] === D && (M !== -1 && ce[M] !== M ? ce[D] = ce[M] : P !== -1 && ce[P] !== P && (ce[D] = ce[P]));
    for (D = 1; D < te; ++D) if (S[D].type !== 0) {
      if (xe = D, xe != ce[xe]) do
        xe = ce[xe], B[D] = B[xe] + "/" + B[D];
      while (xe !== 0 && ce[xe] !== -1 && xe != ce[xe]);
      ce[D] = -1;
    }
    for (B[0] += "/", D = 1; D < te; ++D) S[D].type !== 2 && (B[D] += "/");
  }
  function y(S, B, C) {
    for (var D = S.start, P = S.size, M = [], fe = D; C && P > 0 && fe >= 0; ) M.push(B.slice(fe * ne, fe * ne + ne)), P -= ne, fe = ln(C, fe * 4);
    return M.length === 0 ? oe(0) : at(M).slice(0, S.size);
  }
  function _(S, B, C, D, P) {
    var M = de;
    if (S === de) {
      if (B !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (S !== -1) {
      var fe = C[S], xe = (D >>> 2) - 1;
      if (!fe) return;
      for (var te = 0; te < xe && (M = ln(fe, te * 4)) !== de; ++te) P.push(M);
      B >= 1 && _(ln(fe, D - 4), B - 1, C, D, P);
    }
  }
  function g(S, B, C, D, P) {
    var M = [], fe = [];
    P || (P = []);
    var xe = D - 1, te = 0, ce = 0;
    for (te = B; te >= 0; ) {
      P[te] = true, M[M.length] = te, fe.push(S[te]);
      var ie = C[Math.floor(te * 4 / D)];
      if (ce = te * 4 & xe, D < 4 + ce) throw new Error("FAT boundary crossed: " + te + " 4 " + D);
      if (!S[ie]) break;
      te = ln(S[ie], ce);
    }
    return { nodes: M, data: Wo([fe]) };
  }
  function F(S, B, C, D) {
    var P = S.length, M = [], fe = [], xe = [], te = [], ce = D - 1, ie = 0, Te = 0, Pe = 0, De = 0;
    for (ie = 0; ie < P; ++ie) if (xe = [], Pe = ie + B, Pe >= P && (Pe -= P), !fe[Pe]) {
      te = [];
      var we = [];
      for (Te = Pe; Te >= 0; ) {
        we[Te] = true, fe[Te] = true, xe[xe.length] = Te, te.push(S[Te]);
        var be = C[Math.floor(Te * 4 / D)];
        if (De = Te * 4 & ce, D < 4 + De) throw new Error("FAT boundary crossed: " + Te + " 4 " + D);
        if (!S[be] || (Te = ln(S[be], De), we[Te])) break;
      }
      M[Pe] = { nodes: xe, data: Wo([te]) };
    }
    return M;
  }
  function E(S, B, C, D, P, M, fe, xe) {
    for (var te = 0, ce = D.length ? 2 : 0, ie = B[S].data, Te = 0, Pe = 0, De; Te < ie.length; Te += 128) {
      var we = ie.slice(Te, Te + 128);
      lt(we, 64), Pe = we.read_shift(2), De = wf(we, 0, Pe - ce), D.push(De);
      var be = { name: De, type: we.read_shift(1), color: we.read_shift(1), L: we.read_shift(4, "i"), R: we.read_shift(4, "i"), C: we.read_shift(4, "i"), clsid: we.read_shift(16), state: we.read_shift(4, "i"), start: 0, size: 0 }, cr = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      cr !== 0 && (be.ct = I(we, we.l - 8));
      var Or = we.read_shift(2) + we.read_shift(2) + we.read_shift(2) + we.read_shift(2);
      Or !== 0 && (be.mt = I(we, we.l - 8)), be.start = we.read_shift(4, "i"), be.size = we.read_shift(4, "i"), be.size < 0 && be.start < 0 && (be.size = be.type = 0, be.start = de, be.name = ""), be.type === 5 ? (te = be.start, P > 0 && te !== de && (B[te].name = "!StreamData")) : be.size >= 4096 ? (be.storage = "fat", B[be.start] === void 0 && (B[be.start] = g(C, be.start, B.fat_addrs, B.ssz)), B[be.start].name = be.name, be.content = B[be.start].data.slice(0, be.size)) : (be.storage = "minifat", be.size < 0 ? be.size = 0 : te !== de && be.start !== de && B[te] && (be.content = y(be, B[te].data, (B[xe] || {}).data))), be.content && lt(be.content, 0), M[De] = be, fe.push(be);
    }
  }
  function I(S, B) {
    return new Date((zt(S, B + 4) / 1e7 * Math.pow(2, 32) + zt(S, B) / 1e7 - 11644473600) * 1e3);
  }
  function V(S, B) {
    return u(), h(c.readFileSync(S), B);
  }
  function K(S, B) {
    var C = B && B.type;
    switch (C || pr && Buffer.isBuffer(S) && (C = "buffer"), C || "base64") {
      case "file":
        return V(S, B);
      case "base64":
        return h(Ut(qt(S)), B);
      case "binary":
        return h(Ut(S), B);
    }
    return h(S, B);
  }
  function A(S, B) {
    var C = B || {}, D = C.root || "Root Entry";
    if (S.FullPaths || (S.FullPaths = []), S.FileIndex || (S.FileIndex = []), S.FullPaths.length !== S.FileIndex.length) throw new Error("inconsistent CFB structure");
    S.FullPaths.length === 0 && (S.FullPaths[0] = D + "/", S.FileIndex[0] = { name: D, type: 5 }), C.CLSID && (S.FileIndex[0].clsid = C.CLSID), H(S);
  }
  function H(S) {
    var B = "Sh33tJ5";
    if (!ir.find(S, "/" + B)) {
      var C = oe(4);
      C[0] = 55, C[1] = C[3] = 50, C[2] = 54, S.FileIndex.push({ name: B, type: 2, content: C, size: 4, L: 69, R: 69, C: 69 }), S.FullPaths.push(S.FullPaths[0] + B), W(S);
    }
  }
  function W(S, B) {
    A(S);
    for (var C = false, D = false, P = S.FullPaths.length - 1; P >= 0; --P) {
      var M = S.FileIndex[P];
      switch (M.type) {
        case 0:
          D ? C = true : (S.FileIndex.pop(), S.FullPaths.pop());
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
    if (!(!C && !B)) {
      var fe = new Date(1987, 1, 19), xe = 0, te = Object.create ? /* @__PURE__ */ Object.create(null) : {}, ce = [];
      for (P = 0; P < S.FullPaths.length; ++P) te[S.FullPaths[P]] = true, S.FileIndex[P].type !== 0 && ce.push([S.FullPaths[P], S.FileIndex[P]]);
      for (P = 0; P < ce.length; ++P) {
        var ie = a(ce[P][0]);
        for (D = te[ie]; !D; ) {
          for (; a(ie) && !te[a(ie)]; ) ie = a(ie);
          ce.push([ie, { name: n(ie).replace("/", ""), type: 1, clsid: ze, ct: fe, mt: fe, content: null }]), te[ie] = true, ie = a(ce[P][0]), D = te[ie];
        }
      }
      for (ce.sort(function(De, we) {
        return t(De[0], we[0]);
      }), S.FullPaths = [], S.FileIndex = [], P = 0; P < ce.length; ++P) S.FullPaths[P] = ce[P][0], S.FileIndex[P] = ce[P][1];
      for (P = 0; P < ce.length; ++P) {
        var Te = S.FileIndex[P], Pe = S.FullPaths[P];
        if (Te.name = n(Pe).replace("/", ""), Te.L = Te.R = Te.C = -(Te.color = 1), Te.size = Te.content ? Te.content.length : 0, Te.start = 0, Te.clsid = Te.clsid || ze, P === 0) Te.C = ce.length > 1 ? 1 : -1, Te.size = 0, Te.type = 5;
        else if (Pe.slice(-1) == "/") {
          for (xe = P + 1; xe < ce.length && a(S.FullPaths[xe]) != Pe; ++xe) ;
          for (Te.C = xe >= ce.length ? -1 : xe, xe = P + 1; xe < ce.length && a(S.FullPaths[xe]) != a(Pe); ++xe) ;
          Te.R = xe >= ce.length ? -1 : xe, Te.type = 1;
        } else a(S.FullPaths[P + 1] || "") == a(Pe) && (Te.R = P + 1), Te.type = 2;
      }
    }
  }
  function Z(S, B) {
    var C = B || {};
    if (C.fileType == "mad") return ri(S, C);
    if (W(S), C.fileType === "zip") return Zi(S, C);
    var D = (function(De) {
      for (var we = 0, be = 0, cr = 0; cr < De.FileIndex.length; ++cr) {
        var Or = De.FileIndex[cr];
        if (Or.content) {
          var Wr = Or.content.length;
          Wr > 0 && (Wr < 4096 ? we += Wr + 63 >> 6 : be += Wr + 511 >> 9);
        }
      }
      for (var ft = De.FullPaths.length + 3 >> 2, Ca = we + 7 >> 3, Kt = we + 127 >> 7, ja = Ca + be + ft + Kt, Zt = ja + 127 >> 7, On = Zt <= 109 ? 0 : Math.ceil((Zt - 109) / 127); ja + Zt + On + 127 >> 7 > Zt; ) On = ++Zt <= 109 ? 0 : Math.ceil((Zt - 109) / 127);
      var ur = [1, On, Zt, Kt, ft, be, we, 0];
      return De.FileIndex[0].size = we << 6, ur[7] = (De.FileIndex[0].start = ur[0] + ur[1] + ur[2] + ur[3] + ur[4] + ur[5]) + (ur[6] + 7 >> 3), ur;
    })(S), P = oe(D[7] << 9), M = 0, fe = 0;
    {
      for (M = 0; M < 8; ++M) P.write_shift(1, me[M]);
      for (M = 0; M < 8; ++M) P.write_shift(2, 0);
      for (P.write_shift(2, 62), P.write_shift(2, 3), P.write_shift(2, 65534), P.write_shift(2, 9), P.write_shift(2, 6), M = 0; M < 3; ++M) P.write_shift(2, 0);
      for (P.write_shift(4, 0), P.write_shift(4, D[2]), P.write_shift(4, D[0] + D[1] + D[2] + D[3] - 1), P.write_shift(4, 0), P.write_shift(4, 4096), P.write_shift(4, D[3] ? D[0] + D[1] + D[2] - 1 : de), P.write_shift(4, D[3]), P.write_shift(-4, D[1] ? D[0] - 1 : de), P.write_shift(4, D[1]), M = 0; M < 109; ++M) P.write_shift(-4, M < D[2] ? D[1] + M : -1);
    }
    if (D[1]) for (fe = 0; fe < D[1]; ++fe) {
      for (; M < 236 + fe * 127; ++M) P.write_shift(-4, M < D[2] ? D[1] + M : -1);
      P.write_shift(-4, fe === D[1] - 1 ? de : fe + 1);
    }
    var xe = function(De) {
      for (fe += De; M < fe - 1; ++M) P.write_shift(-4, M + 1);
      De && (++M, P.write_shift(-4, de));
    };
    for (fe = M = 0, fe += D[1]; M < fe; ++M) P.write_shift(-4, ke.DIFSECT);
    for (fe += D[2]; M < fe; ++M) P.write_shift(-4, ke.FATSECT);
    xe(D[3]), xe(D[4]);
    for (var te = 0, ce = 0, ie = S.FileIndex[0]; te < S.FileIndex.length; ++te) ie = S.FileIndex[te], ie.content && (ce = ie.content.length, !(ce < 4096) && (ie.start = fe, xe(ce + 511 >> 9)));
    for (xe(D[6] + 7 >> 3); P.l & 511; ) P.write_shift(-4, ke.ENDOFCHAIN);
    for (fe = M = 0, te = 0; te < S.FileIndex.length; ++te) ie = S.FileIndex[te], ie.content && (ce = ie.content.length, !(!ce || ce >= 4096) && (ie.start = fe, xe(ce + 63 >> 6)));
    for (; P.l & 511; ) P.write_shift(-4, ke.ENDOFCHAIN);
    for (M = 0; M < D[4] << 2; ++M) {
      var Te = S.FullPaths[M];
      if (!Te || Te.length === 0) {
        for (te = 0; te < 17; ++te) P.write_shift(4, 0);
        for (te = 0; te < 3; ++te) P.write_shift(4, -1);
        for (te = 0; te < 12; ++te) P.write_shift(4, 0);
        continue;
      }
      ie = S.FileIndex[M], M === 0 && (ie.start = ie.size ? ie.start - 1 : de);
      var Pe = M === 0 && C.root || ie.name;
      if (Pe.length > 31 && (console.error("Name " + Pe + " will be truncated to " + Pe.slice(0, 31)), Pe = Pe.slice(0, 31)), ce = 2 * (Pe.length + 1), P.write_shift(64, Pe, "utf16le"), P.write_shift(2, ce), P.write_shift(1, ie.type), P.write_shift(1, ie.color), P.write_shift(-4, ie.L), P.write_shift(-4, ie.R), P.write_shift(-4, ie.C), ie.clsid) P.write_shift(16, ie.clsid, "hex");
      else for (te = 0; te < 4; ++te) P.write_shift(4, 0);
      P.write_shift(4, ie.state || 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, ie.start), P.write_shift(4, ie.size), P.write_shift(4, 0);
    }
    for (M = 1; M < S.FileIndex.length; ++M) if (ie = S.FileIndex[M], ie.size >= 4096) if (P.l = ie.start + 1 << 9, pr && Buffer.isBuffer(ie.content)) ie.content.copy(P, P.l, 0, ie.size), P.l += ie.size + 511 & -512;
    else {
      for (te = 0; te < ie.size; ++te) P.write_shift(1, ie.content[te]);
      for (; te & 511; ++te) P.write_shift(1, 0);
    }
    for (M = 1; M < S.FileIndex.length; ++M) if (ie = S.FileIndex[M], ie.size > 0 && ie.size < 4096) if (pr && Buffer.isBuffer(ie.content)) ie.content.copy(P, P.l, 0, ie.size), P.l += ie.size + 63 & -64;
    else {
      for (te = 0; te < ie.size; ++te) P.write_shift(1, ie.content[te]);
      for (; te & 63; ++te) P.write_shift(1, 0);
    }
    if (pr) P.l = P.length;
    else for (; P.l < P.length; ) P.write_shift(1, 0);
    return P;
  }
  function j(S, B) {
    var C = S.FullPaths.map(function(te) {
      return te.toUpperCase();
    }), D = C.map(function(te) {
      var ce = te.split("/");
      return ce[ce.length - (te.slice(-1) == "/" ? 2 : 1)];
    }), P = false;
    B.charCodeAt(0) === 47 ? (P = true, B = C[0].slice(0, -1) + B) : P = B.indexOf("/") !== -1;
    var M = B.toUpperCase(), fe = P === true ? C.indexOf(M) : D.indexOf(M);
    if (fe !== -1) return S.FileIndex[fe];
    var xe = !M.match(di);
    for (M = M.replace(Xt, ""), xe && (M = M.replace(di, "!")), fe = 0; fe < C.length; ++fe) if ((xe ? C[fe].replace(di, "!") : C[fe]).replace(Xt, "") == M || (xe ? D[fe].replace(di, "!") : D[fe]).replace(Xt, "") == M) return S.FileIndex[fe];
    return null;
  }
  var ne = 64, de = -2, We = "d0cf11e0a1b11ae1", me = [208, 207, 17, 224, 161, 177, 26, 225], ze = "00000000000000000000000000000000", ke = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: de, FREESECT: -1, HEADER_SIGNATURE: We, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: ze, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function Be(S, B, C) {
    u();
    var D = Z(S, C);
    c.writeFileSync(B, D);
  }
  function Qe(S) {
    for (var B = new Array(S.length), C = 0; C < S.length; ++C) B[C] = String.fromCharCode(S[C]);
    return B.join("");
  }
  function he(S, B) {
    var C = Z(S, B);
    switch (B && B.type || "buffer") {
      case "file":
        return u(), c.writeFileSync(B.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : Qe(C);
      case "base64":
        return Ds(typeof C == "string" ? C : Qe(C));
      case "buffer":
        if (pr) return Buffer.isBuffer(C) ? C : Aa(C);
      case "array":
        return typeof C == "string" ? Ut(C) : C;
    }
    return C;
  }
  var sr;
  function Se(S) {
    try {
      var B = S.InflateRaw, C = new B();
      if (C._processChunk(new Uint8Array([3, 0]), C._finishFlushFlag), C.bytesRead) sr = S;
      else throw new Error("zlib does not expose bytesRead");
    } catch (D) {
      console.error("cannot use native zlib: " + (D.message || D));
    }
  }
  function Oe(S, B) {
    if (!sr) return va(S, B);
    var C = sr.InflateRaw, D = new C(), P = D._processChunk(S.slice(S.l), D._finishFlushFlag);
    return S.l += D.bytesRead, P;
  }
  function _e(S) {
    return sr ? sr.deflateRawSync(S) : pt(S);
  }
  var Ke = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], je = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], $e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function R(S) {
    var B = (S << 1 | S << 11) & 139536 | (S << 5 | S << 15) & 558144;
    return (B >> 16 | B >> 8 | B) & 255;
  }
  for (var ee = typeof Uint8Array < "u", L = ee ? new Uint8Array(256) : [], U = 0; U < 256; ++U) L[U] = R(U);
  function ue(S, B) {
    var C = L[S & 255];
    return B <= 8 ? C >>> 8 - B : (C = C << 8 | L[S >> 8 & 255], B <= 16 ? C >>> 16 - B : (C = C << 8 | L[S >> 16 & 255], C >>> 24 - B));
  }
  function O(S, B) {
    var C = B & 7, D = B >>> 3;
    return (S[D] | (C <= 6 ? 0 : S[D + 1] << 8)) >>> C & 3;
  }
  function Ce(S, B) {
    var C = B & 7, D = B >>> 3;
    return (S[D] | (C <= 5 ? 0 : S[D + 1] << 8)) >>> C & 7;
  }
  function Ue(S, B) {
    var C = B & 7, D = B >>> 3;
    return (S[D] | (C <= 4 ? 0 : S[D + 1] << 8)) >>> C & 15;
  }
  function Fe(S, B) {
    var C = B & 7, D = B >>> 3;
    return (S[D] | (C <= 3 ? 0 : S[D + 1] << 8)) >>> C & 31;
  }
  function ar(S, B) {
    var C = B & 7, D = B >>> 3;
    return (S[D] | (C <= 1 ? 0 : S[D + 1] << 8)) >>> C & 127;
  }
  function rr(S, B, C) {
    var D = B & 7, P = B >>> 3, M = (1 << C) - 1, fe = S[P] >>> D;
    return C < 8 - D || (fe |= S[P + 1] << 8 - D, C < 16 - D) || (fe |= S[P + 2] << 16 - D, C < 24 - D) || (fe |= S[P + 3] << 24 - D), fe & M;
  }
  function or(S, B, C) {
    var D = B & 7, P = B >>> 3;
    return D <= 5 ? S[P] |= (C & 7) << D : (S[P] |= C << D & 255, S[P + 1] = (C & 7) >> 8 - D), B + 3;
  }
  function br(S, B, C) {
    var D = B & 7, P = B >>> 3;
    return C = (C & 1) << D, S[P] |= C, B + 1;
  }
  function yr(S, B, C) {
    var D = B & 7, P = B >>> 3;
    return C <<= D, S[P] |= C & 255, C >>>= 8, S[P + 1] = C, B + 8;
  }
  function Kr(S, B, C) {
    var D = B & 7, P = B >>> 3;
    return C <<= D, S[P] |= C & 255, C >>>= 8, S[P + 1] = C & 255, S[P + 2] = C >>> 8, B + 16;
  }
  function Ge(S, B) {
    var C = S.length, D = 2 * C > B ? 2 * C : B + 5, P = 0;
    if (C >= B) return S;
    if (pr) {
      var M = yo(D);
      if (S.copy) S.copy(M);
      else for (; P < S.length; ++P) M[P] = S[P];
      return M;
    } else if (ee) {
      var fe = new Uint8Array(D);
      if (fe.set) fe.set(S);
      else for (; P < C; ++P) fe[P] = S[P];
      return fe;
    }
    return S.length = D, S;
  }
  function kr(S) {
    for (var B = new Array(S), C = 0; C < S; ++C) B[C] = 0;
    return B;
  }
  function Re(S, B, C) {
    var D = 1, P = 0, M = 0, fe = 0, xe = 0, te = S.length, ce = ee ? new Uint16Array(32) : kr(32);
    for (M = 0; M < 32; ++M) ce[M] = 0;
    for (M = te; M < C; ++M) S[M] = 0;
    te = S.length;
    var ie = ee ? new Uint16Array(te) : kr(te);
    for (M = 0; M < te; ++M) ce[P = S[M]]++, D < P && (D = P), ie[M] = 0;
    for (ce[0] = 0, M = 1; M <= D; ++M) ce[M + 16] = xe = xe + ce[M - 1] << 1;
    for (M = 0; M < te; ++M) xe = S[M], xe != 0 && (ie[M] = ce[xe + 16]++);
    var Te = 0;
    for (M = 0; M < te; ++M) if (Te = S[M], Te != 0) for (xe = ue(ie[M], D) >> D - Te, fe = (1 << D + 4 - Te) - 1; fe >= 0; --fe) B[xe | fe << Te] = Te & 15 | M << 4;
    return D;
  }
  var Vr = ee ? new Uint16Array(512) : kr(512), qr = ee ? new Uint16Array(32) : kr(32);
  if (!ee) {
    for (var Mr = 0; Mr < 512; ++Mr) Vr[Mr] = 0;
    for (Mr = 0; Mr < 32; ++Mr) qr[Mr] = 0;
  }
  (function() {
    for (var S = [], B = 0; B < 32; B++) S.push(5);
    Re(S, qr, 32);
    var C = [];
    for (B = 0; B <= 143; B++) C.push(8);
    for (; B <= 255; B++) C.push(9);
    for (; B <= 279; B++) C.push(7);
    for (; B <= 287; B++) C.push(8);
    Re(C, Vr, 288);
  })();
  var kt = (function() {
    for (var B = ee ? new Uint8Array(32768) : [], C = 0, D = 0; C < $e.length - 1; ++C) for (; D < $e[C + 1]; ++D) B[D] = C;
    for (; D < 32768; ++D) B[D] = 29;
    var P = ee ? new Uint8Array(259) : [];
    for (C = 0, D = 0; C < je.length - 1; ++C) for (; D < je[C + 1]; ++D) P[D] = C;
    function M(xe, te) {
      for (var ce = 0; ce < xe.length; ) {
        var ie = Math.min(65535, xe.length - ce), Te = ce + ie == xe.length;
        for (te.write_shift(1, +Te), te.write_shift(2, ie), te.write_shift(2, ~ie & 65535); ie-- > 0; ) te[te.l++] = xe[ce++];
      }
      return te.l;
    }
    function fe(xe, te) {
      for (var ce = 0, ie = 0, Te = ee ? new Uint16Array(32768) : []; ie < xe.length; ) {
        var Pe = Math.min(65535, xe.length - ie);
        if (Pe < 10) {
          for (ce = or(te, ce, +(ie + Pe == xe.length)), ce & 7 && (ce += 8 - (ce & 7)), te.l = ce / 8 | 0, te.write_shift(2, Pe), te.write_shift(2, ~Pe & 65535); Pe-- > 0; ) te[te.l++] = xe[ie++];
          ce = te.l * 8;
          continue;
        }
        ce = or(te, ce, +(ie + Pe == xe.length) + 2);
        for (var De = 0; Pe-- > 0; ) {
          var we = xe[ie];
          De = (De << 5 ^ we) & 32767;
          var be = -1, cr = 0;
          if ((be = Te[De]) && (be |= ie & -32768, be > ie && (be -= 32768), be < ie)) for (; xe[be + cr] == xe[ie + cr] && cr < 250; ) ++cr;
          if (cr > 2) {
            we = P[cr], we <= 22 ? ce = yr(te, ce, L[we + 1] >> 1) - 1 : (yr(te, ce, 3), ce += 5, yr(te, ce, L[we - 23] >> 5), ce += 3);
            var Or = we < 8 ? 0 : we - 4 >> 2;
            Or > 0 && (Kr(te, ce, cr - je[we]), ce += Or), we = B[ie - be], ce = yr(te, ce, L[we] >> 3), ce -= 3;
            var Wr = we < 4 ? 0 : we - 2 >> 1;
            Wr > 0 && (Kr(te, ce, ie - be - $e[we]), ce += Wr);
            for (var ft = 0; ft < cr; ++ft) Te[De] = ie & 32767, De = (De << 5 ^ xe[ie]) & 32767, ++ie;
            Pe -= cr - 1;
          } else we <= 143 ? we = we + 48 : ce = br(te, ce, 1), ce = yr(te, ce, L[we]), Te[De] = ie & 32767, ++ie;
        }
        ce = yr(te, ce, 0) - 1;
      }
      return te.l = (ce + 7) / 8 | 0, te.l;
    }
    return function(te, ce) {
      return te.length < 8 ? M(te, ce) : fe(te, ce);
    };
  })();
  function pt(S) {
    var B = oe(50 + Math.floor(S.length * 1.1)), C = kt(S, B);
    return B.slice(0, C);
  }
  var Ve = ee ? new Uint16Array(32768) : kr(32768), _r = ee ? new Uint16Array(32768) : kr(32768), jr = ee ? new Uint16Array(128) : kr(128), zr = 1, vt = 1;
  function Ze(S, B) {
    var C = Fe(S, B) + 257;
    B += 5;
    var D = Fe(S, B) + 1;
    B += 5;
    var P = Ue(S, B) + 4;
    B += 4;
    for (var M = 0, fe = ee ? new Uint8Array(19) : kr(19), xe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], te = 1, ce = ee ? new Uint8Array(8) : kr(8), ie = ee ? new Uint8Array(8) : kr(8), Te = fe.length, Pe = 0; Pe < P; ++Pe) fe[Ke[Pe]] = M = Ce(S, B), te < M && (te = M), ce[M]++, B += 3;
    var De = 0;
    for (ce[0] = 0, Pe = 1; Pe <= te; ++Pe) ie[Pe] = De = De + ce[Pe - 1] << 1;
    for (Pe = 0; Pe < Te; ++Pe) (De = fe[Pe]) != 0 && (xe[Pe] = ie[De]++);
    var we = 0;
    for (Pe = 0; Pe < Te; ++Pe) if (we = fe[Pe], we != 0) {
      De = L[xe[Pe]] >> 8 - we;
      for (var be = (1 << 7 - we) - 1; be >= 0; --be) jr[De | be << we] = we & 7 | Pe << 3;
    }
    var cr = [];
    for (te = 1; cr.length < C + D; ) switch (De = jr[ar(S, B)], B += De & 7, De >>>= 3) {
      case 16:
        for (M = 3 + O(S, B), B += 2, De = cr[cr.length - 1]; M-- > 0; ) cr.push(De);
        break;
      case 17:
        for (M = 3 + Ce(S, B), B += 3; M-- > 0; ) cr.push(0);
        break;
      case 18:
        for (M = 11 + ar(S, B), B += 7; M-- > 0; ) cr.push(0);
        break;
      default:
        cr.push(De), te < De && (te = De);
        break;
    }
    var Or = cr.slice(0, C), Wr = cr.slice(C);
    for (Pe = C; Pe < 286; ++Pe) Or[Pe] = 0;
    for (Pe = D; Pe < 30; ++Pe) Wr[Pe] = 0;
    return zr = Re(Or, Ve, 286), vt = Re(Wr, _r, 30), B;
  }
  function pa(S, B) {
    if (S[0] == 3 && !(S[1] & 3)) return [Za(B), 2];
    for (var C = 0, D = 0, P = yo(B || 1 << 18), M = 0, fe = P.length >>> 0, xe = 0, te = 0; (D & 1) == 0; ) {
      if (D = Ce(S, C), C += 3, D >>> 1) D >> 1 == 1 ? (xe = 9, te = 5) : (C = Ze(S, C), xe = zr, te = vt);
      else {
        C & 7 && (C += 8 - (C & 7));
        var ce = S[C >>> 3] | S[(C >>> 3) + 1] << 8;
        if (C += 32, ce > 0) for (!B && fe < M + ce && (P = Ge(P, M + ce), fe = P.length); ce-- > 0; ) P[M++] = S[C >>> 3], C += 8;
        continue;
      }
      for (; ; ) {
        !B && fe < M + 32767 && (P = Ge(P, M + 32767), fe = P.length);
        var ie = rr(S, C, xe), Te = D >>> 1 == 1 ? Vr[ie] : Ve[ie];
        if (C += Te & 15, Te >>>= 4, (Te >>> 8 & 255) === 0) P[M++] = Te;
        else {
          if (Te == 256) break;
          Te -= 257;
          var Pe = Te < 8 ? 0 : Te - 4 >> 2;
          Pe > 5 && (Pe = 0);
          var De = M + je[Te];
          Pe > 0 && (De += rr(S, C, Pe), C += Pe), ie = rr(S, C, te), Te = D >>> 1 == 1 ? qr[ie] : _r[ie], C += Te & 15, Te >>>= 4;
          var we = Te < 4 ? 0 : Te - 2 >> 1, be = $e[Te];
          for (we > 0 && (be += rr(S, C, we), C += we), !B && fe < De && (P = Ge(P, De + 100), fe = P.length); M < De; ) P[M] = P[M - be], ++M;
        }
      }
    }
    return B ? [P, C + 7 >>> 3] : [P.slice(0, M), C + 7 >>> 3];
  }
  function va(S, B) {
    var C = S.slice(S.l || 0), D = pa(C, B);
    return S.l += D[1], D[0];
  }
  function nn(S, B) {
    if (S) typeof console < "u" && console.error(B);
    else throw new Error(B);
  }
  function He(S, B) {
    var C = S;
    lt(C, 0);
    var D = [], P = [], M = { FileIndex: D, FullPaths: P };
    A(M, { root: B.root });
    for (var fe = C.length - 4; (C[fe] != 80 || C[fe + 1] != 75 || C[fe + 2] != 5 || C[fe + 3] != 6) && fe >= 0; ) --fe;
    C.l = fe + 4, C.l += 4;
    var xe = C.read_shift(2);
    C.l += 6;
    var te = C.read_shift(4);
    for (C.l = te, fe = 0; fe < xe; ++fe) {
      C.l += 20;
      var ce = C.read_shift(4), ie = C.read_shift(4), Te = C.read_shift(2), Pe = C.read_shift(2), De = C.read_shift(2);
      C.l += 8;
      var we = C.read_shift(4), be = f(C.slice(C.l + Te, C.l + Te + Pe));
      C.l += Te + Pe + De;
      var cr = C.l;
      C.l = we + 4, be && be[1] && ((be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz)), Qn(C, ce, ie, M, be), C.l = cr;
    }
    return M;
  }
  function Qn(S, B, C, D, P) {
    S.l += 2;
    var M = S.read_shift(2), fe = S.read_shift(2), xe = s(S);
    if (M & 8257) throw new Error("Unsupported ZIP encryption");
    for (var te = S.read_shift(4), ce = S.read_shift(4), ie = S.read_shift(4), Te = S.read_shift(2), Pe = S.read_shift(2), De = "", we = 0; we < Te; ++we) De += String.fromCharCode(S[S.l++]);
    if (Pe) {
      var be = f(S.slice(S.l, S.l + Pe));
      (be[21589] || {}).mt && (xe = be[21589].mt), (be[1] || {}).usz && (ie = be[1].usz), (be[1] || {}).csz && (ce = be[1].csz), P && ((P[21589] || {}).mt && (xe = P[21589].mt), (P[1] || {}).usz && (ie = P[1].usz), (P[1] || {}).csz && (ce = P[1].csz));
    }
    S.l += Pe;
    var cr = S.slice(S.l, S.l + ce);
    switch (fe) {
      case 8:
        cr = Oe(S, ie);
        break;
      case 0:
        S.l += ce;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + fe);
    }
    var Or = false;
    M & 8 && (te = S.read_shift(4), te == 134695760 && (te = S.read_shift(4), Or = true), ce = S.read_shift(4), ie = S.read_shift(4)), ce != B && nn(Or, "Bad compressed size: " + B + " != " + ce), ie != C && nn(Or, "Bad uncompressed size: " + C + " != " + ie), Ur(D, De, cr, { unsafe: true, mt: xe });
  }
  function Zi(S, B) {
    var C = B || {}, D = [], P = [], M = oe(1), fe = C.compression ? 8 : 0, xe = 0, te = 0, ce = 0, ie = 0, Te = 0, Pe = S.FullPaths[0], De = Pe, we = S.FileIndex[0], be = [], cr = 0;
    for (te = 1; te < S.FullPaths.length; ++te) if (De = S.FullPaths[te].slice(Pe.length), we = S.FileIndex[te], !(!we.size || !we.content || Array.isArray(we.content) && we.content.length == 0 || De == "Sh33tJ5")) {
      var Or = ie, Wr = oe(De.length);
      for (ce = 0; ce < De.length; ++ce) Wr.write_shift(1, De.charCodeAt(ce) & 127);
      Wr = Wr.slice(0, Wr.l), be[Te] = typeof we.content == "string" ? Co.bstr(we.content, 0) : Co.buf(we.content, 0);
      var ft = typeof we.content == "string" ? Ut(we.content) : we.content;
      fe == 8 && (ft = _e(ft)), M = oe(30), M.write_shift(4, 67324752), M.write_shift(2, 20), M.write_shift(2, xe), M.write_shift(2, fe), we.mt ? i(M, we.mt) : M.write_shift(4, 0), M.write_shift(-4, be[Te]), M.write_shift(4, ft.length), M.write_shift(4, we.content.length), M.write_shift(2, Wr.length), M.write_shift(2, 0), ie += M.length, D.push(M), ie += Wr.length, D.push(Wr), ie += ft.length, D.push(ft), M = oe(46), M.write_shift(4, 33639248), M.write_shift(2, 0), M.write_shift(2, 20), M.write_shift(2, xe), M.write_shift(2, fe), M.write_shift(4, 0), M.write_shift(-4, be[Te]), M.write_shift(4, ft.length), M.write_shift(4, we.content.length), M.write_shift(2, Wr.length), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(4, 0), M.write_shift(4, Or), cr += M.l, P.push(M), cr += Wr.length, P.push(Wr), ++Te;
    }
    return M = oe(22), M.write_shift(4, 101010256), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(2, Te), M.write_shift(2, Te), M.write_shift(4, cr), M.write_shift(4, ie), M.write_shift(2, 0), at([at(D), at(P), M]);
  }
  var Va = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function Ji(S, B) {
    if (S.ctype) return S.ctype;
    var C = S.name || "", D = C.match(/\.([^\.]+)$/);
    return D && Va[D[1]] || B && (D = (C = B).match(/[\.\\]([^\.\\])+$/), D && Va[D[1]]) ? Va[D[1]] : "application/octet-stream";
  }
  function ei(S) {
    for (var B = Ds(S), C = [], D = 0; D < B.length; D += 76) C.push(B.slice(D, D + 76));
    return C.join(`\r
`) + `\r
`;
  }
  function r0(S) {
    var B = S.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(ce) {
      var ie = ce.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (ie.length == 1 ? "0" + ie : ie);
    });
    B = B.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), B.charAt(0) == `
` && (B = "=0D" + B.slice(1)), B = B.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var C = [], D = B.split(`\r
`), P = 0; P < D.length; ++P) {
      var M = D[P];
      if (M.length == 0) {
        C.push("");
        continue;
      }
      for (var fe = 0; fe < M.length; ) {
        var xe = 76, te = M.slice(fe, fe + xe);
        te.charAt(xe - 1) == "=" ? xe-- : te.charAt(xe - 2) == "=" ? xe -= 2 : te.charAt(xe - 3) == "=" && (xe -= 3), te = M.slice(fe, fe + xe), fe += xe, fe < M.length && (te += "="), C.push(te);
      }
    }
    return C.join(`\r
`);
  }
  function t0(S) {
    for (var B = [], C = 0; C < S.length; ++C) {
      for (var D = S[C]; C <= S.length && D.charAt(D.length - 1) == "="; ) D = D.slice(0, D.length - 1) + S[++C];
      B.push(D);
    }
    for (var P = 0; P < B.length; ++P) B[P] = B[P].replace(/[=][0-9A-Fa-f]{2}/g, function(M) {
      return String.fromCharCode(parseInt(M.slice(1), 16));
    });
    return Ut(B.join(`\r
`));
  }
  function Xa(S, B, C) {
    for (var D = "", P = "", M = "", fe, xe = 0; xe < 10; ++xe) {
      var te = B[xe];
      if (!te || te.match(/^\s*$/)) break;
      var ce = te.match(/^([^:]*?):\s*([^\s].*)$/);
      if (ce) switch (ce[1].toLowerCase()) {
        case "content-location":
          D = ce[2].trim();
          break;
        case "content-type":
          M = ce[2].trim();
          break;
        case "content-transfer-encoding":
          P = ce[2].trim();
          break;
      }
    }
    switch (++xe, P.toLowerCase()) {
      case "base64":
        fe = Ut(qt(B.slice(xe).join("")));
        break;
      case "quoted-printable":
        fe = t0(B.slice(xe));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + P);
    }
    var ie = Ur(S, D.slice(C.length), fe, { unsafe: true });
    M && (ie.ctype = M);
  }
  function Ka(S, B) {
    if (Qe(S.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var C = B && B.root || "", D = (pr && Buffer.isBuffer(S) ? S.toString("binary") : Qe(S)).split(`\r
`), P = 0, M = "";
    for (P = 0; P < D.length; ++P) if (M = D[P], !!/^Content-Location:/i.test(M) && (M = M.slice(M.indexOf("file")), C || (C = M.slice(0, M.lastIndexOf("/") + 1)), M.slice(0, C.length) != C)) for (; C.length > 0 && (C = C.slice(0, C.length - 1), C = C.slice(0, C.lastIndexOf("/") + 1), M.slice(0, C.length) != C); ) ;
    var fe = (D[1] || "").match(/boundary="(.*?)"/);
    if (!fe) throw new Error("MAD cannot find boundary");
    var xe = "--" + (fe[1] || ""), te = [], ce = [], ie = { FileIndex: te, FullPaths: ce };
    A(ie);
    var Te, Pe = 0;
    for (P = 0; P < D.length; ++P) {
      var De = D[P];
      De !== xe && De !== xe + "--" || (Pe++ && Xa(ie, D.slice(Te, P), C), Te = P);
    }
    return ie;
  }
  function ri(S, B) {
    var C = B || {}, D = C.boundary || "SheetJS";
    D = "------=" + D;
    for (var P = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + D.slice(2) + '"', "", "", ""], M = S.FullPaths[0], fe = M, xe = S.FileIndex[0], te = 1; te < S.FullPaths.length; ++te) if (fe = S.FullPaths[te].slice(M.length), xe = S.FileIndex[te], !(!xe.size || !xe.content || fe == "Sh33tJ5")) {
      fe = fe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(cr) {
        return "_x" + cr.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(cr) {
        return "_u" + cr.charCodeAt(0).toString(16) + "_";
      });
      for (var ce = xe.content, ie = pr && Buffer.isBuffer(ce) ? ce.toString("binary") : Qe(ce), Te = 0, Pe = Math.min(1024, ie.length), De = 0, we = 0; we <= Pe; ++we) (De = ie.charCodeAt(we)) >= 32 && De < 128 && ++Te;
      var be = Te >= Pe * 4 / 5;
      P.push(D), P.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + fe), P.push("Content-Transfer-Encoding: " + (be ? "quoted-printable" : "base64")), P.push("Content-Type: " + Ji(xe, fe)), P.push(""), P.push(be ? r0(ie) : ei(ie));
    }
    return P.push(D + `--\r
`), P.join(`\r
`);
  }
  function Dn(S) {
    var B = {};
    return A(B, S), B;
  }
  function Ur(S, B, C, D) {
    var P = D && D.unsafe;
    P || A(S);
    var M = !P && ir.find(S, B);
    if (!M) {
      var fe = S.FullPaths[0];
      B.slice(0, fe.length) == fe ? fe = B : (fe.slice(-1) != "/" && (fe += "/"), fe = (fe + B).replace("//", "/")), M = { name: n(B), type: 2 }, S.FileIndex.push(M), S.FullPaths.push(fe), P || ir.utils.cfb_gc(S);
    }
    return M.content = C, M.size = C ? C.length : 0, D && (D.CLSID && (M.clsid = D.CLSID), D.mt && (M.mt = D.mt), D.ct && (M.ct = D.ct)), M;
  }
  function st(S, B) {
    A(S);
    var C = ir.find(S, B);
    if (C) {
      for (var D = 0; D < S.FileIndex.length; ++D) if (S.FileIndex[D] == C) return S.FileIndex.splice(D, 1), S.FullPaths.splice(D, 1), true;
    }
    return false;
  }
  function a0(S, B, C) {
    A(S);
    var D = ir.find(S, B);
    if (D) {
      for (var P = 0; P < S.FileIndex.length; ++P) if (S.FileIndex[P] == D) return S.FileIndex[P].name = n(C), S.FullPaths[P] = C, true;
    }
    return false;
  }
  function In(S) {
    W(S, true);
  }
  return r.find = j, r.read = K, r.parse = h, r.write = he, r.writeFile = Be, r.utils = { cfb_new: Dn, cfb_add: Ur, cfb_del: st, cfb_mov: a0, cfb_gc: In, ReadShift: pi, CheckField: uu, prep_blob: lt, bconcat: at, use_zlib: Se, _deflateRaw: pt, _inflateRaw: va, consts: ke }, r;
})(), Kh;
function Do(e) {
  return typeof e == "string" ? Hs(e) : Array.isArray(e) ? mh(e) : e;
}
function Vi(e, r, t) {
  if (typeof Deno < "u") {
    if (t && typeof r == "string") switch (t) {
      case "utf8":
        r = new TextEncoder(t).encode(r);
        break;
      case "binary":
        r = Hs(r);
        break;
      default:
        throw new Error("Unsupported encoding " + t);
    }
    return Deno.writeFileSync(e, r);
  }
  var a = t == "utf8" ? Fa(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([Do(a)], { type: "application/octet-stream" });
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
      var f = "data:application/octet-stream;base64," + vh(new Uint8Array(Do(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: true });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var c = File(e);
    return c.open("w"), c.encoding = "binary", Array.isArray(r) && (r = ba(r)), c.write(r), c.close(), r;
  } catch (u) {
    if (!u.message || u.message.indexOf("onstruct") == -1) throw u;
  }
  throw new Error("cannot save file " + e);
}
function jh(e) {
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
function Io(e, r) {
  for (var t = [], a = Gr(e), n = 0; n !== a.length; ++n) t[e[a[n]][r]] == null && (t[e[a[n]][r]] = a[n]);
  return t;
}
function Xs(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
  return r;
}
function Ks(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
  return r;
}
function Gh(e) {
  for (var r = [], t = Gr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Hc = Date.UTC(1899, 11, 30, 0, 0, 0), zh = Date.UTC(1899, 11, 31, 0, 0, 0), $h = Date.UTC(1904, 0, 1, 0, 0, 0);
function Zr(e, r) {
  var t = e.getTime(), a = (t - Hc) / (1440 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Ba(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Hc), r;
}
function qh(e) {
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
var Yh = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, Zh = /^(\d+)-(\d+)-(\d+)$/, Vc = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function $r(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(Yh);
  if (t) return new Date((r ? $h : zh) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(Zh), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(Vc), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function _n(e, r) {
  if (pr && Buffer.isBuffer(e)) {
    if (r && Si) {
      if (e[0] == 255 && e[1] == 254) return Fa(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Fa(Ic(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Fa(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Fa(new TextDecoder("utf-16be").decode(e.slice(2)));
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
function Fr(e, r) {
  for (var t = ""; t.length < r; ) t += e;
  return t;
}
function $t(e) {
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
var Jh = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, Qh = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, e1 = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, r1 = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function t1(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function a1(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var n1 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function bi(e) {
  if (e1.test(e)) return e.indexOf("Z") == -1 ? js(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(Jh);
  if (a) return t1(a);
  if (a = t.match(Qh), a) return a1(a);
  if (a = t.match(Vc), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(r1 && e.indexOf("UTC") == -1 ? e + " UTC" : e), i = /* @__PURE__ */ new Date(NaN), s = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) return i;
  if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), r.length > 3 && n1.indexOf(r) == -1) return i;
  } else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return i;
  return s < 0 || s > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? i : n;
}
var i1 = (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(t, a, n) {
    if (e || typeof a == "string") return t.split(a);
    for (var i = t.split(a), s = [i[0]], f = 1; f < i.length; ++f) s.push(n), s.push(i[f]);
    return s;
  };
})();
function wn(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function js(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function xf(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function pf(e, r, t) {
  for (var a = [], n = e.indexOf(r); n > -1; ) {
    var i = e.indexOf(t, n + r.length);
    if (i == -1) break;
    a.push(e.slice(n, i + t.length)), n = e.indexOf(r, i + t.length);
  }
  return a.length > 0 ? a : null;
}
function Xi(e, r, t) {
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
var s1 = { " ": 1, "	": 1, "\r": 1, "\n": 1, ">": 1 };
function hn(e, r) {
  for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !s1[e.charAt(t + a)]; ) t = e.indexOf("<" + r, t + 1);
  if (t === -1) return null;
  var i = e.indexOf(">", t + r.length);
  if (i === -1) return null;
  var s = "</" + r + ">", f = e.indexOf(s, i);
  return f == -1 ? null : [e.slice(t, f + s.length), e.slice(i + 1, f)];
}
var _t = /* @__PURE__ */ (function() {
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
})(), Xc = /* @__PURE__ */ (function() {
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
})(), f1 = /* @__PURE__ */ (function() {
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
})(), o1 = /* @__PURE__ */ (function() {
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
function Kc(e) {
  return e ? e.content && e.type ? _n(e.content, true) : e.data ? hi(e.data) : e.asNodeBuffer && pr ? hi(e.asNodeBuffer().toString("binary")) : e.asBinary ? hi(e.asBinary()) : e._data && e._data.getContent ? hi(_n(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function jc(e) {
  if (!e) return null;
  if (e.data) return _o(e.data);
  if (e.asNodeBuffer && pr) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? _o(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function c1(e) {
  return e && e.name.slice(-4) === ".bin" ? jc(e) : Kc(e);
}
function ra(e, r) {
  for (var t = e.FullPaths || Gr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function vf(e, r) {
  var t = ra(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function ct(e, r, t) {
  if (!t) return c1(vf(e, r));
  if (!r) return null;
  try {
    return ct(e, r);
  } catch {
    return null;
  }
}
function Wt(e, r, t) {
  if (!t) return Kc(vf(e, r));
  if (!r) return null;
  try {
    return Wt(e, r);
  } catch {
    return null;
  }
}
function u1(e, r, t) {
  return jc(vf(e, r));
}
function Oo(e) {
  for (var r = e.FullPaths || Gr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function lr(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return pr ? a = Aa(t) : a = gh(t), ir.utils.cfb_add(e, r, a);
    }
    ir.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function mf() {
  return ir.utils.cfb_new();
}
function Gc(e, r) {
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
function Wn(e, r) {
  if (e.charAt(0) == "/") return e.slice(1);
  var t = r.split("/");
  r.slice(-1) != "/" && t.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? t.pop() : n !== "." && t.push(n);
  }
  return t.join("/");
}
var it = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, zc = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, No = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, l1 = /<[^<>]*>/g, Tt = it.match(No) ? No : l1, h1 = /<\w*:/, d1 = /<(\/?)\w+:/;
function Ye(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(zc), f = 0, c = "", u = 0, h = "", v = "", d = 1;
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
function x1(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (n === e.length) return a;
  var s = e.match(zc), f = "", c = 0, u = "", h = "", v = 1;
  if (s) for (c = 0; c != s.length; ++c) {
    for (h = s[c].slice(1), i = 0; i != h.length && h.charCodeAt(i) !== 61; ++i) ;
    for (u = h.slice(0, i).trim(); h.charCodeAt(i + 1) == 32; ) ++i;
    v = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = h.slice(i + 1 + v, h.length - v), u.indexOf("_") > 0 && (u = u.slice(0, u.indexOf("_"))), a[u] = f, a[u.toLowerCase()] = f;
  }
  return a;
}
function sa(e) {
  return e.replace(d1, "<$1");
}
var $c = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, gf = Xs($c), Sr = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, c) {
      return $c[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f;
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
})(), _f = /[&<>'"]/g, p1 = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function xr(e) {
  var r = e + "";
  return r.replace(_f, function(t) {
    return gf[t];
  }).replace(p1, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function Ro(e) {
  return xr(e).replace(/ /g, "_x0020_");
}
var qc = /[\u0000-\u001f]/g;
function xi(e) {
  var r = e + "";
  return r.replace(_f, function(t) {
    return gf[t];
  }).replace(/\n/g, "<br/>").replace(qc, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function v1(e) {
  var r = e + "";
  return r.replace(_f, function(t) {
    return gf[t];
  }).replace(qc, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var Po = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function r(t, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, r);
  };
})();
function m1(e) {
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
function D0(e) {
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
function Bo(e) {
  var r = Za(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n) n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function Lo(e) {
  return Aa(e, "binary").toString("utf8");
}
var ps = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Pr = pr && (Lo(ps) == D0(ps) && Lo || Bo(ps) == D0(ps) && Bo) || D0, Fa = pr ? function(e) {
  return Aa(e, "utf8").toString("binary");
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
}, Yc = (function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
})(), g1 = /<\/?(?:vt:)?variant>/g, _1 = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function Mo(e, r) {
  var t = Ye(e), a = Xc(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(g1, "").match(_1);
    s && n.push({ v: Pr(s[2]), t: s[1] });
  }), n;
}
var Zc = /(^\s|\s$|\n)/;
function Et(e, r) {
  return "<" + e + (r.match(Zc) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function Ai(e) {
  return Gr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function Ae(e, r, t) {
  return "<" + e + (t != null ? Ai(t) : "") + (r != null ? (r.match(Zc) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function q0(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (t) {
    if (r) throw t;
  }
  return "";
}
function w1(e, r) {
  switch (typeof e) {
    case "string":
      var t = Ae("vt:lpwstr", xr(e));
      return t = t.replace(/&quot;/g, "_x0022_"), t;
    case "number":
      return Ae((e | 0) == e ? "vt:i4" : "vt:r8", xr(String(e)));
    case "boolean":
      return Ae("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return Ae("vt:filetime", q0(e));
  throw new Error("Unable to serialize " + e);
}
function Gs(e) {
  if (pr && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Pr(ba(lf(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ut = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, ht = { CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", CT: "http://schemas.openxmlformats.org/package/2006/content-types", RELS: "http://schemas.openxmlformats.org/package/2006/relationships", TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes", xsi: "http://www.w3.org/2001/XMLSchema-instance", xsd: "http://www.w3.org/2001/XMLSchema" }, Tn = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"], Gt = { o: "urn:schemas-microsoft-com:office:office", x: "urn:schemas-microsoft-com:office:excel", ss: "urn:schemas-microsoft-com:office:spreadsheet", dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", mv: "http://macVmlSchemaUri", v: "urn:schemas-microsoft-com:vml", html: "http://www.w3.org/TR/REC-html40" };
function y1(e, r) {
  for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15), n = e[r + 6] & 15, i = 5; i >= 0; --i) n = n * 256 + e[r + i];
  return a == 2047 ? n == 0 ? t * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
}
function k1(e, r, t) {
  var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -r : r;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(r) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
  e[t + 6] = (n & 15) << 4 | i & 15, e[t + 7] = n >> 4 | a;
}
var Uo = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, Wo = pr ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Aa(r);
  })) : Uo(e);
} : Uo, Ho = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Ra(e, n)));
  return a.join("").replace(Xt, "");
}, wf = pr ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !Si ? Ho(e, r, t) : e.toString("utf16le", r, t).replace(Xt, "");
} : Ho, Vo = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Jc = pr ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Vo(e, r, t);
} : Vo, Xo = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(Un(e, n)));
  return a.join("");
}, Ki = pr ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Xo(r, t, a);
} : Xo, Qc = function(e, r) {
  var t = zt(e, r);
  return t > 0 ? Ki(e, r + 4, r + 4 + t - 1) : "";
}, eu = Qc, ru = function(e, r) {
  var t = zt(e, r);
  return t > 0 ? Ki(e, r + 4, r + 4 + t - 1) : "";
}, tu = ru, au = function(e, r) {
  var t = 2 * zt(e, r);
  return t > 0 ? Ki(e, r + 4, r + 4 + t - 1) : "";
}, nu = au, iu = function(r, t) {
  var a = zt(r, t);
  return a > 0 ? wf(r, t + 4, t + 4 + a) : "";
}, su = iu, fu = function(e, r) {
  var t = zt(e, r);
  return t > 0 ? Ki(e, r + 4, r + 4 + t) : "";
}, ou = fu, cu = function(e, r) {
  return y1(e, r);
}, Ps = cu, yf = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
pr && (eu = function(r, t) {
  if (!Buffer.isBuffer(r)) return Qc(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, tu = function(r, t) {
  if (!Buffer.isBuffer(r)) return ru(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, nu = function(r, t) {
  if (!Buffer.isBuffer(r) || !Si) return au(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, su = function(r, t) {
  if (!Buffer.isBuffer(r) || !Si) return iu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, ou = function(r, t) {
  if (!Buffer.isBuffer(r)) return fu(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, Ps = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : cu(r, t);
}, yf = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
var Un = function(e, r) {
  return e[r];
}, Ra = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, E1 = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, zt = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, ln = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, T1 = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function pi(e, r) {
  var t = "", a, n, i = [], s, f, c, u;
  switch (r) {
    case "dbcs":
      if (u = this.l, pr && Buffer.isBuffer(this) && Si) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (c = 0; c < e; ++c) t += String.fromCharCode(Ra(this, u)), u += 2;
      e *= 2;
      break;
    case "utf8":
      t = Ki(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = wf(this, this.l, this.l + e);
      break;
    case "wstr":
      return pi.call(this, e, "dbcs");
    case "lpstr-ansi":
      t = eu(this, this.l), e = 4 + zt(this, this.l);
      break;
    case "lpstr-cp":
      t = tu(this, this.l), e = 4 + zt(this, this.l);
      break;
    case "lpwstr":
      t = nu(this, this.l), e = 4 + 2 * zt(this, this.l);
      break;
    case "lpp4":
      e = 4 + zt(this, this.l), t = su(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + zt(this, this.l), t = ou(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = Un(this, this.l + e++)) !== 0; ) i.push(xs(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Ra(this, this.l + e)) !== 0; ) i.push(xs(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", u = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = Un(this, u), this.l = u + 1, f = pi.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(xs(Ra(this, u))), u += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", u = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(u) !== -1) return s = Un(this, u), this.l = u + 1, f = pi.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(xs(Un(this, u))), u += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Un(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? E1 : Ra)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? ln : T1)(this, this.l), this.l += 4, a) : (n = zt(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f") return e == 8 ? n = Ps(this, this.l) : n = Ps([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Jc(this, this.l, e);
          break;
      }
  }
  return this.l += e, t;
}
var S1 = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, F1 = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, b1 = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255;
};
function A1(e, r, t) {
  var a = 0, n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) b1(this, r.charCodeAt(n), this.l + 2 * n);
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
      a = 4, S1(this, r, this.l);
      break;
    case 8:
      if (a = 8, t === "f") {
        k1(this, r, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      a = 4, F1(this, r, this.l);
      break;
  }
  return this.l += a, this;
}
function uu(e, r) {
  var t = Jc(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function lt(e, r) {
  e.l = r, e.read_shift = pi, e.chk = uu, e.write_shift = A1;
}
function Bt(e, r) {
  e.l += r;
}
function oe(e) {
  var r = Za(e);
  return lt(r, 0), r;
}
function Ha(e, r, t) {
  if (e) {
    var a, n, i;
    lt(e, e.l || 0);
    for (var s = e.length, f = 0, c = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var u = Li[f] || Li[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      c = e.l + i;
      var h = u.f && u.f(e, i, t);
      if (e.l = c, r(h, u, f)) return;
    }
  }
}
function Rt() {
  var e = [], r = pr ? 16384 : 2048;
  pr && oe(r).copy;
  var t = function(h) {
    var v = oe(h);
    return lt(v, 0), v;
  }, a = t(r), n = function() {
    a && (a.l && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a)), a = null);
  }, i = function(h) {
    return a && h < a.length - a.l ? a : (n(), a = t(Math.max(h + 1, r)));
  }, s = function() {
    return n(), at(e);
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
    a || (a = Li[n].p || (t || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f) if (a >= 128) s.write_shift(1, (a & 127) + 128), a >>= 7;
    else {
      s.write_shift(1, a);
      break;
    }
    a > 0 && yf(t) && e.push(t);
  }
}
function vi(e, r, t) {
  var a = Hr(e);
  if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
    for (; a.c >= 256; ) a.c -= 256;
    for (; a.r >= 65536; ) a.r -= 65536;
  }
  return a;
}
function Ko(e, r, t) {
  var a = Hr(e);
  return a.s = vi(a.s, r.s, t), a.e = vi(a.e, r.s, t), a;
}
function mi(e, r) {
  if (e.cRel && e.c < 0) for (e = Hr(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = Hr(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = gr(e);
  return !e.cRel && e.cRel != null && (t = I1(t)), !e.rRel && e.rRel != null && (t = C1(t)), t;
}
function I0(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + vr(e.s.c) + ":" + (e.e.cRel ? "" : "$") + vr(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Tr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Tr(e.e.r) : mi(e.s, r.biff) + ":" + mi(e.e, r.biff);
}
function kf(e) {
  return parseInt(D1(e), 10) - 1;
}
function Tr(e) {
  return "" + (e + 1);
}
function C1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function D1(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Ef(e) {
  for (var r = O1(e), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
  return t - 1;
}
function vr(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
  return r;
}
function I1(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function O1(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function N1(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Br(e) {
  for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function gr(e) {
  for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
  return t + (e.r + 1);
}
function yt(e) {
  var r = e.indexOf(":");
  return r == -1 ? { s: Br(e), e: Br(e) } : { s: Br(e.slice(0, r)), e: Br(e.slice(r + 1)) };
}
function dr(e, r) {
  return typeof r > "u" || typeof r == "number" ? dr(e.s, e.e) : (typeof e != "string" && (e = gr(e)), typeof r != "string" && (r = gr(r)), e == r ? e : e + ":" + r);
}
function Ci(e) {
  var r = yt(e);
  return "$" + vr(r.s.c) + "$" + Tr(r.s.r) + ":$" + vr(r.e.c) + "$" + Tr(r.e.r);
}
function Di(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
}
function Cr(e) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, t = 0, a = 0, n = 0, i = e.length;
  for (t = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
  for (r.s.c = --t, t = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
  if (r.s.r = --t, a === i || n != 10) return r.e.c = r.s.c, r.e.r = r.s.r, r;
  for (++a, t = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
  for (r.e.c = --t, t = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
  return r.e.r = --t, r;
}
function jo(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = Yt(e.z, t ? Zr(r) : r);
  } catch {
  }
  try {
    return e.w = Yt((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Zr(r) : r);
  } catch {
    return "" + r;
  }
}
function Ua(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? xt[e.v] || e.v : r == null ? jo(e, e.v) : jo(e, r));
}
function tn(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function R1(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function lu(e, r, t) {
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
    var h = Cr(i["!ref"]);
    u.s.c = h.s.c, u.s.r = h.s.r, u.e.c = Math.max(u.e.c, h.e.c), u.e.r = Math.max(u.e.r, h.e.r), s == -1 && (u.e.r = s = i["!ref"] ? h.e.r + 1 : 0);
  } else u.s.c = u.e.c = u.s.r = u.e.r = 0;
  for (var v = [], d = false, x = 0; x != r.length; ++x) if (r[x]) {
    if (!Array.isArray(r[x])) throw new Error("aoa_to_sheet expects an array of arrays");
    var w = s + x;
    n && (i["!data"][w] || (i["!data"][w] = []), v = i["!data"][w]);
    for (var y = r[x], _ = 0; _ != y.length; ++_) if (!(typeof y[_] > "u")) {
      var g = { v: y[_], t: "" }, F = f + _;
      if (u.s.r > w && (u.s.r = w), u.s.c > F && (u.s.c = F), u.e.r < w && (u.e.r = w), u.e.c < F && (u.e.c = F), d = true, y[_] && typeof y[_] == "object" && !Array.isArray(y[_]) && !(y[_] instanceof Date)) g = y[_];
      else if (Array.isArray(g.v) && (g.f = y[_][1], g.v = g.v[0]), g.v === null) if (g.f) g.t = "n";
      else if (a.nullError) g.t = "e", g.v = 0;
      else if (a.sheetStubs) g.t = "z";
      else continue;
      else typeof g.v == "number" ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || nr[14], a.UTC || (g.v = js(g.v)), a.cellDates ? (g.t = "d", g.w = Yt(g.z, Zr(g.v, a.date1904))) : (g.t = "n", g.v = Zr(g.v, a.date1904), g.w = Yt(g.z, g.v))) : g.t = "s";
      if (n) v[F] && v[F].z && (g.z = v[F].z), v[F] = g;
      else {
        var E = vr(F) + (w + 1);
        i[E] && i[E].z && (g.z = i[E].z), i[E] = g;
      }
    }
  }
  return d && u.s.c < 104e5 && (i["!ref"] = dr(u)), i;
}
function Zn(e, r) {
  return lu(null, e, r);
}
function P1(e) {
  return e.read_shift(4, "i");
}
function ha(e, r) {
  return r || (r = oe(4)), r.write_shift(4, e), r;
}
function Pt(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function dt(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(4 + 2 * e.length)), r.write_shift(4, e.length), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
function B1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function L1(e, r) {
  return r || (r = oe(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Tf(e, r) {
  var t = e.l, a = e.read_shift(1), n = Pt(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), c = 0; c != f; ++c) i.push(B1(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function M1(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(15 + 4 * e.t.length)), r.write_shift(1, 0), dt(e.t, r), t ? r.slice(0, r.l) : r;
}
var U1 = Tf;
function W1(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(23 + 4 * e.t.length)), r.write_shift(1, 1), dt(e.t, r), r.write_shift(4, 1), L1({}, r), t ? r.slice(0, r.l) : r;
}
function fa(e) {
  var r = e.read_shift(4), t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: r, iStyleRef: t };
}
function Sn(e, r) {
  return r == null && (r = oe(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
function Fn(e) {
  var r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: r };
}
function bn(e, r) {
  return r == null && (r = oe(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
var H1 = Pt, hu = dt;
function zs(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function Ii(e, r) {
  var t = false;
  return r == null && (t = true, r = oe(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var V1 = Pt, Y0 = zs, Sf = Ii;
function $s(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? Ps([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : ln(r, 0) >> 2;
  return t ? n / 100 : n;
}
function du(e, r) {
  r == null && (r = oe(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function xu(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function X1(e, r) {
  return r || (r = oe(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var An = xu, Jn = X1;
function Ot(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function yn(e, r) {
  return (r || oe(8)).write_shift(8, e, "f");
}
function K1(e) {
  var r = {}, t = e.read_shift(1), a = t >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), c = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var u = dn[n];
      u && (r.rgb = Ni(u));
      break;
    case 2:
      r.rgb = Ni([s, f, c]);
      break;
    case 3:
      r.theme = n;
      break;
  }
  return i != 0 && (r.tint = i > 0 ? i / 32767 : i / 32768), r;
}
function Bs(e, r) {
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
function j1(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = { fBold: r & 1, fItalic: r & 2, fUnderline: r & 4, fStrikeout: r & 8, fOutline: r & 16, fShadow: r & 32, fCondense: r & 64, fExtend: r & 128 };
  return t;
}
function G1(e, r) {
  r || (r = oe(2));
  var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
function pu(e, r) {
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
function z1(e) {
  return pu(e, 1);
}
function $1(e) {
  return pu(e, 2);
}
var Ff = 2, Vt = 3, vs = 11, Go = 12, Ls = 19, ms = 64, q1 = 65, Y1 = 71, Z1 = 4108, J1 = 4126, gt = 80, vu = 81, Q1 = [gt, vu], Z0 = { 1: { n: "CodePage", t: Ff }, 2: { n: "Category", t: gt }, 3: { n: "PresentationFormat", t: gt }, 4: { n: "ByteCount", t: Vt }, 5: { n: "LineCount", t: Vt }, 6: { n: "ParagraphCount", t: Vt }, 7: { n: "SlideCount", t: Vt }, 8: { n: "NoteCount", t: Vt }, 9: { n: "HiddenCount", t: Vt }, 10: { n: "MultimediaClipCount", t: Vt }, 11: { n: "ScaleCrop", t: vs }, 12: { n: "HeadingPairs", t: Z1 }, 13: { n: "TitlesOfParts", t: J1 }, 14: { n: "Manager", t: gt }, 15: { n: "Company", t: gt }, 16: { n: "LinksUpToDate", t: vs }, 17: { n: "CharacterCount", t: Vt }, 19: { n: "SharedDoc", t: vs }, 22: { n: "HyperlinksChanged", t: vs }, 23: { n: "AppVersion", t: Vt, p: "version" }, 24: { n: "DigSig", t: q1 }, 26: { n: "ContentType", t: gt }, 27: { n: "ContentStatus", t: gt }, 28: { n: "Language", t: gt }, 29: { n: "Version", t: gt }, 255: {}, 2147483648: { n: "Locale", t: Ls }, 2147483651: { n: "Behavior", t: Ls }, 1919054434: {} }, J0 = { 1: { n: "CodePage", t: Ff }, 2: { n: "Title", t: gt }, 3: { n: "Subject", t: gt }, 4: { n: "Author", t: gt }, 5: { n: "Keywords", t: gt }, 6: { n: "Comments", t: gt }, 7: { n: "Template", t: gt }, 8: { n: "LastAuthor", t: gt }, 9: { n: "RevNumber", t: gt }, 10: { n: "EditTime", t: ms }, 11: { n: "LastPrinted", t: ms }, 12: { n: "CreatedDate", t: ms }, 13: { n: "ModifiedDate", t: ms }, 14: { n: "PageCount", t: Vt }, 15: { n: "WordCount", t: Vt }, 16: { n: "CharCount", t: Vt }, 17: { n: "Thumbnail", t: Y1 }, 18: { n: "Application", t: gt }, 19: { n: "DocSecurity", t: Vt }, 255: {}, 2147483648: { n: "Locale", t: Ls }, 2147483651: { n: "Behavior", t: Ls }, 1919054434: {} }, zo = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, ed = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function rd(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var td = rd([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 0, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), dn = Hr(td), xt = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, wt = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, bf = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"], Q0 = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" }, gs = { workbooks: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml", xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main", xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml" }, strs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", xlsb: "application/vnd.ms-excel.sharedStrings" }, comments: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", xlsb: "application/vnd.ms-excel.comments" }, sheets: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", xlsb: "application/vnd.ms-excel.worksheet" }, charts: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", xlsb: "application/vnd.ms-excel.chartsheet" }, dialogs: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", xlsb: "application/vnd.ms-excel.dialogsheet" }, macros: { xlsx: "application/vnd.ms-excel.macrosheet+xml", xlsb: "application/vnd.ms-excel.macrosheet" }, metadata: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", xlsb: "application/vnd.ms-excel.sheetMetadata" }, styles: { xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", xlsb: "application/vnd.ms-excel.styles" } };
function Af() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function ad(e) {
  var r = Af();
  if (!e || !e.match) return r;
  var t = {};
  if ((e.match(Tt) || []).forEach(function(a) {
    var n = Ye(a);
    switch (n[0].replace(h1, "<")) {
      case "<?xml":
        break;
      case "<Types":
        r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        t[n.Extension.toLowerCase()] = n.ContentType;
        break;
      case "<Override":
        r[Q0[n.ContentType]] !== void 0 && r[Q0[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== ht.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function mu(e, r, t) {
  var a = Gh(Q0), n = [], i;
  n[n.length] = it, n[n.length] = Ae("Types", null, { xmlns: ht.CT, "xmlns:xsd": ht.xsd, "xmlns:xsi": ht.xsi }), n = n.concat([["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", "application/vnd.openxmlformats-package.relationships+xml"]].map(function(u) {
    return Ae("Default", null, { Extension: u[0], ContentType: u[1] });
  }));
  var s = function(u) {
    e[u] && e[u].length > 0 && (i = e[u][0], n[n.length] = Ae("Override", null, { PartName: (i[0] == "/" ? "" : "/") + i, ContentType: gs[u][r.bookType] || gs[u].xlsx }));
  }, f = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: gs[u][r.bookType] || gs[u].xlsx });
    });
  }, c = function(u) {
    (e[u] || []).forEach(function(h) {
      n[n.length] = Ae("Override", null, { PartName: (h[0] == "/" ? "" : "/") + h, ContentType: a[u][0] });
    });
  };
  return s("workbooks"), f("sheets"), f("charts"), c("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(c), c("vba"), c("comments"), c("threadedcomments"), c("drawings"), f("metadata"), c("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var mr = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
function Oi(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function gi(e, r) {
  var t = { "!id": {} };
  if (!e) return t;
  r.charAt(0) !== "/" && (r = "/" + r);
  var a = {};
  return (e.match(Tt) || []).forEach(function(n) {
    var i = Ye(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = Sr(i.Target), s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : Wn(i.Target, r);
      t[f] = s, a[i.Id] = s;
    }
  }), t["!id"] = a, t;
}
function Vn(e) {
  var r = [it, Ae("Relationships", null, { xmlns: ht.RELS })];
  return Gr(e["!id"]).forEach(function(t) {
    r[r.length] = Ae("Relationship", null, e["!id"][t]);
  }), r.length > 2 && (r[r.length] = "</Relationships>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Nr(e, r, t, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), r < 0) for (r = e["!idx"]; e["!id"]["rId" + r]; ++r) ;
  if (e["!idx"] = r + 1, n.Id = "rId" + r, n.Type = a, n.Target = t, [mr.HLINK, mr.XPATH, mr.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, r;
}
var nd = "application/vnd.oasis.opendocument.spreadsheet";
function id(e, r) {
  for (var t = Gs(e), a, n; a = ut.exec(t); ) switch (a[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (n = Ye(a[0], false), n.path == "/" && n.type !== nd) throw new Error("This OpenDocument is not a spreadsheet");
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
function sd(e) {
  var r = [it];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t) r.push('  <manifest:file-entry manifest:full-path="' + e[t][0] + '" manifest:media-type="' + e[t][1] + `"/>
`);
  return r.push("</manifest:manifest>"), r.join("");
}
function $o(e, r, t) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function fd(e, r) {
  return ['  <rdf:Description rdf:about="' + e + `">
`, '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + `"/>
`, `  </rdf:Description>
`].join("");
}
function od(e) {
  var r = [it];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t) r.push($o(e[t][0], e[t][1])), r.push(fd("", e[t][0]));
  return r.push($o("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function gu(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Cs.version + "</meta:generator></office:meta></office:document-meta>";
}
var La = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
function _u(e) {
  var r = {};
  e = Pr(e);
  for (var t = 0; t < La.length; ++t) {
    var a = La[t], n = hn(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = Sr(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = $r(r[a[1]]));
  }
  return r;
}
function O0(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = xr(r), a[a.length] = t ? Ae(e, r, t) : Et(e, r));
}
function wu(e, r) {
  var t = r || {}, a = [it, Ae("cp:coreProperties", null, { "xmlns:cp": ht.CORE_PROPS, "xmlns:dc": ht.dc, "xmlns:dcterms": ht.dcterms, "xmlns:dcmitype": ht.dcmitype, "xmlns:xsi": ht.xsi })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && O0("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : q0(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && O0("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : q0(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != La.length; ++i) {
    var s = La[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === true ? f = "1" : f === false ? f = "0" : typeof f == "number" && (f = String(f)), f != null && O0(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var xn = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]], yu = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];
function ku(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = Mo(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(h) {
    return { v: h };
  }));
  var s = typeof r == "string" ? Mo(r, a).map(function(h) {
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
function cd(e, r, t) {
  var a = {};
  return r || (r = {}), e = Pr(e), xn.forEach(function(n) {
    var i = (_t(e, n[0]) || [])[1];
    switch (n[2]) {
      case "string":
        i && (r[n[1]] = Sr(i));
        break;
      case "bool":
        r[n[1]] = i === "true";
        break;
      case "raw":
        var s = hn(e, n[0]);
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && ku(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function Eu(e) {
  var r = [], t = Ae;
  return e || (e = {}), e.Application = "SheetJS", r[r.length] = it, r[r.length] = Ae("Properties", null, { xmlns: ht.EXT_PROPS, "xmlns:vt": ht.vt }), xn.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = xr(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (r[r.length] = t(a[0], n));
    }
  }), r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + xr(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var ud = /<[^<>]+>[^<]*/g;
function ld(e, r) {
  var t = {}, a = "", n = e.match(ud);
  if (n) for (var i = 0; i != n.length; ++i) {
    var s = n[i], f = Ye(s);
    switch (sa(f[0])) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        a = Sr(f.name);
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
              t[a] = Sr(h);
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
              t[a] = $r(h);
              break;
            case "cy":
            case "error":
              t[a] = Sr(h);
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
function Tu(e) {
  var r = [it, Ae("Properties", null, { xmlns: ht.CUST_PROPS, "xmlns:vt": ht.vt })];
  if (!e) return r.join("");
  var t = 1;
  return Gr(e).forEach(function(n) {
    ++t, r[r.length] = Ae("property", w1(e[n]), { fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t, name: xr(n) });
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var ef = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, N0;
function hd(e, r, t) {
  N0 || (N0 = Xs(ef)), r = N0[r] || r, e[r] = t;
}
function dd(e, r) {
  var t = [];
  return Gr(ef).map(function(a) {
    for (var n = 0; n < La.length; ++n) if (La[n][1] == a) return La[n];
    for (n = 0; n < xn.length; ++n) if (xn[n][1] == a) return xn[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      a[2] === "date" && (n = new Date(n).toISOString().replace(/\.\d*Z/, "Z")), typeof n == "number" ? n = String(n) : n === true || n === false ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(Et(ef[a[1]] || a[1], n));
    }
  }), Ae("DocumentProperties", t.join(""), { xmlns: Gt.o });
}
function xd(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && Gr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < La.length; ++s) if (i == La[s][1]) return;
      for (s = 0; s < xn.length; ++s) if (i == xn[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], c = "string";
      typeof f == "number" ? (c = "float", f = String(f)) : f === true || f === false ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(Ae(Ro(i), f, { "dt:dt": c }));
    }
  }), r && Gr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === true || s === false ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(Ae(Ro(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Gt.o + '">' + n.join("") + "</" + a + ">";
}
function Cf(e) {
  var r = e.read_shift(4), t = e.read_shift(4);
  return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function pd(e) {
  var r = typeof e == "string" ? new Date(Date.parse(e)) : e, t = r.getTime() / 1e3 + 11644473600, a = t % Math.pow(2, 32), n = (t - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = oe(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function vd(e, r, t) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (t) for (; e.l - a & 3; ) ++e.l;
  return n;
}
function md(e, r, t) {
  var a = e.read_shift(0, "lpwstr");
  return a;
}
function Su(e, r, t) {
  return r === 31 ? md(e) : vd(e, r, t);
}
function _i(e, r, t) {
  return Su(e, r, t === false ? 0 : 4);
}
function gd(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return Su(e, r, 0);
}
function _d(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace(Xt, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function wd(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(Xt, "");
  return t;
}
function yd(e) {
  var r = e.l, t = Ms(e, vu);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = Ms(e, Vt);
  return [t, a];
}
function kd(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(yd(e));
  return t;
}
function qo(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace(Xt, "").replace(di, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function Fu(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function Ed(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function Ms(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== Go && a !== r && Q1.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126)) throw new Error("Expected type " + r + " saw " + a);
  switch (r === Go ? a : r) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      e.l += 4, val = _i(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 31:
      e.l += 4, val = _i(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 64:
      return Cf(e);
    case 65:
      return Fu(e);
    case 71:
      return Ed(e);
    case 80:
      return _i(e, a, !i.raw).replace(Xt, "");
    case 81:
      return gd(e, a).replace(Xt, "");
    case 4108:
      return kd(e);
    case 4126:
    case 4127:
      return a == 4127 ? _d(e) : wd(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Yo(e, r) {
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
      a = pd(r);
      break;
    case 31:
    case 80:
      for (a = oe(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)), a.write_shift(4, r.length + 1), a.write_shift(0, r, "dbcs"); a.l != a.length; ) a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
  }
  return at([t, a]);
}
function Zo(e, r) {
  var t = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, c = -1, u = {};
  for (s = 0; s != n; ++s) {
    var h = e.read_shift(4), v = e.read_shift(4);
    i[s] = [h, v + t];
  }
  i.sort(function(F, E) {
    return F[1] - E[1];
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
      if (d[w.n] = Ms(e, w.t, { raw: true }), w.p === "version" && (d[w.n] = String(d[w.n] >> 16) + "." + ("0000" + String(d[w.n] & 65535)).slice(-4)), w.n == "CodePage") switch (d[w.n]) {
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
          ua(f = d[w.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + d[w.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = d.CodePage = Ms(e, Ff), ua(f), c !== -1) {
        var y = e.l;
        e.l = i[c][1], u = qo(e, f), e.l = y;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        c = s, e.l = i[s + 1][1];
        continue;
      }
      u = qo(e, f);
    } else {
      var _ = u[i[s][0]], g;
      switch (e[e.l]) {
        case 65:
          e.l += 4, g = Fu(e);
          break;
        case 30:
          e.l += 4, g = _i(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 31:
          e.l += 4, g = _i(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
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
          e.l += 4, g = tt(e, 4);
          break;
        case 64:
          e.l += 4, g = $r(Cf(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      d[_] = g;
    }
  }
  return e.l = t + a, d;
}
var bu = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function Td(e) {
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
function Jo(e, r, t) {
  var a = oe(8), n = [], i = [], s = 8, f = 0, c = oe(8), u = oe(8);
  if (c.write_shift(4, 2), c.write_shift(4, 1200), u.write_shift(4, 1), i.push(c), n.push(u), s += 8 + c.length, !r) {
    u = oe(8), u.write_shift(4, 0), n.unshift(u);
    var h = [oe(4)];
    for (h[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var v = e[f][0];
      for (c = oe(8 + 2 * (v.length + 1) + (v.length % 2 ? 0 : 2)), c.write_shift(4, f + 2), c.write_shift(4, v.length + 1), c.write_shift(0, v, "dbcs"); c.l != c.length; ) c.write_shift(1, 0);
      h.push(c);
    }
    c = at(h), i.unshift(c), s += 8 + c.length;
  }
  for (f = 0; f < e.length; ++f) if (!(r && !r[e[f][0]]) && !(bu.indexOf(e[f][0]) > -1 || yu.indexOf(e[f][0]) > -1) && e[f][1] != null) {
    var d = e[f][1], x = 0;
    if (r) {
      x = +r[e[f][0]];
      var w = t[x];
      if (w.p == "version" && typeof d == "string") {
        var y = d.split(".");
        d = (+y[0] << 16) + (+y[1] || 0);
      }
      c = Yo(w.t, d);
    } else {
      var _ = Td(d);
      _ == -1 && (_ = 31, d = String(d)), c = Yo(_, d);
    }
    i.push(c), u = oe(8), u.write_shift(4, r ? x : 2 + f), n.push(u), s += 8 + c.length;
  }
  var g = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f) n[f].write_shift(4, g), g += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), at([a].concat(n).concat(i));
}
function Qo(e, r, t) {
  var a = e.content;
  if (!a) return {};
  lt(a, 0);
  var n, i, s, f, c = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var u = a.read_shift(4), h = a.read_shift(16);
  if (h !== ir.utils.consts.HEADER_CLSID && h !== t) throw new Error("Bad PropertySet CLSID " + h);
  if (n = a.read_shift(4), n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l) throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), c = a.read_shift(4));
  var v = Zo(a, r), d = { SystemIdentifier: u };
  for (var x in v) d[x] = v[x];
  if (d.FMTID = i, n === 1) return d;
  if (c - a.l == 2 && (a.l += 2), a.l !== c) throw new Error("Length mismatch 2: " + a.l + " !== " + c);
  var w;
  try {
    w = Zo(a, null);
  } catch {
  }
  for (x in w) d[x] = w[x];
  return d.FMTID = [i, s], d;
}
function ec(e, r, t, a, n, i) {
  var s = oe(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, ir.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var c = Jo(e, t, a);
  if (f.push(c), n) {
    var u = Jo(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(u);
  }
  return at(f);
}
function qa(e, r) {
  return e.read_shift(r), null;
}
function Sd(e, r) {
  r || (r = oe(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function Fd(e, r, t) {
  for (var a = [], n = e.l + r; e.l < n; ) a.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return a;
}
function tt(e, r) {
  return e.read_shift(r) === 1;
}
function Ct(e, r) {
  return r || (r = oe(2)), r.write_shift(2, +!!e), r;
}
function Qr(e) {
  return e.read_shift(2, "u");
}
function aa(e, r) {
  return r || (r = oe(2)), r.write_shift(2, e), r;
}
function Au(e, r) {
  return Fd(e, r, Qr);
}
function Cu(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function Du(e, r, t) {
  return t || (t = oe(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function zn(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = na;
  if (t && t.biff >= 8 && (na = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return na = i, f;
}
function bd(e) {
  var r = na;
  na = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, c, u = {};
  i && (f = e.read_shift(2)), n && (c = e.read_shift(4));
  var h = s == 2 ? "dbcs-cont" : "sbcs-cont", v = t === 0 ? "" : e.read_shift(t, h);
  return i && (e.l += 4 * f), n && (e.l += c), u.t = v, i || (u.raw = "<t>" + u.t + "</t>", u.r = u.t), na = r, u;
}
function Ad(e) {
  var r = e.t || "", t = oe(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var a = oe(2 * r.length);
  a.write_shift(2 * r.length, r, "utf16le");
  var n = [t, a];
  return at(n);
}
function kn(e, r, t) {
  var a;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
    if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(r, "sbcs-cont") : a = e.read_shift(r, "dbcs-cont"), a;
}
function ji(e, r, t) {
  var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : kn(e, a, t);
}
function Cn(e, r, t) {
  if (t.biff > 5) return ji(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Iu(e, r, t) {
  return t || (t = oe(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), t.write_shift(31, e, "utf16le"), t;
}
function Cd(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return e.l += 2, [r, t];
}
function Dd(e) {
  var r = e.read_shift(4), t = e.l, a = false;
  r > 24 && (e.l += r - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = true), e.l = t);
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(Xt, "");
  return a && (e.l += 24), n;
}
function Id(e) {
  for (var r = e.read_shift(2), t = ""; r-- > 0; ) t += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(Xt, "");
  return t + s;
}
function Od(e, r) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Dd(e);
    case "0303000000000000c000000000000046":
      return Id(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function _s(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace(Xt, "") : "";
  return t;
}
function rc(e, r) {
  r || (r = oe(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function Nd(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, c, u = "", h, v;
  n & 16 && (i = _s(e, t - e.l)), n & 128 && (s = _s(e, t - e.l)), (n & 257) === 257 && (f = _s(e, t - e.l)), (n & 257) === 1 && (c = Od(e, t - e.l)), n & 8 && (u = _s(e, t - e.l)), n & 32 && (h = e.read_shift(16)), n & 64 && (v = Cf(e)), e.l = t;
  var d = s || f || c || "";
  d && u && (d += "#" + u), d || (d = "#" + u), n & 2 && d.charAt(0) == "/" && d.charAt(1) != "/" && (d = "file://" + d);
  var x = { Target: d };
  return h && (x.guid = h), v && (x.time = v), i && (x.Tooltip = i), x;
}
function Rd(e) {
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
  if (i == 28) a = a.slice(1), rc(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && rc(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var c = 0; a.slice(c * 3, c * 3 + 3) == "../" || a.slice(c * 3, c * 3 + 3) == "..\\"; ) ++c;
    for (r.write_shift(2, c), r.write_shift(4, a.length - 3 * c + 1), t = 0; t < a.length - 3 * c; ++t) r.write_shift(1, a.charCodeAt(t + 3 * c) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function Ou(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function Nu(e, r) {
  var t = Ou(e);
  return t[3] = 0, t;
}
function xa(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = { r: a, c: n, ixfe: 0 };
  if (t && t.biff == 2 || r == 7) {
    var s = e.read_shift(1);
    i.ixfe = s & 63, e.l += 2;
  } else i.ixfe = e.read_shift(2);
  return i;
}
function En(e, r, t, a) {
  return a || (a = oe(6)), a.write_shift(2, e), a.write_shift(2, r), a.write_shift(2, t || 0), a;
}
function Pd(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return e.l += 8, { type: r, flags: t };
}
function Bd(e, r, t) {
  return r === 0 ? "" : Cn(e, r, t);
}
function Ld(e, r, t) {
  var a = t.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function Ru(e) {
  var r = e.read_shift(2), t = $s(e);
  return [r, t];
}
function Md(e, r, t) {
  e.l += 4, r -= 4;
  var a = e.l + r, n = zn(e, r, t), i = e.read_shift(2);
  if (a -= e.l, i !== a) throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function qs(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
function Pu(e, r) {
  return r || (r = oe(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function Bu(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var Ud = Bu;
function Lu(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function Wd(e) {
  var r = {};
  return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
}
function Hd(e) {
  var r = {};
  return e.l += 4, e.cf = e.read_shift(2), r;
}
function Ft(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var Vd = { 0: Ft, 4: Ft, 5: Ft, 6: Ft, 7: Hd, 8: Ft, 9: Ft, 10: Ft, 11: Ft, 12: Ft, 13: Wd, 14: Ft, 15: Ft, 16: Ft, 17: Ft, 18: Ft, 19: Ft, 20: Ft, 21: Lu };
function Xd(e, r) {
  for (var t = e.l + r, a = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a[n] = Vd[n](e, t - e.l);
    } catch {
      return e.l = t, a;
    }
  }
  return e.l != t && (e.l = t), a;
}
function ws(e, r) {
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
function Df(e, r, t) {
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
function Kd(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function jd(e, r, t) {
  if (t.enc) return e.l += r, "";
  var a = e.l, n = Cn(e, 0, t);
  return e.read_shift(r + a - e.l), n;
}
function Gd(e, r) {
  var t = !r || r.biff == 8, a = oe(t ? 112 : 54);
  for (a.write_shift(r.biff == 8 ? 2 : 1, 7), t && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (t ? 0 : 536870912)); a.l < a.length; ) a.write_shift(1, t ? 0 : 32);
  return a;
}
function zd(e, r, t) {
  var a = t && t.biff == 8 || r == 2 ? e.read_shift(2) : (e.l += r, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function $d(e, r, t) {
  var a = "";
  if (t.biff == 4) return a = zn(e, 0, t), a.length === 0 && (a = "Sheet1"), { name: a };
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
  return a = zn(e, 0, t), a.length === 0 && (a = "Sheet1"), { pos: n, hs: i, dt: s, name: a };
}
function qd(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1, a = oe(8 + t * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), r.biff >= 8 && a.write_shift(1, 1), a.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function Yd(e, r) {
  for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < t; ++s) i.push(bd(e));
  return i.Count = a, i.Unique = n, i;
}
function Zd(e, r) {
  var t = oe(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n) a[n] = Ad(e[n]);
  var i = at([t].concat(a));
  return i.parts = [t.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function Jd(e, r) {
  var t = {};
  return t.dsst = e.read_shift(2), e.l += r - 2, t;
}
function Qd(e) {
  var r = {};
  r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
  var t = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (r.level = a & 7), a & 32 && (r.hidden = true), a & 64 && (r.hpt = t / 20), r;
}
function ex(e) {
  var r = Pd(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function rx(e) {
  return e.read_shift(2), e.read_shift(4);
}
function tc(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function tx(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), c = e.read_shift(2), u = e.read_shift(2);
  return { Pos: [r, t], Dim: [a, n], Flags: i, CurTab: s, FirstTab: f, Selected: c, TabRatio: u };
}
function ax() {
  var e = oe(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function nx(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function ix(e) {
  var r = oe(18), t = 1718;
  return e && e.RTL && (t |= 64), r.write_shift(2, t), r.write_shift(4, 0), r.write_shift(4, 64), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
function sx() {
}
function fx(e, r, t) {
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
  return a.name = zn(e, 0, t), a;
}
function ox(e, r) {
  var t = e.name || "Arial", a = r && r.biff == 5, n = a ? 15 + t.length : 16 + 2 * t.length, i = oe(n);
  return i.write_shift(2, e.sz * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, t.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le"), i;
}
function cx(e, r, t) {
  var a = xa(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function ux(e, r, t, a) {
  var n = oe(10);
  return En(e, r, a, n), n.write_shift(4, t), n;
}
function lx(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = xa(e, r, t), i = ji(e, a - e.l, t);
  return n.val = i, n;
}
function hx(e, r, t, a, n) {
  var i = !n || n.biff == 8, s = oe(8 + +i + (1 + i) * t.length);
  return En(e, r, a, s), s.write_shift(2, t.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * t.length, t, i ? "utf16le" : "sbcs"), s;
}
function dx(e, r, t) {
  var a = e.read_shift(2), n = Cn(e, 0, t);
  return [a, n];
}
function xx(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 3 + r.length : 5 + 2 * r.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var px = Cn;
function vx(e) {
  var r = oe(1 + e.length);
  return r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function mx(e) {
  var r = oe(3 + e.length);
  return r.l += 2, r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function ac(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), c = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c } };
}
function gx(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = oe(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function _x(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = Ru(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function wx(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(Ru(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function yx(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function kx(e, r, t, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), c = e.read_shift(2);
  return n.patternType = ed[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = c & 127, n.icvBack = c >> 7 & 127, n.fsxButton = c >> 14 & 1), n;
}
function Ex(e, r, t) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, r -= 6, a.data = kx(e, r, a.fStyle, t), a;
}
function nc(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = oe(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function Tx(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = r.flags & 63, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
}
function Sx(e) {
  var r = oe(4);
  return r.l += 2, r.write_shift(1, e.numFmtId), r.l++, r;
}
function Mu(e) {
  var r = oe(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var Fx = Mu;
function bx(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Ax(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function Cx(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if (r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function Dx(e) {
  var r = oe(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Ix(e, r, t) {
  var a = xa(e, 6, t), n = Cu(e);
  return a.val = n, a.t = n === true || n === false ? "b" : "e", a;
}
function R0(e, r, t, a, n, i) {
  var s = oe(8);
  return En(e, r, a, s), Du(t, i, s), s;
}
function Ox(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = xa(e, 6, t), n = Ot(e);
  return a.val = n, a;
}
function Nx(e, r, t, a) {
  var n = oe(14);
  return En(e, r, a, n), yn(t, n), n;
}
var ic = Bd;
function Rx(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = kn(e, i), f = []; a > e.l; ) f.push(ji(e));
  return [i, n, s, f];
}
function sc(e, r, t) {
  var a = e.read_shift(2), n, i = { fBuiltIn: a & 1, fWantAdvise: a >>> 1 & 1, fWantPict: a >>> 2 & 1, fOle: a >>> 3 & 1, fOleLink: a >>> 4 & 1, cf: a >>> 5 & 1023, fIcon: a >>> 15 & 1 };
  return t.sbcch === 14849 && (n = Md(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function fc(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), c = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), c = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var u = kn(e, s, t);
  n & 32 && (u = bf[u.charCodeAt(0)]);
  var h = a - e.l;
  t && t.biff == 2 && --h;
  var v = a == e.l || f === 0 || !(h > 0) ? [] : $g(e, h, t, f);
  return { chKey: i, Name: u, itab: c, rgce: v };
}
function Uu(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return oc(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(Ld(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function oc(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = zn(e, r, t);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function Px(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = kn(e, a, t), s = kn(e, n, t);
  return [i, s];
}
function Bx(e, r, t) {
  var a = Bu(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [qg(e, r, t), n, a];
}
function cc(e, r, t) {
  var a = Ud(e);
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
  return [a, Gg(e, r, t)];
}
function Lx(e) {
  var r = e.read_shift(4) !== 0, t = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [r, t, a];
}
function Mx(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Cn(e, 0, t);
  return [{ r: a, c: n }, f, s, i];
}
function Ux(e, r, t) {
  if (t && t.biff < 8) {
    var a = e.read_shift(2), n = e.read_shift(2);
    if (a == 65535 || a == -1) return;
    var i = e.read_shift(2), s = e.read_shift(Math.min(i, 2048), "cpstr");
    return [{ r: a, c: n }, s];
  }
  return Mx(e, r, t);
}
function P0(e, r, t, a) {
  var n = oe(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function Wx(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(qs(e));
  return t;
}
function Hx(e) {
  var r = oe(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) Pu(e[t], r);
  return r;
}
function Vx(e, r, t) {
  if (t && t.biff < 8) return Kx(e, r, t);
  var a = Lu(e), n = Xd(e, r - 22, a[1]);
  return { cmo: a, ft: n };
}
var Xx = { 8: function(e, r) {
  var t = e.l + r;
  e.l += 10;
  var a = e.read_shift(2);
  e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
  var n = e.read_shift(1);
  return e.l += n, e.l = t, { fmt: a };
} };
function Kx(e, r, t) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
  var s = [];
  return s.push((Xx[a] || Bt)(e, r, t)), { cmo: [n, a, i], ft: s };
}
function jx(e, r, t) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (t.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = Cd(e, 6, t);
    var f = e.read_shift(2);
    e.read_shift(2), Qr(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var u = 1; u < e.lens.length - 1; ++u) {
      if (e.l - a != e.lens[u]) throw new Error("TxO: bad continue record");
      var h = e[e.l], v = kn(e, e.lens[u + 1] - e.lens[u] - 1);
      if (n += v, n.length >= (h ? f : 2 * f)) break;
    }
    if (n.length !== f && n.length !== f * 2) throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + r, { t: n };
  } catch {
    return e.l = a + r, { t: n };
  }
}
function Gx(e, r) {
  var t = qs(e);
  e.l += 16;
  var a = Nd(e, r - 24);
  return [t, a];
}
function zx(e) {
  var r = oe(24), t = Br(e[0]);
  r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) r.write_shift(1, parseInt(a[n], 16));
  return at([r, Rd(e[1])]);
}
function $x(e, r) {
  e.read_shift(2);
  var t = qs(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
  return a = a.replace(Xt, ""), [t, a];
}
function qx(e) {
  var r = e[1].Tooltip, t = oe(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var a = Br(e[0]);
  t.write_shift(2, a.r), t.write_shift(2, a.r), t.write_shift(2, a.c), t.write_shift(2, a.c);
  for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
  return t.write_shift(2, 0), t;
}
function Yx(e) {
  var r = [0, 0], t;
  return t = e.read_shift(2), r[0] = zo[t] || t, t = e.read_shift(2), r[1] = zo[t] || t, r;
}
function Zx(e) {
  return e || (e = oe(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Jx(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Nu(e));
  return t;
}
function Qx(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(Nu(e));
  return t;
}
function ep(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function Wu(e, r, t) {
  if (!t.cellStyles) return Bt(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), c = e.read_shift(2);
  a == 2 && (e.l += 2);
  var u = { s: n, e: i, w: s, ixfe: f, flags: c };
  return (t.biff >= 5 || !t.biff) && (u.level = c >> 8 & 7), u;
}
function rp(e, r) {
  var t = oe(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function tp(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Ot(e), t.footer = Ot(e), e.l += 2), t;
}
function ap(e, r, t) {
  var a = { area: false };
  if (t.biff != 5) return e.l += r, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = true), a;
}
function np(e) {
  for (var r = oe(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
var ip = xa, sp = Au, fp = ji;
function op(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function Gi(e, r, t, a, n) {
  return e || (e = oe(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(1, a || 0), e.write_shift(1, n || 0), e.write_shift(1, 0), e;
}
function cp(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = xa(e, 7, t), n = Cn(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function up(e, r, t) {
  var a = xa(e, 7, t), n = Ot(e);
  return a.t = "n", a.val = n, a;
}
function lp(e, r, t, a, n) {
  var i = oe(15);
  return Gi(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function hp(e, r, t) {
  var a = xa(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function dp(e, r, t, a, n) {
  var i = oe(9);
  return Gi(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function xp(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function pp(e, r, t) {
  var a = e.l + 7, n = xa(e, 6, t);
  e.l = a;
  var i = Cu(e);
  return n.val = i, n.t = i === true || i === false ? "b" : "e", n;
}
function vp(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function mp(e, r, t) {
  var a = e.l + r, n = xa(e, 6, t), i = e.read_shift(2), s = kn(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function gp(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var _p = [2, 3, 48, 49, 131, 139, 140, 245], rf = (function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, r = Xs({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function t(f, c) {
    var u = [], h = Za(1);
    switch (c.type) {
      case "base64":
        h = Ut(qt(f));
        break;
      case "binary":
        h = Ut(f);
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
    var y = 0, _ = 521;
    v == 2 && (y = h.read_shift(2)), h.l += 3, v != 2 && (y = h.read_shift(4)), y > 1048576 && (y = 1e6), v != 2 && (_ = h.read_shift(2));
    var g = h.read_shift(2);
    c.codepage, v != 2 && (h.l += 16, h.read_shift(1), h[h.l] !== 0 && e[h[h.l]], h.l += 1, h.l += 2), w && (h.l += 36);
    for (var F = [], E = {}, I = Math.min(h.length, v == 2 ? 521 : _ - 10 - (x ? 264 : 0)), V = w ? 32 : 11; h.l < I && h[h.l] != 13; ) switch (E = {}, E.name = ba(h.slice(h.l, h.l + V)).replace(/[\u0000\r\n][\S\s]*$/g, ""), h.l += V, E.type = String.fromCharCode(h.read_shift(1)), v != 2 && !w && (E.offset = h.read_shift(4)), E.len = h.read_shift(1), v == 2 && (E.offset = h.read_shift(2)), E.dec = h.read_shift(1), E.name.length && F.push(E), v != 2 && (h.l += w ? 13 : 14), E.type) {
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
    if (h[h.l] !== 13 && (h.l = _ - 1), h.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + h.l + " " + h[h.l]);
    h.l = _;
    var K = 0, A = 0;
    for (u[0] = [], A = 0; A != F.length; ++A) u[0][A] = F[A].name;
    for (; y-- > 0; ) {
      if (h[h.l] === 42) {
        h.l += g;
        continue;
      }
      for (++h.l, u[++K] = [], A = 0, A = 0; A != F.length; ++A) {
        var H = h.slice(h.l, h.l + F[A].len);
        h.l += F[A].len, lt(H, 0);
        var W = ba(H);
        switch (F[A].type) {
          case "C":
            W.trim().length && (u[K][A] = W.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            W.length === 8 ? (u[K][A] = new Date(Date.UTC(+W.slice(0, 4), +W.slice(4, 6) - 1, +W.slice(6, 8), 0, 0, 0, 0)), c && c.UTC || (u[K][A] = wn(u[K][A]))) : u[K][A] = W;
            break;
          case "F":
            u[K][A] = parseFloat(W.trim());
            break;
          case "+":
          case "I":
            u[K][A] = w ? H.read_shift(-4, "i") ^ 2147483648 : H.read_shift(4, "i");
            break;
          case "L":
            switch (W.trim().toUpperCase()) {
              case "Y":
              case "T":
                u[K][A] = true;
                break;
              case "N":
              case "F":
                u[K][A] = false;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + W + "|");
            }
            break;
          case "M":
            if (!d) throw new Error("DBF Unexpected MEMO for type " + v.toString(16));
            u[K][A] = "##MEMO##" + (w ? parseInt(W.trim(), 10) : H.read_shift(4));
            break;
          case "N":
            W = W.replace(/\u0000/g, "").trim(), W && W != "." && (u[K][A] = +W || 0);
            break;
          case "@":
            u[K][A] = new Date(H.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var Z = H.read_shift(4), j = H.read_shift(4);
              if (Z == 0 && j == 0) break;
              u[K][A] = new Date((Z - 2440588) * 864e5 + j), c && c.UTC || (u[K][A] = wn(u[K][A]));
            }
            break;
          case "Y":
            u[K][A] = H.read_shift(4, "i") / 1e4 + H.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            u[K][A] = -H.read_shift(-8, "f");
            break;
          case "B":
            if (x && F[A].len == 8) {
              u[K][A] = H.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            H.l += F[A].len;
            break;
          case "0":
            if (F[A].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + F[A].type);
        }
      }
    }
    if (v != 2 && h.l < h.length && h[h.l++] != 26) throw new Error("DBF EOF Marker missing " + (h.l - 1) + " of " + h.length + " " + h[h.l - 1].toString(16));
    return c && c.sheetRows && (u = u.slice(0, c.sheetRows)), c.DBF = F, u;
  }
  function a(f, c) {
    var u = c || {};
    u.dateNF || (u.dateNF = "yyyymmdd");
    var h = Zn(t(f, u), u);
    return h["!cols"] = u.DBF.map(function(v) {
      return { wch: v.len, DBF: v };
    }), delete u.DBF, h;
  }
  function n(f, c) {
    try {
      var u = tn(a(f, c), c);
      return u.bookType = "dbf", u;
    } catch (h) {
      if (c && c.WTF) throw h;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, c) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var u = c || {}, h = na;
    if (+u.codepage >= 0 && ua(+u.codepage), u.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = Rt(), d = ff(f, { header: 1, raw: true, cellDates: true }), x = d[0], w = d.slice(1), y = f["!cols"] || [], _ = 0, g = 0, F = 0, E = 1;
    for (_ = 0; _ < x.length; ++_) {
      if (((y[_] || {}).DBF || {}).name) {
        x[_] = y[_].DBF.name, ++F;
        continue;
      }
      if (x[_] != null) {
        if (++F, typeof x[_] == "number" && (x[_] = x[_].toString(10)), typeof x[_] != "string") throw new Error("DBF Invalid column name " + x[_] + " |" + typeof x[_] + "|");
        if (x.indexOf(x[_]) !== _) {
          for (g = 0; g < 1024; ++g) if (x.indexOf(x[_] + "_" + g) == -1) {
            x[_] += "_" + g;
            break;
          }
        }
      }
    }
    var I = Cr(f["!ref"]), V = [], K = [], A = [];
    for (_ = 0; _ <= I.e.c - I.s.c; ++_) {
      var H = "", W = "", Z = 0, j = [];
      for (g = 0; g < w.length; ++g) w[g][_] != null && j.push(w[g][_]);
      if (j.length == 0 || x[_] == null) {
        V[_] = "?";
        continue;
      }
      for (g = 0; g < j.length; ++g) {
        switch (typeof j[g]) {
          case "number":
            W = "B";
            break;
          case "string":
            W = "C";
            break;
          case "boolean":
            W = "L";
            break;
          case "object":
            W = j[g] instanceof Date ? "D" : "C";
            break;
          default:
            W = "C";
        }
        Z = Math.max(Z, String(j[g]).length), H = H && H != W ? "C" : W;
      }
      Z > 250 && (Z = 250), W = ((y[_] || {}).DBF || {}).type, W == "C" && y[_].DBF.len > Z && (Z = y[_].DBF.len), H == "B" && W == "N" && (H = "N", A[_] = y[_].DBF.dec, Z = y[_].DBF.len), K[_] = H == "C" || W == "N" ? Z : i[H] || 0, E += K[_], V[_] = H;
    }
    var ne = v.next(32);
    for (ne.write_shift(4, 318902576), ne.write_shift(4, w.length), ne.write_shift(2, 296 + 32 * F), ne.write_shift(2, E), _ = 0; _ < 4; ++_) ne.write_shift(4, 0);
    var de = +r[na] || 3;
    for (ne.write_shift(4, 0 | de << 8), e[de] != +u.codepage && (u.codepage && console.error("DBF Unsupported codepage " + na + ", using 1252"), na = 1252), _ = 0, g = 0; _ < x.length; ++_) if (x[_] != null) {
      var We = v.next(32), me = (x[_].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      We.write_shift(1, me, "sbcs"), We.write_shift(1, V[_] == "?" ? "C" : V[_], "sbcs"), We.write_shift(4, g), We.write_shift(1, K[_] || i[V[_]] || 0), We.write_shift(1, A[_] || 0), We.write_shift(1, 2), We.write_shift(4, 0), We.write_shift(1, 0), We.write_shift(4, 0), We.write_shift(4, 0), g += K[_] || i[V[_]] || 0;
    }
    var ze = v.next(264);
    for (ze.write_shift(4, 13), _ = 0; _ < 65; ++_) ze.write_shift(4, 0);
    for (_ = 0; _ < w.length; ++_) {
      var ke = v.next(E);
      for (ke.write_shift(1, 0), g = 0; g < x.length; ++g) if (x[g] != null) switch (V[g]) {
        case "L":
          ke.write_shift(1, w[_][g] == null ? 63 : w[_][g] ? 84 : 70);
          break;
        case "B":
          ke.write_shift(8, w[_][g] || 0, "f");
          break;
        case "N":
          var Be = "0";
          for (typeof w[_][g] == "number" && (Be = w[_][g].toFixed(A[g] || 0)), Be.length > K[g] && (Be = Be.slice(0, K[g])), F = 0; F < K[g] - Be.length; ++F) ke.write_shift(1, 32);
          ke.write_shift(1, Be, "sbcs");
          break;
        case "D":
          w[_][g] ? (ke.write_shift(4, ("0000" + w[_][g].getFullYear()).slice(-4), "sbcs"), ke.write_shift(2, ("00" + (w[_][g].getMonth() + 1)).slice(-2), "sbcs"), ke.write_shift(2, ("00" + w[_][g].getDate()).slice(-2), "sbcs")) : ke.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var Qe = ke.l, he = String(w[_][g] != null ? w[_][g] : "").slice(0, K[g]);
          for (ke.write_shift(1, he, "cpstr"), Qe += K[g] - ke.l, F = 0; F < Qe; ++F) ke.write_shift(1, 32);
          break;
      }
    }
    return na = h, v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: n, to_sheet: a, from_sheet: s };
})(), Hu = (function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
  try {
    r = new RegExp("\x1BN(" + Gr(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  } catch {
  }
  var t = function(x, w) {
    var y = e[w];
    return typeof y == "number" ? wo(y) : y;
  }, a = function(x, w, y) {
    var _ = w.charCodeAt(0) - 32 << 4 | y.charCodeAt(0) - 48;
    return _ == 59 ? x : wo(_);
  };
  e["|"] = 254;
  var n = function(x) {
    return x.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function i(x, w) {
    switch (w.type) {
      case "base64":
        return s(qt(x), w);
      case "binary":
        return s(x, w);
      case "buffer":
        return s(pr && Buffer.isBuffer(x) ? x.toString("binary") : ba(x), w);
      case "array":
        return s(_n(x), w);
    }
    throw new Error("Unrecognized type " + w.type);
  }
  function s(x, w) {
    var y = x.split(/[\n\r]+/), _ = -1, g = -1, F = 0, E = 0, I = [], V = [], K = null, A = {}, H = [], W = [], Z = [], j = 0, ne, de = { Workbook: { WBProps: {}, Names: [] } };
    for (+w.codepage >= 0 && ua(+w.codepage); F !== y.length; ++F) {
      j = 0;
      var We = y[F].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), me = We.replace(/;;/g, "\0").split(";").map(function(U) {
        return U.replace(/\u0000/g, ";");
      }), ze = me[0], ke;
      if (We.length > 0) switch (ze) {
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
          me[1].charAt(0) === "P" && V.push(We.slice(3).replace(/;;/g, ";"));
          break;
        case "NN":
          {
            var Qe = { Sheet: 0 };
            for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
              case "N":
                Qe.Name = me[E].slice(1);
                break;
              case "E":
                Qe.Ref = (w && w.sheet || "Sheet1") + "!" + vn(me[E].slice(1));
                break;
            }
            de.Workbook.Names.push(Qe);
          }
          break;
        case "C":
          var he = false, sr = false, Se = false, Oe = false, _e = -1, Ke = -1, je = "", $e = "z", R = "";
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "A":
              R = me[E].slice(1);
              break;
            case "X":
              g = parseInt(me[E].slice(1), 10) - 1, sr = true;
              break;
            case "Y":
              for (_ = parseInt(me[E].slice(1), 10) - 1, sr || (g = 0), ne = I.length; ne <= _; ++ne) I[ne] = [];
              break;
            case "K":
              ke = me[E].slice(1), ke.charAt(0) === '"' ? (ke = ke.slice(1, ke.length - 1), $e = "s") : ke === "TRUE" || ke === "FALSE" ? (ke = ke === "TRUE", $e = "b") : ke.charAt(0) == "#" && wt[ke] != null ? ($e = "e", ke = wt[ke]) : isNaN($t(ke)) || (ke = $t(ke), $e = "n", K !== null && ia(K) && w.cellDates && (ke = Ba(de.Workbook.WBProps.date1904 ? ke + 1462 : ke), $e = typeof ke == "number" ? "n" : "d")), he = true;
              break;
            case "E":
              Oe = true, je = vn(me[E].slice(1), { r: _, c: g });
              break;
            case "S":
              Se = true;
              break;
            case "G":
              break;
            case "R":
              _e = parseInt(me[E].slice(1), 10) - 1;
              break;
            case "C":
              Ke = parseInt(me[E].slice(1), 10) - 1;
              break;
            default:
              if (w && w.WTF) throw new Error("SYLK bad record " + We);
          }
          if (he && (I[_][g] ? (I[_][g].t = $e, I[_][g].v = ke) : I[_][g] = { t: $e, v: ke }, K && (I[_][g].z = K), w.cellText !== false && K && (I[_][g].w = Yt(I[_][g].z, I[_][g].v, { date1904: de.Workbook.WBProps.date1904 })), K = null), Se) {
            if (Oe) throw new Error("SYLK shared formula cannot have own formula");
            var ee = _e > -1 && I[_e][Ke];
            if (!ee || !ee[1]) throw new Error("SYLK shared formula cannot find base");
            je = rl(ee[1], { r: _ - _e, c: g - Ke });
          }
          je && (I[_][g] ? I[_][g].f = je : I[_][g] = { t: "n", f: je }), R && (I[_][g] || (I[_][g] = { t: "z" }), I[_][g].c = [{ a: "SheetJSYLK", t: R }]);
          break;
        case "F":
          var L = 0;
          for (E = 1; E < me.length; ++E) switch (me[E].charAt(0)) {
            case "X":
              g = parseInt(me[E].slice(1), 10) - 1, ++L;
              break;
            case "Y":
              for (_ = parseInt(me[E].slice(1), 10) - 1, ne = I.length; ne <= _; ++ne) I[ne] = [];
              break;
            case "M":
              j = parseInt(me[E].slice(1), 10) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              K = V[parseInt(me[E].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (Z = me[E].slice(1).split(" "), ne = parseInt(Z[0], 10); ne <= parseInt(Z[1], 10); ++ne) j = parseInt(Z[2], 10), W[ne - 1] = j === 0 ? { hidden: true } : { wch: j };
              break;
            case "C":
              g = parseInt(me[E].slice(1), 10) - 1, W[g] || (W[g] = {});
              break;
            case "R":
              _ = parseInt(me[E].slice(1), 10) - 1, H[_] || (H[_] = {}), j > 0 ? (H[_].hpt = j, H[_].hpx = qn(j)) : j === 0 && (H[_].hidden = true);
              break;
            default:
              if (w && w.WTF) throw new Error("SYLK bad record " + We);
          }
          L < 1 && (K = null);
          break;
        default:
          if (w && w.WTF) throw new Error("SYLK bad record " + We);
      }
    }
    return H.length > 0 && (A["!rows"] = H), W.length > 0 && (A["!cols"] = W), W.forEach(function(U) {
      Ja(U);
    }), w && w.sheetRows && (I = I.slice(0, w.sheetRows)), [I, A, de];
  }
  function f(x, w) {
    var y = i(x, w), _ = y[0], g = y[1], F = y[2], E = Hr(w);
    E.date1904 = (((F || {}).Workbook || {}).WBProps || {}).date1904;
    var I = Zn(_, E);
    Gr(g).forEach(function(K) {
      I[K] = g[K];
    });
    var V = tn(I, w);
    return Gr(F).forEach(function(K) {
      V[K] = F[K];
    }), V.bookType = "sylk", V;
  }
  function c(x, w, y, _, g, F) {
    var E = "C;Y" + (y + 1) + ";X" + (_ + 1) + ";K";
    switch (x.t) {
      case "n":
        E += isFinite(x.v) ? x.v || 0 : xt[isNaN(x.v) ? 36 : 7], x.f && !x.F && (E += ";E" + Zs(x.f, { r: y, c: _ }));
        break;
      case "b":
        E += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        E += x.w || xt[x.v] || x.v;
        break;
      case "d":
        E += Zr($r(x.v, F), F);
        break;
      case "s":
        E += '"' + (x.v == null ? "" : String(x.v)).replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return E;
  }
  function u(x, w, y) {
    var _ = "C;Y" + (w + 1) + ";X" + (y + 1) + ";A";
    return _ += n(x.map(function(g) {
      return g.t;
    }).join("")), _;
  }
  function h(x, w) {
    w.forEach(function(y, _) {
      var g = "F;W" + (_ + 1) + " " + (_ + 1) + " ";
      y.hidden ? g += "0" : (typeof y.width == "number" && !y.wpx && (y.wpx = Ri(y.width)), typeof y.wpx == "number" && !y.wch && (y.wch = Pi(y.wpx)), typeof y.wch == "number" && (g += Math.round(y.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function v(x, w) {
    w.forEach(function(y, _) {
      var g = "F;";
      y.hidden ? g += "M0;" : y.hpt ? g += "M" + 20 * y.hpt + ";" : y.hpx && (g += "M" + 20 * Bi(y.hpx) + ";"), g.length > 2 && x.push(g + "R" + (_ + 1));
    });
  }
  function d(x, w, y) {
    w || (w = {}), w._formats = ["General"];
    var _ = ["ID;PSheetJS;N;E"], g = [], F = Cr(x["!ref"] || "A1"), E, I = x["!data"] != null, V = `\r
`, K = (((y || {}).Workbook || {}).WBProps || {}).date1904, A = "General";
    _.push("P;PGeneral");
    var H = F.s.r, W = F.s.c, Z = [];
    if (x["!ref"]) {
      for (H = F.s.r; H <= F.e.r; ++H) if (!(I && !x["!data"][H])) {
        for (Z = [], W = F.s.c; W <= F.e.c; ++W) E = I ? x["!data"][H][W] : x[vr(W) + Tr(H)], !(!E || !E.c) && Z.push(u(E.c, H, W));
        Z.length && g.push(Z.join(V));
      }
    }
    if (x["!ref"]) {
      for (H = F.s.r; H <= F.e.r; ++H) if (!(I && !x["!data"][H])) {
        for (Z = [], W = F.s.c; W <= F.e.c; ++W) if (E = I ? x["!data"][H][W] : x[vr(W) + Tr(H)], !(!E || E.v == null && (!E.f || E.F))) {
          if ((E.z || (E.t == "d" ? nr[14] : "General")) != A) {
            var j = w._formats.indexOf(E.z);
            j == -1 && (w._formats.push(E.z), j = w._formats.length - 1, _.push("P;P" + E.z.replace(/;/g, ";;"))), Z.push("F;P" + j + ";Y" + (H + 1) + ";X" + (W + 1));
          }
          Z.push(c(E, x, H, W, w, K));
        }
        g.push(Z.join(V));
      }
    }
    return _.push("F;P0;DG0G8;M255"), x["!cols"] && h(_, x["!cols"]), x["!rows"] && v(_, x["!rows"]), x["!ref"] && _.push("B;Y" + (F.e.r - F.s.r + 1) + ";X" + (F.e.c - F.s.c + 1) + ";D" + [F.s.c, F.s.r, F.e.c, F.e.r].join(" ")), _.push("O;L;D;B" + (K ? ";V4" : "") + ";K47;G100 0.001"), delete w._formats, _.join(V) + V + g.join(V) + V + "E" + V;
  }
  return { to_workbook: f, from_sheet: d };
})(), Vu = /* @__PURE__ */ (function() {
  function e(f, c) {
    switch (c.type) {
      case "base64":
        return r(qt(f), c);
      case "binary":
        return r(f, c);
      case "buffer":
        return r(pr && Buffer.isBuffer(f) ? f.toString("binary") : ba(f), c);
      case "array":
        return r(_n(f), c);
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
        var w = u[d].trim().split(","), y = w[0], _ = w[1];
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
            g === "TRUE" ? x[h][v] = true : g === "FALSE" ? x[h][v] = false : isNaN($t(_)) ? isNaN(bi(_).getDate()) ? x[h][v] = _ : (x[h][v] = $r(_), c && c.UTC || (x[h][v] = wn(x[h][v]))) : x[h][v] = $t(_), ++v;
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
    return Zn(e(f, c), c);
  }
  function a(f, c) {
    var u = tn(t(f, c), c);
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
    for (var c = Cr(f["!ref"]), u = f["!data"] != null, h = [`TABLE\r
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
`, w = c.s.c; w <= c.e.c; ++w) {
        var y = u ? d && d[w] : f[gr({ r: v, c: w })];
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
            y.w || (y.w = Yt(y.z || nr[14], Zr($r(y.v)))), x += n(y.w, "V");
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
})(), Xu = (function() {
  function e(v) {
    return v.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function r(v) {
    return v.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function t(v, d) {
    for (var x = v.split(`
`), w = -1, y = -1, _ = 0, g = []; _ !== x.length; ++_) {
      var F = x[_].trim().split(":");
      if (F[0] === "cell") {
        var E = Br(F[1]);
        if (g.length <= E.r) for (w = g.length; w <= E.r; ++w) g[w] || (g[w] = []);
        switch (w = E.r, y = E.c, F[2]) {
          case "t":
            g[w][y] = e(F[3]);
            break;
          case "v":
            g[w][y] = +F[3];
            break;
          case "vtf":
            var I = F[F.length - 1];
          case "vtc":
            F[3] === "nl" ? g[w][y] = !!+F[4] : g[w][y] = F[F.length - 1].charAt(0) == "#" ? { t: "e", v: wt[F[F.length - 1]] } : +F[4], F[2] == "vtf" && (g[w][y] = [g[w][y], I]);
        }
      }
    }
    return d && d.sheetRows && (g = g.slice(0, d.sheetRows)), g;
  }
  function a(v, d) {
    return Zn(t(v, d), d);
  }
  function n(v, d) {
    return tn(a(v, d), d);
  }
  var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`), s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`, f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`), c = "--SocialCalcSpreadsheetControlSave--";
  function u(v) {
    if (!v || !v["!ref"]) return "";
    for (var d = [], x = [], w, y = "", _ = yt(v["!ref"]), g = v["!data"] != null, F = _.s.r; F <= _.e.r; ++F) for (var E = _.s.c; E <= _.e.c; ++E) if (y = gr({ r: F, c: E }), w = g ? (v["!data"][F] || [])[E] : v[y], !(!w || w.v == null || w.t === "z")) {
      switch (x = ["cell", y, "t"], w.t) {
        case "s":
          x.push(r(w.v));
          break;
        case "b":
          x[2] = "vt" + (w.f ? "f" : "c"), x[3] = "nl", x[4] = w.v ? "1" : "0", x[5] = r(w.f || (w.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var I = Zr($r(w.v));
          x[2] = "vtc", x[3] = "nd", x[4] = "" + I, x[5] = w.w || Yt(w.z || nr[14], I);
          break;
        case "n":
          isFinite(w.v) ? w.f ? (x[2] = "vtf", x[3] = "n", x[4] = w.v, x[5] = r(w.f)) : (x[2] = "v", x[3] = w.v) : (x[2] = "vt" + (w.f ? "f" : "c"), x[3] = "e" + xt[isNaN(w.v) ? 36 : 7], x[4] = "0", x[5] = w.f || x[3].slice(1), x[6] = "e", x[7] = x[3].slice(1));
          break;
        case "e":
          continue;
      }
      d.push(x.join(":"));
    }
    return d.push("sheet:c:" + (_.e.c - _.s.c + 1) + ":r:" + (_.e.r - _.s.r + 1) + ":tvf:1"), d.push("valueformat:1:text-wiki"), d.join(`
`);
  }
  function h(v) {
    return [i, s, f, s, u(v), c].join(`
`);
  }
  return { to_workbook: n, to_sheet: a, from_sheet: h };
})(), $n = /* @__PURE__ */ (function() {
  function e(h, v, d, x, w) {
    w.raw ? v[d][x] = h : h === "" || (h === "TRUE" ? v[d][x] = true : h === "FALSE" ? v[d][x] = false : isNaN($t(h)) ? isNaN(bi(h).getDate()) ? h.charCodeAt(0) == 35 && wt[h] != null ? v[d][x] = { t: "e", v: wt[h], w: h } : v[d][x] = h : v[d][x] = $r(h) : v[d][x] = $t(h));
  }
  function r(h, v) {
    var d = v || {}, x = [];
    if (!h || h.length === 0) return x;
    for (var w = h.split(/[\r\n]/), y = w.length - 1; y >= 0 && w[y].length === 0; ) --y;
    for (var _ = 10, g = 0, F = 0; F <= y; ++F) g = w[F].indexOf(" "), g == -1 ? g = w[F].length : g++, _ = Math.max(_, g);
    for (F = 0; F <= y; ++F) {
      x[F] = [];
      var E = 0;
      for (e(w[F].slice(0, _).trim(), x, F, E, d), E = 1; E <= (w[F].length - _) / 10 + 1; ++E) e(w[F].slice(_ + (E - 1) * 10, _ + E * 10).trim(), x, F, E, d);
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
    return w.sort(function(y, _) {
      return y[0] - _[0] || a[y[1]] - a[_[1]];
    }), t[w.pop()[1]] || 44;
  }
  function i(h, v) {
    var d = v || {}, x = "", w = {};
    d.dense && (w["!data"] = []);
    var y = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    h.slice(0, 4) == "sep=" ? h.charCodeAt(5) == 13 && h.charCodeAt(6) == 10 ? (x = h.charAt(4), h = h.slice(7)) : h.charCodeAt(5) == 13 || h.charCodeAt(5) == 10 ? (x = h.charAt(4), h = h.slice(6)) : x = n(h.slice(0, 1024)) : d && d.FS ? x = d.FS : x = n(h.slice(0, 1024));
    var _ = 0, g = 0, F = 0, E = 0, I = 0, V = x.charCodeAt(0), K = false, A = 0, H = h.charCodeAt(0), W = d.dateNF != null ? Hh(d.dateNF) : null;
    function Z() {
      var j = h.slice(E, I);
      j.slice(-1) == "\r" && (j = j.slice(0, -1));
      var ne = {};
      if (j.charAt(0) == '"' && j.charAt(j.length - 1) == '"' && (j = j.slice(1, -1).replace(/""/g, '"')), d.cellText !== false && (ne.w = j), j.length === 0) ne.t = "z";
      else if (d.raw) ne.t = "s", ne.v = j;
      else if (j.trim().length === 0) ne.t = "s", ne.v = j;
      else if (j.charCodeAt(0) == 61) j.charCodeAt(1) == 34 && j.charCodeAt(j.length - 1) == 34 ? (ne.t = "s", ne.v = j.slice(2, -1).replace(/""/g, '"')) : Om(j) ? (ne.t = "s", ne.f = j.slice(1), ne.v = j) : (ne.t = "s", ne.v = j);
      else if (j == "TRUE") ne.t = "b", ne.v = true;
      else if (j == "FALSE") ne.t = "b", ne.v = false;
      else if (!isNaN(F = $t(j))) ne.t = "n", ne.v = F;
      else if (!isNaN((F = bi(j)).getDate()) || W && j.match(W)) {
        if (ne.z = d.dateNF || nr[14], W && j.match(W)) {
          var de = Vh(j, d.dateNF, j.match(W) || []);
          F = $r(de), d && d.UTC === false && (F = wn(F));
        } else d && d.UTC === false ? F = wn(F) : d.cellText !== false && d.dateNF && (ne.w = Yt(ne.z, F));
        d.cellDates ? (ne.t = "d", ne.v = F) : (ne.t = "n", ne.v = Zr(F)), d.cellNF || delete ne.z;
      } else j.charCodeAt(0) == 35 && wt[j] != null ? (ne.t = "e", ne.w = j, ne.v = wt[j]) : (ne.t = "s", ne.v = j);
      if (ne.t == "z" || (d.dense ? (w["!data"][_] || (w["!data"][_] = []), w["!data"][_][g] = ne) : w[gr({ c: g, r: _ })] = ne), E = I + 1, H = h.charCodeAt(E), y.e.c < g && (y.e.c = g), y.e.r < _ && (y.e.r = _), A == V) ++g;
      else if (g = 0, ++_, d.sheetRows && d.sheetRows <= _) return true;
    }
    e: for (; I < h.length; ++I) switch (A = h.charCodeAt(I)) {
      case 34:
        H === 34 && (K = !K);
        break;
      case 13:
        if (K) break;
        h.charCodeAt(I + 1) == 10 && ++I;
      case V:
      case 10:
        if (!K && Z()) break e;
        break;
    }
    return I - E > 0 && Z(), w["!ref"] = dr(y), w;
  }
  function s(h, v) {
    return !(v && v.PRN) || v.FS || h.slice(0, 4) == "sep=" || h.indexOf("	") >= 0 || h.indexOf(",") >= 0 || h.indexOf(";") >= 0 ? i(h, v) : Zn(r(h, v), v);
  }
  function f(h, v) {
    var d = "", x = v.type == "string" ? [0, 0, 0, 0] : Hf(h, v);
    switch (v.type) {
      case "base64":
        d = qt(h);
        break;
      case "binary":
        d = h;
        break;
      case "buffer":
        v.codepage == 65001 ? d = h.toString("utf8") : (v.codepage, d = pr && Buffer.isBuffer(h) ? h.toString("binary") : ba(h));
        break;
      case "array":
        d = _n(h);
        break;
      case "string":
        d = h;
        break;
      default:
        throw new Error("Unrecognized type " + v.type);
    }
    return x[0] == 239 && x[1] == 187 && x[2] == 191 ? d = Pr(d.slice(3)) : v.type != "string" && v.type != "buffer" && v.codepage == 65001 ? d = Pr(d) : v.type == "binary", d.slice(0, 19) == "socialcalc:version:" ? Xu.to_sheet(v.type == "string" ? d : Pr(d), v) : s(d, v);
  }
  function c(h, v) {
    return tn(f(h, v), v);
  }
  function u(h) {
    var v = [];
    if (!h["!ref"]) return "";
    for (var d = Cr(h["!ref"]), x, w = h["!data"] != null, y = d.s.r; y <= d.e.r; ++y) {
      for (var _ = [], g = d.s.c; g <= d.e.c; ++g) {
        var F = gr({ r: y, c: g });
        if (x = w ? (h["!data"][y] || [])[g] : h[F], !x || x.v == null) {
          _.push("          ");
          continue;
        }
        for (var E = (x.w || (Ua(x), x.w) || "").slice(0, 10); E.length < 10; ) E += " ";
        _.push(E + (g === 0 ? " " : ""));
      }
      v.push(_.join(""));
    }
    return v.join(`
`);
  }
  return { to_workbook: c, to_sheet: f, from_sheet: u };
})();
function wp(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = true;
  try {
    var n = Hu.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return $n.to_workbook(e, r);
  }
}
var pn = /* @__PURE__ */ (function() {
  function e(R, ee, L) {
    if (R) {
      lt(R, R.l || 0);
      for (var U = L.Enum || Oe; R.l < R.length; ) {
        var ue = R.read_shift(2), O = U[ue] || U[65535], Ce = R.read_shift(2), Ue = R.l + Ce, Fe = O.f && O.f(R, Ce, L);
        if (R.l = Ue, ee(Fe, O, ue)) return;
      }
    }
  }
  function r(R, ee) {
    switch (ee.type) {
      case "base64":
        return a(Ut(qt(R)), ee);
      case "binary":
        return a(Ut(R), ee);
      case "buffer":
      case "array":
        return a(R, ee);
    }
    throw "Unsupported type " + ee.type;
  }
  var t = ["mmmm", "dd-mmm-yyyy", "dd-mmm", "mmm-yyyy", "@", "mm/dd", "hh:mm:ss AM/PM", "hh:mm AM/PM", "mm/dd/yyyy", "mm/dd", "hh:mm:ss", "hh:mm"];
  function a(R, ee) {
    if (!R) return R;
    var L = ee || {}, U = {}, ue = "Sheet1", O = "", Ce = 0, Ue = {}, Fe = [], ar = [], rr = [];
    L.dense && (rr = U["!data"] = []);
    var or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, br = L.sheetRows || 0, yr = {};
    if (R[4] == 81 && R[5] == 80 && R[6] == 87) return $e(R, ee);
    if (R[2] == 0 && (R[3] == 8 || R[3] == 9) && R.length >= 16 && R[14] == 5 && R[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (R[2] == 2) L.Enum = Oe, e(R, function(Re, Vr, qr) {
      switch (qr) {
        case 0:
          L.vers = Re, Re >= 4096 && (L.qpro = true);
          break;
        case 255:
          L.vers = Re, L.works = true;
          break;
        case 6:
          or = Re;
          break;
        case 204:
          Re && (O = Re);
          break;
        case 222:
          O = Re;
          break;
        case 15:
        case 51:
          (!L.qpro && !L.works || qr == 51) && Re[1].v.charCodeAt(0) < 48 && (Re[1].v = Re[1].v.slice(1)), (L.works || L.works2) && (Re[1].v = Re[1].v.replace(/\r\n/g, `
`));
        case 13:
        case 14:
        case 16:
          (Re[2] & 112) == 112 && (Re[2] & 15) > 1 && (Re[2] & 15) < 15 && (Re[1].z = L.dateNF || t[(Re[2] & 15) - 1] || nr[14], L.cellDates && (Re[1].v = Ba(Re[1].v), Re[1].t = typeof Re[1].v == "number" ? "n" : "d")), L.qpro && Re[3] > Ce && (U["!ref"] = dr(or), Ue[ue] = U, Fe.push(ue), U = {}, L.dense && (rr = U["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Re[3], ue = O || "Sheet" + (Ce + 1), O = "");
          var Mr = L.dense ? (rr[Re[0].r] || [])[Re[0].c] : U[gr(Re[0])];
          if (Mr) {
            Mr.t = Re[1].t, Mr.v = Re[1].v, Re[1].z != null && (Mr.z = Re[1].z), Re[1].f != null && (Mr.f = Re[1].f), yr = Mr;
            break;
          }
          L.dense ? (rr[Re[0].r] || (rr[Re[0].r] = []), rr[Re[0].r][Re[0].c] = Re[1]) : U[gr(Re[0])] = Re[1], yr = Re[1];
          break;
        case 21509:
          L.works2 = true;
          break;
        case 21506:
          Re == 5281 && (yr.z = "hh:mm:ss", L.cellDates && yr.t == "n" && (yr.v = Ba(yr.v), yr.t = typeof yr.v == "number" ? "n" : "d"));
          break;
      }
    }, L);
    else if (R[2] == 26 || R[2] == 14) L.Enum = _e, R[2] == 14 && (L.qpro = true, R.l = 0), e(R, function(Re, Vr, qr) {
      switch (qr) {
        case 204:
          ue = Re;
          break;
        case 22:
          Re[1].v.charCodeAt(0) < 48 && (Re[1].v = Re[1].v.slice(1)), Re[1].v = Re[1].v.replace(/\x0F./g, function(Mr) {
            return String.fromCharCode(Mr.charCodeAt(1) - 32);
          }).replace(/\r\n/g, `
`);
        case 23:
        case 24:
        case 25:
        case 37:
        case 39:
        case 40:
          if (Re[3] > Ce && (U["!ref"] = dr(or), Ue[ue] = U, Fe.push(ue), U = {}, L.dense && (rr = U["!data"] = []), or = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ce = Re[3], ue = "Sheet" + (Ce + 1)), br > 0 && Re[0].r >= br) break;
          L.dense ? (rr[Re[0].r] || (rr[Re[0].r] = []), rr[Re[0].r][Re[0].c] = Re[1]) : U[gr(Re[0])] = Re[1], or.e.c < Re[0].c && (or.e.c = Re[0].c), or.e.r < Re[0].r && (or.e.r = Re[0].r);
          break;
        case 27:
          Re[14e3] && (ar[Re[14e3][0]] = Re[14e3][1]);
          break;
        case 1537:
          ar[Re[0]] = Re[1], Re[0] == Ce && (ue = Re[1]);
          break;
      }
    }, L);
    else throw new Error("Unrecognized LOTUS BOF " + R[2]);
    if (U["!ref"] = dr(or), Ue[O || ue] = U, Fe.push(O || ue), !ar.length) return { SheetNames: Fe, Sheets: Ue };
    for (var Kr = {}, Ge = [], kr = 0; kr < ar.length; ++kr) Ue[Fe[kr]] ? (Ge.push(ar[kr] || Fe[kr]), Kr[ar[kr]] = Ue[ar[kr]] || Ue[Fe[kr]]) : (Ge.push(ar[kr]), Kr[ar[kr]] = { "!ref": "A1" });
    return { SheetNames: Ge, Sheets: Kr };
  }
  function n(R, ee) {
    var L = ee || {};
    if (+L.codepage >= 0 && ua(+L.codepage), L.type == "string") throw new Error("Cannot write WK1 to JS string");
    var U = Rt();
    if (!R["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var ue = Cr(R["!ref"]), O = R["!data"] != null, Ce = [];
    ge(U, 0, s(1030)), ge(U, 6, u(ue));
    for (var Ue = Math.min(ue.e.r, 8191), Fe = ue.s.c; Fe <= ue.e.c; ++Fe) Ce[Fe] = vr(Fe);
    for (var ar = ue.s.r; ar <= Ue; ++ar) {
      var rr = Tr(ar);
      for (Fe = ue.s.c; Fe <= ue.e.c; ++Fe) {
        var or = O ? (R["!data"][ar] || [])[Fe] : R[Ce[Fe] + rr];
        if (!(!or || or.t == "z")) switch (or.t) {
          case "n":
            (or.v | 0) == or.v && or.v >= -32768 && or.v <= 32767 ? ge(U, 13, _(ar, Fe, or)) : ge(U, 14, F(ar, Fe, or));
            break;
          case "d":
            var br = Zr(or.v);
            (br | 0) == br && br >= -32768 && br <= 32767 ? ge(U, 13, _(ar, Fe, { v: br, z: or.z || nr[14] })) : ge(U, 14, F(ar, Fe, { v: br, z: or.z || nr[14] }));
            break;
          default:
            var yr = Ua(or);
            ge(U, 15, x(ar, Fe, yr.slice(0, 239)));
        }
      }
    }
    return ge(U, 1), U.end();
  }
  function i(R, ee) {
    var L = ee || {};
    if (+L.codepage >= 0 && ua(+L.codepage), L.type == "string") throw new Error("Cannot write WK3 to JS string");
    var U = Rt();
    ge(U, 0, f(R));
    for (var ue = 0, O = 0; ue < R.SheetNames.length; ++ue) (R.Sheets[R.SheetNames[ue]] || {})["!ref"] && ge(U, 27, Se(R.SheetNames[ue], O++));
    var Ce = 0;
    for (ue = 0; ue < R.SheetNames.length; ++ue) {
      var Ue = R.Sheets[R.SheetNames[ue]];
      if (!(!Ue || !Ue["!ref"])) {
        for (var Fe = Cr(Ue["!ref"]), ar = Ue["!data"] != null, rr = [], or = Math.min(Fe.e.r, 8191), br = Fe.s.r; br <= or; ++br) for (var yr = Tr(br), Kr = Fe.s.c; Kr <= Fe.e.c; ++Kr) {
          br === Fe.s.r && (rr[Kr] = vr(Kr));
          var Ge = rr[Kr] + yr, kr = ar ? (Ue["!data"][br] || [])[Kr] : Ue[Ge];
          if (!(!kr || kr.t == "z")) if (kr.t == "n") ge(U, 23, de(br, Kr, Ce, kr.v));
          else {
            var Re = Ua(kr);
            ge(U, 22, Z(br, Kr, Ce, Re.slice(0, 239)));
          }
        }
        ++Ce;
      }
    }
    return ge(U, 1), U.end();
  }
  function s(R) {
    var ee = oe(2);
    return ee.write_shift(2, R), ee;
  }
  function f(R) {
    var ee = oe(26);
    ee.write_shift(2, 4096), ee.write_shift(2, 4), ee.write_shift(4, 0);
    for (var L = 0, U = 0, ue = 0, O = 0; O < R.SheetNames.length; ++O) {
      var Ce = R.SheetNames[O], Ue = R.Sheets[Ce];
      if (!(!Ue || !Ue["!ref"])) {
        ++ue;
        var Fe = yt(Ue["!ref"]);
        L < Fe.e.r && (L = Fe.e.r), U < Fe.e.c && (U = Fe.e.c);
      }
    }
    return L > 8191 && (L = 8191), ee.write_shift(2, L), ee.write_shift(1, ue), ee.write_shift(1, U), ee.write_shift(2, 0), ee.write_shift(2, 0), ee.write_shift(1, 1), ee.write_shift(1, 2), ee.write_shift(4, 0), ee.write_shift(4, 0), ee;
  }
  function c(R, ee, L) {
    var U = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return ee == 8 && L.qpro ? (U.s.c = R.read_shift(1), R.l++, U.s.r = R.read_shift(2), U.e.c = R.read_shift(1), R.l++, U.e.r = R.read_shift(2), U) : (U.s.c = R.read_shift(2), U.s.r = R.read_shift(2), ee == 12 && L.qpro && (R.l += 2), U.e.c = R.read_shift(2), U.e.r = R.read_shift(2), ee == 12 && L.qpro && (R.l += 2), U.s.c == 65535 && (U.s.c = U.e.c = U.s.r = U.e.r = 0), U);
  }
  function u(R) {
    var ee = oe(8);
    return ee.write_shift(2, R.s.c), ee.write_shift(2, R.s.r), ee.write_shift(2, R.e.c), ee.write_shift(2, R.e.r), ee;
  }
  function h(R, ee, L) {
    var U = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return L.qpro && L.vers != 20768 ? (U[0].c = R.read_shift(1), U[3] = R.read_shift(1), U[0].r = R.read_shift(2), R.l += 2) : L.works ? (U[0].c = R.read_shift(2), U[0].r = R.read_shift(2), U[2] = R.read_shift(2)) : (U[2] = R.read_shift(1), U[0].c = R.read_shift(2), U[0].r = R.read_shift(2)), U;
  }
  function v(R) {
    return R.z && ia(R.z) ? 240 | (t.indexOf(R.z) + 1 || 2) : 255;
  }
  function d(R, ee, L) {
    var U = R.l + ee, ue = h(R, ee, L);
    if (ue[1].t = "s", (L.vers & 65534) == 20768) {
      R.l++;
      var O = R.read_shift(1);
      return ue[1].v = R.read_shift(O, "utf8"), ue;
    }
    return L.qpro && R.l++, ue[1].v = R.read_shift(U - R.l, "cstr"), ue;
  }
  function x(R, ee, L) {
    var U = oe(7 + L.length);
    U.write_shift(1, 255), U.write_shift(2, ee), U.write_shift(2, R), U.write_shift(1, 39);
    for (var ue = 0; ue < U.length; ++ue) {
      var O = L.charCodeAt(ue);
      U.write_shift(1, O >= 128 ? 95 : O);
    }
    return U.write_shift(1, 0), U;
  }
  function w(R, ee, L) {
    var U = R.l + ee, ue = h(R, ee, L);
    if (ue[1].t = "s", L.vers == 20768) {
      var O = R.read_shift(1);
      return ue[1].v = R.read_shift(O, "utf8"), ue;
    }
    return ue[1].v = R.read_shift(U - R.l, "cstr"), ue;
  }
  function y(R, ee, L) {
    var U = h(R, ee, L);
    return U[1].v = R.read_shift(2, "i"), U;
  }
  function _(R, ee, L) {
    var U = oe(7);
    return U.write_shift(1, v(L)), U.write_shift(2, ee), U.write_shift(2, R), U.write_shift(2, L.v, "i"), U;
  }
  function g(R, ee, L) {
    var U = h(R, ee, L);
    return U[1].v = R.read_shift(8, "f"), U;
  }
  function F(R, ee, L) {
    var U = oe(13);
    return U.write_shift(1, v(L)), U.write_shift(2, ee), U.write_shift(2, R), U.write_shift(8, L.v, "f"), U;
  }
  function E(R, ee, L) {
    var U = R.l + ee, ue = h(R, ee, L);
    if (ue[1].v = R.read_shift(8, "f"), L.qpro) R.l = U;
    else {
      var O = R.read_shift(2);
      A(R.slice(R.l, R.l + O), ue), R.l += O;
    }
    return ue;
  }
  function I(R, ee, L) {
    var U = ee & 32768;
    return ee &= -32769, ee = (U ? R : 0) + (ee >= 8192 ? ee - 16384 : ee), (U ? "" : "$") + (L ? vr(ee) : Tr(ee));
  }
  var V = { 31: ["NA", 0], 33: ["ABS", 1], 34: ["TRUNC", 1], 35: ["SQRT", 1], 36: ["LOG", 1], 37: ["LN", 1], 38: ["PI", 0], 39: ["SIN", 1], 40: ["COS", 1], 41: ["TAN", 1], 42: ["ATAN2", 2], 43: ["ATAN", 1], 44: ["ASIN", 1], 45: ["ACOS", 1], 46: ["EXP", 1], 47: ["MOD", 2], 49: ["ISNA", 1], 50: ["ISERR", 1], 51: ["FALSE", 0], 52: ["TRUE", 0], 53: ["RAND", 0], 54: ["DATE", 3], 63: ["ROUND", 2], 64: ["TIME", 3], 68: ["ISNUMBER", 1], 69: ["ISTEXT", 1], 70: ["LEN", 1], 71: ["VALUE", 1], 73: ["MID", 3], 74: ["CHAR", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 102: ["UPPER", 1], 103: ["LOWER", 1], 107: ["PROPER", 1], 109: ["TRIM", 1], 111: ["T", 1] }, K = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function A(R, ee) {
    lt(R, 0);
    for (var L = [], U = 0, ue = "", O = "", Ce = "", Ue = ""; R.l < R.length; ) {
      var Fe = R[R.l++];
      switch (Fe) {
        case 0:
          L.push(R.read_shift(8, "f"));
          break;
        case 1:
          O = I(ee[0].c, R.read_shift(2), true), ue = I(ee[0].r, R.read_shift(2), false), L.push(O + ue);
          break;
        case 2:
          {
            var ar = I(ee[0].c, R.read_shift(2), true), rr = I(ee[0].r, R.read_shift(2), false);
            O = I(ee[0].c, R.read_shift(2), true), ue = I(ee[0].r, R.read_shift(2), false), L.push(ar + rr + ":" + O + ue);
          }
          break;
        case 3:
          if (R.l < R.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          L.push("(" + L.pop() + ")");
          break;
        case 5:
          L.push(R.read_shift(2));
          break;
        case 6:
          {
            for (var or = ""; Fe = R[R.l++]; ) or += String.fromCharCode(Fe);
            L.push('"' + or.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          L.push("-" + L.pop());
          break;
        case 23:
          L.push("+" + L.pop());
          break;
        case 22:
          L.push("NOT(" + L.pop() + ")");
          break;
        case 20:
        case 21:
          Ue = L.pop(), Ce = L.pop(), L.push(["AND", "OR"][Fe - 20] + "(" + Ce + "," + Ue + ")");
          break;
        default:
          if (Fe < 32 && K[Fe]) Ue = L.pop(), Ce = L.pop(), L.push(Ce + K[Fe] + Ue);
          else if (V[Fe]) {
            if (U = V[Fe][1], U == 69 && (U = R[R.l++]), U > L.length) {
              console.error("WK1 bad formula parse 0x" + Fe.toString(16) + ":|" + L.join("|") + "|");
              return;
            }
            var br = L.slice(-U);
            L.length -= U, L.push(V[Fe][0] + "(" + br.join(",") + ")");
          } else return Fe <= 7 ? console.error("WK1 invalid opcode " + Fe.toString(16)) : Fe <= 24 ? console.error("WK1 unsupported op " + Fe.toString(16)) : Fe <= 30 ? console.error("WK1 invalid opcode " + Fe.toString(16)) : Fe <= 115 ? console.error("WK1 unsupported function opcode " + Fe.toString(16)) : console.error("WK1 unrecognized opcode " + Fe.toString(16));
      }
    }
    L.length == 1 ? ee[1].f = "" + L[0] : console.error("WK1 bad formula parse |" + L.join("|") + "|");
  }
  function H(R) {
    var ee = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return ee[0].r = R.read_shift(2), ee[3] = R[R.l++], ee[0].c = R[R.l++], ee;
  }
  function W(R, ee) {
    var L = H(R);
    return L[1].t = "s", L[1].v = R.read_shift(ee - 4, "cstr"), L;
  }
  function Z(R, ee, L, U) {
    var ue = oe(6 + U.length);
    ue.write_shift(2, R), ue.write_shift(1, L), ue.write_shift(1, ee), ue.write_shift(1, 39);
    for (var O = 0; O < U.length; ++O) {
      var Ce = U.charCodeAt(O);
      ue.write_shift(1, Ce >= 128 ? 95 : Ce);
    }
    return ue.write_shift(1, 0), ue;
  }
  function j(R, ee) {
    var L = H(R);
    L[1].v = R.read_shift(2);
    var U = L[1].v >> 1;
    if (L[1].v & 1) switch (U & 7) {
      case 0:
        U = (U >> 3) * 5e3;
        break;
      case 1:
        U = (U >> 3) * 500;
        break;
      case 2:
        U = (U >> 3) / 20;
        break;
      case 3:
        U = (U >> 3) / 200;
        break;
      case 4:
        U = (U >> 3) / 2e3;
        break;
      case 5:
        U = (U >> 3) / 2e4;
        break;
      case 6:
        U = (U >> 3) / 16;
        break;
      case 7:
        U = (U >> 3) / 64;
        break;
    }
    return L[1].v = U, L;
  }
  function ne(R, ee) {
    var L = H(R), U = R.read_shift(4), ue = R.read_shift(4), O = R.read_shift(2);
    if (O == 65535) return U === 0 && ue === 3221225472 ? (L[1].t = "e", L[1].v = 15) : U === 0 && ue === 3489660928 ? (L[1].t = "e", L[1].v = 42) : L[1].v = 0, L;
    var Ce = O & 32768;
    return O = (O & 32767) - 16446, L[1].v = (1 - Ce * 2) * (ue * Math.pow(2, O + 32) + U * Math.pow(2, O)), L;
  }
  function de(R, ee, L, U) {
    var ue = oe(14);
    if (ue.write_shift(2, R), ue.write_shift(1, L), ue.write_shift(1, ee), U == 0) return ue.write_shift(4, 0), ue.write_shift(4, 0), ue.write_shift(2, 65535), ue;
    var O = 0, Ce = 0, Ue = 0, Fe = 0;
    return U < 0 && (O = 1, U = -U), Ce = Math.log2(U) | 0, U /= Math.pow(2, Ce - 31), Fe = U >>> 0, (Fe & 2147483648) == 0 && (U /= 2, ++Ce, Fe = U >>> 0), U -= Fe, Fe |= 2147483648, Fe >>>= 0, U *= Math.pow(2, 32), Ue = U >>> 0, ue.write_shift(4, Ue), ue.write_shift(4, Fe), Ce += 16383 + (O ? 32768 : 0), ue.write_shift(2, Ce), ue;
  }
  function We(R, ee) {
    var L = ne(R);
    return R.l += ee - 14, L;
  }
  function me(R, ee) {
    var L = H(R), U = R.read_shift(4);
    return L[1].v = U >> 6, L;
  }
  function ze(R, ee) {
    var L = H(R), U = R.read_shift(8, "f");
    return L[1].v = U, L;
  }
  function ke(R, ee) {
    var L = ze(R);
    return R.l += ee - 12, L;
  }
  function Be(R, ee) {
    return R[R.l + ee - 1] == 0 ? R.read_shift(ee, "cstr") : "";
  }
  function Qe(R, ee) {
    var L = R[R.l++];
    L > ee - 1 && (L = ee - 1);
    for (var U = ""; U.length < L; ) U += String.fromCharCode(R[R.l++]);
    return U;
  }
  function he(R, ee, L) {
    if (!(!L.qpro || ee < 21)) {
      var U = R.read_shift(1);
      R.l += 17, R.l += 1, R.l += 2;
      var ue = R.read_shift(ee - 21, "cstr");
      return [U, ue];
    }
  }
  function sr(R, ee) {
    for (var L = {}, U = R.l + ee; R.l < U; ) {
      var ue = R.read_shift(2);
      if (ue == 14e3) {
        for (L[ue] = [0, ""], L[ue][0] = R.read_shift(2); R[R.l]; ) L[ue][1] += String.fromCharCode(R[R.l]), R.l++;
        R.l++;
      }
    }
    return L;
  }
  function Se(R, ee) {
    var L = oe(5 + R.length);
    L.write_shift(2, 14e3), L.write_shift(2, ee);
    for (var U = 0; U < R.length; ++U) {
      var ue = R.charCodeAt(U);
      L[L.l++] = ue > 127 ? 95 : ue;
    }
    return L[L.l++] = 0, L;
  }
  var Oe = { 0: { n: "BOF", f: Qr }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: c }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: y }, 14: { n: "NUMBER", f: g }, 15: { n: "LABEL", f: d }, 16: { n: "FORMULA", f: E }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: w }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: Be }, 222: { n: "SHEETNAMELP", f: Qe }, 255: { n: "BOF", f: Qr }, 21506: { n: "WKSNF", f: Qr }, 65535: { n: "" } }, _e = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: W }, 23: { n: "NUMBER17", f: ne }, 24: { n: "NUMBER18", f: j }, 25: { n: "FORMULA19", f: We }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: sr }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: me }, 38: { n: "??" }, 39: { n: "NUMBER27", f: ze }, 40: { n: "FORMULA28", f: ke }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: Be }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: he }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } }, Ke = { 5: "dd-mmm-yy", 6: "dd-mmm", 7: "mmm-yy", 8: "mm/dd/yy", 10: "hh:mm:ss AM/PM", 11: "hh:mm AM/PM", 14: "dd-mmm-yyyy", 15: "mmm-yyyy", 34: "0.00", 50: "0.00;[Red]0.00", 66: "0.00;(0.00)", 82: "0.00;[Red](0.00)", 162: '"$"#,##0.00;\\("$"#,##0.00\\)', 288: "0%", 304: "0E+00", 320: "# ?/?" };
  function je(R) {
    var ee = R.read_shift(2), L = R.read_shift(1);
    if (L != 0) throw "unsupported QPW string type " + L.toString(16);
    return R.read_shift(ee, "sbcs-cont");
  }
  function $e(R, ee) {
    lt(R, 0);
    var L = ee || {}, U = {};
    L.dense && (U["!data"] = []);
    var ue = [], O = "", Ce = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, Ue = 0, Fe = 0, ar = 0, rr = 0, or = { SheetNames: [], Sheets: {} }, br = [];
    e: for (; R.l < R.length; ) {
      var yr = R.read_shift(2), Kr = R.read_shift(2), Ge = R.slice(R.l, R.l + Kr);
      switch (lt(Ge, 0), yr) {
        case 1:
          if (Ge.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var kr = Ge.read_shift(4), Re = (Ge.length - Ge.l) / kr | 0, Vr = 0; Vr < kr; ++Vr) {
            var qr = Ge.l + Re, Mr = {};
            Ge.l += 2, Mr.numFmtId = Ge.read_shift(2), Ke[Mr.numFmtId] && (Mr.z = Ke[Mr.numFmtId]), Ge.l = qr, br.push(Mr);
          }
          break;
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for (Ge.l += 12; Ge.l < Ge.length; ) Ue = Ge.read_shift(2), Fe = Ge.read_shift(1), ue.push(Ge.read_shift(Ue, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var kt = Ge.read_shift(2);
            U = {}, L.dense && (U["!data"] = []), Ce.s.c = Ge.read_shift(2), Ce.e.c = Ge.read_shift(2), Ce.s.r = Ge.read_shift(4), Ce.e.r = Ge.read_shift(4), Ge.l += 4, Ge.l + 2 < Ge.length && (Ue = Ge.read_shift(2), Fe = Ge.read_shift(1), O = Ue == 0 ? "" : Ge.read_shift(Ue, "cstr")), O || (O = vr(kt));
          }
          break;
        case 1538:
          {
            if (Ce.s.c > 255 || Ce.s.r > 999999) break;
            Ce.e.c < Ce.s.c && (Ce.e.c = Ce.s.c), Ce.e.r < Ce.s.r && (Ce.e.r = Ce.s.r), U["!ref"] = dr(Ce), Yi(or, U, O);
          }
          break;
        case 2561:
          ar = Ge.read_shift(2), Ce.e.c < ar && (Ce.e.c = ar), Ce.s.c > ar && (Ce.s.c = ar), rr = Ge.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), rr = Ge.read_shift(4), Ce.e.r < rr && (Ce.e.r = rr);
          break;
        case 3073:
          {
            rr = Ge.read_shift(4), Ue = Ge.read_shift(4), Ce.s.r > rr && (Ce.s.r = rr), Ce.e.r < rr + Ue - 1 && (Ce.e.r = rr + Ue - 1);
            for (var pt = vr(ar); Ge.l < Ge.length; ) {
              var Ve = { t: "z" }, _r = Ge.read_shift(1), jr = -1;
              _r & 128 && (jr = Ge.read_shift(2));
              var zr = _r & 64 ? Ge.read_shift(2) - 1 : 0;
              switch (_r & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  Ve = { t: "n", v: Ge.read_shift(2) };
                  break;
                case 3:
                  Ve = { t: "n", v: Ge.read_shift(2, "i") };
                  break;
                case 4:
                  Ve = { t: "n", v: $s(Ge) };
                  break;
                case 5:
                  Ve = { t: "n", v: Ge.read_shift(8, "f") };
                  break;
                case 7:
                  Ve = { t: "s", v: ue[Fe = Ge.read_shift(4) - 1] };
                  break;
                case 8:
                  Ve = { t: "n", v: Ge.read_shift(8, "f") }, Ge.l += 2, Ge.l += 4, isNaN(Ve.v) && (Ve = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (_r & 31);
              }
              jr != -1 && (br[jr - 1] || {}).z && (Ve.z = br[jr - 1].z);
              var vt = 0;
              if (_r & 32) switch (_r & 31) {
                case 2:
                  vt = Ge.read_shift(2);
                  break;
                case 3:
                  vt = Ge.read_shift(2, "i");
                  break;
                case 7:
                  vt = Ge.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (_r & 31);
              }
              if (!(!L.sheetStubs && Ve.t == "z")) {
                var Ze = Hr(Ve);
                Ve.t == "n" && Ve.z && ia(Ve.z) && L.cellDates && (Ze.v = Ba(Ve.v), Ze.t = typeof Ze.v == "number" ? "n" : "d"), U["!data"] != null ? (U["!data"][rr] || (U["!data"][rr] = []), U["!data"][rr][ar] = Ze) : U[pt + Tr(rr)] = Ze;
              }
              for (++rr, --Ue; zr-- > 0 && Ue >= 0; ) {
                if (_r & 32) switch (_r & 31) {
                  case 2:
                    Ve = { t: "n", v: Ve.v + vt & 65535 };
                    break;
                  case 3:
                    Ve = { t: "n", v: Ve.v + vt & 65535 }, Ve.v > 32767 && (Ve.v -= 65536);
                    break;
                  case 7:
                    Ve = { t: "s", v: ue[Fe = Fe + vt >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (_r & 31);
                }
                else switch (_r & 31) {
                  case 1:
                    Ve = { t: "z" };
                    break;
                  case 2:
                    Ve = { t: "n", v: Ge.read_shift(2) };
                    break;
                  case 7:
                    Ve = { t: "s", v: ue[Fe = Ge.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (_r & 31);
                }
                !L.sheetStubs && Ve.t == "z" || (U["!data"] != null ? (U["!data"][rr] || (U["!data"][rr] = []), U["!data"][rr][ar] = Ve) : U[pt + Tr(rr)] = Ve), ++rr, --Ue;
              }
            }
          }
          break;
        case 3074:
          {
            ar = Ge.read_shift(2), rr = Ge.read_shift(4);
            var pa = je(Ge);
            U["!data"] != null ? (U["!data"][rr] || (U["!data"][rr] = []), U["!data"][rr][ar] = { t: "s", v: pa }) : U[vr(ar) + Tr(rr)] = { t: "s", v: pa };
          }
          break;
      }
      R.l += Kr;
    }
    return or;
  }
  return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
})();
function yp(e) {
  var r = {}, t = e.match(Tt), a = 0, n = false;
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
        r.cp = of[parseInt(i.val, 10)];
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
var kp = /* @__PURE__ */ (function() {
  function e(a) {
    var n = _t(a, "t");
    if (!n) return { t: "s", v: "" };
    var i = { t: "s", v: Sr(n[1]) }, s = _t(a, "rPr");
    return s && (i.s = yp(s[1])), i;
  }
  var r = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(n) {
    return n.replace(r, "").split(t).map(e).filter(function(i) {
      return i.v;
    });
  };
})(), Ep = /* @__PURE__ */ (function() {
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
})(), Tp = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, Sp = /<(?:\w+:)?r\b[^<>]*>/;
function If(e, r) {
  var t = r ? r.cellHTML : true, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Sr(Pr(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), true), a.r = Pr(e), t && (a.h = xi(a.t))) : e.match(Sp) && (a.r = Pr(e), a.t = Sr(Pr((f1(e, "rPh").match(Tp) || []).join("").replace(Tt, "")), true), t && (a.h = Ep(kp(a.r)))), a) : { t: "" };
}
var Fp = /<(?:\w+:)?(?:si|sstItem)>/g, bp = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Ap(e, r) {
  var t = [], a = "";
  if (!e) return t;
  var n = _t(e, "sst");
  if (n) {
    a = n[1].replace(Fp, "").split(bp);
    for (var i = 0; i != a.length; ++i) {
      var s = If(a[i].trim(), r);
      s != null && (t[t.length] = s);
    }
    n = Ye(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
  }
  return t;
}
var Cp = /^\s|\s$|[\t\n\r]/;
function Dp(e, r) {
  if (!r.bookSST) return "";
  var t = [it];
  t[t.length] = Ae("sst", null, { xmlns: Tn[0], count: e.Count, uniqueCount: e.Unique });
  for (var a = 0; a != e.length; ++a) if (e[a] != null) {
    var n = e[a], i = "<si>";
    n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), typeof n.t != "string" && (n.t = String(n.t)), n.t.match(Cp) && (i += ' xml:space="preserve"'), i += ">" + xr(n.t) + "</t>"), i += "</si>", t[t.length] = i;
  }
  return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Ip(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Op(e, r) {
  var t = [], a = false;
  return Ha(e, function(i, s, f) {
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
function Np(e, r) {
  return r || (r = oe(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var Rp = M1;
function Pp(e) {
  var r = Rt();
  ve(r, 159, Np(e));
  for (var t = 0; t < e.length; ++t) ve(r, 19, Rp(e[t]));
  return ve(r, 160), r.end();
}
function Ku(e) {
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function Ma(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function Bp(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = Ma(e, 4), r.U = Ma(e, 4), r.W = Ma(e, 4), r;
}
function Lp(e) {
  for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return a;
}
function Mp(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(Lp(e));
  return r;
}
function Up(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function Wp(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = Ma(e, 4), r.U = Ma(e, 4), r.W = Ma(e, 4), r;
}
function Hp(e) {
  var r = Wp(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function ju(e, r) {
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
function Gu(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function Vp(e) {
  var r = Ma(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, Xp(e)];
    case 3:
      return [r.Minor, Kp()];
    case 4:
      return [r.Minor, jp(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function Xp(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4), a = ju(e, t), n = Gu(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function Kp() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function jp(e) {
  var r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"), a = {};
  return t.replace(Tt, function(i) {
    var s = Ye(i);
    switch (sa(s[0])) {
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
function Gp(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = Ma(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = ju(e, n), r -= n, t.EncryptionVerifier = Gu(e, r), t;
}
function zp(e) {
  var r = {}, t = r.EncryptionVersionInfo = Ma(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function Of(e) {
  var r = 0, t, a = Ku(e), n = a.length + 1, i, s, f, c, u;
  for (t = Za(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i) s = t[i], f = (r & 16384) === 0 ? 0 : 1, c = r << 1 & 32767, u = f | c, r = u ^ s;
  return r ^ 52811;
}
var zu = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], c = 104, u = s.length - 1; u >= 0; --u) for (var h = s[u], v = 0; v != 7; ++v) h & 64 && (f ^= t[c]), h *= 2, --c;
    return f;
  };
  return function(s) {
    for (var f = Ku(s), c = i(f), u = f.length, h = Za(16), v = 0; v != 16; ++v) h[v] = 0;
    var d, x, w;
    for ((u & 1) === 1 && (d = c >> 8, h[u] = n(e[0], d), --u, d = c & 255, x = f[f.length - 1], h[u] = n(x, d)); u > 0; ) --u, d = c >> 8, h[u] = n(f[u], d), --u, d = c & 255, h[u] = n(f[u], d);
    for (u = 15, w = 15 - f.length; w > 0; ) d = c >> 8, h[u] = n(e[w], d), --u, --w, d = c & 255, h[u] = n(f[u], d), --u, --w;
    return h;
  };
})(), $p = function(e, r, t, a, n) {
  n || (n = r), a || (a = zu(e));
  var i, s;
  for (i = 0; i != r.length; ++i) s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, qp = function(e) {
  var r = 0, t = zu(e);
  return function(a) {
    var n = $p("", a, r, t);
    return r = n[1], n[0];
  };
};
function Yp(e, r, t, a) {
  var n = { key: Qr(e), verificationBytes: Qr(e) };
  return t.password && (n.verifier = Of(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = qp(t.password)), n;
}
function Zp(e, r, t) {
  var a = t || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = zp(e) : a.Data = Gp(e, r), a;
}
function Jp(e, r, t) {
  var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? Zp(e, r - 2, a) : Yp(e, t.biff >= 8 ? r : r - 2, t, a), a;
}
function Qp(e, r) {
  switch (r.type) {
    case "base64":
      return ys(qt(e), r);
    case "binary":
      return ys(e, r);
    case "buffer":
      return ys(pr && Buffer.isBuffer(e) ? e.toString("binary") : ba(e), r);
    case "array":
      return ys(_n(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function ys(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = pf(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(c, u) {
    n && (f = a["!data"][u] = []);
    for (var h = /\\[\w\-]+\b/g, v = 0, d, x = -1, w = []; (d = h.exec(c)) != null; ) {
      var y = c.slice(v, h.lastIndex - d[0].length);
      switch (y.charCodeAt(0) == 32 && (y = y.slice(1)), y.length && w.push(y), d[0]) {
        case "\\cell":
          if (++x, w.length) {
            var _ = { v: w.join(""), t: "s" };
            _.v == "TRUE" || _.v == "FALSE" ? (_.v = _.v == "TRUE", _.t = "b") : isNaN($t(_.v)) ? wt[_.v] != null && (_.t = "e", _.w = _.v, _.v = wt[_.v]) : (_.t = "n", t.cellText !== false && (_.w = _.v), _.v = $t(_.v)), n ? f[x] = _ : a[gr({ r: u, c: x })] = _;
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
  }), a["!ref"] = dr(s), a;
}
function ev(e, r) {
  var t = tn(Qp(e, r), r);
  return t.bookType = "rtf", t;
}
function rv(e, r) {
  var t = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) return t[0] + "}";
  for (var a = Cr(e["!ref"]), n, i = e["!data"] != null, s = [], f = a.s.r; f <= a.e.r; ++f) {
    t.push("\\trowd\\trautofit1");
    for (var c = a.s.c; c <= a.e.c; ++c) t.push("\\cellx" + (c + 1));
    for (t.push("\\pard\\intbl"), i && (s = e["!data"][f] || []), c = a.s.c; c <= a.e.c; ++c) {
      var u = gr({ r: f, c });
      if (n = i ? s[c] : e[u], !n || n.v == null && (!n.f || n.F)) {
        t.push(" \\cell");
        continue;
      }
      t.push(" " + (n.w || (Ua(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function tv(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function Ni(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function av(e) {
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
function nv(e) {
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
function Us(e, r) {
  if (r === 0) return e;
  var t = av(tv(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), Ni(nv(t));
}
var $u = 6, iv = 15, sv = 1, It = $u;
function Ri(e) {
  return Math.floor((e + Math.round(128 / It) / 256) * It);
}
function Pi(e) {
  return Math.floor((e - 5) / It * 100 + 0.5) / 100;
}
function Ws(e) {
  return Math.round((e * It + 5) / It * 256) / 256;
}
function B0(e) {
  return Ws(Pi(Ri(e)));
}
function Nf(e) {
  var r = Math.abs(e - B0(e)), t = It;
  if (r > 5e-3) for (It = sv; It < iv; ++It) Math.abs(e - B0(e)) <= r && (r = Math.abs(e - B0(e)), t = It);
  It = t;
}
function Ja(e) {
  e.width ? (e.wpx = Ri(e.width), e.wch = Pi(e.wpx), e.MDW = It) : e.wpx ? (e.wch = Pi(e.wpx), e.width = Ws(e.wch), e.MDW = It) : typeof e.wch == "number" && (e.width = Ws(e.wch), e.wpx = Ri(e.width), e.MDW = It), e.customWidth && delete e.customWidth;
}
var fv = 96, qu = fv;
function Bi(e) {
  return e * 96 / qu;
}
function qn(e) {
  return e * qu / 96;
}
var ov = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function cv(e, r, t, a) {
  r.Borders = [];
  var n = {}, i = false;
  (e.match(Tt) || []).forEach(function(s) {
    var f = Ye(s);
    switch (sa(f[0])) {
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
function uv(e, r, t, a) {
  r.Fills = [];
  var n = {}, i = false;
  (e.match(Tt) || []).forEach(function(s) {
    var f = Ye(s);
    switch (sa(f[0])) {
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
function lv(e, r, t, a) {
  r.Fonts = [];
  var n = {}, i = false;
  (e.match(Tt) || []).forEach(function(s) {
    var f = Ye(s);
    switch (sa(f[0])) {
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
        f.codepage = of[parseInt(f.val, 10)];
        break;
      case "<charset/>":
      case "</charset>":
      case "</charset":
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = Rr(f.auto)), f.rgb) n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var c = dn[n.color.index];
          n.color.index == 81 && (c = dn[1]), c || (c = dn[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
        } else f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && t.themeElements && t.themeElements.clrScheme && (n.color.rgb = Us(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
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
function hv(e, r, t) {
  r.NumberFmt = [];
  for (var a = Gr(nr), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = nr[a[n]];
  var i = e.match(Tt);
  if (i) for (n = 0; n < i.length; ++n) {
    var s = Ye(i[n]);
    switch (sa(s[0])) {
      case "<numFmts":
      case "</numFmts>":
      case "<numFmts/>":
      case "<numFmts>":
        break;
      case "<numFmt":
        {
          var f = Sr(Pr(s.formatCode)), c = parseInt(s.numFmtId, 10);
          if (r.NumberFmt[c] = f, c > 0) {
            if (c > 392) {
              for (c = 392; c > 60 && r.NumberFmt[c] != null; --c) ;
              r.NumberFmt[c] = f;
            }
            Ya(f, c);
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
function dv(e) {
  var r = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(t) {
    for (var a = t[0]; a <= t[1]; ++a) e[a] != null && (r[r.length] = Ae("numFmt", null, { numFmtId: a, formatCode: xr(e[a]) }));
  }), r.length === 1 ? "" : (r[r.length] = "</numFmts>", r[0] = Ae("numFmts", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var ks = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Es = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function xv(e, r, t) {
  r.CellXf = [];
  var a, n = false;
  (e.match(Tt) || []).forEach(function(i) {
    var s = Ye(i), f = 0;
    switch (sa(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
      case "<xf>":
        for (a = s, delete a[0], f = 0; f < ks.length; ++f) a[ks[f]] && (a[ks[f]] = parseInt(a[ks[f]], 10));
        for (f = 0; f < Es.length; ++f) a[Es[f]] && (a[Es[f]] = Rr(a[Es[f]]));
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
function pv(e) {
  var r = [];
  return r[r.length] = Ae("cellXfs", null), e.forEach(function(t) {
    r[r.length] = Ae("xf", null, t);
  }), r[r.length] = "</cellXfs>", r.length === 2 ? "" : (r[0] = Ae("cellXfs", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var vv = /* @__PURE__ */ (function() {
  return function(t, a, n) {
    var i = {};
    if (!t) return i;
    t = xf(Xi(t, "<!--", "-->"));
    var s;
    return (s = _t(t, "numFmts")) && hv(s[0], i, n), (s = _t(t, "fonts")) && lv(s[0], i, a, n), (s = _t(t, "fills")) && uv(s[0], i, a, n), (s = _t(t, "borders")) && cv(s[0], i, a, n), (s = _t(t, "cellXfs")) && xv(s[0], i, n), i;
  };
})();
function mv(e, r) {
  var t = [it, Ae("styleSheet", null, { xmlns: Tn[0], "xmlns:vt": ht.vt })], a;
  return e.SSF && (a = dv(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = pv(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function gv(e, r) {
  var t = e.read_shift(2), a = Pt(e);
  return [t, a];
}
function _v(e, r, t) {
  t || (t = oe(6 + 4 * r.length)), t.write_shift(2, e), dt(r, t);
  var a = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), a;
}
function wv(e, r, t) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = j1(e);
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
  switch (c > 0 && (a.charset = c), e.l++, a.color = K1(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Pt(e), a;
}
function yv(e, r) {
  r || (r = oe(153)), r.write_shift(2, e.sz * 20), G1(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), Bs(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), dt(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var kv = ["none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"], L0, Ev = Bt;
function uc(e, r) {
  r || (r = oe(84)), L0 || (L0 = Xs(kv));
  var t = L0[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var a = 0;
  if (t != 40) for (Bs({ auto: 1 }, r), Bs({ auto: 1 }, r); a < 12; ++a) r.write_shift(4, 0);
  else {
    for (; a < 4; ++a) r.write_shift(4, 0);
    for (; a < 12; ++a) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function Tv(e, r) {
  var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = t, { ixfe: a, numFmtId: n };
}
function Yu(e, r, t) {
  t || (t = oe(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function li(e, r) {
  return r || (r = oe(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var Sv = Bt;
function Fv(e, r) {
  return r || (r = oe(51)), r.write_shift(1, 0), li(null, r), li(null, r), li(null, r), li(null, r), li(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function bv(e, r) {
  return r || (r = oe(52)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), Ii(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Av(e, r, t) {
  var a = oe(2052);
  return a.write_shift(4, e), Ii(r, a), Ii(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function Cv(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in nr) a.NumberFmt[n] = nr[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = false;
  return Ha(e, function(c, u, h) {
    switch (h) {
      case 44:
        a.NumberFmt[c[0]] = c[1], Ya(c[1], c[0]);
        break;
      case 43:
        a.Fonts.push(c), c.color.theme != null && r && r.themeElements && r.themeElements.clrScheme && (c.color.rgb = Us(r.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0));
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
function Dv(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (ve(e, 615, ha(t)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ve(e, 44, _v(n, r[n]));
    }), ve(e, 616));
  }
}
function Iv(e) {
  var r = 1;
  ve(e, 611, ha(r)), ve(e, 43, yv({ sz: 12, color: { theme: 1 }, name: "Calibri", family: 2 })), ve(e, 612);
}
function Ov(e) {
  var r = 2;
  ve(e, 603, ha(r)), ve(e, 45, uc({ patternType: "none" })), ve(e, 45, uc({ patternType: "gray125" })), ve(e, 604);
}
function Nv(e) {
  var r = 1;
  ve(e, 613, ha(r)), ve(e, 46, Fv()), ve(e, 614);
}
function Rv(e) {
  var r = 1;
  ve(e, 626, ha(r)), ve(e, 47, Yu({ numFmtId: 0 }, 65535)), ve(e, 627);
}
function Pv(e, r) {
  ve(e, 617, ha(r.length)), r.forEach(function(t) {
    ve(e, 47, Yu(t, 0));
  }), ve(e, 618);
}
function Bv(e) {
  var r = 1;
  ve(e, 619, ha(r)), ve(e, 48, bv({ xfId: 0, name: "Normal" })), ve(e, 620);
}
function Lv(e) {
  var r = 0;
  ve(e, 505, ha(r)), ve(e, 506);
}
function Mv(e) {
  var r = 0;
  ve(e, 508, Av(r, "TableStyleMedium9", "PivotStyleMedium4")), ve(e, 509);
}
function Uv(e, r) {
  var t = Rt();
  return ve(t, 278), Dv(t, e.SSF), Iv(t), Ov(t), Nv(t), Rv(t), Pv(t, r.cellXfs), Bv(t), Lv(t), Mv(t), ve(t, 279), t.end();
}
var Wv = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function Hv(e, r, t) {
  r.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(Tt) || []).forEach(function(n) {
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
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[Wv.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (t && t.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function Vv(e, r, t) {
  r.themeElements = {};
  var a;
  if (!(a = hn(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
  if (Hv(a, r, t), !(a = hn(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = hn(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Zu(e, r) {
  (!e || e.length === 0) && (e = Rf());
  var t, a = {};
  if (!(t = hn(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return Vv(t[0], a, r), a.raw = e, a;
}
function Rf(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [it];
  return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', t[t.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', t[t.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", t[t.length] = "</a:theme>", t.join("");
}
function Xv(e, r, t) {
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
      s = Gc(i, { type: "array" });
    } catch {
      return;
    }
    var f = Wt(s, "theme/theme/theme1.xml", true);
    if (f) return Zu(f, t);
  }
}
function Kv(e) {
  return e.read_shift(4);
}
function jv(e) {
  var r = {};
  switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = Gv(e, 4);
      break;
    case 2:
      r.xclrValue = Ou(e);
      break;
    case 3:
      r.xclrValue = Kv(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, r;
}
function Gv(e, r) {
  return Bt(e, r);
}
function zv(e, r) {
  return Bt(e, r);
}
function $v(e) {
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
      a[1] = jv(e);
      break;
    case 6:
      a[1] = zv(e, t);
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
function qv(e, r) {
  var t = e.l + r;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; ) i.push($v(e, t - e.l));
  return { ixfe: a, ext: i };
}
function Yv(e, r) {
  r.forEach(function(t) {
    t[0];
  });
}
function Zv(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Pt(e) };
}
function Jv(e) {
  var r = oe(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), dt(e.name, r), r.slice(0, r.l);
}
function Qv(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function em(e) {
  var r = oe(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function rm(e, r) {
  var t = oe(8 + 2 * r.length);
  return t.write_shift(4, e), dt(r, t), t.slice(0, t.l);
}
function tm(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function am(e, r) {
  var t = oe(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function nm(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] }, n = t || {}, i = [], s = false, f = 2;
  return Ha(e, function(c, u, h) {
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
function im() {
  var e = Rt();
  return ve(e, 332), ve(e, 334, ha(1)), ve(e, 335, Jv({ name: "XLDAPR", version: 12e4, flags: 3496657072 })), ve(e, 336), ve(e, 339, rm(1, "XLDAPR")), ve(e, 52), ve(e, 35, ha(514)), ve(e, 4096, ha(0)), ve(e, 4097, aa(1)), ve(e, 36), ve(e, 53), ve(e, 340), ve(e, 337, am(1)), ve(e, 51, em([[1, 0]])), ve(e, 338), ve(e, 333), e.end();
}
function sm(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = false, i = 2, s;
  return e.replace(Tt, function(f) {
    var c = Ye(f);
    switch (sa(c[0])) {
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
function fm() {
  var e = [it];
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
function om(e) {
  var r = [];
  if (!e) return r;
  var t = 1;
  return (e.match(Tt) || []).forEach(function(a) {
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
function cm(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = gr(t);
  var a = e.read_shift(1);
  return a & 2 && (r.l = "1"), a & 8 && (r.a = "1"), r;
}
function um(e, r, t) {
  var a = [];
  return Ha(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function lm(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = false;
  Ha(e, function(f, c, u) {
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
function hm(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function dm(e, r, t) {
  var a = 0;
  (Xc(e, "shape") || []).forEach(function(n) {
    var i = "", s = true, f = -1, c = -1, u = -1;
    if (n.replace(Tt, function(v, d) {
      var x = Ye(v);
      switch (sa(x[0])) {
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
      var h = Hi(r, c >= 0 && u >= 0 ? gr({ r: c, c: u }) : t[a].ref);
      h.c && (h.c.hidden = s), ++a;
    }
  });
}
function Ju(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [Ae("xml", null, { "xmlns:v": Gt.v, "xmlns:o": Gt.o, "xmlns:x": Gt.x, "xmlns:mv": Gt.mv }).replace(/\/>/, ">"), Ae("o:shapelayout", Ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(Ae("v:shapetype", [Ae("v:stroke", null, { joinstyle: "miter" }), Ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(c) {
    ++s, i.push(xm(c, s));
  }), i.push("</xml>"), i.join("");
}
function xm(e, r, t) {
  var a = Br(e[0]), n = { color2: "#BEFF82", type: "gradient" };
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? Ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = Ae("v:fill", i, n), f = { on: "t", obscured: "t" };
  return ["<v:shape" + Ai({ id: "_x0000_s" + r, type: "#_x0000_t202", style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""), fillcolor: "#ECFAD4", strokecolor: "#edeaa1" }) + ">", s, Ae("v:shadow", null, f), Ae("v:path", null, { "o:connecttype": "none" }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", Et("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")), Et("x:AutoFill", "False"), Et("x:Row", String(a.r)), Et("x:Column", String(a.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"].join("");
}
function lc(e, r, t, a) {
  var n = e["!data"] != null, i;
  r.forEach(function(s) {
    var f = Br(s.ref);
    if (!(f.r < 0 || f.c < 0)) {
      if (n ? (e["!data"][f.r] || (e["!data"][f.r] = []), i = e["!data"][f.r][f.c]) : i = e[s.ref], !i) {
        i = { t: "z" }, n ? e["!data"][f.r][f.c] = i : e[s.ref] = i;
        var c = Cr(e["!ref"] || "BDWGO1000001:A1");
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
function pm(e, r) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var t = [], a = [], n = _t(e, "authors");
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?author[^<>]*>(.*)/);
      f && t.push(f[1]);
    }
  });
  var i = _t(e, "commentList");
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?comment[^<>]*>/);
      if (f) {
        var c = Ye(f[0]), u = { author: c.authorId && t[c.authorId] || "sheetjsghost", ref: c.ref, guid: c.guid }, h = Br(c.ref);
        if (!(r.sheetRows && r.sheetRows <= h.r)) {
          var v = _t(s, "text"), d = !!v && !!v[1] && If(v[1]) || { r: "", t: "", h: "" };
          u.r = d.r, d.r == "<t></t>" && (d.t = d.h = ""), u.t = (d.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (u.h = d.h), a.push(u);
        }
      }
    }
  }), a;
}
function vm(e) {
  var r = [it, Ae("comments", null, { xmlns: Tn[0] })], t = [];
  return r.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = xr(n.a);
      t.indexOf(i) == -1 && (t.push(i), r.push("<author>" + i + "</author>")), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), r.push("<author>tc=" + n.ID + "</author>"));
    });
  }), t.length == 0 && (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")), r.push("</authors>"), r.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [], s = 0;
    if (a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), a[1].forEach(function(u) {
      u.a && (n = t.indexOf(xr(u.a))), u.T && ++s, i.push(u.t == null ? "" : xr(u.t));
    }), s === 0) a[1].forEach(function(u) {
      r.push('<comment ref="' + a[0] + '" authorId="' + t.indexOf(xr(u.a)) + '"><text>'), r.push(Et("t", u.t == null ? "" : xr(u.t))), r.push("</text></comment>");
    });
    else {
      a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), r.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>');
      for (var f = `Comment:
    ` + i[0] + `
`, c = 1; c < i.length; ++c) f += `Reply:
    ` + i[c] + `
`;
      r.push(Et("t", xr(f))), r.push("</text></comment>");
    }
  }), r.push("</commentList>"), r.length > 2 && (r[r.length] = "</comments>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function mm(e, r) {
  var t = [], a = false, n = {}, i = 0;
  return e.replace(Tt, function(f, c) {
    var u = Ye(f);
    switch (sa(u[0])) {
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
function Qu(e, r, t) {
  var a = [it, Ae("ThreadedComments", null, { xmlns: ht.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && r.indexOf(s.a) == -1 && r.push(s.a);
      var c = { ref: n[0], id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t.tcid++).slice(-12) + "}" };
      f == 0 ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r.indexOf(s.a)).slice(-12) + "}"), a.push(Ae("threadedComment", Et("text", s.t || ""), c));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function gm(e, r) {
  var t = [], a = false;
  return e.replace(Tt, function(i) {
    var s = Ye(i);
    switch (sa(s[0])) {
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
function el(e) {
  var r = [it, Ae("personList", null, { xmlns: ht.TCMNT, "xmlns:x": Tn[0] }).replace(/[\/]>/, ">")];
  return e.forEach(function(t, a) {
    r.push(Ae("person", null, { displayName: t, id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}", userId: t, providerId: "None" }));
  }), r.push("</personList>"), r.join("");
}
function _m(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = An(e);
  return r.rfx = t.s, r.ref = gr(t.s), e.l += 16, r;
}
function wm(e, r) {
  return r == null && (r = oe(36)), r.write_shift(4, e[1].iauthor), Jn(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var ym = Pt;
function hc(e) {
  return dt(e.slice(0, 54));
}
function km(e, r) {
  var t = [], a = [], n = {}, i = false;
  return Ha(e, function(f, c, u) {
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
function Em(e) {
  var r = Rt(), t = [];
  return ve(r, 628), ve(r, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), ve(r, 632, hc(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), ve(r, 632, hc("tc=" + n.ID))));
    });
  }), ve(r, 631), ve(r, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: Br(a[0]), e: Br(a[0]) };
      ve(r, 635, wm([s, n])), n.t && n.t.length > 0 && ve(r, 637, W1(n)), ve(r, 636), delete n.iauthor;
    });
  }), ve(r, 634), ve(r, 629), r.end();
}
var Tm = "application/vnd.ms-office.vbaProject";
function Sm(e) {
  var r = ir.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      ir.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), ir.write(r);
}
function Fm(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && ir.utils.cfb_add(e, n, r.FileIndex[a].content);
    }
  });
}
var bm = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function Am() {
  return { "!type": "dialog" };
}
function Cm() {
  return { "!type": "dialog" };
}
function Dm() {
  return { "!type": "macro" };
}
function Im() {
  return { "!type": "macro" };
}
var vn = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = { r: 0, c: 0 };
  function t(a, n, i, s) {
    var f = false, c = false;
    i.length == 0 ? c = true : i.charAt(0) == "[" && (c = true, i = i.slice(1, -1)), s.length == 0 ? f = true : s.charAt(0) == "[" && (f = true, s = s.slice(1, -1));
    var u = i.length > 0 ? parseInt(i, 10) | 0 : 0, h = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? h += r.c : --h, c ? u += r.r : --u, n + (f ? "" : "$") + vr(h) + (c ? "" : "$") + Tr(u);
  }
  return function(n, i) {
    return r = i, n.replace(e, t);
  };
})(), Ys = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  Ys = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {
}
var Zs = /* @__PURE__ */ (function() {
  return function(r, t) {
    return r.replace(Ys, function(a, n, i, s, f, c) {
      var u = Ef(s) - (i ? 0 : t.c), h = kf(c) - (f ? 0 : t.r), v = f == "$" ? h + 1 : h == 0 ? "" : "[" + h + "]", d = i == "$" ? u + 1 : u == 0 ? "" : "[" + u + "]";
      return n + "R" + v + "C" + d;
    });
  };
})();
function rl(e, r) {
  return e.replace(Ys, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : vr(Ef(i) + r.c)) + (s == "$" ? s + f : Tr(kf(f) + r.r));
  });
}
function dc(e, r, t) {
  var a = yt(r), n = a.s, i = Br(t), s = { r: i.r - n.r, c: i.c - n.c };
  return rl(e, s);
}
function Om(e) {
  return e.length != 1;
}
function xc(e) {
  return e.replace(/_xlfn\./g, "");
}
function ot(e) {
  e.l += 1;
}
function Qa(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function tl(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return al(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = Qa(e), f = Qa(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function al(e) {
  var r = Qa(e), t = Qa(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function Nm(e, r, t) {
  if (t.biff < 8) return al(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = Qa(e), s = Qa(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function nl(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return Rm(e);
  var a = e.read_shift(t && t.biff == 12 ? 4 : 2), n = Qa(e);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function Rm(e) {
  var r = Qa(e), t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function Pm(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return { r, c: t & 255, fQuoted: !!(t & 16384), cRel: t >> 15, rRel: t >> 15 };
}
function Bm(e, r, t) {
  var a = t && t.biff ? t.biff : 8;
  if (a >= 2 && a <= 5) return Lm(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1) for (; n > 524287; ) n -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function Lm(e) {
  var r = e.read_shift(2), t = e.read_shift(1), a = (r & 32768) >> 15, n = (r & 16384) >> 14;
  return r &= 16383, a == 1 && r >= 8192 && (r = r - 16384), n == 1 && t >= 128 && (t = t - 256), { r, c: t, cRel: n, rRel: a };
}
function Mm(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = tl(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [a, n];
}
function Um(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = tl(e, i, t);
  return [a, n, s];
}
function Wm(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
}
function Hm(e, r, t) {
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
function Vm(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = Nm(e, r - 1, t);
  return [a, n];
}
function Xm(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [a];
}
function pc(e) {
  var r = e[e.l + 1] & 1, t = 1;
  return e.l += 4, [r, t];
}
function Km(e, r, t) {
  e.l += 2;
  for (var a = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function jm(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function Gm(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function zm(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [r, e.read_shift(2)];
}
function $m(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += t && t.biff == 2 ? 3 : 4, [a];
}
function il(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function qm(e) {
  return e.read_shift(2), il(e);
}
function Ym(e) {
  return e.read_shift(2), il(e);
}
function Zm(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = nl(e, 0, t);
  return [a, n];
}
function Jm(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Bm(e, 0, t);
  return [a, n];
}
function Qm(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var i = nl(e, 0, t);
  return [a, n, i];
}
function eg(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [x2[n], ol[n], a];
}
function rg(e, r, t) {
  var a = e[e.l++], n = e.read_shift(1), i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : tg(e);
  return [n, (i[0] === 0 ? ol : d2)[i[1]]];
}
function tg(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function ag(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function ng(e, r, t) {
  if (e.l++, t && t.biff == 12) return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function ig(e) {
  return e.l++, xt[e.read_shift(1)];
}
function sg(e) {
  return e.l++, e.read_shift(2);
}
function fg(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function og(e) {
  return e.l++, Ot(e);
}
function cg(e, r, t) {
  return e.l++, zn(e, r - 1, t);
}
function ug(e, r) {
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
      t[1] = tt(e, 1) ? "TRUE" : "FALSE", r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      t[1] = xt[e[e.l]], e.l += r == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Ot(e);
      break;
    case 2:
      t[1] = Cn(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function lg(e, r, t) {
  for (var a = e.read_shift(t.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((t.biff == 12 ? An : qs)(e));
  return n;
}
function hg(e, r, t) {
  var a = 0, n = 0;
  t.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i) for (var f = 0; f != n; ++f) s[i][f] = ug(e, t.biff);
  return s;
}
function dg(e, r, t) {
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
function xg(e, r, t) {
  if (t.biff == 5) return pg(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function pg(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function vg(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function mg(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function gg(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [a];
}
function _g(e, r, t) {
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
var wg = Bt, yg = Bt, kg = Bt;
function zi(e, r, t) {
  return e.l += 2, [Pm(e)];
}
function Pf(e) {
  return e.l += 6, [];
}
var Eg = zi, Tg = Pf, Sg = Pf, Fg = zi;
function sl(e) {
  return e.l += 2, [Qr(e), e.read_shift(2) & 1];
}
var bg = zi, Ag = sl, Cg = Pf, Dg = zi, Ig = zi, Og = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function Ng(e) {
  e.l += 2;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = Og[t >> 2 & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
}
function Rg(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Pg(e, r, t) {
  return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Bg(e, r, t) {
  return e.l += t.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Lg(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function Mg(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function Ug(e) {
  return e.l += 4, [0, 0];
}
var vc = { 1: { n: "PtgExp", f: ng }, 2: { n: "PtgTbl", f: kg }, 3: { n: "PtgAdd", f: ot }, 4: { n: "PtgSub", f: ot }, 5: { n: "PtgMul", f: ot }, 6: { n: "PtgDiv", f: ot }, 7: { n: "PtgPower", f: ot }, 8: { n: "PtgConcat", f: ot }, 9: { n: "PtgLt", f: ot }, 10: { n: "PtgLe", f: ot }, 11: { n: "PtgEq", f: ot }, 12: { n: "PtgGe", f: ot }, 13: { n: "PtgGt", f: ot }, 14: { n: "PtgNe", f: ot }, 15: { n: "PtgIsect", f: ot }, 16: { n: "PtgUnion", f: ot }, 17: { n: "PtgRange", f: ot }, 18: { n: "PtgUplus", f: ot }, 19: { n: "PtgUminus", f: ot }, 20: { n: "PtgPercent", f: ot }, 21: { n: "PtgParen", f: ot }, 22: { n: "PtgMissArg", f: ot }, 23: { n: "PtgStr", f: cg }, 26: { n: "PtgSheet", f: Pg }, 27: { n: "PtgEndSheet", f: Bg }, 28: { n: "PtgErr", f: ig }, 29: { n: "PtgBool", f: fg }, 30: { n: "PtgInt", f: sg }, 31: { n: "PtgNum", f: og }, 32: { n: "PtgArray", f: Xm }, 33: { n: "PtgFunc", f: eg }, 34: { n: "PtgFuncVar", f: rg }, 35: { n: "PtgName", f: dg }, 36: { n: "PtgRef", f: Zm }, 37: { n: "PtgArea", f: Mm }, 38: { n: "PtgMemArea", f: vg }, 39: { n: "PtgMemErr", f: wg }, 40: { n: "PtgMemNoMem", f: yg }, 41: { n: "PtgMemFunc", f: mg }, 42: { n: "PtgRefErr", f: gg }, 43: { n: "PtgAreaErr", f: Wm }, 44: { n: "PtgRefN", f: Jm }, 45: { n: "PtgAreaN", f: Vm }, 46: { n: "PtgMemAreaN", f: Lg }, 47: { n: "PtgMemNoMemN", f: Mg }, 57: { n: "PtgNameX", f: xg }, 58: { n: "PtgRef3d", f: Qm }, 59: { n: "PtgArea3d", f: Um }, 60: { n: "PtgRefErr3d", f: _g }, 61: { n: "PtgAreaErr3d", f: Hm }, 255: {} }, Wg = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, Hg = { 1: { n: "PtgElfLel", f: sl }, 2: { n: "PtgElfRw", f: Dg }, 3: { n: "PtgElfCol", f: Eg }, 6: { n: "PtgElfRwV", f: Ig }, 7: { n: "PtgElfColV", f: Fg }, 10: { n: "PtgElfRadical", f: bg }, 11: { n: "PtgElfRadicalS", f: Cg }, 13: { n: "PtgElfColS", f: Tg }, 15: { n: "PtgElfColSV", f: Sg }, 16: { n: "PtgElfRadicalLel", f: Ag }, 25: { n: "PtgList", f: Ng }, 29: { n: "PtgSxName", f: Rg }, 255: {} }, Vg = { 0: { n: "PtgAttrNoop", f: Ug }, 1: { n: "PtgAttrSemi", f: $m }, 2: { n: "PtgAttrIf", f: Gm }, 4: { n: "PtgAttrChoose", f: Km }, 8: { n: "PtgAttrGoto", f: jm }, 16: { n: "PtgAttrSum", f: ag }, 32: { n: "PtgAttrBaxcel", f: pc }, 33: { n: "PtgAttrBaxcel", f: pc }, 64: { n: "PtgAttrSpace", f: qm }, 65: { n: "PtgAttrSpaceSemi", f: Ym }, 128: { n: "PtgAttrIfError", f: zm }, 255: {} };
function $i(e, r, t, a) {
  if (a.biff < 8) return Bt(e, r);
  for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s) switch (t[s][0]) {
    case "PtgArray":
      t[s][1] = hg(e, 0, a), i.push(t[s][1]);
      break;
    case "PtgMemArea":
      t[s][2] = lg(e, t[s][1], a), i.push(t[s][2]);
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
  return r = n - e.l, r !== 0 && i.push(Bt(e, r)), i;
}
function qi(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; ) r = a - e.l, i = e[e.l], n = vc[i] || vc[Wg[i]], (i === 24 || i === 25) && (n = (i === 24 ? Hg : Vg)[e[e.l + 1]]), !n || !n.f ? Bt(e, r) : s.push([n.n, n.f(e, r, t)]);
  return s;
}
function Xg(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      s ? s[0] === 2 ? n.push('"' + s[1].replace(/"/g, '""') + '"') : n.push(s[1]) : n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var Kg = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function jg(e, r) {
  var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
  return t == -1 && a == -1 ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function fl(e, r, t) {
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
function mc(e, r, t) {
  var a = fl(e, r, t);
  return a == "#REF" ? a : Di(a, t);
}
function Dt(e, r, t, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 } }, f = [], c, u, h, v = 0, d = 0, x, w = "";
  if (!e[0] || !e[0][0]) return "";
  for (var y = -1, _ = "", g = 0, F = e[0].length; g < F; ++g) {
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
              _ = Fr(" ", e[0][y][1][1]);
              break;
            case 1:
              _ = Fr("\r", e[0][y][1][1]);
              break;
            default:
              if (_ = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          u = u + _, y = -1;
        }
        f.push(u + Kg[E[0]] + c);
        break;
      case "PtgIsect":
        c = f.pop(), u = f.pop(), f.push(u + " " + c);
        break;
      case "PtgUnion":
        c = f.pop(), u = f.pop(), f.push(u + "," + c);
        break;
      case "PtgRange":
        c = f.pop(), u = f.pop(), f.push(jg(u, c));
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
        h = vi(E[1][1], s, n), f.push(mi(h, i));
        break;
      case "PtgRefN":
        h = t ? vi(E[1][1], t, n) : E[1][1], f.push(mi(h, i));
        break;
      case "PtgRef3d":
        v = E[1][1], h = vi(E[1][2], s, n), w = mc(a, v, n), f.push(w + "!" + mi(h, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var I = E[1][0], V = E[1][1];
        I || (I = 0), I &= 127;
        var K = I == 0 ? [] : f.slice(-I);
        f.length -= I, V === "User" && (V = K.shift()), f.push(V + "(" + K.join(",") + ")");
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
        x = Ko(E[1][1], t ? { s: t } : s, n), f.push(I0(x, n));
        break;
      case "PtgArea":
        x = Ko(E[1][1], s, n), f.push(I0(x, n));
        break;
      case "PtgArea3d":
        v = E[1][1], x = E[1][2], w = mc(a, v, n), f.push(w + "!" + I0(x, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        d = E[1][2];
        var A = (a.names || [])[d - 1] || (a[0] || [])[d], H = A ? A.Name : "SH33TJSNAME" + String(d);
        H && H.slice(0, 6) == "_xlfn." && !n.xlfn && (H = H.slice(6)), f.push(H);
        break;
      case "PtgNameX":
        var W = E[1][1];
        d = E[1][2];
        var Z;
        if (n.biff <= 5) W < 0 && (W = -W), a[W] && (Z = a[W][d]);
        else {
          var j = "";
          if (((a[W] || [])[0] || [])[0] == 14849 || (((a[W] || [])[0] || [])[0] == 1025 ? a[W][d] && a[W][d].itab > 0 && (j = a.SheetNames[a[W][d].itab - 1] + "!") : j = a.SheetNames[d - 1] + "!"), a[W] && a[W][d]) j += a[W][d].Name;
          else if (a[0] && a[0][d]) j += a[0][d].Name;
          else {
            var ne = (fl(a, W, n) || "").split(";;");
            ne[d - 1] ? j = ne[d - 1] : j += "SH33TJSERRX";
          }
          f.push(j);
          break;
        }
        Z || (Z = { Name: "SH33TJSERRY" }), f.push(Z.Name);
        break;
      case "PtgParen":
        var de = "(", We = ")";
        if (y >= 0) {
          switch (_ = "", e[0][y][1][0]) {
            case 2:
              de = Fr(" ", e[0][y][1][1]) + de;
              break;
            case 3:
              de = Fr("\r", e[0][y][1][1]) + de;
              break;
            case 4:
              We = Fr(" ", e[0][y][1][1]) + We;
              break;
            case 5:
              We = Fr("\r", e[0][y][1][1]) + We;
              break;
            default:
              if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          y = -1;
        }
        f.push(de + f.pop() + We);
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
        if (a.sharedf[gr(h)]) {
          var ze = a.sharedf[gr(h)];
          f.push(Dt(ze, s, me, a, n));
        } else {
          var ke = false;
          for (c = 0; c != a.arrayf.length; ++c) if (u = a.arrayf[c], !(h.c < u[0].s.c || h.c > u[0].e.c) && !(h.r < u[0].s.r || h.r > u[0].e.r)) {
            f.push(Dt(u[1], s, me, a, n)), ke = true;
            break;
          }
          ke || f.push(E[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + Xg(E[1]) + "}");
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
          _ = Fr(" ", E[1][1]);
          break;
        case 5:
          Qe = false;
        case 1:
          _ = Fr("\r", E[1][1]);
          break;
        default:
          if (_ = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + E[1][0]);
      }
      f.push((Qe ? _ : "") + f.pop() + (Qe ? "" : _)), y = -1;
    }
  }
  if (f.length > 1 && n.WTF) throw new Error("bad formula stack");
  return f[0] == "TRUE" ? true : f[0] == "FALSE" ? false : f[0];
}
function Gg(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Bt(e, r - 2)];
  var f = qi(e, s, t);
  return r !== s + n && (i = $i(e, r - s - n, f, t)), e.l = a, [f, i];
}
function zg(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], Bt(e, r - 2)];
  var f = qi(e, s, t);
  return r !== s + n && (i = $i(e, r - s - n, f, t)), e.l = a, [f, i];
}
function $g(e, r, t, a) {
  var n = e.l + r, i = qi(e, a, t), s;
  return n !== e.l && (s = $i(e, n - e.l, i, t)), [i, s];
}
function qg(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = qi(e, i, t);
  return i == 65535 ? [[], Bt(e, r - 2)] : (r !== i + 2 && (n = $i(e, a - i - 2, s, t)), [s, n]);
}
function Yg(e) {
  var r;
  if (Ra(e, e.l + 6) !== 65535) return [Ot(e), "n"];
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
function Zg(e) {
  if (e == null) {
    var r = oe(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return yn(e);
  return yn(0);
}
function M0(e, r, t) {
  var a = e.l + r, n = xa(e, 6, t), i = Yg(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = zg(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function Jg(e, r, t, a, n) {
  var i = En(r, t, n), s = Zg(e.v), f = oe(6), c = 33;
  f.write_shift(2, c), f.write_shift(4, 0);
  for (var u = oe(e.bf.length), h = 0; h < e.bf.length; ++h) u[h] = e.bf[h];
  var v = at([i, s, f, u]);
  return v;
}
function Js(e, r, t) {
  var a = e.read_shift(4), n = qi(e, a, t), i = e.read_shift(4), s = i > 0 ? $i(e, i, n, t) : null;
  return [n, s];
}
var Qg = Js, Qs = Js, e2 = Js, r2 = Js;
function gc(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var r = oe(11);
    return r.write_shift(4, 3), r.write_shift(1, 30), r.write_shift(2, e), r.write_shift(4, 0), r;
  }
  var t = oe(17);
  return t.write_shift(4, 11), t.write_shift(1, 31), t.write_shift(8, e), t.write_shift(4, 0), t;
}
function t2(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 28), r.write_shift(1, e), r.write_shift(4, 0), r;
}
function a2(e) {
  var r = oe(10);
  return r.write_shift(4, 2), r.write_shift(1, 29), r.write_shift(1, e ? 1 : 0), r.write_shift(4, 0), r;
}
function n2(e) {
  var r = oe(7);
  r.write_shift(4, 3 + 2 * e.length), r.write_shift(1, 23), r.write_shift(2, e.length);
  var t = oe(2 * e.length);
  t.write_shift(2 * e.length, e, "utf16le");
  var a = oe(4);
  return a.write_shift(4, 0), at([r, t, a]);
}
function i2(e) {
  var r = Br(e), t = oe(15);
  return t.write_shift(4, 7), t.write_shift(1, 36), t.write_shift(4, r.r), t.write_shift(2, r.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), t.write_shift(4, 0), t;
}
function s2(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1);
  var n = Br(e);
  a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var i = oe(17);
  return i.write_shift(4, 9), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.r), i.write_shift(2, n.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(4, 0), i;
}
function f2(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = oe(17);
  return n.write_shift(4, 9), n.write_shift(1, 60), n.write_shift(2, 2 + r.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase())), n.write_shift(4, 0), n.write_shift(2, 0), n.write_shift(4, 0), n;
}
function o2(e) {
  var r = e.split(":"), t = r[0], a = oe(23);
  a.write_shift(4, 15), t = r[0];
  var n = Br(t);
  return a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), t = r[1], n = Br(t), a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), a.write_shift(1, 17), a.write_shift(4, 0), a;
}
function c2(e, r) {
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
function u2(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = yt(e), i = oe(23);
  return i.write_shift(4, 15), i.write_shift(1, 59), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.s.r), i.write_shift(4, n.e.r), i.write_shift(2, n.s.c), i.write_shift(2, n.e.c), i.write_shift(4, 0), i;
}
function l2(e, r) {
  if (typeof e == "number") return gc(e);
  if (typeof e == "boolean") return a2(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return t2(+wt[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return i2(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return o2(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return u2(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return s2(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return c2(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return f2(e, r);
  if (/^".*"$/.test(e)) return n2(e);
  if (/^[+-]\d+$/.test(e)) return gc(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var h2 = l2, d2 = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, ol = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, x2 = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function _c(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(r, t) {
    return t.replace(/\./g, "");
  }), e = e.replace(/\$'([^']|'')+'/g, function(r) {
    return r.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(r, t) {
    return t.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? r : t;
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function p2(e) {
  var r = "of:=" + e.replace(Ys, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return r.replace(/;/g, "|").replace(/,/g, ";");
}
function U0(e) {
  e = e.replace(/\$'([^']|'')+'/g, function(a) {
    return a.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(a, n) {
    return n.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? a : n;
  });
  var r = e.split(":"), t = r[0].split(".")[0];
  return [t, r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")];
}
function cl(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var wi = {}, Xn = {}, yi = typeof Map < "u";
function Bf(e, r, t) {
  var a = 0, n = e.length;
  if (t) {
    if (yi ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var i = yi ? t.get(r) : t[r]; a < i.length; ++a) if (e[i[a]].t === r) return e.Count++, i[a];
    }
  } else for (; a < n; ++a) if (e[a].t === r) return e.Count++, a;
  return e[n] = { t: r }, e.Count++, e.Unique++, t && (yi ? (t.has(r) || t.set(r, []), t.get(r).push(n)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n))), n;
}
function e0(e, r) {
  var t = { min: e + 1, max: e + 1 }, a = -1;
  return r.MDW && (It = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = Pi(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = Ws(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = true), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function mn(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function an(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      Ya(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = { numFmtId: a, fontId: 0, fillId: 0, borderId: 0, xfId: 0, applyNumberFormat: 1 }, i;
}
function ul(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = nr[r]);
  } catch (c) {
    if (a.WTF) throw c;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = $r(e.v)), (!a || a.cellText !== false) && e.t !== "z") try {
      if (nr[r] == null && Ya(Wh[r] || "General", r), e.t === "e") e.w = e.w || xt[e.v];
      else if (r === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Fi(e.v);
      else if (e.t === "d") {
        var f = Zr(e.v, !!s);
        (f | 0) === f ? e.w = f.toString(10) : e.w = Fi(f);
      } else {
        if (e.v === void 0) return "";
        e.w = gn(e.v, Xn);
      }
      else e.t === "d" ? e.w = Yt(r, Zr(e.v, !!s), Xn) : e.w = Yt(r, e.v, Xn);
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (a.cellStyles && t != null) try {
      e.s = i.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = Us(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = Us(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
    } catch (c) {
      if (a.WTF && i.Fills) throw c;
    }
  }
}
function v2(e, r, t) {
  if (e && e["!ref"]) {
    var a = Cr(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
  }
}
function m2(e, r) {
  var t = Cr(r);
  t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = dr(t));
}
var g2 = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, _2 = /<(?:\w+:)?hyperlink [^<>]*>/mg, w2 = /"(\w*:\w*)"/, y2 = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, k2 = /<(?:\w+:)?autoFilter[^>]*/g, E2 = /<(?:\w+:)?pageMargins[^<>]*\/>/g, ll = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function T2(e, r, t, a, n, i, s) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var f = {};
  r.dense && (f["!data"] = []);
  var c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = "", h = "", v = _t(e, "sheetData");
  v ? (u = e.slice(0, v.index), h = e.slice(v.index + v[0].length)) : u = h = e;
  var d = u.match(ll);
  d ? Lf(d[0], f, n, t) : (d = _t(u, "sheetPr")) && F2(d[0], d[1] || "", f, n, t);
  var x = (u.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (x > 0) {
    var w = u.slice(x, x + 50).match(w2);
    w && !(r && r.nodim) && m2(f, w[1]);
  }
  var y = _t(u, "sheetViews");
  y && y[1] && U2(y[1], n);
  var _ = [];
  if (r.cellStyles) {
    var g = u.match(y2);
    g && R2(_, g);
  }
  v && V2(v[1], f, r, c, i, s, n);
  var F = h.match(k2);
  F && (f["!autofilter"] = B2(F[0]));
  var E = [], I = h.match(g2);
  if (I) for (x = 0; x != I.length; ++x) E[x] = Cr(I[x].slice(I[x].indexOf("=") + 2));
  var V = h.match(_2);
  V && I2(f, V, a);
  var K = h.match(E2);
  K && (f["!margins"] = O2(Ye(K[0])));
  var A;
  if ((A = h.match(/legacyDrawing r:id="(.*?)"/)) && (f["!legrel"] = A[1]), r && r.nodim && (c.s.c = c.s.r = 0), !f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (f["!ref"] = dr(c)), r.sheetRows > 0 && f["!ref"]) {
    var H = Cr(f["!ref"]);
    r.sheetRows <= +H.e.r && (H.e.r = r.sheetRows - 1, H.e.r > c.e.r && (H.e.r = c.e.r), H.e.r < H.s.r && (H.s.r = H.e.r), H.e.c > c.e.c && (H.e.c = c.e.c), H.e.c < H.s.c && (H.s.c = H.e.c), f["!fullref"] = f["!ref"], f["!ref"] = dr(H));
  }
  return _.length > 0 && (f["!cols"] = _), E.length > 0 && (f["!merges"] = E), a["!id"][f["!legrel"]] && (f["!legdrawel"] = a["!id"][f["!legrel"]]), f;
}
function S2(e) {
  if (e.length === 0) return "";
  for (var r = '<mergeCells count="' + e.length + '">', t = 0; t != e.length; ++t) r += '<mergeCell ref="' + dr(e[t]) + '"/>';
  return r + "</mergeCells>";
}
function Lf(e, r, t, a) {
  var n = Ye(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Sr(Pr(n.codeName)));
}
function F2(e, r, t, a, n) {
  Lf(e.slice(0, e.indexOf(">")), t, a, n);
}
function b2(e, r, t, a, n) {
  var i = false, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var c = r.SheetNames[t];
    try {
      r.Workbook && (c = r.Workbook.Sheets[t].CodeName || c);
    } catch {
    }
    i = true, s.codeName = Fa(xr(c));
  }
  if (e && e["!outline"]) {
    var u = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (u.summaryBelow = 0), e["!outline"].left && (u.summaryRight = 0), f = (f || "") + Ae("outlinePr", null, u);
  }
  !i && !f || (n[n.length] = Ae("sheetPr", f, s));
}
var A2 = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], C2 = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];
function D2(e) {
  var r = { sheet: 1 };
  return A2.forEach(function(t) {
    e[t] != null && e[t] && (r[t] = "1");
  }), C2.forEach(function(t) {
    e[t] != null && !e[t] && (r[t] = "0");
  }), e.password && (r.password = Of(e.password).toString(16).toUpperCase()), Ae("sheetProtection", null, r);
}
function I2(e, r, t) {
  for (var a = e["!data"] != null, n = 0; n != r.length; ++n) {
    var i = Ye(Pr(r[n]), true);
    if (!i.ref) return;
    var s = ((t || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Sr(i.location))) : (i.Target = "#" + Sr(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Cr(i.ref), c = f.s.r; c <= f.e.r; ++c) for (var u = f.s.c; u <= f.e.c; ++u) {
      var h = vr(u) + Tr(c);
      a ? (e["!data"][c] || (e["!data"][c] = []), e["!data"][c][u] || (e["!data"][c][u] = { t: "z", v: void 0 }), e["!data"][c][u].l = i) : (e[h] || (e[h] = { t: "z", v: void 0 }), e[h].l = i);
    }
  }
}
function O2(e) {
  var r = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
    e[t] && (r[t] = parseFloat(e[t]));
  }), r;
}
function N2(e) {
  return mn(e), Ae("pageMargins", null, e);
}
function R2(e, r) {
  for (var t = false, a = 0; a != r.length; ++a) {
    var n = Ye(r[a], true);
    n.hidden && (n.hidden = Rr(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = true, Nf(n.width)), Ja(n); i <= s; ) e[i++] = Hr(n);
  }
}
function P2(e, r) {
  for (var t = ["<cols>"], a, n = 0; n != r.length; ++n) (a = r[n]) && (t[t.length] = Ae("col", null, e0(n, a)));
  return t[t.length] = "</cols>", t.join("");
}
function B2(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
function L2(e, r, t, a) {
  var n = typeof e.ref == "string" ? e.ref : dr(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
  var i = t.Workbook.Names, s = yt(n);
  s.s.r == s.e.r && (s.e.r = yt(r["!ref"]).e.r, n = dr(s));
  for (var f = 0; f < i.length; ++f) {
    var c = i[f];
    if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == a) {
      c.Ref = Di(t.SheetNames[a]) + "!" + Ci(n);
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + t.SheetNames[a] + "'!" + n }), Ae("autoFilter", null, { ref: n });
}
var M2 = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g;
function U2(e, r) {
  r.Views || (r.Views = [{}]), (e.match(M2) || []).forEach(function(t, a) {
    var n = Ye(t);
    r.Views[a] || (r.Views[a] = {}), +n.zoomScale && (r.Views[a].zoom = +n.zoomScale), n.rightToLeft && Rr(n.rightToLeft) && (r.Views[a].RTL = true);
  });
}
function W2(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), Ae("sheetViews", Ae("sheetView", null, n), {});
}
function H2(e, r, t, a, n, i, s) {
  if (e.c && t["!comments"].push([r, e.c]), (e.v === void 0 || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var f = "", c = e.t, u = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      f = e.v ? "1" : "0";
      break;
    case "n":
      isNaN(e.v) ? (e.t = "e", f = xt[e.v = 36]) : isFinite(e.v) ? f = "" + e.v : (e.t = "e", f = xt[e.v = 7]);
      break;
    case "e":
      f = xt[e.v];
      break;
    case "d":
      if (a && a.cellDates) {
        var h = $r(e.v, s);
        f = h.toISOString(), h.getUTCFullYear() < 1900 && (f = f.slice(f.indexOf("T") + 1).replace("Z", ""));
      } else e = Hr(e), e.t = "n", f = "" + (e.v = Zr($r(e.v, s), s));
      typeof e.z > "u" && (e.z = nr[14]);
      break;
    default:
      f = e.v;
      break;
  }
  var v = e.t == "z" || e.v == null ? "" : Et("v", xr(f)), d = { r }, x = an(a.cellXfs, e, a);
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
        v = Et("v", "" + Bf(a.Strings, e.v, a.revStrings)), d.t = "s";
        break;
      } else d.t = "str";
      break;
  }
  if (e.t != c && (e.t = c, e.v = u), typeof e.f == "string" && e.f) {
    var w = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    v = Ae("f", xr(e.f), w) + (e.v != null ? v : "");
  }
  return e.l && (e.l.display = xr(f), t["!links"].push([r, e.l])), e.D && (d.cm = 1), Ae("c", v, d);
}
var V2 = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, c, u, h, v) {
    for (var d = 0, x = "", w = [], y = [], _ = 0, g = 0, F = 0, E = "", I, V, K = 0, A = 0, H, W, Z = 0, j = 0, ne = Array.isArray(h.CellXf), de, We = [], me = [], ze = s["!data"] != null, ke = [], Be = {}, Qe = false, he = !!f.sheetStubs, sr = !!((v || {}).WBProps || {}).date1904, Se = i.split(r), Oe = 0, _e = Se.length; Oe != _e; ++Oe) {
      x = Se[Oe].trim();
      var Ke = x.length;
      if (Ke !== 0) {
        var je = 0;
        e: for (d = 0; d < Ke; ++d) switch (x[d]) {
          case ">":
            if (x[d - 1] != "/") {
              ++d;
              break e;
            }
            if (f && f.cellStyles) {
              if (V = Ye(x.slice(je, d), true), K = V.r != null ? parseInt(V.r, 10) : K + 1, A = -1, f.sheetRows && f.sheetRows < K) continue;
              Be = {}, Qe = false, V.ht && (Qe = true, Be.hpt = parseFloat(V.ht), Be.hpx = qn(Be.hpt)), V.hidden && Rr(V.hidden) && (Qe = true, Be.hidden = true), V.outlineLevel != null && (Qe = true, Be.level = +V.outlineLevel), Qe && (ke[K - 1] = Be);
            }
            break;
          case "<":
            je = d;
            break;
        }
        if (je >= d) break;
        if (V = Ye(x.slice(je, d), true), K = V.r != null ? parseInt(V.r, 10) : K + 1, A = -1, !(f.sheetRows && f.sheetRows < K)) {
          f.nodim || (c.s.r > K - 1 && (c.s.r = K - 1), c.e.r < K - 1 && (c.e.r = K - 1)), f && f.cellStyles && (Be = {}, Qe = false, V.ht && (Qe = true, Be.hpt = parseFloat(V.ht), Be.hpx = qn(Be.hpt)), V.hidden && Rr(V.hidden) && (Qe = true, Be.hidden = true), V.outlineLevel != null && (Qe = true, Be.level = +V.outlineLevel), Qe && (ke[K - 1] = Be)), w = x.slice(d).split(e);
          for (var $e = 0; $e != w.length && w[$e].trim().charAt(0) == "<"; ++$e) ;
          for (w = w.slice($e), d = 0; d != w.length; ++d) if (x = w[d].trim(), x.length !== 0) {
            if (y = x.match(t), _ = d, g = 0, F = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, y != null && y.length === 2) {
              for (_ = 0, E = y[1], g = 0; g != E.length && !((F = E.charCodeAt(g) - 64) < 1 || F > 26); ++g) _ = 26 * _ + F;
              --_, A = _;
            } else ++A;
            for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g) ;
            if (++g, V = Ye(x.slice(0, g), true), V.r || (V.r = gr({ r: K - 1, c: A })), E = x.slice(g), I = { t: "" }, (y = _t(E, "v")) != null && y[1] !== "" && (I.v = Sr(y[1])), f.cellFormula) {
              if ((y = _t(E, "f")) != null) {
                if (y[1] == "") y[0].indexOf('t="shared"') > -1 && (W = Ye(y[0]), me[W.si] && (I.f = dc(me[W.si][1], me[W.si][2], V.r)));
                else if (I.f = Sr(Pr(y[1]), true), f.xlfn || (I.f = xc(I.f)), y[0].indexOf('t="array"') > -1) I.F = (E.match(a) || [])[1], I.F.indexOf(":") > -1 && We.push([Cr(I.F), I.F]);
                else if (y[0].indexOf('t="shared"') > -1) {
                  W = Ye(y[0]);
                  var R = Sr(Pr(y[1]));
                  f.xlfn || (R = xc(R)), me[parseInt(W.si, 10)] = [W, R, V.r];
                }
              } else (y = E.match(/<f[^<>]*\/>/)) && (W = Ye(y[0]), me[W.si] && (I.f = dc(me[W.si][1], me[W.si][2], V.r)));
              var ee = Br(V.r);
              for (g = 0; g < We.length; ++g) ee.r >= We[g][0].s.r && ee.r <= We[g][0].e.r && ee.c >= We[g][0].s.c && ee.c <= We[g][0].e.c && (I.F = We[g][1]);
            }
            if (V.t == null && I.v === void 0) if (I.f || I.F) I.v = 0, I.t = "n";
            else if (he) I.t = "z";
            else continue;
            else I.t = V.t || "n";
            switch (c.s.c > A && (c.s.c = A), c.e.c < A && (c.e.c = A), I.t) {
              case "n":
                if (I.v == "" || I.v == null) {
                  if (!he) continue;
                  I.t = "z";
                } else I.v = parseFloat(I.v);
                break;
              case "s":
                if (typeof I.v > "u") {
                  if (!he) continue;
                  I.t = "z";
                } else H = wi[parseInt(I.v, 10)], I.v = H.t, I.r = H.r, f.cellHTML && (I.h = H.h);
                break;
              case "str":
                I.t = "s", I.v = I.v != null ? Sr(Pr(I.v), true) : "", f.cellHTML && (I.h = xi(I.v));
                break;
              case "inlineStr":
                y = _t(E, "is"), I.t = "s", y != null && (H = If(y[1])) ? (I.v = H.t, f.cellHTML && (I.h = H.h)) : I.v = "";
                break;
              case "b":
                I.v = Rr(I.v);
                break;
              case "d":
                f.cellDates ? I.v = $r(I.v, sr) : (I.v = Zr($r(I.v, sr), sr), I.t = "n");
                break;
              case "e":
                (!f || f.cellText !== false) && (I.w = I.v), I.v = wt[I.v];
                break;
            }
            if (Z = j = 0, de = null, ne && V.s !== void 0 && (de = h.CellXf[V.s], de != null && (de.numFmtId != null && (Z = de.numFmtId), f.cellStyles && de.fillId != null && (j = de.fillId))), ul(I, Z, j, f, u, h, sr), f.cellDates && ne && I.t == "n" && ia(nr[Z]) && (I.v = Ba(I.v + (sr ? 1462 : 0)), I.t = typeof I.v == "number" ? "n" : "d"), V.cm && f.xlmeta) {
              var L = (f.xlmeta.Cell || [])[+V.cm - 1];
              L && L.type == "XLDAPR" && (I.D = true);
            }
            var U;
            f.nodim && (U = Br(V.r), c.s.r > U.r && (c.s.r = U.r), c.e.r < U.r && (c.e.r = U.r)), ze ? (U = Br(V.r), s["!data"][U.r] || (s["!data"][U.r] = []), s["!data"][U.r][U.c] = I) : s[V.r] = I;
          }
        }
      }
    }
    ke.length > 0 && (s["!rows"] = ke);
  };
})();
function X2(e, r, t, a) {
  var n = [], i = [], s = Cr(e["!ref"]), f = "", c, u = "", h = [], v = 0, d = 0, x = e["!rows"], w = e["!data"] != null, y = w ? e["!data"] : [], _ = { r: u }, g, F = -1, E = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (d = s.s.c; d <= s.e.c; ++d) h[d] = vr(d);
  for (v = s.s.r; v <= s.e.r; ++v) {
    i = [], u = Tr(v);
    var I = w ? y[v] : [];
    for (d = s.s.c; d <= s.e.c; ++d) {
      c = h[d] + u;
      var V = w ? I[d] : e[c];
      V !== void 0 && (f = H2(V, c, e, r, t, a, E)) != null && i.push(f);
    }
    (i.length > 0 || x && x[v]) && (_ = { r: u }, x && x[v] && (g = x[v], g.hidden && (_.hidden = 1), F = -1, g.hpx ? F = Bi(g.hpx) : g.hpt && (F = g.hpt), F > -1 && (_.ht = F, _.customHeight = 1), g.level && (_.outlineLevel = g.level)), n[n.length] = Ae("row", i.join(""), _));
  }
  if (x) for (; v < x.length; ++v) x && x[v] && (_ = { r: v + 1 }, g = x[v], g.hidden && (_.hidden = 1), F = -1, g.hpx ? F = Bi(g.hpx) : g.hpt && (F = g.hpt), F > -1 && (_.ht = F, _.customHeight = 1), g.level && (_.outlineLevel = g.level), n[n.length] = Ae("row", "", _));
  return n.join("");
}
function K2(e, r, t, a) {
  var n = [it, Ae("worksheet", null, { xmlns: Tn[0], "xmlns:r": ht.r })], i = t.SheetNames[e], s = 0, f = "", c = t.Sheets[i];
  c == null && (c = {});
  var u = c["!ref"] || "A1", h = Cr(u);
  if (h.e.c > 16383 || h.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + u + " exceeds format limit A1:XFD1048576");
    h.e.c = Math.min(h.e.c, 16383), h.e.r = Math.min(h.e.c, 1048575), u = dr(h);
  }
  a || (a = {}), c["!comments"] = [];
  var v = [];
  b2(c, t, e, r, n), n[n.length] = Ae("dimension", null, { ref: u }), n[n.length] = W2(c, r, e, t), r.sheetFormat && (n[n.length] = Ae("sheetFormatPr", null, { defaultRowHeight: r.sheetFormat.defaultRowHeight || "16", baseColWidth: r.sheetFormat.baseColWidth || "10", outlineLevelRow: r.sheetFormat.outlineLevelRow || "7" })), c["!cols"] != null && c["!cols"].length > 0 && (n[n.length] = P2(c, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], c["!ref"] != null && (f = X2(c, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = D2(c["!protect"])), c["!autofilter"] != null && (n[n.length] = L2(c["!autofilter"], c, t, e)), c["!merges"] != null && c["!merges"].length > 0 && (n[n.length] = S2(c["!merges"]));
  var d = -1, x, w = -1;
  return c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(y) {
    y[1].Target && (x = { ref: y[0] }, y[1].Target.charAt(0) != "#" && (w = Nr(a, -1, xr(y[1].Target).replace(/#[\s\S]*$/, ""), mr.HLINK), x["r:id"] = "rId" + w), (d = y[1].Target.indexOf("#")) > -1 && (x.location = xr(y[1].Target.slice(d + 1))), y[1].Tooltip && (x.tooltip = xr(y[1].Tooltip)), x.display = y[1].display, n[n.length] = Ae("hyperlink", null, x));
  }), n[n.length] = "</hyperlinks>"), delete c["!links"], c["!margins"] != null && (n[n.length] = N2(c["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = Et("ignoredErrors", Ae("ignoredError", null, { numberStoredAsText: 1, sqref: u }))), v.length > 0 && (w = Nr(a, -1, "../drawings/drawing" + (e + 1) + ".xml", mr.DRAW), n[n.length] = Ae("drawing", null, { "r:id": "rId" + w }), c["!drawing"] = v), c["!comments"].length > 0 && (w = Nr(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", mr.VML), n[n.length] = Ae("legacyDrawing", null, { "r:id": "rId" + w }), c["!legacy"] = w), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
}
function j2(e, r) {
  var t = {}, a = e.l + r;
  t.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (t.level = i & 7), i & 16 && (t.hidden = true), i & 32 && (t.hpt = n / 20), t;
}
function G2(e, r, t) {
  var a = oe(145), n = (t["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Bi(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, c = a.l;
  a.l += 4;
  for (var u = { r: e, c: 0 }, h = t["!data"] != null, v = 0; v < 16; ++v) if (!(r.s.c > v + 1 << 10 || r.e.c < v << 10)) {
    for (var d = -1, x = -1, w = v << 10; w < v + 1 << 10; ++w) {
      u.c = w;
      var y = h ? (t["!data"][u.r] || [])[u.c] : t[gr(u)];
      y && (d < 0 && (d = w), x = w);
    }
    d < 0 || (++f, a.write_shift(4, d), a.write_shift(4, x));
  }
  var _ = a.l;
  return a.l = c, a.write_shift(4, f), a.l = _, a.length > a.l ? a.slice(0, a.l) : a;
}
function z2(e, r, t, a) {
  var n = G2(a, t, r);
  (n.length > 17 || (r["!rows"] || [])[a]) && ve(e, 0, n);
}
var $2 = An, q2 = Jn;
function Y2() {
}
function Z2(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = H1(e), t;
}
function J2(e, r, t) {
  t == null && (t = oe(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return Bs({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), hu(e, t), t.slice(0, t.l);
}
function Q2(e) {
  var r = fa(e);
  return [r];
}
function e_(e, r, t) {
  return t == null && (t = oe(8)), Sn(r, t);
}
function r_(e) {
  var r = Fn(e);
  return [r];
}
function t_(e, r, t) {
  return t == null && (t = oe(4)), bn(r, t);
}
function a_(e) {
  var r = fa(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function n_(e, r, t) {
  return t == null && (t = oe(9)), Sn(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function i_(e) {
  var r = Fn(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function s_(e, r, t) {
  return t == null && (t = oe(5)), bn(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function f_(e) {
  var r = fa(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function W0(e, r, t) {
  return t == null && (t = oe(9)), Sn(r, t), t.write_shift(1, e.v), t;
}
function o_(e) {
  var r = Fn(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function H0(e, r, t) {
  return t == null && (t = oe(8)), bn(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function c_(e) {
  var r = fa(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function u_(e, r, t) {
  return t == null && (t = oe(12)), Sn(r, t), t.write_shift(4, r.v), t;
}
function l_(e) {
  var r = Fn(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function h_(e, r, t) {
  return t == null && (t = oe(8)), bn(r, t), t.write_shift(4, r.v), t;
}
function d_(e) {
  var r = fa(e), t = Ot(e);
  return [r, t, "n"];
}
function x_(e, r, t) {
  return t == null && (t = oe(16)), Sn(r, t), yn(e.v, t), t;
}
function hl(e) {
  var r = Fn(e), t = Ot(e);
  return [r, t, "n"];
}
function p_(e, r, t) {
  return t == null && (t = oe(12)), bn(r, t), yn(e.v, t), t;
}
function v_(e) {
  var r = fa(e), t = $s(e);
  return [r, t, "n"];
}
function m_(e, r, t) {
  return t == null && (t = oe(12)), Sn(r, t), du(e.v, t), t;
}
function g_(e) {
  var r = Fn(e), t = $s(e);
  return [r, t, "n"];
}
function __(e, r, t) {
  return t == null && (t = oe(8)), bn(r, t), du(e.v, t), t;
}
function w_(e) {
  var r = fa(e), t = Tf(e);
  return [r, t, "is"];
}
function y_(e) {
  var r = fa(e), t = Pt(e);
  return [r, t, "str"];
}
function k_(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(12 + 4 * e.v.length)), Sn(r, t), dt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function E_(e) {
  var r = Fn(e), t = Pt(e);
  return [r, t, "str"];
}
function T_(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = oe(8 + 4 * a.length)), bn(r, t), dt(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function S_(e, r, t) {
  var a = e.l + r, n = fa(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Qs(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function F_(e, r, t) {
  var a = e.l + r, n = fa(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Qs(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function b_(e, r, t) {
  var a = e.l + r, n = fa(e);
  n.r = t["!row"];
  var i = Ot(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Qs(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function A_(e, r, t) {
  var a = e.l + r, n = fa(e);
  n.r = t["!row"];
  var i = Pt(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Qs(e, a - e.l, t);
    s[3] = Dt(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var C_ = An, D_ = Jn;
function I_(e, r) {
  return r == null && (r = oe(4)), r.write_shift(4, e), r;
}
function O_(e, r) {
  var t = e.l + r, a = An(e), n = zs(e), i = Pt(e), s = Pt(e), f = Pt(e);
  e.l = t;
  var c = { rfx: a, relId: n, loc: i, display: f };
  return s && (c.Tooltip = s), c;
}
function N_(e, r) {
  var t = oe(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  Jn({ s: Br(e[0]), e: Br(e[0]) }, t), Sf("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return dt(n || "", t), dt(e[1].Tooltip || "", t), dt("", t), t.slice(0, t.l);
}
function R_() {
}
function P_(e, r, t) {
  var a = e.l + r, n = xu(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, t.cellFormula) {
    var f = Qg(e, a - e.l, t);
    s[1] = f;
  } else e.l = a;
  return s;
}
function B_(e, r, t) {
  var a = e.l + r, n = An(e), i = [n];
  if (t.cellFormula) {
    var s = r2(e, a - e.l, t);
    i[1] = s, e.l = a;
  } else e.l = a;
  return i;
}
function L_(e, r, t) {
  t == null && (t = oe(18));
  var a = e0(e, r);
  t.write_shift(-4, e), t.write_shift(-4, e), t.write_shift(4, (a.width || 10) * 256), t.write_shift(4, 0);
  var n = 0;
  return r.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), r.level && (n |= r.level << 8), t.write_shift(2, n), t;
}
var dl = ["left", "right", "top", "bottom", "header", "footer"];
function M_(e) {
  var r = {};
  return dl.forEach(function(t) {
    r[t] = Ot(e);
  }), r;
}
function U_(e, r) {
  return r == null && (r = oe(48)), mn(e), dl.forEach(function(t) {
    yn(e[t], r);
  }), r;
}
function W_(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function H_(e, r, t) {
  t == null && (t = oe(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function V_(e) {
  var r = oe(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), Jn(e, r), r;
}
function X_(e, r) {
  return r == null && (r = oe(66)), r.write_shift(2, e.password ? Of(e.password) : 0), r.write_shift(4, 1), [["objects", false], ["scenarios", false], ["formatCells", true], ["formatColumns", true], ["formatRows", true], ["insertColumns", true], ["insertRows", true], ["insertHyperlinks", true], ["deleteColumns", true], ["deleteRows", true], ["selectLockedCells", false], ["sort", true], ["autoFilter", true], ["pivotTables", true], ["selectUnlockedCells", false]].forEach(function(t) {
    t[1] ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0) : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
  }), r;
}
function K_() {
}
function j_() {
}
function G_(e, r, t, a, n, i, s) {
  if (!e) return e;
  var f = r || {};
  a || (a = { "!id": {} });
  var c = {};
  f.dense && (c["!data"] = []);
  var u, h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, v = false, d = false, x, w, y, _, g, F, E, I, V, K = [];
  f.biff = 12, f["!row"] = 0;
  var A = 0, H = false, W = [], Z = {}, j = f.supbooks || n.supbooks || [[]];
  if (j.sharedf = Z, j.arrayf = W, j.SheetNames = n.SheetNames || n.Sheets.map(function(Qe) {
    return Qe.name;
  }), !f.supbooks && (f.supbooks = j, n.Names)) for (var ne = 0; ne < n.Names.length; ++ne) j[0][ne + 1] = n.Names[ne];
  var de = [], We = [], me = false;
  Li[16] = { n: "BrtShortReal", f: hl };
  var ze, ke = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if (Ha(e, function(he, sr, Se) {
    if (!d) switch (Se) {
      case 148:
        u = he;
        break;
      case 0:
        x = he, f.sheetRows && f.sheetRows <= x.r && (d = true), I = Tr(_ = x.r), f["!row"] = x.r, (he.hidden || he.hpt || he.level != null) && (he.hpt && (he.hpx = qn(he.hpt)), We[he.r] = he);
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
        switch (w = { t: he[2] }, he[2]) {
          case "n":
            w.v = he[1];
            break;
          case "s":
            E = wi[he[1]], w.v = E.t, w.r = E.r;
            break;
          case "b":
            w.v = !!he[1];
            break;
          case "e":
            w.v = he[1], f.cellText !== false && (w.w = xt[w.v]);
            break;
          case "str":
            w.t = "s", w.v = he[1];
            break;
          case "is":
            w.t = "s", w.v = he[1].t;
            break;
        }
        if ((y = s.CellXf[he[0].iStyleRef]) && ul(w, y.numFmtId, null, f, i, s, ke > 0), g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (c["!data"][_] || (c["!data"][_] = []), c["!data"][_][g] = w) : c[vr(g) + I] = w, f.cellFormula) {
          for (H = false, A = 0; A < W.length; ++A) {
            var Oe = W[A];
            x.r >= Oe[0].s.r && x.r <= Oe[0].e.r && g >= Oe[0].s.c && g <= Oe[0].e.c && (w.F = dr(Oe[0]), H = true);
          }
          !H && he.length > 3 && (w.f = he[3]);
        }
        if (h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), f.cellDates && y && w.t == "n" && ia(nr[y.numFmtId])) {
          var _e = Oa(w.v + ke);
          _e && (w.t = "d", w.v = new Date(Date.UTC(_e.y, _e.m - 1, _e.d, _e.H, _e.M, _e.S, _e.u)));
        }
        ze && (ze.type == "XLDAPR" && (w.D = true), ze = void 0);
        break;
      case 1:
      case 12:
        if (!f.sheetStubs || v) break;
        w = { t: "z", v: void 0 }, g = he[0].c == -1 ? g + 1 : he[0].c, f.dense ? (c["!data"][_] || (c["!data"][_] = []), c["!data"][_][g] = w) : c[vr(g) + I] = w, h.s.r > x.r && (h.s.r = x.r), h.s.c > g && (h.s.c = g), h.e.r < x.r && (h.e.r = x.r), h.e.c < g && (h.e.c = g), ze && (ze.type == "XLDAPR" && (w.D = true), ze = void 0);
        break;
      case 176:
        K.push(he);
        break;
      case 49:
        ze = ((f.xlmeta || {}).Cell || [])[he - 1];
        break;
      case 494:
        var Ke = a["!id"][he.relId];
        for (Ke ? (he.Target = Ke.Target, he.loc && (he.Target += "#" + he.loc), he.Rel = Ke) : he.relId == "" && (he.Target = "#" + he.loc), _ = he.rfx.s.r; _ <= he.rfx.e.r; ++_) for (g = he.rfx.s.c; g <= he.rfx.e.c; ++g) f.dense ? (c["!data"][_] || (c["!data"][_] = []), c["!data"][_][g] || (c["!data"][_][g] = { t: "z", v: void 0 }), c["!data"][_][g].l = he) : (F = vr(g) + Tr(_), c[F] || (c[F] = { t: "z", v: void 0 }), c[F].l = he);
        break;
      case 426:
        if (!f.cellFormula) break;
        W.push(he), V = f.dense ? c["!data"][_][g] : c[vr(g) + I], V.f = Dt(he[1], h, { r: x.r, c: g }, j, f), V.F = dr(he[0]);
        break;
      case 427:
        if (!f.cellFormula) break;
        Z[gr(he[0].s)] = he[1], V = f.dense ? c["!data"][_][g] : c[vr(g) + I], V.f = Dt(he[1], h, { r: x.r, c: g }, j, f);
        break;
      case 60:
        if (!f.cellStyles) break;
        for (; he.e >= he.s; ) de[he.e--] = { width: he.w / 256, hidden: !!(he.flags & 1), level: he.level }, me || (me = true, Nf(he.w / 256)), Ja(de[he.e + 1]);
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
          if (!v || f.WTF) throw new Error("Unexpected record 0x" + Se.toString(16));
        }
    }
  }, f), delete f.supbooks, delete f["!row"], !c["!ref"] && (h.s.r < 2e6 || u && (u.e.r > 0 || u.e.c > 0 || u.s.r > 0 || u.s.c > 0)) && (c["!ref"] = dr(u || h)), f.sheetRows && c["!ref"]) {
    var Be = Cr(c["!ref"]);
    f.sheetRows <= +Be.e.r && (Be.e.r = f.sheetRows - 1, Be.e.r > h.e.r && (Be.e.r = h.e.r), Be.e.r < Be.s.r && (Be.s.r = Be.e.r), Be.e.c > h.e.c && (Be.e.c = h.e.c), Be.e.c < Be.s.c && (Be.s.c = Be.e.c), c["!fullref"] = c["!ref"], c["!ref"] = dr(Be));
  }
  return K.length > 0 && (c["!merges"] = K), de.length > 0 && (c["!cols"] = de), We.length > 0 && (c["!rows"] = We), a["!id"][c["!legrel"]] && (c["!legdrawel"] = a["!id"][c["!legrel"]]), c;
}
function z_(e, r, t, a, n, i, s, f) {
  var c = { r: t, c: a };
  if (r.c && i["!comments"].push([gr(c), r.c]), r.v === void 0) return false;
  var u = "";
  switch (r.t) {
    case "b":
      u = r.v ? "1" : "0";
      break;
    case "d":
      r = Hr(r), r.z = r.z || nr[14], r.v = Zr($r(r.v, f), f), r.t = "n";
      break;
    case "n":
    case "e":
      u = "" + r.v;
      break;
    default:
      u = r.v;
      break;
  }
  switch (c.s = an(n.cellXfs, r, n), r.l && i["!links"].push([gr(c), r.l]), r.t) {
    case "s":
    case "str":
      return n.bookSST ? (u = Bf(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), c.t = "s", c.v = u, s ? ve(e, 18, h_(r, c)) : ve(e, 7, u_(r, c))) : (c.t = "str", s ? ve(e, 17, T_(r, c)) : ve(e, 6, k_(r, c))), true;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? ve(e, 13, __(r, c)) : ve(e, 2, m_(r, c)) : isFinite(r.v) ? s ? ve(e, 16, p_(r, c)) : ve(e, 5, x_(r, c)) : (c.t = "e", isNaN(r.v) ? s ? ve(e, 14, H0({ v: 36 }, c)) : ve(e, 3, W0({ v: 36 }, c)) : s ? ve(e, 14, H0({ v: 7 }, c)) : ve(e, 3, W0({ v: 7 }, c))), true;
    case "b":
      return c.t = "b", s ? ve(e, 15, s_(r, c)) : ve(e, 4, n_(r, c)), true;
    case "e":
      return c.t = "e", s ? ve(e, 14, H0(r, c)) : ve(e, 3, W0(r, c)), true;
  }
  return s ? ve(e, 12, t_(r, c)) : ve(e, 1, e_(r, c)), true;
}
function $_(e, r, t, a, n) {
  var i = Cr(r["!ref"] || "A1"), s = "", f = [], c = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  ve(e, 145);
  var u = r["!data"] != null, h = u ? r["!data"][i.s.r] : [], v = i.e.r;
  r["!rows"] && (v = Math.max(i.e.r, r["!rows"].length - 1));
  for (var d = i.s.r; d <= v; ++d) if (s = Tr(d), u && (h = r["!data"][d]), z2(e, r, i, d), !(u && !h)) {
    var x = false;
    if (d <= i.e.r) for (var w = i.s.c; w <= i.e.c; ++w) {
      d === i.s.r && (f[w] = vr(w));
      var y = u ? h[w] : r[f[w] + s];
      if (!y) {
        x = false;
        continue;
      }
      x = z_(e, y, d, w, a, r, x, c);
    }
  }
  ve(e, 146);
}
function q_(e, r) {
  !r || !r["!merges"] || (ve(e, 177, I_(r["!merges"].length)), r["!merges"].forEach(function(t) {
    ve(e, 176, D_(t));
  }), ve(e, 178));
}
function Y_(e, r) {
  !r || !r["!cols"] || (ve(e, 390), r["!cols"].forEach(function(t, a) {
    t && ve(e, 60, L_(a, t));
  }), ve(e, 391));
}
function Z_(e, r) {
  !r || !r["!ref"] || (ve(e, 648), ve(e, 649, V_(Cr(r["!ref"]))), ve(e, 650));
}
function J_(e, r, t) {
  r["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = Nr(t, -1, a[1].Target.replace(/#[\s\S]*$/, ""), mr.HLINK);
      ve(e, 494, N_(a, n));
    }
  }), delete r["!links"];
}
function Q_(e, r, t, a) {
  if (r["!comments"].length > 0) {
    var n = Nr(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", mr.VML);
    ve(e, 551, Sf("rId" + n)), r["!legacy"] = n;
  }
}
function ew(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : dr(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = yt(i);
    f.s.r == f.e.r && (f.e.r = yt(r["!ref"]).e.r, i = dr(f));
    for (var c = 0; c < s.length; ++c) {
      var u = s[c];
      if (u.Name == "_xlnm._FilterDatabase" && u.Sheet == a) {
        u.Ref = Di(t.SheetNames[a]) + "!" + Ci(i);
        break;
      }
    }
    c == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: Di(t.SheetNames[a]) + "!" + Ci(i) }), ve(e, 161, Jn(Cr(i))), ve(e, 162);
  }
}
function rw(e, r, t) {
  ve(e, 133), ve(e, 137, H_(r, t)), ve(e, 138), ve(e, 134);
}
function tw(e, r) {
  r["!protect"] && ve(e, 535, X_(r["!protect"]));
}
function aw(e, r, t, a) {
  var n = Rt(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var c = Cr(s["!ref"] || "A1");
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], ve(n, 129), (t.vbaraw || s["!outline"]) && ve(n, 147, J2(f, s["!outline"])), ve(n, 148, q2(c)), rw(n, s, t.Workbook), Y_(n, s), $_(n, s, e, r, t), tw(n, s), ew(n, s, t, e), q_(n, s), J_(n, s, a), s["!margins"] && ve(n, 476, U_(s["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && Z_(n, s), Q_(n, s, e, a), ve(n, 130), n.end();
}
function nw(e) {
  var r = [], t = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
    s && (r[+s[1]] = t ? +s[2] : s[2]);
  });
  var n = Sr((hn(e, "c:formatCode") || ["", "General"])[1]);
  return (pf(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function iw(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, c = 0, u = "A", h = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (pf(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(v) {
    var d = nw(v);
    h.s.r = h.s.c = 0, h.e.c = f, u = vr(f), d[0].forEach(function(x, w) {
      s["!data"] ? (s["!data"][w] || (s["!data"][w] = []), s["!data"][w][f] = { t: "n", v: x, z: d[1] }) : s[u + Tr(w)] = { t: "n", v: x, z: d[1] }, c = w;
    }), h.e.r < c && (h.e.r = c), ++f;
  }), f > 0 && (s["!ref"] = dr(h)), s;
}
function sw(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(ll);
  return f && Lf(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function fw(e, r) {
  e.l += 10;
  var t = Pt(e);
  return { name: t };
}
function ow(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = false;
  return Ha(e, function(c, u, h) {
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
var Mf = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], cw = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], uw = [], lw = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function wc(e, r) {
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
function yc(e, r) {
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
function xl(e) {
  yc(e.WBProps, Mf), yc(e.CalcPr, lw), wc(e.WBView, cw), wc(e.Sheets, uw), Xn.date1904 = Rr(e.WBProps.date1904);
}
function hw(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Rr(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var dw = ":][*?/\\".split("");
function pl(e, r) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    dw.forEach(function(t) {
      if (e.indexOf(t) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (t) {
    throw t;
  }
  return true;
}
function xw(e, r, t) {
  e.forEach(function(a, n) {
    pl(a);
    for (var i = 0; i < n; ++i) if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
    if (t) {
      var s = r && r[n] && r[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function pw(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var r = e.Workbook && e.Workbook.Sheets || [];
  xw(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t) v2(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
  e.SheetNames.forEach(function(a, n) {
    var i = e.Sheets[a];
    if (!(!i || !i["!autofilter"])) {
      var s;
      e.Workbook || (e.Workbook = {}), e.Workbook.Names || (e.Workbook.Names = []), e.Workbook.Names.forEach(function(c) {
        c.Name == "_xlnm._FilterDatabase" && c.Sheet == n && (s = c);
      });
      var f = Di(a) + "!" + Ci(i["!autofilter"].ref);
      s ? s.Ref = f : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: f });
    }
  });
}
var vw = /<\w+:workbook/;
function mw(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = false, n = "xmlns", i = {}, s = 0;
  if (e.replace(Tt, function(c, u) {
    var h = Ye(c);
    switch (sa(h[0])) {
      case "<?xml":
        break;
      case "<workbook":
        c.match(vw) && (n = "xmlns" + c.match(/<(\w+):/)[1]), t.xmlns = h[n];
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
        Mf.forEach(function(v) {
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
        delete h.state, h.name = Sr(Pr(h.name)), delete h[0], t.Sheets.push(h);
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
        i.Ref = Sr(Pr(e.slice(s, u))), t.Names.push(i);
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
  }), Tn.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
  return xl(t), t;
}
function gw(e) {
  var r = [it];
  r[r.length] = Ae("workbook", null, { xmlns: Tn[0], "xmlns:r": ht.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Mf.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), r[r.length] = Ae("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && n[0].Hidden) {
    for (r[r.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i) ;
    i == e.SheetNames.length && (i = 0), r[r.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', r[r.length] = "</bookViews>";
  }
  for (r[r.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: xr(e.SheetNames[i].slice(0, 31)) };
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
    f.Comment && (c.comment = f.Comment), f.Sheet != null && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (r[r.length] = Ae("definedName", xr(f.Ref), c));
  }), r[r.length] = "</definedNames>"), r.length > 2 && (r[r.length] = "</workbook>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function _w(e, r) {
  var t = {};
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Y0(e), t.name = Pt(e), t;
}
function ww(e, r) {
  return r || (r = oe(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), Sf(e.strRelID, r), dt(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function yw(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Pt(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function kw(e, r) {
  r || (r = oe(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), hu(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
}
function Ew(e, r) {
  var t = {};
  return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function Tw(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  e.l += 1;
  var i = e.read_shift(4), s = V1(e), f, c = "";
  try {
    f = e2(e, 0, t);
    try {
      c = zs(e);
    } catch {
    }
  } catch {
    console.error("Could not parse defined name " + s);
  }
  n & 32 && (s = "_xlnm." + s), e.l = a;
  var u = { Name: s, Ptg: f, Flags: n };
  return i < 268435455 && (u.Sheet = i), c && (u.Comment = c), u;
}
function Sw(e, r) {
  var t = oe(9), a = 0, n = e.Name;
  bf.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [t, dt(n), h2(e.Ref, r)];
  if (e.Comment) i.push(Ii(e.Comment));
  else {
    var s = oe(4);
    s.write_shift(4, 4294967295), i.push(s);
  }
  return at(i);
}
function Fw(e, r) {
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = false;
  r || (r = {}), r.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Li[16] = { n: "BrtFRTArchID$", f: Ew }, Ha(e, function(c, u, h) {
    switch (h) {
      case 156:
        s.SheetNames.push(c.name), t.Sheets.push(c);
        break;
      case 153:
        t.WBProps = c;
        break;
      case 39:
        c.Sheet != null && (r.SID = c.Sheet), c.Ref = c.Ptg ? Dt(c.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete c.Ptg, i.push(c);
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
  }, r), xl(t), t.Names = i, t.supbooks = s, t;
}
function bw(e, r) {
  ve(e, 143);
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var a = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[t] && r.Workbook.Sheets[t].Hidden || 0, n = { Hidden: a, iTabID: t + 1, strRelID: "rId" + (t + 1), name: r.SheetNames[t] };
    ve(e, 156, ww(n));
  }
  ve(e, 144);
}
function Aw(e, r) {
  r || (r = oe(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return dt("SheetJS", r), dt(Cs.version, r), dt(Cs.version, r), dt("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function Cw(e, r) {
  r || (r = oe(29)), r.write_shift(-4, 0), r.write_shift(-4, 460), r.write_shift(4, 28800), r.write_shift(4, 17600), r.write_shift(4, 500), r.write_shift(4, e), r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function Dw(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, a = 0, n = -1, i = -1; a < t.length; ++a) !t[a] || !t[a].Hidden && n == -1 ? n = a : t[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (ve(e, 135), ve(e, 158, Cw(n)), ve(e, 136));
  }
}
function Iw(e, r) {
  !r.Workbook || !r.Workbook.Names || r.Workbook.Names.forEach(function(t) {
    try {
      if (t.Flags & 14) return;
      ve(e, 39, Sw(t, r));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(t));
    }
  });
}
function Ow(e) {
  var r = e.SheetNames.length, t = oe(12 * r + 28);
  t.write_shift(4, r + 2), t.write_shift(4, 0), t.write_shift(4, -2), t.write_shift(4, -2), t.write_shift(4, 0), t.write_shift(4, -1), t.write_shift(4, -1);
  for (var a = 0; a < r; ++a) t.write_shift(4, 0), t.write_shift(4, a), t.write_shift(4, a);
  return t;
}
function Nw(e, r) {
  ve(e, 353), ve(e, 357), ve(e, 362, Ow(r)), ve(e, 354);
}
function Rw(e, r) {
  var t = Rt();
  return ve(t, 131), ve(t, 128, Aw()), ve(t, 153, kw(e.Workbook && e.Workbook.WBProps || null)), Dw(t, e), bw(t, e), Nw(t, e), (e.Workbook || {}).Names && Iw(t, e), ve(t, 132), t.end();
}
function Pw(e, r, t) {
  return r.slice(-4) === ".bin" ? Fw(e, t) : mw(e, t);
}
function Bw(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? G_(e, a, t, n, i, s, f) : T2(e, a, t, n, i, s, f);
}
function Lw(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? ow(e, a, t, n, i) : sw(e, a, t, n, i);
}
function Mw(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Dm() : Im();
}
function Uw(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? Am() : Cm();
}
function Ww(e, r, t, a) {
  return r.slice(-4) === ".bin" ? Cv(e, t, a) : vv(e, t, a);
}
function Hw(e, r, t) {
  return r.slice(-4) === ".bin" ? Op(e, t) : Ap(e, t);
}
function Vw(e, r, t) {
  return r.slice(-4) === ".bin" ? km(e, t) : pm(e, t);
}
function Xw(e, r, t) {
  return r.slice(-4) === ".bin" ? um(e) : om(e);
}
function Kw(e, r, t, a) {
  return t.slice(-4) === ".bin" ? lm(e, r, t, a) : void 0;
}
function jw(e, r, t) {
  return r.slice(-4) === ".bin" ? nm(e, r, t) : sm(e, r, t);
}
var vl = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, ml = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function oa(e, r) {
  var t = e.split(/\s+/), a = [];
  if (a[0] = t[0], t.length === 1) return a;
  var n = e.match(vl), i, s, f, c;
  if (n) for (c = 0; c != n.length; ++c) i = n[c].match(ml), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function Gw(e) {
  var r = e.split(/\s+/), t = {};
  if (r.length === 1) return t;
  var a = e.match(vl), n, i, s, f;
  if (a) for (f = 0; f != a.length; ++f) n = a[f].match(ml), (i = n[1].indexOf(":")) === -1 ? t[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), t[s] = n[2].slice(1, n[2].length - 1));
  return t;
}
var ki;
function zw(e, r, t) {
  var a = ki[e] || Sr(e);
  return a === "General" ? gn(r) : Yt(a, r, { date1904: !!t });
}
function $w(e, r, t, a) {
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
  e[Sr(r)] = n;
}
function qw(e, r, t, a) {
  if (e.t !== "z") {
    if (!t || t.cellText !== false) try {
      e.t === "e" ? e.w = e.w || xt[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Fi(e.v) : e.w = gn(e.v) : e.w = zw(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = ki[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && ia(n)) {
        var i = Oa(e.v + (a ? 1462 : 0));
        i && (e.t = "d", e.v = new Date(Date.UTC(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function Yw(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var a = r.Interior;
    a.Pattern && (a.patternType = ov[a.Pattern] || a.Pattern);
  }
  e[r.ID] = r;
}
function Zw(e, r, t, a, n, i, s, f, c, u, h) {
  var v = "General", d = a.StyleID, x = {};
  u = u || {};
  var w = [], y = 0;
  for (d === void 0 && f && (d = f.StyleID), d === void 0 && s && (d = s.StyleID); i[d] !== void 0; ) {
    var _ = i[d];
    if (_.nf && (v = _.nf), _.Interior && w.push(_.Interior), !_.Parent) break;
    d = _.Parent;
  }
  switch (t.Type) {
    case "Boolean":
      a.t = "b", a.v = Rr(e);
      break;
    case "String":
      a.t = "s", a.r = Po(Sr(e)), a.v = e.indexOf("<") > -1 ? Sr(r || e).replace(/<[^<>]*>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = Zr($r(e, h), h), a.v !== a.v && (a.v = Sr(e)), (!v || v == "General") && (v = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = wt[e], u.cellText !== false && (a.w = e);
      break;
    default:
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = Po(r || e));
      break;
  }
  if (qw(a, v, u, h), u.cellFormula !== false) if (a.Formula) {
    var g = Sr(a.Formula);
    g.charCodeAt(0) == 61 && (g = g.slice(1)), a.f = vn(g, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = vn("RC:RC", n) : a.ArrayRange && (a.F = vn(a.ArrayRange, n), c.push([Cr(a.F), a.F]));
  } else for (y = 0; y < c.length; ++y) n.r >= c[y][0].s.r && n.r <= c[y][0].e.r && n.c >= c[y][0].s.c && n.c <= c[y][0].e.c && (a.F = c[y][1]);
  u.cellStyles && (w.forEach(function(F) {
    !x.patternType && F.patternType && (x.patternType = F.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function Jw(e) {
  return bf.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function Qw(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function V0(e, r) {
  var t = r || {};
  Yn();
  var a = hi(Gs(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") && (a = Pr(a));
  var n = a.slice(0, 1024).toLowerCase(), i = false;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = Hr(t);
    return s.type = "string", $n.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(rr) {
    n.indexOf("<" + rr) >= 0 && (i = true);
  }), i) return Uy(a, t);
  ki = { "General Number": "General", "General Date": nr[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": nr[15], "Short Date": nr[14], "Long Time": nr[19], "Medium Time": nr[18], "Short Time": nr[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: nr[2], Standard: nr[4], Percent: nr[10], Scientific: nr[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var f, c = [], u, h = {}, v = [], d = {}, x = "";
  t.dense && (d["!data"] = []);
  var w = {}, y = {}, _ = oa('<Data ss:Type="String">'), g = 0, F = 0, E = 0, I = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, V = {}, K = {}, A = "", H = 0, W = [], Z = {}, j = {}, ne = 0, de = [], We = [], me = {}, ze = [], ke, Be = false, Qe = [], he = [], sr = {}, Se = 0, Oe = 0, _e = { Sheets: [], WBProps: { date1904: false } }, Ke = {};
  ut.lastIndex = 0, a = Xi(a, "<!--", "-->");
  for (var je = ""; f = ut.exec(a); ) switch (f[3] = (je = f[3]).toLowerCase()) {
    case "data":
      if (je == "data") {
        if (f[1] === "/") {
          if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], true]);
        break;
      }
      if (c[c.length - 1][1]) break;
      f[1] === "/" ? Zw(a.slice(g, f.index), A, _, c[c.length - 1][0] == "comment" ? me : w, { c: F, r: E }, V, ze[F], y, Qe, t, _e.WBProps.date1904) : (A = "", _ = oa(f[0]), g = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/") if (We.length > 0 && (w.c = We), (!t.sheetRows || t.sheetRows > E) && w.v !== void 0 && (t.dense ? (d["!data"][E] || (d["!data"][E] = []), d["!data"][E][F] = w) : d[vr(F) + Tr(E)] = w), w.HRef && (w.l = { Target: Sr(w.HRef) }, w.HRefScreenTip && (w.l.Tooltip = w.HRefScreenTip), delete w.HRef, delete w.HRefScreenTip), (w.MergeAcross || w.MergeDown) && (Se = F + (parseInt(w.MergeAcross, 10) | 0), Oe = E + (parseInt(w.MergeDown, 10) | 0), (Se > F || Oe > E) && W.push({ s: { c: F, r: E }, e: { c: Se, r: Oe } })), !t.sheetStubs) w.MergeAcross ? F = Se + 1 : ++F;
      else if (w.MergeAcross || w.MergeDown) {
        for (var $e = F; $e <= Se; ++$e) for (var R = E; R <= Oe; ++R) ($e > F || R > E) && (t.dense ? (d["!data"][R] || (d["!data"][R] = []), d["!data"][R][$e] = { t: "z" }) : d[vr($e) + Tr(R)] = { t: "z" });
        F = Se + 1;
      } else ++F;
      else w = Gw(f[0]), w.Index && (F = +w.Index - 1), F < I.s.c && (I.s.c = F), F > I.e.c && (I.e.c = F), f[0].slice(-2) === "/>" && ++F, We = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (E < I.s.r && (I.s.r = E), E > I.e.r && (I.e.r = E), f[0].slice(-2) === "/>" && (y = oa(f[0]), y.Index && (E = +y.Index - 1)), F = 0, ++E) : (y = oa(f[0]), y.Index && (E = +y.Index - 1), sr = {}, (y.AutoFitHeight == "0" || y.Height) && (sr.hpx = parseInt(y.Height, 10), sr.hpt = Bi(sr.hpx), he[E] = sr), y.Hidden == "1" && (sr.hidden = true, he[E] = sr));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
        v.push(x), I.s.r <= I.e.r && I.s.c <= I.e.c && (d["!ref"] = dr(I), t.sheetRows && t.sheetRows <= I.e.r && (d["!fullref"] = d["!ref"], I.e.r = t.sheetRows - 1, d["!ref"] = dr(I))), W.length && (d["!merges"] = W), ze.length > 0 && (d["!cols"] = ze), he.length > 0 && (d["!rows"] = he), h[x] = d;
      } else I = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, E = F = 0, c.push([f[3], false]), u = oa(f[0]), x = Sr(u.Name), d = {}, t.dense && (d["!data"] = []), W = [], Qe = [], he = [], Ke = { name: x, Hidden: 0 }, _e.Sheets.push(Ke);
      break;
    case "table":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        c.push([f[3], false]), ze = [], Be = false;
      }
      break;
    case "style":
      f[1] === "/" ? Yw(V, K, t) : K = oa(f[0]);
      break;
    case "numberformat":
      K.nf = Sr(oa(f[0]).Format || "General"), ki[K.nf] && (K.nf = ki[K.nf]);
      for (var ee = 0; ee != 392 && nr[ee] != K.nf; ++ee) ;
      if (ee == 392) {
        for (ee = 57; ee != 392; ++ee) if (nr[ee] == null) {
          Ya(K.nf, ee);
          break;
        }
      }
      break;
    case "column":
      if (c[c.length - 1][0] !== "table" || f[1] === "/") break;
      if (ke = oa(f[0]), ke.Hidden && (ke.hidden = true, delete ke.Hidden), ke.Width && (ke.wpx = parseInt(ke.Width, 10)), !Be && ke.wpx > 10) {
        Be = true, It = $u;
        for (var L = 0; L < ze.length; ++L) ze[L] && Ja(ze[L]);
      }
      Be && Ja(ke), ze[ke.Index - 1 || ze.length] = ke;
      for (var U = 0; U < +ke.Span; ++U) ze[ze.length] = Hr(ke);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      _e.Names || (_e.Names = []);
      var ue = Ye(f[0]), O = { Name: Jw(ue.Name), Ref: vn(ue.RefersTo.slice(1), { r: 0, c: 0 }) };
      _e.Sheets.length > 0 && (O.Sheet = _e.Sheets.length - 1), _e.Names.push(O);
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
      f[1] === "/" ? A += a.slice(H, f.index) : H = f.index + f[0].length;
      break;
    case "interior":
      if (!t.cellStyles) break;
      K.Interior = oa(f[0]);
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
      f[1] === "/" ? hd(Z, je, a.slice(ne, f.index)) : ne = f.index + f[0].length;
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
        Qw(me), We.push(me);
      } else c.push([f[3], false]), u = oa(f[0]), Rr(u.ShowAlways || "0") || (We.hidden = true), me = { a: u.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((u = c.pop())[0] !== f[3]) throw new Error("Bad state: " + u.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var Ce = oa(f[0]);
        d["!autofilter"] = { ref: vn(Ce.Range).replace(/\$/g, "") }, c.push([f[3], true]);
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
      if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof") return Sc(a, t);
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
              _e.WBProps.date1904 = true;
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
              if (f[0].slice(-2) !== "/>") if (f[1] === "/") switch (a.slice(ne, f.index)) {
                case "SheetHidden":
                  Ke.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  Ke.Hidden = 2;
                  break;
              }
              else ne = f.index + f[0].length;
              break;
            case "header":
              d["!margins"] || mn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].header = +Ye(f[0]).Margin);
              break;
            case "footer":
              d["!margins"] || mn(d["!margins"] = {}, "xlml"), isNaN(+Ye(f[0]).Margin) || (d["!margins"].footer = +Ye(f[0]).Margin);
              break;
            case "pagemargins":
              var Fe = Ye(f[0]);
              d["!margins"] || mn(d["!margins"] = {}, "xlml"), isNaN(+Fe.Top) || (d["!margins"].top = +Fe.Top), isNaN(+Fe.Left) || (d["!margins"].left = +Fe.Left), isNaN(+Fe.Right) || (d["!margins"].right = +Fe.Right), isNaN(+Fe.Bottom) || (d["!margins"].bottom = +Fe.Bottom);
              break;
            case "displayrighttoleft":
              _e.Views || (_e.Views = []), _e.Views[0] || (_e.Views[0] = {}), _e.Views[0].RTL = true;
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
        f[1] === "/" ? $w(j, je, de, a.slice(ne, f.index)) : (de = f, ne = f.index + f[0].length);
        break;
      }
      if (t.WTF) throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
  }
  var ar = {};
  return !t.bookSheets && !t.bookProps && (ar.Sheets = h), ar.SheetNames = v, ar.Workbook = _e, ar.SSF = Hr(nr), ar.Props = Z, ar.Custprops = j, ar.bookType = "xlml", ar;
}
function tf(e, r) {
  switch (Uf(r = r || {}), r.type || "base64") {
    case "base64":
      return V0(qt(e), r);
    case "binary":
    case "buffer":
    case "file":
      return V0(e, r);
    case "array":
      return V0(ba(e), r);
  }
}
function ey(e, r) {
  var t = [];
  return e.Props && t.push(dd(e.Props, r)), e.Custprops && t.push(xd(e.Props, e.Custprops)), t.join("");
}
function ry(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function ty(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return r.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(Ae("NumberFormat", null, { "ss:Format": xr(nr[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    t.push(Ae("Style", i.join(""), s));
  }), Ae("Styles", t.join(""));
}
function gl(e) {
  return Ae("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + Zs(e.Ref, { r: 0, c: 0 }) });
}
function ay(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(gl(n)));
  }
  return Ae("Names", t.join(""));
}
function ny(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(gl(f)));
  }
  return i.join("");
}
function iy(e, r, t, a) {
  if (!e) return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(Ae("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(Ae("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(Ae("PageMargins", null, { "x:Bottom": e["!margins"].bottom || "0.75", "x:Left": e["!margins"].left || "0.7", "x:Right": e["!margins"].right || "0.7", "x:Top": e["!margins"].top || "0.75" })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) if (a.Workbook.Sheets[t].Hidden) n.push(Ae("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
  else {
    for (var i = 0; i < t && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i) ;
    i == t && n.push("<Selected/>");
  }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(Et("ProtectContents", "True")), e["!protect"].objects && n.push(Et("ProtectObjects", "True")), e["!protect"].scenarios && n.push(Et("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(Et("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(Et("EnableSelection", "UnlockedCells")), [["formatCells", "AllowFormatCells"], ["formatColumns", "AllowSizeCols"], ["formatRows", "AllowSizeRows"], ["insertColumns", "AllowInsertCols"], ["insertRows", "AllowInsertRows"], ["insertHyperlinks", "AllowInsertHyperlinks"], ["deleteColumns", "AllowDeleteCols"], ["deleteRows", "AllowDeleteRows"], ["sort", "AllowSort"], ["autoFilter", "AllowFilter"], ["pivotTables", "AllowUsePivotTables"]].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : Ae("WorksheetOptions", n.join(""), { xmlns: Gt.x });
}
function sy(e) {
  return e.map(function(r) {
    var t = m1(r.t || ""), a = Ae("ss:Data", t, { xmlns: "http://www.w3.org/TR/REC-html40" }), n = {};
    return r.a && (n["ss:Author"] = r.a), e.hidden || (n["ss:ShowAlways"] = "1"), Ae("Comment", a, n);
  }).join("");
}
function fy(e, r, t, a, n, i, s) {
  if (!e || e.v == null && e.f == null) return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + xr(Zs(e.f, s))), e.F && e.F.slice(0, r.length) == r) {
    var c = Br(e.F.slice(r.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = xr(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = xr(e.l.Tooltip))), t["!merges"]) for (var u = t["!merges"], h = 0; h != u.length; ++h) u[h].s.c != s.c || u[h].s.r != s.r || (u[h].e.c > u[h].s.c && (f["ss:MergeAcross"] = u[h].e.c - u[h].s.c), u[h].e.r > u[h].s.r && (f["ss:MergeDown"] = u[h].e.r - u[h].s.r));
  var v = "", d = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs) return "";
      break;
    case "n":
      isFinite(e.v) ? (v = "Number", d = String(e.v)) : (v = "Error", d = xt[isNaN(e.v) ? 36 : 7]);
      break;
    case "b":
      v = "Boolean", d = e.v ? "1" : "0";
      break;
    case "e":
      v = "Error", d = xt[e.v];
      break;
    case "d":
      v = "DateTime", d = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || nr[14]);
      break;
    case "s":
      v = "String", d = v1(e.v || "");
      break;
  }
  var x = an(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + x), f["ss:Index"] = s.c + 1;
  var w = e.v != null ? d : "", y = e.t == "z" ? "" : '<Data ss:Type="' + v + '">' + w + "</Data>";
  return (e.c || []).length > 0 && (y += sy(e.c)), Ae("Cell", y, f);
}
function oy(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return r && (r.hpt && !r.hpx && (r.hpx = qn(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), r.hidden && (t += ' ss:Hidden="1"')), t + ">";
}
function cy(e, r, t, a) {
  if (!e["!ref"]) return "";
  var n = Cr(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(_, g) {
    Ja(_);
    var F = !!_.width, E = e0(g, _), I = { "ss:Index": g + 1 };
    F && (I["ss:Width"] = Ri(E.width)), _.hidden && (I["ss:Hidden"] = "1"), f.push(Ae("Column", null, I));
  });
  for (var c = e["!data"] != null, u = { r: 0, c: 0 }, h = n.s.r; h <= n.e.r; ++h) {
    var v = [oy(h, (e["!rows"] || [])[h])];
    u.r = h;
    for (var d = n.s.c; d <= n.e.c; ++d) {
      u.c = d;
      var x = false;
      for (s = 0; s != i.length; ++s) if (!(i[s].s.c > d) && !(i[s].s.r > h) && !(i[s].e.c < d) && !(i[s].e.r < h)) {
        (i[s].s.c != d || i[s].s.r != h) && (x = true);
        break;
      }
      if (!x) {
        var w = vr(d) + Tr(h), y = c ? (e["!data"][h] || [])[d] : e[w];
        v.push(fy(y, w, e, r, t, a, u));
      }
    }
    v.push("</Row>"), v.length > 2 && f.push(v.join(""));
  }
  return f.join("");
}
function uy(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? ny(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? cy(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(iy(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + Zs(Ci(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function ly(e, r) {
  r || (r = {}), e.SSF || (e.SSF = Hr(nr)), e.SSF && (Yn(), Vs(e.SSF), r.revssf = Ks(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], an(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(ey(e, r)), t.push(ry(e)), t.push(""), t.push(ay(e));
  for (var a = 0; a < e.SheetNames.length; ++a) t.push(Ae("Worksheet", uy(a, r, e), { "ss:Name": xr(e.SheetNames[a]) }));
  return t[2] = ty(e, r), it + Ae("Workbook", t.join(""), { xmlns: Gt.ss, "xmlns:o": Gt.o, "xmlns:x": Gt.x, "xmlns:ss": Gt.ss, "xmlns:dt": Gt.dt, "xmlns:html": Gt.html });
}
function hy(e) {
  var r = {}, t = e.content;
  if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = z1(t), t.length - t.l <= 4) return r;
  var a = t.read_shift(4);
  if (a == 0 || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4) || (a = t.read_shift(4), a !== 1907505652) || (r.UnicodeClipboardFormat = $1(t), a = t.read_shift(4), a == 0 || a > 40)) return r;
  t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr");
}
var dy = [60, 1084, 2066, 2165, 2175];
function xy(e, r, t, a, n) {
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
  for (var c = Ra(t, t.l), u = af[c], h = 0; u != null && dy.indexOf(c) > -1; ) i = Ra(t, t.l + 2), h = t.l + 4, c == 2066 ? h += 4 : (c == 2165 || c == 2175) && (h += 12), f = t.slice(h, t.l + 4 + i), s.push(f), t.l += 4 + i, u = af[c = Ra(t, t.l)];
  var v = at(s);
  lt(v, 0);
  var d = 0;
  v.lens = [];
  for (var x = 0; x < s.length; ++x) v.lens.push(d), d += s[x].length;
  if (v.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + v.length + " < " + a;
  return r.f(v, v.length, n);
}
function _a(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, r.cellNF && e.z == null && (e.z = nr[a]);
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (!r || r.cellText !== false) try {
      e.t === "e" ? e.w = e.w || xt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Fi(e.v) : e.w = gn(e.v) : e.w = Yt(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && ia(nr[a] || String(a))) {
      var n = Oa(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Ts(e, r, t) {
  return { v: e, ixfe: r, t };
}
function py(e, r) {
  var t = { opts: {} }, a = {}, n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, c = [], u = "", h = {}, v, d = "", x, w, y, _, g = {}, F = [], E, I, V = [], K = [], A = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, H = {}, W = false, Z = function(Ve) {
    return Ve < 8 ? dn[Ve] : Ve < 64 && K[Ve - 8] || dn[Ve];
  }, j = function(Ve, _r) {
    var jr = Ve.XF.data;
    if (!(!jr || !jr.patternType || !_r || !_r.cellStyles)) {
      Ve.s = {}, Ve.s.patternType = jr.patternType;
      var zr;
      (zr = Ni(Z(jr.icvFore))) && (Ve.s.fgColor = { rgb: zr }), (zr = Ni(Z(jr.icvBack))) && (Ve.s.bgColor = { rgb: zr });
    }
  }, ne = function(Ve, _r, jr) {
    if (!(!W && Se > 1) && !(jr.sheetRows && Ve.r >= jr.sheetRows)) {
      if (jr.cellStyles && _r.XF && _r.XF.data && j(_r, jr), delete _r.ixfe, delete _r.XF, v = Ve, d = gr(Ve), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ve.r < s.s.r && (s.s.r = Ve.r), Ve.c < s.s.c && (s.s.c = Ve.c), Ve.r + 1 > s.e.r && (s.e.r = Ve.r + 1), Ve.c + 1 > s.e.c && (s.e.c = Ve.c + 1), jr.cellFormula && _r.f) {
        for (var zr = 0; zr < F.length; ++zr) if (!(F[zr][0].s.c > Ve.c || F[zr][0].s.r > Ve.r) && !(F[zr][0].e.c < Ve.c || F[zr][0].e.r < Ve.r)) {
          _r.F = dr(F[zr][0]), (F[zr][0].s.c != Ve.c || F[zr][0].s.r != Ve.r) && delete _r.f, _r.f && (_r.f = "" + Dt(F[zr][1], s, Ve, he, de));
          break;
        }
      }
      jr.dense ? (n["!data"][Ve.r] || (n["!data"][Ve.r] = []), n["!data"][Ve.r][Ve.c] = _r) : n[d] = _r;
    }
  }, de = { enc: false, sbcch: 0, snames: [], sharedf: g, arrayf: F, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!r && !!r.cellStyles, WTF: !!r && !!r.wtf };
  r.password && (de.password = r.password);
  var We, me = [], ze = [], ke = [], Be = [], Qe = false, he = [];
  he.SheetNames = de.snames, he.sharedf = de.sharedf, he.arrayf = de.arrayf, he.names = [], he.XTI = [];
  var sr = 0, Se = 0, Oe = 0, _e = [], Ke = [], je;
  de.codepage = 1200, ua(1200);
  for (var $e = false; e.l < e.length - 1; ) {
    var R = e.l, ee = e.read_shift(2);
    if (ee === 0 && sr === 10) break;
    var L = e.l === e.length ? 0 : e.read_shift(2), U = af[ee];
    if (Se == 0 && [9, 521, 1033, 2057].indexOf(ee) == -1) break;
    if (U && U.f) {
      if (r.bookSheets && sr === 133 && ee !== 133) break;
      if (sr = ee, U.r === 2 || U.r == 12) {
        var ue = e.read_shift(2);
        if (L -= 2, !de.enc && ue !== ee && ((ue & 255) << 8 | ue >> 8) !== ee) throw new Error("rt mismatch: " + ue + "!=" + ee);
        U.r == 12 && (e.l += 10, L -= 10);
      }
      var O = {};
      if (ee === 10 ? O = U.f(e, L, de) : O = xy(ee, U, e, L, de), Se == 0 && [9, 521, 1033, 2057].indexOf(sr) === -1) continue;
      switch (ee) {
        case 34:
          t.opts.Date1904 = A.WBProps.date1904 = O;
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
          ua(de.codepage = Ce), $e = true;
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
          V.push(O);
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
          je = { Name: O.Name, Ref: Dt(O.rgce, s, null, he, de) }, O.itab > 0 && (je.Sheet = O.itab - 1), he.names.push(je), he[0] || (he[0] = [], he[0].XTI = []), he[he.length - 1].push(O), O.Name == "_xlnm._FilterDatabase" && O.itab > 0 && O.rgce && O.rgce[0] && O.rgce[0][0] && O.rgce[0][0][0] == "PtgArea3d" && (Ke[O.itab - 1] = { ref: dr(O.rgce[0][0][1][2]) });
          break;
        case 22:
          de.ExternCount = O;
          break;
        case 23:
          he.length == 0 && (he[0] = [], he[0].XTI = []), he[he.length - 1].XTI = he[he.length - 1].XTI.concat(O), he.XTI = he.XTI.concat(O);
          break;
        case 2196:
          if (de.biff < 8) break;
          je != null && (je.Comment = O[1]);
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
            if (--Se ? !W : W) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = dr(s), r.sheetRows && r.sheetRows <= s.e.r) {
                  var Ue = s.e.r;
                  s.e.r = r.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = dr(s), s.e.r = Ue;
                }
                s.e.r++, s.e.c++;
              }
              me.length > 0 && (n["!merges"] = me), ze.length > 0 && (n["!objects"] = ze), ke.length > 0 && (n["!cols"] = ke), Be.length > 0 && (n["!rows"] = Be), A.Sheets.push(H);
            }
            u === "" ? h = n : a[u] = n, n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (de.biff === 8 && (de.biff = { 9: 2, 521: 3, 1033: 4 }[ee] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[O.BIFFVer] || 8), de.biffguess = O.BIFFVer == 0, O.BIFFVer == 0 && O.dt == 4096 && (de.biff = 5, $e = true, ua(de.codepage = 28591)), de.biff == 4 && O.dt & 256 && (W = true), de.biff == 8 && O.BIFFVer == 0 && O.dt == 16 && (de.biff = 2), Se++ && !W) break;
            if (n = {}, r.dense && (n["!data"] = []), de.biff < 8 && !$e && ($e = true, ua(de.codepage = r.codepage || 1252)), de.biff == 4 && W) u = (i[de.snames.indexOf(u) + 1] || { name: "" }).name;
            else if (de.biff < 5 || O.BIFFVer == 0 && O.dt == 4096) {
              u === "" && (u = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Fe = { pos: e.l - L, name: u };
              i[Fe.pos] = Fe, de.snames.push(u);
            } else u = (i[R] || { name: "" }).name;
            O.dt == 32 && (n["!type"] = "chart"), O.dt == 64 && (n["!type"] = "macro"), me = [], ze = [], de.arrayf = F = [], ke = [], Be = [], Qe = false, H = { Hidden: (i[R] || { hs: 0 }).hs, name: u };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][O.r] || [])[O.c] : n[vr(O.c) + Tr(O.r)]) && ++O.c, E = { ixfe: O.ixfe, XF: V[O.ixfe] || {}, v: O.val, t: "n" }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r);
          break;
        case 5:
        case 517:
          E = { ixfe: O.ixfe, XF: V[O.ixfe], v: O.val, t: O.t }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r);
          break;
        case 638:
          E = { ixfe: O.ixfe, XF: V[O.ixfe], v: O.rknum, t: "n" }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r);
          break;
        case 189:
          for (var ar = O.c; ar <= O.C; ++ar) {
            var rr = O.rkrec[ar - O.c][0];
            E = { ixfe: rr, XF: V[rr], v: O.rkrec[ar - O.c][1], t: "n" }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: ar, r: O.r }, E, r);
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
            if (E = Ts(O.val, O.cell.ixfe, O.tt), E.XF = V[E.ixfe], r.cellFormula) {
              var or = O.formula;
              if (or && or[0] && or[0][0] && or[0][0][0] == "PtgExp") {
                var br = or[0][0][1][0], yr = or[0][0][1][1], Kr = gr({ r: br, c: yr });
                g[Kr] ? E.f = "" + Dt(O.formula, s, O.cell, he, de) : E.F = ((r.dense ? (n["!data"][br] || [])[yr] : n[Kr]) || {}).F;
              } else E.f = "" + Dt(O.formula, s, O.cell, he, de);
            }
            Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne(O.cell, E, r), f = O;
          }
          break;
        case 7:
        case 519:
          if (f) f.val = O, E = Ts(O, f.cell.ixfe, "s"), E.XF = V[E.ixfe], r.cellFormula && (E.f = "" + Dt(f.formula, s, f.cell, he, de)), Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne(f.cell, E, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            F.push(O);
            var Ge = gr(O[0].s);
            if (x = r.dense ? (n["!data"][O[0].s.r] || [])[O[0].s.c] : n[Ge], r.cellFormula && x) {
              if (!f || !Ge || !x) break;
              x.f = "" + Dt(O[1], s, O[0], he, de), x.F = dr(O[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (d) {
              if (!f) break;
              g[gr(f.cell)] = O[0], x = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[gr(f.cell)], (x || {}).f = "" + Dt(O[0], s, v, he, de);
            }
          }
          break;
        case 253:
          E = Ts(c[O.isst].t, O.ixfe, "s"), c[O.isst].h && (E.h = c[O.isst].h), E.XF = V[E.ixfe], Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r);
          break;
        case 513:
          r.sheetStubs && (E = { ixfe: O.ixfe, XF: V[O.ixfe], t: "z" }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r));
          break;
        case 190:
          if (r.sheetStubs) for (var kr = O.c; kr <= O.C; ++kr) {
            var Re = O.ixfe[kr - O.c];
            E = { ixfe: Re, XF: V[Re], t: "z" }, Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: kr, r: O.r }, E, r);
          }
          break;
        case 214:
        case 516:
        case 4:
          E = Ts(O.val, O.ixfe, "s"), E.XF = V[E.ixfe], Oe > 0 && (E.z = E.XF && E.XF.numFmtId && _e[E.XF.numFmtId] || _e[E.ixfe >> 8 & 63]), _a(E, r, t.opts.Date1904), ne({ c: O.c, r: O.r }, E, r);
          break;
        case 0:
        case 512:
          Se === 1 && (s = O);
          break;
        case 252:
          c = O;
          break;
        case 1054:
          if (de.biff >= 3 && de.biff <= 4) {
            _e[Oe++] = O[1];
            for (var Vr = 0; Vr < Oe + 163 && nr[Vr] != O[1]; ++Vr) ;
            Vr >= 163 && Ya(O[1], Oe + 163);
          } else Ya(O[1], O[0]);
          break;
        case 30:
          {
            _e[Oe++] = O;
            for (var qr = 0; qr < Oe + 163 && nr[qr] != O; ++qr) ;
            qr >= 163 && Ya(O, Oe + 163);
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
          for (_ = O[0].s.r; _ <= O[0].e.r; ++_) for (y = O[0].s.c; y <= O[0].e.c; ++y) x = r.dense ? (n["!data"][_] || [])[y] : n[gr({ c: y, r: _ })], x && (x.l = O[1]);
          break;
        case 2048:
          for (_ = O[0].s.r; _ <= O[0].e.r; ++_) for (y = O[0].s.c; y <= O[0].e.c; ++y) x = r.dense ? (n["!data"][_] || [])[y] : n[gr({ c: y, r: _ })], x && x.l && (x.l.Tooltip = O[1]);
          break;
        case 28:
          {
            if (x = r.dense ? (n["!data"][O[0].r] || [])[O[0].c] : n[gr(O[0])], x || (r.dense ? (n["!data"][O[0].r] || (n["!data"][O[0].r] = []), x = n["!data"][O[0].r][O[0].c] = { t: "z" }) : x = n[gr(O[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, O[0].r), s.s.r = Math.min(s.s.r, O[0].r), s.e.c = Math.max(s.e.c, O[0].c), s.s.c = Math.min(s.s.c, O[0].c)), x.c || (x.c = []), de.biff <= 5 && de.biff >= 2) w = { a: "SheetJ5", t: O[1] };
            else {
              var Mr = ze[O[2]];
              w = { a: O[1], t: Mr.TxO.t }, O[3] != null && !(O[3] & 2) && (x.c.hidden = true);
            }
            x.c.push(w);
          }
          break;
        case 2173:
          Yv(V[O.ixfe], O.ext);
          break;
        case 125:
          {
            if (!de.cellStyles) break;
            for (; O.e >= O.s; ) ke[O.e--] = { width: O.w / 256, level: O.level || 0, hidden: !!(O.flags & 1) }, Qe || (Qe = true, Nf(O.w / 256)), Ja(ke[O.e + 1]);
          }
          break;
        case 520:
          {
            var kt = {};
            O.level != null && (Be[O.r] = kt, kt.level = O.level), O.hidden && (Be[O.r] = kt, kt.hidden = true), O.hpt && (Be[O.r] = kt, kt.hpt = O.hpt, kt.hpx = qn(O.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || mn(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[ee]] = O;
          break;
        case 161:
          n["!margins"] || mn(n["!margins"] = {}), n["!margins"].header = O.header, n["!margins"].footer = O.footer;
          break;
        case 574:
          O.RTL && (A.Views[0].RTL = true);
          break;
        case 146:
          K = O;
          break;
        case 2198:
          We = O;
          break;
        case 140:
          I = O;
          break;
        case 442:
          u ? H.CodeName = O || H.name : A.WBProps.CodeName = O || "ThisWorkbook";
          break;
      }
    } else U || console.error("Missing Info for XLS Record 0x" + ee.toString(16)), e.l += L;
  }
  return t.SheetNames = Gr(i).sort(function(pt, Ve) {
    return Number(pt) - Number(Ve);
  }).map(function(pt) {
    return i[pt].name;
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && h["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = h)) : t.Preamble = h, t.Sheets && Ke.forEach(function(pt, Ve) {
    t.Sheets[t.SheetNames[Ve]]["!autofilter"] = pt;
  }), t.Strings = c, t.SSF = Hr(nr), de.enc && (t.Encryption = de.enc), We && (t.Themes = We), t.Metadata = {}, I !== void 0 && (t.Metadata.Country = I), he.names.length > 0 && (A.Names = he.names), t.Workbook = A, t;
}
var Ei = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function vy(e, r, t) {
  var a = ir.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = Qo(a, Z0, Ei.DSI);
    for (var i in n) r[i] = n[i];
  } catch (u) {
    if (t.WTF) throw u;
  }
  var s = ir.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = Qo(s, J0, Ei.SI);
    for (var c in f) r[c] == null && (r[c] = f[c]);
  } catch (u) {
    if (t.WTF) throw u;
  }
  r.HeadingPairs && r.TitlesOfParts && (ku(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function my(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = Io(Z0, "n"), c = Io(J0, "n");
  if (e.Props) for (s = Gr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops) for (s = Gr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var u = [];
  for (i = 0; i < n.length; ++i) bu.indexOf(n[i][0]) > -1 || yu.indexOf(n[i][0]) > -1 || n[i][1] != null && u.push(n[i]);
  a.length && ir.utils.cfb_add(r, "/SummaryInformation", ec(a, Ei.SI, c, J0)), (t.length || u.length) && ir.utils.cfb_add(r, "/DocumentSummaryInformation", ec(t, Ei.DSI, f, Z0, u.length ? u : null, Ei.UDI));
}
function _l(e, r) {
  r || (r = {}), Uf(r), uf(), r.codepage && cf(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (ir.find(e, "/encryption")) throw new Error("File is password-protected");
    t = ir.find(e, "!CompObj"), a = ir.find(e, "/Workbook") || ir.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = Ut(qt(e));
        break;
      case "binary":
        e = Ut(e);
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
  if (t && hy(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = pr ? "buffer" : "array";
    if (a && a.content) n = py(a.content, r);
    else if ((i = ir.find(e, "PerfectOffice_MAIN")) && i.content) n = pn.to_workbook(i.content, (r.type = s, r));
    else if ((i = ir.find(e, "NativeContent_MAIN")) && i.content) n = pn.to_workbook(i.content, (r.type = s, r));
    else throw (i = ir.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && ir.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = Sm(e));
  }
  var f = {};
  return e.FullPaths && vy(e, f, r), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function gy(e, r) {
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
  return ir.utils.cfb_add(a, n, yl(e, t)), t.biff == 8 && (e.Props || e.Custprops) && my(e, a), t.biff == 8 && e.vbaraw && Fm(a, ir.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Li = { 0: { f: j2 }, 1: { f: Q2 }, 2: { f: v_ }, 3: { f: f_ }, 4: { f: a_ }, 5: { f: d_ }, 6: { f: y_ }, 7: { f: c_ }, 8: { f: A_ }, 9: { f: b_ }, 10: { f: S_ }, 11: { f: F_ }, 12: { f: r_ }, 13: { f: g_ }, 14: { f: o_ }, 15: { f: i_ }, 16: { f: hl }, 17: { f: E_ }, 18: { f: l_ }, 19: { f: Tf }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: Tw }, 40: {}, 42: {}, 43: { f: wv }, 44: { f: gv }, 45: { f: Ev }, 46: { f: Sv }, 47: { f: Tv }, 48: {}, 49: { f: P1 }, 50: {}, 51: { f: Qv }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: Wu }, 62: { f: w_ }, 63: { f: cm }, 64: { f: K_ }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Bt, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: W_ }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: Z2 }, 148: { f: $2, p: 16 }, 151: { f: R_ }, 152: {}, 153: { f: yw }, 154: {}, 155: {}, 156: { f: _w }, 157: {}, 158: {}, 159: { T: 1, f: Ip }, 160: { T: -1 }, 161: { T: 1, f: An }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: C_ }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: Zv }, 336: { T: -1 }, 337: { f: tm, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: Y0 }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: Uu }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: P_ }, 427: { f: B_ }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: M_ }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: Y2 }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: O_ }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: Y0 }, 551: { f: zs }, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: ym }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: _m }, 636: { T: -1 }, 637: { f: U1 }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: fw }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: j_ }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, af = { 6: { f: M0 }, 10: { f: qa }, 12: { f: Qr }, 13: { f: Qr }, 14: { f: tt }, 15: { f: tt }, 16: { f: Ot }, 17: { f: tt }, 18: { f: tt }, 19: { f: Qr }, 20: { f: ic }, 21: { f: ic }, 23: { f: Uu }, 24: { f: fc }, 25: { f: tt }, 26: {}, 27: {}, 28: { f: Ux }, 29: {}, 34: { f: tt }, 35: { f: sc }, 38: { f: Ot }, 39: { f: Ot }, 40: { f: Ot }, 41: { f: Ot }, 42: { f: tt }, 43: { f: tt }, 47: { f: Jp }, 49: { f: fx }, 51: { f: Qr }, 60: {}, 61: { f: tx }, 64: { f: tt }, 65: { f: sx }, 66: { f: Qr }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Qr }, 89: {}, 90: {}, 91: {}, 92: { f: jd }, 93: { f: Vx }, 94: {}, 95: { f: tt }, 96: {}, 97: {}, 99: { f: tt }, 125: { f: Wu }, 128: { f: Cx }, 129: { f: zd }, 130: { f: Qr }, 131: { f: tt }, 132: { f: tt }, 133: { f: $d }, 134: {}, 140: { f: Yx }, 141: { f: Qr }, 144: {}, 146: { f: Qx }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Qr }, 157: {}, 158: {}, 160: { f: sp }, 161: { f: tp }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: wx }, 190: { f: yx }, 193: { f: qa }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: tt }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Qr }, 220: {}, 221: { f: tt }, 222: {}, 224: { f: Ex }, 225: { f: Kd }, 226: { f: qa }, 227: {}, 229: { f: Wx }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: Yd }, 253: { f: cx }, 255: { f: Jd }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: Au }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: tt }, 353: { f: qa }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: Rx }, 431: { f: tt }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: jx }, 439: { f: tt }, 440: { f: Gx }, 441: {}, 442: { f: ji }, 443: {}, 444: { f: Qr }, 445: {}, 446: {}, 448: { f: qa }, 449: { f: rx, r: 2 }, 450: { f: qa }, 512: { f: ac }, 513: { f: ip }, 515: { f: Ox }, 516: { f: lx }, 517: { f: Ix }, 519: { f: fp }, 520: { f: Qd }, 523: {}, 545: { f: cc }, 549: { f: tc }, 566: {}, 574: { f: nx }, 638: { f: _x }, 659: {}, 1048: {}, 1054: { f: dx }, 1084: {}, 1212: { f: Bx }, 2048: { f: $x }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: ws }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: qa }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: ep, r: 12 }, 2173: { f: qv, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: tt, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: Px, r: 12 }, 2197: {}, 2198: { f: Xv, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: Lx, r: 12 }, 2203: { f: qa }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: ex }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Qr }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: ap }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: Jx }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: ac }, 1: {}, 2: { f: hp }, 3: { f: up }, 4: { f: cp }, 5: { f: pp }, 7: { f: xp }, 8: {}, 9: { f: ws }, 11: {}, 22: { f: Qr }, 30: { f: px }, 31: {}, 32: {}, 33: { f: cc }, 36: {}, 37: { f: tc }, 50: { f: vp }, 62: {}, 52: {}, 67: { f: Tx }, 68: { f: Qr }, 69: {}, 86: {}, 126: {}, 127: { f: op }, 135: {}, 136: {}, 137: {}, 143: { f: gp }, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: mp }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: M0 }, 521: { f: ws }, 536: { f: fc }, 547: { f: sc }, 561: {}, 579: { f: bx }, 1030: { f: M0 }, 1033: { f: ws }, 1091: { f: Ax }, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 101: {}, 102: {}, 105: {}, 106: {}, 107: {}, 109: {}, 112: {}, 114: {}, 29282: {} };
function ge(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && yf(t) && e.push(t);
  }
}
function _y(e, r, t, a) {
  var n = (t || []).length || 0;
  if (n <= 8224) return ge(e, r, t, n);
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
function X0(e, r, t, a) {
  var n = oe(9);
  return Gi(n, e, r), Du(t, a || "b", n), n;
}
function wy(e, r, t) {
  var a = oe(8 + 2 * t.length);
  return Gi(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function wl(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return ge(e, 28, P0(a, t[1], t[2]));
    ge(e, 28, P0(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048) ge(e, 28, P0(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
  });
}
function yy(e, r, t, a, n, i) {
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
      var c = r.t == "d" ? Zr($r(r.v, i), i) : r.v;
      n.biff == 2 && c == (c | 0) && c >= 0 && c < 65536 ? ge(e, 2, dp(t, a, c, f, s)) : isNaN(c) ? ge(e, 5, X0(t, a, 36, "e")) : isFinite(c) ? ge(e, 3, lp(t, a, c, f, s)) : ge(e, 5, X0(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      ge(e, 5, X0(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      ge(e, 4, wy(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  ge(e, 1, Gi(null, t, a));
}
function ky(e, r, t, a, n) {
  var i = r["!data"] != null, s = Cr(r["!ref"] || "A1"), f = "", c = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var u = (((n || {}).Workbook || {}).WBProps || {}).date1904, h = [], v = [], d = s.s.c; d <= s.e.c; ++d) c[d] = vr(d);
  for (var x = s.s.r; x <= s.e.r; ++x) for (i && (h = r["!data"][x] || []), f = Tr(x), d = s.s.c; d <= s.e.c; ++d) {
    var w = i ? h[d] : r[c[d] + f];
    w && (yy(e, w, x, d, a, u), w.c && v.push([w.c, x, d]));
  }
  wl(e, v);
}
function Ey(e, r) {
  for (var t = r || {}, a = Rt(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  ge(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, Df(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && ge(a, 34, Ct(true)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = Rt();
  return ky(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? ge(a, 30, vx(f)) : ge(a, 1054, mx(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        ge(a, 67, Sx(f));
        break;
      case 3:
        ge(a, 579, Mu(f));
        break;
      case 4:
        ge(a, 1091, Fx(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), ge(a, 10), a.end();
}
var ca = 1, ta = [];
function Ty() {
  var e = oe(82 + 8 * ta.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * ta.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * ta.length);
    {
      e.write_shift(4, ca), e.write_shift(4, ta.length + 1);
      for (var r = 0, t = 0; t < ta.length; ++t) r += ta[t] && ta[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, ta.length);
    }
    ta.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function Sy(e, r) {
  var t = [], a = 0, n = Rt(), i = ca, s;
  r.forEach(function(c, u) {
    var h = "", v = c[0].map(function(E) {
      return E.a && !h && (h = E.a), E.t;
    }).join("");
    ++ca;
    {
      var d = oe(150);
      d.write_shift(2, 15), d.write_shift(2, 61444), d.write_shift(4, 150), d.write_shift(2, 3234), d.write_shift(2, 61450), d.write_shift(4, 8), d.write_shift(4, ca), d.write_shift(4, 2560), d.write_shift(2, 227), d.write_shift(2, 61451), d.write_shift(4, 84), d.write_shift(2, 128), d.write_shift(4, 0), d.write_shift(2, 139), d.write_shift(4, 2), d.write_shift(2, 191), d.write_shift(4, 524296), d.write_shift(2, 344), d.l += 4, d.write_shift(2, 385), d.write_shift(4, 134217808), d.write_shift(2, 387), d.write_shift(4, 134217808), d.write_shift(2, 389), d.write_shift(4, 268435700), d.write_shift(2, 447), d.write_shift(4, 1048592), d.write_shift(2, 448), d.write_shift(4, 134217809), d.write_shift(2, 451), d.write_shift(4, 268435700), d.write_shift(2, 513), d.write_shift(4, 134217809), d.write_shift(2, 515), d.write_shift(4, 268435700), d.write_shift(2, 575), d.write_shift(4, 196609), d.write_shift(2, 959), d.write_shift(4, 131072 | (c[0].hidden ? 2 : 0)), d.l += 2, d.write_shift(2, 61456), d.write_shift(4, 18), d.write_shift(2, 3), d.write_shift(2, c[2] + 2), d.l += 2, d.write_shift(2, c[1] + 1), d.l += 2, d.write_shift(2, c[2] + 4), d.l += 2, d.write_shift(2, c[1] + 5), d.l += 2, d.l += 2, d.write_shift(2, 61457), d.l += 4, d.l = 150, u == 0 ? s = d : ge(n, 236, d);
    }
    a += 150;
    {
      var x = oe(52);
      x.write_shift(2, 21), x.write_shift(2, 18), x.write_shift(2, 25), x.write_shift(2, ca), x.write_shift(2, 0), x.l = 22, x.write_shift(2, 13), x.write_shift(2, 22), x.write_shift(4, 1651663474), x.write_shift(4, 2503426821), x.write_shift(4, 2150634280), x.write_shift(4, 1768515844 + ca * 256), x.write_shift(2, 0), x.write_shift(4, 0), x.l += 4, ge(n, 93, x);
    }
    {
      var w = oe(8);
      w.l += 2, w.write_shift(2, 61453), w.l += 4, ge(n, 236, w);
    }
    a += 8;
    {
      var y = oe(18);
      y.write_shift(2, 18), y.l += 8, y.write_shift(2, v.length), y.write_shift(2, 16), y.l += 4, ge(n, 438, y);
      {
        var _ = oe(1 + v.length);
        _.write_shift(1, 0), _.write_shift(v.length, v, "sbcs"), ge(n, 60, _);
      }
      {
        var g = oe(16);
        g.l += 8, g.write_shift(2, v.length), g.l += 6, ge(n, 60, g);
      }
    }
    {
      var F = oe(12 + h.length);
      F.write_shift(2, c[1]), F.write_shift(2, c[2]), F.write_shift(2, 0 | (c[0].hidden ? 0 : 2)), F.write_shift(2, ca), F.write_shift(2, h.length), F.write_shift(1, 0), F.write_shift(h.length, h, "sbcs"), F.l++, t.push(F);
    }
  });
  {
    var f = oe(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, ca), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), ge(e, 236, s ? at([f, s]) : f);
  }
  e.push(n.end()), t.forEach(function(c) {
    ge(e, 28, c);
  }), ta.push([i, r.length + 1, ca]), ++ca;
}
function Fy(e, r, t) {
  ge(e, 49, ox({ sz: 12, name: "Arial" }, t));
}
function by(e, r, t) {
  r && [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ge(e, 1054, xx(n, r[n], t));
  });
}
function Ay(e, r) {
  var t = oe(19);
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), ge(e, 2151, t), t = oe(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), Pu(Cr(r["!ref"] || "A1"), t), t.write_shift(4, 4), ge(e, 2152, t);
}
function Cy(e, r) {
  for (var t = 0; t < 16; ++t) ge(e, 224, nc({ numFmtId: 0, style: true }, 0, r));
  r.cellXfs.forEach(function(a) {
    ge(e, 224, nc(a, 0, r));
  });
}
function Dy(e, r) {
  for (var t = 0; t < r["!links"].length; ++t) {
    var a = r["!links"][t];
    ge(e, 440, zx(a)), a[1].Tooltip && ge(e, 2048, qx(a));
  }
  delete r["!links"];
}
function Iy(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function(a, n) {
      ++t <= 256 && a && ge(e, 125, rp(e0(n, a), n));
    });
  }
}
function Oy(e, r, t, a, n, i) {
  var s = 16 + an(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    ge(e, 513, En(t, a, s));
    return;
  }
  if (r.bf) ge(e, 6, Jg(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? Zr($r(r.v, i), i) : r.v;
      isNaN(f) ? ge(e, 517, R0(t, a, 36, s, n, "e")) : isFinite(f) ? ge(e, 515, Nx(t, a, f, s)) : ge(e, 517, R0(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      ge(e, 517, R0(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var c = Bf(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        ge(e, 253, ux(t, a, c, s));
      } else ge(e, 516, hx(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      ge(e, 513, En(t, a, s));
  }
}
function Ny(e, r, t) {
  var a = Rt(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, c = i["!data"] != null, u = r.biff == 8, h = "", v = [], d = Cr(i["!ref"] || "A1"), x = u ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= x) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + x);
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.r, x - 1);
  }
  ge(a, 2057, Df(t, 16, r)), ge(a, 13, aa(1)), ge(a, 12, aa(100)), ge(a, 15, Ct(true)), ge(a, 17, Ct(false)), ge(a, 16, yn(1e-3)), ge(a, 95, Ct(true)), ge(a, 42, Ct(false)), ge(a, 43, Ct(false)), ge(a, 130, aa(1)), ge(a, 128, Dx()), ge(a, 131, Ct(false)), ge(a, 132, Ct(false)), u && Iy(a, i["!cols"]), ge(a, 512, gx(d, r));
  var w = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  u && (i["!links"] = []);
  for (var y = d.s.c; y <= d.e.c; ++y) v[y] = vr(y);
  for (var _ = [], g = [], F = d.s.r; F <= d.e.r; ++F) for (c && (g = i["!data"][F] || []), h = Tr(F), y = d.s.c; y <= d.e.c; ++y) {
    var E = c ? g[y] : i[v[y] + h];
    E && (Oy(a, E, F, y, r, w), u && E.l && i["!links"].push([v[y] + h, E.l]), E.c && _.push([E.c, F, y]));
  }
  var I = f.CodeName || f.name || n;
  return u ? Sy(a, _) : wl(a, _), u && ge(a, 574, ix((s.Views || [])[0])), u && (i["!merges"] || []).length && ge(a, 229, Hx(i["!merges"])), u && Dy(a, i), ge(a, 442, Iu(I)), u && Ay(a, i), ge(a, 10), a.end();
}
function Ry(e, r, t) {
  var a = Rt(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = t.biff == 8, c = t.biff == 5;
  if (ge(a, 2057, Df(e, 5, t)), t.bookType == "xla" && ge(a, 135), ge(a, 225, f ? aa(1200) : null), ge(a, 193, Sd(2)), c && ge(a, 191), c && ge(a, 192), ge(a, 226), ge(a, 92, Gd("SheetJS", t)), ge(a, 66, aa(f ? 1200 : 1252)), f && ge(a, 353, aa(0)), f && ge(a, 448), ge(a, 317, np(e.SheetNames.length)), f && e.vbaraw && ge(a, 211), f && e.vbaraw) {
    var u = s.CodeName || "ThisWorkbook";
    ge(a, 442, Iu(u));
  }
  ge(a, 156, aa(17)), ge(a, 25, Ct(false)), ge(a, 18, Ct(false)), ge(a, 19, aa(0)), f && ge(a, 431, Ct(false)), f && ge(a, 444, aa(0)), ge(a, 61, ax()), ge(a, 64, Ct(false)), ge(a, 141, aa(0)), ge(a, 34, Ct(hw(e) == "true")), ge(a, 14, Ct(true)), f && ge(a, 439, Ct(false)), ge(a, 218, aa(0)), Fy(a, e, t), by(a, e.SSF, t), Cy(a, t), f && ge(a, 352, Ct(false));
  var h = a.end(), v = Rt();
  f && ge(v, 140, Zx()), f && ta.length && ge(v, 235, Ty()), f && t.Strings && _y(v, 252, Zd(t.Strings)), ge(v, 10);
  var d = v.end(), x = Rt(), w = 0, y = 0;
  for (y = 0; y < e.SheetNames.length; ++y) w += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[y].length;
  var _ = h.length + w + d.length;
  for (y = 0; y < e.SheetNames.length; ++y) {
    var g = i[y] || {};
    ge(x, 133, qd({ pos: _, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[y] }, t)), _ += r[y].length;
  }
  var F = x.end();
  if (w != F.length) throw new Error("BS8 " + w + " != " + F.length);
  var E = [];
  return h.length && E.push(h), F.length && E.push(F), d.length && E.push(d), at(E);
}
function Py(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (Yn(), Vs(e.SSF), t.revssf = Ks(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), ca = 1, ta = [], t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Wf(t), t.cellXfs = [], an(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = Ny(n, t, e);
  return a.unshift(Ry(e, a, t)), at(a);
}
function yl(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var a = e.Sheets[e.SheetNames[t]];
    if (!(!a || !a["!ref"])) {
      var n = yt(a["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond column IV (255).  Data may be lost."), n.e.r > 65535 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond row 65536.  Data may be lost.");
    }
  }
  var i = r || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return Py(e, r);
    case 4:
    case 3:
    case 2:
      return Ey(e, r);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function kc(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : xh, n = {};
  a && (n["!data"] = []), e = Xi(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, c = s && s.index || e.length, u = i1(e.slice(f, c), /(:?<tr[^<>]*>)/i, "<tr>"), h = -1, v = 0, d = 0, x = 0, w = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, y = [];
  for (f = 0; f < u.length; ++f) {
    var _ = u[f].trim(), g = _.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if (++h, t.sheetRows && t.sheetRows <= h) {
        --h;
        break;
      }
      v = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var F = _.split(/<\/t[dh]>/i);
      for (c = 0; c < F.length; ++c) {
        var E = F[c].trim();
        if (E.match(/<t[dh]/i)) {
          for (var I = E, V = 0; I.charAt(0) == "<" && (V = I.indexOf(">")) > -1; ) I = I.slice(V + 1);
          for (var K = 0; K < y.length; ++K) {
            var A = y[K];
            A.s.c == v && A.s.r < h && h <= A.e.r && (v = A.e.c + 1, K = -1);
          }
          var H = Ye(E.slice(0, E.indexOf(">")));
          x = H.colspan ? +H.colspan : 1, ((d = +H.rowspan) > 1 || x > 1) && y.push({ s: { r: h, c: v }, e: { r: h + (d || 1) - 1, c: v + x - 1 } });
          var W = H.t || H["data-t"] || "";
          if (!I.length) {
            v += x;
            continue;
          }
          if (I = Yc(I), w.s.r > h && (w.s.r = h), w.e.r < h && (w.e.r = h), w.s.c > v && (w.s.c = v), w.e.c < v && (w.e.c = v), !I.length) {
            v += x;
            continue;
          }
          var Z = { t: "s", v: I };
          t.raw || !I.trim().length || W == "s" || (I === "TRUE" ? Z = { t: "b", v: true } : I === "FALSE" ? Z = { t: "b", v: false } : isNaN($t(I)) ? isNaN(bi(I).getDate()) ? I.charCodeAt(0) == 35 && wt[I] != null && (Z.t = "e", Z.w = I, Z.v = wt[I]) : (Z = { t: "d", v: $r(I) }, t.UTC === false && (Z.v = wn(Z.v)), t.cellDates || (Z = { t: "n", v: Zr(Z.v) }), Z.z = t.dateNF || nr[14]) : Z = { t: "n", v: $t(I) }), Z.cellText !== false && (Z.w = I), a ? (n["!data"][h] || (n["!data"][h] = []), n["!data"][h][v] = Z) : n[gr({ r: h, c: v })] = Z, v += x;
        }
      }
    }
  }
  return n["!ref"] = dr(w), y.length && (n["!merges"] = y), n;
}
function By(e, r, t, a) {
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
      var d = vr(c) + Tr(t), x = f ? (e["!data"][t] || [])[c] : e[d];
      x && x.t == "n" && x.v != null && !isFinite(x.v) && (isNaN(x.v) ? x = { t: "e", v: 36, w: xt[36] } : x = { t: "e", v: 7, w: xt[7] });
      var w = x && x.v != null && (x.h || xi(x.w || (Ua(x), x.w) || "")) || "";
      s = {}, u > 1 && (s.rowspan = u), h > 1 && (s.colspan = h), a.editable ? w = '<span contenteditable="true">' + w + "</span>" : x && (s["data-t"] = x && x.t || "z", x.v != null && (s["data-v"] = xi(x.v instanceof Date ? x.v.toISOString() : x.v)), x.z != null && (s["data-z"] = x.z), x.l && (x.l.Target || "#").charAt(0) != "#" && (w = '<a href="' + xi(x.l.Target) + '">' + w + "</a>")), s.id = (a.id || "sjs") + "-" + d, i.push(Ae("td", w, s));
    }
  }
  var y = "<tr>";
  return y + i.join("") + "</tr>";
}
var Ly = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', My = "</body></html>";
function Uy(e, r) {
  var t = o1(e, "table");
  if (!t || t.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) {
    var a = tn(kc(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = Xf();
  return t.forEach(function(i, s) {
    Yi(n, kc(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function Wy(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function kl(e, r) {
  var t = r || {}, a = t.header != null ? t.header : Ly, n = t.footer != null ? t.footer : My, i = [a], s = yt(e["!ref"] || "A1");
  if (i.push(Wy(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(By(e, s, f, t));
  return i.push("</table>" + n), i.join("");
}
function El(e, r, t) {
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
    var v = yt(e["!ref"]);
    h.s.r = Math.min(h.s.r, v.s.r), h.s.c = Math.min(h.s.c, v.s.c), h.e.r = Math.max(h.e.r, v.e.r), h.e.c = Math.max(h.e.c, v.e.c), s == -1 && (h.e.r = s = v.e.r + 1);
  }
  var d = [], x = 0, w = e["!rows"] || (e["!rows"] = []), y = 0, _ = 0, g = 0, F = 0, E = 0, I = 0;
  for (e["!cols"] || (e["!cols"] = []); y < a.length && _ < u; ++y) {
    var V = a[y];
    if (Ec(V)) {
      if (n.display) continue;
      w[_] = { hidden: true };
    }
    var K = V.cells;
    for (g = F = 0; g < K.length; ++g) {
      var A = K[g];
      if (!(n.display && Ec(A))) {
        var H = A.hasAttribute("data-v") ? A.getAttribute("data-v") : A.hasAttribute("v") ? A.getAttribute("v") : Yc(A.innerHTML), W = A.getAttribute("data-z") || A.getAttribute("z");
        for (x = 0; x < d.length; ++x) {
          var Z = d[x];
          Z.s.c == F + f && Z.s.r < _ + s && _ + s <= Z.e.r && (F = Z.e.c + 1 - f, x = -1);
        }
        I = +A.getAttribute("colspan") || 1, ((E = +A.getAttribute("rowspan") || 1) > 1 || I > 1) && d.push({ s: { r: _ + s, c: F + f }, e: { r: _ + s + (E || 1) - 1, c: F + f + (I || 1) - 1 } });
        var j = { t: "s", v: H }, ne = A.getAttribute("data-t") || A.getAttribute("t") || "";
        H != null && (H.length == 0 ? j.t = ne || "z" : n.raw || H.trim().length == 0 || ne == "s" || (ne == "e" && xt[+H] ? j = { t: "e", v: +H, w: xt[+H] } : H === "TRUE" ? j = { t: "b", v: true } : H === "FALSE" ? j = { t: "b", v: false } : isNaN($t(H)) ? isNaN(bi(H).getDate()) ? H.charCodeAt(0) == 35 && wt[H] != null && (j = { t: "e", v: wt[H], w: H }) : (j = { t: "d", v: $r(H) }, n.UTC && (j.v = js(j.v)), n.cellDates || (j = { t: "n", v: Zr(j.v) }), j.z = n.dateNF || nr[14]) : j = { t: "n", v: $t(H) })), j.z === void 0 && W != null && (j.z = W);
        var de = "", We = A.getElementsByTagName("A");
        if (We && We.length) for (var me = 0; me < We.length && !(We[me].hasAttribute("href") && (de = We[me].getAttribute("href"), de.charAt(0) != "#")); ++me) ;
        de && de.charAt(0) != "#" && de.slice(0, 11).toLowerCase() != "javascript:" && (j.l = { Target: de }), i ? (e["!data"][_ + s] || (e["!data"][_ + s] = []), e["!data"][_ + s][F + f] = j) : e[gr({ c: F + f, r: _ + s })] = j, h.e.c < F + f && (h.e.c = F + f), F += I;
      }
    }
    ++_;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), h.e.r = Math.max(h.e.r, _ - 1 + s), e["!ref"] = dr(h), _ >= u && (e["!fullref"] = dr((h.e.r = a.length - y + _ - 1 + s, h))), e;
}
function Tl(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), El(a, e, r);
}
function Hy(e, r) {
  var t = tn(Tl(e, r), r);
  return t;
}
function Ec(e) {
  var r = "", t = Vy(e);
  return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), r === "none";
}
function Vy(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function Xy(e) {
  var r = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), t = Sr(r.replace(/<[^<>]*>/g, ""));
  return [t];
}
function Sl(e, r, t) {
  var a = t || {}, n = Gs(e);
  ut.lastIndex = 0, n = xf(Xi(n, "<!--", "-->"));
  for (var i, s, f = "", c = "", u, h = 0, v = -1, d = ""; i = ut.exec(n); ) switch (i[3] = i[3].replace(/_[\s\S]*$/, "")) {
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
      i[1] === "/" ? (d = n.slice(v, ut.lastIndex - i[0].length), d == "%" && s[0] == "<number:percentage-style" ? f += "%" : f += '"' + d.replace(/"/g, '""') + '"') : i[0].charAt(i[0].length - 2) !== "/" && (v = ut.lastIndex);
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
        u["decimal-places"] && (f += "." + Fr("0", +u["decimal-places"]));
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
      i[1] === "/" ? (d = n.slice(v, ut.lastIndex - i[0].length), f += '"' + d.replace(/"/g, '""') + '"*') : i[0].charAt(i[0].length - 2) !== "/" && (v = ut.lastIndex);
      break;
    case "scientific-number":
      u = Ye(i[0], false), f += "0." + Fr("0", +u["min-decimal-places"] || +u["decimal-places"] || 2) + Fr("?", +u["decimal-places"] - +u["min-decimal-places"] || 0) + "E" + (Rr(u["forced-exponent-sign"]) ? "+" : "") + Fr("0", +u["min-exponent-digits"] || 2);
      break;
    case "fraction":
      u = Ye(i[0], false), +u["min-integer-digits"] ? f += Fr("0", +u["min-integer-digits"]) : f += "#", f += " ", f += Fr("?", +u["min-numerator-digits"] || 1), f += "/", +u["denominator-value"] ? f += u["denominator-value"] : f += Fr("?", +u["min-denominator-digits"] || 1);
      break;
    case "currency-symbol":
      i[1] === "/" ? f += '"' + n.slice(v, ut.lastIndex - i[0].length).replace(/"/g, '""') + '"' : i[0].charAt(i[0].length - 2) !== "/" ? v = ut.lastIndex : f += "$";
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
      u = Ye(i[0], false), Sr(u.condition) == "value()>=0" ? f = a[u["apply-style-name"]] + ";" + f : console.error("ODS number format may be incorrect: " + u.condition);
      break;
    case "number":
      if (i[1] === "/") break;
      u = Ye(i[0], false), c = "", c += Fr("0", +u["min-integer-digits"] || 1), Rr(u.grouping) && (c = Na(Fr("#", Math.max(0, 4 - c.length)) + c)), (+u["min-decimal-places"] || +u["decimal-places"]) && (c += "."), +u["min-decimal-places"] && (c += Fr("0", +u["min-decimal-places"] || 1)), +u["decimal-places"] - (+u["min-decimal-places"] || 0) && (c += Fr("0", +u["decimal-places"] - (+u["min-decimal-places"] || 0))), f += c;
      break;
    case "embedded-text":
      i[1] === "/" ? h == 0 ? f += '"' + n.slice(v, ut.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, h) + '"' + n.slice(v, ut.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(h) : i[0].charAt(i[0].length - 2) !== "/" && (v = ut.lastIndex, h = -+Ye(i[0], false).position || 0);
      break;
  }
  return a;
}
function Fl(e, r, t) {
  var a = r || {}, n = Gs(e), i = [], s, f, c, u = "", h = 0, v, d, x = {}, w = [], y = {};
  a.dense && (y["!data"] = []);
  var _, g, F = { value: "" }, E = {}, I = "", V = 0, K = "", A = 0, H = [], W = [], Z = -1, j = -1, ne = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, de = 0, We = t || {}, me = {}, ze = [], ke = {}, Be = 0, Qe = 0, he = [], sr = 1, Se = 1, Oe = [], _e = { Names: [], WBProps: {} }, Ke = {}, je = ["", ""], $e = [], R = {}, ee = "", L = 0, U = false, ue = false, O = 0;
  for (ut.lastIndex = 0, n = xf(Xi(n, "<!--", "-->")); _ = ut.exec(n); ) switch (_[3] = _[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      _[1] === "/" ? (ne.e.c >= ne.s.c && ne.e.r >= ne.s.r ? y["!ref"] = dr(ne) : y["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= ne.e.r && (y["!fullref"] = y["!ref"], ne.e.r = a.sheetRows - 1, y["!ref"] = dr(ne)), ze.length && (y["!merges"] = ze), he.length && (y["!rows"] = he), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), w.push(v.name), x[v.name] = y, ue = false) : _[0].charAt(_[0].length - 2) !== "/" && (v = Ye(_[0], false), Z = j = -1, ne.s.r = ne.s.c = 1e7, ne.e.r = ne.e.c = 0, y = {}, a.dense && (y["!data"] = []), ze = [], he = [], ue = true);
      break;
    case "table-row-group":
      _[1] === "/" ? --de : ++de;
      break;
    case "table-row":
    case "\u884C":
      if (_[1] === "/") {
        Z += sr, sr = 1;
        break;
      }
      if (d = Ye(_[0], false), d.\u884C\u53F7 ? Z = d.\u884C\u53F7 - 1 : Z == -1 && (Z = 0), sr = +d["number-rows-repeated"] || 1, sr < 10) for (O = 0; O < sr; ++O) de > 0 && (he[Z + O] = { level: de });
      j = -1;
      break;
    case "covered-table-cell":
      if (_[1] !== "/") if (++j, F = Ye(_[0], false), Se = parseInt(F["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
        for (; Se-- > 0; ) a.dense ? (y["!data"][Z] || (y["!data"][Z] = []), y["!data"][Z][j] = { t: "z" }) : y[gr({ r: Z, c: j })] = { t: "z" }, ++j;
        --j;
      } else j += Se - 1;
      I = "", H = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (_[0].charAt(_[0].length - 2) === "/") ++j, F = Ye(_[0], false), Se = parseInt(F["number-columns-repeated"] || "1", 10) || 1, g = { t: "z", v: null }, F.formula && a.cellFormula != false && (g.f = _c(Sr(F.formula))), F["style-name"] && me[F["style-name"]] && (g.z = me[F["style-name"]]), (F.\u6570\u636E\u7C7B\u578B || F["value-type"]) == "string" && (g.t = "s", g.v = Sr(F["string-value"] || ""), a.dense ? (y["!data"][Z] || (y["!data"][Z] = []), y["!data"][Z][j] = g) : y[vr(j) + Tr(Z)] = g), j += Se - 1;
      else if (_[1] !== "/") {
        ++j, I = K = "", V = A = 0, H = [], W = [], Se = 1;
        var Ce = sr ? Z + sr - 1 : Z;
        if (j > ne.e.c && (ne.e.c = j), j < ne.s.c && (ne.s.c = j), Z < ne.s.r && (ne.s.r = Z), Ce > ne.e.r && (ne.e.r = Ce), F = Ye(_[0], false), E = x1(_[0]), $e = [], R = {}, g = { t: F.\u6570\u636E\u7C7B\u578B || F["value-type"], v: null }, F["style-name"] && me[F["style-name"]] && (g.z = me[F["style-name"]]), a.cellFormula) if (F.formula && (F.formula = Sr(F.formula)), F["number-matrix-columns-spanned"] && F["number-matrix-rows-spanned"] && (Be = parseInt(F["number-matrix-rows-spanned"], 10) || 0, Qe = parseInt(F["number-matrix-columns-spanned"], 10) || 0, ke = { s: { r: Z, c: j }, e: { r: Z + Be - 1, c: j + Qe - 1 } }, g.F = dr(ke), Oe.push([ke, g.F])), F.formula) g.f = _c(F.formula);
        else for (O = 0; O < Oe.length; ++O) Z >= Oe[O][0].s.r && Z <= Oe[O][0].e.r && j >= Oe[O][0].s.c && j <= Oe[O][0].e.c && (g.F = Oe[O][1]);
        switch ((F["number-columns-spanned"] || F["number-rows-spanned"]) && (Be = parseInt(F["number-rows-spanned"] || "1", 10) || 1, Qe = parseInt(F["number-columns-spanned"] || "1", 10) || 1, Be * Qe > 1 && (ke = { s: { r: Z, c: j }, e: { r: Z + Be - 1, c: j + Qe - 1 } }, ze.push(ke))), F["number-columns-repeated"] && (Se = parseInt(F["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Rr(F["boolean-value"]) || +F["boolean-value"] >= 1;
            break;
          case "float":
            g.t = "n", g.v = parseFloat(F.value), a.cellDates && g.z && ia(g.z) && (g.v = Ba(g.v + (_e.WBProps.date1904 ? 1462 : 0)), g.t = typeof g.v == "number" ? "n" : "d");
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(F.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(F.value);
            break;
          case "date":
            g.t = "d", g.v = $r(F["date-value"], _e.WBProps.date1904), a.cellDates || (g.t = "n", g.v = Zr(g.v, _e.WBProps.date1904)), g.z || (g.z = "m/d/yy");
            break;
          case "time":
            g.t = "n", g.v = qh(F["time-value"]) / 86400, a.cellDates && (g.v = Ba(g.v), g.t = typeof g.v == "number" ? "n" : "d"), g.z || (g.z = "HH:MM:SS");
            break;
          case "number":
            g.t = "n", g.v = parseFloat(F.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t) g.t = "s", F["string-value"] != null && (I = Sr(F["string-value"]), H = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (U = false, E["calcext:value-type"] == "error" && wt[I] != null && (g.t = "e", g.w = I, g.v = wt[I]), g.t === "s" && (g.v = I || "", H.length && (g.R = H), U = V == 0), Ke.Target && (g.l = Ke), $e.length > 0 && (g.c = $e, $e = []), I && a.cellText !== false && (g.w = I), U && (g.t = "z", delete g.v), (!U || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= Z)) for (var Ue = 0; Ue < sr; ++Ue) {
          if (Se = parseInt(F["number-columns-repeated"] || "1", 10), a.dense) for (y["!data"][Z + Ue] || (y["!data"][Z + Ue] = []), y["!data"][Z + Ue][j] = Ue == 0 ? g : Hr(g); --Se > 0; ) y["!data"][Z + Ue][j + Se] = Hr(g);
          else for (y[gr({ r: Z + Ue, c: j })] = g; --Se > 0; ) y[gr({ r: Z + Ue, c: j + Se })] = Hr(g);
          ne.e.c <= j && (ne.e.c = j);
        }
        Se = parseInt(F["number-columns-repeated"] || "1", 10), j += Se - 1, Se = 0, g = {}, I = "", H = [];
      }
      Ke = {};
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
      if (_[1] === "/") {
        if ((s = i.pop())[0] !== _[3]) throw "Bad state: " + s;
      } else _[0].charAt(_[0].length - 2) !== "/" && i.push([_[3], true]);
      break;
    case "annotation":
      if (_[1] === "/") {
        if ((s = i.pop())[0] !== _[3]) throw "Bad state: " + s;
        R.t = I, H.length && (R.R = H), R.a = ee, $e.push(R), I = K, V = A, H = W;
      } else if (_[0].charAt(_[0].length - 2) !== "/") {
        i.push([_[3], false]);
        var Fe = Ye(_[0], true);
        Fe.display && Rr(Fe.display) || ($e.hidden = true), K = I, A = V, W = H, I = "", V = 0, H = [];
      }
      ee = "", L = 0;
      break;
    case "creator":
      _[1] === "/" ? ee = n.slice(L, _.index) : L = _.index + _[0].length;
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
      if (_[1] === "/") {
        if ((s = i.pop())[0] !== _[3]) throw "Bad state: " + s;
      } else _[0].charAt(_[0].length - 2) !== "/" && i.push([_[3], false]);
      I = "", V = 0, H = [];
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
      if (_[1] === "/") {
        var ar = ut.lastIndex;
        Sl(n.slice(c, ut.lastIndex), r, We), ut.lastIndex = ar;
      } else _[0].charAt(_[0].length - 2) !== "/" && (c = ut.lastIndex - _[0].length);
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
        var rr = Ye(_[0], false);
        rr.family == "table-cell" && We[rr["data-style-name"]] && (me[rr.name] = We[rr["data-style-name"]]);
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
      if (_[0].slice(-2) === "/>") break;
      if (_[1] === "/") switch (i[i.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          u += n.slice(h, _.index);
          break;
      }
      else h = _.index + _[0].length;
      break;
    case "named-range":
      f = Ye(_[0], false), je = U0(f["cell-range-address"]);
      var or = { Name: f.name, Ref: je[0] + "!" + je[1] };
      ue && (or.Sheet = w.length), _e.Names.push(or);
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
      f = Ye(_[0], false), f["date-value"] === "1904-01-01" && (_e.WBProps.date1904 = true);
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
      if (_[1] === "/" && (!F || !F["string-value"])) {
        var br = Xy(n.slice(V, _.index));
        I = (I.length > 0 ? I + `
` : "") + br[0];
      } else _[0].slice(-2) == "/>" ? I += `
` : (Ye(_[0], false), V = _.index + _[0].length);
      break;
    case "s":
      break;
    case "database-range":
      if (_[1] === "/") break;
      try {
        je = U0(Ye(_[0])["target-range-address"]), x[je[0]]["!autofilter"] = { ref: je[1] };
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
      if (_[1] !== "/") {
        if (Ke = Ye(_[0], false), !Ke.href) break;
        Ke.Target = Sr(Ke.href), delete Ke.href, Ke.Target.charAt(0) == "#" && Ke.Target.indexOf(".") > -1 ? (je = U0(Ke.Target.slice(1)), Ke.Target = "#" + je[0] + "!" + je[1]) : Ke.Target.match(/^\.\.[\\\/]/) && (Ke.Target = Ke.Target.slice(3));
      }
      break;
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    case "office-document-common-attrs":
      break;
    default:
      switch (_[2]) {
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
          if (a.WTF) throw new Error(_);
      }
  }
  var yr = { Sheets: x, SheetNames: w, Workbook: _e };
  return a.bookSheets && delete yr.Sheets, yr;
}
function Tc(e, r) {
  r = r || {}, ra(e, "META-INF/manifest.xml") && id(ct(e, "META-INF/manifest.xml"), r);
  var t = Wt(e, "styles.xml"), a = t && Sl(Pr(t)), n = Wt(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = Fl(Pr(n), r, a);
  return ra(e, "meta.xml") && (i.Props = _u(ct(e, "meta.xml"))), i.bookType = "ods", i;
}
function Sc(e, r) {
  var t = Fl(e, r);
  return t.bookType = "fods", t;
}
var Ky = (function() {
  var e = ["<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>"].join(""), r = "<office:document-styles " + Ai({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "office:version": "1.2" }) + ">" + e + "</office:document-styles>";
  return function() {
    return it + r;
  };
})();
function jy(e, r) {
  var t = "number", a = "", n = { "style:name": r }, i = "", s = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1 && (console.error("Unsupported ODS Style Map exported.  Using first branch of " + e), e = e.slice(0, e.indexOf(";"))), e == "@") {
      t = "text", a = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + xr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + xr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
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
          --s, a += "<number:text>" + xr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "\\":
          i = e[++s], a += "<number:text>" + xr(i) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + xr(i) + "</number:text>";
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
          --s, a += "<number:text>" + xr(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + xr(i) + "</number:text>";
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
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + xr(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + xr(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var h = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!h || !h[0]) console.error("Could not find numeric part of " + e);
    else {
      var v = h[1].replace(/,/g, "");
      a += "<number:" + (h[3] ? "scientific-" : "") + 'number number:min-integer-digits="' + (v.indexOf("0") == -1 ? "0" : v.length - v.indexOf("0")) + '"' + (h[0].indexOf(",") > -1 ? ' number:grouping="true"' : "") + (h[2] && ' number:decimal-places="' + (h[2].length - 1) + '"' || ' number:decimal-places="0"') + (h[3] && h[3].indexOf("+") > -1 ? ' number:forced-exponent-sign="true"' : "") + (h[3] ? ' number:min-exponent-digits="' + h[3].match(/0+/)[0].length + '"' : "") + "></number:" + (h[3] ? "scientific-" : "") + "number>", s = h.index + h[0].length;
    }
    if (e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, a += "<number:text>" + xr(i.replace(/""/g, '"')) + "</number:text>";
    }
  }
  return a ? Ae("number:" + t + "-style", a, n) : (console.error("Could not generate ODS number format for |" + e + "|"), "");
}
function Fc(e, r, t) {
  for (var a = [], n = 0; n < e.length; ++n) {
    var i = e[n];
    i && i.Sheet == (t == -1 ? null : t) && a.push(i);
  }
  return a.length ? `      <table:named-expressions>
` + a.map(function(s) {
    var f = (t == -1 ? "$" : "") + cl(s.Ref);
    return "        " + Ae("table:named-range", null, { "table:name": s.Name, "table:cell-range-address": f, "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1") });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var bc = /* @__PURE__ */ (function() {
  var e = function(n, i) {
    return xr(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, c, u) {
    var h = [];
    h.push('      <table:table table:name="' + xr(i.SheetNames[s]) + `" table:style-name="ta1">
`);
    var v = 0, d = 0, x = yt(n["!ref"] || "A1"), w = n["!merges"] || [], y = 0, _ = n["!data"] != null;
    if (n["!cols"]) for (d = 0; d <= x.e.c; ++d) h.push("        <table:table-column" + (n["!cols"][d] ? ' table:style-name="co' + n["!cols"][d].ods + '"' : "") + `></table:table-column>
`);
    var g = "", F = n["!rows"] || [];
    for (v = 0; v < x.s.r; ++v) g = F[v] ? ' table:style-name="ro' + F[v].ods + '"' : "", h.push("        <table:table-row" + g + `></table:table-row>
`);
    for (; v <= x.e.r; ++v) {
      for (g = F[v] ? ' table:style-name="ro' + F[v].ods + '"' : "", h.push("        <table:table-row" + g + `>
`), d = 0; d < x.s.c; ++d) h.push(r);
      for (; d <= x.e.c; ++d) {
        var E = false, I = {}, V = "";
        for (y = 0; y != w.length; ++y) if (!(w[y].s.c > d) && !(w[y].s.r > v) && !(w[y].e.c < d) && !(w[y].e.r < v)) {
          (w[y].s.c != d || w[y].s.r != v) && (E = true), I["table:number-columns-spanned"] = w[y].e.c - w[y].s.c + 1, I["table:number-rows-spanned"] = w[y].e.r - w[y].s.r + 1;
          break;
        }
        if (E) {
          h.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var K = gr({ r: v, c: d }), A = _ ? (n["!data"][v] || [])[d] : n[K];
        if (A && A.f && (I["table:formula"] = xr(p2(A.f)), A.F && A.F.slice(0, K.length) == K)) {
          var H = yt(A.F);
          I["table:number-matrix-columns-spanned"] = H.e.c - H.s.c + 1, I["table:number-matrix-rows-spanned"] = H.e.r - H.s.r + 1;
        }
        if (!A) {
          h.push(r);
          continue;
        }
        switch (A.t) {
          case "b":
            V = A.v ? "TRUE" : "FALSE", I["office:value-type"] = "boolean", I["office:boolean-value"] = A.v ? "true" : "false";
            break;
          case "n":
            isFinite(A.v) ? (V = A.w || String(A.v || 0), I["office:value-type"] = "float", I["office:value"] = A.v || 0) : (isNaN(A.v) ? (V = "#NUM!", I["table:formula"] = "of:=#NUM!") : (V = "#DIV/0!", I["table:formula"] = "of:=" + (A.v < 0 ? "-" : "") + "1/0"), I["office:string-value"] = "", I["office:value-type"] = "string", I["calcext:value-type"] = "error");
            break;
          case "s":
          case "str":
            V = A.v == null ? "" : A.v, I["office:value-type"] = "string";
            break;
          case "d":
            V = A.w || $r(A.v, u).toISOString(), I["office:value-type"] = "date", I["office:date-value"] = $r(A.v, u).toISOString(), I["table:style-name"] = "ce1";
            break;
          default:
            h.push(r);
            continue;
        }
        var W = e(V);
        if (A.l && A.l.Target) {
          var Z = A.l.Target;
          Z = Z.charAt(0) == "#" ? "#" + cl(Z.slice(1)) : Z, Z.charAt(0) != "#" && !Z.match(/^\w+:/) && (Z = "../" + Z), W = Ae("text:a", W, { "xlink:href": Z.replace(/&/g, "&amp;") });
        }
        c[A.z] && (I["table:style-name"] = "ce" + c[A.z].slice(1));
        var j = Ae("text:p", W, {});
        if (A.c) {
          for (var ne = "", de = "", We = {}, me = 0; me < A.c.length; ++me) !ne && A.c[me].a && (ne = A.c[me].a), de += "<text:p>" + e(A.c[me].t) + "</text:p>";
          A.c.hidden || (We["office:display"] = true), j = Ae("office:annotation", de, We) + j;
        }
        h.push("          " + Ae("table:table-cell", j, I) + `
`);
      }
      h.push(`        </table:table-row>
`);
    }
    return (i.Workbook || {}).Names && h.push(Fc(i.Workbook.Names, i.SheetNames, s)), h.push(`      </table:table>
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
          Ja(d), d.ods = s;
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
        if (h["!ref"]) for (var d = yt(h["!ref"]), x = 0; x <= d.e.r; ++x) for (var w = 0; w <= d.e.c; ++w) {
          var y = v ? (h["!data"][x] || [])[w] : h[gr({ r: x, c: w })];
          if (!(!y || !y.z || y.z.toLowerCase() == "general") && !c[y.z]) {
            var _ = jy(y.z, "N" + u);
            _ && (c[y.z] = "N" + u, ++u, n.push(_ + `
`));
          }
        }
      }
    }), n.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), Gr(c).forEach(function(h) {
      n.push('<style:style style:name="ce' + c[h].slice(1) + '" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="' + c[h] + `"/>
`);
    }), n.push(` </office:automatic-styles>
`), c;
  };
  return function(i, s) {
    var f = [it], c = Ai({ "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0", "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0", "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0", "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0", "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0", "xmlns:xlink": "http://www.w3.org/1999/xlink", "xmlns:dc": "http://purl.org/dc/elements/1.1/", "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0", "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0", "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0", "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0", "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0", "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0", "xmlns:math": "http://www.w3.org/1998/Math/MathML", "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0", "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0", "xmlns:ooo": "http://openoffice.org/2004/office", "xmlns:ooow": "http://openoffice.org/2004/writer", "xmlns:oooc": "http://openoffice.org/2004/calc", "xmlns:dom": "http://www.w3.org/2001/xml-events", "xmlns:xforms": "http://www.w3.org/2002/xforms", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0", "xmlns:rpt": "http://openoffice.org/2005/report", "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2", "xmlns:xhtml": "http://www.w3.org/1999/xhtml", "xmlns:grddl": "http://www.w3.org/2003/g/data-view#", "xmlns:tableooo": "http://openoffice.org/2009/table", "xmlns:drawooo": "http://openoffice.org/2010/draw", "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0", "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0", "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0", "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0", "xmlns:css3t": "http://www.w3.org/TR/css3-text/", "office:version": "1.2" }), u = Ai({ "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0", "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet" });
    s.bookType == "fods" ? (f.push("<office:document" + c + u + `>
`), f.push(gu().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
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
    return (i.Workbook || {}).Names && f.push(Fc(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function bl(e, r) {
  if (r.bookType == "fods") return bc(e, r);
  var t = mf(), a = "", n = [], i = [];
  return a = "mimetype", lr(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", lr(t, a, bc(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", lr(t, a, Ky(e, r)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", lr(t, a, it + gu()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", lr(t, a, od(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", lr(t, a, sd(n)), t;
}
var nt = (function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
})();
function Wa(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function da(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Pr(ba(e));
}
function Lt(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Ut(Fa(e));
}
function en(e) {
  for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
  var a = new Uint8Array(r), n = 0;
  for (t = 0; t < e.length; ++t) {
    var i = e[t], s = i.length;
    if (s < 250) for (var f = 0; f < s; ++f) a[n++] = i[f];
    else a.set(i, n), n += s;
  }
  return a;
}
function Ti(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function Gy(e, r) {
  for (var t = (e[r + 15] & 127) << 7 | e[r + 14] >> 1, a = e[r + 14] & 1, n = r + 13; n >= r; --n) a = a * 256 + e[n];
  return (e[r + 15] & 128 ? -a : a) * Math.pow(10, t - 6176);
}
function zy(e, r, t) {
  var a = Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 16, n = t / Math.pow(10, a - 6176);
  e[r + 15] |= a >> 7, e[r + 14] |= (a & 127) << 1;
  for (var i = 0; n >= 1; ++i, n /= 256) e[r + i] = n & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function Mi(e, r) {
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
  return r[nt](0, t);
}
function Al(e) {
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(Mi(e, r));
  return t;
}
function Cl(e) {
  return en(e.map(function(r) {
    return er(r);
  }));
}
function hr(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function Ie(e) {
  for (var r = [], t = { l: 0 }; t.l < e.length; ) {
    var a = t.l, n = Mi(e, t), i = n & 7;
    n = n / 8 | 0;
    var s, f = t.l;
    switch (i) {
      case 0:
        {
          for (; e[f++] >= 128; ) ;
          s = e[nt](t.l, f), t.l = f;
        }
        break;
      case 1:
        s = e[nt](f, f + 8), t.l = f + 8;
        break;
      case 2:
        {
          var c = Mi(e, t);
          s = e[nt](t.l, t.l + c), t.l += c;
        }
        break;
      case 5:
        s = e[nt](f, f + 4), t.l = f + 4;
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
  }), en(r);
}
function rn(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function Ui(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = Mi(e, a), i = Ie(e[nt](a.l, a.l + n));
    a.l += n;
    var s = { id: hr(i[1][0].data), messages: [] };
    i[2].forEach(function(f) {
      var c = Ie(f.data), u = hr(c[3][0].data);
      s.messages.push({ meta: c, data: e[nt](a.l, a.l + u) }), a.l += u;
    }), (r = i[3]) != null && r[0] && (s.merge = hr(i[3][0].data) >>> 0 > 0), t.push(s);
  }
  return t;
}
function Kn(e) {
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
  }), en(r);
}
function $y(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = { l: 0 }, a = Mi(r, t), n = [], i = t.l; i < r.length; ) {
    var s = r[i] & 3;
    if (s == 0) {
      var f = r[i++] >> 2;
      if (f < 60) ++f;
      else {
        var c = f - 59;
        f = r[i], c > 1 && (f |= r[i + 1] << 8), c > 2 && (f |= r[i + 2] << 16), c > 3 && (f |= r[i + 3] << 24), f >>>= 0, f++, i += c;
      }
      n.push(r[nt](i, i + f)), i += f;
      continue;
    } else {
      var u = 0, h = 0;
      if (s == 1 ? (h = (r[i] >> 2 & 7) + 4, u = (r[i++] & 224) << 3, u |= r[i++]) : (h = (r[i++] >> 2) + 1, s == 2 ? (u = r[i] | r[i + 1] << 8, i += 2) : (u = (r[i] | r[i + 1] << 8 | r[i + 2] << 16 | r[i + 3] << 24) >>> 0, i += 4)), u == 0) throw new Error("Invalid offset 0");
      for (var v = n.length - 1, d = u; v >= 0 && d >= n[v].length; ) d -= n[v].length, --v;
      if (v < 0) if (d == 0) d = n[v = 0].length;
      else throw new Error("Invalid offset beyond length");
      if (h < d) n.push(n[v][nt](n[v].length - d, n[v].length - d + h));
      else {
        for (d > 0 && (n.push(n[v][nt](n[v].length - d)), h -= d), ++v; h >= n[v].length; ) n.push(n[v]), h -= n[v].length, ++v;
        h && n.push(n[v][nt](0, h));
      }
      n.length > 25 && (n = [en(n)]);
    }
  }
  for (var x = 0, w = 0; w < n.length; ++w) x += n[w].length;
  if (x != a) throw new Error("Unexpected length: ".concat(x, " != ").concat(a));
  return n;
}
function Wi(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, $y(a, e[nt](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : en(r);
}
function jn(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = er(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[nt](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return en(r);
}
var qy = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function Dl(e, r, t, a, n) {
  var i, s, f, c, u = r & 255, h = r >> 8, v = h >= 5 ? n : a;
  e: if (t & (h > 4 ? 8 : 4) && e.t == "n" && u == 7) {
    var d = (i = v[7]) != null && i[0] ? hr(v[7][0].data) : -1;
    if (d == -1) break e;
    var x = (s = v[15]) != null && s[0] ? hr(v[15][0].data) : -1, w = (f = v[16]) != null && f[0] ? hr(v[16][0].data) : -1, y = (c = v[40]) != null && c[0] ? hr(v[40][0].data) : -1, _ = e.v, g = _;
    r: if (y) {
      if (_ == 0) {
        x = w = 2;
        break r;
      }
      _ >= 604800 ? x = 1 : _ >= 86400 ? x = 2 : _ >= 3600 ? x = 4 : _ >= 60 ? x = 8 : _ >= 1 ? x = 16 : x = 32, Math.floor(_) != _ ? w = 32 : _ % 60 ? w = 16 : _ % 3600 ? w = 8 : _ % 86400 ? w = 4 : _ % 604800 && (w = 2), w < x && (w = x);
    }
    if (x == -1 || w == -1) break e;
    var F = [], E = [];
    x == 1 && (g = _ / 604800, w == 1 ? E.push('d"d"') : (g |= 0, _ -= 604800 * g), F.push(g + (d == 2 ? " week" + (g == 1 ? "" : "s") : d == 1 ? "w" : ""))), x <= 2 && w >= 2 && (g = _ / 86400, w > 2 && (g |= 0, _ -= 86400 * g), E.push('d"d"'), F.push(g + (d == 2 ? " day" + (g == 1 ? "" : "s") : d == 1 ? "d" : ""))), x <= 4 && w >= 4 && (g = _ / 3600, w > 4 && (g |= 0, _ -= 3600 * g), E.push((x >= 4 ? "[h]" : "h") + '"h"'), F.push(g + (d == 2 ? " hour" + (g == 1 ? "" : "s") : d == 1 ? "h" : ""))), x <= 8 && w >= 8 && (g = _ / 60, w > 8 && (g |= 0, _ -= 60 * g), E.push((x >= 8 ? "[m]" : "m") + '"m"'), d == 0 ? F.push((x == 8 && w == 8 || g >= 10 ? "" : "0") + g) : F.push(g + (d == 2 ? " minute" + (g == 1 ? "" : "s") : d == 1 ? "m" : ""))), x <= 16 && w >= 16 && (g = _, w > 16 && (g |= 0, _ -= g), E.push((x >= 16 ? "[s]" : "s") + '"s"'), d == 0 ? F.push((w == 16 && x == 16 || g >= 10 ? "" : "0") + g) : F.push(g + (d == 2 ? " second" + (g == 1 ? "" : "s") : d == 1 ? "s" : ""))), w >= 32 && (g = Math.round(1e3 * _), x < 32 && E.push('.000"ms"'), d == 0 ? F.push((g >= 100 ? "" : g >= 10 ? "0" : "00") + g) : F.push(g + (d == 2 ? " millisecond" + (g == 1 ? "" : "s") : d == 1 ? "ms" : ""))), e.w = F.join(d == 0 ? ":" : " "), e.z = E.join(d == 0 ? '":"' : " "), d == 0 && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
  }
}
function Yy(e, r, t, a) {
  var n = Wa(e), i = n.getUint32(4, true), s = -1, f = -1, c = -1, u = NaN, h = 0, v = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
  i & 2 && (c = n.getUint32(d, true), d += 4), d += Ti(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(d, true), d += 4), d += Ti(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(d, true), d += 4), i & 32 && (u = n.getFloat64(d, true), d += 8), i & 64 && (v.setTime(v.getTime() + (h = n.getFloat64(d, true)) * 1e3), d += 8), t > 1 && (i = n.getUint32(8, true) >>> 16, i & 255 && (c == -1 && (c = n.getUint32(d, true)), d += 4));
  var x, w = e[t >= 4 ? 1 : 2];
  switch (w) {
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
      } else throw new Error("Unsupported cell type ".concat(e[nt](0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[nt](0, 4)));
  }
  return c > -1 && Dl(x, w | t << 8, i, r.ofmt[c], r.nfmt[c]), w == 7 && (x.v /= 86400), x;
}
function Zy(e, r, t) {
  var a = Wa(e);
  a.getUint32(4, true);
  var n = a.getUint32(8, true), i = 12, s = -1, f = -1, c = -1, u = NaN, h = NaN, v = 0, d = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (u = Gy(e, i), i += 16), n & 2 && (h = a.getFloat64(i, true), i += 8), n & 4 && (d.setTime(d.getTime() + (v = a.getFloat64(i, true)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, true), i += 4), n & 16 && (s = a.getUint32(i, true), i += 4), i += Ti(n & 480) * 4, n & 512 && (a.getUint32(i, true), i += 4), i += Ti(n & 1024) * 4, n & 2048 && (a.getUint32(i, true), i += 4);
  var x, w = e[1];
  switch (w) {
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
      } else throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[nt](0, 4)));
      break;
    case 10:
      x = { t: "n", v: u };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[nt](0, 4)));
  }
  if (i += Ti(n & 4096) * 4, n & 516096 && (c == -1 && (c = a.getUint32(i, true)), i += 4), n & 524288) {
    var _ = a.getUint32(i, true);
    i += 4, r.cmnt[_] && (x.c = rk(r.cmnt[_]));
  }
  return c > -1 && Dl(x, w | 1280, n >> 13, r.ofmt[c], r.nfmt[c]), w == 7 && (x.v /= 86400), x;
}
function K0(e, r) {
  var t = new Uint8Array(32), a = Wa(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && ia(e.z)) {
        t[1] = 5, a.setFloat64(n, (Ba(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, true), i |= 4, n += 8;
        break;
      } else t[1] = 2, zy(t, n, e.v), i |= 1, n += 16;
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
  return e.c && (r.cmnt.push(tk(e.c)), a.setUint32(n, r.cmnt.length - 1, true), i |= 524288, n += 4), a.setUint32(8, i, true), t[nt](0, n);
}
function j0(e, r) {
  var t = new Uint8Array(32), a = Wa(t), n = 12, i = 0, s = "";
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
  return a.setUint32(8, i, true), t[nt](0, n);
}
function Jy(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return Yy(e, r, e[0], t);
    case 5:
      return Zy(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Er(e) {
  var r = Ie(e);
  return hr(r[1][0].data);
}
function At(e) {
  return tr([[], [{ type: 0, data: er(e) }]]);
}
function bt(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? Al(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: Cl(a) }]);
}
function Ia(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? Al(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: Cl(a.filter(function(n) {
    return n != r;
  })) }];
}
function cn(e, r) {
  var t = Ie(r.data), a = hr(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, c, u = Ie(s.data);
    if (u[1]) {
      var h = hr(u[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[h] = da(u[3][0].data);
          break;
        case 8:
          {
            var v = e[Er(u[9][0].data)][0], d = Ie(v.data), x = e[Er(d[1][0].data)][0], w = hr(x.meta[1][0].data);
            if (w != 2001) throw new Error("2000 unexpected reference to ".concat(w));
            var y = Ie(x.data), _ = { v: y[3].map(function(E) {
              return da(E.data);
            }).join("") };
            i[h] = _;
            e: if ((f = y == null ? void 0 : y[11]) != null && f[0]) {
              var g = (c = Ie(y[11][0].data)) == null ? void 0 : c[1];
              if (!g) break e;
              g.forEach(function(E) {
                var I, V, K, A = Ie(E.data);
                if ((I = A[2]) != null && I[0]) {
                  var H = e[Er((V = A[2]) == null ? void 0 : V[0].data)][0], W = hr(H.meta[1][0].data);
                  switch (W) {
                    case 2032:
                      var Z = Ie(H.data);
                      (K = Z == null ? void 0 : Z[2]) != null && K[0] && !_.l && (_.l = da(Z[2][0].data));
                      break;
                    case 2039:
                      break;
                    default:
                      console.log("unrecognized ObjectAttribute type ".concat(W));
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
            var F = e[Er(u[10][0].data)][0];
            i[h] = Il(e, F.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function Qy(e, r) {
  var t, a, n, i, s, f, c, u, h, v, d, x, w, y, _ = Ie(e), g = hr(_[1][0].data) >>> 0, F = hr(_[2][0].data) >>> 0, E = ((a = (t = _[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && hr(_[8][0].data) > 0 || false, I, V;
  if ((i = (n = _[7]) == null ? void 0 : n[0]) != null && i.data && r != 0) I = (f = (s = _[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, V = (u = (c = _[6]) == null ? void 0 : c[0]) == null ? void 0 : u.data;
  else if ((v = (h = _[4]) == null ? void 0 : h[0]) != null && v.data && r != 1) I = (x = (d = _[4]) == null ? void 0 : d[0]) == null ? void 0 : x.data, V = (y = (w = _[3]) == null ? void 0 : w[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var K = E ? 4 : 1, A = Wa(I), H = [], W = 0; W < I.length / 2; ++W) {
    var Z = A.getUint16(W * 2, true);
    Z < 65535 && H.push([W, Z]);
  }
  if (H.length != F) throw "Expected ".concat(F, " cells, found ").concat(H.length);
  var j = [];
  for (W = 0; W < H.length - 1; ++W) j[H[W][0]] = V[nt](H[W][1] * K, H[W + 1][1] * K);
  return H.length >= 1 && (j[H[H.length - 1][0]] = V[nt](H[H.length - 1][1] * K)), { R: g, cells: j };
}
function ek(e, r) {
  var t, a = Ie(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (hr(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = rn(a[5], function(s) {
    return Qy(s, n);
  });
  return { nrows: hr(a[4][0].data) >>> 0, data: i.reduce(function(s, f) {
    return s[f.R] || (s[f.R] = []), f.cells.forEach(function(c, u) {
      if (s[f.R][u]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(u));
      s[f.R][u] = c;
    }), s;
  }, []) };
}
function Il(e, r) {
  var t, a, n, i, s, f, c, u, h, v, d = { t: "", a: "" }, x = Ie(r);
  if ((a = (t = x == null ? void 0 : x[1]) == null ? void 0 : t[0]) != null && a.data && (d.t = da((i = (n = x == null ? void 0 : x[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = x == null ? void 0 : x[3]) == null ? void 0 : s[0]) != null && f.data) {
    var w = e[Er((u = (c = x == null ? void 0 : x[3]) == null ? void 0 : c[0]) == null ? void 0 : u.data)][0], y = Ie(w.data);
    (v = (h = y[1]) == null ? void 0 : h[0]) != null && v.data && (d.a = da(y[1][0].data));
  }
  return (x == null ? void 0 : x[4]) && (d.replies = [], x[4].forEach(function(_) {
    var g = e[Er(_.data)][0];
    d.replies.push(Il(e, g.data));
  })), d;
}
function rk(e) {
  var r = [];
  return r.push({ t: e.t || "", a: e.a, T: e.replies && e.replies.length > 0 }), e.replies && e.replies.forEach(function(t) {
    r.push({ t: t.t || "", a: t.a, T: true });
  }), r;
}
function tk(e) {
  for (var r = { a: "", t: "", replies: [] }, t = 0; t < e.length; ++t) t == 0 ? (r.a = e[t].a, r.t = e[t].t) : r.replies.push({ a: e[t].a, t: e[t].t });
  return r;
}
function ak(e, r, t, a) {
  var n, i, s, f, c, u, h, v, d, x, w, y, _, g, F = Ie(r.data), E = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (E.e.r = (hr(F[6][0].data) >>> 0) - 1, E.e.r < 0) throw new Error("Invalid row varint ".concat(F[6][0].data));
  if (E.e.c = (hr(F[7][0].data) >>> 0) - 1, E.e.c < 0) throw new Error("Invalid col varint ".concat(F[7][0].data));
  t["!ref"] = dr(E);
  var I = t["!data"] != null, V = t, K = Ie(F[4][0].data), A = qy();
  (n = K[4]) != null && n[0] && (A.sst = cn(e, e[Er(K[4][0].data)][0])), (i = K[6]) != null && i[0] && (A.fmla = cn(e, e[Er(K[6][0].data)][0])), (s = K[11]) != null && s[0] && (A.ofmt = cn(e, e[Er(K[11][0].data)][0])), (f = K[12]) != null && f[0] && (A.ferr = cn(e, e[Er(K[12][0].data)][0])), (c = K[17]) != null && c[0] && (A.rsst = cn(e, e[Er(K[17][0].data)][0])), (u = K[19]) != null && u[0] && (A.cmnt = cn(e, e[Er(K[19][0].data)][0])), (h = K[22]) != null && h[0] && (A.nfmt = cn(e, e[Er(K[22][0].data)][0]));
  var H = Ie(K[3][0].data), W = 0;
  if (!((v = K[9]) != null && v[0])) throw "NUMBERS file missing row tree";
  var Z = Ie(K[9][0].data)[1].map(function(me) {
    return Ie(me.data);
  });
  if (Z.forEach(function(me) {
    W = hr(me[1][0].data);
    var ze = hr(me[2][0].data), ke = H[1][ze];
    if (!ke) throw "NUMBERS missing tile " + ze;
    var Be = Ie(ke.data), Qe = e[Er(Be[2][0].data)][0], he = hr(Qe.meta[1][0].data);
    if (he != 6002) throw new Error("6001 unexpected reference to ".concat(he));
    var sr = ek(e, Qe);
    sr.data.forEach(function(Se, Oe) {
      Se.forEach(function(_e, Ke) {
        var je = Jy(_e, A, a);
        je && (I ? (V["!data"][W + Oe] || (V["!data"][W + Oe] = []), V["!data"][W + Oe][Ke] = je) : t[vr(Ke) + Tr(W + Oe)] = je);
      });
    }), W += sr.nrows;
  }), (d = K[13]) != null && d[0]) {
    var j = e[Er(K[13][0].data)][0], ne = hr(j.meta[1][0].data);
    if (ne != 6144) throw new Error("Expected merge type 6144, found ".concat(ne));
    t["!merges"] = (x = Ie(j.data)) == null ? void 0 : x[1].map(function(me) {
      var ze = Ie(me.data), ke = Wa(Ie(ze[1][0].data)[1][0].data), Be = Wa(Ie(ze[2][0].data)[1][0].data);
      return { s: { r: ke.getUint16(0, true), c: ke.getUint16(2, true) }, e: { r: ke.getUint16(0, true) + Be.getUint16(0, true) - 1, c: ke.getUint16(2, true) + Be.getUint16(2, true) - 1 } };
    });
  }
  if (!((w = t["!merges"]) != null && w.length) && ((y = F[47]) != null && y[0])) {
    var de = Ie(F[47][0].data);
    if ((_ = de[2]) != null && _[0]) {
      var We = Ie(de[2][0].data);
      (g = We[3]) != null && g[0] && (t["!merges"] = rn(We[3], function(me) {
        var ze, ke, Be, Qe, he, sr = Ie(me), Se = Ie(sr[2][0].data), Oe = Ie(Se[1][0].data);
        if ((ze = Oe[1]) != null && ze[0]) {
          var _e = Ie(Oe[1][0].data), Ke = hr(_e[1][0].data);
          if (Ke == 67) {
            var je = Ie(_e[40][0].data);
            if (!(!((ke = je[3]) != null && ke[0]) || !((Be = je[4]) != null && Be[0]))) {
              var $e = Ie(je[3][0].data), R = Ie(je[4][0].data), ee = hr($e[1][0].data), L = (Qe = $e[2]) != null && Qe[0] ? hr($e[2][0].data) : ee, U = hr(R[1][0].data), ue = (he = R[2]) != null && he[0] ? hr(R[2][0].data) : U;
              return { s: { r: U, c: ee }, e: { r: ue, c: L } };
            }
          }
        }
      }).filter(function(me) {
        return me != null;
      }));
    }
  }
}
function nk(e, r, t) {
  var a = Ie(r.data), n = { "!ref": "A1" };
  (t == null ? void 0 : t.dense) && (n["!data"] = []);
  var i = e[Er(a[2][0].data)], s = hr(i[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return ak(e, i[0], n, t), n;
}
function ik(e, r, t) {
  var a, n = Ie(r.data), i = { name: (a = n[1]) != null && a[0] ? da(n[1][0].data) : "", sheets: [] }, s = rn(n[2], Er);
  return s.forEach(function(f) {
    e[f].forEach(function(c) {
      var u = hr(c.meta[1][0].data);
      u == 6e3 && i.sheets.push(nk(e, c, t));
    });
  }), i;
}
function sk(e, r, t) {
  var a, n = Xf();
  n.Workbook = { WBProps: { date1904: true } };
  var i = Ie(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = rn(i[1], Er);
  if (s.forEach(function(f) {
    e[f].forEach(function(c) {
      var u = hr(c.meta[1][0].data);
      if (u == 2) {
        var h = ik(e, c, t);
        h.sheets.forEach(function(v, d) {
          Yi(n, v, d == 0 ? h.name : h.name + "_" + d, true);
        });
      }
    });
  }), n.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return n.bookType = "numbers", n;
}
function G0(e, r) {
  var t, a, n, i, s, f, c, u = {}, h = [];
  if (e.FullPaths.forEach(function(d) {
    if (d.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(d) {
    if (d.name.match(/\.iwa$/) && d.content[0] == 0) {
      var x;
      try {
        x = Wi(d.content);
      } catch (y) {
        return console.log("?? " + d.content.length + " " + (y.message || y));
      }
      var w;
      try {
        w = Ui(x);
      } catch (y) {
        return console.log("## " + (y.message || y));
      }
      w.forEach(function(y) {
        u[y.id] = y.messages, h.push(y.id);
      });
    }
  }), !h.length) throw new Error("File has no messages");
  if ((n = (a = (t = u == null ? void 0 : u[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && hr(u[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var v = ((c = (f = (s = (i = u == null ? void 0 : u[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : c[0].data) && hr(u[1][0].meta[1][0].data) == 1 && u[1][0];
  if (v || h.forEach(function(d) {
    u[d].forEach(function(x) {
      var w = hr(x.meta[1][0].data) >>> 0;
      if (w == 1) if (!v) v = x;
      else throw new Error("Document has multiple roots");
    });
  }), !v) throw new Error("Cannot find Document root");
  return sk(u, v, r);
}
function fk(e, r, t) {
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
  for (var h = Wa(s[7][0].data), v = 0, d = [], x = Wa(s[4][0].data), w = 0, y = [], _ = 4, g = 0; g < e.length; ++g) {
    if (e[g] == null || e[g].t == "z" && !((i = e[g].c) != null && i.length) || e[g].t == "e") {
      h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535);
      continue;
    }
    h.setUint16(g * 2, v / _, true), x.setUint16(g * 2, w / _, true);
    var F, E;
    switch (e[g].t) {
      case "d":
        if (e[g].v instanceof Date) {
          F = K0(e[g], r), E = j0(e[g], r);
          break;
        }
        F = K0(e[g], r), E = j0(e[g], r);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        F = K0(e[g], r), E = j0(e[g], r);
        break;
      default:
        throw new Error("Unsupported value " + e[g]);
    }
    d.push(F), v += F.length, y.push(E), w += E.length, ++f;
  }
  for (s[2][0].data = er(f), s[5][0].data = er(5); g < s[7][0].data.length / 2; ++g) h.setUint16(g * 2, 65535, true), x.setUint16(g * 2, 65535, true);
  return s[6][0].data = en(d), s[3][0].data = en(y), s[8] = [{ type: 0, data: er(1) }], s;
}
function nf(e, r) {
  return { meta: [[], [{ type: 0, data: er(e) }]], data: r };
}
function Ta(e, r) {
  r.last || (r.last = 927262);
  for (var t = r.last; t < 2e6; ++t) if (!r[t]) return r[r.last = t] = e, t;
  throw new Error("Too many messages");
}
function ok(e) {
  var r = {}, t = [];
  return e.FileIndex.map(function(a, n) {
    return [a, e.FullPaths[n]];
  }).forEach(function(a) {
    var n = a[0], i = a[1];
    n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0 && Ui(Wi(n.content)).forEach(function(s) {
      t.push(s.id), r[s.id] = { deps: [], location: i, type: hr(s.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(a) {
    a.name.match(/\.iwa/) && a.content[0] == 0 && Ui(Wi(a.content)).forEach(function(n) {
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
function Ss(e, r, t) {
  return tr([[], [{ type: 0, data: er(1) }], [], [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }], [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }], [], [], [], [], [], [{ type: 0, data: er(1) }]]);
}
function Ac(e) {
  switch (e) {
    case 0:
      return Ss(99, 222, 171);
    case 1:
      return Ss(162, 197, 240);
    case 2:
      return Ss(255, 189, 189);
  }
  return Ss(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function ck(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = ir.read(r.numbers, { type: "base64" }), a = ok(t), n = Sa(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = rn(Ie(n.messages[0].data)[1], Er);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (lk(t, a, f + 1), n = Sa(t, a, 1), i = rn(Ie(n.messages[0].data)[1], Er)), hk(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function Lr(e, r, t, a) {
  var n = ir.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = Ui(Wi(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = jn(Kn(i)), n.size = n.content.length;
}
function Sa(e, r, t) {
  var a = ir.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = Ui(Wi(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function sf(e, r, t) {
  e[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(r) }], [{ type: 2, data: Lt(t.replace(/-[\s\S]*$/, "")) }], [{ type: 2, data: Lt(t) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), e[1] = [{ type: 0, data: er(Math.max(r + 1, hr(e[1][0].data))) }];
}
function un(e, r, t, a, n, i) {
  i || (i = Ta({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, ir.utils.cfb_add(e, s, jn(Kn([{ id: i, messages: [nf(r, tr(t))] }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return Lr(e, n, 2, function(c) {
    var u = Ie(c.messages[0].data);
    sf(u, i || 0, f), c.messages[0].data = tr(u);
  }), i;
}
function Ht(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, u, h = Ie(f.data);
    return (c = h[3]) != null && c[0] ? da(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && da(h[2][0].data) == n);
  }), s = Ie(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({ type: 2, data: tr([[], [{ type: 0, data: er(f) }]]) });
  }), e[3][i].data = tr(s);
}
function uk(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, u, h = Ie(f.data);
    return (c = h[3]) != null && c[0] ? da(h[3][0].data) == n : !!((u = h[2]) != null && u[0] && da(h[2][0].data) == n);
  }), s = Ie(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return hr(Ie(f.data)[1][0].data) != a;
  }), e[3][i].data = tr(s);
}
function lk(e, r, t) {
  var a = -1, n = -1, i = {};
  Lr(e, r, 1, function(c, u) {
    var h = Ie(c.messages[0].data);
    a = Er(Ie(c.messages[0].data)[1][0].data), n = Ta({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, bt(c, n), h[1].push({ type: 2, data: At(n) });
    var v = Sa(e, r, a);
    v.id = n, r[1].location == r[n].location ? u.push(v) : Lr(e, r, n, function(d, x) {
      return x.push(v);
    }), c.messages[0].data = tr(h);
  });
  var s = -1;
  Lr(e, r, n, function(c, u) {
    for (var h = Ie(c.messages[0].data), v = 3; v <= 69; ++v) delete h[v];
    var d = rn(h[2], Er);
    d.forEach(function(w) {
      return Ia(c, w);
    }), s = Ta({ deps: [n], location: r[d[0]].location, type: r[d[0]].type }, r), bt(c, s), i[d[0]] = s, h[2] = [{ type: 2, data: At(s) }];
    var x = Sa(e, r, d[0]);
    x.id = s, r[d[0]].location == r[n].location ? u.push(x) : (Lr(e, r, 2, function(w) {
      var y = Ie(w.messages[0].data);
      Ht(y, r, n, s), w.messages[0].data = tr(y);
    }), Lr(e, r, s, function(w, y) {
      return y.push(x);
    })), c.messages[0].data = tr(h);
  });
  var f = -1;
  Lr(e, r, s, function(c, u) {
    for (var h = Ie(c.messages[0].data), v = Ie(h[1][0].data), d = 3; d <= 69; ++d) delete v[d];
    var x = Er(v[2][0].data);
    v[2][0].data = At(i[x]), h[1][0].data = tr(v);
    var w = Er(h[2][0].data);
    Ia(c, w), f = Ta({ deps: [s], location: r[w].location, type: r[w].type }, r), bt(c, f), i[w] = f, h[2][0].data = At(f);
    var y = Sa(e, r, w);
    y.id = f, r[s].location == r[f].location ? u.push(y) : Lr(e, r, f, function(_, g) {
      return g.push(y);
    }), c.messages[0].data = tr(h);
  }), Lr(e, r, f, function(c, u) {
    var h, v, d = Ie(c.messages[0].data), x = da(d[1][0].data), w = x.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (d[1][0].data = Lt(w), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(V) {
      return delete d[V];
    }), d[45]) {
      var y = Ie(d[45][0].data), _ = Er(y[1][0].data);
      Ia(c, _), delete d[45];
    }
    if (d[70]) {
      var g = Ie(d[70][0].data);
      (h = g[2]) == null || h.forEach(function(V) {
        var K = Ie(V.data);
        [2, 3].map(function(A) {
          return K[A][0];
        }).forEach(function(A) {
          var H = Ie(A.data);
          if (H[8]) {
            var W = Er(H[8][0].data);
            Ia(c, W);
          }
        });
      }), delete d[70];
    }
    [46, 30, 34, 35, 36, 38, 48, 49, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 85, 86, 87, 88, 89].forEach(function(V) {
      if (d[V]) {
        var K = Er(d[V][0].data);
        delete d[V], Ia(c, K);
      }
    });
    var F = Ie(d[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(V) {
        var K;
        if ((K = F[V]) != null && K[0]) {
          var A = Er(F[V][0].data), H = Ta({ deps: [f], location: r[A].location, type: r[A].type }, r);
          Ia(c, A), bt(c, H), i[A] = H;
          var W = Sa(e, r, A);
          if (W.id = H, r[A].location == r[f].location) u.push(W);
          else {
            r[H].location = r[A].location.replace(A.toString(), H.toString()), r[H].location == r[A].location && (r[H].location = r[H].location.replace(/\.iwa/, "-".concat(H, ".iwa"))), ir.utils.cfb_add(e, r[H].location, jn(Kn([W])));
            var Z = r[H].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            Lr(e, r, 2, function(j) {
              var ne = Ie(j.messages[0].data);
              sf(ne, H, Z), Ht(ne, r, f, H), j.messages[0].data = tr(ne);
            });
          }
          F[V][0].data = At(H);
        }
      });
      var E = Ie(F[1][0].data);
      (v = E[2]) == null || v.forEach(function(V) {
        var K = Er(V.data), A = Ta({ deps: [f], location: r[K].location, type: r[K].type }, r);
        Ia(c, K), bt(c, A), i[K] = A;
        var H = Sa(e, r, K);
        if (H.id = A, r[K].location == r[f].location) u.push(H);
        else {
          r[A].location = r[K].location.replace(K.toString(), A.toString()), r[A].location == r[K].location && (r[A].location = r[A].location.replace(/\.iwa/, "-".concat(A, ".iwa"))), ir.utils.cfb_add(e, r[A].location, jn(Kn([H])));
          var W = r[A].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          Lr(e, r, 2, function(Z) {
            var j = Ie(Z.messages[0].data);
            sf(j, A, W), Ht(j, r, f, A), Z.messages[0].data = tr(j);
          });
        }
        V.data = At(A);
      }), F[1][0].data = tr(E);
      var I = Ie(F[3][0].data);
      I[1].forEach(function(V) {
        var K = Ie(V.data), A = Er(K[2][0].data), H = i[A];
        if (!i[A]) {
          H = Ta({ deps: [f], location: "", type: r[A].type }, r), r[H].location = "Root Entry/Index/Tables/Tile-".concat(H, ".iwa"), i[A] = H;
          var W = Sa(e, r, A);
          W.id = H, Ia(c, A), bt(c, H), ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(H, ".iwa"), jn(Kn([W]))), Lr(e, r, 2, function(Z) {
            var j = Ie(Z.messages[0].data);
            j[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(H) }], [{ type: 2, data: Lt("Tables/Tile") }], [{ type: 2, data: Lt("Tables/Tile-".concat(H)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(0) }]]) }), j[1] = [{ type: 0, data: er(Math.max(H + 1, hr(j[1][0].data))) }], Ht(j, r, f, H), Z.messages[0].data = tr(j);
          });
        }
        K[2][0].data = At(H), V.data = tr(K);
      }), F[3][0].data = tr(I);
    }
    d[4][0].data = tr(F), c.messages[0].data = tr(d);
  });
}
function hk(e, r, t, a, n, i) {
  var s = [];
  Lr(e, r, i, function(u) {
    var h = Ie(u.messages[0].data);
    h[1] = [{ type: 2, data: Lt(a) }], s = rn(h[2], Er), u.messages[0].data = tr(h);
  });
  var f = Sa(e, r, s[0]), c = Er(Ie(f.messages[0].data)[2][0].data);
  Lr(e, r, c, function(u, h) {
    return dk(e, r, t, u, h, c);
  });
}
function dk(e, r, t, a, n, i) {
  if (!t["!ref"]) throw new Error("Cannot export empty sheet to NUMBERS");
  var s = yt(t["!ref"]);
  s.s.r = s.s.c = 0;
  var f = false;
  s.e.c > 999 && (f = true, s.e.c = 999), s.e.r > 999999 && (f = true, s.e.r = 999999), f && console.error("Truncating to ".concat(dr(s)));
  var c = [];
  if (t["!data"]) c = t["!data"];
  else {
    for (var u = [], h = 0; h <= s.e.c; ++h) u[h] = vr(h);
    for (var v = 0; v <= s.e.r; ++v) {
      c[v] = [];
      var d = "" + (v + 1);
      for (h = 0; h <= s.e.c; ++h) {
        var x = t[u[h] + d];
        x && (c[v][h] = x);
      }
    }
  }
  var w = { cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }], rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }], sst: ["~Sh33tJ5~"] }, y = Ie(a.messages[0].data);
  {
    y[6][0].data = er(s.e.r + 1), y[7][0].data = er(s.e.c + 1), delete y[46];
    var _ = Ie(y[4][0].data);
    {
      var g = Er(Ie(_[1][0].data)[2][0].data);
      Lr(e, r, g, function(Se, Oe) {
        var _e, Ke = Ie(Se.messages[0].data);
        if ((_e = Ke == null ? void 0 : Ke[2]) != null && _e[0]) for (var je = 0; je < c.length; ++je) {
          var $e = Ie(Ke[2][0].data);
          $e[1][0].data = er(je), $e[4][0].data = er(c[je].length), Ke[2][je] = { type: Ke[2][0].type, data: tr($e) };
        }
        Se.messages[0].data = tr(Ke);
      });
      var F = Er(_[2][0].data);
      Lr(e, r, F, function(Se, Oe) {
        for (var _e = Ie(Se.messages[0].data), Ke = 0; Ke <= s.e.c; ++Ke) {
          var je = Ie(_e[2][0].data);
          je[1][0].data = er(Ke), je[4][0].data = er(s.e.r + 1), _e[2][Ke] = { type: _e[2][0].type, data: tr(je) };
        }
        Se.messages[0].data = tr(_e);
      });
      var E = Ie(_[9][0].data);
      E[1] = [];
      var I = Ie(_[3][0].data);
      {
        var V = 256;
        I[2] = [{ type: 0, data: er(V) }];
        var K = Er(Ie(I[1][0].data)[2][0].data), A = (function() {
          var Se = Sa(e, r, 2), Oe = Ie(Se.messages[0].data), _e = Oe[3].filter(function(Ke) {
            return hr(Ie(Ke.data)[1][0].data) == K;
          });
          return (_e == null ? void 0 : _e.length) ? hr(Ie(_e[0].data)[12][0].data) : 0;
        })();
        ir.utils.cfb_del(e, r[K].location), Lr(e, r, 2, function(Se) {
          var Oe = Ie(Se.messages[0].data);
          Oe[3] = Oe[3].filter(function(_e) {
            return hr(Ie(_e.data)[1][0].data) != K;
          }), uk(Oe, r, i, K), Se.messages[0].data = tr(Oe);
        }), Ia(a, K), I[1] = [];
        for (var H = Math.ceil((s.e.r + 1) / V), W = 0; W < H; ++W) {
          var Z = Ta({ deps: [], location: "", type: 6002 }, r);
          r[Z].location = "Root Entry/Index/Tables/Tile-".concat(Z, ".iwa");
          for (var j = [[], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min(s.e.r + 1, (W + 1) * V)) }], [{ type: 0, data: er(0) }], [{ type: 0, data: er(Math.min((W + 1) * V, s.e.r + 1) - W * V) }], [], [{ type: 0, data: er(5) }], [{ type: 0, data: er(1) }], [{ type: 0, data: er(1) }]], ne = W * V; ne <= Math.min(s.e.r, (W + 1) * V - 1); ++ne) {
            var de = fk(c[ne], w);
            de[1][0].data = er(ne - W * V), j[5].push({ data: tr(de), type: 2 });
          }
          I[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(W) }], [{ type: 2, data: At(Z) }]]) });
          var We = { id: Z, messages: [nf(6002, tr(j))] }, me = jn(Kn([We]));
          ir.utils.cfb_add(e, "/Index/Tables/Tile-".concat(Z, ".iwa"), me), Lr(e, r, 2, function(Se) {
            var Oe = Ie(Se.messages[0].data);
            Oe[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Z) }], [{ type: 2, data: Lt("Tables/Tile") }], [{ type: 2, data: Lt("Tables/Tile-".concat(Z)) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [{ type: 2, data: new Uint8Array([2, 0, 0]) }], [], [], [], [], [{ type: 0, data: er(0) }], [], [{ type: 0, data: er(A) }]]) }), Oe[1] = [{ type: 0, data: er(Math.max(Z + 1, hr(Oe[1][0].data))) }], Ht(Oe, r, i, Z), Se.messages[0].data = tr(Oe);
          }), bt(a, Z), E[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(W * V) }], [{ type: 0, data: er(W) }]]) });
        }
      }
      if (_[3][0].data = tr(I), _[9][0].data = tr(E), _[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var ze = Ta({ type: 6144, deps: [i], location: r[i].location }, r);
        n.push({ id: ze, messages: [nf(6144, tr([[], t["!merges"].map(function(Se) {
          return { type: 2, data: tr([[], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Se.s.r, Se.s.c]).buffer) }]]) }], [{ type: 2, data: tr([[], [{ type: 5, data: new Uint8Array(new Uint16Array([Se.e.r - Se.s.r + 1, Se.e.c - Se.s.c + 1]).buffer) }]]) }]]) };
        })]))] }), _[13] = [{ type: 2, data: At(ze) }], Lr(e, r, 2, function(Se) {
          var Oe = Ie(Se.messages[0].data);
          Ht(Oe, r, i, ze), Se.messages[0].data = tr(Oe);
        }), bt(a, ze);
      } else delete _[13];
      var ke = Er(_[4][0].data);
      Lr(e, r, ke, function(Se) {
        var Oe = Ie(Se.messages[0].data);
        Oe[3] = [], w.sst.forEach(function(_e, Ke) {
          Ke != 0 && Oe[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ke) }], [{ type: 0, data: er(1) }], [{ type: 2, data: Lt(_e) }]]) });
        }), Se.messages[0].data = tr(Oe);
      });
      var Be = Er(_[17][0].data);
      if (Lr(e, r, Be, function(Se) {
        var Oe = Ie(Se.messages[0].data);
        Oe[3] = [];
        var _e = [904980, 903835, 903815, 903845];
        w.rsst.forEach(function(Ke, je) {
          if (je != 0) {
            var $e = [[], [{ type: 0, data: new Uint8Array([5]) }], [], [{ type: 2, data: Lt(Ke.v) }]];
            $e[10] = [{ type: 0, data: new Uint8Array([1]) }], $e[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], $e[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], $e[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], $e[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], $e[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], $e[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], $e[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], $e[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var R = Ta({ deps: [], location: "", type: 2001 }, r), ee = [];
            if (Ke.l) {
              var L = un(e, 2032, [[], [], [{ type: 2, data: Lt(Ke.l) }]], "/Index/Tables/DataList", r);
              $e[11] = [];
              var U = [[], []];
              U[1] || (U[1] = []), U[1].push({ type: 2, data: tr([[], [{ type: 0, data: er(0) }], [{ type: 2, data: At(L) }]]) }), $e[11][0] = { type: 2, data: tr(U) }, ee.push(L);
            }
            un(e, 2001, $e, "/Index/Tables/DataList", r, R), Lr(e, r, R, function(O) {
              _e.forEach(function(Ce) {
                return bt(O, Ce);
              }), ee.forEach(function(Ce) {
                return bt(O, Ce);
              });
            });
            var ue = un(e, 6218, [[], [{ type: 2, data: At(R) }], [], [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]], "/Index/Tables/DataList", r);
            Lr(e, r, ue, function(O) {
              return bt(O, R);
            }), Oe[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(je) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [{ type: 2, data: At(ue) }]]) }), bt(Se, ue), Lr(e, r, 2, function(O) {
              var Ce = Ie(O.messages[0].data);
              Ht(Ce, r, Be, ue), Ht(Ce, r, ue, R), Ht(Ce, r, R, ee), Ht(Ce, r, R, _e), O.messages[0].data = tr(Ce);
            });
          }
        }), Se.messages[0].data = tr(Oe);
      }), w.cmnt.length > 1) {
        var Qe = Er(_[19][0].data), he = {}, sr = 0;
        Lr(e, r, Qe, function(Se) {
          var Oe = Ie(Se.messages[0].data);
          Oe[3] = [], w.cmnt.forEach(function(_e, Ke) {
            if (Ke != 0) {
              var je = [];
              _e.replies && _e.replies.forEach(function(ee) {
                he[ee.a || ""] || (he[ee.a || ""] = un(e, 212, [[], [{ type: 2, data: Lt(ee.a || "") }], [{ type: 2, data: Ac(++sr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
                var L = he[ee.a || ""], U = un(e, 3056, [[], [{ type: 2, data: Lt(ee.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: At(L) }]], "/Index/Tables/DataList", r);
                Lr(e, r, U, function(ue) {
                  return bt(ue, L);
                }), je.push(U), Lr(e, r, 2, function(ue) {
                  var O = Ie(ue.messages[0].data);
                  Ht(O, r, U, L), ue.messages[0].data = tr(O);
                });
              }), he[_e.a || ""] || (he[_e.a || ""] = un(e, 212, [[], [{ type: 2, data: Lt(_e.a || "") }], [{ type: 2, data: Ac(++sr) }], [], [{ type: 0, data: er(0) }]], "/Index/Tables/DataList", r));
              var $e = he[_e.a || ""], R = un(e, 3056, [[], [{ type: 2, data: Lt(_e.t || "") }], [{ type: 2, data: tr([[], [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]]) }], [{ type: 2, data: At($e) }], je.map(function(ee) {
                return { type: 2, data: At(ee) };
              }), [{ type: 2, data: tr([[], [{ type: 0, data: er(Ke) }], [{ type: 0, data: er(0) }]]) }]], "/Index/Tables/DataList", r);
              Lr(e, r, R, function(ee) {
                bt(ee, $e), je.forEach(function(L) {
                  return bt(ee, L);
                });
              }), Oe[3].push({ type: 2, data: tr([[], [{ type: 0, data: er(Ke) }], [{ type: 0, data: er(1) }], [], [], [], [], [], [], [], [{ type: 2, data: At(R) }]]) }), bt(Se, R), Lr(e, r, 2, function(ee) {
                var L = Ie(ee.messages[0].data);
                Ht(L, r, Qe, R), Ht(L, r, R, $e), je.length && Ht(L, r, R, je), ee.messages[0].data = tr(L);
              });
            }
          }), Oe[2][0].data = er(w.cmnt.length + 1), Se.messages[0].data = tr(Oe);
        });
      }
    }
    y[4][0].data = tr(_);
  }
  a.messages[0].data = tr(y);
}
function Ol(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function Uf(e) {
  Ol([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function Wf(e) {
  Ol([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]])(e);
}
function xk(e) {
  return mr.WS.indexOf(e) > -1 ? "sheet" : e == mr.CS ? "chart" : e == mr.DS ? "dialog" : e == mr.MS ? "macro" : e && e.length ? e : "sheet";
}
function pk(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, xk(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function vk(e, r, t, a, n, i, s, f) {
  if (!(!e || !e["!legdrawel"])) {
    var c = Wn(e["!legdrawel"].Target, a), u = Wt(t, c, true);
    u && dm(Pr(u), e, f || []);
  }
}
function mk(e, r, t, a, n, i, s, f, c, u, h, v) {
  try {
    i[a] = gi(Wt(e, t, true), r);
    var d = ct(e, r), x;
    switch (f) {
      case "sheet":
        x = Bw(d, r, n, c, i[a], u, h, v);
        break;
      case "chart":
        if (x = Lw(d, r, n, c, i[a], u, h, v), !x || !x["!drawel"]) break;
        var w = Wn(x["!drawel"].Target, r), y = Oi(w), _ = hm(Wt(e, w, true), gi(Wt(e, y, true), w)), g = Wn(_, w), F = Oi(g);
        x = iw(Wt(e, g, true), g, c, gi(Wt(e, F, true), g), u, x);
        break;
      case "macro":
        x = Mw(d, r, n, c, i[a], u, h, v);
        break;
      case "dialog":
        x = Uw(d, r, n, c, i[a], u, h, v);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = x;
    var E = [], I = [];
    i && i[a] && Gr(i[a]).forEach(function(V) {
      var K = "";
      if (i[a][V].Type == mr.CMNT) {
        if (K = Wn(i[a][V].Target, r), E = Vw(ct(e, K, true), K, c), !E || !E.length) return;
        lc(x, E, false);
      }
      i[a][V].Type == mr.TCMNT && (K = Wn(i[a][V].Target, r), I = I.concat(mm(ct(e, K, true), c)));
    }), I && I.length && lc(x, I, true, c.people || []), vk(x, f, e, r, n, c, u, E);
  } catch (V) {
    if (c.WTF) throw V;
  }
}
function Qt(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function gk(e, r) {
  if (Yn(), r = r || {}, Uf(r), ra(e, "META-INF/manifest.xml") || ra(e, "objectdata.xml")) return Tc(e, r);
  if (ra(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof G0 < "u") {
      if (e.FileIndex) return G0(e, r);
      var t = ir.utils.cfb_new();
      return Oo(e).forEach(function(me) {
        lr(t, me, u1(e, me));
      }), G0(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!ra(e, "[Content_Types].xml")) {
    if (ra(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (ra(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = ir.find(e, "Index.zip");
    if (a) return r = Hr(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? Gn(new Uint8Array(a.content), r) : Gn(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = Oo(e), i = ad(Wt(e, "[Content_Types].xml")), s = false, f, c;
  if (i.workbooks.length === 0 && (c = "xl/workbook.xml", ct(e, c, true) && i.workbooks.push(c)), i.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !ct(e, c, true)) throw new Error("Could not find workbook");
    i.workbooks.push(c), s = true;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = true);
  var u = {}, h = {};
  if (!r.bookSheets && !r.bookProps) {
    if (wi = [], i.sst) try {
      wi = Hw(ct(e, Qt(i.sst)), i.sst, r);
    } catch (me) {
      if (r.WTF) throw me;
    }
    r.cellStyles && i.themes.length && (u = Zu(Wt(e, i.themes[0].replace(/^\//, ""), true) || "", r)), i.style && (h = Ww(ct(e, Qt(i.style)), i.style, u, r));
  }
  i.links.map(function(me) {
    try {
      var ze = gi(Wt(e, Oi(Qt(me))), me);
      return Kw(ct(e, Qt(me)), ze, me, r);
    } catch {
    }
  });
  var v = Pw(ct(e, Qt(i.workbooks[0])), i.workbooks[0], r), d = {}, x = "";
  i.coreprops.length && (x = ct(e, Qt(i.coreprops[0]), true), x && (d = _u(x)), i.extprops.length !== 0 && (x = ct(e, Qt(i.extprops[0]), true), x && cd(x, d, r)));
  var w = {};
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (x = Wt(e, Qt(i.custprops[0]), true), x && (w = ld(x, r)));
  var y = {};
  if ((r.bookSheets || r.bookProps) && (v.Sheets ? f = v.Sheets.map(function(ze) {
    return ze.name;
  }) : d.Worksheets && d.SheetNames.length > 0 && (f = d.SheetNames), r.bookProps && (y.Props = d, y.Custprops = w), r.bookSheets && typeof f < "u" && (y.SheetNames = f), r.bookSheets ? y.SheetNames : r.bookProps)) return y;
  f = {};
  var _ = {};
  r.bookDeps && i.calcchain && (_ = Xw(ct(e, Qt(i.calcchain)), i.calcchain));
  var g = 0, F = {}, E, I;
  {
    var V = v.Sheets;
    d.Worksheets = V.length, d.SheetNames = [];
    for (var K = 0; K != V.length; ++K) d.SheetNames[K] = V[K].name;
  }
  var A = s ? "bin" : "xml", H = i.workbooks[0].lastIndexOf("/"), W = (i.workbooks[0].slice(0, H + 1) + "_rels/" + i.workbooks[0].slice(H + 1) + ".rels").replace(/^\//, "");
  ra(e, W) || (W = "xl/_rels/workbook." + A + ".rels");
  var Z = gi(Wt(e, W, true), W.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = jw(ct(e, Qt(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = gm(ct(e, Qt(i.people[0])), r)), Z && (Z = pk(Z, v.Sheets));
  var j = ct(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (g = 0; g != d.Worksheets; ++g) {
    var ne = "sheet";
    if (Z && Z[g] ? (E = "xl/" + Z[g][1].replace(/[\/]?xl\//, ""), ra(e, E) || (E = Z[g][1]), ra(e, E) || (E = W.replace(/_rels\/[\S\s]*$/, "") + Z[g][1]), ne = Z[g][2]) : (E = "xl/worksheets/sheet" + (g + 1 - j) + "." + A, E = E.replace(/sheet0\./, "sheet.")), I = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
      case "number":
        if (g != r.sheets) continue e;
        break;
      case "string":
        if (d.SheetNames[g].toLowerCase() != r.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(r.sheets)) {
          for (var de = false, We = 0; We != r.sheets.length; ++We) typeof r.sheets[We] == "number" && r.sheets[We] == g && (de = 1), typeof r.sheets[We] == "string" && r.sheets[We].toLowerCase() == d.SheetNames[g].toLowerCase() && (de = 1);
          if (!de) continue e;
        }
    }
    mk(e, E, I, d.SheetNames[g], g, F, f, ne, r, v, u, h);
  }
  return y = { Directory: i, Workbook: v, Props: d, Custprops: w, Deps: _, Sheets: f, SheetNames: d.SheetNames, Strings: wi, Styles: h, Themes: u, SSF: Hr(nr) }, r && r.bookFiles && (e.files ? (y.keys = n, y.files = e.files) : (y.keys = [], y.files = {}, e.FullPaths.forEach(function(me, ze) {
    me = me.replace(/^Root Entry[\/]/, ""), y.keys.push(me), y.files[me] = e.FileIndex[ze];
  }))), r && r.bookVBA && (i.vba.length > 0 ? y.vbaraw = ct(e, Qt(i.vba[0]), true) : i.defaults && i.defaults.bin === Tm && (y.vbaraw = ct(e, "xl/vbaProject.bin", true))), y.bookType = s ? "xlsb" : "xlsx", y;
}
function _k(e, r) {
  var t = r || {}, a = "Workbook", n = ir.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (Bp(n.content), a = "/!DataSpaces/DataSpaceMap", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = Mp(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = Up(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    Hp(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = Vp(n.content);
  if (a = "/EncryptedPackage", n = ir.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function wk(e, r) {
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (Yn(), Vs(e.SSF), r.revssf = Ks(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, yi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = true, n = Af();
  Wf(r = r || {});
  var i = mf(), s = "", f = 0;
  if (r.cellXfs = [], an(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", lr(i, s, wu(e.Props, r)), n.coreprops.push(s), Nr(r.rels, 2, s, mr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && c.push(e.SheetNames[u]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, lr(i, s, Eu(e.Props)), n.extprops.push(s), Nr(r.rels, 3, s, mr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", lr(i, s, Tu(e.Custprops)), n.custprops.push(s), Nr(r.rels, 4, s, mr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, lr(i, s, aw(f - 1, r, e, v)), n.sheets.push(s), Nr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, mr.WS[0]), d) {
      var w = d["!comments"], y = false, _ = "";
      if (w && w.length > 0) {
        var g = false;
        w.forEach(function(E) {
          E[1].forEach(function(I) {
            I.T == true && (g = true);
          });
        }), g && (_ = "xl/threadedComments/threadedComment" + f + ".xml", lr(i, _, Qu(w, h, r)), n.threadedcomments.push(_), Nr(v, -1, "../threadedComments/threadedComment" + f + ".xml", mr.TCMNT)), _ = "xl/comments" + f + "." + t, lr(i, _, Em(w)), n.comments.push(_), Nr(v, -1, "../comments" + f + "." + t, mr.CMNT), y = true;
      }
      d["!legacy"] && y && lr(i, "xl/drawings/vmlDrawing" + f + ".vml", Ju(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && lr(i, Oi(s), Vn(v));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, lr(i, s, Pp(r.Strings)), n.strs.push(s), Nr(r.wbrels, -1, "sharedStrings." + t, mr.SST)), s = "xl/workbook." + t, lr(i, s, Rw(e)), n.workbooks.push(s), Nr(r.rels, 1, s, mr.WB), s = "xl/theme/theme1.xml";
  var F = Rf(e.Themes, r);
  return lr(i, s, F), n.themes.push(s), Nr(r.wbrels, -1, "theme/theme1.xml", mr.THEME), s = "xl/styles." + t, lr(i, s, Uv(e, r)), n.styles.push(s), Nr(r.wbrels, -1, "styles." + t, mr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", lr(i, s, e.vbaraw), n.vba.push(s), Nr(r.wbrels, -1, "vbaProject.bin", mr.VBA)), s = "xl/metadata." + t, lr(i, s, im()), n.metadata.push(s), Nr(r.wbrels, -1, "metadata." + t, mr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", lr(i, s, el(h)), n.people.push(s), Nr(r.wbrels, -1, "persons/person.xml", mr.PEOPLE)), lr(i, "[Content_Types].xml", mu(n, r)), lr(i, "_rels/.rels", Vn(r.rels)), lr(i, "xl/_rels/workbook." + t + ".rels", Vn(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function yk(e, r) {
  e && !e.SSF && (e.SSF = Hr(nr)), e && e.SSF && (Yn(), Vs(e.SSF), r.revssf = Ks(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, yi ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = bm.indexOf(r.bookType) > -1, n = Af();
  Wf(r = r || {});
  var i = mf(), s = "", f = 0;
  if (r.cellXfs = [], an(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", lr(i, s, wu(e.Props, r)), n.coreprops.push(s), Nr(r.rels, 2, s, mr.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], u = 0; u < e.SheetNames.length; ++u) (e.Workbook.Sheets[u] || {}).Hidden != 2 && c.push(e.SheetNames[u]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, lr(i, s, Eu(e.Props)), n.extprops.push(s), Nr(r.rels, 3, s, mr.EXT_PROPS), e.Custprops !== e.Props && Gr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", lr(i, s, Tu(e.Custprops)), n.custprops.push(s), Nr(r.rels, 4, s, mr.CUST_PROPS));
  var h = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var v = { "!id": {} }, d = e.Sheets[e.SheetNames[f - 1]], x = (d || {})["!type"] || "sheet";
    if (s = "xl/worksheets/sheet" + f + "." + t, lr(i, s, K2(f - 1, r, e, v)), n.sheets.push(s), Nr(r.wbrels, -1, "worksheets/sheet" + f + "." + t, mr.WS[0]), d) {
      var w = d["!comments"], y = false, _ = "";
      if (w && w.length > 0) {
        var g = false;
        w.forEach(function(F) {
          F[1].forEach(function(E) {
            E.T == true && (g = true);
          });
        }), g && (_ = "xl/threadedComments/threadedComment" + f + ".xml", lr(i, _, Qu(w, h, r)), n.threadedcomments.push(_), Nr(v, -1, "../threadedComments/threadedComment" + f + ".xml", mr.TCMNT)), _ = "xl/comments" + f + "." + t, lr(i, _, vm(w)), n.comments.push(_), Nr(v, -1, "../comments" + f + "." + t, mr.CMNT), y = true;
      }
      d["!legacy"] && y && lr(i, "xl/drawings/vmlDrawing" + f + ".vml", Ju(f, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    v["!id"].rId1 && lr(i, Oi(s), Vn(v));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, lr(i, s, Dp(r.Strings, r)), n.strs.push(s), Nr(r.wbrels, -1, "sharedStrings." + t, mr.SST)), s = "xl/workbook." + t, lr(i, s, gw(e)), n.workbooks.push(s), Nr(r.rels, 1, s, mr.WB), s = "xl/theme/theme1.xml", lr(i, s, Rf(e.Themes, r)), n.themes.push(s), Nr(r.wbrels, -1, "theme/theme1.xml", mr.THEME), s = "xl/styles." + t, lr(i, s, mv(e, r)), n.styles.push(s), Nr(r.wbrels, -1, "styles." + t, mr.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", lr(i, s, e.vbaraw), n.vba.push(s), Nr(r.wbrels, -1, "vbaProject.bin", mr.VBA)), s = "xl/metadata." + t, lr(i, s, fm()), n.metadata.push(s), Nr(r.wbrels, -1, "metadata." + t, mr.XLMETA), h.length > 1 && (s = "xl/persons/person.xml", lr(i, s, el(h)), n.people.push(s), Nr(r.wbrels, -1, "persons/person.xml", mr.PEOPLE)), lr(i, "[Content_Types].xml", mu(n, r)), lr(i, "_rels/.rels", Vn(r.rels)), lr(i, "xl/_rels/workbook." + t + ".rels", Vn(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function Hf(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = qt(e.slice(0, 12));
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
function kk(e, r) {
  return ir.find(e, "EncryptedPackage") ? _k(e, r) : _l(e, r);
}
function Ek(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = pr && Buffer.isBuffer(e) ? "buffer" : "base64"), t = Gc(a, n), gk(t, n);
}
function Nl(e, r) {
  var t = 0;
  e: for (; t < e.length; ) switch (e.charCodeAt(t)) {
    case 10:
    case 13:
    case 32:
      ++t;
      break;
    case 60:
      return tf(e.slice(t), r);
    default:
      break e;
  }
  return $n.to_workbook(e, r);
}
function Tk(e, r) {
  var t = "", a = Hf(e, r);
  switch (r.type) {
    case "base64":
      t = qt(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = _n(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (t = Pr(t)), r.type = "binary", Nl(t, r);
}
function Sk(e, r) {
  var t = e;
  return r.type == "base64" && (t = qt(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = pr && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : dh(t.slice(2)) : Dc(t.slice(2)), r.type = "binary", Nl(t, r);
}
function Fk(e) {
  return e.match(/[^\x00-\x7F]/) ? Fa(e) : e;
}
function z0(e, r, t, a) {
  return a ? (t.type = "string", $n.to_workbook(e, t)) : $n.to_workbook(r, t);
}
function Gn(e, r) {
  uf();
  var t = r || {};
  if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return Gn(new Uint8Array(e), (t = Hr(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return Gn(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = false;
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), Xn = {}, t.dateNF && (Xn.dateNF = t.dateNF), t.type || (t.type = pr && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = pr ? "buffer" : "binary", a = jh(e), typeof Uint8Array < "u" && !pr && (t.type = "array")), t.type == "string" && (i = true, t.type = "binary", t.codepage = 65001, a = Fk(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo) return t = Hr(t), t.type = "array", Gn(lf(a), t);
  }
  switch ((n = Hf(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return kk(ir.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return _l(a, t);
      break;
    case 60:
      return tf(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return wp(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return Vu.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? Ek(a, t) : z0(e, a, t, i);
    case 239:
      return n[3] === 60 ? tf(a, t) : z0(e, a, t, i);
    case 255:
      if (n[1] === 254) return Sk(a, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return pn.to_workbook(a, t);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9))) return pn.to_workbook(a, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return rf.to_workbook(a, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116) return ev(a, t);
      break;
    case 10:
    case 13:
    case 32:
      return Tk(a, t);
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
  return _p.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? rf.to_workbook(a, t) : z0(e, a, t, i);
}
function Rl(e, r) {
  switch (r.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      r.type = "";
      break;
    case "file":
      return Vi(r.file, ir.write(e, { type: pr ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return ir.write(e, r);
}
function bk(e, r) {
  switch (r.bookType) {
    case "ods":
      return bl(e, r);
    case "numbers":
      return ck(e, r);
    case "xlsb":
      return wk(e, r);
    default:
      return yk(e, r);
  }
}
function Ak(e, r) {
  var t = Hr(r || {}), a = bk(e, t);
  return Ck(a, t);
}
function Ck(e, r) {
  var t = {}, a = pr ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
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
    n = new Uint8Array(Hs(n));
  }
  return r.password && typeof encrypt_agile < "u" ? Rl(encrypt_agile(n, r.password), r) : r.type === "file" ? Vi(r.file, n) : r.type == "string" ? Pr(n) : n;
}
function Dk(e, r) {
  var t = r || {}, a = gy(e, t);
  return Rl(a, t);
}
function ya(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return Ds(Fa(a));
    case "binary":
      return Fa(a);
    case "string":
      return e;
    case "file":
      return Vi(r.file, a, "utf8");
    case "buffer":
      return pr ? Aa(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : ya(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Ik(e, r) {
  switch (r.type) {
    case "base64":
      return ph(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return Vi(r.file, e, "binary");
    case "buffer":
      return pr ? Aa(e, "binary") : e.split("").map(function(t) {
        return t.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Fs(e, r) {
  switch (r.type) {
    case "string":
    case "base64":
    case "binary":
      for (var t = "", a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
      return r.type == "base64" ? Ds(t) : r.type == "string" ? Pr(t) : t;
    case "file":
      return Vi(r.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
}
function Pl(e, r) {
  uf(), pw(e);
  var t = Hr(r || {});
  if (t.cellStyles && (t.cellNF = true, t.sheetStubs = true), t.type == "array") {
    t.type = "binary";
    var a = Pl(e, t);
    return t.type = "array", Hs(a);
  }
  var n = 0;
  if (t.sheet && (typeof t.sheet == "number" ? n = t.sheet : n = e.SheetNames.indexOf(t.sheet), !e.SheetNames[n])) throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
  switch (t.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return ya(ly(e, t), t);
    case "slk":
    case "sylk":
      return ya(Hu.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return ya(kl(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return Ik(Bl(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return ya(Vf(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return ya(Vu.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "dbf":
      return Fs(rf.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return ya($n.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "rtf":
      return ya(rv(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return ya(Xu.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "fods":
      return ya(bl(e, t), t);
    case "wk1":
      return Fs(pn.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Fs(pn.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Fs(yl(e, t), t);
    case "biff5":
      t.biff || (t.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return t.biff || (t.biff = 8), Dk(e, t);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Ak(e, t);
    default:
      throw new Error("Unrecognized bookType |" + t.bookType + "|");
  }
}
function Ok(e) {
  if (!e.bookType) {
    var r = { xls: "biff8", htm: "html", slk: "sylk", socialcalc: "eth", Sh33tJS: "WTF" }, t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = r[e.bookType] || e.bookType;
  }
}
function Nk(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, Ok(a), Pl(e, a);
}
function Rk(e, r, t, a, n, i, s) {
  var f = Tr(t), c = s.defval, u = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), h = true, v = e["!data"] != null, d = n === 1 ? [] : {};
  if (n !== 1) if (Object.defineProperty) try {
    Object.defineProperty(d, "__rowNum__", { value: t, enumerable: false });
  } catch {
    d.__rowNum__ = t;
  }
  else d.__rowNum__ = t;
  if (!v || e["!data"][t]) for (var x = r.s.c; x <= r.e.c; ++x) {
    var w = v ? (e["!data"][t] || [])[x] : e[a[x] + f];
    if (w == null || w.t === void 0) {
      if (c === void 0) continue;
      i[x] != null && (d[i[x]] = c);
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
        if (!w.z || !ia(w.z) || (y = Ba(y), typeof y == "number")) break;
      case "d":
        s && (s.UTC || s.raw === false) || (y = wn(new Date(y)));
        break;
      default:
        throw new Error("unrecognized type " + w.t);
    }
    if (i[x] != null) {
      if (y == null) if (w.t == "e" && y === null) d[i[x]] = null;
      else if (c !== void 0) d[i[x]] = c;
      else if (u && y === null) d[i[x]] = null;
      else continue;
      else d[i[x]] = (w.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : u) ? y : Ua(w, y, s);
      y != null && (h = false);
    }
  }
  return { row: d, isempty: h };
}
function ff(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, u = r || {}, h = u.range != null ? u.range : e["!ref"];
  switch (u.header === 1 ? a = 1 : u.header === "A" ? a = 2 : Array.isArray(u.header) ? a = 3 : u.header == null && (a = 0), typeof h) {
    case "string":
      c = Cr(h);
      break;
    case "number":
      c = Cr(e["!ref"]), c.s.r = h;
      break;
    default:
      c = h;
  }
  a > 0 && (n = 0);
  var v = Tr(c.s.r), d = [], x = [], w = 0, y = 0, _ = e["!data"] != null, g = c.s.r, F = 0, E = {};
  _ && !e["!data"][g] && (e["!data"][g] = []);
  var I = u.skipHidden && e["!cols"] || [], V = u.skipHidden && e["!rows"] || [];
  for (F = c.s.c; F <= c.e.c; ++F) if (!(I[F] || {}).hidden) switch (d[F] = vr(F), t = _ ? e["!data"][g][F] : e[d[F] + v], a) {
    case 1:
      i[F] = F - c.s.c;
      break;
    case 2:
      i[F] = d[F];
      break;
    case 3:
      i[F] = u.header[F - c.s.c];
      break;
    default:
      if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = Ua(t, null, u), y = E[s] || 0, !y) E[s] = 1;
      else {
        do
          f = s + "_" + y++;
        while (E[f]);
        E[s] = y, E[f] = 1;
      }
      i[F] = f;
  }
  for (g = c.s.r + n; g <= c.e.r; ++g) if (!(V[g] || {}).hidden) {
    var K = Rk(e, c, g, d, a, i, u);
    (K.isempty === false || (a === 1 ? u.blankrows !== false : u.blankrows)) && (x[w++] = K.row);
  }
  return x.length = w, x;
}
var Cc = /"/g;
function Pk(e, r, t, a, n, i, s, f, c) {
  for (var u = true, h = [], v = "", d = Tr(t), x = e["!data"] != null, w = x && e["!data"][t] || [], y = r.s.c; y <= r.e.c; ++y) if (a[y]) {
    var _ = x ? w[y] : e[a[y] + d];
    if (_ == null) v = "";
    else if (_.v != null) {
      u = false, v = "" + (c.rawNumbers && _.t == "n" ? _.v : Ua(_, null, c));
      for (var g = 0, F = 0; g !== v.length; ++g) if ((F = v.charCodeAt(g)) === n || F === i || F === 34 || c.forceQuotes) {
        v = '"' + v.replace(Cc, '""') + '"';
        break;
      }
      v == "ID" && f == 0 && h.length == 0 && (v = '"ID"');
    } else _.f != null && !_.F ? (u = false, v = "=" + _.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(Cc, '""') + '"')) : v = "";
    h.push(v);
  }
  if (c.strip) for (; h[h.length - 1] === ""; ) --h.length;
  return c.blankrows === false && u ? null : h.join(s);
}
function Vf(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Cr(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), u = "", h = [], v = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], x = n.s.c; x <= n.e.c; ++x) (v[x] || {}).hidden || (h[x] = vr(x));
  for (var w = 0, y = n.s.r; y <= n.e.r; ++y) (d[y] || {}).hidden || (u = Pk(e, n, y, h, s, c, i, w, a), u != null && (u || a.blankrows !== false) && t.push((w++ ? f : "") + u));
  return t.join("");
}
function Bl(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = Vf(e, r);
  return t;
}
function Bk(e, r) {
  var t = "", a, n = "";
  if (e == null || e["!ref"] == null) return [];
  var i = Cr(e["!ref"]), s = "", f = [], c, u = [], h = e["!data"] != null;
  for (c = i.s.c; c <= i.e.c; ++c) f[c] = vr(c);
  for (var v = i.s.r; v <= i.e.r; ++v) for (s = Tr(v), c = i.s.c; c <= i.e.c; ++c) if (t = f[c] + s, a = h ? (e["!data"][v] || [])[c] : e[t], n = "", a !== void 0) {
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
function Ll(e, r, t) {
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
    var v = Cr(s["!ref"]);
    h.e.c = Math.max(h.e.c, v.e.c), h.e.r = Math.max(h.e.r, v.e.r), f == -1 && (f = v.e.r + 1, h.e.r = f + r.length - 1 + i);
  } else f == -1 && (f = 0, h.e.r = r.length - 1 + i);
  var d = a.header || [], x = 0, w = [];
  r.forEach(function(_, g) {
    n && !s["!data"][f + g + i] && (s["!data"][f + g + i] = []), n && (w = s["!data"][f + g + i]), Gr(_).forEach(function(F) {
      (x = d.indexOf(F)) == -1 && (d[x = d.length] = F);
      var E = _[F], I = "z", V = "", K = n ? "" : vr(c + x) + Tr(f + g + i), A = n ? w[c + x] : s[K];
      E && typeof E == "object" && !(E instanceof Date) ? n ? w[c + x] = E : s[K] = E : (typeof E == "number" ? I = "n" : typeof E == "boolean" ? I = "b" : typeof E == "string" ? I = "s" : E instanceof Date ? (I = "d", a.UTC || (E = js(E)), a.cellDates || (I = "n", E = Zr(E)), V = A != null && A.z && ia(A.z) ? A.z : a.dateNF || nr[14]) : E === null && a.nullError && (I = "e", E = 0), A ? (A.t = I, A.v = E, delete A.w, delete A.R, V && (A.z = V)) : n ? w[c + x] = A = { t: I, v: E } : s[K] = A = { t: I, v: E }, V && (A.z = V));
    });
  }), h.e.c = Math.max(h.e.c, c + d.length - 1);
  var y = Tr(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (x = 0; x < d.length; ++x) n ? s["!data"][f][x + c] = { t: "s", v: d[x] } : s[vr(x + c) + y] = { t: "s", v: d[x] };
  return s["!ref"] = dr(h), s;
}
function Lk(e, r) {
  return Ll(null, e, r);
}
function Hi(e, r, t) {
  if (typeof r == "string") {
    if (e["!data"] != null) {
      var a = Br(r);
      return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? Hi(e, gr(r)) : Hi(e, vr(t || 0) + Tr(r));
}
function Mk(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function Xf(e, r) {
  var t = { SheetNames: [], Sheets: {} };
  return e && Yi(t, e, r || "Sheet1"), t;
}
function Yi(e, r, t, a) {
  var n = 1;
  if (!t) for (; n <= 65535 && e.SheetNames.indexOf(t = "Sheet" + n) != -1; ++n, t = void 0) ;
  if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(t) >= 0 && t.length < 32) {
    var i = t.match(/\d+$/);
    n = i && +i[0] || 0;
    var s = i && t.slice(0, i.index) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf(t = s + n) != -1; ++n) ;
  }
  if (pl(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), e.Sheets[t] = r, t;
}
function Uk(e, r, t) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = Mk(e, r);
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
function Wk(e, r) {
  return e.z = r, e;
}
function Ml(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function Hk(e, r, t) {
  return Ml(e, "#" + r, t);
}
function Vk(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function Xk(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Cr(r), i = typeof r == "string" ? r : dr(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var c = Hi(e, s, f);
    c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = t, a && (c.D = true));
  }
  var u = yt(e["!ref"]);
  return u.s.r > n.s.r && (u.s.r = n.s.r), u.s.c > n.s.c && (u.s.c = n.s.c), u.e.r < n.e.r && (u.e.r = n.e.r), u.e.c < n.e.c && (u.e.c = n.e.c), e["!ref"] = dr(u), e;
}
var rt = { encode_col: vr, encode_row: Tr, encode_cell: gr, encode_range: dr, decode_col: Ef, decode_row: kf, split_cell: N1, decode_cell: Br, decode_range: yt, format_cell: Ua, sheet_new: R1, sheet_add_aoa: lu, sheet_add_json: Ll, sheet_add_dom: El, aoa_to_sheet: Zn, json_to_sheet: Lk, table_to_sheet: Tl, table_to_book: Hy, sheet_to_csv: Vf, sheet_to_txt: Bl, sheet_to_json: ff, sheet_to_html: kl, sheet_to_formulae: Bk, sheet_to_row_object_array: ff, sheet_get_cell: Hi, book_new: Xf, book_append_sheet: Yi, book_set_sheet_visibility: Uk, cell_set_number_format: Wk, cell_set_hyperlink: Ml, cell_set_internal_link: Hk, cell_add_comment: Vk, sheet_set_array_formula: Xk, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
function i4(e) {
  e.preventDefault();
  const t = e.target.closest("tr"), a = document.getElementById("context_menu");
  t && (a.style.top = `${e.clientY}px`, a.style.left = `${e.clientX}px`, a.classList.remove("hidden"), document.getElementById("delete_row").onclick = () => {
    var _a2, _b;
    const n = ((_b = (_a2 = t.children[2]) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || "";
    if (console.log(n), n) {
      const i = Ea.getInstance();
      i.findRowIndexByIsbn(n) !== -1 && (i.deleteSpreadsheet(n), i.renderSpreadsheet());
    }
    a.classList.add("hidden");
  }, document.addEventListener("click", function(n) {
    n.button !== 2 && a.classList.add("hidden");
  }, { once: true }));
}
const Kk = ih({ data: [] }), jk = ["ACCESSION NUMBER", "BOOK NAME", "ISBN NUMBER", "BOOK TYPE", "AUTHOR", "PUBLISHED DATE", "NUM OF PAGES", "IMAGE LINKS", "LANGUAGE"];
const _Ea = class _Ea {
  constructor() {
    __publicField(this, "workbook", null);
    __publicField(this, "worksheet", {});
    __publicField(this, "sheetName", "");
    __publicField(this, "m_jsonSpreadsheet", []);
  }
  createNewSpreadsheet() {
    if (localStorage.getItem("renderSpreadsheet") === "true") {
      ka.spreadsheets.toArray().then((n) => {
        this.workbook = rt.book_new(), this.worksheet = rt.json_to_sheet(n), rt.book_append_sheet(this.workbook, this.worksheet, "Books");
      });
      return;
    }
    this.workbook = rt.book_new();
    const a = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
    window.localStorage.setItem("begin_date", a), this.worksheet = rt.aoa_to_sheet([A0]), rt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = rt.sheet_to_json(this.worksheet, { defval: "N/A" }), localStorage.setItem("renderSpreadsheet", "true");
  }
  static init(r = "") {
    return _Ea.instance = new _Ea(), _Ea.instance.createNewSpreadsheet(), _Ea.instance;
  }
  mapResultToSpreadsheetData(r) {
    const t = {};
    return A0.forEach((a, n) => {
      t[a] = r[n];
    }), t;
  }
  mapToSpreadsheetData(r) {
    return r.map((t) => {
      const a = Object.values(t), n = {};
      return A0.forEach((i, s) => {
        n[i] = a[s] !== void 0 ? a[s] : "";
      }), n;
    });
  }
  async loadWorkbook(r) {
    try {
      const n = await ka.spreadsheets.toArray();
      if (n.length > 0) return console.log(`Loading ${n.length} records from IndexedDB...`), this.workbook = rt.book_new(), this.worksheet = rt.json_to_sheet(n), rt.book_append_sheet(this.workbook, this.worksheet, "Books"), this.m_jsonSpreadsheet = n, console.log("Loaded Existing Data Form Database: ", this.m_jsonSpreadsheet), this.m_jsonSpreadsheet;
    } catch (n) {
      console.error("Error checking IndexedDB:", n);
    }
    const a = await (await fetch(r)).arrayBuffer();
    this.workbook = Gn(a), this.sheetName = this.workbook.SheetNames[0], this.worksheet = this.workbook.Sheets[this.sheetName], this.m_jsonSpreadsheet = rt.sheet_to_json(this.worksheet, { defval: "N/A" });
    try {
      console.log("Storing spreadsheet data to database..."), console.log(this.m_jsonSpreadsheet);
      const n = this.mapToSpreadsheetData(this.m_jsonSpreadsheet);
      console.log("Records to be added to the database: ", n), console.log("Record[0] to be added to the database: ", n[0]), await ka.spreadsheets.add(n[0]), console.log(`Stored ${n.length} records to IndexedDB`);
    } catch (n) {
      console.error("Error loading data to IndexedDB:", n);
    }
    return this.m_jsonSpreadsheet;
  }
  static getInstance() {
    return _Ea.instance || (_Ea.instance = _Ea.init()), _Ea.instance;
  }
  getJsonSpreadsheet() {
    return this.m_jsonSpreadsheet;
  }
  async loadFromDatabase() {
    const r = await ka.spreadsheets.toArray();
    return this.m_jsonSpreadsheet = r, console.log("In Database: ", r), r;
  }
  insertSpreadsheet(r) {
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }
    rt.sheet_add_aoa(this.worksheet, [r], { origin: -1 });
    const t = rt.sheet_to_json(this.worksheet, { defval: "N/A" });
    this.m_jsonSpreadsheet = t, console.log(" Outside Saving new data to IndexedDB...");
    try {
      const a = this.mapToSpreadsheetData([r]);
      console.log("Records to be added to the database: ", a), console.log("Record[0] to be added to the database: ", a[0]), ka.spreadsheets.add(a[0]).then((n) => {
        console.log("Saving new data to IndexedDB..."), console.log("The id save to the database is: ", n);
      }).catch((n) => {
        console.error("cannot save to the database: ", n);
      }), console.log(`Stored ${a.length} records to IndexedDB`);
    } catch (a) {
      console.error("Error saving to IndexedDB:", a);
    }
    return [...t];
  }
  async updateSpreadsheet(r, t) {
    var _a2;
    if (!this.workbook) {
      console.error("Workbook is not loaded yet.");
      return;
    }
    const a = this.findRowIndexByIsbn(r);
    if (a === -1) return;
    console.log("isbn found has rowIndex: ", a);
    const n = a + 1;
    rt.sheet_add_aoa(this.worksheet, [t], { origin: { r: n, c: 0 } });
    const i = rt.sheet_to_json(this.worksheet, { defval: "N/A" });
    this.m_jsonSpreadsheet = i;
    const f = this.mapResultToSpreadsheetData(t);
    console.log("The new row should be: ", t), delete f.isbn, console.log("The newly deleted row should be: ", f);
    const c = ka.spreadsheets.where("isbn").equals(r);
    console.log("Row to be updated: ", c);
    const u = ((_a2 = await c.first()) == null ? void 0 : _a2.accession) || "N/A";
    console.log("Accession retrieved: ", u), f.accession = u, c.modify(f), this.renderSpreadsheet(), this.scrollToView(a);
  }
  updateAccession(r, t = "N/A") {
    if (!this.workbook) return console.error("Workbook is not loaded yet."), "Workbook is not loaded yet.";
    if (t === "") return "Please enter a valid accession number.";
    console.log("jsonSpreadsheet", this.m_jsonSpreadsheet);
    const a = this.findRowIndexByIsbn(r);
    if (a === -1) return;
    console.log("isbn found has rowIndex: ", a);
    const n = a + 1;
    rt.sheet_add_aoa(this.worksheet, [[t]], { origin: { r: n, c: 0 } });
    const i = rt.sheet_to_json(this.worksheet, { defval: "N/A" });
    return this.m_jsonSpreadsheet = i, ka.spreadsheets.where("isbn").equals(r).modify({ accession: t }), this.renderSpreadsheet(), this.scrollToView(a), `Accession number ${t} added for ISBN ${r}.`;
  }
  async deleteSpreadsheet(r) {
    if (!this.workbook) return console.error("Workbook is not loaded yet."), "Workbook is not loaded yet.";
    const t = this.findRowIndexByIsbn(r);
    this.m_jsonSpreadsheet.splice(t, 1), this.worksheet = rt.json_to_sheet(this.m_jsonSpreadsheet);
    const a = await ka.spreadsheets.where("isbn").equals(r).delete();
    console.log("Deleting db: ", a), this.getRowElementByIndex(t);
  }
  renderSpreadsheet() {
    Kk.data = [...this.m_jsonSpreadsheet];
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
      let t = rt.book_new();
      rt.book_append_sheet(t, this.worksheet, "Books"), rt.sheet_add_aoa(this.worksheet, [jk], { origin: 0 });
      const a = window.localStorage.getItem("begin_date") || "", i = (/* @__PURE__ */ new Date()).toDateString().split(" ").join("-");
      Nk(t, a ? "from" + a + " to " + i + "-library_stock.xlsx" : i + "-library_stock.xlsx");
    } else console.error("Workbook is not loaded.");
  }
};
__publicField(_Ea, "instance");
let Ea = _Ea;
export {
  Ea as S,
  ka as d,
  fh as g,
  i4 as h,
  jk as l,
  Kk as s
};
