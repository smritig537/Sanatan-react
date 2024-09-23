import { Link } from "react-router-dom"
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
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <>
      <Helmet>
  <title>About Sanatana Dharma Foundation: Spiritual Growth</title>
  <meta name="description" content="Explore the Sanatana Dharma Foundation's mission to preserve and promote Sanatana Dharma (Hinduism). Learn about our charitable efforts, spiritual education, community service, and initiatives to revive ancient traditions and foster unity." />
  <meta name="keywords" content="Sanatana Dharma Foundation, Hinduism, Sanatana Dharma, spiritual education, charitable activities, cultural preservation, Indian traditions, community service, religious revival, Hindu philosophy, spiritual growth" />
  <meta name="google-site-verification" content="LmxaOfetOYIjhRO7az9CISTQ4O-A3pnYUg9mz6xMUhU" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://sanatanadharmafoundation.co/about" />

</Helmet>

        <main>
          <h1 className="font-oswald text-[#313131] font-bold lg:text-5xl text-3xl text-center my-10">
            About Sanatan Dharma Foundation
          </h1>

          <section>
            <div className="container flex justify-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
                <div className="flex justify-center lg:justify-start mt-6 md:mt-0">
                  <img
                    src={sanatanabout}
                    loading="lazy"
                    alt="Sanatana dharma foundation about"
                    className="object-cover rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
                <div className="max-w-2xl md:text-left">
                  <p className="mt-4 text-gray-600 text-lg text-justify">
                    <b>Sanatana Dharma Foundation,</b> a revered non-profit
                    organization dedicated to the propagation and preservation
                    of Sanatana Dharma, often known as<b> Hinduism</b>. Grounded in the
                    profound wisdom of ancient Indian traditions, our foundation
                    embodies the aims articulated in our <b>Trust Deed</b>, promoting a
                    renaissance of religious and cultural values across
                    communities while nurturing a deeper understanding of <b>Hindu
                    philosophy</b>. At the heart of the <b>Sanatana Dharma Foundation</b>{" "}
                     lies the concept of <b>social reincarnation of Sanatana Dharma</b>.
                    Our mission is to provide a contemporary approach to
                    <b>religious and ethical training</b>, tailored to cater to the
                    evolving needs of our society. Our principles are rooted in
                    the <b>liberal, wide and unsectarian nature</b> of the Sanatana
                    Dharma. We are an organization that is passionate about
                    collaborating with individuals who hold their national
                    identity in high regard and take pride in being a follower
                    of Sanatana Dharma. In recent years, we have witnessed an
                    erosion of <b>Indian culture</b> due to the overwhelming influence
                    of the West. Elements which once were a perennial source of
                    pride for all Indians have faced marginalization,
                    particularly the deep-rooted values of Sanatana Dharma. As a
                    foundation, we are profoundly committed to <b>reviving this
                    ancient world Dharma</b>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container flex justify-center mx-auto py-6 px-2 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
                <div className="flex justify-center lg:justify-start mt-4 md:mt-0">
                  <img
                    src={swami}
                     loading="lazy"
                    alt="About Sanatana dharma foundation"
                    className="object-cover rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
                <div className="max-w-2xl md:text-left">
                  <p className="mt-4 text-gray-600 text-lg text-justify">
                    {" "}
                    Guided by our <b>spiritual leader, Mahamadaleshwar Shri Shri
                    1008 Anant Shri Vibhushit Swami Narayan Giriji Maharaj</b>, we
                    strive to uphold the tenets of <b>Sanatana Dharma</b>. His life
                    journey from a successful businessman to a revered <b>spiritual</b>
                    leader serves as an inspiration for our collective
                    commitment to spirituality. Under his leadership, we aim to
                    cultivate <b>cultural consciousness</b>, <b>spiritual development</b>, and
                    <b>social welfare</b>. We create a space for individuals to live
                    ethically and balance their worldly desires with spiritual
                    fulfillment. We aid in the understanding of one's divine
                    nature through practices like <b>meditation, yoga, and
                    devotion</b>. We celebrate and honor the divine through <b>
                    <Link to="/sanatanadharma" className="text-blue-600 underline">rituals,
                      pujas, and festivals</Link></b>. The Sanatana Dharma Foundation invites
                    everyone, regardless of their religious or cultural
                    background, to join in this journey of discovery and unity.
                    Our ultimate goal is the <b>revival of our revered Sanatana
                    culture</b>, not as a mere religion but as an inclusive school
                    of beliefs that caters to the needs and rights of all. This
                    journey involves dismantling the barriers that divide us and
                    fostering mutual respect, love, and unity among all citizens
                    of Bharat. Join us as we work diligently towards
                    resurrecting the <b>ancient Dharma of the world</b> and reinstating
                    righteousness and <b>integrity</b> in the hearts of our fellow
                    Indians. <b>Our Vision and Mission</b> At the heart of the Sanatana
                    Dharma Foundation lies a clear vision: to create a
                    contemporary platform that nurtures spiritual education and
                    awareness of Indian traditions. Our committed religious
                    trust focuses on charitable endeavors aimed at uplifting
                    communities, enhancing social welfare, and providing vital
                    resources for those in need. We strive to cultivate a
                    network of spiritual seekers and practitioners dedicated to
                    revitalizing Sanatana Dharma in today's world.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div>
            <h2 className="font-oswald text-[#313131] font-bold lg:text-3xl text-2xl text-center my-2">
              Charitable Activities and Community Service
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              Central to our mission is an unwavering commitment to charitable
              activities and community service. We actively support various
              initiatives that address society's pressing needs, ranging from
              educational programs to <b>healthcare services</b>. By aligning our
              efforts with the timeless principles of Sanatana Dharma, we aspire
              to make a meaningful impact on the lives of individuals and
              communities. Our emphasis on Hindu pilgrimage sites enriches our
              mission, as these sacred places serve as beacons of spiritual
              energy, inviting devotees and seekers alike.
            </p>
          </div>

          <div>
            <h2 className="font-oswald text-[#313131] font-bold lg:text-3xl text-2xl text-center my-2">
              Spiritual Education
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              The Sanatana Dharma Foundation underscores the significance of
              spiritual education as a pathway to personal growth and community
              development. We host workshops, seminars, and lectures led by
              esteemed scholars and spiritual leaders who share their insights
              into Hindu philosophy and practices. These educational initiatives
              aim to deepen one’s understanding of our rich heritage, equipping
              individuals with the knowledge necessary to navigate the
              complexities of modern life while remaining anchored in cultural
              values.
            </p>
          </div>

          <div>
            <h2 className="font-oswald text-[#313131] font-bold lg:text-3xl text-2xl text-center my-2">
              Promoting Pilgrimages to Holy Cities
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              In our efforts to foster spiritual connections, we encourage and
              facilitate pilgrimages to holy cities integral to the <b>Sanatana
              Dharma tradition</b>. These journeys not only deepen spiritual ties
              but also offer participants the opportunity to engage in community
              service projects at these sacred locations. By blending spiritual
              exploration with charitable endeavors, we advocate for a holistic
              approach to religious practice that embodies both reverence and
              responsibility.
            </p>
          </div>

          <div>
            <h2 className="font-oswald text-[#313131] font-bold lg:text-3xl text-2xl text-center my-2">
              Social Media Presence and Community Engagement
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              In this digital age, a strong social media presence is vital for
              fostering connections and sharing knowledge. The Sanatana Dharma
              Foundation embraces platforms like <a
          href="https://www.facebook.com/people/Sanatana-Dharma-Foundation/61560817495402/" className="text-blue-600 underline"
          rel="noopener" target="_blank"
        >Facebook</a>,{" "} 
         <a
          href="https://www.instagram.com/sanatanadharmafoundation1/?igsh=MmNmcGk0MWE0Nmdn" className="text-blue-600 underline"
          rel="noopener"  target="_blank"
        >Instagram</a>,{" "}and
               {" "}<a
          href="https://x.com/dharmaorigins" className="text-blue-600 underline"
          target="_blank" rel="noopener"
        >X</a> to reach a broader audience. Our online initiatives aim to
              cultivate a vibrant community of followers who can engage with
              content reflecting the essence of Sanatana Dharma. From
              enlightening articles to live discussions, we warmly invite
              everyone to join us on this journey toward cultural resurgence.{" "}
            </p>
          </div>

          <div>
            <h2 className="font-oswald text-[#313131] font-bold lg:text-3xl text-2xl text-center my-2">
              Join Us in Our Mission
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              We extend an invitation to like-minded individuals to unite with
              us in our mission to revive and celebrate Sanatana Dharma. Whether
              through participating in our charitable programs, attending
              educational workshops, or following us on social media, there are
              myriad ways to get involved. Together, we can work towards a
              future that honors our ancient philosophies while addressing
              contemporary challenges.
            </p>{" "}
          </div>

          <Divider />
          <h2 className="text-center mt-16 mb-8 text-5xl text-orange-900 ">
            Aims and Objectives
          </h2>
          <div className="mx-4 flex flex-col sm:flex-row  justify-between mb-16 2xl:w-[50%] 2xl:m-auto">
            <img
              src={aim}
               loading="lazy"
              className="h-[400px] mx-auto sm:mx-0 w-[400px] rounded-xl mr-8 my-auto xl:my-0"
              alt="Aim of sanatana dharma"
            />
            <ul className="mt-16 ml-8 text-xl sm:mt-0">
              <div className="flex">
                <img src={leaf} className="h-[33px] w-[35px] mr-4" />
                <li className="mb-5 text-justify">
                  Encourages individuals to live ethically and fulfill their
                  duties in accordance with their position in life (varnas and
                  ashramas).
                </li>
              </div>
              <div className="flex">
                <img
                  src={leaf}
                   loading="lazy"
                  alt="leaf of sanatana dharma"
                  className="h-[33px] w-[35px] mr-4"
                />
                <li className="mb-3 text-justify">
                  Acknowledges the importance of desires and pleasures,
                  encouraging their fulfillment in a balanced and ethical
                  manner.
                </li>
              </div>
              <div className="flex">
                <img
                  src={leaf}
                   loading="lazy"
                  alt="leaf of sanatana dharma"
                  className="h-[33px] w-[35px] mr-4"
                />
                <li className="mb-5 text-justify">
                  Encourages practices such as meditation, yoga, devotion
                  (bhakti), and knowledge (jnana) to realize one's divine
                  nature.
                </li>
              </div>
              <div className="flex">
                <img
                  src={leaf}
                   loading="lazy"
                  alt="leaf of sanatana dharma"
                  className="h-[33px] w-[35px] mr-4"
                />
                <li className="mb-5 text-justify">
                  Regular rituals, pujas (worship ceremonies), and festivals
                  that honor various deities and aspects of the divine.
                </li>
              </div>
              <div className="flex">
                <img
                  src={leaf}
                   loading="lazy"
                  alt="leaf of sanatana dharma"
                  className="h-[33px] w-[35px] mr-4"
                />
                <li className="mb-5 text-justify">
                  Recognizes the validity of multiple paths to the divine and
                  respects different religious and spiritual traditions.
                </li>
              </div>
            </ul>
          </div>
          <Divider />
          <h2 className="font-oswald text-[#313131] font-bold lg:text-5xl text-3xl text-center my-10">
            Sanatan Dharma Foundation
          </h2>
          <p className="items-center m-auto w-[90%] sm:w-[50%] p-1 mt-5 mb-5 text-justify rounded-sm text-gray-700 text-xl">
            The Sanatana Dharma Foundation is dedicated to the revival and
            resurrection of the ancient Sanatana Dharma and Ideologies.
          </p>
          <img
            src={Build}
             loading="lazy"
            alt="Sanatana Dharma Foundation building"
            className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
          />
          <br></br>
          <Divider />
          <h2 className="font-oswald text-[#313131] font-bold text-3xl sm:pt-0 pt-2 text-center my-10">
            SENIOR SECONDARY SCHOOL AT TAMIL NADU
          </h2>
          <div className="flex flex-wrap justify-center">
  <img
    src={School}
     loading="lazy"
    alt="School build by Sanatana Dharma Foundation"
    className="mx-3 w-auto h-[500px] sm:w-[600px] rounded-xl p-5"
  />
  <img
    src={School2}
     loading="lazy"
    alt="Sanatana dharma school"
    className="mx-3 w-auto h-[500px] sm:w-[600px] rounded-xl p-5"
  />
</div>
          <Divider />
          <h3 className="font-oswald text-[#313131] font-bold lg:text-4xl text-3xl text-center my-10">
            HARIDWAR CENTER ASHRAM UNDERDEVELOPMENT
          </h3>
          <img
            src={har}
             loading="lazy"
            alt="Sanatana Dharma Swamii Jii in Haridwar"
            className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
          />
          <Divider />
          <h3 className="font-oswald text-[#313131] font-bold lg:text-5xl text-3xl text-center my-10">
            SHOPPING MALL
          </h3>
          <img
            src={mall}
             loading="lazy"
            alt="Sanatana Dharma foundation mall work"
            className=" mx-3 w-auto h-[500px] sm:w-[600px] sm:m-auto rounded-xl p-5"
          />
          <div>
            <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
              Testimonials and Success Stories
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              The impact of the <b>Sanatana Dharma Foundation</b> is best illustrated
              through the heartwarming testimonials of individuals and
              communities transformed by our initiatives. Many participants in
              our <b>spiritual education programs</b> have expressed profound gratitude
              for the knowledge and insights gained, which have helped them
              navigate life's challenges while remaining grounded in their
              heritage. Community members engaged in our service projects often
              share stories of <b>connection</b> and <b>collaboration</b>, emphasising the
              importance of collective efforts in forging a sense of unity and
              purpose. These inspiring stories not only highlight the efficacy
              of our programs but also serve as a reminder of the enduring power
              of Sanatana Dharma to uplift and inspire. We encourage all who
              have been touched by our work to share their experiences, as they
              contribute to a growing tapestry of hope and renewal.
            </p>
          </div>

          <summary>
            <h2 className="font-oswald text-[#313131] font-bold text-3xl text-center my-2">
              Conclusion
            </h2>
            <p className="items-center m-auto w-[90%] p-1 mt-2 mb-2 text-justify rounded-sm text-gray-700 text-xl">
              The Sanatana Dharma Foundation stands as a beacon of hope for
              those seeking spiritual enlightenment and a cultural identity
              rooted in Indian traditions. With our devotion to charitable
              activities, community service, spiritual education, and active
              engagement through social media, we aim to cultivate a vibrant
              community centered around the teachings of Sanatana Dharma. Join
              us in our sacred cities and be part of this enriching journey,
              where tradition harmonizes with contemporary life, guiding us
              toward a brighter and more harmonious future. For more information
              about our foundation, our activities, or to become a member,
              please visit our website and connect with us as we work towards a
              revitalized understanding and practice of Sanatana Dharma.
            </p>
          </summary>
        </main>
        <FAQ />
      </>
    </>
  );
};

export default About;
