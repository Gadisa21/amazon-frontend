import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhhhqC2xk31fWwUHuGpCpabjmDwu3uuHY",
  authDomain: "fir-d42bc.firebaseapp.com",
  projectId: "fir-d42bc",
  storageBucket: "fir-d42bc.appspot.com",
  messagingSenderId: "476714367556",
  appId: "1:476714367556:web:52349675e37d6c7ae11a11",
  measurementId: "G-6RPLZ9XXPG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
const db=app.firestore()
export {auth,db};
