import React from 'react';
import ewsproHero from '../../../assets/EWSPro Hero Image.png';
import '../styles/EWSProHeroSection.css';

const EWSProHeroSection = () => {
  return (
    <section className="ewspro-hero-section">
      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Left Column - Hero Content */}
        <div className="hero-content-container">
          <h1 className="hero-title">
            <span className="ewspro-brand">EWSPro:</span>
            <span className="title-text"> Automating Early Detection & Risk Intelligence</span>
          </h1>
          <p className="hero-description">
           EWSPro empowers financial institutions with real-time early warning signals by monitoring financial, behavioral, and operational indicators. It aggregates data across CBS, LMS, Bureau, GST, and external news sources to detect potential distress long before defaults occur. The platform’s AI-driven engine automates signal generation, scoring, and escalation workflows — tracking portfolio health through customizable alerts, dashboards, and corrective-action tracking. Integrated with internal systems and third-party APIs, it ensures timely insights, governance, and proactive interventions. Banks, NBFCs, and DFIs use EWSPro to anticipate emerging risks, prioritize exposures, and safeguard portfolio quality through intelligent, data-driven oversight.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <button className="book-demo-button">Book A Demo</button>
            <button className="call-us-button">Call Us</button>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="hero-image-section">
          <img
            src= {ewsproHero}
            alt="Leading Loan Management Solution"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default EWSProHeroSection;
