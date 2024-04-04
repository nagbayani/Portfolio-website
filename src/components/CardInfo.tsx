import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensInfo = () => {
  return (
    <div className='project-screen-content'>
      <h2 className='relative h-[50%] px-2 col-start-1 row-start-1 font-aileronHeavy'>
        ANGULENS
      </h2>
      <div className='relative w-[75%] ml-2 justify-self-center'>
        <h3>OPEN SOURCE PRODUCT</h3>
        <p>
          Visual Studio Code Extension built with Angular focused on visualizing
          component hierarchies, dependencies, and component data flows in
          selected Angular Projects.
        </p>
      </div>
      <div className='row-span-2 row-start-4'>
        <h3>TECHNOLOGIES</h3>
        <ul className='projects-tech row-span-2'>
          <li className='col-start-1 row-start-1'>Angular</li>
          <li className='col-start-1 row-start-2'>TypeScript</li>
          <li className='col-start-1 row-start-3'>Webview API</li>
          <li className='col-start-2 row-start-1'>Klaw-Sync</li>
          <li className='col-start-2 row-start-2'>VS Code Extension API</li>
        </ul>
      </div>
    </div>
  );
};

const InterviewPrepInfo = () => {
  return (
    <div className='project-screen-content'>
      <h2 className='w-[100%] px-2 row-start-1 font-aileronHeavy'>
        PREPPER DECK
      </h2>
      <div className='w-[75%] ml-2 row-start-2 justify-self-center'>
        <h3>WEB APPLICATION</h3>
        <p>
          Full-stack React web-based application to aid in preparing for
          software engineering interviews. React’s component-based architecture
          allowed users to construct thoughtful answers to questions onto card
          components, which could be contained within Deck Components.
        </p>
      </div>
      <div className='row-span-2 row-start-4'>
        <h3>TECHNOLOGIES</h3>
        <ul className='projects-tech row-span-2'>
          <li className='col-start-1 row-start-1'>React</li>
          <li className='col-start-1 row-start-2'>Redux</li>
          <li className='col-start-1 row-start-3'>Express</li>
          <li className='col-start-2 row-start-1'>PostgreSQL</li>
          <li className='col-start-2 row-start-2'>OAuth</li>
        </ul>
      </div>
    </div>
  );
};

const LoCoupsInfo = () => {
  return (
    <div className='project-screen-content'>
      <h2 className='w-[100%]  px-2 row-start-1 font-aileronHeavy'>LOCOUPS</h2>
      <div className='w-[75%] ml-2 row-start-2 mt-[-5%]justify-self-center'>
        <h3>WEB APPLICATION</h3>
        <p>
          Yelp inspired, full-stack Next.js application aiming to help local
          businesses by showcasing possible coupons & deals from those
          businesses to users.
        </p>
      </div>
      <div className='row-span-2 row-start-4'>
        <h3>TECHNOLOGIES</h3>
        <ul className='projects-tech row-span-2'>
          <li className='col-start-1 row-start-1'>React</li>
          <li className='col-start-1 row-start-2'>Next.js</li>
          <li className='col-start-1 row-start-3'>PostgreSQL</li>
          <li className='col-start-2 row-start-1'>GraphQL</li>
          <li className='col-start-2 row-start-2'>Prisma</li>
          <li className='col-start-2 row-start-3'>Google Maps APIs</li>
        </ul>
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
