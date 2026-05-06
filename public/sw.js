/*
 * Ravado Tech — Service Worker (placeholder)
 *
 * This file exists to prevent 404s for GET /sw.js.
 * It intentionally does NOT implement offline caching.
 */

self.addEventListener("install", () => {
  // Activate immediately (safe because we don't cache/intercept fetches).
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
