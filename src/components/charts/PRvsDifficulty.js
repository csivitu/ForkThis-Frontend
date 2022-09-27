import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
import BarGraphHandler from "../../controllers/BarGraphHandler";
const Charttttttt = () => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    const fetchChartData = async () => {
      const res = await BarGraphHandler();
      setChartData(res);
    };
    fetchChartData();
  }, []);

  let maxPRS = 0;
  if (chartData) {
    chartData.forEach((el) => {
      el.noOfPRs > maxPRS ? (maxPRS = el.noOfPRs) : (maxPRS = maxPRS);
    });
  }
  if (chartData) {
    const userData = {
      labels: chartData.map((el) => el.difficulty),
      datasets: [
        {
          label: "No. of PRs",
          data: chartData.map((el) => el.noOfPRs),
          backgroundColor: [
            "rgb(253,226,126,0.8)",
            "rgb(157,227,207,0.8)",
            "rgb(114,196,255,0.8)",
            "rgb(142,148,254,0.8)",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
    const config = {
      type: "bar",
      data: { userData },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2,
            },
          },
        },
      },
    };

    // Lines are Projects
    return (
      <div className="bg-HTpurple-900 ">
        <Bar
          className="bg-HTpurple-900"
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                max: maxPRS > 10 ? maxPRS + 10 : 10,
                ticks: {
                  color: "#D9D9d9",
                  stepSize: 2,
                },
              },
              x: {
                ticks: {
                  color: "#D9D9d9",
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "white",
                },
              },
            },
          }}
          data={userData}
        />
      </div>
    );
  }
  return (
    <div class="flex justify-center items-center space-x-2 w-full bg-HTpurple-900 rounded overflow-hidden shadow-lg">
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Charttttttt;
