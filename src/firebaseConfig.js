// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5lbKCN18A2UuLgwf6pnp17xKqEzmelns",
  authDomain: "bikemtb-3f6db.firebaseapp.com",
  projectId: "bikemtb-3f6db",
  storageBucket: "bikemtb-3f6db.firebasestorage.app",
  messagingSenderId: "1058221476641",
  appId: "1:1058221476641:web:8297223f25a3e768b7cc60",
  measurementId: "G-48MP1PJ1G1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
