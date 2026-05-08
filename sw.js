self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'New Notification!';
    
    event.waitUntil(
        self.registration.showNotification('Nimbus', {
            body: data,
            icon: '/icon-192.png',
            badge: '/icon-192.png'
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
