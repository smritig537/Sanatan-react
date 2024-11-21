import React from "react";

const KumbhCard = (props) => {
  return (
    <>
      <div>
        <div className="flex max-w-full sm:max-w-xs lg:max-w-sm p-6">
          <div>
            <i className={props.icon}></i>
          </div>
          <div className="ml-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.heading}  ✔
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KumbhCard;
