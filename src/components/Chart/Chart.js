import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // value array, here we can call props data points and map the data point into JSX elements transformed them from objects to numbers (from dataPoint to dataPoint.value(stored here))
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // for calculate totalmax value (look all the month and find the biggest value across all month)
  const totalMaximum = Math.max(...dataPointValues); // spread to pull elements from an array and add them as standalone arguments to this max method

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // key props helps react render these list items efficiently (use label, no id because label is the same unique)
          value={dataPoint.value}
          maxValue={totalMaximum} // unique value which is the same for all chart bars in a given chart
          label={dataPoint.label}
        /> // dataPoint is an object which has a value property always
      ))}
    </div>
  );
};

export default Chart;
