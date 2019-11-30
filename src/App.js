import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from '../src/firebaseConfig.js'
import LandingPage from './pages/Home';
import './App.css';


function App() {

  const db = firebase.firestore();
  const userRef = db.collection("users").doc("sayuj")

  userRef.get().then(doc => {
    if (doc.exists) {
      console.log(doc.data())
    } else {
      console.log("document does not exist")
    }
  })
    .catch(error => {
      console.log(error)
    })

  return (
   <Router>
     <Route exact path="/" component={LandingPage}/>
   </Router>
  );
}

export default App;
