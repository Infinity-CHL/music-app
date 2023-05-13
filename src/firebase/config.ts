// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcKaJcr-laHh12Vy0giV6N_a3CijAgfyI",
  authDomain: "vue-firebase-ca32e.firebaseapp.com",
  projectId: "vue-firebase-ca32e",
  storageBucket: "vue-firebase-ca32e.appspot.com",
  messagingSenderId: "733340257017",
  appId: "1:733340257017:web:b550559fd00a373d23b028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
