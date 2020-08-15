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
    "revision": "bc069e02b31d9f7778f764f1e42f1a1e"
  },
  {
    "url": "assets/css/0.styles.e46c6d33.css",
    "revision": "7aa03c88ec0d233477c70405d3d31af7"
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
    "url": "assets/js/10.d29af238.js",
    "revision": "d7a5da0eb6db067396637c71ed422dd6"
  },
  {
    "url": "assets/js/2.5b869ff5.js",
    "revision": "c463a07426d871d43ef0cd67e2908da9"
  },
  {
    "url": "assets/js/3.76528df0.js",
    "revision": "2d58dcddd2a9e0b3608fb5ba9016ed33"
  },
  {
    "url": "assets/js/4.bf7865e1.js",
    "revision": "f390304232f286deede2b98f31b4184e"
  },
  {
    "url": "assets/js/5.de8f68df.js",
    "revision": "66b1ed6eb2a90a938655996b522dc374"
  },
  {
    "url": "assets/js/6.a238e926.js",
    "revision": "9ab1f3d807e9319616883db480eb066b"
  },
  {
    "url": "assets/js/7.d7224c3f.js",
    "revision": "94172a0186c420197e97ba214b16089c"
  },
  {
    "url": "assets/js/8.f2eaf20b.js",
    "revision": "444b3364cfc3bf8c48b0bb278b6fd54b"
  },
  {
    "url": "assets/js/9.82dc1e52.js",
    "revision": "f494d635a4c0e7f5de22a75c76b71936"
  },
  {
    "url": "assets/js/app.d4860229.js",
    "revision": "7d4c594ca646a3afcef070abf29e86b2"
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
    "revision": "57367ba6f738c4e869dc56d05012ba67"
  },
  {
    "url": "others/fe-style.html",
    "revision": "abffdeb57745c6f51783429060a5ad08"
  },
  {
    "url": "others/git/index.html",
    "revision": "2751eb58d5a7d2eb0ca3eeda6a640505"
  },
  {
    "url": "others/typescript/index.html",
    "revision": "e96685d188674c24dc071e8f0f420a27"
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
