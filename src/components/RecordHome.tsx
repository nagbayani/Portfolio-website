import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VinylSvg from "../svg/vinyl.svg";

const RecordHome = () => {
  return (
    <div className='home-page flex'>
      <div className='album-cover grid grid-cols-3   h-[100%]'>
        <div className='shadow1'></div>
        <div className='inner-album flex flex-col justify-center items-center text-white border-indigo border-4'>
          <h1 className='font-aileronThin text-indigo-500'>WELCOME</h1>
          <h2 className='font-aileronSemiBold text-indigo-500'>
            NATHAN AGBAYANI
          </h2>
          <div className='font-aileronSemiBold  border-indigo border-4 rounded'>
            <h2 className='text-center'>See My Work</h2>
          </div>
          <div className='links flex justify-between'>
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
