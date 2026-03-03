import { l as d, u as g, n as i, o as m, q as l, t as v, g as p, v as b, w as h } from "./BtsFhd5D.js";
function x(n = false) {
  const t = d, e = t.l.u;
  if (!e) return;
  let r = () => b(t.s);
  if (n) {
    let o = 0, s = {};
    const _ = h(() => {
      let c = false;
      const a = t.s;
      for (const f in a) a[f] !== s[f] && (s[f] = a[f], c = true);
      return c && o++, o;
    });
    r = () => p(_);
  }
  e.b.length && g(() => {
    u(t, r), l(e.b);
  }), i(() => {
    const o = m(() => e.m.map(v));
    return () => {
      for (const s of o) typeof s == "function" && s();
    };
  }), e.a.length && i(() => {
    u(t, r), l(e.a);
  });
}
function u(n, t) {
  if (n.l.s) for (const e of n.l.s) p(e);
  t();
}
export {
  x as i
};
