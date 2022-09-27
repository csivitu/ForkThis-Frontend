import React from "react";

import getHandler from "../reqHandlers/getHandler";
const leaderboardsHandler = async () => {
  const URL = `http://localhost:8000/users/leaderboards`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default leaderboardsHandler;
