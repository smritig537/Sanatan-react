import React from "react";
import WIP from "../components/WIP";
import Divider from "../components/Divider";
import { default as InstagramIcon } from "../assets/ig.svg";
import { default as FacebookIcon } from "../assets/facebook.svg";
import { default as XIcon } from "../assets/twitter.svg";

function Media() {
  return (
    <div className="flex-grow w-4/5 m-auto">
      <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-5">
        Media
      </h1>
      <Divider />
      <h1 className="font-oswald text-[#313131] font-bold text-3xl text-center">
        Social Media
      </h1>
      <h1 className="text-center p-1 mb-5  rounded-sm text-lg text-gray-800 mt-2">
        Connect with Sanatana Dharma Foundation's offcial Instagram, X and
        Facebook accounts to stay up to date.
      </h1>
      <div className="flex justify-around">
        <a
          href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn"
          target="_blank" rel="noopener"
        >
          <div className="flex flex-col gap-1">
            <img className="h-14 rounded-md" src={InstagramIcon} alt="" />
            <h1 className="text-xl bg-orange-100 p-2 rounded-md">Instagram</h1>
          </div>
        </a>
        <a
          href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/"
          target="_blank" rel="noopener"
        >
          <div className="flex flex-col gap-1">
            <img className="h-14 rounded-md" src={FacebookIcon} alt="" />
            <h1 className="text-xl bg-orange-100 p-2 rounded-md">Facebook</h1>
          </div>
        </a>
        <a href="https://x.com/dharmaorigins" rel="noopener" target="_blank">
          <div className="flex flex-col gap-1">
            <img className="h-14 rounded-md" src={XIcon} alt="" />
            <h1 className="text-xl bg-orange-100 p-2 rounded-md">
              X (Twitter)
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Media;
