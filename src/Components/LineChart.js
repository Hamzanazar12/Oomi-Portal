import React from "react";
import { Bar, Line } from "react-chartjs-2";
import ChartHeader from "./ChartHeader";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import VTtable from "./VTtable";

chartjs.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
);

const LineChart = () => {
  const state = {
    labels: ["March 12 2023", "March 19", "March 26", "April 02"],
    datasets: [
      {
        label: "Support balance",
        data: [40, 75, 50, 69],
        backgroundColor: ["#ffc981"],
        borderColor: ["#ffc981"],
        border: "none",
        borderCapStyle: "butt",
        type: "line",
        tension: 0.4,
      },
      {
        label: "Support added",
        data: [10, 12, 0, 5],
        backgroundColor: [" #8bc682"],

        type: "bar",
      },
      {
        label: "Support used",
        data: [0, 20, 4, 10],
        backgroundColor: ["#ea5b5a"],

        borderWidth: 1,
        type: "bar",
      },
      {
        label: "Warranty used",
        data: [4, 0, 20, 10],
        backgroundColor: ["  #1f7fc6"],

        borderWidth: 1,
        type: "bar",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min:3,
        // max:6
      },
    },
  };

  return (
    <div>
      <ChartHeader />
      <div style={{ width: "60rem", height: "30rem", marginLeft: "11rem" }}>
        <Bar data={state} options={options}></Bar>
      </div>
      <VTtable />
    </div>
  );
};

export default LineChart;
