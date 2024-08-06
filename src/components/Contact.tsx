import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { sendCustomEmail } from "../Email";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [details, setDetails] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
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

  return (
    <section ref={ref} className='flex flex-col items-center h-full mt-8'>
      <h1 className='m-16 font-garamond'>Contact Me</h1>
      <div className='flex gap-4'>
        <div className='w-[600px] flex flex-col gap-8 font-aileron '>
          <div className='entry-area relative h-[80px] leading-[80px] '>
            <input
              type='text'
              required
              className='contact-input absolute w-full outline-none text-[2.2em] px-[30px] leading-[80px] border-2 border-solid '
            ></input>
            <div className='label-line text-gray-50 font-aileronThin'>NAME</div>
          </div>
          <div className='entry-area relative h-[80px] leading-[80px] '>
            <input
              type='text'
              required
              className='contact-input absolute w-full outline-none text-[2.2em] px-[30px] leading-[80px] border-2 border-solid '
            ></input>
            <div className='label-line text-gray-50 font-aileronThin'>
              EMAIL
            </div>
          </div>
          <div className='mb-8' id='message-label'>
            <textarea
              required
              value={details.message}
              onChange={handleDetailsChange}
              name='message'
              id='message'
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
            ></textarea>
            <div className='label-line text-gray-50 font-aileronThin'>
              YOUR MESSAGE
            </div>
          </div>
        </div>
        {/* <div className='contact-note flex flex-col items-center'>
          <div
            className='flex flex-col w-[100%] items-center justify-center text-white'
            style={{ backgroundColor: "#1a4526" }}
          >
            <h2 className='font-aileronThin text-white'>
              I want to make a difference.
            </h2>
            <h2 className='font-aileronThin text-white'>Let's get in touch.</h2>
          </div>
          <div
            className='w-[100%] h-[50%] flex flex-col justify-center items-center'
            style={{ backgroundColor: "#f4a75e" }}
          >
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
