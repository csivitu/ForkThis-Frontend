import React from "react";
import getHandler from "../reqHandlers/getHandler";

const issuesHandler = async (name) => {
  const URL = `http://localhost:8000/users/repoIssues/${name}`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default issuesHandler;
