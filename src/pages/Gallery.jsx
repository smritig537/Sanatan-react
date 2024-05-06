import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await fetch(process.env.REACT_APP_IMAGES_API);
      console.log(process.env.REACT_APP_IMAGES_API);
      const images = await data.json();
      // const shuffled = images?.slice().sort(() => 0.5 - Math.random());
      const galleryImagesList = images.slice(0, 20);
      setGalleryImages(galleryImagesList);
    };
    fn();
  }, []);

  return (
    <div className="flex-grow m-2">
      <h1 className="text-xl font-semibold mb-2 text-center sm:text-5xl">
        Gallery
      </h1>
      {!galleryImages.length ? (
        <Spinner
          color="orange"
          className="w-16 h-16 text-orange-500/50 mx-auto"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((imageLink, index) => (
            <div key={index}>
              <img
                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
