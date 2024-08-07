// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import Card from "./Card";
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
    <div ref={ref} id='Projects' className='flex flex-col w-screen  h-full'>
      <div
        ref={scrollRef}
        className='projects-container flex flex-col w-[100%] h-[100%] mt-16 items-center'
      >
        <h1 id='projects-header' className='font-garamond '>
          Projects I've built.
        </h1>
        <div className='w-full'>
          <Card name='Angulens' />
        </div>
        <div className='w-full'>
          <Card name='InterviewPrep' />
        </div>
        <div className='w-full'>
          <Card name='LoCoups' />
        </div>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
