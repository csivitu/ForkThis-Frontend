import axios from "axios";

const postHandler = async (URL, formData) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk5OTgzZDY4YTJhODIwNWZiMjI4YyIsImlhdCI6MTY2NDA5MjQxOCwiZXhwIjoxNjY0MjIyMDE4fQ.79kM41hl4b8AP8NfMzQOowZmJkkNtlRAKwIIB7aw8QY";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  let response;
  await axios
    .post(URL, formData, headers)
    .then((res) => {
      response = {
        status: 1,
        data: res.data,
      };
    })
    .catch((err) => {
      console.log(err);
      response = {
        status: 0,
        data: err.response.data,
      };
    });
  return response;
};

export default postHandler;
