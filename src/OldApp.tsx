import React, { useRef, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useInView, useAnimation, scroll } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Treadmill from "./components/Treadmill";
import Layer from "./AppLayer";

const components = [
  { id: "1home", children: <Home /> },
  { id: "2projects", children: <Projects /> },
  { id: "3about", children: <About /> },
  { id: "4contact", children: <Contact /> },
];

const OldApp = () => {
  // const homeRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  scroll((progress) => console.log(progress));
  const scrollToComponent = () => {
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    console.log(ref, "App ref");
    console.log("App Ref in View", isInView);
  }, [isInView, ref]);

  return (
    <div>
      <div className='relative w-[100vw] h-[100vh]'>
        <div className='fixed z-20 h-[80px]'>
          <Treadmill />
          <div className='nav-header font-aileronThin'>
            <h1 className='text-center mr-32'>NATHAN AGBAYANI</h1>
            <ul className='flex flex-row justify-between'>
              <li> PROJECTS </li>
              <li> / </li>
              <li> ABOUT </li>
              <li> / </li>
              <li> CONTACT</li>
            </ul>
          </div>
        </div>
        <div className=''>
          <Home />
        </div>
      </div>
      <div className='relative z-1 mt-[20%]'>
        <Projects />
      </div>
      <div className='relative mt-[20%]'>
        <Contact />
      </div>
      <div className='relative mt-[20%]'>
        <About />
      </div>

      <div className='bg'></div>
    </div>
  );
};

export default OldApp;
