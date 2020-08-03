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
    "revision": "47c493dedf1650359e4cb4a677948b69"
  },
  {
    "url": "assets/css/0.styles.43ef9606.css",
    "revision": "0e26d059abed59dafb9a2ab24ecce986"
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
    "url": "assets/js/2.4909e647.js",
    "revision": "cc5bebc4952da68980f223e33b22c061"
  },
  {
    "url": "assets/js/3.53884e4b.js",
    "revision": "5708f6da086742b8304a8c0cc6d44a6b"
  },
  {
    "url": "assets/js/4.9574794f.js",
    "revision": "5802095112706facd35f67a912626f85"
  },
  {
    "url": "assets/js/5.8ee0982f.js",
    "revision": "10ad76ed43a9476cafba73c00db99046"
  },
  {
    "url": "assets/js/6.c64cb59d.js",
    "revision": "531dda117e06fd84472c15aa9a540f39"
  },
  {
    "url": "assets/js/7.224ad5a6.js",
    "revision": "7003566be7bc48f31492ebed668ff39a"
  },
  {
    "url": "assets/js/8.5e2cd426.js",
    "revision": "be5c94a3f8129a3bb2b2f288374d36f2"
  },
  {
    "url": "assets/js/9.ca17a6f5.js",
    "revision": "e7bba6a6f07f9878544fcf179ae26f6a"
  },
  {
    "url": "assets/js/app.1e296eff.js",
    "revision": "9de0ef267d10e9b0be9485a57ae56ed0"
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
    "revision": "d6f1d1acd8939372250cd95445c3bda5"
  },
  {
    "url": "others/fe-style.html",
    "revision": "2cfbaf69b9a4f29bf3dda76cfe7f8079"
  },
  {
    "url": "others/git/git-summary.html",
    "revision": "1d7d1cc4bbc2d214ca80064622f50768"
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
