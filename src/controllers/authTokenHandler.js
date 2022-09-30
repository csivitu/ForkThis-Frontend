import moment from "moment/moment";
import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import profileHandler from "./profileHandler";
import GitHubLoginscreen from "../screens/GitHubLoginscreen";

const AuthTokenHandler = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const search = useLocation().search;
  const [user, setUser] = useState();
  useEffect(() => {
    if (cookies.token) navigate("/");
    const token = new URLSearchParams(search).get("token");
    if (!token) navigate("/");
    console.log(token);
    const expiresOn = new Date(moment().add(1, "days").format());
    console.log(expiresOn);
    setCookie("token", token, { path: "/", expires: expiresOn });
    const getUser = async () => {
      const user = await profileHandler();
      setUser(user);
    };
    getUser();
  }, []);
  if (user && user.isGithubUsername) navigate("/");
  return (
    <>
      <GitHubLoginscreen />
    </>
  );
};

export default AuthTokenHandler;
