import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2"; // Import SweetAlert2

const Form = () => {
    const [state, handleSubmit] = useForm("mkgnarwr"); // Replace with your Formspree endpoint
  
    // Success handler
    if (state.succeeded) {
      // Show custom SweetAlert on success
      Swal.fire({
        title: "Success!",
        text: "Thanks for your message!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6", // Customize the button color
      });
  
      // Redirect to the homepage after a short delay
      setTimeout(() => {
        window.location.href = "/"; // Redirect to the homepage
      }, 2000); // 2-second delay before redirecting
    }

  return (
    <>
     <form onSubmit={handleSubmit} id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Message
                      </label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-orange-800 hover:bg-orange-900 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
    </>
  )
}

export default Form