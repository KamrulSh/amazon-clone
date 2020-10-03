import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApsiALQlft-d1zzmx5wuYc16qHxa-MjxY",
    authDomain: "clone-react-d7b9d.firebaseapp.com",
    databaseURL: "https://clone-react-d7b9d.firebaseio.com",
    projectId: "clone-react-d7b9d",
    storageBucket: "clone-react-d7b9d.appspot.com",
    messagingSenderId: "184749570701",
    appId: "1:184749570701:web:0f93fe9217afa1a4af00c4",
    measurementId: "G-9VWVXC2Y4B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };