import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importación de Firestore

const firebaseConfig = {
  apiKey: "AIzaSyD7vtgY49E6Crqahm-rX_0AN9VPWnBIlEs",
  authDomain: "react2-2502d.firebaseapp.com",
  projectId: "react2-2502d",
  storageBucket: "react2-2502d.appspot.com",
  messagingSenderId: "163076668843",
  appId: "1:163076668843:web:7d8dbaee9bdf07eb7f26ee"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y exporta para usarlo en otros archivos
export const db = getFirestore(app); // Inicialización de Firestore

export const initFirestoreApp = () => {
    return app;
};
