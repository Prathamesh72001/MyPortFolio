'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63127b8f41e0f8c5f0a9826594058cf3",
"assets/AssetManifest.bin.json": "59e1a3207b87312bb85d6ee707ff7513",
"assets/AssetManifest.json": "4808f49c50f290fc716a904671e8b575",
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
"assets/assets/images/profile.jpeg": "9dc39d1f7fa9ce4670a5c65d93f5e683",
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
"index.html": "c3ecf867274db31975aa54da5236d01c",
"/": "c3ecf867274db31975aa54da5236d01c",
"main.dart.js": "b0f25a75e21a6c5f95f3069050e50de5",
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
