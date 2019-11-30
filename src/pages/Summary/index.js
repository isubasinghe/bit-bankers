import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Card,
  CardContent,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

import PieChart from "../../components/piechart";
import { useCollection } from "react-firebase-hooks/firestore";
import { trendingRef, recentRef, recommendedRef } from "../../firestoreAPI.js";
import firebase from "../../firebaseConfig.js";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  card: {
    width: 150
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
  titleCard: {
    wordWrap: "break-word"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Donations = props => {
  const classes = useStyles();
  const [trending] = useCollection(trendingRef);
  const [recent] = useCollection(recentRef(firebase.auth().currentUser.uid));
  const [recommend] = useCollection(recommendedRef);

  const donationsData = () => {
    if (recent) {
      return recent.docs.map(doc => {
        const { donatedAmount, cause } = doc.data();
        return {
          title: cause ? cause.title : "",
          value: donatedAmount
        };
      });
    } else return [];
  };

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
            onClick={() => {
              props.history.goBack();
            }}
            aria-label="close"
          >
            <ChevronLeft />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Summary
          </Typography>
        </Toolbar>
      </AppBar>
      <PieChart donations={donationsData()} />

      <Divider />
      <Typography align="center" variant="h6">
        Recent Donations
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>
        <div className="scrolling-wrapper">
          {recent &&
            recent.docs
              .map((doc, index) => {
                const { cause, donatedAmount, causeId } = doc.data();
                return (
                  <div className="__card" key={index}>
                    <Card
                      onClick={() => {
                        props.history.push(`/cause/${causeId}`);
                      }}
                      className={classes.card}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={cause ? cause.image : ""}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography
                            className={classes.titleCard}
                            gutterBottom
                            variant="body1"
                            component="h2"
                            noWrap={true}
                          >
                            {cause ? cause.title : ""}
                          </Typography>
                          {`+$${donatedAmount}`}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              })
              .reverse()}
        </div>
      </div>

      <Divider />
      <Typography align="center" variant="h6">
        Trending
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>
        <div className="scrolling-wrapper">
          {trending &&
            trending.docs.map(doc => {
              const { title, image } = doc.data();
              return (
                <div className="__card" key={title}>
                  <Card
                    onClick={() => {
                      props.history.push(`/cause/${doc.id}`);
                    }}
                    className={classes.card}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="body1"
                          component="h2"
                          noWrap={true}
                        >
                          {title}
                        </Typography>
                        {/* <Typography width='30px' variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                </Typography> */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>

      <Divider />
      <Typography align="center" variant="h6">
        Recommended
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>
        <div className="scrolling-wrapper">
          {recommend &&
            recommend.docs.map(doc => {
              const { title, image } = doc.data();
              return (
                <div className="__card" key={title}>
                  <Card
                    onClick={() => {
                      props.history.push(`/cause/${doc.id}`);
                    }}
                    className={classes.card}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography
                          className={classes.titleCard}
                          gutterBottom
                          variant="body1"
                          component="h2"
                          noWrap={true}
                        >
                          {title}
                        </Typography>
                        {/* <Typography width='30px' variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                </Typography> */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </Dialog>
  );
};

export default Donations;
