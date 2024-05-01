// Gallery.js

import React from 'react';
import './Gallery.css'; // Import your CSS file for styling

// Import your images
import image1 from './Pictures/First.jpg';
import image2 from './Pictures/second.jpg';
import image3 from './Pictures/Third.jpg';
import image4 from './Pictures/fourth.jpg';
import image5 from './Pictures/fifth.jpg';
import image6 from './Pictures/sixth.jpg';

function Gallery() {
  // Array of image URLs
  const images = [image1, image2, image3,image4,image5,image6];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
