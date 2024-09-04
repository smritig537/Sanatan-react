import Divider from "../components/Divider";
import React from "react";
import India from "../assets/india.png";

function PresenceIndia() {
  return (
    <main className="flex-grow w-4/5 m-auto ">
      <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mt-10">
        Locations in India
      </h1>
      <Divider />
      <p className="text-gray-600 font-semibold text-2xl text-center">
        Delhi | Mumbai | Hyderabad | Indore | Chennai
      </p>
      <img src={India} alt="" className="mx-auto w-2/3 mt-20" />
      <div>
            <h2 className="font-oswald text-[#313131] font-bold text-4xl text-center my-4">
            Sanatana Dharma Foundation: Reviving Ancient Indian Culture and Traditions
            </h2>
            <h3 className="font-oswald text-[#313131] font-bold text-3xl text-center my-4">
            Our Presence Across Major Indian Cities
            </h3>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            The Sanatana Dharma Foundation has a significant presence across major Indian cities, with its head office in Delhi and branches in Chennai, Mumbai, Hyderabad, and Indore. These strategic locations enable us to effectively carry out our mission of the social reincarnation of Sanatana Dharma, providing religious and ethical training tailored to contemporary needs.
            </p>

            <h3 className="font-oswald text-[#313131] font-bold text-3xl text-center my-4">
           Promoting a Unified Approach to Sanatana Thought
            </h3>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
            Our foundation is committed to fostering a wide, liberal, and unsectarian approach to Sanatana Dharma, uniting diverse forms under a common ethos. In each city, we actively engage with local communities and like-minded individuals who value their national identity and pride in being followers of Sanatana Dharma.  
            </p>
          </div>
    </main>
  );
}

export default PresenceIndia;
