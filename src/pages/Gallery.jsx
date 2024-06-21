import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";

const imageUrl = {
  "Social Welfare": [1, 2, 3, 4, 5, 6, 7],
  "Medical support": [1, 2, 3, 4],
  Awards: [1, 2, 3, 4],
  Political: [2, 3, 4, 5, 6, 7, 8],
  "Women's Welfare": [1, 3, 4, 5, 6, 2],
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
<<<<<<< HEAD
      <div className="grid w-4/5 grid-cols-3 gap-4 mx-auto my-5">
=======
      <div className="w-4/5 mx-auto grid grid-cols-1 gap-4 my-5 sm:grid-cols-3">
>>>>>>> origin/main
        {imageUrl["Social Welfare"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/SocialWelfare/${e}.jpg`}
            alt=""
            className="w-[600px] h-[600px] object-cover"
          />
        ))}
      </div>
      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Political
      </h1>
<<<<<<< HEAD
      <div className="grid w-4/5 grid-cols-3 gap-4 mx-auto my-5">
=======
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
>>>>>>> origin/main
        {imageUrl["Political"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Political/${e}.jpg`}
            alt=""
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>
      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Awards
      </h1>
<<<<<<< HEAD
      <div className="grid w-4/5 grid-cols-3 gap-4 mx-auto my-5">
=======
      <div className="w-4/5 mx-auto grid sm:grid-cols-3 grid-cols-1 gap-4 my-5">
>>>>>>> origin/main
        {imageUrl["Awards"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Awards/${e}.jpg`}
            alt=""
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>

      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Women's Welfare
      </h1>
<<<<<<< HEAD
      <div className="grid w-4/5 grid-cols-3 gap-4 mx-auto my-5">
=======
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
>>>>>>> origin/main
        {imageUrl["Women's Welfare"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Womens Welfare/${e}.jpg`}
            alt=""
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>

      <Divider />

      <h1 className="font-oswald text-[#313131] mt-5 font-bold text-3xl text-center">
        Medical Support
      </h1>
<<<<<<< HEAD
      <div className="grid w-4/5 grid-cols-3 gap-4 mx-auto my-5">
=======
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
>>>>>>> origin/main
        {imageUrl["Medical support"].map((e) => (
          <img
            src={`${process.env.PUBLIC_URL}/gallery/Medical Support/${e}.jpg`}
            alt=""
            className="w-[500px] h-[500px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
