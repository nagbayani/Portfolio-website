import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import CardInfo from "./CardInfo";
import VinylSvg from "../svg/vinyl.svg";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const customWrap = (min, max, value) => {
  const rangeSize = max - min + 1;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const projects = [
  { name: "Angulens", id: "0", project: <Card name={"Angulens"} /> },
  { name: "InterviewPrep", id: "1", project: <Card name={"InterviewPrep"} /> },
  { name: "LoCoups", id: "2", project: <Card name={"LoCoups"} /> },
];

const cards = projects.map((cardProps, index) => (
  <div key={index} id={cardProps.id} className='w-full h-full'>
    <CardInfo {...cardProps} />
  </div>
));

const Carousel = () => {
  const [[cardCount, direction], setCardCount] = useState([0, 0]);
  const activeCardIndex = customWrap(0, cards.length - 1, cardCount);

  const swipeToCard = (swipeDirection) => {
    let newCount;
    if (swipeDirection === -1) {
      newCount = customWrap(0, cards.length - 1, cardCount - 1);
    } else {
      newCount = customWrap(0, cards.length - 1, cardCount + swipeDirection);
    }
    setCardCount([newCount, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    console.log("IM MOVING");
    if (draggedDistance > swipeThreshold) {
      swipeToCard(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToCard(1);
    }
  };

  const skipToCard = (cardId) => {
    let changeDirection;
    if (cardId > activeCardIndex) {
      changeDirection = 1;
    } else if (cardId < activeCardIndex) {
      changeDirection = -1;
    }
    setCardCount([cardId, changeDirection]);
    console.log("new cardId=", cardId);
  };

  /*
    UseEffect that updates
  */

  return (
    <div className='slider-container'>
      <div className='thumbnails'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => {
              skipToCard(project.id);
            }}
            className='thumbnail-container'
            // whileHover={{ scale: 1.05 }}
          >
            {project.project}
            <div
              className={`active-indicator ${
                index === activeCardIndex ? "active vinyl" : ""
              }`}
            >
              {<VinylSvg />}
            </div>
          </motion.div>
        ))}
      </div>
      <div className='slider'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={cardCount}
            custom={direction}
            variants={sliderVariants}
            initial='incoming'
            animate='active'
            exit='exit'
            transition={sliderTransition}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            className='card-dragger z-[4]'
          >
            {cards[activeCardIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div className='vinyl z-[0]'>
        <VinylSvg />
      </div> */}
    </div>
  );
};

export default Carousel;

{
  /* <div className='buttons'>
  <button onClick={() => swipeToCard(-1)}>PREV</button>
  <button onClick={() => swipeToCard(1)}>NEXT</button>
</div> */
}
