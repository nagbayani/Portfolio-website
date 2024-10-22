import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, useAnimation, useInView } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const contactRef = useRef(null);
  // const projectsRef = useRef(null);
  // const controls = useAnimation();

  // const scrollToComponent = async (ref) => {
  //   await controls.start({
  //     y: ref.current.offsetTop,
  //     transition: { duration: 0.5 },
  //   });
  //   window.scrollTo(0, ref.current.offsetTop);
  // };
  // console.log(homeRef, "App homeref");
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(ref, "App ref");
    console.log("App Ref in View", isInView);
  }, [isInView, ref]);

  return (
    <div>
      {/* <button onClick={() => scrollToComponent(aboutRef)}>About</button>
      <button onClick={() => scrollToComponent(contactRef)}>Contact</button> */}
      <div>
        <Home />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default App;
