import React from "react";
import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ProjectCard = ({ isFlipped, setIsFlipped }) => {
  const [isAnimating, setIsAnimated] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className='flex items-center justify-center w-[100%] h-[100%] cursor-pointer'>
      <div
        className='flip-card w-[200px] h-[200px] rounded-md '
        onClick={handleFlip}
      >
        <motion.div
          className='flip-card-inner w-[100%] h-[100%] '
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div className='flip-card-front w-[100%] h-[100%] bg-cover border-indigo border-[1px] rounded-lg p-4 text-indigo'>
            Hi
          </div>

          <div className='flip-card-back w-[100%] h-[100%] bg-cover  border-indigo border-[1px] rounded-lg p-4 text-indigo'>
            Hey
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
