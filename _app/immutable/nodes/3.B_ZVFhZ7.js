import { f as fa, a as ha } from "../chunks/Dy7lmqI0.js";
import { R as da, j as vt, T as va, y as pa, x as ya, h as ma, U as ga, p as wa, o as $a, f as ba, c as pt, g as Ta, a as Ca, b as Pa, P as _a, Q as Aa, s as Sa } from "../chunks/DUA4kTxm.js";
import { d as Ea } from "../chunks/Bme71SXR.js";
import { r as Oa } from "../chunks/CEiJdahZ.js";
import { b as kr } from "../chunks/DamuyVK_.js";
import { Z as xa, R as Dr } from "../chunks/B-6X-cLz.js";
function Ra(d, S, R = S) {
  var j = /* @__PURE__ */ new WeakSet();
  da(d, "input", async (c) => {
    var x = c ? d.defaultValue : d.value;
    if (x = qt(d) ? Qt(x) : x, R(x), vt !== null && j.add(vt), await va(), x !== (x = S())) {
      var rt = d.selectionStart, L = d.selectionEnd, Y = d.value.length;
      if (d.value = x ?? "", L !== null) {
        var z = d.value.length;
        rt === L && L === Y && z > Y ? (d.selectionStart = z, d.selectionEnd = z) : (d.selectionStart = rt, d.selectionEnd = Math.min(L, z));
      }
    }
  }), (ma && d.defaultValue !== d.value || pa(S) == null && d.value) && (R(qt(d) ? Qt(d.value) : d.value), vt !== null && j.add(vt)), ya(() => {
    var c = S();
    if (d === document.activeElement) {
      var x = ga ?? vt;
      if (j.has(x)) return;
    }
    qt(d) && c === Qt(d.value) || d.type === "date" && !c && !d.value || c !== d.value && (d.value = c ?? "");
  });
}
function qt(d) {
  var S = d.type;
  return S === "number" || S === "range";
}
function Qt(d) {
  return d === "" ? null : +d;
}
async function ja(d = {}) {
  var S, R, j, c = d, x = !!globalThis.window, rt = typeof Bun < "u", L = !!globalThis.WorkerGlobalScope;
  !((R = globalThis.process) === null || R === void 0 || (R = R.versions) === null || R === void 0) && R.node && ((j = globalThis.process) === null || j === void 0 ? void 0 : j.type) != "renderer";
  var Y = "./this.program", z, et = "";
  function yt(t) {
    return c.locateFile ? c.locateFile(t, et) : et + t;
  }
  var ot, nt;
  if (x || L || rt) {
    try {
      et = new URL(".", z).href;
    } catch {
    }
    L && (nt = (t) => {
      var r = new XMLHttpRequest();
      return r.open("GET", t, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
    }), ot = async (t) => {
      var r = await fetch(t, { credentials: "same-origin" });
      if (r.ok) return r.arrayBuffer();
      throw new Error(r.status + " : " + r.url);
    };
  }
  var st = console.log.bind(console), D = console.error.bind(console), Z, A = false, F, W, I, k, V, G, ut, $, Yt, Zt, Jt = false;
  function Kt() {
    var t = Et.buffer;
    I = new Int8Array(t), V = new Int16Array(t), c.HEAPU8 = k = new Uint8Array(t), G = new Uint16Array(t), ut = new Int32Array(t), $ = new Uint32Array(t), Yt = new Float32Array(t), Zt = new Float64Array(t);
  }
  function Vr() {
    if (c.preRun) for (typeof c.preRun == "function" && (c.preRun = [c.preRun]); c.preRun.length; ) Qr(c.preRun.shift());
    Xt(rr);
  }
  function Mr() {
    Jt = true, dt.xa();
  }
  function Ir() {
    if (c.postRun) for (typeof c.postRun == "function" && (c.postRun = [c.postRun]); c.postRun.length; ) qr(c.postRun.shift());
    Xt(tr);
  }
  function jt(t) {
    var r, e;
    (r = c.onAbort) === null || r === void 0 || r.call(c, t), t = "Aborted(" + t + ")", D(t), A = true, t += ". Build with -sASSERTIONS for more info.";
    var n = new WebAssembly.RuntimeError(t);
    throw (e = W) === null || e === void 0 || e(n), n;
  }
  var mt;
  function Ur() {
    return yt("zxing_reader.wasm");
  }
  function Hr(t) {
    if (t == mt && Z) return new Uint8Array(Z);
    if (nt) return nt(t);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Br(t) {
    if (!Z) try {
      var r = await ot(t);
      return new Uint8Array(r);
    } catch {
    }
    return Hr(t);
  }
  async function Nr(t, r) {
    try {
      var e = await Br(t), n = await WebAssembly.instantiate(e, r);
      return n;
    } catch (a) {
      D(`failed to asynchronously prepare wasm: ${a}`), jt(a);
    }
  }
  async function Lr(t, r, e) {
    if (!t && WebAssembly.instantiateStreaming) try {
      var n = fetch(r, { credentials: "same-origin" }), a = await WebAssembly.instantiateStreaming(n, e);
      return a;
    } catch (i) {
      D(`wasm streaming compile failed: ${i}`), D("falling back to ArrayBuffer instantiation");
    }
    return Nr(r, e);
  }
  function zr() {
    var t = { a: Sn };
    return t;
  }
  async function Gr() {
    function t(i, o) {
      return dt = i.exports, An(dt), Kt(), dt;
    }
    function r(i) {
      return t(i.instance);
    }
    var e = zr();
    if (c.instantiateWasm) return new Promise((i, o) => {
      c.instantiateWasm(e, (s, u) => {
        i(t(s));
      });
    });
    mt != null || (mt = Ur());
    var n = await Lr(Z, mt, e), a = r(n);
    return a;
  }
  var Xt = (t) => {
    for (; t.length > 0; ) t.shift()(c);
  }, tr = [], qr = (t) => tr.push(t), rr = [], Qr = (t) => rr.push(t), p = (t) => Cr(t), y = () => Pr(), gt = [], wt = 0, Yr = (t) => {
    var r = new Ft(t);
    return r.get_caught() || (r.set_caught(true), wt--), r.set_rethrown(false), gt.push(r), Ar(t), br(t);
  }, B = 0, Zr = () => {
    v(0, 0);
    var t = gt.pop();
    _r(t.excPtr), B = 0;
  };
  class Ft {
    constructor(r) {
      this.excPtr = r, this.ptr = r - 24;
    }
    set_type(r) {
      $[this.ptr + 4 >> 2] = r;
    }
    get_type() {
      return $[this.ptr + 4 >> 2];
    }
    set_destructor(r) {
      $[this.ptr + 8 >> 2] = r;
    }
    get_destructor() {
      return $[this.ptr + 8 >> 2];
    }
    set_caught(r) {
      r = r ? 1 : 0, I[this.ptr + 12] = r;
    }
    get_caught() {
      return I[this.ptr + 12] != 0;
    }
    set_rethrown(r) {
      r = r ? 1 : 0, I[this.ptr + 13] = r;
    }
    get_rethrown() {
      return I[this.ptr + 13] != 0;
    }
    init(r, e) {
      this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(e);
    }
    set_adjusted_ptr(r) {
      $[this.ptr + 16 >> 2] = r;
    }
    get_adjusted_ptr() {
      return $[this.ptr + 16 >> 2];
    }
  }
  var $t = (t) => Tr(t), Wt = (t) => {
    var r = B;
    if (!r) return $t(0), 0;
    var e = new Ft(r);
    e.set_adjusted_ptr(r);
    var n = e.get_type();
    if (!n) return $t(0), r;
    for (var a of t) {
      if (a === 0 || a === n) break;
      var i = e.ptr + 16;
      if (Sr(a, n, i)) return $t(a), r;
    }
    return $t(n), r;
  }, Jr = () => Wt([]), Kr = (t) => Wt([t]), Xr = (t, r) => Wt([t, r]), te = () => {
    var t = gt.pop();
    t || jt("no exception to throw");
    var r = t.excPtr;
    throw t.get_rethrown() || (gt.push(t), t.set_rethrown(true), t.set_caught(false), wt++), B = r, B;
  }, re = (t, r, e) => {
    var n = new Ft(t);
    throw n.init(r, e), B = t, wt++, B;
  }, ee = () => wt, ne = (t) => {
    throw B || (B = t), B;
  }, ae = () => jt(""), bt = {}, kt = (t) => {
    for (; t.length; ) {
      var r = t.pop(), e = t.pop();
      e(r);
    }
  };
  function lt(t) {
    return this.fromWireType($[t >> 2]);
  }
  var at = {}, J = {}, Tt = {}, ie = class extends Error {
    constructor(t) {
      super(t), this.name = "InternalError";
    }
  }, Ct = (t) => {
    throw new ie(t);
  }, K = (t, r, e) => {
    t.forEach((s) => Tt[s] = r);
    function n(s) {
      var u = e(s);
      u.length !== t.length && Ct("Mismatched type converter count");
      for (var l = 0; l < t.length; ++l) U(t[l], u[l]);
    }
    var a = new Array(r.length), i = [], o = 0;
    {
      const s = r;
      for (let u = 0; u < s.length; ++u) {
        const l = s[u];
        J.hasOwnProperty(l) ? a[u] = J[l] : (i.push(l), at.hasOwnProperty(l) || (at[l] = []), at[l].push(() => {
          a[u] = J[l], ++o, o === i.length && n(a);
        }));
      }
    }
    i.length === 0 && n(a);
  }, oe = (t) => {
    var r = bt[t];
    delete bt[t];
    var e = r.rawConstructor, n = r.rawDestructor, a = r.fields, i = a.map((o) => o.getterReturnType).concat(a.map((o) => o.setterArgumentType));
    K([t], i, (o) => {
      var s = {};
      {
        const u = a;
        for (let l = 0; l < u.length; ++l) {
          const f = u[l], h = o[l], w = f.getter, T = f.getterContext, _ = o[l + a.length], P = f.setter, C = f.setterContext;
          s[f.fieldName] = { read: (b) => h.fromWireType(w(T, b)), write: (b, tt) => {
            var O = [];
            P(C, b, _.toWireType(O, tt)), kt(O);
          }, optional: h.optional };
        }
      }
      return [{ name: r.name, fromWireType: (u) => {
        var l = {};
        for (var f in s) l[f] = s[f].read(u);
        return n(u), l;
      }, toWireType: (u, l) => {
        for (var f in s) if (!(f in l) && !s[f].optional) throw new TypeError(`Missing field: "${f}"`);
        var h = e();
        for (f in s) s[f].write(h, l[f]);
        return u !== null && u.push(n, h), h;
      }, readValueFromPointer: lt, destructorFunction: n }];
    });
  }, se = (t, r, e, n, a) => {
  }, E = (t) => {
    for (var r = ""; ; ) {
      var e = k[t++];
      if (!e) return r;
      r += String.fromCharCode(e);
    }
  }, ct = class extends Error {
    constructor(t) {
      super(t), this.name = "BindingError";
    }
  }, g = (t) => {
    throw new ct(t);
  };
  function ue(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var n = r.name;
    if (t || g(`type "${n}" must have a positive integer typeid pointer`), J.hasOwnProperty(t)) {
      if (e.ignoreDuplicateRegistrations) return;
      g(`Cannot register type '${n}' twice`);
    }
    if (J[t] = r, delete Tt[t], at.hasOwnProperty(t)) {
      var a = at[t];
      delete at[t], a.forEach((i) => i());
    }
  }
  function U(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return ue(t, r, e);
  }
  var le = (t, r, e, n) => {
    r = E(r), U(t, { name: r, fromWireType: function(a) {
      return !!a;
    }, toWireType: function(a, i) {
      return i ? e : n;
    }, readValueFromPointer: function(a) {
      return this.fromWireType(k[a]);
    }, destructorFunction: null });
  }, ce = (t) => ({ count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType }), Dt = (t) => {
    function r(e) {
      return e.$$.ptrType.registeredClass.name;
    }
    g(r(t) + " instance already deleted");
  }, Vt = false, er = (t) => {
  }, fe = (t) => {
    t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
  }, nr = (t) => {
    t.count.value -= 1;
    var r = t.count.value === 0;
    r && fe(t);
  }, ft = (t) => globalThis.FinalizationRegistry ? (Vt = new FinalizationRegistry((r) => {
    nr(r.$$);
  }), ft = (r) => {
    var e = r.$$, n = !!e.smartPtr;
    if (n) {
      var a = { $$: e };
      Vt.register(r, a, r);
    }
    return r;
  }, er = (r) => Vt.unregister(r), ft(t)) : (ft = (r) => r, t), he = () => {
    let t = Pt.prototype;
    Object.assign(t, { isAliasOf(e) {
      if (!(this instanceof Pt) || !(e instanceof Pt)) return false;
      var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
      e.$$ = e.$$;
      for (var i = e.$$.ptrType.registeredClass, o = e.$$.ptr; n.baseClass; ) a = n.upcast(a), n = n.baseClass;
      for (; i.baseClass; ) o = i.upcast(o), i = i.baseClass;
      return n === i && a === o;
    }, clone() {
      if (this.$$.ptr || Dt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
      var e = ft(Object.create(Object.getPrototypeOf(this), { $$: { value: ce(this.$$) } }));
      return e.$$.count.value += 1, e.$$.deleteScheduled = false, e;
    }, delete() {
      this.$$.ptr || Dt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), er(this), nr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }, isDeleted() {
      return !this.$$.ptr;
    }, deleteLater() {
      return this.$$.ptr || Dt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
    } });
    const r = Symbol.dispose;
    r && (t[r] = t.delete);
  };
  function Pt() {
  }
  var Mt = (t, r) => Object.defineProperty(r, "name", { value: t }), ar = {}, ir = (t, r, e) => {
    if (t[r].overloadTable === void 0) {
      var n = t[r];
      t[r] = function() {
        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
        return t[r].overloadTable.hasOwnProperty(i.length) || g(`Function '${e}' called with an invalid number of arguments (${i.length}) - expects one of (${t[r].overloadTable})!`), t[r].overloadTable[i.length].apply(this, i);
      }, t[r].overloadTable = [], t[r].overloadTable[n.argCount] = n;
    }
  }, or = (t, r, e) => {
    c.hasOwnProperty(t) ? ((e === void 0 || c[t].overloadTable !== void 0 && c[t].overloadTable[e] !== void 0) && g(`Cannot register public name '${t}' twice`), ir(c, t, t), c[t].overloadTable.hasOwnProperty(e) && g(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`), c[t].overloadTable[e] = r) : (c[t] = r, c[t].argCount = e);
  }, de = 48, ve = 57, pe = (t) => {
    t = t.replace(/[^a-zA-Z0-9_]/g, "$");
    var r = t.charCodeAt(0);
    return r >= de && r <= ve ? `_${t}` : t;
  };
  function ye(t, r, e, n, a, i, o, s) {
    this.name = t, this.constructor = r, this.instancePrototype = e, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
  }
  var It = (t, r, e) => {
    for (; r !== e; ) r.upcast || g(`Expected null or instance of ${e.name}, got an instance of ${r.name}`), t = r.upcast(t), r = r.baseClass;
    return t;
  }, Ut = (t) => {
    if (t === null) return "null";
    var r = typeof t;
    return r === "object" || r === "array" || r === "function" ? t.toString() : "" + t;
  };
  function me(t, r) {
    if (r === null) return this.isReference && g(`null is not a valid ${this.name}`), 0;
    r.$$ || g(`Cannot pass "${Ut(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`);
    var e = r.$$.ptrType.registeredClass, n = It(r.$$.ptr, e, this.registeredClass);
    return n;
  }
  function ge(t, r) {
    var e;
    if (r === null) return this.isReference && g(`null is not a valid ${this.name}`), this.isSmartPointer ? (e = this.rawConstructor(), t !== null && t.push(this.rawDestructor, e), e) : 0;
    (!r || !r.$$) && g(`Cannot pass "${Ut(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && g(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
    var n = r.$$.ptrType.registeredClass;
    if (e = It(r.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (r.$$.smartPtr === void 0 && g("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        r.$$.smartPtrType === this ? e = r.$$.smartPtr : g(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
        break;
      case 1:
        e = r.$$.smartPtr;
        break;
      case 2:
        if (r.$$.smartPtrType === this) e = r.$$.smartPtr;
        else {
          var a = r.clone();
          e = this.rawShare(e, H.toHandle(() => a.delete())), t !== null && t.push(this.rawDestructor, e);
        }
        break;
      default:
        g("Unsupporting sharing policy");
    }
    return e;
  }
  function we(t, r) {
    if (r === null) return this.isReference && g(`null is not a valid ${this.name}`), 0;
    r.$$ || g(`Cannot pass "${Ut(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && g(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
    var e = r.$$.ptrType.registeredClass, n = It(r.$$.ptr, e, this.registeredClass);
    return n;
  }
  var sr = (t, r, e) => {
    if (r === e) return t;
    if (e.baseClass === void 0) return null;
    var n = sr(t, r, e.baseClass);
    return n === null ? null : e.downcast(n);
  }, $e = {}, be = (t, r) => {
    for (r === void 0 && g("ptr should not be undefined"); t.baseClass; ) r = t.upcast(r), t = t.baseClass;
    return r;
  }, Te = (t, r) => (r = be(t, r), $e[r]), _t = (t, r) => {
    (!r.ptrType || !r.ptr) && Ct("makeClassHandle requires ptr and ptrType");
    var e = !!r.smartPtrType, n = !!r.smartPtr;
    return e !== n && Ct("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, ft(Object.create(t, { $$: { value: r, writable: true } }));
  };
  function Ce(t) {
    var r = this.getPointee(t);
    if (!r) return this.destructor(t), null;
    var e = Te(this.registeredClass, r);
    if (e !== void 0) {
      if (e.$$.count.value === 0) return e.$$.ptr = r, e.$$.smartPtr = t, e.clone();
      var n = e.clone();
      return this.destructor(t), n;
    }
    function a() {
      return this.isSmartPointer ? _t(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: r, smartPtrType: this, smartPtr: t }) : _t(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
    }
    var i = this.registeredClass.getActualType(r), o = ar[i];
    if (!o) return a.call(this);
    var s;
    this.isConst ? s = o.constPointerType : s = o.pointerType;
    var u = sr(r, this.registeredClass, s.registeredClass);
    return u === null ? a.call(this) : this.isSmartPointer ? _t(s.registeredClass.instancePrototype, { ptrType: s, ptr: u, smartPtrType: this, smartPtr: t }) : _t(s.registeredClass.instancePrototype, { ptrType: s, ptr: u });
  }
  var Pe = () => {
    Object.assign(At.prototype, { getPointee(t) {
      return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
    }, destructor(t) {
      var r;
      (r = this.rawDestructor) === null || r === void 0 || r.call(this, t);
    }, readValueFromPointer: lt, fromWireType: Ce });
  };
  function At(t, r, e, n, a, i, o, s, u, l, f) {
    this.name = t, this.registeredClass = r, this.isReference = e, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = l, this.rawDestructor = f, !a && r.baseClass === void 0 ? n ? (this.toWireType = me, this.destructorFunction = null) : (this.toWireType = we, this.destructorFunction = null) : this.toWireType = ge;
  }
  var ur = (t, r, e) => {
    c.hasOwnProperty(t) || Ct("Replacing nonexistent public symbol"), c[t].overloadTable !== void 0 && e !== void 0 ? c[t].overloadTable[e] = r : (c[t] = r, c[t].argCount = e);
  }, q = {}, _e = (t, r, e) => {
    t = t.replace(/p/g, "i");
    var n = q[t];
    return n(r, ...e);
  }, lr = [], m = (t) => {
    var r = lr[t];
    return r || (lr[t] = r = xr.get(t)), r;
  }, Ae = function(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t.includes("j")) return _e(t, r, e);
    var n = m(r), a = n(...e);
    return a;
  }, Se = function(t, r) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return function() {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
      return Ae(t, r, a, e);
    };
  }, M = function(t, r) {
    t = E(t);
    function e() {
      if (t.includes("j")) return Se(t, r);
      var a = m(r);
      return a;
    }
    var n = e();
    return typeof n != "function" && g(`unknown function pointer with signature ${t}: ${r}`), n;
  };
  class Ee extends Error {
  }
  var cr = (t) => {
    var r = $r(t), e = E(r);
    return Q(r), e;
  }, St = (t, r) => {
    var e = [], n = {};
    function a(i) {
      if (!n[i] && !J[i]) {
        if (Tt[i]) {
          Tt[i].forEach(a);
          return;
        }
        e.push(i), n[i] = true;
      }
    }
    throw r.forEach(a), new Ee(`${t}: ` + e.map(cr).join([", "]));
  }, Oe = (t, r, e, n, a, i, o, s, u, l, f, h, w) => {
    f = E(f), i = M(a, i), s && (s = M(o, s)), l && (l = M(u, l)), w = M(h, w);
    var T = pe(f);
    or(T, function() {
      St(`Cannot construct ${f} due to unbound types`, [n]);
    }), K([t, r, e], n ? [n] : [], (_) => {
      _ = _[0];
      var P, C;
      n ? (P = _.registeredClass, C = P.instancePrototype) : C = Pt.prototype;
      var b = Mt(f, function() {
        if (Object.getPrototypeOf(this) !== tt) throw new ct(`Use 'new' to construct ${f}`);
        if (O.constructor_body === void 0) throw new ct(`${f} has no accessible constructor`);
        for (var Fr = arguments.length, xt = new Array(Fr), Rt = 0; Rt < Fr; Rt++) xt[Rt] = arguments[Rt];
        var Wr = O.constructor_body[xt.length];
        if (Wr === void 0) throw new ct(`Tried to invoke ctor of ${f} with invalid number of parameters (${xt.length}) - expected (${Object.keys(O.constructor_body).toString()}) parameters instead!`);
        return Wr.apply(this, xt);
      }), tt = Object.create(C, { constructor: { value: b } });
      b.prototype = tt;
      var O = new ye(f, b, tt, w, P, i, s, l);
      if (O.baseClass) {
        var N, Ot;
        (Ot = (N = O.baseClass).__derivedClasses) !== null && Ot !== void 0 || (N.__derivedClasses = []), O.baseClass.__derivedClasses.push(O);
      }
      var ca = new At(f, O, true, false, false), Rr = new At(f + "*", O, false, false, false), jr = new At(f + " const*", O, false, true, false);
      return ar[t] = { pointerType: Rr, constPointerType: jr }, ur(T, b), [ca, Rr, jr];
    });
  }, Ht = (t, r) => {
    for (var e = [], n = 0; n < t; n++) e.push($[r + n * 4 >> 2]);
    return e;
  };
  function xe(t) {
    for (var r = 1; r < t.length; ++r) if (t[r] !== null && t[r].destructorFunction === void 0) return true;
    return false;
  }
  function Bt(t, r, e, n, a, i) {
    var o = r.length;
    o < 2 && g("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var s = r[1] !== null && e !== null, u = xe(r), l = !r[0].isVoid, f = o - 2, h = new Array(f), w = [], T = [], _ = function() {
      T.length = 0;
      var P;
      w.length = s ? 2 : 1, w[0] = a, s && (P = r[1].toWireType(T, this), w[1] = P);
      for (var C = 0; C < f; ++C) h[C] = r[C + 2].toWireType(T, C < 0 || arguments.length <= C ? void 0 : arguments[C]), w.push(h[C]);
      var b = n(...w);
      function tt(O) {
        if (u) kt(T);
        else for (var N = s ? 1 : 2; N < r.length; N++) {
          var Ot = N === 1 ? P : h[N - 2];
          r[N].destructorFunction !== null && r[N].destructorFunction(Ot);
        }
        if (l) return r[0].fromWireType(O);
      }
      return tt(b);
    };
    return Mt(t, _);
  }
  var Re = (t, r, e, n, a, i) => {
    var o = Ht(r, e);
    a = M(n, a), K([], [t], (s) => {
      s = s[0];
      var u = `constructor ${s.name}`;
      if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[r - 1] !== void 0) throw new ct(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
      return s.registeredClass.constructor_body[r - 1] = () => {
        St(`Cannot construct ${s.name} due to unbound types`, o);
      }, K([], o, (l) => (l.splice(1, 0, null), s.registeredClass.constructor_body[r - 1] = Bt(u, l, null, a, i), [])), [];
    });
  }, fr = (t) => {
    t = t.trim();
    const r = t.indexOf("(");
    return r === -1 ? t : t.slice(0, r);
  }, je = (t, r, e, n, a, i, o, s, u, l) => {
    var f = Ht(e, n);
    r = E(r), r = fr(r), i = M(a, i), K([], [t], (h) => {
      h = h[0];
      var w = `${h.name}.${r}`;
      r.startsWith("@@") && (r = Symbol[r.substring(2)]), s && h.registeredClass.pureVirtualFunctions.push(r);
      function T() {
        St(`Cannot call ${w} due to unbound types`, f);
      }
      var _ = h.registeredClass.instancePrototype, P = _[r];
      return P === void 0 || P.overloadTable === void 0 && P.className !== h.name && P.argCount === e - 2 ? (T.argCount = e - 2, T.className = h.name, _[r] = T) : (ir(_, r, w), _[r].overloadTable[e - 2] = T), K([], f, (C) => {
        var b = Bt(w, C, h, i, o);
        return _[r].overloadTable === void 0 ? (b.argCount = e - 2, _[r] = b) : _[r].overloadTable[e - 2] = b, [];
      }), [];
    });
  }, hr = [], X = [0, 1, , 1, null, 1, true, 1, false, 1], Nt = (t) => {
    t > 9 && --X[t + 1] === 0 && (X[t] = void 0, hr.push(t));
  }, H = { toValue: (t) => (t || g(`Cannot use deleted val. handle = ${t}`), X[t]), toHandle: (t) => {
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
        const r = hr.pop() || X.length;
        return X[r] = t, X[r + 1] = 1, r;
      }
    }
  } }, dr = { name: "emscripten::val", fromWireType: (t) => {
    var r = H.toValue(t);
    return Nt(t), r;
  }, toWireType: (t, r) => H.toHandle(r), readValueFromPointer: lt, destructorFunction: null }, Fe = (t) => U(t, dr), We = (t, r) => {
    switch (r) {
      case 4:
        return function(e) {
          return this.fromWireType(Yt[e >> 2]);
        };
      case 8:
        return function(e) {
          return this.fromWireType(Zt[e >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r}): ${t}`);
    }
  }, ke = (t, r, e) => {
    r = E(r), U(t, { name: r, fromWireType: (n) => n, toWireType: (n, a) => a, readValueFromPointer: We(r, e), destructorFunction: null });
  }, De = (t, r, e, n, a, i, o, s) => {
    var u = Ht(r, e);
    t = E(t), t = fr(t), a = M(n, a), or(t, function() {
      St(`Cannot call ${t} due to unbound types`, u);
    }, r - 1), K([], u, (l) => {
      var f = [l[0], null].concat(l.slice(1));
      return ur(t, Bt(t, f, null, a, i), r - 1), [];
    });
  }, Ve = (t, r, e) => {
    switch (r) {
      case 1:
        return e ? (n) => I[n] : (n) => k[n];
      case 2:
        return e ? (n) => V[n >> 1] : (n) => G[n >> 1];
      case 4:
        return e ? (n) => ut[n >> 2] : (n) => $[n >> 2];
      default:
        throw new TypeError(`invalid integer width (${r}): ${t}`);
    }
  }, Me = (t, r, e, n, a) => {
    r = E(r);
    const i = n === 0;
    let o = (u) => u;
    if (i) {
      var s = 32 - 8 * e;
      o = (u) => u << s >>> s, a = o(a);
    }
    U(t, { name: r, fromWireType: o, toWireType: (u, l) => l, readValueFromPointer: Ve(r, e, n !== 0), destructorFunction: null });
  }, Ie = (t, r, e) => {
    var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = n[r];
    function i(o) {
      var s = $[o >> 2], u = $[o + 4 >> 2];
      return new a(I.buffer, u, s);
    }
    e = E(e), U(t, { name: e, fromWireType: i, readValueFromPointer: i }, { ignoreDuplicateRegistrations: true });
  }, Ue = Object.assign({ optional: true }, dr), He = (t, r) => {
    U(t, Ue);
  }, Be = (t, r, e, n) => {
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
  }, it = (t, r, e) => Be(t, k, r, e), vr = (t) => {
    for (var r = 0, e = 0; e < t.length; ++e) {
      var n = t.charCodeAt(e);
      n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++e) : r += 3;
    }
    return r;
  }, pr = globalThis.TextDecoder && new TextDecoder(), yr = (t, r, e, n) => {
    var a = r + e;
    if (n) return a;
    for (; t[r] && !(r >= a); ) ++r;
    return r;
  }, mr = function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0;
    var a = yr(t, r, e, n);
    if (a - r > 16 && t.buffer && pr) return pr.decode(t.subarray(r, a));
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
        var l = o - 65536;
        i += String.fromCharCode(55296 | l >> 10, 56320 | l & 1023);
      }
    }
    return i;
  }, Ne = (t, r, e) => t ? mr(k, t, r, e) : "", Le = (t, r) => {
    r = E(r), U(t, { name: r, fromWireType(e) {
      var n = $[e >> 2], a = e + 4, i;
      return i = Ne(a, n, true), Q(e), i;
    }, toWireType(e, n) {
      n instanceof ArrayBuffer && (n = new Uint8Array(n));
      var a, i = typeof n == "string";
      i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || g("Cannot pass non-string to std::string"), i ? a = vr(n) : a = n.length;
      var o = Gt(4 + a + 1), s = o + 4;
      return $[o >> 2] = a, i ? it(n, s, a + 1) : k.set(n, s), e !== null && e.push(Q, o), o;
    }, readValueFromPointer: lt, destructorFunction(e) {
      Q(e);
    } });
  }, gr = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, ze = (t, r, e) => {
    var n = t >> 1, a = yr(G, n, r / 2, e);
    if (a - n > 16 && gr) return gr.decode(G.subarray(n, a));
    for (var i = "", o = n; o < a; ++o) {
      var s = G[o];
      i += String.fromCharCode(s);
    }
    return i;
  }, Ge = (t, r, e) => {
    if (e != null || (e = 2147483647), e < 2) return 0;
    e -= 2;
    for (var n = r, a = e < t.length * 2 ? e / 2 : t.length, i = 0; i < a; ++i) {
      var o = t.charCodeAt(i);
      V[r >> 1] = o, r += 2;
    }
    return V[r >> 1] = 0, r - n;
  }, qe = (t) => t.length * 2, Qe = (t, r, e) => {
    for (var n = "", a = t >> 2, i = 0; !(i >= r / 4); i++) {
      var o = $[a + i];
      if (!o && !e) break;
      n += String.fromCodePoint(o);
    }
    return n;
  }, Ye = (t, r, e) => {
    if (e != null || (e = 2147483647), e < 4) return 0;
    for (var n = r, a = n + e - 4, i = 0; i < t.length; ++i) {
      var o = t.codePointAt(i);
      if (o > 65535 && i++, ut[r >> 2] = o, r += 4, r + 4 > a) break;
    }
    return ut[r >> 2] = 0, r - n;
  }, Ze = (t) => {
    for (var r = 0, e = 0; e < t.length; ++e) {
      var n = t.codePointAt(e);
      n > 65535 && e++, r += 4;
    }
    return r;
  }, Je = (t, r, e) => {
    e = E(e);
    var n, a, i;
    r === 2 ? (n = ze, a = Ge, i = qe) : (n = Qe, a = Ye, i = Ze), U(t, { name: e, fromWireType: (o) => {
      var s = $[o >> 2], u = n(o + 4, s * r, true);
      return Q(o), u;
    }, toWireType: (o, s) => {
      typeof s != "string" && g(`Cannot pass non-string to C++ string type ${e}`);
      var u = i(s), l = Gt(4 + u + r);
      return $[l >> 2] = u / r, a(s, l + 4, u + r), o !== null && o.push(Q, l), l;
    }, readValueFromPointer: lt, destructorFunction(o) {
      Q(o);
    } });
  }, Ke = (t, r, e, n, a, i) => {
    bt[t] = { name: E(r), rawConstructor: M(e, n), rawDestructor: M(a, i), fields: [] };
  }, Xe = (t, r, e, n, a, i, o, s, u, l) => {
    bt[t].fields.push({ fieldName: E(r), getterReturnType: e, getter: M(n, a), getterContext: i, setterArgumentType: o, setter: M(s, u), setterContext: l });
  }, tn = (t, r) => {
    r = E(r), U(t, { isVoid: true, name: r, fromWireType: () => {
    }, toWireType: (e, n) => {
    } });
  }, Lt = [], rn = (t) => {
    var r = Lt.length;
    return Lt.push(t), r;
  }, en = (t, r) => {
    var e = J[t];
    return e === void 0 && g(`${r} has unknown type ${cr(t)}`), e;
  }, nn = (t, r) => {
    for (var e = new Array(t), n = 0; n < t; ++n) e[n] = en($[r + n * 4 >> 2], `parameter ${n}`);
    return e;
  }, an = (t, r, e) => {
    var n = [], a = t(n, e);
    return n.length && ($[r >> 2] = H.toHandle(n)), a;
  }, on = {}, wr = (t) => {
    var r = on[t];
    return r === void 0 ? E(t) : r;
  }, sn = (t, r, e) => {
    var n = 8, [a, ...i] = nn(t, r), o = a.toWireType.bind(a), s = i.map((h) => h.readValueFromPointer.bind(h));
    t--;
    var u = new Array(t), l = (h, w, T, _) => {
      for (var P = 0, C = 0; C < t; ++C) u[C] = s[C](_ + P), P += n;
      var b;
      switch (e) {
        case 0:
          b = H.toValue(h).apply(null, u);
          break;
        case 2:
          b = Reflect.construct(H.toValue(h), u);
          break;
        case 3:
          b = u[0];
          break;
        case 1:
          b = H.toValue(h)[wr(w)](...u);
          break;
      }
      return an(o, T, b);
    }, f = `methodCaller<(${i.map((h) => h.name)}) => ${a.name}>`;
    return rn(Mt(f, l));
  }, un = (t) => t ? (t = wr(t), H.toHandle(globalThis[t])) : H.toHandle(globalThis), ln = (t) => {
    t > 9 && (X[t + 1] += 1);
  }, cn = (t, r, e, n, a) => Lt[t](r, e, n, a), fn = (t) => {
    var r = H.toValue(t);
    kt(r), Nt(t);
  }, hn = (t, r, e, n) => {
    var a = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(a, 0, 1), o = new Date(a, 6, 1), s = i.getTimezoneOffset(), u = o.getTimezoneOffset(), l = Math.max(s, u);
    $[t >> 2] = l * 60, ut[r >> 2] = +(s != u);
    var f = (T) => {
      var _ = T >= 0 ? "-" : "+", P = Math.abs(T), C = String(Math.floor(P / 60)).padStart(2, "0"), b = String(P % 60).padStart(2, "0");
      return `UTC${_}${C}${b}`;
    }, h = f(s), w = f(u);
    u < s ? (it(h, e, 17), it(w, n, 17)) : (it(h, n, 17), it(w, e, 17));
  }, dn = () => 2147483648, vn = (t, r) => Math.ceil(t / r) * r, pn = (t) => {
    var r = Et.buffer.byteLength, e = (t - r + 65535) / 65536 | 0;
    try {
      return Et.grow(e), Kt(), 1;
    } catch {
    }
  }, yn = (t) => {
    var r = k.length;
    t >>>= 0;
    var e = dn();
    if (t > e) return false;
    for (var n = 1; n <= 4; n *= 2) {
      var a = r * (1 + 0.2 / n);
      a = Math.min(a, t + 100663296);
      var i = Math.min(e, vn(Math.max(t, a), 65536)), o = pn(i);
      if (o) return true;
    }
    return false;
  }, zt = {}, mn = () => Y || "./this.program", ht = () => {
    if (!ht.strings) {
      var t = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: t, _: mn() };
      for (var e in zt) zt[e] === void 0 ? delete r[e] : r[e] = zt[e];
      var n = [];
      for (var e in r) n.push(`${e}=${r[e]}`);
      ht.strings = n;
    }
    return ht.strings;
  }, gn = (t, r) => {
    var e = 0, n = 0;
    for (var a of ht()) {
      var i = r + e;
      $[t + n >> 2] = i, e += it(a, i, 1 / 0) + 1, n += 4;
    }
    return 0;
  }, wn = (t, r) => {
    var e = ht();
    $[t >> 2] = e.length;
    var n = 0;
    for (var a of e) n += vr(a) + 1;
    return $[r >> 2] = n, 0;
  }, $n = (t) => 52;
  function bn(t, r, e, n, a) {
    return 70;
  }
  var Tn = [null, [], []], Cn = (t, r) => {
    var e = Tn[t];
    r === 0 || r === 10 ? ((t === 1 ? st : D)(mr(e)), e.length = 0) : e.push(r);
  }, Pn = (t, r, e, n) => {
    for (var a = 0, i = 0; i < e; i++) {
      var o = $[r >> 2], s = $[r + 4 >> 2];
      r += 8;
      for (var u = 0; u < s; u++) Cn(t, k[o + u]);
      a += s;
    }
    return $[n >> 2] = a, 0;
  }, _n = (t) => t;
  if (he(), Pe(), c.noExitRuntime && c.noExitRuntime, c.print && (st = c.print), c.printErr && (D = c.printErr), c.wasmBinary && (Z = c.wasmBinary), c.arguments && c.arguments, c.thisProgram && (Y = c.thisProgram), c.preInit) for (typeof c.preInit == "function" && (c.preInit = [c.preInit]); c.preInit.length > 0; ) c.preInit.shift()();
  var $r, Q, Gt, br, v, Tr, Cr, Pr, _r, Ar, Sr, Er, Or, Et, xr;
  function An(t) {
    $r = t.ya, Q = c._free = t.za, Gt = c._malloc = t.Ba, br = t.Ca, v = t.Da, Tr = t.Ea, Cr = t.Fa, Pr = t.Ga, _r = t.Ha, Ar = t.Ia, Sr = t.Ja, q.viijii = t.Ka, Er = q.iiijj = t.La, q.jiji = t.Ma, Or = q.jiiii = t.Na, q.iiiiij = t.Oa, q.iiiiijj = t.Pa, q.iiiiiijj = t.Qa, Et = t.wa, xr = t.Aa;
  }
  var Sn = { s: Yr, w: Zr, a: Jr, j: Kr, m: Xr, Q: te, p: re, U: ee, d: ne, ca: ae, ta: oe, ba: se, oa: le, ra: Oe, qa: Re, H: je, ma: Fe, X: ke, Y: De, x: Me, t: Ie, sa: He, na: Le, R: Je, I: Ke, ua: Xe, pa: tn, N: sn, va: Nt, D: un, S: ln, M: cn, ia: fn, da: hn, ga: yn, ea: gn, fa: wn, ha: $n, $: bn, V: Pn, K: Zn, C: Xn, Z: Wn, T: ia, r: Gn, b: jn, E: Yn, ka: ra, c: kn, ja: ea, h: Fn, i: Mn, q: Bn, P: Qn, v: Ln, F: zn, L: qn, z: ta, J: oa, aa: sa, _: ua, f: Dn, l: En, e: Rn, g: xn, O: aa, k: On, la: Jn, o: Nn, B: In, u: Kn, W: Hn, A: na, n: Vn, G: Un, y: _n };
  function En(t, r) {
    var e = y();
    try {
      m(t)(r);
    } catch (n) {
      if (p(e), n !== n + 0) throw n;
      v(1, 0);
    }
  }
  function On(t, r, e, n, a) {
    var i = y();
    try {
      m(t)(r, e, n, a);
    } catch (o) {
      if (p(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function xn(t, r, e, n) {
    var a = y();
    try {
      m(t)(r, e, n);
    } catch (i) {
      if (p(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Rn(t, r, e) {
    var n = y();
    try {
      m(t)(r, e);
    } catch (a) {
      if (p(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function jn(t, r) {
    var e = y();
    try {
      return m(t)(r);
    } catch (n) {
      if (p(e), n !== n + 0) throw n;
      v(1, 0);
    }
  }
  function Fn(t, r, e, n) {
    var a = y();
    try {
      return m(t)(r, e, n);
    } catch (i) {
      if (p(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Wn(t, r, e, n, a, i) {
    var o = y();
    try {
      return m(t)(r, e, n, a, i);
    } catch (s) {
      if (p(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function kn(t, r, e) {
    var n = y();
    try {
      return m(t)(r, e);
    } catch (a) {
      if (p(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function Dn(t) {
    var r = y();
    try {
      m(t)();
    } catch (e) {
      if (p(r), e !== e + 0) throw e;
      v(1, 0);
    }
  }
  function Vn(t, r, e, n, a, i, o, s, u, l, f) {
    var h = y();
    try {
      m(t)(r, e, n, a, i, o, s, u, l, f);
    } catch (w) {
      if (p(h), w !== w + 0) throw w;
      v(1, 0);
    }
  }
  function Mn(t, r, e, n, a) {
    var i = y();
    try {
      return m(t)(r, e, n, a);
    } catch (o) {
      if (p(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function In(t, r, e, n, a, i, o) {
    var s = y();
    try {
      m(t)(r, e, n, a, i, o);
    } catch (u) {
      if (p(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function Un(t, r, e, n, a, i, o, s, u, l, f, h, w, T, _, P) {
    var C = y();
    try {
      m(t)(r, e, n, a, i, o, s, u, l, f, h, w, T, _, P);
    } catch (b) {
      if (p(C), b !== b + 0) throw b;
      v(1, 0);
    }
  }
  function Hn(t, r, e, n, a, i, o, s, u) {
    var l = y();
    try {
      m(t)(r, e, n, a, i, o, s, u);
    } catch (f) {
      if (p(l), f !== f + 0) throw f;
      v(1, 0);
    }
  }
  function Bn(t, r, e, n, a, i) {
    var o = y();
    try {
      return m(t)(r, e, n, a, i);
    } catch (s) {
      if (p(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function Nn(t, r, e, n, a, i) {
    var o = y();
    try {
      m(t)(r, e, n, a, i);
    } catch (s) {
      if (p(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function Ln(t, r, e, n, a, i, o) {
    var s = y();
    try {
      return m(t)(r, e, n, a, i, o);
    } catch (u) {
      if (p(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function zn(t, r, e, n, a, i, o, s) {
    var u = y();
    try {
      return m(t)(r, e, n, a, i, o, s);
    } catch (l) {
      if (p(u), l !== l + 0) throw l;
      v(1, 0);
    }
  }
  function Gn(t) {
    var r = y();
    try {
      return m(t)();
    } catch (e) {
      if (p(r), e !== e + 0) throw e;
      v(1, 0);
    }
  }
  function qn(t, r, e, n, a, i, o, s, u) {
    var l = y();
    try {
      return m(t)(r, e, n, a, i, o, s, u);
    } catch (f) {
      if (p(l), f !== f + 0) throw f;
      v(1, 0);
    }
  }
  function Qn(t, r, e, n, a, i, o) {
    var s = y();
    try {
      return m(t)(r, e, n, a, i, o);
    } catch (u) {
      if (p(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function Yn(t, r, e, n) {
    var a = y();
    try {
      return m(t)(r, e, n);
    } catch (i) {
      if (p(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Zn(t, r, e, n) {
    var a = y();
    try {
      return m(t)(r, e, n);
    } catch (i) {
      if (p(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function Jn(t, r, e, n, a, i, o, s) {
    var u = y();
    try {
      m(t)(r, e, n, a, i, o, s);
    } catch (l) {
      if (p(u), l !== l + 0) throw l;
      v(1, 0);
    }
  }
  function Kn(t, r, e, n, a, i, o, s) {
    var u = y();
    try {
      m(t)(r, e, n, a, i, o, s);
    } catch (l) {
      if (p(u), l !== l + 0) throw l;
      v(1, 0);
    }
  }
  function Xn(t, r, e, n, a, i) {
    var o = y();
    try {
      return m(t)(r, e, n, a, i);
    } catch (s) {
      if (p(o), s !== s + 0) throw s;
      v(1, 0);
    }
  }
  function ta(t, r, e, n, a, i, o, s, u, l) {
    var f = y();
    try {
      return m(t)(r, e, n, a, i, o, s, u, l);
    } catch (h) {
      if (p(f), h !== h + 0) throw h;
      v(1, 0);
    }
  }
  function ra(t, r, e) {
    var n = y();
    try {
      return m(t)(r, e);
    } catch (a) {
      if (p(n), a !== a + 0) throw a;
      v(1, 0);
    }
  }
  function ea(t, r, e, n, a) {
    var i = y();
    try {
      return m(t)(r, e, n, a);
    } catch (o) {
      if (p(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function na(t, r, e, n, a, i, o, s, u, l) {
    var f = y();
    try {
      m(t)(r, e, n, a, i, o, s, u, l);
    } catch (h) {
      if (p(f), h !== h + 0) throw h;
      v(1, 0);
    }
  }
  function aa(t, r, e, n, a, i, o) {
    var s = y();
    try {
      m(t)(r, e, n, a, i, o);
    } catch (u) {
      if (p(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function ia(t, r, e, n) {
    var a = y();
    try {
      return m(t)(r, e, n);
    } catch (i) {
      if (p(a), i !== i + 0) throw i;
      v(1, 0);
    }
  }
  function oa(t, r, e, n, a, i, o, s, u, l, f, h) {
    var w = y();
    try {
      return m(t)(r, e, n, a, i, o, s, u, l, f, h);
    } catch (T) {
      if (p(w), T !== T + 0) throw T;
      v(1, 0);
    }
  }
  function sa(t, r, e, n, a, i, o) {
    var s = y();
    try {
      return Er(t, r, e, n, a, i, o);
    } catch (u) {
      if (p(s), u !== u + 0) throw u;
      v(1, 0);
    }
  }
  function ua(t, r, e, n, a) {
    var i = y();
    try {
      return Or(t, r, e, n, a);
    } catch (o) {
      if (p(i), o !== o + 0) throw o;
      v(1, 0);
    }
  }
  function la() {
    Vr();
    function t() {
      var r, e;
      c.calledRun = true, !A && (Mr(), (r = F) === null || r === void 0 || r(c), (e = c.onRuntimeInitialized) === null || e === void 0 || e.call(c), Ir());
    }
    c.setStatus ? (c.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => c.setStatus(""), 1), t();
    }, 1)) : t();
  }
  var dt;
  return dt = await Gr(), la(), Jt ? S = c : S = new Promise((t, r) => {
    F = t, W = r;
  }), S;
}
async function Fa(d, S) {
  return xa(ja, d, S);
}
var Wa = fa('<div class="qr-code"></div> <main class="camera-container"><video id="scanner" width="400" height="320" autoplay></video> <button id="camera-button">Scan the barcode</button> <button id="camera-button">Take a picture</button> <canvas id="video-feed" width="400" height="320"></canvas> <div class="hi">Hi</div> <input id="send-message" type="text"/> <button>Send Message</button></main>', 3);
function Ha(d, S) {
  wa(S, true);
  let R, j, c = Ca("");
  const x = { video: { facingMode: "environment" } }, rt = { tryHarder: true, maxNumberOfSymbols: 1 };
  Dr("Hello World", { format: "QRCode", scale: 3 });
  function Y(A) {
    const F = document.getElementById("scanner");
    navigator.mediaDevices.getUserMedia({ video: x.video, audio: false }).then((W) => {
      F.srcObject = W, F.play();
    }).catch((W) => console.error(`An error occurred ${W}`));
  }
  function z() {
    const A = document.getElementById("scanner"), F = document.getElementById("video-feed"), W = document.querySelector(".hi"), I = F.getContext("2d");
    I && A.readyState === A.HAVE_ENOUGH_DATA ? (I.drawImage(A, 0, 0, F.width, F.height), W.innerText = "Scanning...", F.toBlob((k) => {
      k && Fa(k, rt).then((V) => {
        if (console.log("Barcodes found: ", V), V && V.length > 0) {
          const G = V[0].text;
          console.log("barcode message: ", G), W.innerText = G;
        } else W.innerText = "No barcode found";
      }).catch((V) => {
        console.error("Error reading barcodes: ", V), W.innerText = "Error scanning barcode";
      });
    }, "image/png")) : W.innerText = "Video not ready - try again";
  }
  $a(async () => {
    try {
      const F = await Dr("text", { format: "QRCode", scale: 5 });
      j.innerHTML = F.svg;
    } catch (A) {
      console.error("Error generating QR code:", A), j.innerHTML = "<p>Error generating QR code.</p>";
    }
  });
  var et = Wa(), yt = ba(et);
  kr(yt, (A) => j = A, () => j);
  var ot = pt(yt, 2), nt = pt(_a(ot), 2);
  nt.__click = Y;
  var st = pt(nt, 2);
  st.__click = z;
  var D = pt(st, 6);
  Oa(D), kr(D, (A) => R = A, () => R);
  var Z = pt(D, 2);
  Z.__click = () => {
    console.log("Clicked");
  }, Aa(ot), Ra(D, () => Ta(c), (A) => Sa(c, A)), ha(d, et), Pa();
}
Ea(["click"]);
export {
  Ha as component
};
