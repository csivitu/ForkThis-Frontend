import React, { useState } from "react";
import MainNavbar from "../components/navigation/MainNavbar";
import SideMenu from "../components/navigation/SideMenu";

import ChallengesNavbar from "../components/navigation/ChallengesNavbar";
import ShopNav from "../components/navigation/ShopNav";
import FAQnav from "../components/navigation/FAQnav";

const Homescreen = () => {
  const [navbar, setNavbar] = useState(["Profile"]);
  return (
    <>
      <div id="screen-container" className="flex gap-1">
        <SideMenu setNavbar={setNavbar} />
        <MainNavbar navbar={navbar} />
        <ChallengesNavbar navbar={navbar} />
        <ShopNav navbar={navbar} />
        <FAQnav navbar={navbar} />
      </div>
    </>
  );
};

export default Homescreen;
