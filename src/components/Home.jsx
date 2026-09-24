import React from "react";
import HeroImage from "../asset/heroImage-1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDocumentDownload, HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-scroll";
import { profile, experience, work, projects } from "../data/portfolio";

const years = Math.floor(
  (Date.now() - new Date(experience[0].startDate)) / (365.25 * 24 * 3600 * 1000)
);

const stats = [
  { value: `${years}+`, label: "Years experience" },
  { value: work.length, label: "Live sites" },
  { value: `${projects.length}+`, label: "Projects" },
];

const Home = () => {
  return (
    <section name="home" className="relative overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 sm:px-6 pt-28 pb-16">
        <div className="md:w-3/5">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently at {experience[0].company}
          </span>

          <p className="pt-6 text-lg text-slate-400">Hi, I'm {profile.name}</p>
          <h1 className="pt-2 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            WordPress Developer &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SEO Specialist
            </span>
          </h1>
          <p className="pt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            {profile.intro}
          </p>

          <p className="pt-4 flex items-center gap-2 text-slate-400">
            <HiOutlineLocationMarker /> {profile.location}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              to="work"
              smooth
              duration={800}
              offset={-80}
              className="btn-primary group cursor-pointer"
            >
              View my work
              <MdOutlineKeyboardArrowRight
                size={22}
                className="group-hover:translate-x-1 transition"
              />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <HiOutlineDocumentDownload size={20} />
              Download resume
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-4 pt-12 max-w-md">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-3xl font-bold text-white">{value}</dt>
                <dd className="text-sm text-slate-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-40 blur-xl" />
            <img
              src={HeroImage}
              alt={profile.name}
              className="relative w-60 sm:w-72 md:w-full max-w-sm rounded-[2rem] border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
