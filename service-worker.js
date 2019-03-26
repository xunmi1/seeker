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
    "revision": "0f4d01fdfceef0c479c7577c7c13a821"
  },
  {
    "url": "assets/css/0.styles.7e38993a.css",
    "revision": "2df3b2698bff50ee57090d7f8d067236"
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
    "url": "assets/js/7.c21aeecd.js",
    "revision": "147d1d68d1a25fa5eda5093247c9f346"
  },
  {
    "url": "assets/js/8.db9fcc52.js",
    "revision": "8cf56945da5011b391b77a24ff5e85d5"
  },
  {
    "url": "assets/js/app.3dc60a8f.js",
    "revision": "467e63ab746e96f09ac6ea8ab8ac5f54"
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
    "revision": "8737174e9bef4b928c5a08d95cecac01"
  },
  {
    "url": "others/fe-style.html",
    "revision": "d57677d81fa50a4399087261a4a79468"
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
