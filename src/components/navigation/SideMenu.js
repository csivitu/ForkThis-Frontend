import React from "react";

const SideMenu = (props) => {
  const changeNavbarProfile = () => {
    props.setNavbar(["Profile"]);
    // console.log("clicked");
  };
  const changeNavbarChallenge = () => {
    props.setNavbar(["Challenges"]);
    // console.log("clicked");
  };
  const changeNavbarFAQ = () => {
    props.setNavbar(["FAQ"]);
    // console.log("clicked");
  };
  const changeNavbarShop = () => {
    props.setNavbar(["Shop"]);
    // console.log("clicked");
  };
  const changeNavbarProjects = () => {
    props.setNavbar(["Projects"]);
    // console.log("clicked");
  };
  return (
    <>
      <div
        id="sidemenu"
        className="gap-2 bg-HTpurple-900 flex text-gray-250 flex-col h-auto w-1/10 "
      >
        <div className="flex-col flex h-screen">
          {/* <div
          id="avatar"
          className="h-1/5 flex flex-col  justify-around items-center"
        ></div> */}
          <div
            id="menu-icons-container"
            className="h-full flex flex-col justify-around "
          >
            <img
              id="menu-icon"
              onClick={changeNavbarProfile}
              className="h-max"
              src="images/logo.svg"
            />
            <div
              id="menu-icon"
              className=" h-1/5 flex flex-col justify-center items-center "
              onClick={changeNavbarProfile}
            >
              <div
                id="menu-icon"
                className="text-center flex flex-col items-center justify-around"
              >
                <svg
                  id="sidemenu-svgs"
                  className="bg-HTpurple-900 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <p className="text-center w-full break-words">Home</p>
            </div>
            <div
              id="menu-icon"
              className="h-1/5 flex flex-col justify-center items-center"
              onClick={changeNavbarShop}
            >
              <div
                id="menu-icon-img"
                className="text-center flex flex-col items-center justify-around"
              >
                <svg
                  id="sidemenu-svgs"
                  className="bg-HTpurple-900 w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D9D9D9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-center w-full break-words">Shop</p>
            </div>
            {/*  */}
            <div
              id="menu-icon"
              className="h-1/5 flex flex-col justify-center items-center"
              onClick={changeNavbarProjects}
            >
              <div
                id="menu-icon-img"
                className="text-center flex flex-col items-center justify-around"
              >
                <svg
                  id="sidemenu-svgs"
                  className="bg-HTpurple-900 w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D9D9D9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-center w-full break-words">Projects</p>
            </div>
            {/*  */}
            <div
              id="menu-icon"
              className="h-1/5 flex flex-col justify-center items-center"
              onClick={changeNavbarChallenge}
            >
              <div
                id="menu-icon-img"
                className="text-center flex flex-col items-center justify-around "
              >
                <svg
                  id="sidemenu-svgs"
                  className="bg-HTpurple-900 w-7 h-7"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#D9D9D9"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="5" y1="5" x2="5" y2="21" />{" "}
                  <line x1="19" y1="5" x2="19" y2="14" />{" "}
                  <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />{" "}
                  <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                </svg>
              </div>
              <p className="text-center w-full break-words">Challenges</p>
            </div>
            <div
              id="menu-icon"
              className="h-1/5 flex flex-col justify-center items-center"
              onClick={changeNavbarFAQ}
            >
              <div
                id="menu-icon-img"
                className="text-center flex flex-col items-center justify-around"
              >
                <svg
                  id="sidemenu-svgs"
                  className="bg-HTpurple-900 w-7 h-7"
                  fill="none"
                  stroke="#D9D9D9"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <p className="text-center w-full break-words">FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
