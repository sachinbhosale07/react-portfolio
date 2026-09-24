import React from "react";

// Shared wrapper for each page section: scroll target name, spacing and heading.
const Section = ({ name, eyebrow, title, subtitle, className = "", children }) => (
  <section name={name} className={`relative w-full py-24 sm:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-2xl pb-12">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-white pt-3">
          {title}
        </h2>
        {subtitle && <p className="pt-4 text-lg text-slate-400">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
    {children}
  </span>
);

export default Section;
