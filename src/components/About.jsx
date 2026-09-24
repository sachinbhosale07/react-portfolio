import React from "react";
import { FaWordpress } from "react-icons/fa";
import { FiCpu, FiSearch, FiZap } from "react-icons/fi";
import Section from "./Section";
import Reveal, { stagger } from "./Reveal";
import { about } from "../data/portfolio";

const icons = [FaWordpress, FiCpu, FiSearch, FiZap];

const About = () => {
  return (
    <Section
      name="about"
      eyebrow="About me"
      title="Development that understands content and search"
    >
      <div className="grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-slate-300">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Reveal>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {about.focus.map(({ title, text }, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={title}
                delay={stagger(i)}
                className="card card-hover p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="pt-4 font-semibold text-white">{title}</h3>
                <p className="pt-2 text-slate-400">{text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default About;
