import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import LineGraphHandler from "../../controllers/LineGraphHandler";
const Charttttttt = () => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    const fetchChartData = async () => {
      const res = await LineGraphHandler();
      setChartData(res);
    };
    fetchChartData();
  }, []);

  var maxPRS;
  if (chartData) {
    chartData.forEach((el) => {
      el.noOfPRs > maxPRS ? (maxPRS = el.noOfPRs) : (maxPRS = maxPRS);
    });
  }

  // linear-gradient(90deg, #FFE27D 0%, #64E3FF 50.52%, #9192FF 100%)
  // var gradient = linear-gradient(90deg, #FFE27D 0%, #64E3FF 50.52%, #9192FF 100%)
  if (chartData) {
    const userData = {
      labels: chartData.map((el) => el.timeStrap),
      datasets: [
        {
          label: "Project 1",
          data: chartData.map((el) => el.noOfPRsOfProject1),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: "Project 2",
          data: chartData.map((el) => el.noOfPRsOfProject2),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: "Project 3",
          data: chartData.map((el) => el.noOfPRsOfProject3),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: "Project 4",
          data: chartData.map((el) => el.noOfPRsOfProject4),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "white",
          borderWidth: 1,
        },
        {
          label: "Project 5",
          data: chartData.map((el) => el.noOfPRsOfProject5),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "white",
          borderWidth: 1,
        }
      ],
    };
    const options = {
      scales: {
        yAxis: [
          {
            ticks: {
              min: -1,
              padding: 80,
            },
          },
        ],
      },
    };

    return (
      <div id="graph-border" className="bg-HTpurple-900">
        <Line
          className="bg-HTpurple-900"
          id="canvas"
          data={userData}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                min: -1,
                max: maxPRS > 10 ? maxPRS + 10 : 5,
                ticks: {
                  color: "#D9D9d9",
                  stepSize: 1,
                },
                grid: {
                  color: "#271933",
                },
              },
              x: {
                ticks: {
                  color: "#D9D9d9",
                },
                grid: {
                  color: "#271933",
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
        />
      </div>
    );
  }
  return (
    <div class="flex justify-center items-center space-x-2 w-full  bg-HTpurple-900  rounded overflow-hidden shadow-lg">
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
