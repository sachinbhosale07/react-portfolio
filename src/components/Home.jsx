import React from "react";
import HeroImage from "../asset/heroImage-1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import { profile } from "../data/portfolio";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12 gap-10 md:flex-row">
        <div className="flex flex-col justify-center md:w-3/5">
          <p className="text-cyan-400 font-medium">Hi, I'm {profile.name}</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-2">
            {profile.title}
          </h1>
          <p className="text-gray-400 py-6 max-w-lg">{profile.intro}</p>

          <p className="text-sm text-gray-500 pb-6">
            3+ years at Affinco · {profile.location}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="work"
              smooth
              duration={800}
              offset={-80}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              View my work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-white w-fit px-6 py-3 flex items-center gap-2 rounded-md border border-gray-600 hover:border-cyan-500 duration-300"
            >
              <HiOutlineDocumentDownload size={22} />
              Resume
            </a>
          </div>
        </div>

        <div className="md:w-2/5">
          <img
            src={HeroImage}
            alt={profile.name}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
