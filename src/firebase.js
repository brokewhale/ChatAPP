import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDGIdnqOuXVfolJmp0faRzjqnJR3Zo0o7c",
    authDomain: "chatapp-f7ad0.firebaseapp.com",
    databaseURL: "https://chatapp-f7ad0.firebaseio.com",
    projectId: "chatapp-f7ad0",
    storageBucket: "chatapp-f7ad0.appspot.com",
    messagingSenderId: "777091243274",
    appId: "1:777091243274:web:6b8cfb3c03f06edd9baef3",
    measurementId: "G-NNDVY1JJVR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};
export default db;