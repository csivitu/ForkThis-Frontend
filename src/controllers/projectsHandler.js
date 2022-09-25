import React from "react";
import getHandler from "../reqHandlers/getHandler";
const projectsHandler = async () => {
  const URL = "https://794a-136-233-9-97.in.ngrok.io/users/";
  const res = await getHandler(URL);
  console.log(res);
};

export default projectsHandler;
