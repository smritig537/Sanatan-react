import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsClicked();
  }, [location]);
  return (
    <nav
      className={`sm:w-11/12 w-screen sticky top-0 h-[60px] bg-[#F08619] m-auto ${
        isClicked ? "h-screen" : ""
      }`}
    >
      <div className="flex flex-row items-center justify-between mx-5 my-5 toggleButton sm:hidden">
        <h1 className="text-xl font-semibold text-white">Menu</h1>
        <button
          className="text-white bg-transparent border-none toggleButton sm:hidden"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <ReorderIcon color="inherit" />
        </button>
      </div>
      <div
        className={`${
          isClicked
            ? "h-full flex flex-col items-center justify-start  text-white "
            : "hidden sm:flex sm:flex-row sm:text-white sm:flex-grow sm:justify-center sm:items-center sm:h-full "
        }}`}
      >
        <NavLink id ="nav"
          to="." 
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Home
        </NavLink>
        <NavLink id ="nav"
          to="about"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          About
        </NavLink>
        <NavLink id ="nav"
          to="sanatanadharma"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Sanatana Dharma
        </NavLink>
        <NavLink id ="nav"
          to="supporters"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Supporters
        </NavLink>
        <NavLink id ="nav"
          to="presence-in-india"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Presence in India
        </NavLink>
        <NavLink id ="nav"
          to="/gallery"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Gallery
        </NavLink>
        <NavLink id ="nav"
          to="media"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Media
        </NavLink>
    
        <NavLink id ="nav"
          to="/contact"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Association & Support
        </NavLink>
        
      </div>
    </nav>
  );
}

export default Navbar;
