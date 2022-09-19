import React from "react";

import getHandler from "../reqHandlers/getHandler";
const challengeHandler = async () => {
  const URL = `https://183a-157-49-137-197.in.ngrok.io/challenge`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default challengeHandler;
