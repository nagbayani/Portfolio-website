import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensCard = ({ isOpen }) => {
  return (
    <div className='h-[100%] w-full flex flex-row justify-between'>
      <div className='card-left-round'>
        {/* <ul className='card-tech'>
          <li className='item'>Angular</li>
          <li className='item'>TypeScript</li>
          <li className='item'>Webview API</li>
          <li className='item'>Klaw-Sync</li>
          <li className='item'>VS Code Extension API</li>
        </ul> */}

        <div className='item-move'>
          <div className='item'>Angular</div>
          <div className='item'>TypeScript</div>
          <div className='item'>Webview API</div>
          <div className='item'>Klaw-Sync</div>
          <div className='item'>VS Code Extension API</div>
          <div className='item'>Angular</div>
          <div className='item'>TypeScript</div>
          <div className='item'>Webview API</div>
          <div className='item'>Klaw-Sync</div>
          <div className='item'>VS Code Extension API</div>
        </div>
      </div>
      <div className='card-description w-[50%]'>
        <h1 className='font-garamond'>Angulens</h1>
        <h4 className='card-subheader font-aileronRegular'>
          OPEN SOURCE PRODUCT
        </h4>
        <p>
          Visual Studio Code Extension built with Angular focused on visualizing
          component hierarchies, dependencies, and component data flows in
          selected Angular Projects.
        </p>
      </div>
    </div>
  );
};

const InterviewPrep = ({ isOpen }) => {
  return (
    <div className='h-[100%] w-full flex flex-row'>
      <div className='card-description border-black border-2 w-[50%]'>
        <h1 className='font-garamond'>Interview Prepper</h1>
        <h4 className='card-subheader font-aileronRegular'>
          FULLSTACK WEB APPLICATION
        </h4>
        <p>
          Fullstack React application to aid in preparing for interviews. Users
          can construct thoughtful answers to questions onto cards that are
          contained within customizable decks.
        </p>
      </div>
      <div className='card-right-round border-black border-2 w-[50%]'></div>
    </div>
  );
};

const LoCoups = ({ isOpen }) => {
  return (
    <div className='h-[100%] w-full flex flex-row'>
      <div className='card-left-round border-black border-2 w-[50%]'></div>
      <div className='card-description border-black border-2 w-[50%]'>
        <h1 className='font-garamond'>LoCoups</h1>
        <h4 className='card-subheader font-aileronRegular'>
          FULLSTACK WEB APPLICATION
        </h4>
        <p>
          Yelp inspired, full-stack Next.js application aiming to help local
          businesses by showcasing possible coupons & deals from those
          businesses to users.
        </p>
      </div>
    </div>
  );
};

const Card = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  let projectComponent;
  switch (name) {
    case "Angulens":
      projectComponent = <AngulensCard isOpen={isOpen} />;
      break;
    case "InterviewPrep":
      projectComponent = <InterviewPrep isOpen={isOpen} />;
      break;
    case "LoCoups":
      projectComponent = <LoCoups isOpen={isOpen} />;
      break;
    default:
      projectComponent = null;
  }

  return (
    <motion.div
      transition={{
        layout: {
          duration: 2,
        },
        borderRadius: { duration: 1 },
      }}
      onClick={() => setIsOpen(!isOpen)}
      className='my-[2em]'
      data-isOpen={isOpen}
    >
      {projectComponent}
    </motion.div>
  );
};

export default Card;
