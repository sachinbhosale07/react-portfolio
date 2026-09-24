import React from "react";
import { FaGithub, FaWordpress } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import Section, { Tag } from "./Section";
import Reveal, { stagger } from "./Reveal";
import { projects } from "../data/portfolio";

// Shown in place of a screenshot for projects that don't have one.
const Placeholder = ({ name }) => (
  <div className="relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-600/40 via-blue-700/30 to-ink-900">
    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
    {name === "Dynamic SEO Dates" ? (
      <FaWordpress size={64} className="relative text-white/90" />
    ) : (
      <FiCalendar size={64} className="relative text-white/90" />
    )}
  </div>
);

const Projects = () => {
  return (
    <Section
      name="projects"
      eyebrow="Projects"
      title="Plugins and personal projects"
      subtitle="Things I've built outside client work, from WordPress plugins to JavaScript apps."
      className="bg-ink-800/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ name, type, image, text, tags, code }, i) => (
          <Reveal
            as="article"
            key={name}
            delay={stagger(i % 3)}
            className="group card card-hover flex flex-col overflow-hidden"
          >
            <div className="overflow-hidden border-b border-white/10">
              {image ? (
                <img
                  src={image}
                  alt={`${name} screenshot`}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <Placeholder name={name} />
              )}
            </div>
            <div className="flex flex-col flex-1 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                {type}
              </p>
              <h3 className="pt-2 text-lg font-bold text-white">{name}</h3>
              <p className="pt-2 pb-4 text-sm text-slate-400 flex-1">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400"
                >
                  <FaGithub size={18} /> View code
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
