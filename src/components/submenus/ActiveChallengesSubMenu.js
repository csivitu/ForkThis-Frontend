import React from "react";

const ActiveChallengesSubMenu = (challenges) => {
  console.log(challenges);
  return (
    <>
      <div className=" flex justify-around flex-wrap w-full gap-4 p-1 text-gray-250 ">
        <div
          id="card-design"
          className="w-4/5 rounded-md bg-HTpurple-900  relative"
        >
          <div id="cut-corner" className="py-8 bg-HTpurple-900">
            <div className="px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1"></p>
            </div>
            <div className="mt-5 px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                <span className="text-xs bg-HTpurple-900 mr-1 text-black-400">
                  Raised By:
                </span>
                {/* {challenges.challenge.raisedBy} */}
              </p>
            </div>
            <div className="mt-5 px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                <span className=" bg-HTpurple-900 text-xs mr-1 text-black-400">
                  Accepted By:
                </span>
                {/* {challenges.challenge.acceptedBy} */}
              </p>
            </div>
            <div className="mt-5 px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                <span className=" bg-HTpurple-900 text-xs mr-1 text-black-400">
                  Points Bet:
                </span>
                {/* {challenges.challenge.pointsBet} */}
              </p>
            </div>
            <div className="bg-HTpurple-900 mt-5 px-6 flex justify-around items-center w-full">
              <div className="bg-HTpurple-900">
                <p className="text-xs text-black-400 bg-HTpurple-900">
                  Started At:
                </p>
                <p className="text-sm bg-HTpurple-900 leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                  {/* {challenges.challenge.startsAt} */}
                </p>
              </div>
              <div className=" bg-HTpurple-900 ml-14">
                <p className="bg-HTpurple-900 text-xs text-black-400">
                  Ended At:
                </p>
                <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                  {/* {challenges.challenge.startsAt} */}
                </p>
              </div>
            </div>
            <div className="bg-HTpurple-900 mt-5 px-6 flex items-center w-full">
              {/* {challenges.challenge.tags.map((el) => {
                return (
                  <div class="mt-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-HTpurple-900 text-gray-700 border">
                    {el}
                  </div>
                );
              })} */}
            </div>

            <div className="bg-HTpurple-900 pt-6 flex justify-between relative items-center w-full">
              <div
                id="card-dashed-line-end"
                className="bg-HTpurple-900 w-3 h-5   rounded-r-3xl"
              />
              <div
                id="card-dashed-line"
                className=" bg-HTpurple-900 w-full border-b-2 border-dashed border-gray-100 dark:border-gray-400"
              />
              <div
                id="card-dashed-line-end"
                className=" bg-HTpurple-900 w-3 h-5   rounded-l-3xl"
              />
            </div>
            <div className="bg-HTpurple-900 mt-4 px-6 flex flex-col w-full justify-center items-center">
              <img
                src="/images/barcode.svg"
                alt="barcode"
                className="bg-HTpurple-900 h-10"
              />
              <div
                id="requestbuttons"
                className="bg-HTpurple-900 w-full mt-2 flex justify-around items-center"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveChallengesSubMenu;
