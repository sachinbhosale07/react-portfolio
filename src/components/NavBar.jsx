import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = [
  "home",
  "about",
  "experience",
  "work",
  "projects",
  "skills",
  "contact",
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition duration-300 ${
        scrolled || nav
          ? "bg-ink-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6">
        <Link
          to="home"
          smooth
          duration={800}
          className="text-4xl font-signature text-white cursor-pointer"
        >
          Sachin Bhosale
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                spy
                smooth
                duration={800}
                offset={-80}
                activeClass="!text-white bg-white/10"
                className="px-4 py-2 rounded-full cursor-pointer capitalize text-sm font-medium text-slate-400 hover:text-white transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          aria-label={nav ? "Close menu" : "Open menu"}
          className="relative z-10 text-slate-300 lg:hidden"
        >
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </nav>

      {nav && (
        <ul className="lg:hidden flex flex-col items-center gap-2 py-6 border-t border-white/10 bg-ink-900/95">
          {links.map((link) => (
            <li key={link}>
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={800}
                offset={-80}
                className="block px-6 py-3 capitalize text-xl text-slate-300 hover:text-white cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
