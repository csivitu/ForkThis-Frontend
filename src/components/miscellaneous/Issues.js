import React from "react";

const issues = () => {
  return (
    <div className="w-full text-gray-250  bg-HTpurple-900">
      <div className="flex flex-col">
        <div id="issuename" className="flex items-baseline gap-4 justify-start">
          <h1 className="text-2xl">Issue1</h1>
          <h1 className="text-xs">Pending</h1>
        </div>
        <div id="issuedescription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla.
          </p>
        </div>
        <div id="issuetags">
          <div class="mt-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-HTpurple-900 text-gray-700 border">
            #Tag
          </div>
        </div>
      </div>
    </div>
  );
};

export default issues;
