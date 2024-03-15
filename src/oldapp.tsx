import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import MenuToggle from "./components/MenuToggle";

// import SquareMenu from "./components/SquareMenu";
// import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
// import {
//   motion,
//   useInView,
//   useAnimation,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// interface Props {
//   children: JSX.Element;
//   width?: "fit-content" | "100%";
// }

// const Reveal = ({ children, width = "fit-content" }: Props) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const mainControls = useAnimation();
//   const slideControls = useAnimation();

//   useEffect(() => {
//     console.log(isInView, "APP ref In view: ", ref);
//     if (isInView) {
//       mainControls.start("visible");
//     }
//   }, [isInView]);

//   return (
//     <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial='hidden'
//         animate={mainControls}
//         transition={{ duration: 0.5, delay: 0.25 }}
//       >
//         {children}
//       </motion.div>
//       <motion.div
//         variants={{
//           hidden: { left: 0 },
//           visible: { left: "100%" },
//         }}
//         initial='hidden'
//         animate={slideControls}
//         transition={{ duration: 0.5, ease: "easeIn" }}
//         style={{
//           position: "absolute",
//           top: 4,
//           bottom: 4,
//           left: 0,
//           right: 0,
//           // background: 'var(--bg)'
//           zIndex: 20,
//         }}
//       ></motion.div>
//     </div>
//   );
// };

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: { duration: 0.5, delay: 0.25 },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.5, delay: 0.25 },
  },
};

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className='App'>
        <BrowserRouter>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} /> */}
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        </BrowserRouter>
      </div>
    </Router>
  );
};

export default App;

// <Reveal>
//   <Home isOpen={isOpen} toggleMenu={toggleMenu} />
// </Reveal>
// <Reveal>
//   <Projects />
// </Reveal>
// <Reveal>
//   <Contact />
// </Reveal>
