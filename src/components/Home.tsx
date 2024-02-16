// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='w-screen flex flex-col items-center justify-center my-10'>
        <div className='text-6xl font-bold my-4 text-indigo-500'>
          <div className='text-2xl my-4 text-indigo-500'>
            Aloha! I'm Nathan Agbayani
            <hr className='w-full h-1 bg-indigo rounded'></hr>
            <div>
              <p>Full Stack web developer, Front-end focused</p>
            </div>
            <ul className='flex justify-center'>
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
