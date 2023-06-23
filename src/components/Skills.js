import { languages, libraries, misc } from "../Data";

import MemoryIcon from "@mui/icons-material/Memory";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

function Skills() {
  return (
    <section id="skills">
      <div className="heading px-5 pt-20 py-10 mx-auto text-center lg:px-40">
        <div classname="flex flex-col w-full mb-20">
          <MemoryIcon
            sx={{ fontSize: 50 }}
            className="mx-auto inline-block w-10 mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium text-white mb-4 text-center">
            Skills &amp; Technologies
          </h1>
        </div>
      </div>

      <div className="container mx-auto text-center lg:px-40 flex border-green-400 mb-12">
        <div className="card-container w-full ">
          <h1 className="sm:text-2xl font-medium text-white mb-4 text-center">
            Languages &amp; Frameworks
          </h1>
          <div className="skill-container bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
            {languages.map((languages) => (
              <div key={languages} className="p-2 ">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="font-medium text-white">{languages}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-container w-full">
          <h1 className="title sm:text-2xl font-medium text-white mb-4 text-center">
            Design &amp; UI Libraries
          </h1>
          <div className="skill-container  bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
            {libraries.map((libraries) => (
              <div key={libraries} className="p-2">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <VerifiedIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="font-medium text-white">{libraries}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-container w-full ">
          <h1 className="sm:text-2xl font-medium text-white mb-4 text-center">
            Other Technologies
          </h1>
          <div className="skill-container  bg-gray-900 m-2 p-1 shadow-lg rounded-lg overflow-hidden border-2 border-green-400 hover:border-green-800">
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
