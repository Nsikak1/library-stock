import "../chunks/DAC7LG0P.js";
import "../chunks/CWztfNBP.js";
import { W as u, f as h, X as g, Y as l, Z as a, _ as e, b as v } from "../chunks/BtsFhd5D.js";
import { s as o } from "../chunks/CjjNgEYs.js";
import { a as _, f as d } from "../chunks/DLCqchCO.js";
import { i as x } from "../chunks/DK64jgav.js";
import { p } from "../chunks/BSmzKAbf.js";
import { s as $ } from "../chunks/BdKa4dyI.js";
const b = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = b;
var k = d("<h1> </h1> <p> </p>", 1);
function y(i, f) {
  u(f, false), x();
  var t = k(), r = h(t), n = a(r, true);
  e(r);
  var s = v(r, 2), c = a(s, true);
  e(s), g(() => {
    var _a;
    o(n, m.status), o(c, (_a = m.error) == null ? void 0 : _a.message);
  }), _(i, t), l();
}
export {
  y as component
};
