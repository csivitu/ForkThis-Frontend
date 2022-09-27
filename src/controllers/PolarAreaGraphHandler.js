import React from "react";

import getHandler from "../reqHandlers/getHandler";
const LineGraphHandler = async () => {
  const URL = `http://localhost:8000/users/dashboard`;
  const res = await getHandler(URL);

  return res.data.data.tagsData;
};

export default LineGraphHandler;
