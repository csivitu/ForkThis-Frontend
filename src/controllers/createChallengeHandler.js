import postHandler from "../reqHandlers/postHandler.js";

const createChallengeHandler = async (formData) => {
  const URL = `http://localhost:8000/challenge/raise`;
  const res = await postHandler(URL, formData);
  console.log(res)
};

export default createChallengeHandler;
