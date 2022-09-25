import React from "react";

const LeaderboardTableHeader = () => {
  return (
    <div className="xl:w-3/4 2xl:w-4/5 w-full  bg-white px-2 mb-2 ">
      <div className="overflow-x-auto bg-white">
        <table className="w-full whitespace-nowrap bg-white">
          <tbody>
            <tr className="text-sm leading-none text-gray-600 h-8 bg-white ">
              <td className="w-1/2 bg-white">
                <div className="flex items-center bg-white">
                  <div className="pl-2 bg-white">
                    <p className="text-sm bg-white font-medium leading-none text-gray-800">
                      User
                    </p>
                  </div>
                </div>
              </td>
              <td className="bg-white w-1/4 text-center">
                <p className="bg-white">Issues Solved</p>
              </td>
              <td className="bg-white w-1/4 text-center">
                <p className="bg-white ">Score</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTableHeader;
