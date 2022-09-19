import React from "react";

import getHandler from "../reqHandlers/getHandler";
const leaderboardsHandler = async () => {
  const URL = `https://183a-157-49-137-197.in.ngrok.io/users/leaderboards`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default leaderboardsHandler;
