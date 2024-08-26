import React from "react";
import { Link } from "react-router-dom";
import { default as InstagramIcon } from "./assets/insta.svg";
import { default as FacebookIcon } from "./assets/facebook.svg";
import { default as XIcon } from "./assets/twitter.svg";

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://sanatanadharmafoundation.co/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img src="public/logo.png" className="h-14" alt="Sanatan Dharma Foundation Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Sanatan Dharma Foundation
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="hover:underline hover:text-[#F08619] me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/supporters" className="hover:underline hover:text-[#F08619] me-4 md:me-6">
                                Supporters
                            </Link>
                        </li>
                        <li>
                            <Link to="/media" className="hover:underline hover:text-[#F08619] me-4 md:me-6">
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="hover:underline hover:text-[#F08619]">
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-[#F08619] sm:mx-auto dark:border-[#F08619] lg:my-8" />
                <div className="flex justify-center pb-3 gap-1">
                    <a
                        href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="h-7 rounded-md" src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a
                        href="https://x.com/dharmaorigins"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="h-7 rounded-md" src={XIcon} alt="X" />
                    </a>
                    <a
                        href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="h-7 rounded-md" src={InstagramIcon} alt="Instagram" />
                    </a>
                </div>
                <span className="block text-sm text-[#F08619] sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="https://sanatanadharmafoundation.co/" className="hover:underline">
                        Sanatan Dharma Foundation
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
