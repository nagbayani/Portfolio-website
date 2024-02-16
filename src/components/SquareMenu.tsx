import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const SquareMenu = () => {
  return (
    <div className='text-6xl font-bold my-4 text-indigo-500'>
      <div className='text-6xl font-bold my-4 text-indigo-500'>
        <ul className='flex flex-col'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/experience'>Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SquareMenu;
