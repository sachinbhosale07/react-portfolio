import affinco from "../asset/work/affinco.jpg";
import affmaven from "../asset/work/affmaven.jpg";
import affninja from "../asset/work/affninja.jpg";
import affdude from "../asset/work/affdude.jpg";
import aimojo from "../asset/work/aimojo.jpg";
import spotify from "../asset/projects/spotify.jpg";
import ichat from "../asset/projects/ichat.jpg";
import animewear from "../asset/projects/animewear.jpg";
import quiz from "../asset/projects/quiz.jpg";

// All portfolio content lives here, so updates don't require touching components.

export const profile = {
  name: "Sachin Bhosale",
  title: "WordPress Developer & SEO Specialist",
  location: "Nagpur, Maharashtra, India",
  email: "sachin.work2424@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachin-bhosale04/",
  github: "https://github.com/sachinbhosale07",
  resume: `${process.env.PUBLIC_URL}/Sachin-Bhosale-Resume.pdf`,
  intro:
    "I build fast, practical WordPress websites, lightweight custom plugins and SEO-focused publishing systems. For 3+ years I've been developing and maintaining high-traffic affiliate and marketing sites at Affinco.",
};

export const about = {
  paragraphs: [
    "I work where WordPress development, search optimisation, content publishing and affiliate marketing meet. I focus on how a website loads, how editors manage it, how search engines understand it and how visitors move toward the intended action.",
    "I prefer lightweight, maintainable solutions over complicated plugin stacks. When a focused custom feature can solve the problem better, I build it around the website's actual workflow.",
  ],
  focus: [
    {
      title: "WordPress Development",
      text: "Custom themes, block patterns and lean page setups built for reliability and fast editing.",
    },
    {
      title: "Custom Plugins",
      text: "Focused PHP and Gutenberg extensions that solve exact needs without bloat.",
    },
    {
      title: "Technical SEO",
      text: "Schema markup, semantic HTML and content structure for search engines and AI answers.",
    },
    {
      title: "Speed & Core Web Vitals",
      text: "Caching, image optimisation and script cleanup for fast, stable pages.",
    },
  ],
};

export const experience = [
  {
    company: "Affinco",
    companyUrl: "https://affinco.com",
    role: "WordPress Developer & SEO Specialist",
    location: "Nagpur, India",
    start: "Jan 2023",
    end: "Present",
    points: [
      "Develop and maintain websites for Affinco and its publishing brands, including AFFMaven, AFFNinja, AIMojo and AFFDude.",
      "Build lightweight custom WordPress plugins and Gutenberg blocks, such as Dynamic SEO Dates for auto-updating dates in content.",
      "Create affiliate UI components: click-to-copy coupon boxes, deal grids, comparison tables and review templates.",
      "Implement technical SEO: JSON-LD schema, semantic HTML, internal linking, sitemaps and content structure for AI answer engines.",
      "Improve Core Web Vitals through caching, image optimisation, script deferral and Cloudflare configuration.",
      "Handle ongoing maintenance: updates, security hardening, site migrations and troubleshooting.",
    ],
  },
];

// Company websites worked on at Affinco.
export const work = [
  {
    name: "Affinco",
    url: "https://affinco.com",
    image: affinco,
    text: "AI-powered digital marketing agency website covering SEO, PPC, CRO and Amazon marketing services.",
    tags: ["WordPress", "Company Site", "SEO"],
  },
  {
    name: "AFFMaven",
    url: "https://affmaven.com",
    image: affmaven,
    text: "Award-winning affiliate marketing, SEO and blogging publication with case studies, tool reviews and deals.",
    tags: ["WordPress", "Affiliate", "Publishing"],
  },
  {
    name: "AFFNinja",
    url: "https://affninja.com",
    image: affninja,
    text: "Affiliate marketing guides, network reviews and campaign data for media buyers.",
    tags: ["WordPress", "Affiliate", "Reviews"],
  },
  {
    name: "AIMojo",
    url: "https://aimojo.io",
    image: aimojo,
    text: "Directory of 3,500+ AI tools with reviews, coupons, guides and news.",
    tags: ["WordPress", "Directory", "Coupons"],
  },
  {
    name: "AFFDude",
    url: "https://affdude.com",
    image: affdude,
    text: "Affiliate intelligence directory to discover and compare programs, networks and marketing tools.",
    tags: ["Directory", "Affiliate", "SEO"],
  },
];

// Personal and side projects. `image` is optional.
export const projects = [
  {
    name: "Dynamic SEO Dates",
    type: "WordPress Plugin",
    text: "Lightweight plugin that inserts auto-updating dates through shortcodes and a Gutenberg block, keeping evergreen articles and search snippets current.",
    tags: ["PHP", "Gutenberg", "WordPress"],
  },
  {
    name: "Conference Nights",
    type: "Web App",
    text: "Dark-themed directory of conference side events with filtering and detailed event schedules.",
    tags: ["React", "TypeScript", "Supabase"],
    code: "https://github.com/sachinbhosale07/Event-Nights",
  },
  {
    name: "Spotify Clone",
    type: "Web App",
    image: spotify,
    text: "Music player with a playlist, progress bar and play / pause / next controls.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/sachinbhosale07/SpotifyClone-MusicApp",
  },
  {
    name: "iChat",
    type: "Web App",
    image: ichat,
    text: "Real-time group chat with join / leave notifications, built on Node.js and Socket.io.",
    tags: ["Node.js", "Socket.io", "JavaScript"],
    code: "https://github.com/sachinbhosale07/RealTimeChatApp-iChat",
  },
  {
    name: "AnimeWear",
    type: "E-commerce Website",
    image: animewear,
    text: "Multi-page clothing store with shop, product, cart, blog and contact pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/sachinbhosale07/E-commerceWebsite-AnimeWear",
  },
  {
    name: "Quiz App",
    type: "Web App",
    image: quiz,
    text: "Multiple-choice quiz that scores answers and shows the result at the end.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/sachinbhosale07/Quizz-app",
  },
];

export const skills = [
  {
    group: "WordPress",
    items: ["WordPress", "Custom Themes", "Custom Plugins", "Gutenberg", "Kadence", "Elementor"],
  },
  {
    group: "Development",
    items: ["PHP", "JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Git"],
  },
  {
    group: "SEO",
    items: ["Technical SEO", "On-Page SEO", "Schema Markup", "AIO Content", "Affiliate Content"],
  },
  {
    group: "Performance & Hosting",
    items: ["Core Web Vitals", "Caching", "Image Optimisation", "Cloudflare", "Linux / Nginx", "Site Migration"],
  },
];
