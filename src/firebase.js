import firebase from 'firebase/app';
import 'firebase/firestore';

const config  = {
    apiKey: "AIzaSyB2nakdcY093Z5fQmEaD7nE_RXsawg3GCg",
    authDomain: "think-piece-db27f.firebaseapp.com",
    databaseURL: "https://think-piece-db27f.firebaseio.com",
    projectId: "think-piece-db27f",
    storageBucket: "think-piece-db27f.appspot.com",
    messagingSenderId: "1054216202975"}

    firebase.initializeApp(config);

    window.firebase = firebase;

    export const firestore = firebase.firestore();

    firestore.settings = { timestampsInSnapshots : true }

    export default firebase;
    
