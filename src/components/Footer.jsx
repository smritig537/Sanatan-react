import React from "react";
import { Link } from "react-router-dom";
import { default as InstagramIcon } from "../assets/ig.svg";
import { default as FacebookIcon } from "../assets/facebook.svg";
import { default as XIcon } from "../assets/twitter.svg";
import { default as Logo } from "../assets/LOGO.jpg";

function Footer() {
  return (
    <footer class="bg-[#491c1d] rounded-lg shadow dark:bg-gray-900 w-full">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Sanatan Dharma Foundation
          </span>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="about" class="hover:underline hover:text-[#f08619] text-white me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                to="supporters"
                class="hover:underline hover:text-[#f08619] text-white me-4 md:me-6"
              >
                Supporters
              </Link>
            </li>
            <li>
              <Link to="media" class="hover:underline hover:text-[#f08619] text-white me-4 md:me-6">
                Media
              </Link>
            </li>
            <li>
              <Link to="/gallery" class="hover:underline hover:text-[#f08619] text-white">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <div className="flex justify-center pb-3 gap-1">
          <a
            href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/"
            target="_blank" rel="noopener"
          >
            <img className="h-7 rounded-md" src={FacebookIcon} alt="" />
          </a>
          <a href="https://x.com/dharmaorigins" target="_blank" rel="noopener">
            <img className="h-7 rounded-md" src={XIcon} alt="" />
          </a>
          <a
            href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn"
            rel="noopener" target="_blank"
          >
            <img className="h-7 rounded-md" src={InstagramIcon} alt="" />
          </a>
        </div>
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://sanatanadharmafoundation.co/"
            class="hover:underline"
          >
            Sanatan Dharma Foundation
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
