const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C4k_8d7z.js","../chunks/BjTfwbem.js","../chunks/CdrJcFTF.js","../chunks/CkzC-eKA.js","../chunks/C8_7hY_V.js","../nodes/1.UaZx3-mI.js","../chunks/Pcmb8gcg.js","../chunks/9O2zJLIi.js","../chunks/Cuooy7pM.js","../chunks/DGwPCkKd.js","../chunks/CYOjpWgn.js","../chunks/wYCbF3XP.js","../chunks/B3YYK8RE.js","../nodes/2.IS1gXemp.js","../chunks/5RHKzVXV.js","../chunks/DdzU8gf5.js","../chunks/Cpx8gxaD.js","../chunks/DAqyL755.js","../assets/SpreadSheet.CCThM8pZ.css","../assets/2.Dg6tInJj.css","../nodes/3.CB6nkQ27.js","../chunks/B-6X-cLz.js","../nodes/4.kmmKWMIp.js","../assets/4.DKTc5Tem.css","../nodes/5.D1AJ05fO.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as F, d as G, c as z, E as Q, Q as k, U as W, M as f, aL as Y, aM as H, z as J, aN as K, a5 as X, a0 as Z, G as $, ad as L, ab as ee, f as w, s as te, a7 as re, a8 as se, a9 as ae, aO as x, a6 as ne } from "../chunks/CdrJcFTF.js";
import { h as oe, m as ce, u as ie, s as le } from "../chunks/9O2zJLIi.js";
import { f as M, a as E, c as A, t as ue } from "../chunks/BjTfwbem.js";
import { o as me } from "../chunks/B3YYK8RE.js";
import { i as S } from "../chunks/5RHKzVXV.js";
import { B as fe } from "../chunks/CkzC-eKA.js";
import { b as T } from "../chunks/DdzU8gf5.js";
import { p as j } from "../chunks/DAqyL755.js";
let Ne, be, De, Ie, Me, N, Se, je, Te, Ce;
let __tla = (async () => {
  var _t, _e2;
  function C(n, e, s) {
    F && G();
    var i = new fe(n);
    z(() => {
      var o = e() ?? null;
      i.ensure(o, o && ((r) => s(r, o)));
    }, Q);
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
        var a = K(t, false, false);
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
          return t === W ? true : (f(s.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
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
      })), !Y && (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && H(), __privateSet(this, _t, o.$$events);
      for (const r of Object.keys(__privateGet(this, _e2))) r === "$set" || r === "$destroy" || r === "$on" || J(this, r, {
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
  Se = {};
  var ge = M('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), ye = M("<!> <!>", 1);
  function Ee(n, e) {
    X(e, true);
    let s = j(e, "components", 23, () => []), i = j(e, "data_0", 3, null), o = j(e, "data_1", 3, null);
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
          T(y(g, {
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
              var D = A(), V = w(D);
              C(V, () => f(R), (B, U) => {
                T(U(B, {
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
          T(y(g, {
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
          S(v, (g) => {
            f(t) && g(P);
          });
        }
        ae(_), E(c, _);
      };
      S(u, (c) => {
        f(r) && c(h);
      });
    }
    E(n, O), re();
  }
  Te = de(Ee);
  je = [
    () => b(() => import("../nodes/0.C4k_8d7z.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url),
    () => b(() => import("../nodes/1.UaZx3-mI.js"), __vite__mapDeps([5,1,2,6,7,8,9,10,11,12]), import.meta.url),
    () => b(() => import("../nodes/2.IS1gXemp.js"), __vite__mapDeps([13,1,2,12,14,3,15,16,7,8,4,17,6,11,18,19]), import.meta.url),
    () => b(() => import("../nodes/3.CB6nkQ27.js"), __vite__mapDeps([20,1,2,12,8,4,15,21]), import.meta.url),
    () => b(() => import("../nodes/4.kmmKWMIp.js"), __vite__mapDeps([22,1,2,12,8,14,3,21,15,11,10,23]), import.meta.url),
    () => b(() => import("../nodes/5.D1AJ05fO.js"), __vite__mapDeps([24,1,2,6,16,12,7,8,14,3,4,17,15,11,18]), import.meta.url)
  ];
  Ce = [];
  De = {
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
  N = {
    handleError: (({ error: n }) => {
      console.error(n);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  be = Object.fromEntries(Object.entries(N.transport).map(([n, e]) => [
    n,
    e.decode
  ]));
  Ie = Object.fromEntries(Object.entries(N.transport).map(([n, e]) => [
    n,
    e.encode
  ]));
  Me = false;
  Ne = (n, e) => be[n](e);
})();
export {
  __tla,
  Ne as decode,
  be as decoders,
  De as dictionary,
  Ie as encoders,
  Me as hash,
  N as hooks,
  Se as matchers,
  je as nodes,
  Te as root,
  Ce as server_loads
};
