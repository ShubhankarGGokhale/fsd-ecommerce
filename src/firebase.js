
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase Configuration for my project
const firebaseConfig = {
    apiKey: "AIzaSyBIgaqHNkr75_Dtpn2F8VEsv3OB6QSE5mY",
    authDomain: "fsd-ecommerce.firebaseapp.com",
    projectId: "fsd-ecommerce",
    storageBucket: "fsd-ecommerce.appspot.com",
    messagingSenderId: "950096212478",
    appId: "1:950096212478:web:59862e71099c7d5401d0af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);