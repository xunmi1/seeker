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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c5e23f2b92e86899e7ae5dd87a87466a"
  },
  {
    "url": "assets/css/0.styles.cb318ca4.css",
    "revision": "7d32fd6b117afd35e26b207aaaf26fa2"
  },
  {
    "url": "assets/img/git-operations.14ad858d.png",
    "revision": "14ad858d559384c3d842c737fe39b830"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.38e26469.js",
    "revision": "214995664642f1549062f2f6682dd282"
  },
  {
    "url": "assets/js/3.0e8d9838.js",
    "revision": "2d58dcddd2a9e0b3608fb5ba9016ed33"
  },
  {
    "url": "assets/js/4.b687a8a0.js",
    "revision": "1586a13816f001fb2bdbab38ca6b238d"
  },
  {
    "url": "assets/js/5.c2e54e7f.js",
    "revision": "927ed7d23f45c16eb9a9840e31037f49"
  },
  {
    "url": "assets/js/6.1299e300.js",
    "revision": "9ab1f3d807e9319616883db480eb066b"
  },
  {
    "url": "assets/js/7.4a17cf70.js",
    "revision": "94172a0186c420197e97ba214b16089c"
  },
  {
    "url": "assets/js/8.6d610868.js",
    "revision": "54316d8e2e74250328d6c85222e0f1ab"
  },
  {
    "url": "assets/js/9.b3d40b4e.js",
    "revision": "18eb4613fa43c4fb1e31d7290ed7dec1"
  },
  {
    "url": "assets/js/app.f770d71f.js",
    "revision": "7693eecd9a4ed487c23d357607f2c373"
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
    "revision": "840d88859e56cd85977ad35b5a1bba00"
  },
  {
    "url": "index.html",
    "revision": "a3ff60f8e7f04e842ef0ef71a502e88d"
  },
  {
    "url": "others/fe-style.html",
    "revision": "f074b92aa4887e3620a41f6190d61f91"
  },
  {
    "url": "others/git/git-summary.html",
    "revision": "4ad33016e99435ab37c9c8728ae9aea3"
  },
  {
    "url": "user.png",
    "revision": "daaa1a090c3543607a574b685a05b81d"
  }
].concat(self.__precacheManifest || []);
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
