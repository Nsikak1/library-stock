import "./DAC7LG0P.js";
import { e as te, $ as qe, j, U as ae, K as We, P as Fe, g as c, a1 as Ue, a3 as Me, a4 as we, a5 as se, c as Pe, k as G, aC as je, aJ as He, av as Ie, i as Ve, aW as U, h as le, aX as Ye, af as ze, aY as $e, aI as be, aZ as Ke, a_ as Xe, aQ as ie, ak as ce, a$ as Ze, r as Ne, p as Ae, b0 as ne, b1 as Ge, aG as Je, d as Qe, aD as et, b2 as Re, x as tt, b3 as at, s as N, W as me, aO as ke, b as M, Z as O, _ as A, X as H, Y as _e, a as K, a9 as Te, n as re, o as st, f as ue, aU as nt, aR as rt, b4 as ot } from "./BtsFhd5D.js";
import { s as V } from "./CjjNgEYs.js";
import { p as oe, i as fe } from "./BB50SLlx.js";
import { a as q, f as W } from "./DLCqchCO.js";
import { s as de } from "./BpUz2bbF.js";
import { d as Se, b as Y } from "./BokTgVeL.js";
import { b as ve } from "./CxYDYBQw.js";
import { S as z, d as ge, h as lt, l as it, s as ct } from "./DBVW53FX.js";
import "./CWztfNBP.js";
import { i as ut } from "./DK64jgav.js";
function Q(e, a) {
  return a;
}
function ft(e, a, t) {
  for (var r = [], f = a.length, n, i = a.length, g = 0; g < f; g++) {
    let h = a[g];
    Ae(h, () => {
      if (n) {
        if (n.pending.delete(h), n.done.add(h), n.pending.size === 0) {
          var l = e.outrogroups;
          pe(be(n.done)), l.delete(n), l.size === 0 && (e.outrogroups = null);
        }
      } else i -= 1;
    }, false);
  }
  if (i === 0) {
    var u = r.length === 0 && t !== null;
    if (u) {
      var b = t, v = b.parentNode;
      Je(v), v.append(b), e.items.clear();
    }
    pe(a, !u);
  } else n = { pending: new Set(a), done: /* @__PURE__ */ new Set() }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(n);
}
function pe(e, a = true) {
  for (var t = 0; t < e.length; t++) Qe(e[t], a);
}
var ye;
function ee(e, a, t, r, f, n = null) {
  var i = e, g = /* @__PURE__ */ new Map(), u = (a & Re) !== 0;
  if (u) {
    var b = e;
    i = j ? ae(We(b)) : b.appendChild(te());
  }
  j && Fe();
  var v = null, h = ze(() => {
    var d = t();
    return $e(d) ? d : d == null ? [] : be(d);
  }), l, k = true;
  function E() {
    s.fallback = v, dt(s, l, i, a, r), v !== null && (l.length === 0 ? (v.f & U) === 0 ? Ne(v) : (v.f ^= U, X(v, null, i)) : Ae(v, () => {
      v = null;
    }));
  }
  var S = qe(() => {
    l = c(h);
    var d = l.length;
    let _ = false;
    if (j) {
      var w = Ue(i) === Me;
      w !== (d === 0) && (i = we(), ae(i), se(false), _ = true);
    }
    for (var x = /* @__PURE__ */ new Set(), L = Ve, R = Pe(), p = 0; p < d; p += 1) {
      j && G.nodeType === je && G.data === He && (i = G, _ = true, se(false));
      var T = l[p], D = r(T, p), o = k ? null : g.get(D);
      o ? (o.v && Ie(o.v, T), o.i && Ie(o.i, p), R && L.unskip_effect(o.e)) : (o = vt(g, k ? i : ye ?? (ye = te()), T, D, p, f, a, t), k || (o.e.f |= U), g.set(D, o)), x.add(D);
    }
    if (d === 0 && n && !v && (k ? v = le(() => n(i)) : (v = le(() => n(ye ?? (ye = te()))), v.f |= U)), d > x.size && Ye(), j && d > 0 && ae(we()), !k) if (R) {
      for (const [m, y] of g) x.has(m) || L.skip_effect(y.e);
      L.oncommit(E), L.ondiscard(() => {
      });
    } else E();
    _ && se(true), c(h);
  }), s = { effect: S, items: g, outrogroups: null, fallback: v };
  k = false, j && (i = G);
}
function $(e) {
  for (; e !== null && (e.f & Ge) === 0; ) e = e.next;
  return e;
}
function dt(e, a, t, r, f) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
  var n = (r & at) !== 0, i = a.length, g = e.items, u = $(e.effect.first), b, v = null, h, l = [], k = [], E, S, s, d;
  if (n) for (d = 0; d < i; d += 1) E = a[d], S = f(E, d), s = g.get(S).e, (s.f & U) === 0 && ((_b = (_a = s.nodes) == null ? void 0 : _a.a) == null ? void 0 : _b.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(s));
  for (d = 0; d < i; d += 1) {
    if (E = a[d], S = f(E, d), s = g.get(S).e, e.outrogroups !== null) for (const o of e.outrogroups) o.pending.delete(s), o.done.delete(s);
    if ((s.f & U) !== 0) if (s.f ^= U, s === u) X(s, null, t);
    else {
      var _ = v ? v.next : u;
      s === e.effect.last && (e.effect.last = s.prev), s.prev && (s.prev.next = s.next), s.next && (s.next.prev = s.prev), P(e, v, s), P(e, s, _), X(s, _, t), v = s, l = [], k = [], u = $(v.next);
      continue;
    }
    if ((s.f & ne) !== 0 && (Ne(s), n && ((_d = (_c = s.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(s))), s !== u) {
      if (b !== void 0 && b.has(s)) {
        if (l.length < k.length) {
          var w = k[0], x;
          v = w.prev;
          var L = l[0], R = l[l.length - 1];
          for (x = 0; x < l.length; x += 1) X(l[x], w, t);
          for (x = 0; x < k.length; x += 1) b.delete(k[x]);
          P(e, L.prev, R.next), P(e, v, L), P(e, R, w), u = w, v = R, d -= 1, l = [], k = [];
        } else b.delete(s), X(s, u, t), P(e, s.prev, s.next), P(e, s, v === null ? e.effect.first : v.next), P(e, v, s), v = s;
        continue;
      }
      for (l = [], k = []; u !== null && u !== s; ) (b ?? (b = /* @__PURE__ */ new Set())).add(u), k.push(u), u = $(u.next);
      if (u === null) continue;
    }
    (s.f & U) === 0 && l.push(s), v = s, u = $(s.next);
  }
  if (e.outrogroups !== null) {
    for (const o of e.outrogroups) o.pending.size === 0 && (pe(be(o.done)), (_e2 = e.outrogroups) == null ? void 0 : _e2.delete(o));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (u !== null || b !== void 0) {
    var p = [];
    if (b !== void 0) for (s of b) (s.f & ne) === 0 && p.push(s);
    for (; u !== null; ) (u.f & ne) === 0 && u !== e.fallback && p.push(u), u = $(u.next);
    var T = p.length;
    if (T > 0) {
      var D = (r & Re) !== 0 && i === 0 ? t : null;
      if (n) {
        for (d = 0; d < T; d += 1) (_g = (_f = p[d].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
        for (d = 0; d < T; d += 1) (_i = (_h = p[d].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
      }
      ft(e, p, D);
    }
  }
  n && tt(() => {
    var _a2, _b2;
    if (h !== void 0) for (s of h) (_b2 = (_a2 = s.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b2.apply();
  });
}
function vt(e, a, t, r, f, n, i, g) {
  var u = (i & Ke) !== 0 ? (i & Xe) === 0 ? ie(t, false, false) : ce(t) : null, b = (i & Ze) !== 0 ? ce(f) : null;
  return { v: u, i: b, e: le(() => (n(a, u ?? t, b ?? f, g), () => {
    e.delete(r);
  })) };
}
function X(e, a, t) {
  if (e.nodes) for (var r = e.nodes.start, f = e.nodes.end, n = a && (a.f & U) === 0 ? a.nodes.start : t; r !== null; ) {
    var i = et(r);
    if (n.before(r), r === f) return;
    r = i;
  }
}
function P(e, a, t) {
  a === null ? e.effect.first = t : a.next = t, t === null ? e.effect.last = a : t.prev = a;
}
function Ce(e) {
  var a, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var f = e.length;
    for (a = 0; a < f; a++) e[a] && (t = Ce(e[a])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function gt() {
  for (var e, a, t = 0, r = "", f = arguments.length; t < f; t++) (e = arguments[t]) && (a = Ce(e)) && (r && (r += " "), r += a);
  return r;
}
function Ee(e) {
  return typeof e == "object" ? gt(e) : e ?? "";
}
function pt(e, a, t) {
  var r = e == null ? "" : "" + e;
  return a && (r = r ? r + " " + a : a), r === "" ? null : r;
}
function he(e, a, t, r, f, n) {
  var i = e.__className;
  if (j || i !== t || i === void 0) {
    var g = pt(t, r);
    (!j || g !== e.getAttribute("class")) && (g == null ? e.removeAttribute("class") : e.className = g), e.__className = t;
  }
  return n;
}
function ht(e) {
  var a = ce(0);
  return function() {
    return arguments.length === 1 ? (N(a, c(a) + 1), arguments[0]) : (c(a), e());
  };
}
async function xe(e) {
  var _a, _b, _c, _d, _e2, _f;
  const r = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${e + ""}`)).json();
  if (console.log("Used google Api: ", ((_a = r == null ? void 0 : r.items) == null ? void 0 : _a.length) > 0), r.items && r.items.length > 0) {
    const f = r.items[0].volumeInfo;
    console.log("used  google books api: ", f);
    const n = f.language ? [{ key: `/languages/${f.language}` }] : [];
    return ["google", { title: f.title, authors: ((_b = f.authors) == null ? void 0 : _b.map((i) => ({ name: i }))) || [], publish_date: f.publishedDate, number_of_pages: f.pageCount, cover: { small: (_c = f.imageLinks) == null ? void 0 : _c.thumbnail, large: ((_d = f.imageLinks) == null ? void 0 : _d.large) || ((_e2 = f.imageLinks) == null ? void 0 : _e2.thumbnail) }, subjects: ((_f = f.categories) == null ? void 0 : _f.map((i) => ({ name: i }))) || [], languages: n }];
  }
}
async function De(e) {
  const t = await (await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${e}&format=json&jscmd=data`)).json();
  if (console.log("used OpenLibAPI: ", Object.keys(t).length !== 0), console.log(t), Object.keys(t).length !== 0) return ["openLib", t[`ISBN:${e}`]];
}
async function bt(e) {
  var _a, _b;
  const a = "https://corsproxy.io/?", t = `https://isbnsearch.org/search?s=${e}`, r = "https://isbnsearch.org/";
  console.log("Searching With isbndb");
  try {
    let f = await fetch(a + encodeURIComponent(t)), n = await f.text(), i = new DOMParser(), g = i.parseFromString(n, "text/html");
    console.log("doc: ", g);
    const u = (_a = g.querySelector("#searchresults")) == null ? void 0 : _a.querySelector("a");
    if (console.log("Link: ", u), u) {
      const S = new URL(u.href).pathname;
      console.log("href: ", S), console.log("fetching from search link: ", a + encodeURIComponent(r + S)), f = await fetch(a + encodeURIComponent(r + S)), n = await f.text(), i = new DOMParser(), g = i.parseFromString(n, "text/html");
    }
    const b = g.querySelector(".bookinfo"), v = g.querySelector(".image > img");
    console.log("Image tag: ", v);
    let l = { cover: { large: v.src } };
    if (!b) return console.error("Book info container not found"), null;
    const k = (_b = b.textContent) == null ? void 0 : _b.trim().split(`
`).map((S) => S.trim());
    return ["isbndb", { ...mt(k), ...l }];
  } catch (f) {
    return console.error("Error fetching ISBN:", f), null;
  }
}
function mt(e) {
  let a = { title: "", isbn: "", "isbn-10": "", authors: [{ name: "" }], publish_date: "" };
  return e.forEach((t, r) => {
    r === 0 ? a.title = t.trim() : t.startsWith("ISBN-13:") ? a.isbn = t.replace("ISBN-13:", "").trim() : t.startsWith("ISBN-10:") ? a["isbn-10"] = t.replace("ISBN-10:", "").trim() : t.startsWith("Author:") ? a.authors[0].name = t.replace("Author:", "").trim() : t.startsWith("Published:") && (a.publish_date = t.replace("Published:", "").trim());
  }), console.log("Parsed Result: ", a), a;
}
function kt(e) {
  let a = false;
  return e.forEach((t) => {
    t.value ? a = true : (t.classList.add("required"), a = false);
  }), a;
}
function Le(e) {
  let a = "";
  return e.forEach((t) => a += t.value), a;
}
function _t(e) {
  e.forEach((a) => a.value = ""), e[0].focus();
}
async function Z(e, a = false) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
  let t, r = "", f, n = e.isbn;
  console.log("isbn: ", n);
  const i = await Be(n);
  if (i && (i == null ? void 0 : i.author) !== "no network") {
    console.log("used DB: ", i);
    const h = z.getInstance(), l = h.findRowIndexByIsbn(i.isbn);
    return h.scrollToView(l), e.value = true, `You have done that isbn already the Book Name is: ${i.book_name}`;
  }
  if ([f, t] = await xe(n) || await De(n) || await bt(n) || [null, null], console.log("Inside handleIsbnlookup: ", t), t) {
    if (f === "isbndb") {
      console.log("IsbnDetails: ", t);
      let h = t.isbn;
      console.log("isbn13: ", h);
      let [l, k] = await xe(h) || await De(h) || [null, null];
      k && (t = k);
    }
  } else return r = "No details found for the given ISBN from all sources.";
  console.log("Isbn Details: ", t), r = "Isbn Found Please Input the accession Number", e.value = true;
  let g = ((_b = (_a = t == null ? void 0 : t.languages) == null ? void 0 : _a[0]) == null ? void 0 : _b.key) ? (_d = (_c = t == null ? void 0 : t.languages) == null ? void 0 : _c[0]) == null ? void 0 : _d.key.replace("/languages/", "").toUpperCase() : "English";
  g = g === "EN" ? "English" : g;
  const u = [(i == null ? void 0 : i.accession) || "N/A", t == null ? void 0 : t.title, n, ((_f = (_e2 = t == null ? void 0 : t.subjects) == null ? void 0 : _e2[0]) == null ? void 0 : _f.name) ?? "N/A", (_h = (_g = t == null ? void 0 : t.authors) == null ? void 0 : _g[0]) == null ? void 0 : _h.name, (t == null ? void 0 : t.publish_date) ?? "N/A", (t == null ? void 0 : t.number_of_pages) ?? "N/A", ((_i = t == null ? void 0 : t.cover) == null ? void 0 : _i.large) ?? "N/A", g], b = z.getInstance();
  (i == null ? void 0 : i.isbn) ? (console.log("DB Result: ", i), await b.updateSpreadsheet(i.isbn, u)) : b.insertSpreadsheet(u), b.renderSpreadsheet();
  const v = setTimeout(() => {
    b.scrollToView(), clearTimeout(v);
  }, 300);
  return r;
}
async function Be(e) {
  return await ge.spreadsheets.get({ isbn: e });
}
var St = W('<div class="isbn-input"><div class="isbn-type">Accession No:</div> <span class="isbn-type" id="accessionType"> </span> <input type="text" name="accession" id="accession-input" class="svelte-1a3p2ai"/></div>');
function wt(e, a) {
  me(a, true);
  let t = oe(a, "accessionInput", 15), r = oe(a, "isbnFound", 15), f = oe(a, "message", 15), n = K("OLD");
  ke(() => {
    const h = setTimeout(() => {
      var _a;
      t().focus();
      const l = z.getInstance(), k = l.findRowIndexByIsbn(r().isbn), E = l.getRowElementByIndex(k);
      console.log("index and row: ", k, " ", E);
      let S = ((_a = E.firstElementChild) == null ? void 0 : _a.textContent) + ",";
      console.log("Remounted"), S.startsWith("N/A") ? t(t().value = "", true) : t(t().value = S, true), clearTimeout(h);
    }, 300);
  });
  function i(h) {
    const l = h.target;
    switch (h.key) {
      case "Tab":
        if (h.preventDefault(), N(n, c(n) === "OLD" ? "ILS" : "OLD", true), l.value !== "") if (c(n) === "OLD") {
          if (l.value.endsWith(",ILS-SR-") && (l.value = l.value.replace(",ILS-SR-", "")), l.value.endsWith("ILS-SR-") && (l.value = l.value.replace("ILS-SR-", "")), l.value === "") return;
          l.value += ",";
        } else l.value = l.value.replace(",", ",ILS-SR-");
        else c(n) === "OLD" ? l.value.endsWith(",ILS-SR-") && (l.value = l.value.replace(",ILS-SR-", "")) : l.value === "" ? l.value = "ILS-SR-" : l.value = ",";
        console.log("last string removed ", l.value.substring(0, l.value.length - 1));
        break;
      case " ":
        h.preventDefault(), l.value += "()";
        const k = l.value.length - 1;
        l.focus(), l.setSelectionRange(k, k);
        break;
      case "Enter":
        h.preventDefault();
        const E = z.getInstance();
        let S;
        c(n) === "OLD" && l.value.endsWith(",") ? S = l.value.substring(0, l.value.length - 1) : c(n) === "ILS" && l.value.endsWith(",ILS-SR-") ? S = l.value.substring(0, l.value.length - 8) : S = l.value, f(E.updateAccession(r().isbn, S)), r(r().value = false, true);
    }
  }
  var g = St(), u = M(O(g), 2), b = O(u, true);
  A(u);
  var v = M(u, 2);
  ve(v, (h) => t(h), () => t()), A(g), H(() => V(b, c(n) === "OLD" ? "" : "ILS-SR-")), Y("keydown", v, i), q(e, g), _e();
}
Se(["keydown"]);
var It = W('<input type="text" maxlength="1" required="" inputmode="numeric"/>'), yt = W('<div class="isbn-input svelte-f3psja"><div class="isbn-type svelte-f3psja"> </div> <!></div>'), Et = W('<div class="message svelte-f3psja"> </div> <!> <button id="search" class="svelte-f3psja"> </button> <button class="download-excel svelte-f3psja">Download Excel Sheet</button>', 1);
function Vt(e, a) {
  me(a, true);
  const t = (o, m = nt) => {
    var y = It();
    H((I) => {
      he(y, 1, `input-${m() + 1}`, "svelte-f3psja"), de(y, "name", I), de(y, "id", `input-${m() + 1}`);
    }, [() => m().toString()]), Y("keydown", y, h), q(o, y);
  };
  let r = K(""), f, n = K(Te({ value: false, isbn: "" })), i = K(13), g = K(false), u, b = "";
  async function v() {
    const o = document.querySelectorAll('input[maxlength="1"]');
    c(n).isbn = Le(o), N(r, await Z(c(n)), true);
  }
  async function h(o) {
    const m = document.querySelectorAll('input[maxlength="1"]'), y = parseInt(o.key), I = o.target, C = o.key === "Backspace", B = I.nextElementSibling, F = I.previousElementSibling;
    if (I.classList.remove("required"), C) {
      if (o.preventDefault(), I.value == "") {
        F && F.focus();
        return;
      }
      I.value = "";
      return;
    }
    switch (isNaN(y) || (o.preventDefault(), I.value == "", I.value = o.key, B && B.focus()), o.key) {
      case "Tab":
        k(o);
        break;
      case "ArrowLeft":
        o.preventDefault(), F && F.focus();
        break;
      case "ArrowRight":
        o.preventDefault(), B && B.focus();
        break;
      case "ArrowUp":
        o.preventDefault(), F && F.focus();
        break;
      case "ArrowDown":
        o.preventDefault(), B && B.focus();
        break;
      case "Enter":
        if (o.preventDefault(), !kt(m)) return;
        c(n).isbn = Le(m), _t(m), l(), await Be(c(n).isbn), N(r, await Z(c(n)), true);
        break;
    }
  }
  function l() {
    if (!c(n).value) {
      const o = document.querySelectorAll("input[maxlength='1']");
      if (c(i) === 13) {
        const m = [9, 7, 8];
        for (let y = 0; y < 3; y++) o.item(y).value = m[y].toString();
        setTimeout(() => {
          o.item(3).focus();
        }, 0);
      }
      if (c(i) === 10) {
        for (let m = 0; m < 10; m++) o.item(m).value = "";
        setTimeout(() => {
          o.item(0).focus();
        }, 0);
      }
    }
  }
  function k(o) {
    o.preventDefault(), N(i, c(i) === 13 ? 10 : 13, true);
  }
  re(() => {
    c(i) && l();
  }), re(() => {
    a.receivedIsbn && a.receivedIsbn !== b && !c(n).value && (b = a.receivedIsbn, c(n).isbn = a.receivedIsbn, Z(c(n)).then((o) => st(() => N(r, o, true))), console.log("Input Effect"));
  });
  function E() {
    if (c(n).isbn.length > 0) {
      N(g, true);
      for (let o = 0; o < c(n).isbn.length && o < f.length; o++) f[o].value = c(n).isbn[o], f[o].classList.add("paste-fill"), setTimeout(() => {
        f[o].classList.remove("paste-fill");
      }, 100 * (o + 1));
      c(n).isbn.length === 13 || c(n).isbn.length === 10 || c(n).isbn.length === 9 ? setTimeout(async () => {
        N(r, await Z(c(n)), true), N(g, false);
      }, 200 * c(n).isbn.length) : N(g, false);
    }
  }
  async function S(o) {
    var _a;
    o.preventDefault();
    const m = ((_a = o.clipboardData) == null ? void 0 : _a.getData("text")) || "";
    c(n).isbn = m.replace(/\D/g, "").slice(0, 13), E();
  }
  let s;
  re(() => {
    console.log("Second Effect"), c(r) === "Isbn Found Please Input the accession Number" || c(r).includes("You have done that isbn already") ? (c(n).value = true, setTimeout(() => {
      u.value = "", u.focus();
    }, 0)) : c(r) && c(r) !== "" && (l(), setTimeout(() => {
      N(r, "");
    }, 4e3));
  }), ke(() => {
    l();
    const o = document.querySelectorAll('input[maxlength="1"]');
    f = [...o], s = z.getInstance(), o.forEach((m) => m.addEventListener("focus", (y) => {
      const I = y.target, C = I.value;
      I.value = "", I.value = C;
    })), window.addEventListener("paste", (m) => {
      S(m);
    });
  });
  var d = Et(), _ = ue(d), w = O(_, true);
  A(_);
  var x = M(_, 2);
  {
    var L = (o) => {
      var m = yt(), y = O(m), I = O(y);
      A(y);
      var C = M(y, 2);
      ee(C, 17, () => ({ length: c(i) }), Q, (B, F, Oe) => {
        t(B, () => Oe);
      }), A(m), H(() => V(I, `ISBN-${c(i) ?? ""}:`)), q(o, m);
    }, R = (o) => {
      wt(o, { get message() {
        return c(r);
      }, set message(m) {
        N(r, m, true);
      }, get isbnFound() {
        return c(n);
      }, set isbnFound(m) {
        N(n, m, true);
      }, get accessionInput() {
        return u;
      }, set accessionInput(m) {
        u = m;
      } });
    };
    fe(x, (o) => {
      c(n).value ? o(R, false) : o(L);
    });
  }
  var p = M(x, 2), T = O(p, true);
  A(p);
  var D = M(p, 2);
  H(() => {
    V(w, c(r)), V(T, c(n).value ? "Update Accession Number" : "Search For ISBN");
  }), Y("click", p, async () => {
    if (c(n).value) {
      const o = u.value.trim();
      N(r, s.updateAccession(c(n).isbn, o), true), c(n).value = false;
    } else await v();
  }), Y("click", D, () => s.DownloadSpreadSheet.call(s)), q(e, d), _e();
}
Se(["keydown", "click"]);
let xt = Te({ activeView: false, data: {} });
var J = ht(() => xt), Dt = W('<th class="table-label svelte-f5kcat"> </th>'), Lt = W('<td><a target="_blank"> </a></td>'), Nt = W("<td> </td>"), At = W("<!> <!>", 1), Rt = W('<tr class="table-row svelte-f5kcat"></tr>'), Tt = W('<div class="isbn-details svelte-f5kcat"><table class="svelte-f5kcat"><thead class="svelte-f5kcat"><tr class="svelte-f5kcat"></tr></thead><tbody class="svelte-f5kcat"></tbody></table></div> <div id="context_menu" class="hidden svelte-f5kcat"><ul class="svelte-f5kcat"><li id="delete_row" class="svelte-f5kcat">Delete Row</li></ul></div>', 1);
function Yt(e, a) {
  me(a, false);
  let t, r = ie(), f = ie(), n;
  async function i(s) {
    if (console.log("event.detail: ", s.detail), s.detail === 2) {
      console.log("Clearing Timer: "), clearTimeout(n);
      return;
    } else n = setTimeout(async () => {
      var _a, _b;
      console.log(s);
      const _ = (_b = (_a = s.target.parentElement) == null ? void 0 : _a.querySelector(".isbn")) == null ? void 0 : _b.textContent;
      console.log("isbn from click: ", _);
      const w = await ge.spreadsheets.where("isbn").equals(_).first();
      w && (J(J().activeView = true), J(J().data = w)), console.log(w), clearTimeout(n);
    }, 200);
  }
  function g(s, d) {
    s.contentEditable = "false", s.textContent == "\u200B" && (s.textContent = "N/A"), t.updateAccession(d), t.renderSpreadsheet(), ge.spreadsheets.where("isbn").equals(d).modify({ accession: s.textContent });
  }
  let u;
  ke(async () => {
    "serviceWorker" in navigator && (console.log("Service Worker is supported"), navigator.serviceWorker.onmessage = (d) => {
      if (console.log("Received message in Spreadsheet from service worker:", d.data), d.data.type === "NO_NETWORK") {
        if (console.log(u), u) return;
        u = true, console.log("Data Receive is: ", d.data.data), d.data.data.forEach(async (w) => {
          await Z({ isbn: w.isbn }), u = false;
        });
      }
    }), t = z.getInstance(), await t.loadFromDatabase(), t.renderSpreadsheet(), c(r).addEventListener("dblclick", (d) => {
      var _a;
      const _ = d.target, w = _.closest("tr"), x = w.querySelector("td:nth-of-type(3)").textContent, L = w.querySelector("td");
      console.log("activeRow: ", w);
      const R = L.cloneNode(true);
      (_a = L.parentNode) == null ? void 0 : _a.replaceChild(R, L);
      const p = w.querySelector("td");
      if (console.log("newAccessionCell: ", p), p.contentEditable = "true", p.textContent === "N/A") p.textContent = "\u200B", p.focus();
      else {
        p.focus();
        const D = document.createRange();
        D.selectNodeContents(p), D.collapse(false);
        const o = window.getSelection();
        o == null ? void 0 : o.removeAllRanges(), o == null ? void 0 : o.addRange(D);
      }
      p.addEventListener("blur", () => g(p, x), { once: true });
      const T = (D) => {
        console.log(D.key), D.key === "Enter" && (D.preventDefault(), console.log("Key down Pressed"), g(p, x), p.removeEventListener("keydown", T));
      };
      p.addEventListener("keydown", T), t.renderSpreadsheet(), console.log("Real Target: ", _), console.log("Row chosen: ", _.closest("tr")), console.log(x);
    });
    const s = setTimeout(() => {
      t.scrollToView(), clearTimeout(s);
    }, 500);
  }), ut();
  var b = Tt(), v = ue(b), h = O(v), l = O(h), k = O(l);
  ee(k, 5, () => it, Q, (s, d) => {
    var _ = Dt(), w = O(_, true);
    A(_), H(() => V(w, c(d))), q(s, _);
  }), A(k), A(l);
  var E = M(l);
  ee(E, 5, () => ct.data, Q, (s, d) => {
    var _ = Rt();
    ee(_, 5, () => Object.entries(c(d)), Q, (w, x) => {
      var L = rt(() => ot(c(x), 2));
      let R = () => c(L)[0], p = () => c(L)[1];
      var T = At(), D = ue(T);
      {
        var o = (I) => {
          var C = Lt(), B = O(C), F = O(B, true);
          A(B), A(C), H(() => {
            he(C, 1, Ee(R()), "svelte-f5kcat"), de(B, "href", p()), V(F, p());
          }), q(I, C);
        };
        fe(D, (I) => {
          R() === "image_links" && I(o);
        });
      }
      var m = M(D, 2);
      {
        var y = (I) => {
          var C = Nt(), B = O(C, true);
          A(C), H(() => {
            he(C, 1, Ee(R()), "svelte-f5kcat"), V(B, p());
          }), q(I, C);
        };
        fe(m, (I) => {
          R() !== "image_links" && I(y);
        });
      }
      q(w, T);
    }), A(_), q(s, _);
  }), A(E), ve(E, (s) => N(r, s), () => c(r)), A(h), A(v);
  var S = M(v, 2);
  ve(S, (s) => N(f, s), () => c(f)), Y("contextmenu", E, function(...s) {
    var _a;
    (_a = lt) == null ? void 0 : _a.apply(this, s);
  }), Y("click", E, i), q(e, b), _e();
}
Se(["contextmenu", "click"]);
export {
  Vt as I,
  Yt as S,
  xt as b,
  ht as r
};
