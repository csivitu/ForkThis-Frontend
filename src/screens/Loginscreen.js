import React from "react";

const Loginscreen = () => {
  const submitHandler = async () => {
    const clientID =
      "ff5b48e83d3ea411139068a4f6f5443864bcc04453f7d88233a91894e2951eb1fda645c988996dfe5e6f861289588ce4c620eab44ff1cbc6f26b723e19777b45";
    const redirectUri = encodeURIComponent("http://localhost:3000/oauth");
    const oauthState = encodeURIComponent(Math.random().toString(32).slice(8));
    localStorage.setItem("state", oauthState);
    const URL = `https://accounts.csivit.com/oauth/authorize?clientId=${clientID}&state=${oauthState}&redirectUrl=${redirectUri}`;
    window.location.replace(URL);
  };
  return (
    <div className="flex justify-around items-center h-screen w-screen">
      <div id="loginscreen" className="text-gray-250 h-2/3 w-1/3 ">
        <img className="w-full h-auto" src="images/Logo-Text.svg" alt="logo" />
        <div className="flex justify-around h-1/4 w-full items-center">
          <button
            onClick={submitHandler}
            class=" text-white font-bold py-2 px-4  h-1/2 w-1/2 rounded"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
