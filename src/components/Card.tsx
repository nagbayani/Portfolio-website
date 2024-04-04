import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensCard = ({ isOpen }) => {
  return (
    <div className='row-start-1 '>
      <h2>Angulens</h2>
      <h3>OPEN SOURCE PRODUCT</h3>
    </div>
  );
};

const InterviewPrep = ({ isOpen }) => {
  return (
    <div className='row-start-1 '>
      <h2>Interview Prep</h2>
      <h3>WEB APPLICATION</h3>
    </div>
  );
};

const LoCoups = ({ isOpen }) => {
  return (
    <div className='row-start-1 '>
      <h2>LoCoups</h2>
      <h3>WEB APPLICATION</h3>
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
      className='card-hover'
      data-isOpen={isOpen}
    >
      {projectComponent}
    </motion.div>
  );
};

export default Card;
