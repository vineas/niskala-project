import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoNiskala from "../../../src/assets/img/logo/niskala-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/">
              <Image
                src={logoNiskala}
                alt="Niskala Studio"
                className="h-16 w-auto"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
              </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/niskalastudios.id/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Niskala Studio™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
