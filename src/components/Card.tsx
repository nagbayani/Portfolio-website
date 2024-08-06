import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AngulensCard = ({ isOpen }) => {
  return (
    <div className='h-[100%] w-full flex flex-row justify-between'>
      <div className='card-left-round'>
        <div className='demo absolute  border-2 border-black'>Demo</div>
        <svg
          className='svgwave'
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 695 342'
          style={{
            overflow: "visible",
          }}
        >
          {/* Larger Filled Path (Outline) */}
          <path
            d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z '
            style={{
              fill: "transparent",
              stroke: "#1a4526", // Outline color
            }}
            transform='scale(.99, .95) translate(0,10)'
          />
          <path
            id='wavepath'
            d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z '
            style={{
              fill: "transparent",
            }}
          />
          <text
            // textAnchor='left'
            style={{
              fontFamily: "aileronThin",
            }}
          >
            <textPath
              style={{ fillOpacity: 1 }}
              href='#wavepath'
              startOffset='0%'
              textLength='1800'
            >
              <animate
                attributeName='startOffset'
                from='20%'
                to='45%'
                begin='0s'
                dur='18s'
                repeatCount='indefinite'
              />
              <tspan style={{ fill: "black" }} dx='20'>
                Angular
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                TypeScript
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Webview API
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Klaw-Sync
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                VS Code Extension API
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                Angular
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                TypeScript
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Webview API
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Klaw-Sync
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                VS Code Extension API
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                Angular
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                TypeScript
              </tspan>
            </textPath>
          </text>
        </svg>
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
      <div className='card-description  w-[50%]'>
        <h1 className='font-garamond'>InterFluent</h1>
        <h4 className='card-subheader font-aileronRegular'>
          FULLSTACK WEB APPLICATION
        </h4>
        <p>
          Fullstack React application to aid in preparing for interviews. Users
          can construct thoughtful answers to questions onto cards that are
          contained within customizable decks.
        </p>
      </div>
      <div className='card-right-round  w-[50%]'>
        <div className='demo absolute  border-2 border-black'>Demo</div>
        <svg
          className='svgwave2'
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 695 342'
          style={{
            overflow: "visible",
          }}
        >
          <path
            d='M697.5 0.500092V343H158.5C66.4999 333 -6 259.5 1.49992 151.5C7.99992 114 37.4999 16.5 158.5 0.500092H697.5Z'
            style={{
              fill: "transparent",
              stroke: "#1a4526", // Outline color
            }}
            transform='scale(.99, .95) translate(5,10)'
          />
          <path
            id='wavepath2'
            d='M697.5 0.500092V343H158.5C66.4999 333 -6 259.5 1.49992 151.5C7.99992 114 37.4999 16.5 158.5 0.500092H697.5Z'
            style={{
              fill: "transparent",
              // stroke: "black",
            }}
          />

          <text
            // textAnchor='left'
            style={{
              fontFamily: "aileronThin",
              overflow: "visible",
            }}
          >
            <textPath
              style={{ fillOpacity: 1 }}
              href='#wavepath2'
              startOffset='5%'
              textLength='-1900'
            >
              <animate
                attributeName='startOffset'
                from='15%'
                to='-8.5%'
                begin='0s'
                dur='14s'
                repeatCount='indefinite'
              />
              <tspan style={{ fill: "black" }} dx='20'>
                React
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Redux
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Express
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                OAuth
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                React
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Redux
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Express
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                OAuth
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                React
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Redux
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Express
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                OAuth
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                React
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Redux
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Express
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                OAuth
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                React
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                Redux
              </tspan>
              {"      "}
              {/* <tspan style={{ fill: "black" }} dx='20'>
                Express
              </tspan> */}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

const LoCoups = ({ isOpen }) => {
  return (
    <div className='h-[100%] w-full flex flex-row'>
      <div className='card-left-round '>
        <div className='demo absolute  border-2 border-black'>Demo</div>
        <svg
          className='svgwave'
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 695 342'
          style={{
            overflow: "visible",
            marginTop: "1em",
          }}
        >
          {/* Larger Filled Path (Outline) */}
          <path
            d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z '
            style={{
              fill: "transparent",
              stroke: "#1a4526", // Outline color
            }}
            transform='scale(.99, .95) translate(0,10)'
          />
          <path
            id='wavepath'
            d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z '
            style={{
              fill: "transparent",
            }}
          />

          <text
            style={{
              fontFamily: "aileronThin",
            }}
          >
            <textPath
              style={{ fillOpacity: 1 }}
              href='#wavepath'
              startOffset='0%'
              textLength='1800'
            >
              <animate
                attributeName='startOffset'
                from='20%'
                to='45%'
                begin='0s'
                dur='18s'
                repeatCount='indefinite'
              />
              <tspan style={{ fill: "black" }} dx='20'>
                Next.js
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Prisma
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                GraphQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Google Maps APIs
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                Next.js
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Prisma
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                GraphQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Google Maps APIs
              </tspan>
              <tspan style={{ fill: "black" }} dx='20'>
                Next.js
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Prisma
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                GraphQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                PostgreSQL
              </tspan>
              {"      "}
              <tspan style={{ fill: "black" }} dx='20'>
                Google Maps APIs
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
      <div className='card-description  w-[50%]'>
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
