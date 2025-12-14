firebase.initializeApp({
  apiKey: "AIzaSyAZPfHLw3LykNWEADQnD6_6id4_JlNx9EU",
  authDomain: "ein-notification.firebaseapp.com",
  projectId: "ein-notification",
  storageBucket: "ein-notification.firebasestorage.app",
  messagingSenderId: "305257928700",
  appId: "1:305257928700:web:37516dcab0724fea700479",
  measurementId: "G-WD4Y0Z2SPD"
});

const messaging = firebase.messaging();

function enableNotifications() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      messaging.getToken({
        vapidKey: "🔥YAHAN_APNI_VAPID_KEY_DALO🔥"
      }).then(token => {
        console.log("FCM TOKEN:", token);

        // Google Analytics event
        if (typeof gtag === "function") {
          gtag('event', 'notification_allowed', {
            event_category: 'Push',
            event_label: 'User Enabled'
          });
        }
      });
    }
  });
}
