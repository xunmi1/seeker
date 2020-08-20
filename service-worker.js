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
    "revision": "15c0bf0098a53e1a67d0d9326008f873"
  },
  {
    "url": "assets/css/0.styles.e46c6d33.css",
    "revision": "7aa03c88ec0d233477c70405d3d31af7"
  },
  {
    "url": "assets/img/git-cherry-pick.486f540a.gif",
    "revision": "486f540aaf172d27349c217f87e9fba8"
  },
  {
    "url": "assets/img/git-operations.14ad858d.png",
    "revision": "14ad858d559384c3d842c737fe39b830"
  },
  {
    "url": "assets/img/git-rebase-squash.758ead2c.gif",
    "revision": "758ead2cd3914cadc4d822053ad1089a"
  },
  {
    "url": "assets/img/git-rebase.6b8427b4.gif",
    "revision": "6b8427b4baf6cdfb08b852ab1cdb4941"
  },
  {
    "url": "assets/img/git-reflog.319a30ff.gif",
    "revision": "319a30ff181068015a55048e9aa31295"
  },
  {
    "url": "assets/img/git-reflog&git-reset.b4fa51c1.gif",
    "revision": "b4fa51c1f0e51d8b4ff3093ca3847640"
  },
  {
    "url": "assets/img/git-reset-hard.3456eebe.gif",
    "revision": "3456eebeb80dca402dbf5b55e88c4291"
  },
  {
    "url": "assets/img/git-reset-soft.ada73b43.gif",
    "revision": "ada73b43d7146e071f9557372d733d66"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c82fe67.js",
    "revision": "4999e76a2acc36bf46da9e50092f93c8"
  },
  {
    "url": "assets/js/2.4290bd13.js",
    "revision": "850c963b1eb9f635fbd5c2f00f377840"
  },
  {
    "url": "assets/js/3.005d6e79.js",
    "revision": "fb36df26c237af2443dadac0da5d1031"
  },
  {
    "url": "assets/js/4.55b32d71.js",
    "revision": "355ae8e6264235c913907a9ac1767940"
  },
  {
    "url": "assets/js/5.6f625e20.js",
    "revision": "993ba31fef80c199d004e6d25a7c27bc"
  },
  {
    "url": "assets/js/6.0001f663.js",
    "revision": "6ac503d201bba60ab61a11a55e86c15e"
  },
  {
    "url": "assets/js/7.15ad24de.js",
    "revision": "803fa4cdc6bb330d52808231f0c700e8"
  },
  {
    "url": "assets/js/8.a9daf15b.js",
    "revision": "25b2250cae5f5734dba5aedcf012d351"
  },
  {
    "url": "assets/js/9.2da8a9c7.js",
    "revision": "fa7034682ee9e9c1d0234ca09ecefe5e"
  },
  {
    "url": "assets/js/app.a68d5109.js",
    "revision": "862f2a2386d13b3ed099784a61366639"
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
    "revision": "9dae57220b83cffc78f524407d31c1e4"
  },
  {
    "url": "others/fe-style.html",
    "revision": "db5e8bb7edacfa7a024a50d10e5c506f"
  },
  {
    "url": "others/git/index.html",
    "revision": "5dc8028f1e8a946eab1f86d986c7dc06"
  },
  {
    "url": "others/typescript/index.html",
    "revision": "1bf78729a07291d5d384e7e710ce0ab6"
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
