import React from "react";
import Section from "./Section";
import { about } from "../data/portfolio";

const About = () => {
  return (
    <Section
      name="about"
      title="About"
      className="bg-gradient-to-b from-gray-800 to-black"
    >
      {about.paragraphs.map((text) => (
        <p key={text} className="text-lg text-gray-300 pb-6">
          {text}
        </p>
      ))}

      <div className="grid sm:grid-cols-2 gap-6 pt-4">
        {about.focus.map(({ title, text }) => (
          <div
            key={title}
            className="p-5 rounded-lg bg-gray-900/60 border border-gray-700"
          >
            <h3 className="font-semibold text-cyan-400">{title}</h3>
            <p className="text-gray-400 pt-2">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
