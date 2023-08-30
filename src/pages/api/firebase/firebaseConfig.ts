// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";


const firebaseConfig: Object = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "dixit-4a976.firebaseapp.com",
    projectId: "dixit-4a976",
    storageBucket: "dixit-4a976.appspot.com",
    messagingSenderId: "895635720741",
    appId: "1:895635720741:web:61cdd8629ec3c0b5600dcc",
    measurementId: "G-17TP085XR1"
  };
  
  // Initialize Firebase
  const app: FirebaseApp = initializeApp(firebaseConfig);
  const analytics: Analytics = getAnalytics(app);

