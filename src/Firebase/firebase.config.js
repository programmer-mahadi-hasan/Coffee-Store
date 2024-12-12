// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOEvrFtJP3PUo02PYzWphhUqyLJvbctXw",
    authDomain: "coffee-shop-abe51.firebaseapp.com",
    projectId: "coffee-shop-abe51",
    storageBucket: "coffee-shop-abe51.firebasestorage.app",
    messagingSenderId: "296691406101",
    appId: "1:296691406101:web:bd90b60cff7ea6e874c51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);