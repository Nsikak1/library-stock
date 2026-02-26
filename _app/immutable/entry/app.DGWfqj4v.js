const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DtpZZmmg.js","../chunks/Dy7lmqI0.js","../chunks/DUA4kTxm.js","../chunks/DL1G3EVv.js","../chunks/CEiJdahZ.js","../chunks/DamuyVK_.js","../assets/0.CwvzuBzr.css","../nodes/1.DpbhXjsr.js","../chunks/DsF2ImuW.js","../chunks/Df04Hj-s.js","../chunks/Bme71SXR.js","../chunks/DzE6Z97F.js","../chunks/CYOjpWgn.js","../chunks/Dr7-BOgw.js","../nodes/2.BtOAY7uU.js","../chunks/J6GTVhZb.js","../chunks/CmnrF15K.js","../assets/SpreadSheet.BGs6MCJg.css","../assets/2.Bz96zTJQ.css","../nodes/3.B_ZVFhZ7.js","../chunks/B-6X-cLz.js","../nodes/4.CVbaWpF6.js","../chunks/CKy_A0-a.js","../assets/4.DKTc5Tem.css","../nodes/5.vLB9tZMr.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as G, W as U, V as W, X as z, s as k, ad as J, g as d, aJ as K, aK as Q, z as X, aL as Y, p as H, F as Z, G as $, o as ee, a as L, T as te, f as w, c as re, b as se, P as ae, Q as ne, aM as x, O as oe } from "../chunks/DUA4kTxm.js";
import { h as ce, m as ie, u as le, s as ue } from "../chunks/Df04Hj-s.js";
import { f as I, a as E, c as A, t as me } from "../chunks/Dy7lmqI0.js";
import { p as T, i as S } from "../chunks/J6GTVhZb.js";
import { B as de } from "../chunks/DL1G3EVv.js";
import { b as j } from "../chunks/DamuyVK_.js";
let De, be, je, Ce, Ve, M, xe, Te, Ae, Se;
let __tla = (async () => {
  var _t, _e2;
  function C(n, e, s) {
    G && U();
    var i = new de(n);
    W(() => {
      var o = e() ?? null;
      i.ensure(o, o && ((r) => s(r, o)));
    }, z);
  }
  function fe(n) {
    return class extends he {
      constructor(e) {
        super({
          component: n,
          ...e
        });
      }
    };
  }
  class he {
    constructor(e) {
      __privateAdd(this, _t);
      __privateAdd(this, _e2);
      var _a;
      var s = /* @__PURE__ */ new Map(), i = (r, t) => {
        var a = Y(t, false, false);
        return s.set(r, a), a;
      };
      const o = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(r, t) {
          return d(s.get(t) ?? i(t, Reflect.get(r, t)));
        },
        has(r, t) {
          return t === J ? true : (d(s.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
        },
        set(r, t, a) {
          return k(s.get(t) ?? i(t, a), a), Reflect.set(r, t, a);
        }
      });
      __privateSet(this, _e2, (e.hydrate ? ce : ie)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: o,
        context: e.context,
        intro: e.intro ?? false,
        recover: e.recover
      })), !K && (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && Q(), __privateSet(this, _t, o.$$events);
      for (const r of Object.keys(__privateGet(this, _e2))) r === "$set" || r === "$destroy" || r === "$on" || X(this, r, {
        get() {
          return __privateGet(this, _e2)[r];
        },
        set(t) {
          __privateGet(this, _e2)[r] = t;
        },
        enumerable: true
      });
      __privateGet(this, _e2).$set = (r) => {
        Object.assign(o, r);
      }, __privateGet(this, _e2).$destroy = () => {
        le(__privateGet(this, _e2));
      };
    }
    $set(e) {
      __privateGet(this, _e2).$set(e);
    }
    $on(e, s) {
      __privateGet(this, _t)[e] = __privateGet(this, _t)[e] || [];
      const i = (...o) => s.call(this, ...o);
      return __privateGet(this, _t)[e].push(i), () => {
        __privateGet(this, _t)[e] = __privateGet(this, _t)[e].filter((o) => o !== i);
      };
    }
    $destroy() {
      __privateGet(this, _e2).$destroy();
    }
  }
  _t = new WeakMap();
  _e2 = new WeakMap();
  let _e, ve, D, b;
  _e = "modulepreload";
  ve = function(n, e) {
    return new URL(n, e).href;
  };
  D = {};
  b = function(e, s, i) {
    let o = Promise.resolve();
    if (s && s.length > 0) {
      let O = function(l) {
        return Promise.all(l.map((m) => Promise.resolve(m).then((f) => ({
          status: "fulfilled",
          value: f
        }), (f) => ({
          status: "rejected",
          reason: f
        }))));
      };
      const t = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), R = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = O(s.map((l) => {
        if (l = ve(l, i), l in D) return;
        D[l] = true;
        const m = l.endsWith(".css"), f = m ? '[rel="stylesheet"]' : "";
        if (i) for (let h = t.length - 1; h >= 0; h--) {
          const c = t[h];
          if (c.href === l && (!m || c.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${f}`)) return;
        const u = document.createElement("link");
        if (u.rel = m ? "stylesheet" : _e, m || (u.as = "script"), u.crossOrigin = "", u.href = l, R && u.setAttribute("nonce", R), document.head.appendChild(u), m) return new Promise((h, c) => {
          u.addEventListener("load", h), u.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function r(t) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = t, window.dispatchEvent(a), !a.defaultPrevented) throw t;
    }
    return o.then((t) => {
      for (const a of t || []) a.status === "rejected" && r(a.reason);
      return e().catch(r);
    });
  };
  xe = {};
  var ge = I('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), ye = I("<!> <!>", 1);
  function Ee(n, e) {
    H(e, true);
    let s = T(e, "components", 23, () => []), i = T(e, "data_0", 3, null), o = T(e, "data_1", 3, null);
    Z(() => e.stores.page.set(e.page)), $(() => {
      e.stores, e.page, e.constructors, s(), e.form, i(), o(), e.stores.page.notify();
    });
    let r = L(false), t = L(false), a = L(null);
    ee(() => {
      const c = e.stores.page.subscribe(() => {
        d(r) && (k(t, true), te().then(() => {
          k(a, document.title || "untitled page", true);
        }));
      });
      return k(r, true), c;
    });
    const R = x(() => e.constructors[1]);
    var O = ye(), l = w(O);
    {
      var m = (c) => {
        const _ = x(() => e.constructors[0]);
        var v = A(), P = w(v);
        C(P, () => d(_), (g, y) => {
          j(y(g, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            },
            get params() {
              return e.page.params;
            },
            children: (p, Pe) => {
              var V = A(), N = w(V);
              C(N, () => d(R), (B, F) => {
                j(F(B, {
                  get data() {
                    return o();
                  },
                  get form() {
                    return e.form;
                  },
                  get params() {
                    return e.page.params;
                  }
                }), (q) => s()[1] = q, () => {
                  var _a;
                  return (_a = s()) == null ? void 0 : _a[1];
                });
              }), E(p, V);
            },
            $$slots: {
              default: true
            }
          }), (p) => s()[0] = p, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), E(c, v);
      }, f = (c) => {
        const _ = x(() => e.constructors[0]);
        var v = A(), P = w(v);
        C(P, () => d(_), (g, y) => {
          j(y(g, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            },
            get params() {
              return e.page.params;
            }
          }), (p) => s()[0] = p, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), E(c, v);
      };
      S(l, (c) => {
        e.constructors[1] ? c(m) : c(f, false);
      });
    }
    var u = re(l, 2);
    {
      var h = (c) => {
        var _ = ge(), v = ae(_);
        {
          var P = (g) => {
            var y = me();
            oe(() => ue(y, d(a))), E(g, y);
          };
          S(v, (g) => {
            d(t) && g(P);
          });
        }
        ne(_), E(c, _);
      };
      S(u, (c) => {
        d(r) && c(h);
      });
    }
    E(n, O), se();
  }
  Ae = fe(Ee);
  Te = [
    () => b(() => import("../nodes/0.DtpZZmmg.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
    () => b(() => import("../nodes/1.DpbhXjsr.js"), __vite__mapDeps([7,1,2,8,9,10,11,12,13]), import.meta.url),
    () => b(() => import("../nodes/2.BtOAY7uU.js"), __vite__mapDeps([14,1,2,15,3,16,9,10,4,5,8,13,17,18]), import.meta.url),
    () => b(() => import("../nodes/3.B_ZVFhZ7.js"), __vite__mapDeps([19,1,2,10,4,5,20]), import.meta.url),
    () => b(() => import("../nodes/4.CVbaWpF6.js"), __vite__mapDeps([21,1,2,10,15,3,22,20,5,13,12,23]), import.meta.url),
    () => b(() => import("../nodes/5.vLB9tZMr.js"), __vite__mapDeps([24,1,2,16,9,10,15,3,4,5,8,13,17,22]), import.meta.url)
  ];
  Se = [];
  je = {
    "/": [
      2
    ],
    "/camera": [
      3
    ],
    "/livekit": [
      4
    ],
    "/spreadsheet": [
      5
    ]
  };
  M = {
    handleError: (({ error: n }) => {
      console.error(n);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  be = Object.fromEntries(Object.entries(M.transport).map(([n, e]) => [
    n,
    e.decode
  ]));
  Ce = Object.fromEntries(Object.entries(M.transport).map(([n, e]) => [
    n,
    e.encode
  ]));
  Ve = false;
  De = (n, e) => be[n](e);
})();
export {
  __tla,
  De as decode,
  be as decoders,
  je as dictionary,
  Ce as encoders,
  Ve as hash,
  M as hooks,
  xe as matchers,
  Te as nodes,
  Ae as root,
  Se as server_loads
};
