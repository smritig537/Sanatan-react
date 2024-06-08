import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await fetch(process.env.REACT_APP_IMAGES_API);
      console.log(process.env.REACT_APP_IMAGES_API);
      const images = await data.json();
      let galleryImagesList = images.slice(0, 20);
      const temp = [];
      const updatedGalleryImagesList = galleryImagesList.filter((url) => {
        if (
          !(
            url.includes("IMG-20240501-WA0006") ||
            url.includes("IMG-20240501-WA0009") ||
            url.includes("IMG-20240501-WA0012") ||
            url.includes("IMG-20240501-WA0013") ||
            url.includes("IMG-20240501-WA0049") ||
            url.includes("IMG-20240501-WA0021")
          )
        ) {
          return true;
        } else {
          temp.push(url);
        }
      });
      const latest = [...updatedGalleryImagesList, ...temp];

      setGalleryImages(latest);
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
                className="h-70 w-full max-w-full rounded-lg object-cover object-center"
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
