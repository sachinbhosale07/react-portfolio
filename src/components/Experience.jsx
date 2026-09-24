import React from "react";
import { FiExternalLink, FiMapPin, FiCalendar } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience, durationSince } from "../data/portfolio";

const Experience = () => {
  return (
    <Section
      name="experience"
      eyebrow="Experience"
      title="Where I've been working"
      className="bg-ink-800/40"
    >
      <div className="space-y-6">
        {experience.map(
          ({
            company,
            companyUrl,
            role,
            location,
            start,
            startDate,
            end,
            points,
          }) => (
            <Reveal as="article" key={company} className="card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-bold text-white">
                  {company[0]}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {role}
                      </h3>
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 pt-1 font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        {company} <FiExternalLink size={14} />
                      </a>
                    </div>
                    {end === "Present" && (
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300 ring-1 ring-emerald-400/20">
                        Current role
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-1 pt-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar /> {start} – {end}
                      {startDate &&
                        end === "Present" &&
                        ` · ${durationSince(startDate)}`}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin /> {location}
                    </span>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 pt-6 text-slate-300">
                    {points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
};

export default Experience;
