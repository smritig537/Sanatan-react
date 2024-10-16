import React from 'react';
import banner from "./banner.webp"

const Banner = () => {
    return (
        <>
        
        <img 
        src={banner} 
        alt="Sanatana Dharma Foundation Banner" 
        loading='lazy'
        className="aspect-auto sm:w-full sm:h-full h-[500px] object-contain"
      />
      </>
    );
};

export default Banner;