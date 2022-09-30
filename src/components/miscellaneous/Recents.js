import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import recentsHandler from "../../controllers/recentsHandler";
import Loader from "../../utils/Loader";

const Recents = () => {
  const [recents, setRecents] = useState();
  useEffect(() => {
    const setData = async () => {
      const data = await recentsHandler();
      setRecents(data);
    };
    setData();
  }, []);
  if (recents)
    return (
      <>
        <div
          id="graph-border-bottom"
          className="font-bold w-full py-2 text-2xl bg-HTpurple-900 "
        >
          Recents
        </div>
        <div className="py-2">
          {recents.map((el) => {
            // console.log(el.data);
            return (
              <a href={el.URL}>
                <div className="hover:text-HTpink-900">{el.data}</div>
              </a>
            );
          })}
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
