// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYDaPYsMCfo9wNDKHV3QaYD_7buIJ8-34",
  authDomain: "plant-sa.firebaseapp.com",
  projectId: "plant-sa",
  storageBucket: "plant-sa.appspot.com",
  messagingSenderId: "516542435384",
  appId: "1:516542435384:web:24cd0884d9f2ba023596cd",
  measurementId: "G-BVKE7X2NQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth}
