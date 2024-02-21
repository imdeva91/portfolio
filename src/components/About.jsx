import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a passionate and driven Front-End Developer, I am eager to kickstart my career and contribute my skills and creativity to a dynamic team. With a strong foundation in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I am ready to take on exciting projects and create user-friendly web experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
