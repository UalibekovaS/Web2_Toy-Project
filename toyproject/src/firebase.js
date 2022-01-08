import initializeApp from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';



const firebaseConfig = {
    apiKey: "AIzaSyBrLM-ezki4vInJS9W-ls_QBQWJNmpLnZs",
    authDomain: "toyproject-87096.firebaseapp.com",
    projectId: "toyproject-87096",
    storageBucket: "toyproject-87096.appspot.com",
    messagingSenderId: "663422864177",
    appId: "1:663422864177:web:25f7098c6954c61251fe10",
    measurementId: "G-6NFBJLF5EM"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
export { auth };
export { db };
