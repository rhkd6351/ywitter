import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjsY4CxSNlT7by_bS-fF4862Ehbq5fqBo",
  authDomain: "yweeter-ae7ef.firebaseapp.com",
  projectId: "yweeter-ae7ef",
  storageBucket: "yweeter-ae7ef.appspot.com",
  messagingSenderId: "89780038175",
  appId: "1:89780038175:web:5eb38006978b5b050d832a",
};

firebase.initializeApp(firebaseConfig);

export const authService = auth;
export const dbService = firestore;
export const storageService = storage;
