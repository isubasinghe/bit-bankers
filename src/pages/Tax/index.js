import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
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
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Tax = props => {
  const classes = useStyles();
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
    </Dialog>
  );
};

export default Tax;
