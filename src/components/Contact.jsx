import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Section from "./Section";
import { profile } from "../data/portfolio";

const inputClass =
  "p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500";

const Contact = () => {
  return (
    <Section
      name="contact"
      title="Contact"
      subtitle="Have a WordPress or SEO project in mind? Send me a message."
      className="bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 break-all"
          >
            <HiOutlineMail size={24} className="shrink-0" /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <FaLinkedin size={24} className="shrink-0" /> LinkedIn
          </a>
          <p className="text-gray-500">{profile.location}</p>
        </div>

        <form
          action="https://getform.io/f/53b06dfa-c85b-4eed-b55c-a76a940adbcf"
          method="POST"
          className="flex flex-col gap-4 md:w-2/3"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className={inputClass}
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            rows="8"
            className={inputClass}
          ></textarea>
          <button
            type="submit"
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 w-fit rounded-md hover:scale-105 duration-300"
          >
            Let's talk
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-gray-500 pt-20">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </Section>
  );
};

export default Contact;
