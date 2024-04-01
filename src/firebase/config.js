import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFTCZVO1O__u4uMN2V-kluvUPhdleJ1-g",
  authDomain: "miniblog-ref-5aef4.firebaseapp.com",
  projectId: "miniblog-ref-5aef4",
  storageBucket: "miniblog-ref-5aef4.appspot.com",
  messagingSenderId: "884077777860",
  appId: "1:884077777860:web:19e631fcf96449798d0a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};