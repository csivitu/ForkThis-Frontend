import deleteHandler from "../reqHandlers/deleteHandler.js";
import Toaster from "../utils/toaster.js";

const acceptChallengeHandler = async (id) => {
  const URL = `http://localhost:8000/challenge/${id}`;
  const res = await deleteHandler(URL);
  if (res.status === 1) Toaster.success("Challenge Deleted!");
  else Toaster.error(res.data.message);
};

export default acceptChallengeHandler;
