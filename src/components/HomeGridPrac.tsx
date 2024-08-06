import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAnimate,
  stagger,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
import HomePicSvg from "../svg/homepic.svg";
import ProfileTopSvg from "../svg/profiletop.svg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const HomeGridPrac = ({ projectClick, contactClick }) => {
  return (
    <div className='square'>
      <div className='home-grid font-garamond'>
        {/* <div className='home-profile relative translate-y-[-6%] mx-[-1em] z-7  '> */}
        <div className='home-profile relative mx-[-1em] z-7  '>
          <HomePicSvg />
          {/* <div className='top-profile w-[100%] overflow-hidden absolute'></div>
          <ProfileTopSvg /> */}
        </div>
        <div className='grid-left-1'>
          <h1 className='relative  justify-self-end self-end row-start-3 col-start-1 z-10'>
            Building
          </h1>

          <div className='relative rcii'>
            <h1>creative</h1>
          </div>
        </div>
        <div className='grid-right-1 '>
          <div className='relative rcii-3'>
            <h1>impactful</h1>
          </div>
          <div className='relative rcii-4'>
            <h1>+ intuitive</h1>
          </div>
        </div>
        <div className='grid-left-2'>
          <h1 className='text-end'>web</h1>
          <h1 className='text-end mt-[-.75em]'>products</h1>
        </div>
        <div className='grid-right-2'>
          <h1>is my</h1>
          <h1 className='mt-[-.75em]'>passion.</h1>
        </div>
        {/* <div className='relative font-aileronRegular justify-self-center self-center row-start-6 col-start-1'>
          <motion.button id='see-work-btn' onClick={projectClick}>
            <span className='btn-text' onClick={projectClick}>
              MY WORK
            </span>
          </motion.button>
        </div>
        <div className='relative font-aileronRegular justify-self-center self-center row-start-6 col-start-2'>
          <motion.button id='see-work-btn' onClick={projectClick}>
            <span className='btn-text' onClick={projectClick}>
              RESUME
            </span>
          </motion.button>
        </div>
        <div className='relative font-aileronRegular justify-self-center self-center items-end row-start-6 col-start-3'>
          <motion.button id='see-work-btn' onClick={contactClick}>
            <span className='btn-text' onClick={contactClick}>
              LET'S CONNECT
            </span>
          </motion.button>
        </div> */}
        <div className='grid-buttons row-start-6 row-span-1 col-start-1 col-span-3 flex justify-center items-center  font-aileronRegular'>
          <motion.button
            id='see-work-btn'
            onClick={projectClick}
            className='mx-2'
          >
            <span className='btn-text'>MY WORK</span>
          </motion.button>
          <motion.button
            id='see-work-btn'
            onClick={projectClick}
            className='mx-2'
          >
            <span className='btn-text'>RESUME</span>
          </motion.button>
          <motion.button
            id='see-work-btn'
            onClick={contactClick}
            className='mx-2'
          >
            <span className='btn-text'>CONNECT</span>
          </motion.button>
        </div>
        <div className='row-start-7 row-span-1 col-start-1 col-span-3 flex justify-between items-center font-aileronRegular'>
          <motion.button
            id='see-work-btn'
            className='flex self-start justify-center items-center gap-2 ml-24 mr-6'
            onClick={() =>
              window.open("https://github.com/nagbayani", "_blank")
            }
          >
            <VscGithub size={24} className='grid-icon' />
            <span>GitHub</span>
          </motion.button>
          <motion.button
            id='see-work-btn'
            className=' flex self-start justify-center items-center gap-2 mr-24 ml-6'
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nathan-agbayani-951ab6262/",
                "_blank"
              )
            }
          >
            <AiOutlineLinkedin size={24} className=' grid-icon' />
            <span>LinkedIn</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomeGridPrac;
{
  /* <div className='relative font-aileronRegular justify-self-end top-[-15%] left-[35%] row-start-7 col-start-1'> */
}

{
  /* <div className='relative font-aileronRegular justify-self-start items-end top-[-15%] left-[-35%] row-start-7 col-start-3'> */
}
