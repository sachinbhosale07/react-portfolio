import React from "react";
import { FaGithub, FaWordpress } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import Section, { Tag } from "./Section";
import { projects } from "../data/portfolio";

// Shown in place of a screenshot for projects that don't have one.
const Placeholder = ({ name }) => (
  <div className="w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-cyan-700 to-blue-900">
    {name === "Dynamic SEO Dates" ? (
      <FaWordpress size={72} className="text-white/90" />
    ) : (
      <FiCalendar size={72} className="text-white/90" />
    )}
  </div>
);

const Projects = () => {
  return (
    <Section
      name="projects"
      title="Projects"
      subtitle="Plugins and personal projects"
      className="bg-gradient-to-b from-black to-gray-800"
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(({ name, type, image, text, tags, code }) => (
          <div
            key={name}
            className="flex flex-col rounded-lg overflow-hidden bg-gray-900 shadow-md shadow-gray-700"
          >
            {image ? (
              <img
                src={image}
                alt={`${name} screenshot`}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover object-top"
              />
            ) : (
              <Placeholder name={name} />
            )}
            <div className="flex flex-col flex-1 p-5">
              <p className="text-xs uppercase tracking-wide text-cyan-400">
                {type}
              </p>
              <h3 className="text-lg font-semibold pt-1">{name}</h3>
              <p className="text-gray-400 text-sm py-3 flex-1">{text}</p>
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
                  className="mt-4 flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 w-fit"
                >
                  <FaGithub size={18} /> View code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
