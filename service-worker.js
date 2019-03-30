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
    "revision": "e73e55057325c7f5884e7af0f7a8b8aa"
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
    "url": "assets/js/8.d474cf10.js",
    "revision": "15dc4f0ede311161b58673e92483b5d1"
  },
  {
    "url": "assets/js/9.d67efb76.js",
    "revision": "5505510e24dc88bdbfdbcccffd2f4195"
  },
  {
    "url": "assets/js/app.d842b0e0.js",
    "revision": "8726b884a1c56f46d54ed409e8ff0ed7"
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
    "revision": "8fd98284359e5dcb3f5738925c6f7200"
  },
  {
    "url": "others/fe-style.html",
    "revision": "7c279735b9dc806dabe6744f5e4b893d"
  },
  {
    "url": "others/git-summary.html",
    "revision": "2911858c14d12f7a9e55f4ea0b521799"
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