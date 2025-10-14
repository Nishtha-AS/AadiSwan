import React from 'react';
import camproHero from '../../../assets/CAMPro Hero Image.png';
import '../styles/CAMProHeroSection.css';

const CAMProHeroSection = () => {
  return (
    <section className="campro-hero-section">
      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Left Column - Hero Content */}
        <div className="hero-content-container">
          <h1 className="hero-title">
            <span className="credpro-brand">CAMPro:</span>
            <span className="title-text"> Automating Credit Appraisal and Assessment</span>
          </h1>
          <p className="hero-description">
            CAMPro revolutionizes the credit appraisal process with AI-driven insights, sentiment analysis, and industry benchmarking. It empowers banks, NBFCs, and financial institutions to create data-backed Credit Appraisal Memos with precision and speed — ensuring consistency, transparency, and smarter credit decisions. By integrating real-time data, sector intelligence, and portfolio analytics, CAMPro reduces manual effort, enhances risk visibility, and accelerates decision-making across the credit value chain.
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
            src= {camproHero}
            alt="Leading Loan Management Solution"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CAMProHeroSection;
