import React from "react";

import getHandler from "../reqHandlers/getHandler";
const BarGraphHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/dashboard`;
  const res = await getHandler(URL);

  return res.data.data.diffData;
};

export default BarGraphHandler;
