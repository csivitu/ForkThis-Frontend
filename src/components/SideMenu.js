import React from "react";

const SideMenu = ({ setfirst }) => {
  return (
    <>
      <div id="side-menu" className="flex flex-col h-screen w-1/12 ">
        <div
          id="avatar"
          className="h-1/5 flex flex-col justify-around items-center"
        >
          <img src="images/faq-svg.svg" />
        </div>
        <div
          id="menu-icons-container"
          className="h-5/6 mb-2 bg-pink-400 flex flex-col justify-around"
        >
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <img className="h-7" src={"images/home-icon-svg.svg"} alt="" />
            </div>
            <p>Home</p>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <img
                className="h-7"
                src={"images/shopping-cart-svg.svg"}
                alt=""
              />
            </div>
            <p>Shop</p>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
            // onClick={setfirst("Challenge")}
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <img className="h-7 " src={"images/search-svg.svg"} alt="" />
            </div>
            <p>Challenges</p>
          </div>
          <div
            id="menu-icon"
            className="h-1/5 flex flex-col justify-center items-center"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <img className="h-7" src={"images/faq-svg.svg"} alt="" />
            </div>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
