import React from "react";

const About = () => {
  return (
    <section id='about' className=' bg-blue-100'>
      <div className='container mx-auto flex px-20 md:py-20 py-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900'>
            Hi, I'm Evgeniya.
            <br className='hidden md:inline-block' />{" "}
          </h1>
          <p className='text-lg mb-2 text-gray-700 font-medium'>
            I am a Front-end Developer.
          </p>
          <p className='mb-8 leading-relaxed'>
            I love to build clean, simple, and functional things, and I love
            what I do.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-block text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-500 hover:text-gray-200 rounded lg:text-lg'
            >
              Work With Me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-block text-gray-200 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded lg:text-lg'
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-contain sm:mx-auto h-68'
            alt='hero'
            src='./codingWoman.svg'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
