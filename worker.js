self.addEventListener('install', function(event) {
  // Instalar de inmediato
  if (self.skipWaiting) { self.skipWaiting(); }
    event.waitUntil(
      caches.open('cache01').then(function(cache) {
        return cache.addAll([
    '/index.html',
    '/caminatas.html',
    '/contacto.html',
    '/fogatas.html',
    '/nosotros.html',
    '/teambuilding.html',
    '/trekking.html',
    '/css/normalize.css',
    '/css/style.css',
    '/js/contacto.js',
    '/js/index.js',
    '/js/nosotros.js',
    '/js/servicios.js',
    '/vendor/scrollreveal.js',
    '/manifest.json'
        ]);
      })
    );
  });

  // Cache, falling back to network
  addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;     // if valid response is found in cache return it
          } else {
            return fetch(event.request)     //fetch from internet
              .then(function(res) {
                return caches.open('cache01')
                  .then(function(cache) {
                    cache.put(event.request.url, res.clone());    //save the response for future
                    return res;   // return the fetched data
                  })
              })
              .catch(function(err) {       // fallback mechanism
                return caches.open('cache01')
                  .then(function(cache) {
                    return cache.match('/index.html');
                  });
              });
          }
        })
    );
  });     

   // Elimina archivos de cache viejos
    var cacheWhitelist = ['cache01'];
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      });
    caches.keys().then(function(cacheKeys) {
    // Muestra en la consola la cache instalada 
    console.log('Versión SW: '+cacheKeys);
  });  