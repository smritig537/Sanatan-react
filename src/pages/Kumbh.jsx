import React from "react";
import kumbh1 from "../kumbhmela/sample.jpg";
import kumbhBg from '../kumbhmela/kumbh.mp4'

const Kumbh = () => {
  return (
    <>

<section>
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src={kumbhBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient-overlay"></div>
        </div>
        </section>

      <section className="p-8 lg:mt-0 mt-40">
        <div className="flex justify-between">
          <div>
           
            <h1 className="text-5xl sm:text-8xl mt-2 font-[Catamaran] font-extrabold text-white">
              Maha kumbh Mela 2025
            </h1>
            <div>
              {" "}
              <p
                id="change"
                className=" text-4xl sm:text-5xl mt-2 font-[Satisfy] text-white"
              >
               Lorem ipsum dolor sit amet. {/* {text} */}
              </p>
            </div>

            <p className="text-white font-sans mt-4  text-wrap max-w-[400px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat tempora voluptatum amet quod!
            </p>
          </div>

          
        </div>

        <div className="wrap mt-14">
          <button className="button">Submit</button>
        </div>
      </section>
      


      <section className=" lg:mt-40 sm:mt-96 mt-80">
        <h1 className="text-center text-5xl font-bold">Kumbh Mela</h1>
        <div className="flex px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
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
