import React from "react";

import getHandler from "../reqHandlers/getHandler";
const LineGraphHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/dashboard`;
  const res = await getHandler(URL);

  return res.data.data.timeData;
};

export default LineGraphHandler;
