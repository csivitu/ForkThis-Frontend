import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  const id = "63299983d68a2a8205fb228c";
  const URL = `https://794a-136-233-9-97.in.ngrok.io/users/${id}`;
  const res = await getHandler(URL);
  // console.log(res.data.data);
  return res.data.data;
};

export default profileHandler;
