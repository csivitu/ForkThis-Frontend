import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const createChallengeHandler = async (formData) => {
  const URL = `${process.env.REACT_APP_DATABASE}/challenge/raise`;
  const res = await postHandler(URL, formData);
  if (res.status === 1) Toaster.success("Challenge Raised!");
  else Toaster.error(res.data.message);
};

export default createChallengeHandler;
