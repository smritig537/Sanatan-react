import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container">
      
        <h2>Contact Us</h2>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" autoComplete="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
        <div id="status"></div>
      </div>
    </>
  );
}

export default Contact;

