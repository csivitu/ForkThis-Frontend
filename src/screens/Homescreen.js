import React from "react";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";

const Homescreen = () => {
  return (
    <>
      <div id="screen-container" className="flex">
        <SideMenu />
        <Navbar />
      </div>
    </>
  );
};

export default Homescreen;
