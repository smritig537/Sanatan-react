// Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container" id="bookings">
      <h2>Our Services</h2>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="service-content">
          <h3>Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-globe"></i>
        </div>
        <div className="service-content">
          <h3>Service 2</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <i className="fas fa-cogs"></i>
        </div>
        <div className="service-content">
          <h3>Service 3</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
