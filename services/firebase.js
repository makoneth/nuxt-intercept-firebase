// ~/plugins/firebase.js

// import * as firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDz9IN7hR732pHQ58HkS6t1sup2OYClfUg',
  authDomain: 'gluo-intercept.firebaseapp.com',
  databaseURL: 'https://gluo-intercept.firebaseio.com',
  projectId: 'gluo-intercept',
  storageBucket: 'gluo-intercept.appspot.com',
  messagingSenderId: '288781023345',
  appId: '1:288781023345:web:784375216434890cb483d0'
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "";

export const auth = firebase.auth()
export const db = firebase.database()
