// Home.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";

const Home = () => {
  return (
    <div className='home flex relative min-w-[100vw] h-[100vh] '>
      <div className='absolute shrink'>
        <RecordHome />
      </div>
      <div className='relative shrink'></div>
    </div>
  );
};

export default Home;

/* <div className='w-[100%] translate-x-[0%] h-[40%] translate-y-[40%] relative shrink m-0 shrink'>
  <div className='welcome w-[100%] text-align-center h-[100%] translate-y-[54%] font-aileronThin'>
    <h1>ALOHA I'M NATHAN</h1>
  </div>
</div> */

/* <div className='w-[100%] text-align-center h-[100%] font-aileronThin'>
<h1>HEY I'M NATHAN</h1>
<hr className='w-[75%] justify-items-center align-baseline'></hr>
<p className='font-aileronThin'>
  BUILDING AWESOME, RESPONSIVE, & OPTIMIZED WEB PRODUCTS IS MY
  PASSION.
</p>
</div> */

/* <div className='welcome relative text-center font-aileronHeavy w-[100%]'>
        <h1 className='w-[100%] relative'>NATHAN AGBAYANI</h1>
      </div> */

/* <hr className='justify-items-center align-baseline'></hr> */
/* <div className='name inline-flex flex-row font-aileronRegular'>
        <div className='w-[50%] justify-items-center'>NATHAN A. </div>
        <div className='treadmill-container w-[48%]'>
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
      <hr className='w-[100%] justify-items-center align-baseline'></hr> */

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
