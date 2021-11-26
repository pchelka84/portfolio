import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id='projects' className='text-gray-400 bg-blue-50 body-font'>
      <div className='container lg:px-40 px-5 py-10 mx-auto text-center'>
        <div className='flex flex-col w-full mb-14'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4 text-gray-400' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800'>
            Apps I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
            Here are a few projects I have worked on.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/3 w-100 p-4'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center rounded'
                  src={project.image}
                />
                {/* TODO: change styling, add technologies */}
                <div className='px-2 py-10 relative z-10 w-full h-56 border-4 border-gray-800 rounded bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-blue-200 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-md font-medium text-white mb-2'>
                    {project.title}
                  </h1>
                  <p className='text-sm'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
