import getHandler from "../reqHandlers/getHandler.js";
import Toaster from "../utils/toaster.js";

const purchaseHandler = async () => {
  const URL = `http://localhost:8000/shop/purchases`;
  const res = await getHandler(URL);
  return res.data['data']
};

export default purchaseHandler;
