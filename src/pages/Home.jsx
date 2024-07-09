import React from "react";
import ImageSlider from "../components/ImageSlider";
import SwamiJi from "../assets/swamiJiMain.png";
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
        <img
          className="h-[500px] object-cover object-center m-auto mb-5"
          src={SwamiJi}
          alt="Swami Ji"
        />
        <h1 className="items-center mb-5 text-justify rounded-sm bg-orange-50">
          Our Founder Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami
          Narayan Nand Giriji Maharaj is an esteemed spiritual leader and a
          devoted activist of Sanatan Dharma. As a proud citizen of Bharath
          (India), he actively promotes the ancient traditions, values, and
          teachings of Sanatan Dharma.
        </h1>

        <div className="flex flex-col gap-5 mx-[20px] mb-10 text-justify">
          <SwamijiAbout
            title="Early Life"
            content="Mahamadaleshwar Giriji Maharaj had a multi career before dedicating himself to spiritual leadership. He began his professional journey as a successful businessman, contributing to the economic landscape. However, driven by his spiritual calling, he transitioned from his business career to become a renowned spiritual leader. Additionally, he has also been involved in the field of education and social activism, striving to create a positive impact on society."
          />

          <SwamijiAbout
            title="Compassion"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is the founder and chairman of the Sanatana Dharma Foundation. This foundation serves as a platform to preserve, promote, and propagate the principles, values, and teachings of Sanatan Dharma. Through various initiatives, the foundation aims to create awareness about the rich cultural heritage of Bharath and facilitate the practice of Sanatan Dharma among individuals from all walks of life."
          />

          <SwamijiAbout
            title="Avhan Akhada"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is an esteemed member of the revered Avhan Akhada, which holds the distinction of being the oldest Akhada in Hindustan (India) founded in 547 CE. Within the Akhada system, which is a traditional organization of Hindu spiritual warriors and saints, he holds the prestigious title of Mahamadaleshwar. His affiliation with Avhan Akhada underscores his profound connection to the ancient lineage, traditions, and practices upheld by this esteemed institution."
          />

          <SwamijiAbout
            title="Building Sanatan Culture"
            content="Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj is a devoted spiritual leader working towards improving the Sanatan culture of India. He is actively spreading awareness about Santana Dharma and its significance, particularly among the youth. Through his initiative of sending books to temples across India, he aims to promote the values and teachings of Santana Dharma. By instilling cultural pride and understanding in the younger generation, he envisions a society where Sanatan culture thrives and contributes to the nation's progress. Mahamadaleshwar Narayan Giriji Maharaj's dedication inspires others to embrace and preserve India's rich cultural heritage and Sanatana Dharma."
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
