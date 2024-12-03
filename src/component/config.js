//import firebase
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"//getAuth function import here

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPZExw4biqYviUtS7HL-U_2K_9exLqJhw",
  authDomain: "learnfirebase-basic.firebaseapp.com",
  projectId: "learnfirebase-basic",
  storageBucket: "learnfirebase-basic.firebasestorage.app",
  messagingSenderId: "756376374404",
  appId: "1:756376374404:web:9023b6bc46243f84f546d1",
  measurementId: "G-7BGY3WFN43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);//this app variable have whole firebaseConfig,it will able to talk with firebase
const auth = getAuth(app);//app variable have firebaseConfig and auth have Authentication features, so here firebaseconfig connected with authentivation features and use

export default auth//export the auth variable to all other files