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
    "revision": "1e3617908b37377f2c62623943f3ce2c"
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
    "url": "assets/js/4.5a07aead.js",
    "revision": "22caffbbc79eb470955661db6ef944d5"
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
    "url": "assets/js/8.1cd62203.js",
    "revision": "9c175eda96803afa7c9e036def132d0a"
  },
  {
    "url": "assets/js/9.d67efb76.js",
    "revision": "5505510e24dc88bdbfdbcccffd2f4195"
  },
  {
    "url": "assets/js/app.c8ba2413.js",
    "revision": "7d4998893ef23beff699fc6e1376a8f8"
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
    "revision": "3a86c436bcc60164e7b514206ea26f3e"
  },
  {
    "url": "others/fe-style.html",
    "revision": "f40aa49e682a8be83f6a1335810aab70"
  },
  {
    "url": "others/git-summary.html",
    "revision": "0ec0606a9a51bd4c442a22c13e1980fc"
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
