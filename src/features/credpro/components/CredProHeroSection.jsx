// src/features/credpro/components/CredProHeroSection.jsx
import React from 'react';
import '../styles/CredProHeroSection.css';

const CredProHeroSection = () => {
  return (
    <section className="credpro-hero-section">
      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Left Column - Hero Content */}
        <div className="hero-content-container">
          <h1 className="hero-title">
            <span className="credpro-brand">CredPro:</span>
            <span className="title-text"> Automating End-to-End Credit Lifecycle</span>
          </h1>
          <p className="hero-description">
            CredPro automates the entire credit lifecycle with policy-driven workflows, ensuring faster sanctioning, seamless compliance, and API-led integrations. It empowers banks, NBFCs, and MSME lenders to streamline origination, underwriting, and monitoring, reducing turnaround times while enhancing risk control and customer experience.
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
            src="https://api.builder.io/api/v1/image/assets/TEMP/a981624332f1c83264d4ad8e025d6d807b2227b5?width=1000"
            alt="Leading Loan Management Solution"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CredProHeroSection;
