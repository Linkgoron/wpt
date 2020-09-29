self.addEventListener('fetch', (event) => {
    event.respondWith(fetch("echo-hints.py"))
});
