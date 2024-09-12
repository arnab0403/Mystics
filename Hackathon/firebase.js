
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNVLkQ4vKB-g-WsN2JDLMGBmeqmiODiQs",
  authDomain: "plant-5b745.firebaseapp.com",
  projectId: "plant-5b745",
  storageBucket: "plant-5b745.appspot.com",
  messagingSenderId: "694964721729",
  appId: "1:694964721729:web:f9c21d1ad69221ad344ec0",
  measurementId: "G-X591EPZ2R8"
};

const db=getFirestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);