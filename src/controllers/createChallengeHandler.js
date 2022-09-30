import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const createChallengeHandler = async (formData, reloader) => {
  const URL = `http://localhost:8000/challenge/raise`;
  const res = await postHandler(URL, formData);
  if(res.status===1) {
    Toaster.success("Challenge Raised!")
    reloader(Math.random())
  }
  else Toaster.error(res.data.message)
};

export default createChallengeHandler;
