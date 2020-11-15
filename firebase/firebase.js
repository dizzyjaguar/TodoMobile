import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// the config for the firebase app from the firebase console
const FirebaseConfig = { 
  apiKey: "AIzaSyAv2OD5vDULBPv8tp81o2KGRSy7x8tkU2M",
  authDomain: "todo-mobile-8b5a6.firebaseapp.com",
  databaseURL: "https://todo-mobile-8b5a6.firebaseiocom",
  projectId: "todo-mobile-8b5a6",
  storageBucket: "todo-mobile-8b5a6.appspot.com",
  messagingSenderId: "693484092553",
  appId: "1:693484092553:web:07ecb864ee62a24c2eda58",
  measurementId: "G-8M7VZM1NF3"
}
//initialize the connection ??
firebase.initializeApp(FirebaseConfig);

// these two lines make it so we dont need to write 'firebase
//  .firestore() everytime we want to make an action with the database
export const app = firebase;
export const firestore = app.firestore();

// this where your collections go
export const todoCollection = firestore.collection('todos');

