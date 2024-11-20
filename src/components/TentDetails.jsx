import React from "react";
import tent from "../kumbhmela/car.png";
import { useState } from "react";

const TentDetails = () => {

  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: "Free Wifi",
      description: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus",
    },
    {
      title: "Free Parking",
      description: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus...",
    },
    {
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus...",
    },
    {
      title: "Luxury Rooms",
      description: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, provident minus...",
    },
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };



  return (
    <>
      <section id="tent" className="flex justify-center bg-gradient-to-bl py-6 from-[#8a45468e]  to-white items-center flex-col">
        <h1 className="lg:text-5xl sm:text-3xl text-lg font-bold font-[Fredoka]">
          Kumbh Mela Luxury Tent Details
        </h1>
        <div className="lg:w-80 sm:w-60 w-40 border-orange-500 mt-4 border-[1px]"></div>
        <div className="flex justify-evenly flex-wrap-reverse mt-4 px-10">
          <p className="sm:text-lg text-sm text-center font-[Fredoka] mt-4 font-light lg:mt-20 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam, voluptatem architecto tempore facilis laborum voluptates veniam modi numquam reiciendis?</p>
        <img src={tent} className="lg:w-2/5 sm:w-3/4 w-[100%] mt-4 object-cover" alt="" />
        </div>




<div className="w-full flex flex-col mt-8 items-center">
      <div className="lg:w-4/5 w-[90%] h-80 border mt-6 flex py-6 px-6 lg:px-16 items-center flex-col">
        <h2 className="sm:text-4xl text-2xl font-[Fredoka] font-bold">
          {cards[currentCard].title}
        </h2>
        <h3 className="sm:text-3xl text-xl font-[Fredoka] font-light">
          {cards[currentCard].description}
        </h3>
        <p className="scrollDesign text-lg text-center font-[Fredoka] overflow-y-auto font-light mt-4">
          {cards[currentCard].content}
        </p>
      </div>

      <div className="flex mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
      </section>
    </>
  );
};

export default TentDetails;
