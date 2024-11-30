import React from "react";
import Form from "../components/Form";
import { Helmet } from "react-helmet-async";
function Contact() {
  return (
    <>
 
    <Helmet>
  <title>Contact Us - Sanatana Dharma Foundation</title>
  <meta name="description" content="Get in touch with the Sanatana Dharma Foundation for more information about our spiritual workshops, cultural events, and Vedic traditions." />
  <meta name="keywords" content="Sanatana Dharma Foundation, contact us, spiritual workshops, Vedic traditions, Hinduism, cultural events, support Sanatana Dharma" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Contact Us - Sanatana Dharma Foundation" />
  <meta property="og:description" content="Contact Sanatana Dharma Foundation to learn more about our events and support our mission to preserve Sanatana Dharma." />
  <meta property="og:image" content="https://sanatanadharmafoundation.co/static/media/om-bg-remove.999d758e15021726580b.png" />
  <link rel="canonical" href="https://sanatanadharmafoundation.co/contact" />
</Helmet>
      

      <div className="flex flex-col h-full items-center justify-between  sm:flex-row">
        <div className="h-[600px] sm:w-1/2 w-full mx-4 bg-gradient-to-b sm:bg-gradient-to-r from-[#F3F7EC] to-white text-[#373A40] flex justify-center items-center">
          <div>
            <h1 className="pt-20 text-7xl font-bold text-center ">
              Get in Touch
            </h1>
            <h1 className="m-auto mt-8 text-center drop-shadow-lg w-[50%]">
              601, Kailash Building, K.G. Marg <br />
              New Delhi-110001
            </h1>
            <h1 className="m-auto mt-8 text-center underline cursor-pointer">
              sanatanadharmafoundation1@gmail.com
            </h1>
          </div>
        </div>
        <div className="sm:p-10 p-5 sm:w-1/2 mt-5 sm:mt-0 mb-5">
          <Form subTitle="I am interested to associate / support the Sanatana Dharma Foundation. My details are below:" />
        </div>
      </div>
    </>
  );
}

export default Contact;
