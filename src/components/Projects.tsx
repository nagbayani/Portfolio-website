// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectScreenContent = (project: string) => {
  switch (project) {
    case "Angulens":
      return (
        <div className='project-screen-content p-8'>
          <h2>Angulens</h2>
          <div className='flex flex-row w-[100%]'>
            <div className='w-[70%]  h-[100%] '>
              <img src='/modal.gif'></img>
            </div>
            <ul className='projects-tech w-[20%] h-[50%]'>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Webview API</li>
              <li>Klaw-Sync</li>
              <li>VS Code Extension API</li>
            </ul>
          </div>
        </div>
      );
    case "InterviewPrep":
      return (
        <div className='project-screen-content'>
          <h2>Interview Prep</h2>
          <div className='flex flex-row w-[100%]'>
            <div className='w-[70%]  h-[100%] '>
              <img src='/modal.gif'></img>
            </div>
            <ul className='projects-tech w-[20%] h-[50%]'>
              <li>React</li>
              <li>MongoDB</li>
              <li>Redux/Redux Toolkit</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
      );

    case "LoCoups":
      return (
        <div className='project-screen-content'>
          <h2>LoCoups</h2>

          <div className='flex flex-row w-[100%]'>
            <div className='w-[70%]  h-[100%] '>
              <img src='/modal.gif'></img>
            </div>
            <ul className='projects-tech w-[20%] h-[50%]'>
              <li>React</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>Prisma</li>
              <li>Google Maps APIs</li>
            </ul>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Projects = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
    console.log("PROJECT SELECT:", projectName);
  };
  console.log("Selected project:", selectedProject);

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  useEffect(() => {
    // Perform any action when selectedProject changes
    // For example, you can update the content displayed in the project-screen
    console.log("Selected project changed:", selectedProject);
  }, [selectedProject]);

  return (
    <div
      ref={ref}
      id='Projects'
      className='projects-container flex flex-col mt-[10%] w-[100vw] h-[200vh] justify-center'
    >
      <div
        ref={scrollRef}
        className='flex flex-col w-[100%] h-[100%] mt-[10%] items-center'
      >
        <h1>PROJECTS CATALOGUE</h1>
        <div className='project-screen w-[100%] h-[100%] '>
          {selectedProject && projectScreenContent(selectedProject)}
        </div>
        <div className='project-grid w-[75%] h-[50%] mt-[5%] overflow-x-scroll'>
          <div
            className='row-start-1 col-start-1 w-[100%]'
            onClick={() => handleProjectClick("Angulens")}
          >
            <ProjectCard name={"Angulens"} />
          </div>
          <div
            className='row-start-1 col-start-2 w-[100%]'
            onClick={() => handleProjectClick("InterviewPrep")}
          >
            <ProjectCard name={"InterviewPrep"} />
          </div>
          <div
            className='row-start-1 col-start-3 w-[100%]'
            onClick={() => handleProjectClick("LoCoups")}
          >
            <ProjectCard name={"LoCoups"} />
          </div>
          <div
            className='row-start-1 col-start-4 w-[100%]'
            onClick={() => handleProjectClick("LoCoups")}
          >
            <ProjectCard name={"LoCoups"} />
          </div>
        </div>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
