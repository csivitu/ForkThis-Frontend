import React from "react";
import { Line, PolarArea } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import PolarAreaGraphHandler from "../../controllers/PolarAreaGraphHandler";
import { useEffect } from "react";
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
    const userData = {
      labels: chartData.map((el) => el.tag),
      datasets: [
        {
          label: "Users Gained",
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
      <div className="bg-white">
        <PolarArea
          className="bg-white"
          data={userData}
          options={{
            scales: {
              r: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: maxPRS > 10 ? maxPRS + 5 : 5,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          }}
        />
      </div>
    );
  }
  return (
    <div class="flex justify-center items-center space-x-2 w-full bg-white  rounded overflow-hidden shadow-lg">
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
