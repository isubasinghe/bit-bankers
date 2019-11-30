import React from "react";
import { Chart } from "react-google-charts";
import { HashLoader } from "react-spinners";

const BarChar = props => {
  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="BarChart"
      loader={
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <HashLoader />
        </div>
      }
      data={[
        ["Method", "AUD"],
        ["Donated", props.donated],
        ["Tax Returns", props.taxReturns]
      ]}
      options={{
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
