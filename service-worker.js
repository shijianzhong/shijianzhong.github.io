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
    "revision": "cdba92205a44573c4dfdcd6cbcbc78d2"
  },
  {
    "url": "about/index.html",
    "revision": "dafb9246098cfcd009eeef121d79e706"
  },
  {
    "url": "assets/css/0.styles.84ea2c6c.css",
    "revision": "9407b84e41835d8475e6134c63d2777a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f4280409.js",
    "revision": "faa4f409758884132356309a31945fde"
  },
  {
    "url": "assets/js/11.79a32fb2.js",
    "revision": "6b615f73515342150c0c54102dfa0f62"
  },
  {
    "url": "assets/js/12.8c6343f0.js",
    "revision": "a7888a0489aa42b78fba2e7e38ea3d14"
  },
  {
    "url": "assets/js/13.62c48f17.js",
    "revision": "d1df8c348ab0a285cefcaabf53c11f8d"
  },
  {
    "url": "assets/js/14.77198652.js",
    "revision": "e8197dd66ba57e4202bef2923d166a7a"
  },
  {
    "url": "assets/js/15.5ac7f308.js",
    "revision": "c3d260b6cd5e3fc0078db0a1873c442d"
  },
  {
    "url": "assets/js/16.12026611.js",
    "revision": "b32a9e949a62b3676f41e1278fcbe8f5"
  },
  {
    "url": "assets/js/17.089e77d0.js",
    "revision": "7c8b0b5ddf8557c1f696b73b3561c7ce"
  },
  {
    "url": "assets/js/18.54d04ba8.js",
    "revision": "d7055ee96851d552e2b216bfe713386d"
  },
  {
    "url": "assets/js/19.836ad4b3.js",
    "revision": "02ad045e58c064197b84e3d0aacc4d85"
  },
  {
    "url": "assets/js/2.6142dfc9.js",
    "revision": "21a0f9ccce0e659d38e741380249cf6d"
  },
  {
    "url": "assets/js/20.fd3f5e1f.js",
    "revision": "231089d1cdc53cd000cb7fdf4570295c"
  },
  {
    "url": "assets/js/21.1165e8f7.js",
    "revision": "5ecdb59db1940097d49aff68665339bf"
  },
  {
    "url": "assets/js/22.e82c407c.js",
    "revision": "9e0da52b1859393bb3532203b38faa33"
  },
  {
    "url": "assets/js/23.7f1edd59.js",
    "revision": "21cf66195ec571a3e48b87b81ac66485"
  },
  {
    "url": "assets/js/24.8e67626f.js",
    "revision": "5f2fa59f245b2d6f47ca2f81a90ad0d8"
  },
  {
    "url": "assets/js/25.3dc222b3.js",
    "revision": "092cc47d141fa7537baa4de8f27afbf5"
  },
  {
    "url": "assets/js/26.1f4866fb.js",
    "revision": "19aa9f2079e02cc0154a26c835bd8791"
  },
  {
    "url": "assets/js/27.eaed1336.js",
    "revision": "ad7df2dc3df3302830ec43bb6ee94109"
  },
  {
    "url": "assets/js/28.4e89fe44.js",
    "revision": "7c1746dede82fb6ecd25692e67b888ee"
  },
  {
    "url": "assets/js/29.2ff968c9.js",
    "revision": "23d33db13258d83faf8843231d1e08b5"
  },
  {
    "url": "assets/js/3.33c45e77.js",
    "revision": "d3f08138b5c08b479917e09c14d26414"
  },
  {
    "url": "assets/js/30.eb74f244.js",
    "revision": "594e9ea9299ce2aaf6eb95b2465c58c4"
  },
  {
    "url": "assets/js/31.f6807416.js",
    "revision": "9fce4d9f7ce4f362f60d16ee5f4cd80a"
  },
  {
    "url": "assets/js/32.e842209c.js",
    "revision": "0166cb95ad0aac85886b5f754bb4db62"
  },
  {
    "url": "assets/js/33.cf9275bc.js",
    "revision": "5e6c158945dd283e8684d1c787054ed1"
  },
  {
    "url": "assets/js/34.a5c56129.js",
    "revision": "d2d768e5e4123c824073485f830d47c6"
  },
  {
    "url": "assets/js/35.5a8fd716.js",
    "revision": "4c595e583dfd959b7d41aae604252c3c"
  },
  {
    "url": "assets/js/36.151510f2.js",
    "revision": "5f3a1b40c96b73ea23f15da7a2c14bc2"
  },
  {
    "url": "assets/js/37.845089ed.js",
    "revision": "459e6778f65fb9029e869ca5f11b6deb"
  },
  {
    "url": "assets/js/38.a0ab2c3d.js",
    "revision": "1e3c8dd59c9829585872e4c9b4265c40"
  },
  {
    "url": "assets/js/39.3a28e750.js",
    "revision": "2000264515d528b86d67d54b130a7004"
  },
  {
    "url": "assets/js/4.18314dd9.js",
    "revision": "d91cf5cc098f05b1db027bb5a729116b"
  },
  {
    "url": "assets/js/40.eae3dea9.js",
    "revision": "79f8143b1a0bae115cc6fd2c78780bfc"
  },
  {
    "url": "assets/js/41.67d8eb55.js",
    "revision": "6c8f6d6667f50b05c41e7893d8fd0914"
  },
  {
    "url": "assets/js/42.c32610bb.js",
    "revision": "189441b5057a7c6d064efcf09e39e378"
  },
  {
    "url": "assets/js/43.269163d0.js",
    "revision": "7755dfb6ab452f842e33504fe945f9f8"
  },
  {
    "url": "assets/js/44.f602df58.js",
    "revision": "198d85f97664267e3c5c2da15daa288b"
  },
  {
    "url": "assets/js/45.69e9ee68.js",
    "revision": "20f8b12486ea6fc7900ca5ba9e29d56e"
  },
  {
    "url": "assets/js/46.be5d373e.js",
    "revision": "27710c159a16459324d72fca206e998b"
  },
  {
    "url": "assets/js/47.74820790.js",
    "revision": "b7aa892269814e273e4d76876ae144e4"
  },
  {
    "url": "assets/js/48.972655f4.js",
    "revision": "cda6cee844c89c8b55f13874dd7cbd91"
  },
  {
    "url": "assets/js/49.14dfd7d1.js",
    "revision": "957002f7aa2a466488c36dfa68d8a245"
  },
  {
    "url": "assets/js/5.fb026edc.js",
    "revision": "69acbbb8fc3d8d38f4926657764d1d2a"
  },
  {
    "url": "assets/js/50.c4af4293.js",
    "revision": "b5a80b9e825dd482c622bd3f3db04f58"
  },
  {
    "url": "assets/js/51.af712aeb.js",
    "revision": "afd3709989f941f5c62c6e73c417fb60"
  },
  {
    "url": "assets/js/52.726183c5.js",
    "revision": "dd8fc4c64f16e3baf7007876fe98c92c"
  },
  {
    "url": "assets/js/53.81d5f918.js",
    "revision": "2a7fe07ceb6702b490d56a7a1df0352d"
  },
  {
    "url": "assets/js/54.715f299e.js",
    "revision": "47dae99f955ea52e03a62513ba7c75b8"
  },
  {
    "url": "assets/js/55.befa9746.js",
    "revision": "275cd16bc993775ba686105ca8c71627"
  },
  {
    "url": "assets/js/56.7e2045c4.js",
    "revision": "213275dd07f4a5e7fbeda5b2f096339e"
  },
  {
    "url": "assets/js/57.1c550a68.js",
    "revision": "80eabafd10b7e7f2ecf0f0367770a1e4"
  },
  {
    "url": "assets/js/58.0f96a66c.js",
    "revision": "ece3e214af835810b91095d14930d16c"
  },
  {
    "url": "assets/js/59.ebeb8002.js",
    "revision": "8a3511f14dd99497f7048bf10dc8c0c1"
  },
  {
    "url": "assets/js/6.44e2f43d.js",
    "revision": "2047a1743569347b4697ac784761fb36"
  },
  {
    "url": "assets/js/60.0dcf3d11.js",
    "revision": "570130385f7394887a79188d77d8a380"
  },
  {
    "url": "assets/js/61.c377579d.js",
    "revision": "f30cbf893a9116d12939510ef9e51064"
  },
  {
    "url": "assets/js/62.275381e6.js",
    "revision": "1b6b97663b5efb01185a7d182255d0ed"
  },
  {
    "url": "assets/js/63.ad5d124d.js",
    "revision": "acf3c9d2f99ce345e3027697fa6fa02d"
  },
  {
    "url": "assets/js/64.114daaa7.js",
    "revision": "4005d18ebafa3ade6528f68707590c4d"
  },
  {
    "url": "assets/js/65.6dccde0a.js",
    "revision": "84fced1df1e15dd4e3decddc4f04ac4e"
  },
  {
    "url": "assets/js/66.00dfad51.js",
    "revision": "36ce7f04669f47cb24f415f8a3a0cd57"
  },
  {
    "url": "assets/js/67.47cf09f0.js",
    "revision": "b5c162232a0f4e644ffafccdd61bfd9d"
  },
  {
    "url": "assets/js/68.80e0bd53.js",
    "revision": "6f5fa543744702b9354bd7fcd81ea600"
  },
  {
    "url": "assets/js/69.2da7dade.js",
    "revision": "bf203097019a59534264e625794cf395"
  },
  {
    "url": "assets/js/7.ccbc20d4.js",
    "revision": "48b344d7f8a0e0df83f94c86db7d49c0"
  },
  {
    "url": "assets/js/70.883ff32d.js",
    "revision": "95a91ab9a8f6dc30b33c32a5242e0781"
  },
  {
    "url": "assets/js/71.d833f1e0.js",
    "revision": "1c3a83feff1edbcfbe2b705461d4826f"
  },
  {
    "url": "assets/js/72.038ad7c3.js",
    "revision": "25144bcb2708de32d74ffd17ccee525a"
  },
  {
    "url": "assets/js/73.d1f09d78.js",
    "revision": "de406e315fcd328a68accd6642bb10f1"
  },
  {
    "url": "assets/js/74.f82ddabf.js",
    "revision": "4bb513af29c57158a84332df829be766"
  },
  {
    "url": "assets/js/75.8dca7e23.js",
    "revision": "c0bfe1da9a992ed154115c5d1558123f"
  },
  {
    "url": "assets/js/76.523efa2a.js",
    "revision": "6657b89be0f7f62aec957110d12349f9"
  },
  {
    "url": "assets/js/77.fc585620.js",
    "revision": "810eeeb51e450f9e496c9d5907ff94a3"
  },
  {
    "url": "assets/js/78.86110158.js",
    "revision": "a5c8e89f42bbfe56ea85553bc5fcee13"
  },
  {
    "url": "assets/js/79.2619ce09.js",
    "revision": "80f956eabf075243f41fe4266c0de3be"
  },
  {
    "url": "assets/js/8.c6594836.js",
    "revision": "7149d2bd4c6c190a8d24f3a34464d6f3"
  },
  {
    "url": "assets/js/80.db09796a.js",
    "revision": "c9db85100d8ec414134dacc6370b496d"
  },
  {
    "url": "assets/js/81.23178bf4.js",
    "revision": "f7da050df9a57d7348a11da1f4c02fc3"
  },
  {
    "url": "assets/js/82.de51a556.js",
    "revision": "392fc17b050810cd824e01e84fa4db8c"
  },
  {
    "url": "assets/js/83.78317630.js",
    "revision": "7c115241dbeca89e56d2bcaf5cb79565"
  },
  {
    "url": "assets/js/84.45d99def.js",
    "revision": "ccb53647f0d5832c5d5c0e18dbc5b100"
  },
  {
    "url": "assets/js/85.acaeb320.js",
    "revision": "9f1d81cbc86eaed9474ce2563b4a88bd"
  },
  {
    "url": "assets/js/86.5100eb5a.js",
    "revision": "be7a002ed8c0d7c0a386f583fd1738ba"
  },
  {
    "url": "assets/js/87.841a3392.js",
    "revision": "f7d3408ce6484a37b2b7cc2d6b8cadb9"
  },
  {
    "url": "assets/js/88.f9964eb7.js",
    "revision": "1a58d9ea43f80000292ae97194852844"
  },
  {
    "url": "assets/js/89.869949ec.js",
    "revision": "2a84f164fc74adcf9d74bdf7cbae9837"
  },
  {
    "url": "assets/js/9.5045e10d.js",
    "revision": "61f322e751ba2b78daa589cababcd7fa"
  },
  {
    "url": "assets/js/90.890269bd.js",
    "revision": "47dd64a0c4af2fa9478c24d9add2d67d"
  },
  {
    "url": "assets/js/91.7caee566.js",
    "revision": "9c7338e26432c250a4daa476725a85dd"
  },
  {
    "url": "assets/js/92.8fa7bd88.js",
    "revision": "0fba431bbeb572d27fc22411d0df3bc2"
  },
  {
    "url": "assets/js/93.a16e7b4d.js",
    "revision": "b5dfcb0e24f10b6cc3f74e23ccb366fb"
  },
  {
    "url": "assets/js/app.6fb7da20.js",
    "revision": "6bbc5c3c88060bde767c918e832350c1"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "guide/index.html",
    "revision": "6a83d6f5265a19d759716ae0b81fcdb1"
  },
  {
    "url": "index.html",
    "revision": "4d76de6c447181ebcb51711bbaab572f"
  },
  {
    "url": "log/index.html",
    "revision": "45fde3c368b12d52faa398abff26e4ab"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "7cd6044f943b612b1910f430c73fb94f"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/云函数.html",
    "revision": "1d1a8c7696fa1f0b86e43b7436f18899"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/初始化.html",
    "revision": "73be76b1b8109623a61df5f863e02d25"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/数据库.html",
    "revision": "6e9d2d47c4681d0e2623d5ae9931317b"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/文件存储.html",
    "revision": "9060c8c7a5023c55379d548219477903"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/概述.html",
    "revision": "5d2381ee62630a8c903704843367f080"
  },
  {
    "url": "SDK 文档/客户端 SDK/Web 端 SDK/登录授权.html",
    "revision": "dc04bd32f27132a3138cf69ac1260b7b"
  },
  {
    "url": "SDK 文档/客户端 SDK/小程序端 SDK.html",
    "revision": "8b0e8a363dae812d391e17277959f33d"
  },
  {
    "url": "SDK 文档/服务端 SDK/云函数.html",
    "revision": "6cb15cab61f48ab5eb75c51ff2639a8d"
  },
  {
    "url": "SDK 文档/服务端 SDK/初始化.html",
    "revision": "988afec2d925abdafce72c827c7d92d9"
  },
  {
    "url": "SDK 文档/服务端 SDK/数据库.html",
    "revision": "7fb63eea1c1bff9c905e5d0e1a9e30b8"
  },
  {
    "url": "SDK 文档/服务端 SDK/文件存储.html",
    "revision": "ec3f085ed91c11a0bdb28591915f6e87"
  },
  {
    "url": "SDK 文档/服务端 SDK/概览.html",
    "revision": "e700189c6bb22ffeed5f0925b8df0219"
  },
  {
    "url": "SDK 文档/服务端 SDK/身份认证.html",
    "revision": "c631d8416f0b1bf3803eba58a6e5bd3a"
  },
  {
    "url": "together/index.html",
    "revision": "6ae3e2d8c90f738c993865a49cf67ab5"
  },
  {
    "url": "产品介绍/产品概述.html",
    "revision": "b3a4bb8d22a97dad6f53847478d86827"
  },
  {
    "url": "产品介绍/基本概念/Web 端基本概念.html",
    "revision": "eeac09274ed6527aeec869b748b8544b"
  },
  {
    "url": "产品介绍/基本概念/小程序端基本概念.html",
    "revision": "25a2faa103e297a7c539fc796602ae86"
  },
  {
    "url": "产品介绍/应用场景.html",
    "revision": "310643cccd04a5ca9e2033395ee5d968"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征分析与检测使用指引.html",
    "revision": "8b252433c8619e48c56a6e560d1087c4"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征检测与分析介绍.html",
    "revision": "f32a52fef460fea85bc7c2ed19a5b09d"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征检测与分析使用场景.html",
    "revision": "1aacef3da4d1b446f5634d19fbce0b99"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/2 分钟完成颜值打分小程序.html",
    "revision": "0caee9b4393b8f967ed6cea773bb4ce1"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/人脸隐私保护.html",
    "revision": "da16f6fa6667faaa9e3f1787abfe9ab5"
  },
  {
    "url": "产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/智能裁剪.html",
    "revision": "37f07bc0055a0e18def6be06d15a965b"
  },
  {
    "url": "产品介绍/扩展能力解决方案/一键部署介绍.html",
    "revision": "0b4dabcad86a9f889b4d0712e7ba80ab"
  },
  {
    "url": "产品介绍/扩展能力解决方案/云开发扩展能力简介.html",
    "revision": "85976e2b1dda341212748bd8f1e63f2f"
  },
  {
    "url": "产品介绍/扩展能力解决方案/云开发扩展能力计费方式.html",
    "revision": "7cc3d73c31b138af19805523fb459a90"
  },
  {
    "url": "产品介绍/相关产品.html",
    "revision": "35862b913598cde589629095f749b753"
  },
  {
    "url": "开发指南/云函数/使用 npm.html",
    "revision": "d14b156866384f16f4c0f55e10e34d4a"
  },
  {
    "url": "开发指南/云函数/创建云函数.html",
    "revision": "c3b4e0d9070d95d50741c620d6b1751e"
  },
  {
    "url": "开发指南/云函数/定时触发器.html",
    "revision": "3cb95ffcbca9257bc305340a89d11be9"
  },
  {
    "url": "开发指南/云函数/异步返回结果.html",
    "revision": "377c5f5f5e96ed6a7540ef8cfde87ab7"
  },
  {
    "url": "开发指南/云函数/概述.html",
    "revision": "ae83fe5df2b04a3df89c05467f8adf27"
  },
  {
    "url": "开发指南/云函数/注意事项.html",
    "revision": "7e80dd3315e9369de8de6e5ff993863e"
  },
  {
    "url": "开发指南/云函数/测试、日志与监控.html",
    "revision": "35ea108fa933d315552cef242d2b3a31"
  },
  {
    "url": "开发指南/云函数/管理云函数.html",
    "revision": "8c32622df0fe324085ca7fc9cdfc3bfd"
  },
  {
    "url": "开发指南/云函数/获取用户信息.html",
    "revision": "3f07ec7e978b34181ed2cdbd314c55f1"
  },
  {
    "url": "开发指南/云函数/调用云函数.html",
    "revision": "503445ccfe95f3bc40acce11fa6b93af"
  },
  {
    "url": "开发指南/云函数/运行机制.html",
    "revision": "d52f1c820603de961639972392c18f7e"
  },
  {
    "url": "开发指南/存储管理/上传文件.html",
    "revision": "abdb6cca7f9cb31ffb8d9878c79a097c"
  },
  {
    "url": "开发指南/存储管理/下载文件.html",
    "revision": "93dcffd45a01ca7a2a791e8715f04b52"
  },
  {
    "url": "开发指南/存储管理/删除文件.html",
    "revision": "bc8c4c1d5c11f739c350f4942e344dcb"
  },
  {
    "url": "开发指南/存储管理/小程序组件支持.html",
    "revision": "d050bbb25599fbd51308601a3a3225b1"
  },
  {
    "url": "开发指南/存储管理/换取临时链接.html",
    "revision": "6712076ae0a4899023200348268aaadc"
  },
  {
    "url": "开发指南/存储管理/概述.html",
    "revision": "8fb48e33110114ef24217730c738cc22"
  },
  {
    "url": "开发指南/存储管理/管理文件.html",
    "revision": "71cf7de448c482804d2a1212e8f4502a"
  },
  {
    "url": "开发指南/开发简介.html",
    "revision": "216598ed96d782c2f308ee9dc6845370"
  },
  {
    "url": "开发指南/控制台简介/小程序云开发控制台.html",
    "revision": "1e037bda2d42dc56a00eb8fcc332d311"
  },
  {
    "url": "开发指南/控制台简介/腾讯云云开发控制台.html",
    "revision": "c9f8def86c7d28649ccd4565172dc8b4"
  },
  {
    "url": "开发指南/数据库/初始化.html",
    "revision": "a5fefeac88c72122e6416b564c7c3914"
  },
  {
    "url": "开发指南/数据库/删除数据.html",
    "revision": "eb8440bfe45ba6c91c402340c7f1114c"
  },
  {
    "url": "开发指南/数据库/导入数据.html",
    "revision": "e1ad93479f449a5432da6212e3a067e8"
  },
  {
    "url": "开发指南/数据库/导出数据.html",
    "revision": "ab5e07aee244e4e1efbafc9c84446d8b"
  },
  {
    "url": "开发指南/数据库/插入数据.html",
    "revision": "2e668664442f3fc985622bbf0b2ad313"
  },
  {
    "url": "开发指南/数据库/数据类型.html",
    "revision": "82d1017af6d499a0afaa5a530f2e6b33"
  },
  {
    "url": "开发指南/数据库/更新数据.html",
    "revision": "9ecea8a29de793a139d90b84928699b1"
  },
  {
    "url": "开发指南/数据库/构建查询条件.html",
    "revision": "5ebc144a2534240bec2f042be68ac2dd"
  },
  {
    "url": "开发指南/数据库/概述.html",
    "revision": "8ad38974b49c67c93ad86d4f4a5357e5"
  },
  {
    "url": "开发指南/数据库/管理数据库.html",
    "revision": "3b86a0f466d4283090d5182e45135d52"
  },
  {
    "url": "开发指南/数据库/索引管理.html",
    "revision": "9f722f8e6089433659c6b3a38970d5af"
  },
  {
    "url": "开发指南/数据库/读取数据.html",
    "revision": "b76da30a06985ff0e4144315bb57efd0"
  },
  {
    "url": "快速入门/Web 端快速入门/入门概述.html",
    "revision": "9ffb9cfe2f76795eefe52fbeee6acbfb"
  },
  {
    "url": "快速入门/Web 端快速入门/开发网站应用.html",
    "revision": "90c58e4dec13978e84f3a71798612e9f"
  },
  {
    "url": "快速入门/Web 端快速入门/开通云开发服务.html",
    "revision": "a180f54a39342e71a8929b35d92b1318"
  },
  {
    "url": "快速入门/Web 端快速入门/注册网站应用.html",
    "revision": "d7c260071aef834fdb3299aeff2d2367"
  },
  {
    "url": "快速入门/小程序端快速入门/入门概述.html",
    "revision": "3af3885e25ce8140abf3f1198ee2da3f"
  },
  {
    "url": "快速入门/小程序端快速入门/开发小程序.html",
    "revision": "4b5855b91a04c1636dd172a41a463b59"
  },
  {
    "url": "快速入门/小程序端快速入门/开通云开发服务.html",
    "revision": "2c8a656abf858e17033a04b4fe68f2f7"
  },
  {
    "url": "快速入门/小程序端快速入门/注册小程序帐号.html",
    "revision": "9201c33398eac4363948ca3ac2aa37f9"
  },
  {
    "url": "技术分享/index.html",
    "revision": "a1af5e5c321e88307d78227cbe897801"
  },
  {
    "url": "技术分享/官方教程/AI名片小程序.html",
    "revision": "defdd518b09f4077687bd2b150d26573"
  },
  {
    "url": "技术分享/官方教程/树洞小程序.html",
    "revision": "baf2ed13591ebc06bab1a9fbb76889ed"
  },
  {
    "url": "技术分享/官方教程/相册小程序.html",
    "revision": "3b555627a38f917967f29ca357679cae"
  },
  {
    "url": "技术分享/官方教程/论坛小程序.html",
    "revision": "34e16df2f1ad5130742d429c09f9320d"
  },
  {
    "url": "技术分享/实战分享/Taro商城实战.html",
    "revision": "2adbb67d213a022564204c160b3ed485"
  },
  {
    "url": "技术分享/实战分享/婚礼小程序.html",
    "revision": "b74b55ff466bff139c52dcab5277b8fb"
  },
  {
    "url": "技术分享/实战分享/更多教程文章.html",
    "revision": "7d4b8fe66546e5a9fab1aa854ac61b93"
  },
  {
    "url": "技术分享/客户案例/乐享花园.html",
    "revision": "3a952694da41e82048890399edfb7926"
  },
  {
    "url": "技术分享/客户案例/猫眼.html",
    "revision": "e52c8f68080014f6753e38a4f8e44638"
  },
  {
    "url": "技术分享/客户案例/转转.html",
    "revision": "ac6ecf3e5b4401d3dff3d0a928f4ed84"
  },
  {
    "url": "技术分享/洞察/云调用.html",
    "revision": "a6b103eda02b080b86d607a07e16f8de"
  },
  {
    "url": "技术分享/洞察/从前端到全栈.html",
    "revision": "15267a6dcc7e77c34554bd5e753f5ece"
  },
  {
    "url": "技术分享/编码规范/前端规范.html",
    "revision": "c267a5951c6daabef278fd70f01ff036"
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
