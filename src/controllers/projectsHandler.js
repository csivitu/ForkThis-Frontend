import React from "react";
import { Octokit } from "octokit";

const projectsHandler = async (user, repo) => {

  const octokit = new Octokit({
    auth: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
  });
  const res = await octokit.request("GET /repos/{user}/{repo}", {
    user: user,
    repo: repo,
  });

  return res.data;
};

export default projectsHandler;
