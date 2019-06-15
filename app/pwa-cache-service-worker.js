// Global variables
const version = "1.0.1";
const cacheName = `HDeiro-${version}`;

// Elements that may be cached
const cachable = [
    `/`,
	`/index.html`,
	`/images/divider-1-background.jpg`,
	`/images/divider-2-background.jpg`,
	`/images/header-background.jpg`,
	`/images/hugodeiro.jpg`,
	`/images/favicon.png`,
	`/fonts/Lobster-Regular.ttf`,
	`/fonts/OpenSans-Regular.ttf`,
	`/fonts/OpenSans-Semibold.ttf`
];

// On SW installation
self.addEventListener('install', event => event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(cachable).then(() => self.skipWaiting()))));

// On SW Activation
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// On cache fetching
self.addEventListener('fetch', event => event.respondWith(
    caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => response || fetch(event.request))
));
