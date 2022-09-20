import axios from "axios";

const getHandler = async (URL) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk5OTgzZDY4YTJhODIwNWZiMjI4YyIsImlhdCI6MTY2MzY3NDU0MywiZXhwIjoxNjYzODA0MTQzfQ.d0ukRqxSvH9MyeU6l8yYdUPhCnVG6XIEQOdxPrTsJrQ";
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
