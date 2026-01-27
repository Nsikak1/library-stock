import { f as u, a as h } from "../chunks/BjTfwbem.js";
import { i as g } from "../chunks/Pcmb8gcg.js";
import { a5 as l, f as v, a6 as d, a7 as _, a8 as s, a9 as e, s as x } from "../chunks/CdrJcFTF.js";
import { s as o } from "../chunks/9O2zJLIi.js";
import { s as $, p } from "../chunks/BMCVn60L.js";
const k = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = k;
var b = u("<h1> </h1> <p> </p>", 1);
function z(f, i) {
  l(i, false), g();
  var t = b(), r = v(t), n = s(r, true);
  e(r);
  var a = x(r, 2), c = s(a, true);
  e(a), d(() => {
    var _a;
    o(n, m.status), o(c, (_a = m.error) == null ? void 0 : _a.message);
  }), h(f, t), _();
}
export {
  z as component
};
