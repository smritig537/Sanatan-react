import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ShimmerImageSlider from "./ShimmerImageSlider";
import banner from "../assets/web-banner1.jpg";

function ImageSlider() {
  return (
    <div className="-z-10 -top-[30px] relative mt-7">
      <Carousel
        className="w-full h-[180px] sm:w-full sm:h-[500px] mx-auto"
        autoplay={true}
        autoplayDelay={2000}
        loop={true}
        prevArrow={() => <div></div>}
        nextArrow={() => <div></div>}
      >
        <img
          key={1}
          src={banner}
          alt=""
          className="sm:object-cover w-full h-full"
        />
      </Carousel>
    </div>
  );
}

export default ImageSlider;
