import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensInfo = () => {
  const gitClick = () => {
    console.log("Git got clicked");
  };
  const anguClick = () => {
    console.log("Angu got clicked");
  };

  return (
    <div className='card-info-content font-aileronRegular'>
      <div className='relative col-start-1 row-start-1 self-start p-[1rem]'>
        <h2 className='ml-[1em]'>Angulens</h2>
      </div>
      <div className='project-description col-start-1 row-start-2 items-center'>
        <h3>Open Source Product</h3>
        <p>
          Visual Studio Code Extension built with Angular focused on visualizing
          component hierarchies, dependencies, and component data flows in
          selected Angular Projects.
        </p>
      </div>
      <div className='relative col-start-2 pl-[2rem] pt-[0rem] row-start-2 '>
        <h3>Technologies</h3>
        <ul className='projects-tech row-span-1'>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>Webview API</li>
          <li>Klaw-Sync</li>
          <li>VS Code Extension API</li>
        </ul>
      </div>
      <div className='col-start-2 row-start-1 col-span-1 flex flex-row w-[100%] h-[100%]'>
        <div className='project-link-buttons'>
          <button onClick={() => anguClick()} className=''>
            <img src='/Angulens.png' alt='Angulens'></img>
          </button>
          <button onClick={gitClick}>
            <img src='/github-mark.png' className='object-contain'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

const InterviewPrepInfo = () => {
  const anguClick = () => {
    console.log("Angu got clicked");
  };

  return (
    <div className='card-info-content font-aileronRegular'>
      <div className='relative col-start-1 row-start-1 self-start p-[1rem]'>
        <h2 className='ml-[1em]'>Interview Prepper</h2>
      </div>

      <div className='project-description col-start-1 row-start-2 items-center'>
        <h3>Web Application</h3>
        <p>
          Fullstack React application to aid in preparing for interviews. Users
          can construct thoughtful answers to questions onto cards that are
          contained within customizable decks.
        </p>
      </div>
      <div className='relative col-start-2 pl-[2rem] pt-[0rem] row-start-2 '>
        <h3>Technologies</h3>
        <ul className='projects-tech row-span-2'>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>OAuth</li>
        </ul>
      </div>
      <div className='col-start-2 row-start-1 col-span-1 flex flex-row w-[100%] h-[100%]'>
        <div className='project-link-buttons justify-center'>
          <button>
            <img src='/github-mark.png' className='object-contain'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

const LoCoupsInfo = () => {
  return (
    <div className='card-info-content font-aileronRegular'>
      <div className='relative col-start-1 row-start-1 self-start p-[1rem]'>
        <h2 className='ml-[1em]'>LoCoups</h2>
      </div>
      <div className='project-description col-start-1 row-start-2 items-center'>
        <h3>Web Application</h3>
        <p>
          Yelp inspired, full-stack Next.js application aiming to help local
          businesses by showcasing possible coupons & deals from those
          businesses to users.
        </p>
      </div>
      <div className='relative col-start-2 pl-[2rem] pt-[0rem] row-start-2 '>
        <h3>Technologies</h3>
        <ul className='projects-tech row-span-2'>
          <li>Next.js</li>
          <li>PostgreSQL</li>
          <li>GraphQL</li>
          <li>Prisma</li>
          <li>Google Maps APIs</li>
        </ul>
      </div>
      <div className='col-start-2 row-start-1 col-span-1 flex flex-row w-[100%] h-[100%]'>
        <div className='project-link-buttons justify-center'>
          <button>
            <img src='/github-mark.png' className='object-contain'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

const CardInfo = ({ name, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  let projectComponent;
  switch (name) {
    case "Angulens":
      projectComponent = <AngulensInfo />;
      break;
    case "InterviewPrep":
      projectComponent = <InterviewPrepInfo />;
      break;
    case "LoCoups":
      projectComponent = <LoCoupsInfo />;
      break;
    default:
      projectComponent = null;
  }

  return (
    <motion.div
      transition={{
        layout: {
          duration: 2,
          // borderRadius: "25px 0px 0px 25px;",
        },
        borderRadius: { duration: 1 },
      }}
      // whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className='card-info'
      data-isOpen={isOpen}
      // style={{ borderRadius: isOpen ? "0px 25px 0px 25px" : "0px" }}
    >
      {projectComponent}
    </motion.div>
  );
};

export default CardInfo;
