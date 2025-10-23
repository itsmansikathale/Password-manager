import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black flex px-4 justify-between items-center h-18 ">
      <div className="logo font-bold text-white">Password Manager</div>
      <ul>
        <li className="gap-5 flex text-gray-100">
          <a className="hover:font-bold" href="/">
            Home
          </a>
          <a className="hover:font-bold" href="/">
            About
          </a>
          <a className="hover:font-bold" href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
