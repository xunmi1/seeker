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
    "revision": "32d60acaaed592effe3968e66f1fa8c0"
  },
  {
    "url": "assets/css/0.styles.c246f0f6.css",
    "revision": "61e8965fe0298f19c4ec46fa706de889"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e163dc21.js",
    "revision": "0fc0b3165e9d189fcb91820d07cf02b7"
  },
  {
    "url": "assets/js/3.a773c574.js",
    "revision": "bf7bca1046475380a2237b29755d83d0"
  },
  {
    "url": "assets/js/4.67ae84eb.js",
    "revision": "56829056f6cc0751febefce402c3dd92"
  },
  {
    "url": "assets/js/5.6375fdec.js",
    "revision": "4115127caae945d33e7534d70b85fa6a"
  },
  {
    "url": "assets/js/6.d13789b6.js",
    "revision": "d12eeee59a0680ea3f830d081020d3d6"
  },
  {
    "url": "assets/js/7.3ff00cf7.js",
    "revision": "8aca99470732d87f4962304e2344b1b6"
  },
  {
    "url": "assets/js/8.89afc00c.js",
    "revision": "751e784ea731e82490f1764a4ba397cb"
  },
  {
    "url": "assets/js/9.0d5605d5.js",
    "revision": "cf5ec41cbbfb9472380f373b3282396f"
  },
  {
    "url": "assets/js/app.a94852e7.js",
    "revision": "b2685edd6dc7595a52e72b5b2778926e"
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
    "revision": "cba3f103a2ff38f294a8f6efa66ccc1a"
  },
  {
    "url": "others/fe-style.html",
    "revision": "5b1eb3244f2bcea97d9d749717311bb6"
  },
  {
    "url": "others/git-summary.html",
    "revision": "2eb2fe2cb901c68b016232eec5e9651f"
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
