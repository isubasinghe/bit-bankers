import React from "react";
import { useParams } from "react-router-dom";
import {Dialog, Slide, AppBar, Toolbar, Container, Typography, Divider, Paper, makeStyles, IconButton } from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

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
  }
}));

const Cause = props => {
  const { causeId } = useParams();
  const classes = useStyles();
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
        <Divider style={{ marginTop: "10px" }} />

        <Divider />
        <Paper>
          <Typography align="center" variant="h5" noWrap={true}></Typography>
        </Paper>
      </Dialog>
  );
};

export default Cause;
