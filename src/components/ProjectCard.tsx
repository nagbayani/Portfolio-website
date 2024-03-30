import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensCard = ({ isOpen }) => {
  return (
    <motion.div className='h-[100%]' layout>
      {isOpen ? (
        <motion.div layout className='card-hover'>
          <div className='row-start-1 '>
            <h2>Angulens</h2>
            <h3>OPEN SOURCE PRODUCT</h3>
            <p
              style={{
                fontSize: "var(--step--4)",
                fontFamily: "aileronRegular",
              }}
            >
              Visual Studio Code Extension built with Angular focused on
              visualizing component hierarchies, dependencies, and component
              data flows in selected Angular Projects.
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div layout className='card-hover'>
            <div className='row-start-1 '>
              <h2>Angulens</h2>
              <h3>OPEN SOURCE PRODUCT</h3>
              <p
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronRegular",
                }}
              >
                Visual Studio Code Extension built with Angular focused on
                visualizing component hierarchies, dependencies, and component
                data flows in selected Angular Projects.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const InterviewPrep = ({ isOpen }) => {
  return (
    <motion.div layout>
      {/* Conditionally render different content based on isOpen */}
      {isOpen ? (
        <motion.div layout className='card-hover'>
          <div className='row-start-1 '>
            <h2>Interview Prep</h2>
            <h3>WEB APPLICATION</h3>
            <p
              style={{
                fontSize: "var(--step--4)",
                fontFamily: "aileronRegular",
              }}
            >
              Full-stack React web-based application to aid in preparing for
              software engineering interviews. React’s component-based
              architecture allowed users to construct thoughtful answers to
              questions onto card components, which could be contained within
              Deck Components.
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div layout className='card-hover'>
            <div className='row-start-1 '>
              <h2>Interview Prep</h2>
              <h3>WEB APPLICATION</h3>
              <p
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronRegular",
                }}
              >
                Full-stack React web-based application to aid in preparing for
                software engineering interviews. React’s component-based
                architecture allowed users to construct thoughtful answers to
                questions onto card components, which could be contained within
                Deck Components.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const LoCoups = ({ isOpen }) => {
  return (
    <motion.div layout>
      {isOpen ? (
        <motion.div layout className='card-hover'>
          <div className='row-start-1 '>
            <h2>LoCoups</h2>
            <h3>WEB APPLICATION</h3>
            <p
              style={{
                fontSize: "var(--step--4)",
                fontFamily: "aileronRegular",
              }}
            >
              Yelp inspired, full-stack Next.js application aiming to help local
              businesses by showcasing possible coupons & deals from those
              businesses to users.
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div layout className='card-hover'>
            <div className='row-start-1 '>
              <h2>LoCoups</h2>
              <h3>WEB APPLICATION</h3>
              <p
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronRegular",
                }}
              >
                Yelp inspired, full-stack Next.js application aiming to help
                local businesses by showcasing possible coupons & deals from
                those businesses to users.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const ProjectCard = ({ name }) => {
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

  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(true);
    }
  };

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
      onClick={() => handleClick()}
      className='card'
      data-isOpen={isOpen}
      // style={{ borderRadius: isOpen ? "0px 25px 0px 25px" : "0px" }}
    >
      {projectComponent}
    </motion.div>
  );
};

export default ProjectCard;
