import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const purchaseHandler = async (formData) => {
  const URL = `http://localhost:8000/shop/purchase`;
  const res = await postHandler(URL, formData);
  if(res.status===1) Toaster.success("Order Placed!")
  else Toaster.error(res.data.message)
};

export default purchaseHandler;
