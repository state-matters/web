importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js")

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets"
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
)

// Cache the materialdesignicons css & font files
workbox.routing.registerRoute(
  /^https:\/\/cdn\.materialdesignicons\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "material-design-icons"
  })
)

// Cache all other css and js files with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "static-resources"
  })
)

// Cache all images for 15 days with a cache-first strategy.
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 15 * 24 * 60 * 60 // 15 Days
      })
    ]
  })
)

// Cache the index page to respond with 200 when offline.
workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst())
