import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjjD04hgbTanBMsO7lSxKptnKEraOJfxw",
    authDomain: "cms-project-8f256.firebaseapp.com",
    databaseURL: "https://cms-project-8f256-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cms-project-8f256",
    storageBucket: "cms-project-8f256.appspot.com",
    messagingSenderId: "387871835124",
    appId: "1:387871835124:web:49f3a4ab92b625f5e76fa1",
    measurementId: "G-80R0CLP8EN",
};
