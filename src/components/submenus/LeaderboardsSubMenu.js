import React from "react";

const LeaderboardsSubMenu = ({ user }) => {
  // console.log(user);
  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full bg-white  px-2 ">
        <div className="overflow-x-auto bg-white">
          <table className="w-full whitespace-nowrap bg-white">
            <tbody>
              <tr className=" text-sm leading-none text-gray-600 h-16 bg-white">
                <td className="w-1/2 bg-white">
                  <div className="flex items-center bg-white">
                    <div className="w-10 h-10  bg-gray-700 bg-white rounded-full flex items-center justify-center">
                      <p className="text-xs font-bold leading-3 text-white"></p>
                    </div>
                    <div className="pl-2 bg-white">
                      <p className="text-sm bg-white font-medium leading-none text-gray-800">
                        {user.username}
                      </p>
                      <p className="bg-white text-xs leading-3 text-gray-600 mt-2">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="flex pt-6 h-full justify-around items-center bg-white">
                  <div className="bg-white text-center ">
                    <p className="bg-white">{user.noOfIssuesSolved}</p>
                  </div>
                  <div className="bg-white text-center">
                    <p className="bg-white">{user.score}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderboardsSubMenu;
