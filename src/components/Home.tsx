// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='w-screen flex flex-col items-center justify-center my-10'>
        <div className='text-6xl font-bold my-4 text-indigo-500 border-indigo border-4 h-screen'>
          <div className='text-6xl my-4 font-aileron text-indigo-500'>
            WELCOME
            <div className='text-3xl my-4 font-aileron  text-indigo-500'>
              I'M NATHAN AGBAYANI
            </div>
            <div>
              <hr className='w-full h-1 bg-indigo rounded'></hr>
              <p>Full Stack web developer, Front-end focused</p>
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
