import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/me`;
  // console.log(process.env.REACT_APP_DATABASE);
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default profileHandler;
