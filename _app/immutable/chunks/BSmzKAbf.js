var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, _b, _e, _t, _n, _s, _r, _o, _a2, _i, _c, _e2, _d, _e3, _e4;
import { aU as b, aV as x, aO as y, a as u, g as f, s as d } from "./BtsFhd5D.js";
const h = [];
function R(e, t = b) {
  let n = null;
  const s = /* @__PURE__ */ new Set();
  function r(o) {
    if (x(e, o) && (e = o, n)) {
      const c = !h.length;
      for (const l of s) l[1](), h.push(l, e);
      if (c) {
        for (let l = 0; l < h.length; l += 2) h[l][0](h[l + 1]);
        h.length = 0;
      }
    }
  }
  function i(o) {
    r(o(e));
  }
  function a(o, c = b) {
    const l = [o, c];
    return s.add(l), s.size === 1 && (n = t(r, i) || b), o(e), () => {
      s.delete(l), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: a };
}
new URL("sveltekit-internal://");
function z(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function G(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function Y(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function D({ href: e }) {
  return e.split("#")[0];
}
function I(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let s = n.length;
    for (; s; ) t = t * 33 ^ n.charCodeAt(--s);
  } else if (ArrayBuffer.isView(n)) {
    const s = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let r = s.length;
    for (; r; ) t = t * 33 ^ s[--r];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
new TextEncoder();
new TextDecoder();
function N(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);
  return n;
}
const O = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && p.delete(m(e)), O(e, t));
const p = /* @__PURE__ */ new Map();
function H(e, t) {
  const n = m(e, t), s = document.querySelector(n);
  if (s == null ? void 0 : s.textContent) {
    s.remove();
    let { body: r, ...i } = JSON.parse(s.textContent);
    const a = s.getAttribute("data-ttl");
    return a && p.set(n, { body: r, init: i, ttl: 1e3 * Number(a) }), s.getAttribute("data-b64") !== null && (r = N(r)), Promise.resolve(new Response(r, i));
  }
  return window.fetch(e, t);
}
function K(e, t, n) {
  if (p.size > 0) {
    const s = m(e, n), r = p.get(s);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      p.delete(s);
    }
  }
  return window.fetch(t, n);
}
function m(e, t) {
  let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), s += `[data-hash="${I(...r)}"]`;
  }
  return s;
}
const L = ((_a = globalThis.__sveltekit_ptocz9) == null ? void 0 : _a.base) ?? "/library-stock", $ = ((_b = globalThis.__sveltekit_ptocz9) == null ? void 0 : _b.assets) ?? L ?? "", q = "1772528523109", B = "sveltekit:snapshot", W = "sveltekit:scroll", X = "sveltekit:states", J = "sveltekit:pageurl", M = "sveltekit:history", F = "sveltekit:navigation", v = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, k = location.origin;
function Q(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function Z() {
  return { x: pageXOffset, y: pageYOffset };
}
function g(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const S = { ...v, "": v.hover };
function T(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function ee(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = T(e);
  }
}
function te(e, t, n) {
  let s;
  try {
    if (s = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && s.hash.match(/^#[^/]/)) {
      const o = location.hash.split("#")[1] || "/";
      s.hash = `#${o}${s.hash}`;
    }
  } catch {
  }
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target, i = !s || !!r || V(s, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), a = (s == null ? void 0 : s.origin) === k && e.hasAttribute("download");
  return { url: s, external: i, target: r, download: a };
}
function ne(e) {
  let t = null, n = null, s = null, r = null, i = null, a = null, o = e;
  for (; o && o !== document.documentElement; ) s === null && (s = g(o, "preload-code")), r === null && (r = g(o, "preload-data")), t === null && (t = g(o, "keepfocus")), n === null && (n = g(o, "noscroll")), i === null && (i = g(o, "reload")), a === null && (a = g(o, "replacestate")), o = T(o);
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
  return { preload_code: S[s ?? "off"], preload_data: S[r ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(i), replace_state: c(a) };
}
function se(e) {
  const t = R(e);
  let n = true;
  function s() {
    n = true, t.update((a) => a);
  }
  function r(a) {
    n = false, t.set(a);
  }
  function i(a) {
    let o;
    return t.subscribe((c) => {
      (o === void 0 || n && c !== o) && a(o = c);
    });
  }
  return { notify: s, set: r, subscribe: i };
}
const E = { v: () => {
} };
function re() {
  const { set: e, subscribe: t } = R(false);
  let n;
  async function s() {
    clearTimeout(n);
    try {
      const r = await fetch(`${$}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!r.ok) return false;
      const a = (await r.json()).version !== q;
      return a && (e(true), E.v(), clearTimeout(n)), a;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: s };
}
function V(e, t, n) {
  return e.origin !== k || !e.pathname.startsWith(t) ? true : n ? e.pathname !== location.pathname : false;
}
function oe(e) {
}
const U = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...U];
const C = /* @__PURE__ */ new Set([...U]);
[...C];
let w, A, _;
const P = y.toString().includes("$$") || /function \w+\(\) \{\}/.test(y.toString());
P ? (w = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, A = { current: null }, _ = { current: false }) : (w = new (_c = class {
  constructor() {
    __privateAdd(this, _e, u({}));
    __privateAdd(this, _t, u(null));
    __privateAdd(this, _n, u(null));
    __privateAdd(this, _s, u({}));
    __privateAdd(this, _r, u({ id: null }));
    __privateAdd(this, _o, u({}));
    __privateAdd(this, _a2, u(-1));
    __privateAdd(this, _i, u(new URL("https://example.com")));
  }
  get data() {
    return f(__privateGet(this, _e));
  }
  set data(t) {
    d(__privateGet(this, _e), t);
  }
  get form() {
    return f(__privateGet(this, _t));
  }
  set form(t) {
    d(__privateGet(this, _t), t);
  }
  get error() {
    return f(__privateGet(this, _n));
  }
  set error(t) {
    d(__privateGet(this, _n), t);
  }
  get params() {
    return f(__privateGet(this, _s));
  }
  set params(t) {
    d(__privateGet(this, _s), t);
  }
  get route() {
    return f(__privateGet(this, _r));
  }
  set route(t) {
    d(__privateGet(this, _r), t);
  }
  get state() {
    return f(__privateGet(this, _o));
  }
  set state(t) {
    d(__privateGet(this, _o), t);
  }
  get status() {
    return f(__privateGet(this, _a2));
  }
  set status(t) {
    d(__privateGet(this, _a2), t);
  }
  get url() {
    return f(__privateGet(this, _i));
  }
  set url(t) {
    d(__privateGet(this, _i), t);
  }
}, _e = new WeakMap(), _t = new WeakMap(), _n = new WeakMap(), _s = new WeakMap(), _r = new WeakMap(), _o = new WeakMap(), _a2 = new WeakMap(), _i = new WeakMap(), _c)(), A = new (_d = class {
  constructor() {
    __privateAdd(this, _e2, u(null));
  }
  get current() {
    return f(__privateGet(this, _e2));
  }
  set current(t) {
    d(__privateGet(this, _e2), t);
  }
}, _e2 = new WeakMap(), _d)(), _ = new (_e4 = class {
  constructor() {
    __privateAdd(this, _e3, u(false));
  }
  get current() {
    return f(__privateGet(this, _e3));
  }
  set current(t) {
    d(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _e4)(), E.v = () => _.current = true);
function ce(e) {
  Object.assign(w, e);
}
export {
  M as H,
  F as N,
  J as P,
  X as S,
  ne as a,
  L as b,
  re as c,
  D as d,
  Y as e,
  ee as f,
  te as g,
  z as h,
  V as i,
  v as j,
  G as k,
  B as l,
  K as m,
  A as n,
  k as o,
  w as p,
  H as q,
  Q as r,
  Z as s,
  W as t,
  se as u,
  ce as v,
  R as w,
  oe as x
};
