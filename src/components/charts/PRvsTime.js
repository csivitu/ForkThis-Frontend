import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
const Charttttttt = () => {
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
      id: 4,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
  ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["green"],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["green"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  // Lines are Projects
  return (
    <div className="">
      <Line data={userData} />
    </div>
  );
};

export default Charttttttt;
