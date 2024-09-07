import { Link } from "react-router-dom";
import React from "react";
import swami from "../assets/swami.webp";
import sanatanabout from "../assets/sanatanabout.webp";
import Build from "./build.webp";
import School from "./School.webp";
import School2 from "./School2.webp";
import har from "./HARIDWAR.webp";
import mall from "./mall.webp";
import Divider from "../components/Divider";
import FAQ from "./Faq";

const About = () => {
  return (
    <>
      <head>
        <title>
          Sanatana Dharma Foundation - Preserving Hindu Wisdom and Culture
        </title>
        <meta
          name="description"
          content="Discover the Sanatana Dharma Foundation’s mission to preserve and promote Hinduism through spiritual education, charitable activities, and cultural revival. Explore our initiatives in spiritual development, community service, and pilgrimage support, led by our esteemed spiritual leader."
        />
      </head>

      <main>
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          About Sanatana Dharma Foundation
        </h1>

        <section>
          <div className="container flex justify-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <div className="flex justify-center md:justify-start mt-6 md:mt-0">
                <img
                  src={sanatanabout}
                  alt="Sanatana Dharma Foundation about"
                  className="object-cover rounded-lg shadow-md max-w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="max-w-2xl md:text-left">
                <p className="mt-4 text-gray-600 text-lg text-justify">
                  <b>Sanatana Dharma Foundation</b>, dedicated to the
                  preservation and promotion of <b>Hinduism</b>, strives to
                  revive the profound wisdom of ancient Indian traditions. Our
                  mission, outlined in our <b>Trust Deed</b>, focuses on
                  enhancing the understanding of <b>Sanatana Dharma</b> and
                  fostering cultural renaissance. Our work embodies the
                  principles of <b>spiritual education</b>, charitable
                  initiatives, and support for <b>Hindu pilgrimages</b>. We are
                  committed to providing contemporary approaches to{" "}
                  <b>religious and ethical training</b> while embracing the{" "}
                  <b>liberal and unsectarian nature</b> of Sanatana Dharma. Our
                  foundation aims to combat the erosion of <b>Indian culture</b>{" "}
                  by revitalizing the values of Sanatana Dharma and promoting
                  unity and respect among communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container flex justify-center mx-auto py-6 px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <div className="flex justify-center md:justify-start mt-4 md:mt-0">
                <img
                  src={swami}
                  alt="Spiritual leader Swami Narayan Giriji Maharaj"
                  className="object-cover rounded-lg shadow-md max-w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="max-w-2xl md:text-left">
                <p className="mt-4 text-gray-600 text-lg text-justify">
                  Under the guidance of our esteemed{" "}
                  <b>
                    spiritual leader, Mahamadaleshwar Shri Shri 1008 Anant Shri
                    Vibhushit Swami Narayan Giriji Maharaj
                  </b>
                  , the foundation focuses on <b>spiritual development</b> and{" "}
                  <b>community service</b>. His transition from a successful
                  businessman to a revered spiritual figure exemplifies our
                  commitment to <b>Hindu philosophy</b> and{" "}
                  <b>cultural consciousness</b>. Our programs emphasize{" "}
                  <b>meditation, yoga</b>, and <b>devotional practices</b>,
                  aimed at deepening spiritual insights and promoting ethical
                  living.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Charitable Activities and Community Service
          </h2>
          <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            Our foundation is committed to a wide range of{" "}
            <b>charitable activities</b> and <b>community service</b>, focusing
            on education, healthcare, and support for pilgrimage sites. These
            initiatives align with our goal of fostering a spiritually enriched
            society and upholding the values of Sanatana Dharma. We believe in
            the transformative power of <b>community engagement</b> and strive
            to make a positive impact through our various projects.
          </p>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Spiritual Education
          </h2>
          <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            <b>Spiritual education</b> is at the core of our mission,
            encompassing workshops, seminars, and lectures on{" "}
            <b>Hindu philosophy</b> and practices. Led by esteemed scholars and
            spiritual leaders, these educational programs aim to deepen
            participants' understanding of Sanatana Dharma and equip them with
            insights to navigate modern challenges while staying rooted in
            cultural values.
          </p>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Promoting Pilgrimages to Holy Cities
          </h2>
          <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            We actively promote <b>pilgrimages to holy cities</b> integral to
            the Sanatana Dharma tradition. These sacred journeys not only
            enhance spiritual connections but also support community service
            projects at pilgrimage sites. Our efforts aim to combine spiritual
            exploration with charitable work, reflecting our commitment to a
            holistic approach to religion.
          </p>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Social Media Presence and Community Engagement
          </h2>
          <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            Our strong <b>social media presence</b> on platforms like{" "}
            <a
              href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            , and{" "}
            <a
              href="https://x.com/sanatana_dharma"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{" "}
            allows us to connect with a wider audience and share our
            initiatives. We encourage engagement and participation in our events
            and projects to strengthen our shared commitment to Sanatana Dharma.
          </p>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Join Us in Our Mission
          </h2>
          <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            The Sanatana Dharma Foundation invites all who are passionate about
            the preservation and promotion of Sanatana Dharma to join us.
            Whether through participation in our programs, supporting our
            charitable activities, or simply spreading awareness, your
            involvement is invaluable. Together, we can ensure the enduring
            legacy of our ancient traditions and the growth of a spiritually
            enriched society.
          </p>
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
            Our Projects and Initiatives
          </h2>
          <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={Build}
                alt="Educational Initiatives"
                className="object-cover rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
              <img
                src={School}
                alt="School Development Projects"
                className="object-cover rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
              <img
                src={School2}
                alt="School Facilities"
                className="object-cover rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
              <img
                src={har}
                alt="Pilgrimage Sites"
                className="object-cover rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
              <img
                src={mall}
                alt="Community Services"
                className="object-cover rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <Divider />

        <section>
          <FAQ />
        </section>
      </main>
    </>
  );
};

export default About;
