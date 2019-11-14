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
    "revision": "18e1e7217aa03bbfbba4fe3f5d3b8af1"
  },
  {
    "url": "assets/css/0.styles.8d4168b3.css",
    "revision": "e2ede15365bf941b57fea1c4e9143e96"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4b4116de.js",
    "revision": "271a675dac968ae4993a4b8327188fc9"
  },
  {
    "url": "assets/js/3.3e908569.js",
    "revision": "014818f88a198938802f3ac3e934b9c8"
  },
  {
    "url": "assets/js/4.aa54ef99.js",
    "revision": "4610dd51de3bfbaeaaf68c2b424ca200"
  },
  {
    "url": "assets/js/5.471c19ca.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.e4edb209.js",
    "revision": "1f43e92ce53757be8e8f1a438b5ee734"
  },
  {
    "url": "assets/js/7.4dfb6a1b.js",
    "revision": "5f6ebba74f3fa357950741aea204a44c"
  },
  {
    "url": "assets/js/8.301714f9.js",
    "revision": "c555d437f1de85337143f74c92887dad"
  },
  {
    "url": "assets/js/9.e16594f4.js",
    "revision": "e8b86536eff7f27c4565d40df0a559c7"
  },
  {
    "url": "assets/js/app.0a591362.js",
    "revision": "79b2ef8b9871e8ab0e484c09213c384e"
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
    "revision": "dfdbce0c9ccbc63c125def4287faeb2e"
  },
  {
    "url": "others/fe-style.html",
    "revision": "66a6053e321b7571d876f56b2d6349a0"
  },
  {
    "url": "others/git-summary.html",
    "revision": "c20773de91847f3d954733d73a80999a"
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
