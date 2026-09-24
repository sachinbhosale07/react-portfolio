import React from "react";

// Shared wrapper for each page section: scroll target name, background and heading.
const Section = ({ name, title, subtitle, className = "", children }) => (
  <section
    name={name}
    className={`w-full text-white py-24 ${className}`}
  >
    <div className="max-w-screen-lg mx-auto px-4 flex flex-col">
      <div className="pb-10">
        <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
          {title}
        </h2>
        {subtitle && <p className="pt-6 text-gray-400">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-cyan-300 border border-gray-700">
    {children}
  </span>
);

export default Section;
