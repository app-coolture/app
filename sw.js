const CACHE_NAME = 'coolture-v1';
const urlsToCache = [
  '/',
  'index.html',
  'escull.html',
  'home.html',
  'culturas.html',
  'quizz.html',
  'pasaporte.html',
  'perfil.html',
  'registre.html',
  'comenca.html',
  'paises.html',
  'pregunta2.html',
  'style.css',
  'images/logos-03.png',
  'images/logos-02.png',
  'images/forum.png',
  'images/quizz.png',
  'images/passaport.png',
  'images/perfil.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});