<<<<<<< HEAD
import React from 'react';
import Divider from '../components/Divider';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-auto mt-10 mb-8 lg:flex-row">
        <div className="h-auto w-full mx-4 bg-[#f08619] lg:w-[600px] lg:mx-0 lg:h-[600px] flex flex-col justify-center items-center py-10">
          <h1 className="pt-10 text-3xl font-bold text-center text-white">Get in Touch</h1>
          <h1 className="mt-8 text-center font-semibold drop-shadow-lg w-[80%] sm:w-[50%] text-white">
            601, Kailash Building, K.G. Marg <br />
            New Delhi-110001
          </h1>
          <h1 className="mt-8 text-center text-white underline cursor-pointer">
            sanatanadharmafoundation1@gmail.com
          </h1>
        </div>
        <form className="flex w-full h-auto flex-col justify-center items-center lg:w-[50%]">
          <div className="w-[90%] h-[50px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">First Name</p>
            <input
              type="text"
              placeholder="Enter First Name"
              className="pl-4 w-full rounded-[5px] h-[40px] border-[1px] border-gray-500"
            />
          </div>
          <div className="w-[90%] h-[50px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">Last Name</p>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="pl-4 w-full h-[40px] border-[1px] rounded-[5px] border-gray-500"
            />
          </div>
          <div className="w-[90%] h-[50px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">Email</p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full pl-4 h-[40px] border-[1px] rounded-[5px] border-gray-500"
            />
          </div>
          <div className="w-[90%] h-[75px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">Message</p>
            <textarea
              placeholder="Your Message"
              className="w-full h-[75px] border-[1px] rounded-[5px] border-gray-500"
            ></textarea>
          </div>
          <button className="bg-[#f08619] mt-[40px] text-white w-[90%] h-[40px] lg:w-[70%] shadow-slate-500">
            Send
          </button>
        </form>
=======
import React from "react";
import Divider from "../components/Divider";
import Form from "../components/Form";
function Contact() {
  return (
    <>
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
>>>>>>> origin/main
      </div>
    </>
  );
}

export default Contact;
