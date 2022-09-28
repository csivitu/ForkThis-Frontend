import React from "react";

const LeaderboardTableHeader = () => {
  return (
    <div
      id="leaderboards-table-border"
      className=" w-full text-gray-250  bg-HTpurple-900 px-2 mb-3 "
    >
      <div className="overflow-x-auto bg-HTpurple-900">
        <table className="w-full whitespace-nowrap bg-HTpurple-900">
          <tbody>
            <tr className="text-sm leading-none text-gray-250 h-8 bg-HTpurple-900 ">
              <td className="w-1/2 bg-HTpurple-900">
                <div className="flex items-center bg-HTpurple-900">
                  <div className="pl-2 bg-HTpurple-900">
                    <p className="text-sm bg-HTpurple-900 font-medium leading-none text-gray-250">
                      User
                    </p>
                  </div>
                </div>
              </td>
              <td className="bg-HTpurple-900 w-1/4 text-center">
                <p className="bg-HTpurple-900">Issues Solved</p>
              </td>
              <td className="bg-HTpurple-900 w-1/4 text-center">
                <p className="bg-HTpurple-900 ">Score</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTableHeader;
