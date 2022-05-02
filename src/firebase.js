// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa3_mT68ddvAaXdMJe3dOKGvUkV_Qgq_s",
  authDomain: "netflix-6d1f1.firebaseapp.com",
  projectId: "netflix-6d1f1",
  storageBucket: "netflix-6d1f1.appspot.com",
  messagingSenderId: "151782048461",
  appId: "1:151782048461:web:1766c8e7f45442c3181f84",
  measurementId: "G-VMWWZK8W3M",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default db;
