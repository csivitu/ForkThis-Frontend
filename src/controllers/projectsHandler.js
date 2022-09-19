import React from "react";
import getHandler from "../reqHandlers/getHandler";
const projectsHandler = async () => {
  console.log("hjer");
  const URL = "https://gorest.co.in/public/v2/posts";
  const res = await getHandler(URL);
  console.log(res);
};

export default projectsHandler;
