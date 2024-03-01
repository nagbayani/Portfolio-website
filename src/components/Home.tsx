// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";

const Home = () => {
  return (
    <div className='flex flex-col w-[100%]'>
      <hr className='w-[100%] justify-items-center align-baseline'></hr>
      <div className='name inline-flex flex-row font-aileronRegular'>
        <div className='w-[50%] justify-items-center'>NATHAN AGBAYANI | </div>
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
      <hr className='w-[100%] justify-items-center align-baseline'></hr>
      <div className='flex flex-row h-[100%]'>
        <div className='w-[50%] translate-x-[-25%] tshrink'>
          <RecordHome />
        </div>
        <div className='w-[50%] justify-center shrink'>
          <div className='w-[50%] text-align-center translate-x-[50%] translate-y-[15%] h-[50%] border-black border-2 p-4 font-aileronHeavy'>
            <h1>WELCOME</h1>
            <p className='font-aileronThin'>
              Building awesome, responsive, and optimized web applications is my
              passion.
            </p>
          </div>
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
