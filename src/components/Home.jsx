import React from "react";
import me from "../assets/me.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My Self Deva Kumar Singh.
          </p>

          <div>
            <a
              href="mailto:official.imdeva91@gmail.com"

              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Hire Me

            </a>

          </div>
        </div>

        <div>
          <img
          // style={{mixBlendMode:"screen"}}
            src={me}
            alt="my profile"
            className="profile"
            // className="rounded-2xl mx-auto mt-5 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
