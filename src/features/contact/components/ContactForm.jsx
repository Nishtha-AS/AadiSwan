import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    message: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-info">
          <h2 className="contact-form-title">Get In Touch</h2>
          <p className="contact-form-description">
            Ready to transform your credit lifecycle automation? Let's discuss how CredPro can help your organization.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:contactus@aadiswan.com">contactus@aadiswan.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:+919971777097">+91-9971777097</a>
            </div>
            <div className="contact-item">
              <strong>Address:</strong>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-field">
                <label className="field-label" htmlFor="name">Name*</label>
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

              <div className="input-field">
                <label className="field-label" htmlFor="email">Email*</label>
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

            <div className="form-row">
              <div className="input-field">
                <label className="field-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-field">
                <label className="field-label" htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="textarea-field">
              <label className="field-label" htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
