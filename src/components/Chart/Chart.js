import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // key props helps react render these list items efficiently (use label, no id because label is the same unique)
          value={dataPoint.value}
          maxValue={null} // unique value which is the same for all chart bars in a given chart
          label={dataPoint.label}
        /> // dataPoint is an object which has a value property always
      ))}
    </div>
  );
};

export default Chart;
