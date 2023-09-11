import React from "react";
import apartmant from "../assets/projects/apartment.png";
import youtube from "../assets/projects/youtube.png";
import tradeTracke from "../assets/projects/tradeTrake.png";
import shoeShop from "../assets/projects/shoeShop.png";
import foodApp from "../assets/projects/foodApp.png";
import Portfolio from "../assets/projects/portfolio.png"

import foodCart from "../assets/projects/foodCart.png";
import form from "../assets/projects/form.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: apartmant,
      demo: "https://main--magical-twilight-c9f99b.netlify.app/",
      code: "https://github.com/imdeva91/apartment",
    },
    {
      id: 2,
      src: youtube,
      demo: "https://gleeful-pixie-e68a68.netlify.app/",
      code: "https://github.com/imdeva91/youtube",
    },
    {
      id: 3,
      src: tradeTracke,
      demo: "https://kaleidoscopic-sprinkles-fcc523.netlify.app/",
      code: "https://github.com/imdeva91/trades-trak",
    },
    {
      id: 4,
      src: Portfolio,
      demo: "https://kaleidoscopic-sprinkles-fcc523.netlify.app/",
      code: "https://github.com/imdeva91/trades-trak",
    },

    {
      id: 5,
      src: shoeShop,
      demo: "https://astounding-jalebi-d5f72a.netlify.app/",
      code: "https://github.com/imdeva91/Shoe-market",
    },
    {
      id: 6,
      src: foodApp,
      demo: "https://tourmaline-truffle-89f4b5.netlify.app/",
      code: "https://github.com/imdeva91/restaurant"
    },
    {
      id: 7,
      src: foodCart,
      demo: "https://scintillating-faun-52ba71.netlify.app/",
      code: "https://github.com/imdeva91/food_cart",
    },
    {
      id: 8,
      src: form,
      demo: "https://resilient-crepe-d9dd14.netlify.app/",
      code: "https://github.com/imdeva91/react-form"
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="pt-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {Projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-4">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>



              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Projects;
