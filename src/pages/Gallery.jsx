import React, { useState } from 'react';
import Divider from "../components/Divider";

const imageUrl = {
  "SocialWelfare": [1, 2, 3, 4, 5, 6, 7],
  "Medical Support": [1, 2, 3, 4],
  Awards: [1, 2, 3, 4],
  Political: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  "Womens Welfare": [1, 3, 4, 5, 6, 2],
  "Spiritual": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]
};

const GallerySection = ({ title, category }) => {
  const [showAll, setShowAll] = useState(false);
  const images = imageUrl[category];
  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <div className="my-10">
      <h1 className="font-oswald text-[#313131] font-bold text-3xl text-center mb-6">{title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-screen-xl">
        {displayedImages.map((e) => (
          <div
            key={e}
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={`${process.env.PUBLIC_URL}/gallery/${category}/${e}.webp`}
              alt={`Sanatana Dharma Foundation ${title} ${e}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              {title}
            </span>
          </div>
        ))}
      </div>
      {images.length > 4 && (
        <div className="text-center flex items-center justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <span className="mr-2">{showAll ? 'Show Less' : 'View More'}</span>
            <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform ${showAll ? 'rotate-180' : ''}`}></i>
          </button>
        </div>
      )}
      <Divider />
    </div>
  );
};

function Gallery() {
  return (
    <div className="bg-white flex justify-center items-center dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mb-12">Gallery</h1>
        <GallerySection title="Social Welfare" category="SocialWelfare" />
        <GallerySection title="Political" category="Political" />
        <GallerySection title="Awards" category="Awards" />
        <GallerySection title="Women's Welfare" category="Womens Welfare" />
        <GallerySection title="Medical Support" category="Medical Support" />
        <GallerySection title="Spiritual Events" category="Spiritual" />
      </div>
    </div>
  );
}

export default Gallery;
