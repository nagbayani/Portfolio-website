import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VinylSvg from "../svg/vinyl.svg";

const RecordHome = () => {
  return (
    <div className='home-page flex'>
      <div className='album-cover grid grid-cols-3   h-[100%]'>
        <div className='shadow1'></div>
        <div className='inner-album flex flex-col justify-center items-center text-white border-indigo border-4'>
          <div className='text-8xl font-aileronThin text-indigo-500'>
            WELCOME
          </div>
          <div className='text-8xl my-4 font-aileronSemiBold text-indigo-500'>
            NATHAN AGBAYANI
          </div>
          <div className='text-2xl font-aileronSemiBold p-8 border-indigo border-4 rounded'>
            <h1 className='text-center'>See My Work</h1>
          </div>
          <div className='links text-3xl flex justify-between'>
            <ul className='flex'>
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
        <div className='vinyl-cover'>
          <div className='vinyl'>
            <VinylSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordHome;
