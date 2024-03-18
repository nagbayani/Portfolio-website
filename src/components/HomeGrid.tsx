import React, { useState, useEffect, useRef, forwardRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";
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
import Treadmill from "./Treadmill";

const HomeGrid = () => {
  return (
    // grid grid-rows-4 grid-cols-3
    <div className='home-grid w-[100%] h-[100%] relative'>
      <div className='home-profile relative row-start-1 col-start-6  z-7'>
        {/* <div className='translate-y-[200%]'>
        </div> */}
        <div className='z-7 overflow-hidden relative'>
          <HomePicSvg />
          <Treadmill />
        </div>
        <div className='top-profile translate-x-[11%] absolute'>
          <ProfileTopSvg />
        </div>
      </div>

      {/* <h1 className='font-aileronRegular row-start-1 col-start-1 relative self-end translate-x-[11%] translate-y-[35%]'> */}
      <h2 className='relative font-aileronRegular row-start-2 col-start-1 translate-y-[-10%]'>
        BUILDING
      </h2>
      <h2 className='relative font-aileronThin row-start-2 col-start-2 translate-y-[40%]'>
        RESPONSIVE
      </h2>
      <h2 className='relative font-aileronThin row-start-3 col-start-2 translate-y-[-5%]'>
        CREATIVE
      </h2>
      <h2 className='relative font-aileronThin row-start-3 col-start-2 translate-y-[45%]'>
        INTUITIVE
      </h2>
      <h2 className='relative font-aileronThin row-start-4 col-start-2 translate-y-[0%]'>
        IMPACTFUL
      </h2>
      <h2 className='relative row-start-4 col-start-1 col-span-6 translate-y-[55%]'>
        WEB PRODUCTS
      </h2>
      <h2 className='relative row-start-5 col-start-2 col-span-6 translate-y-[0%]'>
        IS MY PASSION.
      </h2>

      <div className='relative font-aileronRegular row-start-6 col-start-2 col-span-2 row-span-1'>
        <motion.button
          id='see-work-btn'
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <span className='btn-text'>SEE MY WORK</span>
          <svg
            id='see-work-svg'
            fill='none'
            strokeWidth={1.5}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
            />
          </svg>
        </motion.button>
      </div>

      {/* <Treadmill /> */}
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
