import React from "react";
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
import BarChart from "../../components/bar";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { userRef, allTransactions } from "../../firestoreAPI.js";
import firebase from "../../firebaseConfig.js"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  card: {
    width: 350
  },
  media: {
    height: 140
  },
  scrollingContainer: {
    heigth: 100,
    marginBottom: "20px"
  },
  content: {
    width: "50%"
  },
  boxing: {
    marginLeft: "10px",
    width: "60%"
  },
  calc: {
    width: "150px"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Tax = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: ""
  });

  const [user] = useDocument(userRef(firebase.auth().currentUser.uid))
  const [transactions] = useCollection(allTransactions(firebase.auth().currentUser.uid))

  const totalDonated = () => {
    if (transactions) {
      return transactions.docs.reduce((prev, curr) => prev + curr.data().donatedAmount, 0)
    } else {
      return 0
    }
  }

  const totalAmount = () => {
    if (transactions) {
      return transactions.docs.reduce((prev, curr) => prev + curr.data().amount, 0)
    } else {
      return 0
    }
  }

  console.log(totalDonated())
  console.log(totalAmount())

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => { }}
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


      <Divider />
      <Typography align="center" variant="h6">
        Tax Effect
      </Typography>
      <Divider />

      <div>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>

        <Button variant="outlined" color="secondary" className={classes.calc}>
          CALCULATE
        </Button>
        <p className={classes.amount}>Amount</p>
      </div>
    </Dialog>
  );
};

export default Tax;
