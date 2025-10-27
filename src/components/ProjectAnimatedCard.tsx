import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Github,
  ExternalLink,
  Mail,
  Code2,
  Zap,
  Users,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

// need to pass project header as prop
const AnimatedCard = ({ project }) => {
  const [expanded, setIsExpanded] = useState(false);

  return (
    // border-gray-200/50
    <div className='bg-white/80 mx-auto my-6 w-[55%] min-w-[400px] shadow-lg  backdrop-blur-sm rounded-md border  border-[--black] p-8'>
      {/* Header & Overview Descriptor */}
      <Content {...{ project, expanded, setIsExpanded }} />
      <ExpandedCard {...{ project, expanded, setIsExpanded }} />
    </div>
  );
};

const Content = ({ project, expanded, setIsExpanded }) => {
  return (
    <div
      className={`relative flex flex-col w-full mx-auto`}
      // onClick={() => setIsExpanded(() => !expanded)}
    >
      <div className='flex '>
        {/* Title + Subtitle */}
        <div
          className={`flex flex-grow w-fit h-fit mx-auto ${
            expanded ? "justify-start" : "justify-center"
          }`}
        >
          <motion.div
            layout
            className={`flex flex-col h-auto 
            ${expanded ? "w-full" : "w-3/4 max-w-[3/4]"}
            `}
          >
            <div className='w-full justify-between flex'>
              <h2 className='w-fit'>{project.name}</h2>
              <div className={`flex flex-grow-0`}>
                <motion.div
                  layout
                  className='flex w-fit gap-3 py-2 group-hover:opacity-100 transition-opacity duration-300 h-fit'
                >
                  <button
                    onClick={() => setIsExpanded(() => !expanded)}
                    className='p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors duration-200 h-fit'
                  >
                    <Maximize2 className='w-3 h-3 text-purple-700' />
                  </button>
                  <a
                    href={project.github}
                    className='p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 h-fit'
                  >
                    <ChevronDown className='w-3 h-3 text-gray-700' />
                  </a>
                  <a
                    href={project.link}
                    className='p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200 h-fit'
                  >
                    <ExternalLink className='w-3 h-3 text-blue-700' />
                  </a>
                </motion.div>
              </div>
            </div>
            <motion.p
              layout
              // initial={false}
              // animate={{
              //   opacity: expanded ? 0 : 1,
              //   height: expanded ? 0 : "auto",
              // }}
              // transition={{
              //   opacity: { duration: 0 },
              //   height: { duration: 0.3 },
              // }}
              className='card-subheader overflow-hidden will-change-[opacity,height]  font-aileronRegular w-fit '
            >
              {project.subheader}
            </motion.p>
            <motion.div
              layout
              initial={false}
              animate={{
                opacity: expanded === true ? 0 : 1,
                height: expanded === true ? 0 : "auto",
              }}
              transition={{
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className='overflow-hidden will-change-[opacity,height] w-fit mx-auto pt-2'
            >
              <p>{project.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Make new component for
const ExpandedCard = ({ project, expanded, setIsExpanded }) => {
  return (
    <AnimatePresence>
      {/* <motion.div
        layout
        initial={false}
        animate={{
          opacity: expanded ? 0 : 1,
          height: expanded ? 0 : "auto",
        }}
        transition={{
          opacity: { duration: 0.2 },
          height: { duration: 0.3 },
        }}
        className='overflow-hidden will-change-[opacity,height] w-1/3 mx-auto pt-2'
      >
        <p>{project.description}</p>
      </motion.div> */}
      {expanded && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -50,
            opacity: 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className=' z-10 bg-indigo-600 h-auto mx-auto rounded text-white'
        >
          <ExpandedContent {...{ project }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Button sets slide with useState
 *
 * Details -> project.features[currentSlide].title && project.features[currentSlide].description
 *
 * slideshow
 *
 * Map out technologies
 *
 */
const ExpandedContent = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.features.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + project.features.length) % project.features.length
    );
  };

  return (
    <div className='flex flex-col lg:flex-row  relative justify-center font-aileron'>
      {/* Slideshow */}
      <div className='relative bg-gray-50'>
        <div className='relative h-full min-h-[400px]'>
          <img
            src={project.features[currentSlide].gif}
            alt={project.features[currentSlide].title}
            className='img-responsive'
          />

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110'
          >
            <ChevronLeft className='w-4 h-4 text-gray-700' />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110'
          >
            <ChevronRight className='w-4 h-4 text-gray-700' />
          </button>

          {/* Slide indicators */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {project.features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className='lg:w-96 mx-4'>
        <div className='flex flex-col'>
          <h4>{project.features[currentSlide].title}</h4>
          <p>{project.features[currentSlide].description}</p>
        </div>

        {/* Feature list */}
        {/* <div className='flex flex-col mt-6 lg:w-60'>
          <h4 className='font-semibold text-gray-900 mb-3'>Key Features</h4>
          <div className='space-y-2'>
            {project.features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-full text-left p-1 rounded-lg transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-green-100 border-2 border-green-200"
                    : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                }`}
              >
                <p className=''>{feature.title}</p>
              </button>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export { AnimatedCard, Content, ExpandedCard };
