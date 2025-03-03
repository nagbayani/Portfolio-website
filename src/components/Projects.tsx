// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Projects ref", ref);
    console.log("Projects in View", isInView);
  }, [isInView, ref]);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div ref={ref} className='flex flex-col w-[100vw] h-[100vh] justify-center'>
      <div className='flex flex-col w-[100%] h-[100%] items-center'>
        <h1>PROJECTS</h1>
        <button className='border-indigo border-[2px]' onClick={handleClick}>
          Hi
        </button>
        <ul className='project-ul flex flex-row items-center border-indigo w-[50%] h-[50%px] border-[1px] rounded-lg p-4 text-indigo'>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
          <li className='project-li rounded-lg m-2 text-indigo'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </li>
        </ul>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
