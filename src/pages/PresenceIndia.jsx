import Divider from "../components/Divider";
import React from "react";
import India from "../assets/india.png";

function PresenceIndia() {
  return (
    <div className="flex-grow w-4/5 m-auto ">
      <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mt-10">
        Presence in India
      </h1>
      <Divider />
      <h1 className="text-gray-600 font-semibold text-2xl text-center">
        Delhi | Mumbai | Hyderabad | Indore | Chennai
      </h1>
      <img src={India} alt="" className="mx-auto w-2/3 mt-20" />
      <h1 className="items-center p-1 mb-5 text-justify rounded-sm text-lg text-gray-800 mt-10">
        The Sanatana Dharma Foundation, with a significant presence across major
        Indian cities, has established its head office in Delhi, and branches in
        Chennai, Mumbai, Hyderabad, and Indore. These strategic locations enable
        us to effectively carry out our mission of social reincarnation of
        Sanatana Dharma, providing religious and ethical training tailored to
        contemporary needs. Our foundation is committed to fostering a wide,
        liberal, and unsectarian approach to Sanatana thought, uniting diverse
        forms under a common ethos. In each city, we actively engage with local
        communities and like-minded individuals who value their national
        identity and pride in being followers of Sanatana Dharma. By addressing
        the challenges posed by western influences that have marginalized Indian
        culture, we strive to revive and uphold the ancient Dharma, promoting
        righteousness, integrity, and mutual trust. Our efforts in these cities
        focus on excluding divisive elements and reinforcing a common faith that
        transcends religious and cultural biases, thereby restoring the cultural
        wealth and unity of our nation. Through our widespread presence, we aim
        to unite Indians in a shared heritage, reviving Sanatana culture not
        just as a religion, but as an ancient school of beliefs that serves the
        needs and rights of all citizens of Bharat.
      </h1>
    </div>
  );
}

export default PresenceIndia;
