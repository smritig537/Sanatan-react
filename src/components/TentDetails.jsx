import React from "react";
import tent from "../kumbhmela/car.png";
import { useState } from "react";

const TentDetails = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: "Free Wifi",
      description: "High peed free wifi for all",
      content:
        "Complimentary high-speed Wi-Fi ensures guests remain connected during their stay, allowing them to browse, stream, or work seamlessly in the comfort of their luxury tents. Whether for personal use or staying updated, this essential service enhances the convenience and satisfaction of every guest, blending modern amenities with the serene ambiance of the Kumbh Mela experience.",
    },
    {
      title: "Bed With Pillows",
      description: "One king size bed with Pillows, Mattress & Blanket",
      content:
        "Rest and recharge on plush king-size or twin beds equipped with premium-quality mattresses, soft pillows, and cozy blankets. The beds are designed to ensure maximum comfort, offering a perfect night's sleep after a long day exploring the Kumbh Mela. Additional bedside tables add convenience for storing essentials.",
    },
    {
      title: "Coffee Table and Chairs",
      description: "Coffee table with two chairs",
      content:
        "Each tent includes a stylish coffee table paired with two comfortable chairs. Perfect for enjoying a cup of tea, reading, or casual conversations, this setup adds a cozy and functional space for relaxation, blending comfort with practicality.",
    },
    {
      title: "Stationery",
      description: "Stationery for essential items",
      content:
        "A set of essential stationery items, including notepads, pens, and envelopes, is available to cater to guests' needs. Whether for jotting down thoughts, writing letters, or taking notes, these thoughtful additions enhance convenience and add a personalized touch to the",
    },
    {
      title: "Writing Table and Chair",
      description: "Best writing table work personal work",
      content:
        "A dedicated writing table with a chair is thoughtfully provided for guests who wish to work, journal, or plan their itinerary. This ergonomic setup ensures comfort, making it ideal for productive tasks or creative pursuits.",
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
      <section
        id="tent"
        className="flex justify-center bg-gradient-to-bl py-6 from-[#8a45468e]  to-white items-center flex-col"
      >
        <h1 className="lg:text-5xl sm:text-3xl text-lg font-bold font-[Catamaran]">
          Kumbh Mela Luxury Tent Details
        </h1>
        <div className="lg:w-80 sm:w-60 w-40 border-orange-500 mt-4 border-[1px]"></div>
        <div className="flex justify-evenly flex-wrap-reverse mt-4 px-10">
          <p className="sm:text-lg text-sm lg:text-right text-center font-sans mt-4 font-light lg:mt-20 max-w-2xl">
            The Kumbh Mela Luxury Tent accommodations offer a unique blend of
            tradition and modern comfort with eco-friendly, secure, and
            waterproof cottages located close to the main bathing ghat. The
            property accommodates 200 tents per acre, ranging from Premium
            Suites with wooden flooring and upscale interiors to Deluxe and
            Family Cottages designed with neo-ethnic aesthetics. Each tent
            features amenities like king-size beds, en-suite bathrooms, free
            Wi-Fi, and access to borrowable equipment such as room heaters and
            hair dryers. Prices vary depending on the tent type, offering
            options to suit diverse preferences. Experience packages provide
            immersive cultural and spiritual journeys, such as the Royal Bath
            Procession, Akhara, and Naga experiences, offering privileged access
            to these sacred traditions. Tours include yoga, wellness retreats,
            and Ayurvedic treatments like Panchakarma detox and stress
            management. Guests can explore Allahabad's colonial heritage or
            participate in exclusive night walks under the stars. Specialized
            experiences, like the Aghori and Kinnar Akhara tours, provide rare
            insights into these spiritual sects, emphasizing inclusivity and
            ancient traditions. Photography tours and evening kirtans further
            enrich the experience. The Kumbh Mela Luxury Tent accommodations and
            curated packages ensure a memorable, holistic journey into
            spirituality, culture, and wellness.
          </p>
          <img
            src={tent}
            className="lg:w-2/5 sm:w-3/4 w-[100%] mt-4 object-cover"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col mt-8 items-center">
          <div className="lg:w-4/5 w-[90%] h-80 border mt-6 flex py-6 px-6 lg:px-16 items-center flex-col">
            <h2 className="sm:text-4xl text-2xl text-[#EF6C00] font-[Fredoka] font-bold">
              {cards[currentCard].title}
            </h2>
            <h3 className="sm:text-3xl text-xl mt-4 text-[#EF6C00] font-sans font-light">
              {cards[currentCard].description}
            </h3>
            <p className="scrollDesign text-lg text-center font-sans overflow-y-auto font-light mt-4">
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
