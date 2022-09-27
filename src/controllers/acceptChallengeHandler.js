import postHandler from "../reqHandlers/postHandler.js";

const acceptChallengeHandler = async (id) => {
  const URL = `http://localhost:8000/challenge/accept/${id}`;

  const res = await postHandler(URL);
  console.log(res)
};

export default acceptChallengeHandler;
