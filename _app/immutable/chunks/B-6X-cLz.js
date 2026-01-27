const _t = [["Aztec", "M"], ["Codabar", "L"], ["Code39", "L"], ["Code93", "L"], ["Code128", "L"], ["DataBar", "L"], ["DataBarExpanded", "L"], ["DataMatrix", "M"], ["EAN-8", "L"], ["EAN-13", "L"], ["ITF", "L"], ["MaxiCode", "M"], ["PDF417", "M"], ["QRCode", "M"], ["UPC-A", "L"], ["UPC-E", "L"], ["MicroQRCode", "M"], ["rMQRCode", "M"], ["DXFilmEdge", "L"], ["DataBarLimited", "L"]], At = _t.map(([f]) => f), Ta = At.filter((f, p) => _t[p][1] === "L"), Ca = At.filter((f, p) => _t[p][1] === "M");
function Ct(f) {
  switch (f) {
    case "Linear-Codes":
      return Ta.reduce((p, b) => p | Ct(b), 0);
    case "Matrix-Codes":
      return Ca.reduce((p, b) => p | Ct(b), 0);
    case "Any":
      return (1 << _t.length) - 1;
    case "None":
      return 0;
    default:
      return 1 << At.indexOf(f);
  }
}
function Pa(f) {
  if (f === 0) return "None";
  const p = 31 - Math.clz32(f);
  return At[p];
}
function _a(f) {
  return f.reduce((p, b) => p | Ct(b), 0);
}
const Aa = ["LocalAverage", "GlobalHistogram", "FixedThreshold", "BoolCast"];
function Oa(f) {
  return Aa.indexOf(f);
}
const Mr = ["Unknown", "ASCII", "ISO8859_1", "ISO8859_2", "ISO8859_3", "ISO8859_4", "ISO8859_5", "ISO8859_6", "ISO8859_7", "ISO8859_8", "ISO8859_9", "ISO8859_10", "ISO8859_11", "ISO8859_13", "ISO8859_14", "ISO8859_15", "ISO8859_16", "Cp437", "Cp1250", "Cp1251", "Cp1252", "Cp1256", "Shift_JIS", "Big5", "GB2312", "GB18030", "EUC_JP", "EUC_KR", "UTF16BE", "UTF16BE", "UTF8", "UTF16LE", "UTF32BE", "UTF32LE", "BINARY"];
function Sa(f) {
  return f === "UnicodeBig" ? Mr.indexOf("UTF16BE") : Mr.indexOf(f);
}
const Fa = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
function xa(f) {
  return Fa[f];
}
const Ia = ["Ignore", "Read", "Require"];
function Ra(f) {
  return Ia.indexOf(f);
}
const Ea = ["Plain", "ECI", "HRI", "Hex", "Escaped"];
function Wa(f) {
  return Ea.indexOf(f);
}
const Pt = { formats: [], tryHarder: true, tryRotate: true, tryInvert: true, tryDownscale: true, tryDenoise: false, binarizer: "LocalAverage", isPure: false, downscaleFactor: 3, downscaleThreshold: 500, minLineCount: 2, maxNumberOfSymbols: 255, tryCode39ExtendedMode: true, returnErrors: false, eanAddOnSymbol: "Ignore", textMode: "HRI", characterSet: "Unknown" };
function Br(f) {
  return { ...f, formats: _a(f.formats), binarizer: Oa(f.binarizer), eanAddOnSymbol: Ra(f.eanAddOnSymbol), textMode: Wa(f.textMode), characterSet: Sa(f.characterSet) };
}
function ja(f) {
  return { ...f, format: Pa(f.format), contentType: xa(f.contentType), eccLevel: f.ecLevel };
}
function kr(f) {
  var p;
  return { ...f, image: (p = f.image && new Blob([new Uint8Array(f.image)], { type: "image/png" })) != null ? p : null };
}
const Nt = { format: "QRCode", readerInit: false, forceSquareDataMatrix: false, ecLevel: "", scale: 0, sizeHint: 0, rotate: 0, withHRT: false, withQuietZones: true, options: "" };
function Ua(f) {
  return { ...f, format: Ct(f.format) };
}
const La = { locateFile: (f, p) => {
  const b = f.match(/_(.+?)\.wasm$/);
  return b ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.2.4/dist/${b[1]}/${f}` : p + f;
} }, zt = /* @__PURE__ */ new WeakMap();
function Da(f, p) {
  return Object.is(f, p) || Object.keys(f).length === Object.keys(p).length && Object.keys(f).every((b) => Object.hasOwn(p, b) && f[b] === p[b]);
}
function Gt(f, { overrides: p, equalityFn: b = Da, fireImmediately: U = false } = {}) {
  var l;
  const [F, x] = (l = zt.get(f)) != null ? l : [La], I = p ?? F;
  let S;
  if (U) {
    if (x && (S = b(F, I))) return x;
    const W = f({ ...I });
    return zt.set(f, [I, W]), W;
  }
  (S ?? b(F, I)) || zt.set(f, [I]);
}
async function Ma(f, p, b = Pt) {
  const U = { ...Pt, ...b }, l = await Gt(f, { fireImmediately: true });
  let F, x;
  if ("width" in p && "height" in p && "data" in p) {
    const { data: S, data: { byteLength: W }, width: Z, height: Ot } = p;
    x = l._malloc(W), l.HEAPU8.set(S, x), F = l.readBarcodesFromPixmap(x, Z, Ot, Br(U));
  } else {
    let S, W;
    if ("buffer" in p) [S, W] = [p.byteLength, p];
    else if ("byteLength" in p) [S, W] = [p.byteLength, new Uint8Array(p)];
    else if ("size" in p) [S, W] = [p.size, new Uint8Array(await p.arrayBuffer())];
    else throw new TypeError("Invalid input type");
    x = l._malloc(S), l.HEAPU8.set(W, x), F = l.readBarcodesFromImage(x, S, Br(U));
  }
  l._free(x);
  const I = [];
  for (let S = 0; S < F.size(); ++S) I.push(ja(F.get(S)));
  return I;
}
async function Ba(f, p, b = Nt) {
  const U = { ...Nt, ...b }, l = Ua(U), F = await Gt(f, { fireImmediately: true });
  if (typeof p == "string") return kr(F.writeBarcodeFromText(p, l));
  const { byteLength: x } = p, I = F._malloc(x);
  F.HEAPU8.set(p, I);
  const S = F.writeBarcodeFromBytes(I, x, l);
  return F._free(I), kr(S);
}
({ ...Pt, formats: [...Pt.formats] });
({ ...Nt });
async function qt(f = {}) {
  var p, b, U, l = f, F = !!globalThis.window, x = typeof Bun < "u", I = !!globalThis.WorkerGlobalScope;
  !((b = globalThis.process) === null || b === void 0 || (b = b.versions) === null || b === void 0) && b.node && ((U = globalThis.process) === null || U === void 0 ? void 0 : U.type) != "renderer";
  var S = "./this.program", W, Z = "";
  function Ot(t) {
    return l.locateFile ? l.locateFile(t, Z) : Z + t;
  }
  var Qt, St;
  if (F || I || x) {
    try {
      Z = new URL(".", W).href;
    } catch {
    }
    I && (St = (t) => {
      var r = new XMLHttpRequest();
      return r.open("GET", t, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
    }), Qt = async (t) => {
      var r = await fetch(t, { credentials: "same-origin" });
      if (r.ok) return r.arrayBuffer();
      throw new Error(r.status + " : " + r.url);
    };
  }
  var Jt = console.log.bind(console), J = console.error.bind(console), K, Xt = false, Yt, Zt, z, M, st, tt, rt, T, Kt, tr, rr = false;
  function er() {
    var t = wt.buffer;
    z = new Int8Array(t), st = new Int16Array(t), l.HEAPU8 = M = new Uint8Array(t), tt = new Uint16Array(t), rt = new Int32Array(t), T = new Uint32Array(t), Kt = new Float32Array(t), tr = new Float64Array(t);
  }
  function Hr() {
    if (l.preRun) for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; ) Kr(l.preRun.shift());
    nr(ir);
  }
  function Vr() {
    rr = true, ot.Da();
  }
  function zr() {
    if (l.postRun) for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; ) Zr(l.postRun.shift());
    nr(ar);
  }
  function Ft(t) {
    var r, e;
    (r = l.onAbort) === null || r === void 0 || r.call(l, t), t = "Aborted(" + t + ")", J(t), Xt = true, t += ". Build with -sASSERTIONS for more info.";
    var n = new WebAssembly.RuntimeError(t);
    throw (e = Zt) === null || e === void 0 || e(n), n;
  }
  var ut;
  function Nr() {
    return Ot("zxing_full.wasm");
  }
  function Gr(t) {
    if (t == ut && K) return new Uint8Array(K);
    if (St) return St(t);
    throw "both async and sync fetching of the wasm failed";
  }
  async function qr(t) {
    if (!K) try {
      var r = await Qt(t);
      return new Uint8Array(r);
    } catch {
    }
    return Gr(t);
  }
  async function Qr(t, r) {
    try {
      var e = await qr(t), n = await WebAssembly.instantiate(e, r);
      return n;
    } catch (a) {
      J(`failed to asynchronously prepare wasm: ${a}`), Ft(a);
    }
  }
  async function Jr(t, r, e) {
    if (!t && WebAssembly.instantiateStreaming) try {
      var n = fetch(r, { credentials: "same-origin" }), a = await WebAssembly.instantiateStreaming(n, e);
      return a;
    } catch (i) {
      J(`wasm streaming compile failed: ${i}`), J("falling back to ArrayBuffer instantiation");
    }
    return Qr(r, e);
  }
  function Xr() {
    var t = { a: Dn };
    return t;
  }
  async function Yr() {
    function t(i, o) {
      return ot = i.exports, Ln(ot), er(), ot;
    }
    function r(i) {
      return t(i.instance);
    }
    var e = Xr();
    if (l.instantiateWasm) return new Promise((i, o) => {
      l.instantiateWasm(e, (s, u) => {
        i(t(s));
      });
    });
    ut != null || (ut = Nr());
    var n = await Jr(K, ut, e), a = r(n);
    return a;
  }
  var nr = (t) => {
    for (; t.length > 0; ) t.shift()(l);
  }, ar = [], Zr = (t) => ar.push(t), ir = [], Kr = (t) => ir.push(t), y = (t) => Or(t), m = () => Sr(), ct = [], lt = 0, te = (t) => {
    var r = new xt(t);
    return r.get_caught() || (r.set_caught(true), lt--), r.set_rethrown(false), ct.push(r), xr(t), _r(t);
  }, B = 0, re = () => {
    v(0, 0);
    var t = ct.pop();
    Fr(t.excPtr), B = 0;
  };
  class xt {
    constructor(r) {
      this.excPtr = r, this.ptr = r - 24;
    }
    set_type(r) {
      T[this.ptr + 4 >> 2] = r;
    }
    get_type() {
      return T[this.ptr + 4 >> 2];
    }
    set_destructor(r) {
      T[this.ptr + 8 >> 2] = r;
    }
    get_destructor() {
      return T[this.ptr + 8 >> 2];
    }
    set_caught(r) {
      r = r ? 1 : 0, z[this.ptr + 12] = r;
    }
    get_caught() {
      return z[this.ptr + 12] != 0;
    }
    set_rethrown(r) {
      r = r ? 1 : 0, z[this.ptr + 13] = r;
    }
    get_rethrown() {
      return z[this.ptr + 13] != 0;
    }
    init(r, e) {
      this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(e);
    }
    set_adjusted_ptr(r) {
      T[this.ptr + 16 >> 2] = r;
    }
    get_adjusted_ptr() {
      return T[this.ptr + 16 >> 2];
    }
  }
  var ft = (t) => Ar(t), It = (t) => {
    var r = B;
    if (!r) return ft(0), 0;
    var e = new xt(r);
    e.set_adjusted_ptr(r);
    var n = e.get_type();
    if (!n) return ft(0), r;
    for (var a of t) {
      if (a === 0 || a === n) break;
      var i = e.ptr + 16;
      if (Ir(a, n, i)) return ft(a), r;
    }
    return ft(n), r;
  }, ee = () => It([]), ne = (t) => It([t]), ae = (t, r) => It([t, r]), ie = () => {
    var t = ct.pop();
    t || Ft("no exception to throw");
    var r = t.excPtr;
    throw t.get_rethrown() || (ct.push(t), t.set_rethrown(true), t.set_caught(false), lt++), B = r, B;
  }, oe = (t, r, e) => {
    var n = new xt(t);
    throw n.init(r, e), B = t, lt++, B;
  }, se = () => lt, ue = (t) => {
    throw B || (B = t), B;
  }, or = globalThis.TextDecoder && new TextDecoder(), sr = (t, r, e, n) => {
    var a = r + e;
    if (n) return a;
    for (; t[r] && !(r >= a); ) ++r;
    return r;
  }, ur = function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0;
    var a = sr(t, r, e, n);
    if (a - r > 16 && t.buffer && or) return or.decode(t.subarray(r, a));
    for (var i = ""; r < a; ) {
      var o = t[r++];
      if (!(o & 128)) {
        i += String.fromCharCode(o);
        continue;
      }
      var s = t[r++] & 63;
      if ((o & 224) == 192) {
        i += String.fromCharCode((o & 31) << 6 | s);
        continue;
      }
      var u = t[r++] & 63;
      if ((o & 240) == 224 ? o = (o & 15) << 12 | s << 6 | u : o = (o & 7) << 18 | s << 12 | u << 6 | t[r++] & 63, o < 65536) i += String.fromCharCode(o);
      else {
        var c = o - 65536;
        i += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
      }
    }
    return i;
  }, ce = (t, r, e) => t ? ur(M, t, r, e) : "";
  function le(t, r, e) {
    return 0;
  }
  function fe(t, r, e) {
    return 0;
  }
  var he = (t, r, e) => {
  };
  function pe(t, r, e, n) {
  }
  var de = (t, r) => {
  }, ve = () => Ft(""), ht = {}, Rt = (t) => {
    for (; t.length; ) {
      var r = t.pop(), e = t.pop();
      e(r);
    }
  };
  function et(t) {
    return this.fromWireType(T[t >> 2]);
  }
  var X = {}, N = {}, pt = {}, ye = class extends Error {
    constructor(t) {
      super(t), this.name = "InternalError";
    }
  }, dt = (t) => {
    throw new ye(t);
  }, G = (t, r, e) => {
    t.forEach((s) => pt[s] = r);
    function n(s) {
      var u = e(s);
      u.length !== t.length && dt("Mismatched type converter count");
      for (var c = 0; c < t.length; ++c) L(t[c], u[c]);
    }
    var a = new Array(r.length), i = [], o = 0;
    {
      const s = r;
      for (let u = 0; u < s.length; ++u) {
        const c = s[u];
        N.hasOwnProperty(c) ? a[u] = N[c] : (i.push(c), X.hasOwnProperty(c) || (X[c] = []), X[c].push(() => {
          a[u] = N[c], ++o, o === i.length && n(a);
        }));
      }
    }
    i.length === 0 && n(a);
  }, me = (t) => {
    var r = ht[t];
    delete ht[t];
    var e = r.rawConstructor, n = r.rawDestructor, a = r.fields, i = a.map((o) => o.getterReturnType).concat(a.map((o) => o.setterArgumentType));
    G([t], i, (o) => {
      var s = {};
      {
        const u = a;
        for (let c = 0; c < u.length; ++c) {
          const h = u[c], d = o[c], $ = h.getter, P = h.getterContext, O = o[c + a.length], A = h.setter, _ = h.setterContext;
          s[h.fieldName] = { read: (C) => d.fromWireType($(P, C)), write: (C, Q) => {
            var E = [];
            A(_, C, O.toWireType(E, Q)), Rt(E);
          }, optional: d.optional };
        }
      }
      return [{ name: r.name, fromWireType: (u) => {
        var c = {};
        for (var h in s) c[h] = s[h].read(u);
        return n(u), c;
      }, toWireType: (u, c) => {
        for (var h in s) if (!(h in c) && !s[h].optional) throw new TypeError(`Missing field: "${h}"`);
        var d = e();
        for (h in s) s[h].write(d, c[h]);
        return u !== null && u.push(n, d), d;
      }, readValueFromPointer: et, destructorFunction: n }];
    });
  }, ge = (t, r, e, n, a) => {
  }, R = (t) => {
    for (var r = ""; ; ) {
      var e = M[t++];
      if (!e) return r;
      r += String.fromCharCode(e);
    }
  }, nt = class extends Error {
    constructor(t) {
      super(t), this.name = "BindingError";
    }
  }, w = (t) => {
    throw new nt(t);
  };
  function we(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var n = r.name;
    if (t || w(`type "${n}" must have a positive integer typeid pointer`), N.hasOwnProperty(t)) {
      if (e.ignoreDuplicateRegistrations) return;
      w(`Cannot register type '${n}' twice`);
    }
    if (N[t] = r, delete pt[t], X.hasOwnProperty(t)) {
      var a = X[t];
      delete X[t], a.forEach((i) => i());
    }
  }
  function L(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return we(t, r, e);
  }
  var $e = (t, r, e, n) => {
    r = R(r), L(t, { name: r, fromWireType: function(a) {
      return !!a;
    }, toWireType: function(a, i) {
      return i ? e : n;
    }, readValueFromPointer: function(a) {
      return this.fromWireType(M[a]);
    }, destructorFunction: null });
  }, be = (t) => ({ count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType }), Et = (t) => {
    function r(e) {
      return e.$$.ptrType.registeredClass.name;
    }
    w(r(t) + " instance already deleted");
  }, Wt = false, cr = (t) => {
  }, Te = (t) => {
    t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
  }, lr = (t) => {
    t.count.value -= 1;
    var r = t.count.value === 0;
    r && Te(t);
  }, at = (t) => globalThis.FinalizationRegistry ? (Wt = new FinalizationRegistry((r) => {
    lr(r.$$);
  }), at = (r) => {
    var e = r.$$, n = !!e.smartPtr;
    if (n) {
      var a = { $$: e };
      Wt.register(r, a, r);
    }
    return r;
  }, cr = (r) => Wt.unregister(r), at(t)) : (at = (r) => r, t), Ce = () => {
    let t = vt.prototype;
    Object.assign(t, { isAliasOf(e) {
      if (!(this instanceof vt) || !(e instanceof vt)) return false;
      var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
      e.$$ = e.$$;
      for (var i = e.$$.ptrType.registeredClass, o = e.$$.ptr; n.baseClass; ) a = n.upcast(a), n = n.baseClass;
      for (; i.baseClass; ) o = i.upcast(o), i = i.baseClass;
      return n === i && a === o;
    }, clone() {
      if (this.$$.ptr || Et(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
      var e = at(Object.create(Object.getPrototypeOf(this), { $$: { value: be(this.$$) } }));
      return e.$$.count.value += 1, e.$$.deleteScheduled = false, e;
    }, delete() {
      this.$$.ptr || Et(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && w("Object already scheduled for deletion"), cr(this), lr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || Et(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && w("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
    } });
    const r = Symbol.dispose;
    r && (t[r] = t.delete);
  };
  function vt() {
  }
  var jt = (t, r) => Object.defineProperty(r, "name", { value: t }), fr = {}, hr = (t, r, e) => {
    if (t[r].overloadTable === void 0) {
      var n = t[r];
      t[r] = function() {
        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
        return t[r].overloadTable.hasOwnProperty(i.length) || w(`Function '${e}' called with an invalid number of arguments (${i.length}) - expects one of (${t[r].overloadTable})!`), t[r].overloadTable[i.length].apply(this, i);
      }, t[r].overloadTable = [], t[r].overloadTable[n.argCount] = n;
    }
  }, pr = (t, r, e) => {
    l.hasOwnProperty(t) ? ((e === void 0 || l[t].overloadTable !== void 0 && l[t].overloadTable[e] !== void 0) && w(`Cannot register public name '${t}' twice`), hr(l, t, t), l[t].overloadTable.hasOwnProperty(e) && w(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`), l[t].overloadTable[e] = r) : (l[t] = r, l[t].argCount = e);
  }, Pe = 48, _e = 57, Ae = (t) => {
    t = t.replace(/[^a-zA-Z0-9_]/g, "$");
    var r = t.charCodeAt(0);
    return r >= Pe && r <= _e ? `_${t}` : t;
  };
  function Oe(t, r, e, n, a, i, o, s) {
    this.name = t, this.constructor = r, this.instancePrototype = e, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
  }
  var Ut = (t, r, e) => {
    for (; r !== e; ) r.upcast || w(`Expected null or instance of ${e.name}, got an instance of ${r.name}`), t = r.upcast(t), r = r.baseClass;
    return t;
  }, Lt = (t) => {
    if (t === null) return "null";
    var r = typeof t;
    return r === "object" || r === "array" || r === "function" ? t.toString() : "" + t;
  };
  function Se(t, r) {
    if (r === null) return this.isReference && w(`null is not a valid ${this.name}`), 0;
    r.$$ || w(`Cannot pass "${Lt(r)}" as a ${this.name}`), r.$$.ptr || w(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var e = r.$$.ptrType.registeredClass, n = Ut(r.$$.ptr, e, this.registeredClass);
    return n;
  }
  function Fe(t, r) {
    var e;
    if (r === null) return this.isReference && w(`null is not a valid ${this.name}`), this.isSmartPointer ? (e = this.rawConstructor(), t !== null && t.push(this.rawDestructor, e), e) : 0;
    (!r || !r.$$) && w(`Cannot pass "${Lt(r)}" as a ${this.name}`), r.$$.ptr || w(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && w(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
    var n = r.$$.ptrType.registeredClass;
    if (e = Ut(r.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (r.$$.smartPtr === void 0 && w("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        r.$$.smartPtrType === this ? e = r.$$.smartPtr : w(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        e = r.$$.smartPtr;
        break;
      case 2:
        if (r.$$.smartPtrType === this) e = r.$$.smartPtr;
        else {
          var a = r.clone();
          e = this.rawShare(e, D.toHandle(() => a.delete())), t !== null && t.push(this.rawDestructor, e);
        }
        break;
      default:
        w("Unsupporting sharing policy");
    }
    return e;
  }
  function xe(t, r) {
    if (r === null) return this.isReference && w(`null is not a valid ${this.name}`), 0;
    r.$$ || w(`Cannot pass "${Lt(r)}" as a ${this.name}`), r.$$.ptr || w(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && w(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
    var e = r.$$.ptrType.registeredClass, n = Ut(r.$$.ptr, e, this.registeredClass);
    return n;
  }
  var dr = (t, r, e) => {
    if (r === e) return t;
    if (e.baseClass === void 0) return null;
    var n = dr(t, r, e.baseClass);
    return n === null ? null : e.downcast(n);
  }, Ie = {}, Re = (t, r) => {
    for (r === void 0 && w("ptr should not be undefined"); t.baseClass; ) r = t.upcast(r), t = t.baseClass;
    return r;
  }, Ee = (t, r) => (r = Re(t, r), Ie[r]), yt = (t, r) => {
    (!r.ptrType || !r.ptr) && dt("makeClassHandle requires ptr and ptrType");
    var e = !!r.smartPtrType, n = !!r.smartPtr;
    return e !== n && dt("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, at(Object.create(t, { $$: { value: r, writable: true } }));
  };
  function We(t) {
    var r = this.getPointee(t);
    if (!r) return this.destructor(t), null;
    var e = Ee(this.registeredClass, r);
    if (e !== void 0) {
      if (e.$$.count.value === 0) return e.$$.ptr = r, e.$$.smartPtr = t, e.clone();
      var n = e.clone();
      return this.destructor(t), n;
    }
    function a() {
      return this.isSmartPointer ? yt(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: r, smartPtrType: this, smartPtr: t }) : yt(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
    }
    var i = this.registeredClass.getActualType(r), o = fr[i];
    if (!o) return a.call(this);
    var s;
    this.isConst ? s = o.constPointerType : s = o.pointerType;
    var u = dr(r, this.registeredClass, s.registeredClass);
    return u === null ? a.call(this) : this.isSmartPointer ? yt(s.registeredClass.instancePrototype, { ptrType: s, ptr: u, smartPtrType: this, smartPtr: t }) : yt(s.registeredClass.instancePrototype, { ptrType: s, ptr: u });
  }
  var je = () => {
    Object.assign(mt.prototype, { getPointee(t) {
      return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
    }, destructor(t) {
      var r;
      (r = this.rawDestructor) === null || r === void 0 || r.call(this, t);
    }, readValueFromPointer: et, fromWireType: We });
  };
  function mt(t, r, e, n, a, i, o, s, u, c, h) {
    this.name = t, this.registeredClass = r, this.isReference = e, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = h, !a && r.baseClass === void 0 ? n ? (this.toWireType = Se, this.destructorFunction = null) : (this.toWireType = xe, this.destructorFunction = null) : this.toWireType = Fe;
  }
  var vr = (t, r, e) => {
    l.hasOwnProperty(t) || dt("Replacing nonexistent public symbol"), l[t].overloadTable !== void 0 && e !== void 0 ? l[t].overloadTable[e] = r : (l[t] = r, l[t].argCount = e);
  }, H = {}, Ue = (t, r, e) => {
    t = t.replace(/p/g, "i");
    var n = H[t];
    return n(r, ...e);
  }, yr = [], g = (t) => {
    var r = yr[t];
    return r || (yr[t] = r = Wr.get(t)), r;
  }, Le = function(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t.includes("j")) return Ue(t, r, e);
    var n = g(r), a = n(...e);
    return a;
  }, De = function(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return function() {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return Le(t, r, a, e);
    };
  }, j = function(t, r) {
    t = R(t);
    function e() {
      if (t.includes("j")) return De(t, r);
      var a = g(r);
      return a;
    }
    var n = e();
    return typeof n != "function" && w(`unknown function pointer with signature ${t}: ${r}`), n;
  };
  class Me extends Error {
  }
  var mr = (t) => {
    var r = Pr(t), e = R(r);
    return V(r), e;
  }, gt = (t, r) => {
    var e = [], n = {};
    function a(i) {
      if (!n[i] && !N[i]) {
        if (pt[i]) {
          pt[i].forEach(a);
          return;
        }
        e.push(i), n[i] = true;
      }
    }
    throw r.forEach(a), new Me(`${t}: ` + e.map(mr).join([", "]));
  }, Be = (t, r, e, n, a, i, o, s, u, c, h, d, $) => {
    h = R(h), i = j(a, i), s && (s = j(o, s)), c && (c = j(u, c)), $ = j(d, $);
    var P = Ae(h);
    pr(P, function() {
      gt(`Cannot construct ${h} due to unbound types`, [n]);
    }), G([t, r, e], n ? [n] : [], (O) => {
      O = O[0];
      var A, _;
      n ? (A = O.registeredClass, _ = A.instancePrototype) : _ = vt.prototype;
      var C = jt(h, function() {
        if (Object.getPrototypeOf(this) !== Q) throw new nt(`Use 'new' to construct ${h}`);
        if (E.constructor_body === void 0) throw new nt(`${h} has no accessible constructor`);
        for (var Lr = arguments.length, bt = new Array(Lr), Tt = 0; Tt < Lr; Tt++) bt[Tt] = arguments[Tt];
        var Dr = E.constructor_body[bt.length];
        if (Dr === void 0) throw new nt(`Tried to invoke ctor of ${h} with invalid number of parameters (${bt.length}) - expected (${Object.keys(E.constructor_body).toString()}) parameters instead!`);
        return Dr.apply(this, bt);
      }), Q = Object.create(_, { constructor: { value: C } });
      C.prototype = Q;
      var E = new Oe(h, C, Q, $, A, i, s, c);
      if (E.baseClass) {
        var k, $t;
        ($t = (k = E.baseClass).__derivedClasses) !== null && $t !== void 0 || (k.__derivedClasses = []), E.baseClass.__derivedClasses.push(E);
      }
      var ba = new mt(h, E, true, false, false), jr = new mt(h + "*", E, false, false, false), Ur = new mt(h + " const*", E, false, true, false);
      return fr[t] = { pointerType: jr, constPointerType: Ur }, vr(P, C), [ba, jr, Ur];
    });
  }, Dt = (t, r) => {
    for (var e = [], n = 0; n < t; n++) e.push(T[r + n * 4 >> 2]);
    return e;
  };
  function ke(t) {
    for (var r = 1; r < t.length; ++r) if (t[r] !== null && t[r].destructorFunction === void 0) return true;
    return false;
  }
  function Mt(t, r, e, n, a, i) {
    var o = r.length;
    o < 2 && w("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var s = r[1] !== null && e !== null, u = ke(r), c = !r[0].isVoid, h = o - 2, d = new Array(h), $ = [], P = [], O = function() {
      P.length = 0;
      var A;
      $.length = s ? 2 : 1, $[0] = a, s && (A = r[1].toWireType(P, this), $[1] = A);
      for (var _ = 0; _ < h; ++_) d[_] = r[_ + 2].toWireType(P, _ < 0 || arguments.length <= _ ? void 0 : arguments[_]), $.push(d[_]);
      var C = n(...$);
      function Q(E) {
        if (u) Rt(P);
        else for (var k = s ? 1 : 2; k < r.length; k++) {
          var $t = k === 1 ? A : d[k - 2];
          r[k].destructorFunction !== null && r[k].destructorFunction($t);
        }
        if (c) return r[0].fromWireType(E);
      }
      return Q(C);
    };
    return jt(t, O);
  }
  var He = (t, r, e, n, a, i) => {
    var o = Dt(r, e);
    a = j(n, a), G([], [t], (s) => {
      s = s[0];
      var u = `constructor ${s.name}`;
      if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[r - 1] !== void 0) throw new nt(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return s.registeredClass.constructor_body[r - 1] = () => {
        gt(`Cannot construct ${s.name} due to unbound types`, o);
      }, G([], o, (c) => (c.splice(1, 0, null), s.registeredClass.constructor_body[r - 1] = Mt(u, c, null, a, i), [])), [];
    });
  }, gr = (t) => {
    t = t.trim();
    const r = t.indexOf("(");
    return r === -1 ? t : t.slice(0, r);
  }, Ve = (t, r, e, n, a, i, o, s, u, c) => {
    var h = Dt(e, n);
    r = R(r), r = gr(r), i = j(a, i), G([], [t], (d) => {
      d = d[0];
      var $ = `${d.name}.${r}`;
      r.startsWith("@@") && (r = Symbol[r.substring(2)]), s && d.registeredClass.pureVirtualFunctions.push(r);
      function P() {
        gt(`Cannot call ${$} due to unbound types`, h);
      }
      var O = d.registeredClass.instancePrototype, A = O[r];
      return A === void 0 || A.overloadTable === void 0 && A.className !== d.name && A.argCount === e - 2 ? (P.argCount = e - 2, P.className = d.name, O[r] = P) : (hr(O, r, $), O[r].overloadTable[e - 2] = P), G([], h, (_) => {
        var C = Mt($, _, d, i, o);
        return O[r].overloadTable === void 0 ? (C.argCount = e - 2, O[r] = C) : O[r].overloadTable[e - 2] = C, [];
      }), [];
    });
  }, wr = [], q = [0, 1, , 1, null, 1, true, 1, false, 1], Bt = (t) => {
    t > 9 && --q[t + 1] === 0 && (q[t] = void 0, wr.push(t));
  }, D = { toValue: (t) => (t || w(`Cannot use deleted val. handle = ${t}`), q[t]), toHandle: (t) => {
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
        const r = wr.pop() || q.length;
        return q[r] = t, q[r + 1] = 1, r;
      }
    }
  } }, $r = { name: "emscripten::val", fromWireType: (t) => {
    var r = D.toValue(t);
    return Bt(t), r;
  }, toWireType: (t, r) => D.toHandle(r), readValueFromPointer: et, destructorFunction: null }, ze = (t) => L(t, $r), Ne = (t, r) => {
    switch (r) {
      case 4:
        return function(e) {
          return this.fromWireType(Kt[e >> 2]);
        };
      case 8:
        return function(e) {
          return this.fromWireType(tr[e >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r}): ${t}`);
    }
  }, Ge = (t, r, e) => {
    r = R(r), L(t, { name: r, fromWireType: (n) => n, toWireType: (n, a) => a, readValueFromPointer: Ne(r, e), destructorFunction: null });
  }, qe = (t, r, e, n, a, i, o, s) => {
    var u = Dt(r, e);
    t = R(t), t = gr(t), a = j(n, a), pr(t, function() {
      gt(`Cannot call ${t} due to unbound types`, u);
    }, r - 1), G([], u, (c) => {
      var h = [c[0], null].concat(c.slice(1));
      return vr(t, Mt(t, h, null, a, i), r - 1), [];
    });
  }, Qe = (t, r, e) => {
    switch (r) {
      case 1:
        return e ? (n) => z[n] : (n) => M[n];
      case 2:
        return e ? (n) => st[n >> 1] : (n) => tt[n >> 1];
      case 4:
        return e ? (n) => rt[n >> 2] : (n) => T[n >> 2];
      default:
        throw new TypeError(`invalid integer width (${r}): ${t}`);
    }
  }, Je = (t, r, e, n, a) => {
    r = R(r);
    const i = n === 0;
    let o = (u) => u;
    if (i) {
      var s = 32 - 8 * e;
      o = (u) => u << s >>> s, a = o(a);
    }
    L(t, { name: r, fromWireType: o, toWireType: (u, c) => c, readValueFromPointer: Qe(r, e, n !== 0), destructorFunction: null });
  }, Xe = (t, r, e) => {
    var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = n[r];
    function i(o) {
      var s = T[o >> 2], u = T[o + 4 >> 2];
      return new a(z.buffer, u, s);
    }
    e = R(e), L(t, { name: e, fromWireType: i, readValueFromPointer: i }, { ignoreDuplicateRegistrations: true });
  }, Ye = Object.assign({ optional: true }, $r), Ze = (t, r) => {
    L(t, Ye);
  }, Ke = (t, r, e, n) => {
    if (!(n > 0)) return 0;
    for (var a = e, i = e + n - 1, o = 0; o < t.length; ++o) {
      var s = t.codePointAt(o);
      if (s <= 127) {
        if (e >= i) break;
        r[e++] = s;
      } else if (s <= 2047) {
        if (e + 1 >= i) break;
        r[e++] = 192 | s >> 6, r[e++] = 128 | s & 63;
      } else if (s <= 65535) {
        if (e + 2 >= i) break;
        r[e++] = 224 | s >> 12, r[e++] = 128 | s >> 6 & 63, r[e++] = 128 | s & 63;
      } else {
        if (e + 3 >= i) break;
        r[e++] = 240 | s >> 18, r[e++] = 128 | s >> 12 & 63, r[e++] = 128 | s >> 6 & 63, r[e++] = 128 | s & 63, o++;
      }
    }
    return r[e] = 0, e - a;
  }, Y = (t, r, e) => Ke(t, M, r, e), br = (t) => {
    for (var r = 0, e = 0; e < t.length; ++e) {
      var n = t.charCodeAt(e);
      n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++e) : r += 3;
    }
    return r;
  }, tn = (t, r) => {
    r = R(r), L(t, { name: r, fromWireType(e) {
      var n = T[e >> 2], a = e + 4, i;
      return i = ce(a, n, true), V(e), i;
    }, toWireType(e, n) {
      n instanceof ArrayBuffer && (n = new Uint8Array(n));
      var a, i = typeof n == "string";
      i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || w("Cannot pass non-string to std::string"), i ? a = br(n) : a = n.length;
      var o = Vt(4 + a + 1), s = o + 4;
      return T[o >> 2] = a, i ? Y(n, s, a + 1) : M.set(n, s), e !== null && e.push(V, o), o;
    }, readValueFromPointer: et, destructorFunction(e) {
      V(e);
    } });
  }, Tr = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, rn = (t, r, e) => {
    var n = t >> 1, a = sr(tt, n, r / 2, e);
    if (a - n > 16 && Tr) return Tr.decode(tt.subarray(n, a));
    for (var i = "", o = n; o < a; ++o) {
      var s = tt[o];
      i += String.fromCharCode(s);
    }
    return i;
  }, en = (t, r, e) => {
    if (e != null || (e = 2147483647), e < 2) return 0;
    e -= 2;
    for (var n = r, a = e < t.length * 2 ? e / 2 : t.length, i = 0; i < a; ++i) {
      var o = t.charCodeAt(i);
      st[r >> 1] = o, r += 2;
    }
    return st[r >> 1] = 0, r - n;
  }, nn = (t) => t.length * 2, an = (t, r, e) => {
    for (var n = "", a = t >> 2, i = 0; !(i >= r / 4); i++) {
      var o = T[a + i];
      if (!o && !e) break;
      n += String.fromCodePoint(o);
    }
    return n;
  }, on = (t, r, e) => {
    if (e != null || (e = 2147483647), e < 4) return 0;
    for (var n = r, a = n + e - 4, i = 0; i < t.length; ++i) {
      var o = t.codePointAt(i);
      if (o > 65535 && i++, rt[r >> 2] = o, r += 4, r + 4 > a) break;
    }
    return rt[r >> 2] = 0, r - n;
  }, sn = (t) => {
    for (var r = 0, e = 0; e < t.length; ++e) {
      var n = t.codePointAt(e);
      n > 65535 && e++, r += 4;
    }
    return r;
  }, un = (t, r, e) => {
    e = R(e);
    var n, a, i;
    r === 2 ? (n = rn, a = en, i = nn) : (n = an, a = on, i = sn), L(t, { name: e, fromWireType: (o) => {
      var s = T[o >> 2], u = n(o + 4, s * r, true);
      return V(o), u;
    }, toWireType: (o, s) => {
      typeof s != "string" && w(`Cannot pass non-string to C++ string type ${e}`);
      var u = i(s), c = Vt(4 + u + r);
      return T[c >> 2] = u / r, a(s, c + 4, u + r), o !== null && o.push(V, c), c;
    }, readValueFromPointer: et, destructorFunction(o) {
      V(o);
    } });
  }, cn = (t, r, e, n, a, i) => {
    ht[t] = { name: R(r), rawConstructor: j(e, n), rawDestructor: j(a, i), fields: [] };
  }, ln = (t, r, e, n, a, i, o, s, u, c) => {
    ht[t].fields.push({ fieldName: R(r), getterReturnType: e, getter: j(n, a), getterContext: i, setterArgumentType: o, setter: j(s, u), setterContext: c });
  }, fn = (t, r) => {
    r = R(r), L(t, { isVoid: true, name: r, fromWireType: () => {
    }, toWireType: (e, n) => {
    } });
  }, kt = [], hn = (t) => {
    var r = kt.length;
    return kt.push(t), r;
  }, pn = (t, r) => {
    var e = N[t];
    return e === void 0 && w(`${r} has unknown type ${mr(t)}`), e;
  }, dn = (t, r) => {
    for (var e = new Array(t), n = 0; n < t; ++n) e[n] = pn(T[r + n * 4 >> 2], `parameter ${n}`);
    return e;
  }, vn = (t, r, e) => {
    var n = [], a = t(n, e);
    return n.length && (T[r >> 2] = D.toHandle(n)), a;
  }, yn = {}, Cr = (t) => {
    var r = yn[t];
    return r === void 0 ? R(t) : r;
  }, mn = (t, r, e) => {
    var n = 8, [a, ...i] = dn(t, r), o = a.toWireType.bind(a), s = i.map((d) => d.readValueFromPointer.bind(d));
    t--;
    var u = new Array(t), c = (d, $, P, O) => {
      for (var A = 0, _ = 0; _ < t; ++_) u[_] = s[_](O + A), A += n;
      var C;
      switch (e) {
        case 0:
          C = D.toValue(d).apply(null, u);
          break;
        case 2:
          C = Reflect.construct(D.toValue(d), u);
          break;
        case 3:
          C = u[0];
          break;
        case 1:
          C = D.toValue(d)[Cr($)](...u);
          break;
      }
      return vn(o, P, C);
    }, h = `methodCaller<(${i.map((d) => d.name)}) => ${a.name}>`;
    return hn(jt(h, c));
  }, gn = (t) => t ? (t = Cr(t), D.toHandle(globalThis[t])) : D.toHandle(globalThis), wn = (t) => {
    t > 9 && (q[t + 1] += 1);
  }, $n = (t, r, e, n, a) => kt[t](r, e, n, a), bn = (t) => {
    var r = D.toValue(t);
    Rt(r), Bt(t);
  }, Tn = (t, r, e, n) => {
    var a = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(a, 0, 1), o = new Date(a, 6, 1), s = i.getTimezoneOffset(), u = o.getTimezoneOffset(), c = Math.max(s, u);
    T[t >> 2] = c * 60, rt[r >> 2] = +(s != u);
    var h = (P) => {
      var O = P >= 0 ? "-" : "+", A = Math.abs(P), _ = String(Math.floor(A / 60)).padStart(2, "0"), C = String(A % 60).padStart(2, "0");
      return `UTC${O}${_}${C}`;
    }, d = h(s), $ = h(u);
    u < s ? (Y(d, e, 17), Y($, n, 17)) : (Y(d, n, 17), Y($, e, 17));
  }, Cn = () => 2147483648, Pn = (t, r) => Math.ceil(t / r) * r, _n = (t) => {
    var r = wt.buffer.byteLength, e = (t - r + 65535) / 65536 | 0;
    try {
      return wt.grow(e), er(), 1;
    } catch {
    }
  }, An = (t) => {
    var r = M.length;
    t >>>= 0;
    var e = Cn();
    if (t > e) return false;
    for (var n = 1; n <= 4; n *= 2) {
      var a = r * (1 + 0.2 / n);
      a = Math.min(a, t + 100663296);
      var i = Math.min(e, Pn(Math.max(t, a), 65536)), o = _n(i);
      if (o) return true;
    }
    return false;
  }, Ht = {}, On = () => S || "./this.program", it = () => {
    if (!it.strings) {
      var t = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: t, _: On() };
      for (var e in Ht) Ht[e] === void 0 ? delete r[e] : r[e] = Ht[e];
      var n = [];
      for (var e in r) n.push(`${e}=${r[e]}`);
      it.strings = n;
    }
    return it.strings;
  }, Sn = (t, r) => {
    var e = 0, n = 0;
    for (var a of it()) {
      var i = r + e;
      T[t + n >> 2] = i, e += Y(a, i, 1 / 0) + 1, n += 4;
    }
    return 0;
  }, Fn = (t, r) => {
    var e = it();
    T[t >> 2] = e.length;
    var n = 0;
    for (var a of e) n += br(a) + 1;
    return T[r >> 2] = n, 0;
  }, xn = (t) => 52, In = (t, r, e, n) => 52;
  function Rn(t, r, e, n, a) {
    return 70;
  }
  var En = [null, [], []], Wn = (t, r) => {
    var e = En[t];
    r === 0 || r === 10 ? ((t === 1 ? Jt : J)(ur(e)), e.length = 0) : e.push(r);
  }, jn = (t, r, e, n) => {
    for (var a = 0, i = 0; i < e; i++) {
      var o = T[r >> 2], s = T[r + 4 >> 2];
      r += 8;
      for (var u = 0; u < s; u++) Wn(t, M[o + u]);
      a += s;
    }
    return T[n >> 2] = a, 0;
  }, Un = (t) => t;
  if (Ce(), je(), l.noExitRuntime && l.noExitRuntime, l.print && (Jt = l.print), l.printErr && (J = l.printErr), l.wasmBinary && (K = l.wasmBinary), l.arguments && l.arguments, l.thisProgram && (S = l.thisProgram), l.preInit) for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); l.preInit.length > 0; ) l.preInit.shift()();
  var Pr, V, Vt, _r, v, Ar, Or, Sr, Fr, xr, Ir, Rr, Er, wt, Wr;
  function Ln(t) {
    Pr = t.Ea, V = l._free = t.Fa, Vt = l._malloc = t.Ha, _r = t.Ia, v = t.Ja, Ar = t.Ka, Or = t.La, Sr = t.Ma, Fr = t.Na, xr = t.Oa, Ir = t.Pa, H.viijii = t.Qa, Rr = H.iiijj = t.Ra, H.jiji = t.Sa, Er = H.jiiii = t.Ta, H.iiiiij = t.Ua, H.iiiiijj = t.Va, H.iiiiiijj = t.Wa, wt = t.Ca, Wr = t.Ga;
  }
  var Dn = { s: te, v: re, a: ee, j: ne, m: ae, S: ie, q: oe, W: se, d: ue, Z: le, ma: fe, ka: he, na: pe, ja: de, ea: ve, za: me, da: ge, ua: $e, xa: Be, wa: He, I: Ve, sa: ze, $: Ge, O: qe, y: Je, t: Xe, ya: Ze, ta: tn, T: un, C: cn, Aa: ln, va: fn, N: mn, Ba: Bt, F: gn, U: wn, M: $n, oa: bn, fa: Tn, ia: An, ga: Sn, ha: Fn, X: xn, la: In, ba: Rn, Y: jn, K: sa, D: la, P: Nn, V: ya, r: na, b: Vn, G: oa, qa: ha, c: Gn, pa, h: zn, i: Jn, p: Kn, R: ia, w: ra, E: ea, L: aa, z: fa, J: ma, ca: ga, aa: wa, g: qn, k: Mn, e: Hn, f: kn, Q: va, l: Bn, ra: ua, o: ta, A: Xn, u: ca, _: Zn, B: da, n: Qn, H: Yn, x: Un };
  function Mn(t, r) {
    var e = m();
    try {
      g(t)(r);
    } catch (n) {
      if (y(e), n !== n + 0) throw n;
      v(1, 0);
    }
  }
  function Bn(t, r, e, n, a) {
    var i = m();
    try {
      g(t)(r, e, n, a);
    } catch (o) {
      if (y(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function kn(t, r, e, n) {
    var a = m();
    try {
      g(t)(r, e, n);
    } catch (i) {
      if (y(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Hn(t, r, e) {
    var n = m();
    try {
      g(t)(r, e);
    } catch (a) {
      if (y(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function Vn(t, r) {
    var e = m();
    try {
      return g(t)(r);
    } catch (n) {
      if (y(e), n !== n + 0) throw n;
      v(1, 0);
    }
  }
  function zn(t, r, e, n) {
    var a = m();
    try {
      return g(t)(r, e, n);
    } catch (i) {
      if (y(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Nn(t, r, e, n, a, i) {
    var o = m();
    try {
      return g(t)(r, e, n, a, i);
    } catch (s) {
      if (y(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function Gn(t, r, e) {
    var n = m();
    try {
      return g(t)(r, e);
    } catch (a) {
      if (y(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function qn(t) {
    var r = m();
    try {
      g(t)();
    } catch (e) {
      if (y(r), e !== e + 0) throw e;
      v(1, 0);
    }
  }
  function Qn(t, r, e, n, a, i, o, s, u, c, h) {
    var d = m();
    try {
      g(t)(r, e, n, a, i, o, s, u, c, h);
    } catch ($) {
      if (y(d), $ !== $ + 0) throw $;
      v(1, 0);
    }
  }
  function Jn(t, r, e, n, a) {
    var i = m();
    try {
      return g(t)(r, e, n, a);
    } catch (o) {
      if (y(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function Xn(t, r, e, n, a, i, o) {
    var s = m();
    try {
      g(t)(r, e, n, a, i, o);
    } catch (u) {
      if (y(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function Yn(t, r, e, n, a, i, o, s, u, c, h, d, $, P, O, A) {
    var _ = m();
    try {
      g(t)(r, e, n, a, i, o, s, u, c, h, d, $, P, O, A);
    } catch (C) {
      if (y(_), C !== C + 0) throw C;
      v(1, 0);
    }
  }
  function Zn(t, r, e, n, a, i, o, s, u) {
    var c = m();
    try {
      g(t)(r, e, n, a, i, o, s, u);
    } catch (h) {
      if (y(c), h !== h + 0) throw h;
      v(1, 0);
    }
  }
  function Kn(t, r, e, n, a, i) {
    var o = m();
    try {
      return g(t)(r, e, n, a, i);
    } catch (s) {
      if (y(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function ta(t, r, e, n, a, i) {
    var o = m();
    try {
      g(t)(r, e, n, a, i);
    } catch (s) {
      if (y(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function ra(t, r, e, n, a, i, o) {
    var s = m();
    try {
      return g(t)(r, e, n, a, i, o);
    } catch (u) {
      if (y(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function ea(t, r, e, n, a, i, o, s) {
    var u = m();
    try {
      return g(t)(r, e, n, a, i, o, s);
    } catch (c) {
      if (y(u), c !== c + 0) throw c;
      v(1, 0);
    }
  }
  function na(t) {
    var r = m();
    try {
      return g(t)();
    } catch (e) {
      if (y(r), e !== e + 0) throw e;
      v(1, 0);
    }
  }
  function aa(t, r, e, n, a, i, o, s, u) {
    var c = m();
    try {
      return g(t)(r, e, n, a, i, o, s, u);
    } catch (h) {
      if (y(c), h !== h + 0) throw h;
      v(1, 0);
    }
  }
  function ia(t, r, e, n, a, i, o) {
    var s = m();
    try {
      return g(t)(r, e, n, a, i, o);
    } catch (u) {
      if (y(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function oa(t, r, e, n) {
    var a = m();
    try {
      return g(t)(r, e, n);
    } catch (i) {
      if (y(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function sa(t, r, e, n) {
    var a = m();
    try {
      return g(t)(r, e, n);
    } catch (i) {
      if (y(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function ua(t, r, e, n, a, i, o, s) {
    var u = m();
    try {
      g(t)(r, e, n, a, i, o, s);
    } catch (c) {
      if (y(u), c !== c + 0) throw c;
      v(1, 0);
    }
  }
  function ca(t, r, e, n, a, i, o, s) {
    var u = m();
    try {
      g(t)(r, e, n, a, i, o, s);
    } catch (c) {
      if (y(u), c !== c + 0) throw c;
      v(1, 0);
    }
  }
  function la(t, r, e, n, a, i) {
    var o = m();
    try {
      return g(t)(r, e, n, a, i);
    } catch (s) {
      if (y(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function fa(t, r, e, n, a, i, o, s, u, c) {
    var h = m();
    try {
      return g(t)(r, e, n, a, i, o, s, u, c);
    } catch (d) {
      if (y(h), d !== d + 0) throw d;
      v(1, 0);
    }
  }
  function ha(t, r, e) {
    var n = m();
    try {
      return g(t)(r, e);
    } catch (a) {
      if (y(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function pa(t, r, e, n, a) {
    var i = m();
    try {
      return g(t)(r, e, n, a);
    } catch (o) {
      if (y(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function da(t, r, e, n, a, i, o, s, u, c) {
    var h = m();
    try {
      g(t)(r, e, n, a, i, o, s, u, c);
    } catch (d) {
      if (y(h), d !== d + 0) throw d;
      v(1, 0);
    }
  }
  function va(t, r, e, n, a, i, o) {
    var s = m();
    try {
      g(t)(r, e, n, a, i, o);
    } catch (u) {
      if (y(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function ya(t, r, e, n) {
    var a = m();
    try {
      return g(t)(r, e, n);
    } catch (i) {
      if (y(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function ma(t, r, e, n, a, i, o, s, u, c, h, d) {
    var $ = m();
    try {
      return g(t)(r, e, n, a, i, o, s, u, c, h, d);
    } catch (P) {
      if (y($), P !== P + 0) throw P;
      v(1, 0);
    }
  }
  function ga(t, r, e, n, a, i, o) {
    var s = m();
    try {
      return Rr(t, r, e, n, a, i, o);
    } catch (u) {
      if (y(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function wa(t, r, e, n, a) {
    var i = m();
    try {
      return Er(t, r, e, n, a);
    } catch (o) {
      if (y(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function $a() {
    Hr();
    function t() {
      var r, e;
      l.calledRun = true, !Xt && (Vr(), (r = Yt) === null || r === void 0 || r(l), (e = l.onRuntimeInitialized) === null || e === void 0 || e.call(l), zr());
    }
    l.setStatus ? (l.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => l.setStatus(""), 1), t();
    }, 1)) : t();
  }
  var ot;
  return ot = await Yr(), $a(), rr ? p = l : p = new Promise((t, r) => {
    Yt = t, Zt = r;
  }), p;
}
function ka(f) {
  return Gt(qt, f);
}
async function Ha(f, p) {
  return Ma(qt, f, p);
}
async function Va(f, p) {
  return Ba(qt, f, p);
}
export {
  ka as A,
  Va as R,
  Ha as S,
  Ma as Z
};
