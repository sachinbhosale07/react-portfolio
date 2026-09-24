import React from "react";
import { profile } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 py-8 text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>{profile.title} · Nagpur, India</p>
    </div>
  </footer>
);

export default Footer;
