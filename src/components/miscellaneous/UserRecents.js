import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import recentsHandler from "../../controllers/recentsHandler";
import Loader from "../../utils/Loader";

const Recents = ({ recents }) => {
  // const userRecents = [""].concat(recents).reverse();
  if (recents)
    return (
      <>
        <div className="py-2 pl-2 flex flex-col">
          {recents ? (
            recents.map((el, index) => {
              return (
                <a key={index} href={el.URL}>
                  <div className="hover:text-HTpink-900">{el.data}</div>
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
