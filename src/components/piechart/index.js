import React from "react";
import Pie from "react-minimal-pie-chart";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "20px"
  },
  pie: {
    width: "50vw",
    height: "50vw"
  }
}));

const PieChart = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pie
        animate
        animationDuration={500}
        animationEasing="ease-out"
        className={classes.pie}
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" }
        ]}
      />
    </div>
  );
};

export default PieChart;
