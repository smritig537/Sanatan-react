import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ShimmerImageSlider from "./ShimmerImageSlider";

function ImageSlider() {
  const [homeImages, setHomeImages] = useState([]);
  useState(() => {
    const fn = async () => {
      const data = await fetch(process.env.REACT_APP_IMAGES_API);
      const images = await data.json();
      const shuffled = images?.slice().sort(() => 0.5 - Math.random());
      const sliderImages = shuffled.slice(0, 5);
      setHomeImages(sliderImages);
      console.log(sliderImages);
    };
    fn();
  }, []);
  if (homeImages.length > 0) {
    return (
      <div className="my-10 px-5">
        <Carousel
          className="rounded-xl w-full h-[300px] sm:w-2/3 sm:h-[500px] mx-auto"
          autoplay={true}
          autoplayDelay={2000}
          loop={true}
          prevArrow={() => <div></div>}
          nextArrow={() => <div></div>}
        >
          {homeImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
      </div>
    );
  } else
    return (
      <div className="w-screen my-10 px-5">
        <ShimmerImageSlider />
      </div>
    );
}

export default ImageSlider;
