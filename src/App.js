import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "../src/firebaseConfig.js";
import LandingPage from "./pages/Home";
import DonationSummary from "./pages/Summary";
import Tax from "./pages/Tax";

import "./App.scss";

function App() {
  const [state, setState] = useState(false)

  const sayujDetails = firebase
    .auth()
    .signInWithEmailAndPassword("sayuj98@gmail.com", "123456");

  sayujDetails
    .then(() => {
      setState(true)
    })

  if (state) {
    return (<Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/donate" component={DonationSummary} />
      <Route path="/tax" component={Tax} />
    </Router>)
  } else {
    return (<div></div>)
  }
}

const getUserData = () => {
  const db = firebase.firestore();
  const userRef = db.collection("users").doc(firebase.auth().currentUser.uid)
  userRef.onSnapshot(doc => {
    if (doc.exists) {
      console.log(doc.data())
    } else {
      console.log("document does not exist")
    }
  })
}

const getTrendingCauses = () => {
  const db = firebase.firestore();
  const causesRef = db.collection("causes").where("status", "==", "trending");
  causesRef.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.data())
    })
  })
}

const getRecentDonations = () => {
  const db = firebase.firestore();
  const dateThreshold = Math.floor(Date.now() / 1000) - 2592000;
  const causesRef = db.collection("transactions")
    .where("userId", "==", firebase.auth().currentUser.uid)
    .where("dateTime", ">=", dateThreshold);

  causesRef.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    })
  })
}

export default App;
