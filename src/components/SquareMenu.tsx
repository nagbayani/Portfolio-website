import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const SquareMenu = () => {
  return (
    <div className=' justify-center h-screen border-indigo border-4 w-full'>
      <div className='flex justify-center text-4xl w-full'>
        <ol className='flex flex-col items-start justify-center font-aileronHeavyItalic'>
          <li>
            <Link to='/'>
              <div className='flex text-6xl sm:text-[4em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[3em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  01
                </span>
                Home
              </div>
            </Link>
          </li>
          <li className='list font-aileronSemiBoldItalic'>
            <Link to='/about'>
              <div className='flex text-6xl sm:text-[4em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[3em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  02
                </span>
                About
              </div>
            </Link>
          </li>
          <li className='list font-aileronSemiBoldItalic'>
            <Link to='/projects'>
              <div className='flex text-6xl sm:text-[4em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[3em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  03
                </span>
                Projects / Experience
              </div>
            </Link>
          </li>
          <li className='list font-aileronSemiBoldItalic'>
            <Link to='/experience'>
              <div className='flex text-6xl sm:text-[4em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[3em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  04
                </span>
                Experience
              </div>
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SquareMenu;
