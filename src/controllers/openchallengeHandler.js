import React from "react";

import getHandler from "../reqHandlers/getHandler";
const openchallengeHandler = async () => {
  const URL = `https://794a-136-233-9-97.in.ngrok.io/challenge/raised`;
  const res = await getHandler(URL);
  // console.log(res);
  return res.data.data;
};

export default openchallengeHandler;
