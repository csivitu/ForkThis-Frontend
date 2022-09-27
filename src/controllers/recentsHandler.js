import React from "react";

import getHandler from "../reqHandlers/getHandler";
const recentsHandler = async () => {
  const URL = `http://localhost:8000/users/recents`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default recentsHandler;
