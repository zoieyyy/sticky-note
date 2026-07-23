// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaPrINpY-87vTf_5JnFisC_b68WonGPnM",
  authDomain: "sticky-note-ab789.firebaseapp.com",
  databaseURL: "https://sticky-note-ab789-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sticky-note-ab789",
  storageBucket: "sticky-note-ab789.firebasestorage.app",
  messagingSenderId: "841791780578",
  appId: "1:841791780578:web:c453b686c9bbab530f90bb",
  measurementId: "G-0JTD3CWP3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);