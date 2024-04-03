// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Carousel from "./ProjectCarousel";

const projectScreenContent = (project: string) => {
  switch (project) {
    case "Angulens":
      return (
        <div className='project-screen-content'>
          <h2 className='relative h-[50%] px-2 col-start-1 row-start-1 font-aileronHeavy'>
            ANGULENS
          </h2>
          <div className='relative w-[75%] ml-2 justify-self-center'>
            <h3>OPEN SOURCE PRODUCT</h3>
            <p>
              Visual Studio Code Extension built with Angular focused on
              visualizing component hierarchies, dependencies, and component
              data flows in selected Angular Projects.
            </p>
          </div>
          <div className='row-span-2 row-start-4'>
            <h3>TECHNOLOGIES</h3>
            <ul className='projects-tech row-span-2'>
              <li className='col-start-1 row-start-1'>Angular</li>
              <li className='col-start-1 row-start-2'>TypeScript</li>
              <li className='col-start-1 row-start-3'>Webview API</li>
              <li className='col-start-2 row-start-1'>Klaw-Sync</li>
              <li className='col-start-2 row-start-2'>VS Code Extension API</li>
            </ul>
          </div>
        </div>
      );
    case "InterviewPrep":
      return (
        <div className='project-screen-content'>
          <h2 className='w-[100%] px-2 row-start-1 font-aileronHeavy'>
            PREPPER DECK
          </h2>
          <div className='w-[75%] ml-2 row-start-2 justify-self-center'>
            <h3>WEB APPLICATION</h3>
            <p>
              Full-stack React web-based application to aid in preparing for
              software engineering interviews. React’s component-based
              architecture allowed users to construct thoughtful answers to
              questions onto card components, which could be contained within
              Deck Components.
            </p>
          </div>
          <div className='row-span-2 row-start-4'>
            <h3>TECHNOLOGIES</h3>
            <ul className='projects-tech row-span-2'>
              <li className='col-start-1 row-start-1'>React</li>
              <li className='col-start-1 row-start-2'>Redux</li>
              <li className='col-start-1 row-start-3'>Express</li>
              <li className='col-start-2 row-start-1'>PostgreSQL</li>
              <li className='col-start-2 row-start-2'>OAuth</li>
            </ul>
          </div>
        </div>
      );

    case "LoCoups":
      return (
        <div className='project-screen-content'>
          <h2 className='w-[100%]  px-2 row-start-1 font-aileronHeavy'>
            LOCOUPS
          </h2>
          <div className='w-[75%] ml-2 row-start-2 mt-[-5%]justify-self-center'>
            <h3>WEB APPLICATION</h3>
            <p>
              Yelp inspired, full-stack Next.js application aiming to help local
              businesses by showcasing possible coupons & deals from those
              businesses to users.
            </p>
          </div>
          <div className='row-span-2 row-start-4'>
            <h3>TECHNOLOGIES</h3>
            <ul className='projects-tech row-span-2'>
              <li className='col-start-1 row-start-1'>React</li>
              <li className='col-start-1 row-start-2'>Next.js</li>
              <li className='col-start-1 row-start-3'>PostgreSQL</li>
              <li className='col-start-2 row-start-1'>GraphQL</li>
              <li className='col-start-2 row-start-2'>Prisma</li>
              <li className='col-start-2 row-start-3'>Google Maps APIs</li>
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

  const cards = [
    { name: "Angulens" },
    { name: "InterviewPrep" },
    { name: "LoCoups" },
  ];

  const renderedCards = cards.map((cardProps, index) => (
    // className={`row-start-1 col-start-${index + 1} w-[100%]`}
    <div onClick={() => handleProjectClick(cardProps.name)} key={index}>
      <ProjectCard {...cardProps} />
    </div>
  ));

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  useEffect(() => {
    console.log("Selected project changed:", selectedProject);
  }, [selectedProject]);

  return (
    <div
      ref={ref}
      id='Projects'
      className='projects-container flex flex-col w-screen h-[200vh] justify-center'
    >
      <div
        ref={scrollRef}
        className='flex flex-col w-[100%] h-[100%] mt-[10%] items-center'
      >
        <h1>PROJECTS CATALOGUE</h1>
        <div className='project-screen w-[100%] h-[100%] '>
          {selectedProject && projectScreenContent(selectedProject)}
        </div>
        <div className='w-full'>
          <Carousel cards={renderedCards} />
        </div>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;

{
  /* <div className='project-grid w-full mt-[5%] overflow-x-scroll overflow-y-visible'>
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
</div> */
}
