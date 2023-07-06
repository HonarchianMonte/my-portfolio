import React from "react";

function About() {
  return (
    <section id="about">
      <div id="container" className= "mx-auto flex px-10 pt-20 md:flex-row flex-col items-center ">
        <div className="text-container lg:ml-10 lg:flex-grow sm:w-1/2 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-2xl mb-3">
          Hi, my name is,
          </h2>
          <h1 className="lg:text-5xl md:text-3xl xs:text-3xl font-medium text-white mb-1">
            Monte P. Honarchian | Software Developer
          </h1>
          <h1 className="lg:text-5xl md:text-3xl xs:text-3xl font-medium text-green-400 mb-2 ">
            Crafting excellence, line by line.
          </h1>

          <p className="md:mr-10 md:pr-11 border-white"></p>
          <div className="pt-4 xs:px-3">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 lg:px-6 focus:outline-none hover:bg-green-600
                        rounded text-lg xs:px-4 xs:mr-3 xs:my-4">
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-white bg-gray-800 border-0 py-2 lg:px-6 focus:outline-none hover:bg-gray-700
                        hover:text-white rounded text-lg lg:mr-3 xs:mr-6 xs:px-4 xs:mb-4 ml-3">
              See My Projects
            </a>
            <a
              href={require("../Assets/Resume.pdf")}
              download="Monte Honarchian Resume"
              className="animate-bounce inline-flex lg:mt-4 md:mt-6 text-white bg-green-500 border-0 py-2 lg:px-6 focus:outline-none hover:bg-green-600
                        rounded text-lg xs:px-4 xs:mt-3 xs:mr-3">
              View My Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:ml-2 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl focus:outline-1 "
            alt="s"
            src={require("../selfie.jpg")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
