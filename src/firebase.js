import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwafh-jXk2bbspXSC8HubqwYcyAZqpJsE",
  authDomain: "sdat-v1-database-practice.firebaseapp.com",
  projectId: "sdat-v1-database-practice",
  storageBucket: "sdat-v1-database-practice.appspot.com",
  messagingSenderId: "376955373222",
  appId: "1:376955373222:web:0933ab499c99aa4cfdd667"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export const entriesCollection = collection(database, "entries");