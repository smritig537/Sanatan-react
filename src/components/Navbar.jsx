import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown open/close state
  };

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
    setIsDropdownOpen(false); // Close dropdown on route change
  }, [location]);

  return (
    <nav className="bg-[#491c1d] border-[#f08619] py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-8 mr-1 sm:h-12" alt="Landwind Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Sanatana Dharma Foundation
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-[#f084199a] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? "block" : "hidden"}`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="."
                className={({ isActive }) => `flex items-center py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`} 
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex items-center py-2 pl-3 pr-4 rounded ${isDropdownOpen ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
              >
                About
                <svg className={`ml-2 w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 z-10 mt-2 bg-white rounded shadow-lg lg:bg-transparent lg:shadow-none">
                  <li>
                    <NavLink
                      to="sanatanadharma"
                      className={({ isActive }) => `block py-2 pl-5 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
                    >
                      Sanatana Dharma
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="Locations-in-india"
                      className={({ isActive }) => `block py-2 pl-5 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
                    >
                      Locations in India
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) => `block py-2 pl-5 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
                    >
                      Blogs
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/media"
                className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
              >
                Association & Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="supporters"
                className={({ isActive }) => `block py-2 pl-3 pr-4 rounded ${isActive ? "bg-[#f08619] text-white" : "text-white hover:bg-[#f084199a]"}`}
              >
                Supporters
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
