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
    "revision": "46ea55279ed6d5583c872694b3b3cd11"
  },
  {
    "url": "assets/css/0.styles.8a58566b.css",
    "revision": "8f1aaeec23d5588878e7904ac07e9de3"
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
    "url": "assets/js/7.9f9f13f3.js",
    "revision": "1b94963e27d5e6a71d291381860e8d80"
  },
  {
    "url": "assets/js/8.db9fcc52.js",
    "revision": "8cf56945da5011b391b77a24ff5e85d5"
  },
  {
    "url": "assets/js/app.06c17a4c.js",
    "revision": "b2ee556d348862c30a4a28104c058dbb"
  },
  {
    "url": "fire.svg",
    "revision": "9c5040fd6fb239bf9b847ed51ef862a2"
  },
  {
    "url": "index.html",
    "revision": "9f1afd661deefef8ec15d0d2492e1f5e"
  },
  {
    "url": "others/fe-style.html",
    "revision": "a16263f1af8290ffd2d9867d8a155cd5"
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
