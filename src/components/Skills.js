import { languages, libraries, misc } from "../Data";

import MemoryIcon from "@mui/icons-material/Memory";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

function Skills() {
  return (
    <section id="skills">
      <div className="heading px-5 xs:pt-20 p-10 mx-auto text-center lg:px-40">
        <MemoryIcon
          sx={{ fontSize: 50 }}
          className="mx-auto flex flex-col w-full mb-4"
        />
        <h1 className="xs:text-4xl xs:text-center font-medium text-white mb-4">
          Skills &amp; Technologies
        </h1>
      </div>

      <div className="container mx-auto mt-1 lg:px-40 sm:flex xs:mb-20">
        
        <div className="skill-container mxs:w-full w-1/3">
          <h1 className="xs:text-2xl text-center font-medium text-white mb-4">
            Languages &amp; <br></br> Frameworks
          </h1>
          <div className="bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
            {languages.map((languages) => (
              <div key={languages} className="p-2">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="font-medium text-white">{languages}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-container mxs:w-full w-1/3">
          <h1 className="xs:text-2xl text-center font-medium text-white mb-4">
            Design &amp; <br></br> UI Libraries
          </h1>
          <div className="bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
            {libraries.map((libraries) => (
              <div key={libraries} className="p-2">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center ">
                  <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="font-medium text-white">{libraries}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-container mxs:w-full w-1/3">
          <h1 className="xs:text-2xl text-center font-medium text-white mb-4">
            Other Skills &amp; <br></br> Technologies
          </h1>
          <div className="bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
            {misc.map((misc) => (
              <div key={misc} className="p-2">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="font-medium text-white">{misc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
