import blinkImg from "../kumbhmela/tooltip.png";
import { useState,useEffect } from "react";
import kumbh1 from "../kumbhmela/add1.jpg";
import kumbh2 from "../kumbhmela/add2.jpg";
import kumbh3 from "../kumbhmela/add3.jpg";
import {Link} from 'react-router-dom'


const KumbhAdd = () => {
  const images = [kumbh1, kumbh2, kumbh3,];

  const [isVisible, setIsVisible] = useState(false);  // Initial state set to false to hide the card initially

  const handleClose = () => {
    setIsVisible(false);
  };

  // Using useEffect to display the card after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);  // After 2 seconds, show the card
    }, 2000); // 2000 ms = 2 seconds

    // Cleanup function to clear the timeout if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {isVisible && (
        <div className="tooltip-container fixed z-50 top-16 -left-96 sm:right-16 mx-auto mt-20 p-2 sm:p-6 rounded-lg max-w-72 sm:max-w-96 bg-white border shadow-lg shadow-black">
          <i
            className="fa fa-times float-end text-xl cursor-pointer hover:scale-110 transition-all close-btn"
            onClick={handleClose}
          ></i>
          <div className="tooltip">
            <img src={blinkImg} className="sm:w-52 w-44 mx-auto blink" alt="" />
            <p className="text-base text-center mt-4 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              iusto veniam magni recusandae, dolor illo molestias amet dicta
              eos? Similique.
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
            
            to='/kumbhmela'
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
