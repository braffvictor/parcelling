// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJcDCx6wgyt90O-pRNvUm6SqRylLenOhs",
  authDomain: "parcelling-9dffd.firebaseapp.com",
  projectId: "parcelling-9dffd",
  storageBucket: "parcelling-9dffd.appspot.com",
  messagingSenderId: "576478539011",
  appId: "1:576478539011:web:0606866abf448fc8e3cd36",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const str = getStorage(app);
// Initialize Firebase
