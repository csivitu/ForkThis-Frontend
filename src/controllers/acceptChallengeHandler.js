import postHandler from "../reqHandlers/postHandler.js";
import Toaster from "../utils/toaster.js";

const acceptChallengeHandler = async (id) => {
  const URL = `${process.env.REACT_APP_DATABASE}/challenge/accept/${id}`;
  const res = await postHandler(URL);
  if (res.status === 1) Toaster.success("Challenge Accepted!");
  else Toaster.error(res.data.message);
};

export default acceptChallengeHandler;
