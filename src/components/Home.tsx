// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";

const Home = () => {
  return (
    <div className='flex flex-col w-[100%]'>
      <div className='name inline-flex flex-row font-aileronRegular'>
        <div className='w-[34%] justify-items-center'>NATHAN AGBAYANI</div>
        <div className='treadmill-container'>
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
      <div className='translate-y-[-20%] '>
        <RecordHome />
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
