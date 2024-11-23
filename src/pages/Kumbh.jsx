import React from "react";
import kumbh1 from "../kumbhmela/sample.jpg";
import kumbhBg from "../kumbhmela/kumbh.mp4";
import { useEffect, useState } from "react";
import TentDetails from "../components/TentDetails";
import Preparation from "../components/Preparation";

const Kumbh = () => {
  const [text, setText] = useState("Maha Kumbh Mela 2025");

  useEffect(() => {
    const texts = [
      "Prayagraj Kumbh 2025",
      "Sacred Gathering",
      "Sanatana Dharma",
      "Faith and Tradition",
      "Religious Pilgrimage",
      "Kumbh Flag Hoisting",
      "Kumbh Luxury Tents",
      "World's Largest Gathering",
    ];

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

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

      <section className="p-8 lg:mt-8 mt-48">
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
                {text}
              </p>
            </div>

            <p className="text-white font-sans mt-4  text-wrap max-w-[400px]">
              Experience the spiritual grandeur of Maha Kumbh Mela 2025 at
              Prayagraj! Unite in faith, tradition, and devotion at the world’s
              largest gathering for divine blessings and sacred rituals
            </p>
          </div>
        </div>

        <div className="wrap mt-14">
          <button className="button">Submit</button>
        </div>
      </section>

      <section className=" lg:mt-40 sm:mt-96 mb-10 mt-72">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Kumbh Mela
        </h1>
        <div className="flex flex-col px-4 mt-8 sm:px-6 md:px-20 items-center justify-center bg-hero overflow-hidden">
          <div className="flex flex-col gap-6 lg:flex-row items-center max-w-8xl">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 lg:pr-16">
              <h2 className="text-2xl sm:text-3xl lg:mt-0 mt-5 md:text-4xl text-center lg:text-left text-orange-800 leading-tight font-medium">
                Kumbha Mela is a major pilgrimage and festival in Hinduism.
              </h2>
              <h3 className="mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base lg:text-md text-center lg:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                On 4 February 2019, Kumbh Mela witnessed the largest peaceful
                public gathering of humans ever recorded. It is celebrated in a
                cycle of approximately 12 years, to celebrate every revolution
                Brihaspati (Jupiter) completes, at four river-bank pilgrimage
                sites: Prayagraj (Ganges-Yamuna-Sarasvati rivers confluence),
                Haridwar (Ganges), Nashik (Godavari), and Ujjain (Shipra).
              </h3>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-6 py-3 rounded font-semibold text-md bg-orange-800 text-white border-2 border-orange-500 hover:bg-orange-400">
                  Get started
                </button>
                <button className="w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4 px-6 py-3 rounded font-semibold text-md bg-white text-orange-700 border-2 border-gray-500 hover:bg-orange-800 hover:text-white">
                  Watch a Demo
                </button>
              </div>
            </div>
            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={kumbh1}
                alt="Kumbh Mela"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <TentDetails />
      <Preparation />
    </>
  );
};

export default Kumbh;
