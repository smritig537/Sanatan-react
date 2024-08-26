import React from "react";
import { default as InstagramIcon } from "../assets/ig.svg";
import { default as FacebookIcon } from "../assets/facebook.svg";
import { default as XIcon } from "../assets/twitter.svg";

function Footer() {
return (
<div className="w-full bg-[#F08619] h-[50px] flex items-center justify-around">
<h1 className="text-white text-l ml-4 font-thin">
Sanatana Dharma Foundation
</h1>
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
</div>
);
}

export default Footer;