import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";

const imageUrl = {
  "Social Welfare": [1, 2, 3, 4, 5, 6, 7],
  "Medical support": [1, 2, 3, 4],
  Awards: [1, 2, 3, 4],
  Political: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19 ],
  "Women's Welfare": [1, 3, 4, 5, 6, 2],
  "Spiritual":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82]
};

function Gallery() {
  return (
    <div className="flex-grow mx-auto">
      <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mt-10">
        Gallery
      </h1>
      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Social Welfare
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Social Welfare"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/SocialWelfare/${e}.webp`}
            alt="Sanatan dharma foundation Socail welfare"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>
      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Political
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Political"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Political/${e}.webp`}
            alt="Sanatan dharma foundation Political"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>
      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Awards
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Awards"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Awards/${e}.webp`}
            alt="Sanatan dharma foundation Awards"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>

      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Women's Welfare
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Women's Welfare"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Womens Welfare/${e}.webp`}
            alt="Sanatan dharma foundation Women's Welfare"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>

      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Medical Support
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Medical support"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Medical Support/${e}.webp`}
            alt="Sanatan dharma foundation Medical Support"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>
      <Divider />
      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Spiritual Events
      </h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto my-5">
        {imageUrl["Spiritual"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Spiritual/${e}.webp`}
            alt="Sanatan dharma foundation Spiritual Events"
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
        
      </div>
    </div>
  );
}

export default Gallery;
