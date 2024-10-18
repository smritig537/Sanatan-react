import React from "react";
import Divider from "../components/Divider";

const imageUrl = {
  Meetings: Array.from({ length: 140 }, (_, index) => index + 1),
  Political: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  Spiritual: Array.from({ length: 163 }, (_, index) => index + 1),
  "Spiritual Events 2": Array.from({ length: 145 }, (_, index) => index + 1),
  "Social Activity": Array.from({ length: 21 }, (_, index) => index + 1),
  Other: Array.from({ length: 120 }, (_, index) => index + 1),
};

const GallerySection = ({ title, category }) => {
  const images = imageUrl[category];

  return (
    <div className="my-10">
      <h1 className="font-oswald text-[#313131] font-bold text-3xl text-center mb-6">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-screen-xl">
        {images.map((e) => (
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
      <Divider />
    </div>
  );
};

function Gallery() {
  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mb-12">
          Gallery
        </h1>
        <GallerySection title="Meetings" category="Meetings" />
        <GallerySection title="Spiritual Events" category="Spiritual" />
        <GallerySection title="Spiritual Events 2" category="Spiritual Events 2" />
        <GallerySection title="Political" category="Political" />
        <GallerySection title="Social Activity" category="Social Activity" />
        <GallerySection title="Other Images" category="Other" />
      </div>
    </div>
  );
}

export default Gallery;
