import axios from "axios";

const getHandler = async (URL) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk5OTgzZDY4YTJhODIwNWZiMjI4YyIsImlhdCI6MTY2NDM0MzgyNCwiZXhwIjoxNjY0NDczNDI0fQ.8AXYwevp4TmzNAa2i8T1Bt1UHfe2IcWLr5ruhX-0MEo"
   const config={
    headers: {
      Authorization: `Bearer ${token}`,
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

export default getHandler;
