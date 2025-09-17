import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Waves from "./Waves";
import ProfilePic from "../svg/linkedInProfile.svg";

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
    <div ref={ref} id='about' className='flex items-center h-[100vh] mt-8'>
      <div className='container mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h1 className='m-16 font-aileronHeavy'>About Me</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative w-full max-w-md mx-auto'>
            <div
              className='absolute inset-0 
            bg-gradient-to-br from-gray-900 via-[#1a4526] to-green-900
            rounded-3xl transform rotate-6'
            ></div>
            <div className='relative bg-white p-2 rounded-3xl shadow-2xl'>
              {/* <img
                alt='Profile'
                className='w-full h-96 object-cover rounded-2xl'
              /> */}
              <div className='w-full h-96 rounded-2xl overflow-hidden'>
                <ProfilePic className='w-full h-full object-cover' />
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-aileron font-bold text-gray-900 mb-4'>
                Hi, I'm Nathan
              </h3>

              <p className='text-gray-600 leading-relaxed mb-6 font-aileron'>
                I'm a software engineer based in Los Angeles, California.
              </p>
              <p className='text-gray-600 leading-relaxed mb-6 font-aileron'>
                As an engineer, I'm driven by the idea of innovation — how it's
                the driving force behind progressing systems, strengthening
                infrastructures, and empowering communities. With an educational
                and professional background in healthcare, I've seen firsthand
                the impact that technology can have on people’s lives.
              </p>
              <p className='text-gray-600 leading-relaxed mb-6 font-aileron'>
                My passions include singing, hitting licks on the guitar,
                playing volleyball, and reading manga and science fiction.
              </p>
            </div>
          </div>
        </div>
      </div>

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
