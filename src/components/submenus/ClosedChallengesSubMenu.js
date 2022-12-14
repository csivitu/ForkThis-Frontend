import React from "react";
import Loader from "../../utils/Loader";
import moment from "moment";
const ClosedChallengesSubMenu = ({ challenge, username }) => {
  // console.log(challenge);
  if (challenge) {
    const endsdate = new Date(challenge.endsAt);
    const finalendsdate = endsdate.toLocaleDateString();
    const starteddate = new Date(challenge.startsAt);
    const finalstarteddate = starteddate.toLocaleDateString();
    const winner = (challenge) => {
      if (challenge.acceptedUserScore > challenge.raisedUserScore) {
        return `@${challenge.acceptedBy.username} has won the challenge`;
      } else if (challenge.acceptedUserScore < challenge.raisedUserScore) {
        return `@${challenge.raisedBy.username} has won the challenge`;
      } else {
        return `There is a tie`;
      }
    };
    // challenge.raisedBy.username==username?(
    //   challenge.raisedUserScore>challenge.acceptedUserScore?(
    //   "You have won the Challenge!":challenge.raisedUserScore<challenge.acceptedUserScore?:(
    //   `${challenge.acceptedBy.username} won the Challenge!`:"It was a tie.")
    //   :challenge.acceptedBy.username==username?)
    //   challenge.acceptedUserScore>challenge.raisedUserScore?
    //   "You have won the Challenge!":challenge.acceptedUserScore<challenge.raisedUserScore?:
    //   `${challenge.raisedBy.username} won the Challenge!`:"It was a tie."
    if(challenge)
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
              <div className="py-2 w-full justify-center items-center flex text-2xl">
                <p className="2-1/3">
                  <span className="text-xl">{winner(challenge)}</span>
                </p>
              </div>
              <div className="flex w-full justify-around items-center">
                <div id="active-challenge-card-left" className="w-1/2 p-2 h-10">
                  <p className="text-2xl">
                    <span className="text-xs">Raised By: </span>
                    {challenge.raisedBy.name}
                  </p>
                  <p className="text-2xl">
                    <span className="text-xs">Score: </span>
                    {challenge.raisedUserScore}
                  </p>
                </div>
                <div
                  id="active-challenge-card-right"
                  className="w-1/2 p-2 text-right h-10  "
                >
                  <p className="text-2xl">
                    <span className="text-xs">Accepted By: </span>
                    {challenge.acceptedBy.name}
                  </p>
                  <p className="text-2xl">
                    <span className="text-xs">Score: </span>
                    {challenge.acceptedUserScore}
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center w-full">
                {/* <div className="text-2xl">Name</div> */}
                {/* circle div */}
                <div
                  id="pointsbet-circle-active-challenge"
                  className="flex flex-col justify-center items-center rounded-full w-28 h-28"
                >
                  <p className="text-5xl">{challenge.coinsBet}</p>
                  <p className="text-xs">coins</p>
                </div>
                {/* <div className="text-2xl">Name</div> */}
              </div>
              <div className="flex w-full justify-around items-center ">
                <div
                  id="active-challenge-card-left-down"
                  className="w-1/2 h-12 p-2 "
                >
                  <p className="text-md ">
                    <span className="text-xs">Started At: </span>
                    {moment(challenge.startsAt).format("MMMM Do h:mm:ss a")}
                  </p>
                </div>
                <div
                  id="active-challenge-card-right-down"
                  className="w-1/2 h-12 p-2  text-right"
                >
                  <p className="text-md">
                    <span className="text-xs">Ended At: </span>
                    {moment(challenge.endsAt).format("MMMM Do h:mm:ss a")}
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
  } else {
    return (
      <div className="w-full text-center text-2xl mt-6">
        Expired challenges appear here
      </div>
    );
  }
};

export default ClosedChallengesSubMenu;
