import React from "react";

import { Octokit } from "octokit";

const projectsHandler = async (user, repo) => {
  const octokit = new Octokit({
    auth: "Bearer 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",
  });

  // const res= await octokit.request('GET /orgs/{org}/repos', {
  //   org: 'csivitu'
  // })
  const res = await octokit.request("GET /repos/{user}/{repo}", {
    user: user,
    repo: repo,
  });
  const URL = "https://api.github.com/repos/Pratham-Mishra04/interact-old";
  return res.data;
};

export default projectsHandler;
