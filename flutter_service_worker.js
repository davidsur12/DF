'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "189f0f36ef710d6070cc273ef1e4658d",
"assets/AssetManifest.json": "27ab237918c1c4cf433422d240b99c6c",
"assets/assets/drawable/map_horizontal.png": "6f85daacc8c289c802f34f5d39577e7d",
"assets/assets/drawable/map_horizontal_point.png": "b307a45b9e75c01ce1bd8298e0d1f160",
"assets/assets/drawable/map_vertical.png": "cba577e632d30e1bdaf28e7740dcf80a",
"assets/assets/drawable/map_vertical_point.png": "bb8e1293717dbde7f4446e7c3625f4c3",
"assets/assets/otros/amazonas.png": "3714e7a2eb1f3023006f4ce3c44144d5",
"assets/assets/otros/andino.png": "b85655754ef0206c40dc29cdae15c03c",
"assets/assets/otros/c1.png": "26d3daa2628e0f264423b1d791812f8a",
"assets/assets/otros/c2.png": "97f79f018dbe10b6b709e7b1199f29e7",
"assets/assets/otros/c3.png": "96727ac581996c68a6b977187bb6df78",
"assets/assets/otros/caribe.png": "9033a97eed4b3589e319912c5acc83d6",
"assets/assets/otros/colombia.png": "8b64adc8798ae75150eea425b3b496aa",
"assets/assets/otros/departamentos.jpg": "952beb1c17fff988dccf626f1b174537",
"assets/assets/otros/Dise%25C3%25B1o%2520sin%2520t%25C3%25ADtulo.png": "e428d596e1f1e68efa57528bc22ac2ed",
"assets/assets/otros/insular.png": "736a087de3569399aad77e7dab4f9ccf",
"assets/assets/otros/mapa-amazonas.jpg": "bd2623eab516693335e95c791d7bef7c",
"assets/assets/otros/mapa-andino.jpg": "082a8529aa06df94faf2d18d36bd3231",
"assets/assets/otros/mapa-caribe.jpg": "d140ca67039bed226189d9a3fb40ac0e",
"assets/assets/otros/mapa-insular.png": "c965594ce48ba6f95166dbae4eec7b2b",
"assets/assets/otros/mapa-orinoco.png": "6cdfc68aa0e7e7e418ce94e722ecf5ae",
"assets/assets/otros/mapa-pacifico.jpg": "e4219f34c8c539b258cf36a8a4c832b1",
"assets/assets/otros/orinoquia.png": "f99b64064885b426917dda1bd8059f00",
"assets/assets/otros/pacifico.png": "8a93701782d6746335db6401eee44950",
"assets/assets/otros/region%2520insular.png": "bb1bc82a6375a968d91e691bf1560d3c",
"assets/assets/otros/Region-amazonia2.png": "c28a0ec60242d233cc5ff12aa189cf31",
"assets/assets/otros/Region-andina2.png": "bf2fbcdc456a6c1eb8841218f359b3bc",
"assets/assets/otros/Region-Caribe2.png": "d8c3d940f8da1ddbecc51cd874c4f65e",
"assets/assets/otros/Region-insular2.png": "307d34592cdd552e5fc3091dfd9586c9",
"assets/assets/otros/region-orinoquia2.png": "b720056a95e2527ffbf073bab2cad029",
"assets/assets/otros/Region-pacifica2.png": "e25c7897acba51dd052be39075028ae9",
"assets/assets/otros/Region_%2520orinoquia.png": "1eaf9b1e311830bfefb5b38900634bf0",
"assets/assets/otros/Region_amazonia.png": "0e119d0699c70143e78bc34f94773296",
"assets/assets/otros/Region_andina.png": "8f3051fb8657bce2a049eacb16f35fd6",
"assets/assets/otros/Region_Caribe.png": "6cfe4473e43bd5ca494fb1b15c07bdc5",
"assets/assets/otros/Region_pacifica.png": "8c1ed185535cafa1c7ee707b2e91d4c0",
"assets/assets/otros/student1.png": "334920404f6d2b377b47a53df433fb11",
"assets/assets/otros/student2.png": "e11ea048414928f0cc395f2c83676229",
"assets/assets/otros/student3.png": "be740ca85f1056a2075506dbfadeab8e",
"assets/assets/otros/student4.png": "e84a95f4c7f9fde348907508a6f60751",
"assets/assets/otros/student5.png": "3004e0e46c3865e34607ed75a67ffea8",
"assets/assets/otros/video1.mp4": "b0fe7ce481b00ffbd4c8b00081db9df5",
"assets/assets/svg/map_horizontal.svg": "f928ae3584c03f71c0b4cf755bb6e902",
"assets/assets/svg/map_vertical.svg": "764b96e6cd567878cb02112d2f84f451",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99e131c6753251b63c96f657e8bc2714",
"assets/NOTICES": "e7476f2247adeaafdef19e5161fa66a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_meedu_videoplayer/assets/icons/exit_lock-screen.png": "3f5c485f05c7746cfbb8bf419282bb90",
"assets/packages/flutter_meedu_videoplayer/assets/icons/exit_picture-in-picture.png": "61bd02c019e57496ab2cf94ad2e05655",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fast-forward.png": "4b90931155b96f781590fd2e9ffceef8",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fit.png": "e6ba4c78e9de2bfc134a0ffeb8518cb2",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fullscreen.png": "8a040d2380f58e3b8f33ee728fd84e24",
"assets/packages/flutter_meedu_videoplayer/assets/icons/lock-screen.png": "6ea8cc81b7baa76304959597188e877e",
"assets/packages/flutter_meedu_videoplayer/assets/icons/minimize.png": "b3856b8a8c4d30067ef749aff9c820d0",
"assets/packages/flutter_meedu_videoplayer/assets/icons/mute.png": "d70bed3cdfb3296efbe4de06e6dfed47",
"assets/packages/flutter_meedu_videoplayer/assets/icons/pause.png": "a8ddf81addcb6e7408868015d7afe035",
"assets/packages/flutter_meedu_videoplayer/assets/icons/picture-in-picture.png": "c221b185a9d8c6d2b2c9b6776fa550ba",
"assets/packages/flutter_meedu_videoplayer/assets/icons/play.png": "f93523daf337c51131913acae4889a2e",
"assets/packages/flutter_meedu_videoplayer/assets/icons/repeat.png": "9dfe3bbcbefb4b746a145bde57a71bff",
"assets/packages/flutter_meedu_videoplayer/assets/icons/rewind.png": "235a7d4b69b461128ddf04389d7d3fda",
"assets/packages/flutter_meedu_videoplayer/assets/icons/sound.png": "530661df012ed13bee07ab2d3b874777",
"assets/packages/pod_player_new/assets/forward_left.json": "58d29aeb5dc90802ab28fcfb7f308c8d",
"assets/packages/pod_player_new/assets/forward_right.json": "9399a13a78737afa0a6d0fea7683638a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5d153c6a988d6f896b00f9a424320ff6",
"canvaskit/canvaskit.wasm": "7c6de92a246382429b7782137b4b4b5e",
"canvaskit/chromium/canvaskit.js": "504767837b8b6bec6f77f3978ddc5543",
"canvaskit/chromium/canvaskit.wasm": "6b6502433d076d159b59a13e6174cfde",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "867e0c1af67ee1abb30141e450e9d41f",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c39ec3ff25a46be4fdba24a45971056",
"/": "0c39ec3ff25a46be4fdba24a45971056",
"main.dart.js": "b3c80702704478858ba792eb45b5de50",
"manifest.json": "df0a9243af2122ec0c3d59e89e8ff2a2",
"version.json": "bb76e24510b53800c60246d7fa2cc4dd"};
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
