import React from "react";
import LOGO from "../assets/om-bg-remove.png";

function LogoComponent() {
  return (
    <div className="w-full bg-[#FFF2D7] h-[250px] flex flex-col items-center justify-start">
      <div>
        <img src={LOGO} alt="" className="w-[175px] h-[175px] mt-5" />
      </div>
    </div>
  );
}

export default LogoComponent;
