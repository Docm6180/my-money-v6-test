const CACHE='mymoney-local-v62-0-test';
const FILES=['./','./index.html','./manifest.json','./icon.svg','./upgrade-v5.html','./v60.css','./v60.js','./v604.js','./v608.js','./v610.css','./v610.js','./v620.css','./v620.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mymoney-local-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))))});
