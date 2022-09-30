import React from "react";

import getHandler from "../reqHandlers/getHandler";
const recentsHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/recents`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default recentsHandler;
