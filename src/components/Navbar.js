import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="font-medium text-white md:mb-0 ml-3 text-xl hover:text-gray-400">
            Monte P. Honarchian
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-4 hover:text-white">
            About
            </a>
            <a href="#projects" className="mr-4 hover:text-white">
                Projects
            </a>
            <a href="#skills" className="mr-4 hover:text-white">
                Skills
            </a>
            <a href="#education" className="mr-4 hover:text-white">
                Education
            </a>
            <a href="#contact" className="mr-4 hover:text-white">
                Contact
            </a>
            
        </nav>
            
        <a href="#contact" className="inline-flex items-center bg-gray-800
        border-0 py-1 px-3 focus:outline-none hover:bg-gray-700  hover:text-white rounded text-base mt-4 md:mt-0">
            Hire Me<ArrowForwardIcon/>
        </a>
        
      </div>
    </header>
  );
}
