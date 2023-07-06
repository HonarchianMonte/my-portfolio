import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import { projects } from '../Data';

function Projects() {
  return (
    <section id="projects">
        <div className="container md:px-10 pt-20 mx-auto text-center">
            <div classname="flex flex-col w-full mb-20">
                <CodeIcon sx={{ fontSize: 50 }} className="mx-auto mb-4"/>
                    <h1 className="xs:text-4xl md:text-4xl font-medium mb-10 text-white">
                        Apps I've Built
                    </h1>
            </div>
            <div className="flex flex-wrap m-4 mb-20">
                {projects.map((project) => (
                    <a
                    target="_blank" rel="noreferrer"
                    href={project.link}
                    className="sm:w-1/2 p-4"
                    >
                    <div className="relative">
                        <img
                        alt="gallery"
                        className="w-full "
                        src={project.image}
                        />
                        <div  className="absolute border-2 border-green-400 top-0 left-0 right-0 bottom-0 flex flex-col 
                        justify-center items-center px-5 bg-gray-900 opacity-0 hover:opacity-100 ">
                            <h1 className ="text-2xl font-medium text-green-400 mb-1">
                                {project.title}
                            </h1>
                            <h2 className ="text-lg font-normal text-white mb-1">
                            {project.stack}</h2>
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