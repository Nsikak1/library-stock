var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _t, _s, _e, _i, _a, _f, _r;
import { r as l, d as o, p as u, c as m, e as n, h as d, i as p, j as _, k as v, m as k } from "./BtsFhd5D.js";
class w {
  constructor(t, s = true) {
    __publicField(this, "anchor");
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __privateAdd(this, _s, /* @__PURE__ */ new Map());
    __privateAdd(this, _e, /* @__PURE__ */ new Map());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __privateAdd(this, _a, true);
    __privateAdd(this, _f, (t) => {
      if (__privateGet(this, _t).has(t)) {
        var s = __privateGet(this, _t).get(t), e = __privateGet(this, _s).get(s);
        if (e) l(e), __privateGet(this, _i).delete(s);
        else {
          var a = __privateGet(this, _e).get(s);
          a && (__privateGet(this, _s).set(s, a.effect), __privateGet(this, _e).delete(s), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), e = a.effect);
        }
        for (const [i, f] of __privateGet(this, _t)) {
          if (__privateGet(this, _t).delete(i), i === t) break;
          const r = __privateGet(this, _e).get(f);
          r && (o(r.effect), __privateGet(this, _e).delete(f));
        }
        for (const [i, f] of __privateGet(this, _s)) {
          if (i === s || __privateGet(this, _i).has(i)) continue;
          const r = () => {
            if (Array.from(__privateGet(this, _t).values()).includes(i)) {
              var c = document.createDocumentFragment();
              k(f, c), c.append(n()), __privateGet(this, _e).set(i, { effect: f, fragment: c });
            } else o(f);
            __privateGet(this, _i).delete(i), __privateGet(this, _s).delete(i);
          };
          __privateGet(this, _a) || !e ? (__privateGet(this, _i).add(i), u(f, r, false)) : r();
        }
      }
    });
    __privateAdd(this, _r, (t) => {
      __privateGet(this, _t).delete(t);
      const s = Array.from(__privateGet(this, _t).values());
      for (const [e, a] of __privateGet(this, _e)) s.includes(e) || (o(a.effect), __privateGet(this, _e).delete(e));
    });
    this.anchor = t, __privateSet(this, _a, s);
  }
  ensure(t, s) {
    var e = p, a = m();
    if (s && !__privateGet(this, _s).has(t) && !__privateGet(this, _e).has(t)) if (a) {
      var i = document.createDocumentFragment(), f = n();
      i.append(f), __privateGet(this, _e).set(t, { effect: d(() => s(f)), fragment: i });
    } else __privateGet(this, _s).set(t, d(() => s(this.anchor)));
    if (__privateGet(this, _t).set(e, t), a) {
      for (const [r, h] of __privateGet(this, _s)) r === t ? e.unskip_effect(h) : e.skip_effect(h);
      for (const [r, h] of __privateGet(this, _e)) r === t ? e.unskip_effect(h.effect) : e.skip_effect(h.effect);
      e.oncommit(__privateGet(this, _f)), e.ondiscard(__privateGet(this, _r));
    } else _ && (this.anchor = v), __privateGet(this, _f).call(this, e);
  }
}
_t = new WeakMap();
_s = new WeakMap();
_e = new WeakMap();
_i = new WeakMap();
_a = new WeakMap();
_f = new WeakMap();
_r = new WeakMap();
export {
  w as B
};
