import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const orderHandler = async (formData, reloader) => {
    const URL = `http://localhost:8000/shop/purchase`;
    const res = await postHandler(URL, formData);
    if(res.status===1){
        Toaster.success("Order Confirm");
        reloader(Math.random())
    }
    else Toaster.error(res.data.message)
};

export default orderHandler;    