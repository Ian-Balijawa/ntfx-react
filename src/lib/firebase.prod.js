import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "dotenv/config";

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

// apiKey: process.env.API_KEY,
const config = {
  apiKey: 'AIzaSyDKZUCCFUq3Qz5mMOlUUtyUjoGmqskENVg',
  authDomain: 'netflix-clone-7e95d.firebaseapp.com',
  projectId: 'netflix-clone-7e95d',
  storageBucket: 'netflix-clone-7e95d.appspot.com',
  messagingSenderId: '225033179113',
  appId: '1:225033179113:web:642755b8594b71be9d4578',
  measurementId: 'G-RXNXJB5PWZ',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKZUCCFUq3Qz5mMOlUUtyUjoGmqskENVg",
  authDomain: "netflix-clone-7e95d.firebaseapp.com",
  projectId: "netflix-clone-7e95d",
  storageBucket: "netflix-clone-7e95d.appspot.com",
  messagingSenderId: "225033179113",
  appId: "1:225033179113:web:cf2aa138dba614819d4578",
  measurementId: "G-7WQ8EW0DTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */