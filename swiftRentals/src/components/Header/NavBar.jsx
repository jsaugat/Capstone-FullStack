import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";

function NavBar() {
  return (
    <nav className="NavMenu flex justify-between items-center">
      {/* Logo */}
      <Logo />
      {/* Menu */}
      <ul className="uppercase flex gap-8 font-semibold">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* Login Signup */}
      <div className="space-x-4">
        <Button bgColor="white" textColor="text-black">Login</Button>
        <Button bgColor="bg-black" textColor="text-white" className="hover:bg-black/80">Signup</Button>
      </div>
    </nav>
  );
}

export default NavBar;

// "my name : " + name
// `my name : ${name}`

// <Button/>
// <Button> </Button> 
