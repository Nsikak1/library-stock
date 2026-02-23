import { f as _, a as b, c as B } from "../chunks/Bw-Wuv52.js";
import { o as $ } from "../chunks/DzzNYz1_.js";
import { aP as Q, p as D, c as I, Q as k, R as x, b as H, a6 as O, E as W, f as q, g as E, a as U, s as R } from "../chunks/SbAXgMIg.js";
import { d as z } from "../chunks/k-CT1vo6.js";
import { p as G, i as P } from "../chunks/GWIgz6Mc.js";
import { R as A, a as w } from "../chunks/CKy_A0-a.js";
import { R as V, S as j, A as J } from "../chunks/B-6X-cLz.js";
import { b as L } from "../chunks/BOS2cBk9.js";
import { b as F } from "../chunks/Bb7oIXJV.js";
import { r as K } from "../chunks/CYOjpWgn.js";
const X = "";
function Y(...l) {
  return F + X + K(l[0], l[1]);
}
const N = Q;
var Z = _('<main class="container svelte-1y75vyh"><h1 class="instruction">Please scan the QrCode with your Phone</h1> <div aria-controls="button" class="qrcode"></div></main>');
function ee(l, d) {
  D(d, true);
  let u = G(d, "connected", 15);
  const o = new A();
  let e;
  const a = { scale: 10, format: "QRCode" };
  let s;
  const f = "ils-lib-room" + Math.floor(Math.random() * 1e3), t = "ils-user-" + Math.floor(Math.random() * 1e3), n = "wss://library-xs8xmdmu.livekit.cloud";
  localStorage.setItem("url", n), $(async () => {
    try {
      const v = await V(f, a);
      e.innerHTML = v.svg, localStorage.setItem("room", f), localStorage.setItem("userId", t), console.log("roomName: ", f, `
`, "userId: ", t), s = N ? `${window.location.protocol}//${window.location.hostname}:3000` : "https://library-backend-wbdw.onrender.com";
      const y = (await (await fetch(`${s}/livekit/token?room=${encodeURIComponent(f)}&userId=${encodeURIComponent(t)}`)).json()).token;
      y && localStorage.setItem("token", y), o.on(w.Connected, () => {
        var _a;
        console.log("Room Connected successfully"), console.log("Room state:", o.state), console.log("Local participant:", (_a = o.localParticipant) == null ? void 0 : _a.identity);
      }), o.on(w.ParticipantConnected, (p) => {
        console.log(`Participant ${p.identity} connected`), console.log("Participant details:", p), u(true), window.location.assign("spreadsheet");
      }), o.on(w.Disconnected, () => {
        console.warn("Disconnected from room");
      }), o.on(w.ParticipantDisconnected, (p) => {
        console.log(`Participant ${p.identity} disconnected`);
      }), console.log("Attempting to connect with token:", (y == null ? void 0 : y.substring(0, 20)) + "..."), console.log("Room URL:", n), await o.connect(n, y), console.log("Connection attempt completed");
    } catch (v) {
      console.error("Error generating QR code:", v), e.innerHTML = `<p>Error generating QR code.</p> ${v}`;
    }
  });
  var m = Z(), g = I(k(m), 2);
  L(g, (v) => e = v, () => e), x(m), b(l, m), H();
}
const oe = { video: { facingMode: "environment" } };
let i, C, M;
function te(l) {
  const d = document.getElementById("scanner"), u = document.querySelector(".message"), o = document.getElementById("video-feed");
  i = document.createElement("video"), i.addEventListener("loadedmetadata", () => {
    i.width = i.videoWidth, i.height = i.videoHeight, i.style.display = "none", C = new OffscreenCanvas(i.videoWidth, i.videoHeight), M = C.getContext("2d"), console.log(`VideoSrc resolution: ${i.videoWidth}x${i.videoHeight}`);
    const e = d.videoWidth / 2, a = d.videoHeight / 2;
    d.width = e, d.height = a, o.width = e, o.height = a, console.log(`Video resolution: ${e}x${a}`);
  }), navigator.mediaDevices.getUserMedia({ video: oe.video, audio: false }).then((e) => {
    console.log("Stream Object: ", e), d.srcObject = e, i.srcObject = e, document.body.appendChild(i), i.play(), d.play(), l.active = true;
  }).catch((e) => {
    u.innerHTML = `An error occurred ${e}`, console.error(`An error occurred ${e}`);
  });
}
async function ne(l) {
  let d = false, u = 0;
  const o = { tryHarder: true, formats: [], tryCode39ExtendedMode: true, tryDownscale: true, tryRotate: true, tryInvert: true, downscaleThreshold: 500 }, e = document.getElementById("scanner"), a = document.getElementById("video-feed"), s = document.querySelector(".message"), f = a.getContext("2d");
  return new Promise((t, n) => {
    const m = setInterval(async () => {
      const g = setTimeout(() => {
        a.style.visibility = "hidden", clearTimeout(g);
      }, 500);
      if (u > 20 && (clearInterval(g), clearInterval(m), s.innerText = "Scan Ended - Try again?", n(new Error("Barcode Scan Timeout after 20 attempts"))), M && i.readyState === i.HAVE_ENOUGH_DATA) {
        M.drawImage(i, 0, 0, C.width, C.height), f == null ? void 0 : f.drawImage(e, 0, 0, a.width, a.height), a.style.visibility = "visible", s.innerText = "Scanning...";
        try {
          const v = await C.convertToBlob({ type: "image/png" });
          if (u++, v) try {
            const r = await j(v, o);
            if (console.log("Barcodes object: ", r), r && r.length > 0) return l.value = r[0].text, console.log("barcode message: ", l.value), s.innerText = l.value, d = true, clearInterval(m), t(l.value);
            console.log("BarCode not available: ", r), n(new Error("Barcode not found")), s.innerText = `No barcode found: ${r.toString()}`;
          } catch (r) {
            console.error("Error reading barcodes: ", r), s.innerText = "Error scanning barcode", n(new Error("Error scanning barcode"));
          }
        } catch {
          console.log("Cannot Generate image form canvas"), n(new Error("Cannot Generate Image"));
        }
      } else s.innerText = "Video not ready - try again";
    }, 500);
  });
}
var ae = _('<button id="camera-button" class="svelte-12soy5r">Scan the barcode</button>'), re = _('<button id="camera-button" class="svelte-12soy5r">Take a picture</button>'), ce = _('<main class="camera-container svelte-12soy5r"><div class="video-container svelte-12soy5r"><video id="scanner" autoplay class="svelte-12soy5r"></video> <canvas id="video-feed" class="svelte-12soy5r"></canvas></div> <div class="message"></div> <div class="button-container svelte-12soy5r"><!> <button class="svelte-12soy5r">Reconnect</button></div></main>', 2);
function se(l, d) {
  D(d, true);
  let u = O({ active: false }), o = O({ value: "" }), e = false, a, s = new A();
  const f = "ils-user-" + Math.floor(Math.random() * 1e3), t = "wss://library-xs8xmdmu.livekit.cloud";
  let n;
  $(() => {
    window.localStorage.setItem("hasConnected", "false"), n = "https://library-backend-wbdw.onrender.com";
  }), console.log("Dev is active?: ", N), s.on(w.Connected, () => {
    console.log("Room Conneceted"), a && (a.innerText = "Joined room");
  }), W(() => {
    if (o.value && !e) console.log("in Scanned Value: ", o), fetch(`${n}/livekit/token?room=${encodeURIComponent(o.value)}&userId=${encodeURIComponent(f)}`).then((c) => c.json()).then((c) => {
      const h = c.token;
      console.log("Token: ", h), s.connect(t, h).then((T) => {
        e = true, window.localStorage.setItem("url", t), window.localStorage.setItem("token", h), window.localStorage.setItem("hasConnected", "true"), console.log("Connected to the room: ", T);
      });
    }).catch((c) => {
      console.log("Cannot Join room: ", c);
    });
    else {
      if (!e || !s) {
        console.log("Not connected to room");
        return;
      }
      const c = o.value;
      if (!c.trim()) {
        console.log("No message to send");
        return;
      }
      const T = new TextEncoder().encode(c);
      s.localParticipant.publishData(T, { reliable: true }), console.log("Sent text:", c);
    }
  });
  var m = ce(), g = I(k(m), 2);
  L(g, (c) => a = c, () => a);
  var v = I(g, 2), r = k(v);
  {
    var S = (c) => {
      var h = ae();
      h.__click = () => te(u), b(c, h);
    }, y = (c) => {
      var h = re();
      h.__click = async () => {
        await ne(o), console.log("Outside Take Picture: ", o);
      }, b(c, h);
    };
    P(r, (c) => {
      u.active ? c(y, false) : c(S);
    });
  }
  var p = I(r, 2);
  p.__click = async () => {
    window.localStorage.getItem("hasConnected") === "true" && (await s.connect(t, localStorage.getItem("token")), a && (a.innerText = "Reconnected to room"));
  }, x(v), x(m), b(l, m), H();
}
z(["click"]);
var ie = _('<div class="choose-action svelte-9pz7z5"><button id="receive" class="svelte-9pz7z5">Receive Isbn from Phone</button> <button id="send" class="svelte-9pz7z5">Send Isbn from phone</button></div>');
function pe(l, d) {
  D(d, true);
  let u = U("");
  new A();
  let o = U(false);
  $(async () => {
    J({ fireImmediately: true, overrides: { locateFile: (t, n) => t.endsWith(".wasm") ? (console.log("Path: ", t), Y("/") + t) : (console.log(`Prefix: ${n} 

    Path: ${t}`), n + t) } });
  });
  var e = B(), a = q(e);
  {
    var s = (t) => {
      var n = B(), m = q(n);
      {
        var g = (r) => {
          ee(r, { get connected() {
            return E(o);
          }, set connected(S) {
            R(o, S, true);
          } });
        }, v = (r) => {
          se(r, {});
        };
        P(m, (r) => {
          E(u) === "receive" ? r(g) : r(v, false);
        });
      }
      b(t, n);
    }, f = (t) => {
      var n = ie(), m = k(n);
      m.__click = () => R(u, "receive");
      var g = I(m, 2);
      g.__click = () => R(u, "send"), x(n), b(t, n);
    };
    P(a, (t) => {
      E(u) ? t(s) : t(f, false);
    });
  }
  b(l, e), H();
}
z(["click"]);
export {
  pe as component
};
