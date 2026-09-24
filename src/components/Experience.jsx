import React from "react";
import Section from "./Section";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <Section
      name="experience"
      title="Experience"
      subtitle="Where I've been working"
      className="bg-gradient-to-b from-black to-gray-800"
    >
      <ol className="border-l-2 border-cyan-500 pl-6 space-y-10">
        {experience.map(
          ({ company, companyUrl, role, location, start, end, points }) => (
            <li key={company} className="relative">
              <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-500" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold">
                  {role}
                  <span className="text-gray-400"> · </span>
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    {company}
                  </a>
                </h3>
                <p className="text-sm text-gray-400">
                  {start} – {end} · {location}
                </p>
              </div>
              <ul className="list-disc pl-5 pt-4 space-y-2 text-gray-300">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ol>
    </Section>
  );
};

export default Experience;
