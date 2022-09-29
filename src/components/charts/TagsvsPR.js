import React from "react";
import { Line, PolarArea } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import PolarAreaGraphHandler from "../../controllers/PolarAreaGraphHandler";
import { useEffect } from "react";
import Loader from "../../utils/Loader";
const Charttttttt = () => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    const fetchChartData = async () => {
      const res = await PolarAreaGraphHandler();
      setChartData(res);
    };
    fetchChartData();
  }, []);

  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 82322,
    },
    {
      id: 2,
      year: 2017,
      userGain: 12330,
      userLost: 663,
    },
    {
      id: 3,
      year: 2018,
      userGain: 80220,
      userLost: 823,
    },
    {
      // id: 4,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
  ];
  let maxPRS = 0;
  if (chartData) {
    chartData.forEach((el) => {
      el.noOfPRs > maxPRS ? (maxPRS = el.noOfPRs) : (maxPRS = maxPRS);
    });
  }
  if (chartData) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const userData = {
      labels: chartData.map((el) => capitalizeFirstLetter(el.tag)),
      datasets: [
        {
          data: chartData.map((el) => el.noOfPRs),
          backgroundColor: [
            "rgb(253,226,126,0.8)",
            "rgb(157,227,207,0.8)",
            "rgb(114,196,255,0.8)",
            "rgb(142,148,254,0.8)",
          ],
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    };

    // Lines are Projects
    return (
      <div className="bg-HTpurple-900">
        <PolarArea
          className="bg-HTpurple-900"
          data={userData}
          options={{
            responsive: true,
            scales: {
              r: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: maxPRS > 10 ? maxPRS + 5 : 5,
                ticks: {
                  color: "black",
                  stepSize: 1,
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
      <Loader />
    </div>
  );
};

export default Charttttttt;
