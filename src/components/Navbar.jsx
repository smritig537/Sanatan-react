import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/om-bg-remove.png";
import SocialMedia from "./social";
import ScrollToTop from "./ScrollToTop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMediaMenu = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  useEffect(() => {
    setIsOpen(false);
    setIsMediaOpen(false); // Close submenu on location change
  }, [location]);

  return (
    <>
      <section className="bg-white fixed top-0 left-0 w-full z-10 bg-white">
        <marquee className="sm:text-[13px] text-[10px] p-1.5 font-bold">
          SANATANA DHARMA FOUNDATION | Founded By
          <span className="text-[#f08619]">
            {" "}
            SRI SRI SRI ANANT VIBHUSHIT 1008 NARAYANANATH GIRIJI MAHARAJ
          </span>
          | Transform Your Life with the Wisdom of Sanatana Dharma |
          Embracing Sanatana Dharma Cultivating Spiritual Wisdom | Cultural
          Harmony for All
        </marquee>
        <nav className="bg-[#491c1d] m-0 border-[#f08619] py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between w-full">
            <Link to="/" className="flex ml-4 items-center">
              <img src={logo} className="h-8 sm:h-12" alt="Sanatana Dharma Foundation logo" />
              <span className="self-center text-xl ml-1 font-semibold whitespace-nowrap text-white">
                Sanatana Dharma Foundation
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-[#f084199a] focus:outline-none"
                aria-controls="mobile-menu-2"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? "block" : "hidden"}`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink to="/" className={({ isActive }) =>
                      `flex items-center py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white lg:text-[#f08619]" : "text-white hover:text-[#f08619]"} lg:bg-transparent lg:p-0`
                    }>
                    <i className="fas fa-home mr-1"></i> Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white lg:text-[#f08619]" : "text-white hover:text-[#f08619]"} lg:bg-transparent lg:p-0`}>
                    <i className="fas fa-info-circle mr-1"></i> About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/sanatanadharma" className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white lg:text-[#f08619]" : "text-white hover:text-[#f08619]"} lg:bg-transparent lg:p-0`}>
                    <i className="fas fa-book mr-1"></i> Sanatana Dharma
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/locations-in-india" className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white lg:text-[#f08619]" : "text-white hover:text-[#f08619]"} lg:bg-transparent lg:p-0`}>
                    <i className="fas fa-map-marker-alt mr-1"></i> Locations
                  </NavLink>
                </li>

                {/* Media with Dropdown */}
                <li className="relative">
                  <button onClick={toggleMediaMenu} className="flex pl-3 items-center text-white hover:text-[#f08619]">
                    <i className="fas fa-film mr-1"></i> Media
                    <i className={`ml-1 fas ${isMediaOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                  </button>
                  {isMediaOpen && (
                    <ul className="absolute top-full left-0 w-40 mt-2 bg-[#491c1d] text-white rounded shadow-lg">
                      <li>
                        <NavLink to="/media" className="block px-4 py-2 hover:bg-[#f08619]">
                          <i className="fas fa-play-circle mr-1"></i> Media
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery" className="block px-4 py-2 hover:bg-[#f08619]">
                          <i className="fas fa-image mr-1"></i> Gallery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/blogs" className="block px-4 py-2 hover:bg-[#f08619]">
                          <i className="fas fa-blog mr-1"></i> Blogs
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other Nav Links */}
                <li>
                  <NavLink to="/contact" className={({ isActive }) =>
                      `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white lg:text-[#f08619]" : "text-white hover:text-[#f08619]"} lg:bg-transparent lg:p-0`
                    }>
                    <i className="fas fa-phone mr-1"></i>Support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <SocialMedia />
      <ScrollToTop />
    </>
  );
};

export default Navbar;
