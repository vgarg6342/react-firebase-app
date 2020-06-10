import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDCEfaqoCzn-9-lhcWOCc7FkNrXZRincPk",
    authDomain: "react-app-try1.firebaseapp.com",
    databaseURL: "https://react-app-try1.firebaseio.com",
    projectId: "react-app-try1",
    storageBucket: "react-app-try1.appspot.com",
    messagingSenderId: "1099064623644",
    appId: "1:1099064623644:web:a6e1ef60742ff80e7395d9",
    measurementId: "G-JQN8LN85M8"
}
firebase.initializeApp(firebaseConfig);

export default firebase;