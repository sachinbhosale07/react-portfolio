import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Section, { Tag } from "./Section";
import { work } from "../data/portfolio";

const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

// Browser-window frame around a site screenshot.
const Screenshot = ({ image, name, url }) => (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900">
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      <span className="ml-3 truncate text-xs text-slate-500">{hostname(url)}</span>
    </div>
    <div className="overflow-hidden">
      <img
        src={image}
        alt={`${name} homepage`}
        loading="lazy"
        className="w-full aspect-[16/10] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  </div>
);

const Info = ({ name, url, text, tags }) => (
  <div>
    <h3 className="flex items-center gap-2 text-xl font-bold text-white">
      {name}
      <FiArrowUpRight className="text-slate-500 transition group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </h3>
    <p className="text-sm text-cyan-400/80">{hostname(url)}</p>
    <p className="pt-3 text-slate-400">{text}</p>
    <div className="flex flex-wrap gap-2 pt-4">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  </div>
);

const Work = () => {
  const [featured, ...rest] = work;

  return (
    <Section
      name="work"
      eyebrow="Work"
      title="Live websites I've worked on"
      subtitle="Company and brand websites I develop, optimise and maintain at Affinco."
    >
      <a
        href={featured.url}
        target="_blank"
        rel="noreferrer"
        className="group card card-hover grid md:grid-cols-5 gap-8 items-center p-5 sm:p-6"
      >
        <div className="md:col-span-3">
          <Screenshot {...featured} />
        </div>
        <div className="md:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Company website
          </span>
          <div className="pt-2">
            <Info {...featured} />
          </div>
        </div>
      </a>

      <div className="grid sm:grid-cols-2 gap-6 pt-6">
        {rest.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noreferrer"
            className="group card card-hover p-5 sm:p-6 space-y-5"
          >
            <Screenshot {...site} />
            <Info {...site} />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Work;
