import React from "react";
import Section from "./Section";
import { skills } from "../data/portfolio";

const Skills = () => {
  return (
    <Section
      name="skills"
      title="Skills"
      subtitle="Tools and technologies I use every day"
      className="bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map(({ group, items }) => (
          <div
            key={group}
            className="p-5 rounded-lg bg-gray-900/60 border border-gray-700"
          >
            <h3 className="font-semibold text-cyan-400 pb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md bg-gray-800 text-gray-200 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
