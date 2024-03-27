import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBClMa82JaLrsCdnPD6pNJOgiKFEDbyUS8",
  authDomain: "task1-d3da0.firebaseapp.com",
  projectId: "task1-d3da0",
  storageBucket: "task1-d3da0.appspot.com",
  messagingSenderId: "308146213727",
  appId: "1:308146213727:web:3e27fca228d04582725cea",
  measurementId: "G-GXY5ZHRH01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
