import React from "react";
import LOGO from "../assets/om-bg-remove.png";
import AcharyaJi from "../assets/acharyaji.jpg";
import { default as InstagramIcon } from "../assets/ig.svg";
import { default as FacebookIcon } from "../assets/facebook.svg";
import { default as XIcon } from "../assets/twitter.svg";

function LogoComponent() {
  return (
    <div className="w-full bg-white h-[100px] flex items-center justify-around p-3">
      <div className="flex items-center">
        <img src={LOGO} alt="" className="w-[80px] h-[80px]" />
        <h1 className="text-xl sm:text-3xl font-bold text-[#000000c1] ml-2">
          Sanatana Dharma Foundation
        </h1>
      </div>
      <div className="flex gap-1">
        <a
          href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn"
          target="_blank"
        >
          <img className="h-7 rounded-md" src={InstagramIcon} alt="" />
        </a>
        <a
          href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/"
          target="_blank"
        >
          <img className="h-7 rounded-md" src={FacebookIcon} alt="" />
        </a>
        <a href="https://x.com/dharmaorigins" target="_blank">
          <img className="h-7 rounded-md" src={XIcon} alt="" />
        </a>
      </div>
      <div>
        <img
          className="h-[90px] w-[90px] rounded-full object-cover object-center"
          src={AcharyaJi}
          alt="Acharya Shankaracharya Ji"
        />
      </div>
    </div>
  );
}

export default LogoComponent;
