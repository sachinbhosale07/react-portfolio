import React from "react";
import { FaWordpress } from "react-icons/fa";
import { FiCode, FiSearch, FiZap } from "react-icons/fi";
import Section from "./Section";
import Reveal, { stagger } from "./Reveal";
import { skills } from "../data/portfolio";

const icons = [FaWordpress, FiCode, FiSearch, FiZap];

const Skills = () => {
  return (
    <Section
      name="skills"
      eyebrow="Skills"
      title="Tools and technologies"
      subtitle="What I use every day to build, optimise and maintain websites."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map(({ group, items }, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group} delay={stagger(i)} className="card p-6">
              <h3 className="flex items-center gap-3 font-semibold text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </span>
                {group}
              </h3>
              <div className="flex flex-wrap gap-2 pt-5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
