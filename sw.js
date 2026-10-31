var V='smk-v1',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(V).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
