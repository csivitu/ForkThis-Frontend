import React from "react";

import getHandler from "../reqHandlers/getHandler";
const leaderboardsHandler = async () => {
  const URL = `https://794a-136-233-9-97.in.ngrok.io/users/leaderboards`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default leaderboardsHandler;
