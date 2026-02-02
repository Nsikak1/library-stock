import { j as o, h as _, k as c, E as d, r as E, H as T, l as b, m, n as f } from "./D_hOHglV.js";
import { B as p } from "./CDrDzRr4.js";
function k(t, i, h = false) {
  _ && c();
  var e = new p(t), l = h ? d : 0;
  function n(a, r) {
    if (_) {
      const u = E(t) === T;
      if (a === u) {
        var s = b();
        m(s), e.anchor = s, f(false), e.ensure(a, r), f(true);
        return;
      }
    }
    e.ensure(a, r);
  }
  o(() => {
    var a = false;
    i((r, s = true) => {
      a = true, n(s, r);
    }), a || n(false, null);
  }, l);
}
export {
  k as i
};
