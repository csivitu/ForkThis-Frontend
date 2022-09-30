import React from "react";

import getHandler from "../reqHandlers/getHandler";
const leaderboardsHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/leaderboards`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default leaderboardsHandler;
