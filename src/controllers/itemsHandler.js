import React from "react";
import getHandler from "../reqHandlers/getHandler";

const itemsHandler = async () => {
  const URL = `http://localhost:8000/shop/items`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default itemsHandler;
