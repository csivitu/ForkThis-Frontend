import React from "react";

import getHandler from "../reqHandlers/getHandler";
const openchallengeHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/challenge/raised`;
  const res = await getHandler(URL);
  // console.log(res);
  return res.data.data;
};

export default openchallengeHandler;
