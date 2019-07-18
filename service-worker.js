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
    "revision": "7988fa34056b9746f8d124f35391a167"
  },
  {
    "url": "about/index.html",
    "revision": "c7476723661ffd3034b10bac837de1ef"
  },
  {
    "url": "assets/css/0.styles.4bf69a12.css",
    "revision": "efd3cf4f53717ffcd0d8616750627125"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1e74e47e.js",
    "revision": "7e3c0471fe043c03400ee33cc6f36007"
  },
  {
    "url": "assets/js/11.717efce5.js",
    "revision": "ad4608a0b98b649bffa99ced9c46bf00"
  },
  {
    "url": "assets/js/12.c167d3c5.js",
    "revision": "5937fc1fafb28f66661304b2116cfe0e"
  },
  {
    "url": "assets/js/13.351e0e4a.js",
    "revision": "7a8bb73a322428e17f80de4dbd4b0945"
  },
  {
    "url": "assets/js/14.1f9c39d6.js",
    "revision": "6b33d55dd5fa7d5b579bb86fe11b7925"
  },
  {
    "url": "assets/js/15.50578107.js",
    "revision": "7890f8649834ebc9a4eba309e4be267e"
  },
  {
    "url": "assets/js/16.747fc05b.js",
    "revision": "3daaebbcacec2a7fee160491b1dd3baf"
  },
  {
    "url": "assets/js/17.f625d23f.js",
    "revision": "5dbb0d8c90a42019dbfd5d460b072697"
  },
  {
    "url": "assets/js/18.db5698ac.js",
    "revision": "ebd8adcb30bce3e4d18e0e228954e0d8"
  },
  {
    "url": "assets/js/19.200e3e0b.js",
    "revision": "701b8cc32d5cf1dde215277c3747fc83"
  },
  {
    "url": "assets/js/2.32d4bfd0.js",
    "revision": "b00e4d3a03350e4ee3bce945ed0f4f32"
  },
  {
    "url": "assets/js/20.4b72bd78.js",
    "revision": "7b58ffafba40311dfffdbe5379d775e0"
  },
  {
    "url": "assets/js/21.9e5e5c22.js",
    "revision": "99d14a733b73ff0393d38ccddfa7aa30"
  },
  {
    "url": "assets/js/22.b8f0ead1.js",
    "revision": "1e68f2f7942f667f541b195c99ac812b"
  },
  {
    "url": "assets/js/23.ffbff350.js",
    "revision": "9503a43dda9cf24768e05ba5e52f1960"
  },
  {
    "url": "assets/js/24.3fc37ac3.js",
    "revision": "198f3a76b8aea6f541fe1b842559c117"
  },
  {
    "url": "assets/js/3.3062bbc0.js",
    "revision": "4c651b42b6c352af8ea26328070a0e38"
  },
  {
    "url": "assets/js/4.586fe4a9.js",
    "revision": "2f50cecadb97c6b60bac33d93eb48e45"
  },
  {
    "url": "assets/js/5.fe4f3905.js",
    "revision": "86fdaa242daef42f15680e215d5ccea7"
  },
  {
    "url": "assets/js/6.99128164.js",
    "revision": "ad1d55e4d8e2a52cf7880a1470ec9bfe"
  },
  {
    "url": "assets/js/7.5de05986.js",
    "revision": "d9691561ba549a10d89e6918e7ba52cf"
  },
  {
    "url": "assets/js/8.5610068e.js",
    "revision": "379cdd13a70afedaae6e99f4064228d6"
  },
  {
    "url": "assets/js/9.e3e5dfe8.js",
    "revision": "a137134fd1400fe3409797c5a6806828"
  },
  {
    "url": "assets/js/app.026ab186.js",
    "revision": "2f447ae9b169411535c64ec4c9f710c4"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "3c2e0007c2691b2da6124f9fcb3f51ec"
  },
  {
    "url": "friends/index.html",
    "revision": "cfedc1be81fda18413194d9e91f907b9"
  },
  {
    "url": "guide/index.html",
    "revision": "39d8c4179c9938b9c53b6869df5cc29c"
  },
  {
    "url": "index.html",
    "revision": "a0fb78782215fe3e86a90767092f6794"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "7554ea80385ef6dfce057f102ecc4d0d"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "7ea9ef780aa74b44fc5f2e5f3e34ba40"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "42c1f659f9f91f545c005fac2c8bc37b"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "2a2e02ac4a9d5e1a1d186f706084bc7f"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "0834cbd1253348ee380f32825fb9803e"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "0fbe3c1a739d303adff15da16eb11715"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "9e3a3a1af6b2f4aeacf98d3587bdac82"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "5bd54cd3dc97e3548b267abc01acf4eb"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "0ecc84625c7f143cb0d0ff6483fcfa87"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "f90bbc750f97b392b84a3fece08cfbdc"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "bc90dee5f2dc3f4730cf989c8956bdc9"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "52584f326213b4604fa51a8a939801d8"
  },
  {
    "url": "together/index.html",
    "revision": "e5e88e0d831704ad93a58bc4a5b80f03"
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
