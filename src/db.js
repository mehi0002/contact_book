// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIbQHmYZiz9L2pM1VwFbbI4PPj93fLZEc",
  authDomain: "mtm6404-mehi0002.firebaseapp.com",
  projectId: "mtm6404-mehi0002",
  storageBucket: "mtm6404-mehi0002.firebasestorage.app",
  messagingSenderId: "457446920004",
  appId: "1:457446920004:web:45ac41a2603aaef37c5111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;