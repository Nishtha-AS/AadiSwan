import React, { useState } from 'react';
import './Footer.css';

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
    <footer className="global-footer">
      {/* Background layers matching Figma */}
      <div className="footer-bg-primary"></div>
      <div className="footer-bg-secondary"></div>
      <div className="footer-bg-bottom"></div>

      {/* Centered logo */}
      <div className="footer-logo-container">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/094ac5b656d6c9c243317250a4f4131ec257b852?width=433"
          alt="AadiSwan Logo"
          className="footer-main-logo"
        />
      </div>

      {/* Main content sections */}
      <div className="footer-main-content">
        {/* Our Presence Section */}
        <div className="presence-section">
          <h3 className="footer-section-title">Our Presence</h3>
          
          <div className="location-cards-grid">
            {/* New Delhi */}
            <div className="location-card">
              <div className="city-name">NEW DELHI</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e085c71a9d961fa2f943124b46d389c577f62acd?width=308"
                alt="New Delhi Flag"
                className="location-flag-img"
              />
              <p className="location-address">
                105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034
              </p>
            </div>

            {/* Lucknow */}
            <div className="location-card">
              <div className="city-name">LUCKNOW</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8e705f193585327134ef1f7e574a1db4a1e620ba?width=308"
                alt="Lucknow Flag"
                className="location-flag-img"
              />
              <p className="location-address">
                Ground and 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </p>
            </div>

            {/* Mumbai */}
            <div className="location-card">
              <div className="city-name">MUMBAI</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7427043cd1c375fc36b357e423b369af63d958a?width=308"
                alt="Mumbai Flag"
                className="location-flag-img"
              />
              <p className="location-address">
                Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615
              </p>
            </div>

            {/* Abu Dhabi */}
            <div className="location-card">
              <div className="city-name">ABU DHABI</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c509711ba12eb215bc0e358034e01dd4ae1d9589?width=308"
                alt="Abu Dhabi Flag"
                className="location-flag-img"
              />
              <p className="location-address">
                Office No: 208, Room No: 2,. Al Nasar Commercial Center, Najda Street. Abu Dhabi, Abu Dhabi 131416, AE
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="useful-links-section">
          <h3 className="footer-section-title">Useful Links</h3>
          <div className="footer-nav-links">
            <a href="/" className="footer-nav-link">Home</a>
            <a href="/about" className="footer-nav-link">About Us</a>
            <a href="/products" className="footer-nav-link">Products</a>
            <a href="/solutions" className="footer-nav-link">Solutions</a>
            <a href="/careers" className="footer-nav-link">Careers</a>
            <a href="/contact" className="footer-nav-link">Contact Us</a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="contact-info-section">
          <h3 className="footer-section-title">Contact Us</h3>
          
          <div className="contact-details">
            <div className="contact-item">
              <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.0501 5C16.0268 5.19057 16.9244 5.66826 17.6281 6.37194C18.3318 7.07561 18.8095 7.97326 19.0001 8.95M15.0501 1C17.0793 1.22544 18.9716 2.13417 20.4163 3.57701C21.8609 5.01984 22.7721 6.91101 23.0001 8.94M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.27099 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99522 8.06585 2.16708 8.43382 2.48353C8.80179 2.79999 9.04213 3.23945 9.11005 3.72C9.23668 4.68007 9.47151 5.62273 9.81006 6.53C9.9446 6.88792 9.97372 7.27691 9.89396 7.65088C9.81421 8.02485 9.62892 8.36811 9.36005 8.64L8.09006 9.91C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5286 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+919971777097" className="contact-link">+91-9971777097</a>
            </div>

            <div className="contact-item">
              <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:contactus@aadiswan.com" className="contact-link">contactus@aadiswan.com</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a href="https://linkedin.com/company/aadiswan" className="social-icon-link" aria-label="LinkedIn">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.125 10C9.16054 10 10 9.16054 10 8.125C10 7.08946 9.16054 6.25 8.125 6.25C7.08946 6.25 6.25 7.08946 6.25 8.125C6.25 9.16054 7.08946 10 8.125 10Z" fill="white"/>
                <path d="M6.25 12.5C6.25 11.8097 6.80965 11.25 7.5 11.25H8.75C9.44035 11.25 10 11.8096 10 12.5V22.5C10 23.1904 9.44035 23.75 8.75 23.75H7.5C6.80965 23.75 6.25 23.1904 6.25 22.5V12.5Z" fill="white"/>
                <path d="M13.75 23.75H15C15.6904 23.75 16.25 23.1904 16.25 22.5V16.875C16.25 15 20 13.75 20 16.25V22.5005C20 23.1909 20.5596 23.75 21.25 23.75H22.5C23.1904 23.75 23.75 23.1904 23.75 22.5V15C23.75 12.5 21.875 11.25 19.375 11.25C16.875 11.25 16.25 13.125 16.25 13.125V12.5C16.25 11.8096 15.6904 11.25 15 11.25H13.75C13.0596 11.25 12.5 11.8097 12.5 12.5V22.5C12.5 23.1904 13.0596 23.75 13.75 23.75Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25 1.25C27.0711 1.25 28.75 2.92894 28.75 5V25C28.75 27.0711 27.0711 28.75 25 28.75H5C2.92894 28.75 1.25 27.0711 1.25 25V5C1.25 2.92894 2.92894 1.25 5 1.25H25ZM25 3.75C25.6904 3.75 26.25 4.30965 26.25 5V25C26.25 25.6904 25.6904 26.25 25 26.25H5C4.30965 26.25 3.75 25.6904 3.75 25V5C3.75 4.30965 4.30965 3.75 5 3.75H25Z" fill="white"/>
              </svg>
            </a>

            <a href="https://instagram.com/aadiswan" className="social-icon-link" aria-label="Instagram">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5ZM15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" fill="white"/>
                <path d="M22.5 6.25C21.8096 6.25 21.25 6.80965 21.25 7.5C21.25 8.19035 21.8096 8.75 22.5 8.75C23.1904 8.75 23.75 8.19035 23.75 7.5C23.75 6.80965 23.1904 6.25 22.5 6.25Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.06745 5.34508C1.25 6.94941 1.25 9.04961 1.25 13.25V16.75C1.25 20.9504 1.25 23.0506 2.06745 24.6549C2.7865 26.0661 3.93385 27.2135 5.34508 27.9325C6.94941 28.75 9.04961 28.75 13.25 28.75H16.75C20.9504 28.75 23.0506 28.75 24.6549 27.9325C26.0661 27.2135 27.2135 26.0661 27.9325 24.6549C28.75 23.0506 28.75 20.9504 28.75 16.75V13.25C28.75 9.04961 28.75 6.94941 27.9325 5.34508C27.2135 3.93385 26.0661 2.7865 24.6549 2.06745C23.0506 1.25 20.9504 1.25 16.75 1.25H13.25C9.04961 1.25 6.94941 1.25 5.34508 2.06745C3.93385 2.7865 2.7865 3.93385 2.06745 5.34508ZM16.75 3.75H13.25C11.1086 3.75 9.65281 3.75195 8.5276 3.84387C7.43155 3.93342 6.87105 4.09574 6.48005 4.29496C5.53924 4.77434 4.77434 5.53924 4.29496 6.48005C4.09574 6.87105 3.93342 7.43155 3.84387 8.5276C3.75195 9.65281 3.75 11.1086 3.75 13.25V16.75C3.75 18.8915 3.75195 20.3471 3.84387 21.4724C3.93342 22.5685 4.09574 23.129 4.29496 23.52C4.77434 24.4608 5.53924 25.2256 6.48005 25.705C6.87105 25.9042 7.43155 26.0666 8.5276 26.1561C9.65281 26.248 11.1086 26.25 13.25 26.25H16.75C18.8915 26.25 20.3471 26.248 21.4724 26.1561C22.5685 26.0666 23.129 25.9042 23.52 25.705C24.4608 25.2256 25.2256 24.4608 25.705 23.52C25.9042 23.129 26.0666 22.5685 26.1561 21.4724C26.248 20.3471 26.25 18.8915 26.25 16.75V13.25C26.25 11.1086 26.248 9.65281 26.1561 8.5276C26.0666 7.43155 25.9042 6.87105 25.705 6.48005C25.2256 5.53924 24.4608 4.77434 23.52 4.29496C23.129 4.09574 22.5685 3.93342 21.4724 3.84387C20.3471 3.75195 18.8915 3.75 16.75 3.75Z" fill="white"/>
              </svg>
            </a>

            <a href="https://facebook.com/aadiswan" className="social-icon-link" aria-label="Facebook">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M25 1.25C27.0711 1.25 28.75 2.92894 28.75 5V25C28.75 27.0711 27.0711 28.75 25 28.75H5C2.92894 28.75 1.25 27.0711 1.25 25V5C1.25 2.92894 2.92894 1.25 5 1.25H25ZM25 3.75C25.6904 3.75 26.25 4.30965 26.25 5V25C26.25 25.6904 25.6904 26.25 25 26.25H18.75V17.4999H21.3453C21.8833 17.4999 22.3609 17.1556 22.5311 16.6451L23.0849 14.9839C23.2872 14.3767 22.8354 13.7499 22.1955 13.7499H18.75V11.2499C18.75 10.6249 19.375 9.9999 20 9.9999H22.5C23.1904 9.9999 23.75 9.44025 23.75 8.7499V7.89241C23.75 7.48864 23.4921 7.12662 23.1016 7.02359C21.4631 6.59119 20 6.59119 20 6.59119C16.875 6.59119 15 8.7499 15 10.6249V13.7499H12.5C11.8097 13.7499 11.25 14.3095 11.25 14.9999V16.2499C11.25 16.9402 11.8096 17.4999 12.5 17.4999H15V26.25H5C4.30965 26.25 3.75 25.6904 3.75 25V5C3.75 4.30965 4.30965 3.75 5 3.75H25Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <form className="footer-contact-form" onSubmit={handleSubmit}>
            <div className="form-input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="footer-form-input"
                required
              />
            </div>

            <div className="form-input-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="footer-form-input"
                required
              />
            </div>

            <div className="form-textarea-field">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="footer-form-textarea"
                required
                rows="4"
              />
              <svg className="textarea-resize-handle" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="#979797"/>
              </svg>
            </div>

            <button type="submit" className="footer-submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom-section">
        <div className="footer-copyright">
          ©2025 Aadiswan Info Consultants Pvt. Ltd.
        </div>
        <div className="footer-legal-links">
          <a href="/terms" className="footer-legal-link">Terms of Service</a>
          <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
