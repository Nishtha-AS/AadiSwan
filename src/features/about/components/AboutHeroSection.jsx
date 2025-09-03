import React from 'react';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section">
      <img
        className="about-hero-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/f56aa2a5fa272898f1e892765d7e578b99fa1d41?width=2880"
        alt=""
      />
      <div className="about-hero-content">
        <h1 className="about-hero-title">Empowering Credit. Enabling Growth.</h1>
        <p className="about-hero-description">
          At AadiSwan, we combine technology, expertise, and innovation to transform lending and credit automation for banks, NBFCs, and financial institutions worldwide.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroSection;
