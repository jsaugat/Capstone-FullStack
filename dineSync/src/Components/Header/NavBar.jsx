import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, CallToAction } from '/src/master';

const NavBar = () => {
  return (
    <nav className='nav-menu flex mx-[9rem] justify-between py-[2.5rem]'>
      {/* logo */}
      <Logo/>
      {/* menu */}
      <ul className='flex gap-12 items-center'>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/about">About us</NavLink></li>
        <li ><NavLink to="/menu">The Menu</NavLink></li>
        {/* button */}
        <li className='btn'>
          <NavLink to="/contact">
            <CallToAction className="bg-transparent">
              Book a table
            </CallToAction>
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;