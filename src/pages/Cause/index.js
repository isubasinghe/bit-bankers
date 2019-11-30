import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Divider,
  Paper,
  makeStyles,
  IconButton,
  FormControl,
  InputLabel,
  Button,
  FilledInput,
  InputAdornment,
  Grid,
  Select,
  MenuItem,
  Snackbar
} from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { light } from "@material-ui/core/styles/createPalette";

import taxF from "../../utils/tax";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  backButton: {
    position: "relative",
    top: "10px"
  },
  image: {
    width: "calc(100vw - 20px)",
    height: "auto !important",
    borderRadius: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  appBar: {
    position: "relative"
  },
  yellow: {
    background: "rgb(253, 214, 91)",
    height: "150px",
    boxShadow: "0 3px 5px 2px rgba(248, 208, 79, 1)"
  },
  black: {
    background: "rgb(65, 63, 65)"
  },
  description: {
    marginLeft: "20px",
    marginRight: "20px",
    fontFamily: "Verdana",
    textAlign: "center",
    marginBottom: "20px"
  },
  header: {
    marginLeft: "20px",
    marginRight: "20px",
    fontFamily: "Verdana",
    fontWeight: "skinny",
    textAlign: "center"
  },
  spacing: {
    marginBottom: "50px"
  },
  header2: {
    marginLeft: "20px",
    marginRight: "20px",
    fontFamily: "Verdana",
    fontWeight: "skinny",
    textAlign: "center",
    color: "rgb(214, 214, 214)"
  },
  calc: {
    width: "150px",
    height: "57px",
    marginLeft: "20px",
    marginTop: "20px"
  },

  amount: {
    fontSize: "18px",
    fontFamily: "Arial",
    fontWeight: "Bold",
    marginLeft: "200px",
    marginTop: "-40px"
  },

  margin: {
    marginTop: "10px"
  },

  donation: {
    width: "150px",
    height: "40px",
    marginTop: "15px"
  },
  flexEnd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
}));

const Cause = props => {
  const { causeId } = useParams();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
    method: "One Off",
    donation: "Round Up"
  });
  const [showSnackBar, setShowSnackBar] = useState(false);
  const makePayment = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      props.history.goBack();
    }, 700);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const taxedReductions =
    values.amount === "" ? "" : taxF(180000, Number(values.amount));
  const symbol = values.donation === "Income Percentage" ? "%" : "$";
  return (
    <Dialog fullScreen open={true} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => {
              props.history.goBack();
            }}
          >
            <ChevronLeft />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography align="center" variant="h4">
          {causeId}
        </Typography>
      </Container>
      <img
        alt="cause"
        className={classes.image}
        src="https://scontent.fmel7-1.fna.fbcdn.net/v/t1.15752-9/78450477_2502956249976006_3599448396689047552_n.jpg?_nc_cat=107&_nc_ohc=jSFIHZjh6OYAQmb6zJL5MFEIvYFz-uLV9lyHzQGgkgXXVZFRLXoJ3wHJA&_nc_ht=scontent.fmel7-1.fna&oh=3a3aa0bb826f318dc7e10a513594397c&oe=5E81D77D"
      />
      <p className={classes.description}>
        Bushfires in Australia are common, impact extensive areas, and can cause
        property damage and loss of human life. However, certain native flora in
        Australia have evolved to rely on bushfires as a means of reproduction,
        and fire events are an interwoven and an essential part of the ecology
        of the continent.
      </p>
      <div className={classes.yellow}>
        <div className={classes.spacing}>
          <h1 className={classes.header}>Yes</h1>
          <p className={classes.description}>
            This is where our money is going, are you fricken happy or wot?
          </p>
        </div>
      </div>
      <div className={classes.black}>
        <div className={classes.spacing}>
          <h1 className={classes.header2}>Graph</h1>
          <p className={classes.header2}>Graph and stats can go here</p>
        </div>
      </div>
      <div className={classes.yellow}>
        <div className={classes.spacing}>
          <h1 className={classes.header}>Yes</h1>
          <p className={classes.description}>
            This is where our money is going, are you fricken happy or wot?
          </p>
        </div>
      </div>
      <div className={classes.black}>
        <div className={classes.spacing}>
          <h1 className={classes.header2}>Graph</h1>
          <p className={classes.header2}>Graph and stats can go here</p>
        </div>
      </div>
      <div className={classes.yellow}>
        <div className={classes.spacing}>
          <h1 className={classes.header}>Yes</h1>
          <p className={classes.description}>
            This is where our money is going, are you fricken happy or wot?
          </p>
        </div>
      </div>
      <div className={classes.black}>
        <div className={classes.spacing}>
          <h1 className={classes.header2}>Graph</h1>
          <p className={classes.header2}>Graph and stats can go here</p>
        </div>
      </div>

      <Divider style={{ marginTop: "10px" }} />

      <Divider />
      <Paper>
        <Typography align="center" variant="h5" noWrap={true}></Typography>
      </Paper>

      <Divider />
      <Typography align="center" variant="h6">
        Donate
      </Typography>
      <Divider />

      <FormControl fullWidth className={classes.margin} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={
            <InputAdornment position="start">{symbol}</InputAdornment>
          }
        />
      </FormControl>

      <Divider />
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="filled-adornment-amount">
          Payment method
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.method}
          onChange={handleChange("method")}
        >
          <MenuItem value={"One Off"}>One Off</MenuItem>
          <MenuItem value={"Setup"}>Setup</MenuItem>
        </Select>
        {values.method === "Setup" ? (
          <>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                Donation method
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.donation}
                onChange={handleChange("donation")}
              >
                <MenuItem value={"Round Up"}>Round Up</MenuItem>
                <MenuItem value={"Monthly"}>Monthly</MenuItem>
                <MenuItem value={"Income Percentage"}>
                  Income Percentage
                </MenuItem>
              </Select>
            </FormControl>
          </>
        ) : (
          <></>
        )}
      </FormControl>
      <Typography variant="h6" align="left">
        Amount to donate: {taxedReductions}
      </Typography>
      <div className={classes.flexEnd}>
        <Button onClick={makePayment} disabled={values.amount === ""}>
          Make payment
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={showSnackBar}
        autoHideDuration={6000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Successfully made payment</span>}
      />
    </Dialog>
  );
};

export default Cause;
