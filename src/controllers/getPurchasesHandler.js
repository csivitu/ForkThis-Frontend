import React from "react";
import getHandler from "../reqHandlers/getHandler";

const getPurchasesHandler = async () => {
  const URL = `${process.env.REACT_APP_DATABASE}/shop/purchases`;
  const res = await getHandler(URL);
  return res.data.data;
};

export default getPurchasesHandler;
