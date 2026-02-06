import { F as g, H as d, E as c, x as m, I as i, J as b, g as p, K as v, M as h, O as k } from "./SbAXgMIg.js";
function y(n = false) {
  const s = g, e = s.l.u;
  if (!e) return;
  let f = () => v(s.s);
  if (n) {
    let a = 0, t = {};
    const _ = h(() => {
      let l = false;
      const r = s.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], l = true);
      return l && a++, a;
    });
    f = () => p(_);
  }
  e.b.length && d(() => {
    u(s, f), i(e.b);
  }), c(() => {
    const a = m(() => e.m.map(b));
    return () => {
      for (const t of a) typeof t == "function" && t();
    };
  }), e.a.length && c(() => {
    u(s, f), i(e.a);
  });
}
function u(n, s) {
  if (n.l.s) for (const e of n.l.s) p(e);
  s();
}
k();
export {
  y as i
};
