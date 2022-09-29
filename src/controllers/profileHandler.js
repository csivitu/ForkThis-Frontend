import React from "react";
import getHandler from "../reqHandlers/getHandler";

const profileHandler = async () => {
  const URL = `http://localhost:8000/users/me`;
  const res = await getHandler(URL);
  console.log(res.data.data);
  return res.data.data;
};

export default profileHandler;
