import React from "react";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";

function Divider() {
  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <TempleHinduIcon color="disabled"/>
        </div>
      </div>
    </>
  );
}

export default Divider;
