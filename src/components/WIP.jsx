import React from "react";
import wip from "../assets/wip.png";

function WIP() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center mt-16">
        <img src={wip} className="h-52 my-5" alt="" />
        <h1 className="text-gray-600 text-xl">
          This part of the website is still under work. Please check later 🙏🏼
        </h1>
      </div>
    </div>
  );
}

export default WIP;
