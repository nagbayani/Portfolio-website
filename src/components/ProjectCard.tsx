import React from "react";
import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const AngulensCard = () => {
  return (
    <div className='flip-card-front w-[100%] h-[100%] bg-cover border-black border-[1px]  rounded-lg p-4 text-indigo'>
      <div className='flex flex-row w-[100%] h-[100%]'>
        <div className='flex flex-col w-[50%] h-[100%] justify-between'>
          <div className='h-[15%]'>
            <h3>ANGULENS</h3>
            <p
              style={{
                fontSize: "var(--step--3)",
                fontFamily: "aileronThin",
              }}
            >
              (OPEN SOURCE PRODUCT)
            </p>
          </div>
          <div className='flex flex-col h-[50%] w-[100%]'>
            <h4>TECH STACK</h4>
            <ul id='angulens-tech' className='flex flex-col flex-wrap h-[100%]'>
              {/* Angular, TypeScript, Klaw-Sync, Webview API, VS Code Extension API */}
              <li>Angular</li>
              <li>TypeScript</li>
              <li> Klaw-Sync</li>
              <li>Webview API</li>
              <li>VS Code Extension API</li>
            </ul>
          </div>
        </div>
        <div className='overflow-hidden w-[50%] h-[50%]'>
          <img src='/Angulens.png' alt='img' />
        </div>
      </div>
    </div>
  );
};

const InterviewPrep = () => {
  return (
    <div className='flip-card-front w-[100%] h-[100%] bg-cover border-black border-[1px]  rounded-lg p-4 text-indigo'>
      <div className='flex flex-row w-[100%] h-[100%]'>
        <div className='flex flex-col w-[100%] h-[100%] justify-between'>
          <div className='h-[15%]'>
            <h3>Interview Prepper</h3>
            <p
              style={{
                fontSize: "var(--step--3)",
                fontFamily: "aileronThin",
              }}
            >
              (WEB APPLICATION)
            </p>
          </div>
          <div className='flex flex-col h-[50%] w-[100%]'>
            <h4>TECH STACK</h4>
            <ul id='angulens-tech' className='flex flex-col flex-wrap h-[100%]'>
              {/* React, MongoDB, Redux/Redux Toolkit, Express, PostgreSQL */}
              <li>React</li>
              <li>MongoDB</li>
              <li>Redux/Redux Toolkit</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
        {/* <div className='overflow-hidden w-[50%] h-[50%]'>
          <img src='/Angulens.png' alt='img' />
        </div> */}
      </div>
    </div>
  );
};

const LoCoups = () => {
  return (
    <div className='flip-card-front w-[100%] h-[100%] bg-cover border-black border-[1px]  rounded-lg p-4 text-indigo'>
      <div className='flex flex-row w-[100%] h-[100%]'>
        <div className='flex flex-col w-[100%] h-[100%] justify-between'>
          <div className='h-[15%]'>
            <h3>LoCoups</h3>
            <p
              style={{
                fontSize: "var(--step--3)",
                fontFamily: "aileronThin",
              }}
            >
              (WEB APPLICATION)
            </p>
          </div>
          <div className='flex flex-col h-[60%] w-[100%]'>
            <h4>TECH STACK</h4>
            <ul id='angulens-tech' className='flex flex-col flex-wrap h-[100%]'>
              {/* React, Next.js, PostgreSQL GraphQL, Prisma, Google Maps APIs */}
              <li>React</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>Prisma</li>
              <li>Google Maps APIs</li>
            </ul>
          </div>
        </div>
        <div className='overflow-hidden w-[50%] h-[50%]'>
          {/* <img src='/Angulens.png' alt='img' /> */}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ isFlipped, setIsFlipped, name }) => {
  const [isAnimating, setIsAnimated] = useState(false);
  function handleFlip() {
    setIsFlipped(!isFlipped);
  }
  let projectComponent;
  switch (name) {
    case "Angulens":
      projectComponent = <AngulensCard />;
      break;
    case "InterviewPrep":
      projectComponent = <InterviewPrep />;
      break;
    case "LoCoups":
      projectComponent = <LoCoups />;
      break;
    default:
      projectComponent = null;
  }

  return (
    <div className='flex items-center justify-center w-[100%] h-[100%] cursor-pointer'>
      <div
        className='flip-card w-[100%] h-[100%] rounded-md overflow-hidden font-aileronRegular '
        onClick={handleFlip}
      >
        <motion.div
          className='flip-card-inner w-[100%] h-[100%]'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          {projectComponent}
          <div className='flip-card-back w-[100%] h-[100%] bg-cover  border-indigo border-[1px] rounded-lg p-4 text-indigo'>
            Hey
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
