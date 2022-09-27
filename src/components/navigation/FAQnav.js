import React from "react";
import { useState, useEffect } from "react";
import profileHandler from "../../controllers/profileHandler";
const FAQnav = (props) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await profileHandler();
      setProfile(res);
    };
    fetchProfile();
  }, []);
  if (props.navbar == "FAQ")
    return (
      <div className="text-gray-250 w-full h-max  flex flex-col px-4 pt-2 justify-between ">
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
            <h1 className="text-2xl font-medium">{profile.name}</h1>
            <h3>{profile.username}</h3>
          </div>
          <div id="name" className="flex flex-col align-middle w-1/5 p-3 ">
            <h1 className="text-2xl font-medium">Score</h1>
            <h3>{profile.score}</h3>
          </div>
          <div id="rank" className="w-1/5 p-3">
            <h1 className="text-2xl font-medium">Rank</h1>
            <h3>name</h3>
          </div>
        </div>
        <div className="mt-3">FAQs here</div>
      </div>
    );
};

export default FAQnav;
