import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import ScrollbarWrapper from "../components/ScrollBarWrapper";
import ChallengesNavbar from "../components/ChallengesNavbar";
const Homescreen = () => {
  const [first, setfirst] = useState("Profile");
  return (
    <>
      <div id="screen-container" className="flex gap-1">
        <SideMenu setfirst={setfirst} />
        {/* <Navbar first={first} /> */}
        <ChallengesNavbar />
      </div>
    </>
  );
};

export default Homescreen;
