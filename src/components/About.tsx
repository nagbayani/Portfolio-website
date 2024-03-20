// About.js
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("About ref", ref);
    console.log("About in View", isInView);
  }, [isInView, ref]);

  return (
    <div ref={ref} className='about w-[100%] h-[100vh] overflow-hidden'>
      <h2>About</h2>
    </div>
  );
};

export default About;
