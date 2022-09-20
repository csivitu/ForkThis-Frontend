import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./Tabs";
import { TabsTrigger } from "./Tabs";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { TabsTrigger } from "@radix-ui/react-tabs";
// import ProfileHandler from "../handlers/ProfileHandler.js";
import ChallengesSubMenu from "./ChallengesSubMenu";
import LeaderboardsSubMenu from "./LeaderboardsSubMenu.js";
import getHandler from "../reqHandlers/getHandler.js";
import profileHandler from "../controllers/profileHandler.js";
import leaderboardsHandler from "../controllers/leaderboardHandler.js";
import projectsHandler from "../controllers/projectsHandler.js";
import { data } from "autoprefixer";
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
import challengeHandler from "../controllers/challengeHandler";
import Profileview from "./Profileview";
import Guide from "./Guide";
import ProfileViewClass from "./ProfileViewClass";
import ProjectsSubMenu from "./ProjectsSubMenu";
import CreateChallenge from "./CreateChallenge";
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

const Navbar = () => {
  const [openChallenges, setOpenChallenges] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [closedChallenges, setClosedChallenges] = useState([]);
  useEffect(() => {
    const fetchChallenges = async () => {
      const res = await leaderboardsHandler();
      setOpenChallenges(res);
    };
    fetchChallenges();
    const fetchActiveChallenges = async () => {
      const res = await challengeHandler();
      setActiveChallenges(res);
    };
    fetchActiveChallenges();
    const fetchProfile = async () => {
      const res = await profileHandler();
      setClosedChallenges(res);
    };
    fetchProfile();
  }, []);

  return (
    <div className="w-full h-max  flex flex-col px-4 pt-2 justify-between ">
      <div className=" w-full h-max mb-2 bg-slate-500 flex rounded">
        <div
          id="profile"
          className="flex justify-between items-center w-1/4 pl-3"
        >
          <img
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt=""
            className="h-20 w-20 rounded-full flex  justify-between items-center"
          />
        </div>
        <div id="name" className="flex flex-col align-middle w-3/5 p-3 ">
          <h1 className="text-2xl font-medium">Name</h1>
          <h3>name</h3>
        </div>
        <div id="rank" className="w-1/4 p-3">
          <h1 className="text-2xl font-medium">Rank</h1>
        </div>
      </div>
      <div id="Nav-items" className="flex ">
        {/* Import book mark */}
        <div className="w-full">
          <Tabs.Root>
            <Tabs.List>
              <div className="flex">
                <TabsTrigger value="tab1">Open Challenges</TabsTrigger>
                <TabsTrigger value="tab2">Active Challenges</TabsTrigger>
                <TabsTrigger value="tab3">Closed Challenges</TabsTrigger>
                <TabsTrigger value="tab4">Create Challenge</TabsTrigger>
              </div>
            </Tabs.List>
            <div className="my-3">
              <Tabs.Content value="tab1">
                <ProjectsSubMenu />
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <ProjectsSubMenu />
              </Tabs.Content>
              <Tabs.Content value="tab3">
                <ChallengesSubMenu />
              </Tabs.Content>
              <Tabs.Content value="tab4">
                <CreateChallenge />
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
