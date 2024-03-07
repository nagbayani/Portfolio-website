import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VinylSvg from "../svg/vinyl.svg";
import ProfilePicSvg from "../svg/profilepic.svg";
import ProfileAlbumSvg from "../svg/profilealbum.svg";

const RecordHome = () => {
  return (
    <div className='record-home-page flex'>
      <div className='album-cover grid grid-cols-3  h-[100%]'>
        <div className='inner-album flex flex-col justify-center items-center font-aileronThin'>
          {/* <h1 className='font-aileronThin'>DRIVEN</h1>
          <h1 className='font-aileronThin'>ADAPTABLE</h1> */}
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
          <div className='vinyl-holder'>{/* <ProfilePicSvg /> */}</div>
          <div className='vinyl'>
            <VinylSvg />
          </div>
          <div className='shadow2'></div>
        </div>
      </div>
      <div className='bottom-shadow-1 self-end'></div>
      <div className='bottom-shadow-2 self-end'></div>
    </div>
  );
};

export default RecordHome;
