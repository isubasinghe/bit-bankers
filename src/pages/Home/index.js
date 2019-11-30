import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HamBurgerMenu from "../../assets/icons/menu.svg";
import ChatIcon from "../../assets/icons/chat.svg";
import { Grid, Button } from "@material-ui/core";
import styled from "./index.module.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    textAlign: "center",
    background: "linear-gradient(45deg, #F5F5F5 30%, #FFFFFF 90%)",
    borderRadius: 3,
    border: 1,
    borderColor: "black",
    borderWidth: "100px",
    color: "rgb(32, 31, 31)",
    width: "100%",
    height: 100
  },
  grid: {
    borderColor: "black",
    borderWidth: "10px",
    boxShadow: "0 3px 5px 2px rgba(248, 208, 79, 1)"
  },
  notification: {
    fontSize: "30px",
    fontFamily: "Arial",
    fontWeight: "Bold"
  },
  logout: {
    background: "rgb(34, 30, 31)",
    color: "white",
    fontFamily: "Arial"
  },
  greetingContainer: {
    marginLeft: "40px",
    marginTop: "60px"
  }
}));

const LandingPage = React.memo(props => {
  const classes = useStyles();
  const redirectTax = () => {
    props.history.push("/tax");
  };
  const redirectDonate = () => {
    props.history.push("/donate");
  };
  return (
    <div className={classes.root}>
      <div className={styled.gridContainer}>
        <div className={styled.top}>
          <div className={styled.navbar}>
            <div className={styled.circleContainer}>
              <img
                alt="menu"
                className={styled.hamburgerMenu}
                src={HamBurgerMenu}
              />
            </div>
            <div className={styled.circleContainer}>
              <img
                alt="search"
                className={styled.hamburgerMenu}
                src={ChatIcon}
              />
            </div>
          </div>
          <div className={classes.greetingContainer}>
            <p className={classes.notification}>Good afternoon</p>
            <Button className={classes.logout}>Log on</Button>
          </div>
        </div>
        <div className={classes.bottom}>
          <Grid container>
            <Grid item xs className={classes.grid}>
              <Button className={classes.button}>Account</Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.button}>Pay</Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.button}>Bpay</Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Button className={classes.button}>Transfer</Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.button} onClick={redirectDonate}>
                Donate
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.button} onClick={redirectTax}>
                Tax
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
});

export default withRouter(LandingPage);
