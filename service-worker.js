---
layout: null
---
const CACHE_NAME = 'takophotos-cache-v1';
const OFFLINE_URLS = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/index.html',
  '{{ site.baseurl }}/manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
