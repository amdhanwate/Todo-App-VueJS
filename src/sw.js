self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open("cacheName").then(function (cache) {
            return cache.addAll(
                [
                    './index.html',
                    './styles.css',
                    './main.js',
                    './vue.js'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function (event) {

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});