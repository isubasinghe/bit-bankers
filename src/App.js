import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import firebase from "../src/firebaseConfig.js";
import LandingPage from "./pages/Home";
import DonationSummary from "./pages/Summary";
import Tax from "./pages/Tax";
import Cause from "./pages/Cause";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fed74f"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  status: {
    danger: "orange"
  }
});

function App() {
  const [state, setState] = useState(false);

  const sayujDetails = firebase
    .auth()
    .signInWithEmailAndPassword("sayuj98@gmail.com", "123456");

  sayujDetails.then(() => {
    setState(true);
  });

  if (state) {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route path="/donate" component={DonationSummary} />
          <Route path="/tax" component={Tax} />
          <Route path="/cause/:causeId" component={Cause} />
        </Router>
      </ThemeProvider>
    );
  } else {
    return <div></div>;
  }
}

export default App;
