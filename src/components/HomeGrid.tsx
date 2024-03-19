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
      <div className='home-profile relative row-start-1 col-start-4  z-7'>
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

      <h2 className='relative font-aileronRegular row-start-2 col-start-1 translate-y-[-10%]'>
        BUILDING
      </h2>
      <h2 className='relative font-aileronThin row-start-3 col-start-2 col-span-2 translate-x-[-85%] translate-y-[5%]'>
        RESPONSIVE
      </h2>
      <h2 className='relative font-aileronThin row-start-4 col-start-2 col-span-3 translate-x-[-42%] translate-y-[-35%]'>
        + CREATIVE
      </h2>
      <h2 className='relative font-aileronThin row-start-4 col-start-9 col-span-3 translate-y-[-10%]'>
        IMPACTFUL
      </h2>
      <h2 className='relative font-aileronThin row-start-4 col-start-9 col-span-3 translate-x-[1%] translate-y-[45%]'>
        + INTUITIVE
      </h2>
      <h2 className='relative row-start-6 col-start-2 col-span-2 translate-y-[35%]'>
        WEB
      </h2>
      <h2 className='relative row-start-7 col-start-2 col-span-2 translate-x-[-85%] translate-y-[-20%]'>
        PRODUCTS
      </h2>
      <h2 className='relative row-start-6 col-start-9 col-span-3 translate-y-[35%]'>
        IS MY
      </h2>
      <h2 className='relative row-start-7 col-start-9 col-span-2 translate-y-[-20%]'>
        PASSION.
      </h2>

      {/* <div className='relative font-aileronRegular self-center translate-x-[10%] row-start-6 col-start-2 col-span-1 row-span-1'>
        <button id='see-work-btn'>
          <span className='btn-text'>SEE MY WORK</span>
        </button>
      </div> */}
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
