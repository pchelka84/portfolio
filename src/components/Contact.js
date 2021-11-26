import React from "react";
import { MailIcon, LocationMarkerIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id='contact' className='bg-blue-50'>
      <div className='container px-5 py-10 lg:px-40 mx-auto'>
        <div className='text-center'>
          <MailIcon className='w-14 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4'>
            Contact Me
          </h1>
        </div>
        <div className='lg:w-1/2 w-full md:py-8 mb-4 pr-4 mx-auto text-center'>
          <p className='mb-4'>
            Got any question?{" "}
            <a
              href='mailto:joy.evgeniya@gmail.com'
              className='font-medium animate-pulse hover:underline hover:text-blue-700'
            >
              Contact me.
            </a>
          </p>
          <p className='mb-6'>
            I am seeking out for opportunities to collaborate with companies,
            and not only work for them.
          </p>
          <p className='mt-1'>
            <LocationMarkerIcon className='inline text-gray-400 w-6 align-text-bottom pr-1' />
            Located in New York City, NY 10023
          </p>
        </div>
      </div>
    </section>
  );
}
