import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../miscellaneous/Tabs";
import { TabsTrigger } from "../miscellaneous/Tabs";
// import * as TabsPrimitive from "@radix-ui/react-tabs";
// import { TabsTrigger } from "@radix-ui/react-tabs";
import openchallengehandler from "../../controllers/openchallengeHandler";
// import ProfileHandler from "../handlers/ProfileHandler.js";
import ClosedChallengesSubMenu from "../submenus/ClosedChallengesSubMenu";
import ActiveChallengesSubMenu from "../submenus/ActiveChallengesSubMenu";

import profileHandler from "../../controllers/profileHandler.js";

import { useState } from "react";
import { useEffect } from "react";

import activeChallengeHandler from "../../controllers/activeChallengeHandler";
import closedChallengeHandler from "../../controllers/closedChallengeHandler";
import CreateChallenge from "../miscellaneous/CreateChallenge";
import OpenChallengesSubMenu from "../submenus/OpenChallengesSubMenu";

const Navbar = (props) => {
  const [openChallenges, setOpenChallenges] = useState([]);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [closedChallenges, setClosedChallenges] = useState([]);
  const [profile, setProfile] = useState([]);
  const [reloader, setReloader] = useState()
  useEffect(() => {
    const fetchOpenChallenges = async () => {
      const res = await openchallengehandler();

      setOpenChallenges(res);
    };
    fetchOpenChallenges();
    const fetchActiveChallenges = async () => {
      const res = await activeChallengeHandler();

      setActiveChallenges(res);
    };
    fetchActiveChallenges();
    const fetchClosedChallenges = async () => {
      const res = await closedChallengeHandler();
      setClosedChallenges(res);
    };
    fetchClosedChallenges();
    const fetchProfile = async () => {
      const res = await profileHandler();

      setProfile(res);
    };
    fetchProfile();
  }, [reloader]);
  if (props.navbar == "Challenges")
    return (
      <div
        id="scroll-nav-bar"
        className="w-full h-max text-gray-250 flex flex-col px-4 pt-2 justify-between "
      >
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
            <h1 className="text-2xl text-white font-medium">{profile.name}</h1>
            <h3>@{profile.username}</h3>
          </div>
          <div id="name" className="flex flex-col align-middle w-1/5 p-3 ">
            <h1 className="text-2xl text-white   font-medium">Score</h1>
            <h3>{profile.score}</h3>
          </div>
          <div id="rank" className="w-1/5 p-3">
            <h1 className="text-2xl text-white font-medium">Rank</h1>
            <h3>{profile.rank}</h3>
          </div>
        </div>
        <div id="Nav-items" className="flex ">
          {/* Import book mark */}
          <div className="w-full">
            <Tabs.Root defaultValue="tab1">
              <Tabs.List>
                <div className="flex">
                  <TabsTrigger value="tab1">Open Challenges</TabsTrigger>
                  <TabsTrigger value="tab2">Active Challenge</TabsTrigger>
                  <TabsTrigger value="tab3">Closed Challenges</TabsTrigger>
                  <TabsTrigger value="tab4">Create Challenge</TabsTrigger>
                </div>
              </Tabs.List>
              <div className="my-3">
                <Tabs.Content value="tab1">
                  <div className="flex flex-wrap justify-around items-center gap-y-3 gap-x-1">
                    {openChallenges.map((challenge) => (
                      <OpenChallengesSubMenu
                        key={challenge._id}
                        challenge={challenge}
                        profile={profile}
                        reloader={setReloader}
                      />
                    ))}
                  </div>
                </Tabs.Content>
                <Tabs.Content value="tab2">
                  <ActiveChallengesSubMenu challenge={activeChallenges} reloader={setReloader}/>
                </Tabs.Content>
                <Tabs.Content value="tab3">
                  <div className="flex flex-wrap justify-around items-center gap-y-3 gap-x-3">
                    {
                      closedChallenges.length>0?
                      closedChallenges.map((closedchallenge) => (
                        <ClosedChallengesSubMenu
                          key={closedchallenge._id}
                          challenge={closedchallenge}
                          username={profile.username}
                        />
                      )):
                      <div className="w-full text-center text-2xl mt-6">
                        You haven't taken part in any challenges yet.
                    </div>
                    }

                  </div>
                </Tabs.Content>
                <Tabs.Content value="tab4">
                  <CreateChallenge reloader={setReloader}/>
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
