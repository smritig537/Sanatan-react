import React from "react";
import kumbh1 from "../kumbhmela/sample.jpg";

const Kumbh = () => {
  return (
    <>
      <section className="pt-5">
        <h1 className="text-center text-5xl font-bold">Kumbh Mela</h1>
        <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
          <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
            <div className="w-full md:w-1/2 lg:pr-32">
              <h2 className="text-4xl  text-center md:text-left text-orange-800 leading-tight font-medium">
                Kumbha Mela is a major pilgrimage and festival in Hinduism.
              </h2>
              <h3 className="mt-6 md:mt-10 text-sm lg:text-md text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                On 4 February 2019, Kumbh Mela witnessed the largest peaceful
                public gathering of humans ever recorded. It is celebrated in a
                cycle of approximately 12 years, to celebrate every revolution
                Brihaspati (Jupiter) completes, at four river-bank pilgrimage
                sites: Prayagraj (Ganges-Yamuna-Sarasvati rivers confluence),
                Haridwar (Ganges), Nashik (Godavari), and Ujjain (Shipra).
              </h3>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-orange-800 text-white border-2 border-orange-500 hover:bg-orange-400">
                  Get started
                </button>
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-orange-700 border-2 border-gray-500 hover:bg-orange-800 hover:text-white">
                  Watch a Demo
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src={kumbh1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kumbh;
