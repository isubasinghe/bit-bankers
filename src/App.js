import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from '../src/firebaseConfig.js'

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
