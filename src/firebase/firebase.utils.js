import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDeDZfsIAUjgcDye_msK3Tjhy9HzT1FjXE",
  authDomain: "crwn-db-ed3bb.firebaseapp.com",
  databaseURL: "https://crwn-db-ed3bb.firebaseio.com",
  projectId: "crwn-db-ed3bb",
  storageBucket: "crwn-db-ed3bb.appspot.com",
  messagingSenderId: "704266256240",
  appId: "1:704266256240:web:9edb5cf2a77658055a19b5",
  measurementId: "G-KYQ26JSMV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;