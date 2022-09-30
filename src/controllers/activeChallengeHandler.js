import React from "react";

import getHandler from "../reqHandlers/getHandler";
const activechallengeHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/challenge/active`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default activechallengeHandler;
