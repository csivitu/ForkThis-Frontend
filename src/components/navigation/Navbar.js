import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../miscellaneous/Tabs";

import LeaderboardsSubMenu from "../submenus/LeaderboardsSubMenu";

import profileHandler from "../../controllers/profileHandler";
import leaderboardsHandler from "../../controllers/leaderboardHandler.js";
import { useState } from "react";
import { useEffect } from "react";
import { styled } from "@stitches/react";
import { violet, mauve, blackA, green } from "@radix-ui/colors";
import Profileview from "../submenus/Profileview";
import ProjectsSubMenu from "../submenus/ProjectsSubMenu";
import LeaderboardTableHeader from "../miscellaneous/LeaderboardTableHeader";
import GuideSubMenu from "../submenus/GuideSubMenu.js";

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
    // fetchLeaderboards();
  }, []);
  // if (first == "Profile")
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

          <div className="flex flex-col align-middle w-2/5 p-3 ">
            <h1 className="text-2xl font-medium">
              {profile.name ? profile.name : "Name"}
            </h1>
            <h3>@{profile.username ? profile.username : "username"}</h3>
          </div>
          <div className="flex flex-col align-middle w-1/5 p-3 ">
            <h1 className="text-2xl font-medium">Score</h1>
            <h3>{profile.score}</h3>
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
                  <Tabs.Trigger value="tab1">Profile</Tabs.Trigger>
                  <Tabs.Trigger value="tab2">Projects</Tabs.Trigger>
                  <Tabs.Trigger value="tab4">Leaderboards</Tabs.Trigger>
                  <Tabs.Trigger value="tab5">Guide</Tabs.Trigger>
                </div>
              </Tabs.List>
              <div className="my-3">
                <Tabs.Content value="tab1">
                  <Profileview profile={profile} />
                </Tabs.Content>
                <Tabs.Content value="tab2">
                  <ProjectsSubMenu />
                </Tabs.Content>

                <Tabs.Content value="tab4">
                  {/* <LeaderboardTableHeader /> */}
                  {/* {leaderboards.map((user) => (
                    <LeaderboardsSubMenu key={user._id} user={user} />
                  ))} */}
                </Tabs.Content>
                <Tabs.Content value="tab5">
                  <GuideSubMenu />
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
