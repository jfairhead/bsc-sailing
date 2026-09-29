// The app has moved. This replaces the old service worker: it clears the old saved copy and removes itself,
// so anyone who installed the old address stops seeing the old version.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
