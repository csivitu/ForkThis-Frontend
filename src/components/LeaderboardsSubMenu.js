import React from "react";

const LeaderboardsSubMenu = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full rounded-b-md border-rose-800 border-2 px-2 ">
        <div className="overflow-x-auto ">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className="text-sm leading-none text-gray-600 h-16">
                <td className="w-1/2">
                  <div className="flex items-center">
                    <div className="w-10 h-10  bg-gray-700 rounded-full flex items-center justify-center">
                      <p className="text-xs font-bold leading-3 text-white"></p>
                    </div>
                    <div className="pl-2">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {user.username}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="pl-16">
                  <p>{user.noOfIssuesSolved}</p>
                </td>
                <td>
                  <p className="pl-16">{user.score}</p>
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
