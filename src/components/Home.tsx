// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";

const Home = () => {
  return (
    <div className='flex flex-col absolute max-w-[1200px] h-[90vh]'>
      {/* <hr className='justify-items-center align-baseline'></hr> */}
      {/* <div className='name inline-flex flex-row font-aileronRegular'>
        <div className='w-[50%] justify-items-center'>NATHAN A. </div>
        <div className='treadmill-container w-[48%]'>
          <div className='treadmill-text font-aileronThin'>
            <ul>
              <li>Full Stack Developer</li>
              <li>Frontend Focused</li>
              <li>Creative</li>
            </ul>
            <ul>
              <li>Full Stack Developer</li>
              <li>Frontend Focused</li>
              <li>Creative</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='w-[100%] justify-items-center align-baseline'></hr> */}
      <div className='welcome font-aileronHeavy w-[50%] h-[108px]'>WELCOME</div>
      <div className='shrink h-[500px] top-[-100px] relative'>
        <RecordHome />
      </div>
      <div className='w-[75%] translate-x-[35%] relative shrink object-bottom'>
        <div className='w-[100%] text-align-center h-[100%]  m-2 p-4 font-aileronHeavy'>
          <h1>I'm NATHAN.PA</h1>
          <hr className='w-[100%] justify-items-center align-baseline'></hr>
          <p className='font-aileronThin'>
            Building awesome, responsive, and optimized web products is my
            passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* <div className='treadmill-container text-6xl'>
            <div className='treadmill-text'>
              <ul>
                <li>Full Stack Developer.</li>
                <li>Frontend Focused.</li>
                <li>Creative.</li>
              </ul>
              <ul>
                <li>Full Stack Developer.</li>
                <li>Frontend Focused.</li>
                <li>Creative.</li>
              </ul>
            </div>
          </div> */

/* <div className='flex font-aileronHeavyItalic '>
        <div className='border-indigo border-2 w-[25%]'>
          <div className='record'>
            <Link to='/'>Home</Link>
          </div>
        </div>
        <div className='border-indigo border-2 w-[25%]'>
          <div className='record'>
            <Link to='/about'>About</Link>
          </div>
        </div>
        <div className='border-indigo border-2 w-[25%]'>
          <div className='record'>
            <Link to='/projects'>Projects</Link>
          </div>
        </div>
        <div className='border-indigo border-2 w-[25%]'>
          <div className='record'>
            <Link to='/experience'>Experience</Link>
          </div>
        </div>
      </div> */
