import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

function SecurityChartCard() {
  // Sample data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 190, 300, 250, 220, 150, 170],
        fill: false,
        borderColor: "#007bff",
        backgroundColor: "#007bff",
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Visitors",
      },
    },
  };

  return (
    <div className="chart-card">
      <h2 className="text-start">Visitors Trend</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default SecurityChartCard;
