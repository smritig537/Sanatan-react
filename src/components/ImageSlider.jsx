import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ShimmerImageSlider from "./ShimmerImageSlider";
import banner from "../pages/web banner.png";

function ImageSlider() {
    return (
      <div className="-z-10 -top-[30px] relative">
        <Carousel
          className=" w-full h-[300px] sm:w-full sm:h-[500px] mx-auto"
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
            className="object-cover w-full h-full"
          />
        </Carousel>
      </div>
    )
  }

export default ImageSlider;
