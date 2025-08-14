// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import Card from "./Card";
import { AnimatedCard } from "./ProjectAnimatedCard";
import { projects, technologies } from "../schema/projects-technologies";
// import Carousel from "./Carousel";

const Projects = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  return (
    <div ref={ref} id='projects' className='flex flex-col w-screen  h-full'>
      <div
        // ref={scrollRef}
        className='projects-container flex flex-col w-[100%] h-[100%] mt-16 items-center '
      >
        <h1 id='projects-header' className='font-garamond '>
          Featured Projects
        </h1>
        {/* Map out Project Cards */}
        {projects.map((project) => (
          <AnimatedCard key={project.id} project={project} />
        ))}
        <hr className='w-[100%]'></hr>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className='card-description w-[50%]'>
          <h1 className='font-garamond'>Angulens</h1>
          <h4 className='card-subheader font-aileronRegular'>
            OPEN SOURCE PRODUCT
          </h4>
          <p>
            Visual Studio Code Extension built with Angular focused on
            visualizing component hierarchies, dependencies, and component data
            flows in selected Angular Projects.
          </p>
        </div>
        <div className='card-description  w-[50%]'>
          <h1 className='font-garamond'>InterFluent</h1>
          <h4 className='card-subheader font-aileronRegular'>
            FULLSTACK WEB APPLICATION
          </h4>
          <p>
            Fullstack Next.js Interview Preparation Application allows users to
            write and organize answers to interview questions on cards within
            customizable decks, featuring a rich text editor for personalized
            responses. Users can create mock interviews and import cards or
            decks for focused practice.
          </p>
        </div>

        <div className='card-description  w-[50%]'>
          <h1 className='font-garamond'>LoCoups</h1>
          <h4 className='card-subheader font-aileronRegular'>
            FULLSTACK WEB APPLICATION
          </h4>
          <p>
            Yelp inspired, full-stack Next.js application aiming to help local
            businesses by showcasing possible coupons & deals from those
            businesses to users.
          </p>
        </div>
      </div> */
}
