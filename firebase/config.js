import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjzZFN96zXLpWbbJ8SYzZfSCmcXiwEhLI",
  authDomain: "react-native-project-4ed28.firebaseapp.com",
  databaseURL: "https://react-native-project-4ed28-default-rtdb.firebaseio.com",
  projectId: "react-native-project-4ed28",
  storageBucket: "react-native-project-4ed28.appspot.com",
  messagingSenderId: "832431700106",
  appId: "1:832431700106:web:46635dc66fcf6ff199d573",
  measurementId: "G-WSYK90GB0Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
