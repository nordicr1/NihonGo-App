import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd3qyinYOndX0f2cvmbvcDaN8uDnPdQA0",
  authDomain: "nihongo-app-6f395.firebaseapp.com",
  projectId: "nihongo-app-6f395",
  storageBucket: "nihongo-app-6f395.firebasestorage.app",
  messagingSenderId: "411406184896",
  appId: "1:411406184896:web:91ab6579ccfe265204d825",
  measurementId: "G-XME8KN8WW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
