import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  const id = "63299983d68a2a8205fb228c";
  const URL = `http://localhost:8000/users/${id}`;
  const res = await getHandler(URL);
  console.log(res.data.data);
  return res.data.data;
};

export default profileHandler;
