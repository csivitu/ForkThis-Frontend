import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const orderHandler = async (formData, reloader) => {
  const URL = `${process.env.REACT_APP_DATABASE}/shop/purchase`;
  const res = await postHandler(URL, formData);
  if (res.status === 1) {
    Toaster.success("Order Confirm");
    reloader(Math.random());
  } else Toaster.error(res.data.message);
};

export default orderHandler;
