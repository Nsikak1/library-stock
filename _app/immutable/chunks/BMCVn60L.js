var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e2, _t2, _n, _a, _r, _o, _s, _i, _a2, _e3, _b, _e4, _c;
import { aX as he, aZ as gt, ad as U, M as T, Q as I, ab as ee, a_ as qe, a$ as _t } from "./CdrJcFTF.js";
import { p as mt, e as wt } from "./CYOjpWgn.js";
import { a as vt, b as A } from "./CTFdOF87.js";
import { o as De } from "./B3YYK8RE.js";
const V = [];
function ke(e, t = he) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function r(i) {
    if (gt(e, i) && (e = i, n)) {
      const c = !V.length;
      for (const l of a) l[1](), V.push(l, e);
      if (c) {
        for (let l = 0; l < V.length; l += 2) V[l][0](V[l + 1]);
        V.length = 0;
      }
    }
  }
  function s(i) {
    r(i(e));
  }
  function o(i, c = he) {
    const l = [i, c];
    return a.add(l), a.size === 1 && (n = t(r, s) || he), i(e), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
class Se {
  constructor(t, n) {
    this.status = t, typeof n == "string" ? this.body = { message: n } : n ? this.body = n : this.body = { message: `Error: ${t}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Ee {
  constructor(t, n) {
    this.status = t, this.location = n;
  }
}
class Re extends Error {
  constructor(t, n, a) {
    super(a), this.status = t, this.text = n;
  }
}
new URL("sveltekit-internal://");
function yt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function bt(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function kt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function pe({ href: e }) {
  return e.split("#")[0];
}
function St(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let a = n.length;
    for (; a; ) t = t * 33 ^ n.charCodeAt(--a);
  } else if (ArrayBuffer.isView(n)) {
    const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let r = a.length;
    for (; r; ) t = t * 33 ^ a[--r];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
new TextEncoder();
new TextDecoder();
function Et(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
  return n;
}
const Rt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && Y.delete(xe(e)), Rt(e, t));
const Y = /* @__PURE__ */ new Map();
function xt(e, t) {
  const n = xe(e, t), a = document.querySelector(n);
  if (a == null ? void 0 : a.textContent) {
    a.remove();
    let { body: r, ...s } = JSON.parse(a.textContent);
    const o = a.getAttribute("data-ttl");
    return o && Y.set(n, { body: r, init: s, ttl: 1e3 * Number(o) }), a.getAttribute("data-b64") !== null && (r = Et(r)), Promise.resolve(new Response(r, s));
  }
  return window.fetch(e, t);
}
function At(e, t, n) {
  if (Y.size > 0) {
    const a = xe(e, n), r = Y.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      Y.delete(a);
    }
  }
  return window.fetch(t, n);
}
function xe(e, t) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), a += `[data-hash="${St(...r)}"]`;
  }
  return a;
}
function Lt({ nodes: e, server_loads: t, dictionary: n, matchers: a }) {
  const r = new Set(t);
  return Object.entries(n).map(([i, [c, l, p]]) => {
    const { pattern: g, params: v } = mt(i), u = { id: i, exec: (h) => {
      const m = g.exec(h);
      if (m) return wt(m, v, a);
    }, errors: [1, ...p || []].map((h) => e[h]), layouts: [0, ...l || []].map(o), leaf: s(c) };
    return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u;
  });
  function s(i) {
    const c = i < 0;
    return c && (i = ~i), [c, e[i]];
  }
  function o(i) {
    return i === void 0 ? i : [r.has(i), e[i]];
  }
}
function Fe(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function Ve(e, t, n = JSON.stringify) {
  const a = n(t);
  try {
    sessionStorage[e] = a;
  } catch {
  }
}
const Ut = "1769498576933", He = "sveltekit:snapshot", Je = "sveltekit:scroll", We = "sveltekit:states", Tt = "sveltekit:pageurl", K = "sveltekit:history", F = "sveltekit:navigation", $ = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, Ae = location.origin;
function Xe(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function le() {
  return { x: pageXOffset, y: pageYOffset };
}
function B(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const Be = { ...$, "": $.hover };
function Qe(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Ze(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = Qe(e);
  }
}
function me(e, t, n) {
  let a;
  try {
    if (a = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const i = location.hash.split("#")[1] || "/";
      a.hash = `#${i}${a.hash}`;
    }
  } catch {
  }
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target, s = !a || !!r || ue(a, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), o = (a == null ? void 0 : a.origin) === Ae && e.hasAttribute("download");
  return { url: a, external: s, target: r, download: o };
}
function te(e) {
  let t = null, n = null, a = null, r = null, s = null, o = null, i = e;
  for (; i && i !== document.documentElement; ) a === null && (a = B(i, "preload-code")), r === null && (r = B(i, "preload-data")), t === null && (t = B(i, "keepfocus")), n === null && (n = B(i, "noscroll")), s === null && (s = B(i, "reload")), o === null && (o = B(i, "replacestate")), i = Qe(i);
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return;
    }
  }
  return { preload_code: Be[a ?? "off"], preload_data: Be[r ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(s), replace_state: c(o) };
}
function Ke(e) {
  const t = ke(e);
  let n = true;
  function a() {
    n = true, t.update((o) => o);
  }
  function r(o) {
    n = false, t.set(o);
  }
  function s(o) {
    let i;
    return t.subscribe((c) => {
      (i === void 0 || n && c !== i) && o(i = c);
    });
  }
  return { notify: a, set: r, subscribe: s };
}
const et = { v: () => {
} };
function It() {
  const { set: e, subscribe: t } = ke(false);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${vt}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!r.ok) return false;
      const o = (await r.json()).version !== Ut;
      return o && (e(true), et.v(), clearTimeout(n)), o;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: a };
}
function ue(e, t, n) {
  return e.origin !== Ae || !e.pathname.startsWith(t) ? true : n ? e.pathname !== location.pathname : false;
}
function sn(e) {
}
const tt = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...tt];
const Ot = /* @__PURE__ */ new Set([...tt]);
[...Ot];
function Pt(e) {
  return e.filter((t) => t != null);
}
function Le(e) {
  return e instanceof Se || e instanceof Re ? e.status : 500;
}
function Ct(e) {
  return e instanceof Re ? e.text : "Internal Error";
}
let k, H, ge;
const Nt = De.toString().includes("$$") || /function \w+\(\) \{\}/.test(De.toString());
Nt ? (k = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, H = { current: null }, ge = { current: false }) : (k = new (_a2 = class {
  constructor() {
    __privateAdd(this, _e2, U({}));
    __privateAdd(this, _t2, U(null));
    __privateAdd(this, _n, U(null));
    __privateAdd(this, _a, U({}));
    __privateAdd(this, _r, U({ id: null }));
    __privateAdd(this, _o, U({}));
    __privateAdd(this, _s, U(-1));
    __privateAdd(this, _i, U(new URL("https://example.com")));
  }
  get data() {
    return T(__privateGet(this, _e2));
  }
  set data(t) {
    I(__privateGet(this, _e2), t);
  }
  get form() {
    return T(__privateGet(this, _t2));
  }
  set form(t) {
    I(__privateGet(this, _t2), t);
  }
  get error() {
    return T(__privateGet(this, _n));
  }
  set error(t) {
    I(__privateGet(this, _n), t);
  }
  get params() {
    return T(__privateGet(this, _a));
  }
  set params(t) {
    I(__privateGet(this, _a), t);
  }
  get route() {
    return T(__privateGet(this, _r));
  }
  set route(t) {
    I(__privateGet(this, _r), t);
  }
  get state() {
    return T(__privateGet(this, _o));
  }
  set state(t) {
    I(__privateGet(this, _o), t);
  }
  get status() {
    return T(__privateGet(this, _s));
  }
  set status(t) {
    I(__privateGet(this, _s), t);
  }
  get url() {
    return T(__privateGet(this, _i));
  }
  set url(t) {
    I(__privateGet(this, _i), t);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _n = new WeakMap(), _a = new WeakMap(), _r = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _i = new WeakMap(), _a2)(), H = new (_b = class {
  constructor() {
    __privateAdd(this, _e3, U(null));
  }
  get current() {
    return T(__privateGet(this, _e3));
  }
  set current(t) {
    I(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _b)(), ge = new (_c = class {
  constructor() {
    __privateAdd(this, _e4, U(false));
  }
  get current() {
    return T(__privateGet(this, _e4));
  }
  set current(t) {
    I(__privateGet(this, _e4), t);
  }
}, _e4 = new WeakMap(), _c)(), et.v = () => ge.current = true);
function nt(e) {
  Object.assign(k, e);
}
const $t = /* @__PURE__ */ new Set(["icon", "shortcut icon", "apple-touch-icon"]), q = Fe(Je) ?? {}, J = Fe(He) ?? {}, N = { url: Ke({}), page: Ke({}), navigating: ke(null), updated: It() };
function Ue(e) {
  q[e] = le();
}
function jt(e, t) {
  let n = e + 1;
  for (; q[n]; ) delete q[n], n += 1;
  for (n = t + 1; J[n]; ) delete J[n], n += 1;
}
function W(e, t = false) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(() => {
  });
}
async function at() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(A || "/");
    e && await e.update();
  }
}
function Me() {
}
let Te, we, ne, O, ve, w;
const ae = [], re = [];
let R = null;
function ye() {
  var _a3;
  (_a3 = R == null ? void 0 : R.fork) == null ? void 0 : _a3.then((e) => e == null ? void 0 : e.discard()), R = null;
}
const Z = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Set(), qt = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
let _ = { branch: [], error: null, url: null }, ot = false, oe = false, Ge = true, X = false, G = false, st = false, Ie = false, Oe, y, x, j;
const se = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Map();
async function fn(e, t, n) {
  var _a3, _b2, _c2, _d, _e5;
  ((_a3 = globalThis.__sveltekit_1r6cvn8) == null ? void 0 : _a3.data) && globalThis.__sveltekit_1r6cvn8.data, document.URL !== location.href && (location.href = location.href), w = e, await ((_c2 = (_b2 = e.hooks).init) == null ? void 0 : _c2.call(_b2)), Te = Lt(e), O = document.documentElement, ve = t, we = e.nodes[0], ne = e.nodes[1], we(), ne(), y = (_d = history.state) == null ? void 0 : _d[K], x = (_e5 = history.state) == null ? void 0 : _e5[F], y || (y = x = Date.now(), history.replaceState({ ...history.state, [K]: y, [F]: x }, ""));
  const a = q[y];
  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y));
  }
  n ? (r(), await Qt(ve, n)) : (await M({ type: "enter", url: Xe(w.hash ? tn(new URL(location.href)) : location.href), replace_state: true }), r()), Xt();
}
function Dt() {
  ae.length = 0, Ie = false;
}
function it(e) {
  re.some((t) => t == null ? void 0 : t.snapshot) && (J[e] = re.map((t) => {
    var _a3;
    return (_a3 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a3.capture();
  }));
}
function ct(e) {
  var _a3;
  (_a3 = J[e]) == null ? void 0 : _a3.forEach((t, n) => {
    var _a4, _b2;
    (_b2 = (_a4 = re[n]) == null ? void 0 : _a4.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function ze() {
  Ue(y), Ve(Je, q), it(x), Ve(He, J);
}
async function Vt(e, t, n, a) {
  let r;
  t.invalidateAll && ye(), await M({ type: "goto", url: Xe(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: a, accept: () => {
    t.invalidateAll && (Ie = true, r = [...Ye.keys()]), t.invalidate && t.invalidate.forEach(Wt);
  } }), t.invalidateAll && ee().then(ee).then(() => {
    Ye.forEach(({ resource: s }, o) => {
      var _a3;
      (r == null ? void 0 : r.includes(o)) && ((_a3 = s.refresh) == null ? void 0 : _a3.call(s));
    });
  });
}
async function Bt(e) {
  if (e.id !== (R == null ? void 0 : R.id)) {
    ye();
    const t = {};
    if (se.add(t), R = { id: e.id, token: t, promise: ut({ ...e, preload: t }).then((n) => (se.delete(t), n.type === "loaded" && n.state.error && ye(), n)), fork: null }, qe) {
      const n = R;
      n.fork = n.promise.then((a) => {
        if (n === R && a.type === "loaded") try {
          return qe(() => {
            Oe.$set(a.props), nt(a.props.page);
          });
        } catch {
        }
        return null;
      });
    }
  }
  return R.promise;
}
async function _e(e) {
  var _a3;
  const t = (_a3 = await fe(e, false)) == null ? void 0 : _a3.route;
  t && await Promise.all([...t.layouts, t.leaf].map((n) => n == null ? void 0 : n[1]()));
}
async function lt(e, t, n) {
  var _a3;
  _ = e.state;
  const a = document.querySelector("style[data-sveltekit]");
  if (a && a.remove(), Object.assign(k, e.props.page), Oe = new w.root({ target: t, props: { ...e.props, stores: N, components: re }, hydrate: n, sync: false }), await Promise.resolve(), ct(x), n) {
    const r = { from: null, to: { params: _.params, route: { id: ((_a3 = _.route) == null ? void 0 : _a3.id) ?? null }, url: new URL(location.href) }, willUnload: false, type: "enter", complete: Promise.resolve() };
    z.forEach((s) => s(r));
  }
  oe = true;
}
function ie({ url: e, params: t, branch: n, status: a, error: r, route: s, form: o }) {
  let i = "never";
  if (A && (e.pathname === A || e.pathname === A + "/")) i = "always";
  else for (const u of n) (u == null ? void 0 : u.slash) !== void 0 && (i = u.slash);
  e.pathname = yt(e.pathname, i), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: r, route: s }, props: { constructors: Pt(n).map((u) => u.node.component), page: je(k) } };
  o !== void 0 && (c.props.form = o);
  let l = {}, p = !k, g = 0;
  for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
    const h = n[u], m = _.branch[u];
    (h == null ? void 0 : h.data) !== (m == null ? void 0 : m.data) && (p = true), h && (l = { ...l, ...h.data }, p && (c.props[`data_${g}`] = l), g += 1);
  }
  return (!_.url || e.href !== _.url.href || _.error !== r || o !== void 0 && o !== k.form || p) && (c.props.page = { error: r, params: t, route: { id: (s == null ? void 0 : s.id) ?? null }, state: {}, status: a, url: new URL(e), form: o ?? null, data: p ? l : k.data }), c;
}
async function Pe({ loader: e, parent: t, url: n, params: a, route: r, server_data_node: s }) {
  var _a3, _b2;
  let o = null;
  const i = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, c = await e();
  return { node: c, loader: e, server: s, universal: ((_a3 = c.universal) == null ? void 0 : _a3.load) ? { type: "data", data: o, uses: i } : null, data: o ?? (s == null ? void 0 : s.data) ?? null, slash: ((_b2 = c.universal) == null ? void 0 : _b2.trailingSlash) ?? (s == null ? void 0 : s.slash) };
}
function Kt(e, t, n) {
  let a = e instanceof Request ? e.url : e;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const s = oe ? At(a, r.href, t) : xt(a, t);
  return { resolved: r, promise: s };
}
function Mt(e, t, n, a, r, s) {
  if (Ie) return true;
  if (!r) return false;
  if (r.parent && e || r.route && t || r.url && n) return true;
  for (const o of r.search_params) if (a.has(o)) return true;
  for (const o of r.params) if (s[o] !== _.params[o]) return true;
  for (const o of r.dependencies) if (ae.some((i) => i(new URL(o)))) return true;
  return false;
}
function Ce(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function Gt(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const a of n) {
    const r = e.searchParams.getAll(a), s = t.searchParams.getAll(a);
    r.every((o) => s.includes(o)) && s.every((o) => r.includes(o)) && n.delete(a);
  }
  return n;
}
function Yt({ error: e, url: t, route: n, params: a }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: a, branch: [] }, props: { page: je(k), constructors: [] } };
}
async function ut({ id: e, invalidating: t, url: n, params: a, route: r, preload: s }) {
  if ((R == null ? void 0 : R.id) === e) return se.delete(R.token), R.promise;
  const { errors: o, layouts: i, leaf: c } = r, l = [...i, c];
  o.forEach((d) => d == null ? void 0 : d().catch(() => {
  })), l.forEach((d) => d == null ? void 0 : d[1]().catch(() => {
  }));
  const p = _.url ? e !== ce(_.url) : false, g = _.route ? r.id !== _.route.id : false, v = Gt(_.url, n);
  let u = false;
  const h = l.map(async (d, f) => {
    var _a3;
    if (!d) return;
    const S = _.branch[f];
    return d[1] === (S == null ? void 0 : S.loader) && !Mt(u, g, p, v, (_a3 = S.universal) == null ? void 0 : _a3.uses, a) ? S : (u = true, Pe({ loader: d[1], url: n, params: a, route: r, parent: async () => {
      var _a4;
      const P = {};
      for (let L = 0; L < f; L += 1) Object.assign(P, (_a4 = await h[L]) == null ? void 0 : _a4.data);
      return P;
    }, server_data_node: Ce(d[0] ? { type: "skip" } : null, d[0] ? S == null ? void 0 : S.server : void 0) }));
  });
  for (const d of h) d.catch(() => {
  });
  const m = [];
  for (let d = 0; d < l.length; d += 1) if (l[d]) try {
    m.push(await h[d]);
  } catch (f) {
    if (f instanceof Ee) return { type: "redirect", location: f.location };
    if (se.has(s)) return Yt({ error: await Q(f, { params: a, url: n, route: { id: r.id } }), url: n, params: a, route: r });
    let S = Le(f), E;
    if (f instanceof Se) E = f.body;
    else {
      if (await N.updated.check()) return await at(), await W(n);
      E = await Q(f, { params: a, url: n, route: { id: r.id } });
    }
    const P = await zt(d, m, o);
    return P ? ie({ url: n, params: a, branch: m.slice(0, P.idx).concat(P.node), status: S, error: E, route: r }) : await dt(n, { id: r.id }, E, S);
  }
  else m.push(void 0);
  return ie({ url: n, params: a, branch: m, status: 200, error: null, route: r, form: t ? void 0 : null });
}
async function zt(e, t, n) {
  for (; e--; ) if (n[e]) {
    let a = e;
    for (; !t[a]; ) a -= 1;
    try {
      return { idx: a + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function Ne({ status: e, error: t, url: n, route: a }) {
  const r = {};
  let s = null;
  try {
    const o = await Pe({ loader: we, url: n, params: r, route: a, parent: () => Promise.resolve({}), server_data_node: Ce(s) }), i = { node: await ne(), loader: ne, universal: null, server: null, data: null };
    return ie({ url: n, params: r, branch: [o, i], status: e, error: t, route: null });
  } catch (o) {
    if (o instanceof Ee) return Vt(new URL(o.location, location.href), {}, 0);
    throw o;
  }
}
async function Ft(e) {
  const t = e.href;
  if (Z.has(t)) return Z.get(t);
  let n;
  try {
    const a = (async () => {
      let r = await w.hooks.reroute({ url: new URL(e), fetch: async (s, o) => Kt(s, o, e).promise }) ?? e;
      if (typeof r == "string") {
        const s = new URL(e);
        w.hash ? s.hash = r : s.pathname = r, r = s;
      }
      return r;
    })();
    Z.set(t, a), n = await a;
  } catch {
    Z.delete(t);
    return;
  }
  return n;
}
async function fe(e, t) {
  if (e && !ue(e, A, w.hash)) {
    const n = await Ft(e);
    if (!n) return;
    const a = Ht(n);
    for (const r of Te) {
      const s = r.exec(a);
      if (s) return { id: ce(e), invalidating: t, route: r, params: kt(s), url: e };
    }
  }
}
function Ht(e) {
  return bt(w.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(A.length)) || "/";
}
function ce(e) {
  return (w.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function ft({ url: e, type: t, intent: n, delta: a, event: r }) {
  let s = false;
  const o = $e(_, n, e, t);
  a !== void 0 && (o.navigation.delta = a), r !== void 0 && (o.navigation.event = r);
  const i = { ...o.navigation, cancel: () => {
    s = true, o.reject(new Error("navigation cancelled"));
  } };
  return X || rt.forEach((c) => c(i)), s ? null : o;
}
async function M({ type: e, url: t, popped: n, keepfocus: a, noscroll: r, replace_state: s, state: o = {}, redirect_count: i = 0, nav_token: c = {}, accept: l = Me, block: p = Me, event: g }) {
  var _a3;
  const v = j;
  j = c;
  const u = await fe(t, false), h = e === "enter" ? $e(_, u, t, e) : ft({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: u, event: g });
  if (!h) {
    p(), j === c && (j = v);
    return;
  }
  const m = y, d = x;
  l(), X = true, oe && h.navigation.type !== "enter" && N.navigating.set(H.current = h.navigation);
  let f = u && await ut(u);
  if (!f) {
    if (ue(t, A, w.hash)) return await W(t, s);
    f = await dt(t, { id: null }, await Q(new Re(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404, s);
  }
  if (t = (u == null ? void 0 : u.url) || t, j !== c) return h.reject(new Error("navigation aborted")), false;
  if (f.type === "redirect") {
    if (i < 20) {
      await M({ type: e, url: new URL(f.location, t), popped: n, keepfocus: a, noscroll: r, replace_state: s, state: o, redirect_count: i + 1, nav_token: c }), h.fulfil(void 0);
      return;
    }
    f = await Ne({ status: 500, error: await Q(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  } else f.props.page.status >= 400 && await N.updated.check() && (await at(), await W(t, s));
  if (Dt(), Ue(m), it(d), f.props.page.url.pathname !== t.pathname && (t.pathname = f.props.page.url.pathname), o = n ? n.state : o, !n) {
    const b = s ? 0 : 1, D = { [K]: y += b, [F]: x += b, [We]: o };
    (s ? history.replaceState : history.pushState).call(history, D, "", t), s || jt(y, x);
  }
  const S = u && (R == null ? void 0 : R.id) === u.id ? R.fork : null;
  R = null, f.props.page.state = o;
  let E;
  if (oe) {
    const b = (await Promise.all(Array.from(qt, (C) => C(h.navigation)))).filter((C) => typeof C == "function");
    if (b.length > 0) {
      let C = function() {
        b.forEach((de) => {
          z.delete(de);
        });
      };
      b.push(C), b.forEach((de) => {
        z.add(de);
      });
    }
    _ = f.state, f.props.page && (f.props.page.url = t);
    const D = S && await S;
    D ? E = D.commit() : (Oe.$set(f.props), nt(f.props.page), E = (_a3 = _t) == null ? void 0 : _a3()), st = true;
  } else await lt(f, ve, false);
  const { activeElement: P } = document;
  await E, await ee(), await ee();
  let L = n ? n.scroll : r ? le() : null;
  if (Ge) {
    const b = t.hash && document.getElementById(ht(t));
    if (L) scrollTo(L.x, L.y);
    else if (b) {
      b.scrollIntoView();
      const { top: D, left: C } = b.getBoundingClientRect();
      L = { x: pageXOffset + C, y: pageYOffset + D };
    } else scrollTo(0, 0);
  }
  const pt = document.activeElement !== P && document.activeElement !== document.body;
  !a && !pt && en(t, L), Ge = true, f.props.page && Object.assign(k, f.props.page), X = false, e === "popstate" && ct(x), h.fulfil(void 0), z.forEach((b) => b(h.navigation)), N.navigating.set(H.current = null);
}
async function dt(e, t, n, a, r) {
  return e.origin === Ae && e.pathname === location.pathname && !ot ? await Ne({ status: a, error: n, url: e, route: t }) : await W(e, r);
}
function Jt() {
  let e, t, n;
  O.addEventListener("mousemove", (i) => {
    const c = i.target;
    clearTimeout(e), e = setTimeout(() => {
      s(c, $.hover);
    }, 20);
  });
  function a(i) {
    i.defaultPrevented || s(i.composedPath()[0], $.tap);
  }
  O.addEventListener("mousedown", a), O.addEventListener("touchstart", a, { passive: true });
  const r = new IntersectionObserver((i) => {
    for (const c of i) c.isIntersecting && (_e(new URL(c.target.href)), r.unobserve(c.target));
  }, { threshold: 0 });
  async function s(i, c) {
    const l = Ze(i, O), p = l === t && c >= n;
    if (!l || p) return;
    const { url: g, external: v, download: u } = me(l, A, w.hash);
    if (v || u) return;
    const h = te(l), m = g && ce(_.url) === ce(g);
    if (!(h.reload || m)) if (c <= h.preload_data) {
      t = l, n = $.tap;
      const d = await fe(g, false);
      if (!d) return;
      Bt(d);
    } else c <= h.preload_code && (t = l, n = c, _e(g));
  }
  function o() {
    r.disconnect();
    for (const i of O.querySelectorAll("a")) {
      const { url: c, external: l, download: p } = me(i, A, w.hash);
      if (l || p) continue;
      const g = te(i);
      g.reload || (g.preload_code === $.viewport && r.observe(i), g.preload_code === $.eager && _e(c));
    }
  }
  z.add(o), o();
}
function Q(e, t) {
  if (e instanceof Se) return e.body;
  const n = Le(e), a = Ct(e);
  return w.hooks.handleError({ error: e, event: t, status: n, message: a }) ?? { message: a };
}
function Wt(e) {
  if (typeof e == "function") ae.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    ae.push((n) => n.href === t);
  }
}
function Xt() {
  var _a3;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (ze(), !X) {
      const a = $e(_, void 0, null, "leave"), r = { ...a.navigation, cancel: () => {
        n = true, a.reject(new Error("navigation cancelled"));
      } };
      rt.forEach((s) => s(r));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && ze();
  }), ((_a3 = navigator.connection) == null ? void 0 : _a3.saveData) || Jt(), O.addEventListener("click", async (t) => {
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = Ze(t.composedPath()[0], O);
    if (!n) return;
    const { url: a, external: r, target: s, download: o } = me(n, A, w.hash);
    if (!a) return;
    if (s === "_parent" || s === "_top") {
      if (window.parent !== window) return;
    } else if (s && s !== "_self") return;
    const i = te(n);
    if (!(n instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || o) return;
    const [l, p] = (w.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), g = l === pe(location);
    if (r || i.reload && (!g || !p)) {
      ft({ url: a, type: "link", event: t }) ? X = true : t.preventDefault();
      return;
    }
    if (p !== void 0 && g) {
      const [, v] = _.url.href.split("#");
      if (v === p) {
        if (t.preventDefault(), p === "" || p === "top" && n.ownerDocument.getElementById("top") === null) scrollTo({ top: 0 });
        else {
          const u = n.ownerDocument.getElementById(decodeURIComponent(p));
          u && (u.scrollIntoView(), u.focus());
        }
        return;
      }
      if (G = true, Ue(y), e(a), !i.replace_state) return;
      G = false;
    }
    t.preventDefault(), await new Promise((v) => {
      requestAnimationFrame(() => {
        setTimeout(v, 0);
      }), setTimeout(v, 100);
    }), await M({ type: "link", url: a, keepfocus: i.keepfocus, noscroll: i.noscroll, replace_state: i.replace_state ?? a.href === location.href, event: t });
  }), O.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), a = t.submitter;
    if (((a == null ? void 0 : a.formTarget) || n.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || n.method) !== "get") return;
    const o = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || n.action);
    if (ue(o, A, false)) return;
    const i = t.target, c = te(i);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const l = new FormData(i, a);
    o.search = new URLSearchParams(l).toString(), M({ type: "form", url: o, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? o.href === location.href, event: t });
  }), addEventListener("popstate", async (t) => {
    var _a4;
    if (!be) {
      if ((_a4 = t.state) == null ? void 0 : _a4[K]) {
        const n = t.state[K];
        if (j = {}, n === y) return;
        const a = q[n], r = t.state[We] ?? {}, s = new URL(t.state[Tt] ?? location.href), o = t.state[F], i = _.url ? pe(location) === pe(_.url) : false;
        if (o === x && (st || i)) {
          r !== k.state && (k.state = r), e(s), q[y] = le(), a && scrollTo(a.x, a.y), y = n;
          return;
        }
        const l = n - y;
        await M({ type: "popstate", url: s, popped: { state: r, scroll: a, delta: l }, accept: () => {
          y = n, x = o;
        }, block: () => {
          history.go(-l);
        }, nav_token: j, event: t });
      } else if (!G) {
        const n = new URL(location.href);
        e(n), w.hash && location.reload();
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = false, history.replaceState({ ...history.state, [K]: ++y, [F]: x }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) $t.has(t.rel) && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && N.navigating.set(H.current = null);
  });
  function e(t) {
    _.url = k.url = t, N.page.set(je(k)), N.page.notify();
  }
}
async function Qt(e, { status: t = 200, error: n, node_ids: a, params: r, route: s, server_route: o, data: i, form: c }) {
  ot = true;
  const l = new URL(location.href);
  let p;
  ({ params: r = {}, route: s = { id: null } } = await fe(l, false) || {}), p = Te.find(({ id: u }) => u === s.id);
  let g, v = true;
  try {
    const u = a.map(async (m, d) => {
      const f = i[d];
      return (f == null ? void 0 : f.uses) && (f.uses = Zt(f.uses)), Pe({ loader: w.nodes[m], url: l, params: r, route: s, parent: async () => {
        const S = {};
        for (let E = 0; E < d; E += 1) Object.assign(S, (await u[E]).data);
        return S;
      }, server_data_node: Ce(f) });
    }), h = await Promise.all(u);
    if (p) {
      const m = p.layouts;
      for (let d = 0; d < m.length; d++) m[d] || h.splice(d, 0, void 0);
    }
    g = ie({ url: l, params: r, branch: h, status: t, error: n, form: c, route: p ?? null });
  } catch (u) {
    if (u instanceof Ee) {
      await W(new URL(u.location, location.href));
      return;
    }
    g = await Ne({ status: Le(u), error: await Q(u, { url: l, params: r, route: s }), url: l, route: s }), e.textContent = "", v = false;
  }
  g.props.page && (g.props.page.state = {}), await lt(g, e, v);
}
function Zt(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
let be = false;
function en(e, t = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = ht(e);
    if (a && document.getElementById(a)) {
      const { x: s, y: o } = t ?? le();
      setTimeout(() => {
        const i = history.state;
        be = true, location.replace(`#${a}`), w.hash && location.replace(e.hash), history.replaceState(i, "", e.hash), scrollTo(s, o), be = false;
      });
    } else {
      const s = document.body, o = s.getAttribute("tabindex");
      s.tabIndex = -1, s.focus({ preventScroll: true, focusVisible: false }), o !== null ? s.setAttribute("tabindex", o) : s.removeAttribute("tabindex");
    }
    const r = getSelection();
    if (r && r.type !== "None") {
      const s = [];
      for (let o = 0; o < r.rangeCount; o += 1) s.push(r.getRangeAt(o));
      setTimeout(() => {
        if (r.rangeCount === s.length) {
          for (let o = 0; o < r.rangeCount; o += 1) {
            const i = s[o], c = r.getRangeAt(o);
            if (i.commonAncestorContainer !== c.commonAncestorContainer || i.startContainer !== c.startContainer || i.endContainer !== c.endContainer || i.startOffset !== c.startOffset || i.endOffset !== c.endOffset) return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function $e(e, t, n, a) {
  var _a3, _b2;
  let r, s;
  const o = new Promise((c, l) => {
    r = c, s = l;
  });
  return o.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a3 = e.route) == null ? void 0 : _a3.id) ?? null }, url: e.url }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n }, willUnload: !t, type: a, complete: o }, fulfil: r, reject: s };
}
function je(e) {
  return { data: e.data, error: e.error, form: e.form, params: e.params, route: e.route, state: e.state, status: e.status, url: e.url };
}
function tn(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t;
}
function ht(e) {
  let t;
  if (w.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? "";
  } else t = e.hash.slice(1);
  return decodeURIComponent(t);
}
export {
  fn as a,
  sn as l,
  k as p,
  N as s
};
