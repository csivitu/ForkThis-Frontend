import React from "react";
import Projects from "../miscellaneous/Projects";
import { useState, useEffect } from "react";
import projectsHandler from "../../controllers/projectsHandler";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import Issues from "../miscellaneous/Issues";
import styled from "styled-components";
import { mauve } from "@radix-ui/colors";

const ProjectsSubMenu = ({ project }) => {
  return (
    <div className=" w-full h-full text-gray-250">
      <div id="header">
        <div className="flex">
          <div className="w-4/5">
            <h1 className="text-5xl">{/* {project.data.name} */}Name</h1>
            <div id="description" className="mt-3 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis repudiandae id eaque, soluta nobis repellendus cum
              pariatur. Neque, molestias harum!
            </div>
          </div>
          <div id="contributors" className="flex flex-col w-1/4 text-2xl">
            <h1>Contributors</h1>
            <div id="contributor-icons"></div>
          </div>
        </div>
      </div>
      <div
        id="issues-container"
        className="flex items-center justify-around mt-9 p-2 bg-HTpurple-900"
      >
        <Issues />
      </div>
    </div>
  );
};

export default ProjectsSubMenu;
