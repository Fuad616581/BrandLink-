// BrandLink Firebase settings (these web keys are public by design; Firestore rules protect your data).
window.BL = {
  adminEmail: 'brandlink2027@gmail.com',
  currency: '$',            // change to e.g. 'SAR ' or 'YER ' if you want
  config: {
    apiKey: "AIzaSyCkpJ884maj8jZ7-Xinz6nAQGlP1s5XBXo",
    authDomain: "brandlink-63e15.firebaseapp.com",
    projectId: "brandlink-63e15",
    storageBucket: "brandlink-63e15.firebasestorage.app",
    messagingSenderId: "655229621550",
    appId: "1:655229621550:web:8e837b70c63fd710aa16bf"
  },
  // Optional free order emails via emailjs.com (leave empty to skip; orders still appear in admin.html)
  emailjs: { serviceId: '', templateId: '', publicKey: '' }
};
