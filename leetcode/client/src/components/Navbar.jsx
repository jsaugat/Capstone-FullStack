import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({to,title}) {
  return (
    <>
      <Link to={to}>{title}</Link>
    </>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-center gap-5 w-fit m-auto px-3 py-2 rounded-full border border-zinc-600">
      <NavbarItem to="/" title="Home" />
      <NavbarItem to="/signup" title="Signup" />
    </nav>
  );
}

export default Navbar;
