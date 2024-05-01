import React, { useState } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling

// Import your images
import image1 from './Shri_Jagannatha_Temple.jpg';
import image2 from './LOGO.jpg';
import image3 from './om.png';
import image4 from './LOGO.jpg';

function ImageSlider() {
  // Array of image URLs
  const images = [image1, image2, image3, image4];

  // State to keep track of current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider-container">
      <button className='prev-button' onClick={prevSlide}>Prev</button>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      </div>
      <button className='next-button' onClick={nextSlide}>Next</button>
    </div>
  );
}

export default ImageSlider;

