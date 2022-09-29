import React from "react";

const LeaderboardsSubMenu = ({ user, staticrank }) => {
  // console.log(user);
  return (
    <>
      <div className="w-full bg-HTpurple-900  px-2 ">
        <div className="overflow-x-auto bg-HTpurple-900">
          <table className="w-full whitespace-nowrap bg-HTpurple-900">
            <tbody>
              <tr className=" text-sm leading-none text-gray-250 h-16 bg-HTpurple-900">
                <td className="w-1/2 bg-HTpurple-900">
                  <div className="flex items-center bg-HTpurple-900">
                    <div className="ml-3">{staticrank}</div>
                    <div className="mx-3 w-10 h-10  bg-gray-700 bg-HTpurple-900 rounded-full flex items-center justify-center">
                      <p className="text-xs font-bold leading-3 text-white"></p>
                    </div>
                    <div className="pl-2 bg-HTpurple-900">
                      <p className="text-sm bg-HTpurple-900 font-medium leading-none text-gray-200">
                        @{user.username}
                      </p>
                      <p className="bg-HTpurple-900 text-xs leading-3 text-gray-250 mt-2">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="flex pt-6 h-full justify-around items-center bg-HTpurple-900">
                  <div className="bg-HTpurple-900 w-full text-center ">
                    <p className="bg-HTpurple-900">{user.noOfIssuesSolved}</p>
                  </div>
                  <div className="bg-HTpurple-900  w-full text-center">
                    <p className="bg-HTpurple-900">{user.score}</p>
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
