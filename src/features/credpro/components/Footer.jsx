import React, { useState } from 'react';
import './Footer.css';

// Assets
import aadiswanLogo from '../../../assets/aadiswan_logo.png';
import linkedinLogo  from '../../../assets/linkedin_logo.png';
import facebookLogo  from '../../../assets/facebook_logo.png';
import instagramLogo from '../../../assets/Instagram_logo.png';
import callLogo      from '../../../assets/call_logo.png';
import emailLogo     from '../../../assets/Email_logo.png';
import delhiLogo     from '../../../assets/New_delhi_footer_logo.png';
import lucknowLogo   from '../../../assets/Lucknow_footer_logo.png';
import mumbaiLogo    from '../../../assets/Mumbai_footer_logo.png';
import abuDhabiLogo  from '../../../assets/Abu_dhabhi_footer_logo.png';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-background" />

      {/* Top centered logo */}
      <div className="footer-logo" aria-label="Aadiswan">
        <img
          src={aadiswanLogo}
          alt="Aadiswan logo"
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.nextSibling;
            if (fallback) fallback.style.display = 'block';
          }}
        />
        <div className="logo-text" style={{ display: 'none' }}>AADISWAN</div>
      </div>

      <div className="footer-content">
        {/* Our Presence */}
        <div className="presence-section">
          <h3 className="section-header">Our Presence</h3>

          <div className="locations-grid">
            <div className="location-card">
              <div className="location-icon-container">
                <img src={delhiLogo} alt="New Delhi" className="location-image" />
              </div>
              <p className="address-text">
                105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi 110034
              </p>
            </div>

            <div className="location-card">
              <div className="location-icon-container">
                <img src={lucknowLogo} alt="Lucknow" className="location-image" />
              </div>
              <p className="address-text">
                Ground & 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            <div className="location-card">
              <div className="location-icon-container">
                <img src={mumbaiLogo} alt="Mumbai" className="location-image" />
              </div>
              <p className="address-text">
                Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615
              </p>
            </div>

            <div className="location-card">
              <div className="location-icon-container">
                <img src={abuDhabiLogo} alt="Abu Dhabi" className="location-image" />
              </div>
              <p className="address-text">
                Office No: 208, Room No: 2, Al Nasar Commercial Center, Najda Street, Abu Dhabi 131416, AE
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="useful-links-section">
          <h3 className="section-header">Useful Links</h3>
          <div className="links-list">
            <a href="#home" className="nav-link active-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#careers" className="nav-link">Careers</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </div>
        </div>

        {/* Contact */}
        <div className="contact-section">
          <h3 className="section-header">Contact Us</h3>

          <div className="contact-info">
            <div className="contact-item">
              <img src={callLogo} alt="Phone" className="contact-icon" />
              <a href="tel:+919971777097" className="contact-text">+91-9971777097</a>
            </div>

            <div className="contact-item">
              <img src={emailLogo} alt="Email" className="contact-icon" />
              <a href="mailto:contactus@aadiswan.com" className="contact-text">contactus@aadiswan.com</a>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://linkedin.com/company/aadiswan" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon-img" />
            </a>
            <a href="https://instagram.com/aadiswan" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="social-icon-img" />
            </a>
            <a href="https://facebook.com/aadiswan" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="social-icon-img" />
            </a>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="contact-form-section">
          <h3 className="section-header">Get In Touch</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label className="field-label" htmlFor="name">Name*</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label className="field-label" htmlFor="email">Email*</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="textarea-field">
              <label className="field-label" htmlFor="message">Message*</label>
              <div className="textarea-wrapper">
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright-text">©2025 Aadiswan Info Consultants Pvt. Ltd.</p>
        <div className="legal-links">
          <a href="#terms" className="legal-link">Terms of Service</a>
          <a href="#privacy" className="legal-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
