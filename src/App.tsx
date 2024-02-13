import React from "react";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <header className='text-6xl font-bold my-4 text-indigo-500'>
        Nathan Agbayani
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
