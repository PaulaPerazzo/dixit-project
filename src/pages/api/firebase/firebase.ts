import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dixit-4a976.firebaseapp.com",
  projectId: "dixit-4a976",
  storageBucket: "dixit-4a976.appspot.com",
  messagingSenderId: "895635720741",
  appId: "1:895635720741:web:61cdd8629ec3c0b5600dcc",
  measurementId: "G-17TP085XR1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém uma referência para o serviço de autenticação do Firebase
const auth = getAuth(app);

//Exporta as instâncias do Firebase e do serviço de autenticação
export { auth, app };
