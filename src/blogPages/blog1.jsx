import React from "react";
import Bloglist from "./bloglist";

function Blog1() {
  return (
    <article className="flex flex-col overflow-hidden">
      <header className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sanatana Dharma Foundation: Reviving Ancient Wisdom and Modern
            Values
          </h1>
          <p className="text-gray-600">Published on April 4, 2023</p>
        </div>
      </header>
      <main className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <section className="w-full md:w-3/4 px-4">
            <figure className="mb-8">
              <img
                src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg"
                alt="A representative image of Sanatana Dharma Foundation"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <figcaption className="sr-only">
                Blog featured image related to Sanatana Dharma Foundation
              </figcaption>
            </figure>
            <div className="prose max-w-none text-justify">
              <p>
                The Sanatana Dharma Foundation stands as a guiding light for
                ancient knowledge and contemporary principles with a focus on
                reviving and advocating for Sanatana Dharma beliefs and
                practices. It has established a footing in key Indian urban
                centers like Delhi, where its headquarters is located along with
                branches in Chennai, Mumbai, Hyderabad, and Indore. The
                foundation is dedicated to nurturing an open-minded and
                non-sectarian perspective towards Sanatana philosophy.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Our Mission and Vision
              </h2>
              <p>
                The Sanatana Dharma Foundation aims to offer moral education
                that meets the current requirements of society while combating
                the impact of Western influences that have marginalized Indian
                traditions. The foundation's goal is to rejuvenate and uphold
                the principles of righteousness and integrity to foster mutual
                trust among individuals. We aspire to bring various aspects of
                Sanatana Dharma with a shared belief system that goes beyond
                religious and cultural prejudices.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Engaging with Local Communities
              </h2>
              <p>
                In every center, the organization actively collaborates with
                neighborhood groups and individuals who share a similar mindset
                and cherish their cultural heritage as adherents of Sanatana
                Dharma. Our goal is to revitalize the richness and solidarity of
                our country through a range of projects. We focus on removing
                elements that create divisions and promoting a shared belief
                that transcends cultural differences.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Educational and Cultural Initiatives
              </h2>
              <p>
                The Sanatana Dharma Foundation prioritizes education and
                upholding heritage by organizing workshops, seminars, and
                training programs that delve into the deep-rooted traditions and
                principles of Sanatana Dharma. Our educational endeavors are
                tailored to suit individuals of all ages to ensure that the
                timeless wisdom found in our scriptures is accessible to all.
              </p>

             <div className="h-1/3 w-[40%] object-cover">
              <img src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg"
              className="h-full w-full"
               alt="" />
             </div>
              <h2 className="text-3xl text-left font-bold py-4">
                Promoting Ethical and Religious Training
              </h2>
              <p>
                Our foundation is committed to offering training that is morally
                and religiously sound and meets the needs of the modern world.
                In addition to Vedic ceremonies, yoga, meditation, and
                philosophy, we also provide training sessions and seminars
                covering other facets of Sanatana Dharma. These initiatives aim
                to support people in living lives that are meaningful,
                harmonious, and spiritually fulfilling.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Social and Charitable Activities
              </h2>
              <p>
                The Sanatana Dharma Foundation is actively involved in
                philanthropic and humanitarian endeavors. We host camps for
                blood donation, medical care, and student scholarships for
                impoverished backgrounds. Additionally, our foundation plans
                relief and rehabilitation efforts during natural disasters and
                offers funding for medical care.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Reviving Sanatana Culture
              </h2>
              <p>
                Reviving and advancing Sanatana culture is one of the
                foundation's primary goals. To showcase the rich traditions and
                customs of Sanatana Dharma, we host festivals, celebrations, and
                other cultural events. People can connect with their cultural
                roots and appreciate the richness of Indian ancestry through
                these activities.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Building a Strong Network
              </h2>
              <p>
                A robust network of volunteers and supporters who are committed
                to spreading Sanatana Dharma has been established by the
                foundation. Our volunteers are essential to the foundation's
                operations because they plan events, lead training sessions, and
                raise awareness of its initiatives. We are able to reach a
                larger audience and have a greater influence because of their
                commitment and dedication.
              </p>

              <h2 className="text-3xl text-left font-bold py-4">
                Future Goals and Aspirations
              </h2>
              <p>
                The Sanatana Dharma Foundation wants to increase its influence
                and scope in the future. throughout order to make Sanatana
                Dharma's teachings available to a wider audience, we intend to
                open more branches throughout India and around the world. Future
                plans include the introduction of digital platforms and online
                courses that offer in-depth information on Sanatana Dharma.
              </p>
              <h2 className="text-3xl text-left font-bold py-4">Conclusion</h2>
              <p>
                Sanatana Dharma Foundation is not an organization-it is a
                movement by itself to revive and propagate the ancient wisdom of
                Sanatana Dharma. It is our endeavour to bring up a society that
                respects righteousness, integrity, and mutual trust through our
                educational, cultural, and social activities. By taking all
                together in one ethos, we strive to restore our cultural
                richness and unity as one nation. For more information about our
                activities and how you can get involved, visit our website. Join
                us in our mission to revive and uphold the timeless principles
                of Sanatana Dharma.
              </p>
            </div>
          </section>

          <Bloglist />
        </div>
      </main>
    </article>
  );
}

export default Blog1;
