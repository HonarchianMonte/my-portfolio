import ReadMoreReadLess, { Educate } from "../Data";

import React from "react";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <section id="education">
      <div className="container px-5 pt-20 p-10 mx-auto text-center lg:px-40">
        <SchoolIcon
          sx={{ fontSize: 50 }}
          className="mx-auto inline-block w-10 mb-4"
        />
        <h1 className="sm:text-4xl xs:text-4xl font-medium text-white mb-1">Education</h1>
        <div className="card-containers object-contain items-center content-center text-center p-6  ">
          {Educate.map((Educate) => (
            <div key={Educate} className="bg-gray-900 pb-5 px-4 m-4 shadow-lg rounded-lg overflow-hidden border-2
             border-green-400 hover:border-green-800 object-contain items-center content-center text-center">
              <p className="text-3xl font-medium mt-6 text-white "> {Educate.school}</p>
              <p className="text-med font-medium mt-1 mb-3 text-white"> {Educate.cert}</p>
              <p className=" text-center relative mt-1 mb-3 text-green-400">
                  <ReadMoreReadLess limit={117} >
                  {Educate.description}
                </ReadMoreReadLess>
              </p>
              <a
                        href={Educate.diploma}
                        download="Diplomas"
                        className="inline-flex mt-2 ml-4 text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600
                        rounded text-med">
                        View My Diploma
                    </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
