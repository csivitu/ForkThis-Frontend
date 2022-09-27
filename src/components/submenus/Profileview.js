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
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Recents</div>
              {/* <Recents/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileview;
