import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "react-app-try1",
    storageBucket: "react-app-try1.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}
firebase.initializeApp(firebaseConfig);

export default firebase;
