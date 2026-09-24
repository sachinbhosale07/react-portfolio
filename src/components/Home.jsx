import React, { useEffect, useRef } from "react";
import HeroImage from "../asset/heroImage-1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  HiOutlineDocumentDownload,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { Link } from "react-scroll";
import { profile, experience, work, projects } from "../data/portfolio";
import Reveal from "./Reveal";

const years = Math.floor(
  (Date.now() - new Date(experience[0].startDate)) /
    (365.25 * 24 * 3600 * 1000),
);

const stats = [
  { value: `${years}+`, label: "Years experience" },
  { value: work.length, label: "Live sites" },
  { value: `${projects.length}+`, label: "Projects" },
];

// Moves each [data-speed] layer by scrollY * speed while the hero is on screen.
const useParallax = () => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const layers = [...root.querySelectorAll("[data-speed]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      layers.forEach((el) => {
        el.style.transform = `translate3d(0, ${y * el.dataset.speed}px, 0)`;
        if (el.dataset.fade) {
          el.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 1.4));
        }
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
};

const Home = () => {
  const ref = useParallax();

  return (
    <section ref={ref} name="home" className="relative overflow-hidden">
      {/* background layers, each drifting at its own speed */}
      <div
        data-speed="0.35"
        className="parallax pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        data-speed="0.2"
        className="parallax pointer-events-none absolute top-1/2 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/5 blur-3xl"
      />
      <div
        data-speed="0.25"
        className="parallax pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative max-w-6xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 sm:px-6 pt-28 pb-16">
        <div data-speed="0.12" data-fade="1" className="parallax md:w-3/5">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently at {experience[0].company}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="pt-6 text-lg text-slate-400">
              Hi, I'm {profile.name}
            </p>
            <h1 className="pt-2 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
              WordPress Developer &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SEO Specialist
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="pt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              {profile.intro}
            </p>

            <p className="pt-4 flex items-center gap-2 text-slate-400">
              <HiOutlineLocationMarker /> {profile.location}
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap gap-4 pt-8">
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
          </Reveal>

          <Reveal
            as="dl"
            delay={320}
            className="grid grid-cols-3 gap-4 pt-12 max-w-md"
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-3xl font-bold text-white">{value}</dt>
                <dd className="text-sm text-slate-400">{label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div
          data-speed="0.06"
          className="parallax md:w-2/5 flex justify-center"
        >
          <Reveal delay={200} className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 blur-2xl" />
            <img
              src={HeroImage}
              alt={profile.name}
              className="relative w-60 sm:w-72 md:w-full max-w-sm rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-black/50"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Home;
