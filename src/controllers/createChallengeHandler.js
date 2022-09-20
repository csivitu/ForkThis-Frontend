import postHandler from "../reqHandlers/postHandler.js";

const createChallengeHandler = async (formData) => {
  const URL = `https://8d77-136-233-9-97.in.ngrok.io/challenge/raise`;
  const res = await postHandler(URL, formData);
};

export default createChallengeHandler;
