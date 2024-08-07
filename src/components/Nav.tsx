import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
};

const Nav = () => {
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

  return (
    <motion.div
      className='nav-header font-aileron  gap-4 grow-1'
      // variants={variants}
      // animate={hidden ? "hidden" : "visible"}
      // transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      {/* <h2>I'm Nathan Agbayani</h2> */}
      <h1 className='font-garamond'> I'm Nathan Agbayani...</h1>
    </motion.div>
  );
};

export default Nav;
