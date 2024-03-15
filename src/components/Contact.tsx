// Home.js
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Contact ref", ref);
    console.log("Contact in View", isInView);
  }, [isInView, ref]);

  return (
    <div ref={ref} className='flex flex-col w-[100vw] h-[100vh] items-center'>
      <h1>Let's Talk.</h1>
      <div className='flex w-[50%] h-[50%] justify-center items-center border-black border-2'>
        <form className='flex flex-col items-center'>
          <div>
            <label htmlFor='email' className='block mb-2 font-aileronThin'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='border-black border-2'
            ></input>
          </div>
          <div>
            <label htmlFor='name' className='block mb-2 font-aileronThin'>
              Name
            </label>
            <input
              type='name'
              id='name'
              className='border-black border-2'
            ></input>
          </div>
          <div>
            <label htmlFor='message' className='block mb-2 font-aileronThin'>
              Message
            </label>
            <input
              type='message'
              id='message'
              className='border-black border-2'
            ></input>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-black border-2'
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
