import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
const SquareMenu = () => {
  return (
    <div className=' justify-center w-screen h-screen '>
      <div className='flex justify-center text-4xl w-full '>
        <ol className='flex flex-col items-start justify-center font-aileronHeavyItalic border-indigo border-4 p-24 h-screen space-y-16'>
          <li className='mb-4'>
            <Link to='/'>
              <div className='flex sm:text-[2em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2.5em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  01
                </span>
                HOME
              </div>
            </Link>
          </li>
          <li className='mb-4'>
            <Link to='/about'>
              <div className='flex sm:text-[2em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2.5em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  02
                </span>
                About
              </div>
            </Link>
          </li>
          <li className='mb-4'>
            <Link to='/projects'>
              <div className='flex sm:text-[2em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2.5em] font-aileronSemiBoldItalic'>
                <span className='text-2xl mr-8 w-8 font-aileronHeavyItalic'>
                  03
                </span>
                Projects / Experience
              </div>
            </Link>
          </li>
          <li className='mb-4'>
            <Link to='/experience'>
              <div className='flex sm:text-[2em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2.5em] font-aileronSemiBoldItalic'>
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
