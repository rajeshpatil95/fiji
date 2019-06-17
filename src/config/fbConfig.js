import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXt4NRtzummvy8FBRtZyet1zKnPLn2LVs",
    authDomain: "fiji-2a698.firebaseapp.com",
    databaseURL: "https://fiji-2a698.firebaseio.com",
    projectId: "fiji-2a698",
    storageBucket: "fiji-2a698.appspot.com",
    messagingSenderId: "523511760343",
    appId: "1:523511760343:web:ff1a7a308c9d4295"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
