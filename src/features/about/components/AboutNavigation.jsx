import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutNavigation.css';

const AboutNavigation = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const toggleProducts = () => {
    setOpenProducts(v => !v);
    setOpenSolutions(false);
  };

  const toggleSolutions = () => {
    setOpenSolutions(v => !v);
    setOpenProducts(false);
  };

  return (
    <div className="about-navigation-section">
      <img
        className="about-logo"
        src="https://api.builder.io/api/v1/image/assets/TEMP/6a46d8eeed76ab7e2aa362283b5f85cc5f3a6021?width=400"
        alt="AadiSwan Logo"
      />

      <div className="about-menu-items">
        <div className="about-menu-item">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Home</span>
          </Link>
        </div>

        <div className="about-menu-item dropdown">
          <button
            type="button"
            className="about-menu-trigger"
            onClick={toggleProducts}
          >
            <span>Products</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#56AEFF"/>
              <path d="M12.0002 15C11.8686 15.0008 11.7381 14.9755 11.6163 14.9258C11.4944 14.876 11.3836 14.8027 11.2902 14.71L8.29019 11.71C8.10188 11.5217 7.99609 11.2663 7.99609 11C7.99609 10.7337 8.10188 10.4783 8.29019 10.29C8.47849 10.1017 8.73388 9.99591 9.00019 9.99591C9.26649 9.99591 9.52188 10.1017 9.71019 10.29L12.0002 12.59L14.2902 10.29C14.4785 10.1017 14.7339 9.99591 15.0002 9.99591C15.2665 9.99591 15.5219 10.1017 15.7102 10.29C15.8985 10.4783 16.0043 10.7337 16.0043 11C16.0043 11.2663 15.8985 11.5217 15.7102 11.71L12.7102 14.71C12.6167 14.8027 12.5059 14.876 12.3841 14.9258C12.2623 14.9755 12.1318 15.0008 12.0002 15Z" fill="#000708"/>
            </svg>
          </button>
        </div>

        <div className="about-menu-item dropdown">
          <button
            type="button"
            className="about-menu-trigger"
            onClick={toggleSolutions}
          >
            <span>Solutions</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#56AEFF"/>
              <path d="M12.0002 15C11.8686 15.0008 11.7381 14.9755 11.6163 14.9258C11.4944 14.876 11.3836 14.8027 11.2902 14.71L8.29019 11.71C8.10188 11.5217 7.99609 11.2663 7.99609 11C7.99609 10.7337 8.10188 10.4783 8.29019 10.29C8.47849 10.1017 8.73388 9.99591 9.00019 9.99591C9.26649 9.99591 9.52188 10.1017 9.71019 10.29L12.0002 12.59L14.2902 10.29C14.4785 10.1017 14.7339 9.99591 15.0002 9.99591C15.2665 9.99591 15.5219 10.1017 15.7102 10.29C15.8985 10.4783 16.0043 10.7337 16.0043 11C16.0043 11.2663 15.8985 11.5217 15.7102 11.71L12.7102 14.71C12.6167 14.8027 12.5059 14.876 12.3841 14.9258C12.2623 14.9755 12.1318 15.0008 12.0002 15Z" fill="#000708"/>
            </svg>
          </button>
        </div>

        <div className="about-menu-item active">
          <span>About Us</span>
        </div>

        <div className="about-menu-item">
          <span>Blog</span>
        </div>

        <div className="about-menu-item">
          <span>Contact Us</span>
        </div>
      </div>

      <img
        className="about-contact-buttons"
        src="https://api.builder.io/api/v1/image/assets/TEMP/586ab01f436087153e20e6a1c215f88efd4ab95a?width=228"
        alt="Contact Buttons"
      />
    </div>
  );
};

export default AboutNavigation;
