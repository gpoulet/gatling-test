import React, { FC } from "react";
import { Pie } from "@reactchartjs/react-chart.js";
import { ChartOptions } from "chart.js";

export type StatsProps = {
  numberOfUserLivingInAnApt: number;
  numberOfUserLivingInASuite: number;
};

let options: ChartOptions = {
  legend: {
    position: "bottom",
  },
};

const Stats: FC<StatsProps> = ({
  numberOfUserLivingInAnApt,
  numberOfUserLivingInASuite,
}) => {
  const data = {
    labels: [
      "Number of user living in an apt",
      "Number of user living in a suite",
    ],
    datasets: [
      {
        data: [numberOfUserLivingInAnApt, numberOfUserLivingInASuite],
        backgroundColor: ["#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div className="stats">
      <Pie data={data} options={options} type="pie" />
    </div>
  );
};

export default Stats;
