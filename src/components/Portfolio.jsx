import React from "react";
import EcommerceWebsite from "../asset/portfolio/EcommerceWebsite.jpg";
import FoodDeliveryApp from "../asset/portfolio/FoodDeliveryApp.jpg";
import NikeShoesLandingPageUIdesign2 from "../asset/portfolio/NikeShoesLandingPageUIdesign2.jpg";
import RealTimeChatApp from "../asset/portfolio/RealTimeChatApp.jpg";
import SpotifyCloneApp from "../asset/portfolio/SpotifyCloneApp.jpg";
import ShopeLandingPageUidesign from "../asset/portfolio/ShopeLandingPageUidesign.jpg";

const ProjectLink = ({ href, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
    >
      {children}
    </a>
  ) : (
    <span
      className="w-1/2 px-6 py-3 m-4 text-center text-gray-500 cursor-not-allowed"
      title="Link coming soon"
    >
      {children}
    </span>
  );

const Portfolio = () => {
  // TODO: fill in each project's live demo and source code URLs.
  // Buttons without a URL are shown greyed out.
  const portfolio = [
    {
      id: 1,
      src: EcommerceWebsite,
      title: "E-commerce Website",
      demo: "",
      code: "",
    },
    {
      id: 2,
      src: SpotifyCloneApp,
      title: "Spotify Clone App",
      demo: "",
      code: "",
    },
    {
      id: 3,
      src: RealTimeChatApp,
      title: "Real-time Chat App",
      demo: "",
      code: "",
    },
    {
      id: 4,
      src: FoodDeliveryApp,
      title: "Food Delivery App",
      demo: "",
      code: "",
    },
    {
      id: 5,
      src: NikeShoesLandingPageUIdesign2,
      title: "Nike Shoes Landing Page",
      demo: "",
      code: "",
    },
    {
      id: 6,
      src: ShopeLandingPageUidesign,
      title: "Shop Landing Page",
      demo: "",
      code: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
    w-full text-white min-h-screen"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full min-h-screen"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
      px-12 sm:px-0"
        >
          {portfolio.map(({ id, src, title, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <ProjectLink href={demo}>Demo</ProjectLink>
                <ProjectLink href={code}>Code</ProjectLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
