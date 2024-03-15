// Home.js
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { sendCustomEmail } from "../Email";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const [details, setDetails] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    sendCustomEmail(details);
  };

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
              required
              name='reply_to'
              type='email'
              value={details.reply_to}
              onChange={handleDetailsChange}
              id='email'
              className='border-black border-2 text-black'
            ></input>
          </div>
          <div>
            <label htmlFor='name' className='block mb-2 font-aileronThin'>
              Name
            </label>
            <input
              required
              value={details.from_name}
              onChange={handleDetailsChange}
              name='from_name'
              type='name'
              id='name'
              className='border-black border-2 text-black'
            ></input>
          </div>
          <div>
            <label htmlFor='message' className='block mb-2 font-aileronThin'>
              Message
            </label>
            <input
              required
              value={details.message}
              onChange={handleDetailsChange}
              name='message'
              type='message'
              id='message'
              className='border-black border-2 text-black'
            ></input>
          </div>
          <button
            type='submit'
            onClick={handleSendEmail}
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
