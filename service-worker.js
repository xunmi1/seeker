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
    "revision": "be39c26955a1b455014569b4121598d1"
  },
  {
    "url": "assets/css/0.styles.9759a56c.css",
    "revision": "887f6c69dff88044fabe17e34eecf339"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.93c59367.js",
    "revision": "1b8a1a3c8e2b6bfc4ab2b70c3cd0afea"
  },
  {
    "url": "assets/js/3.92dac5eb.js",
    "revision": "68697e5e8cf5aadd633f55327a5725ff"
  },
  {
    "url": "assets/js/4.2c3748b4.js",
    "revision": "4797bfe29808a66d845ae7d3792cebaa"
  },
  {
    "url": "assets/js/5.d804be93.js",
    "revision": "e89a81e6a608d3bd9b10854442119b03"
  },
  {
    "url": "assets/js/6.39dfed6d.js",
    "revision": "6ea097c9017c5cd3d337eb715f97825b"
  },
  {
    "url": "assets/js/7.bed7e6c5.js",
    "revision": "a61e2a1e77b8b9a0a43c61117ac0a3b5"
  },
  {
    "url": "assets/js/8.b5ac5326.js",
    "revision": "901903c88b0a583cdbdda8e653e8d86f"
  },
  {
    "url": "assets/js/9.d67efb76.js",
    "revision": "5505510e24dc88bdbfdbcccffd2f4195"
  },
  {
    "url": "assets/js/app.38716c7e.js",
    "revision": "36fcfa7f2fdeedbf7e6d8ecd16393cc3"
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
    "revision": "7449046e933c47beebc3fc07cb9563e0"
  },
  {
    "url": "others/fe-style.html",
    "revision": "7833012107ff4afde899ad064fb9b89e"
  },
  {
    "url": "others/git-summary.html",
    "revision": "d6cb45be486413c6a4798c94b9ef9f10"
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
