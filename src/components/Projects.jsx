import React from "react";
import movie from "../assets/projects/movie.png";
import wether from "../assets/projects/wether.png";
import foodApp from "../assets/projects/foodApp.png";
import Portfolio from "../assets/projects/portfolio.png"
import qr from "../assets/projects/qr.png"
import foodCart from "../assets/projects/foodCart.png";
import form from "../assets/projects/form.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: wether,
      demo: "https://effulgent-choux-dd2bb6.netlify.app/",
      code: "https://github.com/imdeva91/Wether_app",
    },
    {
      id: 2,
      src: qr,
      demo: "https://qrgenrotar.netlify.app/",
      code: "https://github.com/imdeva91/Qr_gentaror",
    },
    {
      id:3,
      src:movie,
      demo: "http://localhost:5173/",
      code:"https://github.com/imdeva91/movieApp"
    },
    
    {
      id: 4,
      src: Portfolio,
      demo: "https://resilient-moonbeam-ba91df.netlify.app/",
      code: "https://github.com/imdeva91/portfolio",
    },

    {
      id: 5,
      src: foodApp,
      demo: "https://tourmaline-truffle-89f4b5.netlify.app/",
      code: "https://github.com/imdeva91/restaurant"
    },
    {
      id: 6,
      src: foodCart,
      demo: "https://scintillating-faun-52ba71.netlify.app/",
      code: "https://github.com/imdeva91/food_cart",
    },
    {
      id: 7,
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
                <a href={demo} target="_blank" >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
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
