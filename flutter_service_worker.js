'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea4ad3ba7f3baef666c0e3a0d7bd7274",
"version.json": "159e0edfa1927bad78b5c18c30d63706",
"index.html": "4e735b8aea3d5f81c1c21257c51fea4d",
"/": "4e735b8aea3d5f81c1c21257c51fea4d",
"main.dart.js": "23cd939f506ba049e7a4eed12011450b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1092fea2a5fab8f5256e49e89759ed64",
"assets/AssetManifest.json": "227cb18e2230008e4305628608c0f787",
"assets/NOTICES": "f555b55500b2bd9ec15146ab0b01c8ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bcb81de34a1e0d7ce550d6d64aefabb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/book_appointment1.png": "a058b4a2768d629cf499521fb3ab0e6a",
"assets/lib/assets/images/ubercare_login_seeker.png": "421cac41886c33f5984eed02f46085b9",
"assets/lib/assets/images/login_img.jpg": "bae19c37e4d9585a652e4e40146dd806",
"assets/lib/assets/images/manege_alerts.png": "a720bc915b6da7afb75ba65cc7d8f2bf",
"assets/lib/assets/images/book_appointment.png": "5f149decc09bf1a223ebdf154af5b241",
"assets/lib/assets/images/ultimate_care.png": "6ac011bc9ccbd492998f29fad7f3bc11",
"assets/lib/assets/images/empty_profile_picture.png": "3961eab7a198e63aebec44ef26bf195f",
"assets/lib/assets/images/under_maintenance.png": "a64d21edba187353b50f26b8450aa55f",
"assets/lib/assets/images/no_data.jpg": "7ae941307af23bd1c0db47023ddd5376",
"assets/lib/assets/images/finshedSetup_bg.jpg": "71fa37d2dcaa2fbf9021bffd83f792e6",
"assets/lib/assets/icons/ubercare_logo.png": "955e9582de8c00d394c6e6b538498c6a",
"assets/lib/assets/icons/no.png": "79d2ec5d6fdbd63c322ff153cd4edc42",
"assets/lib/assets/icons/user.png": "ed197c508fb138c6587a150d5442fd40",
"assets/lib/assets/icons/yes.png": "8fbaada8fb0b187ff497e5b9de76b50d",
"assets/lib/assets/icons/right.svg": "e1e59d29460ec42478ea6d92e0059d59",
"assets/lib/assets/icons/play.svg": "f7994d136a34ae6a4c90f847f3b99ae1",
"assets/lib/assets/icons/star.svg": "beac4f0df07bd2ca23b75ebc7a2d2f0a",
"assets/lib/assets/icons/share.png": "d6577f2637774b76881af3f979a49f6a",
"assets/lib/assets/icons/clock.svg": "8b7375941a1f102859ab01985ae3f6e5",
"assets/lib/assets/icons/love.png": "edd029edc298c065ffd026bff5ad3e93",
"assets/lib/assets/icons/payment_methods/discover.png": "5af9f94bdc1c4b742f2b6d7fdeda1895",
"assets/lib/assets/icons/payment_methods/visa.png": "339391b5f853c1a7709316e54c60a0f5",
"assets/lib/assets/icons/payment_methods/amex.png": "9a882519e53de14275e5bc116360897a",
"assets/lib/assets/icons/payment_methods/mastercard.png": "c390cd751ee91d02310634534fdfcc49",
"assets/lib/assets/icons/check_mark.png": "6ebd6bde1281f5fe321024ea66693019",
"assets/lib/assets/icons/geolocation.svg": "a3b75b3daeb4952b8c95bf4970a52154",
"assets/lib/assets/icons/heart.svg": "2c9432fcb551629893c13d8bba6b840a",
"assets/AssetManifest.bin": "d5ebce4c368585417eab92b08fdf24a9",
"assets/fonts/MaterialIcons-Regular.otf": "654f827732acef6bd613b92258acc984",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
