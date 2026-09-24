import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Section, { Tag } from "./Section";
import { work } from "../data/portfolio";

const Work = () => {
  return (
    <Section
      name="work"
      title="Work"
      subtitle="Live websites I've worked on at Affinco"
      className="bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="grid sm:grid-cols-2 gap-8">
        {work.map(({ name, url, image, text, tags }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg overflow-hidden bg-gray-900 shadow-md shadow-gray-700 hover:shadow-cyan-900 duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={`${name} homepage`}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {name}
                <FiExternalLink className="text-gray-500 group-hover:text-cyan-400" />
              </h3>
              <p className="text-gray-400 py-3">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Work;
