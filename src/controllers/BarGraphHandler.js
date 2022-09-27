import React from "react";

import getHandler from "../reqHandlers/getHandler";
const BarGraphHandler = async () => {
  const URL = `http://localhost:8000/users/dashboard`;
  const res = await getHandler(URL);

  return res.data.data.diffData;
};

export default BarGraphHandler;
