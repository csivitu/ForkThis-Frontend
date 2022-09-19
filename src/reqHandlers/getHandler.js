import axios from "axios";

const getHandler = async (URL) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjQ4MzU3MDYyZDg1MDRmZjhkYmJmNyIsImlhdCI6MTY2MzUwNDc1OCwiZXhwIjoxNjYzNjM0MzU4fQ.sjElxG9jCXKQd8GyDa7CSWESJiZW8QvUKK5KLUksMPo";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + token,
  };
  let response;
  await axios
    .get(URL, headers)
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
      console.log(response);
    });

  return response;
};

export default getHandler;
