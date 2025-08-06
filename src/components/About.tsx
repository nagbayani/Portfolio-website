import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Waves from "./Waves";
// import { MdOutlineFaceRetouchingNatural } from "react-icons/md";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("About ref", ref);
    console.log("About in View", isInView);
  }, [isInView, ref]);

  return (
    <div
      ref={ref}
      id='Projects'
      className='flex flex-col items-center h-[100vh] mt-8'
    >
      <h1 className='m-16 font-garamond'>About Me</h1>
      <div className='flex flex-col gap-4 text-start p-4 rounded-lg border-2 border-black mx-[25%]'>
        <p className='font-aileron'>
          Hey there! You can call me Nathan or Nate, not Nathaniel though.
        </p>
        <p className='font-aileron text-start'>
          I'm a software engineer based in Los Angeles, California.
        </p>
        <p className='font-aileron text-start'>
          As an engineer, I'm driven by the idea of innovation, and how it is
          the driving force in progressing systems, strengthening
          infrastructures, and empowering communities. With an educational and
          professional background in healthcare, I've seen firsthand the impact
          that technology can have on the lives of others.
        </p>
        <p className='font-aileron text-start'>
          My passions include singing, hitting licks on the guitar, playing
          volleyball, reading manga and science fiction.
        </p>
      </div>
      {/* <MdOutlineFaceRetouchingNatural /> */}
    </div>
  );
};

export default About;
