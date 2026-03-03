import "../chunks/DAC7LG0P.js";
import { aL as Sa, i as Ur, aM as Ea, o as xa, C as Fa, j as Ra, aN as ja, W as Wa, aO as Ia, f as Da, g as ka, Y as Ma, a as Ua, b as Br, Z as Ba, _ as La, s as Va } from "../chunks/BtsFhd5D.js";
import { d as Ha, b as da } from "../chunks/BokTgVeL.js";
import { a as za, f as Na } from "../chunks/DLCqchCO.js";
import { r as Ga } from "../chunks/BpUz2bbF.js";
import { b as Ta } from "../chunks/CxYDYBQw.js";
function qa(m, T, A = T) {
  var B = /* @__PURE__ */ new WeakSet();
  Sa(m, "input", async (p) => {
    var W = p ? m.defaultValue : m.value;
    if (W = pa(m) ? va(W) : W, A(W), Ur !== null && B.add(Ur), await Ea(), W !== (W = T())) {
      var L = m.selectionStart, U = m.selectionEnd, D = m.value.length;
      if (m.value = W ?? "", U !== null) {
        var z = m.value.length;
        L === U && U === D && z > D ? (m.selectionStart = z, m.selectionEnd = z) : (m.selectionStart = L, m.selectionEnd = Math.min(U, z));
      }
    }
  }), (Ra && m.defaultValue !== m.value || xa(T) == null && m.value) && (A(pa(m) ? va(m.value) : m.value), Ur !== null && B.add(Ur)), Fa(() => {
    var p = T();
    if (m === document.activeElement) {
      var W = ja ?? Ur;
      if (B.has(W)) return;
    }
    pa(m) && p === va(m.value) || m.type === "date" && !p && !m.value || p !== m.value && (m.value = p ?? "");
  });
}
function pa(m) {
  var T = m.type;
  return T === "number" || T === "range";
}
function va(m) {
  return m === "" ? null : +m;
}
const be = [["Aztec", "M"], ["Codabar", "L"], ["Code39", "L"], ["Code93", "L"], ["Code128", "L"], ["DataBar", "L"], ["DataBarExpanded", "L"], ["DataMatrix", "M"], ["EAN-8", "L"], ["EAN-13", "L"], ["ITF", "L"], ["MaxiCode", "M"], ["PDF417", "M"], ["QRCode", "M"], ["UPC-A", "L"], ["UPC-E", "L"], ["MicroQRCode", "M"], ["rMQRCode", "M"], ["DXFilmEdge", "L"], ["DataBarLimited", "L"]], Te = be.map(([m]) => m), Qa = Te.filter((m, T) => be[T][1] === "L"), Ya = Te.filter((m, T) => be[T][1] === "M");
function we(m) {
  switch (m) {
    case "Linear-Codes":
      return Qa.reduce((T, A) => T | we(A), 0);
    case "Matrix-Codes":
      return Ya.reduce((T, A) => T | we(A), 0);
    case "Any":
      return (1 << be.length) - 1;
    case "None":
      return 0;
    default:
      return 1 << Te.indexOf(m);
  }
}
function Za(m) {
  if (m === 0) return "None";
  const T = 31 - Math.clz32(m);
  return Te[T];
}
function Ja(m) {
  return m.reduce((T, A) => T | we(A), 0);
}
const Xa = ["LocalAverage", "GlobalHistogram", "FixedThreshold", "BoolCast"];
function Ka(m) {
  return Xa.indexOf(m);
}
const Ca = ["Unknown", "ASCII", "ISO8859_1", "ISO8859_2", "ISO8859_3", "ISO8859_4", "ISO8859_5", "ISO8859_6", "ISO8859_7", "ISO8859_8", "ISO8859_9", "ISO8859_10", "ISO8859_11", "ISO8859_13", "ISO8859_14", "ISO8859_15", "ISO8859_16", "Cp437", "Cp1250", "Cp1251", "Cp1252", "Cp1256", "Shift_JIS", "Big5", "GB2312", "GB18030", "EUC_JP", "EUC_KR", "UTF16BE", "UTF16BE", "UTF8", "UTF16LE", "UTF32BE", "UTF32LE", "BINARY"];
function ti(m) {
  return m === "UnicodeBig" ? Ca.indexOf("UTF16BE") : Ca.indexOf(m);
}
const ri = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
function ei(m) {
  return ri[m];
}
const ni = ["Ignore", "Read", "Require"];
function ai(m) {
  return ni.indexOf(m);
}
const ii = ["Plain", "ECI", "HRI", "Hex", "Escaped"];
function oi(m) {
  return ii.indexOf(m);
}
const $e = { formats: [], tryHarder: true, tryRotate: true, tryInvert: true, tryDownscale: true, tryDenoise: false, binarizer: "LocalAverage", isPure: false, downscaleFactor: 3, downscaleThreshold: 500, minLineCount: 2, maxNumberOfSymbols: 255, tryCode39ExtendedMode: true, returnErrors: false, eanAddOnSymbol: "Ignore", textMode: "HRI", characterSet: "Unknown" };
function Pa(m) {
  return { ...m, formats: Ja(m.formats), binarizer: Ka(m.binarizer), eanAddOnSymbol: ai(m.eanAddOnSymbol), textMode: oi(m.textMode), characterSet: ti(m.characterSet) };
}
function si(m) {
  return { ...m, format: Za(m.format), contentType: ei(m.contentType), eccLevel: m.ecLevel };
}
function _a(m) {
  var T;
  return { ...m, image: (T = m.image && new Blob([new Uint8Array(m.image)], { type: "image/png" })) != null ? T : null };
}
const ma = { format: "QRCode", readerInit: false, forceSquareDataMatrix: false, ecLevel: "", scale: 0, sizeHint: 0, rotate: 0, withHRT: false, withQuietZones: true, options: "" };
function ui(m) {
  return { ...m, format: we(m.format) };
}
const li = { locateFile: (m, T) => {
  const A = m.match(/_(.+?)\.wasm$/);
  return A ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.2.4/dist/${A[1]}/${m}` : T + m;
} }, ya = /* @__PURE__ */ new WeakMap();
function ci(m, T) {
  return Object.is(m, T) || Object.keys(m).length === Object.keys(T).length && Object.keys(m).every((A) => Object.hasOwn(T, A) && m[A] === T[A]);
}
function Oa(m, { overrides: T, equalityFn: A = ci, fireImmediately: B = false } = {}) {
  var p;
  const [W, L] = (p = ya.get(m)) != null ? p : [li], U = T ?? W;
  let D;
  if (B) {
    if (L && (D = A(W, U))) return L;
    const z = m({ ...U });
    return ya.set(m, [U, z]), z;
  }
  (D ?? A(W, U)) || ya.set(m, [U]);
}
async function fi(m, T, A = $e) {
  const B = { ...$e, ...A }, p = await Oa(m, { fireImmediately: true });
  let W, L;
  if ("width" in T && "height" in T && "data" in T) {
    const { data: D, data: { byteLength: z }, width: st, height: St } = T;
    L = p._malloc(z), p.HEAPU8.set(D, L), W = p.readBarcodesFromPixmap(L, st, St, Pa(B));
  } else {
    let D, z;
    if ("buffer" in T) [D, z] = [T.byteLength, T];
    else if ("byteLength" in T) [D, z] = [T.byteLength, new Uint8Array(T)];
    else if ("size" in T) [D, z] = [T.size, new Uint8Array(await T.arrayBuffer())];
    else throw new TypeError("Invalid input type");
    L = p._malloc(D), p.HEAPU8.set(z, L), W = p.readBarcodesFromImage(L, D, Pa(B));
  }
  p._free(L);
  const U = [];
  for (let D = 0; D < W.size(); ++D) U.push(si(W.get(D)));
  return U;
}
async function hi(m, T, A = ma) {
  const B = { ...ma, ...A }, p = ui(B), W = await Oa(m, { fireImmediately: true });
  if (typeof T == "string") return _a(W.writeBarcodeFromText(T, p));
  const { byteLength: L } = T, U = W._malloc(L);
  W.HEAPU8.set(T, U);
  const D = W.writeBarcodeFromBytes(U, L, p);
  return W._free(U), _a(D);
}
({ ...$e, formats: [...$e.formats] });
({ ...ma });
async function di(m = {}) {
  var T, A, B, p = m, W = !!globalThis.window, L = typeof Bun < "u", U = !!globalThis.WorkerGlobalScope;
  !((A = globalThis.process) === null || A === void 0 || (A = A.versions) === null || A === void 0) && A.node && ((B = globalThis.process) === null || B === void 0 ? void 0 : B.type) != "renderer";
  var D = "./this.program", z, st = "";
  function St(e) {
    return p.locateFile ? p.locateFile(e, st) : st + e;
  }
  var Et, yt;
  if (W || U || L) {
    try {
      st = new URL(".", z).href;
    } catch {
    }
    U && (yt = (e) => {
      var n = new XMLHttpRequest();
      return n.open("GET", e, false), n.responseType = "arraybuffer", n.send(null), new Uint8Array(n.response);
    }), Et = async (e) => {
      var n = await fetch(e, { credentials: "same-origin" });
      if (n.ok) return n.arrayBuffer();
      throw new Error(n.status + " : " + n.url);
    };
  }
  var xt = console.log.bind(console), q = console.error.bind(console), at, N = false, X, K, Q, V, J, tt, dt, C, cr, fr, hr = false;
  function dr() {
    var e = qt.buffer;
    Q = new Int8Array(e), J = new Int16Array(e), p.HEAPU8 = V = new Uint8Array(e), tt = new Uint16Array(e), dt = new Int32Array(e), C = new Uint32Array(e), cr = new Float32Array(e), fr = new Float64Array(e);
  }
  function Ce() {
    if (p.preRun) for (typeof p.preRun == "function" && (p.preRun = [p.preRun]); p.preRun.length; ) We(p.preRun.shift());
    pr(yr);
  }
  function Pe() {
    hr = true, Qt.xa();
  }
  function _e() {
    if (p.postRun) for (typeof p.postRun == "function" && (p.postRun = [p.postRun]); p.postRun.length; ) je(p.postRun.shift());
    pr(vr);
  }
  function Dt(e) {
    var n, o;
    (n = p.onAbort) === null || n === void 0 || n.call(p, e), e = "Aborted(" + e + ")", q(e), N = true, e += ". Build with -sASSERTIONS for more info.";
    var u = new WebAssembly.RuntimeError(e);
    throw (o = K) === null || o === void 0 || o(u), u;
  }
  var wt;
  function Ae() {
    return St("zxing_reader.wasm");
  }
  function Oe(e) {
    if (e == wt && at) return new Uint8Array(at);
    if (yt) return yt(e);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Se(e) {
    if (!at) try {
      var n = await Et(e);
      return new Uint8Array(n);
    } catch {
    }
    return Oe(e);
  }
  async function Ee(e, n) {
    try {
      var o = await Se(e), u = await WebAssembly.instantiate(o, n);
      return u;
    } catch (c) {
      q(`failed to asynchronously prepare wasm: ${c}`), Dt(c);
    }
  }
  async function xe(e, n, o) {
    if (!e && WebAssembly.instantiateStreaming) try {
      var u = fetch(n, { credentials: "same-origin" }), c = await WebAssembly.instantiateStreaming(u, o);
      return c;
    } catch (f) {
      q(`wasm streaming compile failed: ${f}`), q("falling back to ArrayBuffer instantiation");
    }
    return Ee(n, o);
  }
  function Fe() {
    var e = { a: he };
    return e;
  }
  async function Re() {
    function e(f, t) {
      return Qt = f.exports, fe(Qt), dr(), Qt;
    }
    function n(f) {
      return e(f.instance);
    }
    var o = Fe();
    if (p.instantiateWasm) return new Promise((f, t) => {
      p.instantiateWasm(o, (r, a) => {
        f(e(r));
      });
    });
    wt != null || (wt = Ae());
    var u = await xe(at, wt, o), c = n(u);
    return c;
  }
  var pr = (e) => {
    for (; e.length > 0; ) e.shift()(p);
  }, vr = [], je = (e) => vr.push(e), yr = [], We = (e) => yr.push(e), $ = (e) => Wr(e), b = () => vt(), $t = [], bt = 0, Ie = (e) => {
    var n = new kt(e);
    return n.get_caught() || (n.set_caught(true), bt--), n.set_rethrown(false), $t.push(n), Ir(e), le(e);
  }, G = 0, De = () => {
    O(0, 0);
    var e = $t.pop();
    ur(e.excPtr), G = 0;
  };
  class kt {
    constructor(n) {
      this.excPtr = n, this.ptr = n - 24;
    }
    set_type(n) {
      C[this.ptr + 4 >> 2] = n;
    }
    get_type() {
      return C[this.ptr + 4 >> 2];
    }
    set_destructor(n) {
      C[this.ptr + 8 >> 2] = n;
    }
    get_destructor() {
      return C[this.ptr + 8 >> 2];
    }
    set_caught(n) {
      n = n ? 1 : 0, Q[this.ptr + 12] = n;
    }
    get_caught() {
      return Q[this.ptr + 12] != 0;
    }
    set_rethrown(n) {
      n = n ? 1 : 0, Q[this.ptr + 13] = n;
    }
    get_rethrown() {
      return Q[this.ptr + 13] != 0;
    }
    init(n, o) {
      this.set_adjusted_ptr(0), this.set_type(n), this.set_destructor(o);
    }
    set_adjusted_ptr(n) {
      C[this.ptr + 16 >> 2] = n;
    }
    get_adjusted_ptr() {
      return C[this.ptr + 16 >> 2];
    }
  }
  var Tt = (e) => ce(e), Mt = (e) => {
    var n = G;
    if (!n) return Tt(0), 0;
    var o = new kt(n);
    o.set_adjusted_ptr(n);
    var u = o.get_type();
    if (!u) return Tt(0), n;
    for (var c of e) {
      if (c === 0 || c === u) break;
      var f = o.ptr + 16;
      if (_(c, u, f)) return Tt(c), n;
    }
    return Tt(u), n;
  }, ke = () => Mt([]), Me = (e) => Mt([e]), Ue = (e, n) => Mt([e, n]), Be = () => {
    var e = $t.pop();
    e || Dt("no exception to throw");
    var n = e.excPtr;
    throw e.get_rethrown() || ($t.push(e), e.set_rethrown(true), e.set_caught(false), bt++), G = n, G;
  }, Le = (e, n, o) => {
    var u = new kt(e);
    throw u.init(n, o), G = e, bt++, G;
  }, Ve = () => bt, He = (e) => {
    throw G || (G = e), G;
  }, Lr = () => Dt(""), Ut = {}, Yt = (e) => {
    for (; e.length; ) {
      var n = e.pop(), o = e.pop();
      o(n);
    }
  };
  function Bt(e) {
    return this.fromWireType(C[e >> 2]);
  }
  var Ft = {}, Ct = {}, Zt = {}, ze = class extends Error {
    constructor(e) {
      super(e), this.name = "InternalError";
    }
  }, Jt = (e) => {
    throw new ze(e);
  }, Pt = (e, n, o) => {
    e.forEach((r) => Zt[r] = n);
    function u(r) {
      var a = o(r);
      a.length !== e.length && Jt("Mismatched type converter count");
      for (var i = 0; i < e.length; ++i) lt(e[i], a[i]);
    }
    var c = new Array(n.length), f = [], t = 0;
    {
      const r = n;
      for (let a = 0; a < r.length; ++a) {
        const i = r[a];
        Ct.hasOwnProperty(i) ? c[a] = Ct[i] : (f.push(i), Ft.hasOwnProperty(i) || (Ft[i] = []), Ft[i].push(() => {
          c[a] = Ct[i], ++t, t === f.length && u(c);
        }));
      }
    }
    f.length === 0 && u(c);
  }, Xt = (e) => {
    var n = Ut[e];
    delete Ut[e];
    var o = n.rawConstructor, u = n.rawDestructor, c = n.fields, f = c.map((t) => t.getterReturnType).concat(c.map((t) => t.setterArgumentType));
    Pt([e], f, (t) => {
      var r = {};
      {
        const a = c;
        for (let i = 0; i < a.length; ++i) {
          const s = a[i], l = t[i], h = s.getter, d = s.getterContext, v = t[i + c.length], y = s.setter, g = s.setterContext;
          r[s.fieldName] = { read: (w) => l.fromWireType(h(d, w)), write: (w, F) => {
            var P = [];
            y(g, w, v.toWireType(P, F)), Yt(P);
          }, optional: l.optional };
        }
      }
      return [{ name: n.name, fromWireType: (a) => {
        var i = {};
        for (var s in r) i[s] = r[s].read(a);
        return u(a), i;
      }, toWireType: (a, i) => {
        for (var s in r) if (!(s in i) && !r[s].optional) throw new TypeError(`Missing field: "${s}"`);
        var l = o();
        for (s in r) r[s].write(l, i[s]);
        return a !== null && a.push(u, l), l;
      }, readValueFromPointer: Bt, destructorFunction: u }];
    });
  }, mr = (e, n, o, u, c) => {
  }, H = (e) => {
    for (var n = ""; ; ) {
      var o = V[e++];
      if (!o) return n;
      n += String.fromCharCode(o);
    }
  }, ut = class extends Error {
    constructor(e) {
      super(e), this.name = "BindingError";
    }
  }, S = (e) => {
    throw new ut(e);
  };
  function Kt(e, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var u = n.name;
    if (e || S(`type "${u}" must have a positive integer typeid pointer`), Ct.hasOwnProperty(e)) {
      if (o.ignoreDuplicateRegistrations) return;
      S(`Cannot register type '${u}' twice`);
    }
    if (Ct[e] = n, delete Zt[e], Ft.hasOwnProperty(e)) {
      var c = Ft[e];
      delete Ft[e], c.forEach((f) => f());
    }
  }
  function lt(e, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Kt(e, n, o);
  }
  var tr = (e, n, o, u) => {
    n = H(n), lt(e, { name: n, fromWireType: function(c) {
      return !!c;
    }, toWireType: function(c, f) {
      return f ? o : u;
    }, readValueFromPointer: function(c) {
      return this.fromWireType(V[c]);
    }, destructorFunction: null });
  }, _t = (e) => ({ count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType }), gr = (e) => {
    function n(o) {
      return o.$$.ptrType.registeredClass.name;
    }
    S(n(e) + " instance already deleted");
  }, wr = false, Y = (e) => {
  }, Lt = (e) => {
    e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
  }, R = (e) => {
    e.count.value -= 1;
    var n = e.count.value === 0;
    n && Lt(e);
  }, Vt = (e) => globalThis.FinalizationRegistry ? (wr = new FinalizationRegistry((n) => {
    R(n.$$);
  }), Vt = (n) => {
    var o = n.$$, u = !!o.smartPtr;
    if (u) {
      var c = { $$: o };
      wr.register(n, c, n);
    }
    return n;
  }, Y = (n) => wr.unregister(n), Vt(e)) : (Vt = (n) => n, e), ct = () => {
    let e = rr.prototype;
    Object.assign(e, { isAliasOf(o) {
      if (!(this instanceof rr) || !(o instanceof rr)) return false;
      var u = this.$$.ptrType.registeredClass, c = this.$$.ptr;
      o.$$ = o.$$;
      for (var f = o.$$.ptrType.registeredClass, t = o.$$.ptr; u.baseClass; ) c = u.upcast(c), u = u.baseClass;
      for (; f.baseClass; ) t = f.upcast(t), f = f.baseClass;
      return u === f && c === t;
    }, clone() {
      if (this.$$.ptr || gr(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
      var o = Vt(Object.create(Object.getPrototypeOf(this), { $$: { value: _t(this.$$) } }));
      return o.$$.count.value += 1, o.$$.deleteScheduled = false, o;
    }, delete() {
      this.$$.ptr || gr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && S("Object already scheduled for deletion"), Y(this), R(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || gr(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && S("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
    } });
    const n = Symbol.dispose;
    n && (e[n] = e.delete);
  };
  function rr() {
  }
  var $r = (e, n) => Object.defineProperty(n, "name", { value: e }), er = {}, nr = (e, n, o) => {
    if (e[n].overloadTable === void 0) {
      var u = e[n];
      e[n] = function() {
        for (var c = arguments.length, f = new Array(c), t = 0; t < c; t++) f[t] = arguments[t];
        return e[n].overloadTable.hasOwnProperty(f.length) || S(`Function '${o}' called with an invalid number of arguments (${f.length}) - expects one of (${e[n].overloadTable})!`), e[n].overloadTable[f.length].apply(this, f);
      }, e[n].overloadTable = [], e[n].overloadTable[u.argCount] = u;
    }
  }, br = (e, n, o) => {
    p.hasOwnProperty(e) ? ((o === void 0 || p[e].overloadTable !== void 0 && p[e].overloadTable[o] !== void 0) && S(`Cannot register public name '${e}' twice`), nr(p, e, e), p[e].overloadTable.hasOwnProperty(o) && S(`Cannot register multiple overloads of a function with the same number of arguments (${o})!`), p[e].overloadTable[o] = n) : (p[e] = n, p[e].argCount = o);
  }, Ne = 48, Vr = 57, Ht = (e) => {
    e = e.replace(/[^a-zA-Z0-9_]/g, "$");
    var n = e.charCodeAt(0);
    return n >= Ne && n <= Vr ? `_${e}` : e;
  };
  function Ge(e, n, o, u, c, f, t, r) {
    this.name = e, this.constructor = n, this.instancePrototype = o, this.rawDestructor = u, this.baseClass = c, this.getActualType = f, this.upcast = t, this.downcast = r, this.pureVirtualFunctions = [];
  }
  var Rt = (e, n, o) => {
    for (; n !== o; ) n.upcast || S(`Expected null or instance of ${o.name}, got an instance of ${n.name}`), e = n.upcast(e), n = n.baseClass;
    return e;
  }, zt = (e) => {
    if (e === null) return "null";
    var n = typeof e;
    return n === "object" || n === "array" || n === "function" ? e.toString() : "" + e;
  };
  function Hr(e, n) {
    if (n === null) return this.isReference && S(`null is not a valid ${this.name}`), 0;
    n.$$ || S(`Cannot pass "${zt(n)}" as a ${this.name}`), n.$$.ptr || S(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var o = n.$$.ptrType.registeredClass, u = Rt(n.$$.ptr, o, this.registeredClass);
    return u;
  }
  function zr(e, n) {
    var o;
    if (n === null) return this.isReference && S(`null is not a valid ${this.name}`), this.isSmartPointer ? (o = this.rawConstructor(), e !== null && e.push(this.rawDestructor, o), o) : 0;
    (!n || !n.$$) && S(`Cannot pass "${zt(n)}" as a ${this.name}`), n.$$.ptr || S(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && n.$$.ptrType.isConst && S(`Cannot convert argument of type ${n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name} to parameter type ${this.name}`);
    var u = n.$$.ptrType.registeredClass;
    if (o = Rt(n.$$.ptr, u, this.registeredClass), this.isSmartPointer) switch (n.$$.smartPtr === void 0 && S("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        n.$$.smartPtrType === this ? o = n.$$.smartPtr : S(`Cannot convert argument of type ${n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        o = n.$$.smartPtr;
        break;
      case 2:
        if (n.$$.smartPtrType === this) o = n.$$.smartPtr;
        else {
          var c = n.clone();
          o = this.rawShare(o, et.toHandle(() => c.delete())), e !== null && e.push(this.rawDestructor, o);
        }
        break;
      default:
        S("Unsupporting sharing policy");
    }
    return o;
  }
  function Nr(e, n) {
    if (n === null) return this.isReference && S(`null is not a valid ${this.name}`), 0;
    n.$$ || S(`Cannot pass "${zt(n)}" as a ${this.name}`), n.$$.ptr || S(`Cannot pass deleted object as a pointer of type ${this.name}`), n.$$.ptrType.isConst && S(`Cannot convert argument of type ${n.$$.ptrType.name} to parameter type ${this.name}`);
    var o = n.$$.ptrType.registeredClass, u = Rt(n.$$.ptr, o, this.registeredClass);
    return u;
  }
  var Gr = (e, n, o) => {
    if (n === o) return e;
    if (o.baseClass === void 0) return null;
    var u = Gr(e, n, o.baseClass);
    return u === null ? null : o.downcast(u);
  }, qe = {}, Qe = (e, n) => {
    for (n === void 0 && S("ptr should not be undefined"); e.baseClass; ) n = e.upcast(n), e = e.baseClass;
    return n;
  }, Ye = (e, n) => (n = Qe(e, n), qe[n]), jt = (e, n) => {
    (!n.ptrType || !n.ptr) && Jt("makeClassHandle requires ptr and ptrType");
    var o = !!n.smartPtrType, u = !!n.smartPtr;
    return o !== u && Jt("Both smartPtrType and smartPtr must be specified"), n.count = { value: 1 }, Vt(Object.create(e, { $$: { value: n, writable: true } }));
  };
  function Tr(e) {
    var n = this.getPointee(e);
    if (!n) return this.destructor(e), null;
    var o = Ye(this.registeredClass, n);
    if (o !== void 0) {
      if (o.$$.count.value === 0) return o.$$.ptr = n, o.$$.smartPtr = e, o.clone();
      var u = o.clone();
      return this.destructor(e), u;
    }
    function c() {
      return this.isSmartPointer ? jt(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: n, smartPtrType: this, smartPtr: e }) : jt(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
    }
    var f = this.registeredClass.getActualType(n), t = er[f];
    if (!t) return c.call(this);
    var r;
    this.isConst ? r = t.constPointerType : r = t.pointerType;
    var a = Gr(n, this.registeredClass, r.registeredClass);
    return a === null ? c.call(this) : this.isSmartPointer ? jt(r.registeredClass.instancePrototype, { ptrType: r, ptr: a, smartPtrType: this, smartPtr: e }) : jt(r.registeredClass.instancePrototype, { ptrType: r, ptr: a });
  }
  var Ze = () => {
    Object.assign(ar.prototype, { getPointee(e) {
      return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
    }, destructor(e) {
      var n;
      (n = this.rawDestructor) === null || n === void 0 || n.call(this, e);
    }, readValueFromPointer: Bt, fromWireType: Tr });
  };
  function ar(e, n, o, u, c, f, t, r, a, i, s) {
    this.name = e, this.registeredClass = n, this.isReference = o, this.isConst = u, this.isSmartPointer = c, this.pointeeType = f, this.sharingPolicy = t, this.rawGetPointee = r, this.rawConstructor = a, this.rawShare = i, this.rawDestructor = s, !c && n.baseClass === void 0 ? u ? (this.toWireType = Hr, this.destructorFunction = null) : (this.toWireType = Nr, this.destructorFunction = null) : this.toWireType = zr;
  }
  var qr = (e, n, o) => {
    p.hasOwnProperty(e) || Jt("Replacing nonexistent public symbol"), p[e].overloadTable !== void 0 && o !== void 0 ? p[e].overloadTable[o] = n : (p[e] = n, p[e].argCount = o);
  }, pt = {}, Je = (e, n, o) => {
    e = e.replace(/p/g, "i");
    var u = pt[e];
    return u(n, ...o);
  }, Qr = [], E = (e) => {
    var n = Qr[e];
    return n || (Qr[e] = n = Mr.get(e)), n;
  }, ir = function(e, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (e.includes("j")) return Je(e, n, o);
    var u = E(n), c = u(...o);
    return c;
  }, Xe = function(e, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return function() {
      for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
      return ir(e, n, c, o);
    };
  }, it = function(e, n) {
    e = H(e);
    function o() {
      if (e.includes("j")) return Xe(e, n);
      var c = E(n);
      return c;
    }
    var u = o();
    return typeof u != "function" && S(`unknown function pointer with signature ${e}: ${n}`), u;
  };
  class or extends Error {
  }
  var Cr = (e) => {
    var n = ue(e), o = H(n);
    return mt(n), o;
  }, ot = (e, n) => {
    var o = [], u = {};
    function c(f) {
      if (!u[f] && !Ct[f]) {
        if (Zt[f]) {
          Zt[f].forEach(c);
          return;
        }
        o.push(f), u[f] = true;
      }
    }
    throw n.forEach(c), new or(`${e}: ` + o.map(Cr).join([", "]));
  }, Ke = (e, n, o, u, c, f, t, r, a, i, s, l, h) => {
    s = H(s), f = it(c, f), r && (r = it(t, r)), i && (i = it(a, i)), h = it(l, h);
    var d = Ht(s);
    br(d, function() {
      ot(`Cannot construct ${s} due to unbound types`, [u]);
    }), Pt([e, n, o], u ? [u] : [], (v) => {
      v = v[0];
      var y, g;
      u ? (y = v.registeredClass, g = y.instancePrototype) : g = rr.prototype;
      var w = $r(s, function() {
        if (Object.getPrototypeOf(this) !== F) throw new ut(`Use 'new' to construct ${s}`);
        if (P.constructor_body === void 0) throw new ut(`${s} has no accessible constructor`);
        for (var Z = arguments.length, nt = new Array(Z), Ot = 0; Ot < Z; Ot++) nt[Ot] = arguments[Ot];
        var ye = P.constructor_body[nt.length];
        if (ye === void 0) throw new ut(`Tried to invoke ctor of ${s} with invalid number of parameters (${nt.length}) - expected (${Object.keys(P.constructor_body).toString()}) parameters instead!`);
        return ye.apply(this, nt);
      }), F = Object.create(g, { constructor: { value: w } });
      w.prototype = F;
      var P = new Ge(s, w, F, h, y, f, r, i);
      if (P.baseClass) {
        var j, k;
        (k = (j = P.baseClass).__derivedClasses) !== null && k !== void 0 || (j.__derivedClasses = []), P.baseClass.__derivedClasses.push(P);
      }
      var M = new ar(s, P, true, false, false), I = new ar(s + "*", P, false, false, false), gt = new ar(s + " const*", P, false, true, false);
      return er[e] = { pointerType: I, constPointerType: gt }, qr(d, w), [M, I, gt];
    });
  }, sr = (e, n) => {
    for (var o = [], u = 0; u < e; u++) o.push(C[n + u * 4 >> 2]);
    return o;
  };
  function x(e) {
    for (var n = 1; n < e.length; ++n) if (e[n] !== null && e[n].destructorFunction === void 0) return true;
    return false;
  }
  function Pr(e, n, o, u, c, f) {
    var t = n.length;
    t < 2 && S("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var r = n[1] !== null && o !== null, a = x(n), i = !n[0].isVoid, s = t - 2, l = new Array(s), h = [], d = [], v = function() {
      d.length = 0;
      var y;
      h.length = r ? 2 : 1, h[0] = c, r && (y = n[1].toWireType(d, this), h[1] = y);
      for (var g = 0; g < s; ++g) l[g] = n[g + 2].toWireType(d, g < 0 || arguments.length <= g ? void 0 : arguments[g]), h.push(l[g]);
      var w = u(...h);
      function F(P) {
        if (a) Yt(d);
        else for (var j = r ? 1 : 2; j < n.length; j++) {
          var k = j === 1 ? y : l[j - 2];
          n[j].destructorFunction !== null && n[j].destructorFunction(k);
        }
        if (i) return n[0].fromWireType(P);
      }
      return F(w);
    };
    return $r(e, v);
  }
  var tn = (e, n, o, u, c, f) => {
    var t = sr(n, o);
    c = it(u, c), Pt([], [e], (r) => {
      r = r[0];
      var a = `constructor ${r.name}`;
      if (r.registeredClass.constructor_body === void 0 && (r.registeredClass.constructor_body = []), r.registeredClass.constructor_body[n - 1] !== void 0) throw new ut(`Cannot register multiple constructors with identical number of parameters (${n - 1}) for class '${r.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return r.registeredClass.constructor_body[n - 1] = () => {
        ot(`Cannot construct ${r.name} due to unbound types`, t);
      }, Pt([], t, (i) => (i.splice(1, 0, null), r.registeredClass.constructor_body[n - 1] = Pr(a, i, null, c, f), [])), [];
    });
  }, rt = (e) => {
    e = e.trim();
    const n = e.indexOf("(");
    return n === -1 ? e : e.slice(0, n);
  }, rn = (e, n, o, u, c, f, t, r, a, i) => {
    var s = sr(o, u);
    n = H(n), n = rt(n), f = it(c, f), Pt([], [e], (l) => {
      l = l[0];
      var h = `${l.name}.${n}`;
      n.startsWith("@@") && (n = Symbol[n.substring(2)]), r && l.registeredClass.pureVirtualFunctions.push(n);
      function d() {
        ot(`Cannot call ${h} due to unbound types`, s);
      }
      var v = l.registeredClass.instancePrototype, y = v[n];
      return y === void 0 || y.overloadTable === void 0 && y.className !== l.name && y.argCount === o - 2 ? (d.argCount = o - 2, d.className = l.name, v[n] = d) : (nr(v, n, h), v[n].overloadTable[o - 2] = d), Pt([], s, (g) => {
        var w = Pr(h, g, l, f, t);
        return v[n].overloadTable === void 0 ? (w.argCount = o - 2, v[n] = w) : v[n].overloadTable[o - 2] = w, [];
      }), [];
    });
  }, _r = [], ft = [0, 1, , 1, null, 1, true, 1, false, 1], Ar = (e) => {
    e > 9 && --ft[e + 1] === 0 && (ft[e] = void 0, _r.push(e));
  }, et = { toValue: (e) => (e || S(`Cannot use deleted val. handle = ${e}`), ft[e]), toHandle: (e) => {
    switch (e) {
      case void 0:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default: {
        const n = _r.pop() || ft.length;
        return ft[n] = e, ft[n + 1] = 1, n;
      }
    }
  } }, Yr = { name: "emscripten::val", fromWireType: (e) => {
    var n = et.toValue(e);
    return Ar(e), n;
  }, toWireType: (e, n) => et.toHandle(n), readValueFromPointer: Bt, destructorFunction: null }, Or = (e) => lt(e, Yr), en = (e, n) => {
    switch (n) {
      case 4:
        return function(o) {
          return this.fromWireType(cr[o >> 2]);
        };
      case 8:
        return function(o) {
          return this.fromWireType(fr[o >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${n}): ${e}`);
    }
  }, Zr = (e, n, o) => {
    n = H(n), lt(e, { name: n, fromWireType: (u) => u, toWireType: (u, c) => c, readValueFromPointer: en(n, o), destructorFunction: null });
  }, nn = (e, n, o, u, c, f, t, r) => {
    var a = sr(n, o);
    e = H(e), e = rt(e), c = it(u, c), br(e, function() {
      ot(`Cannot call ${e} due to unbound types`, a);
    }, n - 1), Pt([], a, (i) => {
      var s = [i[0], null].concat(i.slice(1));
      return qr(e, Pr(e, s, null, c, f), n - 1), [];
    });
  }, Jr = (e, n, o) => {
    switch (n) {
      case 1:
        return o ? (u) => Q[u] : (u) => V[u];
      case 2:
        return o ? (u) => J[u >> 1] : (u) => tt[u >> 1];
      case 4:
        return o ? (u) => dt[u >> 2] : (u) => C[u >> 2];
      default:
        throw new TypeError(`invalid integer width (${n}): ${e}`);
    }
  }, At = (e, n, o, u, c) => {
    n = H(n);
    const f = u === 0;
    let t = (a) => a;
    if (f) {
      var r = 32 - 8 * o;
      t = (a) => a << r >>> r, c = t(c);
    }
    lt(e, { name: n, fromWireType: t, toWireType: (a, i) => i, readValueFromPointer: Jr(n, o, u !== 0), destructorFunction: null });
  }, Sr = (e, n, o) => {
    var u = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], c = u[n];
    function f(t) {
      var r = C[t >> 2], a = C[t + 4 >> 2];
      return new c(Q.buffer, a, r);
    }
    o = H(o), lt(e, { name: o, fromWireType: f, readValueFromPointer: f }, { ignoreDuplicateRegistrations: true });
  }, ht = Object.assign({ optional: true }, Yr), Xr = (e, n) => {
    lt(e, ht);
  }, an = (e, n, o, u) => {
    if (!(u > 0)) return 0;
    for (var c = o, f = o + u - 1, t = 0; t < e.length; ++t) {
      var r = e.codePointAt(t);
      if (r <= 127) {
        if (o >= f) break;
        n[o++] = r;
      } else if (r <= 2047) {
        if (o + 1 >= f) break;
        n[o++] = 192 | r >> 6, n[o++] = 128 | r & 63;
      } else if (r <= 65535) {
        if (o + 2 >= f) break;
        n[o++] = 224 | r >> 12, n[o++] = 128 | r >> 6 & 63, n[o++] = 128 | r & 63;
      } else {
        if (o + 3 >= f) break;
        n[o++] = 240 | r >> 18, n[o++] = 128 | r >> 12 & 63, n[o++] = 128 | r >> 6 & 63, n[o++] = 128 | r & 63, t++;
      }
    }
    return n[o] = 0, o - c;
  }, Wt = (e, n, o) => an(e, V, n, o), Kr = (e) => {
    for (var n = 0, o = 0; o < e.length; ++o) {
      var u = e.charCodeAt(o);
      u <= 127 ? n++ : u <= 2047 ? n += 2 : u >= 55296 && u <= 57343 ? (n += 4, ++o) : n += 3;
    }
    return n;
  }, te = globalThis.TextDecoder && new TextDecoder(), re = (e, n, o, u) => {
    var c = n + o;
    if (u) return c;
    for (; e[n] && !(n >= c); ) ++n;
    return n;
  }, ee = function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = arguments.length > 2 ? arguments[2] : void 0, u = arguments.length > 3 ? arguments[3] : void 0;
    var c = re(e, n, o, u);
    if (c - n > 16 && e.buffer && te) return te.decode(e.subarray(n, c));
    for (var f = ""; n < c; ) {
      var t = e[n++];
      if (!(t & 128)) {
        f += String.fromCharCode(t);
        continue;
      }
      var r = e[n++] & 63;
      if ((t & 224) == 192) {
        f += String.fromCharCode((t & 31) << 6 | r);
        continue;
      }
      var a = e[n++] & 63;
      if ((t & 240) == 224 ? t = (t & 15) << 12 | r << 6 | a : t = (t & 7) << 18 | r << 12 | a << 6 | e[n++] & 63, t < 65536) f += String.fromCharCode(t);
      else {
        var i = t - 65536;
        f += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023);
      }
    }
    return f;
  }, on = (e, n, o) => e ? ee(V, e, n, o) : "", sn = (e, n) => {
    n = H(n), lt(e, { name: n, fromWireType(o) {
      var u = C[o >> 2], c = o + 4, f;
      return f = on(c, u, true), mt(o), f;
    }, toWireType(o, u) {
      u instanceof ArrayBuffer && (u = new Uint8Array(u));
      var c, f = typeof u == "string";
      f || ArrayBuffer.isView(u) && u.BYTES_PER_ELEMENT == 1 || S("Cannot pass non-string to std::string"), f ? c = Kr(u) : c = u.length;
      var t = jr(4 + c + 1), r = t + 4;
      return C[t >> 2] = c, f ? Wt(u, r, c + 1) : V.set(u, r), o !== null && o.push(mt, t), t;
    }, readValueFromPointer: Bt, destructorFunction(o) {
      mt(o);
    } });
  }, ne = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, un = (e, n, o) => {
    var u = e >> 1, c = re(tt, u, n / 2, o);
    if (c - u > 16 && ne) return ne.decode(tt.subarray(u, c));
    for (var f = "", t = u; t < c; ++t) {
      var r = tt[t];
      f += String.fromCharCode(r);
    }
    return f;
  }, It = (e, n, o) => {
    if (o != null || (o = 2147483647), o < 2) return 0;
    o -= 2;
    for (var u = n, c = o < e.length * 2 ? o / 2 : e.length, f = 0; f < c; ++f) {
      var t = e.charCodeAt(f);
      J[n >> 1] = t, n += 2;
    }
    return J[n >> 1] = 0, n - u;
  }, ae = (e) => e.length * 2, ln = (e, n, o) => {
    for (var u = "", c = e >> 2, f = 0; !(f >= n / 4); f++) {
      var t = C[c + f];
      if (!t && !o) break;
      u += String.fromCodePoint(t);
    }
    return u;
  }, ie = (e, n, o) => {
    if (o != null || (o = 2147483647), o < 4) return 0;
    for (var u = n, c = u + o - 4, f = 0; f < e.length; ++f) {
      var t = e.codePointAt(f);
      if (t > 65535 && f++, dt[n >> 2] = t, n += 4, n + 4 > c) break;
    }
    return dt[n >> 2] = 0, n - u;
  }, cn = (e) => {
    for (var n = 0, o = 0; o < e.length; ++o) {
      var u = e.codePointAt(o);
      u > 65535 && o++, n += 4;
    }
    return n;
  }, fn = (e, n, o) => {
    o = H(o);
    var u, c, f;
    n === 2 ? (u = un, c = It, f = ae) : (u = ln, c = ie, f = cn), lt(e, { name: o, fromWireType: (t) => {
      var r = C[t >> 2], a = u(t + 4, r * n, true);
      return mt(t), a;
    }, toWireType: (t, r) => {
      typeof r != "string" && S(`Cannot pass non-string to C++ string type ${o}`);
      var a = f(r), i = jr(4 + a + n);
      return C[i >> 2] = a / n, c(r, i + 4, a + n), t !== null && t.push(mt, i), i;
    }, readValueFromPointer: Bt, destructorFunction(t) {
      mt(t);
    } });
  }, hn = (e, n, o, u, c, f) => {
    Ut[e] = { name: H(n), rawConstructor: it(o, u), rawDestructor: it(c, f), fields: [] };
  }, dn = (e, n, o, u, c, f, t, r, a, i) => {
    Ut[e].fields.push({ fieldName: H(n), getterReturnType: o, getter: it(u, c), getterContext: f, setterArgumentType: t, setter: it(r, a), setterContext: i });
  }, pn = (e, n) => {
    n = H(n), lt(e, { isVoid: true, name: n, fromWireType: () => {
    }, toWireType: (o, u) => {
    } });
  }, Er = [], vn = (e) => {
    var n = Er.length;
    return Er.push(e), n;
  }, yn = (e, n) => {
    var o = Ct[e];
    return o === void 0 && S(`${n} has unknown type ${Cr(e)}`), o;
  }, mn = (e, n) => {
    for (var o = new Array(e), u = 0; u < e; ++u) o[u] = yn(C[n + u * 4 >> 2], `parameter ${u}`);
    return o;
  }, gn = (e, n, o) => {
    var u = [], c = e(u, o);
    return u.length && (C[n >> 2] = et.toHandle(u)), c;
  }, xr = {}, oe = (e) => {
    var n = xr[e];
    return n === void 0 ? H(e) : n;
  }, wn = (e, n, o) => {
    var u = 8, [c, ...f] = mn(e, n), t = c.toWireType.bind(c), r = f.map((l) => l.readValueFromPointer.bind(l));
    e--;
    var a = new Array(e), i = (l, h, d, v) => {
      for (var y = 0, g = 0; g < e; ++g) a[g] = r[g](v + y), y += u;
      var w;
      switch (o) {
        case 0:
          w = et.toValue(l).apply(null, a);
          break;
        case 2:
          w = Reflect.construct(et.toValue(l), a);
          break;
        case 3:
          w = a[0];
          break;
        case 1:
          w = et.toValue(l)[oe(h)](...a);
          break;
      }
      return gn(t, d, w);
    }, s = `methodCaller<(${f.map((l) => l.name)}) => ${c.name}>`;
    return vn($r(s, i));
  }, $n = (e) => e ? (e = oe(e), et.toHandle(globalThis[e])) : et.toHandle(globalThis), bn = (e) => {
    e > 9 && (ft[e + 1] += 1);
  }, Tn = (e, n, o, u, c) => Er[e](n, o, u, c), se = (e) => {
    var n = et.toValue(e);
    Yt(n), Ar(e);
  }, Cn = (e, n, o, u) => {
    var c = (/* @__PURE__ */ new Date()).getFullYear(), f = new Date(c, 0, 1), t = new Date(c, 6, 1), r = f.getTimezoneOffset(), a = t.getTimezoneOffset(), i = Math.max(r, a);
    C[e >> 2] = i * 60, dt[n >> 2] = +(r != a);
    var s = (d) => {
      var v = d >= 0 ? "-" : "+", y = Math.abs(d), g = String(Math.floor(y / 60)).padStart(2, "0"), w = String(y % 60).padStart(2, "0");
      return `UTC${v}${g}${w}`;
    }, l = s(r), h = s(a);
    a < r ? (Wt(l, o, 17), Wt(h, u, 17)) : (Wt(l, u, 17), Wt(h, o, 17));
  }, Pn = () => 2147483648, _n = (e, n) => Math.ceil(e / n) * n, An = (e) => {
    var n = qt.buffer.byteLength, o = (e - n + 65535) / 65536 | 0;
    try {
      return qt.grow(o), dr(), 1;
    } catch {
    }
  }, On = (e) => {
    var n = V.length;
    e >>>= 0;
    var o = Pn();
    if (e > o) return false;
    for (var u = 1; u <= 4; u *= 2) {
      var c = n * (1 + 0.2 / u);
      c = Math.min(c, e + 100663296);
      var f = Math.min(o, _n(Math.max(e, c), 65536)), t = An(f);
      if (t) return true;
    }
    return false;
  }, Fr = {}, Sn = () => D || "./this.program", Nt = () => {
    if (!Nt.strings) {
      var e = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", n = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: Sn() };
      for (var o in Fr) Fr[o] === void 0 ? delete n[o] : n[o] = Fr[o];
      var u = [];
      for (var o in n) u.push(`${o}=${n[o]}`);
      Nt.strings = u;
    }
    return Nt.strings;
  }, En = (e, n) => {
    var o = 0, u = 0;
    for (var c of Nt()) {
      var f = n + o;
      C[e + u >> 2] = f, o += Wt(c, f, 1 / 0) + 1, u += 4;
    }
    return 0;
  }, xn = (e, n) => {
    var o = Nt();
    C[e >> 2] = o.length;
    var u = 0;
    for (var c of o) u += Kr(c) + 1;
    return C[n >> 2] = u, 0;
  }, Rr = (e) => 52;
  function Fn(e, n, o, u, c) {
    return 70;
  }
  var Gt = [null, [], []], Rn = (e, n) => {
    var o = Gt[e];
    n === 0 || n === 10 ? ((e === 1 ? xt : q)(ee(o)), o.length = 0) : o.push(n);
  }, jn = (e, n, o, u) => {
    for (var c = 0, f = 0; f < o; f++) {
      var t = C[n >> 2], r = C[n + 4 >> 2];
      n += 8;
      for (var a = 0; a < r; a++) Rn(e, V[t + a]);
      c += r;
    }
    return C[u >> 2] = c, 0;
  }, Wn = (e) => e;
  if (ct(), Ze(), p.noExitRuntime && p.noExitRuntime, p.print && (xt = p.print), p.printErr && (q = p.printErr), p.wasmBinary && (at = p.wasmBinary), p.arguments && p.arguments, p.thisProgram && (D = p.thisProgram), p.preInit) for (typeof p.preInit == "function" && (p.preInit = [p.preInit]); p.preInit.length > 0; ) p.preInit.shift()();
  var ue, mt, jr, le, O, ce, Wr, vt, ur, Ir, _, Dr, kr, qt, Mr;
  function fe(e) {
    ue = e.ya, mt = p._free = e.za, jr = p._malloc = e.Ba, le = e.Ca, O = e.Da, ce = e.Ea, Wr = e.Fa, vt = e.Ga, ur = e.Ha, Ir = e.Ia, _ = e.Ja, pt.viijii = e.Ka, Dr = pt.iiijj = e.La, pt.jiji = e.Ma, kr = pt.jiiii = e.Na, pt.iiiiij = e.Oa, pt.iiiiijj = e.Pa, pt.iiiiiijj = e.Qa, qt = e.wa, Mr = e.Aa;
  }
  var he = { s: Ie, w: De, a: ke, j: Me, m: Ue, Q: Be, p: Le, U: Ve, d: He, ca: Lr, ta: Xt, ba: mr, oa: tr, ra: Ke, qa: tn, H: rn, ma: Or, X: Zr, Y: nn, x: At, t: Sr, sa: Xr, na: sn, R: fn, I: hn, ua: dn, pa: pn, N: wn, va: Ar, D: $n, S: bn, M: Tn, ia: se, da: Cn, ga: On, ea: En, fa: xn, ha: Rr, $: Fn, V: jn, K: Kn, C: ea, Z: kn, T: ua, r: Yn, b: In, E: Xn, ka: aa, c: Mn, ja: ia, h: Dn, i: Ln, q: Nn, P: Jn, v: qn, F: Qn, L: Zn, z: na, J: la, aa: ca, _: fa, f: Un, l: de, e: ve, g: lr, O: sa, k: pe, la: ta, o: Gn, B: Vn, u: ra, W: zn, A: oa, n: Bn, G: Hn, y: Wn };
  function de(e, n) {
    var o = b();
    try {
      E(e)(n);
    } catch (u) {
      if ($(o), u !== u + 0) throw u;
      O(1, 0);
    }
  }
  function pe(e, n, o, u, c) {
    var f = b();
    try {
      E(e)(n, o, u, c);
    } catch (t) {
      if ($(f), t !== t + 0) throw t;
      O(1, 0);
    }
  }
  function lr(e, n, o, u) {
    var c = b();
    try {
      E(e)(n, o, u);
    } catch (f) {
      if ($(c), f !== f + 0) throw f;
      O(1, 0);
    }
  }
  function ve(e, n, o) {
    var u = b();
    try {
      E(e)(n, o);
    } catch (c) {
      if ($(u), c !== c + 0) throw c;
      O(1, 0);
    }
  }
  function In(e, n) {
    var o = b();
    try {
      return E(e)(n);
    } catch (u) {
      if ($(o), u !== u + 0) throw u;
      O(1, 0);
    }
  }
  function Dn(e, n, o, u) {
    var c = b();
    try {
      return E(e)(n, o, u);
    } catch (f) {
      if ($(c), f !== f + 0) throw f;
      O(1, 0);
    }
  }
  function kn(e, n, o, u, c, f) {
    var t = b();
    try {
      return E(e)(n, o, u, c, f);
    } catch (r) {
      if ($(t), r !== r + 0) throw r;
      O(1, 0);
    }
  }
  function Mn(e, n, o) {
    var u = b();
    try {
      return E(e)(n, o);
    } catch (c) {
      if ($(u), c !== c + 0) throw c;
      O(1, 0);
    }
  }
  function Un(e) {
    var n = b();
    try {
      E(e)();
    } catch (o) {
      if ($(n), o !== o + 0) throw o;
      O(1, 0);
    }
  }
  function Bn(e, n, o, u, c, f, t, r, a, i, s) {
    var l = b();
    try {
      E(e)(n, o, u, c, f, t, r, a, i, s);
    } catch (h) {
      if ($(l), h !== h + 0) throw h;
      O(1, 0);
    }
  }
  function Ln(e, n, o, u, c) {
    var f = b();
    try {
      return E(e)(n, o, u, c);
    } catch (t) {
      if ($(f), t !== t + 0) throw t;
      O(1, 0);
    }
  }
  function Vn(e, n, o, u, c, f, t) {
    var r = b();
    try {
      E(e)(n, o, u, c, f, t);
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      O(1, 0);
    }
  }
  function Hn(e, n, o, u, c, f, t, r, a, i, s, l, h, d, v, y) {
    var g = b();
    try {
      E(e)(n, o, u, c, f, t, r, a, i, s, l, h, d, v, y);
    } catch (w) {
      if ($(g), w !== w + 0) throw w;
      O(1, 0);
    }
  }
  function zn(e, n, o, u, c, f, t, r, a) {
    var i = b();
    try {
      E(e)(n, o, u, c, f, t, r, a);
    } catch (s) {
      if ($(i), s !== s + 0) throw s;
      O(1, 0);
    }
  }
  function Nn(e, n, o, u, c, f) {
    var t = b();
    try {
      return E(e)(n, o, u, c, f);
    } catch (r) {
      if ($(t), r !== r + 0) throw r;
      O(1, 0);
    }
  }
  function Gn(e, n, o, u, c, f) {
    var t = b();
    try {
      E(e)(n, o, u, c, f);
    } catch (r) {
      if ($(t), r !== r + 0) throw r;
      O(1, 0);
    }
  }
  function qn(e, n, o, u, c, f, t) {
    var r = b();
    try {
      return E(e)(n, o, u, c, f, t);
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      O(1, 0);
    }
  }
  function Qn(e, n, o, u, c, f, t, r) {
    var a = b();
    try {
      return E(e)(n, o, u, c, f, t, r);
    } catch (i) {
      if ($(a), i !== i + 0) throw i;
      O(1, 0);
    }
  }
  function Yn(e) {
    var n = b();
    try {
      return E(e)();
    } catch (o) {
      if ($(n), o !== o + 0) throw o;
      O(1, 0);
    }
  }
  function Zn(e, n, o, u, c, f, t, r, a) {
    var i = b();
    try {
      return E(e)(n, o, u, c, f, t, r, a);
    } catch (s) {
      if ($(i), s !== s + 0) throw s;
      O(1, 0);
    }
  }
  function Jn(e, n, o, u, c, f, t) {
    var r = b();
    try {
      return E(e)(n, o, u, c, f, t);
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      O(1, 0);
    }
  }
  function Xn(e, n, o, u) {
    var c = b();
    try {
      return E(e)(n, o, u);
    } catch (f) {
      if ($(c), f !== f + 0) throw f;
      O(1, 0);
    }
  }
  function Kn(e, n, o, u) {
    var c = b();
    try {
      return E(e)(n, o, u);
    } catch (f) {
      if ($(c), f !== f + 0) throw f;
      O(1, 0);
    }
  }
  function ta(e, n, o, u, c, f, t, r) {
    var a = b();
    try {
      E(e)(n, o, u, c, f, t, r);
    } catch (i) {
      if ($(a), i !== i + 0) throw i;
      O(1, 0);
    }
  }
  function ra(e, n, o, u, c, f, t, r) {
    var a = b();
    try {
      E(e)(n, o, u, c, f, t, r);
    } catch (i) {
      if ($(a), i !== i + 0) throw i;
      O(1, 0);
    }
  }
  function ea(e, n, o, u, c, f) {
    var t = b();
    try {
      return E(e)(n, o, u, c, f);
    } catch (r) {
      if ($(t), r !== r + 0) throw r;
      O(1, 0);
    }
  }
  function na(e, n, o, u, c, f, t, r, a, i) {
    var s = b();
    try {
      return E(e)(n, o, u, c, f, t, r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      O(1, 0);
    }
  }
  function aa(e, n, o) {
    var u = b();
    try {
      return E(e)(n, o);
    } catch (c) {
      if ($(u), c !== c + 0) throw c;
      O(1, 0);
    }
  }
  function ia(e, n, o, u, c) {
    var f = b();
    try {
      return E(e)(n, o, u, c);
    } catch (t) {
      if ($(f), t !== t + 0) throw t;
      O(1, 0);
    }
  }
  function oa(e, n, o, u, c, f, t, r, a, i) {
    var s = b();
    try {
      E(e)(n, o, u, c, f, t, r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      O(1, 0);
    }
  }
  function sa(e, n, o, u, c, f, t) {
    var r = b();
    try {
      E(e)(n, o, u, c, f, t);
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      O(1, 0);
    }
  }
  function ua(e, n, o, u) {
    var c = b();
    try {
      return E(e)(n, o, u);
    } catch (f) {
      if ($(c), f !== f + 0) throw f;
      O(1, 0);
    }
  }
  function la(e, n, o, u, c, f, t, r, a, i, s, l) {
    var h = b();
    try {
      return E(e)(n, o, u, c, f, t, r, a, i, s, l);
    } catch (d) {
      if ($(h), d !== d + 0) throw d;
      O(1, 0);
    }
  }
  function ca(e, n, o, u, c, f, t) {
    var r = b();
    try {
      return Dr(e, n, o, u, c, f, t);
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      O(1, 0);
    }
  }
  function fa(e, n, o, u, c) {
    var f = b();
    try {
      return kr(e, n, o, u, c);
    } catch (t) {
      if ($(f), t !== t + 0) throw t;
      O(1, 0);
    }
  }
  function ha() {
    Ce();
    function e() {
      var n, o;
      p.calledRun = true, !N && (Pe(), (n = X) === null || n === void 0 || n(p), (o = p.onRuntimeInitialized) === null || o === void 0 || o.call(p), _e());
    }
    p.setStatus ? (p.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => p.setStatus(""), 1), e();
    }, 1)) : e();
  }
  var Qt;
  return Qt = await Re(), ha(), hr ? T = p : T = new Promise((e, n) => {
    X = e, K = n;
  }), T;
}
async function pi(m, T) {
  return fi(di, m, T);
}
async function vi(m = {}) {
  var T, A, B, p = m, W = !!globalThis.window, L = typeof Bun < "u", U = !!globalThis.WorkerGlobalScope;
  !((A = globalThis.process) === null || A === void 0 || (A = A.versions) === null || A === void 0) && A.node && ((B = globalThis.process) === null || B === void 0 ? void 0 : B.type) != "renderer";
  var D = "./this.program", z, st = "";
  function St(t) {
    return p.locateFile ? p.locateFile(t, st) : st + t;
  }
  var Et, yt;
  if (W || U || L) {
    try {
      st = new URL(".", z).href;
    } catch {
    }
    U && (yt = (t) => {
      var r = new XMLHttpRequest();
      return r.open("GET", t, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
    }), Et = async (t) => {
      var r = await fetch(t, { credentials: "same-origin" });
      if (r.ok) return r.arrayBuffer();
      throw new Error(r.status + " : " + r.url);
    };
  }
  var xt = console.log.bind(console), q = console.error.bind(console), at, N = false, X, K, Q, V, J, tt, dt, C, cr, fr, hr = false;
  function dr() {
    var t = lr.buffer;
    Q = new Int8Array(t), J = new Int16Array(t), p.HEAPU8 = V = new Uint8Array(t), tt = new Uint16Array(t), dt = new Int32Array(t), C = new Uint32Array(t), cr = new Float32Array(t), fr = new Float64Array(t);
  }
  function Ce() {
    if (p.preRun) for (typeof p.preRun == "function" && (p.preRun = [p.preRun]); p.preRun.length; ) We(p.preRun.shift());
    pr(yr);
  }
  function Pe() {
    hr = true, f.Da();
  }
  function _e() {
    if (p.postRun) for (typeof p.postRun == "function" && (p.postRun = [p.postRun]); p.postRun.length; ) je(p.postRun.shift());
    pr(vr);
  }
  function Dt(t) {
    var r, a;
    (r = p.onAbort) === null || r === void 0 || r.call(p, t), t = "Aborted(" + t + ")", q(t), N = true, t += ". Build with -sASSERTIONS for more info.";
    var i = new WebAssembly.RuntimeError(t);
    throw (a = K) === null || a === void 0 || a(i), i;
  }
  var wt;
  function Ae() {
    return St("zxing_full.wasm");
  }
  function Oe(t) {
    if (t == wt && at) return new Uint8Array(at);
    if (yt) return yt(t);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Se(t) {
    if (!at) try {
      var r = await Et(t);
      return new Uint8Array(r);
    } catch {
    }
    return Oe(t);
  }
  async function Ee(t, r) {
    try {
      var a = await Se(t), i = await WebAssembly.instantiate(a, r);
      return i;
    } catch (s) {
      q(`failed to asynchronously prepare wasm: ${s}`), Dt(s);
    }
  }
  async function xe(t, r, a) {
    if (!t && WebAssembly.instantiateStreaming) try {
      var i = fetch(r, { credentials: "same-origin" }), s = await WebAssembly.instantiateStreaming(i, a);
      return s;
    } catch (l) {
      q(`wasm streaming compile failed: ${l}`), q("falling back to ArrayBuffer instantiation");
    }
    return Ee(r, a);
  }
  function Fe() {
    var t = { a: Dn };
    return t;
  }
  async function Re() {
    function t(l, h) {
      return f = l.exports, In(f), dr(), f;
    }
    function r(l) {
      return t(l.instance);
    }
    var a = Fe();
    if (p.instantiateWasm) return new Promise((l, h) => {
      p.instantiateWasm(a, (d, v) => {
        l(t(d));
      });
    });
    wt != null || (wt = Ae());
    var i = await xe(at, wt, a), s = r(i);
    return s;
  }
  var pr = (t) => {
    for (; t.length > 0; ) t.shift()(p);
  }, vr = [], je = (t) => vr.push(t), yr = [], We = (t) => yr.push(t), $ = (t) => kr(t), b = () => qt(), $t = [], bt = 0, Ie = (t) => {
    var r = new kt(t);
    return r.get_caught() || (r.set_caught(true), bt--), r.set_rethrown(false), $t.push(r), fe(t), Ir(t);
  }, G = 0, De = () => {
    _(0, 0);
    var t = $t.pop();
    Mr(t.excPtr), G = 0;
  };
  class kt {
    constructor(r) {
      this.excPtr = r, this.ptr = r - 24;
    }
    set_type(r) {
      C[this.ptr + 4 >> 2] = r;
    }
    get_type() {
      return C[this.ptr + 4 >> 2];
    }
    set_destructor(r) {
      C[this.ptr + 8 >> 2] = r;
    }
    get_destructor() {
      return C[this.ptr + 8 >> 2];
    }
    set_caught(r) {
      r = r ? 1 : 0, Q[this.ptr + 12] = r;
    }
    get_caught() {
      return Q[this.ptr + 12] != 0;
    }
    set_rethrown(r) {
      r = r ? 1 : 0, Q[this.ptr + 13] = r;
    }
    get_rethrown() {
      return Q[this.ptr + 13] != 0;
    }
    init(r, a) {
      this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(a);
    }
    set_adjusted_ptr(r) {
      C[this.ptr + 16 >> 2] = r;
    }
    get_adjusted_ptr() {
      return C[this.ptr + 16 >> 2];
    }
  }
  var Tt = (t) => Dr(t), Mt = (t) => {
    var r = G;
    if (!r) return Tt(0), 0;
    var a = new kt(r);
    a.set_adjusted_ptr(r);
    var i = a.get_type();
    if (!i) return Tt(0), r;
    for (var s of t) {
      if (s === 0 || s === i) break;
      var l = a.ptr + 16;
      if (he(s, i, l)) return Tt(s), r;
    }
    return Tt(i), r;
  }, ke = () => Mt([]), Me = (t) => Mt([t]), Ue = (t, r) => Mt([t, r]), Be = () => {
    var t = $t.pop();
    t || Dt("no exception to throw");
    var r = t.excPtr;
    throw t.get_rethrown() || ($t.push(t), t.set_rethrown(true), t.set_caught(false), bt++), G = r, G;
  }, Le = (t, r, a) => {
    var i = new kt(t);
    throw i.init(r, a), G = t, bt++, G;
  }, Ve = () => bt, He = (t) => {
    throw G || (G = t), G;
  }, Lr = globalThis.TextDecoder && new TextDecoder(), Ut = (t, r, a, i) => {
    var s = r + a;
    if (i) return s;
    for (; t[r] && !(r >= s); ) ++r;
    return r;
  }, Yt = function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
    var s = Ut(t, r, a, i);
    if (s - r > 16 && t.buffer && Lr) return Lr.decode(t.subarray(r, s));
    for (var l = ""; r < s; ) {
      var h = t[r++];
      if (!(h & 128)) {
        l += String.fromCharCode(h);
        continue;
      }
      var d = t[r++] & 63;
      if ((h & 224) == 192) {
        l += String.fromCharCode((h & 31) << 6 | d);
        continue;
      }
      var v = t[r++] & 63;
      if ((h & 240) == 224 ? h = (h & 15) << 12 | d << 6 | v : h = (h & 7) << 18 | d << 12 | v << 6 | t[r++] & 63, h < 65536) l += String.fromCharCode(h);
      else {
        var y = h - 65536;
        l += String.fromCharCode(55296 | y >> 10, 56320 | y & 1023);
      }
    }
    return l;
  }, Bt = (t, r, a) => t ? Yt(V, t, r, a) : "";
  function Ft(t, r, a) {
    return 0;
  }
  function Ct(t, r, a) {
    return 0;
  }
  var Zt = (t, r, a) => {
  };
  function ze(t, r, a, i) {
  }
  var Jt = (t, r) => {
  }, Pt = () => Dt(""), Xt = {}, mr = (t) => {
    for (; t.length; ) {
      var r = t.pop(), a = t.pop();
      a(r);
    }
  };
  function H(t) {
    return this.fromWireType(C[t >> 2]);
  }
  var ut = {}, S = {}, Kt = {}, lt = class extends Error {
    constructor(t) {
      super(t), this.name = "InternalError";
    }
  }, tr = (t) => {
    throw new lt(t);
  }, _t = (t, r, a) => {
    t.forEach((d) => Kt[d] = r);
    function i(d) {
      var v = a(d);
      v.length !== t.length && tr("Mismatched type converter count");
      for (var y = 0; y < t.length; ++y) ct(t[y], v[y]);
    }
    var s = new Array(r.length), l = [], h = 0;
    {
      const d = r;
      for (let v = 0; v < d.length; ++v) {
        const y = d[v];
        S.hasOwnProperty(y) ? s[v] = S[y] : (l.push(y), ut.hasOwnProperty(y) || (ut[y] = []), ut[y].push(() => {
          s[v] = S[y], ++h, h === l.length && i(s);
        }));
      }
    }
    l.length === 0 && i(s);
  }, gr = (t) => {
    var r = Xt[t];
    delete Xt[t];
    var a = r.rawConstructor, i = r.rawDestructor, s = r.fields, l = s.map((h) => h.getterReturnType).concat(s.map((h) => h.setterArgumentType));
    _t([t], l, (h) => {
      var d = {};
      {
        const v = s;
        for (let y = 0; y < v.length; ++y) {
          const g = v[y], w = h[y], F = g.getter, P = g.getterContext, j = h[y + s.length], k = g.setter, M = g.setterContext;
          d[g.fieldName] = { read: (I) => w.fromWireType(F(P, I)), write: (I, gt) => {
            var Z = [];
            k(M, I, j.toWireType(Z, gt)), mr(Z);
          }, optional: w.optional };
        }
      }
      return [{ name: r.name, fromWireType: (v) => {
        var y = {};
        for (var g in d) y[g] = d[g].read(v);
        return i(v), y;
      }, toWireType: (v, y) => {
        for (var g in d) if (!(g in y) && !d[g].optional) throw new TypeError(`Missing field: "${g}"`);
        var w = a();
        for (g in d) d[g].write(w, y[g]);
        return v !== null && v.push(i, w), w;
      }, readValueFromPointer: H, destructorFunction: i }];
    });
  }, wr = (t, r, a, i, s) => {
  }, Y = (t) => {
    for (var r = ""; ; ) {
      var a = V[t++];
      if (!a) return r;
      r += String.fromCharCode(a);
    }
  }, Lt = class extends Error {
    constructor(t) {
      super(t), this.name = "BindingError";
    }
  }, R = (t) => {
    throw new Lt(t);
  };
  function Vt(t, r) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var i = r.name;
    if (t || R(`type "${i}" must have a positive integer typeid pointer`), S.hasOwnProperty(t)) {
      if (a.ignoreDuplicateRegistrations) return;
      R(`Cannot register type '${i}' twice`);
    }
    if (S[t] = r, delete Kt[t], ut.hasOwnProperty(t)) {
      var s = ut[t];
      delete ut[t], s.forEach((l) => l());
    }
  }
  function ct(t, r) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Vt(t, r, a);
  }
  var rr = (t, r, a, i) => {
    r = Y(r), ct(t, { name: r, fromWireType: function(s) {
      return !!s;
    }, toWireType: function(s, l) {
      return l ? a : i;
    }, readValueFromPointer: function(s) {
      return this.fromWireType(V[s]);
    }, destructorFunction: null });
  }, $r = (t) => ({ count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType }), er = (t) => {
    function r(a) {
      return a.$$.ptrType.registeredClass.name;
    }
    R(r(t) + " instance already deleted");
  }, nr = false, br = (t) => {
  }, Ne = (t) => {
    t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
  }, Vr = (t) => {
    t.count.value -= 1;
    var r = t.count.value === 0;
    r && Ne(t);
  }, Ht = (t) => globalThis.FinalizationRegistry ? (nr = new FinalizationRegistry((r) => {
    Vr(r.$$);
  }), Ht = (r) => {
    var a = r.$$, i = !!a.smartPtr;
    if (i) {
      var s = { $$: a };
      nr.register(r, s, r);
    }
    return r;
  }, br = (r) => nr.unregister(r), Ht(t)) : (Ht = (r) => r, t), Ge = () => {
    let t = Rt.prototype;
    Object.assign(t, { isAliasOf(a) {
      if (!(this instanceof Rt) || !(a instanceof Rt)) return false;
      var i = this.$$.ptrType.registeredClass, s = this.$$.ptr;
      a.$$ = a.$$;
      for (var l = a.$$.ptrType.registeredClass, h = a.$$.ptr; i.baseClass; ) s = i.upcast(s), i = i.baseClass;
      for (; l.baseClass; ) h = l.upcast(h), l = l.baseClass;
      return i === l && s === h;
    }, clone() {
      if (this.$$.ptr || er(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
      var a = Ht(Object.create(Object.getPrototypeOf(this), { $$: { value: $r(this.$$) } }));
      return a.$$.count.value += 1, a.$$.deleteScheduled = false, a;
    }, delete() {
      this.$$.ptr || er(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && R("Object already scheduled for deletion"), br(this), Vr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || er(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && R("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
    } });
    const r = Symbol.dispose;
    r && (t[r] = t.delete);
  };
  function Rt() {
  }
  var zt = (t, r) => Object.defineProperty(r, "name", { value: t }), Hr = {}, zr = (t, r, a) => {
    if (t[r].overloadTable === void 0) {
      var i = t[r];
      t[r] = function() {
        for (var s = arguments.length, l = new Array(s), h = 0; h < s; h++) l[h] = arguments[h];
        return t[r].overloadTable.hasOwnProperty(l.length) || R(`Function '${a}' called with an invalid number of arguments (${l.length}) - expects one of (${t[r].overloadTable})!`), t[r].overloadTable[l.length].apply(this, l);
      }, t[r].overloadTable = [], t[r].overloadTable[i.argCount] = i;
    }
  }, Nr = (t, r, a) => {
    p.hasOwnProperty(t) ? ((a === void 0 || p[t].overloadTable !== void 0 && p[t].overloadTable[a] !== void 0) && R(`Cannot register public name '${t}' twice`), zr(p, t, t), p[t].overloadTable.hasOwnProperty(a) && R(`Cannot register multiple overloads of a function with the same number of arguments (${a})!`), p[t].overloadTable[a] = r) : (p[t] = r, p[t].argCount = a);
  }, Gr = 48, qe = 57, Qe = (t) => {
    t = t.replace(/[^a-zA-Z0-9_]/g, "$");
    var r = t.charCodeAt(0);
    return r >= Gr && r <= qe ? `_${t}` : t;
  };
  function Ye(t, r, a, i, s, l, h, d) {
    this.name = t, this.constructor = r, this.instancePrototype = a, this.rawDestructor = i, this.baseClass = s, this.getActualType = l, this.upcast = h, this.downcast = d, this.pureVirtualFunctions = [];
  }
  var jt = (t, r, a) => {
    for (; r !== a; ) r.upcast || R(`Expected null or instance of ${a.name}, got an instance of ${r.name}`), t = r.upcast(t), r = r.baseClass;
    return t;
  }, Tr = (t) => {
    if (t === null) return "null";
    var r = typeof t;
    return r === "object" || r === "array" || r === "function" ? t.toString() : "" + t;
  };
  function Ze(t, r) {
    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), 0;
    r.$$ || R(`Cannot pass "${Tr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var a = r.$$.ptrType.registeredClass, i = jt(r.$$.ptr, a, this.registeredClass);
    return i;
  }
  function ar(t, r) {
    var a;
    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), this.isSmartPointer ? (a = this.rawConstructor(), t !== null && t.push(this.rawDestructor, a), a) : 0;
    (!r || !r.$$) && R(`Cannot pass "${Tr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && R(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
    var i = r.$$.ptrType.registeredClass;
    if (a = jt(r.$$.ptr, i, this.registeredClass), this.isSmartPointer) switch (r.$$.smartPtr === void 0 && R("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        r.$$.smartPtrType === this ? a = r.$$.smartPtr : R(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        a = r.$$.smartPtr;
        break;
      case 2:
        if (r.$$.smartPtrType === this) a = r.$$.smartPtr;
        else {
          var s = r.clone();
          a = this.rawShare(a, ht.toHandle(() => s.delete())), t !== null && t.push(this.rawDestructor, a);
        }
        break;
      default:
        R("Unsupporting sharing policy");
    }
    return a;
  }
  function qr(t, r) {
    if (r === null) return this.isReference && R(`null is not a valid ${this.name}`), 0;
    r.$$ || R(`Cannot pass "${Tr(r)}" as a ${this.name}`), r.$$.ptr || R(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && R(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
    var a = r.$$.ptrType.registeredClass, i = jt(r.$$.ptr, a, this.registeredClass);
    return i;
  }
  var pt = (t, r, a) => {
    if (r === a) return t;
    if (a.baseClass === void 0) return null;
    var i = pt(t, r, a.baseClass);
    return i === null ? null : a.downcast(i);
  }, Je = {}, Qr = (t, r) => {
    for (r === void 0 && R("ptr should not be undefined"); t.baseClass; ) r = t.upcast(r), t = t.baseClass;
    return r;
  }, E = (t, r) => (r = Qr(t, r), Je[r]), ir = (t, r) => {
    (!r.ptrType || !r.ptr) && tr("makeClassHandle requires ptr and ptrType");
    var a = !!r.smartPtrType, i = !!r.smartPtr;
    return a !== i && tr("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, Ht(Object.create(t, { $$: { value: r, writable: true } }));
  };
  function Xe(t) {
    var r = this.getPointee(t);
    if (!r) return this.destructor(t), null;
    var a = E(this.registeredClass, r);
    if (a !== void 0) {
      if (a.$$.count.value === 0) return a.$$.ptr = r, a.$$.smartPtr = t, a.clone();
      var i = a.clone();
      return this.destructor(t), i;
    }
    function s() {
      return this.isSmartPointer ? ir(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: r, smartPtrType: this, smartPtr: t }) : ir(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
    }
    var l = this.registeredClass.getActualType(r), h = Hr[l];
    if (!h) return s.call(this);
    var d;
    this.isConst ? d = h.constPointerType : d = h.pointerType;
    var v = pt(r, this.registeredClass, d.registeredClass);
    return v === null ? s.call(this) : this.isSmartPointer ? ir(d.registeredClass.instancePrototype, { ptrType: d, ptr: v, smartPtrType: this, smartPtr: t }) : ir(d.registeredClass.instancePrototype, { ptrType: d, ptr: v });
  }
  var it = () => {
    Object.assign(or.prototype, { getPointee(t) {
      return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
    }, destructor(t) {
      var r;
      (r = this.rawDestructor) === null || r === void 0 || r.call(this, t);
    }, readValueFromPointer: H, fromWireType: Xe });
  };
  function or(t, r, a, i, s, l, h, d, v, y, g) {
    this.name = t, this.registeredClass = r, this.isReference = a, this.isConst = i, this.isSmartPointer = s, this.pointeeType = l, this.sharingPolicy = h, this.rawGetPointee = d, this.rawConstructor = v, this.rawShare = y, this.rawDestructor = g, !s && r.baseClass === void 0 ? i ? (this.toWireType = Ze, this.destructorFunction = null) : (this.toWireType = qr, this.destructorFunction = null) : this.toWireType = ar;
  }
  var Cr = (t, r, a) => {
    p.hasOwnProperty(t) || tr("Replacing nonexistent public symbol"), p[t].overloadTable !== void 0 && a !== void 0 ? p[t].overloadTable[a] = r : (p[t] = r, p[t].argCount = a);
  }, ot = {}, Ke = (t, r, a) => {
    t = t.replace(/p/g, "i");
    var i = ot[t];
    return i(r, ...a);
  }, sr = [], x = (t) => {
    var r = sr[t];
    return r || (sr[t] = r = ve.get(t)), r;
  }, Pr = function(t, r) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t.includes("j")) return Ke(t, r, a);
    var i = x(r), s = i(...a);
    return s;
  }, tn = function(t, r) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      return Pr(t, r, s, a);
    };
  }, rt = function(t, r) {
    t = Y(t);
    function a() {
      if (t.includes("j")) return tn(t, r);
      var s = x(r);
      return s;
    }
    var i = a();
    return typeof i != "function" && R(`unknown function pointer with signature ${t}: ${r}`), i;
  };
  class rn extends Error {
  }
  var _r = (t) => {
    var r = Wr(t), a = Y(r);
    return vt(r), a;
  }, ft = (t, r) => {
    var a = [], i = {};
    function s(l) {
      if (!i[l] && !S[l]) {
        if (Kt[l]) {
          Kt[l].forEach(s);
          return;
        }
        a.push(l), i[l] = true;
      }
    }
    throw r.forEach(s), new rn(`${t}: ` + a.map(_r).join([", "]));
  }, Ar = (t, r, a, i, s, l, h, d, v, y, g, w, F) => {
    g = Y(g), l = rt(s, l), d && (d = rt(h, d)), y && (y = rt(v, y)), F = rt(w, F);
    var P = Qe(g);
    Nr(P, function() {
      ft(`Cannot construct ${g} due to unbound types`, [i]);
    }), _t([t, r, a], i ? [i] : [], (j) => {
      j = j[0];
      var k, M;
      i ? (k = j.registeredClass, M = k.instancePrototype) : M = Rt.prototype;
      var I = zt(g, function() {
        if (Object.getPrototypeOf(this) !== gt) throw new Lt(`Use 'new' to construct ${g}`);
        if (Z.constructor_body === void 0) throw new Lt(`${g} has no accessible constructor`);
        for (var $a = arguments.length, me = new Array($a), ge = 0; ge < $a; ge++) me[ge] = arguments[ge];
        var ba = Z.constructor_body[me.length];
        if (ba === void 0) throw new Lt(`Tried to invoke ctor of ${g} with invalid number of parameters (${me.length}) - expected (${Object.keys(Z.constructor_body).toString()}) parameters instead!`);
        return ba.apply(this, me);
      }), gt = Object.create(M, { constructor: { value: I } });
      I.prototype = gt;
      var Z = new Ye(g, I, gt, F, k, l, d, y);
      if (Z.baseClass) {
        var nt, Ot;
        (Ot = (nt = Z.baseClass).__derivedClasses) !== null && Ot !== void 0 || (nt.__derivedClasses = []), Z.baseClass.__derivedClasses.push(Z);
      }
      var ye = new or(g, Z, true, false, false), ga = new or(g + "*", Z, false, false, false), wa = new or(g + " const*", Z, false, true, false);
      return Hr[t] = { pointerType: ga, constPointerType: wa }, Cr(P, I), [ye, ga, wa];
    });
  }, et = (t, r) => {
    for (var a = [], i = 0; i < t; i++) a.push(C[r + i * 4 >> 2]);
    return a;
  };
  function Yr(t) {
    for (var r = 1; r < t.length; ++r) if (t[r] !== null && t[r].destructorFunction === void 0) return true;
    return false;
  }
  function Or(t, r, a, i, s, l) {
    var h = r.length;
    h < 2 && R("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var d = r[1] !== null && a !== null, v = Yr(r), y = !r[0].isVoid, g = h - 2, w = new Array(g), F = [], P = [], j = function() {
      P.length = 0;
      var k;
      F.length = d ? 2 : 1, F[0] = s, d && (k = r[1].toWireType(P, this), F[1] = k);
      for (var M = 0; M < g; ++M) w[M] = r[M + 2].toWireType(P, M < 0 || arguments.length <= M ? void 0 : arguments[M]), F.push(w[M]);
      var I = i(...F);
      function gt(Z) {
        if (v) mr(P);
        else for (var nt = d ? 1 : 2; nt < r.length; nt++) {
          var Ot = nt === 1 ? k : w[nt - 2];
          r[nt].destructorFunction !== null && r[nt].destructorFunction(Ot);
        }
        if (y) return r[0].fromWireType(Z);
      }
      return gt(I);
    };
    return zt(t, j);
  }
  var en = (t, r, a, i, s, l) => {
    var h = et(r, a);
    s = rt(i, s), _t([], [t], (d) => {
      d = d[0];
      var v = `constructor ${d.name}`;
      if (d.registeredClass.constructor_body === void 0 && (d.registeredClass.constructor_body = []), d.registeredClass.constructor_body[r - 1] !== void 0) throw new Lt(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${d.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return d.registeredClass.constructor_body[r - 1] = () => {
        ft(`Cannot construct ${d.name} due to unbound types`, h);
      }, _t([], h, (y) => (y.splice(1, 0, null), d.registeredClass.constructor_body[r - 1] = Or(v, y, null, s, l), [])), [];
    });
  }, Zr = (t) => {
    t = t.trim();
    const r = t.indexOf("(");
    return r === -1 ? t : t.slice(0, r);
  }, nn = (t, r, a, i, s, l, h, d, v, y) => {
    var g = et(a, i);
    r = Y(r), r = Zr(r), l = rt(s, l), _t([], [t], (w) => {
      w = w[0];
      var F = `${w.name}.${r}`;
      r.startsWith("@@") && (r = Symbol[r.substring(2)]), d && w.registeredClass.pureVirtualFunctions.push(r);
      function P() {
        ft(`Cannot call ${F} due to unbound types`, g);
      }
      var j = w.registeredClass.instancePrototype, k = j[r];
      return k === void 0 || k.overloadTable === void 0 && k.className !== w.name && k.argCount === a - 2 ? (P.argCount = a - 2, P.className = w.name, j[r] = P) : (zr(j, r, F), j[r].overloadTable[a - 2] = P), _t([], g, (M) => {
        var I = Or(F, M, w, l, h);
        return j[r].overloadTable === void 0 ? (I.argCount = a - 2, j[r] = I) : j[r].overloadTable[a - 2] = I, [];
      }), [];
    });
  }, Jr = [], At = [0, 1, , 1, null, 1, true, 1, false, 1], Sr = (t) => {
    t > 9 && --At[t + 1] === 0 && (At[t] = void 0, Jr.push(t));
  }, ht = { toValue: (t) => (t || R(`Cannot use deleted val. handle = ${t}`), At[t]), toHandle: (t) => {
    switch (t) {
      case void 0:
        return 2;
      case null:
        return 4;
      case true:
        return 6;
      case false:
        return 8;
      default: {
        const r = Jr.pop() || At.length;
        return At[r] = t, At[r + 1] = 1, r;
      }
    }
  } }, Xr = { name: "emscripten::val", fromWireType: (t) => {
    var r = ht.toValue(t);
    return Sr(t), r;
  }, toWireType: (t, r) => ht.toHandle(r), readValueFromPointer: H, destructorFunction: null }, an = (t) => ct(t, Xr), Wt = (t, r) => {
    switch (r) {
      case 4:
        return function(a) {
          return this.fromWireType(cr[a >> 2]);
        };
      case 8:
        return function(a) {
          return this.fromWireType(fr[a >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r}): ${t}`);
    }
  }, Kr = (t, r, a) => {
    r = Y(r), ct(t, { name: r, fromWireType: (i) => i, toWireType: (i, s) => s, readValueFromPointer: Wt(r, a), destructorFunction: null });
  }, te = (t, r, a, i, s, l, h, d) => {
    var v = et(r, a);
    t = Y(t), t = Zr(t), s = rt(i, s), Nr(t, function() {
      ft(`Cannot call ${t} due to unbound types`, v);
    }, r - 1), _t([], v, (y) => {
      var g = [y[0], null].concat(y.slice(1));
      return Cr(t, Or(t, g, null, s, l), r - 1), [];
    });
  }, re = (t, r, a) => {
    switch (r) {
      case 1:
        return a ? (i) => Q[i] : (i) => V[i];
      case 2:
        return a ? (i) => J[i >> 1] : (i) => tt[i >> 1];
      case 4:
        return a ? (i) => dt[i >> 2] : (i) => C[i >> 2];
      default:
        throw new TypeError(`invalid integer width (${r}): ${t}`);
    }
  }, ee = (t, r, a, i, s) => {
    r = Y(r);
    const l = i === 0;
    let h = (v) => v;
    if (l) {
      var d = 32 - 8 * a;
      h = (v) => v << d >>> d, s = h(s);
    }
    ct(t, { name: r, fromWireType: h, toWireType: (v, y) => y, readValueFromPointer: re(r, a, i !== 0), destructorFunction: null });
  }, on = (t, r, a) => {
    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], s = i[r];
    function l(h) {
      var d = C[h >> 2], v = C[h + 4 >> 2];
      return new s(Q.buffer, v, d);
    }
    a = Y(a), ct(t, { name: a, fromWireType: l, readValueFromPointer: l }, { ignoreDuplicateRegistrations: true });
  }, sn = Object.assign({ optional: true }, Xr), ne = (t, r) => {
    ct(t, sn);
  }, un = (t, r, a, i) => {
    if (!(i > 0)) return 0;
    for (var s = a, l = a + i - 1, h = 0; h < t.length; ++h) {
      var d = t.codePointAt(h);
      if (d <= 127) {
        if (a >= l) break;
        r[a++] = d;
      } else if (d <= 2047) {
        if (a + 1 >= l) break;
        r[a++] = 192 | d >> 6, r[a++] = 128 | d & 63;
      } else if (d <= 65535) {
        if (a + 2 >= l) break;
        r[a++] = 224 | d >> 12, r[a++] = 128 | d >> 6 & 63, r[a++] = 128 | d & 63;
      } else {
        if (a + 3 >= l) break;
        r[a++] = 240 | d >> 18, r[a++] = 128 | d >> 12 & 63, r[a++] = 128 | d >> 6 & 63, r[a++] = 128 | d & 63, h++;
      }
    }
    return r[a] = 0, a - s;
  }, It = (t, r, a) => un(t, V, r, a), ae = (t) => {
    for (var r = 0, a = 0; a < t.length; ++a) {
      var i = t.charCodeAt(a);
      i <= 127 ? r++ : i <= 2047 ? r += 2 : i >= 55296 && i <= 57343 ? (r += 4, ++a) : r += 3;
    }
    return r;
  }, ln = (t, r) => {
    r = Y(r), ct(t, { name: r, fromWireType(a) {
      var i = C[a >> 2], s = a + 4, l;
      return l = Bt(s, i, true), vt(a), l;
    }, toWireType(a, i) {
      i instanceof ArrayBuffer && (i = new Uint8Array(i));
      var s, l = typeof i == "string";
      l || ArrayBuffer.isView(i) && i.BYTES_PER_ELEMENT == 1 || R("Cannot pass non-string to std::string"), l ? s = ae(i) : s = i.length;
      var h = ur(4 + s + 1), d = h + 4;
      return C[h >> 2] = s, l ? It(i, d, s + 1) : V.set(i, d), a !== null && a.push(vt, h), h;
    }, readValueFromPointer: H, destructorFunction(a) {
      vt(a);
    } });
  }, ie = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, cn = (t, r, a) => {
    var i = t >> 1, s = Ut(tt, i, r / 2, a);
    if (s - i > 16 && ie) return ie.decode(tt.subarray(i, s));
    for (var l = "", h = i; h < s; ++h) {
      var d = tt[h];
      l += String.fromCharCode(d);
    }
    return l;
  }, fn = (t, r, a) => {
    if (a != null || (a = 2147483647), a < 2) return 0;
    a -= 2;
    for (var i = r, s = a < t.length * 2 ? a / 2 : t.length, l = 0; l < s; ++l) {
      var h = t.charCodeAt(l);
      J[r >> 1] = h, r += 2;
    }
    return J[r >> 1] = 0, r - i;
  }, hn = (t) => t.length * 2, dn = (t, r, a) => {
    for (var i = "", s = t >> 2, l = 0; !(l >= r / 4); l++) {
      var h = C[s + l];
      if (!h && !a) break;
      i += String.fromCodePoint(h);
    }
    return i;
  }, pn = (t, r, a) => {
    if (a != null || (a = 2147483647), a < 4) return 0;
    for (var i = r, s = i + a - 4, l = 0; l < t.length; ++l) {
      var h = t.codePointAt(l);
      if (h > 65535 && l++, dt[r >> 2] = h, r += 4, r + 4 > s) break;
    }
    return dt[r >> 2] = 0, r - i;
  }, Er = (t) => {
    for (var r = 0, a = 0; a < t.length; ++a) {
      var i = t.codePointAt(a);
      i > 65535 && a++, r += 4;
    }
    return r;
  }, vn = (t, r, a) => {
    a = Y(a);
    var i, s, l;
    r === 2 ? (i = cn, s = fn, l = hn) : (i = dn, s = pn, l = Er), ct(t, { name: a, fromWireType: (h) => {
      var d = C[h >> 2], v = i(h + 4, d * r, true);
      return vt(h), v;
    }, toWireType: (h, d) => {
      typeof d != "string" && R(`Cannot pass non-string to C++ string type ${a}`);
      var v = l(d), y = ur(4 + v + r);
      return C[y >> 2] = v / r, s(d, y + 4, v + r), h !== null && h.push(vt, y), y;
    }, readValueFromPointer: H, destructorFunction(h) {
      vt(h);
    } });
  }, yn = (t, r, a, i, s, l) => {
    Xt[t] = { name: Y(r), rawConstructor: rt(a, i), rawDestructor: rt(s, l), fields: [] };
  }, mn = (t, r, a, i, s, l, h, d, v, y) => {
    Xt[t].fields.push({ fieldName: Y(r), getterReturnType: a, getter: rt(i, s), getterContext: l, setterArgumentType: h, setter: rt(d, v), setterContext: y });
  }, gn = (t, r) => {
    r = Y(r), ct(t, { isVoid: true, name: r, fromWireType: () => {
    }, toWireType: (a, i) => {
    } });
  }, xr = [], oe = (t) => {
    var r = xr.length;
    return xr.push(t), r;
  }, wn = (t, r) => {
    var a = S[t];
    return a === void 0 && R(`${r} has unknown type ${_r(t)}`), a;
  }, $n = (t, r) => {
    for (var a = new Array(t), i = 0; i < t; ++i) a[i] = wn(C[r + i * 4 >> 2], `parameter ${i}`);
    return a;
  }, bn = (t, r, a) => {
    var i = [], s = t(i, a);
    return i.length && (C[r >> 2] = ht.toHandle(i)), s;
  }, Tn = {}, se = (t) => {
    var r = Tn[t];
    return r === void 0 ? Y(t) : r;
  }, Cn = (t, r, a) => {
    var i = 8, [s, ...l] = $n(t, r), h = s.toWireType.bind(s), d = l.map((w) => w.readValueFromPointer.bind(w));
    t--;
    var v = new Array(t), y = (w, F, P, j) => {
      for (var k = 0, M = 0; M < t; ++M) v[M] = d[M](j + k), k += i;
      var I;
      switch (a) {
        case 0:
          I = ht.toValue(w).apply(null, v);
          break;
        case 2:
          I = Reflect.construct(ht.toValue(w), v);
          break;
        case 3:
          I = v[0];
          break;
        case 1:
          I = ht.toValue(w)[se(F)](...v);
          break;
      }
      return bn(h, P, I);
    }, g = `methodCaller<(${l.map((w) => w.name)}) => ${s.name}>`;
    return oe(zt(g, y));
  }, Pn = (t) => t ? (t = se(t), ht.toHandle(globalThis[t])) : ht.toHandle(globalThis), _n = (t) => {
    t > 9 && (At[t + 1] += 1);
  }, An = (t, r, a, i, s) => xr[t](r, a, i, s), On = (t) => {
    var r = ht.toValue(t);
    mr(r), Sr(t);
  }, Fr = (t, r, a, i) => {
    var s = (/* @__PURE__ */ new Date()).getFullYear(), l = new Date(s, 0, 1), h = new Date(s, 6, 1), d = l.getTimezoneOffset(), v = h.getTimezoneOffset(), y = Math.max(d, v);
    C[t >> 2] = y * 60, dt[r >> 2] = +(d != v);
    var g = (P) => {
      var j = P >= 0 ? "-" : "+", k = Math.abs(P), M = String(Math.floor(k / 60)).padStart(2, "0"), I = String(k % 60).padStart(2, "0");
      return `UTC${j}${M}${I}`;
    }, w = g(d), F = g(v);
    v < d ? (It(w, a, 17), It(F, i, 17)) : (It(w, i, 17), It(F, a, 17));
  }, Sn = () => 2147483648, Nt = (t, r) => Math.ceil(t / r) * r, En = (t) => {
    var r = lr.buffer.byteLength, a = (t - r + 65535) / 65536 | 0;
    try {
      return lr.grow(a), dr(), 1;
    } catch {
    }
  }, xn = (t) => {
    var r = V.length;
    t >>>= 0;
    var a = Sn();
    if (t > a) return false;
    for (var i = 1; i <= 4; i *= 2) {
      var s = r * (1 + 0.2 / i);
      s = Math.min(s, t + 100663296);
      var l = Math.min(a, Nt(Math.max(t, s), 65536)), h = En(l);
      if (h) return true;
    }
    return false;
  }, Rr = {}, Fn = () => D || "./this.program", Gt = () => {
    if (!Gt.strings) {
      var t = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: t, _: Fn() };
      for (var a in Rr) Rr[a] === void 0 ? delete r[a] : r[a] = Rr[a];
      var i = [];
      for (var a in r) i.push(`${a}=${r[a]}`);
      Gt.strings = i;
    }
    return Gt.strings;
  }, Rn = (t, r) => {
    var a = 0, i = 0;
    for (var s of Gt()) {
      var l = r + a;
      C[t + i >> 2] = l, a += It(s, l, 1 / 0) + 1, i += 4;
    }
    return 0;
  }, jn = (t, r) => {
    var a = Gt();
    C[t >> 2] = a.length;
    var i = 0;
    for (var s of a) i += ae(s) + 1;
    return C[r >> 2] = i, 0;
  }, Wn = (t) => 52, ue = (t, r, a, i) => 52;
  function mt(t, r, a, i, s) {
    return 70;
  }
  var jr = [null, [], []], le = (t, r) => {
    var a = jr[t];
    r === 0 || r === 10 ? ((t === 1 ? xt : q)(Yt(a)), a.length = 0) : a.push(r);
  }, O = (t, r, a, i) => {
    for (var s = 0, l = 0; l < a; l++) {
      var h = C[r >> 2], d = C[r + 4 >> 2];
      r += 8;
      for (var v = 0; v < d; v++) le(t, V[h + v]);
      s += d;
    }
    return C[i >> 2] = s, 0;
  }, ce = (t) => t;
  if (Ge(), it(), p.noExitRuntime && p.noExitRuntime, p.print && (xt = p.print), p.printErr && (q = p.printErr), p.wasmBinary && (at = p.wasmBinary), p.arguments && p.arguments, p.thisProgram && (D = p.thisProgram), p.preInit) for (typeof p.preInit == "function" && (p.preInit = [p.preInit]); p.preInit.length > 0; ) p.preInit.shift()();
  var Wr, vt, ur, Ir, _, Dr, kr, qt, Mr, fe, he, de, pe, lr, ve;
  function In(t) {
    Wr = t.Ea, vt = p._free = t.Fa, ur = p._malloc = t.Ha, Ir = t.Ia, _ = t.Ja, Dr = t.Ka, kr = t.La, qt = t.Ma, Mr = t.Na, fe = t.Oa, he = t.Pa, ot.viijii = t.Qa, de = ot.iiijj = t.Ra, ot.jiji = t.Sa, pe = ot.jiiii = t.Ta, ot.iiiiij = t.Ua, ot.iiiiijj = t.Va, ot.iiiiiijj = t.Wa, lr = t.Ca, ve = t.Ga;
  }
  var Dn = { s: Ie, v: De, a: ke, j: Me, m: Ue, S: Be, q: Le, W: Ve, d: He, Z: Ft, ma: Ct, ka: Zt, na: ze, ja: Jt, ea: Pt, za: gr, da: wr, ua: rr, xa: Ar, wa: en, I: nn, sa: an, $: Kr, O: te, y: ee, t: on, ya: ne, ta: ln, T: vn, C: yn, Aa: mn, va: gn, N: Cn, Ba: Sr, F: Pn, U: _n, M: An, oa: On, fa: Fr, ia: xn, ga: Rn, ha: jn, X: Wn, la: ue, ba: mt, Y: O, K: ia, D: ua, P: Hn, V: e, r: ra, b: Ln, G: aa, qa: ca, c: zn, pa: fa, h: Vn, i: qn, p: Jn, R: na, w: Kn, E: ta, L: ea, z: la, J: n, ca: o, aa: u, g: Nn, k: kn, e: Bn, f: Un, Q: Qt, l: Mn, ra: oa, o: Xn, A: Qn, u: sa, _: Zn, B: ha, n: Gn, H: Yn, x: ce };
  function kn(t, r) {
    var a = b();
    try {
      x(t)(r);
    } catch (i) {
      if ($(a), i !== i + 0) throw i;
      _(1, 0);
    }
  }
  function Mn(t, r, a, i, s) {
    var l = b();
    try {
      x(t)(r, a, i, s);
    } catch (h) {
      if ($(l), h !== h + 0) throw h;
      _(1, 0);
    }
  }
  function Un(t, r, a, i) {
    var s = b();
    try {
      x(t)(r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      _(1, 0);
    }
  }
  function Bn(t, r, a) {
    var i = b();
    try {
      x(t)(r, a);
    } catch (s) {
      if ($(i), s !== s + 0) throw s;
      _(1, 0);
    }
  }
  function Ln(t, r) {
    var a = b();
    try {
      return x(t)(r);
    } catch (i) {
      if ($(a), i !== i + 0) throw i;
      _(1, 0);
    }
  }
  function Vn(t, r, a, i) {
    var s = b();
    try {
      return x(t)(r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      _(1, 0);
    }
  }
  function Hn(t, r, a, i, s, l) {
    var h = b();
    try {
      return x(t)(r, a, i, s, l);
    } catch (d) {
      if ($(h), d !== d + 0) throw d;
      _(1, 0);
    }
  }
  function zn(t, r, a) {
    var i = b();
    try {
      return x(t)(r, a);
    } catch (s) {
      if ($(i), s !== s + 0) throw s;
      _(1, 0);
    }
  }
  function Nn(t) {
    var r = b();
    try {
      x(t)();
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      _(1, 0);
    }
  }
  function Gn(t, r, a, i, s, l, h, d, v, y, g) {
    var w = b();
    try {
      x(t)(r, a, i, s, l, h, d, v, y, g);
    } catch (F) {
      if ($(w), F !== F + 0) throw F;
      _(1, 0);
    }
  }
  function qn(t, r, a, i, s) {
    var l = b();
    try {
      return x(t)(r, a, i, s);
    } catch (h) {
      if ($(l), h !== h + 0) throw h;
      _(1, 0);
    }
  }
  function Qn(t, r, a, i, s, l, h) {
    var d = b();
    try {
      x(t)(r, a, i, s, l, h);
    } catch (v) {
      if ($(d), v !== v + 0) throw v;
      _(1, 0);
    }
  }
  function Yn(t, r, a, i, s, l, h, d, v, y, g, w, F, P, j, k) {
    var M = b();
    try {
      x(t)(r, a, i, s, l, h, d, v, y, g, w, F, P, j, k);
    } catch (I) {
      if ($(M), I !== I + 0) throw I;
      _(1, 0);
    }
  }
  function Zn(t, r, a, i, s, l, h, d, v) {
    var y = b();
    try {
      x(t)(r, a, i, s, l, h, d, v);
    } catch (g) {
      if ($(y), g !== g + 0) throw g;
      _(1, 0);
    }
  }
  function Jn(t, r, a, i, s, l) {
    var h = b();
    try {
      return x(t)(r, a, i, s, l);
    } catch (d) {
      if ($(h), d !== d + 0) throw d;
      _(1, 0);
    }
  }
  function Xn(t, r, a, i, s, l) {
    var h = b();
    try {
      x(t)(r, a, i, s, l);
    } catch (d) {
      if ($(h), d !== d + 0) throw d;
      _(1, 0);
    }
  }
  function Kn(t, r, a, i, s, l, h) {
    var d = b();
    try {
      return x(t)(r, a, i, s, l, h);
    } catch (v) {
      if ($(d), v !== v + 0) throw v;
      _(1, 0);
    }
  }
  function ta(t, r, a, i, s, l, h, d) {
    var v = b();
    try {
      return x(t)(r, a, i, s, l, h, d);
    } catch (y) {
      if ($(v), y !== y + 0) throw y;
      _(1, 0);
    }
  }
  function ra(t) {
    var r = b();
    try {
      return x(t)();
    } catch (a) {
      if ($(r), a !== a + 0) throw a;
      _(1, 0);
    }
  }
  function ea(t, r, a, i, s, l, h, d, v) {
    var y = b();
    try {
      return x(t)(r, a, i, s, l, h, d, v);
    } catch (g) {
      if ($(y), g !== g + 0) throw g;
      _(1, 0);
    }
  }
  function na(t, r, a, i, s, l, h) {
    var d = b();
    try {
      return x(t)(r, a, i, s, l, h);
    } catch (v) {
      if ($(d), v !== v + 0) throw v;
      _(1, 0);
    }
  }
  function aa(t, r, a, i) {
    var s = b();
    try {
      return x(t)(r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      _(1, 0);
    }
  }
  function ia(t, r, a, i) {
    var s = b();
    try {
      return x(t)(r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      _(1, 0);
    }
  }
  function oa(t, r, a, i, s, l, h, d) {
    var v = b();
    try {
      x(t)(r, a, i, s, l, h, d);
    } catch (y) {
      if ($(v), y !== y + 0) throw y;
      _(1, 0);
    }
  }
  function sa(t, r, a, i, s, l, h, d) {
    var v = b();
    try {
      x(t)(r, a, i, s, l, h, d);
    } catch (y) {
      if ($(v), y !== y + 0) throw y;
      _(1, 0);
    }
  }
  function ua(t, r, a, i, s, l) {
    var h = b();
    try {
      return x(t)(r, a, i, s, l);
    } catch (d) {
      if ($(h), d !== d + 0) throw d;
      _(1, 0);
    }
  }
  function la(t, r, a, i, s, l, h, d, v, y) {
    var g = b();
    try {
      return x(t)(r, a, i, s, l, h, d, v, y);
    } catch (w) {
      if ($(g), w !== w + 0) throw w;
      _(1, 0);
    }
  }
  function ca(t, r, a) {
    var i = b();
    try {
      return x(t)(r, a);
    } catch (s) {
      if ($(i), s !== s + 0) throw s;
      _(1, 0);
    }
  }
  function fa(t, r, a, i, s) {
    var l = b();
    try {
      return x(t)(r, a, i, s);
    } catch (h) {
      if ($(l), h !== h + 0) throw h;
      _(1, 0);
    }
  }
  function ha(t, r, a, i, s, l, h, d, v, y) {
    var g = b();
    try {
      x(t)(r, a, i, s, l, h, d, v, y);
    } catch (w) {
      if ($(g), w !== w + 0) throw w;
      _(1, 0);
    }
  }
  function Qt(t, r, a, i, s, l, h) {
    var d = b();
    try {
      x(t)(r, a, i, s, l, h);
    } catch (v) {
      if ($(d), v !== v + 0) throw v;
      _(1, 0);
    }
  }
  function e(t, r, a, i) {
    var s = b();
    try {
      return x(t)(r, a, i);
    } catch (l) {
      if ($(s), l !== l + 0) throw l;
      _(1, 0);
    }
  }
  function n(t, r, a, i, s, l, h, d, v, y, g, w) {
    var F = b();
    try {
      return x(t)(r, a, i, s, l, h, d, v, y, g, w);
    } catch (P) {
      if ($(F), P !== P + 0) throw P;
      _(1, 0);
    }
  }
  function o(t, r, a, i, s, l, h) {
    var d = b();
    try {
      return de(t, r, a, i, s, l, h);
    } catch (v) {
      if ($(d), v !== v + 0) throw v;
      _(1, 0);
    }
  }
  function u(t, r, a, i, s) {
    var l = b();
    try {
      return pe(t, r, a, i, s);
    } catch (h) {
      if ($(l), h !== h + 0) throw h;
      _(1, 0);
    }
  }
  function c() {
    Ce();
    function t() {
      var r, a;
      p.calledRun = true, !N && (Pe(), (r = X) === null || r === void 0 || r(p), (a = p.onRuntimeInitialized) === null || a === void 0 || a.call(p), _e());
    }
    p.setStatus ? (p.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => p.setStatus(""), 1), t();
    }, 1)) : t();
  }
  var f;
  return f = await Re(), c(), hr ? T = p : T = new Promise((t, r) => {
    X = t, K = r;
  }), T;
}
async function Aa(m, T) {
  return hi(vi, m, T);
}
var yi = Na('<div class="qr-code"></div> <main class="camera-container"><video id="scanner" width="400" height="320" autoplay=""></video> <button id="camera-button">Scan the barcode</button> <button id="camera-button">Take a picture</button> <canvas id="video-feed" width="400" height="320"></canvas> <div class="hi">Hi</div> <input id="send-message" type="text"/> <button>Send Message</button></main>', 3);
function Ci(m, T) {
  Wa(T, true);
  let A, B, p = Ua("");
  const W = { video: { facingMode: "environment" } }, L = { tryHarder: true, maxNumberOfSymbols: 1 };
  Aa("Hello World", { format: "QRCode", scale: 3 });
  function D(N) {
    const X = document.getElementById("scanner");
    navigator.mediaDevices.getUserMedia({ video: W.video, audio: false }).then((K) => {
      X.srcObject = K, X.play();
    }).catch((K) => console.error(`An error occurred ${K}`));
  }
  function z() {
    const N = document.getElementById("scanner"), X = document.getElementById("video-feed"), K = document.querySelector(".hi"), Q = X.getContext("2d");
    Q && N.readyState === N.HAVE_ENOUGH_DATA ? (Q.drawImage(N, 0, 0, X.width, X.height), K.innerText = "Scanning...", X.toBlob((V) => {
      V && pi(V, L).then((J) => {
        if (console.log("Barcodes found: ", J), J && J.length > 0) {
          const tt = J[0].text;
          console.log("barcode message: ", tt), K.innerText = tt;
        } else K.innerText = "No barcode found";
      }).catch((J) => {
        console.error("Error reading barcodes: ", J), K.innerText = "Error scanning barcode";
      });
    }, "image/png")) : K.innerText = "Video not ready - try again";
  }
  Ia(async () => {
    try {
      const X = await Aa("text", { format: "QRCode", scale: 5 });
      B.innerHTML = X.svg;
    } catch (N) {
      console.error("Error generating QR code:", N), B.innerHTML = "<p>Error generating QR code.</p>";
    }
  });
  var st = yi(), St = Da(st);
  Ta(St, (N) => B = N, () => B);
  var Et = Br(St, 2), yt = Br(Ba(Et), 2), xt = Br(yt, 2), q = Br(xt, 6);
  Ga(q), Ta(q, (N) => A = N, () => A);
  var at = Br(q, 2);
  La(Et), da("click", yt, D), da("click", xt, z), qa(q, () => ka(p), (N) => Va(p, N)), da("click", at, () => {
    console.log("Clicked");
  }), za(m, st), Ma();
}
Ha(["click"]);
export {
  Ci as component
};
