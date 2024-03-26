import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensCard = ({ isOpen }) => {
  return (
    <motion.div className='h-[100%]' layout>
      {isOpen ? (
        <motion.div layout className='card-hover'>
          <div className='row-start-1 '>
            <div className='flex flex-row flex-wrap justify-center w-[100%] h-[20%] z-20'>
              <h3>ANGULENS</h3>
              <p
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronThin",
                  marginLeft: ".5rem",
                }}
              >
                OPEN SOURCE PRODUCT
              </p>
            </div>
            <p>
              Visual Studio Code extension application built with Angular
              focused on visualizing component hierarchies, dependencies, and
              component data flows in selected Angular Projects.
            </p>
          </div>
          <div className='border-t-2 border-black row-start-2 w-[100%] h-[100%]'>
            <ul className='projects-tech'>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>Webview API</li>
              <li>Klaw-Sync</li>
              <li>VS Code Extension API</li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div
            layout
            className='flex flex-col w-[100%] h-[100%] items-center '
          >
            <div className='flex flex-row flex-wrap justify-center w-[100%] h-[10%] z-20'>
              <h3>ANGULENS</h3>
              <p
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronThin",
                  marginLeft: ".5rem",
                }}
              >
                OPEN SOURCE PRODUCT
              </p>
            </div>
            <div className='flex overflow-hidden w-[90%] h-[80%] align-center z-0'>
              {/* <img src='/Angulens.png' alt='img' /> */}
              <img src='/services.gif' alt='gif' />
              {/* <p className='p-8'>
                Visual Studio Code Extension built with Angular focused on
                visualizing component hierarchies, dependencies, and component
                data flows in selected Angular Projects.
              </p> */}
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
          <div className='row-start-1 h-[100%]'>
            <p>
              Full-stack React web-based application to aid in preparing for
              software engineering interviews. React’s component-based
              architecture allowed users to construct thoughtful answers to
              questions onto card components, which could be contained within
              Deck Components.
            </p>
          </div>
          <div className='tech-stack row-start-2 w-[100%] h-[100%]'>
            <ul className='projects-tech'>
              <li>React</li>
              <li>MongoDB</li>
              <li>Redux/Redux Toolkit</li>
              <li>Express</li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <>
          <div className='flex flex-col w-[100%] h-[100%]'>
            <motion.div
              layout
              className='flex flex-row flex-wrap justify-center w-[100%] h-[20%] z-20'
            >
              <h3>INTERVIEW PREPARATION</h3>
              <h3
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronThin",
                  marginLeft: ".5rem",
                }}
              >
                WEB APPLICATION
              </h3>
            </motion.div>
            {/* <div className='overflow-hidden w-[100%] h-[100%] items-center z-0'>
              <img src='/Angulens.png' alt='img' />
            </div> */}
          </div>
        </>
      )}
    </motion.div>
  );
};

const LoCoups = ({ isOpen }) => {
  return (
    <motion.div layout>
      {isOpen ? (
        <motion.div layout className='card-hover h-[100%]'>
          <div className='row-start-1'>
            <p>
              Yelp inspired, full-stack Next.js application aiming to help local
              businesses by showcasing possible coupons & deals from those
              businesses to users.
            </p>
          </div>
          <div className='tech-stack row-start-2 w-[100%]'>
            <ul className='projects-tech'>
              <li>React</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>Prisma</li>
              <li>Google Maps APIs</li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <>
          <div className='flex flex-col w-[100%] h-[100%]'>
            <motion.div
              layout
              className='flex flex-row w-[100%] h-[20%] flex-wrap justify-center z-20'
            >
              <h3>LoCoups</h3>
              <h3
                style={{
                  fontSize: "var(--step--4)",
                  fontFamily: "aileronThin",
                  marginLeft: ".5rem",
                }}
              >
                WEB APPLICATION
              </h3>
            </motion.div>
            {/* <div className='overflow-hidden w-[100%] h-[100%] items-center z-0'>
              <img src='/Angulens.png' alt='img' />
            </div> */}
          </div>
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
