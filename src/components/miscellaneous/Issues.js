import React from "react";
import Issuetags from "./Issuetags";

const issues = () => {
  return (
    <div className="w-full text-gray-250 p-2  bg-HTpurple-900">
      <div className="flex flex-col ">
        <div
          id="issuename"
          className="flex items-baseline gap-4 p-1 justify-start"
        >
          <h1 className="text-2xl">Issue1</h1>
          <h1 className="text-xs">Pending</h1>
        </div>
        <div id="issuedescription" className="py-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla.
          </p>
        </div>
        <div id="issuetags">
          <Issuetags />
        </div>
      </div>
    </div>
  );
};

export default issues;
