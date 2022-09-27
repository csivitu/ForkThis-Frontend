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
  console.log(chartData);
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
      <div className="">
        <Bar
          options={{
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                max: maxPRS > 10 ? maxPRS + 10 : 10,
                ticks: {
                  stepSize: 2,
                },
              },
            },
          }}
          data={userData}
        />
      </div>
    );
  }
  return <></>;
};

export default Charttttttt;
