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
import Table from "../../components/table";
import moment from "moment";
import BarChart from "../../components/bar";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { userRef, allTransactions } from "../../firestoreAPI.js";
import firebase from "../../firebaseConfig.js";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  divide: {
    marginTop: "10px",
    marginBottom: "10px"
  },

  yeet: {
    marginBottom: "10px"
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

  const [user] = useDocument(userRef(firebase.auth().currentUser.uid));
  const [transactions] = useCollection(
    allTransactions(firebase.auth().currentUser.uid)
  );

  const totalDonated = () => {
    if (transactions) {
      return transactions.docs.reduce(
        (prev, curr) => prev + curr.data().donatedAmount,
        0
      );
    } else {
      return 0;
    }
  };

  const totalAmount = () => {
    if (transactions) {
      return transactions.docs.reduce(
        (prev, curr) => prev + curr.data().amount,
        0
      );
    } else {
      return 0;
    }
  };

  console.log(totalDonated());
  console.log(totalAmount());
  const tDonated = totalDonated();
  const taxReturns = tDonated - totalAmount();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const rows = transactions
    ? transactions.docs
        .map(doc => {
          return {
            name: doc.data().cause.title,
            date: moment.unix(doc.data().dateTime).format("DD/MM/YYYY"),
            amount: doc.data().donatedAmount
          };
        })
        .reverse()
    : [];
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
      <BarChart donated={tDonated} taxReturns={taxReturns} />
      <Divider />
      <div className={classes.divide}>
        <Typography align="center" variant="h6">
          Donations
        </Typography>
      </div>

      <Divider />
      <div className={classes.yeet}>
        <div ref={ref}>
          <Table rows={rows} />
        </div>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button
              onClick={toPdf}
              style={{
                marginLeft: "10vw",
                width: "80vw",
                marginTop: "5vw"
              }}
              variant="contained"
              color="primary"
            >
              Generate PDF
            </Button>
          )}
        </Pdf>
      </div>
      <Divider />
    </Dialog>
  );
};

export default Tax;
