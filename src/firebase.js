import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvADogZe8Ow4cBPtuJzVDzL4zptd0Qpsk",
    authDomain: "pickngo-7e2c0.firebaseapp.com",
    databaseURL: "https://pickngo-7e2c0-default-rtdb.firebaseio.com",
    projectId: "pickngo-7e2c0",
    storageBucket: "pickngo-7e2c0.appspot.com",
    messagingSenderId: "123803205483",
    appId: "1:123803205483:web:58a46c12e0908ddf5b162e",
    measurementId: "G-076M9603EP"
}

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.firestore();
