import React, { useRef, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  useInView,
  useAnimation,
  scroll,
  useScroll,
  useSpring,
  motion,
} from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Treadmill from "./components/Treadmill";
import Layer from "./AppLayer";

const components = [
  {
    id: "home",
    children: (
      <Home
        projectClick={() => scrollComponentIntoView("projects")}
        contactClick={() => scrollComponentIntoView("contact")}
      />
    ),
  },
  { id: "projects", children: <Projects /> },
  { id: "contact", children: <Contact /> },
  { id: "about", children: <About /> },
];
const scrollComponentIntoView = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // scroll((progress) => console.log(progress));

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    console.log(ref, "App ref");
    console.log("App Ref in View", isInView);
  }, [isInView, ref]);

  return (
    <div>
      <div className='fixed z-20 h-[80px] mb-[20px]'>
        <Treadmill />
        <div className='nav-header font-aileronRegular grow-1'>
          <h1>NATHAN A.</h1>
          <ul className='flex font-aileronThin flex-row justify-between mr-32'>
            <li onClick={() => scrollComponentIntoView("projects")}>
              PROJECTS
            </li>
            <li> / </li>
            <li onClick={() => scrollComponentIntoView("about")}> ABOUT </li>
            <li> / </li>
            <li onClick={() => scrollComponentIntoView("contact")}> CONTACT</li>
          </ul>
          {/* <hr></hr> */}
        </div>
      </div>
      <>
        {components.map((component) => (
          <Layer id={component.id} children={component.children} />
        ))}
        <motion.div className='progress' style={{ scaleX }} />
      </>
      {/* <div className='bg'></div> */}
    </div>
  );
};

export default App;

{
  /* <div className=''>
          <Home />
        </div>
      <div className='relative z-1 mt-[20%]'>
        <Projects />
      </div>
      <div className='relative mt-[20%]'>
        <Contact />
      </div>
      <div className='relative mt-[20%]'>
        <About />
      </div> */
}
