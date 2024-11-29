import React from "react";

const Preparation = (props) => {
  return (
    <>
      <section
        id="preparation"
        className="py-16 bg-gradient-to-r mt-16 from-orange-800 to-white"
      >
        <div className="flex justify-center flex-wrap-reverse lg:justify-around">
          <div id="text-content" className="lg:w-[42%] w-[80%] hidden-element">
            <span className="text-base font-[Catamaran] font-light">
              {props.title}
            </span>
            <h2 className="sm:text-5xl text-3xl font-bold  mt-8 font-[Catamaran]">
            {props.heading}
            </h2>
            <p className="sm:text-lg text-base mt-6 ">
             {props.description}
            </p>
          </div>
          <img
            src={props.image}
            loading="lazy"
            className="lg:w-[50%] w-[80%]"
            alt="sanatan dharma foundation maha kubh mela 2025 preparation image"
          />
        </div>
      </section>
    </>
  );
};

export default Preparation;
