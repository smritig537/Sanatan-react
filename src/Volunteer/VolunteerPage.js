// VolunteerPage.js
import React from 'react';
import useVolunteerForm from './useVolunteerForm';
import './VolunteerPage.css'; // Import CSS for styling

function VolunteerPage() {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitted,
    handleSubmit,
  } = useVolunteerForm();

  return (
    <div className="volunteer-container">
      <h1>Become a Volunteer</h1>
      {submitted ? (
        <p>Thank you for your interest in volunteering! We'll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message (Optional):</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default VolunteerPage;
