import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RecordHome = () => {
  return (
    <div className='home-page grid grid-row justify-center h-[75vh]'>
      <div className='album-cover w-[50%] h-[100%]'>
        <div className='shadow1'></div>
        <div className='inner-album flex justify-center flex-col items-center text-white border-indigo border-4 w-[100%] h-[100%]'>
          <div className='text-8xl font-aileronThin text-indigo-500'>
            WELCOME
            {/* <hr className='h-1 bg-indigo rounded'></hr> */}
          </div>
          <div className='text-8xl my-4 items-center font-aileronSemiBold  text-indigo-500'>
            NATHAN AGBAYANI
          </div>
          <div className='static shrink text-2xl font-aileronSemiBold -2xl p-8  items-center text-indigo-500'>
            <div className='border-indigo border-4 mx-32 rounded'>
              <h1 className='text-center'>See My Work</h1>
            </div>
          </div>
          <div className='static shrink links'>
            <ul className=' text-3xl flex justify-between '>
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
        <div className='static overflow-visible w-[100%] h-[100%]'>
          <div className='vinyl-cover w-[280%] h-[99%]'>
            <div className='vinyl w-[100%] h-[60%]'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordHome;
