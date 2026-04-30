const CACHE_NAME = 'weld-qc-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './model.json',
  './group1-shard1of12.bin',
  './group1-shard2of12.bin',
  './group1-shard3of12.bin',
  './group1-shard4of12.bin',
  './group1-shard5of12.bin',
  './group1-shard6of12.bin',
  './group1-shard7of12.bin',
  './group1-shard8of12.bin',
  './group1-shard9of12.bin',
  './group1-shard10of12.bin',
  './group1-shard11of12.bin',
  './group1-shard12of12.bin',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
