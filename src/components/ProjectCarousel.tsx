import React, { useState } from "react";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === cards.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className='carousel'>
      <img key={currentIndex} src={cards[currentIndex]} />
      <div className='slide_direction'>
        <div className='left' onClick={handlePrevious}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='20'
            viewBox='0 96 960 960'
            width='20'
          >
            <path d='M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z' />
          </svg>
        </div>
        <div className='right' onClick={handleNext}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='20'
            viewBox='0 96 960 960'
            width='20'
          >
            <path d='m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z' />
          </svg>
        </div>
      </div>
      <div className='indicator'>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
