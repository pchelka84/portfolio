import { LocationMarkerIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";

export default function Footer() {
  return (
    <footer className='bg-gray-400 text-gray-100'>
      <div className='container mx-auto p-6 flex-col items-center flex flex-col'>
        <p className='mb-4'>
          <a href='#' className='hover:underline'>
            To the Top
          </a>
        </p>
        <p className='mb-1 text-sm'>
          Powered by <i className='fas fa-heart animate-pulse text-red-50'></i>{" "}
          and <i className='fas fa-coffee'></i>.
        </p>
        <p className='mb-1 text-sm'>
          <LocationMarkerIcon className='inline text-gray-400 w-6 align-text-bottom pr-1' />
          New York City, NY
        </p>
      </div>
    </footer>
  );
}
