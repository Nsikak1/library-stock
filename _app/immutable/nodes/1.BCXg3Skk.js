import { f as u, a as h } from "../chunks/Dy7lmqI0.js";
import { i as g } from "../chunks/DsF2ImuW.js";
import { p as l, f as v, O as d, b as _, P as a, Q as e, c as x } from "../chunks/DUA4kTxm.js";
import { s as o } from "../chunks/Df04Hj-s.js";
import { s as $, p } from "../chunks/DZhsXzGY.js";
const b = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = b;
var k = u("<h1> </h1> <p> </p>", 1);
function q(f, i) {
  l(i, false), g();
  var t = k(), r = v(t), c = a(r, true);
  e(r);
  var s = x(r, 2), n = a(s, true);
  e(s), d(() => {
    var _a;
    o(c, m.status), o(n, (_a = m.error) == null ? void 0 : _a.message);
  }), h(f, t), _();
}
export {
  q as component
};
