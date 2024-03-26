// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  return (
    <div
      ref={ref}
      id='Projects'
      className='projects-container flex flex-col w-[100vw] h-[100vh] justify-center'
    >
      <div
        ref={scrollRef}
        className='flex flex-col w-[100%] h-[100%] items-center'
      >
        <h1>PROJECTS CATALOGUE</h1>
        <div className='project-grid w-[75%] h-[100%] mt-[5%] overflow-x-scroll'>
          <div className='row-start-1 col-start-1 w-[100%]'>
            <ProjectCard name={"Angulens"} />
          </div>
          <div className='row-start-1 col-start-2 w-[100%]'>
            <ProjectCard name={"InterviewPrep"} />
          </div>
          <div className='row-start-1 col-start-3 w-[100%]'>
            <ProjectCard name={"LoCoups"} />
          </div>
          <div className='row-start-1 col-start-4 w-[100%]'>
            <ProjectCard name={"LoCoups"} />
          </div>
        </div>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
