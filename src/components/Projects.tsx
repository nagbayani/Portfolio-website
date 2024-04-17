// Home.js
import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import Card from "./Card";
// import Carousel from "./Carousel";

const Projects = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log("Project ref", ref);
    console.log("Project in View", isInView);
  }, [isInView, ref]);

  return (
    <div ref={ref} id='Projects' className='flex flex-col w-screen h-[200vh]'>
      <div
        ref={scrollRef}
        className='projects-container flex flex-col w-[100%] h-[100%] mt-[10%] items-center'
      >
        <h1 id='projects-header' className='font-aileronRegular '>
          PROJECTS I'VE BUILT.
        </h1>
        <div className='w-full'>
          <Card name='Angulens' />
        </div>
        <div className='w-full'>
          <Card name='InterviewPrep' />
        </div>
        <div className='w-full'>
          <Card name='LoCoups' />
        </div>

        {/* <div id='testing'>
          <svg width='600' height='342' viewBox='0 0 800 342'>
            <path
              id='curve'
              fill='transparent'
              style={{ transform: "translate3d(0,0,0)" }}
              d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z'
            ></path>
            <text>
              <textPath
                id='text-path'
                alignment-baseline='top'
                href='#curve'
                startOffset='-5%'
                style={{ transform: "translate3d(0,0,0)" }}
              >
                <tspan>Angular</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>TypeScript</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>Webview API</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>Klaw-Sync</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>VS Code Extension API</tspan>
                <tspan>Angular</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>TypeScript</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>Webview API</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>Klaw-Sync</tspan>&nbsp;&nbsp;&nbsp;
                <tspan>VS Code Extension API</tspan>
                <animate
                  id='anim1'
                  attributeName='startOffset'
                  from='0'
                  to='200'
                  begin='0s'
                  dur='2s'
                  repeatCount='indefinite'
                />
              </textPath>
            </text>
          </svg>
        </div> */}
        <svg
          className='svgwave'
          xmlns='http://www.w3.org/2000/svg'
          // width='600'
          // height='342'
          // viewBox='0 0 800 342'
          width='696'
          height='343'
          viewBox='0 0 696 343'
          style={{ width: "auto", height: "auto", overflow: "visible" }}
        >
          <path
            id='wavepath'
            d='M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z M0 0H524C618.441 0 695 76.5593 695 171V171C695 265.441 618.441 342 524 342H0V0Z '
            // d='M544.151 1H0.5V342H531.5C645.349 342 701 235 695 149C695 149 678.5 25.5 544.151 1Z'
            style={{
              fill: "transparent",
              stroke: "black",
              // strokeWidth: "1px",
            }}
          />
          {/* <path d="M544.151 1H0.5V342H531.5C645.349 342 701 235 695 149C695 149 678.5 25.5 544.151 1Z" stroke="black"/>
           */}
          {/* <foreignObject x='30' y='30' width='600px' height='340px'>
            <div
              style={{
                width: "600px",
                height: "100%",
                borderRadius: "8px",
                backgroundSize: "contain",
                border: "4px solid black",
                display: "inline-block",
                fill: "black",
              }}
            ></div>
          </foreignObject> */}

          <text
            textAnchor='left'
            style={{
              fontFamily: "aileronRegular",
              // fontSize: "20px",
              // fill: "white",
            }}
          >
            <textPath
              style={{ fillOpacity: 1 }}
              href='#wavepath'
              startOffset='0%'
              textLength='1900'
            >
              <animate
                attributeName='startOffset'
                from='20%'
                to='45%'
                begin='0s'
                dur='12s'
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
            </textPath>
          </text>
        </svg>
      </div>
      <hr className='w-[100%]'></hr>
    </div>
  );
};

export default Projects;
