import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SquareMenu from "./SquareMenu";

const Header = ({ isTransformed, handleMenuTransform }) => {
  const navigate = useNavigate();
  // const [isTransformed, setIsTransformed] = useState(false);

  const handleHomeClick = () => {
    let path = "/";
    navigate(path);
  };

  // const handleMenuTransform = () => {
  //   setIsTransformed(!isTransformed);
  //   console.log("CLICKED");
  //   let path;
  //   isTransformed ? (path = "/menu") : (path = "/");
  //   navigate(path);
  // };

  return (
    <header className='header-container flex relative justify-around text-indigo-500 w-[100%] border-black border-4'>
      <div className='header flex items-center w-[80%] max-w-[1000px]'>
        <div className='header-name flex left w-[25%]'>
          <button
            className='flex font-aileronThin w-[100%]'
            onClick={handleHomeClick}
          >
            NATHAN AGBAYANI
          </button>
        </div>
        <div className='w-[50%] inline-block'>
          {/* <hr className='translate-y-[400%] justify-items-center align-baseline'></hr> */}
          <div className='header-treadmill-container'>
            <div className='header-treadmill-text font-aileronThin'>
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
        <div className='right w-[25%]'>
          <motion.button
            className={`menu ${isTransformed ? "menu" : "opened"}`}
            onClick={handleMenuTransform}
            aria-label='Main Menu'
          >
            <svg width={"75"} height={"70"} viewBox='0 0 100 100'>
              <path
                className='line line1'
                d='M 20,39.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
              />
              <path className='line line2' d='M 20,50 H 80' />
              <path
                className='line line3'
                d='M 20,60.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*

 <svg
          data-slot='icon'
          fill='none'
          strokeWidth={2}
          width='1em'
          height='1em'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            id='x-button'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg> 

        <path
              id='grid-button'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
            /> 


      <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>


<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25 2.25 7.5 12 12.75l9.75-5.25L12 2.25z" />
</svg>




EDGES:

<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25 L 2.25 7.5" />
</svg>


<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75 L 21.75 7.5" />
</svg>
<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.5 L 12 12.75" />
</svg>

<svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5 L 12 2.25" />
</svg>


*/
