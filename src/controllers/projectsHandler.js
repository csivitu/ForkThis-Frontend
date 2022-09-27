import React from "react";
import getHandler from "../reqHandlers/getHandler";
const projectsHandler = async () => {
  const URL = "http://localhost:8000/users/";
  const res = await getHandler(URL);
  console.log(res);
};

export default projectsHandler;
