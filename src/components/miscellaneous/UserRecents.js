import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import recentsHandler from "../../controllers/recentsHandler";
import Loader from "../../utils/Loader";

const Recents = (recents) => {
  const userRecents = [""].concat(recents).reverse();
  //   console.log(userRecents);
  if (userRecents)
    return (
      <>
        <div
          id="graph-border-bottom"
          className="font-bold w-full text-center py-2 text-2xl bg-HTpurple-900 "
        >
          Recents
        </div>
        <div id="graph-border-bottom" className="py-2 flex flex-col">
          {userRecents ? (
            userRecents.map((el) => {
              return (
                <a href={el.URL}>
                  <div>{el.data}</div>
                </a>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </>
    );
  else
    return (
      <div class="flex justify-center items-center space-x-2 w-full bg-HTpurple-900 rounded overflow-hidden shadow-lg">
        <Loader />
      </div>
    );
};

export default Recents;
