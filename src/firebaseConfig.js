import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyA0t1lItqbA332sG4SucJOOp0BZr7UE6ac",
    authDomain: "bit-bankers.firebaseapp.com",
    databaseURL: "https://bit-bankers.firebaseio.com",
    projectId: "bit-bankers",
    storageBucket: "bit-bankers.appspot.com",
    messagingSenderId: "361437784050",
    appId: "1:361437784050:web:c95c00662bb82e6cecad6b",
    measurementId: "G-7GWKC5L5F3"
};

firebase.initializeApp(config);
export default firebase;