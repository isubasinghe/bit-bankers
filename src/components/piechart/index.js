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
  const colours = ["#FFF275", "#FF8C42", "#FF3C38", "#A23E48", "#6C8EAD", "#19535F", "#0B7A75", "#D7C9AA", "#7B2D26", "#F0F3F5", "#7DDF64"]
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pie
        animate
        animationDuration={500}
        animationEasing="ease-out"
        className={classes.pie}
        data={props.donations.map((doc, index) => ({ ...doc, color: colours[index] }))}
      />
    </div>
  );
};

export default PieChart;
