import React from "react";

const Waves = () => {
  return (
    <div className='flex flex-row'>
      <div className='waves'>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
      </div>
      <div className='waves delay-75'>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
        <span className='waves-stroke'></span>
      </div>
    </div>
  );
};

export default Waves;
