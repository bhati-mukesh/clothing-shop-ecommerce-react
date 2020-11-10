import firebase from 'firebase/app';
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

const config = {
    apiKey: "AIzaSyA5XqTqrIW-NY6XWfr18ygFp9glCrZ_u6E",
    authDomain: "crown-db-466b1.firebaseapp.com",
    databaseURL: "https://crown-db-466b1.firebaseio.com",
    projectId: "crown-db-466b1",
    storageBucket: "crown-db-466b1.appspot.com",
    messagingSenderId: "522758821590",
    appId: "1:522758821590:web:8abad39e4d7e99327edb77"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase