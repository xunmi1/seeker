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
    "revision": "433973e8fafda5a93ed90141f9487c3b"
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
    "url": "assets/js/2.be0c9cd2.js",
    "revision": "13bc36a2531633cf24563ef9d9e5ff6a"
  },
  {
    "url": "assets/js/3.0579c243.js",
    "revision": "3c8e8fe4d2a684275388c466c5864091"
  },
  {
    "url": "assets/js/4.9c2cdc66.js",
    "revision": "64b54dd323b21c6793f6a3144f5fa83f"
  },
  {
    "url": "assets/js/5.18a427d4.js",
    "revision": "e89a81e6a608d3bd9b10854442119b03"
  },
  {
    "url": "assets/js/6.6e212480.js",
    "revision": "6a619eea2165cf6f33f5fa6886ae1129"
  },
  {
    "url": "assets/js/7.7b6e5d2b.js",
    "revision": "a065a1cd372fd5240a8700c4498df6c1"
  },
  {
    "url": "assets/js/app.5b112726.js",
    "revision": "47d96add05a24e3e914544570d62c2fb"
  },
  {
    "url": "fire.svg",
    "revision": "9c5040fd6fb239bf9b847ed51ef862a2"
  },
  {
    "url": "index.html",
    "revision": "188ba5f16a555b3548267e98a96806ee"
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
