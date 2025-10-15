import React from 'react';
import cadproHero from '../../../assets/CADPro Hero Image.png';
import '../styles/CADProHeroSection.css';

const CADProHeroSection = () => {
  return (
    <section className="credpro-hero-section">
      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Left Column - Hero Content */}
        <div className="hero-content-container">
          <h1 className="hero-title">
            <span className="credpro-brand">CADPro:</span>
            <span className="title-text"> Automating Post-Sanction Credit Administration</span>
          </h1>
          <p className="hero-description">
            Streamline documentation, covenants, and disbursements with configurable workflows, digital execution (e-sign/e-stamp), and Core Banking integrations reducing manual effort and ensuring auditable, policy-compliant operations.
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
            src= {cadproHero}
            alt="Leading Loan Management Solution"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CADProHeroSection;
