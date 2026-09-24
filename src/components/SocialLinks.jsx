import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { profile } from "../data/portfolio";

const links = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: profile.linkedin,
    style: "rounded-tr-md",
  },
  {
    label: "GitHub",
    icon: <FaGithub size={30} />,
    href: profile.github,
  },
  {
    label: "Mail",
    icon: <HiOutlineMail size={30} />,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    href: profile.resume,
    style: "rounded-br-md",
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-20">
      <ul>
        {links.map(({ label, icon, href, style }) => (
          <li
            key={label}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-ink-700 border border-white/10 text-sm ${
              style || ""
            }`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {label}
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
