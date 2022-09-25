import postHandler from "../reqHandlers/postHandler.js";

const acceptChallengeHandler = async (id) => {
  const URL = `https://794a-136-233-9-97.in.ngrok.io/challenge/accept/${id}`;
  console.log(URL);
  const res = await postHandler(URL);
};

export default acceptChallengeHandler;
