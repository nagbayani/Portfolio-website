import React from "react";
import VinylSvg from "../svg/vinyl.svg";

const Treadmill = () => {
  return (
    <div>
      <div className='treadmill w-[100%] h-[100%]'>
        <div className='treadmill-container'>
          <div className='treadmill-text font-aileronThin'>
            <ul>
              <li>FRONTEND FOCUSED.</li>
              <div className='vinyl align-center mr-[1.5rem]'>
                <VinylSvg />
              </div>
              <li>FULL STACK DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li>FRONTEND FOCUSED.</li>
              <div className='vinyl align-center mr-[1.5rem]'>
                <VinylSvg />
              </div>
              <li>FULL STACK DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
            </ul>
            <ul>
              <li>FRONTEND FOCUSED.</li>
              <div className='vinyl align-center mr-[1.5rem]'>
                <VinylSvg />
              </div>
              <li>FULL STACK DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li>FRONTEND FOCUSED.</li>
              <div className='vinyl align-center mr-[1.5rem]'>
                <VinylSvg />
              </div>
              <li>FULL STACK DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treadmill;
