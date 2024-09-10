import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcdzhaw8EmnJF0FhTYl7VxGB862o7kO4A",
  authDomain: "fir-practice-df087.firebaseapp.com",
  projectId: "fir-practice-df087",
  storageBucket: "fir-practice-df087.appspot.com",
  messagingSenderId: "1095434175787",
  appId: "1:1095434175787:web:d64df1a3e1fdc0f103f16e"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const entriesCollection = collection(database, "entries");