import React from "react";
import Issuetags from "./Issuetags";

const issues = ({ title, description, tags, isClosed, url }) => {
  return (
    <a href={url}>
    <div
      id="issues-separator"
      className="w-full text-gray-250 p-2  bg-HTpurple-900"
    >
      <div className="flex flex-col ">
        <div
          id="issuename"
          className="flex items-baseline gap-4 pb-1 justify-start"
        >
          <h1 className="text-2xl ">{title}</h1>
          <h1 className="text-xs">{isClosed}</h1>
        </div>
        <div id="issuedescription" className="py-2">
          {description == "" ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              nulla.
            </p>
          ) : (
            description
          )}
        </div>
        <div id="issuetags">
          {tags.map((el, index) => {
            return <Issuetags key={index} tag={el} />;
          })}
        </div>
      </div>
    </div>
    </a>
  );
};

export default issues;
