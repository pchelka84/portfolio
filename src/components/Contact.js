import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id='contact' className='bg-blue-50'>
      <div className='container px-5 py-10 lg:px-40 mx-auto'>
        <div className='text-center'>
          <MailIcon className='w-14 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4'>
            Contact Me
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Get in touch with me via email or the form below.
          </p>
        </div>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2 w-full md:py-8 mb-4 pr-4'>
            <p className='mb-4'>
              I am seeking out for opportunities to collaborate with companies,
              and not only work for them.
            </p>
            <p className='title-font font-semibold text-gray-900'>
              MY LOCATION
            </p>
            <p className='mt-1'>New York, NY 10023</p>
          </div>
          <form
            netlify
            name='contact'
            className='flex flex-col lg:w-1/2 w-full md:py-8 mt-8 md:mt-0'
          >
            <div className='relative mb-4'>
              <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-400'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-400'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 h-28 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              />
            </div>
            <button
              type='submit'
              className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
