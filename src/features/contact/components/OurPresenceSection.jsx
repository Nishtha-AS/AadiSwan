import React from 'react';
import './OurPresenceSection.css';

const OurPresenceSection = () => {
  return (
    <div className="our-presence-section">
      <h2 className="presence-title">OUR PRESENCE</h2>
      
      <div className="presence-locations-container">
        <div className="location-card">
          <div className="location-image-container">
            <img 
              className="location-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/abcddc7e3c83b2c3759c3f790e6b3c5de3e755f9?width=560" 
              alt="New Delhi" 
            />
          </div>
          <h3 className="location-name">NEW DELHI</h3>
        </div>

        <div className="location-card">
          <div className="location-image-container">
            <img 
              className="location-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/38521981d0b1614426f85c7694a739bf15fa5747?width=560" 
              alt="Lucknow" 
            />
          </div>
          <h3 className="location-name">LUCKNOW</h3>
        </div>

        <div className="location-card">
          <div className="location-image-container">
            <img 
              className="location-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/6a597c734e3ee3656e742c73b283c0025094c9fd?width=560" 
              alt="Mumbai" 
            />
          </div>
          <h3 className="location-name">MUMBAI</h3>
        </div>

        <div className="location-card">
          <div className="location-image-container">
            <img 
              className="location-image"
              src="https://api.builder.io/api/v1/image/assets/TEMP/a1557035e705ef443f2cb4320aa26fb1df2dde14?width=560" 
              alt="Abu Dhabi" 
            />
          </div>
          <h3 className="location-name">ABU DHABI</h3>
        </div>
      </div>

      <div className="presence-quote">
        "Join us in shaping the future of credit."
      </div>

      <div className="presence-buttons-container">
        <button className="book-demo-button">
          Book A Demo
        </button>
        <button className="call-us-button">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default OurPresenceSection;
