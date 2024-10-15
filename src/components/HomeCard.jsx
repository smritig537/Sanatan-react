import React from 'react';
import {Link} from "react-router-dom"

const HomeCard = (props) => {
  return (
    <div className="relative py-6 sm:py-12">
      <div id={props.id}  className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        
        <div className="flex items-center mb-4">
          <span className="z-5 h-10 w-10 rounded-full bg-orange-900 flex items-center justify-center">
            <i className={props.icon}></i>
          </span>
          <h2 className="text-xl font-bold ml-2 text-orange-900">
            {props.heading}
          </h2>
        </div>

        <div className="relative z-5 mx-auto max-w-md pt-4">
          <div className="space-y-6 text-base leading-7 transition-all duration-300">
            <p className='text-justify text-black font-bold'>
              {props.text}
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <Link to={props.link} className="text-orange-900 hover:text-xl transition-all duration-300">
                Read the docs &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
