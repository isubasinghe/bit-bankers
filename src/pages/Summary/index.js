import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Divider, AppBar, Toolbar, IconButton, Typography, Slide, Card, CardContent, CardActionArea, CardMedia } from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

import PieChart from "../../components/piechart";
import { useCollection } from 'react-firebase-hooks/firestore';
import { trendingRef, causesRef, recentRef } from "../../firestoreAPI.js"
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
    width: 150
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
  titleCard: {
    wordWrap: 'break-word'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Donations = props => {
  const classes = useStyles();
  const [trending] = useCollection(trendingRef);
  // const [recent] = useCollection(recentRef(firebase.firestore().currentUser.uid));
  // const [causes] = useCollection(causesRef);

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => { }}
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
      <PieChart />

      {/* <Divider />
      <Typography align="center" variant="h6">
        Trending
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>
        <div className="scrolling-wrapper">
          {causes
            &&
            causes
              .doc.filter(doc => {
                const { transactions } = doc.data();
                return transactions.arrayContains
              })
              .docs.map(doc => {
                const { title, image } = doc.data();
                return (
                  <div className="__card" key={title}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography className={classes.titleCard} gutterBottom variant="body1" component="h2" noWrap={true}>
                            {title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                )
              })
          }

          {recent && causes &&
            causes.filter(causesFilter => {
              const {transactions} = causesFilter.data()
              transactions.filter
            })
          }
        </div>
      </div> */}

      <Divider />
      <Typography align="center" variant="h6">
        Trending
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>
        <div className="scrolling-wrapper">
          {trending
            &&
            trending
              .docs.map(doc => {
                const { title, image } = doc.data();
                return (
                  <div className="__card" key={title}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography className={classes.titleCard} gutterBottom variant="body1" component="h2" noWrap={true}>
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
                )
              })
          }
        </div>
      </div>
    </Dialog>
  );
};

// const fetchTrending = db => {
//   const trendingRef = db.collection("causes").where("status", "==", "trending");
//   trendingRef.onSnapshot(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(doc.data())
//     })
//   })
// }

export default Donations;
