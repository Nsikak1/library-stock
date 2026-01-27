import { c, h as i, d as o, E as d, r as E, H as T, e as b, i as p, j as _ } from "./CdrJcFTF.js";
import { B as y } from "./CkzC-eKA.js";
function v(t, f, h = false) {
  i && o();
  var e = new y(t), u = h ? d : 0;
  function n(a, r) {
    if (i) {
      const l = E(t) === T;
      if (a === l) {
        var s = b();
        p(s), e.anchor = s, _(false), e.ensure(a, r), _(true);
        return;
      }
    }
    e.ensure(a, r);
  }
  c(() => {
    var a = false;
    f((r, s = true) => {
      a = true, n(s, r);
    }), a || n(false, null);
  }, u);
}
export {
  v as i
};
