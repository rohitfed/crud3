import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnquDj-h2PWyPlXWnOjAwGLViGEqe0grU",
    authDomain: "final1-59102.firebaseapp.com",
    projectId: "final1-59102",
    storageBucket: "final1-59102.appspot.com",
    messagingSenderId: "403903347906",
    appId: "1:403903347906:web:5f00249503cf90e2a98f5b"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);