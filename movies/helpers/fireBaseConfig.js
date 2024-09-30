// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmTa_iXL2hwlcZGaN3RRJO2recasdA68",
  authDomain: "users-app-7beda.firebaseapp.com",
  projectId: "users-app-7beda",
  storageBucket: "users-app-7beda.appspot.com",
  messagingSenderId: "268374708852",
  appId: "1:268374708852:web:8d27ca374af39b9e99f721",
  measurementId: "G-XTM534FDNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
