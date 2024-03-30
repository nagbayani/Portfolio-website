// Home.js
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecordHome from "./RecordHome";
import { useNavigate } from "react-router-dom";
import {
  useAnimate,
  stagger,
  useInView,
  motion,
  AnimatePresence,
} from "framer-motion";
import VinylSvg from "../svg/vinyl.svg";
import HomePicSvg from "../svg/homepic.svg";
import ProfileTopSvg from "../svg/profiletop.svg";
import Menu from "./Menu";
import MenuToggle from "./MenuToggle";
import HomeGrid from "./HomeGrid";
import Treadmill from "./Treadmill";

const Home = ({ projectClick, contactClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // useEffect(() => {
  //   if (!isInView) {
  //     console.log("HOME NOT IN VIEW", isInView);
  //     setIsOpen(false);
  //   }
  // }, [isInView]);

  useEffect(() => {
    console.log("Home ref", ref);
    console.log("Home in View", isInView);
  }, [isInView, ref]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={ref}
      className='home-container relative flex flex-col w-[100vw] h-[110vh]'
    >
      {/* <div className='home relative flex flex-col w-[full] h-[100vh]'> </div> */}
      <div className='flex-grow flex relative items-center justify-center padding-8 object-contain mt-8'>
        <HomeGrid projectClick={projectClick} contactClick={contactClick} />
      </div>
    </motion.div>
  );
};

export default Home;

{
  /* <div ref={scope}>
      <div className='right-btn w-[25%]'>
        <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      </div>
      <Menu />
    </div> */
}
/*
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            ".menu",
            { transform: "translateY(375%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
          ],
          [
            ".menu li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: 0.05, at: "-0.1" },
          ],
        ]
      : [
          [
            ".menu li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [".menu", { transform: "translateY(300%)" }, { at: "-0.1" }],
        ];
    if (isInView) {
      animate([...menuAnimations]);
    }
  }, [isOpen, isInView]);

  return scope;
}
*/

/*
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(ref, "ref");
    console.log(scope, "scope Home");
  };
  */
