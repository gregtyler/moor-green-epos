// declare var self: ServiceWorkerGlobalScope;

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("epos").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/index.js",
        "/index.css",
        "/images/favicon.png",
        "/images/favicon-144.png",
        "/images/favicon-192.png",
        "/images/favicon-512.png",
        "/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf",
        "/fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    (async function () {
      const response = await caches.match(event.request);
      return response || fetch(event.request);
    })()
  );
});

// Clear the cache when sw.js has been changed
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
