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
      <div className='home-profile relative translate-y-[-5%] mx-[-1em] z-7 '>
        <HomePicSvg />
        <div className='top-profile w-[100%] overflow-hidden absolute'>
          <ProfileTopSvg />
        </div>
      </div>
      <h2 className='relative justify-self-end self-end row-start-2 col-start-1 mb-[-.5em] z-10'>
        Building
      </h2>
      <div className='flex flex-col relative row-start-3 col-start-1 z-0 justify-self-end self-start'>
        <h2 className='relative rcii'>responsive</h2>
        <h2 className='relative rcii-2 mt-[-1rem]'>& creative</h2>
      </div>
      <div className='relative row-start-4 justify-self-start col-start-3 z-0'>
        <h2 className='relative rcii-3 z-[1]'>impactful</h2>
        <h2 className='relative rcii-4 mt-[-1rem]'>& intuitive</h2>
      </div>
      <div className='relative row-start-5 col-start-1 mr-[.5rem] z-10'>
        <h2 className='text-end'>web</h2>
        <h2 className='text-end mt-[-.75em]'>products</h2>
      </div>
      <div className='relative row-start-6 col-start-3 z-10'>
        <h2>is my</h2>
        <h2 className='mt-[-.75em]'>passion.</h2>
      </div>
      <div className='relative font-aileronRegular justify-self-end top-[50%] left-[25%]  row-start-7 col-start-1'>
        <button id='see-work-btn' onClick={() => projectsRef()}>
          <span className='btn-text'>SEE MY WORK </span>
        </button>
      </div>
      <div className='relative font-aileronRegular justify-self-start items-end top-[50%] left-[-25%] row-start-7 col-start-3'>
        <button id='connect-btn' onClick={() => contactRef()}>
          <span className='btn-text'>LET'S CONNECT</span>
        </button>
      </div>
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
