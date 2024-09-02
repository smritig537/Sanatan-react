import React, { useState } from 'react';
import React from "react";
import swami from "../assets/swami.webp";
import aim from "../assets/aim.png";
import sanatanabout from "../assets/sanatanabout.webp";
import leaf from "../assets/leaf.png";
import Build from "./build.webp";
import School from "./School.webp";
import School2 from "./School2.webp";
import har from "./HARIDWAR.webp";
import mall from "./mall.webp";
import Divider from "../components/Divider";
const faqData = [
  {
    id: 1,
    question: "What is the Sanatana Dharma Foundation?",
    answer: "The Sanatana Dharma Foundation is an organization dedicated to helping people explore and deepen their understanding of Hinduism, also known as Sanatana Dharma. We offer a range of programs such as spiritual workshops, cultural festivals, and meditation retreats. Our goal is to guide individuals on their spiritual journey, promote Vedic traditions, and foster a deeper connection with Hindu philosophy. By participating in our events and initiatives, you can reconnect with ancient wisdom, engage with a supportive community, and enrich your spiritual life"
  },
  {
    id: 2,
    question: "What kind of programs does the Sanatana Dharma Foundation offer?",
    answer: "The foundation offers a range of programs including spiritual workshops, cultural festivals, and meditation retreats. These programs are designed to help people understand Hindu philosophy, practice Vedic traditions, and connect with a supportive community."
  },
  {
    id: 3,
    question: "What is the mission of the Sanatana Dharma Foundation?",
    answer: "The mission of the Sanatana Dharma Foundation is to provide a space for individuals to explore their spirituality, deepen their understanding of Hindu teachings, and connect with others. They focus on spreading messages of peace, love, and unity through their various outreach and cultural events."
  },
  {
    id: 4,
    question: "Who is the founder of the Sanatana Dharma Foundation?",
    answer: "The founder of the Sanatana Dharma Foundation is Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj. He is a respected spiritual leader dedicated to promoting and preserving the values and teachings of Sanatana Dharma."
  },
  {
    id: 5,
    question: "What is Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj's background?",
    answer: "Before becoming a spiritual leader, Mahamadaleshwar Giriji Maharaj had a successful career as a businessman. He later transitioned to spiritual leadership and has been actively involved in education and social activism, working to make a positive impact on society."
  },
  {
    id: 6,
    question: "How is the Sanatana Dharma Foundation working to preserve Sanatan culture?",
    answer: "The foundation, under the leadership of Mahamadaleshwar Giriji Maharaj, is working to promote Sanatan Dharma by spreading awareness and cultural pride, especially among the youth. They send books to temples across India and aim to foster a deeper understanding and appreciation of Sanatan culture."
  }
];
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <li className={`bg-white my-2 shadow-lg ${isOpen ? 'bg-light-blue' : ''}`}>
    <h2
      onClick={onClick}
      className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
    >
      <span>{question}</span>
      {isOpen ? (
        <i className="fas fa-chevron-up text-purple-700 h-6 w-6"></i>
      ) : (
        <i className="fas fa-chevron-down text-purple-700 h-6 w-6"></i>
      )}
    </h2>
    <div
      className={`border-l-2 border-purple-600 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
    >
      <p className="p-3 text-gray-900">{answer}</p>
    </div>
  </li>
);

const About = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  }
  return (
    <>
      <>
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          Sanatan Dharma Foundation
        </h1>
        <img
          src={sanatanabout}
          className=" mx-3 w-auto h-[500px] sm:w-[400px] sm:m-auto rounded-xl"
          alt="About Sanatana Dharma"
        />
        <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
          The Inception of the Sanatana Dharma Foundation revolves around the
          idea of social reincarnation of the Sanatana Dharma. Our objective is
          to provide religious and ethical training suited to the needs of the
          time. It is necessary that this religious and ethical training shall
          be of a wide, liberal and unsectarian character, inclusive enough to
          unite the most divergent forms of Sanatana thought. Our organisation
          is keen on working with like- minded people who value their national
          identity and take pride in being a follower of Sanatana Dharma. We aim
          to work efficiently towards our goal of uprooting anti-national ideas
          and elements which pose a threat to national solidarity. Over the past
          few years, Indian culture has become marginalized due to western
          influences. The hyperbole of western practices has degraded the
          stature of Sanatana Dharma, which used to be a perennial source of
          pride for all Indians. This Foundation is dedicated to resurrecting
          the most ancient Dharma of the world. With the aim of reinstating
          righteousness and integrity among our fellow Indians, we are working
          tediously to unite the people of India in a common thread of love,
          unity and mutual trust. The fundamental principles of religion,
          governing the general view of life and life's obligations, are alone
          sufficient to restore the cultural wealth of this ancient sect. Our
          organization is leaving no stone unturned to unite Indians in a common
          faith by excluding all the elements that divide them. This will lead
          to the revival of our revered Sanatana culture, not as a religion, but
          as an ancient school of beliefs which will cater to the needs and
          rights of all the citizens of Bharat, irrespective of any religious
          or cultural bias.
        </p>
        <img
          src={swami}
          className="h-[500px] w-auto mx-3 sm:w-[400px] sm:m-auto mt-16 rounded-xl"
          alt="Swami jii"
        />
        <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
          Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan
          Giriji Maharaj is an esteemed spiritual leader and a devoted activist
          of Sanatan Dharma. As a proud citizen of Bharath(India), he actively
          promotes the ancient traditions, values, and teachings of Sanatan
          Dharma. Mahamadaleshwar Shri Shri 1008 Anant Vibhushit Swami Narayan
          Nand Giriji Maharaj is a highly respected and influential spiritual
          leader, dedicated to preserving and promoting the principles of
          Sanatan Dharma. His journey from a successfull buisnessman to a
          revered spiritual guru showcases his deep commitment to spirituality
          and his desire to guide others towards a more profound understanding
          of life's purpose. Through his leadership, he endeavors to foster
          cultural awareness, spiritual growth, and social welfare, leaving a
          lasting impact on the lives of many.
        </p>
        <Divider />
        <h1 className="text-center mt-16 mb-8 text-5xl text-orange-900 ">
          Aims and Objectives
        </h1>
        <div className="mx-4 flex flex-col sm:flex-row  justify-between mb-16 2xl:w-[50%] 2xl:m-auto">
          <img
            src={aim}
            className="h-[400px] mx-auto sm:mx-0 w-[400px] rounded-xl mr-8 my-auto xl:my-0"
            alt="Aim of sanatana dharma"
          />
          <ul className="mt-16 ml-8 text-xl sm:mt-0">
            <div className="flex">
              <img src={leaf} className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Encourages individuals to live ethically and fulfill their
                duties in accordance with their position in life (varnas and
                ashramas).
              </li>
            </div>
            <div className="flex">
              <img src={leaf} alt="leaf of sanatana dharma" className="h-[33px] w-[35px] mr-4" />
              <li className="mb-3">
                Acknowledges the importance of desires and pleasures,
                encouraging their fulfillment in a balanced and ethical manner.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} alt="leaf of sanatana dharma" className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Encourages practices such as meditation, yoga, devotion
                (bhakti), and knowledge (jnana) to realize one's divine nature.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} alt="leaf of sanatana dharma" className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Regular rituals, pujas (worship ceremonies), and festivals that
                honor various deities and aspects of the divine.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} alt="leaf of sanatana dharma" className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Recognizes the validity of multiple paths to the divine and
                respects different religious and spiritual traditions.
              </li>
            </div>
          </ul>
        </div>
        <Divider />
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          Sanatan Dharma Foundation
        </h1>
        <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
          The Sanatana Dharma Foundation is dedicated to the revival and
          resurrection of the ancient Sanatana Dharma and Ideologies.
        </p>
        <img
          src={Build}
          alt="building"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <br></br>
        <Divider />
        <h3 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          SENIOR SECONDARY SCHOOL
        </h3>
        <img
          src={School}
          alt="School"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <img
          src={School2}
          alt="Sanatana dharma school"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <Divider />
        <h3 className="font-oswald text-[#313131] font-bold text-4xl text-center my-10">
          HARIDWAR CENTER ASHRAM UNDERDEVELOPMENT
        </h3>
        <img
          src={har}
          alt="Swami jii in Haridwar"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <Divider />
        <h3 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          SHOPPING MALL
        </h3>
        <img
          src={mall}
          alt="mall"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <main className="p-5 bg-light-blue">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ - Sanatana Dharma Foundation</h2>
          <ul className="flex flex-col">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
      </>
    </>
  );
};

export default About;
