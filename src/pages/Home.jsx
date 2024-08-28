import React from "react";
import ImageSlider from "../components/ImageSlider";
import Swamiji from './Swami ji1.jpg';
import SwamijiAbout from "../components/SwamijiAbout";
import Form from "../components/Form";
import Divider from "../components/Divider";
import swamiji1 from "../assets/roll1.png";
import swamiji2 from "../assets/roll2.png";
import swamiji3 from "../assets/roll3.png";
import guru from "../assets/guru.jpg";
const Home = () => {
  return (
    <div className="flex-grow">
      <ImageSlider />
      <div className="m-auto sm:w-[986px] text-xl mb-10 p-5 sm:p-0">
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          Sanatana Dharma Foundation
        </h1>
        <p className="items-center mb-3 text-justify rounded-sm">
        The Sanatana Dharma Foundation is dedicated to helping
         individuals reconnect with the teachings of Sanatana Dharma (Hinduism).
          It offers a range of programs, including spiritual workshops,
           cultural festivals, and meditation retreats, designed 
           to provide guidance and support on one's spiritual journey.
            By preserving Vedic traditions and promoting Hindu philosophy,
             the foundation creates a vibrant community space for learning, growth,
              and connection, fostering a deeper understanding of ancient wisdom
               and values.
        </p>
        <div className="flex flex-col gap-5 mx-[20px] mb-10 text-justify">
          <SwamijiAbout
            title="About Sanatana Dharma Foundation"
            content="In the bustling world we live in today, it can be easy to get swept away in the chaos and noise of everyday life. It's important to take a step back and reconnect with our spiritual roots, our cultural heritage, and the ancient wisdom that has guided generations before us. This is where organizations like the Sanatana Dharma Foundation come in, providing a space for individuals to delve into the teachings of Sanatana Dharma, also known as Hinduism."
          /></div>

        <div className="flex flex-col gap-5 mx-[20px] mb-10 text-justify">
          <SwamijiAbout
            title="Core of Sanatana Dharma:"
            content="At the core of Sanatana Dharma are the timeless sanskrit teachings that have been passed down through the ages. These teachings encompass a wide range of concepts, from the concept of karma – the law of cause and effect – to the importance of upholding moral values and ethical principles in our daily lives. Through spiritual enlightenment, yoga workshops, and interfaith initiatives, the foundation aims to provide individuals with the guidance and support they need to navigate their spiritual journey.
            \nOne of the key aspects of Sanatana Dharma is the emphasis on community and connection. Through a variety of programs and events, such as religious education classes, cultural festivals, and meditation retreats, the foundation creates a space for individuals to come together and learn from one another. By preserving vedic traditions and promoting Hindu philosophy, the foundation seeks to uphold traditional values and ensure that the spiritual heritage of Sanatana Dharma continues to thrive."
          /></div>

        <div className="flex flex-col gap-5 mx-[20px] mb-10 text-justify">
          <SwamijiAbout
            title="Mission of Sanatana Dharma Foundation:"
            content="Whether you are looking for spiritual guidance, philosophical teachings, or simply a community of like-minded individuals, the Sanatana Dharma Foundation offers a space for individuals to explore their spirituality and deepen their connection to the sacred texts and teachings of Hinduism. Through outreach programs and cultural events, the foundation is dedicated to spreading the message of peace, love, and unity to all who seek it.
            /nSo, if you are looking to reconnect with your spiritual roots, deepen your understanding of ancient wisdom, and engage with a vibrant community of spiritual seekers, consider getting involved with the Sanatana Dharma Foundation. Your spiritual journey awaits!"
          /></div>

        <img
          className="h-[500px] object-cover object-center m-auto mb-5"
          src={Swamiji}
          alt="Swami Ji"
        />
        <p className="items-center mb-5 text-justify rounded-sm bg-orange-50">
        Our founder, Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami
         Narayan Nand Giriji Maharaj, is an esteemed spiritual leader
          and devoted activist of Sanatan Dharma. He is a proud citizen
           of Bharat (India) and actively promotes the ancient
            traditions, values, and teachings of Sanatan Dharma.
        </p>

        <div className="flex flex-col gap-5 mx-[20px] mb-10 text-justify">
          <SwamijiAbout
            title="Earlier life"
            content="Mahamadaleshwar Giriji Maharaj pursued multiple careers before dedicating himself to spiritual leadership. He began as a successful businessman, contributing to the economic landscape. However, driven by his spiritual calling, he transitioned to become a renowned spiritual leader. Additionally, he has been involved in the fields of education and social activism, striving to create a positive impact on society."
          />

          <SwamijiAbout
            title="Compassion"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is the founder and chairman of the Sanatana Dharma Foundation. This foundation serves as a platform to preserve, promote, and propagate the principles, values, and teachings of Sanatan Dharma. Through various initiatives, the foundation aims to create awareness about the rich cultural heritage of Bharat and facilitate the practice of Sanatan Dharma among individuals from all walks of life."
          />

          <SwamijiAbout
            title="Avhan Akhada"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is an esteemed member of the revered Avhan Akhada, which holds the distinction of being the oldest Akhada in Hindustan (India), founded in 547 CE. Within the Akhada system, a traditional organization of Hindu spiritual warriors and saints, he holds the prestigious title of Mahabaleshwar. His affiliation with Avhan Akhada underscores his profound connection to the ancient lineage, traditions, and practices upheld by this esteemed institution."
          />

          <SwamijiAbout
            title="Building Sanatan Culture"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is a devoted spiritual leader working towards improving the Sanatan culture of India. He is spreading awareness about Sanatan Dharma and its significance, particularly among the youth. Through sending books to temples across India, he aims to promote the values and teachings of Sanatan Dharma. By instilling cultural pride and understanding in the younger generation, he envisions a society where Sanatan culture thrives and contributes to the nation's progress. Mahamadaleshwar Narayan Giriji Maharaj's dedication inspires others to embrace and preserve India's rich cultural heritage and Sanatan Dharma."
          />
        </div>
        <Divider />
        <div className="">
          <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mt-10 mb-10">
            Mission
          </h1>
          <div className="flex flex-col gap-y-5 sm:flex-row justify-center">
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72 "
              src={swamiji1}
              alt="kashi"
            />
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72 "
              src={swamiji2}
              alt="kashi"
            />
            <img
              className="object-cover object-center m-auto rounded-full h-72 w-72 "
              src={guru}
              alt="kashi"
            />
          </div>
          <h1 className="p-1 mt-5 mb-5 text-center">
            "The Sanatana Dharma Foundation is dedicated to the revival and
            resurrection of the ancient Sanatana Dharma and Ideologies."
          </h1>

          <Divider />

          <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
            Interest Form
          </h1>
          
          <Form subTitle="I am interested to associate / support the Sanatana Dharma Foundation. My details are below:" />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
