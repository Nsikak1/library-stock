import { f as _, a as y, c as H } from "../chunks/CExXKETe.js";
import { o as M } from "../chunks/rookMbWl.js";
import { aP as L, p as R, c as p, a9 as C, aa as k, b as P, U as O, O as N, g as I, a as B, f as q, s as x } from "../chunks/D_hOHglV.js";
import { d as U } from "../chunks/DnPr7c3f.js";
import { i as T } from "../chunks/CmE5gW5p.js";
import { R as $, a as A } from "../chunks/CKy_A0-a.js";
import { R as Q, S as V, A as j } from "../chunks/B-6X-cLz.js";
import { b as z } from "../chunks/HdR-RNnD.js";
import { b as J } from "../chunks/89ZACdgc.js";
import { r as F } from "../chunks/CYOjpWgn.js";
const K = "";
function X(...v) {
  return J + K + F(v[0], v[1]);
}
const Y = L;
var Z = _('<main class="container svelte-1y75vyh"><h1 class="instruction">Please scan the QrCode with your Phone</h1> <div aria-controls="button" class="qrcode"></div></main>');
function ee(v, m) {
  R(m, true);
  let c;
  const d = { scale: 10, format: "QRCode" };
  let e;
  const o = new $(), a = "ils-lib-room" + Math.floor(Math.random() * 1e3), g = "ils-user-" + Math.floor(Math.random() * 1e3), n = "wss://library-xs8xmdmu.livekit.cloud";
  localStorage.setItem("url", n), o.on(A.Connected, () => {
    console.log("Room Conneceted");
  }), o.on(A.ParticipantConnected, (s) => {
    window.location.assign("/spreadsheet");
  }), M(async () => {
    try {
      const s = await Q(a, d);
      c.innerHTML = s.svg, localStorage.setItem("room", a), localStorage.setItem("userId", g), console.log("roomName: ", a, `
`, "userId: ", g), e = Y ? `${window.location.protocol}//${window.location.hostname}:3000` : "https://library-backend-wbdw.onrender.com";
      const b = (await (await fetch(`${e}/livekit/token?room=${encodeURIComponent(a)}&userId=${encodeURIComponent(g)}`)).json()).token;
      b && localStorage.setItem("token", b), await o.connect(n, b);
    } catch (s) {
      console.error("Error generating QR code:", s), c.innerHTML = `<p>Error generating QR code.</p> ${s}`;
    }
  });
  var t = Z(), u = p(C(t), 2);
  z(u, (s) => c = s, () => c), k(t), y(v, t), P();
}
const oe = { video: { facingMode: "environment" } };
let l, w, E;
function te(v) {
  const m = document.getElementById("scanner"), c = document.querySelector(".message"), d = document.getElementById("video-feed");
  l = document.createElement("video"), l.addEventListener("loadedmetadata", () => {
    l.width = l.videoWidth, l.height = l.videoHeight, l.style.display = "none", w = new OffscreenCanvas(l.videoWidth, l.videoHeight), E = w.getContext("2d"), console.log(`VideoSrc resolution: ${l.videoWidth}x${l.videoHeight}`);
    const e = m.videoWidth / 2, o = m.videoHeight / 2;
    m.width = e, m.height = o, d.width = e, d.height = o, console.log(`Video resolution: ${e}x${o}`);
  }), navigator.mediaDevices.getUserMedia({ video: oe.video, audio: false }).then((e) => {
    console.log("Stream Object: ", e), m.srcObject = e, l.srcObject = e, document.body.appendChild(l), l.play(), m.play(), v.active = true;
  }).catch((e) => {
    c.innerHTML = `An error occurred ${e}`, console.error(`An error occurred ${e}`);
  });
}
async function ne(v) {
  let m = false, c = 0;
  const d = { tryHarder: true, formats: [], tryCode39ExtendedMode: true, tryDownscale: true, tryRotate: true, tryInvert: true, downscaleThreshold: 500 }, e = document.getElementById("scanner"), o = document.getElementById("video-feed"), a = document.querySelector(".message"), g = o.getContext("2d");
  return new Promise((n, t) => {
    const u = setInterval(async () => {
      const s = setTimeout(() => {
        o.style.visibility = "hidden", clearTimeout(s);
      }, 500);
      if (c > 20 && (clearInterval(s), clearInterval(u), a.innerText = "Scan Ended - Try again?", t(new Error("Barcode Scan Timeout after 20 attempts"))), E && l.readyState === l.HAVE_ENOUGH_DATA) {
        E.drawImage(l, 0, 0, w.width, w.height), g == null ? void 0 : g.drawImage(e, 0, 0, o.width, o.height), o.style.visibility = "visible", a.innerText = "Scanning...";
        try {
          const h = await w.convertToBlob({ type: "image/png" });
          if (c++, h) try {
            const r = await V(h, d);
            if (console.log("Barcodes object: ", r), r && r.length > 0) return v.value = r[0].text, console.log("barcode message: ", v.value), a.innerText = v.value, m = true, clearInterval(u), n(v.value);
            console.log("BarCode not available: ", r), t(new Error("Barcode not found")), a.innerText = `No barcode found: ${r.toString()}`;
          } catch (r) {
            console.error("Error reading barcodes: ", r), a.innerText = "Error scanning barcode", t(new Error("Error scanning barcode"));
          }
        } catch {
          console.log("Cannot Generate image form canvas"), t(new Error("Cannot Generate Image"));
        }
      } else a.innerText = "Video not ready - try again";
    }, 500);
  });
}
var re = _('<button id="camera-button" class="svelte-12soy5r">Scan the barcode</button>'), ae = _('<button id="camera-button" class="svelte-12soy5r">Take a picture</button>'), se = _('<main class="camera-container svelte-12soy5r"><div class="video-container svelte-12soy5r"><video id="scanner" autoplay class="svelte-12soy5r"></video> <canvas id="video-feed" class="svelte-12soy5r"></canvas></div> <div class="message"></div> <div class="button-container svelte-12soy5r"><!> <button class="svelte-12soy5r">Send Message</button></div></main>', 2);
function ie(v, m) {
  R(m, true);
  let c = O({ active: false }), d = O({ value: "" }), e = false, o, a;
  const g = "ils-lib-room" + Math.floor(Math.random() * 1e3), n = "ils-user-" + Math.floor(Math.random() * 1e3), t = "wss://library-xs8xmdmu.livekit.cloud";
  let u;
  M(() => {
    a = new $(), u = "https://library-backend-wbdw.onrender.com";
  }), N(() => {
    if (d.value && !e) console.log("in Scanned Value: ", d), fetch(`${u}/livekit/token?room=${encodeURIComponent(g)}&userId=${encodeURIComponent(n)}`).then((i) => i.json()).then((i) => {
      const f = i.token;
      console.log("Token: ", f), a.connect(t, f).then((S) => {
        e = true, console.log("Connected to the room: ", S), o && (o.innerText = "Joined room");
      });
    }).catch((i) => {
      console.log("Cannot Join room: ", i);
    });
    else {
      if (!e || !a) {
        console.log("Not connected to room");
        return;
      }
      const i = d.value;
      if (!i.trim()) {
        console.log("No message to send");
        return;
      }
      const S = new TextEncoder().encode(i);
      a.localParticipant.publishData(S, { reliable: true }), console.log("Sent text:", i);
    }
  });
  var s = se(), h = p(C(s), 2);
  z(h, (i) => o = i, () => o);
  var r = p(h, 2), b = C(r);
  {
    var D = (i) => {
      var f = re();
      f.__click = () => te(c), y(i, f);
    }, W = (i) => {
      var f = ae();
      f.__click = async () => {
        await ne(d), console.log("Outside Take Picture: ", d);
      }, y(i, f);
    };
    T(b, (i) => {
      c.active ? i(W, false) : i(D);
    });
  }
  var G = p(b, 2);
  G.__click = () => {
    console.log("Clicked");
  }, k(r), k(s), y(v, s), P();
}
U(["click"]);
var ce = _('<div class="choose-action svelte-9pz7z5"><button id="receive" class="svelte-9pz7z5">Receive Isbn from Phone</button> <button id="send" class="svelte-9pz7z5">Send Isbn from phone</button></div>');
function pe(v, m) {
  R(m, true);
  let c = B("");
  new $();
  let d = B(false);
  N(() => {
    I(d) && window.location.assign("/spreadsheet");
  }), M(async () => {
    j({ fireImmediately: true, overrides: { locateFile: (n, t) => n.endsWith(".wasm") ? (console.log("Path: ", n), X("/") + n) : (console.log(`Prefix: ${t} 

    Path: ${n}`), t + n) } });
  });
  var e = H(), o = q(e);
  {
    var a = (n) => {
      var t = H(), u = q(t);
      {
        var s = (r) => {
          ee(r, { get connected() {
            return I(d);
          }, set connected(b) {
            x(d, b, true);
          } });
        }, h = (r) => {
          ie(r, {});
        };
        T(u, (r) => {
          I(c) === "receive" ? r(s) : r(h, false);
        });
      }
      y(n, t);
    }, g = (n) => {
      var t = ce(), u = C(t);
      u.__click = () => x(c, "receive");
      var s = p(u, 2);
      s.__click = () => x(c, "send"), k(t), y(n, t);
    };
    T(o, (n) => {
      I(c) ? n(a) : n(g, false);
    });
  }
  y(v, e), P();
}
U(["click"]);
export {
  pe as component
};
