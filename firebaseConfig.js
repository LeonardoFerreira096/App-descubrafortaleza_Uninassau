import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { db, auth } from "./firebaseConfig"

const firebaseConfig = {
  apiKey: "AIzaSyDA3xZprmU0ZbAYudv5kTx6tJuUKWhiu3U",
  authDomain: "db-app-descubrafortaleza.firebaseapp.com",
  projectId: "db-app-descubrafortaleza",
  storageBucket: "db-app-descubrafortaleza.firebasestorage.app",
  messagingSenderId: "756999984807",
  appId: "1:756999984807:web:0f821b0111c8471f3dad82"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
