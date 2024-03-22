// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollXProgress } = useScroll({ container: ref });

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
        <h1>PROJECTS CATALOGUE</h1>
        <div className='h-[50%]'></div>
        {/* <div className='row-start-1 col-start-1 w-[75%]'> */}
        {/* <div className='flex w-[50%] h-[50%]'>
          <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        </div> */}
        {/* <div className='row-start-2 col-start-1'>
          <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          Interview Prep Application
        </div> */}
        {/* <div className='row-start-3 col-start-1'>
          <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          Local Coupons Deals
        </div> */}
        {/* <div className='row-start-4 col-start-2'>
            <ProjectCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
          </div> */}
        {/* <div className='project-grid w-[100%] h-[100%]'></div> */}
        <ul className='project-ul flex flex-row items-center w-[90%] h-[45%] border-[1px] rounded-lg p-4 text-indigo'>
          <li className='project-li rounded-lg m-2 min-w-[25%] h-[100%]'>
            <ProjectCard
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              name={"Angulens"}
            />
          </li>
          <li className='project-li rounded-lg m-2  min-w-[25%] h-[100%]'>
            <ProjectCard
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              name={"InterviewPrep"}
            />
          </li>
          <li className='project-li rounded-lg m-2  min-w-[25%] h-[100%]'>
            <ProjectCard
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              name={"LoCoups"}
            />
          </li>
          <li className='project-li rounded-lg m-2  min-w-[25%] h-[100%]'>
            <ProjectCard
              isFlipped={isFlipped}
              setIsFlipped={setIsFlipped}
              name={"angulens"}
            />
          </li>
        </ul>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;

{
  /* <button className='border-indigo border-[2px]' onClick={handleClick}>
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
        </ul> */
}
