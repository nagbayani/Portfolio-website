// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import Card from "./Card";
import Carousel from "./Carousel";

const Projects = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  return (
    <div
      ref={ref}
      id='Projects'
      className='projects-container flex flex-col w-screen h-[120vh] justify-center'
    >
      <div
        ref={scrollRef}
        className='flex flex-col w-[100%] h-[100%] mt-[10%] items-center'
      >
        <h1>PROJECTS CATALOGUE</h1>
        <div className='w-full h-[100%]'>
          <Carousel />
        </div>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
