import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Waves from "./Waves";
import ProfilePic from "../svg/linkedInProfile.svg";
import Skills from "./Skills";

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
    <div ref={ref} id='about' className='flex flex-col h-full mb-16'>
      <div className='container mx-auto px-6 mt-16'>
        {/* <div className='text-center mb-16'>
          <h1 className='m-16 font-aileronRegular'>About Me</h1>
        </div> */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative w-full max-w-md mx-auto'>
            <div
              className='absolute inset-0 
            bg-gradient-to-br from-gray-900 via-[#ea5038] to-[#ea5038]
            rounded-3xl transform rotate-6'
            ></div>
            <div className='relative bg-white p-2 rounded-3xl shadow-2xl'>
              {/* <div className='w-full h-48 rounded-2xl overflow-hidden'>
                <ProfilePic className='w-full h-full object-cover ' />
              </div> */}
            </div>
          </div>

          <div className='space-y-6'>
            <div>
              <p className='font-aileronThin'>MORE ABOUT ME</p>
              <h1 className='font-garamond font-bold text-gray-900'>
                Hi, I'm Nathan
              </h1>

              <p className='text-gray-600 leading-relaxed font-aileron'>
                I'm an IT professional and full-stack developer with a strong
                background in scripting, automation, and web development. I
                specialize in creating tools and workflows that save time,
                improve data accuracy, and streamline operations, especially in
                technical and data-driven environments.
              </p>
              <p className='text-gray-600 leading-relaxed font-aileron'>
                I specialize in Full-stack development. Using my foundation of
                skills in frontend and backend development, I love to build, to
                solve complex problems, provide solutions, and bringing ideas to
                life!
              </p>
              <p className='text-gray-600 leading-relaxed font-aileron'>
                My passions include singing, hitting licks on the guitar,
                playing volleyball, and reading manga and science fiction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />

      {/* <MdOutlineFaceRetouchingNatural /> */}
    </div>
  );
};

export default About;

{
  /* <div className='flex flex-col gap-4 text-start p-4 rounded-lg border-2 border-black mx-[25%]'>
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
      </div> */
}
