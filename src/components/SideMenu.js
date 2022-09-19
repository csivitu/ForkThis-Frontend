import React from "react";

const SideMenu = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-1/12 bg-slate-400">
        <div id="avatar" className="h-1/5"></div>
        <div
          id="menu-icons-container"
          className="h-4/6 flex flex-col justify-around"
        >
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div id="menu-icon-img" className="text-center">
              <img src={"images/home-icon.png"} alt="" />
              <p>Hello</p>
            </div>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div id="menu-icon-img" className="text-center">
              <img src={"images/home-icon.png"} alt="" />
              <p>Hello</p>
            </div>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div id="menu-icon-img" className="text-center">
              <img src={"images/home-icon.png"} alt="" />
              <p>Hello</p>
            </div>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div id="menu-icon-img" className="text-center">
              <img src={"images/home-icon.png"} alt="" />
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
