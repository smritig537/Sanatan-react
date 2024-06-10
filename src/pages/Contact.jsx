import React from 'react';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-between h-auto mt-10 mb-8 lg:flex-row">
        <div className="h-[600px] w-auto mx-4 bg-[#f08619] lg:w-[600px] lg:mx-0">
          <h1 className="pt-20 text-3xl font-bold text-center text-white">Get in Touch</h1>
          <h1 className="m-auto mt-8 text-center font-semibold drop-shadow-lg w-[50%] text-white">601, Kailash Building, K.G. Marg <br />New Delhi-110001</h1>
          <h1 className="m-auto mt-8 text-center text-white underline cursor-pointer">sanatanadharmafoundation1@gmail.com</h1>
        </div>
        <form className="flex w-[50%] h-auto flex-col justify-center items-start">
        <div className="w-[90%] w-[70%] h-[50px] lg:mr-[20px] mt-[40px] lg:w-[35%]">
        <p className="font-light text-gray-500">First Name</p>
        <input type="text" placeholder="Enter First Name" className="pl-4 w-[100%] rounded-[5px] h-[40px] border-[1px] border-gray-500 mr-12"  />
      </div>
      <div className="w-[90%] w-[70%] h-[50px] mt-[40px] lg:w-[35%]">
        <p className="font-light text-gray-500">Last Name</p>
        <input type="text" placeholder="Enter Last Name" className="pl-4 w-[100%] h-[40px] border-[1px] rounded-[5px] border-gray-500" />
      </div>
          <div className="w-[90%] h-[50px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">Email</p>
            <input type="text" placeholder="Your Email" className="w-[100%] pl-4 h-[40px] border-[1px] rounded-[5px] border-gray-500" />
          </div>
          <div className="w-[90%] h-[50px] mt-[40px] lg:w-[70%]">
            <p className="font-light text-gray-500">Message</p>
            <input type="text" className="w-[100%] h-[75px] border-[1px] rounded-[5px] border-gray-500" />
          </div>
          <button className="bg-[#f08619] mt-[100px] text-white w-[90%] h-[40px] lg:w-[70%] shadow-slate-500">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
