importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('sairijal').then(function(cache) {
			return cache.addAll([
				'/',
				'./index.html',
				'./static/img/backgrounds/bg_cartographer.png',
				'./resume.pdf'
				]);
		})
		);
});

self.addEventListener('fetch', function(event) {

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});