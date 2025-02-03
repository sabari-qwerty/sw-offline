const cacheName = "my-cache-v1";

//  cache all the file in the cache storage
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(["/", "/index.html", "/app.js", "/deepbot.png"]);
    })
  );
});

//  deletes the old cache and keeps the new cache
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// fecth the data from the cache storage in offline mode
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Serve cached content or make a network request
      return response || fetch(event.request);
    })
  );
});
