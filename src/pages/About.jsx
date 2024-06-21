import React from "react";
import swami from "../assets/swami.png";
import aim from "../assets/aim.png";
import sanatanabout from "../assets/sanatanabout.png";
import leaf from "../assets/leaf.png";
import Build from "./build.png";
import School from "./School.png";
import School2 from "./School2.png";
import har from "./HARIDWAR.png";
import mall from "./mall.png";
import Divider from "../components/Divider";
const About = () => {
  return (
    <>
      <>
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          Sanatan Dharma Foundation
        </h1>
        <img
          src={sanatanabout}
          className=" mx-3 w-auto h-[500px] sm:w-[400px] sm:m-auto rounded-xl"
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
              <img src={leaf} className="h-[33px] w-[35px] mr-4" />
              <li className="mb-3">
                Acknowledges the importance of desires and pleasures,
                encouraging their fulfillment in a balanced and ethical manner.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Encourages practices such as meditation, yoga, devotion
                (bhakti), and knowledge (jnana) to realize one's divine nature.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} className="h-[33px] w-[35px] mr-4" />
              <li className="mb-5">
                Regular rituals, pujas (worship ceremonies), and festivals that
                honor various deities and aspects of the divine.
              </li>
            </div>
            <div className="flex">
              <img src={leaf} className="h-[33px] w-[35px] mr-4" />
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
          alt="build"
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <br></br>
        <Divider />
        <h3 className="font-oswald text-[#313131] font-bold text-5xl text-center my-10">
          SENIOR SECONDARY SCHOOL
        </h3>
        <img
          src={School}
          alt=""
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <img
          src={School2}
          alt=""
          className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
        />
        <Divider />
        <h3 className="font-oswald text-[#313131] font-bold text-4xl text-center my-10">
          HARIDWAR CENTER ASHRAM UNDERDEVELOPMENT
        </h3>
        <img
          src={har}
          alt=""
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
      </>
    </>
  );
};

export default About;
