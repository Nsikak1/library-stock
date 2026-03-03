const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BV4yfFkZ.js","./BGIauNhi.js","./8mlcorIm.js","./CfdLIFuH.js","./DhvZDYTi.js","./Cl2A_dXD.js","./DyqTcbkf.js","./CgGxSczB.js","./BP-cuPRe.js","./CJzqHfeb.js"])))=>i.map(i=>d[i]);
import "./DAC7LG0P.js";
import "./CWztfNBP.js";
import { W as Qn, aO as Jn, Y as to } from "./BtsFhd5D.js";
import { i as eo } from "./DK64jgav.js";
import { b as so } from "./BSmzKAbf.js";
import { r as io } from "./B-Fs0es_.js";
import { _ as zt } from "./PPVm8Dsz.js";
import { g as Cr } from "./DBVW53FX.js";
let un, An, ye, nt, W, _t, _e, He, _r, F, H, Er, j, B, Ht, Y, Z, Fh, Fs, Ks, G, Ue, Ye, Hi, Oe, Zs, xn, lt, fn, dl, pl, Al, xl, _o, Cl, tt, Dr, ht, $r, Si, Wt, Ko, ki, ns, Ei, Jo, zr, Xc, wn, th, qa, jh, Nh, fl, ml, wl, bl, vl, ru, an, Ve, Oh, J, V, ba, D, Le, S, $t, Ul, Or, pi, Il, yc, Zr, U, je, Ot, Ia, Go, $, xt, Dt, ae;
let __tla = (async () => {
  const ro = "";
  function no(...s) {
    return so + ro + io(s[0], s[1]);
  }
  S = ((s) => (s.Application = "application", s.WebGLPipes = "webgl-pipes", s.WebGLPipesAdaptor = "webgl-pipes-adaptor", s.WebGLSystem = "webgl-system", s.WebGPUPipes = "webgpu-pipes", s.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", s.WebGPUSystem = "webgpu-system", s.CanvasSystem = "canvas-system", s.CanvasPipesAdaptor = "canvas-pipes-adaptor", s.CanvasPipes = "canvas-pipes", s.Asset = "asset", s.LoadParser = "load-parser", s.ResolveParser = "resolve-parser", s.CacheParser = "cache-parser", s.DetectionParser = "detection-parser", s.MaskEffect = "mask-effect", s.BlendMode = "blend-mode", s.TextureSource = "texture-source", s.Environment = "environment", s.ShapeBuilder = "shape-builder", s.Batcher = "batcher", s))(S || {});
  let Ss, ve, oo, ao;
  Ss = (s) => {
    if (typeof s == "function" || typeof s == "object" && s.extension) {
      if (!s.extension) throw new Error("Extension class must have an extension object");
      s = {
        ...typeof s.extension != "object" ? {
          type: s.extension
        } : s.extension,
        ref: s
      };
    }
    if (typeof s == "object") s = {
      ...s
    };
    else throw new Error("Invalid extension type");
    return typeof s.type == "string" && (s.type = [
      s.type
    ]), s;
  };
  ve = (s, t) => Ss(s).priority ?? t;
  U = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...s) {
      return s.map(Ss).forEach((t) => {
        t.type.forEach((e) => {
          var _a2, _b;
          return (_b = (_a2 = this._removeHandlers)[e]) == null ? void 0 : _b.call(_a2, t);
        });
      }), this;
    },
    add(...s) {
      return s.map(Ss).forEach((t) => {
        t.type.forEach((e) => {
          var _a2, _b;
          const i = this._addHandlers, r = this._queue;
          i[e] ? (_a2 = i[e]) == null ? void 0 : _a2.call(i, t) : (r[e] = r[e] || [], (_b = r[e]) == null ? void 0 : _b.push(t));
        });
      }), this;
    },
    handle(s, t, e) {
      var _a2;
      const i = this._addHandlers, r = this._removeHandlers;
      if (i[s] || r[s]) throw new Error(`Extension type ${s} already has a handler`);
      i[s] = t, r[s] = e;
      const n = this._queue;
      return n[s] && ((_a2 = n[s]) == null ? void 0 : _a2.forEach((o) => t(o)), delete n[s]), this;
    },
    handleByMap(s, t) {
      return this.handle(s, (e) => {
        e.name && (t[e.name] = e.ref);
      }, (e) => {
        e.name && delete t[e.name];
      });
    },
    handleByNamedList(s, t, e = -1) {
      return this.handle(s, (i) => {
        t.findIndex((n) => n.name === i.name) >= 0 || (t.push({
          name: i.name,
          value: i.ref
        }), t.sort((n, o) => ve(o.value, e) - ve(n.value, e)));
      }, (i) => {
        const r = t.findIndex((n) => n.name === i.name);
        r !== -1 && t.splice(r, 1);
      });
    },
    handleByList(s, t, e = -1) {
      return this.handle(s, (i) => {
        t.includes(i.ref) || (t.push(i.ref), t.sort((r, n) => ve(n, e) - ve(r, e)));
      }, (i) => {
        const r = t.indexOf(i.ref);
        r !== -1 && t.splice(r, 1);
      });
    },
    mixin(s, ...t) {
      for (const e of t) Object.defineProperties(s.prototype, Object.getOwnPropertyDescriptors(e));
    }
  };
  oo = {
    extension: {
      type: S.Environment,
      name: "browser",
      priority: -1
    },
    test: () => true,
    load: async () => {
      await zt(() => import("./BV4yfFkZ.js"), __vite__mapDeps([0,1,2]), import.meta.url);
    }
  };
  ao = {
    extension: {
      type: S.Environment,
      name: "webworker",
      priority: 0
    },
    test: () => typeof self < "u" && self.WorkerGlobalScope !== void 0,
    load: async () => {
      await zt(() => import("./BGIauNhi.js"), __vite__mapDeps([1,2]), import.meta.url);
    }
  };
  class q {
    constructor(t, e, i) {
      this._x = e || 0, this._y = i || 0, this._observer = t;
    }
    clone(t) {
      return new q(t ?? this._observer, this._x, this._y);
    }
    set(t = 0, e = t) {
      return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this._observer._onUpdate(this)), this;
    }
    copyFrom(t) {
      return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this;
    }
    copyTo(t) {
      return t.set(this._x, this._y), t;
    }
    equals(t) {
      return t.x === this._x && t.y === this._y;
    }
    toString() {
      return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
    }
    get x() {
      return this._x;
    }
    set x(t) {
      this._x !== t && (this._x = t, this._observer._onUpdate(this));
    }
    get y() {
      return this._y;
    }
    set y(t) {
      this._y !== t && (this._y = t, this._observer._onUpdate(this));
    }
  }
  var Ze = {
    exports: {}
  }, di;
  function ho() {
    return di || (di = 1, (function(s) {
      var t = Object.prototype.hasOwnProperty, e = "~";
      function i() {
      }
      Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (e = false));
      function r(h, l, c) {
        this.fn = h, this.context = l, this.once = c || false;
      }
      function n(h, l, c, u, f) {
        if (typeof c != "function") throw new TypeError("The listener must be a function");
        var d = new r(c, u || h, f), p = e ? e + l : l;
        return h._events[p] ? h._events[p].fn ? h._events[p] = [
          h._events[p],
          d
        ] : h._events[p].push(d) : (h._events[p] = d, h._eventsCount++), h;
      }
      function o(h, l) {
        --h._eventsCount === 0 ? h._events = new i() : delete h._events[l];
      }
      function a() {
        this._events = new i(), this._eventsCount = 0;
      }
      a.prototype.eventNames = function() {
        var l = [], c, u;
        if (this._eventsCount === 0) return l;
        for (u in c = this._events) t.call(c, u) && l.push(e ? u.slice(1) : u);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
      }, a.prototype.listeners = function(l) {
        var c = e ? e + l : l, u = this._events[c];
        if (!u) return [];
        if (u.fn) return [
          u.fn
        ];
        for (var f = 0, d = u.length, p = new Array(d); f < d; f++) p[f] = u[f].fn;
        return p;
      }, a.prototype.listenerCount = function(l) {
        var c = e ? e + l : l, u = this._events[c];
        return u ? u.fn ? 1 : u.length : 0;
      }, a.prototype.emit = function(l, c, u, f, d, p) {
        var g = e ? e + l : l;
        if (!this._events[g]) return false;
        var m = this._events[g], y = arguments.length, x, _;
        if (m.fn) {
          switch (m.once && this.removeListener(l, m.fn, void 0, true), y) {
            case 1:
              return m.fn.call(m.context), true;
            case 2:
              return m.fn.call(m.context, c), true;
            case 3:
              return m.fn.call(m.context, c, u), true;
            case 4:
              return m.fn.call(m.context, c, u, f), true;
            case 5:
              return m.fn.call(m.context, c, u, f, d), true;
            case 6:
              return m.fn.call(m.context, c, u, f, d, p), true;
          }
          for (_ = 1, x = new Array(y - 1); _ < y; _++) x[_ - 1] = arguments[_];
          m.fn.apply(m.context, x);
        } else {
          var b = m.length, C;
          for (_ = 0; _ < b; _++) switch (m[_].once && this.removeListener(l, m[_].fn, void 0, true), y) {
            case 1:
              m[_].fn.call(m[_].context);
              break;
            case 2:
              m[_].fn.call(m[_].context, c);
              break;
            case 3:
              m[_].fn.call(m[_].context, c, u);
              break;
            case 4:
              m[_].fn.call(m[_].context, c, u, f);
              break;
            default:
              if (!x) for (C = 1, x = new Array(y - 1); C < y; C++) x[C - 1] = arguments[C];
              m[_].fn.apply(m[_].context, x);
          }
        }
        return true;
      }, a.prototype.on = function(l, c, u) {
        return n(this, l, c, u, false);
      }, a.prototype.once = function(l, c, u) {
        return n(this, l, c, u, true);
      }, a.prototype.removeListener = function(l, c, u, f) {
        var d = e ? e + l : l;
        if (!this._events[d]) return this;
        if (!c) return o(this, d), this;
        var p = this._events[d];
        if (p.fn) p.fn === c && (!f || p.once) && (!u || p.context === u) && o(this, d);
        else {
          for (var g = 0, m = [], y = p.length; g < y; g++) (p[g].fn !== c || f && !p[g].once || u && p[g].context !== u) && m.push(p[g]);
          m.length ? this._events[d] = m.length === 1 ? m[0] : m : o(this, d);
        }
        return this;
      }, a.prototype.removeAllListeners = function(l) {
        var c;
        return l ? (c = e ? e + l : l, this._events[c] && o(this, c)) : (this._events = new i(), this._eventsCount = 0), this;
      }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, s.exports = a;
    })(Ze)), Ze.exports;
  }
  var lo = ho();
  let co, uo, fo;
  _t = Cr(lo);
  co = Math.PI * 2;
  uo = 180 / Math.PI;
  fo = Math.PI / 180;
  Z = class {
    constructor(t = 0, e = 0) {
      this.x = 0, this.y = 0, this.x = t, this.y = e;
    }
    clone() {
      return new Z(this.x, this.y);
    }
    copyFrom(t) {
      return this.set(t.x, t.y), this;
    }
    copyTo(t) {
      return t.set(this.x, this.y), t;
    }
    equals(t) {
      return t.x === this.x && t.y === this.y;
    }
    set(t = 0, e = t) {
      return this.x = t, this.y = e, this;
    }
    toString() {
      return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
    }
    static get shared() {
      return Ke.x = 0, Ke.y = 0, Ke;
    }
  };
  const Ke = new Z();
  B = class {
    constructor(t = 1, e = 0, i = 0, r = 1, n = 0, o = 0) {
      this.array = null, this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o;
    }
    fromArray(t) {
      this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
    }
    set(t, e, i, r, n, o) {
      return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this;
    }
    toArray(t, e) {
      this.array || (this.array = new Float32Array(9));
      const i = e || this.array;
      return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i;
    }
    apply(t, e) {
      e = e || new Z();
      const i = t.x, r = t.y;
      return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e;
    }
    applyInverse(t, e) {
      e = e || new Z();
      const i = this.a, r = this.b, n = this.c, o = this.d, a = this.tx, h = this.ty, l = 1 / (i * o + n * -r), c = t.x, u = t.y;
      return e.x = o * l * c + -n * l * u + (h * n - a * o) * l, e.y = i * l * u + -r * l * c + (-h * i + a * r) * l, e;
    }
    translate(t, e) {
      return this.tx += t, this.ty += e, this;
    }
    scale(t, e) {
      return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
    }
    rotate(t) {
      const e = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, o = this.tx;
      return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this;
    }
    append(t) {
      const e = this.a, i = this.b, r = this.c, n = this.d;
      return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
    }
    appendFrom(t, e) {
      const i = t.a, r = t.b, n = t.c, o = t.d, a = t.tx, h = t.ty, l = e.a, c = e.b, u = e.c, f = e.d;
      return this.a = i * l + r * u, this.b = i * c + r * f, this.c = n * l + o * u, this.d = n * c + o * f, this.tx = a * l + h * u + e.tx, this.ty = a * c + h * f + e.ty, this;
    }
    setTransform(t, e, i, r, n, o, a, h, l) {
      return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this;
    }
    prepend(t) {
      const e = this.tx;
      if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
        const i = this.a, r = this.c;
        this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d;
      }
      return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
    }
    decompose(t) {
      const e = this.a, i = this.b, r = this.c, n = this.d, o = t.pivot, a = -Math.atan2(-r, n), h = Math.atan2(i, e), l = Math.abs(a + h);
      return l < 1e-5 || Math.abs(co - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * e + o.y * r), t.position.y = this.ty + (o.x * i + o.y * n), t;
    }
    invert() {
      const t = this.a, e = this.b, i = this.c, r = this.d, n = this.tx, o = t * r - e * i;
      return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this;
    }
    isIdentity() {
      return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
    }
    identity() {
      return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
    }
    clone() {
      const t = new B();
      return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
    }
    copyTo(t) {
      return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
    }
    copyFrom(t) {
      return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
    }
    equals(t) {
      return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
    }
    toString() {
      return `[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
    }
    static get IDENTITY() {
      return mo.identity();
    }
    static get shared() {
      return po.identity();
    }
  };
  const po = new B(), mo = new B(), kt = [
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1
  ], Et = [
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1
  ], It = [
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1
  ], Rt = [
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    -1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1
  ], Ts = [], Mr = [], Ce = Math.sign;
  function go() {
    for (let s = 0; s < 16; s++) {
      const t = [];
      Ts.push(t);
      for (let e = 0; e < 16; e++) {
        const i = Ce(kt[s] * kt[e] + It[s] * Et[e]), r = Ce(Et[s] * kt[e] + Rt[s] * Et[e]), n = Ce(kt[s] * It[e] + It[s] * Rt[e]), o = Ce(Et[s] * It[e] + Rt[s] * Rt[e]);
        for (let a = 0; a < 16; a++) if (kt[a] === i && Et[a] === r && It[a] === n && Rt[a] === o) {
          t.push(a);
          break;
        }
      }
    }
    for (let s = 0; s < 16; s++) {
      const t = new B();
      t.set(kt[s], Et[s], It[s], Rt[s], 0, 0), Mr.push(t);
    }
  }
  go();
  let Me;
  D = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: (s) => kt[s],
    uY: (s) => Et[s],
    vX: (s) => It[s],
    vY: (s) => Rt[s],
    inv: (s) => s & 8 ? s & 15 : -s & 7,
    add: (s, t) => Ts[s][t],
    sub: (s, t) => Ts[s][D.inv(t)],
    rotate180: (s) => s ^ 4,
    isVertical: (s) => (s & 3) === 2,
    byDirection: (s, t) => Math.abs(s) * 2 <= Math.abs(t) ? t >= 0 ? D.S : D.N : Math.abs(t) * 2 <= Math.abs(s) ? s > 0 ? D.E : D.W : t > 0 ? s > 0 ? D.SE : D.SW : s > 0 ? D.NE : D.NW,
    matrixAppendRotationInv: (s, t, e = 0, i = 0, r = 0, n = 0) => {
      const o = Mr[D.inv(t)], a = o.a, h = o.b, l = o.c, c = o.d, u = e - Math.min(0, a * r, l * n, a * r + l * n), f = i - Math.min(0, h * r, c * n, h * r + c * n), d = s.a, p = s.b, g = s.c, m = s.d;
      s.a = a * d + h * g, s.b = a * p + h * m, s.c = l * d + c * g, s.d = l * p + c * m, s.tx = u * d + f * g + s.tx, s.ty = u * p + f * m + s.ty;
    },
    transformRectCoords: (s, t, e, i) => {
      const { x: r, y: n, width: o, height: a } = s, { x: h, y: l, width: c, height: u } = t;
      return e === D.E ? (i.set(r + h, n + l, o, a), i) : e === D.S ? i.set(c - n - a + h, r + l, a, o) : e === D.W ? i.set(c - r - o + h, u - n - a + l, o, a) : e === D.N ? i.set(n + h, u - r - o + l, a, o) : i.set(r + h, n + l, o, a);
    }
  };
  Me = [
    new Z(),
    new Z(),
    new Z(),
    new Z()
  ];
  j = class {
    constructor(t = 0, e = 0, i = 0, r = 0) {
      this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r);
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
    isEmpty() {
      return this.left === this.right || this.top === this.bottom;
    }
    static get EMPTY() {
      return new j(0, 0, 0, 0);
    }
    clone() {
      return new j(this.x, this.y, this.width, this.height);
    }
    copyFromBounds(t) {
      return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    contains(t, e) {
      return this.width <= 0 || this.height <= 0 ? false : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
    }
    strokeContains(t, e, i, r = 0.5) {
      const { width: n, height: o } = this;
      if (n <= 0 || o <= 0) return false;
      const a = this.x, h = this.y, l = i * (1 - r), c = i - l, u = a - l, f = a + n + l, d = h - l, p = h + o + l, g = a + c, m = a + n - c, y = h + c, x = h + o - c;
      return t >= u && t <= f && e >= d && e <= p && !(t > g && t < m && e > y && e < x);
    }
    intersects(t, e) {
      if (!e) {
        const E = this.x < t.x ? t.x : this.x;
        if ((this.right > t.right ? t.right : this.right) <= E) return false;
        const v = this.y < t.y ? t.y : this.y;
        return (this.bottom > t.bottom ? t.bottom : this.bottom) > v;
      }
      const i = this.left, r = this.right, n = this.top, o = this.bottom;
      if (r <= i || o <= n) return false;
      const a = Me[0].set(t.left, t.top), h = Me[1].set(t.left, t.bottom), l = Me[2].set(t.right, t.top), c = Me[3].set(t.right, t.bottom);
      if (l.x <= a.x || h.y <= a.y) return false;
      const u = Math.sign(e.a * e.d - e.b * e.c);
      if (u === 0 || (e.apply(a, a), e.apply(h, h), e.apply(l, l), e.apply(c, c), Math.max(a.x, h.x, l.x, c.x) <= i || Math.min(a.x, h.x, l.x, c.x) >= r || Math.max(a.y, h.y, l.y, c.y) <= n || Math.min(a.y, h.y, l.y, c.y) >= o)) return false;
      const f = u * (h.y - a.y), d = u * (a.x - h.x), p = f * i + d * n, g = f * r + d * n, m = f * i + d * o, y = f * r + d * o;
      if (Math.max(p, g, m, y) <= f * a.x + d * a.y || Math.min(p, g, m, y) >= f * c.x + d * c.y) return false;
      const x = u * (a.y - l.y), _ = u * (l.x - a.x), b = x * i + _ * n, C = x * r + _ * n, A = x * i + _ * o, w = x * r + _ * o;
      return !(Math.max(b, C, A, w) <= x * a.x + _ * a.y || Math.min(b, C, A, w) >= x * c.x + _ * c.y);
    }
    pad(t = 0, e = t) {
      return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
    }
    fit(t) {
      const e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
      return this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0), this;
    }
    ceil(t = 1, e = 1e-3) {
      const i = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
      return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y, this;
    }
    scale(t, e = t) {
      return this.x *= t, this.y *= e, this.width *= t, this.height *= e, this;
    }
    enlarge(t) {
      const e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
      return this.x = e, this.width = i - e, this.y = r, this.height = n - r, this;
    }
    getBounds(t) {
      return t || (t = new j()), t.copyFrom(this), t;
    }
    containsRect(t) {
      if (this.width <= 0 || this.height <= 0) return false;
      const e = t.x, i = t.y, r = t.x + t.width, n = t.y + t.height;
      return e >= this.x && e < this.x + this.width && i >= this.y && i < this.y + this.height && r >= this.x && r < this.x + this.width && n >= this.y && n < this.y + this.height;
    }
    set(t, e, i, r) {
      return this.x = t, this.y = e, this.width = i, this.height = r, this;
    }
    toString() {
      return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
    }
  };
  const Qe = {
    default: -1
  };
  V = function(s = "default") {
    return Qe[s] === void 0 && (Qe[s] = -1), ++Qe[s];
  };
  let fi, yo, Lt;
  fi = /* @__PURE__ */ new Set();
  H = "8.0.0";
  yo = "8.3.4";
  Lt = {
    quiet: false,
    noColor: false
  };
  F = ((s, t, e = 3) => {
    if (Lt.quiet || fi.has(t)) return;
    let i = new Error().stack;
    const r = `${t}
Deprecated since v${s}`, n = typeof console.groupCollapsed == "function" && !Lt.noColor;
    typeof i > "u" ? console.warn("PixiJS Deprecation Warning: ", r) : (i = i.split(`
`).splice(e).join(`
`), n ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", r), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", r), console.warn(i))), fi.add(t);
  });
  Object.defineProperties(F, {
    quiet: {
      get: () => Lt.quiet,
      set: (s) => {
        Lt.quiet = s;
      },
      enumerable: true,
      configurable: false
    },
    noColor: {
      get: () => Lt.noColor,
      set: (s) => {
        Lt.noColor = s;
      },
      enumerable: true,
      configurable: false
    }
  });
  const Pr = () => {
  };
  pi = function(s) {
    return s += s === 0 ? 1 : 0, --s, s |= s >>> 1, s |= s >>> 2, s |= s >>> 4, s |= s >>> 8, s |= s >>> 16, s + 1;
  };
  function mi(s) {
    return !(s & s - 1) && !!s;
  }
  function Sr(s) {
    const t = {};
    for (const e in s) s[e] !== void 0 && (t[e] = s[e]);
    return t;
  }
  const gi = /* @__PURE__ */ Object.create(null);
  function xo(s) {
    const t = gi[s];
    return t === void 0 && (gi[s] = V("resource")), t;
  }
  const Tr = class kr extends _t {
    constructor(t = {}) {
      super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, this.destroyed = false, t = {
        ...kr.defaultOptions,
        ...t
      }, this.addressMode = t.addressMode, this.addressModeU = t.addressModeU ?? this.addressModeU, this.addressModeV = t.addressModeV ?? this.addressModeV, this.addressModeW = t.addressModeW ?? this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = t.magFilter ?? this.magFilter, this.minFilter = t.minFilter ?? this.minFilter, this.mipmapFilter = t.mipmapFilter ?? this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = t.maxAnisotropy ?? 1;
    }
    set addressMode(t) {
      this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
    }
    get addressMode() {
      return this.addressModeU;
    }
    set wrapMode(t) {
      F(H, "TextureStyle.wrapMode is now TextureStyle.addressMode"), this.addressMode = t;
    }
    get wrapMode() {
      return this.addressMode;
    }
    set scaleMode(t) {
      this.magFilter = t, this.minFilter = t, this.mipmapFilter = t;
    }
    get scaleMode() {
      return this.magFilter;
    }
    set maxAnisotropy(t) {
      this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear");
    }
    get maxAnisotropy() {
      return this._maxAnisotropy;
    }
    get _resourceId() {
      return this._sharedResourceId || this._generateResourceId();
    }
    update() {
      this._sharedResourceId = null, this.emit("change", this);
    }
    _generateResourceId() {
      const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
      return this._sharedResourceId = xo(t), this._resourceId;
    }
    destroy() {
      this.destroyed = true, this.emit("destroy", this), this.emit("change", this), this.removeAllListeners();
    }
  };
  Tr.defaultOptions = {
    addressMode: "clamp-to-edge",
    scaleMode: "linear"
  };
  Er = Tr;
  const Ir = class Rr extends _t {
    constructor(t = {}) {
      super(), this.options = t, this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.uid = V("textureSource"), this._resourceType = "textureSource", this._resourceId = V("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = false, this.format = "rgba8unorm", this.dimension = "2d", this.viewDimension = "2d", this.arrayLayerCount = 1, this.antialias = false, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = {
        ...Rr.defaultOptions,
        ...t
      }, this.label = t.label ?? "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource ? this.resourceWidth ?? 1 : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource ? this.resourceHeight ?? 1 : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.viewDimension = t.viewDimension ?? t.dimensions, this.arrayLayerCount = t.arrayLayerCount, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new Er(Sr(t)), this.destroyed = false, this._refreshPOT();
    }
    get source() {
      return this;
    }
    get style() {
      return this._style;
    }
    set style(t) {
      var _a2, _b;
      this.style !== t && ((_a2 = this._style) == null ? void 0 : _a2.off("change", this._onStyleChange, this), this._style = t, (_b = this._style) == null ? void 0 : _b.on("change", this._onStyleChange, this), this._onStyleChange());
    }
    set maxAnisotropy(t) {
      this._style.maxAnisotropy = t;
    }
    get maxAnisotropy() {
      return this._style.maxAnisotropy;
    }
    get addressMode() {
      return this._style.addressMode;
    }
    set addressMode(t) {
      this._style.addressMode = t;
    }
    get repeatMode() {
      return this._style.addressMode;
    }
    set repeatMode(t) {
      this._style.addressMode = t;
    }
    get magFilter() {
      return this._style.magFilter;
    }
    set magFilter(t) {
      this._style.magFilter = t;
    }
    get minFilter() {
      return this._style.minFilter;
    }
    set minFilter(t) {
      this._style.minFilter = t;
    }
    get mipmapFilter() {
      return this._style.mipmapFilter;
    }
    set mipmapFilter(t) {
      this._style.mipmapFilter = t;
    }
    get lodMinClamp() {
      return this._style.lodMinClamp;
    }
    set lodMinClamp(t) {
      this._style.lodMinClamp = t;
    }
    get lodMaxClamp() {
      return this._style.lodMaxClamp;
    }
    set lodMaxClamp(t) {
      this._style.lodMaxClamp = t;
    }
    _onStyleChange() {
      this.emit("styleChange", this);
    }
    update() {
      if (this.resource) {
        const t = this._resolution;
        if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return;
      }
      this.emit("update", this);
    }
    destroy() {
      this.destroyed = true, this.unload(), this.emit("destroy", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners();
    }
    unload() {
      var _a2, _b;
      this._resourceId = V("resource"), this.emit("change", this), this.emit("unload", this);
      for (const t in this._gpuData) (_b = (_a2 = this._gpuData[t]) == null ? void 0 : _a2.destroy) == null ? void 0 : _b.call(_a2);
      this._gpuData = /* @__PURE__ */ Object.create(null);
    }
    get resourceWidth() {
      const { resource: t } = this;
      return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
    }
    get resourceHeight() {
      const { resource: t } = this;
      return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(t) {
      this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t);
    }
    resize(t, e, i) {
      i || (i = this._resolution), t || (t = this.width), e || (e = this.height);
      const r = Math.round(t * i), n = Math.round(e * i);
      return this.width = r / i, this.height = n / i, this._resolution = i, this.pixelWidth === r && this.pixelHeight === n ? false : (this._refreshPOT(), this.pixelWidth = r, this.pixelHeight = n, this.emit("resize", this), this._resourceId = V("resource"), this.emit("change", this), true);
    }
    updateMipmaps() {
      this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
    }
    set wrapMode(t) {
      this._style.wrapMode = t;
    }
    get wrapMode() {
      return this._style.wrapMode;
    }
    set scaleMode(t) {
      this._style.scaleMode = t;
    }
    get scaleMode() {
      return this._style.scaleMode;
    }
    _refreshPOT() {
      this.isPowerOfTwo = mi(this.pixelWidth) && mi(this.pixelHeight);
    }
    static test(t) {
      throw new Error("Unimplemented");
    }
  };
  Ir.defaultOptions = {
    resolution: 1,
    format: "bgra8unorm",
    alphaMode: "premultiply-alpha-on-upload",
    dimensions: "2d",
    viewDimension: "2d",
    arrayLayerCount: 1,
    mipLevelCount: 1,
    autoGenerateMipmaps: false,
    sampleCount: 1,
    antialias: false,
    autoGarbageCollect: false
  };
  lt = Ir;
  class Ys extends lt {
    constructor(t) {
      const e = t.resource || new Float32Array(t.width * t.height * 4);
      let i = t.format;
      i || (e instanceof Float32Array ? i = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? i = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? i = "rgba16uint" : (e instanceof Int8Array, i = "bgra8unorm")), super({
        ...t,
        resource: e,
        format: i
      }), this.uploadMethodId = "buffer";
    }
    static test(t) {
      return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
    }
  }
  Ys.extension = S.TextureSource;
  const yi = new B();
  _o = class {
    constructor(t, e) {
      this.mapCoord = new B(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e > "u" ? this.clampMargin = t.width < 10 ? 0 : 0.5 : this.clampMargin = e, this.isSimple = false, this.texture = t;
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      var _a2;
      this.texture !== t && ((_a2 = this._texture) == null ? void 0 : _a2.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update());
    }
    multiplyUvs(t, e) {
      e === void 0 && (e = t);
      const i = this.mapCoord;
      for (let r = 0; r < t.length; r += 2) {
        const n = t[r], o = t[r + 1];
        e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty;
      }
      return e;
    }
    update() {
      const t = this._texture;
      this._updateID++;
      const e = t.uvs;
      this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
      const i = t.orig, r = t.trim;
      r && (yi.set(i.width / r.width, 0, 0, i.height / r.height, -r.x / r.width, -r.y / r.height), this.mapCoord.append(yi));
      const n = t.source, o = this.uClampFrame, a = this.clampMargin / n._resolution, h = this.clampOffset / n._resolution;
      return o[0] = (t.frame.x + a + h) / n.width, o[1] = (t.frame.y + a + h) / n.height, o[2] = (t.frame.x + t.frame.width - a + h) / n.width, o[3] = (t.frame.y + t.frame.height - a + h) / n.height, this.uClampOffset[0] = this.clampOffset / n.pixelWidth, this.uClampOffset[1] = this.clampOffset / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, true;
    }
  };
  G = class extends _t {
    constructor({ source: t, label: e, frame: i, orig: r, trim: n, defaultAnchor: o, defaultBorders: a, rotate: h, dynamic: l } = {}) {
      if (super(), this.uid = V("texture"), this.uvs = {
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x3: 0,
        y3: 0
      }, this.frame = new j(), this.noFrame = false, this.dynamic = false, this.isTexture = true, this.label = e, this.source = (t == null ? void 0 : t.source) ?? new lt(), this.noFrame = !i, i) this.frame.copyFrom(i);
      else {
        const { width: c, height: u } = this._source;
        this.frame.width = c, this.frame.height = u;
      }
      this.orig = r || this.frame, this.trim = n, this.rotate = h ?? 0, this.defaultAnchor = o, this.defaultBorders = a, this.destroyed = false, this.dynamic = l || false, this.updateUvs();
    }
    set source(t) {
      this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this);
    }
    get source() {
      return this._source;
    }
    get textureMatrix() {
      return this._textureMatrix || (this._textureMatrix = new _o(this)), this._textureMatrix;
    }
    get width() {
      return this.orig.width;
    }
    get height() {
      return this.orig.height;
    }
    updateUvs() {
      const { uvs: t, frame: e } = this, { width: i, height: r } = this._source, n = e.x / i, o = e.y / r, a = e.width / i, h = e.height / r;
      let l = this.rotate;
      if (l) {
        const c = a / 2, u = h / 2, f = n + c, d = o + u;
        l = D.add(l, D.NW), t.x0 = f + c * D.uX(l), t.y0 = d + u * D.uY(l), l = D.add(l, 2), t.x1 = f + c * D.uX(l), t.y1 = d + u * D.uY(l), l = D.add(l, 2), t.x2 = f + c * D.uX(l), t.y2 = d + u * D.uY(l), l = D.add(l, 2), t.x3 = f + c * D.uX(l), t.y3 = d + u * D.uY(l);
      } else t.x0 = n, t.y0 = o, t.x1 = n + a, t.y1 = o, t.x2 = n + a, t.y2 = o + h, t.x3 = n, t.y3 = o + h;
    }
    destroy(t = false) {
      this._source && (this._source.off("resize", this.update, this), t && (this._source.destroy(), this._source = null)), this._textureMatrix = null, this.destroyed = true, this.emit("destroy", this), this.removeAllListeners();
    }
    update() {
      this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this);
    }
    get baseTexture() {
      return F(H, "Texture.baseTexture is now Texture.source"), this._source;
    }
  };
  G.EMPTY = new G({
    label: "EMPTY",
    source: new lt({
      label: "EMPTY"
    })
  });
  G.EMPTY.destroy = Pr;
  G.WHITE = new G({
    source: new Ys({
      resource: new Uint8Array([
        255,
        255,
        255,
        255
      ]),
      width: 1,
      height: 1,
      alphaMode: "premultiply-alpha-on-upload",
      label: "WHITE"
    }),
    label: "WHITE"
  });
  G.WHITE.destroy = Pr;
  function bo(s, t, e) {
    const { width: i, height: r } = e.orig, n = e.trim;
    if (n) {
      const o = n.width, a = n.height;
      s.minX = n.x - t._x * i, s.maxX = s.minX + o, s.minY = n.y - t._y * r, s.maxY = s.minY + a;
    } else s.minX = -t._x * i, s.maxX = s.minX + i, s.minY = -t._y * r, s.maxY = s.minY + r;
  }
  const xi = new B();
  ht = class {
    constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, r = -1 / 0) {
      this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = xi, this.minX = t, this.minY = e, this.maxX = i, this.maxY = r;
    }
    isEmpty() {
      return this.minX > this.maxX || this.minY > this.maxY;
    }
    get rectangle() {
      this._rectangle || (this._rectangle = new j());
      const t = this._rectangle;
      return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t;
    }
    clear() {
      return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = xi, this;
    }
    set(t, e, i, r) {
      this.minX = t, this.minY = e, this.maxX = i, this.maxY = r;
    }
    addFrame(t, e, i, r, n) {
      n || (n = this.matrix);
      const o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty;
      let f = this.minX, d = this.minY, p = this.maxX, g = this.maxY, m = o * t + h * e + c, y = a * t + l * e + u;
      m < f && (f = m), y < d && (d = y), m > p && (p = m), y > g && (g = y), m = o * i + h * e + c, y = a * i + l * e + u, m < f && (f = m), y < d && (d = y), m > p && (p = m), y > g && (g = y), m = o * t + h * r + c, y = a * t + l * r + u, m < f && (f = m), y < d && (d = y), m > p && (p = m), y > g && (g = y), m = o * i + h * r + c, y = a * i + l * r + u, m < f && (f = m), y < d && (d = y), m > p && (p = m), y > g && (g = y), this.minX = f, this.minY = d, this.maxX = p, this.maxY = g;
    }
    addRect(t, e) {
      this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
    }
    addBounds(t, e) {
      this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
    }
    addBoundsMask(t) {
      this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
    }
    applyMatrix(t) {
      const e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, { a: o, b: a, c: h, d: l, tx: c, ty: u } = t;
      let f = o * e + h * i + c, d = a * e + l * i + u;
      this.minX = f, this.minY = d, this.maxX = f, this.maxY = d, f = o * r + h * i + c, d = a * r + l * i + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = o * e + h * n + c, d = a * e + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY, f = o * r + h * n + c, d = a * r + l * n + u, this.minX = f < this.minX ? f : this.minX, this.minY = d < this.minY ? d : this.minY, this.maxX = f > this.maxX ? f : this.maxX, this.maxY = d > this.maxY ? d : this.maxY;
    }
    fit(t) {
      return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this;
    }
    fitBounds(t, e, i, r) {
      return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > r && (this.maxY = r), this;
    }
    pad(t, e = t) {
      return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this;
    }
    ceil() {
      return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this;
    }
    clone() {
      return new ht(this.minX, this.minY, this.maxX, this.maxY);
    }
    scale(t, e = t) {
      return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this;
    }
    get x() {
      return this.minX;
    }
    set x(t) {
      const e = this.maxX - this.minX;
      this.minX = t, this.maxX = t + e;
    }
    get y() {
      return this.minY;
    }
    set y(t) {
      const e = this.maxY - this.minY;
      this.minY = t, this.maxY = t + e;
    }
    get width() {
      return this.maxX - this.minX;
    }
    set width(t) {
      this.maxX = this.minX + t;
    }
    get height() {
      return this.maxY - this.minY;
    }
    set height(t) {
      this.maxY = this.minY + t;
    }
    get left() {
      return this.minX;
    }
    get right() {
      return this.maxX;
    }
    get top() {
      return this.minY;
    }
    get bottom() {
      return this.maxY;
    }
    get isPositive() {
      return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
    }
    get isValid() {
      return this.minX + this.minY !== 1 / 0;
    }
    addVertexData(t, e, i, r) {
      let n = this.minX, o = this.minY, a = this.maxX, h = this.maxY;
      r || (r = this.matrix);
      const l = r.a, c = r.b, u = r.c, f = r.d, d = r.tx, p = r.ty;
      for (let g = e; g < i; g += 2) {
        const m = t[g], y = t[g + 1], x = l * m + u * y + d, _ = c * m + f * y + p;
        n = x < n ? x : n, o = _ < o ? _ : o, a = x > a ? x : a, h = _ > h ? _ : h;
      }
      this.minX = n, this.minY = o, this.maxX = a, this.maxY = h;
    }
    containsPoint(t, e) {
      return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
    }
    toString() {
      return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
    }
    copyFrom(t) {
      return this.minX = t.minX, this.minY = t.minY, this.maxX = t.maxX, this.maxY = t.maxY, this;
    }
  };
  var Ao = {
    grad: 0.9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
  }, mt = function(s) {
    return typeof s == "string" ? s.length > 0 : typeof s == "number";
  }, X = function(s, t, e) {
    return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * s) / e + 0;
  }, rt = function(s, t, e) {
    return t === void 0 && (t = 0), e === void 0 && (e = 1), s > e ? e : s > t ? s : t;
  }, Br = function(s) {
    return (s = isFinite(s) ? s % 360 : 0) > 0 ? s : s + 360;
  }, _i = function(s) {
    return {
      r: rt(s.r, 0, 255),
      g: rt(s.g, 0, 255),
      b: rt(s.b, 0, 255),
      a: rt(s.a)
    };
  }, Je = function(s) {
    return {
      r: X(s.r),
      g: X(s.g),
      b: X(s.b),
      a: X(s.a, 3)
    };
  }, wo = /^#([0-9a-f]{3,8})$/i, Pe = function(s) {
    var t = s.toString(16);
    return t.length < 2 ? "0" + t : t;
  }, Gr = function(s) {
    var t = s.r, e = s.g, i = s.b, r = s.a, n = Math.max(t, e, i), o = n - Math.min(t, e, i), a = o ? n === t ? (e - i) / o : n === e ? 2 + (i - t) / o : 4 + (t - e) / o : 0;
    return {
      h: 60 * (a < 0 ? a + 6 : a),
      s: n ? o / n * 100 : 0,
      v: n / 255 * 100,
      a: r
    };
  }, Fr = function(s) {
    var t = s.h, e = s.s, i = s.v, r = s.a;
    t = t / 360 * 6, e /= 100, i /= 100;
    var n = Math.floor(t), o = i * (1 - e), a = i * (1 - (t - n) * e), h = i * (1 - (1 - t + n) * e), l = n % 6;
    return {
      r: 255 * [
        i,
        a,
        o,
        o,
        h,
        i
      ][l],
      g: 255 * [
        h,
        i,
        i,
        a,
        o,
        o
      ][l],
      b: 255 * [
        o,
        o,
        h,
        i,
        i,
        a
      ][l],
      a: r
    };
  }, bi = function(s) {
    return {
      h: Br(s.h),
      s: rt(s.s, 0, 100),
      l: rt(s.l, 0, 100),
      a: rt(s.a)
    };
  }, Ai = function(s) {
    return {
      h: X(s.h),
      s: X(s.s),
      l: X(s.l),
      a: X(s.a, 3)
    };
  }, wi = function(s) {
    return Fr((e = (t = s).s, {
      h: t.h,
      s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0,
      v: i + e,
      a: t.a
    }));
    var t, e, i;
  }, le = function(s) {
    return {
      h: (t = Gr(s)).h,
      s: (r = (200 - (e = t.s)) * (i = t.v) / 100) > 0 && r < 200 ? e * i / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
      l: r / 2,
      a: t.a
    };
    var t, e, i, r;
  }, vo = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Co = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Mo = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Po = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, ks = {
    string: [
      [
        function(s) {
          var t = wo.exec(s);
          return t ? (s = t[1]).length <= 4 ? {
            r: parseInt(s[0] + s[0], 16),
            g: parseInt(s[1] + s[1], 16),
            b: parseInt(s[2] + s[2], 16),
            a: s.length === 4 ? X(parseInt(s[3] + s[3], 16) / 255, 2) : 1
          } : s.length === 6 || s.length === 8 ? {
            r: parseInt(s.substr(0, 2), 16),
            g: parseInt(s.substr(2, 2), 16),
            b: parseInt(s.substr(4, 2), 16),
            a: s.length === 8 ? X(parseInt(s.substr(6, 2), 16) / 255, 2) : 1
          } : null : null;
        },
        "hex"
      ],
      [
        function(s) {
          var t = Mo.exec(s) || Po.exec(s);
          return t ? t[2] !== t[4] || t[4] !== t[6] ? null : _i({
            r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
            g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
            b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
            a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
          }) : null;
        },
        "rgb"
      ],
      [
        function(s) {
          var t = vo.exec(s) || Co.exec(s);
          if (!t) return null;
          var e, i, r = bi({
            h: (e = t[1], i = t[2], i === void 0 && (i = "deg"), Number(e) * (Ao[i] || 1)),
            s: Number(t[3]),
            l: Number(t[4]),
            a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
          });
          return wi(r);
        },
        "hsl"
      ]
    ],
    object: [
      [
        function(s) {
          var t = s.r, e = s.g, i = s.b, r = s.a, n = r === void 0 ? 1 : r;
          return mt(t) && mt(e) && mt(i) ? _i({
            r: Number(t),
            g: Number(e),
            b: Number(i),
            a: Number(n)
          }) : null;
        },
        "rgb"
      ],
      [
        function(s) {
          var t = s.h, e = s.s, i = s.l, r = s.a, n = r === void 0 ? 1 : r;
          if (!mt(t) || !mt(e) || !mt(i)) return null;
          var o = bi({
            h: Number(t),
            s: Number(e),
            l: Number(i),
            a: Number(n)
          });
          return wi(o);
        },
        "hsl"
      ],
      [
        function(s) {
          var t = s.h, e = s.s, i = s.v, r = s.a, n = r === void 0 ? 1 : r;
          if (!mt(t) || !mt(e) || !mt(i)) return null;
          var o = (function(a) {
            return {
              h: Br(a.h),
              s: rt(a.s, 0, 100),
              v: rt(a.v, 0, 100),
              a: rt(a.a)
            };
          })({
            h: Number(t),
            s: Number(e),
            v: Number(i),
            a: Number(n)
          });
          return Fr(o);
        },
        "hsv"
      ]
    ]
  }, vi = function(s, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e][0](s);
      if (i) return [
        i,
        t[e][1]
      ];
    }
    return [
      null,
      void 0
    ];
  }, So = function(s) {
    return typeof s == "string" ? vi(s.trim(), ks.string) : typeof s == "object" && s !== null ? vi(s, ks.object) : [
      null,
      void 0
    ];
  }, ts = function(s, t) {
    var e = le(s);
    return {
      h: e.h,
      s: rt(e.s + 100 * t, 0, 100),
      l: e.l,
      a: e.a
    };
  }, es = function(s) {
    return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 / 255;
  }, Ci = function(s, t) {
    var e = le(s);
    return {
      h: e.h,
      s: e.s,
      l: rt(e.l + 100 * t, 0, 100),
      a: e.a
    };
  }, Es = (function() {
    function s(t) {
      this.parsed = So(t)[0], this.rgba = this.parsed || {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
    }
    return s.prototype.isValid = function() {
      return this.parsed !== null;
    }, s.prototype.brightness = function() {
      return X(es(this.rgba), 2);
    }, s.prototype.isDark = function() {
      return es(this.rgba) < 0.5;
    }, s.prototype.isLight = function() {
      return es(this.rgba) >= 0.5;
    }, s.prototype.toHex = function() {
      return t = Je(this.rgba), e = t.r, i = t.g, r = t.b, o = (n = t.a) < 1 ? Pe(X(255 * n)) : "", "#" + Pe(e) + Pe(i) + Pe(r) + o;
      var t, e, i, r, n, o;
    }, s.prototype.toRgb = function() {
      return Je(this.rgba);
    }, s.prototype.toRgbString = function() {
      return t = Je(this.rgba), e = t.r, i = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + r + ", " + n + ")" : "rgb(" + e + ", " + i + ", " + r + ")";
      var t, e, i, r, n;
    }, s.prototype.toHsl = function() {
      return Ai(le(this.rgba));
    }, s.prototype.toHslString = function() {
      return t = Ai(le(this.rgba)), e = t.h, i = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + r + "%, " + n + ")" : "hsl(" + e + ", " + i + "%, " + r + "%)";
      var t, e, i, r, n;
    }, s.prototype.toHsv = function() {
      return t = Gr(this.rgba), {
        h: X(t.h),
        s: X(t.s),
        v: X(t.v),
        a: X(t.a, 3)
      };
      var t;
    }, s.prototype.invert = function() {
      return dt({
        r: 255 - (t = this.rgba).r,
        g: 255 - t.g,
        b: 255 - t.b,
        a: t.a
      });
      var t;
    }, s.prototype.saturate = function(t) {
      return t === void 0 && (t = 0.1), dt(ts(this.rgba, t));
    }, s.prototype.desaturate = function(t) {
      return t === void 0 && (t = 0.1), dt(ts(this.rgba, -t));
    }, s.prototype.grayscale = function() {
      return dt(ts(this.rgba, -1));
    }, s.prototype.lighten = function(t) {
      return t === void 0 && (t = 0.1), dt(Ci(this.rgba, t));
    }, s.prototype.darken = function(t) {
      return t === void 0 && (t = 0.1), dt(Ci(this.rgba, -t));
    }, s.prototype.rotate = function(t) {
      return t === void 0 && (t = 15), this.hue(this.hue() + t);
    }, s.prototype.alpha = function(t) {
      return typeof t == "number" ? dt({
        r: (e = this.rgba).r,
        g: e.g,
        b: e.b,
        a: t
      }) : X(this.rgba.a, 3);
      var e;
    }, s.prototype.hue = function(t) {
      var e = le(this.rgba);
      return typeof t == "number" ? dt({
        h: t,
        s: e.s,
        l: e.l,
        a: e.a
      }) : X(e.h);
    }, s.prototype.isEqual = function(t) {
      return this.toHex() === dt(t).toHex();
    }, s;
  })(), dt = function(s) {
    return s instanceof Es ? s : new Es(s);
  }, Mi = [], To = function(s) {
    s.forEach(function(t) {
      Mi.indexOf(t) < 0 && (t(Es, ks), Mi.push(t));
    });
  };
  function ko(s, t) {
    var e = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000"
    }, i = {};
    for (var r in e) i[e[r]] = r;
    var n = {};
    s.prototype.toName = function(o) {
      if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
      var a, h, l = i[this.toHex()];
      if (l) return l;
      if (o == null ? void 0 : o.closest) {
        var c = this.toRgb(), u = 1 / 0, f = "black";
        if (!n.length) for (var d in e) n[d] = new s(e[d]).toRgb();
        for (var p in e) {
          var g = (a = c, h = n[p], Math.pow(a.r - h.r, 2) + Math.pow(a.g - h.g, 2) + Math.pow(a.b - h.b, 2));
          g < u && (u = g, f = p);
        }
        return f;
      }
    }, t.string.push([
      function(o) {
        var a = o.toLowerCase(), h = a === "transparent" ? "#0000" : e[a];
        return h ? new s(h).toRgb() : null;
      },
      "name"
    ]);
  }
  To([
    ko
  ]);
  const Vt = class re {
    constructor(t = 16777215) {
      this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t;
    }
    get red() {
      return this._components[0];
    }
    get green() {
      return this._components[1];
    }
    get blue() {
      return this._components[2];
    }
    get alpha() {
      return this._components[3];
    }
    setValue(t) {
      return this.value = t, this;
    }
    set value(t) {
      if (t instanceof re) this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
      else {
        if (t === null) throw new Error("Cannot set Color#value to null");
        (this._value === null || !this._isSourceEqual(this._value, t)) && (this._value = this._cloneSource(t), this._normalize(this._value));
      }
    }
    get value() {
      return this._value;
    }
    _cloneSource(t) {
      return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? {
        ...t
      } : t;
    }
    _isSourceEqual(t, e) {
      const i = typeof t;
      if (i !== typeof e) return false;
      if (i === "number" || i === "string" || t instanceof Number) return t === e;
      if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length !== e.length ? false : t.every((n, o) => n === e[o]);
      if (t !== null && e !== null) {
        const n = Object.keys(t), o = Object.keys(e);
        return n.length !== o.length ? false : n.every((a) => t[a] === e[a]);
      }
      return t === e;
    }
    toRgba() {
      const [t, e, i, r] = this._components;
      return {
        r: t,
        g: e,
        b: i,
        a: r
      };
    }
    toRgb() {
      const [t, e, i] = this._components;
      return {
        r: t,
        g: e,
        b: i
      };
    }
    toRgbaString() {
      const [t, e, i] = this.toUint8RgbArray();
      return `rgba(${t},${e},${i},${this.alpha})`;
    }
    toUint8RgbArray(t) {
      const [e, i, r] = this._components;
      return this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb), t[0] = Math.round(e * 255), t[1] = Math.round(i * 255), t[2] = Math.round(r * 255), t;
    }
    toArray(t) {
      this._arrayRgba || (this._arrayRgba = []), t || (t = this._arrayRgba);
      const [e, i, r, n] = this._components;
      return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t;
    }
    toRgbArray(t) {
      this._arrayRgb || (this._arrayRgb = []), t || (t = this._arrayRgb);
      const [e, i, r] = this._components;
      return t[0] = e, t[1] = i, t[2] = r, t;
    }
    toNumber() {
      return this._int;
    }
    toBgrNumber() {
      const [t, e, i] = this.toUint8RgbArray();
      return (i << 16) + (e << 8) + t;
    }
    toLittleEndianNumber() {
      const t = this._int;
      return (t >> 16) + (t & 65280) + ((t & 255) << 16);
    }
    multiply(t) {
      const [e, i, r, n] = re._temp.setValue(t)._components;
      return this._components[0] *= e, this._components[1] *= i, this._components[2] *= r, this._components[3] *= n, this._refreshInt(), this._value = null, this;
    }
    premultiply(t, e = true) {
      return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this;
    }
    toPremultiplied(t, e = true) {
      if (t === 1) return (255 << 24) + this._int;
      if (t === 0) return e ? 0 : this._int;
      let i = this._int >> 16 & 255, r = this._int >> 8 & 255, n = this._int & 255;
      return e && (i = i * t + 0.5 | 0, r = r * t + 0.5 | 0, n = n * t + 0.5 | 0), (t * 255 << 24) + (i << 16) + (r << 8) + n;
    }
    toHex() {
      const t = this._int.toString(16);
      return `#${"000000".substring(0, 6 - t.length) + t}`;
    }
    toHexa() {
      const e = Math.round(this._components[3] * 255).toString(16);
      return this.toHex() + "00".substring(0, 2 - e.length) + e;
    }
    setAlpha(t) {
      return this._components[3] = this._clamp(t), this;
    }
    _normalize(t) {
      let e, i, r, n;
      if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
        const o = t;
        e = (o >> 16 & 255) / 255, i = (o >> 8 & 255) / 255, r = (o & 255) / 255, n = 1;
      } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4) t = this._clamp(t), [e, i, r, n = 1] = t;
      else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4) t = this._clamp(t, 0, 255), [e, i, r, n = 255] = t, e /= 255, i /= 255, r /= 255, n /= 255;
      else if (typeof t == "string" || typeof t == "object") {
        if (typeof t == "string") {
          const a = re.HEX_PATTERN.exec(t);
          a && (t = `#${a[2]}`);
        }
        const o = dt(t);
        o.isValid() && ({ r: e, g: i, b: r, a: n } = o.rgba, e /= 255, i /= 255, r /= 255);
      }
      if (e !== void 0) this._components[0] = e, this._components[1] = i, this._components[2] = r, this._components[3] = n, this._refreshInt();
      else throw new Error(`Unable to convert color ${t}`);
    }
    _refreshInt() {
      this._clamp(this._components);
      const [t, e, i] = this._components;
      this._int = (t * 255 << 16) + (e * 255 << 8) + (i * 255 | 0);
    }
    _clamp(t, e = 0, i = 1) {
      return typeof t == "number" ? Math.min(Math.max(t, e), i) : (t.forEach((r, n) => {
        t[n] = Math.min(Math.max(r, e), i);
      }), t);
    }
    static isColorLike(t) {
      return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof re || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0;
    }
  };
  Vt.shared = new Vt();
  Vt._temp = new Vt();
  Vt.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
  nt = Vt;
  const Eo = {
    cullArea: null,
    cullable: false,
    cullableChildren: true
  };
  let ss = 0;
  const Pi = 500;
  $ = function(...s) {
    ss !== Pi && (ss++, ss === Pi ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...s));
  };
  Ve = {
    _registeredResources: /* @__PURE__ */ new Set(),
    register(s) {
      this._registeredResources.add(s);
    },
    unregister(s) {
      this._registeredResources.delete(s);
    },
    release() {
      this._registeredResources.forEach((s) => s.clear());
    },
    get registeredCount() {
      return this._registeredResources.size;
    },
    isRegistered(s) {
      return this._registeredResources.has(s);
    },
    reset() {
      this._registeredResources.clear();
    }
  };
  class Io {
    constructor(t, e) {
      this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e);
    }
    prepopulate(t) {
      for (let e = 0; e < t; e++) this._pool[this._index++] = new this._classType();
      this._count += t;
    }
    get(t) {
      var _a2;
      let e;
      return this._index > 0 ? e = this._pool[--this._index] : (e = new this._classType(), this._count++), (_a2 = e.init) == null ? void 0 : _a2.call(e, t), e;
    }
    return(t) {
      var _a2;
      (_a2 = t.reset) == null ? void 0 : _a2.call(t), this._pool[this._index++] = t;
    }
    get totalSize() {
      return this._count;
    }
    get totalFree() {
      return this._index;
    }
    get totalUsed() {
      return this._count - this._index;
    }
    clear() {
      if (this._pool.length > 0 && this._pool[0].destroy) for (let t = 0; t < this._index; t++) this._pool[t].destroy();
      this._pool.length = 0, this._count = 0, this._index = 0;
    }
  }
  class Ro {
    constructor() {
      this._poolsByClass = /* @__PURE__ */ new Map();
    }
    prepopulate(t, e) {
      this.getPool(t).prepopulate(e);
    }
    get(t, e) {
      return this.getPool(t).get(e);
    }
    return(t) {
      this.getPool(t.constructor).return(t);
    }
    getPool(t) {
      return this._poolsByClass.has(t) || this._poolsByClass.set(t, new Io(t)), this._poolsByClass.get(t);
    }
    stats() {
      const t = {};
      return this._poolsByClass.forEach((e) => {
        const i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
        t[i] = {
          free: e.totalFree,
          used: e.totalUsed,
          size: e.totalSize
        };
      }), t;
    }
    clear() {
      this._poolsByClass.forEach((t) => t.clear()), this._poolsByClass.clear();
    }
  }
  tt = new Ro();
  Ve.register(tt);
  const Bo = {
    get isCachedAsTexture() {
      var _a2;
      return !!((_a2 = this.renderGroup) == null ? void 0 : _a2.isCachedAsTexture);
    },
    cacheAsTexture(s) {
      typeof s == "boolean" && s === false ? this.disableRenderGroup() : (this.enableRenderGroup(), this.renderGroup.enableCacheAsTexture(s === true ? {} : s));
    },
    updateCacheTexture() {
      var _a2;
      (_a2 = this.renderGroup) == null ? void 0 : _a2.updateCacheTexture();
    },
    get cacheAsBitmap() {
      return this.isCachedAsTexture;
    },
    set cacheAsBitmap(s) {
      F("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead."), this.cacheAsTexture(s);
    }
  };
  Go = function(s, t, e) {
    const i = s.length;
    let r;
    if (t >= i || e === 0) return;
    e = t + e > i ? i - t : e;
    const n = i - e;
    for (r = t; r < n; ++r) s[r] = s[r + e];
    s.length = n;
  };
  const Fo = {
    allowChildren: true,
    removeChildren(s = 0, t) {
      var _a2;
      const e = t ?? this.children.length, i = e - s, r = [];
      if (i > 0 && i <= e) {
        for (let o = e - 1; o >= s; o--) {
          const a = this.children[o];
          a && (r.push(a), a.parent = null);
        }
        Go(this.children, s, e);
        const n = this.renderGroup || this.parentRenderGroup;
        n && n.removeChildren(r);
        for (let o = 0; o < r.length; ++o) {
          const a = r[o];
          (_a2 = a.parentRenderLayer) == null ? void 0 : _a2.detach(a), this.emit("childRemoved", a, this, o), r[o].emit("removed", this);
        }
        return r.length > 0 && this._didViewChangeTick++, r;
      } else if (i === 0 && this.children.length === 0) return r;
      throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    },
    removeChildAt(s) {
      const t = this.getChildAt(s);
      return this.removeChild(t);
    },
    getChildAt(s) {
      if (s < 0 || s >= this.children.length) throw new Error(`getChildAt: Index (${s}) does not exist.`);
      return this.children[s];
    },
    setChildIndex(s, t) {
      if (t < 0 || t >= this.children.length) throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
      this.getChildIndex(s), this.addChildAt(s, t);
    },
    getChildIndex(s) {
      const t = this.children.indexOf(s);
      if (t === -1) throw new Error("The supplied Container must be a child of the caller");
      return t;
    },
    addChildAt(s, t) {
      this.allowChildren || F(H, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
      const { children: e } = this;
      if (t < 0 || t > e.length) throw new Error(`${s}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
      if (s.parent) {
        const r = s.parent.children.indexOf(s);
        if (s.parent === this && r === t) return s;
        r !== -1 && s.parent.children.splice(r, 1);
      }
      t === e.length ? e.push(s) : e.splice(t, 0, s), s.parent = this, s.didChange = true, s._updateFlags = 15;
      const i = this.renderGroup || this.parentRenderGroup;
      return i && i.addChild(s), this.sortableChildren && (this.sortDirty = true), this.emit("childAdded", s, this, t), s.emit("added", this), s;
    },
    swapChildren(s, t) {
      if (s === t) return;
      const e = this.getChildIndex(s), i = this.getChildIndex(t);
      this.children[e] = t, this.children[i] = s;
      const r = this.renderGroup || this.parentRenderGroup;
      r && (r.structureDidChange = true), this._didContainerChangeTick++;
    },
    removeFromParent() {
      var _a2;
      (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
    },
    reparentChild(...s) {
      return s.length === 1 ? this.reparentChildAt(s[0], this.children.length) : (s.forEach((t) => this.reparentChildAt(t, this.children.length)), s[0]);
    },
    reparentChildAt(s, t) {
      if (s.parent === this) return this.setChildIndex(s, t), s;
      const e = s.worldTransform.clone();
      s.removeFromParent(), this.addChildAt(s, t);
      const i = this.worldTransform.clone();
      return i.invert(), e.prepend(i), s.setFromMatrix(e), s;
    },
    replaceChild(s, t) {
      s.updateLocalTransform(), this.addChildAt(t, this.getChildIndex(s)), t.setFromMatrix(s.localTransform), t.updateLocalTransform(), this.removeChild(s);
    }
  }, Do = {
    collectRenderables(s, t, e) {
      this.parentRenderLayer && this.parentRenderLayer !== e || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(s, t, e) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, s) : this.collectRenderablesWithEffects(s, t, e));
    },
    collectRenderablesSimple(s, t, e) {
      const i = this.children, r = i.length;
      for (let n = 0; n < r; n++) i[n].collectRenderables(s, t, e);
    },
    collectRenderablesWithEffects(s, t, e) {
      const { renderPipes: i } = t;
      for (let r = 0; r < this.effects.length; r++) {
        const n = this.effects[r];
        i[n.pipe].push(n, this, s);
      }
      this.collectRenderablesSimple(s, t, e);
      for (let r = this.effects.length - 1; r >= 0; r--) {
        const n = this.effects[r];
        i[n.pipe].pop(n, this, s);
      }
    }
  };
  Si = class {
    constructor() {
      this.pipe = "filter", this.priority = 1;
    }
    destroy() {
      for (let t = 0; t < this.filters.length; t++) this.filters[t].destroy();
      this.filters = null, this.filterArea = null;
    }
  };
  class Lo {
    constructor() {
      this._effectClasses = [], this._tests = [], this._initialized = false;
    }
    init() {
      this._initialized || (this._initialized = true, this._effectClasses.forEach((t) => {
        this.add({
          test: t.test,
          maskClass: t
        });
      }));
    }
    add(t) {
      this._tests.push(t);
    }
    getMaskEffect(t) {
      this._initialized || this.init();
      for (let e = 0; e < this._tests.length; e++) {
        const i = this._tests[e];
        if (i.test(t)) return tt.get(i.maskClass, t);
      }
      return t;
    }
    returnMaskEffect(t) {
      tt.return(t);
    }
  }
  const Is = new Lo();
  U.handleByList(S.MaskEffect, Is._effectClasses);
  const Oo = {
    _maskEffect: null,
    _maskOptions: {
      inverse: false
    },
    _filterEffect: null,
    effects: [],
    _markStructureAsChanged() {
      const s = this.renderGroup || this.parentRenderGroup;
      s && (s.structureDidChange = true);
    },
    addEffect(s) {
      this.effects.indexOf(s) === -1 && (this.effects.push(s), this.effects.sort((e, i) => e.priority - i.priority), this._markStructureAsChanged(), this._updateIsSimple());
    },
    removeEffect(s) {
      const t = this.effects.indexOf(s);
      t !== -1 && (this.effects.splice(t, 1), this._markStructureAsChanged(), this._updateIsSimple());
    },
    set mask(s) {
      const t = this._maskEffect;
      (t == null ? void 0 : t.mask) !== s && (t && (this.removeEffect(t), Is.returnMaskEffect(t), this._maskEffect = null), s != null && (this._maskEffect = Is.getMaskEffect(s), this.addEffect(this._maskEffect)));
    },
    get mask() {
      var _a2;
      return (_a2 = this._maskEffect) == null ? void 0 : _a2.mask;
    },
    setMask(s) {
      this._maskOptions = {
        ...this._maskOptions,
        ...s
      }, s.mask && (this.mask = s.mask), this._markStructureAsChanged();
    },
    set filters(s) {
      var _a2;
      !Array.isArray(s) && s && (s = [
        s
      ]);
      const t = this._filterEffect || (this._filterEffect = new Si());
      s = s;
      const e = (s == null ? void 0 : s.length) > 0, i = ((_a2 = t.filters) == null ? void 0 : _a2.length) > 0, r = e !== i;
      s = Array.isArray(s) ? s.slice(0) : s, t.filters = Object.freeze(s), r && (e ? this.addEffect(t) : (this.removeEffect(t), t.filters = s ?? null));
    },
    get filters() {
      var _a2;
      return (_a2 = this._filterEffect) == null ? void 0 : _a2.filters;
    },
    set filterArea(s) {
      this._filterEffect || (this._filterEffect = new Si()), this._filterEffect.filterArea = s;
    },
    get filterArea() {
      var _a2;
      return (_a2 = this._filterEffect) == null ? void 0 : _a2.filterArea;
    }
  }, zo = {
    label: null,
    get name() {
      return F(H, "Container.name property has been removed, use Container.label instead"), this.label;
    },
    set name(s) {
      F(H, "Container.name property has been removed, use Container.label instead"), this.label = s;
    },
    getChildByName(s, t = false) {
      return this.getChildByLabel(s, t);
    },
    getChildByLabel(s, t = false) {
      const e = this.children;
      for (let i = 0; i < e.length; i++) {
        const r = e[i];
        if (r.label === s || s instanceof RegExp && s.test(r.label)) return r;
      }
      if (t) for (let i = 0; i < e.length; i++) {
        const n = e[i].getChildByLabel(s, true);
        if (n) return n;
      }
      return null;
    },
    getChildrenByLabel(s, t = false, e = []) {
      const i = this.children;
      for (let r = 0; r < i.length; r++) {
        const n = i[r];
        (n.label === s || s instanceof RegExp && s.test(n.label)) && e.push(n);
      }
      if (t) for (let r = 0; r < i.length; r++) i[r].getChildrenByLabel(s, true, e);
      return e;
    }
  }, Q = tt.getPool(B), gt = tt.getPool(ht), Uo = new B(), No = {
    getFastGlobalBounds(s, t) {
      t || (t = new ht()), t.clear(), this._getGlobalBoundsRecursive(!!s, t, this.parentRenderLayer), t.isValid || t.set(0, 0, 0, 0);
      const e = this.renderGroup || this.parentRenderGroup;
      return t.applyMatrix(e.worldTransform), t;
    },
    _getGlobalBoundsRecursive(s, t, e) {
      let i = t;
      if (s && this.parentRenderLayer && this.parentRenderLayer !== e || this.localDisplayStatus !== 7 || !this.measurable) return;
      const r = !!this.effects.length;
      if ((this.renderGroup || r) && (i = gt.get().clear()), this.boundsArea) t.addRect(this.boundsArea, this.worldTransform);
      else {
        if (this.renderPipeId) {
          const o = this.bounds;
          i.addFrame(o.minX, o.minY, o.maxX, o.maxY, this.groupTransform);
        }
        const n = this.children;
        for (let o = 0; o < n.length; o++) n[o]._getGlobalBoundsRecursive(s, i, e);
      }
      if (r) {
        let n = false;
        const o = this.renderGroup || this.parentRenderGroup;
        for (let a = 0; a < this.effects.length; a++) this.effects[a].addBounds && (n || (n = true, i.applyMatrix(o.worldTransform)), this.effects[a].addBounds(i, true));
        n && i.applyMatrix(o.worldTransform.copyTo(Uo).invert()), t.addBounds(i), gt.return(i);
      } else this.renderGroup && (t.addBounds(i, this.relativeGroupTransform), gt.return(i));
    }
  };
  Dr = function(s, t, e) {
    e.clear();
    let i, r;
    return s.parent ? t ? i = s.parent.worldTransform : (r = Q.get().identity(), i = js(s, r)) : i = B.IDENTITY, Lr(s, e, i, t), r && Q.return(r), e.isValid || e.set(0, 0, 0, 0), e;
  };
  function Lr(s, t, e, i) {
    var _a2, _b;
    if (!s.visible || !s.measurable) return;
    let r;
    i ? r = s.worldTransform : (s.updateLocalTransform(), r = Q.get(), r.appendFrom(s.localTransform, e));
    const n = t, o = !!s.effects.length;
    if (o && (t = gt.get().clear()), s.boundsArea) t.addRect(s.boundsArea, r);
    else {
      const a = s.bounds;
      a && !a.isEmpty() && (t.matrix = r, t.addBounds(a));
      for (let h = 0; h < s.children.length; h++) Lr(s.children[h], t, r, i);
    }
    if (o) {
      for (let a = 0; a < s.effects.length; a++) (_b = (_a2 = s.effects[a]).addBounds) == null ? void 0 : _b.call(_a2, t);
      n.addBounds(t, B.IDENTITY), gt.return(t);
    }
    i || Q.return(r);
  }
  function js(s, t) {
    const e = s.parent;
    return e && (js(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t;
  }
  Or = function(s, t) {
    if (s === 16777215 || !t) return t;
    if (t === 16777215 || !s) return s;
    const e = s >> 16 & 255, i = s >> 8 & 255, r = s & 255, n = t >> 16 & 255, o = t >> 8 & 255, a = t & 255, h = e * n / 255 | 0, l = i * o / 255 | 0, c = r * a / 255 | 0;
    return (h << 16) + (l << 8) + c;
  };
  const Ti = 16777215;
  ki = function(s, t) {
    return s === Ti ? t : t === Ti ? s : Or(s, t);
  };
  Le = function(s) {
    return ((s & 255) << 16) + (s & 65280) + (s >> 16 & 255);
  };
  const $o = {
    getGlobalAlpha(s) {
      if (s) return this.renderGroup ? this.renderGroup.worldAlpha : this.parentRenderGroup ? this.parentRenderGroup.worldAlpha * this.alpha : this.alpha;
      let t = this.alpha, e = this.parent;
      for (; e; ) t *= e.alpha, e = e.parent;
      return t;
    },
    getGlobalTransform(s = new B(), t) {
      if (t) return s.copyFrom(this.worldTransform);
      this.updateLocalTransform();
      const e = js(this, Q.get().identity());
      return s.appendFrom(this.localTransform, e), Q.return(e), s;
    },
    getGlobalTint(s) {
      if (s) return this.renderGroup ? Le(this.renderGroup.worldColor) : this.parentRenderGroup ? Le(ki(this.localColor, this.parentRenderGroup.worldColor)) : this.tint;
      let t = this.localColor, e = this.parent;
      for (; e; ) t = ki(t, e.localColor), e = e.parent;
      return Le(t);
    }
  };
  zr = function(s, t, e) {
    return t.clear(), e || (e = B.IDENTITY), Ur(s, t, e, s, true), t.isValid || t.set(0, 0, 0, 0), t;
  };
  function Ur(s, t, e, i, r) {
    var _a2, _b;
    let n;
    if (r) n = Q.get(), n = e.copyTo(n);
    else {
      if (!s.visible || !s.measurable) return;
      s.updateLocalTransform();
      const h = s.localTransform;
      n = Q.get(), n.appendFrom(h, e);
    }
    const o = t, a = !!s.effects.length;
    if (a && (t = gt.get().clear()), s.boundsArea) t.addRect(s.boundsArea, n);
    else {
      s.renderPipeId && (t.matrix = n, t.addBounds(s.bounds));
      const h = s.children;
      for (let l = 0; l < h.length; l++) Ur(h[l], t, n, i, false);
    }
    if (a) {
      for (let h = 0; h < s.effects.length; h++) (_b = (_a2 = s.effects[h]).addLocalBounds) == null ? void 0 : _b.call(_a2, t, i);
      o.addBounds(t, B.IDENTITY), gt.return(t);
    }
    Q.return(n);
  }
  function Nr(s, t) {
    const e = s.children;
    for (let i = 0; i < e.length; i++) {
      const r = e[i], n = r.uid, o = (r._didViewChangeTick & 65535) << 16 | r._didContainerChangeTick & 65535, a = t.index;
      (t.data[a] !== n || t.data[a + 1] !== o) && (t.data[t.index] = n, t.data[t.index + 1] = o, t.didChange = true), t.index = a + 2, r.children.length && Nr(r, t);
    }
    return t.didChange;
  }
  const Vo = new B(), Wo = {
    _localBoundsCacheId: -1,
    _localBoundsCacheData: null,
    _setWidth(s, t) {
      const e = Math.sign(this.scale.x) || 1;
      t !== 0 ? this.scale.x = s / t * e : this.scale.x = e;
    },
    _setHeight(s, t) {
      const e = Math.sign(this.scale.y) || 1;
      t !== 0 ? this.scale.y = s / t * e : this.scale.y = e;
    },
    getLocalBounds() {
      this._localBoundsCacheData || (this._localBoundsCacheData = {
        data: [],
        index: 1,
        didChange: false,
        localBounds: new ht()
      });
      const s = this._localBoundsCacheData;
      return s.index = 1, s.didChange = false, s.data[0] !== this._didViewChangeTick && (s.didChange = true, s.data[0] = this._didViewChangeTick), Nr(this, s), s.didChange && zr(this, s.localBounds, Vo), s.localBounds;
    },
    getBounds(s, t) {
      return Dr(this, s, t || new ht());
    }
  }, Ho = {
    _onRender: null,
    set onRender(s) {
      const t = this.renderGroup || this.parentRenderGroup;
      if (!s) {
        this._onRender && (t == null ? void 0 : t.removeOnRender(this)), this._onRender = null;
        return;
      }
      this._onRender || (t == null ? void 0 : t.addOnRender(this)), this._onRender = s;
    },
    get onRender() {
      return this._onRender;
    }
  }, Xo = {
    _zIndex: 0,
    sortDirty: false,
    sortableChildren: false,
    get zIndex() {
      return this._zIndex;
    },
    set zIndex(s) {
      this._zIndex !== s && (this._zIndex = s, this.depthOfChildModified());
    },
    depthOfChildModified() {
      this.parent && (this.parent.sortableChildren = true, this.parent.sortDirty = true), this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = true);
    },
    sortChildren() {
      this.sortDirty && (this.sortDirty = false, this.children.sort(Yo));
    }
  };
  function Yo(s, t) {
    return s._zIndex - t._zIndex;
  }
  const jo = {
    getGlobalPosition(s = new Z(), t = false) {
      return this.parent ? this.parent.toGlobal(this._position, s, t) : (s.x = this._position.x, s.y = this._position.y), s;
    },
    toGlobal(s, t, e = false) {
      const i = this.getGlobalTransform(Q.get(), e);
      return t = i.apply(s, t), Q.return(i), t;
    },
    toLocal(s, t, e, i) {
      t && (s = t.toGlobal(s, e, i));
      const r = this.getGlobalTransform(Q.get(), i);
      return e = r.applyInverse(s, e), Q.return(r), e;
    }
  };
  class qs {
    constructor() {
      this.uid = V("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
    }
    reset() {
      this.instructionSize = 0;
    }
    destroy() {
      this.instructions.length = 0, this.renderables.length = 0, this.renderPipes = null, this.gcTick = 0;
    }
    add(t) {
      this.instructions[this.instructionSize++] = t;
    }
    log() {
      this.instructions.length = this.instructionSize, console.table(this.instructions, [
        "type",
        "action"
      ]);
    }
  }
  let qo = 0;
  class Zo {
    constructor(t) {
      this._poolKeyHash = /* @__PURE__ */ Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = false, this.textureStyle = new Er(this.textureOptions);
    }
    createTexture(t, e, i) {
      const r = new lt({
        ...this.textureOptions,
        width: t,
        height: e,
        resolution: 1,
        antialias: i,
        autoGarbageCollect: false
      });
      return new G({
        source: r,
        label: `texturePool_${qo++}`
      });
    }
    getOptimalTexture(t, e, i = 1, r) {
      let n = Math.ceil(t * i - 1e-6), o = Math.ceil(e * i - 1e-6);
      n = pi(n), o = pi(o);
      const a = (n << 17) + (o << 1) + (r ? 1 : 0);
      this._texturePool[a] || (this._texturePool[a] = []);
      let h = this._texturePool[a].pop();
      return h || (h = this.createTexture(n, o, r)), h.source._resolution = i, h.source.width = n / i, h.source.height = o / i, h.source.pixelWidth = n, h.source.pixelHeight = o, h.frame.x = 0, h.frame.y = 0, h.frame.width = t, h.frame.height = e, h.updateUvs(), this._poolKeyHash[h.uid] = a, h;
    }
    getSameSizeTexture(t, e = false) {
      const i = t.source;
      return this.getOptimalTexture(t.width, t.height, i._resolution, e);
    }
    returnTexture(t, e = false) {
      const i = this._poolKeyHash[t.uid];
      e && (t.source.style = this.textureStyle), this._texturePool[i].push(t);
    }
    clear(t) {
      if (t = t !== false, t) for (const e in this._texturePool) {
        const i = this._texturePool[e];
        if (i) for (let r = 0; r < i.length; r++) i[r].destroy(true);
      }
      this._texturePool = {};
    }
  }
  $r = new Zo();
  Ve.register($r);
  Ko = class {
    constructor() {
      this.renderPipeId = "renderGroup", this.root = null, this.canBundle = false, this.renderGroupParent = null, this.renderGroupChildren = [], this.worldTransform = new B(), this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = /* @__PURE__ */ Object.create(null), this.updateTick = 0, this.gcTick = 0, this.childrenRenderablesToUpdate = {
        list: [],
        index: 0
      }, this.structureDidChange = true, this.instructionSet = new qs(), this._onRenderContainers = [], this.textureNeedsUpdate = true, this.isCachedAsTexture = false, this._matrixDirty = 7;
    }
    init(t) {
      this.root = t, t._onRender && this.addOnRender(t), t.didChange = true;
      const e = t.children;
      for (let i = 0; i < e.length; i++) {
        const r = e[i];
        r._updateFlags = 15, this.addChild(r);
      }
    }
    enableCacheAsTexture(t = {}) {
      this.textureOptions = t, this.isCachedAsTexture = true, this.textureNeedsUpdate = true;
    }
    disableCacheAsTexture() {
      this.isCachedAsTexture = false, this.texture && ($r.returnTexture(this.texture, true), this.texture = null);
    }
    updateCacheTexture() {
      this.textureNeedsUpdate = true;
      const t = this._parentCacheAsTextureRenderGroup;
      t && !t.textureNeedsUpdate && t.updateCacheTexture();
    }
    reset() {
      this.renderGroupChildren.length = 0;
      for (const t in this.childrenToUpdate) {
        const e = this.childrenToUpdate[t];
        e.list.fill(null), e.index = 0;
      }
      this.childrenRenderablesToUpdate.index = 0, this.childrenRenderablesToUpdate.list.fill(null), this.root = null, this.updateTick = 0, this.structureDidChange = true, this._onRenderContainers.length = 0, this.renderGroupParent = null, this.disableCacheAsTexture();
    }
    get localTransform() {
      return this.root.localTransform;
    }
    addRenderGroupChild(t) {
      t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.renderGroupChildren.push(t);
    }
    _removeRenderGroupChild(t) {
      const e = this.renderGroupChildren.indexOf(t);
      e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null;
    }
    addChild(t) {
      if (this.structureDidChange = true, t.parentRenderGroup = this, t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t.didChange = true, this.onChildUpdate(t), t.renderGroup) {
        this.addRenderGroupChild(t.renderGroup);
        return;
      }
      t._onRender && this.addOnRender(t);
      const e = t.children;
      for (let i = 0; i < e.length; i++) this.addChild(e[i]);
    }
    removeChild(t) {
      if (this.structureDidChange = true, t._onRender && (t.renderGroup || this.removeOnRender(t)), t.parentRenderGroup = null, t.renderGroup) {
        this._removeRenderGroupChild(t.renderGroup);
        return;
      }
      const e = t.children;
      for (let i = 0; i < e.length; i++) this.removeChild(e[i]);
    }
    removeChildren(t) {
      for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
    }
    onChildUpdate(t) {
      let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
      e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
        index: 0,
        list: []
      }), e.list[e.index++] = t;
    }
    updateRenderable(t) {
      t.globalDisplayStatus < 7 || (this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t), t.didViewUpdate = false);
    }
    onChildViewUpdate(t) {
      this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t;
    }
    get isRenderable() {
      return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
    }
    addOnRender(t) {
      this._onRenderContainers.push(t);
    }
    removeOnRender(t) {
      this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1);
    }
    runOnRender(t) {
      for (let e = 0; e < this._onRenderContainers.length; e++) this._onRenderContainers[e]._onRender(t);
    }
    destroy() {
      this.disableCacheAsTexture(), this.renderGroupParent = null, this.root = null, this.childrenRenderablesToUpdate = null, this.childrenToUpdate = null, this.renderGroupChildren = null, this._onRenderContainers = null, this.instructionSet = null;
    }
    getChildren(t = []) {
      const e = this.root.children;
      for (let i = 0; i < e.length; i++) this._getChildren(e[i], t);
      return t;
    }
    _getChildren(t, e = []) {
      if (e.push(t), t.renderGroup) return e;
      const i = t.children;
      for (let r = 0; r < i.length; r++) this._getChildren(i[r], e);
      return e;
    }
    invalidateMatrices() {
      this._matrixDirty = 7;
    }
    get inverseWorldTransform() {
      return (this._matrixDirty & 1) === 0 ? this._inverseWorldTransform : (this._matrixDirty &= -2, this._inverseWorldTransform || (this._inverseWorldTransform = new B()), this._inverseWorldTransform.copyFrom(this.worldTransform).invert());
    }
    get textureOffsetInverseTransform() {
      return (this._matrixDirty & 2) === 0 ? this._textureOffsetInverseTransform : (this._matrixDirty &= -3, this._textureOffsetInverseTransform || (this._textureOffsetInverseTransform = new B()), this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y));
    }
    get inverseParentTextureTransform() {
      if ((this._matrixDirty & 4) === 0) return this._inverseParentTextureTransform;
      this._matrixDirty &= -5;
      const t = this._parentCacheAsTextureRenderGroup;
      return t ? (this._inverseParentTextureTransform || (this._inverseParentTextureTransform = new B()), this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x, -t._textureBounds.y)) : this.worldTransform;
    }
    get cacheToLocalTransform() {
      return this.isCachedAsTexture ? this.textureOffsetInverseTransform : this._parentCacheAsTextureRenderGroup ? this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform : null;
    }
  };
  function Qo(s, t, e = {}) {
    for (const i in t) !e[i] && t[i] !== void 0 && (s[i] = t[i]);
  }
  let is, Se, rs, Te;
  is = new q(null);
  Se = new q(null);
  rs = new q(null, 1, 1);
  Te = new q(null);
  Ei = 1;
  Jo = 2;
  ns = 4;
  xt = class extends _t {
    constructor(t = {}) {
      var _a2, _b;
      super(), this.uid = V("renderable"), this._updateFlags = 15, this.renderGroup = null, this.parentRenderGroup = null, this.parentRenderGroupIndex = 0, this.didChange = false, this.didViewUpdate = false, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = true, this.measurable = true, this.isSimple = true, this.parentRenderLayer = null, this.updateTick = -1, this.localTransform = new B(), this.relativeGroupTransform = new B(), this.groupTransform = this.relativeGroupTransform, this.destroyed = false, this._position = new q(this, 0, 0), this._scale = rs, this._pivot = Se, this._origin = Te, this._skew = is, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didContainerChangeTick = 0, this._didViewChangeTick = 0, this._didLocalTransformChangeId = -1, this.effects = [], Qo(this, t, {
        children: true,
        parent: true,
        effects: true
      }), (_a2 = t.children) == null ? void 0 : _a2.forEach((e) => this.addChild(e)), (_b = t.parent) == null ? void 0 : _b.addChild(this);
    }
    static mixin(t) {
      F("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."), U.mixin(xt, t);
    }
    set _didChangeId(t) {
      this._didViewChangeTick = t >> 12 & 4095, this._didContainerChangeTick = t & 4095;
    }
    get _didChangeId() {
      return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12;
    }
    addChild(...t) {
      if (this.allowChildren || F(H, "addChild: Only Containers will be allowed to add children in v8.0.0"), t.length > 1) {
        for (let r = 0; r < t.length; r++) this.addChild(t[r]);
        return t[0];
      }
      const e = t[0], i = this.renderGroup || this.parentRenderGroup;
      return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), i && (i.structureDidChange = true), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = true), e.parent = this, e.didChange = true, e._updateFlags = 15, i && i.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), this._didViewChangeTick++, e._zIndex !== 0 && e.depthOfChildModified(), e);
    }
    removeChild(...t) {
      if (t.length > 1) {
        for (let r = 0; r < t.length; r++) this.removeChild(t[r]);
        return t[0];
      }
      const e = t[0], i = this.children.indexOf(e);
      return i > -1 && (this._didViewChangeTick++, this.children.splice(i, 1), this.renderGroup ? this.renderGroup.removeChild(e) : this.parentRenderGroup && this.parentRenderGroup.removeChild(e), e.parentRenderLayer && e.parentRenderLayer.detach(e), e.parent = null, this.emit("childRemoved", e, this, i), e.emit("removed", this)), e;
    }
    _onUpdate(t) {
      t && t === this._skew && this._updateSkew(), this._didContainerChangeTick++, !this.didChange && (this.didChange = true, this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this));
    }
    set isRenderGroup(t) {
      !!this.renderGroup !== t && (t ? this.enableRenderGroup() : this.disableRenderGroup());
    }
    get isRenderGroup() {
      return !!this.renderGroup;
    }
    enableRenderGroup() {
      if (this.renderGroup) return;
      const t = this.parentRenderGroup;
      t == null ? void 0 : t.removeChild(this), this.renderGroup = tt.get(Ko, this), this.groupTransform = B.IDENTITY, t == null ? void 0 : t.addChild(this), this._updateIsSimple();
    }
    disableRenderGroup() {
      if (!this.renderGroup) return;
      const t = this.parentRenderGroup;
      t == null ? void 0 : t.removeChild(this), tt.return(this.renderGroup), this.renderGroup = null, this.groupTransform = this.relativeGroupTransform, t == null ? void 0 : t.addChild(this), this._updateIsSimple();
    }
    _updateIsSimple() {
      this.isSimple = !this.renderGroup && this.effects.length === 0;
    }
    get worldTransform() {
      return this._worldTransform || (this._worldTransform = new B()), this.renderGroup ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this.parentRenderGroup && this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform), this._worldTransform;
    }
    get x() {
      return this._position.x;
    }
    set x(t) {
      this._position.x = t;
    }
    get y() {
      return this._position.y;
    }
    set y(t) {
      this._position.y = t;
    }
    get position() {
      return this._position;
    }
    set position(t) {
      this._position.copyFrom(t);
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(t) {
      this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew));
    }
    get angle() {
      return this.rotation * uo;
    }
    set angle(t) {
      this.rotation = t * fo;
    }
    get pivot() {
      return this._pivot === Se && (this._pivot = new q(this, 0, 0)), this._pivot;
    }
    set pivot(t) {
      this._pivot === Se && (this._pivot = new q(this, 0, 0), this._origin !== Te && $("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
    }
    get skew() {
      return this._skew === is && (this._skew = new q(this, 0, 0)), this._skew;
    }
    set skew(t) {
      this._skew === is && (this._skew = new q(this, 0, 0)), this._skew.copyFrom(t);
    }
    get scale() {
      return this._scale === rs && (this._scale = new q(this, 1, 1)), this._scale;
    }
    set scale(t) {
      this._scale === rs && (this._scale = new q(this, 0, 0)), typeof t == "string" && (t = parseFloat(t)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
    }
    get origin() {
      return this._origin === Te && (this._origin = new q(this, 0, 0)), this._origin;
    }
    set origin(t) {
      this._origin === Te && (this._origin = new q(this, 0, 0), this._pivot !== Se && $("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")), typeof t == "number" ? this._origin.set(t) : this._origin.copyFrom(t);
    }
    get width() {
      return Math.abs(this.scale.x * this.getLocalBounds().width);
    }
    set width(t) {
      const e = this.getLocalBounds().width;
      this._setWidth(t, e);
    }
    get height() {
      return Math.abs(this.scale.y * this.getLocalBounds().height);
    }
    set height(t) {
      const e = this.getLocalBounds().height;
      this._setHeight(t, e);
    }
    getSize(t) {
      t || (t = {});
      const e = this.getLocalBounds();
      return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t;
    }
    setSize(t, e) {
      const i = this.getLocalBounds();
      typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, i.width), e !== void 0 && this._setHeight(e, i.height);
    }
    _updateSkew() {
      const t = this._rotation, e = this._skew;
      this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x);
    }
    updateTransform(t) {
      return this.position.set(typeof t.x == "number" ? t.x : this.position.x, typeof t.y == "number" ? t.y : this.position.y), this.scale.set(typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x, typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y), this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation, this.skew.set(typeof t.skewX == "number" ? t.skewX : this.skew.x, typeof t.skewY == "number" ? t.skewY : this.skew.y), this.pivot.set(typeof t.pivotX == "number" ? t.pivotX : this.pivot.x, typeof t.pivotY == "number" ? t.pivotY : this.pivot.y), this.origin.set(typeof t.originX == "number" ? t.originX : this.origin.x, typeof t.originY == "number" ? t.originY : this.origin.y), this;
    }
    setFromMatrix(t) {
      t.decompose(this);
    }
    updateLocalTransform() {
      const t = this._didContainerChangeTick;
      if (this._didLocalTransformChangeId === t) return;
      this._didLocalTransformChangeId = t;
      const e = this.localTransform, i = this._scale, r = this._pivot, n = this._origin, o = this._position, a = i._x, h = i._y, l = r._x, c = r._y, u = -n._x, f = -n._y;
      e.a = this._cx * a, e.b = this._sx * a, e.c = this._cy * h, e.d = this._sy * h, e.tx = o._x - (l * e.a + c * e.c) + (u * e.a + f * e.c) - u, e.ty = o._y - (l * e.b + c * e.d) + (u * e.b + f * e.d) - f;
    }
    set alpha(t) {
      t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= Ei, this._onUpdate());
    }
    get alpha() {
      return this.localAlpha;
    }
    set tint(t) {
      const i = nt.shared.setValue(t ?? 16777215).toBgrNumber();
      i !== this.localColor && (this.localColor = i, this._updateFlags |= Ei, this._onUpdate());
    }
    get tint() {
      return Le(this.localColor);
    }
    set blendMode(t) {
      this.localBlendMode !== t && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = true), this._updateFlags |= Jo, this.localBlendMode = t, this._onUpdate());
    }
    get blendMode() {
      return this.localBlendMode;
    }
    get visible() {
      return !!(this.localDisplayStatus & 2);
    }
    set visible(t) {
      const e = t ? 2 : 0;
      (this.localDisplayStatus & 2) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = true), this._updateFlags |= ns, this.localDisplayStatus ^= 2, this._onUpdate());
    }
    get culled() {
      return !(this.localDisplayStatus & 4);
    }
    set culled(t) {
      const e = t ? 0 : 4;
      (this.localDisplayStatus & 4) !== e && (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = true), this._updateFlags |= ns, this.localDisplayStatus ^= 4, this._onUpdate());
    }
    get renderable() {
      return !!(this.localDisplayStatus & 1);
    }
    set renderable(t) {
      const e = t ? 1 : 0;
      (this.localDisplayStatus & 1) !== e && (this._updateFlags |= ns, this.localDisplayStatus ^= 1, this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = true), this._onUpdate());
    }
    get isRenderable() {
      return this.localDisplayStatus === 7 && this.groupAlpha > 0;
    }
    destroy(t = false) {
      var _a2;
      if (this.destroyed) return;
      this.destroyed = true;
      let e;
      if (this.children.length && (e = this.removeChildren(0, this.children.length)), this.removeFromParent(), this.parent = null, this._maskEffect = null, this._filterEffect = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._origin = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners(), (typeof t == "boolean" ? t : t == null ? void 0 : t.children) && e) for (let r = 0; r < e.length; ++r) e[r].destroy(t);
      (_a2 = this.renderGroup) == null ? void 0 : _a2.destroy(), this.renderGroup = null;
    }
  };
  U.mixin(xt, Fo, No, jo, Ho, Wo, Oo, zo, Xo, Eo, Bo, $o, Do);
  class Vr extends xt {
    constructor(t) {
      super(t), this.canBundle = true, this.allowChildren = false, this._roundPixels = 0, this._lastUsed = -1, this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = true, this._gcLastUsed = -1, this._bounds = new ht(0, 1, 0, 0), this._boundsDirty = true, this.autoGarbageCollect = t.autoGarbageCollect ?? true;
    }
    get bounds() {
      return this._boundsDirty ? (this.updateBounds(), this._boundsDirty = false, this._bounds) : this._bounds;
    }
    get roundPixels() {
      return !!this._roundPixels;
    }
    set roundPixels(t) {
      this._roundPixels = t ? 1 : 0;
    }
    containsPoint(t) {
      const e = this.bounds, { x: i, y: r } = t;
      return i >= e.minX && i <= e.maxX && r >= e.minY && r <= e.maxY;
    }
    onViewUpdate() {
      if (this._didViewChangeTick++, this._boundsDirty = true, this.didViewUpdate) return;
      this.didViewUpdate = true;
      const t = this.renderGroup || this.parentRenderGroup;
      t && t.onChildViewUpdate(this);
    }
    unload() {
      var _a2;
      this.emit("unload", this);
      for (const t in this._gpuData) (_a2 = this._gpuData[t]) == null ? void 0 : _a2.destroy();
      this._gpuData = /* @__PURE__ */ Object.create(null), this.onViewUpdate();
    }
    destroy(t) {
      this.unload(), super.destroy(t), this._bounds = null;
    }
    collectRenderablesSimple(t, e, i) {
      const { renderPipes: r } = e;
      r.blendMode.pushBlendMode(this, this.groupBlendMode, t);
      const o = r[this.renderPipeId];
      (o == null ? void 0 : o.addRenderable) && o.addRenderable(this, t), this.didViewUpdate = false;
      const a = this.children, h = a.length;
      for (let l = 0; l < h; l++) a[l].collectRenderables(t, e, i);
      r.blendMode.popBlendMode(t);
    }
  }
  Wt = class extends Vr {
    constructor(t = G.EMPTY) {
      t instanceof G && (t = {
        texture: t
      });
      const { texture: e = G.EMPTY, anchor: i, roundPixels: r, width: n, height: o, ...a } = t;
      super({
        label: "Sprite",
        ...a
      }), this.renderPipeId = "sprite", this.batched = true, this._visualBounds = {
        minX: 0,
        maxX: 1,
        minY: 0,
        maxY: 0
      }, this._anchor = new q({
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }), i ? this.anchor = i : e.defaultAnchor && (this.anchor = e.defaultAnchor), this.texture = e, this.allowChildren = false, this.roundPixels = r ?? false, n !== void 0 && (this.width = n), o !== void 0 && (this.height = o);
    }
    static from(t, e = false) {
      return t instanceof G ? new Wt(t) : new Wt(G.from(t, e));
    }
    set texture(t) {
      t || (t = G.EMPTY);
      const e = this._texture;
      e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this._width && this._setWidth(this._width, this._texture.orig.width), this._height && this._setHeight(this._height, this._texture.orig.height), this.onViewUpdate());
    }
    get texture() {
      return this._texture;
    }
    get visualBounds() {
      return bo(this._visualBounds, this._anchor, this._texture), this._visualBounds;
    }
    get sourceBounds() {
      return F("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead."), this.visualBounds;
    }
    updateBounds() {
      const t = this._anchor, e = this._texture, i = this._bounds, { width: r, height: n } = e.orig;
      i.minX = -t._x * r, i.maxX = i.minX + r, i.minY = -t._y * n, i.maxY = i.minY + n;
    }
    destroy(t = false) {
      if (super.destroy(t), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
        const i = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
        this._texture.destroy(i);
      }
      this._texture = null, this._visualBounds = null, this._bounds = null, this._anchor = null;
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(t) {
      typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
    }
    get width() {
      return Math.abs(this.scale.x) * this._texture.orig.width;
    }
    set width(t) {
      this._setWidth(t, this._texture.orig.width), this._width = t;
    }
    get height() {
      return Math.abs(this.scale.y) * this._texture.orig.height;
    }
    set height(t) {
      this._setHeight(t, this._texture.orig.height), this._height = t;
    }
    getSize(t) {
      return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t;
    }
    setSize(t, e) {
      typeof t == "object" ? (e = t.height ?? t.width, t = t.width) : e ?? (e = t), t !== void 0 && this._setWidth(t, this._texture.orig.width), e !== void 0 && this._setHeight(e, this._texture.orig.height);
    }
  };
  const ta = new ht();
  function Wr(s, t, e) {
    const i = ta;
    s.measurable = true, Dr(s, e, i), t.addBoundsMask(i), s.measurable = false;
  }
  function Hr(s, t, e) {
    const i = gt.get();
    s.measurable = true;
    const r = Q.get().identity(), n = Xr(s, e, r);
    zr(s, i, n), s.measurable = false, t.addBoundsMask(i), Q.return(r), gt.return(i);
  }
  function Xr(s, t, e) {
    return s ? (s !== t && (Xr(s.parent, t, e), s.updateLocalTransform(), e.append(s.localTransform)), e) : ($("Mask bounds, renderable is not inside the root container"), e);
  }
  class Yr {
    constructor(t) {
      this.priority = 0, this.inverse = false, this.pipe = "alphaMask", (t == null ? void 0 : t.mask) && this.init(t.mask);
    }
    init(t) {
      this.mask = t, this.renderMaskToTexture = !(t instanceof Wt), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = false;
    }
    reset() {
      this.mask !== null && (this.mask.measurable = true, this.mask = null);
    }
    addBounds(t, e) {
      this.inverse || Wr(this.mask, t, e);
    }
    addLocalBounds(t, e) {
      Hr(this.mask, t, e);
    }
    containsPoint(t, e) {
      const i = this.mask;
      return e(i, t);
    }
    destroy() {
      this.reset();
    }
    static test(t) {
      return t instanceof Wt;
    }
  }
  Yr.extension = S.MaskEffect;
  class jr {
    constructor(t) {
      this.priority = 0, this.pipe = "colorMask", (t == null ? void 0 : t.mask) && this.init(t.mask);
    }
    init(t) {
      this.mask = t;
    }
    destroy() {
    }
    static test(t) {
      return typeof t == "number";
    }
  }
  jr.extension = S.MaskEffect;
  class qr {
    constructor(t) {
      this.priority = 0, this.pipe = "stencilMask", (t == null ? void 0 : t.mask) && this.init(t.mask);
    }
    init(t) {
      this.mask = t, this.mask.includeInBuild = false, this.mask.measurable = false;
    }
    reset() {
      this.mask !== null && (this.mask.measurable = true, this.mask.includeInBuild = true, this.mask = null);
    }
    addBounds(t, e) {
      Wr(this.mask, t, e);
    }
    addLocalBounds(t, e) {
      Hr(this.mask, t, e);
    }
    containsPoint(t, e) {
      const i = this.mask;
      return e(i, t);
    }
    destroy() {
      this.reset();
    }
    static test(t) {
      return t instanceof xt;
    }
  }
  qr.extension = S.MaskEffect;
  const ea = {
    createCanvas: (s, t) => {
      const e = document.createElement("canvas");
      return e.width = s, e.height = t, e;
    },
    createImage: () => new Image(),
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (s, t) => fetch(s, t),
    parseXML: (s) => new DOMParser().parseFromString(s, "text/xml")
  };
  let Ii = ea;
  W = {
    get() {
      return Ii;
    },
    set(s) {
      Ii = s;
    }
  };
  Zr = class extends lt {
    constructor(t) {
      t.resource || (t.resource = W.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity, this.resizeCanvas(), this.transparent = !!t.transparent;
    }
    resizeCanvas() {
      this.autoDensity && "style" in this.resource && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
    }
    resize(t = this.width, e = this.height, i = this._resolution) {
      const r = super.resize(t, e, i);
      return r && this.resizeCanvas(), r;
    }
    static test(t) {
      return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas;
    }
    get context2D() {
      return this._context2D || (this._context2D = this.resource.getContext("2d"));
    }
  };
  Zr.extension = S.TextureSource;
  Ht = class extends lt {
    constructor(t) {
      super(t), this.uploadMethodId = "image", this.autoGarbageCollect = true;
    }
    static test(t) {
      return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame;
    }
  };
  Ht.extension = S.TextureSource;
  Ue = ((s) => (s[s.INTERACTION = 50] = "INTERACTION", s[s.HIGH = 25] = "HIGH", s[s.NORMAL = 0] = "NORMAL", s[s.LOW = -25] = "LOW", s[s.UTILITY = -50] = "UTILITY", s))(Ue || {});
  class os {
    constructor(t, e = null, i = 0, r = false) {
      this.next = null, this.previous = null, this._destroyed = false, this._fn = t, this._context = e, this.priority = i, this._once = r;
    }
    match(t, e = null) {
      return this._fn === t && this._context === e;
    }
    emit(t) {
      this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
      const e = this.next;
      return this._once && this.destroy(true), this._destroyed && (this.next = null), e;
    }
    connect(t) {
      this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
    }
    destroy(t = false) {
      this._destroyed = true, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
      const e = this.next;
      return this.next = t ? null : e, this.previous = null, e;
    }
  }
  const Kr = class et {
    constructor() {
      this.autoStart = false, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = false, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = false, this._lastFrame = -1, this._head = new os(null, null, 1 / 0), this.deltaMS = 1 / et.targetFPMS, this.elapsedMS = 1 / et.targetFPMS, this._tick = (t) => {
        this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
      };
    }
    _requestIfNeeded() {
      this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
    }
    _cancelIfNeeded() {
      this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
    }
    _startIfPossible() {
      this.started ? this._requestIfNeeded() : this.autoStart && this.start();
    }
    add(t, e, i = Ue.NORMAL) {
      return this._addListener(new os(t, e, i));
    }
    addOnce(t, e, i = Ue.NORMAL) {
      return this._addListener(new os(t, e, i, true));
    }
    _addListener(t) {
      let e = this._head.next, i = this._head;
      if (!e) t.connect(i);
      else {
        for (; e; ) {
          if (t.priority > e.priority) {
            t.connect(i);
            break;
          }
          i = e, e = e.next;
        }
        t.previous || t.connect(i);
      }
      return this._startIfPossible(), this;
    }
    remove(t, e) {
      let i = this._head.next;
      for (; i; ) i.match(t, e) ? i = i.destroy() : i = i.next;
      return this._head.next || this._cancelIfNeeded(), this;
    }
    get count() {
      if (!this._head) return 0;
      let t = 0, e = this._head;
      for (; e = e.next; ) t++;
      return t;
    }
    start() {
      this.started || (this.started = true, this._requestIfNeeded());
    }
    stop() {
      this.started && (this.started = false, this._cancelIfNeeded());
    }
    destroy() {
      if (!this._protected) {
        this.stop();
        let t = this._head.next;
        for (; t; ) t = t.destroy(true);
        this._head.destroy(), this._head = null;
      }
    }
    update(t = performance.now()) {
      let e;
      if (t > this.lastTime) {
        if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
          const n = t - this._lastFrame | 0;
          if (n < this._minElapsedMS) return;
          this._lastFrame = t - n % this._minElapsedMS;
        }
        this.deltaMS = e, this.deltaTime = this.deltaMS * et.targetFPMS;
        const i = this._head;
        let r = i.next;
        for (; r; ) r = r.emit(this);
        i.next || this._cancelIfNeeded();
      } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
      this.lastTime = t;
    }
    get FPS() {
      return 1e3 / this.elapsedMS;
    }
    get minFPS() {
      return 1e3 / this._maxElapsedMS;
    }
    set minFPS(t) {
      const e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, et.targetFPMS);
      this._maxElapsedMS = 1 / i;
    }
    get maxFPS() {
      return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
    }
    set maxFPS(t) {
      if (t === 0) this._minElapsedMS = 0;
      else {
        const e = Math.max(this.minFPS, t);
        this._minElapsedMS = 1 / (e / 1e3);
      }
    }
    static get shared() {
      if (!et._shared) {
        const t = et._shared = new et();
        t.autoStart = true, t._protected = true;
      }
      return et._shared;
    }
    static get system() {
      if (!et._system) {
        const t = et._system = new et();
        t.autoStart = true, t._protected = true;
      }
      return et._system;
    }
  };
  Kr.targetFPMS = 0.06;
  let as;
  Ot = Kr;
  async function Qr() {
    return as ?? (as = (async () => {
      var _a2;
      const t = W.get().createCanvas(1, 1).getContext("webgl");
      if (!t) return "premultiply-alpha-on-upload";
      const e = await new Promise((o) => {
        const a = document.createElement("video");
        a.onloadeddata = () => o(a), a.onerror = () => o(null), a.autoplay = false, a.crossOrigin = "anonymous", a.preload = "auto", a.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", a.load();
      });
      if (!e) return "premultiply-alpha-on-upload";
      const i = t.createTexture();
      t.bindTexture(t.TEXTURE_2D, i);
      const r = t.createFramebuffer();
      t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
      const n = new Uint8Array(4);
      return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(r), t.deleteTexture(i), (_a2 = t.getExtension("WEBGL_lose_context")) == null ? void 0 : _a2.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
    })()), as;
  }
  const We = class Jr extends lt {
    constructor(t) {
      super(t), this.isReady = false, this.uploadMethodId = "video", t = {
        ...Jr.defaultOptions,
        ...t
      }, this._autoUpdate = true, this._isConnectedToTicker = false, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== false, this.alphaMode = t.alphaMode ?? "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== false && this.load();
    }
    updateFrame() {
      if (!this.destroyed) {
        if (this._updateFPS) {
          const t = Ot.shared.elapsedMS * this.resource.playbackRate;
          this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
        }
        (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
      }
    }
    _videoFrameRequestCallback() {
      this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback);
    }
    get isValid() {
      return !!this.resource.videoWidth && !!this.resource.videoHeight;
    }
    async load() {
      if (this._load) return this._load;
      const t = this.resource, e = this.options;
      return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = true), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, true)), this.alphaMode = await Qr(), this._load = new Promise((i, r) => {
        this.isValid ? i(this) : (this._resolve = i, this._reject = r, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(() => {
          this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`));
        })), t.load());
      }), this._load;
    }
    _onError(t) {
      this.resource.removeEventListener("error", this._onError, true), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null);
    }
    _isSourcePlaying() {
      const t = this.resource;
      return !t.paused && !t.ended;
    }
    _isSourceReady() {
      return this.resource.readyState > 2;
    }
    _onPlayStart() {
      this.isValid || this._mediaReady(), this._configureAutoUpdate();
    }
    _onPlayStop() {
      this._configureAutoUpdate();
    }
    _onSeeked() {
      this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0);
    }
    _onCanPlay() {
      this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady();
    }
    _onCanPlayThrough() {
      this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady();
    }
    _mediaReady() {
      const t = this.resource;
      this.isValid && (this.isReady = true, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play();
    }
    destroy() {
      this._configureAutoUpdate();
      const t = this.resource;
      t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, true), t.pause(), t.src = "", t.load()), super.destroy();
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(t) {
      t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate());
    }
    get updateFPS() {
      return this._updateFPS;
    }
    set updateFPS(t) {
      t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate());
    }
    _configureAutoUpdate() {
      this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.resource.requestVideoFrameCallback ? (this._isConnectedToTicker && (Ot.shared.remove(this.updateFrame, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (Ot.shared.add(this.updateFrame, this), this._isConnectedToTicker = true, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (Ot.shared.remove(this.updateFrame, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0));
    }
    static test(t) {
      return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement;
    }
  };
  We.extension = S.TextureSource;
  We.defaultOptions = {
    ...lt.defaultOptions,
    autoLoad: true,
    autoPlay: true,
    updateFPS: 0,
    crossorigin: true,
    loop: false,
    muted: true,
    playsinline: true,
    preload: false
  };
  We.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
  };
  let ce = We;
  const at = (s, t, e = false) => (Array.isArray(s) || (s = [
    s
  ]), t ? s.map((i) => typeof i == "string" || e ? t(i) : i) : s);
  class sa {
    constructor() {
      this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
    }
    reset() {
      this._cacheMap.clear(), this._cache.clear();
    }
    has(t) {
      return this._cache.has(t);
    }
    get(t) {
      const e = this._cache.get(t);
      return e || $(`[Assets] Asset id ${t} was not found in the Cache`), e;
    }
    set(t, e) {
      const i = at(t);
      let r;
      for (let h = 0; h < this.parsers.length; h++) {
        const l = this.parsers[h];
        if (l.test(e)) {
          r = l.getCacheableAssets(i, e);
          break;
        }
      }
      const n = new Map(Object.entries(r || {}));
      r || i.forEach((h) => {
        n.set(h, e);
      });
      const o = [
        ...n.keys()
      ], a = {
        cacheKeys: o,
        keys: i
      };
      i.forEach((h) => {
        this._cacheMap.set(h, a);
      }), o.forEach((h) => {
        const l = r ? r[h] : e;
        this._cache.has(h) && this._cache.get(h) !== l && $("[Cache] already has key:", h), this._cache.set(h, n.get(h));
      });
    }
    remove(t) {
      if (!this._cacheMap.has(t)) {
        $(`[Assets] Asset id ${t} was not found in the Cache`);
        return;
      }
      const e = this._cacheMap.get(t);
      e.cacheKeys.forEach((r) => {
        this._cache.delete(r);
      }), e.keys.forEach((r) => {
        this._cacheMap.delete(r);
      });
    }
    get parsers() {
      return this._parsers;
    }
  }
  let Rs;
  Y = new sa();
  Rs = [];
  U.handleByList(S.TextureSource, Rs);
  function tn(s = {}) {
    const t = s && s.resource, e = t ? s.resource : s, i = t ? s : {
      resource: s
    };
    for (let r = 0; r < Rs.length; r++) {
      const n = Rs[r];
      if (n.test(e)) return new n(i);
    }
    throw new Error(`Could not find a source type for resource: ${i.resource}`);
  }
  function ia(s = {}, t = false) {
    const e = s && s.resource, i = e ? s.resource : s, r = e ? s : {
      resource: s
    };
    if (!t && Y.has(i)) return Y.get(i);
    const n = new G({
      source: tn(r)
    });
    return n.on("destroy", () => {
      Y.has(i) && Y.remove(i);
    }), t || Y.set(i, n), n;
  }
  function ra(s, t = false) {
    return typeof s == "string" ? Y.get(s) : s instanceof lt ? new G({
      source: s
    }) : ia(s, t);
  }
  G.from = ra;
  lt.from = tn;
  U.add(Yr, jr, qr, ce, Ht, Zr, Ys);
  var vt = ((s) => (s[s.Low = 0] = "Low", s[s.Normal = 1] = "Normal", s[s.High = 2] = "High", s))(vt || {});
  function ot(s) {
    if (typeof s != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(s)}`);
  }
  function Kt(s) {
    return s.split("?")[0].split("#")[0];
  }
  function na(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function oa(s, t, e) {
    return s.replace(new RegExp(na(t), "g"), e);
  }
  function aa(s, t) {
    let e = "", i = 0, r = -1, n = 0, o = -1;
    for (let a = 0; a <= s.length; ++a) {
      if (a < s.length) o = s.charCodeAt(a);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(r === a - 1 || n === 1)) if (r !== a - 1 && n === 2) {
          if (e.length < 2 || i !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
            if (e.length > 2) {
              const h = e.lastIndexOf("/");
              if (h !== e.length - 1) {
                h === -1 ? (e = "", i = 0) : (e = e.slice(0, h), i = e.length - 1 - e.lastIndexOf("/")), r = a, n = 0;
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              e = "", i = 0, r = a, n = 0;
              continue;
            }
          }
        } else e.length > 0 ? e += `/${s.slice(r + 1, a)}` : e = s.slice(r + 1, a), i = a - r - 1;
        r = a, n = 0;
      } else o === 46 && n !== -1 ? ++n : n = -1;
    }
    return e;
  }
  const st = {
    toPosix(s) {
      return oa(s, "\\", "/");
    },
    isUrl(s) {
      return /^https?:/.test(this.toPosix(s));
    },
    isDataUrl(s) {
      return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(s);
    },
    isBlobUrl(s) {
      return s.startsWith("blob:");
    },
    hasProtocol(s) {
      return /^[^/:]+:/.test(this.toPosix(s));
    },
    getProtocol(s) {
      ot(s), s = this.toPosix(s);
      const t = /^file:\/\/\//.exec(s);
      if (t) return t[0];
      const e = /^[^/:]+:\/{0,2}/.exec(s);
      return e ? e[0] : "";
    },
    toAbsolute(s, t, e) {
      if (ot(s), this.isDataUrl(s) || this.isBlobUrl(s)) return s;
      const i = Kt(this.toPosix(t ?? W.get().getBaseUrl())), r = Kt(this.toPosix(e ?? this.rootname(i)));
      return s = this.toPosix(s), s.startsWith("/") ? st.join(r, s.slice(1)) : this.isAbsolute(s) ? s : this.join(i, s);
    },
    normalize(s) {
      if (ot(s), s.length === 0) return ".";
      if (this.isDataUrl(s) || this.isBlobUrl(s)) return s;
      s = this.toPosix(s);
      let t = "";
      const e = s.startsWith("/");
      this.hasProtocol(s) && (t = this.rootname(s), s = s.slice(t.length));
      const i = s.endsWith("/");
      return s = aa(s), s.length > 0 && i && (s += "/"), e ? `/${s}` : t + s;
    },
    isAbsolute(s) {
      return ot(s), s = this.toPosix(s), this.hasProtocol(s) ? true : s.startsWith("/");
    },
    join(...s) {
      if (s.length === 0) return ".";
      let t;
      for (let e = 0; e < s.length; ++e) {
        const i = s[e];
        if (ot(i), i.length > 0) if (t === void 0) t = i;
        else {
          const r = s[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(r).toLowerCase()) ? t += `/../${i}` : t += `/${i}`;
        }
      }
      return t === void 0 ? "." : this.normalize(t);
    },
    dirname(s) {
      if (ot(s), s.length === 0) return ".";
      s = this.toPosix(s);
      let t = s.charCodeAt(0);
      const e = t === 47;
      let i = -1, r = true;
      const n = this.getProtocol(s), o = s;
      s = s.slice(n.length);
      for (let a = s.length - 1; a >= 1; --a) if (t = s.charCodeAt(a), t === 47) {
        if (!r) {
          i = a;
          break;
        }
      } else r = false;
      return i === -1 ? e ? "/" : this.isUrl(o) ? n + s : n : e && i === 1 ? "//" : n + s.slice(0, i);
    },
    rootname(s) {
      ot(s), s = this.toPosix(s);
      let t = "";
      if (s.startsWith("/") ? t = "/" : t = this.getProtocol(s), this.isUrl(s)) {
        const e = s.indexOf("/", t.length);
        e !== -1 ? t = s.slice(0, e) : t = s, t.endsWith("/") || (t += "/");
      }
      return t;
    },
    basename(s, t) {
      ot(s), t && ot(t), s = Kt(this.toPosix(s));
      let e = 0, i = -1, r = true, n;
      if (t !== void 0 && t.length > 0 && t.length <= s.length) {
        if (t.length === s.length && t === s) return "";
        let o = t.length - 1, a = -1;
        for (n = s.length - 1; n >= 0; --n) {
          const h = s.charCodeAt(n);
          if (h === 47) {
            if (!r) {
              e = n + 1;
              break;
            }
          } else a === -1 && (r = false, a = n + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
        }
        return e === i ? i = a : i === -1 && (i = s.length), s.slice(e, i);
      }
      for (n = s.length - 1; n >= 0; --n) if (s.charCodeAt(n) === 47) {
        if (!r) {
          e = n + 1;
          break;
        }
      } else i === -1 && (r = false, i = n + 1);
      return i === -1 ? "" : s.slice(e, i);
    },
    extname(s) {
      ot(s), s = Kt(this.toPosix(s));
      let t = -1, e = 0, i = -1, r = true, n = 0;
      for (let o = s.length - 1; o >= 0; --o) {
        const a = s.charCodeAt(o);
        if (a === 47) {
          if (!r) {
            e = o + 1;
            break;
          }
          continue;
        }
        i === -1 && (r = false, i = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
      }
      return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === e + 1 ? "" : s.slice(t, i);
    },
    parse(s) {
      ot(s);
      const t = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (s.length === 0) return t;
      s = Kt(this.toPosix(s));
      let e = s.charCodeAt(0);
      const i = this.isAbsolute(s);
      let r;
      t.root = this.rootname(s), i || this.hasProtocol(s) ? r = 1 : r = 0;
      let n = -1, o = 0, a = -1, h = true, l = s.length - 1, c = 0;
      for (; l >= r; --l) {
        if (e = s.charCodeAt(l), e === 47) {
          if (!h) {
            o = l + 1;
            break;
          }
          continue;
        }
        a === -1 && (h = false, a = l + 1), e === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1);
      }
      return n === -1 || a === -1 || c === 0 || c === 1 && n === a - 1 && n === o + 1 ? a !== -1 && (o === 0 && i ? t.base = t.name = s.slice(1, a) : t.base = t.name = s.slice(o, a)) : (o === 0 && i ? (t.name = s.slice(1, n), t.base = s.slice(1, a)) : (t.name = s.slice(o, n), t.base = s.slice(o, a)), t.ext = s.slice(n, a)), t.dir = this.dirname(s), t;
    },
    sep: "/",
    delimiter: ":",
    joinExtensions: [
      ".html"
    ]
  };
  function en(s, t, e, i, r) {
    const n = t[e];
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      e < t.length - 1 ? en(s.replace(i[e], a), t, e + 1, i, r) : r.push(s.replace(i[e], a));
    }
  }
  function ha(s) {
    const t = /\{(.*?)\}/g, e = s.match(t), i = [];
    if (e) {
      const r = [];
      e.forEach((n) => {
        const o = n.substring(1, n.length - 1).split(",");
        r.push(o);
      }), en(s, r, 0, e, i);
    } else i.push(s);
    return i;
  }
  const Ne = (s) => !Array.isArray(s);
  class Yt {
    constructor() {
      this._defaultBundleIdentifierOptions = {
        connector: "-",
        createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
        extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
      }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
    }
    setBundleIdentifier(t) {
      if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
    }
    prefer(...t) {
      t.forEach((e) => {
        this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params));
      }), this._resolverHash = {};
    }
    set basePath(t) {
      this._basePath = t;
    }
    get basePath() {
      return this._basePath;
    }
    set rootPath(t) {
      this._rootPath = t;
    }
    get rootPath() {
      return this._rootPath;
    }
    get parsers() {
      return this._parsers;
    }
    reset() {
      this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
    }
    setDefaultSearchParams(t) {
      if (typeof t == "string") this._defaultSearchParams = t;
      else {
        const e = t;
        this._defaultSearchParams = Object.keys(e).map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&");
      }
    }
    getAlias(t) {
      const { alias: e, src: i } = t;
      return at(e || i, (n) => typeof n == "string" ? n : Array.isArray(n) ? n.map((o) => (o == null ? void 0 : o.src) ?? o) : (n == null ? void 0 : n.src) ? n.src : n, true);
    }
    addManifest(t) {
      this._manifest && $("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((e) => {
        this.addBundle(e.name, e.assets);
      });
    }
    addBundle(t, e) {
      const i = [];
      let r = e;
      Array.isArray(e) || (r = Object.entries(e).map(([n, o]) => typeof o == "string" || Array.isArray(o) ? {
        alias: n,
        src: o
      } : {
        alias: n,
        ...o
      })), r.forEach((n) => {
        const o = n.src, a = n.alias;
        let h;
        if (typeof a == "string") {
          const l = this._createBundleAssetId(t, a);
          i.push(l), h = [
            a,
            l
          ];
        } else {
          const l = a.map((c) => this._createBundleAssetId(t, c));
          i.push(...l), h = [
            ...a,
            ...l
          ];
        }
        this.add({
          ...n,
          alias: h,
          src: o
        });
      }), this._bundles[t] = i;
    }
    add(t) {
      const e = [];
      Array.isArray(t) ? e.push(...t) : e.push(t);
      let i;
      i = (n) => {
        this.hasKey(n) && $(`[Resolver] already has key: ${n} overwriting`);
      }, at(e).forEach((n) => {
        const { src: o } = n;
        let { data: a, format: h, loadParser: l, parser: c } = n;
        const u = at(o).map((g) => typeof g == "string" ? ha(g) : Array.isArray(g) ? g : [
          g
        ]), f = this.getAlias(n);
        Array.isArray(f) ? f.forEach(i) : i(f);
        const d = [], p = (g) => {
          const m = this._parsers.find((y) => y.test(g));
          return {
            src: g,
            ...m == null ? void 0 : m.parse(g)
          };
        };
        u.forEach((g) => {
          g.forEach((m) => {
            let y = {};
            if (typeof m != "object" ? y = p(m) : (a = m.data ?? a, h = m.format ?? h, (m.loadParser || m.parser) && (l = m.loadParser ?? l, c = m.parser ?? c), y = {
              ...p(m.src),
              ...m
            }), !f) throw new Error(`[Resolver] alias is undefined for this asset: ${y.src}`);
            y = this._buildResolvedAsset(y, {
              aliases: f,
              data: a,
              format: h,
              loadParser: l,
              parser: c,
              progressSize: n.progressSize
            }), d.push(y);
          });
        }), f.forEach((g) => {
          this._assetMap[g] = d;
        });
      });
    }
    resolveBundle(t) {
      const e = Ne(t);
      t = at(t);
      const i = {};
      return t.forEach((r) => {
        const n = this._bundles[r];
        if (n) {
          const o = this.resolve(n), a = {};
          for (const h in o) {
            const l = o[h];
            a[this._extractAssetIdFromBundle(r, h)] = l;
          }
          i[r] = a;
        }
      }), e ? i[t[0]] : i;
    }
    resolveUrl(t) {
      const e = this.resolve(t);
      if (typeof t != "string") {
        const i = {};
        for (const r in e) i[r] = e[r].src;
        return i;
      }
      return e.src;
    }
    resolve(t) {
      const e = Ne(t);
      t = at(t);
      const i = {};
      return t.forEach((r) => {
        if (!this._resolverHash[r]) if (this._assetMap[r]) {
          let n = this._assetMap[r];
          const o = this._getPreferredOrder(n);
          o == null ? void 0 : o.priority.forEach((a) => {
            o.params[a].forEach((h) => {
              const l = n.filter((c) => c[a] ? c[a] === h : false);
              l.length && (n = l);
            });
          }), this._resolverHash[r] = n[0];
        } else this._resolverHash[r] = this._buildResolvedAsset({
          alias: [
            r
          ],
          src: r
        }, {});
        i[r] = this._resolverHash[r];
      }), e ? i[t[0]] : i;
    }
    hasKey(t) {
      return !!this._assetMap[t];
    }
    hasBundle(t) {
      return !!this._bundles[t];
    }
    _getPreferredOrder(t) {
      for (let e = 0; e < t.length; e++) {
        const i = t[e], r = this._preferredOrder.find((n) => n.params.format.includes(i.format));
        if (r) return r;
      }
      return this._preferredOrder[0];
    }
    _appendDefaultSearchParams(t) {
      if (!this._defaultSearchParams) return t;
      const e = /\?/.test(t) ? "&" : "?";
      return `${t}${e}${this._defaultSearchParams}`;
    }
    _buildResolvedAsset(t, e) {
      const { aliases: i, data: r, loadParser: n, parser: o, format: a, progressSize: h } = e;
      return (this._basePath || this._rootPath) && (t.src = st.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = i ?? t.alias ?? [
        t.src
      ], t.src = this._appendDefaultSearchParams(t.src), t.data = {
        ...r || {},
        ...t.data
      }, t.loadParser = n ?? t.loadParser, t.parser = o ?? t.parser, t.format = a ?? t.format ?? la(t.src), h !== void 0 && (t.progressSize = h), t;
    }
  }
  Yt.RETINA_PREFIX = /@([0-9\.]+)x/;
  function la(s) {
    return s.split(".").pop().split("?").shift().split("#").shift();
  }
  const Bs = (s, t) => {
    const e = t.split("?")[1];
    return e && (s += `?${e}`), s;
  }, sn = class ne {
    constructor(t, e) {
      this.linkedSheets = [];
      let i = t;
      (t == null ? void 0 : t.source) instanceof lt && (i = {
        texture: t,
        data: e
      });
      const { texture: r, data: n, cachePrefix: o = "" } = i;
      this.cachePrefix = o, this._texture = r instanceof G ? r : null, this.textureSource = r.source, this.textures = {}, this.animations = {}, this.data = n;
      const a = parseFloat(n.meta.scale);
      a ? (this.resolution = a, r.source.resolution = this.resolution) : this.resolution = r.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
    }
    parse() {
      return new Promise((t) => {
        this._callback = t, this._batchIndex = 0, this._frameKeys.length <= ne.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
      });
    }
    parseSync() {
      return this._processFrames(0, true), this._processAnimations(), this.textures;
    }
    _processFrames(t, e = false) {
      let i = t;
      const r = e ? 1 / 0 : ne.BATCH_SIZE;
      for (; i - t < r && i < this._frameKeys.length; ) {
        const n = this._frameKeys[i], o = this._frames[n], a = o.frame;
        if (a) {
          let h = null, l = null;
          const c = o.trimmed !== false && o.sourceSize ? o.sourceSize : o.frame, u = new j(0, 0, Math.floor(c.w) / this.resolution, Math.floor(c.h) / this.resolution);
          o.rotated ? h = new j(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.h) / this.resolution, Math.floor(a.w) / this.resolution) : h = new j(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution), o.trimmed !== false && o.spriteSourceSize && (l = new j(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution)), this.textures[n] = new G({
            source: this.textureSource,
            frame: h,
            orig: u,
            trim: l,
            rotate: o.rotated ? 2 : 0,
            defaultAnchor: o.anchor,
            defaultBorders: o.borders,
            label: n.toString()
          });
        }
        i++;
      }
    }
    _processAnimations() {
      const t = this.data.animations || {};
      for (const e in t) {
        this.animations[e] = [];
        for (let i = 0; i < t[e].length; i++) {
          const r = t[e][i];
          this.animations[e].push(this.textures[r]);
        }
      }
    }
    _parseComplete() {
      const t = this._callback;
      this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
    }
    _nextBatch() {
      this._processFrames(this._batchIndex * ne.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
        this._batchIndex * ne.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
      }, 0);
    }
    destroy(t = false) {
      var _a2;
      for (const e in this.textures) this.textures[e].destroy();
      this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && ((_a2 = this._texture) == null ? void 0 : _a2.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = [];
    }
  };
  sn.BATCH_SIZE = 1e3;
  let Ri = sn;
  const ca = [
    "jpg",
    "png",
    "jpeg",
    "avif",
    "webp",
    "basis",
    "etc2",
    "bc7",
    "bc6h",
    "bc5",
    "bc4",
    "bc3",
    "bc2",
    "bc1",
    "eac",
    "astc"
  ];
  function rn(s, t, e) {
    const i = {};
    if (s.forEach((r) => {
      i[r] = t;
    }), Object.keys(t.textures).forEach((r) => {
      i[`${t.cachePrefix}${r}`] = t.textures[r];
    }), !e) {
      const r = st.dirname(s[0]);
      t.linkedSheets.forEach((n, o) => {
        const a = rn([
          `${r}/${t.data.meta.related_multi_packs[o]}`
        ], n, true);
        Object.assign(i, a);
      });
    }
    return i;
  }
  const ua = {
    extension: S.Asset,
    cache: {
      test: (s) => s instanceof Ri,
      getCacheableAssets: (s, t) => rn(s, t, false)
    },
    resolver: {
      extension: {
        type: S.ResolveParser,
        name: "resolveSpritesheet"
      },
      test: (s) => {
        const e = s.split("?")[0].split("."), i = e.pop(), r = e.pop();
        return i === "json" && ca.includes(r);
      },
      parse: (s) => {
        var _a2;
        const t = s.split(".");
        return {
          resolution: parseFloat(((_a2 = Yt.RETINA_PREFIX.exec(s)) == null ? void 0 : _a2[1]) ?? "1"),
          format: t[t.length - 2],
          src: s
        };
      }
    },
    loader: {
      name: "spritesheetLoader",
      id: "spritesheet",
      extension: {
        type: S.LoadParser,
        priority: vt.Normal,
        name: "spritesheetLoader"
      },
      async testParse(s, t) {
        return st.extname(t.src).toLowerCase() === ".json" && !!s.frames;
      },
      async parse(s, t, e) {
        var _a2, _b;
        const { texture: i, imageFilename: r, textureOptions: n, cachePrefix: o } = (t == null ? void 0 : t.data) ?? {};
        let a = st.dirname(t.src);
        a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
        let h;
        if (i instanceof G) h = i;
        else {
          const u = Bs(a + (r ?? s.meta.image), t.src);
          h = (await e.load([
            {
              src: u,
              data: n
            }
          ]))[u];
        }
        const l = new Ri({
          texture: h.source,
          data: s,
          cachePrefix: o
        });
        await l.parse();
        const c = (_a2 = s == null ? void 0 : s.meta) == null ? void 0 : _a2.related_multi_packs;
        if (Array.isArray(c)) {
          const u = [];
          for (const d of c) {
            if (typeof d != "string") continue;
            let p = a + d;
            ((_b = t.data) == null ? void 0 : _b.ignoreMultiPack) || (p = Bs(p, t.src), u.push(e.load({
              src: p,
              data: {
                textureOptions: n,
                ignoreMultiPack: true
              }
            })));
          }
          const f = await Promise.all(u);
          l.linkedSheets = f, f.forEach((d) => {
            d.linkedSheets = [
              l
            ].concat(l.linkedSheets.filter((p) => p !== d));
          });
        }
        return l;
      },
      async unload(s, t, e) {
        await e.unload(s.textureSource._sourceOrigin), s.destroy(false);
      }
    }
  };
  U.add(ua);
  const hs = /* @__PURE__ */ Object.create(null), Bi = /* @__PURE__ */ Object.create(null);
  Zs = function(s, t) {
    let e = Bi[s];
    return e === void 0 && (hs[t] === void 0 && (hs[t] = 1), Bi[s] = e = hs[t]++), e;
  };
  let ke;
  function nn() {
    return (!ke || (ke == null ? void 0 : ke.isContextLost())) && (ke = W.get().createCanvas().getContext("webgl", {})), ke;
  }
  let Ee;
  function da() {
    if (!Ee) {
      Ee = "mediump";
      const s = nn();
      s && s.getShaderPrecisionFormat && (Ee = s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision ? "highp" : "mediump");
    }
    return Ee;
  }
  function fa(s, t, e) {
    return t ? s : e ? (s = s.replace("out vec4 finalColor;", ""), `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${s}
        `) : `

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${s}
        `;
  }
  function pa(s, t, e) {
    const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
    if (s.substring(0, 9) !== "precision") {
      let r = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
      return r === "highp" && i !== "highp" && (r = "mediump"), `precision ${r} float;
${s}`;
    } else if (i !== "highp" && s.substring(0, 15) === "precision highp") return s.replace("precision highp", "precision mediump");
    return s;
  }
  function ma(s, t) {
    return t ? `#version 300 es
${s}` : s;
  }
  const ga = {}, ya = {};
  function xa(s, { name: t = "pixi-program" }, e = true) {
    t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
    const i = e ? ga : ya;
    return i[t] ? (i[t]++, t += `-${i[t]}`) : i[t] = 1, s.indexOf("#define SHADER_NAME") !== -1 ? s : `${`#define SHADER_NAME ${t}`}
${s}`;
  }
  function _a(s, t) {
    return t ? s.replace("#version 300 es", "") : s;
  }
  const ls = {
    stripVersion: _a,
    ensurePrecision: pa,
    addProgramDefines: fa,
    setProgramName: xa,
    insertVersion: ma
  }, Qt = /* @__PURE__ */ Object.create(null), on = class Gs {
    constructor(t) {
      t = {
        ...Gs.defaultOptions,
        ...t
      };
      const e = t.fragment.indexOf("#version 300 es") !== -1, i = {
        stripVersion: e,
        ensurePrecision: {
          requestedFragmentPrecision: t.preferredFragmentPrecision,
          requestedVertexPrecision: t.preferredVertexPrecision,
          maxSupportedVertexPrecision: "highp",
          maxSupportedFragmentPrecision: da()
        },
        setProgramName: {
          name: t.name
        },
        addProgramDefines: e,
        insertVersion: e
      };
      let r = t.fragment, n = t.vertex;
      Object.keys(ls).forEach((o) => {
        const a = i[o];
        r = ls[o](r, a, true), n = ls[o](n, a, false);
      }), this.fragment = r, this.vertex = n, this.transformFeedbackVaryings = t.transformFeedbackVaryings, this._key = Zs(`${this.vertex}:${this.fragment}`, "gl-program");
    }
    destroy() {
      this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null, Qt[this._cacheKey] = null;
    }
    static from(t) {
      const e = `${t.vertex}:${t.fragment}`;
      return Qt[e] || (Qt[e] = new Gs(t), Qt[e]._cacheKey = e), Qt[e];
    }
  };
  on.defaultOptions = {
    preferredVertexPrecision: "highp",
    preferredFragmentPrecision: "mediump"
  };
  an = on;
  const Gi = {
    uint8x2: {
      size: 2,
      stride: 2,
      normalised: false
    },
    uint8x4: {
      size: 4,
      stride: 4,
      normalised: false
    },
    sint8x2: {
      size: 2,
      stride: 2,
      normalised: false
    },
    sint8x4: {
      size: 4,
      stride: 4,
      normalised: false
    },
    unorm8x2: {
      size: 2,
      stride: 2,
      normalised: true
    },
    unorm8x4: {
      size: 4,
      stride: 4,
      normalised: true
    },
    snorm8x2: {
      size: 2,
      stride: 2,
      normalised: true
    },
    snorm8x4: {
      size: 4,
      stride: 4,
      normalised: true
    },
    uint16x2: {
      size: 2,
      stride: 4,
      normalised: false
    },
    uint16x4: {
      size: 4,
      stride: 8,
      normalised: false
    },
    sint16x2: {
      size: 2,
      stride: 4,
      normalised: false
    },
    sint16x4: {
      size: 4,
      stride: 8,
      normalised: false
    },
    unorm16x2: {
      size: 2,
      stride: 4,
      normalised: true
    },
    unorm16x4: {
      size: 4,
      stride: 8,
      normalised: true
    },
    snorm16x2: {
      size: 2,
      stride: 4,
      normalised: true
    },
    snorm16x4: {
      size: 4,
      stride: 8,
      normalised: true
    },
    float16x2: {
      size: 2,
      stride: 4,
      normalised: false
    },
    float16x4: {
      size: 4,
      stride: 8,
      normalised: false
    },
    float32: {
      size: 1,
      stride: 4,
      normalised: false
    },
    float32x2: {
      size: 2,
      stride: 8,
      normalised: false
    },
    float32x3: {
      size: 3,
      stride: 12,
      normalised: false
    },
    float32x4: {
      size: 4,
      stride: 16,
      normalised: false
    },
    uint32: {
      size: 1,
      stride: 4,
      normalised: false
    },
    uint32x2: {
      size: 2,
      stride: 8,
      normalised: false
    },
    uint32x3: {
      size: 3,
      stride: 12,
      normalised: false
    },
    uint32x4: {
      size: 4,
      stride: 16,
      normalised: false
    },
    sint32: {
      size: 1,
      stride: 4,
      normalised: false
    },
    sint32x2: {
      size: 2,
      stride: 8,
      normalised: false
    },
    sint32x3: {
      size: 3,
      stride: 12,
      normalised: false
    },
    sint32x4: {
      size: 4,
      stride: 16,
      normalised: false
    }
  };
  ba = function(s) {
    return Gi[s] ?? Gi.float32;
  };
  const Aa = {
    f32: "float32",
    "vec2<f32>": "float32x2",
    "vec3<f32>": "float32x3",
    "vec4<f32>": "float32x4",
    vec2f: "float32x2",
    vec3f: "float32x3",
    vec4f: "float32x4",
    i32: "sint32",
    "vec2<i32>": "sint32x2",
    "vec3<i32>": "sint32x3",
    "vec4<i32>": "sint32x4",
    vec2i: "sint32x2",
    vec3i: "sint32x3",
    vec4i: "sint32x4",
    u32: "uint32",
    "vec2<u32>": "uint32x2",
    "vec3<u32>": "uint32x3",
    "vec4<u32>": "uint32x4",
    vec2u: "uint32x2",
    vec3u: "uint32x3",
    vec4u: "uint32x4",
    bool: "uint32",
    "vec2<bool>": "uint32x2",
    "vec3<bool>": "uint32x3",
    "vec4<bool>": "uint32x4"
  }, Fi = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;
  function Di(s, t) {
    let e;
    for (; (e = Fi.exec(s)) !== null; ) {
      const i = Aa[e[3]] ?? "float32";
      t[e[2]] = {
        location: parseInt(e[1], 10),
        format: i,
        stride: ba(i).stride,
        offset: 0,
        instance: false,
        start: 0
      };
    }
    Fi.lastIndex = 0;
  }
  function wa(s) {
    return s.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
  }
  function va({ source: s, entryPoint: t }) {
    const e = {}, i = wa(s), r = i.indexOf(`fn ${t}(`);
    if (r === -1) return e;
    const n = i.indexOf("->", r);
    if (n === -1) return e;
    const o = i.substring(r, n);
    if (Di(o, e), Object.keys(e).length === 0) {
      const a = o.match(/\(\s*\w+\s*:\s*(\w+)/);
      if (a) {
        const h = a[1], l = new RegExp(`struct\\s+${h}\\s*\\{([^}]+)\\}`, "s"), c = i.match(l);
        c && Di(c[1], e);
      }
    }
    return e;
  }
  function cs(s) {
    var _a2, _b;
    const t = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, e = /@group\((\d+)\)/, i = /@binding\((\d+)\)/, r = /var(<[^>]+>)? (\w+)/, n = /:\s*([\w<>]+)/, o = /struct\s+(\w+)\s*{([^}]+)}/g, a = /(\w+)\s*:\s*([\w\<\>]+)/g, h = /struct\s+(\w+)/, l = (_a2 = s.match(t)) == null ? void 0 : _a2.map((u) => ({
      group: parseInt(u.match(e)[1], 10),
      binding: parseInt(u.match(i)[1], 10),
      name: u.match(r)[2],
      isUniform: u.match(r)[1] === "<uniform>",
      type: u.match(n)[1]
    }));
    if (!l) return {
      groups: [],
      structs: []
    };
    const c = ((_b = s.match(o)) == null ? void 0 : _b.map((u) => {
      const f = u.match(h)[1], d = u.match(a).reduce((p, g) => {
        const [m, y] = g.split(":");
        return p[m.trim()] = y.trim(), p;
      }, {});
      return d ? {
        name: f,
        members: d
      } : null;
    }).filter(({ name: u }) => l.some((f) => f.type === u || f.type.includes(`<${u}>`)))) ?? [];
    return {
      groups: l,
      structs: c
    };
  }
  var Bt = ((s) => (s[s.VERTEX = 1] = "VERTEX", s[s.FRAGMENT = 2] = "FRAGMENT", s[s.COMPUTE = 4] = "COMPUTE", s))(Bt || {});
  function Ca({ groups: s }) {
    const t = [];
    for (let e = 0; e < s.length; e++) {
      const i = s[e];
      t[i.group] || (t[i.group] = []), i.isUniform ? t[i.group].push({
        binding: i.binding,
        visibility: Bt.VERTEX | Bt.FRAGMENT,
        buffer: {
          type: "uniform"
        }
      }) : i.type === "sampler" ? t[i.group].push({
        binding: i.binding,
        visibility: Bt.FRAGMENT,
        sampler: {
          type: "filtering"
        }
      }) : i.type === "texture_2d" || i.type.startsWith("texture_2d<") ? t[i.group].push({
        binding: i.binding,
        visibility: Bt.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "2d",
          multisampled: false
        }
      }) : i.type === "texture_2d_array" || i.type.startsWith("texture_2d_array<") ? t[i.group].push({
        binding: i.binding,
        visibility: Bt.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "2d-array",
          multisampled: false
        }
      }) : (i.type === "texture_cube" || i.type.startsWith("texture_cube<")) && t[i.group].push({
        binding: i.binding,
        visibility: Bt.FRAGMENT,
        texture: {
          sampleType: "float",
          viewDimension: "cube",
          multisampled: false
        }
      });
    }
    for (let e = 0; e < t.length; e++) t[e] || (t[e] = []);
    return t;
  }
  function Ma({ groups: s }) {
    const t = [];
    for (let e = 0; e < s.length; e++) {
      const i = s[e];
      t[i.group] || (t[i.group] = {}), t[i.group][i.name] = i.binding;
    }
    return t;
  }
  function Pa(s, t) {
    const e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = [
      ...s.structs,
      ...t.structs
    ].filter((o) => e.has(o.name) ? false : (e.add(o.name), true)), n = [
      ...s.groups,
      ...t.groups
    ].filter((o) => {
      const a = `${o.name}-${o.binding}`;
      return i.has(a) ? false : (i.add(a), true);
    });
    return {
      structs: r,
      groups: n
    };
  }
  const Jt = /* @__PURE__ */ Object.create(null);
  He = class {
    constructor(t) {
      var _a2, _b;
      this._layoutKey = 0, this._attributeLocationsKey = 0;
      const { fragment: e, vertex: i, layout: r, gpuLayout: n, name: o } = t;
      if (this.name = o, this.fragment = e, this.vertex = i, e.source === i.source) {
        const a = cs(e.source);
        this.structsAndGroups = a;
      } else {
        const a = cs(i.source), h = cs(e.source);
        this.structsAndGroups = Pa(a, h);
      }
      this.layout = r ?? Ma(this.structsAndGroups), this.gpuLayout = n ?? Ca(this.structsAndGroups), this.autoAssignGlobalUniforms = ((_a2 = this.layout[0]) == null ? void 0 : _a2.globalUniforms) !== void 0, this.autoAssignLocalUniforms = ((_b = this.layout[1]) == null ? void 0 : _b.localUniforms) !== void 0, this._generateProgramKey();
    }
    _generateProgramKey() {
      const { vertex: t, fragment: e } = this, i = t.source + e.source + t.entryPoint + e.entryPoint;
      this._layoutKey = Zs(i, "program");
    }
    get attributeData() {
      return this._attributeData ?? (this._attributeData = va(this.vertex)), this._attributeData;
    }
    destroy() {
      this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null, Jt[this._cacheKey] = null;
    }
    static from(t) {
      const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
      return Jt[e] || (Jt[e] = new He(t), Jt[e]._cacheKey = e), Jt[e];
    }
  };
  const hn = [
    "f32",
    "i32",
    "vec2<f32>",
    "vec3<f32>",
    "vec4<f32>",
    "mat2x2<f32>",
    "mat3x3<f32>",
    "mat4x4<f32>",
    "mat3x2<f32>",
    "mat4x2<f32>",
    "mat2x3<f32>",
    "mat4x3<f32>",
    "mat2x4<f32>",
    "mat3x4<f32>",
    "vec2<i32>",
    "vec3<i32>",
    "vec4<i32>"
  ], Sa = hn.reduce((s, t) => (s[t] = true, s), {});
  function Ta(s, t) {
    switch (s) {
      case "f32":
        return 0;
      case "vec2<f32>":
        return new Float32Array(2 * t);
      case "vec3<f32>":
        return new Float32Array(3 * t);
      case "vec4<f32>":
        return new Float32Array(4 * t);
      case "mat2x2<f32>":
        return new Float32Array([
          1,
          0,
          0,
          1
        ]);
      case "mat3x3<f32>":
        return new Float32Array([
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ]);
      case "mat4x4<f32>":
        return new Float32Array([
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ]);
    }
    return null;
  }
  const ln = class cn {
    constructor(t, e) {
      this._touched = 0, this.uid = V("uniform"), this._resourceType = "uniformGroup", this._resourceId = V("resource"), this.isUniformGroup = true, this._dirtyId = 0, this.destroyed = false, e = {
        ...cn.defaultOptions,
        ...e
      }, this.uniformStructures = t;
      const i = {};
      for (const r in t) {
        const n = t[r];
        if (n.name = r, n.size = n.size ?? 1, !Sa[n.type]) {
          const o = n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
          if (o) {
            const [, a, h] = o;
            throw new Error(`Uniform type ${n.type} is not supported. Use type: '${a}', size: ${h} instead.`);
          }
          throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${hn.join(", ")}`);
        }
        n.value ?? (n.value = Ta(n.type, n.size)), i[r] = n.value;
      }
      this.uniforms = i, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = Zs(Object.keys(i).map((r) => `${r}-${t[r].type}`).join("-"), "uniform-group");
    }
    update() {
      this._dirtyId++;
    }
  };
  ln.defaultOptions = {
    ubo: false,
    isStatic: false
  };
  un = ln;
  Oe = class {
    constructor(t) {
      this.resources = /* @__PURE__ */ Object.create(null), this._dirty = true;
      let e = 0;
      for (const i in t) {
        const r = t[i];
        this.setResource(r, e++);
      }
      this._updateKey();
    }
    _updateKey() {
      if (!this._dirty) return;
      this._dirty = false;
      const t = [];
      let e = 0;
      for (const i in this.resources) t[e++] = this.resources[i]._resourceId;
      this._key = t.join("|");
    }
    setResource(t, e) {
      var _a2, _b;
      const i = this.resources[e];
      t !== i && (i && ((_a2 = t.off) == null ? void 0 : _a2.call(t, "change", this.onResourceChange, this)), (_b = t.on) == null ? void 0 : _b.call(t, "change", this.onResourceChange, this), this.resources[e] = t, this._dirty = true);
    }
    getResource(t) {
      return this.resources[t];
    }
    _touch(t, e) {
      const i = this.resources;
      for (const r in i) i[r]._gcLastUsed = t, i[r]._touched = e;
    }
    destroy() {
      var _a2, _b;
      const t = this.resources;
      for (const e in t) (_b = (_a2 = t[e]) == null ? void 0 : _a2.off) == null ? void 0 : _b.call(_a2, "change", this.onResourceChange, this);
      this.resources = null;
    }
    onResourceChange(t) {
      if (this._dirty = true, t.destroyed) {
        const e = this.resources;
        for (const i in e) e[i] === t && (e[i] = null);
      } else this._updateKey();
    }
  };
  Fs = ((s) => (s[s.WEBGL = 1] = "WEBGL", s[s.WEBGPU = 2] = "WEBGPU", s[s.CANVAS = 4] = "CANVAS", s[s.BOTH = 3] = "BOTH", s))(Fs || {});
  Ks = class extends _t {
    constructor(t) {
      super(), this.uid = V("shader"), this._uniformBindMap = /* @__PURE__ */ Object.create(null), this._ownedBindGroups = [], this._destroyed = false;
      let { gpuProgram: e, glProgram: i, groups: r, resources: n, compatibleRenderers: o, groupMap: a } = t;
      this.gpuProgram = e, this.glProgram = i, o === void 0 && (o = 0, e && (o |= Fs.WEBGPU), i && (o |= Fs.WEBGL)), this.compatibleRenderers = o;
      const h = {};
      if (!n && !r && (n = {}), n && r) throw new Error("[Shader] Cannot have both resources and groups");
      if (!e && r && !a) throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
      if (!e && r && a) for (const l in a) for (const c in a[l]) {
        const u = a[l][c];
        h[u] = {
          group: l,
          binding: c,
          name: u
        };
      }
      else if (e && r && !a) {
        const l = e.structsAndGroups.groups;
        a = {}, l.forEach((c) => {
          a[c.group] = a[c.group] || {}, a[c.group][c.binding] = c.name, h[c.name] = c;
        });
      } else if (n) {
        r = {}, a = {}, e && e.structsAndGroups.groups.forEach((u) => {
          a[u.group] = a[u.group] || {}, a[u.group][u.binding] = u.name, h[u.name] = u;
        });
        let l = 0;
        for (const c in n) h[c] || (r[99] || (r[99] = new Oe(), this._ownedBindGroups.push(r[99])), h[c] = {
          group: 99,
          binding: l,
          name: c
        }, a[99] = a[99] || {}, a[99][l] = c, l++);
        for (const c in n) {
          const u = c;
          let f = n[c];
          !f.source && !f._resourceType && (f = new un(f));
          const d = h[u];
          d && (r[d.group] || (r[d.group] = new Oe(), this._ownedBindGroups.push(r[d.group])), r[d.group].setResource(f, d.binding));
        }
      }
      this.groups = r, this._uniformBindMap = a, this.resources = this._buildResourceAccessor(r, h);
    }
    addResource(t, e, i) {
      var r, n;
      (r = this._uniformBindMap)[e] || (r[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new Oe(), this._ownedBindGroups.push(this.groups[e]));
    }
    _buildResourceAccessor(t, e) {
      const i = {};
      for (const r in e) {
        const n = e[r];
        Object.defineProperty(i, n.name, {
          get() {
            return t[n.group].getResource(n.binding);
          },
          set(o) {
            t[n.group].setResource(o, n.binding);
          }
        });
      }
      return i;
    }
    destroy(t = false) {
      var _a2, _b;
      this._destroyed || (this._destroyed = true, this.emit("destroy", this), t && ((_a2 = this.gpuProgram) == null ? void 0 : _a2.destroy(), (_b = this.glProgram) == null ? void 0 : _b.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach((e) => {
        e.destroy();
      }), this._ownedBindGroups = null, this.resources = null, this.groups = null);
    }
    static from(t) {
      const { gpu: e, gl: i, ...r } = t;
      let n, o;
      return e && (n = He.from(e)), i && (o = an.from(i)), new Ks({
        gpuProgram: n,
        glProgram: o,
        ...r
      });
    }
  };
  const ka = {
    normal: 0,
    add: 1,
    multiply: 2,
    screen: 3,
    overlay: 4,
    erase: 5,
    "normal-npm": 6,
    "add-npm": 7,
    "screen-npm": 8,
    min: 9,
    max: 10
  }, us = 0, ds = 1, fs = 2, ps = 3, ms = 4, gs = 5, Ds = class dn {
    constructor() {
      this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = true, this.depthMask = true;
    }
    get blend() {
      return !!(this.data & 1 << us);
    }
    set blend(t) {
      !!(this.data & 1 << us) !== t && (this.data ^= 1 << us);
    }
    get offsets() {
      return !!(this.data & 1 << ds);
    }
    set offsets(t) {
      !!(this.data & 1 << ds) !== t && (this.data ^= 1 << ds);
    }
    set cullMode(t) {
      if (t === "none") {
        this.culling = false;
        return;
      }
      this.culling = true, this.clockwiseFrontFace = t === "front";
    }
    get cullMode() {
      return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none";
    }
    get culling() {
      return !!(this.data & 1 << fs);
    }
    set culling(t) {
      !!(this.data & 1 << fs) !== t && (this.data ^= 1 << fs);
    }
    get depthTest() {
      return !!(this.data & 1 << ps);
    }
    set depthTest(t) {
      !!(this.data & 1 << ps) !== t && (this.data ^= 1 << ps);
    }
    get depthMask() {
      return !!(this.data & 1 << gs);
    }
    set depthMask(t) {
      !!(this.data & 1 << gs) !== t && (this.data ^= 1 << gs);
    }
    get clockwiseFrontFace() {
      return !!(this.data & 1 << ms);
    }
    set clockwiseFrontFace(t) {
      !!(this.data & 1 << ms) !== t && (this.data ^= 1 << ms);
    }
    get blendMode() {
      return this._blendMode;
    }
    set blendMode(t) {
      this.blend = t !== "none", this._blendMode = t, this._blendModeId = ka[t] || 0;
    }
    get polygonOffset() {
      return this._polygonOffset;
    }
    set polygonOffset(t) {
      this.offsets = !!t, this._polygonOffset = t;
    }
    toString() {
      return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
    }
    static for2d() {
      const t = new dn();
      return t.depthTest = false, t.blend = true, t;
    }
  };
  Ds.default2d = Ds.for2d();
  fn = Ds;
  const Ls = [];
  U.handleByNamedList(S.Environment, Ls);
  async function Ea(s) {
    if (!s) for (let t = 0; t < Ls.length; t++) {
      const e = Ls[t];
      if (e.value.test()) {
        await e.value.load();
        return;
      }
    }
  }
  let te;
  Ia = function() {
    if (typeof te == "boolean") return te;
    try {
      te = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
        a: "b"
      }, "a", "b") === true;
    } catch {
      te = false;
    }
    return te;
  };
  function Li(s, t, e = 2) {
    const i = t && t.length, r = i ? t[0] * e : s.length;
    let n = pn(s, 0, r, e, true);
    const o = [];
    if (!n || n.next === n.prev) return o;
    let a, h, l;
    if (i && (n = Da(s, t, n, e)), s.length > 80 * e) {
      a = s[0], h = s[1];
      let c = a, u = h;
      for (let f = e; f < r; f += e) {
        const d = s[f], p = s[f + 1];
        d < a && (a = d), p < h && (h = p), d > c && (c = d), p > u && (u = p);
      }
      l = Math.max(c - a, u - h), l = l !== 0 ? 32767 / l : 0;
    }
    return pe(n, o, e, a, h, l, 0), o;
  }
  function pn(s, t, e, i, r) {
    let n;
    if (r === Ya(s, t, e, i) > 0) for (let o = t; o < e; o += i) n = Oi(o / i | 0, s[o], s[o + 1], n);
    else for (let o = e - i; o >= t; o -= i) n = Oi(o / i | 0, s[o], s[o + 1], n);
    return n && Xt(n, n.next) && (ge(n), n = n.next), n;
  }
  function Gt(s, t) {
    if (!s) return s;
    t || (t = s);
    let e = s, i;
    do
      if (i = false, !e.steiner && (Xt(e, e.next) || z(e.prev, e, e.next) === 0)) {
        if (ge(e), e = t = e.prev, e === e.next) break;
        i = true;
      } else e = e.next;
    while (i || e !== t);
    return t;
  }
  function pe(s, t, e, i, r, n, o) {
    if (!s) return;
    !o && n && Na(s, i, r, n);
    let a = s;
    for (; s.prev !== s.next; ) {
      const h = s.prev, l = s.next;
      if (n ? Ba(s, i, r, n) : Ra(s)) {
        t.push(h.i, s.i, l.i), ge(s), s = l.next, a = l.next;
        continue;
      }
      if (s = l, s === a) {
        o ? o === 1 ? (s = Ga(Gt(s), t), pe(s, t, e, i, r, n, 2)) : o === 2 && Fa(s, t, e, i, r, n) : pe(Gt(s), t, e, i, r, n, 1);
        break;
      }
    }
  }
  function Ra(s) {
    const t = s.prev, e = s, i = s.next;
    if (z(t, e, i) >= 0) return false;
    const r = t.x, n = e.x, o = i.x, a = t.y, h = e.y, l = i.y, c = Math.min(r, n, o), u = Math.min(a, h, l), f = Math.max(r, n, o), d = Math.max(a, h, l);
    let p = i.next;
    for (; p !== t; ) {
      if (p.x >= c && p.x <= f && p.y >= u && p.y <= d && oe(r, a, n, h, o, l, p.x, p.y) && z(p.prev, p, p.next) >= 0) return false;
      p = p.next;
    }
    return true;
  }
  function Ba(s, t, e, i) {
    const r = s.prev, n = s, o = s.next;
    if (z(r, n, o) >= 0) return false;
    const a = r.x, h = n.x, l = o.x, c = r.y, u = n.y, f = o.y, d = Math.min(a, h, l), p = Math.min(c, u, f), g = Math.max(a, h, l), m = Math.max(c, u, f), y = Os(d, p, t, e, i), x = Os(g, m, t, e, i);
    let _ = s.prevZ, b = s.nextZ;
    for (; _ && _.z >= y && b && b.z <= x; ) {
      if (_.x >= d && _.x <= g && _.y >= p && _.y <= m && _ !== r && _ !== o && oe(a, c, h, u, l, f, _.x, _.y) && z(_.prev, _, _.next) >= 0 || (_ = _.prevZ, b.x >= d && b.x <= g && b.y >= p && b.y <= m && b !== r && b !== o && oe(a, c, h, u, l, f, b.x, b.y) && z(b.prev, b, b.next) >= 0)) return false;
      b = b.nextZ;
    }
    for (; _ && _.z >= y; ) {
      if (_.x >= d && _.x <= g && _.y >= p && _.y <= m && _ !== r && _ !== o && oe(a, c, h, u, l, f, _.x, _.y) && z(_.prev, _, _.next) >= 0) return false;
      _ = _.prevZ;
    }
    for (; b && b.z <= x; ) {
      if (b.x >= d && b.x <= g && b.y >= p && b.y <= m && b !== r && b !== o && oe(a, c, h, u, l, f, b.x, b.y) && z(b.prev, b, b.next) >= 0) return false;
      b = b.nextZ;
    }
    return true;
  }
  function Ga(s, t) {
    let e = s;
    do {
      const i = e.prev, r = e.next.next;
      !Xt(i, r) && gn(i, e, e.next, r) && me(i, r) && me(r, i) && (t.push(i.i, e.i, r.i), ge(e), ge(e.next), e = s = r), e = e.next;
    } while (e !== s);
    return Gt(e);
  }
  function Fa(s, t, e, i, r, n) {
    let o = s;
    do {
      let a = o.next.next;
      for (; a !== o.prev; ) {
        if (o.i !== a.i && Wa(o, a)) {
          let h = yn(o, a);
          o = Gt(o, o.next), h = Gt(h, h.next), pe(o, t, e, i, r, n, 0), pe(h, t, e, i, r, n, 0);
          return;
        }
        a = a.next;
      }
      o = o.next;
    } while (o !== s);
  }
  function Da(s, t, e, i) {
    const r = [];
    for (let n = 0, o = t.length; n < o; n++) {
      const a = t[n] * i, h = n < o - 1 ? t[n + 1] * i : s.length, l = pn(s, a, h, i, false);
      l === l.next && (l.steiner = true), r.push(Va(l));
    }
    r.sort(La);
    for (let n = 0; n < r.length; n++) e = Oa(r[n], e);
    return e;
  }
  function La(s, t) {
    let e = s.x - t.x;
    if (e === 0 && (e = s.y - t.y, e === 0)) {
      const i = (s.next.y - s.y) / (s.next.x - s.x), r = (t.next.y - t.y) / (t.next.x - t.x);
      e = i - r;
    }
    return e;
  }
  function Oa(s, t) {
    const e = za(s, t);
    if (!e) return t;
    const i = yn(e, s);
    return Gt(i, i.next), Gt(e, e.next);
  }
  function za(s, t) {
    let e = t;
    const i = s.x, r = s.y;
    let n = -1 / 0, o;
    if (Xt(s, e)) return e;
    do {
      if (Xt(s, e.next)) return e.next;
      if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
        const u = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
        if (u <= i && u > n && (n = u, o = e.x < e.next.x ? e : e.next, u === i)) return o;
      }
      e = e.next;
    } while (e !== t);
    if (!o) return null;
    const a = o, h = o.x, l = o.y;
    let c = 1 / 0;
    e = o;
    do {
      if (i >= e.x && e.x >= h && i !== e.x && mn(r < l ? i : n, r, h, l, r < l ? n : i, r, e.x, e.y)) {
        const u = Math.abs(r - e.y) / (i - e.x);
        me(e, s) && (u < c || u === c && (e.x > o.x || e.x === o.x && Ua(o, e))) && (o = e, c = u);
      }
      e = e.next;
    } while (e !== a);
    return o;
  }
  function Ua(s, t) {
    return z(s.prev, s, t.prev) < 0 && z(t.next, s, s.next) < 0;
  }
  function Na(s, t, e, i) {
    let r = s;
    do
      r.z === 0 && (r.z = Os(r.x, r.y, t, e, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
    while (r !== s);
    r.prevZ.nextZ = null, r.prevZ = null, $a(r);
  }
  function $a(s) {
    let t, e = 1;
    do {
      let i = s, r;
      s = null;
      let n = null;
      for (t = 0; i; ) {
        t++;
        let o = i, a = 0;
        for (let l = 0; l < e && (a++, o = o.nextZ, !!o); l++) ;
        let h = e;
        for (; a > 0 || h > 0 && o; ) a !== 0 && (h === 0 || !o || i.z <= o.z) ? (r = i, i = i.nextZ, a--) : (r = o, o = o.nextZ, h--), n ? n.nextZ = r : s = r, r.prevZ = n, n = r;
        i = o;
      }
      n.nextZ = null, e *= 2;
    } while (t > 1);
    return s;
  }
  function Os(s, t, e, i, r) {
    return s = (s - e) * r | 0, t = (t - i) * r | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1;
  }
  function Va(s) {
    let t = s, e = s;
    do
      (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
    while (t !== s);
    return e;
  }
  function mn(s, t, e, i, r, n, o, a) {
    return (r - o) * (t - a) >= (s - o) * (n - a) && (s - o) * (i - a) >= (e - o) * (t - a) && (e - o) * (n - a) >= (r - o) * (i - a);
  }
  function oe(s, t, e, i, r, n, o, a) {
    return !(s === o && t === a) && mn(s, t, e, i, r, n, o, a);
  }
  function Wa(s, t) {
    return s.next.i !== t.i && s.prev.i !== t.i && !Ha(s, t) && (me(s, t) && me(t, s) && Xa(s, t) && (z(s.prev, s, t.prev) || z(s, t.prev, t)) || Xt(s, t) && z(s.prev, s, s.next) > 0 && z(t.prev, t, t.next) > 0);
  }
  function z(s, t, e) {
    return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
  }
  function Xt(s, t) {
    return s.x === t.x && s.y === t.y;
  }
  function gn(s, t, e, i) {
    const r = Re(z(s, t, e)), n = Re(z(s, t, i)), o = Re(z(e, i, s)), a = Re(z(e, i, t));
    return !!(r !== n && o !== a || r === 0 && Ie(s, e, t) || n === 0 && Ie(s, i, t) || o === 0 && Ie(e, s, i) || a === 0 && Ie(e, t, i));
  }
  function Ie(s, t, e) {
    return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y);
  }
  function Re(s) {
    return s > 0 ? 1 : s < 0 ? -1 : 0;
  }
  function Ha(s, t) {
    let e = s;
    do {
      if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && gn(e, e.next, s, t)) return true;
      e = e.next;
    } while (e !== s);
    return false;
  }
  function me(s, t) {
    return z(s.prev, s, s.next) < 0 ? z(s, t, s.next) >= 0 && z(s, s.prev, t) >= 0 : z(s, t, s.prev) < 0 || z(s, s.next, t) < 0;
  }
  function Xa(s, t) {
    let e = s, i = false;
    const r = (s.x + t.x) / 2, n = (s.y + t.y) / 2;
    do
      e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
    while (e !== s);
    return i;
  }
  function yn(s, t) {
    const e = zs(s.i, s.x, s.y), i = zs(t.i, t.x, t.y), r = s.next, n = t.prev;
    return s.next = t, t.prev = s, e.next = r, r.prev = e, i.next = e, e.prev = i, n.next = i, i.prev = n, i;
  }
  function Oi(s, t, e, i) {
    const r = zs(s, t, e);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }
  function ge(s) {
    s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
  }
  function zs(s, t, e) {
    return {
      i: s,
      x: t,
      y: e,
      prev: null,
      next: null,
      z: 0,
      prevZ: null,
      nextZ: null,
      steiner: false
    };
  }
  function Ya(s, t, e, i) {
    let r = 0;
    for (let n = t, o = e - i; n < e; n += i) r += (s[o] - s[n]) * (s[n + 1] + s[o + 1]), o = n;
    return r;
  }
  const ja = Li.default || Li;
  xn = ((s) => (s[s.NONE = 0] = "NONE", s[s.COLOR = 16384] = "COLOR", s[s.STENCIL = 1024] = "STENCIL", s[s.DEPTH = 256] = "DEPTH", s[s.COLOR_DEPTH = 16640] = "COLOR_DEPTH", s[s.COLOR_STENCIL = 17408] = "COLOR_STENCIL", s[s.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", s[s.ALL = 17664] = "ALL", s))(xn || {});
  qa = class {
    constructor(t) {
      this.items = [], this._name = t;
    }
    emit(t, e, i, r, n, o, a, h) {
      const { name: l, items: c } = this;
      for (let u = 0, f = c.length; u < f; u++) c[u][l](t, e, i, r, n, o, a, h);
      return this;
    }
    add(t) {
      return t[this._name] && (this.remove(t), this.items.push(t)), this;
    }
    remove(t) {
      const e = this.items.indexOf(t);
      return e !== -1 && this.items.splice(e, 1), this;
    }
    contains(t) {
      return this.items.indexOf(t) !== -1;
    }
    removeAll() {
      return this.items.length = 0, this;
    }
    destroy() {
      this.removeAll(), this.items = null, this._name = null;
    }
    get empty() {
      return this.items.length === 0;
    }
    get name() {
      return this._name;
    }
  };
  const Za = [
    "init",
    "destroy",
    "contextChange",
    "resolutionChange",
    "resetState",
    "renderEnd",
    "renderStart",
    "render",
    "update",
    "postrender",
    "prerender"
  ], _n = class bn extends _t {
    constructor(t) {
      super(), this.tick = 0, this.uid = V("renderer"), this.runners = /* @__PURE__ */ Object.create(null), this.renderPipes = /* @__PURE__ */ Object.create(null), this._initOptions = {}, this._systemsHash = /* @__PURE__ */ Object.create(null), this.type = t.type, this.name = t.name, this.config = t;
      const e = [
        ...Za,
        ...this.config.runners ?? []
      ];
      this._addRunners(...e), this._unsafeEvalCheck();
    }
    async init(t = {}) {
      const e = t.skipExtensionImports === true ? true : t.manageImports === false;
      await Ea(e), this._addSystems(this.config.systems), this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
      for (const i in this._systemsHash) t = {
        ...this._systemsHash[i].constructor.defaultOptions,
        ...t
      };
      t = {
        ...bn.defaultOptions,
        ...t
      }, this._roundPixels = t.roundPixels ? 1 : 0;
      for (let i = 0; i < this.runners.init.items.length; i++) await this.runners.init.items[i].init(t);
      this._initOptions = t;
    }
    render(t, e) {
      this.tick++;
      let i = t;
      if (i instanceof xt && (i = {
        container: i
      }, e && (F(H, "passing a second argument is deprecated, please use render options instead"), i.target = e.renderTexture)), i.target || (i.target = this.view.renderTarget), i.target === this.view.renderTarget && (this._lastObjectRendered = i.container, i.clearColor ?? (i.clearColor = this.background.colorRgba), i.clear ?? (i.clear = this.background.clearBeforeRender)), i.clearColor) {
        const r = Array.isArray(i.clearColor) && i.clearColor.length === 4;
        i.clearColor = r ? i.clearColor : nt.shared.setValue(i.clearColor).toArray();
      }
      i.transform || (i.container.updateLocalTransform(), i.transform = i.container.localTransform), i.container.visible && (i.container.enableRenderGroup(), this.runners.prerender.emit(i), this.runners.renderStart.emit(i), this.runners.render.emit(i), this.runners.renderEnd.emit(i), this.runners.postrender.emit(i));
    }
    resize(t, e, i) {
      const r = this.view.resolution;
      this.view.resize(t, e, i), this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution), i !== void 0 && i !== r && this.runners.resolutionChange.emit(i);
    }
    clear(t = {}) {
      const e = this;
      t.target || (t.target = e.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), t.clear ?? (t.clear = xn.ALL);
      const { clear: i, clearColor: r, target: n, mipLevel: o, layer: a } = t;
      nt.shared.setValue(r ?? this.background.colorRgba), e.renderTarget.clear(n, i, nt.shared.toArray(), o ?? 0, a ?? 0);
    }
    get resolution() {
      return this.view.resolution;
    }
    set resolution(t) {
      this.view.resolution = t, this.runners.resolutionChange.emit(t);
    }
    get width() {
      return this.view.texture.frame.width;
    }
    get height() {
      return this.view.texture.frame.height;
    }
    get canvas() {
      return this.view.canvas;
    }
    get lastObjectRendered() {
      return this._lastObjectRendered;
    }
    get renderingToScreen() {
      return this.renderTarget.renderingToScreen;
    }
    get screen() {
      return this.view.screen;
    }
    _addRunners(...t) {
      t.forEach((e) => {
        this.runners[e] = new qa(e);
      });
    }
    _addSystems(t) {
      let e;
      for (e in t) {
        const i = t[e];
        this._addSystem(i.value, i.name);
      }
    }
    _addSystem(t, e) {
      const i = new t(this);
      if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
      this[e] = i, this._systemsHash[e] = i;
      for (const r in this.runners) this.runners[r].add(i);
      return this;
    }
    _addPipes(t, e) {
      const i = e.reduce((r, n) => (r[n.name] = n.value, r), {});
      t.forEach((r) => {
        const n = r.value, o = r.name, a = i[o];
        this.renderPipes[o] = new n(this, a ? new a() : null), this.runners.destroy.add(this.renderPipes[o]);
      });
    }
    destroy(t = false) {
      this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), (t === true || typeof t == "object" && t.releaseGlobalResources) && Ve.release(), Object.values(this.runners).forEach((e) => {
        e.destroy();
      }), this._systemsHash = null, this.renderPipes = null;
    }
    generateTexture(t) {
      return this.textureGenerator.generateTexture(t);
    }
    get roundPixels() {
      return !!this._roundPixels;
    }
    _unsafeEvalCheck() {
      if (!Ia()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
    }
    resetState() {
      this.runners.resetState.emit();
    }
  };
  _n.defaultOptions = {
    resolution: 1,
    failIfMajorPerformanceCaveat: false,
    roundPixels: false
  };
  let Be;
  An = _n;
  function Ka(s) {
    return Be !== void 0 || (Be = (() => {
      var _a2;
      const t = {
        stencil: true,
        failIfMajorPerformanceCaveat: s ?? An.defaultOptions.failIfMajorPerformanceCaveat
      };
      try {
        if (!W.get().getWebGLRenderingContext()) return false;
        let i = W.get().createCanvas().getContext("webgl", t);
        const r = !!((_a2 = i == null ? void 0 : i.getContextAttributes()) == null ? void 0 : _a2.stencil);
        if (i) {
          const n = i.getExtension("WEBGL_lose_context");
          n && n.loseContext();
        }
        return i = null, r;
      } catch {
        return false;
      }
    })()), Be;
  }
  let Ge;
  async function Qa(s = {}) {
    return Ge !== void 0 || (Ge = await (async () => {
      const t = W.get().getNavigator().gpu;
      if (!t) return false;
      try {
        return await (await t.requestAdapter(s)).requestDevice(), true;
      } catch {
        return false;
      }
    })()), Ge;
  }
  const zi = [
    "webgl",
    "webgpu",
    "canvas"
  ];
  async function Ja(s) {
    let t = [];
    s.preference ? (t.push(s.preference), zi.forEach((n) => {
      n !== s.preference && t.push(n);
    })) : t = zi.slice();
    let e, i = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (o === "webgpu" && await Qa()) {
        const { WebGPURenderer: a } = await zt(async () => {
          const { WebGPURenderer: h } = await import("./CfdLIFuH.js");
          return {
            WebGPURenderer: h
          };
        }, __vite__mapDeps([3,4,5,2,6]), import.meta.url);
        e = a, i = {
          ...s,
          ...s.webgpu
        };
        break;
      } else if (o === "webgl" && Ka(s.failIfMajorPerformanceCaveat ?? An.defaultOptions.failIfMajorPerformanceCaveat)) {
        const { WebGLRenderer: a } = await zt(async () => {
          const { WebGLRenderer: h } = await import("./CgGxSczB.js");
          return {
            WebGLRenderer: h
          };
        }, __vite__mapDeps([7,4,5,2]), import.meta.url);
        e = a, i = {
          ...s,
          ...s.webgl
        };
        break;
      } else if (o === "canvas") {
        const { CanvasRenderer: a } = await zt(async () => {
          const { CanvasRenderer: h } = await import("./BP-cuPRe.js");
          return {
            CanvasRenderer: h
          };
        }, __vite__mapDeps([8,5,2]), import.meta.url);
        e = a, i = {
          ...s,
          ...s.canvasOptions
        };
        break;
      }
    }
    if (delete i.webgpu, delete i.webgl, delete i.canvasOptions, !e) throw new Error("No available renderer for the current environment");
    const r = new e();
    return await r.init(i), r;
  }
  wn = "8.16.0";
  class vn {
    static init() {
      var _a2;
      (_a2 = globalThis.__PIXI_APP_INIT__) == null ? void 0 : _a2.call(globalThis, this, wn);
    }
    static destroy() {
    }
  }
  vn.extension = S.Application;
  th = class {
    constructor(t) {
      this._renderer = t;
    }
    init() {
      var _a2;
      (_a2 = globalThis.__PIXI_RENDERER_INIT__) == null ? void 0 : _a2.call(globalThis, this._renderer, wn);
    }
    destroy() {
      this._renderer = null;
    }
  };
  th.extension = {
    type: [
      S.WebGLSystem,
      S.WebGPUSystem
    ],
    name: "initHook",
    priority: -10
  };
  class Cn {
    static init(t) {
      Object.defineProperty(this, "resizeTo", {
        configurable: true,
        set(e) {
          globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize());
        },
        get() {
          return this._resizeTo;
        }
      }), this.queueResize = () => {
        this._resizeTo && (this._cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
      }, this._cancelResize = () => {
        this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
      }, this.resize = () => {
        if (!this._resizeTo) return;
        this._cancelResize();
        let e, i;
        if (this._resizeTo === globalThis.window) e = globalThis.innerWidth, i = globalThis.innerHeight;
        else {
          const { clientWidth: r, clientHeight: n } = this._resizeTo;
          e = r, i = n;
        }
        this.renderer.resize(e, i), this.render();
      }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
    }
    static destroy() {
      globalThis.removeEventListener("resize", this.queueResize), this._cancelResize(), this._cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
    }
  }
  Cn.extension = S.Application;
  class Mn {
    static init(t) {
      t = Object.assign({
        autoStart: true,
        sharedTicker: false
      }, t), Object.defineProperty(this, "ticker", {
        configurable: true,
        set(e) {
          this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, Ue.LOW);
        },
        get() {
          return this._ticker;
        }
      }), this.stop = () => {
        this._ticker.stop();
      }, this.start = () => {
        this._ticker.start();
      }, this._ticker = null, this.ticker = t.sharedTicker ? Ot.shared : new Ot(), t.autoStart && this.start();
    }
    static destroy() {
      if (this._ticker) {
        const t = this._ticker;
        this.ticker = null, t.destroy();
      }
    }
  }
  Mn.extension = S.Application;
  U.add(Cn);
  U.add(Mn);
  const Pn = class Us {
    constructor(...t) {
      this.stage = new xt(), t[0] !== void 0 && F(H, "Application constructor options are deprecated, please use Application.init() instead.");
    }
    async init(t) {
      t = {
        ...t
      }, this.stage || (this.stage = new xt()), this.renderer = await Ja(t), Us._plugins.forEach((e) => {
        e.init.call(this, t);
      });
    }
    render() {
      this.renderer.render({
        container: this.stage
      });
    }
    get canvas() {
      return this.renderer.canvas;
    }
    get view() {
      return F(H, "Application.view is deprecated, please use Application.canvas instead."), this.renderer.canvas;
    }
    get screen() {
      return this.renderer.screen;
    }
    destroy(t = false, e = false) {
      const i = Us._plugins.slice(0);
      i.reverse(), i.forEach((r) => {
        r.destroy.call(this);
      }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null;
    }
  };
  Pn._plugins = [];
  let Sn = Pn;
  U.handleByList(S.Application, Sn._plugins);
  U.add(vn);
  const ys = {
    test(s) {
      return typeof s == "string" && s.startsWith("info face=");
    },
    parse(s) {
      const t = s.match(/^[a-z]+\s+.+$/gm), e = {
        info: [],
        common: [],
        page: [],
        char: [],
        chars: [],
        kerning: [],
        kernings: [],
        distanceField: []
      };
      for (const u in t) {
        const f = t[u].match(/^[a-z]+/gm)[0], d = t[u].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), p = {};
        for (const g in d) {
          const m = d[g].split("="), y = m[0], x = m[1].replace(/"/gm, ""), _ = parseFloat(x), b = isNaN(_) ? x : _;
          p[y] = b;
        }
        e[f].push(p);
      }
      const i = {
        chars: {},
        pages: [],
        lineHeight: 0,
        fontSize: 0,
        fontFamily: "",
        distanceField: null,
        baseLineOffset: 0
      }, [r] = e.info, [n] = e.common, [o] = e.distanceField ?? [];
      o && (i.distanceField = {
        range: parseInt(o.distanceRange, 10),
        type: o.fieldType
      }), i.fontSize = parseInt(r.size, 10), i.fontFamily = r.face, i.lineHeight = parseInt(n.lineHeight, 10);
      const a = e.page;
      for (let u = 0; u < a.length; u++) i.pages.push({
        id: parseInt(a[u].id, 10) || 0,
        file: a[u].file
      });
      const h = {};
      i.baseLineOffset = i.lineHeight - parseInt(n.base, 10);
      const l = e.char;
      for (let u = 0; u < l.length; u++) {
        const f = l[u], d = parseInt(f.id, 10);
        let p = f.letter ?? f.char ?? String.fromCharCode(d);
        p === "space" && (p = " "), h[d] = p, i.chars[p] = {
          id: d,
          page: parseInt(f.page, 10) || 0,
          x: parseInt(f.x, 10),
          y: parseInt(f.y, 10),
          width: parseInt(f.width, 10),
          height: parseInt(f.height, 10),
          xOffset: parseInt(f.xoffset, 10),
          yOffset: parseInt(f.yoffset, 10),
          xAdvance: parseInt(f.xadvance, 10),
          kerning: {}
        };
      }
      const c = e.kerning || [];
      for (let u = 0; u < c.length; u++) {
        const f = parseInt(c[u].first, 10), d = parseInt(c[u].second, 10), p = parseInt(c[u].amount, 10);
        i.chars[h[d]].kerning[h[f]] = p;
      }
      return i;
    }
  }, Ui = {
    test(s) {
      const t = s;
      return typeof t != "string" && "getElementsByTagName" in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null;
    },
    parse(s) {
      const t = {
        chars: {},
        pages: [],
        lineHeight: 0,
        fontSize: 0,
        fontFamily: "",
        distanceField: null,
        baseLineOffset: 0
      }, e = s.getElementsByTagName("info")[0], i = s.getElementsByTagName("common")[0], r = s.getElementsByTagName("distanceField")[0];
      r && (t.distanceField = {
        type: r.getAttribute("fieldType"),
        range: parseInt(r.getAttribute("distanceRange"), 10)
      });
      const n = s.getElementsByTagName("page"), o = s.getElementsByTagName("char"), a = s.getElementsByTagName("kerning");
      t.fontSize = parseInt(e.getAttribute("size"), 10), t.fontFamily = e.getAttribute("face"), t.lineHeight = parseInt(i.getAttribute("lineHeight"), 10);
      for (let l = 0; l < n.length; l++) t.pages.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file")
      });
      const h = {};
      t.baseLineOffset = t.lineHeight - parseInt(i.getAttribute("base"), 10);
      for (let l = 0; l < o.length; l++) {
        const c = o[l], u = parseInt(c.getAttribute("id"), 10);
        let f = c.getAttribute("letter") ?? c.getAttribute("char") ?? String.fromCharCode(u);
        f === "space" && (f = " "), h[u] = f, t.chars[f] = {
          id: u,
          page: parseInt(c.getAttribute("page"), 10) || 0,
          x: parseInt(c.getAttribute("x"), 10),
          y: parseInt(c.getAttribute("y"), 10),
          width: parseInt(c.getAttribute("width"), 10),
          height: parseInt(c.getAttribute("height"), 10),
          xOffset: parseInt(c.getAttribute("xoffset"), 10),
          yOffset: parseInt(c.getAttribute("yoffset"), 10),
          xAdvance: parseInt(c.getAttribute("xadvance"), 10),
          kerning: {}
        };
      }
      for (let l = 0; l < a.length; l++) {
        const c = parseInt(a[l].getAttribute("first"), 10), u = parseInt(a[l].getAttribute("second"), 10), f = parseInt(a[l].getAttribute("amount"), 10);
        t.chars[h[u]].kerning[h[c]] = f;
      }
      return t;
    }
  }, Ni = {
    test(s) {
      return typeof s == "string" && s.match(/<font(\s|>)/) ? Ui.test(W.get().parseXML(s)) : false;
    },
    parse(s) {
      return Ui.parse(W.get().parseXML(s));
    }
  }, eh = [
    ".xml",
    ".fnt"
  ], sh = {
    extension: {
      type: S.CacheParser,
      name: "cacheBitmapFont"
    },
    test: (s) => !!(s == null ? void 0 : s.pages) && !!(s == null ? void 0 : s.chars) && typeof (s == null ? void 0 : s.fontFamily) == "string",
    getCacheableAssets(s, t) {
      const e = {};
      return s.forEach((i) => {
        e[i] = t, e[`${i}-bitmap`] = t;
      }), e[`${t.fontFamily}-bitmap`] = t, e;
    }
  }, ih = {
    extension: {
      type: S.LoadParser,
      priority: vt.Normal
    },
    name: "loadBitmapFont",
    id: "bitmap-font",
    test(s) {
      return eh.includes(st.extname(s).toLowerCase());
    },
    async testParse(s) {
      return ys.test(s) || Ni.test(s);
    },
    async parse(s, t, e) {
      const i = ys.test(s) ? ys.parse(s) : Ni.parse(s), { src: r } = t, { pages: n } = i, o = [], a = i.distanceField ? {
        scaleMode: "linear",
        alphaMode: "premultiply-alpha-on-upload",
        autoGenerateMipmaps: false,
        resolution: 1
      } : {};
      for (let f = 0; f < n.length; ++f) {
        const d = n[f].file;
        let p = st.join(st.dirname(r), d);
        p = Bs(p, r), o.push({
          src: p,
          data: a
        });
      }
      const [h, { BitmapFont: l }] = await Promise.all([
        e.load(o),
        zt(() => import("./CJzqHfeb.js"), __vite__mapDeps([9,6]), import.meta.url)
      ]), c = o.map((f) => h[f.src]);
      return new l({
        data: i,
        textures: c
      }, r);
    },
    async load(s, t) {
      return await (await W.get().fetch(s)).text();
    },
    async unload(s, t, e) {
      await Promise.all(s.pages.map((i) => e.unload(i.texture.source._sourceOrigin))), s.destroy();
    }
  };
  class rh {
    constructor(t, e = false) {
      this._loader = t, this._assetList = [], this._isLoading = false, this._maxConcurrent = 1, this.verbose = e;
    }
    add(t) {
      t.forEach((e) => {
        this._assetList.push(e);
      }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
    }
    async _next() {
      if (this._assetList.length && this._isActive) {
        this._isLoading = true;
        const t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
        for (let i = 0; i < e; i++) t.push(this._assetList.pop());
        await this._loader.load(t), this._isLoading = false, this._next();
      }
    }
    get active() {
      return this._isActive;
    }
    set active(t) {
      this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
    }
  }
  const nh = {
    extension: {
      type: S.CacheParser,
      name: "cacheTextureArray"
    },
    test: (s) => Array.isArray(s) && s.every((t) => t instanceof G),
    getCacheableAssets: (s, t) => {
      const e = {};
      return s.forEach((i) => {
        t.forEach((r, n) => {
          e[i + (n === 0 ? "" : n + 1)] = r;
        });
      }), e;
    }
  };
  async function Tn(s) {
    if ("Image" in globalThis) return new Promise((t) => {
      const e = new Image();
      e.onload = () => {
        t(true);
      }, e.onerror = () => {
        t(false);
      }, e.src = s;
    });
    if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
      try {
        const t = await (await fetch(s)).blob();
        await createImageBitmap(t);
      } catch {
        return false;
      }
      return true;
    }
    return false;
  }
  const oh = {
    extension: {
      type: S.DetectionParser,
      priority: 1
    },
    test: async () => Tn("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    add: async (s) => [
      ...s,
      "avif"
    ],
    remove: async (s) => s.filter((t) => t !== "avif")
  }, $i = [
    "png",
    "jpg",
    "jpeg"
  ], ah = {
    extension: {
      type: S.DetectionParser,
      priority: -1
    },
    test: () => Promise.resolve(true),
    add: async (s) => [
      ...s,
      ...$i
    ],
    remove: async (s) => s.filter((t) => !$i.includes(t))
  }, hh = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
  function Xe(s) {
    return hh ? false : document.createElement("video").canPlayType(s) !== "";
  }
  const lh = {
    extension: {
      type: S.DetectionParser,
      priority: 0
    },
    test: async () => Xe("video/mp4"),
    add: async (s) => [
      ...s,
      "mp4",
      "m4v"
    ],
    remove: async (s) => s.filter((t) => t !== "mp4" && t !== "m4v")
  }, ch = {
    extension: {
      type: S.DetectionParser,
      priority: 0
    },
    test: async () => Xe("video/ogg"),
    add: async (s) => [
      ...s,
      "ogv"
    ],
    remove: async (s) => s.filter((t) => t !== "ogv")
  }, uh = {
    extension: {
      type: S.DetectionParser,
      priority: 0
    },
    test: async () => Xe("video/webm"),
    add: async (s) => [
      ...s,
      "webm"
    ],
    remove: async (s) => s.filter((t) => t !== "webm")
  }, dh = {
    extension: {
      type: S.DetectionParser,
      priority: 0
    },
    test: async () => Tn("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
    add: async (s) => [
      ...s,
      "webp"
    ],
    remove: async (s) => s.filter((t) => t !== "webp")
  }, kn = class ze {
    constructor() {
      this.loadOptions = {
        ...ze.defaultOptions
      }, this._parsers = [], this._parsersValidated = false, this.parsers = new Proxy(this._parsers, {
        set: (t, e, i) => (this._parsersValidated = false, t[e] = i, true)
      }), this.promiseCache = {};
    }
    reset() {
      this._parsersValidated = false, this.promiseCache = {};
    }
    _getLoadPromiseAndParser(t, e) {
      const i = {
        promise: null,
        parser: null
      };
      return i.promise = (async () => {
        var _a2, _b;
        let r = null, n = null;
        if ((e.parser || e.loadParser) && (n = this._parserHash[e.parser || e.loadParser], e.loadParser && $(`[Assets] "loadParser" is deprecated, use "parser" instead for ${t}`), n || $(`[Assets] specified load parser "${e.parser || e.loadParser}" not found while loading ${t}`)), !n) {
          for (let o = 0; o < this.parsers.length; o++) {
            const a = this.parsers[o];
            if (a.load && ((_a2 = a.test) == null ? void 0 : _a2.call(a, t, e, this))) {
              n = a;
              break;
            }
          }
          if (!n) return $(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
        }
        r = await n.load(t, e, this), i.parser = n;
        for (let o = 0; o < this.parsers.length; o++) {
          const a = this.parsers[o];
          a.parse && a.parse && await ((_b = a.testParse) == null ? void 0 : _b.call(a, r, e, this)) && (r = await a.parse(r, e, this) || r, i.parser = a);
        }
        return r;
      })(), i;
    }
    async load(t, e) {
      this._parsersValidated || this._validateParsers();
      const i = typeof e == "function" ? {
        ...ze.defaultOptions,
        ...this.loadOptions,
        onProgress: e
      } : {
        ...ze.defaultOptions,
        ...this.loadOptions,
        ...e || {}
      }, { onProgress: r, onError: n, strategy: o, retryCount: a, retryDelay: h } = i;
      let l = 0;
      const c = {}, u = Ne(t), f = at(t, (g) => ({
        alias: [
          g
        ],
        src: g,
        data: {}
      })), d = f.reduce((g, m) => g + (m.progressSize || 1), 0), p = f.map(async (g) => {
        const m = st.toAbsolute(g.src);
        c[g.src] || (await this._loadAssetWithRetry(m, g, {
          onProgress: r,
          onError: n,
          strategy: o,
          retryCount: a,
          retryDelay: h
        }, c), l += g.progressSize || 1, r && r(l / d));
      });
      return await Promise.all(p), u ? c[f[0].src] : c;
    }
    async unload(t) {
      const i = at(t, (r) => ({
        alias: [
          r
        ],
        src: r
      })).map(async (r) => {
        var _a2, _b;
        const n = st.toAbsolute(r.src), o = this.promiseCache[n];
        if (o) {
          const a = await o.promise;
          delete this.promiseCache[n], await ((_b = (_a2 = o.parser) == null ? void 0 : _a2.unload) == null ? void 0 : _b.call(_a2, a, r, this));
        }
      });
      await Promise.all(i);
    }
    _validateParsers() {
      this._parsersValidated = true, this._parserHash = this._parsers.filter((t) => t.name || t.id).reduce((t, e) => (!e.name && !e.id ? $("[Assets] parser should have an id") : (t[e.name] || t[e.id]) && $(`[Assets] parser id conflict "${e.id}"`), t[e.name] = e, e.id && (t[e.id] = e), t), {});
    }
    async _loadAssetWithRetry(t, e, i, r) {
      let n = 0;
      const { onError: o, strategy: a, retryCount: h, retryDelay: l } = i, c = (u) => new Promise((f) => setTimeout(f, u));
      for (; ; ) try {
        this.promiseCache[t] || (this.promiseCache[t] = this._getLoadPromiseAndParser(t, e)), r[e.src] = await this.promiseCache[t].promise;
        return;
      } catch (u) {
        delete this.promiseCache[t], delete r[e.src], n++;
        const f = a !== "retry" || n > h;
        if (a === "retry" && !f) {
          o && o(u, e), await c(l);
          continue;
        }
        if (a === "skip") {
          o && o(u, e);
          return;
        }
        o && o(u, e);
        const d = new Error(`[Loader.load] Failed to load ${t}.
${u}`);
        throw u instanceof Error && u.stack && (d.stack = u.stack), d;
      }
    }
  };
  kn.defaultOptions = {
    onProgress: void 0,
    onError: void 0,
    strategy: "throw",
    retryCount: 3,
    retryDelay: 250
  };
  let fh = kn;
  function jt(s, t) {
    if (Array.isArray(t)) {
      for (const e of t) if (s.startsWith(`data:${e}`)) return true;
      return false;
    }
    return s.startsWith(`data:${t}`);
  }
  function qt(s, t) {
    const e = s.split("?")[0], i = st.extname(e).toLowerCase();
    return Array.isArray(t) ? t.includes(i) : i === t;
  }
  const ph = ".json", mh = "application/json", gh = {
    extension: {
      type: S.LoadParser,
      priority: vt.Low
    },
    name: "loadJson",
    id: "json",
    test(s) {
      return jt(s, mh) || qt(s, ph);
    },
    async load(s) {
      return await (await W.get().fetch(s)).json();
    }
  }, yh = ".txt", xh = "text/plain", _h = {
    name: "loadTxt",
    id: "text",
    extension: {
      type: S.LoadParser,
      priority: vt.Low,
      name: "loadTxt"
    },
    test(s) {
      return jt(s, xh) || qt(s, yh);
    },
    async load(s) {
      return await (await W.get().fetch(s)).text();
    }
  }, bh = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ], Ah = [
    ".ttf",
    ".otf",
    ".woff",
    ".woff2"
  ], wh = [
    "font/ttf",
    "font/otf",
    "font/woff",
    "font/woff2"
  ], vh = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
  function Ch(s) {
    const t = st.extname(s), r = st.basename(s, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((a) => a.charAt(0).toUpperCase() + a.slice(1));
    let n = r.length > 0;
    for (const a of r) if (!a.match(vh)) {
      n = false;
      break;
    }
    let o = r.join(" ");
    return n || (o = `"${o.replace(/[\\"]/g, "\\$&")}"`), o;
  }
  const Mh = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
  function Ph(s) {
    return Mh.test(s) ? s : encodeURI(s);
  }
  const Sh = {
    extension: {
      type: S.LoadParser,
      priority: vt.Low
    },
    name: "loadWebFont",
    id: "web-font",
    test(s) {
      return jt(s, wh) || qt(s, Ah);
    },
    async load(s, t) {
      var _a2, _b, _c2;
      const e = W.get().getFontFaceSet();
      if (e) {
        const i = [], r = ((_a2 = t.data) == null ? void 0 : _a2.family) ?? Ch(s), n = ((_c2 = (_b = t.data) == null ? void 0 : _b.weights) == null ? void 0 : _c2.filter((a) => bh.includes(a))) ?? [
          "normal"
        ], o = t.data ?? {};
        for (let a = 0; a < n.length; a++) {
          const h = n[a], l = new FontFace(r, `url(${Ph(s)})`, {
            ...o,
            weight: h
          });
          await l.load(), e.add(l), i.push(l);
        }
        return Y.has(`${r}-and-url`) ? Y.get(`${r}-and-url`).entries.push({
          url: s,
          faces: i
        }) : Y.set(`${r}-and-url`, {
          entries: [
            {
              url: s,
              faces: i
            }
          ]
        }), i.length === 1 ? i[0] : i;
      }
      return $("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
    },
    unload(s) {
      const t = Array.isArray(s) ? s : [
        s
      ], e = t[0].family, i = Y.get(`${e}-and-url`), r = i.entries.find((n) => n.faces.some((o) => t.indexOf(o) !== -1));
      r.faces = r.faces.filter((n) => t.indexOf(n) === -1), r.faces.length === 0 && (i.entries = i.entries.filter((n) => n !== r)), t.forEach((n) => {
        W.get().getFontFaceSet().delete(n);
      }), i.entries.length === 0 && Y.remove(`${e}-and-url`);
    }
  };
  var xs, Vi;
  function Th() {
    if (Vi) return xs;
    Vi = 1, xs = e;
    var s = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    }, t = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
    function e(n) {
      var o = [];
      return n.replace(t, function(a, h, l) {
        var c = h.toLowerCase();
        for (l = r(l), c == "m" && l.length > 2 && (o.push([
          h
        ].concat(l.splice(0, 2))), c = "l", h = h == "m" ? "l" : "L"); ; ) {
          if (l.length == s[c]) return l.unshift(h), o.push(l);
          if (l.length < s[c]) throw new Error("malformed path data");
          o.push([
            h
          ].concat(l.splice(0, s[c])));
        }
      }), o;
    }
    var i = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
    function r(n) {
      var o = n.match(i);
      return o ? o.map(Number) : [];
    }
    return xs;
  }
  var kh = Th();
  const Eh = Cr(kh);
  function Ih(s, t) {
    const e = Eh(s), i = [];
    let r = null, n = 0, o = 0;
    for (let a = 0; a < e.length; a++) {
      const h = e[a], l = h[0], c = h;
      switch (l) {
        case "M":
          n = c[1], o = c[2], t.moveTo(n, o);
          break;
        case "m":
          n += c[1], o += c[2], t.moveTo(n, o);
          break;
        case "H":
          n = c[1], t.lineTo(n, o);
          break;
        case "h":
          n += c[1], t.lineTo(n, o);
          break;
        case "V":
          o = c[1], t.lineTo(n, o);
          break;
        case "v":
          o += c[1], t.lineTo(n, o);
          break;
        case "L":
          n = c[1], o = c[2], t.lineTo(n, o);
          break;
        case "l":
          n += c[1], o += c[2], t.lineTo(n, o);
          break;
        case "C":
          n = c[5], o = c[6], t.bezierCurveTo(c[1], c[2], c[3], c[4], n, o);
          break;
        case "c":
          t.bezierCurveTo(n + c[1], o + c[2], n + c[3], o + c[4], n + c[5], o + c[6]), n += c[5], o += c[6];
          break;
        case "S":
          n = c[3], o = c[4], t.bezierCurveToShort(c[1], c[2], n, o);
          break;
        case "s":
          t.bezierCurveToShort(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
          break;
        case "Q":
          n = c[3], o = c[4], t.quadraticCurveTo(c[1], c[2], n, o);
          break;
        case "q":
          t.quadraticCurveTo(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
          break;
        case "T":
          n = c[1], o = c[2], t.quadraticCurveToShort(n, o);
          break;
        case "t":
          n += c[1], o += c[2], t.quadraticCurveToShort(n, o);
          break;
        case "A":
          n = c[6], o = c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
          break;
        case "a":
          n += c[6], o += c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
          break;
        case "Z":
        case "z":
          t.closePath(), i.length > 0 && (r = i.pop(), r ? (n = r.startX, o = r.startY) : (n = 0, o = 0)), r = null;
          break;
        default:
          $(`Unknown SVG path command: ${l}`);
      }
      l !== "Z" && l !== "z" && r === null && (r = {
        startX: n,
        startY: o
      }, i.push(r));
    }
    return t;
  }
  class Qs {
    constructor(t = 0, e = 0, i = 0) {
      this.type = "circle", this.x = t, this.y = e, this.radius = i;
    }
    clone() {
      return new Qs(this.x, this.y, this.radius);
    }
    contains(t, e) {
      if (this.radius <= 0) return false;
      const i = this.radius * this.radius;
      let r = this.x - t, n = this.y - e;
      return r *= r, n *= n, r + n <= i;
    }
    strokeContains(t, e, i, r = 0.5) {
      if (this.radius === 0) return false;
      const n = this.x - t, o = this.y - e, a = this.radius, h = (1 - r) * i, l = Math.sqrt(n * n + o * o);
      return l <= a + h && l > a - (i - h);
    }
    getBounds(t) {
      return t || (t = new j()), t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.radius = t.radius, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
    }
  }
  class Js {
    constructor(t = 0, e = 0, i = 0, r = 0) {
      this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = r;
    }
    clone() {
      return new Js(this.x, this.y, this.halfWidth, this.halfHeight);
    }
    contains(t, e) {
      if (this.halfWidth <= 0 || this.halfHeight <= 0) return false;
      let i = (t - this.x) / this.halfWidth, r = (e - this.y) / this.halfHeight;
      return i *= i, r *= r, i + r <= 1;
    }
    strokeContains(t, e, i, r = 0.5) {
      const { halfWidth: n, halfHeight: o } = this;
      if (n <= 0 || o <= 0) return false;
      const a = i * (1 - r), h = i - a, l = n - h, c = o - h, u = n + a, f = o + a, d = t - this.x, p = e - this.y, g = d * d / (l * l) + p * p / (c * c), m = d * d / (u * u) + p * p / (f * f);
      return g > 1 && m <= 1;
    }
    getBounds(t) {
      return t || (t = new j()), t.x = this.x - this.halfWidth, t.y = this.y - this.halfHeight, t.width = this.halfWidth * 2, t.height = this.halfHeight * 2, t;
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
    }
  }
  function Rh(s, t, e, i, r, n) {
    const o = s - e, a = t - i, h = r - e, l = n - i, c = o * h + a * l, u = h * h + l * l;
    let f = -1;
    u !== 0 && (f = c / u);
    let d, p;
    f < 0 ? (d = e, p = i) : f > 1 ? (d = r, p = n) : (d = e + f * h, p = i + f * l);
    const g = s - d, m = t - p;
    return g * g + m * m;
  }
  let Bh, Gh;
  class ue {
    constructor(...t) {
      this.type = "polygon";
      let e = Array.isArray(t[0]) ? t[0] : t;
      if (typeof e[0] != "number") {
        const i = [];
        for (let r = 0, n = e.length; r < n; r++) i.push(e[r].x, e[r].y);
        e = i;
      }
      this.points = e, this.closePath = true;
    }
    isClockwise() {
      let t = 0;
      const e = this.points, i = e.length;
      for (let r = 0; r < i; r += 2) {
        const n = e[r], o = e[r + 1], a = e[(r + 2) % i], h = e[(r + 3) % i];
        t += (a - n) * (h + o);
      }
      return t < 0;
    }
    containsPolygon(t) {
      const e = this.getBounds(Bh), i = t.getBounds(Gh);
      if (!e.containsRect(i)) return false;
      const r = t.points;
      for (let n = 0; n < r.length; n += 2) {
        const o = r[n], a = r[n + 1];
        if (!this.contains(o, a)) return false;
      }
      return true;
    }
    clone() {
      const t = this.points.slice(), e = new ue(t);
      return e.closePath = this.closePath, e;
    }
    contains(t, e) {
      let i = false;
      const r = this.points.length / 2;
      for (let n = 0, o = r - 1; n < r; o = n++) {
        const a = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[o * 2], c = this.points[o * 2 + 1];
        h > e != c > e && t < (l - a) * ((e - h) / (c - h)) + a && (i = !i);
      }
      return i;
    }
    strokeContains(t, e, i, r = 0.5) {
      const n = i * i, o = n * (1 - r), a = n - o, { points: h } = this, l = h.length - (this.closePath ? 0 : 2);
      for (let c = 0; c < l; c += 2) {
        const u = h[c], f = h[c + 1], d = h[(c + 2) % h.length], p = h[(c + 3) % h.length], g = Rh(t, e, u, f, d, p), m = Math.sign((d - u) * (e - f) - (p - f) * (t - u));
        if (g <= (m < 0 ? a : o)) return true;
      }
      return false;
    }
    getBounds(t) {
      t || (t = new j());
      const e = this.points;
      let i = 1 / 0, r = -1 / 0, n = 1 / 0, o = -1 / 0;
      for (let a = 0, h = e.length; a < h; a += 2) {
        const l = e[a], c = e[a + 1];
        i = l < i ? l : i, r = l > r ? l : r, n = c < n ? c : n, o = c > o ? c : o;
      }
      return t.x = i, t.width = r - i, t.y = n, t.height = o - n, t;
    }
    copyFrom(t) {
      return this.points = t.points.slice(), this.closePath = t.closePath, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    toString() {
      return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t, e) => `${t}, ${e}`, "")}]`;
    }
    get lastX() {
      return this.points[this.points.length - 2];
    }
    get lastY() {
      return this.points[this.points.length - 1];
    }
    get x() {
      return F("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."), this.points[this.points.length - 2];
    }
    get y() {
      return F("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."), this.points[this.points.length - 1];
    }
    get startX() {
      return this.points[0];
    }
    get startY() {
      return this.points[1];
    }
  }
  const Fe = (s, t, e, i, r, n, o) => {
    const a = s - e, h = t - i, l = Math.sqrt(a * a + h * h);
    return l >= r - n && l <= r + o;
  };
  class ti {
    constructor(t = 0, e = 0, i = 0, r = 0, n = 20) {
      this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n;
    }
    getBounds(t) {
      return t || (t = new j()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
    }
    clone() {
      return new ti(this.x, this.y, this.width, this.height, this.radius);
    }
    copyFrom(t) {
      return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
    }
    copyTo(t) {
      return t.copyFrom(this), t;
    }
    contains(t, e) {
      if (this.width <= 0 || this.height <= 0) return false;
      if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
        const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
        if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i) return true;
        let r = t - (this.x + i), n = e - (this.y + i);
        const o = i * i;
        if (r * r + n * n <= o || (r = t - (this.x + this.width - i), r * r + n * n <= o) || (n = e - (this.y + this.height - i), r * r + n * n <= o) || (r = t - (this.x + i), r * r + n * n <= o)) return true;
      }
      return false;
    }
    strokeContains(t, e, i, r = 0.5) {
      const { x: n, y: o, width: a, height: h, radius: l } = this, c = i * (1 - r), u = i - c, f = n + l, d = o + l, p = a - l * 2, g = h - l * 2, m = n + a, y = o + h;
      return (t >= n - c && t <= n + u || t >= m - u && t <= m + c) && e >= d && e <= d + g || (e >= o - c && e <= o + u || e >= y - u && e <= y + c) && t >= f && t <= f + p ? true : t < f && e < d && Fe(t, e, f, d, l, u, c) || t > m - l && e < d && Fe(t, e, m - l, d, l, u, c) || t > m - l && e > y - l && Fe(t, e, m - l, y - l, l, u, c) || t < f && e > y - l && Fe(t, e, f, y - l, l, u, c);
    }
    toString() {
      return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
    }
  }
  const En = {};
  Fh = function(s, t, e) {
    let i = 2166136261;
    for (let r = 0; r < t; r++) i ^= s[r].uid, i = Math.imul(i, 16777619), i >>>= 0;
    return En[i] || Dh(s, t, i, e);
  };
  function Dh(s, t, e, i) {
    const r = {};
    let n = 0;
    for (let a = 0; a < i; a++) {
      const h = a < t ? s[a] : G.EMPTY.source;
      r[n++] = h.source, r[n++] = h.style;
    }
    const o = new Oe(r);
    return En[e] = o, o;
  }
  class Wi {
    constructor(t) {
      typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
    }
    get int8View() {
      return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
    }
    get uint8View() {
      return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
    }
    get int16View() {
      return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
    }
    get int32View() {
      return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
    }
    get float64View() {
      return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array;
    }
    get bigUint64View() {
      return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array;
    }
    view(t) {
      return this[`${t}View`];
    }
    destroy() {
      this.rawBinaryData = null, this.uint32View = null, this.float32View = null, this.uint16View = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._int32View = null, this._float64Array = null, this._bigUint64Array = null;
    }
    static sizeOf(t) {
      switch (t) {
        case "int8":
        case "uint8":
          return 1;
        case "int16":
        case "uint16":
          return 2;
        case "int32":
        case "uint32":
        case "float32":
          return 4;
        default:
          throw new Error(`${t} isn't a valid view type`);
      }
    }
  }
  Hi = function(s, t, e, i) {
    if (e ?? (e = 0), i ?? (i = Math.min(s.byteLength - e, t.byteLength)), !(e & 7) && !(i & 7)) {
      const r = i / 8;
      new Float64Array(t, 0, r).set(new Float64Array(s, e, r));
    } else if (!(e & 3) && !(i & 3)) {
      const r = i / 4;
      new Float32Array(t, 0, r).set(new Float32Array(s, e, r));
    } else new Uint8Array(t).set(new Uint8Array(s, e, i));
  };
  const Lh = {
    normal: "normal-npm",
    add: "add-npm",
    screen: "screen-npm"
  };
  Oh = ((s) => (s[s.DISABLED = 0] = "DISABLED", s[s.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", s[s.MASK_ACTIVE = 2] = "MASK_ACTIVE", s[s.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE", s[s.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE", s[s.NONE = 5] = "NONE", s))(Oh || {});
  function Xi(s, t) {
    return t.alphaMode === "no-premultiply-alpha" && Lh[s] || s;
  }
  const zh = [
    "precision mediump float;",
    "void main(void){",
    "float test = 0.1;",
    "%forloop%",
    "gl_FragColor = vec4(0.0);",
    "}"
  ].join(`
`);
  function Uh(s) {
    let t = "";
    for (let e = 0; e < s; ++e) e > 0 && (t += `
else `), e < s - 1 && (t += `if(test == ${e}.0){}`);
    return t;
  }
  Nh = function(s, t) {
    if (s === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    const e = t.createShader(t.FRAGMENT_SHADER);
    try {
      for (; ; ) {
        const i = zh.replace(/%forloop%/gi, Uh(s));
        if (t.shaderSource(e, i), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS)) s = s / 2 | 0;
        else break;
      }
    } finally {
      t.deleteShader(e);
    }
    return s;
  };
  let Ft = null;
  function $h() {
    var _a2;
    if (Ft) return Ft;
    const s = nn();
    return Ft = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), Ft = Nh(Ft, s), (_a2 = s.getExtension("WEBGL_lose_context")) == null ? void 0 : _a2.loseContext(), Ft;
  }
  class Vh {
    constructor() {
      this.ids = /* @__PURE__ */ Object.create(null), this.textures = [], this.count = 0;
    }
    clear() {
      for (let t = 0; t < this.count; t++) {
        const e = this.textures[t];
        this.textures[t] = null, this.ids[e.uid] = null;
      }
      this.count = 0;
    }
  }
  class Wh {
    constructor() {
      this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.textures = new Vh(), this.blendMode = "normal", this.topology = "triangle-strip", this.canBundle = true;
    }
    destroy() {
      this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null, this.elements = null;
    }
  }
  const de = [];
  let $e = 0;
  Ve.register({
    clear: () => {
      if (de.length > 0) for (const s of de) s && s.destroy();
      de.length = 0, $e = 0;
    }
  });
  function Yi() {
    return $e > 0 ? de[--$e] : new Wh();
  }
  function ji(s) {
    s.elements = null, de[$e++] = s;
  }
  let ee = 0;
  const In = class Rn {
    constructor(t) {
      this.uid = V("batcher"), this.dirty = true, this.batchIndex = 0, this.batches = [], this._elements = [], t = {
        ...Rn.defaultOptions,
        ...t
      }, t.maxTextures || (F("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options"), t.maxTextures = $h());
      const { maxTextures: e, attributesInitialSize: i, indicesInitialSize: r } = t;
      this.attributeBuffer = new Wi(i * 4), this.indexBuffer = new Uint16Array(r), this.maxTextures = e;
    }
    begin() {
      this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0;
      for (let t = 0; t < this.batchIndex; t++) ji(this.batches[t]);
      this.batchIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = true;
    }
    add(t) {
      this._elements[this.elementSize++] = t, t._indexStart = this.indexSize, t._attributeStart = this.attributeSize, t._batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.attributeSize * this.vertexSize;
    }
    checkAndUpdateTexture(t, e) {
      const i = t._batch.textures.ids[e._source.uid];
      return !i && i !== 0 ? false : (t._textureId = i, t.texture = e, true);
    }
    updateElement(t) {
      this.dirty = true;
      const e = this.attributeBuffer;
      t.packAsQuad ? this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId) : this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId);
    }
    break(t) {
      const e = this._elements;
      if (!e[this.elementStart]) return;
      let i = Yi(), r = i.textures;
      r.clear();
      const n = e[this.elementStart];
      let o = Xi(n.blendMode, n.texture._source), a = n.topology;
      this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
      const h = this.attributeBuffer.float32View, l = this.attributeBuffer.uint32View, c = this.indexBuffer;
      let u = this._batchIndexSize, f = this._batchIndexStart, d = "startBatch", p = [];
      const g = this.maxTextures;
      for (let m = this.elementStart; m < this.elementSize; ++m) {
        const y = e[m];
        e[m] = null;
        const _ = y.texture._source, b = Xi(y.blendMode, _), C = o !== b || a !== y.topology;
        if (_._batchTick === ee && !C) {
          y._textureId = _._textureBindLocation, u += y.indexSize, y.packAsQuad ? (this.packQuadAttributes(y, h, l, y._attributeStart, y._textureId), this.packQuadIndex(c, y._indexStart, y._attributeStart / this.vertexSize)) : (this.packAttributes(y, h, l, y._attributeStart, y._textureId), this.packIndex(y, c, y._indexStart, y._attributeStart / this.vertexSize)), y._batch = i, p.push(y);
          continue;
        }
        _._batchTick = ee, (r.count >= g || C) && (this._finishBatch(i, f, u - f, r, o, a, t, d, p), d = "renderBatch", f = u, o = b, a = y.topology, i = Yi(), r = i.textures, r.clear(), p = [], ++ee), y._textureId = _._textureBindLocation = r.count, r.ids[_.uid] = r.count, r.textures[r.count++] = _, y._batch = i, p.push(y), u += y.indexSize, y.packAsQuad ? (this.packQuadAttributes(y, h, l, y._attributeStart, y._textureId), this.packQuadIndex(c, y._indexStart, y._attributeStart / this.vertexSize)) : (this.packAttributes(y, h, l, y._attributeStart, y._textureId), this.packIndex(y, c, y._indexStart, y._attributeStart / this.vertexSize));
      }
      r.count > 0 && (this._finishBatch(i, f, u - f, r, o, a, t, d, p), f = u, ++ee), this.elementStart = this.elementSize, this._batchIndexStart = f, this._batchIndexSize = u;
    }
    _finishBatch(t, e, i, r, n, o, a, h, l) {
      t.gpuBindGroup = null, t.bindGroup = null, t.action = h, t.batcher = this, t.textures = r, t.blendMode = n, t.topology = o, t.start = e, t.size = i, t.elements = l, ++ee, this.batches[this.batchIndex++] = t, a.add(t);
    }
    finish(t) {
      this.break(t);
    }
    ensureAttributeBuffer(t) {
      t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4);
    }
    ensureIndexBuffer(t) {
      t <= this.indexBuffer.length || this._resizeIndexBuffer(t);
    }
    _resizeAttributeBuffer(t) {
      const e = Math.max(t, this.attributeBuffer.size * 2), i = new Wi(e);
      Hi(this.attributeBuffer.rawBinaryData, i.rawBinaryData), this.attributeBuffer = i;
    }
    _resizeIndexBuffer(t) {
      const e = this.indexBuffer;
      let i = Math.max(t, e.length * 1.5);
      i += i % 2;
      const r = i > 65535 ? new Uint32Array(i) : new Uint16Array(i);
      if (r.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT) for (let n = 0; n < e.length; n++) r[n] = e[n];
      else Hi(e.buffer, r.buffer);
      this.indexBuffer = r;
    }
    packQuadIndex(t, e, i) {
      t[e] = i + 0, t[e + 1] = i + 1, t[e + 2] = i + 2, t[e + 3] = i + 0, t[e + 4] = i + 2, t[e + 5] = i + 3;
    }
    packIndex(t, e, i, r) {
      const n = t.indices, o = t.indexSize, a = t.indexOffset, h = t.attributeOffset;
      for (let l = 0; l < o; l++) e[i++] = r + n[l + a] - h;
    }
    destroy(t = {}) {
      var _a2;
      if (this.batches !== null) {
        for (let e = 0; e < this.batchIndex; e++) ji(this.batches[e]);
        this.batches = null, this.geometry.destroy(true), this.geometry = null, t.shader && ((_a2 = this.shader) == null ? void 0 : _a2.destroy(), this.shader = null);
        for (let e = 0; e < this._elements.length; e++) this._elements[e] && (this._elements[e]._batch = null);
        this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
      }
    }
  };
  In.defaultOptions = {
    maxTextures: null,
    attributesInitialSize: 4,
    indicesInitialSize: 6
  };
  let Hh = In;
  J = ((s) => (s[s.MAP_READ = 1] = "MAP_READ", s[s.MAP_WRITE = 2] = "MAP_WRITE", s[s.COPY_SRC = 4] = "COPY_SRC", s[s.COPY_DST = 8] = "COPY_DST", s[s.INDEX = 16] = "INDEX", s[s.VERTEX = 32] = "VERTEX", s[s.UNIFORM = 64] = "UNIFORM", s[s.STORAGE = 128] = "STORAGE", s[s.INDIRECT = 256] = "INDIRECT", s[s.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", s[s.STATIC = 1024] = "STATIC", s))(J || {});
  ye = class extends _t {
    constructor(t) {
      let { data: e, size: i } = t;
      const { usage: r, label: n, shrinkToFit: o } = t;
      super(), this._gpuData = /* @__PURE__ */ Object.create(null), this._gcLastUsed = -1, this.autoGarbageCollect = true, this.uid = V("buffer"), this._resourceType = "buffer", this._resourceId = V("resource"), this._touched = 0, this._updateID = 1, this._dataInt32 = null, this.shrinkToFit = true, this.destroyed = false, e instanceof Array && (e = new Float32Array(e)), this._data = e, i ?? (i = e == null ? void 0 : e.byteLength);
      const a = !!e;
      this.descriptor = {
        size: i,
        usage: r,
        mappedAtCreation: a,
        label: n
      }, this.shrinkToFit = o ?? true;
    }
    get data() {
      return this._data;
    }
    set data(t) {
      this.setDataWithSize(t, t.length, true);
    }
    get dataInt32() {
      return this._dataInt32 || (this._dataInt32 = new Int32Array(this.data.buffer)), this._dataInt32;
    }
    get static() {
      return !!(this.descriptor.usage & J.STATIC);
    }
    set static(t) {
      t ? this.descriptor.usage |= J.STATIC : this.descriptor.usage &= ~J.STATIC;
    }
    setDataWithSize(t, e, i) {
      if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
        i && this.emit("update", this);
        return;
      }
      const r = this._data;
      if (this._data = t, this._dataInt32 = null, !r || r.length !== t.length) {
        !this.shrinkToFit && r && t.byteLength < r.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = V("resource"), this.emit("change", this));
        return;
      }
      i && this.emit("update", this);
    }
    update(t) {
      this._updateSize = t ?? this._updateSize, this._updateID++, this.emit("update", this);
    }
    unload() {
      var _a2;
      this.emit("unload", this);
      for (const t in this._gpuData) (_a2 = this._gpuData[t]) == null ? void 0 : _a2.destroy();
      this._gpuData = /* @__PURE__ */ Object.create(null);
    }
    destroy() {
      this.destroyed = true, this.unload(), this.emit("destroy", this), this.emit("change", this), this._data = null, this.descriptor = null, this.removeAllListeners();
    }
  };
  function Bn(s, t) {
    if (!(s instanceof ye)) {
      let e = t ? J.INDEX : J.VERTEX;
      s instanceof Array && (t ? (s = new Uint32Array(s), e = J.INDEX | J.COPY_DST) : (s = new Float32Array(s), e = J.VERTEX | J.COPY_DST)), s = new ye({
        data: s,
        label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
        usage: e
      });
    }
    return s;
  }
  function Xh(s, t, e) {
    const i = s.getAttribute(t);
    if (!i) return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e;
    const r = i.buffer.data;
    let n = 1 / 0, o = 1 / 0, a = -1 / 0, h = -1 / 0;
    const l = r.BYTES_PER_ELEMENT, c = (i.offset || 0) / l, u = (i.stride || 8) / l;
    for (let f = c; f < r.length; f += u) {
      const d = r[f], p = r[f + 1];
      d > a && (a = d), p > h && (h = p), d < n && (n = d), p < o && (o = p);
    }
    return e.minX = n, e.minY = o, e.maxX = a, e.maxY = h, e;
  }
  function Yh(s) {
    return (s instanceof ye || Array.isArray(s) || s.BYTES_PER_ELEMENT) && (s = {
      buffer: s
    }), s.buffer = Bn(s.buffer, false), s;
  }
  jh = class extends _t {
    constructor(t = {}) {
      super(), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = true, this._gcLastUsed = -1, this.uid = V("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new ht(), this._boundsDirty = true;
      const { attributes: e, indexBuffer: i, topology: r } = t;
      if (this.buffers = [], this.attributes = {}, e) for (const n in e) this.addAttribute(n, e[n]);
      this.instanceCount = t.instanceCount ?? 1, i && this.addIndex(i), this.topology = r || "triangle-list";
    }
    onBufferUpdate() {
      this._boundsDirty = true, this.emit("update", this);
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    getIndex() {
      return this.indexBuffer;
    }
    getBuffer(t) {
      return this.getAttribute(t).buffer;
    }
    getSize() {
      for (const t in this.attributes) {
        const e = this.attributes[t];
        return e.buffer.data.length / (e.stride / 4 || e.size);
      }
      return 0;
    }
    addAttribute(t, e) {
      const i = Yh(e);
      this.buffers.indexOf(i.buffer) === -1 && (this.buffers.push(i.buffer), i.buffer.on("update", this.onBufferUpdate, this), i.buffer.on("change", this.onBufferUpdate, this)), this.attributes[t] = i;
    }
    addIndex(t) {
      this.indexBuffer = Bn(t, true), this.buffers.push(this.indexBuffer);
    }
    get bounds() {
      return this._boundsDirty ? (this._boundsDirty = false, Xh(this, "aPosition", this._bounds)) : this._bounds;
    }
    unload() {
      var _a2;
      this.emit("unload", this);
      for (const t in this._gpuData) (_a2 = this._gpuData[t]) == null ? void 0 : _a2.destroy();
      this._gpuData = /* @__PURE__ */ Object.create(null);
    }
    destroy(t = false) {
      var _a2;
      this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach((e) => e.destroy()), this.unload(), (_a2 = this.indexBuffer) == null ? void 0 : _a2.destroy(), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
    }
  };
  const qh = new Float32Array(1), Zh = new Uint32Array(1);
  class Kh extends jh {
    constructor() {
      const e = new ye({
        data: qh,
        label: "attribute-batch-buffer",
        usage: J.VERTEX | J.COPY_DST,
        shrinkToFit: false
      }), i = new ye({
        data: Zh,
        label: "index-batch-buffer",
        usage: J.INDEX | J.COPY_DST,
        shrinkToFit: false
      }), r = 24;
      super({
        attributes: {
          aPosition: {
            buffer: e,
            format: "float32x2",
            stride: r,
            offset: 0
          },
          aUV: {
            buffer: e,
            format: "float32x2",
            stride: r,
            offset: 8
          },
          aColor: {
            buffer: e,
            format: "unorm8x4",
            stride: r,
            offset: 16
          },
          aTextureIdAndRound: {
            buffer: e,
            format: "uint16x2",
            stride: r,
            offset: 20
          }
        },
        indexBuffer: i
      });
    }
  }
  function qi(s, t, e) {
    if (s) for (const i in s) {
      const r = i.toLocaleLowerCase(), n = t[r];
      if (n) {
        let o = s[i];
        i === "header" && (o = o.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(o);
      } else $(`${i} placement hook does not exist in shader`);
    }
  }
  const Qh = /\{\{(.*?)\}\}/g;
  function Zi(s) {
    var _a2;
    const t = {};
    return (((_a2 = s.match(Qh)) == null ? void 0 : _a2.map((i) => i.replace(/[{()}]/g, ""))) ?? []).forEach((i) => {
      t[i] = [];
    }), t;
  }
  function Ki(s, t) {
    let e;
    const i = /@in\s+([^;]+);/g;
    for (; (e = i.exec(s)) !== null; ) t.push(e[1]);
  }
  function Qi(s, t, e = false) {
    const i = [];
    Ki(t, i), s.forEach((a) => {
      a.header && Ki(a.header, i);
    });
    const r = i;
    e && r.sort();
    const n = r.map((a, h) => `       @location(${h}) ${a},`).join(`
`);
    let o = t.replace(/@in\s+[^;]+;\s*/g, "");
    return o = o.replace("{{in}}", `
${n}
`), o;
  }
  function Ji(s, t) {
    let e;
    const i = /@out\s+([^;]+);/g;
    for (; (e = i.exec(s)) !== null; ) t.push(e[1]);
  }
  function Jh(s) {
    const e = /\b(\w+)\s*:/g.exec(s);
    return e ? e[1] : "";
  }
  function tl(s) {
    const t = /@.*?\s+/g;
    return s.replace(t, "");
  }
  function el(s, t) {
    const e = [];
    Ji(t, e), s.forEach((h) => {
      h.header && Ji(h.header, e);
    });
    let i = 0;
    const r = e.sort().map((h) => h.indexOf("builtin") > -1 ? h : `@location(${i++}) ${h}`).join(`,
`), n = e.sort().map((h) => `       var ${tl(h)};`).join(`
`), o = `return VSOutput(
            ${e.sort().map((h) => ` ${Jh(h)}`).join(`,
`)});`;
    let a = t.replace(/@out\s+[^;]+;\s*/g, "");
    return a = a.replace("{{struct}}", `
${r}
`), a = a.replace("{{start}}", `
${n}
`), a = a.replace("{{return}}", `
${o}
`), a;
  }
  function tr(s, t) {
    let e = s;
    for (const i in t) {
      const r = t[i];
      r.join(`
`).length ? e = e.replace(`{{${i}}}`, `//-----${i} START-----//
${r.join(`
`)}
//----${i} FINISH----//`) : e = e.replace(`{{${i}}}`, "");
    }
    return e;
  }
  const wt = /* @__PURE__ */ Object.create(null), _s = /* @__PURE__ */ new Map();
  let sl = 0;
  function il({ template: s, bits: t }) {
    const e = Gn(s, t);
    if (wt[e]) return wt[e];
    const { vertex: i, fragment: r } = nl(s, t);
    return wt[e] = Fn(i, r, t), wt[e];
  }
  function rl({ template: s, bits: t }) {
    const e = Gn(s, t);
    return wt[e] || (wt[e] = Fn(s.vertex, s.fragment, t)), wt[e];
  }
  function nl(s, t) {
    const e = t.map((o) => o.vertex).filter((o) => !!o), i = t.map((o) => o.fragment).filter((o) => !!o);
    let r = Qi(e, s.vertex, true);
    r = el(e, r);
    const n = Qi(i, s.fragment, true);
    return {
      vertex: r,
      fragment: n
    };
  }
  function Gn(s, t) {
    return t.map((e) => (_s.has(e) || _s.set(e, sl++), _s.get(e))).sort((e, i) => e - i).join("-") + s.vertex + s.fragment;
  }
  function Fn(s, t, e) {
    const i = Zi(s), r = Zi(t);
    return e.forEach((n) => {
      qi(n.vertex, i, n.name), qi(n.fragment, r, n.name);
    }), {
      vertex: tr(s, i),
      fragment: tr(t, r)
    };
  }
  const ol = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`, al = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`, hl = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`, ll = `

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`, cl = {
    name: "global-uniforms-bit",
    vertex: {
      header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
    }
  }, ul = {
    name: "global-uniforms-bit",
    vertex: {
      header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
    }
  };
  dl = function({ bits: s, name: t }) {
    const e = il({
      template: {
        fragment: al,
        vertex: ol
      },
      bits: [
        cl,
        ...s
      ]
    });
    return He.from({
      name: t,
      vertex: {
        source: e.vertex,
        entryPoint: "main"
      },
      fragment: {
        source: e.fragment,
        entryPoint: "main"
      }
    });
  };
  fl = function({ bits: s, name: t }) {
    return new an({
      name: t,
      ...rl({
        template: {
          vertex: hl,
          fragment: ll
        },
        bits: [
          ul,
          ...s
        ]
      })
    });
  };
  let bs;
  pl = {
    name: "color-bit",
    vertex: {
      header: `
            @in aColor: vec4<f32>;
        `,
      main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
    }
  };
  ml = {
    name: "color-bit",
    vertex: {
      header: `
            in vec4 aColor;
        `,
      main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
    }
  };
  bs = {};
  function gl(s) {
    const t = [];
    if (s === 1) t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
    else {
      let e = 0;
      for (let i = 0; i < s; i++) t.push(`@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`);
    }
    return t.join(`
`);
  }
  function yl(s) {
    const t = [];
    if (s === 1) t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
    else {
      t.push("switch vTextureId {");
      for (let e = 0; e < s; e++) e === s - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
      t.push("}");
    }
    return t.join(`
`);
  }
  xl = function(s) {
    return bs[s] || (bs[s] = {
      name: "texture-batch-bit",
      vertex: {
        header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
        main: `
                vTextureId = aTextureIdAndRound.y;
            `,
        end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
      },
      fragment: {
        header: `
                @in @interpolate(flat) vTextureId: u32;

                ${gl(s)}
            `,
        main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${yl(s)}
            `
      }
    }), bs[s];
  };
  const As = {};
  function _l(s) {
    const t = [];
    for (let e = 0; e < s; e++) e > 0 && t.push("else"), e < s - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
    return t.join(`
`);
  }
  bl = function(s) {
    return As[s] || (As[s] = {
      name: "texture-batch-bit",
      vertex: {
        header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,
        main: `
                vTextureId = aTextureIdAndRound.y;
            `,
        end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
      },
      fragment: {
        header: `
                in float vTextureId;

                uniform sampler2D uTextures[${s}];

            `,
        main: `

                ${_l(s)}
            `
      }
    }), As[s];
  };
  let er;
  Al = {
    name: "round-pixels-bit",
    vertex: {
      header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    }
  };
  wl = {
    name: "round-pixels-bit",
    vertex: {
      header: `
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `
    }
  };
  er = {};
  vl = function(s) {
    let t = er[s];
    if (t) return t;
    const e = new Int32Array(s);
    for (let i = 0; i < s; i++) e[i] = i;
    return t = er[s] = new un({
      uTextures: {
        value: e,
        type: "i32",
        size: s
      }
    }, {
      isStatic: true
    }), t;
  };
  class sr extends Ks {
    constructor(t) {
      const e = fl({
        name: "batch",
        bits: [
          ml,
          bl(t),
          wl
        ]
      }), i = dl({
        name: "batch",
        bits: [
          pl,
          xl(t),
          Al
        ]
      });
      super({
        glProgram: e,
        gpuProgram: i,
        resources: {
          batchSamplers: vl(t)
        }
      }), this.maxTextures = t;
    }
  }
  let se = null;
  const Dn = class Ln extends Hh {
    constructor(t) {
      super(t), this.geometry = new Kh(), this.name = Ln.extension.name, this.vertexSize = 6, se ?? (se = new sr(t.maxTextures)), this.shader = se;
    }
    packAttributes(t, e, i, r, n) {
      const o = n << 16 | t.roundPixels & 65535, a = t.transform, h = a.a, l = a.b, c = a.c, u = a.d, f = a.tx, d = a.ty, { positions: p, uvs: g } = t, m = t.color, y = t.attributeOffset, x = y + t.attributeSize;
      for (let _ = y; _ < x; _++) {
        const b = _ * 2, C = p[b], A = p[b + 1];
        e[r++] = h * C + c * A + f, e[r++] = u * A + l * C + d, e[r++] = g[b], e[r++] = g[b + 1], i[r++] = m, i[r++] = o;
      }
    }
    packQuadAttributes(t, e, i, r, n) {
      const o = t.texture, a = t.transform, h = a.a, l = a.b, c = a.c, u = a.d, f = a.tx, d = a.ty, p = t.bounds, g = p.maxX, m = p.minX, y = p.maxY, x = p.minY, _ = o.uvs, b = t.color, C = n << 16 | t.roundPixels & 65535;
      e[r + 0] = h * m + c * x + f, e[r + 1] = u * x + l * m + d, e[r + 2] = _.x0, e[r + 3] = _.y0, i[r + 4] = b, i[r + 5] = C, e[r + 6] = h * g + c * x + f, e[r + 7] = u * x + l * g + d, e[r + 8] = _.x1, e[r + 9] = _.y1, i[r + 10] = b, i[r + 11] = C, e[r + 12] = h * g + c * y + f, e[r + 13] = u * y + l * g + d, e[r + 14] = _.x2, e[r + 15] = _.y2, i[r + 16] = b, i[r + 17] = C, e[r + 18] = h * m + c * y + f, e[r + 19] = u * y + l * m + d, e[r + 20] = _.x3, e[r + 21] = _.y3, i[r + 22] = b, i[r + 23] = C;
    }
    _updateMaxTextures(t) {
      this.shader.maxTextures !== t && (se = new sr(t), this.shader = se);
    }
    destroy() {
      this.shader = null, super.destroy();
    }
  };
  Dn.extension = {
    type: [
      S.Batcher
    ],
    name: "default"
  };
  Cl = Dn;
  Ye = class {
    constructor(t) {
      this.items = /* @__PURE__ */ Object.create(null);
      const { renderer: e, type: i, onUnload: r, priority: n, name: o } = t;
      this._renderer = e, e.gc.addResourceHash(this, "items", i, n ?? 0), this._onUnload = r, this.name = o;
    }
    add(t) {
      return this.items[t.uid] ? false : (this.items[t.uid] = t, t.once("unload", this.remove, this), t._gcLastUsed = this._renderer.gc.now, true);
    }
    remove(t, ...e) {
      var _a2;
      if (!this.items[t.uid]) return;
      const i = t._gpuData[this._renderer.uid];
      i && ((_a2 = this._onUnload) == null ? void 0 : _a2.call(this, t, ...e), i.destroy(), t._gpuData[this._renderer.uid] = null, this.items[t.uid] = null);
    }
    removeAll(...t) {
      Object.values(this.items).forEach((e) => e && this.remove(e, ...t));
    }
    destroy(...t) {
      this.removeAll(...t), this.items = /* @__PURE__ */ Object.create(null), this._renderer = null, this._onUnload = null;
    }
  };
  function Ml(s, t, e, i, r, n, o, a = null) {
    let h = 0;
    e *= t, r *= n;
    const l = a.a, c = a.b, u = a.c, f = a.d, d = a.tx, p = a.ty;
    for (; h < o; ) {
      const g = s[e], m = s[e + 1];
      i[r] = l * g + u * m + d, i[r + 1] = c * g + f * m + p, r += n, e += t, h++;
    }
  }
  function Pl(s, t, e, i) {
    let r = 0;
    for (t *= e; r < i; ) s[t] = 0, s[t + 1] = 0, t += e, r++;
  }
  function On(s, t, e, i, r) {
    const n = t.a, o = t.b, a = t.c, h = t.d, l = t.tx, c = t.ty;
    e || (e = 0), i || (i = 2), r || (r = s.length / i - e);
    let u = e * i;
    for (let f = 0; f < r; f++) {
      const d = s[u], p = s[u + 1];
      s[u] = n * d + a * p + l, s[u + 1] = o * d + h * p + c, u += i;
    }
  }
  const Sl = new B();
  class ei {
    constructor() {
      this.packAsQuad = false, this.batcherName = "default", this.topology = "triangle-list", this.applyTransform = true, this.roundPixels = 0, this._batcher = null, this._batch = null;
    }
    get uvs() {
      return this.geometryData.uvs;
    }
    get positions() {
      return this.geometryData.vertices;
    }
    get indices() {
      return this.geometryData.indices;
    }
    get blendMode() {
      return this.renderable && this.applyTransform ? this.renderable.groupBlendMode : "normal";
    }
    get color() {
      const t = this.baseColor, e = t >> 16 | t & 65280 | (t & 255) << 16, i = this.renderable;
      return i ? Or(e, i.groupColor) + (this.alpha * i.groupAlpha * 255 << 24) : e + (this.alpha * 255 << 24);
    }
    get transform() {
      var _a2;
      return ((_a2 = this.renderable) == null ? void 0 : _a2.groupTransform) || Sl;
    }
    copyTo(t) {
      t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.attributeOffset = this.attributeOffset, t.attributeSize = this.attributeSize, t.baseColor = this.baseColor, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData, t.topology = this.topology;
    }
    reset() {
      this.applyTransform = true, this.renderable = null, this.topology = "triangle-list";
    }
    destroy() {
      this.renderable = null, this.texture = null, this.geometryData = null, this._batcher = null, this._batch = null;
    }
  }
  const xe = {
    extension: {
      type: S.ShapeBuilder,
      name: "circle"
    },
    build(s, t) {
      let e, i, r, n, o, a;
      if (s.type === "circle") {
        const b = s;
        if (o = a = b.radius, o <= 0) return false;
        e = b.x, i = b.y, r = n = 0;
      } else if (s.type === "ellipse") {
        const b = s;
        if (o = b.halfWidth, a = b.halfHeight, o <= 0 || a <= 0) return false;
        e = b.x, i = b.y, r = n = 0;
      } else {
        const b = s, C = b.width / 2, A = b.height / 2;
        e = b.x + C, i = b.y + A, o = a = Math.max(0, Math.min(b.radius, Math.min(C, A))), r = C - o, n = A - a;
      }
      if (r < 0 || n < 0) return false;
      const h = Math.ceil(2.3 * Math.sqrt(o + a)), l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
      if (l === 0) return false;
      if (h === 0) return t[0] = t[6] = e + r, t[1] = t[3] = i + n, t[2] = t[4] = e - r, t[5] = t[7] = i - n, true;
      let c = 0, u = h * 4 + (r ? 2 : 0) + 2, f = u, d = l, p = r + o, g = n, m = e + p, y = e - p, x = i + g;
      if (t[c++] = m, t[c++] = x, t[--u] = x, t[--u] = y, n) {
        const b = i - g;
        t[f++] = y, t[f++] = b, t[--d] = b, t[--d] = m;
      }
      for (let b = 1; b < h; b++) {
        const C = Math.PI / 2 * (b / h), A = r + Math.cos(C) * o, w = n + Math.sin(C) * a, E = e + A, k = e - A, v = i + w, M = i - w;
        t[c++] = E, t[c++] = v, t[--u] = v, t[--u] = k, t[f++] = k, t[f++] = M, t[--d] = M, t[--d] = E;
      }
      p = r, g = n + a, m = e + p, y = e - p, x = i + g;
      const _ = i - g;
      return t[c++] = m, t[c++] = x, t[--d] = _, t[--d] = m, r && (t[c++] = y, t[c++] = x, t[--d] = _, t[--d] = y), true;
    },
    triangulate(s, t, e, i, r, n) {
      if (s.length === 0) return;
      let o = 0, a = 0;
      for (let c = 0; c < s.length; c += 2) o += s[c], a += s[c + 1];
      o /= s.length / 2, a /= s.length / 2;
      let h = i;
      t[h * e] = o, t[h * e + 1] = a;
      const l = h++;
      for (let c = 0; c < s.length; c += 2) t[h * e] = s[c], t[h * e + 1] = s[c + 1], c > 0 && (r[n++] = h, r[n++] = l, r[n++] = h - 1), h++;
      r[n++] = l + 1, r[n++] = l, r[n++] = h - 1;
    }
  }, Tl = {
    ...xe,
    extension: {
      ...xe.extension,
      name: "ellipse"
    }
  }, kl = {
    ...xe,
    extension: {
      ...xe.extension,
      name: "roundedRectangle"
    }
  }, zn = 1e-4, ir = 1e-4;
  function El(s) {
    const t = s.length;
    if (t < 6) return 1;
    let e = 0;
    for (let i = 0, r = s[t - 2], n = s[t - 1]; i < t; i += 2) {
      const o = s[i], a = s[i + 1];
      e += (o - r) * (a + n), r = o, n = a;
    }
    return e < 0 ? -1 : 1;
  }
  function rr(s, t, e, i, r, n, o, a) {
    const h = s - e * r, l = t - i * r, c = s + e * n, u = t + i * n;
    let f, d;
    o ? (f = i, d = -e) : (f = -i, d = e);
    const p = h + f, g = l + d, m = c + f, y = u + d;
    return a.push(p, g), a.push(m, y), 2;
  }
  function Tt(s, t, e, i, r, n, o, a) {
    const h = e - s, l = i - t;
    let c = Math.atan2(h, l), u = Math.atan2(r - s, n - t);
    a && c < u ? c += Math.PI * 2 : !a && c > u && (u += Math.PI * 2);
    let f = c;
    const d = u - c, p = Math.abs(d), g = Math.sqrt(h * h + l * l), m = (15 * p * Math.sqrt(g) / Math.PI >> 0) + 1, y = d / m;
    if (f += y, a) {
      o.push(s, t), o.push(e, i);
      for (let x = 1, _ = f; x < m; x++, _ += y) o.push(s, t), o.push(s + Math.sin(_) * g, t + Math.cos(_) * g);
      o.push(s, t), o.push(r, n);
    } else {
      o.push(e, i), o.push(s, t);
      for (let x = 1, _ = f; x < m; x++, _ += y) o.push(s + Math.sin(_) * g, t + Math.cos(_) * g), o.push(s, t);
      o.push(r, n), o.push(s, t);
    }
    return m * 2;
  }
  Il = function(s, t, e, i, r, n) {
    const o = zn;
    if (s.length === 0) return;
    const a = t;
    let h = a.alignment;
    if (t.alignment !== 0.5) {
      let R = El(s);
      h = (h - 0.5) * R + 0.5;
    }
    const l = new Z(s[0], s[1]), c = new Z(s[s.length - 2], s[s.length - 1]), u = i, f = Math.abs(l.x - c.x) < o && Math.abs(l.y - c.y) < o;
    if (u) {
      s = s.slice(), f && (s.pop(), s.pop(), c.set(s[s.length - 2], s[s.length - 1]));
      const R = (l.x + c.x) * 0.5, it = (c.y + l.y) * 0.5;
      s.unshift(R, it), s.push(R, it);
    }
    const d = r, p = s.length / 2;
    let g = s.length;
    const m = d.length / 2, y = a.width / 2, x = y * y, _ = a.miterLimit * a.miterLimit;
    let b = s[0], C = s[1], A = s[2], w = s[3], E = 0, k = 0, v = -(C - w), M = b - A, I = 0, O = 0, L = Math.sqrt(v * v + M * M);
    v /= L, M /= L, v *= y, M *= y;
    const K = h, P = (1 - K) * 2, T = K * 2;
    u || (a.cap === "round" ? g += Tt(b - v * (P - T) * 0.5, C - M * (P - T) * 0.5, b - v * P, C - M * P, b + v * T, C + M * T, d, true) + 2 : a.cap === "square" && (g += rr(b, C, v, M, P, T, true, d))), d.push(b - v * P, C - M * P), d.push(b + v * T, C + M * T);
    for (let R = 1; R < p - 1; ++R) {
      b = s[(R - 1) * 2], C = s[(R - 1) * 2 + 1], A = s[R * 2], w = s[R * 2 + 1], E = s[(R + 1) * 2], k = s[(R + 1) * 2 + 1], v = -(C - w), M = b - A, L = Math.sqrt(v * v + M * M), v /= L, M /= L, v *= y, M *= y, I = -(w - k), O = A - E, L = Math.sqrt(I * I + O * O), I /= L, O /= L, I *= y, O *= y;
      const it = A - b, At = C - w, ct = A - E, pt = k - w, ut = it * ct + At * pt, be = At * ct - pt * it, Zt = be < 0;
      if (Math.abs(be) < 1e-3 * Math.abs(ut)) {
        d.push(A - v * P, w - M * P), d.push(A + v * T, w + M * T), ut >= 0 && (a.join === "round" ? g += Tt(A, w, A - v * P, w - M * P, A - I * P, w - O * P, d, false) + 4 : g += 2, d.push(A - I * T, w - O * T), d.push(A + I * P, w + O * P));
        continue;
      }
      const li = (-v + b) * (-M + w) - (-v + A) * (-M + C), ci = (-I + E) * (-O + w) - (-I + A) * (-O + k), Ae = (it * ci - ct * li) / be, we = (pt * li - At * ci) / be, qe = (Ae - A) * (Ae - A) + (we - w) * (we - w), Ct = A + (Ae - A) * P, Mt = w + (we - w) * P, Pt = A - (Ae - A) * T, St = w - (we - w) * T, Zn = Math.min(it * it + At * At, ct * ct + pt * pt), ui = Zt ? P : T, Kn = Zn + ui * ui * x;
      qe <= Kn ? a.join === "bevel" || qe / x > _ ? (Zt ? (d.push(Ct, Mt), d.push(A + v * T, w + M * T), d.push(Ct, Mt), d.push(A + I * T, w + O * T)) : (d.push(A - v * P, w - M * P), d.push(Pt, St), d.push(A - I * P, w - O * P), d.push(Pt, St)), g += 2) : a.join === "round" ? Zt ? (d.push(Ct, Mt), d.push(A + v * T, w + M * T), g += Tt(A, w, A + v * T, w + M * T, A + I * T, w + O * T, d, true) + 4, d.push(Ct, Mt), d.push(A + I * T, w + O * T)) : (d.push(A - v * P, w - M * P), d.push(Pt, St), g += Tt(A, w, A - v * P, w - M * P, A - I * P, w - O * P, d, false) + 4, d.push(A - I * P, w - O * P), d.push(Pt, St)) : (d.push(Ct, Mt), d.push(Pt, St)) : (d.push(A - v * P, w - M * P), d.push(A + v * T, w + M * T), a.join === "round" ? Zt ? g += Tt(A, w, A + v * T, w + M * T, A + I * T, w + O * T, d, true) + 2 : g += Tt(A, w, A - v * P, w - M * P, A - I * P, w - O * P, d, false) + 2 : a.join === "miter" && qe / x <= _ && (Zt ? (d.push(Pt, St), d.push(Pt, St)) : (d.push(Ct, Mt), d.push(Ct, Mt)), g += 2), d.push(A - I * P, w - O * P), d.push(A + I * T, w + O * T), g += 2);
    }
    b = s[(p - 2) * 2], C = s[(p - 2) * 2 + 1], A = s[(p - 1) * 2], w = s[(p - 1) * 2 + 1], v = -(C - w), M = b - A, L = Math.sqrt(v * v + M * M), v /= L, M /= L, v *= y, M *= y, d.push(A - v * P, w - M * P), d.push(A + v * T, w + M * T), u || (a.cap === "round" ? g += Tt(A - v * (P - T) * 0.5, w - M * (P - T) * 0.5, A - v * P, w - M * P, A + v * T, w + M * T, d, false) + 2 : a.cap === "square" && (g += rr(A, w, v, M, P, T, false, d)));
    const bt = ir * ir;
    for (let R = m; R < g + m - 2; ++R) b = d[R * 2], C = d[R * 2 + 1], A = d[(R + 1) * 2], w = d[(R + 1) * 2 + 1], E = d[(R + 2) * 2], k = d[(R + 2) * 2 + 1], !(Math.abs(b * (w - k) + A * (k - C) + E * (C - w)) < bt) && n.push(R, R + 1, R + 2);
  };
  function Rl(s, t, e, i) {
    const r = zn;
    if (s.length === 0) return;
    const n = s[0], o = s[1], a = s[s.length - 2], h = s[s.length - 1], l = t || Math.abs(n - a) < r && Math.abs(o - h) < r, c = e, u = s.length / 2, f = c.length / 2;
    for (let d = 0; d < u; d++) c.push(s[d * 2]), c.push(s[d * 2 + 1]);
    for (let d = 0; d < u - 1; d++) i.push(f + d, f + d + 1);
    l && i.push(f + u - 1, f);
  }
  function Un(s, t, e, i, r, n, o) {
    const a = ja(s, t, 2);
    if (!a) return;
    for (let l = 0; l < a.length; l += 3) n[o++] = a[l] + r, n[o++] = a[l + 1] + r, n[o++] = a[l + 2] + r;
    let h = r * i;
    for (let l = 0; l < s.length; l += 2) e[h] = s[l], e[h + 1] = s[l + 1], h += i;
  }
  const Bl = [], Gl = {
    extension: {
      type: S.ShapeBuilder,
      name: "polygon"
    },
    build(s, t) {
      for (let e = 0; e < s.points.length; e++) t[e] = s.points[e];
      return true;
    },
    triangulate(s, t, e, i, r, n) {
      Un(s, Bl, t, e, i, r, n);
    }
  }, Fl = {
    extension: {
      type: S.ShapeBuilder,
      name: "rectangle"
    },
    build(s, t) {
      const e = s, i = e.x, r = e.y, n = e.width, o = e.height;
      return n > 0 && o > 0 ? (t[0] = i, t[1] = r, t[2] = i + n, t[3] = r, t[4] = i + n, t[5] = r + o, t[6] = i, t[7] = r + o, true) : false;
    },
    triangulate(s, t, e, i, r, n) {
      let o = 0;
      i *= e, t[i + o] = s[0], t[i + o + 1] = s[1], o += e, t[i + o] = s[2], t[i + o + 1] = s[3], o += e, t[i + o] = s[6], t[i + o + 1] = s[7], o += e, t[i + o] = s[4], t[i + o + 1] = s[5], o += e;
      const a = i / e;
      r[n++] = a, r[n++] = a + 1, r[n++] = a + 2, r[n++] = a + 1, r[n++] = a + 3, r[n++] = a + 2;
    }
  }, Dl = {
    extension: {
      type: S.ShapeBuilder,
      name: "triangle"
    },
    build(s, t) {
      return t[0] = s.x, t[1] = s.y, t[2] = s.x2, t[3] = s.y2, t[4] = s.x3, t[5] = s.y3, true;
    },
    triangulate(s, t, e, i, r, n) {
      let o = 0;
      i *= e, t[i + o] = s[0], t[i + o + 1] = s[1], o += e, t[i + o] = s[2], t[i + o + 1] = s[3], o += e, t[i + o] = s[4], t[i + o + 1] = s[5];
      const a = i / e;
      r[n++] = a, r[n++] = a + 1, r[n++] = a + 2;
    }
  }, nr = [
    {
      offset: 0,
      color: "white"
    },
    {
      offset: 1,
      color: "black"
    }
  ], si = class Ns {
    constructor(...t) {
      this.uid = V("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
      let e = Ll(t);
      e = {
        ...e.type === "radial" ? Ns.defaultRadialOptions : Ns.defaultLinearOptions,
        ...Sr(e)
      }, this._textureSize = e.textureSize, this._wrapMode = e.wrapMode, e.type === "radial" ? (this.center = e.center, this.outerCenter = e.outerCenter ?? this.center, this.innerRadius = e.innerRadius, this.outerRadius = e.outerRadius, this.scale = e.scale, this.rotation = e.rotation) : (this.start = e.start, this.end = e.end), this.textureSpace = e.textureSpace, this.type = e.type, e.colorStops.forEach((r) => {
        this.addColorStop(r.offset, r.color);
      });
    }
    addColorStop(t, e) {
      return this.colorStops.push({
        offset: t,
        color: nt.shared.setValue(e).toHexa()
      }), this;
    }
    buildLinearGradient() {
      if (this.texture) return;
      let { x: t, y: e } = this.start, { x: i, y: r } = this.end, n = i - t, o = r - e;
      const a = n < 0 || o < 0;
      if (this._wrapMode === "clamp-to-edge") {
        if (n < 0) {
          const m = t;
          t = i, i = m, n *= -1;
        }
        if (o < 0) {
          const m = e;
          e = r, r = m, o *= -1;
        }
      }
      const h = this.colorStops.length ? this.colorStops : nr, l = this._textureSize, { canvas: c, context: u } = ar(l, 1), f = a ? u.createLinearGradient(this._textureSize, 0, 0, 0) : u.createLinearGradient(0, 0, this._textureSize, 0);
      or(f, h), u.fillStyle = f, u.fillRect(0, 0, l, 1), this.texture = new G({
        source: new Ht({
          resource: c,
          addressMode: this._wrapMode
        })
      });
      const d = Math.sqrt(n * n + o * o), p = Math.atan2(o, n), g = new B();
      g.scale(d / l, 1), g.rotate(p), g.translate(t, e), this.textureSpace === "local" && g.scale(l, l), this.transform = g;
    }
    buildGradient() {
      this.texture || this._tick++, this.type === "linear" ? this.buildLinearGradient() : this.buildRadialGradient();
    }
    buildRadialGradient() {
      if (this.texture) return;
      const t = this.colorStops.length ? this.colorStops : nr, e = this._textureSize, { canvas: i, context: r } = ar(e, e), { x: n, y: o } = this.center, { x: a, y: h } = this.outerCenter, l = this.innerRadius, c = this.outerRadius, u = a - c, f = h - c, d = e / (c * 2), p = (n - u) * d, g = (o - f) * d, m = r.createRadialGradient(p, g, l * d, (a - u) * d, (h - f) * d, c * d);
      or(m, t), r.fillStyle = t[t.length - 1].color, r.fillRect(0, 0, e, e), r.fillStyle = m, r.translate(p, g), r.rotate(this.rotation), r.scale(1, this.scale), r.translate(-p, -g), r.fillRect(0, 0, e, e), this.texture = new G({
        source: new Ht({
          resource: i,
          addressMode: this._wrapMode
        })
      });
      const y = new B();
      y.scale(1 / d, 1 / d), y.translate(u, f), this.textureSpace === "local" && y.scale(e, e), this.transform = y;
    }
    destroy() {
      var _a2;
      (_a2 = this.texture) == null ? void 0 : _a2.destroy(true), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null;
    }
    get styleKey() {
      return `fill-gradient-${this.uid}-${this._tick}`;
    }
  };
  si.defaultLinearOptions = {
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 0,
      y: 1
    },
    colorStops: [],
    textureSpace: "local",
    type: "linear",
    textureSize: 256,
    wrapMode: "clamp-to-edge"
  };
  si.defaultRadialOptions = {
    center: {
      x: 0.5,
      y: 0.5
    },
    innerRadius: 0,
    outerRadius: 0.5,
    colorStops: [],
    scale: 1,
    textureSpace: "local",
    type: "radial",
    textureSize: 256,
    wrapMode: "clamp-to-edge"
  };
  _e = si;
  function or(s, t) {
    for (let e = 0; e < t.length; e++) {
      const i = t[e];
      s.addColorStop(i.offset, i.color);
    }
  }
  function ar(s, t) {
    const e = W.get().createCanvas(s, t), i = e.getContext("2d");
    return {
      canvas: e,
      context: i
    };
  }
  function Ll(s) {
    let t = s[0] ?? {};
    return (typeof t == "number" || s[1]) && (F("8.5.2", "use options object instead"), t = {
      type: "linear",
      start: {
        x: s[0],
        y: s[1]
      },
      end: {
        x: s[2],
        y: s[3]
      },
      textureSpace: s[4],
      textureSize: s[5] ?? _e.defaultLinearOptions.textureSize
    }), t;
  }
  const Ol = new B(), zl = new j();
  Ul = function(s, t, e, i) {
    const r = t.matrix ? s.copyFrom(t.matrix).invert() : s.identity();
    if (t.textureSpace === "local") {
      const o = e.getBounds(zl);
      t.width && o.pad(t.width);
      const { x: a, y: h } = o, l = 1 / o.width, c = 1 / o.height, u = -a * l, f = -h * c, d = r.a, p = r.b, g = r.c, m = r.d;
      r.a *= l, r.b *= l, r.c *= c, r.d *= c, r.tx = u * d + f * g + r.tx, r.ty = u * p + f * m + r.ty;
    } else r.translate(t.texture.frame.x, t.texture.frame.y), r.scale(1 / t.texture.source.width, 1 / t.texture.source.height);
    const n = t.texture.source.style;
    return !(t.fill instanceof _e) && n.addressMode === "clamp-to-edge" && (n.addressMode = "repeat", n.update()), i && r.append(Ol.copyFrom(i).invert()), r;
  };
  je = {};
  U.handleByMap(S.ShapeBuilder, je);
  U.add(Fl, Gl, Dl, xe, Tl, kl);
  const Nl = new j(), $l = new B();
  function Vl(s, t) {
    const { geometryData: e, batches: i } = t;
    i.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0;
    for (let r = 0; r < s.instructions.length; r++) {
      const n = s.instructions[r];
      if (n.action === "texture") Wl(n.data, i, e);
      else if (n.action === "fill" || n.action === "stroke") {
        const o = n.action === "stroke", a = n.data.path.shapePath, h = n.data.style, l = n.data.hole;
        o && l && hr(l.shapePath, h, true, i, e), l && (a.shapePrimitives[a.shapePrimitives.length - 1].holes = l.shapePath.shapePrimitives), hr(a, h, o, i, e);
      }
    }
  }
  function Wl(s, t, e) {
    const i = [], r = je.rectangle, n = Nl;
    n.x = s.dx, n.y = s.dy, n.width = s.dw, n.height = s.dh;
    const o = s.transform;
    if (!r.build(n, i)) return;
    const { vertices: a, uvs: h, indices: l } = e, c = l.length, u = a.length / 2;
    o && On(i, o), r.triangulate(i, a, 2, u, l, c);
    const f = s.image, d = f.uvs;
    h.push(d.x0, d.y0, d.x1, d.y1, d.x3, d.y3, d.x2, d.y2);
    const p = tt.get(ei);
    p.indexOffset = c, p.indexSize = l.length - c, p.attributeOffset = u, p.attributeSize = a.length / 2 - u, p.baseColor = s.style, p.alpha = s.alpha, p.texture = f, p.geometryData = e, t.push(p);
  }
  function hr(s, t, e, i, r) {
    const { vertices: n, uvs: o, indices: a } = r;
    s.shapePrimitives.forEach(({ shape: h, transform: l, holes: c }) => {
      const u = [], f = je[h.type];
      if (!f.build(h, u)) return;
      const d = a.length, p = n.length / 2;
      let g = "triangle-list";
      if (l && On(u, l), e) {
        const _ = h.closePath ?? true, b = t;
        b.pixelLine ? (Rl(u, _, n, a), g = "line-list") : Il(u, b, false, _, n, a);
      } else if (c) {
        const _ = [], b = u.slice();
        Hl(c).forEach((A) => {
          _.push(b.length / 2), b.push(...A);
        }), Un(b, _, n, 2, p, a, d);
      } else f.triangulate(u, n, 2, p, a, d);
      const m = o.length / 2, y = t.texture;
      if (y !== G.WHITE) {
        const _ = Ul($l, t, h, l);
        Ml(n, 2, p, o, m, 2, n.length / 2 - p, _);
      } else Pl(o, m, 2, n.length / 2 - p);
      const x = tt.get(ei);
      x.indexOffset = d, x.indexSize = a.length - d, x.attributeOffset = p, x.attributeSize = n.length / 2 - p, x.baseColor = t.color, x.alpha = t.alpha, x.texture = y, x.geometryData = r, x.topology = g, i.push(x);
    });
  }
  function Hl(s) {
    const t = [];
    for (let e = 0; e < s.length; e++) {
      const i = s[e].shape, r = [];
      je[i.type].build(i, r) && t.push(r);
    }
    return t;
  }
  class Xl {
    constructor() {
      this.batches = [], this.geometryData = {
        vertices: [],
        uvs: [],
        indices: []
      };
    }
    reset() {
      this.batches && this.batches.forEach((t) => {
        tt.return(t);
      }), this.graphicsData && tt.return(this.graphicsData), this.isBatchable = false, this.context = null, this.batches.length = 0, this.geometryData.indices.length = 0, this.geometryData.vertices.length = 0, this.geometryData.uvs.length = 0, this.graphicsData = null;
    }
    destroy() {
      this.reset(), this.batches = null, this.geometryData = null;
    }
  }
  class Yl {
    constructor() {
      this.instructions = new qs();
    }
    init(t) {
      const e = t.maxTextures;
      this.batcher ? this.batcher._updateMaxTextures(e) : this.batcher = new Cl({
        maxTextures: e
      }), this.instructions.reset();
    }
    get geometry() {
      return F(yo, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."), this.batcher.geometry;
    }
    destroy() {
      this.batcher.destroy(), this.instructions.destroy(), this.batcher = null, this.instructions = null;
    }
  }
  const ii = class $s {
    constructor(t) {
      this._renderer = t, this._managedContexts = new Ye({
        renderer: t,
        type: "resource",
        name: "graphicsContext"
      });
    }
    init(t) {
      $s.defaultOptions.bezierSmoothness = (t == null ? void 0 : t.bezierSmoothness) ?? $s.defaultOptions.bezierSmoothness;
    }
    getContextRenderData(t) {
      return t._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(t);
    }
    updateGpuContext(t) {
      const e = !!t._gpuData[this._renderer.uid], i = t._gpuData[this._renderer.uid] || this._initContext(t);
      if (t.dirty || !e) {
        e && i.reset(), Vl(t, i);
        const r = t.batchMode;
        t.customShader || r === "no-batch" ? i.isBatchable = false : r === "auto" ? i.isBatchable = i.geometryData.vertices.length < 400 : i.isBatchable = true, t.dirty = false;
      }
      return i;
    }
    getGpuContext(t) {
      return t._gpuData[this._renderer.uid] || this._initContext(t);
    }
    _initContextRenderData(t) {
      const e = tt.get(Yl, {
        maxTextures: this._renderer.limits.maxBatchableTextures
      }), i = t._gpuData[this._renderer.uid], { batches: r, geometryData: n } = i;
      i.graphicsData = e;
      const o = n.vertices.length, a = n.indices.length;
      for (let u = 0; u < r.length; u++) r[u].applyTransform = false;
      const h = e.batcher;
      h.ensureAttributeBuffer(o), h.ensureIndexBuffer(a), h.begin();
      for (let u = 0; u < r.length; u++) {
        const f = r[u];
        h.add(f);
      }
      h.finish(e.instructions);
      const l = h.geometry;
      l.indexBuffer.setDataWithSize(h.indexBuffer, h.indexSize, true), l.buffers[0].setDataWithSize(h.attributeBuffer.float32View, h.attributeSize, true);
      const c = h.batches;
      for (let u = 0; u < c.length; u++) {
        const f = c[u];
        f.bindGroup = Fh(f.textures.textures, f.textures.count, this._renderer.limits.maxBatchableTextures);
      }
      return e;
    }
    _initContext(t) {
      const e = new Xl();
      return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e;
    }
    destroy() {
      this._managedContexts.destroy(), this._renderer = null;
    }
  };
  ii.extension = {
    type: [
      S.WebGLSystem,
      S.WebGPUSystem
    ],
    name: "graphicsContext"
  };
  ii.defaultOptions = {
    bezierSmoothness: 0.5
  };
  let ri = ii;
  const jl = 8, De = 11920929e-14, ql = 1;
  function Nn(s, t, e, i, r, n, o, a, h, l) {
    const u = Math.min(0.99, Math.max(0, l ?? ri.defaultOptions.bezierSmoothness));
    let f = (ql - u) / 1;
    return f *= f, Zl(t, e, i, r, n, o, a, h, s, f), s;
  }
  function Zl(s, t, e, i, r, n, o, a, h, l) {
    Vs(s, t, e, i, r, n, o, a, h, l, 0), h.push(o, a);
  }
  function Vs(s, t, e, i, r, n, o, a, h, l, c) {
    if (c > jl) return;
    const u = (s + e) / 2, f = (t + i) / 2, d = (e + r) / 2, p = (i + n) / 2, g = (r + o) / 2, m = (n + a) / 2, y = (u + d) / 2, x = (f + p) / 2, _ = (d + g) / 2, b = (p + m) / 2, C = (y + _) / 2, A = (x + b) / 2;
    if (c > 0) {
      let w = o - s, E = a - t;
      const k = Math.abs((e - o) * E - (i - a) * w), v = Math.abs((r - o) * E - (n - a) * w);
      if (k > De && v > De) {
        if ((k + v) * (k + v) <= l * (w * w + E * E)) {
          h.push(C, A);
          return;
        }
      } else if (k > De) {
        if (k * k <= l * (w * w + E * E)) {
          h.push(C, A);
          return;
        }
      } else if (v > De) {
        if (v * v <= l * (w * w + E * E)) {
          h.push(C, A);
          return;
        }
      } else if (w = C - (s + o) / 2, E = A - (t + a) / 2, w * w + E * E <= l) {
        h.push(C, A);
        return;
      }
    }
    Vs(s, t, u, f, y, x, C, A, h, l, c + 1), Vs(C, A, _, b, g, m, o, a, h, l, c + 1);
  }
  const Kl = 8, Ql = 11920929e-14, Jl = 1;
  function tc(s, t, e, i, r, n, o, a) {
    const l = Math.min(0.99, Math.max(0, a ?? ri.defaultOptions.bezierSmoothness));
    let c = (Jl - l) / 1;
    return c *= c, ec(t, e, i, r, n, o, s, c), s;
  }
  function ec(s, t, e, i, r, n, o, a) {
    Ws(o, s, t, e, i, r, n, a, 0), o.push(r, n);
  }
  function Ws(s, t, e, i, r, n, o, a, h) {
    if (h > Kl) return;
    const l = (t + i) / 2, c = (e + r) / 2, u = (i + n) / 2, f = (r + o) / 2, d = (l + u) / 2, p = (c + f) / 2;
    let g = n - t, m = o - e;
    const y = Math.abs((i - n) * m - (r - o) * g);
    if (y > Ql) {
      if (y * y <= a * (g * g + m * m)) {
        s.push(d, p);
        return;
      }
    } else if (g = d - (t + n) / 2, m = p - (e + o) / 2, g * g + m * m <= a) {
      s.push(d, p);
      return;
    }
    Ws(s, t, e, l, c, d, p, a, h + 1), Ws(s, d, p, u, f, n, o, a, h + 1);
  }
  function $n(s, t, e, i, r, n, o, a) {
    let h = Math.abs(r - n);
    (!o && r > n || o && n > r) && (h = 2 * Math.PI - h), a || (a = Math.max(6, Math.floor(6 * Math.pow(i, 1 / 3) * (h / Math.PI)))), a = Math.max(a, 3);
    let l = h / a, c = r;
    l *= o ? -1 : 1;
    for (let u = 0; u < a + 1; u++) {
      const f = Math.cos(c), d = Math.sin(c), p = t + f * i, g = e + d * i;
      s.push(p, g), c += l;
    }
  }
  function sc(s, t, e, i, r, n) {
    const o = s[s.length - 2], h = s[s.length - 1] - e, l = o - t, c = r - e, u = i - t, f = Math.abs(h * u - l * c);
    if (f < 1e-8 || n === 0) {
      (s[s.length - 2] !== t || s[s.length - 1] !== e) && s.push(t, e);
      return;
    }
    const d = h * h + l * l, p = c * c + u * u, g = h * c + l * u, m = n * Math.sqrt(d) / f, y = n * Math.sqrt(p) / f, x = m * g / d, _ = y * g / p, b = m * u + y * l, C = m * c + y * h, A = l * (y + x), w = h * (y + x), E = u * (m + _), k = c * (m + _), v = Math.atan2(w - C, A - b), M = Math.atan2(k - C, E - b);
    $n(s, b + t, C + e, n, v, M, l * c > u * h);
  }
  const fe = Math.PI * 2, ws = {
    centerX: 0,
    centerY: 0,
    ang1: 0,
    ang2: 0
  }, vs = ({ x: s, y: t }, e, i, r, n, o, a, h) => {
    s *= e, t *= i;
    const l = r * s - n * t, c = n * s + r * t;
    return h.x = l + o, h.y = c + a, h;
  };
  function ic(s, t) {
    const e = t === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(t / 4), i = t === 1.5707963267948966 ? 0.551915024494 : e, r = Math.cos(s), n = Math.sin(s), o = Math.cos(s + t), a = Math.sin(s + t);
    return [
      {
        x: r - n * i,
        y: n + r * i
      },
      {
        x: o + a * i,
        y: a - o * i
      },
      {
        x: o,
        y: a
      }
    ];
  }
  const lr = (s, t, e, i) => {
    const r = s * i - t * e < 0 ? -1 : 1;
    let n = s * e + t * i;
    return n > 1 && (n = 1), n < -1 && (n = -1), r * Math.acos(n);
  }, rc = (s, t, e, i, r, n, o, a, h, l, c, u, f) => {
    const d = Math.pow(r, 2), p = Math.pow(n, 2), g = Math.pow(c, 2), m = Math.pow(u, 2);
    let y = d * p - d * m - p * g;
    y < 0 && (y = 0), y /= d * m + p * g, y = Math.sqrt(y) * (o === a ? -1 : 1);
    const x = y * r / n * u, _ = y * -n / r * c, b = l * x - h * _ + (s + e) / 2, C = h * x + l * _ + (t + i) / 2, A = (c - x) / r, w = (u - _) / n, E = (-c - x) / r, k = (-u - _) / n, v = lr(1, 0, A, w);
    let M = lr(A, w, E, k);
    a === 0 && M > 0 && (M -= fe), a === 1 && M < 0 && (M += fe), f.centerX = b, f.centerY = C, f.ang1 = v, f.ang2 = M;
  };
  function nc(s, t, e, i, r, n, o, a = 0, h = 0, l = 0) {
    if (n === 0 || o === 0) return;
    const c = Math.sin(a * fe / 360), u = Math.cos(a * fe / 360), f = u * (t - i) / 2 + c * (e - r) / 2, d = -c * (t - i) / 2 + u * (e - r) / 2;
    if (f === 0 && d === 0) return;
    n = Math.abs(n), o = Math.abs(o);
    const p = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(d, 2) / Math.pow(o, 2);
    p > 1 && (n *= Math.sqrt(p), o *= Math.sqrt(p)), rc(t, e, i, r, n, o, h, l, c, u, f, d, ws);
    let { ang1: g, ang2: m } = ws;
    const { centerX: y, centerY: x } = ws;
    let _ = Math.abs(m) / (fe / 4);
    Math.abs(1 - _) < 1e-7 && (_ = 1);
    const b = Math.max(Math.ceil(_), 1);
    m /= b;
    let C = s[s.length - 2], A = s[s.length - 1];
    const w = {
      x: 0,
      y: 0
    };
    for (let E = 0; E < b; E++) {
      const k = ic(g, m), { x: v, y: M } = vs(k[0], n, o, u, c, y, x, w), { x: I, y: O } = vs(k[1], n, o, u, c, y, x, w), { x: L, y: K } = vs(k[2], n, o, u, c, y, x, w);
      Nn(s, C, A, v, M, I, O, L, K), C = L, A = K, g += m;
    }
  }
  function oc(s, t, e) {
    const i = (o, a) => {
      const h = a.x - o.x, l = a.y - o.y, c = Math.sqrt(h * h + l * l), u = h / c, f = l / c;
      return {
        len: c,
        nx: u,
        ny: f
      };
    }, r = (o, a) => {
      o === 0 ? s.moveTo(a.x, a.y) : s.lineTo(a.x, a.y);
    };
    let n = t[t.length - 1];
    for (let o = 0; o < t.length; o++) {
      const a = t[o % t.length], h = a.radius ?? e;
      if (h <= 0) {
        r(o, a), n = a;
        continue;
      }
      const l = t[(o + 1) % t.length], c = i(a, n), u = i(a, l);
      if (c.len < 1e-4 || u.len < 1e-4) {
        r(o, a), n = a;
        continue;
      }
      let f = Math.asin(c.nx * u.ny - c.ny * u.nx), d = 1, p = false;
      c.nx * u.nx - c.ny * -u.ny < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, d = -1, p = true) : f > 0 && (d = -1, p = true);
      const g = f / 2;
      let m, y = Math.abs(Math.cos(g) * h / Math.sin(g));
      y > Math.min(c.len / 2, u.len / 2) ? (y = Math.min(c.len / 2, u.len / 2), m = Math.abs(y * Math.sin(g) / Math.cos(g))) : m = h;
      const x = a.x + u.nx * y + -u.ny * m * d, _ = a.y + u.ny * y + u.nx * m * d, b = Math.atan2(c.ny, c.nx) + Math.PI / 2 * d, C = Math.atan2(u.ny, u.nx) - Math.PI / 2 * d;
      o === 0 && s.moveTo(x + Math.cos(b) * m, _ + Math.sin(b) * m), s.arc(x, _, m, b, C, p), n = a;
    }
  }
  function ac(s, t, e, i) {
    const r = (a, h) => Math.sqrt((a.x - h.x) ** 2 + (a.y - h.y) ** 2), n = (a, h, l) => ({
      x: a.x + (h.x - a.x) * l,
      y: a.y + (h.y - a.y) * l
    }), o = t.length;
    for (let a = 0; a < o; a++) {
      const h = t[(a + 1) % o], l = h.radius ?? e;
      if (l <= 0) {
        a === 0 ? s.moveTo(h.x, h.y) : s.lineTo(h.x, h.y);
        continue;
      }
      const c = t[a], u = t[(a + 2) % o], f = r(c, h);
      let d;
      if (f < 1e-4) d = h;
      else {
        const m = Math.min(f / 2, l);
        d = n(h, c, m / f);
      }
      const p = r(u, h);
      let g;
      if (p < 1e-4) g = h;
      else {
        const m = Math.min(p / 2, l);
        g = n(h, u, m / p);
      }
      a === 0 ? s.moveTo(d.x, d.y) : s.lineTo(d.x, d.y), s.quadraticCurveTo(h.x, h.y, g.x, g.y, i);
    }
  }
  const hc = new j();
  class lc {
    constructor(t) {
      this.shapePrimitives = [], this._currentPoly = null, this._bounds = new ht(), this._graphicsPath2D = t, this.signed = t.checkForHoles;
    }
    moveTo(t, e) {
      return this.startPoly(t, e), this;
    }
    lineTo(t, e) {
      this._ensurePoly();
      const i = this._currentPoly.points, r = i[i.length - 2], n = i[i.length - 1];
      return (r !== t || n !== e) && i.push(t, e), this;
    }
    arc(t, e, i, r, n, o) {
      this._ensurePoly(false);
      const a = this._currentPoly.points;
      return $n(a, t, e, i, r, n, o), this;
    }
    arcTo(t, e, i, r, n) {
      this._ensurePoly();
      const o = this._currentPoly.points;
      return sc(o, t, e, i, r, n), this;
    }
    arcToSvg(t, e, i, r, n, o, a) {
      const h = this._currentPoly.points;
      return nc(h, this._currentPoly.lastX, this._currentPoly.lastY, o, a, t, e, i, r, n), this;
    }
    bezierCurveTo(t, e, i, r, n, o, a) {
      this._ensurePoly();
      const h = this._currentPoly;
      return Nn(this._currentPoly.points, h.lastX, h.lastY, t, e, i, r, n, o, a), this;
    }
    quadraticCurveTo(t, e, i, r, n) {
      this._ensurePoly();
      const o = this._currentPoly;
      return tc(this._currentPoly.points, o.lastX, o.lastY, t, e, i, r, n), this;
    }
    closePath() {
      return this.endPoly(true), this;
    }
    addPath(t, e) {
      this.endPoly(), e && !e.isIdentity() && (t = t.clone(true), t.transform(e));
      const i = this.shapePrimitives, r = i.length;
      for (let n = 0; n < t.instructions.length; n++) {
        const o = t.instructions[n];
        this[o.action](...o.data);
      }
      if (t.checkForHoles && i.length - r > 1) {
        let n = null;
        for (let o = r; o < i.length; o++) {
          const a = i[o];
          if (a.shape.type === "polygon") {
            const h = a.shape, l = n == null ? void 0 : n.shape;
            l && l.containsPolygon(h) ? (n.holes || (n.holes = []), n.holes.push(a), i.copyWithin(o, o + 1), i.length--, o--) : n = a;
          }
        }
      }
      return this;
    }
    finish(t = false) {
      this.endPoly(t);
    }
    rect(t, e, i, r, n) {
      return this.drawShape(new j(t, e, i, r), n), this;
    }
    circle(t, e, i, r) {
      return this.drawShape(new Qs(t, e, i), r), this;
    }
    poly(t, e, i) {
      const r = new ue(t);
      return r.closePath = e, this.drawShape(r, i), this;
    }
    regularPoly(t, e, i, r, n = 0, o) {
      r = Math.max(r | 0, 3);
      const a = -1 * Math.PI / 2 + n, h = Math.PI * 2 / r, l = [];
      for (let c = 0; c < r; c++) {
        const u = a - c * h;
        l.push(t + i * Math.cos(u), e + i * Math.sin(u));
      }
      return this.poly(l, true, o), this;
    }
    roundPoly(t, e, i, r, n, o = 0, a) {
      if (r = Math.max(r | 0, 3), n <= 0) return this.regularPoly(t, e, i, r, o);
      const h = i * Math.sin(Math.PI / r) - 1e-3;
      n = Math.min(n, h);
      const l = -1 * Math.PI / 2 + o, c = Math.PI * 2 / r, u = (r - 2) * Math.PI / r / 2;
      for (let f = 0; f < r; f++) {
        const d = f * c + l, p = t + i * Math.cos(d), g = e + i * Math.sin(d), m = d + Math.PI + u, y = d - Math.PI - u, x = p + n * Math.cos(m), _ = g + n * Math.sin(m), b = p + n * Math.cos(y), C = g + n * Math.sin(y);
        f === 0 ? this.moveTo(x, _) : this.lineTo(x, _), this.quadraticCurveTo(p, g, b, C, a);
      }
      return this.closePath();
    }
    roundShape(t, e, i = false, r) {
      return t.length < 3 ? this : (i ? ac(this, t, e, r) : oc(this, t, e), this.closePath());
    }
    filletRect(t, e, i, r, n) {
      if (n === 0) return this.rect(t, e, i, r);
      const o = Math.min(i, r) / 2, a = Math.min(o, Math.max(-o, n)), h = t + i, l = e + r, c = a < 0 ? -a : 0, u = Math.abs(a);
      return this.moveTo(t, e + u).arcTo(t + c, e + c, t + u, e, u).lineTo(h - u, e).arcTo(h - c, e + c, h, e + u, u).lineTo(h, l - u).arcTo(h - c, l - c, t + i - u, l, u).lineTo(t + u, l).arcTo(t + c, l - c, t, l - u, u).closePath();
    }
    chamferRect(t, e, i, r, n, o) {
      if (n <= 0) return this.rect(t, e, i, r);
      const a = Math.min(n, Math.min(i, r) / 2), h = t + i, l = e + r, c = [
        t + a,
        e,
        h - a,
        e,
        h,
        e + a,
        h,
        l - a,
        h - a,
        l,
        t + a,
        l,
        t,
        l - a,
        t,
        e + a
      ];
      for (let u = c.length - 1; u >= 2; u -= 2) c[u] === c[u - 2] && c[u - 1] === c[u - 3] && c.splice(u - 1, 2);
      return this.poly(c, true, o);
    }
    ellipse(t, e, i, r, n) {
      return this.drawShape(new Js(t, e, i, r), n), this;
    }
    roundRect(t, e, i, r, n, o) {
      return this.drawShape(new ti(t, e, i, r, n), o), this;
    }
    drawShape(t, e) {
      return this.endPoly(), this.shapePrimitives.push({
        shape: t,
        transform: e
      }), this;
    }
    startPoly(t, e) {
      let i = this._currentPoly;
      return i && this.endPoly(), i = new ue(), i.points.push(t, e), this._currentPoly = i, this;
    }
    endPoly(t = false) {
      const e = this._currentPoly;
      return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({
        shape: e
      })), this._currentPoly = null, this;
    }
    _ensurePoly(t = true) {
      if (!this._currentPoly && (this._currentPoly = new ue(), t)) {
        const e = this.shapePrimitives[this.shapePrimitives.length - 1];
        if (e) {
          let i = e.shape.x, r = e.shape.y;
          if (e.transform && !e.transform.isIdentity()) {
            const n = e.transform, o = i;
            i = n.a * i + n.c * r + n.tx, r = n.b * o + n.d * r + n.ty;
          }
          this._currentPoly.points.push(i, r);
        } else this._currentPoly.points.push(0, 0);
      }
    }
    buildPath() {
      const t = this._graphicsPath2D;
      this.shapePrimitives.length = 0, this._currentPoly = null;
      for (let e = 0; e < t.instructions.length; e++) {
        const i = t.instructions[e];
        this[i.action](...i.data);
      }
      this.finish();
    }
    get bounds() {
      const t = this._bounds;
      t.clear();
      const e = this.shapePrimitives;
      for (let i = 0; i < e.length; i++) {
        const r = e[i], n = r.shape.getBounds(hc);
        r.transform ? t.addRect(n, r.transform) : t.addRect(n);
      }
      return t;
    }
  }
  class yt {
    constructor(t, e = false) {
      this.instructions = [], this.uid = V("graphicsPath"), this._dirty = true, this.checkForHoles = e, typeof t == "string" ? Ih(t, this) : this.instructions = (t == null ? void 0 : t.slice()) ?? [];
    }
    get shapePath() {
      return this._shapePath || (this._shapePath = new lc(this)), this._dirty && (this._dirty = false, this._shapePath.buildPath()), this._shapePath;
    }
    addPath(t, e) {
      return t = t.clone(), this.instructions.push({
        action: "addPath",
        data: [
          t,
          e
        ]
      }), this._dirty = true, this;
    }
    arc(...t) {
      return this.instructions.push({
        action: "arc",
        data: t
      }), this._dirty = true, this;
    }
    arcTo(...t) {
      return this.instructions.push({
        action: "arcTo",
        data: t
      }), this._dirty = true, this;
    }
    arcToSvg(...t) {
      return this.instructions.push({
        action: "arcToSvg",
        data: t
      }), this._dirty = true, this;
    }
    bezierCurveTo(...t) {
      return this.instructions.push({
        action: "bezierCurveTo",
        data: t
      }), this._dirty = true, this;
    }
    bezierCurveToShort(t, e, i, r, n) {
      const o = this.instructions[this.instructions.length - 1], a = this.getLastPoint(Z.shared);
      let h = 0, l = 0;
      if (!o || o.action !== "bezierCurveTo") h = a.x, l = a.y;
      else {
        h = o.data[2], l = o.data[3];
        const c = a.x, u = a.y;
        h = c + (c - h), l = u + (u - l);
      }
      return this.instructions.push({
        action: "bezierCurveTo",
        data: [
          h,
          l,
          t,
          e,
          i,
          r,
          n
        ]
      }), this._dirty = true, this;
    }
    closePath() {
      return this.instructions.push({
        action: "closePath",
        data: []
      }), this._dirty = true, this;
    }
    ellipse(...t) {
      return this.instructions.push({
        action: "ellipse",
        data: t
      }), this._dirty = true, this;
    }
    lineTo(...t) {
      return this.instructions.push({
        action: "lineTo",
        data: t
      }), this._dirty = true, this;
    }
    moveTo(...t) {
      return this.instructions.push({
        action: "moveTo",
        data: t
      }), this;
    }
    quadraticCurveTo(...t) {
      return this.instructions.push({
        action: "quadraticCurveTo",
        data: t
      }), this._dirty = true, this;
    }
    quadraticCurveToShort(t, e, i) {
      const r = this.instructions[this.instructions.length - 1], n = this.getLastPoint(Z.shared);
      let o = 0, a = 0;
      if (!r || r.action !== "quadraticCurveTo") o = n.x, a = n.y;
      else {
        o = r.data[0], a = r.data[1];
        const h = n.x, l = n.y;
        o = h + (h - o), a = l + (l - a);
      }
      return this.instructions.push({
        action: "quadraticCurveTo",
        data: [
          o,
          a,
          t,
          e,
          i
        ]
      }), this._dirty = true, this;
    }
    rect(t, e, i, r, n) {
      return this.instructions.push({
        action: "rect",
        data: [
          t,
          e,
          i,
          r,
          n
        ]
      }), this._dirty = true, this;
    }
    circle(t, e, i, r) {
      return this.instructions.push({
        action: "circle",
        data: [
          t,
          e,
          i,
          r
        ]
      }), this._dirty = true, this;
    }
    roundRect(...t) {
      return this.instructions.push({
        action: "roundRect",
        data: t
      }), this._dirty = true, this;
    }
    poly(...t) {
      return this.instructions.push({
        action: "poly",
        data: t
      }), this._dirty = true, this;
    }
    regularPoly(...t) {
      return this.instructions.push({
        action: "regularPoly",
        data: t
      }), this._dirty = true, this;
    }
    roundPoly(...t) {
      return this.instructions.push({
        action: "roundPoly",
        data: t
      }), this._dirty = true, this;
    }
    roundShape(...t) {
      return this.instructions.push({
        action: "roundShape",
        data: t
      }), this._dirty = true, this;
    }
    filletRect(...t) {
      return this.instructions.push({
        action: "filletRect",
        data: t
      }), this._dirty = true, this;
    }
    chamferRect(...t) {
      return this.instructions.push({
        action: "chamferRect",
        data: t
      }), this._dirty = true, this;
    }
    star(t, e, i, r, n, o, a) {
      n || (n = r / 2);
      const h = -1 * Math.PI / 2 + o, l = i * 2, c = Math.PI * 2 / l, u = [];
      for (let f = 0; f < l; f++) {
        const d = f % 2 ? n : r, p = f * c + h;
        u.push(t + d * Math.cos(p), e + d * Math.sin(p));
      }
      return this.poly(u, true, a), this;
    }
    clone(t = false) {
      const e = new yt();
      if (e.checkForHoles = this.checkForHoles, !t) e.instructions = this.instructions.slice();
      else for (let i = 0; i < this.instructions.length; i++) {
        const r = this.instructions[i];
        e.instructions.push({
          action: r.action,
          data: r.data.slice()
        });
      }
      return e;
    }
    clear() {
      return this.instructions.length = 0, this._dirty = true, this;
    }
    transform(t) {
      if (t.isIdentity()) return this;
      const e = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, a = t.ty;
      let h = 0, l = 0, c = 0, u = 0, f = 0, d = 0, p = 0, g = 0;
      for (let m = 0; m < this.instructions.length; m++) {
        const y = this.instructions[m], x = y.data;
        switch (y.action) {
          case "moveTo":
          case "lineTo":
            h = x[0], l = x[1], x[0] = e * h + r * l + o, x[1] = i * h + n * l + a;
            break;
          case "bezierCurveTo":
            c = x[0], u = x[1], f = x[2], d = x[3], h = x[4], l = x[5], x[0] = e * c + r * u + o, x[1] = i * c + n * u + a, x[2] = e * f + r * d + o, x[3] = i * f + n * d + a, x[4] = e * h + r * l + o, x[5] = i * h + n * l + a;
            break;
          case "quadraticCurveTo":
            c = x[0], u = x[1], h = x[2], l = x[3], x[0] = e * c + r * u + o, x[1] = i * c + n * u + a, x[2] = e * h + r * l + o, x[3] = i * h + n * l + a;
            break;
          case "arcToSvg":
            h = x[5], l = x[6], p = x[0], g = x[1], x[0] = e * p + r * g, x[1] = i * p + n * g, x[5] = e * h + r * l + o, x[6] = i * h + n * l + a;
            break;
          case "circle":
            x[4] = ie(x[3], t);
            break;
          case "rect":
            x[4] = ie(x[4], t);
            break;
          case "ellipse":
            x[8] = ie(x[8], t);
            break;
          case "roundRect":
            x[5] = ie(x[5], t);
            break;
          case "addPath":
            x[0].transform(t);
            break;
          case "poly":
            x[2] = ie(x[2], t);
            break;
          default:
            $("unknown transform action", y.action);
            break;
        }
      }
      return this._dirty = true, this;
    }
    get bounds() {
      return this.shapePath.bounds;
    }
    getLastPoint(t) {
      let e = this.instructions.length - 1, i = this.instructions[e];
      if (!i) return t.x = 0, t.y = 0, t;
      for (; i.action === "closePath"; ) {
        if (e--, e < 0) return t.x = 0, t.y = 0, t;
        i = this.instructions[e];
      }
      switch (i.action) {
        case "moveTo":
        case "lineTo":
          t.x = i.data[0], t.y = i.data[1];
          break;
        case "quadraticCurveTo":
          t.x = i.data[2], t.y = i.data[3];
          break;
        case "bezierCurveTo":
          t.x = i.data[4], t.y = i.data[5];
          break;
        case "arc":
        case "arcToSvg":
          t.x = i.data[5], t.y = i.data[6];
          break;
        case "addPath":
          i.data[0].getLastPoint(t);
          break;
      }
      return t;
    }
  }
  function ie(s, t) {
    return s ? s.prepend(t) : t.clone();
  }
  function N(s, t, e) {
    const i = s.getAttribute(t);
    return i ? Number(i) : e;
  }
  function cc(s, t) {
    const e = s.querySelectorAll("defs");
    for (let i = 0; i < e.length; i++) {
      const r = e[i];
      for (let n = 0; n < r.children.length; n++) {
        const o = r.children[n];
        switch (o.nodeName.toLowerCase()) {
          case "lineargradient":
            t.defs[o.id] = uc(o);
            break;
          case "radialgradient":
            t.defs[o.id] = dc();
            break;
        }
      }
    }
  }
  function uc(s) {
    const t = N(s, "x1", 0), e = N(s, "y1", 0), i = N(s, "x2", 1), r = N(s, "y2", 0), n = s.getAttribute("gradientUnits") || "objectBoundingBox", o = new _e(t, e, i, r, n === "objectBoundingBox" ? "local" : "global");
    for (let a = 0; a < s.children.length; a++) {
      const h = s.children[a], l = N(h, "offset", 0), c = nt.shared.setValue(h.getAttribute("stop-color")).toNumber();
      o.addColorStop(l, c);
    }
    return o;
  }
  function dc(s) {
    return $("[SVG Parser] Radial gradients are not yet supported"), new _e(0, 0, 1, 0);
  }
  function cr(s) {
    const t = s.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
    return t ? t[1] : "";
  }
  const ur = {
    fill: {
      type: "paint",
      default: 0
    },
    "fill-opacity": {
      type: "number",
      default: 1
    },
    stroke: {
      type: "paint",
      default: 0
    },
    "stroke-width": {
      type: "number",
      default: 1
    },
    "stroke-opacity": {
      type: "number",
      default: 1
    },
    "stroke-linecap": {
      type: "string",
      default: "butt"
    },
    "stroke-linejoin": {
      type: "string",
      default: "miter"
    },
    "stroke-miterlimit": {
      type: "number",
      default: 10
    },
    "stroke-dasharray": {
      type: "string",
      default: "none"
    },
    "stroke-dashoffset": {
      type: "number",
      default: 0
    },
    opacity: {
      type: "number",
      default: 1
    }
  };
  function Vn(s, t) {
    const e = s.getAttribute("style"), i = {}, r = {}, n = {
      strokeStyle: i,
      fillStyle: r,
      useFill: false,
      useStroke: false
    };
    for (const o in ur) {
      const a = s.getAttribute(o);
      a && dr(t, n, o, a.trim());
    }
    if (e) {
      const o = e.split(";");
      for (let a = 0; a < o.length; a++) {
        const h = o[a].trim(), [l, c] = h.split(":");
        ur[l] && dr(t, n, l, c.trim());
      }
    }
    return {
      strokeStyle: n.useStroke ? i : null,
      fillStyle: n.useFill ? r : null,
      useFill: n.useFill,
      useStroke: n.useStroke
    };
  }
  function dr(s, t, e, i) {
    switch (e) {
      case "stroke":
        if (i !== "none") {
          if (i.startsWith("url(")) {
            const r = cr(i);
            t.strokeStyle.fill = s.defs[r];
          } else t.strokeStyle.color = nt.shared.setValue(i).toNumber();
          t.useStroke = true;
        }
        break;
      case "stroke-width":
        t.strokeStyle.width = Number(i);
        break;
      case "fill":
        if (i !== "none") {
          if (i.startsWith("url(")) {
            const r = cr(i);
            t.fillStyle.fill = s.defs[r];
          } else t.fillStyle.color = nt.shared.setValue(i).toNumber();
          t.useFill = true;
        }
        break;
      case "fill-opacity":
        t.fillStyle.alpha = Number(i);
        break;
      case "stroke-opacity":
        t.strokeStyle.alpha = Number(i);
        break;
      case "opacity":
        t.fillStyle.alpha = Number(i), t.strokeStyle.alpha = Number(i);
        break;
    }
  }
  function fc(s) {
    if (s.length <= 2) return true;
    const t = s.map((a) => a.area).sort((a, h) => h - a), [e, i] = t, r = t[t.length - 1], n = e / i, o = i / r;
    return !(n > 3 && o < 2);
  }
  function pc(s) {
    return s.split(/(?=[Mm])/).filter((i) => i.trim().length > 0);
  }
  function mc(s) {
    const t = s.match(/[-+]?[0-9]*\.?[0-9]+/g);
    if (!t || t.length < 4) return 0;
    const e = t.map(Number), i = [], r = [];
    for (let c = 0; c < e.length; c += 2) c + 1 < e.length && (i.push(e[c]), r.push(e[c + 1]));
    if (i.length === 0 || r.length === 0) return 0;
    const n = Math.min(...i), o = Math.max(...i), a = Math.min(...r), h = Math.max(...r);
    return (o - n) * (h - a);
  }
  function fr(s, t) {
    const e = new yt(s, false);
    for (const i of e.instructions) t.instructions.push(i);
  }
  function gc(s, t) {
    if (typeof s == "string") {
      const o = document.createElement("div");
      o.innerHTML = s.trim(), s = o.querySelector("svg");
    }
    const e = {
      context: t,
      defs: {},
      path: new yt()
    };
    cc(s, e);
    const i = s.children, { fillStyle: r, strokeStyle: n } = Vn(s, e);
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      a.nodeName.toLowerCase() !== "defs" && Wn(a, e, r, n);
    }
    return t;
  }
  function Wn(s, t, e, i) {
    const r = s.children, { fillStyle: n, strokeStyle: o } = Vn(s, t);
    n && e ? e = {
      ...e,
      ...n
    } : n && (e = n), o && i ? i = {
      ...i,
      ...o
    } : o && (i = o);
    const a = !e && !i;
    a && (e = {
      color: 0
    });
    let h, l, c, u, f, d, p, g, m, y, x, _, b, C, A, w, E;
    switch (s.nodeName.toLowerCase()) {
      case "path": {
        C = s.getAttribute("d");
        const k = s.getAttribute("fill-rule"), v = pc(C), M = k === "evenodd", I = v.length > 1;
        if (M && I) {
          const L = v.map((P) => ({
            path: P,
            area: mc(P)
          }));
          if (L.sort((P, T) => T.area - P.area), v.length > 3 || !fc(L)) for (let P = 0; P < L.length; P++) {
            const T = L[P], bt = P === 0;
            t.context.beginPath();
            const R = new yt(void 0, true);
            fr(T.path, R), t.context.path(R), bt ? (e && t.context.fill(e), i && t.context.stroke(i)) : t.context.cut();
          }
          else for (let P = 0; P < L.length; P++) {
            const T = L[P], bt = P % 2 === 1;
            t.context.beginPath();
            const R = new yt(void 0, true);
            fr(T.path, R), t.context.path(R), bt ? t.context.cut() : (e && t.context.fill(e), i && t.context.stroke(i));
          }
        } else {
          const L = k ? k === "evenodd" : true;
          A = new yt(C, L), t.context.path(A), e && t.context.fill(e), i && t.context.stroke(i);
        }
        break;
      }
      case "circle":
        p = N(s, "cx", 0), g = N(s, "cy", 0), m = N(s, "r", 0), t.context.ellipse(p, g, m, m), e && t.context.fill(e), i && t.context.stroke(i);
        break;
      case "rect":
        h = N(s, "x", 0), l = N(s, "y", 0), w = N(s, "width", 0), E = N(s, "height", 0), y = N(s, "rx", 0), x = N(s, "ry", 0), y || x ? t.context.roundRect(h, l, w, E, y || x) : t.context.rect(h, l, w, E), e && t.context.fill(e), i && t.context.stroke(i);
        break;
      case "ellipse":
        p = N(s, "cx", 0), g = N(s, "cy", 0), y = N(s, "rx", 0), x = N(s, "ry", 0), t.context.beginPath(), t.context.ellipse(p, g, y, x), e && t.context.fill(e), i && t.context.stroke(i);
        break;
      case "line":
        c = N(s, "x1", 0), u = N(s, "y1", 0), f = N(s, "x2", 0), d = N(s, "y2", 0), t.context.beginPath(), t.context.moveTo(c, u), t.context.lineTo(f, d), i && t.context.stroke(i);
        break;
      case "polygon":
        b = s.getAttribute("points"), _ = b.match(/-?\d+/g).map((k) => parseInt(k, 10)), t.context.poly(_, true), e && t.context.fill(e), i && t.context.stroke(i);
        break;
      case "polyline":
        b = s.getAttribute("points"), _ = b.match(/-?\d+/g).map((k) => parseInt(k, 10)), t.context.poly(_, false), i && t.context.stroke(i);
        break;
      case "g":
      case "svg":
        break;
      default: {
        $(`[SVG parser] <${s.nodeName}> elements unsupported`);
        break;
      }
    }
    a && (e = null);
    for (let k = 0; k < r.length; k++) Wn(r[k], t, e, i);
  }
  const pr = {
    repeat: {
      addressModeU: "repeat",
      addressModeV: "repeat"
    },
    "repeat-x": {
      addressModeU: "repeat",
      addressModeV: "clamp-to-edge"
    },
    "repeat-y": {
      addressModeU: "clamp-to-edge",
      addressModeV: "repeat"
    },
    "no-repeat": {
      addressModeU: "clamp-to-edge",
      addressModeV: "clamp-to-edge"
    }
  };
  yc = class {
    constructor(t, e) {
      this.uid = V("fillPattern"), this._tick = 0, this.transform = new B(), this.texture = t, this.transform.scale(1 / t.frame.width, 1 / t.frame.height), e && (t.source.style.addressModeU = pr[e].addressModeU, t.source.style.addressModeV = pr[e].addressModeV);
    }
    setTransform(t) {
      const e = this.texture;
      this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(1 / e.frame.width, 1 / e.frame.height), this._tick++;
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      this._texture !== t && (this._texture = t, this._tick++);
    }
    get styleKey() {
      return `fill-pattern-${this.uid}-${this._tick}`;
    }
    destroy() {
      this.texture.destroy(true), this.texture = null;
    }
  };
  function xc(s) {
    return nt.isColorLike(s);
  }
  function mr(s) {
    return s instanceof yc;
  }
  function gr(s) {
    return s instanceof _e;
  }
  function _c(s) {
    return s instanceof G;
  }
  function bc(s, t, e) {
    const i = nt.shared.setValue(t ?? 0);
    return s.color = i.toNumber(), s.alpha = i.alpha === 1 ? e.alpha : i.alpha, s.texture = G.WHITE, {
      ...e,
      ...s
    };
  }
  function Ac(s, t, e) {
    return s.texture = t, {
      ...e,
      ...s
    };
  }
  function yr(s, t, e) {
    return s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, {
      ...e,
      ...s
    };
  }
  function xr(s, t, e) {
    return t.buildGradient(), s.fill = t, s.color = 16777215, s.texture = t.texture, s.matrix = t.transform, s.textureSpace = t.textureSpace, {
      ...e,
      ...s
    };
  }
  function wc(s, t) {
    const e = {
      ...t,
      ...s
    }, i = nt.shared.setValue(e.color);
    return e.alpha *= i.alpha, e.color = i.toNumber(), e;
  }
  ae = function(s, t) {
    if (s == null) return null;
    const e = {}, i = s;
    return xc(s) ? bc(e, s, t) : _c(s) ? Ac(e, s, t) : mr(s) ? yr(e, s, t) : gr(s) ? xr(e, s, t) : i.fill && mr(i.fill) ? yr(i, i.fill, t) : i.fill && gr(i.fill) ? xr(i, i.fill, t) : wc(i, t);
  };
  _r = function(s, t) {
    const { width: e, alignment: i, miterLimit: r, cap: n, join: o, pixelLine: a, ...h } = t, l = ae(s, h);
    return l ? {
      width: e,
      alignment: i,
      miterLimit: r,
      cap: n,
      join: o,
      pixelLine: a,
      ...l
    } : null;
  };
  const vc = new Z(), br = new B(), ni = class ft extends _t {
    constructor() {
      super(...arguments), this._gpuData = /* @__PURE__ */ Object.create(null), this.autoGarbageCollect = true, this._gcLastUsed = -1, this.uid = V("graphicsContext"), this.dirty = true, this.batchMode = "auto", this.instructions = [], this.destroyed = false, this._activePath = new yt(), this._transform = new B(), this._fillStyle = {
        ...ft.defaultFillStyle
      }, this._strokeStyle = {
        ...ft.defaultStrokeStyle
      }, this._stateStack = [], this._tick = 0, this._bounds = new ht(), this._boundsDirty = true;
    }
    clone() {
      const t = new ft();
      return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = {
        ...this._fillStyle
      }, t._strokeStyle = {
        ...this._strokeStyle
      }, t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = true, t;
    }
    get fillStyle() {
      return this._fillStyle;
    }
    set fillStyle(t) {
      this._fillStyle = ae(t, ft.defaultFillStyle);
    }
    get strokeStyle() {
      return this._strokeStyle;
    }
    set strokeStyle(t) {
      this._strokeStyle = _r(t, ft.defaultStrokeStyle);
    }
    setFillStyle(t) {
      return this._fillStyle = ae(t, ft.defaultFillStyle), this;
    }
    setStrokeStyle(t) {
      return this._strokeStyle = ae(t, ft.defaultStrokeStyle), this;
    }
    texture(t, e, i, r, n, o) {
      return this.instructions.push({
        action: "texture",
        data: {
          image: t,
          dx: i || 0,
          dy: r || 0,
          dw: n || t.frame.width,
          dh: o || t.frame.height,
          transform: this._transform.clone(),
          alpha: this._fillStyle.alpha,
          style: e || e === 0 ? nt.shared.setValue(e).toNumber() : 16777215
        }
      }), this.onUpdate(), this;
    }
    beginPath() {
      return this._activePath = new yt(), this;
    }
    fill(t, e) {
      let i;
      const r = this.instructions[this.instructions.length - 1];
      return this._tick === 0 && (r == null ? void 0 : r.action) === "stroke" ? i = r.data.path : i = this._activePath.clone(), i ? (t != null && (e !== void 0 && typeof t == "number" && (F(H, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"), t = {
        color: t,
        alpha: e
      }), this._fillStyle = ae(t, ft.defaultFillStyle)), this.instructions.push({
        action: "fill",
        data: {
          style: this.fillStyle,
          path: i
        }
      }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
    }
    _initNextPathLocation() {
      const { x: t, y: e } = this._activePath.getLastPoint(Z.shared);
      this._activePath.clear(), this._activePath.moveTo(t, e);
    }
    stroke(t) {
      let e;
      const i = this.instructions[this.instructions.length - 1];
      return this._tick === 0 && (i == null ? void 0 : i.action) === "fill" ? e = i.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = _r(t, ft.defaultStrokeStyle)), this.instructions.push({
        action: "stroke",
        data: {
          style: this.strokeStyle,
          path: e
        }
      }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
    }
    cut() {
      for (let t = 0; t < 2; t++) {
        const e = this.instructions[this.instructions.length - 1 - t], i = this._activePath.clone();
        if (e && (e.action === "stroke" || e.action === "fill")) if (e.data.hole) e.data.hole.addPath(i);
        else {
          e.data.hole = i;
          break;
        }
      }
      return this._initNextPathLocation(), this;
    }
    arc(t, e, i, r, n, o) {
      this._tick++;
      const a = this._transform;
      return this._activePath.arc(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, i, r, n, o), this;
    }
    arcTo(t, e, i, r, n) {
      this._tick++;
      const o = this._transform;
      return this._activePath.arcTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * r + o.tx, o.b * i + o.d * r + o.ty, n), this;
    }
    arcToSvg(t, e, i, r, n, o, a) {
      this._tick++;
      const h = this._transform;
      return this._activePath.arcToSvg(t, e, i, r, n, h.a * o + h.c * a + h.tx, h.b * o + h.d * a + h.ty), this;
    }
    bezierCurveTo(t, e, i, r, n, o, a) {
      this._tick++;
      const h = this._transform;
      return this._activePath.bezierCurveTo(h.a * t + h.c * e + h.tx, h.b * t + h.d * e + h.ty, h.a * i + h.c * r + h.tx, h.b * i + h.d * r + h.ty, h.a * n + h.c * o + h.tx, h.b * n + h.d * o + h.ty, a), this;
    }
    closePath() {
      var _a2;
      return this._tick++, (_a2 = this._activePath) == null ? void 0 : _a2.closePath(), this;
    }
    ellipse(t, e, i, r) {
      return this._tick++, this._activePath.ellipse(t, e, i, r, this._transform.clone()), this;
    }
    circle(t, e, i) {
      return this._tick++, this._activePath.circle(t, e, i, this._transform.clone()), this;
    }
    path(t) {
      return this._tick++, this._activePath.addPath(t, this._transform.clone()), this;
    }
    lineTo(t, e) {
      this._tick++;
      const i = this._transform;
      return this._activePath.lineTo(i.a * t + i.c * e + i.tx, i.b * t + i.d * e + i.ty), this;
    }
    moveTo(t, e) {
      this._tick++;
      const i = this._transform, r = this._activePath.instructions, n = i.a * t + i.c * e + i.tx, o = i.b * t + i.d * e + i.ty;
      return r.length === 1 && r[0].action === "moveTo" ? (r[0].data[0] = n, r[0].data[1] = o, this) : (this._activePath.moveTo(n, o), this);
    }
    quadraticCurveTo(t, e, i, r, n) {
      this._tick++;
      const o = this._transform;
      return this._activePath.quadraticCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * r + o.tx, o.b * i + o.d * r + o.ty, n), this;
    }
    rect(t, e, i, r) {
      return this._tick++, this._activePath.rect(t, e, i, r, this._transform.clone()), this;
    }
    roundRect(t, e, i, r, n) {
      return this._tick++, this._activePath.roundRect(t, e, i, r, n, this._transform.clone()), this;
    }
    poly(t, e) {
      return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this;
    }
    regularPoly(t, e, i, r, n = 0, o) {
      return this._tick++, this._activePath.regularPoly(t, e, i, r, n, o), this;
    }
    roundPoly(t, e, i, r, n, o) {
      return this._tick++, this._activePath.roundPoly(t, e, i, r, n, o), this;
    }
    roundShape(t, e, i, r) {
      return this._tick++, this._activePath.roundShape(t, e, i, r), this;
    }
    filletRect(t, e, i, r, n) {
      return this._tick++, this._activePath.filletRect(t, e, i, r, n), this;
    }
    chamferRect(t, e, i, r, n, o) {
      return this._tick++, this._activePath.chamferRect(t, e, i, r, n, o), this;
    }
    star(t, e, i, r, n = 0, o = 0) {
      return this._tick++, this._activePath.star(t, e, i, r, n, o, this._transform.clone()), this;
    }
    svg(t) {
      return this._tick++, gc(t, this), this;
    }
    restore() {
      const t = this._stateStack.pop();
      return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this;
    }
    save() {
      return this._stateStack.push({
        transform: this._transform.clone(),
        fillStyle: {
          ...this._fillStyle
        },
        strokeStyle: {
          ...this._strokeStyle
        }
      }), this;
    }
    getTransform() {
      return this._transform;
    }
    resetTransform() {
      return this._transform.identity(), this;
    }
    rotate(t) {
      return this._transform.rotate(t), this;
    }
    scale(t, e = t) {
      return this._transform.scale(t, e), this;
    }
    setTransform(t, e, i, r, n, o) {
      return t instanceof B ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, i, r, n, o), this);
    }
    transform(t, e, i, r, n, o) {
      return t instanceof B ? (this._transform.append(t), this) : (br.set(t, e, i, r, n, o), this._transform.append(br), this);
    }
    translate(t, e = t) {
      return this._transform.translate(t, e), this;
    }
    clear() {
      return this._activePath.clear(), this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this;
    }
    onUpdate() {
      this._boundsDirty = true, !this.dirty && (this.emit("update", this, 16), this.dirty = true);
    }
    get bounds() {
      if (!this._boundsDirty) return this._bounds;
      this._boundsDirty = false;
      const t = this._bounds;
      t.clear();
      for (let e = 0; e < this.instructions.length; e++) {
        const i = this.instructions[e], r = i.action;
        if (r === "fill") {
          const n = i.data;
          t.addBounds(n.path.bounds);
        } else if (r === "texture") {
          const n = i.data;
          t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
        }
        if (r === "stroke") {
          const n = i.data, o = n.style.alignment, a = n.style.width * (1 - o), h = n.path.bounds;
          t.addFrame(h.minX - a, h.minY - a, h.maxX + a, h.maxY + a);
        }
      }
      return t;
    }
    containsPoint(t) {
      var _a2;
      if (!this.bounds.containsPoint(t.x, t.y)) return false;
      const e = this.instructions;
      let i = false;
      for (let r = 0; r < e.length; r++) {
        const n = e[r], o = n.data, a = o.path;
        if (!n.action || !a) continue;
        const h = o.style, l = a.shapePath.shapePrimitives;
        for (let c = 0; c < l.length; c++) {
          const u = l[c].shape;
          if (!h || !u) continue;
          const f = l[c].transform, d = f ? f.applyInverse(t, vc) : t;
          if (n.action === "fill") i = u.contains(d.x, d.y);
          else {
            const g = h;
            i = u.strokeContains(d.x, d.y, g.width, g.alignment);
          }
          const p = o.hole;
          if (p) {
            const g = (_a2 = p.shapePath) == null ? void 0 : _a2.shapePrimitives;
            if (g) for (let m = 0; m < g.length; m++) g[m].shape.contains(d.x, d.y) && (i = false);
          }
          if (i) return true;
        }
      }
      return i;
    }
    unload() {
      var _a2;
      this.emit("unload", this);
      for (const t in this._gpuData) (_a2 = this._gpuData[t]) == null ? void 0 : _a2.destroy();
      this._gpuData = /* @__PURE__ */ Object.create(null);
    }
    destroy(t = false) {
      if (this.destroyed) return;
      if (this.destroyed = true, this._stateStack.length = 0, this._transform = null, this.unload(), this.emit("destroy", this), this.removeAllListeners(), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
        const i = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
        this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(i)), this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(i));
      }
      this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
    }
  };
  ni.defaultFillStyle = {
    color: 16777215,
    alpha: 1,
    texture: G.WHITE,
    matrix: null,
    fill: null,
    textureSpace: "local"
  };
  ni.defaultStrokeStyle = {
    width: 1,
    color: 16777215,
    alpha: 1,
    alignment: 0.5,
    miterLimit: 10,
    cap: "butt",
    join: "miter",
    texture: G.WHITE,
    matrix: null,
    fill: null,
    textureSpace: "local",
    pixelLine: false
  };
  Dt = ni;
  function oi(s, t = 1) {
    var _a2;
    const e = (_a2 = Yt.RETINA_PREFIX) == null ? void 0 : _a2.exec(s);
    return e ? parseFloat(e[1]) : t;
  }
  function ai(s, t, e) {
    s.label = e, s._sourceOrigin = e;
    const i = new G({
      source: s,
      label: e
    }), r = () => {
      delete t.promiseCache[e], Y.has(e) && Y.remove(e);
    };
    return i.source.once("destroy", () => {
      t.promiseCache[e] && ($("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."), r());
    }), i.once("destroy", () => {
      s.destroyed || ($("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), r());
    }), i;
  }
  const Cc = ".svg", Mc = "image/svg+xml", Pc = {
    extension: {
      type: S.LoadParser,
      priority: vt.Low,
      name: "loadSVG"
    },
    name: "loadSVG",
    id: "svg",
    config: {
      crossOrigin: "anonymous",
      parseAsGraphicsContext: false
    },
    test(s) {
      return jt(s, Mc) || qt(s, Cc);
    },
    async load(s, t, e) {
      var _a2;
      return ((_a2 = t.data) == null ? void 0 : _a2.parseAsGraphicsContext) ?? this.config.parseAsGraphicsContext ? Tc(s) : Sc(s, t, e, this.config.crossOrigin);
    },
    unload(s) {
      s.destroy(true);
    }
  };
  async function Sc(s, t, e, i) {
    var _a2, _b, _c2;
    const r = await W.get().fetch(s), n = W.get().createImage();
    n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`, n.crossOrigin = i, await n.decode();
    const o = ((_a2 = t.data) == null ? void 0 : _a2.width) ?? n.width, a = ((_b = t.data) == null ? void 0 : _b.height) ?? n.height, h = ((_c2 = t.data) == null ? void 0 : _c2.resolution) || oi(s), l = Math.ceil(o * h), c = Math.ceil(a * h), u = W.get().createCanvas(l, c), f = u.getContext("2d");
    f.imageSmoothingEnabled = true, f.imageSmoothingQuality = "high", f.drawImage(n, 0, 0, o * h, a * h);
    const { parseAsGraphicsContext: d, ...p } = t.data ?? {}, g = new Ht({
      resource: u,
      alphaMode: "premultiply-alpha-on-upload",
      resolution: h,
      ...p
    });
    return ai(g, e, s);
  }
  async function Tc(s) {
    const e = await (await W.get().fetch(s)).text(), i = new Dt();
    return i.svg(e), i;
  }
  const kc = `(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;
  let Ut = null, Hs = class {
    constructor() {
      Ut || (Ut = URL.createObjectURL(new Blob([
        kc
      ], {
        type: "application/javascript"
      }))), this.worker = new Worker(Ut);
    }
  };
  Hs.revokeObjectURL = function() {
    Ut && (URL.revokeObjectURL(Ut), Ut = null);
  };
  const Ec = `(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;
  let Nt = null;
  class Hn {
    constructor() {
      Nt || (Nt = URL.createObjectURL(new Blob([
        Ec
      ], {
        type: "application/javascript"
      }))), this.worker = new Worker(Nt);
    }
  }
  Hn.revokeObjectURL = function() {
    Nt && (URL.revokeObjectURL(Nt), Nt = null);
  };
  let Ar = 0, Cs;
  class Ic {
    constructor() {
      this._initialized = false, this._createdWorkers = 0, this._workerPool = [], this._queue = [], this._resolveHash = {};
    }
    isImageBitmapSupported() {
      return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t) => {
        const { worker: e } = new Hs();
        e.addEventListener("message", (i) => {
          e.terminate(), Hs.revokeObjectURL(), t(i.data);
        });
      }), this._isImageBitmapSupported);
    }
    loadImageBitmap(t, e) {
      var _a2;
      return this._run("loadImageBitmap", [
        t,
        (_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.alphaMode
      ]);
    }
    async _initWorkers() {
      this._initialized || (this._initialized = true);
    }
    _getWorker() {
      Cs === void 0 && (Cs = navigator.hardwareConcurrency || 4);
      let t = this._workerPool.pop();
      return !t && this._createdWorkers < Cs && (this._createdWorkers++, t = new Hn().worker, t.addEventListener("message", (e) => {
        this._complete(e.data), this._returnWorker(e.target), this._next();
      })), t;
    }
    _returnWorker(t) {
      this._workerPool.push(t);
    }
    _complete(t) {
      this._resolveHash[t.uuid] && (t.error !== void 0 ? this._resolveHash[t.uuid].reject(t.error) : this._resolveHash[t.uuid].resolve(t.data), delete this._resolveHash[t.uuid]);
    }
    async _run(t, e) {
      await this._initWorkers();
      const i = new Promise((r, n) => {
        this._queue.push({
          id: t,
          arguments: e,
          resolve: r,
          reject: n
        });
      });
      return this._next(), i;
    }
    _next() {
      if (!this._queue.length) return;
      const t = this._getWorker();
      if (!t) return;
      const e = this._queue.pop(), i = e.id;
      this._resolveHash[Ar] = {
        resolve: e.resolve,
        reject: e.reject
      }, t.postMessage({
        data: e.arguments,
        uuid: Ar++,
        id: i
      });
    }
    reset() {
      this._workerPool.forEach((t) => t.terminate()), this._workerPool.length = 0, Object.values(this._resolveHash).forEach(({ reject: t }) => {
        t == null ? void 0 : t(new Error("WorkerManager has been reset before completion"));
      }), this._resolveHash = {}, this._queue.length = 0, this._initialized = false, this._createdWorkers = 0;
    }
  }
  const wr = new Ic(), Rc = [
    ".jpeg",
    ".jpg",
    ".png",
    ".webp",
    ".avif"
  ], Bc = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif"
  ];
  async function Gc(s, t) {
    var _a2;
    const e = await W.get().fetch(s);
    if (!e.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${e.status} ${e.statusText}`);
    const i = await e.blob();
    return ((_a2 = t == null ? void 0 : t.data) == null ? void 0 : _a2.alphaMode) === "premultiplied-alpha" ? createImageBitmap(i, {
      premultiplyAlpha: "none"
    }) : createImageBitmap(i);
  }
  const Xn = {
    name: "loadTextures",
    id: "texture",
    extension: {
      type: S.LoadParser,
      priority: vt.High,
      name: "loadTextures"
    },
    config: {
      preferWorkers: true,
      preferCreateImageBitmap: true,
      crossOrigin: "anonymous"
    },
    test(s) {
      return jt(s, Bc) || qt(s, Rc);
    },
    async load(s, t, e) {
      var _a2;
      let i = null;
      globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await wr.isImageBitmapSupported() ? i = await wr.loadImageBitmap(s, t) : i = await Gc(s, t) : i = await new Promise((n, o) => {
        i = W.get().createImage(), i.crossOrigin = this.config.crossOrigin, i.src = s, i.complete ? n(i) : (i.onload = () => {
          n(i);
        }, i.onerror = o);
      });
      const r = new Ht({
        resource: i,
        alphaMode: "premultiply-alpha-on-upload",
        resolution: ((_a2 = t.data) == null ? void 0 : _a2.resolution) || oi(s),
        ...t.data
      });
      return ai(r, e, s);
    },
    unload(s) {
      s.destroy(true);
    }
  }, Fc = [
    ".mp4",
    ".m4v",
    ".webm",
    ".ogg",
    ".ogv",
    ".h264",
    ".avi",
    ".mov"
  ];
  let Ms, Ps;
  function Dc(s, t, e) {
    e === void 0 && !t.startsWith("data:") ? s.crossOrigin = Oc(t) : e !== false && (s.crossOrigin = typeof e == "string" ? e : "anonymous");
  }
  function Lc(s) {
    return new Promise((t, e) => {
      s.addEventListener("canplaythrough", i), s.addEventListener("error", r), s.load();
      function i() {
        n(), t();
      }
      function r(o) {
        n(), e(o);
      }
      function n() {
        s.removeEventListener("canplaythrough", i), s.removeEventListener("error", r);
      }
    });
  }
  function Oc(s, t = globalThis.location) {
    if (s.startsWith("data:")) return "";
    t || (t = globalThis.location);
    const e = new URL(s, document.baseURI);
    return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : "";
  }
  function zc() {
    const s = [], t = [];
    for (const e of Fc) {
      const i = ce.MIME_TYPES[e.substring(1)] || `video/${e.substring(1)}`;
      Xe(i) && (s.push(e), t.includes(i) || t.push(i));
    }
    return {
      validVideoExtensions: s,
      validVideoMime: t
    };
  }
  const Uc = {
    name: "loadVideo",
    id: "video",
    extension: {
      type: S.LoadParser,
      name: "loadVideo"
    },
    test(s) {
      if (!Ms || !Ps) {
        const { validVideoExtensions: i, validVideoMime: r } = zc();
        Ms = i, Ps = r;
      }
      const t = jt(s, Ps), e = qt(s, Ms);
      return t || e;
    },
    async load(s, t, e) {
      var _a2, _b;
      const i = {
        ...ce.defaultOptions,
        resolution: ((_a2 = t.data) == null ? void 0 : _a2.resolution) || oi(s),
        alphaMode: ((_b = t.data) == null ? void 0 : _b.alphaMode) || await Qr(),
        ...t.data
      }, r = document.createElement("video"), n = {
        preload: i.autoLoad !== false ? "auto" : void 0,
        "webkit-playsinline": i.playsinline !== false ? "" : void 0,
        playsinline: i.playsinline !== false ? "" : void 0,
        muted: i.muted === true ? "" : void 0,
        loop: i.loop === true ? "" : void 0,
        autoplay: i.autoPlay !== false ? "" : void 0
      };
      Object.keys(n).forEach((h) => {
        const l = n[h];
        l !== void 0 && r.setAttribute(h, l);
      }), i.muted === true && (r.muted = true), Dc(r, s, i.crossorigin);
      const o = document.createElement("source");
      let a;
      if (i.mime) a = i.mime;
      else if (s.startsWith("data:")) a = s.slice(5, s.indexOf(";"));
      else if (!s.startsWith("blob:")) {
        const h = s.split("?")[0].slice(s.lastIndexOf(".") + 1).toLowerCase();
        a = ce.MIME_TYPES[h] || `video/${h}`;
      }
      return o.src = s, a && (o.type = a), new Promise((h, l) => {
        i.preload && !i.autoPlay && r.load(), r.addEventListener("canplay", c), r.addEventListener("error", u), o.addEventListener("error", u), r.appendChild(o);
        async function c() {
          const d = new ce({
            ...i,
            resource: r
          });
          f(), t.data.preload && await Lc(r), h(ai(d, e, s));
        }
        function u(d) {
          f(), l(d);
        }
        function f() {
          r.removeEventListener("canplay", c), r.removeEventListener("error", u), o.removeEventListener("error", u);
        }
      });
    },
    unload(s) {
      s.destroy(true);
    }
  }, Yn = {
    extension: {
      type: S.ResolveParser,
      name: "resolveTexture"
    },
    test: Xn.test,
    parse: (s) => {
      var _a2;
      return {
        resolution: parseFloat(((_a2 = Yt.RETINA_PREFIX.exec(s)) == null ? void 0 : _a2[1]) ?? "1"),
        format: s.split(".").pop(),
        src: s
      };
    }
  }, Nc = {
    extension: {
      type: S.ResolveParser,
      priority: -2,
      name: "resolveJson"
    },
    test: (s) => Yt.RETINA_PREFIX.test(s) && s.endsWith(".json"),
    parse: Yn.parse
  };
  class $c {
    constructor() {
      this._detections = [], this._initialized = false, this.resolver = new Yt(), this.loader = new fh(), this.cache = Y, this._backgroundLoader = new rh(this.loader), this._backgroundLoader.active = true, this.reset();
    }
    async init(t = {}) {
      var _a2, _b;
      if (this._initialized) {
        $("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
        return;
      }
      if (this._initialized = true, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
        let n = t.manifest;
        typeof n == "string" && (n = await this.load(n)), this.resolver.addManifest(n);
      }
      const e = ((_a2 = t.texturePreference) == null ? void 0 : _a2.resolution) ?? 1, i = typeof e == "number" ? [
        e
      ] : e, r = await this._detectFormats({
        preferredFormats: (_b = t.texturePreference) == null ? void 0 : _b.format,
        skipDetections: t.skipDetections,
        detections: this._detections
      });
      this.resolver.prefer({
        params: {
          format: r,
          resolution: i
        }
      }), t.preferences && this.setPreferences(t.preferences), t.loadOptions && (this.loader.loadOptions = {
        ...this.loader.loadOptions,
        ...t.loadOptions
      });
    }
    add(t) {
      this.resolver.add(t);
    }
    async load(t, e) {
      this._initialized || await this.init();
      const i = Ne(t), r = at(t).map((a) => {
        if (typeof a != "string") {
          const h = this.resolver.getAlias(a);
          return h.some((l) => !this.resolver.hasKey(l)) && this.add(a), Array.isArray(h) ? h[0] : h;
        }
        return this.resolver.hasKey(a) || this.add({
          alias: a,
          src: a
        }), a;
      }), n = this.resolver.resolve(r), o = await this._mapLoadToResolve(n, e);
      return i ? o[r[0]] : o;
    }
    addBundle(t, e) {
      this.resolver.addBundle(t, e);
    }
    async loadBundle(t, e) {
      this._initialized || await this.init();
      let i = false;
      typeof t == "string" && (i = true, t = [
        t
      ]);
      const r = this.resolver.resolveBundle(t), n = {}, o = Object.keys(r);
      let a = 0;
      const h = [], l = () => {
        e == null ? void 0 : e(h.reduce((u, f) => u + f, 0) / a);
      }, c = o.map((u, f) => {
        const d = r[u], p = Object.values(d), m = [
          ...new Set(p.flat())
        ].reduce((y, x) => y + (x.progressSize || 1), 0);
        return h.push(0), a += m, this._mapLoadToResolve(d, (y) => {
          h[f] = y * m, l();
        }).then((y) => {
          n[u] = y;
        });
      });
      return await Promise.all(c), i ? n[t[0]] : n;
    }
    async backgroundLoad(t) {
      this._initialized || await this.init(), typeof t == "string" && (t = [
        t
      ]);
      const e = this.resolver.resolve(t);
      this._backgroundLoader.add(Object.values(e));
    }
    async backgroundLoadBundle(t) {
      this._initialized || await this.init(), typeof t == "string" && (t = [
        t
      ]);
      const e = this.resolver.resolveBundle(t);
      Object.values(e).forEach((i) => {
        this._backgroundLoader.add(Object.values(i));
      });
    }
    reset() {
      this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = false;
    }
    get(t) {
      if (typeof t == "string") return Y.get(t);
      const e = {};
      for (let i = 0; i < t.length; i++) e[i] = Y.get(t[i]);
      return e;
    }
    async _mapLoadToResolve(t, e) {
      const i = [
        ...new Set(Object.values(t))
      ];
      this._backgroundLoader.active = false;
      const r = await this.loader.load(i, e);
      this._backgroundLoader.active = true;
      const n = {};
      return i.forEach((o) => {
        const a = r[o.src], h = [
          o.src
        ];
        o.alias && h.push(...o.alias), h.forEach((l) => {
          n[l] = a;
        }), Y.set(h, a);
      }), n;
    }
    async unload(t) {
      this._initialized || await this.init();
      const e = at(t).map((r) => typeof r != "string" ? r.src : r), i = this.resolver.resolve(e);
      await this._unloadFromResolved(i);
    }
    async unloadBundle(t) {
      this._initialized || await this.init(), t = at(t);
      const e = this.resolver.resolveBundle(t), i = Object.keys(e).map((r) => this._unloadFromResolved(e[r]));
      await Promise.all(i);
    }
    async _unloadFromResolved(t) {
      const e = Object.values(t);
      e.forEach((i) => {
        Y.remove(i.src);
      }), await this.loader.unload(e);
    }
    async _detectFormats(t) {
      let e = [];
      t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [
        t.preferredFormats
      ]);
      for (const i of t.detections) t.skipDetections || await i.test() ? e = await i.add(e) : t.skipDetections || (e = await i.remove(e));
      return e = e.filter((i, r) => e.indexOf(i) === r), e;
    }
    get detections() {
      return this._detections;
    }
    setPreferences(t) {
      this.loader.parsers.forEach((e) => {
        e.config && Object.keys(e.config).filter((i) => i in t).forEach((i) => {
          e.config[i] = t[i];
        });
      });
    }
  }
  const he = new $c();
  U.handleByList(S.LoadParser, he.loader.parsers).handleByList(S.ResolveParser, he.resolver.parsers).handleByList(S.CacheParser, he.cache.parsers).handleByList(S.DetectionParser, he.detections);
  U.add(nh, ah, oh, dh, lh, ch, uh, gh, _h, Sh, Pc, Xn, Uc, ih, sh, Yn, Nc);
  const vr = {
    loader: S.LoadParser,
    resolver: S.ResolveParser,
    cache: S.CacheParser,
    detection: S.DetectionParser
  };
  U.handle(S.Asset, (s) => {
    const t = s.ref;
    Object.entries(vr).filter(([e]) => !!t[e]).forEach(([e, i]) => U.add(Object.assign(t[e], {
      extension: t[e].extension ?? i
    })));
  }, (s) => {
    const t = s.ref;
    Object.keys(vr).filter((e) => !!t[e]).forEach((e) => U.remove(t[e]));
  });
  class Vc {
    constructor() {
      this.isBatchable = false;
    }
    reset() {
      this.isBatchable = false, this.context = null, this.graphicsData && (this.graphicsData.destroy(), this.graphicsData = null);
    }
    destroy() {
      this.reset();
    }
  }
  class Wc {
    constructor() {
      this.instructions = new qs();
    }
    init() {
      this.instructions.reset();
    }
    destroy() {
      this.instructions.destroy(), this.instructions = null;
    }
  }
  const hi = class Xs {
    constructor(t) {
      this._renderer = t, this._managedContexts = new Ye({
        renderer: t,
        type: "resource",
        name: "graphicsContext"
      });
    }
    init(t) {
      Xs.defaultOptions.bezierSmoothness = (t == null ? void 0 : t.bezierSmoothness) ?? Xs.defaultOptions.bezierSmoothness;
    }
    getContextRenderData(t) {
      return this.getGpuContext(t).graphicsData || this._initContextRenderData(t);
    }
    updateGpuContext(t) {
      const e = t._gpuData, i = !!e[this._renderer.uid], r = e[this._renderer.uid] || this._initContext(t);
      return (t.dirty || !i) && (i && r.reset(), r.isBatchable = false, t.dirty = false), r;
    }
    getGpuContext(t) {
      return t._gpuData[this._renderer.uid] || this._initContext(t);
    }
    _initContextRenderData(t) {
      const e = new Wc(), i = this.getGpuContext(t);
      return i.graphicsData = e, e.init(), e;
    }
    _initContext(t) {
      const e = new Vc();
      return e.context = t, t._gpuData[this._renderer.uid] = e, this._managedContexts.add(t), e;
    }
    destroy() {
      this._managedContexts.destroy(), this._renderer = null;
    }
  };
  hi.extension = {
    type: [
      S.CanvasSystem
    ],
    name: "graphicsContext"
  };
  hi.defaultOptions = {
    bezierSmoothness: 0.5
  };
  let Hc = hi;
  class jn {
    constructor(t, e) {
      this.state = fn.for2d(), this.renderer = t, this._adaptor = e, this.renderer.runners.contextChange.add(this), this._managedGraphics = new Ye({
        renderer: t,
        type: "renderable",
        priority: -1,
        name: "graphics"
      });
    }
    contextChange() {
      this._adaptor.contextChange(this.renderer);
    }
    validateRenderable(t) {
      return false;
    }
    addRenderable(t, e) {
      this._managedGraphics.add(t), this.renderer.renderPipes.batch.break(e), e.add(t);
    }
    updateRenderable(t) {
    }
    execute(t) {
      t.isRenderable && this._adaptor.execute(this, t);
    }
    destroy() {
      this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null;
    }
  }
  jn.extension = {
    type: [
      S.CanvasPipes
    ],
    name: "graphics"
  };
  Xc = function(s, t, e) {
    const i = (s >> 24 & 255) / 255;
    t[e++] = (s & 255) / 255 * i, t[e++] = (s >> 8 & 255) / 255 * i, t[e++] = (s >> 16 & 255) / 255 * i, t[e++] = i;
  };
  class Yc {
    constructor() {
      this.batches = [], this.batched = false;
    }
    destroy() {
      this.batches.forEach((t) => {
        tt.return(t);
      }), this.batches.length = 0;
    }
  }
  class qn {
    constructor(t, e) {
      this.state = fn.for2d(), this.renderer = t, this._adaptor = e, this.renderer.runners.contextChange.add(this), this._managedGraphics = new Ye({
        renderer: t,
        type: "renderable",
        priority: -1,
        name: "graphics"
      });
    }
    contextChange() {
      this._adaptor.contextChange(this.renderer);
    }
    validateRenderable(t) {
      const e = t.context, i = !!t._gpuData, n = this.renderer.graphicsContext.updateGpuContext(e);
      return !!(n.isBatchable || i !== n.isBatchable);
    }
    addRenderable(t, e) {
      const r = this.renderer.graphicsContext.updateGpuContext(t.context);
      t.didViewUpdate && this._rebuild(t), r.isBatchable ? this._addToBatcher(t, e) : (this.renderer.renderPipes.batch.break(e), e.add(t));
    }
    updateRenderable(t) {
      const i = this._getGpuDataForRenderable(t).batches;
      for (let r = 0; r < i.length; r++) {
        const n = i[r];
        n._batcher.updateElement(n);
      }
    }
    execute(t) {
      if (!t.isRenderable) return;
      const e = this.renderer, i = t.context;
      if (!e.graphicsContext.getGpuContext(i).batches.length) return;
      const n = i.customShader || this._adaptor.shader;
      this.state.blendMode = t.groupBlendMode;
      const o = n.resources.localUniforms.uniforms;
      o.uTransformMatrix = t.groupTransform, o.uRound = e._roundPixels | t._roundPixels, Xc(t.groupColorAlpha, o.uColor, 0), this._adaptor.execute(this, t);
    }
    _rebuild(t) {
      const e = this._getGpuDataForRenderable(t), r = this.renderer.graphicsContext.updateGpuContext(t.context);
      e.destroy(), r.isBatchable && this._updateBatchesForRenderable(t, e);
    }
    _addToBatcher(t, e) {
      const i = this.renderer.renderPipes.batch, r = this._getGpuDataForRenderable(t).batches;
      for (let n = 0; n < r.length; n++) {
        const o = r[n];
        i.addToBatch(o, e);
      }
    }
    _getGpuDataForRenderable(t) {
      return t._gpuData[this.renderer.uid] || this._initGpuDataForRenderable(t);
    }
    _initGpuDataForRenderable(t) {
      const e = new Yc();
      return t._gpuData[this.renderer.uid] = e, this._managedGraphics.add(t), e;
    }
    _updateBatchesForRenderable(t, e) {
      const i = t.context, n = this.renderer.graphicsContext.getGpuContext(i), o = this.renderer._roundPixels | t._roundPixels;
      e.batches = n.batches.map((a) => {
        const h = tt.get(ei);
        return a.copyTo(h), h.renderable = t, h.roundPixels = o, h;
      });
    }
    destroy() {
      this._managedGraphics.destroy(), this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null;
    }
  }
  qn.extension = {
    type: [
      S.WebGLPipes,
      S.WebGPUPipes
    ],
    name: "graphics"
  };
  U.add(jn);
  U.add(qn);
  U.add(Hc);
  U.add(ri);
  $t = class extends Vr {
    constructor(t) {
      t instanceof Dt && (t = {
        context: t
      });
      const { context: e, roundPixels: i, ...r } = t || {};
      super({
        label: "Graphics",
        ...r
      }), this.renderPipeId = "graphics", e ? this.context = e : (this.context = this._ownedContext = new Dt(), this.context.autoGarbageCollect = this.autoGarbageCollect), this.didViewUpdate = true, this.allowChildren = false, this.roundPixels = i ?? false;
    }
    set context(t) {
      t !== this._context && (this._context && (this._context.off("update", this.onViewUpdate, this), this._context.off("unload", this.unload, this)), this._context = t, this._context.on("update", this.onViewUpdate, this), this._context.on("unload", this.unload, this), this.onViewUpdate());
    }
    get context() {
      return this._context;
    }
    get bounds() {
      return this._context.bounds;
    }
    updateBounds() {
    }
    containsPoint(t) {
      return this._context.containsPoint(t);
    }
    destroy(t) {
      this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === true || (t == null ? void 0 : t.context) === true) && this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t);
    }
    _onTouch(t) {
      this._gcLastUsed = t, this._context._gcLastUsed = t;
    }
    _callContextMethod(t, e) {
      return this.context[t](...e), this;
    }
    setFillStyle(...t) {
      return this._callContextMethod("setFillStyle", t);
    }
    setStrokeStyle(...t) {
      return this._callContextMethod("setStrokeStyle", t);
    }
    fill(...t) {
      return this._callContextMethod("fill", t);
    }
    stroke(...t) {
      return this._callContextMethod("stroke", t);
    }
    texture(...t) {
      return this._callContextMethod("texture", t);
    }
    beginPath() {
      return this._callContextMethod("beginPath", []);
    }
    cut() {
      return this._callContextMethod("cut", []);
    }
    arc(...t) {
      return this._callContextMethod("arc", t);
    }
    arcTo(...t) {
      return this._callContextMethod("arcTo", t);
    }
    arcToSvg(...t) {
      return this._callContextMethod("arcToSvg", t);
    }
    bezierCurveTo(...t) {
      return this._callContextMethod("bezierCurveTo", t);
    }
    closePath() {
      return this._callContextMethod("closePath", []);
    }
    ellipse(...t) {
      return this._callContextMethod("ellipse", t);
    }
    circle(...t) {
      return this._callContextMethod("circle", t);
    }
    path(...t) {
      return this._callContextMethod("path", t);
    }
    lineTo(...t) {
      return this._callContextMethod("lineTo", t);
    }
    moveTo(...t) {
      return this._callContextMethod("moveTo", t);
    }
    quadraticCurveTo(...t) {
      return this._callContextMethod("quadraticCurveTo", t);
    }
    rect(...t) {
      return this._callContextMethod("rect", t);
    }
    roundRect(...t) {
      return this._callContextMethod("roundRect", t);
    }
    poly(...t) {
      return this._callContextMethod("poly", t);
    }
    regularPoly(...t) {
      return this._callContextMethod("regularPoly", t);
    }
    roundPoly(...t) {
      return this._callContextMethod("roundPoly", t);
    }
    roundShape(...t) {
      return this._callContextMethod("roundShape", t);
    }
    filletRect(...t) {
      return this._callContextMethod("filletRect", t);
    }
    chamferRect(...t) {
      return this._callContextMethod("chamferRect", t);
    }
    star(...t) {
      return this._callContextMethod("star", t);
    }
    svg(...t) {
      return this._callContextMethod("svg", t);
    }
    restore(...t) {
      return this._callContextMethod("restore", t);
    }
    save() {
      return this._callContextMethod("save", []);
    }
    getTransform() {
      return this.context.getTransform();
    }
    resetTransform() {
      return this._callContextMethod("resetTransform", []);
    }
    rotateTransform(...t) {
      return this._callContextMethod("rotate", t);
    }
    scaleTransform(...t) {
      return this._callContextMethod("scale", t);
    }
    setTransform(...t) {
      return this._callContextMethod("setTransform", t);
    }
    transform(...t) {
      return this._callContextMethod("transform", t);
    }
    translateTransform(...t) {
      return this._callContextMethod("translate", t);
    }
    clear() {
      return this._callContextMethod("clear", []);
    }
    get fillStyle() {
      return this._context.fillStyle;
    }
    set fillStyle(t) {
      this._context.fillStyle = t;
    }
    get strokeStyle() {
      return this._context.strokeStyle;
    }
    set strokeStyle(t) {
      this._context.strokeStyle = t;
    }
    clone(t = false) {
      return t ? new $t(this._context.clone()) : (this._ownedContext = null, new $t(this._context));
    }
    lineStyle(t, e, i) {
      F(H, "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");
      const r = {};
      return t && (r.width = t), e && (r.color = e), i && (r.alpha = i), this.context.strokeStyle = r, this;
    }
    beginFill(t, e) {
      F(H, "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");
      const i = {};
      return t !== void 0 && (i.color = t), e !== void 0 && (i.alpha = e), this.context.fillStyle = i, this;
    }
    endFill() {
      F(H, "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."), this.context.fill();
      const t = this.context.strokeStyle;
      return (t.width !== Dt.defaultStrokeStyle.width || t.color !== Dt.defaultStrokeStyle.color || t.alpha !== Dt.defaultStrokeStyle.alpha) && this.context.stroke(), this;
    }
    drawCircle(...t) {
      return F(H, "Graphics#drawCircle has been renamed to Graphics#circle"), this._callContextMethod("circle", t);
    }
    drawEllipse(...t) {
      return F(H, "Graphics#drawEllipse has been renamed to Graphics#ellipse"), this._callContextMethod("ellipse", t);
    }
    drawPolygon(...t) {
      return F(H, "Graphics#drawPolygon has been renamed to Graphics#poly"), this._callContextMethod("poly", t);
    }
    drawRect(...t) {
      return F(H, "Graphics#drawRect has been renamed to Graphics#rect"), this._callContextMethod("rect", t);
    }
    drawRoundedRect(...t) {
      return F(H, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"), this._callContextMethod("roundRect", t);
    }
    drawStar(...t) {
      return F(H, "Graphics#drawStar has been renamed to Graphics#star"), this._callContextMethod("star", t);
    }
  };
  U.add(oo, ao);
  ru = function(s, t) {
    Qn(t, false), Jn(async () => {
      const e = new Sn();
      await e.init({
        background: "1099bb"
      }), document.body.appendChild(e.canvas);
      const i = await he.load(no("/") + "ocr.jpg"), r = new Wt(i), n = new xt();
      n.addChild(r), e.stage.addChild(n);
      const o = window.innerWidth, a = i.width / i.height, h = o / a;
      r.width = o, r.height = h, n.width = o, n.height = h, r.x = 0, r.y = 0, r.anchor.set(0), e.canvas.style.width = o + "px", e.canvas.style.height = h + "px", e.renderer.resize(o, h);
      const u = (await (await fetch("http://localhost:8080/result.json")).json()).ocrResults[0].prunedResult, f = u.dt_polys, g = (await (await fetch("http://localhost:3000/ocr/cluster?eps=300&minPoints=3")).json()).columns, m = u.rec_texts, y = m.findIndex((v) => v.toLowerCase().includes("isbn"));
      console.log("Columns: ", g), console.log("textDetArr: ", m), console.log("isbnIndex: ", y);
      let x;
      for (let v = 0; v < g.length; v++) g[v].sortedPolygons.includes(y) && (x = v);
      const _ = g[x].sortedPolygons;
      console.log("columnIndex: ", x), console.log("isbnPolygon: ", _), console.log(`\u{1F4CA} Clustering complete: Found ${g.length} columns`);
      const b = [
        16711680,
        65280,
        255,
        16776960,
        16711935,
        65535,
        16737792,
        6684927,
        65433,
        16763904
      ], C = (v) => b[v % b.length], A = r.width / i.width, w = r.height / i.height;
      g.forEach((v) => {
        const M = C(v.columnId);
        console.log(`Column ${v.columnId} (Color: 0x${M.toString(16).toUpperCase().padStart(6, "0")}): ${v.polygonIndices.length} polygons`), v.sortedPolygons.forEach((I) => {
          const L = f[I].map(([P, T]) => [
            P * A,
            T * w
          ]).flat(), K = new $t();
          K.poly(L).fill({
            color: 0,
            alpha: 0
          }), K.poly(L).stroke({
            width: 3,
            color: M
          }), K.eventMode = "static", K.cursor = "pointer", K.x = 0, K.y = 0, K.on("pointerdown", () => {
            const P = u.rec_texts[I] || "N/A", T = u.rec_scores[I] || 0, bt = Math.max(...u.rec_polys[I].flat().filter((pt, ut) => ut % 2 === 0)), R = Math.max(...u.rec_polys[I].flat().filter((pt, ut) => ut % 2 !== 0)), it = Math.min(...u.rec_polys[I].flat().filter((pt, ut) => ut % 2 !== 0)), At = Math.min(...u.rec_polys[I].flat().filter((pt, ut) => ut % 2 === 0));
            console.log(`\u{1F4CD} Clicked: Column ${v.columnId} | Poly ${I} | Text: "${P}" | Score: ${(T * 100).toFixed(2)}%`), console.log("Polygon Points: ", u.rec_polys[I].flat(1 / 0)), console.log("Xmax: ", R, " Ymax: ", bt, " Xmin: ", it);
            const ct = new $t();
            ct.x = 0, ct.y = 0, ct.rect(it, At, R - it, bt - At).fill({
              color: 61440,
              alpha: 0.3
            }), n.addChild(ct);
          }), n.addChild(K);
        });
      }), new $t();
      const E = _.map((v) => m[v].replace(/\D/g, "").slice(0, 13));
      console.log("cleanedIsbn: ", E), E.slice(5, 10).forEach((v, M) => {
        console.log(`ISBN ${M}: ${v}`), setTimeout(async () => {
        }, 1e3 * M);
      });
    }), eo(), to();
  };
})();
export {
  un as $,
  An as A,
  ye as B,
  nt as C,
  W as D,
  _t as E,
  _e as F,
  He as G,
  _r as H,
  F as I,
  H as J,
  Er as K,
  j as L,
  B as M,
  Ht as N,
  Y as O,
  Z as P,
  Fh as Q,
  Fs as R,
  Ks as S,
  G as T,
  Ue as U,
  Ye as V,
  Hi as W,
  Oe as X,
  Zs as Y,
  xn as Z,
  lt as _,
  __tla,
  fn as a,
  dl as a0,
  pl as a1,
  Al as a2,
  xl as a3,
  _o as a4,
  Cl as a5,
  tt as a6,
  Dr as a7,
  ht as a8,
  $r as a9,
  Si as aa,
  Wt as ab,
  Ko as ac,
  ki as ad,
  ns as ae,
  Ei as af,
  Jo as ag,
  zr as ah,
  Xc as ai,
  wn as aj,
  th as ak,
  qa as al,
  jh as am,
  Nh as an,
  fl as ao,
  ml as ap,
  wl as aq,
  bl as ar,
  vl as as,
  ru as at,
  an as b,
  Ve as c,
  Oh as d,
  J as e,
  V as f,
  ba as g,
  D as h,
  Le as i,
  S as j,
  $t as k,
  Ul as l,
  Or as m,
  pi as n,
  Il as o,
  yc as p,
  Zr as q,
  U as r,
  je as s,
  Ot as t,
  Ia as u,
  Go as v,
  $ as w,
  xt as x,
  Dt as y,
  ae as z
};
