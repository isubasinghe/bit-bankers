import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "../src/firebaseConfig.js";
import LandingPage from "./pages/Home";
import Debug from "./components/donations";
import "./App.scss";

function App() {
  const sayujDetails = firebase
    .auth()
    .signInWithEmailAndPassword("sayuj98@gmail.com", "123456");

  sayujDetails
    .then(() => {
      const db = firebase.firestore();
      const userRef = db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);

      userRef
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log(doc.data());
          } else {
            console.log("document does not exist");
          }
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/debug" component={Debug} />
    </Router>
  );
}

export default App;
