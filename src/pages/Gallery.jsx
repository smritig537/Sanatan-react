import React from "react";
import Divider from "../components/Divider";

const imageUrl = {
  SocialWelfare: [1, 2, 3, 4, 5, 6, 7],
  "Medical support": [1, 2, 3, 4],
  Awards: [1, 2, 3, 4],
  Political: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  "Women's Welfare": [1, 3, 4, 5, 6, 2],
  "Spiritual": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68
  ]
};

const GallerySection = ({ title, category }) => {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        {imageUrl[category].map((e) => (
          <div
            key={e}
            className="relative rounded-lg overflow-hidden bg-gray-100 shadow-lg"
          >
            <img
              src={`${process.env.PUBLIC_URL}/gallery/${category}/${e}.webp`}
              alt={`Gallery ${title} ${e}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};

function Gallery() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Gallery</h1>
        <GallerySection title="Social Welfare" category="Social Welfare" />
        <GallerySection title="Political" category="Political" />
        <GallerySection title="Awards" category="Awards" />
        <GallerySection title="Women's Welfare" category="Women's Welfare" />
        <GallerySection title="Medical Support" category="Medical support" />
        <GallerySection title="Spiritual Events" category="Spiritual" />
      </div>
    </div>
  );
}

export default Gallery;
