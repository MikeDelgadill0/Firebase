// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAaSVbOTbCGtcRntVEG45iN-HMP35INW4",
  authDomain: "gdi-places-app-478d2.firebaseapp.com",
  projectId: "gdi-places-app-478d2",
  storageBucket: "gdi-places-app-478d2.firebasestorage.app",
  messagingSenderId: "403160333201",
  appId: "1:403160333201:web:f0885131f7edbb8385f830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment ={
  production: false,
  firebase:{
    apiKey: "AIzaSyBAaSVbOTbCGtcRntVEG45iN-HMP35INW4",
  authDomain: "gdi-places-app-478d2.firebaseapp.com",
  projectId: "gdi-places-app-478d2",
  storageBucket: "gdi-places-app-478d2.firebasestorage.app",
  messagingSenderId: "403160333201",
  appId: "1:403160333201:web:f0885131f7edbb8385f830"
  }
}