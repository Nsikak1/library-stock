import { f as d, a as p } from "../chunks/Dy7lmqI0.js";
import { p as u, o as f, f as v, s as l, g as w, a as I, b as h, c as R } from "../chunks/DUA4kTxm.js";
import { S, I as b } from "../chunks/Ty5scKEZ.js";
import { R as _, a as k } from "../chunks/CKy_A0-a.js";
var x = d("<!> <!>", 1);
function E(i, m) {
  u(m, true);
  let o = I(""), t;
  f(async () => {
    t = new _(), window.localStorage.getItem("userId");
    const e = window.localStorage.getItem("token") || "", s = window.localStorage.getItem("url") || "";
    try {
      console.log("Token: ", e), console.log("URL: ", s), await t.connect(s, e), console.log("Connected to room"), t.on(k.DataReceived, (a, y) => {
        const c = new TextDecoder().decode(a);
        console.log("Received Message: ", c), l(o, c, true);
      });
    } catch (a) {
      console.log("Can't connect to the server: ", a);
    }
  });
  var n = x(), r = v(n);
  S(r, {});
  var g = R(r, 2);
  b(g, { get receivedIsbn() {
    return w(o);
  }, set receivedIsbn(e) {
    l(o, e, true);
  } }), p(i, n), h();
}
export {
  E as component
};
