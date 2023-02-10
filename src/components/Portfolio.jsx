import React from "react";
import EcommerceWebsite from "../asset/portfolio/EcommerceWebsite.jpg";
import FoodDeliveryApp from "../asset/portfolio/FoodDeliveryApp.jpg";
import NikeShoesLandingPageUIdesign2 from "../asset/portfolio/NikeShoesLandingPageUIdesign2.jpg";
import RealTimeChatApp from "../asset/portfolio/RealTimeChatApp.jpg";
import SpotifyCloneApp from "../asset/portfolio/SpotifyCloneApp.jpg";
import ShopeLandingPageUidesign from "../asset/portfolio/ShopeLandingPageUidesign.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: EcommerceWebsite,
    },
    {
      id: 2,
      src: SpotifyCloneApp,
    },
    {
      id: 3,
      src: RealTimeChatApp,
    },
    {
      id: 4,
      src: FoodDeliveryApp,
    },
    {
      id: 5,
      src: NikeShoesLandingPageUIdesign2,
    },
    {
      id: 6,
      src: ShopeLandingPageUidesign,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
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
          className="grid sm:grid-cols-3 md:grid-col-3 gap-8
      px-12 sm:px-0"
        >
        {portfolio.map(({ id, src }) => {
          return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md
              duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 
                hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 
                hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
         
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
