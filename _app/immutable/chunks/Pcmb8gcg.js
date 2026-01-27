import { I as d, a0 as g, G as c, y as m, a1 as i, a2 as b, M as p, a3 as v, O as y, a4 as h } from "./CdrJcFTF.js";
function x(a = false) {
  const s = d, e = s.l.u;
  if (!e) return;
  let f = () => v(s.s);
  if (a) {
    let n = 0, t = {};
    const _ = y(() => {
      let l = false;
      const r = s.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], l = true);
      return l && n++, n;
    });
    f = () => p(_);
  }
  e.b.length && g(() => {
    u(s, f), i(e.b);
  }), c(() => {
    const n = m(() => e.m.map(b));
    return () => {
      for (const t of n) typeof t == "function" && t();
    };
  }), e.a.length && c(() => {
    u(s, f), i(e.a);
  });
}
function u(a, s) {
  if (a.l.s) for (const e of a.l.s) p(e);
  s();
}
h();
export {
  x as i
};
