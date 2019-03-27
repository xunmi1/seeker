/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7be1d577b6b881e9766719fa419e32e5"
  },
  {
    "url": "assets/css/0.styles.2127c9a4.css",
    "revision": "fad1ea2537519578dcb562c1807f17a0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.d2574d68.js",
    "revision": "13bc36a2531633cf24563ef9d9e5ff6a"
  },
  {
    "url": "assets/js/3.eb3fd172.js",
    "revision": "e42a831d8944bd35d9e27f4b523c5f2d"
  },
  {
    "url": "assets/js/4.13de6179.js",
    "revision": "4c924a7f64433e9461e9e900cbfd0fc6"
  },
  {
    "url": "assets/js/5.81ca9883.js",
    "revision": "e89a81e6a608d3bd9b10854442119b03"
  },
  {
    "url": "assets/js/6.914a2598.js",
    "revision": "6ea097c9017c5cd3d337eb715f97825b"
  },
  {
    "url": "assets/js/7.6a397c10.js",
    "revision": "e300fd097bf9f53d3528ecaa9a24eb1b"
  },
  {
    "url": "assets/js/8.db9fcc52.js",
    "revision": "8cf56945da5011b391b77a24ff5e85d5"
  },
  {
    "url": "assets/js/app.af44ef20.js",
    "revision": "ecbceda4b66e8b0b7f51412c50e70236"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "03f84b70b9e653f78068576b3cefe620"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "43fc5637e32eb41064f45fe7668bf55c"
  },
  {
    "url": "icons/fire.svg",
    "revision": "9c5040fd6fb239bf9b847ed51ef862a2"
  },
  {
    "url": "index.html",
    "revision": "077f2d2c18f5ac200aea6c19359dc572"
  },
  {
    "url": "others/fe-style.html",
    "revision": "d565daf83c28f1e1f7bcf7eedee6695a"
  },
  {
    "url": "user.png",
    "revision": "daaa1a090c3543607a574b685a05b81d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
