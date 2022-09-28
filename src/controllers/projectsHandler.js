import React from "react";
import getGitHubHandler from "../reqHandlers/getGitHubHandler";
import { Octokit } from "octokit";

const projectsHandler = async () => {
  const octokit = new Octokit({
    // auth: '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'
  })
  
  // const res= await octokit.request('GET /orgs/{org}/repos', {
  //   org: 'csivitu'
  // })
  const res= await octokit.request('GET /repos/{user}/{repo}', {
    user:"Pratham-Mishra04",
    repo:"interact-old"
  })
  const URL = "https://api.github.com/repos/Pratham-Mishra04/interact-old";
  return res.data;
};

export default projectsHandler;
