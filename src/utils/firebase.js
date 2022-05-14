
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBRa0FWIssVS-O-2uDyEqCYkn0U1gp8SSs",
    authDomain: "drone-app-59fed.firebaseapp.com",
    databaseURL: "https://drone-app-59fed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drone-app-59fed",
    storageBucket: "drone-app-59fed.appspot.com",
    messagingSenderId: "628420416150",
    appId: "1:628420416150:web:eecaaabde1b694899ca8b7",
    measurementId: "G-YW3W6LM8PK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
