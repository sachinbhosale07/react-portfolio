import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Section from "./Section";
import { profile } from "../data/portfolio";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";

const channels = [
  { icon: HiOutlineMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "sachin-bhosale04", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "sachinbhosale07", href: profile.github },
  { icon: HiOutlineLocationMarker, label: "Location", value: profile.location },
];

const Contact = () => {
  return (
    <Section
      name="contact"
      eyebrow="Contact"
      title="Have a WordPress or SEO project in mind?"
      subtitle="Tell me what you're building or what needs fixing. I'll reply with the most practical next step."
      className="bg-ink-800/40"
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <ul className="lg:col-span-2 space-y-4">
          {channels.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-slate-400">{label}</span>
                  <span className="block truncate font-medium text-white">{value}</span>
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="card card-hover flex items-center gap-4 p-4"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="card flex items-center gap-4 p-4">{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        <form
          action="https://getform.io/f/53b06dfa-c85b-4eed-b55c-a76a940adbcf"
          method="POST"
          className="card lg:col-span-3 p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" name="name" required placeholder="Your name" aria-label="Your name" className={inputClass} />
            <input type="email" name="email" required placeholder="Your email" aria-label="Your email" className={inputClass} />
          </div>
          <textarea
            name="message"
            required
            placeholder="Your message"
            aria-label="Your message"
            rows="7"
            className={inputClass}
          ></textarea>
          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
