import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import { projects } from '../Data';

function Projects() {
  return (
    <section id="projects" className="text-gray-400">
        <div className="container px-5 pt-20 mb-20 py-10 mx-auto text-center lg:px-40">
            <div classname="flex flex-col w-full mb-20">
                <CodeIcon sx={{ fontSize: 50 }} className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium mb- text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    
                    </p>
            </div>
            <div className="flex flex-wrap m-4">
                {projects.map((project) => (
                    <a
                    target="_blank" rel="noreferrer"
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-100 p-4"
                    >
                    <div className="flex relative">
                        <img
                        alt="gallery"
                        className="absolute inset-0 h-58 w-full object-cover object-center"
                        src={project.image}
                        />
                        <div  className="px-5 py-24 border-2 border-green-400 relative z-10 w-full bg-gray-900 opacity-0 
                        hover:opacity-100 ">
                            <h1 className ="tracking-widest text-xl font-medium text-green-400 mb-1">
                                {project.title}
                            </h1>
                            <p className ="tracking-widest text-medium font-normal text-white mb-1">
                            {project.stack}</p>
                        </div>

                    </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects