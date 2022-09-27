import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { TabsTrigger } from "@radix-ui/react-tabs";
import { TabsTrigger } from "../miscellaneous/Tabs";

import LeaderboardsSubMenu from "../submenus/LeaderboardsSubMenu";

import profileHandler from "../../controllers/profileHandler.js";
import leaderboardsHandler from "../../controllers/leaderboardHandler.js";
import projectsHandler from "../../controllers/projectsHandler.js";

import { useState } from "react";
import { useEffect } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";
import {
  ScrollAreaViewport,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";
import activechallengeHandler from "../../controllers/activeChallengeHandler";
import Profileview from "../submenus/Profileview";
import Guide from "../submenus/GuideSubMenu";

import ProjectsSubMenu from "../submenus/ProjectsSubMenu";

import LeaderboardTableHeader from "../miscellaneous/LeaderboardTableHeader";
// Your app...
const Box = styled("div", { display: "flex", flexDirection: "row" });
const Flex = styled("div", { display: "flex", flexDirection: "row" });

const Text = styled("div", {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});
const Fieldset = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
});

const Label = styled("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: violet.violet12,
  display: "block",
});

const Input = styled("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Navbar = (props) => {
  const [leaderboards, setLeaderboards] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await profileHandler();
      setProfile(res);
    };
    fetchProfile();
    const fetchLeaderboards = async () => {
      const res = await leaderboardsHandler();
      setLeaderboards(res);
    };
    fetchLeaderboards();
  }, []);
  if (props.navbar == "Profile")
    return (
      <div className="w-full h-max  flex flex-col px-4 pt-2 justify-between ">
        <div
          id="profile-tab"
          className=" w-full h-max mb-2 bg-slate-500 flex rounded"
        >
          <div
            id="profile"
            className="flex justify-between items-center w-1/5 pl-3"
          >
            <img
              src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
              alt=""
              className="h-20 w-20 rounded-full flex  justify-between items-center"
            />
          </div>

          <div id="name" className="flex flex-col align-middle w-2/5 p-3 ">
            <h1 className="text-2xl font-medium">Name</h1>
            <h3>name</h3>
          </div>
          <div id="name" className="flex flex-col align-middle w-1/5 p-3 ">
            <h1 className="text-2xl font-medium">Name</h1>
            <h3>name</h3>
          </div>
          <div id="rank" className="w-1/5 p-3">
            <h1 className="text-2xl font-medium">Rank</h1>
            <h3>name</h3>
          </div>
        </div>
        <div id="Nav-items" className="flex ">
          {/* Import book mark */}
          <div className="w-full">
            <Tabs.Root defaultValue="tab1">
              <Tabs.List>
                <div className="flex">
                  <TabsTrigger value="tab1">Profile</TabsTrigger>
                  <TabsTrigger value="tab2">Projects</TabsTrigger>
                  <TabsTrigger value="tab3">Leaderboards</TabsTrigger>
                  <TabsTrigger value="tab4">Guide</TabsTrigger>
                </div>
              </Tabs.List>
              <div className="my-3">
                <Tabs.Content value="tab1">
                  <Profileview profile={profile} />
                </Tabs.Content>
                <Tabs.Content value="tab2">
                  <ProjectsSubMenu />
                </Tabs.Content>
                <Tabs.Content value="tab3">
                  <LeaderboardTableHeader />
                   {leaderboards.map((user) => (
                    <LeaderboardsSubMenu key={user._id} user={user} />
                  ))}
                </Tabs.Content>
                <Tabs.Content value="tab4">
                  <Guide />
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
