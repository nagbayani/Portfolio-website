import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";


const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("About ref", ref);
    console.log("About in View", isInView);
  }, [isInView, ref]);

  return (
    <motion.section ref={ref} id='About'>
      <motion.div className='flex flex-col w-[100%] h-[100vh] items-center'>
        <h1>ABOUT CATALOGUE</h1>
      </motion.div>
    </motion.section>
  );
};

export default About;
