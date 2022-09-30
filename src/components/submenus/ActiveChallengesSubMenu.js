import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import UserRecents from "../miscellaneous/UserRecents";
const ActiveChallengesSubMenu = ({ challenge }) => {
  const [duration, setDuration] = useState("");
  const [started, setStarted] = useState(true);
  useEffect(() => {
    if (challenge) {
      if (new Date(challenge.startsAt) > Date.now()) {
        const startsIn = moment(challenge.startsAt).from(moment());
        setStarted(false);
        setDuration(startsIn);
      } else {
        const time = moment(challenge.endsAt).from(moment());
        setDuration(time);
      }
    }
  }, []);
  // console.log(challenge.endsAt + "asdasd");
  // console.log(challenge.startsAt);

  // console.log(minutes);
  if (challenge) {
    return (
      <>
        <div className=" flex justify-around flex-wrap w-full gap-4 p-1 text-gray-250 ">
          <div
            id="card-design"
            className="w-4/5 rounded-md bg-HTpurple-900  relative"
          >
            <div
              id="cut-corner"
              className="flex flex-col justify-around items-center pb-8 bg-HTpurple-900"
            >
              <div className="py-2 w-full justify-center items-center flex">
                <p>
                  Challenge {started ? "ends" : "starts "} {duration}{" "}
                </p>
              </div>
              <div className="flex w-full justify-around items-center">
                <div
                  id="active-challenge-card-left"
                  className="w-1/2 p-2 h-10"
                ></div>
                <div
                  id="active-challenge-card-right"
                  className="w-1/2 p-2 text-right h-10  "
                ></div>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="text-2xl w-1/3 text-center">
                  {challenge.raisedBy.username}
                </div>
                {/* circle div */}
                <div
                  id="pointsbet-circle-active-challenge"
                  className="flex flex-col justify-center items-center rounded-full w-28 h-28"
                >
                  <p className="text-5xl">{challenge.coinsBet}</p>
                  <p className="text-xs">coins</p>
                </div>
                <div className="text-2xl w-1/3 text-center">
                  {challenge.acceptedBy.username}
                </div>
              </div>
              <div className="flex w-full justify-around items-center">
                <div
                  id="active-challenge-card-left-down"
                  className="w-1/2 h-10 p-2  text-right"
                ></div>
                <div
                  id="active-challenge-card-right-down"
                  className="w-1/2 h-10 p-2  text-right"
                ></div>
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
              <div
                id="user-recents"
                className="flex w-full justify-around items-center"
              >
                <div id="user-recents-left" className="w-full  ">
                  <UserRecents recents={challenge.raisedUserActivity} />
                </div>
                <div id="user-recents-right" className="w-full ">
                  <UserRecents recents={challenge.acceptedUserActivity} />
                </div>
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
  } else {
    return (
      <div className="w-full text-center text-2xl mt-6">
        Please accept a challenge from open challenges first.
      </div>
    );
  }
};

export default ActiveChallengesSubMenu;
