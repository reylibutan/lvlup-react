import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dpValues = props.dataPoints.map((dp) => dp.value);
  const highestMonthlyExpenseInTheYear = Math.max(...dpValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          label={dp.label}
          value={dp.value}
          maxValue={highestMonthlyExpenseInTheYear}
        />
      ))}
    </div>
  );
};

export default Chart;
