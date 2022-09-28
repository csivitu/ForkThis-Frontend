import PRvsTime from "../charts/PRvsTime";
import React from "react";
import TagsvsPR from "../charts/TagsvsPR";
import PRvsDifficulty from "../charts/PRvsDifficulty";
import Recents from "../miscellaneous/Recents";

const Profileview = ({ profile }) => {
  return (
    <>
      <div className="flex  flex-wrap mb-3 items-center justify-around">
        <div
          id="card-shadow"
          className=" w-3/5  rounded overflow-hidden shadow-lg"
        >
          <div>
            <PRvsTime />
          </div>
        </div>
        <div
          id="card-shadow"
          className=" w-2/6 rounded overflow-hidden shadow-lg"
        >
          <div>
            <TagsvsPR />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 items-center justify-around">
        <div
          id="card-shadow"
          className=" h-full w-5/12 rounded overflow-hidden shadow-lg"
        >
          <div className="bg-white">
            <PRvsDifficulty />
          </div>
        </div>
        <div
          id="card-shadow"
          className=" w-1/2  rounded overflow-hidden shadow-lg"
        >
          <div id="graph-border">
            <div className="w-full px-6 py-2 bg-HTpurple-900">
              <Recents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileview;
