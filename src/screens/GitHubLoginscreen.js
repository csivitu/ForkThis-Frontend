import React from "react";

const GitHubLoginscreen = () => {
  const submitHandler = async () => {
    const githubClientID = "ce1a21d8b45d47f95615";
    const URL = `https://github.com/login/oauth/authorize?client_id=${githubClientID}`;
    window.location.replace(URL);
  };
  return (
    <div className="flex flex-col justify-around items-center h-screen w-screen">
      <div className="h-1/10 w-full flex justify-start">
        <img className="mt-4 h-3/5 ml-4" src="images/CSILight.svg" alt="" />
      </div>
      <div className="h-9/10 w-full flex justify-around ">
        <div className="text-gray-250 h-5/6 w-full flex flex-col justify-around items-center">
          <div className="flex justify-around items-center mr-24 w-4/6 h-5/6">
            <img className="w-full h-5/6" src="images/LogoTag.svg" alt="logo" />
            <img src="images/rightarrow.svg" className="w-full  h-1/6" alt="" />
            <img
              id="github-logo"
              className="w-full ml-20 h-2/5"
              src="images/github.svg"
              alt=""
            />
          </div>

          {/* <img src="images/Tagline.svg" alt="" /> */}
          <div className="flex justify-around h-1/4 w-full items-center">
            <button
              id="loginbtn"
              onClick={submitHandler}
              className=" text-white font-bold  px-4  h-1/2 w-1/2 rounded"
            >
              <p className="text-md">Log In with GitHub</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubLoginscreen;
