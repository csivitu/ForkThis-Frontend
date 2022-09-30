import React from "react";
import getHandler from "../reqHandlers/getHandler";

const itemsHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/shop/items`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default itemsHandler;
