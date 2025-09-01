import React from 'react';
import '../styles/CredProHeroSection.css';

const CredProHeroSection = () => {
  return (
    <section className="credpro-hero-section">
      {/* Navigation Section */}
      <nav className="navigation-section">
        <div className="nav-container">
          {/* AadiSwan Logo */}
          <div className="nav-logo">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6a46d8eeed76ab7e2aa362283b5f85cc5f3a6021?width=400"
              alt="AadiSwan Logo"
              className="logo-image"
            />
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            <div className="menu-item">
              <span className="menu-text">Home</span>
            </div>
            <div className="menu-item active">
              <span className="menu-text highlighted">Products</span>
              <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#56AEFF"/>
                <path d="M12.0002 15C11.8686 15.0008 11.7381 14.9755 11.6163 14.9258C11.4944 14.876 11.3836 14.8027 11.2902 14.71L8.29019 11.71C8.10188 11.5217 7.99609 11.2663 7.99609 11C7.99609 10.7337 8.10188 10.4783 8.29019 10.29C8.47849 10.1017 8.73388 9.99591 9.00019 9.99591C9.26649 9.99591 9.52188 10.1017 9.71019 10.29L12.0002 12.59L14.2902 10.29C14.4785 10.1017 14.7339 9.99591 15.0002 9.99591C15.2665 9.99591 15.5219 10.1017 15.7102 10.29C15.8985 10.4783 16.0043 10.7337 16.0043 11C16.0043 11.2663 15.8985 11.5217 15.7102 11.71L12.7102 14.71C12.6167 14.8027 12.5059 14.876 12.3841 14.9258C12.2623 14.9755 12.1318 15.0008 12.0002 15Z" fill="#000708"/>
              </svg>
            </div>
            <div className="menu-item">
              <span className="menu-text">Solutions</span>
              <svg className="dropdown-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#56AEFF"/>
                <path d="M12.0002 15C11.8686 15.0008 11.7381 14.9755 11.6163 14.9258C11.4944 14.876 11.3836 14.8027 11.2902 14.71L8.29019 11.71C8.10188 11.5217 7.99609 11.2663 7.99609 11C7.99609 10.7337 8.10188 10.4783 8.29019 10.29C8.47849 10.1017 8.73388 9.99591 9.00019 9.99591C9.26649 9.99591 9.52188 10.1017 9.71019 10.29L12.0002 12.59L14.2902 10.29C14.4785 10.1017 14.7339 9.99591 15.0002 9.99591C15.2665 9.99591 15.5219 10.1017 15.7102 10.29C15.8985 10.4783 16.0043 10.7337 16.0043 11C16.0043 11.2663 15.8985 11.5217 15.7102 11.71L12.7102 14.71C12.6167 14.8027 12.5059 14.876 12.3841 14.9258C12.2623 14.9755 12.1318 15.0008 12.0002 15Z" fill="#000708"/>
              </svg>
            </div>
            <div className="menu-item">
              <span className="menu-text">About Us</span>
            </div>
            <div className="menu-item">
              <span className="menu-text">Blog</span>
            </div>
            <div className="menu-item">
              <span className="menu-text">Contact Us</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="contact-buttons">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/586ab01f436087153e20e6a1c215f88efd4ab95a?width=228"
              alt="Contact Buttons"
              className="contact-buttons-image"
            />
          </div>
        </div>
      </nav>

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
            <button className="book-demo-button">
              Book A Demo
            </button>
            <button className="call-us-button">
              Call Us
            </button>
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
