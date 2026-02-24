// sw.js
console.log('Service worker script loaded'); // Runs on installation/update

self.addEventListener('install', event => {
  console.log('Install event');
  self.skipWaiting(); // Force activation
});

self.addEventListener('activate', event => {
  console.log('Activate event');
  clients.claim(); // Take control immediately
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for:', event.request.url);
});

 