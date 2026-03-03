const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Buo5WuPC.js","../chunks/DAC7LG0P.js","../chunks/CUqRO1f7.js","../chunks/BtsFhd5D.js","../chunks/DLCqchCO.js","../chunks/Bzm_M8ul.js","../chunks/BpUz2bbF.js","../chunks/CxYDYBQw.js","../assets/0.CwvzuBzr.css","../nodes/1.F4_kgbia.js","../chunks/CWztfNBP.js","../chunks/CjjNgEYs.js","../chunks/BokTgVeL.js","../chunks/DK64jgav.js","../chunks/BSmzKAbf.js","../chunks/BdKa4dyI.js","../chunks/B-Fs0es_.js","../nodes/2.CJozn_7L.js","../chunks/BB50SLlx.js","../chunks/CJmcPHqk.js","../chunks/DBVW53FX.js","../assets/SpreadSheet.BGs6MCJg.css","../assets/2.Bz96zTJQ.css","../nodes/3.D8jIJ7pu.js","../chunks/wmqEO8lS.js","../chunks/PPVm8Dsz.js","../assets/3.D6m9WDyY.css","../nodes/4.XPlM-Jwx.js","../nodes/5.BNe5o4a5.js","../assets/5.tn0RQdqM.css","../nodes/6.BO8vZSBP.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { _ as l } from "../chunks/PPVm8Dsz.js";
import { j as L, P as H, $ as Q, a0 as U, a1 as W, a4 as X, U as Z, a5 as j, a2 as q, k as z, s as P, ah as J, g as m, aP as K, D as $, aQ as tt, W as et, u as rt, n as at, aO as st, aM as ot, f as E, b as nt, Y as it, a as p, Z as ct, _ as mt, X as ut, aR as O } from "../chunks/BtsFhd5D.js";
import { b as _t } from "../chunks/CUqRO1f7.js";
import { h as dt, m as lt, u as ft, s as ht } from "../chunks/CjjNgEYs.js";
import "../chunks/DAC7LG0P.js";
import { p as T, i as A } from "../chunks/BB50SLlx.js";
import { a as v, c as x, f as w, t as vt } from "../chunks/DLCqchCO.js";
import { B as gt } from "../chunks/Bzm_M8ul.js";
import { b as k } from "../chunks/CxYDYBQw.js";
let Ft, pt, Nt, Yt, Bt, V, Vt, St, Ct, Mt;
let __tla = (async () => {
  var _e, _t2;
  function D(s, t, a) {
    var n;
    L && (n = z, H());
    var o = new gt(s);
    Q(() => {
      var e = t() ?? null;
      if (L) {
        var r = W(n), c = r === q, R = e !== null;
        if (c !== R) {
          var g = X();
          Z(g), o.anchor = g, j(false), o.ensure(e, e && ((f) => a(f, e))), j(true);
          return;
        }
      }
      o.ensure(e, e && ((f) => a(f, e)));
    }, U);
  }
  function yt(s) {
    return class extends bt {
      constructor(t) {
        super({
          component: s,
          ...t
        });
      }
    };
  }
  class bt {
    constructor(t) {
      __privateAdd(this, _e);
      __privateAdd(this, _t2);
      var _a;
      var a = /* @__PURE__ */ new Map(), n = (e, r) => {
        var c = tt(r, false, false);
        return a.set(e, c), c;
      };
      const o = new Proxy({
        ...t.props || {},
        $$events: {}
      }, {
        get(e, r) {
          return m(a.get(r) ?? n(r, Reflect.get(e, r)));
        },
        has(e, r) {
          return r === J ? true : (m(a.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
        },
        set(e, r, c) {
          return P(a.get(r) ?? n(r, c), c), Reflect.set(e, r, c);
        }
      });
      __privateSet(this, _t2, (t.hydrate ? dt : lt)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: o,
        context: t.context,
        intro: t.intro ?? false,
        recover: t.recover,
        transformError: t.transformError
      })), !_t && (!((_a = t == null ? void 0 : t.props) == null ? void 0 : _a.$$host) || t.sync === false) && K(), __privateSet(this, _e, o.$$events);
      for (const e of Object.keys(__privateGet(this, _t2))) e === "$set" || e === "$destroy" || e === "$on" || $(this, e, {
        get() {
          return __privateGet(this, _t2)[e];
        },
        set(r) {
          __privateGet(this, _t2)[e] = r;
        },
        enumerable: true
      });
      __privateGet(this, _t2).$set = (e) => {
        Object.assign(o, e);
      }, __privateGet(this, _t2).$destroy = () => {
        ft(__privateGet(this, _t2));
      };
    }
    $set(t) {
      __privateGet(this, _t2).$set(t);
    }
    $on(t, a) {
      __privateGet(this, _e)[t] = __privateGet(this, _e)[t] || [];
      const n = (...o) => a.call(this, ...o);
      return __privateGet(this, _e)[t].push(n), () => {
        __privateGet(this, _e)[t] = __privateGet(this, _e)[t].filter((o) => o !== n);
      };
    }
    $destroy() {
      __privateGet(this, _t2).$destroy();
    }
  }
  _e = new WeakMap();
  _t2 = new WeakMap();
  Vt = {};
  var Et = w('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), Pt = w("<!> <!>", 1);
  function Rt(s, t) {
    et(t, true);
    let a = T(t, "components", 23, () => []), n = T(t, "data_0", 3, null), o = T(t, "data_1", 3, null);
    rt(() => t.stores.page.set(t.page)), at(() => {
      t.stores, t.page, t.constructors, a(), t.form, n(), o(), t.stores.page.notify();
    });
    let e = p(false), r = p(false), c = p(null);
    st(() => {
      const i = t.stores.page.subscribe(() => {
        m(e) && (P(r, true), ot().then(() => {
          P(c, document.title || "untitled page", true);
        }));
      });
      return P(e, true), i;
    });
    const R = O(() => t.constructors[1]);
    var g = Pt(), f = E(g);
    {
      var C = (i) => {
        const u = O(() => t.constructors[0]);
        var _ = x(), y = E(_);
        D(y, () => m(u), (d, h) => {
          k(h(d, {
            get data() {
              return n();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            },
            children: (b, Ot) => {
              var I = x(), Y = E(I);
              D(Y, () => m(R), (B, F) => {
                k(F(B, {
                  get data() {
                    return o();
                  },
                  get form() {
                    return t.form;
                  },
                  get params() {
                    return t.page.params;
                  }
                }), (G) => a()[1] = G, () => {
                  var _a;
                  return (_a = a()) == null ? void 0 : _a[1];
                });
              }), v(b, I);
            },
            $$slots: {
              default: true
            }
          }), (b) => a()[0] = b, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), v(i, _);
      }, S = (i) => {
        const u = O(() => t.constructors[0]);
        var _ = x(), y = E(_);
        D(y, () => m(u), (d, h) => {
          k(h(d, {
            get data() {
              return n();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            }
          }), (b) => a()[0] = b, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), v(i, _);
      };
      A(f, (i) => {
        t.constructors[1] ? i(C) : i(S, false);
      });
    }
    var M = nt(f, 2);
    {
      var N = (i) => {
        var u = Et(), _ = ct(u);
        {
          var y = (d) => {
            var h = vt();
            ut(() => ht(h, m(c))), v(d, h);
          };
          A(_, (d) => {
            m(r) && d(y);
          });
        }
        mt(u), v(i, u);
      };
      A(M, (i) => {
        m(e) && i(N);
      });
    }
    v(s, g), it();
  }
  Ct = yt(Rt);
  St = [
    () => l(() => import("../nodes/0.Buo5WuPC.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url),
    () => l(() => import("../nodes/1.F4_kgbia.js"), __vite__mapDeps([9,1,2,10,3,11,12,4,13,14,15,16]), import.meta.url),
    () => l(() => import("../nodes/2.CJozn_7L.js"), __vite__mapDeps([17,1,2,3,4,18,5,19,11,12,6,7,20,14,10,13,21,22]), import.meta.url),
    () => l(() => import("../nodes/3.D8jIJ7pu.js"), __vite__mapDeps([23,24,1,2,10,3,13,14,16,25,20,26]), import.meta.url),
    () => l(() => import("../nodes/4.XPlM-Jwx.js"), __vite__mapDeps([27,1,2,3,12,4,6,7]), import.meta.url),
    () => l(() => import("../nodes/5.BNe5o4a5.js"), __vite__mapDeps([28,1,2,10,29]), import.meta.url),
    () => l(() => import("../nodes/6.BO8vZSBP.js"), __vite__mapDeps([30,1,2,3,4,19,11,12,18,5,6,7,20,14,10,13,21]), import.meta.url)
  ];
  Mt = [];
  Nt = {
    "/": [
      2
    ],
    "/bookscan": [
      3
    ],
    "/camera": [
      4
    ],
    "/livekit": [
      5
    ],
    "/spreadsheet": [
      6
    ]
  };
  V = {
    handleError: (({ error: s }) => {
      console.error(s);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  pt = Object.fromEntries(Object.entries(V.transport).map(([s, t]) => [
    s,
    t.decode
  ]));
  Yt = Object.fromEntries(Object.entries(V.transport).map(([s, t]) => [
    s,
    t.encode
  ]));
  Bt = false;
  Ft = (s, t) => pt[s](t);
})();
export {
  __tla,
  Ft as decode,
  pt as decoders,
  Nt as dictionary,
  Yt as encoders,
  Bt as hash,
  V as hooks,
  Vt as matchers,
  St as nodes,
  Ct as root,
  Mt as server_loads
};
