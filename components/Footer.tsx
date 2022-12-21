import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full ">
      <footer className="p-4 bg-white md:px-6 md:py-6 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-around">
          <a
            href="#"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Movies<span className="pl-1 text-2xl">+</span>
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" target="_blank" className="hover:underline">
            Movies+™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
