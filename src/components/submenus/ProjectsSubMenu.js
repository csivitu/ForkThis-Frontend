import React from "react";
import Projects from "../miscellaneous/Projects";
import { useState, useEffect } from "react";
import projectsHandler from "../../controllers/projectsHandler";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import Issues from "../miscellaneous/Issues";

const ProjectsSubMenu = ({ project }) => {
  console.log(project);
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const res = await projectsHandler();
  //     setProjects(res);
  //   };
  //   fetchProjects();
  // });
  return (
    <div className=" w-full h-full">
      <div id="header">
        <div className="flex">
          <div>
            <h1 className="text-5xl">{project.data.name}</h1>
            <div id="description" className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis repudiandae id eaque, soluta nobis repellendus cum
              pariatur. Neque, molestias harum!
            </div>
          </div>
          <div id="contributors" className="flex flex-col w-1/4 text-2xl">
            <h1>Contributors</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around mt-9">
        <Issues />
      </div>
    </div>
  );
};

export default ProjectsSubMenu;
