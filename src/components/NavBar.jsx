import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    "home",
    "about",
    "experience",
    "work",
    "projects",
    "skills",
    "contact",
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-20">
      <div>
        <p className="text-4xl sm:text-5xl font-signature ml-2">Sachin Bhosale</p>
      </div>

      <ul className="hidden lg:flex">
        {links.map((link) => {
          return (
            <li
              key={link}
              className="px-3 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={800} offset={-80}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setNav(!nav)}
        aria-label={nav ? "Close menu" : "Open menu"}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => {
            return (
              <li
                key={link}
                className="px-4 cursor-pointer capitalize py-4 text-3xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={800}
                  offset={-80}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
