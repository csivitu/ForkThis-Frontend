import React from "react";

const LeaderboardsSubMenu = ({ leaderboards }) => {
  // console.log(leaderboards);
  return (
    <div className="p-2 py-0">
      <div className="w-full h-max bg-orange-300 flex flex-col p-1 justify-between ">
        {leaderboards.score}
      </div>
    </div>
  );
};

export default LeaderboardsSubMenu;
