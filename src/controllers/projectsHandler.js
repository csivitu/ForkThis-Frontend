import React from "react";
import getGitHubHandler from "../reqHandlers/getGitHubHandler";
const projectsHandler = async () => {
  const URL = "https://api.github.com/repos/Pratham-Mishra04/interact-old";
  const res = await getGitHubHandler(URL);
  return res;
};

export default projectsHandler;
