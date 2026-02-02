import { f as p, a as d } from "../chunks/DST53ZDr.js";
import { o as f } from "../chunks/BEnWiOuu.js";
import { p as u, f as v, s as l, g as w, a as I, b as h, c as R } from "../chunks/BR3rKFbi.js";
import { S, I as b } from "../chunks/BmJyf7IV.js";
import { R as _, a as k } from "../chunks/CKy_A0-a.js";
var x = p("<!> <!>", 1);
function L(m, i) {
  u(i, true);
  let e = I(""), t;
  f(async () => {
    t = new _(), window.localStorage.getItem("userId");
    const o = window.localStorage.getItem("token") || "", s = window.localStorage.getItem("url") || "";
    try {
      console.log("Token: ", o), console.log("URL: ", s), await t.connect(s, o), console.log("Connected to room"), t.on(k.DataReceived, (a, y) => {
        const c = new TextDecoder().decode(a);
        console.log("Received Message: ", c), l(e, c, true);
      });
    } catch (a) {
      console.log("Can't connect to the server: ", a);
    }
  });
  var n = x(), r = v(n);
  S(r, {});
  var g = R(r, 2);
  b(g, { get receivedIsbn() {
    return w(e);
  }, set receivedIsbn(o) {
    l(e, o, true);
  } }), d(m, n), h();
}
export {
  L as component
};
