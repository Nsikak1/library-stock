import { f as Kt, a as st, c as ss } from "../chunks/BjTfwbem.js";
import { o as pr } from "../chunks/B3YYK8RE.js";
import { a5 as In, s as ai, a8 as oi, a9 as ci, a7 as On, P as ro, f as rs, M as as, ad as ao, Q as os } from "../chunks/CdrJcFTF.js";
import { d as fr } from "../chunks/Cuooy7pM.js";
import { i as tn } from "../chunks/5RHKzVXV.js";
import { R as oo, S as co, A as lo } from "../chunks/B-6X-cLz.js";
import { b as uo } from "../chunks/DdzU8gf5.js";
import { b as ho } from "../chunks/DBcdFs3K.js";
import { r as mo } from "../chunks/CYOjpWgn.js";
const po = "";
function fo(...n) {
  return ho + po + mo(n[0], n[1]);
}
var cs = {};
function go(n, e) {
  return e.forEach(function(t) {
    t && typeof t != "string" && !Array.isArray(t) && Object.keys(t).forEach(function(i) {
      if (i !== "default" && !(i in n)) {
        var s = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, s.get ? s : { enumerable: true, get: function() {
          return t[i];
        } });
      }
    });
  }), Object.freeze(n);
}
var vo = Object.defineProperty, bo = (n, e, t) => e in n ? vo(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t, ds = (n, e, t) => bo(n, typeof e != "symbol" ? e + "" : e, t);
class le {
  constructor() {
    ds(this, "_locking"), ds(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0;
  }
  isLocked() {
    return this._locks > 0;
  }
  lock() {
    this._locks += 1;
    let e;
    const t = new Promise((s) => e = () => {
      this._locks -= 1, s();
    }), i = this._locking.then(() => e);
    return this._locking = this._locking.then(() => t), i;
  }
}
function Y(n, e) {
  if (!n) throw new Error(e);
}
const yo = 34028234663852886e22, ko = -34028234663852886e22, To = 4294967295, So = 2147483647, Co = -2147483648;
function Jt(n) {
  if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > So || n < Co) throw new Error("invalid int 32: " + n);
}
function nn(n) {
  if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > To || n < 0) throw new Error("invalid uint 32: " + n);
}
function gr(n) {
  if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > yo || n < ko)) throw new Error("invalid float 32: " + n);
}
const vr = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
function Eo(n) {
  const e = n[vr];
  return Y(e, "missing enum type on enum object"), e;
}
function br(n, e, t, i) {
  n[vr] = yr(e, t.map((s) => ({ no: s.no, name: s.name, localName: n[s.no] })));
}
function yr(n, e, t) {
  const i = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), r = [];
  for (const o of e) {
    const a = kr(o);
    r.push(a), i[o.name] = a, s[o.no] = a;
  }
  return { typeName: n, values: r, findName(o) {
    return i[o];
  }, findNumber(o) {
    return s[o];
  } };
}
function Po(n, e, t) {
  const i = {};
  for (const s of e) {
    const r = kr(s);
    i[r.localName] = r.no, i[r.no] = r.localName;
  }
  return br(i, n, e), i;
}
function kr(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
class Dn {
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(e, t) {
    const i = this.getType(), s = i.runtime.bin, r = s.makeReadOptions(t);
    return s.readMessage(this, r.readerFactory(e), e.byteLength, r), this;
  }
  fromJson(e, t) {
    const i = this.getType(), s = i.runtime.json, r = s.makeReadOptions(t);
    return s.readMessage(i, e, r, this), this;
  }
  fromJsonString(e, t) {
    let i;
    try {
      i = JSON.parse(e);
    } catch (s) {
      throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(s instanceof Error ? s.message : String(s)));
    }
    return this.fromJson(i, t);
  }
  toBinary(e) {
    const t = this.getType(), i = t.runtime.bin, s = i.makeWriteOptions(e), r = s.writerFactory();
    return i.writeMessage(this, r, s), r.finish();
  }
  toJson(e) {
    const t = this.getType(), i = t.runtime.json, s = i.makeWriteOptions(e);
    return i.writeMessage(this, s);
  }
  toJsonString(e) {
    var t;
    const i = this.toJson(e);
    return JSON.stringify(i, null, (t = e == null ? void 0 : e.prettySpaces) !== null && t !== void 0 ? t : 0);
  }
  toJSON() {
    return this.toJson({ emitDefaultValues: true });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
}
function Ro(n, e, t, i) {
  var s;
  const r = (s = i == null ? void 0 : i.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1), o = { [r]: function(a) {
    n.util.initFields(this), n.util.initPartial(a, this);
  } }[r];
  return Object.setPrototypeOf(o.prototype, new Dn()), Object.assign(o, { runtime: n, typeName: e, fields: n.util.newFieldList(t), fromBinary(a, c) {
    return new o().fromBinary(a, c);
  }, fromJson(a, c) {
    return new o().fromJson(a, c);
  }, fromJsonString(a, c) {
    return new o().fromJsonString(a, c);
  }, equals(a, c) {
    return n.util.equals(o, a, c);
  } }), o;
}
function _o() {
  let n = 0, e = 0;
  for (let i = 0; i < 28; i += 7) {
    let s = this.buf[this.pos++];
    if (n |= (s & 127) << i, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [n, e];
  for (let i = 3; i <= 31; i += 7) {
    let s = this.buf[this.pos++];
    if (e |= (s & 127) << i, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function Li(n, e, t) {
  for (let r = 0; r < 28; r = r + 7) {
    const o = n >>> r, a = !(!(o >>> 7) && e == 0), c = (a ? o | 128 : o) & 255;
    if (t.push(c), !a) return;
  }
  const i = n >>> 28 & 15 | (e & 7) << 4, s = e >> 3 != 0;
  if (t.push((s ? i | 128 : i) & 255), !!s) {
    for (let r = 3; r < 31; r = r + 7) {
      const o = e >>> r, a = !!(o >>> 7), c = (a ? o | 128 : o) & 255;
      if (t.push(c), !a) return;
    }
    t.push(e >>> 31 & 1);
  }
}
const zt = 4294967296;
function ls(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let i = 0, s = 0;
  function r(o, a) {
    const c = Number(n.slice(o, a));
    s *= t, i = i * t + c, i >= zt && (s = s + (i / zt | 0), i = i % zt);
  }
  return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), e ? Sr(i, s) : Mn(i, s);
}
function wo(n, e) {
  let t = Mn(n, e);
  const i = t.hi & 2147483648;
  i && (t = Sr(t.lo, t.hi));
  const s = Tr(t.lo, t.hi);
  return i ? "-" + s : s;
}
function Tr(n, e) {
  if ({ lo: n, hi: e } = Io(n, e), e <= 2097151) return String(zt * e + n);
  const t = n & 16777215, i = (n >>> 24 | e << 8) & 16777215, s = e >> 16 & 65535;
  let r = t + i * 6777216 + s * 6710656, o = i + s * 8147497, a = s * 2;
  const c = 1e7;
  return r >= c && (o += Math.floor(r / c), r %= c), o >= c && (a += Math.floor(o / c), o %= c), a.toString() + us(o) + us(r);
}
function Io(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function Mn(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function Sr(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, Mn(n, e);
}
const us = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function hs(n, e) {
  if (n >= 0) {
    for (; n > 127; ) e.push(n & 127 | 128), n = n >>> 7;
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++) e.push(n & 127 | 128), n = n >> 7;
    e.push(1);
  }
}
function Oo() {
  let n = this.buf[this.pos++], e = n & 127;
  if ((n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 7, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 14, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 21, (n & 128) == 0) return this.assertBounds(), e;
  n = this.buf[this.pos++], e |= (n & 15) << 28;
  for (let t = 5; (n & 128) !== 0 && t < 10; t++) n = this.buf[this.pos++];
  if ((n & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function Do() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof cs != "object" || cs.BUF_BIGINT_DISABLE !== "1")) {
    const s = BigInt("-9223372036854775808"), r = BigInt("9223372036854775807"), o = BigInt("0"), a = BigInt("18446744073709551615");
    return { zero: BigInt(0), supported: true, parse(c) {
      const d = typeof c == "bigint" ? c : BigInt(c);
      if (d > r || d < s) throw new Error("int64 invalid: ".concat(c));
      return d;
    }, uParse(c) {
      const d = typeof c == "bigint" ? c : BigInt(c);
      if (d > a || d < o) throw new Error("uint64 invalid: ".concat(c));
      return d;
    }, enc(c) {
      return n.setBigInt64(0, this.parse(c), true), { lo: n.getInt32(0, true), hi: n.getInt32(4, true) };
    }, uEnc(c) {
      return n.setBigInt64(0, this.uParse(c), true), { lo: n.getInt32(0, true), hi: n.getInt32(4, true) };
    }, dec(c, d) {
      return n.setInt32(0, c, true), n.setInt32(4, d, true), n.getBigInt64(0, true);
    }, uDec(c, d) {
      return n.setInt32(0, c, true), n.setInt32(4, d, true), n.getBigUint64(0, true);
    } };
  }
  const t = (s) => Y(/^-?[0-9]+$/.test(s), "int64 invalid: ".concat(s)), i = (s) => Y(/^[0-9]+$/.test(s), "uint64 invalid: ".concat(s));
  return { zero: "0", supported: false, parse(s) {
    return typeof s != "string" && (s = s.toString()), t(s), s;
  }, uParse(s) {
    return typeof s != "string" && (s = s.toString()), i(s), s;
  }, enc(s) {
    return typeof s != "string" && (s = s.toString()), t(s), ls(s);
  }, uEnc(s) {
    return typeof s != "string" && (s = s.toString()), i(s), ls(s);
  }, dec(s, r) {
    return wo(s, r);
  }, uDec(s, r) {
    return Tr(s, r);
  } };
}
const J = Do();
var S;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(S || (S = {}));
var Xe;
(function(n) {
  n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING";
})(Xe || (Xe = {}));
function We(n, e, t) {
  if (e === t) return true;
  if (n == S.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length) return false;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  switch (n) {
    case S.UINT64:
    case S.FIXED64:
    case S.INT64:
    case S.SFIXED64:
    case S.SINT64:
      return e == t;
  }
  return false;
}
function Ct(n, e) {
  switch (n) {
    case S.BOOL:
      return false;
    case S.UINT64:
    case S.FIXED64:
    case S.INT64:
    case S.SFIXED64:
    case S.SINT64:
      return e == 0 ? J.zero : "0";
    case S.DOUBLE:
    case S.FLOAT:
      return 0;
    case S.BYTES:
      return new Uint8Array(0);
    case S.STRING:
      return "";
    default:
      return 0;
  }
}
function Cr(n, e) {
  switch (n) {
    case S.BOOL:
      return e === false;
    case S.STRING:
      return e === "";
    case S.BYTES:
      return e instanceof Uint8Array && !e.byteLength;
    default:
      return e == 0;
  }
}
var Z;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(Z || (Z = {}));
class Mo {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
    let t = new Uint8Array(e), i = 0;
    for (let s = 0; s < this.chunks.length; s++) t.set(this.chunks[s], i), i += this.chunks[s].length;
    return this.chunks = [], t;
  }
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let e = this.finish(), t = this.stack.pop();
    if (!t) throw new Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
  }
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
  }
  uint32(e) {
    for (nn(e); e > 127; ) this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  int32(e) {
    return Jt(e), hs(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    gr(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, true), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, true), this.raw(t);
  }
  fixed32(e) {
    nn(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, true), this.raw(t);
  }
  sfixed32(e) {
    Jt(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, true), this.raw(t);
  }
  sint32(e) {
    return Jt(e), e = (e << 1 ^ e >> 31) >>> 0, hs(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8), i = new DataView(t.buffer), s = J.enc(e);
    return i.setInt32(0, s.lo, true), i.setInt32(4, s.hi, true), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8), i = new DataView(t.buffer), s = J.uEnc(e);
    return i.setInt32(0, s.lo, true), i.setInt32(4, s.hi, true), this.raw(t);
  }
  int64(e) {
    let t = J.enc(e);
    return Li(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = J.enc(e), i = t.hi >> 31, s = t.lo << 1 ^ i, r = (t.hi << 1 | t.lo >>> 31) ^ i;
    return Li(s, r, this.buf), this;
  }
  uint64(e) {
    let t = J.uEnc(e);
    return Li(t.lo, t.hi, this.buf), this;
  }
}
class Ao {
  constructor(e, t) {
    this.varint64 = _o, this.uint32 = Oo, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
  }
  tag() {
    let e = this.uint32(), t = e >>> 3, i = e & 7;
    if (t <= 0 || i < 0 || i > 5) throw new Error("illegal tag: field no " + t + " wire type " + i);
    return [t, i];
  }
  skip(e, t) {
    let i = this.pos;
    switch (e) {
      case Z.Varint:
        for (; this.buf[this.pos++] & 128; ) ;
        break;
      case Z.Bit64:
        this.pos += 4;
      case Z.Bit32:
        this.pos += 4;
        break;
      case Z.LengthDelimited:
        let s = this.uint32();
        this.pos += s;
        break;
      case Z.StartGroup:
        for (; ; ) {
          const [r, o] = this.tag();
          if (o === Z.EndGroup) {
            if (t !== void 0 && r !== t) throw new Error("invalid end group tag");
            break;
          }
          this.skip(o, r);
        }
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(i, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  int64() {
    return J.dec(...this.varint64());
  }
  uint64() {
    return J.uDec(...this.varint64());
  }
  sint64() {
    let [e, t] = this.varint64(), i = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ i, t = t >>> 1 ^ i, J.dec(e, t);
  }
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  fixed64() {
    return J.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return J.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  bytes() {
    let e = this.uint32(), t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function xo(n, e, t, i) {
  let s;
  return { typeName: e, extendee: t, get field() {
    if (!s) {
      const r = typeof i == "function" ? i() : i;
      r.name = e.split(".").pop(), r.jsonName = "[".concat(e, "]"), s = n.util.newFieldList([r]).list()[0];
    }
    return s;
  }, runtime: n };
}
function Er(n) {
  const e = n.field.localName, t = /* @__PURE__ */ Object.create(null);
  return t[e] = No(n), [t, () => t[e]];
}
function No(n) {
  const e = n.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Ct(e.T, e.L);
    case "message":
      const t = e.T, i = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function Lo(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t].no == e.no) return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
let Ue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), ki = [];
for (let n = 0; n < Ue.length; n++) ki[Ue[n].charCodeAt(0)] = n;
ki[45] = Ue.indexOf("+");
ki[95] = Ue.indexOf("/");
const Pr = { dec(n) {
  let e = n.length * 3 / 4;
  n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
  let t = new Uint8Array(e), i = 0, s = 0, r, o = 0;
  for (let a = 0; a < n.length; a++) {
    if (r = ki[n.charCodeAt(a)], r === void 0) switch (n[a]) {
      case "=":
        s = 0;
      case `
`:
      case "\r":
      case "	":
      case " ":
        continue;
      default:
        throw Error("invalid base64 string.");
    }
    switch (s) {
      case 0:
        o = r, s = 1;
        break;
      case 1:
        t[i++] = o << 2 | (r & 48) >> 4, o = r, s = 2;
        break;
      case 2:
        t[i++] = (o & 15) << 4 | (r & 60) >> 2, o = r, s = 3;
        break;
      case 3:
        t[i++] = (o & 3) << 6 | r, s = 0;
        break;
    }
  }
  if (s == 1) throw Error("invalid base64 string.");
  return t.subarray(0, i);
}, enc(n) {
  let e = "", t = 0, i, s = 0;
  for (let r = 0; r < n.length; r++) switch (i = n[r], t) {
    case 0:
      e += Ue[i >> 2], s = (i & 3) << 4, t = 1;
      break;
    case 1:
      e += Ue[s | i >> 4], s = (i & 15) << 2, t = 2;
      break;
    case 2:
      e += Ue[s | i >> 6], e += Ue[i & 63], t = 0;
      break;
  }
  return t && (e += Ue[s], e += "=", t == 1 && (e += "=")), e;
} };
function Uo(n, e, t) {
  _r(e, n);
  const i = e.runtime.bin.makeReadOptions(t), s = Lo(n.getType().runtime.bin.listUnknownFields(n), e.field), [r, o] = Er(e);
  for (const a of s) e.runtime.bin.readField(r, i.readerFactory(a.data), e.field, a.wireType, i);
  return o();
}
function Fo(n, e, t, i) {
  _r(e, n);
  const s = e.runtime.bin.makeReadOptions(i), r = e.runtime.bin.makeWriteOptions(i);
  if (Rr(n, e)) {
    const d = n.getType().runtime.bin.listUnknownFields(n).filter((l) => l.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const l of d) n.getType().runtime.bin.onUnknownField(n, l.no, l.wireType, l.data);
  }
  const o = r.writerFactory();
  let a = e.field;
  !a.opt && !a.repeated && (a.kind == "enum" || a.kind == "scalar") && (a = Object.assign(Object.assign({}, e.field), { opt: true })), e.runtime.bin.writeField(a, t, o, r);
  const c = s.readerFactory(o.finish());
  for (; c.pos < c.len; ) {
    const [d, l] = c.tag(), u = c.skip(l, d);
    n.getType().runtime.bin.onUnknownField(n, d, l, u);
  }
}
function Rr(n, e) {
  const t = n.getType();
  return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find((i) => i.no == e.field.no);
}
function _r(n, e) {
  Y(n.extendee.typeName == e.getType().typeName, "extension ".concat(n.typeName, " can only be applied to message ").concat(n.extendee.typeName));
}
function wr(n, e) {
  const t = n.localName;
  if (n.repeated) return e[t].length > 0;
  if (n.oneof) return e[n.oneof.localName].case === t;
  switch (n.kind) {
    case "enum":
    case "scalar":
      return n.opt || n.req ? e[t] !== void 0 : n.kind == "enum" ? e[t] !== n.T.values[0].no : !Cr(n.T, e[t]);
    case "message":
      return e[t] !== void 0;
    case "map":
      return Object.keys(e[t]).length > 0;
  }
}
function ms(n, e) {
  const t = n.localName, i = !n.opt && !n.req;
  if (n.repeated) e[t] = [];
  else if (n.oneof) e[n.oneof.localName] = { case: void 0 };
  else switch (n.kind) {
    case "map":
      e[t] = {};
      break;
    case "enum":
      e[t] = i ? n.T.values[0].no : void 0;
      break;
    case "scalar":
      e[t] = i ? Ct(n.T, n.L) : void 0;
      break;
    case "message":
      e[t] = void 0;
      break;
  }
}
function Fe(n, e) {
  if (n === null || typeof n != "object" || !Object.getOwnPropertyNames(Dn.prototype).every((i) => i in n && typeof n[i] == "function")) return false;
  const t = n.getType();
  return t === null || typeof t != "function" || !("typeName" in t) || typeof t.typeName != "string" ? false : e === void 0 ? true : t.typeName == e.typeName;
}
function Ir(n, e) {
  return Fe(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
S.DOUBLE, S.FLOAT, S.INT64, S.UINT64, S.INT32, S.UINT32, S.BOOL, S.STRING, S.BYTES;
const ps = { ignoreUnknownFields: false }, fs = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
function jo(n) {
  return n ? Object.assign(Object.assign({}, ps), n) : ps;
}
function Bo(n) {
  return n ? Object.assign(Object.assign({}, fs), n) : fs;
}
const di = /* @__PURE__ */ Symbol(), Qt = /* @__PURE__ */ Symbol();
function Vo() {
  return { makeReadOptions: jo, makeWriteOptions: Bo, readMessage(n, e, t, i) {
    if (e == null || Array.isArray(e) || typeof e != "object") throw new Error("cannot decode message ".concat(n.typeName, " from JSON: ").concat(Ie(e)));
    i = i ?? new n();
    const s = /* @__PURE__ */ new Map(), r = t.typeRegistry;
    for (const [o, a] of Object.entries(e)) {
      const c = n.fields.findJsonName(o);
      if (c) {
        if (c.oneof) {
          if (a === null && c.kind == "scalar") continue;
          const d = s.get(c.oneof);
          if (d !== void 0) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: multiple keys for oneof "').concat(c.oneof.name, '" present: "').concat(d, '", "').concat(o, '"'));
          s.set(c.oneof, o);
        }
        gs(i, a, c, t, n);
      } else {
        let d = false;
        if ((r == null ? void 0 : r.findExtension) && o.startsWith("[") && o.endsWith("]")) {
          const l = r.findExtension(o.substring(1, o.length - 1));
          if (l && l.extendee.typeName == n.typeName) {
            d = true;
            const [u, h] = Er(l);
            gs(u, a, l.field, t, l), Fo(i, l, h(), t);
          }
        }
        if (!d && !t.ignoreUnknownFields) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: key "').concat(o, '" is unknown'));
      }
    }
    return i;
  }, writeMessage(n, e) {
    const t = n.getType(), i = {};
    let s;
    try {
      for (s of t.fields.byNumber()) {
        if (!wr(s, n)) {
          if (s.req) throw "required field not set";
          if (!e.emitDefaultValues || !Wo(s)) continue;
        }
        const o = s.oneof ? n[s.oneof.localName].value : n[s.localName], a = vs(s, o, e);
        a !== void 0 && (i[e.useProtoFieldName ? s.name : s.jsonName] = a);
      }
      const r = e.typeRegistry;
      if (r == null ? void 0 : r.findExtensionFor) for (const o of t.runtime.bin.listUnknownFields(n)) {
        const a = r.findExtensionFor(t.typeName, o.no);
        if (a && Rr(n, a)) {
          const c = Uo(n, a, e), d = vs(a.field, c, e);
          d !== void 0 && (i[a.field.jsonName] = d);
        }
      }
    } catch (r) {
      const o = s ? "cannot encode field ".concat(t.typeName, ".").concat(s.name, " to JSON") : "cannot encode message ".concat(t.typeName, " to JSON"), a = r instanceof Error ? r.message : String(r);
      throw new Error(o + (a.length > 0 ? ": ".concat(a) : ""));
    }
    return i;
  }, readScalar(n, e, t) {
    return xt(n, e, t ?? Xe.BIGINT, true);
  }, writeScalar(n, e, t) {
    if (e !== void 0 && (t || Cr(n, e))) return Yt(n, e);
  }, debug: Ie };
}
function Ie(n) {
  if (n === null) return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100 ? "string" : '"'.concat(n.split('"').join('\\"'), '"');
    default:
      return String(n);
  }
}
function gs(n, e, t, i, s) {
  let r = t.localName;
  if (t.repeated) {
    if (Y(t.kind != "map"), e === null) return;
    if (!Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(e)));
    const o = n[r];
    for (const a of e) {
      if (a === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(a)));
      switch (t.kind) {
        case "message":
          o.push(t.T.fromJson(a, i));
          break;
        case "enum":
          const c = Ui(t.T, a, i.ignoreUnknownFields, true);
          c !== Qt && o.push(c);
          break;
        case "scalar":
          try {
            o.push(xt(t.T, a, t.L, true));
          } catch (d) {
            let l = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(a));
            throw d instanceof Error && d.message.length > 0 && (l += ": ".concat(d.message)), new Error(l);
          }
          break;
      }
    }
  } else if (t.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(e)));
    const o = n[r];
    for (const [a, c] of Object.entries(e)) {
      if (c === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: map value null"));
      let d;
      try {
        d = qo(t.K, a);
      } catch (l) {
        let u = "cannot decode map key for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(e));
        throw l instanceof Error && l.message.length > 0 && (u += ": ".concat(l.message)), new Error(u);
      }
      switch (t.V.kind) {
        case "message":
          o[d] = t.V.T.fromJson(c, i);
          break;
        case "enum":
          const l = Ui(t.V.T, c, i.ignoreUnknownFields, true);
          l !== Qt && (o[d] = l);
          break;
        case "scalar":
          try {
            o[d] = xt(t.V.T, c, Xe.BIGINT, true);
          } catch (u) {
            let h = "cannot decode map value for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(e));
            throw u instanceof Error && u.message.length > 0 && (h += ": ".concat(u.message)), new Error(h);
          }
          break;
      }
    }
  } else switch (t.oneof && (n = n[t.oneof.localName] = { case: r }, r = "value"), t.kind) {
    case "message":
      const o = t.T;
      if (e === null && o.typeName != "google.protobuf.Value") return;
      let a = n[r];
      Fe(a) ? a.fromJson(e, i) : (n[r] = a = o.fromJson(e, i), o.fieldWrapper && !t.oneof && (n[r] = o.fieldWrapper.unwrapField(a)));
      break;
    case "enum":
      const c = Ui(t.T, e, i.ignoreUnknownFields, false);
      switch (c) {
        case di:
          ms(t, n);
          break;
        case Qt:
          break;
        default:
          n[r] = c;
          break;
      }
      break;
    case "scalar":
      try {
        const d = xt(t.T, e, t.L, false);
        d === di ? ms(t, n) : n[r] = d;
      } catch (d) {
        let l = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(Ie(e));
        throw d instanceof Error && d.message.length > 0 && (l += ": ".concat(d.message)), new Error(l);
      }
      break;
  }
}
function qo(n, e) {
  if (n === S.BOOL) switch (e) {
    case "true":
      e = true;
      break;
    case "false":
      e = false;
      break;
  }
  return xt(n, e, Xe.BIGINT, true).toString();
}
function xt(n, e, t, i) {
  if (e === null) return i ? Ct(n, t) : di;
  switch (n) {
    case S.DOUBLE:
    case S.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
      const s = Number(e);
      if (Number.isNaN(s) || !Number.isFinite(s)) break;
      return n == S.FLOAT && gr(s), s;
    case S.INT32:
    case S.FIXED32:
    case S.SFIXED32:
    case S.SINT32:
    case S.UINT32:
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0) break;
      return n == S.UINT32 || n == S.FIXED32 ? nn(r) : Jt(r), r;
    case S.INT64:
    case S.SFIXED64:
    case S.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = J.parse(e);
      return t ? o.toString() : o;
    case S.FIXED64:
    case S.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const a = J.uParse(e);
      return t ? a.toString() : a;
    case S.BOOL:
      if (typeof e != "boolean") break;
      return e;
    case S.STRING:
      if (typeof e != "string") break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case S.BYTES:
      if (e === "") return new Uint8Array(0);
      if (typeof e != "string") break;
      return Pr.dec(e);
  }
  throw new Error();
}
function Ui(n, e, t, i) {
  if (e === null) return n.typeName == "google.protobuf.NullValue" ? 0 : i ? n.values[0].no : di;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const s = n.findName(e);
      if (s !== void 0) return s.no;
      if (t) return Qt;
      break;
  }
  throw new Error("cannot decode enum ".concat(n.typeName, " from JSON: ").concat(Ie(e)));
}
function Wo(n) {
  return n.repeated || n.kind == "map" ? true : !(n.oneof || n.kind == "message" || n.opt || n.req);
}
function vs(n, e, t) {
  if (n.kind == "map") {
    Y(typeof e == "object" && e != null);
    const i = {}, s = Object.entries(e);
    switch (n.V.kind) {
      case "scalar":
        for (const [o, a] of s) i[o.toString()] = Yt(n.V.T, a);
        break;
      case "message":
        for (const [o, a] of s) i[o.toString()] = a.toJson(t);
        break;
      case "enum":
        const r = n.V.T;
        for (const [o, a] of s) i[o.toString()] = Fi(r, a, t.enumAsInteger);
        break;
    }
    return t.emitDefaultValues || s.length > 0 ? i : void 0;
  }
  if (n.repeated) {
    Y(Array.isArray(e));
    const i = [];
    switch (n.kind) {
      case "scalar":
        for (let s = 0; s < e.length; s++) i.push(Yt(n.T, e[s]));
        break;
      case "enum":
        for (let s = 0; s < e.length; s++) i.push(Fi(n.T, e[s], t.enumAsInteger));
        break;
      case "message":
        for (let s = 0; s < e.length; s++) i.push(e[s].toJson(t));
        break;
    }
    return t.emitDefaultValues || i.length > 0 ? i : void 0;
  }
  switch (n.kind) {
    case "scalar":
      return Yt(n.T, e);
    case "enum":
      return Fi(n.T, e, t.enumAsInteger);
    case "message":
      return Ir(n.T, e).toJson(t);
  }
}
function Fi(n, e, t) {
  var i;
  if (Y(typeof e == "number"), n.typeName == "google.protobuf.NullValue") return null;
  if (t) return e;
  const s = n.findNumber(e);
  return (i = s == null ? void 0 : s.name) !== null && i !== void 0 ? i : e;
}
function Yt(n, e) {
  switch (n) {
    case S.INT32:
    case S.SFIXED32:
    case S.SINT32:
    case S.FIXED32:
    case S.UINT32:
      return Y(typeof e == "number"), e;
    case S.FLOAT:
    case S.DOUBLE:
      return Y(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
    case S.STRING:
      return Y(typeof e == "string"), e;
    case S.BOOL:
      return Y(typeof e == "boolean"), e;
    case S.UINT64:
    case S.FIXED64:
    case S.INT64:
    case S.SFIXED64:
    case S.SINT64:
      return Y(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), e.toString();
    case S.BYTES:
      return Y(e instanceof Uint8Array), Pr.enc(e);
  }
}
const dt = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), bs = { readUnknownFields: true, readerFactory: (n) => new Ao(n) }, ys = { writeUnknownFields: true, writerFactory: () => new Mo() };
function Ko(n) {
  return n ? Object.assign(Object.assign({}, bs), n) : bs;
}
function Go(n) {
  return n ? Object.assign(Object.assign({}, ys), n) : ys;
}
function Ho() {
  return { makeReadOptions: Ko, makeWriteOptions: Go, listUnknownFields(n) {
    var e;
    return (e = n[dt]) !== null && e !== void 0 ? e : [];
  }, discardUnknownFields(n) {
    delete n[dt];
  }, writeUnknownFields(n, e) {
    const i = n[dt];
    if (i) for (const s of i) e.tag(s.no, s.wireType).raw(s.data);
  }, onUnknownField(n, e, t, i) {
    const s = n;
    Array.isArray(s[dt]) || (s[dt] = []), s[dt].push({ no: e, wireType: t, data: i });
  }, readMessage(n, e, t, i, s) {
    const r = n.getType(), o = s ? e.len : e.pos + t;
    let a, c;
    for (; e.pos < o && ([a, c] = e.tag(), !(s === true && c == Z.EndGroup)); ) {
      const d = r.fields.find(a);
      if (!d) {
        const l = e.skip(c, a);
        i.readUnknownFields && this.onUnknownField(n, a, c, l);
        continue;
      }
      ks(n, e, d, c, i);
    }
    if (s && (c != Z.EndGroup || a !== t)) throw new Error("invalid end group tag");
  }, readField: ks, writeMessage(n, e, t) {
    const i = n.getType();
    for (const s of i.fields.byNumber()) {
      if (!wr(s, n)) {
        if (s.req) throw new Error("cannot encode field ".concat(i.typeName, ".").concat(s.name, " to binary: required field not set"));
        continue;
      }
      const r = s.oneof ? n[s.oneof.localName].value : n[s.localName];
      Ts(s, r, e, t);
    }
    return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
  }, writeField(n, e, t, i) {
    e !== void 0 && Ts(n, e, t, i);
  } };
}
function ks(n, e, t, i, s) {
  let { repeated: r, localName: o } = t;
  switch (t.oneof && (n = n[t.oneof.localName], n.case != o && delete n.value, n.case = o, o = "value"), t.kind) {
    case "scalar":
    case "enum":
      const a = t.kind == "enum" ? S.INT32 : t.T;
      let c = li;
      if (t.kind == "scalar" && t.L > 0 && (c = zo), r) {
        let h = n[o];
        if (i == Z.LengthDelimited && a != S.STRING && a != S.BYTES) {
          let b = e.uint32() + e.pos;
          for (; e.pos < b; ) h.push(c(e, a));
        } else h.push(c(e, a));
      } else n[o] = c(e, a);
      break;
    case "message":
      const d = t.T;
      r ? n[o].push(Xt(e, new d(), s, t)) : Fe(n[o]) ? Xt(e, n[o], s, t) : (n[o] = Xt(e, new d(), s, t), d.fieldWrapper && !t.oneof && !t.repeated && (n[o] = d.fieldWrapper.unwrapField(n[o])));
      break;
    case "map":
      let [l, u] = Jo(t, e, s);
      n[o][l] = u;
      break;
  }
}
function Xt(n, e, t, i) {
  const s = e.getType().runtime.bin, r = i == null ? void 0 : i.delimited;
  return s.readMessage(e, n, r ? i.no : n.uint32(), t, r), e;
}
function Jo(n, e, t) {
  const i = e.uint32(), s = e.pos + i;
  let r, o;
  for (; e.pos < s; ) {
    const [a] = e.tag();
    switch (a) {
      case 1:
        r = li(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            o = li(e, n.V.T);
            break;
          case "enum":
            o = e.int32();
            break;
          case "message":
            o = Xt(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (r === void 0 && (r = Ct(n.K, Xe.BIGINT)), typeof r != "string" && typeof r != "number" && (r = r.toString()), o === void 0) switch (n.V.kind) {
    case "scalar":
      o = Ct(n.V.T, Xe.BIGINT);
      break;
    case "enum":
      o = n.V.T.values[0].no;
      break;
    case "message":
      o = new n.V.T();
      break;
  }
  return [r, o];
}
function zo(n, e) {
  const t = li(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function li(n, e) {
  switch (e) {
    case S.STRING:
      return n.string();
    case S.BOOL:
      return n.bool();
    case S.DOUBLE:
      return n.double();
    case S.FLOAT:
      return n.float();
    case S.INT32:
      return n.int32();
    case S.INT64:
      return n.int64();
    case S.UINT64:
      return n.uint64();
    case S.FIXED64:
      return n.fixed64();
    case S.BYTES:
      return n.bytes();
    case S.FIXED32:
      return n.fixed32();
    case S.SFIXED32:
      return n.sfixed32();
    case S.SFIXED64:
      return n.sfixed64();
    case S.SINT64:
      return n.sint64();
    case S.UINT32:
      return n.uint32();
    case S.SINT32:
      return n.sint32();
  }
}
function Ts(n, e, t, i) {
  Y(e !== void 0);
  const s = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let r = n.kind == "enum" ? S.INT32 : n.T;
      if (s) if (Y(Array.isArray(e)), n.packed) Yo(t, r, n.no, e);
      else for (const o of e) Nt(t, r, n.no, o);
      else Nt(t, r, n.no, e);
      break;
    case "message":
      if (s) {
        Y(Array.isArray(e));
        for (const o of e) Ss(t, i, n, o);
      } else Ss(t, i, n, e);
      break;
    case "map":
      Y(typeof e == "object" && e != null);
      for (const [o, a] of Object.entries(e)) Qo(t, i, n, o, a);
      break;
  }
}
function Qo(n, e, t, i, s) {
  n.tag(t.no, Z.LengthDelimited), n.fork();
  let r = i;
  switch (t.K) {
    case S.INT32:
    case S.FIXED32:
    case S.UINT32:
    case S.SFIXED32:
    case S.SINT32:
      r = Number.parseInt(i);
      break;
    case S.BOOL:
      Y(i == "true" || i == "false"), r = i == "true";
      break;
  }
  switch (Nt(n, t.K, 1, r), t.V.kind) {
    case "scalar":
      Nt(n, t.V.T, 2, s);
      break;
    case "enum":
      Nt(n, S.INT32, 2, s);
      break;
    case "message":
      Y(s !== void 0), n.tag(2, Z.LengthDelimited).bytes(s.toBinary(e));
      break;
  }
  n.join();
}
function Ss(n, e, t, i) {
  const s = Ir(t.T, i);
  t.delimited ? n.tag(t.no, Z.StartGroup).raw(s.toBinary(e)).tag(t.no, Z.EndGroup) : n.tag(t.no, Z.LengthDelimited).bytes(s.toBinary(e));
}
function Nt(n, e, t, i) {
  Y(i !== void 0);
  let [s, r] = Or(e);
  n.tag(t, s)[r](i);
}
function Yo(n, e, t, i) {
  if (!i.length) return;
  n.tag(t, Z.LengthDelimited).fork();
  let [, s] = Or(e);
  for (let r = 0; r < i.length; r++) n[s](i[r]);
  n.join();
}
function Or(n) {
  let e = Z.Varint;
  switch (n) {
    case S.BYTES:
    case S.STRING:
      e = Z.LengthDelimited;
      break;
    case S.DOUBLE:
    case S.FIXED64:
    case S.SFIXED64:
      e = Z.Bit64;
      break;
    case S.FIXED32:
    case S.SFIXED32:
    case S.FLOAT:
      e = Z.Bit32;
      break;
  }
  const t = S[n].toLowerCase();
  return [e, t];
}
function Xo() {
  return { setEnumType: br, initPartial(n, e) {
    if (n === void 0) return;
    const t = e.getType();
    for (const i of t.fields.byMember()) {
      const s = i.localName, r = e, o = n;
      if (o[s] != null) switch (i.kind) {
        case "oneof":
          const a = o[s].case;
          if (a === void 0) continue;
          const c = i.findField(a);
          let d = o[s].value;
          c && c.kind == "message" && !Fe(d, c.T) ? d = new c.T(d) : c && c.kind === "scalar" && c.T === S.BYTES && (d = Rt(d)), r[s] = { case: a, value: d };
          break;
        case "scalar":
        case "enum":
          let l = o[s];
          i.T === S.BYTES && (l = i.repeated ? l.map(Rt) : Rt(l)), r[s] = l;
          break;
        case "map":
          switch (i.V.kind) {
            case "scalar":
            case "enum":
              if (i.V.T === S.BYTES) for (const [p, b] of Object.entries(o[s])) r[s][p] = Rt(b);
              else Object.assign(r[s], o[s]);
              break;
            case "message":
              const h = i.V.T;
              for (const p of Object.keys(o[s])) {
                let b = o[s][p];
                h.fieldWrapper || (b = new h(b)), r[s][p] = b;
              }
              break;
          }
          break;
        case "message":
          const u = i.T;
          if (i.repeated) r[s] = o[s].map((h) => Fe(h, u) ? h : new u(h));
          else {
            const h = o[s];
            u.fieldWrapper ? u.typeName === "google.protobuf.BytesValue" ? r[s] = Rt(h) : r[s] = h : r[s] = Fe(h, u) ? h : new u(h);
          }
          break;
      }
    }
  }, equals(n, e, t) {
    return e === t ? true : !e || !t ? false : n.fields.byMember().every((i) => {
      const s = e[i.localName], r = t[i.localName];
      if (i.repeated) {
        if (s.length !== r.length) return false;
        switch (i.kind) {
          case "message":
            return s.every((o, a) => i.T.equals(o, r[a]));
          case "scalar":
            return s.every((o, a) => We(i.T, o, r[a]));
          case "enum":
            return s.every((o, a) => We(S.INT32, o, r[a]));
        }
        throw new Error("repeated cannot contain ".concat(i.kind));
      }
      switch (i.kind) {
        case "message":
          let o = s, a = r;
          return i.T.fieldWrapper && (o !== void 0 && !Fe(o) && (o = i.T.fieldWrapper.wrapField(o)), a !== void 0 && !Fe(a) && (a = i.T.fieldWrapper.wrapField(a))), i.T.equals(o, a);
        case "enum":
          return We(S.INT32, s, r);
        case "scalar":
          return We(i.T, s, r);
        case "oneof":
          if (s.case !== r.case) return false;
          const c = i.findField(s.case);
          if (c === void 0) return true;
          switch (c.kind) {
            case "message":
              return c.T.equals(s.value, r.value);
            case "enum":
              return We(S.INT32, s.value, r.value);
            case "scalar":
              return We(c.T, s.value, r.value);
          }
          throw new Error("oneof cannot contain ".concat(c.kind));
        case "map":
          const d = Object.keys(s).concat(Object.keys(r));
          switch (i.V.kind) {
            case "message":
              const l = i.V.T;
              return d.every((h) => l.equals(s[h], r[h]));
            case "enum":
              return d.every((h) => We(S.INT32, s[h], r[h]));
            case "scalar":
              const u = i.V.T;
              return d.every((h) => We(u, s[h], r[h]));
          }
          break;
      }
    });
  }, clone(n) {
    const e = n.getType(), t = new e(), i = t;
    for (const s of e.fields.byMember()) {
      const r = n[s.localName];
      let o;
      if (s.repeated) o = r.map(Gt);
      else if (s.kind == "map") {
        o = i[s.localName];
        for (const [a, c] of Object.entries(r)) o[a] = Gt(c);
      } else s.kind == "oneof" ? o = s.findField(r.case) ? { case: r.case, value: Gt(r.value) } : { case: void 0 } : o = Gt(r);
      i[s.localName] = o;
    }
    for (const s of e.runtime.bin.listUnknownFields(n)) e.runtime.bin.onUnknownField(i, s.no, s.wireType, s.data);
    return t;
  } };
}
function Gt(n) {
  if (n === void 0) return n;
  if (Fe(n)) return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Rt(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
function $o(n, e, t) {
  return { syntax: n, json: Vo(), bin: Ho(), util: Object.assign(Object.assign({}, Xo()), { newFieldList: e, initFields: t }), makeMessageType(i, s, r) {
    return Ro(this, i, s, r);
  }, makeEnum: Po, makeEnumType: yr, getEnumType: Eo, makeExtension(i, s, r) {
    return xo(this, i, s, r);
  } };
}
class Zo {
  constructor(e, t) {
    this._fields = e, this._normalizer = t;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const i of this.list()) t[i.jsonName] = t[i.name] = i;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const i of this.list()) t[i.no] = i;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const i of this.list()) i.oneof ? i.oneof !== t && (t = i.oneof, e.push(t)) : e.push(i);
    }
    return this.members;
  }
}
function Dr(n, e) {
  const t = Mr(n);
  return e ? t : rc(sc(t));
}
function ec(n) {
  return Dr(n, false);
}
const tc = Mr;
function Mr(n) {
  let e = false;
  const t = [];
  for (let i = 0; i < n.length; i++) {
    let s = n.charAt(i);
    switch (s) {
      case "_":
        e = true;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(s), e = false;
        break;
      default:
        e && (e = false, s = s.toUpperCase()), t.push(s);
        break;
    }
  }
  return t.join("");
}
const ic = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), nc = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ar = (n) => "".concat(n, "$"), sc = (n) => nc.has(n) ? Ar(n) : n, rc = (n) => ic.has(n) ? Ar(n) : n;
class ac {
  constructor(e) {
    this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e, this.localName = ec(e);
  }
  addField(e) {
    Y(e.oneof === this, "field ".concat(e.name, " not one of ").concat(this.name)), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let t = 0; t < this.fields.length; t++) this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
function oc(n, e) {
  var t, i, s, r, o, a;
  const c = [];
  let d;
  for (const l of typeof n == "function" ? n() : n) {
    const u = l;
    if (u.localName = Dr(l.name, l.oneof !== void 0), u.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : tc(l.name), u.repeated = (i = l.repeated) !== null && i !== void 0 ? i : false, l.kind == "scalar" && (u.L = (s = l.L) !== null && s !== void 0 ? s : Xe.BIGINT), u.delimited = (r = l.delimited) !== null && r !== void 0 ? r : false, u.req = (o = l.req) !== null && o !== void 0 ? o : false, u.opt = (a = l.opt) !== null && a !== void 0 ? a : false, l.packed === void 0 && (u.packed = l.kind == "enum" || l.kind == "scalar" && l.T != S.BYTES && l.T != S.STRING), l.oneof !== void 0) {
      const h = typeof l.oneof == "string" ? l.oneof : l.oneof.name;
      (!d || d.name != h) && (d = new ac(h)), u.oneof = d, d.addField(u);
    }
    c.push(u);
  }
  return c;
}
const f = $o("proto3", (n) => new Zo(n, (e) => oc(e)), (n) => {
  for (const e of n.getType().fields.byMember()) {
    if (e.opt) continue;
    const t = e.localName, i = n;
    if (e.repeated) {
      i[t] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        i[t] = { case: void 0 };
        break;
      case "enum":
        i[t] = 0;
        break;
      case "map":
        i[t] = {};
        break;
      case "scalar":
        i[t] = Ct(e.T, e.L);
        break;
    }
  }
});
class he extends Dn {
  constructor(e) {
    super(), this.seconds = J.zero, this.nanos = 0, f.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string") throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(f.json.debug(e)));
    const i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!i) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const s = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
    if (Number.isNaN(s)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = J.parse(s / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let i = "Z";
    if (this.nanos > 0) {
      const s = (this.nanos + 1e9).toString().substring(1);
      s.substring(3) === "000000" ? i = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? i = "." + s.substring(0, 6) + "Z" : i = "." + s + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", i);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return he.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new he({ seconds: J.parse(Math.floor(t / 1e3)), nanos: t % 1e3 * 1e6 });
  }
  static fromBinary(e, t) {
    return new he().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new he().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new he().fromJsonString(e, t);
  }
  static equals(e, t) {
    return f.util.equals(he, e, t);
  }
}
he.runtime = f;
he.typeName = "google.protobuf.Timestamp";
he.fields = f.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
const cc = f.makeMessageType("livekit.MetricsBatch", () => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: he }, { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "time_series", kind: "message", T: dc, repeated: true }, { no: 5, name: "events", kind: "message", T: uc, repeated: true }]), dc = f.makeMessageType("livekit.TimeSeriesMetric", () => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "samples", kind: "message", T: lc, repeated: true }, { no: 5, name: "rid", kind: "scalar", T: 13 }]), lc = f.makeMessageType("livekit.MetricSample", () => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: he }, { no: 3, name: "value", kind: "scalar", T: 2 }]), uc = f.makeMessageType("livekit.EventMetric", () => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 }, { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 6, name: "normalized_start_timestamp", kind: "message", T: he }, { no: 7, name: "normalized_end_timestamp", kind: "message", T: he, opt: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "rid", kind: "scalar", T: 13 }]), xr = f.makeEnum("livekit.BackupCodecPolicy", [{ no: 0, name: "PREFER_REGRESSION" }, { no: 1, name: "SIMULCAST" }, { no: 2, name: "REGRESSION" }]), Ce = f.makeEnum("livekit.TrackType", [{ no: 0, name: "AUDIO" }, { no: 1, name: "VIDEO" }, { no: 2, name: "DATA" }]), ee = f.makeEnum("livekit.TrackSource", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "CAMERA" }, { no: 2, name: "MICROPHONE" }, { no: 3, name: "SCREEN_SHARE" }, { no: 4, name: "SCREEN_SHARE_AUDIO" }]), An = f.makeEnum("livekit.VideoQuality", [{ no: 0, name: "LOW" }, { no: 1, name: "MEDIUM" }, { no: 2, name: "HIGH" }, { no: 3, name: "OFF" }]), Mt = f.makeEnum("livekit.ConnectionQuality", [{ no: 0, name: "POOR" }, { no: 1, name: "GOOD" }, { no: 2, name: "EXCELLENT" }, { no: 3, name: "LOST" }]), Ft = f.makeEnum("livekit.ClientConfigSetting", [{ no: 0, name: "UNSET" }, { no: 1, name: "DISABLED" }, { no: 2, name: "ENABLED" }]), Re = f.makeEnum("livekit.DisconnectReason", [{ no: 0, name: "UNKNOWN_REASON" }, { no: 1, name: "CLIENT_INITIATED" }, { no: 2, name: "DUPLICATE_IDENTITY" }, { no: 3, name: "SERVER_SHUTDOWN" }, { no: 4, name: "PARTICIPANT_REMOVED" }, { no: 5, name: "ROOM_DELETED" }, { no: 6, name: "STATE_MISMATCH" }, { no: 7, name: "JOIN_FAILURE" }, { no: 8, name: "MIGRATION" }, { no: 9, name: "SIGNAL_CLOSE" }, { no: 10, name: "ROOM_CLOSED" }, { no: 11, name: "USER_UNAVAILABLE" }, { no: 12, name: "USER_REJECTED" }, { no: 13, name: "SIP_TRUNK_FAILURE" }, { no: 14, name: "CONNECTION_TIMEOUT" }, { no: 15, name: "MEDIA_FAILURE" }]), it = f.makeEnum("livekit.ReconnectReason", [{ no: 0, name: "RR_UNKNOWN" }, { no: 1, name: "RR_SIGNAL_DISCONNECTED" }, { no: 2, name: "RR_PUBLISHER_FAILED" }, { no: 3, name: "RR_SUBSCRIBER_FAILED" }, { no: 4, name: "RR_SWITCH_CANDIDATE" }]), hc = f.makeEnum("livekit.SubscriptionError", [{ no: 0, name: "SE_UNKNOWN" }, { no: 1, name: "SE_CODEC_UNSUPPORTED" }, { no: 2, name: "SE_TRACK_NOTFOUND" }]), ne = f.makeEnum("livekit.AudioTrackFeature", [{ no: 0, name: "TF_STEREO" }, { no: 1, name: "TF_NO_DTX" }, { no: 2, name: "TF_AUTO_GAIN_CONTROL" }, { no: 3, name: "TF_ECHO_CANCELLATION" }, { no: 4, name: "TF_NOISE_SUPPRESSION" }, { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" }, { no: 6, name: "TF_PRECONNECT_BUFFER" }]), Ti = f.makeMessageType("livekit.Room", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 14, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 5, name: "creation_time", kind: "scalar", T: 3 }, { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 }, { no: 6, name: "turn_password", kind: "scalar", T: 9 }, { no: 7, name: "enabled_codecs", kind: "message", T: ui, repeated: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "num_participants", kind: "scalar", T: 13 }, { no: 11, name: "num_publishers", kind: "scalar", T: 13 }, { no: 10, name: "active_recording", kind: "scalar", T: 8 }, { no: 13, name: "version", kind: "message", T: Jr }]), ui = f.makeMessageType("livekit.Codec", () => [{ no: 1, name: "mime", kind: "scalar", T: 9 }, { no: 2, name: "fmtp_line", kind: "scalar", T: 9 }]), mc = f.makeMessageType("livekit.ParticipantPermission", () => [{ no: 1, name: "can_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "can_publish", kind: "scalar", T: 8 }, { no: 3, name: "can_publish_data", kind: "scalar", T: 8 }, { no: 9, name: "can_publish_sources", kind: "enum", T: f.getEnumType(ee), repeated: true }, { no: 7, name: "hidden", kind: "scalar", T: 8 }, { no: 8, name: "recorder", kind: "scalar", T: 8 }, { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 }, { no: 11, name: "agent", kind: "scalar", T: 8 }, { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 }]), rt = f.makeMessageType("livekit.ParticipantInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "identity", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: f.getEnumType(ft) }, { no: 4, name: "tracks", kind: "message", T: ut, repeated: true }, { no: 5, name: "metadata", kind: "scalar", T: 9 }, { no: 6, name: "joined_at", kind: "scalar", T: 3 }, { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 10, name: "version", kind: "scalar", T: 13 }, { no: 11, name: "permission", kind: "message", T: mc }, { no: 12, name: "region", kind: "scalar", T: 9 }, { no: 13, name: "is_publisher", kind: "scalar", T: 8 }, { no: 14, name: "kind", kind: "enum", T: f.getEnumType(jt) }, { no: 15, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 16, name: "disconnect_reason", kind: "enum", T: f.getEnumType(Re) }, { no: 18, name: "kind_details", kind: "enum", T: f.getEnumType(pc), repeated: true }]), ft = f.makeEnum("livekit.ParticipantInfo.State", [{ no: 0, name: "JOINING" }, { no: 1, name: "JOINED" }, { no: 2, name: "ACTIVE" }, { no: 3, name: "DISCONNECTED" }]), jt = f.makeEnum("livekit.ParticipantInfo.Kind", [{ no: 0, name: "STANDARD" }, { no: 1, name: "INGRESS" }, { no: 2, name: "EGRESS" }, { no: 3, name: "SIP" }, { no: 4, name: "AGENT" }, { no: 7, name: "CONNECTOR" }]), pc = f.makeEnum("livekit.ParticipantInfo.KindDetail", [{ no: 0, name: "CLOUD_AGENT" }, { no: 1, name: "FORWARDED" }]), te = f.makeEnum("livekit.Encryption.Type", [{ no: 0, name: "NONE" }, { no: 1, name: "GCM" }, { no: 2, name: "CUSTOM" }]), fc = f.makeMessageType("livekit.SimulcastCodecInfo", () => [{ no: 1, name: "mime_type", kind: "scalar", T: 9 }, { no: 2, name: "mid", kind: "scalar", T: 9 }, { no: 3, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: ze, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: f.getEnumType(Nr) }, { no: 6, name: "sdp_cid", kind: "scalar", T: 9 }]), ut = f.makeMessageType("livekit.TrackInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: f.getEnumType(Ce) }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "muted", kind: "scalar", T: 8 }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "simulcast", kind: "scalar", T: 8 }, { no: 8, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 9, name: "source", kind: "enum", T: f.getEnumType(ee) }, { no: 10, name: "layers", kind: "message", T: ze, repeated: true }, { no: 11, name: "mime_type", kind: "scalar", T: 9 }, { no: 12, name: "mid", kind: "scalar", T: 9 }, { no: 13, name: "codecs", kind: "message", T: fc, repeated: true }, { no: 14, name: "stereo", kind: "scalar", T: 8 }, { no: 15, name: "disable_red", kind: "scalar", T: 8 }, { no: 16, name: "encryption", kind: "enum", T: f.getEnumType(te) }, { no: 17, name: "stream", kind: "scalar", T: 9 }, { no: 18, name: "version", kind: "message", T: Jr }, { no: 19, name: "audio_features", kind: "enum", T: f.getEnumType(ne), repeated: true }, { no: 20, name: "backup_codec_policy", kind: "enum", T: f.getEnumType(xr) }]), ze = f.makeMessageType("livekit.VideoLayer", () => [{ no: 1, name: "quality", kind: "enum", T: f.getEnumType(An) }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }, { no: 4, name: "bitrate", kind: "scalar", T: 13 }, { no: 5, name: "ssrc", kind: "scalar", T: 13 }, { no: 6, name: "spatial_layer", kind: "scalar", T: 5 }, { no: 7, name: "rid", kind: "scalar", T: 9 }]), Nr = f.makeEnum("livekit.VideoLayer.Mode", [{ no: 0, name: "MODE_UNUSED" }, { no: 1, name: "ONE_SPATIAL_LAYER_PER_STREAM" }, { no: 2, name: "MULTIPLE_SPATIAL_LAYERS_PER_STREAM" }, { no: 3, name: "ONE_SPATIAL_LAYER_PER_STREAM_INCOMPLETE_RTCP_SR" }]), de = f.makeMessageType("livekit.DataPacket", () => [{ no: 1, name: "kind", kind: "enum", T: f.getEnumType(j) }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }, { no: 5, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "user", kind: "message", T: xn, oneof: "value" }, { no: 3, name: "speaker", kind: "message", T: gc, oneof: "value" }, { no: 6, name: "sip_dtmf", kind: "message", T: jr, oneof: "value" }, { no: 7, name: "transcription", kind: "message", T: vc, oneof: "value" }, { no: 8, name: "metrics", kind: "message", T: cc, oneof: "value" }, { no: 9, name: "chat_message", kind: "message", T: hi, oneof: "value" }, { no: 10, name: "rpc_request", kind: "message", T: Nn, oneof: "value" }, { no: 11, name: "rpc_ack", kind: "message", T: Ln, oneof: "value" }, { no: 12, name: "rpc_response", kind: "message", T: Un, oneof: "value" }, { no: 13, name: "stream_header", kind: "message", T: mi, oneof: "value" }, { no: 14, name: "stream_chunk", kind: "message", T: pi, oneof: "value" }, { no: 15, name: "stream_trailer", kind: "message", T: fi, oneof: "value" }, { no: 18, name: "encrypted_packet", kind: "message", T: Lr, oneof: "value" }, { no: 16, name: "sequence", kind: "scalar", T: 13 }, { no: 17, name: "participant_sid", kind: "scalar", T: 9 }]), j = f.makeEnum("livekit.DataPacket.Kind", [{ no: 0, name: "RELIABLE" }, { no: 1, name: "LOSSY" }]), Lr = f.makeMessageType("livekit.EncryptedPacket", () => [{ no: 1, name: "encryption_type", kind: "enum", T: f.getEnumType(te) }, { no: 2, name: "iv", kind: "scalar", T: 12 }, { no: 3, name: "key_index", kind: "scalar", T: 13 }, { no: 4, name: "encrypted_value", kind: "scalar", T: 12 }]), Ur = f.makeMessageType("livekit.EncryptedPacketPayload", () => [{ no: 1, name: "user", kind: "message", T: xn, oneof: "value" }, { no: 3, name: "chat_message", kind: "message", T: hi, oneof: "value" }, { no: 4, name: "rpc_request", kind: "message", T: Nn, oneof: "value" }, { no: 5, name: "rpc_ack", kind: "message", T: Ln, oneof: "value" }, { no: 6, name: "rpc_response", kind: "message", T: Un, oneof: "value" }, { no: 7, name: "stream_header", kind: "message", T: mi, oneof: "value" }, { no: 8, name: "stream_chunk", kind: "message", T: pi, oneof: "value" }, { no: 9, name: "stream_trailer", kind: "message", T: fi, oneof: "value" }]), gc = f.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{ no: 1, name: "speakers", kind: "message", T: Fr, repeated: true }]), Fr = f.makeMessageType("livekit.SpeakerInfo", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "level", kind: "scalar", T: 2 }, { no: 3, name: "active", kind: "scalar", T: 8 }]), xn = f.makeMessageType("livekit.UserPacket", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 5, name: "participant_identity", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 12 }, { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "topic", kind: "scalar", T: 9, opt: true }, { no: 8, name: "id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "start_time", kind: "scalar", T: 4, opt: true }, { no: 10, name: "end_time", kind: "scalar", T: 4, opt: true }, { no: 11, name: "nonce", kind: "scalar", T: 12 }]), jr = f.makeMessageType("livekit.SipDTMF", () => [{ no: 3, name: "code", kind: "scalar", T: 13 }, { no: 4, name: "digit", kind: "scalar", T: 9 }]), vc = f.makeMessageType("livekit.Transcription", () => [{ no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 }, { no: 3, name: "track_id", kind: "scalar", T: 9 }, { no: 4, name: "segments", kind: "message", T: bc, repeated: true }]), bc = f.makeMessageType("livekit.TranscriptionSegment", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_time", kind: "scalar", T: 4 }, { no: 4, name: "end_time", kind: "scalar", T: 4 }, { no: 5, name: "final", kind: "scalar", T: 8 }, { no: 6, name: "language", kind: "scalar", T: 9 }]), hi = f.makeMessageType("livekit.ChatMessage", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: true }, { no: 4, name: "message", kind: "scalar", T: 9 }, { no: 5, name: "deleted", kind: "scalar", T: 8 }, { no: 6, name: "generated", kind: "scalar", T: 8 }]), Nn = f.makeMessageType("livekit.RpcRequest", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "method", kind: "scalar", T: 9 }, { no: 3, name: "payload", kind: "scalar", T: 9 }, { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 }, { no: 5, name: "version", kind: "scalar", T: 13 }]), Ln = f.makeMessageType("livekit.RpcAck", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }]), Un = f.makeMessageType("livekit.RpcResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" }, { no: 3, name: "error", kind: "message", T: Br, oneof: "value" }]), Br = f.makeMessageType("livekit.RpcError", () => [{ no: 1, name: "code", kind: "scalar", T: 13 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "data", kind: "scalar", T: 9 }]), Vr = f.makeMessageType("livekit.ParticipantTracks", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: true }]), qr = f.makeMessageType("livekit.ServerInfo", () => [{ no: 1, name: "edition", kind: "enum", T: f.getEnumType(Wr) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "region", kind: "scalar", T: 9 }, { no: 5, name: "node_id", kind: "scalar", T: 9 }, { no: 6, name: "debug_info", kind: "scalar", T: 9 }, { no: 7, name: "agent_protocol", kind: "scalar", T: 5 }]), Wr = f.makeEnum("livekit.ServerInfo.Edition", [{ no: 0, name: "Standard" }, { no: 1, name: "Cloud" }]), Kr = f.makeMessageType("livekit.ClientInfo", () => [{ no: 1, name: "sdk", kind: "enum", T: f.getEnumType(Gr) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "os", kind: "scalar", T: 9 }, { no: 5, name: "os_version", kind: "scalar", T: 9 }, { no: 6, name: "device_model", kind: "scalar", T: 9 }, { no: 7, name: "browser", kind: "scalar", T: 9 }, { no: 8, name: "browser_version", kind: "scalar", T: 9 }, { no: 9, name: "address", kind: "scalar", T: 9 }, { no: 10, name: "network", kind: "scalar", T: 9 }, { no: 11, name: "other_sdks", kind: "scalar", T: 9 }]), Gr = f.makeEnum("livekit.ClientInfo.SDK", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "JS" }, { no: 2, name: "SWIFT" }, { no: 3, name: "ANDROID" }, { no: 4, name: "FLUTTER" }, { no: 5, name: "GO" }, { no: 6, name: "UNITY" }, { no: 7, name: "REACT_NATIVE" }, { no: 8, name: "RUST" }, { no: 9, name: "PYTHON" }, { no: 10, name: "CPP" }, { no: 11, name: "UNITY_WEB" }, { no: 12, name: "NODE" }, { no: 13, name: "UNREAL" }, { no: 14, name: "ESP32" }]), Hr = f.makeMessageType("livekit.ClientConfiguration", () => [{ no: 1, name: "video", kind: "message", T: Cs }, { no: 2, name: "screen", kind: "message", T: Cs }, { no: 3, name: "resume_connection", kind: "enum", T: f.getEnumType(Ft) }, { no: 4, name: "disabled_codecs", kind: "message", T: yc }, { no: 5, name: "force_relay", kind: "enum", T: f.getEnumType(Ft) }]), Cs = f.makeMessageType("livekit.VideoConfiguration", () => [{ no: 1, name: "hardware_encoder", kind: "enum", T: f.getEnumType(Ft) }]), yc = f.makeMessageType("livekit.DisabledCodecs", () => [{ no: 1, name: "codecs", kind: "message", T: ui, repeated: true }, { no: 2, name: "publish", kind: "message", T: ui, repeated: true }]), Jr = f.makeMessageType("livekit.TimedVersion", () => [{ no: 1, name: "unix_micro", kind: "scalar", T: 3 }, { no: 2, name: "ticks", kind: "scalar", T: 5 }]), sn = f.makeEnum("livekit.DataStream.OperationType", [{ no: 0, name: "CREATE" }, { no: 1, name: "UPDATE" }, { no: 2, name: "DELETE" }, { no: 3, name: "REACTION" }]), zr = f.makeMessageType("livekit.DataStream.TextHeader", () => [{ no: 1, name: "operation_type", kind: "enum", T: f.getEnumType(sn) }, { no: 2, name: "version", kind: "scalar", T: 5 }, { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 }, { no: 4, name: "attached_stream_ids", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "generated", kind: "scalar", T: 8 }], { localName: "DataStream_TextHeader" }), Qr = f.makeMessageType("livekit.DataStream.ByteHeader", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }], { localName: "DataStream_ByteHeader" }), mi = f.makeMessageType("livekit.DataStream.Header", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "topic", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 5, name: "total_length", kind: "scalar", T: 4, opt: true }, { no: 7, name: "encryption_type", kind: "enum", T: f.getEnumType(te) }, { no: 8, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "text_header", kind: "message", T: zr, oneof: "content_header" }, { no: 10, name: "byte_header", kind: "message", T: Qr, oneof: "content_header" }], { localName: "DataStream_Header" }), pi = f.makeMessageType("livekit.DataStream.Chunk", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "chunk_index", kind: "scalar", T: 4 }, { no: 3, name: "content", kind: "scalar", T: 12 }, { no: 4, name: "version", kind: "scalar", T: 5 }, { no: 5, name: "iv", kind: "scalar", T: 12, opt: true }], { localName: "DataStream_Chunk" }), fi = f.makeMessageType("livekit.DataStream.Trailer", () => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "DataStream_Trailer" }), kc = f.makeMessageType("livekit.SubscribedAudioCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "enabled", kind: "scalar", T: 8 }]), Ee = f.makeEnum("livekit.SignalTarget", [{ no: 0, name: "PUBLISHER" }, { no: 1, name: "SUBSCRIBER" }]), rn = f.makeEnum("livekit.StreamState", [{ no: 0, name: "ACTIVE" }, { no: 1, name: "PAUSED" }]), Tc = f.makeEnum("livekit.CandidateProtocol", [{ no: 0, name: "UDP" }, { no: 1, name: "TCP" }, { no: 2, name: "TLS" }]), Sc = f.makeMessageType("livekit.SignalRequest", () => [{ no: 1, name: "offer", kind: "message", T: $e, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: $e, oneof: "message" }, { no: 3, name: "trickle", kind: "message", T: Si, oneof: "message" }, { no: 4, name: "add_track", kind: "message", T: Bt, oneof: "message" }, { no: 5, name: "mute", kind: "message", T: Ci, oneof: "message" }, { no: 6, name: "subscription", kind: "message", T: Ei, oneof: "message" }, { no: 7, name: "track_setting", kind: "message", T: Yr, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: Pi, oneof: "message" }, { no: 10, name: "update_layers", kind: "message", T: $r, oneof: "message" }, { no: 11, name: "subscription_permission", kind: "message", T: ta, oneof: "message" }, { no: 12, name: "sync_state", kind: "message", T: qn, oneof: "message" }, { no: 13, name: "simulate", kind: "message", T: we, oneof: "message" }, { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" }, { no: 15, name: "update_metadata", kind: "message", T: Bn, oneof: "message" }, { no: 16, name: "ping_req", kind: "message", T: sa, oneof: "message" }, { no: 17, name: "update_audio_track", kind: "message", T: jn, oneof: "message" }, { no: 18, name: "update_video_track", kind: "message", T: Xr, oneof: "message" }]), Es = f.makeMessageType("livekit.SignalResponse", () => [{ no: 1, name: "join", kind: "message", T: Cc, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: $e, oneof: "message" }, { no: 3, name: "offer", kind: "message", T: $e, oneof: "message" }, { no: 4, name: "trickle", kind: "message", T: Si, oneof: "message" }, { no: 5, name: "update", kind: "message", T: Rc, oneof: "message" }, { no: 6, name: "track_published", kind: "message", T: Fn, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: Pi, oneof: "message" }, { no: 9, name: "mute", kind: "message", T: Ci, oneof: "message" }, { no: 10, name: "speakers_changed", kind: "message", T: _c, oneof: "message" }, { no: 11, name: "room_update", kind: "message", T: wc, oneof: "message" }, { no: 12, name: "connection_quality", kind: "message", T: Oc, oneof: "message" }, { no: 13, name: "stream_state_update", kind: "message", T: Mc, oneof: "message" }, { no: 14, name: "subscribed_quality_update", kind: "message", T: xc, oneof: "message" }, { no: 15, name: "subscription_permission_update", kind: "message", T: Lc, oneof: "message" }, { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" }, { no: 17, name: "track_unpublished", kind: "message", T: Pc, oneof: "message" }, { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" }, { no: 19, name: "reconnect", kind: "message", T: Ec, oneof: "message" }, { no: 20, name: "pong_resp", kind: "message", T: Fc, oneof: "message" }, { no: 21, name: "subscription_response", kind: "message", T: Vc, oneof: "message" }, { no: 22, name: "request_response", kind: "message", T: qc, oneof: "message" }, { no: 23, name: "track_subscribed", kind: "message", T: Wc, oneof: "message" }, { no: 24, name: "room_moved", kind: "message", T: Uc, oneof: "message" }, { no: 25, name: "media_sections_requirement", kind: "message", T: Jc, oneof: "message" }, { no: 26, name: "subscribed_audio_codec_update", kind: "message", T: Nc, oneof: "message" }]), an = f.makeMessageType("livekit.SimulcastCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: ze, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: f.getEnumType(Nr) }]), Bt = f.makeMessageType("livekit.AddTrackRequest", () => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "enum", T: f.getEnumType(Ce) }, { no: 4, name: "width", kind: "scalar", T: 13 }, { no: 5, name: "height", kind: "scalar", T: 13 }, { no: 6, name: "muted", kind: "scalar", T: 8 }, { no: 7, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 8, name: "source", kind: "enum", T: f.getEnumType(ee) }, { no: 9, name: "layers", kind: "message", T: ze, repeated: true }, { no: 10, name: "simulcast_codecs", kind: "message", T: an, repeated: true }, { no: 11, name: "sid", kind: "scalar", T: 9 }, { no: 12, name: "stereo", kind: "scalar", T: 8 }, { no: 13, name: "disable_red", kind: "scalar", T: 8 }, { no: 14, name: "encryption", kind: "enum", T: f.getEnumType(te) }, { no: 15, name: "stream", kind: "scalar", T: 9 }, { no: 16, name: "backup_codec_policy", kind: "enum", T: f.getEnumType(xr) }, { no: 17, name: "audio_features", kind: "enum", T: f.getEnumType(ne), repeated: true }]), Si = f.makeMessageType("livekit.TrickleRequest", () => [{ no: 1, name: "candidateInit", kind: "scalar", T: 9 }, { no: 2, name: "target", kind: "enum", T: f.getEnumType(Ee) }, { no: 3, name: "final", kind: "scalar", T: 8 }]), Ci = f.makeMessageType("livekit.MuteTrackRequest", () => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "muted", kind: "scalar", T: 8 }]), Cc = f.makeMessageType("livekit.JoinResponse", () => [{ no: 1, name: "room", kind: "message", T: Ti }, { no: 2, name: "participant", kind: "message", T: rt }, { no: 3, name: "other_participants", kind: "message", T: rt, repeated: true }, { no: 4, name: "server_version", kind: "scalar", T: 9 }, { no: 5, name: "ice_servers", kind: "message", T: Zr, repeated: true }, { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 }, { no: 7, name: "alternative_url", kind: "scalar", T: 9 }, { no: 8, name: "client_configuration", kind: "message", T: Hr }, { no: 9, name: "server_region", kind: "scalar", T: 9 }, { no: 10, name: "ping_timeout", kind: "scalar", T: 5 }, { no: 11, name: "ping_interval", kind: "scalar", T: 5 }, { no: 12, name: "server_info", kind: "message", T: qr }, { no: 13, name: "sif_trailer", kind: "scalar", T: 12 }, { no: 14, name: "enabled_publish_codecs", kind: "message", T: ui, repeated: true }, { no: 15, name: "fast_publish", kind: "scalar", T: 8 }]), Ec = f.makeMessageType("livekit.ReconnectResponse", () => [{ no: 1, name: "ice_servers", kind: "message", T: Zr, repeated: true }, { no: 2, name: "client_configuration", kind: "message", T: Hr }, { no: 3, name: "server_info", kind: "message", T: qr }, { no: 4, name: "last_message_seq", kind: "scalar", T: 13 }]), Fn = f.makeMessageType("livekit.TrackPublishedResponse", () => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "track", kind: "message", T: ut }]), Pc = f.makeMessageType("livekit.TrackUnpublishedResponse", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }]), $e = f.makeMessageType("livekit.SessionDescription", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "sdp", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 13 }, { no: 4, name: "mid_to_track_id", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), Rc = f.makeMessageType("livekit.ParticipantUpdate", () => [{ no: 1, name: "participants", kind: "message", T: rt, repeated: true }]), Ei = f.makeMessageType("livekit.UpdateSubscription", () => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "participant_tracks", kind: "message", T: Vr, repeated: true }]), Yr = f.makeMessageType("livekit.UpdateTrackSettings", () => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "disabled", kind: "scalar", T: 8 }, { no: 4, name: "quality", kind: "enum", T: f.getEnumType(An) }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "fps", kind: "scalar", T: 13 }, { no: 8, name: "priority", kind: "scalar", T: 13 }]), jn = f.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "features", kind: "enum", T: f.getEnumType(ne), repeated: true }]), Xr = f.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }]), Pi = f.makeMessageType("livekit.LeaveRequest", () => [{ no: 1, name: "can_reconnect", kind: "scalar", T: 8 }, { no: 2, name: "reason", kind: "enum", T: f.getEnumType(Re) }, { no: 3, name: "action", kind: "enum", T: f.getEnumType(gt) }, { no: 4, name: "regions", kind: "message", T: jc }]), gt = f.makeEnum("livekit.LeaveRequest.Action", [{ no: 0, name: "DISCONNECT" }, { no: 1, name: "RESUME" }, { no: 2, name: "RECONNECT" }]), $r = f.makeMessageType("livekit.UpdateVideoLayers", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "layers", kind: "message", T: ze, repeated: true }]), Bn = f.makeMessageType("livekit.UpdateParticipantMetadata", () => [{ no: 1, name: "metadata", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 4, name: "request_id", kind: "scalar", T: 13 }]), Zr = f.makeMessageType("livekit.ICEServer", () => [{ no: 1, name: "urls", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "credential", kind: "scalar", T: 9 }]), _c = f.makeMessageType("livekit.SpeakersChanged", () => [{ no: 1, name: "speakers", kind: "message", T: Fr, repeated: true }]), wc = f.makeMessageType("livekit.RoomUpdate", () => [{ no: 1, name: "room", kind: "message", T: Ti }]), Ic = f.makeMessageType("livekit.ConnectionQualityInfo", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "quality", kind: "enum", T: f.getEnumType(Mt) }, { no: 3, name: "score", kind: "scalar", T: 2 }]), Oc = f.makeMessageType("livekit.ConnectionQualityUpdate", () => [{ no: 1, name: "updates", kind: "message", T: Ic, repeated: true }]), Dc = f.makeMessageType("livekit.StreamStateInfo", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: f.getEnumType(rn) }]), Mc = f.makeMessageType("livekit.StreamStateUpdate", () => [{ no: 1, name: "stream_states", kind: "message", T: Dc, repeated: true }]), Vn = f.makeMessageType("livekit.SubscribedQuality", () => [{ no: 1, name: "quality", kind: "enum", T: f.getEnumType(An) }, { no: 2, name: "enabled", kind: "scalar", T: 8 }]), Ac = f.makeMessageType("livekit.SubscribedCodec", () => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "qualities", kind: "message", T: Vn, repeated: true }]), xc = f.makeMessageType("livekit.SubscribedQualityUpdate", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_qualities", kind: "message", T: Vn, repeated: true }, { no: 3, name: "subscribed_codecs", kind: "message", T: Ac, repeated: true }]), Nc = f.makeMessageType("livekit.SubscribedAudioCodecUpdate", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_audio_codecs", kind: "message", T: kc, repeated: true }]), ea = f.makeMessageType("livekit.TrackPermission", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "all_tracks", kind: "scalar", T: 8 }, { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }]), ta = f.makeMessageType("livekit.SubscriptionPermission", () => [{ no: 1, name: "all_participants", kind: "scalar", T: 8 }, { no: 2, name: "track_permissions", kind: "message", T: ea, repeated: true }]), Lc = f.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "allowed", kind: "scalar", T: 8 }]), Uc = f.makeMessageType("livekit.RoomMovedResponse", () => [{ no: 1, name: "room", kind: "message", T: Ti }, { no: 2, name: "token", kind: "scalar", T: 9 }, { no: 3, name: "participant", kind: "message", T: rt }, { no: 4, name: "other_participants", kind: "message", T: rt, repeated: true }]), qn = f.makeMessageType("livekit.SyncState", () => [{ no: 1, name: "answer", kind: "message", T: $e }, { no: 2, name: "subscription", kind: "message", T: Ei }, { no: 3, name: "publish_tracks", kind: "message", T: Fn, repeated: true }, { no: 4, name: "data_channels", kind: "message", T: na, repeated: true }, { no: 5, name: "offer", kind: "message", T: $e }, { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "datachannel_receive_states", kind: "message", T: ia, repeated: true }]), ia = f.makeMessageType("livekit.DataChannelReceiveState", () => [{ no: 1, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 2, name: "last_seq", kind: "scalar", T: 13 }]), na = f.makeMessageType("livekit.DataChannelInfo", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 13 }, { no: 3, name: "target", kind: "enum", T: f.getEnumType(Ee) }]), we = f.makeMessageType("livekit.SimulateScenario", () => [{ no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" }, { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" }, { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" }, { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" }, { no: 5, name: "switch_candidate_protocol", kind: "enum", T: f.getEnumType(Tc), oneof: "scenario" }, { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3, oneof: "scenario" }, { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8, oneof: "scenario" }, { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8, oneof: "scenario" }, { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8, oneof: "scenario" }]), sa = f.makeMessageType("livekit.Ping", () => [{ no: 1, name: "timestamp", kind: "scalar", T: 3 }, { no: 2, name: "rtt", kind: "scalar", T: 3 }]), Fc = f.makeMessageType("livekit.Pong", () => [{ no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }]), jc = f.makeMessageType("livekit.RegionSettings", () => [{ no: 1, name: "regions", kind: "message", T: Bc, repeated: true }]), Bc = f.makeMessageType("livekit.RegionInfo", () => [{ no: 1, name: "region", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "distance", kind: "scalar", T: 3 }]), Vc = f.makeMessageType("livekit.SubscriptionResponse", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "err", kind: "enum", T: f.getEnumType(hc) }]), qc = f.makeMessageType("livekit.RequestResponse", () => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "reason", kind: "enum", T: f.getEnumType(Wn) }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "trickle", kind: "message", T: Si, oneof: "request" }, { no: 5, name: "add_track", kind: "message", T: Bt, oneof: "request" }, { no: 6, name: "mute", kind: "message", T: Ci, oneof: "request" }, { no: 7, name: "update_metadata", kind: "message", T: Bn, oneof: "request" }, { no: 8, name: "update_audio_track", kind: "message", T: jn, oneof: "request" }, { no: 9, name: "update_video_track", kind: "message", T: Xr, oneof: "request" }]), Wn = f.makeEnum("livekit.RequestResponse.Reason", [{ no: 0, name: "OK" }, { no: 1, name: "NOT_FOUND" }, { no: 2, name: "NOT_ALLOWED" }, { no: 3, name: "LIMIT_EXCEEDED" }, { no: 4, name: "QUEUED" }, { no: 5, name: "UNSUPPORTED_TYPE" }, { no: 6, name: "UNCLASSIFIED_ERROR" }]), Wc = f.makeMessageType("livekit.TrackSubscribed", () => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }]), ra = f.makeMessageType("livekit.ConnectionSettings", () => [{ no: 1, name: "auto_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "adaptive_stream", kind: "scalar", T: 8 }, { no: 3, name: "subscriber_allow_pause", kind: "scalar", T: 8, opt: true }, { no: 4, name: "disable_ice_lite", kind: "scalar", T: 8 }]), Kc = f.makeMessageType("livekit.JoinRequest", () => [{ no: 1, name: "client_info", kind: "message", T: Kr }, { no: 2, name: "connection_settings", kind: "message", T: ra }, { no: 3, name: "metadata", kind: "scalar", T: 9 }, { no: 4, name: "participant_attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 5, name: "add_track_requests", kind: "message", T: Bt, repeated: true }, { no: 6, name: "publisher_offer", kind: "message", T: $e }, { no: 7, name: "reconnect", kind: "scalar", T: 8 }, { no: 8, name: "reconnect_reason", kind: "enum", T: f.getEnumType(it) }, { no: 9, name: "participant_sid", kind: "scalar", T: 9 }, { no: 10, name: "sync_state", kind: "message", T: qn }]), Gc = f.makeMessageType("livekit.WrappedJoinRequest", () => [{ no: 1, name: "compression", kind: "enum", T: f.getEnumType(Hc) }, { no: 2, name: "join_request", kind: "scalar", T: 12 }]), Hc = f.makeEnum("livekit.WrappedJoinRequest.Compression", [{ no: 0, name: "NONE" }, { no: 1, name: "GZIP" }]), Jc = f.makeMessageType("livekit.MediaSectionsRequirement", () => [{ no: 1, name: "num_audios", kind: "scalar", T: 13 }, { no: 2, name: "num_videos", kind: "scalar", T: 13 }]);
function zc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $t = { exports: {} }, Qc = $t.exports, Ps;
function Yc() {
  return Ps || (Ps = 1, (function(n) {
    (function(e, t) {
      n.exports ? n.exports = t() : e.log = t();
    })(Qc, function() {
      var e = function() {
      }, t = "undefined", i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), s = ["trace", "debug", "info", "warn", "error"], r = {}, o = null;
      function a(g, R) {
        var k = g[R];
        if (typeof k.bind == "function") return k.bind(g);
        try {
          return Function.prototype.bind.call(k, g);
        } catch {
          return function() {
            return Function.prototype.apply.apply(k, [g, arguments]);
          };
        }
      }
      function c() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function d(g) {
        return g === "debug" && (g = "log"), typeof console === t ? false : g === "trace" && i ? c : console[g] !== void 0 ? a(console, g) : console.log !== void 0 ? a(console, "log") : e;
      }
      function l() {
        for (var g = this.getLevel(), R = 0; R < s.length; R++) {
          var k = s[R];
          this[k] = R < g ? e : this.methodFactory(k, g, this.name);
        }
        if (this.log = this.debug, typeof console === t && g < this.levels.SILENT) return "No console available for logging";
      }
      function u(g) {
        return function() {
          typeof console !== t && (l.call(this), this[g].apply(this, arguments));
        };
      }
      function h(g, R, k) {
        return d(g) || u.apply(this, arguments);
      }
      function p(g, R) {
        var k = this, I, M, v, y = "loglevel";
        typeof g == "string" ? y += ":" + g : typeof g == "symbol" && (y = void 0);
        function C(x) {
          var F = (s[x] || "silent").toUpperCase();
          if (!(typeof window === t || !y)) {
            try {
              window.localStorage[y] = F;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(y) + "=" + F + ";";
            } catch {
            }
          }
        }
        function D() {
          var x;
          if (!(typeof window === t || !y)) {
            try {
              x = window.localStorage[y];
            } catch {
            }
            if (typeof x === t) try {
              var F = window.document.cookie, z = encodeURIComponent(y), ge = F.indexOf(z + "=");
              ge !== -1 && (x = /^([^;]+)/.exec(F.slice(ge + z.length + 1))[1]);
            } catch {
            }
            return k.levels[x] === void 0 && (x = void 0), x;
          }
        }
        function N() {
          if (!(typeof window === t || !y)) {
            try {
              window.localStorage.removeItem(y);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(y) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function A(x) {
          var F = x;
          if (typeof F == "string" && k.levels[F.toUpperCase()] !== void 0 && (F = k.levels[F.toUpperCase()]), typeof F == "number" && F >= 0 && F <= k.levels.SILENT) return F;
          throw new TypeError("log.setLevel() called with invalid level: " + x);
        }
        k.name = g, k.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, k.methodFactory = R || h, k.getLevel = function() {
          return v ?? M ?? I;
        }, k.setLevel = function(x, F) {
          return v = A(x), F !== false && C(v), l.call(k);
        }, k.setDefaultLevel = function(x) {
          M = A(x), D() || k.setLevel(x, false);
        }, k.resetLevel = function() {
          v = null, N(), l.call(k);
        }, k.enableAll = function(x) {
          k.setLevel(k.levels.TRACE, x);
        }, k.disableAll = function(x) {
          k.setLevel(k.levels.SILENT, x);
        }, k.rebuild = function() {
          if (o !== k && (I = A(o.getLevel())), l.call(k), o === k) for (var x in r) r[x].rebuild();
        }, I = A(o ? o.getLevel() : "WARN");
        var O = D();
        O != null && (v = A(O)), l.call(k);
      }
      o = new p(), o.getLogger = function(R) {
        if (typeof R != "symbol" && typeof R != "string" || R === "") throw new TypeError("You must supply a name when creating a logger.");
        var k = r[R];
        return k || (k = r[R] = new p(R, o.methodFactory)), k;
      };
      var b = typeof window !== t ? window.log : void 0;
      return o.noConflict = function() {
        return typeof window !== t && window.log === o && (window.log = b), o;
      }, o.getLoggers = function() {
        return r;
      }, o.default = o, o;
    });
  })($t)), $t.exports;
}
var Ri = Yc(), on;
(function(n) {
  n[n.trace = 0] = "trace", n[n.debug = 1] = "debug", n[n.info = 2] = "info", n[n.warn = 3] = "warn", n[n.error = 4] = "error", n[n.silent = 5] = "silent";
})(on || (on = {}));
var _e;
(function(n) {
  n.Default = "livekit", n.Room = "livekit-room", n.TokenSource = "livekit-token-source", n.Participant = "livekit-participant", n.Track = "livekit-track", n.Publication = "livekit-track-publication", n.Engine = "livekit-engine", n.Signal = "livekit-signal", n.PCManager = "livekit-pc-manager", n.PCTransport = "livekit-pc-transport", n.E2EE = "lk-e2ee";
})(_e || (_e = {}));
let U = Ri.getLogger("livekit");
Object.values(_e).map((n) => Ri.getLogger(n));
U.setDefaultLevel(on.info);
function Ve(n) {
  const e = Ri.getLogger(n);
  return e.setDefaultLevel(U.getLevel()), e;
}
const Xc = Ri.getLogger("lk-e2ee"), _t = 7e3, $c = [0, 300, 4 * 300, 9 * 300, 16 * 300, _t, _t, _t, _t, _t];
class Zc {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e] : $c;
  }
  nextRetryDelayInMs(e) {
    if (e.retryCount >= this._retryDelays.length) return null;
    const t = this._retryDelays[e.retryCount];
    return e.retryCount <= 1 ? t : t + Math.random() * 1e3;
  }
}
function ed(n, e) {
  var t = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (t[i[s]] = n[i[s]]);
  return t;
}
function m(n, e, t, i) {
  function s(r) {
    return r instanceof t ? r : new t(function(o) {
      o(r);
    });
  }
  return new (t || (t = Promise))(function(r, o) {
    function a(l) {
      try {
        d(i.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        d(i.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function d(l) {
      l.done ? r(l.value) : s(l.value).then(a, c);
    }
    d((i = i.apply(n, e || [])).next());
  });
}
function Rs(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return { next: function() {
    return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
  } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function je(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof Rs == "function" ? Rs(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(r) {
    t[r] = n[r] && function(o) {
      return new Promise(function(a, c) {
        o = n[r](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(r, o, a, c) {
    Promise.resolve(c).then(function(d) {
      r({ value: d, done: a });
    }, o);
  }
}
var Ht = { exports: {} }, _s;
function td() {
  if (_s) return Ht.exports;
  _s = 1;
  var n = typeof Reflect == "object" ? Reflect : null, e = n && typeof n.apply == "function" ? n.apply : function(y, C, D) {
    return Function.prototype.apply.call(y, C, D);
  }, t;
  n && typeof n.ownKeys == "function" ? t = n.ownKeys : Object.getOwnPropertySymbols ? t = function(y) {
    return Object.getOwnPropertyNames(y).concat(Object.getOwnPropertySymbols(y));
  } : t = function(y) {
    return Object.getOwnPropertyNames(y);
  };
  function i(v) {
    console && console.warn && console.warn(v);
  }
  var s = Number.isNaN || function(y) {
    return y !== y;
  };
  function r() {
    r.init.call(this);
  }
  Ht.exports = r, Ht.exports.once = k, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
  var o = 10;
  function a(v) {
    if (typeof v != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof v);
  }
  Object.defineProperty(r, "defaultMaxListeners", { enumerable: true, get: function() {
    return o;
  }, set: function(v) {
    if (typeof v != "number" || v < 0 || s(v)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + v + ".");
    o = v;
  } }), r.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, r.prototype.setMaxListeners = function(y) {
    if (typeof y != "number" || y < 0 || s(y)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + y + ".");
    return this._maxListeners = y, this;
  };
  function c(v) {
    return v._maxListeners === void 0 ? r.defaultMaxListeners : v._maxListeners;
  }
  r.prototype.getMaxListeners = function() {
    return c(this);
  }, r.prototype.emit = function(y) {
    for (var C = [], D = 1; D < arguments.length; D++) C.push(arguments[D]);
    var N = y === "error", A = this._events;
    if (A !== void 0) N = N && A.error === void 0;
    else if (!N) return false;
    if (N) {
      var O;
      if (C.length > 0 && (O = C[0]), O instanceof Error) throw O;
      var x = new Error("Unhandled error." + (O ? " (" + O.message + ")" : ""));
      throw x.context = O, x;
    }
    var F = A[y];
    if (F === void 0) return false;
    if (typeof F == "function") e(F, this, C);
    else for (var z = F.length, ge = b(F, z), D = 0; D < z; ++D) e(ge[D], this, C);
    return true;
  };
  function d(v, y, C, D) {
    var N, A, O;
    if (a(C), A = v._events, A === void 0 ? (A = v._events = /* @__PURE__ */ Object.create(null), v._eventsCount = 0) : (A.newListener !== void 0 && (v.emit("newListener", y, C.listener ? C.listener : C), A = v._events), O = A[y]), O === void 0) O = A[y] = C, ++v._eventsCount;
    else if (typeof O == "function" ? O = A[y] = D ? [C, O] : [O, C] : D ? O.unshift(C) : O.push(C), N = c(v), N > 0 && O.length > N && !O.warned) {
      O.warned = true;
      var x = new Error("Possible EventEmitter memory leak detected. " + O.length + " " + String(y) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      x.name = "MaxListenersExceededWarning", x.emitter = v, x.type = y, x.count = O.length, i(x);
    }
    return v;
  }
  r.prototype.addListener = function(y, C) {
    return d(this, y, C, false);
  }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(y, C) {
    return d(this, y, C, true);
  };
  function l() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function u(v, y, C) {
    var D = { fired: false, wrapFn: void 0, target: v, type: y, listener: C }, N = l.bind(D);
    return N.listener = C, D.wrapFn = N, N;
  }
  r.prototype.once = function(y, C) {
    return a(C), this.on(y, u(this, y, C)), this;
  }, r.prototype.prependOnceListener = function(y, C) {
    return a(C), this.prependListener(y, u(this, y, C)), this;
  }, r.prototype.removeListener = function(y, C) {
    var D, N, A, O, x;
    if (a(C), N = this._events, N === void 0) return this;
    if (D = N[y], D === void 0) return this;
    if (D === C || D.listener === C) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete N[y], N.removeListener && this.emit("removeListener", y, D.listener || C));
    else if (typeof D != "function") {
      for (A = -1, O = D.length - 1; O >= 0; O--) if (D[O] === C || D[O].listener === C) {
        x = D[O].listener, A = O;
        break;
      }
      if (A < 0) return this;
      A === 0 ? D.shift() : g(D, A), D.length === 1 && (N[y] = D[0]), N.removeListener !== void 0 && this.emit("removeListener", y, x || C);
    }
    return this;
  }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(y) {
    var C, D, N;
    if (D = this._events, D === void 0) return this;
    if (D.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : D[y] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete D[y]), this;
    if (arguments.length === 0) {
      var A = Object.keys(D), O;
      for (N = 0; N < A.length; ++N) O = A[N], O !== "removeListener" && this.removeAllListeners(O);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (C = D[y], typeof C == "function") this.removeListener(y, C);
    else if (C !== void 0) for (N = C.length - 1; N >= 0; N--) this.removeListener(y, C[N]);
    return this;
  };
  function h(v, y, C) {
    var D = v._events;
    if (D === void 0) return [];
    var N = D[y];
    return N === void 0 ? [] : typeof N == "function" ? C ? [N.listener || N] : [N] : C ? R(N) : b(N, N.length);
  }
  r.prototype.listeners = function(y) {
    return h(this, y, true);
  }, r.prototype.rawListeners = function(y) {
    return h(this, y, false);
  }, r.listenerCount = function(v, y) {
    return typeof v.listenerCount == "function" ? v.listenerCount(y) : p.call(v, y);
  }, r.prototype.listenerCount = p;
  function p(v) {
    var y = this._events;
    if (y !== void 0) {
      var C = y[v];
      if (typeof C == "function") return 1;
      if (C !== void 0) return C.length;
    }
    return 0;
  }
  r.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : [];
  };
  function b(v, y) {
    for (var C = new Array(y), D = 0; D < y; ++D) C[D] = v[D];
    return C;
  }
  function g(v, y) {
    for (; y + 1 < v.length; y++) v[y] = v[y + 1];
    v.pop();
  }
  function R(v) {
    for (var y = new Array(v.length), C = 0; C < y.length; ++C) y[C] = v[C].listener || v[C];
    return y;
  }
  function k(v, y) {
    return new Promise(function(C, D) {
      function N(O) {
        v.removeListener(y, A), D(O);
      }
      function A() {
        typeof v.removeListener == "function" && v.removeListener("error", N), C([].slice.call(arguments));
      }
      M(v, y, A, { once: true }), y !== "error" && I(v, N, { once: true });
    });
  }
  function I(v, y, C) {
    typeof v.on == "function" && M(v, "error", y, C);
  }
  function M(v, y, C, D) {
    if (typeof v.on == "function") D.once ? v.once(y, C) : v.on(y, C);
    else if (typeof v.addEventListener == "function") v.addEventListener(y, function N(A) {
      D.once && v.removeEventListener(y, N), C(A);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof v);
  }
  return Ht.exports;
}
var Ae = td();
let aa = true, oa = true;
function At(n, e, t) {
  const i = n.match(e);
  return i && i.length >= t && parseFloat(i[t], 10);
}
function ct(n, e, t) {
  if (!n.RTCPeerConnection) return;
  const i = n.RTCPeerConnection.prototype, s = i.addEventListener;
  i.addEventListener = function(o, a) {
    if (o !== e) return s.apply(this, arguments);
    const c = (d) => {
      const l = t(d);
      l && (a.handleEvent ? a.handleEvent(l) : a(l));
    };
    return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = /* @__PURE__ */ new Map()), this._eventMap[e].set(a, c), s.apply(this, [o, c]);
  };
  const r = i.removeEventListener;
  i.removeEventListener = function(o, a) {
    if (o !== e || !this._eventMap || !this._eventMap[e]) return r.apply(this, arguments);
    if (!this._eventMap[e].has(a)) return r.apply(this, arguments);
    const c = this._eventMap[e].get(a);
    return this._eventMap[e].delete(a), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, r.apply(this, [o, c]);
  }, Object.defineProperty(i, "on" + e, { get() {
    return this["_on" + e];
  }, set(o) {
    this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), o && this.addEventListener(e, this["_on" + e] = o);
  }, enumerable: true, configurable: true });
}
function id(n) {
  return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (aa = n, n ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function nd(n) {
  return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (oa = !n, "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"));
}
function ca() {
  if (typeof window == "object") {
    if (aa) return;
    typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
  }
}
function Kn(n, e) {
  oa && console.warn(n + " is deprecated, please use " + e + " instead.");
}
function sd(n) {
  const e = { browser: null, version: null };
  if (typeof n > "u" || !n.navigator || !n.navigator.userAgent) return e.browser = "Not a browser.", e;
  const { navigator: t } = n;
  if (t.userAgentData && t.userAgentData.brands) {
    const i = t.userAgentData.brands.find((s) => s.brand === "Chromium");
    if (i) return { browser: "chrome", version: parseInt(i.version, 10) };
  }
  if (t.mozGetUserMedia) e.browser = "firefox", e.version = parseInt(At(t.userAgent, /Firefox\/(\d+)\./, 1));
  else if (t.webkitGetUserMedia || n.isSecureContext === false && n.webkitRTCPeerConnection) e.browser = "chrome", e.version = parseInt(At(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
  else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = parseInt(At(t.userAgent, /AppleWebKit\/(\d+)\./, 1)), e.supportsUnifiedPlan = n.RTCRtpTransceiver && "currentDirection" in n.RTCRtpTransceiver.prototype, e._safariVersion = At(t.userAgent, /Version\/(\d+(\.?\d+))/, 1);
  else return e.browser = "Not a supported browser.", e;
  return e;
}
function ws(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function da(n) {
  return ws(n) ? Object.keys(n).reduce(function(e, t) {
    const i = ws(n[t]), s = i ? da(n[t]) : n[t], r = i && !Object.keys(s).length;
    return s === void 0 || r ? e : Object.assign(e, { [t]: s });
  }, {}) : n;
}
function cn(n, e, t) {
  !e || t.has(e.id) || (t.set(e.id, e), Object.keys(e).forEach((i) => {
    i.endsWith("Id") ? cn(n, n.get(e[i]), t) : i.endsWith("Ids") && e[i].forEach((s) => {
      cn(n, n.get(s), t);
    });
  }));
}
function Is(n, e, t) {
  const i = t ? "outbound-rtp" : "inbound-rtp", s = /* @__PURE__ */ new Map();
  if (e === null) return s;
  const r = [];
  return n.forEach((o) => {
    o.type === "track" && o.trackIdentifier === e.id && r.push(o);
  }), r.forEach((o) => {
    n.forEach((a) => {
      a.type === i && a.trackId === o.id && cn(n, a, s);
    });
  }), s;
}
const Os = ca;
function la(n, e) {
  const t = n && n.navigator;
  if (!t.mediaDevices) return;
  const i = function(a) {
    if (typeof a != "object" || a.mandatory || a.optional) return a;
    const c = {};
    return Object.keys(a).forEach((d) => {
      if (d === "require" || d === "advanced" || d === "mediaSource") return;
      const l = typeof a[d] == "object" ? a[d] : { ideal: a[d] };
      l.exact !== void 0 && typeof l.exact == "number" && (l.min = l.max = l.exact);
      const u = function(h, p) {
        return h ? h + p.charAt(0).toUpperCase() + p.slice(1) : p === "deviceId" ? "sourceId" : p;
      };
      if (l.ideal !== void 0) {
        c.optional = c.optional || [];
        let h = {};
        typeof l.ideal == "number" ? (h[u("min", d)] = l.ideal, c.optional.push(h), h = {}, h[u("max", d)] = l.ideal, c.optional.push(h)) : (h[u("", d)] = l.ideal, c.optional.push(h));
      }
      l.exact !== void 0 && typeof l.exact != "number" ? (c.mandatory = c.mandatory || {}, c.mandatory[u("", d)] = l.exact) : ["min", "max"].forEach((h) => {
        l[h] !== void 0 && (c.mandatory = c.mandatory || {}, c.mandatory[u(h, d)] = l[h]);
      });
    }), a.advanced && (c.optional = (c.optional || []).concat(a.advanced)), c;
  }, s = function(a, c) {
    if (e.version >= 61) return c(a);
    if (a = JSON.parse(JSON.stringify(a)), a && typeof a.audio == "object") {
      const d = function(l, u, h) {
        u in l && !(h in l) && (l[h] = l[u], delete l[u]);
      };
      a = JSON.parse(JSON.stringify(a)), d(a.audio, "autoGainControl", "googAutoGainControl"), d(a.audio, "noiseSuppression", "googNoiseSuppression"), a.audio = i(a.audio);
    }
    if (a && typeof a.video == "object") {
      let d = a.video.facingMode;
      d = d && (typeof d == "object" ? d : { ideal: d });
      const l = e.version < 66;
      if (d && (d.exact === "user" || d.exact === "environment" || d.ideal === "user" || d.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !l)) {
        delete a.video.facingMode;
        let u;
        if (d.exact === "environment" || d.ideal === "environment" ? u = ["back", "rear"] : (d.exact === "user" || d.ideal === "user") && (u = ["front"]), u) return t.mediaDevices.enumerateDevices().then((h) => {
          h = h.filter((b) => b.kind === "videoinput");
          let p = h.find((b) => u.some((g) => b.label.toLowerCase().includes(g)));
          return !p && h.length && u.includes("back") && (p = h[h.length - 1]), p && (a.video.deviceId = d.exact ? { exact: p.deviceId } : { ideal: p.deviceId }), a.video = i(a.video), Os("chrome: " + JSON.stringify(a)), c(a);
        });
      }
      a.video = i(a.video);
    }
    return Os("chrome: " + JSON.stringify(a)), c(a);
  }, r = function(a) {
    return e.version >= 64 ? a : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[a.name] || a.name, message: a.message, constraint: a.constraint || a.constraintName, toString() {
      return this.name + (this.message && ": ") + this.message;
    } };
  }, o = function(a, c, d) {
    s(a, (l) => {
      t.webkitGetUserMedia(l, c, (u) => {
        d && d(r(u));
      });
    });
  };
  if (t.getUserMedia = o.bind(t), t.mediaDevices.getUserMedia) {
    const a = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function(c) {
      return s(c, (d) => a(d).then((l) => {
        if (d.audio && !l.getAudioTracks().length || d.video && !l.getVideoTracks().length) throw l.getTracks().forEach((u) => {
          u.stop();
        }), new DOMException("", "NotFoundError");
        return l;
      }, (l) => Promise.reject(r(l))));
    };
  }
}
function ua(n) {
  n.MediaStream = n.MediaStream || n.webkitMediaStream;
}
function ha(n) {
  if (typeof n == "object" && n.RTCPeerConnection && !("ontrack" in n.RTCPeerConnection.prototype)) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", { get() {
      return this._ontrack;
    }, set(t) {
      this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = t);
    }, enumerable: true, configurable: true });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function() {
      return this._ontrackpoly || (this._ontrackpoly = (i) => {
        i.stream.addEventListener("addtrack", (s) => {
          let r;
          n.RTCPeerConnection.prototype.getReceivers ? r = this.getReceivers().find((a) => a.track && a.track.id === s.track.id) : r = { track: s.track };
          const o = new Event("track");
          o.track = s.track, o.receiver = r, o.transceiver = { receiver: r }, o.streams = [i.stream], this.dispatchEvent(o);
        }), i.stream.getTracks().forEach((s) => {
          let r;
          n.RTCPeerConnection.prototype.getReceivers ? r = this.getReceivers().find((a) => a.track && a.track.id === s.id) : r = { track: s };
          const o = new Event("track");
          o.track = s, o.receiver = r, o.transceiver = { receiver: r }, o.streams = [i.stream], this.dispatchEvent(o);
        });
      }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments);
    };
  } else ct(n, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e));
}
function ma(n) {
  if (typeof n == "object" && n.RTCPeerConnection && !("getSenders" in n.RTCPeerConnection.prototype) && "createDTMFSender" in n.RTCPeerConnection.prototype) {
    const e = function(s, r) {
      return { track: r, get dtmf() {
        return this._dtmf === void 0 && (r.kind === "audio" ? this._dtmf = s.createDTMFSender(r) : this._dtmf = null), this._dtmf;
      }, _pc: s };
    };
    if (!n.RTCPeerConnection.prototype.getSenders) {
      n.RTCPeerConnection.prototype.getSenders = function() {
        return this._senders = this._senders || [], this._senders.slice();
      };
      const s = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addTrack = function(a, c) {
        let d = s.apply(this, arguments);
        return d || (d = e(this, a), this._senders.push(d)), d;
      };
      const r = n.RTCPeerConnection.prototype.removeTrack;
      n.RTCPeerConnection.prototype.removeTrack = function(a) {
        r.apply(this, arguments);
        const c = this._senders.indexOf(a);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function(r) {
      this._senders = this._senders || [], t.apply(this, [r]), r.getTracks().forEach((o) => {
        this._senders.push(e(this, o));
      });
    };
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function(r) {
      this._senders = this._senders || [], i.apply(this, [r]), r.getTracks().forEach((o) => {
        const a = this._senders.find((c) => c.track === o);
        a && this._senders.splice(this._senders.indexOf(a), 1);
      });
    };
  } else if (typeof n == "object" && n.RTCPeerConnection && "getSenders" in n.RTCPeerConnection.prototype && "createDTMFSender" in n.RTCPeerConnection.prototype && n.RTCRtpSender && !("dtmf" in n.RTCRtpSender.prototype)) {
    const e = n.RTCPeerConnection.prototype.getSenders;
    n.RTCPeerConnection.prototype.getSenders = function() {
      const i = e.apply(this, []);
      return i.forEach((s) => s._pc = this), i;
    }, Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", { get() {
      return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
    } });
  }
}
function pa(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender && n.RTCRtpReceiver)) return;
  if (!("getStats" in n.RTCRtpSender.prototype)) {
    const t = n.RTCPeerConnection.prototype.getSenders;
    t && (n.RTCPeerConnection.prototype.getSenders = function() {
      const r = t.apply(this, []);
      return r.forEach((o) => o._pc = this), r;
    });
    const i = n.RTCPeerConnection.prototype.addTrack;
    i && (n.RTCPeerConnection.prototype.addTrack = function() {
      const r = i.apply(this, arguments);
      return r._pc = this, r;
    }), n.RTCRtpSender.prototype.getStats = function() {
      const r = this;
      return this._pc.getStats().then((o) => Is(o, r.track, true));
    };
  }
  if (!("getStats" in n.RTCRtpReceiver.prototype)) {
    const t = n.RTCPeerConnection.prototype.getReceivers;
    t && (n.RTCPeerConnection.prototype.getReceivers = function() {
      const s = t.apply(this, []);
      return s.forEach((r) => r._pc = this), s;
    }), ct(n, "track", (i) => (i.receiver._pc = i.srcElement, i)), n.RTCRtpReceiver.prototype.getStats = function() {
      const s = this;
      return this._pc.getStats().then((r) => Is(r, s.track, false));
    };
  }
  if (!("getStats" in n.RTCRtpSender.prototype && "getStats" in n.RTCRtpReceiver.prototype)) return;
  const e = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function() {
    if (arguments.length > 0 && arguments[0] instanceof n.MediaStreamTrack) {
      const i = arguments[0];
      let s, r, o;
      return this.getSenders().forEach((a) => {
        a.track === i && (s ? o = true : s = a);
      }), this.getReceivers().forEach((a) => (a.track === i && (r ? o = true : r = a), a.track === i)), o || s && r ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : s ? s.getStats() : r ? r.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
    }
    return e.apply(this, arguments);
  };
}
function fa(n) {
  n.RTCPeerConnection.prototype.getLocalStreams = function() {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((o) => this._shimmedLocalStreams[o][0]);
  };
  const e = n.RTCPeerConnection.prototype.addTrack;
  n.RTCPeerConnection.prototype.addTrack = function(o, a) {
    if (!a) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = e.apply(this, arguments);
    return this._shimmedLocalStreams[a.id] ? this._shimmedLocalStreams[a.id].indexOf(c) === -1 && this._shimmedLocalStreams[a.id].push(c) : this._shimmedLocalStreams[a.id] = [a, c], c;
  };
  const t = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function(o) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, o.getTracks().forEach((d) => {
      if (this.getSenders().find((u) => u.track === d)) throw new DOMException("Track already exists.", "InvalidAccessError");
    });
    const a = this.getSenders();
    t.apply(this, arguments);
    const c = this.getSenders().filter((d) => a.indexOf(d) === -1);
    this._shimmedLocalStreams[o.id] = [o].concat(c);
  };
  const i = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function(o) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[o.id], i.apply(this, arguments);
  };
  const s = n.RTCPeerConnection.prototype.removeTrack;
  n.RTCPeerConnection.prototype.removeTrack = function(o) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, o && Object.keys(this._shimmedLocalStreams).forEach((a) => {
      const c = this._shimmedLocalStreams[a].indexOf(o);
      c !== -1 && this._shimmedLocalStreams[a].splice(c, 1), this._shimmedLocalStreams[a].length === 1 && delete this._shimmedLocalStreams[a];
    }), s.apply(this, arguments);
  };
}
function ga(n, e) {
  if (!n.RTCPeerConnection) return;
  if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65) return fa(n);
  const t = n.RTCPeerConnection.prototype.getLocalStreams;
  n.RTCPeerConnection.prototype.getLocalStreams = function() {
    const l = t.apply(this);
    return this._reverseStreams = this._reverseStreams || {}, l.map((u) => this._reverseStreams[u.id]);
  };
  const i = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function(l) {
    if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, l.getTracks().forEach((u) => {
      if (this.getSenders().find((p) => p.track === u)) throw new DOMException("Track already exists.", "InvalidAccessError");
    }), !this._reverseStreams[l.id]) {
      const u = new n.MediaStream(l.getTracks());
      this._streams[l.id] = u, this._reverseStreams[u.id] = l, l = u;
    }
    i.apply(this, [l]);
  };
  const s = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function(l) {
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s.apply(this, [this._streams[l.id] || l]), delete this._reverseStreams[this._streams[l.id] ? this._streams[l.id].id : l.id], delete this._streams[l.id];
  }, n.RTCPeerConnection.prototype.addTrack = function(l, u) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    const h = [].slice.call(arguments, 1);
    if (h.length !== 1 || !h[0].getTracks().find((g) => g === l)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
    if (this.getSenders().find((g) => g.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
    const b = this._streams[u.id];
    if (b) b.addTrack(l), Promise.resolve().then(() => {
      this.dispatchEvent(new Event("negotiationneeded"));
    });
    else {
      const g = new n.MediaStream([l]);
      this._streams[u.id] = g, this._reverseStreams[g.id] = u, this.addStream(g);
    }
    return this.getSenders().find((g) => g.track === l);
  };
  function r(d, l) {
    let u = l.sdp;
    return Object.keys(d._reverseStreams || []).forEach((h) => {
      const p = d._reverseStreams[h], b = d._streams[p.id];
      u = u.replace(new RegExp(b.id, "g"), p.id);
    }), new RTCSessionDescription({ type: l.type, sdp: u });
  }
  function o(d, l) {
    let u = l.sdp;
    return Object.keys(d._reverseStreams || []).forEach((h) => {
      const p = d._reverseStreams[h], b = d._streams[p.id];
      u = u.replace(new RegExp(p.id, "g"), b.id);
    }), new RTCSessionDescription({ type: l.type, sdp: u });
  }
  ["createOffer", "createAnswer"].forEach(function(d) {
    const l = n.RTCPeerConnection.prototype[d], u = { [d]() {
      const h = arguments;
      return arguments.length && typeof arguments[0] == "function" ? l.apply(this, [(b) => {
        const g = r(this, b);
        h[0].apply(null, [g]);
      }, (b) => {
        h[1] && h[1].apply(null, b);
      }, arguments[2]]) : l.apply(this, arguments).then((b) => r(this, b));
    } };
    n.RTCPeerConnection.prototype[d] = u[d];
  });
  const a = n.RTCPeerConnection.prototype.setLocalDescription;
  n.RTCPeerConnection.prototype.setLocalDescription = function() {
    return !arguments.length || !arguments[0].type ? a.apply(this, arguments) : (arguments[0] = o(this, arguments[0]), a.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype, "localDescription");
  Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", { get() {
    const d = c.get.apply(this);
    return d.type === "" ? d : r(this, d);
  } }), n.RTCPeerConnection.prototype.removeTrack = function(l) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    if (!l._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
    if (!(l._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
    this._streams = this._streams || {};
    let h;
    Object.keys(this._streams).forEach((p) => {
      this._streams[p].getTracks().find((g) => l.track === g) && (h = this._streams[p]);
    }), h && (h.getTracks().length === 1 ? this.removeStream(this._reverseStreams[h.id]) : h.removeTrack(l.track), this.dispatchEvent(new Event("negotiationneeded")));
  };
}
function dn(n, e) {
  !n.RTCPeerConnection && n.webkitRTCPeerConnection && (n.RTCPeerConnection = n.webkitRTCPeerConnection), n.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
    const i = n.RTCPeerConnection.prototype[t], s = { [t]() {
      return arguments[0] = new (t === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
    } };
    n.RTCPeerConnection.prototype[t] = s[t];
  });
}
function va(n, e) {
  ct(n, "negotiationneeded", (t) => {
    const i = t.target;
    if (!((e.version < 72 || i.getConfiguration && i.getConfiguration().sdpSemantics === "plan-b") && i.signalingState !== "stable")) return t;
  });
}
var Ds = Object.freeze({ __proto__: null, fixNegotiationNeeded: va, shimAddTrackRemoveTrack: ga, shimAddTrackRemoveTrackWithNative: fa, shimGetSendersWithDtmf: ma, shimGetUserMedia: la, shimMediaStream: ua, shimOnTrack: ha, shimPeerConnection: dn, shimSenderReceiverGetStats: pa });
function ba(n, e) {
  const t = n && n.navigator, i = n && n.MediaStreamTrack;
  if (t.getUserMedia = function(s, r, o) {
    Kn("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(s).then(r, o);
  }, !(e.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
    const s = function(o, a, c) {
      a in o && !(c in o) && (o[c] = o[a], delete o[a]);
    }, r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (t.mediaDevices.getUserMedia = function(o) {
      return typeof o == "object" && typeof o.audio == "object" && (o = JSON.parse(JSON.stringify(o)), s(o.audio, "autoGainControl", "mozAutoGainControl"), s(o.audio, "noiseSuppression", "mozNoiseSuppression")), r(o);
    }, i && i.prototype.getSettings) {
      const o = i.prototype.getSettings;
      i.prototype.getSettings = function() {
        const a = o.apply(this, arguments);
        return s(a, "mozAutoGainControl", "autoGainControl"), s(a, "mozNoiseSuppression", "noiseSuppression"), a;
      };
    }
    if (i && i.prototype.applyConstraints) {
      const o = i.prototype.applyConstraints;
      i.prototype.applyConstraints = function(a) {
        return this.kind === "audio" && typeof a == "object" && (a = JSON.parse(JSON.stringify(a)), s(a, "autoGainControl", "mozAutoGainControl"), s(a, "noiseSuppression", "mozNoiseSuppression")), o.apply(this, [a]);
      };
    }
  }
}
function rd(n, e) {
  n.navigator.mediaDevices && "getDisplayMedia" in n.navigator.mediaDevices || n.navigator.mediaDevices && (n.navigator.mediaDevices.getDisplayMedia = function(i) {
    if (!(i && i.video)) {
      const s = new DOMException("getDisplayMedia without video constraints is undefined");
      return s.name = "NotFoundError", s.code = 8, Promise.reject(s);
    }
    return i.video === true ? i.video = { mediaSource: e } : i.video.mediaSource = e, n.navigator.mediaDevices.getUserMedia(i);
  });
}
function ya(n) {
  typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function ln(n, e) {
  if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection)) return;
  !n.RTCPeerConnection && n.mozRTCPeerConnection && (n.RTCPeerConnection = n.mozRTCPeerConnection), e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(s) {
    const r = n.RTCPeerConnection.prototype[s], o = { [s]() {
      return arguments[0] = new (s === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), r.apply(this, arguments);
    } };
    n.RTCPeerConnection.prototype[s] = o[s];
  });
  const t = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, i = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function() {
    const [r, o, a] = arguments;
    return i.apply(this, [r || null]).then((c) => {
      if (e.version < 53 && !o) try {
        c.forEach((d) => {
          d.type = t[d.type] || d.type;
        });
      } catch (d) {
        if (d.name !== "TypeError") throw d;
        c.forEach((l, u) => {
          c.set(u, Object.assign({}, l, { type: t[l.type] || l.type }));
        });
      }
      return c;
    }).then(o, a);
  };
}
function ka(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpSender.prototype) return;
  const e = n.RTCPeerConnection.prototype.getSenders;
  e && (n.RTCPeerConnection.prototype.getSenders = function() {
    const s = e.apply(this, []);
    return s.forEach((r) => r._pc = this), s;
  });
  const t = n.RTCPeerConnection.prototype.addTrack;
  t && (n.RTCPeerConnection.prototype.addTrack = function() {
    const s = t.apply(this, arguments);
    return s._pc = this, s;
  }), n.RTCRtpSender.prototype.getStats = function() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
  };
}
function Ta(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpReceiver.prototype) return;
  const e = n.RTCPeerConnection.prototype.getReceivers;
  e && (n.RTCPeerConnection.prototype.getReceivers = function() {
    const i = e.apply(this, []);
    return i.forEach((s) => s._pc = this), i;
  }), ct(n, "track", (t) => (t.receiver._pc = t.srcElement, t)), n.RTCRtpReceiver.prototype.getStats = function() {
    return this._pc.getStats(this.track);
  };
}
function Sa(n) {
  !n.RTCPeerConnection || "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
    Kn("removeStream", "removeTrack"), this.getSenders().forEach((i) => {
      i.track && t.getTracks().includes(i.track) && this.removeTrack(i);
    });
  });
}
function Ca(n) {
  n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel);
}
function Ea(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.addTransceiver;
  e && (n.RTCPeerConnection.prototype.addTransceiver = function() {
    this.setParametersPromises = [];
    let i = arguments[1] && arguments[1].sendEncodings;
    i === void 0 && (i = []), i = [...i];
    const s = i.length > 0;
    s && i.forEach((o) => {
      if ("rid" in o && !/^[a-z0-9]{0,16}$/i.test(o.rid)) throw new TypeError("Invalid RID value provided.");
      if ("scaleResolutionDownBy" in o && !(parseFloat(o.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
      if ("maxFramerate" in o && !(parseFloat(o.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
    });
    const r = e.apply(this, arguments);
    if (s) {
      const { sender: o } = r, a = o.getParameters();
      (!("encodings" in a) || a.encodings.length === 1 && Object.keys(a.encodings[0]).length === 0) && (a.encodings = i, o.sendEncodings = i, this.setParametersPromises.push(o.setParameters(a).then(() => {
        delete o.sendEncodings;
      }).catch(() => {
        delete o.sendEncodings;
      })));
    }
    return r;
  });
}
function Pa(n) {
  if (!(typeof n == "object" && n.RTCRtpSender)) return;
  const e = n.RTCRtpSender.prototype.getParameters;
  e && (n.RTCRtpSender.prototype.getParameters = function() {
    const i = e.apply(this, arguments);
    return "encodings" in i || (i.encodings = [].concat(this.sendEncodings || [{}])), i;
  });
}
function Ra(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
function _a(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection)) return;
  const e = n.RTCPeerConnection.prototype.createAnswer;
  n.RTCPeerConnection.prototype.createAnswer = function() {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => e.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : e.apply(this, arguments);
  };
}
var Ms = Object.freeze({ __proto__: null, shimAddTransceiver: Ea, shimCreateAnswer: _a, shimCreateOffer: Ra, shimGetDisplayMedia: rd, shimGetParameters: Pa, shimGetUserMedia: ba, shimOnTrack: ya, shimPeerConnection: ln, shimRTCDataChannel: Ca, shimReceiverGetStats: Ta, shimRemoveStream: Sa, shimSenderGetStats: ka });
function wa(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection)) {
    if ("getLocalStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getLocalStreams = function() {
      return this._localStreams || (this._localStreams = []), this._localStreams;
    }), !("addStream" in n.RTCPeerConnection.prototype)) {
      const e = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addStream = function(i) {
        this._localStreams || (this._localStreams = []), this._localStreams.includes(i) || this._localStreams.push(i), i.getAudioTracks().forEach((s) => e.call(this, s, i)), i.getVideoTracks().forEach((s) => e.call(this, s, i));
      }, n.RTCPeerConnection.prototype.addTrack = function(i) {
        for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) r[o - 1] = arguments[o];
        return r && r.forEach((a) => {
          this._localStreams ? this._localStreams.includes(a) || this._localStreams.push(a) : this._localStreams = [a];
        }), e.apply(this, arguments);
      };
    }
    "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function(t) {
      this._localStreams || (this._localStreams = []);
      const i = this._localStreams.indexOf(t);
      if (i === -1) return;
      this._localStreams.splice(i, 1);
      const s = t.getTracks();
      this.getSenders().forEach((r) => {
        s.includes(r.track) && this.removeTrack(r);
      });
    });
  }
}
function Ia(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection) && ("getRemoteStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this._remoteStreams ? this._remoteStreams : [];
  }), !("onaddstream" in n.RTCPeerConnection.prototype))) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", { get() {
      return this._onaddstream;
    }, set(t) {
      this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = (i) => {
        i.streams.forEach((s) => {
          if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(s)) return;
          this._remoteStreams.push(s);
          const r = new Event("addstream");
          r.stream = s, this.dispatchEvent(r);
        });
      });
    } });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function() {
      const i = this;
      return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(s) {
        s.streams.forEach((r) => {
          if (i._remoteStreams || (i._remoteStreams = []), i._remoteStreams.indexOf(r) >= 0) return;
          i._remoteStreams.push(r);
          const o = new Event("addstream");
          o.stream = r, i.dispatchEvent(o);
        });
      }), e.apply(i, arguments);
    };
  }
}
function Oa(n) {
  if (typeof n != "object" || !n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection.prototype, t = e.createOffer, i = e.createAnswer, s = e.setLocalDescription, r = e.setRemoteDescription, o = e.addIceCandidate;
  e.createOffer = function(d, l) {
    const u = arguments.length >= 2 ? arguments[2] : arguments[0], h = t.apply(this, [u]);
    return l ? (h.then(d, l), Promise.resolve()) : h;
  }, e.createAnswer = function(d, l) {
    const u = arguments.length >= 2 ? arguments[2] : arguments[0], h = i.apply(this, [u]);
    return l ? (h.then(d, l), Promise.resolve()) : h;
  };
  let a = function(c, d, l) {
    const u = s.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  };
  e.setLocalDescription = a, a = function(c, d, l) {
    const u = r.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  }, e.setRemoteDescription = a, a = function(c, d, l) {
    const u = o.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  }, e.addIceCandidate = a;
}
function Da(n) {
  const e = n && n.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices, i = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = (s) => i(Ma(s));
  }
  !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = (function(i, s, r) {
    e.mediaDevices.getUserMedia(i).then(s, r);
  }).bind(e));
}
function Ma(n) {
  return n && n.video !== void 0 ? Object.assign({}, n, { video: da(n.video) }) : n;
}
function Aa(n) {
  if (!n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection;
  n.RTCPeerConnection = function(i, s) {
    if (i && i.iceServers) {
      const r = [];
      for (let o = 0; o < i.iceServers.length; o++) {
        let a = i.iceServers[o];
        a.urls === void 0 && a.url ? (Kn("RTCIceServer.url", "RTCIceServer.urls"), a = JSON.parse(JSON.stringify(a)), a.urls = a.url, delete a.url, r.push(a)) : r.push(i.iceServers[o]);
      }
      i.iceServers = r;
    }
    return new e(i, s);
  }, n.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(n.RTCPeerConnection, "generateCertificate", { get() {
    return e.generateCertificate;
  } });
}
function xa(n) {
  typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", { get() {
    return { receiver: this.receiver };
  } });
}
function Na(n) {
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function(i) {
    if (i) {
      typeof i.offerToReceiveAudio < "u" && (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
      const s = this.getTransceivers().find((o) => o.receiver.track.kind === "audio");
      i.offerToReceiveAudio === false && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : i.offerToReceiveAudio === true && !s && this.addTransceiver("audio", { direction: "recvonly" }), typeof i.offerToReceiveVideo < "u" && (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
      const r = this.getTransceivers().find((o) => o.receiver.track.kind === "video");
      i.offerToReceiveVideo === false && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : i.offerToReceiveVideo === true && !r && this.addTransceiver("video", { direction: "recvonly" });
    }
    return e.apply(this, arguments);
  };
}
function La(n) {
  typeof n != "object" || n.AudioContext || (n.AudioContext = n.webkitAudioContext);
}
var As = Object.freeze({ __proto__: null, shimAudioContext: La, shimCallbacksAPI: Oa, shimConstraints: Ma, shimCreateOfferLegacy: Na, shimGetUserMedia: Da, shimLocalStreamsAPI: wa, shimRTCIceServerUrls: Aa, shimRemoteStreamsAPI: Ia, shimTrackEventTransceiver: xa }), ji = { exports: {} }, xs;
function ad() {
  return xs || (xs = 1, (function(n) {
    const e = {};
    e.generateIdentifier = function() {
      return Math.random().toString(36).substring(2, 12);
    }, e.localCName = e.generateIdentifier(), e.splitLines = function(t) {
      return t.trim().split(`
`).map((i) => i.trim());
    }, e.splitSections = function(t) {
      return t.split(`
m=`).map((s, r) => (r > 0 ? "m=" + s : s).trim() + `\r
`);
    }, e.getDescription = function(t) {
      const i = e.splitSections(t);
      return i && i[0];
    }, e.getMediaSections = function(t) {
      const i = e.splitSections(t);
      return i.shift(), i;
    }, e.matchPrefix = function(t, i) {
      return e.splitLines(t).filter((s) => s.indexOf(i) === 0);
    }, e.parseCandidate = function(t) {
      let i;
      t.indexOf("a=candidate:") === 0 ? i = t.substring(12).split(" ") : i = t.substring(10).split(" ");
      const s = { foundation: i[0], component: { 1: "rtp", 2: "rtcp" }[i[1]] || i[1], protocol: i[2].toLowerCase(), priority: parseInt(i[3], 10), ip: i[4], address: i[4], port: parseInt(i[5], 10), type: i[7] };
      for (let r = 8; r < i.length; r += 2) switch (i[r]) {
        case "raddr":
          s.relatedAddress = i[r + 1];
          break;
        case "rport":
          s.relatedPort = parseInt(i[r + 1], 10);
          break;
        case "tcptype":
          s.tcpType = i[r + 1];
          break;
        case "ufrag":
          s.ufrag = i[r + 1], s.usernameFragment = i[r + 1];
          break;
        default:
          s[i[r]] === void 0 && (s[i[r]] = i[r + 1]);
          break;
      }
      return s;
    }, e.writeCandidate = function(t) {
      const i = [];
      i.push(t.foundation);
      const s = t.component;
      s === "rtp" ? i.push(1) : s === "rtcp" ? i.push(2) : i.push(s), i.push(t.protocol.toUpperCase()), i.push(t.priority), i.push(t.address || t.ip), i.push(t.port);
      const r = t.type;
      return i.push("typ"), i.push(r), r !== "host" && t.relatedAddress && t.relatedPort && (i.push("raddr"), i.push(t.relatedAddress), i.push("rport"), i.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (i.push("tcptype"), i.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (i.push("ufrag"), i.push(t.usernameFragment || t.ufrag)), "candidate:" + i.join(" ");
    }, e.parseIceOptions = function(t) {
      return t.substring(14).split(" ");
    }, e.parseRtpMap = function(t) {
      let i = t.substring(9).split(" ");
      const s = { payloadType: parseInt(i.shift(), 10) };
      return i = i[0].split("/"), s.name = i[0], s.clockRate = parseInt(i[1], 10), s.channels = i.length === 3 ? parseInt(i[2], 10) : 1, s.numChannels = s.channels, s;
    }, e.writeRtpMap = function(t) {
      let i = t.payloadType;
      t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
      const s = t.channels || t.numChannels || 1;
      return "a=rtpmap:" + i + " " + t.name + "/" + t.clockRate + (s !== 1 ? "/" + s : "") + `\r
`;
    }, e.parseExtmap = function(t) {
      const i = t.substring(9).split(" ");
      return { id: parseInt(i[0], 10), direction: i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv", uri: i[1], attributes: i.slice(2).join(" ") };
    }, e.writeExtmap = function(t) {
      return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`;
    }, e.parseFmtp = function(t) {
      const i = {};
      let s;
      const r = t.substring(t.indexOf(" ") + 1).split(";");
      for (let o = 0; o < r.length; o++) s = r[o].trim().split("="), i[s[0].trim()] = s[1];
      return i;
    }, e.writeFmtp = function(t) {
      let i = "", s = t.payloadType;
      if (t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
        const r = [];
        Object.keys(t.parameters).forEach((o) => {
          t.parameters[o] !== void 0 ? r.push(o + "=" + t.parameters[o]) : r.push(o);
        }), i += "a=fmtp:" + s + " " + r.join(";") + `\r
`;
      }
      return i;
    }, e.parseRtcpFb = function(t) {
      const i = t.substring(t.indexOf(" ") + 1).split(" ");
      return { type: i.shift(), parameter: i.join(" ") };
    }, e.writeRtcpFb = function(t) {
      let i = "", s = t.payloadType;
      return t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach((r) => {
        i += "a=rtcp-fb:" + s + " " + r.type + (r.parameter && r.parameter.length ? " " + r.parameter : "") + `\r
`;
      }), i;
    }, e.parseSsrcMedia = function(t) {
      const i = t.indexOf(" "), s = { ssrc: parseInt(t.substring(7, i), 10) }, r = t.indexOf(":", i);
      return r > -1 ? (s.attribute = t.substring(i + 1, r), s.value = t.substring(r + 1)) : s.attribute = t.substring(i + 1), s;
    }, e.parseSsrcGroup = function(t) {
      const i = t.substring(13).split(" ");
      return { semantics: i.shift(), ssrcs: i.map((s) => parseInt(s, 10)) };
    }, e.getMid = function(t) {
      const i = e.matchPrefix(t, "a=mid:")[0];
      if (i) return i.substring(6);
    }, e.parseFingerprint = function(t) {
      const i = t.substring(14).split(" ");
      return { algorithm: i[0].toLowerCase(), value: i[1].toUpperCase() };
    }, e.getDtlsParameters = function(t, i) {
      return { role: "auto", fingerprints: e.matchPrefix(t + i, "a=fingerprint:").map(e.parseFingerprint) };
    }, e.writeDtlsParameters = function(t, i) {
      let s = "a=setup:" + i + `\r
`;
      return t.fingerprints.forEach((r) => {
        s += "a=fingerprint:" + r.algorithm + " " + r.value + `\r
`;
      }), s;
    }, e.parseCryptoLine = function(t) {
      const i = t.substring(9).split(" ");
      return { tag: parseInt(i[0], 10), cryptoSuite: i[1], keyParams: i[2], sessionParams: i.slice(3) };
    }, e.writeCryptoLine = function(t) {
      return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`;
    }, e.parseCryptoKeyParams = function(t) {
      if (t.indexOf("inline:") !== 0) return null;
      const i = t.substring(7).split("|");
      return { keyMethod: "inline", keySalt: i[0], lifeTime: i[1], mkiValue: i[2] ? i[2].split(":")[0] : void 0, mkiLength: i[2] ? i[2].split(":")[1] : void 0 };
    }, e.writeCryptoKeyParams = function(t) {
      return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "");
    }, e.getCryptoParameters = function(t, i) {
      return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine);
    }, e.getIceParameters = function(t, i) {
      const s = e.matchPrefix(t + i, "a=ice-ufrag:")[0], r = e.matchPrefix(t + i, "a=ice-pwd:")[0];
      return s && r ? { usernameFragment: s.substring(12), password: r.substring(10) } : null;
    }, e.writeIceParameters = function(t) {
      let i = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
      return t.iceLite && (i += `a=ice-lite\r
`), i;
    }, e.parseRtpParameters = function(t) {
      const i = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, r = e.splitLines(t)[0].split(" ");
      i.profile = r[2];
      for (let a = 3; a < r.length; a++) {
        const c = r[a], d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
        if (d) {
          const l = e.parseRtpMap(d), u = e.matchPrefix(t, "a=fmtp:" + c + " ");
          switch (l.parameters = u.length ? e.parseFmtp(u[0]) : {}, l.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + c + " ").map(e.parseRtcpFb), i.codecs.push(l), l.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              i.fecMechanisms.push(l.name.toUpperCase());
              break;
          }
        }
      }
      e.matchPrefix(t, "a=extmap:").forEach((a) => {
        i.headerExtensions.push(e.parseExtmap(a));
      });
      const o = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
      return i.codecs.forEach((a) => {
        o.forEach((c) => {
          a.rtcpFeedback.find((l) => l.type === c.type && l.parameter === c.parameter) || a.rtcpFeedback.push(c);
        });
      }), i;
    }, e.writeRtpDescription = function(t, i) {
      let s = "";
      s += "m=" + t + " ", s += i.codecs.length > 0 ? "9" : "0", s += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " ", s += i.codecs.map((o) => o.preferredPayloadType !== void 0 ? o.preferredPayloadType : o.payloadType).join(" ") + `\r
`, s += `c=IN IP4 0.0.0.0\r
`, s += `a=rtcp:9 IN IP4 0.0.0.0\r
`, i.codecs.forEach((o) => {
        s += e.writeRtpMap(o), s += e.writeFmtp(o), s += e.writeRtcpFb(o);
      });
      let r = 0;
      return i.codecs.forEach((o) => {
        o.maxptime > r && (r = o.maxptime);
      }), r > 0 && (s += "a=maxptime:" + r + `\r
`), i.headerExtensions && i.headerExtensions.forEach((o) => {
        s += e.writeExtmap(o);
      }), s;
    }, e.parseRtpEncodingParameters = function(t) {
      const i = [], s = e.parseRtpParameters(t), r = s.fecMechanisms.indexOf("RED") !== -1, o = s.fecMechanisms.indexOf("ULPFEC") !== -1, a = e.matchPrefix(t, "a=ssrc:").map((h) => e.parseSsrcMedia(h)).filter((h) => h.attribute === "cname"), c = a.length > 0 && a[0].ssrc;
      let d;
      const l = e.matchPrefix(t, "a=ssrc-group:FID").map((h) => h.substring(17).split(" ").map((b) => parseInt(b, 10)));
      l.length > 0 && l[0].length > 1 && l[0][0] === c && (d = l[0][1]), s.codecs.forEach((h) => {
        if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
          let p = { ssrc: c, codecPayloadType: parseInt(h.parameters.apt, 10) };
          c && d && (p.rtx = { ssrc: d }), i.push(p), r && (p = JSON.parse(JSON.stringify(p)), p.fec = { ssrc: c, mechanism: o ? "red+ulpfec" : "red" }, i.push(p));
        }
      }), i.length === 0 && c && i.push({ ssrc: c });
      let u = e.matchPrefix(t, "b=");
      return u.length && (u[0].indexOf("b=TIAS:") === 0 ? u = parseInt(u[0].substring(7), 10) : u[0].indexOf("b=AS:") === 0 ? u = parseInt(u[0].substring(5), 10) * 1e3 * 0.95 - 2e3 * 8 : u = void 0, i.forEach((h) => {
        h.maxBitrate = u;
      })), i;
    }, e.parseRtcpParameters = function(t) {
      const i = {}, s = e.matchPrefix(t, "a=ssrc:").map((a) => e.parseSsrcMedia(a)).filter((a) => a.attribute === "cname")[0];
      s && (i.cname = s.value, i.ssrc = s.ssrc);
      const r = e.matchPrefix(t, "a=rtcp-rsize");
      i.reducedSize = r.length > 0, i.compound = r.length === 0;
      const o = e.matchPrefix(t, "a=rtcp-mux");
      return i.mux = o.length > 0, i;
    }, e.writeRtcpParameters = function(t) {
      let i = "";
      return t.reducedSize && (i += `a=rtcp-rsize\r
`), t.mux && (i += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (i += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), i;
    }, e.parseMsid = function(t) {
      let i;
      const s = e.matchPrefix(t, "a=msid:");
      if (s.length === 1) return i = s[0].substring(7).split(" "), { stream: i[0], track: i[1] };
      const r = e.matchPrefix(t, "a=ssrc:").map((o) => e.parseSsrcMedia(o)).filter((o) => o.attribute === "msid");
      if (r.length > 0) return i = r[0].value.split(" "), { stream: i[0], track: i[1] };
    }, e.parseSctpDescription = function(t) {
      const i = e.parseMLine(t), s = e.matchPrefix(t, "a=max-message-size:");
      let r;
      s.length > 0 && (r = parseInt(s[0].substring(19), 10)), isNaN(r) && (r = 65536);
      const o = e.matchPrefix(t, "a=sctp-port:");
      if (o.length > 0) return { port: parseInt(o[0].substring(12), 10), protocol: i.fmt, maxMessageSize: r };
      const a = e.matchPrefix(t, "a=sctpmap:");
      if (a.length > 0) {
        const c = a[0].substring(10).split(" ");
        return { port: parseInt(c[0], 10), protocol: c[1], maxMessageSize: r };
      }
    }, e.writeSctpDescription = function(t, i) {
      let s = [];
      return t.protocol !== "DTLS/SCTP" ? s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + i.port + `\r
`] : s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + i.port + " " + i.protocol + ` 65535\r
`], i.maxMessageSize !== void 0 && s.push("a=max-message-size:" + i.maxMessageSize + `\r
`), s.join("");
    }, e.generateSessionId = function() {
      return Math.random().toString().substr(2, 22);
    }, e.writeSessionBoilerplate = function(t, i, s) {
      let r;
      const o = i !== void 0 ? i : 2;
      return t ? r = t : r = e.generateSessionId(), `v=0\r
o=` + (s || "thisisadapterortc") + " " + r + " " + o + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    }, e.getDirection = function(t, i) {
      const s = e.splitLines(t);
      for (let r = 0; r < s.length; r++) switch (s[r]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return s[r].substring(2);
      }
      return i ? e.getDirection(i) : "sendrecv";
    }, e.getKind = function(t) {
      return e.splitLines(t)[0].split(" ")[0].substring(2);
    }, e.isRejected = function(t) {
      return t.split(" ", 2)[1] === "0";
    }, e.parseMLine = function(t) {
      const s = e.splitLines(t)[0].substring(2).split(" ");
      return { kind: s[0], port: parseInt(s[1], 10), protocol: s[2], fmt: s.slice(3).join(" ") };
    }, e.parseOLine = function(t) {
      const s = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
      return { username: s[0], sessionId: s[1], sessionVersion: parseInt(s[2], 10), netType: s[3], addressType: s[4], address: s[5] };
    }, e.isValidSDP = function(t) {
      if (typeof t != "string" || t.length === 0) return false;
      const i = e.splitLines(t);
      for (let s = 0; s < i.length; s++) if (i[s].length < 2 || i[s].charAt(1) !== "=") return false;
      return true;
    }, n.exports = e;
  })(ji)), ji.exports;
}
var Ua = ad(), vt = zc(Ua), od = go({ __proto__: null, default: vt }, [Ua]);
function Zt(n) {
  if (!n.RTCIceCandidate || n.RTCIceCandidate && "foundation" in n.RTCIceCandidate.prototype) return;
  const e = n.RTCIceCandidate;
  n.RTCIceCandidate = function(i) {
    if (typeof i == "object" && i.candidate && i.candidate.indexOf("a=") === 0 && (i = JSON.parse(JSON.stringify(i)), i.candidate = i.candidate.substring(2)), i.candidate && i.candidate.length) {
      const s = new e(i), r = vt.parseCandidate(i.candidate);
      for (const o in r) o in s || Object.defineProperty(s, o, { value: r[o] });
      return s.toJSON = function() {
        return { candidate: s.candidate, sdpMid: s.sdpMid, sdpMLineIndex: s.sdpMLineIndex, usernameFragment: s.usernameFragment };
      }, s;
    }
    return new e(i);
  }, n.RTCIceCandidate.prototype = e.prototype, ct(n, "icecandidate", (t) => (t.candidate && Object.defineProperty(t, "candidate", { value: new n.RTCIceCandidate(t.candidate), writable: "false" }), t));
}
function un(n) {
  !n.RTCIceCandidate || n.RTCIceCandidate && "relayProtocol" in n.RTCIceCandidate.prototype || ct(n, "icecandidate", (e) => {
    if (e.candidate) {
      const t = vt.parseCandidate(e.candidate.candidate);
      t.type === "relay" && (e.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t.priority >> 24]);
    }
    return e;
  });
}
function ei(n, e) {
  if (!n.RTCPeerConnection) return;
  "sctp" in n.RTCPeerConnection.prototype || Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", { get() {
    return typeof this._sctp > "u" ? null : this._sctp;
  } });
  const t = function(a) {
    if (!a || !a.sdp) return false;
    const c = vt.splitSections(a.sdp);
    return c.shift(), c.some((d) => {
      const l = vt.parseMLine(d);
      return l && l.kind === "application" && l.protocol.indexOf("SCTP") !== -1;
    });
  }, i = function(a) {
    const c = a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (c === null || c.length < 2) return -1;
    const d = parseInt(c[1], 10);
    return d !== d ? -1 : d;
  }, s = function(a) {
    let c = 65536;
    return e.browser === "firefox" && (e.version < 57 ? a === -1 ? c = 16384 : c = 2147483637 : e.version < 60 ? c = e.version === 57 ? 65535 : 65536 : c = 2147483637), c;
  }, r = function(a, c) {
    let d = 65536;
    e.browser === "firefox" && e.version === 57 && (d = 65535);
    const l = vt.matchPrefix(a.sdp, "a=max-message-size:");
    return l.length > 0 ? d = parseInt(l[0].substring(19), 10) : e.browser === "firefox" && c !== -1 && (d = 2147483637), d;
  }, o = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function() {
    if (this._sctp = null, e.browser === "chrome" && e.version >= 76) {
      const { sdpSemantics: c } = this.getConfiguration();
      c === "plan-b" && Object.defineProperty(this, "sctp", { get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      }, enumerable: true, configurable: true });
    }
    if (t(arguments[0])) {
      const c = i(arguments[0]), d = s(c), l = r(arguments[0], c);
      let u;
      d === 0 && l === 0 ? u = Number.POSITIVE_INFINITY : d === 0 || l === 0 ? u = Math.max(d, l) : u = Math.min(d, l);
      const h = {};
      Object.defineProperty(h, "maxMessageSize", { get() {
        return u;
      } }), this._sctp = h;
    }
    return o.apply(this, arguments);
  };
}
function ti(n) {
  if (!(n.RTCPeerConnection && "createDataChannel" in n.RTCPeerConnection.prototype)) return;
  function e(i, s) {
    const r = i.send;
    i.send = function() {
      const a = arguments[0], c = a.length || a.size || a.byteLength;
      if (i.readyState === "open" && s.sctp && c > s.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + s.sctp.maxMessageSize + " bytes)");
      return r.apply(i, arguments);
    };
  }
  const t = n.RTCPeerConnection.prototype.createDataChannel;
  n.RTCPeerConnection.prototype.createDataChannel = function() {
    const s = t.apply(this, arguments);
    return e(s, this), s;
  }, ct(n, "datachannel", (i) => (e(i.channel, i.target), i));
}
function hn(n) {
  if (!n.RTCPeerConnection || "connectionState" in n.RTCPeerConnection.prototype) return;
  const e = n.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", { get() {
    return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
  }, enumerable: true, configurable: true }), Object.defineProperty(e, "onconnectionstatechange", { get() {
    return this._onconnectionstatechange || null;
  }, set(t) {
    this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t);
  }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach((t) => {
    const i = e[t];
    e[t] = function() {
      return this._connectionstatechangepoly || (this._connectionstatechangepoly = (s) => {
        const r = s.target;
        if (r._lastConnectionState !== r.connectionState) {
          r._lastConnectionState = r.connectionState;
          const o = new Event("connectionstatechange", s);
          r.dispatchEvent(o);
        }
        return s;
      }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), i.apply(this, arguments);
    };
  });
}
function mn(n, e) {
  if (!n.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e._safariVersion >= 13.1) return;
  const t = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function(s) {
    if (s && s.sdp && s.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
      const r = s.sdp.split(`
`).filter((o) => o.trim() !== "a=extmap-allow-mixed").join(`
`);
      n.RTCSessionDescription && s instanceof n.RTCSessionDescription ? arguments[0] = new n.RTCSessionDescription({ type: s.type, sdp: r }) : s.sdp = r;
    }
    return t.apply(this, arguments);
  };
}
function ii(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.addIceCandidate;
  !t || t.length === 0 || (n.RTCPeerConnection.prototype.addIceCandidate = function() {
    return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
  });
}
function ni(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.setLocalDescription;
  !t || t.length === 0 || (n.RTCPeerConnection.prototype.setLocalDescription = function() {
    let s = arguments[0] || {};
    if (typeof s != "object" || s.type && s.sdp) return t.apply(this, arguments);
    if (s = { type: s.type, sdp: s.sdp }, !s.type) switch (this.signalingState) {
      case "stable":
      case "have-local-offer":
      case "have-remote-pranswer":
        s.type = "offer";
        break;
      default:
        s.type = "answer";
        break;
    }
    return s.sdp || s.type !== "offer" && s.type !== "answer" ? t.apply(this, [s]) : (s.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((o) => t.apply(this, [o]));
  });
}
var cd = Object.freeze({ __proto__: null, removeExtmapAllowMixed: mn, shimAddIceCandidateNullOrEmpty: ii, shimConnectionState: hn, shimMaxMessageSize: ei, shimParameterlessSetLocalDescription: ni, shimRTCIceCandidate: Zt, shimRTCIceCandidateRelayProtocol: un, shimSendThrowTypeError: ti });
function dd() {
  let { window: n } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { shimChrome: true, shimFirefox: true, shimSafari: true };
  const t = ca, i = sd(n), s = { browserDetails: i, commonShim: cd, extractVersion: At, disableLog: id, disableWarnings: nd, sdp: od };
  switch (i.browser) {
    case "chrome":
      if (!Ds || !dn || !e.shimChrome) return t("Chrome shim is not included in this adapter release."), s;
      if (i.version === null) return t("Chrome shim can not determine version, not shimming."), s;
      t("adapter.js shimming chrome."), s.browserShim = Ds, ii(n, i), ni(n), la(n, i), ua(n), dn(n, i), ha(n), ga(n, i), ma(n), pa(n), va(n, i), Zt(n), un(n), hn(n), ei(n, i), ti(n), mn(n, i);
      break;
    case "firefox":
      if (!Ms || !ln || !e.shimFirefox) return t("Firefox shim is not included in this adapter release."), s;
      t("adapter.js shimming firefox."), s.browserShim = Ms, ii(n, i), ni(n), ba(n, i), ln(n, i), ya(n), Sa(n), ka(n), Ta(n), Ca(n), Ea(n), Pa(n), Ra(n), _a(n), Zt(n), hn(n), ei(n, i), ti(n);
      break;
    case "safari":
      if (!As || !e.shimSafari) return t("Safari shim is not included in this adapter release."), s;
      t("adapter.js shimming safari."), s.browserShim = As, ii(n, i), ni(n), Aa(n), Na(n), Oa(n), wa(n), Ia(n), xa(n), Da(n), La(n), Zt(n), un(n), ei(n, i), ti(n), mn(n, i);
      break;
    default:
      t("Unsupported browser!");
      break;
  }
  return s;
}
dd({ window: typeof window > "u" ? void 0 : window });
class me extends Promise {
  constructor(e) {
    super(e);
  }
  catch(e) {
    return super.catch(e);
  }
  static reject(e) {
    return super.reject(e);
  }
  static all(e) {
    return super.all(e);
  }
  static race(e) {
    return super.race(e);
  }
}
const ld = /version\/(\d+(\.?_?\d+)+)/i;
let Bi;
function fe(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (typeof navigator > "u") return;
  const t = navigator.userAgent.toLowerCase();
  if (Bi === void 0 || e) {
    const i = ud.find((s) => {
      let { test: r } = s;
      return r.test(t);
    });
    Bi = i == null ? void 0 : i.describe(t);
  }
  return Bi;
}
const ud = [{ test: /firefox|iceweasel|fxios/i, describe(n) {
  return { name: "Firefox", version: si(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n), os: n.toLowerCase().includes("fxios") ? "iOS" : void 0, osVersion: Vi(n) };
} }, { test: /chrom|crios|crmo/i, describe(n) {
  return { name: "Chrome", version: si(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n), os: n.toLowerCase().includes("crios") ? "iOS" : void 0, osVersion: Vi(n) };
} }, { test: /safari|applewebkit/i, describe(n) {
  return { name: "Safari", version: si(ld, n), os: n.includes("mobile/") ? "iOS" : "macOS", osVersion: Vi(n) };
} }];
function si(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  const i = e.match(n);
  return i && i.length >= t && i[t] || "";
}
function Vi(n) {
  return n.includes("mac os") ? si(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".") : void 0;
}
var hd = "2.17.0";
const md = hd, pd = 16;
class xe extends Error {
  constructor(e, t) {
    super(t || "an error has occured"), this.name = "LiveKitError", this.code = e;
  }
}
var H;
(function(n) {
  n[n.NotAllowed = 0] = "NotAllowed", n[n.ServerUnreachable = 1] = "ServerUnreachable", n[n.InternalError = 2] = "InternalError", n[n.Cancelled = 3] = "Cancelled", n[n.LeaveRequest = 4] = "LeaveRequest", n[n.Timeout = 5] = "Timeout", n[n.WebSocket = 6] = "WebSocket", n[n.ServiceNotFound = 7] = "ServiceNotFound";
})(H || (H = {}));
class L extends xe {
  constructor(e, t, i, s) {
    super(1, e), this.name = "ConnectionError", this.status = i, this.reason = t, this.context = s, this.reasonName = H[t];
  }
  static notAllowed(e, t, i) {
    return new L(e, H.NotAllowed, t, i);
  }
  static timeout(e) {
    return new L(e, H.Timeout);
  }
  static leaveRequest(e, t) {
    return new L(e, H.LeaveRequest, void 0, t);
  }
  static internal(e, t) {
    return new L(e, H.InternalError, void 0, t);
  }
  static cancelled(e) {
    return new L(e, H.Cancelled);
  }
  static serverUnreachable(e, t) {
    return new L(e, H.ServerUnreachable, t);
  }
  static websocket(e, t, i) {
    return new L(e, H.WebSocket, t, i);
  }
  static serviceNotFound(e, t) {
    return new L(e, H.ServiceNotFound, void 0, t);
  }
}
class Gn extends xe {
  constructor(e) {
    super(21, e ?? "device is unsupported"), this.name = "DeviceUnsupportedError";
  }
}
class Be extends xe {
  constructor(e) {
    super(20, e ?? "track is invalid"), this.name = "TrackInvalidError";
  }
}
class fd extends xe {
  constructor(e) {
    super(10, e ?? "unsupported server"), this.name = "UnsupportedServer";
  }
}
class $ extends xe {
  constructor(e) {
    super(12, e ?? "unexpected connection state"), this.name = "UnexpectedConnectionState";
  }
}
class bt extends xe {
  constructor(e) {
    super(13, e ?? "unable to negotiate"), this.name = "NegotiationError";
  }
}
class Ns extends xe {
  constructor(e, t) {
    super(15, e), this.name = "PublishTrackError", this.status = t;
  }
}
class Ls extends xe {
  constructor(e, t) {
    super(15, e), this.name = "SignalRequestError", this.reason = t, this.reasonName = typeof t == "string" ? t : Wn[t];
  }
}
var ce;
(function(n) {
  n[n.AlreadyOpened = 0] = "AlreadyOpened", n[n.AbnormalEnd = 1] = "AbnormalEnd", n[n.DecodeFailed = 2] = "DecodeFailed", n[n.LengthExceeded = 3] = "LengthExceeded", n[n.Incomplete = 4] = "Incomplete", n[n.HandlerAlreadyRegistered = 7] = "HandlerAlreadyRegistered", n[n.EncryptionTypeMismatch = 8] = "EncryptionTypeMismatch";
})(ce || (ce = {}));
class ye extends xe {
  constructor(e, t) {
    super(16, e), this.name = "DataStreamError", this.reason = t, this.reasonName = ce[t];
  }
}
class lt extends xe {
  constructor(e) {
    super(18, e), this.name = "SignalReconnectError";
  }
}
var gi;
(function(n) {
  n.PermissionDenied = "PermissionDenied", n.NotFound = "NotFound", n.DeviceInUse = "DeviceInUse", n.Other = "Other";
})(gi || (gi = {}));
(function(n) {
  function e(t) {
    if (t && "name" in t) return t.name === "NotFoundError" || t.name === "DevicesNotFoundError" ? n.NotFound : t.name === "NotAllowedError" || t.name === "PermissionDeniedError" ? n.PermissionDenied : t.name === "NotReadableError" || t.name === "TrackStartError" ? n.DeviceInUse : n.Other;
  }
  n.getFailure = e;
})(gi || (gi = {}));
class re {
}
re.setTimeout = function() {
  return setTimeout(...arguments);
};
re.setInterval = function() {
  return setInterval(...arguments);
};
re.clearTimeout = function() {
  return clearTimeout(...arguments);
};
re.clearInterval = function() {
  return clearInterval(...arguments);
};
var E;
(function(n) {
  n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting", n.Reconnected = "reconnected", n.Disconnected = "disconnected", n.ConnectionStateChanged = "connectionStateChanged", n.Moved = "moved", n.MediaDevicesChanged = "mediaDevicesChanged", n.ParticipantConnected = "participantConnected", n.ParticipantDisconnected = "participantDisconnected", n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalAudioSilenceDetected = "localAudioSilenceDetected", n.ActiveSpeakersChanged = "activeSpeakersChanged", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.ParticipantAttributesChanged = "participantAttributesChanged", n.ParticipantActive = "participantActive", n.RoomMetadataChanged = "roomMetadataChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.AudioPlaybackStatusChanged = "audioPlaybackChanged", n.VideoPlaybackStatusChanged = "videoPlaybackChanged", n.MediaDevicesError = "mediaDevicesError", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.SignalConnected = "signalConnected", n.RecordingStatusChanged = "recordingStatusChanged", n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ActiveDeviceChanged = "activeDeviceChanged", n.ChatMessage = "chatMessage", n.LocalTrackSubscribed = "localTrackSubscribed", n.MetricsReceived = "metricsReceived";
})(E || (E = {}));
var w;
(function(n) {
  n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalTrackCpuConstrained = "localTrackCpuConstrained", n.LocalSenderCreated = "localSenderCreated", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.IsSpeakingChanged = "isSpeakingChanged", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.TrackCpuConstrained = "trackCpuConstrained", n.MediaDevicesError = "mediaDevicesError", n.AudioStreamAcquired = "audioStreamAcquired", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.PCTrackAdded = "pcTrackAdded", n.AttributesChanged = "attributesChanged", n.LocalTrackSubscribed = "localTrackSubscribed", n.ChatMessage = "chatMessage", n.Active = "active";
})(w || (w = {}));
var _;
(function(n) {
  n.TransportsCreated = "transportsCreated", n.Connected = "connected", n.Disconnected = "disconnected", n.Resuming = "resuming", n.Resumed = "resumed", n.Restarting = "restarting", n.Restarted = "restarted", n.SignalResumed = "signalResumed", n.SignalRestarted = "signalRestarted", n.Closing = "closing", n.MediaTrackAdded = "mediaTrackAdded", n.ActiveSpeakersUpdate = "activeSpeakersUpdate", n.DataPacketReceived = "dataPacketReceived", n.RTPVideoMapUpdate = "rtpVideoMapUpdate", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ParticipantUpdate = "participantUpdate", n.RoomUpdate = "roomUpdate", n.SpeakersChanged = "speakersChanged", n.StreamStateChanged = "streamStateChanged", n.ConnectionQualityUpdate = "connectionQualityUpdate", n.SubscriptionError = "subscriptionError", n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", n.RemoteMute = "remoteMute", n.SubscribedQualityUpdate = "subscribedQualityUpdate", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalTrackSubscribed = "localTrackSubscribed", n.Offline = "offline", n.SignalRequestResponse = "signalRequestResponse", n.SignalConnected = "signalConnected", n.RoomMoved = "roomMoved";
})(_ || (_ = {}));
var P;
(function(n) {
  n.Message = "message", n.Muted = "muted", n.Unmuted = "unmuted", n.Restarted = "restarted", n.Ended = "ended", n.Subscribed = "subscribed", n.Unsubscribed = "unsubscribed", n.CpuConstrained = "cpuConstrained", n.UpdateSettings = "updateSettings", n.UpdateSubscription = "updateSubscription", n.AudioPlaybackStarted = "audioPlaybackStarted", n.AudioPlaybackFailed = "audioPlaybackFailed", n.AudioSilenceDetected = "audioSilenceDetected", n.VisibilityChanged = "visibilityChanged", n.VideoDimensionsChanged = "videoDimensionsChanged", n.VideoPlaybackStarted = "videoPlaybackStarted", n.VideoPlaybackFailed = "videoPlaybackFailed", n.ElementAttached = "elementAttached", n.ElementDetached = "elementDetached", n.UpstreamPaused = "upstreamPaused", n.UpstreamResumed = "upstreamResumed", n.SubscriptionPermissionChanged = "subscriptionPermissionChanged", n.SubscriptionStatusChanged = "subscriptionStatusChanged", n.SubscriptionFailed = "subscriptionFailed", n.TrackProcessorUpdate = "trackProcessorUpdate", n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", n.TranscriptionReceived = "transcriptionReceived", n.TimeSyncUpdate = "timeSyncUpdate", n.PreConnectBufferFlushed = "preConnectBufferFlushed";
})(P || (P = {}));
function gd(n) {
  return typeof n > "u" ? n : typeof structuredClone == "function" ? typeof n == "object" && n !== null ? structuredClone(Object.assign({}, n)) : structuredClone(n) : JSON.parse(JSON.stringify(n));
}
class K {
  constructor(e, t, i, s, r) {
    if (typeof e == "object") this.width = e.width, this.height = e.height, this.aspectRatio = e.aspectRatio, this.encoding = { maxBitrate: e.maxBitrate, maxFramerate: e.maxFramerate, priority: e.priority };
    else if (t !== void 0 && i !== void 0) this.width = e, this.height = t, this.aspectRatio = e / t, this.encoding = { maxBitrate: i, maxFramerate: s, priority: r };
    else throw new TypeError("Unsupported options: provide at least width, height and maxBitrate");
  }
  get resolution() {
    return { width: this.width, height: this.height, frameRate: this.encoding.maxFramerate, aspectRatio: this.aspectRatio };
  }
}
const vd = ["vp8", "h264"], bd = ["vp8", "h264", "vp9", "av1", "h265"];
function yd(n) {
  return !!vd.find((e) => e === n);
}
const kd = yd;
var Us;
(function(n) {
  n[n.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", n[n.SIMULCAST = 1] = "SIMULCAST", n[n.REGRESSION = 2] = "REGRESSION";
})(Us || (Us = {}));
var pn;
(function(n) {
  n.telephone = { maxBitrate: 12e3 }, n.speech = { maxBitrate: 24e3 }, n.music = { maxBitrate: 48e3 }, n.musicStereo = { maxBitrate: 64e3 }, n.musicHighQuality = { maxBitrate: 96e3 }, n.musicHighQualityStereo = { maxBitrate: 128e3 };
})(pn || (pn = {}));
const Vt = { h90: new K(160, 90, 9e4, 20), h180: new K(320, 180, 16e4, 20), h216: new K(384, 216, 18e4, 20), h360: new K(640, 360, 45e4, 20), h540: new K(960, 540, 8e5, 25), h720: new K(1280, 720, 17e5, 30), h1080: new K(1920, 1080, 3e6, 30), h1440: new K(2560, 1440, 5e6, 30), h2160: new K(3840, 2160, 8e6, 30) }, fn = { h120: new K(160, 120, 7e4, 20), h180: new K(240, 180, 125e3, 20), h240: new K(320, 240, 14e4, 20), h360: new K(480, 360, 33e4, 20), h480: new K(640, 480, 5e5, 20), h540: new K(720, 540, 6e5, 25), h720: new K(960, 720, 13e5, 30), h1080: new K(1440, 1080, 23e5, 30), h1440: new K(1920, 1440, 38e5, 30) }, Hn = { h360fps3: new K(640, 360, 2e5, 3, "medium"), h360fps15: new K(640, 360, 4e5, 15, "medium"), h720fps5: new K(1280, 720, 8e5, 5, "medium"), h720fps15: new K(1280, 720, 15e5, 15, "medium"), h720fps30: new K(1280, 720, 2e6, 30, "medium"), h1080fps15: new K(1920, 1080, 25e5, 15, "medium"), h1080fps30: new K(1920, 1080, 5e6, 30, "medium"), original: new K(0, 0, 7e6, 30, "medium") };
function Fa(n, e, t) {
  var i, s, r, o;
  const { optionsWithoutProcessor: a, audioProcessor: c, videoProcessor: d } = Va(n ?? {}), l = e == null ? void 0 : e.processor, u = t == null ? void 0 : t.processor, h = a ?? {};
  return h.audio === true && (h.audio = {}), h.video === true && (h.video = {}), h.audio && (gn(h.audio, e), (i = (r = h.audio).deviceId) !== null && i !== void 0 || (r.deviceId = { ideal: "default" }), (c || l) && (h.audio.processor = c ?? l)), h.video && (gn(h.video, t), (s = (o = h.video).deviceId) !== null && s !== void 0 || (o.deviceId = { ideal: "default" }), (d || u) && (h.video.processor = d ?? u)), h;
}
function gn(n, e) {
  return Object.keys(e).forEach((t) => {
    n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function Jn(n) {
  var e, t, i, s;
  const r = {};
  if (n.video) if (typeof n.video == "object") {
    const o = {}, a = o, c = n.video;
    Object.keys(c).forEach((d) => {
      d === "resolution" ? gn(a, c.resolution) : a[d] = c[d];
    }), r.video = o, (e = (i = r.video).deviceId) !== null && e !== void 0 || (i.deviceId = { ideal: "default" });
  } else r.video = n.video ? { deviceId: { ideal: "default" } } : false;
  else r.video = false;
  return n.audio ? typeof n.audio == "object" ? (r.audio = n.audio, (t = (s = r.audio).deviceId) !== null && t !== void 0 || (s.deviceId = { ideal: "default" })) : r.audio = { deviceId: { ideal: "default" } } : r.audio = false, r;
}
function ja(n) {
  return m(this, arguments, void 0, function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
    return (function* () {
      const i = Ba();
      if (i) {
        const s = i.createAnalyser();
        s.fftSize = 2048;
        const r = s.frequencyBinCount, o = new Uint8Array(r);
        i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])).connect(s), yield ae(t), s.getByteTimeDomainData(o);
        const c = o.some((d) => d !== 128 && d !== 0);
        return i.close(), !c;
      }
      return false;
    })();
  });
}
function Ba() {
  var n;
  const e = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (e) {
    const t = new e({ latencyHint: "interactive" });
    if (t.state === "suspended" && typeof window < "u" && (!((n = window.document) === null || n === void 0) && n.body)) {
      const i = () => m(this, void 0, void 0, function* () {
        var s;
        try {
          t.state === "suspended" && (yield t.resume());
        } catch (r) {
          console.warn("Error trying to auto-resume audio context", r);
        } finally {
          (s = window.document.body) === null || s === void 0 || s.removeEventListener("click", i);
        }
      });
      t.addEventListener("statechange", () => {
        var s;
        t.state === "closed" && ((s = window.document.body) === null || s === void 0 || s.removeEventListener("click", i));
      }), window.document.body.addEventListener("click", i);
    }
    return t;
  }
}
function Td(n) {
  return n === "audioinput" ? T.Source.Microphone : n === "videoinput" ? T.Source.Camera : T.Source.Unknown;
}
function vn(n) {
  return n === T.Source.Microphone ? "audioinput" : n === T.Source.Camera ? "videoinput" : void 0;
}
function Sd(n) {
  var e, t;
  let i = (e = n.video) !== null && e !== void 0 ? e : true;
  return n.resolution && n.resolution.width > 0 && n.resolution.height > 0 && (i = typeof i == "boolean" ? {} : i, ot() ? i = Object.assign(Object.assign({}, i), { width: { max: n.resolution.width }, height: { max: n.resolution.height }, frameRate: n.resolution.frameRate }) : i = Object.assign(Object.assign({}, i), { width: { ideal: n.resolution.width }, height: { ideal: n.resolution.height }, frameRate: n.resolution.frameRate })), { audio: (t = n.audio) !== null && t !== void 0 ? t : false, video: i, controller: n.controller, selfBrowserSurface: n.selfBrowserSurface, surfaceSwitching: n.surfaceSwitching, systemAudio: n.systemAudio, preferCurrentTab: n.preferCurrentTab };
}
function Lt(n) {
  return n.split("/")[1].toLowerCase();
}
function Cd(n) {
  const e = [];
  return n.forEach((t) => {
    t.track !== void 0 && e.push(new Fn({ cid: t.track.mediaStreamID, track: t.trackInfo }));
  }), e;
}
function B(n) {
  return "mediaStreamTrack" in n ? { trackID: n.sid, source: n.source, muted: n.isMuted, enabled: n.mediaStreamTrack.enabled, kind: n.kind, streamID: n.mediaStreamID, streamTrackID: n.mediaStreamTrack.id } : { trackID: n.trackSid, enabled: n.isEnabled, muted: n.isMuted, trackInfo: Object.assign({ mimeType: n.mimeType, name: n.trackName, encrypted: n.isEncrypted, kind: n.kind, source: n.source }, n.track ? B(n.track) : {}) };
}
function Ed() {
  return typeof RTCRtpReceiver < "u" && "getSynchronizationSources" in RTCRtpReceiver;
}
function Pd(n, e) {
  var t;
  n === void 0 && (n = {}), e === void 0 && (e = {});
  const i = [...Object.keys(e), ...Object.keys(n)], s = {};
  for (const r of i) n[r] !== e[r] && (s[r] = (t = e[r]) !== null && t !== void 0 ? t : "");
  return s;
}
function Va(n) {
  const e = Object.assign({}, n);
  let t, i;
  return typeof e.audio == "object" && e.audio.processor && (t = e.audio.processor, e.audio = Object.assign(Object.assign({}, e.audio), { processor: void 0 })), typeof e.video == "object" && e.video.processor && (i = e.video.processor, e.video = Object.assign(Object.assign({}, e.video), { processor: void 0 })), { audioProcessor: t, videoProcessor: i, optionsWithoutProcessor: gd(e) };
}
function Rd(n) {
  switch (n) {
    case ee.CAMERA:
      return T.Source.Camera;
    case ee.MICROPHONE:
      return T.Source.Microphone;
    case ee.SCREEN_SHARE:
      return T.Source.ScreenShare;
    case ee.SCREEN_SHARE_AUDIO:
      return T.Source.ScreenShareAudio;
    default:
      return T.Source.Unknown;
  }
}
function Fs(n, e) {
  return n.width * n.height < e.width * e.height;
}
function _d(n, e) {
  var t;
  return (t = n.layers) === null || t === void 0 ? void 0 : t.find((i) => i.quality === e);
}
const wd = 5e3, wt = [];
var ve;
(function(n) {
  n[n.LOW = 0] = "LOW", n[n.MEDIUM = 1] = "MEDIUM", n[n.HIGH = 2] = "HIGH";
})(ve || (ve = {}));
class T extends Ae.EventEmitter {
  get streamState() {
    return this._streamState;
  }
  setStreamState(e) {
    this._streamState = e;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var s;
    super(), this.attachedElements = [], this.isMuted = false, this._streamState = T.StreamState.Active, this.isInBackground = false, this._currentBitrate = 0, this.log = U, this.appVisibilityChangedListener = () => {
      this.backgroundTimeout && clearTimeout(this.backgroundTimeout), document.visibilityState === "hidden" ? this.backgroundTimeout = setTimeout(() => this.handleAppVisibilityChanged(), wd) : this.handleAppVisibilityChanged();
    }, this.log = Ve((s = i.loggerName) !== null && s !== void 0 ? s : _e.Track), this.loggerContextCb = i.loggerContextCb, this.setMaxListeners(100), this.kind = t, this._mediaStreamTrack = e, this._mediaStreamID = e.id, this.source = T.Source.Unknown;
  }
  get logContext() {
    var e;
    return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), B(this));
  }
  get currentBitrate() {
    return this._currentBitrate;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  get mediaStreamID() {
    return this._mediaStreamID;
  }
  attach(e) {
    let t = "audio";
    this.kind === T.Kind.Video && (t = "video"), this.attachedElements.length === 0 && this.kind === T.Kind.Video && this.addAppVisibilityListener(), e || (t === "audio" && (wt.forEach((r) => {
      r.parentElement === null && !e && (e = r);
    }), e && wt.splice(wt.indexOf(e), 1)), e || (e = document.createElement(t))), this.attachedElements.includes(e) || this.attachedElements.push(e), ht(this.mediaStreamTrack, e);
    const i = e.srcObject.getTracks(), s = i.some((r) => r.kind === "audio");
    return e.play().then(() => {
      this.emit(s ? P.AudioPlaybackStarted : P.VideoPlaybackStarted);
    }).catch((r) => {
      r.name === "NotAllowedError" ? this.emit(s ? P.AudioPlaybackFailed : P.VideoPlaybackFailed, r) : r.name === "AbortError" ? U.debug("".concat(s ? "audio" : "video", " playback aborted, likely due to new play request")) : U.warn("could not playback ".concat(s ? "audio" : "video"), r), s && e && i.some((o) => o.kind === "video") && r.name === "NotAllowedError" && (e.muted = true, e.play().catch(() => {
      }));
    }), this.emit(P.ElementAttached, e), e;
  }
  detach(e) {
    try {
      if (e) {
        yt(this.mediaStreamTrack, e);
        const i = this.attachedElements.indexOf(e);
        return i >= 0 && (this.attachedElements.splice(i, 1), this.recycleElement(e), this.emit(P.ElementDetached, e)), e;
      }
      const t = [];
      return this.attachedElements.forEach((i) => {
        yt(this.mediaStreamTrack, i), t.push(i), this.recycleElement(i), this.emit(P.ElementDetached, i);
      }), this.attachedElements = [], t;
    } finally {
      this.attachedElements.length === 0 && this.removeAppVisibilityListener();
    }
  }
  stop() {
    this.stopMonitor(), this._mediaStreamTrack.stop();
  }
  enable() {
    this._mediaStreamTrack.enabled = true;
  }
  disable() {
    this._mediaStreamTrack.enabled = false;
  }
  stopMonitor() {
    this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle);
  }
  updateLoggerOptions(e) {
    e.loggerName && (this.log = Ve(e.loggerName)), e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb);
  }
  recycleElement(e) {
    if (e instanceof HTMLAudioElement) {
      let t = true;
      e.pause(), wt.forEach((i) => {
        i.parentElement || (t = false);
      }), t && wt.push(e);
    }
  }
  handleAppVisibilityChanged() {
    return m(this, void 0, void 0, function* () {
      this.isInBackground = document.visibilityState === "hidden", !this.isInBackground && this.kind === T.Kind.Video && setTimeout(() => this.attachedElements.forEach((e) => e.play().catch(() => {
      })), 0);
    });
  }
  addAppVisibilityListener() {
    pe() ? (this.isInBackground = document.visibilityState === "hidden", document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = false;
  }
  removeAppVisibilityListener() {
    pe() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener);
  }
}
function ht(n, e) {
  let t;
  e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream();
  let i;
  n.kind === "audio" ? i = t.getAudioTracks() : i = t.getVideoTracks(), i.includes(n) || (i.forEach((s) => {
    t.removeTrack(s);
  }), t.addTrack(n)), (!ot() || !(e instanceof HTMLVideoElement)) && (e.autoplay = true), e.muted = t.getAudioTracks().length === 0, e instanceof HTMLVideoElement && (e.playsInline = true), e.srcObject !== t && (e.srcObject = t, (ot() || at()) && e instanceof HTMLVideoElement && setTimeout(() => {
    e.srcObject = t, e.play().catch(() => {
    });
  }, 0));
}
function yt(n, e) {
  if (e.srcObject instanceof MediaStream) {
    const t = e.srcObject;
    t.removeTrack(n), t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null;
  }
}
(function(n) {
  let e;
  (function(d) {
    d.Audio = "audio", d.Video = "video", d.Unknown = "unknown";
  })(e = n.Kind || (n.Kind = {}));
  let t;
  (function(d) {
    d.Camera = "camera", d.Microphone = "microphone", d.ScreenShare = "screen_share", d.ScreenShareAudio = "screen_share_audio", d.Unknown = "unknown";
  })(t = n.Source || (n.Source = {}));
  let i;
  (function(d) {
    d.Active = "active", d.Paused = "paused", d.Unknown = "unknown";
  })(i = n.StreamState || (n.StreamState = {}));
  function s(d) {
    switch (d) {
      case e.Audio:
        return Ce.AUDIO;
      case e.Video:
        return Ce.VIDEO;
      default:
        return Ce.DATA;
    }
  }
  n.kindToProto = s;
  function r(d) {
    switch (d) {
      case Ce.AUDIO:
        return e.Audio;
      case Ce.VIDEO:
        return e.Video;
      default:
        return e.Unknown;
    }
  }
  n.kindFromProto = r;
  function o(d) {
    switch (d) {
      case t.Camera:
        return ee.CAMERA;
      case t.Microphone:
        return ee.MICROPHONE;
      case t.ScreenShare:
        return ee.SCREEN_SHARE;
      case t.ScreenShareAudio:
        return ee.SCREEN_SHARE_AUDIO;
      default:
        return ee.UNKNOWN;
    }
  }
  n.sourceToProto = o;
  function a(d) {
    switch (d) {
      case ee.CAMERA:
        return t.Camera;
      case ee.MICROPHONE:
        return t.Microphone;
      case ee.SCREEN_SHARE:
        return t.ScreenShare;
      case ee.SCREEN_SHARE_AUDIO:
        return t.ScreenShareAudio;
      default:
        return t.Unknown;
    }
  }
  n.sourceFromProto = a;
  function c(d) {
    switch (d) {
      case rn.ACTIVE:
        return i.Active;
      case rn.PAUSED:
        return i.Paused;
      default:
        return i.Unknown;
    }
  }
  n.streamStateFromProto = c;
})(T || (T = {}));
const Id = "|", js = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
function Od(n) {
  const e = n.split(Id);
  return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""];
}
function ae(n) {
  return new me((e) => re.setTimeout(e, n));
}
function bn() {
  return "addTransceiver" in RTCPeerConnection.prototype;
}
function yn() {
  return "addTrack" in RTCPeerConnection.prototype;
}
function Dd() {
  if (!("getCapabilities" in RTCRtpSender) || ot() || at()) return false;
  const n = RTCRtpSender.getCapabilities("video");
  let e = false;
  if (n) {
    for (const t of n.codecs) if (t.mimeType.toLowerCase() === "video/av1") {
      e = true;
      break;
    }
  }
  return e;
}
function Md() {
  if (!("getCapabilities" in RTCRtpSender) || at()) return false;
  if (ot()) {
    const t = fe();
    if ((t == null ? void 0 : t.version) && Me(t.version, "16") < 0 || (t == null ? void 0 : t.os) === "iOS" && (t == null ? void 0 : t.osVersion) && Me(t.osVersion, "16") < 0) return false;
  }
  const n = RTCRtpSender.getCapabilities("video");
  let e = false;
  if (n) {
    for (const t of n.codecs) if (t.mimeType.toLowerCase() === "video/vp9") {
      e = true;
      break;
    }
  }
  return e;
}
function Pe(n) {
  return n === "av1" || n === "vp9";
}
function kn(n) {
  return !document || qt() ? false : (n || (n = document.createElement("audio")), "setSinkId" in n);
}
function Ad() {
  return typeof RTCPeerConnection > "u" ? false : bn() || yn();
}
function at() {
  var n;
  return ((n = fe()) === null || n === void 0 ? void 0 : n.name) === "Firefox";
}
function Bs() {
  const n = fe();
  return !!n && n.name === "Chrome" && n.os !== "iOS";
}
function ot() {
  var n;
  return ((n = fe()) === null || n === void 0 ? void 0 : n.name) === "Safari";
}
function qt() {
  const n = fe();
  return (n == null ? void 0 : n.name) === "Safari" || (n == null ? void 0 : n.os) === "iOS";
}
function xd() {
  const n = fe();
  return (n == null ? void 0 : n.name) === "Safari" && n.version.startsWith("17.") || (n == null ? void 0 : n.os) === "iOS" && !!(n == null ? void 0 : n.osVersion) && Me(n.osVersion, "17") >= 0;
}
function Nd(n) {
  return n || (n = fe()), (n == null ? void 0 : n.name) === "Safari" && Me(n.version, "18.3") > 0 || (n == null ? void 0 : n.os) === "iOS" && !!(n == null ? void 0 : n.osVersion) && Me(n.osVersion, "18.3") > 0;
}
function qa() {
  var n, e;
  return pe() ? (e = (n = navigator.userAgentData) === null || n === void 0 ? void 0 : n.mobile) !== null && e !== void 0 ? e : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent) : false;
}
function Ld() {
  const n = fe(), e = "17.2";
  if (n) return n.name !== "Safari" && n.os !== "iOS" || n.os === "iOS" && n.osVersion && Me(n.osVersion, e) >= 0 ? true : n.name === "Safari" && Me(n.version, e) >= 0;
}
function pe() {
  return typeof document < "u";
}
function De() {
  return navigator.product == "ReactNative";
}
function Et(n) {
  return n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run");
}
function qi(n) {
  return Et(n) ? n.hostname.split(".")[0] : null;
}
function Wa() {
  if (global && global.LiveKitReactNativeGlobal) return global.LiveKitReactNativeGlobal;
}
function Ka() {
  if (!De()) return;
  let n = Wa();
  if (n) return n.platform;
}
function Vs() {
  if (pe()) return window.devicePixelRatio;
  if (De()) {
    let n = Wa();
    if (n) return n.devicePixelRatio;
  }
  return 1;
}
function Me(n, e) {
  const t = n.split("."), i = e.split("."), s = Math.min(t.length, i.length);
  for (let r = 0; r < s; ++r) {
    const o = parseInt(t[r], 10), a = parseInt(i[r], 10);
    if (o > a) return 1;
    if (o < a) return -1;
    if (r === s - 1 && o === a) return 0;
  }
  return n === "" && e !== "" ? -1 : e === "" ? 1 : t.length == i.length ? 0 : t.length < i.length ? -1 : 1;
}
function Ud(n) {
  for (const e of n) e.target.handleResize(e);
}
function Fd(n) {
  for (const e of n) e.target.handleVisibilityChanged(e);
}
let Wi = null;
const qs = () => (Wi || (Wi = new ResizeObserver(Ud)), Wi);
let Ki = null;
const Ws = () => (Ki || (Ki = new IntersectionObserver(Fd, { root: null, rootMargin: "0px" })), Ki);
function jd() {
  var n;
  const e = new Kr({ sdk: Gr.JS, protocol: pd, version: md });
  return De() && (e.os = (n = Ka()) !== null && n !== void 0 ? n : ""), e;
}
function Ks() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const s = document.createElement("canvas");
  s.width = n, s.height = e;
  const r = s.getContext("2d");
  r == null ? void 0 : r.fillRect(0, 0, s.width, s.height), i && r && (r.beginPath(), r.arc(n / 2, e / 2, 50, 0, Math.PI * 2, true), r.closePath(), r.fillStyle = "grey", r.fill());
  const o = s.captureStream(), [a] = o.getTracks();
  if (!a) throw Error("Could not get empty media stream video track");
  return a.enabled = t, a;
}
let It;
function Gi() {
  if (!It) {
    const n = new AudioContext(), e = n.createOscillator(), t = n.createGain();
    t.gain.setValueAtTime(0, 0);
    const i = n.createMediaStreamDestination();
    if (e.connect(t), t.connect(i), e.start(), [It] = i.stream.getAudioTracks(), !It) throw Error("Could not get empty media stream audio track");
    It.enabled = false;
  }
  return It.clone();
}
class ke {
  get isResolved() {
    return this._isResolved;
  }
  constructor(e, t) {
    this._isResolved = false, this.onFinally = t, this.promise = new Promise((i, s) => m(this, void 0, void 0, function* () {
      this.resolve = i, this.reject = s, e && (yield e(i, s));
    })).finally(() => {
      var i;
      this._isResolved = true, (i = this.onFinally) === null || i === void 0 || i.call(this);
    });
  }
}
function Bd(n) {
  return bd.includes(n);
}
function Qe(n) {
  if (typeof n == "string" || typeof n == "number") return n;
  if (Array.isArray(n)) return n[0];
  if (n.exact !== void 0) return Array.isArray(n.exact) ? n.exact[0] : n.exact;
  if (n.ideal !== void 0) return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
  throw Error("could not unwrap constraint");
}
function Vd(n) {
  return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n;
}
function Wt(n) {
  return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n;
}
function qd(n, e) {
  return n.segments.map((t) => {
    let { id: i, text: s, language: r, startTime: o, endTime: a, final: c } = t;
    var d;
    const l = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now(), u = Date.now();
    return c ? e.delete(i) : e.set(i, l), { id: i, text: s, startTime: Number.parseInt(o.toString()), endTime: Number.parseInt(a.toString()), final: c, language: r, firstReceivedTime: l, lastReceivedTime: u };
  });
}
function Wd(n) {
  const { id: e, timestamp: t, message: i, editTimestamp: s } = n;
  return { id: e, timestamp: Number.parseInt(t.toString()), editTimestamp: s ? Number.parseInt(s.toString()) : void 0, message: i };
}
function Gs(n) {
  switch (n.reason) {
    case H.LeaveRequest:
      return n.context;
    case H.Cancelled:
      return Re.CLIENT_INITIATED;
    case H.NotAllowed:
      return Re.USER_REJECTED;
    case H.ServerUnreachable:
      return Re.JOIN_FAILURE;
    default:
      return Re.UNKNOWN_REASON;
  }
}
function ri(n) {
  return n !== void 0 ? Number(n) : void 0;
}
function nt(n) {
  return n !== void 0 ? BigInt(n) : void 0;
}
function kt(n) {
  return !!n && !(n instanceof MediaStreamTrack) && n.isLocal;
}
function Oe(n) {
  return !!n && n.kind == T.Kind.Audio;
}
function Ze(n) {
  return !!n && n.kind == T.Kind.Video;
}
function Ke(n) {
  return kt(n) && Ze(n);
}
function Ne(n) {
  return kt(n) && Oe(n);
}
function Tn(n) {
  return !!n && !n.isLocal;
}
function Kd(n) {
  return !!n && !n.isLocal;
}
function Hi(n) {
  return Tn(n) && Ze(n);
}
function Gd(n) {
  return n.isLocal;
}
function Hd(n, e) {
  const t = [];
  let i = new TextEncoder().encode(n);
  for (; i.length > e; ) {
    let s = e;
    for (; s > 0; ) {
      const r = i[s];
      if (r !== void 0 && (r & 192) !== 128) break;
      s--;
    }
    t.push(i.slice(0, s)), i = i.slice(s);
  }
  return i.length > 0 && t.push(i), t;
}
function Jd(n) {
  var e;
  const t = n.get("Cache-Control");
  if (t) {
    const i = (e = t.match(/(?:^|[,\s])max-age=(\d+)/)) === null || e === void 0 ? void 0 : e[1];
    if (i) return parseInt(i, 10);
  }
}
function zd(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  const i = Qd(n, e);
  return t ? i : zn(i, "v1");
}
function Qd(n, e) {
  const t = new URL(Vd(n));
  return e.forEach((i, s) => {
    t.searchParams.set(s, i);
  }), zn(t, "rtc");
}
function Yd(n) {
  const e = new URL(Wt(n));
  return zn(e, "validate");
}
function Ga(n) {
  return n.endsWith("/") ? n : "".concat(n, "/");
}
function zn(n, e) {
  return n.pathname = "".concat(Ga(n.pathname)).concat(e), n;
}
function Hs(n) {
  if (typeof n == "string") return Es.fromJson(JSON.parse(n), { ignoreUnknownFields: true });
  if (n instanceof ArrayBuffer) return Es.fromBinary(new Uint8Array(n));
  throw new Error("could not decode websocket message: ".concat(typeof n));
}
function Xd(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Unknown reason";
  if (!(n instanceof AbortSignal)) return e;
  const t = n.reason;
  switch (typeof t) {
    case "string":
      return t;
    case "object":
      return t instanceof Error ? t.message : e;
    default:
      return "toString" in t ? t.toString() : e;
  }
}
const $d = 10, Ot = "lk_e2ee", Zd = "LKFrameEncryptionKey", el = { sharedKey: false, ratchetSalt: Zd, ratchetWindowSize: 8, failureTolerance: $d, keyringSize: 16 };
var Ye;
(function(n) {
  n.SetKey = "setKey", n.RatchetRequest = "ratchetRequest", n.KeyRatcheted = "keyRatcheted";
})(Ye || (Ye = {}));
var Js;
(function(n) {
  n.KeyRatcheted = "keyRatcheted";
})(Js || (Js = {}));
var Je;
(function(n) {
  n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError";
})(Je || (Je = {}));
var zs;
(function(n) {
  n.Error = "cryptorError";
})(zs || (zs = {}));
function tl() {
  return il() || Sn();
}
function Sn() {
  return typeof window.RTCRtpScriptTransform < "u";
}
function il() {
  return typeof window.RTCRtpSender < "u" && typeof window.RTCRtpSender.prototype.createEncodedStreams < "u";
}
function nl(n) {
  var e, t, i, s, r;
  if (((e = n.value) === null || e === void 0 ? void 0 : e.case) !== "sipDtmf" && ((t = n.value) === null || t === void 0 ? void 0 : t.case) !== "metrics" && ((i = n.value) === null || i === void 0 ? void 0 : i.case) !== "speaker" && ((s = n.value) === null || s === void 0 ? void 0 : s.case) !== "transcription" && ((r = n.value) === null || r === void 0 ? void 0 : r.case) !== "encryptedPacket") return new Ur({ value: n.value });
}
class ih extends Ae.EventEmitter {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(), this.onKeyRatcheted = (t, i, s) => {
      U.debug("key ratcheted event received", { ratchetResult: t, participantId: i, keyIndex: s });
    }, this.keyInfoMap = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, el), e), this.on(Ye.KeyRatcheted, this.onKeyRatcheted);
  }
  onSetEncryptionKey(e, t, i) {
    const s = { key: e, participantIdentity: t, keyIndex: i };
    if (!this.options.sharedKey && !t) throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
    this.keyInfoMap.set("".concat(t ?? "shared", "-").concat(i ?? 0), s), this.emit(Ye.SetKey, s);
  }
  getKeys() {
    return Array.from(this.keyInfoMap.values());
  }
  getOptions() {
    return this.options;
  }
  ratchetKey(e, t) {
    this.emit(Ye.RatchetRequest, e, t);
  }
}
var Qs;
(function(n) {
  n[n.InvalidKey = 0] = "InvalidKey", n[n.MissingKey = 1] = "MissingKey", n[n.InternalError = 2] = "InternalError";
})(Qs || (Qs = {}));
class sl extends Ae.EventEmitter {
  constructor(e, t) {
    super(), this.decryptDataRequests = /* @__PURE__ */ new Map(), this.encryptDataRequests = /* @__PURE__ */ new Map(), this.onWorkerMessage = (i) => {
      var s, r;
      const { kind: o, data: a } = i.data;
      switch (o) {
        case "error":
          if (U.error(a.error.message), a.uuid) {
            const l = this.decryptDataRequests.get(a.uuid);
            if (l == null ? void 0 : l.reject) {
              l.reject(a.error);
              break;
            }
            const u = this.encryptDataRequests.get(a.uuid);
            if (u == null ? void 0 : u.reject) {
              u.reject(a.error);
              break;
            }
          }
          this.emit(Je.EncryptionError, a.error, a.participantIdentity);
          break;
        case "initAck":
          a.enabled && this.keyProvider.getKeys().forEach((l) => {
            this.postKey(l);
          });
          break;
        case "enable":
          if (a.enabled && this.keyProvider.getKeys().forEach((l) => {
            this.postKey(l);
          }), this.encryptionEnabled !== a.enabled && a.participantIdentity === ((s = this.room) === null || s === void 0 ? void 0 : s.localParticipant.identity)) this.emit(Je.ParticipantEncryptionStatusChanged, a.enabled, this.room.localParticipant), this.encryptionEnabled = a.enabled;
          else if (a.participantIdentity) {
            const l = (r = this.room) === null || r === void 0 ? void 0 : r.getParticipantByIdentity(a.participantIdentity);
            if (!l) throw TypeError("couldn't set encryption status, participant not found".concat(a.participantIdentity));
            this.emit(Je.ParticipantEncryptionStatusChanged, a.enabled, l);
          }
          break;
        case "ratchetKey":
          this.keyProvider.emit(Ye.KeyRatcheted, a.ratchetResult, a.participantIdentity, a.keyIndex);
          break;
        case "decryptDataResponse":
          const c = this.decryptDataRequests.get(a.uuid);
          (c == null ? void 0 : c.resolve) && c.resolve(a);
          break;
        case "encryptDataResponse":
          const d = this.encryptDataRequests.get(a.uuid);
          (d == null ? void 0 : d.resolve) && d.resolve(a);
          break;
      }
    }, this.onWorkerError = (i) => {
      U.error("e2ee worker encountered an error:", { error: i.error }), this.emit(Je.EncryptionError, i.error, void 0);
    }, this.keyProvider = e.keyProvider, this.worker = e.worker, this.encryptionEnabled = false, this.dataChannelEncryptionEnabled = t;
  }
  get isEnabled() {
    return this.encryptionEnabled;
  }
  get isDataChannelEncryptionEnabled() {
    return this.isEnabled && this.dataChannelEncryptionEnabled;
  }
  setup(e) {
    if (!tl()) throw new Gn("tried to setup end-to-end encryption on an unsupported browser");
    if (U.info("setting up e2ee"), e !== this.room) {
      this.room = e, this.setupEventListeners(e, this.keyProvider);
      const t = { kind: "init", data: { keyProviderOptions: this.keyProvider.getOptions(), loglevel: Xc.getLevel() } };
      this.worker && (U.info("initializing worker", { worker: this.worker }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t));
    }
  }
  setParticipantCryptorEnabled(e, t) {
    U.debug("set e2ee to ".concat(e, " for participant ").concat(t)), this.postEnable(e, t);
  }
  setSifTrailer(e) {
    !e || e.length === 0 ? U.warn("ignoring server sent trailer as it's empty") : this.postSifTrailer(e);
  }
  setupEngine(e) {
    e.on(_.RTPVideoMapUpdate, (t) => {
      this.postRTPMap(t);
    });
  }
  setupEventListeners(e, t) {
    e.on(E.TrackPublished, (i, s) => this.setParticipantCryptorEnabled(i.trackInfo.encryption !== te.NONE, s.identity)), e.on(E.ConnectionStateChanged, (i) => {
      i === W.Connected && e.remoteParticipants.forEach((s) => {
        s.trackPublications.forEach((r) => {
          this.setParticipantCryptorEnabled(r.trackInfo.encryption !== te.NONE, s.identity);
        });
      });
    }).on(E.TrackUnsubscribed, (i, s, r) => {
      var o;
      const a = { kind: "removeTransform", data: { participantIdentity: r.identity, trackId: i.mediaStreamID } };
      (o = this.worker) === null || o === void 0 || o.postMessage(a);
    }).on(E.TrackSubscribed, (i, s, r) => {
      this.setupE2EEReceiver(i, r.identity, s.trackInfo);
    }).on(E.SignalConnected, () => {
      if (!this.room) throw new TypeError("expected room to be present on signal connect");
      t.getKeys().forEach((i) => {
        this.postKey(i);
      }), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity);
    }), e.localParticipant.on(w.LocalSenderCreated, (i, s) => m(this, void 0, void 0, function* () {
      this.setupE2EESender(s, i);
    })), e.localParticipant.on(w.LocalTrackPublished, (i) => {
      if (!Ze(i.track) || !qt()) return;
      const s = { kind: "updateCodec", data: { trackId: i.track.mediaStreamID, codec: Lt(i.trackInfo.codecs[0].mimeType), participantIdentity: this.room.localParticipant.identity } };
      this.worker.postMessage(s);
    }), t.on(Ye.SetKey, (i) => this.postKey(i)).on(Ye.RatchetRequest, (i, s) => this.postRatchetRequest(i, s));
  }
  encryptData(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.worker) throw Error("could not encrypt data, worker is missing");
      const t = crypto.randomUUID(), i = { kind: "encryptDataRequest", data: { uuid: t, payload: e, participantIdentity: this.room.localParticipant.identity } }, s = new ke();
      return s.onFinally = () => {
        this.encryptDataRequests.delete(t);
      }, this.encryptDataRequests.set(t, s), this.worker.postMessage(i), s.promise;
    });
  }
  handleEncryptedData(e, t, i, s) {
    if (!this.worker) throw Error("could not handle encrypted data, worker is missing");
    const r = crypto.randomUUID(), o = { kind: "decryptDataRequest", data: { uuid: r, payload: e, iv: t, participantIdentity: i, keyIndex: s } }, a = new ke();
    return a.onFinally = () => {
      this.decryptDataRequests.delete(r);
    }, this.decryptDataRequests.set(r, a), this.worker.postMessage(o), a.promise;
  }
  postRatchetRequest(e, t) {
    if (!this.worker) throw Error("could not ratchet key, worker is missing");
    const i = { kind: "ratchetRequest", data: { participantIdentity: e, keyIndex: t } };
    this.worker.postMessage(i);
  }
  postKey(e) {
    let { key: t, participantIdentity: i, keyIndex: s } = e;
    var r;
    if (!this.worker) throw Error("could not set key, worker is missing");
    const o = { kind: "setKey", data: { participantIdentity: i, isPublisher: i === ((r = this.room) === null || r === void 0 ? void 0 : r.localParticipant.identity), key: t, keyIndex: s } };
    this.worker.postMessage(o);
  }
  postEnable(e, t) {
    if (this.worker) {
      const i = { kind: "enable", data: { enabled: e, participantIdentity: t } };
      this.worker.postMessage(i);
    } else throw new ReferenceError("failed to enable e2ee, worker is not ready");
  }
  postRTPMap(e) {
    var t;
    if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
    if (!(!((t = this.room) === null || t === void 0) && t.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
    const i = { kind: "setRTPMap", data: { map: e, participantIdentity: this.room.localParticipant.identity } };
    this.worker.postMessage(i);
  }
  postSifTrailer(e) {
    if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
    const t = { kind: "setSifTrailer", data: { trailer: e } };
    this.worker.postMessage(t);
  }
  setupE2EEReceiver(e, t, i) {
    if (e.receiver) {
      if (!(i == null ? void 0 : i.mimeType) || i.mimeType === "") throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
      this.handleReceiver(e.receiver, e.mediaStreamID, t, e.kind === "video" ? Lt(i.mimeType) : void 0);
    }
  }
  setupE2EESender(e, t) {
    if (!kt(e) || !t) {
      t || U.warn("early return because sender is not ready");
      return;
    }
    this.handleSender(t, e.mediaStreamID, void 0);
  }
  handleReceiver(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      if (this.worker) {
        if (Sn() && !Bs()) {
          const r = { kind: "decode", participantIdentity: i, trackId: t, codec: s };
          e.transform = new RTCRtpScriptTransform(this.worker, r);
        } else {
          if (Ot in e && s) {
            const c = { kind: "updateCodec", data: { trackId: t, codec: s, participantIdentity: i } };
            this.worker.postMessage(c);
            return;
          }
          let r = e.writableStream, o = e.readableStream;
          if (!r || !o) {
            const c = e.createEncodedStreams();
            e.writableStream = c.writable, r = c.writable, e.readableStream = c.readable, o = c.readable;
          }
          const a = { kind: "decode", data: { readableStream: o, writableStream: r, trackId: t, codec: s, participantIdentity: i, isReuse: Ot in e } };
          this.worker.postMessage(a, [o, r]);
        }
        e[Ot] = true;
      }
    });
  }
  handleSender(e, t, i) {
    var s;
    if (!(Ot in e || !this.worker)) {
      if (!(!((s = this.room) === null || s === void 0) && s.localParticipant.identity) || this.room.localParticipant.identity === "") throw TypeError("local identity needs to be known in order to set up encrypted sender");
      if (Sn() && !Bs()) {
        U.info("initialize script transform");
        const r = { kind: "encode", participantIdentity: this.room.localParticipant.identity, trackId: t, codec: i };
        e.transform = new RTCRtpScriptTransform(this.worker, r);
      } else {
        U.info("initialize encoded streams");
        const r = e.createEncodedStreams(), o = { kind: "encode", data: { readableStream: r.readable, writableStream: r.writable, codec: i, trackId: t, participantIdentity: this.room.localParticipant.identity, isReuse: false } };
        this.worker.postMessage(o, [r.readable, r.writable]);
      }
      e[Ot] = true;
    }
  }
}
const rl = 500, al = 15e3;
class Tt {
  constructor() {
    this.failedConnectionAttempts = /* @__PURE__ */ new Map(), this.backOffPromises = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return this._instance || (this._instance = new Tt()), this._instance;
  }
  addFailedConnectionAttempt(e) {
    var t;
    const i = new URL(e), s = qi(i);
    if (!s) return;
    let r = (t = this.failedConnectionAttempts.get(s)) !== null && t !== void 0 ? t : 0;
    this.failedConnectionAttempts.set(s, r + 1), this.backOffPromises.set(s, ae(Math.min(rl * Math.pow(2, r), al)));
  }
  getBackOffPromise(e) {
    const t = new URL(e), i = t && qi(t);
    return i && this.backOffPromises.get(i) || Promise.resolve();
  }
  resetFailedConnectionAttempts(e) {
    const t = new URL(e), i = t && qi(t);
    i && (this.failedConnectionAttempts.set(i, 0), this.backOffPromises.set(i, Promise.resolve()));
  }
  resetAll() {
    this.backOffPromises.clear(), this.failedConnectionAttempts.clear();
  }
}
Tt._instance = null;
const Ji = "default";
class se {
  constructor() {
    this._previousDevices = [];
  }
  static getInstance() {
    return this.instance === void 0 && (this.instance = new se()), this.instance;
  }
  get previousDevices() {
    return this._previousDevices;
  }
  getDevices(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return (function* () {
        var r;
        if (((r = se.userMediaPromiseMap) === null || r === void 0 ? void 0 : r.size) > 0) {
          U.debug("awaiting getUserMedia promise");
          try {
            t ? yield se.userMediaPromiseMap.get(t) : yield Promise.all(se.userMediaPromiseMap.values());
          } catch {
            U.warn("error waiting for media permissons");
          }
        }
        let o = yield navigator.mediaDevices.enumerateDevices();
        if (s && !(ot() && i.hasDeviceInUse(t)) && (o.filter((c) => c.kind === t).length === 0 || o.some((c) => {
          const d = c.label === "", l = t ? c.kind === t : true;
          return d && l;
        }))) {
          const c = { video: t !== "audioinput" && t !== "audiooutput", audio: t !== "videoinput" && { deviceId: { ideal: "default" } } }, d = yield navigator.mediaDevices.getUserMedia(c);
          o = yield navigator.mediaDevices.enumerateDevices(), d.getTracks().forEach((l) => {
            l.stop();
          });
        }
        return i._previousDevices = o, t && (o = o.filter((a) => a.kind === t)), o;
      })();
    });
  }
  normalizeDeviceId(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t !== Ji) return t;
      const s = yield this.getDevices(e), r = s.find((a) => a.deviceId === Ji);
      if (!r) {
        U.warn("could not reliably determine default device");
        return;
      }
      const o = s.find((a) => a.deviceId !== Ji && a.groupId === (i ?? r.groupId));
      if (!o) {
        U.warn("could not reliably determine default device");
        return;
      }
      return o == null ? void 0 : o.deviceId;
    });
  }
  hasDeviceInUse(e) {
    return e ? se.userMediaPromiseMap.has(e) : se.userMediaPromiseMap.size > 0;
  }
}
se.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
se.userMediaPromiseMap = /* @__PURE__ */ new Map();
var Ut;
(function(n) {
  n[n.WAITING = 0] = "WAITING", n[n.RUNNING = 1] = "RUNNING", n[n.COMPLETED = 2] = "COMPLETED";
})(Ut || (Ut = {}));
class ol {
  constructor() {
    this.pendingTasks = /* @__PURE__ */ new Map(), this.taskMutex = new le(), this.nextTaskIndex = 0;
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      const t = { id: this.nextTaskIndex++, enqueuedAt: Date.now(), status: Ut.WAITING };
      this.pendingTasks.set(t.id, t);
      const i = yield this.taskMutex.lock();
      try {
        return t.executedAt = Date.now(), t.status = Ut.RUNNING, yield e();
      } finally {
        t.status = Ut.COMPLETED, this.pendingTasks.delete(t.id), i();
      }
    });
  }
  flush() {
    return m(this, void 0, void 0, function* () {
      return this.run(() => m(this, void 0, void 0, function* () {
      }));
    });
  }
  snapshot() {
    return Array.from(this.pendingTasks.values());
  }
}
class cl {
  get readyState() {
    return this.ws.readyState;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i, s;
    if (!((i = t.signal) === null || i === void 0) && i.aborted) throw new DOMException("This operation was aborted", "AbortError");
    this.url = e;
    const r = new WebSocket(e, (s = t.protocols) !== null && s !== void 0 ? s : []);
    r.binaryType = "arraybuffer", this.ws = r;
    const o = function() {
      let { closeCode: a, reason: c } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return r.close(a, c);
    };
    this.opened = new me((a, c) => {
      const d = () => {
        c(L.websocket("Encountered websocket error during connection establishment"));
      };
      r.onopen = () => {
        a({ readable: new ReadableStream({ start(l) {
          r.onmessage = (u) => {
            let { data: h } = u;
            return l.enqueue(h);
          }, r.onerror = (u) => l.error(u);
        }, cancel: o }), writable: new WritableStream({ write(l) {
          r.send(l);
        }, abort() {
          r.close();
        }, close: o }), protocol: r.protocol, extensions: r.extensions }), r.removeEventListener("error", d);
      }, r.addEventListener("error", d);
    }), this.closed = new me((a, c) => {
      const d = () => m(this, void 0, void 0, function* () {
        const l = new me((h) => {
          r.readyState !== WebSocket.CLOSED && r.addEventListener("close", (p) => {
            h(p);
          }, { once: true });
        }), u = yield me.race([ae(250), l]);
        u ? a(u) : c(L.websocket("Encountered unspecified websocket error without a timely close event"));
      });
      r.onclose = (l) => {
        let { code: u, reason: h } = l;
        a({ closeCode: u, reason: h }), r.removeEventListener("error", d);
      }, r.addEventListener("error", d);
    }), t.signal && (t.signal.onabort = () => r.close()), this.close = o;
  }
}
const dl = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
function ll(n) {
  const e = dl.indexOf(n.case) >= 0;
  return U.trace("request allowed to bypass queue:", { canPass: e, req: n }), e;
}
var G;
(function(n) {
  n[n.CONNECTING = 0] = "CONNECTING", n[n.CONNECTED = 1] = "CONNECTED", n[n.RECONNECTING = 2] = "RECONNECTING", n[n.DISCONNECTING = 3] = "DISCONNECTING", n[n.DISCONNECTED = 4] = "DISCONNECTED";
})(G || (G = {}));
const ul = 250;
class Qn {
  get currentState() {
    return this.state;
  }
  get isDisconnected() {
    return this.state === G.DISCONNECTING || this.state === G.DISCONNECTED;
  }
  get isEstablishingConnection() {
    return this.state === G.CONNECTING || this.state === G.RECONNECTING;
  }
  getNextRequestId() {
    return this._requestId += 1, this._requestId;
  }
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    this.rtt = 0, this.state = G.DISCONNECTED, this.log = U, this._requestId = 0, this.useV0SignalPath = false, this.resetCallbacks = () => {
      this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0, this.onMediaSectionsRequirement = void 0;
    }, this.log = Ve((i = t.loggerName) !== null && i !== void 0 ? i : _e.Signal), this.loggerContextCb = t.loggerContextCb, this.useJSON = e, this.requestQueue = new ol(), this.queuedRequests = [], this.closingLock = new le(), this.connectionLock = new le(), this.state = G.DISCONNECTED;
  }
  get logContext() {
    var e, t;
    return (t = (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)) !== null && t !== void 0 ? t : {};
  }
  join(e, t, i, s) {
    return m(this, arguments, void 0, function(r, o, a, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      return (function* () {
        return d.state = G.CONNECTING, d.options = a, yield d.connect(r, o, a, c, l);
      })();
    });
  }
  reconnect(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      if (!this.options) {
        this.log.warn("attempted to reconnect without signal options being set, ignoring", this.logContext);
        return;
      }
      return this.state = G.RECONNECTING, this.clearPingInterval(), yield this.connect(e, t, Object.assign(Object.assign({}, this.options), { reconnect: true, sid: i, reconnectReason: s }), void 0, this.useV0SignalPath);
    });
  }
  connect(e, t, i, s) {
    return m(this, arguments, void 0, function(r, o, a, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      return (function* () {
        const u = yield d.connectionLock.lock();
        d.connectOptions = a, d.useV0SignalPath = l;
        const h = jd(), p = l ? hl(o, h, a) : ml(o, h, a), b = zd(r, p, l).toString(), g = Yd(b).toString();
        return new Promise((R, k) => m(d, void 0, void 0, function* () {
          var I, M;
          try {
            let v = false;
            const y = (O) => m(this, void 0, void 0, function* () {
              if (v) return;
              v = true;
              const x = O instanceof Event ? O.currentTarget : O, F = Xd(x, "Abort handler called");
              this.streamWriter && !this.isDisconnected ? this.sendLeave().then(() => this.close(F)).catch((z) => {
                this.log.error(z), this.close();
              }) : this.close(), C(), k(L.cancelled(F));
            });
            c == null ? void 0 : c.addEventListener("abort", y);
            const C = () => {
              clearTimeout(D), c == null ? void 0 : c.removeEventListener("abort", y);
            }, D = setTimeout(() => {
              y(L.timeout("room connection has timed out (signal)"));
            }, a.websocketTimeout), N = (O, x) => {
              this.handleSignalConnected(O, D, x);
            }, A = new URL(b);
            A.searchParams.has("access_token") && A.searchParams.set("access_token", "<redacted>"), this.log.debug("connecting to ".concat(A), Object.assign({ reconnect: a.reconnect, reconnectReason: a.reconnectReason }, this.logContext)), this.ws && (yield this.close(false)), this.ws = new cl(b);
            try {
              this.ws.closed.then((oe) => {
                var qe;
                this.isEstablishingConnection && k(L.internal("Websocket got closed during a (re)connection attempt: ".concat(oe.reason))), oe.closeCode !== 1e3 && (this.log.warn("websocket closed", Object.assign(Object.assign({}, this.logContext), { reason: oe.reason, code: oe.closeCode, wasClean: oe.closeCode === 1e3, state: this.state })), this.state === G.CONNECTED && this.handleOnClose((qe = oe.reason) !== null && qe !== void 0 ? qe : "Unexpected WS error"));
              }).catch((oe) => {
                this.isEstablishingConnection && k(L.internal("Websocket error during a (re)connection attempt: ".concat(oe)));
              });
              const O = yield this.ws.opened.catch((oe) => m(this, void 0, void 0, function* () {
                if (this.state !== G.CONNECTED) {
                  this.state = G.DISCONNECTED, clearTimeout(D);
                  const qe = yield this.handleConnectionError(oe, g);
                  k(qe);
                  return;
                }
                this.handleWSError(oe), k(oe);
              }));
              if (clearTimeout(D), !O) return;
              const x = O.readable.getReader();
              this.streamWriter = O.writable.getWriter();
              const F = yield x.read();
              if (x.releaseLock(), !F.value) throw L.internal("no message received as first message");
              const z = Hs(F.value), ge = this.validateFirstMessage(z, (I = a.reconnect) !== null && I !== void 0 ? I : false);
              if (!ge.isValid) {
                k(ge.error);
                return;
              }
              ((M = z.message) === null || M === void 0 ? void 0 : M.case) === "join" && (this.pingTimeoutDuration = z.message.value.pingTimeout, this.pingIntervalDuration = z.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && this.log.debug("ping config", Object.assign(Object.assign({}, this.logContext), { timeout: this.pingTimeoutDuration, interval: this.pingIntervalDuration })));
              const tt = ge.shouldProcessFirstMessage ? z : void 0;
              N(O, tt), R(ge.response);
            } catch (O) {
              k(O);
            } finally {
              C();
            }
          } finally {
            u();
          }
        }));
      })();
    });
  }
  startReadingLoop(e, t) {
    return m(this, void 0, void 0, function* () {
      for (t && this.handleSignalResponse(t); ; ) {
        this.signalLatency && (yield ae(this.signalLatency));
        const { done: i, value: s } = yield e.read();
        if (i) break;
        const r = Hs(s);
        this.handleSignalResponse(r);
      }
    });
  }
  close() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Close method called on signal client";
      return (function* () {
        if ([G.DISCONNECTING || G.DISCONNECTED].includes(e.state)) {
          e.log.debug("ignoring signal close as it's already in disconnecting state");
          return;
        }
        const s = yield e.closingLock.lock();
        try {
          if (e.clearPingInterval(), t && (e.state = G.DISCONNECTING), e.ws) {
            e.ws.close({ closeCode: 1e3, reason: i });
            const r = e.ws.closed;
            e.ws = void 0, e.streamWriter = void 0, yield Promise.race([r, ae(ul)]);
          }
        } catch (r) {
          e.log.debug("websocket error while closing", Object.assign(Object.assign({}, e.logContext), { error: r }));
        } finally {
          t && (e.state = G.DISCONNECTED), s();
        }
      })();
    });
  }
  sendOffer(e, t) {
    this.log.debug("sending offer", Object.assign(Object.assign({}, this.logContext), { offerSdp: e.sdp })), this.sendRequest({ case: "offer", value: mt(e, t) });
  }
  sendAnswer(e, t) {
    return this.log.debug("sending answer", Object.assign(Object.assign({}, this.logContext), { answerSdp: e.sdp })), this.sendRequest({ case: "answer", value: mt(e, t) });
  }
  sendIceCandidate(e, t) {
    return this.log.debug("sending ice candidate", Object.assign(Object.assign({}, this.logContext), { candidate: e })), this.sendRequest({ case: "trickle", value: new Si({ candidateInit: JSON.stringify(e), target: t }) });
  }
  sendMuteTrack(e, t) {
    return this.sendRequest({ case: "mute", value: new Ci({ sid: e, muted: t }) });
  }
  sendAddTrack(e) {
    return this.sendRequest({ case: "addTrack", value: e });
  }
  sendUpdateLocalMetadata(e, t) {
    return m(this, arguments, void 0, function(i, s) {
      var r = this;
      let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return (function* () {
        const a = r.getNextRequestId();
        return yield r.sendRequest({ case: "updateMetadata", value: new Bn({ requestId: a, metadata: i, name: s, attributes: o }) }), a;
      })();
    });
  }
  sendUpdateTrackSettings(e) {
    this.sendRequest({ case: "trackSetting", value: e });
  }
  sendUpdateSubscription(e) {
    return this.sendRequest({ case: "subscription", value: e });
  }
  sendSyncState(e) {
    return this.sendRequest({ case: "syncState", value: e });
  }
  sendUpdateVideoLayers(e, t) {
    return this.sendRequest({ case: "updateLayers", value: new $r({ trackSid: e, layers: t }) });
  }
  sendUpdateSubscriptionPermissions(e, t) {
    return this.sendRequest({ case: "subscriptionPermission", value: new ta({ allParticipants: e, trackPermissions: t }) });
  }
  sendSimulateScenario(e) {
    return this.sendRequest({ case: "simulate", value: e });
  }
  sendPing() {
    return Promise.all([this.sendRequest({ case: "ping", value: J.parse(Date.now()) }), this.sendRequest({ case: "pingReq", value: new sa({ timestamp: J.parse(Date.now()), rtt: J.parse(this.rtt) }) })]);
  }
  sendUpdateLocalAudioTrack(e, t) {
    return this.sendRequest({ case: "updateAudioTrack", value: new jn({ trackSid: e, features: t }) });
  }
  sendLeave() {
    return this.sendRequest({ case: "leave", value: new Pi({ reason: Re.CLIENT_INITIATED, action: gt.DISCONNECT }) });
  }
  sendRequest(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return (function* () {
        if (!s && !ll(t) && i.state === G.RECONNECTING) {
          i.queuedRequests.push(() => m(i, void 0, void 0, function* () {
            yield this.sendRequest(t, true);
          }));
          return;
        }
        if (s || (yield i.requestQueue.flush()), i.signalLatency && (yield ae(i.signalLatency)), i.isDisconnected) {
          i.log.debug("skipping signal request (type: ".concat(t.case, ") - SignalClient disconnected"));
          return;
        }
        if (!i.streamWriter) {
          i.log.error("cannot send signal request before connected, type: ".concat(t == null ? void 0 : t.case), i.logContext);
          return;
        }
        const o = new Sc({ message: t });
        try {
          i.useJSON ? yield i.streamWriter.write(o.toJsonString()) : yield i.streamWriter.write(o.toBinary());
        } catch (a) {
          i.log.error("error sending signal message", Object.assign(Object.assign({}, i.logContext), { error: a }));
        }
      })();
    });
  }
  handleSignalResponse(e) {
    var t, i;
    const s = e.message;
    if (s == null) {
      this.log.debug("received unsupported message", this.logContext);
      return;
    }
    let r = false;
    if (s.case === "answer") {
      const o = Ys(s.value);
      this.onAnswer && this.onAnswer(o, s.value.id, s.value.midToTrackId);
    } else if (s.case === "offer") {
      const o = Ys(s.value);
      this.onOffer && this.onOffer(o, s.value.id, s.value.midToTrackId);
    } else if (s.case === "trickle") {
      const o = JSON.parse(s.value.candidateInit);
      this.onTrickle && this.onTrickle(o, s.value.target);
    } else s.case === "update" ? this.onParticipantUpdate && this.onParticipantUpdate((t = s.value.participants) !== null && t !== void 0 ? t : []) : s.case === "trackPublished" ? this.onLocalTrackPublished && this.onLocalTrackPublished(s.value) : s.case === "speakersChanged" ? this.onSpeakersChanged && this.onSpeakersChanged((i = s.value.speakers) !== null && i !== void 0 ? i : []) : s.case === "leave" ? this.onLeave && this.onLeave(s.value) : s.case === "mute" ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(s.value.sid, s.value.muted) : s.case === "roomUpdate" ? this.onRoomUpdate && s.value.room && this.onRoomUpdate(s.value.room) : s.case === "connectionQuality" ? this.onConnectionQuality && this.onConnectionQuality(s.value) : s.case === "streamStateUpdate" ? this.onStreamStateUpdate && this.onStreamStateUpdate(s.value) : s.case === "subscribedQualityUpdate" ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(s.value) : s.case === "subscriptionPermissionUpdate" ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(s.value) : s.case === "refreshToken" ? this.onTokenRefresh && this.onTokenRefresh(s.value) : s.case === "trackUnpublished" ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(s.value) : s.case === "subscriptionResponse" ? this.onSubscriptionError && this.onSubscriptionError(s.value) : s.case === "pong" || (s.case === "pongResp" ? (this.rtt = Date.now() - Number.parseInt(s.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r = true) : s.case === "requestResponse" ? this.onRequestResponse && this.onRequestResponse(s.value) : s.case === "trackSubscribed" ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(s.value.trackSid) : s.case === "roomMoved" ? (this.onTokenRefresh && this.onTokenRefresh(s.value.token), this.onRoomMoved && this.onRoomMoved(s.value)) : s.case === "mediaSectionsRequirement" ? this.onMediaSectionsRequirement && this.onMediaSectionsRequirement(s.value) : this.log.debug("unsupported message", Object.assign(Object.assign({}, this.logContext), { msgCase: s.case })));
    r || this.resetPingTimeout();
  }
  setReconnected() {
    for (; this.queuedRequests.length > 0; ) {
      const e = this.queuedRequests.shift();
      e && this.requestQueue.run(e);
    }
  }
  handleOnClose(e) {
    return m(this, void 0, void 0, function* () {
      if (this.state === G.DISCONNECTED) return;
      const t = this.onClose;
      yield this.close(void 0, e), this.log.debug("websocket connection closed: ".concat(e), Object.assign(Object.assign({}, this.logContext), { reason: e })), t && t(e);
    });
  }
  handleWSError(e) {
    this.log.error("websocket error", Object.assign(Object.assign({}, this.logContext), { error: e }));
  }
  resetPingTimeout() {
    if (this.clearPingTimeout(), !this.pingTimeoutDuration) {
      this.log.warn("ping timeout duration not set", this.logContext);
      return;
    }
    this.pingTimeout = re.setTimeout(() => {
      this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString()), this.logContext), this.handleOnClose("ping timeout");
    }, this.pingTimeoutDuration * 1e3);
  }
  clearPingTimeout() {
    this.pingTimeout && re.clearTimeout(this.pingTimeout);
  }
  startPingInterval() {
    if (this.clearPingInterval(), this.resetPingTimeout(), !this.pingIntervalDuration) {
      this.log.warn("ping interval duration not set", this.logContext);
      return;
    }
    this.log.debug("start ping interval", this.logContext), this.pingInterval = re.setInterval(() => {
      this.sendPing();
    }, this.pingIntervalDuration * 1e3);
  }
  clearPingInterval() {
    this.log.debug("clearing ping interval", this.logContext), this.clearPingTimeout(), this.pingInterval && re.clearInterval(this.pingInterval);
  }
  handleSignalConnected(e, t, i) {
    this.state = G.CONNECTED, clearTimeout(t), this.startPingInterval(), this.startReadingLoop(e.readable.getReader(), i);
  }
  validateFirstMessage(e, t) {
    var i, s, r, o, a;
    return ((i = e.message) === null || i === void 0 ? void 0 : i.case) === "join" ? { isValid: true, response: e.message.value } : this.state === G.RECONNECTING && ((s = e.message) === null || s === void 0 ? void 0 : s.case) !== "leave" ? ((r = e.message) === null || r === void 0 ? void 0 : r.case) === "reconnect" ? { isValid: true, response: e.message.value } : (this.log.debug("declaring signal reconnected without reconnect response received", this.logContext), { isValid: true, response: void 0, shouldProcessFirstMessage: true }) : this.isEstablishingConnection && ((o = e.message) === null || o === void 0 ? void 0 : o.case) === "leave" ? { isValid: false, error: L.leaveRequest("Received leave request while trying to (re)connect", e.message.value.reason) } : t ? { isValid: false, error: L.internal("Unexpected first message") } : { isValid: false, error: L.internal("did not receive join response, got ".concat((a = e.message) === null || a === void 0 ? void 0 : a.case, " instead")) };
  }
  handleConnectionError(e, t) {
    return m(this, void 0, void 0, function* () {
      try {
        const i = yield fetch(t);
        switch (i.status) {
          case 404:
            return L.serviceNotFound("v1 RTC path not found. Consider upgrading your LiveKit server version", "v0-rtc");
          case 401:
          case 403:
            const s = yield i.text();
            return L.notAllowed(s, i.status);
          default:
            break;
        }
        return e instanceof L ? e : L.internal("Encountered unknown websocket error during connection: ".concat(e), { status: i.status, statusText: i.statusText });
      } catch (i) {
        return i instanceof L ? i : L.serverUnreachable(i instanceof Error ? i.message : "server was not reachable");
      }
    });
  }
}
function Ys(n) {
  const e = { type: "offer", sdp: n.sdp };
  switch (n.type) {
    case "answer":
    case "offer":
    case "pranswer":
    case "rollback":
      e.type = n.type;
      break;
  }
  return e;
}
function mt(n, e) {
  return new $e({ sdp: n.sdp, type: n.type, id: e });
}
function hl(n, e, t) {
  var i;
  const s = new URLSearchParams();
  return s.set("access_token", n), t.reconnect && (s.set("reconnect", "1"), t.sid && s.set("sid", t.sid)), s.set("auto_subscribe", t.autoSubscribe ? "1" : "0"), s.set("sdk", De() ? "reactnative" : "js"), s.set("version", e.version), s.set("protocol", e.protocol.toString()), e.deviceModel && s.set("device_model", e.deviceModel), e.os && s.set("os", e.os), e.osVersion && s.set("os_version", e.osVersion), e.browser && s.set("browser", e.browser), e.browserVersion && s.set("browser_version", e.browserVersion), t.adaptiveStream && s.set("adaptive_stream", "1"), t.reconnectReason && s.set("reconnect_reason", t.reconnectReason.toString()), !((i = navigator.connection) === null || i === void 0) && i.type && s.set("network", navigator.connection.type), s;
}
function ml(n, e, t) {
  const i = new URLSearchParams();
  i.set("access_token", n);
  const s = new Kc({ clientInfo: e, connectionSettings: new ra({ autoSubscribe: !!t.autoSubscribe, adaptiveStream: !!t.adaptiveStream }), reconnect: !!t.reconnect, participantSid: t.sid ? t.sid : void 0 });
  t.reconnectReason && (s.reconnectReason = t.reconnectReason);
  const r = new Gc({ joinRequest: s.toBinary() });
  return i.set("join_request", btoa(new TextDecoder("utf-8").decode(r.toBinary()))), i;
}
class Xs {
  constructor() {
    this.buffer = [], this._totalSize = 0;
  }
  push(e) {
    this.buffer.push(e), this._totalSize += e.data.byteLength;
  }
  pop() {
    const e = this.buffer.shift();
    return e && (this._totalSize -= e.data.byteLength), e;
  }
  getAll() {
    return this.buffer.slice();
  }
  popToSequence(e) {
    for (; this.buffer.length > 0 && this.buffer[0].sequence <= e; ) this.pop();
  }
  alignBufferedAmount(e) {
    for (; this.buffer.length > 0; ) {
      const t = this.buffer[0];
      if (this._totalSize - t.data.byteLength <= e) break;
      this.pop();
    }
  }
  get length() {
    return this.buffer.length;
  }
}
class pl {
  constructor(e) {
    this._map = /* @__PURE__ */ new Map(), this._lastCleanup = 0, this.ttl = e;
  }
  set(e, t) {
    const i = Date.now();
    i - this._lastCleanup > this.ttl / 2 && this.cleanup();
    const s = i + this.ttl;
    return this._map.set(e, { value: t, expiresAt: s }), this;
  }
  get(e) {
    const t = this._map.get(e);
    if (t) {
      if (t.expiresAt < Date.now()) {
        this._map.delete(e);
        return;
      }
      return t.value;
    }
  }
  has(e) {
    const t = this._map.get(e);
    return t ? t.expiresAt < Date.now() ? (this._map.delete(e), false) : true : false;
  }
  delete(e) {
    return this._map.delete(e);
  }
  clear() {
    this._map.clear();
  }
  cleanup() {
    const e = Date.now();
    for (const [t, i] of this._map.entries()) i.expiresAt < e && this._map.delete(t);
    this._lastCleanup = e;
  }
  get size() {
    return this.cleanup(), this._map.size;
  }
  forEach(e) {
    this.cleanup();
    for (const [t, i] of this._map.entries()) i.expiresAt >= Date.now() && e(i.value, t, this.asValueMap());
  }
  map(e) {
    this.cleanup();
    const t = [], i = this.asValueMap();
    for (const [s, r] of i.entries()) t.push(e(r, s, i));
    return t;
  }
  asValueMap() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, i] of this._map.entries()) i.expiresAt >= Date.now() && e.set(t, i.value);
    return e;
  }
}
var Te = {}, zi = {}, Qi = { exports: {} }, $s;
function Yn() {
  if ($s) return Qi.exports;
  $s = 1;
  var n = Qi.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format: function(e) {
    return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
  } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format: function(e) {
    return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
  } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format: function(e) {
    return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
  } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/, names: ["value", "direction", "encrypt-uri", "uri", "config"], format: function(e) {
    return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "");
  } }, { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format: function(e) {
    return e.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
  } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" }, { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format: function(e) {
    var t = "candidate:%s %d %s %d %s %d typ %s";
    return t += e.raddr != null ? " raddr %s rport %d" : "%v%v", t += e.tcptype != null ? " tcptype %s" : "%v", e.generation != null && (t += " generation %d"), t += e["network-id"] != null ? " network-id %d" : "%v", t += e["network-cost"] != null ? " network-cost %d" : "%v", t;
  } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format: function(e) {
    var t = "ssrc:%d";
    return e.attribute != null && (t += " %s", e.value != null && (t += ":%s")), t;
  } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format: function(e) {
    return e.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
  } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format: function(e) {
    return e.params ? "rid:%s %s %s" : "rid:%s %s";
  } }, { push: "imageattrs", reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format: function(e) {
    return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
  } }, { name: "simulcast", reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format: function(e) {
    return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
  } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { name: "bundleOnly", reg: /^(bundle-only)/ }, { name: "label", reg: /^label:(.+)/, format: "label:%s" }, { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" }, { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" }, { push: "tsRefClocks", reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/, names: ["clksrc", "clksrcExt"], format: function(e) {
    return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "");
  } }, { name: "mediaClk", reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/, names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"], format: function(e) {
    var t = "mediaclk:";
    return t += e.id != null ? "id=%s %s" : "%v%s", t += e.mediaClockValue != null ? "=%s" : "", t += e.rateNumerator != null ? " rate=%s" : "", t += e.rateDenominator != null ? "/%s" : "", t;
  } }, { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" }, { name: "content", reg: /^content:(.+)/, format: "content:%s" }, { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" }, { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" }, { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" }, { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" }, { push: "invalid", names: ["value"] }] };
  return Object.keys(n).forEach(function(e) {
    var t = n[e];
    t.forEach(function(i) {
      i.reg || (i.reg = /(.*)/), i.format || (i.format = "%s");
    });
  }), Qi.exports;
}
var Zs;
function fl() {
  return Zs || (Zs = 1, (function(n) {
    var e = function(a) {
      return String(Number(a)) === a ? Number(a) : a;
    }, t = function(a, c, d, l) {
      if (l && !d) c[l] = e(a[1]);
      else for (var u = 0; u < d.length; u += 1) a[u + 1] != null && (c[d[u]] = e(a[u + 1]));
    }, i = function(a, c, d) {
      var l = a.name && a.names;
      a.push && !c[a.push] ? c[a.push] = [] : l && !c[a.name] && (c[a.name] = {});
      var u = a.push ? {} : l ? c[a.name] : c;
      t(d.match(a.reg), u, a.names, a.name), a.push && c[a.push].push(u);
    }, s = Yn(), r = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
    n.parse = function(a) {
      var c = {}, d = [], l = c;
      return a.split(/(\r\n|\r|\n)/).filter(r).forEach(function(u) {
        var h = u[0], p = u.slice(2);
        h === "m" && (d.push({ rtp: [], fmtp: [] }), l = d[d.length - 1]);
        for (var b = 0; b < (s[h] || []).length; b += 1) {
          var g = s[h][b];
          if (g.reg.test(p)) return i(g, l, p);
        }
      }), c.media = d, c;
    };
    var o = function(a, c) {
      var d = c.split(/=(.+)/, 2);
      return d.length === 2 ? a[d[0]] = e(d[1]) : d.length === 1 && c.length > 1 && (a[d[0]] = void 0), a;
    };
    n.parseParams = function(a) {
      return a.split(/;\s?/).reduce(o, {});
    }, n.parseFmtpConfig = n.parseParams, n.parsePayloads = function(a) {
      return a.toString().split(" ").map(Number);
    }, n.parseRemoteCandidates = function(a) {
      for (var c = [], d = a.split(" ").map(e), l = 0; l < d.length; l += 3) c.push({ component: d[l], ip: d[l + 1], port: d[l + 2] });
      return c;
    }, n.parseImageAttributes = function(a) {
      return a.split(" ").map(function(c) {
        return c.substring(1, c.length - 1).split(",").reduce(o, {});
      });
    }, n.parseSimulcastStreamList = function(a) {
      return a.split(";").map(function(c) {
        return c.split(",").map(function(d) {
          var l, u = false;
          return d[0] !== "~" ? l = e(d) : (l = e(d.substring(1, d.length)), u = true), { scid: l, paused: u };
        });
      });
    };
  })(zi)), zi;
}
var Yi, er;
function gl() {
  if (er) return Yi;
  er = 1;
  var n = Yn(), e = /%[sdv%]/g, t = function(o) {
    var a = 1, c = arguments, d = c.length;
    return o.replace(e, function(l) {
      if (a >= d) return l;
      var u = c[a];
      switch (a += 1, l) {
        case "%%":
          return "%";
        case "%s":
          return String(u);
        case "%d":
          return Number(u);
        case "%v":
          return "";
      }
    });
  }, i = function(o, a, c) {
    var d = a.format instanceof Function ? a.format(a.push ? c : c[a.name]) : a.format, l = [o + "=" + d];
    if (a.names) for (var u = 0; u < a.names.length; u += 1) {
      var h = a.names[u];
      a.name ? l.push(c[a.name][h]) : l.push(c[a.names[u]]);
    }
    else l.push(c[a.name]);
    return t.apply(null, l);
  }, s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"], r = ["i", "c", "b", "a"];
  return Yi = function(o, a) {
    a = a || {}, o.version == null && (o.version = 0), o.name == null && (o.name = " "), o.media.forEach(function(u) {
      u.payloads == null && (u.payloads = "");
    });
    var c = a.outerOrder || s, d = a.innerOrder || r, l = [];
    return c.forEach(function(u) {
      n[u].forEach(function(h) {
        h.name in o && o[h.name] != null ? l.push(i(u, h, o)) : h.push in o && o[h.push] != null && o[h.push].forEach(function(p) {
          l.push(i(u, h, p));
        });
      });
    }), o.media.forEach(function(u) {
      l.push(i("m", n.m[0], u)), d.forEach(function(h) {
        n[h].forEach(function(p) {
          p.name in u && u[p.name] != null ? l.push(i(h, p, u)) : p.push in u && u[p.push] != null && u[p.push].forEach(function(b) {
            l.push(i(h, p, b));
          });
        });
      });
    }), l.join(`\r
`) + `\r
`;
  }, Yi;
}
var tr;
function vl() {
  if (tr) return Te;
  tr = 1;
  var n = fl(), e = gl(), t = Yn();
  return Te.grammar = t, Te.write = e, Te.parse = n.parse, Te.parseParams = n.parseParams, Te.parseFmtpConfig = n.parseFmtpConfig, Te.parsePayloads = n.parsePayloads, Te.parseRemoteCandidates = n.parseRemoteCandidates, Te.parseImageAttributes = n.parseImageAttributes, Te.parseSimulcastStreamList = n.parseSimulcastStreamList, Te;
}
var Ge = vl();
function Xn(n, e, t) {
  var i, s, r;
  e === void 0 && (e = 50), t === void 0 && (t = {});
  var o = (i = t.isImmediate) != null && i, a = (s = t.callback) != null && s, c = t.maxWait, d = Date.now(), l = [];
  function u() {
    if (c !== void 0) {
      var p = Date.now() - d;
      if (p + e >= c) return c - p;
    }
    return e;
  }
  var h = function() {
    var p = [].slice.call(arguments), b = this;
    return new Promise(function(g, R) {
      var k = o && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, d = Date.now(), !o) {
          var M = n.apply(b, p);
          a && a(M), l.forEach(function(v) {
            return (0, v.resolve)(M);
          }), l = [];
        }
      }, u()), k) {
        var I = n.apply(b, p);
        return a && a(I), g(I);
      }
      l.push({ resolve: g, reject: R });
    });
  };
  return h.cancel = function(p) {
    r !== void 0 && clearTimeout(r), l.forEach(function(b) {
      return (0, b.reject)(p);
    }), l = [];
  }, h;
}
const bl = 0.7, yl = 20, St = { NegotiationStarted: "negotiationStarted", NegotiationComplete: "negotiationComplete", RTPVideoPayloadTypes: "rtpVideoPayloadTypes" };
class ir extends Ae.EventEmitter {
  get pc() {
    return this._pc || (this._pc = this.createPC()), this._pc;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    super(), this.log = U, this.ddExtID = 0, this.latestOfferId = 0, this.pendingCandidates = [], this.restartingIce = false, this.renegotiate = false, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = Xn((s) => m(this, void 0, void 0, function* () {
      this.emit(St.NegotiationStarted);
      try {
        yield this.createAndSendOffer();
      } catch (r) {
        if (s) s(r);
        else throw r;
      }
    }), yl), this.close = () => {
      this._pc && (this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null);
    }, this.log = Ve((i = t.loggerName) !== null && i !== void 0 ? i : _e.PCTransport), this.loggerOptions = t, this.config = e, this._pc = this.createPC(), this.offerLock = new le();
  }
  createPC() {
    const e = new RTCPeerConnection(this.config);
    return e.onicecandidate = (t) => {
      var i;
      t.candidate && ((i = this.onIceCandidate) === null || i === void 0 || i.call(this, t.candidate));
    }, e.onicecandidateerror = (t) => {
      var i;
      (i = this.onIceCandidateError) === null || i === void 0 || i.call(this, t);
    }, e.oniceconnectionstatechange = () => {
      var t;
      (t = this.onIceConnectionStateChange) === null || t === void 0 || t.call(this, e.iceConnectionState);
    }, e.onsignalingstatechange = () => {
      var t;
      (t = this.onSignalingStatechange) === null || t === void 0 || t.call(this, e.signalingState);
    }, e.onconnectionstatechange = () => {
      var t;
      (t = this.onConnectionStateChange) === null || t === void 0 || t.call(this, e.connectionState);
    }, e.ondatachannel = (t) => {
      var i;
      (i = this.onDataChannel) === null || i === void 0 || i.call(this, t);
    }, e.ontrack = (t) => {
      var i;
      (i = this.onTrack) === null || i === void 0 || i.call(this, t);
    }, e;
  }
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  get isICEConnected() {
    return this._pc !== null && (this.pc.iceConnectionState === "connected" || this.pc.iceConnectionState === "completed");
  }
  addIceCandidate(e) {
    return m(this, void 0, void 0, function* () {
      if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e);
      this.pendingCandidates.push(e);
    });
  }
  setRemoteDescription(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      if (e.type === "answer" && this.latestOfferId > 0 && t > 0 && t !== this.latestOfferId) return this.log.warn("ignoring answer for old offer", Object.assign(Object.assign({}, this.logContext), { offerId: t, latestOfferId: this.latestOfferId })), false;
      let s;
      if (e.type === "offer") {
        let { stereoMids: r, nackMids: o } = kl(e);
        this.remoteStereoMids = r, this.remoteNackMids = o;
      } else if (e.type === "answer") {
        const r = Ge.parse((i = e.sdp) !== null && i !== void 0 ? i : "");
        r.media.forEach((o) => {
          const a = $n(o.mid);
          o.type === "audio" && this.trackBitrates.some((c) => {
            if (!c.transceiver || a != c.transceiver.mid) return false;
            let d = 0;
            if (o.rtp.some((u) => u.codec.toUpperCase() === c.codec.toUpperCase() ? (d = u.payload, true) : false), d === 0) return true;
            let l = false;
            for (const u of o.fmtp) if (u.payload === d) {
              u.config = u.config.split(";").filter((h) => !h.includes("maxaveragebitrate")).join(";"), c.maxbr > 0 && (u.config += ";maxaveragebitrate=".concat(c.maxbr * 1e3)), l = true;
              break;
            }
            return l || c.maxbr > 0 && o.fmtp.push({ payload: d, config: "maxaveragebitrate=".concat(c.maxbr * 1e3) }), true;
          });
        }), s = Ge.write(r);
      }
      return yield this.setMungedSDP(e, s, true), this.pendingCandidates.forEach((r) => {
        this.pc.addIceCandidate(r);
      }), this.pendingCandidates = [], this.restartingIce = false, this.renegotiate ? (this.renegotiate = false, yield this.createAndSendOffer()) : e.type === "answer" && (this.emit(St.NegotiationComplete), e.sdp && Ge.parse(e.sdp).media.forEach((o) => {
        o.type === "video" && this.emit(St.RTPVideoPayloadTypes, o.rtp);
      })), true;
    });
  }
  createAndSendOffer(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      const i = yield this.offerLock.lock();
      try {
        if (this.onOffer === void 0) return;
        if ((e == null ? void 0 : e.iceRestart) && (this.log.debug("restarting ICE", this.logContext), this.restartingIce = true), this._pc && this._pc.signalingState === "have-local-offer") {
          const a = this._pc.remoteDescription;
          if ((e == null ? void 0 : e.iceRestart) && a) yield this._pc.setRemoteDescription(a);
          else {
            this.renegotiate = true;
            return;
          }
        } else if (!this._pc || this._pc.signalingState === "closed") {
          this.log.warn("could not createOffer with closed peer connection", this.logContext);
          return;
        }
        this.log.debug("starting to negotiate", this.logContext);
        const s = this.latestOfferId + 1;
        this.latestOfferId = s;
        const r = yield this.pc.createOffer(e);
        this.log.debug("original offer", Object.assign({ sdp: r.sdp }, this.logContext));
        const o = Ge.parse((t = r.sdp) !== null && t !== void 0 ? t : "");
        if (o.media.forEach((a) => {
          sr(a), a.type === "audio" ? nr(a, ["all"], []) : a.type === "video" && this.trackBitrates.some((c) => {
            if (!a.msid || !c.cid || !a.msid.includes(c.cid)) return false;
            let d = 0;
            if (a.rtp.some((u) => u.codec.toUpperCase() === c.codec.toUpperCase() ? (d = u.payload, true) : false), d === 0 || (Pe(c.codec) && !ot() && this.ensureVideoDDExtensionForSVC(a, o), !Pe(c.codec))) return true;
            const l = Math.round(c.maxbr * bl);
            for (const u of a.fmtp) if (u.payload === d) {
              u.config.includes("x-google-start-bitrate") || (u.config += ";x-google-start-bitrate=".concat(l));
              break;
            }
            return true;
          });
        }), this.latestOfferId > s) {
          this.log.warn("latestOfferId mismatch", Object.assign(Object.assign({}, this.logContext), { latestOfferId: this.latestOfferId, offerId: s }));
          return;
        }
        yield this.setMungedSDP(r, Ge.write(o)), this.onOffer(r, this.latestOfferId);
      } finally {
        i();
      }
    });
  }
  createAndSetAnswer() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pc.createAnswer(), i = Ge.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
      return i.media.forEach((s) => {
        sr(s), s.type === "audio" && nr(s, this.remoteStereoMids, this.remoteNackMids);
      }), yield this.setMungedSDP(t, Ge.write(i)), t;
    });
  }
  createDataChannel(e, t) {
    return this.pc.createDataChannel(e, t);
  }
  addTransceiver(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTransceiverOfKind(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTrack(e) {
    if (!this._pc) throw new $("PC closed, cannot add track");
    return this._pc.addTrack(e);
  }
  setTrackCodecBitrate(e) {
    this.trackBitrates.push(e);
  }
  setConfiguration(e) {
    var t;
    if (!this._pc) throw new $("PC closed, cannot configure");
    return (t = this._pc) === null || t === void 0 ? void 0 : t.setConfiguration(e);
  }
  canRemoveTrack() {
    var e;
    return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack);
  }
  removeTrack(e) {
    var t;
    return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e);
  }
  getConnectionState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !== null && t !== void 0 ? t : "closed";
  }
  getICEConnectionState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.iceConnectionState) !== null && t !== void 0 ? t : "closed";
  }
  getSignallingState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !== null && t !== void 0 ? t : "closed";
  }
  getTransceivers() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getTransceivers()) !== null && t !== void 0 ? t : [];
  }
  getSenders() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !== null && t !== void 0 ? t : [];
  }
  getLocalDescription() {
    var e;
    return (e = this._pc) === null || e === void 0 ? void 0 : e.localDescription;
  }
  getRemoteDescription() {
    var e;
    return (e = this.pc) === null || e === void 0 ? void 0 : e.remoteDescription;
  }
  getStats() {
    return this.pc.getStats();
  }
  getConnectedAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!this._pc) return;
      let t = "";
      const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      if ((yield this._pc.getStats()).forEach((a) => {
        switch (a.type) {
          case "transport":
            t = a.selectedCandidatePairId;
            break;
          case "candidate-pair":
            t === "" && a.selected && (t = a.id), i.set(a.id, a);
            break;
          case "remote-candidate":
            s.set(a.id, "".concat(a.address, ":").concat(a.port));
            break;
        }
      }), t === "") return;
      const o = (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
      if (o !== void 0) return s.get(o);
    });
  }
  setMungedSDP(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (t) {
        const s = e.sdp;
        e.sdp = t;
        try {
          this.log.debug("setting munged ".concat(i ? "remote" : "local", " description"), this.logContext), i ? yield this.pc.setRemoteDescription(e) : yield this.pc.setLocalDescription(e);
          return;
        } catch (r) {
          this.log.warn("not able to set ".concat(e.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), { error: r, sdp: t })), e.sdp = s;
        }
      }
      try {
        i ? yield this.pc.setRemoteDescription(e) : yield this.pc.setLocalDescription(e);
      } catch (s) {
        let r = "unknown error";
        s instanceof Error ? r = s.message : typeof s == "string" && (r = s);
        const o = { error: r, sdp: e.sdp };
        throw !i && this.pc.remoteDescription && (o.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e.type), Object.assign(Object.assign({}, this.logContext), { fields: o })), new bt(r);
      }
    });
  }
  ensureVideoDDExtensionForSVC(e, t) {
    var i, s;
    if (!((i = e.ext) === null || i === void 0 ? void 0 : i.some((o) => o.uri === js))) {
      if (this.ddExtID === 0) {
        let o = 0;
        t.media.forEach((a) => {
          var c;
          a.type === "video" && ((c = a.ext) === null || c === void 0 || c.forEach((d) => {
            d.value > o && (o = d.value);
          }));
        }), this.ddExtID = o + 1;
      }
      (s = e.ext) === null || s === void 0 || s.push({ value: this.ddExtID, uri: js });
    }
  }
}
function nr(n, e, t) {
  const i = $n(n.mid);
  let s = 0;
  n.rtp.some((r) => r.codec === "opus" ? (s = r.payload, true) : false), s > 0 && (n.rtcpFb || (n.rtcpFb = []), t.includes(i) && !n.rtcpFb.some((r) => r.payload === s && r.type === "nack") && n.rtcpFb.push({ payload: s, type: "nack" }), (e.includes(i) || e.length === 1 && e[0] === "all") && n.fmtp.some((r) => r.payload === s ? (r.config.includes("stereo=1") || (r.config += ";stereo=1"), true) : false));
}
function kl(n) {
  var e;
  const t = [], i = [], s = Ge.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
  let r = 0;
  return s.media.forEach((o) => {
    var a;
    const c = $n(o.mid);
    o.type === "audio" && (o.rtp.some((d) => d.codec === "opus" ? (r = d.payload, true) : false), !((a = o.rtcpFb) === null || a === void 0) && a.some((d) => d.payload === r && d.type === "nack") && i.push(c), o.fmtp.some((d) => d.payload === r ? (d.config.includes("sprop-stereo=1") && t.push(c), true) : false));
  }), { stereoMids: t, nackMids: i };
}
function sr(n) {
  if (n.connection) {
    const e = n.connection.ip.indexOf(":") >= 0;
    (n.connection.version === 4 && e || n.connection.version === 6 && !e) && (n.connection.ip = "0.0.0.0", n.connection.version = 4);
  }
}
function $n(n) {
  return typeof n == "number" ? n.toFixed(0) : n;
}
const Cn = "vp8", Tl = { audioPreset: pn.music, dtx: true, red: true, forceStereo: false, simulcast: true, screenShareEncoding: Hn.h1080fps15.encoding, stopMicTrackOnMute: false, videoCodec: Cn, backupCodec: true, preConnectBuffer: false }, Ha = { deviceId: { ideal: "default" }, autoGainControl: true, echoCancellation: true, noiseSuppression: true, voiceIsolation: true }, Ja = { deviceId: { ideal: "default" }, resolution: Vt.h720.resolution }, Sl = { adaptiveStream: false, dynacast: false, stopLocalTrackOnUnpublish: true, reconnectPolicy: new Zc(), disconnectOnPageLeave: true, webAudioMix: false, singlePeerConnection: true }, Zn = { autoSubscribe: true, maxRetries: 1, peerConnectionTimeout: 15e3, websocketTimeout: 15e3 };
var Q;
(function(n) {
  n[n.NEW = 0] = "NEW", n[n.CONNECTING = 1] = "CONNECTING", n[n.CONNECTED = 2] = "CONNECTED", n[n.FAILED = 3] = "FAILED", n[n.CLOSING = 4] = "CLOSING", n[n.CLOSED = 5] = "CLOSED";
})(Q || (Q = {}));
class Cl {
  get needsPublisher() {
    return this.isPublisherConnectionRequired;
  }
  get needsSubscriber() {
    return this.isSubscriberConnectionRequired;
  }
  get currentState() {
    return this.state;
  }
  get mode() {
    return this._mode;
  }
  constructor(e, t, i) {
    var s;
    this.peerConnectionTimeout = Zn.peerConnectionTimeout, this.log = U, this.updateState = () => {
      var r, o;
      const a = this.state, c = this.requiredTransports.map((d) => d.getConnectionState());
      c.every((d) => d === "connected") ? this.state = Q.CONNECTED : c.some((d) => d === "failed") ? this.state = Q.FAILED : c.some((d) => d === "connecting") ? this.state = Q.CONNECTING : c.every((d) => d === "closed") ? this.state = Q.CLOSED : c.some((d) => d === "closed") ? this.state = Q.CLOSING : c.every((d) => d === "new") && (this.state = Q.NEW), a !== this.state && (this.log.debug("pc state change: from ".concat(Q[a], " to ").concat(Q[this.state]), this.logContext), (r = this.onStateChange) === null || r === void 0 || r.call(this, this.state, this.publisher.getConnectionState(), (o = this.subscriber) === null || o === void 0 ? void 0 : o.getConnectionState()));
    }, this.log = Ve((s = i.loggerName) !== null && s !== void 0 ? s : _e.PCManager), this.loggerOptions = i, this.isPublisherConnectionRequired = t !== "subscriber-primary", this.isSubscriberConnectionRequired = t === "subscriber-primary", this.publisher = new ir(e, i), this._mode = t, t !== "publisher-only" && (this.subscriber = new ir(e, i), this.subscriber.onConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.subscriber.onIceCandidate = (r) => {
      var o;
      (o = this.onIceCandidate) === null || o === void 0 || o.call(this, r, Ee.SUBSCRIBER);
    }, this.subscriber.onDataChannel = (r) => {
      var o;
      (o = this.onDataChannel) === null || o === void 0 || o.call(this, r);
    }, this.subscriber.onTrack = (r) => {
      var o;
      (o = this.onTrack) === null || o === void 0 || o.call(this, r);
    }), this.publisher.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = (r) => {
      var o;
      (o = this.onIceCandidate) === null || o === void 0 || o.call(this, r, Ee.PUBLISHER);
    }, this.publisher.onTrack = (r) => {
      var o;
      (o = this.onTrack) === null || o === void 0 || o.call(this, r);
    }, this.publisher.onOffer = (r, o) => {
      var a;
      (a = this.onPublisherOffer) === null || a === void 0 || a.call(this, r, o);
    }, this.state = Q.NEW, this.connectionLock = new le(), this.remoteOfferLock = new le();
  }
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  requirePublisher() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    this.isPublisherConnectionRequired = e, this.updateState();
  }
  createAndSendPublisherOffer(e) {
    return this.publisher.createAndSendOffer(e);
  }
  setPublisherAnswer(e, t) {
    return this.publisher.setRemoteDescription(e, t);
  }
  removeTrack(e) {
    return this.publisher.removeTrack(e);
  }
  close() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (this.publisher && this.publisher.getSignallingState() !== "closed") {
        const t = this.publisher;
        for (const i of t.getSenders()) try {
          t.canRemoveTrack() && t.removeTrack(i);
        } catch (s) {
          this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), { error: s }));
        }
      }
      yield Promise.all([this.publisher.close(), (e = this.subscriber) === null || e === void 0 ? void 0 : e.close()]), this.updateState();
    });
  }
  triggerIceRestart() {
    return m(this, void 0, void 0, function* () {
      this.subscriber && (this.subscriber.restartingIce = true), this.needsPublisher && (yield this.createAndSendPublisherOffer({ iceRestart: true }));
    });
  }
  addIceCandidate(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      t === Ee.PUBLISHER ? yield this.publisher.addIceCandidate(e) : yield (i = this.subscriber) === null || i === void 0 ? void 0 : i.addIceCandidate(e);
    });
  }
  createSubscriberAnswerFromOffer(e, t) {
    return m(this, void 0, void 0, function* () {
      var i, s, r;
      this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), { RTCSdpType: e.type, sdp: e.sdp, signalingState: (i = this.subscriber) === null || i === void 0 ? void 0 : i.getSignallingState().toString() }));
      const o = yield this.remoteOfferLock.lock();
      try {
        return (yield (s = this.subscriber) === null || s === void 0 ? void 0 : s.setRemoteDescription(e, t)) ? yield (r = this.subscriber) === null || r === void 0 ? void 0 : r.createAndSetAnswer() : void 0;
      } finally {
        o();
      }
    });
  }
  updateConfiguration(e, t) {
    var i;
    this.publisher.setConfiguration(e), (i = this.subscriber) === null || i === void 0 || i.setConfiguration(e), t && this.triggerIceRestart();
  }
  ensurePCTransportConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      const s = yield this.connectionLock.lock();
      try {
        this.isPublisherConnectionRequired && this.publisher.getConnectionState() !== "connected" && this.publisher.getConnectionState() !== "connecting" && (this.log.debug("negotiation required, start negotiating", this.logContext), this.publisher.negotiate()), yield Promise.all((i = this.requiredTransports) === null || i === void 0 ? void 0 : i.map((r) => this.ensureTransportConnected(r, e, t)));
      } finally {
        s();
      }
    });
  }
  negotiate(e) {
    return m(this, void 0, void 0, function* () {
      return new me((t, i) => m(this, void 0, void 0, function* () {
        const s = setTimeout(() => {
          i(new bt("negotiation timed out"));
        }, this.peerConnectionTimeout), r = () => {
          clearTimeout(s), i(new bt("negotiation aborted"));
        };
        e.signal.addEventListener("abort", r), this.publisher.once(St.NegotiationStarted, () => {
          e.signal.aborted || this.publisher.once(St.NegotiationComplete, () => {
            clearTimeout(s), t();
          });
        }), yield this.publisher.negotiate((o) => {
          clearTimeout(s), o instanceof Error ? i(o) : i(new Error(String(o)));
        });
      }));
    });
  }
  addPublisherTransceiver(e, t) {
    return this.publisher.addTransceiver(e, t);
  }
  addPublisherTransceiverOfKind(e, t) {
    return this.publisher.addTransceiverOfKind(e, t);
  }
  getMidForReceiver(e) {
    const i = (this.subscriber ? this.subscriber.getTransceivers() : this.publisher.getTransceivers()).find((s) => s.receiver === e);
    return i == null ? void 0 : i.mid;
  }
  addPublisherTrack(e) {
    return this.publisher.addTrack(e);
  }
  createPublisherDataChannel(e, t) {
    return this.publisher.createDataChannel(e, t);
  }
  getConnectedAddress(e) {
    return e === Ee.PUBLISHER ? this.publisher.getConnectedAddress() : e === Ee.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress();
  }
  get requiredTransports() {
    const e = [];
    return this.isPublisherConnectionRequired && e.push(this.publisher), this.isSubscriberConnectionRequired && this.subscriber && e.push(this.subscriber), e;
  }
  ensureTransportConnected(e, t) {
    return m(this, arguments, void 0, function(i, s) {
      var r = this;
      let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.peerConnectionTimeout;
      return (function* () {
        if (i.getConnectionState() !== "connected") return new Promise((c, d) => m(r, void 0, void 0, function* () {
          const l = () => {
            this.log.warn("abort transport connection", this.logContext), re.clearTimeout(u), d(L.cancelled("room connection has been cancelled"));
          };
          (s == null ? void 0 : s.signal.aborted) && l(), s == null ? void 0 : s.signal.addEventListener("abort", l);
          const u = re.setTimeout(() => {
            s == null ? void 0 : s.signal.removeEventListener("abort", l), d(L.internal("could not establish pc connection"));
          }, o);
          for (; this.state !== Q.CONNECTED; ) if (yield ae(50), s == null ? void 0 : s.signal.aborted) {
            d(L.cancelled("room connection has been cancelled"));
            return;
          }
          re.clearTimeout(u), s == null ? void 0 : s.signal.removeEventListener("abort", l), c();
        }));
      })();
    });
  }
}
const za = 5e3, El = 3e4;
class q {
  static fetchRegionSettings(e, t, i) {
    return m(this, void 0, void 0, function* () {
      const s = yield q.fetchLock.lock();
      try {
        const r = yield fetch("".concat(Pl(e), "/regions"), { headers: { authorization: "Bearer ".concat(t) }, signal: i });
        if (r.ok) {
          const o = Jd(r.headers), a = o ? o * 1e3 : za;
          return { regionSettings: yield r.json(), updatedAtInMs: Date.now(), maxAgeInMs: a };
        } else throw r.status === 401 ? L.notAllowed("Could not fetch region settings: ".concat(r.statusText), r.status) : L.internal("Could not fetch region settings: ".concat(r.statusText));
      } catch (r) {
        throw r instanceof L ? r : (i == null ? void 0 : i.aborted) ? L.cancelled("Region fetching was aborted") : L.serverUnreachable("Could not fetch region settings, ".concat(r instanceof Error ? "".concat(r.name, ": ").concat(r.message) : r));
      } finally {
        s();
      }
    });
  }
  static scheduleRefetch(e, t, i) {
    return m(this, void 0, void 0, function* () {
      const s = q.settingsTimeouts.get(e.hostname);
      clearTimeout(s), q.settingsTimeouts.set(e.hostname, setTimeout(() => m(this, void 0, void 0, function* () {
        try {
          const r = yield q.fetchRegionSettings(e, t);
          q.updateCachedRegionSettings(e, t, r);
        } catch (r) {
          if (r instanceof L && r.reason === H.NotAllowed) {
            U.debug("token is not valid, cancelling auto region refresh");
            return;
          }
          U.debug("auto refetching of region settings failed", { error: r }), q.scheduleRefetch(e, t, i);
        }
      }), i));
    });
  }
  static updateCachedRegionSettings(e, t, i) {
    q.cache.set(e.hostname, i), q.scheduleRefetch(e, t, i.maxAgeInMs);
  }
  static stopRefetch(e) {
    const t = q.settingsTimeouts.get(e);
    t && (clearTimeout(t), q.settingsTimeouts.delete(e));
  }
  static scheduleCleanup(e) {
    let t = q.connectionTrackers.get(e);
    t && (t.cleanupTimeout && clearTimeout(t.cleanupTimeout), t.cleanupTimeout = setTimeout(() => {
      const i = q.connectionTrackers.get(e);
      i && i.connectionCount === 0 && (U.debug("stopping region refetch after disconnect delay", { hostname: e }), q.stopRefetch(e)), i && (i.cleanupTimeout = void 0);
    }, El));
  }
  static cancelCleanup(e) {
    const t = q.connectionTrackers.get(e);
    (t == null ? void 0 : t.cleanupTimeout) && (clearTimeout(t.cleanupTimeout), t.cleanupTimeout = void 0);
  }
  notifyConnected() {
    const e = this.serverUrl.hostname;
    let t = q.connectionTrackers.get(e);
    t || (t = { connectionCount: 0 }, q.connectionTrackers.set(e, t)), t.connectionCount++, q.cancelCleanup(e);
  }
  notifyDisconnected() {
    const e = this.serverUrl.hostname, t = q.connectionTrackers.get(e);
    t && (t.connectionCount = Math.max(0, t.connectionCount - 1), t.connectionCount === 0 && q.scheduleCleanup(e));
  }
  constructor(e, t) {
    this.attemptedRegions = [], this.serverUrl = new URL(e), this.token = t;
  }
  updateToken(e) {
    this.token = e;
  }
  isCloud() {
    return Et(this.serverUrl);
  }
  getServerUrl() {
    return this.serverUrl;
  }
  fetchRegionSettings(e) {
    return m(this, void 0, void 0, function* () {
      return q.fetchRegionSettings(this.serverUrl, this.token, e);
    });
  }
  getNextBestRegionUrl(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
      let t = q.cache.get(this.serverUrl.hostname);
      (!t || Date.now() - t.updatedAtInMs > t.maxAgeInMs) && (t = yield this.fetchRegionSettings(e), q.updateCachedRegionSettings(this.serverUrl, this.token, t));
      const i = t.regionSettings.regions.filter((s) => !this.attemptedRegions.find((r) => r.url === s.url));
      if (i.length > 0) {
        const s = i[0];
        return this.attemptedRegions.push(s), U.debug("next region: ".concat(s.region)), s.url;
      } else return null;
    });
  }
  resetAttempts() {
    this.attemptedRegions = [];
  }
  setServerReportedRegions(e) {
    q.updateCachedRegionSettings(this.serverUrl, this.token, e);
  }
}
q.cache = /* @__PURE__ */ new Map();
q.settingsTimeouts = /* @__PURE__ */ new Map();
q.connectionTrackers = /* @__PURE__ */ new Map();
q.fetchLock = new le();
function Pl(n) {
  return "".concat(n.protocol.replace("ws", "http"), "//").concat(n.host, "/settings");
}
class X extends Error {
  constructor(e, t, i) {
    super(t), this.code = e, this.message = rr(t, X.MAX_MESSAGE_BYTES), this.data = i ? rr(i, X.MAX_DATA_BYTES) : void 0;
  }
  static fromProto(e) {
    return new X(e.code, e.message, e.data);
  }
  toProto() {
    return new Br({ code: this.code, message: this.message, data: this.data });
  }
  static builtIn(e, t) {
    return new X(X.ErrorCode[e], X.ErrorMessage[e], t);
  }
}
X.MAX_MESSAGE_BYTES = 256;
X.MAX_DATA_BYTES = 15360;
X.ErrorCode = { APPLICATION_ERROR: 1500, CONNECTION_TIMEOUT: 1501, RESPONSE_TIMEOUT: 1502, RECIPIENT_DISCONNECTED: 1503, RESPONSE_PAYLOAD_TOO_LARGE: 1504, SEND_FAILED: 1505, UNSUPPORTED_METHOD: 1400, RECIPIENT_NOT_FOUND: 1401, REQUEST_PAYLOAD_TOO_LARGE: 1402, UNSUPPORTED_SERVER: 1403, UNSUPPORTED_VERSION: 1404 };
X.ErrorMessage = { APPLICATION_ERROR: "Application error in method handler", CONNECTION_TIMEOUT: "Connection timeout", RESPONSE_TIMEOUT: "Response timeout", RECIPIENT_DISCONNECTED: "Recipient disconnected", RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large", SEND_FAILED: "Failed to send", UNSUPPORTED_METHOD: "Method not supported at destination", RECIPIENT_NOT_FOUND: "Recipient not found", REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large", UNSUPPORTED_SERVER: "RPC not supported by server", UNSUPPORTED_VERSION: "Unsupported RPC version" };
const Qa = 15360;
function es(n) {
  return new TextEncoder().encode(n).length;
}
function rr(n, e) {
  if (es(n) <= e) return n;
  let t = 0, i = n.length;
  const s = new TextEncoder();
  for (; t < i; ) {
    const r = Math.floor((t + i + 1) / 2);
    s.encode(n.slice(0, r)).length <= e ? t = r : i = r - 1;
  }
  return n.slice(0, t);
}
const ts = 2e3;
function _i(n, e) {
  if (!e) return 0;
  let t, i;
  return "bytesReceived" in n ? (t = n.bytesReceived, i = e.bytesReceived) : "bytesSent" in n && (t = n.bytesSent, i = e.bytesSent), t === void 0 || i === void 0 || n.timestamp === void 0 || e.timestamp === void 0 ? 0 : (t - i) * 8 * 1e3 / (n.timestamp - e.timestamp);
}
const is = typeof MediaRecorder < "u";
class Rl {
  constructor() {
    throw new Error("MediaRecorder is not available in this environment");
  }
}
const _l = is ? MediaRecorder : Rl;
class wl extends _l {
  constructor(e, t) {
    if (!is) throw new Error("MediaRecorder is not available in this environment");
    super(new MediaStream([e.mediaStreamTrack]), t);
    let i, s;
    const r = () => s === void 0, o = () => {
      this.removeEventListener("dataavailable", i), this.removeEventListener("stop", o), this.removeEventListener("error", a), s == null ? void 0 : s.close(), s = void 0;
    }, a = (c) => {
      s == null ? void 0 : s.error(c), this.removeEventListener("dataavailable", i), this.removeEventListener("stop", o), this.removeEventListener("error", a), s = void 0;
    };
    this.byteStream = new ReadableStream({ start: (c) => {
      s = c, i = (d) => m(this, void 0, void 0, function* () {
        let l;
        if (d.data.arrayBuffer) {
          const u = yield d.data.arrayBuffer();
          l = new Uint8Array(u);
        } else if (d.data.byteArray) l = d.data.byteArray;
        else throw new Error("no data available!");
        r() || c.enqueue(l);
      }), this.addEventListener("dataavailable", i);
    }, cancel: () => {
      o();
    } }), this.addEventListener("stop", o), this.addEventListener("error", a);
  }
}
function Il() {
  return is;
}
const Ol = 1e3, Dl = 1e4;
class Ya extends T {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e;
  }
  get constraints() {
    return this._constraints;
  }
  get hasPreConnectBuffer() {
    return !!this.localTrackRecorder;
  }
  constructor(e, t, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, r = arguments.length > 4 ? arguments[4] : void 0;
    super(e, t, r), this.manuallyStopped = false, this._isUpstreamPaused = false, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch(() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)), this.debouncedTrackMuteHandler = Xn(() => m(this, void 0, void 0, function* () {
      yield this.pauseUpstream();
    }), 5e3), this.handleTrackUnmuteEvent = () => m(this, void 0, void 0, function* () {
      this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream();
    }), this.handleEnded = () => {
      this.isInBackground && (this.reacquireTrack = true), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(P.Ended, this);
    }, this.reacquireTrack = false, this.providedByUser = s, this.muteLock = new le(), this.pauseUpstreamLock = new le(), this.trackChangeLock = new le(), this.trackChangeLock.lock().then((o) => m(this, void 0, void 0, function* () {
      try {
        yield this.setMediaStreamTrack(e, true);
      } finally {
        o();
      }
    })), this._constraints = e.getConstraints(), i && (this._constraints = i);
  }
  get id() {
    return this._mediaStreamTrack.id;
  }
  get dimensions() {
    if (this.kind !== T.Kind.Video) return;
    const { width: e, height: t } = this._mediaStreamTrack.getSettings();
    if (e && t) return { width: e, height: t };
  }
  get isUpstreamPaused() {
    return this._isUpstreamPaused;
  }
  get isUserProvided() {
    return this.providedByUser;
  }
  get mediaStreamTrack() {
    var e, t;
    return (t = (e = this.processor) === null || e === void 0 ? void 0 : e.processedTrack) !== null && t !== void 0 ? t : this._mediaStreamTrack;
  }
  get isLocal() {
    return true;
  }
  getSourceTrackSettings() {
    return this._mediaStreamTrack.getSettings();
  }
  setMediaStreamTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      if (e === this._mediaStreamTrack && !t) return;
      this._mediaStreamTrack && (this.attachedElements.forEach((r) => {
        yt(this._mediaStreamTrack, r);
      }), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e]), e && (e.addEventListener("ended", this.handleEnded), e.addEventListener("mute", this.handleTrackMuteEvent), e.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e.getConstraints());
      let s;
      if (this.processor && e) {
        if (this.log.debug("restarting processor", this.logContext), this.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
        this.processorElement && (ht(e, this.processorElement), this.processorElement.muted = true), yield this.processor.restart({ track: e, kind: this.kind, element: this.processorElement }), s = this.processor.processedTrack;
      }
      this.sender && ((i = this.sender.transport) === null || i === void 0 ? void 0 : i.state) !== "closed" && (yield this.sender.replaceTrack(s ?? e)), !this.providedByUser && this._mediaStreamTrack !== e && this._mediaStreamTrack.stop(), this._mediaStreamTrack = e, e && (this._mediaStreamTrack.enabled = !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach((r) => {
        ht(s ?? e, r);
      }));
    });
  }
  waitForDimensions() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ol;
      return (function* () {
        var i;
        if (e.kind === T.Kind.Audio) throw new Error("cannot get dimensions for audio tracks");
        ((i = fe()) === null || i === void 0 ? void 0 : i.os) === "iOS" && (yield ae(10));
        const s = Date.now();
        for (; Date.now() - s < t; ) {
          const r = e.dimensions;
          if (r) return r;
          yield ae(50);
        }
        throw new Be("unable to get track dimensions after timeout");
      })();
    });
  }
  setDeviceId(e) {
    return m(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === Qe(e) || (this._constraints.deviceId = e, this.isMuted) ? true : (yield this.restartTrack(), Qe(e) === this._mediaStreamTrack.getSettings().deviceId);
    });
  }
  getDeviceId() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return (function* () {
        if (e.source === T.Source.ScreenShare) return;
        const { deviceId: i, groupId: s } = e._mediaStreamTrack.getSettings(), r = e.kind === T.Kind.Audio ? "audioinput" : "videoinput";
        return t ? se.getInstance().normalizeDeviceId(r, i, s) : i;
      })();
    });
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(true), this;
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      return this.setTrackMuted(false), this;
    });
  }
  replaceTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = yield this.trackChangeLock.lock();
      try {
        if (!this.sender) throw new Be("unable to replace an unpublished track");
        let s, r;
        return typeof t == "boolean" ? s = t : t !== void 0 && (s = t.userProvidedTrack, r = t.stopProcessor), this.providedByUser = s ?? true, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e), r && this.processor && (yield this.internalStopProcessor()), this;
      } finally {
        i();
      }
    });
  }
  restart(e) {
    return m(this, void 0, void 0, function* () {
      this.manuallyStopped = false;
      const t = yield this.trackChangeLock.lock();
      try {
        e || (e = this._constraints);
        const { deviceId: i, facingMode: s } = e, r = ed(e, ["deviceId", "facingMode"]);
        this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), { constraints: e }));
        const o = { audio: false, video: false };
        this.kind === T.Kind.Video ? o.video = i || s ? { deviceId: i, facingMode: s } : true : o.audio = i ? Object.assign({ deviceId: i }, r) : true, this.attachedElements.forEach((d) => {
          yt(this.mediaStreamTrack, d);
        }), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
        const c = (yield navigator.mediaDevices.getUserMedia(o)).getTracks()[0];
        return this.kind === T.Kind.Video && (yield c.applyConstraints(r)), c.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(c), this._constraints = e, this.emit(P.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this;
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    this.log.debug("setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"), this.logContext), !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? P.Muted : P.Unmuted, this));
  }
  get needsReAcquisition() {
    return this._mediaStreamTrack.readyState !== "live" || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack;
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), qa() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), !this.isInBackground && this.needsReAcquisition && !this.isUserProvided && !this.isMuted && (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = false));
    });
  }
  stop() {
    var e;
    this.manuallyStopped = true, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), (e = this.processor) === null || e === void 0 || e.destroy(), this.processor = void 0;
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === true) return;
        if (!this.sender) {
          this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
          return;
        }
        this._isUpstreamPaused = true, this.emit(P.UpstreamPaused, this);
        const i = fe();
        if ((i == null ? void 0 : i.name) === "Safari" && Me(i.version, "12.0") < 0) throw new Gn("pauseUpstream is not supported on Safari < 12.");
        ((e = this.sender.transport) === null || e === void 0 ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(null));
      } finally {
        t();
      }
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === false) return;
        if (!this.sender) {
          this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
          return;
        }
        this._isUpstreamPaused = false, this.emit(P.UpstreamResumed, this), ((e = this.sender.transport) === null || e === void 0 ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(this.mediaStreamTrack));
      } finally {
        t();
      }
    });
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.sender) === null || e === void 0) && e.getStats ? yield this.sender.getStats() : void 0;
    });
  }
  setProcessor(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return (function* () {
        var r;
        const o = yield i.trackChangeLock.lock();
        try {
          i.log.debug("setting up processor", i.logContext);
          const a = document.createElement(i.kind), c = { kind: i.kind, track: i._mediaStreamTrack, element: a, audioContext: i.audioContext };
          if (yield t.init(c), i.log.debug("processor initialized", i.logContext), i.processor && (yield i.internalStopProcessor()), i.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
          if (ht(i._mediaStreamTrack, a), a.muted = true, a.play().catch((d) => {
            d instanceof DOMException && d.name === "AbortError" ? (i.log.warn("failed to play processor element, retrying", Object.assign(Object.assign({}, i.logContext), { error: d })), setTimeout(() => {
              a.play().catch((l) => {
                i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), { err: l }));
              });
            }, 100)) : i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), { error: d }));
          }), i.processor = t, i.processorElement = a, i.processor.processedTrack) {
            for (const d of i.attachedElements) d !== i.processorElement && s && (yt(i._mediaStreamTrack, d), ht(i.processor.processedTrack, d));
            yield (r = i.sender) === null || r === void 0 ? void 0 : r.replaceTrack(i.processor.processedTrack);
          }
          i.emit(P.TrackProcessorUpdate, i.processor);
        } finally {
          o();
        }
      })();
    });
  }
  getProcessor() {
    return this.processor;
  }
  stopProcessor() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return (function* () {
        const i = yield e.trackChangeLock.lock();
        try {
          yield e.internalStopProcessor(t);
        } finally {
          i();
        }
      })();
    });
  }
  internalStopProcessor() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return (function* () {
        var i, s;
        e.processor && (e.log.debug("stopping processor", e.logContext), (i = e.processor.processedTrack) === null || i === void 0 || i.stop(), yield e.processor.destroy(), e.processor = void 0, t || ((s = e.processorElement) === null || s === void 0 || s.remove(), e.processorElement = void 0), yield e._mediaStreamTrack.applyConstraints(e._constraints), yield e.setMediaStreamTrack(e._mediaStreamTrack, true), e.emit(P.TrackProcessorUpdate));
      })();
    });
  }
  startPreConnectBuffer() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
    if (!Il()) {
      this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext);
      return;
    }
    if (this.localTrackRecorder) {
      this.log.warn("preconnect buffer already started");
      return;
    } else {
      let t = "audio/webm;codecs=opus";
      MediaRecorder.isTypeSupported(t) || (t = "video/mp4"), this.localTrackRecorder = new wl(this, { mimeType: t });
    }
    this.localTrackRecorder.start(e), this.autoStopPreConnectBuffer = setTimeout(() => {
      this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer();
    }, Dl);
  }
  stopPreConnectBuffer() {
    clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = void 0);
  }
  getPreConnectBuffer() {
    var e;
    return (e = this.localTrackRecorder) === null || e === void 0 ? void 0 : e.byteStream;
  }
  getPreConnectBufferMimeType() {
    var e;
    return (e = this.localTrackRecorder) === null || e === void 0 ? void 0 : e.mimeType;
  }
}
class vi extends Ya {
  get enhancedNoiseCancellation() {
    return this.isKrispNoiseFilterEnabled;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, s = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0;
    super(e, T.Kind.Audio, t, i, r), this.stopOnMute = false, this.isKrispNoiseFilterEnabled = false, this.monitorSender = () => m(this, void 0, void 0, function* () {
      if (!this.sender) {
        this._currentBitrate = 0;
        return;
      }
      let o;
      try {
        o = yield this.getSenderStats();
      } catch (a) {
        this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), { error: a }));
        return;
      }
      o && this.prevStats && (this._currentBitrate = _i(o, this.prevStats)), this.prevStats = o;
    }), this.handleKrispNoiseFilterEnable = () => {
      this.isKrispNoiseFilterEnabled = true, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(P.AudioTrackFeatureUpdate, this, ne.TF_ENHANCED_NOISE_CANCELLATION, true);
    }, this.handleKrispNoiseFilterDisable = () => {
      this.isKrispNoiseFilterEnabled = false, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(P.AudioTrackFeatureUpdate, this, ne.TF_ENHANCED_NOISE_CANCELLATION, false);
    }, this.audioContext = s, this.checkForSilence();
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === T.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        if (!this.isMuted) return this.log.debug("Track already unmuted", this.logContext), this;
        const i = this._constraints.deviceId && this._mediaStreamTrack.getSettings().deviceId !== Qe(this._constraints.deviceId);
        return this.source === T.Source.Microphone && (this.stopOnMute || this._mediaStreamTrack.readyState === "ended" || i) && !this.isUserProvided && (this.log.debug("reacquiring mic track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this;
      } finally {
        t();
      }
    });
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      let t;
      if (e) {
        const i = Jn({ audio: e });
        typeof i.audio != "boolean" && (t = i.audio);
      }
      yield this.restart(t);
    });
  }
  restart(e) {
    const t = Object.create(null, { restart: { get: () => super.restart } });
    return m(this, void 0, void 0, function* () {
      const i = yield t.restart.call(this, e);
      return this.checkForSilence(), i;
    });
  }
  startMonitor() {
    pe() && (this.monitorInterval || (this.monitorInterval = setInterval(() => {
      this.monitorSender();
    }, ts)));
  }
  setProcessor(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      const i = yield this.trackChangeLock.lock();
      try {
        if (!De() && !this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
        this.processor && (yield this.internalStopProcessor());
        const s = { kind: this.kind, track: this._mediaStreamTrack, audioContext: this.audioContext };
        this.log.debug("setting up audio processor ".concat(e.name), this.logContext), yield e.init(s), this.processor = e, this.processor.processedTrack && (yield (t = this.sender) === null || t === void 0 ? void 0 : t.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(P.TrackProcessorUpdate, this.processor);
      } finally {
        i();
      }
    });
  }
  setAudioContext(e) {
    this.audioContext = e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return;
      const t = yield this.sender.getStats();
      let i;
      return t.forEach((s) => {
        s.type === "outbound-rtp" && (i = { type: "audio", streamId: s.id, packetsSent: s.packetsSent, packetsLost: s.packetsLost, bytesSent: s.bytesSent, timestamp: s.timestamp, roundTripTime: s.roundTripTime, jitter: s.jitter });
      }), i;
    });
  }
  checkForSilence() {
    return m(this, void 0, void 0, function* () {
      const e = yield ja(this);
      return e && (this.isMuted || this.log.debug("silence detected on local audio track", this.logContext), this.emit(P.AudioSilenceDetected)), e;
    });
  }
}
function Ml(n, e, t) {
  switch (n.kind) {
    case "audio":
      return new vi(n, e, false, void 0, t);
    case "video":
      return new bi(n, e, false, t);
    default:
      throw new Be("unsupported track type: ".concat(n.kind));
  }
}
const Al = Object.values(Vt), xl = Object.values(fn), Nl = Object.values(Hn), Ll = [Vt.h180, Vt.h360], Ul = [fn.h180, fn.h360], Fl = (n) => [{ scaleResolutionDownBy: 2, fps: n.encoding.maxFramerate }].map((t) => {
  var i, s;
  return new K(Math.floor(n.width / t.scaleResolutionDownBy), Math.floor(n.height / t.scaleResolutionDownBy), Math.max(15e4, Math.floor(n.encoding.maxBitrate / (Math.pow(t.scaleResolutionDownBy, 2) * (((i = n.encoding.maxFramerate) !== null && i !== void 0 ? i : 30) / ((s = t.fps) !== null && s !== void 0 ? s : 30))))), t.fps, n.encoding.priority);
}), En = ["q", "h", "f"];
function Pn(n, e, t, i) {
  var s, r;
  let o = i == null ? void 0 : i.videoEncoding;
  n && (o = i == null ? void 0 : i.screenShareEncoding);
  const a = i == null ? void 0 : i.simulcast, c = i == null ? void 0 : i.scalabilityMode, d = i == null ? void 0 : i.videoCodec;
  if (!o && !a && !c || !e || !t) return [{}];
  o || (o = Bl(n, e, t, d), U.debug("using video encoding", o));
  const l = o.maxFramerate, u = new K(e, t, o.maxBitrate, o.maxFramerate, o.priority);
  if (c && Pe(d)) {
    const b = new Xa(c), g = [];
    if (b.spatial > 3) throw new Error("unsupported scalabilityMode: ".concat(c));
    const R = fe();
    if (qt() || De() || (R == null ? void 0 : R.name) === "Chrome" && Me(R == null ? void 0 : R.version, "113") < 0) {
      const k = b.suffix == "h" ? 2 : 3, I = Nd(R);
      for (let M = 0; M < b.spatial; M += 1) g.push({ rid: En[2 - M], maxBitrate: o.maxBitrate / Math.pow(k, M), maxFramerate: u.encoding.maxFramerate, scaleResolutionDownBy: I ? Math.pow(2, M) : void 0 });
      g[0].scalabilityMode = c;
    } else g.push({ maxBitrate: o.maxBitrate, maxFramerate: u.encoding.maxFramerate, scalabilityMode: c });
    return u.encoding.priority && (g[0].priority = u.encoding.priority, g[0].networkPriority = u.encoding.priority), U.debug("using svc encoding", { encodings: g }), g;
  }
  if (!a) return [o];
  let h = [];
  n ? h = (s = or(i == null ? void 0 : i.screenShareSimulcastLayers)) !== null && s !== void 0 ? s : ar(n, u) : h = (r = or(i == null ? void 0 : i.videoSimulcastLayers)) !== null && r !== void 0 ? r : ar(n, u);
  let p;
  if (h.length > 0) {
    const b = h[0];
    h.length > 1 && ([, p] = h);
    const g = Math.max(e, t);
    if (g >= 960 && p) return Xi(e, t, [b, p, u], l);
    if (g >= 480) return Xi(e, t, [b, u], l);
  }
  return Xi(e, t, [u]);
}
function jl(n, e, t) {
  var i, s, r, o;
  if (!t.backupCodec || t.backupCodec === true || t.backupCodec.codec === t.videoCodec) return;
  e !== t.backupCodec.codec && U.warn("requested a different codec than specified as backup", { serverRequested: e, backup: t.backupCodec.codec }), t.videoCodec = e, t.videoEncoding = t.backupCodec.encoding;
  const a = n.mediaStreamTrack.getSettings(), c = (i = a.width) !== null && i !== void 0 ? i : (s = n.dimensions) === null || s === void 0 ? void 0 : s.width, d = (r = a.height) !== null && r !== void 0 ? r : (o = n.dimensions) === null || o === void 0 ? void 0 : o.height;
  return n.source === T.Source.ScreenShare && t.simulcast && (t.simulcast = false), Pn(n.source === T.Source.ScreenShare, c, d, t);
}
function Bl(n, e, t, i) {
  const s = Vl(n, e, t);
  let { encoding: r } = s[0];
  const o = Math.max(e, t);
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a];
    if (r = c.encoding, c.width >= o) break;
  }
  if (i) switch (i) {
    case "av1":
    case "h265":
      r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * 0.7;
      break;
    case "vp9":
      r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * 0.85;
      break;
  }
  return r;
}
function Vl(n, e, t) {
  if (n) return Nl;
  const i = e > t ? e / t : t / e;
  return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? Al : xl;
}
function ar(n, e) {
  if (n) return Fl(e);
  const { width: t, height: i } = e, s = t > i ? t / i : i / t;
  return Math.abs(s - 16 / 9) < Math.abs(s - 4 / 3) ? Ll : Ul;
}
function Xi(n, e, t, i) {
  const s = [];
  if (t.forEach((r, o) => {
    if (o >= En.length) return;
    const a = Math.min(n, e), d = { rid: En[o], scaleResolutionDownBy: Math.max(1, a / Math.min(r.width, r.height)), maxBitrate: r.encoding.maxBitrate }, l = i && r.encoding.maxFramerate ? Math.min(i, r.encoding.maxFramerate) : r.encoding.maxFramerate;
    l && (d.maxFramerate = l);
    const u = at() || o === 0;
    r.encoding.priority && u && (d.priority = r.encoding.priority, d.networkPriority = r.encoding.priority), s.push(d);
  }), De() && Ka() === "ios") {
    let r;
    s.forEach((a) => {
      r ? a.maxFramerate && a.maxFramerate > r && (r = a.maxFramerate) : r = a.maxFramerate;
    });
    let o = true;
    s.forEach((a) => {
      var c;
      a.maxFramerate != r && (o && (o = false, U.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), U.info('Setting framerate of encoding "'.concat((c = a.rid) !== null && c !== void 0 ? c : "", '" to ').concat(r)), a.maxFramerate = r);
    });
  }
  return s;
}
function or(n) {
  if (n) return n.sort((e, t) => {
    const { encoding: i } = e, { encoding: s } = t;
    return i.maxBitrate > s.maxBitrate ? 1 : i.maxBitrate < s.maxBitrate ? -1 : i.maxBitrate === s.maxBitrate && i.maxFramerate && s.maxFramerate ? i.maxFramerate > s.maxFramerate ? 1 : -1 : 0;
  });
}
class Xa {
  constructor(e) {
    const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
    if (!t) throw new Error("invalid scalability mode");
    if (this.spatial = parseInt(t[1]), this.temporal = parseInt(t[2]), t.length > 3) switch (t[3]) {
      case "h":
      case "_KEY":
      case "_KEY_SHIFT":
        this.suffix = t[3];
    }
  }
  toString() {
    var e;
    return "L".concat(this.spatial, "T").concat(this.temporal).concat((e = this.suffix) !== null && e !== void 0 ? e : "");
  }
}
function ql(n) {
  return n.source === T.Source.ScreenShare || n.constraints.height && Qe(n.constraints.height) >= 1080 ? "maintain-resolution" : "balanced";
}
const Wl = 5e3;
class bi extends Ya {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e, this.degradationPreference && this.setDegradationPreference(this.degradationPreference);
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, s = arguments.length > 3 ? arguments[3] : void 0;
    super(e, T.Kind.Video, t, i, s), this.simulcastCodecs = /* @__PURE__ */ new Map(), this.degradationPreference = "balanced", this.isCpuConstrained = false, this.optimizeForPerformance = false, this.monitorSender = () => m(this, void 0, void 0, function* () {
      if (!this.sender) {
        this._currentBitrate = 0;
        return;
      }
      let r;
      try {
        r = yield this.getSenderStats();
      } catch (c) {
        this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), { error: c }));
        return;
      }
      const o = new Map(r.map((c) => [c.rid, c])), a = r.some((c) => c.qualityLimitationReason === "cpu");
      if (a !== this.isCpuConstrained && (this.isCpuConstrained = a, this.isCpuConstrained && this.emit(P.CpuConstrained)), this.prevStats) {
        let c = 0;
        o.forEach((d, l) => {
          var u;
          const h = (u = this.prevStats) === null || u === void 0 ? void 0 : u.get(l);
          c += _i(d, h);
        }), this._currentBitrate = c;
      }
      this.prevStats = o;
    }), this.senderLock = new le();
  }
  get isSimulcast() {
    return !!(this.sender && this.sender.getParameters().encodings.length > 1);
  }
  startMonitor(e) {
    var t;
    if (this.signalClient = e, !pe()) return;
    const i = (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
    i && (this.encodings = i.encodings), !this.monitorInterval && (this.monitorInterval = setInterval(() => {
      this.monitorSender();
    }, ts));
  }
  stop() {
    this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach((e) => {
      e.mediaStreamTrack.stop();
    }), super.stop();
  }
  pauseUpstream() {
    const e = Object.create(null, { pauseUpstream: { get: () => super.pauseUpstream } });
    return m(this, void 0, void 0, function* () {
      var t, i, s, r, o;
      yield e.pauseUpstream.call(this);
      try {
        for (var a = true, c = je(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; a = true) r = d.value, a = false, yield (o = r.sender) === null || o === void 0 ? void 0 : o.replaceTrack(null);
      } catch (l) {
        i = { error: l };
      } finally {
        try {
          !a && !t && (s = c.return) && (yield s.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  resumeUpstream() {
    const e = Object.create(null, { resumeUpstream: { get: () => super.resumeUpstream } });
    return m(this, void 0, void 0, function* () {
      var t, i, s, r, o;
      yield e.resumeUpstream.call(this);
      try {
        for (var a = true, c = je(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; a = true) {
          r = d.value, a = false;
          const l = r;
          yield (o = l.sender) === null || o === void 0 ? void 0 : o.replaceTrack(l.mediaStreamTrack);
        }
      } catch (l) {
        i = { error: l };
      } finally {
        try {
          !a && !t && (s = c.return) && (yield s.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  mute() {
    const e = Object.create(null, { mute: { get: () => super.mute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === T.Source.Camera && !this.isUserProvided && (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, { unmute: { get: () => super.unmute } });
    return m(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.source === T.Source.Camera && !this.isUserProvided && (this.log.debug("reacquiring camera track", this.logContext), yield this.restartTrack()), yield e.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    super.setTrackMuted(e);
    for (const t of this.simulcastCodecs.values()) t.mediaStreamTrack.enabled = !e;
  }
  getSenderStats() {
    return m(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return [];
      const t = [], i = yield this.sender.getStats();
      return i.forEach((s) => {
        var r;
        if (s.type === "outbound-rtp") {
          const o = { type: "video", streamId: s.id, frameHeight: s.frameHeight, frameWidth: s.frameWidth, framesPerSecond: s.framesPerSecond, framesSent: s.framesSent, firCount: s.firCount, pliCount: s.pliCount, nackCount: s.nackCount, packetsSent: s.packetsSent, bytesSent: s.bytesSent, qualityLimitationReason: s.qualityLimitationReason, qualityLimitationDurations: s.qualityLimitationDurations, qualityLimitationResolutionChanges: s.qualityLimitationResolutionChanges, rid: (r = s.rid) !== null && r !== void 0 ? r : s.id, retransmittedPacketsSent: s.retransmittedPacketsSent, targetBitrate: s.targetBitrate, timestamp: s.timestamp }, a = i.get(s.remoteId);
          a && (o.jitter = a.jitter, o.packetsLost = a.packetsLost, o.roundTripTime = a.roundTripTime), t.push(o);
        }
      }), t.sort((s, r) => {
        var o, a;
        return ((o = r.frameWidth) !== null && o !== void 0 ? o : 0) - ((a = s.frameWidth) !== null && a !== void 0 ? a : 0);
      }), t;
    });
  }
  setPublishingQuality(e) {
    const t = [];
    for (let i = ve.LOW; i <= ve.HIGH; i += 1) t.push(new Vn({ quality: i, enabled: i <= e }));
    this.log.debug("setting publishing quality. max quality ".concat(e), this.logContext), this.setPublishingLayers(Pe(this.codec), t);
  }
  restartTrack(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s, r, o;
      let a;
      if (e) {
        const u = Jn({ video: e });
        typeof u.video != "boolean" && (a = u.video);
      }
      yield this.restart(a), this.isCpuConstrained = false;
      try {
        for (var c = true, d = je(this.simulcastCodecs.values()), l; l = yield d.next(), t = l.done, !t; c = true) {
          r = l.value, c = false;
          const u = r;
          u.sender && ((o = u.sender.transport) === null || o === void 0 ? void 0 : o.state) !== "closed" && (u.mediaStreamTrack = this.mediaStreamTrack.clone(), yield u.sender.replaceTrack(u.mediaStreamTrack));
        }
      } catch (u) {
        i = { error: u };
      } finally {
        try {
          !c && !t && (s = d.return) && (yield s.call(d));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  setProcessor(e) {
    const t = Object.create(null, { setProcessor: { get: () => super.setProcessor } });
    return m(this, arguments, void 0, function(i) {
      var s = this;
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return (function* () {
        var o, a, c, d, l, u;
        if (yield t.setProcessor.call(s, i, r), !((l = s.processor) === null || l === void 0) && l.processedTrack) try {
          for (var h = true, p = je(s.simulcastCodecs.values()), b; b = yield p.next(), o = b.done, !o; h = true) d = b.value, h = false, yield (u = d.sender) === null || u === void 0 ? void 0 : u.replaceTrack(s.processor.processedTrack);
        } catch (g) {
          a = { error: g };
        } finally {
          try {
            !h && !o && (c = p.return) && (yield c.call(p));
          } finally {
            if (a) throw a.error;
          }
        }
      })();
    });
  }
  setDegradationPreference(e) {
    return m(this, void 0, void 0, function* () {
      if (this.degradationPreference = e, this.sender) try {
        this.log.debug("setting degradationPreference to ".concat(e), this.logContext);
        const t = this.sender.getParameters();
        t.degradationPreference = e, this.sender.setParameters(t);
      } catch (t) {
        this.log.warn("failed to set degradationPreference", Object.assign({ error: t }, this.logContext));
      }
    });
  }
  addSimulcastTrack(e, t) {
    if (this.simulcastCodecs.has(e)) {
      this.log.error("".concat(e, " already added, skipping adding simulcast codec"), this.logContext);
      return;
    }
    const i = { codec: e, mediaStreamTrack: this.mediaStreamTrack.clone(), sender: void 0, encodings: t };
    return this.simulcastCodecs.set(e, i), i;
  }
  setSimulcastTrackSender(e, t) {
    const i = this.simulcastCodecs.get(e);
    i && (i.sender = t, setTimeout(() => {
      this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs);
    }, Wl));
  }
  setPublishingCodecs(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s, r, o, a, c;
      if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), { codecs: e, currentCodec: this.codec })), !this.codec && e.length > 0) return yield this.setPublishingLayers(Pe(e[0].codec), e[0].qualities), [];
      this.subscribedCodecs = e;
      const d = [];
      try {
        for (t = true, i = je(e); s = yield i.next(), r = s.done, !r; t = true) {
          c = s.value, t = false;
          const l = c;
          if (!this.codec || this.codec === l.codec) yield this.setPublishingLayers(Pe(l.codec), l.qualities);
          else {
            const u = this.simulcastCodecs.get(l.codec);
            if (this.log.debug("try setPublishingCodec for ".concat(l.codec), Object.assign(Object.assign({}, this.logContext), { simulcastCodecInfo: u })), !u || !u.sender) {
              for (const h of l.qualities) if (h.enabled) {
                d.push(l.codec);
                break;
              }
            } else u.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(l.codec), this.logContext), yield cr(u.sender, u.encodings, l.qualities, this.senderLock, Pe(l.codec), this.log, this.logContext));
          }
        }
      } catch (l) {
        o = { error: l };
      } finally {
        try {
          !t && !r && (a = i.return) && (yield a.call(i));
        } finally {
          if (o) throw o.error;
        }
      }
      return d;
    });
  }
  setPublishingLayers(e, t) {
    return m(this, void 0, void 0, function* () {
      if (this.optimizeForPerformance) {
        this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), { qualities: t }));
        return;
      }
      this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), { qualities: t })), !(!this.sender || !this.encodings) && (yield cr(this.sender, this.encodings, t, this.senderLock, e, this.log, this.logContext));
    });
  }
  prioritizePerformance() {
    return m(this, void 0, void 0, function* () {
      if (!this.sender) throw new Error("sender not found");
      const e = yield this.senderLock.lock();
      try {
        this.optimizeForPerformance = true;
        const t = this.sender.getParameters();
        t.encodings = t.encodings.map((i, s) => {
          var r;
          return Object.assign(Object.assign({}, i), { active: s === 0, scaleResolutionDownBy: Math.max(1, Math.ceil(((r = this.mediaStreamTrack.getSettings().height) !== null && r !== void 0 ? r : 360) / 360)), scalabilityMode: s === 0 && Pe(this.codec) ? "L1T3" : void 0, maxFramerate: s === 0 ? 15 : 0, maxBitrate: s === 0 ? i.maxBitrate : 0 });
        }), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { encodings: t.encodings })), this.encodings = t.encodings, yield this.sender.setParameters(t);
      } catch (t) {
        this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { error: t })), this.optimizeForPerformance = false;
      } finally {
        e();
      }
    });
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), qa() && this.isInBackground && this.source === T.Source.Camera && (this._mediaStreamTrack.enabled = false);
    });
  }
}
function cr(n, e, t, i, s, r, o) {
  return m(this, void 0, void 0, function* () {
    const a = yield i.lock();
    r.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, o), { sender: n, qualities: t, senderEncodings: e }));
    try {
      const c = n.getParameters(), { encodings: d } = c;
      if (!d) return;
      if (d.length !== e.length) {
        r.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, o), { encodings: d, senderEncodings: e }));
        return;
      }
      let l = false;
      s && t.some((p) => p.enabled) && t.forEach((p) => p.enabled = true), d.forEach((h, p) => {
        var b;
        let g = (b = h.rid) !== null && b !== void 0 ? b : "";
        g === "" && (g = "q");
        const R = $a(g), k = t.find((I) => I.quality === R);
        k && h.active !== k.enabled && (l = true, h.active = k.enabled, r.debug("setting layer ".concat(k.quality, " to ").concat(h.active ? "enabled" : "disabled"), o), at() && (k.enabled ? (h.scaleResolutionDownBy = e[p].scaleResolutionDownBy, h.maxBitrate = e[p].maxBitrate, h.maxFrameRate = e[p].maxFrameRate) : (h.scaleResolutionDownBy = 4, h.maxBitrate = 10, h.maxFrameRate = 2)));
      }), l && (c.encodings = d, r.debug("setting encodings", Object.assign(Object.assign({}, o), { encodings: c.encodings })), yield n.setParameters(c));
    } finally {
      a();
    }
  });
}
function $a(n) {
  switch (n) {
    case "f":
      return ve.HIGH;
    case "h":
      return ve.MEDIUM;
    case "q":
      return ve.LOW;
    default:
      return ve.HIGH;
  }
}
function dr(n, e, t, i) {
  if (!t) return [new ze({ quality: ve.HIGH, width: n, height: e, bitrate: 0, ssrc: 0 })];
  if (i) {
    const s = t[0].scalabilityMode, r = new Xa(s), o = [], a = r.suffix == "h" ? 1.5 : 2, c = r.suffix == "h" ? 2 : 3;
    for (let d = 0; d < r.spatial; d += 1) o.push(new ze({ quality: Math.min(ve.HIGH, r.spatial - 1) - d, width: Math.ceil(n / Math.pow(a, d)), height: Math.ceil(e / Math.pow(a, d)), bitrate: t[0].maxBitrate ? Math.ceil(t[0].maxBitrate / Math.pow(c, d)) : 0, ssrc: 0 }));
    return o;
  }
  return t.map((s) => {
    var r, o, a;
    const c = (r = s.scaleResolutionDownBy) !== null && r !== void 0 ? r : 1;
    let d = $a((o = s.rid) !== null && o !== void 0 ? o : "");
    return new ze({ quality: d, width: Math.ceil(n / c), height: Math.ceil(e / c), bitrate: (a = s.maxBitrate) !== null && a !== void 0 ? a : 0, ssrc: 0 });
  });
}
const lr = "_lossy", ur = "_reliable", Kl = 2 * 1e3, $i = "leave-reconnect", Gl = 3e4, Hl = 8 * 1024, Jl = 256 * 1024;
var be;
(function(n) {
  n[n.New = 0] = "New", n[n.Connected = 1] = "Connected", n[n.Disconnected = 2] = "Disconnected", n[n.Reconnecting = 3] = "Reconnecting", n[n.Closed = 4] = "Closed";
})(be || (be = {}));
class zl extends Ae.EventEmitter {
  get isClosed() {
    return this._isClosed;
  }
  get pendingReconnect() {
    return !!this.reconnectTimeout;
  }
  constructor(e) {
    var t;
    super(), this.options = e, this.rtcConfig = {}, this.peerConnectionTimeout = Zn.peerConnectionTimeout, this.fullReconnectOnNext = false, this.latestRemoteOfferId = 0, this.subscriberPrimary = false, this.pcState = be.New, this._isClosed = true, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = false, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = false, this.log = U, this.reliableDataSequence = 1, this.reliableMessageBuffer = new Xs(), this.reliableReceivedState = new pl(Gl), this.lossyDataStatCurrentBytes = 0, this.lossyDataStatByterate = 0, this.lossyDataDropCount = 0, this.midToTrackId = {}, this.isWaitingForNetworkReconnect = false, this.handleDataChannel = (i) => m(this, [i], void 0, function(s) {
      var r = this;
      let { channel: o } = s;
      return (function* () {
        if (o) {
          if (o.label === ur) r.reliableDCSub = o;
          else if (o.label === lr) r.lossyDCSub = o;
          else return;
          r.log.debug("on data channel ".concat(o.id, ", ").concat(o.label), r.logContext), o.onmessage = r.handleDataMessage;
        }
      })();
    }), this.handleDataMessage = (i) => m(this, void 0, void 0, function* () {
      var s, r, o, a, c;
      const d = yield this.dataProcessLock.lock();
      try {
        let l;
        if (i.data instanceof ArrayBuffer) l = i.data;
        else if (i.data instanceof Blob) l = yield i.data.arrayBuffer();
        else {
          this.log.error("unsupported data type", Object.assign(Object.assign({}, this.logContext), { data: i.data }));
          return;
        }
        const u = de.fromBinary(new Uint8Array(l));
        if (u.sequence > 0 && u.participantSid !== "") {
          const h = this.reliableReceivedState.get(u.participantSid);
          if (h && u.sequence <= h) return;
          this.reliableReceivedState.set(u.participantSid, u.sequence);
        }
        if (((s = u.value) === null || s === void 0 ? void 0 : s.case) === "speaker") this.emit(_.ActiveSpeakersUpdate, u.value.value.speakers);
        else if (((r = u.value) === null || r === void 0 ? void 0 : r.case) === "encryptedPacket") {
          if (!this.e2eeManager) {
            this.log.error("Received encrypted packet but E2EE not set up", this.logContext);
            return;
          }
          const h = yield (o = this.e2eeManager) === null || o === void 0 ? void 0 : o.handleEncryptedData(u.value.value.encryptedValue, u.value.value.iv, u.participantIdentity, u.value.value.keyIndex), p = Ur.fromBinary(h.payload), b = new de({ value: p.value, participantIdentity: u.participantIdentity, participantSid: u.participantSid });
          ((a = b.value) === null || a === void 0 ? void 0 : a.case) === "user" && hr(b, b.value.value), this.emit(_.DataPacketReceived, b, u.value.value.encryptionType);
        } else ((c = u.value) === null || c === void 0 ? void 0 : c.case) === "user" && hr(u, u.value.value), this.emit(_.DataPacketReceived, u, te.NONE);
      } finally {
        d();
      }
    }), this.handleDataError = (i) => {
      const r = i.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
      if (i instanceof ErrorEvent && i.error) {
        const { error: o } = i.error;
        this.log.error("DataChannel error on ".concat(r, ": ").concat(i.message), Object.assign(Object.assign({}, this.logContext), { error: o }));
      } else this.log.error("Unknown DataChannel error on ".concat(r), Object.assign(Object.assign({}, this.logContext), { event: i }));
    }, this.handleBufferedAmountLow = (i) => {
      const r = i.currentTarget.maxRetransmits === 0 ? j.LOSSY : j.RELIABLE;
      this.updateAndEmitDCBufferStatus(r);
    }, this.handleDisconnect = (i, s) => {
      if (this._isClosed) return;
      this.log.warn("".concat(i, " disconnected"), this.logContext), this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
      const r = (c) => {
        this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(c, "ms. giving up"), this.logContext), this.emit(_.Disconnected), this.close();
      }, o = Date.now() - this.reconnectStart;
      let a = this.getNextRetryDelay({ elapsedMs: o, retryCount: this.reconnectAttempts });
      if (a === null) {
        r(o);
        return;
      }
      i === $i && (a = 0), this.log.debug("reconnecting in ".concat(a, "ms"), this.logContext), this.clearReconnectTimeout(), this.token && this.regionUrlProvider && this.regionUrlProvider.updateToken(this.token), this.reconnectTimeout = re.setTimeout(() => this.attemptReconnect(s).finally(() => this.reconnectTimeout = void 0), a);
    }, this.waitForRestarted = () => new Promise((i, s) => {
      this.pcState === be.Connected && i();
      const r = () => {
        this.off(_.Disconnected, o), i();
      }, o = () => {
        this.off(_.Restarted, r), s();
      };
      this.once(_.Restarted, r), this.once(_.Disconnected, o);
    }), this.updateAndEmitDCBufferStatus = (i) => {
      if (i === j.RELIABLE) {
        const r = this.dataChannelForKind(i);
        r && this.reliableMessageBuffer.alignBufferedAmount(r.bufferedAmount);
      }
      const s = this.isBufferStatusLow(i);
      typeof s < "u" && s !== this.dcBufferStatus.get(i) && (this.dcBufferStatus.set(i, s), this.emit(_.DCBufferStatusChanged, s, i));
    }, this.isBufferStatusLow = (i) => {
      const s = this.dataChannelForKind(i);
      if (s) return s.bufferedAmount <= s.bufferedAmountLowThreshold;
    }, this.handleBrowserOnLine = () => m(this, void 0, void 0, function* () {
      !this.url || !(yield fetch(Wt(this.url), { method: "HEAD" }).then((s) => s.ok).catch(() => false)) || (this.log.info("detected network reconnected"), (this.client.currentState === G.RECONNECTING || this.isWaitingForNetworkReconnect && this.client.currentState === G.CONNECTED) && (this.clearReconnectTimeout(), this.attemptReconnect(it.RR_SIGNAL_DISCONNECTED), this.isWaitingForNetworkReconnect = false));
    }), this.handleBrowserOffline = () => m(this, void 0, void 0, function* () {
      if (this.url) try {
        yield Promise.race([fetch(Wt(this.url), { method: "HEAD" }), ae(4e3).then(() => Promise.reject())]);
      } catch {
        window.navigator.onLine === false && (this.log.info("detected network interruption"), this.isWaitingForNetworkReconnect = true);
      }
    }), this.log = Ve((t = e.loggerName) !== null && t !== void 0 ? t : _e.Engine), this.loggerOptions = { loggerName: e.loggerName, loggerContextCb: () => this.logContext }, this.client = new Qn(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.closingLock = new le(), this.dataProcessLock = new le(), this.dcBufferStatus = /* @__PURE__ */ new Map([[j.LOSSY, true], [j.RELIABLE, true]]), this.client.onParticipantUpdate = (i) => this.emit(_.ParticipantUpdate, i), this.client.onConnectionQuality = (i) => this.emit(_.ConnectionQualityUpdate, i), this.client.onRoomUpdate = (i) => this.emit(_.RoomUpdate, i), this.client.onSubscriptionError = (i) => this.emit(_.SubscriptionError, i), this.client.onSubscriptionPermissionUpdate = (i) => this.emit(_.SubscriptionPermissionUpdate, i), this.client.onSpeakersChanged = (i) => this.emit(_.SpeakersChanged, i), this.client.onStreamStateUpdate = (i) => this.emit(_.StreamStateChanged, i), this.client.onRequestResponse = (i) => this.emit(_.SignalRequestResponse, i);
  }
  get logContext() {
    var e, t, i, s, r, o;
    return { room: (t = (e = this.latestJoinResponse) === null || e === void 0 ? void 0 : e.room) === null || t === void 0 ? void 0 : t.name, roomID: (s = (i = this.latestJoinResponse) === null || i === void 0 ? void 0 : i.room) === null || s === void 0 ? void 0 : s.sid, participant: (o = (r = this.latestJoinResponse) === null || r === void 0 ? void 0 : r.participant) === null || o === void 0 ? void 0 : o.identity, pID: this.participantSid };
  }
  join(e, t, i, s) {
    return m(this, arguments, void 0, function(r, o, a, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      return (function* () {
        d.url = r, d.token = o, d.signalOpts = a, d.maxJoinAttempts = a.maxRetries;
        try {
          d.joinAttempts += 1, d.setupSignalClientCallbacks();
          const u = yield d.client.join(r, o, a, c, l);
          return d._isClosed = false, d.latestJoinResponse = u, d.subscriberPrimary = u.subscriberPrimary, d.pcManager || (yield d.configure(u, !l)), (!d.subscriberPrimary || u.fastPublish) && d.negotiate().catch((h) => {
            U.error(h, d.logContext);
          }), d.registerOnLineListener(), d.clientConfiguration = u.clientConfiguration, d.emit(_.SignalConnected, u), u;
        } catch (u) {
          if (u instanceof L) {
            if (u.reason === H.ServerUnreachable) {
              if (d.log.warn("Couldn't connect to server, attempt ".concat(d.joinAttempts, " of ").concat(d.maxJoinAttempts), d.logContext), d.joinAttempts < d.maxJoinAttempts) return d.join(r, o, a, c, l);
            } else if (u.reason === H.ServiceNotFound) return d.log.warn("Initial connection failed: ".concat(u.message, " \u2013 Retrying")), d.join(r, o, a, c, true);
          }
          throw u;
        }
      })();
    });
  }
  close() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.closingLock.lock();
      if (this.isClosed) {
        e();
        return;
      }
      try {
        this._isClosed = true, this.joinAttempts = 0, this.emit(_.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), this.cleanupLossyDataStats(), yield this.cleanupPeerConnections(), yield this.cleanupClient();
      } finally {
        e();
      }
    });
  }
  cleanupPeerConnections() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.pcManager) === null || e === void 0 ? void 0 : e.close(), this.pcManager = void 0;
      const t = (i) => {
        i && (i.close(), i.onbufferedamountlow = null, i.onclose = null, i.onclosing = null, i.onerror = null, i.onmessage = null, i.onopen = null);
      };
      t(this.lossyDC), t(this.lossyDCSub), t(this.reliableDC), t(this.reliableDCSub), this.lossyDC = void 0, this.lossyDCSub = void 0, this.reliableDC = void 0, this.reliableDCSub = void 0, this.reliableMessageBuffer = new Xs(), this.reliableDataSequence = 1, this.reliableReceivedState.clear();
    });
  }
  cleanupLossyDataStats() {
    this.lossyDataStatByterate = 0, this.lossyDataStatCurrentBytes = 0, this.lossyDataStatInterval && (clearInterval(this.lossyDataStatInterval), this.lossyDataStatInterval = void 0), this.lossyDataDropCount = 0;
  }
  cleanupClient() {
    return m(this, void 0, void 0, function* () {
      yield this.client.close(), this.client.resetCallbacks();
    });
  }
  addTrack(e) {
    if (this.pendingTrackResolvers[e.cid]) throw new Be("a track with the same ID has already been published");
    return new Promise((t, i) => {
      const s = setTimeout(() => {
        delete this.pendingTrackResolvers[e.cid], i(L.timeout("publication of local track timed out, no response from server"));
      }, 1e4);
      this.pendingTrackResolvers[e.cid] = { resolve: (r) => {
        clearTimeout(s), t(r);
      }, reject: () => {
        clearTimeout(s), i(new Error("Cancelled publication by calling unpublish"));
      } }, this.client.sendAddTrack(e);
    });
  }
  removeTrack(e) {
    if (e.track && this.pendingTrackResolvers[e.track.id]) {
      const { reject: t } = this.pendingTrackResolvers[e.track.id];
      t && t(), delete this.pendingTrackResolvers[e.track.id];
    }
    try {
      return this.pcManager.removeTrack(e), true;
    } catch (t) {
      this.log.warn("failed to remove track", Object.assign(Object.assign({}, this.logContext), { error: t }));
    }
    return false;
  }
  updateMuteStatus(e, t) {
    this.client.sendMuteTrack(e, t);
  }
  get dataSubscriberReadyState() {
    var e;
    return (e = this.reliableDCSub) === null || e === void 0 ? void 0 : e.readyState;
  }
  getConnectedServerAddress() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.pcManager) === null || e === void 0 ? void 0 : e.getConnectedAddress();
    });
  }
  setRegionUrlProvider(e) {
    this.regionUrlProvider = e;
  }
  configure(e, t) {
    return m(this, void 0, void 0, function* () {
      var i, s;
      if (this.pcManager && this.pcManager.currentState !== Q.NEW) return;
      this.participantSid = (i = e.participant) === null || i === void 0 ? void 0 : i.sid;
      const r = this.makeRTCConfiguration(e);
      this.pcManager = new Cl(r, t ? "publisher-only" : e.subscriberPrimary ? "subscriber-primary" : "publisher-primary", this.loggerOptions), this.emit(_.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (o, a) => {
        this.client.sendIceCandidate(o, a);
      }, this.pcManager.onPublisherOffer = (o, a) => {
        this.client.sendOffer(o, a);
      }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (o, a, c) => m(this, void 0, void 0, function* () {
        if (this.log.debug("primary PC state changed ".concat(o), this.logContext), ["closed", "disconnected", "failed"].includes(a) && (this.publisherConnectionPromise = void 0), o === Q.CONNECTED) {
          const u = this.pcState === be.New;
          this.pcState = be.Connected, u && this.emit(_.Connected, e);
        } else o === Q.FAILED && (this.pcState === be.Connected || this.pcState === be.Reconnecting) && (this.pcState = be.Disconnected, this.handleDisconnect("peerconnection failed", c === "failed" ? it.RR_SUBSCRIBER_FAILED : it.RR_PUBLISHER_FAILED));
        const d = this.client.isDisconnected || this.client.currentState === G.RECONNECTING, l = [Q.FAILED, Q.CLOSING, Q.CLOSED].includes(o);
        d && l && !this._isClosed && this.emit(_.Offline);
      }), this.pcManager.onTrack = (o) => {
        o.streams.length !== 0 && this.emit(_.MediaTrackAdded, o.track, o.streams[0], o.receiver);
      }, Ql((s = e.serverInfo) === null || s === void 0 ? void 0 : s.protocol) || this.createDataChannels();
    });
  }
  setupSignalClientCallbacks() {
    this.client.onAnswer = (e, t, i) => m(this, void 0, void 0, function* () {
      this.pcManager && (this.log.debug("received server answer", Object.assign(Object.assign({}, this.logContext), { RTCSdpType: e.type, sdp: e.sdp, midToTrackId: i })), this.midToTrackId = i, yield this.pcManager.setPublisherAnswer(e, t));
    }), this.client.onTrickle = (e, t) => {
      this.pcManager && (this.log.debug("got ICE candidate from peer", Object.assign(Object.assign({}, this.logContext), { candidate: e, target: t })), this.pcManager.addIceCandidate(e, t));
    }, this.client.onOffer = (e, t, i) => m(this, void 0, void 0, function* () {
      if (this.latestRemoteOfferId = t, !this.pcManager) return;
      this.midToTrackId = i;
      const s = yield this.pcManager.createSubscriberAnswerFromOffer(e, t);
      s && this.client.sendAnswer(s, t);
    }), this.client.onLocalTrackPublished = (e) => {
      var t;
      if (this.log.debug("received trackPublishedResponse", Object.assign(Object.assign({}, this.logContext), { cid: e.cid, track: (t = e.track) === null || t === void 0 ? void 0 : t.sid })), !this.pendingTrackResolvers[e.cid]) {
        this.log.error("missing track resolver for ".concat(e.cid), Object.assign(Object.assign({}, this.logContext), { cid: e.cid }));
        return;
      }
      const { resolve: i } = this.pendingTrackResolvers[e.cid];
      delete this.pendingTrackResolvers[e.cid], i(e.track);
    }, this.client.onLocalTrackUnpublished = (e) => {
      this.emit(_.LocalTrackUnpublished, e);
    }, this.client.onLocalTrackSubscribed = (e) => {
      this.emit(_.LocalTrackSubscribed, e);
    }, this.client.onTokenRefresh = (e) => {
      var t;
      this.token = e, (t = this.regionUrlProvider) === null || t === void 0 || t.updateToken(e);
    }, this.client.onRemoteMuteChanged = (e, t) => {
      this.emit(_.RemoteMute, e, t);
    }, this.client.onSubscribedQualityUpdate = (e) => {
      this.emit(_.SubscribedQualityUpdate, e);
    }, this.client.onRoomMoved = (e) => {
      var t;
      this.participantSid = (t = e.participant) === null || t === void 0 ? void 0 : t.sid, this.latestJoinResponse && (this.latestJoinResponse.room = e.room), this.emit(_.RoomMoved, e);
    }, this.client.onMediaSectionsRequirement = (e) => {
      var t, i;
      const s = { direction: "recvonly" };
      for (let r = 0; r < e.numAudios; r++) (t = this.pcManager) === null || t === void 0 || t.addPublisherTransceiverOfKind("audio", s);
      for (let r = 0; r < e.numVideos; r++) (i = this.pcManager) === null || i === void 0 || i.addPublisherTransceiverOfKind("video", s);
      this.negotiate();
    }, this.client.onClose = () => {
      this.handleDisconnect("signal", it.RR_SIGNAL_DISCONNECTED);
    }, this.client.onLeave = (e) => {
      switch (this.log.debug("client leave request", Object.assign(Object.assign({}, this.logContext), { reason: e == null ? void 0 : e.reason })), e.regions && this.regionUrlProvider && (this.log.debug("updating regions", this.logContext), this.regionUrlProvider.setServerReportedRegions({ updatedAtInMs: Date.now(), maxAgeInMs: za, regionSettings: e.regions })), e.action) {
        case gt.DISCONNECT:
          this.emit(_.Disconnected, e == null ? void 0 : e.reason), this.close();
          break;
        case gt.RECONNECT:
          this.fullReconnectOnNext = true, this.handleDisconnect($i);
          break;
        case gt.RESUME:
          this.handleDisconnect($i);
      }
    };
  }
  makeRTCConfiguration(e) {
    var t;
    const i = Object.assign({}, this.rtcConfig);
    if (!((t = this.signalOpts) === null || t === void 0) && t.e2eeEnabled && (this.log.debug("E2EE - setting up transports with insertable streams", this.logContext), i.encodedInsertableStreams = true), e.iceServers && !i.iceServers) {
      const s = [];
      e.iceServers.forEach((r) => {
        const o = { urls: r.urls };
        r.username && (o.username = r.username), r.credential && (o.credential = r.credential), s.push(o);
      }), i.iceServers = s;
    }
    return e.clientConfiguration && e.clientConfiguration.forceRelay === Ft.ENABLED && (i.iceTransportPolicy = "relay"), i.sdpSemantics = "unified-plan", i.continualGatheringPolicy = "gather_continually", i;
  }
  createDataChannels() {
    this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null, this.lossyDC.onerror = null), this.reliableDC && (this.reliableDC.onmessage = null, this.reliableDC.onerror = null), this.lossyDC = this.pcManager.createPublisherDataChannel(lr, { ordered: false, maxRetransmits: 0 }), this.reliableDC = this.pcManager.createPublisherDataChannel(ur, { ordered: true }), this.lossyDC.onmessage = this.handleDataMessage, this.reliableDC.onmessage = this.handleDataMessage, this.lossyDC.onerror = this.handleDataError, this.reliableDC.onerror = this.handleDataError, this.lossyDC.bufferedAmountLowThreshold = 65535, this.reliableDC.bufferedAmountLowThreshold = 65535, this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow, this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow, this.cleanupLossyDataStats(), this.lossyDataStatInterval = setInterval(() => {
      this.lossyDataStatByterate = this.lossyDataStatCurrentBytes, this.lossyDataStatCurrentBytes = 0;
      const e = this.dataChannelForKind(j.LOSSY);
      if (e) {
        const t = this.lossyDataStatByterate / 10;
        e.bufferedAmountLowThreshold = Math.min(Math.max(t, Hl), Jl);
      }
    }, 1e3));
  }
  createSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (bn()) return yield this.createTransceiverRTCRtpSender(e, t, i);
      if (yn()) return this.log.warn("using add-track fallback", this.logContext), yield this.createRTCRtpSender(e.mediaStreamTrack);
      throw new $("Required webRTC APIs not supported on this device");
    });
  }
  createSimulcastSender(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      if (bn()) return this.createSimulcastTransceiverSender(e, t, i, s);
      if (yn()) return this.log.debug("using add-track fallback", this.logContext), this.createRTCRtpSender(e.mediaStreamTrack);
      throw new $("Cannot stream on this device");
    });
  }
  createTransceiverRTCRtpSender(e, t, i) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new $("publisher is closed");
      const s = [];
      e.mediaStream && s.push(e.mediaStream), Ze(e) && (e.codec = t.videoCodec);
      const r = { direction: "sendonly", streams: s };
      return i && (r.sendEncodings = i), (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, r)).sender;
    });
  }
  createSimulcastTransceiverSender(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new $("publisher is closed");
      const r = { direction: "sendonly" };
      s && (r.sendEncodings = s);
      const o = yield this.pcManager.addPublisherTransceiver(t.mediaStreamTrack, r);
      if (i.videoCodec) return e.setSimulcastTrackSender(i.videoCodec, o.sender), o.sender;
    });
  }
  createRTCRtpSender(e) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new $("publisher is closed");
      return this.pcManager.addPublisherTrack(e);
    });
  }
  attemptReconnect(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s;
      if (!this._isClosed) {
        if (this.attemptingReconnect) {
          U.warn("already attempting reconnect, returning early", this.logContext);
          return;
        }
        (((t = this.clientConfiguration) === null || t === void 0 ? void 0 : t.resumeConnection) === Ft.DISABLED || ((s = (i = this.pcManager) === null || i === void 0 ? void 0 : i.currentState) !== null && s !== void 0 ? s : Q.NEW) === Q.NEW) && (this.fullReconnectOnNext = true);
        try {
          this.attemptingReconnect = true, this.fullReconnectOnNext ? yield this.restartConnection() : yield this.resumeConnection(e), this.clearPendingReconnect(), this.fullReconnectOnNext = false;
        } catch (r) {
          this.reconnectAttempts += 1;
          let o = true;
          r instanceof $ ? (this.log.debug("received unrecoverable error", Object.assign(Object.assign({}, this.logContext), { error: r })), o = false) : r instanceof lt || (this.fullReconnectOnNext = true), o ? this.handleDisconnect("reconnect", it.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up"), this.logContext), this.emit(_.Disconnected), yield this.close());
        } finally {
          this.attemptingReconnect = false;
        }
      }
    });
  }
  getNextRetryDelay(e) {
    try {
      return this.reconnectPolicy.nextRetryDelayInMs(e);
    } catch (t) {
      this.log.warn("encountered error in reconnect policy", Object.assign(Object.assign({}, this.logContext), { error: t }));
    }
    return null;
  }
  restartConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s;
      try {
        if (!this.url || !this.token) throw new $("could not reconnect, url or token not saved");
        this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts), this.logContext), this.emit(_.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
        let r;
        try {
          if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present", this.logContext), new lt();
          r = yield this.join(e ?? this.url, this.token, this.signalOpts, void 0, !this.options.singlePeerConnection);
        } catch (o) {
          throw o instanceof L && o.reason === H.NotAllowed ? new $("could not reconnect, token might be expired") : new lt();
        }
        if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
        if (this.client.setReconnected(), this.emit(_.SignalRestarted, r), yield this.waitForPCReconnected(), this.client.currentState !== G.CONNECTED) throw new lt("Signal connection got severed during reconnect");
        (t = this.regionUrlProvider) === null || t === void 0 || t.resetAttempts(), this.emit(_.Restarted);
      } catch (r) {
        const o = yield (i = this.regionUrlProvider) === null || i === void 0 ? void 0 : i.getNextBestRegionUrl();
        if (o) {
          yield this.restartConnection(o);
          return;
        } else throw (s = this.regionUrlProvider) === null || s === void 0 || s.resetAttempts(), r;
      }
    });
  }
  resumeConnection(e) {
    return m(this, void 0, void 0, function* () {
      var t;
      if (!this.url || !this.token) throw new $("could not reconnect, url or token not saved");
      if (!this.pcManager) throw new $("publisher and subscriber connections unset");
      this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts), this.logContext), this.emit(_.Resuming);
      let i;
      try {
        this.setupSignalClientCallbacks(), i = yield this.client.reconnect(this.url, this.token, this.participantSid, e);
      } catch (s) {
        let r = "";
        throw s instanceof Error && (r = s.message, this.log.error(s.message, Object.assign(Object.assign({}, this.logContext), { error: s }))), s instanceof L && s.reason === H.NotAllowed ? new $("could not reconnect, token might be expired") : s instanceof L && s.reason === H.LeaveRequest ? s : new lt(r);
      }
      if (this.emit(_.SignalResumed), i) {
        const s = this.makeRTCConfiguration(i);
        this.pcManager.updateConfiguration(s), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = i.serverInfo);
      } else this.log.warn("Did not receive reconnect response", this.logContext);
      if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
      if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== G.CONNECTED) throw new lt("Signal connection got severed during reconnect");
      this.client.setReconnected(), ((t = this.reliableDC) === null || t === void 0 ? void 0 : t.readyState) === "open" && this.reliableDC.id === null && this.createDataChannels(), (i == null ? void 0 : i.lastMessageSeq) && this.resendReliableMessagesForResume(i.lastMessageSeq), this.emit(_.Resumed);
    });
  }
  waitForPCInitialConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new $("PC manager is closed");
      yield this.pcManager.ensurePCTransportConnection(t, e);
    });
  }
  waitForPCReconnected() {
    return m(this, void 0, void 0, function* () {
      this.pcState = be.Reconnecting, this.log.debug("waiting for peer connection to reconnect", this.logContext);
      try {
        if (yield ae(Kl), !this.pcManager) throw new $("PC manager is closed");
        yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = be.Connected;
      } catch (e) {
        throw this.pcState = be.Disconnected, L.internal("could not establish PC connection, ".concat(e.message));
      }
    });
  }
  publishRpcResponse(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      const r = new de({ destinationIdentities: [e], kind: j.RELIABLE, value: { case: "rpcResponse", value: new Un({ requestId: t, value: s ? { case: "error", value: s.toProto() } : { case: "payload", value: i ?? "" } }) } });
      yield this.sendDataPacket(r, j.RELIABLE);
    });
  }
  publishRpcAck(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new de({ destinationIdentities: [e], kind: j.RELIABLE, value: { case: "rpcAck", value: new Ln({ requestId: t }) } });
      yield this.sendDataPacket(i, j.RELIABLE);
    });
  }
  sendDataPacket(e, t) {
    return m(this, void 0, void 0, function* () {
      if (yield this.ensurePublisherConnected(t), this.e2eeManager && this.e2eeManager.isDataChannelEncryptionEnabled) {
        const r = nl(e);
        if (r) {
          const o = yield this.e2eeManager.encryptData(r.toBinary());
          e.value = { case: "encryptedPacket", value: new Lr({ encryptedValue: o.payload, iv: o.iv, keyIndex: o.keyIndex }) };
        }
      }
      t === j.RELIABLE && (e.sequence = this.reliableDataSequence, this.reliableDataSequence += 1);
      const i = e.toBinary(), s = this.dataChannelForKind(t);
      if (s) {
        if (t === j.RELIABLE) yield this.waitForBufferStatusLow(t), this.reliableMessageBuffer.push({ data: i, sequence: e.sequence });
        else {
          if (!this.isBufferStatusLow(t)) {
            this.lossyDataDropCount += 1, this.lossyDataDropCount % 100 === 0 && this.log.warn("dropping lossy data channel messages, total dropped: ".concat(this.lossyDataDropCount), this.logContext);
            return;
          }
          this.lossyDataStatCurrentBytes += i.byteLength;
        }
        if (this.attemptingReconnect) return;
        s.send(i);
      }
      this.updateAndEmitDCBufferStatus(t);
    });
  }
  resendReliableMessagesForResume(e) {
    return m(this, void 0, void 0, function* () {
      yield this.ensurePublisherConnected(j.RELIABLE);
      const t = this.dataChannelForKind(j.RELIABLE);
      t && (this.reliableMessageBuffer.popToSequence(e), this.reliableMessageBuffer.getAll().forEach((i) => {
        t.send(i.data);
      })), this.updateAndEmitDCBufferStatus(j.RELIABLE);
    });
  }
  waitForBufferStatusLow(e) {
    return new me((t, i) => m(this, void 0, void 0, function* () {
      if (this.isBufferStatusLow(e)) t();
      else {
        const s = () => i(new $("engine closed"));
        for (this.once(_.Closing, s); !this.dcBufferStatus.get(e); ) yield ae(10);
        this.off(_.Closing, s), t();
      }
    }));
  }
  ensureDataTransportConnected(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.subscriberPrimary;
      return (function* () {
        var r;
        if (!i.pcManager) throw new $("PC manager is closed");
        const o = s ? i.pcManager.subscriber : i.pcManager.publisher, a = s ? "Subscriber" : "Publisher";
        if (!o) throw L.internal("".concat(a, " connection not set"));
        let c = false;
        !s && !i.dataChannelForKind(t, s) && (i.createDataChannels(), c = true), !c && !s && !i.pcManager.publisher.isICEConnected && i.pcManager.publisher.getICEConnectionState() !== "checking" && (c = true), c && i.negotiate().catch((u) => {
          U.error(u, i.logContext);
        });
        const d = i.dataChannelForKind(t, s);
        if ((d == null ? void 0 : d.readyState) === "open") return;
        const l = (/* @__PURE__ */ new Date()).getTime() + i.peerConnectionTimeout;
        for (; (/* @__PURE__ */ new Date()).getTime() < l; ) {
          if (o.isICEConnected && ((r = i.dataChannelForKind(t, s)) === null || r === void 0 ? void 0 : r.readyState) === "open") return;
          yield ae(50);
        }
        throw L.internal("could not establish ".concat(a, " connection, state: ").concat(o.getICEConnectionState()));
      })();
    });
  }
  ensurePublisherConnected(e) {
    return m(this, void 0, void 0, function* () {
      this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e, false)), yield this.publisherConnectionPromise;
    });
  }
  verifyTransport() {
    return !(!this.pcManager || this.pcManager.currentState !== Q.CONNECTED || !this.client.ws || this.client.ws.readyState === WebSocket.CLOSED);
  }
  negotiate() {
    return m(this, void 0, void 0, function* () {
      return new me((e, t) => m(this, void 0, void 0, function* () {
        if (!this.pcManager) {
          t(new bt("PC manager is closed"));
          return;
        }
        this.pcManager.requirePublisher(), this.pcManager.publisher.getTransceivers().length == 0 && !this.lossyDC && !this.reliableDC && this.createDataChannels();
        const i = new AbortController(), s = () => {
          i.abort(), this.log.debug("engine disconnected while negotiation was ongoing", this.logContext), e();
        };
        this.isClosed && t(new bt("cannot negotiate on closed engine")), this.on(_.Closing, s), this.pcManager.publisher.once(St.RTPVideoPayloadTypes, (r) => {
          const o = /* @__PURE__ */ new Map();
          r.forEach((a) => {
            const c = a.codec.toLowerCase();
            Bd(c) && o.set(a.payload, c);
          }), this.emit(_.RTPVideoMapUpdate, o);
        });
        try {
          yield this.pcManager.negotiate(i), e();
        } catch (r) {
          r instanceof bt && (this.fullReconnectOnNext = true), this.handleDisconnect("negotiation", it.RR_UNKNOWN), r instanceof Error ? t(r) : t(new Error(String(r)));
        } finally {
          this.off(_.Closing, s);
        }
      }));
    });
  }
  dataChannelForKind(e, t) {
    if (t) {
      if (e === j.LOSSY) return this.lossyDCSub;
      if (e === j.RELIABLE) return this.reliableDCSub;
    } else {
      if (e === j.LOSSY) return this.lossyDC;
      if (e === j.RELIABLE) return this.reliableDC;
    }
  }
  sendSyncState(e, t) {
    var i, s, r, o;
    if (!this.pcManager) {
      this.log.warn("sync state cannot be sent without peer connection setup", this.logContext);
      return;
    }
    const a = this.pcManager.publisher.getLocalDescription(), c = this.pcManager.publisher.getRemoteDescription(), d = (i = this.pcManager.subscriber) === null || i === void 0 ? void 0 : i.getRemoteDescription(), l = (s = this.pcManager.subscriber) === null || s === void 0 ? void 0 : s.getLocalDescription(), u = (o = (r = this.signalOpts) === null || r === void 0 ? void 0 : r.autoSubscribe) !== null && o !== void 0 ? o : true, h = new Array(), p = new Array();
    e.forEach((b) => {
      b.isDesired !== u && h.push(b.trackSid), b.isEnabled || p.push(b.trackSid);
    }), this.client.sendSyncState(new qn({ answer: this.pcManager.mode === "publisher-only" ? c ? mt({ sdp: c.sdp, type: c.type }) : void 0 : l ? mt({ sdp: l.sdp, type: l.type }) : void 0, offer: this.pcManager.mode === "publisher-only" ? a ? mt({ sdp: a.sdp, type: a.type }) : void 0 : d ? mt({ sdp: d.sdp, type: d.type }) : void 0, subscription: new Ei({ trackSids: h, subscribe: !u, participantTracks: [] }), publishTracks: Cd(t), dataChannels: this.dataChannelsInfo(), trackSidsDisabled: p, datachannelReceiveStates: this.reliableReceivedState.map((b, g) => new ia({ publisherSid: g, lastSeq: b })) }));
  }
  failNext() {
    this.shouldFailNext = true;
  }
  dataChannelsInfo() {
    const e = [], t = (i, s) => {
      (i == null ? void 0 : i.id) !== void 0 && i.id !== null && e.push(new na({ label: i.label, id: i.id, target: s }));
    };
    return t(this.dataChannelForKind(j.LOSSY), Ee.PUBLISHER), t(this.dataChannelForKind(j.RELIABLE), Ee.PUBLISHER), t(this.dataChannelForKind(j.LOSSY, true), Ee.SUBSCRIBER), t(this.dataChannelForKind(j.RELIABLE, true), Ee.SUBSCRIBER), e;
  }
  clearReconnectTimeout() {
    this.reconnectTimeout && re.clearTimeout(this.reconnectTimeout);
  }
  clearPendingReconnect() {
    this.clearReconnectTimeout(), this.reconnectAttempts = 0;
  }
  registerOnLineListener() {
    pe() && (window.addEventListener("online", this.handleBrowserOnLine), window.addEventListener("offline", this.handleBrowserOffline));
  }
  deregisterOnLineListener() {
    pe() && (window.removeEventListener("online", this.handleBrowserOnLine), window.removeEventListener("offline", this.handleBrowserOffline));
  }
  getTrackIdForReceiver(e) {
    var t;
    const i = (t = this.pcManager) === null || t === void 0 ? void 0 : t.getMidForReceiver(e);
    if (i) {
      const s = Object.entries(this.midToTrackId).find((r) => {
        let [o] = r;
        return o === i;
      });
      if (s) return s[1];
    }
  }
}
function Ql(n) {
  return n !== void 0 && n > 13;
}
function hr(n, e) {
  const t = n.participantIdentity ? n.participantIdentity : e.participantIdentity;
  n.participantIdentity = t, e.participantIdentity = t;
  const i = n.destinationIdentities.length !== 0 ? n.destinationIdentities : e.destinationIdentities;
  n.destinationIdentities = i, e.destinationIdentities = i;
}
class Za {
  get info() {
    return this._info;
  }
  validateBytesReceived() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!(typeof this.totalByteSize != "number" || this.totalByteSize === 0)) {
      if (e && this.bytesReceived < this.totalByteSize) throw new ye("Not enough chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, only received ").concat(this.bytesReceived, " bytes"), ce.Incomplete);
      if (this.bytesReceived > this.totalByteSize) throw new ye("Extra chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, received ").concat(this.bytesReceived, " bytes"), ce.LengthExceeded);
    }
  }
  constructor(e, t, i, s) {
    this.reader = t, this.totalByteSize = i, this._info = e, this.bytesReceived = 0, this.outOfBandFailureRejectingFuture = s;
  }
}
class Yl extends Za {
  handleChunkReceived(e) {
    var t;
    this.bytesReceived += e.content.byteLength, this.validateBytesReceived();
    const i = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
    (t = this.onProgress) === null || t === void 0 || t.call(this, i);
  }
  [Symbol.asyncIterator]() {
    const e = this.reader.getReader();
    let t = new ke(), i = null, s = null;
    if (this.signal) {
      const o = this.signal;
      s = () => {
        var a;
        (a = t.reject) === null || a === void 0 || a.call(t, o.reason);
      }, o.addEventListener("abort", s), i = o;
    }
    const r = () => {
      e.releaseLock(), i && s && i.removeEventListener("abort", s), this.signal = void 0;
    };
    return { next: () => m(this, void 0, void 0, function* () {
      var o, a;
      try {
        const { done: c, value: d } = yield Promise.race([e.read(), t.promise, (a = (o = this.outOfBandFailureRejectingFuture) === null || o === void 0 ? void 0 : o.promise) !== null && a !== void 0 ? a : new Promise(() => {
        })]);
        return c ? (this.validateBytesReceived(true), { done: true, value: void 0 }) : (this.handleChunkReceived(d), { done: false, value: d.content });
      } catch (c) {
        throw r(), c;
      }
    }), return() {
      return m(this, void 0, void 0, function* () {
        return r(), { done: true, value: void 0 };
      });
    } };
  }
  withAbortSignal(e) {
    return this.signal = e, this;
  }
  readAll() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return (function* () {
        var i, s, r, o;
        let a = /* @__PURE__ */ new Set();
        const c = t.signal ? e.withAbortSignal(t.signal) : e;
        try {
          for (var d = true, l = je(c), u; u = yield l.next(), i = u.done, !i; d = true) {
            o = u.value, d = false;
            const h = o;
            a.add(h);
          }
        } catch (h) {
          s = { error: h };
        } finally {
          try {
            !d && !i && (r = l.return) && (yield r.call(l));
          } finally {
            if (s) throw s.error;
          }
        }
        return Array.from(a);
      })();
    });
  }
}
class Xl extends Za {
  constructor(e, t, i, s) {
    super(e, t, i, s), this.receivedChunks = /* @__PURE__ */ new Map();
  }
  handleChunkReceived(e) {
    var t;
    const i = ri(e.chunkIndex), s = this.receivedChunks.get(i);
    if (s && s.version > e.version) return;
    this.receivedChunks.set(i, e), this.bytesReceived += e.content.byteLength, this.validateBytesReceived();
    const r = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
    (t = this.onProgress) === null || t === void 0 || t.call(this, r);
  }
  [Symbol.asyncIterator]() {
    const e = this.reader.getReader(), t = new TextDecoder("utf-8", { fatal: true });
    let i = new ke(), s = null, r = null;
    if (this.signal) {
      const a = this.signal;
      r = () => {
        var c;
        (c = i.reject) === null || c === void 0 || c.call(i, a.reason);
      }, a.addEventListener("abort", r), s = a;
    }
    const o = () => {
      e.releaseLock(), s && r && s.removeEventListener("abort", r), this.signal = void 0;
    };
    return { next: () => m(this, void 0, void 0, function* () {
      var a, c;
      try {
        const { done: d, value: l } = yield Promise.race([e.read(), i.promise, (c = (a = this.outOfBandFailureRejectingFuture) === null || a === void 0 ? void 0 : a.promise) !== null && c !== void 0 ? c : new Promise(() => {
        })]);
        if (d) return this.validateBytesReceived(true), { done: true, value: void 0 };
        {
          this.handleChunkReceived(l);
          let u;
          try {
            u = t.decode(l.content);
          } catch (h) {
            throw new ye("Cannot decode datastream chunk ".concat(l.chunkIndex, " as text: ").concat(h), ce.DecodeFailed);
          }
          return { done: false, value: u };
        }
      } catch (d) {
        throw o(), d;
      }
    }), return() {
      return m(this, void 0, void 0, function* () {
        return o(), { done: true, value: void 0 };
      });
    } };
  }
  withAbortSignal(e) {
    return this.signal = e, this;
  }
  readAll() {
    return m(this, arguments, void 0, function() {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return (function* () {
        var i, s, r, o;
        let a = "";
        const c = t.signal ? e.withAbortSignal(t.signal) : e;
        try {
          for (var d = true, l = je(c), u; u = yield l.next(), i = u.done, !i; d = true) o = u.value, d = false, a += o;
        } catch (h) {
          s = { error: h };
        } finally {
          try {
            !d && !i && (r = l.return) && (yield r.call(l));
          } finally {
            if (s) throw s.error;
          }
        }
        return a;
      })();
    });
  }
}
class $l {
  constructor() {
    this.log = U, this.byteStreamControllers = /* @__PURE__ */ new Map(), this.textStreamControllers = /* @__PURE__ */ new Map(), this.byteStreamHandlers = /* @__PURE__ */ new Map(), this.textStreamHandlers = /* @__PURE__ */ new Map();
  }
  registerTextStreamHandler(e, t) {
    if (this.textStreamHandlers.has(e)) throw new ye('A text stream handler for topic "'.concat(e, '" has already been set.'), ce.HandlerAlreadyRegistered);
    this.textStreamHandlers.set(e, t);
  }
  unregisterTextStreamHandler(e) {
    this.textStreamHandlers.delete(e);
  }
  registerByteStreamHandler(e, t) {
    if (this.byteStreamHandlers.has(e)) throw new ye('A byte stream handler for topic "'.concat(e, '" has already been set.'), ce.HandlerAlreadyRegistered);
    this.byteStreamHandlers.set(e, t);
  }
  unregisterByteStreamHandler(e) {
    this.byteStreamHandlers.delete(e);
  }
  clearControllers() {
    this.byteStreamControllers.clear(), this.textStreamControllers.clear();
  }
  validateParticipantHasNoActiveDataStreams(e) {
    var t, i, s, r;
    const o = Array.from(this.textStreamControllers.entries()).filter((c) => c[1].sendingParticipantIdentity === e), a = Array.from(this.byteStreamControllers.entries()).filter((c) => c[1].sendingParticipantIdentity === e);
    if (o.length > 0 || a.length > 0) {
      const c = new ye("Participant ".concat(e, " unexpectedly disconnected in the middle of sending data"), ce.AbnormalEnd);
      for (const [d, l] of a) (i = (t = l.outOfBandFailureRejectingFuture).reject) === null || i === void 0 || i.call(t, c), this.byteStreamControllers.delete(d);
      for (const [d, l] of o) (r = (s = l.outOfBandFailureRejectingFuture).reject) === null || r === void 0 || r.call(s, c), this.textStreamControllers.delete(d);
    }
  }
  handleDataStreamPacket(e, t) {
    return m(this, void 0, void 0, function* () {
      switch (e.value.case) {
        case "streamHeader":
          return this.handleStreamHeader(e.value.value, e.participantIdentity, t);
        case "streamChunk":
          return this.handleStreamChunk(e.value.value, t);
        case "streamTrailer":
          return this.handleStreamTrailer(e.value.value, t);
        default:
          throw new Error('DataPacket of value "'.concat(e.value.case, '" is not data stream related!'));
      }
    });
  }
  handleStreamHeader(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var s;
      if (e.contentHeader.case === "byteHeader") {
        const r = this.byteStreamHandlers.get(e.topic);
        if (!r) {
          this.log.debug("ignoring incoming byte stream due to no handler for topic", e.topic);
          return;
        }
        let o;
        const a = new ke();
        a.promise.catch((l) => {
          this.log.error(l);
        });
        const c = { id: e.streamId, name: (s = e.contentHeader.value.name) !== null && s !== void 0 ? s : "unknown", mimeType: e.mimeType, size: e.totalLength ? Number(e.totalLength) : void 0, topic: e.topic, timestamp: ri(e.timestamp), attributes: e.attributes, encryptionType: i }, d = new ReadableStream({ start: (l) => {
          if (o = l, this.textStreamControllers.has(e.streamId)) throw new ye("A data stream read is already in progress for a stream with id ".concat(e.streamId, "."), ce.AlreadyOpened);
          this.byteStreamControllers.set(e.streamId, { info: c, controller: o, startTime: Date.now(), sendingParticipantIdentity: t, outOfBandFailureRejectingFuture: a });
        } });
        r(new Yl(c, d, ri(e.totalLength), a), { identity: t });
      } else if (e.contentHeader.case === "textHeader") {
        const r = this.textStreamHandlers.get(e.topic);
        if (!r) {
          this.log.debug("ignoring incoming text stream due to no handler for topic", e.topic);
          return;
        }
        let o;
        const a = new ke();
        a.promise.catch((l) => {
          this.log.error(l);
        });
        const c = { id: e.streamId, mimeType: e.mimeType, size: e.totalLength ? Number(e.totalLength) : void 0, topic: e.topic, timestamp: Number(e.timestamp), attributes: e.attributes, encryptionType: i }, d = new ReadableStream({ start: (l) => {
          if (o = l, this.textStreamControllers.has(e.streamId)) throw new ye("A data stream read is already in progress for a stream with id ".concat(e.streamId, "."), ce.AlreadyOpened);
          this.textStreamControllers.set(e.streamId, { info: c, controller: o, startTime: Date.now(), sendingParticipantIdentity: t, outOfBandFailureRejectingFuture: a });
        } });
        r(new Xl(c, d, ri(e.totalLength), a), { identity: t });
      }
    });
  }
  handleStreamChunk(e, t) {
    const i = this.byteStreamControllers.get(e.streamId);
    i && (i.info.encryptionType !== t ? (i.controller.error(new ye("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(i.info.encryptionType), ce.EncryptionTypeMismatch)), this.byteStreamControllers.delete(e.streamId)) : e.content.length > 0 && i.controller.enqueue(e));
    const s = this.textStreamControllers.get(e.streamId);
    s && (s.info.encryptionType !== t ? (s.controller.error(new ye("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(s.info.encryptionType), ce.EncryptionTypeMismatch)), this.textStreamControllers.delete(e.streamId)) : e.content.length > 0 && s.controller.enqueue(e));
  }
  handleStreamTrailer(e, t) {
    const i = this.textStreamControllers.get(e.streamId);
    i && (i.info.encryptionType !== t ? i.controller.error(new ye("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(i.info.encryptionType), ce.EncryptionTypeMismatch)) : (i.info.attributes = Object.assign(Object.assign({}, i.info.attributes), e.attributes), i.controller.close(), this.textStreamControllers.delete(e.streamId)));
    const s = this.byteStreamControllers.get(e.streamId);
    s && (s.info.encryptionType !== t ? s.controller.error(new ye("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(s.info.encryptionType), ce.EncryptionTypeMismatch)) : (s.info.attributes = Object.assign(Object.assign({}, s.info.attributes), e.attributes), s.controller.close()), this.byteStreamControllers.delete(e.streamId));
  }
}
class eo {
  constructor(e, t, i) {
    this.writableStream = e, this.defaultWriter = e.getWriter(), this.onClose = i, this.info = t;
  }
  write(e) {
    return this.defaultWriter.write(e);
  }
  close() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), (e = this.onClose) === null || e === void 0 || e.call(this);
    });
  }
}
class Zl extends eo {
}
class eu extends eo {
}
const mr = 15e3;
class tu {
  constructor(e, t) {
    this.engine = e, this.log = t;
  }
  setupEngine(e) {
    this.engine = e;
  }
  sendText(e, t) {
    return m(this, void 0, void 0, function* () {
      var i;
      const s = crypto.randomUUID(), o = new TextEncoder().encode(e).byteLength, a = (i = t == null ? void 0 : t.attachments) === null || i === void 0 ? void 0 : i.map(() => crypto.randomUUID()), c = new Array(a ? a.length + 1 : 1).fill(0), d = (u, h) => {
        var p;
        c[h] = u;
        const b = c.reduce((g, R) => g + R, 0);
        (p = t == null ? void 0 : t.onProgress) === null || p === void 0 || p.call(t, b);
      }, l = yield this.streamText({ streamId: s, totalSize: o, destinationIdentities: t == null ? void 0 : t.destinationIdentities, topic: t == null ? void 0 : t.topic, attachedStreamIds: a, attributes: t == null ? void 0 : t.attributes });
      return yield l.write(e), d(1, 0), yield l.close(), (t == null ? void 0 : t.attachments) && a && (yield Promise.all(t.attachments.map((u, h) => m(this, void 0, void 0, function* () {
        return this._sendFile(a[h], u, { topic: t.topic, mimeType: u.type, onProgress: (p) => {
          d(p, h + 1);
        } });
      })))), l.info;
    });
  }
  streamText(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s;
      const r = (t = e == null ? void 0 : e.streamId) !== null && t !== void 0 ? t : crypto.randomUUID(), o = { id: r, mimeType: "text/plain", timestamp: Date.now(), topic: (i = e == null ? void 0 : e.topic) !== null && i !== void 0 ? i : "", size: e == null ? void 0 : e.totalSize, attributes: e == null ? void 0 : e.attributes, encryptionType: !((s = this.engine.e2eeManager) === null || s === void 0) && s.isDataChannelEncryptionEnabled ? te.GCM : te.NONE }, a = new mi({ streamId: r, mimeType: o.mimeType, topic: o.topic, timestamp: nt(o.timestamp), totalLength: nt(e == null ? void 0 : e.totalSize), attributes: o.attributes, contentHeader: { case: "textHeader", value: new zr({ version: e == null ? void 0 : e.version, attachedStreamIds: e == null ? void 0 : e.attachedStreamIds, replyToStreamId: e == null ? void 0 : e.replyToStreamId, operationType: (e == null ? void 0 : e.type) === "update" ? sn.UPDATE : sn.CREATE }) } }), c = e == null ? void 0 : e.destinationIdentities, d = new de({ destinationIdentities: c, value: { case: "streamHeader", value: a } });
      yield this.engine.sendDataPacket(d, j.RELIABLE);
      let l = 0;
      const u = this.engine, h = new WritableStream({ write(g) {
        return m(this, void 0, void 0, function* () {
          for (const R of Hd(g, mr)) {
            const k = new pi({ content: R, streamId: r, chunkIndex: nt(l) }), I = new de({ destinationIdentities: c, value: { case: "streamChunk", value: k } });
            yield u.sendDataPacket(I, j.RELIABLE), l += 1;
          }
        });
      }, close() {
        return m(this, void 0, void 0, function* () {
          const g = new fi({ streamId: r }), R = new de({ destinationIdentities: c, value: { case: "streamTrailer", value: g } });
          yield u.sendDataPacket(R, j.RELIABLE);
        });
      }, abort(g) {
        console.log("Sink error:", g);
      } });
      let p = () => m(this, void 0, void 0, function* () {
        yield b.close();
      });
      u.once(_.Closing, p);
      const b = new Zl(h, o, () => this.engine.off(_.Closing, p));
      return b;
    });
  }
  sendFile(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = crypto.randomUUID();
      return yield this._sendFile(i, e, t), { id: i };
    });
  }
  _sendFile(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var s;
      const r = yield this.streamBytes({ streamId: e, totalSize: t.size, name: t.name, mimeType: (s = i == null ? void 0 : i.mimeType) !== null && s !== void 0 ? s : t.type, topic: i == null ? void 0 : i.topic, destinationIdentities: i == null ? void 0 : i.destinationIdentities }), o = t.stream().getReader();
      for (; ; ) {
        const { done: a, value: c } = yield o.read();
        if (a) break;
        yield r.write(c);
      }
      return yield r.close(), r.info;
    });
  }
  streamBytes(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s, r, o, a;
      const c = (t = e == null ? void 0 : e.streamId) !== null && t !== void 0 ? t : crypto.randomUUID(), d = e == null ? void 0 : e.destinationIdentities, l = { id: c, mimeType: (i = e == null ? void 0 : e.mimeType) !== null && i !== void 0 ? i : "application/octet-stream", topic: (s = e == null ? void 0 : e.topic) !== null && s !== void 0 ? s : "", timestamp: Date.now(), attributes: e == null ? void 0 : e.attributes, size: e == null ? void 0 : e.totalSize, name: (r = e == null ? void 0 : e.name) !== null && r !== void 0 ? r : "unknown", encryptionType: !((o = this.engine.e2eeManager) === null || o === void 0) && o.isDataChannelEncryptionEnabled ? te.GCM : te.NONE }, u = new mi({ totalLength: nt((a = l.size) !== null && a !== void 0 ? a : 0), mimeType: l.mimeType, streamId: c, topic: l.topic, timestamp: nt(Date.now()), attributes: l.attributes, contentHeader: { case: "byteHeader", value: new Qr({ name: l.name }) } }), h = new de({ destinationIdentities: d, value: { case: "streamHeader", value: u } });
      yield this.engine.sendDataPacket(h, j.RELIABLE);
      let p = 0;
      const b = new le(), g = this.engine, R = this.log, k = new WritableStream({ write(M) {
        return m(this, void 0, void 0, function* () {
          const v = yield b.lock();
          let y = 0;
          try {
            for (; y < M.byteLength; ) {
              const C = M.slice(y, y + mr), D = new de({ destinationIdentities: d, value: { case: "streamChunk", value: new pi({ content: C, streamId: c, chunkIndex: nt(p) }) } });
              yield g.sendDataPacket(D, j.RELIABLE), p += 1, y += C.byteLength;
            }
          } finally {
            v();
          }
        });
      }, close() {
        return m(this, void 0, void 0, function* () {
          const M = new fi({ streamId: c }), v = new de({ destinationIdentities: d, value: { case: "streamTrailer", value: M } });
          yield g.sendDataPacket(v, j.RELIABLE);
        });
      }, abort(M) {
        R.error("Sink error:", M);
      } });
      return new eu(k, l);
    });
  }
}
class to extends T {
  constructor(e, t, i, s, r) {
    super(e, i, r), this.sid = t, this.receiver = s;
  }
  get isLocal() {
    return false;
  }
  setMuted(e) {
    this.isMuted !== e && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? P.Muted : P.Unmuted, this));
  }
  setMediaStream(e) {
    this.mediaStream = e;
    const t = (i) => {
      i.track === this._mediaStreamTrack && (e.removeEventListener("removetrack", t), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(P.Ended, this));
    };
    e.addEventListener("removetrack", t);
  }
  start() {
    this.startMonitor(), super.enable();
  }
  stop() {
    this.stopMonitor(), super.disable();
  }
  getRTCStatsReport() {
    return m(this, void 0, void 0, function* () {
      var e;
      return !((e = this.receiver) === null || e === void 0) && e.getStats ? yield this.receiver.getStats() : void 0;
    });
  }
  setPlayoutDelay(e) {
    this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended");
  }
  getPlayoutDelay() {
    if (this.receiver) {
      if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
      this.log.warn("Playout delay not supported in this browser");
    } else this.log.warn("Cannot get playout delay, track already ended");
    return 0;
  }
  startMonitor() {
    this.monitorInterval || (this.monitorInterval = setInterval(() => this.monitorReceiver(), ts)), Ed() && this.registerTimeSyncUpdate();
  }
  registerTimeSyncUpdate() {
    const e = () => {
      var t;
      this.timeSyncHandle = requestAnimationFrame(() => e());
      const i = (t = this.receiver) === null || t === void 0 ? void 0 : t.getSynchronizationSources()[0];
      if (i) {
        const { timestamp: s, rtpTimestamp: r } = i;
        r && this.rtpTimestamp !== r && (this.emit(P.TimeSyncUpdate, { timestamp: s, rtpTimestamp: r }), this.rtpTimestamp = r);
      }
    };
    e();
  }
}
class iu extends to {
  constructor(e, t, i, s, r, o) {
    super(e, t, T.Kind.Audio, i, o), this.monitorReceiver = () => m(this, void 0, void 0, function* () {
      if (!this.receiver) {
        this._currentBitrate = 0;
        return;
      }
      const a = yield this.getReceiverStats();
      a && this.prevStats && this.receiver && (this._currentBitrate = _i(a, this.prevStats)), this.prevStats = a;
    }), this.audioContext = s, this.webAudioPluginNodes = [], r && (this.sinkId = r.deviceId);
  }
  setVolume(e) {
    var t;
    for (const i of this.attachedElements) this.audioContext ? (t = this.gainNode) === null || t === void 0 || t.gain.setTargetAtTime(e, 0, 0.1) : i.volume = e;
    De() && this._mediaStreamTrack._setVolume(e), this.elementVolume = e;
  }
  getVolume() {
    if (this.elementVolume) return this.elementVolume;
    if (De()) return 1;
    let e = 0;
    return this.attachedElements.forEach((t) => {
      t.volume > e && (e = t.volume);
    }), e;
  }
  setSinkId(e) {
    return m(this, void 0, void 0, function* () {
      this.sinkId = e, yield Promise.all(this.attachedElements.map((t) => {
        if (kn(t)) return t.setSinkId(e);
      }));
    });
  }
  attach(e) {
    const t = this.attachedElements.length === 0;
    return e ? super.attach(e) : e = super.attach(), this.sinkId && kn(e) && e.setSinkId(this.sinkId).catch((i) => {
      this.log.error("Failed to set sink id on remote audio track", i, this.logContext);
    }), this.audioContext && t && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e), e.volume = 0, e.muted = true), this.elementVolume && this.setVolume(this.elementVolume), e;
  }
  detach(e) {
    let t;
    return e ? (t = super.detach(e), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t = super.detach(), this.disconnectWebAudio()), t;
  }
  setAudioContext(e) {
    this.audioContext = e, e && this.attachedElements.length > 0 ? this.connectWebAudio(e, this.attachedElements[0]) : e || this.disconnectWebAudio();
  }
  setWebAudioPlugins(e) {
    this.webAudioPluginNodes = e, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0]);
  }
  connectWebAudio(e, t) {
    this.disconnectWebAudio(), this.sourceNode = e.createMediaStreamSource(t.srcObject);
    let i = this.sourceNode;
    this.webAudioPluginNodes.forEach((s) => {
      i.connect(s), i = s;
    }), this.gainNode = e.createGain(), i.connect(this.gainNode), this.gainNode.connect(e.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1), e.state !== "running" && e.resume().then(() => {
      e.state !== "running" && this.emit(P.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"));
    }).catch((s) => {
      this.emit(P.AudioPlaybackFailed, s);
    });
  }
  disconnectWebAudio() {
    var e, t;
    (e = this.gainNode) === null || e === void 0 || e.disconnect(), (t = this.sourceNode) === null || t === void 0 || t.disconnect(), this.gainNode = void 0, this.sourceNode = void 0;
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t;
      return e.forEach((i) => {
        i.type === "inbound-rtp" && (t = { type: "audio", streamId: i.id, timestamp: i.timestamp, jitter: i.jitter, bytesReceived: i.bytesReceived, concealedSamples: i.concealedSamples, concealmentEvents: i.concealmentEvents, silentConcealedSamples: i.silentConcealedSamples, silentConcealmentEvents: i.silentConcealmentEvents, totalAudioEnergy: i.totalAudioEnergy, totalSamplesDuration: i.totalSamplesDuration });
      }), t;
    });
  }
}
const Zi = 100;
class nu extends to {
  constructor(e, t, i, s, r) {
    super(e, t, T.Kind.Video, i, r), this.elementInfos = [], this.monitorReceiver = () => m(this, void 0, void 0, function* () {
      if (!this.receiver) {
        this._currentBitrate = 0;
        return;
      }
      const o = yield this.getReceiverStats();
      o && this.prevStats && this.receiver && (this._currentBitrate = _i(o, this.prevStats)), this.prevStats = o;
    }), this.debouncedHandleResize = Xn(() => {
      this.updateDimensions();
    }, Zi), this.adaptiveStreamSettings = s;
  }
  get isAdaptiveStream() {
    return this.adaptiveStreamSettings !== void 0;
  }
  setStreamState(e) {
    super.setStreamState(e), this.log.debug("setStreamState", e), this.isAdaptiveStream && e === T.StreamState.Active && this.updateVisibility();
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  setMuted(e) {
    super.setMuted(e), this.attachedElements.forEach((t) => {
      e ? yt(this._mediaStreamTrack, t) : ht(this._mediaStreamTrack, t);
    });
  }
  attach(e) {
    if (e ? super.attach(e) : e = super.attach(), this.adaptiveStreamSettings && this.elementInfos.find((t) => t.element === e) === void 0) {
      const t = new su(e);
      this.observeElementInfo(t);
    }
    return e;
  }
  observeElementInfo(e) {
    this.adaptiveStreamSettings && this.elementInfos.find((t) => t === e) === void 0 ? (e.handleResize = () => {
      this.debouncedHandleResize();
    }, e.handleVisibilityChanged = () => {
      this.updateVisibility();
    }, this.elementInfos.push(e), e.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext);
  }
  stopObservingElementInfo(e) {
    if (!this.isAdaptiveStream) {
      this.log.warn("stopObservingElementInfo ignored", this.logContext);
      return;
    }
    const t = this.elementInfos.filter((i) => i === e);
    for (const i of t) i.stopObserving();
    this.elementInfos = this.elementInfos.filter((i) => i !== e), this.updateVisibility(), this.debouncedHandleResize();
  }
  detach(e) {
    let t = [];
    if (e) return this.stopObservingElement(e), super.detach(e);
    t = super.detach();
    for (const i of t) this.stopObservingElement(i);
    return t;
  }
  getDecoderImplementation() {
    var e;
    return (e = this.prevStats) === null || e === void 0 ? void 0 : e.decoderImplementation;
  }
  getReceiverStats() {
    return m(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t, i = "", s = /* @__PURE__ */ new Map();
      return e.forEach((r) => {
        r.type === "inbound-rtp" ? (i = r.codecId, t = { type: "video", streamId: r.id, framesDecoded: r.framesDecoded, framesDropped: r.framesDropped, framesReceived: r.framesReceived, packetsReceived: r.packetsReceived, packetsLost: r.packetsLost, frameWidth: r.frameWidth, frameHeight: r.frameHeight, pliCount: r.pliCount, firCount: r.firCount, nackCount: r.nackCount, jitter: r.jitter, timestamp: r.timestamp, bytesReceived: r.bytesReceived, decoderImplementation: r.decoderImplementation }) : r.type === "codec" && s.set(r.id, r);
      }), t && i !== "" && s.get(i) && (t.mimeType = s.get(i).mimeType), t;
    });
  }
  stopObservingElement(e) {
    const t = this.elementInfos.filter((i) => i.element === e);
    for (const i of t) this.stopObservingElementInfo(i);
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
    return m(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility();
    });
  }
  updateVisibility(e) {
    var t, i;
    const s = this.elementInfos.reduce((c, d) => Math.max(c, d.visibilityChangedAt || 0), 0), r = !((i = (t = this.adaptiveStreamSettings) === null || t === void 0 ? void 0 : t.pauseVideoInBackground) !== null && i !== void 0) || i ? this.isInBackground : false, o = this.elementInfos.some((c) => c.pictureInPicture), a = this.elementInfos.some((c) => c.visible) && !r || o;
    if (!(this.lastVisible === a && !e)) {
      if (!a && Date.now() - s < Zi) {
        re.setTimeout(() => {
          this.updateVisibility();
        }, Zi);
        return;
      }
      this.lastVisible = a, this.emit(P.VisibilityChanged, a, this);
    }
  }
  updateDimensions() {
    var e, t;
    let i = 0, s = 0;
    const r = this.getPixelDensity();
    for (const o of this.elementInfos) {
      const a = o.width() * r, c = o.height() * r;
      a + c > i + s && (i = a, s = c);
    }
    ((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) === i && ((t = this.lastDimensions) === null || t === void 0 ? void 0 : t.height) === s || (this.lastDimensions = { width: i, height: s }, this.emit(P.VideoDimensionsChanged, this.lastDimensions, this));
  }
  getPixelDensity() {
    var e;
    const t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pixelDensity;
    return t === "screen" ? Vs() : t || (Vs() > 2 ? 2 : 1);
  }
}
class su {
  get visible() {
    return this.isPiP || this.isIntersecting;
  }
  get pictureInPicture() {
    return this.isPiP;
  }
  constructor(e, t) {
    this.onVisibilityChanged = (i) => {
      var s;
      const { target: r, isIntersecting: o } = i;
      r === this.element && (this.isIntersecting = o, this.isPiP = Dt(this.element), this.visibilityChangedAt = Date.now(), (s = this.handleVisibilityChanged) === null || s === void 0 || s.call(this));
    }, this.onEnterPiP = () => {
      var i, s, r;
      (s = (i = window.documentPictureInPicture) === null || i === void 0 ? void 0 : i.window) === null || s === void 0 || s.addEventListener("pagehide", this.onLeavePiP), this.isPiP = Dt(this.element), (r = this.handleVisibilityChanged) === null || r === void 0 || r.call(this);
    }, this.onLeavePiP = () => {
      var i;
      this.isPiP = Dt(this.element), (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this);
    }, this.element = e, this.isIntersecting = t ?? Rn(e), this.isPiP = pe() && Dt(e), this.visibilityChangedAt = 0;
  }
  width() {
    return this.element.clientWidth;
  }
  height() {
    return this.element.clientHeight;
  }
  observe() {
    var e, t, i;
    this.isIntersecting = Rn(this.element), this.isPiP = Dt(this.element), this.element.handleResize = () => {
      var s;
      (s = this.handleResize) === null || s === void 0 || s.call(this);
    }, this.element.handleVisibilityChanged = this.onVisibilityChanged, Ws().observe(this.element), qs().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), (e = window.documentPictureInPicture) === null || e === void 0 || e.addEventListener("enter", this.onEnterPiP), (i = (t = window.documentPictureInPicture) === null || t === void 0 ? void 0 : t.window) === null || i === void 0 || i.addEventListener("pagehide", this.onLeavePiP);
  }
  stopObserving() {
    var e, t, i, s, r;
    (e = Ws()) === null || e === void 0 || e.unobserve(this.element), (t = qs()) === null || t === void 0 || t.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), (i = window.documentPictureInPicture) === null || i === void 0 || i.removeEventListener("enter", this.onEnterPiP), (r = (s = window.documentPictureInPicture) === null || s === void 0 ? void 0 : s.window) === null || r === void 0 || r.removeEventListener("pagehide", this.onLeavePiP);
  }
}
function Dt(n) {
  var e, t;
  return document.pictureInPictureElement === n ? true : !((e = window.documentPictureInPicture) === null || e === void 0) && e.window ? Rn(n, (t = window.documentPictureInPicture) === null || t === void 0 ? void 0 : t.window) : false;
}
function Rn(n, e) {
  const t = e || window;
  let i = n.offsetTop, s = n.offsetLeft;
  const r = n.offsetWidth, o = n.offsetHeight, { hidden: a } = n, { display: c } = getComputedStyle(n);
  for (; n.offsetParent; ) n = n.offsetParent, i += n.offsetTop, s += n.offsetLeft;
  return i < t.pageYOffset + t.innerHeight && s < t.pageXOffset + t.innerWidth && i + o > t.pageYOffset && s + r > t.pageXOffset && !a && c !== "none";
}
class Le extends Ae.EventEmitter {
  constructor(e, t, i, s) {
    var r;
    super(), this.metadataMuted = false, this.encryption = te.NONE, this.log = U, this.handleMuted = () => {
      this.emit(P.Muted);
    }, this.handleUnmuted = () => {
      this.emit(P.Unmuted);
    }, this.log = Ve((r = s == null ? void 0 : s.loggerName) !== null && r !== void 0 ? r : _e.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = e, this.trackSid = t, this.trackName = i, this.source = T.Source.Unknown;
  }
  setTrack(e) {
    this.track && (this.track.off(P.Muted, this.handleMuted), this.track.off(P.Unmuted, this.handleUnmuted)), this.track = e, e && (e.on(P.Muted, this.handleMuted), e.on(P.Unmuted, this.handleUnmuted));
  }
  get logContext() {
    var e;
    return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), B(this));
  }
  get isMuted() {
    return this.metadataMuted;
  }
  get isEnabled() {
    return true;
  }
  get isSubscribed() {
    return this.track !== void 0;
  }
  get isEncrypted() {
    return this.encryption !== te.NONE;
  }
  get audioTrack() {
    if (Oe(this.track)) return this.track;
  }
  get videoTrack() {
    if (Ze(this.track)) return this.track;
  }
  updateInfo(e) {
    this.trackSid = e.sid, this.trackName = e.name, this.source = T.sourceFromProto(e.source), this.mimeType = e.mimeType, this.kind === T.Kind.Video && e.width > 0 && (this.dimensions = { width: e.width, height: e.height }, this.simulcasted = e.simulcast), this.encryption = e.encryption, this.trackInfo = e, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), { info: e }));
  }
}
(function(n) {
  (function(e) {
    e.Desired = "desired", e.Subscribed = "subscribed", e.Unsubscribed = "unsubscribed";
  })(n.SubscriptionStatus || (n.SubscriptionStatus = {})), (function(e) {
    e.Allowed = "allowed", e.NotAllowed = "not_allowed";
  })(n.PermissionStatus || (n.PermissionStatus = {}));
})(Le || (Le = {}));
class _n extends Le {
  get isUpstreamPaused() {
    var e;
    return (e = this.track) === null || e === void 0 ? void 0 : e.isUpstreamPaused;
  }
  constructor(e, t, i, s) {
    super(e, t.sid, t.name, s), this.track = void 0, this.handleTrackEnded = () => {
      this.emit(P.Ended);
    }, this.handleCpuConstrained = () => {
      this.track && Ze(this.track) && this.emit(P.CpuConstrained, this.track);
    }, this.updateInfo(t), this.setTrack(i);
  }
  setTrack(e) {
    this.track && (this.track.off(P.Ended, this.handleTrackEnded), this.track.off(P.CpuConstrained, this.handleCpuConstrained)), super.setTrack(e), e && (e.on(P.Ended, this.handleTrackEnded), e.on(P.CpuConstrained, this.handleCpuConstrained));
  }
  get isMuted() {
    return this.track ? this.track.isMuted : super.isMuted;
  }
  get audioTrack() {
    return super.audioTrack;
  }
  get videoTrack() {
    return super.videoTrack;
  }
  get isLocal() {
    return true;
  }
  mute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.mute();
    });
  }
  unmute() {
    return m(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.unmute();
    });
  }
  pauseUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0 ? void 0 : e.pauseUpstream();
    });
  }
  resumeUpstream() {
    return m(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0 ? void 0 : e.resumeUpstream();
    });
  }
  getTrackFeatures() {
    var e;
    if (Oe(this.track)) {
      const t = this.track.getSourceTrackSettings(), i = /* @__PURE__ */ new Set();
      return t.autoGainControl && i.add(ne.TF_AUTO_GAIN_CONTROL), t.echoCancellation && i.add(ne.TF_ECHO_CANCELLATION), t.noiseSuppression && i.add(ne.TF_NOISE_SUPPRESSION), t.channelCount && t.channelCount > 1 && i.add(ne.TF_STEREO), !((e = this.options) === null || e === void 0) && e.dtx || i.add(ne.TF_NO_DTX), this.track.enhancedNoiseCancellation && i.add(ne.TF_ENHANCED_NOISE_CANCELLATION), Array.from(i.values());
    } else return [];
  }
}
function wi(n, e) {
  return m(this, void 0, void 0, function* () {
    n ?? (n = {});
    let t = false;
    const { audioProcessor: i, videoProcessor: s, optionsWithoutProcessor: r } = Va(n);
    let o = r.audio, a = r.video;
    if (i && typeof r.audio == "object" && (r.audio.processor = i), s && typeof r.video == "object" && (r.video.processor = s), n.audio && typeof r.audio == "object" && typeof r.audio.deviceId == "string") {
      const u = r.audio.deviceId;
      r.audio.deviceId = { exact: u }, t = true, o = Object.assign(Object.assign({}, r.audio), { deviceId: { ideal: u } });
    }
    if (r.video && typeof r.video == "object" && typeof r.video.deviceId == "string") {
      const u = r.video.deviceId;
      r.video.deviceId = { exact: u }, t = true, a = Object.assign(Object.assign({}, r.video), { deviceId: { ideal: u } });
    }
    r.audio === true ? r.audio = { deviceId: "default" } : typeof r.audio == "object" && r.audio !== null && (r.audio = Object.assign(Object.assign({}, r.audio), { deviceId: r.audio.deviceId || "default" })), r.video === true ? r.video = { deviceId: "default" } : typeof r.video == "object" && !r.video.deviceId && (r.video.deviceId = "default");
    const c = Fa(r, Ha, Ja), d = Jn(c), l = navigator.mediaDevices.getUserMedia(d);
    r.audio && (se.userMediaPromiseMap.set("audioinput", l), l.catch(() => se.userMediaPromiseMap.delete("audioinput"))), r.video && (se.userMediaPromiseMap.set("videoinput", l), l.catch(() => se.userMediaPromiseMap.delete("videoinput")));
    try {
      const u = yield l;
      return yield Promise.all(u.getTracks().map((h) => m(this, void 0, void 0, function* () {
        const p = h.kind === "audio";
        let b = p ? c.audio : c.video;
        (typeof b == "boolean" || !b) && (b = {});
        let g;
        const R = p ? d.audio : d.video;
        typeof R != "boolean" && (g = R);
        const k = h.getSettings().deviceId;
        (g == null ? void 0 : g.deviceId) && Qe(g.deviceId) !== k ? g.deviceId = k : g || (g = { deviceId: k });
        const I = Ml(h, g, e);
        return I.kind === T.Kind.Video ? I.source = T.Source.Camera : I.kind === T.Kind.Audio && (I.source = T.Source.Microphone), I.mediaStream = u, Oe(I) && i ? yield I.setProcessor(i) : Ze(I) && s && (yield I.setProcessor(s)), I;
      })));
    } catch (u) {
      if (!t) throw u;
      return wi(Object.assign(Object.assign({}, n), { audio: o, video: a }), e);
    }
  });
}
function ru(n) {
  return m(this, void 0, void 0, function* () {
    return (yield wi({ audio: false, video: true }))[0];
  });
}
function au(n) {
  return m(this, void 0, void 0, function* () {
    return (yield wi({ audio: true, video: false }))[0];
  });
}
var He;
(function(n) {
  n.Excellent = "excellent", n.Good = "good", n.Poor = "poor", n.Lost = "lost", n.Unknown = "unknown";
})(He || (He = {}));
function ou(n) {
  switch (n) {
    case Mt.EXCELLENT:
      return He.Excellent;
    case Mt.GOOD:
      return He.Good;
    case Mt.POOR:
      return He.Poor;
    case Mt.LOST:
      return He.Lost;
    default:
      return He.Unknown;
  }
}
class io extends Ae.EventEmitter {
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions) === null || e === void 0 ? void 0 : e.loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  get isEncrypted() {
    return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every((e) => e.isEncrypted);
  }
  get isAgent() {
    var e;
    return ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) || this.kind === jt.AGENT;
  }
  get isActive() {
    var e;
    return ((e = this.participantInfo) === null || e === void 0 ? void 0 : e.state) === ft.ACTIVE;
  }
  get kind() {
    return this._kind;
  }
  get attributes() {
    return Object.freeze(Object.assign({}, this._attributes));
  }
  constructor(e, t, i, s, r, o) {
    let a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : jt.STANDARD;
    var c;
    super(), this.audioLevel = 0, this.isSpeaking = false, this._connectionQuality = He.Unknown, this.log = U, this.log = Ve((c = o == null ? void 0 : o.loggerName) !== null && c !== void 0 ? c : _e.Participant), this.loggerOptions = o, this.setMaxListeners(100), this.sid = e, this.identity = t, this.name = i, this.metadata = s, this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this._kind = a, this._attributes = r ?? {};
  }
  getTrackPublications() {
    return Array.from(this.trackPublications.values());
  }
  getTrackPublication(e) {
    for (const [, t] of this.trackPublications) if (t.source === e) return t;
  }
  getTrackPublicationByName(e) {
    for (const [, t] of this.trackPublications) if (t.trackName === e) return t;
  }
  waitUntilActive() {
    return this.isActive ? Promise.resolve() : this.activeFuture ? this.activeFuture.promise : (this.activeFuture = new ke(), this.once(w.Active, () => {
      var e, t;
      (t = (e = this.activeFuture) === null || e === void 0 ? void 0 : e.resolve) === null || t === void 0 || t.call(e), this.activeFuture = void 0;
    }), this.activeFuture.promise);
  }
  get connectionQuality() {
    return this._connectionQuality;
  }
  get isCameraEnabled() {
    var e;
    const t = this.getTrackPublication(T.Source.Camera);
    return !(!((e = t == null ? void 0 : t.isMuted) !== null && e !== void 0) || e);
  }
  get isMicrophoneEnabled() {
    var e;
    const t = this.getTrackPublication(T.Source.Microphone);
    return !(!((e = t == null ? void 0 : t.isMuted) !== null && e !== void 0) || e);
  }
  get isScreenShareEnabled() {
    return !!this.getTrackPublication(T.Source.ScreenShare);
  }
  get isLocal() {
    return false;
  }
  get joinedAt() {
    return this.participantInfo ? new Date(Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3) : /* @__PURE__ */ new Date();
  }
  updateInfo(e) {
    var t;
    return this.participantInfo && this.participantInfo.sid === e.sid && this.participantInfo.version > e.version ? false : (this.identity = e.identity, this.sid = e.sid, this._setName(e.name), this._setMetadata(e.metadata), this._setAttributes(e.attributes), e.state === ft.ACTIVE && ((t = this.participantInfo) === null || t === void 0 ? void 0 : t.state) !== ft.ACTIVE && this.emit(w.Active), e.permission && this.setPermissions(e.permission), this.participantInfo = e, true);
  }
  _setMetadata(e) {
    const t = this.metadata !== e, i = this.metadata;
    this.metadata = e, t && this.emit(w.ParticipantMetadataChanged, i);
  }
  _setName(e) {
    const t = this.name !== e;
    this.name = e, t && this.emit(w.ParticipantNameChanged, e);
  }
  _setAttributes(e) {
    const t = Pd(this.attributes, e);
    this._attributes = e, Object.keys(t).length > 0 && this.emit(w.AttributesChanged, t);
  }
  setPermissions(e) {
    var t, i, s, r, o, a;
    const c = this.permissions, d = e.canPublish !== ((t = this.permissions) === null || t === void 0 ? void 0 : t.canPublish) || e.canSubscribe !== ((i = this.permissions) === null || i === void 0 ? void 0 : i.canSubscribe) || e.canPublishData !== ((s = this.permissions) === null || s === void 0 ? void 0 : s.canPublishData) || e.hidden !== ((r = this.permissions) === null || r === void 0 ? void 0 : r.hidden) || e.recorder !== ((o = this.permissions) === null || o === void 0 ? void 0 : o.recorder) || e.canPublishSources.length !== this.permissions.canPublishSources.length || e.canPublishSources.some((l, u) => {
      var h;
      return l !== ((h = this.permissions) === null || h === void 0 ? void 0 : h.canPublishSources[u]);
    }) || e.canSubscribeMetrics !== ((a = this.permissions) === null || a === void 0 ? void 0 : a.canSubscribeMetrics);
    return this.permissions = e, d && this.emit(w.ParticipantPermissionsChanged, c), d;
  }
  setIsSpeaking(e) {
    e !== this.isSpeaking && (this.isSpeaking = e, e && (this.lastSpokeAt = /* @__PURE__ */ new Date()), this.emit(w.IsSpeakingChanged, e));
  }
  setConnectionQuality(e) {
    const t = this._connectionQuality;
    this._connectionQuality = ou(e), t !== this._connectionQuality && this.emit(w.ConnectionQualityChanged, this._connectionQuality);
  }
  setDisconnected() {
    var e, t;
    this.activeFuture && ((t = (e = this.activeFuture).reject) === null || t === void 0 || t.call(e, new Error("Participant disconnected")), this.activeFuture = void 0);
  }
  setAudioContext(e) {
    this.audioContext = e, this.audioTrackPublications.forEach((t) => Oe(t.track) && t.track.setAudioContext(e));
  }
  addTrackPublication(e) {
    e.on(P.Muted, () => {
      this.emit(w.TrackMuted, e);
    }), e.on(P.Unmuted, () => {
      this.emit(w.TrackUnmuted, e);
    });
    const t = e;
    switch (t.track && (t.track.sid = e.trackSid), this.trackPublications.set(e.trackSid, e), e.kind) {
      case T.Kind.Audio:
        this.audioTrackPublications.set(e.trackSid, e);
        break;
      case T.Kind.Video:
        this.videoTrackPublications.set(e.trackSid, e);
        break;
    }
  }
}
function cu(n) {
  var e, t, i;
  if (!n.participantSid && !n.participantIdentity) throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
  return new ea({ participantIdentity: (e = n.participantIdentity) !== null && e !== void 0 ? e : "", participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "", allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : false, trackSids: n.allowedTrackSids || [] });
}
class du extends io {
  constructor(e, t, i, s, r, o) {
    super(e, t, void 0, void 0, void 0, { loggerName: s.loggerName, loggerContextCb: () => this.engine.logContext }), this.pendingPublishing = /* @__PURE__ */ new Set(), this.pendingPublishPromises = /* @__PURE__ */ new Map(), this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = true, this.encryptionType = te.NONE, this.enabledPublishVideoCodecs = [], this.pendingAcks = /* @__PURE__ */ new Map(), this.pendingResponses = /* @__PURE__ */ new Map(), this.handleReconnecting = () => {
      this.reconnectFuture || (this.reconnectFuture = new ke());
    }, this.handleReconnected = () => {
      var a, c;
      (c = (a = this.reconnectFuture) === null || a === void 0 ? void 0 : a.resolve) === null || c === void 0 || c.call(a), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions();
    }, this.handleClosing = () => {
      var a, c, d, l, u, h;
      this.reconnectFuture && (this.reconnectFuture.promise.catch((p) => this.log.warn(p.message, this.logContext)), (c = (a = this.reconnectFuture) === null || a === void 0 ? void 0 : a.reject) === null || c === void 0 || c.call(a, new Error("Got disconnected during reconnection attempt")), this.reconnectFuture = void 0), this.signalConnectedFuture && ((l = (d = this.signalConnectedFuture).reject) === null || l === void 0 || l.call(d, new Error("Got disconnected without signal connected")), this.signalConnectedFuture = void 0), (h = (u = this.activeAgentFuture) === null || u === void 0 ? void 0 : u.reject) === null || h === void 0 || h.call(u, new Error("Got disconnected without active agent present")), this.activeAgentFuture = void 0, this.firstActiveAgent = void 0;
    }, this.handleSignalConnected = (a) => {
      var c, d;
      a.participant && this.updateInfo(a.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new ke()), (d = (c = this.signalConnectedFuture).resolve) === null || d === void 0 || d.call(c);
    }, this.handleSignalRequestResponse = (a) => {
      const { requestId: c, reason: d, message: l } = a, u = this.pendingSignalRequests.get(c);
      u && (d !== Wn.OK && u.reject(new Ls(l, d)), this.pendingSignalRequests.delete(c));
    }, this.handleDataPacket = (a) => {
      switch (a.value.case) {
        case "rpcResponse":
          let c = a.value.value, d = null, l = null;
          c.value.case === "payload" ? d = c.value.value : c.value.case === "error" && (l = X.fromProto(c.value.value)), this.handleIncomingRpcResponse(c.requestId, d, l);
          break;
        case "rpcAck":
          let u = a.value.value;
          this.handleIncomingRpcAck(u.requestId);
          break;
      }
    }, this.updateTrackSubscriptionPermissions = () => {
      this.log.debug("updating track subscription permissions", Object.assign(Object.assign({}, this.logContext), { allParticipantsAllowed: this.allParticipantsAllowedToSubscribe, participantTrackPermissions: this.participantTrackPermissions })), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map((a) => cu(a)));
    }, this.onTrackUnmuted = (a) => {
      this.onTrackMuted(a, a.isUpstreamPaused);
    }, this.onTrackMuted = (a, c) => {
      if (c === void 0 && (c = true), !a.sid) {
        this.log.error("could not update mute status for unpublished track", Object.assign(Object.assign({}, this.logContext), B(a)));
        return;
      }
      this.engine.updateMuteStatus(a.sid, c);
    }, this.onTrackUpstreamPaused = (a) => {
      this.log.debug("upstream paused", Object.assign(Object.assign({}, this.logContext), B(a))), this.onTrackMuted(a, true);
    }, this.onTrackUpstreamResumed = (a) => {
      this.log.debug("upstream resumed", Object.assign(Object.assign({}, this.logContext), B(a))), this.onTrackMuted(a, a.isMuted);
    }, this.onTrackFeatureUpdate = (a) => {
      const c = this.audioTrackPublications.get(a.sid);
      if (!c) {
        this.log.warn("Could not update local audio track settings, missing publication for track ".concat(a.sid), this.logContext);
        return;
      }
      this.engine.client.sendUpdateLocalAudioTrack(c.trackSid, c.getTrackFeatures());
    }, this.onTrackCpuConstrained = (a, c) => {
      this.log.debug("track cpu constrained", Object.assign(Object.assign({}, this.logContext), B(c))), this.emit(w.LocalTrackCpuConstrained, a, c);
    }, this.handleSubscribedQualityUpdate = (a) => m(this, void 0, void 0, function* () {
      var c, d, l, u, h;
      if (!(!((h = this.roomOptions) === null || h === void 0) && h.dynacast)) return;
      const p = this.videoTrackPublications.get(a.trackSid);
      if (!p) {
        this.log.warn("received subscribed quality update for unknown track", Object.assign(Object.assign({}, this.logContext), { trackSid: a.trackSid }));
        return;
      }
      if (!p.videoTrack) return;
      const b = yield p.videoTrack.setPublishingCodecs(a.subscribedCodecs);
      try {
        for (var g = true, R = je(b), k; k = yield R.next(), c = k.done, !c; g = true) {
          u = k.value, g = false;
          const I = u;
          kd(I) && (this.log.debug("publish ".concat(I, " for ").concat(p.videoTrack.sid), Object.assign(Object.assign({}, this.logContext), B(p))), yield this.publishAdditionalCodecForTrack(p.videoTrack, I, p.options));
        }
      } catch (I) {
        d = { error: I };
      } finally {
        try {
          !g && !c && (l = R.return) && (yield l.call(R));
        } finally {
          if (d) throw d.error;
        }
      }
    }), this.handleLocalTrackUnpublished = (a) => {
      const c = this.trackPublications.get(a.trackSid);
      if (!c) {
        this.log.warn("received unpublished event for unknown track", Object.assign(Object.assign({}, this.logContext), { trackSid: a.trackSid }));
        return;
      }
      this.unpublishTrack(c.track);
    }, this.handleTrackEnded = (a) => m(this, void 0, void 0, function* () {
      if (a.source === T.Source.ScreenShare || a.source === T.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", Object.assign(Object.assign({}, this.logContext), B(a))), this.unpublishTrack(a);
      else if (a.isUserProvided) yield a.mute();
      else if (Ne(a) || Ke(a)) try {
        if (pe()) try {
          const c = yield navigator == null ? void 0 : navigator.permissions.query({ name: a.source === T.Source.Camera ? "camera" : "microphone" });
          if (c && c.state === "denied") throw this.log.warn("user has revoked access to ".concat(a.source), Object.assign(Object.assign({}, this.logContext), B(a))), c.onchange = () => {
            c.state !== "denied" && (a.isMuted || a.restartTrack(), c.onchange = null);
          }, new Error("GetUserMedia Permission denied");
        } catch {
        }
        a.isMuted || (this.log.debug("track ended, attempting to use a different device", Object.assign(Object.assign({}, this.logContext), B(a))), Ne(a) ? yield a.restartTrack({ deviceId: "default" }) : yield a.restartTrack());
      } catch {
        this.log.warn("could not restart track, muting instead", Object.assign(Object.assign({}, this.logContext), B(a))), yield a.mute();
      }
    }), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this.engine = i, this.roomOptions = s, this.setupEngine(i), this.activeDeviceMap = /* @__PURE__ */ new Map([["audioinput", "default"], ["videoinput", "default"], ["audiooutput", "default"]]), this.pendingSignalRequests = /* @__PURE__ */ new Map(), this.rpcHandlers = r, this.roomOutgoingDataStreamManager = o;
  }
  get lastCameraError() {
    return this.cameraError;
  }
  get lastMicrophoneError() {
    return this.microphoneError;
  }
  get isE2EEEnabled() {
    return this.encryptionType !== te.NONE;
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setupEngine(e) {
    var t;
    this.engine = e, this.engine.on(_.RemoteMute, (i, s) => {
      const r = this.trackPublications.get(i);
      !r || !r.track || (s ? r.mute() : r.unmute());
    }), !((t = this.signalConnectedFuture) === null || t === void 0) && t.isResolved && (this.signalConnectedFuture = void 0), this.engine.on(_.Connected, this.handleReconnected).on(_.SignalConnected, this.handleSignalConnected).on(_.SignalRestarted, this.handleReconnected).on(_.SignalResumed, this.handleReconnected).on(_.Restarting, this.handleReconnecting).on(_.Resuming, this.handleReconnecting).on(_.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(_.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(_.Closing, this.handleClosing).on(_.SignalRequestResponse, this.handleSignalRequestResponse).on(_.DataPacketReceived, this.handleDataPacket);
  }
  setMetadata(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ metadata: e });
    });
  }
  setName(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ name: e });
    });
  }
  setAttributes(e) {
    return m(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({ attributes: e });
    });
  }
  requestMetadataUpdate(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let { metadata: s, name: r, attributes: o } = t;
      return (function* () {
        return new me((a, c) => m(i, void 0, void 0, function* () {
          var d, l;
          try {
            let u = false;
            const h = yield this.engine.client.sendUpdateLocalMetadata((d = s ?? this.metadata) !== null && d !== void 0 ? d : "", (l = r ?? this.name) !== null && l !== void 0 ? l : "", o), p = performance.now();
            for (this.pendingSignalRequests.set(h, { resolve: a, reject: (b) => {
              c(b), u = true;
            }, values: { name: r, metadata: s, attributes: o } }); performance.now() - p < 5e3 && !u; ) {
              if ((!r || this.name === r) && (!s || this.metadata === s) && (!o || Object.entries(o).every((b) => {
                let [g, R] = b;
                return this.attributes[g] === R || R === "" && !this.attributes[g];
              }))) {
                this.pendingSignalRequests.delete(h), a();
                return;
              }
              yield ae(50);
            }
            c(new Ls("Request to update local metadata timed out", "TimeoutError"));
          } catch (u) {
            u instanceof Error ? c(u) : c(new Error(String(u)));
          }
        }));
      })();
    });
  }
  setCameraEnabled(e, t, i) {
    return this.setTrackEnabled(T.Source.Camera, e, t, i);
  }
  setMicrophoneEnabled(e, t, i) {
    return this.setTrackEnabled(T.Source.Microphone, e, t, i);
  }
  setScreenShareEnabled(e, t, i) {
    return this.setTrackEnabled(T.Source.ScreenShare, e, t, i);
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      this.encryptionType = e ? te.GCM : te.NONE, yield this.republishAllTracks(void 0, false);
    });
  }
  setTrackEnabled(e, t, i, s) {
    return m(this, void 0, void 0, function* () {
      var r, o;
      this.log.debug("setTrackEnabled", Object.assign(Object.assign({}, this.logContext), { source: e, enabled: t })), this.republishPromise && (yield this.republishPromise);
      let a = this.getTrackPublication(e);
      if (t) if (a) yield a.unmute();
      else {
        let c;
        if (this.pendingPublishing.has(e)) {
          const d = yield this.waitForPendingPublicationOfSource(e);
          return d || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), { source: e })), yield d == null ? void 0 : d.unmute(), d;
        }
        this.pendingPublishing.add(e);
        try {
          switch (e) {
            case T.Source.Camera:
              c = yield this.createTracks({ video: (r = i) !== null && r !== void 0 ? r : true });
              break;
            case T.Source.Microphone:
              c = yield this.createTracks({ audio: (o = i) !== null && o !== void 0 ? o : true });
              break;
            case T.Source.ScreenShare:
              c = yield this.createScreenTracks(Object.assign({}, i));
              break;
            default:
              throw new Be(e);
          }
        } catch (d) {
          throw c == null ? void 0 : c.forEach((l) => {
            l.stop();
          }), d instanceof Error && this.emit(w.MediaDevicesError, d, vn(e)), this.pendingPublishing.delete(e), d;
        }
        for (const d of c) {
          const l = Object.assign(Object.assign({}, this.roomOptions.publishDefaults), i);
          e === T.Source.Microphone && Oe(d) && l.preConnectBuffer && (this.log.info("starting preconnect buffer for microphone", Object.assign({}, this.logContext)), d.startPreConnectBuffer());
        }
        try {
          const d = [];
          for (const u of c) this.log.info("publishing track", Object.assign(Object.assign({}, this.logContext), B(u))), d.push(this.publishTrack(u, s));
          [a] = yield Promise.all(d);
        } catch (d) {
          throw c == null ? void 0 : c.forEach((l) => {
            l.stop();
          }), d;
        } finally {
          this.pendingPublishing.delete(e);
        }
      }
      else if (!(a == null ? void 0 : a.track) && this.pendingPublishing.has(e) && (a = yield this.waitForPendingPublicationOfSource(e), a || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), { source: e }))), a && a.track) if (e === T.Source.ScreenShare) {
        a = yield this.unpublishTrack(a.track);
        const c = this.getTrackPublication(T.Source.ScreenShareAudio);
        c && c.track && this.unpublishTrack(c.track);
      } else yield a.mute();
      return a;
    });
  }
  enableCameraAndMicrophone() {
    return m(this, void 0, void 0, function* () {
      if (!(this.pendingPublishing.has(T.Source.Camera) || this.pendingPublishing.has(T.Source.Microphone))) {
        this.pendingPublishing.add(T.Source.Camera), this.pendingPublishing.add(T.Source.Microphone);
        try {
          const e = yield this.createTracks({ audio: true, video: true });
          yield Promise.all(e.map((t) => this.publishTrack(t)));
        } finally {
          this.pendingPublishing.delete(T.Source.Camera), this.pendingPublishing.delete(T.Source.Microphone);
        }
      }
    });
  }
  createTracks(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      e ?? (e = {});
      const s = Fa(e, (t = this.roomOptions) === null || t === void 0 ? void 0 : t.audioCaptureDefaults, (i = this.roomOptions) === null || i === void 0 ? void 0 : i.videoCaptureDefaults);
      try {
        return (yield wi(s, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext })).map((a) => (Oe(a) && (this.microphoneError = void 0, a.setAudioContext(this.audioContext), a.source = T.Source.Microphone, this.emit(w.AudioStreamAcquired)), Ze(a) && (this.cameraError = void 0, a.source = T.Source.Camera), a));
      } catch (r) {
        throw r instanceof Error && (e.audio && (this.microphoneError = r), e.video && (this.cameraError = r)), r;
      }
    });
  }
  createScreenTracks(e) {
    return m(this, void 0, void 0, function* () {
      if (e === void 0 && (e = {}), navigator.mediaDevices.getDisplayMedia === void 0) throw new Gn("getDisplayMedia not supported");
      e.resolution === void 0 && !xd() && (e.resolution = Hn.h1080fps30.resolution);
      const t = Sd(e), i = yield navigator.mediaDevices.getDisplayMedia(t), s = i.getVideoTracks();
      if (s.length === 0) throw new Be("no video track found");
      const r = new bi(s[0], void 0, false, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
      r.source = T.Source.ScreenShare, e.contentHint && (r.mediaStreamTrack.contentHint = e.contentHint);
      const o = [r];
      if (i.getAudioTracks().length > 0) {
        this.emit(w.AudioStreamAcquired);
        const a = new vi(i.getAudioTracks()[0], void 0, false, this.audioContext, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
        a.source = T.Source.ScreenShareAudio, o.push(a);
      }
      return o;
    });
  }
  publishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      return this.publishOrRepublishTrack(e, t);
    });
  }
  publishOrRepublishTrack(e, t) {
    return m(this, arguments, void 0, function(i, s) {
      var r = this;
      let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return (function* () {
        var a, c, d, l;
        Ne(i) && i.setAudioContext(r.audioContext), yield (a = r.reconnectFuture) === null || a === void 0 ? void 0 : a.promise, r.republishPromise && !o && (yield r.republishPromise), kt(i) && r.pendingPublishPromises.has(i) && (yield r.pendingPublishPromises.get(i));
        let u;
        if (i instanceof MediaStreamTrack) u = i.getConstraints();
        else {
          u = i.constraints;
          let k;
          switch (i.source) {
            case T.Source.Microphone:
              k = "audioinput";
              break;
            case T.Source.Camera:
              k = "videoinput";
          }
          k && r.activeDeviceMap.has(k) && (u = Object.assign(Object.assign({}, u), { deviceId: r.activeDeviceMap.get(k) }));
        }
        if (i instanceof MediaStreamTrack) switch (i.kind) {
          case "audio":
            i = new vi(i, u, true, r.audioContext, { loggerName: r.roomOptions.loggerName, loggerContextCb: () => r.logContext });
            break;
          case "video":
            i = new bi(i, u, true, { loggerName: r.roomOptions.loggerName, loggerContextCb: () => r.logContext });
            break;
          default:
            throw new Be("unsupported MediaStreamTrack kind ".concat(i.kind));
        }
        else i.updateLoggerOptions({ loggerName: r.roomOptions.loggerName, loggerContextCb: () => r.logContext });
        let h;
        if (r.trackPublications.forEach((k) => {
          k.track && k.track === i && (h = k);
        }), h) return r.log.warn("track has already been published, skipping", Object.assign(Object.assign({}, r.logContext), B(h))), h;
        const p = Object.assign(Object.assign({}, r.roomOptions.publishDefaults), s), b = "channelCount" in i.mediaStreamTrack.getSettings() && i.mediaStreamTrack.getSettings().channelCount === 2 || i.mediaStreamTrack.getConstraints().channelCount === 2, g = (c = p.forceStereo) !== null && c !== void 0 ? c : b;
        g && (p.dtx === void 0 && r.log.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", Object.assign(Object.assign({}, r.logContext), B(i))), p.red === void 0 && r.log.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), (d = p.dtx) !== null && d !== void 0 || (p.dtx = false), (l = p.red) !== null && l !== void 0 || (p.red = false)), !Ld() && r.roomOptions.e2ee && (r.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2", Object.assign({}, r.logContext)), p.simulcast = false), p.source && (i.source = p.source);
        const R = new Promise((k, I) => m(r, void 0, void 0, function* () {
          try {
            if (this.engine.client.currentState !== G.CONNECTED) {
              this.log.debug("deferring track publication until signal is connected", Object.assign(Object.assign({}, this.logContext), { track: B(i) }));
              let M = false;
              const v = setTimeout(() => {
                M = true, i.stop(), I(new Ns("publishing rejected as engine not connected within timeout", 408));
              }, 15e3);
              if (yield this.waitUntilEngineConnected(), clearTimeout(v), M) return;
              const y = yield this.publish(i, p, g);
              k(y);
            } else try {
              const M = yield this.publish(i, p, g);
              k(M);
            } catch (M) {
              I(M);
            }
          } catch (M) {
            I(M);
          }
        }));
        r.pendingPublishPromises.set(i, R);
        try {
          return yield R;
        } catch (k) {
          throw k;
        } finally {
          r.pendingPublishPromises.delete(i);
        }
      })();
    });
  }
  waitUntilEngineConnected() {
    return this.signalConnectedFuture || (this.signalConnectedFuture = new ke()), this.signalConnectedFuture.promise;
  }
  hasPermissionsToPublish(e) {
    if (!this.permissions) return this.log.warn("no permissions present for publishing track", Object.assign(Object.assign({}, this.logContext), B(e))), false;
    const { canPublish: t, canPublishSources: i } = this.permissions;
    return t && (i.length === 0 || i.map((s) => Rd(s)).includes(e.source)) ? true : (this.log.warn("insufficient permissions to publish", Object.assign(Object.assign({}, this.logContext), B(e))), false);
  }
  publish(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var s, r, o, a, c, d, l, u, h, p;
      if (!this.hasPermissionsToPublish(e)) throw new Ns("failed to publish track, insufficient permissions", 403);
      Array.from(this.trackPublications.values()).find((A) => kt(e) && A.source === e.source) && e.source !== T.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(e.source), Object.assign(Object.assign({}, this.logContext), B(e))), t.stopMicTrackOnMute && Oe(e) && (e.stopOnMute = true), e.source === T.Source.ScreenShare && at() && (t.simulcast = false), t.videoCodec === "av1" && !Dd() && (t.videoCodec = void 0), t.videoCodec === "vp9" && !Md() && (t.videoCodec = void 0), t.videoCodec === void 0 && (t.videoCodec = Cn), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some((A) => t.videoCodec === Lt(A.mime)) || (t.videoCodec = Lt(this.enabledPublishVideoCodecs[0].mime)));
      const g = t.videoCodec;
      e.on(P.Muted, this.onTrackMuted), e.on(P.Unmuted, this.onTrackUnmuted), e.on(P.Ended, this.handleTrackEnded), e.on(P.UpstreamPaused, this.onTrackUpstreamPaused), e.on(P.UpstreamResumed, this.onTrackUpstreamResumed), e.on(P.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
      const R = [], k = !(!((s = t.dtx) !== null && s !== void 0) || s), I = e.getSourceTrackSettings();
      I.autoGainControl && R.push(ne.TF_AUTO_GAIN_CONTROL), I.echoCancellation && R.push(ne.TF_ECHO_CANCELLATION), I.noiseSuppression && R.push(ne.TF_NOISE_SUPPRESSION), I.channelCount && I.channelCount > 1 && R.push(ne.TF_STEREO), k && R.push(ne.TF_NO_DTX), Ne(e) && e.hasPreConnectBuffer && R.push(ne.TF_PRECONNECT_BUFFER);
      const M = new Bt({ cid: e.mediaStreamTrack.id, name: t.name, type: T.kindToProto(e.kind), muted: e.isMuted, source: T.sourceToProto(e.source), disableDtx: k, encryption: this.encryptionType, stereo: i, disableRed: this.isE2EEEnabled || !(!((r = t.red) !== null && r !== void 0) || r), stream: t == null ? void 0 : t.stream, backupCodecPolicy: t == null ? void 0 : t.backupCodecPolicy, audioFeatures: R });
      let v;
      if (e.kind === T.Kind.Video) {
        let A = { width: 0, height: 0 };
        try {
          A = yield e.waitForDimensions();
        } catch {
          const x = (a = (o = this.roomOptions.videoCaptureDefaults) === null || o === void 0 ? void 0 : o.resolution) !== null && a !== void 0 ? a : Vt.h720.resolution;
          A = { width: x.width, height: x.height }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign(Object.assign({}, this.logContext), B(e)), { dims: A }));
        }
        M.width = A.width, M.height = A.height, Ke(e) && (Pe(g) && (e.source === T.Source.ScreenShare && (t.scalabilityMode = "L1T3", "contentHint" in e.mediaStreamTrack && (e.mediaStreamTrack.contentHint = "motion", this.log.info("forcing contentHint to motion for screenshare with SVC codecs", Object.assign(Object.assign({}, this.logContext), B(e))))), t.scalabilityMode = (c = t.scalabilityMode) !== null && c !== void 0 ? c : "L3T3_KEY"), M.simulcastCodecs = [new an({ codec: g, cid: e.mediaStreamTrack.id })], t.backupCodec === true && (t.backupCodec = { codec: Cn }), t.backupCodec && g !== t.backupCodec.codec && M.encryption === te.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = true), M.simulcastCodecs.push(new an({ codec: t.backupCodec.codec, cid: "" })))), v = Pn(e.source === T.Source.ScreenShare, M.width, M.height, t), M.layers = dr(M.width, M.height, v, Pe(t.videoCodec));
      } else e.kind === T.Kind.Audio && (v = [{ maxBitrate: (d = t.audioPreset) === null || d === void 0 ? void 0 : d.maxBitrate, priority: (u = (l = t.audioPreset) === null || l === void 0 ? void 0 : l.priority) !== null && u !== void 0 ? u : "high", networkPriority: (p = (h = t.audioPreset) === null || h === void 0 ? void 0 : h.priority) !== null && p !== void 0 ? p : "high" }]);
      if (!this.engine || this.engine.isClosed) throw new $("cannot publish track when not connected");
      const y = () => m(this, void 0, void 0, function* () {
        var A, O, x;
        if (!this.engine.pcManager) throw new $("pcManager is not ready");
        if (e.sender = yield this.engine.createSender(e, t, v), this.emit(w.LocalSenderCreated, e.sender, e), Ke(e) && ((A = t.degradationPreference) !== null && A !== void 0 || (t.degradationPreference = ql(e)), e.setDegradationPreference(t.degradationPreference)), v) if (at() && e.kind === T.Kind.Audio) {
          let F;
          for (const z of this.engine.pcManager.publisher.getTransceivers()) if (z.sender === e.sender) {
            F = z;
            break;
          }
          F && this.engine.pcManager.publisher.setTrackCodecBitrate({ transceiver: F, codec: "opus", maxbr: !((O = v[0]) === null || O === void 0) && O.maxBitrate ? v[0].maxBitrate / 1e3 : 0 });
        } else e.codec && Pe(e.codec) && (!((x = v[0]) === null || x === void 0) && x.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({ cid: M.cid, codec: e.codec, maxbr: v[0].maxBitrate / 1e3 });
        yield this.engine.negotiate();
      });
      let C;
      const D = new Promise((A, O) => m(this, void 0, void 0, function* () {
        var x;
        try {
          C = yield this.engine.addTrack(M), A(C);
        } catch (F) {
          e.sender && (!((x = this.engine.pcManager) === null || x === void 0) && x.publisher) && (this.engine.pcManager.publisher.removeTrack(e.sender), yield this.engine.negotiate().catch((z) => {
            this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign(Object.assign({}, this.logContext), B(e)), { error: z }));
          })), O(F);
        }
      }));
      if (this.enabledPublishVideoCodecs.length > 0) C = (yield Promise.all([D, y()]))[0];
      else {
        C = yield D;
        let A;
        if (C.codecs.forEach((O) => {
          A === void 0 && (A = O.mimeType);
        }), A && e.kind === T.Kind.Video) {
          const O = Lt(A);
          O !== g && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign(Object.assign({}, this.logContext), B(e)), { codec: O })), t.videoCodec = O, v = Pn(e.source === T.Source.ScreenShare, M.width, M.height, t));
        }
        yield y();
      }
      const N = new _n(e.kind, C, e, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
      if (N.on(P.CpuConstrained, (A) => this.onTrackCpuConstrained(A, N)), N.options = t, e.sid = C.sid, this.log.debug("publishing ".concat(e.kind, " with encodings"), Object.assign(Object.assign({}, this.logContext), { encodings: v, trackInfo: C })), Ke(e) ? e.startMonitor(this.engine.client) : Ne(e) && e.startMonitor(), this.addTrackPublication(N), this.emit(w.LocalTrackPublished, N), Ne(e) && C.audioFeatures.includes(ne.TF_PRECONNECT_BUFFER)) {
        const A = e.getPreConnectBuffer(), O = e.getPreConnectBufferMimeType();
        this.on(w.LocalTrackSubscribed, (x) => {
          if (x.trackSid === C.sid) {
            if (!e.hasPreConnectBuffer) {
              this.log.warn("subscribe event came to late, buffer already closed", this.logContext);
              return;
            }
            this.log.debug("finished recording preconnect buffer", Object.assign(Object.assign({}, this.logContext), B(e))), e.stopPreConnectBuffer();
          }
        }), A && new Promise((F, z) => m(this, void 0, void 0, function* () {
          var ge, tt, oe, qe, Ii, Oi;
          try {
            this.log.debug("waiting for agent", Object.assign(Object.assign({}, this.logContext), B(e)));
            const xi = setTimeout(() => {
              z(new Error("agent not active within 10 seconds"));
            }, 1e4), so = yield this.waitUntilActiveAgentPresent();
            clearTimeout(xi), this.log.debug("sending preconnect buffer", Object.assign(Object.assign({}, this.logContext), B(e)));
            const ns = yield this.streamBytes({ name: "preconnect-buffer", mimeType: O, topic: "lk.agent.pre-connect-audio-buffer", destinationIdentities: [so.identity], attributes: { trackId: N.trackSid, sampleRate: String((Ii = I.sampleRate) !== null && Ii !== void 0 ? Ii : "48000"), channels: String((Oi = I.channelCount) !== null && Oi !== void 0 ? Oi : "1") } });
            try {
              for (var Di = true, Mi = je(A), Ai; Ai = yield Mi.next(), ge = Ai.done, !ge; Di = true) {
                qe = Ai.value, Di = false;
                const Ni = qe;
                yield ns.write(Ni);
              }
            } catch (Ni) {
              tt = { error: Ni };
            } finally {
              try {
                !Di && !ge && (oe = Mi.return) && (yield oe.call(Mi));
              } finally {
                if (tt) throw tt.error;
              }
            }
            yield ns.close(), F();
          } catch (xi) {
            z(xi);
          }
        })).then(() => {
          this.log.debug("preconnect buffer sent successfully", Object.assign(Object.assign({}, this.logContext), B(e)));
        }).catch((F) => {
          this.log.error("error sending preconnect buffer", Object.assign(Object.assign(Object.assign({}, this.logContext), B(e)), { error: F }));
        });
      }
      return N;
    });
  }
  get isLocal() {
    return true;
  }
  publishAdditionalCodecForTrack(e, t, i) {
    return m(this, void 0, void 0, function* () {
      var s;
      if (this.encryptionType !== te.NONE) return;
      let r;
      if (this.trackPublications.forEach((p) => {
        p.track && p.track === e && (r = p);
      }), !r) throw new Be("track is not published");
      if (!Ke(e)) throw new Be("track is not a video track");
      const o = Object.assign(Object.assign({}, (s = this.roomOptions) === null || s === void 0 ? void 0 : s.publishDefaults), i), a = jl(e, t, o);
      if (!a) {
        this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", Object.assign(Object.assign({}, this.logContext), B(e)));
        return;
      }
      const c = e.addSimulcastTrack(t, a);
      if (!c) return;
      const d = new Bt({ cid: c.mediaStreamTrack.id, type: T.kindToProto(e.kind), muted: e.isMuted, source: T.sourceToProto(e.source), sid: e.sid, simulcastCodecs: [{ codec: o.videoCodec, cid: c.mediaStreamTrack.id }] });
      if (d.layers = dr(d.width, d.height, a), !this.engine || this.engine.isClosed) throw new $("cannot publish track when not connected");
      const l = () => m(this, void 0, void 0, function* () {
        yield this.engine.createSimulcastSender(e, c, o, a), yield this.engine.negotiate();
      }), h = (yield Promise.all([this.engine.addTrack(d), l()]))[0];
      this.log.debug("published ".concat(t, " for track ").concat(e.sid), Object.assign(Object.assign({}, this.logContext), { encodings: a, trackInfo: h }));
    });
  }
  unpublishTrack(e, t) {
    return m(this, void 0, void 0, function* () {
      var i, s;
      if (kt(e)) {
        const d = this.pendingPublishPromises.get(e);
        d && (this.log.info("awaiting publish promise before attempting to unpublish", Object.assign(Object.assign({}, this.logContext), B(e))), yield d);
      }
      const r = this.getPublicationForTrack(e), o = r ? B(r) : void 0;
      if (this.log.debug("unpublishing track", Object.assign(Object.assign({}, this.logContext), o)), !r || !r.track) {
        this.log.warn("track was not unpublished because no publication was found", Object.assign(Object.assign({}, this.logContext), o));
        return;
      }
      e = r.track, e.off(P.Muted, this.onTrackMuted), e.off(P.Unmuted, this.onTrackUnmuted), e.off(P.Ended, this.handleTrackEnded), e.off(P.UpstreamPaused, this.onTrackUpstreamPaused), e.off(P.UpstreamResumed, this.onTrackUpstreamResumed), e.off(P.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), t === void 0 && (t = (s = (i = this.roomOptions) === null || i === void 0 ? void 0 : i.stopLocalTrackOnUnpublish) !== null && s !== void 0 ? s : true), t ? e.stop() : e.stopMonitor();
      let a = false;
      const c = e.sender;
      if (e.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < Q.FAILED && c) try {
        for (const d of this.engine.pcManager.publisher.getTransceivers()) d.sender === c && (d.direction = "inactive", a = true);
        if (this.engine.removeTrack(c) && (a = true), Ke(e)) {
          for (const [, d] of e.simulcastCodecs) d.sender && (this.engine.removeTrack(d.sender) && (a = true), d.sender = void 0);
          e.simulcastCodecs.clear();
        }
      } catch (d) {
        this.log.warn("failed to unpublish track", Object.assign(Object.assign(Object.assign({}, this.logContext), o), { error: d }));
      }
      switch (this.trackPublications.delete(r.trackSid), r.kind) {
        case T.Kind.Audio:
          this.audioTrackPublications.delete(r.trackSid);
          break;
        case T.Kind.Video:
          this.videoTrackPublications.delete(r.trackSid);
          break;
      }
      return this.emit(w.LocalTrackUnpublished, r), r.setTrack(void 0), a && (yield this.engine.negotiate()), r;
    });
  }
  unpublishTracks(e) {
    return m(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map((i) => this.unpublishTrack(i)))).filter((i) => !!i);
    });
  }
  republishAllTracks(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return (function* () {
        i.republishPromise && (yield i.republishPromise), i.republishPromise = new me((r, o) => m(i, void 0, void 0, function* () {
          try {
            const a = [];
            this.trackPublications.forEach((c) => {
              c.track && (t && (c.options = Object.assign(Object.assign({}, c.options), t)), a.push(c));
            }), yield Promise.all(a.map((c) => m(this, void 0, void 0, function* () {
              const d = c.track;
              yield this.unpublishTrack(d, false), s && !d.isMuted && d.source !== T.Source.ScreenShare && d.source !== T.Source.ScreenShareAudio && (Ne(d) || Ke(d)) && !d.isUserProvided && (this.log.debug("restarting existing track", Object.assign(Object.assign({}, this.logContext), { track: c.trackSid })), yield d.restartTrack()), yield this.publishOrRepublishTrack(d, c.options, true);
            }))), r();
          } catch (a) {
            a instanceof Error ? o(a) : o(new Error(String(a)));
          } finally {
            this.republishPromise = void 0;
          }
        })), yield i.republishPromise;
      })();
    });
  }
  publishData(e) {
    return m(this, arguments, void 0, function(t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (function* () {
        const r = s.reliable ? j.RELIABLE : j.LOSSY, o = s.destinationIdentities, a = s.topic;
        let c = new xn({ participantIdentity: i.identity, payload: t, destinationIdentities: o, topic: a });
        const d = new de({ kind: r, value: { case: "user", value: c } });
        yield i.engine.sendDataPacket(d, r);
      })();
    });
  }
  publishDtmf(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = new de({ kind: j.RELIABLE, value: { case: "sipDtmf", value: new jr({ code: e, digit: t }) } });
      yield this.engine.sendDataPacket(i, j.RELIABLE);
    });
  }
  sendChatMessage(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = { id: crypto.randomUUID(), message: e, timestamp: Date.now(), attachedFiles: t == null ? void 0 : t.attachments }, s = new de({ value: { case: "chatMessage", value: new hi(Object.assign(Object.assign({}, i), { timestamp: J.parse(i.timestamp) })) } });
      return yield this.engine.sendDataPacket(s, j.RELIABLE), this.emit(w.ChatMessage, i), i;
    });
  }
  editChatMessage(e, t) {
    return m(this, void 0, void 0, function* () {
      const i = Object.assign(Object.assign({}, t), { message: e, editTimestamp: Date.now() }), s = new de({ value: { case: "chatMessage", value: new hi(Object.assign(Object.assign({}, i), { timestamp: J.parse(i.timestamp), editTimestamp: J.parse(i.editTimestamp) })) } });
      return yield this.engine.sendDataPacket(s, j.RELIABLE), this.emit(w.ChatMessage, i), i;
    });
  }
  sendText(e, t) {
    return m(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.sendText(e, t);
    });
  }
  streamText(e) {
    return m(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.streamText(e);
    });
  }
  sendFile(e, t) {
    return m(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.sendFile(e, t);
    });
  }
  streamBytes(e) {
    return m(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.streamBytes(e);
    });
  }
  performRpc(e) {
    let { destinationIdentity: t, method: i, payload: s, responseTimeout: r = 15e3 } = e;
    const o = 7e3, a = o + 1e3;
    return new me((c, d) => m(this, void 0, void 0, function* () {
      var l, u, h, p;
      if (es(s) > Qa) {
        d(X.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
        return;
      }
      if (!((u = (l = this.engine.latestJoinResponse) === null || l === void 0 ? void 0 : l.serverInfo) === null || u === void 0) && u.version && Me((p = (h = this.engine.latestJoinResponse) === null || h === void 0 ? void 0 : h.serverInfo) === null || p === void 0 ? void 0 : p.version, "1.8.0") < 0) {
        d(X.builtIn("UNSUPPORTED_SERVER"));
        return;
      }
      const b = Math.max(r, a), g = crypto.randomUUID();
      yield this.publishRpcRequest(t, g, i, s, b);
      const R = setTimeout(() => {
        this.pendingAcks.delete(g), d(X.builtIn("CONNECTION_TIMEOUT")), this.pendingResponses.delete(g), clearTimeout(k);
      }, o);
      this.pendingAcks.set(g, { resolve: () => {
        clearTimeout(R);
      }, participantIdentity: t });
      const k = setTimeout(() => {
        this.pendingResponses.delete(g), d(X.builtIn("RESPONSE_TIMEOUT"));
      }, r);
      this.pendingResponses.set(g, { resolve: (I, M) => {
        clearTimeout(k), this.pendingAcks.has(g) && (this.log.warn("RPC response received before ack", g), this.pendingAcks.delete(g), clearTimeout(R)), M ? d(M) : c(I ?? "");
      }, participantIdentity: t });
    }));
  }
  registerRpcMethod(e, t) {
    this.rpcHandlers.has(e) && this.log.warn("you're overriding the RPC handler for method ".concat(e, ", in the future this will throw an error")), this.rpcHandlers.set(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcHandlers.delete(e);
  }
  setTrackSubscriptionPermissions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    this.participantTrackPermissions = t, this.allParticipantsAllowedToSubscribe = e, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions();
  }
  handleIncomingRpcAck(e) {
    const t = this.pendingAcks.get(e);
    t ? (t.resolve(), this.pendingAcks.delete(e)) : console.error("Ack received for unexpected RPC request", e);
  }
  handleIncomingRpcResponse(e, t, i) {
    const s = this.pendingResponses.get(e);
    s ? (s.resolve(t, i), this.pendingResponses.delete(e)) : console.error("Response received for unexpected RPC request", e);
  }
  publishRpcRequest(e, t, i, s, r) {
    return m(this, void 0, void 0, function* () {
      const o = new de({ destinationIdentities: [e], kind: j.RELIABLE, value: { case: "rpcRequest", value: new Nn({ id: t, method: i, payload: s, responseTimeoutMs: r, version: 1 }) } });
      yield this.engine.sendDataPacket(o, j.RELIABLE);
    });
  }
  handleParticipantDisconnected(e) {
    for (const [t, { participantIdentity: i }] of this.pendingAcks) i === e && this.pendingAcks.delete(t);
    for (const [t, { participantIdentity: i, resolve: s }] of this.pendingResponses) i === e && (s(null, X.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(t));
  }
  setEnabledPublishCodecs(e) {
    this.enabledPublishVideoCodecs = e.filter((t) => t.mime.split("/")[0].toLowerCase() === "video");
  }
  updateInfo(e) {
    return super.updateInfo(e) ? (e.tracks.forEach((t) => {
      var i, s;
      const r = this.trackPublications.get(t.sid);
      if (r) {
        const o = r.isMuted || ((s = (i = r.track) === null || i === void 0 ? void 0 : i.isUpstreamPaused) !== null && s !== void 0 ? s : false);
        o !== t.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign(Object.assign({}, this.logContext), B(r)), { mutedOnServer: o })), this.engine.client.sendMuteTrack(t.sid, o));
      }
    }), true) : false;
  }
  setActiveAgent(e) {
    var t, i, s, r;
    this.firstActiveAgent = e, e && !this.firstActiveAgent && (this.firstActiveAgent = e), e ? (i = (t = this.activeAgentFuture) === null || t === void 0 ? void 0 : t.resolve) === null || i === void 0 || i.call(t, e) : (r = (s = this.activeAgentFuture) === null || s === void 0 ? void 0 : s.reject) === null || r === void 0 || r.call(s, new Error("Agent disconnected")), this.activeAgentFuture = void 0;
  }
  waitUntilActiveAgentPresent() {
    return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new ke()), this.activeAgentFuture.promise);
  }
  getPublicationForTrack(e) {
    let t;
    return this.trackPublications.forEach((i) => {
      const s = i.track;
      s && (e instanceof MediaStreamTrack ? (Ne(s) || Ke(s)) && s.mediaStreamTrack === e && (t = i) : e === s && (t = i));
    }), t;
  }
  waitForPendingPublicationOfSource(e) {
    return m(this, void 0, void 0, function* () {
      const i = Date.now();
      for (; Date.now() < i + 1e4; ) {
        const s = Array.from(this.pendingPublishPromises.entries()).find((r) => {
          let [o] = r;
          return o.source === e;
        });
        if (s) return s[1];
        yield ae(20);
      }
    });
  }
}
class lu extends Le {
  constructor(e, t, i, s) {
    super(e, t.sid, t.name, s), this.track = void 0, this.allowed = true, this.requestedDisabled = void 0, this.visible = true, this.handleEnded = (r) => {
      this.setTrack(void 0), this.emit(P.Ended, r);
    }, this.handleVisibilityChange = (r) => {
      this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(r), this.logContext), this.visible = r, this.emitTrackUpdate();
    }, this.handleVideoDimensionsChange = (r) => {
      this.log.debug("adaptivestream video dimensions ".concat(r.width, "x").concat(r.height), this.logContext), this.videoDimensionsAdaptiveStream = r, this.emitTrackUpdate();
    }, this.subscribed = i, this.updateInfo(t);
  }
  setSubscribed(e) {
    const t = this.subscriptionStatus, i = this.permissionStatus;
    this.subscribed = e, e && (this.allowed = true);
    const s = new Ei({ trackSids: [this.trackSid], subscribe: this.subscribed, participantTracks: [new Vr({ participantSid: "", trackSids: [this.trackSid] })] });
    this.emit(P.UpdateSubscription, s), this.emitSubscriptionUpdateIfChanged(t), this.emitPermissionUpdateIfChanged(i);
  }
  get subscriptionStatus() {
    return this.subscribed === false ? Le.SubscriptionStatus.Unsubscribed : super.isSubscribed ? Le.SubscriptionStatus.Subscribed : Le.SubscriptionStatus.Desired;
  }
  get permissionStatus() {
    return this.allowed ? Le.PermissionStatus.Allowed : Le.PermissionStatus.NotAllowed;
  }
  get isSubscribed() {
    return this.subscribed === false ? false : super.isSubscribed;
  }
  get isDesired() {
    return this.subscribed !== false;
  }
  get isEnabled() {
    return this.requestedDisabled !== void 0 ? !this.requestedDisabled : this.isAdaptiveStream ? this.visible : true;
  }
  get isLocal() {
    return false;
  }
  setEnabled(e) {
    !this.isManualOperationAllowed() || this.requestedDisabled === !e || (this.requestedDisabled = !e, this.emitTrackUpdate());
  }
  setVideoQuality(e) {
    !this.isManualOperationAllowed() || this.requestedMaxQuality === e || (this.requestedMaxQuality = e, this.requestedVideoDimensions = void 0, this.emitTrackUpdate());
  }
  setVideoDimensions(e) {
    var t, i;
    this.isManualOperationAllowed() && (((t = this.requestedVideoDimensions) === null || t === void 0 ? void 0 : t.width) === e.width && ((i = this.requestedVideoDimensions) === null || i === void 0 ? void 0 : i.height) === e.height || (Hi(this.track) && (this.requestedVideoDimensions = e), this.requestedMaxQuality = void 0, this.emitTrackUpdate()));
  }
  setVideoFPS(e) {
    this.isManualOperationAllowed() && Hi(this.track) && this.fps !== e && (this.fps = e, this.emitTrackUpdate());
  }
  get videoQuality() {
    var e;
    return (e = this.requestedMaxQuality) !== null && e !== void 0 ? e : ve.HIGH;
  }
  setTrack(e) {
    const t = this.subscriptionStatus, i = this.permissionStatus, s = this.track;
    s !== e && (s && (s.off(P.VideoDimensionsChanged, this.handleVideoDimensionsChange), s.off(P.VisibilityChanged, this.handleVisibilityChange), s.off(P.Ended, this.handleEnded), s.detach(), s.stopMonitor(), this.emit(P.Unsubscribed, s)), super.setTrack(e), e && (e.sid = this.trackSid, e.on(P.VideoDimensionsChanged, this.handleVideoDimensionsChange), e.on(P.VisibilityChanged, this.handleVisibilityChange), e.on(P.Ended, this.handleEnded), this.emit(P.Subscribed, e)), this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t));
  }
  setAllowed(e) {
    const t = this.subscriptionStatus, i = this.permissionStatus;
    this.allowed = e, this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t);
  }
  setSubscriptionError(e) {
    this.emit(P.SubscriptionFailed, e);
  }
  updateInfo(e) {
    super.updateInfo(e);
    const t = this.metadataMuted;
    this.metadataMuted = e.muted, this.track ? this.track.setMuted(e.muted) : t !== e.muted && this.emit(e.muted ? P.Muted : P.Unmuted);
  }
  emitSubscriptionUpdateIfChanged(e) {
    const t = this.subscriptionStatus;
    e !== t && this.emit(P.SubscriptionStatusChanged, t, e);
  }
  emitPermissionUpdateIfChanged(e) {
    this.permissionStatus !== e && this.emit(P.SubscriptionPermissionChanged, this.permissionStatus, e);
  }
  isManualOperationAllowed() {
    return this.isDesired ? true : (this.log.warn("cannot update track settings when not subscribed", this.logContext), false);
  }
  get isAdaptiveStream() {
    return Hi(this.track) && this.track.isAdaptiveStream;
  }
  emitTrackUpdate() {
    const e = new Yr({ trackSids: [this.trackSid], disabled: !this.isEnabled, fps: this.fps });
    if (this.kind === T.Kind.Video) {
      let t = this.requestedVideoDimensions;
      if (this.videoDimensionsAdaptiveStream !== void 0) if (t) Fs(this.videoDimensionsAdaptiveStream, t) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream);
      else if (this.requestedMaxQuality !== void 0 && this.trackInfo) {
        const i = _d(this.trackInfo, this.requestedMaxQuality);
        i && Fs(this.videoDimensionsAdaptiveStream, i) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream);
      } else this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream;
      t ? (e.width = Math.ceil(t.width), e.height = Math.ceil(t.height)) : this.requestedMaxQuality !== void 0 ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), { quality: this.requestedMaxQuality })), e.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), { quality: ve.HIGH })), e.quality = ve.HIGH);
    }
    this.emit(P.UpdateSettings, e);
  }
}
class yi extends io {
  static fromParticipantInfo(e, t, i) {
    return new yi(e, t.sid, t.identity, t.name, t.metadata, t.attributes, i, t.kind);
  }
  get logContext() {
    return Object.assign(Object.assign({}, super.logContext), { rpID: this.sid, remoteParticipant: this.identity });
  }
  constructor(e, t, i, s, r, o, a) {
    let c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : jt.STANDARD;
    super(t, i || "", s, r, o, a, c), this.signalClient = e, this.trackPublications = /* @__PURE__ */ new Map(), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.volumeMap = /* @__PURE__ */ new Map();
  }
  addTrackPublication(e) {
    super.addTrackPublication(e), e.on(P.UpdateSettings, (t) => {
      this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), B(e)), { settings: t })), this.signalClient.sendUpdateTrackSettings(t);
    }), e.on(P.UpdateSubscription, (t) => {
      t.participantTracks.forEach((i) => {
        i.participantSid = this.sid;
      }), this.signalClient.sendUpdateSubscription(t);
    }), e.on(P.SubscriptionPermissionChanged, (t) => {
      this.emit(w.TrackSubscriptionPermissionChanged, e, t);
    }), e.on(P.SubscriptionStatusChanged, (t) => {
      this.emit(w.TrackSubscriptionStatusChanged, e, t);
    }), e.on(P.Subscribed, (t) => {
      this.emit(w.TrackSubscribed, t, e);
    }), e.on(P.Unsubscribed, (t) => {
      this.emit(w.TrackUnsubscribed, t, e);
    }), e.on(P.SubscriptionFailed, (t) => {
      this.emit(w.TrackSubscriptionFailed, e.trackSid, t);
    });
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setVolume(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T.Source.Microphone;
    this.volumeMap.set(t, e);
    const i = this.getTrackPublication(t);
    i && i.track && i.track.setVolume(e);
  }
  getVolume() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T.Source.Microphone;
    const t = this.getTrackPublication(e);
    return t && t.track ? t.track.getVolume() : this.volumeMap.get(e);
  }
  addSubscribedMediaTrack(e, t, i, s, r, o) {
    let a = this.getTrackPublicationBySid(t);
    if (a || t.startsWith("TR") || this.trackPublications.forEach((l) => {
      !a && e.kind === l.kind.toString() && (a = l);
    }), !a) {
      if (o === 0) {
        this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), { trackSid: t })), this.emit(w.TrackSubscriptionFailed, t);
        return;
      }
      o === void 0 && (o = 20), setTimeout(() => {
        this.addSubscribedMediaTrack(e, t, i, s, r, o - 1);
      }, 150);
      return;
    }
    if (e.readyState === "ended") {
      this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), B(a))), this.emit(w.TrackSubscriptionFailed, t);
      return;
    }
    const c = e.kind === "video";
    let d;
    return c ? d = new nu(e, t, s, r) : d = new iu(e, t, s, this.audioContext, this.audioOutput), d.source = a.source, d.isMuted = a.isMuted, d.setMediaStream(i), d.start(), a.setTrack(d), this.volumeMap.has(a.source) && Tn(d) && Oe(d) && d.setVolume(this.volumeMap.get(a.source)), a;
  }
  get hasMetadata() {
    return !!this.participantInfo;
  }
  getTrackPublicationBySid(e) {
    return this.trackPublications.get(e);
  }
  updateInfo(e) {
    if (!super.updateInfo(e)) return false;
    const t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    return e.tracks.forEach((s) => {
      var r, o;
      let a = this.getTrackPublicationBySid(s.sid);
      if (a) a.updateInfo(s);
      else {
        const c = T.kindFromProto(s.type);
        if (!c) return;
        a = new lu(c, s, (r = this.signalClient.connectOptions) === null || r === void 0 ? void 0 : r.autoSubscribe, { loggerContextCb: () => this.logContext, loggerName: (o = this.loggerOptions) === null || o === void 0 ? void 0 : o.loggerName }), a.updateInfo(s), i.set(s.sid, a);
        const d = Array.from(this.trackPublications.values()).find((l) => l.source === (a == null ? void 0 : a.source));
        d && a.source !== T.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(a.source), Object.assign(Object.assign({}, this.logContext), { oldTrack: B(d), newTrack: B(a) })), this.addTrackPublication(a);
      }
      t.set(s.sid, a);
    }), this.trackPublications.forEach((s) => {
      t.has(s.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), B(s))), this.unpublishTrack(s.trackSid, true));
    }), i.forEach((s) => {
      this.emit(w.TrackPublished, s);
    }), true;
  }
  unpublishTrack(e, t) {
    const i = this.trackPublications.get(e);
    if (!i) return;
    const { track: s } = i;
    switch (s && (s.stop(), i.setTrack(void 0)), this.trackPublications.delete(e), i.kind) {
      case T.Kind.Audio:
        this.audioTrackPublications.delete(e);
        break;
      case T.Kind.Video:
        this.videoTrackPublications.delete(e);
        break;
    }
    t && this.emit(w.TrackUnpublished, i);
  }
  setAudioOutput(e) {
    return m(this, void 0, void 0, function* () {
      this.audioOutput = e;
      const t = [];
      this.audioTrackPublications.forEach((i) => {
        var s;
        Oe(i.track) && Tn(i.track) && t.push(i.track.setSinkId((s = e.deviceId) !== null && s !== void 0 ? s : "default"));
      }), yield Promise.all(t);
    });
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), { event: e, args: i })), super.emit(e, ...i);
  }
}
var W;
(function(n) {
  n.Disconnected = "disconnected", n.Connecting = "connecting", n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting";
})(W || (W = {}));
const uu = 4 * 1e3;
class Pt extends Ae.EventEmitter {
  get hasE2EESetup() {
    return this.e2eeManager !== void 0;
  }
  constructor(e) {
    var t, i, s, r, o;
    if (super(), t = this, this.state = W.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = false, this.audioEnabled = true, this.isVideoPlaybackBlocked = false, this.log = U, this.bufferedEvents = [], this.isResuming = false, this.rpcHandlers = /* @__PURE__ */ new Map(), this.connect = (a, c, d) => m(this, void 0, void 0, function* () {
      var l;
      if (!Ad()) throw De() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
      const u = yield this.disconnectLock.lock();
      if (this.state === W.Connected) return this.log.info("already connected to room ".concat(this.name), this.logContext), u(), Promise.resolve();
      if (this.connectFuture) return u(), this.connectFuture.promise;
      this.setAndEmitConnectionState(W.Connecting), ((l = this.regionUrlProvider) === null || l === void 0 ? void 0 : l.getServerUrl().toString()) !== Ga(a) && (this.regionUrl = void 0, this.regionUrlProvider = void 0), Et(new URL(a)) && (this.regionUrlProvider === void 0 ? this.regionUrlProvider = new q(a, c) : this.regionUrlProvider.updateToken(c), this.regionUrlProvider.fetchRegionSettings().then((b) => {
        var g;
        (g = this.regionUrlProvider) === null || g === void 0 || g.setServerReportedRegions(b);
      }).catch((b) => {
        this.log.warn("could not fetch region settings", Object.assign(Object.assign({}, this.logContext), { error: b }));
      }));
      const h = (b, g, R) => m(this, void 0, void 0, function* () {
        var k, I;
        this.abortController && this.abortController.abort();
        const M = new AbortController();
        this.abortController = M, u == null ? void 0 : u();
        try {
          if (yield Tt.getInstance().getBackOffPromise(a), M.signal.aborted) throw L.cancelled("Connection attempt aborted");
          yield this.attemptConnection(R ?? a, c, d, M), this.abortController = void 0, b();
        } catch (v) {
          if (this.regionUrlProvider && v instanceof L && v.reason !== H.Cancelled && v.reason !== H.NotAllowed) {
            let y = null;
            try {
              this.log.debug("Fetching next region"), y = yield this.regionUrlProvider.getNextBestRegionUrl((k = this.abortController) === null || k === void 0 ? void 0 : k.signal);
            } catch (C) {
              if (C instanceof L && (C.status === 401 || C.reason === H.Cancelled)) {
                this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), g(C);
                return;
              }
            }
            [H.InternalError, H.ServerUnreachable, H.Timeout].includes(v.reason) && (this.log.debug("Adding failed connection attempt to back off"), Tt.getInstance().addFailedConnectionAttempt(a)), y && !(!((I = this.abortController) === null || I === void 0) && I.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(v.message, ". Retrying with another region: ").concat(y), this.logContext), this.recreateEngine(), yield h(b, g, y)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, Gs(v)), g(v));
          } else {
            let y = Re.UNKNOWN_REASON;
            v instanceof L && (y = Gs(v)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, y), g(v);
          }
        }
      }), p = this.regionUrl;
      return this.regionUrl = void 0, this.connectFuture = new ke((b, g) => {
        h(b, g, p);
      }, () => {
        this.clearConnectionFutures();
      }), this.connectFuture.promise;
    }), this.connectSignal = (a, c, d, l, u, h) => m(this, void 0, void 0, function* () {
      var p, b, g;
      const R = yield d.join(a, c, { autoSubscribe: l.autoSubscribe, adaptiveStream: typeof u.adaptiveStream == "object" ? true : u.adaptiveStream, maxRetries: l.maxRetries, e2eeEnabled: !!this.e2eeManager, websocketTimeout: l.websocketTimeout }, h.signal, !u.singlePeerConnection);
      let k = R.serverInfo;
      if (k || (k = { version: R.serverVersion, region: R.serverRegion }), this.serverInfo = k, this.log.debug("connected to Livekit Server ".concat(Object.entries(k).map((I) => {
        let [M, v] = I;
        return "".concat(M, ": ").concat(v);
      }).join(", ")), { room: (p = R.room) === null || p === void 0 ? void 0 : p.name, roomSid: (b = R.room) === null || b === void 0 ? void 0 : b.sid, identity: (g = R.participant) === null || g === void 0 ? void 0 : g.identity }), !k.version) throw new fd("unknown server version");
      return k.version === "0.15.1" && this.options.dynacast && (this.log.debug("disabling dynacast due to server version", this.logContext), u.dynacast = false), R;
    }), this.applyJoinResponse = (a) => {
      const c = a.participant;
      if (this.localParticipant.sid = c.sid, this.localParticipant.identity = c.identity, this.localParticipant.setEnabledPublishCodecs(a.enabledPublishCodecs), this.e2eeManager) try {
        this.e2eeManager.setSifTrailer(a.sifTrailer);
      } catch (d) {
        this.log.error(d instanceof Error ? d.message : "Could not set SifTrailer", Object.assign(Object.assign({}, this.logContext), { error: d }));
      }
      this.handleParticipantUpdates([c, ...a.otherParticipants]), a.room && this.handleRoomUpdate(a.room);
    }, this.attemptConnection = (a, c, d, l) => m(this, void 0, void 0, function* () {
      var u, h;
      this.state === W.Reconnecting || this.isResuming || !((u = this.engine) === null || u === void 0) && u.pendingReconnect ? (this.log.info("Reconnection attempt replaced by new connection attempt", this.logContext), this.recreateEngine()) : this.maybeCreateEngine(), !((h = this.regionUrlProvider) === null || h === void 0) && h.isCloud() && this.engine.setRegionUrlProvider(this.regionUrlProvider), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, Zn), d), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
      try {
        const p = yield this.connectSignal(a, c, this.engine, this.connOptions, this.options, l);
        this.applyJoinResponse(p), this.setupLocalParticipantEvents(), this.emit(E.SignalConnected);
      } catch (p) {
        yield this.engine.close(), this.recreateEngine();
        const b = l.signal.aborted ? L.cancelled("Signal connection aborted") : L.serverUnreachable("could not establish signal connection");
        throw p instanceof Error && (b.message = "".concat(b.message, ": ").concat(p.message)), p instanceof L && (b.reason = p.reason, b.status = p.status), this.log.debug("error trying to establish signal connection", Object.assign(Object.assign({}, this.logContext), { error: p })), b;
      }
      if (l.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), L.cancelled("Connection attempt aborted");
      try {
        yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, l);
      } catch (p) {
        throw yield this.engine.close(), this.recreateEngine(), p;
      }
      pe() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), pe() && window.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(W.Connected), this.emit(E.Connected), Tt.getInstance().resetFailedConnectionAttempts(a), this.registerConnectionReconcile(), this.regionUrlProvider && this.regionUrlProvider.notifyConnected();
    }), this.disconnect = function() {
      for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
      return m(t, [...c], void 0, function() {
        var l = this;
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        return (function* () {
          var h, p, b;
          const g = yield l.disconnectLock.lock();
          try {
            if (l.state === W.Disconnected) {
              l.log.debug("already disconnected", l.logContext);
              return;
            }
            if (l.log.info("disconnect from room", Object.assign({}, l.logContext)), l.state === W.Connecting || l.state === W.Reconnecting || l.isResuming) {
              const R = "Abort connection attempt due to user initiated disconnect";
              l.log.warn(R, l.logContext), (h = l.abortController) === null || h === void 0 || h.abort(R), (b = (p = l.connectFuture) === null || p === void 0 ? void 0 : p.reject) === null || b === void 0 || b.call(p, L.cancelled("Client initiated disconnect")), l.connectFuture = void 0;
            }
            l.engine && (l.engine.client.isDisconnected || (yield l.engine.client.sendLeave()), yield l.engine.close()), l.handleDisconnect(u, Re.CLIENT_INITIATED), l.engine = void 0;
          } finally {
            g();
          }
        })();
      });
    }, this.onPageLeave = () => m(this, void 0, void 0, function* () {
      this.log.info("Page leave detected, disconnecting", this.logContext), yield this.disconnect();
    }), this.startAudio = () => m(this, void 0, void 0, function* () {
      const a = [], c = fe();
      if (c && c.os === "iOS") {
        const d = "livekit-dummy-audio-el";
        let l = document.getElementById(d);
        if (!l) {
          l = document.createElement("audio"), l.id = d, l.autoplay = true, l.hidden = true;
          const u = Gi();
          u.enabled = true;
          const h = new MediaStream([u]);
          l.srcObject = h, document.addEventListener("visibilitychange", () => {
            l && (l.srcObject = document.hidden ? null : h, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status", this.logContext), this.startAudio()));
          }), document.body.append(l), this.once(E.Disconnected, () => {
            l == null ? void 0 : l.remove(), l = null;
          });
        }
        a.push(l);
      }
      this.remoteParticipants.forEach((d) => {
        d.audioTrackPublications.forEach((l) => {
          l.track && l.track.attachedElements.forEach((u) => {
            a.push(u);
          });
        });
      });
      try {
        yield Promise.all([this.acquireAudioContext(), ...a.map((d) => (d.muted = false, d.play()))]), this.handleAudioPlaybackStarted();
      } catch (d) {
        throw this.handleAudioPlaybackFailed(d), d;
      }
    }), this.startVideo = () => m(this, void 0, void 0, function* () {
      const a = [];
      for (const c of this.remoteParticipants.values()) c.videoTrackPublications.forEach((d) => {
        var l;
        (l = d.track) === null || l === void 0 || l.attachedElements.forEach((u) => {
          a.includes(u) || a.push(u);
        });
      });
      yield Promise.all(a.map((c) => c.play())).then(() => {
        this.handleVideoPlaybackStarted();
      }).catch((c) => {
        c.name === "NotAllowedError" ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler", this.logContext);
      });
    }), this.handleRestarting = () => {
      this.clearConnectionReconcile(), this.isResuming = false;
      for (const a of this.remoteParticipants.values()) this.handleParticipantDisconnected(a.identity, a);
      this.setAndEmitConnectionState(W.Reconnecting) && this.emit(E.Reconnecting);
    }, this.handleSignalRestarted = (a) => m(this, void 0, void 0, function* () {
      this.log.debug("signal reconnected to server, region ".concat(a.serverRegion), Object.assign(Object.assign({}, this.logContext), { region: a.serverRegion })), this.bufferedEvents = [], this.applyJoinResponse(a);
      try {
        yield this.localParticipant.republishAllTracks(void 0, true);
      } catch (c) {
        this.log.error("error trying to re-publish tracks after reconnection", Object.assign(Object.assign({}, this.logContext), { error: c }));
      }
      try {
        yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", Object.assign(Object.assign({}, this.logContext), { region: a.serverRegion }));
      } catch {
        return;
      }
      this.setAndEmitConnectionState(W.Connected), this.emit(E.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents();
    }), this.handleParticipantUpdates = (a) => {
      a.forEach((c) => {
        var d;
        if (c.identity === this.localParticipant.identity) {
          this.localParticipant.updateInfo(c);
          return;
        }
        c.identity === "" && (c.identity = (d = this.sidToIdentity.get(c.sid)) !== null && d !== void 0 ? d : "");
        let l = this.remoteParticipants.get(c.identity);
        c.state === ft.DISCONNECTED ? this.handleParticipantDisconnected(c.identity, l) : l = this.getOrCreateParticipant(c.identity, c);
      });
    }, this.handleActiveSpeakersUpdate = (a) => {
      const c = [], d = {};
      a.forEach((l) => {
        if (d[l.sid] = true, l.sid === this.localParticipant.sid) this.localParticipant.audioLevel = l.level, this.localParticipant.setIsSpeaking(true), c.push(this.localParticipant);
        else {
          const u = this.getRemoteParticipantBySid(l.sid);
          u && (u.audioLevel = l.level, u.setIsSpeaking(true), c.push(u));
        }
      }), d[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(false)), this.remoteParticipants.forEach((l) => {
        d[l.sid] || (l.audioLevel = 0, l.setIsSpeaking(false));
      }), this.activeSpeakers = c, this.emitWhenConnected(E.ActiveSpeakersChanged, c);
    }, this.handleSpeakersChanged = (a) => {
      const c = /* @__PURE__ */ new Map();
      this.activeSpeakers.forEach((l) => {
        const u = this.remoteParticipants.get(l.identity);
        u && u.sid !== l.sid || c.set(l.sid, l);
      }), a.forEach((l) => {
        let u = this.getRemoteParticipantBySid(l.sid);
        l.sid === this.localParticipant.sid && (u = this.localParticipant), u && (u.audioLevel = l.level, u.setIsSpeaking(l.active), l.active ? c.set(l.sid, u) : c.delete(l.sid));
      });
      const d = Array.from(c.values());
      d.sort((l, u) => u.audioLevel - l.audioLevel), this.activeSpeakers = d, this.emitWhenConnected(E.ActiveSpeakersChanged, d);
    }, this.handleStreamStateUpdate = (a) => {
      a.streamStates.forEach((c) => {
        const d = this.getRemoteParticipantBySid(c.participantSid);
        if (!d) return;
        const l = d.getTrackPublicationBySid(c.trackSid);
        if (!l || !l.track) return;
        const u = T.streamStateFromProto(c.state);
        l.track.setStreamState(u), u !== l.track.streamState && (d.emit(w.TrackStreamStateChanged, l, l.track.streamState), this.emitWhenConnected(E.TrackStreamStateChanged, l, l.track.streamState, d));
      });
    }, this.handleSubscriptionPermissionUpdate = (a) => {
      const c = this.getRemoteParticipantBySid(a.participantSid);
      if (!c) return;
      const d = c.getTrackPublicationBySid(a.trackSid);
      d && d.setAllowed(a.allowed);
    }, this.handleSubscriptionError = (a) => {
      const c = Array.from(this.remoteParticipants.values()).find((l) => l.trackPublications.has(a.trackSid));
      if (!c) return;
      const d = c.getTrackPublicationBySid(a.trackSid);
      d && d.setSubscriptionError(a.err);
    }, this.handleDataPacket = (a, c) => {
      const d = this.remoteParticipants.get(a.participantIdentity);
      if (a.value.case === "user") this.handleUserPacket(d, a.value.value, a.kind, c);
      else if (a.value.case === "transcription") this.handleTranscription(d, a.value.value);
      else if (a.value.case === "sipDtmf") this.handleSipDtmf(d, a.value.value);
      else if (a.value.case === "chatMessage") this.handleChatMessage(d, a.value.value);
      else if (a.value.case === "metrics") this.handleMetrics(a.value.value, d);
      else if (a.value.case === "streamHeader" || a.value.case === "streamChunk" || a.value.case === "streamTrailer") this.handleDataStream(a, c);
      else if (a.value.case === "rpcRequest") {
        const l = a.value.value;
        this.handleIncomingRpcRequest(a.participantIdentity, l.id, l.method, l.payload, l.responseTimeoutMs, l.version);
      }
    }, this.handleUserPacket = (a, c, d, l) => {
      this.emit(E.DataReceived, c.payload, a, d, c.topic, l), a == null ? void 0 : a.emit(w.DataReceived, c.payload, d, l);
    }, this.handleSipDtmf = (a, c) => {
      this.emit(E.SipDTMFReceived, c, a), a == null ? void 0 : a.emit(w.SipDTMFReceived, c);
    }, this.handleTranscription = (a, c) => {
      const d = c.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(c.transcribedParticipantIdentity), l = d == null ? void 0 : d.trackPublications.get(c.trackId), u = qd(c, this.transcriptionReceivedTimes);
      l == null ? void 0 : l.emit(P.TranscriptionReceived, u), d == null ? void 0 : d.emit(w.TranscriptionReceived, u, l), this.emit(E.TranscriptionReceived, u, d, l);
    }, this.handleChatMessage = (a, c) => {
      const d = Wd(c);
      this.emit(E.ChatMessage, d, a);
    }, this.handleMetrics = (a, c) => {
      this.emit(E.MetricsReceived, a, c);
    }, this.handleDataStream = (a, c) => {
      this.incomingDataStreamManager.handleDataStreamPacket(a, c);
    }, this.bufferedSegments = /* @__PURE__ */ new Map(), this.handleAudioPlaybackStarted = () => {
      this.canPlaybackAudio || (this.audioEnabled = true, this.emit(E.AudioPlaybackStatusChanged, true));
    }, this.handleAudioPlaybackFailed = (a) => {
      this.log.warn("could not playback audio", Object.assign(Object.assign({}, this.logContext), { error: a })), this.canPlaybackAudio && (this.audioEnabled = false, this.emit(E.AudioPlaybackStatusChanged, false));
    }, this.handleVideoPlaybackStarted = () => {
      this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = false, this.emit(E.VideoPlaybackStatusChanged, true));
    }, this.handleVideoPlaybackFailed = () => {
      this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = true, this.emit(E.VideoPlaybackStatusChanged, false));
    }, this.handleDeviceChange = () => m(this, void 0, void 0, function* () {
      var a;
      ((a = fe()) === null || a === void 0 ? void 0 : a.os) !== "iOS" && (yield this.selectDefaultDevices()), this.emit(E.MediaDevicesChanged);
    }), this.handleRoomUpdate = (a) => {
      const c = this.roomInfo;
      this.roomInfo = a, c && c.metadata !== a.metadata && this.emitWhenConnected(E.RoomMetadataChanged, a.metadata), (c == null ? void 0 : c.activeRecording) !== a.activeRecording && this.emitWhenConnected(E.RecordingStatusChanged, a.activeRecording);
    }, this.handleConnectionQualityUpdate = (a) => {
      a.updates.forEach((c) => {
        if (c.participantSid === this.localParticipant.sid) {
          this.localParticipant.setConnectionQuality(c.quality);
          return;
        }
        const d = this.getRemoteParticipantBySid(c.participantSid);
        d && d.setConnectionQuality(c.quality);
      });
    }, this.onLocalParticipantMetadataChanged = (a) => {
      this.emit(E.ParticipantMetadataChanged, a, this.localParticipant);
    }, this.onLocalParticipantNameChanged = (a) => {
      this.emit(E.ParticipantNameChanged, a, this.localParticipant);
    }, this.onLocalAttributesChanged = (a) => {
      this.emit(E.ParticipantAttributesChanged, a, this.localParticipant);
    }, this.onLocalTrackMuted = (a) => {
      this.emit(E.TrackMuted, a, this.localParticipant);
    }, this.onLocalTrackUnmuted = (a) => {
      this.emit(E.TrackUnmuted, a, this.localParticipant);
    }, this.onTrackProcessorUpdate = (a) => {
      var c;
      (c = a == null ? void 0 : a.onPublish) === null || c === void 0 || c.call(a, this);
    }, this.onLocalTrackPublished = (a) => m(this, void 0, void 0, function* () {
      var c, d, l, u, h, p;
      (c = a.track) === null || c === void 0 || c.on(P.TrackProcessorUpdate, this.onTrackProcessorUpdate), (d = a.track) === null || d === void 0 || d.on(P.Restarted, this.onLocalTrackRestarted), (h = (u = (l = a.track) === null || l === void 0 ? void 0 : l.getProcessor()) === null || u === void 0 ? void 0 : u.onPublish) === null || h === void 0 || h.call(u, this), this.emit(E.LocalTrackPublished, a, this.localParticipant), Ne(a.track) && (yield a.track.checkForSilence()) && this.emit(E.LocalAudioSilenceDetected, a);
      const b = yield (p = a.track) === null || p === void 0 ? void 0 : p.getDeviceId(false), g = vn(a.source);
      g && b && b !== this.localParticipant.activeDeviceMap.get(g) && (this.localParticipant.activeDeviceMap.set(g, b), this.emit(E.ActiveDeviceChanged, g, b));
    }), this.onLocalTrackUnpublished = (a) => {
      var c, d;
      (c = a.track) === null || c === void 0 || c.off(P.TrackProcessorUpdate, this.onTrackProcessorUpdate), (d = a.track) === null || d === void 0 || d.off(P.Restarted, this.onLocalTrackRestarted), this.emit(E.LocalTrackUnpublished, a, this.localParticipant);
    }, this.onLocalTrackRestarted = (a) => m(this, void 0, void 0, function* () {
      const c = yield a.getDeviceId(false), d = vn(a.source);
      d && c && c !== this.localParticipant.activeDeviceMap.get(d) && (this.log.debug("local track restarted, setting ".concat(d, " ").concat(c, " active"), this.logContext), this.localParticipant.activeDeviceMap.set(d, c), this.emit(E.ActiveDeviceChanged, d, c));
    }), this.onLocalConnectionQualityChanged = (a) => {
      this.emit(E.ConnectionQualityChanged, a, this.localParticipant);
    }, this.onMediaDevicesError = (a, c) => {
      this.emit(E.MediaDevicesError, a, c);
    }, this.onLocalParticipantPermissionsChanged = (a) => {
      this.emit(E.ParticipantPermissionsChanged, a, this.localParticipant);
    }, this.onLocalChatMessageSent = (a) => {
      this.emit(E.ChatMessage, a, this.localParticipant);
    }, this.setMaxListeners(100), this.remoteParticipants = /* @__PURE__ */ new Map(), this.sidToIdentity = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, Sl), e), this.log = Ve((i = this.options.loggerName) !== null && i !== void 0 ? i : _e.Room), this.transcriptionReceivedTimes = /* @__PURE__ */ new Map(), this.options.audioCaptureDefaults = Object.assign(Object.assign({}, Ha), e == null ? void 0 : e.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, Ja), e == null ? void 0 : e.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, Tl), e == null ? void 0 : e.publishDefaults), this.maybeCreateEngine(), this.incomingDataStreamManager = new $l(), this.outgoingDataStreamManager = new tu(this.engine, this.log), this.disconnectLock = new le(), this.localParticipant = new du("", "", this.engine, this.options, this.rpcHandlers, this.outgoingDataStreamManager), (this.options.e2ee || this.options.encryption) && this.setupE2EE(), this.engine.e2eeManager = this.e2eeManager, this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", Qe(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", Qe(this.options.audioCaptureDefaults.deviceId)), !((s = this.options.audioOutput) === null || s === void 0) && s.deviceId && this.switchActiveDevice("audiooutput", Qe(this.options.audioOutput.deviceId)).catch((a) => this.log.warn("Could not set audio output: ".concat(a.message), this.logContext)), pe()) {
      const a = new AbortController();
      (o = (r = navigator.mediaDevices) === null || r === void 0 ? void 0 : r.addEventListener) === null || o === void 0 || o.call(r, "devicechange", this.handleDeviceChange, { signal: a.signal }), Pt.cleanupRegistry && Pt.cleanupRegistry.register(this, () => {
        a.abort();
      });
    }
  }
  registerTextStreamHandler(e, t) {
    return this.incomingDataStreamManager.registerTextStreamHandler(e, t);
  }
  unregisterTextStreamHandler(e) {
    return this.incomingDataStreamManager.unregisterTextStreamHandler(e);
  }
  registerByteStreamHandler(e, t) {
    return this.incomingDataStreamManager.registerByteStreamHandler(e, t);
  }
  unregisterByteStreamHandler(e) {
    return this.incomingDataStreamManager.unregisterByteStreamHandler(e);
  }
  registerRpcMethod(e, t) {
    if (this.rpcHandlers.has(e)) throw Error("RPC handler already registered for method ".concat(e, ", unregisterRpcMethod before trying to register again"));
    this.rpcHandlers.set(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcHandlers.delete(e);
  }
  setE2EEEnabled(e) {
    return m(this, void 0, void 0, function* () {
      if (this.e2eeManager) yield Promise.all([this.localParticipant.setE2EEEnabled(e)]), this.localParticipant.identity !== "" && this.e2eeManager.setParticipantCryptorEnabled(e, this.localParticipant.identity);
      else throw Error("e2ee not configured, please set e2ee settings within the room options");
    });
  }
  setupE2EE() {
    var e;
    const t = !!this.options.encryption, i = this.options.encryption || this.options.e2ee;
    i && ("e2eeManager" in i ? (this.e2eeManager = i.e2eeManager, this.e2eeManager.isDataChannelEncryptionEnabled = t) : this.e2eeManager = new sl(i, t), this.e2eeManager.on(Je.ParticipantEncryptionStatusChanged, (s, r) => {
      Gd(r) && (this.isE2EEEnabled = s), this.emit(E.ParticipantEncryptionStatusChanged, s, r);
    }), this.e2eeManager.on(Je.EncryptionError, (s, r) => {
      const o = r ? this.getParticipantByIdentity(r) : void 0;
      this.emit(E.EncryptionError, s, o);
    }), (e = this.e2eeManager) === null || e === void 0 || e.setup(this));
  }
  get logContext() {
    var e;
    return { room: this.name, roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid, participant: this.localParticipant.identity, pID: this.localParticipant.sid };
  }
  get isRecording() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.activeRecording) !== null && t !== void 0 ? t : false;
  }
  getSid() {
    return this.state === W.Disconnected ? me.resolve("") : this.roomInfo && this.roomInfo.sid !== "" ? me.resolve(this.roomInfo.sid) : new me((e, t) => {
      const i = (s) => {
        s.sid !== "" && (this.engine.off(_.RoomUpdate, i), e(s.sid));
      };
      this.engine.on(_.RoomUpdate, i), this.once(E.Disconnected, () => {
        this.engine.off(_.RoomUpdate, i), t(new $("Room disconnected before room server id was available"));
      });
    });
  }
  get name() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "";
  }
  get metadata() {
    var e;
    return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata;
  }
  get numParticipants() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numParticipants) !== null && t !== void 0 ? t : 0;
  }
  get numPublishers() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numPublishers) !== null && t !== void 0 ? t : 0;
  }
  maybeCreateEngine() {
    this.engine && !this.engine.isClosed || (this.engine = new zl(this.options), this.engine.e2eeManager = this.e2eeManager, this.engine.on(_.ParticipantUpdate, this.handleParticipantUpdates).on(_.RoomUpdate, this.handleRoomUpdate).on(_.SpeakersChanged, this.handleSpeakersChanged).on(_.StreamStateChanged, this.handleStreamStateUpdate).on(_.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(_.SubscriptionError, this.handleSubscriptionError).on(_.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(_.MediaTrackAdded, (e, t, i) => {
      this.onTrackAdded(e, t, i);
    }).on(_.Disconnected, (e) => {
      this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e);
    }).on(_.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(_.DataPacketReceived, this.handleDataPacket).on(_.Resuming, () => {
      this.clearConnectionReconcile(), this.isResuming = true, this.log.info("Resuming signal connection", this.logContext), this.setAndEmitConnectionState(W.SignalReconnecting) && this.emit(E.SignalReconnecting);
    }).on(_.Resumed, () => {
      this.registerConnectionReconcile(), this.isResuming = false, this.log.info("Resumed signal connection", this.logContext), this.updateSubscriptions(), this.emitBufferedEvents(), this.setAndEmitConnectionState(W.Connected) && this.emit(E.Reconnected);
    }).on(_.SignalResumed, () => {
      this.bufferedEvents = [], (this.state === W.Reconnecting || this.isResuming) && this.sendSyncState();
    }).on(_.Restarting, this.handleRestarting).on(_.SignalRestarted, this.handleSignalRestarted).on(_.Offline, () => {
      this.setAndEmitConnectionState(W.Reconnecting) && this.emit(E.Reconnecting);
    }).on(_.DCBufferStatusChanged, (e, t) => {
      this.emit(E.DCBufferStatusChanged, e, t);
    }).on(_.LocalTrackSubscribed, (e) => {
      const t = this.localParticipant.getTrackPublications().find((i) => {
        let { trackSid: s } = i;
        return s === e;
      });
      if (!t) {
        this.log.warn("could not find local track subscription for subscribed event", this.logContext);
        return;
      }
      this.localParticipant.emit(w.LocalTrackSubscribed, t), this.emitWhenConnected(E.LocalTrackSubscribed, t, this.localParticipant);
    }).on(_.RoomMoved, (e) => {
      this.log.debug("room moved", e), e.room && this.handleRoomUpdate(e.room), this.remoteParticipants.forEach((t, i) => {
        this.handleParticipantDisconnected(i, t);
      }), this.emit(E.Moved, e.room.name), e.participant ? this.handleParticipantUpdates([e.participant, ...e.otherParticipants]) : this.handleParticipantUpdates(e.otherParticipants);
    }), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine), this.outgoingDataStreamManager && this.outgoingDataStreamManager.setupEngine(this.engine));
  }
  static getLocalDevices(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return se.getInstance().getDevices(e, t);
  }
  prepareConnection(e, t) {
    return m(this, void 0, void 0, function* () {
      if (this.state === W.Disconnected) {
        this.log.debug("prepareConnection to ".concat(e), this.logContext);
        try {
          if (Et(new URL(e)) && t) {
            this.regionUrlProvider = new q(e, t);
            const i = yield this.regionUrlProvider.getNextBestRegionUrl();
            i && this.state === W.Disconnected && (this.regionUrl = i, yield fetch(Wt(i), { method: "HEAD" }), this.log.debug("prepared connection to ".concat(i), this.logContext));
          } else yield fetch(Wt(e), { method: "HEAD" });
        } catch (i) {
          this.log.warn("could not prepare connection", Object.assign(Object.assign({}, this.logContext), { error: i }));
        }
      }
    });
  }
  getParticipantByIdentity(e) {
    return this.localParticipant.identity === e ? this.localParticipant : this.remoteParticipants.get(e);
  }
  clearConnectionFutures() {
    this.connectFuture = void 0;
  }
  simulateScenario(e, t) {
    return m(this, void 0, void 0, function* () {
      let i = () => m(this, void 0, void 0, function* () {
      }), s;
      switch (e) {
        case "signal-reconnect":
          yield this.engine.client.handleOnClose("simulate disconnect");
          break;
        case "speaker":
          s = new we({ scenario: { case: "speakerUpdate", value: 3 } });
          break;
        case "node-failure":
          s = new we({ scenario: { case: "nodeFailure", value: true } });
          break;
        case "server-leave":
          s = new we({ scenario: { case: "serverLeave", value: true } });
          break;
        case "migration":
          s = new we({ scenario: { case: "migration", value: true } });
          break;
        case "resume-reconnect":
          this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
          break;
        case "disconnect-signal-on-resume":
          i = () => m(this, void 0, void 0, function* () {
            yield this.engine.client.handleOnClose("simulate resume-disconnect");
          }), s = new we({ scenario: { case: "disconnectSignalOnResume", value: true } });
          break;
        case "disconnect-signal-on-resume-no-messages":
          i = () => m(this, void 0, void 0, function* () {
            yield this.engine.client.handleOnClose("simulate resume-disconnect");
          }), s = new we({ scenario: { case: "disconnectSignalOnResumeNoMessages", value: true } });
          break;
        case "full-reconnect":
          this.engine.fullReconnectOnNext = true, yield this.engine.client.handleOnClose("simulate full-reconnect");
          break;
        case "force-tcp":
        case "force-tls":
          s = new we({ scenario: { case: "switchCandidateProtocol", value: e === "force-tls" ? 2 : 1 } }), i = () => m(this, void 0, void 0, function* () {
            const r = this.engine.client.onLeave;
            r && r(new Pi({ reason: Re.CLIENT_INITIATED, action: gt.RECONNECT }));
          });
          break;
        case "subscriber-bandwidth":
          if (t === void 0 || typeof t != "number") throw new Error("subscriber-bandwidth requires a number as argument");
          s = new we({ scenario: { case: "subscriberBandwidth", value: nt(t) } });
          break;
        case "leave-full-reconnect":
          s = new we({ scenario: { case: "leaveRequestFullReconnect", value: true } });
      }
      s && (yield this.engine.client.sendSimulateScenario(s), yield i());
    });
  }
  get canPlaybackAudio() {
    return this.audioEnabled;
  }
  get canPlaybackVideo() {
    return !this.isVideoPlaybackBlocked;
  }
  getActiveDevice(e) {
    return this.localParticipant.activeDeviceMap.get(e);
  }
  switchActiveDevice(e, t) {
    return m(this, arguments, void 0, function(i, s) {
      var r = this;
      let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      return (function* () {
        var a, c, d, l, u, h, p;
        let b = true, g = false;
        const R = o ? { exact: s } : s;
        if (i === "audioinput") {
          g = r.localParticipant.audioTrackPublications.size === 0;
          const k = (a = r.getActiveDevice(i)) !== null && a !== void 0 ? a : r.options.audioCaptureDefaults.deviceId;
          r.options.audioCaptureDefaults.deviceId = R;
          const I = Array.from(r.localParticipant.audioTrackPublications.values()).filter((v) => v.source === T.Source.Microphone);
          try {
            b = (yield Promise.all(I.map((v) => {
              var y;
              return (y = v.audioTrack) === null || y === void 0 ? void 0 : y.setDeviceId(R);
            }))).every((v) => v === true);
          } catch (v) {
            throw r.options.audioCaptureDefaults.deviceId = k, v;
          }
          const M = I.some((v) => {
            var y, C;
            return (C = (y = v.track) === null || y === void 0 ? void 0 : y.isMuted) !== null && C !== void 0 ? C : false;
          });
          b && M && (g = true);
        } else if (i === "videoinput") {
          g = r.localParticipant.videoTrackPublications.size === 0;
          const k = (c = r.getActiveDevice(i)) !== null && c !== void 0 ? c : r.options.videoCaptureDefaults.deviceId;
          r.options.videoCaptureDefaults.deviceId = R;
          const I = Array.from(r.localParticipant.videoTrackPublications.values()).filter((v) => v.source === T.Source.Camera);
          try {
            b = (yield Promise.all(I.map((v) => {
              var y;
              return (y = v.videoTrack) === null || y === void 0 ? void 0 : y.setDeviceId(R);
            }))).every((v) => v === true);
          } catch (v) {
            throw r.options.videoCaptureDefaults.deviceId = k, v;
          }
          const M = I.some((v) => {
            var y, C;
            return (C = (y = v.track) === null || y === void 0 ? void 0 : y.isMuted) !== null && C !== void 0 ? C : false;
          });
          b && M && (g = true);
        } else if (i === "audiooutput") {
          if (g = true, !kn() && !r.options.webAudioMix || r.options.webAudioMix && r.audioContext && !("setSinkId" in r.audioContext)) throw new Error("cannot switch audio output, the current browser does not support it");
          r.options.webAudioMix && (s = (d = yield se.getInstance().normalizeDeviceId("audiooutput", s)) !== null && d !== void 0 ? d : ""), (l = (p = r.options).audioOutput) !== null && l !== void 0 || (p.audioOutput = {});
          const k = (u = r.getActiveDevice(i)) !== null && u !== void 0 ? u : r.options.audioOutput.deviceId;
          r.options.audioOutput.deviceId = s;
          try {
            r.options.webAudioMix && ((h = r.audioContext) === null || h === void 0 || h.setSinkId(s)), yield Promise.all(Array.from(r.remoteParticipants.values()).map((I) => I.setAudioOutput({ deviceId: s })));
          } catch (I) {
            throw r.options.audioOutput.deviceId = k, I;
          }
        }
        return g && (r.localParticipant.activeDeviceMap.set(i, s), r.emit(E.ActiveDeviceChanged, i, s)), b;
      })();
    });
  }
  setupLocalParticipantEvents() {
    this.localParticipant.on(w.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(w.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(w.AttributesChanged, this.onLocalAttributesChanged).on(w.TrackMuted, this.onLocalTrackMuted).on(w.TrackUnmuted, this.onLocalTrackUnmuted).on(w.LocalTrackPublished, this.onLocalTrackPublished).on(w.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(w.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(w.MediaDevicesError, this.onMediaDevicesError).on(w.AudioStreamAcquired, this.startAudio).on(w.ChatMessage, this.onLocalChatMessageSent).on(w.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged);
  }
  recreateEngine() {
    var e;
    (e = this.engine) === null || e === void 0 || e.close(), this.engine = void 0, this.isResuming = false, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine();
  }
  onTrackAdded(e, t, i) {
    if (this.state === W.Connecting || this.state === W.Reconnecting) {
      const u = () => {
        this.log.debug("deferring on track for later", { mediaTrackId: e.id, mediaStreamId: t.id, tracksInStream: t.getTracks().map((p) => p.id) }), this.onTrackAdded(e, t, i), h();
      }, h = () => {
        this.off(E.Reconnected, u), this.off(E.Connected, u), this.off(E.Disconnected, h);
      };
      this.once(E.Reconnected, u), this.once(E.Connected, u), this.once(E.Disconnected, h);
      return;
    }
    if (this.state === W.Disconnected) {
      this.log.warn("skipping incoming track after Room disconnected", this.logContext);
      return;
    }
    if (e.readyState === "ended") {
      this.log.info("skipping incoming track as it already ended", this.logContext);
      return;
    }
    const s = Od(t.id), r = s[0];
    let o = s[1], a = e.id;
    if (o && o.startsWith("TR") && (a = o), r === this.localParticipant.sid) {
      this.log.warn("tried to create RemoteParticipant for local participant", this.logContext);
      return;
    }
    const c = Array.from(this.remoteParticipants.values()).find((u) => u.sid === r);
    if (!c) {
      this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(r), this.logContext);
      return;
    }
    if (!a.startsWith("TR")) {
      const u = this.engine.getTrackIdForReceiver(i);
      if (!u) {
        this.log.error("Tried to add a track whose 'sid' could not be found for a participant, that's not present. Sid: ".concat(r), this.logContext);
        return;
      }
      a = u;
    }
    a.startsWith("TR") || this.log.warn("Tried to add a track whose 'sid' could not be determined for a participant, that's not present. Sid: ".concat(r, ", streamId: ").concat(o, ", trackId: ").concat(a), Object.assign(Object.assign({}, this.logContext), { rpID: r, streamId: o, trackId: a }));
    let d;
    this.options.adaptiveStream && (typeof this.options.adaptiveStream == "object" ? d = this.options.adaptiveStream : d = {});
    const l = c.addSubscribedMediaTrack(e, a, t, i, d);
    (l == null ? void 0 : l.isEncrypted) && !this.e2eeManager && this.emit(E.EncryptionError, new Error("Encrypted ".concat(l.source, " track received from participant ").concat(c.sid, ", but room does not have encryption enabled!")));
  }
  handleDisconnect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t = arguments.length > 1 ? arguments[1] : void 0;
    var i, s;
    if (this.clearConnectionReconcile(), this.isResuming = false, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.incomingDataStreamManager.clearControllers(), this.state !== W.Disconnected) {
      this.regionUrl = void 0, this.regionUrlProvider && this.regionUrlProvider.notifyDisconnected();
      try {
        this.remoteParticipants.forEach((r) => {
          r.trackPublications.forEach((o) => {
            r.unpublishTrack(o.trackSid);
          });
        }), this.localParticipant.trackPublications.forEach((r) => {
          var o, a, c;
          r.track && this.localParticipant.unpublishTrack(r.track, e), e ? ((o = r.track) === null || o === void 0 || o.detach(), (a = r.track) === null || a === void 0 || a.stop()) : (c = r.track) === null || c === void 0 || c.stopMonitor();
        }), this.localParticipant.off(w.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(w.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(w.AttributesChanged, this.onLocalAttributesChanged).off(w.TrackMuted, this.onLocalTrackMuted).off(w.TrackUnmuted, this.onLocalTrackUnmuted).off(w.LocalTrackPublished, this.onLocalTrackPublished).off(w.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(w.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(w.MediaDevicesError, this.onMediaDevicesError).off(w.AudioStreamAcquired, this.startAudio).off(w.ChatMessage, this.onLocalChatMessageSent).off(w.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && typeof this.options.webAudioMix == "boolean" && (this.audioContext.close(), this.audioContext = void 0), pe() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), (s = (i = navigator.mediaDevices) === null || i === void 0 ? void 0 : i.removeEventListener) === null || s === void 0 || s.call(i, "devicechange", this.handleDeviceChange));
      } finally {
        this.setAndEmitConnectionState(W.Disconnected), this.emit(E.Disconnected, t);
      }
    }
  }
  handleParticipantDisconnected(e, t) {
    var i;
    this.remoteParticipants.delete(e), t && (this.incomingDataStreamManager.validateParticipantHasNoActiveDataStreams(e), t.trackPublications.forEach((s) => {
      t.unpublishTrack(s.trackSid, true);
    }), this.emit(E.ParticipantDisconnected, t), t.setDisconnected(), (i = this.localParticipant) === null || i === void 0 || i.handleParticipantDisconnected(t.identity));
  }
  handleIncomingRpcRequest(e, t, i, s, r, o) {
    return m(this, void 0, void 0, function* () {
      if (yield this.engine.publishRpcAck(e, t), o !== 1) {
        yield this.engine.publishRpcResponse(e, t, null, X.builtIn("UNSUPPORTED_VERSION"));
        return;
      }
      const a = this.rpcHandlers.get(i);
      if (!a) {
        yield this.engine.publishRpcResponse(e, t, null, X.builtIn("UNSUPPORTED_METHOD"));
        return;
      }
      let c = null, d = null;
      try {
        const l = yield a({ requestId: t, callerIdentity: e, payload: s, responseTimeout: r });
        es(l) > Qa ? (c = X.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"), this.log.warn("RPC Response payload too large for ".concat(i))) : d = l;
      } catch (l) {
        l instanceof X ? c = l : (this.log.warn("Uncaught error returned by RPC handler for ".concat(i, ". Returning APPLICATION_ERROR instead."), l), c = X.builtIn("APPLICATION_ERROR"));
      }
      yield this.engine.publishRpcResponse(e, t, d, c);
    });
  }
  selectDefaultDevices() {
    return m(this, void 0, void 0, function* () {
      var e, t, i;
      const s = se.getInstance().previousDevices, r = yield se.getInstance().getDevices(void 0, false), o = fe();
      if ((o == null ? void 0 : o.name) === "Chrome" && o.os !== "iOS") for (let c of r) {
        const d = s.find((l) => l.deviceId === c.deviceId);
        d && d.label !== "" && d.kind === c.kind && d.label !== c.label && this.getActiveDevice(c.kind) === "default" && this.emit(E.ActiveDeviceChanged, c.kind, c.deviceId);
      }
      const a = ["audiooutput", "audioinput", "videoinput"];
      for (let c of a) {
        const d = Td(c), l = this.localParticipant.getTrackPublication(d);
        if (l && (!((e = l.track) === null || e === void 0) && e.isUserProvided)) continue;
        const u = r.filter((p) => p.kind === c), h = this.getActiveDevice(c);
        if (h === ((t = s.filter((p) => p.kind === c)[0]) === null || t === void 0 ? void 0 : t.deviceId) && u.length > 0 && ((i = u[0]) === null || i === void 0 ? void 0 : i.deviceId) !== h) {
          yield this.switchActiveDevice(c, u[0].deviceId);
          continue;
        }
        c === "audioinput" && !qt() || c === "videoinput" || u.length > 0 && !u.find((p) => p.deviceId === this.getActiveDevice(c)) && (c !== "audiooutput" || !qt()) && (yield this.switchActiveDevice(c, u[0].deviceId));
      }
    });
  }
  acquireAudioContext() {
    return m(this, void 0, void 0, function* () {
      var e, t;
      if (typeof this.options.webAudioMix != "boolean" && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : (!this.audioContext || this.audioContext.state === "closed") && (this.audioContext = (e = Ba()) !== null && e !== void 0 ? e : void 0), this.options.webAudioMix && this.remoteParticipants.forEach((s) => s.setAudioContext(this.audioContext)), this.localParticipant.setAudioContext(this.audioContext), this.audioContext && this.audioContext.state === "suspended") try {
        yield Promise.race([this.audioContext.resume(), ae(200)]);
      } catch (s) {
        this.log.warn("Could not resume audio context", Object.assign(Object.assign({}, this.logContext), { error: s }));
      }
      const i = ((t = this.audioContext) === null || t === void 0 ? void 0 : t.state) === "running";
      i !== this.canPlaybackAudio && (this.audioEnabled = i, this.emit(E.AudioPlaybackStatusChanged, i));
    });
  }
  createParticipant(e, t) {
    var i;
    let s;
    return t ? s = yi.fromParticipantInfo(this.engine.client, t, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }) : s = new yi(this.engine.client, "", e, void 0, void 0, void 0, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }), this.options.webAudioMix && s.setAudioContext(this.audioContext), !((i = this.options.audioOutput) === null || i === void 0) && i.deviceId && s.setAudioOutput(this.options.audioOutput).catch((r) => this.log.warn("Could not set audio output: ".concat(r.message), this.logContext)), s;
  }
  getOrCreateParticipant(e, t) {
    if (this.remoteParticipants.has(e)) {
      const s = this.remoteParticipants.get(e);
      return t && s.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), s;
    }
    const i = this.createParticipant(e, t);
    return this.remoteParticipants.set(e, i), this.sidToIdentity.set(t.sid, t.identity), this.emitWhenConnected(E.ParticipantConnected, i), i.on(w.TrackPublished, (s) => {
      this.emitWhenConnected(E.TrackPublished, s, i);
    }).on(w.TrackSubscribed, (s, r) => {
      s.kind === T.Kind.Audio ? (s.on(P.AudioPlaybackStarted, this.handleAudioPlaybackStarted), s.on(P.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : s.kind === T.Kind.Video && (s.on(P.VideoPlaybackFailed, this.handleVideoPlaybackFailed), s.on(P.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emit(E.TrackSubscribed, s, r, i);
    }).on(w.TrackUnpublished, (s) => {
      this.emit(E.TrackUnpublished, s, i);
    }).on(w.TrackUnsubscribed, (s, r) => {
      this.emit(E.TrackUnsubscribed, s, r, i);
    }).on(w.TrackMuted, (s) => {
      this.emitWhenConnected(E.TrackMuted, s, i);
    }).on(w.TrackUnmuted, (s) => {
      this.emitWhenConnected(E.TrackUnmuted, s, i);
    }).on(w.ParticipantMetadataChanged, (s) => {
      this.emitWhenConnected(E.ParticipantMetadataChanged, s, i);
    }).on(w.ParticipantNameChanged, (s) => {
      this.emitWhenConnected(E.ParticipantNameChanged, s, i);
    }).on(w.AttributesChanged, (s) => {
      this.emitWhenConnected(E.ParticipantAttributesChanged, s, i);
    }).on(w.ConnectionQualityChanged, (s) => {
      this.emitWhenConnected(E.ConnectionQualityChanged, s, i);
    }).on(w.ParticipantPermissionsChanged, (s) => {
      this.emitWhenConnected(E.ParticipantPermissionsChanged, s, i);
    }).on(w.TrackSubscriptionStatusChanged, (s, r) => {
      this.emitWhenConnected(E.TrackSubscriptionStatusChanged, s, r, i);
    }).on(w.TrackSubscriptionFailed, (s, r) => {
      this.emit(E.TrackSubscriptionFailed, s, i, r);
    }).on(w.TrackSubscriptionPermissionChanged, (s, r) => {
      this.emitWhenConnected(E.TrackSubscriptionPermissionChanged, s, r, i);
    }).on(w.Active, () => {
      this.emitWhenConnected(E.ParticipantActive, i), i.kind === jt.AGENT && this.localParticipant.setActiveAgent(i);
    }), t && i.updateInfo(t), i;
  }
  sendSyncState() {
    const e = Array.from(this.remoteParticipants.values()).reduce((i, s) => (i.push(...s.getTrackPublications()), i), []), t = this.localParticipant.getTrackPublications();
    this.engine.sendSyncState(e, t);
  }
  updateSubscriptions() {
    for (const e of this.remoteParticipants.values()) for (const t of e.videoTrackPublications.values()) t.isSubscribed && Kd(t) && t.emitTrackUpdate();
  }
  getRemoteParticipantBySid(e) {
    const t = this.sidToIdentity.get(e);
    if (t) return this.remoteParticipants.get(t);
  }
  registerConnectionReconcile() {
    this.clearConnectionReconcile();
    let e = 0;
    this.connectionReconcileInterval = re.setInterval(() => {
      !this.engine || this.engine.isClosed || !this.engine.verifyTransport() ? (e++, this.log.warn("detected connection state mismatch", Object.assign(Object.assign({}, this.logContext), { numFailures: e, engine: this.engine ? { closed: this.engine.isClosed, transportsConnected: this.engine.verifyTransport() } : void 0 })), e >= 3 && (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, Re.STATE_MISMATCH))) : e = 0;
    }, uu);
  }
  clearConnectionReconcile() {
    this.connectionReconcileInterval && re.clearInterval(this.connectionReconcileInterval);
  }
  setAndEmitConnectionState(e) {
    return e === this.state ? false : (this.state = e, this.emit(E.ConnectionStateChanged, this.state), true);
  }
  emitBufferedEvents() {
    this.bufferedEvents.forEach((e) => {
      let [t, i] = e;
      this.emit(t, ...i);
    }), this.bufferedEvents = [];
  }
  emitWhenConnected(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    if (this.state === W.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([e, i]);
    else if (this.state === W.Connected) return this.emit(e, ...i);
    return false;
  }
  simulateParticipants(e) {
    return m(this, void 0, void 0, function* () {
      var t, i, s, r;
      const o = Object.assign({ audio: true, video: true, useRealTracks: false }, e.publish), a = Object.assign({ count: 9, audio: false, video: true, aspectRatios: [1.66, 1.7, 1.3] }, e.participants);
      if (this.handleDisconnect(), this.roomInfo = new Ti({ sid: "RM_SIMULATED", name: "simulated-room", emptyTimeout: 0, maxParticipants: 0, creationTime: J.parse((/* @__PURE__ */ new Date()).getTime()), metadata: "", numParticipants: 1, numPublishers: 1, turnPassword: "", enabledCodecs: [], activeRecording: false }), this.localParticipant.updateInfo(new rt({ identity: "simulated-local", name: "local-name" })), this.setupLocalParticipantEvents(), this.emit(E.SignalConnected), this.emit(E.Connected), this.setAndEmitConnectionState(W.Connected), o.video) {
        const c = new _n(T.Kind.Video, new ut({ source: ee.CAMERA, sid: Math.floor(Math.random() * 1e4).toString(), type: Ce.AUDIO, name: "video-dummy" }), new bi(o.useRealTracks && (!((t = window.navigator.mediaDevices) === null || t === void 0) && t.getUserMedia) ? (yield window.navigator.mediaDevices.getUserMedia({ video: true })).getVideoTracks()[0] : Ks(160 * ((i = a.aspectRatios[0]) !== null && i !== void 0 ? i : 1), 160, true, true), void 0, false, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
        this.localParticipant.addTrackPublication(c), this.localParticipant.emit(w.LocalTrackPublished, c);
      }
      if (o.audio) {
        const c = new _n(T.Kind.Audio, new ut({ source: ee.MICROPHONE, sid: Math.floor(Math.random() * 1e4).toString(), type: Ce.AUDIO }), new vi(o.useRealTracks && (!((s = navigator.mediaDevices) === null || s === void 0) && s.getUserMedia) ? (yield navigator.mediaDevices.getUserMedia({ audio: true })).getAudioTracks()[0] : Gi(), void 0, false, this.audioContext, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
        this.localParticipant.addTrackPublication(c), this.localParticipant.emit(w.LocalTrackPublished, c);
      }
      for (let c = 0; c < a.count - 1; c += 1) {
        let d = new rt({ sid: Math.floor(Math.random() * 1e4).toString(), identity: "simulated-".concat(c), state: ft.ACTIVE, tracks: [], joinedAt: J.parse(Date.now()) });
        const l = this.getOrCreateParticipant(d.identity, d);
        if (a.video) {
          const u = Ks(160 * ((r = a.aspectRatios[c % a.aspectRatios.length]) !== null && r !== void 0 ? r : 1), 160, false, true), h = new ut({ source: ee.CAMERA, sid: Math.floor(Math.random() * 1e4).toString(), type: Ce.AUDIO });
          l.addSubscribedMediaTrack(u, h.sid, new MediaStream([u]), new RTCRtpReceiver()), d.tracks = [...d.tracks, h];
        }
        if (a.audio) {
          const u = Gi(), h = new ut({ source: ee.MICROPHONE, sid: Math.floor(Math.random() * 1e4).toString(), type: Ce.AUDIO });
          l.addSubscribedMediaTrack(u, h.sid, new MediaStream([u]), new RTCRtpReceiver()), d.tracks = [...d.tracks, h];
        }
        l.updateInfo(d);
      }
    });
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    if (e !== E.ActiveSpeakersChanged && e !== E.TranscriptionReceived) {
      const r = no(i).filter((o) => o !== void 0);
      (e === E.TrackSubscribed || e === E.TrackUnsubscribed) && this.log.trace("subscribe trace: ".concat(e), Object.assign(Object.assign({}, this.logContext), { event: e, args: r })), this.log.debug("room event ".concat(e), Object.assign(Object.assign({}, this.logContext), { event: e, args: r }));
    }
    return super.emit(e, ...i);
  }
}
Pt.cleanupRegistry = typeof FinalizationRegistry < "u" && new FinalizationRegistry((n) => {
  n();
});
function no(n) {
  return n.map((e) => {
    if (e) return Array.isArray(e) ? no(e) : typeof e == "object" ? "logContext" in e ? e.logContext : void 0 : e;
  });
}
var Se;
(function(n) {
  n[n.IDLE = 0] = "IDLE", n[n.RUNNING = 1] = "RUNNING", n[n.SKIPPED = 2] = "SKIPPED", n[n.SUCCESS = 3] = "SUCCESS", n[n.FAILED = 4] = "FAILED";
})(Se || (Se = {}));
class et extends Ae.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(), this.status = Se.IDLE, this.logs = [], this.options = {}, this.url = e, this.token = t, this.name = this.constructor.name, this.room = new Pt(i.roomOptions), this.connectOptions = i.connectOptions, this.options = i;
  }
  run(e) {
    return m(this, void 0, void 0, function* () {
      if (this.status !== Se.IDLE) throw Error("check is running already");
      this.setStatus(Se.RUNNING);
      try {
        yield this.perform();
      } catch (t) {
        t instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(t.message) : this.appendError(t.message));
      }
      return yield this.disconnect(), yield new Promise((t) => setTimeout(t, 500)), this.status !== Se.SKIPPED && this.setStatus(this.isSuccess() ? Se.SUCCESS : Se.FAILED), e && e(), this.getInfo();
    });
  }
  isSuccess() {
    return !this.logs.some((e) => e.level === "error");
  }
  connect(e) {
    return m(this, void 0, void 0, function* () {
      return this.room.state === W.Connected ? this.room : (e || (e = this.url), yield this.room.connect(e, this.token, this.connectOptions), this.room);
    });
  }
  disconnect() {
    return m(this, void 0, void 0, function* () {
      this.room && this.room.state !== W.Disconnected && (yield this.room.disconnect(), yield new Promise((e) => setTimeout(e, 500)));
    });
  }
  skip() {
    this.setStatus(Se.SKIPPED);
  }
  switchProtocol(e) {
    return m(this, void 0, void 0, function* () {
      let t = false, i = false;
      if (this.room.on(E.Reconnecting, () => {
        t = true;
      }), this.room.once(E.Reconnected, () => {
        i = true;
      }), this.room.simulateScenario("force-".concat(e)), yield new Promise((r) => setTimeout(r, 1e3)), !t) return;
      const s = Date.now() + 1e4;
      for (; Date.now() < s; ) {
        if (i) return;
        yield ae(100);
      }
      throw new Error("Could not reconnect using ".concat(e, " protocol after 10 seconds"));
    });
  }
  appendMessage(e) {
    this.logs.push({ level: "info", message: e }), this.emit("update", this.getInfo());
  }
  appendWarning(e) {
    this.logs.push({ level: "warning", message: e }), this.emit("update", this.getInfo());
  }
  appendError(e) {
    this.logs.push({ level: "error", message: e }), this.emit("update", this.getInfo());
  }
  setStatus(e) {
    this.status = e, this.emit("update", this.getInfo());
  }
  get engine() {
    var e;
    return (e = this.room) === null || e === void 0 ? void 0 : e.engine;
  }
  getInfo() {
    return { logs: this.logs, name: this.name, status: this.status, description: this.description };
  }
}
class hu extends et {
  get description() {
    return "Cloud regions";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      const e = new q(this.url, this.token);
      if (!e.isCloud()) {
        this.skip();
        return;
      }
      const t = [], i = /* @__PURE__ */ new Set();
      for (let r = 0; r < 3; r++) {
        const o = yield e.getNextBestRegionUrl();
        if (!o) break;
        if (i.has(o)) continue;
        i.add(o);
        const a = yield this.checkCloudRegion(o);
        this.appendMessage("".concat(a.region, " RTT: ").concat(a.rtt, "ms, duration: ").concat(a.duration, "ms")), t.push(a);
      }
      t.sort((r, o) => (r.duration - o.duration) * 0.5 + (r.rtt - o.rtt) * 0.5);
      const s = t[0];
      this.bestStats = s, this.appendMessage("best Cloud region: ".concat(s.region));
    });
  }
  getInfo() {
    const e = super.getInfo();
    return e.data = this.bestStats, e;
  }
  checkCloudRegion(e) {
    return m(this, void 0, void 0, function* () {
      var t, i;
      yield this.connect(e), this.options.protocol === "tcp" && (yield this.switchProtocol("tcp"));
      const s = (t = this.room.serverInfo) === null || t === void 0 ? void 0 : t.region;
      if (!s) throw new Error("Region not found");
      const r = yield this.room.localParticipant.streamText({ topic: "test" }), o = 1e3, c = 1e6 / o, d = "A".repeat(o), l = Date.now();
      for (let b = 0; b < c; b++) yield r.write(d);
      yield r.close();
      const u = Date.now(), h = yield (i = this.room.engine.pcManager) === null || i === void 0 ? void 0 : i.publisher.getStats(), p = { region: s, rtt: 1e4, duration: u - l };
      return h == null ? void 0 : h.forEach((b) => {
        b.type === "candidate-pair" && b.nominated && (p.rtt = b.currentRoundTripTime * 1e3);
      }), yield this.disconnect(), p;
    });
  }
}
const en = 1e4;
class mu extends et {
  get description() {
    return "Connection via UDP vs TCP";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.checkConnectionProtocol("udp"), t = yield this.checkConnectionProtocol("tcp");
      this.bestStats = e, e.qualityLimitationDurations.bandwidth - t.qualityLimitationDurations.bandwidth > 0.5 || (e.packetsLost - t.packetsLost) / e.packetsSent > 0.01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t) : this.appendMessage("best connection quality via udp");
      const i = this.bestStats;
      this.appendMessage("upstream bitrate: ".concat((i.bitrateTotal / i.count / 1e3 / 1e3).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((i.rttTotal / i.count * 1e3).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((i.jitterTotal / i.count * 1e3).toFixed(2), " ms")), i.packetsLost > 0 && this.appendWarning("packets lost: ".concat((i.packetsLost / i.packetsSent * 100).toFixed(2), "%")), i.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((i.qualityLimitationDurations.bandwidth / (en / 1e3) * 100).toFixed(2), "%")), i.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((i.qualityLimitationDurations.cpu / (en / 1e3) * 100).toFixed(2), "%"));
    });
  }
  getInfo() {
    const e = super.getInfo();
    return e.data = this.bestStats, e;
  }
  checkConnectionProtocol(e) {
    return m(this, void 0, void 0, function* () {
      yield this.connect(), e === "tcp" ? yield this.switchProtocol("tcp") : yield this.switchProtocol("udp");
      const t = document.createElement("canvas");
      t.width = 1280, t.height = 720;
      const i = t.getContext("2d");
      if (!i) throw new Error("Could not get canvas context");
      let s = 0;
      const r = () => {
        s = (s + 1) % 360, i.fillStyle = "hsl(".concat(s, ", 100%, 50%)"), i.fillRect(0, 0, t.width, t.height), requestAnimationFrame(r);
      };
      r();
      const a = t.captureStream(30).getVideoTracks()[0], d = (yield this.room.localParticipant.publishTrack(a, { simulcast: false, degradationPreference: "maintain-resolution", videoEncoding: { maxBitrate: 2e6 } })).track, l = { protocol: e, packetsLost: 0, packetsSent: 0, qualityLimitationDurations: {}, rttTotal: 0, jitterTotal: 0, bitrateTotal: 0, count: 0 }, u = setInterval(() => m(this, void 0, void 0, function* () {
        const h = yield d.getRTCStatsReport();
        h == null ? void 0 : h.forEach((p) => {
          p.type === "outbound-rtp" ? (l.packetsSent = p.packetsSent, l.qualityLimitationDurations = p.qualityLimitationDurations, l.bitrateTotal += p.targetBitrate, l.count++) : p.type === "remote-inbound-rtp" && (l.packetsLost = p.packetsLost, l.rttTotal += p.roundTripTime, l.jitterTotal += p.jitter);
        });
      }), 1e3);
      return yield new Promise((h) => setTimeout(h, en)), clearInterval(u), a.stop(), t.remove(), yield this.disconnect(), l;
    });
  }
}
class pu extends et {
  get description() {
    return "Can publish audio";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(), i = yield au();
      if (yield ja(i, 1e3)) throw new Error("unable to detect audio from microphone");
      this.appendMessage("detected audio from microphone"), t.localParticipant.publishTrack(i), yield new Promise((a) => setTimeout(a, 3e3));
      const r = yield (e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let o = 0;
      if (r.forEach((a) => {
        a.type === "outbound-rtp" && (a.kind === "audio" || !a.kind && a.mediaType === "audio") && (o = a.packetsSent);
      }), o === 0) throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(o, " audio packets"));
    });
  }
}
class fu extends et {
  get description() {
    return "Can publish video";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(), i = yield ru();
      yield this.checkForVideo(i.mediaStreamTrack), t.localParticipant.publishTrack(i), yield new Promise((o) => setTimeout(o, 5e3));
      const s = yield (e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
      if (!s) throw new Error("Could not get RTCStats");
      let r = 0;
      if (s.forEach((o) => {
        o.type === "outbound-rtp" && (o.kind === "video" || !o.kind && o.mediaType === "video") && (r += o.packetsSent);
      }), r === 0) throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(r, " video packets"));
    });
  }
  checkForVideo(e) {
    return m(this, void 0, void 0, function* () {
      const t = new MediaStream();
      t.addTrack(e.clone());
      const i = document.createElement("video");
      i.srcObject = t, i.muted = true, i.autoplay = true, i.playsInline = true, i.setAttribute("playsinline", "true"), document.body.appendChild(i), yield new Promise((s) => {
        i.onplay = () => {
          setTimeout(() => {
            var r, o, a, c;
            const d = document.createElement("canvas"), l = e.getSettings(), u = (o = (r = l.width) !== null && r !== void 0 ? r : i.videoWidth) !== null && o !== void 0 ? o : 1280, h = (c = (a = l.height) !== null && a !== void 0 ? a : i.videoHeight) !== null && c !== void 0 ? c : 720;
            d.width = u, d.height = h;
            const p = d.getContext("2d");
            p.drawImage(i, 0, 0);
            const g = p.getImageData(0, 0, d.width, d.height).data;
            let R = true;
            for (let k = 0; k < g.length; k += 4) if (g[k] !== 0 || g[k + 1] !== 0 || g[k + 2] !== 0) {
              R = false;
              break;
            }
            R ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), s();
          }, 1e3);
        }, i.play();
      }), t.getTracks().forEach((s) => s.stop()), i.remove();
    });
  }
}
class gu extends et {
  get description() {
    return "Resuming connection after interruption";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect();
      let i = false, s = false, r;
      const o = new Promise((d) => {
        setTimeout(d, 5e3), r = d;
      }), a = () => {
        i = true;
      };
      t.on(E.SignalReconnecting, a).on(E.Reconnecting, a).on(E.Reconnected, () => {
        s = true, r(true);
      }), (e = t.engine.client.ws) === null || e === void 0 || e.close();
      const c = t.engine.client.onClose;
      if (c && c(""), yield o, i) {
        if (!s || t.state !== W.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect");
      } else throw new Error("Did not attempt to reconnect");
    });
  }
}
class vu extends et {
  get description() {
    return "Can connect via TURN";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t, i;
      Et(new URL(this.url)) && (this.appendMessage("Using region specific url"), this.url = (e = yield new q(this.url, this.token).getNextBestRegionUrl()) !== null && e !== void 0 ? e : this.url);
      const s = new Qn(), r = yield s.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true);
      let o = false, a = false, c = false;
      for (let d of r.iceServers) for (let l of d.urls) l.startsWith("turn:") ? (a = true, c = true) : l.startsWith("turns:") && (a = true, c = true, o = true), l.startsWith("stun:") && (c = true);
      c ? a && !o && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield s.close(), !((i = (t = this.connectOptions) === null || t === void 0 ? void 0 : t.rtcConfig) === null || i === void 0) && i.iceServers || a ? yield this.room.connect(this.url, this.token, { rtcConfig: { iceTransportPolicy: "relay" } }) : (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise((d) => setTimeout(d, 0)));
    });
  }
}
class bu extends et {
  get description() {
    return "Establishing WebRTC connection";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      let e = false, t = false;
      this.room.on(E.SignalConnected, () => {
        var i;
        const s = this.room.engine.client.onTrickle;
        this.room.engine.client.onTrickle = (r, o) => {
          if (r.candidate) {
            const a = new RTCIceCandidate(r);
            let c = "".concat(a.protocol, " ").concat(a.address, ":").concat(a.port, " ").concat(a.type);
            a.address && (yu(a.address) ? c += " (private)" : a.protocol === "tcp" && a.tcpType === "passive" ? (e = true, c += " (passive)") : a.protocol === "udp" && (t = true)), this.appendMessage(c);
          }
          s && s(r, o);
        }, !((i = this.room.engine.pcManager) === null || i === void 0) && i.subscriber && (this.room.engine.pcManager.subscriber.onIceCandidateError = (r) => {
          r instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(r.errorCode, " ").concat(r.errorText, " ").concat(r.url));
        });
      });
      try {
        yield this.connect(), U.info("now the room is connected");
      } catch (i) {
        throw this.appendWarning("ports need to be open on firewall in order to connect."), i;
      }
      e || this.appendWarning("Server is not configured for ICE/TCP"), t || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly");
    });
  }
}
function yu(n) {
  const e = n.split(".");
  if (e.length === 4) {
    if (e[0] === "10") return true;
    if (e[0] === "192" && e[1] === "168") return true;
    if (e[0] === "172") {
      const t = parseInt(e[1], 10);
      if (t >= 16 && t <= 31) return true;
    }
  }
  return false;
}
class ku extends et {
  get description() {
    return "Connecting to signal connection via WebSocket";
  }
  perform() {
    return m(this, void 0, void 0, function* () {
      var e, t, i;
      (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
      let s = new Qn(), r;
      try {
        r = yield s.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true);
      } catch (o) {
        if (Et(new URL(this.url))) {
          this.appendMessage("Initial connection failed with error ".concat(o.message, ". Retrying with region fallback"));
          const c = yield new q(this.url, this.token).getNextBestRegionUrl();
          c && (r = yield s.join(c, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true), this.appendMessage("Fallback to region worked. To avoid initial connections failing, ensure you're calling room.prepareConnection() ahead of time"));
        }
      }
      r ? (this.appendMessage("Connected to server, version ".concat(r.serverVersion, ".")), ((e = r.serverInfo) === null || e === void 0 ? void 0 : e.edition) === Wr.Cloud && (!((t = r.serverInfo) === null || t === void 0) && t.region) && this.appendMessage("LiveKit Cloud: ".concat((i = r.serverInfo) === null || i === void 0 ? void 0 : i.region))) : this.appendError("Websocket connection could not be established"), yield s.close();
    });
  }
}
class nh extends Ae.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(), this.options = {}, this.checkResults = /* @__PURE__ */ new Map(), this.url = e, this.token = t, this.options = i;
  }
  getNextCheckId() {
    const e = this.checkResults.size;
    return this.checkResults.set(e, { logs: [], status: Se.IDLE, name: "", description: "" }), e;
  }
  updateCheck(e, t) {
    this.checkResults.set(e, t), this.emit("checkUpdate", e, t);
  }
  isSuccess() {
    return Array.from(this.checkResults.values()).every((e) => e.status !== Se.FAILED);
  }
  getResults() {
    return Array.from(this.checkResults.values());
  }
  createAndRunCheck(e) {
    return m(this, void 0, void 0, function* () {
      const t = this.getNextCheckId(), i = new e(this.url, this.token, this.options), s = (o) => {
        this.updateCheck(t, o);
      };
      i.on("update", s);
      const r = yield i.run();
      return i.off("update", s), r;
    });
  }
  checkWebsocket() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(ku);
    });
  }
  checkWebRTC() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(bu);
    });
  }
  checkTURN() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(vu);
    });
  }
  checkReconnect() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(gu);
    });
  }
  checkPublishAudio() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(pu);
    });
  }
  checkPublishVideo() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(fu);
    });
  }
  checkConnectionProtocol() {
    return m(this, void 0, void 0, function* () {
      const e = yield this.createAndRunCheck(mu);
      if (e.data && "protocol" in e.data) {
        const t = e.data;
        this.options.protocol = t.protocol;
      }
      return e;
    });
  }
  checkCloudRegion() {
    return m(this, void 0, void 0, function* () {
      return this.createAndRunCheck(hu);
    });
  }
}
function V(n, e, t) {
  return (e = Su(e)) in n ? Object.defineProperty(n, e, { value: t, enumerable: true, configurable: true, writable: true }) : n[e] = t, n;
}
function Tu(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Su(n) {
  var e = Tu(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
new TextEncoder();
new TextDecoder();
class ue extends Error {
  constructor(e, t) {
    var i;
    super(e, t), V(this, "code", "ERR_JOSE_GENERIC"), this.name = this.constructor.name, (i = Error.captureStackTrace) === null || i === void 0 || i.call(Error, this, this.constructor);
  }
}
V(ue, "code", "ERR_JOSE_GENERIC");
class Cu extends ue {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "unspecified", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unspecified";
    super(e, { cause: { claim: i, reason: s, payload: t } }), V(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED"), V(this, "claim", void 0), V(this, "reason", void 0), V(this, "payload", void 0), this.claim = i, this.reason = s, this.payload = t;
  }
}
V(Cu, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
class Eu extends ue {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "unspecified", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unspecified";
    super(e, { cause: { claim: i, reason: s, payload: t } }), V(this, "code", "ERR_JWT_EXPIRED"), V(this, "claim", void 0), V(this, "reason", void 0), V(this, "payload", void 0), this.claim = i, this.reason = s, this.payload = t;
  }
}
V(Eu, "code", "ERR_JWT_EXPIRED");
class Pu extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
  }
}
V(Pu, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
class Ru extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JOSE_NOT_SUPPORTED");
  }
}
V(Ru, "code", "ERR_JOSE_NOT_SUPPORTED");
class _u extends ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "decryption operation failed", t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), V(this, "code", "ERR_JWE_DECRYPTION_FAILED");
  }
}
V(_u, "code", "ERR_JWE_DECRYPTION_FAILED");
class wu extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JWE_INVALID");
  }
}
V(wu, "code", "ERR_JWE_INVALID");
class Iu extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JWS_INVALID");
  }
}
V(Iu, "code", "ERR_JWS_INVALID");
class Ou extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JWT_INVALID");
  }
}
V(Ou, "code", "ERR_JWT_INVALID");
class Du extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JWK_INVALID");
  }
}
V(Du, "code", "ERR_JWK_INVALID");
class Mu extends ue {
  constructor() {
    super(...arguments), V(this, "code", "ERR_JWKS_INVALID");
  }
}
V(Mu, "code", "ERR_JWKS_INVALID");
class Au extends ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "no applicable key found in the JSON Web Key Set", t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), V(this, "code", "ERR_JWKS_NO_MATCHING_KEY");
  }
}
V(Au, "code", "ERR_JWKS_NO_MATCHING_KEY");
class xu extends ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "multiple matching keys found in the JSON Web Key Set", t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), V(this, Symbol.asyncIterator, void 0), V(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
  }
}
V(xu, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
class Nu extends ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "request timed out", t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), V(this, "code", "ERR_JWKS_TIMEOUT");
  }
}
V(Nu, "code", "ERR_JWKS_TIMEOUT");
class Lu extends ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "signature verification failed", t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), V(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
  }
}
V(Lu, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
var Uu = Kt('<main class="container svelte-1y75vyh"><h1 class="instruction">Please scan the QrCode with your Phone</h1> <div class="qrcode"></div></main>');
function Fu(n, e) {
  In(e, true);
  let t;
  const i = { scale: 10, format: "QRCode" }, s = "ils-lib-room" + Math.floor(Math.random() * 1e3);
  pr(async () => {
    try {
      const a = await oo(s, i);
      t.innerHTML = a.svg, console.log(s);
    } catch (a) {
      console.error("Error generating QR code:", a), t.innerHTML = `<p>Error generating QR code.</p> ${a}`;
    }
  });
  var r = Uu(), o = ai(oi(r), 2);
  uo(o, (a) => t = a, () => t), ci(r), st(n, r), On();
}
const ju = { video: { facingMode: "environment" } };
let ie, pt, wn;
function Bu(n) {
  const e = document.getElementById("scanner"), t = document.querySelector(".message"), i = document.getElementById("video-feed");
  ie = document.createElement("video"), ie.addEventListener("loadedmetadata", () => {
    ie.width = ie.videoWidth, ie.height = ie.videoHeight, ie.style.display = "none", pt = new OffscreenCanvas(ie.videoWidth, ie.videoHeight), wn = pt.getContext("2d"), console.log(`VideoSrc resolution: ${ie.videoWidth}x${ie.videoHeight}`);
    const s = e.videoWidth / 2, r = e.videoHeight / 2;
    e.width = s, e.height = r, i.width = s, i.height = r, console.log(`Video resolution: ${s}x${r}`);
  }), navigator.mediaDevices.getUserMedia({ video: ju.video, audio: false }).then((s) => {
    console.log("Stream Object: ", s), e.srcObject = s, ie.srcObject = s, document.body.appendChild(ie), ie.play(), e.play(), n.active = true;
  }).catch((s) => {
    t.innerHTML = `An error occurred ${s}`, console.error(`An error occurred ${s}`);
  });
}
function Vu(n = []) {
  let e = false, t = 0;
  const i = { tryHarder: true, formats: [], tryCode39ExtendedMode: true, tryDownscale: true, tryRotate: true, tryInvert: true, downscaleThreshold: 500 }, s = document.getElementById("scanner"), r = document.getElementById("video-feed"), o = document.querySelector(".message"), a = r.getContext("2d"), c = setInterval(() => {
    if ((e || t > 20) && clearInterval(c), wn && ie.readyState === ie.HAVE_ENOUGH_DATA) {
      wn.drawImage(ie, 0, 0, pt.width, pt.height), console.log("Video source: ", ie), console.log("OffCanvas: ", pt), a == null ? void 0 : a.drawImage(s, 0, 0, r.width, r.height), r.style.visibility = "visible";
      const d = setTimeout(() => {
        r.style.visibility = "hidden", clearTimeout(d);
      }, 500);
      o.innerText = "Scanning...", pt.convertToBlob({ type: "image/png" }).then((l) => {
        t++, l && co(l, i).then((u) => {
          if (console.log("Barcodes object: ", u), u && u.length > 0) {
            const h = u[0].text;
            return console.log("barcode message: ", h), o.innerText = h, e = true, clearInterval(c), h;
          } else console.log("BarCode not available: ", u), o.innerText = `No barcode found: ${u.toString()}`;
        }).catch((u) => {
          console.error("Error reading barcodes: ", u), o.innerText = "Error scanning barcode";
        });
      }).catch((l) => {
        console.error("Can't convert to blob error: ", l);
      });
    } else o.innerText = "Video not ready - try again";
  }, 500);
}
var qu = Kt('<button id="camera-button" class="svelte-12soy5r">Scan the barcode</button>'), Wu = Kt('<button id="camera-button" class="svelte-12soy5r">Take a picture</button>'), Ku = Kt('<main class="camera-container svelte-12soy5r"><div class="video-container svelte-12soy5r"><video id="scanner" autoplay class="svelte-12soy5r"></video> <canvas id="video-feed" class="svelte-12soy5r"></canvas></div> <div class="message"></div> <div class="button-container svelte-12soy5r"><!> <button class="svelte-12soy5r">Send Message</button></div></main>', 2);
function Gu(n, e) {
  In(e, true);
  let t = ro({ active: false });
  var i = Ku(), s = ai(oi(i), 4), r = oi(s);
  {
    var o = (d) => {
      var l = qu();
      l.__click = () => Bu(t), st(d, l);
    }, a = (d) => {
      var l = Wu();
      l.__click = () => {
        console.log("Outside Take Picture: ", Vu());
      }, st(d, l);
    };
    tn(r, (d) => {
      t.active ? d(a, false) : d(o);
    });
  }
  var c = ai(r, 2);
  c.__click = () => {
    console.log("Clicked");
  }, ci(s), ci(i), st(n, i), On();
}
fr(["click"]);
var Hu = Kt('<div class="choose-action svelte-9pz7z5"><button id="receive" class="svelte-9pz7z5">Receive Isbn from Phone</button> <button id="send" class="svelte-9pz7z5">Send Isbn from phone</button></div>');
function sh(n, e) {
  In(e, true);
  let t = ao("");
  new Pt(), pr(async () => {
    lo({ fireImmediately: true, overrides: { locateFile: (a, c) => a.endsWith(".wasm") ? (console.log("Path: ", a), fo("/") + a) : (console.log(`Prefix: ${c} 

    Path: ${a}`), c + a) } });
  });
  var i = ss(), s = rs(i);
  {
    var r = (a) => {
      var c = ss(), d = rs(c);
      {
        var l = (h) => {
          Fu(h, {});
        }, u = (h) => {
          Gu(h, {});
        };
        tn(d, (h) => {
          as(t) === "receive" ? h(l) : h(u, false);
        });
      }
      st(a, c);
    }, o = (a) => {
      var c = Hu(), d = oi(c);
      d.__click = () => os(t, "receive");
      var l = ai(d, 2);
      l.__click = () => os(t, "send"), ci(c), st(a, c);
    };
    tn(s, (a) => {
      as(t) ? a(r) : a(o, false);
    });
  }
  st(n, i), On();
}
fr(["click"]);
export {
  sh as component
};
