import React from 'react';
import esmsproHero from '../../../assets/ESMSPro Hero Image.png';
import '../styles/ESMSProHeroSection.css';

const ESMSProHeroSection = () => {
  return (
    <section className="esmspro-hero-section">
      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Left Column - Hero Content */}
        <div className="hero-content-container">
          <h1 className="hero-title">
            <span className="esmspro-brand">ESMSPro:</span>
            <span className="title-text"> Automating End-to-End Environmental & Social Risk Management</span>
          </h1>
          <p className="hero-description">
           ESMSPro streamlines the full E&S risk workflow with a policy-driven engine—covering screening, categorization, due diligence, ESAP creation, covenant tracking, and continuous monitoring. It aligns with IFC Performance Standards, World Bank/AIIB frameworks, and lender policies, with automated checklists, audit trails, and API-enabled data pulls for faster, consistent, and compliant decisions. Banks, NBFCs, and DFIs use ESMSPro to reduce risk, ensure disclosure, and deliver measurable sustainability outcomes.
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
            src= {esmsproHero}
            alt="Leading Loan Management Solution"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ESMSProHeroSection;
