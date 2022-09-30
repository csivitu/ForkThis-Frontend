import axios from "axios";
import moment from "moment/moment";
import React from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import postHandler from "../reqHandlers/postHandler";
import GitHubLoginscreen from "../screens/GitHubLoginscreen";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Toaster from "../utils/toaster";
const AuthTokenHandler2 = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["cookie"]);
  const [user, setuser] = useState();
  useEffect(() => {
    const func = async () => {
      const res = await postHandler("http://127.0.0.1:8000/users/gitUsername", {
        githubUsername: cookie.githubUsername,
      });
      setuser(res);
    };
    func();
  }, []);
  if (user) {
    if (user.status === 1) navigate("/");
    else {
      Toaster.error(user.data.message);
      Toaster.startLoad("Being redirected to Authorization Page");
      setTimeout(function () {
        const token = cookie.token;
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        const URL = `/oauth?token=${token}`;
        navigate(URL);
      }, 5000);
    }
  }
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default AuthTokenHandler2;
