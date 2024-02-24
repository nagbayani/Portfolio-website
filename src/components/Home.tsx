// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex flex-row justify-center h-[75vh]'>
      <div className='album-cover w-[50%] h-[100%] '>
        <div className='flex flex-wrap justify-center items-center flex-col text-white border-indigo border-4 h-[100%]'>
          <div className='text-8xl font-aileronThin text-indigo-500'>
            WELCOME
            {/* <hr className='h-1 bg-indigo rounded'></hr> */}
          </div>
          {/* <div className='treadmill-container text-6xl'>
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
          </div> */}
          <div className='text-8xl my-4 items-center font-aileronSemiBold  text-indigo-500'>
            NATHAN AGBAYANI
          </div>
          <div className='flex text-2xl my-4 font-aileronSemiBold border-indigo border-4 rounded-2xl p-8  w-[25%] items-center text-indigo-500'>
            <h1>See My Work</h1>
          </div>
          <div>
            <ul className='text-3xl flex justify-between '>
              <li className='mx-2 p-2'>
                <Link to='/'>Home</Link>
              </li>
              <li className='mx-2 p-2'>
                <Link to='/about'>About</Link>
              </li>
              <li className='mx-2 p-2'>
                <Link to='/projects'>Projects</Link>
              </li>
              <li className='mx-2 p-2'>
                <Link to='/experience'>Experience</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='shadow1'></div>
      </div>
      {/* <div className='flex font-aileronHeavyItalic '>
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
      </div> */}
    </div>
  );
};

export default Home;
