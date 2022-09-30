import React from "react";
import { ToastContainer } from "react-toastify";
import moment from "moment";
import acceptChallengeHandler from "../../controllers/acceptChallengeHandler";
import AcceptAlert from "../miscellaneous/AcceptAlert";
import DeleteAlert from "../miscellaneous/DeleteAlert";
const OpenChallengesSubMenu = ({ challenge, profile }) => {
  const endsdate = new Date(challenge.endsAt);
  const finalendsdate = endsdate.toLocaleDateString();
  const starteddate = new Date(challenge.startsAt);
  const finalstarteddate = starteddate.toLocaleDateString();
  return (
    <>
      <div className=" flex justify-around flex-wrap gap-4 p-1 text-gray-250 ">
        <ToastContainer />
        <div id="card-design" className=" rounded-md bg-HTpurple-900  relative">
          <div id="cut-corner" className="py-8 bg-HTpurple-900">
            <div className="px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-sm leading-none text-justify text-black-800 dark:text-black-100 mt-1"></p>
            </div>
            <div className="mt-5 px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-2xl leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                <span className="text-xs bg-HTpurple-900 mr-1 text-black-400">
                  Raised By:
                </span>
                {challenge.raisedBy.username}
              </p>
            </div>
            <div className="mt-5 px-6 bg-HTpurple-900">
              <p className="bg-HTpurple-900 text-2xl leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                <span className=" bg-HTpurple-900 text-xs mr-1 text-black-400">
                  Coins Bet:
                </span>
                {challenge.coinsBet}
              </p>
              <p className="bg-HTpurple-900 text-2xl leading-none text-justify text-black-800 dark:text-black-100 mt-5">
                <span className=" bg-HTpurple-900 text-xs mr-1 text-black-400">
                  Difficulty:
                </span>
                {challenge.difficulty[0].toUpperCase() +
                  challenge.difficulty.slice(1, challenge.difficulty.length)}
              </p>
            </div>
            <div className="bg-HTpurple-900 mt-5  flex flex-col items-center w-full">
              <div className="bg-HTpurple-900 mt-5 px-6 flex justify-around items-center w-full">
                <div className="bg-HTpurple-900">
                  <p className="text-xs text-black-400 bg-HTpurple-900">
                    Starts At:
                  </p>
                  <p className=" bg-HTpurple-900 leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                    {moment(challenge.startsAt).format("MMMM Do h:mm:ss a")}
                  </p>
                </div>
                <div className=" bg-HTpurple-900 ml-14">
                  <p className="bg-HTpurple-900 text-xs text-black-400">
                    Ends At:
                  </p>
                  <p className="bg-HTpurple-900  leading-none text-justify text-black-800 dark:text-black-100 mt-1">
                    {moment(challenge.endsAt).format("MMMM Do h:mm:ss a")}
                  </p>
                </div>
              </div>
              <div className="bg-HTpurple-900 mt-5 px-1 flex flex-wrap items-center w-full">
                {challenge.tags.map((el, index) => {
                  return (
                    <div
                      key={index}
                      class="mt-1 text-xs text-gray-400 inline-flex items-center font-bold leading-sm uppercase px-3 mx-2 py-1 rounded-full bg-HTpurple-900 text-gray-700 border"
                    >
                      {el}
                    </div>
                  );
                })}
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
                  className="bg-HTpurple-900 w-full mt-7 flex justify-around items-center"
                >
                  {challenge.raisedBy.username == profile.username ? (
                    <AcceptAlert id={challenge._id} />
                  ) : (
                    <DeleteAlert id={challenge.id} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenChallengesSubMenu;
