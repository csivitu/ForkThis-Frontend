import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import recentsHandler from "../../controllers/recentsHandler";

const Recents = () => {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    const setData = async () => {
      const data = await recentsHandler();
      setRecents(data);
    };
    setData();
  }, []);
  return (
    <>
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
      {recents.map((el) => {
        console.log(el.data)
        return(
          <a href={el.URL}>
            <div>{el.data}</div>
          </a>
          )
      })}
    </>
  );
};

export default Recents;
