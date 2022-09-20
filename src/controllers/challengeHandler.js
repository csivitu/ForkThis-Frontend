import React from "react";

import getHandler from "../reqHandlers/getHandler";
const challengeHandler = async () => {
  const URL = `https://8d77-136-233-9-97.in.ngrok.io/users/`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default challengeHandler;
