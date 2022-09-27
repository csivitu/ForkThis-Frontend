import axios from "axios";

const getGitHubHandler = async (URL) => {
  const token = "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";
  const config = {
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json",
    },
  };
  let response;
  await axios
    .get(URL, config)
    .then((res) => {
      response = {
        status: 1,
        data: res.data,
      };
    })
    .catch((err) => {
      response = {
        status: 0,
        data: err.response.data,
      };
    });
  return response;
};

export default getGitHubHandler;
