import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VinylSvg from "../svg/vinyl.svg";
import ProfilePicSvg from "../svg/profilepic.svg";
import ProfileAlbumSvg from "../svg/profilealbum.svg";

const RecordHome = () => {
  return (
    <div className='record-home-page relative flex flex-col h-[100%%]'>
      <div className='record-welcome w-[100%] translate-y-[10%] font-aileronHeavy'>
        <h1 className='translate-y-[48%]'>ALOHA</h1>
        <h1 className='translate-x-[0%]'>I'M NATHAN A.</h1>
      </div>
      <div className='album-cover grid grid-cols-3'>
        <div className='inner-album flex flex-col justify-center items-center font-aileronThin'>
          {/* <h1 className='font-aileronThin'>DRIVEN</h1>
          <h1 className='font-aileronThin'>ADAPTABLE</h1> */}
          <div className='w-[60%] translate-y-[15%] translate-x-[-15%] ml-2 text-align-center h-[100%] font-aileronThin'>
            <p className='font-aileronRegular'>
              BUILDING AWESOME, RESPONSIVE, & OPTIMIZED WEB PRODUCTS IS MY
              PASSION.
            </p>
          </div>
        </div>
        <div className='vinyl-cover'>
          {/* <div className='vinyl-holder'> <ProfilePicSvg /> </div> */}
          <div className='vinyl'>
            <VinylSvg />
          </div>
        </div>
      </div>
      <div className='bottom-shadow-1 self-end absolute bottom-0 right-0'></div>
      <div className='bottom-shadow-2 self-end absolute bottom-0 right-0'></div>
    </div>
  );
};

export default RecordHome;

// <div className='links flex justify-between'>
// <ul className='flex'>
//   <li className='mx-2 p-2'>
//     <Link to='/'>Home</Link>
//   </li>
//   <li className='mx-2 p-2'>
//     <Link to='/about'>About</Link>
//   </li>
//   <li className='mx-2 p-2'>
//     <Link to='/projects'>Projects</Link>
//   </li>
//   <li className='mx-2 p-2'>
//     <Link to='/experience'>Experience</Link>
//   </li>
// </ul>
// </div>
