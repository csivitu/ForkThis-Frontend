import React from "react";

const Loginscreen = () => {
  const submitHandler = async () => {
    const clientID =
      "ff5b48e83d3ea411139068a4f6f5443864bcc04453f7d88233a91894e2951eb1fda645c988996dfe5e6f861289588ce4c620eab44ff1cbc6f26b723e19777b45";
    const redirectUri = encodeURIComponent(`${process.env.REACT_APP_FRONTEND_URL}/oauth`);
    const oauthState = encodeURIComponent(Math.random().toString(32).slice(8));
    localStorage.setItem("state", oauthState);
    const URL = `https://accounts.csivit.com/oauth/authorize?clientId=${clientID}&state=${oauthState}&redirectUrl=${redirectUri}`;
    window.location.replace(URL);
  };
  return (
    <div className="flex flex-col justify-around items-center h-screen w-screen">
      <div className="h-1/10 w-full flex justify-start">
        <img className="mt-4 h-3/5 ml-4" src="images/CSILight.svg" alt="" />
      </div>
      <div className="h-9/10 w-full flex justify-around ">
        <div className="text-gray-250 h-5/6 flex flex-col justify-around items-center">
          <img className="w-full h-5/6" src="images/LogoTag.svg" alt="logo" />

          {/* <img src="images/Tagline.svg" alt="" /> */}
          <div className="flex justify-around h-1/4 w-full items-center">
            <button
              id="loginbtn"
              onClick={submitHandler}
              className=" text-white font-bold  px-4  h-1/2 w-1/2 rounded"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
