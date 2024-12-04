import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import banner1 from '../assets/guruji_banner.jpg';
import banner2 from '../assets/kumbh_mela_banner.jpg';

const Banner = () => {
  const slides = [
    {
      image: banner1,
      heading: "Sanatana Dharma Foundation",
      paragraph: "Preserving timeless wisdom, fostering peace, and uniting humanity through Sanatana Dharma.",
      link: "/kumbhmela", // Target URL
    },
    {
      image: banner2,
      heading: "Maha Kumbh Mela 2025",
      paragraph: "We are offering luxurious tents at the grand Maha Kumbh Mela, providing a unique blend of comfort, spirituality, and cultural immersion.",
      link: "/kumbhmela", // Target URL
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[300px] sm:h-[500px]">
        {slides.map((slide, index) => (
          <Link
            to={slide.link} // Add Link here
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-5 sm:pl-10 text-white">
              {index === currentSlide && (
                <div className="animate-slide-up space-y-3">
                  <h2 className="text-md sm:text-5xl font-[Catamaran] font-extrabold ">
                    {slide.heading}
                  </h2>
                  <p className="text-sm font-[satisfy] w-[70%] sm:text-lg">{slide.paragraph}</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
