// MessagePage.js
import React from 'react';
import useMessageForm from './useMessageForm';
import './MessagePage.css'; // Import CSS for styling

function MessagePage() {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitted,
    handleSubmit,
  } = useMessageForm();

  return (
    <div className="message-container">
      <h1>Leave a Message</h1>
      {submitted ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default MessagePage;
