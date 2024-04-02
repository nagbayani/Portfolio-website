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

const HomeGrid = ({ projectClick, contactClick }) => {
  return (
    <div className='home-grid w-[100vw] h-[100vh] font-garamond relative'>
      <div className='home-profile relative translate-y-[-6%] mx-[-1em] z-7 '>
        <HomePicSvg />
        <div className='top-profile w-[100%] overflow-hidden absolute'>
          <ProfileTopSvg />
        </div>
      </div>
      <div className='grid-left-1'>
        <h1
          // style={{ WebkitTextFillColor: "var(--orange)" }}
          className='relative  justify-self-end self-end row-start-3 col-start-1 left-[.35em]  z-10'
        >
          Building
        </h1>
        {/* <div className='relative rcii-2'>
          <h1>responsive</h1>
        </div> */}
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
        <h1
          // style={{ WebkitTextFillColor: "var(--orange)" }}
          className='text-end'
        >
          web
        </h1>
        <h1
          // style={{ WebkitTextFillColor: "var(--orange)" }}
          className='text-end mt-[-.75em]'
        >
          products
        </h1>
      </div>
      <div className='grid-right-2'>
        <h1
        // style={{ WebkitTextFillColor: "var(--orange)" }}
        >
          is my
        </h1>
        <h1 className='mt-[-.75em]'>passion.</h1>
      </div>
      <div className='relative font-aileronRegular justify-self-end top-[-15%] left-[35%] row-start-8 col-start-1'>
        <motion.button id='see-work-btn' onClick={projectClick}>
          <span className='btn-text' onClick={projectClick}>
            SEE MY WORK
          </span>
        </motion.button>
      </div>
      <div className='relative font-aileronRegular justify-self-start items-end top-[-15%] left-[-35%] row-start-8 col-start-3'>
        <motion.button id='connect-btn' onClick={contactClick}>
          <span className='btn-text' onClick={contactClick}>
            LET'S CONNECT
          </span>
        </motion.button>
      </div>
      {/* <hr className=''></hr> */}
    </div>
  );
};

export default HomeGrid;

{
  /* <div className='treadmill w-[100%] row-start-7 col-start-1 col-span-8 relative'>
  <div className='treadmill-container'>
    <div className='treadmill-text font-aileronThin'>
      <ul>
        <li>Frontend Focused.</li>
        <li>Full Stack Developer.</li>
      </ul>
      <ul>
        <li>Frontend Focused.</li>
        <li>Full Stack Developer.</li>
      </ul>
    </div>
  </div>
</div> */
}
