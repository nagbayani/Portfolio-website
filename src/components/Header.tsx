import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const initialPath = "M12 2.25 2.25 7.5 12 12.75l9.75-5.25L12 2.25z";
  const finalPath = "M12 2.25 L 2.25 12 M 21.75 12 L 12 21.75";

  const navigate = useNavigate();
  const [isTransformed, setIsTransformed] = useState(false);

  const handleHomeClick = () => {
    let path = "/";
    navigate(path);
  };

  const handleTransform = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <header className='flex justify-between mt-12 text-6xl font-bold my-4 text-indigo-500'>
      <div className='left'>
        <button onClick={handleHomeClick}>Home</button>
      </div>
      <div className='right'>
        <motion.button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          whileHover={{ scale: 1.1 }} // Example animation for the entire button
          onClick={handleTransform}
        >
          <motion.svg
            data-slot='icon'
            fill='none'
            width='1em'
            height='1em'
            strokeWidth={1.5}
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            {/* Animation for the top edge */}

            {/* //  Left d="M2.25 7.5 L 12 12.75" 
                //  right d="M21.75 7.5 L 12 2.25"  */}
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={isTransformed ? "M2.25 7.5 L 12 12.75" : "M6 18 L 18 6"}
              animate={{ rotate: isTransformed ? 45 : 0 }} // Rotate the edge to form an X
              transition={{ duration: 0.5 }}
            />
            {/* Animation for the bottom edge */}
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={isTransformed ? "M21.75 7.5 L 12 2.25" : "M6 6 L 18 18"}
              animate={{ rotate: isTransformed ? -45 : 0 }} // Rotate the edge to form an X
              transition={{ duration: 0.5 }}
            />
            {/* Animation for the entire SVG */}
            <motion.path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={isTransformed ? finalPath : initialPath}
              animate={{ opacity: isTransformed ? 0 : 1 }} // Fade out the SVG
              transition={{ duration: 0.5 }}
            />
          </motion.svg>
        </motion.button>
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
