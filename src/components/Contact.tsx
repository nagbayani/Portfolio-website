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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isTyping, setIsTyping] = useState(false);

  const [touched, setTouched] = useState({
    reply_to: false,
    from_name: false,
  });

  const handleInputFocus = (name) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

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
    console.log("typing changed", isTyping);
  }, [isInView, ref, isTyping]);

  return (
    <div ref={ref} className='flex flex-col w-[100vw] h-[100vh] items-center'>
      <h1 className='mt-16'>CONTACT ME</h1>
      {/* <hr></hr> */}
      <div className='flex flex-row w-[100%] h-[100%]'>
        <form
          className='contact-form font-aileronRegular w-[100%] h-[100%] '
          noValidate
        >
          <div>
            <label htmlFor='email' className='block font-aileronRegular mb-8'>
              EMAIL<span className='text-red-500'>*</span>:
              <input
                required
                name='reply_to'
                type='email'
                value={details.reply_to}
                onChange={handleDetailsChange}
                onFocus={() => handleInputFocus("reply_to")}
                id='email'
                className='peer text-black focus:outline-none focus:ring-black-500 '
              ></input>
              {touched.reply_to && !details.reply_to && (
                <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                  Please enter a valid email address.
                </span>
              )}
            </label>
          </div>
          <div className='mb-8'>
            <label htmlFor='name' className='block mb-2 font-aileronRegular'>
              NAME<span className='text-red-500'>*</span>:
              <input
                required
                value={details.from_name}
                onChange={handleDetailsChange}
                name='from_name'
                type='name'
                id='name'
                onFocus={() => handleInputFocus("from_name")}
                className='peer text-black focus:outline-none focus:ring-black-500 '
              ></input>
              {touched.from_name && !details.from_name && (
                <span className='hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                  Please enter a name.
                </span>
              )}
            </label>
          </div>
          <div className='mb-8' id='message-label'>
            <label htmlFor='message' className='block mb-2 font-aileronREgular'>
              MESSAGE<span className='text-red-500'>*</span>:
            </label>
            <textarea
              required
              value={details.message}
              onChange={handleDetailsChange}
              name='message'
              id='message'
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              placeholder='Type your message...'
              className={`resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500   placeholder:text-slate-400  ${
                isTyping
                  ? "text-black font-aileronRegular"
                  : "placeholder:text-slate-400 font-aileronThin "
              }`}
            ></textarea>
          </div>
          <button
            type='submit'
            onClick={handleSendEmail}
            className=' border-black border-2 group-invalid:pointer-events-none group-invalid:opacity-30'
            id='send-btn'
          >
            <span onClick={handleSendEmail}>SEND</span>
          </button>
        </form>

        <div className='flex flex-col w-[50%] items-center'>
          <div
            className='flex flex-col h-[40%] w-[100%] items-center justify-center'
            style={{ backgroundColor: "var(--orange)" }}
          >
            <h2 className='font-aileronThin'>I want to make a difference.</h2>
            <h2 className='font-aileronThin'>Let's get in touch.</h2>
          </div>
          <div
            className='w-[100%] h-[50%] flex flex-col justify-center items-center'
            style={{ backgroundColor: "#f4a75e" }}
          >
            <img src='/contact-pic.png'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
