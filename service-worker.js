const cacheName = 'simplemath';

const filesToCache = [
    '/',
    '/index.html',
    '/main.js',
    '/main.css',
    'images/stotts192.png',
];

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache');
                    return caches.delete(key);
                }
            }))
        })
    );
});