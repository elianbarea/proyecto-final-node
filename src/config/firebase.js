import dotenv from 'dotenv';
dotenv.config();// Cargar variables de entorno desde el archivo .env
import { initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
//console.log(process.env.PROJECT_ID);

export { db };