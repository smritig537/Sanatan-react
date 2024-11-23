import React from "react";
import bus from "../kumbhmela/bus.png";
import announcement from "../kumbhmela/announcement.png";
import collage from "../kumbhmela/PilgrimageCollage.png";
import tour from "../kumbhmela/tour.png";
import train from "../kumbhmela/train.png";
import home from "../kumbhmela/home.png";
import chakra from "../kumbhmela/chakra.png";
import { Link } from "react-router-dom";

const KumbhMelaSection = () => {
  return (
    <>
      <section id="kumbh" className="py-6 relative">
        <h2 className="lg:text-5xl text-3xl text-white font-[Catamaran] text-center font-extrabold">
          WE ORGANIZED KUMBH
          <br />
          MELA TOUR{" "}
          <img src={bus} className="lg:w-12 w-8 mb-0 lg:mb-4 inline " alt="" />
        </h2>
        <img
          src={announcement}
          className="absolute animate-pulse opacity-80 right-4 sm:top-6 top-20 w-12 sm:w-14 lg:w-28"
          alt=""
        />
        <img
          src={chakra}
          className="absolute spin opacity-80 left-4 top-20 w-12 sm:top-6 sm:w-14 lg:w-28"
          alt=""
        />

        <div className="flex justify-around flex-wrap items-center">
          <img src={collage} className="lg:w-[48%] w-[95%] mt-16" alt="" />
          <div className="lg:w-[48%] w-[90%] lg:mt-0 mt-5">
            <h3 className="sm:text-5xl text-3xl font-bold font-[Catamaran] text-white text-center">
              Plan Your Happy Tour
            </h3>
            <p className="text-lg font-[Catamaran] mt-4 text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              ipsa, impedit atque quas nihil illum optio vel perspiciatis
              quibusdam maiores dolorem non, obcaecati fuga? Dicta atque sint
              neque delectus saepe, voluptates officiis eveniet provident
              corrupti unde. Explicabo fugit veniam illo, corporis expedita
              facere veritatis aperiam illum. Voluptate perferendis delectus,
              accusantium cupiditate possimus nesciunt ad saepe eius est
              recusandae repellendus nulla ratione nihil id excepturi inventore
              sapiente minima velit. Assumenda doloremque perspiciatis
              laboriosam voluptatem atque eius accusantium qui fuga mollitia
              molestias.
            </p>
            <div className="flex justify-evenly mt-4">
              <div className="w-[30%] flex flex-col justify-center items-center">
                <img
                  src={train}
                  className="sm:w-28 w-24 h-24 sm:h-28 object-contain"
                  alt=""
                />
                <p className="lg:text-white text-black text-center font-medium">
                  How to reach
                </p>
              </div>
              <div className="w-[30%] flex flex-col justify-center items-center">
                <img
                  src={home}
                  className="sm:w-28 w-24 h-24 sm:h-28 object-contain"
                  alt=""
                />
                <p className="lg:text-white text-black text-center font-medium">
                  Where to stay
                </p>
              </div>
              <div className="w-[30%] flex flex-col justify-center items-center">
                <img
                  src={tour}
                  className="sm:w-28 w-24 h-24 sm:h-28 object-contain"
                  alt=""
                />
                <p className="lg:text-white text-black text-center font-medium">
                  Tourist guide
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 lg:mt-4">
              <Link
                to="/kumbhmela"
                className="text-white border border-green-700 w-[80%] bg-green-800 hover:bg-green-900 transition-all focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KumbhMelaSection;
