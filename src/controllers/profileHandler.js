import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  console.log("hjer");
  const URL = "https://753a-136-233-9-97.in.ngrok.io/users/leaderboards";
  const res = await getHandler(URL);
  console.log(res);
};

export default profileHandler;
