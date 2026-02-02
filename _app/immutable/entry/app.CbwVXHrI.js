const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CjG-f9Of.js","../chunks/DST53ZDr.js","../chunks/BR3rKFbi.js","../chunks/LIiORL9O.js","../chunks/Buczzx1X.js","../nodes/1.b9Rw5I3D.js","../chunks/B2oESC31.js","../chunks/B8RD_jRS.js","../chunks/B36C9N_H.js","../chunks/yDhF-Dpq.js","../chunks/CYOjpWgn.js","../chunks/59Ynzdw3.js","../chunks/BEnWiOuu.js","../nodes/2.BdEX_I0f.js","../chunks/Cuf2qAe0.js","../chunks/BOZTa0ta.js","../chunks/BTQ_Y1M3.js","../assets/SpreadSheet.CCThM8pZ.css","../assets/2.Dg6tInJj.css","../nodes/3.J0WqXuvc.js","../chunks/B-6X-cLz.js","../nodes/4.Q6j6U6xF.js","../chunks/CKy_A0-a.js","../assets/4.DKTc5Tem.css","../nodes/5.B5vA-ue7.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as F, X as W, W as Y, Y as G, s as k, a6 as H, g as f, aL as Q, aM as X, y as z, aN as J, p as K, H as Z, E as $, a as L, U as ee, f as w, c as te, b as re, Q as se, R as ae, aO as x, P as ne } from "../chunks/BR3rKFbi.js";
import { h as oe, m as ce, u as ie, s as le } from "../chunks/B8RD_jRS.js";
import { f as N, a as E, c as A, t as ue } from "../chunks/DST53ZDr.js";
import { o as me } from "../chunks/BEnWiOuu.js";
import { p as S, i as T } from "../chunks/Cuf2qAe0.js";
import { B as fe } from "../chunks/LIiORL9O.js";
import { b as j } from "../chunks/BOZTa0ta.js";
let Ne, be, Ce, De, Ie, V, Ae, Te, Se, je;
let __tla = (async () => {
  var _t, _e2;
  function C(n, e, s) {
    F && W();
    var i = new fe(n);
    Y(() => {
      var o = e() ?? null;
      i.ensure(o, o && ((r) => s(r, o)));
    }, G);
  }
  function de(n) {
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
        var a = J(t, false, false);
        return s.set(r, a), a;
      };
      const o = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(r, t) {
          return f(s.get(t) ?? i(t, Reflect.get(r, t)));
        },
        has(r, t) {
          return t === H ? true : (f(s.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
        },
        set(r, t, a) {
          return k(s.get(t) ?? i(t, a), a), Reflect.set(r, t, a);
        }
      });
      __privateSet(this, _e2, (e.hydrate ? oe : ce)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: o,
        context: e.context,
        intro: e.intro ?? false,
        recover: e.recover
      })), !Q && (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && X(), __privateSet(this, _t, o.$$events);
      for (const r of Object.keys(__privateGet(this, _e2))) r === "$set" || r === "$destroy" || r === "$on" || z(this, r, {
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
        ie(__privateGet(this, _e2));
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
  let _e, ve, I, b;
  _e = "modulepreload";
  ve = function(n, e) {
    return new URL(n, e).href;
  };
  I = {};
  b = function(e, s, i) {
    let o = Promise.resolve();
    if (s && s.length > 0) {
      let O = function(l) {
        return Promise.all(l.map((m) => Promise.resolve(m).then((d) => ({
          status: "fulfilled",
          value: d
        }), (d) => ({
          status: "rejected",
          reason: d
        }))));
      };
      const t = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), R = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = O(s.map((l) => {
        if (l = ve(l, i), l in I) return;
        I[l] = true;
        const m = l.endsWith(".css"), d = m ? '[rel="stylesheet"]' : "";
        if (i) for (let h = t.length - 1; h >= 0; h--) {
          const c = t[h];
          if (c.href === l && (!m || c.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${d}`)) return;
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
  Ae = {};
  var ge = N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), ye = N("<!> <!>", 1);
  function Ee(n, e) {
    K(e, true);
    let s = S(e, "components", 23, () => []), i = S(e, "data_0", 3, null), o = S(e, "data_1", 3, null);
    Z(() => e.stores.page.set(e.page)), $(() => {
      e.stores, e.page, e.constructors, s(), e.form, i(), o(), e.stores.page.notify();
    });
    let r = L(false), t = L(false), a = L(null);
    me(() => {
      const c = e.stores.page.subscribe(() => {
        f(r) && (k(t, true), ee().then(() => {
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
        C(P, () => f(_), (g, y) => {
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
              var D = A(), M = w(D);
              C(M, () => f(R), (B, U) => {
                j(U(B, {
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
              }), E(p, D);
            },
            $$slots: {
              default: true
            }
          }), (p) => s()[0] = p, () => {
            var _a;
            return (_a = s()) == null ? void 0 : _a[0];
          });
        }), E(c, v);
      }, d = (c) => {
        const _ = x(() => e.constructors[0]);
        var v = A(), P = w(v);
        C(P, () => f(_), (g, y) => {
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
      T(l, (c) => {
        e.constructors[1] ? c(m) : c(d, false);
      });
    }
    var u = te(l, 2);
    {
      var h = (c) => {
        var _ = ge(), v = se(_);
        {
          var P = (g) => {
            var y = ue();
            ne(() => le(y, f(a))), E(g, y);
          };
          T(v, (g) => {
            f(t) && g(P);
          });
        }
        ae(_), E(c, _);
      };
      T(u, (c) => {
        f(r) && c(h);
      });
    }
    E(n, O), re();
  }
  Se = de(Ee);
  Te = [
    () => b(() => import("../nodes/0.CjG-f9Of.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url),
    () => b(() => import("../nodes/1.b9Rw5I3D.js"), __vite__mapDeps([5,1,2,6,7,8,9,10,11,12]), import.meta.url),
    () => b(() => import("../nodes/2.BdEX_I0f.js"), __vite__mapDeps([13,1,2,12,14,3,15,16,7,8,4,6,11,17,18]), import.meta.url),
    () => b(() => import("../nodes/3.J0WqXuvc.js"), __vite__mapDeps([19,1,2,12,8,4,15,20]), import.meta.url),
    () => b(() => import("../nodes/4.Q6j6U6xF.js"), __vite__mapDeps([21,1,2,12,8,14,3,22,20,15,11,10,23]), import.meta.url),
    () => b(() => import("../nodes/5.B5vA-ue7.js"), __vite__mapDeps([24,1,2,12,16,7,8,14,3,4,15,6,11,17,22]), import.meta.url)
  ];
  je = [];
  Ce = {
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
  V = {
    handleError: (({ error: n }) => {
      console.error(n);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  be = Object.fromEntries(Object.entries(V.transport).map(([n, e]) => [
    n,
    e.decode
  ]));
  De = Object.fromEntries(Object.entries(V.transport).map(([n, e]) => [
    n,
    e.encode
  ]));
  Ie = false;
  Ne = (n, e) => be[n](e);
})();
export {
  __tla,
  Ne as decode,
  be as decoders,
  Ce as dictionary,
  De as encoders,
  Ie as hash,
  V as hooks,
  Ae as matchers,
  Te as nodes,
  Se as root,
  je as server_loads
};
