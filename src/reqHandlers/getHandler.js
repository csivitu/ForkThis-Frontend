import axios from "axios";

const getHandler = async (URL) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk5OTgzZDY4YTJhODIwNWZiMjI4YyIsImlhdCI6MTY2NDA5MjQxOCwiZXhwIjoxNjY0MjIyMDE4fQ.79kM41hl4b8AP8NfMzQOowZmJkkNtlRAKwIIB7aw8QY";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
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
    });

  return response;
};

export default getHandler;
