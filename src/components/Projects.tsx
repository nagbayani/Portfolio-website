// Home.js
import React from "react";
import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className='flex flex-row h-[75%] align-center items-center justify-center h-screen'>
      <button className='border-indigo border-[2px]' onClick={handleClick}>
        Hi
      </button>
      <ul
        className='project-ul flex flex-row items-center border-indigo w-[50%] h-[50%px] border-[1px] rounded-lg p-4 text-indigo'
        ref={ref}
      >
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
  );
};

export default Projects;
