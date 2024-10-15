import React from "react";
import Swamiji from "./mainImg.webp";
import Form from "../components/Form";
import Divider from "../components/Divider";
import swamiji2 from "../assets/roll2.webp";
import Banner from "../components/Banner";
import guru from "../assets/guru.jpg";
import guruji from "../assets/roll3.webp"
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <>
      <Banner />
      <section id="header_section" className="w-full p-3 flex justify-center items-center flex-col">
      <h1 className="text-[#491c1d] font-bold text-2xl w-[90%] sm:text-5xl text-center">
          Sanatana Dharma Foundation
        </h1>
        <p className="items-center w-[90%] mb-2 mt-3 text-justify rounded-sm"><i>
          The Sanatana Dharma Foundation is dedicated to helping individuals
          reconnect with the{" "}
          <a
            href="https://sanatanadharmafoundation.co/sanatanadharma"
            className="text-blue-600 underline"
          >
            teachings of Sanatana Dharma
          </a>{" "}
          (Hinduism). It offers a range of programs, including spiritual
          workshops, cultural festivals, and meditation retreats, designed to
          provide guidance and support on one's spiritual journey. By preserving
          Vedic traditions and promoting Hindu philosophy, the foundation
          creates a vibrant community space for learning, growth, and
          connection, fostering a deeper understanding of ancient wisdom and
          values.
          </i></p>
      </section>
      <section className="grid lg:grid-cols-3  sm:grid-cols-2">
      <HomeCard id="card" link="/about" heading="ABOUT THIS FOUNDATION" icon="fas fa-info-circle text-white"
       text="In the bustling world we live in today, it can be easy to get swept away in the chaos and noise of everyday life. It's important to take a step back and reconnect with our spiritual roots, our cultural heritage, and the ancient wisdom that has guided generations before us. This is where organizations like the Sanatana Dharma Foundation come in, providing a space for individuals to delve into the teachings of Sanatana Dharma, also known as Hinduism."/>
     
      <HomeCard id="card" link="/about" heading="ABOUT THIS FOUNDATION" icon="fas fa-info-circle text-white"
       text="In the bustling world we live in today, it can be easy to get swept away in the chaos and noise of everyday life. It's important to take a step back and reconnect with our spiritual roots, our cultural heritage, and the ancient wisdom that has guided generations before us. This is where organizations like the Sanatana Dharma Foundation come in, providing a space for individuals to delve into the teachings of Sanatana Dharma, also known as Hinduism."/>
     
      <HomeCard id="card" link="/about" heading="ABOUT THIS FOUNDATION" icon="fas fa-info-circle text-white"
       text="In the bustling world we live in today, it can be easy to get swept away in the chaos and noise of everyday life. It's important to take a step back and reconnect with our spiritual roots, our cultural heritage, and the ancient wisdom that has guided generations before us. This is where organizations like the Sanatana Dharma Foundation come in, providing a space for individuals to delve into the teachings of Sanatana Dharma, also known as Hinduism."/>
     </section>
     
      <main className="m-auto max-w-full w-[90%] lg:w-[986px] text-base sm:text-xl mb-10 p-5 sm:p-0 overflow-x-hidden">
        <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
          About Sanatana Dharma Foundation
        </h2>
        <p className="text-gray-700 text-left sm:text-justify">
          In the bustling world we live in today, it can be easy to get swept
          away in the chaos and noise of everyday life. It's important to take a
          step back and reconnect with our spiritual roots, our{" "}
          <strong>cultural heritage</strong>, and the ancient wisdom that has
          guided generations before us. This is where organizations like the
          Sanatana Dharma Foundation come in, providing a space for individuals
          to delve into the teachings of <strong>Sanatana Dharma</strong>, also
          known as <strong>Hinduism</strong>.
        </p>

        <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
          Core of Sanatana Dharma
        </h2>
        <p className="text-gray-700 sm:text-justify text-left">
          At the core of <strong>Sanatana Dharma</strong> are the timeless{" "}
          <strong>Sanskrit teachings</strong> that have been passed down through
          the ages. These teachings encompass a wide range of concepts, from the{" "}
          <strong>concept of karma</strong> – the law of cause and effect – to
          the importance of upholding moral values and ethical principles in our
          daily lives. Through spiritual enlightenment, yoga workshops, and
          interfaith initiatives, the foundation aims to provide individuals
          with the guidance and support they need to navigate their spiritual
          journey. One of the key aspects of Sanatana Dharma is the emphasis on
          community and connection. Through a variety of programs and events,
          such as religious education classes, cultural festivals, and
          meditation retreats, the foundation creates a space for individuals to
          come together and learn from one another. By preserving Vedic
          traditions and promoting Hindu philosophy, the foundation seeks to
          uphold traditional values and ensure that the spiritual heritage of{" "}
          <strong>Sanatana Dharma</strong> continues to thrive.
        </p>

        <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
          Mission of Sanatana Dharma Foundation
        </h2>
        <p className="text-gray-700 sm:text-justify text-left">
          Whether you are looking for spiritual guidance, philosophical
          teachings, or simply a community of like-minded individuals, the
          Sanatana Dharma Foundation offers a space for individuals to explore
          their spirituality and deepen their connection to the sacred texts and{" "}
          <strong>teachings of Hinduism</strong>. Through outreach programs and
          cultural events, the foundation is dedicated to spreading the message
          of peace, love, and unity to all who seek it. So, if you are looking
          to reconnect with your spiritual roots, deepen your understanding of
          ancient wisdom, and engage with a vibrant community of spiritual
          seekers, consider getting involved with the{" "}
          <strong>Sanatana Dharma Foundation</strong>. Your spiritual journey
          awaits!
        </p>

        <img
          className="h-auto sm:h-[500px] object-cover object-center m-auto mb-5"
          src={Swamiji}
          loading="lazy"
          alt="Sanatana Dharma Foundation owner"
        />
        <p className="items-center mb-5 p-2 text-justify rounded-sm bg-orange-50">
          Our founder, Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami
          Narayan Nand Giriji Maharaj, is an esteemed spiritual leader and
          devoted activist of Sanatan Dharma. He is a proud citizen of Bharat
          (India) and actively promotes the ancient traditions, values, and
          teachings of Sanatan Dharma.
        </p>

        <h2 className="sm:text-4xl text-2xl mb-3 mt-5 font-medium text-left sm:text-center text-orange-900">
          Earlier Life
        </h2>

        <p className="text-gray-700 sm:text-justify text-left">
          <strong>Mahamadaleshwar Giriji Maharaj</strong> pursued multiple
          careers before dedicating himself to spiritual leadership. He began as
          a successful businessman, contributing to the economic landscape.
          However, driven by his spiritual calling, he transitioned to become a
          renowned spiritual leader. Additionally, he has been involved in the
          fields of education and social activism, striving to create a positive
          impact on society.
        </p>

        <h2 className="sm:text-4xl text-2xl mt-5 font-medium text-left sm:text-center text-orange-900">
          Compassion
        </h2>
        <p className="text-gray-700 sm:text-justify text-left">
          <strong>
            Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan
            Nand Giriji Maharaj
          </strong>{" "}
          is the founder and chairman of the{" "}
          <strong>Sanatana Dharma Foundation</strong>. This foundation serves as
          a platform to preserve, promote, and propagate the principles, values,
          and <strong>teachings of Sanatan Dharma</strong>. Through various
          initiatives, the foundation aims to create awareness about the rich
          cultural heritage of Bharat and facilitate the practice of{" "}
          <strong>Sanatan Dharma</strong> among individuals from all walks of
          life.
        </p>

        <Divider />
      </main>

      <h2 className="font-oswald text-[#313131] font-semibold text-3xl sm:text-5xl text-center mt-10 mb-10">
        Mission
      </h2>

      <section className="m-auto max-w-full w-[90%] sm:w-[986px] text-base sm:text-xl mb-10 p-5 sm:p-0 overflow-x-hidden">
        <div className="flex flex-col gap-y-5 sm:flex-row justify-center">
          <img
            className="object-cover object-center m-auto rounded-full h-72 w-72"
            src={swamiji2}
            loading="lazy"
            alt="Sanatana Dharma Foundation Swamii jii Kasi Second image"
          />
          <img
            className="object-cover object-center m-auto rounded-full h-72 w-72"
            src={guru}
            loading="lazy"
            alt="Swami ji of Sanatana Dharma Foundation"
          />
          <img
            className="object-cover object-center m-auto rounded-full h-72 w-72"
            src={guruji}
            loading="lazy"
            alt="Swami ji of Sanatana Dharma Foundation"
          />
        </div>
        <h2 className="p-1 mt-5 mb-5 text-center">
          "The Sanatana Dharma Foundation is dedicated to the revival and
          resurrection of the ancient Sanatana Dharma and Ideologies."
        </h2>

        <Divider />
        <p className="font-oswald text-[#313131] font-bold text-3xl sm:text-5xl text-center my-10">
          Interest Form
        </p>
        <Form subTitle="I am interested to associate / support the Sanatana Dharma Foundation. My details are below:" />
      </section>
    </>
  );
};

export default Home;
