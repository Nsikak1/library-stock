// Disables access to DOM typings like `HTMLElement` which are not available
// inside a service worker and instantiates the correct globals
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Ensures that the `$service-worker` import has proper type definitions
/// <reference types="@sveltejs/kit" />

// Only necessary if you have an import from `$env/static/public`
/// <reference types="../.svelte-kit/ambient.d.ts" />

import { build, files, version } from '$service-worker';

// This gives `self` the correct types
const self = globalThis.self as unknown as ServiceWorkerGlobalScope;

let isOnline = true;
// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
    ping()
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches().then(() => {
		self.clients.claim();
		console.log("Old caches deleted");
	}));
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});

let pinging = false;
let reTryId: ReturnType<typeof setTimeout>;

async function ping(siteUrl: string = 'https://www.google.com/favicon.ico') {
    if (pinging) return
    pinging = true;

    let cachePreventer = Date.now()
    const url = siteUrl+"?"+cachePreventer;
    const controller = new AbortController();
    let quitTime = 5000;

    // Time out to kill the fetch request 
    const timeoutId = setTimeout(() => controller.abort(), quitTime)

    try {

        console.log(`Checking the URL: ${url}`);
        
        const res = await fetch(url, {
            cache: 'no-cache',
            signal: controller.signal,
            mode: 'no-cors'
        });
        // continue cause failure will throw the try catch
		

        clearTimeout(timeoutId);
   
        if(!isOnline) {
            clearInterval(reTryId);
            isOnline = true;            
            await networkBroadcast();
        }
        
		console.log("there is internet connectivity");
        reTryId = setTimeout(() => ping(), 30000);

    } catch (error) {
        clearTimeout(timeoutId);
        if (isOnline) {
            isOnline = false;
            await networkBroadcast();
        }
        
		console.log("No network");
        reTryId = setTimeout(() => ping(), 5000);
    }

    finally {
        pinging = false;
    }
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CONNECTION_STATUS') {
	console.log("It has gone offline");
	
    ping();
  }
});

async function networkBroadcast() {
	self.clients.claim()
    const mainClients = await self.clients.matchAll({type: 'window'});
	console.log("Sending message to mainclients: ", mainClients);

	
    mainClients.forEach((client) => (client.postMessage({type: 'CONNECTION_STATUS', isOnline})) )
}

