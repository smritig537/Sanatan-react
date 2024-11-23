import React from "react";
import preparaton from "../kumbhmela/preparation.jpg";

const Preparation = () => {
  return (
    <>
      <section
        id="preparation"
        className="py-16 bg-gradient-to-r mt-16 from-orange-800 to-white"
      >
        <div className="flex justify-center flex-wrap-reverse lg:justify-around">
          <div id="text-content" className="lg:w-[42%] w-[80%] hidden-element">
            <span className="text-base font-[Catamaran] font-light">
              Preparations Of Maha Kumbh Mela 2025
            </span>
            <h2 className="sm:text-5xl text-3xl font-bold  mt-8 font-[Catamaran]">
            The Sanatana Dharma Foundation and Akhada Society Preparation Of Maha Kumbh Mela 2025
            </h2>
            <p className="sm:text-lg text-base mt-6 ">
              Today in Prayagraj, the Sanatana Dharma Foundation and Akhada
              Society proudly raised the flag, marking the start of preparations
              for the grand Mahakumbh Mela 2025. This sacred event symbolizes
              unity, faith, and tradition, bringing people together to celebrate
              spirituality and culture. The flag-hoisting ceremony is a
              significant step toward this historic gathering
            </p>
          </div>
          <img
            src={preparaton}
            loading="lazy"
            className="lg:w-[50%] w-[80%]"
            alt="sanatan dharma foundation maha kubh mela 2025 preparation"
          />
        </div>
      </section>
    </>
  );
};

export default Preparation;
