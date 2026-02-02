import { f as u, a as h } from "../chunks/CExXKETe.js";
import { i as g } from "../chunks/DCej6xER.js";
import { p as l, f as v, a8 as d, b as _, a9 as s, aa as e, c as x } from "../chunks/D_hOHglV.js";
import { s as o } from "../chunks/Cqi1-AIm.js";
import { s as $, p } from "../chunks/CtkNqGSr.js";
const b = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = b;
var k = u("<h1> </h1> <p> </p>", 1);
function z(f, i) {
  l(i, false), g();
  var t = k(), r = v(t), c = s(r, true);
  e(r);
  var a = x(r, 2), n = s(a, true);
  e(a), d(() => {
    var _a;
    o(c, m.status), o(n, (_a = m.error) == null ? void 0 : _a.message);
  }), h(f, t), _();
}
export {
  z as component
};
