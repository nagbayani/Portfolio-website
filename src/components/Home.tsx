// Home.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";
import { useNavigate } from "react-router-dom";
import { useAnimate, stagger } from "framer-motion";
import VinylSvg from "../svg/vinyl.svg";
import HomePicSvg from "../svg/homepic.svg";
import Menu from "./Menu";
import MenuToggle from "./MenuToggle";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            ".menu",
            { transform: "translateX(75%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".menu li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".menu li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [".menu", { transform: "translateX(300%)" }, { at: "-0.1" }],
        ];
    animate([...menuAnimations]);
  }, [isOpen]);

  return scope;
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen, "APP");
  };

  return (
    <div className='home-container relative flex w-[100vw]  h-[100vh]'>
      <div className='home flex flex-col relative  h-[100%]'>
        <div className='record-welcome flex flex-row w-[100%]  font-aileronHeavy'>
          <div className='vinyl'>
            <VinylSvg />
          </div>
          <h1 className='ml-8 w-[100%]'>NATHAN AGBAYANI</h1>
          <div ref={scope}>
            <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
            <Menu />
          </div>
        </div>
        <hr className='w-[100%]'></hr>
        <div className='flex flex-row relative justify-center shrink w-[100%]'>
          <div className='flex flex-col w-[100%]'>
            <div className='home-profile'>
              <HomePicSvg />
            </div>
            <div className='treadmill w-[600px] translate-y-[7.5%] absolute'>
              <div className='treadmill-container'>
                <div className='treadmill-text font-aileronThin'>
                  <ul>
                    <li>Frontend Focused.</li>
                    <li>Full Stack Developer.</li>
                  </ul>
                  <ul>
                    <li>Frontend Focused.</li>
                    <li>Full Stack Developer.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='home-middle w-[100%] h-[50%] text-align-center font-aileronRegular'>
            <div className='inner-home-middle w-[100%] translate-y-[5%]'>
              <p className='font-aileronHeavy'>BUILDING</p>
              <p className='font-aileronThin w-[150%]'>
                RESPONSIVE + INTUITIVE + CREATIVE
              </p>
              <p className='w-[150%]'>WEB PRODUCTS IS MY PASSION.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* <hr className='w-[75%] justify-items-center align-baseline'></hr> */
/* <div className='absolute shrink'>
          <RecordHome />
        </div> */
/* <div className='right w-[25%]'>
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
        </div> */

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
