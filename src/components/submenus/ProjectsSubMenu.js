import React from "react";
import Projects from "../miscellaneous/Projects";
import { useState, useEffect } from "react";
import projectsHandler from "../../controllers/projectsHandler";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import Issues from "../miscellaneous/Issues";
import styled from "styled-components";
import { mauve } from "@radix-ui/colors";
import axios from "axios";
import issuesHandler from "../../controllers/issuesHandler";

const ProjectsSubMenu = ({ project }) => {
  const [contributors, setContributors] = useState()
  const [issues, setIssues] = useState([])
  useEffect(() => {
    const getContributors = async() =>{
        const res= await axios.get(project.contributors_url);
        setContributors(res.data)
    }
    const getIssues = async() =>{
      const res= await issuesHandler(project.name)
      setIssues(res)
    }
    getContributors()
    getIssues()
  }, [])
  
  return (
    <div className=" w-full h-full text-gray-250">
      <div id="header">
        <div className="flex">
          <div className="w-4/5">
            <h1 className="text-5xl">{project.name}</h1>
            <div id="description" className="mt-3 ">
              {
              project.description? project.description :<>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse doloremque, labore non, quaerat enim recusandae voluptates molestias voluptatibus, et at debitis ad! Aperiam, accusamus.
              </>}
            </div>
          </div>
          <div id="contributors" className="flex flex-col w-1/4 text-2xl">
            <h1>Contributors</h1>
            {
              contributors?contributors.map(el=>{
                return(
                  <div>
                      <div id="contributor-icons"><img src={el.avatar_url} alt="" /></div>
                      <dir><a href={el.html_url}>{el.login}</a></dir>
                  </div>
                )
              }):''
            }
          </div>
        </div>
      </div>
      {
        contributors&&issues?
        <div id="issues-container">
          <h1>Issues</h1>
          <div>
            {
              issues.map(el=>{
                return(
                  <Issues title={el.title} description="" tags={el.labels} isClosed={el.isClosed}/>
                )
              })
            }
          </div>
      </div>:''
      }
    </div>
  );
};

export default ProjectsSubMenu;
