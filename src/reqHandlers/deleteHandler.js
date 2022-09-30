import axios from "axios";

const deleteHandler = async (URL) => {
  function getAllCookies() {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
    }
    return cookies;
  }
  const allCookies = getAllCookies();
  const token = allCookies.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response;
  await axios
    .delete(URL, config)
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

export default deleteHandler;
