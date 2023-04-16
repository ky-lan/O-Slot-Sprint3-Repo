import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPKgUh8TnwkFzCsADf3jO6nnasoTth3v0",
  authDomain: "o-slot-d09f0.firebaseapp.com",
  projectId: "o-slot-d09f0",
  storageBucket: "o-slot-d09f0.appspot.com",
  messagingSenderId: "979247154209",
  appId: "1:979247154209:web:eb1732f7591749cb448f60",
  measurementId: "G-NQPV80LDHG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  });
};


export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
}