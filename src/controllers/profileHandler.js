import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  const id = "63243c8c904183c2d7df201f";
  const URL = `https://8d77-136-233-9-97.in.ngrok.io/users/${id}`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data;
};

export default profileHandler;
