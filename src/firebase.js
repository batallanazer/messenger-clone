import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIq6Yzz-EaIFDn4_oP55Mcnk86dkIU8AI",
    authDomain: "messenger-clone-97f59.firebaseapp.com",
    databaseURL: "https://messenger-clone-97f59.firebaseio.com",
    projectId: "messenger-clone-97f59",
    storageBucket: "messenger-clone-97f59.appspot.com",
    messagingSenderId: "243730570521",
    appId: "1:243730570521:web:1308ea98911867ce277988",
    measurementId: "G-J59420B1JV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db}