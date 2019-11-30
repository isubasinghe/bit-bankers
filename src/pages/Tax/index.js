import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button ,Dialog, Divider, TextField, FilledInput, InputLabel, InputAdornment, FormControl} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

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
    marginBottom: '20px'
  },
  content: {
    width: '50%'
  },
  boxing: {
    marginLeft: '10px',
    width: '60%'
  }
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Tax = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: ''
  });
  
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
      <Divider />
      <Typography align="center" variant="h6">
        Donations
      </Typography>
      <Divider />



    </Dialog>
  );
};

export default Tax;




