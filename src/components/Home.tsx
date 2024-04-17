// Home.js
import React, { useState, useEffect, useRef } from "react";
import {
  useInView,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import HomeGrid from "./HomeGrid";
import Waves from "./Waves";
import Nav from "./Nav";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
};

const Home = ({ projectClick, contactClick }) => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  const scrollComponentIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    } else if (scrollY && scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    }
  });

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
      className='home-container relative flex flex-col items-center  w-[100vw] h-[105vh]'
    >
      <motion.div
        className='mt-32 flex absolute justify-start w-[100%]'
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <Waves />
        <Nav />
        <Waves />
      </motion.div>
      <div className='flex relative items-center justify-center padding-8 object-contain mt-48'>
        <HomeGrid projectClick={projectClick} contactClick={contactClick} />
      </div>
      <div className='bottom-0 flex absolute justify-end w-[100%]'>
        <Waves />
        <hr></hr>
        <Waves />
        <hr></hr>
        <Waves />
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
