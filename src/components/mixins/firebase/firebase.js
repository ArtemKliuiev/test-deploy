import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAevRfiMwMdEMiB-6cWcr8mQVam3O8iSVc",
  authDomain: "kinocms-2d2b3.firebaseapp.com",
  projectId: "kinocms-2d2b3",
  storageBucket: "kinocms-2d2b3.appspot.com",
  messagingSenderId: "1094170349604",
  appId: "1:1094170349604:web:7d5560a68f5b513d4008b1"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)