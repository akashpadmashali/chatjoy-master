import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBcUGZdtA5qzvsZZGVXmiycm3a3IKqXWNQ",
    authDomain: "chatjoy-baeda.firebaseapp.com",
    projectId: "chatjoy-baeda",
    storageBucket: "chatjoy-baeda.appspot.com",
    messagingSenderId: "611185971711",
    appId: "1:611185971711:web:66624ad41067c18fe1d7ca"
  }).auth();