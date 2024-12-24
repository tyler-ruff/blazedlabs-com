const CACHE_NAME = "static-cache-v1";

const STATIC_FILES = [
    "/images/beaker-cobalt.png",
    "/images/beaker-white.png",
    "/images/blazed-arena.png",
    "/images/ibis.jpg",
    "/images/lockscreen-beaker.png",
    "/images/wallpaper-beaker.png",
    "/favicon.ico"
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log("Caching static files...");
        return cache.addAll(STATIC_FILES);
      })
    );
});

// Fetch event - serve cached files
self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return the cached response if found, or fetch from network
        return response || fetch(event.request);
      })
    );
});
  
// Activate event - cleanup old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});