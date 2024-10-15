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
      <section className="grid lg:grid-cols-3">
      <HomeCard id="card" link="/about" heading="ABOUT THIS FOUNDATION" icon="fas fa-info-circle text-white"
       text="In the bustling world we live in today, it can be easy to get swept away in the chaos and noise of everyday life. The demands of modern living often lead us to neglect our inner selves. It’s crucial to take a step back and reconnect with our spiritual roots, cultural heritage, and the ancient wisdom that has guided generations before us. This is where organizations like the Sanatana Dharma Foundation come in, providing a nurturing space for individuals to explore and delve into the profound teachings of Sanatana Dharma, also known as Hinduism. Through various programs and activities, the foundation fosters a sense of community and understanding, helping individuals rediscover the timeless values and practices that can enrich their lives and promote personal growth."/>
     
     <HomeCard id="card" link="/about" heading="OUR MISSION" icon="fa-solid fa-bullseye text-white"
       text="Whether you seek spiritual guidance, philosophical teachings, or simply a community of like-minded individuals, the Sanatana Dharma Foundation provides a welcoming space for exploration and growth. Here, individuals can deepen their connection to the sacred texts and teachings of Hinduism, engaging in meaningful discussions and practices that resonate with their spiritual journeys. Through outreach programs and cultural events, the foundation is dedicated to spreading messages of peace, love, and unity to all who are open. If you're looking to reconnect with your spiritual roots, enhance your understanding of ancient wisdom, and connect with a vibrant community of seekers, consider getting involved with the Sanatana Dharma Foundation. Your transformative spiritual journey awaits!"/>
     
      <HomeCard id="card" link="/sanatanadharma" heading="CORE OF SANATANA DHARMA" icon="fa-brands fa-pagelines text-white"
       text="At the core of Sanatana Dharma are timeless Sanskrit teachings passed down through generations. These teachings cover concepts like karma—the law of cause and effect—and the importance of upholding moral values in daily life. The Sanatana Dharma Foundation guides individuals on their spiritual journeys through yoga workshops, enlightenment, and interfaith initiatives. A key aspect is fostering community and connection. Through programs like education classes, cultural festivals, and meditation retreats, the foundation creates a space for individuals to learn from one another. By preserving Vedic traditions and promoting Hindu philosophy, the foundation ensures the spiritual heritage of Sanatana Dharma continues to thrive."/>
     
     
     </section>

     <div className="grid lg:grid-cols-2"> <img
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
        </p></div>
     
      <main className="m-auto max-w-full w-[90%] lg:w-[986px] text-base sm:text-xl mb-10 p-5 sm:p-0 overflow-x-hidden">


       

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
