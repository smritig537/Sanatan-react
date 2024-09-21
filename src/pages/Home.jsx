import React, { lazy, Suspense } from "react";
import Swamiji from "./mainImg.webp";
import Divider from "../components/Divider";
import swamiji1 from "../assets/roll1.webp";
import swamiji2 from "../assets/roll2.webp";
import Banner from "../components/Banner";
import guru from "../assets/guru.jpg";

// Lazy load Form for performance optimization
const Form = lazy(() => import("../components/Form"));

const Home = () => {
  return (
    <>
      <Banner />

      <main className="m-auto max-w-full w-[90%] sm:w-[986px] text-base sm:text-xl mb-10 p-5 sm:p-0 overflow-x-hidden">
        <h1 className="font-oswald text-[#313131] font-bold text-2xl sm:text-5xl text-center my-10">
          Sanatana Dharma Foundation
        </h1>

        <p className="items-center mb-3 text-left sm:text-justify rounded-sm">
          The Sanatana Dharma Foundation is dedicated to helping individuals
          reconnect with the{" "}
          <a
            href="https://sanatanadharmafoundation.co/sanatanadharma"
            className="text-blue-600 underline"
          >
            teachings of Sanatana Dharma
          </a>{" "}
          (Hinduism). It offers spiritual workshops, cultural festivals, and
          meditation retreats to provide guidance on one's spiritual journey. By
          preserving Vedic traditions and promoting Hindu philosophy, the foundation
          fosters a deeper understanding of ancient wisdom.
        </p>

        <section>
          <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
            About Sanatana Dharma Foundation
          </h2>
          <p className="text-gray-700 text-left sm:text-justify">
            In today's world, it can be easy to get lost in the chaos of everyday
            life. Organizations like the Sanatana Dharma Foundation provide a space
            to reconnect with our spiritual roots and cultural heritage, offering a
            platform to delve into the teachings of Sanatana Dharma (Hinduism).
          </p>
        </section>

        <section>
          <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
            Core of Sanatana Dharma
          </h2>
          <p className="text-gray-700 sm:text-justify text-left">
            The core of Sanatana Dharma is the timeless Sanskrit teachings that
            have been passed down for generations. These teachings include the
            concept of karma, moral values, and the importance of ethical principles.
            Through workshops and events, the foundation fosters community and 
            connection while preserving Vedic traditions.
          </p>
        </section>

        <section>
          <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
            Mission of Sanatana Dharma Foundation
          </h2>
          <p className="text-gray-700 sm:text-justify text-left">
            The Sanatana Dharma Foundation offers spiritual guidance, teachings,
            and a community space for those seeking to deepen their understanding
            of Hinduism. Through outreach and cultural events, it spreads messages
            of peace, love, and unity.
          </p>

          <img
            className="h-auto sm:h-[500px] object-cover object-center m-auto mb-5"
            src={Swamiji}
            loading="lazy"
            alt="Founder of Sanatana Dharma Foundation"
          />
          <p className="items-center mb-5 p-2 text-justify rounded-sm bg-orange-50">
            Our founder, Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami
            Narayan Nand Giriji Maharaj, is an esteemed spiritual leader and devoted
            activist of Sanatana Dharma.
          </p>
        </section>

        <section>
          <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
            Earlier Life
          </h2>
          <p className="text-gray-700 sm:text-justify text-left">
            Mahamadaleshwar Giriji Maharaj pursued several careers before dedicating
            himself to spiritual leadership. From a businessman to a spiritual guide,
            he has made a significant impact in the fields of education and social
            activism.
          </p>
        </section>

        <section>
          <h2 className="sm:text-4xl text-2xl mt-5 font-medium text-left sm:text-center text-orange-900">
            Compassion
          </h2>
          <p className="text-gray-700 sm:text-justify text-left">
            Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand
            Giriji Maharaj founded the Sanatana Dharma Foundation to promote the 
            principles and teachings of Sanatana Dharma and preserve the cultural
            heritage of Bharat.
          </p>

          <Divider />
        </section>
      </main>

      <section>
        <h2 className="font-oswald text-[#313131] font-semibold text-3xl sm:text-5xl text-center mt-10 mb-10">
          Mission
        </h2>

        <div className="m-auto max-w-full w-[90%] sm:w-[986px] text-base sm:text-xl mb-10 p-5 sm:p-0 overflow-x-hidden">
          <div className="flex flex-col gap-y-5 sm:flex-row justify-center">
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72"
              src={swamiji1}
              loading="lazy"
              alt="Swamiji at Kasi - Image 1"
            />
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72"
              src={swamiji2}
              loading="lazy"
              alt="Swamiji at Kasi - Image 2"
            />
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72"
              src={guru}
              loading="lazy"
              alt="Spiritual Leader of Sanatana Dharma"
            />
          </div>

          <h2 className="p-1 mt-5 mb-5 text-center">
            "The Sanatana Dharma Foundation is dedicated to the revival and
            resurrection of ancient Sanatana Dharma Ideologies."
          </h2>

          <Divider />
          <p className="font-oswald text-[#313131] font-bold text-3xl sm:text-5xl text-center my-10">
            Interest Form
          </p>

          <Suspense fallback={<div>Loading form...</div>}>
            <Form subTitle="I am interested to associate / support the Sanatana Dharma Foundation. My details are below:" />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Home;
