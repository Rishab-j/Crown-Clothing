import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFDsR5agXoYM8o8NKuZ18-PnTelhjBmaM",
    authDomain: "crwn-db-d5bee.firebaseapp.com",
    databaseURL: "https://crwn-db-d5bee.firebaseio.com",
    projectId: "crwn-db-d5bee",
    storageBucket: "crwn-db-d5bee.appspot.com",
    messagingSenderId: "972846238953",
    appId: "1:972846238953:web:adda29ce8d280942773478",
    measurementId: "G-R7NCPGZKKT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
