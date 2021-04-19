import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='flex justify-between align-center mx-50 h-vh-10'>
          <div>
            {/* <img src="" alt="" /> */} <h1 className='uppercase pointer'>Knowledge</h1>
          </div>
          <div>
            <ul className=' flex justify-evenly align-center list-style-none text-spacing'>
              <li className='navlist mx-30 pointer'>Home</li>
              <li className='navlist mx-30 pointer'>About</li>
              <li className='navlist mx-30 pointer'>Courses</li>
              <li className='navlist mx-30 pointer'>Contact</li>
              <GiHamburgerMenu className='burger display-none' />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
