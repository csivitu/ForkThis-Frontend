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
      <div className="flex flex-wrap items-center justify-around">
        <div
          id="card-shadow"
          className=" h-full w-2/5 rounded overflow-hidden shadow-lg"
        >
          <div className="bg-white">
            <PRvsDifficulty />
          </div>
        </div>
        <div
          id="card-shadow"
          className=" w-1/2  rounded overflow-hidden shadow-lg"
        >
          <div>
            <div id="graph-border" className="px-6 py-4 bg-HTpurple-900">
              <div className="font-bold text-2xl mb-3 ">Recents</div>
              {/* <Recents/> */}asd
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileview;
