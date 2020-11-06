import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9B8ebAQJ4t9mOxxK_ZQVyNV6hBne69z4",
  authDomain: "dps104-guia09.firebaseapp.com",
  databaseURL: "https://dps104-guia09.firebaseio.com",
  projectId: "dps104-guia09",
  storageBucket: "dps104-guia09.appspot.com",
  messagingSenderId: "757256973454",
  appId: "1:757256973454:web:8cf8102ab78561305f6ddf",
  measurementId: "G-G0WJ9LRYWZ"
};

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();