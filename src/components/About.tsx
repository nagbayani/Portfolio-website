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
    <div ref={ref} className='w-[100vw] h-[100vh]'>
      <h2>About</h2>;
    </div>
  );
};

export default About;
