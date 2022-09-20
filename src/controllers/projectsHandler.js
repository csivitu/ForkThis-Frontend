import React from "react";
import getHandler from "../reqHandlers/getHandler";
const projectsHandler = async () => {
  console.log("hjer");
  const URL = "https://8d77-136-233-9-97.in.ngrok.io/users/";
  const res = await getHandler(URL);
  console.log(res);
};

export default projectsHandler;
