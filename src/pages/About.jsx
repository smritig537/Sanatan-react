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
import FAQ from "./Faq";

const About = () => {
  return (
    <>
      <>
      <main>
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          About Sanatan Dharma Foundation
        </h1>


        <section>
    <div className="container flex justify-center mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-center md:justify-start mt-12 md:mt-0">
                <img src={sanatanabout} alt="Sanatana dharma foundation about" className="object-cover rounded-lg shadow-md max-w-full h-auto" />
            </div>
            <div className="max-w-2xl md:text-left">
                <p className="mt-4 text-gray-600 text-lg"><b>Sanatana Dharma Foundation,</b> a revered non-profit organization dedicated to 
                  the propagation and preservation of Sanatana Dharma, often known as Hinduism. Grounded in the profound wisdom of ancient
                   Indian traditions, our foundation embodies the aims articulated in our Trust Deed, promoting a renaissance of religious
                    and cultural values across communities while nurturing a deeper understanding of Hindu philosophy. At the heart of the
                     Sanatana Dharma Foundation lies the concept of social reincarnation of Sanatana Dharma. Our mission is to provide a 
                     contemporary approach to religious and ethical training, tailored to cater to the evolving needs of our society. Our
                      principles are rooted in the liberal, wide and unsectarian nature of the Sanatana Dharma. We are an organization
                       that is passionate about collaborating with individuals who hold their national identity in high regard and take
                        pride in being a follower of Sanatana Dharma. In recent years, we have witnessed an erosion of Indian culture 
                        due to the overwhelming influence of the West. Elements which once were a perennial source of pride for all 
                        Indians have faced marginalization, particularly the deep-rooted values of Sanatana Dharma. As a foundation,
                         we are profoundly committed to reviving this ancient world Dharma.</p>
          </div>
        </div>
    </div>
</section>

        <section>
    <div className="container flex justify-center mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-center md:justify-start mt-12 md:mt-0">
                <img src={swami} alt="Sanatana dharma foundation about" className="object-cover rounded-lg shadow-md max-w-full h-auto" />
            </div>
            <div className="max-w-2xl md:text-left">
                <p className="mt-4 text-gray-600 text-lg">  Guided by our spiritual leader, Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Giriji Maharaj, we strive to uphold the tenets of Sanatana Dharma. His life journey from a successful businessman to a revered spiritual leader serves as an inspiration for our collective commitment to spirituality. Under his leadership, we aim to cultivate cultural consciousness, spiritual development, and social welfare.
We create a space for individuals to live ethically and balance their worldly desires with spiritual fulfillment. We aid in the understanding of one's divine nature through practices like meditation, yoga, and devotion. We celebrate and honor the divine through rituals, pujas, and festivals. The Sanatana Dharma Foundation invites everyone, regardless of their religious or cultural background, to join in this journey of discovery and unity.
Our ultimate goal is the revival of our revered Sanatana culture, not as a mere religion but as an inclusive school of beliefs that caters to the needs and rights of all. This journey involves dismantling the barriers that divide us and fostering mutual respect, love, and unity among all citizens of Bharat. Join us as we work diligently towards resurrecting the ancient Dharma of the world and reinstating righteousness and integrity in the hearts of our fellow Indians. Our Vision and Mission
At the heart of the Sanatana Dharma Foundation lies a clear vision: to create a contemporary platform that nurtures spiritual education and awareness of Indian traditions. Our committed religious trust focuses on charitable endeavors aimed at uplifting communities, enhancing social welfare, and providing vital resources for those in need. We strive to cultivate a network of spiritual seekers and practitioners dedicated to revitalizing Sanatana Dharma in today's world.</p>
          </div>
        </div>
    </div>
</section>

        <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
        Charitable Activities and Community Service
        </h2>
        <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
        Central to our mission is an unwavering commitment to charitable activities and community service.
         We actively support various initiatives that address society's pressing needs,
          ranging from educational programs to healthcare services. By aligning our efforts with the
           timeless principles of Sanatana Dharma, we aspire to make a meaningful impact on the lives of
            individuals and communities. Our emphasis on Hindu pilgrimage sites enriches our mission, as these sacred places serve as beacons of spiritual energy, inviting devotees and seekers alike.
        </p>
        
        <Divider />
        <h2 className="text-center mt-16 mb-8 text-5xl text-orange-900 ">
          Aims and Objectives
        </h2>
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
        <h2 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          Sanatan Dharma Foundation
        </h2>
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
        /></main>
        <FAQ />
      </>
    </>
  );
};

export default About;
