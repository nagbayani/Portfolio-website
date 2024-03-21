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
    <div className='home-grid w-[100%] h-[100%] font-garamond relative'>
      <div className='home-profile relative row-start-1 col-start-4 translate-y-[-5%] mx-[-2.5em] z-7 '>
        <HomePicSvg />
        <div className='top-profile w-[100%] row-start-1 col-start-4 overflow-hidden absolute'>
          <ProfileTopSvg />
        </div>
      </div>
      <h1 className='relative justify-self-end self-end row-start-2 col-start-2 mb-[-.5em] z-50'>
        Building
      </h1>
      <div className='rcii relative row-start-3 col-start-2 z-0 justify-self-end self-start'>
        <h2 className='relative z-[1] opacity'>responsive</h2>
        <h2 className='relative z-[-1] mt-[-2rem]'>+ creative</h2>
      </div>
      <div className='rcii-2 relative row-start-4 self-start col-start-4 z-0'>
        <h2 className='relative z-[1]'>impactful</h2>
        <h2 className='relative z-[-1] mt-[-1.5rem]'>+ intuitive</h2>
      </div>
      <div className='relative row-start-5 col-start-2 mr-[.5rem]'>
        <h1 className='text-end'>web</h1>
        <h1 className='text-end mt-[-.75em]'>products</h1>
      </div>
      <div className='relative row-start-6 col-start-4'>
        <h1>is my</h1>
        <h1 className='mt-[-.75em]'>passion.</h1>
      </div>
      <div className='relative font-aileronThin justify-self-center translate-x-[0%] row-start-8 col-start-3'>
        <button id='see-work-btn'>
          <span className='btn-text'>SEE MY WORK </span>
        </button>
      </div>
      {/* <div className='col-span-8 translate-y-[-40%]'>
        <Treadmill />
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
