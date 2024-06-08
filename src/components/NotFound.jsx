import React from "react";
import err from "../assets/err.png";

function NotFound() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center mt-16">
        <img src={err} className="h-52 my-5" alt="" />
        <h1 className="text-gray-600 text-xl">
          Oops, there is nothing here. Maybe headback to the home page?
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
