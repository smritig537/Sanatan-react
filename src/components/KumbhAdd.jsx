import blinkImg from "../kumbhmela/tooltip.png";
import { useState, useEffect } from "react";
import kumbh1 from "../kumbhmela/add1.jpg";
import kumbh2 from "../kumbhmela/add2.jpg";
import kumbh3 from "../kumbhmela/add3.jpg";
import { Link, useLocation } from "react-router-dom";

const KumbhAdd = () => {
  const images = [kumbh1, kumbh2, kumbh3];
  const [isVisible, setIsVisible] = useState(false); // Initial state set to false to hide the card initially
  const location = useLocation(); // Current location from React Router

  const handleClose = () => {
    setIsVisible(false);
  };

  // Show the card after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Hide the card when location changes
  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <>
      {isVisible && (
        <div className="tooltip-container fixed z-50 top-16 right-4 sm:right-16 mx-auto mt-20 p-2 sm:p-6 rounded-lg max-w-72 sm:max-w-96 bg-white border shadow-lg shadow-black">
          <i
            className="fa fa-times float-end text-xl cursor-pointer hover:scale-110 transition-all close-btn"
            onClick={handleClose}
          ></i>
          <div className="tooltip">
            <img src={blinkImg} className="sm:w-52 w-44 mx-auto blink" alt="" />
            <p className="text-base text-center mt-4 px-4">
              Experience unmatched luxury at Kumbh 2025 with eco-friendly tents,
              prime location, and exclusive spiritual tours. Book now
            </p>
            <div className="image-container overflow-x-hidden">
              <div className="image-slider flex mt-4">
                {images.map((src, index) => (
                  <img
                    key={index}
                    className="sm:w-52 w-44 ml-4"
                    src={src}
                    alt={`Slide ${index}`}
                  />
                ))}
              </div>
            </div>
            <Link
              to="/kumbhmela"
              className="py-2 mt-4 px-4 max-w-md flex justify-center rounded-lg items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Book Your Tour Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default KumbhAdd;
