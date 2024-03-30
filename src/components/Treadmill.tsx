import React from "react";
import VinylSvg from "../svg/vinyl.svg";

const Treadmill = () => {
  return (
    <div className='h-[100%]'>
      <div className='treadmill w-[100%] h-[100%]'>
        <div className='treadmill-container'>
          <div className='treadmill-text font-aileronHeavyItalic'>
            <ul>
              <li className='tread-color font-aileronThinItalic'>FRONTEND</li>
              <li>FOCUSED.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThinItalic'>FULL STACK</li>
              <li>DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThinItalic'>FRONTEND</li>
              <li>FOCUSED.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThinItalic'>FULL STACK</li>
              <li>DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
            </ul>
            <ul>
              <li className='tread-color font-aileronThin'>FRONTEND</li>
              <li>FOCUSED.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThin'>FULL STACK</li>
              <li>DEVELOPER.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThin'>FRONTEND</li>
              <li>FOCUSED.</li>
              <li>
                <div className='vinyl align-center'>
                  <VinylSvg />
                </div>
              </li>
              <li className='tread-color font-aileronThin'>FULL STACK</li>
              <li>DEVELOPER.</li>
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
