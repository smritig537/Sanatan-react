import React from 'react';
import banner from "./banner.webp"

const Banner = () => {
    return (
        <>
        
        <img 
        src={banner} 
        alt="Sanatana Dharma Foundation Banner" 
        loading='lazy'
        className="aspect-auto w-full h-full"
      />
      </>
    );
};

export default Banner;