import postHandler from "../reqHandlers/postHandler.js";

const acceptChallengeHandler = async (id) => {
  const URL = `http://localhost:8000/challenge/accept/${id}`;
  console.log(URL);
  const res = await postHandler(URL);
};

export default acceptChallengeHandler;
