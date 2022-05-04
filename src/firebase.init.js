import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwQFWmwXBvoVqYN74c2UCsTYzfnAqexc0",
    authDomain: "inventory-management-app-679a4.firebaseapp.com",
    projectId: "inventory-management-app-679a4",
    storageBucket: "inventory-management-app-679a4.appspot.com",
    messagingSenderId: "69093394794",
    appId: "1:69093394794:web:610b35c14dc3bd2f20fd13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;