import React from "react";
import { Helmet } from "react-helmet-async";
import Form from "../components/Form";

const Contact = () => {


  return (
    <>
      <Helmet>
        <title>Contact Us - Sanatana Dharma Foundation</title>
        <meta
          name="description"
          content="Get in touch with the Sanatana Dharma Foundation for more information about our spiritual workshops, cultural events, and Vedic traditions."
        />
        <meta
          name="keywords"
          content="Sanatana Dharma Foundation, contact us, spiritual workshops, Vedic traditions, Hinduism, cultural events, support Sanatana Dharma"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Us - Sanatana Dharma Foundation"
        />
        <meta
          property="og:description"
          content="Contact Sanatana Dharma Foundation to learn more about our events and support our mission to preserve Sanatana Dharma."
        />
        <meta
          property="og:image"
          content="https://sanatanadharmafoundation.co/static/media/om-bg-remove.999d758e15021726580b.png"
        />
        <link
          rel="canonical"
          href="https://sanatanadharmafoundation.co/contact"
        />
      </Helmet>

      <section className="bg-orange-100" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-200">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-[Catamaran] font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                ॐ Sanatana Dharma Foundation ॐ
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  I am interested in associating with or supporting the Sanatana
                  Dharma Foundation. Feel free to reach out for any inquiries,
                  support, feedback, or collaboration. We’re here to assist and
                  connect.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-900 text-gray-50">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        601 Kailash building Katurba Gandi marg
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        New Delhi 110001
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-900 text-gray-50">
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mobile: +1 (123) 456-7890
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: tailnext@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-900 text-gray-50">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Saturday: 10:00 - 18:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Get Started?
                </h2>
               {/* form component  past here */}
               <Form/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
