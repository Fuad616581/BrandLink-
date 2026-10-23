// BrandLink Firebase settings (these web keys are public by design; Firestore rules protect your data).
window.BL = {
  adminEmail: 'brandlink2027@gmail.com',
  currency: 'YER ',         // shown before the price in English, e.g. YER 25,000
  currencyAr: 'ريال',        // shown after the price in Arabic, e.g. 25,000 ريال
  config: {
    apiKey: "AIzaSyCkpJ884maj8jZ7-Xinz6nAQGlP1s5XBXo",
    authDomain: "brandlink-63e15.firebaseapp.com",
    projectId: "brandlink-63e15",
    storageBucket: "brandlink-63e15.firebasestorage.app",
    messagingSenderId: "655229621550",
    appId: "1:655229621550:web:8e837b70c63fd710aa16bf",
    measurementId: "G-WJNF2D0HPE"
  },
  // Free order emails via emailjs.com (orders also always appear in admin.html)
  emailjs: { serviceId: 'service_k1i6evn', templateId: 'template_zlvylwa', publicKey: 'lj9zMUD8Af7aH-1_h' }
};
