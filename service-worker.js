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
    "revision": "0976dcf1ec8bac5abd548601b1d15a52"
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
    "url": "assets/js/2.5b869ff5.js",
    "revision": "c463a07426d871d43ef0cd67e2908da9"
  },
  {
    "url": "assets/js/3.76528df0.js",
    "revision": "2d58dcddd2a9e0b3608fb5ba9016ed33"
  },
  {
    "url": "assets/js/4.b687a8a0.js",
    "revision": "1586a13816f001fb2bdbab38ca6b238d"
  },
  {
    "url": "assets/js/5.260275bd.js",
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
    "url": "assets/js/9.b3d40b4e.js",
    "revision": "18eb4613fa43c4fb1e31d7290ed7dec1"
  },
  {
    "url": "assets/js/app.6849a153.js",
    "revision": "ea99875b483d094bcb01d162f1fbf20e"
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
    "revision": "f536e5e0c091ba1bdcc5e9529fc4d497"
  },
  {
    "url": "others/fe-style.html",
    "revision": "ec0621e6f186da9050dd35e53a76b051"
  },
  {
    "url": "others/git/git-summary.html",
    "revision": "f871b8ec1e0573d72bec29d83c686c65"
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
