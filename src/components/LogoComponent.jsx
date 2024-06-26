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
        <h1 className="hidden sm:block text-3xl font-bold text-[#000000c1] ml-2">
          Sanatana Dharma Foundation
        </h1>
      </div>
      <div className="flex gap-1 ">
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
      <img
        className="object-cover object-center rounded-full h-[80px] w-[80px]"
        src={AcharyaJi}
        alt="Acharya Shankaracharya Ji"
      />
    </div>
  );
}

export default LogoComponent;
