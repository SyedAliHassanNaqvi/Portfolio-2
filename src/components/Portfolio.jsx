import React from "react";
import Netflix from "../assets/portfolio/netflix.png";
import Passgen from "../assets/portfolio/passgen.png";
import ReactRouter from "../assets/portfolio/reactRouter.png";
import Rps from "../assets/portfolio/rockpaperscissors.png";
import Tictactoe from "../assets/portfolio/tictactoe.png";
import Currency from "../assets/portfolio/currencyexchange.png";
import Amazon from "../assets/portfolio/amazon.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Amazon,
      link: "https://syedalihassannaqvi.github.io/Amazon-Clone/",
    },
    {
      id: 2,
      src: Passgen,
      link: "https://syedalihassannaqvi.github.io/passgen/",
    },
    {
      id: 3,
      src: ReactRouter,
      link: "https://syedalihassannaqvi.github.io/reactRouter/",
    },
    {
      id: 4,
      src: Currency,
      link: "hhttps://syedalihassannaqvi.github.io/currencyconverter/",
    },
    {
      id: 5,
      src: Tictactoe,
      link: "https://syedalihassannaqvi.github.io/Tic-Tac-Toe-Game/",
    },
    {
      id: 6,
      src: Rps,
      link: "https://syedalihassannaqvi.github.io/rock-paper-scissors/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
