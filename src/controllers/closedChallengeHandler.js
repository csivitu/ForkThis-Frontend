import React from "react";

import getHandler from "../reqHandlers/getHandler";
const closedchallengeHandler = async () => {
  const URL = `http://localhost:8000/challenge/closed`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default closedchallengeHandler;
