import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "../src/firebaseConfig.js";
import LandingPage from "./pages/Home";
import DonationSummary from "./pages/Summary";
import Tax from "./pages/Tax";

import "./App.scss";

function App() {
  const sayujDetails = firebase
    .auth()
    .signInWithEmailAndPassword("sayuj98@gmail.com", "123456");

  // sayujDetails
  //   .then(() => {
  //     const db = firebase.firestore();
  //     const userRef = db
  //       .collection("users")
  //       .doc(firebase.auth().currentUser.uid);

  // sayujDetails.then(() => {
  //   const db = firebase.firestore();
  //   const userRef = db.collection("users").doc(firebase.auth().currentUser.uid)

  // Get user data
  //   userRef.get().then(doc => {
  //     if (doc.exists) {
  //       console.log(doc.data())

  //     } else {
  //       console.log("document does not exist")
  //     }
  //   })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // })
  //   .catch(error => {
  //     console.log(error)
  //   })

  // const db = firebase.firestore();
  // const causesRef = db.collection("causes").where("status", "==", "trending");
  // causesRef.onSnapshot(querySnapshot => {
  //   querySnapshot.forEach(doc => {
  //     console.log(doc.data())
  //   })
  // })

  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/donate" component={DonationSummary} />
      <Route path="/tax" component={Tax} />
    </Router>
  );
}

export default App;
