import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDiX90nYnQmCimXhc7FaS1HluTFQ9naW7g",
    authDomain: "instagram-clone-82a1c.firebaseapp.com",
    projectId: "instagram-clone-82a1c",
    storageBucket: "instagram-clone-82a1c.appspot.com",
    messagingSenderId: "879696385337",
    appId: "1:879696385337:web:87ba6acbd74ea926b644e8",
    measurementId: "G-2933N8DBS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();