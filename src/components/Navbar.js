import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

import Resume from "../files/myResume.pdf";

export default function Navbar() {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center'>
        <div className='title-font font-medium text-white md:mb-6 mb-3'>
          <a href='#about' className='ml-3 text-xl'>
            <ChipIcon className='w-4 h-4' />
          </a>
        </div>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 hover:text-gray-400'>
            Portfolio
          </a>
          <a href='#skills' className='mr-5 hover:text-gray-400'>
            Skills
          </a>
          <a href={Resume} className='mr-5 hover:text-gray-400' target='_blank'>
            My Resume
          </a>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 text-white py-1 px-3 hover:text-gray-400 text-base mt-4 md:mt-0 mb-2 md:mb-0'
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
