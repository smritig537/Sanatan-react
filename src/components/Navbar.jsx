import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsClicked();
  }, [location]);
  return (
    <div
      className={`w-full bg-[#F08619] ${isClicked ? "h-screen" : ""}`}
    >
      <div className="my-5 mx-5 toggleButton  flex flex-row items-center justify-between sm:hidden">
        <h1 className="text-white text-xl font-semibold">Menu</h1>
        <button
          className="toggleButton bg-transparent border-none text-white sm:hidden"
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
        <Link
          to="."
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Home
        </Link>
        <Link
          to="about"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          About
        </Link>
        <Link
          to="/gallery"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Gallery
        </Link>
        <Link
          to="/bookings"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Bookings
        </Link>
        <Link
          to="/volunteer"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Volunteer
        </Link>
        <Link
          to="/contact"
          className={`no-underline text-white ${
            isClicked ? "h-[70px]" : ""
          } mx-4 text-xl`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;