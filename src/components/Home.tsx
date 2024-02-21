// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex justify-center align-baseline'>
      <div className='w-[75%] my-10'>
        <div className='my-4 text-indigo-500 border-indigo border-4 h-screen'>
          <div className='text-4xl my-4 font-aileronHeavyItalic text-indigo-500'>
            WELCOME
            <div className='text-3xl my-4 font-aileronSemiBold  text-indigo-500'>
              I'M NATHAN AGBAYANI
            </div>
            <hr className='h-1 bg-indigo rounded'></hr>
            <div className='treadmill-container'>
              <div className='treadmill-text'>
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
            <ul className='text-3xl flex justify-center'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/experience'>Experience</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
