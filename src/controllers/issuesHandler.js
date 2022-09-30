import React from "react";
import getHandler from "../reqHandlers/getHandler";

const issuesHandler = async (name) => {
  const URL = `${process.env.REACT_APP_DATABASE}/users/repoIssues/${name}`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default issuesHandler;
