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
          <p className='lg:w-2/3 mx-auto text-base text-gray-500'>
            Got any question? Feel free to reach out through any platform below
          </p>
        </div>
        <div
          className='lg:w-1/2 w-full md:py-8 mb-4 pr-4 mx-auto text-center flex flex-col md:flex-row
        '
        >
          <div className='flex-1'>
            {" "}
            <a
              href='mailto:joy.evgeniya@gmail.com'
              className='animate-pulse hover:text-blue-700'
            >
              <i className='fas fa-envelope-square text-3xl'></i>
            </a>
          </div>
          <div className='flex-1'>
            <a
              href='https://www.linkedin.com/in/evgeniya-v-47aa00174/'
              target='_blank'
              className='animate-pulse hover:text-blue-700'
            >
              <i className='fab fa-linkedin text-3xl'></i>
            </a>
          </div>
          <div className='flex-1'>
            <a
              href='https://github.com/pchelka84'
              target='_blank'
              className='animate-pulse hover:text-blue-700'
            >
              <i className='fab fa-github text-3xl'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
