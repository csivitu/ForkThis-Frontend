import React from "react";
import getHandler from "../reqHandlers/getHandler";

const getPurchasesHandler = async () => {
  const URL = `http://localhost:8000/shop/purchases`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default getPurchasesHandler;
