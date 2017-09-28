importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('sairijal').then(function(cache) {
			return cache.addAll([
				'/',
				'./index.html',
				'./static/css/pure-min.css',
				'./static/css/icons.css',
				'./static/css/grids-responsive-min.css',
				'./static/css/fonts.css',
				'./static/css/application.css',
				'./static/fonts/icons.woff',
				'./static/fonts/icons.ttf',
				'./static/fonts/icons.svg',
				'./static/fonts/icons.eot',
				'./static/fonts/BrionRegular.ttf',
				'./static/fonts/BrionLight.ttf',
				'./static/fonts/BrionBold.ttf',
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