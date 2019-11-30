import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Divider,
  TextField,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Pdf from "react-to-pdf";
import BarChart from "../../components/bar";
import { useDocument } from "react-firebase-hooks/firestore";
import { userRef } from "../../firestoreAPI.js";
import firebase from "../../firebaseConfig.js";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const ref = createRef();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Tax = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: ""
  });

  const [user, loading, error] = useDocument(
    userRef(firebase.auth().currentUser.uid)
  );
  console.log(user ? user.data() : "");

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => {}}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              props.history.goBack();
            }}
            aria-label="close"
          >
            <ChevronLeft />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tax
          </Typography>
        </Toolbar>
      </AppBar>
      <BarChart />
      <Divider />
      <Typography align="center" variant="h6">
        Donations
      </Typography>
      <Divider />
      <div ref={ref}>asd</div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button
            onClick={toPdf}
            style={{
              marginLeft: "10vw",
              width: "80vw"
            }}
            variant="contained"
            color="primary"
          >
            Generate PDF
          </Button>
        )}
      </Pdf>

      <Divider />
    </Dialog>
  );
};

export default Tax;
