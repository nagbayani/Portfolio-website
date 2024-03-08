import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SquareMenu from "./components/SquareMenu";
import Header from "./components/Header";

const App = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  const handleHomeClick = () => {
    let path = "/";
  };

  const handleMenuTransform = () => {
    setIsTransformed(!isTransformed);
    console.log("CLICKED");
    let path;
    isTransformed ? (path = "/menu") : (path = "/");
  };
  return (
    <Router>
      <div id='header-root'>
        <Header
          isTransformed={isTransformed}
          handleMenuTransform={handleMenuTransform}
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<SquareMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
