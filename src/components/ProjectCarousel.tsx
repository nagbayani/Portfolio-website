import React, { useState } from "react";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(cards, "CARDS");

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
    <div className='carousel flex flex-row w-[100%] justify-between'>
      <div className='left-c' onClick={handlePrevious}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20'
          viewBox='0 96 960 960'
          width='20'
        >
          <path d='M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z' />
        </svg>
      </div>
      {/* Render Previous card */}
      {currentIndex > 0 ? (
        <div className='my-8 relative'>{cards[currentIndex - 1]}</div>
      ) : (
        <div className='my-8 relative'>{cards[cards.length - 1]}</div>
      )}

      {/* Render Current card */}
      <div className='my-8 relative'> {cards[currentIndex]}</div>

      {/* Render Next card */}
      {currentIndex < cards.length - 1 ? (
        <div className='my-8  relative'> {cards[currentIndex + 1]}</div>
      ) : (
        <div className='my-8 relative'> {cards[0]}</div>
      )}
      <div className='right-c' onClick={handleNext}>
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
  );
};

export default Carousel;
{
  /* <div className='indicator'>
  {cards.map((_, index) => (
    <div
      key={index}
      className={`dot ${currentIndex === index ? "active" : ""}`}
      onClick={() => handleDotClick(index)}
    ></div>
  ))}
</div> */
}
