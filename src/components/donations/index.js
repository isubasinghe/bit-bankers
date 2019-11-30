import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import PieChart from "../piechart";

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

const Donations = props => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => {}}
      TransitionComponent={Transition}
      className={classes.appBar}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {}}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Summary
          </Typography>
        </Toolbar>
      </AppBar>
      <PieChart />
      <Divider />
      <Typography align="center" variant="h6">
        Recent Donations
      </Typography>
      <Divider />
      <div className="scrolling-wrapper">
        <div className="__card">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="http://placekitten.com/150/200"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
        <div className="__card">
          <h2>Card</h2>
        </div>
      </div>
      <Divider />
      <Typography align="center" variant="h6">
        Trending
      </Typography>
      <Divider />
    </Dialog>
  );
};

export default Donations;
