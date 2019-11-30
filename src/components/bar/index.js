import React from "react";
import { Chart } from "react-google-charts";

const BarChar = props => {
  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Method", "AUD"],
        ["Donated", 8175000],
        ["Reduction", 3792000]
      ]}
      options={{
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Total Population",
          minValue: 0
        },
        vAxis: {
          title: ""
        }
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default BarChar;
