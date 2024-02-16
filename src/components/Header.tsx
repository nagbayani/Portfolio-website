import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Squares2X2Icon } from "@heroicons/react";

const Header = () => {
  const gridButton =
    "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z";

  const xButton = "M6 18 18 6M6 6l12 12";
  const xButtonID = "x-button";
  const gridButtonID = "grid-button";

  const svgRef = useRef(null);
  const [isGrid, setGrid] = useState(true);
  const [buttonID, setButtonID] = useState(gridButtonID);
  const [buttonPath, setButtonPath] = useState(gridButton);

  let navigate = useNavigate();

  const toggleButtonPaths = () => {
    if (!isGrid) {
      console.log("Clicked!", isGrid);
      navigate("/");
      setButtonID(gridButtonID);
      setButtonPath(gridButton);
      setGrid(true);
    } else {
      console.log("Clicked!", isGrid);
      navigate("/menu");
      setButtonID(xButtonID);
      setButtonPath(xButton);
      setGrid(false);
    }
  };

  const handleHomeClick = () => {
    let path = "/";
    setGrid(false);
    navigate(path);
  };
  return (
    <header className='flex justify-between mt-12 text-6xl font-bold my-4 text-indigo-500'>
      <div className='left'>
        <button onClick={handleHomeClick}>Home</button>
      </div>
      <div className='right'>
        <button
          onClick={toggleButtonPaths}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg
            ref={svgRef}
            data-slot='icon'
            fill='none'
            width='1em'
            height='1em'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              id={buttonID}
              strokeLinecap='round'
              strokeLinejoin='round'
              d={buttonPath}
            />
          </svg>
        </button>
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
*/
