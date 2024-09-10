import React from "react";
import Divider from "../components/Divider";
import { Helmet } from "react-helmet-async";

const Supporters = () => {
  return (
    <>
      <Helmet>
        <title>Key Supporters of Sanatana Dharma Foundation</title>
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="LmxaOfetOYIjhRO7az9CISTQ4O-A3pnYUg9mz6xMUhU" />
        <meta name="description" content="Discover the key supporters of the Sanatana Dharma Foundation, including our esteemed patrons and directors. Learn about their roles and contributions." />
        <meta name="keywords" content="Sanatana Dharma Foundation, Supporters, Patrons, Directors, Cultural Organizations, Charitable Trusts, Educational Societies" />
      </Helmet>

      <main>
        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Founder Chairman: Sanatana Dharma Foundation
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            The Sanatana Dharma Foundation is dedicated to the revival and
            resurrection of the ancient Sanatana Dharma and Ideologies.
          </p>
          <Divider />
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Chief Patron: Sri Raghavapuram Sabhayogam
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            Sri Raghavapuram Sabhayogam, a cultural body of the Perinchellur Gramam
            Brahmin community in North Kerala, is known as Bhargava Kshetram.
          </p>
          <Divider />
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Chief Patron: Rameswaram Setupathy Mannar Trust
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            The trust focuses on the betterment and welfare of children, elderly, and rural communities.
          </p>
          <Divider />
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Chief Patron: Arsha Vidya Samajam
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            Arsha Vidya Samajam works on the research and propagation of Sanatana Dharma, aiming to educate about true Hinduism through practice.
          </p>
          <Divider />
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Director: Vijnana Bharati Society
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            Vijnana Bharati Educational Charitable Society makes exemplary contributions to education.
          </p>
          <Divider />
        </section>

        <section>
          <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-10">
            Director: Goudapada Math
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            Brahmashri Shri Narayanand Giriji Swami ji leads Goudapada Math at Rishikesh.
          </p>
          <Divider />
        </section>
      </main>
    </>
  );
};

export default Supporters;
