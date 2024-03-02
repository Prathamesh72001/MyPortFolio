'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1411129089992dbd6e5bce4741a758d3",
".git/config": "4a8bcd35b8bbb6190e002be59fe66b41",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b88a1aae9c9681e50368e19c89a578d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "909058e0e6d716d4af23922c8a9e0a70",
".git/logs/refs/heads/main": "894ca24506cd21e78f3964b11c2ec9c1",
".git/logs/refs/remotes/origin/main": "168750acec7a25be454f28ee1b8a947a",
".git/objects/03/4657f27a868781a0d474dfcb7a4e8f552c64ef": "7cdd0072abc64e1f530b0b0da7cb258d",
".git/objects/03/b701e4064f780151c7eefaf8246b99d30d60db": "ba59ab5b9454df4a8f4611f71321d943",
".git/objects/04/1cf198b4c8ca787cb38e92d2c56318d48caeee": "0a2fddeda4ef15452813a238f4d01eae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/ba8abda0b2dbcb7a84187dd5366871cc3ff335": "568895d63eafb79e262c3c0604c6eae9",
".git/objects/12/0582bb343b619ebe236afd61491a06a3483a5e": "f899cf55a6183208ee266f830eaf27d8",
".git/objects/1e/e7dce8b623b624c52cd1a73776ba28d1d639de": "854fa87dcb3c7e0e7542e9ebabd72feb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/2606cce416f4daed0ed9d80a400cd0ec8cb71c": "085d64255813167a416f722f481172f9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/2fa26505a970e4e1b4795a4b41562a6918a7e5": "cb076b806983ad5f92e3bb1bdffb356b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bb1152582b6eb1548b1f89e2fa865a7ee1f267": "f73ebefae3fd56ba5d0a774850aacddd",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/0820a221e53acb47376218bfd89031bf78991d": "82011a27a4dea6c07dafa645c4680261",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/371f66c5f5cb9c4683b03bce1abbdc1c7e43fd": "94fd226ea685a2de27efb6d55cef55ec",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/9f25e86958ec6d137798d4d33327650e3d1ab4": "961aa7f065bf80516a0d6879034e7a9a",
".git/objects/68/55d8b4dea2d5102c90074e252e92338ebdcc0a": "162aab9da4cd243a333850d0ef06c081",
".git/objects/6a/5c29df75e84080edf1dad8b3e76b2e4e841c78": "925e70c294ba1c0a38520660ed4e8662",
".git/objects/6b/5f2f04bfa0b24e524f378397c03b9f71264592": "fce4de432e527d1f680aec65fa32d375",
".git/objects/6b/ffacbbc9e60fc85572e867159d1ff9c0d22822": "95f041db8c758fb449fe63955b9ab38c",
".git/objects/6d/a529b1b9e980ddcee1d2da05f1076419aa2634": "3baa8e0f4f125a68e7f0d9e4720703bb",
".git/objects/73/a5d5edafb013f13afa131580d8acecedbc1ad7": "9e027e6713d51167673b6cc7489a4f7f",
".git/objects/74/a4582820b90ae728f749f1f4fae1b2797abdda": "7cc1065bb373ac305790ff2ef940e105",
".git/objects/81/03f5264105f8a9ea0b151dfc3b1b8d9b2e611e": "eea14054dd0c9a86d06d8f16d8903d04",
".git/objects/85/1c63fbd6f770462277c68c5913f93a4e000e2e": "0b8f2263afef5af905c9ef971ad06a93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/3ab11b5d6366f77ad4c3c6a39393a168d88998": "2b9a04aaef49dd5eef767533ddb24d15",
".git/objects/8f/d8adee9541ba91b3956db003e2281dd3229b5a": "a0746af5b43aaffb29d99a4de71e7b64",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/6f18bd269dda897b32570760b2ee3cc0e24bb9": "2c6eee1488c0a0355db85408e7cdfedb",
".git/objects/99/1eaf1d9f079f28ead10cd895cf185612a0c359": "f42beab083c9d0fbb1ee37b282475ceb",
".git/objects/99/a6e0cfd139ddc3c1255f2eb190c849587a86e3": "b679bc7238a31fe928057c9d6322405a",
".git/objects/99/e9020d0a8e3339172d6c4edd237c91bd694149": "bfdc1b55936a75254ebb359828851c1e",
".git/objects/9a/aff4ccd7a80ee5a6b0f161000adfebfc43cd36": "6f34e07e4f9dc19b00d54f9470189d0e",
".git/objects/9b/b4451144b7cc0afe6e6788d9d181ac097702a0": "1510e963060ec9dff2e66df142a87de0",
".git/objects/9c/44b17e1320d449ac8eb56b26713702fffe38b6": "bcaa93fd1e9f9cde005d0d197ff23467",
".git/objects/9d/d107df2998f1f1bc7ab7f042286766ec6cf158": "917c4755c91701c6a7451b25d35cee5b",
".git/objects/a2/7ade652b5007ea1579b67268db1b35ced71d18": "69ebbf6ab1191e6338b295b3b4132c3c",
".git/objects/a3/515e9badf5a08315c141abfe9ba325f1248ce7": "937c1666bc045941f60faef195ec8c2f",
".git/objects/af/f0c052cd75e0e00b791b43c326d5669be999ad": "48d7d77bb469b4e332e3cfe654952396",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3f0e5787f0aaa7212c36ffb74ef87c8966ce47": "e583ddff859450e627b454255b3a86da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/6308e4979d6405b1ed01acd11471a63b147113": "8ecb06b1dbe7b60539625f40ceb6546a",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/d3/b15e3fec67e290cfb8dff236c4af44078d2f8b": "537bf40bed30ffd1f9407940377fec5b",
".git/objects/d5/e37a804b4b45a9ea9d67ad11da507a6271aa9d": "8d0f82100a33b3a8950720838a140af1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/192591e505ba3af92fb564baa7870889dfa632": "0fbc09392b4fe97c026f9a93ee433594",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/4f5202b7829f638880f00b41d5b9d64d512021": "d3ac47c8b512c41f75036ec8a4e6e809",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/552c79d5ba2b07a29bd5cae75e932f4b108293": "db97095622b062c8e8e0c9687d859325",
".git/objects/e9/8f96d953974174b0fc6c6772f7db1e8f7614d1": "e0c5810270e5c1cf30fa2ff1b05eed50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/469827a94a513c6d6876f7b8177ee337f98f18": "8c568b92e6ad1187f0dffc9013a1e12e",
".git/objects/f5/562def58d140e472b5307129593bf5cb1245b9": "05f34ebf6597922c4847b3a4b8558a48",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/d856c6ff20d3cdad64cc883c82f295898ea9e2": "ee69d04c016e6995f9bb9a952d96628f",
".git/objects/ff/30cb0f5dac66da067596b0a1867c590f3aaf63": "67f58c291cf088353276ed5ea7905d55",
".git/refs/heads/main": "96a823466d5ee8584ca2fc4a03b14eeb",
".git/refs/remotes/origin/main": "96a823466d5ee8584ca2fc4a03b14eeb",
"assets/AssetManifest.bin": "367e9c0a84c448388a3944232751234e",
"assets/AssetManifest.bin.json": "21b705d27f53958ebb97ef8ae2157653",
"assets/AssetManifest.json": "f4667edaf651e22f4eac034f0d4d78eb",
"assets/assets/animations/contact_animation.json": "e1539ce36333ef176b9f0fc782092ce3",
"assets/assets/animations/home_animation.json": "b76fcc1ed1aaa6d6c7e0e3948bdb64b6",
"assets/assets/animations/resume_animation.json": "f01ee3688e00cc5a85f1049938174ba0",
"assets/assets/home_icons/about.png": "2aa29bb51ba828ed8ba86fc12a281819",
"assets/assets/home_icons/contact.png": "91094b3d99b6f62180b5251fe4ddf0e0",
"assets/assets/home_icons/experience.png": "23aeecf3e29567fb98e22b6452b40d98",
"assets/assets/home_icons/home.png": "755dc8766bb4a4158f92001898779afb",
"assets/assets/home_icons/resume.png": "f429ceb5a7a3a7fb870af150b5bf947c",
"assets/assets/images/adventuretime.jpeg": "8487836b6085e2ae858579c582340a8e",
"assets/assets/images/android.png": "477b0618a55c3bb16c5b6de887959296",
"assets/assets/images/apple.png": "b449a795561361c23f74909c8bd572b6",
"assets/assets/images/background.jpg": "ff8418523b07fd85bcd834a04b804257",
"assets/assets/images/canvia.jpeg": "0976746c980051282b61c34d0e807132",
"assets/assets/images/canvia.png": "88ee732556e6f8dc8c798b0f77a220e4",
"assets/assets/images/classmates.jpeg": "70f488fb335536f704ec1ca9c15a07c2",
"assets/assets/images/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/images/flutter.png": "298a004350f67781c8b039c2943732c0",
"assets/assets/images/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/images/gmail.png": "5c503ee994293b7b2b83a8a92d4bd8dd",
"assets/assets/images/google-play.png": "fb3f50af5e98fa60446b185970137a12",
"assets/assets/images/google.png": "ce59e210c1e61eaccd1074f9701e847e",
"assets/assets/images/groccersbasket.jpeg": "9db68fa58c22896ecc5630f8cc2f389c",
"assets/assets/images/home_bg.jpg": "5fe47e443d1880916ee0a866ed37a893",
"assets/assets/images/instagram.png": "52b760457b2be89842588f066a0164bd",
"assets/assets/images/internet.png": "5757a20b89ddacfb1f427610d46be0ca",
"assets/assets/images/itap.png": "1a5555b0f3f9205bf4219b9382340472",
"assets/assets/images/jyppzer.png": "eb567d8278e30032b65512f5c815195f",
"assets/assets/images/linkedin.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/images/profile2.png": "d7cb60c5c9ed3cbd9023d4e9e9bfb269",
"assets/assets/images/telegram.png": "dfe1f9882158a7e9a652464fd50ab521",
"assets/assets/images/whatsapp.png": "a59e768eebc730446e35f676487b8815",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "627a67079ec575b2692ab325a88cf176",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f11603d4db76222e70840383949c3f8",
"/": "6f11603d4db76222e70840383949c3f8",
"main.dart.js": "38ad6f9ba17533e6fb7381d0b6d05014",
"manifest.json": "a2fbc8cd0a4fb4249d4fe6383533177c",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
